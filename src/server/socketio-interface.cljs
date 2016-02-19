(ns moomoo.socketio-interface
  (:require [cljs.nodejs :as node]
            [clojure.string :as string]
            [moomoo.server-interface :as server-interface]
            [moomoo.user :as user]))

(defonce socketio (node/require "socket.io"))
(defonce socketio-redis (node/require "socket.io-redis"))
(defonce socketio-stream (node/require "socket.io-stream"))
(defonce file-upload-directory "public/music")
(defonce fs (node/require "fs"))

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
          (println message)
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

  ; START HASHING SECTION

  (.on socket "new-hash"
    (fn [client-id]
      (user/get-user-id (.-id socket)
        (fn [user-id]
          (user/get-room-id user-id
            (fn [room-id]
              (server-interface/new-hash user-id room-id
                (fn [upload-id uploads-order]
                  (.emit (.to io room-id) "uploads-order" uploads-order)
                  (.emit socket "start-hashing" client-id upload-id)))))))))

  (.on socket "hash-progress"
    (fn [upload-id filename current-chunk chunks]
      (user/get-user-id (.-id socket)
        (fn [user-id]
          (user/get-room-id user-id
            (fn [room-id]
              (.emit (.to io room-id)
                     "hash-progress"
                     upload-id
                     user-id
                     filename
                     current-chunk
                     chunks)))))))

  (.on socket "check-hash"
    (fn [upload-id file-hash]
      (.emit socket "hash-not-found" upload-id file-hash)))

  ; END HASHING SECTION

  (.on (new socketio-stream socket) "file-upload"
    (fn [stream filename file-size upload-id start]
      (println (.-id socket) "is uploading" filename)
      (user/get-user-id (.-id socket)
        (fn [user-id]
          (user/get-room-id user-id
            (fn [room-id]
              (let [file-extension (str "."
                                        (last (string/split filename ".")))
                    temp-filename (str upload-id file-extension)
                    temp-absolute-file-path (str file-upload-directory
                                                 "/"
                                                 temp-filename)]
                (.on stream "data"
                  (fn [data-chunk]
                    (let [bytes-received (aget (.statSync fs
                                                          temp-absolute-file-path)
                                               "size")]
                      (.emit (.to io room-id)
                             "upload-progress"
                             upload-id
                             user-id
                             bytes-received
                             file-size
                             filename))))
                (.on stream "end"
                  (fn []
                    (println "DONE uploading " filename)))
                (println (str "Saving" filename "as" temp-absolute-file-path))
                (.pipe stream (.createWriteStream fs temp-absolute-file-path #js {:start start
                                                                                  :flags "a"}))))))))))

(defn start-listening! []
  (.on io "connection" connection))
