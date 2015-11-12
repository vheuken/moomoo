(ns moomoo.config
  (:require [cljs.nodejs :as nodejs]))

(defonce toml (nodejs/require "toml"))
(defonce fs (nodejs/require "fs"))

(defn load-file! [filename]
  (defonce data (js->clj (.parse toml (.readFileSync fs filename)))))
