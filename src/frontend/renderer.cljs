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
      (apply dom/div #js {:id "messages"}
        (om/build-all message-view (:messages data))))
    om/IDidUpdate
      (did-update [_ _ _]
        (if (:message-received @core/app-state)
          (let [div (js/$ "#messages")]
            (.scrollTop div (.prop div "scrollHeight"))
            (swap! core/app-state assoc :message-received false))))))

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
      (if-not (:logged-in? data)
        (dom/form #js {:action ""} "Enter Name: "
          (dom/input #js {:id "username" :type "text" :autoComplete "off"})
          (dom/button nil "Join"))))))

(defn message-form [data owner]
  (reify
    om/IRender
    (render [this]
      (if (:logged-in? data)
        (dom/form #js {:action "" :ref "message"}
          (dom/input #js {:id "m" :autoComplete "off" :type "text"})
          (dom/button nil "Send"))))))

(om/root users-list-view core/app-state {:target (. js/document (getElementById "userslist"))})
(om/root messages-view core/app-state {:target (. js/document (getElementById "messages-window"))})
(om/root file-upload-progress-view core/app-state {:target (. js/document (getElementById "progress"))})
(om/root username-form core/app-state {:target (. js/document (getElementById "username-form"))})
(om/root message-form core/app-state {:target (. js/document (getElementById "message-form"))})

; music player
(defn play-button [data owner]
  (reify
    om/IRender
    (render [this]
      (if (:logged-in? data)
        (dom/button #js {:onClick #(. (:current-sound data) resume)} "Play")))))

(defn pause-button [data owner]
  (reify
    om/IRender
    (render [this]
      (if (:logged-in? data)
      (dom/button #js {:onClick #(. (:current-sound data) pause)} "Pause")))))

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
        (if-not (nil? (:download-progress data))
          (dom/div nil "Downloading: " (:download-progress data) "%"))
        (apply dom/div nil
          (om/build-all track-view (:music-tags data)))))))

(om/root play-button core/app-state {:target (. js/document (getElementById "play-button"))})
(om/root pause-button core/app-state {:target (. js/document (getElementById "pause-button"))})
(om/root track-queue core/app-state {:target (. js/document (getElementById "track-queue"))})
