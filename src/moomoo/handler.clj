(ns moomoo.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [selmer.parser :as selmer]
            [ring.middleware.defaults :refer [wrap-defaults
                                              site-defaults]]
            [taoensso.sente :as sente]
            [org.httpkit.server :as http-kit]
            [taoensso.sente.server-adapters.http-kit
             :refer (get-sch-adapter)]
            [clojure.core.async
             :as a
             :refer [>! <! >!! <!! go chan buffer close! thread
                     alts! alts!! timeout]]))

(let [{:keys [ch-recv send-fn connected-uids
              ajax-post-fn ajax-get-or-ws-handshake-fn]}
      (sente/make-channel-socket! (get-sch-adapter) {})]

  (def ring-ajax-post                ajax-post-fn)
  (def ring-ajax-get-or-ws-handshake ajax-get-or-ws-handshake-fn)
  (def ch-chsk                       ch-recv) ; ChannelSocket's receive channel
  (def chsk-send!                    send-fn) ; ChannelSocket's send API fn
  (def connected-uids                connected-uids) ; Watchable, read-only atom
  )

(defroutes app-routes
  (GET "/" [] "<h1>Hello world!</h1>")
  (GET "/:room-id" [room-id] (selmer/render-file "views/room.html"
                                                 {:room-id room-id}))

  (GET "/:room-id/chsk" req (ring-ajax-get-or-ws-handshake req))
  (POST "/:room-id/chsk" req (ring-ajax-post req))

  (route/not-found "<h1>Page not found</h1>"))

(def app
  (-> (wrap-defaults app-routes site-defaults)
      ring.middleware.keyword-params/wrap-keyword-params
      ring.middleware.params/wrap-params))

(defn event-handler [f]
  (let [event (:event f)
        event-id (first event)
        event-params (second event)
        uid (:uid f)]
    (when (= event-id :room/sign-in)
      (println "User signing in as" (:username event-params)
               "in room" (:room-id event-params))
      ; if room does not exist
        ; create room
      ; add user
      ; send room state to client
      (chsk-send! uid [:moomoo/sign-in {:success? true}]))))

(defn start-router! []
  (sente/start-server-chsk-router! ch-chsk event-handler))

(defn start-server! [port]
  (def stop-ring-server! (http-kit/run-server app {:port port}))
  (def stop-socket-server! (start-router!)))

(defn stop-server! []
  (when-not (nil? stop-ring-server!)
    (stop-ring-server!)
    (stop-socket-server!)
    (def stop-ring-server! nil)
    (def stop-socket-server! nil)))

(defn reset-server! []
  (stop-server!)
  (start-server! 3000))
