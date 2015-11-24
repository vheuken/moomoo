(ns moomoo-frontend.server-interface
  (:require [moomoo-frontend.core :as core]
            [moomoo-frontend.player :as player]
            [clojure.string :as string]))

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

(.on core/socket "delete-track" core/delete-track!)

(.on core/socket "start-track"
  (fn [file-url position]
    (let [file-url (str (first (string/split (.-href (.-location js/window))
                                             #"/rooms"))
                        file-url)]
      (player/play-track! file-url
                         (:current-sound-id @core/app-state)
                         position
                         core/on-finish))))

(.on core/socket "track-change"
  (fn [track-id sound-id]
    (println "Received track-change signal:"
             "track-id:" track-id
             "sound-id:" sound-id)
    (let [last-current-track-id (:current-track-id @core/app-state)
          last-current-sound-id (:current-sound-id @core/app-state)]
      (swap! core/app-state assoc :current-track-id track-id)
      (swap! core/app-state assoc :current-sound-id sound-id)

      (if-not (nil? last-current-sound-id)
        (player/destroy-track last-current-sound-id)))

      (.emit core/socket "ready-to-start" sound-id)))

(.on core/socket "hotjoin-music-info"
  (fn [room-track-id-map
       room-music-info
       track-order
       current-track-id
       current-sound-id
       paused?]
    (println "Received room state:"
             "room-music-info:" room-music-info
             "track-order:" track-order
             "current-track-id:" current-track-id
             "current-sound-id:" current-sound-id
             "track-id-hashes:" room-track-id-map)

    (swap! core/app-state assoc :track-id-hashes (js->clj room-track-id-map))
    (swap! core/app-state assoc :track-order (js->clj track-order))
    (swap! core/app-state assoc :music-info (vec (map #(clj->js %1) (js->clj room-music-info))))

    (swap! core/app-state assoc :current-track-id current-track-id)
    (swap! core/app-state assoc :current-sound-id current-sound-id)

    (if paused?
      (player/pause!))

    (if-not (nil? current-sound-id)
      (.emit core/socket "ready-to-start" current-sound-id))))

(.on core/socket "set-loop"
  (fn [looping?]
    (println "Received set-loop signal with looping?:" looping?)
    (swap! core/app-state assoc :looping? looping?)))
