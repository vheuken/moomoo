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
