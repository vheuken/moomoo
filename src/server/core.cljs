(ns moomoo.core
  (:require [cljs.nodejs :as nodejs]
            [clojure.string :as string]
            [cognitect.transit :as transit]
            [moomoo.rooms :as rooms]))

(nodejs/enable-util-print!)

(def port 3001)

(def express (nodejs/require "express"))
(def app (express))
(def server (.Server (nodejs/require "http") app))
(def socketio (nodejs/require "socket.io"))
(def socketio-stream (nodejs/require "socket.io-stream"))
(def file-upload-directory "/tmp/moomoo-uploads")
(def js-uuid (nodejs/require "uuid"))
(def fs (nodejs/require "fs"))
(def id3 (nodejs/require "id3js"))

(def io (.listen socketio server))



(defn connection [socket]
  (println (str "User " (.-id socket) " has connected!"))

  (.on socket "disconnect" #(rooms/disconnect (.-id socket)))

  (.on socket "join-room"
    (fn [room-id]
      (.join socket room-id)))

  (.on socket "sign-in"
    (fn [room-id username]
      (rooms/set-username room-id (.-id socket) username
        #(.emit socket "sign-in-success")))))

(.on io "connection" connection)

(.set app "views" (string/join ["src/frontend/views"]))
(.set app "view engine" "jade")

(.use app (.static express "public"))
(.get app "/" #(. %2 (sendFile "public/index.html")))

(.get app "/rooms/:id" #(. %2 (render "room" (clj->js {:roomid (.-id (.-params %1))}))))

(defn -main []
  (println (string/join ["Listening on port " port]))
  (.listen server port))

(set! *main-cli-fn* -main)

