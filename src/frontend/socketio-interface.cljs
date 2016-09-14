(ns moomoo-frontend.socketio-interface
  (:require-macros
   [cljs.core.async.macros :as asyncm :refer (go go-loop)])
  (:require [moomoo-frontend.globals :as g]
            [moomoo-frontend.client-interface :as client]
            [moomoo-frontend.uploads :as uploads]
            [cljs.core.async :as async :refer (<! >! put! chan)]
            [taoensso.sente :as sente :refer (cb-success?)]))

(let [{:keys [chsk ch-recv send-fn state]}
      (sente/make-channel-socket! (str "/" g/room-id "/chsk")
                                  {:type :auto})]
  (def chsk chsk)
  (def ch-chsk ch-recv) ; ChannelSocket's receive channel
  (def chsk-send! send-fn) ; ChannelSocket's send API fn
  (def chsk-state state)) ; Watchable, read-only atom

(defn sign-in [username]
  (println "Signing in with username " username)
  (chsk-send! [:room/sign-in {:username username :room-id g/room-id}] 8000))

(defn event-handler [f]
  (println "YO")
  (println f))

(sente/start-client-chsk-router! ch-chsk event-handler)
