(ns moomoo-frontend.lastfm
  (:require [moomoo-frontend.app-state :as app-state]))

(defn authenticate [token]
  (.emit app-state/socket "lastfm-auth" token))
