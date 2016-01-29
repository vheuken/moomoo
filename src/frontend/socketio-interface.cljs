(ns moomoo-frontend.socketio-interface
  (:require [moomoo-frontend.globals :as g]
            [moomoo-frontend.client-interface :as client]))

(.on g/socket "sign-in-success"
  (fn [user-id]
    (client/sign-in-success! g/app-state user-id)))
