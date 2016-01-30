(ns moomoo-frontend.socketio-interface
  (:require [moomoo-frontend.globals :as g]
            [moomoo-frontend.client-interface :as client]))

(.on g/socket "sign-in-success"
  (fn [user-id users]
    (println (.-username ((js->clj users) user-id)))
    (let [users (js->clj users)
          users (update-in users (keys users) #(js->clj %1))]
      (println users)
      (client/sign-in-success! g/app-state user-id users))))
