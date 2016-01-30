(ns moomoo.user-test
  (:require [cljs.test :refer-macros [async deftest is testing use-fixtures]]
            [moomoo.user :as user]
            [moomoo.fixtures :as fixtures]))

(use-fixtures :each
  {:before fixtures/flush-all
   :after  fixtures/flush-all})

(deftest add-user
  (let [user-id "test-user-id-user-id"
        socket-id "test-socket-id-user-id"
        username "test-username"
        room-id "test-room"]
    (async done
      (user/add-user! user-id socket-id username room-id
        (fn []
          (user/get-user-id socket-id
            (fn [id]
              (is (= id user-id))
              (user/get-room-id user-id
                (fn [id]
                  (is (= id room-id))
                  (user/get-socket-id user-id
                    (fn [id]
                      (is (= id socket-id))
                      (user/get-username user-id
                        (fn [uname]
                          (is (= uname username))
                          (done))))))))))))))

(deftest delete
  (let [user-id "test-user-id-delete"
        socket-id "test-socket-id-delete"
        username "test-username-delete"
        room-id "test-room-id-delete"]
    (async done
      (user/add-user! user-id socket-id username room-id
        (fn []
          (user/delete! user-id
            (fn []
              (user/get-user-id socket-id
                (fn [id]
                  (is (nil? id))
                  (user/get-socket-id user-id
                    (fn [id]
                      (is (nil? id))
                      (user/get-room-id user-id
                        (fn [id]
                          (is (nil? id))
                          (done))))))))))))))
