(ns moomoo.server-interface-test
  (:require [cljs.test :refer-macros [async deftest is testing use-fixtures]]
            [moomoo.server-interface :as server]
            [moomoo.user :as user]
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
        (fn [user-id]
          (is (not (nil? user-id)))
          (user/get-user-id socket-id
            (fn [id]
              (is (= id user-id))
              (user/get-username user-id
                (fn [user]
                  (is (= user username))
                  (done))))))))))
