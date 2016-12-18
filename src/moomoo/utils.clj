(ns moomoo.utils)

(defn vector->hash-map [v]
  (apply hash-map (map-indexed #(if (even? %1)
                                  (keyword %2)
                                  %2)
                               v)))
