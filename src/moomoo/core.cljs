(ns moomoo.core
  (:require [cljs.nodejs :as nodejs]))

(nodejs/enable-util-print!)

(def port 3001)

(def http (nodejs/require "http"))
(def socketio (nodejs/require "socket.io"))

(defn connection [socket]
  (.log js/console "A user has connected!")
  (.on socket "disconnect"
    #(.log js/console "A user has disconnected!"))
  (.on socket "set_username"
    (fn [room username]
      (.log js/console username))))

(defn -main []
  (println "Hello world!")
  (let [app (.createServer http)
        io (.listen socketio app)]
    (.on io "connection"
      (complement connection))
    (.listen app port)))

(set! *main-cli-fn* -main)
