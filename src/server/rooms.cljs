(ns moomoo.rooms
  (:require [cljs.nodejs :as nodejs]
            [cljs.reader :as reader]
            [clojure.string :as string]
            [moomoo.config :as config]
            [cognitect.transit :as transit]))

(defonce fs (nodejs/require "fs"))
(defonce base64-arraybuffer (nodejs/require "base64-arraybuffer"))
(defonce js-uuid (nodejs/require "uuid"))
(defonce redis-client (.createClient (nodejs/require "redis")))
(defonce redis-lua-loader (nodejs/require "redis-lua-loader"))
(defonce redis-lua (redis-lua-loader. redis-client #js {:src "./redis"}))

(defn redis-room-prefix [room-id suffix]
  (str "room:" room-id ":" suffix))

(defn set-user-id [socket-id user-id callback]
  (.set redis-client (str "socket:" socket-id ":user-id") user-id
    (fn [_ _]
      (.set redis-client (str "users:" user-id ":socket-id") socket-id
        (fn [_ _]
          (callback))))))

(defn get-user-id-from-socket [socket-id callback]
  (.get redis-client (str "socket:" socket-id ":user-id")
    (fn [_ reply]
      (callback reply))))

(defn set-waiting-to-start-flag [room-id callback]
  (.set redis-client (redis-room-prefix room-id "waiting-to-start?") "true"
    (fn [err reply]
      (callback))))

(defn unset-waiting-to-start-flag [room-id callback]
  (.set redis-client (redis-room-prefix room-id "waiting-to-start?") "false"
    (fn [err reply]
      (callback))))

(defn is-waiting-to-start? [room-id callback]
  (.get redis-client (redis-room-prefix room-id "waiting-to-start?")
    (fn [err reply]
      (if (= reply "true")
        (callback true)
        (callback false)))))

(defn set-delete-flag [room-id callback]
  (.set redis-client (redis-room-prefix room-id "deleted?") "true"
    (fn [err reply]
      (callback))))

(defn unset-delete-flag [room-id callback]
  (.set redis-client (redis-room-prefix room-id "deleted?") "false"
    (fn [err reply]
      (callback))))

(defn get-delete-flag [room-id callback]
  (.get redis-client (redis-room-prefix room-id "deleted?")
    (fn [err reply]
      (if (= "true" reply)
        (callback true)
        (callback false)))))

(defn set-username [room id username callback]
  (.hset redis-client (redis-room-prefix room "users") id username
    (fn [err reply]
      (.set redis-client (str "users:" id) room callback))))

(defn get-username [room id callback]
  (.hget redis-client (redis-room-prefix room "users") id
    (fn [err reply]
      (if-not (nil? reply)
        (callback (.toString reply))
        (callback nil)))))

(defn get-all-users [room callback]
  ((.scriptWrap redis-lua "getAllUsers") 0 room
    (fn [err reply]
      (let [users_socket_ids (js->clj (first reply))
            users-muted (js->clj (last reply))
            users-map (apply hash-map (map-indexed (fn [i item]
                                                     (if (odd? i)
                                                       {:name item
                                                        :muted (if (= "true" (users-muted i))
                                                                 true
                                                                 false)}
                                                       item))
                                                   users_socket_ids))]
        (callback users-map)))))

(defn get-num-of-users [room callback]
  (.hlen redis-client (redis-room-prefix room "users")
    (fn [err reply]
      (callback reply))))

(defn get-room-from-user-id [id callback]
  (.get redis-client (str "users:" id) #(callback %2)))

(defn delete-user [socket-id id callback]
  (.get redis-client (str "users:" id)
    (fn [err reply]
      (if-not (nil? reply)
        (let [room (.toString reply)]
          (.hdel redis-client (redis-room-prefix room "users") id
            (fn []
              (.del redis-client (str "socket:" socket-id ":user-id")
                (fn []
                  (.del redis-client (str "users:" id ":muted?")
                    (fn []
                      (.del redis-client (str "users:" id) callback))))))))))))

(defn disconnect [socket-id callback]
  (get-user-id-from-socket socket-id
    (fn [user-id]
      (.get redis-client (str "users:" user-id)
        (fn [err reply]
          (if-not (nil? reply)
            (delete-user socket-id user-id #(callback reply))
            (callback)))))))

(defn does-room-exist? [room callback]
  (.get redis-client (redis-room-prefix room "current-track")
    (fn [err reply]
      (if (nil? reply)
        (callback false)
        (callback true)))))

(defn init-room [room callback]
  (.set redis-client (redis-room-prefix room "current-track") 0
    (fn []
      (.set redis-client (redis-room-prefix room "playing?") "true"
        (fn []
          (callback))))))

(defn get-current-track [room callback]
  (.get redis-client (redis-room-prefix room "current-track")
    (fn [err reply]
      (callback (js/parseInt reply)))))

(defn get-current-track-id [room callback]
  (get-current-track room
    (fn [current-track-num]
      (.hget redis-client (redis-room-prefix room "track-order") current-track-num
        (fn [err track-id]
          (callback track-id))))))

(defn is-playing? [room callback]
  (.get redis-client (redis-room-prefix room "playing?")
    (fn [err reply]
      (if (= "true" reply)
        (callback true)
        (callback false)))))

(defn set-track-position [room track-id position callback]
  (.hset redis-client (redis-room-prefix room "track-order") position track-id
    (fn []
      (callback))))

(defn set-current-track-position [room position callback]
  (let [writer (transit/writer :json-verbose)
        track-position-info {:position position
                             :start-time (.now js/Date)}]
  (.set redis-client (redis-room-prefix room "track-position")
                     (transit/write writer track-position-info)
    (fn [err reply]
      (callback track-position-info)))))

(defn get-current-track-position [room callback]
 (let [reader (transit/reader :json-verbose)]
   (.get redis-client (redis-room-prefix room "track-position")
     (fn [err reply]
       (callback (transit/read reader reply))))))

(defn pause-current-track [room position callback]
  (let [writer (transit/writer :json-verbose)]
    (.set redis-client (redis-room-prefix room "track-position")
                       (transit/write writer {:position position
                                              :start-time (.now js/Date)})
      (fn [err reply]
        (.set redis-client (redis-room-prefix room "playing?") "false"
          (fn [err reply]
            (callback)))))))

(defn resume-current-track [room callback]
  (let [reader (transit/reader :json-verbose)]
    (.get redis-client (redis-room-prefix room "track-position")
      (fn [err reply]
        (let [old-track-position-info (transit/read reader reply)
              new-track-position-info (merge old-track-position-info {:start-time (.now js/Date)})
              writer (transit/writer :json-verbose)]
          (.set redis-client (redis-room-prefix room "track-position")
                             (transit/write writer new-track-position-info)
            (fn []
              (.set redis-client (redis-room-prefix room "playing?") "true"
                (fn []
                  (callback))))))))))

(defn has-track-started? [room callback]
  (.get redis-client (redis-room-prefix room "started?")
    (fn [err reply]
      (if (= "true" reply)
        (callback true)
        (callback false)))))

(defn start-current-track [room callback]
  (println "Starting current track")
  (.set redis-client (redis-room-prefix room "started?") "true"
    (fn []
      (set-current-track-position room 0
        (fn [track-position-info]
          (callback track-position-info))))))

(defn change-current-track-position [room position callback]
  (letfn [(change-pos []
            (let [writer (transit/writer :json-verbose)]
              (.set redis-client (redis-room-prefix room "track-position")
                                 (transit/write writer {:position position
                                                        :start-time (.now js/Date)})
                (fn []
                  (callback)))))]
    (has-track-started? room
      (fn [started?]
        (if started?
          (change-pos)
          (.set redis-client (redis-room-prefix room "started?") "true" change-pos))))))

(defn get-num-of-tracks [room callback]
  (println "Calling get-num-of-tracks")
  (.hlen redis-client (redis-room-prefix room "music-info")
    (fn [err reply]
      (callback reply))))

(defn set-music-info [track-id
                      file-hash
                      user-id
                      callback]
  (get-room-from-user-id user-id
    (fn [room]
      (get-username room user-id
        (fn [username]
          (get-num-of-tracks room
            (fn [track-num]
              (.hset redis-client (redis-room-prefix room "music-info")
                                  track-id
                                  file-hash
                (fn []
                  (.set redis-client (str "track:" track-id ":uploader") user-id
                    (fn []
                      (set-track-position room track-id track-num
                        (fn []
                          (callback))))))))))))))

(defn set-music-info-from-hash [track-id file-hash socket-id callback]
  (get-room-from-user-id socket-id
    (fn [room-id]
      (get-username room-id socket-id
        (fn [username]
          (get-num-of-tracks room-id
            (fn [track-num]
              (.hset redis-client (redis-room-prefix room-id "music-info")
                                  track-id
                                  file-hash
                (fn []
                  (.set redis-client (str "track:" track-id ":uploader") username
                    (fn []

                      (.incr redis-client (str "file-hash:" file-hash ":num-of-tracks")
                        (fn []
                          (set-track-position room-id track-id track-num
                            (fn []
                              (.get redis-client (str "file-hash:" file-hash)
                                (fn [err music-info-reply]
                                  (let [reader (transit/reader :json-verbose)
                                        music-info-json (transit/read reader music-info-reply)
                                        music-info (js->clj music-info-json)]
                                    (callback music-info)))))))))))))))))))

(defn get-music-file [room track-id callback]
  (.hget redis-client (redis-room-prefix room "music-info") track-id
    (fn [err file-hash]
      (.get redis-client (str "file-hash:" file-hash ":file")
        (fn [err reply]
          (callback reply))))))

(defn get-track-id-from-position [room position callback]
  (.hget redis-client (redis-room-prefix room "track-order") position
    (fn [err reply]
      (callback reply))))

(defn get-current-sound-id [room callback]
  (.get redis-client (redis-room-prefix room "current-sound")
    (fn [err reply]
      (callback reply))))

(defn client-sync [room-id sync-command user-id callback]
  (get-num-of-users room-id
    (fn [num-users]
      (.lpush redis-client (redis-room-prefix room-id sync-command) user-id
        (fn [err length]
          (callback (= length num-users)))))))

(defn delete-client-sync [room-id sync-command callback]
  (.del redis-client (redis-room-prefix room-id sync-command)
    (callback)))

(defn clear-ready-to-start [room callback]
  (.del redis-client (redis-room-prefix room "sync-start")
    (callback)))

(defn clear-track-complete [room callback]
  (.del redis-client (redis-room-prefix room "track-complete")
    (callback)))

(defn next-track [room callback]
  (letfn [(change-to-track-num [track-num]
            (println "track-num:" track-num)
            (get-track-id-from-position room track-num
              (fn [track-id]
                (let [sound-id (.v4 js-uuid)]
                  (.set redis-client (redis-room-prefix room "current-sound") sound-id
                    (fn [err reply]
                      (callback track-id sound-id)))))))]
    (.get redis-client (redis-room-prefix room "current-track")
      (fn [err current-track-num]
        (get-delete-flag room
          (fn [delete-flag?]
            (if delete-flag?
              (do
                (unset-delete-flag room
                  (fn []
                    (get-num-of-tracks room
                      (fn [num-of-tracks]
                        (println "Num-of-tracks:" num-of-tracks)
                        (if (> num-of-tracks 0)
                          (if (>= current-track-num (- num-of-tracks 1))
                            (.decr redis-client (redis-room-prefix room "current-track")
                              (fn [err track-num]
                                (set-current-track-position room -1
                                  (fn []
                                    (change-to-track-num track-num)))))
                            (change-to-track-num current-track-num))
                          (callback nil nil)))))))
              (get-num-of-tracks room
                (fn [num-of-tracks]
                  (if (>= current-track-num (- num-of-tracks 1))
                    (set-current-track-position room -1
                      (fn []
                        (callback nil nil)))
                    (.incr redis-client (redis-room-prefix room "current-track")
                      (fn [err track-num]
                        (change-to-track-num track-num)))))))))))))

(defn get-track-id-hashes [room-id callback]
  ((.scriptWrap redis-lua "getTrackInfo") 0 room-id
    (fn [err reply]
      (let [reply (js->clj reply)
            track-id-hashes reply
            track-id-hashes-map (apply hash-map track-id-hashes)]
        (callback (clj->js track-id-hashes-map))))))

(defn get-all-music-info [room-id callback]
  ((.scriptWrap redis-lua "getAllMusicInfo") 0 room-id
    (fn [err music-info-reply]
      (let [info (js->clj music-info-reply)
            reader (transit/reader :json-verbose)
            info-to-send (map #(transit/read reader %1) info)]
        (if (empty? info-to-send)
          (callback nil nil)
          (get-track-id-hashes room-id
            (fn [track-id-hashes]
              (callback track-id-hashes (clj->js info-to-send)))))))))

(defn track-complete [room callback]
  (.set redis-client (redis-room-prefix room "started?") "false"
    (fn [err reply]
      (callback))))

(defn start-looping [room callback]
  (.set redis-client (redis-room-prefix room "looping?") "true"
    (fn [err reply]
      (callback))))

(defn stop-looping [room callback]
  (.set redis-client (redis-room-prefix room "looping?") "false"
    (fn [err reply]
      (callback))))

(defn is-looping? [room callback]
  (.get redis-client (redis-room-prefix room "looping?")
    (fn [err reply]
      (if (= reply "true")
        (callback true)
        (callback false)))))

(defn handle-disconnect [room callback]
  (let [lua-fn (.scriptWrap redis-lua "handleDisconnect")]
    (lua-fn 0 room
      (fn [err reply]
        (let [files-to-delete (js->clj reply)]
          (println "Deleting files: " files-to-delete)
          (doseq [file files-to-delete] (if-not (nil? file) (.unlink fs file)))
          (callback))))))

(defn clear-songs [room-id callback]
  (.del redis-client (redis-room-prefix room-id "music-info")
    (fn [err reply]
      (.del redis-client (redis-room-prefix room-id "music-files")
        (fn [err reply]
          (.del redis-client  (redis-room-prefix room-id "track-order")
            (fn [err reply]
              (.del redis-client (redis-room-prefix room-id "current-track")
                (fn [err reply]
                  (.del redis-client (redis-room-prefix room-id "current-sound")
                    (.del redis-client (redis-room-prefix room-id "sync-start")
                      (fn [err reply]
                        (.set redis-client (redis-room-prefix room-id "playing?") "false"
                          (fn [err reply]
                            (.set redis-client (redis-room-prefix room-id "started?") "false"
                              (fn [err reply]
                                (callback)))))))))))))))))

(defn delete-track [room-id track-id callback]
  (let [lua-fn (.scriptWrap redis-lua "deleteTrack")]
    (lua-fn 0 room-id track-id
      (fn [err next-track-id]
        (println "NEXT TRACK " next-track-id)
        (callback (nth next-track-id 0))))))

(defn get-track-order [room-id callback]
  (.hgetall redis-client (redis-room-prefix room-id "track-order")
    (fn [err reply]
      (let [track-order-data (js->clj reply)
            indexed-data (map-indexed (fn [idx v] [idx v]) track-order-data)
            keys-indexed (map (fn [e] [(first e) (first (last e))]) indexed-data)
            vals-indexed (map (fn [e] [(first e) (last (last e))]) indexed-data)
            sorted-keys-indexed (sort #(compare (reader/read-string (last %1))
                                                (reader/read-string (last %2)))
                                      keys-indexed)
            track-order (map (fn [e]
                               (last (first (filter #(= (first e) (first %1))
                                                    vals-indexed))))
                             sorted-keys-indexed)]

        (callback (clj->js track-order))))))

(defn change-track [room track-num sound-id callback]
  (println "Changing track in room " room
           "to" track-num "with sound-id" sound-id)
  ((.scriptWrap redis-lua "changeTrack")
    0 room track-num sound-id
    (fn [err reply]
      (if-not (nil? reply)
        (callback reply)))))

(defn mute-user [socket-id callback]
  (.set redis-client (str "users:" socket-id ":muted?") "true"
    (fn []
      (callback))))

(defn unmute-user [socket-id callback]
  (.set redis-client (str "users:" socket-id ":muted?") "false"
    (fn []
      (callback))))

(defn get-uploader-id [track-id callback]
  (.get redis-client (str "track:" track-id ":uploader")
    (fn [err reply]
      (callback reply))))

(defn cancel-upload [track-id callback]
  (.del redis-client (str "track:" track-id ":uploader")
    (fn []
      (callback))))

(defn change-track-order [room-id track-id destination-track-num callback]
  ((.scriptWrap redis-lua "changeTrackOrder") 0 room-id track-id destination-track-num
     (fn [err reply]
       (get-track-order room-id
         (fn [track-order]
           (callback track-order))))))

; cooldown time in ms
(def cooldown-time 50)

(defn cooldown [room-id title callback]
  ((.scriptWrap redis-lua "controlCooldown") 0 room-id title (str (.now js/Date)) (str cooldown-time)
     (fn [err reply]
       (println reply)
       (if (= 1 reply)
         (callback true)
         (callback false)))))

(defn is-mime-type-allowed? [room mime-type]
  (if (nil? (get ((config/data "rooms") room) "allowed-mime-types"))
    (or (= mime-type "audio/mpeg")
        (= mime-type "audio/x-wav"))
    true))

(defn allowed-file-extensions [room]
  (let [allowed-file-extensions (get ((config/data "rooms") room) "allowed-file-extensions")]
    (if (nil? allowed-file-extensions)
      [".mp3" ".wav"]
      (js->clj allowed-file-extensions))))

(defn is-file-extension-allowed? [room file-extension]
  (if (nil? (get ((config/data "rooms") room) "allowed-file-extensions"))
    (or (= file-extension ".mp3")
        (= file-extension ".wav"))
    true))

(defn get-uploads-order [room-id callback]
  (.lrange redis-client (str "room:" room-id ":uploads-order") 0 -1
    (fn [_ uploads-order]
      (callback (js->clj uploads-order)))))


(defn add-new-upload [room-id user-id upload-id callback]
  (.set redis-client (str "track:" upload-id ":uploader") user-id
    (fn []
      (.rpush redis-client (str "room:" room-id ":uploads-order") upload-id
        (fn []
          (get-uploads-order room-id callback))))))

(defn upload-complete [room-id upload-id callback]
  (.lrem redis-client (str "room:" room-id ":uploads-order") 0 upload-id
    (fn []
      (get-uploads-order room-id callback))))

