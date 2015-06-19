try {
    require("source-map-support").install();
} catch(err) {
}
require("./out/goog/bootstrap/nodejs.js");
require("./out/moomoo.js");
goog.require("moomoo.core");
goog.require("cljs.nodejscli");
