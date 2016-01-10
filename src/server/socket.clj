(ns moomoo.socket
  (:require [moomoo.rooms :as rooms]))

(defmacro defevent [event-name f]
  (list '.on 'socket event-name f))
