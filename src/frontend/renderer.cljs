(ns moomoo-frontend.renderer
  (:require [clojure.string :as string]
            [om.core :as om  :include-macros true]
            [om.dom  :as dom :include-macros true]
            [moomoo-frontend.core :as core]
            [moomoo-frontend.app-state :as app-state]
            [moomoo-frontend.player :as player]))

; Temporary; remove when we get correct button grey images
(def grey-out-image "https://media.licdn.com/mpr/mpr/shrink_200_200/p/8/005/082/26a/1ecd9a2.jpg")

(defn user-view [user owner]
  (reify
    om/IRender
    (render [this]
      (dom/div nil (get user "name") (if (get user "muted") " - Muted!")))))

(defn users-list-view [data owner]
  (reify
    om/IRender
    (render [this]
        (apply dom/div nil
          (om/build-all user-view (vals (:users data)))))))

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
      (if (:message-received? @app-state/app-state)
        (let [div (js/$ "#messages-window")]
          (.scrollTop div (.prop div "scrollHeight"))
          (swap! app-state/app-state assoc :message-received? false))))))

(defn username-form [data owner]
  (reify
    om/IRender
    (render [this]
      (if-not (:signed-in? data)
        (dom/div #js {:id "temp-background"}
          (dom/form #js {:id "username-input" :action ""} "Enter Name: "
            (dom/input #js {:id "username" :type "text" :autoComplete "off"})
            (dom/button #js {:onClick #(.play js/soundManager "join-sound")} "Join")))))))

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
      (dom/li nil (if (= (.-uploaderid data) (.-id core/socket))
                    (list
                      (dom/button #js {:onClick #(core/cancel-upload (.-id data))}       "CANCEL")
                      (if (and (:paused? ((:uploads @app-state/app-state) (.-clientid data)))
                               (not (:stopped? ((:uploads @app-state/app-state) (.-clientid data)))))
                        (dom/button #js {:onClick #(core/resume-upload  (.-clientid data))} "RESUME")
                        (dom/button #js {:onClick #(core/pause-upload   (.-clientid data))} "PAUSE"))))
                  (if (:stopped? ((:uploads @app-state/app-state) (.-clientid data)))
                    "STOPPED!")
                  (((:users @app-state/app-state) (.-uploaderid data)) "name")
                  " - " (* 100 (/ (.-bytesreceived data) (.-totalsize data))) "% - "
                  (.-filename data)))))

(defn users-upload-progress-view [data owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/div nil
        (let [sorted-uploads (sort #(compare (.-num %1) (.-num %2))
                                   (vals (:current-uploads-info data)))]

          (om/build-all user-upload-progress (vals (:current-uploads-info data))))))))

(defn current-track-tags-view [data owner]
  (reify
    om/IRender
    (render [this]
      (if-not (nil? (:current-track-id data))
        (let [music-info (core/get-music-info-from-id (:current-track-id data))
              tags (.-tags music-info)]

          (dom/div nil
            (dom/div #js {:style #js {:float "left"
                                      :width "10%"
                                      :height "10%"}}
              (if (nil? (.-picture tags))
                (dom/img #js {:src grey-out-image
                              :style #js {:width "100%"
                                          :height "100%"}})
                (dom/img #js {:src (str (first (string/split (.-href (.-location js/window))
                                                             #"/rooms")) (.-picture tags))
                              :style #js {:width "100%"
                                          :height "100%"}})))
            (dom/div nil
              (dom/div nil (.-title tags))
              (dom/div nil (.-album tags))
              (dom/div nil (.-artist tags)))))))))

(om/root users-list-view app-state/app-state {:target (. js/document (getElementById "userslist"))})
(om/root messages-view app-state/app-state {:target (. js/document (getElementById "messages-window"))})
(om/root users-upload-progress-view app-state/app-state {:target (. js/document (getElementById "users-upload-progress"))})
(om/root username-form app-state/app-state {:target (. js/document (getElementById "username-form"))})
(om/root message-form app-state/app-state {:target (. js/document (getElementById "message-box"))})
(om/root current-track-tags-view app-state/app-state {:target (. js/document (getElementById "current-track-tags"))})

(defn track-view [data owner]
  (defn update-state []
    (let [state (om/get-state owner)
          playing? (:playing? state)
          track-id data
          current-track-id (:current-track-id @app-state/app-state)]
      (if (= track-id current-track-id)
        (if-not playing?
          (om/set-state! owner {:playing? true}))
        (if playing?
          (om/set-state! owner {:playing? false})))))
  (reify
    om/IInitState
    (init-state [_]
      {:playing? false})
    om/IWillReceiveProps
    (will-receive-props [_ _]
      (update-state))
    om/IDidUpdate
    (did-update [_ _ _]
      (update-state))
    om/IShouldUpdate
    (should-update [_ _ _]
      true)
    om/IRenderState
    (render-state [_ state]
      (let [track-id data
            data (core/get-music-info-from-id track-id)
            tags (.-tags data)
            title (.-title tags)
            artist (.-artist tags)
            album (.-album tags)
            username (core/get-uploader-from-id track-id)
            current-track-id (:current-track-id @app-state/app-state)
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
                                     :title (str "Added by " username)} "Added by " username)
                      (dom/span #js {:className "track-delete-button"
                                     :title "Delete Track"
                                     :onClick #(core/delete-track track-id)} "X"))]
        (if (:playing? state)
          (dom/div #js {:id track-id
                        :className "track-view"
                        :onDoubleClick (fn []
                                         (core/change-track (first (core/indices #(= %1 track-id) (:track-order @app-state/app-state)))))
                        :style #js {:backgroundColor "#BABAB9"}} content)
          (dom/div #js {:id track-id
                        :className "track-view"
                        :onDoubleClick (fn []
                                         (core/change-track (first (core/indices #(= %1 track-id) (:track-order @app-state/app-state)))))
                        } content))))
    om/IDidMount
    (did-mount [this]
      (.draggable (js/$ (str "#" data)) #js {:axis "y"
                                             :stop core/on-track-drag-stop}))))

(defn track-queue [data owner]
  (reify
    om/IRender
    (render [this]
      (apply dom/span nil
        (om/build-all track-view (:track-order data))))))

(defn render-track-bar [data root-id display-bar-id progress-bar-id progress-ball-id ball-position]
  (let [height 20]
    (dom/div nil
      (let [top (/ height 2)
            width (+ (.height (js/$ "#display-bar-id")))
            display-style #js {:height (str height "px")
                       :top (str top "px")
                       :borderRadius (str (/ height 2) "px")}]
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

(defn play-pause-button [data owner]
  (reify
    om/IRender
    (render [this]
      (if (nil? (:current-sound-id @data))
        (dom/img #js {:className "player-button-img"
                      :src grey-out-image})
        (if (:paused? data)
          (dom/img #js {:id "resume"
                        :className "player-button-img"
                        :src "/images/player/play.svg"
                        :title "Resume Track"
                        :onClick core/resume})
          (dom/img #js {:id "pause"
                        :className "player-button-img"
                        :src "/images/player/pause.svg"
                        :title "Pause Track"
                        :onClick core/pause}))))))

(defn previous-track-button [data owner]
  (reify
    om/IRender
    (render [this]
      (if (nil? (:current-track-id data))
        (dom/img #js {:className "player-button-img"
                      :src grey-out-image})
        (if (< 0 (core/get-current-track-num))
          (dom/img #js {:id "previous-track"
                        :className "player-button-img"
                        :src "/images/player/prev.svg"
                        :title "Previous Track"
                        :onClick core/previous-track})

          (dom/img #js {:className "player-button-img"
                        :src grey-out-image}))))))

(defn next-track-button [data owner]
  (reify
    om/IRender
    (render [this]
      (println (core/get-current-track-num))
      (if (nil? (:current-track-id data))
        (dom/img #js {:className "player-button-img"
                      :src grey-out-image})
        (if (> (- (count (:music-info data)) 1)
               (core/get-current-track-num))
          (dom/img #js {:id "next-track"
                        :className "player-button-img"
                        :src "/images/player/next.svg"
                        :title "Next Track"
                        :onClick core/next-track})

          (dom/img #js {:className "player-button-img"
                        :src grey-out-image}))))))

(defn restart-button [data owner]
  (reify om/IRender
    (render [this]
      (if (nil? (:current-track-id data))
        (dom/img #js {:className "player-button-img"
                      :src grey-out-image})
        (dom/img #js {:style #js {:transform "scale(-1, 1)"}
                      :className "player-button-img"
                      :src "/images/player/restart.svg"
                      :title "Restart Track"
                      :onClick core/restart-track})))))

(defn loop-button [data owner]
  (reify om/IRender
    (render [this]
      (if (nil? (:current-track-id data))
        (dom/img #js {:className "player-button-img"
                      :src grey-out-image})
        (if (:looping? data)
          (dom/img #js {:className "player-button-img"
                        :src "/images/player/looping.svg"
                        :title "Unloop Track"
                        :onClick core/toggle-loop})
          (dom/img #js {:className "player-button-img"
                        :src "/images/player/looping.svg"
                        :title "Loop Track"
                        :onClick core/toggle-loop}))))))

(om/root play-pause-button player/app-state {:target (. js/document (getElementById "play-pause-button"))})
(om/root previous-track-button app-state/app-state {:target (. js/document (getElementById "previous-track-button"))})
(om/root next-track-button app-state/app-state {:target (. js/document (getElementById "next-track-button"))})
(om/root restart-button app-state/app-state {:target (. js/document (getElementById "restart-button"))})
(om/root loop-button app-state/app-state {:target (. js/document (getElementById "loop-button"))})
(om/root track-queue app-state/app-state {:target (. js/document (getElementById "playlist"))})
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

(defn upload-slots [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/span nil
        (dom/span nil "Upload slots: " (:upload-slots data))
        (dom/button #js {:onClick core/incr-upload-slots} "Increase")
        (dom/button #js {:onClick core/decr-upload-slots} "Decrease")))))


(om/root upload-slots app-state/app-state {:target (. js/document (getElementById "upload-slots"))})
