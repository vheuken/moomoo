(ns moomoo.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [moomoo.rooms-test]))

(doo-tests 'moomoo.rooms-test)
