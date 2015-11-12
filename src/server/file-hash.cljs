(ns moomoo.file-hash
  (:require [cljs.nodejs :as nodejs]))

(defonce redis-client (.createClient (nodejs/require "redis")))
(defonce redis-lua-loader (nodejs/require "redis-lua-loader"))
(defonce redis-lua (redis-lua-loader. redis-client #js {:src "./redis"}))
(defonce mhash (nodejs/require "mhash"))
(defonce fs (nodejs/require "fs"))

(defn file-hash-exists? [file-hash callback]
  ((.scriptWrap redis-lua "handleFileHash") 0 file-hash
    (fn [err reply]
      (println reply)
      (if (nil? reply)
        (do
          (println "File hash not found")
          (callback false))
        (do
          (println "File hash found!")
          (callback true))))))

(defn handle-new-file [file-path callback]
  (.readFile fs file-path
    (fn [err buf]
      (let [file-hash (mhash "md5" buf)]
        (callback file-hash)))))
