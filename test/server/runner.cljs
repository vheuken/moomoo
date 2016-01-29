(ns moomoo.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [cljs.nodejs :as node]
              [moomoo.user-test]
              [moomoo.room-test :as room]
              [moomoo.server-interface-test]
              [moomoo.cleanup-tests]))

(defonce redis-client (.createClient (node/require "redis")))

(doo-tests 'moomoo.user-test
           'moomoo.room-test
           'moomoo.server-interface-test
           'moomoo.cleanup-tests)


(println "Flushing Redis...")
(.flushall redis-client)

