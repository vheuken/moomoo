(ns moomoo-frontend.lastfm
  (:require [moomoo-frontend.app-state :as app-state]))

(defn authenticate [token]
  (.emit app-state/socket "lastfm-auth" token))

(defn scrobble [artist track]
  (.emit app-state/socket
         "lastfm-scrobble"
         artist
         track))

(defn signed-in? []
  (not (nil? (:lastfm-token @app-state/app-state))))

(defn scrobble? []
  (:should-scrobble? @app-state/app-state))
