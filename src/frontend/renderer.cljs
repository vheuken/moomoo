(ns moomoo-frontend.renderer
  (:require [om.core :as om  :include-macros true]
            [om.dom  :as dom :include-macros true]
            [moomoo-frontend.core :as core]
            [moomoo-frontend.player :as player]))

(defn user-view [user owner]
  (reify
    om/IRender
    (render [this]
      (dom/div nil user))))

(defn users-list-view [data owner]
  (reify
    om/IRender
    (render [this]
        (apply dom/div nil
          (om/build-all user-view (:users data))))))

(defn message-view [message owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:className "message-username"}
               (.-username message) ":"
        (dom/div #js {:className "message-content"}
                 (.-message message))))))

(defn messages-view [data owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/div #js {:id "messages"}
        (om/build-all message-view (:messages data))))
    om/IDidUpdate
    (did-update [_ _ _]
      (if (:message-received? @core/app-state)
        (let [div (js/$ "#messages-window")]
          (.scrollTop div (.prop div "scrollHeight"))
          (swap! core/app-state assoc :message-received? false))))))

(defn username-form [data owner]
  (reify
    om/IRender
    (render [this]
      (if-not (:signed-in? data)
        (dom/form #js {:action ""} "Enter Name: "
          (dom/input #js {:id "username" :type "text" :autoComplete "off"})
          (dom/button nil "Join"))))))

(defn message-form [data owner]
  (reify
    om/IDidMount
    (did-mount [_]
      (.on (js/$ "#message-input") "keydown" core/keydown-message-input))
    om/IWillUnmount
    (will-unmount [_]
      (.off (js/$ "#message-input") "keydown" core/keydown-message-input))
    om/IRender
    (render [this]
      (dom/textarea #js {:id "message-input"} nil))))

(defn user-upload-progress [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/li nil (.-username data)
                  " - " (* 100 (/ (.-bytesreceived data) (.-totalsize data))) "% - "
                  (.-filename data)))))

(defn users-upload-progress-view [data owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/div nil
          (om/build-all user-upload-progress (vals (:current-uploads-info data)))))))

(defn current-track-tags-view [data owner]
  (reify
    om/IRender
    (render [this]
      (if-not (nil? (:current-track-id data))
        (let [music-info (core/get-music-info-from-id (:current-track-id data))
              tags (.-tags music-info)]
          (dom/div nil
            (dom/div nil (.-title tags))
            (dom/div nil (.-album tags))
            (dom/div nil (.-artist tags))))))))

(defn download-progress [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/li nil "Downloading: " (* 100 (/ (:data-downloaded data) (:file-size data))) "%"))))

(defn download-progress-view [data owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/div nil
        (om/build-all download-progress (vals (:download-progress data)))))))

(om/root download-progress-view core/app-state {:target (. js/document (getElementById "download-progress"))})
(om/root users-list-view core/app-state {:target (. js/document (getElementById "userslist"))})
(om/root messages-view core/app-state {:target (. js/document (getElementById "messages-window"))})
(om/root users-upload-progress-view core/app-state {:target (. js/document (getElementById "users-upload-progress"))})
(om/root username-form core/app-state {:target (. js/document (getElementById "username-form"))})
(om/root message-form core/app-state {:target (. js/document (getElementById "message-box"))})
(om/root current-track-tags-view core/app-state {:target (. js/document (getElementById "current-track-tags"))})

; music player
(defn resume-button [data owner]
  (reify
    om/IRender
    (render [this]
      (if (:signed-in? data)
        (dom/button #js {:onClick core/resume} "Resume")))))

(defn pause-button [data owner]
  (reify
    om/IRender
    (render [this]
      (if (:signed-in? data)
        (dom/button #js {:onClick core/pause} "Pause")))))

(defn previous-track-button [data owner]
  (reify
    om/IRender
    (render [this]
      (if (:signed-in? data)
        (if-not (nil? (:current-track-id data))
          (if (< 0
                 (.-tracknum (core/get-music-info-from-id (:current-track-id data))))
            (dom/button #js {:onClick core/previous-track} "Previous")
            (dom/button #js {:onClick core/previous-track :disabled true} "Previous"))
          (dom/button #js {:onClick core/previous-track :disabled true} "Previous"))))))

(defn next-track-button [data owner]
  (reify
    om/IRender
    (render [this]
      (if (:signed-in? data)
        (if-not (nil? (:current-track-id data))
          (if (> (- (count (:music-info data)) 1)
                (.-tracknum (core/get-music-info-from-id (:current-track-id data))))
            (dom/button #js {:onClick core/next-track} "Next")
            (dom/button #js {:onClick core/next-track :disabled true} "Next"))
          (dom/button #js {:onClick core/next-track :disabled true} "Next"))))))

(defn restart-button [data owner]
  (reify om/IRender
    (render [this]
      (if (:signed-in? data)
        (dom/button #js {:onClick core/restart-track} "Restart")))))

(defn loop-button [data owner]
  (reify om/IRender
    (render [this]
      (if (:signed-in? data)
        (if (:looping? data)
          (dom/button #js {:onClick core/toggle-loop} "UnLoop")
          (dom/button #js {:onClick core/toggle-loop} "Loop"))))))

(defn track-view [data owner]
  (reify
    om/IInitState
    (init-state [_]
      {:playing? false
       :track-id (.-id data)})
    om/IWillReceiveProps
    (will-receive-props [_ _]
      (let [state (om/get-state owner)
            playing? (:playing? state)
            track-id (:track-id state)]
        (if (= track-id (:current-track-id @core/app-state))
          (if-not playing?
            (om/set-state! owner (merge state {:playing? true})))
          (if playing?
            (om/set-state! owner (merge state {:playing? false}))))))
    om/IRenderState
    (render-state [_ state]
      (let [tags (.-tags data)
            title (.-title tags)
            artist (.-artist tags)
            album (.-album tags)
            username (.-username data)
            track-id (.-id data)
            current-track-id (:current-track-id @core/app-state)
            content (list
                      (dom/span #js {:className "track-title"
                                     :title title}
                                title)
                      (dom/span #js {:className "track-album"
                                     :title album}
                                album)
                      (dom/span #js {:className "track-artist"
                                     :title artist}
                                artist)
                      (dom/span #js {:className "track-uploader"
                                     :title (str "Added by " username)} "Added by " username))]
        (if (:playing? state)
          (dom/div #js {:className "track-view"
                        :style #js {:backgroundColor "#BABAB9"}} content)
          (dom/div #js {:className "track-view"} content))))))

(defn track-queue [data owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/span nil
        (om/build-all track-view (:music-info data))))))

(defn render-track-bar [data root-id display-bar-id progress-bar-id progress-ball-id ball-position]
  (let [height 10]
    (dom/div nil
      (let [top (/ height 2)
            width (+ (.height (js/$ "#display-bar-id")))
            display-style #js {:height (str height "px")
                       :top (str top "px")}]
        (dom/div #js {:id display-bar-id
                      :style display-style}))

      (let [root-width (.width (js/$ root-id))
            bar-width (- root-width height)
            bar-style #js {:width bar-width
                           :left (/ height 2)}]
        (dom/div #js {:id progress-bar-id
                      :className "track-bar"
                      :style bar-style}
          (let [percent-completed (ball-position)
                style #js {:left (str percent-completed "%")}]
              (dom/div #js {:id progress-ball-id
                            :className "bar-tracker"
                            :style style}
                (let [diameter 20
                      radius (/ diameter 2)
                      track-ball-display-style #js {:width  (str diameter "px")
                                                    :height (str diameter "px")
                                                    :bottom (str radius "px")
                                                    :right  (str radius "px")}]
                  (dom/div #js {:className "track-ball-display"
                                :style track-ball-display-style})))))))))

(defn track-bar-did-mount [data owner ball-id containment start stop]
  (.addEventListener js/window "resize" #(om/refresh! owner))
  (.draggable (js/$ ball-id) #js {:axis "x"
                                  :containment containment
                                  :start start
                                  :stop stop}))


(defn progress-track [data owner]
  (reify
    om/IRender
    (render [this]
      (render-track-bar data "#progress-track"
                             "progress-track-bar-display"
                             "progress-track-bar"
                             "progress-track-ball"
                             #(if (nil? (:current-sound data))
                                  0
                                  (* 100 (/ (:current-sound-position data)
                                            (.-duration (:current-sound data)))))))

    om/IDidMount
    (did-mount [this]
     (track-bar-did-mount data owner "#progress-track-ball"
                                     "#progress-track-bar"
                                     #(swap! player/app-state assoc
                                             :ball-being-dragged?
                                             true)
                                     core/on-drag-stop))))

(om/root resume-button core/app-state {:target (. js/document (getElementById "play-button"))})
(om/root pause-button core/app-state {:target (. js/document (getElementById "pause-button"))})
(om/root previous-track-button core/app-state {:target (. js/document (getElementById "previous-track-button"))})
(om/root next-track-button core/app-state {:target (. js/document (getElementById "next-track-button"))})
(om/root restart-button core/app-state {:target (. js/document (getElementById "restart-button"))})
(om/root loop-button core/app-state {:target (. js/document (getElementById "loop-button"))})
(om/root track-queue core/app-state {:target (. js/document (getElementById "playlist"))})
(om/root progress-track player/app-state {:target (. js/document (getElementById "progress-track"))})

(defn volume [data owner]
  (reify
    om/IRender
    (render [this]
      (render-track-bar data "#volume"
                             "volume-bar-display"
                             "volume-bar"
                             "volume-ball"
                             #(:volume data)))


    om/IDidMount
    (did-mount [this]
      (track-bar-did-mount data owner "#volume-ball"
                                      "#volume-bar"
                                      nil
                                      core/on-volume-drag-stop))))

(om/root volume player/app-state {:target (. js/document (getElementById "volume"))})
