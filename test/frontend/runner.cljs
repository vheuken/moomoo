(ns moomoo-frontend.runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [moomoo-frontend.client-interface-test]
            [moomoo-frontend.uploads-test]))

(doo-tests 'moomoo-frontend.client-interface-test
           'moomoo-frontend.uploads-test)
