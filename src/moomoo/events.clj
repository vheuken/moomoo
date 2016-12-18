(ns moomoo.events
  (:require [moomoo.users :as users]
            [moomoo.rooms :as rooms]
            [moomoo.utils :as utils]))

(defmulti handle-event! #(first (:event %)))

(defmethod handle-event! :default [f] 
  (let [event (:event f)
        user-id (:uid f)
        client-id (:client-id f)]
    (println "Unhandled event" event "from user-id" user-id
             "and client-id" client-id)))

(defmethod handle-event! :room/sign-in [f]
  (let [event (:event f)
        event-id (first event)
        event-params (second event)
        user-id (utils/uuid)
        room-id (:room-id event-params)
        username (:username event-params)]
    (println "User signing in as" username
             "in room" room-id)

    (when (empty? (rooms/get-users room-id))
      (rooms/create-room! room-id))

    (users/create-user! {:username username
                         :room-id room-id
                         :user-id user-id})

    [:moomoo/sign-in {:success? true
                      :state {:user-id user-id
                              :users (rooms/get-users room-id)}}]))
