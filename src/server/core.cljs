(ns moomoo.core
  (:require [cljs.nodejs :as nodejs]
            [moomoo.client-interface :as client-interface]
            [figwheel.client :as fw]))

(nodejs/enable-util-print!)

(defonce port 3001)

(defonce express (nodejs/require "express"))
(defonce app (express))
(defonce server (.Server (nodejs/require "http") app))

(client-interface/initialize! server)

(.set app "views" "src/frontend/views")
(.set app "view engine" "jade")

(.use app (.static express "public"))
(.get app "/" #(. %2 (sendFile "public/index.html")))

(.get app "/rooms/:id" #(. %2 (render "room" (clj->js {:roomid (.-id (.-params %1))}))))

(defn -main []
  (println (str "Listening on port " port))
  (client-interface/start-listening!)
  (.listen server port))

(set! *main-cli-fn* -main)

(fw/start { })
