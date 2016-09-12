// Compiled by ClojureScript 1.9.229 {}
goog.provide('moomoo_frontend.renderer');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('moomoo_frontend.uploads');
goog.require('moomoo_frontend.hashing');
goog.require('dommy.core');
goog.require('om.core');
goog.require('moomoo_frontend.globals');
if(typeof moomoo_frontend.renderer.grey_out_image !== 'undefined'){
} else {
moomoo_frontend.renderer.grey_out_image = "https://media.licdn.com/mpr/mpr/shrink_200_200/p/8/005/082/26a/1ecd9a2.jpg";
}
moomoo_frontend.renderer.sign_in_form = (function moomoo_frontend$renderer$sign_in_form(data,owner){
if(typeof moomoo_frontend.renderer.t_moomoo_frontend$renderer36648 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
moomoo_frontend.renderer.t_moomoo_frontend$renderer36648 = (function (sign_in_form,data,owner,meta36649){
this.sign_in_form = sign_in_form;
this.data = data;
this.owner = owner;
this.meta36649 = meta36649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
moomoo_frontend.renderer.t_moomoo_frontend$renderer36648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36650,meta36649__$1){
var self__ = this;
var _36650__$1 = this;
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36648(self__.sign_in_form,self__.data,self__.owner,meta36649__$1));
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36650){
var self__ = this;
var _36650__$1 = this;
return self__.meta36649;
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36648.prototype.om$core$IRender$ = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36648.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(({"id": "temp-background"}),React.DOM.form(({"id": "username-input", "action": ""}),"Enter Name: ",om.dom.input.call(null,({"id": "username", "type": "text", "autoComplete": "off"})),React.DOM.button(({"onClick": ((function (this$__$1){
return (function (){
soundManager.play("join-sound");

moomoo_frontend.globals.socket.emit("sign-in",moomoo_frontend.globals.room_id,dommy.core.value.call(null,document.getElementById("username")));

return false;
});})(this$__$1))
}),"Join")));
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"sign-in-form","sign-in-form",-263457711,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta36649","meta36649",-1228257503,null)], null);
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36648.cljs$lang$type = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36648.cljs$lang$ctorStr = "moomoo-frontend.renderer/t_moomoo_frontend$renderer36648";

moomoo_frontend.renderer.t_moomoo_frontend$renderer36648.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"moomoo-frontend.renderer/t_moomoo_frontend$renderer36648");
});

moomoo_frontend.renderer.__GT_t_moomoo_frontend$renderer36648 = (function moomoo_frontend$renderer$sign_in_form_$___GT_t_moomoo_frontend$renderer36648(sign_in_form__$1,data__$1,owner__$1,meta36649){
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36648(sign_in_form__$1,data__$1,owner__$1,meta36649));
});

}

return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36648(moomoo_frontend$renderer$sign_in_form,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
moomoo_frontend.renderer.current_track_tags = (function moomoo_frontend$renderer$current_track_tags(data,owner){
if(typeof moomoo_frontend.renderer.t_moomoo_frontend$renderer36703 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
moomoo_frontend.renderer.t_moomoo_frontend$renderer36703 = (function (current_track_tags,data,owner,meta36704){
this.current_track_tags = current_track_tags;
this.data = data;
this.owner = owner;
this.meta36704 = meta36704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
moomoo_frontend.renderer.t_moomoo_frontend$renderer36703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36705,meta36704__$1){
var self__ = this;
var _36705__$1 = this;
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36703(self__.current_track_tags,self__.data,self__.owner,meta36704__$1));
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36705){
var self__ = this;
var _36705__$1 = this;
return self__.meta36704;
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36703.prototype.om$core$IRender$ = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36703.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(({"id": "current-track-tags"}));
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36703.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"current-track-tags","current-track-tags",-587305523,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta36704","meta36704",-1723368937,null)], null);
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36703.cljs$lang$type = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36703.cljs$lang$ctorStr = "moomoo-frontend.renderer/t_moomoo_frontend$renderer36703";

moomoo_frontend.renderer.t_moomoo_frontend$renderer36703.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"moomoo-frontend.renderer/t_moomoo_frontend$renderer36703");
});

moomoo_frontend.renderer.__GT_t_moomoo_frontend$renderer36703 = (function moomoo_frontend$renderer$current_track_tags_$___GT_t_moomoo_frontend$renderer36703(current_track_tags__$1,data__$1,owner__$1,meta36704){
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36703(current_track_tags__$1,data__$1,owner__$1,meta36704));
});

}

return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36703(moomoo_frontend$renderer$current_track_tags,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
moomoo_frontend.renderer.top_bar = (function moomoo_frontend$renderer$top_bar(data,owner){
if(typeof moomoo_frontend.renderer.t_moomoo_frontend$renderer36763 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
moomoo_frontend.renderer.t_moomoo_frontend$renderer36763 = (function (top_bar,data,owner,meta36764){
this.top_bar = top_bar;
this.data = data;
this.owner = owner;
this.meta36764 = meta36764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
moomoo_frontend.renderer.t_moomoo_frontend$renderer36763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36765,meta36764__$1){
var self__ = this;
var _36765__$1 = this;
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36763(self__.top_bar,self__.data,self__.owner,meta36764__$1));
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36765){
var self__ = this;
var _36765__$1 = this;
return self__.meta36764;
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36763.prototype.om$core$IRender$ = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36763.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(({"id": "top-bar", "className": "top-bottom-bars"}),om.core.build.call(null,moomoo_frontend.renderer.current_track_tags,null),React.DOM.button(({"id": "lastfm-button", "className": "top-bar-button"}),"Last.fm"),om.dom.input.call(null,({"id": "file-upload", "type": "file", "onChange": ((function (this$__$1){
return (function (e){
var temp__4655__auto__ = (e.target.files[(0)]);
if(cljs.core.truth_(temp__4655__auto__)){
var file = temp__4655__auto__;
return moomoo_frontend.hashing.check_hash.call(null,file);
} else {
return null;
}
});})(this$__$1))
})),React.DOM.button(({"id": "file-upload-input", "className": "top-bar-button", "onClick": ((function (this$__$1){
return (function (){
return document.getElementById("file-upload").click();
});})(this$__$1))
}),"Add music"));
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36763.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"top-bar","top-bar",-68861864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta36764","meta36764",-824342184,null)], null);
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36763.cljs$lang$type = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36763.cljs$lang$ctorStr = "moomoo-frontend.renderer/t_moomoo_frontend$renderer36763";

moomoo_frontend.renderer.t_moomoo_frontend$renderer36763.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"moomoo-frontend.renderer/t_moomoo_frontend$renderer36763");
});

moomoo_frontend.renderer.__GT_t_moomoo_frontend$renderer36763 = (function moomoo_frontend$renderer$top_bar_$___GT_t_moomoo_frontend$renderer36763(top_bar__$1,data__$1,owner__$1,meta36764){
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36763(top_bar__$1,data__$1,owner__$1,meta36764));
});

}

return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36763(moomoo_frontend$renderer$top_bar,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
moomoo_frontend.renderer.message_view = (function moomoo_frontend$renderer$message_view(data,owner){
if(typeof moomoo_frontend.renderer.t_moomoo_frontend$renderer36783 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
moomoo_frontend.renderer.t_moomoo_frontend$renderer36783 = (function (message_view,data,owner,meta36784){
this.message_view = message_view;
this.data = data;
this.owner = owner;
this.meta36784 = meta36784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
moomoo_frontend.renderer.t_moomoo_frontend$renderer36783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36785,meta36784__$1){
var self__ = this;
var _36785__$1 = this;
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36783(self__.message_view,self__.data,self__.owner,meta36784__$1));
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36785){
var self__ = this;
var _36785__$1 = this;
return self__.meta36784;
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36783.prototype.om$core$IRender$ = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36783.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.core.println.call(null,self__.data);

return React.DOM.div(({"className": "chat-message"}),React.DOM.div(({"className": "chat-message-username"}),cljs.core.get.call(null,new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,moomoo_frontend.globals.app_state)).call(null,new cljs.core.Keyword(null,"user-id","user-id",-206822291).cljs$core$IFn$_invoke$arity$1(self__.data)),"username"),":"),React.DOM.div(({"className": "chat-message-text"}),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(self__.data)));
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36783.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"message-view","message-view",-676965086,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta36784","meta36784",1264361010,null)], null);
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36783.cljs$lang$type = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36783.cljs$lang$ctorStr = "moomoo-frontend.renderer/t_moomoo_frontend$renderer36783";

moomoo_frontend.renderer.t_moomoo_frontend$renderer36783.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"moomoo-frontend.renderer/t_moomoo_frontend$renderer36783");
});

moomoo_frontend.renderer.__GT_t_moomoo_frontend$renderer36783 = (function moomoo_frontend$renderer$message_view_$___GT_t_moomoo_frontend$renderer36783(message_view__$1,data__$1,owner__$1,meta36784){
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36783(message_view__$1,data__$1,owner__$1,meta36784));
});

}

return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36783(moomoo_frontend$renderer$message_view,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
moomoo_frontend.renderer.messages_window = (function moomoo_frontend$renderer$messages_window(data,owner){
if(typeof moomoo_frontend.renderer.t_moomoo_frontend$renderer36819 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDidUpdate}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
moomoo_frontend.renderer.t_moomoo_frontend$renderer36819 = (function (messages_window,data,owner,meta36820){
this.messages_window = messages_window;
this.data = data;
this.owner = owner;
this.meta36820 = meta36820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
moomoo_frontend.renderer.t_moomoo_frontend$renderer36819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36821,meta36820__$1){
var self__ = this;
var _36821__$1 = this;
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36819(self__.messages_window,self__.data,self__.owner,meta36820__$1));
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36821){
var self__ = this;
var _36821__$1 = this;
return self__.meta36820;
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36819.prototype.om$core$IDidUpdate$ = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36819.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return document.getElementById("messages-window").scrollTop = document.getElementById("messages-window").scrollHeight;
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36819.prototype.om$core$IRender$ = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36819.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(({"id": "messages-window"}),om.core.build_all.call(null,moomoo_frontend.renderer.message_view,self__.data));
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36819.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"messages-window","messages-window",-1137766928,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta36820","meta36820",1238579617,null)], null);
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36819.cljs$lang$type = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36819.cljs$lang$ctorStr = "moomoo-frontend.renderer/t_moomoo_frontend$renderer36819";

moomoo_frontend.renderer.t_moomoo_frontend$renderer36819.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"moomoo-frontend.renderer/t_moomoo_frontend$renderer36819");
});

moomoo_frontend.renderer.__GT_t_moomoo_frontend$renderer36819 = (function moomoo_frontend$renderer$messages_window_$___GT_t_moomoo_frontend$renderer36819(messages_window__$1,data__$1,owner__$1,meta36820){
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36819(messages_window__$1,data__$1,owner__$1,meta36820));
});

}

return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36819(moomoo_frontend$renderer$messages_window,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
moomoo_frontend.renderer.hashing_progress_view = (function moomoo_frontend$renderer$hashing_progress_view(data,owner){
if(typeof moomoo_frontend.renderer.t_moomoo_frontend$renderer36841 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
moomoo_frontend.renderer.t_moomoo_frontend$renderer36841 = (function (hashing_progress_view,data,owner,meta36842){
this.hashing_progress_view = hashing_progress_view;
this.data = data;
this.owner = owner;
this.meta36842 = meta36842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
moomoo_frontend.renderer.t_moomoo_frontend$renderer36841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36843,meta36842__$1){
var self__ = this;
var _36843__$1 = this;
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36841(self__.hashing_progress_view,self__.data,self__.owner,meta36842__$1));
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36843){
var self__ = this;
var _36843__$1 = this;
return self__.meta36842;
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36841.prototype.om$core$IRender$ = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36841.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var id = cljs.core.first.call(null,self__.data);
var info = cljs.core.second.call(null,self__.data);
var hashing_completion = (new cljs.core.Keyword(null,"current-chunk","current-chunk",1148013267).cljs$core$IFn$_invoke$arity$1(info) / new cljs.core.Keyword(null,"chunks","chunks",83720431).cljs$core$IFn$_invoke$arity$1(info));
var hashing_percent_completion = ((((1) <= hashing_completion))?(100):((100) * hashing_completion));
return React.DOM.div(({"className": "track-view"}),"HASHING: ",new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(info)," ",hashing_percent_completion,"%");
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36841.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"hashing-progress-view","hashing-progress-view",-1425900948,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta36842","meta36842",-803883445,null)], null);
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36841.cljs$lang$type = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36841.cljs$lang$ctorStr = "moomoo-frontend.renderer/t_moomoo_frontend$renderer36841";

moomoo_frontend.renderer.t_moomoo_frontend$renderer36841.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"moomoo-frontend.renderer/t_moomoo_frontend$renderer36841");
});

moomoo_frontend.renderer.__GT_t_moomoo_frontend$renderer36841 = (function moomoo_frontend$renderer$hashing_progress_view_$___GT_t_moomoo_frontend$renderer36841(hashing_progress_view__$1,data__$1,owner__$1,meta36842){
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36841(hashing_progress_view__$1,data__$1,owner__$1,meta36842));
});

}

return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36841(moomoo_frontend$renderer$hashing_progress_view,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
moomoo_frontend.renderer.upload_progress_view = (function moomoo_frontend$renderer$upload_progress_view(data,owner){
if(typeof moomoo_frontend.renderer.t_moomoo_frontend$renderer36856 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
moomoo_frontend.renderer.t_moomoo_frontend$renderer36856 = (function (upload_progress_view,data,owner,meta36857){
this.upload_progress_view = upload_progress_view;
this.data = data;
this.owner = owner;
this.meta36857 = meta36857;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
moomoo_frontend.renderer.t_moomoo_frontend$renderer36856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36858,meta36857__$1){
var self__ = this;
var _36858__$1 = this;
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36856(self__.upload_progress_view,self__.data,self__.owner,meta36857__$1));
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36858){
var self__ = this;
var _36858__$1 = this;
return self__.meta36857;
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36856.prototype.om$core$IRender$ = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36856.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var id = cljs.core.first.call(null,self__.data);
var info = cljs.core.second.call(null,self__.data);
var upload_completion = (new cljs.core.Keyword(null,"bytes-received","bytes-received",-1657410376).cljs$core$IFn$_invoke$arity$1(info) / new cljs.core.Keyword(null,"file-size","file-size",-1900760755).cljs$core$IFn$_invoke$arity$1(info));
var upload_percent_completion = ((100) * upload_completion);
var buttons = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"user-id","user-id",-206822291).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,moomoo_frontend.globals.app_state)),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(info)))?(function (){var x__25594__auto__ = React.DOM.button(null,"CANCEL");
return cljs.core._conj.call(null,(function (){var x__25594__auto____$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(info))?React.DOM.button(null,"RESUME"):React.DOM.button(null,"PAUSE"));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25594__auto____$1);
})(),x__25594__auto__);
})():"");
return React.DOM.div(({"className": "track-view"}),buttons,"UPLOAD: ",new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(info)," ",upload_percent_completion,"%");
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36856.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"upload-progress-view","upload-progress-view",-1470092585,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta36857","meta36857",-1442437148,null)], null);
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36856.cljs$lang$type = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36856.cljs$lang$ctorStr = "moomoo-frontend.renderer/t_moomoo_frontend$renderer36856";

moomoo_frontend.renderer.t_moomoo_frontend$renderer36856.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"moomoo-frontend.renderer/t_moomoo_frontend$renderer36856");
});

moomoo_frontend.renderer.__GT_t_moomoo_frontend$renderer36856 = (function moomoo_frontend$renderer$upload_progress_view_$___GT_t_moomoo_frontend$renderer36856(upload_progress_view__$1,data__$1,owner__$1,meta36857){
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36856(upload_progress_view__$1,data__$1,owner__$1,meta36857));
});

}

return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36856(moomoo_frontend$renderer$upload_progress_view,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
moomoo_frontend.renderer.upload_view = (function moomoo_frontend$renderer$upload_view(data,owner){
if(typeof moomoo_frontend.renderer.t_moomoo_frontend$renderer36874 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
moomoo_frontend.renderer.t_moomoo_frontend$renderer36874 = (function (upload_view,data,owner,meta36875){
this.upload_view = upload_view;
this.data = data;
this.owner = owner;
this.meta36875 = meta36875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
moomoo_frontend.renderer.t_moomoo_frontend$renderer36874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36876,meta36875__$1){
var self__ = this;
var _36876__$1 = this;
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36874(self__.upload_view,self__.data,self__.owner,meta36875__$1));
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36876){
var self__ = this;
var _36876__$1 = this;
return self__.meta36875;
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36874.prototype.om$core$IRender$ = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36874.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var info = cljs.core.second.call(null,self__.data);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"hash","hash",-13781596),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(info))){
return om.core.build.call(null,moomoo_frontend.renderer.hashing_progress_view,self__.data);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"upload","upload",-255769218),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(info))){
return om.core.build.call(null,moomoo_frontend.renderer.upload_progress_view,self__.data);
} else {
return null;
}
}
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"upload-view","upload-view",1144256102,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta36875","meta36875",222465159,null)], null);
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36874.cljs$lang$type = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36874.cljs$lang$ctorStr = "moomoo-frontend.renderer/t_moomoo_frontend$renderer36874";

moomoo_frontend.renderer.t_moomoo_frontend$renderer36874.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"moomoo-frontend.renderer/t_moomoo_frontend$renderer36874");
});

moomoo_frontend.renderer.__GT_t_moomoo_frontend$renderer36874 = (function moomoo_frontend$renderer$upload_view_$___GT_t_moomoo_frontend$renderer36874(upload_view__$1,data__$1,owner__$1,meta36875){
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36874(upload_view__$1,data__$1,owner__$1,meta36875));
});

}

return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36874(moomoo_frontend$renderer$upload_view,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
moomoo_frontend.renderer.track_queue_view = (function moomoo_frontend$renderer$track_queue_view(data,owner){
if(typeof moomoo_frontend.renderer.t_moomoo_frontend$renderer36887 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
moomoo_frontend.renderer.t_moomoo_frontend$renderer36887 = (function (track_queue_view,data,owner,meta36888){
this.track_queue_view = track_queue_view;
this.data = data;
this.owner = owner;
this.meta36888 = meta36888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
moomoo_frontend.renderer.t_moomoo_frontend$renderer36887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36889,meta36888__$1){
var self__ = this;
var _36889__$1 = this;
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36887(self__.track_queue_view,self__.data,self__.owner,meta36888__$1));
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36889){
var self__ = this;
var _36889__$1 = this;
return self__.meta36888;
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36887.prototype.om$core$IRenderState$ = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36887.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return React.DOM.div(({"id": "track-queue", "style": ({"width": new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(state)})}),React.DOM.div(({"id": "uploads-queue"}),om.core.build_all.call(null,moomoo_frontend.renderer.upload_view,new cljs.core.Keyword(null,"uploads","uploads",-1652488906).cljs$core$IFn$_invoke$arity$1(self__.data))));
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36887.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"track-queue-view","track-queue-view",-866646872,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta36888","meta36888",-1272011857,null)], null);
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36887.cljs$lang$type = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36887.cljs$lang$ctorStr = "moomoo-frontend.renderer/t_moomoo_frontend$renderer36887";

moomoo_frontend.renderer.t_moomoo_frontend$renderer36887.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"moomoo-frontend.renderer/t_moomoo_frontend$renderer36887");
});

moomoo_frontend.renderer.__GT_t_moomoo_frontend$renderer36887 = (function moomoo_frontend$renderer$track_queue_view_$___GT_t_moomoo_frontend$renderer36887(track_queue_view__$1,data__$1,owner__$1,meta36888){
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36887(track_queue_view__$1,data__$1,owner__$1,meta36888));
});

}

return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36887(moomoo_frontend$renderer$track_queue_view,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
moomoo_frontend.renderer.user_view = (function moomoo_frontend$renderer$user_view(data,owner){
if(typeof moomoo_frontend.renderer.t_moomoo_frontend$renderer36895 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
moomoo_frontend.renderer.t_moomoo_frontend$renderer36895 = (function (user_view,data,owner,meta36896){
this.user_view = user_view;
this.data = data;
this.owner = owner;
this.meta36896 = meta36896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
moomoo_frontend.renderer.t_moomoo_frontend$renderer36895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36897,meta36896__$1){
var self__ = this;
var _36897__$1 = this;
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36895(self__.user_view,self__.data,self__.owner,meta36896__$1));
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36897){
var self__ = this;
var _36897__$1 = this;
return self__.meta36896;
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36895.prototype.om$core$IRender$ = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36895.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,self__.data.call(null,"username"));
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36895.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"user-view","user-view",-1941052799,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta36896","meta36896",-776288495,null)], null);
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36895.cljs$lang$type = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36895.cljs$lang$ctorStr = "moomoo-frontend.renderer/t_moomoo_frontend$renderer36895";

moomoo_frontend.renderer.t_moomoo_frontend$renderer36895.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"moomoo-frontend.renderer/t_moomoo_frontend$renderer36895");
});

moomoo_frontend.renderer.__GT_t_moomoo_frontend$renderer36895 = (function moomoo_frontend$renderer$user_view_$___GT_t_moomoo_frontend$renderer36895(user_view__$1,data__$1,owner__$1,meta36896){
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36895(user_view__$1,data__$1,owner__$1,meta36896));
});

}

return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36895(moomoo_frontend$renderer$user_view,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
moomoo_frontend.renderer.users_list_view = (function moomoo_frontend$renderer$users_list_view(data,owner){
if(typeof moomoo_frontend.renderer.t_moomoo_frontend$renderer36911 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
moomoo_frontend.renderer.t_moomoo_frontend$renderer36911 = (function (users_list_view,data,owner,meta36912){
this.users_list_view = users_list_view;
this.data = data;
this.owner = owner;
this.meta36912 = meta36912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
moomoo_frontend.renderer.t_moomoo_frontend$renderer36911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36913,meta36912__$1){
var self__ = this;
var _36913__$1 = this;
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36911(self__.users_list_view,self__.data,self__.owner,meta36912__$1));
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36913){
var self__ = this;
var _36913__$1 = this;
return self__.meta36912;
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36911.prototype.om$core$IRender$ = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36911.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,om.core.build_all.call(null,moomoo_frontend.renderer.user_view,cljs.core.vals.call(null,self__.data)));
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36911.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"users-list-view","users-list-view",360094832,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta36912","meta36912",-676745208,null)], null);
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36911.cljs$lang$type = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36911.cljs$lang$ctorStr = "moomoo-frontend.renderer/t_moomoo_frontend$renderer36911";

moomoo_frontend.renderer.t_moomoo_frontend$renderer36911.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"moomoo-frontend.renderer/t_moomoo_frontend$renderer36911");
});

moomoo_frontend.renderer.__GT_t_moomoo_frontend$renderer36911 = (function moomoo_frontend$renderer$users_list_view_$___GT_t_moomoo_frontend$renderer36911(users_list_view__$1,data__$1,owner__$1,meta36912){
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36911(users_list_view__$1,data__$1,owner__$1,meta36912));
});

}

return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36911(moomoo_frontend$renderer$users_list_view,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
moomoo_frontend.renderer.chat_input = (function moomoo_frontend$renderer$chat_input(data,owner){
if(typeof moomoo_frontend.renderer.t_moomoo_frontend$renderer36926 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IWillUnmount}
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
moomoo_frontend.renderer.t_moomoo_frontend$renderer36926 = (function (chat_input,data,owner,meta36927){
this.chat_input = chat_input;
this.data = data;
this.owner = owner;
this.meta36927 = meta36927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
moomoo_frontend.renderer.t_moomoo_frontend$renderer36926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36928,meta36927__$1){
var self__ = this;
var _36928__$1 = this;
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36926(self__.chat_input,self__.data,self__.owner,meta36927__$1));
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36928){
var self__ = this;
var _36928__$1 = this;
return self__.meta36927;
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36926.prototype.om$core$IDidMount$ = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36926.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"enter-key-handler","enter-key-handler",2046353793),((function (___$1){
return (function (event){
if((cljs.core._EQ_.call(null,(13),event.keyCode)) && (cljs.core.not.call(null,event.shiftKey))){
event.preventDefault();

var message = dommy.core.value.call(null,document.getElementById("chat-input"));
if(cljs.core.empty_QMARK_.call(null,message)){
return null;
} else {
moomoo_frontend.globals.socket.emit("chat-message",message);

return dommy.core.set_value_BANG_.call(null,document.getElementById("chat-input"),"");
}
} else {
return null;
}
});})(___$1))
);

return dommy.core.listen_BANG_.call(null,document.getElementById("chat-input"),new cljs.core.Keyword(null,"keydown","keydown",-629268186),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"enter-key-handler","enter-key-handler",2046353793)));
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36926.prototype.om$core$IWillUnmount$ = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36926.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return dommy.core.unlisten_BANG_.call(null,document.getElementById("chat-input"),new cljs.core.Keyword(null,"keydown","keydown",-629268186),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"enter-key-handler","enter-key-handler",2046353793)));
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36926.prototype.om$core$IRender$ = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36926.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return om.dom.textarea.call(null,({"id": "chat-input"}),null);
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36926.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"chat-input","chat-input",-1375521144,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta36927","meta36927",-1891111962,null)], null);
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36926.cljs$lang$type = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36926.cljs$lang$ctorStr = "moomoo-frontend.renderer/t_moomoo_frontend$renderer36926";

moomoo_frontend.renderer.t_moomoo_frontend$renderer36926.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"moomoo-frontend.renderer/t_moomoo_frontend$renderer36926");
});

moomoo_frontend.renderer.__GT_t_moomoo_frontend$renderer36926 = (function moomoo_frontend$renderer$chat_input_$___GT_t_moomoo_frontend$renderer36926(chat_input__$1,data__$1,owner__$1,meta36927){
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36926(chat_input__$1,data__$1,owner__$1,meta36927));
});

}

return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36926(moomoo_frontend$renderer$chat_input,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
moomoo_frontend.renderer.chat_view = (function moomoo_frontend$renderer$chat_view(data,owner){
if(typeof moomoo_frontend.renderer.t_moomoo_frontend$renderer36941 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
moomoo_frontend.renderer.t_moomoo_frontend$renderer36941 = (function (chat_view,data,owner,meta36942){
this.chat_view = chat_view;
this.data = data;
this.owner = owner;
this.meta36942 = meta36942;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
moomoo_frontend.renderer.t_moomoo_frontend$renderer36941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36943,meta36942__$1){
var self__ = this;
var _36943__$1 = this;
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36941(self__.chat_view,self__.data,self__.owner,meta36942__$1));
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36941.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36943){
var self__ = this;
var _36943__$1 = this;
return self__.meta36942;
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36941.prototype.om$core$IRenderState$ = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36941.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(state);
return React.DOM.div(({"id": "center-left", "style": ({"width": width})}),(function (){var x__25594__auto__ = om.core.build.call(null,moomoo_frontend.renderer.messages_window,new cljs.core.Keyword(null,"messages","messages",345434482).cljs$core$IFn$_invoke$arity$1(self__.data));
return cljs.core._conj.call(null,(function (){var x__25594__auto____$1 = om.core.build.call(null,moomoo_frontend.renderer.chat_input,null);
return cljs.core._conj.call(null,(function (){var x__25594__auto____$2 = om.core.build.call(null,moomoo_frontend.renderer.users_list_view,new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(self__.data));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25594__auto____$2);
})(),x__25594__auto____$1);
})(),x__25594__auto__);
})());
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36941.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"chat-view","chat-view",-1476684403,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta36942","meta36942",-1532911908,null)], null);
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36941.cljs$lang$type = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36941.cljs$lang$ctorStr = "moomoo-frontend.renderer/t_moomoo_frontend$renderer36941";

moomoo_frontend.renderer.t_moomoo_frontend$renderer36941.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"moomoo-frontend.renderer/t_moomoo_frontend$renderer36941");
});

moomoo_frontend.renderer.__GT_t_moomoo_frontend$renderer36941 = (function moomoo_frontend$renderer$chat_view_$___GT_t_moomoo_frontend$renderer36941(chat_view__$1,data__$1,owner__$1,meta36942){
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36941(chat_view__$1,data__$1,owner__$1,meta36942));
});

}

return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36941(moomoo_frontend$renderer$chat_view,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
moomoo_frontend.renderer.center_area = (function moomoo_frontend$renderer$center_area(data,owner){
if(typeof moomoo_frontend.renderer.t_moomoo_frontend$renderer36971 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IWillUnmount}
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IDidMount}
 * @implements {cljs.core.IWithMeta}
*/
moomoo_frontend.renderer.t_moomoo_frontend$renderer36971 = (function (center_area,data,owner,meta36972){
this.center_area = center_area;
this.data = data;
this.owner = owner;
this.meta36972 = meta36972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
moomoo_frontend.renderer.t_moomoo_frontend$renderer36971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36973,meta36972__$1){
var self__ = this;
var _36973__$1 = this;
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36971(self__.center_area,self__.data,self__.owner,meta36972__$1));
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36973){
var self__ = this;
var _36973__$1 = this;
return self__.meta36972;
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36971.prototype.om$core$IDidMount$ = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36971.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346),((function (___$1){
return (function (){
var window_width = window.innerWidth;
var left_width = (((window_width < (850)))?(0.5 * window_width):(0.35 * window_width));
var right_width = (((window_width < (850)))?(0.5 * window_width):(0.65 * window_width));
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chat-width","chat-width",1234432345),[cljs.core.str(left_width),cljs.core.str("px")].join(''),new cljs.core.Keyword(null,"track-queue-width","track-queue-width",872727216),[cljs.core.str(right_width),cljs.core.str("px")].join('')], null));
});})(___$1))
);

om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)).call(null);

return dommy.core.listen_BANG_.call(null,window,new cljs.core.Keyword(null,"resize","resize",297367086),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)));
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36971.prototype.om$core$IWillUnmount$ = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36971.prototype.om$core$IWillUnmount$will_unmount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return dommy.core.unlisten_BANG_.call(null,window,new cljs.core.Keyword(null,"resize","resize",297367086),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"handle-resize","handle-resize",-1179349346)));
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36971.prototype.om$core$IRenderState$ = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36971.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return React.DOM.div(({"id": "center-area"}),(function (){var dimensions = new cljs.core.Keyword(null,"dimensions","dimensions",-254818097).cljs$core$IFn$_invoke$arity$1(state);
var x__25594__auto__ = om.core.build.call(null,moomoo_frontend.renderer.chat_view,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"chat-width","chat-width",1234432345).cljs$core$IFn$_invoke$arity$1(dimensions)], null)], null));
return cljs.core._conj.call(null,(function (){var x__25594__auto____$1 = om.core.build.call(null,moomoo_frontend.renderer.track_queue_view,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"track-queue-width","track-queue-width",872727216).cljs$core$IFn$_invoke$arity$1(dimensions)], null)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__25594__auto____$1);
})(),x__25594__auto__);
})());
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36971.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"center-area","center-area",1511949908,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta36972","meta36972",-314950625,null)], null);
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer36971.cljs$lang$type = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer36971.cljs$lang$ctorStr = "moomoo-frontend.renderer/t_moomoo_frontend$renderer36971";

moomoo_frontend.renderer.t_moomoo_frontend$renderer36971.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"moomoo-frontend.renderer/t_moomoo_frontend$renderer36971");
});

moomoo_frontend.renderer.__GT_t_moomoo_frontend$renderer36971 = (function moomoo_frontend$renderer$center_area_$___GT_t_moomoo_frontend$renderer36971(center_area__$1,data__$1,owner__$1,meta36972){
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36971(center_area__$1,data__$1,owner__$1,meta36972));
});

}

return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer36971(moomoo_frontend$renderer$center_area,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
moomoo_frontend.renderer.volume_control = (function moomoo_frontend$renderer$volume_control(data,owner){
if(typeof moomoo_frontend.renderer.t_moomoo_frontend$renderer37006 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
moomoo_frontend.renderer.t_moomoo_frontend$renderer37006 = (function (volume_control,data,owner,meta37007){
this.volume_control = volume_control;
this.data = data;
this.owner = owner;
this.meta37007 = meta37007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
moomoo_frontend.renderer.t_moomoo_frontend$renderer37006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37008,meta37007__$1){
var self__ = this;
var _37008__$1 = this;
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer37006(self__.volume_control,self__.data,self__.owner,meta37007__$1));
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer37006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37008){
var self__ = this;
var _37008__$1 = this;
return self__.meta37007;
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer37006.prototype.om$core$IRender$ = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer37006.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(null);
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer37006.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"volume-control","volume-control",-702919705,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta37007","meta37007",-587836783,null)], null);
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer37006.cljs$lang$type = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer37006.cljs$lang$ctorStr = "moomoo-frontend.renderer/t_moomoo_frontend$renderer37006";

moomoo_frontend.renderer.t_moomoo_frontend$renderer37006.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"moomoo-frontend.renderer/t_moomoo_frontend$renderer37006");
});

moomoo_frontend.renderer.__GT_t_moomoo_frontend$renderer37006 = (function moomoo_frontend$renderer$volume_control_$___GT_t_moomoo_frontend$renderer37006(volume_control__$1,data__$1,owner__$1,meta37007){
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer37006(volume_control__$1,data__$1,owner__$1,meta37007));
});

}

return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer37006(moomoo_frontend$renderer$volume_control,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
moomoo_frontend.renderer.bottom_bar = (function moomoo_frontend$renderer$bottom_bar(data,owner){
if(typeof moomoo_frontend.renderer.t_moomoo_frontend$renderer37012 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
moomoo_frontend.renderer.t_moomoo_frontend$renderer37012 = (function (bottom_bar,data,owner,meta37013){
this.bottom_bar = bottom_bar;
this.data = data;
this.owner = owner;
this.meta37013 = meta37013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
moomoo_frontend.renderer.t_moomoo_frontend$renderer37012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37014,meta37013__$1){
var self__ = this;
var _37014__$1 = this;
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer37012(self__.bottom_bar,self__.data,self__.owner,meta37013__$1));
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer37012.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37014){
var self__ = this;
var _37014__$1 = this;
return self__.meta37013;
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer37012.prototype.om$core$IRender$ = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer37012.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return React.DOM.div(({"id": "bottom-bar", "className": "top-bottom-bars"}),om.core.build.call(null,moomoo_frontend.renderer.volume_control,new cljs.core.Keyword(null,"volume","volume",1900330799).cljs$core$IFn$_invoke$arity$1(self__.data)));
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer37012.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"bottom-bar","bottom-bar",190057897,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta37013","meta37013",-277771793,null)], null);
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer37012.cljs$lang$type = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer37012.cljs$lang$ctorStr = "moomoo-frontend.renderer/t_moomoo_frontend$renderer37012";

moomoo_frontend.renderer.t_moomoo_frontend$renderer37012.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"moomoo-frontend.renderer/t_moomoo_frontend$renderer37012");
});

moomoo_frontend.renderer.__GT_t_moomoo_frontend$renderer37012 = (function moomoo_frontend$renderer$bottom_bar_$___GT_t_moomoo_frontend$renderer37012(bottom_bar__$1,data__$1,owner__$1,meta37013){
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer37012(bottom_bar__$1,data__$1,owner__$1,meta37013));
});

}

return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer37012(moomoo_frontend$renderer$bottom_bar,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
moomoo_frontend.renderer.moomoo = (function moomoo_frontend$renderer$moomoo(data,owner){
if(typeof moomoo_frontend.renderer.t_moomoo_frontend$renderer37018 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
moomoo_frontend.renderer.t_moomoo_frontend$renderer37018 = (function (moomoo,data,owner,meta37019){
this.moomoo = moomoo;
this.data = data;
this.owner = owner;
this.meta37019 = meta37019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
moomoo_frontend.renderer.t_moomoo_frontend$renderer37018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37020,meta37019__$1){
var self__ = this;
var _37020__$1 = this;
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer37018(self__.moomoo,self__.data,self__.owner,meta37019__$1));
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer37018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37020){
var self__ = this;
var _37020__$1 = this;
return self__.meta37019;
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer37018.prototype.om$core$IRender$ = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer37018.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((new cljs.core.Keyword(null,"user-id","user-id",-206822291).cljs$core$IFn$_invoke$arity$1(self__.data) == null)){
return om.core.build.call(null,moomoo_frontend.renderer.sign_in_form,null);
} else {
return React.DOM.div(({"id": "app"}),om.core.build.call(null,moomoo_frontend.renderer.top_bar,self__.data),om.core.build.call(null,moomoo_frontend.renderer.center_area,self__.data),om.core.build.call(null,moomoo_frontend.renderer.bottom_bar,self__.data));
}
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer37018.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"moomoo","moomoo",1761526463,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta37019","meta37019",-513122008,null)], null);
});

moomoo_frontend.renderer.t_moomoo_frontend$renderer37018.cljs$lang$type = true;

moomoo_frontend.renderer.t_moomoo_frontend$renderer37018.cljs$lang$ctorStr = "moomoo-frontend.renderer/t_moomoo_frontend$renderer37018";

moomoo_frontend.renderer.t_moomoo_frontend$renderer37018.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"moomoo-frontend.renderer/t_moomoo_frontend$renderer37018");
});

moomoo_frontend.renderer.__GT_t_moomoo_frontend$renderer37018 = (function moomoo_frontend$renderer$moomoo_$___GT_t_moomoo_frontend$renderer37018(moomoo__$1,data__$1,owner__$1,meta37019){
return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer37018(moomoo__$1,data__$1,owner__$1,meta37019));
});

}

return (new moomoo_frontend.renderer.t_moomoo_frontend$renderer37018(moomoo_frontend$renderer$moomoo,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,moomoo_frontend.renderer.moomoo,moomoo_frontend.globals.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("moomoo")], null));

//# sourceMappingURL=renderer.js.map?rel=1473645389372