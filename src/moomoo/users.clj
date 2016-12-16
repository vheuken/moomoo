(ns moomoo.users
  (:require [taoensso.carmine :as car :refer (wcar)]))

(defmacro wcar* [& body] `(car/wcar {} ~@body))

(defn create-user! [{:keys [:username :room-id :user-id]}]
  (wcar* 
   (car/hset (str "user:" user-id) :username username)
   (car/hset (str "user:" user-id) :muted? false)
   (car/hset (str "user:" user-id) :room-id room-id)
   (car/sadd (str "room:" room-id ":users") user-id))
  nil)

(defn delete-user! [user-id]
  (let [room-id (:room-id (get-user user-id))] 
    (wcar*
     (car/del (str "user:" user-id))
     (car/srem (str "room:" room-id ":users") user-id))))

(defn get-user [user-id]
  (apply hash-map
         (map-indexed #(if (even? %1)
                         (keyword %2)
                         %2)
         (wcar* (car/hgetall (str "user:" user-id))))))

