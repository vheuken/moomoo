(ns moomoo-frontend.uploads)

(defonce  blank-upload {:stopped? true
                        :paused?  false
                        :id       nil
                        :filename nil})

(defn start [upload]
  (assoc upload :stopped? false))

(defn stop [upload]
  (assoc upload :stopped? true))

(defn pause [upload]
  (assoc upload :paused? true))

(defn resume [upload]
  (assoc upload :paused? false))

(defn get-action [old-state new-state upload-id]
  "returns the action applied to the given upload-id.
   Can return: :stopped, :started, :paused, :resumed. :reconnected"
  (let [old-uploads (:uploads old-state)
        new-uploads (:uploads new-state)
        old-upload (old-uploads upload-id)
        new-upload (new-uploads upload-id)]
    (if (and (not (:stopped? new-upload))
             (:stopped? old-upload))
      :started
      (if (and (:stopped? new-upload)
               (not (:stopped? old-upload)))
        :stopped
        (if (and (:paused? new-upload)
                 (not (:paused? old-upload)))
          :paused
          (if (and (not (:paused? new-upload))
                   (:paused? old-upload))
            :resumed))))))
