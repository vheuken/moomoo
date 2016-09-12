// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35394){
var map__35479 = p__35394;
var map__35479__$1 = ((((!((map__35479 == null)))?((((map__35479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35479):map__35479);
var m = map__35479__$1;
var n = cljs.core.get.call(null,map__35479__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35479__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
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
var seq__35492_35596 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35493_35597 = null;
var count__35494_35598 = (0);
var i__35495_35599 = (0);
while(true){
if((i__35495_35599 < count__35494_35598)){
var f_35605 = cljs.core._nth.call(null,chunk__35493_35597,i__35495_35599);
cljs.core.println.call(null,"  ",f_35605);

var G__35607 = seq__35492_35596;
var G__35608 = chunk__35493_35597;
var G__35609 = count__35494_35598;
var G__35610 = (i__35495_35599 + (1));
seq__35492_35596 = G__35607;
chunk__35493_35597 = G__35608;
count__35494_35598 = G__35609;
i__35495_35599 = G__35610;
continue;
} else {
var temp__4657__auto___35615 = cljs.core.seq.call(null,seq__35492_35596);
if(temp__4657__auto___35615){
var seq__35492_35616__$1 = temp__4657__auto___35615;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35492_35616__$1)){
var c__25571__auto___35622 = cljs.core.chunk_first.call(null,seq__35492_35616__$1);
var G__35623 = cljs.core.chunk_rest.call(null,seq__35492_35616__$1);
var G__35624 = c__25571__auto___35622;
var G__35625 = cljs.core.count.call(null,c__25571__auto___35622);
var G__35626 = (0);
seq__35492_35596 = G__35623;
chunk__35493_35597 = G__35624;
count__35494_35598 = G__35625;
i__35495_35599 = G__35626;
continue;
} else {
var f_35628 = cljs.core.first.call(null,seq__35492_35616__$1);
cljs.core.println.call(null,"  ",f_35628);

var G__35629 = cljs.core.next.call(null,seq__35492_35616__$1);
var G__35630 = null;
var G__35631 = (0);
var G__35632 = (0);
seq__35492_35596 = G__35629;
chunk__35493_35597 = G__35630;
count__35494_35598 = G__35631;
i__35495_35599 = G__35632;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35634 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24760__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24760__auto__)){
return or__24760__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35634);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35634)))?cljs.core.second.call(null,arglists_35634):arglists_35634));
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
var seq__35523_35650 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35524_35651 = null;
var count__35525_35652 = (0);
var i__35526_35653 = (0);
while(true){
if((i__35526_35653 < count__35525_35652)){
var vec__35528_35661 = cljs.core._nth.call(null,chunk__35524_35651,i__35526_35653);
var name_35662 = cljs.core.nth.call(null,vec__35528_35661,(0),null);
var map__35531_35663 = cljs.core.nth.call(null,vec__35528_35661,(1),null);
var map__35531_35664__$1 = ((((!((map__35531_35663 == null)))?((((map__35531_35663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35531_35663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35531_35663):map__35531_35663);
var doc_35665 = cljs.core.get.call(null,map__35531_35664__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35666 = cljs.core.get.call(null,map__35531_35664__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35662);

cljs.core.println.call(null," ",arglists_35666);

if(cljs.core.truth_(doc_35665)){
cljs.core.println.call(null," ",doc_35665);
} else {
}

var G__35675 = seq__35523_35650;
var G__35676 = chunk__35524_35651;
var G__35677 = count__35525_35652;
var G__35678 = (i__35526_35653 + (1));
seq__35523_35650 = G__35675;
chunk__35524_35651 = G__35676;
count__35525_35652 = G__35677;
i__35526_35653 = G__35678;
continue;
} else {
var temp__4657__auto___35680 = cljs.core.seq.call(null,seq__35523_35650);
if(temp__4657__auto___35680){
var seq__35523_35692__$1 = temp__4657__auto___35680;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35523_35692__$1)){
var c__25571__auto___35693 = cljs.core.chunk_first.call(null,seq__35523_35692__$1);
var G__35696 = cljs.core.chunk_rest.call(null,seq__35523_35692__$1);
var G__35697 = c__25571__auto___35693;
var G__35698 = cljs.core.count.call(null,c__25571__auto___35693);
var G__35699 = (0);
seq__35523_35650 = G__35696;
chunk__35524_35651 = G__35697;
count__35525_35652 = G__35698;
i__35526_35653 = G__35699;
continue;
} else {
var vec__35554_35709 = cljs.core.first.call(null,seq__35523_35692__$1);
var name_35710 = cljs.core.nth.call(null,vec__35554_35709,(0),null);
var map__35557_35711 = cljs.core.nth.call(null,vec__35554_35709,(1),null);
var map__35557_35712__$1 = ((((!((map__35557_35711 == null)))?((((map__35557_35711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35557_35711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35557_35711):map__35557_35711);
var doc_35713 = cljs.core.get.call(null,map__35557_35712__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35714 = cljs.core.get.call(null,map__35557_35712__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35710);

cljs.core.println.call(null," ",arglists_35714);

if(cljs.core.truth_(doc_35713)){
cljs.core.println.call(null," ",doc_35713);
} else {
}

var G__35736 = cljs.core.next.call(null,seq__35523_35692__$1);
var G__35737 = null;
var G__35738 = (0);
var G__35739 = (0);
seq__35523_35650 = G__35736;
chunk__35524_35651 = G__35737;
count__35525_35652 = G__35738;
i__35526_35653 = G__35739;
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
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__35572 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35573 = null;
var count__35574 = (0);
var i__35575 = (0);
while(true){
if((i__35575 < count__35574)){
var role = cljs.core._nth.call(null,chunk__35573,i__35575);
var temp__4657__auto___35742__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35742__$1)){
var spec_35743 = temp__4657__auto___35742__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35743));
} else {
}

var G__35744 = seq__35572;
var G__35745 = chunk__35573;
var G__35746 = count__35574;
var G__35747 = (i__35575 + (1));
seq__35572 = G__35744;
chunk__35573 = G__35745;
count__35574 = G__35746;
i__35575 = G__35747;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__35572);
if(temp__4657__auto____$1){
var seq__35572__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35572__$1)){
var c__25571__auto__ = cljs.core.chunk_first.call(null,seq__35572__$1);
var G__35752 = cljs.core.chunk_rest.call(null,seq__35572__$1);
var G__35753 = c__25571__auto__;
var G__35754 = cljs.core.count.call(null,c__25571__auto__);
var G__35755 = (0);
seq__35572 = G__35752;
chunk__35573 = G__35753;
count__35574 = G__35754;
i__35575 = G__35755;
continue;
} else {
var role = cljs.core.first.call(null,seq__35572__$1);
var temp__4657__auto___35761__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35761__$2)){
var spec_35763 = temp__4657__auto___35761__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35763));
} else {
}

var G__35765 = cljs.core.next.call(null,seq__35572__$1);
var G__35766 = null;
var G__35767 = (0);
var G__35768 = (0);
seq__35572 = G__35765;
chunk__35573 = G__35766;
count__35574 = G__35767;
i__35575 = G__35768;
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

//# sourceMappingURL=repl.js.map?rel=1473645388963