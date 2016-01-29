(ns moomoo.fixtures
  (:require [cljs.test :refer-macros [async]]
            [cljs.nodejs :as node]))

(defonce redis-client (.createClient (node/require "redis")))

(defn flush-all []
  (async done
    (.flushall redis-client #(done))))

