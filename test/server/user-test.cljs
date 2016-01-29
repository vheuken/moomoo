(ns moomoo.user-test
  (:require [cljs.test :refer-macros [async deftest is testing]]
            [moomoo.user :as user]))

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
