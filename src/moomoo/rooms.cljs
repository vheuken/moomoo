(ns moomoo.rooms
  (:require [cljs.nodejs :as nodejs]
            [clojure.string :as string]))

(def redis-client (.createClient (nodejs/require "redis")))

(defn set-username [room id username]
  (.hset redis-client (string/join room ":users") id username))

(defn get-username [room id callback]
  (.hget redis-client (string/join room ":users") id callback))
