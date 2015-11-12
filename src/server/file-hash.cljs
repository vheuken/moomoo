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

(defn get-hash-from-buffer [buffer]
  (mhash "md5" buffer))

(defn handle-new-file
  ([file-path callback]
    (.readFile fs file-path
      (fn [err buf]
        (let [file-hash (get-hash-from-buffer buf)]
          (handle-new-file file-path file-hash callback)))))

  ([file-path file-hash callback]
    (callback file-hash)))
