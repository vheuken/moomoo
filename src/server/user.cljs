(ns moomoo.user
  (:require [cljs.nodejs :as node]))

(defonce redis-client (.createClient (node/require "redis")))

(defn set-user-id! [user-id socket-id callback]
  (.set redis-client (str "socket:" socket-id) user-id #(callback)))

(defn get-user-id [socket-id callback]
  (.get redis-client (str "socket:" socket-id) #(callback %2)))
