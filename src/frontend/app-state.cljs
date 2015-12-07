(ns moomoo-frontend.app-state)

(defonce socket (js/io))
(defonce default-upload-slots (js/Number (.getAttribute (. js/document (getElementById "default-upload-slots")) "data")))

(defonce app-state (atom {:signed-in? false
                          :messages []
                          :message-received? false
                          :users {}
                          :current-uploads-info {}
                          :track-order []
                          :track-id-hashes {}
                          :music-info []
                          :is-file-downloading? false
                          :current-track-id nil
                          :current-sound-id nil
                          :ball-being-dragged? false
                          :looping? false
                          :upload-slots default-upload-slots
                          :num-of-uploads 0
                          :num-of-downloads 0
                          :file-hashes {}
                          :uploads {}
                          :active-uploads []
                          :inactive-uploads []}))
