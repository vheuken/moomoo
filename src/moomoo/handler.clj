(ns moomoo.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults 
                                              site-defaults]]))

(defroutes app-routes
  (GET "/" [] "<h1>Hello world!</h1>")
  (GET "/:room-id" [room-id] (str room-id))
  (route/not-found "<h1>Page not found</h1>"))

(def app
  (wrap-defaults app-routes site-defaults))
