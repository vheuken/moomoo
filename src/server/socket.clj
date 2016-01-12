(ns moomoo.socket)

(defmacro defevent [event-name params & body]
  (list '.on 'socket event-name `(fn ~params ~@body)))
