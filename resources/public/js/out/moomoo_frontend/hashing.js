// Compiled by ClojureScript 1.9.229 {}
goog.provide('moomoo_frontend.hashing');
goog.require('cljs.core');
goog.require('moomoo_frontend.globals');
moomoo_frontend.hashing.check_hash = (function moomoo_frontend$hashing$check_hash(file){
cljs.core.println.call(null,"Hashing:",cljs.core.println.call(null,file.name));

var client_id = uuid.v4();
cljs.core.swap_BANG_.call(null,moomoo_frontend.globals.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"files-to-hash","files-to-hash",-1665183950),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([client_id,file], true, false),new cljs.core.Keyword(null,"files-to-check","files-to-check",1330013086).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,moomoo_frontend.globals.app_state))));

return moomoo_frontend.globals.socket.emit("new-hash",client_id);
});

//# sourceMappingURL=hashing.js.map?rel=1473645386269