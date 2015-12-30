(ns moomoo-frontend.lastfm
  (:require [moomoo-frontend.app-state :as app-state]))

(defn get-music-info-from-id [track-id]
  (first (filter #(= (.-filehash %1)
                     (first (get (:track-id-hashes @app-state/app-state) track-id)))
                 (:music-info @app-state/app-state))))

(defn authenticate [token]
  (.emit app-state/socket "lastfm-auth" token))

(defn scrobble [id]
  (let [music-info (get-music-info-from-id id)
        tags (.-tags music-info)
        artist (if (nil? (.-artist tags))
                 ""
                 (first (.-artist tags)))
        track (if (nil? (.-title tags))
                ""
                (.-title tags))]
    (.emit app-state/socket
           "lastfm-scrobble"
           artist
           track)))

(defn signed-in? []
  (not (nil? (:lastfm-token @app-state/app-state))))

(defn scrobble? []
  (:should-scrobble? @app-state/app-state))
