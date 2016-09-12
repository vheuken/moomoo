// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24760__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24760__auto__){
return or__24760__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24760__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35110_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35110_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__35176 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35177 = null;
var count__35178 = (0);
var i__35179 = (0);
while(true){
if((i__35179 < count__35178)){
var n = cljs.core._nth.call(null,chunk__35177,i__35179);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35188 = seq__35176;
var G__35189 = chunk__35177;
var G__35190 = count__35178;
var G__35191 = (i__35179 + (1));
seq__35176 = G__35188;
chunk__35177 = G__35189;
count__35178 = G__35190;
i__35179 = G__35191;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35176);
if(temp__4657__auto__){
var seq__35176__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35176__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__35176__$1);
var G__35209 = cljs.core.chunk_rest.call(null,seq__35176__$1);
var G__35210 = c__25571__auto__;
var G__35211 = cljs.core.count.call(null,c__25571__auto__);
var G__35212 = (0);
seq__35176 = G__35209;
chunk__35177 = G__35210;
count__35178 = G__35211;
i__35179 = G__35212;
continue;
} else {
var n = cljs.core.first.call(null,seq__35176__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35223 = cljs.core.next.call(null,seq__35176__$1);
var G__35224 = null;
var G__35225 = (0);
var G__35226 = (0);
seq__35176 = G__35223;
chunk__35177 = G__35224;
count__35178 = G__35225;
i__35179 = G__35226;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__35299_35336 = cljs.core.seq.call(null,deps);
var chunk__35300_35337 = null;
var count__35301_35338 = (0);
var i__35302_35339 = (0);
while(true){
if((i__35302_35339 < count__35301_35338)){
var dep_35342 = cljs.core._nth.call(null,chunk__35300_35337,i__35302_35339);
topo_sort_helper_STAR_.call(null,dep_35342,(depth + (1)),state);

var G__35347 = seq__35299_35336;
var G__35348 = chunk__35300_35337;
var G__35349 = count__35301_35338;
var G__35350 = (i__35302_35339 + (1));
seq__35299_35336 = G__35347;
chunk__35300_35337 = G__35348;
count__35301_35338 = G__35349;
i__35302_35339 = G__35350;
continue;
} else {
var temp__4657__auto___35354 = cljs.core.seq.call(null,seq__35299_35336);
if(temp__4657__auto___35354){
var seq__35299_35355__$1 = temp__4657__auto___35354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35299_35355__$1)){
var c__25571__auto___35358 = cljs.core.chunk_first.call(null,seq__35299_35355__$1);
var G__35359 = cljs.core.chunk_rest.call(null,seq__35299_35355__$1);
var G__35360 = c__25571__auto___35358;
var G__35361 = cljs.core.count.call(null,c__25571__auto___35358);
var G__35362 = (0);
seq__35299_35336 = G__35359;
chunk__35300_35337 = G__35360;
count__35301_35338 = G__35361;
i__35302_35339 = G__35362;
continue;
} else {
var dep_35363 = cljs.core.first.call(null,seq__35299_35355__$1);
topo_sort_helper_STAR_.call(null,dep_35363,(depth + (1)),state);

var G__35366 = cljs.core.next.call(null,seq__35299_35355__$1);
var G__35367 = null;
var G__35368 = (0);
var G__35369 = (0);
seq__35299_35336 = G__35366;
chunk__35300_35337 = G__35367;
count__35301_35338 = G__35368;
i__35302_35339 = G__35369;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35308){
var vec__35316 = p__35308;
var seq__35317 = cljs.core.seq.call(null,vec__35316);
var first__35318 = cljs.core.first.call(null,seq__35317);
var seq__35317__$1 = cljs.core.next.call(null,seq__35317);
var x = first__35318;
var xs = seq__35317__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35316,seq__35317,first__35318,seq__35317__$1,x,xs,get_deps__$1){
return (function (p1__35230_SHARP_){
return clojure.set.difference.call(null,p1__35230_SHARP_,x);
});})(vec__35316,seq__35317,first__35318,seq__35317__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__35475 = cljs.core.seq.call(null,provides);
var chunk__35476 = null;
var count__35477 = (0);
var i__35478 = (0);
while(true){
if((i__35478 < count__35477)){
var prov = cljs.core._nth.call(null,chunk__35476,i__35478);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35481_35519 = cljs.core.seq.call(null,requires);
var chunk__35482_35520 = null;
var count__35483_35521 = (0);
var i__35484_35522 = (0);
while(true){
if((i__35484_35522 < count__35483_35521)){
var req_35535 = cljs.core._nth.call(null,chunk__35482_35520,i__35484_35522);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35535,prov);

var G__35537 = seq__35481_35519;
var G__35538 = chunk__35482_35520;
var G__35539 = count__35483_35521;
var G__35540 = (i__35484_35522 + (1));
seq__35481_35519 = G__35537;
chunk__35482_35520 = G__35538;
count__35483_35521 = G__35539;
i__35484_35522 = G__35540;
continue;
} else {
var temp__4657__auto___35545 = cljs.core.seq.call(null,seq__35481_35519);
if(temp__4657__auto___35545){
var seq__35481_35546__$1 = temp__4657__auto___35545;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35481_35546__$1)){
var c__25571__auto___35553 = cljs.core.chunk_first.call(null,seq__35481_35546__$1);
var G__35558 = cljs.core.chunk_rest.call(null,seq__35481_35546__$1);
var G__35559 = c__25571__auto___35553;
var G__35560 = cljs.core.count.call(null,c__25571__auto___35553);
var G__35561 = (0);
seq__35481_35519 = G__35558;
chunk__35482_35520 = G__35559;
count__35483_35521 = G__35560;
i__35484_35522 = G__35561;
continue;
} else {
var req_35563 = cljs.core.first.call(null,seq__35481_35546__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35563,prov);

var G__35564 = cljs.core.next.call(null,seq__35481_35546__$1);
var G__35565 = null;
var G__35566 = (0);
var G__35567 = (0);
seq__35481_35519 = G__35564;
chunk__35482_35520 = G__35565;
count__35483_35521 = G__35566;
i__35484_35522 = G__35567;
continue;
}
} else {
}
}
break;
}

var G__35568 = seq__35475;
var G__35569 = chunk__35476;
var G__35570 = count__35477;
var G__35571 = (i__35478 + (1));
seq__35475 = G__35568;
chunk__35476 = G__35569;
count__35477 = G__35570;
i__35478 = G__35571;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35475);
if(temp__4657__auto__){
var seq__35475__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35475__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__35475__$1);
var G__35576 = cljs.core.chunk_rest.call(null,seq__35475__$1);
var G__35577 = c__25571__auto__;
var G__35578 = cljs.core.count.call(null,c__25571__auto__);
var G__35579 = (0);
seq__35475 = G__35576;
chunk__35476 = G__35577;
count__35477 = G__35578;
i__35478 = G__35579;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35475__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35500_35585 = cljs.core.seq.call(null,requires);
var chunk__35501_35586 = null;
var count__35502_35587 = (0);
var i__35503_35588 = (0);
while(true){
if((i__35503_35588 < count__35502_35587)){
var req_35589 = cljs.core._nth.call(null,chunk__35501_35586,i__35503_35588);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35589,prov);

var G__35590 = seq__35500_35585;
var G__35591 = chunk__35501_35586;
var G__35592 = count__35502_35587;
var G__35593 = (i__35503_35588 + (1));
seq__35500_35585 = G__35590;
chunk__35501_35586 = G__35591;
count__35502_35587 = G__35592;
i__35503_35588 = G__35593;
continue;
} else {
var temp__4657__auto___35594__$1 = cljs.core.seq.call(null,seq__35500_35585);
if(temp__4657__auto___35594__$1){
var seq__35500_35595__$1 = temp__4657__auto___35594__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35500_35595__$1)){
var c__25571__auto___35600 = cljs.core.chunk_first.call(null,seq__35500_35595__$1);
var G__35601 = cljs.core.chunk_rest.call(null,seq__35500_35595__$1);
var G__35602 = c__25571__auto___35600;
var G__35603 = cljs.core.count.call(null,c__25571__auto___35600);
var G__35604 = (0);
seq__35500_35585 = G__35601;
chunk__35501_35586 = G__35602;
count__35502_35587 = G__35603;
i__35503_35588 = G__35604;
continue;
} else {
var req_35606 = cljs.core.first.call(null,seq__35500_35595__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35606,prov);

var G__35611 = cljs.core.next.call(null,seq__35500_35595__$1);
var G__35612 = null;
var G__35613 = (0);
var G__35614 = (0);
seq__35500_35585 = G__35611;
chunk__35501_35586 = G__35612;
count__35502_35587 = G__35613;
i__35503_35588 = G__35614;
continue;
}
} else {
}
}
break;
}

var G__35617 = cljs.core.next.call(null,seq__35475__$1);
var G__35618 = null;
var G__35619 = (0);
var G__35620 = (0);
seq__35475 = G__35617;
chunk__35476 = G__35618;
count__35477 = G__35619;
i__35478 = G__35620;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__35657_35682 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35658_35683 = null;
var count__35659_35684 = (0);
var i__35660_35685 = (0);
while(true){
if((i__35660_35685 < count__35659_35684)){
var ns_35700 = cljs.core._nth.call(null,chunk__35658_35683,i__35660_35685);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35700);

var G__35702 = seq__35657_35682;
var G__35703 = chunk__35658_35683;
var G__35704 = count__35659_35684;
var G__35705 = (i__35660_35685 + (1));
seq__35657_35682 = G__35702;
chunk__35658_35683 = G__35703;
count__35659_35684 = G__35704;
i__35660_35685 = G__35705;
continue;
} else {
var temp__4657__auto___35715 = cljs.core.seq.call(null,seq__35657_35682);
if(temp__4657__auto___35715){
var seq__35657_35721__$1 = temp__4657__auto___35715;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35657_35721__$1)){
var c__25571__auto___35723 = cljs.core.chunk_first.call(null,seq__35657_35721__$1);
var G__35725 = cljs.core.chunk_rest.call(null,seq__35657_35721__$1);
var G__35726 = c__25571__auto___35723;
var G__35727 = cljs.core.count.call(null,c__25571__auto___35723);
var G__35728 = (0);
seq__35657_35682 = G__35725;
chunk__35658_35683 = G__35726;
count__35659_35684 = G__35727;
i__35660_35685 = G__35728;
continue;
} else {
var ns_35731 = cljs.core.first.call(null,seq__35657_35721__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35731);

var G__35732 = cljs.core.next.call(null,seq__35657_35721__$1);
var G__35733 = null;
var G__35734 = (0);
var G__35735 = (0);
seq__35657_35682 = G__35732;
chunk__35658_35683 = G__35733;
count__35659_35684 = G__35734;
i__35660_35685 = G__35735;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24760__auto__ = goog.require__;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__35751__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35751 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35759__i = 0, G__35759__a = new Array(arguments.length -  0);
while (G__35759__i < G__35759__a.length) {G__35759__a[G__35759__i] = arguments[G__35759__i + 0]; ++G__35759__i;}
  args = new cljs.core.IndexedSeq(G__35759__a,0);
} 
return G__35751__delegate.call(this,args);};
G__35751.cljs$lang$maxFixedArity = 0;
G__35751.cljs$lang$applyTo = (function (arglist__35760){
var args = cljs.core.seq(arglist__35760);
return G__35751__delegate(args);
});
G__35751.cljs$core$IFn$_invoke$arity$variadic = G__35751__delegate;
return G__35751;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35775 = cljs.core._EQ_;
var expr__35776 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35775.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35776))){
var path_parts = ((function (pred__35775,expr__35776){
return (function (p1__35770_SHARP_){
return clojure.string.split.call(null,p1__35770_SHARP_,/[\/\\]/);
});})(pred__35775,expr__35776))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__35775,expr__35776){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35780){if((e35780 instanceof Error)){
var e = e35780;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35780;

}
}})());
});
;})(path_parts,sep,root,pred__35775,expr__35776))
} else {
if(cljs.core.truth_(pred__35775.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35776))){
return ((function (pred__35775,expr__35776){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__35775,expr__35776){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__35775,expr__35776))
);

return deferred.addErrback(((function (deferred,pred__35775,expr__35776){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__35775,expr__35776))
);
});
;})(pred__35775,expr__35776))
} else {
return ((function (pred__35775,expr__35776){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35775,expr__35776))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35798,callback){
var map__35802 = p__35798;
var map__35802__$1 = ((((!((map__35802 == null)))?((((map__35802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35802):map__35802);
var file_msg = map__35802__$1;
var request_url = cljs.core.get.call(null,map__35802__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35802,map__35802__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35802,map__35802__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28214__auto__){
return (function (){
var f__28215__auto__ = (function (){var switch__27677__auto__ = ((function (c__28214__auto__){
return (function (state_35843){
var state_val_35844 = (state_35843[(1)]);
if((state_val_35844 === (7))){
var inst_35839 = (state_35843[(2)]);
var state_35843__$1 = state_35843;
var statearr_35847_35896 = state_35843__$1;
(statearr_35847_35896[(2)] = inst_35839);

(statearr_35847_35896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35844 === (1))){
var state_35843__$1 = state_35843;
var statearr_35848_35900 = state_35843__$1;
(statearr_35848_35900[(2)] = null);

(statearr_35848_35900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35844 === (4))){
var inst_35822 = (state_35843[(7)]);
var inst_35822__$1 = (state_35843[(2)]);
var state_35843__$1 = (function (){var statearr_35850 = state_35843;
(statearr_35850[(7)] = inst_35822__$1);

return statearr_35850;
})();
if(cljs.core.truth_(inst_35822__$1)){
var statearr_35851_35903 = state_35843__$1;
(statearr_35851_35903[(1)] = (5));

} else {
var statearr_35852_35905 = state_35843__$1;
(statearr_35852_35905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35844 === (6))){
var state_35843__$1 = state_35843;
var statearr_35854_35907 = state_35843__$1;
(statearr_35854_35907[(2)] = null);

(statearr_35854_35907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35844 === (3))){
var inst_35841 = (state_35843[(2)]);
var state_35843__$1 = state_35843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35843__$1,inst_35841);
} else {
if((state_val_35844 === (2))){
var state_35843__$1 = state_35843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35843__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35844 === (11))){
var inst_35835 = (state_35843[(2)]);
var state_35843__$1 = (function (){var statearr_35858 = state_35843;
(statearr_35858[(8)] = inst_35835);

return statearr_35858;
})();
var statearr_35859_35908 = state_35843__$1;
(statearr_35859_35908[(2)] = null);

(statearr_35859_35908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35844 === (9))){
var inst_35826 = (state_35843[(9)]);
var inst_35828 = (state_35843[(10)]);
var inst_35831 = inst_35828.call(null,inst_35826);
var state_35843__$1 = state_35843;
var statearr_35861_35912 = state_35843__$1;
(statearr_35861_35912[(2)] = inst_35831);

(statearr_35861_35912[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35844 === (5))){
var inst_35822 = (state_35843[(7)]);
var inst_35824 = figwheel.client.file_reloading.blocking_load.call(null,inst_35822);
var state_35843__$1 = state_35843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35843__$1,(8),inst_35824);
} else {
if((state_val_35844 === (10))){
var inst_35826 = (state_35843[(9)]);
var inst_35833 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35826);
var state_35843__$1 = state_35843;
var statearr_35863_35916 = state_35843__$1;
(statearr_35863_35916[(2)] = inst_35833);

(statearr_35863_35916[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35844 === (8))){
var inst_35822 = (state_35843[(7)]);
var inst_35828 = (state_35843[(10)]);
var inst_35826 = (state_35843[(2)]);
var inst_35827 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35828__$1 = cljs.core.get.call(null,inst_35827,inst_35822);
var state_35843__$1 = (function (){var statearr_35873 = state_35843;
(statearr_35873[(9)] = inst_35826);

(statearr_35873[(10)] = inst_35828__$1);

return statearr_35873;
})();
if(cljs.core.truth_(inst_35828__$1)){
var statearr_35874_35923 = state_35843__$1;
(statearr_35874_35923[(1)] = (9));

} else {
var statearr_35875_35924 = state_35843__$1;
(statearr_35875_35924[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__28214__auto__))
;
return ((function (switch__27677__auto__,c__28214__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27678__auto__ = null;
var figwheel$client$file_reloading$state_machine__27678__auto____0 = (function (){
var statearr_35881 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35881[(0)] = figwheel$client$file_reloading$state_machine__27678__auto__);

(statearr_35881[(1)] = (1));

return statearr_35881;
});
var figwheel$client$file_reloading$state_machine__27678__auto____1 = (function (state_35843){
while(true){
var ret_value__27679__auto__ = (function (){try{while(true){
var result__27680__auto__ = switch__27677__auto__.call(null,state_35843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27680__auto__;
}
break;
}
}catch (e35882){if((e35882 instanceof Object)){
var ex__27681__auto__ = e35882;
var statearr_35883_35928 = state_35843;
(statearr_35883_35928[(5)] = ex__27681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35929 = state_35843;
state_35843 = G__35929;
continue;
} else {
return ret_value__27679__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27678__auto__ = function(state_35843){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27678__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27678__auto____1.call(this,state_35843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27678__auto____0;
figwheel$client$file_reloading$state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27678__auto____1;
return figwheel$client$file_reloading$state_machine__27678__auto__;
})()
;})(switch__27677__auto__,c__28214__auto__))
})();
var state__28216__auto__ = (function (){var statearr_35884 = f__28215__auto__.call(null);
(statearr_35884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28214__auto__);

return statearr_35884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28216__auto__);
});})(c__28214__auto__))
);

return c__28214__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35936,callback){
var map__35940 = p__35936;
var map__35940__$1 = ((((!((map__35940 == null)))?((((map__35940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35940):map__35940);
var file_msg = map__35940__$1;
var namespace = cljs.core.get.call(null,map__35940__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35940,map__35940__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35940,map__35940__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35952){
var map__35955 = p__35952;
var map__35955__$1 = ((((!((map__35955 == null)))?((((map__35955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35955):map__35955);
var file_msg = map__35955__$1;
var namespace = cljs.core.get.call(null,map__35955__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24748__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24748__auto__){
var or__24760__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
var or__24760__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24760__auto____$1)){
return or__24760__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24748__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35963,callback){
var map__35968 = p__35963;
var map__35968__$1 = ((((!((map__35968 == null)))?((((map__35968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35968):map__35968);
var file_msg = map__35968__$1;
var request_url = cljs.core.get.call(null,map__35968__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35968__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28214__auto___36103 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28214__auto___36103,out){
return (function (){
var f__28215__auto__ = (function (){var switch__27677__auto__ = ((function (c__28214__auto___36103,out){
return (function (state_36080){
var state_val_36081 = (state_36080[(1)]);
if((state_val_36081 === (1))){
var inst_36054 = cljs.core.seq.call(null,files);
var inst_36055 = cljs.core.first.call(null,inst_36054);
var inst_36056 = cljs.core.next.call(null,inst_36054);
var inst_36057 = files;
var state_36080__$1 = (function (){var statearr_36082 = state_36080;
(statearr_36082[(7)] = inst_36055);

(statearr_36082[(8)] = inst_36057);

(statearr_36082[(9)] = inst_36056);

return statearr_36082;
})();
var statearr_36083_36107 = state_36080__$1;
(statearr_36083_36107[(2)] = null);

(statearr_36083_36107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36081 === (2))){
var inst_36063 = (state_36080[(10)]);
var inst_36057 = (state_36080[(8)]);
var inst_36062 = cljs.core.seq.call(null,inst_36057);
var inst_36063__$1 = cljs.core.first.call(null,inst_36062);
var inst_36064 = cljs.core.next.call(null,inst_36062);
var inst_36065 = (inst_36063__$1 == null);
var inst_36066 = cljs.core.not.call(null,inst_36065);
var state_36080__$1 = (function (){var statearr_36084 = state_36080;
(statearr_36084[(11)] = inst_36064);

(statearr_36084[(10)] = inst_36063__$1);

return statearr_36084;
})();
if(inst_36066){
var statearr_36085_36110 = state_36080__$1;
(statearr_36085_36110[(1)] = (4));

} else {
var statearr_36086_36112 = state_36080__$1;
(statearr_36086_36112[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36081 === (3))){
var inst_36078 = (state_36080[(2)]);
var state_36080__$1 = state_36080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36080__$1,inst_36078);
} else {
if((state_val_36081 === (4))){
var inst_36063 = (state_36080[(10)]);
var inst_36068 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36063);
var state_36080__$1 = state_36080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36080__$1,(7),inst_36068);
} else {
if((state_val_36081 === (5))){
var inst_36074 = cljs.core.async.close_BANG_.call(null,out);
var state_36080__$1 = state_36080;
var statearr_36089_36113 = state_36080__$1;
(statearr_36089_36113[(2)] = inst_36074);

(statearr_36089_36113[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36081 === (6))){
var inst_36076 = (state_36080[(2)]);
var state_36080__$1 = state_36080;
var statearr_36090_36116 = state_36080__$1;
(statearr_36090_36116[(2)] = inst_36076);

(statearr_36090_36116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36081 === (7))){
var inst_36064 = (state_36080[(11)]);
var inst_36070 = (state_36080[(2)]);
var inst_36071 = cljs.core.async.put_BANG_.call(null,out,inst_36070);
var inst_36057 = inst_36064;
var state_36080__$1 = (function (){var statearr_36091 = state_36080;
(statearr_36091[(12)] = inst_36071);

(statearr_36091[(8)] = inst_36057);

return statearr_36091;
})();
var statearr_36092_36120 = state_36080__$1;
(statearr_36092_36120[(2)] = null);

(statearr_36092_36120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__28214__auto___36103,out))
;
return ((function (switch__27677__auto__,c__28214__auto___36103,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27678__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27678__auto____0 = (function (){
var statearr_36097 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36097[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27678__auto__);

(statearr_36097[(1)] = (1));

return statearr_36097;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27678__auto____1 = (function (state_36080){
while(true){
var ret_value__27679__auto__ = (function (){try{while(true){
var result__27680__auto__ = switch__27677__auto__.call(null,state_36080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27680__auto__;
}
break;
}
}catch (e36098){if((e36098 instanceof Object)){
var ex__27681__auto__ = e36098;
var statearr_36099_36126 = state_36080;
(statearr_36099_36126[(5)] = ex__27681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36129 = state_36080;
state_36080 = G__36129;
continue;
} else {
return ret_value__27679__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27678__auto__ = function(state_36080){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27678__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27678__auto____1.call(this,state_36080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27678__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27678__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27678__auto__;
})()
;})(switch__27677__auto__,c__28214__auto___36103,out))
})();
var state__28216__auto__ = (function (){var statearr_36101 = f__28215__auto__.call(null);
(statearr_36101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28214__auto___36103);

return statearr_36101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28216__auto__);
});})(c__28214__auto___36103,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36134,opts){
var map__36138 = p__36134;
var map__36138__$1 = ((((!((map__36138 == null)))?((((map__36138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36138):map__36138);
var eval_body__$1 = cljs.core.get.call(null,map__36138__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36138__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24748__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24748__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24748__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e36140){var e = e36140;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__36145_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36145_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__36163){
var vec__36164 = p__36163;
var k = cljs.core.nth.call(null,vec__36164,(0),null);
var v = cljs.core.nth.call(null,vec__36164,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36167){
var vec__36168 = p__36167;
var k = cljs.core.nth.call(null,vec__36168,(0),null);
var v = cljs.core.nth.call(null,vec__36168,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36178,p__36179){
var map__36469 = p__36178;
var map__36469__$1 = ((((!((map__36469 == null)))?((((map__36469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36469):map__36469);
var opts = map__36469__$1;
var before_jsload = cljs.core.get.call(null,map__36469__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36469__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36469__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36470 = p__36179;
var map__36470__$1 = ((((!((map__36470 == null)))?((((map__36470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36470):map__36470);
var msg = map__36470__$1;
var files = cljs.core.get.call(null,map__36470__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36470__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36470__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28214__auto__,map__36469,map__36469__$1,opts,before_jsload,on_jsload,reload_dependents,map__36470,map__36470__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28215__auto__ = (function (){var switch__27677__auto__ = ((function (c__28214__auto__,map__36469,map__36469__$1,opts,before_jsload,on_jsload,reload_dependents,map__36470,map__36470__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36636){
var state_val_36637 = (state_36636[(1)]);
if((state_val_36637 === (7))){
var inst_36486 = (state_36636[(7)]);
var inst_36485 = (state_36636[(8)]);
var inst_36488 = (state_36636[(9)]);
var inst_36487 = (state_36636[(10)]);
var inst_36493 = cljs.core._nth.call(null,inst_36486,inst_36488);
var inst_36494 = figwheel.client.file_reloading.eval_body.call(null,inst_36493,opts);
var inst_36495 = (inst_36488 + (1));
var tmp36638 = inst_36486;
var tmp36639 = inst_36485;
var tmp36640 = inst_36487;
var inst_36485__$1 = tmp36639;
var inst_36486__$1 = tmp36638;
var inst_36487__$1 = tmp36640;
var inst_36488__$1 = inst_36495;
var state_36636__$1 = (function (){var statearr_36642 = state_36636;
(statearr_36642[(7)] = inst_36486__$1);

(statearr_36642[(11)] = inst_36494);

(statearr_36642[(8)] = inst_36485__$1);

(statearr_36642[(9)] = inst_36488__$1);

(statearr_36642[(10)] = inst_36487__$1);

return statearr_36642;
})();
var statearr_36643_36766 = state_36636__$1;
(statearr_36643_36766[(2)] = null);

(statearr_36643_36766[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (20))){
var inst_36530 = (state_36636[(12)]);
var inst_36539 = figwheel.client.file_reloading.sort_files.call(null,inst_36530);
var state_36636__$1 = state_36636;
var statearr_36644_36767 = state_36636__$1;
(statearr_36644_36767[(2)] = inst_36539);

(statearr_36644_36767[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (27))){
var state_36636__$1 = state_36636;
var statearr_36647_36768 = state_36636__$1;
(statearr_36647_36768[(2)] = null);

(statearr_36647_36768[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (1))){
var inst_36477 = (state_36636[(13)]);
var inst_36473 = before_jsload.call(null,files);
var inst_36474 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36476 = (function (){return ((function (inst_36477,inst_36473,inst_36474,state_val_36637,c__28214__auto__,map__36469,map__36469__$1,opts,before_jsload,on_jsload,reload_dependents,map__36470,map__36470__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36173_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36173_SHARP_);
});
;})(inst_36477,inst_36473,inst_36474,state_val_36637,c__28214__auto__,map__36469,map__36469__$1,opts,before_jsload,on_jsload,reload_dependents,map__36470,map__36470__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36477__$1 = cljs.core.filter.call(null,inst_36476,files);
var inst_36478 = cljs.core.not_empty.call(null,inst_36477__$1);
var state_36636__$1 = (function (){var statearr_36651 = state_36636;
(statearr_36651[(13)] = inst_36477__$1);

(statearr_36651[(14)] = inst_36473);

(statearr_36651[(15)] = inst_36474);

return statearr_36651;
})();
if(cljs.core.truth_(inst_36478)){
var statearr_36652_36770 = state_36636__$1;
(statearr_36652_36770[(1)] = (2));

} else {
var statearr_36655_36773 = state_36636__$1;
(statearr_36655_36773[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (24))){
var state_36636__$1 = state_36636;
var statearr_36656_36779 = state_36636__$1;
(statearr_36656_36779[(2)] = null);

(statearr_36656_36779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (39))){
var inst_36582 = (state_36636[(16)]);
var state_36636__$1 = state_36636;
var statearr_36657_36781 = state_36636__$1;
(statearr_36657_36781[(2)] = inst_36582);

(statearr_36657_36781[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (46))){
var inst_36629 = (state_36636[(2)]);
var state_36636__$1 = state_36636;
var statearr_36658_36786 = state_36636__$1;
(statearr_36658_36786[(2)] = inst_36629);

(statearr_36658_36786[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (4))){
var inst_36524 = (state_36636[(2)]);
var inst_36525 = cljs.core.List.EMPTY;
var inst_36526 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36525);
var inst_36527 = (function (){return ((function (inst_36524,inst_36525,inst_36526,state_val_36637,c__28214__auto__,map__36469,map__36469__$1,opts,before_jsload,on_jsload,reload_dependents,map__36470,map__36470__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36174_SHARP_){
var and__24748__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36174_SHARP_);
if(cljs.core.truth_(and__24748__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36174_SHARP_));
} else {
return and__24748__auto__;
}
});
;})(inst_36524,inst_36525,inst_36526,state_val_36637,c__28214__auto__,map__36469,map__36469__$1,opts,before_jsload,on_jsload,reload_dependents,map__36470,map__36470__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36528 = cljs.core.filter.call(null,inst_36527,files);
var inst_36529 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36530 = cljs.core.concat.call(null,inst_36528,inst_36529);
var state_36636__$1 = (function (){var statearr_36661 = state_36636;
(statearr_36661[(12)] = inst_36530);

(statearr_36661[(17)] = inst_36526);

(statearr_36661[(18)] = inst_36524);

return statearr_36661;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36662_36807 = state_36636__$1;
(statearr_36662_36807[(1)] = (16));

} else {
var statearr_36663_36808 = state_36636__$1;
(statearr_36663_36808[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (15))){
var inst_36513 = (state_36636[(2)]);
var state_36636__$1 = state_36636;
var statearr_36664_36811 = state_36636__$1;
(statearr_36664_36811[(2)] = inst_36513);

(statearr_36664_36811[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (21))){
var inst_36541 = (state_36636[(19)]);
var inst_36541__$1 = (state_36636[(2)]);
var inst_36542 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36541__$1);
var state_36636__$1 = (function (){var statearr_36665 = state_36636;
(statearr_36665[(19)] = inst_36541__$1);

return statearr_36665;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36636__$1,(22),inst_36542);
} else {
if((state_val_36637 === (31))){
var inst_36632 = (state_36636[(2)]);
var state_36636__$1 = state_36636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36636__$1,inst_36632);
} else {
if((state_val_36637 === (32))){
var inst_36582 = (state_36636[(16)]);
var inst_36592 = inst_36582.cljs$lang$protocol_mask$partition0$;
var inst_36593 = (inst_36592 & (64));
var inst_36594 = inst_36582.cljs$core$ISeq$;
var inst_36595 = (inst_36593) || (inst_36594);
var state_36636__$1 = state_36636;
if(cljs.core.truth_(inst_36595)){
var statearr_36670_36817 = state_36636__$1;
(statearr_36670_36817[(1)] = (35));

} else {
var statearr_36671_36818 = state_36636__$1;
(statearr_36671_36818[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (40))){
var inst_36608 = (state_36636[(20)]);
var inst_36607 = (state_36636[(2)]);
var inst_36608__$1 = cljs.core.get.call(null,inst_36607,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36610 = cljs.core.get.call(null,inst_36607,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36611 = cljs.core.not_empty.call(null,inst_36608__$1);
var state_36636__$1 = (function (){var statearr_36672 = state_36636;
(statearr_36672[(21)] = inst_36610);

(statearr_36672[(20)] = inst_36608__$1);

return statearr_36672;
})();
if(cljs.core.truth_(inst_36611)){
var statearr_36673_36822 = state_36636__$1;
(statearr_36673_36822[(1)] = (41));

} else {
var statearr_36674_36823 = state_36636__$1;
(statearr_36674_36823[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (33))){
var state_36636__$1 = state_36636;
var statearr_36675_36824 = state_36636__$1;
(statearr_36675_36824[(2)] = false);

(statearr_36675_36824[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (13))){
var inst_36498 = (state_36636[(22)]);
var inst_36503 = cljs.core.chunk_first.call(null,inst_36498);
var inst_36504 = cljs.core.chunk_rest.call(null,inst_36498);
var inst_36505 = cljs.core.count.call(null,inst_36503);
var inst_36485 = inst_36504;
var inst_36486 = inst_36503;
var inst_36487 = inst_36505;
var inst_36488 = (0);
var state_36636__$1 = (function (){var statearr_36676 = state_36636;
(statearr_36676[(7)] = inst_36486);

(statearr_36676[(8)] = inst_36485);

(statearr_36676[(9)] = inst_36488);

(statearr_36676[(10)] = inst_36487);

return statearr_36676;
})();
var statearr_36677_36826 = state_36636__$1;
(statearr_36677_36826[(2)] = null);

(statearr_36677_36826[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (22))){
var inst_36550 = (state_36636[(23)]);
var inst_36544 = (state_36636[(24)]);
var inst_36541 = (state_36636[(19)]);
var inst_36545 = (state_36636[(25)]);
var inst_36544__$1 = (state_36636[(2)]);
var inst_36545__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36544__$1);
var inst_36546 = (function (){var all_files = inst_36541;
var res_SINGLEQUOTE_ = inst_36544__$1;
var res = inst_36545__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36550,inst_36544,inst_36541,inst_36545,inst_36544__$1,inst_36545__$1,state_val_36637,c__28214__auto__,map__36469,map__36469__$1,opts,before_jsload,on_jsload,reload_dependents,map__36470,map__36470__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36176_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36176_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36550,inst_36544,inst_36541,inst_36545,inst_36544__$1,inst_36545__$1,state_val_36637,c__28214__auto__,map__36469,map__36469__$1,opts,before_jsload,on_jsload,reload_dependents,map__36470,map__36470__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36547 = cljs.core.filter.call(null,inst_36546,inst_36544__$1);
var inst_36549 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36550__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36549);
var inst_36551 = cljs.core.not_empty.call(null,inst_36550__$1);
var state_36636__$1 = (function (){var statearr_36678 = state_36636;
(statearr_36678[(26)] = inst_36547);

(statearr_36678[(23)] = inst_36550__$1);

(statearr_36678[(24)] = inst_36544__$1);

(statearr_36678[(25)] = inst_36545__$1);

return statearr_36678;
})();
if(cljs.core.truth_(inst_36551)){
var statearr_36679_36834 = state_36636__$1;
(statearr_36679_36834[(1)] = (23));

} else {
var statearr_36680_36839 = state_36636__$1;
(statearr_36680_36839[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (36))){
var state_36636__$1 = state_36636;
var statearr_36685_36840 = state_36636__$1;
(statearr_36685_36840[(2)] = false);

(statearr_36685_36840[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (41))){
var inst_36608 = (state_36636[(20)]);
var inst_36613 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36614 = cljs.core.map.call(null,inst_36613,inst_36608);
var inst_36615 = cljs.core.pr_str.call(null,inst_36614);
var inst_36616 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_36615)].join('');
var inst_36617 = figwheel.client.utils.log.call(null,inst_36616);
var state_36636__$1 = state_36636;
var statearr_36686_36848 = state_36636__$1;
(statearr_36686_36848[(2)] = inst_36617);

(statearr_36686_36848[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (43))){
var inst_36610 = (state_36636[(21)]);
var inst_36620 = (state_36636[(2)]);
var inst_36621 = cljs.core.not_empty.call(null,inst_36610);
var state_36636__$1 = (function (){var statearr_36687 = state_36636;
(statearr_36687[(27)] = inst_36620);

return statearr_36687;
})();
if(cljs.core.truth_(inst_36621)){
var statearr_36688_36849 = state_36636__$1;
(statearr_36688_36849[(1)] = (44));

} else {
var statearr_36689_36850 = state_36636__$1;
(statearr_36689_36850[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (29))){
var inst_36547 = (state_36636[(26)]);
var inst_36550 = (state_36636[(23)]);
var inst_36582 = (state_36636[(16)]);
var inst_36544 = (state_36636[(24)]);
var inst_36541 = (state_36636[(19)]);
var inst_36545 = (state_36636[(25)]);
var inst_36578 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36581 = (function (){var all_files = inst_36541;
var res_SINGLEQUOTE_ = inst_36544;
var res = inst_36545;
var files_not_loaded = inst_36547;
var dependencies_that_loaded = inst_36550;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36547,inst_36550,inst_36582,inst_36544,inst_36541,inst_36545,inst_36578,state_val_36637,c__28214__auto__,map__36469,map__36469__$1,opts,before_jsload,on_jsload,reload_dependents,map__36470,map__36470__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36580){
var map__36690 = p__36580;
var map__36690__$1 = ((((!((map__36690 == null)))?((((map__36690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36690):map__36690);
var namespace = cljs.core.get.call(null,map__36690__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36547,inst_36550,inst_36582,inst_36544,inst_36541,inst_36545,inst_36578,state_val_36637,c__28214__auto__,map__36469,map__36469__$1,opts,before_jsload,on_jsload,reload_dependents,map__36470,map__36470__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36582__$1 = cljs.core.group_by.call(null,inst_36581,inst_36547);
var inst_36586 = (inst_36582__$1 == null);
var inst_36587 = cljs.core.not.call(null,inst_36586);
var state_36636__$1 = (function (){var statearr_36695 = state_36636;
(statearr_36695[(16)] = inst_36582__$1);

(statearr_36695[(28)] = inst_36578);

return statearr_36695;
})();
if(inst_36587){
var statearr_36696_36854 = state_36636__$1;
(statearr_36696_36854[(1)] = (32));

} else {
var statearr_36697_36855 = state_36636__$1;
(statearr_36697_36855[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (44))){
var inst_36610 = (state_36636[(21)]);
var inst_36623 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36610);
var inst_36624 = cljs.core.pr_str.call(null,inst_36623);
var inst_36625 = [cljs.core.str("not required: "),cljs.core.str(inst_36624)].join('');
var inst_36626 = figwheel.client.utils.log.call(null,inst_36625);
var state_36636__$1 = state_36636;
var statearr_36698_36859 = state_36636__$1;
(statearr_36698_36859[(2)] = inst_36626);

(statearr_36698_36859[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (6))){
var inst_36521 = (state_36636[(2)]);
var state_36636__$1 = state_36636;
var statearr_36699_36860 = state_36636__$1;
(statearr_36699_36860[(2)] = inst_36521);

(statearr_36699_36860[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (28))){
var inst_36547 = (state_36636[(26)]);
var inst_36575 = (state_36636[(2)]);
var inst_36576 = cljs.core.not_empty.call(null,inst_36547);
var state_36636__$1 = (function (){var statearr_36700 = state_36636;
(statearr_36700[(29)] = inst_36575);

return statearr_36700;
})();
if(cljs.core.truth_(inst_36576)){
var statearr_36701_36861 = state_36636__$1;
(statearr_36701_36861[(1)] = (29));

} else {
var statearr_36702_36862 = state_36636__$1;
(statearr_36702_36862[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (25))){
var inst_36545 = (state_36636[(25)]);
var inst_36562 = (state_36636[(2)]);
var inst_36563 = cljs.core.not_empty.call(null,inst_36545);
var state_36636__$1 = (function (){var statearr_36706 = state_36636;
(statearr_36706[(30)] = inst_36562);

return statearr_36706;
})();
if(cljs.core.truth_(inst_36563)){
var statearr_36707_36863 = state_36636__$1;
(statearr_36707_36863[(1)] = (26));

} else {
var statearr_36708_36864 = state_36636__$1;
(statearr_36708_36864[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (34))){
var inst_36602 = (state_36636[(2)]);
var state_36636__$1 = state_36636;
if(cljs.core.truth_(inst_36602)){
var statearr_36709_36865 = state_36636__$1;
(statearr_36709_36865[(1)] = (38));

} else {
var statearr_36710_36866 = state_36636__$1;
(statearr_36710_36866[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (17))){
var state_36636__$1 = state_36636;
var statearr_36711_36867 = state_36636__$1;
(statearr_36711_36867[(2)] = recompile_dependents);

(statearr_36711_36867[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (3))){
var state_36636__$1 = state_36636;
var statearr_36712_36868 = state_36636__$1;
(statearr_36712_36868[(2)] = null);

(statearr_36712_36868[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (12))){
var inst_36517 = (state_36636[(2)]);
var state_36636__$1 = state_36636;
var statearr_36713_36869 = state_36636__$1;
(statearr_36713_36869[(2)] = inst_36517);

(statearr_36713_36869[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (2))){
var inst_36477 = (state_36636[(13)]);
var inst_36484 = cljs.core.seq.call(null,inst_36477);
var inst_36485 = inst_36484;
var inst_36486 = null;
var inst_36487 = (0);
var inst_36488 = (0);
var state_36636__$1 = (function (){var statearr_36715 = state_36636;
(statearr_36715[(7)] = inst_36486);

(statearr_36715[(8)] = inst_36485);

(statearr_36715[(9)] = inst_36488);

(statearr_36715[(10)] = inst_36487);

return statearr_36715;
})();
var statearr_36716_36873 = state_36636__$1;
(statearr_36716_36873[(2)] = null);

(statearr_36716_36873[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (23))){
var inst_36547 = (state_36636[(26)]);
var inst_36550 = (state_36636[(23)]);
var inst_36544 = (state_36636[(24)]);
var inst_36541 = (state_36636[(19)]);
var inst_36545 = (state_36636[(25)]);
var inst_36553 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36555 = (function (){var all_files = inst_36541;
var res_SINGLEQUOTE_ = inst_36544;
var res = inst_36545;
var files_not_loaded = inst_36547;
var dependencies_that_loaded = inst_36550;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36547,inst_36550,inst_36544,inst_36541,inst_36545,inst_36553,state_val_36637,c__28214__auto__,map__36469,map__36469__$1,opts,before_jsload,on_jsload,reload_dependents,map__36470,map__36470__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36554){
var map__36717 = p__36554;
var map__36717__$1 = ((((!((map__36717 == null)))?((((map__36717.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36717.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36717):map__36717);
var request_url = cljs.core.get.call(null,map__36717__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36547,inst_36550,inst_36544,inst_36541,inst_36545,inst_36553,state_val_36637,c__28214__auto__,map__36469,map__36469__$1,opts,before_jsload,on_jsload,reload_dependents,map__36470,map__36470__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36556 = cljs.core.reverse.call(null,inst_36550);
var inst_36557 = cljs.core.map.call(null,inst_36555,inst_36556);
var inst_36558 = cljs.core.pr_str.call(null,inst_36557);
var inst_36559 = figwheel.client.utils.log.call(null,inst_36558);
var state_36636__$1 = (function (){var statearr_36719 = state_36636;
(statearr_36719[(31)] = inst_36553);

return statearr_36719;
})();
var statearr_36720_36877 = state_36636__$1;
(statearr_36720_36877[(2)] = inst_36559);

(statearr_36720_36877[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (35))){
var state_36636__$1 = state_36636;
var statearr_36721_36878 = state_36636__$1;
(statearr_36721_36878[(2)] = true);

(statearr_36721_36878[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (19))){
var inst_36530 = (state_36636[(12)]);
var inst_36537 = figwheel.client.file_reloading.expand_files.call(null,inst_36530);
var state_36636__$1 = state_36636;
var statearr_36722_36879 = state_36636__$1;
(statearr_36722_36879[(2)] = inst_36537);

(statearr_36722_36879[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (11))){
var state_36636__$1 = state_36636;
var statearr_36723_36880 = state_36636__$1;
(statearr_36723_36880[(2)] = null);

(statearr_36723_36880[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (9))){
var inst_36519 = (state_36636[(2)]);
var state_36636__$1 = state_36636;
var statearr_36725_36881 = state_36636__$1;
(statearr_36725_36881[(2)] = inst_36519);

(statearr_36725_36881[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (5))){
var inst_36488 = (state_36636[(9)]);
var inst_36487 = (state_36636[(10)]);
var inst_36490 = (inst_36488 < inst_36487);
var inst_36491 = inst_36490;
var state_36636__$1 = state_36636;
if(cljs.core.truth_(inst_36491)){
var statearr_36729_36885 = state_36636__$1;
(statearr_36729_36885[(1)] = (7));

} else {
var statearr_36730_36886 = state_36636__$1;
(statearr_36730_36886[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (14))){
var inst_36498 = (state_36636[(22)]);
var inst_36508 = cljs.core.first.call(null,inst_36498);
var inst_36509 = figwheel.client.file_reloading.eval_body.call(null,inst_36508,opts);
var inst_36510 = cljs.core.next.call(null,inst_36498);
var inst_36485 = inst_36510;
var inst_36486 = null;
var inst_36487 = (0);
var inst_36488 = (0);
var state_36636__$1 = (function (){var statearr_36734 = state_36636;
(statearr_36734[(7)] = inst_36486);

(statearr_36734[(32)] = inst_36509);

(statearr_36734[(8)] = inst_36485);

(statearr_36734[(9)] = inst_36488);

(statearr_36734[(10)] = inst_36487);

return statearr_36734;
})();
var statearr_36735_36890 = state_36636__$1;
(statearr_36735_36890[(2)] = null);

(statearr_36735_36890[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (45))){
var state_36636__$1 = state_36636;
var statearr_36736_36891 = state_36636__$1;
(statearr_36736_36891[(2)] = null);

(statearr_36736_36891[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (26))){
var inst_36547 = (state_36636[(26)]);
var inst_36550 = (state_36636[(23)]);
var inst_36544 = (state_36636[(24)]);
var inst_36541 = (state_36636[(19)]);
var inst_36545 = (state_36636[(25)]);
var inst_36565 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36567 = (function (){var all_files = inst_36541;
var res_SINGLEQUOTE_ = inst_36544;
var res = inst_36545;
var files_not_loaded = inst_36547;
var dependencies_that_loaded = inst_36550;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36547,inst_36550,inst_36544,inst_36541,inst_36545,inst_36565,state_val_36637,c__28214__auto__,map__36469,map__36469__$1,opts,before_jsload,on_jsload,reload_dependents,map__36470,map__36470__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36566){
var map__36737 = p__36566;
var map__36737__$1 = ((((!((map__36737 == null)))?((((map__36737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36737):map__36737);
var namespace = cljs.core.get.call(null,map__36737__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36737__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36547,inst_36550,inst_36544,inst_36541,inst_36545,inst_36565,state_val_36637,c__28214__auto__,map__36469,map__36469__$1,opts,before_jsload,on_jsload,reload_dependents,map__36470,map__36470__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36568 = cljs.core.map.call(null,inst_36567,inst_36545);
var inst_36569 = cljs.core.pr_str.call(null,inst_36568);
var inst_36570 = figwheel.client.utils.log.call(null,inst_36569);
var inst_36571 = (function (){var all_files = inst_36541;
var res_SINGLEQUOTE_ = inst_36544;
var res = inst_36545;
var files_not_loaded = inst_36547;
var dependencies_that_loaded = inst_36550;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36547,inst_36550,inst_36544,inst_36541,inst_36545,inst_36565,inst_36567,inst_36568,inst_36569,inst_36570,state_val_36637,c__28214__auto__,map__36469,map__36469__$1,opts,before_jsload,on_jsload,reload_dependents,map__36470,map__36470__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36547,inst_36550,inst_36544,inst_36541,inst_36545,inst_36565,inst_36567,inst_36568,inst_36569,inst_36570,state_val_36637,c__28214__auto__,map__36469,map__36469__$1,opts,before_jsload,on_jsload,reload_dependents,map__36470,map__36470__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36572 = setTimeout(inst_36571,(10));
var state_36636__$1 = (function (){var statearr_36739 = state_36636;
(statearr_36739[(33)] = inst_36565);

(statearr_36739[(34)] = inst_36570);

return statearr_36739;
})();
var statearr_36740_36898 = state_36636__$1;
(statearr_36740_36898[(2)] = inst_36572);

(statearr_36740_36898[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (16))){
var state_36636__$1 = state_36636;
var statearr_36741_36899 = state_36636__$1;
(statearr_36741_36899[(2)] = reload_dependents);

(statearr_36741_36899[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (38))){
var inst_36582 = (state_36636[(16)]);
var inst_36604 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36582);
var state_36636__$1 = state_36636;
var statearr_36742_36900 = state_36636__$1;
(statearr_36742_36900[(2)] = inst_36604);

(statearr_36742_36900[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (30))){
var state_36636__$1 = state_36636;
var statearr_36743_36901 = state_36636__$1;
(statearr_36743_36901[(2)] = null);

(statearr_36743_36901[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (10))){
var inst_36498 = (state_36636[(22)]);
var inst_36501 = cljs.core.chunked_seq_QMARK_.call(null,inst_36498);
var state_36636__$1 = state_36636;
if(inst_36501){
var statearr_36744_36902 = state_36636__$1;
(statearr_36744_36902[(1)] = (13));

} else {
var statearr_36745_36903 = state_36636__$1;
(statearr_36745_36903[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (18))){
var inst_36535 = (state_36636[(2)]);
var state_36636__$1 = state_36636;
if(cljs.core.truth_(inst_36535)){
var statearr_36746_36904 = state_36636__$1;
(statearr_36746_36904[(1)] = (19));

} else {
var statearr_36747_36908 = state_36636__$1;
(statearr_36747_36908[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (42))){
var state_36636__$1 = state_36636;
var statearr_36748_36909 = state_36636__$1;
(statearr_36748_36909[(2)] = null);

(statearr_36748_36909[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (37))){
var inst_36599 = (state_36636[(2)]);
var state_36636__$1 = state_36636;
var statearr_36749_36910 = state_36636__$1;
(statearr_36749_36910[(2)] = inst_36599);

(statearr_36749_36910[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36637 === (8))){
var inst_36485 = (state_36636[(8)]);
var inst_36498 = (state_36636[(22)]);
var inst_36498__$1 = cljs.core.seq.call(null,inst_36485);
var state_36636__$1 = (function (){var statearr_36750 = state_36636;
(statearr_36750[(22)] = inst_36498__$1);

return statearr_36750;
})();
if(inst_36498__$1){
var statearr_36751_36914 = state_36636__$1;
(statearr_36751_36914[(1)] = (10));

} else {
var statearr_36752_36915 = state_36636__$1;
(statearr_36752_36915[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28214__auto__,map__36469,map__36469__$1,opts,before_jsload,on_jsload,reload_dependents,map__36470,map__36470__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27677__auto__,c__28214__auto__,map__36469,map__36469__$1,opts,before_jsload,on_jsload,reload_dependents,map__36470,map__36470__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27678__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27678__auto____0 = (function (){
var statearr_36756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36756[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27678__auto__);

(statearr_36756[(1)] = (1));

return statearr_36756;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27678__auto____1 = (function (state_36636){
while(true){
var ret_value__27679__auto__ = (function (){try{while(true){
var result__27680__auto__ = switch__27677__auto__.call(null,state_36636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27680__auto__;
}
break;
}
}catch (e36757){if((e36757 instanceof Object)){
var ex__27681__auto__ = e36757;
var statearr_36758_36916 = state_36636;
(statearr_36758_36916[(5)] = ex__27681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36917 = state_36636;
state_36636 = G__36917;
continue;
} else {
return ret_value__27679__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27678__auto__ = function(state_36636){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27678__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27678__auto____1.call(this,state_36636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27678__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27678__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27678__auto__;
})()
;})(switch__27677__auto__,c__28214__auto__,map__36469,map__36469__$1,opts,before_jsload,on_jsload,reload_dependents,map__36470,map__36470__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28216__auto__ = (function (){var statearr_36762 = f__28215__auto__.call(null);
(statearr_36762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28214__auto__);

return statearr_36762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28216__auto__);
});})(c__28214__auto__,map__36469,map__36469__$1,opts,before_jsload,on_jsload,reload_dependents,map__36470,map__36470__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28214__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36923,link){
var map__36929 = p__36923;
var map__36929__$1 = ((((!((map__36929 == null)))?((((map__36929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36929):map__36929);
var file = cljs.core.get.call(null,map__36929__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__36929,map__36929__$1,file){
return (function (p1__36921_SHARP_,p2__36922_SHARP_){
if(cljs.core._EQ_.call(null,p1__36921_SHARP_,p2__36922_SHARP_)){
return p1__36921_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__36929,map__36929__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36935){
var map__36936 = p__36935;
var map__36936__$1 = ((((!((map__36936 == null)))?((((map__36936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36936):map__36936);
var match_length = cljs.core.get.call(null,map__36936__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36936__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36931_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36931_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args36944 = [];
var len__25835__auto___36947 = arguments.length;
var i__25836__auto___36948 = (0);
while(true){
if((i__25836__auto___36948 < len__25835__auto___36947)){
args36944.push((arguments[i__25836__auto___36948]));

var G__36949 = (i__25836__auto___36948 + (1));
i__25836__auto___36948 = G__36949;
continue;
} else {
}
break;
}

var G__36946 = args36944.length;
switch (G__36946) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36944.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36951_SHARP_,p2__36952_SHARP_){
return cljs.core.assoc.call(null,p1__36951_SHARP_,cljs.core.get.call(null,p2__36952_SHARP_,key),p2__36952_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__36953){
var map__36956 = p__36953;
var map__36956__$1 = ((((!((map__36956 == null)))?((((map__36956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36956):map__36956);
var f_data = map__36956__$1;
var file = cljs.core.get.call(null,map__36956__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36961,p__36962){
var map__36974 = p__36961;
var map__36974__$1 = ((((!((map__36974 == null)))?((((map__36974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36974):map__36974);
var opts = map__36974__$1;
var on_cssload = cljs.core.get.call(null,map__36974__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36975 = p__36962;
var map__36975__$1 = ((((!((map__36975 == null)))?((((map__36975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36975):map__36975);
var files_msg = map__36975__$1;
var files = cljs.core.get.call(null,map__36975__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__36978_36982 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__36979_36983 = null;
var count__36980_36984 = (0);
var i__36981_36985 = (0);
while(true){
if((i__36981_36985 < count__36980_36984)){
var f_36986 = cljs.core._nth.call(null,chunk__36979_36983,i__36981_36985);
figwheel.client.file_reloading.reload_css_file.call(null,f_36986);

var G__36987 = seq__36978_36982;
var G__36988 = chunk__36979_36983;
var G__36989 = count__36980_36984;
var G__36990 = (i__36981_36985 + (1));
seq__36978_36982 = G__36987;
chunk__36979_36983 = G__36988;
count__36980_36984 = G__36989;
i__36981_36985 = G__36990;
continue;
} else {
var temp__4657__auto___36991 = cljs.core.seq.call(null,seq__36978_36982);
if(temp__4657__auto___36991){
var seq__36978_36992__$1 = temp__4657__auto___36991;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36978_36992__$1)){
var c__25571__auto___36993 = cljs.core.chunk_first.call(null,seq__36978_36992__$1);
var G__36994 = cljs.core.chunk_rest.call(null,seq__36978_36992__$1);
var G__36995 = c__25571__auto___36993;
var G__36996 = cljs.core.count.call(null,c__25571__auto___36993);
var G__36997 = (0);
seq__36978_36982 = G__36994;
chunk__36979_36983 = G__36995;
count__36980_36984 = G__36996;
i__36981_36985 = G__36997;
continue;
} else {
var f_36998 = cljs.core.first.call(null,seq__36978_36992__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_36998);

var G__36999 = cljs.core.next.call(null,seq__36978_36992__$1);
var G__37000 = null;
var G__37001 = (0);
var G__37002 = (0);
seq__36978_36982 = G__36999;
chunk__36979_36983 = G__37000;
count__36980_36984 = G__37001;
i__36981_36985 = G__37002;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__36974,map__36974__$1,opts,on_cssload,map__36975,map__36975__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__36974,map__36974__$1,opts,on_cssload,map__36975,map__36975__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1473645389332