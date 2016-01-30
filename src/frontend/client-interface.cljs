(ns moomoo-frontend.client-interface)

(defn sign-in-success! [state user-id users]
  (swap! state merge {:user-id user-id
                      :users   users}))

