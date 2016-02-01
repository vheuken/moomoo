(ns moomoo-frontend.client-interface-test
  (:require [cljs.test :refer-macros [deftest is testing]]
            [moomoo-frontend.client-interface :as client]))

(deftest sign-in-success
  (let [state (atom {:user-id nil
                     :users {}})
        state-keys (keys @state)
        user-id "user-id-test"
        username "foo"
        socket-id "socket-id"
        users {user-id {:socket socket-id
                        :username username}}]
    (client/sign-in-success! state user-id users)
    (is (= user-id (:user-id @state)))
    (is (= (keys @state) state-keys))
    (is (= users (:users @state)))))

(deftest user-joined
  (let [state (atom {:users {}})
        state-keys (keys @state)
        users {:userid {:foo :bar}}]
    (client/user-joined! state users)
    (is (= (:users @state) users))
    (is (= state-keys (keys @state)))))

(deftest chat-message
  (let [state (atom {:messages []})
        state-keys (keys @state)
        message "ayy lmao"
        user-id "test-user-id"
        chat-message {user-id message}
        user-id-2 "test-user-id-2"
        message-2 "woo"
        chat-message-2 {user-id-2 message-2}]
    (client/chat-message-received! state chat-message)
    (is (= state-keys (keys @state)))
    (is (= [chat-message] (:messages @state)))
    (client/chat-message-received! state chat-message-2)
    (is (= [chat-message chat-message-2] (:messages @state)))))
