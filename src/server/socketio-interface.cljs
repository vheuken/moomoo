(ns moomoo.socketio-interface
  (:require [cljs.nodejs :as node]
            [moomoo.server-interface :as server-interface]))

(defonce socketio (node/require "socket.io"))
(defonce socketio-redis (node/require "socket.io-redis"))

(defn initialize! [server options]
  (def io (.listen socketio server options))
  (.adapter io (socketio-redis #js {:host "localhost"
                                    :port 6379})))

(defn connection [socket]
  (println "Socket id" (.-id socket) "successfully connected to server")

  (.on socket "sign-in"
    (fn [room-id username]
      (println (.-id socket) "signing in as" username "in room" room-id)
      (server-interface/sign-in (.-id socket) room-id username
        (fn [user-id users]
          (.join socket room-id)
          (.emit socket "sign-in-success" user-id (clj->js users))
          (.emit (.to io room-id) "user-joined" (clj->js users))))))

  (.on socket "disconnect"
    (fn []
      (println "Socket id" (.-id socket) "has disconnected")
      (server-interface/sign-out (.-id socket)
                                 #(println "Socket id:"
                                           (.-id socket)
                                           "has successfully signed out!")))))

(defn start-listening! []
  (.on io "connection" connection))
