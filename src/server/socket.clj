(ns moomoo.socket)

(defmacro defevent [event-name params n & body]
  (list '.on 'socket event-name
        (list 'fn params
          (list 'rooms/get-user-id-from-socket (list '.-id 'socket)
            (list 'fn [(first n)]
              (cons 'do body))))))
