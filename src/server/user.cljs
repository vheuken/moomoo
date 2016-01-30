(ns moomoo.user
  (:require [cljs.nodejs :as node]))

(defonce redis-client (.createClient (node/require "redis")))

(defn add-user! [user-id socket-id username room-id callback]
  "Does not enforce unique user-id.
   Must use something guaranteed to be unique (like a UUID)"
  (.set redis-client (str "socket:" socket-id) user-id
    (fn []
      (.set redis-client (str "user:" user-id ":room-id") room-id
        (fn []
          (let [data #js {:username username
                          :socket   socket-id}
                data-json (.stringify js/JSON data)]
            (.hmset redis-client
                    (str "room:" room-id ":users")
                    user-id
                    data-json
                    #(callback))))))))

(defn get-user-id [socket-id callback]
  (.get redis-client (str "socket:" socket-id) #(callback %2)))

(defn get-room-id [user-id callback]
  (.get redis-client (str "user:" user-id ":room-id") #(callback %2)))

(defn get-username [user-id callback]
  (get-room-id user-id
    (fn [room-id]
      (.hget redis-client (str "room:" room-id ":users") user-id
        (fn [_ data-json]
          (let [data (.parse js/JSON data-json)
                username (.-username data)]
            (callback username)))))))

(defn get-socket-id [user-id callback]
  (get-room-id user-id
    (fn [room-id]
      (.hget redis-client (str "room:" room-id ":users") user-id
        (fn [_ data-json]
          (let [data (.parse js/JSON data-json)
                socket-id (if-not (nil? data)
                            (.-socket data))]
            (callback socket-id)))))))

(defn delete! [user-id callback]
  (get-socket-id user-id
    (fn [socket-id]
      (.del redis-client (str "socket:" socket-id)
        (fn []
          (get-room-id user-id
            (fn [room-id]
              (.del redis-client (str "user:" user-id ":room-id")
                (fn []
                  (.hdel redis-client
                         (str "room:" room-id ":users")
                         user-id
                         #(callback)))))))))))
