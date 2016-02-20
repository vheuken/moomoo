(ns moomoo.hashing-test
  (:require [cljs.test :refer-macros [async deftest is testing use-fixtures]]
            [moomoo.hashing :as hashing]
            [moomoo.fixtures :as fixtures]))

(use-fixtures :each
  {:before fixtures/flush-all
   :after  fixtures/flush-all})

(deftest check-hash
  (let [hash-str "HASH"
        test-file-path "FOO.mp3"]
    (async done
      (hashing/check-hash hash-str
        (fn [hash-exists? file-path]
          (is (not hash-exists?))
          (is (nil? file-path))
          (hashing/add-hash! hash-str test-file-path
            (fn []
              (hashing/check-hash hash-str
                (fn [hash-exists? file-path]
                  (is hash-exists?)
                  (is (= file-path test-file-path))
                  (done))))))))))
