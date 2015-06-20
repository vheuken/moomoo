// Compiled by ClojureScript 0.0-2755 {:target :nodejs}
goog.provide('moomoo.test.rooms');
goog.require('cljs.core');
goog.require('cemerick.cljs.test');
moomoo.test.rooms.foo = (function foo(){
return cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),moomoo.test.rooms.foo);
});

moomoo.test.rooms.foo = cljs.core.with_meta.call(null,moomoo.test.rooms.foo,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),14,new cljs.core.Keyword(null,"end-line","end-line",1837326455),6,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),6,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/vincent/Workspace/moomoo/test/moomoo/rooms.cljs"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.with_meta.call(null,new cljs.core.Symbol("moomoo.test.rooms","foo","moomoo.test.rooms/foo",-1094947219,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),14,new cljs.core.Keyword(null,"end-line","end-line",1837326455),6,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),6,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/vincent/Workspace/moomoo/test/moomoo/rooms.cljs"], null)),new cljs.core.Keyword(null,"test","test",577538877),(function foo_test(test_ctx__5378__auto__){
var _test_ctx = test_ctx__5378__auto__;
var async_QMARK___5293__auto__ = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx)));
var _STAR_test_ctx_STAR_5546 = cemerick.cljs.test._STAR_test_ctx_STAR_;
cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___5293__auto__)?null:_test_ctx);

try{try{var _test_ctx__$1 = _test_ctx;
var async_QMARK___5293__auto____$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx__$1)));
var _STAR_test_ctx_STAR_5548 = cemerick.cljs.test._STAR_test_ctx_STAR_;
cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___5293__auto____$1)?null:_test_ctx__$1);

try{try{try{var values__5313__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(0));
var result__5314__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__5313__auto__);
if((result__5314__auto__ instanceof cemerick.cljs.test.TestContext)){
throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else {
}

if(cljs.core.truth_(result__5314__auto__)){
cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__5313__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__5313__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__5314__auto__;
}catch (e5550){if((e5550 instanceof Error)){
var t__5350__auto__ = e5550;
return cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(0),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__5350__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
throw e5550;

}
}}catch (e5549){if((e5549 instanceof Error)){
var e__5294__auto__ = e5549;
if(cljs.core.truth_(async_QMARK___5293__auto____$1)){
return cemerick.cljs.test.done_STAR_.call(null,_test_ctx__$1,e__5294__auto__);
} else {
throw e__5294__auto__;
}
} else {
throw e5549;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_5548;
}}catch (e5547){if((e5547 instanceof Error)){
var e__5294__auto__ = e5547;
if(cljs.core.truth_(async_QMARK___5293__auto__)){
return cemerick.cljs.test.done_STAR_.call(null,_test_ctx,e__5294__auto__);
} else {
throw e__5294__auto__;
}
} else {
throw e5547;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_5546;
}})], null)));

cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"moomoo.test.rooms","moomoo.test.rooms",-766022062,null),new cljs.core.Symbol("moomoo.test.rooms","foo","moomoo.test.rooms/foo",-1094947219,null),moomoo.test.rooms.foo);

moomoo.test.rooms.bar = (function bar(){
return cemerick.cljs.test.test_function.call(null,cemerick.cljs.test.init_test_environment.call(null),moomoo.test.rooms.bar);
});

moomoo.test.rooms.bar = cljs.core.with_meta.call(null,moomoo.test.rooms.bar,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),14,new cljs.core.Keyword(null,"end-line","end-line",1837326455),9,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),9,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/vincent/Workspace/moomoo/test/moomoo/rooms.cljs"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.with_meta.call(null,new cljs.core.Symbol("moomoo.test.rooms","bar","moomoo.test.rooms/bar",18234225,null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),14,new cljs.core.Keyword(null,"end-line","end-line",1837326455),9,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),9,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/vincent/Workspace/moomoo/test/moomoo/rooms.cljs"], null)),new cljs.core.Keyword(null,"test","test",577538877),(function bar_test(test_ctx__5378__auto__){
var _test_ctx = test_ctx__5378__auto__;
var async_QMARK___5293__auto__ = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx)));
var _STAR_test_ctx_STAR_5556 = cemerick.cljs.test._STAR_test_ctx_STAR_;
cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___5293__auto__)?null:_test_ctx);

try{try{var _test_ctx__$1 = _test_ctx;
var async_QMARK___5293__auto____$1 = new cljs.core.Keyword(null,"async","async",1050769601).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"test-name","test-name",-675595913).cljs$core$IFn$_invoke$arity$1(_test_ctx__$1)));
var _STAR_test_ctx_STAR_5558 = cemerick.cljs.test._STAR_test_ctx_STAR_;
cemerick.cljs.test._STAR_test_ctx_STAR_ = (cljs.core.truth_(async_QMARK___5293__auto____$1)?null:_test_ctx__$1);

try{try{try{var values__5313__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(1));
var result__5314__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__5313__auto__);
if((result__5314__auto__ instanceof cemerick.cljs.test.TestContext)){
throw (new Error("TestContext provided as [form] in `is` assertion. If using `is` with an explicit test context, use the 3-arg arity."));
} else {
}

if(cljs.core.truth_(result__5314__auto__)){
cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__5313__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__5313__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__5314__auto__;
}catch (e5560){if((e5560 instanceof Error)){
var t__5350__auto__ = e5560;
return cemerick.cljs.test.do_report.call(null,_test_ctx__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__5350__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
throw e5560;

}
}}catch (e5559){if((e5559 instanceof Error)){
var e__5294__auto__ = e5559;
if(cljs.core.truth_(async_QMARK___5293__auto____$1)){
return cemerick.cljs.test.done_STAR_.call(null,_test_ctx__$1,e__5294__auto__);
} else {
throw e__5294__auto__;
}
} else {
throw e5559;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_5558;
}}catch (e5557){if((e5557 instanceof Error)){
var e__5294__auto__ = e5557;
if(cljs.core.truth_(async_QMARK___5293__auto__)){
return cemerick.cljs.test.done_STAR_.call(null,_test_ctx,e__5294__auto__);
} else {
throw e__5294__auto__;
}
} else {
throw e5557;

}
}}finally {cemerick.cljs.test._STAR_test_ctx_STAR_ = _STAR_test_ctx_STAR_5556;
}})], null)));

cemerick.cljs.test.register_test_BANG_.call(null,new cljs.core.Symbol(null,"moomoo.test.rooms","moomoo.test.rooms",-766022062,null),new cljs.core.Symbol("moomoo.test.rooms","bar","moomoo.test.rooms/bar",18234225,null),moomoo.test.rooms.bar);

