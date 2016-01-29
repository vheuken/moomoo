(ns moomoo.room-test
  (:require [cljs.test :refer-macros [async deftest is testing]]
            [moomoo.room :as room]))

(deftest add-user
  (async done
    (let [room-id "test-room-id-add-user"
          user-id "test-user-id-add-user"]
      (room/add-user! room-id user-id
        (fn []
          (room/get-users room-id
            (fn [users]
              (is (some #{user-id} users))
              (done))))))))

(deftest get-users-empty
  (async done
    (let [room-id "test-room-id-get-users-empty"]
      (room/get-users room-id
        (fn [users]
          (is (empty? users))
          (done))))))
