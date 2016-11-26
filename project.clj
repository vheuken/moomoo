(defproject moomoo "0.1.0-SNAPSHOT"
  :description "Listen to music with friends."
  :url "https://github.com/vheuken/moomoo"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.229"]
                 [org.clojure/core.async "0.2.385"]
                 [org.omcljs/om "0.9.0"]
                 [com.cognitect/transit-cljs "0.8.225"]
                 [com.cemerick/piggieback "0.2.1"]
                 [org.clojure/tools.nrepl "0.2.12"]
                 [prismatic/dommy "1.1.0"]
                 [ring/ring "1.5.0"]
                 [ring/ring-defaults "0.2.1"]
                 [compojure "1.5.1"]
                 [selmer "1.0.7"]
                 [com.taoensso/encore "2.87.0"]
                 [com.taoensso/carmine "2.14.0"]
                 [com.taoensso/sente "1.11.0"]
                 [http-kit "2.2.0"]]

  :main ^:skip-aot moomoo.handler

  :plugins [[lein-cljsbuild "1.1.4"]
            [lein-figwheel "0.5.7"]
            [cider/cider-nrepl "0.13.0"]
            [lein-doo "0.1.7"]]

  :source-paths ["src"  "src/moomoo" "test/server"]

  ;:ring {:handler moomoo.handler/app}

  :figwheel {:nrepl-port 7888
             :css-dirs ["resources/public/css"]}

  :cljsbuild {
    :builds [{:id "moomoo-frontend-dev"
              :source-paths ["src/frontend" "src-dev/frontend"]
              :figwheel true
              :compiler {
                :main "moomoo-frontend.core"
                :asset-path "/js/out"
                :output-to  "resources/public/js/moomoo-frontend.js"
                :output-dir "resources/public/js/out"
                :optimizations :none
                :parallel-build true
                :source-map true}}

              {:id "moomoo-frontend-release"
               :source-paths ["src/frontend"]
               :compiler {
                 :asset-path "/js/out"
                 :output-to  "resources/public/js/moomoo-frontend.js"
                 :output-dir "resources/public/js/out-release"
                 :parallel-build true
                 :optimizations :simple}}

              {:id "test-frontend"
               :source-paths ["src/frontend" "test/frontend"]
               :compiler {:output-to "resources/public/js/testable.js"
                          :main moomoo-frontend.runner
                          :target :nodejs
                          :optimizations :none}}]}

  :clean-targets ["target/"])
