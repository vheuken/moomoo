(ns moomoo-frontend.core)

(defonce room-id (.getAttribute (. js/document (getElementById "roomid")) "data"))
(defonce socket (js/io))
(defonce app-state (atom {}))

(enable-console-print!)

(.on socket "connect" #(.emit socket "join-room" room-id))
