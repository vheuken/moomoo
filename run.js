try {
    require("source-map-support").install();
} catch(err) {
}
require("./target/goog/bootstrap/nodejs.js");
require("./target/moomoo.js");
goog.require("moomoo.core");
goog.require("cljs.nodejscli");
