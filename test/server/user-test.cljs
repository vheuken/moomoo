(ns moomoo.user-test
  (:require [cljs.test :refer-macros [async deftest is testing]]
            [moomoo.user :as user]))

(deftest foo
  (is (= 1 1)))
