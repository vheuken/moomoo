(ns moomoo-frontend.core
  (:require [clojure.string :as string]
            [moomoo-frontend.app-state :as app-state]
            [moomoo-frontend.lastfm :as lastfm]
            [moomoo-frontend.player :as player]
            [moomoo-frontend.uploads :as uploads]))

(defonce room-id    (.getAttribute (. js/document (getElementById "roomid")) "data"))
(defonce max-upload-slots (js/Number (.getAttribute (. js/document (getElementById "max-upload-slots")) "data")))
(defonce lastfm-key (.getAttribute (. js/document (getElementById "lastfm-key")) "data"))

(enable-console-print!)

; TODO: We want to get rid of this at some point
;       and handle things more like the om tutorial handles things
(.hide (js/$ "#file-upload-input"))
(.submit (js/$ "#username-form")
  (fn []
    (.emit app-state/socket "sign-in" room-id (.val (js/$ "#username")))
    (.show (js/$ "#file-upload-input"))
    false))

(.click (js/$ "#lastfm-button")
  (fn []
    (let [callback-url (.-href (.-location js/window))
          lastfm-url (str "http://www.last.fm/api/auth/?api_key="
                          lastfm-key
                          "&cb="
                          callback-url)]
      (set! (.-href (.-location js/window)) lastfm-url))))

(let [url (.-href (.-location js/window))
      split-url (string/split url "?token=")
      pruned-url (first split-url)
      lastfm-token (second split-url)]
  (println "LASTFM TOKEN" lastfm-token)
  (if-not (nil? lastfm-token)
    (do
      (.replaceState (.-history js/window) "Object" "Title" pruned-url)
      (swap! app-state/app-state
            assoc
            :lastfm-token
            lastfm-token)
      (lastfm/authenticate lastfm-token))))

(defn send-chat-message [message]
  (println "Sending chat message: " message)
  (.emit app-state/socket "chat-message" room-id message))

(defn keydown-message-input [event]
  (if (= 13 (.-keyCode event))
    (this-as this
      (send-chat-message (.val (js/$ this)))
      (.val (js/$ this) "")
      false)))

(defn resume-upload! [client-id]
  (println "Resuming upload" client-id)
  (let [upload (get (:uploads @app-state/app-state) client-id)]
    (println upload)
    (swap! app-state/app-state
           assoc
           :uploads
           (merge (:uploads @app-state/app-state)
                  {client-id (uploads/resume-upload upload)}))))

(defn pause-upload! [client-id]
  (println "Pausing upload" client-id)
  (let [upload (get (:uploads @app-state/app-state) client-id)]
    (swap! app-state/app-state
           assoc
           :uploads
           (merge (:uploads @app-state/app-state)
                  {client-id (uploads/pause-upload upload)}))))

(defn check-hash [file]
  (let [client-id (.v4 js/uuid)]
    (swap! app-state/app-state
           assoc
           :files-to-check
           (merge {client-id file}
                  (:files-to-check @app-state/app-state)))
    (.emit app-state/socket "new-hash" client-id)))

(.change (js/$ "#file-upload")
  (fn [e]
    (if-let [file (aget (.-files (.-target e)) 0)]
      (check-hash file))))

(.click (js/$ "#clear-songs-button")
  (fn [e]
    (println "Sending clear songs signal!")
    (.emit app-state/socket "clear-songs")))

; end stuff that should probably be cleaned up with react....

(defn delete-track [track-id]
  (println (str "Deleting track " track-id))
  (.emit app-state/socket "delete-track" track-id))

(defn toggle-loop []
  (if (:looping? @app-state/app-state)
    (.emit app-state/socket "stop-looping")
    (.emit app-state/socket "start-looping")))

(defn on-drag-stop [event ui]
  (swap! app-state/app-state assoc :ball-being-dragged? false)
  (if (player/is-sound-loaded?)
    (let [bar-width (.width (js/$ "#progress-track-bar"))
          new-position (* (player/get-duration)
                          (/ (.-left (.-position ui)) bar-width))]
      (.emit app-state/socket "position-change" new-position)
      new-position)))

(defn get-track-num-from-offset-top [offset-top]
  (println "Offset-top:" offset-top)
  (let [top-offsets (map (fn [id]
                           (.-top (.offset (js/$ (str "#" id)))))
                         (:track-order @app-state/app-state))
        destination (ffirst (filter #(not (last %1)) (map-indexed vector (map #(>= offset-top %1) top-offsets))))]
    (if (nil? destination)
      (- (count (:track-order @app-state/app-state)) 1)
      destination)))

(defn on-track-drag-stop [event ui]
  (this-as this
    (.removeAttr (js/$ this) "style")
    (let [dragged-track-id (.attr (js/$ this) "id")
          destination-track-num (get-track-num-from-offset-top (.-top (.-offset ui)))]
      (.emit app-state/socket "track-order-change" dragged-track-id destination-track-num))))

(defn mute []
  (println "Muted!")
  (.emit app-state/socket "mute-user"))

(defn unmute []
  (println "Unmuted!")
  (.emit app-state/socket "unmute-user"))

(defn on-volume-drag-stop [event ui]
  (let [bar-width (.width (js/$ "#volume-bar"))
        new-volume (Math/round (* 100 (/ (.-left (.-position ui)) bar-width)))
        old-volume (player/get-volume)]
    (println "old volume:" old-volume)
    (println "new volume:" new-volume)
    (println "A")
    (player/set-volume new-volume)
    (cond
      (and (>= 0 old-volume) (< 0 new-volume))
        (unmute)
      (and (>= 0 new-volume) (< 0 old-volume))
        (mute))))

(defn indices [pred coll]
  (keep-indexed #(when (pred %2) %1) coll))

(defn pause []
  (player/pause!)
  (println "Sending pause signal")
  (.emit app-state/socket "pause" (player/get-position)))

(defn resume []
  (println "Sending resume signal")
  (.emit app-state/socket "resume"))

(defn get-current-track-num []
  (first (indices #(= %1 (:current-track-id @app-state/app-state))
                  (:track-order @app-state/app-state))))

(defn cancel-upload [id]
  (.emit app-state/socket "cancel-upload" id))

(defn incr-upload-slots []
  (println "Incrementing upload slots")
  (.emit app-state/socket
         "change-upload-slots"
         (+ (:upload-slots @app-state/app-state)
            1)))

(defn decr-upload-slots []
  (println "Decrementing upload slots")
  (.emit app-state/socket
         "change-upload-slots"
         (- (:upload-slots @app-state/app-state)
            1)))

(defn change-track [track-num]
  (.emit app-state/socket "change-track" track-num (.v4 js/uuid)))

(defn previous-track []
  (let [track-num (- (get-current-track-num) 1)
        sound-id (.v4 js/uuid)]
    (if (>= track-num 0)
      (do
        (println "Sending change-track signal."
                 "Track num:" track-num
                 "Sound ID:"  sound-id)
        (.emit app-state/socket "change-track" track-num sound-id)))))

(defn next-track []
  (let [track-num (+ (get-current-track-num) 1)
        sound-id (.v4 js/uuid)]
    (if (< track-num (count (:music-info @app-state/app-state)))
      (do
        (println "Sending change-track signal."
                 "Track num:" track-num
                 "Sound ID:"  sound-id)
        (.emit app-state/socket "change-track" track-num sound-id)))))

(defn restart-track []
  (println "Sending position change signal: " 0)
  (.emit app-state/socket "position-change" 0))

(.setup js/soundManager #js {
  :html5PollingInterval 50})

#_(.onready js/soundManager
  (fn []
    (.createSound js/soundManager #js {
      :id "join-sound"
      :url "/audio/moomoo.wav"})))
