(defproject moomoo "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-3196"]
                 [com.cemerick/clojurescript.test "0.3.3"]]

  :node-dependencies [[source-map-support "0.2.8"]
                      [socket.io "1.3.5"]
                      [redis "0.12.1"]]

  :plugins [[lein-cljsbuild "1.0.4"]
            [lein-npm "0.4.0"]
            [com.cemerick/clojurescript.test "0.3.3"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "moomoo"
              :source-paths ["src"]
              :compiler {
                :output-to "out/moomoo.js"
                :output-dir "out"
                :target :nodejs
                :optimizations :none
                :source-map true}}
             {:id "moomoo-test"
              :source-paths ["src" "test"]
              :notify-command ["node" :cljs.test/node-runner
                               "out/moomoo-test.js"]
              :compiler {
                :output-to "out/moomoo-test.js"
                :output-dir "out/test"
                :target :nodejs
                :optimizations :simple
                :hashbang false}}]
    :test-commands {"moomoo" ["node" :node-runner
                              "out/moomoo-test.js"]}})
