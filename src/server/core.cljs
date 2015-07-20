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

(def redis-subscribe-download-request-client (.createClient (nodejs/require "redis")))
(def redis-subscribe-client (.createClient (nodejs/require "redis")))
(def redis-publish-client (.createClient (nodejs/require "redis")))

(defn emit-userslist-to-room [room]
  (rooms/get-all-users room
    (fn [err reply]
      (.emit (.to io room) "userslist" (clj->js reply)))))

(defn connection [socket]
  (println "A user has connected!")
  (.on socket "file-upload-progress"
    (fn [upload-progress]
      (rooms/get-room-from-id (.-id socket)
        (fn [err reply]
          (let [room (.toString reply)]
            (rooms/get-username room (.-id socket)
              (fn [err reply]
                (.emit (.to io room) "user-uploading"
                                     (.toString reply)
                                     upload-progress))))))))
  (.on socket "sync-to-server"
    (fn [message]
      (rooms/get-room-from-id (.-id socket)
        (fn [err reply]

          (println (str "Message " (js->clj message) " sent to " (.toString reply)))
          (.emit (.to io (.toString reply)) "sync-to-server" message)))))
  (.on socket "new-file-request"
    (fn []
      (println "New file request!")
      (.incr rooms/redis-client (str "file-request:" (.-id socket))
        (fn [err reply]
          (println (.toString reply))
          (.publish redis-publish-client "file-download-request" (.-id socket))))))
  (.on socket "disconnect" (fn []
    (.get rooms/redis-client (string/join ["users:" (.-id socket)])
      (fn [err reply]
        (if (not (nil? reply))
          (let [room (.toString reply)
                id   (.-id socket)]
            (rooms/delete-user id #(emit-userslist-to-room room))))))
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
            (rooms/get-room-from-id (.-id socket)
              (fn [err reply]
                (.rpush rooms/redis-client (str (.toString reply) ":music")
                                           absolute-file-path)))
            (println (str "Successfully uploaded " absolute-file-path))
            (let [writer (transit/writer :json)
                  data {:socket-id (.-id socket)
                        :file absolute-file-path}]
              (.publish redis-publish-client "file-upload" (transit/write writer data)))))))))

; TODO: Move to rooms namespace (or something)
(.subscribe redis-subscribe-download-request-client "file-download-request")
(.on redis-subscribe-download-request-client "message"
  (fn [channel message]
    (if (= channel "file-download-request")
      (rooms/get-room-from-id message
        (fn [err reply]
          (.get rooms/redis-client (str "file-request:" message)
            (fn [err r]
              (.lindex rooms/redis-client (str (.toString reply) ":music") (- (.toString r) 1)
                (fn [err reply]
                  (if-not (nil? reply)
                    (let [client-id message
                          client-socket (aget (.-connected (.-sockets io)) client-id)
                          stream (.createStream socketio-stream)
                          absolute-file-path (.toString reply)
                          read-stream (.createReadStream fs absolute-file-path)]
                      (id3 #js {:file absolute-file-path :type id3.OPEN_LOCAL }
                        (fn [err tags]
                          (.emit (socketio-stream client-socket) "file-to-client"
                                                                 stream
                                                                 (.-size (.statSync fs absolute-file-path))
                                                                 tags)
                        (.pipe read-stream stream)))))
                  (if (nil? reply)
                    (.decr rooms/redis-client (str "file-request:" message))))))))))))

; TODO: probably dont even need this subscription anymore...
(.subscribe redis-subscribe-client "file-upload")
(.on redis-subscribe-client "message"
  (fn [channel message]
    (if (= channel "file-upload")
      (let [reader (transit/reader :json)
            data (transit/read reader message)
            absolute-file-path (:file data)
            socket-id (:socket-id data)]
        (.get rooms/redis-client (string/join ["users:" socket-id])
          (fn [err reply]
            (let [room (.toString reply)]
              (println (str "Sending file notification to " room))
                (.emit (.to io room) "file-upload-notification"))))))))

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
