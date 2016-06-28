// Compiled by ClojureScript 1.9.76 {:target :nodejs}
goog.provide('cljs.spec');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('cljs.spec.impl.gen');
goog.require('clojure.string');
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'coll'
 */
cljs.spec._STAR_coll_check_limit_STAR_ = (100);
/**
 * if false, instrumented fns call straight through
 */
cljs.spec._STAR_instrument_enabled_STAR_ = true;

/**
 * @interface
 */
cljs.spec.Spec = function(){};

cljs.spec.conform_STAR_ = (function cljs$spec$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__18870__auto__ = (((spec == null))?null:spec);
var m__18871__auto__ = (cljs.spec.conform_STAR_[goog.typeOf(x__18870__auto__)]);
if(!((m__18871__auto__ == null))){
return m__18871__auto__.call(null,spec,x);
} else {
var m__18871__auto____$1 = (cljs.spec.conform_STAR_["_"]);
if(!((m__18871__auto____$1 == null))){
return m__18871__auto____$1.call(null,spec,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.conform*",spec);
}
}
}
});

cljs.spec.unform_STAR_ = (function cljs$spec$unform_STAR_(spec,y){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$unform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__18870__auto__ = (((spec == null))?null:spec);
var m__18871__auto__ = (cljs.spec.unform_STAR_[goog.typeOf(x__18870__auto__)]);
if(!((m__18871__auto__ == null))){
return m__18871__auto__.call(null,spec,y);
} else {
var m__18871__auto____$1 = (cljs.spec.unform_STAR_["_"]);
if(!((m__18871__auto____$1 == null))){
return m__18871__auto____$1.call(null,spec,y);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.unform*",spec);
}
}
}
});

cljs.spec.explain_STAR_ = (function cljs$spec$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__18870__auto__ = (((spec == null))?null:spec);
var m__18871__auto__ = (cljs.spec.explain_STAR_[goog.typeOf(x__18870__auto__)]);
if(!((m__18871__auto__ == null))){
return m__18871__auto__.call(null,spec,path,via,in$,x);
} else {
var m__18871__auto____$1 = (cljs.spec.explain_STAR_["_"]);
if(!((m__18871__auto____$1 == null))){
return m__18871__auto____$1.call(null,spec,path,via,in$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.explain*",spec);
}
}
}
});

cljs.spec.gen_STAR_ = (function cljs$spec$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__18870__auto__ = (((spec == null))?null:spec);
var m__18871__auto__ = (cljs.spec.gen_STAR_[goog.typeOf(x__18870__auto__)]);
if(!((m__18871__auto__ == null))){
return m__18871__auto__.call(null,spec,overrides,path,rmap);
} else {
var m__18871__auto____$1 = (cljs.spec.gen_STAR_["_"]);
if(!((m__18871__auto____$1 == null))){
return m__18871__auto____$1.call(null,spec,overrides,path,rmap);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.gen*",spec);
}
}
}
});

cljs.spec.with_gen_STAR_ = (function cljs$spec$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__18870__auto__ = (((spec == null))?null:spec);
var m__18871__auto__ = (cljs.spec.with_gen_STAR_[goog.typeOf(x__18870__auto__)]);
if(!((m__18871__auto__ == null))){
return m__18871__auto__.call(null,spec,gfn);
} else {
var m__18871__auto____$1 = (cljs.spec.with_gen_STAR_["_"]);
if(!((m__18871__auto____$1 == null))){
return m__18871__auto____$1.call(null,spec,gfn);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.with-gen*",spec);
}
}
}
});

cljs.spec.describe_STAR_ = (function cljs$spec$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$Spec$describe_STAR_$arity$1(spec);
} else {
var x__18870__auto__ = (((spec == null))?null:spec);
var m__18871__auto__ = (cljs.spec.describe_STAR_[goog.typeOf(x__18870__auto__)]);
if(!((m__18871__auto__ == null))){
return m__18871__auto__.call(null,spec);
} else {
var m__18871__auto____$1 = (cljs.spec.describe_STAR_["_"]);
if(!((m__18871__auto____$1 == null))){
return m__18871__auto____$1.call(null,spec);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.registry_ref !== 'undefined'){
} else {
cljs.spec.registry_ref = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.named_QMARK_ = (function cljs$spec$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.spec.with_name = (function cljs$spec$with_name(spec,name){
return cljs.core.with_meta.call(null,spec,cljs.core.assoc.call(null,cljs.core.meta.call(null,spec),new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006),name));
});
cljs.spec.spec_name = (function cljs$spec$spec_name(spec){
if((spec instanceof cljs.core.Keyword)){
return spec;
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || (spec.cljs$core$IMeta$))?true:false):false)){
return new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,spec));
} else {
return null;
}
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not Named
 */
cljs.spec.reg_resolve = (function cljs$spec$reg_resolve(k){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,k))){
var reg = cljs.core.deref.call(null,cljs.spec.registry_ref);
var spec = k;
while(true){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec))){
var G__23265 = cljs.core.get.call(null,reg,spec);
spec = G__23265;
continue;
} else {
if(cljs.core.truth_(spec)){
return cljs.spec.with_name.call(null,spec,k);
} else {
return null;
}
}
break;
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.reg_resolve_BANG_ = (function cljs$spec$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var or__18157__auto__ = cljs.spec.reg_resolve.call(null,k);
if(cljs.core.truth_(or__18157__auto__)){
return or__18157__auto__;
} else {
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.spec_QMARK_ = (function cljs$spec$spec_QMARK_(x){
var and__18145__auto__ = ((!((x == null)))?(((false) || (x.cljs$spec$Spec$))?true:false):false);
if(and__18145__auto__){
return x;
} else {
return and__18145__auto__;
}
});
/**
 * returns x if x is a (clojure.spec) regex op, else logical false
 */
cljs.spec.regex_QMARK_ = (function cljs$spec$regex_QMARK_(x){
var and__18145__auto__ = new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__18145__auto__)){
return x;
} else {
return and__18145__auto__;
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.maybe_spec = (function cljs$spec$maybe_spec(spec_or_k){
var s = (function (){var or__18157__auto__ = cljs.spec.spec_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__18157__auto__)){
return or__18157__auto__;
} else {
var or__18157__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__18157__auto____$1)){
return or__18157__auto____$1;
} else {
var or__18157__auto____$2 = (function (){var and__18145__auto__ = cljs.spec.named_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(and__18145__auto__)){
return cljs.spec.reg_resolve.call(null,spec_or_k);
} else {
return and__18145__auto__;
}
})();
if(cljs.core.truth_(or__18157__auto____$2)){
return or__18157__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,s))){
return cljs.spec.with_name.call(null,cljs.spec.regex_spec_impl.call(null,s,null),cljs.spec.spec_name.call(null,s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.the_spec = (function cljs$spec$the_spec(spec_or_k){
var or__18157__auto__ = cljs.spec.maybe_spec.call(null,spec_or_k);
if(cljs.core.truth_(or__18157__auto__)){
return or__18157__auto__;
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec_or_k))){
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(spec_or_k)].join('')));
} else {
return null;
}
}
});
cljs.spec.specize = (function cljs$spec$specize(s){
var or__18157__auto__ = cljs.spec.the_spec.call(null,s);
if(cljs.core.truth_(or__18157__auto__)){
return or__18157__auto__;
} else {
return cljs.spec.spec_impl.call(null,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582),s,null,null);
}
});
/**
 * Given a spec and a value, returns :clojure.spec/invalid if value does not match spec,
 *   else the (possibly destructured) value.
 */
cljs.spec.conform = (function cljs$spec$conform(spec,x){
return cljs.spec.conform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.unform = (function cljs$spec$unform(spec,x){
return cljs.spec.unform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.form = (function cljs$spec$form(spec){
return cljs.spec.describe_STAR_.call(null,cljs.spec.specize.call(null,spec));
});
cljs.spec.abbrev = (function cljs$spec$abbrev(form){
if(cljs.core.seq_QMARK_.call(null,form)){
return clojure.walk.postwalk.call(null,(function (form__$1){
if(cljs.core.truth_((function (){var and__18145__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__18145__auto__){
return cljs.core.namespace.call(null,form__$1);
} else {
return and__18145__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form__$1));
} else {
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first.call(null,form__$1))) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.second.call(null,form__$1)))){
return cljs.core.last.call(null,form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__18145__auto__ = (form instanceof cljs.core.Symbol);
if(and__18145__auto__){
return cljs.core.namespace.call(null,form);
} else {
return and__18145__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.describe = (function cljs$spec$describe(spec){
return cljs.spec.abbrev.call(null,cljs.spec.form.call(null,spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.with_gen = (function cljs$spec$with_gen(spec,gen_fn){
return cljs.spec.with_gen_STAR_.call(null,cljs.spec.specize.call(null,spec),gen_fn);
});
cljs.spec.explain_data_STAR_ = (function cljs$spec$explain_data_STAR_(spec,path,via,in$,x){
var temp__6369__auto__ = cljs.spec.explain_STAR_.call(null,cljs.spec.specize.call(null,spec),path,via,in$,x);
if(cljs.core.truth_(temp__6369__auto__)){
var probs = temp__6369__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),probs], null);
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a path->problem-map, where problem-map has at least :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.explain_data = (function cljs$spec$explain_data(spec,x){
return cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__6367__auto__ = cljs.spec.spec_name.call(null,spec);
if(cljs.core.truth_(temp__6367__auto__)){
var name = temp__6367__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * prints an explanation to *out*.
 */
cljs.spec.explain_out = (function cljs$spec$explain_out(ed){
if(cljs.core.truth_(ed)){
return cljs.core.print.call(null,(function (){var sb__19241__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_23316_23362 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_23317_23363 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_23316_23362,_STAR_print_fn_STAR_23317_23363,sb__19241__auto__){
return (function (x__19242__auto__){
return sb__19241__auto__.append(x__19242__auto__);
});})(_STAR_print_newline_STAR_23316_23362,_STAR_print_fn_STAR_23317_23363,sb__19241__auto__))
;

try{var seq__23318_23364 = cljs.core.seq.call(null,new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678).cljs$core$IFn$_invoke$arity$1(ed));
var chunk__23319_23365 = null;
var count__23320_23366 = (0);
var i__23321_23367 = (0);
while(true){
if((i__23321_23367 < count__23320_23366)){
var vec__23322_23368 = cljs.core._nth.call(null,chunk__23319_23365,i__23321_23367);
var path_23369 = cljs.core.nth.call(null,vec__23322_23368,(0),null);
var map__23325_23370 = cljs.core.nth.call(null,vec__23322_23368,(1),null);
var map__23325_23371__$1 = ((((!((map__23325_23370 == null)))?((((map__23325_23370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23325_23370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23325_23370):map__23325_23370);
var prob_23372 = map__23325_23371__$1;
var pred_23373 = cljs.core.get.call(null,map__23325_23371__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_23374 = cljs.core.get.call(null,map__23325_23371__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_23375 = cljs.core.get.call(null,map__23325_23371__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_23376 = cljs.core.get.call(null,map__23325_23371__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_23377 = cljs.core.get.call(null,map__23325_23371__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_23377)){
} else {
cljs.core.print.call(null,"In:",in_23377,"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_23374);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_23376)){
} else {
cljs.core.print.call(null," spec:",cljs.core.last.call(null,via_23376));
}

if(cljs.core.empty_QMARK_.call(null,path_23369)){
} else {
cljs.core.print.call(null," at:",path_23369);
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,pred_23373);

if(cljs.core.truth_(reason_23375)){
cljs.core.print.call(null,", ",reason_23375);
} else {
}

var seq__23327_23378 = cljs.core.seq.call(null,prob_23372);
var chunk__23328_23379 = null;
var count__23329_23380 = (0);
var i__23330_23381 = (0);
while(true){
if((i__23330_23381 < count__23329_23380)){
var vec__23331_23382 = cljs.core._nth.call(null,chunk__23328_23379,i__23330_23381);
var k_23383 = cljs.core.nth.call(null,vec__23331_23382,(0),null);
var v_23384 = cljs.core.nth.call(null,vec__23331_23382,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_23383))){
} else {
cljs.core.print.call(null,"\n\t",k_23383," ");

cljs.core.pr.call(null,v_23384);
}

var G__23385 = seq__23327_23378;
var G__23386 = chunk__23328_23379;
var G__23387 = count__23329_23380;
var G__23388 = (i__23330_23381 + (1));
seq__23327_23378 = G__23385;
chunk__23328_23379 = G__23386;
count__23329_23380 = G__23387;
i__23330_23381 = G__23388;
continue;
} else {
var temp__6369__auto___23389 = cljs.core.seq.call(null,seq__23327_23378);
if(temp__6369__auto___23389){
var seq__23327_23390__$1 = temp__6369__auto___23389;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23327_23390__$1)){
var c__19060__auto___23391 = cljs.core.chunk_first.call(null,seq__23327_23390__$1);
var G__23392 = cljs.core.chunk_rest.call(null,seq__23327_23390__$1);
var G__23393 = c__19060__auto___23391;
var G__23394 = cljs.core.count.call(null,c__19060__auto___23391);
var G__23395 = (0);
seq__23327_23378 = G__23392;
chunk__23328_23379 = G__23393;
count__23329_23380 = G__23394;
i__23330_23381 = G__23395;
continue;
} else {
var vec__23334_23396 = cljs.core.first.call(null,seq__23327_23390__$1);
var k_23397 = cljs.core.nth.call(null,vec__23334_23396,(0),null);
var v_23398 = cljs.core.nth.call(null,vec__23334_23396,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_23397))){
} else {
cljs.core.print.call(null,"\n\t",k_23397," ");

cljs.core.pr.call(null,v_23398);
}

var G__23399 = cljs.core.next.call(null,seq__23327_23390__$1);
var G__23400 = null;
var G__23401 = (0);
var G__23402 = (0);
seq__23327_23378 = G__23399;
chunk__23328_23379 = G__23400;
count__23329_23380 = G__23401;
i__23330_23381 = G__23402;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__23403 = seq__23318_23364;
var G__23404 = chunk__23319_23365;
var G__23405 = count__23320_23366;
var G__23406 = (i__23321_23367 + (1));
seq__23318_23364 = G__23403;
chunk__23319_23365 = G__23404;
count__23320_23366 = G__23405;
i__23321_23367 = G__23406;
continue;
} else {
var temp__6369__auto___23407 = cljs.core.seq.call(null,seq__23318_23364);
if(temp__6369__auto___23407){
var seq__23318_23408__$1 = temp__6369__auto___23407;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23318_23408__$1)){
var c__19060__auto___23409 = cljs.core.chunk_first.call(null,seq__23318_23408__$1);
var G__23410 = cljs.core.chunk_rest.call(null,seq__23318_23408__$1);
var G__23411 = c__19060__auto___23409;
var G__23412 = cljs.core.count.call(null,c__19060__auto___23409);
var G__23413 = (0);
seq__23318_23364 = G__23410;
chunk__23319_23365 = G__23411;
count__23320_23366 = G__23412;
i__23321_23367 = G__23413;
continue;
} else {
var vec__23337_23414 = cljs.core.first.call(null,seq__23318_23408__$1);
var path_23415 = cljs.core.nth.call(null,vec__23337_23414,(0),null);
var map__23340_23416 = cljs.core.nth.call(null,vec__23337_23414,(1),null);
var map__23340_23417__$1 = ((((!((map__23340_23416 == null)))?((((map__23340_23416.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23340_23416.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23340_23416):map__23340_23416);
var prob_23418 = map__23340_23417__$1;
var pred_23419 = cljs.core.get.call(null,map__23340_23417__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_23420 = cljs.core.get.call(null,map__23340_23417__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_23421 = cljs.core.get.call(null,map__23340_23417__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_23422 = cljs.core.get.call(null,map__23340_23417__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_23423 = cljs.core.get.call(null,map__23340_23417__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_23423)){
} else {
cljs.core.print.call(null,"In:",in_23423,"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_23420);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_23422)){
} else {
cljs.core.print.call(null," spec:",cljs.core.last.call(null,via_23422));
}

if(cljs.core.empty_QMARK_.call(null,path_23415)){
} else {
cljs.core.print.call(null," at:",path_23415);
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,pred_23419);

if(cljs.core.truth_(reason_23421)){
cljs.core.print.call(null,", ",reason_23421);
} else {
}

var seq__23342_23424 = cljs.core.seq.call(null,prob_23418);
var chunk__23343_23425 = null;
var count__23344_23426 = (0);
var i__23345_23427 = (0);
while(true){
if((i__23345_23427 < count__23344_23426)){
var vec__23346_23428 = cljs.core._nth.call(null,chunk__23343_23425,i__23345_23427);
var k_23429 = cljs.core.nth.call(null,vec__23346_23428,(0),null);
var v_23430 = cljs.core.nth.call(null,vec__23346_23428,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_23429))){
} else {
cljs.core.print.call(null,"\n\t",k_23429," ");

cljs.core.pr.call(null,v_23430);
}

var G__23431 = seq__23342_23424;
var G__23432 = chunk__23343_23425;
var G__23433 = count__23344_23426;
var G__23434 = (i__23345_23427 + (1));
seq__23342_23424 = G__23431;
chunk__23343_23425 = G__23432;
count__23344_23426 = G__23433;
i__23345_23427 = G__23434;
continue;
} else {
var temp__6369__auto___23435__$1 = cljs.core.seq.call(null,seq__23342_23424);
if(temp__6369__auto___23435__$1){
var seq__23342_23436__$1 = temp__6369__auto___23435__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23342_23436__$1)){
var c__19060__auto___23437 = cljs.core.chunk_first.call(null,seq__23342_23436__$1);
var G__23438 = cljs.core.chunk_rest.call(null,seq__23342_23436__$1);
var G__23439 = c__19060__auto___23437;
var G__23440 = cljs.core.count.call(null,c__19060__auto___23437);
var G__23441 = (0);
seq__23342_23424 = G__23438;
chunk__23343_23425 = G__23439;
count__23344_23426 = G__23440;
i__23345_23427 = G__23441;
continue;
} else {
var vec__23349_23442 = cljs.core.first.call(null,seq__23342_23436__$1);
var k_23443 = cljs.core.nth.call(null,vec__23349_23442,(0),null);
var v_23444 = cljs.core.nth.call(null,vec__23349_23442,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_23443))){
} else {
cljs.core.print.call(null,"\n\t",k_23443," ");

cljs.core.pr.call(null,v_23444);
}

var G__23445 = cljs.core.next.call(null,seq__23342_23436__$1);
var G__23446 = null;
var G__23447 = (0);
var G__23448 = (0);
seq__23342_23424 = G__23445;
chunk__23343_23425 = G__23446;
count__23344_23426 = G__23447;
i__23345_23427 = G__23448;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__23449 = cljs.core.next.call(null,seq__23318_23408__$1);
var G__23450 = null;
var G__23451 = (0);
var G__23452 = (0);
seq__23318_23364 = G__23449;
chunk__23319_23365 = G__23450;
count__23320_23366 = G__23451;
i__23321_23367 = G__23452;
continue;
}
} else {
}
}
break;
}

var seq__23352_23453 = cljs.core.seq.call(null,ed);
var chunk__23353_23454 = null;
var count__23354_23455 = (0);
var i__23355_23456 = (0);
while(true){
if((i__23355_23456 < count__23354_23455)){
var vec__23356_23457 = cljs.core._nth.call(null,chunk__23353_23454,i__23355_23456);
var k_23458 = cljs.core.nth.call(null,vec__23356_23457,(0),null);
var v_23459 = cljs.core.nth.call(null,vec__23356_23457,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_23458))){
} else {
cljs.core.print.call(null,k_23458," ");

cljs.core.pr.call(null,v_23459);

cljs.core.newline.call(null);
}

var G__23460 = seq__23352_23453;
var G__23461 = chunk__23353_23454;
var G__23462 = count__23354_23455;
var G__23463 = (i__23355_23456 + (1));
seq__23352_23453 = G__23460;
chunk__23353_23454 = G__23461;
count__23354_23455 = G__23462;
i__23355_23456 = G__23463;
continue;
} else {
var temp__6369__auto___23464 = cljs.core.seq.call(null,seq__23352_23453);
if(temp__6369__auto___23464){
var seq__23352_23465__$1 = temp__6369__auto___23464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23352_23465__$1)){
var c__19060__auto___23466 = cljs.core.chunk_first.call(null,seq__23352_23465__$1);
var G__23467 = cljs.core.chunk_rest.call(null,seq__23352_23465__$1);
var G__23468 = c__19060__auto___23466;
var G__23469 = cljs.core.count.call(null,c__19060__auto___23466);
var G__23470 = (0);
seq__23352_23453 = G__23467;
chunk__23353_23454 = G__23468;
count__23354_23455 = G__23469;
i__23355_23456 = G__23470;
continue;
} else {
var vec__23359_23471 = cljs.core.first.call(null,seq__23352_23465__$1);
var k_23472 = cljs.core.nth.call(null,vec__23359_23471,(0),null);
var v_23473 = cljs.core.nth.call(null,vec__23359_23471,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_23472))){
} else {
cljs.core.print.call(null,k_23472," ");

cljs.core.pr.call(null,v_23473);

cljs.core.newline.call(null);
}

var G__23474 = cljs.core.next.call(null,seq__23352_23465__$1);
var G__23475 = null;
var G__23476 = (0);
var G__23477 = (0);
seq__23352_23453 = G__23474;
chunk__23353_23454 = G__23475;
count__23354_23455 = G__23476;
i__23355_23456 = G__23477;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23317_23363;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23316_23362;
}
return [cljs.core.str(sb__19241__auto__)].join('');
})());
} else {
return cljs.core.println.call(null,"Success!");
}
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.explain = (function cljs$spec$explain(spec,x){
return cljs.spec.explain_out.call(null,cljs.spec.explain_data.call(null,spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.explain_str = (function cljs$spec$explain_str(spec,x){
var sb__19241__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_23480_23482 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_23481_23483 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_23480_23482,_STAR_print_fn_STAR_23481_23483,sb__19241__auto__){
return (function (x__19242__auto__){
return sb__19241__auto__.append(x__19242__auto__);
});})(_STAR_print_newline_STAR_23480_23482,_STAR_print_fn_STAR_23481_23483,sb__19241__auto__))
;

try{cljs.spec.explain.call(null,spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23481_23483;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23480_23482;
}
return [cljs.core.str(sb__19241__auto__)].join('');
});
cljs.spec.gensub = (function cljs$spec$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.specize.call(null,spec);
var temp__6367__auto__ = (function (){var or__18157__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(or__18157__auto__)){
return or__18157__auto__;
} else {
return cljs.spec.gen_STAR_.call(null,spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__6367__auto__)){
var g = temp__6367__auto__;
return cljs.spec.impl.gen.such_that.call(null,((function (g,temp__6367__auto__,spec__$1){
return (function (p1__23484_SHARP_){
return cljs.spec.valid_QMARK_.call(null,spec__$1,p1__23484_SHARP_);
});})(g,temp__6367__auto__,spec__$1))
,g,(100));
} else {
throw (new Error([cljs.core.str("Unable to construct gen at: "),cljs.core.str(path),cljs.core.str(" for: "),cljs.core.str(cljs.spec.abbrev.call(null,form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map paths (vectors of keywords) to generators. These will be
 *   used instead of the generators at those paths. Note that parent
 *   generator (in the spec or overrides map) will supersede those of any
 *   subtrees. A generator for a regex op must always return a
 *   sequential collection (i.e. a generator for s/? should return either
 *   an empty sequence/vector or a sequence/vector with one item in it)
 */
cljs.spec.gen = (function cljs$spec$gen(var_args){
var args23485 = [];
var len__19340__auto___23488 = arguments.length;
var i__19341__auto___23489 = (0);
while(true){
if((i__19341__auto___23489 < len__19340__auto___23488)){
args23485.push((arguments[i__19341__auto___23489]));

var G__23490 = (i__19341__auto___23489 + (1));
i__19341__auto___23489 = G__23490;
continue;
} else {
}
break;
}

var G__23487 = args23485.length;
switch (G__23487) {
case 1:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23485.length)].join('')));

}
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.gen.call(null,spec,null);
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.gensub.call(null,spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086),cljs.spec._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.def_impl = (function cljs$spec$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__18145__auto__ = cljs.spec.named_QMARK_.call(null,k);
if(cljs.core.truth_(and__18145__auto__)){
return cljs.core.namespace.call(null,k);
} else {
return and__18145__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("k must be namespaced keyword or resolveable symbol"),cljs.core.str("\n"),cljs.core.str("(c/and (named? k) (namespace k))")].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__18157__auto__ = cljs.spec.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(or__18157__auto__)){
return or__18157__auto__;
} else {
var or__18157__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec);
if(cljs.core.truth_(or__18157__auto____$1)){
return or__18157__auto____$1;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.registry_ref),spec);
}
}
})())?spec:cljs.spec.spec_impl.call(null,form,spec,null,null));
cljs.core.swap_BANG_.call(null,cljs.spec.registry_ref,cljs.core.assoc,k,spec__$1);

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.registry = (function cljs$spec$registry(){
return cljs.core.deref.call(null,cljs.spec.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.__GT_sym = (function cljs$spec$__GT_sym(x){
if(cljs.core.var_QMARK_.call(null,x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.get_spec = (function cljs$spec$get_spec(k){
return cljs.core.get.call(null,cljs.spec.registry.call(null),(((k instanceof cljs.core.Keyword))?k:cljs.spec.__GT_sym.call(null,k)));
});
/**
 * Returns nil if v conforms to spec, else throws ex-info with explain-data.
 */
cljs.spec.expect = (function cljs$spec$expect(spec,v){
return null;
});
/**
 * Fn-spec must include at least :args or :ret specs.
 */
cljs.spec.fn_spec_QMARK_ = (function cljs$spec$fn_spec_QMARK_(m){
var or__18157__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18157__auto__)){
return or__18157__auto__;
} else {
return new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(m);
}
});
cljs.spec.spec_checking_fn = (function cljs$spec$spec_checking_fn(v,f){
var conform_BANG_ = (function (v__$1,role,spec,data,args){
var conformed = cljs.spec.conform.call(null,spec,data);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),conformed)){
var ed = cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [role], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,data),new cljs.core.Keyword("cljs.spec","args","cljs.spec/args",-367019609),args);
throw cljs.core.ex_info.call(null,[cljs.core.str("Call to "),cljs.core.str(cljs.core.pr_str.call(null,v__$1)),cljs.core.str(" did not conform to spec:\n"),cljs.core.str((function (){var sb__19241__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_23498_23504 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_23499_23505 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_23498_23504,_STAR_print_fn_STAR_23499_23505,sb__19241__auto__,ed,conformed){
return (function (x__19242__auto__){
return sb__19241__auto__.append(x__19242__auto__);
});})(_STAR_print_newline_STAR_23498_23504,_STAR_print_fn_STAR_23499_23505,sb__19241__auto__,ed,conformed))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23499_23505;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23498_23504;
}
return [cljs.core.str(sb__19241__auto__)].join('');
})())].join(''),ed);
} else {
return conformed;
}
});
var G__23500 = ((function (conform_BANG_){
return (function() { 
var G__23506__delegate = function (args){
if(cljs.core.truth_(cljs.spec._STAR_instrument_enabled_STAR_)){
var _STAR_instrument_enabled_STAR_23501 = cljs.spec._STAR_instrument_enabled_STAR_;
cljs.spec._STAR_instrument_enabled_STAR_ = null;

try{var specs = cljs.spec.get_spec.call(null,v);
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs))){
conform_BANG_.call(null,v,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args,args);
} else {
}

var _STAR_instrument_enabled_STAR_23502 = cljs.spec._STAR_instrument_enabled_STAR_;
cljs.spec._STAR_instrument_enabled_STAR_ = true;

try{return cljs.core.apply.call(null,f,args);
}finally {cljs.spec._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_23502;
}}finally {cljs.spec._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_23501;
}} else {
return cljs.core.apply.call(null,f,args);
}
};
var G__23506 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23507__i = 0, G__23507__a = new Array(arguments.length -  0);
while (G__23507__i < G__23507__a.length) {G__23507__a[G__23507__i] = arguments[G__23507__i + 0]; ++G__23507__i;}
  args = new cljs.core.IndexedSeq(G__23507__a,0);
} 
return G__23506__delegate.call(this,args);};
G__23506.cljs$lang$maxFixedArity = 0;
G__23506.cljs$lang$applyTo = (function (arglist__23508){
var args = cljs.core.seq(arglist__23508);
return G__23506__delegate(args);
});
G__23506.cljs$core$IFn$_invoke$arity$variadic = G__23506__delegate;
return G__23506;
})()
;})(conform_BANG_))
;
if(!((f instanceof cljs.core.MultiFn))){
var G__23503 = G__23500;
goog.object.extend(G__23503,f);

return G__23503;
} else {
return G__23500;
}
});
cljs.spec.macroexpand_check = (function cljs$spec$macroexpand_check(v,args){
var specs = cljs.spec.get_spec.call(null,v);
var temp__6369__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__6369__auto__)){
var arg_spec = temp__6369__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.conform.call(null,arg_spec,args))){
var ed = cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,arg_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576)], null),(function (){var temp__6367__auto__ = cljs.spec.spec_name.call(null,arg_spec);
if(cljs.core.truth_(temp__6367__auto__)){
var name = temp__6367__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),new cljs.core.Keyword("cljs.spec","args","cljs.spec/args",-367019609),args);
throw (new Error([cljs.core.str("Call to "),cljs.core.str(cljs.spec.__GT_sym.call(null,v)),cljs.core.str(" did not conform to spec:\n"),cljs.core.str((function (){var sb__19241__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_23511_23513 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_23512_23514 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_23511_23513,_STAR_print_fn_STAR_23512_23514,sb__19241__auto__,ed,arg_spec,temp__6369__auto__,specs){
return (function (x__19242__auto__){
return sb__19241__auto__.append(x__19242__auto__);
});})(_STAR_print_newline_STAR_23511_23513,_STAR_print_fn_STAR_23512_23514,sb__19241__auto__,ed,arg_spec,temp__6369__auto__,specs))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23512_23514;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23511_23513;
}
return [cljs.core.str(sb__19241__auto__)].join('');
})())].join('')));
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.no_fn_spec = (function cljs$spec$no_fn_spec(v,specs){
return cljs.core.ex_info.call(null,[cljs.core.str("Fn at "),cljs.core.str(cljs.core.pr_str.call(null,v)),cljs.core.str(" is not spec'ed.")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"var","var",-769682797),v,new cljs.core.Keyword(null,"specs","specs",1426570741),specs], null));
});
/**
 * Map for instrumented vars to :raw/:wrapped fns
 */
cljs.spec.instrumented_vars = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.spec.instrument_STAR_ = (function cljs$spec$instrument_STAR_(v){
var spec = cljs.spec.get_spec.call(null,v);
if(cljs.core.truth_(cljs.spec.fn_spec_QMARK_.call(null,spec))){
var map__23517 = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.instrumented_vars),v);
var map__23517__$1 = ((((!((map__23517 == null)))?((((map__23517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23517):map__23517);
var raw = cljs.core.get.call(null,map__23517__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var wrapped = cljs.core.get.call(null,map__23517__$1,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701));
var current = cljs.core.deref.call(null,v);
if(cljs.core._EQ_.call(null,wrapped,current)){
return null;
} else {
var checked = cljs.spec.spec_checking_fn.call(null,v,current);
cljs.core.swap_BANG_.call(null,cljs.spec.instrumented_vars,cljs.core.assoc,v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"raw","raw",1604651272),current,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),checked], null));

return checked;
}
} else {
throw cljs.spec.no_fn_spec.call(null,v,spec);
}
});
cljs.spec.unstrument_STAR_ = (function cljs$spec$unstrument_STAR_(v){
var temp__6369__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.instrumented_vars),v);
if(cljs.core.truth_(temp__6369__auto__)){
var map__23521 = temp__6369__auto__;
var map__23521__$1 = ((((!((map__23521 == null)))?((((map__23521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23521):map__23521);
var raw = cljs.core.get.call(null,map__23521__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var wrapped = cljs.core.get.call(null,map__23521__$1,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701));
var current = cljs.core.deref.call(null,v);
if(cljs.core._EQ_.call(null,wrapped,current)){
cljs.core.swap_BANG_.call(null,cljs.spec.instrumented_vars,cljs.core.dissoc,v);

return raw;
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.recur_limit_QMARK_ = (function cljs$spec$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.call(null,rmap,id) > new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,path),k));
});
cljs.spec.inck = (function cljs$spec$inck(m,k){
return cljs.core.assoc.call(null,m,k,((function (){var or__18157__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__18157__auto__)){
return or__18157__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.dt = (function cljs$spec$dt(var_args){
var args23523 = [];
var len__19340__auto___23526 = arguments.length;
var i__19341__auto___23527 = (0);
while(true){
if((i__19341__auto___23527 < len__19340__auto___23526)){
args23523.push((arguments[i__19341__auto___23527]));

var G__23528 = (i__19341__auto___23527 + (1));
i__19341__auto___23527 = G__23528;
continue;
} else {
}
break;
}

var G__23525 = args23523.length;
switch (G__23525) {
case 3:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23523.length)].join('')));

}
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.dt.call(null,pred,x,form,null);
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__6367__auto__ = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(temp__6367__auto__)){
var spec = temp__6367__auto__;
return cljs.spec.conform.call(null,spec,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return pred.call(null,x);
} else {
if(cljs.core.truth_(pred.call(null,x))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
} else {
throw (new Error([cljs.core.str(cljs.core.pr_str.call(null,form)),cljs.core.str(" is not a fn, expected predicate fn")].join('')));
}
}
} else {
return x;
}
});

cljs.spec.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.valid_QMARK_ = (function cljs$spec$valid_QMARK_(var_args){
var args23530 = [];
var len__19340__auto___23533 = arguments.length;
var i__19341__auto___23534 = (0);
while(true){
if((i__19341__auto___23534 < len__19340__auto___23533)){
args23530.push((arguments[i__19341__auto___23534]));

var G__23535 = (i__19341__auto___23534 + (1));
i__19341__auto___23534 = G__23535;
continue;
} else {
}
break;
}

var G__23532 = args23530.length;
switch (G__23532) {
case 2:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23530.length)].join('')));

}
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,form));
});

cljs.spec.valid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.explain_1 = (function cljs$spec$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.maybe_spec.call(null,pred);
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred__$1))){
return cljs.spec.explain_STAR_.call(null,pred__$1,path,(function (){var temp__6367__auto__ = cljs.spec.spec_name.call(null,pred__$1);
if(cljs.core.truth_(temp__6367__auto__)){
var name = temp__6367__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})(),in$,v);
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form),new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.map_spec_impl = (function cljs$spec$map_spec_impl(p__23539){
var map__23570 = p__23539;
var map__23570__$1 = ((((!((map__23570 == null)))?((((map__23570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23570):map__23570);
var argm = map__23570__$1;
var opt = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var opt_keys = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.call(null,map__23570__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var keys_pred = cljs.core.apply.call(null,cljs.core.every_pred,pred_exprs);
var k__GT_s = cljs.core.zipmap.call(null,cljs.core.concat.call(null,req_keys,opt_keys),cljs.core.concat.call(null,req_specs,opt_specs));
var keys__GT_specs = ((function (keys_pred,k__GT_s,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__23537_SHARP_){
var or__18157__auto__ = k__GT_s.call(null,p1__23537_SHARP_);
if(cljs.core.truth_(or__18157__auto__)){
return or__18157__auto__;
} else {
return p1__23537_SHARP_;
}
});})(keys_pred,k__GT_s,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid.call(null);
if(typeof cljs.spec.t_cljs$spec23572 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec23572 = (function (opt,map_spec_impl,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,map__23570,req_specs,p__23539,keys__GT_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,meta23573){
this.opt = opt;
this.map_spec_impl = map_spec_impl;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.map__23570 = map__23570;
this.req_specs = req_specs;
this.p__23539 = p__23539;
this.keys__GT_specs = keys__GT_specs;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta23573 = meta23573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec23572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_23574,meta23573__$1){
var self__ = this;
var _23574__$1 = this;
return (new cljs.spec.t_cljs$spec23572(self__.opt,self__.map_spec_impl,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.map__23570,self__.req_specs,self__.p__23539,self__.keys__GT_specs,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta23573__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec23572.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_23574){
var self__ = this;
var _23574__$1 = this;
return self__.meta23573;
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec23572.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec23572.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys_pred.call(null,m))){
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__23578 = cljs.core.keys.call(null,m);
var vec__23579 = G__23578;
var seq__23580 = cljs.core.seq.call(null,vec__23579);
var first__23581 = cljs.core.first.call(null,seq__23580);
var seq__23580__$1 = cljs.core.next.call(null,seq__23580);
var k = first__23581;
var ks = seq__23580__$1;
var keys = vec__23579;
var ret__$1 = ret;
var G__23578__$1 = G__23578;
while(true){
var ret__$2 = ret__$1;
var vec__23582 = G__23578__$1;
var seq__23583 = cljs.core.seq.call(null,vec__23582);
var first__23584 = cljs.core.first.call(null,seq__23583);
var seq__23583__$1 = cljs.core.next.call(null,seq__23583);
var k__$1 = first__23584;
var ks__$1 = seq__23583__$1;
var keys__$1 = vec__23582;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k__$1))){
var v = cljs.core.get.call(null,m,k__$1);
var cv = cljs.spec.conform.call(null,self__.keys__GT_specs.call(null,k__$1),v);
if(cljs.core._EQ_.call(null,cv,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__23600 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,cv));
var G__23601 = ks__$1;
ret__$1 = G__23600;
G__23578__$1 = G__23601;
continue;
}
} else {
var G__23602 = ret__$2;
var G__23603 = ks__$1;
ret__$1 = G__23602;
G__23578__$1 = G__23603;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec23572.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__23588 = cljs.core.keys.call(null,m);
var vec__23589 = G__23588;
var seq__23590 = cljs.core.seq.call(null,vec__23589);
var first__23591 = cljs.core.first.call(null,seq__23590);
var seq__23590__$1 = cljs.core.next.call(null,seq__23590);
var k = first__23591;
var ks = seq__23590__$1;
var keys = vec__23589;
var ret__$1 = ret;
var G__23588__$1 = G__23588;
while(true){
var ret__$2 = ret__$1;
var vec__23592 = G__23588__$1;
var seq__23593 = cljs.core.seq.call(null,vec__23592);
var first__23594 = cljs.core.first.call(null,seq__23593);
var seq__23593__$1 = cljs.core.next.call(null,seq__23593);
var k__$1 = first__23594;
var ks__$1 = seq__23593__$1;
var keys__$1 = vec__23592;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k__$1))){
var cv = cljs.core.get.call(null,m,k__$1);
var v = cljs.spec.unform.call(null,self__.keys__GT_specs.call(null,k__$1),cv);
var G__23604 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,v));
var G__23605 = ks__$1;
ret__$1 = G__23604;
G__23588__$1 = G__23605;
continue;
} else {
var G__23606 = ret__$2;
var G__23607 = ks__$1;
ret__$1 = G__23606;
G__23588__$1 = G__23607;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec23572.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_.call(null,x))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
var reg = cljs.spec.registry.call(null);
return cljs.core.apply.call(null,cljs.core.merge,(function (){var temp__6369__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_(pred.call(null,x))){
return null;
} else {
return cljs.spec.abbrev.call(null,form);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__6369__auto__){
var probs = temp__6369__auto__;
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.vec.call(null,probs),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return null;
}
})(),cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__23595){
var vec__23596 = p__23595;
var k = cljs.core.nth.call(null,vec__23596,(0),null);
var v = cljs.core.nth.call(null,vec__23596,(1),null);
if(cljs.core.truth_((function (){var or__18157__auto__ = !(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k)));
if(or__18157__auto__){
return or__18157__auto__;
} else {
return cljs.spec.valid_QMARK_.call(null,self__.keys__GT_specs.call(null,k),v,k);
}
})())){
return null;
} else {
return cljs.spec.explain_1.call(null,self__.keys__GT_specs.call(null,k),self__.keys__GT_specs.call(null,k),cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq.call(null,x)));
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec23572.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
var gen = ((function (rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.call(null,gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.concat.call(null,req_gens,opt_gens))){
var reqs = cljs.core.zipmap.call(null,self__.req_keys,req_gens);
var opts = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.impl.gen.bind.call(null,cljs.spec.impl.gen.choose.call(null,(0),cljs.core.count.call(null,opts)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__23538_SHARP_){
var args = cljs.core.concat.call(null,cljs.core.seq.call(null,reqs),((cljs.core.seq.call(null,opts))?cljs.core.shuffle.call(null,cljs.core.seq.call(null,opts)):null));
return cljs.core.apply.call(null,cljs.spec.impl.gen.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.take.call(null,(p1__23538_SHARP_ + cljs.core.count.call(null,reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
);
} else {
return null;
}
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec23572.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.map_spec_impl.call(null,cljs.core.assoc.call(null,self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec23572.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),(function (){var G__23599 = cljs.core.PersistentVector.EMPTY;
var G__23599__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.call(null,G__23599,new cljs.core.Keyword(null,"req","req",-326448303),self__.req):G__23599);
var G__23599__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.call(null,G__23599__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),self__.opt):G__23599__$1);
var G__23599__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.call(null,G__23599__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),self__.req_un):G__23599__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.call(null,G__23599__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),self__.opt_un);
} else {
return G__23599__$3;
}
})());
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec23572.getBasis = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opt","opt",845825158,null),cljs.core.with_meta(new cljs.core.Symbol(null,"map-spec-impl","map-spec-impl",-1682885722,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"argm","argm",-181546357,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec' with a map argument"], null)),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"map__23570","map__23570",1624090832,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"p__23539","p__23539",1636170515,null),new cljs.core.Symbol(null,"keys->specs","keys->specs",-97897643,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta23573","meta23573",-2115843101,null)], null);
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec23572.cljs$lang$type = true;

cljs.spec.t_cljs$spec23572.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec23572";

cljs.spec.t_cljs$spec23572.cljs$lang$ctorPrWriter = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__18809__auto__,writer__18810__auto__,opt__18811__auto__){
return cljs.core._write.call(null,writer__18810__auto__,"cljs.spec/t_cljs$spec23572");
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.__GT_t_cljs$spec23572 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$map_spec_impl_$___GT_t_cljs$spec23572(opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,map__23570__$2,req_specs__$1,p__23539__$1,keys__GT_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta23573){
return (new cljs.spec.t_cljs$spec23572(opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,map__23570__$2,req_specs__$1,p__23539__$1,keys__GT_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta23573));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__23570,map__23570__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.t_cljs$spec23572(opt,cljs$spec$map_spec_impl,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,map__23570__$1,req_specs,p__23539,keys__GT_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.spec_impl = (function cljs$spec$spec_impl(var_args){
var args23608 = [];
var len__19340__auto___23616 = arguments.length;
var i__19341__auto___23617 = (0);
while(true){
if((i__19341__auto___23617 < len__19340__auto___23616)){
args23608.push((arguments[i__19341__auto___23617]));

var G__23618 = (i__19341__auto___23617 + (1));
i__19341__auto___23617 = G__23618;
continue;
} else {
}
break;
}

var G__23610 = args23608.length;
switch (G__23610) {
case 4:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23608.length)].join('')));

}
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.spec_impl.call(null,form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred))){
var G__23611 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__23611,gfn);
} else {
return G__23611;
}
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,pred))){
return cljs.spec.regex_spec_impl.call(null,pred,gfn);
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,pred))){
var G__23612 = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__23612,gfn);
} else {
return G__23612;
}
} else {
if(typeof cljs.spec.t_cljs$spec23613 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec23613 = (function (form,pred,gfn,cpred_QMARK_,unc,meta23614){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta23614 = meta23614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec23613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23615,meta23614__$1){
var self__ = this;
var _23615__$1 = this;
return (new cljs.spec.t_cljs$spec23613(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta23614__$1));
});

cljs.spec.t_cljs$spec23613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23615){
var self__ = this;
var _23615__$1 = this;
return self__.meta23614;
});

cljs.spec.t_cljs$spec23613.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec23613.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec23613.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return self__.unc.call(null,x);
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

cljs.spec.t_cljs$spec23613.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return null;
}
});

cljs.spec.t_cljs$spec23613.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.gen_for_pred.call(null,self__.pred);
}
});

cljs.spec.t_cljs$spec23613.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.spec_impl.call(null,self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec23613.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.t_cljs$spec23613.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"unc","unc",-465250751,null),new cljs.core.Symbol(null,"meta23614","meta23614",536622101,null)], null);
});

cljs.spec.t_cljs$spec23613.cljs$lang$type = true;

cljs.spec.t_cljs$spec23613.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec23613";

cljs.spec.t_cljs$spec23613.cljs$lang$ctorPrWriter = (function (this__18809__auto__,writer__18810__auto__,opt__18811__auto__){
return cljs.core._write.call(null,writer__18810__auto__,"cljs.spec/t_cljs$spec23613");
});

cljs.spec.__GT_t_cljs$spec23613 = (function cljs$spec$__GT_t_cljs$spec23613(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta23614){
return (new cljs.spec.t_cljs$spec23613(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta23614));
});

}

return (new cljs.spec.t_cljs$spec23613(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.multi_spec_impl = (function cljs$spec$multi_spec_impl(var_args){
var args23625 = [];
var len__19340__auto___23639 = arguments.length;
var i__19341__auto___23640 = (0);
while(true){
if((i__19341__auto___23640 < len__19340__auto___23639)){
args23625.push((arguments[i__19341__auto___23640]));

var G__23641 = (i__19341__auto___23640 + (1));
i__19341__auto___23640 = G__23641;
continue;
} else {
}
break;
}

var G__23627 = args23625.length;
switch (G__23627) {
case 3:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23625.length)].join('')));

}
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.multi_spec_impl.call(null,form,mmvar,retag,null);
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid.call(null);
var predx = ((function (id){
return (function (p1__23620_SHARP_){
var mm = cljs.core.deref.call(null,mmvar);
var and__18145__auto__ = cljs.core.contains_QMARK_.call(null,cljs.core.methods$.call(null,mm),cljs.core._dispatch_fn.call(null,mm).call(null,p1__23620_SHARP_));
if(and__18145__auto__){
return mm.call(null,p1__23620_SHARP_);
} else {
return and__18145__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__23621_SHARP_){
return cljs.core._dispatch_fn.call(null,cljs.core.deref.call(null,mmvar)).call(null,p1__23621_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__23622_SHARP_,p2__23623_SHARP_){
return cljs.core.assoc.call(null,p1__23622_SHARP_,retag,p2__23623_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.t_cljs$spec23628 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec23628 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta23629){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta23629 = meta23629;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec23628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_23630,meta23629__$1){
var self__ = this;
var _23630__$1 = this;
return (new cljs.spec.t_cljs$spec23628(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta23629__$1));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec23628.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_23630){
var self__ = this;
var _23630__$1 = this;
return self__.meta23629;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec23628.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec23628.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__6367__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__6367__auto__)){
var pred = temp__6367__auto__;
return cljs.spec.dt.call(null,pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec23628.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__6367__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__6367__auto__)){
var pred = temp__6367__auto__;
return cljs.spec.unform.call(null,pred,x);
} else {
throw (new Error([cljs.core.str("No method of: "),cljs.core.str(self__.form),cljs.core.str(" for dispatch value: "),cljs.core.str(self__.dval.call(null,x))].join('')));
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec23628.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = self__.dval.call(null,x);
var path__$1 = cljs.core.conj.call(null,path,dv);
var temp__6367__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__6367__auto__)){
var pred = temp__6367__auto__;
return cljs.spec.explain_1.call(null,self__.form,pred,path__$1,via,in$,x);
} else {
return cljs.core.PersistentArrayMap.fromArray([path__$1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"reason","reason",-2070751759),"no method",new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec23628.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__23631){
var vec__23632 = p__23631;
var k = cljs.core.nth.call(null,vec__23632,(0),null);
var f = cljs.core.nth.call(null,vec__23632,(1),null);
var p = f.call(null,null);
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,p,vec__23632,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.impl.gen.fmap.call(null,((function (rmap__$1,p,vec__23632,k,f,___$1,id,predx,dval,tag){
return (function (p1__23624_SHARP_){
return self__.tag.call(null,p1__23624_SHARP_,k);
});})(rmap__$1,p,vec__23632,k,f,___$1,id,predx,dval,tag))
,cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,cljs.core._conj.call(null,(function (){var x__19083__auto__ = self__.form;
return cljs.core._conj.call(null,(function (){var x__19083__auto____$1 = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19083__auto____$1);
})(),x__19083__auto__);
})(),new cljs.core.Symbol(null,"method","method",1696235119,null))));
});})(rmap__$1,p,vec__23632,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,cljs.core.remove.call(null,((function (gen,___$1,id,predx,dval,tag){
return (function (p__23635){
var vec__23636 = p__23635;
var k = cljs.core.nth.call(null,vec__23636,(0),null);
return cljs.core._EQ_.call(null,k,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$.call(null,cljs.core.deref.call(null,self__.mmvar)))));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.spec.impl.gen.one_of.call(null,gs);
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec23628.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.multi_spec_impl.call(null,self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec23628.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","multi-spec","cljs.spec/multi-spec",-2053297814,null)),(function (){var x__19083__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19083__auto__);
})())));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec23628.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta23629","meta23629",604974245,null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec23628.cljs$lang$type = true;

cljs.spec.t_cljs$spec23628.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec23628";

cljs.spec.t_cljs$spec23628.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__18809__auto__,writer__18810__auto__,opt__18811__auto__){
return cljs.core._write.call(null,writer__18810__auto__,"cljs.spec/t_cljs$spec23628");
});})(id,predx,dval,tag))
;

cljs.spec.__GT_t_cljs$spec23628 = ((function (id,predx,dval,tag){
return (function cljs$spec$__GT_t_cljs$spec23628(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta23629){
return (new cljs.spec.t_cljs$spec23628(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta23629));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.t_cljs$spec23628(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.tuple_impl = (function cljs$spec$tuple_impl(var_args){
var args23643 = [];
var len__19340__auto___23649 = arguments.length;
var i__19341__auto___23650 = (0);
while(true){
if((i__19341__auto___23650 < len__19340__auto___23649)){
args23643.push((arguments[i__19341__auto___23650]));

var G__23651 = (i__19341__auto___23650 + (1));
i__19341__auto___23650 = G__23651;
continue;
} else {
}
break;
}

var G__23645 = args23643.length;
switch (G__23645) {
case 2:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23643.length)].join('')));

}
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.tuple_impl.call(null,forms,preds,null);
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec23646 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec23646 = (function (forms,preds,gfn,meta23647){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta23647 = meta23647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec23646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23648,meta23647__$1){
var self__ = this;
var _23648__$1 = this;
return (new cljs.spec.t_cljs$spec23646(self__.forms,self__.preds,self__.gfn,meta23647__$1));
});

cljs.spec.t_cljs$spec23646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23648){
var self__ = this;
var _23648__$1 = this;
return self__.meta23647;
});

cljs.spec.t_cljs$spec23646.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec23646.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(!((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var v = x.call(null,i);
var cv = cljs.spec.dt.call(null,self__.preds.call(null,i),v,self__.forms.call(null,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cv)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__23653 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,cv));
var G__23654 = (i + (1));
ret = G__23653;
i = G__23654;
continue;
}
}
break;
}
}
});

cljs.spec.t_cljs$spec23646.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds)))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var cv = x.call(null,i);
var v = cljs.spec.unform.call(null,self__.preds.call(null,i),cv);
var G__23655 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,v));
var G__23656 = (i + (1));
ret = G__23655;
i = G__23656;
continue;
}
break;
}
});

cljs.spec.t_cljs$spec23646.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_.call(null,x))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__19083__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19083__auto__);
})(),(function (){var x__19083__auto__ = cljs.core.count.call(null,self__.preds);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19083__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (___$1){
return (function (i,form,pred){
var v = x.call(null,i);
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,v))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,i),via,cljs.core.conj.call(null,in$,i),v);
}
});})(___$1))
,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.forms,self__.preds));

}
}
});

cljs.spec.t_cljs$spec23646.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1){
return (function (i,p,f){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,i),rmap,f);
});})(___$1))
;
var gs = cljs.core.map.call(null,gen,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gs);
} else {
return null;
}
}
});

cljs.spec.t_cljs$spec23646.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.tuple_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec23646.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","tuple","cljs.spec/tuple",500419708,null)),self__.forms)));
});

cljs.spec.t_cljs$spec23646.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta23647","meta23647",-1427567095,null)], null);
});

cljs.spec.t_cljs$spec23646.cljs$lang$type = true;

cljs.spec.t_cljs$spec23646.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec23646";

cljs.spec.t_cljs$spec23646.cljs$lang$ctorPrWriter = (function (this__18809__auto__,writer__18810__auto__,opt__18811__auto__){
return cljs.core._write.call(null,writer__18810__auto__,"cljs.spec/t_cljs$spec23646");
});

cljs.spec.__GT_t_cljs$spec23646 = (function cljs$spec$__GT_t_cljs$spec23646(forms__$1,preds__$1,gfn__$1,meta23647){
return (new cljs.spec.t_cljs$spec23646(forms__$1,preds__$1,gfn__$1,meta23647));
});

}

return (new cljs.spec.t_cljs$spec23646(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.tagged_ret = (function cljs$spec$tagged_ret(v){
var x23658 = v;
x23658.cljs$core$IMapEntry$ = true;

x23658.cljs$core$IMapEntry$_key$arity$1 = ((function (x23658){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(0));
});})(x23658))
;

x23658.cljs$core$IMapEntry$_val$arity$1 = ((function (x23658){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(1));
});})(x23658))
;

return x23658;
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.or_spec_impl = (function cljs$spec$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid.call(null);
var kps = cljs.core.zipmap.call(null,keys,preds);
var cform = ((function (id,kps){
return (function (x){
var i = (0);
while(true){
if((i < cljs.core.count.call(null,preds))){
var pred = preds.call(null,i);
var ret = cljs.spec.dt.call(null,pred,x,cljs.core.nth.call(null,forms,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret)){
var G__23673 = (i + (1));
i = G__23673;
continue;
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,i),ret], null));
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
break;
}
});})(id,kps))
;
if(typeof cljs.spec.t_cljs$spec23666 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec23666 = (function (or_spec_impl,keys,forms,preds,gfn,id,kps,cform,meta23667){
this.or_spec_impl = or_spec_impl;
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.cform = cform;
this.meta23667 = meta23667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec23666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,cform){
return (function (_23668,meta23667__$1){
var self__ = this;
var _23668__$1 = this;
return (new cljs.spec.t_cljs$spec23666(self__.or_spec_impl,self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.cform,meta23667__$1));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec23666.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,cform){
return (function (_23668){
var self__ = this;
var _23668__$1 = this;
return self__.meta23667;
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec23666.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec23666.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec23666.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,p__23669){
var self__ = this;
var vec__23670 = p__23669;
var k = cljs.core.nth.call(null,vec__23670,(0),null);
var x = cljs.core.nth.call(null,vec__23670,(1),null);
var ___$1 = this;
return cljs.spec.unform.call(null,self__.kps.call(null,k),x);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec23666.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,kps,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,this$__$1,x))){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (this$__$1,id,kps,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,x))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,k),via,in$,x);
}
});})(this$__$1,id,kps,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec23666.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,kps,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,kps,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,cform){
return (function (){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,cform))
,null)));
}
});})(___$1,id,kps,cform))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_.call(null,gs)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gs);
}
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec23666.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec23666.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,kps,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null)),cljs.core.mapcat.call(null,cljs.core.vector,self__.keys,self__.forms))));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec23666.getBasis = ((function (id,kps,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"or-spec-impl","or-spec-impl",-1412945461,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'or'"], null)),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"kps","kps",-1157342767,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta23667","meta23667",1965717137,null)], null);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec23666.cljs$lang$type = true;

cljs.spec.t_cljs$spec23666.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec23666";

cljs.spec.t_cljs$spec23666.cljs$lang$ctorPrWriter = ((function (id,kps,cform){
return (function (this__18809__auto__,writer__18810__auto__,opt__18811__auto__){
return cljs.core._write.call(null,writer__18810__auto__,"cljs.spec/t_cljs$spec23666");
});})(id,kps,cform))
;

cljs.spec.__GT_t_cljs$spec23666 = ((function (id,kps,cform){
return (function cljs$spec$or_spec_impl_$___GT_t_cljs$spec23666(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta23667){
return (new cljs.spec.t_cljs$spec23666(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta23667));
});})(id,kps,cform))
;

}

return (new cljs.spec.t_cljs$spec23666(cljs$spec$or_spec_impl,keys,forms,preds,gfn,id,kps,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.and_preds = (function cljs$spec$and_preds(x,preds,forms){
var ret = x;
var G__23700 = preds;
var vec__23702 = G__23700;
var seq__23703 = cljs.core.seq.call(null,vec__23702);
var first__23704 = cljs.core.first.call(null,seq__23703);
var seq__23703__$1 = cljs.core.next.call(null,seq__23703);
var pred = first__23704;
var preds__$1 = seq__23703__$1;
var G__23701 = forms;
var vec__23705 = G__23701;
var seq__23706 = cljs.core.seq.call(null,vec__23705);
var first__23707 = cljs.core.first.call(null,seq__23706);
var seq__23706__$1 = cljs.core.next.call(null,seq__23706);
var form = first__23707;
var forms__$1 = seq__23706__$1;
var ret__$1 = ret;
var G__23700__$1 = G__23700;
var G__23701__$1 = G__23701;
while(true){
var ret__$2 = ret__$1;
var vec__23708 = G__23700__$1;
var seq__23709 = cljs.core.seq.call(null,vec__23708);
var first__23710 = cljs.core.first.call(null,seq__23709);
var seq__23709__$1 = cljs.core.next.call(null,seq__23709);
var pred__$1 = first__23710;
var preds__$2 = seq__23709__$1;
var vec__23711 = G__23701__$1;
var seq__23712 = cljs.core.seq.call(null,vec__23711);
var first__23713 = cljs.core.first.call(null,seq__23712);
var seq__23712__$1 = cljs.core.next.call(null,seq__23712);
var form__$1 = first__23713;
var forms__$2 = seq__23712__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__23714 = nret;
var G__23715 = preds__$2;
var G__23716 = forms__$2;
ret__$1 = G__23714;
G__23700__$1 = G__23715;
G__23701__$1 = G__23716;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.explain_pred_list = (function cljs$spec$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__23743 = forms;
var vec__23745 = G__23743;
var seq__23746 = cljs.core.seq.call(null,vec__23745);
var first__23747 = cljs.core.first.call(null,seq__23746);
var seq__23746__$1 = cljs.core.next.call(null,seq__23746);
var form = first__23747;
var forms__$1 = seq__23746__$1;
var G__23744 = preds;
var vec__23748 = G__23744;
var seq__23749 = cljs.core.seq.call(null,vec__23748);
var first__23750 = cljs.core.first.call(null,seq__23749);
var seq__23749__$1 = cljs.core.next.call(null,seq__23749);
var pred = first__23750;
var preds__$1 = seq__23749__$1;
var ret__$1 = ret;
var G__23743__$1 = G__23743;
var G__23744__$1 = G__23744;
while(true){
var ret__$2 = ret__$1;
var vec__23751 = G__23743__$1;
var seq__23752 = cljs.core.seq.call(null,vec__23751);
var first__23753 = cljs.core.first.call(null,seq__23752);
var seq__23752__$1 = cljs.core.next.call(null,seq__23752);
var form__$1 = first__23753;
var forms__$2 = seq__23752__$1;
var vec__23754 = G__23744__$1;
var seq__23755 = cljs.core.seq.call(null,vec__23754);
var first__23756 = cljs.core.first.call(null,seq__23755);
var seq__23755__$1 = cljs.core.next.call(null,seq__23755);
var pred__$1 = first__23756;
var preds__$2 = seq__23755__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
var G__23757 = nret;
var G__23758 = forms__$2;
var G__23759 = preds__$2;
ret__$1 = G__23757;
G__23743__$1 = G__23758;
G__23744__$1 = G__23759;
continue;
} else {
return cljs.spec.explain_1.call(null,form__$1,pred__$1,path,via,in$,ret__$2);
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.and_spec_impl = (function cljs$spec$and_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec23765 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec23765 = (function (and_spec_impl,forms,preds,gfn,meta23766){
this.and_spec_impl = and_spec_impl;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta23766 = meta23766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec23765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23767,meta23766__$1){
var self__ = this;
var _23767__$1 = this;
return (new cljs.spec.t_cljs$spec23765(self__.and_spec_impl,self__.forms,self__.preds,self__.gfn,meta23766__$1));
});

cljs.spec.t_cljs$spec23765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23767){
var self__ = this;
var _23767__$1 = this;
return self__.meta23766;
});

cljs.spec.t_cljs$spec23765.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec23765.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.and_preds.call(null,x,self__.preds,self__.forms);
});

cljs.spec.t_cljs$spec23765.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1){
return (function (p1__23761_SHARP_,p2__23760_SHARP_){
return cljs.spec.unform.call(null,p2__23760_SHARP_,p1__23761_SHARP_);
});})(___$1))
,x,cljs.core.reverse.call(null,self__.preds));
});

cljs.spec.t_cljs$spec23765.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_pred_list.call(null,self__.forms,self__.preds,path,via,in$,x);
});

cljs.spec.t_cljs$spec23765.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gensub.call(null,cljs.core.first.call(null,self__.preds),overrides,path,rmap,cljs.core.first.call(null,self__.forms));
}
});

cljs.spec.t_cljs$spec23765.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec23765.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",-7296553,null)),self__.forms)));
});

cljs.spec.t_cljs$spec23765.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"and-spec-impl","and-spec-impl",1127339973,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'and'"], null)),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta23766","meta23766",518305408,null)], null);
});

cljs.spec.t_cljs$spec23765.cljs$lang$type = true;

cljs.spec.t_cljs$spec23765.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec23765";

cljs.spec.t_cljs$spec23765.cljs$lang$ctorPrWriter = (function (this__18809__auto__,writer__18810__auto__,opt__18811__auto__){
return cljs.core._write.call(null,writer__18810__auto__,"cljs.spec/t_cljs$spec23765");
});

cljs.spec.__GT_t_cljs$spec23765 = (function cljs$spec$and_spec_impl_$___GT_t_cljs$spec23765(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta23766){
return (new cljs.spec.t_cljs$spec23765(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta23766));
});

}

return (new cljs.spec.t_cljs$spec23765(cljs$spec$and_spec_impl,forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.accept = (function cljs$spec$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.accept_QMARK_ = (function cljs$spec$accept_QMARK_(p__23768){
var map__23771 = p__23768;
var map__23771__$1 = ((((!((map__23771 == null)))?((((map__23771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23771):map__23771);
var op = cljs.core.get.call(null,map__23771__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),op);
});
cljs.spec.pcat_STAR_ = (function cljs$spec$pcat_STAR_(p__23773){
var map__23785 = p__23773;
var map__23785__$1 = ((((!((map__23785 == null)))?((((map__23785.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23785.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23785):map__23785);
var vec__23786 = cljs.core.get.call(null,map__23785__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__23787 = cljs.core.seq.call(null,vec__23786);
var first__23788 = cljs.core.first.call(null,seq__23787);
var seq__23787__$1 = cljs.core.next.call(null,seq__23787);
var p1 = first__23788;
var pr = seq__23787__$1;
var ps = vec__23786;
var vec__23789 = cljs.core.get.call(null,map__23785__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__23790 = cljs.core.seq.call(null,vec__23789);
var first__23791 = cljs.core.first.call(null,seq__23790);
var seq__23790__$1 = cljs.core.next.call(null,seq__23790);
var k1 = first__23791;
var kr = seq__23790__$1;
var ks = vec__23789;
var vec__23792 = cljs.core.get.call(null,map__23785__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__23793 = cljs.core.seq.call(null,vec__23792);
var first__23794 = cljs.core.first.call(null,seq__23793);
var seq__23793__$1 = cljs.core.next.call(null,seq__23793);
var f1 = first__23794;
var fr = seq__23793__$1;
var forms = vec__23792;
var ret = cljs.core.get.call(null,map__23785__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.call(null,map__23785__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
var rp = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.call(null,ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.fromArray([k1,rp], true, false):rp));
if(pr){
return cljs$spec$pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),fr,new cljs.core.Keyword(null,"ret","ret",-468222814),ret__$1], null));
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"rep+","rep+",-281382396),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.pcat = (function cljs$spec$pcat(var_args){
var args__19347__auto__ = [];
var len__19340__auto___23797 = arguments.length;
var i__19341__auto___23798 = (0);
while(true){
if((i__19341__auto___23798 < len__19340__auto___23797)){
args__19347__auto__.push((arguments[i__19341__auto___23798]));

var G__23799 = (i__19341__auto___23798 + (1));
i__19341__auto___23798 = G__23799;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});

cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.pcat.cljs$lang$applyTo = (function (seq23796){
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23796));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.cat_impl = (function cljs$spec$cat_impl(ks,ps,forms){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.rep_STAR_ = (function cljs$spec$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"splice","splice",449588165),splice,new cljs.core.Keyword(null,"forms","forms",2045992350),form,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null)], null);
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p2,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p1,new cljs.core.Keyword(null,"ret","ret",-468222814),ret);
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.rep_impl = (function cljs$spec$rep_impl(form,p){
return cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.rep_PLUS_impl = (function cljs$spec$rep_PLUS_impl(form,p){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__19083__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19083__auto__);
})(),(function (){var x__19083__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null)),(function (){var x__19083__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19083__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19083__auto__);
})())))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",-281382396),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.amp_impl = (function cljs$spec$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),new cljs.core.Keyword(null,"p1","p1",-936759954),re,new cljs.core.Keyword(null,"ps","ps",292358046),preds,new cljs.core.Keyword(null,"forms","forms",2045992350),pred_forms], null);
});
cljs.spec.filter_alt = (function cljs$spec$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__18157__auto__ = ks;
if(cljs.core.truth_(or__18157__auto__)){
return or__18157__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.call(null,(function (p1__23800_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__23800_SHARP_));
}),cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__18157__auto__ = cljs.core.seq.call(null,ks);
if(or__18157__auto__){
return or__18157__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__18157__auto__ = cljs.core.seq.call(null,forms);
if(or__18157__auto__){
return or__18157__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq.call(null,cljs.core.map.call(null,((function (pks){
return (function (p1__23801_SHARP_){
return cljs.core.nth.call(null,p1__23801_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.filter.call(null,f,ps)),ks,forms], null);
}
});
cljs.spec.alt_STAR_ = (function cljs$spec$alt_STAR_(ps,ks,forms){
var vec__23811 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.core.identity);
var vec__23814 = cljs.core.nth.call(null,vec__23811,(0),null);
var seq__23815 = cljs.core.seq.call(null,vec__23814);
var first__23816 = cljs.core.first.call(null,seq__23815);
var seq__23815__$1 = cljs.core.next.call(null,seq__23815);
var p1 = first__23816;
var pr = seq__23815__$1;
var ps__$1 = vec__23814;
var vec__23817 = cljs.core.nth.call(null,vec__23811,(1),null);
var k1 = cljs.core.nth.call(null,vec__23817,(0),null);
var ks__$1 = vec__23817;
var forms__$1 = cljs.core.nth.call(null,vec__23811,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),new cljs.core.Keyword(null,"ps","ps",292358046),ps__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks__$1,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.spec.accept.call(null,cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)], null)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alts = (function cljs$spec$alts(var_args){
var args__19347__auto__ = [];
var len__19340__auto___23821 = arguments.length;
var i__19341__auto___23822 = (0);
while(true){
if((i__19341__auto___23822 < len__19340__auto___23821)){
args__19347__auto__.push((arguments[i__19341__auto___23822]));

var G__23823 = (i__19341__auto___23822 + (1));
i__19341__auto___23822 = G__23823;
continue;
} else {
}
break;
}

var argseq__19348__auto__ = ((((0) < args__19347__auto__.length))?(new cljs.core.IndexedSeq(args__19347__auto__.slice((0)),(0),null)):null);
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__19348__auto__);
});

cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alt_STAR_.call(null,ps,null,null);
});

cljs.spec.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alts.cljs$lang$applyTo = (function (seq23820){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23820));
});

cljs.spec.alt2 = (function cljs$spec$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__18145__auto__ = p1;
if(cljs.core.truth_(and__18145__auto__)){
return p2;
} else {
return and__18145__auto__;
}
})())){
return cljs.spec.alts.call(null,p1,p2);
} else {
var or__18157__auto__ = p1;
if(cljs.core.truth_(or__18157__auto__)){
return or__18157__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alt_impl = (function cljs$spec$alt_impl(ks,ps,forms){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,ps,ks,forms),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null));
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.maybe_impl = (function cljs$spec$maybe_impl(p,form){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.accept.call(null,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718)], null)),new cljs.core.Keyword(null,"maybe","maybe",-314397560),form);
});
cljs.spec.noret_QMARK_ = (function cljs$spec$noret_QMARK_(p1,pret){
var or__18157__auto__ = cljs.core._EQ_.call(null,pret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718));
if(or__18157__auto__){
return or__18157__auto__;
} else {
var or__18157__auto____$1 = (function (){var and__18145__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),null], null), null).call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve_BANG_.call(null,p1)));
if(cljs.core.truth_(and__18145__auto__)){
return cljs.core.empty_QMARK_.call(null,pret);
} else {
return and__18145__auto__;
}
})();
if(cljs.core.truth_(or__18157__auto____$1)){
return or__18157__auto____$1;
} else {
return null;
}
}
});
cljs.spec.accept_nil_QMARK_ = (function cljs$spec$accept_nil_QMARK_(p){
var map__23827 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__23827__$1 = ((((!((map__23827 == null)))?((((map__23827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23827):map__23827);
var p__$1 = map__23827__$1;
var op = cljs.core.get.call(null,map__23827__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__23827__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.call(null,map__23827__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__23827__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__23827__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__23829 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__23829)){
return true;
} else {
if(cljs.core._EQ_.call(null,null,G__23829)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__23829)){
var and__18145__auto__ = cljs$spec$accept_nil_QMARK_.call(null,p1);
if(cljs.core.truth_(and__18145__auto__)){
var or__18157__auto__ = cljs.spec.noret_QMARK_.call(null,p1,cljs.spec.preturn.call(null,p1));
if(cljs.core.truth_(or__18157__auto__)){
return or__18157__auto__;
} else {
var ret = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1),ps,cljs.core.next.call(null,forms));
return cljs.core.not_EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
}
} else {
return and__18145__auto__;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__23829)){
var or__18157__auto__ = (p1 === p2);
if(or__18157__auto__){
return or__18157__auto__;
} else {
return cljs$spec$accept_nil_QMARK_.call(null,p1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__23829)){
return cljs.core.every_QMARK_.call(null,cljs$spec$accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__23829)){
return cljs.core.some.call(null,cljs$spec$accept_nil_QMARK_,ps);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.preturn = (function cljs$spec$preturn(p){
var map__23848 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__23848__$1 = ((((!((map__23848 == null)))?((((map__23848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23848):map__23848);
var p__$1 = map__23848__$1;
var vec__23849 = cljs.core.get.call(null,map__23848__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__23850 = cljs.core.seq.call(null,vec__23849);
var first__23851 = cljs.core.first.call(null,seq__23850);
var seq__23850__$1 = cljs.core.next.call(null,seq__23850);
var p0 = first__23851;
var pr = seq__23850__$1;
var ps = vec__23849;
var vec__23852 = cljs.core.get.call(null,map__23848__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__23852,(0),null);
var ks = vec__23852;
var op = cljs.core.get.call(null,map__23848__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__23848__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__23848__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__23848__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__23856 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__23856)){
return ret;
} else {
if(cljs.core._EQ_.call(null,null,G__23856)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__23856)){
var pret = cljs$spec$preturn.call(null,p1);
if(cljs.core.truth_(cljs.spec.noret_QMARK_.call(null,p1,pret))){
return new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718);
} else {
return cljs.spec.and_preds.call(null,pret,ps,forms);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__23856)){
return cljs.spec.add_ret.call(null,p1,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__23856)){
return cljs.spec.add_ret.call(null,p0,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__23856)){
var vec__23857 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.spec.accept_nil_QMARK_);
var vec__23860 = cljs.core.nth.call(null,vec__23857,(0),null);
var p0__$1 = cljs.core.nth.call(null,vec__23860,(0),null);
var vec__23863 = cljs.core.nth.call(null,vec__23857,(1),null);
var k0 = cljs.core.nth.call(null,vec__23863,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718):cljs$spec$preturn.call(null,p0__$1));
if(cljs.core.truth_(k0)){
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null));
} else {
return r;
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.op_unform = (function cljs$spec$op_unform(p,x){
var map__23882 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__23882__$1 = ((((!((map__23882 == null)))?((((map__23882.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23882.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23882):map__23882);
var p__$1 = map__23882__$1;
var vec__23883 = cljs.core.get.call(null,map__23882__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__23884 = cljs.core.seq.call(null,vec__23883);
var first__23885 = cljs.core.first.call(null,seq__23884);
var seq__23884__$1 = cljs.core.next.call(null,seq__23884);
var p0 = first__23885;
var pr = seq__23884__$1;
var ps = vec__23883;
var vec__23886 = cljs.core.get.call(null,map__23882__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__23886,(0),null);
var ks = vec__23886;
var op = cljs.core.get.call(null,map__23882__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__23882__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__23882__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__23882__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__23882__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__23882__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var kps = cljs.core.zipmap.call(null,ks,ps);
var G__23890 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__23890)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.call(null,null,G__23890)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p__$1,x)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__23890)){
var px = cljs.core.reduce.call(null,((function (G__23890,map__23882,map__23882__$1,p__$1,vec__23883,seq__23884,first__23885,seq__23884__$1,p0,pr,ps,vec__23886,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__23867_SHARP_,p2__23866_SHARP_){
return cljs.spec.unform.call(null,p2__23866_SHARP_,p1__23867_SHARP_);
});})(G__23890,map__23882,map__23882__$1,p__$1,vec__23883,seq__23884,first__23885,seq__23884__$1,p0,pr,ps,vec__23886,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse.call(null,ps));
return cljs$spec$op_unform.call(null,p1,px);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__23890)){
return cljs.core.mapcat.call(null,((function (G__23890,map__23882,map__23882__$1,p__$1,vec__23883,seq__23884,first__23885,seq__23884__$1,p0,pr,ps,vec__23886,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__23868_SHARP_){
return cljs$spec$op_unform.call(null,p1,p1__23868_SHARP_);
});})(G__23890,map__23882,map__23882__$1,p__$1,vec__23883,seq__23884,first__23885,seq__23884__$1,p0,pr,ps,vec__23886,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__23890)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.call(null,((function (G__23890,map__23882,map__23882__$1,p__$1,vec__23883,seq__23884,first__23885,seq__23884__$1,p0,pr,ps,vec__23886,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__23869_SHARP_){
return cljs$spec$op_unform.call(null,p0,p1__23869_SHARP_);
});})(G__23890,map__23882,map__23882__$1,p__$1,vec__23883,seq__23884,first__23885,seq__23884__$1,p0,pr,ps,vec__23886,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
return cljs.core.mapcat.call(null,((function (G__23890,map__23882,map__23882__$1,p__$1,vec__23883,seq__23884,first__23885,seq__23884__$1,p0,pr,ps,vec__23886,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_.call(null,x,k__$1)){
return cljs$spec$op_unform.call(null,kps.call(null,k__$1),cljs.core.get.call(null,x,k__$1));
} else {
return null;
}
});})(G__23890,map__23882,map__23882__$1,p__$1,vec__23883,seq__23884,first__23885,seq__23884__$1,p0,pr,ps,vec__23886,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,ks);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__23890)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p0,x)], null);
} else {
var vec__23891 = x;
var k__$1 = cljs.core.nth.call(null,vec__23891,(0),null);
var v = cljs.core.nth.call(null,vec__23891,(1),null);
return cljs$spec$op_unform.call(null,kps.call(null,k__$1),v);
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.add_ret = (function cljs$spec$add_ret(p,r,k){
var map__23897 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__23897__$1 = ((((!((map__23897 == null)))?((((map__23897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23897):map__23897);
var p__$1 = map__23897__$1;
var op = cljs.core.get.call(null,map__23897__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__23897__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.call(null,map__23897__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = ((function (map__23897,map__23897__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core.empty_QMARK_.call(null,ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
});})(map__23897,map__23897__$1,p__$1,op,ps,splice))
;
var G__23899 = op;
if(cljs.core._EQ_.call(null,null,G__23899)){
return r;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__23899)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__23899)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__23899)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__23899)){
return prop.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__23899)){
return prop.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.deriv = (function cljs$spec$deriv(p,x){
var map__23910 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__23910__$1 = ((((!((map__23910 == null)))?((((map__23910.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23910.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23910):map__23910);
var p__$1 = map__23910__$1;
var vec__23911 = cljs.core.get.call(null,map__23910__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__23912 = cljs.core.seq.call(null,vec__23911);
var first__23913 = cljs.core.first.call(null,seq__23912);
var seq__23912__$1 = cljs.core.next.call(null,seq__23912);
var p0 = first__23913;
var pr = seq__23912__$1;
var ps = vec__23911;
var vec__23914 = cljs.core.get.call(null,map__23910__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__23915 = cljs.core.seq.call(null,vec__23914);
var first__23916 = cljs.core.first.call(null,seq__23915);
var seq__23915__$1 = cljs.core.next.call(null,seq__23915);
var k0 = first__23916;
var kr = seq__23915__$1;
var ks = vec__23914;
var op = cljs.core.get.call(null,map__23910__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__23910__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__23910__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__23910__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__23910__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var forms = cljs.core.get.call(null,map__23910__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
if(cljs.core.truth_(p__$1)){
var G__23918 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__23918)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__23918)){
var ret__$1 = cljs.spec.dt.call(null,p__$1,x,p__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret__$1)){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__23918)){
var temp__6369__auto__ = cljs$spec$deriv.call(null,p1,x);
if(cljs.core.truth_(temp__6369__auto__)){
var p1__$1 = temp__6369__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1__$1),ps,cljs.core.next.call(null,forms));
if(cljs.core._EQ_.call(null,ret__$1,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return cljs.spec.amp_impl.call(null,p1__$1,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__23918)){
return cljs.spec.alt2.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons.call(null,cljs$spec$deriv.call(null,p0,x),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p0))?cljs$spec$deriv.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next.call(null,forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.add_ret.call(null,p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__23918)){
return cljs.spec.alt_STAR_.call(null,cljs.core.map.call(null,((function (G__23918,map__23910,map__23910__$1,p__$1,vec__23911,seq__23912,first__23913,seq__23912__$1,p0,pr,ps,vec__23914,seq__23915,first__23916,seq__23915__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__23900_SHARP_){
return cljs$spec$deriv.call(null,p1__23900_SHARP_,x);
});})(G__23918,map__23910,map__23910__$1,p__$1,vec__23911,seq__23912,first__23913,seq__23912__$1,p0,pr,ps,vec__23914,seq__23915,first__23916,seq__23915__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__23918)){
return cljs.spec.alt2.call(null,cljs.spec.rep_STAR_.call(null,cljs$spec$deriv.call(null,p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))?cljs$spec$deriv.call(null,cljs.spec.rep_STAR_.call(null,p2,p2,cljs.spec.add_ret.call(null,p1,ret,null),splice,forms),x):null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_describe = (function cljs$spec$op_describe(p){
var map__23922 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__23922__$1 = ((((!((map__23922 == null)))?((((map__23922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23922):map__23922);
var p__$1 = map__23922__$1;
var op = cljs.core.get.call(null,map__23922__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__23922__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__23922__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__23922__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__23922__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__23922__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var rep_PLUS_ = cljs.core.get.call(null,map__23922__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__23922__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
if(cljs.core.truth_(p__$1)){
var G__23924 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__23924)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__23924)){
return p__$1;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__23924)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("clojure.spec","&","clojure.spec/&",-770935491,null),cljs$spec$op_describe.call(null,p1),forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__23924)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj.call(null,(function (){var x__19083__auto__ = rep_PLUS_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19083__auto__);
})(),new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),cljs.core.mapcat.call(null,cljs.core.vector,(function (){var or__18157__auto__ = cljs.core.seq.call(null,ks);
if(or__18157__auto__){
return or__18157__auto__;
} else {
return cljs.core.repeat.call(null,new cljs.core.Keyword(null,"_","_",1453416199));
}
})(),(function (){var or__18157__auto__ = cljs.core.seq.call(null,forms);
if(or__18157__auto__){
return or__18157__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__23924)){
if(cljs.core.truth_(maybe)){
return cljs.core._conj.call(null,(function (){var x__19083__auto__ = maybe;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19083__auto__);
})(),new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","alt","cljs.spec/alt",157113396,null),cljs.core.mapcat.call(null,cljs.core.vector,ks,forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__23924)){
var x__19083__auto__ = (cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null):new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null));
return cljs.core._conj.call(null,(function (){var x__19083__auto____$1 = forms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19083__auto____$1);
})(),x__19083__auto__);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_explain = (function cljs$spec$op_explain(form,p,path,via,in$,input){
var vec__23938 = input;
var x = cljs.core.nth.call(null,vec__23938,(0),null);
var input__$1 = vec__23938;
var map__23941 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__23941__$1 = ((((!((map__23941 == null)))?((((map__23941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23941):map__23941);
var p__$1 = map__23941__$1;
var op = cljs.core.get.call(null,map__23941__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__23941__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__23941__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__23941__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__23941__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__23941__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__23941__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__6367__auto__ = cljs.spec.spec_name.call(null,p__$1);
if(cljs.core.truth_(temp__6367__auto__)){
var name = temp__6367__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__23938,x,input__$1,map__23941,map__23941__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return cljs.core.PersistentArrayMap.fromArray([path__$1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form__$1),new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
});})(vec__23938,x,input__$1,map__23941,map__23941__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__23943 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__23943)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__23943)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,form);
} else {
return cljs.spec.explain_1.call(null,form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__23943)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))){
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1));
} else {
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p1));
}
} else {
var temp__6367__auto__ = cljs.spec.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__6367__auto__)){
var p1__$1 = temp__6367__auto__;
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1__$1));
} else {
return cljs$spec$op_explain.call(null,cljs.spec.op_describe.call(null,p1),p1,path,via__$1,in$,input__$1);
}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__23943)){
var pkfs = cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__18157__auto__ = cljs.core.seq.call(null,ks);
if(or__18157__auto__){
return or__18157__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__18157__auto__ = cljs.core.seq.call(null,forms);
if(or__18157__auto__){
return or__18157__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
var vec__23944 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pkfs)))?cljs.core.first.call(null,pkfs):cljs.core.first.call(null,cljs.core.remove.call(null,((function (pkfs,G__23943,vec__23938,x,input__$1,map__23941,map__23941__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__23947){
var vec__23948 = p__23947;
var p__$2 = cljs.core.nth.call(null,vec__23948,(0),null);
return cljs.spec.accept_nil_QMARK_.call(null,p__$2);
});})(pkfs,G__23943,vec__23938,x,input__$1,map__23941,map__23941__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.call(null,vec__23944,(0),null);
var k = cljs.core.nth.call(null,vec__23944,(1),null);
var form__$1 = cljs.core.nth.call(null,vec__23944,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path);
var form__$2 = (function (){var or__18157__auto__ = form__$1;
if(cljs.core.truth_(or__18157__auto__)){
return or__18157__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})();
if((cljs.core.empty_QMARK_.call(null,input__$1)) && (cljs.core.not.call(null,pred))){
return insufficient.call(null,path__$1,form__$2);
} else {
return cljs$spec$op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__23943)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p__$1));
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (G__23943,vec__23938,x,input__$1,map__23941,map__23941__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
return cljs$spec$op_explain.call(null,(function (){var or__18157__auto__ = form__$1;
if(cljs.core.truth_(or__18157__auto__)){
return or__18157__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),via__$1,in$,input__$1);
});})(G__23943,vec__23938,x,input__$1,map__23941,map__23941__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__18157__auto__ = cljs.core.seq.call(null,ks);
if(or__18157__auto__){
return or__18157__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__18157__auto__ = cljs.core.seq.call(null,forms);
if(or__18157__auto__){
return or__18157__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__23943)){
return cljs$spec$op_explain.call(null,(((p1 === p2))?forms:cljs.spec.op_describe.call(null,p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.re_gen = (function cljs$spec$re_gen(p,overrides,path,rmap,f){
var map__23957 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__23957__$1 = ((((!((map__23957 == null)))?((((map__23957.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23957.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23957):map__23957);
var p__$1 = map__23957__$1;
var op = cljs.core.get.call(null,map__23957__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__23957__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__23957__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.call(null,map__23957__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__23957__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__23957__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__23957__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ret = cljs.core.get.call(null,map__23957__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var id = cljs.core.get.call(null,map__23957__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.inck.call(null,rmap,id):rmap);
var ggens = ((function (map__23957,map__23957__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__23957,map__23957__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__18145__auto__ = rmap__$1;
if(cljs.core.truth_(and__18145__auto__)){
var and__18145__auto____$1 = id;
if(cljs.core.truth_(and__18145__auto____$1)){
var and__18145__auto____$2 = k;
if(cljs.core.truth_(and__18145__auto____$2)){
return cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,path,k);
} else {
return and__18145__auto____$2;
}
} else {
return and__18145__auto____$1;
}
} else {
return and__18145__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (map__23957,map__23957__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (){
return cljs$spec$re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__18157__auto__ = f__$1;
if(cljs.core.truth_(or__18157__auto__)){
return or__18157__auto__;
} else {
return p__$2;
}
})());
});})(map__23957,map__23957__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
,null)));
} else {
return cljs$spec$re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__18157__auto__ = f__$1;
if(cljs.core.truth_(or__18157__auto__)){
return or__18157__auto__;
} else {
return p__$2;
}
})());
}
}
});})(map__23957,map__23957__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
;
return cljs.core.map.call(null,gen,ps__$1,(function (){var or__18157__auto__ = cljs.core.seq.call(null,ks__$1);
if(or__18157__auto__){
return or__18157__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__18157__auto__ = cljs.core.seq.call(null,forms__$1);
if(or__18157__auto__){
return or__18157__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
});})(map__23957,map__23957__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
;
var or__18157__auto__ = (function (){var temp__6369__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(temp__6369__auto__)){
var g = temp__6369__auto__;
var G__23960 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"accept","accept",1874130431),G__23960)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
if(cljs.core._EQ_.call(null,null,G__23960)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__18157__auto__)){
return or__18157__auto__;
} else {
if(cljs.core.truth_(p__$1)){
var G__23961 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__23961)){
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.spec.impl.gen.return$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null));
}
} else {
if(cljs.core._EQ_.call(null,null,G__23961)){
var temp__6369__auto__ = cljs.spec.gensub.call(null,p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__6369__auto__)){
var g = temp__6369__auto__;
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__23961)){
return cljs$spec$re_gen.call(null,p1,overrides,path,rmap__$1,cljs.spec.op_describe.call(null,p1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__23961)){
var gens = ggens.call(null,ps,ks,forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gens)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__23961)){
var gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,ggens.call(null,ps,ks,forms));
if(cljs.core.empty_QMARK_.call(null,gens)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gens);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__23961)){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
var temp__6369__auto__ = cljs$spec$re_gen.call(null,p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__6369__auto__)){
var g = temp__6369__auto__;
return cljs.spec.impl.gen.fmap.call(null,((function (g,temp__6369__auto__,G__23961,or__18157__auto__,map__23957,map__23957__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1,ggens){
return (function (p1__23951_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__23951_SHARP_);
});})(g,temp__6369__auto__,G__23961,or__18157__auto__,map__23957,map__23957__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1,ggens))
,cljs.spec.impl.gen.vector.call(null,g));
} else {
return null;
}
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
});
cljs.spec.re_conform = (function cljs$spec$re_conform(p,p__23962){
while(true){
var vec__23966 = p__23962;
var seq__23967 = cljs.core.seq.call(null,vec__23966);
var first__23968 = cljs.core.first.call(null,seq__23967);
var seq__23967__$1 = cljs.core.next.call(null,seq__23967);
var x = first__23968;
var xs = seq__23967__$1;
var data = vec__23966;
if(cljs.core.empty_QMARK_.call(null,data)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p))){
var ret = cljs.spec.preturn.call(null,p);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
var temp__6367__auto__ = cljs.spec.deriv.call(null,p,x);
if(cljs.core.truth_(temp__6367__auto__)){
var dp = temp__6367__auto__;
var G__23969 = dp;
var G__23970 = xs;
p = G__23969;
p__23962 = G__23970;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
});
cljs.spec.re_explain = (function cljs$spec$re_explain(path,via,in$,re,input){
var p = re;
var G__23984 = input;
var vec__23985 = G__23984;
var seq__23986 = cljs.core.seq.call(null,vec__23985);
var first__23987 = cljs.core.first.call(null,seq__23986);
var seq__23986__$1 = cljs.core.next.call(null,seq__23986);
var x = first__23987;
var xs = seq__23986__$1;
var data = vec__23985;
var i = (0);
var p__$1 = p;
var G__23984__$1 = G__23984;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__23988 = G__23984__$1;
var seq__23989 = cljs.core.seq.call(null,vec__23988);
var first__23990 = cljs.core.first.call(null,seq__23989);
var seq__23989__$1 = cljs.core.next.call(null,seq__23989);
var x__$1 = first__23990;
var xs__$1 = seq__23989__$1;
var data__$1 = vec__23988;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_.call(null,data__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p__$2))){
return null;
} else {
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__6367__auto__ = cljs.spec.deriv.call(null,p__$2,x__$1);
if(cljs.core.truth_(temp__6367__auto__)){
var dp = temp__6367__auto__;
var G__23991 = dp;
var G__23992 = xs__$1;
var G__23993 = (i__$2 + (1));
p__$1 = G__23991;
G__23984__$1 = G__23992;
i__$1 = G__23993;
continue;
} else {
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p__$2))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649))){
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,re)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], true, false);
}
} else {
var or__18157__auto__ = cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
if(cljs.core.truth_(or__18157__auto__)){
return or__18157__auto__;
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,p__$2)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], true, false);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.regex_spec_impl = (function cljs$spec$regex_spec_impl(re,gfn){
if(typeof cljs.spec.t_cljs$spec23997 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec23997 = (function (regex_spec_impl,re,gfn,meta23998){
this.regex_spec_impl = regex_spec_impl;
this.re = re;
this.gfn = gfn;
this.meta23998 = meta23998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec23997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23999,meta23998__$1){
var self__ = this;
var _23999__$1 = this;
return (new cljs.spec.t_cljs$spec23997(self__.regex_spec_impl,self__.re,self__.gfn,meta23998__$1));
});

cljs.spec.t_cljs$spec23997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23999){
var self__ = this;
var _23999__$1 = this;
return self__.meta23998;
});

cljs.spec.t_cljs$spec23997.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec23997.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_conform.call(null,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});

cljs.spec.t_cljs$spec23997.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_unform.call(null,self__.re,x);
});

cljs.spec.t_cljs$spec23997.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_explain.call(null,path,via,in$,self__.re,cljs.core.seq.call(null,x));
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,self__.re)),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});

cljs.spec.t_cljs$spec23997.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.re_gen.call(null,self__.re,overrides,path,rmap,cljs.spec.op_describe.call(null,self__.re));
}
});

cljs.spec.t_cljs$spec23997.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.regex_spec_impl.call(null,self__.re,gfn__$1);
});

cljs.spec.t_cljs$spec23997.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_describe.call(null,self__.re);
});

cljs.spec.t_cljs$spec23997.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"regex-spec-impl","regex-spec-impl",1541266692,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec' with a regex op argument"], null)),new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta23998","meta23998",-2020652127,null)], null);
});

cljs.spec.t_cljs$spec23997.cljs$lang$type = true;

cljs.spec.t_cljs$spec23997.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec23997";

cljs.spec.t_cljs$spec23997.cljs$lang$ctorPrWriter = (function (this__18809__auto__,writer__18810__auto__,opt__18811__auto__){
return cljs.core._write.call(null,writer__18810__auto__,"cljs.spec/t_cljs$spec23997");
});

cljs.spec.__GT_t_cljs$spec23997 = (function cljs$spec$regex_spec_impl_$___GT_t_cljs$spec23997(regex_spec_impl__$1,re__$1,gfn__$1,meta23998){
return (new cljs.spec.t_cljs$spec23997(regex_spec_impl__$1,re__$1,gfn__$1,meta23998));
});

}

return (new cljs.spec.t_cljs$spec23997(cljs$spec$regex_spec_impl,re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.call_valid_QMARK_ = (function cljs$spec$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core._EQ_.call(null,cargs,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
var ret = cljs.core.apply.call(null,f,args);
var cret = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__18145__auto__ = cljs.core.not_EQ_.call(null,cret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
if(and__18145__auto__){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.valid_QMARK_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return true;
}
} else {
return and__18145__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.validate_fn = (function cljs$spec$validate_fn(f,specs,iters){
var g = cljs.spec.gen.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.impl.gen.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__24000_SHARP_){
return cljs.spec.call_valid_QMARK_.call(null,f,specs,p1__24000_SHARP_);
});})(g))
);
var ret = cljs.spec.impl.gen.quick_check.call(null,iters,prop);
var temp__6367__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__6367__auto__)){
var vec__24004 = temp__6367__auto__;
var smallest = cljs.core.nth.call(null,vec__24004,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.fspec_impl = (function cljs$spec$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),argspec,new cljs.core.Keyword(null,"ret","ret",-468222814),retspec,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnspec], null);
if(typeof cljs.spec.t_cljs$spec24013 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.t_cljs$spec24013 = (function (fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta24014){
this.fspec_impl = fspec_impl;
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta24014 = meta24014;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec24013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_24015,meta24014__$1){
var self__ = this;
var _24015__$1 = this;
return (new cljs.spec.t_cljs$spec24013(self__.fspec_impl,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta24014__$1));
});})(specs))
;

cljs.spec.t_cljs$spec24013.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_24015){
var self__ = this;
var _24015__$1 = this;
return self__.meta24014;
});})(specs))
;

cljs.spec.t_cljs$spec24013.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.specs,k);
});})(specs))
;

cljs.spec.t_cljs$spec24013.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.specs,k,not_found);
});})(specs))
;

cljs.spec.t_cljs$spec24013.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec24013.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
if((f === cljs.spec.validate_fn.call(null,f,self__.specs,cljs.spec._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(specs))
;

cljs.spec.t_cljs$spec24013.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.t_cljs$spec24013.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
var args = cljs.spec.validate_fn.call(null,f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.call(null,f,args);
}catch (e24016){if((e24016 instanceof Error)){
var t = e24016;
return t;
} else {
throw e24016;

}
}})();
if((ret instanceof Error)){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"val","val",128701612),args,new cljs.core.Keyword(null,"reason","reason",-2070751759),ret.message,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
var cret = cljs.spec.dt.call(null,self__.retspec,ret,self__.rform);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cret)){
return cljs.spec.explain_1.call(null,self__.rform,self__.retspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"ret","ret",-468222814)),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.conform.call(null,self__.argspec,args);
return cljs.spec.explain_1.call(null,self__.fform,self__.fnspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"fn","fn",-1175266204)),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return null;
}
}
}
}
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Keyword(null,"val","val",128701612),f,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});})(specs))
;

cljs.spec.t_cljs$spec24013.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.return$.call(null,((function (___$4,specs){
return (function() { 
var G__24019__delegate = function (args){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,self__.argspec,args))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str((function (){var sb__19241__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_24017_24020 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_24018_24021 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_24017_24020,_STAR_print_fn_STAR_24018_24021,sb__19241__auto__,___$4,specs){
return (function (x__19242__auto__){
return sb__19241__auto__.append(x__19242__auto__);
});})(_STAR_print_newline_STAR_24017_24020,_STAR_print_fn_STAR_24018_24021,sb__19241__auto__,___$4,specs))
;

try{cljs.spec.explain.call(null,self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24018_24021;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24017_24020;
}
return [cljs.core.str(sb__19241__auto__)].join('');
})()),cljs.core.str("\n"),cljs.core.str("(valid? argspec args)")].join('')));
}

return cljs.spec.impl.gen.generate.call(null,cljs.spec.gen.call(null,self__.retspec));
};
var G__24019 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24022__i = 0, G__24022__a = new Array(arguments.length -  0);
while (G__24022__i < G__24022__a.length) {G__24022__a[G__24022__i] = arguments[G__24022__i + 0]; ++G__24022__i;}
  args = new cljs.core.IndexedSeq(G__24022__a,0);
} 
return G__24019__delegate.call(this,args);};
G__24019.cljs$lang$maxFixedArity = 0;
G__24019.cljs$lang$applyTo = (function (arglist__24023){
var args = cljs.core.seq(arglist__24023);
return G__24019__delegate(args);
});
G__24019.cljs$core$IFn$_invoke$arity$variadic = G__24019__delegate;
return G__24019;
})()
;})(___$4,specs))
);
}
});})(specs))
;

cljs.spec.t_cljs$spec24013.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1);
});})(specs))
;

cljs.spec.t_cljs$spec24013.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"args","args",1315556576)),(function (){var x__19083__auto__ = self__.aform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19083__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ret","ret",-468222814)),(function (){var x__19083__auto__ = self__.rform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19083__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fn","fn",-1175266204)),(function (){var x__19083__auto__ = self__.fform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19083__auto__);
})())));
});})(specs))
;

cljs.spec.t_cljs$spec24013.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fspec-impl","fspec-impl",897021908,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'fspec'"], null)),new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta24014","meta24014",-159455698,null)], null);
});})(specs))
;

cljs.spec.t_cljs$spec24013.cljs$lang$type = true;

cljs.spec.t_cljs$spec24013.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec24013";

cljs.spec.t_cljs$spec24013.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__18809__auto__,writer__18810__auto__,opt__18811__auto__){
return cljs.core._write.call(null,writer__18810__auto__,"cljs.spec/t_cljs$spec24013");
});})(specs))
;

cljs.spec.__GT_t_cljs$spec24013 = ((function (specs){
return (function cljs$spec$fspec_impl_$___GT_t_cljs$spec24013(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta24014){
return (new cljs.spec.t_cljs$spec24013(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta24014));
});})(specs))
;

}

return (new cljs.spec.t_cljs$spec24013(cljs$spec$fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.def_impl.call(null,new cljs.core.Keyword("cljs.spec","any","cljs.spec/any",1039429974),cljs.core.list(new cljs.core.Symbol("cljs.spec","spec","cljs.spec/spec",775251713,null),cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol("cljs.spec.impl.gen","any","cljs.spec.impl.gen/any",-1450752257,null)),cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true),cljs.core.constantly.call(null,true),cljs.spec.impl.gen.any,null));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("cljs.spec","kvs->map","cljs.spec/kvs->map",-1189105441),cljs.core.list(new cljs.core.Symbol("cljs.spec","conformer","cljs.spec/conformer",-236330417,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__24024#","p1__24024#",1941690159,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__24024#","p1__24024#",1941690159,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__24024#","p1__24024#",1941690159,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__24025#","p1__24025#",-692299673,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"p1__24025#","p1__24025#",-692299673,null)))),cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__24024#","p1__24024#",1941690159,null)], null),cljs.core.list(new cljs.core.Symbol(null,"zipmap","zipmap",-690049687,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__24024#","p1__24024#",1941690159,null)),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__24024#","p1__24024#",1941690159,null)))),(function (p1__24024_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),p1__24024_SHARP_),cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),p1__24024_SHARP_));
}),null,true,(function (p1__24025_SHARP_){
return cljs.core.map.call(null,(function (p__24026){
var vec__24027 = p__24026;
var k = cljs.core.nth.call(null,vec__24027,(0),null);
var v = cljs.core.nth.call(null,vec__24027,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),k,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),v], null);
}),p1__24025_SHARP_);
})));
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.exercise = (function cljs$spec$exercise(var_args){
var args24031 = [];
var len__19340__auto___24034 = arguments.length;
var i__19341__auto___24035 = (0);
while(true){
if((i__19341__auto___24035 < len__19340__auto___24034)){
args24031.push((arguments[i__19341__auto___24035]));

var G__24036 = (i__19341__auto___24035 + (1));
i__19341__auto___24035 = G__24036;
continue;
} else {
}
break;
}

var G__24033 = args24031.length;
switch (G__24033) {
case 1:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24031.length)].join('')));

}
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.exercise.call(null,spec,(10));
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.exercise.call(null,spec,n,null);
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.call(null,(function (p1__24030_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__24030_SHARP_,cljs.spec.conform.call(null,spec,p1__24030_SHARP_)],null));
}),cljs.spec.impl.gen.sample.call(null,cljs.spec.gen.call(null,spec,overrides),n));
});

cljs.spec.exercise.cljs$lang$maxFixedArity = 3;

/**
 * returns a predicate function that checks *coll-check-limit* items in a collection with pred
 */
cljs.spec.coll_checker = (function cljs$spec$coll_checker(pred){
var check_QMARK_ = (function (p1__24038_SHARP_){
return cljs.spec.valid_QMARK_.call(null,pred,p1__24038_SHARP_);
});
return ((function (check_QMARK_){
return (function (coll){
return ((coll == null)) || ((cljs.core.coll_QMARK_.call(null,coll)) && (cljs.core.every_QMARK_.call(null,check_QMARK_,cljs.core.take.call(null,cljs.spec._STAR_coll_check_limit_STAR_,coll))));
});
;})(check_QMARK_))
});
/**
 * returns a function of no args that returns a generator of
 *   collections of items conforming to pred, with the same shape as
 *   init-coll
 */
cljs.spec.coll_gen = (function cljs$spec$coll_gen(pred,init_coll){
var init = cljs.core.empty.call(null,init_coll);
return ((function (init){
return (function (){
return cljs.spec.impl.gen.fmap.call(null,((function (init){
return (function (p1__24039_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__24039_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__24039_SHARP_);
}
});})(init))
,cljs.spec.impl.gen.vector.call(null,cljs.spec.gen.call(null,pred)));
});
;})(init))
});
/**
 * Return true if inst at or after start and before end
 */
cljs.spec.inst_in_range_QMARK_ = (function cljs$spec$inst_in_range_QMARK_(start,end,inst){
var and__18145__auto__ = cljs.core.inst_QMARK_.call(null,inst);
if(and__18145__auto__){
var t = cljs.core.inst_ms.call(null,inst);
return ((cljs.core.inst_ms.call(null,start) <= t)) && ((t < cljs.core.inst_ms.call(null,end)));
} else {
return and__18145__auto__;
}
});
/**
 * Return true if start <= val and val < end
 */
cljs.spec.int_in_range_QMARK_ = (function cljs$spec$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_.call(null,val)){
return ((start <= val)) && ((val < end));
} else {
if((val instanceof goog.math.Long)){
var and__18145__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__18145__auto__)){
return val.lessThan(end);
} else {
return and__18145__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__18145__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__18145__auto__)){
return val.lessThan(end);
} else {
return and__18145__auto__;
}
} else {
return false;

}
}
}
});

//# sourceMappingURL=spec.js.map