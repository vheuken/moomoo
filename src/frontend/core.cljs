(ns moomoo-frontend.core
  (:require [moomoo-frontend.player :as player]))

(defonce room-id (.getAttribute (. js/document (getElementById "roomid")) "data"))
(defonce socket (js/io))
(defonce default-upload-slots 4)
(defonce default-download-slots 4)
(defonce app-state (atom {:signed-in? false
                          :messages []
                          :message-received? false
                          :users []
                          :current-uploads-info {}
                          :music-info []
                          :music-files {}
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
                          :download-progress {}}))

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
    (println "File uploading!")

    (.emit (js/ss socket) "file-upload" stream
                                        (.-name file)
                                        (.-size file))
    (.pipe blob-stream stream)

    (.on blob-stream "end"
      (fn []
        (swap! app-state assoc :num-of-uploads (- (:num-of-uploads @app-state) 1))
        (if-not (empty? (:upload-queue @app-state))
          (let [next-file (last (:upload-queue @app-state))]
            (swap! app-state assoc :upload-queue (pop (:upload-queue @app-state)))
            (if-not (= next-file file)
              (if (> (:upload-slots @app-state) (:num-of-uploads @app-state))
                (upload-file next-file)))))))))

(.change (js/$ "#file-upload")
  (fn [e]
    (let [file (aget (.-files (.-target e)) 0)]
      (println "SHIT " (:num-of-uploads @app-state))
        (if (> (:upload-slots @app-state) (:num-of-uploads @app-state))
          (upload-file file)
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
  (nth (filter #(= (.-id %1)
                   track-id)
         (:music-info @app-state))
    0))

(defn get-next-track-to-download []
  (letfn [(is-track-downloaded? [track-id]
            (contains? (:music-files @app-state) track-id))]
    (let [current-track-info (get-music-info-from-id (:current-track-id @app-state))]
      (loop [track-num (+ (.-tracknum current-track-info) 1)
             i 0]
        (if (>= i (count (:music-info @app-state)))
          nil
          (if (< track-num (count (:music-info @app-state)))
            (let [music-info (nth (:music-info @app-state) track-num)
                  track-id (.-id music-info)]
              (if-not (is-track-downloaded? track-id)
                track-id
                  (recur (+ 1 track-num)
                         (+ 1 i))))
              (recur 0
                     (+ 1 i))))))))

(defn request-new-track []
  (let [id (get-next-track-to-download)]
    (if-not (nil? id)
      (.emit socket "file-download-request" id))))

(defn pause []
  (player/pause)
  (.emit socket "pause" (player/get-position)))

(defn resume []
  (.emit socket "resume"))

(defn previous-track []
  (let [track-num (- (.-tracknum (nth (filter #(= (.-id %1)
                                                (:current-track-id @app-state))
                                            (:music-info @app-state)) 0))
                    1)]
    (if (>= track-num 0)
      (.emit socket "change-track" track-num (.v4 js/uuid)))))

(defn next-track []
  (let [track-num (+ 1 (.-tracknum (nth (filter #(= (.-id %1)
                                                    (:current-track-id @app-state))
                                                (:music-info @app-state)) 0)))]
    (if (< track-num (count (:music-info @app-state)))
      (.emit socket "change-track" track-num (.v4 js/uuid)))))

(defn restart-track []
  (.emit socket "position-change" 0))

(defn on-finish []
  (println "Song has finished!")
  (.emit socket "track-complete"))

(.on socket "sign-in-success"
  (fn []
    (println "Successfully signed in!")
    (swap! app-state assoc :signed-in? true)))

(.on socket "chat-message"
  (fn [message]
    (swap! app-state assoc :messages (conj (:messages @app-state) message))
    (swap! app-state assoc :message-received? true)))

(.on socket "users-list"
  (fn [users]
    (swap! app-state assoc :users users)))

(.on socket "file-upload-info"
  (fn [file-upload-info]
    (if (= (.-totalsize file-upload-info) (.-bytesreceived file-upload-info))
      (swap! app-state assoc :current-uploads-info
        (dissoc (:current-uploads-info @app-state) (.-id file-upload-info)))
      (swap! app-state assoc :current-uploads-info
        (merge (:current-uploads-info @app-state)
          {(.-id file-upload-info) file-upload-info})))))

(.on socket "upload-complete"
  (fn [music-info]
    (swap! app-state assoc :music-info
      (conj (:music-info @app-state) music-info))

    (if (> (:download-slots @app-state) (:num-of-downloads @app-state))
      (request-new-track))))

(.on (new js/ss socket) "file-download"
  (fn [stream track-id file-size]
    (println "Download starting!")

    (swap! app-state assoc :num-of-downloads (+ 1 (:num-of-downloads @app-state)))

    (.on stream "data"
      (fn [data-chunk]
        (let [data-downloaded (+ (.-length data-chunk) (:data-downloaded
                                                         (get (:download-progress @app-state)
                                                              track-id)))]
          (swap! app-state assoc :download-progress (merge (:download-progress @app-state)
                                                           {track-id {:data-downloaded data-downloaded
                                                                      :file-size file-size}})))
        (if (nil? (get (:music-files @app-state) track-id))
          (swap! app-state assoc :music-files
            (merge (:music-files @app-state) {track-id (new js/Blob)})))
        (swap! app-state assoc :music-files
          (merge (:music-files @app-state)
                 {track-id
                  (new js/Blob #js [(get (:music-files @app-state) track-id) data-chunk]
                               #js {:type "audio/mpeg"})}))))
    (.on stream "end"
      (fn []
        (println "Download complete!")
        (swap! app-state assoc :num-of-downloads (- (:num-of-downloads @app-state) 1))
        (swap! app-state assoc :download-progress (dissoc (:download-progress @app-state) track-id))

        (if (> (:download-slots @app-state) (:num-of-downloads @app-state))
          (request-new-track))

        (if (= (:current-track-id @app-state) track-id)
          (.emit socket "ready-to-start" (:current-sound-id @app-state)))))))

(.on socket "start-track"
  (fn [position]
     (player/play-track (get (:music-files @app-state) (:current-track-id @app-state))
                        (:current-sound-id @app-state)
                        position
                        on-finish)))

(.on socket "track-change"
  (fn [track-id sound-id]
    (println "CHANGING TO TRACK " track-id)
    (let [last-current-track-id (:current-track-id @app-state)
          last-current-sound-id (:current-sound-id @app-state)]
      (swap! app-state assoc :current-track-id track-id)
      (swap! app-state assoc :current-sound-id sound-id)

      (if-not (nil? last-current-sound-id)
        (player/destroy-track last-current-sound-id)))

      (if (nil? (get (:music-files @app-state) track-id))
        (.emit socket "file-download-request" track-id)
        (.emit socket "ready-to-start" sound-id))))


(.on socket "pause"
  (fn [position]
    (player/pause)
    (player/set-position position)))

(.on socket "resume" #(player/resume))

(.on socket "position-change"
  (fn [position]
    (player/set-position position)))

(.on socket "hotjoin-music-info"
  (fn [room-music-info current-track-id current-sound-id]
    (let [sorted-music-info (.sort room-music-info #(- (.-tracknum %1)
                                                       (.-tracknum %2)))]
      (swap! app-state assoc :music-info (vec (map #(clj->js %1)
                                                (js->clj sorted-music-info)))))

    (swap! app-state assoc :current-track-id current-track-id)
    (swap! app-state assoc :current-sound-id current-sound-id)

    (.emit socket "file-download-request" current-track-id)))

(.on socket "set-loop"
  (fn [looping?]
    (swap! app-state assoc :looping? looping?)))

(.on socket "clear-songs"
  (fn []
    (player/destroy-track (:current-sound-id @app-state))
    (swap! app-state assoc :music-info [])
    (swap! app-state assoc :music-files {})
    (swap! app-state assoc :current-track-id nil)
    (swap! app-state assoc :current-sound-id nil)))

(.on socket "delete-track"
  (fn [track-id]
    (let [new-music-files (dissoc (:music-files @app-state) track-id)
          new-music-info  (vec (remove #(= track-id (.-id %1))
                                       (:music-info @app-state)))]
      (swap! app-state assoc :music-files new-music-files)
      (swap! app-state assoc :music-info new-music-info))))
