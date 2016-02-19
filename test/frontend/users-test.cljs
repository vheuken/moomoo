(ns moomoo-frontend.users-test
  (:require [cljs.test :refer-macros [deftest is testing]]
            [moomoo-frontend.users :as users]))

(deftest get-username-from-id
  (let [username "foo"
        user-id  "bar"
        users {username user-id}]
    ()))
