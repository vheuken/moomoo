(ns moomoo.server-interface
  (:require [cljs.nodejs :as node]
            [moomoo.user :as user]))

(defonce js-uuid (node/require "uuid"))

(defn sign-in [socket-id room-id callback]
  (let [user-id (.v4 js-uuid)]
    (user/set-user-id! user-id socket-id
      (fn []
        (callback {:user-id user-id})))))
