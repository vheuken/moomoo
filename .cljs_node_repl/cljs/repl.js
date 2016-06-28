// Compiled by ClojureScript 1.9.76 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__23141){
var map__23166 = p__23141;
var map__23166__$1 = ((((!((map__23166 == null)))?((((map__23166.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23166.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23166):map__23166);
var m = map__23166__$1;
var n = cljs.core.get.call(null,map__23166__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__23166__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__6369__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6369__auto__)){
var ns = temp__6369__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23168_23190 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23169_23191 = null;
var count__23170_23192 = (0);
var i__23171_23193 = (0);
while(true){
if((i__23171_23193 < count__23170_23192)){
var f_23194 = cljs.core._nth.call(null,chunk__23169_23191,i__23171_23193);
cljs.core.println.call(null,"  ",f_23194);

var G__23195 = seq__23168_23190;
var G__23196 = chunk__23169_23191;
var G__23197 = count__23170_23192;
var G__23198 = (i__23171_23193 + (1));
seq__23168_23190 = G__23195;
chunk__23169_23191 = G__23196;
count__23170_23192 = G__23197;
i__23171_23193 = G__23198;
continue;
} else {
var temp__6369__auto___23199 = cljs.core.seq.call(null,seq__23168_23190);
if(temp__6369__auto___23199){
var seq__23168_23200__$1 = temp__6369__auto___23199;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23168_23200__$1)){
var c__19060__auto___23201 = cljs.core.chunk_first.call(null,seq__23168_23200__$1);
var G__23202 = cljs.core.chunk_rest.call(null,seq__23168_23200__$1);
var G__23203 = c__19060__auto___23201;
var G__23204 = cljs.core.count.call(null,c__19060__auto___23201);
var G__23205 = (0);
seq__23168_23190 = G__23202;
chunk__23169_23191 = G__23203;
count__23170_23192 = G__23204;
i__23171_23193 = G__23205;
continue;
} else {
var f_23206 = cljs.core.first.call(null,seq__23168_23200__$1);
cljs.core.println.call(null,"  ",f_23206);

var G__23207 = cljs.core.next.call(null,seq__23168_23200__$1);
var G__23208 = null;
var G__23209 = (0);
var G__23210 = (0);
seq__23168_23190 = G__23207;
chunk__23169_23191 = G__23208;
count__23170_23192 = G__23209;
i__23171_23193 = G__23210;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23211 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18157__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18157__auto__)){
return or__18157__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23211);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23211)))?cljs.core.second.call(null,arglists_23211):arglists_23211));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23172_23212 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23173_23213 = null;
var count__23174_23214 = (0);
var i__23175_23215 = (0);
while(true){
if((i__23175_23215 < count__23174_23214)){
var vec__23176_23216 = cljs.core._nth.call(null,chunk__23173_23213,i__23175_23215);
var name_23217 = cljs.core.nth.call(null,vec__23176_23216,(0),null);
var map__23179_23218 = cljs.core.nth.call(null,vec__23176_23216,(1),null);
var map__23179_23219__$1 = ((((!((map__23179_23218 == null)))?((((map__23179_23218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23179_23218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23179_23218):map__23179_23218);
var doc_23220 = cljs.core.get.call(null,map__23179_23219__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23221 = cljs.core.get.call(null,map__23179_23219__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_23217);

cljs.core.println.call(null," ",arglists_23221);

if(cljs.core.truth_(doc_23220)){
cljs.core.println.call(null," ",doc_23220);
} else {
}

var G__23222 = seq__23172_23212;
var G__23223 = chunk__23173_23213;
var G__23224 = count__23174_23214;
var G__23225 = (i__23175_23215 + (1));
seq__23172_23212 = G__23222;
chunk__23173_23213 = G__23223;
count__23174_23214 = G__23224;
i__23175_23215 = G__23225;
continue;
} else {
var temp__6369__auto___23226 = cljs.core.seq.call(null,seq__23172_23212);
if(temp__6369__auto___23226){
var seq__23172_23227__$1 = temp__6369__auto___23226;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23172_23227__$1)){
var c__19060__auto___23228 = cljs.core.chunk_first.call(null,seq__23172_23227__$1);
var G__23229 = cljs.core.chunk_rest.call(null,seq__23172_23227__$1);
var G__23230 = c__19060__auto___23228;
var G__23231 = cljs.core.count.call(null,c__19060__auto___23228);
var G__23232 = (0);
seq__23172_23212 = G__23229;
chunk__23173_23213 = G__23230;
count__23174_23214 = G__23231;
i__23175_23215 = G__23232;
continue;
} else {
var vec__23181_23233 = cljs.core.first.call(null,seq__23172_23227__$1);
var name_23234 = cljs.core.nth.call(null,vec__23181_23233,(0),null);
var map__23184_23235 = cljs.core.nth.call(null,vec__23181_23233,(1),null);
var map__23184_23236__$1 = ((((!((map__23184_23235 == null)))?((((map__23184_23235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23184_23235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23184_23235):map__23184_23235);
var doc_23237 = cljs.core.get.call(null,map__23184_23236__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23238 = cljs.core.get.call(null,map__23184_23236__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_23234);

cljs.core.println.call(null," ",arglists_23238);

if(cljs.core.truth_(doc_23237)){
cljs.core.println.call(null," ",doc_23237);
} else {
}

var G__23239 = cljs.core.next.call(null,seq__23172_23227__$1);
var G__23240 = null;
var G__23241 = (0);
var G__23242 = (0);
seq__23172_23212 = G__23239;
chunk__23173_23213 = G__23240;
count__23174_23214 = G__23241;
i__23175_23215 = G__23242;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6369__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6369__auto__)){
var fnspec = temp__6369__auto__;
cljs.core.print.call(null,"Spec");

var seq__23186 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__23187 = null;
var count__23188 = (0);
var i__23189 = (0);
while(true){
if((i__23189 < count__23188)){
var role = cljs.core._nth.call(null,chunk__23187,i__23189);
var temp__6369__auto___23243__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6369__auto___23243__$1)){
var spec_23244 = temp__6369__auto___23243__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_23244));
} else {
}

var G__23245 = seq__23186;
var G__23246 = chunk__23187;
var G__23247 = count__23188;
var G__23248 = (i__23189 + (1));
seq__23186 = G__23245;
chunk__23187 = G__23246;
count__23188 = G__23247;
i__23189 = G__23248;
continue;
} else {
var temp__6369__auto____$1 = cljs.core.seq.call(null,seq__23186);
if(temp__6369__auto____$1){
var seq__23186__$1 = temp__6369__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23186__$1)){
var c__19060__auto__ = cljs.core.chunk_first.call(null,seq__23186__$1);
var G__23249 = cljs.core.chunk_rest.call(null,seq__23186__$1);
var G__23250 = c__19060__auto__;
var G__23251 = cljs.core.count.call(null,c__19060__auto__);
var G__23252 = (0);
seq__23186 = G__23249;
chunk__23187 = G__23250;
count__23188 = G__23251;
i__23189 = G__23252;
continue;
} else {
var role = cljs.core.first.call(null,seq__23186__$1);
var temp__6369__auto___23253__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6369__auto___23253__$2)){
var spec_23254 = temp__6369__auto___23253__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_23254));
} else {
}

var G__23255 = cljs.core.next.call(null,seq__23186__$1);
var G__23256 = null;
var G__23257 = (0);
var G__23258 = (0);
seq__23186 = G__23255;
chunk__23187 = G__23256;
count__23188 = G__23257;
i__23189 = G__23258;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map