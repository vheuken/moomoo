(ns moomoo-frontend.core
  (:require [clojure.string :as string]
            [moomoo-frontend.player :as player]))

(defonce room-id (.getAttribute (. js/document (getElementById "roomid")) "data"))
(defonce socket (js/io))
(defonce default-upload-slots 4)
(defonce default-download-slots 4)
(defonce app-state (atom {:signed-in? false
                          :messages []
                          :message-received? false
                          :users []
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
                          :download-slots default-download-slots
                          :num-of-uploads 0
                          :num-of-downloads 0
                          :file-hashes {}}))

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
        blob-stream (.createBlobReadStream js/ss file)]
    (println "File uploading: " (.-name file))
    (println "File size: " (.-size file))

    (.emit (js/ss socket) "file-upload" stream
                                        (.-name file)
                                        (.-size file))
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

(defn on-volume-drag-stop [event ui]
  (let [bar-width (.width (js/$ "#volume-bar"))
        new-volume (* 100 (/ (.-left (.-position ui)) bar-width))]
    (player/set-volume new-volume)))

(defn get-music-info-from-id [track-id]
  (first (filter #(= (.-filehash %1)
                     (get (:track-id-hashes @app-state) track-id))
                 (:music-info @app-state))))

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
    (swap! app-state assoc :users users)))

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
       current-sound-id]
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
    (swap! app-state assoc :music-info [])
    (swap! app-state assoc :current-track-id nil)
    (swap! app-state assoc :current-sound-id nil)))

(.on socket "delete-track"
  (fn [track-id]
    (println "Received delete-track signal:" track-id)
    (let [new-music-info  (vec (remove #(= track-id (.-id %1))
                                       (:music-info @app-state)))]
      (swap! app-state assoc :music-info new-music-info)
      (if (= track-id (:current-track-id @app-state))
        (do
          (print "CURRENT TRACK DELETED!")
          (player/destroy-track (:current-sound-id @app-state))
          (swap! app-state assoc :current-track-id nil)
          (swap! app-state assoc :current-sound-id nil)
          (.emit socket "track-deleted"))))))

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

(.onready js/soundManager
  (fn []
    (.createSound js/soundManager #js {
      :id "join-sound"
      :url "http://www.soundjay.com/button/beep-03.mp3"})))
