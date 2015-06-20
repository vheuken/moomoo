// Compiled by ClojureScript 0.0-2755 {:target :nodejs}
goog.provide('cemerick.cljs.test');
goog.require('cljs.core');
goog.require('clojure.string');
cemerick.cljs.test._STAR_test_print_fn_STAR_ = null;
cemerick.cljs.test._STAR_entry_point_STAR_ = true;
cemerick.cljs.test._STAR_test_ctx_STAR_ = null;
cemerick.cljs.test.init_test_environment_STAR_ = (function init_test_environment_STAR_(aux_data){
return cljs.core.atom.call(null,cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"test","test",577538877),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0)], null),(cljs.core.truth_(cemerick.cljs.test._STAR_test_print_fn_STAR_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143),cemerick.cljs.test._STAR_test_print_fn_STAR_], null):null)),new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1505935128),cljs.core.List.EMPTY),aux_data));
});
cemerick.cljs.test.init_test_environment = (function init_test_environment(){
var G__11687 = cemerick.cljs.test.init_test_environment_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cemerick.cljs.test","test-functions","cemerick.cljs.test/test-functions",-1547551786),cljs.core.List.EMPTY], null));
cljs.core.swap_BANG_.call(null,G__11687,cljs.core.assoc,new cljs.core.Keyword(null,"async","async",1050769601),cemerick.cljs.test.init_test_environment_STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY));

return G__11687;
});
cemerick.cljs.test.registered_tests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cemerick.cljs.test.registered_test_hooks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cemerick.cljs.test.registered_fixtures = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cemerick.cljs.test.register_test_BANG_ = (function register_test_BANG_(ns,name,fn){
return cljs.core.swap_BANG_.call(null,cemerick.cljs.test.registered_tests,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null),cljs.core.assoc,name,fn);
});
cemerick.cljs.test.register_test_ns_hook_BANG_ = (function register_test_ns_hook_BANG_(ns,name){
return cljs.core.swap_BANG_.call(null,cemerick.cljs.test.registered_test_hooks,cljs.core.assoc,ns,name);
});

/**
* @constructor
* @param {*} test_env
* @param {*} test_name
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cemerick.cljs.test.TestContext = (function (test_env,test_name,__meta,__extmap,__hash){
this.test_env = test_env;
this.test_name = test_name;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cemerick.cljs.test.TestContext.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4375__auto__,k__4376__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return cljs.core._lookup.call(null,this__4375__auto____$1,k__4376__auto__,null);
});

cemerick.cljs.test.TestContext.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4377__auto__,k11689,else__4378__auto__){
var self__ = this;
var this__4377__auto____$1 = this;
var G__11691 = (((k11689 instanceof cljs.core.Keyword))?k11689.fqn:null);
switch (G__11691) {
case "test-name":
return self__.test_name;

break;
case "test-env":
return self__.test_env;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11689,else__4378__auto__);

}
});

cemerick.cljs.test.TestContext.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4389__auto__,writer__4390__auto__,opts__4391__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
var pr_pair__4392__auto__ = ((function (this__4389__auto____$1){
return (function (keyval__4393__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4390__auto__,cljs.core.pr_writer,""," ","",opts__4391__auto__,keyval__4393__auto__);
});})(this__4389__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4390__auto__,pr_pair__4392__auto__,"#cemerick.cljs.test.TestContext{",", ","}",opts__4391__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-env","test-env",-540228992),self__.test_env],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-name","test-name",-675595913),self__.test_name],null))], null),self__.__extmap));
});

cemerick.cljs.test.TestContext.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4373__auto__){
var self__ = this;
var this__4373__auto____$1 = this;
return self__.__meta;
});

cemerick.cljs.test.TestContext.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4369__auto__){
var self__ = this;
var this__4369__auto____$1 = this;
return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,self__.__meta,self__.__extmap,self__.__hash));
});

cemerick.cljs.test.TestContext.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4379__auto__){
var self__ = this;
var this__4379__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

cemerick.cljs.test.TestContext.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
var h__4193__auto__ = self__.__hash;
if(!((h__4193__auto__ == null))){
return h__4193__auto__;
} else {
var h__4193__auto____$1 = cljs.core.hash_imap.call(null,this__4370__auto____$1);
self__.__hash = h__4193__auto____$1;

return h__4193__auto____$1;
}
});

cemerick.cljs.test.TestContext.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4371__auto__,other__4372__auto__){
var self__ = this;
var this__4371__auto____$1 = this;
if(cljs.core.truth_((function (){var and__3760__auto__ = other__4372__auto__;
if(cljs.core.truth_(and__3760__auto__)){
return ((this__4371__auto____$1.constructor === other__4372__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4371__auto____$1,other__4372__auto__));
} else {
return and__3760__auto__;
}
})())){
return true;
} else {
return false;
}
});

cemerick.cljs.test.TestContext.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4384__auto__,k__4385__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"test-env","test-env",-540228992),null,new cljs.core.Keyword(null,"test-name","test-name",-675595913),null], null), null),k__4385__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4384__auto____$1),self__.__meta),k__4385__auto__);
} else {
return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4385__auto__)),null));
}
});

cemerick.cljs.test.TestContext.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4382__auto__,k__4383__auto__,G__11688){
var self__ = this;
var this__4382__auto____$1 = this;
var pred__11692 = cljs.core.keyword_identical_QMARK_;
var expr__11693 = k__4383__auto__;
if(cljs.core.truth_(pred__11692.call(null,new cljs.core.Keyword(null,"test-env","test-env",-540228992),expr__11693))){
return (new cemerick.cljs.test.TestContext(G__11688,self__.test_name,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11692.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913),expr__11693))){
return (new cemerick.cljs.test.TestContext(self__.test_env,G__11688,self__.__meta,self__.__extmap,null));
} else {
return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4383__auto__,G__11688),null));
}
}
});

cemerick.cljs.test.TestContext.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4387__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-env","test-env",-540228992),self__.test_env],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"test-name","test-name",-675595913),self__.test_name],null))], null),self__.__extmap));
});

cemerick.cljs.test.TestContext.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4374__auto__,G__11688){
var self__ = this;
var this__4374__auto____$1 = this;
return (new cemerick.cljs.test.TestContext(self__.test_env,self__.test_name,G__11688,self__.__extmap,self__.__hash));
});

cemerick.cljs.test.TestContext.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4380__auto__,entry__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4381__auto__)){
return cljs.core._assoc.call(null,this__4380__auto____$1,cljs.core._nth.call(null,entry__4381__auto__,(0)),cljs.core._nth.call(null,entry__4381__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4380__auto____$1,entry__4381__auto__);
}
});

cemerick.cljs.test.TestContext.cljs$lang$type = true;

cemerick.cljs.test.TestContext.cljs$lang$ctorPrSeq = (function (this__4409__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cemerick.cljs.test/TestContext");
});

cemerick.cljs.test.TestContext.cljs$lang$ctorPrWriter = (function (this__4409__auto__,writer__4410__auto__){
return cljs.core._write.call(null,writer__4410__auto__,"cemerick.cljs.test/TestContext");
});

cemerick.cljs.test.__GT_TestContext = (function __GT_TestContext(test_env,test_name){
return (new cemerick.cljs.test.TestContext(test_env,test_name,null,null,null));
});

cemerick.cljs.test.map__GT_TestContext = (function map__GT_TestContext(G__11690){
return (new cemerick.cljs.test.TestContext(new cljs.core.Keyword(null,"test-env","test-env",-540228992).cljs$core$IFn$_invoke$arity$1(G__11690),new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(G__11690),null,cljs.core.dissoc.call(null,G__11690,new cljs.core.Keyword(null,"test-env","test-env",-540228992),new cljs.core.Keyword(null,"test-name","test-name",-675595913)),null));
});

cemerick.cljs.test.maybe_deref = (function maybe_deref(x){
if((function (){var G__11697 = x;
if(G__11697){
var bit__4453__auto__ = (G__11697.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4453__auto__) || (G__11697.cljs$core$IDeref$)){
return true;
} else {
if((!G__11697.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__11697);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__11697);
}
})()){
return cljs.core.deref.call(null,x);
} else {
return x;
}
});
cemerick.cljs.test.testing_complete_QMARK_ = (function testing_complete_QMARK_(test_env){
var map__11699 = cemerick.cljs.test.maybe_deref.call(null,test_env);
var map__11699__$1 = ((cljs.core.seq_QMARK_.call(null,map__11699))?cljs.core.apply.call(null,cljs.core.hash_map,map__11699):map__11699);
var remaining = cljs.core.get.call(null,map__11699__$1,new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312));
var running = cljs.core.get.call(null,map__11699__$1,new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",-1954037558));
var async = cljs.core.get.call(null,map__11699__$1,new cljs.core.Keyword(null,"async","async",1050769601));
var and__3760__auto__ = cljs.core.empty_QMARK_.call(null,remaining);
if(and__3760__auto__){
var and__3760__auto____$1 = cljs.core.empty_QMARK_.call(null,running);
if(and__3760__auto____$1){
var or__3772__auto__ = (async == null);
if(or__3772__auto__){
return or__3772__auto__;
} else {
return testing_complete_QMARK_.call(null,async);
}
} else {
return and__3760__auto____$1;
}
} else {
return and__3760__auto__;
}
});
/**
* Registers a watcher on the :async testing (sub)environment provided by
* [test-env]; when its key metrics (:test, :pass, :fail, :error) change,
* [callback] will be called with [test-env].  The watcher will be removed when all
* tests are complete.
* 
* If [test-env] is already complete, [callback] will be called with it as an
* argument immediately, and no watcher will be registered.
*/
cemerick.cljs.test.on_async_progress = (function on_async_progress(test_env,callback){
if(cljs.core.truth_(cemerick.cljs.test.testing_complete_QMARK_.call(null,test_env))){
setTimeout((function (){
return callback.call(null,test_env);
}),(1));
} else {
cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cemerick.cljs.test.maybe_deref.call(null,test_env)),cljs.core.gensym.call(null,"on-progress"),(function (key,ref,old,new$){
var vec__11702 = cljs.core.map.call(null,(function (p1__11700_SHARP_){
return cljs.core.select_keys.call(null,p1__11700_SHARP_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"error","error",-978969032)], null));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old,new$], null));
var oldv = cljs.core.nth.call(null,vec__11702,(0),null);
var newv = cljs.core.nth.call(null,vec__11702,(1),null);
var complete_QMARK_ = cemerick.cljs.test.testing_complete_QMARK_.call(null,new$);
if(cljs.core.truth_((function (){var or__3772__auto__ = complete_QMARK_;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return cljs.core.not_EQ_.call(null,oldv,newv);
}
})())){
callback.call(null,cemerick.cljs.test.maybe_deref.call(null,test_env));
} else {
}

if(cljs.core.truth_(complete_QMARK_)){
return cljs.core.remove_watch.call(null,ref,key);
} else {
return null;
}
}));
}

return test_env;
});
goog.exportSymbol('cemerick.cljs.test.on_async_progress', cemerick.cljs.test.on_async_progress);
/**
* Same as `on-async-progress`, but will only call [callback] when all tests are complete.
*/
cemerick.cljs.test.on_testing_complete = (function on_testing_complete(test_env,callback){
return cemerick.cljs.test.on_async_progress.call(null,test_env,(function (test_env__$1){
if(cljs.core.truth_(cemerick.cljs.test.testing_complete_QMARK_.call(null,test_env__$1))){
return callback.call(null,test_env__$1);
} else {
return null;
}
}));
});
goog.exportSymbol('cemerick.cljs.test.on_testing_complete', cemerick.cljs.test.on_testing_complete);
/**
* Returns a string representation of the current test.  Renders names
* in the test environment's ::test-functions list, then the source file and line of
* current assertion.
*/
cemerick.cljs.test.testing_vars_str = (function testing_vars_str(p__11703){
var map__11705 = p__11703;
var map__11705__$1 = ((cljs.core.seq_QMARK_.call(null,map__11705))?cljs.core.apply.call(null,cljs.core.hash_map,map__11705):map__11705);
var m = map__11705__$1;
var test_name = cljs.core.get.call(null,map__11705__$1,new cljs.core.Keyword(null,"test-name","test-name",-675595913));
var test_env = cljs.core.get.call(null,map__11705__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));
var line = cljs.core.get.call(null,map__11705__$1,new cljs.core.Keyword(null,"line","line",212345235));
var file = cljs.core.get.call(null,map__11705__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return [cljs.core.str(cljs.core.pr_str.call(null,(function (){var or__3772__auto__ = cljs.core.seq.call(null,cljs.core.reverse.call(null,new cljs.core.Keyword("cemerick.cljs.test","test-functions","cemerick.cljs.test/test-functions",-1547551786).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env))));
if(or__3772__auto__){
return or__3772__auto__;
} else {
return cljs.core._conj.call(null,cljs.core.List.EMPTY,test_name);
}
})())),cljs.core.str(" ("),cljs.core.str(file),cljs.core.str(":"),cljs.core.str(line),cljs.core.str(")")].join('');
});
/**
* Returns a string representation of the current test context as represented in
* the [test-env]'s ::test-contexts list. Joins strings in that list with
* spaces.
*/
cemerick.cljs.test.testing_contexts_str = (function testing_contexts_str(test_env){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.reverse.call(null,new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1505935128).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)))));
});
/**
* Increments the named counter in the [test-env] atom.
*/
cemerick.cljs.test.inc_report_counter = (function inc_report_counter(test_env,name){
return cljs.core.swap_BANG_.call(null,test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null),cljs.core.fnil.call(null,cljs.core.inc,(0)));
});
/**
* Generic reporting function, may be overridden to plug in
* different report formats (e.g., TAP, JUnit).  Assertions such as
* 'is' call 'report' to indicate results.  The argument given to
* 'report' will be a map with a :type key.  See the documentation at
* the top of test_is.clj for more information on the types of
* arguments for 'report'.
*/
cemerick.cljs.test.report = (function (){var method_table__4669__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4670__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4671__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4673__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cemerick.cljs.test","report"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4673__auto__,method_table__4669__auto__,prefer_table__4670__auto__,method_cache__4671__auto__,cached_hierarchy__4672__auto__));
})();
cemerick.cljs.test.file_and_line = (function file_and_line(error){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),error.fileName,new cljs.core.Keyword(null,"line","line",212345235),error.lineNumber], null);
});
/**
* Add file and line information to a test result and call report.
* If you are writing a custom assert-expr method, call this function
* to pass test results to report.
*/
cemerick.cljs.test.do_report = (function() {
var do_report = null;
var do_report__1 = (function (m){
return cemerick.cljs.test.report.call(null,(function (){var G__11710 = (((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m).fqn:null);
switch (G__11710) {
case "error":
return cljs.core.merge.call(null,cemerick.cljs.test.file_and_line.call(null,new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m)),m);

break;
case "fail":
return cljs.core.merge.call(null,cemerick.cljs.test.file_and_line.call(null,Error()),m);

break;
default:
return m;

}
})());
});
var do_report__2 = (function (p__11706,m){
var map__11709 = p__11706;
var map__11709__$1 = ((cljs.core.seq_QMARK_.call(null,map__11709))?cljs.core.apply.call(null,cljs.core.hash_map,map__11709):map__11709);
var test_ctx = map__11709__$1;
var test_name = cljs.core.get.call(null,map__11709__$1,new cljs.core.Keyword(null,"test-name","test-name",-675595913));
var test_env = cljs.core.get.call(null,map__11709__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));
if((test_ctx instanceof cemerick.cljs.test.TestContext)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"TestContext","TestContext",-1631381989,null),new cljs.core.Symbol(null,"test-ctx","test-ctx",-185362578,null))))].join('')));
}

return do_report.call(null,cljs.core.merge.call(null,m,test_ctx));
});
do_report = function(p__11706,m){
switch(arguments.length){
case 1:
return do_report__1.call(this,p__11706);
case 2:
return do_report__2.call(this,p__11706,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
do_report.cljs$core$IFn$_invoke$arity$1 = do_report__1;
do_report.cljs$core$IFn$_invoke$arity$2 = do_report__2;
return do_report;
})()
;
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__11712){
var map__11713 = p__11712;
var map__11713__$1 = ((cljs.core.seq_QMARK_.call(null,map__11713))?cljs.core.apply.call(null,cljs.core.hash_map,map__11713):map__11713);
var m = map__11713__$1;
var test_env = cljs.core.get.call(null,map__11713__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));
var _STAR_print_fn_STAR_11714 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = (function (){var or__3772__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return cljs.core._STAR_print_fn_STAR_;
}
})();

try{return cljs.core.prn.call(null,m);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_11714;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (p__11715){
var map__11716 = p__11715;
var map__11716__$1 = ((cljs.core.seq_QMARK_.call(null,map__11716))?cljs.core.apply.call(null,cljs.core.hash_map,map__11716):map__11716);
var m = map__11716__$1;
var test_env = cljs.core.get.call(null,map__11716__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));
var _STAR_print_fn_STAR_11717 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = (function (){var or__3772__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return cljs.core._STAR_print_fn_STAR_;
}
})();

try{return cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"pass","pass",1574159993));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_11717;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (p__11718){
var map__11719 = p__11718;
var map__11719__$1 = ((cljs.core.seq_QMARK_.call(null,map__11719))?cljs.core.apply.call(null,cljs.core.hash_map,map__11719):map__11719);
var m = map__11719__$1;
var test_env = cljs.core.get.call(null,map__11719__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));
var _STAR_print_fn_STAR_11720 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = (function (){var or__3772__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return cljs.core._STAR_print_fn_STAR_;
}
})();

try{cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"fail","fail",1706214930));

cljs.core.println.call(null,"\nFAIL in",cemerick.cljs.test.testing_vars_str.call(null,m));

if(cljs.core.seq.call(null,new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1505935128).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)))){
cljs.core.println.call(null,cemerick.cljs.test.testing_contexts_str.call(null,test_env));
} else {
}

var temp__4126__auto___11721 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto___11721)){
var message_11722 = temp__4126__auto___11721;
cljs.core.println.call(null,message_11722);
} else {
}

cljs.core.println.call(null,"expected:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(m)));

return cljs.core.println.call(null,"  actual:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m)));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_11720;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"error","error",-978969032),(function (p__11723){
var map__11724 = p__11723;
var map__11724__$1 = ((cljs.core.seq_QMARK_.call(null,map__11724))?cljs.core.apply.call(null,cljs.core.hash_map,map__11724):map__11724);
var m = map__11724__$1;
var test_env = cljs.core.get.call(null,map__11724__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));
var _STAR_print_fn_STAR_11725 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = (function (){var or__3772__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return cljs.core._STAR_print_fn_STAR_;
}
})();

try{cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"error","error",-978969032));

cljs.core.println.call(null,"\nERROR in",cemerick.cljs.test.testing_vars_str.call(null,m));

if(cljs.core.seq.call(null,new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1505935128).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)))){
cljs.core.println.call(null,cemerick.cljs.test.testing_contexts_str.call(null,test_env));
} else {
}

var temp__4126__auto___11726 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto___11726)){
var message_11727 = temp__4126__auto___11726;
cljs.core.println.call(null,message_11727);
} else {
}

cljs.core.println.call(null,"expected:",cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"expected","expected",1583670997).cljs$core$IFn$_invoke$arity$1(m)));

cljs.core.print.call(null,"  actual: ");

var actual = new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m);
if((actual instanceof Error)){
return cljs.core.println.call(null,actual.stack);
} else {
return cljs.core.prn.call(null,actual);
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_11725;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"multiple-async-done","multiple-async-done",910410709),(function (p__11728){
var map__11729 = p__11728;
var map__11729__$1 = ((cljs.core.seq_QMARK_.call(null,map__11729))?cljs.core.apply.call(null,cljs.core.hash_map,map__11729):map__11729);
var m = map__11729__$1;
var test_env = cljs.core.get.call(null,map__11729__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));
var _STAR_print_fn_STAR_11730 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = (function (){var or__3772__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return cljs.core._STAR_print_fn_STAR_;
}
})();

try{cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"multiple-async-done","multiple-async-done",910410709));

cljs.core.println.call(null,"\nWARNING in",cemerick.cljs.test.testing_vars_str.call(null,m));

if(cljs.core.seq.call(null,new cljs.core.Keyword("cemerick.cljs.test","test-contexts","cemerick.cljs.test/test-contexts",1505935128).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)))){
cljs.core.println.call(null,cemerick.cljs.test.testing_contexts_str.call(null,test_env));
} else {
}

var temp__4126__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var message = temp__4126__auto__;
return cljs.core.println.call(null,message);
} else {
return null;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_11730;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"summary","summary",380847952),(function (p__11731){
var map__11732 = p__11731;
var map__11732__$1 = ((cljs.core.seq_QMARK_.call(null,map__11732))?cljs.core.apply.call(null,cljs.core.hash_map,map__11732):map__11732);
var test_env = map__11732__$1;
var async = cljs.core.get.call(null,map__11732__$1,new cljs.core.Keyword(null,"async","async",1050769601));
var error = cljs.core.get.call(null,map__11732__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var fail = cljs.core.get.call(null,map__11732__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__11732__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var test = cljs.core.get.call(null,map__11732__$1,new cljs.core.Keyword(null,"test","test",577538877));
var _STAR_print_fn_STAR_11733 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = (function (){var or__3772__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return cljs.core._STAR_print_fn_STAR_;
}
})();

try{var pending_count = (function (){var and__3760__auto__ = cljs.core.not.call(null,cemerick.cljs.test.testing_complete_QMARK_.call(null,test_env));
if(and__3760__auto__){
return cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.count,cljs.core.juxt.call(null,new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312),new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",-1954037558)).call(null,cljs.core.deref.call(null,async))));
} else {
return and__3760__auto__;
}
})();
cljs.core.println.call(null,"\nRan",test,(cljs.core.truth_(pending_count)?"synchronous":""),"tests containing",((pass + fail) + error),"assertions.");

cljs.core.println.call(null,"Testing complete:",fail,"failures,",error,"errors.");

if(cljs.core.truth_(pending_count)){
return cljs.core.println.call(null,"Waiting on",pending_count,[cljs.core.str("asynchronous test"),cljs.core.str((((pending_count > (1)))?"s":null)),cljs.core.str(" to complete.")].join(''));
} else {
return null;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_11733;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),(function (p__11734){
var map__11735 = p__11734;
var map__11735__$1 = ((cljs.core.seq_QMARK_.call(null,map__11735))?cljs.core.apply.call(null,cljs.core.hash_map,map__11735):map__11735);
var m = map__11735__$1;
var async = cljs.core.get.call(null,map__11735__$1,new cljs.core.Keyword(null,"async","async",1050769601));
var test_env = cljs.core.get.call(null,map__11735__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));
var ns = cljs.core.get.call(null,map__11735__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var _STAR_print_fn_STAR_11736 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_fn_STAR_ = (function (){var or__3772__auto__ = new cljs.core.Keyword("cemerick.cljs.test","test-print-fn","cemerick.cljs.test/test-print-fn",-2097998143).cljs$core$IFn$_invoke$arity$1(test_env);
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return cljs.core._STAR_print_fn_STAR_;
}
})();

try{return cljs.core.println.call(null,"\nTesting",ns,(cljs.core.truth_(async)?"(async)":""));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_11736;
}}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),(function (p__11737){
var map__11738 = p__11737;
var map__11738__$1 = ((cljs.core.seq_QMARK_.call(null,map__11738))?cljs.core.apply.call(null,cljs.core.hash_map,map__11738):map__11738);
var m = map__11738__$1;
var test_env = cljs.core.get.call(null,map__11738__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));
return null;
}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100),(function (p__11739){
var map__11740 = p__11739;
var map__11740__$1 = ((cljs.core.seq_QMARK_.call(null,map__11740))?cljs.core.apply.call(null,cljs.core.hash_map,map__11740):map__11740);
var m = map__11740__$1;
var test_env = cljs.core.get.call(null,map__11740__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));
return null;
}));
cljs.core._add_method.call(null,cemerick.cljs.test.report,new cljs.core.Keyword(null,"end-test-var","end-test-var",984198545),(function (p__11741){
var map__11742 = p__11741;
var map__11742__$1 = ((cljs.core.seq_QMARK_.call(null,map__11742))?cljs.core.apply.call(null,cljs.core.hash_map,map__11742):map__11742);
var m = map__11742__$1;
var test_env = cljs.core.get.call(null,map__11742__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));
return null;
}));
/**
* Wrap test runs in a fixture function to perform setup and
* teardown. Using a fixture-type of :each wraps every test
* individually, while :once wraps the whole run in a single function.
* @param {...*} var_args
*/
cemerick.cljs.test.register_fixtures_BANG_ = (function() { 
var register_fixtures_BANG___delegate = function (ns_sym,fixture_type,fixture_fns){
return cljs.core.swap_BANG_.call(null,cemerick.cljs.test.registered_fixtures,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_sym,fixture_type], null),cljs.core.constantly.call(null,fixture_fns));
};
var register_fixtures_BANG_ = function (ns_sym,fixture_type,var_args){
var fixture_fns = null;
if (arguments.length > 2) {
var G__11743__i = 0, G__11743__a = new Array(arguments.length -  2);
while (G__11743__i < G__11743__a.length) {G__11743__a[G__11743__i] = arguments[G__11743__i + 2]; ++G__11743__i;}
  fixture_fns = new cljs.core.IndexedSeq(G__11743__a,0);
} 
return register_fixtures_BANG___delegate.call(this,ns_sym,fixture_type,fixture_fns);};
register_fixtures_BANG_.cljs$lang$maxFixedArity = 2;
register_fixtures_BANG_.cljs$lang$applyTo = (function (arglist__11744){
var ns_sym = cljs.core.first(arglist__11744);
arglist__11744 = cljs.core.next(arglist__11744);
var fixture_type = cljs.core.first(arglist__11744);
var fixture_fns = cljs.core.rest(arglist__11744);
return register_fixtures_BANG___delegate(ns_sym,fixture_type,fixture_fns);
});
register_fixtures_BANG_.cljs$core$IFn$_invoke$arity$variadic = register_fixtures_BANG___delegate;
return register_fixtures_BANG_;
})()
;
/**
* The default, empty, fixture function.  Just calls its argument.
*/
cemerick.cljs.test.default_fixture = (function default_fixture(f){
return f.call(null);
});
/**
* Composes two fixture functions, creating a new fixture function
* that combines their behavior.
*/
cemerick.cljs.test.compose_fixtures = (function compose_fixtures(f1,f2){
return (function (g){
return f1.call(null,(function (){
return f2.call(null,g);
}));
});
});
/**
* Composes a collection of fixtures, in order.  Always returns a valid
* fixture function, even if the collection is empty.
*/
cemerick.cljs.test.join_fixtures = (function join_fixtures(fixtures){
return cljs.core.reduce.call(null,cemerick.cljs.test.compose_fixtures,cemerick.cljs.test.default_fixture,fixtures);
});
cemerick.cljs.test.async_test_QMARK_ = (function async_test_QMARK_(test_fn){
return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,test_fn)));
});
cemerick.cljs.test.test_async_fn = (function test_async_fn(async_test_env,test_name,test_fn){
cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100),new cljs.core.Keyword(null,"var","var",-769682797),test_fn,new cljs.core.Keyword(null,"test-env","test-env",-540228992),async_test_env,new cljs.core.Keyword(null,"test-name","test-name",-675595913),test_name], null));

cemerick.cljs.test.inc_report_counter.call(null,async_test_env,new cljs.core.Keyword(null,"test","test",577538877));

return test_fn.call(null,(new cemerick.cljs.test.TestContext(async_test_env,test_name,null,null,null)));
});
cemerick.cljs.test.start_next_async_test = (function start_next_async_test(async_test_env){
var next_test = cljs.core.atom.call(null,(function (){
return null;
}));
cljs.core.swap_BANG_.call(null,async_test_env,((function (next_test){
return (function (env){
var temp__4124__auto__ = (function (){var and__3760__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"stop","stop",-2140911342).cljs$core$IFn$_invoke$arity$1(env));
if(and__3760__auto__){
return cljs.core.first.call(null,new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312).cljs$core$IFn$_invoke$arity$1(env));
} else {
return and__3760__auto__;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var vec__11746 = temp__4124__auto__;
var name = cljs.core.nth.call(null,vec__11746,(0),null);
var testfn = cljs.core.nth.call(null,vec__11746,(1),null);
cljs.core.reset_BANG_.call(null,next_test,testfn);

var ns_11747 = cljs.core.namespace.call(null,name);
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,async_test_env)),ns_11747)){
} else {
cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns_11747,new cljs.core.Keyword(null,"test-env","test-env",-540228992),async_test_env,new cljs.core.Keyword(null,"async","async",1050769601),true], null));

cljs.core.alter_meta_BANG_.call(null,async_test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469)], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),ns_11747);
}

return cljs.core.update_in.call(null,cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312)], null),cljs.core.dissoc,name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",-1954037558)], null),cljs.core.assoc,name,(new Date()));
} else {
return env;
}
});})(next_test))
);

setTimeout(((function (next_test){
return (function (){
return cljs.core.deref.call(null,next_test).call(null);
});})(next_test))
,(1));

return async_test_env;
});
/**
* Removes framework-internal bits from a test environment for more pleasant human viewing.
*/
cemerick.cljs.test.squelch_internals = (function squelch_internals(test_env){
var G__11752 = test_env;
cljs.core.swap_BANG_.call(null,G__11752,((function (G__11752){
return (function (p1__11748_SHARP_){
return cljs.core.reduce.call(null,((function (G__11752){
return (function (env,p__11753){
var vec__11754 = p__11753;
var k = cljs.core.nth.call(null,vec__11754,(0),null);
var v = cljs.core.nth.call(null,vec__11754,(1),null);
if(cljs.core._EQ_.call(null,cljs.core.namespace.call(null,k),cljs.core.namespace.call(null,new cljs.core.Keyword("cemerick.cljs.test","foo","cemerick.cljs.test/foo",-1669146357)))){
return env;
} else {
return cljs.core.assoc.call(null,env,k,v);
}
});})(G__11752))
,cljs.core.PersistentArrayMap.EMPTY,p1__11748_SHARP_);
});})(G__11752))
);

return G__11752;
});
cemerick.cljs.test.finish_test_entry_point = (function finish_test_entry_point(entry_point_QMARK_,test_env){
if(cljs.core.truth_(entry_point_QMARK_)){
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)))))){
cljs.core.swap_BANG_.call(null,test_env,cljs.core.dissoc,new cljs.core.Keyword(null,"async","async",1050769601));
} else {
cemerick.cljs.test.start_next_async_test.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)));
}

return cljs.core.deref.call(null,cemerick.cljs.test.squelch_internals.call(null,test_env));
} else {
return test_env;
}
});
cemerick.cljs.test.schedule_async_test = (function schedule_async_test(async_test_env,test_name,test_fn){
cljs.core.swap_BANG_.call(null,async_test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","remaining","cemerick.cljs.test/remaining",-1491651312)], null),cljs.core.fnil.call(null,cljs.core.assoc,cljs.core.sorted_map.call(null)),test_name,cljs.core.with_meta.call(null,(function (){
return cemerick.cljs.test.test_async_fn.call(null,async_test_env,test_name,test_fn);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),test_name], null)));

return async_test_env;
});
cemerick.cljs.test.done_STAR_ = (function() {
var done_STAR_ = null;
var done_STAR___1 = (function (p__11756){
var map__11760 = p__11756;
var map__11760__$1 = ((cljs.core.seq_QMARK_.call(null,map__11760))?cljs.core.apply.call(null,cljs.core.hash_map,map__11760):map__11760);
var test_ctx = map__11760__$1;
var test_name = cljs.core.get.call(null,map__11760__$1,new cljs.core.Keyword(null,"test-name","test-name",-675595913));
var async_test_env = cljs.core.get.call(null,map__11760__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));
if((test_ctx instanceof cemerick.cljs.test.TestContext)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"TestContext","TestContext",-1631381989,null),new cljs.core.Symbol(null,"test-ctx","test-ctx",-185362578,null))))].join('')));
}

var first_call_QMARK_ = cljs.core.atom.call(null,false);
cljs.core.swap_BANG_.call(null,async_test_env,((function (first_call_QMARK_,map__11760,map__11760__$1,test_ctx,test_name,async_test_env){
return (function (env){
cljs.core.reset_BANG_.call(null,first_call_QMARK_,cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",-1954037558).cljs$core$IFn$_invoke$arity$1(env),test_name));

return cljs.core.update_in.call(null,env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","running","cemerick.cljs.test/running",-1954037558)], null),cljs.core.dissoc,test_name);
});})(first_call_QMARK_,map__11760,map__11760__$1,test_ctx,test_name,async_test_env))
);

if(cljs.core.truth_(cljs.core.deref.call(null,first_call_QMARK_))){
cemerick.cljs.test.do_report.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-var","end-test-var",984198545),new cljs.core.Keyword(null,"var","var",-769682797),test_name], null),test_ctx));

if(cljs.core.truth_(cemerick.cljs.test.testing_complete_QMARK_.call(null,async_test_env))){
cemerick.cljs.test.squelch_internals.call(null,async_test_env);
} else {
cemerick.cljs.test.start_next_async_test.call(null,async_test_env);
}
} else {
cemerick.cljs.test.do_report.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"multiple-async-done","multiple-async-done",910410709),new cljs.core.Keyword(null,"message","message",-406056002),"`(done)` called multiple times to signal end-of-test"], null),test_ctx));
}

return async_test_env;
});
var done_STAR___2 = (function (p__11755,error){
var map__11759 = p__11755;
var map__11759__$1 = ((cljs.core.seq_QMARK_.call(null,map__11759))?cljs.core.apply.call(null,cljs.core.hash_map,map__11759):map__11759);
var test_ctx = map__11759__$1;
var test_name = cljs.core.get.call(null,map__11759__$1,new cljs.core.Keyword(null,"test-name","test-name",-675595913));
var test_env = cljs.core.get.call(null,map__11759__$1,new cljs.core.Keyword(null,"test-env","test-env",-540228992));
if((test_ctx instanceof cemerick.cljs.test.TestContext)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),new cljs.core.Symbol(null,"TestContext","TestContext",-1631381989,null),new cljs.core.Symbol(null,"test-ctx","test-ctx",-185362578,null))))].join('')));
}

cemerick.cljs.test.do_report.call(null,cemerick.cljs.test.do_report.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002),"Uncaught exception, not in assertion.",new cljs.core.Keyword(null,"expected","expected",1583670997),null,new cljs.core.Keyword(null,"actual","actual",107306363),error], null),test_ctx)));

return done_STAR_.call(null,test_ctx);
});
done_STAR_ = function(p__11755,error){
switch(arguments.length){
case 1:
return done_STAR___1.call(this,p__11755);
case 2:
return done_STAR___2.call(this,p__11755,error);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
done_STAR_.cljs$core$IFn$_invoke$arity$1 = done_STAR___1;
done_STAR_.cljs$core$IFn$_invoke$arity$2 = done_STAR___2;
return done_STAR_;
})()
;
cemerick.cljs.test.stop = (function stop(async_test_env){
return cljs.core.swap_BANG_.call(null,async_test_env,cljs.core.assoc,new cljs.core.Keyword(null,"stop","stop",-2140911342),true);
});
/**
* If v has a function in its :test metadata, calls that function,
* conjing its name into the test environment's ::test-functions list.
* 
* Note that this is the implementation of `test-var` in clojure.test,
* which is a macro in clojurescript.test.  See `cemerick.cljs.test/test-var`
* in the Clojure file for `test-var`.
*/
cemerick.cljs.test.test_function = (function() {
var test_function = null;
var test_function__1 = (function (v){
return test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),v);
});
var test_function__2 = (function (test_env,v){
var entry_point_QMARK___5415__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;
var _STAR_entry_point_STAR_11764 = cemerick.cljs.test._STAR_entry_point_STAR_;
cemerick.cljs.test._STAR_entry_point_STAR_ = false;

try{if(cljs.core.fn_QMARK_.call(null,v)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("test-var must be passed the function to be tested (not a symbol naming it)"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"v","v",1661996586,null))))].join('')));
}

var map__11765_11767 = cljs.core.meta.call(null,v);
var map__11765_11768__$1 = ((cljs.core.seq_QMARK_.call(null,map__11765_11767))?cljs.core.apply.call(null,cljs.core.hash_map,map__11765_11767):map__11765_11767);
var t_11769 = cljs.core.get.call(null,map__11765_11768__$1,new cljs.core.Keyword(null,"test","test",577538877));
var test_name_11770 = cljs.core.get.call(null,map__11765_11768__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var async_QMARK__11771 = cljs.core.get.call(null,map__11765_11768__$1,new cljs.core.Keyword(null,"async","async",1050769601));
if(cljs.core.truth_(t_11769)){
if(cljs.core.truth_(async_QMARK__11771)){
cemerick.cljs.test.schedule_async_test.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)),test_name_11770,t_11769);
} else {
try{cljs.core.swap_BANG_.call(null,test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","test-functions","cemerick.cljs.test/test-functions",-1547551786)], null),cljs.core.conj,(function (){var or__3772__auto__ = test_name_11770;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return v;
}
})());

cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-var","begin-test-var",-908571100),new cljs.core.Keyword(null,"var","var",-769682797),v,new cljs.core.Keyword(null,"test-env","test-env",-540228992),test_env,new cljs.core.Keyword(null,"test-name","test-name",-675595913),test_name_11770], null));

cemerick.cljs.test.inc_report_counter.call(null,test_env,new cljs.core.Keyword(null,"test","test",577538877));

try{t_11769.call(null,(new cemerick.cljs.test.TestContext(test_env,test_name_11770,null,null,null)));
}catch (e11766){if((e11766 instanceof Error)){
var e_11772 = e11766;
cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"message","message",-406056002),"Uncaught exception, not in assertion.",new cljs.core.Keyword(null,"test-env","test-env",-540228992),test_env,new cljs.core.Keyword(null,"test-name","test-name",-675595913),test_name_11770,new cljs.core.Keyword(null,"expected","expected",1583670997),null,new cljs.core.Keyword(null,"actual","actual",107306363),e_11772], null));
} else {
throw e11766;

}
}
cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-var","end-test-var",984198545),new cljs.core.Keyword(null,"var","var",-769682797),v,new cljs.core.Keyword(null,"test-env","test-env",-540228992),test_env,new cljs.core.Keyword(null,"test-name","test-name",-675595913),test_name_11770], null));
}finally {cljs.core.swap_BANG_.call(null,test_env,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cemerick.cljs.test","test-functions","cemerick.cljs.test/test-functions",-1547551786)], null),cljs.core.pop);
}}
} else {
}

return cemerick.cljs.test.finish_test_entry_point.call(null,entry_point_QMARK___5415__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_11764;
}});
test_function = function(test_env,v){
switch(arguments.length){
case 1:
return test_function__1.call(this,test_env);
case 2:
return test_function__2.call(this,test_env,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
test_function.cljs$core$IFn$_invoke$arity$1 = test_function__1;
test_function.cljs$core$IFn$_invoke$arity$2 = test_function__2;
return test_function;
})()
;
/**
* Calls test-var on every var interned in the namespace, with fixtures.
*/
cemerick.cljs.test.test_all_vars = (function() {
var test_all_vars = null;
var test_all_vars__1 = (function (ns_sym){
return test_all_vars.call(null,cemerick.cljs.test.init_test_environment.call(null),ns_sym);
});
var test_all_vars__2 = (function (test_env,ns_sym){
var entry_point_QMARK___5415__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;
var _STAR_entry_point_STAR_11781 = cemerick.cljs.test._STAR_entry_point_STAR_;
cemerick.cljs.test._STAR_entry_point_STAR_ = false;

try{var tests_11786 = cljs.core.filter.call(null,((function (_STAR_entry_point_STAR_11781,entry_point_QMARK___5415__auto__){
return (function (p1__11773_SHARP_){
return new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p1__11773_SHARP_));
});})(_STAR_entry_point_STAR_11781,entry_point_QMARK___5415__auto__))
,cljs.core.vals.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_tests),ns_sym)));
var once_fixture_fn_11787 = cemerick.cljs.test.join_fixtures.call(null,new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(ns_sym.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_fixtures))));
var each_fixture_fn_11788 = cemerick.cljs.test.join_fixtures.call(null,new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(ns_sym.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_fixtures))));
once_fixture_fn_11787.call(null,((function (once_fixture_fn_11787,each_fixture_fn_11788,tests_11786,_STAR_entry_point_STAR_11781,entry_point_QMARK___5415__auto__){
return (function (){
var seq__11782 = cljs.core.seq.call(null,cljs.core.remove.call(null,cemerick.cljs.test.async_test_QMARK_,tests_11786));
var chunk__11783 = null;
var count__11784 = (0);
var i__11785 = (0);
while(true){
if((i__11785 < count__11784)){
var v = cljs.core._nth.call(null,chunk__11783,i__11785);
each_fixture_fn_11788.call(null,((function (seq__11782,chunk__11783,count__11784,i__11785,v,once_fixture_fn_11787,each_fixture_fn_11788,tests_11786,_STAR_entry_point_STAR_11781,entry_point_QMARK___5415__auto__){
return (function (){
return cemerick.cljs.test.test_function.call(null,test_env,v);
});})(seq__11782,chunk__11783,count__11784,i__11785,v,once_fixture_fn_11787,each_fixture_fn_11788,tests_11786,_STAR_entry_point_STAR_11781,entry_point_QMARK___5415__auto__))
);

var G__11789 = seq__11782;
var G__11790 = chunk__11783;
var G__11791 = count__11784;
var G__11792 = (i__11785 + (1));
seq__11782 = G__11789;
chunk__11783 = G__11790;
count__11784 = G__11791;
i__11785 = G__11792;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__11782);
if(temp__4126__auto__){
var seq__11782__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11782__$1)){
var c__4559__auto__ = cljs.core.chunk_first.call(null,seq__11782__$1);
var G__11793 = cljs.core.chunk_rest.call(null,seq__11782__$1);
var G__11794 = c__4559__auto__;
var G__11795 = cljs.core.count.call(null,c__4559__auto__);
var G__11796 = (0);
seq__11782 = G__11793;
chunk__11783 = G__11794;
count__11784 = G__11795;
i__11785 = G__11796;
continue;
} else {
var v = cljs.core.first.call(null,seq__11782__$1);
each_fixture_fn_11788.call(null,((function (seq__11782,chunk__11783,count__11784,i__11785,v,seq__11782__$1,temp__4126__auto__,once_fixture_fn_11787,each_fixture_fn_11788,tests_11786,_STAR_entry_point_STAR_11781,entry_point_QMARK___5415__auto__){
return (function (){
return cemerick.cljs.test.test_function.call(null,test_env,v);
});})(seq__11782,chunk__11783,count__11784,i__11785,v,seq__11782__$1,temp__4126__auto__,once_fixture_fn_11787,each_fixture_fn_11788,tests_11786,_STAR_entry_point_STAR_11781,entry_point_QMARK___5415__auto__))
);

var G__11797 = cljs.core.next.call(null,seq__11782__$1);
var G__11798 = null;
var G__11799 = (0);
var G__11800 = (0);
seq__11782 = G__11797;
chunk__11783 = G__11798;
count__11784 = G__11799;
i__11785 = G__11800;
continue;
}
} else {
return null;
}
}
break;
}
});})(once_fixture_fn_11787,each_fixture_fn_11788,tests_11786,_STAR_entry_point_STAR_11781,entry_point_QMARK___5415__auto__))
);

cljs.core.reduce.call(null,((function (tests_11786,_STAR_entry_point_STAR_11781,entry_point_QMARK___5415__auto__){
return (function (p1__11774_SHARP_,p2__11775_SHARP_){
return cljs.core.apply.call(null,cemerick.cljs.test.schedule_async_test,p1__11774_SHARP_,p2__11775_SHARP_);
});})(tests_11786,_STAR_entry_point_STAR_11781,entry_point_QMARK___5415__auto__))
,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,test_env)),cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"test","test",577538877)),cljs.core.meta),cljs.core.filter.call(null,cemerick.cljs.test.async_test_QMARK_,tests_11786)));

return cemerick.cljs.test.finish_test_entry_point.call(null,entry_point_QMARK___5415__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_11781;
}});
test_all_vars = function(test_env,ns_sym){
switch(arguments.length){
case 1:
return test_all_vars__1.call(this,test_env);
case 2:
return test_all_vars__2.call(this,test_env,ns_sym);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
test_all_vars.cljs$core$IFn$_invoke$arity$1 = test_all_vars__1;
test_all_vars.cljs$core$IFn$_invoke$arity$2 = test_all_vars__2;
return test_all_vars;
})()
;
/**
* If the namespace defines a function named test-ns-hook, calls that.
* Otherwise, calls test-all-vars on the namespace.  'ns' is a
* namespace object or a symbol.
* 
* Internally binds *report-counters* to an atom initialized to
* *inital-report-counters*.  Returns the final, dereferenced state of
* *report-counters*.
*/
cemerick.cljs.test.test_ns = (function() {
var test_ns = null;
var test_ns__1 = (function (ns_sym){
return test_ns.call(null,cemerick.cljs.test.init_test_environment.call(null),ns_sym);
});
var test_ns__2 = (function (test_env,ns_sym){
var entry_point_QMARK___5415__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;
var _STAR_entry_point_STAR_11802 = cemerick.cljs.test._STAR_entry_point_STAR_;
cemerick.cljs.test._STAR_entry_point_STAR_ = false;

try{cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns_sym,new cljs.core.Keyword(null,"test-env","test-env",-540228992),test_env], null));

var temp__4124__auto___11803 = cljs.core.get.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_test_hooks),ns_sym);
if(cljs.core.truth_(temp__4124__auto___11803)){
var test_hook_11804 = temp__4124__auto___11803;
test_hook_11804.call(null,test_env);
} else {
cemerick.cljs.test.test_all_vars.call(null,test_env,ns_sym);
}

cemerick.cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns_sym,new cljs.core.Keyword(null,"test-env","test-env",-540228992),test_env], null));

return cemerick.cljs.test.finish_test_entry_point.call(null,entry_point_QMARK___5415__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_11802;
}});
test_ns = function(test_env,ns_sym){
switch(arguments.length){
case 1:
return test_ns__1.call(this,test_env);
case 2:
return test_ns__2.call(this,test_env,ns_sym);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
test_ns.cljs$core$IFn$_invoke$arity$1 = test_ns__1;
test_ns.cljs$core$IFn$_invoke$arity$2 = test_ns__2;
return test_ns;
})()
;
cemerick.cljs.test.print_summary = (function print_summary(env){
return cemerick.cljs.test.do_report.call(null,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));
});
cemerick.cljs.test.async_test_summary = (function async_test_summary(test_env){
var async_test_env = cemerick.cljs.test.maybe_deref.call(null,new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(test_env));
var tests = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(async_test_env);
if((tests > (0))){
return cemerick.cljs.test.print_summary.call(null,cljs.core.merge_with.call(null,cljs.core._PLUS_,test_env,async_test_env));
} else {
return null;
}
});
cemerick.cljs.test.test_summary = (function test_summary(test_env){
var test_env__$1 = cemerick.cljs.test.maybe_deref.call(null,test_env);
cemerick.cljs.test.print_summary.call(null,test_env__$1);

return cemerick.cljs.test.on_testing_complete.call(null,test_env__$1,cemerick.cljs.test.async_test_summary);
});
/**
* Runs all tests in the given namespaces; prints results.
* Defaults to current namespace if none given.  Returns a map
* summarizing test results.
* @param {...*} var_args
*/
cemerick.cljs.test.run_tests_STAR_ = (function() { 
var run_tests_STAR___delegate = function (namespaces){
var vec__11811 = (((cljs.core.first.call(null,namespaces) instanceof cljs.core.Atom))?namespaces:cljs.core.cons.call(null,cemerick.cljs.test.init_test_environment.call(null),namespaces));
var test_env = cljs.core.nth.call(null,vec__11811,(0),null);
var namespaces__$1 = cljs.core.nthnext.call(null,vec__11811,(1));
var entry_point_QMARK___5415__auto__ = cemerick.cljs.test._STAR_entry_point_STAR_;
var _STAR_entry_point_STAR_11812 = cemerick.cljs.test._STAR_entry_point_STAR_;
cemerick.cljs.test._STAR_entry_point_STAR_ = false;

try{var seq__11813_11817 = cljs.core.seq.call(null,cljs.core.distinct.call(null,namespaces__$1));
var chunk__11814_11818 = null;
var count__11815_11819 = (0);
var i__11816_11820 = (0);
while(true){
if((i__11816_11820 < count__11815_11819)){
var ns_11821 = cljs.core._nth.call(null,chunk__11814_11818,i__11816_11820);
cemerick.cljs.test.test_ns.call(null,test_env,ns_11821);

var G__11822 = seq__11813_11817;
var G__11823 = chunk__11814_11818;
var G__11824 = count__11815_11819;
var G__11825 = (i__11816_11820 + (1));
seq__11813_11817 = G__11822;
chunk__11814_11818 = G__11823;
count__11815_11819 = G__11824;
i__11816_11820 = G__11825;
continue;
} else {
var temp__4126__auto___11826 = cljs.core.seq.call(null,seq__11813_11817);
if(temp__4126__auto___11826){
var seq__11813_11827__$1 = temp__4126__auto___11826;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11813_11827__$1)){
var c__4559__auto___11828 = cljs.core.chunk_first.call(null,seq__11813_11827__$1);
var G__11829 = cljs.core.chunk_rest.call(null,seq__11813_11827__$1);
var G__11830 = c__4559__auto___11828;
var G__11831 = cljs.core.count.call(null,c__4559__auto___11828);
var G__11832 = (0);
seq__11813_11817 = G__11829;
chunk__11814_11818 = G__11830;
count__11815_11819 = G__11831;
i__11816_11820 = G__11832;
continue;
} else {
var ns_11833 = cljs.core.first.call(null,seq__11813_11827__$1);
cemerick.cljs.test.test_ns.call(null,test_env,ns_11833);

var G__11834 = cljs.core.next.call(null,seq__11813_11827__$1);
var G__11835 = null;
var G__11836 = (0);
var G__11837 = (0);
seq__11813_11817 = G__11834;
chunk__11814_11818 = G__11835;
count__11815_11819 = G__11836;
i__11816_11820 = G__11837;
continue;
}
} else {
}
}
break;
}

cemerick.cljs.test.test_summary.call(null,test_env);

return cemerick.cljs.test.finish_test_entry_point.call(null,entry_point_QMARK___5415__auto__,test_env);
}finally {cemerick.cljs.test._STAR_entry_point_STAR_ = _STAR_entry_point_STAR_11812;
}};
var run_tests_STAR_ = function (var_args){
var namespaces = null;
if (arguments.length > 0) {
var G__11838__i = 0, G__11838__a = new Array(arguments.length -  0);
while (G__11838__i < G__11838__a.length) {G__11838__a[G__11838__i] = arguments[G__11838__i + 0]; ++G__11838__i;}
  namespaces = new cljs.core.IndexedSeq(G__11838__a,0);
} 
return run_tests_STAR___delegate.call(this,namespaces);};
run_tests_STAR_.cljs$lang$maxFixedArity = 0;
run_tests_STAR_.cljs$lang$applyTo = (function (arglist__11839){
var namespaces = cljs.core.seq(arglist__11839);
return run_tests_STAR___delegate(namespaces);
});
run_tests_STAR_.cljs$core$IFn$_invoke$arity$variadic = run_tests_STAR___delegate;
return run_tests_STAR_;
})()
;
goog.exportSymbol('cemerick.cljs.test.run_tests_STAR_', cemerick.cljs.test.run_tests_STAR_);
/**
* Runs all tests in all namespaces; prints results.
* Optional argument is a regular expression; only namespaces with
* names matching the regular expression (with re-matches) will be
* tested.
*/
cemerick.cljs.test.run_all_tests = (function() {
var run_all_tests = null;
var run_all_tests__0 = (function (){
return cljs.core.apply.call(null,cemerick.cljs.test.run_tests_STAR_,cljs.core.keys.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_tests)));
});
var run_all_tests__1 = (function (re){
return cljs.core.apply.call(null,cemerick.cljs.test.run_tests_STAR_,cljs.core.filter.call(null,(function (p1__11840_SHARP_){
return cljs.core.re_matches.call(null,re,cljs.core.name.call(null,p1__11840_SHARP_));
}),cljs.core.keys.call(null,cljs.core.deref.call(null,cemerick.cljs.test.registered_tests))));
});
run_all_tests = function(re){
switch(arguments.length){
case 0:
return run_all_tests__0.call(this);
case 1:
return run_all_tests__1.call(this,re);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
run_all_tests.cljs$core$IFn$_invoke$arity$0 = run_all_tests__0;
run_all_tests.cljs$core$IFn$_invoke$arity$1 = run_all_tests__1;
return run_all_tests;
})()
;
goog.exportSymbol('cemerick.cljs.test.run_all_tests', cemerick.cljs.test.run_all_tests);
/**
* Returns true if the given test summary indicates all tests
* were successful, false otherwise.
*/
cemerick.cljs.test.successful_QMARK_ = (function successful_QMARK_(test_env){
var map__11842 = cemerick.cljs.test.maybe_deref.call(null,test_env);
var map__11842__$1 = ((cljs.core.seq_QMARK_.call(null,map__11842))?cljs.core.apply.call(null,cljs.core.hash_map,map__11842):map__11842);
var async = cljs.core.get.call(null,map__11842__$1,new cljs.core.Keyword(null,"async","async",1050769601));
var error = cljs.core.get.call(null,map__11842__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var fail = cljs.core.get.call(null,map__11842__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var and__3760__auto__ = cemerick.cljs.test.testing_complete_QMARK_.call(null,test_env);
if(cljs.core.truth_(and__3760__auto__)){
var and__3760__auto____$1 = ((function (){var or__3772__auto__ = fail;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return (0);
}
})() === (0));
if(and__3760__auto____$1){
var and__3760__auto____$2 = ((function (){var or__3772__auto__ = error;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return (0);
}
})() === (0));
if(and__3760__auto____$2){
var or__3772__auto__ = (async == null);
if(or__3772__auto__){
return or__3772__auto__;
} else {
return successful_QMARK_.call(null,async);
}
} else {
return and__3760__auto____$2;
}
} else {
return and__3760__auto____$1;
}
} else {
return and__3760__auto__;
}
});
goog.exportSymbol('cemerick.cljs.test.successful_QMARK_', cemerick.cljs.test.successful_QMARK_);
cemerick.cljs.test.set_print_fn_BANG_ = (function set_print_fn_BANG_(f){
return cljs.core._STAR_print_fn_STAR_ = f;
});
goog.exportSymbol('cemerick.cljs.test.set_print_fn_BANG_', cemerick.cljs.test.set_print_fn_BANG_);
