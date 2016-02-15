(ns moomoo-frontend.renderer
  (:require [om.core :as om  :include-macros true]
            [om.dom  :as dom :include-macros true]
            [moomoo-frontend.globals :as g]
            [moomoo-frontend.hashing :as hashing]
            [jayq.core :as jq])
   (:use [jayq.core :only [$]]))

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
                                             (jq/val ($ :#username)))
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
                         :onClick #(.click (.getElementById js/document "file-upload"))}
                    "Add music")))))

(defn messages-window [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id "messages-window"}
        ))))

(defn center-area [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id "center-area"}
        (dom/div #js {:id "center-left"}
          (om/build messages-window nil))
        (dom/div #js {:id "track-queue"})))))

(defn bottom-bar [data owner]
  (reify
    om/IRender
    (render [this]
      (dom/div #js {:id "bottom-bar" :className "top-bottom-bars"}
        ))))


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
