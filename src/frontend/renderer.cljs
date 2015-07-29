(ns moomoo-frontend.renderer
  (:require [om.core :as om  :include-macros true]
            [om.dom  :as dom :include-macros true]
            [moomoo-frontend.core :as core]))

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
        (apply dom/div nil
          (om/build-all user-view (:users data)))))))

(defn message-view [message owner]
  (reify
    om/IRender
    (render [this]
      (dom/li nil (.-username message) ": " (.-message message)))))

(defn messages-view [data owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/div #js {:id "messages"}
        (om/build-all message-view (:messages data))))
    om/IDidUpdate
      (did-update [_ _ _]
        (if (:message-received? @core/app-state)
          (let [div (js/$ "#messages")]
            (.scrollTop div (.prop div "scrollHeight"))
            (swap! core/app-state assoc :message-received? false))))))

(defn file-upload-progress-view [data owner]
  (reify
    om/IRender
    (render [this]
      (if (nil? (:upload-progress @core/app-state))
        (dom/span nil "")
        (dom/span nil (str (:upload-progress data) "%"))))))

(defn username-form [data owner]
  (reify
    om/IRender
    (render [this]
      (if-not (:signed-in? data)
        (dom/form #js {:action ""} "Enter Name: "
          (dom/input #js {:id "username" :type "text" :autoComplete "off"})
          (dom/button nil "Join"))))))

(defn message-form [data owner]
  (reify
    om/IRender
    (render [this]
      (if (:signed-in? data)
        (dom/form #js {:action "" :ref "message"}
          (dom/input #js {:id "m" :autoComplete "off" :type "text"})
          (dom/button nil "Send"))))))

(defn user-upload-progress [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/li nil (nth data 0) " is uploading: " (nth data 1) "%"))))

(defn users-upload-progress-view [data owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/div nil
          (om/build-all user-upload-progress
            (remove
              #(= (nth %1 0) (:username data))
              (seq (:users-uploading data))))))))

(defn current-track-tags-view [data owner]
  (reify
    om/IRender
    (render [this]
      (if-not (= 0 (:current-track data))
        (let [track-index (- (:current-track data) 1)
              tags (nth (:music-tags data) track-index)]
          (dom/div nil
            (dom/div nil (.-title tags))
            (dom/div nil (.-album tags))
            (dom/div nil (.-artist tags))))))))

(om/root users-list-view core/app-state {:target (. js/document (getElementById "userslist"))})
(om/root messages-view core/app-state {:target (. js/document (getElementById "messages-window"))})
;(om/root file-upload-progress-view core/app-state {:target (. js/document (getElementById "progress"))})
;(om/root users-upload-progress-view core/app-state {:target (. js/document (getElementById "users-upload-progress"))})
(om/root username-form core/app-state {:target (. js/document (getElementById "username-form"))})
(om/root message-form core/app-state {:target (. js/document (getElementById "message-form"))})
;(om/root current-track-tags-view core/app-state {:target (. js/document (getElementById "current-track-tags"))})

; music player
(defn play-button [data owner]
  (reify
    om/IRender
    (render [this]
      (if (:signed-in? data)
        (dom/button #js {:onClick core/resume} "Play")))))

(defn pause-button [data owner]
  (reify
    om/IRender
    (render [this]
      (if (:signed-in? data)
        (dom/button #js {:onClick core/pause} "Pause")))))

(defn track-view [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/li nil data))))

(defn track-queue [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/span nil
        ; TODO: download progress should be somewhere else...
        (if-not (nil? (:download-progress data))
          (dom/div nil "Downloading: " (:download-progress data) "%"))
        (apply dom/div nil
          (om/build-all track-view (map
                                     #(str (.-artist %1) " - " (.-title %1))
                                     (:music-tags data))))))))

;(om/root play-button core/app-state {:target (. js/document (getElementById "play-button"))})
;(om/root pause-button core/app-state {:target (. js/document (getElementById "pause-button"))})
;(om/root track-queue core/app-state {:target (. js/document (getElementById "track-queue"))})
