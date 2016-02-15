(ns moomoo-frontend.hashing
  (:require [moomoo-frontend.globals :as g]))

(defn check-hash [file]
  (println "Hashing:" (println (.-name file)))
  (let [client-id (.v4 js/uuid)]
    (swap! g/app-state
           assoc
           :files-to-hash
           (merge {client-id file}
                  (:files-to-check @g/app-state)))
    (.emit g/socket "new-hash" client-id)))
