(ns moomoo.rooms
  (:require [cljs.nodejs :as nodejs]
            [cognitect.transit :as transit]
            [clojure.string :as string]))

(def id3 (nodejs/require "id3js"))
(def base64-arraybuffer (nodejs/require "base64-arraybuffer"))
(def redis-client (.createClient (nodejs/require "redis")))

(defn set-username [room id username callback]
  (.hset redis-client (string/join ["room:" room ":users"]) id username
    (fn [err reply]
      (.set redis-client (string/join ["users:" id]) room callback))))

(defn get-username [room id callback]
  (.hget redis-client (string/join ["room:" room ":users"]) id
    (fn [err reply]
      (if-not (nil? reply)
        (callback (.toString reply))
        (callback nil)))))

(defn get-all-users [room callback]
  (letfn [(users-to-list [reply]
            (let [user-hash (js->clj reply)]
              (vec (map #(val %) user-hash))))]
  (.hgetall redis-client (string/join ["room:" room ":users"])
    (fn [err reply]
      (callback (users-to-list reply))))))

(defn get-num-of-users [room callback]
  (.hlen redis-client (str "room:" room ":users")
    (fn [err reply]
      (callback reply))))

(defn get-room-from-user-id [id callback]
  (.get redis-client (str "users:" id) #(callback %2)))

(defn delete-user [id callback]
  (.get redis-client (str "users:" id)
    (fn [err reply]
      (if-not (nil? reply)
        (let [room (.toString reply)]
          (.hdel redis-client (str "room:" room ":users") id
            #(.del redis-client (str "users:" id) callback)))))))

(defn disconnect [socket-id callback]
  (.get redis-client (str "users:" socket-id)
    (fn [err reply]
      (if-not (nil? reply)
        (delete-user socket-id #(callback reply))
        callback))))

(defn image-tags-to-base64 [tags]
  (let [image-tag (get (get tags "v2") "image")
        image-data (get image-tag "data")]
    (if-not (nil? image-tag)
      (merge tags {"v2" (merge image-tag {"data" (.encode base64-arraybuffer image-data)})})
      tags)))

(defn does-room-exist? [room callback]
  (.get redis-client (str "room:" room ":current-track")
    (fn [err reply]
      (if (nil? reply)
        (callback false)
        (callback true)))))

(defn init-room [room callback]
  (.set redis-client (str "room:" room ":current-track") 0
    (fn []
      (.set redis-client (str "room:" room ":playing?") "false"
        (fn []
          (callback))))))

(defn get-current-track [room callback]
  (.get redis-client (str "room:" room ":current-track")
    (fn [err reply]
      (callback (js/parseInt reply)))))

(defn is-playing? [room callback]
  (.get redis-client (str "room:" room ":playing?")
    (fn [err reply]
      (if (= "true" reply)
        (callback true)
        (callback false)))))

(defn set-track-position [room track-id position callback]
  (.hset redis-client (str "room:" room ":track-order") position track-id
    (fn []
      (callback))))

(defn set-current-track-position [room position callback]
  (let [writer (transit/writer :json)
        track-position-info {:position position
                             :starttime (.now js/Date)}]
  (.set redis-client (str "room:" room ":track-position")
                     (transit/write writer track-position-info)
    (fn [err reply]
      (callback track-position-info)))))

(defn get-current-track-position [room callback]
 (let [reader (transit/reader :json)]
   (.get redis-client (str "room:" room ":track-position")
     (fn [err reply]
       (callback (transit/read reader reply))))))

(defn pause-current-track [room position callback]
  (let [writer (transit/writer :json)]
    (.set redis-client (str "room:" room ":track-position")
                       (transit/write writer {:position position
                                              :start-time (.now js/Date)})
      (fn [err reply]
        (.set redis-client (str "room:" room ":playing?") "false"
          (fn [err reply]
            (callback)))))))

(defn resume-current-track [room callback]
  (let [reader (transit/reader :json)]
    (.get redis-client (str "room:" room ":track-position")
      (fn [err reply]
        (let [old-track-position-info (transit/read reader reply)
              new-track-position-info (merge old-track-position-info {:start-time (.now js/Date)})
              writer (transit/writer :json)]
          (.set redis-client (str "room:" room ":track-position")
                             (transit/write writer new-track-position-info)
            (fn []
              (.set redis-client (str "room:" room ":playing?") "true"
                (fn []
                  (callback))))))))))

(defn change-current-track-position [room position callback]
  (let [writer (transit/writer :json)]
    (.set redis-client (str "room:" room ":track-position")
                       (transit/write writer {:position position
                                              :start-time (.now js/Date)})
      (fn []
        (callback)))))

(defn get-num-of-tracks [room callback]
  (println "Calling get-num-of-tracks")
  (.hlen redis-client (str "room:" room ":music-info")
    (fn [err reply]
      (println "HI!!!")
      (callback reply))))

(defn set-music-info [absolute-file-path
                      track-id
                      original-file-name
                      socket-id
                      callback]
  (id3 #js {:file absolute-file-path
            :type id3.OPEN_LOCAL}
    (fn [err tags]
      (get-room-from-user-id socket-id
        (fn [room]
          (get-username room socket-id
            (fn [username]
              (get-num-of-tracks room
                (fn [track-num]
                  (let [tags (image-tags-to-base64 (js->clj tags))
                        writer (transit/writer :json)
                        music-info {:tags tags
                                    :username username
                                    :originalfilename original-file-name
                                    :id track-id
                                    :tracknum track-num}
                        music-info-json (transit/write writer music-info)]
                    (.hset redis-client (str "room:" room ":music-info")
                                        track-id
                                        music-info-json
                      (fn []
                        (.hset redis-client (str "room:" room ":music-files")
                                            track-id
                                            absolute-file-path
                          (fn [err reply]
                                (set-track-position room track-id track-num
                                  (fn []
                                    (callback music-info)))))))))))))))))

; TODO: Transit should translate this(?)
(defn get-music-info [room track-id callback]
  (.hget redis-client (str "room:" room ":music-info") track-id
    (fn [err reply]
      (callback reply))))

(defn get-music-file [room track-id callback]
  (.hget redis-client (str "room:" room ":music-files") track-id
    (fn [err reply]
      (callback reply))))

(defn get-track-id-from-position [room position callback]
  (.hget redis-client (str "room:" room ":track-order") position
    (fn [err reply]
      (callback reply))))

(defn change-track [room position callback]
  (.hget redis-client (str "room:" room ":track-order") position
    (fn [err track-id]
      (.set redis-client (str "room:" room ":current-track") position
        (fn []
          (callback track-id))))))

(defn user-ready-to-start [socket-id callback]
  (get-room-from-user-id socket-id
    (fn [room]
      (.lpush redis-client (str "room:" room ":sync-start") socket-id
        (fn [err reply]
          (callback reply))))))

(defn user-track-complete [socket-id callback]
  (get-room-from-user-id socket-id
    (fn [room]
      (.lpush redis-client (str "room:" room ":track-complete") socket-id
        (fn [err reply]
          (callback reply))))))

(defn clear-ready-to-start [room callback]
  (.del redis-client (str "room:" room ":sync-start")
    (callback)))

(defn clear-track-complete [room callback]
  (.del redis-client (str "room:" room ":track-complete")
    (callback)))

(defn next-track [room callback]
  (.get redis-client (str "room:" room ":current-track")
    (fn [err current-track-num]
      (println "CURRENT_TRACK_NUM" current-track-num)
      (get-num-of-tracks room
        (fn [num-of-tracks]
          (println "NUM_OF_TRACKS" num-of-tracks)
          (if (>= current-track-num num-of-tracks)
            (callback nil)
          (.incr redis-client (str "room:" room ":current-track")
            (fn [err track-num]
              (println "TRACK NUM: " track-num)
              (get-track-id-from-position room track-num
                (fn [track-id]
                  (println "TRACK-ID " track-id)
                    (callback track-id)))))))))))

(defn get-all-music-info [room-id callback]
  (.hgetall redis-client (str "room:" room-id ":music-info")
    (fn [err music-info-reply]
      (let [info (vals (js->clj music-info-reply))
            reader (transit/reader :json)
            info-to-send (map #(transit/read reader %1) info)]
        (if (empty? info-to-send)
          (callback nil)
          (callback  (clj->js info-to-send)))))))

(defn has-track-started? [room callback]
  (.get redis-client (str "room:" room ":started?")
    (fn [err reply]
      (println reply)
      (if (= "true" reply)
        (callback true)
        (callback false)))))

(defn start-current-track [room callback]
  (println "STARTING!")
  (.set redis-client (str "room:" room ":started?") "true"
    (fn []
      (set-current-track-position room 0
        (fn [track-position-info]
          (callback track-position-info))))))

(defn track-complete [room callback]
  (.set redis-client (str "room:" room ":started?") "false"
    (fn [err reply]
      (callback))))

