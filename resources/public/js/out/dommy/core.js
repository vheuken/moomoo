// Compiled by ClojureScript 1.9.229 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy$core$selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__24760__auto__ = elem.textContent;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var args27870 = [];
var len__25835__auto___27877 = arguments.length;
var i__25836__auto___27878 = (0);
while(true){
if((i__25836__auto___27878 < len__25835__auto___27877)){
args27870.push((arguments[i__25836__auto___27878]));

var G__27879 = (i__25836__auto___27878 + (1));
i__25836__auto___27878 = G__27879;
continue;
} else {
}
break;
}

var G__27876 = args27870.length;
switch (G__27876) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27870.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto__ = elem.classList;
if(cljs.core.truth_(temp__4655__auto__)){
var class_list = temp__4655__auto__;
return class_list.contains(c__$1);
} else {
var temp__4657__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__4657__auto__)){
var class_name = temp__4657__auto__;
var temp__4657__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__4657__auto____$1)){
var i = temp__4657__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var args27905 = [];
var len__25835__auto___27915 = arguments.length;
var i__25836__auto___27916 = (0);
while(true){
if((i__25836__auto___27916 < len__25835__auto___27915)){
args27905.push((arguments[i__25836__auto___27916]));

var G__27917 = (i__25836__auto___27916 + (1));
i__25836__auto___27916 = G__27917;
continue;
} else {
}
break;
}

var G__27912 = args27905.length;
switch (G__27912) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27905.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var args27924 = [];
var len__25835__auto___27931 = arguments.length;
var i__25836__auto___27932 = (0);
while(true){
if((i__25836__auto___27932 < len__25835__auto___27931)){
args27924.push((arguments[i__25836__auto___27932]));

var G__27935 = (i__25836__auto___27932 + (1));
i__25836__auto___27932 = G__27935;
continue;
} else {
}
break;
}

var G__27929 = args27924.length;
switch (G__27929) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27924.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__27923_SHARP_){
return !((p1__27923_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__25842__auto__ = [];
var len__25835__auto___27969 = arguments.length;
var i__25836__auto___27970 = (0);
while(true){
if((i__25836__auto___27970 < len__25835__auto___27969)){
args__25842__auto__.push((arguments[i__25836__auto___27970]));

var G__27972 = (i__25836__auto___27970 + (1));
i__25836__auto___27970 = G__27972;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__27956_27975 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__27957_27976 = null;
var count__27958_27977 = (0);
var i__27959_27978 = (0);
while(true){
if((i__27959_27978 < count__27958_27977)){
var vec__27961_27980 = cljs.core._nth.call(null,chunk__27957_27976,i__27959_27978);
var k_27981 = cljs.core.nth.call(null,vec__27961_27980,(0),null);
var v_27982 = cljs.core.nth.call(null,vec__27961_27980,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_27981),v_27982);

var G__27985 = seq__27956_27975;
var G__27986 = chunk__27957_27976;
var G__27987 = count__27958_27977;
var G__27988 = (i__27959_27978 + (1));
seq__27956_27975 = G__27985;
chunk__27957_27976 = G__27986;
count__27958_27977 = G__27987;
i__27959_27978 = G__27988;
continue;
} else {
var temp__4657__auto___27989 = cljs.core.seq.call(null,seq__27956_27975);
if(temp__4657__auto___27989){
var seq__27956_27991__$1 = temp__4657__auto___27989;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27956_27991__$1)){
var c__25571__auto___27994 = cljs.core.chunk_first.call(null,seq__27956_27991__$1);
var G__27995 = cljs.core.chunk_rest.call(null,seq__27956_27991__$1);
var G__27996 = c__25571__auto___27994;
var G__27997 = cljs.core.count.call(null,c__25571__auto___27994);
var G__27998 = (0);
seq__27956_27975 = G__27995;
chunk__27957_27976 = G__27996;
count__27958_27977 = G__27997;
i__27959_27978 = G__27998;
continue;
} else {
var vec__27964_27999 = cljs.core.first.call(null,seq__27956_27991__$1);
var k_28000 = cljs.core.nth.call(null,vec__27964_27999,(0),null);
var v_28001 = cljs.core.nth.call(null,vec__27964_27999,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_28000),v_28001);

var G__28002 = cljs.core.next.call(null,seq__27956_27991__$1);
var G__28003 = null;
var G__28004 = (0);
var G__28005 = (0);
seq__27956_27975 = G__28002;
chunk__27957_27976 = G__28003;
count__27958_27977 = G__28004;
i__27959_27978 = G__28005;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq27949){
var G__27950 = cljs.core.first.call(null,seq27949);
var seq27949__$1 = cljs.core.next.call(null,seq27949);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27950,seq27949__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__25842__auto__ = [];
var len__25835__auto___28020 = arguments.length;
var i__25836__auto___28021 = (0);
while(true){
if((i__25836__auto___28021 < len__25835__auto___28020)){
args__25842__auto__.push((arguments[i__25836__auto___28021]));

var G__28023 = (i__25836__auto___28021 + (1));
i__25836__auto___28021 = G__28023;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__28016_28029 = cljs.core.seq.call(null,keywords);
var chunk__28017_28030 = null;
var count__28018_28031 = (0);
var i__28019_28032 = (0);
while(true){
if((i__28019_28032 < count__28018_28031)){
var kw_28035 = cljs.core._nth.call(null,chunk__28017_28030,i__28019_28032);
style.removeProperty(dommy.utils.as_str.call(null,kw_28035));

var G__28038 = seq__28016_28029;
var G__28039 = chunk__28017_28030;
var G__28040 = count__28018_28031;
var G__28041 = (i__28019_28032 + (1));
seq__28016_28029 = G__28038;
chunk__28017_28030 = G__28039;
count__28018_28031 = G__28040;
i__28019_28032 = G__28041;
continue;
} else {
var temp__4657__auto___28042 = cljs.core.seq.call(null,seq__28016_28029);
if(temp__4657__auto___28042){
var seq__28016_28044__$1 = temp__4657__auto___28042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28016_28044__$1)){
var c__25571__auto___28045 = cljs.core.chunk_first.call(null,seq__28016_28044__$1);
var G__28048 = cljs.core.chunk_rest.call(null,seq__28016_28044__$1);
var G__28049 = c__25571__auto___28045;
var G__28050 = cljs.core.count.call(null,c__25571__auto___28045);
var G__28051 = (0);
seq__28016_28029 = G__28048;
chunk__28017_28030 = G__28049;
count__28018_28031 = G__28050;
i__28019_28032 = G__28051;
continue;
} else {
var kw_28055 = cljs.core.first.call(null,seq__28016_28044__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_28055));

var G__28057 = cljs.core.next.call(null,seq__28016_28044__$1);
var G__28058 = null;
var G__28059 = (0);
var G__28060 = (0);
seq__28016_28029 = G__28057;
chunk__28017_28030 = G__28058;
count__28018_28031 = G__28059;
i__28019_28032 = G__28060;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq28009){
var G__28010 = cljs.core.first.call(null,seq28009);
var seq28009__$1 = cljs.core.next.call(null,seq28009);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28010,seq28009__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__25842__auto__ = [];
var len__25835__auto___28082 = arguments.length;
var i__25836__auto___28083 = (0);
while(true){
if((i__25836__auto___28083 < len__25835__auto___28082)){
args__25842__auto__.push((arguments[i__25836__auto___28083]));

var G__28086 = (i__25836__auto___28083 + (1));
i__25836__auto___28083 = G__28086;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__28070_28090 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__28071_28091 = null;
var count__28072_28092 = (0);
var i__28073_28093 = (0);
while(true){
if((i__28073_28093 < count__28072_28092)){
var vec__28074_28095 = cljs.core._nth.call(null,chunk__28071_28091,i__28073_28093);
var k_28096 = cljs.core.nth.call(null,vec__28074_28095,(0),null);
var v_28097 = cljs.core.nth.call(null,vec__28074_28095,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_28096,[cljs.core.str(v_28097),cljs.core.str("px")].join(''));

var G__28100 = seq__28070_28090;
var G__28101 = chunk__28071_28091;
var G__28102 = count__28072_28092;
var G__28103 = (i__28073_28093 + (1));
seq__28070_28090 = G__28100;
chunk__28071_28091 = G__28101;
count__28072_28092 = G__28102;
i__28073_28093 = G__28103;
continue;
} else {
var temp__4657__auto___28105 = cljs.core.seq.call(null,seq__28070_28090);
if(temp__4657__auto___28105){
var seq__28070_28106__$1 = temp__4657__auto___28105;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28070_28106__$1)){
var c__25571__auto___28107 = cljs.core.chunk_first.call(null,seq__28070_28106__$1);
var G__28108 = cljs.core.chunk_rest.call(null,seq__28070_28106__$1);
var G__28109 = c__25571__auto___28107;
var G__28110 = cljs.core.count.call(null,c__25571__auto___28107);
var G__28111 = (0);
seq__28070_28090 = G__28108;
chunk__28071_28091 = G__28109;
count__28072_28092 = G__28110;
i__28073_28093 = G__28111;
continue;
} else {
var vec__28077_28116 = cljs.core.first.call(null,seq__28070_28106__$1);
var k_28117 = cljs.core.nth.call(null,vec__28077_28116,(0),null);
var v_28118 = cljs.core.nth.call(null,vec__28077_28116,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_28117,[cljs.core.str(v_28118),cljs.core.str("px")].join(''));

var G__28120 = cljs.core.next.call(null,seq__28070_28106__$1);
var G__28121 = null;
var G__28122 = (0);
var G__28123 = (0);
seq__28070_28090 = G__28120;
chunk__28071_28091 = G__28121;
count__28072_28092 = G__28122;
i__28073_28093 = G__28123;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq28065){
var G__28066 = cljs.core.first.call(null,seq28065);
var seq28065__$1 = cljs.core.next.call(null,seq28065);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28066,seq28065__$1);
});

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var args28127 = [];
var len__25835__auto___28159 = arguments.length;
var i__25836__auto___28160 = (0);
while(true){
if((i__25836__auto___28160 < len__25835__auto___28159)){
args28127.push((arguments[i__25836__auto___28160]));

var G__28163 = (i__25836__auto___28160 + (1));
i__25836__auto___28160 = G__28163;
continue;
} else {
}
break;
}

var G__28138 = args28127.length;
switch (G__28138) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__25854__auto__ = (new cljs.core.IndexedSeq(args28127.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25854__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__28141 = elem;
(G__28141[k__$1] = v);

return G__28141;
} else {
var G__28142 = elem;
G__28142.setAttribute(k__$1,v);

return G__28142;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__28144_28173 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__28145_28174 = null;
var count__28146_28175 = (0);
var i__28147_28176 = (0);
while(true){
if((i__28147_28176 < count__28146_28175)){
var vec__28148_28178 = cljs.core._nth.call(null,chunk__28145_28174,i__28147_28176);
var k_28179__$1 = cljs.core.nth.call(null,vec__28148_28178,(0),null);
var v_28180__$1 = cljs.core.nth.call(null,vec__28148_28178,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_28179__$1,v_28180__$1);

var G__28185 = seq__28144_28173;
var G__28186 = chunk__28145_28174;
var G__28187 = count__28146_28175;
var G__28188 = (i__28147_28176 + (1));
seq__28144_28173 = G__28185;
chunk__28145_28174 = G__28186;
count__28146_28175 = G__28187;
i__28147_28176 = G__28188;
continue;
} else {
var temp__4657__auto___28195 = cljs.core.seq.call(null,seq__28144_28173);
if(temp__4657__auto___28195){
var seq__28144_28197__$1 = temp__4657__auto___28195;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28144_28197__$1)){
var c__25571__auto___28200 = cljs.core.chunk_first.call(null,seq__28144_28197__$1);
var G__28201 = cljs.core.chunk_rest.call(null,seq__28144_28197__$1);
var G__28202 = c__25571__auto___28200;
var G__28203 = cljs.core.count.call(null,c__25571__auto___28200);
var G__28204 = (0);
seq__28144_28173 = G__28201;
chunk__28145_28174 = G__28202;
count__28146_28175 = G__28203;
i__28147_28176 = G__28204;
continue;
} else {
var vec__28153_28209 = cljs.core.first.call(null,seq__28144_28197__$1);
var k_28210__$1 = cljs.core.nth.call(null,vec__28153_28209,(0),null);
var v_28211__$1 = cljs.core.nth.call(null,vec__28153_28209,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_28210__$1,v_28211__$1);

var G__28219 = cljs.core.next.call(null,seq__28144_28197__$1);
var G__28220 = null;
var G__28221 = (0);
var G__28222 = (0);
seq__28144_28173 = G__28219;
chunk__28145_28174 = G__28220;
count__28146_28175 = G__28221;
i__28147_28176 = G__28222;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq28129){
var G__28131 = cljs.core.first.call(null,seq28129);
var seq28129__$1 = cljs.core.next.call(null,seq28129);
var G__28132 = cljs.core.first.call(null,seq28129__$1);
var seq28129__$2 = cljs.core.next.call(null,seq28129__$1);
var G__28133 = cljs.core.first.call(null,seq28129__$2);
var seq28129__$3 = cljs.core.next.call(null,seq28129__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28131,G__28132,G__28133,seq28129__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var args28257 = [];
var len__25835__auto___28291 = arguments.length;
var i__25836__auto___28292 = (0);
while(true){
if((i__25836__auto___28292 < len__25835__auto___28291)){
args28257.push((arguments[i__25836__auto___28292]));

var G__28295 = (i__25836__auto___28292 + (1));
i__25836__auto___28292 = G__28295;
continue;
} else {
}
break;
}

var G__28270 = args28257.length;
switch (G__28270) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25854__auto__ = (new cljs.core.IndexedSeq(args28257.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25854__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_28306__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_28306__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_28306__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__28278_28312 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__28279_28313 = null;
var count__28280_28314 = (0);
var i__28281_28315 = (0);
while(true){
if((i__28281_28315 < count__28280_28314)){
var k_28322__$1 = cljs.core._nth.call(null,chunk__28279_28313,i__28281_28315);
dommy.core.remove_attr_BANG_.call(null,elem,k_28322__$1);

var G__28327 = seq__28278_28312;
var G__28328 = chunk__28279_28313;
var G__28329 = count__28280_28314;
var G__28330 = (i__28281_28315 + (1));
seq__28278_28312 = G__28327;
chunk__28279_28313 = G__28328;
count__28280_28314 = G__28329;
i__28281_28315 = G__28330;
continue;
} else {
var temp__4657__auto___28332 = cljs.core.seq.call(null,seq__28278_28312);
if(temp__4657__auto___28332){
var seq__28278_28335__$1 = temp__4657__auto___28332;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28278_28335__$1)){
var c__25571__auto___28338 = cljs.core.chunk_first.call(null,seq__28278_28335__$1);
var G__28342 = cljs.core.chunk_rest.call(null,seq__28278_28335__$1);
var G__28343 = c__25571__auto___28338;
var G__28344 = cljs.core.count.call(null,c__25571__auto___28338);
var G__28345 = (0);
seq__28278_28312 = G__28342;
chunk__28279_28313 = G__28343;
count__28280_28314 = G__28344;
i__28281_28315 = G__28345;
continue;
} else {
var k_28348__$1 = cljs.core.first.call(null,seq__28278_28335__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_28348__$1);

var G__28349 = cljs.core.next.call(null,seq__28278_28335__$1);
var G__28350 = null;
var G__28351 = (0);
var G__28352 = (0);
seq__28278_28312 = G__28349;
chunk__28279_28313 = G__28350;
count__28280_28314 = G__28351;
i__28281_28315 = G__28352;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq28258){
var G__28259 = cljs.core.first.call(null,seq28258);
var seq28258__$1 = cljs.core.next.call(null,seq28258);
var G__28260 = cljs.core.first.call(null,seq28258__$1);
var seq28258__$2 = cljs.core.next.call(null,seq28258__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28259,G__28260,seq28258__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var args28365 = [];
var len__25835__auto___28384 = arguments.length;
var i__25836__auto___28386 = (0);
while(true){
if((i__25836__auto___28386 < len__25835__auto___28384)){
args28365.push((arguments[i__25836__auto___28386]));

var G__28388 = (i__25836__auto___28386 + (1));
i__25836__auto___28386 = G__28388;
continue;
} else {
}
break;
}

var G__28374 = args28365.length;
switch (G__28374) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28365.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var args28407 = [];
var len__25835__auto___28474 = arguments.length;
var i__25836__auto___28475 = (0);
while(true){
if((i__25836__auto___28475 < len__25835__auto___28474)){
args28407.push((arguments[i__25836__auto___28475]));

var G__28480 = (i__25836__auto___28475 + (1));
i__25836__auto___28475 = G__28480;
continue;
} else {
}
break;
}

var G__28424 = args28407.length;
switch (G__28424) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25854__auto__ = (new cljs.core.IndexedSeq(args28407.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25854__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__4655__auto___28493 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___28493)){
var class_list_28495 = temp__4655__auto___28493;
var seq__28435_28496 = cljs.core.seq.call(null,classes__$1);
var chunk__28436_28497 = null;
var count__28437_28498 = (0);
var i__28438_28499 = (0);
while(true){
if((i__28438_28499 < count__28437_28498)){
var c_28502 = cljs.core._nth.call(null,chunk__28436_28497,i__28438_28499);
class_list_28495.add(c_28502);

var G__28503 = seq__28435_28496;
var G__28504 = chunk__28436_28497;
var G__28505 = count__28437_28498;
var G__28506 = (i__28438_28499 + (1));
seq__28435_28496 = G__28503;
chunk__28436_28497 = G__28504;
count__28437_28498 = G__28505;
i__28438_28499 = G__28506;
continue;
} else {
var temp__4657__auto___28510 = cljs.core.seq.call(null,seq__28435_28496);
if(temp__4657__auto___28510){
var seq__28435_28514__$1 = temp__4657__auto___28510;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28435_28514__$1)){
var c__25571__auto___28515 = cljs.core.chunk_first.call(null,seq__28435_28514__$1);
var G__28518 = cljs.core.chunk_rest.call(null,seq__28435_28514__$1);
var G__28519 = c__25571__auto___28515;
var G__28520 = cljs.core.count.call(null,c__25571__auto___28515);
var G__28521 = (0);
seq__28435_28496 = G__28518;
chunk__28436_28497 = G__28519;
count__28437_28498 = G__28520;
i__28438_28499 = G__28521;
continue;
} else {
var c_28525 = cljs.core.first.call(null,seq__28435_28514__$1);
class_list_28495.add(c_28525);

var G__28526 = cljs.core.next.call(null,seq__28435_28514__$1);
var G__28527 = null;
var G__28528 = (0);
var G__28529 = (0);
seq__28435_28496 = G__28526;
chunk__28436_28497 = G__28527;
count__28437_28498 = G__28528;
i__28438_28499 = G__28529;
continue;
}
} else {
}
}
break;
}
} else {
var seq__28441_28532 = cljs.core.seq.call(null,classes__$1);
var chunk__28442_28533 = null;
var count__28443_28534 = (0);
var i__28444_28535 = (0);
while(true){
if((i__28444_28535 < count__28443_28534)){
var c_28539 = cljs.core._nth.call(null,chunk__28442_28533,i__28444_28535);
var class_name_28540 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_28540,c_28539))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_28540 === ""))?c_28539:[cljs.core.str(class_name_28540),cljs.core.str(" "),cljs.core.str(c_28539)].join('')));
}

var G__28542 = seq__28441_28532;
var G__28543 = chunk__28442_28533;
var G__28544 = count__28443_28534;
var G__28545 = (i__28444_28535 + (1));
seq__28441_28532 = G__28542;
chunk__28442_28533 = G__28543;
count__28443_28534 = G__28544;
i__28444_28535 = G__28545;
continue;
} else {
var temp__4657__auto___28548 = cljs.core.seq.call(null,seq__28441_28532);
if(temp__4657__auto___28548){
var seq__28441_28550__$1 = temp__4657__auto___28548;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28441_28550__$1)){
var c__25571__auto___28552 = cljs.core.chunk_first.call(null,seq__28441_28550__$1);
var G__28557 = cljs.core.chunk_rest.call(null,seq__28441_28550__$1);
var G__28558 = c__25571__auto___28552;
var G__28559 = cljs.core.count.call(null,c__25571__auto___28552);
var G__28560 = (0);
seq__28441_28532 = G__28557;
chunk__28442_28533 = G__28558;
count__28443_28534 = G__28559;
i__28444_28535 = G__28560;
continue;
} else {
var c_28564 = cljs.core.first.call(null,seq__28441_28550__$1);
var class_name_28565 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_28565,c_28564))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_28565 === ""))?c_28564:[cljs.core.str(class_name_28565),cljs.core.str(" "),cljs.core.str(c_28564)].join('')));
}

var G__28570 = cljs.core.next.call(null,seq__28441_28550__$1);
var G__28571 = null;
var G__28572 = (0);
var G__28573 = (0);
seq__28441_28532 = G__28570;
chunk__28442_28533 = G__28571;
count__28443_28534 = G__28572;
i__28444_28535 = G__28573;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__28459_28578 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__28460_28579 = null;
var count__28461_28580 = (0);
var i__28462_28581 = (0);
while(true){
if((i__28462_28581 < count__28461_28580)){
var c_28586 = cljs.core._nth.call(null,chunk__28460_28579,i__28462_28581);
dommy.core.add_class_BANG_.call(null,elem,c_28586);

var G__28589 = seq__28459_28578;
var G__28590 = chunk__28460_28579;
var G__28591 = count__28461_28580;
var G__28592 = (i__28462_28581 + (1));
seq__28459_28578 = G__28589;
chunk__28460_28579 = G__28590;
count__28461_28580 = G__28591;
i__28462_28581 = G__28592;
continue;
} else {
var temp__4657__auto___28595 = cljs.core.seq.call(null,seq__28459_28578);
if(temp__4657__auto___28595){
var seq__28459_28596__$1 = temp__4657__auto___28595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28459_28596__$1)){
var c__25571__auto___28600 = cljs.core.chunk_first.call(null,seq__28459_28596__$1);
var G__28602 = cljs.core.chunk_rest.call(null,seq__28459_28596__$1);
var G__28603 = c__25571__auto___28600;
var G__28604 = cljs.core.count.call(null,c__25571__auto___28600);
var G__28605 = (0);
seq__28459_28578 = G__28602;
chunk__28460_28579 = G__28603;
count__28461_28580 = G__28604;
i__28462_28581 = G__28605;
continue;
} else {
var c_28610 = cljs.core.first.call(null,seq__28459_28596__$1);
dommy.core.add_class_BANG_.call(null,elem,c_28610);

var G__28611 = cljs.core.next.call(null,seq__28459_28596__$1);
var G__28612 = null;
var G__28613 = (0);
var G__28614 = (0);
seq__28459_28578 = G__28611;
chunk__28460_28579 = G__28612;
count__28461_28580 = G__28613;
i__28462_28581 = G__28614;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq28414){
var G__28418 = cljs.core.first.call(null,seq28414);
var seq28414__$1 = cljs.core.next.call(null,seq28414);
var G__28420 = cljs.core.first.call(null,seq28414__$1);
var seq28414__$2 = cljs.core.next.call(null,seq28414__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28418,G__28420,seq28414__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var args28625 = [];
var len__25835__auto___28651 = arguments.length;
var i__25836__auto___28653 = (0);
while(true){
if((i__25836__auto___28653 < len__25835__auto___28651)){
args28625.push((arguments[i__25836__auto___28653]));

var G__28655 = (i__25836__auto___28653 + (1));
i__25836__auto___28653 = G__28655;
continue;
} else {
}
break;
}

var G__28635 = args28625.length;
switch (G__28635) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25854__auto__ = (new cljs.core.IndexedSeq(args28625.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25854__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___28664 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___28664)){
var class_list_28665 = temp__4655__auto___28664;
class_list_28665.remove(c__$1);
} else {
var class_name_28669 = dommy.core.class$.call(null,elem);
var new_class_name_28670 = dommy.utils.remove_class_str.call(null,class_name_28669,c__$1);
if((class_name_28669 === new_class_name_28670)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_28670);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__28642 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__28643 = null;
var count__28644 = (0);
var i__28645 = (0);
while(true){
if((i__28645 < count__28644)){
var c = cljs.core._nth.call(null,chunk__28643,i__28645);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__28681 = seq__28642;
var G__28682 = chunk__28643;
var G__28683 = count__28644;
var G__28684 = (i__28645 + (1));
seq__28642 = G__28681;
chunk__28643 = G__28682;
count__28644 = G__28683;
i__28645 = G__28684;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28642);
if(temp__4657__auto__){
var seq__28642__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28642__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__28642__$1);
var G__28686 = cljs.core.chunk_rest.call(null,seq__28642__$1);
var G__28687 = c__25571__auto__;
var G__28688 = cljs.core.count.call(null,c__25571__auto__);
var G__28689 = (0);
seq__28642 = G__28686;
chunk__28643 = G__28687;
count__28644 = G__28688;
i__28645 = G__28689;
continue;
} else {
var c = cljs.core.first.call(null,seq__28642__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__28698 = cljs.core.next.call(null,seq__28642__$1);
var G__28699 = null;
var G__28700 = (0);
var G__28701 = (0);
seq__28642 = G__28698;
chunk__28643 = G__28699;
count__28644 = G__28700;
i__28645 = G__28701;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq28626){
var G__28627 = cljs.core.first.call(null,seq28626);
var seq28626__$1 = cljs.core.next.call(null,seq28626);
var G__28628 = cljs.core.first.call(null,seq28626__$1);
var seq28626__$2 = cljs.core.next.call(null,seq28626__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28627,G__28628,seq28626__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var args28714 = [];
var len__25835__auto___28729 = arguments.length;
var i__25836__auto___28730 = (0);
while(true){
if((i__25836__auto___28730 < len__25835__auto___28729)){
args28714.push((arguments[i__25836__auto___28730]));

var G__28733 = (i__25836__auto___28730 + (1));
i__25836__auto___28730 = G__28733;
continue;
} else {
}
break;
}

var G__28725 = args28714.length;
switch (G__28725) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28714.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__4655__auto___28745 = elem.classList;
if(cljs.core.truth_(temp__4655__auto___28745)){
var class_list_28748 = temp__4655__auto___28745;
class_list_28748.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var args28763 = [];
var len__25835__auto___28793 = arguments.length;
var i__25836__auto___28794 = (0);
while(true){
if((i__25836__auto___28794 < len__25835__auto___28793)){
args28763.push((arguments[i__25836__auto___28794]));

var G__28801 = (i__25836__auto___28794 + (1));
i__25836__auto___28794 = G__28801;
continue;
} else {
}
break;
}

var G__28779 = args28763.length;
switch (G__28779) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28763.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var args28864 = [];
var len__25835__auto___28892 = arguments.length;
var i__25836__auto___28895 = (0);
while(true){
if((i__25836__auto___28895 < len__25835__auto___28892)){
args28864.push((arguments[i__25836__auto___28895]));

var G__28902 = (i__25836__auto___28895 + (1));
i__25836__auto___28895 = G__28902;
continue;
} else {
}
break;
}

var G__28878 = args28864.length;
switch (G__28878) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28864.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var args28912 = [];
var len__25835__auto___28930 = arguments.length;
var i__25836__auto___28931 = (0);
while(true){
if((i__25836__auto___28931 < len__25835__auto___28930)){
args28912.push((arguments[i__25836__auto___28931]));

var G__28932 = (i__25836__auto___28931 + (1));
i__25836__auto___28931 = G__28932;
continue;
} else {
}
break;
}

var G__28921 = args28912.length;
switch (G__28921) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25854__auto__ = (new cljs.core.IndexedSeq(args28912.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25854__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__28922 = parent;
G__28922.appendChild(child);

return G__28922;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__28923_28940 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__28924_28941 = null;
var count__28925_28942 = (0);
var i__28926_28943 = (0);
while(true){
if((i__28926_28943 < count__28925_28942)){
var c_28948 = cljs.core._nth.call(null,chunk__28924_28941,i__28926_28943);
dommy.core.append_BANG_.call(null,parent,c_28948);

var G__28951 = seq__28923_28940;
var G__28952 = chunk__28924_28941;
var G__28953 = count__28925_28942;
var G__28954 = (i__28926_28943 + (1));
seq__28923_28940 = G__28951;
chunk__28924_28941 = G__28952;
count__28925_28942 = G__28953;
i__28926_28943 = G__28954;
continue;
} else {
var temp__4657__auto___28956 = cljs.core.seq.call(null,seq__28923_28940);
if(temp__4657__auto___28956){
var seq__28923_28958__$1 = temp__4657__auto___28956;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28923_28958__$1)){
var c__25571__auto___28962 = cljs.core.chunk_first.call(null,seq__28923_28958__$1);
var G__28964 = cljs.core.chunk_rest.call(null,seq__28923_28958__$1);
var G__28965 = c__25571__auto___28962;
var G__28966 = cljs.core.count.call(null,c__25571__auto___28962);
var G__28967 = (0);
seq__28923_28940 = G__28964;
chunk__28924_28941 = G__28965;
count__28925_28942 = G__28966;
i__28926_28943 = G__28967;
continue;
} else {
var c_28969 = cljs.core.first.call(null,seq__28923_28958__$1);
dommy.core.append_BANG_.call(null,parent,c_28969);

var G__28970 = cljs.core.next.call(null,seq__28923_28958__$1);
var G__28971 = null;
var G__28972 = (0);
var G__28973 = (0);
seq__28923_28940 = G__28970;
chunk__28924_28941 = G__28971;
count__28925_28942 = G__28972;
i__28926_28943 = G__28973;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq28913){
var G__28914 = cljs.core.first.call(null,seq28913);
var seq28913__$1 = cljs.core.next.call(null,seq28913);
var G__28915 = cljs.core.first.call(null,seq28913__$1);
var seq28913__$2 = cljs.core.next.call(null,seq28913__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28914,G__28915,seq28913__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var args28990 = [];
var len__25835__auto___29029 = arguments.length;
var i__25836__auto___29030 = (0);
while(true){
if((i__25836__auto___29030 < len__25835__auto___29029)){
args28990.push((arguments[i__25836__auto___29030]));

var G__29034 = (i__25836__auto___29030 + (1));
i__25836__auto___29030 = G__29034;
continue;
} else {
}
break;
}

var G__29005 = args28990.length;
switch (G__29005) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__25854__auto__ = (new cljs.core.IndexedSeq(args28990.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25854__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__29009 = parent;
G__29009.insertBefore(child,parent.firstChild);

return G__29009;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__29016_29041 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__29017_29042 = null;
var count__29018_29043 = (0);
var i__29019_29044 = (0);
while(true){
if((i__29019_29044 < count__29018_29043)){
var c_29049 = cljs.core._nth.call(null,chunk__29017_29042,i__29019_29044);
dommy.core.prepend_BANG_.call(null,parent,c_29049);

var G__29052 = seq__29016_29041;
var G__29053 = chunk__29017_29042;
var G__29054 = count__29018_29043;
var G__29055 = (i__29019_29044 + (1));
seq__29016_29041 = G__29052;
chunk__29017_29042 = G__29053;
count__29018_29043 = G__29054;
i__29019_29044 = G__29055;
continue;
} else {
var temp__4657__auto___29063 = cljs.core.seq.call(null,seq__29016_29041);
if(temp__4657__auto___29063){
var seq__29016_29071__$1 = temp__4657__auto___29063;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29016_29071__$1)){
var c__25571__auto___29078 = cljs.core.chunk_first.call(null,seq__29016_29071__$1);
var G__29079 = cljs.core.chunk_rest.call(null,seq__29016_29071__$1);
var G__29080 = c__25571__auto___29078;
var G__29081 = cljs.core.count.call(null,c__25571__auto___29078);
var G__29082 = (0);
seq__29016_29041 = G__29079;
chunk__29017_29042 = G__29080;
count__29018_29043 = G__29081;
i__29019_29044 = G__29082;
continue;
} else {
var c_29088 = cljs.core.first.call(null,seq__29016_29071__$1);
dommy.core.prepend_BANG_.call(null,parent,c_29088);

var G__29091 = cljs.core.next.call(null,seq__29016_29071__$1);
var G__29092 = null;
var G__29093 = (0);
var G__29094 = (0);
seq__29016_29041 = G__29091;
chunk__29017_29042 = G__29092;
count__29018_29043 = G__29093;
i__29019_29044 = G__29094;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq28991){
var G__28992 = cljs.core.first.call(null,seq28991);
var seq28991__$1 = cljs.core.next.call(null,seq28991);
var G__28993 = cljs.core.first.call(null,seq28991__$1);
var seq28991__$2 = cljs.core.next.call(null,seq28991__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28992,G__28993,seq28991__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__4655__auto___29122 = other.nextSibling;
if(cljs.core.truth_(temp__4655__auto___29122)){
var next_29125 = temp__4655__auto___29122;
dommy.core.insert_before_BANG_.call(null,elem,next_29125);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var args29145 = [];
var len__25835__auto___29160 = arguments.length;
var i__25836__auto___29161 = (0);
while(true){
if((i__25836__auto___29161 < len__25835__auto___29160)){
args29145.push((arguments[i__25836__auto___29161]));

var G__29165 = (i__25836__auto___29161 + (1));
i__25836__auto___29161 = G__29165;
continue;
} else {
}
break;
}

var G__29154 = args29145.length;
switch (G__29154) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29145.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Target element must have a parent"),cljs.core.str("\n"),cljs.core.str("p")].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__29158 = p;
G__29158.removeChild(elem);

return G__29158;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__29179){
var vec__29180 = p__29179;
var special_mouse_event = cljs.core.nth.call(null,vec__29180,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__29180,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__29180,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__29180,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__24760__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__24748__auto__ = related_target;
if(cljs.core.truth_(and__24748__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__24748__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__29180,special_mouse_event,real_mouse_event))
});})(vec__29180,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__24748__auto__ = selected_target;
if(cljs.core.truth_(and__24748__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__24748__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__24760__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__25842__auto__ = [];
var len__25835__auto___29260 = arguments.length;
var i__25836__auto___29262 = (0);
while(true){
if((i__25836__auto___29262 < len__25835__auto___29260)){
args__25842__auto__.push((arguments[i__25836__auto___29262]));

var G__29267 = (i__25836__auto___29262 + (1));
i__25836__auto___29262 = G__29267;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((2) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__25843__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq29224){
var G__29225 = cljs.core.first.call(null,seq29224);
var seq29224__$1 = cljs.core.next.call(null,seq29224);
var G__29226 = cljs.core.first.call(null,seq29224__$1);
var seq29224__$2 = cljs.core.next.call(null,seq29224__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29225,G__29226,seq29224__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__25842__auto__ = [];
var len__25835__auto___29471 = arguments.length;
var i__25836__auto___29473 = (0);
while(true){
if((i__25836__auto___29473 < len__25835__auto___29471)){
args__25842__auto__.push((arguments[i__25836__auto___29473]));

var G__29478 = (i__25836__auto___29473 + (1));
i__25836__auto___29473 = G__29478;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__29355_29491 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_29492 = cljs.core.nth.call(null,vec__29355_29491,(0),null);
var selector_29493 = cljs.core.nth.call(null,vec__29355_29491,(1),null);
var seq__29359_29500 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__29366_29501 = null;
var count__29367_29502 = (0);
var i__29368_29503 = (0);
while(true){
if((i__29368_29503 < count__29367_29502)){
var vec__29377_29515 = cljs.core._nth.call(null,chunk__29366_29501,i__29368_29503);
var orig_type_29516 = cljs.core.nth.call(null,vec__29377_29515,(0),null);
var f_29517 = cljs.core.nth.call(null,vec__29377_29515,(1),null);
var seq__29369_29523 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_29516,cljs.core.PersistentArrayMap.fromArray([orig_type_29516,cljs.core.identity], true, false)));
var chunk__29371_29524 = null;
var count__29372_29525 = (0);
var i__29373_29526 = (0);
while(true){
if((i__29373_29526 < count__29372_29525)){
var vec__29385_29535 = cljs.core._nth.call(null,chunk__29371_29524,i__29373_29526);
var actual_type_29536 = cljs.core.nth.call(null,vec__29385_29535,(0),null);
var factory_29537 = cljs.core.nth.call(null,vec__29385_29535,(1),null);
var canonical_f_29556 = (cljs.core.truth_(selector_29493)?cljs.core.partial.call(null,dommy.core.live_listener,elem_29492,selector_29493):cljs.core.identity).call(null,factory_29537.call(null,f_29517));
dommy.core.update_event_listeners_BANG_.call(null,elem_29492,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_29493,actual_type_29536,f_29517], null),canonical_f_29556);

if(cljs.core.truth_(elem_29492.addEventListener)){
elem_29492.addEventListener(cljs.core.name.call(null,actual_type_29536),canonical_f_29556);
} else {
elem_29492.attachEvent(cljs.core.name.call(null,actual_type_29536),canonical_f_29556);
}

var G__29567 = seq__29369_29523;
var G__29568 = chunk__29371_29524;
var G__29569 = count__29372_29525;
var G__29570 = (i__29373_29526 + (1));
seq__29369_29523 = G__29567;
chunk__29371_29524 = G__29568;
count__29372_29525 = G__29569;
i__29373_29526 = G__29570;
continue;
} else {
var temp__4657__auto___29575 = cljs.core.seq.call(null,seq__29369_29523);
if(temp__4657__auto___29575){
var seq__29369_29577__$1 = temp__4657__auto___29575;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29369_29577__$1)){
var c__25571__auto___29580 = cljs.core.chunk_first.call(null,seq__29369_29577__$1);
var G__29584 = cljs.core.chunk_rest.call(null,seq__29369_29577__$1);
var G__29585 = c__25571__auto___29580;
var G__29586 = cljs.core.count.call(null,c__25571__auto___29580);
var G__29587 = (0);
seq__29369_29523 = G__29584;
chunk__29371_29524 = G__29585;
count__29372_29525 = G__29586;
i__29373_29526 = G__29587;
continue;
} else {
var vec__29394_29607 = cljs.core.first.call(null,seq__29369_29577__$1);
var actual_type_29608 = cljs.core.nth.call(null,vec__29394_29607,(0),null);
var factory_29609 = cljs.core.nth.call(null,vec__29394_29607,(1),null);
var canonical_f_29614 = (cljs.core.truth_(selector_29493)?cljs.core.partial.call(null,dommy.core.live_listener,elem_29492,selector_29493):cljs.core.identity).call(null,factory_29609.call(null,f_29517));
dommy.core.update_event_listeners_BANG_.call(null,elem_29492,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_29493,actual_type_29608,f_29517], null),canonical_f_29614);

if(cljs.core.truth_(elem_29492.addEventListener)){
elem_29492.addEventListener(cljs.core.name.call(null,actual_type_29608),canonical_f_29614);
} else {
elem_29492.attachEvent(cljs.core.name.call(null,actual_type_29608),canonical_f_29614);
}

var G__29625 = cljs.core.next.call(null,seq__29369_29577__$1);
var G__29626 = null;
var G__29627 = (0);
var G__29628 = (0);
seq__29369_29523 = G__29625;
chunk__29371_29524 = G__29626;
count__29372_29525 = G__29627;
i__29373_29526 = G__29628;
continue;
}
} else {
}
}
break;
}

var G__29654 = seq__29359_29500;
var G__29655 = chunk__29366_29501;
var G__29656 = count__29367_29502;
var G__29657 = (i__29368_29503 + (1));
seq__29359_29500 = G__29654;
chunk__29366_29501 = G__29655;
count__29367_29502 = G__29656;
i__29368_29503 = G__29657;
continue;
} else {
var temp__4657__auto___29666 = cljs.core.seq.call(null,seq__29359_29500);
if(temp__4657__auto___29666){
var seq__29359_29670__$1 = temp__4657__auto___29666;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29359_29670__$1)){
var c__25571__auto___29671 = cljs.core.chunk_first.call(null,seq__29359_29670__$1);
var G__29673 = cljs.core.chunk_rest.call(null,seq__29359_29670__$1);
var G__29674 = c__25571__auto___29671;
var G__29675 = cljs.core.count.call(null,c__25571__auto___29671);
var G__29676 = (0);
seq__29359_29500 = G__29673;
chunk__29366_29501 = G__29674;
count__29367_29502 = G__29675;
i__29368_29503 = G__29676;
continue;
} else {
var vec__29436_29685 = cljs.core.first.call(null,seq__29359_29670__$1);
var orig_type_29686 = cljs.core.nth.call(null,vec__29436_29685,(0),null);
var f_29687 = cljs.core.nth.call(null,vec__29436_29685,(1),null);
var seq__29360_29694 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_29686,cljs.core.PersistentArrayMap.fromArray([orig_type_29686,cljs.core.identity], true, false)));
var chunk__29362_29695 = null;
var count__29363_29696 = (0);
var i__29364_29697 = (0);
while(true){
if((i__29364_29697 < count__29363_29696)){
var vec__29444_29706 = cljs.core._nth.call(null,chunk__29362_29695,i__29364_29697);
var actual_type_29707 = cljs.core.nth.call(null,vec__29444_29706,(0),null);
var factory_29708 = cljs.core.nth.call(null,vec__29444_29706,(1),null);
var canonical_f_29732 = (cljs.core.truth_(selector_29493)?cljs.core.partial.call(null,dommy.core.live_listener,elem_29492,selector_29493):cljs.core.identity).call(null,factory_29708.call(null,f_29687));
dommy.core.update_event_listeners_BANG_.call(null,elem_29492,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_29493,actual_type_29707,f_29687], null),canonical_f_29732);

if(cljs.core.truth_(elem_29492.addEventListener)){
elem_29492.addEventListener(cljs.core.name.call(null,actual_type_29707),canonical_f_29732);
} else {
elem_29492.attachEvent(cljs.core.name.call(null,actual_type_29707),canonical_f_29732);
}

var G__29756 = seq__29360_29694;
var G__29757 = chunk__29362_29695;
var G__29758 = count__29363_29696;
var G__29759 = (i__29364_29697 + (1));
seq__29360_29694 = G__29756;
chunk__29362_29695 = G__29757;
count__29363_29696 = G__29758;
i__29364_29697 = G__29759;
continue;
} else {
var temp__4657__auto___29766__$1 = cljs.core.seq.call(null,seq__29360_29694);
if(temp__4657__auto___29766__$1){
var seq__29360_29768__$1 = temp__4657__auto___29766__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29360_29768__$1)){
var c__25571__auto___29770 = cljs.core.chunk_first.call(null,seq__29360_29768__$1);
var G__29771 = cljs.core.chunk_rest.call(null,seq__29360_29768__$1);
var G__29772 = c__25571__auto___29770;
var G__29773 = cljs.core.count.call(null,c__25571__auto___29770);
var G__29774 = (0);
seq__29360_29694 = G__29771;
chunk__29362_29695 = G__29772;
count__29363_29696 = G__29773;
i__29364_29697 = G__29774;
continue;
} else {
var vec__29455_29780 = cljs.core.first.call(null,seq__29360_29768__$1);
var actual_type_29781 = cljs.core.nth.call(null,vec__29455_29780,(0),null);
var factory_29782 = cljs.core.nth.call(null,vec__29455_29780,(1),null);
var canonical_f_29790 = (cljs.core.truth_(selector_29493)?cljs.core.partial.call(null,dommy.core.live_listener,elem_29492,selector_29493):cljs.core.identity).call(null,factory_29782.call(null,f_29687));
dommy.core.update_event_listeners_BANG_.call(null,elem_29492,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_29493,actual_type_29781,f_29687], null),canonical_f_29790);

if(cljs.core.truth_(elem_29492.addEventListener)){
elem_29492.addEventListener(cljs.core.name.call(null,actual_type_29781),canonical_f_29790);
} else {
elem_29492.attachEvent(cljs.core.name.call(null,actual_type_29781),canonical_f_29790);
}

var G__29807 = cljs.core.next.call(null,seq__29360_29768__$1);
var G__29808 = null;
var G__29809 = (0);
var G__29810 = (0);
seq__29360_29694 = G__29807;
chunk__29362_29695 = G__29808;
count__29363_29696 = G__29809;
i__29364_29697 = G__29810;
continue;
}
} else {
}
}
break;
}

var G__29813 = cljs.core.next.call(null,seq__29359_29670__$1);
var G__29814 = null;
var G__29815 = (0);
var G__29816 = (0);
seq__29359_29500 = G__29813;
chunk__29366_29501 = G__29814;
count__29367_29502 = G__29815;
i__29368_29503 = G__29816;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq29341){
var G__29342 = cljs.core.first.call(null,seq29341);
var seq29341__$1 = cljs.core.next.call(null,seq29341);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29342,seq29341__$1);
});

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__25842__auto__ = [];
var len__25835__auto___29887 = arguments.length;
var i__25836__auto___29890 = (0);
while(true){
if((i__25836__auto___29890 < len__25835__auto___29887)){
args__25842__auto__.push((arguments[i__25836__auto___29890]));

var G__29893 = (i__25836__auto___29890 + (1));
i__25836__auto___29890 = G__29893;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__29830_29896 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_29897 = cljs.core.nth.call(null,vec__29830_29896,(0),null);
var selector_29898 = cljs.core.nth.call(null,vec__29830_29896,(1),null);
var seq__29833_29902 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__29840_29903 = null;
var count__29841_29904 = (0);
var i__29842_29905 = (0);
while(true){
if((i__29842_29905 < count__29841_29904)){
var vec__29849_29909 = cljs.core._nth.call(null,chunk__29840_29903,i__29842_29905);
var orig_type_29910 = cljs.core.nth.call(null,vec__29849_29909,(0),null);
var f_29911 = cljs.core.nth.call(null,vec__29849_29909,(1),null);
var seq__29843_29914 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_29910,cljs.core.PersistentArrayMap.fromArray([orig_type_29910,cljs.core.identity], true, false)));
var chunk__29845_29915 = null;
var count__29846_29916 = (0);
var i__29847_29917 = (0);
while(true){
if((i__29847_29917 < count__29846_29916)){
var vec__29853_29920 = cljs.core._nth.call(null,chunk__29845_29915,i__29847_29917);
var actual_type_29921 = cljs.core.nth.call(null,vec__29853_29920,(0),null);
var __29922 = cljs.core.nth.call(null,vec__29853_29920,(1),null);
var keys_29924 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_29898,actual_type_29921,f_29911], null);
var canonical_f_29925 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_29897),keys_29924);
dommy.core.update_event_listeners_BANG_.call(null,elem_29897,dommy.utils.dissoc_in,keys_29924);

if(cljs.core.truth_(elem_29897.removeEventListener)){
elem_29897.removeEventListener(cljs.core.name.call(null,actual_type_29921),canonical_f_29925);
} else {
elem_29897.detachEvent(cljs.core.name.call(null,actual_type_29921),canonical_f_29925);
}

var G__29927 = seq__29843_29914;
var G__29928 = chunk__29845_29915;
var G__29929 = count__29846_29916;
var G__29930 = (i__29847_29917 + (1));
seq__29843_29914 = G__29927;
chunk__29845_29915 = G__29928;
count__29846_29916 = G__29929;
i__29847_29917 = G__29930;
continue;
} else {
var temp__4657__auto___29932 = cljs.core.seq.call(null,seq__29843_29914);
if(temp__4657__auto___29932){
var seq__29843_29934__$1 = temp__4657__auto___29932;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29843_29934__$1)){
var c__25571__auto___29936 = cljs.core.chunk_first.call(null,seq__29843_29934__$1);
var G__29937 = cljs.core.chunk_rest.call(null,seq__29843_29934__$1);
var G__29938 = c__25571__auto___29936;
var G__29939 = cljs.core.count.call(null,c__25571__auto___29936);
var G__29940 = (0);
seq__29843_29914 = G__29937;
chunk__29845_29915 = G__29938;
count__29846_29916 = G__29939;
i__29847_29917 = G__29940;
continue;
} else {
var vec__29861_29943 = cljs.core.first.call(null,seq__29843_29934__$1);
var actual_type_29944 = cljs.core.nth.call(null,vec__29861_29943,(0),null);
var __29945 = cljs.core.nth.call(null,vec__29861_29943,(1),null);
var keys_29947 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_29898,actual_type_29944,f_29911], null);
var canonical_f_29948 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_29897),keys_29947);
dommy.core.update_event_listeners_BANG_.call(null,elem_29897,dommy.utils.dissoc_in,keys_29947);

if(cljs.core.truth_(elem_29897.removeEventListener)){
elem_29897.removeEventListener(cljs.core.name.call(null,actual_type_29944),canonical_f_29948);
} else {
elem_29897.detachEvent(cljs.core.name.call(null,actual_type_29944),canonical_f_29948);
}

var G__29950 = cljs.core.next.call(null,seq__29843_29934__$1);
var G__29951 = null;
var G__29952 = (0);
var G__29953 = (0);
seq__29843_29914 = G__29950;
chunk__29845_29915 = G__29951;
count__29846_29916 = G__29952;
i__29847_29917 = G__29953;
continue;
}
} else {
}
}
break;
}

var G__29954 = seq__29833_29902;
var G__29955 = chunk__29840_29903;
var G__29956 = count__29841_29904;
var G__29957 = (i__29842_29905 + (1));
seq__29833_29902 = G__29954;
chunk__29840_29903 = G__29955;
count__29841_29904 = G__29956;
i__29842_29905 = G__29957;
continue;
} else {
var temp__4657__auto___29958 = cljs.core.seq.call(null,seq__29833_29902);
if(temp__4657__auto___29958){
var seq__29833_29959__$1 = temp__4657__auto___29958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29833_29959__$1)){
var c__25571__auto___29962 = cljs.core.chunk_first.call(null,seq__29833_29959__$1);
var G__29964 = cljs.core.chunk_rest.call(null,seq__29833_29959__$1);
var G__29965 = c__25571__auto___29962;
var G__29966 = cljs.core.count.call(null,c__25571__auto___29962);
var G__29967 = (0);
seq__29833_29902 = G__29964;
chunk__29840_29903 = G__29965;
count__29841_29904 = G__29966;
i__29842_29905 = G__29967;
continue;
} else {
var vec__29866_29971 = cljs.core.first.call(null,seq__29833_29959__$1);
var orig_type_29972 = cljs.core.nth.call(null,vec__29866_29971,(0),null);
var f_29973 = cljs.core.nth.call(null,vec__29866_29971,(1),null);
var seq__29834_29974 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_29972,cljs.core.PersistentArrayMap.fromArray([orig_type_29972,cljs.core.identity], true, false)));
var chunk__29836_29975 = null;
var count__29837_29976 = (0);
var i__29838_29977 = (0);
while(true){
if((i__29838_29977 < count__29837_29976)){
var vec__29869_29979 = cljs.core._nth.call(null,chunk__29836_29975,i__29838_29977);
var actual_type_29980 = cljs.core.nth.call(null,vec__29869_29979,(0),null);
var __29981 = cljs.core.nth.call(null,vec__29869_29979,(1),null);
var keys_29983 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_29898,actual_type_29980,f_29973], null);
var canonical_f_29984 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_29897),keys_29983);
dommy.core.update_event_listeners_BANG_.call(null,elem_29897,dommy.utils.dissoc_in,keys_29983);

if(cljs.core.truth_(elem_29897.removeEventListener)){
elem_29897.removeEventListener(cljs.core.name.call(null,actual_type_29980),canonical_f_29984);
} else {
elem_29897.detachEvent(cljs.core.name.call(null,actual_type_29980),canonical_f_29984);
}

var G__29985 = seq__29834_29974;
var G__29986 = chunk__29836_29975;
var G__29987 = count__29837_29976;
var G__29988 = (i__29838_29977 + (1));
seq__29834_29974 = G__29985;
chunk__29836_29975 = G__29986;
count__29837_29976 = G__29987;
i__29838_29977 = G__29988;
continue;
} else {
var temp__4657__auto___29990__$1 = cljs.core.seq.call(null,seq__29834_29974);
if(temp__4657__auto___29990__$1){
var seq__29834_29992__$1 = temp__4657__auto___29990__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29834_29992__$1)){
var c__25571__auto___29994 = cljs.core.chunk_first.call(null,seq__29834_29992__$1);
var G__29995 = cljs.core.chunk_rest.call(null,seq__29834_29992__$1);
var G__29996 = c__25571__auto___29994;
var G__29997 = cljs.core.count.call(null,c__25571__auto___29994);
var G__29998 = (0);
seq__29834_29974 = G__29995;
chunk__29836_29975 = G__29996;
count__29837_29976 = G__29997;
i__29838_29977 = G__29998;
continue;
} else {
var vec__29877_30001 = cljs.core.first.call(null,seq__29834_29992__$1);
var actual_type_30002 = cljs.core.nth.call(null,vec__29877_30001,(0),null);
var __30003 = cljs.core.nth.call(null,vec__29877_30001,(1),null);
var keys_30004 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_29898,actual_type_30002,f_29973], null);
var canonical_f_30005 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_29897),keys_30004);
dommy.core.update_event_listeners_BANG_.call(null,elem_29897,dommy.utils.dissoc_in,keys_30004);

if(cljs.core.truth_(elem_29897.removeEventListener)){
elem_29897.removeEventListener(cljs.core.name.call(null,actual_type_30002),canonical_f_30005);
} else {
elem_29897.detachEvent(cljs.core.name.call(null,actual_type_30002),canonical_f_30005);
}

var G__30008 = cljs.core.next.call(null,seq__29834_29992__$1);
var G__30009 = null;
var G__30010 = (0);
var G__30011 = (0);
seq__29834_29974 = G__30008;
chunk__29836_29975 = G__30009;
count__29837_29976 = G__30010;
i__29838_29977 = G__30011;
continue;
}
} else {
}
}
break;
}

var G__30012 = cljs.core.next.call(null,seq__29833_29959__$1);
var G__30013 = null;
var G__30014 = (0);
var G__30015 = (0);
seq__29833_29902 = G__30012;
chunk__29840_29903 = G__30013;
count__29841_29904 = G__30014;
i__29842_29905 = G__30015;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq29824){
var G__29825 = cljs.core.first.call(null,seq29824);
var seq29824__$1 = cljs.core.next.call(null,seq29824);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29825,seq29824__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__25842__auto__ = [];
var len__25835__auto___30044 = arguments.length;
var i__25836__auto___30045 = (0);
while(true){
if((i__25836__auto___30045 < len__25835__auto___30044)){
args__25842__auto__.push((arguments[i__25836__auto___30045]));

var G__30047 = (i__25836__auto___30045 + (1));
i__25836__auto___30045 = G__30047;
continue;
} else {
}
break;
}

var argseq__25843__auto__ = ((((1) < args__25842__auto__.length))?(new cljs.core.IndexedSeq(args__25842__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25843__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__30027_30051 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_30052 = cljs.core.nth.call(null,vec__30027_30051,(0),null);
var selector_30053 = cljs.core.nth.call(null,vec__30027_30051,(1),null);
var seq__30030_30054 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__30031_30055 = null;
var count__30032_30056 = (0);
var i__30033_30057 = (0);
while(true){
if((i__30033_30057 < count__30032_30056)){
var vec__30034_30060 = cljs.core._nth.call(null,chunk__30031_30055,i__30033_30057);
var type_30061 = cljs.core.nth.call(null,vec__30034_30060,(0),null);
var f_30062 = cljs.core.nth.call(null,vec__30034_30060,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_30061,((function (seq__30030_30054,chunk__30031_30055,count__30032_30056,i__30033_30057,vec__30034_30060,type_30061,f_30062,vec__30027_30051,elem_30052,selector_30053){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_30061,dommy$core$this_fn);

return f_30062.call(null,e);
});})(seq__30030_30054,chunk__30031_30055,count__30032_30056,i__30033_30057,vec__30034_30060,type_30061,f_30062,vec__30027_30051,elem_30052,selector_30053))
);

var G__30065 = seq__30030_30054;
var G__30066 = chunk__30031_30055;
var G__30067 = count__30032_30056;
var G__30068 = (i__30033_30057 + (1));
seq__30030_30054 = G__30065;
chunk__30031_30055 = G__30066;
count__30032_30056 = G__30067;
i__30033_30057 = G__30068;
continue;
} else {
var temp__4657__auto___30069 = cljs.core.seq.call(null,seq__30030_30054);
if(temp__4657__auto___30069){
var seq__30030_30072__$1 = temp__4657__auto___30069;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30030_30072__$1)){
var c__25571__auto___30073 = cljs.core.chunk_first.call(null,seq__30030_30072__$1);
var G__30074 = cljs.core.chunk_rest.call(null,seq__30030_30072__$1);
var G__30075 = c__25571__auto___30073;
var G__30076 = cljs.core.count.call(null,c__25571__auto___30073);
var G__30077 = (0);
seq__30030_30054 = G__30074;
chunk__30031_30055 = G__30075;
count__30032_30056 = G__30076;
i__30033_30057 = G__30077;
continue;
} else {
var vec__30038_30079 = cljs.core.first.call(null,seq__30030_30072__$1);
var type_30080 = cljs.core.nth.call(null,vec__30038_30079,(0),null);
var f_30081 = cljs.core.nth.call(null,vec__30038_30079,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_30080,((function (seq__30030_30054,chunk__30031_30055,count__30032_30056,i__30033_30057,vec__30038_30079,type_30080,f_30081,seq__30030_30072__$1,temp__4657__auto___30069,vec__30027_30051,elem_30052,selector_30053){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_30080,dommy$core$this_fn);

return f_30081.call(null,e);
});})(seq__30030_30054,chunk__30031_30055,count__30032_30056,i__30033_30057,vec__30038_30079,type_30080,f_30081,seq__30030_30072__$1,temp__4657__auto___30069,vec__30027_30051,elem_30052,selector_30053))
);

var G__30082 = cljs.core.next.call(null,seq__30030_30072__$1);
var G__30083 = null;
var G__30084 = (0);
var G__30085 = (0);
seq__30030_30054 = G__30082;
chunk__30031_30055 = G__30083;
count__30032_30056 = G__30084;
i__30033_30057 = G__30085;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq30020){
var G__30021 = cljs.core.first.call(null,seq30020);
var seq30020__$1 = cljs.core.next.call(null,seq30020);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30021,seq30020__$1);
});


//# sourceMappingURL=core.js.map?rel=1473645387383