(ns moomoo.core
  (:require [cljs.nodejs :as nodejs]
            [moomoo.client-interface :as client-interface]))

(nodejs/enable-util-print!)

(def port 3001)

(def express (nodejs/require "express"))
(def app (express))
(def server (.Server (nodejs/require "http") app))

(client-interface/initialize! server)
(client-interface/start-listening!)

(.set app "views" "src/frontend/views")
(.set app "view engine" "jade")

(.use app (.static express "public"))
(.get app "/" #(. %2 (sendFile "public/index.html")))

(.get app "/rooms/:id" #(. %2 (render "room" (clj->js {:roomid (.-id (.-params %1))}))))

(defn -main []
  (println (str "Listening on port " port))
  (.listen server port))

(set! *main-cli-fn* -main)

