(ns moomoo-frontend.uploads
  (:require [moomoo-frontend.app-state :as app-state]
            [clojure.data :as data]))

(defonce blank-upload {:paused? false
                       :stopped? false})

(defn pause-upload [upload]
  (assoc upload :paused? true))

(defn unpause-upload [upload]
  (assoc upload :paused? false))

(defn start-upload [upload]
  (assoc upload :started? true))

(defn stop-upload [upload]
  (assoc upload :started? false))

(defn initialize-upload [upload]
  (assoc upload :started? true))

(defn append-upload [uploads upload]
  (conj uploads upload))

(defn prepend-upload [uploads upload]
  (into [upload] uploads))

(defn get-action [old-state new-state upload-id]
  "returns the action applied to the given upload-id.
   Can return: :stopped, :started, :paused, :unpaused"
  (let [upload-diff (data/diff (get (:uploads old-state) upload-id)
                               (get (:uploads new-state) upload-id))
        new-upload-info (second upload-diff)]
    (if-not (nil? new-upload-info)
      (let [k (first (keys new-upload-info))
            v (first (vals new-upload-info))]
        (cond
          (= k :paused?)
            (if v
              :paused
              :unpaused)
          (= k :stopped?)
             (if v
               :stopped
               :started))))))


(defn upload-file! [file]
  (if (> (:num-of-uploads @app-state/app-state)
         (:upload-slots @app-state/app-state))
    (swap! app-state/app-state
           assoc
           :num-of-uploads
           (inc (:num-of-uploads @app-state/app-state)))
    (let [new-upload blank-upload
          upload-id (.v4 js/uuid)
          stream (.createStream js/ss)
          blob-stream (.createBlobReadStream js/ss file)
          upload-watch-fn (fn [_ _ _ old-state new-state]
                            (let [action (get-action old-state new-state upload-id)]
                              (cond
                                (or (= action :stopped)
                                    (= action :paused))
                                  (.unpipe blob-stream)
                                (or (= action :started)
                                    (= action :unpaused))
                                  (.pipe blob-stream stream))))]
      (.on blob-stream "end"
        (fn []
          (swap! app-state/app-state
                 assoc
                 :num-of-uploads
                 (dec (:num-of-uploads @app-state/app-state)))
          (swap! app-state/app-state
                 assoc
                 :uploads
                 (dissoc (:uploads @app-state/app-state)
                         upload-id))
          (remove-watch app-state/app-state upload-id)))
      (add-watch app-state/app-state
                 upload-id
                 upload-watch-fn)
      (swap! app-state/app-state
             assoc
             :uploads
             (merge (:uploads @app-state/app-state)
                    {upload-id new-upload}))
      (swap! app-state/app-state
             assoc
             :inactive-uploads
             (append-upload (:inactive-uploads @app-state/app-state)
                            upload-id)))))
