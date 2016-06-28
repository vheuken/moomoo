// Compiled by ClojureScript 1.9.76 {:target :nodejs}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__18809__auto__,writer__18810__auto__,opt__18811__auto__){
return cljs.core._write.call(null,writer__18810__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24061 = arguments.length;
var i__19341__auto___24062 = (0);
while(true){
if((i__19341__auto___24062 < len__19340__auto___24061)){
args__19347__auto__.push((arguments[i__19341__auto___24062]));

var G__24063 = (i__19341__auto___24062 + (1));
i__19341__auto___24062 = G__24063;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq24060){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24060));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24065 = arguments.length;
var i__19341__auto___24066 = (0);
while(true){
if((i__19341__auto___24066 < len__19340__auto___24065)){
args__19347__auto__.push((arguments[i__19341__auto___24066]));

var G__24067 = (i__19341__auto___24066 + (1));
i__19341__auto___24066 = G__24067;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq24064){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24064));
});

var g_QMARK__24068 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_24069 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__24068){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__24068))
,null));
var mkg_24070 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__24068,g_24069){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__24068,g_24069))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__24068,g_24069,mkg_24070){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__24068).call(null,x);
});})(g_QMARK__24068,g_24069,mkg_24070))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__24068,g_24069,mkg_24070){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_24070).call(null,gfn);
});})(g_QMARK__24068,g_24069,mkg_24070))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__24068,g_24069,mkg_24070){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_24069).call(null,generator);
});})(g_QMARK__24068,g_24069,mkg_24070))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__20623__auto___24087 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__20623__auto___24087){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24088 = arguments.length;
var i__19341__auto___24089 = (0);
while(true){
if((i__19341__auto___24089 < len__19340__auto___24088)){
args__19347__auto__.push((arguments[i__19341__auto___24089]));

var G__24090 = (i__19341__auto___24089 + (1));
i__19341__auto___24089 = G__24090;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20623__auto___24087))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20623__auto___24087){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20623__auto___24087),args);
});})(g__20623__auto___24087))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__20623__auto___24087){
return (function (seq24071){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24071));
});})(g__20623__auto___24087))
;


var g__20623__auto___24091 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__20623__auto___24091){
return (function cljs$spec$impl$gen$list(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24092 = arguments.length;
var i__19341__auto___24093 = (0);
while(true){
if((i__19341__auto___24093 < len__19340__auto___24092)){
args__19347__auto__.push((arguments[i__19341__auto___24093]));

var G__24094 = (i__19341__auto___24093 + (1));
i__19341__auto___24093 = G__24094;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20623__auto___24091))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20623__auto___24091){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20623__auto___24091),args);
});})(g__20623__auto___24091))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__20623__auto___24091){
return (function (seq24072){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24072));
});})(g__20623__auto___24091))
;


var g__20623__auto___24095 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__20623__auto___24095){
return (function cljs$spec$impl$gen$map(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24096 = arguments.length;
var i__19341__auto___24097 = (0);
while(true){
if((i__19341__auto___24097 < len__19340__auto___24096)){
args__19347__auto__.push((arguments[i__19341__auto___24097]));

var G__24098 = (i__19341__auto___24097 + (1));
i__19341__auto___24097 = G__24098;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20623__auto___24095))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20623__auto___24095){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20623__auto___24095),args);
});})(g__20623__auto___24095))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__20623__auto___24095){
return (function (seq24073){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24073));
});})(g__20623__auto___24095))
;


var g__20623__auto___24099 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__20623__auto___24099){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24100 = arguments.length;
var i__19341__auto___24101 = (0);
while(true){
if((i__19341__auto___24101 < len__19340__auto___24100)){
args__19347__auto__.push((arguments[i__19341__auto___24101]));

var G__24102 = (i__19341__auto___24101 + (1));
i__19341__auto___24101 = G__24102;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20623__auto___24099))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20623__auto___24099){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20623__auto___24099),args);
});})(g__20623__auto___24099))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__20623__auto___24099){
return (function (seq24074){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24074));
});})(g__20623__auto___24099))
;


var g__20623__auto___24103 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__20623__auto___24103){
return (function cljs$spec$impl$gen$set(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24104 = arguments.length;
var i__19341__auto___24105 = (0);
while(true){
if((i__19341__auto___24105 < len__19340__auto___24104)){
args__19347__auto__.push((arguments[i__19341__auto___24105]));

var G__24106 = (i__19341__auto___24105 + (1));
i__19341__auto___24105 = G__24106;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20623__auto___24103))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20623__auto___24103){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20623__auto___24103),args);
});})(g__20623__auto___24103))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__20623__auto___24103){
return (function (seq24075){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24075));
});})(g__20623__auto___24103))
;


var g__20623__auto___24107 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__20623__auto___24107){
return (function cljs$spec$impl$gen$vector(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24108 = arguments.length;
var i__19341__auto___24109 = (0);
while(true){
if((i__19341__auto___24109 < len__19340__auto___24108)){
args__19347__auto__.push((arguments[i__19341__auto___24109]));

var G__24110 = (i__19341__auto___24109 + (1));
i__19341__auto___24109 = G__24110;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20623__auto___24107))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20623__auto___24107){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20623__auto___24107),args);
});})(g__20623__auto___24107))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__20623__auto___24107){
return (function (seq24076){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24076));
});})(g__20623__auto___24107))
;


var g__20623__auto___24111 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__20623__auto___24111){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24112 = arguments.length;
var i__19341__auto___24113 = (0);
while(true){
if((i__19341__auto___24113 < len__19340__auto___24112)){
args__19347__auto__.push((arguments[i__19341__auto___24113]));

var G__24114 = (i__19341__auto___24113 + (1));
i__19341__auto___24113 = G__24114;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20623__auto___24111))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20623__auto___24111){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20623__auto___24111),args);
});})(g__20623__auto___24111))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__20623__auto___24111){
return (function (seq24077){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24077));
});})(g__20623__auto___24111))
;


var g__20623__auto___24115 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__20623__auto___24115){
return (function cljs$spec$impl$gen$elements(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24116 = arguments.length;
var i__19341__auto___24117 = (0);
while(true){
if((i__19341__auto___24117 < len__19340__auto___24116)){
args__19347__auto__.push((arguments[i__19341__auto___24117]));

var G__24118 = (i__19341__auto___24117 + (1));
i__19341__auto___24117 = G__24118;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20623__auto___24115))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20623__auto___24115){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20623__auto___24115),args);
});})(g__20623__auto___24115))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__20623__auto___24115){
return (function (seq24078){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24078));
});})(g__20623__auto___24115))
;


var g__20623__auto___24119 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__20623__auto___24119){
return (function cljs$spec$impl$gen$bind(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24120 = arguments.length;
var i__19341__auto___24121 = (0);
while(true){
if((i__19341__auto___24121 < len__19340__auto___24120)){
args__19347__auto__.push((arguments[i__19341__auto___24121]));

var G__24122 = (i__19341__auto___24121 + (1));
i__19341__auto___24121 = G__24122;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20623__auto___24119))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20623__auto___24119){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20623__auto___24119),args);
});})(g__20623__auto___24119))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__20623__auto___24119){
return (function (seq24079){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24079));
});})(g__20623__auto___24119))
;


var g__20623__auto___24123 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__20623__auto___24123){
return (function cljs$spec$impl$gen$choose(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24124 = arguments.length;
var i__19341__auto___24125 = (0);
while(true){
if((i__19341__auto___24125 < len__19340__auto___24124)){
args__19347__auto__.push((arguments[i__19341__auto___24125]));

var G__24126 = (i__19341__auto___24125 + (1));
i__19341__auto___24125 = G__24126;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20623__auto___24123))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20623__auto___24123){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20623__auto___24123),args);
});})(g__20623__auto___24123))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__20623__auto___24123){
return (function (seq24080){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24080));
});})(g__20623__auto___24123))
;


var g__20623__auto___24127 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__20623__auto___24127){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24128 = arguments.length;
var i__19341__auto___24129 = (0);
while(true){
if((i__19341__auto___24129 < len__19340__auto___24128)){
args__19347__auto__.push((arguments[i__19341__auto___24129]));

var G__24130 = (i__19341__auto___24129 + (1));
i__19341__auto___24129 = G__24130;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20623__auto___24127))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20623__auto___24127){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20623__auto___24127),args);
});})(g__20623__auto___24127))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__20623__auto___24127){
return (function (seq24081){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24081));
});})(g__20623__auto___24127))
;


var g__20623__auto___24131 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__20623__auto___24131){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24132 = arguments.length;
var i__19341__auto___24133 = (0);
while(true){
if((i__19341__auto___24133 < len__19340__auto___24132)){
args__19347__auto__.push((arguments[i__19341__auto___24133]));

var G__24134 = (i__19341__auto___24133 + (1));
i__19341__auto___24133 = G__24134;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20623__auto___24131))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20623__auto___24131){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20623__auto___24131),args);
});})(g__20623__auto___24131))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__20623__auto___24131){
return (function (seq24082){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24082));
});})(g__20623__auto___24131))
;


var g__20623__auto___24135 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__20623__auto___24135){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24136 = arguments.length;
var i__19341__auto___24137 = (0);
while(true){
if((i__19341__auto___24137 < len__19340__auto___24136)){
args__19347__auto__.push((arguments[i__19341__auto___24137]));

var G__24138 = (i__19341__auto___24137 + (1));
i__19341__auto___24137 = G__24138;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20623__auto___24135))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20623__auto___24135){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20623__auto___24135),args);
});})(g__20623__auto___24135))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__20623__auto___24135){
return (function (seq24083){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24083));
});})(g__20623__auto___24135))
;


var g__20623__auto___24139 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__20623__auto___24139){
return (function cljs$spec$impl$gen$sample(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24140 = arguments.length;
var i__19341__auto___24141 = (0);
while(true){
if((i__19341__auto___24141 < len__19340__auto___24140)){
args__19347__auto__.push((arguments[i__19341__auto___24141]));

var G__24142 = (i__19341__auto___24141 + (1));
i__19341__auto___24141 = G__24142;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20623__auto___24139))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20623__auto___24139){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20623__auto___24139),args);
});})(g__20623__auto___24139))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__20623__auto___24139){
return (function (seq24084){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24084));
});})(g__20623__auto___24139))
;


var g__20623__auto___24143 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__20623__auto___24143){
return (function cljs$spec$impl$gen$return(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24144 = arguments.length;
var i__19341__auto___24145 = (0);
while(true){
if((i__19341__auto___24145 < len__19340__auto___24144)){
args__19347__auto__.push((arguments[i__19341__auto___24145]));

var G__24146 = (i__19341__auto___24145 + (1));
i__19341__auto___24145 = G__24146;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20623__auto___24143))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20623__auto___24143){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20623__auto___24143),args);
});})(g__20623__auto___24143))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__20623__auto___24143){
return (function (seq24085){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24085));
});})(g__20623__auto___24143))
;


var g__20623__auto___24147 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__20623__auto___24147){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24148 = arguments.length;
var i__19341__auto___24149 = (0);
while(true){
if((i__19341__auto___24149 < len__19340__auto___24148)){
args__19347__auto__.push((arguments[i__19341__auto___24149]));

var G__24150 = (i__19341__auto___24149 + (1));
i__19341__auto___24149 = G__24150;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20623__auto___24147))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20623__auto___24147){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__20623__auto___24147),args);
});})(g__20623__auto___24147))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__20623__auto___24147){
return (function (seq24086){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24086));
});})(g__20623__auto___24147))
;

var g__20636__auto___24172 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__20636__auto___24172){
return (function cljs$spec$impl$gen$any(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24173 = arguments.length;
var i__19341__auto___24174 = (0);
while(true){
if((i__19341__auto___24174 < len__19340__auto___24173)){
args__19347__auto__.push((arguments[i__19341__auto___24174]));

var G__24175 = (i__19341__auto___24174 + (1));
i__19341__auto___24174 = G__24175;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20636__auto___24172))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20636__auto___24172){
return (function (args){
return cljs.core.deref.call(null,g__20636__auto___24172);
});})(g__20636__auto___24172))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__20636__auto___24172){
return (function (seq24151){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24151));
});})(g__20636__auto___24172))
;


var g__20636__auto___24176 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__20636__auto___24176){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24177 = arguments.length;
var i__19341__auto___24178 = (0);
while(true){
if((i__19341__auto___24178 < len__19340__auto___24177)){
args__19347__auto__.push((arguments[i__19341__auto___24178]));

var G__24179 = (i__19341__auto___24178 + (1));
i__19341__auto___24178 = G__24179;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20636__auto___24176))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20636__auto___24176){
return (function (args){
return cljs.core.deref.call(null,g__20636__auto___24176);
});})(g__20636__auto___24176))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__20636__auto___24176){
return (function (seq24152){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24152));
});})(g__20636__auto___24176))
;


var g__20636__auto___24180 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__20636__auto___24180){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24181 = arguments.length;
var i__19341__auto___24182 = (0);
while(true){
if((i__19341__auto___24182 < len__19340__auto___24181)){
args__19347__auto__.push((arguments[i__19341__auto___24182]));

var G__24183 = (i__19341__auto___24182 + (1));
i__19341__auto___24182 = G__24183;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20636__auto___24180))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20636__auto___24180){
return (function (args){
return cljs.core.deref.call(null,g__20636__auto___24180);
});})(g__20636__auto___24180))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__20636__auto___24180){
return (function (seq24153){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24153));
});})(g__20636__auto___24180))
;


var g__20636__auto___24184 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__20636__auto___24184){
return (function cljs$spec$impl$gen$char(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24185 = arguments.length;
var i__19341__auto___24186 = (0);
while(true){
if((i__19341__auto___24186 < len__19340__auto___24185)){
args__19347__auto__.push((arguments[i__19341__auto___24186]));

var G__24187 = (i__19341__auto___24186 + (1));
i__19341__auto___24186 = G__24187;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20636__auto___24184))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20636__auto___24184){
return (function (args){
return cljs.core.deref.call(null,g__20636__auto___24184);
});})(g__20636__auto___24184))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__20636__auto___24184){
return (function (seq24154){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24154));
});})(g__20636__auto___24184))
;


var g__20636__auto___24188 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__20636__auto___24188){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24189 = arguments.length;
var i__19341__auto___24190 = (0);
while(true){
if((i__19341__auto___24190 < len__19340__auto___24189)){
args__19347__auto__.push((arguments[i__19341__auto___24190]));

var G__24191 = (i__19341__auto___24190 + (1));
i__19341__auto___24190 = G__24191;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20636__auto___24188))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20636__auto___24188){
return (function (args){
return cljs.core.deref.call(null,g__20636__auto___24188);
});})(g__20636__auto___24188))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__20636__auto___24188){
return (function (seq24155){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24155));
});})(g__20636__auto___24188))
;


var g__20636__auto___24192 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__20636__auto___24192){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24193 = arguments.length;
var i__19341__auto___24194 = (0);
while(true){
if((i__19341__auto___24194 < len__19340__auto___24193)){
args__19347__auto__.push((arguments[i__19341__auto___24194]));

var G__24195 = (i__19341__auto___24194 + (1));
i__19341__auto___24194 = G__24195;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20636__auto___24192))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20636__auto___24192){
return (function (args){
return cljs.core.deref.call(null,g__20636__auto___24192);
});})(g__20636__auto___24192))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__20636__auto___24192){
return (function (seq24156){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24156));
});})(g__20636__auto___24192))
;


var g__20636__auto___24196 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__20636__auto___24196){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24197 = arguments.length;
var i__19341__auto___24198 = (0);
while(true){
if((i__19341__auto___24198 < len__19340__auto___24197)){
args__19347__auto__.push((arguments[i__19341__auto___24198]));

var G__24199 = (i__19341__auto___24198 + (1));
i__19341__auto___24198 = G__24199;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20636__auto___24196))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20636__auto___24196){
return (function (args){
return cljs.core.deref.call(null,g__20636__auto___24196);
});})(g__20636__auto___24196))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__20636__auto___24196){
return (function (seq24157){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24157));
});})(g__20636__auto___24196))
;


var g__20636__auto___24200 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__20636__auto___24200){
return (function cljs$spec$impl$gen$double(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24201 = arguments.length;
var i__19341__auto___24202 = (0);
while(true){
if((i__19341__auto___24202 < len__19340__auto___24201)){
args__19347__auto__.push((arguments[i__19341__auto___24202]));

var G__24203 = (i__19341__auto___24202 + (1));
i__19341__auto___24202 = G__24203;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20636__auto___24200))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20636__auto___24200){
return (function (args){
return cljs.core.deref.call(null,g__20636__auto___24200);
});})(g__20636__auto___24200))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__20636__auto___24200){
return (function (seq24158){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24158));
});})(g__20636__auto___24200))
;


var g__20636__auto___24204 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__20636__auto___24204){
return (function cljs$spec$impl$gen$int(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24205 = arguments.length;
var i__19341__auto___24206 = (0);
while(true){
if((i__19341__auto___24206 < len__19340__auto___24205)){
args__19347__auto__.push((arguments[i__19341__auto___24206]));

var G__24207 = (i__19341__auto___24206 + (1));
i__19341__auto___24206 = G__24207;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20636__auto___24204))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20636__auto___24204){
return (function (args){
return cljs.core.deref.call(null,g__20636__auto___24204);
});})(g__20636__auto___24204))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__20636__auto___24204){
return (function (seq24159){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24159));
});})(g__20636__auto___24204))
;


var g__20636__auto___24208 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__20636__auto___24208){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24209 = arguments.length;
var i__19341__auto___24210 = (0);
while(true){
if((i__19341__auto___24210 < len__19340__auto___24209)){
args__19347__auto__.push((arguments[i__19341__auto___24210]));

var G__24211 = (i__19341__auto___24210 + (1));
i__19341__auto___24210 = G__24211;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20636__auto___24208))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20636__auto___24208){
return (function (args){
return cljs.core.deref.call(null,g__20636__auto___24208);
});})(g__20636__auto___24208))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__20636__auto___24208){
return (function (seq24160){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24160));
});})(g__20636__auto___24208))
;


var g__20636__auto___24212 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__20636__auto___24212){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24213 = arguments.length;
var i__19341__auto___24214 = (0);
while(true){
if((i__19341__auto___24214 < len__19340__auto___24213)){
args__19347__auto__.push((arguments[i__19341__auto___24214]));

var G__24215 = (i__19341__auto___24214 + (1));
i__19341__auto___24214 = G__24215;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20636__auto___24212))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20636__auto___24212){
return (function (args){
return cljs.core.deref.call(null,g__20636__auto___24212);
});})(g__20636__auto___24212))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__20636__auto___24212){
return (function (seq24161){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24161));
});})(g__20636__auto___24212))
;


var g__20636__auto___24216 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__20636__auto___24216){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24217 = arguments.length;
var i__19341__auto___24218 = (0);
while(true){
if((i__19341__auto___24218 < len__19340__auto___24217)){
args__19347__auto__.push((arguments[i__19341__auto___24218]));

var G__24219 = (i__19341__auto___24218 + (1));
i__19341__auto___24218 = G__24219;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20636__auto___24216))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20636__auto___24216){
return (function (args){
return cljs.core.deref.call(null,g__20636__auto___24216);
});})(g__20636__auto___24216))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__20636__auto___24216){
return (function (seq24162){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24162));
});})(g__20636__auto___24216))
;


var g__20636__auto___24220 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__20636__auto___24220){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24221 = arguments.length;
var i__19341__auto___24222 = (0);
while(true){
if((i__19341__auto___24222 < len__19340__auto___24221)){
args__19347__auto__.push((arguments[i__19341__auto___24222]));

var G__24223 = (i__19341__auto___24222 + (1));
i__19341__auto___24222 = G__24223;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20636__auto___24220))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20636__auto___24220){
return (function (args){
return cljs.core.deref.call(null,g__20636__auto___24220);
});})(g__20636__auto___24220))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__20636__auto___24220){
return (function (seq24163){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24163));
});})(g__20636__auto___24220))
;


var g__20636__auto___24224 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__20636__auto___24224){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24225 = arguments.length;
var i__19341__auto___24226 = (0);
while(true){
if((i__19341__auto___24226 < len__19340__auto___24225)){
args__19347__auto__.push((arguments[i__19341__auto___24226]));

var G__24227 = (i__19341__auto___24226 + (1));
i__19341__auto___24226 = G__24227;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20636__auto___24224))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20636__auto___24224){
return (function (args){
return cljs.core.deref.call(null,g__20636__auto___24224);
});})(g__20636__auto___24224))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__20636__auto___24224){
return (function (seq24164){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24164));
});})(g__20636__auto___24224))
;


var g__20636__auto___24228 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__20636__auto___24228){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24229 = arguments.length;
var i__19341__auto___24230 = (0);
while(true){
if((i__19341__auto___24230 < len__19340__auto___24229)){
args__19347__auto__.push((arguments[i__19341__auto___24230]));

var G__24231 = (i__19341__auto___24230 + (1));
i__19341__auto___24230 = G__24231;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20636__auto___24228))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20636__auto___24228){
return (function (args){
return cljs.core.deref.call(null,g__20636__auto___24228);
});})(g__20636__auto___24228))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__20636__auto___24228){
return (function (seq24165){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24165));
});})(g__20636__auto___24228))
;


var g__20636__auto___24232 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__20636__auto___24232){
return (function cljs$spec$impl$gen$string(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24233 = arguments.length;
var i__19341__auto___24234 = (0);
while(true){
if((i__19341__auto___24234 < len__19340__auto___24233)){
args__19347__auto__.push((arguments[i__19341__auto___24234]));

var G__24235 = (i__19341__auto___24234 + (1));
i__19341__auto___24234 = G__24235;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20636__auto___24232))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20636__auto___24232){
return (function (args){
return cljs.core.deref.call(null,g__20636__auto___24232);
});})(g__20636__auto___24232))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__20636__auto___24232){
return (function (seq24166){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24166));
});})(g__20636__auto___24232))
;


var g__20636__auto___24236 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__20636__auto___24236){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24237 = arguments.length;
var i__19341__auto___24238 = (0);
while(true){
if((i__19341__auto___24238 < len__19340__auto___24237)){
args__19347__auto__.push((arguments[i__19341__auto___24238]));

var G__24239 = (i__19341__auto___24238 + (1));
i__19341__auto___24238 = G__24239;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20636__auto___24236))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20636__auto___24236){
return (function (args){
return cljs.core.deref.call(null,g__20636__auto___24236);
});})(g__20636__auto___24236))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__20636__auto___24236){
return (function (seq24167){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24167));
});})(g__20636__auto___24236))
;


var g__20636__auto___24240 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__20636__auto___24240){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24241 = arguments.length;
var i__19341__auto___24242 = (0);
while(true){
if((i__19341__auto___24242 < len__19340__auto___24241)){
args__19347__auto__.push((arguments[i__19341__auto___24242]));

var G__24243 = (i__19341__auto___24242 + (1));
i__19341__auto___24242 = G__24243;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20636__auto___24240))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20636__auto___24240){
return (function (args){
return cljs.core.deref.call(null,g__20636__auto___24240);
});})(g__20636__auto___24240))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__20636__auto___24240){
return (function (seq24168){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24168));
});})(g__20636__auto___24240))
;


var g__20636__auto___24244 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__20636__auto___24244){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24245 = arguments.length;
var i__19341__auto___24246 = (0);
while(true){
if((i__19341__auto___24246 < len__19340__auto___24245)){
args__19347__auto__.push((arguments[i__19341__auto___24246]));

var G__24247 = (i__19341__auto___24246 + (1));
i__19341__auto___24246 = G__24247;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20636__auto___24244))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20636__auto___24244){
return (function (args){
return cljs.core.deref.call(null,g__20636__auto___24244);
});})(g__20636__auto___24244))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__20636__auto___24244){
return (function (seq24169){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24169));
});})(g__20636__auto___24244))
;


var g__20636__auto___24248 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__20636__auto___24248){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24249 = arguments.length;
var i__19341__auto___24250 = (0);
while(true){
if((i__19341__auto___24250 < len__19340__auto___24249)){
args__19347__auto__.push((arguments[i__19341__auto___24250]));

var G__24251 = (i__19341__auto___24250 + (1));
i__19341__auto___24250 = G__24251;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20636__auto___24248))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20636__auto___24248){
return (function (args){
return cljs.core.deref.call(null,g__20636__auto___24248);
});})(g__20636__auto___24248))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__20636__auto___24248){
return (function (seq24170){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24170));
});})(g__20636__auto___24248))
;


var g__20636__auto___24252 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__20636__auto___24252){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24253 = arguments.length;
var i__19341__auto___24254 = (0);
while(true){
if((i__19341__auto___24254 < len__19340__auto___24253)){
args__19347__auto__.push((arguments[i__19341__auto___24254]));

var G__24255 = (i__19341__auto___24254 + (1));
i__19341__auto___24254 = G__24255;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});})(g__20636__auto___24252))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__20636__auto___24252){
return (function (args){
return cljs.core.deref.call(null,g__20636__auto___24252);
});})(g__20636__auto___24252))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__20636__auto___24252){
return (function (seq24171){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24171));
});})(g__20636__auto___24252))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__19347__auto__ = [];
var len__19340__auto___24258 = arguments.length;
var i__19341__auto___24259 = (0);
while(true){
if((i__19341__auto___24259 < len__19340__auto___24258)){
args__19347__auto__.push((arguments[i__19341__auto___24259]));

var G__24260 = (i__19341__auto___24259 + (1));
i__19341__auto___24259 = G__24260;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__24256_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__24256_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq24257){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24257));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__24261_SHARP_){
return (new Date(p1__24261_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map