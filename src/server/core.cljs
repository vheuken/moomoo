(ns moomoo.core
  (:require [cljs.nodejs :as nodejs]
            [moomoo.client-interface :as client-interface]
            [moomoo.config :as config]
            [moomoo.watcher :as watcher]
            [figwheel.client :as fw]))

(nodejs/enable-util-print!)

(defonce port 3001)

(defonce express (nodejs/require "express"))
(defonce app (express))
(defonce server (.Server (nodejs/require "http") app))
(defonce redis-client (.createClient (nodejs/require "redis")))
(defonce util (nodejs/require "util"))

(client-interface/initialize! server)

(.set app "views" "src/frontend/views")
(.set app "view engine" "jade")

(.use app (.static express "public"))
(.get app "/" #(. %2 (sendFile "public/index.html")))

(.get app "/rooms/:id" #(. %2 (render "room" #js {:roomid (.-id (.-params %1))
                                                  :maxuploadslots (config/data "max-upload-slots")})))

(defn -main []
  (config/load-file! "config.toml")

  (.monitor redis-client
    (fn [err res]
      (println "Entering redis-monitoring mode")))

  (.on redis-client "monitor"
    (fn [timestamp args]
      (println "REDIS:" timestamp ": " (.inspect util args))))

  (println (str "Listening on port " port))
  (watcher/watch-directories! (config/data "music-watch-dirs"))
  (client-interface/start-listening!)
  (.listen server port))

(set! *main-cli-fn* -main)

(fw/start { })
