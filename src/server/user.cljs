(ns moomoo.user
  (:require [cljs.nodejs :as node]))

(defonce redis-client (.createClient (node/require "redis")))

(defn set-user-id! [user-id socket-id callback]
  "Does not enforce unique user-id.
   Must use something guaranteed to be unique (like a UUID)"
  (.set redis-client (str "socket:" socket-id) user-id
    (fn []
      (.set redis-client
            (str "user:" user-id ":socket-id")
            socket-id
            #(callback)))))

(defn get-user-id [socket-id callback]
  (.get redis-client (str "socket:" socket-id) #(callback %2)))

(defn set-username! [user-id username callback]
  (.set redis-client (str "user:" user-id ":username") username #(callback)))

(defn get-username [user-id callback]
  (.get redis-client (str "user:" user-id ":username") #(callback %2)))

(defn get-socket-id [user-id callback]
  (.get redis-client (str "user:" user-id ":socket-id") #(callback %2)))

(defn delete! [user-id callback]
  (get-socket-id user-id
    (fn [socket-id]
      (.del redis-client (str "socket:" socket-id)
        (fn []
          (.del redis-client
                (str "user:" user-id ":socket-id")
                #(callback)))))))
