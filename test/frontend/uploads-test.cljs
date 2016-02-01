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
