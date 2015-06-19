(ns moomoo.core
  (:require [cljs.nodejs :as nodejs]))

(nodejs/enable-util-print!)

(def port 3001)

(def http (nodejs/require "http"))
(def socketio (nodejs/require "socket.io"))

(defn disconnect [socket]
  (.log js/console "A user has disconnected!"))

(defn connection [socket]
  (.log js/console "A user has connected!")
  (.on socket "disconnect"
    (fn []
      (disconnect socket))))

(defn -main []
  (println "Hello world!")
  (let [app (.createServer http)
        io (.listen socketio app)]
    (.on io "connection"
      (fn [socket]
        (connection socket)))
    (.listen app port)))

(set! *main-cli-fn* -main)
