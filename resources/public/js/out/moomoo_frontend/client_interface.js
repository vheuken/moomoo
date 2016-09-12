// Compiled by ClojureScript 1.9.229 {}
goog.provide('moomoo_frontend.client_interface');
goog.require('cljs.core');
moomoo_frontend.client_interface.sign_in_success_BANG_ = (function moomoo_frontend$client_interface$sign_in_success_BANG_(state,user_id,users){
return cljs.core.swap_BANG_.call(null,state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"users","users",-713552705),users], null));
});
moomoo_frontend.client_interface.user_joined_BANG_ = (function moomoo_frontend$client_interface$user_joined_BANG_(state,users){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"users","users",-713552705),users);
});
moomoo_frontend.client_interface.chat_message_received_BANG_ = (function moomoo_frontend$client_interface$chat_message_received_BANG_(state,message){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.conj.call(null,new cljs.core.Keyword(null,"messages","messages",345434482).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state)),message));
});

//# sourceMappingURL=client_interface.js.map?rel=1473645386369