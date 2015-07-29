(ns moomoo.rooms
  (:require [cljs.nodejs :as nodejs]
            [clojure.string :as string]))

(def redis-client (.createClient (nodejs/require "redis")))

(defn set-username [room id username]
  (.hset redis-client (string/join ["room:" room ":users"]) id username)
  (.set redis-client (string/join ["users:" id]) room))

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
      (let [room (.toString reply)]
        (.hdel redis-client (str "room:" room ":users") id callback))
      (.del redis-client (str "users:" id)))))
