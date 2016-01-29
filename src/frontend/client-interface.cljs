(ns moomoo-frontend.client-interface)

(defn sign-in-success! [state user-id]
  (swap! state assoc :user-id user-id))
