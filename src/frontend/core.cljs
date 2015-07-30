(ns moomoo-frontend.core)

(defonce room-id (.getAttribute (. js/document (getElementById "roomid")) "data"))
(defonce socket (js/io))
(defonce app-state (atom {:signed-in? false
                          :messages []
                          :message-received? false
                          :users []}))

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
      (println (.-name file))
      (.emit (js/ss socket) "file-upload" stream
        (clj->js (.-name file))
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
    (println file-upload-info)))
