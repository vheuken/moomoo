// Compiled by ClojureScript 1.9.229 {}
goog.provide('moomoo_frontend.uploads');
goog.require('cljs.core');
goog.require('clojure.set');
if(typeof moomoo_frontend.uploads.blank_upload !== 'undefined'){
} else {
moomoo_frontend.uploads.blank_upload = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stopped?","stopped?",396804158),true,new cljs.core.Keyword(null,"paused?","paused?",-135058553),false,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"filename","filename",-1428840783),null,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"upload","upload",-255769218)], null);
}
moomoo_frontend.uploads.start = (function moomoo_frontend$uploads$start(upload){
return cljs.core.assoc.call(null,upload,new cljs.core.Keyword(null,"stopped?","stopped?",396804158),false);
});
moomoo_frontend.uploads.stop = (function moomoo_frontend$uploads$stop(upload){
return cljs.core.assoc.call(null,upload,new cljs.core.Keyword(null,"stopped?","stopped?",396804158),true);
});
moomoo_frontend.uploads.pause = (function moomoo_frontend$uploads$pause(upload){
return cljs.core.assoc.call(null,upload,new cljs.core.Keyword(null,"paused?","paused?",-135058553),true);
});
moomoo_frontend.uploads.resume = (function moomoo_frontend$uploads$resume(upload){
return cljs.core.assoc.call(null,upload,new cljs.core.Keyword(null,"paused?","paused?",-135058553),false);
});
moomoo_frontend.uploads.active_QMARK_ = (function moomoo_frontend$uploads$active_QMARK_(upload){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"stopped?","stopped?",396804158).cljs$core$IFn$_invoke$arity$1(upload))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(upload)));
});
moomoo_frontend.uploads.active_uploads = (function moomoo_frontend$uploads$active_uploads(uploads_order,uploads){
return cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__26455_SHARP_){
return cljs.core.not.call(null,moomoo_frontend.uploads.active_QMARK_.call(null,uploads.call(null,p1__26455_SHARP_)));
}),uploads_order));
});
moomoo_frontend.uploads.inactive_uploads = (function moomoo_frontend$uploads$inactive_uploads(uploads_order,uploads){
return cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__26461_SHARP_){
return moomoo_frontend.uploads.active_QMARK_.call(null,uploads.call(null,p1__26461_SHARP_));
}),uploads_order));
});
moomoo_frontend.uploads.get_action = (function moomoo_frontend$uploads$get_action(old_state,new_state,upload_id){

var old_uploads = new cljs.core.Keyword(null,"uploads","uploads",-1652488906).cljs$core$IFn$_invoke$arity$1(old_state);
var new_uploads = new cljs.core.Keyword(null,"uploads","uploads",-1652488906).cljs$core$IFn$_invoke$arity$1(new_state);
var old_upload = old_uploads.call(null,upload_id);
var new_upload = new_uploads.call(null,upload_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hash","hash",-13781596),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(old_upload))){
return null;
} else {
if(cljs.core.truth_((function (){var and__24748__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"stopped?","stopped?",396804158).cljs$core$IFn$_invoke$arity$1(new_upload));
if(and__24748__auto__){
return new cljs.core.Keyword(null,"stopped?","stopped?",396804158).cljs$core$IFn$_invoke$arity$1(old_upload);
} else {
return and__24748__auto__;
}
})())){
return new cljs.core.Keyword(null,"started","started",585705024);
} else {
if(cljs.core.truth_((function (){var and__24748__auto__ = new cljs.core.Keyword(null,"stopped?","stopped?",396804158).cljs$core$IFn$_invoke$arity$1(new_upload);
if(cljs.core.truth_(and__24748__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"stopped?","stopped?",396804158).cljs$core$IFn$_invoke$arity$1(old_upload));
} else {
return and__24748__auto__;
}
})())){
return new cljs.core.Keyword(null,"stopped","stopped",-1490414640);
} else {
if(cljs.core.truth_((function (){var and__24748__auto__ = new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(new_upload);
if(cljs.core.truth_(and__24748__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(old_upload));
} else {
return and__24748__auto__;
}
})())){
return new cljs.core.Keyword(null,"paused","paused",-1710376127);
} else {
if(cljs.core.truth_((function (){var and__24748__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(new_upload));
if(and__24748__auto__){
return new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(old_upload);
} else {
return and__24748__auto__;
}
})())){
return new cljs.core.Keyword(null,"resumed","resumed",897761340);
} else {
return null;
}
}
}
}
}
});
moomoo_frontend.uploads.handle_state_change = (function moomoo_frontend$uploads$handle_state_change(old_state,new_state){

var uploads = new cljs.core.Keyword(null,"uploads","uploads",-1652488906).cljs$core$IFn$_invoke$arity$1(new_state);
var room_uploads_order = new cljs.core.Keyword(null,"client-uploads-order","client-uploads-order",-1845178344).cljs$core$IFn$_invoke$arity$1(new_state);
var upload_slots = new cljs.core.Keyword(null,"upload-slots","upload-slots",89256040).cljs$core$IFn$_invoke$arity$1(new_state);
var active_uploads = moomoo_frontend.uploads.active_uploads.call(null,room_uploads_order,uploads);
var inactive_uploads = moomoo_frontend.uploads.inactive_uploads.call(null,room_uploads_order,uploads);
var unpaused_inactive_uploads = cljs.core.vec.call(null,cljs.core.remove.call(null,((function (uploads,room_uploads_order,upload_slots,active_uploads,inactive_uploads){
return (function (p1__26488_SHARP_){
return new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(uploads.call(null,p1__26488_SHARP_));
});})(uploads,room_uploads_order,upload_slots,active_uploads,inactive_uploads))
,inactive_uploads));
var new_upload_ids = clojure.set.difference.call(null,cljs.core.set.call(null,new cljs.core.Keyword(null,"client-uploads-order","client-uploads-order",-1845178344).cljs$core$IFn$_invoke$arity$1(new_state)),cljs.core.set.call(null,new cljs.core.Keyword(null,"client-uploads-order","client-uploads-order",-1845178344).cljs$core$IFn$_invoke$arity$1(old_state)));
var removed_upload_ids = clojure.set.difference.call(null,cljs.core.set.call(null,new cljs.core.Keyword(null,"client-uploads-order","client-uploads-order",-1845178344).cljs$core$IFn$_invoke$arity$1(old_state)),cljs.core.set.call(null,new cljs.core.Keyword(null,"client-uploads-order","client-uploads-order",-1845178344).cljs$core$IFn$_invoke$arity$1(new_state)));
if((!(cljs.core.empty_QMARK_.call(null,new_upload_ids))) && ((cljs.core.count.call(null,room_uploads_order) <= upload_slots))){
return cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"uploads","uploads",-1652488906),cljs.core.assoc.call(null,uploads,cljs.core.first.call(null,new_upload_ids),moomoo_frontend.uploads.start.call(null,uploads.call(null,cljs.core.first.call(null,new_upload_ids)))));
} else {
if(((!(cljs.core.empty_QMARK_.call(null,removed_upload_ids))) && (!(cljs.core.empty_QMARK_.call(null,unpaused_inactive_uploads)))) && ((cljs.core.count.call(null,active_uploads) < upload_slots))){
return cljs.core.assoc.call(null,new_state,new cljs.core.Keyword(null,"uploads","uploads",-1652488906),cljs.core.assoc.call(null,uploads,cljs.core.first.call(null,unpaused_inactive_uploads),moomoo_frontend.uploads.start.call(null,uploads.call(null,cljs.core.first.call(null,unpaused_inactive_uploads)))));
} else {
return new_state;

}
}
});

//# sourceMappingURL=uploads.js.map?rel=1473645386413