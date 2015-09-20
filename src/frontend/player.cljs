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
          (println "DESTROYING SOUND FROM whileloading()")
          (.destruct sound)
          (swap! app-state assoc :tracks-to-delete
            (vec (remove #(= (.-id sound) %) (:tracks-to-delete @app-state)))))))))

(defn pause []
  (.pause (:current-sound @app-state))
  (swap! app-state assoc :paused? true))

(defn resume []
  (.resume (:current-sound @app-state))
  (swap! app-state assoc :paused? false))

(defn play-track [sound-blob sound-id position on-finish]
  (swap! app-state assoc :on-finish on-finish)
  (swap! app-state assoc :current-sound-id sound-id)

  (defn on-load []
    (if (nil? position)
      (let [duration (.-duration (:current-sound @app-state))]
        (println "DURATION! " duration)
        (.play (:current-sound @app-state)
               #js {:whileplaying while-playing
                    :onfinish on-finish
                    :onplay #(.setPosition (:current-sound @app-state)
                                           duration)}))
      (.play (:current-sound @app-state)
             #js {:whileplaying while-playing
                  :onfinish on-finish
                  :onplay #(.setPosition (:current-sound @app-state)
                                        position)})))

  (let [reader (new js/FileReader)]
    (.readAsDataURL reader sound-blob)
    (set! (.-onloadend reader)
      (fn []
        (swap! app-state assoc :current-sound
          (.createSound js/soundManager #js {:id sound-id
                                             :type "audio/mpeg"
                                             :url (.-result reader)
                                             :autoLoad true
                                             :whileloading while-loading
                                             :onload on-load
                                             :volume (:volume @app-state)}))
        (if (:paused? @app-state)
          (pause))))))

; TODO: probably should go into a different module...but which?
(defn destroy-track [sound-id]
  (let [sound (.getSoundById js/soundManager sound-id)]
    (if (or (undefined? sound)
            (> 3 (.-readyState sound)))
      (swap! app-state assoc :tracks-to-delete (conj (:tracks-to-delete @app-state) sound-id))
      (.destruct sound))))

(defn set-position [position]
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
  (swap! app-state assoc :volume volume)

  (if-not (nil? (:current-sound @app-state))
    (.setVolume (:current-sound @app-state) volume)))
