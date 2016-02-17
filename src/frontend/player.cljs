(ns moomoo-frontend.player
  (:require [moomoo-frontend.globals :as g]))

(defn while-playing []
  )

(defn duration []
  (if-let [current-sound (.getSoundById js/soundManager
                                          (:current-sound-id @g/app-state))]
    (.-duration current-sound)
    0))

(defn load-track! [sound-url sound-id on-load-callback]
  (.createSound js/soundManager #js {:id sound-id
                                     :url sound-url
                                     :autoLoad true
                                     :onload on-load-callback}))

(defn play-track! [sound-id position on-finish-callback]
  (swap! g/app-state assoc :current-sound-id sound-id)
  (.play js/soundManager sound-id #js {:whileplaying while-playing

                                       :volume (:volume @g/app-state)
                                       :from (if (> (duration) position)
                                               position
                                               (duration))}))
