(ns moomoo-frontend.uploads
  (:require [clojure.set :as set :refer [difference]]))

(def blank-upload {:stopped? true
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
  (remove #(not (active? (uploads %1))) uploads-order))

(defn inactive-uploads [uploads-order uploads]
  (remove #(active? (uploads %1)) uploads-order))

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
        uploads-order (:client-uploads-order new-state)
        old-uploads-order (:client-uploads-order old-state)
        upload-slots (:upload-slots new-state)
        active-uploads (active-uploads uploads-order uploads)
        inactive-uploads (inactive-uploads uploads-order uploads)
        unpaused-inactive-uploads (remove #(:paused? (uploads %)) 
                                          inactive-uploads)
        new-upload-ids (set/difference (set uploads-order)
                                       (set old-uploads-order))
        removed-upload-ids (set/difference (set old-uploads-order)
                                           (set uploads-order))]
    (cond
      (< (count active-uploads) upload-slots)
      (assoc new-state 
             :uploads
              (reduce #(update % %2 start) 
                      uploads 
                      (take (- upload-slots
                            (count active-uploads)) 
                      uploads-order)))
      
      ;(> (count active-uploads) upload-slots)
      ;new-state

      :else new-state)))

