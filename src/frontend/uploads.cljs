(ns moomoo-frontend.uploads)

(defonce  blank-upload {:stopped? true
                        :paused?  false
                        :id       nil
                        :filename nil})

(defn start [upload]
  (assoc upload :stopped? false))

(defn stop [upload]
  (assoc upload :stopped? true))

(defn pause [upload]
  (assoc upload :paused? true))

(defn resume [upload]
  (assoc upload :paused? false))

(defn get-action [old-state new-state upload-id]
  "returns the action applied to the given upload-id.
   Can return: :stopped, :started, :paused, :unpaused. :reconnected"
  )
