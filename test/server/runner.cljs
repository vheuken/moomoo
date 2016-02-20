(ns moomoo.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [moomoo.user-test]
              [moomoo.room-test]
              [moomoo.server-interface-test]
              [moomoo.socketio-interface-test]
              [moomoo.hashing-test]
              [moomoo.fixtures :as fixtures]))

(doo-tests 'moomoo.user-test
           'moomoo.room-test
           'moomoo.server-interface-test
           'moomoo.socketio-interface-test
           'moomoo.hashing-test
           'moomoo.fixtures)
