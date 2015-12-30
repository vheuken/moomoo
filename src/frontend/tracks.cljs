(ns moomoo-frontend.tracks
  (:require [moomoo-frontend.app-state :as app-state]
            [moomoo-frontend.player :as player]))

(defn delete-track! [track-id]
  (println "Received delete-track signal:" track-id)
  (swap! app-state/app-state assoc :track-id-hashes (dissoc (:track-id-hashes @app-state/app-state) track-id))
  (swap! app-state/app-state assoc :track-order (vec (remove #(= track-id %1) (:track-order @app-state/app-state))))

  (if (= track-id (:current-track-id @app-state/app-state))
    (do
      (print "CURRENT TRACK DELETED!")
      (player/destroy-track (:current-sound-id @app-state/app-state))
      (swap! app-state/app-state assoc :current-track-id nil)
      (swap! app-state/app-state assoc :current-sound-id nil)
      (.emit app-state/socket  "track-deleted"))))

(defn clear-tracks! []
  (println "Clearing tracks!")
  (player/destroy-track (:current-sound-id @app-state/app-state))
  (swap! app-state/app-state assoc :track-id-hashes {})
  (swap! app-state/app-state assoc :track-order [])
  (swap! app-state/app-state assoc :music-info [])
  (swap! app-state/app-state assoc :current-track-id nil)
  (swap! app-state/app-state assoc :current-sound-id nil))

(defn get-music-info-from-id [track-id]
  (first (filter #(= (.-filehash %1)
                     (first (get (:track-id-hashes @app-state/app-state) track-id)))
                 (:music-info @app-state/app-state))))

(defn get-uploader-from-id [track-id]
  (last (get (:track-id-hashes @app-state/app-state) track-id)))
