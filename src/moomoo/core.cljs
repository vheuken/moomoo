(ns moomoo.core
  (:require [cljs.nodejs :as nodejs]
            [moomoo.rooms :as rooms]))

(nodejs/enable-util-print!)

(def port 3001)

(def http (nodejs/require "http"))
(def socketio (nodejs/require "socket.io"))

(def app (.createServer http))
(def io (.listen socketio app))

(defn connection [socket]
  (.log js/console "A user has connected!")
  (.on socket "disconnect"
    #(.log js/console "A user has disconnected!"))
  (.on socket "set_username"
    (fn [room username]
      (rooms/set-username room (.-id socket) username)))
  (.on socket "join_room"
    (fn [room]
      (.join socket room))))

(defn -main []
  (.on io "connection"
    (complement connection))
  (.listen app port))

(set! *main-cli-fn* -main)
