(ns moomoo.socket)

(defmacro defevent [event-name params n & body]
  (list '.on 'socket event-name
        (list 'fn params
          (list 'rooms/get-user-id-from-socket (list '.-id 'socket)
            (list 'fn [(first n)]
              (list 'rooms/get-room-from-user-id (first n)
                    (list 'fn [(second n)]
                          (cons 'do body))))))))
