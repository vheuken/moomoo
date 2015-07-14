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
          (dom/input #js {:id "username" :type "text" :ref "username"})
          (dom/button nil "Join"))))))

(om/root users-list-view core/app-state {:target (. js/document (getElementById "userslist"))})
(om/root messages-view core/app-state {:target (. js/document (getElementById "messages-window"))})
(om/root file-upload-progress-view core/app-state {:target (. js/document (getElementById "progress"))})
(om/root username-form core/app-state {:target (. js/document (getElementById "username-form"))})
