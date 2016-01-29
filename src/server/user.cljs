(ns moomoo.user
  (:require [cljs.nodejs :as node]))

(defonce redis-client (.createClient (node/require "redis")))

(defn set-user-id! [user-id socket-id callback]
  "Does not enforce unique user-id.
   Must use something guaranteed to be unique (like a UUID)"
  (.set redis-client (str "socket:" socket-id) user-id #(callback)))

(defn get-user-id [socket-id callback]
  (.get redis-client (str "socket:" socket-id) #(callback %2)))
