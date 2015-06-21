(ns moomoo.rooms-test
  (:require-macros [cemerick.cljs.test
                    :refer (is deftest with-test run-tests testing test-var)])
  (:require [cemerick.cljs.test :as t]))

(:require moomoo.rooms)

(deftest username
  (moomoo.rooms/set-username "f" "a" "b")
  (is (= 1 1)))
