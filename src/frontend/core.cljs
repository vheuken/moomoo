(ns moomoo-frontend.core
  (:require [clojure.string :as string]
            [moomoo-frontend.player :as player]))

(defonce room-id (.getAttribute (. js/document (getElementById "roomid")) "data"))
(defonce socket (js/io))
(defonce default-upload-slots (js/Number (.getAttribute (. js/document (getElementById "default-upload-slots")) "data")))
(defonce max-upload-slots (js/Number (.getAttribute (. js/document (getElementById "max-upload-slots")) "data")))
(defonce app-state (atom {:signed-in? false
                          :messages []
                          :message-received? false
                          :users {}
                          :current-uploads-info {}
                          :track-order []
                          :track-id-hashes {}
                          :music-info []
                          :is-file-downloading? false
                          :current-track-id nil
                          :current-sound-id nil
                          :ball-being-dragged? false
                          :looping? false
                          :upload-queue []
                          :upload-slots default-upload-slots
                          :num-of-uploads 0
                          :num-of-downloads 0
                          :file-hashes {}
                          :uploads {}}))

(enable-console-print!)

; TODO: We want to get rid of this at some point
;       and handle things more like the om tutorial handles things
(.hide (js/$ "#file-upload-input"))
(.submit (js/$ "#username-form")
  (fn []
    (.emit socket "sign-in" room-id (.val (js/$ "#username")))
    (.show (js/$ "#file-upload-input"))
    false))

(defn send-chat-message [message]
  (println "Sending chat message: " message)
  (.emit socket "chat-message" room-id message))

(defn keydown-message-input [event]
  (if (= 13 (.-keyCode event))
    (this-as this
      (send-chat-message (.val (js/$ this)))
      (.val (js/$ this) "")
      false)))

(defn upload-file [file]
  (swap! app-state assoc :num-of-uploads (+ 1 (:num-of-uploads @app-state)))

  (let [stream (.createStream js/ss)
        blob-stream (.createBlobReadStream js/ss file)
        client-id (.v4 js/uuid)]
    (println "File uploading: " (.-name file))
    (println "File size: " (.-size file))

    (swap! app-state assoc :uploads (merge (:uploads @app-state)
                                           {client-id {:blob-stream blob-stream
                                                       :stream      stream
                                                       :paused?     false}}))

    (.emit (js/ss socket) "file-upload" stream
                                        (.-name file)
                                        (.-size file)
                                        client-id)
    (.pipe blob-stream stream)

    (.on blob-stream "end"
      (fn []
        (println "Upload complete: " (.-name file))
        (swap! app-state assoc :num-of-uploads (- (:num-of-uploads @app-state) 1))
        (if-not (empty? (:upload-queue @app-state))
          (let [next-file (last (:upload-queue @app-state))]
            (swap! app-state assoc :upload-queue (pop (:upload-queue @app-state)))
            (if-not (= next-file file)
              (if (> (:upload-slots @app-state) (:num-of-uploads @app-state))
                (upload-file next-file)))))))))

(defn check-hash [file]
  (js/md5File file
    (fn [file-hash]
      (swap! app-state assoc :file-hashes (merge {file-hash file}
                                                 (:file-hashes @app-state)))
      (.emit socket "check-hash" file-hash))))

(.change (js/$ "#file-upload")
  (fn [e]
    (let [file (aget (.-files (.-target e)) 0)]
      (if (> (:upload-slots @app-state) (:num-of-uploads @app-state))
        (check-hash file)
        (swap! app-state assoc :upload-queue (vec (cons file (:upload-queue @app-state))))))))

(.click (js/$ "#clear-songs-button")
  (fn [e]
    (println "Sending clear songs signal!")
    (.emit socket "clear-songs")))

; end stuff that should probably be cleaned up with react....

(defn delete-track [track-id]
  (println (str "Deleting track " track-id))
  (.emit socket "delete-track" track-id))

(defn toggle-loop []
  (if (:looping? @app-state)
    (.emit socket "stop-looping")
    (.emit socket "start-looping")))

(defn on-drag-stop [event ui]
  (swap! player/app-state assoc :ball-being-dragged? false)
  (if-not (player/is-sound-loaded?)
    (let [bar-width (.width (js/$ "#progress-track-bar"))
          new-position (* (player/get-duration)
                          (/ (.-left (.-position ui)) bar-width))]
      (.emit socket "position-change" new-position))))

(defn get-track-num-from-offset-top [offset-top]
  (println "Offset-top:" offset-top)
  (let [top-offsets (map (fn [id]
                           (.-top (.offset (js/$ (str "#" id)))))
                         (:track-order @app-state))
        destination (ffirst (filter #(not (last %1)) (map-indexed vector (map #(>= offset-top %1) top-offsets))))]
    (if (nil? destination)
      (- (count (:track-order @app-state)) 1)
      destination)))

(defn on-track-drag-stop [event ui]
  (this-as this
    (.removeAttr (js/$ this) "style")
    (let [dragged-track-id (.attr (js/$ this) "id")
          destination-track-num (get-track-num-from-offset-top (.-top (.-offset ui)))]
      (.emit socket "track-order-change" dragged-track-id destination-track-num))))

(defn mute []
  (println "Muted!")
  (.emit socket "mute-user"))

(defn unmute []
  (println "Unmuted!")
  (.emit socket "unmute-user"))

(defn on-volume-drag-stop [event ui]
  (let [bar-width (.width (js/$ "#volume-bar"))
        new-volume (Math/round (* 100 (/ (.-left (.-position ui)) bar-width)))
        old-volume (player/get-volume)]
    (println "old volume:" old-volume)
    (println "new volume:" new-volume)

    (player/set-volume new-volume)
    (cond
      (and (>= 0 old-volume) (< 0 new-volume))
        (unmute)
      (and (>= 0 new-volume) (< 0 old-volume))
        (mute))))

(defn get-music-info-from-id [track-id]
  (first (filter #(= (.-filehash %1)
                     (first (get (:track-id-hashes @app-state) track-id)))
                 (:music-info @app-state))))

(defn get-uploader-from-id [track-id]
  (last (get (:track-id-hashes @app-state) track-id)))

(defn indices [pred coll]
  (keep-indexed #(when (pred %2) %1) coll))

(defn pause []
  (player/pause)
  (println "Sending pause signal")
  (.emit socket "pause" (player/get-position)))

(defn resume []
  (println "Sending resume signal")
  (.emit socket "resume"))

(defn get-current-track-num []
  (first (indices #(= %1 (:current-track-id @app-state))
                  (:track-order @app-state))))

(defn cancel-upload [id]
  (.emit socket "cancel-upload" id))

(defn resume-upload [client-id]
  (println "Pausing:" client-id)
  (let [upload-info ((:uploads @app-state) client-id)
        blob-stream (:blob-stream upload-info)
        stream      (:stream upload-info)]
    (.pipe blob-stream stream)
    (swap! app-state assoc :uploads (merge (:uploads @app-state)
                                           {client-id (merge upload-info
                                                             {:paused? false})}))))
(defn pause-upload [client-id]
  (println "Pausing upload" client-id)
  (let [upload-info ((:uploads @app-state) client-id)
        blob-stream (:blob-stream upload-info)
        stream      (:stream upload-info)]
    (.unpipe blob-stream)
    (swap! app-state assoc :uploads (merge (:uploads @app-state)
                                           {client-id (merge upload-info
                                                             {:paused? true})}))))

(defn incr-upload-slots []
  (println "Incrementing upload slots")
  (.emit socket "change-upload-slots" (+ (:upload-slots @app-state)
                                         1)))

(defn decr-upload-slots []
  (println "Decrementing upload slots")
  (.emit socket "change-upload-slots" (- (:upload-slots @app-state)
                                         1)))

(defn change-track [track-num]
  (.emit socket "change-track" track-num (.v4 js/uuid)))

(defn previous-track []
  (let [track-num (- (get-current-track-num) 1)
        sound-id (.v4 js/uuid)]
    (if (>= track-num 0)
      (do
        (println "Sending change-track signal."
                 "Track num:" track-num
                 "Sound ID:"  sound-id)
        (.emit socket "change-track" track-num sound-id)))))

(defn next-track []
  (let [track-num (+ (get-current-track-num) 1)
        sound-id (.v4 js/uuid)]
    (if (< track-num (count (:music-info @app-state)))
      (do
        (println "Sending change-track signal."
                 "Track num:" track-num
                 "Sound ID:"  sound-id)
        (.emit socket "change-track" track-num sound-id)))))

(defn restart-track []
  (println "Sending position change signal: " 0)
  (.emit socket "position-change" 0))

(defn on-finish []
  (println "Song has finished!")
  (println "Sending track-complete signal")
  (.emit socket "track-complete"))

(.on socket "sign-in-success"
  (fn []
    (println "Successfully signed in!")
    (swap! app-state assoc :signed-in? true)))

(.on socket "chat-message"
  (fn [message]
    (println "Received chat-message signal:" message)
    (swap! app-state assoc :messages (conj (:messages @app-state) message))
    (swap! app-state assoc :message-received? true)))

(.on socket "users-list"
  (fn [users]
    (println "Received users-list signal: " users)
    (let [users (js->clj users)]
      (println "USERS:" users)
      (swap! app-state assoc :users users))))

(.on socket "file-upload-info"
  (fn [file-upload-info]
    (println "Received file-upload-info signal: " file-upload-info)

    (if (= (.-totalsize file-upload-info) (.-bytesreceived file-upload-info))
      (swap! app-state assoc :current-uploads-info
        (dissoc (:current-uploads-info @app-state) (.-id file-upload-info)))
      (swap! app-state assoc :current-uploads-info
        (merge (:current-uploads-info @app-state)
          {(.-id file-upload-info) file-upload-info})))))

(.on socket "upload-complete"
  (fn [music-info track-order track-id-hashes]
    (println "Received upload-complete signal:"
             "music-info:" music-info
             "track-order:" track-order)
    (swap! app-state assoc :music-info
      (conj (:music-info @app-state) music-info))

    (swap! app-state assoc :track-id-hashes (js->clj track-id-hashes))
    (swap! app-state assoc :track-order (js->clj track-order))))

(.on socket "start-track"
  (fn [file-url position]
    (println "Starting current track at position: " position)
    (println "WAT" file-url)
    (let [file-url (str (first (string/split (.-href (.-location js/window))
                                                              #"/rooms"))
                        file-url)]
      (player/play-track file-url
                         (:current-sound-id @app-state)
                         position
                         on-finish))))

(.on socket "track-change"
  (fn [track-id sound-id]
    (println "Received track-change signal:"
             "track-id:" track-id
             "sound-id:" sound-id)
    (let [last-current-track-id (:current-track-id @app-state)
          last-current-sound-id (:current-sound-id @app-state)]
      (swap! app-state assoc :current-track-id track-id)
      (swap! app-state assoc :current-sound-id sound-id)

      (if-not (nil? last-current-sound-id)
        (player/destroy-track last-current-sound-id)))

      (.emit socket "ready-to-start" sound-id)))


(.on socket "pause"
  (fn [position]
    (println "Received pause signal with position:" position)
    (player/pause)
    (player/set-position position)))

(.on socket "resume"
  (fn []
    (println "Received resume signal")
    (player/resume)))

(.on socket "position-change"
  (fn [position]
    (println "Received position-change signal: " position)
    (player/set-position position)))

(.on socket "hotjoin-music-info"
  (fn [room-track-id-map
       room-music-info
       track-order
       current-track-id
       current-sound-id
       paused?]
    (println "Received room state:"
             "room-music-info:" room-music-info
             "track-order:" track-order
             "current-track-id:" current-track-id
             "current-sound-id:" current-sound-id
             "track-id-hashes:" room-track-id-map)

    (swap! app-state assoc :track-id-hashes (js->clj room-track-id-map))
    (swap! app-state assoc :track-order (js->clj track-order))
    (swap! app-state assoc :music-info (vec (map #(clj->js %1) (js->clj room-music-info))))

    (swap! app-state assoc :current-track-id current-track-id)
    (swap! app-state assoc :current-sound-id current-sound-id)

    (if paused?
      (player/pause))

    (if-not (nil? current-sound-id)
      (.emit socket "ready-to-start" current-sound-id))))

(.on socket "set-loop"
  (fn [looping?]
    (println "Received set-loop signal with looping?:" looping?)
    (swap! app-state assoc :looping? looping?)))

(.on socket "clear-songs"
  (fn []
    (println "Received clear-songs signal")
    (player/destroy-track (:current-sound-id @app-state))
    (swap! app-state assoc :track-id-hashes {})
    (swap! app-state assoc :track-order [])
    (swap! app-state assoc :music-info [])
    (swap! app-state assoc :current-track-id nil)
    (swap! app-state assoc :current-sound-id nil)))

(.on socket "delete-track"
  (fn [track-id]
    (println "Received delete-track signal:" track-id)
    (swap! app-state assoc :track-id-hashes (dissoc (:track-id-hashes @app-state) track-id))
    (swap! app-state assoc :track-order (vec (remove #(= track-id %1) (:track-order @app-state))))

    (if (= track-id (:current-track-id @app-state))
      (do
        (print "CURRENT TRACK DELETED!")
        (player/destroy-track (:current-sound-id @app-state))
        (swap! app-state assoc :current-track-id nil)
        (swap! app-state assoc :current-sound-id nil)
        (.emit socket "track-deleted")))))

(.on socket "hash-found"
  (fn [file-hash]
    (println "File exists on server. Hash: " file-hash)
    (swap! app-state assoc :file-hashes (dissoc (:file-hashes @app-state) file-hash))))

(.on socket "hash-not-found"
  (fn [file-hash]
    (println "File does not exist on server. Will upload. Hash: " file-hash)
    (let [file (get (:file-hashes @app-state) file-hash)]
      (swap! app-state assoc :file-hashes (dissoc (:file-hashes @app-state) file-hash))
      (upload-file file))))

(.on socket "user-muted"
  (fn [socket-id]
    (println "Received mute-user signal for" socket-id)
    (swap! app-state assoc :users (merge (:users @app-state)
                                         {socket-id (merge (get (:users @app-state) socket-id)
                                                           {"muted" true})}))))

(.on socket "user-unmuted"
  (fn [socket-id]
    (println "Received umute-user signal for" socket-id)
    (swap! app-state assoc :users (merge (:users @app-state)
                                         {socket-id (merge (get (:users @app-state) socket-id)
                                                           {"muted" false})}))))

(.on socket "upload-cancelled"
  (fn [id]
    (swap! app-state assoc :current-uploads-info
      (dissoc (:current-uploads-info @app-state) id))))

(.on socket "track-order-change"
  (fn [track-order]
    (swap! app-state assoc :track-order (js->clj track-order))))

(.on socket "upload-slots-change"
  (fn [new-upload-slots]
    (let [old-upload-slots (:upload-slots @app-state)]
      (swap! app-state assoc :upload-slots new-upload-slots)
      (if (> new-upload-slots old-upload-slots)
        (let [paused-uploads (filter #(:paused? (val %)) (into [] (:uploads @app-state)))]
          (if (empty? paused-uploads)
            (let [next-file (last (:upload-queue @app-state))]
              (swap! app-state assoc :upload-queue (pop (:upload-queue @app-state)))
              (upload-file next-file))
            (resume-upload (key (last paused-uploads)))))
        (let [most-recent-upload-id (last (keys (:uploads @app-state)))]
          (pause-upload most-recent-upload-id))))))

(.onready js/soundManager
  (fn []
    (.createSound js/soundManager #js {
      :id "join-sound"
      :url "http://www.soundjay.com/button/beep-03.mp3"})))
