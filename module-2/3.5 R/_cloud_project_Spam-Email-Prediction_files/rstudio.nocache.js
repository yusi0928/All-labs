function rstudio(){var O='bootstrap',P='begin',Q='gwt.codesvr.rstudio=',R='gwt.codesvr=',S='rstudio',T='startup',U='DUMMY',V=0,W=1,X='iframe',Y='javascript:""',Z='position:absolute; width:0; height:0; border:none; left: -1000px;',$=' top: -1000px;',_='CSS1Compat',ab='<!doctype html>',bb='',cb='<html><head><\/head><body><\/body><\/html>',db='undefined',eb='readystatechange',fb=10,gb='Chrome',hb='eval("',ib='");',jb='script',kb='javascript',lb='moduleStartup',mb='moduleRequested',nb='Failed to load ',ob='head',pb='meta',qb='name',rb='rstudio::',sb='::',tb='gwt:property',ub='content',vb='=',wb='gwt:onPropertyErrorFn',xb='Bad handler "',yb='" for "gwt:onPropertyErrorFn"',zb='gwt:onLoadErrorFn',Ab='" for "gwt:onLoadErrorFn"',Bb='#',Cb='?',Db='/',Eb='img',Fb='clear.cache.gif',Gb='baseUrl',Hb='rstudio.nocache.js',Ib='base',Jb='//',Kb='compiler.stackMode',Lb=2,Mb='rstudio.desktop',Nb='true',Ob='QtWebEngine',Pb='false',Qb='user.agent',Rb='webkit',Sb='safari',Tb='msie',Ub=11,Vb='ie10',Wb=9,Xb='ie9',Yb=8,Zb='ie8',$b='gecko',_b='gecko1_8',ac=3,bc=4,cc='selectingPermutation',dc='rstudio.devmode.js',ec='native',fc='0A4DC085C995967EA6B22380DF823FFC',gc=':1',hc=':2',ic=':3',jc='emulated',kc='8F17792E727DD2DD703CA9792FE7A004',lc='99EC813D0DB9463FAFABE95E0480AA24',mc='F103E3264ABDE27DE55EC1207C75A6F4',nc=':',oc='.cache.js',pc='loadExternalRefs',qc='end',rc='http:',sc='file:',tc='_gwt_dummy_',uc='__gwtDevModeHook:rstudio',vc='Ignoring non-whitelisted Dev Mode URL: ',wc=':moduleBase';var o=window;var p=document;r(O,P);function q(){var a=o.location.search;return a.indexOf(Q)!=-1||a.indexOf(R)!=-1}
function r(a,b){if(o.__gwtStatsEvent){o.__gwtStatsEvent({moduleName:S,sessionId:o.__gwtStatsSessionId,subSystem:T,evtGroup:a,millis:(new Date).getTime(),type:b})}}
rstudio.__sendStats=r;rstudio.__moduleName=S;rstudio.__errFn=null;rstudio.__moduleBase=U;rstudio.__softPermutationId=V;rstudio.__computePropValue=null;rstudio.__getPropMap=null;rstudio.__installRunAsyncCode=function(){};rstudio.__gwtStartLoadingFragment=function(){return null};rstudio.__gwt_isKnownPropertyValue=function(){return false};rstudio.__gwt_getMetaProperty=function(){return null};var s=null;var t=o.__gwt_activeModules=o.__gwt_activeModules||{};t[S]={moduleName:S};rstudio.__moduleStartupDone=function(e){var f=t[S].bindings;t[S].bindings=function(){var a=f?f():{};var b=e[rstudio.__softPermutationId];for(var c=V;c<b.length;c++){var d=b[c];a[d[V]]=d[W]}return a}};var u;function v(){w();return u}
function w(){if(u){return}var a=p.createElement(X);a.src=Y;a.id=S;a.style.cssText=Z+$;a.tabIndex=-1;p.body.appendChild(a);u=a.contentDocument;if(!u){u=a.contentWindow.document}u.open();var b=document.compatMode==_?ab:bb;u.write(b+cb);u.close()}
function A(k){function l(a){function b(){if(typeof p.readyState==db){return typeof p.body!=db&&p.body!=null}return /loaded|complete/.test(p.readyState)}
var c=b();if(c){a();return}function d(){if(!c){if(!b()){return}c=true;a();if(p.removeEventListener){p.removeEventListener(eb,d,false)}if(e){clearInterval(e)}}}
if(p.addEventListener){p.addEventListener(eb,d,false)}var e=setInterval(function(){d()},fb)}
function m(c){function d(a,b){a.removeChild(b)}
var e=v();var f=e.body;var g;if(navigator.userAgent.indexOf(gb)>-1&&window.JSON){var h=e.createDocumentFragment();h.appendChild(e.createTextNode(hb));for(var i=V;i<c.length;i++){var j=window.JSON.stringify(c[i]);h.appendChild(e.createTextNode(j.substring(W,j.length-W)))}h.appendChild(e.createTextNode(ib));g=e.createElement(jb);g.language=kb;g.appendChild(h);f.appendChild(g);d(f,g)}else{for(var i=V;i<c.length;i++){g=e.createElement(jb);g.language=kb;g.text=c[i];f.appendChild(g);d(f,g)}}}
rstudio.onScriptDownloaded=function(a){l(function(){m(a)})};r(lb,mb);var n=p.createElement(jb);n.src=k;if(rstudio.__errFn){n.onerror=function(){rstudio.__errFn(S,new Error(nb+code))}}p.getElementsByTagName(ob)[V].appendChild(n)}
rstudio.__startLoadingFragment=function(a){return D(a)};rstudio.__installRunAsyncCode=function(a){var b=v();var c=b.body;var d=b.createElement(jb);d.language=kb;d.text=a;c.appendChild(d);c.removeChild(d)};function B(){var c={};var d;var e;var f=p.getElementsByTagName(pb);for(var g=V,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(qb),k;if(j){j=j.replace(rb,bb);if(j.indexOf(sb)>=V){continue}if(j==tb){k=i.getAttribute(ub);if(k){var l,m=k.indexOf(vb);if(m>=V){j=k.substring(V,m);l=k.substring(m+W)}else{j=k;l=bb}c[j]=l}}else if(j==wb){k=i.getAttribute(ub);if(k){try{d=eval(k)}catch(a){alert(xb+k+yb)}}}else if(j==zb){k=i.getAttribute(ub);if(k){try{e=eval(k)}catch(a){alert(xb+k+Ab)}}}}}__gwt_getMetaProperty=function(a){var b=c[a];return b==null?null:b};s=d;rstudio.__errFn=e}
function C(){function e(a){var b=a.lastIndexOf(Bb);if(b==-1){b=a.length}var c=a.indexOf(Cb);if(c==-1){c=a.length}var d=a.lastIndexOf(Db,Math.min(c,b));return d>=V?a.substring(V,d+W):bb}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=p.createElement(Eb);b.src=a+Fb;a=e(b.src)}return a}
function g(){var a=__gwt_getMetaProperty(Gb);if(a!=null){return a}return bb}
function h(){var a=p.getElementsByTagName(jb);for(var b=V;b<a.length;++b){if(a[b].src.indexOf(Hb)!=-1){return e(a[b].src)}}return bb}
function i(){var a=p.getElementsByTagName(Ib);if(a.length>V){return a[a.length-W].href}return bb}
function j(){var a=p.location;return a.href==a.protocol+Jb+a.host+a.pathname+a.search+a.hash}
var k=g();if(k==bb){k=h()}if(k==bb){k=i()}if(k==bb&&j()){k=e(p.location.href)}k=f(k);return k}
function D(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return rstudio.__moduleBase+a}
function F(){var f=[];var g=V;function h(a,b){var c=f;for(var d=V,e=a.length-W;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
var i=[];var j=[];function k(a){var b=j[a](),c=i[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(s){s(a,d,b)}throw null}
j[Kb]=function(){return __gwt_getMetaProperty(Kb)};i[Kb]={'emulated':V,'native':W,'strip':Lb};j[Mb]=function(){if(window.desktop)return Nb;return window.navigator.userAgent.indexOf(Ob)>V?Nb:Pb};i[Mb]={'false':V,'true':W};j[Qb]=function(){var a=navigator.userAgent.toLowerCase();var b=p.documentMode;if(function(){return a.indexOf(Rb)!=-1}())return Sb;if(function(){return a.indexOf(Tb)!=-1&&(b>=fb&&b<Ub)}())return Vb;if(function(){return a.indexOf(Tb)!=-1&&(b>=Wb&&b<Ub)}())return Xb;if(function(){return a.indexOf(Tb)!=-1&&(b>=Yb&&b<Ub)}())return Zb;if(function(){return a.indexOf($b)!=-1||b>=Ub}())return _b;return bb};i[Qb]={'gecko1_8':V,'ie10':W,'ie8':Lb,'ie9':ac,'safari':bc};__gwt_isKnownPropertyValue=function(a,b){return b in i[a]};rstudio.__getPropMap=function(){var a={};for(var b in i){if(i.hasOwnProperty(b)){a[b]=k(b)}}return a};rstudio.__computePropValue=k;o.__gwt_activeModules[S].bindings=rstudio.__getPropMap;r(O,cc);if(q()){return D(dc)}var l;try{h([ec,Pb,_b],fc);h([ec,Pb,Sb],fc+gc);h([ec,Nb,_b],fc+hc);h([ec,Nb,Sb],fc+ic);h([jc,Pb,Vb],kc);h([jc,Nb,Vb],kc+gc);h([jc,Pb,_b],lc);h([jc,Pb,Sb],lc+gc);h([jc,Nb,_b],lc+hc);h([jc,Nb,Sb],lc+ic);h([ec,Pb,Vb],mc);h([ec,Nb,Vb],mc+gc);l=f[k(Kb)][k(Mb)][k(Qb)];var m=l.indexOf(nc);if(m!=-1){g=parseInt(l.substring(m+W),fb);l=l.substring(V,m)}}catch(a){}rstudio.__softPermutationId=g;return D(l+oc)}
function G(){if(!o.__gwt_stylesLoaded){o.__gwt_stylesLoaded={}}r(pc,P);r(pc,qc)}
B();rstudio.__moduleBase=C();t[S].moduleBase=rstudio.__moduleBase;var H=F();if(o){var I=!!(o.location.protocol==rc||o.location.protocol==sc);o.__gwt_activeModules[S].canRedirect=I;function J(){var b=tc;try{o.sessionStorage.setItem(b,b);o.sessionStorage.removeItem(b);return true}catch(a){return false}}
if(I&&J()){var K=uc;var L=o.sessionStorage[K];if(!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(L)){if(L&&(window.console&&console.log)){console.log(vc+L)}L=bb}if(L&&!o[K]){o[K]=true;o[K+wc]=C();var M=p.createElement(jb);M.src=L;var N=p.getElementsByTagName(ob)[V];N.insertBefore(M,N.firstElementChild||N.children[V]);return false}}}G();r(O,qc);A(H);return true}
rstudio.succeeded=rstudio();