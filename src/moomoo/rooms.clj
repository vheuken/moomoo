(ns moomoo.rooms
  (:require [taoensso.carmine :as car :refer (wcar)]
            [moomoo.utils :as utils]))

(defmacro wcar* [& body] `(car/wcar {} ~@body))

(defn create-room! [room-id]
  (wcar*
   (car/hset (str "room:" room-id ":player-state") "paused?" false)
   (car/hset (str "room:" room-id ":player-state") "current-track" nil)))

(defn delete-room! [room-id]
  (wcar* 
   (car/del (str "room:" room-id ":player-state"))
   (car/del (str "room:" room-id ":users-list"))))

(defn get-users [room-id]
  (set (wcar* (car/smembers (str "room:" room-id ":users-list")))))

(defn get-player-state [room-id]
  (utils/vector->hash-map
   (wcar* (car/hgetall (str "room:" room-id ":player-state")))))
