(ns moomoo.rooms
  (:require [cljs.nodejs :as nodejs]
            [cognitect.transit :as transit]
            [clojure.string :as string]))

(def id3 (nodejs/require "id3js"))
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
              (let [writer (transit/writer :json)
                    music-info {:tags (js->clj tags)
                                :username username
                                :originalfilename original-file-name}
                    music-info-json (transit/write writer music-info)]
                (.hset redis-client (str "room:" room ":music-info")
                                    track-id
                                    music-info-json
                  (fn []
                    (.hset redis-client (str "room:" room ":music-files")
                                        track-id
                                        absolute-file-path
                      (fn [err reply]
                        (callback music-info)))))))))))))

; TODO: Transit should translate this
(defn get-music-info [room track-id callback]
  (.hget redis-client (str "room:" room ":music-info") track-id
    (fn [err reply]
      (callback reply))))

(defn get-music-file [room track-id callback]
  (.hget redis-client (str "room:" room ":music-files") track-id
    (fn [err reply]
      (callback reply))))
