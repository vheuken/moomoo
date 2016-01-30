(ns moomoo.server-interface-test
  (:require [cljs.test :refer-macros [async deftest is testing use-fixtures]]
            [moomoo.server-interface :as server]
            [moomoo.user :as user]
            [moomoo.room :as room]
            [moomoo.fixtures :as fixtures]))

(use-fixtures :each
  {:before fixtures/flush-all
   :after  fixtures/flush-all})

(deftest sign-in
  (let [socket-id "test-socket-id-sign-in"
        room-id   "test-room-id-sign-in"
        username  "test-username-sign-in"]
    (async done
      (server/sign-in socket-id room-id username
        (fn [user-id users]
          (is (not (nil? user-id)))
          (user/get-user-id socket-id
            (fn [id]
              (is (= id user-id))
              (user/get-username user-id
                (fn [user]
                  (is (= user username))
                  (is (some #{user-id} (keys users)))
                  (done))))))))))

(deftest sign-out
  (let [socket-id "test-socket-id-sign-out"
        room-id   "test-room-id-sign-out"
        username  "test-username-sign-out"]
    (async done
      (server/sign-in socket-id room-id username
        (fn [user-id]
          (server/sign-out socket-id
            (fn []
              (user/get-user-id socket-id
                (fn [id]
                  (is (nil? id))
                  (user/get-socket-id user-id
                    (fn [id]
                      (is (nil? id))
                      (room/get-users room-id
                        (fn [users]
                          (is (not (some #{user-id} users)))
                          (done))))))))))))))
