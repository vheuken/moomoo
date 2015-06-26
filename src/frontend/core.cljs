(ns moomoo-frontend.core
  (:require [om.core :as om :include-macros true]
            [om.dom  :as dom :include-macros true]))

(defonce room-id (.getAttribute (. js/document (getElementById "roomid")) "data"))
(defonce room (str "room:" room-id))
(defonce socket (js/io "http://localhost:3001"))
(defonce app-state (atom {:users []}))

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

(om/root users-list-view app-state {:target (. js/document (getElementById "userslist"))})

(.on socket "connect" #(.emit socket "join_room" room))

(.submit (js/$ "#username_form")
  (fn []
    (.emit socket "set_username" room (.val (js/$ "#username")))
    false))

(.on socket "userslist"
  (fn [users]
    (swap! app-state assoc :users users)))
