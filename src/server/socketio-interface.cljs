(ns moomoo.socketio-interface
  (:require [cljs.nodejs :as node]
            [moomoo.server-interface :as server-interface]
            [moomoo.user :as user]))

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
                                           "has successfully signed out!"))))
  (.on socket "chat-message"
    (fn [message]
      (user/get-user-id (.-id socket)
        (fn [user-id]
          (server-interface/chat-message (.-id socket) user-id message
            (fn [chat-message-fmt]
              (println "CHAT" chat-message-fmt)
              (if-not (nil? chat-message-fmt)
                (user/get-room-id user-id
                  (fn [room-id]
                    (.emit (.to io room-id)
                           "new-chat-message"
                           (:user-id chat-message-fmt)
                           (:message chat-message-fmt)))))))))))
  (.on socket "new-hash"
    (fn [client-id]
      (user/get-user-id (.-id socket)
        (fn [user-id]
          (user/get-room-id user-id
            (fn [room-id]
              (server/new-hash user-id room-id
                (fn [upload-id uploads-order]
                  (.emit (.to io room-id) "uploads-order" uploads-order)
                  (.emit socket "start-hashing" client-id upload-id))))))))))

(defn start-listening! []
  (.on io "connection" connection))
