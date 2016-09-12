(ns moomoo.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [selmer.parser :as selmer]
            [ring.middleware.defaults :refer [wrap-defaults 
                                              site-defaults]]
            [taoensso.sente :as sente]))

(defroutes app-routes
  (GET "/" [] "<h1>Hello world!</h1>")
  (GET "/:room-id" [room-id] (selmer/render-file "views/room.html" 
                                                 {:room-id room-id}))
  (route/not-found "<h1>Page not found</h1>"))

(def app
  (wrap-defaults app-routes site-defaults))
