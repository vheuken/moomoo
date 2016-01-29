(ns moomoo.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [moomoo.user-test]))

(doo-tests 'moomoo.user-test)
