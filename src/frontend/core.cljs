(ns moomoo-frontend.core
  (:require [clojure.string :as string]
            [moomoo-frontend.app-state :as app-state]
            [moomoo-frontend.player :as player]))

(defonce room-id (.getAttribute (. js/document (getElementById "roomid")) "data"))
(defonce socket (js/io))
(defonce default-upload-slots (js/Number (.getAttribute (. js/document (getElementById "default-upload-slots")) "data")))
(defonce max-upload-slots (js/Number (.getAttribute (. js/document (getElementById "max-upload-slots")) "data")))

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

(defn resume-upload [client-id]
  (println "Pausing:" client-id)
  (let [upload-info ((:uploads @app-state/app-state) client-id)
        blob-stream (:blob-stream upload-info)
        stream      (:stream upload-info)]
    (.pipe blob-stream stream)
    (swap! app-state/app-state assoc :uploads (merge (:uploads @app-state/app-state)
                                           {client-id (merge upload-info
                                                             {:paused? false})}))))
(defn pause-upload [client-id]
  (println "Pausing upload" client-id)
  (let [upload-info ((:uploads @app-state/app-state) client-id)
        blob-stream (:blob-stream upload-info)
        stream      (:stream upload-info)]
    (.unpipe blob-stream)
    (swap! app-state/app-state assoc :uploads (merge (:uploads @app-state/app-state)
                                           {client-id (merge upload-info
                                                             {:paused? true})}))))

(defn stop-upload [client-id]
  (println "Pausing upload" client-id)
  (let [upload-info ((:uploads @app-state/app-state) client-id)
        blob-stream (:blob-stream upload-info)
        stream      (:stream upload-info)]
    (.unpipe blob-stream)
    (swap! app-state/app-state assoc :uploads (merge (:uploads @app-state/app-state)
                                           {client-id (merge upload-info
                                                             {:stopped? true})}))))

(defn start-upload [client-id]
  (println "Pausing:" client-id)
  (let [upload-info ((:uploads @app-state/app-state) client-id)
        blob-stream (:blob-stream upload-info)
        stream      (:stream upload-info)]
    (.pipe blob-stream stream)
    (swap! app-state/app-state assoc :uploads (merge (:uploads @app-state/app-state)
                                           {client-id (merge upload-info
                                                             {:stopped? false})}))))
(defn start-next-upload! []
  (let [stopped-uploads (filter #(:stopped? (val %)) (into [] (:uploads @app-state/app-state)))]
    (if (empty? stopped-uploads)
      (let [next-file (last (:upload-queue @app-state/app-state))]
        (swap! app-state/app-state assoc :upload-queue (pop (:upload-queue @app-state/app-state)))
        next-file)
      (do
        (start-upload (key (last stopped-uploads)))
        nil))))

(defn upload-file [file]
  (swap! app-state/app-state assoc :num-of-uploads (+ 1 (:num-of-uploads @app-state/app-state)))

  (let [stream (.createStream js/ss)
        blob-stream (.createBlobReadStream js/ss file)
        client-id (.v4 js/uuid)]
    (println "File uploading: " (.-name file))
    (println "File size: " (.-size file))

    (swap! app-state/app-state assoc :uploads (merge (:uploads @app-state/app-state)
                                           {client-id {:blob-stream blob-stream
                                                       :stream      stream
                                                       :paused?     false
                                                       :stopped?    false}}))

    (.emit (js/ss socket) "file-upload" stream
                                        (.-name file)
                                        (.-size file)
                                        client-id)
    (.pipe blob-stream stream)

    (.on blob-stream "end"
      (fn []
        (println "Upload complete: " (.-name file))
        (swap! app-state/app-state assoc :num-of-uploads (- (:num-of-uploads @app-state/app-state) 1))))))

(defn check-hash [file]
  (js/md5File file
    (fn [file-hash]
      (swap! app-state/app-state assoc :file-hashes (merge {file-hash file}
                                                 (:file-hashes @app-state/app-state)))
      (.emit socket "check-hash" file-hash))))

(.change (js/$ "#file-upload")
  (fn [e]
    (let [file (aget (.-files (.-target e)) 0)]
      (if (> (:upload-slots @app-state/app-state) (:num-of-uploads @app-state/app-state))
        (check-hash file)
        (swap! app-state/app-state assoc :upload-queue (vec (cons file (:upload-queue @app-state/app-state))))))))

(.click (js/$ "#clear-songs-button")
  (fn [e]
    (println "Sending clear songs signal!")
    (.emit socket "clear-songs")))

; end stuff that should probably be cleaned up with react....

(defn delete-track [track-id]
  (println (str "Deleting track " track-id))
  (.emit socket "delete-track" track-id))

(defn toggle-loop []
  (if (:looping? @app-state/app-state)
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
                         (:track-order @app-state/app-state))
        destination (ffirst (filter #(not (last %1)) (map-indexed vector (map #(>= offset-top %1) top-offsets))))]
    (if (nil? destination)
      (- (count (:track-order @app-state/app-state)) 1)
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
                     (first (get (:track-id-hashes @app-state/app-state) track-id)))
                 (:music-info @app-state/app-state))))

(defn get-uploader-from-id [track-id]
  (last (get (:track-id-hashes @app-state/app-state) track-id)))

(defn indices [pred coll]
  (keep-indexed #(when (pred %2) %1) coll))

(defn pause []
  (player/pause!)
  (println "Sending pause signal")
  (.emit socket "pause" (player/get-position)))

(defn resume []
  (println "Sending resume signal")
  (.emit socket "resume"))

(defn get-current-track-num []
  (first (indices #(= %1 (:current-track-id @app-state/app-state))
                  (:track-order @app-state/app-state))))

(defn cancel-upload [id]
  (.emit socket "cancel-upload" id))

(defn incr-upload-slots []
  (println "Incrementing upload slots")
  (.emit socket "change-upload-slots" (+ (:upload-slots @app-state/app-state)
                                         1)))

(defn decr-upload-slots []
  (println "Decrementing upload slots")
  (.emit socket "change-upload-slots" (- (:upload-slots @app-state/app-state)
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
    (if (< track-num (count (:music-info @app-state/app-state)))
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

(.on socket "upload-complete"
  (fn [music-info track-order track-id-hashes client-id]
    (println "Received upload-complete signal:"
             "music-info:" music-info
             "track-order:" track-order)
    (swap! app-state/app-state assoc :music-info
      (conj (:music-info @app-state/app-state) music-info))

    (swap! app-state/app-state assoc :track-id-hashes (js->clj track-id-hashes))
    (swap! app-state/app-state assoc :track-order (js->clj track-order))

    (if-not (empty? (filter #{client-id} (keys (:uploads @app-state/app-state))))
      (let [next-file (start-next-upload!)]
        (if-not (nil? next-file)
          (swap! app-state/app-state assoc :upload-queue (pop (:upload-queue @app-state/app-state)))
          (if (> (:upload-slots @app-state/app-state) (:num-of-uploads @app-state/app-state))
            (upload-file next-file)))))))

(defn clear-tracks! []
  (println "Clearing tracks!")
  (player/destroy-track (:current-sound-id @app-state/app-state))
  (swap! app-state/app-state assoc :track-id-hashes {})
  (swap! app-state/app-state assoc :track-order [])
  (swap! app-state/app-state assoc :music-info [])
  (swap! app-state/app-state assoc :current-track-id nil)
  (swap! app-state/app-state assoc :current-sound-id nil))

(defn delete-track! [track-id]
  (println "Received delete-track signal:" track-id)
  (swap! app-state/app-state assoc :track-id-hashes (dissoc (:track-id-hashes @app-state/app-state) track-id))
  (swap! app-state/app-state assoc :track-order (vec (remove #(= track-id %1) (:track-order @app-state/app-state))))

  (if (= track-id (:current-track-id @app-state/app-state))
    (do
      (print "CURRENT TRACK DELETED!")
      (player/destroy-track (:current-sound-id @app-state/app-state))
      (swap! app-state/app-state assoc :current-track-id nil)
      (swap! app-state/app-state assoc :current-sound-id nil)
      (.emit socket "track-deleted"))))

(.on socket "hash-found"
  (fn [file-hash]
    (println "File exists on server. Hash: " file-hash)
    (swap! app-state/app-state assoc :file-hashes (dissoc (:file-hashes @app-state/app-state) file-hash))))

(.on socket "hash-not-found"
  (fn [file-hash]
    (println "File does not exist on server. Will upload. Hash: " file-hash)
    (let [file (get (:file-hashes @app-state/app-state) file-hash)]
      (swap! app-state/app-state assoc :file-hashes (dissoc (:file-hashes @app-state/app-state) file-hash))
      (upload-file file))))

(.on socket "user-muted"
  (fn [socket-id]
    (println "Received mute-user signal for" socket-id)
    (swap! app-state/app-state assoc :users (merge (:users @app-state/app-state)
                                         {socket-id (merge (get (:users @app-state/app-state) socket-id)
                                                           {"muted" true})}))))

(.on socket "user-unmuted"
  (fn [socket-id]
    (println "Received umute-user signal for" socket-id)
    (swap! app-state/app-state assoc :users (merge (:users @app-state/app-state)
                                         {socket-id (merge (get (:users @app-state/app-state) socket-id)
                                                           {"muted" false})}))))

(.on socket "upload-cancelled"
  (fn [id]
    (swap! app-state/app-state assoc :current-uploads-info
      (dissoc (:current-uploads-info @app-state/app-state) id))))

(.on socket "track-order-change"
  (fn [track-order]
    (swap! app-state/app-state assoc :track-order (js->clj track-order))))

(.on socket "upload-slots-change"
  (fn [new-upload-slots]
    (let [old-upload-slots (:num-of-uploads @app-state/app-state)]
      (swap! app-state/app-state assoc :upload-slots new-upload-slots)
      (cond
        (> new-upload-slots old-upload-slots)
          (let [next-file (start-next-upload!)]
            (if-not (nil? next-file)
              (upload-file next-file)))
        (< new-upload-slots old-upload-slots)
          (let [most-recent-upload-id (last (keys (:uploads @app-state/app-state)))]
            (stop-upload most-recent-upload-id))))))

(.onready js/soundManager
  (fn []
    (.createSound js/soundManager #js {
      :id "join-sound"
      :url "http://www.soundjay.com/button/beep-03.mp3"})))
