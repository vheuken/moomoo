(ns moomoo.core-test
  (:require-macros [cemerick.cljs.test
                    :refer (is deftest with-test run-tests testing test-var
                            done use-fixtures)])
  (:require [cemerick.cljs.test :as test]
            [cljs.nodejs :as nodejs]
            [moomoo.rooms :as rooms]
            [moomoo.core :as core]))

