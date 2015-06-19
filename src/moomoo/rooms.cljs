(ns moomoo.rooms
  (:require [cljs.nodejs :as nodejs]
            [clojure.string :as string]))

(def redis_client (nodejs/require "redis"))

(defn set-username [room id username]
  (.hset redis_client (string/join room ":users") id username))
