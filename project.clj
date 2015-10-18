(defproject moomoo "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.145"]
                 [org.omcljs/om "0.9.0"]
                 [com.cognitect/transit-cljs "0.8.225"]]

  :npm {:dependencies [[source-map-support "0.3.2"]
                       [socket.io "1.3.7"]
                       [socket.io-redis "0.1.4"]
                       [redis "1.0.0"]
                       [socket.io-stream "0.8.0"]
                       [uuid "2.0.1"]
                       [express "4.13"]
                       [jade "1.11"]
                       [musicmetadata "2.0"]
                       [base64-arraybuffer "0.1.2"]
                       [redis-lua-loader "1.1.0"]
                       [blueimp-md5 "1.1.1"]
                       [ws "0.8.0"]]}

  :plugins [[lein-cljsbuild "1.1.0"]
            [lein-npm "0.6.1"]
            [com.cemerick/clojurescript.test "0.3.3"]
            [lein-cljfmt "0.3.0"]
            [lein-figwheel "0.3.9"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "moomoo-server"
              :source-paths ["src/server"]
              :figwheel true
              :compiler {
                :output-to  "target/moomoo.js"
                :output-dir "target"
                :target :nodejs
                :optimizations :none
                :source-map true}}

             {:id "moomoo-frontend"
              :source-paths ["src/frontend"]
              :compiler {
                :main "moomoo-frontend.renderer"
                :asset-path "/js/out"
                :output-to  "public/js/moomoo-frontend.js"
                :output-dir "public/js/out"
                :optimizations :none
                :source-map true}}]}

  :clean-targets ["target/" "public/js/"])
