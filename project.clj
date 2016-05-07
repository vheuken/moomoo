(defproject moomoo "0.1.0-SNAPSHOT"
  :description "Listen to music with friends."
  :url "https://github.com/vheuken/moomoo"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.8.34"]
                 [org.omcljs/om "0.9.0"]
                 [com.cognitect/transit-cljs "0.8.225"]
                 [com.cemerick/piggieback "0.2.1"]
                 [org.clojure/tools.nrepl "0.2.12"]
                 [prismatic/dommy "1.1.0"]]

  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

  :npm {:dependencies [[source-map-support "0.3.3"]
                       [socket.io "1.4.5"]
                       [socket.io-redis "1.0.0"]
                       [socket.io-client "1.4.5"]
                       [redis "2.4.2"]
                       [hiredis "0.4.1"]
                       [socket.io-stream "0.9.0"]
                       [uuid "2.0.1"]
                       [express "4.13.3"]
                       [jade "1.11"]
                       [musicmetadata "2.0"]
                       [base64-arraybuffer "0.1.2"]
                       [redis-lua-loader "1.1.0"]
                       [redis-lock "0.1"]
                       [mmmagic "0.4.1"]
                       [toml "2.3.0"]
                       [request "2.67.0"]
                       [watchr "2.4.13"]
                       [xml2js "0.4.15"]
                       [ws "0.8.0"]]}

  :plugins [[lein-cljsbuild "1.1.3"]
            [lein-npm "0.6.2"]
            [lein-figwheel "0.5.0-6"]
            [cider/cider-nrepl "0.9.1"]
            [lein-doo "0.1.6"]]

  :source-paths ["src/server" "test/server"]

  :figwheel {:nrepl-port 7888
             :build-ids []
             :css-dirs ["public/css"]}

  :cljsbuild {
    :builds [{:id "moomoo-frontend-dev"
              :source-paths ["src/frontend" "src-dev/frontend"]
              :figwheel true
              :compiler {
                :main "moomoo-frontend.core"
                :asset-path "/js/out"
                :output-to  "public/js/moomoo-frontend.js"
                :output-dir "public/js/out"
                :optimizations :none
                :parallel-build true
                :source-map true}}

              {:id "moomoo-frontend-release"
               :source-paths ["src/frontend"]
               :compiler {
                 :asset-path "/js/out"
                 :output-to  "public/js/moomoo-frontend.js"
                 :output-dir "public/js/out-release"
                 :parallel-build true
                 :optimizations :simple}}

             {:id "moomoo-server"
              :source-paths ["src/server"]
              :compiler {
                :main "moomoo.core"
                :output-to  "target/moomoo.js"
                :output-dir "target"
                :target :nodejs
                :parallel-build true
                :optimizations :none}}

              {:id "test-server"
               :source-paths ["src/server" "test/server"]
               :compiler {:output-to "target/testable.js"
                          :main moomoo.runner
                          :target :nodejs
                          :optimizations :none}}

              {:id "test-frontend"
               :source-paths ["src/frontend" "test/frontend"]
               :compiler {:output-to "public/js/testable.js"
                          :main moomoo-frontend.runner
                          :target :nodejs
                          :optimizations :none}}]}

  :clean-targets ["target/" "public/js/"])
