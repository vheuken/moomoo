(ns moomoo.rooms-test
  (:require-macros [cemerick.cljs.test
                    :refer (is deftest with-test run-tests testing test-var
                            done use-fixtures)])
  (:require [cemerick.cljs.test :as t]
            [cljs.nodejs :as nodejs]
            [moomoo.rooms :as rooms]))

(def redis-client (.createClient (nodejs/require "redis")))

(defn clear-redis-fixture []
  (.flushall redis-client))

(use-fixtures :once clear-redis-fixture)

(deftest ^:async username
  (let [room "room:test1"
        id   "test"
        user "Ricky"]
    (rooms/set-username room id user)
    (rooms/get-username room id
      (fn [err reply]
        (is (= user (.toString reply)))
        (done)))))

(deftest ^:async get-all-users
  (let [room "room:test2"
        user-id1 "One"
        user-id2 "Two"
        user1 "Paul"
        user2 "Lee"]
    (rooms/set-username room user-id1 user1)
    (rooms/set-username room user-id2 user2)
    (rooms/get-all-users room
      (fn [err reply]
        (is (= [user1 user2] reply))
        (done)))))
