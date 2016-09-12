// Compiled by ClojureScript 1.9.229 {}
goog.provide('moomoo_frontend.player');
goog.require('cljs.core');
goog.require('moomoo_frontend.globals');
moomoo_frontend.player.while_playing = (function moomoo_frontend$player$while_playing(){
return null;
});
moomoo_frontend.player.duration = (function moomoo_frontend$player$duration(){
var temp__4655__auto__ = soundManager.getSoundById(new cljs.core.Keyword(null,"current-sound-id","current-sound-id",1132564978).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,moomoo_frontend.globals.app_state)));
if(cljs.core.truth_(temp__4655__auto__)){
var current_sound = temp__4655__auto__;
return current_sound.duration;
} else {
return (0);
}
});
moomoo_frontend.player.load_track_BANG_ = (function moomoo_frontend$player$load_track_BANG_(sound_url,sound_id,on_load_callback){
return soundManager.createSound(({"id": sound_id, "url": sound_url, "autoLoad": true, "onload": on_load_callback}));
});
moomoo_frontend.player.play_track_BANG_ = (function moomoo_frontend$player$play_track_BANG_(sound_id,position,on_finish_callback){
cljs.core.swap_BANG_.call(null,moomoo_frontend.globals.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"current-sound-id","current-sound-id",1132564978),sound_id);

return soundManager.play(sound_id,({"whileplaying": moomoo_frontend.player.while_playing, "volume": new cljs.core.Keyword(null,"volume","volume",1900330799).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,moomoo_frontend.globals.app_state)), "from": (((moomoo_frontend.player.duration.call(null) > position))?position:moomoo_frontend.player.duration.call(null))}));
});

//# sourceMappingURL=player.js.map?rel=1473645388767