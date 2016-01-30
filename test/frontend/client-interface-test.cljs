(ns moomoo-frontend.client-interface-test
  (:require [cljs.test :refer-macros [deftest is testing]]
            [moomoo-frontend.client-interface :as client]))

(deftest sign-in-success
  (let [state (atom {:user-id nil
                     :users {}})
        state-keys (keys @state)
        user-id "user-id-test"
        username "foo"
        socket-id "socket-id"
        users {user-id {:socket socket-id
                        :username username}}]
    (client/sign-in-success! state user-id users)
    (is (= user-id (:user-id @state)))
    (is (= (keys @state) state-keys))
    (is (= users (:users @state)))))
