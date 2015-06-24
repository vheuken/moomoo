(defproject moomoo "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.7.0-RC1"]
                 [org.clojure/clojurescript "0.0-3308"]
                 [com.cemerick/clojurescript.test "0.3.3"]]

  :node-dependencies [[source-map-support "0.2.8"]
                      [socket.io "1.3.5"]
                      [redis "0.12.1"]
                      [socket.io-stream "0.8.0"]
                      [uuid "2.0.1"]
                      [id3js "1.1.3"]
                      [express "4.13"]]

  :plugins [[lein-cljsbuild "1.0.4"]
            [lein-npm "0.4.0"]
            [com.cemerick/clojurescript.test "0.3.3"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "moomoo-server"
              :source-paths ["src/server"]
              :compiler {
                :output-to "target/moomoo.js"
                :output-dir "target"
                :target :nodejs
                :optimizations :none
                :source-map true}}
             {:id "moomoo-server-test"
              :source-paths ["src/server" "test/server"]
              :notify-command ["node" :cljs.test/node-runner
                               "target/moomoo-test.js"]
              :compiler {
                :output-to "target/moomoo-test.js"
                :output-dir "target/test"
                :target :nodejs
                :optimizations :simple
                :hashbang false}}
             {:id "moomoo-frontend"
              :source-paths ["src/frontend"]
              :compiler {
                :output-to "public/js/moomoo-frontend.js"
                :optimizations :simple}}]
    :test-commands {"moomoo" ["node" :node-runner
                              "target/moomoo-test.js"]}})
