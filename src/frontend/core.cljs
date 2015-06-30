(ns moomoo-frontend.core
  (:require [om.core :as om :include-macros true]
            [om.dom  :as dom :include-macros true]))

(defonce room-id (.getAttribute (. js/document (getElementById "roomid")) "data"))
(defonce room (str "room:" room-id))
(defonce socket (js/io))
(defonce app-state (atom {:users []
                          :messages []
                          :upload-progress nil
                          :data-uploaded 0}))

(enable-console-print!)

(defn user-view [user owner]
  (reify
    om/IRender
    (render [this]
      (dom/li nil user))))

(defn users-list-view [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div nil
        (dom/h3 nil "Users")
        (apply dom/div nil
          (om/build-all user-view (:users data)))))))

(defn message-view [message owner]
  (reify
    om/IRender
    (render [this]
      (dom/li nil message))))

(defn messages-view [data owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/span nil
        (om/build-all message-view (:messages data))))
    om/IDidUpdate
      (did-update [_ _ _]
        (let [div (js/$ "#messages")]
          (.scrollTop div (.prop div "scrollHeight"))))))

(defn file-upload-progress-view [data owner]
  (reify
    om/IRender
    (render [this]
      (if (nil? (:upload-progress @app-state))
        (dom/span nil "")
        (dom/span nil (str (:upload-progress data) "%"))))))

(om/root users-list-view app-state {:target (. js/document (getElementById "userslist"))})
(om/root messages-view app-state {:target (. js/document (getElementById "messages"))})
(om/root file-upload-progress-view app-state {:target (. js/document (getElementById "progress"))})

(.on socket "connect" #(.emit socket "join_room" room))

(.hide (js/$ "#message_form"))

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
    false))

(.on socket "chat message"
  (fn [message]
    (swap! app-state assoc :messages (conj (:messages @app-state) message))))

(.on socket "userslist"
  (fn [users]
    (swap! app-state assoc :users users)))

(.on (new js/ss socket) "file-to-client"
  (fn [stream]
    (println "WOO")
    (.on stream "data" (fn [] (println "H")))))

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

