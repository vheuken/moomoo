(ns moomoo.server-interface
  (:require [cljs.nodejs :as node]
            [moomoo.user :as user]
            [moomoo.room :as room]))

(defonce js-uuid (node/require "uuid"))

(defn sign-in [socket-id room-id username callback]
  (let [user-id (.v4 js-uuid)]
    (user/add-user! user-id socket-id username room-id
      (fn []
        (room/get-users room-id
          (fn [users]
            (callback user-id users)))))))

(defn sign-out [socket-id callback]
  (user/get-user-id socket-id
    (fn [user-id]
      (user/get-room-id user-id
        (fn [room-id]
          (user/delete! user-id
            (fn []
              (callback))))))))

(defn chat-message [socket-id user-id message callback]
  (user/get-socket-id user-id
    (fn [id]
      (if (= id socket-id)
        (callback {:message message
                   :user-id user-id})
        (callback nil)))))
