(ns moomoo-frontend.renderer
  (:require [om.core :as om  :include-macros true]
            [om.dom  :as dom :include-macros true]
            [moomoo-frontend.core :as core]
            [moomoo-frontend.player :as player]))

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
      (dom/li nil (.-username data)
                  " - " (* 100 (/ (.-bytesreceived data) (.-totalsize data))) "% - "
                  (.-filename data)))))

(defn users-upload-progress-view [data owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/div nil
          (om/build-all user-upload-progress (vals (:current-uploads-info data)))))))

(defn current-track-tags-view [data owner]
  (reify
    om/IRender
    (render [this]
      (if-not (nil? (:current-track-id data))
        (let [music-info (core/get-music-info-from-id (:current-track-id data))
              tags (.-tags music-info)]
          (dom/div nil
            (dom/div nil (.-title tags))
            (dom/div nil (.-album tags))
            (dom/div nil (.-artist tags))))))))

(defn download-progress [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/li nil "Downloading: " (* 100 (/ (:data-downloaded data) (:file-size data))) "%"))))

(defn download-progress-view [data owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/div nil
        (om/build-all download-progress (vals (:download-progress data)))))))

(om/root download-progress-view core/app-state {:target (. js/document (getElementById "download-progress"))})
(om/root users-list-view core/app-state {:target (. js/document (getElementById "userslist"))})
(om/root messages-view core/app-state {:target (. js/document (getElementById "messages-window"))})
(om/root users-upload-progress-view core/app-state {:target (. js/document (getElementById "users-upload-progress"))})
(om/root username-form core/app-state {:target (. js/document (getElementById "username-form"))})
(om/root message-form core/app-state {:target (. js/document (getElementById "message-form"))})
(om/root current-track-tags-view core/app-state {:target (. js/document (getElementById "current-track-tags"))})

; music player
(defn resume-button [data owner]
  (reify
    om/IRender
    (render [this]
      (if (:signed-in? data)
        (dom/button #js {:onClick core/resume} "Resume")))))

(defn pause-button [data owner]
  (reify
    om/IRender
    (render [this]
      (if (:signed-in? data)
        (dom/button #js {:onClick core/pause} "Pause")))))

(defn previous-track-button [data owner]
  (reify
    om/IRender
    (render [this]
      (if (:signed-in? data)
        (if-not (nil? (:current-track-id data))
          (if (< 0
                 (.-tracknum (core/get-music-info-from-id (:current-track-id data))))
            (dom/button #js {:onClick core/previous-track} "Previous")
            (dom/button #js {:onClick core/previous-track :disabled true} "Previous"))
          (dom/button #js {:onClick core/previous-track :disabled true} "Previous"))))))

(defn next-track-button [data owner]
  (reify
    om/IRender
    (render [this]
      (if (:signed-in? data)
        (if-not (nil? (:current-track-id data))
          (if (> (- (count (:music-info data)) 1)
                (.-tracknum (core/get-music-info-from-id (:current-track-id data))))
            (dom/button #js {:onClick core/next-track} "Next")
            (dom/button #js {:onClick core/next-track :disabled true} "Next"))
          (dom/button #js {:onClick core/next-track :disabled true} "Next"))))))

(defn restart-button [data owner]
  (reify om/IRender
    (render [this]
      (if (:signed-in? data)
        (dom/button #js {:onClick core/restart-track} "Restart")))))

(defn loop-button [data owner]
  (reify om/IRender
    (render [this]
      (if (:signed-in? data)
        (if (:looping? data)
          (dom/button #js {:onClick core/toggle-loop} "UnLoop")
          (dom/button #js {:onClick core/toggle-loop} "Loop"))))))

(defn track-view [data owner]
  (reify
    om/IRender
    (render [this]
      (let [tags (.-tags data)
            title (.-title tags)
            artist (.-artist tags)
            album (.-album tags)
            username (.-username data)]
        (dom/li nil title " - " artist " - " album  " - Uploaded by " username)))))

(defn track-queue [data owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/span nil
        (om/build-all track-view (:music-info data))))))

(om/root resume-button core/app-state {:target (. js/document (getElementById "play-button"))})
(om/root pause-button core/app-state {:target (. js/document (getElementById "pause-button"))})
(om/root previous-track-button core/app-state {:target (. js/document (getElementById "previous-track-button"))})
(om/root next-track-button core/app-state {:target (. js/document (getElementById "next-track-button"))})
(om/root restart-button core/app-state {:target (. js/document (getElementById "restart-button"))})
(om/root loop-button core/app-state {:target (. js/document (getElementById "loop-button"))})
(om/root track-queue core/app-state {:target (. js/document (getElementById "playlist"))})
