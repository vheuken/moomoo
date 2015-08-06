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

(defn handle-hotjoin [socket room-id]
  (println "User has hotjoined")
  (rooms/get-all-music-info room-id
    (fn [room-music-info]
      (if-not (nil? room-music-info)
        (rooms/get-current-track room-id
          (fn [current-track]
            (rooms/get-track-id-from-position room-id current-track
              (fn [current-track-id]
                (.emit socket "hotjoin-music-info" room-music-info
                                                   current-track-id)))))))))

(defn connection [socket]
  (println (str "User " (.-id socket) " has connected!"))

  (.on socket "disconnect"
    (fn []
      (rooms/disconnect (.-id socket)
        (fn [room-id]
          (rooms/get-all-users room-id
            #(.emit (.to io room-id) "users-list" (clj->js %1)))
          (println (str (.-id socket) " has disconnected!"))))))

  (.on socket "join-room"
    (fn [room-id]
      (.join socket room-id)))

  (.on socket "sign-in"
    (fn [room-id username]
      (rooms/does-room-exist? room-id
        (fn [reply]
          (if-not reply
            (rooms/init-room room-id #(println))
            (handle-hotjoin socket room-id))))
      (rooms/set-username room-id (.-id socket) username
        (fn []
          (.emit socket "sign-in-success")
          (rooms/get-all-users room-id
            #(.emit (.to io room-id) "users-list" (clj->js %1)))))))

  (.on socket "chat-message"
    (fn [room message]
      (rooms/get-username room (.-id socket)
        (fn [username]
          (.emit (.to io room) "chat-message" #js {:username username
                                                   :message  message})))))

  (.on socket "ready-to-start"
    (fn []
      (letfn [(convert-position [track-position-info]
                (+ (:position track-position-info)
                   (- (.now js/Date)
                      (:starttime track-position-info))))
              (start-track [room track-position-info]
                (if (nil? track-position-info)
                  (rooms/get-current-track-position room
                    (fn [track-position-info]
                      (.emit socket "start-track" (convert-position track-position-info))))
                  (.emit (.to io room) "start-track" (convert-position track-position-info))))]
        (println "Received ready-to-start signal from " (.-id socket))
        (rooms/user-ready-to-start (.-id socket)
          (fn [num-users-ready]
            (rooms/get-room-from-user-id (.-id socket)
              (fn [room]
                (rooms/get-num-of-users room
                  (fn [num-users]
                    (if (= num-users num-users-ready)
                      (rooms/has-track-started? room
                        (fn [started?]
                          (if started?
                            (start-track room nil)
                            (rooms/start-current-track room
                              (fn [track-position-info]
                                (start-track room track-position-info))))))))))))))))

  (.on socket "pause"
    (fn [position]
      (rooms/get-room-from-user-id (.-id socket)
        (fn [room]
          (rooms/pause-current-track room position
            (fn []
              (.emit (.to io room) "pause" position)))))))

  (.on socket "resume"
    (fn []
      (rooms/get-room-from-user-id (.-id socket)
        (fn [room]
          (rooms/resume-current-track room
            (fn []
              (.emit (.to io room) "resume")))))))

  (.on socket "position-change"
    (fn [position]
      (rooms/get-room-from-user-id (.-id socket)
        (fn [room]
          (rooms/change-current-track-position room position
            (fn []
              (.emit (.to io room) "position-change" position)))))))

  (.on socket "start-looping"
    (fn []
      (rooms/get-room-from-user-id (.-id socket)
        (fn [room]
          (rooms/start-looping room
            (fn []
              (.emit (.to io room) "set-loop" true)))))))

  (.on socket "stop-looping"
    (fn []
      (rooms/get-room-from-user-id (.-id socket)
        (fn [room]
          (rooms/stop-looping room
            (fn []
              (.emit (.to io room) "set-loop" false)))))))

  (.on socket "track-complete"
    (fn []
      (println "Received track-complete signal")
      (rooms/get-room-from-user-id (.-id socket)
        (fn [room]
          (rooms/get-num-of-users room
            (fn [num-users]
              (rooms/user-track-complete (.-id socket)
                (fn [num-users-track-complete]
                  (if (= num-users num-users-track-complete)
                    (rooms/track-complete room
                      (fn []
                        (rooms/clear-ready-to-start room
                          (fn []
                            (rooms/clear-track-complete room
                              (fn []
                                (rooms/is-looping? room
                                  (fn [looping?]
                                    (if looping?
                                      (rooms/set-current-track-position room 0
                                        (fn []
                                          (.emit (.to io room) "position-change" 0)))
                                      (rooms/next-track room
                                        (fn [track-id]
                                          (println track-id)
                                          (if-not (nil? track-id)
                                            (.emit (.to io room) "track-change" track-id))))))))))))))))))))))

  (.on socket "change-track"
    (fn [track-num]
      (println "CHANGING TO TRACK " track-num)
      (rooms/get-room-from-user-id (.-id socket)
        (fn [room]
          (rooms/clear-ready-to-start room
            (fn []
              (rooms/get-num-of-tracks room
                (fn [num-of-tracks]
                  (if (and (>= track-num 0) (< track-num num-of-tracks))
                    (rooms/clear-track-complete room
                      (fn []
                        (rooms/change-track room track-num
                          (fn [track-id]
                            (rooms/set-current-track-position room 0
                              (fn []
                                (rooms/track-complete room
                                  (fn []
                                    (.emit (.to io room) "track-change" track-id))))))))))))))))))

  (.on (new socketio-stream socket) "file-upload"
    (fn [stream original-filename file-size]
      (let [file-id (.v4 js-uuid)
            filename (subs file-id 0 7)
            absolute-file-path (str file-upload-directory "/" filename)]
        (println (str "Saving file as " absolute-file-path))
        (.pipe stream (.createWriteStream fs absolute-file-path))

        (.on stream "data"
          (fn [data-chunk]
            (rooms/get-room-from-user-id (.-id socket)
              (fn [room]
                (rooms/get-username room (.-id socket)
                  (fn [username]
                    (let [bytes-received (aget (.statSync fs absolute-file-path) "size")]
                      (.emit (.to io room)
                             "file-upload-info"
                             #js {:username      username
                                  :id            file-id
                                  :bytesreceived bytes-received
                                  :totalsize     file-size
                                  :filename      original-filename}))))))))

        (.on stream "end"
          (fn []
            (rooms/set-music-info absolute-file-path
                                  file-id
                                  original-filename
                                  (.-id socket)
              (fn [music-info]
                (rooms/get-room-from-user-id (.-id socket)
                  (fn [room]
                    (.emit (.to io room) "upload-complete" (clj->js music-info))
                    (rooms/has-track-started? room
                      (fn [started?]
                        (if-not started?
                          (rooms/get-current-track room
                            (fn [current-track]
                              (println current-track)
                              (rooms/change-track room current-track
                                (fn [track-id]
                                  (println "Track changed to " track-id)
                                  (.emit (.to io room) "track-change" track-id))))))))))))

            (println (str "Successfully uploaded " absolute-file-path)))))))

  (.on socket "file-download-request"
    (fn [track-id]
      (println "Received file download request for " track-id)
      (rooms/get-room-from-user-id (.-id socket)
        (fn [room]
          (rooms/get-music-file room track-id
            (fn [file]
              (let [client-socket (aget (.-connected (.-sockets io)) (.-id socket))
                    stream (.createStream socketio-stream)
                    read-stream (.createReadStream fs file)
                    file-size (.-size (.statSync fs file))]
                (.emit (socketio-stream client-socket) "file-download"
                                                       stream
                                                       track-id
                                                       file-size)
                (.pipe read-stream stream)))))))))

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

