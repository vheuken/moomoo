(ns moomoo-frontend.uploads
  (:require [moomoo-frontend.app-state :as app-state]
            [clojure.data :as data]))

(defonce blank-upload {:paused?  false
                       :started? false})

(defn pause-upload [upload]
  (assoc upload :paused? true))

(defn resume-upload [upload]
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
        old-upload-state (first upload-diff)
        new-upload-state (second upload-diff)]

    (println upload-diff)
    (println "old:" old-upload-state)
    (println "new:" new-upload-state)
    (if (nil? old-upload-state)
      (if (:started? new-upload-state)
        :started
        nil)
      (if-not (nil? new-upload-state)
        (let [k (first (keys new-upload-state))
              v (first (vals new-upload-state))]
          (cond
            (= k :paused?)
              (if v
                :paused
                :unpaused)
            (= k :started?)
               (if v
                 :started
                 :stopped)))))))

(defn upload-file! [file]
  (let [new-upload blank-upload
        upload-id (.v4 js/uuid)
        stream (.createStream js/ss)
        blob-stream (.createBlobReadStream js/ss file)
        upload-watch-fn (fn [_ _ old-state new-state]
                          (let [action (get-action old-state new-state upload-id)]
                            (println "ACTION:" action)
                            (cond
                              (= action :paused)
                                (.unpipe blob-stream)
                              (= action :unpaused)
                                (.pipe blob-stream stream)
                              (= action :stopped)
                                (do
                                  (.unpipe blob-stream))
                              (= action :started)
                                (do
                                  (.pipe blob-stream stream)))))]
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
           :inactive-uploads
           (append-upload (:inactive-uploads @app-state/app-state)
                          upload-id))

    (.emit (js/ss app-state/socket)
           "file-upload"
           stream
           (.-name file)
           (.-size file)
           upload-id)

    (swap! app-state/app-state
           assoc
           :uploads
           (merge (:uploads @app-state/app-state)
                  (if (< (:num-of-uploads @app-state/app-state)
                         (:upload-slots   @app-state/app-state))
                    {upload-id (start-upload new-upload)}
                    {upload-id new-upload})))))
