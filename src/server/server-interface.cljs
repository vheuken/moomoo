(ns moomoo.server-interface
  (:require [cljs.nodejs :as node]
            [moomoo.user :as user]))

(defonce js-uuid (node/require "uuid"))

(defn sign-in [socket-id room-id username callback]
  (let [user-id (.v4 js-uuid)]
    (user/set-user-id! user-id socket-id
      (fn []
        (user/set-username! user-id username
          (fn []
            (callback user-id)))))))
