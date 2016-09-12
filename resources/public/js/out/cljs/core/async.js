// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args28472 = [];
var len__25835__auto___28508 = arguments.length;
var i__25836__auto___28509 = (0);
while(true){
if((i__25836__auto___28509 < len__25835__auto___28508)){
args28472.push((arguments[i__25836__auto___28509]));

var G__28511 = (i__25836__auto___28509 + (1));
i__25836__auto___28509 = G__28511;
continue;
} else {
}
break;
}

var G__28481 = args28472.length;
switch (G__28481) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28472.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28486 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28486 = (function (f,blockable,meta28487){
this.f = f;
this.blockable = blockable;
this.meta28487 = meta28487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28488,meta28487__$1){
var self__ = this;
var _28488__$1 = this;
return (new cljs.core.async.t_cljs$core$async28486(self__.f,self__.blockable,meta28487__$1));
});

cljs.core.async.t_cljs$core$async28486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28488){
var self__ = this;
var _28488__$1 = this;
return self__.meta28487;
});

cljs.core.async.t_cljs$core$async28486.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28486.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28486.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28486.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28486.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28487","meta28487",-1918415839,null)], null);
});

cljs.core.async.t_cljs$core$async28486.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28486.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28486";

cljs.core.async.t_cljs$core$async28486.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async28486");
});

cljs.core.async.__GT_t_cljs$core$async28486 = (function cljs$core$async$__GT_t_cljs$core$async28486(f__$1,blockable__$1,meta28487){
return (new cljs.core.async.t_cljs$core$async28486(f__$1,blockable__$1,meta28487));
});

}

return (new cljs.core.async.t_cljs$core$async28486(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args28575 = [];
var len__25835__auto___28597 = arguments.length;
var i__25836__auto___28598 = (0);
while(true){
if((i__25836__auto___28598 < len__25835__auto___28597)){
args28575.push((arguments[i__25836__auto___28598]));

var G__28606 = (i__25836__auto___28598 + (1));
i__25836__auto___28598 = G__28606;
continue;
} else {
}
break;
}

var G__28587 = args28575.length;
switch (G__28587) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28575.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args28621 = [];
var len__25835__auto___28634 = arguments.length;
var i__25836__auto___28636 = (0);
while(true){
if((i__25836__auto___28636 < len__25835__auto___28634)){
args28621.push((arguments[i__25836__auto___28636]));

var G__28640 = (i__25836__auto___28636 + (1));
i__25836__auto___28636 = G__28640;
continue;
} else {
}
break;
}

var G__28630 = args28621.length;
switch (G__28630) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28621.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args28652 = [];
var len__25835__auto___28660 = arguments.length;
var i__25836__auto___28661 = (0);
while(true){
if((i__25836__auto___28661 < len__25835__auto___28660)){
args28652.push((arguments[i__25836__auto___28661]));

var G__28663 = (i__25836__auto___28661 + (1));
i__25836__auto___28661 = G__28663;
continue;
} else {
}
break;
}

var G__28656 = args28652.length;
switch (G__28656) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28652.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28678 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28678);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28678,ret){
return (function (){
return fn1.call(null,val_28678);
});})(val_28678,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args28685 = [];
var len__25835__auto___28708 = arguments.length;
var i__25836__auto___28709 = (0);
while(true){
if((i__25836__auto___28709 < len__25835__auto___28708)){
args28685.push((arguments[i__25836__auto___28709]));

var G__28710 = (i__25836__auto___28709 + (1));
i__25836__auto___28709 = G__28710;
continue;
} else {
}
break;
}

var G__28694 = args28685.length;
switch (G__28694) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28685.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25675__auto___28734 = n;
var x_28735 = (0);
while(true){
if((x_28735 < n__25675__auto___28734)){
(a[x_28735] = (0));

var G__28739 = (x_28735 + (1));
x_28735 = G__28739;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28741 = (i + (1));
i = G__28741;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28760 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28760 = (function (alt_flag,flag,meta28761){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28761 = meta28761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28762,meta28761__$1){
var self__ = this;
var _28762__$1 = this;
return (new cljs.core.async.t_cljs$core$async28760(self__.alt_flag,self__.flag,meta28761__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28760.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28762){
var self__ = this;
var _28762__$1 = this;
return self__.meta28761;
});})(flag))
;

cljs.core.async.t_cljs$core$async28760.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28760.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28760.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28760.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28760.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28761","meta28761",1334853803,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28760.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28760.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28760";

cljs.core.async.t_cljs$core$async28760.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async28760");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28760 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28760(alt_flag__$1,flag__$1,meta28761){
return (new cljs.core.async.t_cljs$core$async28760(alt_flag__$1,flag__$1,meta28761));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28760(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28846 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28846 = (function (alt_handler,flag,cb,meta28847){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28847 = meta28847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28848,meta28847__$1){
var self__ = this;
var _28848__$1 = this;
return (new cljs.core.async.t_cljs$core$async28846(self__.alt_handler,self__.flag,self__.cb,meta28847__$1));
});

cljs.core.async.t_cljs$core$async28846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28848){
var self__ = this;
var _28848__$1 = this;
return self__.meta28847;
});

cljs.core.async.t_cljs$core$async28846.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28846.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28846.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28846.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28847","meta28847",-962709615,null)], null);
});

cljs.core.async.t_cljs$core$async28846.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28846";

cljs.core.async.t_cljs$core$async28846.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async28846");
});

cljs.core.async.__GT_t_cljs$core$async28846 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28846(alt_handler__$1,flag__$1,cb__$1,meta28847){
return (new cljs.core.async.t_cljs$core$async28846(alt_handler__$1,flag__$1,cb__$1,meta28847));
});

}

return (new cljs.core.async.t_cljs$core$async28846(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28910_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28910_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28911_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28911_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24760__auto__ = wport;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28936 = (i + (1));
i = G__28936;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24760__auto__ = ret;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24748__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24748__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24748__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25842__auto__ = [];
var len__25835__auto___28957 = arguments.length;
var i__25836__auto___28959 = (0);
while(true){
if((i__25836__auto___28959 < len__25835__auto___28957)){
args__25842__auto__.push((arguments[i__25836__auto___28959]));

var G__28963 = (i__25836__auto___28959 + (1));
i__25836__auto___28959 = G__28963;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28949){
var map__28950 = p__28949;
var map__28950__$1 = ((((!((map__28950 == null)))?((((map__28950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28950):map__28950);
var opts = map__28950__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28938){
var G__28939 = cljs.core.first.call(null,seq28938);
var seq28938__$1 = cljs.core.next.call(null,seq28938);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28939,seq28938__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args29015 = [];
var len__25835__auto___29136 = arguments.length;
var i__25836__auto___29137 = (0);
while(true){
if((i__25836__auto___29137 < len__25835__auto___29136)){
args29015.push((arguments[i__25836__auto___29137]));

var G__29138 = (i__25836__auto___29137 + (1));
i__25836__auto___29137 = G__29138;
continue;
} else {
}
break;
}

var G__29025 = args29015.length;
switch (G__29025) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29015.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28214__auto___29144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28214__auto___29144){
return (function (){
var f__28215__auto__ = (function (){var switch__27677__auto__ = ((function (c__28214__auto___29144){
return (function (state_29089){
var state_val_29090 = (state_29089[(1)]);
if((state_val_29090 === (7))){
var inst_29077 = (state_29089[(2)]);
var state_29089__$1 = state_29089;
var statearr_29098_29146 = state_29089__$1;
(statearr_29098_29146[(2)] = inst_29077);

(statearr_29098_29146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29090 === (1))){
var state_29089__$1 = state_29089;
var statearr_29099_29150 = state_29089__$1;
(statearr_29099_29150[(2)] = null);

(statearr_29099_29150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29090 === (4))){
var inst_29048 = (state_29089[(7)]);
var inst_29048__$1 = (state_29089[(2)]);
var inst_29056 = (inst_29048__$1 == null);
var state_29089__$1 = (function (){var statearr_29102 = state_29089;
(statearr_29102[(7)] = inst_29048__$1);

return statearr_29102;
})();
if(cljs.core.truth_(inst_29056)){
var statearr_29103_29155 = state_29089__$1;
(statearr_29103_29155[(1)] = (5));

} else {
var statearr_29105_29156 = state_29089__$1;
(statearr_29105_29156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29090 === (13))){
var state_29089__$1 = state_29089;
var statearr_29106_29159 = state_29089__$1;
(statearr_29106_29159[(2)] = null);

(statearr_29106_29159[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29090 === (6))){
var inst_29048 = (state_29089[(7)]);
var state_29089__$1 = state_29089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29089__$1,(11),to,inst_29048);
} else {
if((state_val_29090 === (3))){
var inst_29084 = (state_29089[(2)]);
var state_29089__$1 = state_29089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29089__$1,inst_29084);
} else {
if((state_val_29090 === (12))){
var state_29089__$1 = state_29089;
var statearr_29110_29167 = state_29089__$1;
(statearr_29110_29167[(2)] = null);

(statearr_29110_29167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29090 === (2))){
var state_29089__$1 = state_29089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29089__$1,(4),from);
} else {
if((state_val_29090 === (11))){
var inst_29068 = (state_29089[(2)]);
var state_29089__$1 = state_29089;
if(cljs.core.truth_(inst_29068)){
var statearr_29112_29170 = state_29089__$1;
(statearr_29112_29170[(1)] = (12));

} else {
var statearr_29113_29172 = state_29089__$1;
(statearr_29113_29172[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29090 === (9))){
var state_29089__$1 = state_29089;
var statearr_29114_29175 = state_29089__$1;
(statearr_29114_29175[(2)] = null);

(statearr_29114_29175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29090 === (5))){
var state_29089__$1 = state_29089;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29115_29176 = state_29089__$1;
(statearr_29115_29176[(1)] = (8));

} else {
var statearr_29116_29177 = state_29089__$1;
(statearr_29116_29177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29090 === (14))){
var inst_29075 = (state_29089[(2)]);
var state_29089__$1 = state_29089;
var statearr_29119_29178 = state_29089__$1;
(statearr_29119_29178[(2)] = inst_29075);

(statearr_29119_29178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29090 === (10))){
var inst_29065 = (state_29089[(2)]);
var state_29089__$1 = state_29089;
var statearr_29120_29186 = state_29089__$1;
(statearr_29120_29186[(2)] = inst_29065);

(statearr_29120_29186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29090 === (8))){
var inst_29061 = cljs.core.async.close_BANG_.call(null,to);
var state_29089__$1 = state_29089;
var statearr_29121_29187 = state_29089__$1;
(statearr_29121_29187[(2)] = inst_29061);

(statearr_29121_29187[(1)] = (10));


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
});})(c__28214__auto___29144))
;
return ((function (switch__27677__auto__,c__28214__auto___29144){
return (function() {
var cljs$core$async$state_machine__27678__auto__ = null;
var cljs$core$async$state_machine__27678__auto____0 = (function (){
var statearr_29130 = [null,null,null,null,null,null,null,null];
(statearr_29130[(0)] = cljs$core$async$state_machine__27678__auto__);

(statearr_29130[(1)] = (1));

return statearr_29130;
});
var cljs$core$async$state_machine__27678__auto____1 = (function (state_29089){
while(true){
var ret_value__27679__auto__ = (function (){try{while(true){
var result__27680__auto__ = switch__27677__auto__.call(null,state_29089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27680__auto__;
}
break;
}
}catch (e29131){if((e29131 instanceof Object)){
var ex__27681__auto__ = e29131;
var statearr_29132_29193 = state_29089;
(statearr_29132_29193[(5)] = ex__27681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29194 = state_29089;
state_29089 = G__29194;
continue;
} else {
return ret_value__27679__auto__;
}
break;
}
});
cljs$core$async$state_machine__27678__auto__ = function(state_29089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27678__auto____1.call(this,state_29089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27678__auto____0;
cljs$core$async$state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27678__auto____1;
return cljs$core$async$state_machine__27678__auto__;
})()
;})(switch__27677__auto__,c__28214__auto___29144))
})();
var state__28216__auto__ = (function (){var statearr_29133 = f__28215__auto__.call(null);
(statearr_29133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28214__auto___29144);

return statearr_29133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28216__auto__);
});})(c__28214__auto___29144))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__29495){
var vec__29496 = p__29495;
var v = cljs.core.nth.call(null,vec__29496,(0),null);
var p = cljs.core.nth.call(null,vec__29496,(1),null);
var job = vec__29496;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28214__auto___29822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28214__auto___29822,res,vec__29496,v,p,job,jobs,results){
return (function (){
var f__28215__auto__ = (function (){var switch__27677__auto__ = ((function (c__28214__auto___29822,res,vec__29496,v,p,job,jobs,results){
return (function (state_29509){
var state_val_29510 = (state_29509[(1)]);
if((state_val_29510 === (1))){
var state_29509__$1 = state_29509;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29509__$1,(2),res,v);
} else {
if((state_val_29510 === (2))){
var inst_29506 = (state_29509[(2)]);
var inst_29507 = cljs.core.async.close_BANG_.call(null,res);
var state_29509__$1 = (function (){var statearr_29513 = state_29509;
(statearr_29513[(7)] = inst_29506);

return statearr_29513;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29509__$1,inst_29507);
} else {
return null;
}
}
});})(c__28214__auto___29822,res,vec__29496,v,p,job,jobs,results))
;
return ((function (switch__27677__auto__,c__28214__auto___29822,res,vec__29496,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27678__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27678__auto____0 = (function (){
var statearr_29520 = [null,null,null,null,null,null,null,null];
(statearr_29520[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27678__auto__);

(statearr_29520[(1)] = (1));

return statearr_29520;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27678__auto____1 = (function (state_29509){
while(true){
var ret_value__27679__auto__ = (function (){try{while(true){
var result__27680__auto__ = switch__27677__auto__.call(null,state_29509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27680__auto__;
}
break;
}
}catch (e29521){if((e29521 instanceof Object)){
var ex__27681__auto__ = e29521;
var statearr_29522_29852 = state_29509;
(statearr_29522_29852[(5)] = ex__27681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29857 = state_29509;
state_29509 = G__29857;
continue;
} else {
return ret_value__27679__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27678__auto__ = function(state_29509){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27678__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27678__auto____1.call(this,state_29509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27678__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27678__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27678__auto__;
})()
;})(switch__27677__auto__,c__28214__auto___29822,res,vec__29496,v,p,job,jobs,results))
})();
var state__28216__auto__ = (function (){var statearr_29527 = f__28215__auto__.call(null);
(statearr_29527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28214__auto___29822);

return statearr_29527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28216__auto__);
});})(c__28214__auto___29822,res,vec__29496,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__29529){
var vec__29530 = p__29529;
var v = cljs.core.nth.call(null,vec__29530,(0),null);
var p = cljs.core.nth.call(null,vec__29530,(1),null);
var job = vec__29530;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25675__auto___29874 = n;
var __29876 = (0);
while(true){
if((__29876 < n__25675__auto___29874)){
var G__29534_29880 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__29534_29880) {
case "compute":
var c__28214__auto___29883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29876,c__28214__auto___29883,G__29534_29880,n__25675__auto___29874,jobs,results,process,async){
return (function (){
var f__28215__auto__ = (function (){var switch__27677__auto__ = ((function (__29876,c__28214__auto___29883,G__29534_29880,n__25675__auto___29874,jobs,results,process,async){
return (function (state_29553){
var state_val_29554 = (state_29553[(1)]);
if((state_val_29554 === (1))){
var state_29553__$1 = state_29553;
var statearr_29558_29884 = state_29553__$1;
(statearr_29558_29884[(2)] = null);

(statearr_29558_29884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (2))){
var state_29553__$1 = state_29553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29553__$1,(4),jobs);
} else {
if((state_val_29554 === (3))){
var inst_29549 = (state_29553[(2)]);
var state_29553__$1 = state_29553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29553__$1,inst_29549);
} else {
if((state_val_29554 === (4))){
var inst_29541 = (state_29553[(2)]);
var inst_29542 = process.call(null,inst_29541);
var state_29553__$1 = state_29553;
if(cljs.core.truth_(inst_29542)){
var statearr_29561_29894 = state_29553__$1;
(statearr_29561_29894[(1)] = (5));

} else {
var statearr_29562_29895 = state_29553__$1;
(statearr_29562_29895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (5))){
var state_29553__$1 = state_29553;
var statearr_29563_29899 = state_29553__$1;
(statearr_29563_29899[(2)] = null);

(statearr_29563_29899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (6))){
var state_29553__$1 = state_29553;
var statearr_29565_29906 = state_29553__$1;
(statearr_29565_29906[(2)] = null);

(statearr_29565_29906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29554 === (7))){
var inst_29547 = (state_29553[(2)]);
var state_29553__$1 = state_29553;
var statearr_29571_29912 = state_29553__$1;
(statearr_29571_29912[(2)] = inst_29547);

(statearr_29571_29912[(1)] = (3));


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
});})(__29876,c__28214__auto___29883,G__29534_29880,n__25675__auto___29874,jobs,results,process,async))
;
return ((function (__29876,switch__27677__auto__,c__28214__auto___29883,G__29534_29880,n__25675__auto___29874,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27678__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27678__auto____0 = (function (){
var statearr_29576 = [null,null,null,null,null,null,null];
(statearr_29576[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27678__auto__);

(statearr_29576[(1)] = (1));

return statearr_29576;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27678__auto____1 = (function (state_29553){
while(true){
var ret_value__27679__auto__ = (function (){try{while(true){
var result__27680__auto__ = switch__27677__auto__.call(null,state_29553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27680__auto__;
}
break;
}
}catch (e29578){if((e29578 instanceof Object)){
var ex__27681__auto__ = e29578;
var statearr_29579_29926 = state_29553;
(statearr_29579_29926[(5)] = ex__27681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29931 = state_29553;
state_29553 = G__29931;
continue;
} else {
return ret_value__27679__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27678__auto__ = function(state_29553){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27678__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27678__auto____1.call(this,state_29553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27678__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27678__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27678__auto__;
})()
;})(__29876,switch__27677__auto__,c__28214__auto___29883,G__29534_29880,n__25675__auto___29874,jobs,results,process,async))
})();
var state__28216__auto__ = (function (){var statearr_29582 = f__28215__auto__.call(null);
(statearr_29582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28214__auto___29883);

return statearr_29582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28216__auto__);
});})(__29876,c__28214__auto___29883,G__29534_29880,n__25675__auto___29874,jobs,results,process,async))
);


break;
case "async":
var c__28214__auto___29942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__29876,c__28214__auto___29942,G__29534_29880,n__25675__auto___29874,jobs,results,process,async){
return (function (){
var f__28215__auto__ = (function (){var switch__27677__auto__ = ((function (__29876,c__28214__auto___29942,G__29534_29880,n__25675__auto___29874,jobs,results,process,async){
return (function (state_29602){
var state_val_29603 = (state_29602[(1)]);
if((state_val_29603 === (1))){
var state_29602__$1 = state_29602;
var statearr_29605_29949 = state_29602__$1;
(statearr_29605_29949[(2)] = null);

(statearr_29605_29949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29603 === (2))){
var state_29602__$1 = state_29602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29602__$1,(4),jobs);
} else {
if((state_val_29603 === (3))){
var inst_29599 = (state_29602[(2)]);
var state_29602__$1 = state_29602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29602__$1,inst_29599);
} else {
if((state_val_29603 === (4))){
var inst_29590 = (state_29602[(2)]);
var inst_29591 = async.call(null,inst_29590);
var state_29602__$1 = state_29602;
if(cljs.core.truth_(inst_29591)){
var statearr_29610_29960 = state_29602__$1;
(statearr_29610_29960[(1)] = (5));

} else {
var statearr_29611_29968 = state_29602__$1;
(statearr_29611_29968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29603 === (5))){
var state_29602__$1 = state_29602;
var statearr_29612_29969 = state_29602__$1;
(statearr_29612_29969[(2)] = null);

(statearr_29612_29969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29603 === (6))){
var state_29602__$1 = state_29602;
var statearr_29613_29978 = state_29602__$1;
(statearr_29613_29978[(2)] = null);

(statearr_29613_29978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29603 === (7))){
var inst_29597 = (state_29602[(2)]);
var state_29602__$1 = state_29602;
var statearr_29615_29982 = state_29602__$1;
(statearr_29615_29982[(2)] = inst_29597);

(statearr_29615_29982[(1)] = (3));


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
});})(__29876,c__28214__auto___29942,G__29534_29880,n__25675__auto___29874,jobs,results,process,async))
;
return ((function (__29876,switch__27677__auto__,c__28214__auto___29942,G__29534_29880,n__25675__auto___29874,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27678__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27678__auto____0 = (function (){
var statearr_29619 = [null,null,null,null,null,null,null];
(statearr_29619[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27678__auto__);

(statearr_29619[(1)] = (1));

return statearr_29619;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27678__auto____1 = (function (state_29602){
while(true){
var ret_value__27679__auto__ = (function (){try{while(true){
var result__27680__auto__ = switch__27677__auto__.call(null,state_29602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27680__auto__;
}
break;
}
}catch (e29621){if((e29621 instanceof Object)){
var ex__27681__auto__ = e29621;
var statearr_29622_29993 = state_29602;
(statearr_29622_29993[(5)] = ex__27681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30000 = state_29602;
state_29602 = G__30000;
continue;
} else {
return ret_value__27679__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27678__auto__ = function(state_29602){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27678__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27678__auto____1.call(this,state_29602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27678__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27678__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27678__auto__;
})()
;})(__29876,switch__27677__auto__,c__28214__auto___29942,G__29534_29880,n__25675__auto___29874,jobs,results,process,async))
})();
var state__28216__auto__ = (function (){var statearr_29623 = f__28215__auto__.call(null);
(statearr_29623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28214__auto___29942);

return statearr_29623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28216__auto__);
});})(__29876,c__28214__auto___29942,G__29534_29880,n__25675__auto___29874,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30006 = (__29876 + (1));
__29876 = G__30006;
continue;
} else {
}
break;
}

var c__28214__auto___30007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28214__auto___30007,jobs,results,process,async){
return (function (){
var f__28215__auto__ = (function (){var switch__27677__auto__ = ((function (c__28214__auto___30007,jobs,results,process,async){
return (function (state_29651){
var state_val_29652 = (state_29651[(1)]);
if((state_val_29652 === (1))){
var state_29651__$1 = state_29651;
var statearr_29660_30016 = state_29651__$1;
(statearr_29660_30016[(2)] = null);

(statearr_29660_30016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (2))){
var state_29651__$1 = state_29651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29651__$1,(4),from);
} else {
if((state_val_29652 === (3))){
var inst_29648 = (state_29651[(2)]);
var state_29651__$1 = state_29651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29651__$1,inst_29648);
} else {
if((state_val_29652 === (4))){
var inst_29630 = (state_29651[(7)]);
var inst_29630__$1 = (state_29651[(2)]);
var inst_29631 = (inst_29630__$1 == null);
var state_29651__$1 = (function (){var statearr_29665 = state_29651;
(statearr_29665[(7)] = inst_29630__$1);

return statearr_29665;
})();
if(cljs.core.truth_(inst_29631)){
var statearr_29667_30025 = state_29651__$1;
(statearr_29667_30025[(1)] = (5));

} else {
var statearr_29668_30026 = state_29651__$1;
(statearr_29668_30026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (5))){
var inst_29633 = cljs.core.async.close_BANG_.call(null,jobs);
var state_29651__$1 = state_29651;
var statearr_29669_30037 = state_29651__$1;
(statearr_29669_30037[(2)] = inst_29633);

(statearr_29669_30037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (6))){
var inst_29635 = (state_29651[(8)]);
var inst_29630 = (state_29651[(7)]);
var inst_29635__$1 = cljs.core.async.chan.call(null,(1));
var inst_29636 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29637 = [inst_29630,inst_29635__$1];
var inst_29638 = (new cljs.core.PersistentVector(null,2,(5),inst_29636,inst_29637,null));
var state_29651__$1 = (function (){var statearr_29672 = state_29651;
(statearr_29672[(8)] = inst_29635__$1);

return statearr_29672;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29651__$1,(8),jobs,inst_29638);
} else {
if((state_val_29652 === (7))){
var inst_29646 = (state_29651[(2)]);
var state_29651__$1 = state_29651;
var statearr_29677_30049 = state_29651__$1;
(statearr_29677_30049[(2)] = inst_29646);

(statearr_29677_30049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29652 === (8))){
var inst_29635 = (state_29651[(8)]);
var inst_29640 = (state_29651[(2)]);
var state_29651__$1 = (function (){var statearr_29678 = state_29651;
(statearr_29678[(9)] = inst_29640);

return statearr_29678;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29651__$1,(9),results,inst_29635);
} else {
if((state_val_29652 === (9))){
var inst_29643 = (state_29651[(2)]);
var state_29651__$1 = (function (){var statearr_29681 = state_29651;
(statearr_29681[(10)] = inst_29643);

return statearr_29681;
})();
var statearr_29682_30059 = state_29651__$1;
(statearr_29682_30059[(2)] = null);

(statearr_29682_30059[(1)] = (2));


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
});})(c__28214__auto___30007,jobs,results,process,async))
;
return ((function (switch__27677__auto__,c__28214__auto___30007,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27678__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27678__auto____0 = (function (){
var statearr_29691 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29691[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27678__auto__);

(statearr_29691[(1)] = (1));

return statearr_29691;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27678__auto____1 = (function (state_29651){
while(true){
var ret_value__27679__auto__ = (function (){try{while(true){
var result__27680__auto__ = switch__27677__auto__.call(null,state_29651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27680__auto__;
}
break;
}
}catch (e29692){if((e29692 instanceof Object)){
var ex__27681__auto__ = e29692;
var statearr_29693_30070 = state_29651;
(statearr_29693_30070[(5)] = ex__27681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30078 = state_29651;
state_29651 = G__30078;
continue;
} else {
return ret_value__27679__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27678__auto__ = function(state_29651){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27678__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27678__auto____1.call(this,state_29651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27678__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27678__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27678__auto__;
})()
;})(switch__27677__auto__,c__28214__auto___30007,jobs,results,process,async))
})();
var state__28216__auto__ = (function (){var statearr_29698 = f__28215__auto__.call(null);
(statearr_29698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28214__auto___30007);

return statearr_29698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28216__auto__);
});})(c__28214__auto___30007,jobs,results,process,async))
);


var c__28214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28214__auto__,jobs,results,process,async){
return (function (){
var f__28215__auto__ = (function (){var switch__27677__auto__ = ((function (c__28214__auto__,jobs,results,process,async){
return (function (state_29746){
var state_val_29747 = (state_29746[(1)]);
if((state_val_29747 === (7))){
var inst_29742 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
var statearr_29749_30086 = state_29746__$1;
(statearr_29749_30086[(2)] = inst_29742);

(statearr_29749_30086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (20))){
var state_29746__$1 = state_29746;
var statearr_29752_30092 = state_29746__$1;
(statearr_29752_30092[(2)] = null);

(statearr_29752_30092[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (1))){
var state_29746__$1 = state_29746;
var statearr_29753_30094 = state_29746__$1;
(statearr_29753_30094[(2)] = null);

(statearr_29753_30094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (4))){
var inst_29701 = (state_29746[(7)]);
var inst_29701__$1 = (state_29746[(2)]);
var inst_29703 = (inst_29701__$1 == null);
var state_29746__$1 = (function (){var statearr_29755 = state_29746;
(statearr_29755[(7)] = inst_29701__$1);

return statearr_29755;
})();
if(cljs.core.truth_(inst_29703)){
var statearr_29760_30095 = state_29746__$1;
(statearr_29760_30095[(1)] = (5));

} else {
var statearr_29761_30096 = state_29746__$1;
(statearr_29761_30096[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (15))){
var inst_29721 = (state_29746[(8)]);
var state_29746__$1 = state_29746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29746__$1,(18),to,inst_29721);
} else {
if((state_val_29747 === (21))){
var inst_29737 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
var statearr_29762_30097 = state_29746__$1;
(statearr_29762_30097[(2)] = inst_29737);

(statearr_29762_30097[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (13))){
var inst_29739 = (state_29746[(2)]);
var state_29746__$1 = (function (){var statearr_29764 = state_29746;
(statearr_29764[(9)] = inst_29739);

return statearr_29764;
})();
var statearr_29765_30100 = state_29746__$1;
(statearr_29765_30100[(2)] = null);

(statearr_29765_30100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (6))){
var inst_29701 = (state_29746[(7)]);
var state_29746__$1 = state_29746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29746__$1,(11),inst_29701);
} else {
if((state_val_29747 === (17))){
var inst_29730 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
if(cljs.core.truth_(inst_29730)){
var statearr_29767_30102 = state_29746__$1;
(statearr_29767_30102[(1)] = (19));

} else {
var statearr_29769_30103 = state_29746__$1;
(statearr_29769_30103[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (3))){
var inst_29744 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29746__$1,inst_29744);
} else {
if((state_val_29747 === (12))){
var inst_29716 = (state_29746[(10)]);
var state_29746__$1 = state_29746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29746__$1,(14),inst_29716);
} else {
if((state_val_29747 === (2))){
var state_29746__$1 = state_29746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29746__$1,(4),results);
} else {
if((state_val_29747 === (19))){
var state_29746__$1 = state_29746;
var statearr_29775_30104 = state_29746__$1;
(statearr_29775_30104[(2)] = null);

(statearr_29775_30104[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (11))){
var inst_29716 = (state_29746[(2)]);
var state_29746__$1 = (function (){var statearr_29777 = state_29746;
(statearr_29777[(10)] = inst_29716);

return statearr_29777;
})();
var statearr_29778_30107 = state_29746__$1;
(statearr_29778_30107[(2)] = null);

(statearr_29778_30107[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (9))){
var state_29746__$1 = state_29746;
var statearr_29783_30110 = state_29746__$1;
(statearr_29783_30110[(2)] = null);

(statearr_29783_30110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (5))){
var state_29746__$1 = state_29746;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29787_30111 = state_29746__$1;
(statearr_29787_30111[(1)] = (8));

} else {
var statearr_29788_30112 = state_29746__$1;
(statearr_29788_30112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (14))){
var inst_29721 = (state_29746[(8)]);
var inst_29724 = (state_29746[(11)]);
var inst_29721__$1 = (state_29746[(2)]);
var inst_29723 = (inst_29721__$1 == null);
var inst_29724__$1 = cljs.core.not.call(null,inst_29723);
var state_29746__$1 = (function (){var statearr_29791 = state_29746;
(statearr_29791[(8)] = inst_29721__$1);

(statearr_29791[(11)] = inst_29724__$1);

return statearr_29791;
})();
if(inst_29724__$1){
var statearr_29792_30113 = state_29746__$1;
(statearr_29792_30113[(1)] = (15));

} else {
var statearr_29793_30114 = state_29746__$1;
(statearr_29793_30114[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (16))){
var inst_29724 = (state_29746[(11)]);
var state_29746__$1 = state_29746;
var statearr_29794_30117 = state_29746__$1;
(statearr_29794_30117[(2)] = inst_29724);

(statearr_29794_30117[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (10))){
var inst_29713 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
var statearr_29795_30119 = state_29746__$1;
(statearr_29795_30119[(2)] = inst_29713);

(statearr_29795_30119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (18))){
var inst_29727 = (state_29746[(2)]);
var state_29746__$1 = state_29746;
var statearr_29796_30120 = state_29746__$1;
(statearr_29796_30120[(2)] = inst_29727);

(statearr_29796_30120[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29747 === (8))){
var inst_29710 = cljs.core.async.close_BANG_.call(null,to);
var state_29746__$1 = state_29746;
var statearr_29797_30121 = state_29746__$1;
(statearr_29797_30121[(2)] = inst_29710);

(statearr_29797_30121[(1)] = (10));


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
});})(c__28214__auto__,jobs,results,process,async))
;
return ((function (switch__27677__auto__,c__28214__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27678__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27678__auto____0 = (function (){
var statearr_29804 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29804[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27678__auto__);

(statearr_29804[(1)] = (1));

return statearr_29804;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27678__auto____1 = (function (state_29746){
while(true){
var ret_value__27679__auto__ = (function (){try{while(true){
var result__27680__auto__ = switch__27677__auto__.call(null,state_29746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27680__auto__;
}
break;
}
}catch (e29805){if((e29805 instanceof Object)){
var ex__27681__auto__ = e29805;
var statearr_29806_30125 = state_29746;
(statearr_29806_30125[(5)] = ex__27681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30126 = state_29746;
state_29746 = G__30126;
continue;
} else {
return ret_value__27679__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27678__auto__ = function(state_29746){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27678__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27678__auto____1.call(this,state_29746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27678__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27678__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27678__auto__;
})()
;})(switch__27677__auto__,c__28214__auto__,jobs,results,process,async))
})();
var state__28216__auto__ = (function (){var statearr_29812 = f__28215__auto__.call(null);
(statearr_29812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28214__auto__);

return statearr_29812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28216__auto__);
});})(c__28214__auto__,jobs,results,process,async))
);

return c__28214__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args30129 = [];
var len__25835__auto___30135 = arguments.length;
var i__25836__auto___30136 = (0);
while(true){
if((i__25836__auto___30136 < len__25835__auto___30135)){
args30129.push((arguments[i__25836__auto___30136]));

var G__30137 = (i__25836__auto___30136 + (1));
i__25836__auto___30136 = G__30137;
continue;
} else {
}
break;
}

var G__30133 = args30129.length;
switch (G__30133) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30129.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args30141 = [];
var len__25835__auto___30145 = arguments.length;
var i__25836__auto___30146 = (0);
while(true){
if((i__25836__auto___30146 < len__25835__auto___30145)){
args30141.push((arguments[i__25836__auto___30146]));

var G__30148 = (i__25836__auto___30146 + (1));
i__25836__auto___30146 = G__30148;
continue;
} else {
}
break;
}

var G__30144 = args30141.length;
switch (G__30144) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30141.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args30158 = [];
var len__25835__auto___30244 = arguments.length;
var i__25836__auto___30245 = (0);
while(true){
if((i__25836__auto___30245 < len__25835__auto___30244)){
args30158.push((arguments[i__25836__auto___30245]));

var G__30248 = (i__25836__auto___30245 + (1));
i__25836__auto___30245 = G__30248;
continue;
} else {
}
break;
}

var G__30168 = args30158.length;
switch (G__30168) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30158.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28214__auto___30259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28214__auto___30259,tc,fc){
return (function (){
var f__28215__auto__ = (function (){var switch__27677__auto__ = ((function (c__28214__auto___30259,tc,fc){
return (function (state_30197){
var state_val_30198 = (state_30197[(1)]);
if((state_val_30198 === (7))){
var inst_30193 = (state_30197[(2)]);
var state_30197__$1 = state_30197;
var statearr_30201_30268 = state_30197__$1;
(statearr_30201_30268[(2)] = inst_30193);

(statearr_30201_30268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30198 === (1))){
var state_30197__$1 = state_30197;
var statearr_30205_30274 = state_30197__$1;
(statearr_30205_30274[(2)] = null);

(statearr_30205_30274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30198 === (4))){
var inst_30173 = (state_30197[(7)]);
var inst_30173__$1 = (state_30197[(2)]);
var inst_30175 = (inst_30173__$1 == null);
var state_30197__$1 = (function (){var statearr_30206 = state_30197;
(statearr_30206[(7)] = inst_30173__$1);

return statearr_30206;
})();
if(cljs.core.truth_(inst_30175)){
var statearr_30207_30288 = state_30197__$1;
(statearr_30207_30288[(1)] = (5));

} else {
var statearr_30208_30290 = state_30197__$1;
(statearr_30208_30290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30198 === (13))){
var state_30197__$1 = state_30197;
var statearr_30209_30293 = state_30197__$1;
(statearr_30209_30293[(2)] = null);

(statearr_30209_30293[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30198 === (6))){
var inst_30173 = (state_30197[(7)]);
var inst_30180 = p.call(null,inst_30173);
var state_30197__$1 = state_30197;
if(cljs.core.truth_(inst_30180)){
var statearr_30211_30300 = state_30197__$1;
(statearr_30211_30300[(1)] = (9));

} else {
var statearr_30212_30303 = state_30197__$1;
(statearr_30212_30303[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30198 === (3))){
var inst_30195 = (state_30197[(2)]);
var state_30197__$1 = state_30197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30197__$1,inst_30195);
} else {
if((state_val_30198 === (12))){
var state_30197__$1 = state_30197;
var statearr_30218_30309 = state_30197__$1;
(statearr_30218_30309[(2)] = null);

(statearr_30218_30309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30198 === (2))){
var state_30197__$1 = state_30197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30197__$1,(4),ch);
} else {
if((state_val_30198 === (11))){
var inst_30173 = (state_30197[(7)]);
var inst_30184 = (state_30197[(2)]);
var state_30197__$1 = state_30197;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30197__$1,(8),inst_30184,inst_30173);
} else {
if((state_val_30198 === (9))){
var state_30197__$1 = state_30197;
var statearr_30220_30323 = state_30197__$1;
(statearr_30220_30323[(2)] = tc);

(statearr_30220_30323[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30198 === (5))){
var inst_30177 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30178 = cljs.core.async.close_BANG_.call(null,fc);
var state_30197__$1 = (function (){var statearr_30222 = state_30197;
(statearr_30222[(8)] = inst_30177);

return statearr_30222;
})();
var statearr_30224_30336 = state_30197__$1;
(statearr_30224_30336[(2)] = inst_30178);

(statearr_30224_30336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30198 === (14))){
var inst_30191 = (state_30197[(2)]);
var state_30197__$1 = state_30197;
var statearr_30225_30343 = state_30197__$1;
(statearr_30225_30343[(2)] = inst_30191);

(statearr_30225_30343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30198 === (10))){
var state_30197__$1 = state_30197;
var statearr_30226_30346 = state_30197__$1;
(statearr_30226_30346[(2)] = fc);

(statearr_30226_30346[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30198 === (8))){
var inst_30186 = (state_30197[(2)]);
var state_30197__$1 = state_30197;
if(cljs.core.truth_(inst_30186)){
var statearr_30227_30356 = state_30197__$1;
(statearr_30227_30356[(1)] = (12));

} else {
var statearr_30228_30358 = state_30197__$1;
(statearr_30228_30358[(1)] = (13));

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
});})(c__28214__auto___30259,tc,fc))
;
return ((function (switch__27677__auto__,c__28214__auto___30259,tc,fc){
return (function() {
var cljs$core$async$state_machine__27678__auto__ = null;
var cljs$core$async$state_machine__27678__auto____0 = (function (){
var statearr_30235 = [null,null,null,null,null,null,null,null,null];
(statearr_30235[(0)] = cljs$core$async$state_machine__27678__auto__);

(statearr_30235[(1)] = (1));

return statearr_30235;
});
var cljs$core$async$state_machine__27678__auto____1 = (function (state_30197){
while(true){
var ret_value__27679__auto__ = (function (){try{while(true){
var result__27680__auto__ = switch__27677__auto__.call(null,state_30197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27680__auto__;
}
break;
}
}catch (e30236){if((e30236 instanceof Object)){
var ex__27681__auto__ = e30236;
var statearr_30237_30373 = state_30197;
(statearr_30237_30373[(5)] = ex__27681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30381 = state_30197;
state_30197 = G__30381;
continue;
} else {
return ret_value__27679__auto__;
}
break;
}
});
cljs$core$async$state_machine__27678__auto__ = function(state_30197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27678__auto____1.call(this,state_30197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27678__auto____0;
cljs$core$async$state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27678__auto____1;
return cljs$core$async$state_machine__27678__auto__;
})()
;})(switch__27677__auto__,c__28214__auto___30259,tc,fc))
})();
var state__28216__auto__ = (function (){var statearr_30240 = f__28215__auto__.call(null);
(statearr_30240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28214__auto___30259);

return statearr_30240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28216__auto__);
});})(c__28214__auto___30259,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28214__auto__){
return (function (){
var f__28215__auto__ = (function (){var switch__27677__auto__ = ((function (c__28214__auto__){
return (function (state_30501){
var state_val_30502 = (state_30501[(1)]);
if((state_val_30502 === (7))){
var inst_30497 = (state_30501[(2)]);
var state_30501__$1 = state_30501;
var statearr_30504_30571 = state_30501__$1;
(statearr_30504_30571[(2)] = inst_30497);

(statearr_30504_30571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (1))){
var inst_30478 = init;
var state_30501__$1 = (function (){var statearr_30505 = state_30501;
(statearr_30505[(7)] = inst_30478);

return statearr_30505;
})();
var statearr_30506_30582 = state_30501__$1;
(statearr_30506_30582[(2)] = null);

(statearr_30506_30582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (4))){
var inst_30482 = (state_30501[(8)]);
var inst_30482__$1 = (state_30501[(2)]);
var inst_30483 = (inst_30482__$1 == null);
var state_30501__$1 = (function (){var statearr_30511 = state_30501;
(statearr_30511[(8)] = inst_30482__$1);

return statearr_30511;
})();
if(cljs.core.truth_(inst_30483)){
var statearr_30514_30589 = state_30501__$1;
(statearr_30514_30589[(1)] = (5));

} else {
var statearr_30515_30590 = state_30501__$1;
(statearr_30515_30590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (6))){
var inst_30478 = (state_30501[(7)]);
var inst_30486 = (state_30501[(9)]);
var inst_30482 = (state_30501[(8)]);
var inst_30486__$1 = f.call(null,inst_30478,inst_30482);
var inst_30488 = cljs.core.reduced_QMARK_.call(null,inst_30486__$1);
var state_30501__$1 = (function (){var statearr_30519 = state_30501;
(statearr_30519[(9)] = inst_30486__$1);

return statearr_30519;
})();
if(inst_30488){
var statearr_30520_30603 = state_30501__$1;
(statearr_30520_30603[(1)] = (8));

} else {
var statearr_30521_30604 = state_30501__$1;
(statearr_30521_30604[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (3))){
var inst_30499 = (state_30501[(2)]);
var state_30501__$1 = state_30501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30501__$1,inst_30499);
} else {
if((state_val_30502 === (2))){
var state_30501__$1 = state_30501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30501__$1,(4),ch);
} else {
if((state_val_30502 === (9))){
var inst_30486 = (state_30501[(9)]);
var inst_30478 = inst_30486;
var state_30501__$1 = (function (){var statearr_30523 = state_30501;
(statearr_30523[(7)] = inst_30478);

return statearr_30523;
})();
var statearr_30524_30615 = state_30501__$1;
(statearr_30524_30615[(2)] = null);

(statearr_30524_30615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (5))){
var inst_30478 = (state_30501[(7)]);
var state_30501__$1 = state_30501;
var statearr_30528_30617 = state_30501__$1;
(statearr_30528_30617[(2)] = inst_30478);

(statearr_30528_30617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (10))){
var inst_30495 = (state_30501[(2)]);
var state_30501__$1 = state_30501;
var statearr_30533_30621 = state_30501__$1;
(statearr_30533_30621[(2)] = inst_30495);

(statearr_30533_30621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30502 === (8))){
var inst_30486 = (state_30501[(9)]);
var inst_30491 = cljs.core.deref.call(null,inst_30486);
var state_30501__$1 = state_30501;
var statearr_30536_30628 = state_30501__$1;
(statearr_30536_30628[(2)] = inst_30491);

(statearr_30536_30628[(1)] = (10));


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
});})(c__28214__auto__))
;
return ((function (switch__27677__auto__,c__28214__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27678__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27678__auto____0 = (function (){
var statearr_30548 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30548[(0)] = cljs$core$async$reduce_$_state_machine__27678__auto__);

(statearr_30548[(1)] = (1));

return statearr_30548;
});
var cljs$core$async$reduce_$_state_machine__27678__auto____1 = (function (state_30501){
while(true){
var ret_value__27679__auto__ = (function (){try{while(true){
var result__27680__auto__ = switch__27677__auto__.call(null,state_30501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27680__auto__;
}
break;
}
}catch (e30551){if((e30551 instanceof Object)){
var ex__27681__auto__ = e30551;
var statearr_30554_30642 = state_30501;
(statearr_30554_30642[(5)] = ex__27681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30646 = state_30501;
state_30501 = G__30646;
continue;
} else {
return ret_value__27679__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27678__auto__ = function(state_30501){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27678__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27678__auto____1.call(this,state_30501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27678__auto____0;
cljs$core$async$reduce_$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27678__auto____1;
return cljs$core$async$reduce_$_state_machine__27678__auto__;
})()
;})(switch__27677__auto__,c__28214__auto__))
})();
var state__28216__auto__ = (function (){var statearr_30558 = f__28215__auto__.call(null);
(statearr_30558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28214__auto__);

return statearr_30558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28216__auto__);
});})(c__28214__auto__))
);

return c__28214__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args30650 = [];
var len__25835__auto___30740 = arguments.length;
var i__25836__auto___30741 = (0);
while(true){
if((i__25836__auto___30741 < len__25835__auto___30740)){
args30650.push((arguments[i__25836__auto___30741]));

var G__30742 = (i__25836__auto___30741 + (1));
i__25836__auto___30741 = G__30742;
continue;
} else {
}
break;
}

var G__30660 = args30650.length;
switch (G__30660) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30650.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28214__auto__){
return (function (){
var f__28215__auto__ = (function (){var switch__27677__auto__ = ((function (c__28214__auto__){
return (function (state_30694){
var state_val_30695 = (state_30694[(1)]);
if((state_val_30695 === (7))){
var inst_30673 = (state_30694[(2)]);
var state_30694__$1 = state_30694;
var statearr_30699_30747 = state_30694__$1;
(statearr_30699_30747[(2)] = inst_30673);

(statearr_30699_30747[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (1))){
var inst_30665 = cljs.core.seq.call(null,coll);
var inst_30666 = inst_30665;
var state_30694__$1 = (function (){var statearr_30701 = state_30694;
(statearr_30701[(7)] = inst_30666);

return statearr_30701;
})();
var statearr_30702_30751 = state_30694__$1;
(statearr_30702_30751[(2)] = null);

(statearr_30702_30751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (4))){
var inst_30666 = (state_30694[(7)]);
var inst_30671 = cljs.core.first.call(null,inst_30666);
var state_30694__$1 = state_30694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30694__$1,(7),ch,inst_30671);
} else {
if((state_val_30695 === (13))){
var inst_30687 = (state_30694[(2)]);
var state_30694__$1 = state_30694;
var statearr_30706_30752 = state_30694__$1;
(statearr_30706_30752[(2)] = inst_30687);

(statearr_30706_30752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (6))){
var inst_30676 = (state_30694[(2)]);
var state_30694__$1 = state_30694;
if(cljs.core.truth_(inst_30676)){
var statearr_30709_30756 = state_30694__$1;
(statearr_30709_30756[(1)] = (8));

} else {
var statearr_30710_30757 = state_30694__$1;
(statearr_30710_30757[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (3))){
var inst_30691 = (state_30694[(2)]);
var state_30694__$1 = state_30694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30694__$1,inst_30691);
} else {
if((state_val_30695 === (12))){
var state_30694__$1 = state_30694;
var statearr_30711_30758 = state_30694__$1;
(statearr_30711_30758[(2)] = null);

(statearr_30711_30758[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (2))){
var inst_30666 = (state_30694[(7)]);
var state_30694__$1 = state_30694;
if(cljs.core.truth_(inst_30666)){
var statearr_30713_30763 = state_30694__$1;
(statearr_30713_30763[(1)] = (4));

} else {
var statearr_30718_30765 = state_30694__$1;
(statearr_30718_30765[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (11))){
var inst_30684 = cljs.core.async.close_BANG_.call(null,ch);
var state_30694__$1 = state_30694;
var statearr_30719_30767 = state_30694__$1;
(statearr_30719_30767[(2)] = inst_30684);

(statearr_30719_30767[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (9))){
var state_30694__$1 = state_30694;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30722_30769 = state_30694__$1;
(statearr_30722_30769[(1)] = (11));

} else {
var statearr_30723_30770 = state_30694__$1;
(statearr_30723_30770[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (5))){
var inst_30666 = (state_30694[(7)]);
var state_30694__$1 = state_30694;
var statearr_30726_30773 = state_30694__$1;
(statearr_30726_30773[(2)] = inst_30666);

(statearr_30726_30773[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (10))){
var inst_30689 = (state_30694[(2)]);
var state_30694__$1 = state_30694;
var statearr_30727_30775 = state_30694__$1;
(statearr_30727_30775[(2)] = inst_30689);

(statearr_30727_30775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30695 === (8))){
var inst_30666 = (state_30694[(7)]);
var inst_30679 = cljs.core.next.call(null,inst_30666);
var inst_30666__$1 = inst_30679;
var state_30694__$1 = (function (){var statearr_30728 = state_30694;
(statearr_30728[(7)] = inst_30666__$1);

return statearr_30728;
})();
var statearr_30729_30776 = state_30694__$1;
(statearr_30729_30776[(2)] = null);

(statearr_30729_30776[(1)] = (2));


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
});})(c__28214__auto__))
;
return ((function (switch__27677__auto__,c__28214__auto__){
return (function() {
var cljs$core$async$state_machine__27678__auto__ = null;
var cljs$core$async$state_machine__27678__auto____0 = (function (){
var statearr_30733 = [null,null,null,null,null,null,null,null];
(statearr_30733[(0)] = cljs$core$async$state_machine__27678__auto__);

(statearr_30733[(1)] = (1));

return statearr_30733;
});
var cljs$core$async$state_machine__27678__auto____1 = (function (state_30694){
while(true){
var ret_value__27679__auto__ = (function (){try{while(true){
var result__27680__auto__ = switch__27677__auto__.call(null,state_30694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27680__auto__;
}
break;
}
}catch (e30736){if((e30736 instanceof Object)){
var ex__27681__auto__ = e30736;
var statearr_30737_30783 = state_30694;
(statearr_30737_30783[(5)] = ex__27681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30784 = state_30694;
state_30694 = G__30784;
continue;
} else {
return ret_value__27679__auto__;
}
break;
}
});
cljs$core$async$state_machine__27678__auto__ = function(state_30694){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27678__auto____1.call(this,state_30694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27678__auto____0;
cljs$core$async$state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27678__auto____1;
return cljs$core$async$state_machine__27678__auto__;
})()
;})(switch__27677__auto__,c__28214__auto__))
})();
var state__28216__auto__ = (function (){var statearr_30739 = f__28215__auto__.call(null);
(statearr_30739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28214__auto__);

return statearr_30739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28216__auto__);
});})(c__28214__auto__))
);

return c__28214__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25423__auto__ = (((_ == null))?null:_);
var m__25424__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,_);
} else {
var m__25424__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25424__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m,ch);
} else {
var m__25424__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m);
} else {
var m__25424__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31085 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31085 = (function (mult,ch,cs,meta31086){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta31086 = meta31086;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31087,meta31086__$1){
var self__ = this;
var _31087__$1 = this;
return (new cljs.core.async.t_cljs$core$async31085(self__.mult,self__.ch,self__.cs,meta31086__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31085.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31087){
var self__ = this;
var _31087__$1 = this;
return self__.meta31086;
});})(cs))
;

cljs.core.async.t_cljs$core$async31085.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31085.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31085.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async31085.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31085.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31085.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31085.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31086","meta31086",-1015038554,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31085.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31085.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31085";

cljs.core.async.t_cljs$core$async31085.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async31085");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31085 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31085(mult__$1,ch__$1,cs__$1,meta31086){
return (new cljs.core.async.t_cljs$core$async31085(mult__$1,ch__$1,cs__$1,meta31086));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31085(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28214__auto___31483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28214__auto___31483,cs,m,dchan,dctr,done){
return (function (){
var f__28215__auto__ = (function (){var switch__27677__auto__ = ((function (c__28214__auto___31483,cs,m,dchan,dctr,done){
return (function (state_31228){
var state_val_31229 = (state_31228[(1)]);
if((state_val_31229 === (7))){
var inst_31224 = (state_31228[(2)]);
var state_31228__$1 = state_31228;
var statearr_31230_31496 = state_31228__$1;
(statearr_31230_31496[(2)] = inst_31224);

(statearr_31230_31496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (20))){
var inst_31124 = (state_31228[(7)]);
var inst_31136 = cljs.core.first.call(null,inst_31124);
var inst_31137 = cljs.core.nth.call(null,inst_31136,(0),null);
var inst_31138 = cljs.core.nth.call(null,inst_31136,(1),null);
var state_31228__$1 = (function (){var statearr_31231 = state_31228;
(statearr_31231[(8)] = inst_31137);

return statearr_31231;
})();
if(cljs.core.truth_(inst_31138)){
var statearr_31232_31504 = state_31228__$1;
(statearr_31232_31504[(1)] = (22));

} else {
var statearr_31233_31508 = state_31228__$1;
(statearr_31233_31508[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (27))){
var inst_31166 = (state_31228[(9)]);
var inst_31173 = (state_31228[(10)]);
var inst_31168 = (state_31228[(11)]);
var inst_31093 = (state_31228[(12)]);
var inst_31173__$1 = cljs.core._nth.call(null,inst_31166,inst_31168);
var inst_31174 = cljs.core.async.put_BANG_.call(null,inst_31173__$1,inst_31093,done);
var state_31228__$1 = (function (){var statearr_31234 = state_31228;
(statearr_31234[(10)] = inst_31173__$1);

return statearr_31234;
})();
if(cljs.core.truth_(inst_31174)){
var statearr_31235_31527 = state_31228__$1;
(statearr_31235_31527[(1)] = (30));

} else {
var statearr_31236_31528 = state_31228__$1;
(statearr_31236_31528[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (1))){
var state_31228__$1 = state_31228;
var statearr_31237_31532 = state_31228__$1;
(statearr_31237_31532[(2)] = null);

(statearr_31237_31532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (24))){
var inst_31124 = (state_31228[(7)]);
var inst_31143 = (state_31228[(2)]);
var inst_31144 = cljs.core.next.call(null,inst_31124);
var inst_31102 = inst_31144;
var inst_31103 = null;
var inst_31104 = (0);
var inst_31105 = (0);
var state_31228__$1 = (function (){var statearr_31238 = state_31228;
(statearr_31238[(13)] = inst_31103);

(statearr_31238[(14)] = inst_31102);

(statearr_31238[(15)] = inst_31143);

(statearr_31238[(16)] = inst_31104);

(statearr_31238[(17)] = inst_31105);

return statearr_31238;
})();
var statearr_31239_31555 = state_31228__$1;
(statearr_31239_31555[(2)] = null);

(statearr_31239_31555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (39))){
var state_31228__$1 = state_31228;
var statearr_31244_31556 = state_31228__$1;
(statearr_31244_31556[(2)] = null);

(statearr_31244_31556[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (4))){
var inst_31093 = (state_31228[(12)]);
var inst_31093__$1 = (state_31228[(2)]);
var inst_31094 = (inst_31093__$1 == null);
var state_31228__$1 = (function (){var statearr_31246 = state_31228;
(statearr_31246[(12)] = inst_31093__$1);

return statearr_31246;
})();
if(cljs.core.truth_(inst_31094)){
var statearr_31247_31559 = state_31228__$1;
(statearr_31247_31559[(1)] = (5));

} else {
var statearr_31248_31565 = state_31228__$1;
(statearr_31248_31565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (15))){
var inst_31103 = (state_31228[(13)]);
var inst_31102 = (state_31228[(14)]);
var inst_31104 = (state_31228[(16)]);
var inst_31105 = (state_31228[(17)]);
var inst_31120 = (state_31228[(2)]);
var inst_31121 = (inst_31105 + (1));
var tmp31240 = inst_31103;
var tmp31241 = inst_31102;
var tmp31242 = inst_31104;
var inst_31102__$1 = tmp31241;
var inst_31103__$1 = tmp31240;
var inst_31104__$1 = tmp31242;
var inst_31105__$1 = inst_31121;
var state_31228__$1 = (function (){var statearr_31250 = state_31228;
(statearr_31250[(13)] = inst_31103__$1);

(statearr_31250[(14)] = inst_31102__$1);

(statearr_31250[(16)] = inst_31104__$1);

(statearr_31250[(17)] = inst_31105__$1);

(statearr_31250[(18)] = inst_31120);

return statearr_31250;
})();
var statearr_31254_31569 = state_31228__$1;
(statearr_31254_31569[(2)] = null);

(statearr_31254_31569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (21))){
var inst_31147 = (state_31228[(2)]);
var state_31228__$1 = state_31228;
var statearr_31258_31570 = state_31228__$1;
(statearr_31258_31570[(2)] = inst_31147);

(statearr_31258_31570[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (31))){
var inst_31173 = (state_31228[(10)]);
var inst_31177 = done.call(null,null);
var inst_31178 = cljs.core.async.untap_STAR_.call(null,m,inst_31173);
var state_31228__$1 = (function (){var statearr_31262 = state_31228;
(statearr_31262[(19)] = inst_31177);

return statearr_31262;
})();
var statearr_31263_31581 = state_31228__$1;
(statearr_31263_31581[(2)] = inst_31178);

(statearr_31263_31581[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (32))){
var inst_31167 = (state_31228[(20)]);
var inst_31166 = (state_31228[(9)]);
var inst_31168 = (state_31228[(11)]);
var inst_31165 = (state_31228[(21)]);
var inst_31180 = (state_31228[(2)]);
var inst_31182 = (inst_31168 + (1));
var tmp31255 = inst_31167;
var tmp31256 = inst_31166;
var tmp31257 = inst_31165;
var inst_31165__$1 = tmp31257;
var inst_31166__$1 = tmp31256;
var inst_31167__$1 = tmp31255;
var inst_31168__$1 = inst_31182;
var state_31228__$1 = (function (){var statearr_31264 = state_31228;
(statearr_31264[(20)] = inst_31167__$1);

(statearr_31264[(9)] = inst_31166__$1);

(statearr_31264[(11)] = inst_31168__$1);

(statearr_31264[(22)] = inst_31180);

(statearr_31264[(21)] = inst_31165__$1);

return statearr_31264;
})();
var statearr_31265_31591 = state_31228__$1;
(statearr_31265_31591[(2)] = null);

(statearr_31265_31591[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (40))){
var inst_31195 = (state_31228[(23)]);
var inst_31199 = done.call(null,null);
var inst_31200 = cljs.core.async.untap_STAR_.call(null,m,inst_31195);
var state_31228__$1 = (function (){var statearr_31266 = state_31228;
(statearr_31266[(24)] = inst_31199);

return statearr_31266;
})();
var statearr_31267_31595 = state_31228__$1;
(statearr_31267_31595[(2)] = inst_31200);

(statearr_31267_31595[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (33))){
var inst_31185 = (state_31228[(25)]);
var inst_31188 = cljs.core.chunked_seq_QMARK_.call(null,inst_31185);
var state_31228__$1 = state_31228;
if(inst_31188){
var statearr_31268_31604 = state_31228__$1;
(statearr_31268_31604[(1)] = (36));

} else {
var statearr_31269_31608 = state_31228__$1;
(statearr_31269_31608[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (13))){
var inst_31114 = (state_31228[(26)]);
var inst_31117 = cljs.core.async.close_BANG_.call(null,inst_31114);
var state_31228__$1 = state_31228;
var statearr_31270_31613 = state_31228__$1;
(statearr_31270_31613[(2)] = inst_31117);

(statearr_31270_31613[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (22))){
var inst_31137 = (state_31228[(8)]);
var inst_31140 = cljs.core.async.close_BANG_.call(null,inst_31137);
var state_31228__$1 = state_31228;
var statearr_31271_31616 = state_31228__$1;
(statearr_31271_31616[(2)] = inst_31140);

(statearr_31271_31616[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (36))){
var inst_31185 = (state_31228[(25)]);
var inst_31190 = cljs.core.chunk_first.call(null,inst_31185);
var inst_31191 = cljs.core.chunk_rest.call(null,inst_31185);
var inst_31192 = cljs.core.count.call(null,inst_31190);
var inst_31165 = inst_31191;
var inst_31166 = inst_31190;
var inst_31167 = inst_31192;
var inst_31168 = (0);
var state_31228__$1 = (function (){var statearr_31272 = state_31228;
(statearr_31272[(20)] = inst_31167);

(statearr_31272[(9)] = inst_31166);

(statearr_31272[(11)] = inst_31168);

(statearr_31272[(21)] = inst_31165);

return statearr_31272;
})();
var statearr_31274_31634 = state_31228__$1;
(statearr_31274_31634[(2)] = null);

(statearr_31274_31634[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (41))){
var inst_31185 = (state_31228[(25)]);
var inst_31202 = (state_31228[(2)]);
var inst_31203 = cljs.core.next.call(null,inst_31185);
var inst_31165 = inst_31203;
var inst_31166 = null;
var inst_31167 = (0);
var inst_31168 = (0);
var state_31228__$1 = (function (){var statearr_31276 = state_31228;
(statearr_31276[(20)] = inst_31167);

(statearr_31276[(9)] = inst_31166);

(statearr_31276[(11)] = inst_31168);

(statearr_31276[(27)] = inst_31202);

(statearr_31276[(21)] = inst_31165);

return statearr_31276;
})();
var statearr_31277_31653 = state_31228__$1;
(statearr_31277_31653[(2)] = null);

(statearr_31277_31653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (43))){
var state_31228__$1 = state_31228;
var statearr_31279_31657 = state_31228__$1;
(statearr_31279_31657[(2)] = null);

(statearr_31279_31657[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (29))){
var inst_31211 = (state_31228[(2)]);
var state_31228__$1 = state_31228;
var statearr_31280_31658 = state_31228__$1;
(statearr_31280_31658[(2)] = inst_31211);

(statearr_31280_31658[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (44))){
var inst_31221 = (state_31228[(2)]);
var state_31228__$1 = (function (){var statearr_31281 = state_31228;
(statearr_31281[(28)] = inst_31221);

return statearr_31281;
})();
var statearr_31282_31663 = state_31228__$1;
(statearr_31282_31663[(2)] = null);

(statearr_31282_31663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (6))){
var inst_31157 = (state_31228[(29)]);
var inst_31156 = cljs.core.deref.call(null,cs);
var inst_31157__$1 = cljs.core.keys.call(null,inst_31156);
var inst_31158 = cljs.core.count.call(null,inst_31157__$1);
var inst_31159 = cljs.core.reset_BANG_.call(null,dctr,inst_31158);
var inst_31164 = cljs.core.seq.call(null,inst_31157__$1);
var inst_31165 = inst_31164;
var inst_31166 = null;
var inst_31167 = (0);
var inst_31168 = (0);
var state_31228__$1 = (function (){var statearr_31283 = state_31228;
(statearr_31283[(30)] = inst_31159);

(statearr_31283[(20)] = inst_31167);

(statearr_31283[(9)] = inst_31166);

(statearr_31283[(29)] = inst_31157__$1);

(statearr_31283[(11)] = inst_31168);

(statearr_31283[(21)] = inst_31165);

return statearr_31283;
})();
var statearr_31284_31669 = state_31228__$1;
(statearr_31284_31669[(2)] = null);

(statearr_31284_31669[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (28))){
var inst_31185 = (state_31228[(25)]);
var inst_31165 = (state_31228[(21)]);
var inst_31185__$1 = cljs.core.seq.call(null,inst_31165);
var state_31228__$1 = (function (){var statearr_31285 = state_31228;
(statearr_31285[(25)] = inst_31185__$1);

return statearr_31285;
})();
if(inst_31185__$1){
var statearr_31286_31675 = state_31228__$1;
(statearr_31286_31675[(1)] = (33));

} else {
var statearr_31287_31676 = state_31228__$1;
(statearr_31287_31676[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (25))){
var inst_31167 = (state_31228[(20)]);
var inst_31168 = (state_31228[(11)]);
var inst_31170 = (inst_31168 < inst_31167);
var inst_31171 = inst_31170;
var state_31228__$1 = state_31228;
if(cljs.core.truth_(inst_31171)){
var statearr_31288_31683 = state_31228__$1;
(statearr_31288_31683[(1)] = (27));

} else {
var statearr_31290_31684 = state_31228__$1;
(statearr_31290_31684[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (34))){
var state_31228__$1 = state_31228;
var statearr_31296_31685 = state_31228__$1;
(statearr_31296_31685[(2)] = null);

(statearr_31296_31685[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (17))){
var state_31228__$1 = state_31228;
var statearr_31297_31686 = state_31228__$1;
(statearr_31297_31686[(2)] = null);

(statearr_31297_31686[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (3))){
var inst_31226 = (state_31228[(2)]);
var state_31228__$1 = state_31228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31228__$1,inst_31226);
} else {
if((state_val_31229 === (12))){
var inst_31152 = (state_31228[(2)]);
var state_31228__$1 = state_31228;
var statearr_31298_31695 = state_31228__$1;
(statearr_31298_31695[(2)] = inst_31152);

(statearr_31298_31695[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (2))){
var state_31228__$1 = state_31228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31228__$1,(4),ch);
} else {
if((state_val_31229 === (23))){
var state_31228__$1 = state_31228;
var statearr_31308_31702 = state_31228__$1;
(statearr_31308_31702[(2)] = null);

(statearr_31308_31702[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (35))){
var inst_31209 = (state_31228[(2)]);
var state_31228__$1 = state_31228;
var statearr_31310_31709 = state_31228__$1;
(statearr_31310_31709[(2)] = inst_31209);

(statearr_31310_31709[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (19))){
var inst_31124 = (state_31228[(7)]);
var inst_31128 = cljs.core.chunk_first.call(null,inst_31124);
var inst_31129 = cljs.core.chunk_rest.call(null,inst_31124);
var inst_31130 = cljs.core.count.call(null,inst_31128);
var inst_31102 = inst_31129;
var inst_31103 = inst_31128;
var inst_31104 = inst_31130;
var inst_31105 = (0);
var state_31228__$1 = (function (){var statearr_31315 = state_31228;
(statearr_31315[(13)] = inst_31103);

(statearr_31315[(14)] = inst_31102);

(statearr_31315[(16)] = inst_31104);

(statearr_31315[(17)] = inst_31105);

return statearr_31315;
})();
var statearr_31316_31721 = state_31228__$1;
(statearr_31316_31721[(2)] = null);

(statearr_31316_31721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (11))){
var inst_31124 = (state_31228[(7)]);
var inst_31102 = (state_31228[(14)]);
var inst_31124__$1 = cljs.core.seq.call(null,inst_31102);
var state_31228__$1 = (function (){var statearr_31322 = state_31228;
(statearr_31322[(7)] = inst_31124__$1);

return statearr_31322;
})();
if(inst_31124__$1){
var statearr_31323_31729 = state_31228__$1;
(statearr_31323_31729[(1)] = (16));

} else {
var statearr_31324_31732 = state_31228__$1;
(statearr_31324_31732[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (9))){
var inst_31154 = (state_31228[(2)]);
var state_31228__$1 = state_31228;
var statearr_31325_31738 = state_31228__$1;
(statearr_31325_31738[(2)] = inst_31154);

(statearr_31325_31738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (5))){
var inst_31100 = cljs.core.deref.call(null,cs);
var inst_31101 = cljs.core.seq.call(null,inst_31100);
var inst_31102 = inst_31101;
var inst_31103 = null;
var inst_31104 = (0);
var inst_31105 = (0);
var state_31228__$1 = (function (){var statearr_31335 = state_31228;
(statearr_31335[(13)] = inst_31103);

(statearr_31335[(14)] = inst_31102);

(statearr_31335[(16)] = inst_31104);

(statearr_31335[(17)] = inst_31105);

return statearr_31335;
})();
var statearr_31336_31749 = state_31228__$1;
(statearr_31336_31749[(2)] = null);

(statearr_31336_31749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (14))){
var state_31228__$1 = state_31228;
var statearr_31337_31752 = state_31228__$1;
(statearr_31337_31752[(2)] = null);

(statearr_31337_31752[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (45))){
var inst_31218 = (state_31228[(2)]);
var state_31228__$1 = state_31228;
var statearr_31341_31758 = state_31228__$1;
(statearr_31341_31758[(2)] = inst_31218);

(statearr_31341_31758[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (26))){
var inst_31157 = (state_31228[(29)]);
var inst_31214 = (state_31228[(2)]);
var inst_31215 = cljs.core.seq.call(null,inst_31157);
var state_31228__$1 = (function (){var statearr_31342 = state_31228;
(statearr_31342[(31)] = inst_31214);

return statearr_31342;
})();
if(inst_31215){
var statearr_31343_31759 = state_31228__$1;
(statearr_31343_31759[(1)] = (42));

} else {
var statearr_31344_31760 = state_31228__$1;
(statearr_31344_31760[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (16))){
var inst_31124 = (state_31228[(7)]);
var inst_31126 = cljs.core.chunked_seq_QMARK_.call(null,inst_31124);
var state_31228__$1 = state_31228;
if(inst_31126){
var statearr_31349_31762 = state_31228__$1;
(statearr_31349_31762[(1)] = (19));

} else {
var statearr_31351_31763 = state_31228__$1;
(statearr_31351_31763[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (38))){
var inst_31206 = (state_31228[(2)]);
var state_31228__$1 = state_31228;
var statearr_31353_31771 = state_31228__$1;
(statearr_31353_31771[(2)] = inst_31206);

(statearr_31353_31771[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (30))){
var state_31228__$1 = state_31228;
var statearr_31355_31772 = state_31228__$1;
(statearr_31355_31772[(2)] = null);

(statearr_31355_31772[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (10))){
var inst_31103 = (state_31228[(13)]);
var inst_31105 = (state_31228[(17)]);
var inst_31113 = cljs.core._nth.call(null,inst_31103,inst_31105);
var inst_31114 = cljs.core.nth.call(null,inst_31113,(0),null);
var inst_31115 = cljs.core.nth.call(null,inst_31113,(1),null);
var state_31228__$1 = (function (){var statearr_31362 = state_31228;
(statearr_31362[(26)] = inst_31114);

return statearr_31362;
})();
if(cljs.core.truth_(inst_31115)){
var statearr_31366_31777 = state_31228__$1;
(statearr_31366_31777[(1)] = (13));

} else {
var statearr_31367_31779 = state_31228__$1;
(statearr_31367_31779[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (18))){
var inst_31150 = (state_31228[(2)]);
var state_31228__$1 = state_31228;
var statearr_31369_31784 = state_31228__$1;
(statearr_31369_31784[(2)] = inst_31150);

(statearr_31369_31784[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (42))){
var state_31228__$1 = state_31228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31228__$1,(45),dchan);
} else {
if((state_val_31229 === (37))){
var inst_31195 = (state_31228[(23)]);
var inst_31093 = (state_31228[(12)]);
var inst_31185 = (state_31228[(25)]);
var inst_31195__$1 = cljs.core.first.call(null,inst_31185);
var inst_31196 = cljs.core.async.put_BANG_.call(null,inst_31195__$1,inst_31093,done);
var state_31228__$1 = (function (){var statearr_31376 = state_31228;
(statearr_31376[(23)] = inst_31195__$1);

return statearr_31376;
})();
if(cljs.core.truth_(inst_31196)){
var statearr_31377_31787 = state_31228__$1;
(statearr_31377_31787[(1)] = (39));

} else {
var statearr_31378_31788 = state_31228__$1;
(statearr_31378_31788[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31229 === (8))){
var inst_31104 = (state_31228[(16)]);
var inst_31105 = (state_31228[(17)]);
var inst_31107 = (inst_31105 < inst_31104);
var inst_31108 = inst_31107;
var state_31228__$1 = state_31228;
if(cljs.core.truth_(inst_31108)){
var statearr_31380_31789 = state_31228__$1;
(statearr_31380_31789[(1)] = (10));

} else {
var statearr_31381_31790 = state_31228__$1;
(statearr_31381_31790[(1)] = (11));

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
});})(c__28214__auto___31483,cs,m,dchan,dctr,done))
;
return ((function (switch__27677__auto__,c__28214__auto___31483,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27678__auto__ = null;
var cljs$core$async$mult_$_state_machine__27678__auto____0 = (function (){
var statearr_31389 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31389[(0)] = cljs$core$async$mult_$_state_machine__27678__auto__);

(statearr_31389[(1)] = (1));

return statearr_31389;
});
var cljs$core$async$mult_$_state_machine__27678__auto____1 = (function (state_31228){
while(true){
var ret_value__27679__auto__ = (function (){try{while(true){
var result__27680__auto__ = switch__27677__auto__.call(null,state_31228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27680__auto__;
}
break;
}
}catch (e31390){if((e31390 instanceof Object)){
var ex__27681__auto__ = e31390;
var statearr_31391_31794 = state_31228;
(statearr_31391_31794[(5)] = ex__27681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31795 = state_31228;
state_31228 = G__31795;
continue;
} else {
return ret_value__27679__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27678__auto__ = function(state_31228){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27678__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27678__auto____1.call(this,state_31228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27678__auto____0;
cljs$core$async$mult_$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27678__auto____1;
return cljs$core$async$mult_$_state_machine__27678__auto__;
})()
;})(switch__27677__auto__,c__28214__auto___31483,cs,m,dchan,dctr,done))
})();
var state__28216__auto__ = (function (){var statearr_31394 = f__28215__auto__.call(null);
(statearr_31394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28214__auto___31483);

return statearr_31394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28216__auto__);
});})(c__28214__auto___31483,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args31798 = [];
var len__25835__auto___31805 = arguments.length;
var i__25836__auto___31806 = (0);
while(true){
if((i__25836__auto___31806 < len__25835__auto___31805)){
args31798.push((arguments[i__25836__auto___31806]));

var G__31807 = (i__25836__auto___31806 + (1));
i__25836__auto___31806 = G__31807;
continue;
} else {
}
break;
}

var G__31802 = args31798.length;
switch (G__31802) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31798.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m,ch);
} else {
var m__25424__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m,ch);
} else {
var m__25424__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m);
} else {
var m__25424__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m,state_map);
} else {
var m__25424__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25423__auto__ = (((m == null))?null:m);
var m__25424__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,m,mode);
} else {
var m__25424__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25842__auto__ = [];
var len__25835__auto___31869 = arguments.length;
var i__25836__auto___31870 = (0);
while(true){
if((i__25836__auto___31870 < len__25835__auto___31869)){
args__25842__auto__.push((arguments[i__25836__auto___31870]));

var G__31872 = (i__25836__auto___31870 + (1));
i__25836__auto___31870 = G__31872;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((3) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25843__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31860){
var map__31861 = p__31860;
var map__31861__$1 = ((((!((map__31861 == null)))?((((map__31861.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31861.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31861):map__31861);
var opts = map__31861__$1;
var statearr_31865_31874 = state;
(statearr_31865_31874[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31861,map__31861__$1,opts){
return (function (val){
var statearr_31866_31875 = state;
(statearr_31866_31875[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31861,map__31861__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31867_31876 = state;
(statearr_31867_31876[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31856){
var G__31857 = cljs.core.first.call(null,seq31856);
var seq31856__$1 = cljs.core.next.call(null,seq31856);
var G__31858 = cljs.core.first.call(null,seq31856__$1);
var seq31856__$2 = cljs.core.next.call(null,seq31856__$1);
var G__31859 = cljs.core.first.call(null,seq31856__$2);
var seq31856__$3 = cljs.core.next.call(null,seq31856__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31857,G__31858,G__31859,seq31856__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32106 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32106 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32107){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32107 = meta32107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32108,meta32107__$1){
var self__ = this;
var _32108__$1 = this;
return (new cljs.core.async.t_cljs$core$async32106(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32107__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32106.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32108){
var self__ = this;
var _32108__$1 = this;
return self__.meta32107;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32106.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32106.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32106.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async32106.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32106.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32106.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32106.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32106.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32106.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32107","meta32107",431459929,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32106.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32106.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32106";

cljs.core.async.t_cljs$core$async32106.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async32106");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32106 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32106(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32107){
return (new cljs.core.async.t_cljs$core$async32106(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32107));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32106(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28214__auto___32357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28214__auto___32357,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28215__auto__ = (function (){var switch__27677__auto__ = ((function (c__28214__auto___32357,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32219){
var state_val_32220 = (state_32219[(1)]);
if((state_val_32220 === (7))){
var inst_32132 = (state_32219[(2)]);
var state_32219__$1 = state_32219;
var statearr_32228_32358 = state_32219__$1;
(statearr_32228_32358[(2)] = inst_32132);

(statearr_32228_32358[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (20))){
var inst_32144 = (state_32219[(7)]);
var state_32219__$1 = state_32219;
var statearr_32229_32359 = state_32219__$1;
(statearr_32229_32359[(2)] = inst_32144);

(statearr_32229_32359[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (27))){
var state_32219__$1 = state_32219;
var statearr_32233_32360 = state_32219__$1;
(statearr_32233_32360[(2)] = null);

(statearr_32233_32360[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (1))){
var inst_32120 = (state_32219[(8)]);
var inst_32120__$1 = calc_state.call(null);
var inst_32122 = (inst_32120__$1 == null);
var inst_32123 = cljs.core.not.call(null,inst_32122);
var state_32219__$1 = (function (){var statearr_32234 = state_32219;
(statearr_32234[(8)] = inst_32120__$1);

return statearr_32234;
})();
if(inst_32123){
var statearr_32235_32361 = state_32219__$1;
(statearr_32235_32361[(1)] = (2));

} else {
var statearr_32236_32362 = state_32219__$1;
(statearr_32236_32362[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (24))){
var inst_32179 = (state_32219[(9)]);
var inst_32193 = (state_32219[(10)]);
var inst_32167 = (state_32219[(11)]);
var inst_32193__$1 = inst_32167.call(null,inst_32179);
var state_32219__$1 = (function (){var statearr_32237 = state_32219;
(statearr_32237[(10)] = inst_32193__$1);

return statearr_32237;
})();
if(cljs.core.truth_(inst_32193__$1)){
var statearr_32238_32364 = state_32219__$1;
(statearr_32238_32364[(1)] = (29));

} else {
var statearr_32242_32365 = state_32219__$1;
(statearr_32242_32365[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (4))){
var inst_32135 = (state_32219[(2)]);
var state_32219__$1 = state_32219;
if(cljs.core.truth_(inst_32135)){
var statearr_32247_32366 = state_32219__$1;
(statearr_32247_32366[(1)] = (8));

} else {
var statearr_32248_32368 = state_32219__$1;
(statearr_32248_32368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (15))){
var inst_32161 = (state_32219[(2)]);
var state_32219__$1 = state_32219;
if(cljs.core.truth_(inst_32161)){
var statearr_32252_32372 = state_32219__$1;
(statearr_32252_32372[(1)] = (19));

} else {
var statearr_32253_32373 = state_32219__$1;
(statearr_32253_32373[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (21))){
var inst_32166 = (state_32219[(12)]);
var inst_32166__$1 = (state_32219[(2)]);
var inst_32167 = cljs.core.get.call(null,inst_32166__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32168 = cljs.core.get.call(null,inst_32166__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32172 = cljs.core.get.call(null,inst_32166__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32219__$1 = (function (){var statearr_32254 = state_32219;
(statearr_32254[(12)] = inst_32166__$1);

(statearr_32254[(11)] = inst_32167);

(statearr_32254[(13)] = inst_32168);

return statearr_32254;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32219__$1,(22),inst_32172);
} else {
if((state_val_32220 === (31))){
var inst_32201 = (state_32219[(2)]);
var state_32219__$1 = state_32219;
if(cljs.core.truth_(inst_32201)){
var statearr_32255_32374 = state_32219__$1;
(statearr_32255_32374[(1)] = (32));

} else {
var statearr_32256_32375 = state_32219__$1;
(statearr_32256_32375[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (32))){
var inst_32178 = (state_32219[(14)]);
var state_32219__$1 = state_32219;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32219__$1,(35),out,inst_32178);
} else {
if((state_val_32220 === (33))){
var inst_32166 = (state_32219[(12)]);
var inst_32144 = inst_32166;
var state_32219__$1 = (function (){var statearr_32257 = state_32219;
(statearr_32257[(7)] = inst_32144);

return statearr_32257;
})();
var statearr_32258_32378 = state_32219__$1;
(statearr_32258_32378[(2)] = null);

(statearr_32258_32378[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (13))){
var inst_32144 = (state_32219[(7)]);
var inst_32151 = inst_32144.cljs$lang$protocol_mask$partition0$;
var inst_32152 = (inst_32151 & (64));
var inst_32153 = inst_32144.cljs$core$ISeq$;
var inst_32154 = (inst_32152) || (inst_32153);
var state_32219__$1 = state_32219;
if(cljs.core.truth_(inst_32154)){
var statearr_32259_32391 = state_32219__$1;
(statearr_32259_32391[(1)] = (16));

} else {
var statearr_32260_32392 = state_32219__$1;
(statearr_32260_32392[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (22))){
var inst_32179 = (state_32219[(9)]);
var inst_32178 = (state_32219[(14)]);
var inst_32177 = (state_32219[(2)]);
var inst_32178__$1 = cljs.core.nth.call(null,inst_32177,(0),null);
var inst_32179__$1 = cljs.core.nth.call(null,inst_32177,(1),null);
var inst_32180 = (inst_32178__$1 == null);
var inst_32181 = cljs.core._EQ_.call(null,inst_32179__$1,change);
var inst_32182 = (inst_32180) || (inst_32181);
var state_32219__$1 = (function (){var statearr_32265 = state_32219;
(statearr_32265[(9)] = inst_32179__$1);

(statearr_32265[(14)] = inst_32178__$1);

return statearr_32265;
})();
if(cljs.core.truth_(inst_32182)){
var statearr_32266_32395 = state_32219__$1;
(statearr_32266_32395[(1)] = (23));

} else {
var statearr_32267_32396 = state_32219__$1;
(statearr_32267_32396[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (36))){
var inst_32166 = (state_32219[(12)]);
var inst_32144 = inst_32166;
var state_32219__$1 = (function (){var statearr_32268 = state_32219;
(statearr_32268[(7)] = inst_32144);

return statearr_32268;
})();
var statearr_32269_32400 = state_32219__$1;
(statearr_32269_32400[(2)] = null);

(statearr_32269_32400[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (29))){
var inst_32193 = (state_32219[(10)]);
var state_32219__$1 = state_32219;
var statearr_32270_32401 = state_32219__$1;
(statearr_32270_32401[(2)] = inst_32193);

(statearr_32270_32401[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (6))){
var state_32219__$1 = state_32219;
var statearr_32271_32402 = state_32219__$1;
(statearr_32271_32402[(2)] = false);

(statearr_32271_32402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (28))){
var inst_32189 = (state_32219[(2)]);
var inst_32190 = calc_state.call(null);
var inst_32144 = inst_32190;
var state_32219__$1 = (function (){var statearr_32272 = state_32219;
(statearr_32272[(7)] = inst_32144);

(statearr_32272[(15)] = inst_32189);

return statearr_32272;
})();
var statearr_32273_32404 = state_32219__$1;
(statearr_32273_32404[(2)] = null);

(statearr_32273_32404[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (25))){
var inst_32215 = (state_32219[(2)]);
var state_32219__$1 = state_32219;
var statearr_32274_32406 = state_32219__$1;
(statearr_32274_32406[(2)] = inst_32215);

(statearr_32274_32406[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (34))){
var inst_32213 = (state_32219[(2)]);
var state_32219__$1 = state_32219;
var statearr_32275_32408 = state_32219__$1;
(statearr_32275_32408[(2)] = inst_32213);

(statearr_32275_32408[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (17))){
var state_32219__$1 = state_32219;
var statearr_32276_32414 = state_32219__$1;
(statearr_32276_32414[(2)] = false);

(statearr_32276_32414[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (3))){
var state_32219__$1 = state_32219;
var statearr_32277_32415 = state_32219__$1;
(statearr_32277_32415[(2)] = false);

(statearr_32277_32415[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (12))){
var inst_32217 = (state_32219[(2)]);
var state_32219__$1 = state_32219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32219__$1,inst_32217);
} else {
if((state_val_32220 === (2))){
var inst_32120 = (state_32219[(8)]);
var inst_32125 = inst_32120.cljs$lang$protocol_mask$partition0$;
var inst_32126 = (inst_32125 & (64));
var inst_32127 = inst_32120.cljs$core$ISeq$;
var inst_32128 = (inst_32126) || (inst_32127);
var state_32219__$1 = state_32219;
if(cljs.core.truth_(inst_32128)){
var statearr_32278_32420 = state_32219__$1;
(statearr_32278_32420[(1)] = (5));

} else {
var statearr_32279_32421 = state_32219__$1;
(statearr_32279_32421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (23))){
var inst_32178 = (state_32219[(14)]);
var inst_32184 = (inst_32178 == null);
var state_32219__$1 = state_32219;
if(cljs.core.truth_(inst_32184)){
var statearr_32280_32425 = state_32219__$1;
(statearr_32280_32425[(1)] = (26));

} else {
var statearr_32281_32426 = state_32219__$1;
(statearr_32281_32426[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (35))){
var inst_32204 = (state_32219[(2)]);
var state_32219__$1 = state_32219;
if(cljs.core.truth_(inst_32204)){
var statearr_32282_32428 = state_32219__$1;
(statearr_32282_32428[(1)] = (36));

} else {
var statearr_32283_32429 = state_32219__$1;
(statearr_32283_32429[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (19))){
var inst_32144 = (state_32219[(7)]);
var inst_32163 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32144);
var state_32219__$1 = state_32219;
var statearr_32284_32432 = state_32219__$1;
(statearr_32284_32432[(2)] = inst_32163);

(statearr_32284_32432[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (11))){
var inst_32144 = (state_32219[(7)]);
var inst_32148 = (inst_32144 == null);
var inst_32149 = cljs.core.not.call(null,inst_32148);
var state_32219__$1 = state_32219;
if(inst_32149){
var statearr_32286_32435 = state_32219__$1;
(statearr_32286_32435[(1)] = (13));

} else {
var statearr_32287_32437 = state_32219__$1;
(statearr_32287_32437[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (9))){
var inst_32120 = (state_32219[(8)]);
var state_32219__$1 = state_32219;
var statearr_32288_32439 = state_32219__$1;
(statearr_32288_32439[(2)] = inst_32120);

(statearr_32288_32439[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (5))){
var state_32219__$1 = state_32219;
var statearr_32289_32443 = state_32219__$1;
(statearr_32289_32443[(2)] = true);

(statearr_32289_32443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (14))){
var state_32219__$1 = state_32219;
var statearr_32290_32445 = state_32219__$1;
(statearr_32290_32445[(2)] = false);

(statearr_32290_32445[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (26))){
var inst_32179 = (state_32219[(9)]);
var inst_32186 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32179);
var state_32219__$1 = state_32219;
var statearr_32291_32446 = state_32219__$1;
(statearr_32291_32446[(2)] = inst_32186);

(statearr_32291_32446[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (16))){
var state_32219__$1 = state_32219;
var statearr_32292_32447 = state_32219__$1;
(statearr_32292_32447[(2)] = true);

(statearr_32292_32447[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (38))){
var inst_32209 = (state_32219[(2)]);
var state_32219__$1 = state_32219;
var statearr_32293_32449 = state_32219__$1;
(statearr_32293_32449[(2)] = inst_32209);

(statearr_32293_32449[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (30))){
var inst_32179 = (state_32219[(9)]);
var inst_32167 = (state_32219[(11)]);
var inst_32168 = (state_32219[(13)]);
var inst_32196 = cljs.core.empty_QMARK_.call(null,inst_32167);
var inst_32197 = inst_32168.call(null,inst_32179);
var inst_32198 = cljs.core.not.call(null,inst_32197);
var inst_32199 = (inst_32196) && (inst_32198);
var state_32219__$1 = state_32219;
var statearr_32294_32450 = state_32219__$1;
(statearr_32294_32450[(2)] = inst_32199);

(statearr_32294_32450[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (10))){
var inst_32120 = (state_32219[(8)]);
var inst_32140 = (state_32219[(2)]);
var inst_32141 = cljs.core.get.call(null,inst_32140,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32142 = cljs.core.get.call(null,inst_32140,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32143 = cljs.core.get.call(null,inst_32140,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32144 = inst_32120;
var state_32219__$1 = (function (){var statearr_32295 = state_32219;
(statearr_32295[(16)] = inst_32142);

(statearr_32295[(7)] = inst_32144);

(statearr_32295[(17)] = inst_32143);

(statearr_32295[(18)] = inst_32141);

return statearr_32295;
})();
var statearr_32297_32456 = state_32219__$1;
(statearr_32297_32456[(2)] = null);

(statearr_32297_32456[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (18))){
var inst_32158 = (state_32219[(2)]);
var state_32219__$1 = state_32219;
var statearr_32299_32457 = state_32219__$1;
(statearr_32299_32457[(2)] = inst_32158);

(statearr_32299_32457[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (37))){
var state_32219__$1 = state_32219;
var statearr_32300_32460 = state_32219__$1;
(statearr_32300_32460[(2)] = null);

(statearr_32300_32460[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32220 === (8))){
var inst_32120 = (state_32219[(8)]);
var inst_32137 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32120);
var state_32219__$1 = state_32219;
var statearr_32301_32462 = state_32219__$1;
(statearr_32301_32462[(2)] = inst_32137);

(statearr_32301_32462[(1)] = (10));


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
});})(c__28214__auto___32357,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27677__auto__,c__28214__auto___32357,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27678__auto__ = null;
var cljs$core$async$mix_$_state_machine__27678__auto____0 = (function (){
var statearr_32308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32308[(0)] = cljs$core$async$mix_$_state_machine__27678__auto__);

(statearr_32308[(1)] = (1));

return statearr_32308;
});
var cljs$core$async$mix_$_state_machine__27678__auto____1 = (function (state_32219){
while(true){
var ret_value__27679__auto__ = (function (){try{while(true){
var result__27680__auto__ = switch__27677__auto__.call(null,state_32219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27680__auto__;
}
break;
}
}catch (e32309){if((e32309 instanceof Object)){
var ex__27681__auto__ = e32309;
var statearr_32310_32469 = state_32219;
(statearr_32310_32469[(5)] = ex__27681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32309;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32475 = state_32219;
state_32219 = G__32475;
continue;
} else {
return ret_value__27679__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27678__auto__ = function(state_32219){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27678__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27678__auto____1.call(this,state_32219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27678__auto____0;
cljs$core$async$mix_$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27678__auto____1;
return cljs$core$async$mix_$_state_machine__27678__auto__;
})()
;})(switch__27677__auto__,c__28214__auto___32357,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28216__auto__ = (function (){var statearr_32311 = f__28215__auto__.call(null);
(statearr_32311[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28214__auto___32357);

return statearr_32311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28216__auto__);
});})(c__28214__auto___32357,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25423__auto__ = (((p == null))?null:p);
var m__25424__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25424__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25423__auto__ = (((p == null))?null:p);
var m__25424__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,p,v,ch);
} else {
var m__25424__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args32508 = [];
var len__25835__auto___32515 = arguments.length;
var i__25836__auto___32516 = (0);
while(true){
if((i__25836__auto___32516 < len__25835__auto___32515)){
args32508.push((arguments[i__25836__auto___32516]));

var G__32517 = (i__25836__auto___32516 + (1));
i__25836__auto___32516 = G__32517;
continue;
} else {
}
break;
}

var G__32513 = args32508.length;
switch (G__32513) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32508.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25423__auto__ = (((p == null))?null:p);
var m__25424__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,p);
} else {
var m__25424__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25423__auto__ = (((p == null))?null:p);
var m__25424__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25423__auto__)]);
if(!((m__25424__auto__ == null))){
return m__25424__auto__.call(null,p,v);
} else {
var m__25424__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25424__auto____$1 == null))){
return m__25424__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args32520 = [];
var len__25835__auto___32663 = arguments.length;
var i__25836__auto___32664 = (0);
while(true){
if((i__25836__auto___32664 < len__25835__auto___32663)){
args32520.push((arguments[i__25836__auto___32664]));

var G__32667 = (i__25836__auto___32664 + (1));
i__25836__auto___32664 = G__32667;
continue;
} else {
}
break;
}

var G__32522 = args32520.length;
switch (G__32522) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32520.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24760__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24760__auto__,mults){
return (function (p1__32519_SHARP_){
if(cljs.core.truth_(p1__32519_SHARP_.call(null,topic))){
return p1__32519_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32519_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24760__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32523 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32523 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32524){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32524 = meta32524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32525,meta32524__$1){
var self__ = this;
var _32525__$1 = this;
return (new cljs.core.async.t_cljs$core$async32523(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32524__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32523.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32525){
var self__ = this;
var _32525__$1 = this;
return self__.meta32524;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32523.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32523.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32523.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async32523.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32523.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32523.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32523.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32523.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32524","meta32524",-656397240,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32523.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32523.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32523";

cljs.core.async.t_cljs$core$async32523.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async32523");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32523 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32523(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32524){
return (new cljs.core.async.t_cljs$core$async32523(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32524));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32523(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28214__auto___32677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28214__auto___32677,mults,ensure_mult,p){
return (function (){
var f__28215__auto__ = (function (){var switch__27677__auto__ = ((function (c__28214__auto___32677,mults,ensure_mult,p){
return (function (state_32603){
var state_val_32604 = (state_32603[(1)]);
if((state_val_32604 === (7))){
var inst_32599 = (state_32603[(2)]);
var state_32603__$1 = state_32603;
var statearr_32605_32678 = state_32603__$1;
(statearr_32605_32678[(2)] = inst_32599);

(statearr_32605_32678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (20))){
var state_32603__$1 = state_32603;
var statearr_32606_32679 = state_32603__$1;
(statearr_32606_32679[(2)] = null);

(statearr_32606_32679[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (1))){
var state_32603__$1 = state_32603;
var statearr_32607_32680 = state_32603__$1;
(statearr_32607_32680[(2)] = null);

(statearr_32607_32680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (24))){
var inst_32582 = (state_32603[(7)]);
var inst_32591 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32582);
var state_32603__$1 = state_32603;
var statearr_32608_32681 = state_32603__$1;
(statearr_32608_32681[(2)] = inst_32591);

(statearr_32608_32681[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (4))){
var inst_32534 = (state_32603[(8)]);
var inst_32534__$1 = (state_32603[(2)]);
var inst_32535 = (inst_32534__$1 == null);
var state_32603__$1 = (function (){var statearr_32609 = state_32603;
(statearr_32609[(8)] = inst_32534__$1);

return statearr_32609;
})();
if(cljs.core.truth_(inst_32535)){
var statearr_32610_32683 = state_32603__$1;
(statearr_32610_32683[(1)] = (5));

} else {
var statearr_32611_32684 = state_32603__$1;
(statearr_32611_32684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (15))){
var inst_32576 = (state_32603[(2)]);
var state_32603__$1 = state_32603;
var statearr_32612_32686 = state_32603__$1;
(statearr_32612_32686[(2)] = inst_32576);

(statearr_32612_32686[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (21))){
var inst_32596 = (state_32603[(2)]);
var state_32603__$1 = (function (){var statearr_32613 = state_32603;
(statearr_32613[(9)] = inst_32596);

return statearr_32613;
})();
var statearr_32614_32687 = state_32603__$1;
(statearr_32614_32687[(2)] = null);

(statearr_32614_32687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (13))){
var inst_32558 = (state_32603[(10)]);
var inst_32560 = cljs.core.chunked_seq_QMARK_.call(null,inst_32558);
var state_32603__$1 = state_32603;
if(inst_32560){
var statearr_32615_32688 = state_32603__$1;
(statearr_32615_32688[(1)] = (16));

} else {
var statearr_32616_32689 = state_32603__$1;
(statearr_32616_32689[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (22))){
var inst_32588 = (state_32603[(2)]);
var state_32603__$1 = state_32603;
if(cljs.core.truth_(inst_32588)){
var statearr_32617_32693 = state_32603__$1;
(statearr_32617_32693[(1)] = (23));

} else {
var statearr_32618_32694 = state_32603__$1;
(statearr_32618_32694[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (6))){
var inst_32534 = (state_32603[(8)]);
var inst_32584 = (state_32603[(11)]);
var inst_32582 = (state_32603[(7)]);
var inst_32582__$1 = topic_fn.call(null,inst_32534);
var inst_32583 = cljs.core.deref.call(null,mults);
var inst_32584__$1 = cljs.core.get.call(null,inst_32583,inst_32582__$1);
var state_32603__$1 = (function (){var statearr_32619 = state_32603;
(statearr_32619[(11)] = inst_32584__$1);

(statearr_32619[(7)] = inst_32582__$1);

return statearr_32619;
})();
if(cljs.core.truth_(inst_32584__$1)){
var statearr_32620_32699 = state_32603__$1;
(statearr_32620_32699[(1)] = (19));

} else {
var statearr_32621_32700 = state_32603__$1;
(statearr_32621_32700[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (25))){
var inst_32593 = (state_32603[(2)]);
var state_32603__$1 = state_32603;
var statearr_32622_32701 = state_32603__$1;
(statearr_32622_32701[(2)] = inst_32593);

(statearr_32622_32701[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (17))){
var inst_32558 = (state_32603[(10)]);
var inst_32567 = cljs.core.first.call(null,inst_32558);
var inst_32568 = cljs.core.async.muxch_STAR_.call(null,inst_32567);
var inst_32569 = cljs.core.async.close_BANG_.call(null,inst_32568);
var inst_32570 = cljs.core.next.call(null,inst_32558);
var inst_32544 = inst_32570;
var inst_32545 = null;
var inst_32546 = (0);
var inst_32547 = (0);
var state_32603__$1 = (function (){var statearr_32623 = state_32603;
(statearr_32623[(12)] = inst_32545);

(statearr_32623[(13)] = inst_32569);

(statearr_32623[(14)] = inst_32544);

(statearr_32623[(15)] = inst_32546);

(statearr_32623[(16)] = inst_32547);

return statearr_32623;
})();
var statearr_32624_32712 = state_32603__$1;
(statearr_32624_32712[(2)] = null);

(statearr_32624_32712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (3))){
var inst_32601 = (state_32603[(2)]);
var state_32603__$1 = state_32603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32603__$1,inst_32601);
} else {
if((state_val_32604 === (12))){
var inst_32578 = (state_32603[(2)]);
var state_32603__$1 = state_32603;
var statearr_32626_32713 = state_32603__$1;
(statearr_32626_32713[(2)] = inst_32578);

(statearr_32626_32713[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (2))){
var state_32603__$1 = state_32603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32603__$1,(4),ch);
} else {
if((state_val_32604 === (23))){
var state_32603__$1 = state_32603;
var statearr_32628_32716 = state_32603__$1;
(statearr_32628_32716[(2)] = null);

(statearr_32628_32716[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (19))){
var inst_32534 = (state_32603[(8)]);
var inst_32584 = (state_32603[(11)]);
var inst_32586 = cljs.core.async.muxch_STAR_.call(null,inst_32584);
var state_32603__$1 = state_32603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32603__$1,(22),inst_32586,inst_32534);
} else {
if((state_val_32604 === (11))){
var inst_32544 = (state_32603[(14)]);
var inst_32558 = (state_32603[(10)]);
var inst_32558__$1 = cljs.core.seq.call(null,inst_32544);
var state_32603__$1 = (function (){var statearr_32637 = state_32603;
(statearr_32637[(10)] = inst_32558__$1);

return statearr_32637;
})();
if(inst_32558__$1){
var statearr_32638_32736 = state_32603__$1;
(statearr_32638_32736[(1)] = (13));

} else {
var statearr_32639_32740 = state_32603__$1;
(statearr_32639_32740[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (9))){
var inst_32580 = (state_32603[(2)]);
var state_32603__$1 = state_32603;
var statearr_32640_32741 = state_32603__$1;
(statearr_32640_32741[(2)] = inst_32580);

(statearr_32640_32741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (5))){
var inst_32541 = cljs.core.deref.call(null,mults);
var inst_32542 = cljs.core.vals.call(null,inst_32541);
var inst_32543 = cljs.core.seq.call(null,inst_32542);
var inst_32544 = inst_32543;
var inst_32545 = null;
var inst_32546 = (0);
var inst_32547 = (0);
var state_32603__$1 = (function (){var statearr_32641 = state_32603;
(statearr_32641[(12)] = inst_32545);

(statearr_32641[(14)] = inst_32544);

(statearr_32641[(15)] = inst_32546);

(statearr_32641[(16)] = inst_32547);

return statearr_32641;
})();
var statearr_32642_32744 = state_32603__$1;
(statearr_32642_32744[(2)] = null);

(statearr_32642_32744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (14))){
var state_32603__$1 = state_32603;
var statearr_32646_32745 = state_32603__$1;
(statearr_32646_32745[(2)] = null);

(statearr_32646_32745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (16))){
var inst_32558 = (state_32603[(10)]);
var inst_32562 = cljs.core.chunk_first.call(null,inst_32558);
var inst_32563 = cljs.core.chunk_rest.call(null,inst_32558);
var inst_32564 = cljs.core.count.call(null,inst_32562);
var inst_32544 = inst_32563;
var inst_32545 = inst_32562;
var inst_32546 = inst_32564;
var inst_32547 = (0);
var state_32603__$1 = (function (){var statearr_32647 = state_32603;
(statearr_32647[(12)] = inst_32545);

(statearr_32647[(14)] = inst_32544);

(statearr_32647[(15)] = inst_32546);

(statearr_32647[(16)] = inst_32547);

return statearr_32647;
})();
var statearr_32648_32753 = state_32603__$1;
(statearr_32648_32753[(2)] = null);

(statearr_32648_32753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (10))){
var inst_32545 = (state_32603[(12)]);
var inst_32544 = (state_32603[(14)]);
var inst_32546 = (state_32603[(15)]);
var inst_32547 = (state_32603[(16)]);
var inst_32552 = cljs.core._nth.call(null,inst_32545,inst_32547);
var inst_32553 = cljs.core.async.muxch_STAR_.call(null,inst_32552);
var inst_32554 = cljs.core.async.close_BANG_.call(null,inst_32553);
var inst_32555 = (inst_32547 + (1));
var tmp32643 = inst_32545;
var tmp32644 = inst_32544;
var tmp32645 = inst_32546;
var inst_32544__$1 = tmp32644;
var inst_32545__$1 = tmp32643;
var inst_32546__$1 = tmp32645;
var inst_32547__$1 = inst_32555;
var state_32603__$1 = (function (){var statearr_32649 = state_32603;
(statearr_32649[(12)] = inst_32545__$1);

(statearr_32649[(14)] = inst_32544__$1);

(statearr_32649[(15)] = inst_32546__$1);

(statearr_32649[(16)] = inst_32547__$1);

(statearr_32649[(17)] = inst_32554);

return statearr_32649;
})();
var statearr_32650_32761 = state_32603__$1;
(statearr_32650_32761[(2)] = null);

(statearr_32650_32761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (18))){
var inst_32573 = (state_32603[(2)]);
var state_32603__$1 = state_32603;
var statearr_32651_32765 = state_32603__$1;
(statearr_32651_32765[(2)] = inst_32573);

(statearr_32651_32765[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32604 === (8))){
var inst_32546 = (state_32603[(15)]);
var inst_32547 = (state_32603[(16)]);
var inst_32549 = (inst_32547 < inst_32546);
var inst_32550 = inst_32549;
var state_32603__$1 = state_32603;
if(cljs.core.truth_(inst_32550)){
var statearr_32652_32766 = state_32603__$1;
(statearr_32652_32766[(1)] = (10));

} else {
var statearr_32653_32767 = state_32603__$1;
(statearr_32653_32767[(1)] = (11));

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
});})(c__28214__auto___32677,mults,ensure_mult,p))
;
return ((function (switch__27677__auto__,c__28214__auto___32677,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27678__auto__ = null;
var cljs$core$async$state_machine__27678__auto____0 = (function (){
var statearr_32657 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32657[(0)] = cljs$core$async$state_machine__27678__auto__);

(statearr_32657[(1)] = (1));

return statearr_32657;
});
var cljs$core$async$state_machine__27678__auto____1 = (function (state_32603){
while(true){
var ret_value__27679__auto__ = (function (){try{while(true){
var result__27680__auto__ = switch__27677__auto__.call(null,state_32603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27680__auto__;
}
break;
}
}catch (e32658){if((e32658 instanceof Object)){
var ex__27681__auto__ = e32658;
var statearr_32659_32777 = state_32603;
(statearr_32659_32777[(5)] = ex__27681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32792 = state_32603;
state_32603 = G__32792;
continue;
} else {
return ret_value__27679__auto__;
}
break;
}
});
cljs$core$async$state_machine__27678__auto__ = function(state_32603){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27678__auto____1.call(this,state_32603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27678__auto____0;
cljs$core$async$state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27678__auto____1;
return cljs$core$async$state_machine__27678__auto__;
})()
;})(switch__27677__auto__,c__28214__auto___32677,mults,ensure_mult,p))
})();
var state__28216__auto__ = (function (){var statearr_32660 = f__28215__auto__.call(null);
(statearr_32660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28214__auto___32677);

return statearr_32660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28216__auto__);
});})(c__28214__auto___32677,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args32818 = [];
var len__25835__auto___32822 = arguments.length;
var i__25836__auto___32823 = (0);
while(true){
if((i__25836__auto___32823 < len__25835__auto___32822)){
args32818.push((arguments[i__25836__auto___32823]));

var G__32824 = (i__25836__auto___32823 + (1));
i__25836__auto___32823 = G__32824;
continue;
} else {
}
break;
}

var G__32821 = args32818.length;
switch (G__32821) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32818.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args32870 = [];
var len__25835__auto___32879 = arguments.length;
var i__25836__auto___32880 = (0);
while(true){
if((i__25836__auto___32880 < len__25835__auto___32879)){
args32870.push((arguments[i__25836__auto___32880]));

var G__32881 = (i__25836__auto___32880 + (1));
i__25836__auto___32880 = G__32881;
continue;
} else {
}
break;
}

var G__32875 = args32870.length;
switch (G__32875) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32870.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args32892 = [];
var len__25835__auto___32971 = arguments.length;
var i__25836__auto___32972 = (0);
while(true){
if((i__25836__auto___32972 < len__25835__auto___32971)){
args32892.push((arguments[i__25836__auto___32972]));

var G__32973 = (i__25836__auto___32972 + (1));
i__25836__auto___32972 = G__32973;
continue;
} else {
}
break;
}

var G__32899 = args32892.length;
switch (G__32899) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32892.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28214__auto___32988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28214__auto___32988,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28215__auto__ = (function (){var switch__27677__auto__ = ((function (c__28214__auto___32988,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32941){
var state_val_32942 = (state_32941[(1)]);
if((state_val_32942 === (7))){
var state_32941__$1 = state_32941;
var statearr_32943_32991 = state_32941__$1;
(statearr_32943_32991[(2)] = null);

(statearr_32943_32991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (1))){
var state_32941__$1 = state_32941;
var statearr_32944_32996 = state_32941__$1;
(statearr_32944_32996[(2)] = null);

(statearr_32944_32996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (4))){
var inst_32902 = (state_32941[(7)]);
var inst_32904 = (inst_32902 < cnt);
var state_32941__$1 = state_32941;
if(cljs.core.truth_(inst_32904)){
var statearr_32945_32999 = state_32941__$1;
(statearr_32945_32999[(1)] = (6));

} else {
var statearr_32946_33000 = state_32941__$1;
(statearr_32946_33000[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (15))){
var inst_32937 = (state_32941[(2)]);
var state_32941__$1 = state_32941;
var statearr_32947_33001 = state_32941__$1;
(statearr_32947_33001[(2)] = inst_32937);

(statearr_32947_33001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (13))){
var inst_32930 = cljs.core.async.close_BANG_.call(null,out);
var state_32941__$1 = state_32941;
var statearr_32948_33002 = state_32941__$1;
(statearr_32948_33002[(2)] = inst_32930);

(statearr_32948_33002[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (6))){
var state_32941__$1 = state_32941;
var statearr_32949_33003 = state_32941__$1;
(statearr_32949_33003[(2)] = null);

(statearr_32949_33003[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (3))){
var inst_32939 = (state_32941[(2)]);
var state_32941__$1 = state_32941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32941__$1,inst_32939);
} else {
if((state_val_32942 === (12))){
var inst_32927 = (state_32941[(8)]);
var inst_32927__$1 = (state_32941[(2)]);
var inst_32928 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32927__$1);
var state_32941__$1 = (function (){var statearr_32950 = state_32941;
(statearr_32950[(8)] = inst_32927__$1);

return statearr_32950;
})();
if(cljs.core.truth_(inst_32928)){
var statearr_32951_33004 = state_32941__$1;
(statearr_32951_33004[(1)] = (13));

} else {
var statearr_32952_33005 = state_32941__$1;
(statearr_32952_33005[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (2))){
var inst_32901 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32902 = (0);
var state_32941__$1 = (function (){var statearr_32953 = state_32941;
(statearr_32953[(7)] = inst_32902);

(statearr_32953[(9)] = inst_32901);

return statearr_32953;
})();
var statearr_32954_33006 = state_32941__$1;
(statearr_32954_33006[(2)] = null);

(statearr_32954_33006[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (11))){
var inst_32902 = (state_32941[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32941,(10),Object,null,(9));
var inst_32914 = chs__$1.call(null,inst_32902);
var inst_32915 = done.call(null,inst_32902);
var inst_32916 = cljs.core.async.take_BANG_.call(null,inst_32914,inst_32915);
var state_32941__$1 = state_32941;
var statearr_32955_33007 = state_32941__$1;
(statearr_32955_33007[(2)] = inst_32916);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32941__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (9))){
var inst_32902 = (state_32941[(7)]);
var inst_32918 = (state_32941[(2)]);
var inst_32919 = (inst_32902 + (1));
var inst_32902__$1 = inst_32919;
var state_32941__$1 = (function (){var statearr_32956 = state_32941;
(statearr_32956[(10)] = inst_32918);

(statearr_32956[(7)] = inst_32902__$1);

return statearr_32956;
})();
var statearr_32957_33011 = state_32941__$1;
(statearr_32957_33011[(2)] = null);

(statearr_32957_33011[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (5))){
var inst_32925 = (state_32941[(2)]);
var state_32941__$1 = (function (){var statearr_32958 = state_32941;
(statearr_32958[(11)] = inst_32925);

return statearr_32958;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32941__$1,(12),dchan);
} else {
if((state_val_32942 === (14))){
var inst_32927 = (state_32941[(8)]);
var inst_32932 = cljs.core.apply.call(null,f,inst_32927);
var state_32941__$1 = state_32941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32941__$1,(16),out,inst_32932);
} else {
if((state_val_32942 === (16))){
var inst_32934 = (state_32941[(2)]);
var state_32941__$1 = (function (){var statearr_32959 = state_32941;
(statearr_32959[(12)] = inst_32934);

return statearr_32959;
})();
var statearr_32960_33023 = state_32941__$1;
(statearr_32960_33023[(2)] = null);

(statearr_32960_33023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (10))){
var inst_32906 = (state_32941[(2)]);
var inst_32910 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32941__$1 = (function (){var statearr_32961 = state_32941;
(statearr_32961[(13)] = inst_32906);

return statearr_32961;
})();
var statearr_32962_33029 = state_32941__$1;
(statearr_32962_33029[(2)] = inst_32910);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32941__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32942 === (8))){
var inst_32923 = (state_32941[(2)]);
var state_32941__$1 = state_32941;
var statearr_32963_33033 = state_32941__$1;
(statearr_32963_33033[(2)] = inst_32923);

(statearr_32963_33033[(1)] = (5));


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
});})(c__28214__auto___32988,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27677__auto__,c__28214__auto___32988,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27678__auto__ = null;
var cljs$core$async$state_machine__27678__auto____0 = (function (){
var statearr_32967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32967[(0)] = cljs$core$async$state_machine__27678__auto__);

(statearr_32967[(1)] = (1));

return statearr_32967;
});
var cljs$core$async$state_machine__27678__auto____1 = (function (state_32941){
while(true){
var ret_value__27679__auto__ = (function (){try{while(true){
var result__27680__auto__ = switch__27677__auto__.call(null,state_32941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27680__auto__;
}
break;
}
}catch (e32968){if((e32968 instanceof Object)){
var ex__27681__auto__ = e32968;
var statearr_32969_33040 = state_32941;
(statearr_32969_33040[(5)] = ex__27681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33041 = state_32941;
state_32941 = G__33041;
continue;
} else {
return ret_value__27679__auto__;
}
break;
}
});
cljs$core$async$state_machine__27678__auto__ = function(state_32941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27678__auto____1.call(this,state_32941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27678__auto____0;
cljs$core$async$state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27678__auto____1;
return cljs$core$async$state_machine__27678__auto__;
})()
;})(switch__27677__auto__,c__28214__auto___32988,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28216__auto__ = (function (){var statearr_32970 = f__28215__auto__.call(null);
(statearr_32970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28214__auto___32988);

return statearr_32970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28216__auto__);
});})(c__28214__auto___32988,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args33043 = [];
var len__25835__auto___33118 = arguments.length;
var i__25836__auto___33119 = (0);
while(true){
if((i__25836__auto___33119 < len__25835__auto___33118)){
args33043.push((arguments[i__25836__auto___33119]));

var G__33120 = (i__25836__auto___33119 + (1));
i__25836__auto___33119 = G__33120;
continue;
} else {
}
break;
}

var G__33048 = args33043.length;
switch (G__33048) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33043.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28214__auto___33127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28214__auto___33127,out){
return (function (){
var f__28215__auto__ = (function (){var switch__27677__auto__ = ((function (c__28214__auto___33127,out){
return (function (state_33083){
var state_val_33084 = (state_33083[(1)]);
if((state_val_33084 === (7))){
var inst_33063 = (state_33083[(7)]);
var inst_33062 = (state_33083[(8)]);
var inst_33062__$1 = (state_33083[(2)]);
var inst_33063__$1 = cljs.core.nth.call(null,inst_33062__$1,(0),null);
var inst_33064 = cljs.core.nth.call(null,inst_33062__$1,(1),null);
var inst_33065 = (inst_33063__$1 == null);
var state_33083__$1 = (function (){var statearr_33085 = state_33083;
(statearr_33085[(7)] = inst_33063__$1);

(statearr_33085[(9)] = inst_33064);

(statearr_33085[(8)] = inst_33062__$1);

return statearr_33085;
})();
if(cljs.core.truth_(inst_33065)){
var statearr_33086_33142 = state_33083__$1;
(statearr_33086_33142[(1)] = (8));

} else {
var statearr_33088_33149 = state_33083__$1;
(statearr_33088_33149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (1))){
var inst_33049 = cljs.core.vec.call(null,chs);
var inst_33053 = inst_33049;
var state_33083__$1 = (function (){var statearr_33092 = state_33083;
(statearr_33092[(10)] = inst_33053);

return statearr_33092;
})();
var statearr_33093_33155 = state_33083__$1;
(statearr_33093_33155[(2)] = null);

(statearr_33093_33155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (4))){
var inst_33053 = (state_33083[(10)]);
var state_33083__$1 = state_33083;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33083__$1,(7),inst_33053);
} else {
if((state_val_33084 === (6))){
var inst_33079 = (state_33083[(2)]);
var state_33083__$1 = state_33083;
var statearr_33094_33156 = state_33083__$1;
(statearr_33094_33156[(2)] = inst_33079);

(statearr_33094_33156[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (3))){
var inst_33081 = (state_33083[(2)]);
var state_33083__$1 = state_33083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33083__$1,inst_33081);
} else {
if((state_val_33084 === (2))){
var inst_33053 = (state_33083[(10)]);
var inst_33055 = cljs.core.count.call(null,inst_33053);
var inst_33056 = (inst_33055 > (0));
var state_33083__$1 = state_33083;
if(cljs.core.truth_(inst_33056)){
var statearr_33100_33166 = state_33083__$1;
(statearr_33100_33166[(1)] = (4));

} else {
var statearr_33101_33167 = state_33083__$1;
(statearr_33101_33167[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (11))){
var inst_33053 = (state_33083[(10)]);
var inst_33072 = (state_33083[(2)]);
var tmp33095 = inst_33053;
var inst_33053__$1 = tmp33095;
var state_33083__$1 = (function (){var statearr_33102 = state_33083;
(statearr_33102[(11)] = inst_33072);

(statearr_33102[(10)] = inst_33053__$1);

return statearr_33102;
})();
var statearr_33103_33181 = state_33083__$1;
(statearr_33103_33181[(2)] = null);

(statearr_33103_33181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (9))){
var inst_33063 = (state_33083[(7)]);
var state_33083__$1 = state_33083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33083__$1,(11),out,inst_33063);
} else {
if((state_val_33084 === (5))){
var inst_33077 = cljs.core.async.close_BANG_.call(null,out);
var state_33083__$1 = state_33083;
var statearr_33104_33194 = state_33083__$1;
(statearr_33104_33194[(2)] = inst_33077);

(statearr_33104_33194[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (10))){
var inst_33075 = (state_33083[(2)]);
var state_33083__$1 = state_33083;
var statearr_33105_33195 = state_33083__$1;
(statearr_33105_33195[(2)] = inst_33075);

(statearr_33105_33195[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33084 === (8))){
var inst_33063 = (state_33083[(7)]);
var inst_33064 = (state_33083[(9)]);
var inst_33053 = (state_33083[(10)]);
var inst_33062 = (state_33083[(8)]);
var inst_33067 = (function (){var cs = inst_33053;
var vec__33058 = inst_33062;
var v = inst_33063;
var c = inst_33064;
return ((function (cs,vec__33058,v,c,inst_33063,inst_33064,inst_33053,inst_33062,state_val_33084,c__28214__auto___33127,out){
return (function (p1__33042_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33042_SHARP_);
});
;})(cs,vec__33058,v,c,inst_33063,inst_33064,inst_33053,inst_33062,state_val_33084,c__28214__auto___33127,out))
})();
var inst_33068 = cljs.core.filterv.call(null,inst_33067,inst_33053);
var inst_33053__$1 = inst_33068;
var state_33083__$1 = (function (){var statearr_33106 = state_33083;
(statearr_33106[(10)] = inst_33053__$1);

return statearr_33106;
})();
var statearr_33107_33196 = state_33083__$1;
(statearr_33107_33196[(2)] = null);

(statearr_33107_33196[(1)] = (2));


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
});})(c__28214__auto___33127,out))
;
return ((function (switch__27677__auto__,c__28214__auto___33127,out){
return (function() {
var cljs$core$async$state_machine__27678__auto__ = null;
var cljs$core$async$state_machine__27678__auto____0 = (function (){
var statearr_33111 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33111[(0)] = cljs$core$async$state_machine__27678__auto__);

(statearr_33111[(1)] = (1));

return statearr_33111;
});
var cljs$core$async$state_machine__27678__auto____1 = (function (state_33083){
while(true){
var ret_value__27679__auto__ = (function (){try{while(true){
var result__27680__auto__ = switch__27677__auto__.call(null,state_33083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27680__auto__;
}
break;
}
}catch (e33112){if((e33112 instanceof Object)){
var ex__27681__auto__ = e33112;
var statearr_33113_33201 = state_33083;
(statearr_33113_33201[(5)] = ex__27681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33202 = state_33083;
state_33083 = G__33202;
continue;
} else {
return ret_value__27679__auto__;
}
break;
}
});
cljs$core$async$state_machine__27678__auto__ = function(state_33083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27678__auto____1.call(this,state_33083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27678__auto____0;
cljs$core$async$state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27678__auto____1;
return cljs$core$async$state_machine__27678__auto__;
})()
;})(switch__27677__auto__,c__28214__auto___33127,out))
})();
var state__28216__auto__ = (function (){var statearr_33114 = f__28215__auto__.call(null);
(statearr_33114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28214__auto___33127);

return statearr_33114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28216__auto__);
});})(c__28214__auto___33127,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args33209 = [];
var len__25835__auto___33262 = arguments.length;
var i__25836__auto___33263 = (0);
while(true){
if((i__25836__auto___33263 < len__25835__auto___33262)){
args33209.push((arguments[i__25836__auto___33263]));

var G__33264 = (i__25836__auto___33263 + (1));
i__25836__auto___33263 = G__33264;
continue;
} else {
}
break;
}

var G__33211 = args33209.length;
switch (G__33211) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33209.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28214__auto___33269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28214__auto___33269,out){
return (function (){
var f__28215__auto__ = (function (){var switch__27677__auto__ = ((function (c__28214__auto___33269,out){
return (function (state_33235){
var state_val_33236 = (state_33235[(1)]);
if((state_val_33236 === (7))){
var inst_33217 = (state_33235[(7)]);
var inst_33217__$1 = (state_33235[(2)]);
var inst_33218 = (inst_33217__$1 == null);
var inst_33219 = cljs.core.not.call(null,inst_33218);
var state_33235__$1 = (function (){var statearr_33237 = state_33235;
(statearr_33237[(7)] = inst_33217__$1);

return statearr_33237;
})();
if(inst_33219){
var statearr_33238_33270 = state_33235__$1;
(statearr_33238_33270[(1)] = (8));

} else {
var statearr_33239_33271 = state_33235__$1;
(statearr_33239_33271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33236 === (1))){
var inst_33212 = (0);
var state_33235__$1 = (function (){var statearr_33240 = state_33235;
(statearr_33240[(8)] = inst_33212);

return statearr_33240;
})();
var statearr_33241_33272 = state_33235__$1;
(statearr_33241_33272[(2)] = null);

(statearr_33241_33272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33236 === (4))){
var state_33235__$1 = state_33235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33235__$1,(7),ch);
} else {
if((state_val_33236 === (6))){
var inst_33230 = (state_33235[(2)]);
var state_33235__$1 = state_33235;
var statearr_33242_33273 = state_33235__$1;
(statearr_33242_33273[(2)] = inst_33230);

(statearr_33242_33273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33236 === (3))){
var inst_33232 = (state_33235[(2)]);
var inst_33233 = cljs.core.async.close_BANG_.call(null,out);
var state_33235__$1 = (function (){var statearr_33243 = state_33235;
(statearr_33243[(9)] = inst_33232);

return statearr_33243;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33235__$1,inst_33233);
} else {
if((state_val_33236 === (2))){
var inst_33212 = (state_33235[(8)]);
var inst_33214 = (inst_33212 < n);
var state_33235__$1 = state_33235;
if(cljs.core.truth_(inst_33214)){
var statearr_33244_33276 = state_33235__$1;
(statearr_33244_33276[(1)] = (4));

} else {
var statearr_33245_33277 = state_33235__$1;
(statearr_33245_33277[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33236 === (11))){
var inst_33212 = (state_33235[(8)]);
var inst_33222 = (state_33235[(2)]);
var inst_33223 = (inst_33212 + (1));
var inst_33212__$1 = inst_33223;
var state_33235__$1 = (function (){var statearr_33246 = state_33235;
(statearr_33246[(8)] = inst_33212__$1);

(statearr_33246[(10)] = inst_33222);

return statearr_33246;
})();
var statearr_33247_33281 = state_33235__$1;
(statearr_33247_33281[(2)] = null);

(statearr_33247_33281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33236 === (9))){
var state_33235__$1 = state_33235;
var statearr_33248_33285 = state_33235__$1;
(statearr_33248_33285[(2)] = null);

(statearr_33248_33285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33236 === (5))){
var state_33235__$1 = state_33235;
var statearr_33249_33286 = state_33235__$1;
(statearr_33249_33286[(2)] = null);

(statearr_33249_33286[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33236 === (10))){
var inst_33227 = (state_33235[(2)]);
var state_33235__$1 = state_33235;
var statearr_33250_33287 = state_33235__$1;
(statearr_33250_33287[(2)] = inst_33227);

(statearr_33250_33287[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33236 === (8))){
var inst_33217 = (state_33235[(7)]);
var state_33235__$1 = state_33235;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33235__$1,(11),out,inst_33217);
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
});})(c__28214__auto___33269,out))
;
return ((function (switch__27677__auto__,c__28214__auto___33269,out){
return (function() {
var cljs$core$async$state_machine__27678__auto__ = null;
var cljs$core$async$state_machine__27678__auto____0 = (function (){
var statearr_33255 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33255[(0)] = cljs$core$async$state_machine__27678__auto__);

(statearr_33255[(1)] = (1));

return statearr_33255;
});
var cljs$core$async$state_machine__27678__auto____1 = (function (state_33235){
while(true){
var ret_value__27679__auto__ = (function (){try{while(true){
var result__27680__auto__ = switch__27677__auto__.call(null,state_33235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27680__auto__;
}
break;
}
}catch (e33256){if((e33256 instanceof Object)){
var ex__27681__auto__ = e33256;
var statearr_33257_33290 = state_33235;
(statearr_33257_33290[(5)] = ex__27681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33291 = state_33235;
state_33235 = G__33291;
continue;
} else {
return ret_value__27679__auto__;
}
break;
}
});
cljs$core$async$state_machine__27678__auto__ = function(state_33235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27678__auto____1.call(this,state_33235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27678__auto____0;
cljs$core$async$state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27678__auto____1;
return cljs$core$async$state_machine__27678__auto__;
})()
;})(switch__27677__auto__,c__28214__auto___33269,out))
})();
var state__28216__auto__ = (function (){var statearr_33258 = f__28215__auto__.call(null);
(statearr_33258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28214__auto___33269);

return statearr_33258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28216__auto__);
});})(c__28214__auto___33269,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33335 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33335 = (function (map_LT_,f,ch,meta33336){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33336 = meta33336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33337,meta33336__$1){
var self__ = this;
var _33337__$1 = this;
return (new cljs.core.async.t_cljs$core$async33335(self__.map_LT_,self__.f,self__.ch,meta33336__$1));
});

cljs.core.async.t_cljs$core$async33335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33337){
var self__ = this;
var _33337__$1 = this;
return self__.meta33336;
});

cljs.core.async.t_cljs$core$async33335.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33335.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33335.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33335.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33335.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async33339 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33339 = (function (map_LT_,f,ch,meta33336,_,fn1,meta33340){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33336 = meta33336;
this._ = _;
this.fn1 = fn1;
this.meta33340 = meta33340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33341,meta33340__$1){
var self__ = this;
var _33341__$1 = this;
return (new cljs.core.async.t_cljs$core$async33339(self__.map_LT_,self__.f,self__.ch,self__.meta33336,self__._,self__.fn1,meta33340__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33339.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33341){
var self__ = this;
var _33341__$1 = this;
return self__.meta33340;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33339.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33339.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33339.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33339.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33295_SHARP_){
return f1.call(null,(((p1__33295_SHARP_ == null))?null:self__.f.call(null,p1__33295_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33339.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33336","meta33336",-569000296,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33335","cljs.core.async/t_cljs$core$async33335",1726782298,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33340","meta33340",-1411118801,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33339.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33339.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33339";

cljs.core.async.t_cljs$core$async33339.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async33339");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async33339 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33339(map_LT___$1,f__$1,ch__$1,meta33336__$1,___$2,fn1__$1,meta33340){
return (new cljs.core.async.t_cljs$core$async33339(map_LT___$1,f__$1,ch__$1,meta33336__$1,___$2,fn1__$1,meta33340));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33339(self__.map_LT_,self__.f,self__.ch,self__.meta33336,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24748__auto__ = ret;
if(cljs.core.truth_(and__24748__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24748__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33335.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33335.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33335.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33336","meta33336",-569000296,null)], null);
});

cljs.core.async.t_cljs$core$async33335.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33335";

cljs.core.async.t_cljs$core$async33335.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async33335");
});

cljs.core.async.__GT_t_cljs$core$async33335 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33335(map_LT___$1,f__$1,ch__$1,meta33336){
return (new cljs.core.async.t_cljs$core$async33335(map_LT___$1,f__$1,ch__$1,meta33336));
});

}

return (new cljs.core.async.t_cljs$core$async33335(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33404 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33404 = (function (map_GT_,f,ch,meta33405){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta33405 = meta33405;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33406,meta33405__$1){
var self__ = this;
var _33406__$1 = this;
return (new cljs.core.async.t_cljs$core$async33404(self__.map_GT_,self__.f,self__.ch,meta33405__$1));
});

cljs.core.async.t_cljs$core$async33404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33406){
var self__ = this;
var _33406__$1 = this;
return self__.meta33405;
});

cljs.core.async.t_cljs$core$async33404.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33404.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33404.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33404.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33404.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33404.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33404.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33405","meta33405",-82153194,null)], null);
});

cljs.core.async.t_cljs$core$async33404.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33404.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33404";

cljs.core.async.t_cljs$core$async33404.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async33404");
});

cljs.core.async.__GT_t_cljs$core$async33404 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33404(map_GT___$1,f__$1,ch__$1,meta33405){
return (new cljs.core.async.t_cljs$core$async33404(map_GT___$1,f__$1,ch__$1,meta33405));
});

}

return (new cljs.core.async.t_cljs$core$async33404(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async33479 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33479 = (function (filter_GT_,p,ch,meta33480){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta33480 = meta33480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33481,meta33480__$1){
var self__ = this;
var _33481__$1 = this;
return (new cljs.core.async.t_cljs$core$async33479(self__.filter_GT_,self__.p,self__.ch,meta33480__$1));
});

cljs.core.async.t_cljs$core$async33479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33481){
var self__ = this;
var _33481__$1 = this;
return self__.meta33480;
});

cljs.core.async.t_cljs$core$async33479.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33479.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33479.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33479.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33479.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33479.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33479.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33479.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33480","meta33480",938069064,null)], null);
});

cljs.core.async.t_cljs$core$async33479.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33479.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33479";

cljs.core.async.t_cljs$core$async33479.cljs$lang$ctorPrWriter = (function (this__25366__auto__,writer__25367__auto__,opt__25368__auto__){
return cljs.core._write.call(null,writer__25367__auto__,"cljs.core.async/t_cljs$core$async33479");
});

cljs.core.async.__GT_t_cljs$core$async33479 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33479(filter_GT___$1,p__$1,ch__$1,meta33480){
return (new cljs.core.async.t_cljs$core$async33479(filter_GT___$1,p__$1,ch__$1,meta33480));
});

}

return (new cljs.core.async.t_cljs$core$async33479(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args33514 = [];
var len__25835__auto___33588 = arguments.length;
var i__25836__auto___33589 = (0);
while(true){
if((i__25836__auto___33589 < len__25835__auto___33588)){
args33514.push((arguments[i__25836__auto___33589]));

var G__33591 = (i__25836__auto___33589 + (1));
i__25836__auto___33589 = G__33591;
continue;
} else {
}
break;
}

var G__33516 = args33514.length;
switch (G__33516) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33514.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28214__auto___33594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28214__auto___33594,out){
return (function (){
var f__28215__auto__ = (function (){var switch__27677__auto__ = ((function (c__28214__auto___33594,out){
return (function (state_33541){
var state_val_33542 = (state_33541[(1)]);
if((state_val_33542 === (7))){
var inst_33537 = (state_33541[(2)]);
var state_33541__$1 = state_33541;
var statearr_33543_33595 = state_33541__$1;
(statearr_33543_33595[(2)] = inst_33537);

(statearr_33543_33595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33542 === (1))){
var state_33541__$1 = state_33541;
var statearr_33544_33596 = state_33541__$1;
(statearr_33544_33596[(2)] = null);

(statearr_33544_33596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33542 === (4))){
var inst_33523 = (state_33541[(7)]);
var inst_33523__$1 = (state_33541[(2)]);
var inst_33524 = (inst_33523__$1 == null);
var state_33541__$1 = (function (){var statearr_33545 = state_33541;
(statearr_33545[(7)] = inst_33523__$1);

return statearr_33545;
})();
if(cljs.core.truth_(inst_33524)){
var statearr_33555_33600 = state_33541__$1;
(statearr_33555_33600[(1)] = (5));

} else {
var statearr_33560_33604 = state_33541__$1;
(statearr_33560_33604[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33542 === (6))){
var inst_33523 = (state_33541[(7)]);
var inst_33528 = p.call(null,inst_33523);
var state_33541__$1 = state_33541;
if(cljs.core.truth_(inst_33528)){
var statearr_33561_33614 = state_33541__$1;
(statearr_33561_33614[(1)] = (8));

} else {
var statearr_33562_33624 = state_33541__$1;
(statearr_33562_33624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33542 === (3))){
var inst_33539 = (state_33541[(2)]);
var state_33541__$1 = state_33541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33541__$1,inst_33539);
} else {
if((state_val_33542 === (2))){
var state_33541__$1 = state_33541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33541__$1,(4),ch);
} else {
if((state_val_33542 === (11))){
var inst_33531 = (state_33541[(2)]);
var state_33541__$1 = state_33541;
var statearr_33563_33625 = state_33541__$1;
(statearr_33563_33625[(2)] = inst_33531);

(statearr_33563_33625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33542 === (9))){
var state_33541__$1 = state_33541;
var statearr_33564_33626 = state_33541__$1;
(statearr_33564_33626[(2)] = null);

(statearr_33564_33626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33542 === (5))){
var inst_33526 = cljs.core.async.close_BANG_.call(null,out);
var state_33541__$1 = state_33541;
var statearr_33565_33633 = state_33541__$1;
(statearr_33565_33633[(2)] = inst_33526);

(statearr_33565_33633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33542 === (10))){
var inst_33534 = (state_33541[(2)]);
var state_33541__$1 = (function (){var statearr_33579 = state_33541;
(statearr_33579[(8)] = inst_33534);

return statearr_33579;
})();
var statearr_33580_33635 = state_33541__$1;
(statearr_33580_33635[(2)] = null);

(statearr_33580_33635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33542 === (8))){
var inst_33523 = (state_33541[(7)]);
var state_33541__$1 = state_33541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33541__$1,(11),out,inst_33523);
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
});})(c__28214__auto___33594,out))
;
return ((function (switch__27677__auto__,c__28214__auto___33594,out){
return (function() {
var cljs$core$async$state_machine__27678__auto__ = null;
var cljs$core$async$state_machine__27678__auto____0 = (function (){
var statearr_33584 = [null,null,null,null,null,null,null,null,null];
(statearr_33584[(0)] = cljs$core$async$state_machine__27678__auto__);

(statearr_33584[(1)] = (1));

return statearr_33584;
});
var cljs$core$async$state_machine__27678__auto____1 = (function (state_33541){
while(true){
var ret_value__27679__auto__ = (function (){try{while(true){
var result__27680__auto__ = switch__27677__auto__.call(null,state_33541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27680__auto__;
}
break;
}
}catch (e33585){if((e33585 instanceof Object)){
var ex__27681__auto__ = e33585;
var statearr_33586_33647 = state_33541;
(statearr_33586_33647[(5)] = ex__27681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33648 = state_33541;
state_33541 = G__33648;
continue;
} else {
return ret_value__27679__auto__;
}
break;
}
});
cljs$core$async$state_machine__27678__auto__ = function(state_33541){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27678__auto____1.call(this,state_33541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27678__auto____0;
cljs$core$async$state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27678__auto____1;
return cljs$core$async$state_machine__27678__auto__;
})()
;})(switch__27677__auto__,c__28214__auto___33594,out))
})();
var state__28216__auto__ = (function (){var statearr_33587 = f__28215__auto__.call(null);
(statearr_33587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28214__auto___33594);

return statearr_33587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28216__auto__);
});})(c__28214__auto___33594,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args33655 = [];
var len__25835__auto___33665 = arguments.length;
var i__25836__auto___33666 = (0);
while(true){
if((i__25836__auto___33666 < len__25835__auto___33665)){
args33655.push((arguments[i__25836__auto___33666]));

var G__33668 = (i__25836__auto___33666 + (1));
i__25836__auto___33666 = G__33668;
continue;
} else {
}
break;
}

var G__33664 = args33655.length;
switch (G__33664) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33655.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28214__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28214__auto__){
return (function (){
var f__28215__auto__ = (function (){var switch__27677__auto__ = ((function (c__28214__auto__){
return (function (state_33889){
var state_val_33890 = (state_33889[(1)]);
if((state_val_33890 === (7))){
var inst_33884 = (state_33889[(2)]);
var state_33889__$1 = state_33889;
var statearr_33897_33990 = state_33889__$1;
(statearr_33897_33990[(2)] = inst_33884);

(statearr_33897_33990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (20))){
var inst_33853 = (state_33889[(7)]);
var inst_33865 = (state_33889[(2)]);
var inst_33866 = cljs.core.next.call(null,inst_33853);
var inst_33832 = inst_33866;
var inst_33833 = null;
var inst_33834 = (0);
var inst_33835 = (0);
var state_33889__$1 = (function (){var statearr_33901 = state_33889;
(statearr_33901[(8)] = inst_33865);

(statearr_33901[(9)] = inst_33832);

(statearr_33901[(10)] = inst_33834);

(statearr_33901[(11)] = inst_33835);

(statearr_33901[(12)] = inst_33833);

return statearr_33901;
})();
var statearr_33902_33999 = state_33889__$1;
(statearr_33902_33999[(2)] = null);

(statearr_33902_33999[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (1))){
var state_33889__$1 = state_33889;
var statearr_33903_34000 = state_33889__$1;
(statearr_33903_34000[(2)] = null);

(statearr_33903_34000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (4))){
var inst_33809 = (state_33889[(13)]);
var inst_33809__$1 = (state_33889[(2)]);
var inst_33813 = (inst_33809__$1 == null);
var state_33889__$1 = (function (){var statearr_33907 = state_33889;
(statearr_33907[(13)] = inst_33809__$1);

return statearr_33907;
})();
if(cljs.core.truth_(inst_33813)){
var statearr_33908_34001 = state_33889__$1;
(statearr_33908_34001[(1)] = (5));

} else {
var statearr_33909_34004 = state_33889__$1;
(statearr_33909_34004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (15))){
var state_33889__$1 = state_33889;
var statearr_33913_34009 = state_33889__$1;
(statearr_33913_34009[(2)] = null);

(statearr_33913_34009[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (21))){
var state_33889__$1 = state_33889;
var statearr_33914_34010 = state_33889__$1;
(statearr_33914_34010[(2)] = null);

(statearr_33914_34010[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (13))){
var inst_33832 = (state_33889[(9)]);
var inst_33834 = (state_33889[(10)]);
var inst_33835 = (state_33889[(11)]);
var inst_33833 = (state_33889[(12)]);
var inst_33842 = (state_33889[(2)]);
var inst_33844 = (inst_33835 + (1));
var tmp33910 = inst_33832;
var tmp33911 = inst_33834;
var tmp33912 = inst_33833;
var inst_33832__$1 = tmp33910;
var inst_33833__$1 = tmp33912;
var inst_33834__$1 = tmp33911;
var inst_33835__$1 = inst_33844;
var state_33889__$1 = (function (){var statearr_33915 = state_33889;
(statearr_33915[(9)] = inst_33832__$1);

(statearr_33915[(10)] = inst_33834__$1);

(statearr_33915[(11)] = inst_33835__$1);

(statearr_33915[(14)] = inst_33842);

(statearr_33915[(12)] = inst_33833__$1);

return statearr_33915;
})();
var statearr_33916_34030 = state_33889__$1;
(statearr_33916_34030[(2)] = null);

(statearr_33916_34030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (22))){
var state_33889__$1 = state_33889;
var statearr_33918_34031 = state_33889__$1;
(statearr_33918_34031[(2)] = null);

(statearr_33918_34031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (6))){
var inst_33809 = (state_33889[(13)]);
var inst_33830 = f.call(null,inst_33809);
var inst_33831 = cljs.core.seq.call(null,inst_33830);
var inst_33832 = inst_33831;
var inst_33833 = null;
var inst_33834 = (0);
var inst_33835 = (0);
var state_33889__$1 = (function (){var statearr_33919 = state_33889;
(statearr_33919[(9)] = inst_33832);

(statearr_33919[(10)] = inst_33834);

(statearr_33919[(11)] = inst_33835);

(statearr_33919[(12)] = inst_33833);

return statearr_33919;
})();
var statearr_33921_34036 = state_33889__$1;
(statearr_33921_34036[(2)] = null);

(statearr_33921_34036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (17))){
var inst_33853 = (state_33889[(7)]);
var inst_33858 = cljs.core.chunk_first.call(null,inst_33853);
var inst_33859 = cljs.core.chunk_rest.call(null,inst_33853);
var inst_33860 = cljs.core.count.call(null,inst_33858);
var inst_33832 = inst_33859;
var inst_33833 = inst_33858;
var inst_33834 = inst_33860;
var inst_33835 = (0);
var state_33889__$1 = (function (){var statearr_33922 = state_33889;
(statearr_33922[(9)] = inst_33832);

(statearr_33922[(10)] = inst_33834);

(statearr_33922[(11)] = inst_33835);

(statearr_33922[(12)] = inst_33833);

return statearr_33922;
})();
var statearr_33924_34051 = state_33889__$1;
(statearr_33924_34051[(2)] = null);

(statearr_33924_34051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (3))){
var inst_33886 = (state_33889[(2)]);
var state_33889__$1 = state_33889;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33889__$1,inst_33886);
} else {
if((state_val_33890 === (12))){
var inst_33874 = (state_33889[(2)]);
var state_33889__$1 = state_33889;
var statearr_33926_34054 = state_33889__$1;
(statearr_33926_34054[(2)] = inst_33874);

(statearr_33926_34054[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (2))){
var state_33889__$1 = state_33889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33889__$1,(4),in$);
} else {
if((state_val_33890 === (23))){
var inst_33882 = (state_33889[(2)]);
var state_33889__$1 = state_33889;
var statearr_33927_34070 = state_33889__$1;
(statearr_33927_34070[(2)] = inst_33882);

(statearr_33927_34070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (19))){
var inst_33869 = (state_33889[(2)]);
var state_33889__$1 = state_33889;
var statearr_33932_34072 = state_33889__$1;
(statearr_33932_34072[(2)] = inst_33869);

(statearr_33932_34072[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (11))){
var inst_33853 = (state_33889[(7)]);
var inst_33832 = (state_33889[(9)]);
var inst_33853__$1 = cljs.core.seq.call(null,inst_33832);
var state_33889__$1 = (function (){var statearr_33933 = state_33889;
(statearr_33933[(7)] = inst_33853__$1);

return statearr_33933;
})();
if(inst_33853__$1){
var statearr_33934_34073 = state_33889__$1;
(statearr_33934_34073[(1)] = (14));

} else {
var statearr_33935_34074 = state_33889__$1;
(statearr_33935_34074[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (9))){
var inst_33876 = (state_33889[(2)]);
var inst_33877 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33889__$1 = (function (){var statearr_33937 = state_33889;
(statearr_33937[(15)] = inst_33876);

return statearr_33937;
})();
if(cljs.core.truth_(inst_33877)){
var statearr_33938_34075 = state_33889__$1;
(statearr_33938_34075[(1)] = (21));

} else {
var statearr_33939_34076 = state_33889__$1;
(statearr_33939_34076[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (5))){
var inst_33824 = cljs.core.async.close_BANG_.call(null,out);
var state_33889__$1 = state_33889;
var statearr_33940_34077 = state_33889__$1;
(statearr_33940_34077[(2)] = inst_33824);

(statearr_33940_34077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (14))){
var inst_33853 = (state_33889[(7)]);
var inst_33856 = cljs.core.chunked_seq_QMARK_.call(null,inst_33853);
var state_33889__$1 = state_33889;
if(inst_33856){
var statearr_33941_34078 = state_33889__$1;
(statearr_33941_34078[(1)] = (17));

} else {
var statearr_33942_34079 = state_33889__$1;
(statearr_33942_34079[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (16))){
var inst_33872 = (state_33889[(2)]);
var state_33889__$1 = state_33889;
var statearr_33944_34080 = state_33889__$1;
(statearr_33944_34080[(2)] = inst_33872);

(statearr_33944_34080[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33890 === (10))){
var inst_33835 = (state_33889[(11)]);
var inst_33833 = (state_33889[(12)]);
var inst_33840 = cljs.core._nth.call(null,inst_33833,inst_33835);
var state_33889__$1 = state_33889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33889__$1,(13),out,inst_33840);
} else {
if((state_val_33890 === (18))){
var inst_33853 = (state_33889[(7)]);
var inst_33863 = cljs.core.first.call(null,inst_33853);
var state_33889__$1 = state_33889;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33889__$1,(20),out,inst_33863);
} else {
if((state_val_33890 === (8))){
var inst_33834 = (state_33889[(10)]);
var inst_33835 = (state_33889[(11)]);
var inst_33837 = (inst_33835 < inst_33834);
var inst_33838 = inst_33837;
var state_33889__$1 = state_33889;
if(cljs.core.truth_(inst_33838)){
var statearr_33948_34093 = state_33889__$1;
(statearr_33948_34093[(1)] = (10));

} else {
var statearr_33949_34094 = state_33889__$1;
(statearr_33949_34094[(1)] = (11));

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
});})(c__28214__auto__))
;
return ((function (switch__27677__auto__,c__28214__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27678__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27678__auto____0 = (function (){
var statearr_33968 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33968[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27678__auto__);

(statearr_33968[(1)] = (1));

return statearr_33968;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27678__auto____1 = (function (state_33889){
while(true){
var ret_value__27679__auto__ = (function (){try{while(true){
var result__27680__auto__ = switch__27677__auto__.call(null,state_33889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27680__auto__;
}
break;
}
}catch (e33969){if((e33969 instanceof Object)){
var ex__27681__auto__ = e33969;
var statearr_33970_34104 = state_33889;
(statearr_33970_34104[(5)] = ex__27681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34110 = state_33889;
state_33889 = G__34110;
continue;
} else {
return ret_value__27679__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27678__auto__ = function(state_33889){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27678__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27678__auto____1.call(this,state_33889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27678__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27678__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27678__auto__;
})()
;})(switch__27677__auto__,c__28214__auto__))
})();
var state__28216__auto__ = (function (){var statearr_33972 = f__28215__auto__.call(null);
(statearr_33972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28214__auto__);

return statearr_33972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28216__auto__);
});})(c__28214__auto__))
);

return c__28214__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args34111 = [];
var len__25835__auto___34125 = arguments.length;
var i__25836__auto___34126 = (0);
while(true){
if((i__25836__auto___34126 < len__25835__auto___34125)){
args34111.push((arguments[i__25836__auto___34126]));

var G__34127 = (i__25836__auto___34126 + (1));
i__25836__auto___34126 = G__34127;
continue;
} else {
}
break;
}

var G__34117 = args34111.length;
switch (G__34117) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34111.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args34138 = [];
var len__25835__auto___34141 = arguments.length;
var i__25836__auto___34142 = (0);
while(true){
if((i__25836__auto___34142 < len__25835__auto___34141)){
args34138.push((arguments[i__25836__auto___34142]));

var G__34143 = (i__25836__auto___34142 + (1));
i__25836__auto___34142 = G__34143;
continue;
} else {
}
break;
}

var G__34140 = args34138.length;
switch (G__34140) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34138.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args34145 = [];
var len__25835__auto___34215 = arguments.length;
var i__25836__auto___34216 = (0);
while(true){
if((i__25836__auto___34216 < len__25835__auto___34215)){
args34145.push((arguments[i__25836__auto___34216]));

var G__34217 = (i__25836__auto___34216 + (1));
i__25836__auto___34216 = G__34217;
continue;
} else {
}
break;
}

var G__34149 = args34145.length;
switch (G__34149) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34145.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28214__auto___34219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28214__auto___34219,out){
return (function (){
var f__28215__auto__ = (function (){var switch__27677__auto__ = ((function (c__28214__auto___34219,out){
return (function (state_34180){
var state_val_34181 = (state_34180[(1)]);
if((state_val_34181 === (7))){
var inst_34175 = (state_34180[(2)]);
var state_34180__$1 = state_34180;
var statearr_34182_34220 = state_34180__$1;
(statearr_34182_34220[(2)] = inst_34175);

(statearr_34182_34220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (1))){
var inst_34154 = null;
var state_34180__$1 = (function (){var statearr_34183 = state_34180;
(statearr_34183[(7)] = inst_34154);

return statearr_34183;
})();
var statearr_34185_34221 = state_34180__$1;
(statearr_34185_34221[(2)] = null);

(statearr_34185_34221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (4))){
var inst_34157 = (state_34180[(8)]);
var inst_34157__$1 = (state_34180[(2)]);
var inst_34158 = (inst_34157__$1 == null);
var inst_34159 = cljs.core.not.call(null,inst_34158);
var state_34180__$1 = (function (){var statearr_34190 = state_34180;
(statearr_34190[(8)] = inst_34157__$1);

return statearr_34190;
})();
if(inst_34159){
var statearr_34191_34227 = state_34180__$1;
(statearr_34191_34227[(1)] = (5));

} else {
var statearr_34192_34228 = state_34180__$1;
(statearr_34192_34228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (6))){
var state_34180__$1 = state_34180;
var statearr_34194_34231 = state_34180__$1;
(statearr_34194_34231[(2)] = null);

(statearr_34194_34231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (3))){
var inst_34177 = (state_34180[(2)]);
var inst_34178 = cljs.core.async.close_BANG_.call(null,out);
var state_34180__$1 = (function (){var statearr_34195 = state_34180;
(statearr_34195[(9)] = inst_34177);

return statearr_34195;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34180__$1,inst_34178);
} else {
if((state_val_34181 === (2))){
var state_34180__$1 = state_34180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34180__$1,(4),ch);
} else {
if((state_val_34181 === (11))){
var inst_34157 = (state_34180[(8)]);
var inst_34166 = (state_34180[(2)]);
var inst_34154 = inst_34157;
var state_34180__$1 = (function (){var statearr_34199 = state_34180;
(statearr_34199[(10)] = inst_34166);

(statearr_34199[(7)] = inst_34154);

return statearr_34199;
})();
var statearr_34200_34247 = state_34180__$1;
(statearr_34200_34247[(2)] = null);

(statearr_34200_34247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (9))){
var inst_34157 = (state_34180[(8)]);
var state_34180__$1 = state_34180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34180__$1,(11),out,inst_34157);
} else {
if((state_val_34181 === (5))){
var inst_34157 = (state_34180[(8)]);
var inst_34154 = (state_34180[(7)]);
var inst_34161 = cljs.core._EQ_.call(null,inst_34157,inst_34154);
var state_34180__$1 = state_34180;
if(inst_34161){
var statearr_34202_34255 = state_34180__$1;
(statearr_34202_34255[(1)] = (8));

} else {
var statearr_34203_34256 = state_34180__$1;
(statearr_34203_34256[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (10))){
var inst_34169 = (state_34180[(2)]);
var state_34180__$1 = state_34180;
var statearr_34204_34264 = state_34180__$1;
(statearr_34204_34264[(2)] = inst_34169);

(statearr_34204_34264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34181 === (8))){
var inst_34154 = (state_34180[(7)]);
var tmp34201 = inst_34154;
var inst_34154__$1 = tmp34201;
var state_34180__$1 = (function (){var statearr_34205 = state_34180;
(statearr_34205[(7)] = inst_34154__$1);

return statearr_34205;
})();
var statearr_34206_34268 = state_34180__$1;
(statearr_34206_34268[(2)] = null);

(statearr_34206_34268[(1)] = (2));


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
});})(c__28214__auto___34219,out))
;
return ((function (switch__27677__auto__,c__28214__auto___34219,out){
return (function() {
var cljs$core$async$state_machine__27678__auto__ = null;
var cljs$core$async$state_machine__27678__auto____0 = (function (){
var statearr_34210 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34210[(0)] = cljs$core$async$state_machine__27678__auto__);

(statearr_34210[(1)] = (1));

return statearr_34210;
});
var cljs$core$async$state_machine__27678__auto____1 = (function (state_34180){
while(true){
var ret_value__27679__auto__ = (function (){try{while(true){
var result__27680__auto__ = switch__27677__auto__.call(null,state_34180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27680__auto__;
}
break;
}
}catch (e34211){if((e34211 instanceof Object)){
var ex__27681__auto__ = e34211;
var statearr_34212_34269 = state_34180;
(statearr_34212_34269[(5)] = ex__27681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34270 = state_34180;
state_34180 = G__34270;
continue;
} else {
return ret_value__27679__auto__;
}
break;
}
});
cljs$core$async$state_machine__27678__auto__ = function(state_34180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27678__auto____1.call(this,state_34180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27678__auto____0;
cljs$core$async$state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27678__auto____1;
return cljs$core$async$state_machine__27678__auto__;
})()
;})(switch__27677__auto__,c__28214__auto___34219,out))
})();
var state__28216__auto__ = (function (){var statearr_34214 = f__28215__auto__.call(null);
(statearr_34214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28214__auto___34219);

return statearr_34214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28216__auto__);
});})(c__28214__auto___34219,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args34271 = [];
var len__25835__auto___34354 = arguments.length;
var i__25836__auto___34355 = (0);
while(true){
if((i__25836__auto___34355 < len__25835__auto___34354)){
args34271.push((arguments[i__25836__auto___34355]));

var G__34356 = (i__25836__auto___34355 + (1));
i__25836__auto___34355 = G__34356;
continue;
} else {
}
break;
}

var G__34273 = args34271.length;
switch (G__34273) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34271.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28214__auto___34358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28214__auto___34358,out){
return (function (){
var f__28215__auto__ = (function (){var switch__27677__auto__ = ((function (c__28214__auto___34358,out){
return (function (state_34311){
var state_val_34312 = (state_34311[(1)]);
if((state_val_34312 === (7))){
var inst_34307 = (state_34311[(2)]);
var state_34311__$1 = state_34311;
var statearr_34313_34363 = state_34311__$1;
(statearr_34313_34363[(2)] = inst_34307);

(statearr_34313_34363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34312 === (1))){
var inst_34274 = (new Array(n));
var inst_34275 = inst_34274;
var inst_34276 = (0);
var state_34311__$1 = (function (){var statearr_34314 = state_34311;
(statearr_34314[(7)] = inst_34275);

(statearr_34314[(8)] = inst_34276);

return statearr_34314;
})();
var statearr_34315_34365 = state_34311__$1;
(statearr_34315_34365[(2)] = null);

(statearr_34315_34365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34312 === (4))){
var inst_34279 = (state_34311[(9)]);
var inst_34279__$1 = (state_34311[(2)]);
var inst_34280 = (inst_34279__$1 == null);
var inst_34281 = cljs.core.not.call(null,inst_34280);
var state_34311__$1 = (function (){var statearr_34319 = state_34311;
(statearr_34319[(9)] = inst_34279__$1);

return statearr_34319;
})();
if(inst_34281){
var statearr_34320_34369 = state_34311__$1;
(statearr_34320_34369[(1)] = (5));

} else {
var statearr_34321_34370 = state_34311__$1;
(statearr_34321_34370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34312 === (15))){
var inst_34301 = (state_34311[(2)]);
var state_34311__$1 = state_34311;
var statearr_34322_34373 = state_34311__$1;
(statearr_34322_34373[(2)] = inst_34301);

(statearr_34322_34373[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34312 === (13))){
var state_34311__$1 = state_34311;
var statearr_34323_34374 = state_34311__$1;
(statearr_34323_34374[(2)] = null);

(statearr_34323_34374[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34312 === (6))){
var inst_34276 = (state_34311[(8)]);
var inst_34297 = (inst_34276 > (0));
var state_34311__$1 = state_34311;
if(cljs.core.truth_(inst_34297)){
var statearr_34327_34376 = state_34311__$1;
(statearr_34327_34376[(1)] = (12));

} else {
var statearr_34328_34377 = state_34311__$1;
(statearr_34328_34377[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34312 === (3))){
var inst_34309 = (state_34311[(2)]);
var state_34311__$1 = state_34311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34311__$1,inst_34309);
} else {
if((state_val_34312 === (12))){
var inst_34275 = (state_34311[(7)]);
var inst_34299 = cljs.core.vec.call(null,inst_34275);
var state_34311__$1 = state_34311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34311__$1,(15),out,inst_34299);
} else {
if((state_val_34312 === (2))){
var state_34311__$1 = state_34311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34311__$1,(4),ch);
} else {
if((state_val_34312 === (11))){
var inst_34291 = (state_34311[(2)]);
var inst_34292 = (new Array(n));
var inst_34275 = inst_34292;
var inst_34276 = (0);
var state_34311__$1 = (function (){var statearr_34329 = state_34311;
(statearr_34329[(7)] = inst_34275);

(statearr_34329[(10)] = inst_34291);

(statearr_34329[(8)] = inst_34276);

return statearr_34329;
})();
var statearr_34330_34386 = state_34311__$1;
(statearr_34330_34386[(2)] = null);

(statearr_34330_34386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34312 === (9))){
var inst_34275 = (state_34311[(7)]);
var inst_34289 = cljs.core.vec.call(null,inst_34275);
var state_34311__$1 = state_34311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34311__$1,(11),out,inst_34289);
} else {
if((state_val_34312 === (5))){
var inst_34275 = (state_34311[(7)]);
var inst_34284 = (state_34311[(11)]);
var inst_34276 = (state_34311[(8)]);
var inst_34279 = (state_34311[(9)]);
var inst_34283 = (inst_34275[inst_34276] = inst_34279);
var inst_34284__$1 = (inst_34276 + (1));
var inst_34285 = (inst_34284__$1 < n);
var state_34311__$1 = (function (){var statearr_34331 = state_34311;
(statearr_34331[(11)] = inst_34284__$1);

(statearr_34331[(12)] = inst_34283);

return statearr_34331;
})();
if(cljs.core.truth_(inst_34285)){
var statearr_34332_34394 = state_34311__$1;
(statearr_34332_34394[(1)] = (8));

} else {
var statearr_34333_34395 = state_34311__$1;
(statearr_34333_34395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34312 === (14))){
var inst_34304 = (state_34311[(2)]);
var inst_34305 = cljs.core.async.close_BANG_.call(null,out);
var state_34311__$1 = (function (){var statearr_34338 = state_34311;
(statearr_34338[(13)] = inst_34304);

return statearr_34338;
})();
var statearr_34339_34396 = state_34311__$1;
(statearr_34339_34396[(2)] = inst_34305);

(statearr_34339_34396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34312 === (10))){
var inst_34295 = (state_34311[(2)]);
var state_34311__$1 = state_34311;
var statearr_34340_34401 = state_34311__$1;
(statearr_34340_34401[(2)] = inst_34295);

(statearr_34340_34401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34312 === (8))){
var inst_34275 = (state_34311[(7)]);
var inst_34284 = (state_34311[(11)]);
var tmp34337 = inst_34275;
var inst_34275__$1 = tmp34337;
var inst_34276 = inst_34284;
var state_34311__$1 = (function (){var statearr_34341 = state_34311;
(statearr_34341[(7)] = inst_34275__$1);

(statearr_34341[(8)] = inst_34276);

return statearr_34341;
})();
var statearr_34345_34402 = state_34311__$1;
(statearr_34345_34402[(2)] = null);

(statearr_34345_34402[(1)] = (2));


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
});})(c__28214__auto___34358,out))
;
return ((function (switch__27677__auto__,c__28214__auto___34358,out){
return (function() {
var cljs$core$async$state_machine__27678__auto__ = null;
var cljs$core$async$state_machine__27678__auto____0 = (function (){
var statearr_34350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34350[(0)] = cljs$core$async$state_machine__27678__auto__);

(statearr_34350[(1)] = (1));

return statearr_34350;
});
var cljs$core$async$state_machine__27678__auto____1 = (function (state_34311){
while(true){
var ret_value__27679__auto__ = (function (){try{while(true){
var result__27680__auto__ = switch__27677__auto__.call(null,state_34311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27680__auto__;
}
break;
}
}catch (e34351){if((e34351 instanceof Object)){
var ex__27681__auto__ = e34351;
var statearr_34352_34410 = state_34311;
(statearr_34352_34410[(5)] = ex__27681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34411 = state_34311;
state_34311 = G__34411;
continue;
} else {
return ret_value__27679__auto__;
}
break;
}
});
cljs$core$async$state_machine__27678__auto__ = function(state_34311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27678__auto____1.call(this,state_34311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27678__auto____0;
cljs$core$async$state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27678__auto____1;
return cljs$core$async$state_machine__27678__auto__;
})()
;})(switch__27677__auto__,c__28214__auto___34358,out))
})();
var state__28216__auto__ = (function (){var statearr_34353 = f__28215__auto__.call(null);
(statearr_34353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28214__auto___34358);

return statearr_34353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28216__auto__);
});})(c__28214__auto___34358,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args34422 = [];
var len__25835__auto___34563 = arguments.length;
var i__25836__auto___34567 = (0);
while(true){
if((i__25836__auto___34567 < len__25835__auto___34563)){
args34422.push((arguments[i__25836__auto___34567]));

var G__34569 = (i__25836__auto___34567 + (1));
i__25836__auto___34567 = G__34569;
continue;
} else {
}
break;
}

var G__34426 = args34422.length;
switch (G__34426) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34422.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28214__auto___34587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28214__auto___34587,out){
return (function (){
var f__28215__auto__ = (function (){var switch__27677__auto__ = ((function (c__28214__auto___34587,out){
return (function (state_34468){
var state_val_34469 = (state_34468[(1)]);
if((state_val_34469 === (7))){
var inst_34464 = (state_34468[(2)]);
var state_34468__$1 = state_34468;
var statearr_34470_34588 = state_34468__$1;
(statearr_34470_34588[(2)] = inst_34464);

(statearr_34470_34588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (1))){
var inst_34427 = [];
var inst_34428 = inst_34427;
var inst_34429 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34468__$1 = (function (){var statearr_34471 = state_34468;
(statearr_34471[(7)] = inst_34428);

(statearr_34471[(8)] = inst_34429);

return statearr_34471;
})();
var statearr_34472_34589 = state_34468__$1;
(statearr_34472_34589[(2)] = null);

(statearr_34472_34589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (4))){
var inst_34432 = (state_34468[(9)]);
var inst_34432__$1 = (state_34468[(2)]);
var inst_34433 = (inst_34432__$1 == null);
var inst_34434 = cljs.core.not.call(null,inst_34433);
var state_34468__$1 = (function (){var statearr_34475 = state_34468;
(statearr_34475[(9)] = inst_34432__$1);

return statearr_34475;
})();
if(inst_34434){
var statearr_34476_34596 = state_34468__$1;
(statearr_34476_34596[(1)] = (5));

} else {
var statearr_34477_34597 = state_34468__$1;
(statearr_34477_34597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (15))){
var inst_34458 = (state_34468[(2)]);
var state_34468__$1 = state_34468;
var statearr_34478_34598 = state_34468__$1;
(statearr_34478_34598[(2)] = inst_34458);

(statearr_34478_34598[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (13))){
var state_34468__$1 = state_34468;
var statearr_34479_34599 = state_34468__$1;
(statearr_34479_34599[(2)] = null);

(statearr_34479_34599[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (6))){
var inst_34428 = (state_34468[(7)]);
var inst_34453 = inst_34428.length;
var inst_34454 = (inst_34453 > (0));
var state_34468__$1 = state_34468;
if(cljs.core.truth_(inst_34454)){
var statearr_34485_34600 = state_34468__$1;
(statearr_34485_34600[(1)] = (12));

} else {
var statearr_34486_34601 = state_34468__$1;
(statearr_34486_34601[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (3))){
var inst_34466 = (state_34468[(2)]);
var state_34468__$1 = state_34468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34468__$1,inst_34466);
} else {
if((state_val_34469 === (12))){
var inst_34428 = (state_34468[(7)]);
var inst_34456 = cljs.core.vec.call(null,inst_34428);
var state_34468__$1 = state_34468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34468__$1,(15),out,inst_34456);
} else {
if((state_val_34469 === (2))){
var state_34468__$1 = state_34468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34468__$1,(4),ch);
} else {
if((state_val_34469 === (11))){
var inst_34432 = (state_34468[(9)]);
var inst_34436 = (state_34468[(10)]);
var inst_34446 = (state_34468[(2)]);
var inst_34447 = [];
var inst_34448 = inst_34447.push(inst_34432);
var inst_34428 = inst_34447;
var inst_34429 = inst_34436;
var state_34468__$1 = (function (){var statearr_34491 = state_34468;
(statearr_34491[(7)] = inst_34428);

(statearr_34491[(8)] = inst_34429);

(statearr_34491[(11)] = inst_34448);

(statearr_34491[(12)] = inst_34446);

return statearr_34491;
})();
var statearr_34492_34626 = state_34468__$1;
(statearr_34492_34626[(2)] = null);

(statearr_34492_34626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (9))){
var inst_34428 = (state_34468[(7)]);
var inst_34444 = cljs.core.vec.call(null,inst_34428);
var state_34468__$1 = state_34468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34468__$1,(11),out,inst_34444);
} else {
if((state_val_34469 === (5))){
var inst_34432 = (state_34468[(9)]);
var inst_34436 = (state_34468[(10)]);
var inst_34429 = (state_34468[(8)]);
var inst_34436__$1 = f.call(null,inst_34432);
var inst_34437 = cljs.core._EQ_.call(null,inst_34436__$1,inst_34429);
var inst_34438 = cljs.core.keyword_identical_QMARK_.call(null,inst_34429,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34439 = (inst_34437) || (inst_34438);
var state_34468__$1 = (function (){var statearr_34493 = state_34468;
(statearr_34493[(10)] = inst_34436__$1);

return statearr_34493;
})();
if(cljs.core.truth_(inst_34439)){
var statearr_34494_34636 = state_34468__$1;
(statearr_34494_34636[(1)] = (8));

} else {
var statearr_34495_34637 = state_34468__$1;
(statearr_34495_34637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (14))){
var inst_34461 = (state_34468[(2)]);
var inst_34462 = cljs.core.async.close_BANG_.call(null,out);
var state_34468__$1 = (function (){var statearr_34497 = state_34468;
(statearr_34497[(13)] = inst_34461);

return statearr_34497;
})();
var statearr_34499_34638 = state_34468__$1;
(statearr_34499_34638[(2)] = inst_34462);

(statearr_34499_34638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (10))){
var inst_34451 = (state_34468[(2)]);
var state_34468__$1 = state_34468;
var statearr_34500_34639 = state_34468__$1;
(statearr_34500_34639[(2)] = inst_34451);

(statearr_34500_34639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34469 === (8))){
var inst_34432 = (state_34468[(9)]);
var inst_34428 = (state_34468[(7)]);
var inst_34436 = (state_34468[(10)]);
var inst_34441 = inst_34428.push(inst_34432);
var tmp34496 = inst_34428;
var inst_34428__$1 = tmp34496;
var inst_34429 = inst_34436;
var state_34468__$1 = (function (){var statearr_34501 = state_34468;
(statearr_34501[(14)] = inst_34441);

(statearr_34501[(7)] = inst_34428__$1);

(statearr_34501[(8)] = inst_34429);

return statearr_34501;
})();
var statearr_34502_34640 = state_34468__$1;
(statearr_34502_34640[(2)] = null);

(statearr_34502_34640[(1)] = (2));


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
});})(c__28214__auto___34587,out))
;
return ((function (switch__27677__auto__,c__28214__auto___34587,out){
return (function() {
var cljs$core$async$state_machine__27678__auto__ = null;
var cljs$core$async$state_machine__27678__auto____0 = (function (){
var statearr_34533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34533[(0)] = cljs$core$async$state_machine__27678__auto__);

(statearr_34533[(1)] = (1));

return statearr_34533;
});
var cljs$core$async$state_machine__27678__auto____1 = (function (state_34468){
while(true){
var ret_value__27679__auto__ = (function (){try{while(true){
var result__27680__auto__ = switch__27677__auto__.call(null,state_34468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27680__auto__;
}
break;
}
}catch (e34553){if((e34553 instanceof Object)){
var ex__27681__auto__ = e34553;
var statearr_34557_34645 = state_34468;
(statearr_34557_34645[(5)] = ex__27681__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34649 = state_34468;
state_34468 = G__34649;
continue;
} else {
return ret_value__27679__auto__;
}
break;
}
});
cljs$core$async$state_machine__27678__auto__ = function(state_34468){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27678__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27678__auto____1.call(this,state_34468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27678__auto____0;
cljs$core$async$state_machine__27678__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27678__auto____1;
return cljs$core$async$state_machine__27678__auto__;
})()
;})(switch__27677__auto__,c__28214__auto___34587,out))
})();
var state__28216__auto__ = (function (){var statearr_34558 = f__28215__auto__.call(null);
(statearr_34558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28214__auto___34587);

return statearr_34558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28216__auto__);
});})(c__28214__auto___34587,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1473645388611