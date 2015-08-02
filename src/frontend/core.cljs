(ns moomoo-frontend.core)

(defonce room-id (.getAttribute (. js/document (getElementById "roomid")) "data"))
(defonce socket (js/io))
(defonce current-sound-id "current-song")
(defonce app-state (atom {:signed-in? false
                          :messages []
                          :message-received? false
                          :users []
                          :current-uploads-info {}
                          :music-info []
                          :music-files {}
                          :data-downloaded 0
                          :download-progress nil
                          :is-file-downloading? false
                          :current-track-id nil
                          :current-sound nil
                          :ball-being-dragged? false}))

(enable-console-print!)

; TODO: We want to get rid of this at some point
;       and handle things more like the om tutorial handles things
(.hide (js/$ "#file-upload-input"))
(.submit (js/$ "#username-form")
  (fn []
    (.emit socket "sign-in" room-id (.val (js/$ "#username")))
    (.show (js/$ "#file-upload-input"))
    false))

(.submit (js/$ "#message-form")
  (fn []
    (.emit socket "chat-message" room-id (.val (js/$ "#m")))
    (.val (js/$ "#m") "")
    false))

(.change (js/$ "#file-upload")
  (fn [e]
    (let [file (aget (.-files (.-target e)) 0)
          stream (.createStream js/ss)
          blob-stream (.createBlobReadStream js/ss file)]
      (println "File uploading!")

      (.emit (js/ss socket) "file-upload" stream
        (.-name file)
        (.-size file))
      (.pipe blob-stream stream)

      (.on blob-stream "end"
        (fn []
          (println "Upload successful!"))))))
; end stuff that should probably be cleaned up with react....

(defn on-drag-stop [event ui]
  (swap! app-state assoc :ball-being-dragged? false)
  (if-not (nil? (:current-sound @app-state))
    (let [bar-width (.width (js/$ "#progress-track-bar"))
          new-position (* (.-duration (:current-sound @app-state))
                          (/ (.-left (.-position ui)) bar-width))]
      (println new-position)
      (.emit socket "position-change" new-position))))

(.draggable (js/$ "#progress-track-ball") #js {:axis "x"
                                               :containment "#progress-track"
                                               :start #(swap! app-state assoc
                                                              :ball-being-dragged?
                                                              true)
                                               :stop on-drag-stop})
(defn pause []
  (.pause js/soundManager current-sound-id)
  (.emit socket "pause" (.-position (:current-sound @app-state))))
  ;(.emit socket "pause" (* (.-duration (:current-sound @app-state))
  ;                         (.-position (:current-sound @app-state)))))

(defn resume []
  (.emit socket "resume"))

(defn set-progress-ball-position [percent-completed]
  (.css (js/$ "#progress-track-ball") #js {"left" (str percent-completed "%")}))

(defn while-playing []
  (if-not (:ball-being-dragged? @app-state)
    (let [sound (:current-sound @app-state)]
      (set-progress-ball-position (* 100
                                    (/ (.-position sound)
                                       (.-duration sound)))))))

(defn on-finish []
  (println "Song has finished!")
  (.emit socket "track-complete"))

(defn play-track [track-id]
  (if-not (nil? (:current-sound @app-state))
    (.destruct (:current-sound @app-state)))

  (let [reader (new js/FileReader)
        song-blob (get (:music-files @app-state) track-id)]
    (.readAsDataURL reader song-blob)
    (set! (.-onloadend reader)
      (fn []
        (swap! app-state assoc :current-sound
          (.createSound js/soundManager #js {:id current-sound-id
                                             :type "audio/mpeg"
                                             :url (.-result reader)
                                             :autoLoad true}))
        (.play (:current-sound @app-state)
               #js {:whileplaying while-playing
                    :onfinish on-finish})))))

(.on socket "connect" #(.emit socket "join-room" room-id))
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
      (merge (:music-info @app-state) music-info))))

(.on (new js/ss socket) "file-download"
  (fn [stream track-id file-size]
    (println "Download starting!")
    (swap! app-state assoc :is-file-downloading? true)
    (.on stream "data"
      (fn [data-chunk]
        (let [size (+ (.-length data-chunk) (:data-downloaded @app-state))]
          (swap! app-state assoc :download-progress (* 100 (/ size file-size)))
          (swap! app-state assoc :data-downloaded size))
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
        (swap! app-state assoc :is-file-downloading? true)
        (swap! app-state assoc :download-progress nil)
        (swap! app-state assoc :data-downloaded 0)

        (if (= (:current-track-id @app-state) track-id)
          (.emit socket "ready-to-start"))))))

(.on socket "start-track" #(play-track (:current-track-id @app-state)))

(.on socket "track-change"
  (fn [track-id]
    (swap! app-state assoc :current-track-id track-id)
    (if (nil? (get (:music-files @app-state) track-id))
      (.emit socket "file-download-request" track-id)
      (.emit socket "ready-to-start"))))

(.on socket "pause"
  (fn [position]
    (.pause js/soundManager current-sound-id)
    (.setPosition js/soundManager current-sound-id position)))

(.on socket "resume"
  (fn []
    (.resume js/soundManager current-sound-id)))

(.on socket "position-change"
  (fn [position]
    (println "Received pos: " position)
    (.setPosition js/soundManager current-sound-id position)))
