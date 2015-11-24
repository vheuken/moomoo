(ns moomoo-frontend.server-interface
  (:require [moomoo-frontend.core :as core]
            [moomoo-frontend.player :as player]))

(.on core/socket "sign-in-success"
  (fn []
    (println "Successfully signed in!")
    (swap! core/app-state assoc :signed-in? true)))

(.on core/socket "chat-message"
  (fn [message]
    (println "Received chat-message signal:" message)
    (swap! core/app-state assoc :messages (conj (:messages @core/app-state) message))
    (swap! core/app-state assoc :message-received? true)))

(.on core/socket "users-list"
  (fn [users]
    (println "Received users-list signal: " users)
    (let [users (js->clj users)]
      (swap! core/app-state assoc :users users))))

(.on core/socket "file-upload-info"
  (fn [file-upload-info]
    (if (= (.-totalsize file-upload-info) (.-bytesreceived file-upload-info))
      (swap! core/app-state assoc :current-uploads-info
        (dissoc (:current-uploads-info @core/app-state) (.-id file-upload-info)))
      (swap! core/app-state assoc :current-uploads-info
        (merge (:current-uploads-info @core/app-state)
          {(.-id file-upload-info) file-upload-info})))))

(.on core/socket "resume" player/resume!)

(.on core/socket "pause"
  (fn [position]
    (player/pause!)
    (player/set-position! position)))

(.on core/socket "position-change" player/set-position!)

(.on core/socket "clear-songs" core/clear-tracks!)
