(ns moomoo.upload
  (:require [cljs.nodejs :as node]))

(defonce redis-client (.createClient (node/require "redis")))

(defn add-new-upload [room-id user-id upload-id callback]
  (.set redis-client (str "track:" upload-id ":uploader") user-id
    (fn [_ _]
      (.rpush redis-client (str "room:" room-id ":uploads-order") upload-id
        (fn [_ _]
          (callback))))))

(defn get-uploads-order [room-id callback]
  (.lrange redis-client (str "room:" room-id ":uploads-order") 0 -1
    (fn [_ r]
      (if (nil? r)
        (callback [])
        (callback (js->clj r))))))

(defn get-uploader [upload-id callback]
  (.get redis-client (str "track:" upload-id ":uploader")
    (fn [_ r]
      (callback r))))
