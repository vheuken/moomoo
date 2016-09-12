// Compiled by ClojureScript 1.9.229 {}
goog.provide('moomoo_frontend.socketio_interface');
goog.require('cljs.core');
goog.require('moomoo_frontend.globals');
goog.require('moomoo_frontend.client_interface');
goog.require('moomoo_frontend.uploads');
moomoo_frontend.globals.socket.on("sign-in-success",(function (user_id,users){
var users__$1 = cljs.core.js__GT_clj.call(null,users);
return moomoo_frontend.client_interface.sign_in_success_BANG_.call(null,moomoo_frontend.globals.app_state,user_id,users__$1);
}));
moomoo_frontend.globals.socket.on("user-joined",(function (users){
var users__$1 = cljs.core.js__GT_clj.call(null,users);
return moomoo_frontend.client_interface.user_joined_BANG_.call(null,moomoo_frontend.globals.app_state,users__$1);
}));
moomoo_frontend.globals.socket.on("sign-out",(function (user_id){
return cljs.core.swap_BANG_.call(null,moomoo_frontend.globals.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"users","users",-713552705),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,moomoo_frontend.globals.app_state)),user_id));
}));
moomoo_frontend.globals.socket.on("new-chat-message",(function (user_id,message){
return moomoo_frontend.client_interface.chat_message_received_BANG_.call(null,moomoo_frontend.globals.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user-id","user-id",-206822291),user_id,new cljs.core.Keyword(null,"message","message",-406056002),message], null));
}));
moomoo_frontend.globals.socket.on("start-hashing",(function (client_id,upload_id){
var temp__4657__auto__ = new cljs.core.Keyword(null,"files-to-hash","files-to-hash",-1665183950).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,moomoo_frontend.globals.app_state)).call(null,client_id);
if(cljs.core.truth_(temp__4657__auto__)){
var file = temp__4657__auto__;
cljs.core.swap_BANG_.call(null,moomoo_frontend.globals.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"files-to-hash","files-to-hash",-1665183950),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"files-to-hash","files-to-hash",-1665183950).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,moomoo_frontend.globals.app_state)),client_id));

return md5File(file,((function (file,temp__4657__auto__){
return (function (current_chunk,chunks){
return moomoo_frontend.globals.socket.emit("hash-progress",upload_id,file.name,current_chunk,chunks);
});})(file,temp__4657__auto__))
,((function (file,temp__4657__auto__){
return (function (file_hash){
cljs.core.swap_BANG_.call(null,moomoo_frontend.globals.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"file-hashes","file-hashes",1898248535),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.fromArray([file_hash,file], true, false),new cljs.core.Keyword(null,"file-hashes","file-hashes",1898248535).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,moomoo_frontend.globals.app_state))));

return moomoo_frontend.globals.socket.emit("check-hash",upload_id,file_hash);
});})(file,temp__4657__auto__))
);
} else {
return null;
}
}));
moomoo_frontend.globals.socket.on("hash-progress",(function (upload_id,user_id,filename,current_chunk,chunks){
return cljs.core.swap_BANG_.call(null,moomoo_frontend.globals.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"uploads","uploads",-1652488906),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"uploads","uploads",-1652488906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,moomoo_frontend.globals.app_state)),upload_id,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"hash","hash",-13781596),new cljs.core.Keyword(null,"id","id",-1388402092),upload_id,new cljs.core.Keyword(null,"filename","filename",-1428840783),filename,new cljs.core.Keyword(null,"user","user",1532431356),user_id,new cljs.core.Keyword(null,"current-chunk","current-chunk",1148013267),current_chunk,new cljs.core.Keyword(null,"chunks","chunks",83720431),chunks], null)));
}));
moomoo_frontend.globals.socket.on("upload-progress",(function (upload_id,user_id,bytes_received,file_size,filename){
return cljs.core.swap_BANG_.call(null,moomoo_frontend.globals.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"uploads","uploads",-1652488906),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"uploads","uploads",-1652488906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,moomoo_frontend.globals.app_state)),upload_id,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"upload","upload",-255769218),new cljs.core.Keyword(null,"id","id",-1388402092),upload_id,new cljs.core.Keyword(null,"filename","filename",-1428840783),filename,new cljs.core.Keyword(null,"user","user",1532431356),user_id,new cljs.core.Keyword(null,"bytes-received","bytes-received",-1657410376),bytes_received,new cljs.core.Keyword(null,"file-size","file-size",-1900760755),file_size], null)));
}));
cljs.core.add_watch.call(null,moomoo_frontend.globals.app_state,new cljs.core.Keyword(null,"uploads-watcher","uploads-watcher",1810441617),(function (_,___$1,o,n){
var s = moomoo_frontend.uploads.handle_state_change.call(null,o,n);
if(cljs.core._EQ_.call(null,s,n)){
return null;
} else {
return cljs.core.swap_BANG_.call(null,moomoo_frontend.globals.app_state,cljs.core.merge,s);
}
}));
moomoo_frontend.socketio_interface.upload_file_BANG_ = (function moomoo_frontend$socketio_interface$upload_file_BANG_(file,upload_id){
var new_upload = cljs.core.merge.call(null,moomoo_frontend.uploads.blank_upload,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filename","filename",-1428840783),file.name,new cljs.core.Keyword(null,"id","id",-1388402092),upload_id], null));
var stream = cljs.core.atom.call(null,ss.createStream());
var blob_stream = cljs.core.atom.call(null,ss.createBlobReadStream(file));
var emit = ((function (new_upload,stream,blob_stream){
return (function (p1__35031_SHARP_,p2__35032_SHARP_){
return ss(moomoo_frontend.globals.socket).emit("file-upload",p1__35031_SHARP_,file.name,file.size,upload_id,p2__35032_SHARP_);
});})(new_upload,stream,blob_stream))
;
var upload_watch_fn_BANG_ = ((function (new_upload,stream,blob_stream,emit){
return (function (_,___$1,old_state,new_state){
var action = moomoo_frontend.uploads.get_action.call(null,old_state,new_state,upload_id);
var uploads = new cljs.core.Keyword(null,"uploads","uploads",-1652488906).cljs$core$IFn$_invoke$arity$1(new_state);
var upload = cljs.core.get.call(null,uploads,upload_id);
if((action == null)){
return null;
} else {
if(cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"paused","paused",-1710376127))){
return cljs.core.deref.call(null,blob_stream).unpipe();
} else {
if(cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"resumed","resumed",897761340))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"stopped?","stopped?",396804158).cljs$core$IFn$_invoke$arity$1(upload))){
return null;
} else {
return cljs.core.deref.call(null,blob_stream).pipe(cljs.core.deref.call(null,stream));
}
} else {
if(cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"stopped","stopped",-1490414640))){
return cljs.core.deref.call(null,blob_stream).unpipe();
} else {
if(cljs.core._EQ_.call(null,action,new cljs.core.Keyword(null,"started","started",585705024))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(upload))){
return null;
} else {
return cljs.core.deref.call(null,blob_stream).pipe(cljs.core.deref.call(null,stream));
}
} else {
return null;
}
}
}
}
}
});})(new_upload,stream,blob_stream,emit))
;
cljs.core.deref.call(null,blob_stream).on("end",((function (new_upload,stream,blob_stream,emit,upload_watch_fn_BANG_){
return (function (){
return cljs.core.remove_watch.call(null,moomoo_frontend.globals.app_state,upload_id);
});})(new_upload,stream,blob_stream,emit,upload_watch_fn_BANG_))
);

cljs.core.add_watch.call(null,moomoo_frontend.globals.app_state,upload_id,upload_watch_fn_BANG_);

emit.call(null,cljs.core.deref.call(null,stream),(0));

return cljs.core.swap_BANG_.call(null,moomoo_frontend.globals.app_state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uploads","uploads",-1652488906),cljs.core.merge.call(null,new cljs.core.Keyword(null,"uploads","uploads",-1652488906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,moomoo_frontend.globals.app_state)),cljs.core.PersistentArrayMap.fromArray([upload_id,new_upload], true, false)),new cljs.core.Keyword(null,"client-uploads-order","client-uploads-order",-1845178344),cljs.core.conj.call(null,new cljs.core.Keyword(null,"client-uploads-order","client-uploads-order",-1845178344).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,moomoo_frontend.globals.app_state)),upload_id)], null));
});
moomoo_frontend.globals.socket.on("hash-not-found",(function (upload_id,file_hash){
var file = new cljs.core.Keyword(null,"file-hashes","file-hashes",1898248535).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,moomoo_frontend.globals.app_state)).call(null,file_hash);
return moomoo_frontend.socketio_interface.upload_file_BANG_.call(null,file,upload_id);
}));

//# sourceMappingURL=socketio_interface.js.map?rel=1473645388807