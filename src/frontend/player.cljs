(ns moomoo-frontend.player)

(defonce app-state (atom {:current-sound nil
                          :tracks-to-delete []}))

; TODO: this shouldn't be here; renderer should handle this by polling position
(defn set-progress-ball-position [percent-completed]
  (.css (js/$ "#progress-track-ball") #js {"left" (str percent-completed "%")}))

; TODO: shouldnt even need this once we move this to react
(defn while-playing []
  (if-not (:ball-being-dragged? @app-state)
    (let [sound (:current-sound @app-state)]
      (set-progress-ball-position (* 100
                                    (/ (.-position sound)
                                       (.-duration sound)))))))
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

(defn play-track [sound-blob sound-id position on-finish]
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
                                             :onload while-loading}))

        (.play (:current-sound @app-state)
               #js {:whileplaying while-playing
                    :onfinish on-finish
                    :onplay #(.setPosition (:current-sound @app-state)
                                           position)})))))


(defn destroy-track [sound-id]
  (let [sound (.getSoundById js/soundManager sound-id)]
    (if (or (undefined? sound)
            (> 3 (.-readyState sound)))
      (swap! app-state assoc :tracks-to-delete (conj (:tracks-to-delete @app-state) sound-id)))
      (.destruct sound)))

(defn set-position [position]
  (.setPosition (:current-sound @app-state) position))

(defn get-position []
  (.-position (:current-sound @app-state)))

(defn pause []
  (.pause (:current-sound @app-state)))

(defn resume []
  (.resume (:current-sound @app-state)))
