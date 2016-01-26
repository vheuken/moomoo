(ns moomoo-frontend.app-state)

(defonce socket (js/io))
(defonce default-upload-slots (js/Number (.getAttribute (. js/document (getElementById "default-upload-slots")) "data")))

(defonce app-state (atom {:signed-in? false
                          :messages []
                          :message-received? false
                          :user-id nil
                          :users {}
                          :track-order []
                          :track-id-hashes {}
                          :music-info []
                          :current-track-id nil
                          :looping? false
                          :lastfm-token nil
                          :lastfm-username nil
                          :should-scrobble? true
                          :reconnected? false

                          ; Uploads
                          :files-to-check {}
                          :room-file-hashes {}
                          :room-uploads-order []
                          :file-hashes {}
                          :current-uploads-info {}
                          :upload-slots default-upload-slots
                          :uploads {}
                          :uploads-order []

                          ; Player
                          :current-sound nil
                          :current-sound-id nil
                          :tracks-to-delete []
                          :current-sound-position 0
                          :ball-being-dragged? false
                          :on-finish nil
                          :volume 100
                          :paused? false
                          :scrobbled? false}))
