(ns moomoo-frontend.player
  (:require [moomoo-frontend.lastfm :as lastfm]
            [moomoo-frontend.app-state :as app-state]))

; TODO: can we get rid of this?
;       This is just used because om updates when the state atom updates
;       Maybe there is a way to do this in om with just :current-sound?
(defn while-playing []
  (this-as sound
    (if (and (lastfm/signed-in?)
             (lastfm/scrobble?))
      (if-not (:scrobbled? @app-state/app-state)
        (if (> (.-durationEstimate sound) 30000)
          (if (or (>= (.-position sound) 240000)
                  (>= (/ (.-position sound)
                         (.-durationEstimate sound))
                      0.5))
            (do
              (lastfm/scrobble (:current-track-id @app-state/app-state))
              (swap! app-state/app-state assoc :scrobbled? true)))))))
  (if-not (:ball-being-dragged? @app-state/app-state)
    (swap! app-state/app-state assoc :current-sound-position (.-position (:current-sound @app-state/app-state)))))

(defn while-loading []
  (letfn [(remove-once [pred coll]
            ((fn inner [coll]
              (lazy-seq
                (when-let [[x & xs] (seq coll)]
                  (if (pred x)
                    xs
                    (cons x (inner xs))))))
              coll))]
    (this-as sound
      (if (some #(= (.-id sound) %) (:tracks-to-delete @app-state/app-state))
        (do
          (println "Destroying sound from whileloading()")
          (.destruct sound)
          (swap! app-state/app-state assoc :tracks-to-delete
            (vec (remove #(= (.-id sound) %) (:tracks-to-delete @app-state/app-state)))))))))

(defn pause! []
  (println "Pausing current sound!")
  (swap! app-state/app-state assoc :paused? true)
  (if-not (nil? (:current-sound @app-state/app-state))
    (.pause (:current-sound @app-state/app-state))))

(defn resume! []
  (.resume (:current-sound @app-state/app-state))
  (swap! app-state/app-state assoc :paused? false))

(defn load-track! [sound-url sound-id on-load-fn]
  (.createSound js/soundManager #js {:id sound-id
                                     :url sound-url
                                     :whileloading while-loading
                                     :autoLoad true
                                     :onload on-load-fn}))

(defn play-track! [sound-id position on-finish]
  (swap! app-state/app-state
         merge
         {:on-finish on-finish
          :current-sound-id sound-id
          :scrobbled? false
          :current-sound (.getSoundById js/soundManager sound-id)})


  (defn on-play []
    (if (nil? position)
      (.setPosition (:current-sound @app-state/app-state) (.-MAX_SAFE_INTEGER js/Number))))

  (.play (:current-sound @app-state/app-state)
               #js {:whileplaying while-playing
                    :onplay on-play})

  (println "POSITION:" position)
  (if (:paused? @app-state/app-state)
      (.pause (:current-sound @app-state/app-state))))

; TODO: probably should go into a different module...but which?
(defn destroy-track [sound-id]
  (println "Destroying sound-id:" sound-id)
  (let [sound (.getSoundById js/soundManager sound-id)]
    (if (or (undefined? sound)
            (> 3 (.-readyState sound)))
      (swap! app-state/app-state
             assoc
             :tracks-to-delete
             (conj (:tracks-to-delete @app-state/app-state) sound-id))
      (.destruct sound)))

  (if (and (not (nil? (:current-sound @app-state/app-state)))
           (= sound-id (.-id (:current-sound @app-state/app-state))))
    (swap! app-state/app-state assoc :current-sound-id nil)

    (swap! app-state/app-state assoc :current-sound nil)))

(defn set-position! [position]
  (println "Setting sound position to: " position)
  (if (= 0 (.-playState (:current-sound @app-state/app-state)))
    (.play (:current-sound @app-state/app-state)
           #js {:whileplaying while-playing
                :onfinish (:on-finish @app-state/app-state)
                :onplay #(.setPosition (:current-sound @app-state/app-state) position)})
    (.setPosition (:current-sound @app-state/app-state) position)))

(defn get-position []
  (if (nil? (:current-sound @app-state/app-state))
    0
    (.-position (:current-sound @app-state/app-state))))

(defn get-duration []
  (if (nil? (:current-sound @app-state/app-state))
    0
    (.-duration (:current-sound @app-state/app-state))))

(defn is-sound-loaded? []
  (not (nil? (:current-sound @app-state/app-state))))

(defn set-volume [volume]
  (println "Setting volume to: " volume)
  (swap! app-state/app-state assoc :volume volume)

  (if-not (nil? (:current-sound @app-state/app-state))
    (.setVolume (:current-sound @app-state/app-state) volume)
    (println "No current-sound to immediately apply volume to.")))

(defn get-volume []
  (:volume @app-state/app-state))
