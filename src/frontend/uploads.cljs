(ns moomoo-frontend.uploads
  (:require [clojure.set]))

(defonce  blank-upload {:stopped? true
                        :paused?  false
                        :id       nil
                        :filename nil
                        :type :upload})

(defn start [upload]
  (assoc upload :stopped? false))

(defn stop [upload]
  (assoc upload :stopped? true))

(defn pause [upload]
  (assoc upload :paused? true))

(defn resume [upload]
  (assoc upload :paused? false))

(defn active? [upload]
  (and (not (:stopped? upload))
       (not (:paused? upload))))

(defn active-uploads [uploads-order uploads]
  (vec (remove #(not (active? (uploads %1))) uploads-order)))

(defn inactive-uploads [uploads-order uploads]
  (vec (remove #(active? (uploads %1)) uploads-order)))

(defn get-action [old-state new-state upload-id]
  "returns the action applied to the given upload-id.
   Can return: :stopped, :started, :paused, :resumed, or nil"
  (let [old-uploads (:uploads old-state)
        new-uploads (:uploads new-state)
        old-upload (old-uploads upload-id)
        new-upload (new-uploads upload-id)]
    (when-not (= :hash (:type old-upload))
      (cond
        (and (not (:stopped? new-upload))
             (:stopped? old-upload))
        :started

        (and (:stopped? new-upload)
             (not (:stopped? old-upload)))
        :stopped

        (and (:paused? new-upload)
             (not (:paused? old-upload)))
        :paused

        (and (not (:paused? new-upload))
            (:paused? old-upload))
        :resumed))))

(defn handle-state-change [old-state new-state]
  "Returns new state map according to changes between old-state and new-state"
  (let [uploads (:uploads new-state)
        room-uploads-order (:client-uploads-order new-state)
        upload-slots (:upload-slots new-state)
        active-uploads (active-uploads room-uploads-order uploads)
        inactive-uploads (inactive-uploads room-uploads-order uploads)
        unpaused-inactive-uploads (vec (remove #(:paused? (uploads %)) inactive-uploads))
        new-upload-ids (clojure.set/difference (set (:client-uploads-order new-state))
                                               (set (:client-uploads-order old-state)))
        removed-upload-ids (clojure.set/difference (set (:client-uploads-order old-state))
                                                   (set (:client-uploads-order new-state)))]
    (cond
      (and (not (empty? new-upload-ids))
           (<= (count room-uploads-order) upload-slots))
      (assoc-in new-state
                [:uploads (first new-upload-ids)]
                (start (uploads (first new-upload-ids))))

      (and (and (not (empty? removed-upload-ids))
                (not (empty? unpaused-inactive-uploads)))
           (< (count active-uploads)
              upload-slots))
      (assoc-in new-state
                [:uploads (first unpaused-inactive-uploads)]
                (start (uploads (first unpaused-inactive-uploads))))

      :else new-state)))

