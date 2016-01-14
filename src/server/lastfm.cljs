(ns moomoo.lastfm
  (:require [cljs.nodejs :as nodejs]
            [moomoo.config :as config]
            [moomoo.file-hash :as file-hash]))

(defonce lastfm-api-url "http://ws.audioscrobbler.com/2.0/")
(defonce redis (nodejs/require "redis"))
(defonce redis-client (.createClient redis))
(defonce request (nodejs/require "request"))
(defonce parse-string (.-parseString (nodejs/require "xml2js")))

(defn save-session-key! [user-id session-key callback]
  (.set redis-client (str "user:" user-id ":lastfm-session") session-key callback))

(defn get-session-key [user-id callback]
  (.get redis-client (str "user:" user-id ":lastfm-session") #(callback %2)))

(defn authenticate! [user-id token callback]
  (let [api-key (config/data "lastfm-api-key")
            api-secret (config/data "lastfm-api-secret")
            method "auth.getSession"
            timestamp (Math.floor (/ (.now js/Date) 1000))
            signature (str "api_key" api-key
                           "method"  method
                           "token"   token
                           api-secret)
            signature-buffer (js/Buffer. signature)
            signature-hash (file-hash/get-hash-from-buffer signature-buffer)]
    (.post request
           #js {:url lastfm-api-url
                :form #js {:api_key api-key
                           :api_sig signature-hash
                           :token   token
                           :method  method}}
            (fn [err response body]
              (if (= (.-statusCode response) 200)
                (parse-string body
                  (fn [_ result]
                    (let [session     (first (.-session (.-lfm result)))
                          username    (first (.-name session))
                          session-key (first (.-key session))]
                      (save-session-key! user-id
                                         session-key
                                         #(callback :success username)))))
                (callback :failure nil))))))

(defn scrobble! [user-id artist track]
  (println "Scrobbling" artist track)
  (get-session-key user-id
    (fn [session-key]
      (let [api-key (config/data "lastfm-api-key")
            api-secret (config/data "lastfm-api-secret")
            method "track.scrobble"
            timestamp (Math.floor (/ (.now js/Date) 1000))
            signature (str "api_key" api-key
                           "artist"  artist
                           "method"  method
                           "sk"      session-key
                           "timestamp" timestamp
                           "track"   track
                           api-secret)
            signature-buffer (js/Buffer. signature)
            signature-hash (file-hash/get-hash-from-buffer signature-buffer)]
        (.post request
               #js {:url lastfm-api-url
                    :form #js {:api_key api-key
                               :api_sig signature-hash
                               :artist  artist
                               :method  method
                               :sk      session-key
                               :timestamp timestamp
                               :track   track}}
               #(println %1 %2 %3))))))
