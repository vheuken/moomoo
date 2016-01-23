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
                            (rooms/get-uploads-order room-id
                              (fn [uploads-order]
                                (.emit socket "new-uploads-order" (clj->js uploads-order))))
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

  (s/defevent "socket-id-change" [new-user-id] [_ _]
    (rooms/set-user-id (.-id socket) new-user-id
      (fn []
        (rooms/get-room-from-user-id new-user-id
          (fn [room-id]
            (.join socket room-id
              (fn []
                (rooms/get-all-users room-id
                  (fn [users]
                    (if-not (empty? users)
                      (.emit (.to io room-id) "users-list" (clj->js users))))))))))))

  (s/defevent "disconnect" [] [_ _]
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

  (s/defevent "sign-in" [room-id username] [_ _]
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

  (s/defevent "chat-message" [room message] [user-id room-id]
    (println "Received chat-message in " room "from" (.-id socket)
             "containing:" message)
    (rooms/get-username room user-id
      (fn [username]
        (.emit (.to io room) "chat-message" #js {:username username
                                                 :message  message}))))

  (s/defevent "ready-to-start" [sound-id] [user-id room-id]
    (println "Received ready-to-start signal for" sound-id
             "from" (.-id socket))
    (letfn [(convert-position [track-position-info]
              (if (= -1 (:position track-position-info))
                nil
                (+ (:position track-position-info)
                  (- (.now js/Date)
                     (:start-time track-position-info)))))
            (start-track [track-position-info]
              (rooms/unset-waiting-to-start-flag room-id
                (fn []
                  (rooms/get-current-track-id room-id
                    (fn [track-id]
                      (rooms/get-music-file room-id track-id
                        (fn [file-path]
                          (let [file-url (string/replace file-path "public" "")]
                            (println "TRACK POS INFO" track-position-info)
                            (if (nil? (convert-position track-position-info))
                              (rooms/get-current-track-position room-id
                                (fn [track-position-info]
                                  (.emit socket "start-track" file-url
                                                              (convert-position track-position-info))))
                              (.emit (.to io room-id) "start-track" file-url
                                                                    (convert-position track-position-info)))))))))))]
      (rooms/get-current-sound-id room-id
        (fn [current-sound-id]
          (if (= sound-id current-sound-id)
            (rooms/client-sync room-id "sync-start" user-id
              (fn [ready?]
                (if ready?
                  (rooms/has-track-started? room-id
                    (fn [started?]
                      (if started?
                        (start-track nil)
                        (rooms/start-current-track room-id
                          (fn [track-position-info]
                            (start-track track-position-info))))))))))))))

  (s/defevent "pause" [position] [user-id room-id]
    (println "Received pause signal with position" position
             "from" (.-id socket))
    (rooms/cooldown room-id "play-pause"
      (fn [ok?]
        (if ok?
          (rooms/pause-current-track room-id position
            (fn []
              (.emit (.to io room-id) "pause" position)))))))

  (s/defevent "resume" [] [user-id room-id]
    (println "Received resume signal from" (.-id socket))
    (rooms/cooldown room-id "play-pause"
      (fn [ok?]
        (if ok?
          (rooms/resume-current-track room-id
            (fn []
              (.emit (.to io room-id) "resume")))))))

  (s/defevent "position-change" [position] [user-id room-id]
    (println "Received position-change signal with position" position
             "from" (.-id socket))
    (rooms/cooldown room-id "position-change"
      (fn [ok?]
        (if ok?
          (rooms/get-current-sound-id room-id
            (fn [sound-id]
              (if-not (nil? sound-id)
                (rooms/change-current-track-position room-id position
                  (fn []
                    (.emit (.to io room-id) "position-change" position))))))))))

  (s/defevent "start-looping" [] [user-id room-id]
    (println "Received start-looping signal from" (.-id socket))
    (rooms/cooldown room-id "looping"
      (fn [ok?]
        (if ok?
          (rooms/start-looping room-id
            (fn []
              (.emit (.to io room-id) "set-loop" true)))))))

  (s/defevent "stop-looping" [] [user-id room-id]
    (println "Received stop-looping signal from" (.-id socket))
    (rooms/cooldown room-id "looping"
      (fn [ok?]
        (if ok?
          (rooms/stop-looping room-id
            (fn []
              (.emit (.to io room-id) "set-loop" false)))))))

  (s/defevent "mute-user" [] [user-id room-id]
    (println "Socket id " (.-id socket) " is muted!")
    (rooms/mute-user user-id
      (fn []
        (.emit (.to io room-id) "user-muted" user-id))))

  (s/defevent "unmute-user" [] [user-id room-id]
    (println "Socket id " (.-id socket) " is unmuted!")
    (rooms/unmute-user user-id
      (fn []
        (.emit (.to io room-id) "user-unmuted" user-id))))


  (s/defevent "track-complete" [] [user-id room-id]
    (println "Received track-complete signal from " (.-id socket))
    (rooms/client-sync room-id "track-complete" user-id
      (fn [synced?]
        (if synced?
          (rooms/clear-track-complete room-id
            (fn []
              (rooms/is-looping? room-id
                (fn [looping?]
                  (if looping?
                    (rooms/set-current-track-position room-id 0
                      (fn []
                        (.emit (.to io room-id) "position-change" 0)))
                    (rooms/next-track room-id
                      (fn [track-id sound-id]
                        (rooms/track-complete room-id
                          (fn []
                            (if-not (nil? track-id)
                              (rooms/clear-ready-to-start room-id
                                (fn []
                                  (rooms/set-waiting-to-start-flag room-id
                                    (fn []
                                      (.emit (.to io room-id)
                                             "track-change"
                                             track-id
                                             sound-id)))))))))))))))))))

  (s/defevent "track-deleted" [] [user-id room-id]
    (println "Received track-delete signal from" (.-id socket))
    (rooms/client-sync room-id "track-deleted" user-id
      (fn [synced?]
        (if synced?
          (rooms/track-complete room-id
            (fn []
              (rooms/delete-client-sync room-id "track-deleted"
                (fn []
                  (rooms/clear-ready-to-start room-id
                    (fn []
                      (rooms/clear-track-complete room-id
                        (fn []
                          (rooms/next-track room-id
                            (fn [track-id sound-id]
                              (println "next-track returned track-id:" track-id)
                              (if-not (nil? track-id)
                                (.emit (.to io room-id)
                                       "track-change"
                                       track-id
                                       sound-id))))))))))))))))


  (s/defevent "clear-songs" [] [user-id room-id]
    (println "Received clear-songs signal from" (.-id socket))
    (rooms/clear-songs room-id
      (fn []
        (.emit (.to io room-id) "clear-songs"))))

  (s/defevent "delete-track" [track-id] [user-id room-id]
    (println "Received delete-track signal for track-id" track-id
             "from" (.-id socket))
    (rooms/delete-track room-id track-id
      (fn [next-track-num]
        (rooms/set-delete-flag room-id
          (fn []
            (if-not (nil? next-track-num)
              (.emit (.to io room-id) "delete-track" track-id)))))))

  (s/defevent "track-order-change" [track-id destination-track-num] [user-id room-id]
    (println "Track order change of track-id:" track-id
             "to track-num:" destination-track-num)
    (rooms/cooldown room-id "track-order-change"
      (fn [ok?]
        (if ok?
          (rooms/change-track-order room-id track-id destination-track-num
            (fn [new-track-order]
              (.emit (.to io room-id) "track-order-change" new-track-order)))))))

  (s/defevent "change-track" [track-num sound-id] [user-id room-id]
    (println "Received change-track signal to track-num" track-num
             "with sound-id" sound-id
             "from" (.-id socket))
    (rooms/cooldown room-id "change-track"
      (fn [ok?]
        (if ok?
          (change-track room-id track-num sound-id)))))

  (s/defevent "lastfm-auth" [token] [user-id room-id]
    (lastfm/authenticate! user-id token
      (fn [status username]
        (if (= :success status)
          (.emit socket "lastfm-auth" "success" username)
          (.emit socket "lastfm-auth" "failure" nil)))))

  (s/defevent "lastfm-scrobble" [artist track] [user-id room-id]
    (lastfm/scrobble! user-id artist track))

  (s/defevent "change-upload-slots" [new-upload-slots] [user-id room-id]
    (println "Received change-upload-slots signal from" (.-id socket)
             "with value of" new-upload-slots)
    (if (and (> new-upload-slots 0)
             (<= new-upload-slots (config/data "max-upload-slots")))
      (.emit socket "upload-slots-change" new-upload-slots)))

  (s/defevent "new-hash" [client-id] [user-id room-id]
    (let [upload-id (.v4 js-uuid)]
      (rooms/add-new-upload room-id user-id upload-id
        (fn [uploads-order]
          (.emit (.to io room-id) "new-uploads-order" (clj->js uploads-order))
          (.emit socket (str "start-hashing-" client-id) upload-id)))))

  (s/defevent "hash-progress" [id filename current-chunk chunks] [user-id room-id]
    (.emit (.to io room-id) "hash-progress" id filename current-chunk chunks))

  (s/defevent "check-hash" [id file-hash] [user-id room-id]
    (println (.-id socket) "sent hash:" file-hash)
    (file-hash/file-hash-exists? file-hash
      (fn [file-exists?]
        (if file-exists?
          (do
            (.emit socket "hash-found" id file-hash)
            (rooms/set-music-info-from-hash (.v4 js-uuid)
                                            file-hash
                                            (.-id socket)
              (fn [music-info]
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
                                  (change-track room-id (- num-of-tracks 1) (.v4 js-uuid)))))))))))))
          (.emit socket "hash-not-found" id file-hash)))))

  (s/defevent "cancel-upload" [id] [user-id room-id]
    (println "Received cancel-upload signal from" (.-id socket) " for id:" id)
    (rooms/get-uploader-id id
      (fn [uploader-id]
        (println "UPLOADER ID" uploader-id)
        (println "USER ID" user-id)
        (when (= uploader-id user-id)
          (rooms/cancel-upload id
            (fn []
              (.publish redis-pub-client "cancel-upload" id)
              (.emit (.to io room-id) "upload-cancelled" id)))))))

  (.on (new socketio-stream socket) "file-upload"
    (fn [stream original-filename file-size file-id]
      (println (.-id socket) "is uploading" original-filename)
      (rooms/get-user-id-from-socket (.-id socket)
        (fn [user-id]
          (rooms/get-room-from-user-id user-id
            (fn [room]
              (.incr rooms/redis-client (str "room:" room ":num-of-uploads")
                (fn [_ upload-num]
                  (let [file-extension (str "." (last (string/split original-filename ".")))
                        temp-filename (subs file-id 0 7)
                        temp-absolute-file-path (str file-upload-directory "/" temp-filename file-extension)
                        redis-sub-client (.createClient redis)]

                    (println (str "Saving" original-filename "as" temp-absolute-file-path))
                    (.pipe stream (.createWriteStream fs temp-absolute-file-path))

                    (.subscribe redis-sub-client "cancel-upload")

                    (.on redis-sub-client "message"
                      (fn [channel message]
                        (println "CHANNEL:" channel)
                        (println "Message:" message)
                        (println "File-id:" file-id)
                        (when (= message file-id)
                          (rooms/upload-complete room file-id #(.emit (.to io room)
                                                                      "new-uploads-order"
                                                                      (clj->js %1)))
                          (.unpipe stream)
                          (.unlink fs temp-absolute-file-path))))

                  (.on stream "data"
                    (fn [data-chunk]
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
                                        :filename      original-filename}))))))

                  (.on stream "end"
                    (fn []
                      (println "Upload of" original-filename
                               "from" (.-id socket) "is complete!")
                      (rooms/upload-complete room file-id #(.emit (.to io room)
                                                                  "new-uploads-order"
                                                                  (clj->js %1)))
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
                                                                             file-id)))))
                                                (rooms/is-waiting-to-start? room
                                                  (fn [waiting?]
                                                    (if-not waiting?
                                                      (rooms/has-track-started? room
                                                        (fn [started?]
                                                          (if-not started?
                                                            (rooms/get-num-of-tracks room
                                                              (fn [num-of-tracks]
                                                                (change-track room (- num-of-tracks 1) (.v4 js-uuid))))))))))
                                                (done))))))))))))))))))))))))))))

(defn start-listening! []
  (.on io "connection" connection))
