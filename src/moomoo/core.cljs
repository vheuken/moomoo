(ns moomoo.core
  (:require [cljs.nodejs :as nodejs]
            [clojure.string :as string]
            [moomoo.rooms :as rooms]))

(nodejs/enable-util-print!)

(def port 3001)

(def http (nodejs/require "http"))
(def socketio (nodejs/require "socket.io"))
(def socketio-stream (nodejs/require "socket.io-stream"))
(def file-upload-directory "/tmp/moomoo-uploads")
(def uuid (nodejs/require "uuid"))
(def fs (nodejs/require "fs"))

(def app (.createServer http))
(def io (.listen socketio app))

(defn emit-userslist-to-room [room]
  (rooms/get-all-users room
    (fn [err reply]
      (.emit (.to io room) "userslist" (clj->js reply)))))

(defn connection [socket]
  (println "A user has connected!")
  (.on socket "disconnect" (fn []
    (.get rooms/redis-client (string/join ["users:" (.-id socket)])
      (fn [err reply]
        (if (not (nil? reply))
          (let [room (.toString reply)
                id   (.-id socket)]
            (.hdel rooms/redis-client (string/join [room ":users"]) id
              #(emit-userslist-to-room room))))))
    (.del rooms/redis-client (string/join ["users:" (.-id socket)]))
    (println "A user has disconnected!")))
  (.on socket "set_username"
    (fn [room username]
      (rooms/set-username room (.-id socket) username)
      (emit-userslist-to-room room)
      (println (string/join [username " has joined " room]))))
  (.on socket "join_room"
    (fn [room]
      (.join socket room)))
  (.on socket "chat message"
    (fn [room msg]
      (rooms/get-username room (.-id socket)
        (fn [err reply]
          (let [msg-to-send (string/join [(.toString reply) ": " msg])]
            (.emit (.to io room) "chat message" msg-to-send))))))
  (.on (new socketio-stream socket) "file"
    (fn [stream data]
      (let [absolute-file-path (string/join [(string/join [file-upload-directory "/"]) (.v4 uuid)])]
        (println (string/join ["Saving file as: " absolute-file-path]))
        (.pipe stream (.createWriteStream fs absolute-file-path))))))

(defn -main []
  (.on io "connection"
    (complement connection))
  (println (string/join ["Listening on port " port]))
  (.listen app port))

(set! *main-cli-fn* -main)
