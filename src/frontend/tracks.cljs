(ns moomoo-frontend.tracks
  (:require [moomoo-frontend.app-state :as app-state]
            [moomoo-frontend.core :as core]
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
      (.emit core/socket "track-deleted"))))
