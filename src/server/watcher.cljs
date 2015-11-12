(ns moomoo.watcher
  (:require [cljs.nodejs :as nodejs]))

(defonce watchr (nodejs/require "watchr"))

(defn new-file [file-path]
  (println "New file: " file-path))

(defn delete-file [file-path]
  (println "Deleted file: " file-path))

(defn listener [change-type file-path file-current-stat file-previous-stat]
  (cond
    (= change-type "create") (new-file file-path)
    (= change-type "delete") (delete-file file-path)))

(defn watch-directories! [directories]
  (println "HI")
  (.watch watchr #js {:paths (clj->js directories)
                      :listener listener}))
