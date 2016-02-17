(ns moomoo-frontend.socketio-interface
  (:require [moomoo-frontend.globals :as g]
            [moomoo-frontend.client-interface :as client]
            [moomoo-frontend.uploads :as uploads]))

(.on g/socket "sign-in-success"
  (fn [user-id users]
    (let [users (js->clj users)]
      (println users)
      (client/sign-in-success! g/app-state user-id users))))

(.on g/socket "user-joined"
  (fn [users]
    (let [users (js->clj users)]
      (println users)
      (client/user-joined! g/app-state users))))

(.on g/socket "new-chat-message"
  (fn [user-id message]
    (client/chat-message-received! g/app-state {user-id message})))

(.on g/socket "start-hashing"
  (fn [client-id upload-id]
    (println "Received start-hashing signal" client-id upload-id)
    (when-let [file ((:files-to-hash @g/app-state) client-id)]
      (swap! g/app-state
             assoc
             :files-to-hash
             (dissoc (:files-to-hash @g/app-state) client-id))
      (js/md5File file
        (fn [current-chunk chunks]
          (println "Current chunk:" current-chunk "Chunks:" chunks)
          (.emit g/socket
                 "hash-progress"
                 upload-id
                 (.-name file)
                 current-chunk
                 chunks))
        (fn [file-hash]
          (swap! g/app-state
                 assoc
                 :file-hashes
                 (merge {file-hash file}
                        (:file-hashes @g/app-state)))
          (.emit g/socket "check-hash" upload-id file-hash))))))

(.on g/socket "hash-progress"
  (fn [upload-id user-id filename current-chunk chunks]
    (println "hash-progress" upload-id filename current-chunk chunks)
    (swap! g/app-state
           assoc
           :uploads
           (assoc (:uploads @g/app-state)
                  upload-id
                  {:type :hash
                   :id upload-id
                   :filename filename
                   :user user-id
                   :current-chunk current-chunk
                   :chunks chunks}))))

(.on g/socket "upload-progress"
  (fn [upload-id user-id bytes-received file-size filename]
    (swap! g/app-state
           assoc
           :uploads
           (assoc (:uploads @g/app-state)
                  upload-id
                  {:type :upload
                   :id upload-id
                   :filename filename
                   :user user-id
                   :bytes-received bytes-received
                   :file-size file-size}))))

(add-watch g/app-state :uploads-watcher (fn [_ _ o n]
                                          (let [s (uploads/handle-state-change o n)]
                                            (when-not (= s n)
                                              (swap! g/app-state merge s)))))

(defn upload-file! [file upload-id]
  (let [new-upload (merge uploads/blank-upload {:filename (.-name file)
                                                :id upload-id})
        stream (atom (.createStream js/ss))
        blob-stream (atom (.createBlobReadStream js/ss file))
        emit #(.emit (js/ss g/socket)
                     "file-upload"
                     %1
                     (.-name file)
                     (.-size file)
                     upload-id
                     %2)
        upload-watch-fn! (fn [_ _ old-state new-state]
                           (let [action (uploads/get-action old-state new-state upload-id)
                                 uploads (:uploads new-state)
                                 upload (get uploads upload-id)]
                             (println action)
                             (println upload)
                             (if-not (nil? action)
                               (cond
                                 (= action :paused)
                                   (.unpipe @blob-stream)
                                 (= action :resumed)
                                   (when-not (:stopped? upload)
                                     (.pipe @blob-stream @stream))
                                 (= action :stopped)
                                   (.unpipe @blob-stream)
                                 (= action :started)
                                   (when-not (:paused? upload)
                                     (.pipe @blob-stream @stream))))))]

    (.on @blob-stream "end" #(remove-watch g/app-state upload-id))

    (add-watch g/app-state
               upload-id
               upload-watch-fn!)

    (emit @stream 0)

    (swap! g/app-state
           merge
           {:uploads (merge (:uploads @g/app-state)
                            {upload-id new-upload})
            :client-uploads-order (conj (:client-uploads-order @g/app-state)
                                        upload-id)})))

(.on g/socket "hash-not-found"
  (fn [upload-id file-hash]
    (println "Hash not found for id:" upload-id)
    (let [file ((:file-hashes @g/app-state) file-hash)]
      (upload-file! file upload-id))))

