(ns moomoo.socketio-interface-test
  (:require [cljs.test :refer-macros [async deftest is testing use-fixtures]]
            [cljs.nodejs :as node]
            [moomoo.fixtures :as fixtures]
            [moomoo.socketio-interface :as io-interface]))

(defonce port 3001)
(defonce io (node/require "socket.io-client"))
(defonce express (node/require "express"))
(defonce app (express))
(defonce server (.Server (node/require "http") app))

#_(use-fixtures :each
  {:before (fn []
             (fixtures/flush-all)
             (io-interface/initialize! server
                                       #js {"heartbeat interval" 5
                                            "heartbeat timeout"  15})

             (io-interface/start-listening!)
             (.listen server port)
             (def socket
                 (.connect io
                           "http://localhost:3001"
                           #js {:multiplex false}))
             (async done
               (.on socket "connect" (fn []
                                       (println "Connected to server!")
                                       (done)))))
   :after  (fn []
             (.disconnect socket)
             (fixtures/flush-all))})

#_(deftest sign-in
  (let [username "test-username-sign-in"
        room-id  "test-room-id-sign-in"]
    (async done
      (.on socket "sign-in-success"
        (fn [user-id]
          (is (not (nil? user-id)))
          (done)))
      (.emit socket "sign-in" room-id username))))
