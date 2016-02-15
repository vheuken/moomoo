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
                          :upload-slots default-upload-slots
                          :room-uploads-order []}))
