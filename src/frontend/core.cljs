(ns moomoo-frontend.core
  (:require [moomoo-frontend.globals :as g]
            [moomoo-frontend.socketio-interface]
            [moomoo-frontend.renderer]))

(.setup js/soundManager
        #js {:html5PollingInterval 50
             :onready #(.createSound js/soundManager
                                     #js {:id "join-sound"
                                          :url "/audio/moomoo.wav"})})
