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

(defn drop-first-upload [uploads]
  (subvec uploads 1))

(defn drop-last-upload [uploads]
  (subvec uploads 0 (dec (count uploads))))

(defn handle-upload-slots-change [old-state new-state]
  (let [old-upload-slots (:upload-slots old-state)
        new-upload-slots (:upload-slots new-state)
        active-uploads   (:active-uploads new-state)
        inactive-uploads (:inactive-uploads new-state)
        uploads (:uploads new-state)]
    (cond
      (and (< old-upload-slots new-upload-slots)
           (< (count active-uploads) new-upload-slots))
        (if-not (empty? inactive-uploads)
          {:active-uploads (append-upload active-uploads
                                          (first inactive-uploads))
           :inactive-uploads (drop-first-upload inactive-uploads)
           :uploads (merge uploads {(first inactive-uploads)
                                    (start-upload (uploads (first inactive-uploads)))})})
      (and (> old-upload-slots new-upload-slots)
           (> (count active-uploads) new-upload-slots))
        (if-not (empty? active-uploads)
          {:active-uploads (drop-last-upload active-uploads)
           :inactive-uploads (prepend-upload inactive-uploads
                                             (last active-uploads))
           :uploads (merge uploads {(last active-uploads)
                                    (stop-upload (uploads (last active-uploads)))})}))))

(defn upload-slots-watch-fn! [_ _ old-state new-state]
  (let [new-uploads-info (handle-upload-slots-change old-state new-state)]
    (if-not (nil? new-uploads-info)
      (swap! app-state/app-state merge new-uploads-info))))

(add-watch app-state/app-state :upload-slots  upload-slots-watch-fn!)

(defn get-action [old-state new-state upload-id]
  "returns the action applied to the given upload-id.
   Can return: :stopped, :started, :paused, :unpaused"
  (let [upload-diff (data/diff (get (:uploads old-state) upload-id)
                               (get (:uploads new-state) upload-id))
        old-upload-state (first upload-diff)
        new-upload-state (second upload-diff)]
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
        upload-watch-fn! (fn [_ _ old-state new-state]
                           (let [action (get-action old-state new-state upload-id)]
                             (cond
                               (= action :paused)
                                 (.unpipe blob-stream)
                               (= action :unpaused)
                                 (.pipe blob-stream stream)
                               (= action :stopped)
                                 (.unpipe blob-stream)
                               (= action :started)
                                 (.pipe blob-stream stream))))]
    (.on blob-stream "end"
      (fn []
        (remove-watch app-state/app-state upload-id)
        (swap! app-state/app-state
               merge
               {:uploads (dissoc (:uploads @app-state/app-state)
                         upload-id)
                :active-uploads (remove @app-state/app-state #{upload-id})
                :inactive-uploads (remove @app-state/app-state #{upload-id})})))

    (add-watch app-state/app-state
               upload-id
               upload-watch-fn!)

    (.emit (js/ss app-state/socket)
           "file-upload"
           stream
           (.-name file)
           (.-size file)
           upload-id)

    (swap! app-state/app-state
           merge
           (if (< (count (:active-uploads @app-state/app-state))
                         (:upload-slots   @app-state/app-state))
             {:uploads (merge (:uploads @app-state/app-state)
                              {upload-id (start-upload new-upload)})
              :active-uploads (prepend-upload (:active-uploads @app-state/app-state)
                                              upload-id)}
             {:uploads (merge (:uploads @app-state/app-state)
                              {upload-id new-upload})
              :inactive-uploads (prepend-upload (:inactive-uploads @app-state/app-state)
                                                upload-id)}))))


