(ns moomoo.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [cljs.nodejs :as node]
              [moomoo.user-test]
              [moomoo.room-test :as room]
              [moomoo.server-interface-test]))

(defonce redis-client (.createClient (node/require "redis")))

(println "Flushing Redis...")
(.flushall redis-client)

(doo-tests 'moomoo.user-test
           'moomoo.room-test
           'moomoo.server-interface-test)
