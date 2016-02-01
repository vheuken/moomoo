(ns moomoo-frontend.socketio-interface
  (:require [moomoo-frontend.globals :as g]
            [moomoo-frontend.client-interface :as client]))

(.on g/socket "sign-in-success"
  (fn [user-id users]
    (let [users (js->clj users)]
      (println users)
      (client/sign-in-success! g/app-state user-id users))))

(.on g/socket "user-joined"
  (fn [users]
    (let [users (js->clj users)]
      (println users)
      (println "YOLO")
      (client/user-joined! g/app-state users))))

(.on g/socket "new-chat-message"
  (fn [user-id message]
    (client/chat-message-received! g/app-state {user-id message})))
