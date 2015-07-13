(ns moomoo-frontend.core)

(defonce room-id (.getAttribute (. js/document (getElementById "roomid")) "data"))
(defonce room (str "room:" room-id))
(defonce socket (js/io))
(defonce app-state (atom {:users []
                          :messages []
                          :upload-progress nil
                          :data-uploaded 0
                          :current-file-download nil
                          :music-files {}
                          :message-received false}))

(enable-console-print!)

(.on socket "connect" #(.emit socket "join_room" room))

(.hide (js/$ "#message_form"))
(.hide (js/$ "#file_upload_input"))

(.submit (js/$ "#message_form")
  (fn []
    (.emit socket "chat message" room (.val (js/$ "#m")))
    (.val (js/$ "#m") "")
    false))

(.submit (js/$ "#username_form")
  (fn []
    (.emit socket "set_username" room (.val (js/$ "#username")))
    (.hide (js/$ "#username_form"))
    (.show (js/$ "#message_form"))
    (.show (js/$ "#file_upload_input"))
    false))

(.on socket "chat message"
  (fn [message]
    (swap! app-state assoc :messages (conj (:messages @app-state) message))
    (swap! app-state assoc :message-received true)))

(.on socket "userslist"
  (fn [users]
    (swap! app-state assoc :users users)))

(defn request-new-file []
  (.emit socket "new-file-request"))

(.on socket "file-upload-notification"
  (fn []
    (println "Received file upload notification!")
    (request-new-file)))

(.on (new js/ss socket) "file-to-client"
  (fn [stream]
    (.on stream "data"
      (fn [blob-chunk]
        (let [stream-id (.-id stream)]
          (println stream-id)
          (if (nil? (get (:music-files @app-state) stream-id))
            (swap! app-state assoc :music-files
              (merge (:music-files @app-state) {stream-id (new js/Blob)})))
          (swap! app-state assoc :music-files
            (merge (:music-files @app-state) {stream-id
              (new js/Blob #js [(get (:music-files @app-state) stream-id) blob-chunk])})))))
    (.on stream "end"
      (fn []
        (let [reader (new js/FileReader)
              blob   (get (:music-files @app-state) (.-id stream))]
          (.readAsDataURL reader blob)
          (set! (.-onloadend reader)
            (fn []
              (.attr (js/$ "#current-track") "src" (.-result reader))
              (.load (.getElementById js/document "audio-tag"))
              (.play (.getElementById js/document "audio-tag"))
              (println (str "Number of music files downloaded/downloading: "
                            (count (:music-files @app-state)))))))))))

(.change (js/$ "#file_upload_input")
  (fn [e]
    (let [file (aget (.-files (.-target e)) 0)
          stream (.createStream js/ss)
          blob-stream (.createBlobReadStream js/ss file)]
      (println "File uploading!")

      (swap! app-state assoc :upload-progress 0)
      (swap! app-state assoc :data-uploaded 0)

      (.on blob-stream "data"
        (fn [data-chunk]
          (let [size (+ (.-length data-chunk) (:data-uploaded @app-state))]
            (swap! app-state assoc :upload-progress (Math/floor (* 100 (/ size (.-size file)))))
            (swap! app-state assoc :data-uploaded size))))

      (.on blob-stream "end"
        (fn []
          (println "Upload successful!")
          (swap! app-state assoc :upload-progress nil)
          (swap! app-state assoc :data-uploaded 0)))

      (.emit (js/ss socket) "file" stream)
      (.pipe blob-stream stream))))

