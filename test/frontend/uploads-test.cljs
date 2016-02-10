(ns moomoo-frontend.uploads-test
  (:require [cljs.test :refer-macros [deftest is testing]]
            [moomoo-frontend.uploads :as uploads]))

(deftest start-upload
  (is (= false (:stopped? (uploads/start uploads/blank-upload)))))

(deftest stop-upload
  (is (= true
         (:stopped? (uploads/stop (uploads/start uploads/blank-upload))))))

(deftest pause-upload
  (is (= true (:paused? (uploads/pause uploads/blank-upload)))))

(deftest resume-upload
  (is (= false (:paused? (uploads/resume (uploads/pause uploads/blank-upload))))))

(deftest get-action-started
  (let [filename "foo.mp3"
        upload-id "test-id"
        upload (merge uploads/blank-upload {:filename filename
                                            :id upload-id})]`

    (let [old-state {:uploads {}}
          new-state {:uploads {upload-id
                              (uploads/start upload)}}]
      (is (= :started (uploads/get-action old-state new-state upload-id))))
    (let [old-state {:uploads {upload-id (uploads/start upload)}}
          new-state {:uploads {upload-id (uploads/start upload)}}]
      (is (nil? (uploads/get-action old-state new-state upload-id))))))

(deftest get-action-stopped
  (let [filename "foo.mp3"
        upload-id "test-id"
        upload (merge uploads/blank-upload {:filename filename
                                            :id upload-id})]
    (let [old-state {:uploads {}}
          new-state {:uploads {upload-id
                               (uploads/stop upload)}}]
      (is (= :stopped (uploads/get-action old-state new-state upload-id))))
    (let [old-state {:uploads {upload-id (uploads/stop upload)}}
          new-state {:uploads {upload-id (uploads/stop upload)}}]
      (is (nil? (uploads/get-action old-state new-state upload-id))))))

(deftest get-action-paused
  (let [filename "foo.mp3"
        upload-id "test-id"
        upload (merge uploads/blank-upload {:filename filename
                                            :id upload-id})]
    (let [old-state {:uploads {upload-id (uploads/stop upload)}}
          new-state {:uploads {upload-id
                               (uploads/pause upload)}}]
      (is (= :paused (uploads/get-action old-state new-state upload-id))))
    (let [old-state {:uploads {upload-id (uploads/pause (uploads/stop upload))}}
          new-state {:uploads {upload-id (uploads/pause (uploads/stop upload))}}]
      (is (nil? (uploads/get-action old-state new-state upload-id))))))

(deftest get-action-resumed
  (let [filename "foo.mp3"
        upload-id "test-id"
        upload (merge uploads/blank-upload {:filename filename
                                            :id upload-id})]
    (let [old-state {:uploads {upload-id
                               (uploads/pause (uploads/stop upload))}}
          new-state {:uploads {upload-id
                               (uploads/resume (uploads/pause (uploads/stop upload)))}}]
      (is (= :resumed (uploads/get-action old-state new-state upload-id))))
    (let [old-state {:uploads {upload-id (uploads/resume (uploads/stop upload))}}
          new-state {:uploads {upload-id (uploads/resume (uploads/stop upload))}}]
      (is (nil? (uploads/get-action old-state new-state upload-id))))))

(deftest get-action-no-change
  (let [upload-id "test-id"
        upload (merge uploads/blank-upload {:filename filename
                                            :id upload-id})
        old-state {:uploads {upload-id upload}}
        new-state old-state]
    (is (nil? (uploads/get-action old-state new-state upload-id)))))

(deftest uploads-watcher-upload-added
 (let [upload-id "UPLOAD-ID"
       filename "foo.mp3"
       upload-slots 4
       upload (merge uploads/blank-upload {:filename filename
                                           :id upload-id})
       old-room-uploads-order []
       new-room-uploads-order [upload-id]
       old-state {:uploads {}
                  :upload-slots upload-slots
                  :room-uploads-order old-room-uploads-order}
       new-state {:uploads {upload-id upload}
                  :upload-slots upload-slots
                  :room-uploads-order new-room-uploads-order}]
   (is (not (:stopped? ((:uploads (uploads/handle-state-change old-state new-state)) upload-id)))))
 (let [upload-id-1 "foo"
       filename-1 "foo.mp3"
       upload-1 (uploads/start (merge uploads/blank-upload {:filename filename-1
                                                            :upload-id upload-id-1}))
       upload-id-2 "foo1"
       filename-2 "foo1.mp3"
       upload-2 (merge uploads/blank-upload {:filename filename-2
                                             :upload-id upload-id-2})
       upload-slots 1
       old-uploads-order [upload-id-1]
       new-uploads-order [upload-id-1 upload-id-2]
       old-state {:uploads {upload-id-1 upload-1}
                  :room-uploads-order old-uploads-order
                  :upload-slots upload-slots}
       new-state {:uploads {upload-id-1 upload-1 upload-id-2 upload-2}
                  :room-uploads-order new-uploads-order
                  :upload-slots upload-slots}
       changed-state (uploads/handle-state-change old-state new-state)]
    (is (:stopped? ((:uploads changed-state) upload-id-2)))))

