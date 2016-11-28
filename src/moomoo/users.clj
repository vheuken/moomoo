(ns moomoo.users
  (:require [taoensso.carmine :as car :refer (wcar)]))

(defmacro wcar* [& body] `(car/wcar {} ~@body))

(defn create-user! [{:keys [:username :room-id :user-id]}]
  (wcar* 
   (car/hset (str "user:" user-id) :username username)
   (car/hset (str "user:" user-id) :muted? false)
   (car/sadd (str "room:" room-id ":users") user-id))
  nil)

(defn get-user [user-id]
  )

