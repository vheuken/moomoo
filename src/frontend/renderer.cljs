(ns moomoo-frontend.renderer
  (:require [om.core :as om  :include-macros true]
            [om.dom  :as dom :include-macros true]
            [moomoo-frontend.globals :as g]
            [moomoo-frontend.hashing :as hashing]
            [moomoo-frontend.uploads :as uploads]
            [dommy.core :as dommy :refer-macros [sel sel1]]))

(defonce grey-out-image "https://media.licdn.com/mpr/mpr/shrink_200_200/p/8/005/082/26a/1ecd9a2.jpg")

(defn sign-in-form [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id "temp-background"}
        (dom/form #js {:id "username-input" :action ""}
                  "Enter Name: "
          (dom/input #js {:id "username" :type "text" :autoComplete "off"})
          (dom/button #js {:onClick (fn []
                                      (.play js/soundManager "join-sound")
                                      (.emit g/socket
                                             "sign-in"
                                             g/room-id
                                             (dommy/value (sel1 :#username)))
                                      false)}
                      "Join"))))))

(defn current-track-tags [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id "current-track-tags"}
        ))))

(defn top-bar [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id "top-bar" :className "top-bottom-bars"}
        (om/build current-track-tags nil)
        (dom/button #js {:id "lastfm-button" :className "top-bar-button"}
                    "Last.fm")
        (dom/input #js {:id "file-upload"
                        :type "file"
                        :onChange (fn [e]
                                    (if-let [file (aget (.-files (.-target e)) 0)]
                                      (hashing/check-hash file)))})
        (dom/button #js {:id "file-upload-input"
                         :className "top-bar-button"
                         :onClick #(.click (sel1 :#file-upload))}
                    "Add music")))))

(defn messages-window [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id "messages-window"}
        ))))

(defn hashing-progress-view [data owner]
  (reify
    om/IRender
    (render [this]
      (let [id (first data)
            info (second data)
            hashing-completion (/ (:current-chunk info) (:chunks info))
            hashing-percent-completion (if (<= 1 hashing-completion)
                                         100
                                         (* 100 hashing-completion))]
        (dom/div #js {:className "track-view"}
          "HASHING: "
          (:filename info)
          " "
          hashing-percent-completion
          "%")))))

(defn upload-progress-view [data owner]
  (reify
    om/IRender
    (render [this]
      (let [id (first data)
            info (second data)
            upload-completion (/ (:bytes-received info) (:file-size info))
            upload-percent-completion (* 100 upload-completion)
            buttons (if (= (:user-id @g/app-state) (:user info))
                      (list
                        (dom/button nil "CANCEL")
                        (if (:paused? info)
                          (dom/button nil "RESUME")
                          (dom/button nil "PAUSE")))
                      "")]
        (dom/div #js {:className "track-view"}
          buttons
          "UPLOAD: "
          (:filename info)
          " "
          upload-percent-completion
          "%")))))

(defn upload-view [data owner]
  (reify
    om/IRender
    (render [this]
      (let [info (second data)]
        (cond
          (= :hash (:type info)) (om/build hashing-progress-view data)
          (= :upload (:type info)) (om/build upload-progress-view data)
          )))))

(defn track-queue-view [data owner]
  (reify
    om/IRenderState
    (render-state [_ state]
      (dom/div #js {:id "track-queue"
                    :style #js {:width (:width state)}}
        (dom/div #js {:id "uploads-queue"}
          (om/build-all upload-view (:uploads data)))))))

(defn center-left-area [data owner]
  (reify
    om/IRenderState
    (render-state [_ state]
      (let [width (:width state)]
        (dom/div #js {:id "center-left"
                      :style #js {:width width}}
          (om/build messages-window nil))))))

(defn center-area [data owner]
  (reify
    om/IDidMount
    (did-mount [_]
      (om/set-state! owner :handle-resize #(let [window-width (.-innerWidth js/window)
                                                 left-width (if (< window-width 850)
                                                              (* 0.50 window-width)
                                                              (* 0.35 window-width))
                                                 right-width (if (< window-width 850)
                                                               (* 0.50 window-width)
                                                               (* 0.65 window-width))]
                                             (om/set-state! owner
                                                            :left-width
                                                            (str left-width "px"))
                                             (om/set-state! owner
                                                            :right-width
                                                            (str right-width "px"))))
      ((om/get-state owner :handle-resize))
      (dommy/listen! js/window :resize (om/get-state owner :handle-resize)))
    om/IWillUnmount
    (will-unmount [_]
      (dommy/unlisten! js/window :resize (om/get-state owner :handle-resize)))
    om/IRenderState
    (render-state [_ state]
      (dom/div #js {:id "center-area"}
        (list
          (om/build center-left-area data {:state {:width (:left-width state)}})
          (om/build track-queue-view data {:state {:width (:right-width state)}}))))))

(defn volume-control [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div nil ))))

(defn bottom-bar [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id "bottom-bar" :className "top-bottom-bars"}
        (om/build volume-control (:volume data))))))

(defn moomoo [data owner]
  (reify
    om/IRender
    (render [this]
      (if (nil? (:user-id data))
        (om/build sign-in-form nil)
        (dom/div #js {:id "app"}
          (om/build top-bar data)
          (om/build center-area data)
          (om/build bottom-bar data))))))

(om/root moomoo g/app-state {:target (. js/document (getElementById "moomoo"))})
