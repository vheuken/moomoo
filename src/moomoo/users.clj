(ns moomoo.users
  (:require [taoensso.carmine :as car :refer (wcar)]
            [moomoo.utils :as utils]))

(defmacro wcar* [& body] `(car/wcar {} ~@body))

(defn create-user! [{:keys [:username :room-id :user-id :client-id]}]
  (wcar* 
   (car/hset (str "user:" user-id) :username username)
   (car/hset (str "user:" user-id) :muted? false)
   (car/hset (str "user:" user-id) :room-id room-id)
   (car/sadd (str "room:" room-id ":users-list") user-id)
   (car/set  (str "client:" client-id ":user-id") user-id)
   (car/set  (str "user:" user-id ":client-id") client-id))
  nil)

(defn get-user [user-id]
  (utils/vector->hash-map 
   (wcar* (car/hgetall (str "user:" user-id)))))

(defn delete-user! [user-id]
  (let [room-id (:room-id (get-user user-id))] 
    (wcar*
     (car/del (str "user:" user-id))
     (car/srem (str "room:" room-id ":users-list") user-id)
     (car/del (str "client:" client-id ":user-id"))
     (car/del (str "user:" user-id ":client-id")))))

