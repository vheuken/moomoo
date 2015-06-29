(ns moomoo.rooms
  (:require [cljs.nodejs :as nodejs]
            [clojure.string :as string]))

(def redis-client (.createClient (nodejs/require "redis")))

(defn set-username [room id username]
  (.hset redis-client (string/join [room ":users"]) id username)
  (.set redis-client (string/join ["users:" id]) room))

(defn get-username [room id callback]
  (.hget redis-client (string/join [room ":users"]) id callback))

(defn get-all-users [room callback]
  (letfn [(users-to-list [err reply]
            (let [user-hash (js->clj reply)]
              (vec (map #(val %) user-hash))))]
  (.hgetall redis-client (string/join [room ":users"])
    (fn [err reply]
      (callback err (users-to-list err reply))))))
