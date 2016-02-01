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

(deftest pause-upload
  (is (= false (:paused? (uploads/resume (uploads/pause uploads/blank-upload))))))

(deftest get-action-started
  (let [filename "foo.mp3"
        upload-id "test-id"
        upload (merge uploads/blank-upload {:filename filename
                                            :id upload-id})
        old-state {:uploads {}}
        new-state {:uploads {upload-id
                             (uploads/start upload)}}]
    (uploads/get-action old-state new-state upload-id)))
