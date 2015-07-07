(ns moomoo-frontend.core)

(defonce room-id (.getAttribute (. js/document (getElementById "roomid")) "data"))
(defonce room (str "room:" room-id))
(defonce socket (js/io))
(defonce app-state (atom {:users []
                          :messages []
                          :upload-progress nil
                          :data-uploaded 0
                          :current-file-download nil
                          :current-download-stream-id (new js/Blob)
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

(.on (new js/ss socket) "file-to-client"
  (fn [stream]
    (if (= 0 (:current-file-download @app-state))
      (swap! app-state assoc :current-download-stream-id (.-id stream)))
    (.on stream "data"
      (fn [blob-chunk]
        (if (= (.-id stream) (:current-download-stream-id @app-state))
          (println (.-id stream))
          (swap! app-state assoc :current-file-download
            (new js/Blob #js [(:current-file-download @app-state) blob-chunk])))))
    (.on stream "end"
      (fn []
        (if (= (.-id stream) (:current-download-stream-id @app-state))
          (println (.-size (:current-file-download @app-state)))
          (let [reader (new js/FileReader)
                blob   (:current-file-download @app-state)]
            (.readAsDataURL reader blob)
            (set! (.-onloadend reader)
              (fn []
                (println (.-result reader))
                (println (.attr (js/$ "#current-track") "src"))
                (.attr (js/$ "#current-track") "src" (.-result reader))
                (println (.attr (js/$ "#current-track") "src"))
                (.load (.getElementById js/document "audio-tag"))
                (.play (.getElementById js/document "audio-tag"))
                (swap! app-state assoc :current-download-stream-id nil)
                (swap! app-state assoc :current-file-download (new js/Blob))))))))))

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

