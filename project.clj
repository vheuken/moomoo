(defproject moomoo "0.1.0-SNAPSHOT"
  :description "Listen to music with friends."
  :url "https://github.com/vheuken/moomoo"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.494"]
                 [org.clojure/core.async "0.3.442"]
                 [reagent "0.6.1"]
                 [ring/ring "1.5.0"]
                 [ring/ring-defaults "0.2.3"]
                 [compojure "1.5.2"]
                 [selmer "1.10.6"]
                 [com.taoensso/encore "2.90.1"]
                 [com.taoensso/carmine "2.15.1"]
                 [com.taoensso/sente "1.11.0"]
                 [http-kit "2.2.0"]
                 [com.stuartsierra/component "0.3.2"]]

  :plugins [[lein-cljsbuild "1.1.5"]
            [lein-figwheel "0.5.9"]
            [lein-doo "0.1.7"]]

  :source-paths ["src"]

  :figwheel {:nrepl-port 7888
             :css-dirs ["resources/public/css"]}

  :cljsbuild {
    :builds [{:id "frontend-dev"
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

              {:id "frontend-release"
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
