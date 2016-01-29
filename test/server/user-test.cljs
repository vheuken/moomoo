(ns moomoo.user-test
  (:require [cljs.test :refer-macros [async deftest is testing use-fixtures]]
            [moomoo.user :as user]
            [moomoo.fixtures :as fixtures]))

(use-fixtures :each
  {:before fixtures/flush-all
   :after  fixtures/flush-all})

(deftest user-id
  (let [user-id "test-user-id-user-id"
        socket-id "test-socket-id-user-id"]
    (async done
      (user/set-user-id! user-id socket-id
        (fn []
          (user/get-user-id socket-id
            (fn [id]
              (is (= id user-id))
              (done))))))))

(deftest username
  (let [user-id "test-user-id-username"
        socket-id "test-socket-id-username"
        username "test-username-username"]
    (async done
      (user/set-username! user-id username
        (fn []
          (user/get-username user-id
            (fn [user]
              (is (= user username))
              (done))))))))

(deftest delete
  (let [user-id "test-user-id-delete"
        socket-id "test-socket-id-delete"
        username "test-username-username"]
    (async done
      (user/set-user-id! user-id socket-id
        (fn []
          (user/set-username! user-id username
            (fn []
              (user/delete! user-id
                (fn []
                  (user/get-user-id socket-id
                    (fn [id]
                      (is (nil? id))
                      (user/get-socket-id user-id
                        (fn [id]
                          (is (nil? id))
                          (done))))))))))))))
