(ns moomoo-frontend.socketio-interface
  (:require [moomoo-frontend.globals :as g]))

(.on g/socket "sign-in-success"
  (fn [user-id]
    (swap! g/app-state assoc :user-id user-id)))
