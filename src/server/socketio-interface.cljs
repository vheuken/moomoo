(ns moomoo.socketio-interface
  (:require [cljs.nodejs :as node]))

(defonce socketio (node/require "socket.io"))
(defonce socketio-redis (node/require "socket.io-redis"))

(defn initialize! [server options]
  (def io (.listen socketio server options))
  (.adapter io (socketio-redis #js {:host "localhost"
                                    :port 6379})))

(defn connection [socket]
  (println "CONNECTED TO S"))

(defn start-listening! []
  (.on io "connection" connection))
