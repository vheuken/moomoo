(ns moomoo-frontend.player)

(defonce app-state (atom {:current-sound nil
                          :current-sound-id nil
                          :tracks-to-delete []
                          :current-sound-position 0
                          :ball-being-dragged? false
                          :on-finish nil
                          :volume 100
                          :paused? false}))

; TODO: can we get rid of this?
;       This is just used because om updates when the state atom updates
;       Maybe there is a way to do this in om with just :current-sound?
(defn while-playing []
  (if-not (:ball-being-dragged? @app-state)
    (swap! app-state assoc :current-sound-position (.-position (:current-sound @app-state)))))

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
      (if (some #(= (.-id sound) %) (:tracks-to-delete @app-state))
        (do
          (println "Destroying sound from whileloading()")
          (.destruct sound)
          (swap! app-state assoc :tracks-to-delete
            (vec (remove #(= (.-id sound) %) (:tracks-to-delete @app-state)))))))))

(defn pause! []
  (println "Pausing current sound!")
  (swap! app-state assoc :paused? true)
  (if-not (nil? (:current-sound @app-state))
    (.pause (:current-sound @app-state))))

(defn resume! []
  (.resume (:current-sound @app-state))
  (swap! app-state assoc :paused? false))

(defn play-track! [sound-url sound-id position on-finish]
  (println "Sound URL to play:" sound-url)
  (swap! app-state assoc :on-finish on-finish)
  (swap! app-state assoc :current-sound-id sound-id)

  (swap! app-state assoc :current-sound
    (.createSound js/soundManager #js {:id sound-id
                                       :url sound-url
                                       :whileloading while-loading
                                       :onfinish on-finish
                                       :volume (:volume @app-state)}))

  (defn on-play []
    (if (nil? position)
      (.setPosition (:current-sound @app-state) (.-MAX_SAFE_INTEGER js/Number))
      (.setPosition (:current-sound @app-state) position)))

  (.play (:current-sound @app-state)
               #js {:whileplaying while-playing
                    :onplay on-play})
  (if (:paused? @app-state)
      (.pause (:current-sound @app-state))))

; TODO: probably should go into a different module...but which?
(defn destroy-track [sound-id]
  (println "Destroying sound-id:" sound-id)
  (let [sound (.getSoundById js/soundManager sound-id)]
    (if (or (undefined? sound)
            (> 3 (.-readyState sound)))
      (swap! app-state assoc :tracks-to-delete (conj (:tracks-to-delete @app-state) sound-id))
      (.destruct sound)))

  (if (and (not (nil? (:current-sound @app-state)))
           (= sound-id (.-id (:current-sound @app-state))))
    (swap! app-state assoc :current-sound-id nil)
    (swap! app-state assoc :current-sound nil)))

(defn set-position! [position]
  (println "Setting sound position to: " position)
  (if (= 0 (.-playState (:current-sound @app-state)))
    (.play (:current-sound @app-state)
           #js {:whileplaying while-playing
                :onfinish (:on-finish @app-state)
                :onplay #(.setPosition (:current-sound @app-state) position)})
    (.setPosition (:current-sound @app-state) position)))

(defn get-position []
  (.-position (:current-sound @app-state)))

(defn get-duration []
  (.-duration (:current-sound @app-state)))

(defn is-sound-loaded? []
  (nil? (:current-sound @app-state)))

(defn set-volume [volume]
  (println "Setting volume to: " volume)
  (swap! app-state assoc :volume volume)

  (if-not (nil? (:current-sound @app-state))
    (.setVolume (:current-sound @app-state) volume)
    (println "No current-sound to immediately apply volume to.")))

(defn get-volume []
  (:volume @app-state))
