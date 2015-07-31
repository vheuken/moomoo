(ns moomoo-frontend.core)

(defonce room-id (.getAttribute (. js/document (getElementById "roomid")) "data"))
(defonce socket (js/io))
(defonce app-state (atom {:signed-in? false
                          :messages []
                          :message-received? false
                          :users []
                          :current-uploads-info {}
                          :music-info []
                          :music-files {}
                          :data-downloaded 0
                          :download-progress nil}))

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
; end stuff that should be cleaned up with react....

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
                  (new js/Blob #js [(get (:music-files @app-state) track-id) data-chunk])}))))
    (.on stream "end"
      (fn []
        (println "Download complete!")
        (swap! app-state assoc :download-progress nil)))))
