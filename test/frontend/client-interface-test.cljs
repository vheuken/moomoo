(ns moomoo-frontend.client-interface-test
  (:require [cljs.test :refer-macros [deftest is testing]]
            [moomoo-frontend.client-interface :as client]))

(deftest sign-in-success
  (let [state (atom {:user-id nil})
        state-keys (keys @state)
        user-id "user-id-test"]
    (client/sign-in-success! state user-id)
    (is (= user-id (:user-id @state)))
    (is (= (keys @state) state-keys))))
