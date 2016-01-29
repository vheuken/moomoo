(ns moomoo.room
  (:require [cljs.nodejs :as node]))

(defonce redis-client (.createClient (node/require "redis")))

(defn add-user! [room-id user-id callback]
  (.lpush redis-client (str "room:" room-id ":users") user-id #(callback)))

(defn delete-user! [room-id user-id callback]
  (.lrem redis-client (str "room:" room-id ":users") 0 user-id #(callback)))

(defn get-users [room-id callback]
  (.lrange redis-client
           (str "room:" room-id ":users")
           0
           -1
           #(callback (js->clj %2))))
