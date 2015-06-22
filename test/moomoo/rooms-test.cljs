(ns moomoo.rooms-test
  (:require-macros [cemerick.cljs.test
                    :refer (is deftest with-test run-tests testing test-var
                            done)])
  (:require [cemerick.cljs.test :as t]
            [moomoo.rooms :as rooms]))

(deftest ^:async username
  (let [room "room:foo"
        id "test"
        user "Ricky"]
    (rooms/set-username room id user)
    (rooms/get-username room id
      (fn [err reply]
        (is (= user (.toString reply)))
        (done)))))
