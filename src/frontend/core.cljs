(ns moomoo-frontend.core)

(defonce room-id (.getAttribute (. js/document (getElementById "roomid")) "data"))
(defonce socket (js/io))
(defonce app-state (atom {:signed-in? false
                          }))

(enable-console-print!)

; TODO: We want to get rid of this at some point
;       and handle things more like the om tutorial handles things
(.hide (js/$ "#file-upload-input"))
(.submit (js/$ "#username-form")
  (fn []
    (.emit socket "sign-in" room-id (.val (js/$ "#username")))
    (.show (js/$ "#file-upload-input"))
    false))

(.on socket "connect" #(.emit socket "join-room" room-id))
(.on socket "sign-in-success"
  (fn []
    (println "Successfully signed in!")
    (swap! app-state assoc :signed-in? true)))
