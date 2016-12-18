(ns moomoo.utils)

(defn uuid [] (str (java.util.UUID/randomUUID)))

(defn vector->hash-map [v]
  "Converts a vector to a hash-map like so: 
   [\"a\" \"b\" :c 1] -> {:a \"b\", :c 1}.
   Assumes an even number of elements."
  (apply hash-map (map-indexed #(if (even? %1)
                                  (keyword %2)
                                  %2)
                               v)))
