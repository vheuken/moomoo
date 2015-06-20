(ns moomoo.test.rooms
  (:require-macros [cemerick.cljs.test
                    :refer (is deftest with-test run-tests testing test-var)])
  (:require [cemerick.cljs.test :as t]))

(deftest foo
  (is (= 0 1)))

(deftest bar
  (is (= 1 1)))
