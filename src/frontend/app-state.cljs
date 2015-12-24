(ns moomoo-frontend.app-state)

(defonce socket (js/io))
(defonce default-upload-slots (js/Number (.getAttribute (. js/document (getElementById "default-upload-slots")) "data")))

(defonce app-state (atom {:signed-in? false
                          :messages []
                          :message-received? false
                          :users {}
                          :track-order []
                          :track-id-hashes {}
                          :music-info []
                          :current-track-id nil
                          :current-sound-id nil
                          :ball-being-dragged? false
                          :looping? false
                          :lastfm-token nil

                          ; Uploads
                          :file-hashes {}
                          :current-uploads-info {}
                          :upload-slots default-upload-slots
                          :uploads {}
                          :uploads-order []}))
