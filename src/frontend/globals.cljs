(ns moomoo-frontend.globals)

(defonce socket (js/io))
(defonce room-id (.getAttribute (. js/document (getElementById "roomid")) "data"))

(defonce default-upload-slots (js/Number (.getAttribute (. js/document (getElementById "default-upload-slots")) "data")))

(defonce app-state (atom {:user-id nil
                          :users  {}
                          :messages []

                          ; Uploads
                          :files-to-hash {}
                          :uploads {}
                          :upload-slots 4
                          :client-uploads-order []
                          :room-uploads-order []

                          ; Tracks
                          :current-track-id nil
                          :track-order []
                          :tracks {}

                          ; Player
                          :volume 100
                          :current-sound-position 0
                          :current-sound-id nil}))
