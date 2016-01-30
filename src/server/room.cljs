(ns moomoo.room
  (:require [cljs.nodejs :as node]))

(defonce redis-client (.createClient (node/require "redis")))

(defn get-users [room-id callback]
  (.hgetall redis-client
            (str "room:" room-id ":users")
            (fn [_ users-data]
              (let [users-data (js->clj users-data)
                    users (update-in users-data (keys users-data) (fn [a]
                                                                    (js->clj (.parse js/JSON a))))]
                (callback (dissoc users nil))))))
