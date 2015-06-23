(ns moomoo.core
  (:require [cljs.nodejs :as nodejs]
            [clojure.string :as string]
            [moomoo.rooms :as rooms]))

(nodejs/enable-util-print!)

(def port 3001)

(def http (nodejs/require "http"))
(def socketio (nodejs/require "socket.io"))

(def app (.createServer http))
(def io (.listen socketio app))



(defn connection [socket]
  (println "A user has connected!")
  (.on socket "disconnect" (fn []
    (.get rooms/redis-client (string/join ["users:" (.-id socket)])
      (fn [err reply]
        (if (not (nil? reply))
          (let [room (.toString reply)]
            (rooms/get-all-users room
              (fn [err reply]
                (.emit (.to io room) "userslist" reply)))))))
    (println "A user has disconnected!")))
  (.on socket "set_username"
    (fn [room username]
      (rooms/set-username room (.-id socket) username)
      (println (string/join [username " has joined " room]))))
  (.on socket "join_room"
    (fn [room]
      (.join socket room)))
  (.on socket "chat message"
    (fn [room msg]
      (rooms/get-username room (.-id socket)
        (fn [err reply]
          (let [msg-to-send (string/join [(.toString reply) ": " msg])]
            (.emit (.to io room) "chat message" msg-to-send)))))))

(defn -main []
  (.on io "connection"
    (complement connection))
  (println (string/join ["Listening on port " port]))
  (.listen app port))

(set! *main-cli-fn* -main)
