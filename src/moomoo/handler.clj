(ns moomoo.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [selmer.parser :as selmer]
            [ring.middleware.defaults :refer [wrap-defaults 
                                              site-defaults]]
            [taoensso.sente :as sente]
            [taoensso.sente.server-adapters.http-kit 
             :refer (get-sch-adapter)]))

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
  
  (GET "/chsk" req (ring-ajax-get-or-ws-handshake req))
  (GET "/chsk" req (ring-ajax-post) req)

  (route/not-found "<h1>Page not found</h1>"))

(def app
  (wrap-defaults app-routes site-defaults))
