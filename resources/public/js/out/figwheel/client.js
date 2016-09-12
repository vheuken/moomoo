// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args37334 = [];
var len__25835__auto___37337 = arguments.length;
var i__25836__auto___37338 = (0);
while(true){
if((i__25836__auto___37338 < len__25835__auto___37337)){
args37334.push((arguments[i__25836__auto___37338]));

var G__37339 = (i__25836__auto___37338 + (1));
i__25836__auto___37338 = G__37339;
continue;
} else {
}
break;
}

var G__37336 = args37334.length;
switch (G__37336) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37334.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37342 = arguments.length;
var i__25836__auto___37343 = (0);
while(true){
if((i__25836__auto___37343 < len__25835__auto___37342)){
args__25842__auto__.push((arguments[i__25836__auto___37343]));

var G__37344 = (i__25836__auto___37343 + (1));
i__25836__auto___37343 = G__37344;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37341){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37341));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25842__auto__ = [];
var len__25835__auto___37346 = arguments.length;
var i__25836__auto___37347 = (0);
while(true){
if((i__25836__auto___37347 < len__25835__auto___37346)){
args__25842__auto__.push((arguments[i__25836__auto___37347]));

var G__37348 = (i__25836__auto___37347 + (1));
i__25836__auto___37347 = G__37348;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37345){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37345));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__37349 = cljs.core._EQ_;
var expr__37350 = (function (){var or__24760__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e37353){if((e37353 instanceof Error)){
var e = e37353;
return false;
} else {
throw e37353;

}
}})();
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__37349.call(null,"true",expr__37350))){
return true;
} else {
if(cljs.core.truth_(pred__37349.call(null,"false",expr__37350))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__37350)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e37355){if((e37355 instanceof Error)){
var e = e37355;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e37355;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37356){
var map__37359 = p__37356;
var map__37359__$1 = ((((!((map__37359 == null)))?((((map__37359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37359):map__37359);
var message = cljs.core.get.call(null,map__37359__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37359__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24760__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24748__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24748__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24748__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28214__auto___37521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28214__auto___37521,ch){
return (function (){
var f__28215__auto__ = (function (){var switch__27677__auto__ = ((function (c__28214__auto___37521,ch){
return (function (state_37490){
var state_val_37491 = (state_37490[(1)]);
if((state_val_37491 === (7))){
var inst_37486 = (state_37490[(2)]);
var state_37490__$1 = state_37490;
var statearr_37492_37522 = state_37490__$1;
(statearr_37492_37522[(2)] = inst_37486);

(statearr_37492_37522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37491 === (1))){
var state_37490__$1 = state_37490;
var statearr_37493_37523 = state_37490__$1;
(statearr_37493_37523[(2)] = null);

(statearr_37493_37523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37491 === (4))){
var inst_37443 = (state_37490[(7)]);
var inst_37443__$1 = (state_37490[(2)]);
var state_37490__$1 = (function (){var statearr_37494 = state_37490;
(statearr_37494[(7)] = inst_37443__$1);

return statearr_37494;
})();
if(cljs.core.truth_(inst_37443__$1)){
var statearr_37495_37524 = state_37490__$1;
(statearr_37495_37524[(1)] = (5));

} else {
var statearr_37496_37525 = state_37490__$1;
(statearr_37496_37525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37491 === (15))){
var inst_37450 = (state_37490[(8)]);
var inst_37465 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37450);
var inst_37466 = cljs.core.first.call(null,inst_37465);
var inst_37467 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37466);
var inst_37468 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_37467)].join('');
var inst_37469 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37468);
var state_37490__$1 = state_37490;
var statearr_37497_37526 = state_37490__$1;
(statearr_37497_37526[(2)] = inst_37469);

(statearr_37497_37526[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37491 === (13))){
var inst_37474 = (state_37490[(2)]);
var state_37490__$1 = state_37490;
var statearr_37498_37527 = state_37490__$1;
(statearr_37498_37527[(2)] = inst_37474);

(statearr_37498_37527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37491 === (6))){
var state_37490__$1 = state_37490;
var statearr_37499_37528 = state_37490__$1;
(statearr_37499_37528[(2)] = null);

(statearr_37499_37528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37491 === (17))){
var inst_37472 = (state_37490[(2)]);
var state_37490__$1 = state_37490;
var statearr_37500_37529 = state_37490__$1;
(statearr_37500_37529[(2)] = inst_37472);

(statearr_37500_37529[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37491 === (3))){
var inst_37488 = (state_37490[(2)]);
var state_37490__$1 = state_37490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37490__$1,inst_37488);
} else {
if((state_val_37491 === (12))){
var inst_37449 = (state_37490[(9)]);
var inst_37463 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37449,opts);
var state_37490__$1 = state_37490;
if(cljs.core.truth_(inst_37463)){
var statearr_37501_37530 = state_37490__$1;
(statearr_37501_37530[(1)] = (15));

} else {
var statearr_37502_37531 = state_37490__$1;
(statearr_37502_37531[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37491 === (2))){
var state_37490__$1 = state_37490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37490__$1,(4),ch);
} else {
if((state_val_37491 === (11))){
var inst_37450 = (state_37490[(8)]);
var inst_37455 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37456 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37450);
var inst_37457 = cljs.core.async.timeout.call(null,(1000));
var inst_37458 = [inst_37456,inst_37457];
var inst_37459 = (new cljs.core.PersistentVector(null,2,(5),inst_37455,inst_37458,null));
var state_37490__$1 = state_37490;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37490__$1,(14),inst_37459);
} else {
if((state_val_37491 === (9))){
var inst_37450 = (state_37490[(8)]);
var inst_37476 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37477 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37450);
var inst_37478 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37477);
var inst_37479 = [cljs.core.str("Not loading: "),cljs.core.str(inst_37478)].join('');
var inst_37480 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37479);
var state_37490__$1 = (function (){var statearr_37503 = state_37490;
(statearr_37503[(10)] = inst_37476);

return statearr_37503;
})();
var statearr_37504_37532 = state_37490__$1;
(statearr_37504_37532[(2)] = inst_37480);

(statearr_37504_37532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37491 === (5))){
var inst_37443 = (state_37490[(7)]);
var inst_37445 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37446 = (new cljs.core.PersistentArrayMap(null,2,inst_37445,null));
var inst_37447 = (new cljs.core.PersistentHashSet(null,inst_37446,null));
var inst_37448 = figwheel.client.focus_msgs.call(null,inst_37447,inst_37443);
var inst_37449 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37448);
var inst_37450 = cljs.core.first.call(null,inst_37448);
var inst_37451 = figwheel.client.autoload_QMARK_.call(null);
var state_37490__$1 = (function (){var statearr_37505 = state_37490;
(statearr_37505[(8)] = inst_37450);

(statearr_37505[(9)] = inst_37449);

return statearr_37505;
})();
if(cljs.core.truth_(inst_37451)){
var statearr_37506_37533 = state_37490__$1;
(statearr_37506_37533[(1)] = (8));

} else {
var statearr_37507_37534 = state_37490__$1;
(statearr_37507_37534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37491 === (14))){
var inst_37461 = (state_37490[(2)]);
var state_37490__$1 = state_37490;
var statearr_37508_37535 = state_37490__$1;
(statearr_37508_37535[(2)] = inst_37461);

(statearr_37508_37535[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37491 === (16))){
var state_37490__$1 = state_37490;
var statearr_37509_37536 = state_37490__$1;
(statearr_37509_37536[(2)] = null);

(statearr_37509_37536[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37491 === (10))){
var inst_37482 = (state_37490[(2)]);
var state_37490__$1 = (function (){var statearr_37510 = state_37490;
(statearr_37510[(11)] = inst_37482);

return statearr_37510;
})();
var statearr_37511_37537 = state_37490__$1;
(statearr_37511_37537[(2)] = null);

(statearr_37511_37537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37491 === (8))){
var inst_37449 = (state_37490[(9)]);
var inst_37453 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37449,opts);
var state_37490__$1 = state_37490;
if(cljs.core.truth_(inst_37453)){
var statearr_37512_37538 = state_37490__$1;
(statearr_37512_37538[(1)] = (11));

} else {
var statearr_37513_37539 = state_37490__$1;
(statearr_37513_37539[(1)] = (12));

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
});})(c__28214__auto___37521,ch))
;
return ((function (switch__27677__auto__,c__28214__auto___37521,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27678__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27678__auto____0 = (function (){
var statearr_37517 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37517[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27678__auto__);

(statearr_37517[(1)] = (1));

return statearr_37517;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27678__auto____1 = (function (state_37490){
while(true){
var ret_value__27679__auto__ = (function (){try{while(true){
var result__27680__auto__ = switch__27677__auto__.call(null,state_37490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27680__auto__;
}
break;
}
}catch (e37518){if((e37518 instanceof Object)){
var ex__27681__auto__ = e37518;
var statearr_37519_37540 = state_37490;
(statearr_37519_37540[(5)] = ex__27681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37541 = state_37490;
state_37490 = G__37541;
continue;
} else {
return ret_value__27679__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27678__auto__ = function(state_37490){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27678__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27678__auto____1.call(this,state_37490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27678__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27678__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27678__auto__;
})()
;})(switch__27677__auto__,c__28214__auto___37521,ch))
})();
var state__28216__auto__ = (function (){var statearr_37520 = f__28215__auto__.call(null);
(statearr_37520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28214__auto___37521);

return statearr_37520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28216__auto__);
});})(c__28214__auto___37521,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37542_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37542_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37545 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37545){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37544){if((e37544 instanceof Error)){
var e = e37544;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37545], null));
} else {
var e = e37544;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37545))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37546){
var map__37555 = p__37546;
var map__37555__$1 = ((((!((map__37555 == null)))?((((map__37555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37555):map__37555);
var opts = map__37555__$1;
var build_id = cljs.core.get.call(null,map__37555__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37555,map__37555__$1,opts,build_id){
return (function (p__37557){
var vec__37558 = p__37557;
var seq__37559 = cljs.core.seq.call(null,vec__37558);
var first__37560 = cljs.core.first.call(null,seq__37559);
var seq__37559__$1 = cljs.core.next.call(null,seq__37559);
var map__37561 = first__37560;
var map__37561__$1 = ((((!((map__37561 == null)))?((((map__37561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37561):map__37561);
var msg = map__37561__$1;
var msg_name = cljs.core.get.call(null,map__37561__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37559__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37558,seq__37559,first__37560,seq__37559__$1,map__37561,map__37561__$1,msg,msg_name,_,map__37555,map__37555__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37558,seq__37559,first__37560,seq__37559__$1,map__37561,map__37561__$1,msg,msg_name,_,map__37555,map__37555__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37555,map__37555__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37569){
var vec__37570 = p__37569;
var seq__37571 = cljs.core.seq.call(null,vec__37570);
var first__37572 = cljs.core.first.call(null,seq__37571);
var seq__37571__$1 = cljs.core.next.call(null,seq__37571);
var map__37573 = first__37572;
var map__37573__$1 = ((((!((map__37573 == null)))?((((map__37573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37573):map__37573);
var msg = map__37573__$1;
var msg_name = cljs.core.get.call(null,map__37573__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37571__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37575){
var map__37587 = p__37575;
var map__37587__$1 = ((((!((map__37587 == null)))?((((map__37587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37587):map__37587);
var on_compile_warning = cljs.core.get.call(null,map__37587__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37587__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37587,map__37587__$1,on_compile_warning,on_compile_fail){
return (function (p__37589){
var vec__37590 = p__37589;
var seq__37591 = cljs.core.seq.call(null,vec__37590);
var first__37592 = cljs.core.first.call(null,seq__37591);
var seq__37591__$1 = cljs.core.next.call(null,seq__37591);
var map__37593 = first__37592;
var map__37593__$1 = ((((!((map__37593 == null)))?((((map__37593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37593):map__37593);
var msg = map__37593__$1;
var msg_name = cljs.core.get.call(null,map__37593__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37591__$1;
var pred__37595 = cljs.core._EQ_;
var expr__37596 = msg_name;
if(cljs.core.truth_(pred__37595.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37596))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37595.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37596))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37587,map__37587__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28214__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28215__auto__ = (function (){var switch__27677__auto__ = ((function (c__28214__auto__,msg_hist,msg_names,msg){
return (function (state_37824){
var state_val_37825 = (state_37824[(1)]);
if((state_val_37825 === (7))){
var inst_37744 = (state_37824[(2)]);
var state_37824__$1 = state_37824;
if(cljs.core.truth_(inst_37744)){
var statearr_37826_37876 = state_37824__$1;
(statearr_37826_37876[(1)] = (8));

} else {
var statearr_37827_37877 = state_37824__$1;
(statearr_37827_37877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37825 === (20))){
var inst_37818 = (state_37824[(2)]);
var state_37824__$1 = state_37824;
var statearr_37828_37878 = state_37824__$1;
(statearr_37828_37878[(2)] = inst_37818);

(statearr_37828_37878[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37825 === (27))){
var inst_37814 = (state_37824[(2)]);
var state_37824__$1 = state_37824;
var statearr_37829_37879 = state_37824__$1;
(statearr_37829_37879[(2)] = inst_37814);

(statearr_37829_37879[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37825 === (1))){
var inst_37737 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37824__$1 = state_37824;
if(cljs.core.truth_(inst_37737)){
var statearr_37830_37880 = state_37824__$1;
(statearr_37830_37880[(1)] = (2));

} else {
var statearr_37831_37881 = state_37824__$1;
(statearr_37831_37881[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37825 === (24))){
var inst_37816 = (state_37824[(2)]);
var state_37824__$1 = state_37824;
var statearr_37832_37882 = state_37824__$1;
(statearr_37832_37882[(2)] = inst_37816);

(statearr_37832_37882[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37825 === (4))){
var inst_37822 = (state_37824[(2)]);
var state_37824__$1 = state_37824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37824__$1,inst_37822);
} else {
if((state_val_37825 === (15))){
var inst_37820 = (state_37824[(2)]);
var state_37824__$1 = state_37824;
var statearr_37833_37883 = state_37824__$1;
(statearr_37833_37883[(2)] = inst_37820);

(statearr_37833_37883[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37825 === (21))){
var inst_37773 = (state_37824[(2)]);
var inst_37774 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37775 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37774);
var state_37824__$1 = (function (){var statearr_37834 = state_37824;
(statearr_37834[(7)] = inst_37773);

return statearr_37834;
})();
var statearr_37835_37884 = state_37824__$1;
(statearr_37835_37884[(2)] = inst_37775);

(statearr_37835_37884[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37825 === (31))){
var inst_37803 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37824__$1 = state_37824;
if(cljs.core.truth_(inst_37803)){
var statearr_37836_37885 = state_37824__$1;
(statearr_37836_37885[(1)] = (34));

} else {
var statearr_37837_37886 = state_37824__$1;
(statearr_37837_37886[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37825 === (32))){
var inst_37812 = (state_37824[(2)]);
var state_37824__$1 = state_37824;
var statearr_37838_37887 = state_37824__$1;
(statearr_37838_37887[(2)] = inst_37812);

(statearr_37838_37887[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37825 === (33))){
var inst_37799 = (state_37824[(2)]);
var inst_37800 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37801 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37800);
var state_37824__$1 = (function (){var statearr_37839 = state_37824;
(statearr_37839[(8)] = inst_37799);

return statearr_37839;
})();
var statearr_37840_37888 = state_37824__$1;
(statearr_37840_37888[(2)] = inst_37801);

(statearr_37840_37888[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37825 === (13))){
var inst_37758 = figwheel.client.heads_up.clear.call(null);
var state_37824__$1 = state_37824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37824__$1,(16),inst_37758);
} else {
if((state_val_37825 === (22))){
var inst_37779 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37780 = figwheel.client.heads_up.append_warning_message.call(null,inst_37779);
var state_37824__$1 = state_37824;
var statearr_37841_37889 = state_37824__$1;
(statearr_37841_37889[(2)] = inst_37780);

(statearr_37841_37889[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37825 === (36))){
var inst_37810 = (state_37824[(2)]);
var state_37824__$1 = state_37824;
var statearr_37842_37890 = state_37824__$1;
(statearr_37842_37890[(2)] = inst_37810);

(statearr_37842_37890[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37825 === (29))){
var inst_37790 = (state_37824[(2)]);
var inst_37791 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37792 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37791);
var state_37824__$1 = (function (){var statearr_37843 = state_37824;
(statearr_37843[(9)] = inst_37790);

return statearr_37843;
})();
var statearr_37844_37891 = state_37824__$1;
(statearr_37844_37891[(2)] = inst_37792);

(statearr_37844_37891[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37825 === (6))){
var inst_37739 = (state_37824[(10)]);
var state_37824__$1 = state_37824;
var statearr_37845_37892 = state_37824__$1;
(statearr_37845_37892[(2)] = inst_37739);

(statearr_37845_37892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37825 === (28))){
var inst_37786 = (state_37824[(2)]);
var inst_37787 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37788 = figwheel.client.heads_up.display_warning.call(null,inst_37787);
var state_37824__$1 = (function (){var statearr_37846 = state_37824;
(statearr_37846[(11)] = inst_37786);

return statearr_37846;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37824__$1,(29),inst_37788);
} else {
if((state_val_37825 === (25))){
var inst_37784 = figwheel.client.heads_up.clear.call(null);
var state_37824__$1 = state_37824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37824__$1,(28),inst_37784);
} else {
if((state_val_37825 === (34))){
var inst_37805 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37824__$1 = state_37824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37824__$1,(37),inst_37805);
} else {
if((state_val_37825 === (17))){
var inst_37764 = (state_37824[(2)]);
var inst_37765 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37766 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37765);
var state_37824__$1 = (function (){var statearr_37847 = state_37824;
(statearr_37847[(12)] = inst_37764);

return statearr_37847;
})();
var statearr_37848_37893 = state_37824__$1;
(statearr_37848_37893[(2)] = inst_37766);

(statearr_37848_37893[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37825 === (3))){
var inst_37756 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37824__$1 = state_37824;
if(cljs.core.truth_(inst_37756)){
var statearr_37849_37894 = state_37824__$1;
(statearr_37849_37894[(1)] = (13));

} else {
var statearr_37850_37895 = state_37824__$1;
(statearr_37850_37895[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37825 === (12))){
var inst_37752 = (state_37824[(2)]);
var state_37824__$1 = state_37824;
var statearr_37851_37896 = state_37824__$1;
(statearr_37851_37896[(2)] = inst_37752);

(statearr_37851_37896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37825 === (2))){
var inst_37739 = (state_37824[(10)]);
var inst_37739__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37824__$1 = (function (){var statearr_37852 = state_37824;
(statearr_37852[(10)] = inst_37739__$1);

return statearr_37852;
})();
if(cljs.core.truth_(inst_37739__$1)){
var statearr_37853_37897 = state_37824__$1;
(statearr_37853_37897[(1)] = (5));

} else {
var statearr_37854_37898 = state_37824__$1;
(statearr_37854_37898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37825 === (23))){
var inst_37782 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37824__$1 = state_37824;
if(cljs.core.truth_(inst_37782)){
var statearr_37855_37899 = state_37824__$1;
(statearr_37855_37899[(1)] = (25));

} else {
var statearr_37856_37900 = state_37824__$1;
(statearr_37856_37900[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37825 === (35))){
var state_37824__$1 = state_37824;
var statearr_37857_37901 = state_37824__$1;
(statearr_37857_37901[(2)] = null);

(statearr_37857_37901[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37825 === (19))){
var inst_37777 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37824__$1 = state_37824;
if(cljs.core.truth_(inst_37777)){
var statearr_37858_37902 = state_37824__$1;
(statearr_37858_37902[(1)] = (22));

} else {
var statearr_37859_37903 = state_37824__$1;
(statearr_37859_37903[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37825 === (11))){
var inst_37748 = (state_37824[(2)]);
var state_37824__$1 = state_37824;
var statearr_37860_37904 = state_37824__$1;
(statearr_37860_37904[(2)] = inst_37748);

(statearr_37860_37904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37825 === (9))){
var inst_37750 = figwheel.client.heads_up.clear.call(null);
var state_37824__$1 = state_37824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37824__$1,(12),inst_37750);
} else {
if((state_val_37825 === (5))){
var inst_37741 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37824__$1 = state_37824;
var statearr_37861_37905 = state_37824__$1;
(statearr_37861_37905[(2)] = inst_37741);

(statearr_37861_37905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37825 === (14))){
var inst_37768 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37824__$1 = state_37824;
if(cljs.core.truth_(inst_37768)){
var statearr_37862_37906 = state_37824__$1;
(statearr_37862_37906[(1)] = (18));

} else {
var statearr_37863_37907 = state_37824__$1;
(statearr_37863_37907[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37825 === (26))){
var inst_37794 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37824__$1 = state_37824;
if(cljs.core.truth_(inst_37794)){
var statearr_37864_37908 = state_37824__$1;
(statearr_37864_37908[(1)] = (30));

} else {
var statearr_37865_37909 = state_37824__$1;
(statearr_37865_37909[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37825 === (16))){
var inst_37760 = (state_37824[(2)]);
var inst_37761 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37762 = figwheel.client.heads_up.display_exception.call(null,inst_37761);
var state_37824__$1 = (function (){var statearr_37866 = state_37824;
(statearr_37866[(13)] = inst_37760);

return statearr_37866;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37824__$1,(17),inst_37762);
} else {
if((state_val_37825 === (30))){
var inst_37796 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37797 = figwheel.client.heads_up.display_warning.call(null,inst_37796);
var state_37824__$1 = state_37824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37824__$1,(33),inst_37797);
} else {
if((state_val_37825 === (10))){
var inst_37754 = (state_37824[(2)]);
var state_37824__$1 = state_37824;
var statearr_37867_37910 = state_37824__$1;
(statearr_37867_37910[(2)] = inst_37754);

(statearr_37867_37910[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37825 === (18))){
var inst_37770 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37771 = figwheel.client.heads_up.display_exception.call(null,inst_37770);
var state_37824__$1 = state_37824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37824__$1,(21),inst_37771);
} else {
if((state_val_37825 === (37))){
var inst_37807 = (state_37824[(2)]);
var state_37824__$1 = state_37824;
var statearr_37868_37911 = state_37824__$1;
(statearr_37868_37911[(2)] = inst_37807);

(statearr_37868_37911[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37825 === (8))){
var inst_37746 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37824__$1 = state_37824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37824__$1,(11),inst_37746);
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
});})(c__28214__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27677__auto__,c__28214__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27678__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27678__auto____0 = (function (){
var statearr_37872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37872[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27678__auto__);

(statearr_37872[(1)] = (1));

return statearr_37872;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27678__auto____1 = (function (state_37824){
while(true){
var ret_value__27679__auto__ = (function (){try{while(true){
var result__27680__auto__ = switch__27677__auto__.call(null,state_37824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27680__auto__;
}
break;
}
}catch (e37873){if((e37873 instanceof Object)){
var ex__27681__auto__ = e37873;
var statearr_37874_37912 = state_37824;
(statearr_37874_37912[(5)] = ex__27681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37913 = state_37824;
state_37824 = G__37913;
continue;
} else {
return ret_value__27679__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27678__auto__ = function(state_37824){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27678__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27678__auto____1.call(this,state_37824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27678__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27678__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27678__auto__;
})()
;})(switch__27677__auto__,c__28214__auto__,msg_hist,msg_names,msg))
})();
var state__28216__auto__ = (function (){var statearr_37875 = f__28215__auto__.call(null);
(statearr_37875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28214__auto__);

return statearr_37875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28216__auto__);
});})(c__28214__auto__,msg_hist,msg_names,msg))
);

return c__28214__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28214__auto___37976 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28214__auto___37976,ch){
return (function (){
var f__28215__auto__ = (function (){var switch__27677__auto__ = ((function (c__28214__auto___37976,ch){
return (function (state_37959){
var state_val_37960 = (state_37959[(1)]);
if((state_val_37960 === (1))){
var state_37959__$1 = state_37959;
var statearr_37961_37977 = state_37959__$1;
(statearr_37961_37977[(2)] = null);

(statearr_37961_37977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (2))){
var state_37959__$1 = state_37959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37959__$1,(4),ch);
} else {
if((state_val_37960 === (3))){
var inst_37957 = (state_37959[(2)]);
var state_37959__$1 = state_37959;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37959__$1,inst_37957);
} else {
if((state_val_37960 === (4))){
var inst_37947 = (state_37959[(7)]);
var inst_37947__$1 = (state_37959[(2)]);
var state_37959__$1 = (function (){var statearr_37962 = state_37959;
(statearr_37962[(7)] = inst_37947__$1);

return statearr_37962;
})();
if(cljs.core.truth_(inst_37947__$1)){
var statearr_37963_37978 = state_37959__$1;
(statearr_37963_37978[(1)] = (5));

} else {
var statearr_37964_37979 = state_37959__$1;
(statearr_37964_37979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (5))){
var inst_37947 = (state_37959[(7)]);
var inst_37949 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37947);
var state_37959__$1 = state_37959;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37959__$1,(8),inst_37949);
} else {
if((state_val_37960 === (6))){
var state_37959__$1 = state_37959;
var statearr_37965_37980 = state_37959__$1;
(statearr_37965_37980[(2)] = null);

(statearr_37965_37980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (7))){
var inst_37955 = (state_37959[(2)]);
var state_37959__$1 = state_37959;
var statearr_37966_37981 = state_37959__$1;
(statearr_37966_37981[(2)] = inst_37955);

(statearr_37966_37981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37960 === (8))){
var inst_37951 = (state_37959[(2)]);
var state_37959__$1 = (function (){var statearr_37967 = state_37959;
(statearr_37967[(8)] = inst_37951);

return statearr_37967;
})();
var statearr_37968_37982 = state_37959__$1;
(statearr_37968_37982[(2)] = null);

(statearr_37968_37982[(1)] = (2));


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
});})(c__28214__auto___37976,ch))
;
return ((function (switch__27677__auto__,c__28214__auto___37976,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27678__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27678__auto____0 = (function (){
var statearr_37972 = [null,null,null,null,null,null,null,null,null];
(statearr_37972[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27678__auto__);

(statearr_37972[(1)] = (1));

return statearr_37972;
});
var figwheel$client$heads_up_plugin_$_state_machine__27678__auto____1 = (function (state_37959){
while(true){
var ret_value__27679__auto__ = (function (){try{while(true){
var result__27680__auto__ = switch__27677__auto__.call(null,state_37959);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27680__auto__;
}
break;
}
}catch (e37973){if((e37973 instanceof Object)){
var ex__27681__auto__ = e37973;
var statearr_37974_37983 = state_37959;
(statearr_37974_37983[(5)] = ex__27681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37959);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37984 = state_37959;
state_37959 = G__37984;
continue;
} else {
return ret_value__27679__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27678__auto__ = function(state_37959){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27678__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27678__auto____1.call(this,state_37959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27678__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27678__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27678__auto__;
})()
;})(switch__27677__auto__,c__28214__auto___37976,ch))
})();
var state__28216__auto__ = (function (){var statearr_37975 = f__28215__auto__.call(null);
(statearr_37975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28214__auto___37976);

return statearr_37975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28216__auto__);
});})(c__28214__auto___37976,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28214__auto__){
return (function (){
var f__28215__auto__ = (function (){var switch__27677__auto__ = ((function (c__28214__auto__){
return (function (state_38005){
var state_val_38006 = (state_38005[(1)]);
if((state_val_38006 === (1))){
var inst_38000 = cljs.core.async.timeout.call(null,(3000));
var state_38005__$1 = state_38005;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38005__$1,(2),inst_38000);
} else {
if((state_val_38006 === (2))){
var inst_38002 = (state_38005[(2)]);
var inst_38003 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38005__$1 = (function (){var statearr_38007 = state_38005;
(statearr_38007[(7)] = inst_38002);

return statearr_38007;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38005__$1,inst_38003);
} else {
return null;
}
}
});})(c__28214__auto__))
;
return ((function (switch__27677__auto__,c__28214__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27678__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27678__auto____0 = (function (){
var statearr_38011 = [null,null,null,null,null,null,null,null];
(statearr_38011[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27678__auto__);

(statearr_38011[(1)] = (1));

return statearr_38011;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27678__auto____1 = (function (state_38005){
while(true){
var ret_value__27679__auto__ = (function (){try{while(true){
var result__27680__auto__ = switch__27677__auto__.call(null,state_38005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27680__auto__;
}
break;
}
}catch (e38012){if((e38012 instanceof Object)){
var ex__27681__auto__ = e38012;
var statearr_38013_38015 = state_38005;
(statearr_38013_38015[(5)] = ex__27681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38016 = state_38005;
state_38005 = G__38016;
continue;
} else {
return ret_value__27679__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27678__auto__ = function(state_38005){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27678__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27678__auto____1.call(this,state_38005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27678__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27678__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27678__auto__;
})()
;})(switch__27677__auto__,c__28214__auto__))
})();
var state__28216__auto__ = (function (){var statearr_38014 = f__28215__auto__.call(null);
(statearr_38014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28214__auto__);

return statearr_38014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28216__auto__);
});})(c__28214__auto__))
);

return c__28214__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28214__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28215__auto__ = (function (){var switch__27677__auto__ = ((function (c__28214__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38039){
var state_val_38040 = (state_38039[(1)]);
if((state_val_38040 === (1))){
var inst_38033 = cljs.core.async.timeout.call(null,(2000));
var state_38039__$1 = state_38039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38039__$1,(2),inst_38033);
} else {
if((state_val_38040 === (2))){
var inst_38035 = (state_38039[(2)]);
var inst_38036 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_38037 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38036);
var state_38039__$1 = (function (){var statearr_38041 = state_38039;
(statearr_38041[(7)] = inst_38035);

return statearr_38041;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38039__$1,inst_38037);
} else {
return null;
}
}
});})(c__28214__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27677__auto__,c__28214__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27678__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27678__auto____0 = (function (){
var statearr_38045 = [null,null,null,null,null,null,null,null];
(statearr_38045[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27678__auto__);

(statearr_38045[(1)] = (1));

return statearr_38045;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27678__auto____1 = (function (state_38039){
while(true){
var ret_value__27679__auto__ = (function (){try{while(true){
var result__27680__auto__ = switch__27677__auto__.call(null,state_38039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27680__auto__;
}
break;
}
}catch (e38046){if((e38046 instanceof Object)){
var ex__27681__auto__ = e38046;
var statearr_38047_38049 = state_38039;
(statearr_38047_38049[(5)] = ex__27681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38050 = state_38039;
state_38039 = G__38050;
continue;
} else {
return ret_value__27679__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27678__auto__ = function(state_38039){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27678__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27678__auto____1.call(this,state_38039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27678__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27678__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27678__auto__;
})()
;})(switch__27677__auto__,c__28214__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28216__auto__ = (function (){var statearr_38048 = f__28215__auto__.call(null);
(statearr_38048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28214__auto__);

return statearr_38048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28216__auto__);
});})(c__28214__auto__,figwheel_version,temp__4657__auto__))
);

return c__28214__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38051){
var map__38055 = p__38051;
var map__38055__$1 = ((((!((map__38055 == null)))?((((map__38055.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38055.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38055):map__38055);
var file = cljs.core.get.call(null,map__38055__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38055__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38055__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38057 = "";
var G__38057__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__38057),cljs.core.str("file "),cljs.core.str(file)].join(''):G__38057);
var G__38057__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__38057__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__38057__$1);
if(cljs.core.truth_((function (){var and__24748__auto__ = line;
if(cljs.core.truth_(and__24748__auto__)){
return column;
} else {
return and__24748__auto__;
}
})())){
return [cljs.core.str(G__38057__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__38057__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38058){
var map__38065 = p__38058;
var map__38065__$1 = ((((!((map__38065 == null)))?((((map__38065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38065):map__38065);
var ed = map__38065__$1;
var formatted_exception = cljs.core.get.call(null,map__38065__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38065__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38065__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38067_38071 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38068_38072 = null;
var count__38069_38073 = (0);
var i__38070_38074 = (0);
while(true){
if((i__38070_38074 < count__38069_38073)){
var msg_38075 = cljs.core._nth.call(null,chunk__38068_38072,i__38070_38074);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38075);

var G__38076 = seq__38067_38071;
var G__38077 = chunk__38068_38072;
var G__38078 = count__38069_38073;
var G__38079 = (i__38070_38074 + (1));
seq__38067_38071 = G__38076;
chunk__38068_38072 = G__38077;
count__38069_38073 = G__38078;
i__38070_38074 = G__38079;
continue;
} else {
var temp__4657__auto___38080 = cljs.core.seq.call(null,seq__38067_38071);
if(temp__4657__auto___38080){
var seq__38067_38081__$1 = temp__4657__auto___38080;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38067_38081__$1)){
var c__25571__auto___38082 = cljs.core.chunk_first.call(null,seq__38067_38081__$1);
var G__38083 = cljs.core.chunk_rest.call(null,seq__38067_38081__$1);
var G__38084 = c__25571__auto___38082;
var G__38085 = cljs.core.count.call(null,c__25571__auto___38082);
var G__38086 = (0);
seq__38067_38071 = G__38083;
chunk__38068_38072 = G__38084;
count__38069_38073 = G__38085;
i__38070_38074 = G__38086;
continue;
} else {
var msg_38087 = cljs.core.first.call(null,seq__38067_38081__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38087);

var G__38088 = cljs.core.next.call(null,seq__38067_38081__$1);
var G__38089 = null;
var G__38090 = (0);
var G__38091 = (0);
seq__38067_38071 = G__38088;
chunk__38068_38072 = G__38089;
count__38069_38073 = G__38090;
i__38070_38074 = G__38091;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38092){
var map__38095 = p__38092;
var map__38095__$1 = ((((!((map__38095 == null)))?((((map__38095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38095):map__38095);
var w = map__38095__$1;
var message = cljs.core.get.call(null,map__38095__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24748__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24748__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24748__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38107 = cljs.core.seq.call(null,plugins);
var chunk__38108 = null;
var count__38109 = (0);
var i__38110 = (0);
while(true){
if((i__38110 < count__38109)){
var vec__38111 = cljs.core._nth.call(null,chunk__38108,i__38110);
var k = cljs.core.nth.call(null,vec__38111,(0),null);
var plugin = cljs.core.nth.call(null,vec__38111,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38117 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38107,chunk__38108,count__38109,i__38110,pl_38117,vec__38111,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38117.call(null,msg_hist);
});})(seq__38107,chunk__38108,count__38109,i__38110,pl_38117,vec__38111,k,plugin))
);
} else {
}

var G__38118 = seq__38107;
var G__38119 = chunk__38108;
var G__38120 = count__38109;
var G__38121 = (i__38110 + (1));
seq__38107 = G__38118;
chunk__38108 = G__38119;
count__38109 = G__38120;
i__38110 = G__38121;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38107);
if(temp__4657__auto__){
var seq__38107__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38107__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__38107__$1);
var G__38122 = cljs.core.chunk_rest.call(null,seq__38107__$1);
var G__38123 = c__25571__auto__;
var G__38124 = cljs.core.count.call(null,c__25571__auto__);
var G__38125 = (0);
seq__38107 = G__38122;
chunk__38108 = G__38123;
count__38109 = G__38124;
i__38110 = G__38125;
continue;
} else {
var vec__38114 = cljs.core.first.call(null,seq__38107__$1);
var k = cljs.core.nth.call(null,vec__38114,(0),null);
var plugin = cljs.core.nth.call(null,vec__38114,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38126 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38107,chunk__38108,count__38109,i__38110,pl_38126,vec__38114,k,plugin,seq__38107__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38126.call(null,msg_hist);
});})(seq__38107,chunk__38108,count__38109,i__38110,pl_38126,vec__38114,k,plugin,seq__38107__$1,temp__4657__auto__))
);
} else {
}

var G__38127 = cljs.core.next.call(null,seq__38107__$1);
var G__38128 = null;
var G__38129 = (0);
var G__38130 = (0);
seq__38107 = G__38127;
chunk__38108 = G__38128;
count__38109 = G__38129;
i__38110 = G__38130;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args38131 = [];
var len__25835__auto___38138 = arguments.length;
var i__25836__auto___38139 = (0);
while(true){
if((i__25836__auto___38139 < len__25835__auto___38138)){
args38131.push((arguments[i__25836__auto___38139]));

var G__38140 = (i__25836__auto___38139 + (1));
i__25836__auto___38139 = G__38140;
continue;
} else {
}
break;
}

var G__38133 = args38131.length;
switch (G__38133) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38131.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__38134_38142 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38135_38143 = null;
var count__38136_38144 = (0);
var i__38137_38145 = (0);
while(true){
if((i__38137_38145 < count__38136_38144)){
var msg_38146 = cljs.core._nth.call(null,chunk__38135_38143,i__38137_38145);
figwheel.client.socket.handle_incoming_message.call(null,msg_38146);

var G__38147 = seq__38134_38142;
var G__38148 = chunk__38135_38143;
var G__38149 = count__38136_38144;
var G__38150 = (i__38137_38145 + (1));
seq__38134_38142 = G__38147;
chunk__38135_38143 = G__38148;
count__38136_38144 = G__38149;
i__38137_38145 = G__38150;
continue;
} else {
var temp__4657__auto___38151 = cljs.core.seq.call(null,seq__38134_38142);
if(temp__4657__auto___38151){
var seq__38134_38152__$1 = temp__4657__auto___38151;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38134_38152__$1)){
var c__25571__auto___38153 = cljs.core.chunk_first.call(null,seq__38134_38152__$1);
var G__38154 = cljs.core.chunk_rest.call(null,seq__38134_38152__$1);
var G__38155 = c__25571__auto___38153;
var G__38156 = cljs.core.count.call(null,c__25571__auto___38153);
var G__38157 = (0);
seq__38134_38142 = G__38154;
chunk__38135_38143 = G__38155;
count__38136_38144 = G__38156;
i__38137_38145 = G__38157;
continue;
} else {
var msg_38158 = cljs.core.first.call(null,seq__38134_38152__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38158);

var G__38159 = cljs.core.next.call(null,seq__38134_38152__$1);
var G__38160 = null;
var G__38161 = (0);
var G__38162 = (0);
seq__38134_38142 = G__38159;
chunk__38135_38143 = G__38160;
count__38136_38144 = G__38161;
i__38137_38145 = G__38162;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25842__auto__ = [];
var len__25835__auto___38167 = arguments.length;
var i__25836__auto___38168 = (0);
while(true){
if((i__25836__auto___38168 < len__25835__auto___38167)){
args__25842__auto__.push((arguments[i__25836__auto___38168]));

var G__38169 = (i__25836__auto___38168 + (1));
i__25836__auto___38168 = G__38169;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((0) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25843__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38164){
var map__38165 = p__38164;
var map__38165__$1 = ((((!((map__38165 == null)))?((((map__38165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38165):map__38165);
var opts = map__38165__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38163){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38163));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38171){if((e38171 instanceof Error)){
var e = e38171;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38171;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__38175){
var map__38176 = p__38175;
var map__38176__$1 = ((((!((map__38176 == null)))?((((map__38176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38176):map__38176);
var msg_name = cljs.core.get.call(null,map__38176__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1473645390017