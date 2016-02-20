(ns moomoo.hashing
  (:require [cljs.nodejs :as node]))

(defonce redis-client (.createClient (node/require "redis")))

(defn check-hash [hash-str callback]
  (.get redis-client (str "hash:" hash-str)
    (fn [_ reply]
      (if (nil? reply)
        (callback false nil)
        (callback true reply)))))

(defn add-hash [hash-str file-path callback]
  (.set redis-client (str "hash:" hash-str) file-path
    (fn [_ _]
      (callback))))
