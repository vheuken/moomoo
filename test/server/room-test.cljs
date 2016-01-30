(ns moomoo.room-test
  (:require [cljs.test :refer-macros [async deftest is testing use-fixtures]]
            [moomoo.room :as room]
            [moomoo.user :as user]
            [moomoo.fixtures :as fixtures]))

(use-fixtures :each
  {:before fixtures/flush-all
   :after  fixtures/flush-all})

(deftest get-users
  (async done
    (let [room-id "test-room-id-get-users-empty"
          user-id "test-user-id"
          socket-id "test-socket-id"
          username "test-username"]
      (room/get-users room-id
        (fn [users]
          (is (empty? users))
          (user/add-user! user-id socket-id username room-id
            (fn []
              (room/get-users room-id
                (fn [users]
                  (is (some #{user-id} (keys users)))
                  (is (= socket-id ((users user-id) "socket")))
                  (is (= username ((users user-id) "username")))
                  (done))))))))))
