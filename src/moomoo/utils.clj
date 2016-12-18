(ns moomoo.utils)

(defn uuid [] (str (java.util.UUID/randomUUID)))

(defn vector->hash-map [v]
  (apply hash-map (map-indexed #(if (even? %1)
                                  (keyword %2)
                                  %2)
                               v)))
