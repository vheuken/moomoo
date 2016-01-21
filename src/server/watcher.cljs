(ns moomoo.watcher
  (:require [cljs.nodejs :as nodejs]
            [clojure.string :as string]
            [moomoo.file-hash :as file-hash]))

(defonce watchr (nodejs/require "watchr"))
(defonce fs (nodejs/require "fs"))

(defn new-file [file-path]
  (let [file-extension (str "." (last (string/split file-path ".")))]
    (println file-extension)
    (when (or (= file-extension ".mp3")
              (= file-extension ".wav"))
      (println "New file: " file-path)
      (file-hash/handle-new-file file-path
        (fn [file-hash music-info]
          (println "Added file with hash:" file-hash))))))

(defn delete-file [file-path]
  (println "Deleted file: " file-path))

(defn listener [change-type file-path file-current-stat file-previous-stat]
  (print "FILE STAT" file-current-stat)
  (cond
    (= change-type "create") (new-file file-path)
    (= change-type "delete") (delete-file file-path)))

(defn watch-directories! [directories]
  (println "Starting watcher on the following directories:" directories)
  (doseq [directory directories]
    (.readdir fs directory
      (fn [err files]
        (doseq [file files] (new-file (str directory "/" file))))))
  (.watch watchr #js {:paths (clj->js directories)
                      :listener listener}))
