(ns moomoo.rooms-test
  (:require-macros [cemerick.cljs.test
                    :refer (is deftest with-test run-tests testing test-var
                            done use-fixtures)])
  (:require [cemerick.cljs.test :as t]
            [clojure.string :as string]
            [cognitect.transit :as transit]
            [cljs.nodejs :as nodejs]
            [moomoo.rooms :as rooms]))

(def path (nodejs/require "path"))

(defn clear-redis-fixture []
  (.flushall rooms/redis-client))

(use-fixtures :once clear-redis-fixture)

(deftest ^:async get-username
  (let [room "test-room"
        id   "test"
        user "Ricky"]
    (rooms/set-username room id user
      #(rooms/get-username room id
        (fn [reply]
          (is (= user reply))
          (done))))))

(deftest ^:async get-all-users
  (let [room "test2"
        user-id1 "One"
        user-id2 "Two"
        user1 "Paul"
        user2 "Lee"]
    (rooms/set-username room user-id1 user1
      (fn []
        (rooms/set-username room user-id2 user2
          (fn []
            (rooms/get-all-users room
              (fn [reply]
                (is (= reply [user1 user2]))
                (done)))))))))

(deftest ^:async get-room-from-user-id
  (let [id "1"
        n "name"
        room "justatest"]
    (rooms/set-username room id n
      #(rooms/get-room-from-user-id id
        (fn [reply]
          (is (= room reply))
          (done))))))

(deftest ^:async delete-user
  (let [room "room:testfoo"
        id   "test"
        n    "foo"]
    (rooms/set-username room id n
      (fn []
        (rooms/delete-user id
          (fn []
            (rooms/get-username room id
              (fn [reply]
                (is (nil? reply))
                (done)))))))))

(deftest ^:async disconnect-with-signed-in-user
  (let [room "r"
        socket-id "test-socket-id"
        username "test-username"]
    (rooms/set-username room socket-id username
      (fn []
        (rooms/disconnect socket-id
          (fn [room-id]
            (is (= room-id room))
            (rooms/get-username room socket-id
              (fn [reply]
                (is (= nil reply))
                (rooms/get-room-from-user-id socket-id
                  (fn [reply]
                    (is (= nil reply))
                    (done)))))))))))

; just tests to make sure it doesn't crash/error
(deftest disconnect-with-not-signed-in-user
  (rooms/disconnect "foo" nil))

(deftest ^:async init-room
  (let [room "init-room-test"]
    (rooms/does-room-exist? room
      (fn [reply]
        (is (= false reply))
        (rooms/init-room room
          (fn []
            (rooms/does-room-exist? room
              (fn [reply]
                (is (= true reply))
                (rooms/get-current-track room
                  (fn [current-track]
                    (is (= 0 current-track))
                    (rooms/is-playing? room
                      (fn [reply]
                        (is (= false reply))
                        (done)))))))))))))

(deftest ^:async start-sync
  (let [user1 "user1"
        user2 "user2"
        user1-socket "user1-socket"
        user2-socket "user2-socket"
        room "test-start-sync-room"]
    (rooms/set-username room user1-socket user1
      (fn []
        (rooms/set-username room user2-socket user2
          (fn []
            (rooms/user-ready-to-start user1-socket
              (fn [num-users]
                (is (= 1 num-users))
                (rooms/user-ready-to-start user2-socket
                  (fn [num-users]
                    (is (= 2 num-users))
                    (done)))))))))))

(deftest ^:async get-num-of-users
  (let [user1 "user1"
        user2 "user2"
        user1-socket "user1-socket"
        user2-socket "user2-socket"
        room "test-num-of-users1"]
    (rooms/set-username room user1-socket user1
      (fn []
        (rooms/get-num-of-users room
          (fn [num-users]
            (is (= 1 num-users))
        (rooms/set-username room user2-socket user2
          (fn []
            (rooms/get-num-of-users room
              (fn [num-users]
                (is (= 2 num-users))
                  (done)))))))))))


(def project-dir js/PROJECT_DIR)
(deftest ^:async change-track
  (let [project-dir project-dir
        music-file-path "test/server/test.mp3"
        absolute-file-path (str project-dir "/" music-file-path)
        track-id "track-id1"
        socket-id "socket-id1"
        room-id "change-track-test-room1"
        original-file-name "original.mp3"
        username "UploadMan"]
    (rooms/set-username room-id socket-id username
      (fn []
        (rooms/set-music-info absolute-file-path
                              track-id
                              original-file-name
                              socket-id
          (fn [music-info]
            (rooms/change-track room-id 0
              (fn [track-id-reply]
                (is (= track-id track-id-reply))
                (done)))))))))

(deftest ^:async set-music-file-info
  (let [project-dir project-dir
        music-file-path "test/server/test.mp3"
        absolute-file-path (str project-dir "/" music-file-path)
        track-id "track-id1"
        socket-id "socket-id1"
        room-id "music-room1"
        original-file-name "original.mp3"
        username "UploadMan"]
    (rooms/set-username room-id socket-id username
      (fn []
        (rooms/set-music-info absolute-file-path
                              track-id
                              original-file-name
                              socket-id
          (fn [music-info]
            (let [tags     (:tags music-info)
                  uploader (:username music-info)
                  original (:originalfilename music-info)]
              (is (= "Test Title"  (get tags "title")))
              (is (= "Test Album"  (get tags "album")))
              (is (= "Test Artist" (get tags "artist")))
              (is (= username uploader))
              (is (= original-file-name original)))

            (rooms/get-music-info room-id track-id
              (fn [music-info-reply]
                (let [writer (transit/writer :json)]
                  (is (= music-info-reply (transit/write writer music-info))))
                (rooms/get-music-file room-id track-id
                  (fn [file]
                    (is (= file absolute-file-path))

                    (rooms/get-track-id-from-position room-id 0
                      (fn [track-id-from-pos]
                        (is (= track-id-from-pos track-id))
                        (done)))))))))))))

(deftest ^:async set-music-file-info-with-image-tag
  (let [project-dir project-dir
        music-file-path "test/server/test-with-image-tag.mp3"
        absolute-file-path (str project-dir "/" music-file-path)
        track-id "track-id1"
        socket-id "socket-id1"
        room-id "music-room1"
        original-file-name "original.mp3"
        username "UploadMan"]
    (rooms/set-username room-id socket-id username
      (fn []
        (rooms/set-music-info absolute-file-path
                              track-id
                              original-file-name
                              socket-id
          (fn [music-info]
            (let [tags     (:tags music-info)
                  uploader (:username music-info)
                  original (:originalfilename music-info)]
              (is (= "Test Title"  (get tags "title")))
              (is (= "Test Album"  (get tags "album")))
              (is (= "Test Artist" (get tags "artist")))
              (is (= username uploader))
              (is (= original-file-name original)))

            (rooms/get-music-info room-id track-id
              (fn [music-info-reply]
                (let [writer (transit/writer :json)]
                  (is (= music-info-reply (transit/write writer music-info))))
                (rooms/get-music-file room-id track-id
                  (fn [file]
                    (is (= file absolute-file-path))
                    (done)))))))))))

