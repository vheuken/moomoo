(ns moomoo.rooms-test
  (:require-macros [cemerick.cljs.test
                    :refer (is deftest with-test run-tests testing test-var
                            done use-fixtures)])
  (:require [cemerick.cljs.test :as t]
            [clojure.string :as string]
            [cljs.nodejs :as nodejs]
            [moomoo.rooms :as rooms]))

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

