(ns moomoo.core-test
  (:require-macros [cemerick.cljs.test
                    :refer (is deftest with-test run-tests testing test-var
                            use-fixtures)])
  (:require [cemerick.cljs.test :as test]
            [cljs.nodejs :as nodejs]
            [moomoo.core :as core]))


