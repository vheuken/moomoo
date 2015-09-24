(ns moomoo.client-interface
  (:require [cljs.nodejs :as nodejs]
            [cognitect.transit :as transit]
            [moomoo.rooms :as rooms]))

(defonce socketio (nodejs/require "socket.io"))
(defonce socketio-stream (nodejs/require "socket.io-stream"))
(defonce file-upload-directory "/tmp/moomoo-uploads")
(defonce js-uuid (nodejs/require "uuid"))
(defonce fs (nodejs/require "fs"))

(defn initialize! [server]
  (defonce io (.listen socketio server)))

(defn handle-hotjoin [socket room-id]
  (println "User " (.-id socket) " has joined room: " room-id)
  (rooms/get-all-music-info room-id
    (fn [room-music-info]
      (if-not (nil? room-music-info)
        (rooms/get-track-order room-id
          (fn [room-track-order]
            (rooms/get-current-track room-id
              (fn [current-track]
                (rooms/get-track-id-from-position room-id current-track
                  (fn [current-track-id]
                    (rooms/get-current-sound-id room-id
                      (fn [current-sound-id]
                        (.emit socket "hotjoin-music-info" room-music-info
                                                           room-track-order
                                                           current-track-id
                                                           current-sound-id)))))))))))))
(defn change-track [room track-num sound-id]
  (println "Chainging track in room " room
           "to" track-num "with sound-id" sound-id)
  (.eval rooms/redis-client "local room_id = ARGV[1] local track_num = ARGV[2] local sound_id = ARGV[3] redis.call('set', 'room:' .. room_id .. ':started?', 'false') redis.call('del', 'room:' .. room_id .. ':sync-start') local num_tracks = redis.call('hlen', 'room:' .. room_id .. ':music-info') if (tonumber(track_num) < 0) or (tonumber(track_num) >= tonumber(num_tracks)) then return nil end redis.call('del', 'room:' .. room_id .. ':track-complete') local track_id = redis.call('hget', 'room:' .. room_id .. ':track-order', track_num) redis.call('set', 'room:' .. room_id .. ':current-track', track_num) redis.call('set', 'room:' .. room_id .. ':current-sound', sound_id) return track_id"
    0 room track-num sound-id
    (fn [err reply]
      (println reply)
      (if-not (nil? reply)
        (rooms/set-current-track-position room 0
          (fn []
            (.emit (.to io room)
                   "track-change"
                    reply
                    sound-id)))))))
  (comment
  (rooms/add-to-change-track-list room track-num
    (fn []
      (rooms/start-changing-track room
        (fn [reply]
          (if-not (nil? reply)
            (rooms/track-complete room
              (fn []
                (rooms/clear-ready-to-start room
                  (fn []
                    (rooms/get-num-of-tracks room
                      (fn [num-of-tracks]
                        (if (and (>= track-num 0) (< track-num num-of-tracks))
                          (rooms/clear-track-complete room
                            (fn []
                              (rooms/change-track room track-num sound-id
                                (fn [track-id]
                                  (rooms/set-current-track-position room 0
                                    (fn []
                                      (rooms/track-complete room
                                        (fn []
                                          (.emit (.to io room)
                                                 "track-change"
                                                 track-id
                                                 sound-id))))))))))))))))))))))


(defn connection [socket]
  (println (str "User " (.-id socket) " has connected!"))

  (.on socket "disconnect"
    (fn []
      (rooms/disconnect (.-id socket)
        (fn [room-id]
          (rooms/handle-disconnect room-id
            (fn [users-list]
              (if-not (empty? users-list)
                (.emit (.to io room-id) "users-list" (clj->js users-list)))))
          (println (str (.-id socket) " has disconnected from " room-id))))))

  (.on socket "sign-in"
    (fn [room-id username]
      (println (.-id socket) "sign-in as" username "in" room-id)
      (.join socket room-id
        (fn []
          (rooms/does-room-exist? room-id
            (fn [reply]
              (if-not reply
                (rooms/init-room room-id #(println))
                (handle-hotjoin socket room-id))))
          (rooms/set-username room-id (.-id socket) username
            (fn []
              (println "Sending sign-in success signal to" (.-id socket))
              (.emit socket "sign-in-success")
              (rooms/get-all-users room-id
                #(.emit (.to io room-id) "users-list" (clj->js %1)))))))))

  (.on socket "chat-message"
    (fn [room message]
      (println "Received chat-message in " room "from" (.-id socket)
               "containing:" message)
      (rooms/get-username room (.-id socket)
        (fn [username]
          (.emit (.to io room) "chat-message" #js {:username username
                                                   :message  message})))))

  (.on socket "ready-to-start"
    (fn [sound-id]
      (println "Received ready-to-start signal for" sound-id
               "from" (.-id socket))
      (letfn [(convert-position [track-position-info]
                (println "POSITION!!" (:position track-position-info))
                (if (= -1 (:position track-position-info))
                  nil
                  (+ (:position track-position-info)
                    (- (.now js/Date)
                       (:start-time track-position-info)))))
              (start-track [room track-position-info]
                (if (nil? track-position-info)
                  (rooms/get-current-track-position room
                    (fn [track-position-info]
                      (.emit socket "start-track" (convert-position track-position-info))))
                  (.emit (.to io room) "start-track" (convert-position track-position-info))))]
        (rooms/get-room-from-user-id (.-id socket)
          (fn [room]
            (rooms/get-current-sound-id room
              (fn [current-sound-id]
                (if (= sound-id current-sound-id)
                  (rooms/user-ready-to-start (.-id socket)
                    (fn [num-users-ready]
                      (rooms/get-num-of-users room
                        (fn [num-users]
                          (if (= num-users num-users-ready)
                            (rooms/has-track-started? room
                              (fn [started?]
                                (if started?
                                  (start-track room nil)
                                  (rooms/start-current-track room
                                    (fn [track-position-info]
                                      (start-track room track-position-info)))))))))))))))))))

  (.on socket "pause"
    (fn [position]
      (println "Received pause signal with position" position
               "from" (.-id socket))
      (rooms/get-room-from-user-id (.-id socket)
        (fn [room]
          (rooms/pause-current-track room position
            (fn []
              (.emit (.to io room) "pause" position)))))))

  (.on socket "resume"
    (fn []
      (println "Received resume signal from" (.-id socket))
      (rooms/get-room-from-user-id (.-id socket)
        (fn [room]
          (rooms/resume-current-track room
            (fn []
              (.emit (.to io room) "resume")))))))

  (.on socket "position-change"
    (fn [position]
      (println "Received position-change signal with position" position
               "from" (.-id socket))
      (rooms/get-room-from-user-id (.-id socket)
        (fn [room]
          (rooms/change-current-track-position room position
            (fn []
              (.emit (.to io room) "position-change" position)))))))

  (.on socket "start-looping"
    (fn []
      (println "Received start-looping signal from" (.-id socket))
      (rooms/get-room-from-user-id (.-id socket)
        (fn [room]
          (rooms/start-looping room
            (fn []
              (.emit (.to io room) "set-loop" true)))))))

  (.on socket "stop-looping"
    (fn []
      (println "Received stop-looping signal from" (.-id socket))
      (rooms/get-room-from-user-id (.-id socket)
        (fn [room]
          (rooms/stop-looping room
            (fn []
              (.emit (.to io room) "set-loop" false)))))))

  (.on socket "track-complete"
    (fn []
      (println "Received track-complete signal from " (.-id socket))
      (rooms/get-room-from-user-id (.-id socket)
        (fn [room]
          (rooms/client-sync room "track-complete" (.-id socket)
            (fn [synced?]
              (if synced?
                (rooms/clear-track-complete room
                  (fn []
                    (rooms/is-looping? room
                      (fn [looping?]
                        (if looping?
                          (rooms/set-current-track-position room 0
                            (fn []
                              (.emit (.to io room) "position-change" 0)))
                          (rooms/next-track room
                            (fn [track-id sound-id]
                              (rooms/track-complete room
                                (fn []
                                  (if-not (nil? track-id)
                                    (rooms/clear-ready-to-start room
                                      (fn []
                                        (.emit (.to io room)
                                               "track-change"
                                               track-id
                                               sound-id))))))))))))))))))))

  (.on socket "track-deleted"
    (fn []
      (println "Received track-delete signal from" (.-id socket))
      (rooms/get-room-from-user-id (.-id socket)
        (fn [room]
          (rooms/client-sync room "track-deleted" (.-id socket)
            (fn [synced?]
              (if synced?
                (rooms/track-complete room
                  (fn []
                    (rooms/delete-client-sync room "track-deleted"
                      (fn []
                        (rooms/clear-ready-to-start room
                          (fn []
                            (rooms/clear-track-complete room
                              (fn []
                                (rooms/next-track room
                                  (fn [track-id sound-id]
                                    (if-not (nil? track-id)
                                      (.emit (.to io room)
                                             "track-change"
                                             track-id
                                             sound-id)))))))))))))))))))


  (.on socket "clear-songs"
    (fn []
      (println "Received clear-songs signal from" (.-id socket))
      (rooms/get-room-from-user-id (.-id socket)
        (fn [room-id]
          (rooms/clear-songs room-id
            (fn []
              (.emit (.to io room-id) "clear-songs")))))))

  (.on socket "delete-track"
    (fn [track-id]
      (println "Received delete-track signal for track-id" track-id
               "from" (.-id socket))
      (rooms/get-room-from-user-id (.-id socket)
        (fn [room-id]
          (rooms/delete-track room-id track-id
            (fn [next-track-num]
              (rooms/set-delete-flag room-id
                (fn []
                  (if-not (nil? next-track-num)
                    (.emit (.to io room-id) "delete-track" track-id))))))))))

  (.on socket "change-track"
    (fn [track-num sound-id]
      (println "Received change-track signal to track-num" track-num
               "with sound-id" sound-id
               "from" (.-id socket))
      (rooms/get-room-from-user-id (.-id socket)
        (fn [room]
          (change-track room track-num sound-id)))))

  (.on (new socketio-stream socket) "file-upload"
    (fn [stream original-filename file-size]
      (println (.-id socket) "is uploading" original-filename)
      (let [file-id (.v4 js-uuid)
            filename (subs file-id 0 7)
            absolute-file-path (str file-upload-directory "/" filename)]
        (println (str "Saving" original-filename "as" absolute-file-path))
        (.pipe stream (.createWriteStream fs absolute-file-path))

        (.on stream "data"
          (fn [data-chunk]
            (println "Received data chunk of" original-filename
                     "from" (.-id socket))
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
            (println "Upload of" original-filename
                     "from" (.-id socket) "is complete!")
            (rooms/set-music-info absolute-file-path
                                  file-id
                                  original-filename
                                  (.-id socket)
              (fn [music-info]
                (rooms/get-room-from-user-id (.-id socket)
                  (fn [room]
                    (rooms/get-track-order room
                      (fn [track-order]
                        (.emit (.to io room) "upload-complete" (clj->js music-info) track-order)))
                    (rooms/has-track-started? room
                      (fn [started?]
                        (if-not started?
                          (rooms/get-num-of-tracks room
                            (fn [num-of-tracks]
                              (change-track room (- num-of-tracks 1) (.v4 js-uuid)))))))))))
            (println (str "Successfully uploaded " absolute-file-path)))))))

  (.on socket "file-download-request"
    (fn [track-id]
      (println "Received file download request for " track-id
               "from" (.-id socket))
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

(defn start-listening! []
  (.on io "connection" connection))
