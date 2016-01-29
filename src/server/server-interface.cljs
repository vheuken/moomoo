(ns moomoo.server-interface
  (:require [cljs.nodejs :as node]
            [moomoo.user :as user]
            [moomoo.room :as room]))

(defonce js-uuid (node/require "uuid"))

(defn sign-in [socket-id room-id username callback]
  (let [user-id (.v4 js-uuid)]
    (user/set-user-id! user-id socket-id
      (fn []
        (user/set-username! user-id username
          (fn []
            (user/set-room-id! user-id room-id
              (fn []
                (room/add-user! room-id user-id
                  (fn []
                    (callback user-id)))))))))))

(defn sign-out [socket-id callback]
  (user/get-user-id socket-id
    (fn [user-id]
      (user/get-room-id user-id
        (fn [room-id]
          (user/delete! user-id
            (fn []
              (room/delete-user! room-id user-id
                (fn []
                  (callback))))))))))
