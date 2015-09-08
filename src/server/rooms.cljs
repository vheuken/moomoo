(ns moomoo.rooms
  (:require [cljs.nodejs :as nodejs]
            [cognitect.transit :as transit]
            [clojure.string :as string]))

(defonce id3 (nodejs/require "id3js"))
(defonce base64-arraybuffer (nodejs/require "base64-arraybuffer"))
(defonce js-uuid (nodejs/require "uuid"))
(defonce redis-client (.createClient (nodejs/require "redis")))

; taken from get-all-users fn
; should probably go back there
(defn users-to-list [reply]
  (let [user-hash (js->clj reply)]
    (vec (map #(val %) user-hash))))

(defn set-username [room id username callback]
  (.hset redis-client (string/join ["room:" room ":users"]) id username
    (fn [err reply]
      (.set redis-client (string/join ["users:" id]) room callback))))

(defn get-username [room id callback]
  (.hget redis-client (string/join ["room:" room ":users"]) id
    (fn [err reply]
      (if-not (nil? reply)
        (callback (.toString reply))
        (callback nil)))))

(defn get-all-users [room callback]
  (.hgetall redis-client (string/join ["room:" room ":users"])
    (fn [err reply]
      (callback (users-to-list reply)))))

(defn get-num-of-users [room callback]
  (.hlen redis-client (str "room:" room ":users")
    (fn [err reply]
      (callback reply))))

(defn get-room-from-user-id [id callback]
  (.get redis-client (str "users:" id) #(callback %2)))

(defn delete-user [id callback]
  (.get redis-client (str "users:" id)
    (fn [err reply]
      (if-not (nil? reply)
        (let [room (.toString reply)]
          (.hdel redis-client (str "room:" room ":users") id
            #(.del redis-client (str "users:" id) callback)))))))

(defn disconnect [socket-id callback]
  (.get redis-client (str "users:" socket-id)
    (fn [err reply]
      (if-not (nil? reply)
        (delete-user socket-id #(callback reply))
        callback))))

(defn image-tags-to-base64 [tags]
  (let [image-tag (get (get tags "v2") "image")
        image-data (get image-tag "data")]
    (if-not (nil? image-tag)
      (merge tags {"v2" (merge image-tag {"data" (.encode base64-arraybuffer image-data)})})
      tags)))

(defn does-room-exist? [room callback]
  (.get redis-client (str "room:" room ":current-track")
    (fn [err reply]
      (if (nil? reply)
        (callback false)
        (callback true)))))

(defn init-room [room callback]
  (.set redis-client (str "room:" room ":current-track") 0
    (fn []
      (.set redis-client (str "room:" room ":playing?") "false"
        (fn []
          (callback))))))

(defn get-current-track [room callback]
  (.get redis-client (str "room:" room ":current-track")
    (fn [err reply]
      (callback (js/parseInt reply)))))

(defn is-playing? [room callback]
  (.get redis-client (str "room:" room ":playing?")
    (fn [err reply]
      (if (= "true" reply)
        (callback true)
        (callback false)))))

(defn set-track-position [room track-id position callback]
  (.hset redis-client (str "room:" room ":track-order") position track-id
    (fn []
      (callback))))

(defn set-current-track-position [room position callback]
  (let [writer (transit/writer :json)
        track-position-info {:position position
                             :start-time (.now js/Date)}]
  (.set redis-client (str "room:" room ":track-position")
                     (transit/write writer track-position-info)
    (fn [err reply]
      (callback track-position-info)))))

(defn get-current-track-position [room callback]
 (let [reader (transit/reader :json)]
   (.get redis-client (str "room:" room ":track-position")
     (fn [err reply]
       (callback (transit/read reader reply))))))

(defn pause-current-track [room position callback]
  (let [writer (transit/writer :json)]
    (.set redis-client (str "room:" room ":track-position")
                       (transit/write writer {:position position
                                              :start-time (.now js/Date)})
      (fn [err reply]
        (.set redis-client (str "room:" room ":playing?") "false"
          (fn [err reply]
            (callback)))))))

(defn resume-current-track [room callback]
  (let [reader (transit/reader :json)]
    (.get redis-client (str "room:" room ":track-position")
      (fn [err reply]
        (let [old-track-position-info (transit/read reader reply)
              new-track-position-info (merge old-track-position-info {:start-time (.now js/Date)})
              writer (transit/writer :json)]
          (.set redis-client (str "room:" room ":track-position")
                             (transit/write writer new-track-position-info)
            (fn []
              (.set redis-client (str "room:" room ":playing?") "true"
                (fn []
                  (callback))))))))))

(defn change-current-track-position [room position callback]
  (let [writer (transit/writer :json)]
    (.set redis-client (str "room:" room ":track-position")
                       (transit/write writer {:position position
                                              :start-time (.now js/Date)})
      (fn []
        (callback)))))

(defn get-num-of-tracks [room callback]
  (println "Calling get-num-of-tracks")
  (.hlen redis-client (str "room:" room ":music-info")
    (fn [err reply]
      (println "HI!!!")
      (callback reply))))

(defn set-music-info [absolute-file-path
                      track-id
                      original-file-name
                      socket-id
                      callback]
  (id3 #js {:file absolute-file-path
            :type id3.OPEN_LOCAL}
    (fn [err tags]
      (get-room-from-user-id socket-id
        (fn [room]
          (get-username room socket-id
            (fn [username]
              (get-num-of-tracks room
                (fn [track-num]
                  (let [tags (image-tags-to-base64 (js->clj tags))
                        writer (transit/writer :json)
                        music-info {:tags tags
                                    :username username
                                    :originalfilename original-file-name
                                    :id track-id
                                    :tracknum track-num}
                        music-info-json (transit/write writer music-info)]
                    (.hset redis-client (str "room:" room ":music-info")
                                        track-id
                                        music-info-json
                      (fn []
                        (.hset redis-client (str "room:" room ":music-files")
                                            track-id
                                            absolute-file-path
                          (fn [err reply]
                                (set-track-position room track-id track-num
                                  (fn []
                                    (callback music-info)))))))))))))))))

; TODO: Transit should translate this(?)
(defn get-music-info [room track-id callback]
  (.hget redis-client (str "room:" room ":music-info") track-id
    (fn [err reply]
      (callback reply))))

(defn get-music-file [room track-id callback]
  (.hget redis-client (str "room:" room ":music-files") track-id
    (fn [err reply]
      (callback reply))))

(defn get-track-id-from-position [room position callback]
  (.hget redis-client (str "room:" room ":track-order") position
    (fn [err reply]
      (callback reply))))

(defn change-track [room position sound-id callback]
  (.hget redis-client (str "room:" room ":track-order") position
    (fn [err track-id]
      (.set redis-client (str "room:" room ":current-track") position
        (fn []
          (.set redis-client (str "room:" room ":current-sound") sound-id
            (fn []
              (callback track-id))))))))

(defn get-current-sound-id [room callback]
  (.get redis-client (str "room:" room ":current-sound")
    (fn [err reply]
      (callback reply))))

(defn add-to-change-track-list [room track-num callback]
  (.rpush redis-client (str "room:" room ":change-track-list") track-num
    (fn [err reply]
      (callback))))

(defn user-ready-to-start [socket-id callback]
  (get-room-from-user-id socket-id
    (fn [room]
      (.lpush redis-client (str "room:" room ":sync-start") socket-id
        (fn [err reply]
          (callback reply))))))

(defn user-track-complete [socket-id callback]
  (get-room-from-user-id socket-id
    (fn [room]
      (.lpush redis-client (str "room:" room ":track-complete") socket-id
        (fn [err reply]
          (callback reply))))))

(defn clear-ready-to-start [room callback]
  (.del redis-client (str "room:" room ":sync-start")
    (callback)))

(defn clear-track-complete [room callback]
  (.del redis-client (str "room:" room ":track-complete")
    (callback)))

(defn next-track [room callback]
  (.get redis-client (str "room:" room ":current-track")
    (fn [err current-track-num]
      (get-num-of-tracks room
        (fn [num-of-tracks]
          (if (>= current-track-num num-of-tracks)
            (callback nil)
          (.incr redis-client (str "room:" room ":current-track")
            (fn [err track-num]
              (get-track-id-from-position room track-num
                (fn [track-id]
                  (let [sound-id (.v4 js-uuid)]
                    (.set redis-client (str "room:" room ":current-sound") sound-id
                      (fn [err reply]
                        (callback track-id sound-id))))))))))))))

(defn get-all-music-info [room-id callback]
  (.hgetall redis-client (str "room:" room-id ":music-info")
    (fn [err music-info-reply]
      (let [info (vals (js->clj music-info-reply))
            reader (transit/reader :json)
            info-to-send (map #(transit/read reader %1) info)]
        (if (empty? info-to-send)
          (callback nil)
          (callback  (clj->js info-to-send)))))))

(defn has-track-started? [room callback]
  (.get redis-client (str "room:" room ":started?")
    (fn [err reply]
      (println reply)
      (if (= "true" reply)
        (callback true)
        (callback false)))))

(defn start-current-track [room callback]
  (println "STARTING!")
  (.set redis-client (str "room:" room ":started?") "true"
    (fn []
      (set-current-track-position room 0
        (fn [track-position-info]
          (callback track-position-info))))))

(defn track-complete [room callback]
  (.set redis-client (str "room:" room ":started?") "false"
    (fn [err reply]
      (callback))))

(defn start-looping [room callback]
  (.set redis-client (str "room:" room ":looping?") "true"
    (fn [err reply]
      (callback))))

(defn stop-looping [room callback]
  (.set redis-client (str "room:" room ":looping?") "false"
    (fn [err reply]
      (callback))))

(defn is-looping? [room callback]
  (.get redis-client (str "room:" room ":looping?")
    (fn [err reply]
      (if (= reply "true")
        (callback true)
        (callback false)))))

(defn is-track-changing? [room callback]
  (.get redis-client (str "room:" room ":changing-track?")
    (fn [err reply]
      (if (= reply "true")
        (callback true)
        (callback false)))))

(defn start-changing-track [room callback]
  (.eval redis-client "local room_id = ARGV[1] local track = redis.call('lrange', 'room:' .. room_id .. ':change-track-list', -1, -1)[1] if track ~= nil then redis.call('del', 'room:' .. room_id .. ':change-track-list') end return track"
        0 "room"
    (fn [err reply]
      (if (= "true" reply)
        (callback true)
        (callback false)))))

(defn stop-changing-track [room]
  (.set redis-client (str "room:" room ":changing-track?") "false"))

(defn delete-room [room]
  (let [lua-command "local keys = redis.call('keys', ARGV[1]) \n for i=1,#keys,5000 do \n redis.call('del', unpack(keys, i, math.min(i+4999, #keys))) \n end \n return keys"]
    (.eval redis-client lua-command 0 (str "room:" room ":*"))))

(defn handle-disconnect [room callback]
  (let [lua-command
        "local users = redis.call('hgetall', 'room:' .. ARGV[1] .. ':users') \n if next(users) == nil then \n local keys = redis.call('keys', 'room:' .. ARGV[1] .. ':*') \n for i=1,#keys,5000 do \n redis.call('del', unpack(keys, i, math.min(i+4999, #keys))) \n end \n return nil \n end \n local newIndex = 1 \n local prunedUsers = {} \n for i=2,#users,2 do \n prunedUsers[newIndex] = users[i] \n newIndex = newIndex + 1 \n end \n return prunedUsers"]
    (.eval redis-client lua-command 0 room
      (fn [err reply]
        (println reply)
        (if (nil? reply)
          (callback [])
          (callback (js->clj reply)))))))

(defn clear-songs [room-id callback]
  (.del redis-client (str "room:" room-id ":music-info")
    (fn [err reply]
      (.del redis-client (str "room:" room-id ":music-files")
        (fn [err reply]
          (.del redis-client  (str "room:" room-id ":track-order")
            (fn [err reply]
              (.del redis-client (str "room:" room-id ":current-track")
                (fn [err reply]
                  (.del redis-client (str "room:" room-id ":current-sound")
                    (.del redis-client (str "room:" room-id ":sync-start")
                      (fn [err reply]
                        (.set redis-client (str "room:" room-id ":playing?") "false"
                          (fn [err reply]
                            (callback)))))))))))))))

(defn delete-track [room-id track-id callback]
  (.hdel redis-client (str "room:" room-id ":music-info") track-id
    (fn [err reply]
      (.hdel redis-client (str "room:" room-id ":music-files") track-id
        (fn [err reply]
          (let [command "local room_id = ARGV[1] local track_id = ARGV[2] local next_track_id = nil local track_order = redis.call('hgetall', 'room:' .. room_id .. ':track-order') local sorted_track_order = {} local p = 0 for i=1, #track_order, 2 do for a=1, #track_order, 2 do local key = track_order[a] if tonumber(key) == p then sorted_track_order[i] = key sorted_track_order[i+1] = track_order[a+1] end end p = p + 1 end track_order = sorted_track_order for i=2, #track_order, 2 do if track_order[i] == track_id then next_track_id = track_order[i+2] redis.call('hdel', 'room:' .. room_id .. ':track-order', track_order[i-1]) for a=i+2, #track_order, 2 do local id = track_order[a] local old_key = track_order[a-1] local new_key = tostring(tonumber(old_key) - 1) redis.call('hset', 'room:' .. room_id .. ':track-order', new_key, id) if a == #track_order then redis.call('hdel', 'room:' .. room_id .. ':track-order', old_key) end end return next_track_id end end return nil"]
            (.eval redis-client command 0 room-id track-id
              (fn [err next-track-id]
                (callback next-track-id)))))))))
