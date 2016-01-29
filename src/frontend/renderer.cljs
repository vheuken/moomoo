(ns moomoo-frontend.renderer
  (:require [om.core :as om  :include-macros true]
            [om.dom  :as dom :include-macros true]
            [moomoo-frontend.globals :as g])
   (:use [jayq.core :only [$]]))

(defonce $interface ($ :#interface))

(defn sign-in-form [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id "temp-background"}
        (dom/form #js {:id "username-input" :action ""}
                  "Enter Name: "
          (dom/input #js {:id "username" :type "text" :autoComplete "off"})
          (dom/button #js {:onClick (fn []
                                      (.play js/soundManager "join-sound")
                                      (.emit g/socket
                                             "sign-in"
                                             g/room-id
                                             (.val $interface "username-input"))
                                      false)}
                      "Join"))))))

(defn moomoo [data owner]
  (reify
    om/IRender
    (render [this]
      (if (nil? (:user-id data))
        (om/build sign-in-form nil)
        (dom/div nil "Logged in mother fucker")))))

(om/root moomoo g/app-state {:target (. js/document (getElementById "moomoo"))})
