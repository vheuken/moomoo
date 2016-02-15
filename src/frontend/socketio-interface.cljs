(ns moomoo-frontend.socketio-interface
  (:require [moomoo-frontend.globals :as g]
            [moomoo-frontend.client-interface :as client]))

(.on g/socket "sign-in-success"
  (fn [user-id users]
    (let [users (js->clj users)]
      (println users)
      (client/sign-in-success! g/app-state user-id users))))

(.on g/socket "user-joined"
  (fn [users]
    (let [users (js->clj users)]
      (println users)
      (println "YOLO")
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
                        (:file-hashes g/app-state)))
          (.emit g/socket "check-hash" upload-id file-hash))))))

(.on g/socket "hash-progress"
  (fn [upload-id filename current-chunk chunks]
    (println "hash-progress" upload-id filename current-chunk chunks)
    (swap! g/app-state
           assoc
           :uploads
           (merge {upload-id {:type :hash
                              :filename filename
                              :current-chunk current-chunk
                              :chunks chunks}}
                  (:uploads @g/app-state)))))
