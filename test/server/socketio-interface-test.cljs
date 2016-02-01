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

(use-fixtures :each
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

(deftest sign-in
  (let [username "test-username-sign-in"
        room-id  "test-room-id-sign-in"]
    (async done
      (.on socket "sign-in-success"
        (fn [user-id users]
          (is (not (nil? user-id)))
          (is (map? (js->clj users)))
          (is (map? (js->clj ((js->clj users) user-id))))
          (is (= username  ((js->clj ((js->clj users) user-id)) "username")))
          (done)))
      (.emit socket "sign-in" room-id username))))

(deftest user-joined
  (let [username   "test-username-sign-in"
        room-id    "test-room-id-sign-in"]
    (async done
      (.on socket "user-joined"
        (fn [users]
          (is (= 1 (count (keys (js->clj users)))))
          (done)))
      (.emit socket "sign-in" room-id username))))

(deftest chat-message
  (let [room-id "b"
        message "foo"
        username "bar"]
    (async done
      (.on socket "sign-in-success"
        (fn [user-id _]
          (.on socket "new-chat-message"
            (fn [chat-user-id m]
              (is (= message m))
              (is (= chat-user-id user-id))
              (println m)
              (done)))
          (.emit socket "chat-message" message)))
      (.emit socket "sign-in" room-id username))))
