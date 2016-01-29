(ns moomoo.cleanup-tests
  (:require [cljs.nodejs :as node]))

(defonce redis-client (.createClient (node/require "redis")))


(println "Flushing Redis...")
(.flushall redis-client)

