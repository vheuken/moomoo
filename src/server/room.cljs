(ns moomoo.room
  (:require [cljs.nodejs :as node]))

(defonce redis-client (.createClient (node/require "redis")))

(defn get-users [room-id callback]
  (.hgetall redis-client
            (str "room:" room-id ":users")
            (fn [_ users-data]
              (if (nil? users-data)
                (callback {})
                (let [users-data (js->clj users-data)
                      users (zipmap (keys users-data)
                                    (map #(js->clj (.parse js/JSON %))
                                         (vals users-data)))]
                  (callback users))))))
