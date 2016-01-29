(ns moomoo.file-hash
  (:require [cljs.nodejs :as nodejs]
            [clojure.string :as string]
            [cognitect.transit :as transit]))

(defonce redis-client (.createClient (nodejs/require "redis")))
(defonce redis-lua-loader (nodejs/require "redis-lua-loader"))
(defonce redis-lua (redis-lua-loader. redis-client #js {:src "./redis"}))
(defonce mhash (nodejs/require "mhash"))
(defonce mm (nodejs/require "musicmetadata"))
(defonce fs (nodejs/require "fs"))
(defonce album-art-directory "public/images/albums")

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

(defn handle-album-art [tags file-hash callback]
  (let [pictures (get tags "picture")]
    (if (empty? pictures)
      (callback (dissoc tags "picture"))
      (let [picture (first (get tags "picture"))
            picture-format (get picture "format")
            picture-data   (get picture "data")
            filename  (subs file-hash 0 7)
            file-path (str album-art-directory "/" filename "." picture-format)]
        (println "Saving album art to:" file-path)
        (.writeFile fs file-path picture-data)
        (.set redis-client (str "file-hash:" file-hash ":picture") file-path
          (fn []
            (callback (merge {"picture" (string/replace file-path "public" "")}
                             (dissoc tags "picture")))))))))

(defn handle-new-file
  ([file-path callback]
    (.readFile fs file-path
      (fn [err buf]
        (let [file-hash (get-hash-from-buffer buf)]
          (handle-new-file file-path file-hash "application/octet-stream" callback)))))

  ([file-path file-hash mime-type callback]
    (mm (.createReadStream fs file-path) #js {:duration true}
      (fn [err tags]
        (handle-album-art (js->clj tags) file-hash
          (fn [tags-without-album-art]
            (let [music-info {:tags tags-without-album-art
                              :mime mime-type
                              :filehash file-hash}
                  writer (transit/writer :json)
                  music-info-json (transit/write writer music-info)]
              (.set redis-client (str "file-hash:" file-hash) music-info-json
                (fn []
                  (.set redis-client (str "file-hash:" file-hash ":file")
                                     file-path
                    (fn []
                      (.incr redis-client (str "file-hash:" file-hash ":num-of-tracks")
                        (fn []
                          (callback file-hash music-info))))))))))))))
