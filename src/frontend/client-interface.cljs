(ns moomoo-frontend.client-interface)

(defn sign-in-success! [state user-id users]
  (swap! state merge {:user-id user-id
                      :users   users}))

(defn user-joined! [state users]
  (swap! state assoc :users users))
