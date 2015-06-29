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

(def io (.listen socketio server))

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
      (let [absolute-file-path (string/join [(string/join [file-upload-directory "/"]) (.v4 js-uuid)])]
        (println (string/join ["Saving file as: " absolute-file-path]))
        (.pipe stream (.createWriteStream fs absolute-file-path))
        (.on stream "end"
          (fn []
            (println (str "Successfully uploaded " absolute-file-path))
            (let [writer (transit/writer :json)
                  data {:socket-id (.-id socket)
                        :file absolute-file-path}]
              (.publish rooms/redis-client "file-upload" (transit/write writer data)))))))))

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
