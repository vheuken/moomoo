(ns moomoo.client-interface
  (:require [cljs.nodejs :as nodejs]
            [clojure.string :as string]
            [cognitect.transit :as transit]
            [moomoo.rooms :as rooms]
            [moomoo.config :as config]
            [moomoo.file-hash :as file-hash]
            [moomoo.lastfm :as lastfm])
  (:require-macros [moomoo.socket :as s]))

(defonce socketio (nodejs/require "socket.io"))
(defonce socketio-redis (nodejs/require "socket.io-redis"))
(defonce socketio-stream (nodejs/require "socket.io-stream"))
(defonce file-upload-directory "public/music")
(defonce js-uuid (nodejs/require "uuid"))
(defonce fs (nodejs/require "fs"))
(defonce redis (nodejs/require "redis"))
(defonce redis-pub-client (.createClient redis))
(defonce redis-lock ((nodejs/require "redis-lock") rooms/redis-client))
(defonce mmm (nodejs/require "mmmagic"))
(defonce Magic (.-Magic mmm))

(defn initialize! [server options]
  (defonce io (.listen socketio server options))
  (.adapter io (socketio-redis #js {:host "localhost" :port 6379})))

(defn handle-hotjoin [socket room-id]
  (println "User " (.-id socket) " has joined room: " room-id)
  (rooms/get-all-music-info room-id
    (fn [room-track-id-map room-music-info]
      (if-not (nil? room-music-info)
        (rooms/get-track-order room-id
          (fn [room-track-order]
            (rooms/get-current-track room-id
              (fn [current-track]
                (rooms/get-track-id-from-position room-id current-track
                  (fn [current-track-id]
                    (rooms/get-current-sound-id room-id
                      (fn [current-sound-id]
                        (rooms/is-playing? room-id
                          (fn [playing?]
                            (.emit socket "hotjoin-music-info" room-track-id-map
                                                               room-music-info
                                                               room-track-order
                                                               current-track-id
                                                               current-sound-id
                                                               (not playing?))))))))))))))))

(defn change-track [room track-num sound-id]
  (rooms/change-track room track-num sound-id
    (fn [track-id]
      (.emit (.to io room)
             "track-change"
             track-id
             sound-id))))

(defn connection [socket]
  (println (str "User " (.-id socket) " has connected!"))

  (s/defevent "socket-id-change" [user-id]
    (rooms/set-user-id (.-id socket) user-id
      (fn []
        (rooms/get-room-from-user-id user-id
          (fn [room-id]
            (.join socket room-id
              (fn []
                (rooms/get-all-users room-id
                  (fn [users]
                    (if-not (empty? users)
                      (.emit (.to io room-id) "users-list" (clj->js users))))))))))))

  (s/defevent "disconnect" []
    (rooms/disconnect (.-id socket)
      (fn [room-id]
        (if-not (nil? room-id)
          (redis-lock. room-id
            (fn [done]
              (rooms/handle-disconnect room-id
                (fn []
                  (rooms/get-all-users room-id
                    (fn [users]
                      (if-not (empty? users)
                        (.emit (.to io room-id) "users-list" (clj->js users)))
                      (println (str (.-id socket) " has disconnected from " room-id))
                      (done)))))))))))

  (s/defevent "sign-in" [room-id username]
    (println (.-id socket) "sign-in as" username "in" room-id)
    (.join socket room-id
      (fn []
        (rooms/does-room-exist? room-id
          (fn [reply]
            (if-not reply
              (rooms/init-room room-id #(println))
              (handle-hotjoin socket room-id))))
        (let [user-id (.v4 js-uuid)]
          (rooms/set-user-id (.-id socket) user-id
            (fn []
              (rooms/set-username room-id user-id username
                (fn []
                  (println "Sending sign-in success signal to" (.-id socket))
                  (.emit socket "sign-in-success" user-id)
                  (rooms/get-all-users room-id
                    #(.emit (.to io room-id) "users-list" (clj->js %1)))))))))))

  (s/defevent "chat-message" [room message]
    (println "Received chat-message in " room "from" (.-id socket)
             "containing:" message)
    (rooms/get-user-id-from-socket (.-id socket)
      (fn [user-id]
        (rooms/get-username room user-id
          (fn [username]
            (.emit (.to io room) "chat-message" #js {:username username
                                                     :message  message}))))))

  (s/defevent "ready-to-start" [sound-id]
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
              (rooms/unset-waiting-to-start-flag room
                (fn []
                  (rooms/get-current-track-id room
                    (fn [track-id]
                      (rooms/get-music-file room track-id
                        (fn [file-path]
                          (let [file-url (string/replace file-path "public" "")]
                            (if (nil? track-position-info)
                              (rooms/get-current-track-position room
                                (fn [track-position-info]
                                  (.emit socket "start-track" file-url
                                                              (convert-position track-position-info))))
                              (.emit (.to io room) "start-track" file-url
                                                                 (convert-position track-position-info)))))))))))]
      (rooms/get-user-id-from-socket (.-id socket)
        (fn [user-id]
          (rooms/get-room-from-user-id user-id
            (fn [room]
              (rooms/get-current-sound-id room
                (fn [current-sound-id]
                  (if (= sound-id current-sound-id)
                    (rooms/client-sync room "sync-start" user-id
                      (fn [ready?]
                        (if ready?
                          (rooms/has-track-started? room
                            (fn [started?]
                              (if started?
                                (start-track room nil)
                                (rooms/start-current-track room
                                  (fn [track-position-info]
                                    (start-track room track-position-info))))))))))))))))))

  (s/defevent "pause" [position]
    (println "Received pause signal with position" position
             "from" (.-id socket))
    (rooms/get-user-id-from-socket (.-id socket)
      (fn [user-id]
        (rooms/get-room-from-user-id user-id
          (fn [room]
            (rooms/cooldown room "play-pause"
              (fn [ok?]
                (if ok?
                  (rooms/pause-current-track room position
                    (fn []
                      (.emit (.to io room) "pause" position)))))))))))

  (s/defevent "resume" []
    (println "Received resume signal from" (.-id socket))
    (rooms/get-user-id-from-socket (.-id socket)
      (fn [user-id]
        (rooms/get-room-from-user-id user-id
          (fn [room]
            (rooms/cooldown room "play-pause"
              (fn [ok?]
                (if ok?
                  (rooms/resume-current-track room
                    (fn []
                      (.emit (.to io room) "resume")))))))))))

  (s/defevent "position-change" [position]
    (println "Received position-change signal with position" position
             "from" (.-id socket))
    (rooms/get-user-id-from-socket (.-id socket)
      (fn [user-id]
        (rooms/get-room-from-user-id user-id
          (fn [room]
            (rooms/cooldown room "position-change"
              (fn [ok?]
                (if ok?
                  (rooms/get-current-sound-id room
                    (fn [sound-id]
                      (if-not (nil? sound-id)
                        (rooms/change-current-track-position room position
                          (fn []
                            (.emit (.to io room) "position-change" position))))))))))))))

  (s/defevent "start-looping" []
    (println "Received start-looping signal from" (.-id socket))
    (rooms/get-user-id-from-socket (.-id socket)
      (fn [user-id]
        (rooms/get-room-from-user-id user-id
          (fn [room]
            (rooms/cooldown room "looping"
              (fn [ok?]
                (if ok?
                  (rooms/start-looping room
                    (fn []
                      (.emit (.to io room) "set-loop" true)))))))))))

  (s/defevent "stop-looping" []
    (println "Received stop-looping signal from" (.-id socket))
    (rooms/get-user-id-from-socket (.-id socket)
      (fn [user-id]
        (rooms/get-room-from-user-id user-id
          (fn [room]
            (rooms/cooldown room "looping"
              (fn [ok?]
                (if ok?
                  (rooms/stop-looping room
                    (fn []
                      (.emit (.to io room) "set-loop" false)))))))))))

  (s/defevent "mute-user" []
    (println "Socket id " (.-id socket) " is muted!")
    (rooms/get-user-id-from-socket (.-id socket)
      (fn [user-id]
        (rooms/mute-user user-id
          (fn []
            (rooms/get-room-from-user-id user-id
              (fn [room-id]
                (.emit (.to io room-id) "user-muted" user-id))))))))

  (s/defevent "unmute-user" []
    (println "Socket id " (.-id socket) " is unmuted!")
    (rooms/get-user-id-from-socket (.-id socket)
      (fn [user-id]
        (rooms/unmute-user user-id
          (fn []
            (rooms/get-room-from-user-id (.-id socket)
              (fn [room-id]
                (.emit (.to io room-id) "user-unmuted" (.-id socket)))))))))


  (s/defevent "track-complete" []
    (println "Received track-complete signal from " (.-id socket))
    (rooms/get-user-id-from-socket (.-id socket)
      (fn [user-id]
        (rooms/get-room-from-user-id user-id
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
                                          (rooms/set-waiting-to-start-flag room
                                            (fn []
                                              (.emit (.to io room)
                                                     "track-change"
                                                     track-id
                                                     sound-id)))))))))))))))))))))))

  (s/defevent "track-deleted" []
    (println "Received track-delete signal from" (.-id socket))
    (rooms/get-user-id-from-socket (.-id socket)
      (fn [user-id]
        (rooms/get-room-from-user-id user-id
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
                                      (println "next-track returned track-id:" track-id)
                                      (if-not (nil? track-id)
                                        (.emit (.to io room)
                                               "track-change"
                                               track-id
                                               sound-id))))))))))))))))))))


  (s/defevent "clear-songs" []
    (println "Received clear-songs signal from" (.-id socket))

    (rooms/get-user-id-from-socket (.-id socket)
      (fn [user-id]
        (rooms/get-room-from-user-id user-id
          (fn [room-id]
            (rooms/clear-songs room-id
              (fn []
                (.emit (.to io room-id) "clear-songs"))))))))

  (s/defevent "delete-track" [track-id]
    (println "Received delete-track signal for track-id" track-id
             "from" (.-id socket))
    (rooms/get-user-id-from-socket (.-id socket)
      (fn [user-id]
        (rooms/get-room-from-user-id user-id
          (fn [room-id]
            (rooms/delete-track room-id track-id
              (fn [next-track-num]
                (rooms/set-delete-flag room-id
                  (fn []
                    (if-not (nil? next-track-num)
                      (.emit (.to io room-id) "delete-track" track-id)))))))))))

  (s/defevent "track-order-change" [track-id destination-track-num]
    (println "Track order change of track-id:" track-id
             "to track-num:" destination-track-num)
    (rooms/get-user-id-from-socket (.-id socket)
      (fn [user-id]
        (rooms/get-room-from-user-id user-id
          (fn [room-id]
            (rooms/cooldown room-id "track-order-change"
              (fn [ok?]
                (if ok?
                  (rooms/change-track-order room-id track-id destination-track-num
                    (fn [new-track-order]
                      (.emit (.to io room-id) "track-order-change" new-track-order)))))))))))

  (s/defevent "change-track" [track-num sound-id]
    (println "Received change-track signal to track-num" track-num
             "with sound-id" sound-id
             "from" (.-id socket))
    (rooms/get-user-id-from-socket (.-id socket)
      (fn [user-id]
        (rooms/get-room-from-user-id user-id
          (fn [room]
            (rooms/cooldown room "change-track"
              (fn [ok?]
                (if ok?
                  (change-track room track-num sound-id)))))))))

  (s/defevent "lastfm-auth" [token]
    (rooms/get-user-id-from-socket (.-id socket)
      (fn [user-id]
        (lastfm/authenticate! user-id token
          (fn [status username]
            (if (= :success status)
              (.emit socket "lastfm-auth" "success" username)
              (.emit socket "lastfm-auth" "failure" nil)))))))

  (s/defevent "lastfm-scrobble" [artist track]
    (rooms/get-user-id-from-socket (.-id socket)
      (fn [user-id]
        (lastfm/scrobble! user-id artist track))))

  (s/defevent "change-upload-slots" [new-upload-slots]
    (println "Received change-upload-slots signal from" (.-id socket)
             "with value of" new-upload-slots)
    (if (and (> new-upload-slots 0)
             (<= new-upload-slots (config/data "max-upload-slots")))
      (.emit socket "upload-slots-change" new-upload-slots)))

  (s/defevent "check-hash" [file-hash]
    (println (.-id socket) "sent hash:" file-hash)
    (file-hash/file-hash-exists? file-hash
      (fn [file-exists?]
        (if file-exists?
          (rooms/get-user-id-from-socket (.-id socket)
            (fn [user-id]
              (.emit socket "hash-found" file-hash)
              (rooms/set-music-info-from-hash (.v4 js-uuid)
                                              file-hash
                                              (.-id socket)
                (fn [music-info]
                  (rooms/get-room-from-user-id (.-id socket)
                    (fn [room-id]
                      (rooms/get-track-order room-id
                        (fn [track-order]
                          (rooms/get-track-id-hashes room-id
                            (fn [track-id-hashes]
                              (.emit (.to io room-id) "upload-complete"
                                                      (clj->js music-info)
                                                      track-order
                                                      track-id-hashes)))))
                      (rooms/is-waiting-to-start? room-id
                      (fn [waiting?]
                        (if-not waiting?
                          (rooms/has-track-started? room-id
                            (fn [started?]
                              (if-not started?
                                (rooms/get-num-of-tracks room-id
                                  (fn [num-of-tracks]
                                    (change-track room-id (- num-of-tracks 1) (.v4 js-uuid))))))))))))))))
          (.emit socket "hash-not-found" file-hash)))))

  (s/defevent "cancel-upload" [id]
    (println "Received cancel-upload signal from" (.-id socket) " for id:" id)
    (rooms/get-user-id-from-socket (.-id socket)
      (fn [user-id]
        (rooms/get-uploader-id id
          (fn [uploader-id]
            (if (= uploader-id user-id)
              (rooms/cancel-upload id
                (fn []
                  (.publish redis-pub-client "cancel-upload" id)
                  (rooms/get-room-from-user-id user-id
                    (fn [room]
                      (.emit (.to io room) "upload-cancelled" id)))))))))))

  (.on (new socketio-stream socket) "file-upload"
    (fn [stream original-filename file-size client-id]
      (println (.-id socket) "is uploading" original-filename)
      (rooms/get-user-id-from-socket (.-id socket)
        (fn [user-id]
          (rooms/get-room-from-user-id user-id
            (fn [room]
              (.incr rooms/redis-client (str "room:" room ":num-of-uploads")
                (fn [_ upload-num]
                  (let [file-id (.v4 js-uuid)
                        file-extension (str "." (last (string/split original-filename ".")))
                        temp-filename (subs file-id 0 7)
                        temp-absolute-file-path (str file-upload-directory "/" temp-filename file-extension)
                        redis-sub-client (.createClient redis)]
                    (.set rooms/redis-client (str "track:" file-id ":uploader") user-id
                      (fn []

                        (println (str "Saving" original-filename "as" temp-absolute-file-path))
                        (.pipe stream (.createWriteStream fs temp-absolute-file-path))

                        (.subscribe redis-sub-client "cancel-upload")

                        (.on redis-sub-client "message"
                          (fn [channel message]
                            (println "CHANNEL:" channel)
                            (println "Message:" message)
                            (if (= message file-id)
                              (do
                                (.unpipe stream)
                                (.unlink fs temp-absolute-file-path)))))

                      (.on stream "data"
                        (fn [data-chunk]
                          (println "Received data chunk of" original-filename
                                   "from" (.-id socket))
                          (rooms/get-username room user-id
                            (fn [username]
                              (let [bytes-received (aget (.statSync fs temp-absolute-file-path) "size")]
                                (.emit (.to io room)
                                       "file-upload-info"
                                       #js {:id            file-id
                                            :num           upload-num
                                            :uploaderid    user-id
                                            :bytesreceived bytes-received
                                            :totalsize     file-size
                                            :filename      original-filename
                                            :clientid      client-id}))))))

                      (.on stream "end"
                        (fn []
                          (println "Upload of" original-filename
                                   "from" (.-id socket) "is complete!")
                          (redis-lock. room
                            (fn [done]
                              (let [magic (Magic. (.-MAGIC_MIME_TYPE mmm))]
                                (.detectFile magic temp-absolute-file-path
                                  (fn [_ mime-type]
                                    (if (or (rooms/is-mime-type-allowed? room mime-type)
                                            (and (= mime-type "application/octet-stream")
                                                 (rooms/is-file-extension-allowed? room file-extension)))
                                      (.readFile fs temp-absolute-file-path
                                        (fn [err buf]
                                          (let [file-hash (file-hash/get-hash-from-buffer buf)
                                                absolute-file-path (str file-upload-directory "/" file-hash file-extension)]
                                            (.rename fs temp-absolute-file-path absolute-file-path
                                              (fn []
                                                (file-hash/handle-new-file absolute-file-path file-hash mime-type
                                                  (fn [file-hash music-info]
                                                    (rooms/set-music-info file-id
                                                                          file-hash
                                                                          user-id
                                                  (fn []
                                                    (rooms/get-track-order room
                                                      (fn [track-order]
                                                        (rooms/get-track-id-hashes room
                                                          (fn [track-id-hashes]
                                                            (.emit (.to io room) "upload-complete"
                                                                                 (clj->js music-info)
                                                                                 track-order
                                                                                 track-id-hashes
                                                                                 client-id)))))
                                                    (rooms/is-waiting-to-start? room
                                                      (fn [waiting?]
                                                        (if-not waiting?
                                                          (rooms/has-track-started? room
                                                            (fn [started?]
                                                              (if-not started?
                                                                (rooms/get-num-of-tracks room
                                                                  (fn [num-of-tracks]
                                                                    (change-track room (- num-of-tracks 1) (.v4 js-uuid))))))))))
                                                    (done))))))))))))))))))))))))))))))

(defn start-listening! []
  (.on io "connection" connection))
