// Compiled by ClojureScript 1.9.229 {}
goog.provide('moomoo_frontend.globals');
goog.require('cljs.core');
if(typeof moomoo_frontend.globals.socket !== 'undefined'){
} else {
moomoo_frontend.globals.socket = io();
}
if(typeof moomoo_frontend.globals.room_id !== 'undefined'){
} else {
moomoo_frontend.globals.room_id = document.getElementById("roomid").getAttribute("data");
}
if(typeof moomoo_frontend.globals.default_upload_slots !== 'undefined'){
} else {
moomoo_frontend.globals.default_upload_slots = Number(document.getElementById("default-upload-slots").getAttribute("data"));
}
if(typeof moomoo_frontend.globals.app_state !== 'undefined'){
} else {
moomoo_frontend.globals.app_state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"upload-slots","upload-slots",89256040),new cljs.core.Keyword(null,"room-uploads-order","room-uploads-order",-191833304),new cljs.core.Keyword(null,"tracks","tracks",-326768501),new cljs.core.Keyword(null,"user-id","user-id",-206822291),new cljs.core.Keyword(null,"track-order","track-order",483808463),new cljs.core.Keyword(null,"volume","volume",1900330799),new cljs.core.Keyword(null,"messages","messages",345434482),new cljs.core.Keyword(null,"current-sound-id","current-sound-id",1132564978),new cljs.core.Keyword(null,"files-to-hash","files-to-hash",-1665183950),new cljs.core.Keyword(null,"current-track-id","current-track-id",-1837196493),new cljs.core.Keyword(null,"uploads","uploads",-1652488906),new cljs.core.Keyword(null,"current-sound-position","current-sound-position",-1067018601),new cljs.core.Keyword(null,"client-uploads-order","client-uploads-order",-1845178344),new cljs.core.Keyword(null,"users","users",-713552705)],[(4),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.PersistentVector.EMPTY,(100),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,(0),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY]));
}

//# sourceMappingURL=globals.js.map?rel=1473645386225