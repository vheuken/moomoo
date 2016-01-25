(ns moomoo-frontend.uploads
  (:require [moomoo-frontend.app-state :as app-state]
            [clojure.data :as data]
            [clojure.set]))

(defonce blank-upload {:paused?  false
                       :started? false})

(defn active? [upload]
  (and (:started? upload)
       (not (:paused? upload))))

(defn unpaused-and-not-started? [upload]
  (and (not (:started? upload))
       (not (:paused?  upload))))

(defn uploads-after-id [uploads-order id]
  (let [index (first (keep-indexed #(when (= %2 id) %1)
                                   uploads-order))]
    (if (nil? index)
      []
      (subvec uploads-order (inc index)))))

(defn pause-upload [upload]
  (assoc upload :paused? true))

(defn resume-upload [upload]
  (assoc upload :paused? false))

(defn start-upload [upload]
  (assoc upload :started? true))

(defn stop-upload [upload]
  (assoc upload :started? false))

(defn append-upload [uploads upload]
  (conj uploads upload))

(defn active-uploads [uploads-order uploads]
  (vec (remove #(not (active? (uploads %1))) uploads-order)))

(defn inactive-uploads [uploads-order uploads]
  (vec (remove #(active? (uploads %1)) uploads-order)))

(defn handle-upload-slots-change [old-state new-state]
  (let [old-upload-slots (:upload-slots old-state)
        new-upload-slots (:upload-slots new-state)
        uploads          (:uploads new-state)
        uploads-order    (:uploads-order new-state)
        active-uploads   (active-uploads   uploads-order uploads)
        inactive-uploads (inactive-uploads uploads-order uploads)
        unpaused-inactive-uploads (vec (remove #(:paused? (uploads %)) inactive-uploads))]
    (cond
      (and (< old-upload-slots new-upload-slots)
           (< (count active-uploads) new-upload-slots))
        (if-not (empty? unpaused-inactive-uploads)
          {:uploads (merge uploads {(first unpaused-inactive-uploads)
                                    (start-upload (uploads (first unpaused-inactive-uploads)))})})
      (and (> old-upload-slots new-upload-slots)
           (> (count active-uploads) new-upload-slots))
        {:uploads (merge uploads {(last active-uploads)
                                  (stop-upload (uploads (last active-uploads)))})})))

(defn upload-slots-watch-fn! [_ _ old-state new-state]
  (let [new-uploads-info (handle-upload-slots-change old-state new-state)]
    (if-not (nil? new-uploads-info)
      (swap! app-state/app-state merge new-uploads-info))))

(add-watch app-state/app-state :upload-slots upload-slots-watch-fn!)

(defn upload-removed-watch-fn! [_ _ old-state new-state]
  (let [deleted-upload-ids (clojure.set/difference (set (keys (:uploads old-state)))
                                                   (set (keys (:uploads new-state))))]
    (if-not (empty? deleted-upload-ids)
      (let [uploads (:uploads @app-state/app-state)
            uploads-order (vec (remove deleted-upload-ids (:uploads-order @app-state/app-state)))
            inactive-uploads (inactive-uploads uploads-order uploads)]
        (if (< (count (active-uploads uploads-order uploads))
               (:upload-slots new-state))
          (swap! app-state/app-state
                 merge
                 {:uploads-order uploads-order
                  :uploads (assoc uploads
                                  (first inactive-uploads)
                                  (start-upload (uploads (first inactive-uploads))))})
          (swap! app-state/app-state
                   assoc
                   :uploads-order
                   uploads-order))))))

(add-watch app-state/app-state :upload-removed upload-removed-watch-fn!)

(defn handle-new-upload [old-state new-state]
  (loop [uploads-order (:uploads-order new-state)
         upload-slots  (:upload-slots new-state)
         uploads       (:uploads new-state)]
    (if (empty? uploads-order)
      uploads
      (let [upload-id (first uploads-order)
            upload    (uploads upload-id)]
        (if (> upload-slots 0)
          (if (active? upload)
            (recur (rest uploads-order) (dec upload-slots) uploads)
            (if (unpaused-and-not-started? upload)
              (recur (rest uploads-order)
                     (dec upload-slots)
                     (assoc uploads upload-id (start-upload upload)))))
          (recur (rest uploads-order)
                 upload-slots
                 (assoc uploads upload-id (stop-upload upload))))))))

(defn upload-added-watch-fn! [_ _ old-state new-state]
  (let [new-upload-ids (clojure.set/difference (set (keys (:uploads new-state)))
                                               (set (keys (:uploads old-state))))]
    (println "NEW UPLOAD IDS" new-upload-ids)
    (if-not (empty? new-upload-ids)
      (swap! app-state/app-state
             assoc
             :uploads
             (handle-new-upload old-state new-state)))))

(add-watch app-state/app-state :upload-added upload-added-watch-fn!)

(defn get-action [old-state new-state upload-id]
  "returns the action applied to the given upload-id.
   Can return: :stopped, :started, :paused, :unpaused. :reconnected"
  (if (and (:reconnected? new-state)
           (not (:reconnected? old-state)))
    :reconnected
    (let [upload-diff (data/diff (get (:uploads old-state) upload-id)
                                 (get (:uploads new-state) upload-id))
          old-upload-state (first upload-diff)
          new-upload-state (second upload-diff)]
      (if (nil? old-upload-state)
        (if (:started? new-upload-state)
          :started)
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
                   :stopped))))))))

(defn handle-pause! [uploads uploads-order upload-slots]
  (let [first-inactive-upload-id (first (filter #(unpaused-and-not-started? (uploads %)) uploads-order))
        first-inactive-upload    (uploads first-inactive-upload-id)]
    (if (and (not (nil? first-inactive-upload))
             (< (count (active-uploads uploads-order uploads))
                upload-slots))
      (swap! app-state/app-state
             assoc
             :uploads
             (assoc (:uploads @app-state/app-state)
                    first-inactive-upload-id
                    (start-upload first-inactive-upload))))))

(defn handle-unpause! [uploads uploads-order upload-slots active-uploads upload-id]
  (when-not (active? (uploads upload-id))
    (swap! app-state/app-state
           assoc
           :uploads
           (assoc (:uploads @app-state/app-state)
                  upload-id
                  (start-upload (uploads upload-id)))))
  (if (> (count (active-uploads uploads-order (:uploads @app-state/app-state)))
         upload-slots)
    (let [upload-to-stop-id (last (active-uploads uploads-order (:uploads @app-state/app-state)))
          upload-to-stop (uploads upload-to-stop-id)]
      (swap! app-state/app-state
             assoc
             :uploads
             (assoc (:uploads @app-state/app-state)
                    upload-to-stop-id
                    (stop-upload upload-to-stop))))))
(defn positions
  [pred coll]
  (keep-indexed (fn [idx x]
                  (when (pred x)
                    idx))
                coll))

(defn comp-by-room-order [a b]
  (let [room-uploads-order (:room-uploads-order @app-state/app-state)
        a-index (first (positions #{a} room-uploads-order))
        b-index (first (positions #{b} room-uploads-order))]
    (< a-index b-index)))

(defn upload-file! [file upload-id]
  (let [new-upload (merge blank-upload {:filename (.-name file)
                                        :id upload-id})
        stream (atom (.createStream js/ss))
        blob-stream (atom (.createBlobReadStream js/ss file))
        emit #(.emit (js/ss app-state/socket)
                     "file-upload"
                     %1
                     (.-name file)
                     (.-size file)
                     upload-id
                     %2)
        upload-watch-fn! (fn [_ _ old-state new-state]
                           (let [action (get-action old-state new-state upload-id)
                                 uploads (:uploads new-state)
                                 uploads-order (:uploads-order new-state)
                                 upload (get uploads upload-id)
                                 upload-slots (:upload-slots new-state)
                                 upload-info (first (filter #(= upload-id (.-id %1))
                                                            (vals (:current-uploads-info @app-state/app-state))))]
                             (if-not (nil? action)
                               (cond
                                 (= action :reconnected)
                                   (let [start (.-bytesreceived upload-info)]
                                     (swap! stream #(.createStream js/ss))
                                     (swap! blob-stream #(.createBlobReadStream
                                                          js/ss
                                                          file
                                                          #js {:start  start}))
                                     (emit @stream start)
                                     (when (active? upload)
                                       (.pipe @blob-stream @stream))
                                     (swap! app-state/app-state
                                            assoc
                                            :reconnected?
                                            false))
                                 (= action :paused)
                                   (do
                                     (.unpipe @blob-stream)
                                     (handle-pause! uploads uploads-order upload-slots))
                                 (= action :unpaused)
                                   (do
                                     (when (:started? upload)
                                       (.pipe @blob-stream @stream))
                                     (handle-unpause! uploads
                                                      uploads-order
                                                      upload-slots
                                                      active-uploads
                                                      upload-id))
                                 (= action :stopped)
                                   (.unpipe @blob-stream)
                                 (and (= action :started)
                                      (not (:paused? upload)))
                                   (.pipe @blob-stream @stream)))))]
    (.on @blob-stream "end"
      (fn []
        (remove-watch app-state/app-state upload-id)
        (swap! app-state/app-state
               assoc
               :uploads
               (dissoc (:uploads @app-state/app-state) upload-id))))

    (add-watch app-state/app-state
               upload-id
               upload-watch-fn!)

    (emit @stream 0)

    (swap! app-state/app-state
           merge
           {:uploads (merge (:uploads @app-state/app-state)
                            {upload-id new-upload})
            :uploads-order (sort comp-by-room-order
                                 (append-upload (:uploads-order @app-state/app-state)
                                                upload-id))})))

