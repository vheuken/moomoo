(ns moomoo-frontend.core)

(defonce room-id (.getAttribute (. js/document (getElementById "roomid")) "data"))
(defonce socket (js/io))
(defonce current-sound-id "current-song")
(defonce default-upload-slots 2)
(defonce default-download-slots 1)
(defonce app-state (atom {:signed-in? false
                          :messages []
                          :message-received? false
                          :users []
                          :current-uploads-info {}
                          :music-info []
                          :music-files {}
                          :data-downloaded 0
                          :download-progress nil
                          :is-file-downloading? false
                          :current-track-id nil
                          :current-sound nil
                          :ball-being-dragged? false
                          :upload-queue []
                          :upload-slots default-upload-slots
                          :download-slots default-download-slots
                          :num-of-uploads 0
                          :num-of-downloads 0}))

(enable-console-print!)

; TODO: We want to get rid of this at some point
;       and handle things more like the om tutorial handles things
(.hide (js/$ "#file-upload-input"))
(.submit (js/$ "#username-form")
  (fn []
    (.emit socket "sign-in" room-id (.val (js/$ "#username")))
    (.show (js/$ "#file-upload-input"))
    false))

(.submit (js/$ "#message-form")
  (fn []
    (.emit socket "chat-message" room-id (.val (js/$ "#m")))
    (.val (js/$ "#m") "")
    false))

(defn upload-file [file]
  (swap! app-state assoc :num-of-uploads (+ 1 (:num-of-uploads @app-state)))

  (let [stream (.createStream js/ss)
        blob-stream (.createBlobReadStream js/ss file)]
    (println "File uploading!")

    (.emit (js/ss socket) "file-upload" stream
                                        (.-name file)
                                        (.-size file))
    (.pipe blob-stream stream)

    (.on blob-stream "end"
      (fn []
        (swap! app-state assoc :num-of-uploads (- (:num-of-uploads @app-state) 1))
        (println "NUM OF UPLOADS NOW!" (:num-of-uploads @app-state))
        (if-not (empty? (:upload-queue @app-state))
          (let [next-file (first (:upload-queue @app-state))]
            (swap! app-state assoc :upload-queue (pop (:upload-queue @app-state)))
            (if-not (= next-file file)
              (if (> (:upload-slots @app-state) (:num-of-uploads @app-state))
                (upload-file next-file)))))))))

(.change (js/$ "#file-upload")
  (fn [e]
    (let [file (aget (.-files (.-target e)) 0)]
      (swap! app-state assoc :upload-queue (vec (cons file (:upload-queue @app-state))))
      (println "SHIT " (:num-of-uploads @app-state))
        (if (> (:upload-slots @app-state) (:num-of-uploads @app-state))
          (upload-file file)))))

; end stuff that should probably be cleaned up with react....

(defn on-drag-stop [event ui]
  (swap! app-state assoc :ball-being-dragged? false)
  (if-not (nil? (:current-sound @app-state))
    (let [bar-width (.width (js/$ "#progress-track-bar"))
          new-position (* (.-duration (:current-sound @app-state))
                          (/ (.-left (.-position ui)) bar-width))]
      (println new-position)
      (.emit socket "position-change" new-position))))

(.draggable (js/$ "#progress-track-ball") #js {:axis "x"
                                               :containment "#progress-track"
                                               :start #(swap! app-state assoc
                                                              :ball-being-dragged?
                                                              true)
                                               :stop on-drag-stop})
(defn get-music-info-from-id [track-id]
  (nth (filter #(= (.-id %1)
                   track-id)
         (:music-info @app-state))
    0))

(defn get-next-track-to-download []
  (letfn [(is-track-downloaded? [track-id]
            (contains? (:music-files @app-state) track-id))]
    (let [current-track-info (get-music-info-from-id (:current-track-id @app-state))]
      (loop [track-num (+ (.-tracknum current-track-info) 1)
             i 0]
        (if (>= i (count (:music-info @app-state)))
          nil
          (if (< track-num (count (:music-info @app-state)))
            (let [music-info (nth (:music-info @app-state) track-num)
                  track-id (.-id music-info)]
              (if-not (is-track-downloaded? track-id)
                track-id
                  (recur (+ 1 track-num)
                         (+ 1 i))))
              (recur 0
                     (+ 1 i))))))))

(defn request-new-track []
  (let [id (get-next-track-to-download)]
    (if-not (nil? id)
      (.emit socket "file-download-request" id))))

(defn pause []
  (.pause js/soundManager current-sound-id)
  (.emit socket "pause" (.-position (:current-sound @app-state))))

(defn resume []
  (.emit socket "resume"))

(defn previous-track []
  (let [track-num (- (.-tracknum (nth (filter #(= (.-id %1)
                                                (:current-track-id @app-state))
                                            (:music-info @app-state)) 0))
                    1)]
    (if (>= track-num 0)
      (.emit socket "change-track" track-num))))

(defn next-track []
  (let [track-num (+ 1 (.-tracknum (nth (filter #(= (.-id %1)
                                                    (:current-track-id @app-state))
                                                (:music-info @app-state)) 0)))]
    (if (< track-num (count (:music-info @app-state)))
      (.emit socket "change-track" track-num))))

(defn restart-track []
  (.emit socket "position-change" 0))

(defn set-progress-ball-position [percent-completed]
  (.css (js/$ "#progress-track-ball") #js {"left" (str percent-completed "%")}))

(defn while-playing []
  (if-not (:ball-being-dragged? @app-state)
    (let [sound (:current-sound @app-state)]
      (set-progress-ball-position (* 100
                                    (/ (.-position sound)
                                       (.-duration sound)))))))

(defn on-finish []
  (println "Song has finished!")
  (.emit socket "track-complete"))

(defn play-track [track-id position]
  (if-not (nil? (:current-sound @app-state))
    (.destruct (:current-sound @app-state)))

  (let [reader (new js/FileReader)
        song-blob (get (:music-files @app-state) track-id)]
    (.readAsDataURL reader song-blob)
    (set! (.-onloadend reader)
      (fn []
        (swap! app-state assoc :current-sound
          (.createSound js/soundManager #js {:id current-sound-id
                                             :type "audio/mpeg"
                                             :url (.-result reader)
                                             :autoLoad true}))
        (.play (:current-sound @app-state)
               #js {:whileplaying while-playing
                    :onfinish on-finish
                    :onplay #(.setPosition js/soundManager current-sound-id
                                                           position)})))))

(.on socket "connect" #(.emit socket "join-room" room-id))
(.on socket "sign-in-success"
  (fn []
    (println "Successfully signed in!")
    (swap! app-state assoc :signed-in? true)))

(.on socket "chat-message"
  (fn [message]
    (swap! app-state assoc :messages (conj (:messages @app-state) message))
    (swap! app-state assoc :message-received? true)))

(.on socket "users-list"
  (fn [users]
    (swap! app-state assoc :users users)))

(.on socket "file-upload-info"
  (fn [file-upload-info]
    (if (= (.-totalsize file-upload-info) (.-bytesreceived file-upload-info))
      (swap! app-state assoc :current-uploads-info
        (dissoc (:current-uploads-info @app-state) (.-id file-upload-info)))
      (swap! app-state assoc :current-uploads-info
        (merge (:current-uploads-info @app-state)
          {(.-id file-upload-info) file-upload-info})))))

(.on socket "upload-complete"
  (fn [music-info]
    (swap! app-state assoc :music-info
      (merge (:music-info @app-state) music-info))

    (if-not (:is-file-downloading? @app-state)
      (request-new-track))))

(.on (new js/ss socket) "file-download"
  (fn [stream track-id file-size]
    (println "Download starting!")

    (swap! app-state assoc :is-file-downloading? true)

    (.on stream "data"
      (fn [data-chunk]
        (let [size (+ (.-length data-chunk) (:data-downloaded @app-state))]
          (swap! app-state assoc :download-progress (* 100 (/ size file-size)))
          (swap! app-state assoc :data-downloaded size))
        (if (nil? (get (:music-files @app-state) track-id))
          (swap! app-state assoc :music-files
            (merge (:music-files @app-state) {track-id (new js/Blob)})))
        (swap! app-state assoc :music-files
          (merge (:music-files @app-state)
                 {track-id
                  (new js/Blob #js [(get (:music-files @app-state) track-id) data-chunk]
                               #js {:type "audio/mpeg"})}))))
    (.on stream "end"
      (fn []
        (println "Download complete!")
        (swap! app-state assoc :is-file-downloading? false)
        (swap! app-state assoc :download-progress nil)
        (swap! app-state assoc :data-downloaded 0)
        (if-not (:is-file-downloading? @app-state)
          (request-new-track))
        (if (= (:current-track-id @app-state) track-id)
          (.emit socket "ready-to-start"))))))

(.on socket "start-track"
  (fn [position]
     (play-track (:current-track-id @app-state) position)))

(.on socket "track-change"
  (fn [track-id]
    (println "CHANGING TO TRACK " track-id)
    (swap! app-state assoc :current-track-id track-id)
    (if (nil? (get (:music-files @app-state) track-id))
      (.emit socket "file-download-request" track-id)
      (do (println "READY TO START WOO"
      (.emit socket "ready-to-start"))))))

(.on socket "pause"
  (fn [position]
    (.pause js/soundManager current-sound-id)
    (.setPosition js/soundManager current-sound-id position)))

(.on socket "resume"
  (fn []
    (.resume js/soundManager current-sound-id)))

(.on socket "position-change"
  (fn [position]
    (letfn [(set-pos [position]
              (.setPosition js/soundManager current-sound-id position))]
      (println "Received pos: " position)
      (if (= 0 (.-playState (:current-sound @app-state)))
        (.play (:current-sound @app-state)
          #js {:whileplaying while-playing
               :onfinish on-finish
               :onplay #(set-pos position)})
        (set-pos position)))))

(.on socket "hotjoin-music-info"
  (fn [room-music-info current-track-id]
    (let [sorted-music-info (.sort room-music-info #(- (.-tracknum %1)
                                                       (.-tracknum %2)))]
      (swap! app-state assoc :music-info (map #(clj->js %1)
                                              (js->clj sorted-music-info))))
    (swap! app-state assoc :current-track-id current-track-id)
    (.emit socket "file-download-request" current-track-id)))
