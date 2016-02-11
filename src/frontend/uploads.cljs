(ns moomoo-frontend.uploads
  (:require [clojure.set]))

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
   Can return: :stopped, :started, :paused, :resumed, or nil"
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

(defn handle-state-change [old-state new-state]
  "Returns new state map according to changes between old-state and new-state"
  ; uploads added
  (let [new-upload-ids (clojure.set/difference (set (:room-uploads-order new-state))
                                               (set (:room-uploads-order old-state)))]
    (if (and (not (empty? new-upload-ids))
             (< (count (:room-uploads-order new-state)) (:upload-slots new-state)))
      (assoc new-state
             :uploads
             (assoc (:uploads new-state)
                    (first new-upload-ids)
                    (start ((:uploads new-state) (first new-upload-ids)))))
      new-state)))

(defn upload-file! []
  )
