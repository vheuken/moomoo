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
        room-id   "test-room-id-sign-in"]
    (async done
      (server/sign-in socket-id room-id
        (fn [sign-in-info]
          (is (not (nil? (:user-id sign-in-info))))
          (user/get-user-id socket-id
            (fn [user-id]
              (is (= (:user-id sign-in-info) user-id))
              (done))))))))
