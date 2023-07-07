function Cg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function bg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var li={},Mg={get exports(){return li},set exports(e){li=e}},mo={},c={},Pg={get exports(){return c},set exports(e){c=e}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pi=Symbol.for("react.element"),zg=Symbol.for("react.portal"),Tg=Symbol.for("react.fragment"),Ig=Symbol.for("react.strict_mode"),Og=Symbol.for("react.profiler"),_g=Symbol.for("react.provider"),Rg=Symbol.for("react.context"),$g=Symbol.for("react.forward_ref"),Ng=Symbol.for("react.suspense"),Ag=Symbol.for("react.memo"),Bg=Symbol.for("react.lazy"),Ec=Symbol.iterator;function Dg(e){return e===null||typeof e!="object"?null:(e=Ec&&e[Ec]||e["@@iterator"],typeof e=="function"?e:null)}var ap={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},up=Object.assign,cp={};function Cr(e,t,n){this.props=e,this.context=t,this.refs=cp,this.updater=n||ap}Cr.prototype.isReactComponent={};Cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function dp(){}dp.prototype=Cr.prototype;function tu(e,t,n){this.props=e,this.context=t,this.refs=cp,this.updater=n||ap}var nu=tu.prototype=new dp;nu.constructor=tu;up(nu,Cr.prototype);nu.isPureReactComponent=!0;var Cc=Array.isArray,fp=Object.prototype.hasOwnProperty,ru={current:null},pp={key:!0,ref:!0,__self:!0,__source:!0};function mp(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)fp.call(t,r)&&!pp.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Pi,type:e,key:s,ref:o,props:i,_owner:ru.current}}function Fg(e,t){return{$$typeof:Pi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function iu(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pi}function jg(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var bc=/\/+/g;function sl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?jg(""+e.key):t.toString(36)}function hs(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Pi:case zg:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+sl(o,0):r,Cc(i)?(n="",e!=null&&(n=e.replace(bc,"$&/")+"/"),hs(i,t,n,"",function(u){return u})):i!=null&&(iu(i)&&(i=Fg(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(bc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Cc(e))for(var l=0;l<e.length;l++){s=e[l];var a=r+sl(s,l);o+=hs(s,t,n,a,i)}else if(a=Dg(e),typeof a=="function")for(e=a.call(e),l=0;!(s=e.next()).done;)s=s.value,a=r+sl(s,l++),o+=hs(s,t,n,a,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Vi(e,t,n){if(e==null)return e;var r=[],i=0;return hs(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Wg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Je={current:null},gs={transition:null},Ug={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:gs,ReactCurrentOwner:ru};fe.Children={map:Vi,forEach:function(e,t,n){Vi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Vi(e,function(){t++}),t},toArray:function(e){return Vi(e,function(t){return t})||[]},only:function(e){if(!iu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};fe.Component=Cr;fe.Fragment=Tg;fe.Profiler=Og;fe.PureComponent=tu;fe.StrictMode=Ig;fe.Suspense=Ng;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ug;fe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=up({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=ru.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)fp.call(t,a)&&!pp.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Pi,type:e.type,key:i,ref:s,props:r,_owner:o}};fe.createContext=function(e){return e={$$typeof:Rg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:_g,_context:e},e.Consumer=e};fe.createElement=mp;fe.createFactory=function(e){var t=mp.bind(null,e);return t.type=e,t};fe.createRef=function(){return{current:null}};fe.forwardRef=function(e){return{$$typeof:$g,render:e}};fe.isValidElement=iu;fe.lazy=function(e){return{$$typeof:Bg,_payload:{_status:-1,_result:e},_init:Wg}};fe.memo=function(e,t){return{$$typeof:Ag,type:e,compare:t===void 0?null:t}};fe.startTransition=function(e){var t=gs.transition;gs.transition={};try{e()}finally{gs.transition=t}};fe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};fe.useCallback=function(e,t){return Je.current.useCallback(e,t)};fe.useContext=function(e){return Je.current.useContext(e)};fe.useDebugValue=function(){};fe.useDeferredValue=function(e){return Je.current.useDeferredValue(e)};fe.useEffect=function(e,t){return Je.current.useEffect(e,t)};fe.useId=function(){return Je.current.useId()};fe.useImperativeHandle=function(e,t,n){return Je.current.useImperativeHandle(e,t,n)};fe.useInsertionEffect=function(e,t){return Je.current.useInsertionEffect(e,t)};fe.useLayoutEffect=function(e,t){return Je.current.useLayoutEffect(e,t)};fe.useMemo=function(e,t){return Je.current.useMemo(e,t)};fe.useReducer=function(e,t,n){return Je.current.useReducer(e,t,n)};fe.useRef=function(e){return Je.current.useRef(e)};fe.useState=function(e){return Je.current.useState(e)};fe.useSyncExternalStore=function(e,t,n){return Je.current.useSyncExternalStore(e,t,n)};fe.useTransition=function(){return Je.current.useTransition()};fe.version="18.2.0";(function(e){e.exports=fe})(Pg);const Ze=bg(c),jl=Cg({__proto__:null,default:Ze},[c]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg=c,Vg=Symbol.for("react.element"),Yg=Symbol.for("react.fragment"),Gg=Object.prototype.hasOwnProperty,Qg=Hg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zg={key:!0,ref:!0,__self:!0,__source:!0};function hp(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Gg.call(t,r)&&!Zg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Vg,type:e,key:s,ref:o,props:i,_owner:Qg.current}}mo.Fragment=Yg;mo.jsx=hp;mo.jsxs=hp;(function(e){e.exports=mo})(Mg);const ho=li.Fragment,L=li.jsx,R=li.jsxs;var Wl={},Kt={},Kg={get exports(){return Kt},set exports(e){Kt=e}},dt={},Ul={},Jg={get exports(){return Ul},set exports(e){Ul=e}},gp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,j){var Y=O.length;O.push(j);e:for(;0<Y;){var te=Y-1>>>1,A=O[te];if(0<i(A,j))O[te]=j,O[Y]=A,Y=te;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var j=O[0],Y=O.pop();if(Y!==j){O[0]=Y;e:for(var te=0,A=O.length,$=A>>>1;te<$;){var T=2*(te+1)-1,Q=O[T],z=T+1,B=O[z];if(0>i(Q,Y))z<A&&0>i(B,Q)?(O[te]=B,O[z]=Y,te=z):(O[te]=Q,O[T]=Y,te=T);else if(z<A&&0>i(B,Y))O[te]=B,O[z]=Y,te=z;else break e}}return j}function i(O,j){var Y=O.sortIndex-j.sortIndex;return Y!==0?Y:O.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var a=[],u=[],f=1,d=null,v=3,x=!1,p=!1,S=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=O)r(u),j.sortIndex=j.expirationTime,t(a,j);else break;j=n(u)}}function h(O){if(S=!1,y(O),!p)if(n(a)!==null)p=!0,G(b);else{var j=n(u);j!==null&&ee(h,j.startTime-O)}}function b(O,j){p=!1,S&&(S=!1,m(_),_=-1),x=!0;var Y=v;try{for(y(j),d=n(a);d!==null&&(!(d.expirationTime>j)||O&&!P());){var te=d.callback;if(typeof te=="function"){d.callback=null,v=d.priorityLevel;var A=te(d.expirationTime<=j);j=e.unstable_now(),typeof A=="function"?d.callback=A:d===n(a)&&r(a),y(j)}else r(a);d=n(a)}if(d!==null)var $=!0;else{var T=n(u);T!==null&&ee(h,T.startTime-j),$=!1}return $}finally{d=null,v=Y,x=!1}}var M=!1,I=null,_=-1,w=5,C=-1;function P(){return!(e.unstable_now()-C<w)}function D(){if(I!==null){var O=e.unstable_now();C=O;var j=!0;try{j=I(!0,O)}finally{j?V():(M=!1,I=null)}}else M=!1}var V;if(typeof g=="function")V=function(){g(D)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,H=U.port2;U.port1.onmessage=D,V=function(){H.postMessage(null)}}else V=function(){k(D,0)};function G(O){I=O,M||(M=!0,V())}function ee(O,j){_=k(function(){O(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){p||x||(p=!0,G(b))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(O){switch(v){case 1:case 2:case 3:var j=3;break;default:j=v}var Y=v;v=j;try{return O()}finally{v=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,j){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Y=v;v=O;try{return j()}finally{v=Y}},e.unstable_scheduleCallback=function(O,j,Y){var te=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?te+Y:te):Y=te,O){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=Y+A,O={id:f++,callback:j,priorityLevel:O,startTime:Y,expirationTime:A,sortIndex:-1},Y>te?(O.sortIndex=Y,t(u,O),n(a)===null&&O===n(u)&&(S?(m(_),_=-1):S=!0,ee(h,Y-te))):(O.sortIndex=A,t(a,O),p||x||(p=!0,G(b))),O},e.unstable_shouldYield=P,e.unstable_wrapCallback=function(O){var j=v;return function(){var Y=v;v=j;try{return O.apply(this,arguments)}finally{v=Y}}}})(gp);(function(e){e.exports=gp})(Jg);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp=c,ct=Ul;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yp=new Set,ai={};function Yn(e,t){hr(e,t),hr(e+"Capture",t)}function hr(e,t){for(ai[e]=t,e=0;e<t.length;e++)yp.add(t[e])}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hl=Object.prototype.hasOwnProperty,Xg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mc={},Pc={};function qg(e){return Hl.call(Pc,e)?!0:Hl.call(Mc,e)?!1:Xg.test(e)?Pc[e]=!0:(Mc[e]=!0,!1)}function e0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function t0(e,t,n,r){if(t===null||typeof t>"u"||e0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Xe(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ue[e]=new Xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ue[t]=new Xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ue[e]=new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ue[e]=new Xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ue[e]=new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ue[e]=new Xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ue[e]=new Xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ue[e]=new Xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ue[e]=new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var su=/[\-:]([a-z])/g;function ou(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(su,ou);Ue[t]=new Xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(su,ou);Ue[t]=new Xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(su,ou);Ue[t]=new Xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ue[e]=new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ue[e]=new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function lu(e,t,n,r){var i=Ue.hasOwnProperty(t)?Ue[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t0(t,n,i,r)&&(n=null),r||i===null?qg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tn=vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yi=Symbol.for("react.element"),Kn=Symbol.for("react.portal"),Jn=Symbol.for("react.fragment"),au=Symbol.for("react.strict_mode"),Vl=Symbol.for("react.profiler"),xp=Symbol.for("react.provider"),wp=Symbol.for("react.context"),uu=Symbol.for("react.forward_ref"),Yl=Symbol.for("react.suspense"),Gl=Symbol.for("react.suspense_list"),cu=Symbol.for("react.memo"),on=Symbol.for("react.lazy"),Sp=Symbol.for("react.offscreen"),zc=Symbol.iterator;function Rr(e){return e===null||typeof e!="object"?null:(e=zc&&e[zc]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Object.assign,ol;function Vr(e){if(ol===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ol=t&&t[1]||""}return`
`+ol+e}var ll=!1;function al(e,t){if(!e||ll)return"";ll=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=l);break}}}finally{ll=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Vr(e):""}function n0(e){switch(e.tag){case 5:return Vr(e.type);case 16:return Vr("Lazy");case 13:return Vr("Suspense");case 19:return Vr("SuspenseList");case 0:case 2:case 15:return e=al(e.type,!1),e;case 11:return e=al(e.type.render,!1),e;case 1:return e=al(e.type,!0),e;default:return""}}function Ql(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Jn:return"Fragment";case Kn:return"Portal";case Vl:return"Profiler";case au:return"StrictMode";case Yl:return"Suspense";case Gl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wp:return(e.displayName||"Context")+".Consumer";case xp:return(e._context.displayName||"Context")+".Provider";case uu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case cu:return t=e.displayName||null,t!==null?t:Ql(e.type)||"Memo";case on:t=e._payload,e=e._init;try{return Ql(e(t))}catch{}}return null}function r0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ql(t);case 8:return t===au?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function En(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Lp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function i0(e){var t=Lp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gi(e){e._valueTracker||(e._valueTracker=i0(e))}function kp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Lp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Rs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zl(e,t){var n=t.checked;return Pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Tc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=En(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ep(e,t){t=t.checked,t!=null&&lu(e,"checked",t,!1)}function Kl(e,t){Ep(e,t);var n=En(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Jl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Jl(e,t.type,En(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ic(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Jl(e,t,n){(t!=="number"||Rs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Yr=Array.isArray;function ur(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+En(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return Pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Oc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(F(92));if(Yr(n)){if(1<n.length)throw Error(F(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:En(n)}}function Cp(e,t){var n=En(t.value),r=En(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function _c(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ql(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Qi,Mp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Qi=Qi||document.createElement("div"),Qi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Qi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ui(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},s0=["Webkit","ms","Moz","O"];Object.keys(Zr).forEach(function(e){s0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zr[t]=Zr[e]})});function Pp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Zr.hasOwnProperty(e)&&Zr[e]?(""+t).trim():t+"px"}function zp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Pp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var o0=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ea(e,t){if(t){if(o0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function ta(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var na=null;function du(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ra=null,cr=null,dr=null;function Rc(e){if(e=Ii(e)){if(typeof ra!="function")throw Error(F(280));var t=e.stateNode;t&&(t=wo(t),ra(e.stateNode,e.type,t))}}function Tp(e){cr?dr?dr.push(e):dr=[e]:cr=e}function Ip(){if(cr){var e=cr,t=dr;if(dr=cr=null,Rc(e),t)for(e=0;e<t.length;e++)Rc(t[e])}}function Op(e,t){return e(t)}function _p(){}var ul=!1;function Rp(e,t,n){if(ul)return e(t,n);ul=!0;try{return Op(e,t,n)}finally{ul=!1,(cr!==null||dr!==null)&&(_p(),Ip())}}function ci(e,t){var n=e.stateNode;if(n===null)return null;var r=wo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(F(231,t,typeof n));return n}var ia=!1;if(Jt)try{var $r={};Object.defineProperty($r,"passive",{get:function(){ia=!0}}),window.addEventListener("test",$r,$r),window.removeEventListener("test",$r,$r)}catch{ia=!1}function l0(e,t,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Kr=!1,$s=null,Ns=!1,sa=null,a0={onError:function(e){Kr=!0,$s=e}};function u0(e,t,n,r,i,s,o,l,a){Kr=!1,$s=null,l0.apply(a0,arguments)}function c0(e,t,n,r,i,s,o,l,a){if(u0.apply(this,arguments),Kr){if(Kr){var u=$s;Kr=!1,$s=null}else throw Error(F(198));Ns||(Ns=!0,sa=u)}}function Gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function $p(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $c(e){if(Gn(e)!==e)throw Error(F(188))}function d0(e){var t=e.alternate;if(!t){if(t=Gn(e),t===null)throw Error(F(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return $c(i),e;if(s===r)return $c(i),t;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?e:t}function Np(e){return e=d0(e),e!==null?Ap(e):null}function Ap(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ap(e);if(t!==null)return t;e=e.sibling}return null}var Bp=ct.unstable_scheduleCallback,Nc=ct.unstable_cancelCallback,f0=ct.unstable_shouldYield,p0=ct.unstable_requestPaint,Ie=ct.unstable_now,m0=ct.unstable_getCurrentPriorityLevel,fu=ct.unstable_ImmediatePriority,Dp=ct.unstable_UserBlockingPriority,As=ct.unstable_NormalPriority,h0=ct.unstable_LowPriority,Fp=ct.unstable_IdlePriority,go=null,Ft=null;function g0(e){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(go,e,void 0,(e.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:x0,v0=Math.log,y0=Math.LN2;function x0(e){return e>>>=0,e===0?32:31-(v0(e)/y0|0)|0}var Zi=64,Ki=4194304;function Gr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bs(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Gr(l):(s&=o,s!==0&&(r=Gr(s)))}else o=n&~i,o!==0?r=Gr(o):s!==0&&(r=Gr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-zt(t),i=1<<n,r|=e[n],t&=~i;return r}function w0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function S0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-zt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=w0(l,t)):a<=t&&(e.expiredLanes|=l),s&=~l}}function oa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jp(){var e=Zi;return Zi<<=1,!(Zi&4194240)&&(Zi=64),e}function cl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function zi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-zt(t),e[t]=n}function L0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-zt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function pu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-zt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ye=0;function Wp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Up,mu,Hp,Vp,Yp,la=!1,Ji=[],pn=null,mn=null,hn=null,di=new Map,fi=new Map,an=[],k0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ac(e,t){switch(e){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":mn=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":di.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":fi.delete(t.pointerId)}}function Nr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Ii(t),t!==null&&mu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function E0(e,t,n,r,i){switch(t){case"focusin":return pn=Nr(pn,e,t,n,r,i),!0;case"dragenter":return mn=Nr(mn,e,t,n,r,i),!0;case"mouseover":return hn=Nr(hn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return di.set(s,Nr(di.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,fi.set(s,Nr(fi.get(s)||null,e,t,n,r,i)),!0}return!1}function Gp(e){var t=_n(e.target);if(t!==null){var n=Gn(t);if(n!==null){if(t=n.tag,t===13){if(t=$p(n),t!==null){e.blockedOn=t,Yp(e.priority,function(){Hp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=aa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);na=r,n.target.dispatchEvent(r),na=null}else return t=Ii(n),t!==null&&mu(t),e.blockedOn=n,!1;t.shift()}return!0}function Bc(e,t,n){vs(e)&&n.delete(t)}function C0(){la=!1,pn!==null&&vs(pn)&&(pn=null),mn!==null&&vs(mn)&&(mn=null),hn!==null&&vs(hn)&&(hn=null),di.forEach(Bc),fi.forEach(Bc)}function Ar(e,t){e.blockedOn===t&&(e.blockedOn=null,la||(la=!0,ct.unstable_scheduleCallback(ct.unstable_NormalPriority,C0)))}function pi(e){function t(i){return Ar(i,e)}if(0<Ji.length){Ar(Ji[0],e);for(var n=1;n<Ji.length;n++){var r=Ji[n];r.blockedOn===e&&(r.blockedOn=null)}}for(pn!==null&&Ar(pn,e),mn!==null&&Ar(mn,e),hn!==null&&Ar(hn,e),di.forEach(t),fi.forEach(t),n=0;n<an.length;n++)r=an[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<an.length&&(n=an[0],n.blockedOn===null);)Gp(n),n.blockedOn===null&&an.shift()}var fr=tn.ReactCurrentBatchConfig,Ds=!0;function b0(e,t,n,r){var i=ye,s=fr.transition;fr.transition=null;try{ye=1,hu(e,t,n,r)}finally{ye=i,fr.transition=s}}function M0(e,t,n,r){var i=ye,s=fr.transition;fr.transition=null;try{ye=4,hu(e,t,n,r)}finally{ye=i,fr.transition=s}}function hu(e,t,n,r){if(Ds){var i=aa(e,t,n,r);if(i===null)wl(e,t,r,Fs,n),Ac(e,r);else if(E0(i,e,t,n,r))r.stopPropagation();else if(Ac(e,r),t&4&&-1<k0.indexOf(e)){for(;i!==null;){var s=Ii(i);if(s!==null&&Up(s),s=aa(e,t,n,r),s===null&&wl(e,t,r,Fs,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else wl(e,t,r,null,n)}}var Fs=null;function aa(e,t,n,r){if(Fs=null,e=du(r),e=_n(e),e!==null)if(t=Gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=$p(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fs=e,null}function Qp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(m0()){case fu:return 1;case Dp:return 4;case As:case h0:return 16;case Fp:return 536870912;default:return 16}default:return 16}}var cn=null,gu=null,ys=null;function Zp(){if(ys)return ys;var e,t=gu,n=t.length,r,i="value"in cn?cn.value:cn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return ys=i.slice(e,1<r?1-r:void 0)}function xs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xi(){return!0}function Dc(){return!1}function ft(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xi:Dc,this.isPropagationStopped=Dc,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xi)},persist:function(){},isPersistent:Xi}),t}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vu=ft(br),Ti=Pe({},br,{view:0,detail:0}),P0=ft(Ti),dl,fl,Br,vo=Pe({},Ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Br&&(Br&&e.type==="mousemove"?(dl=e.screenX-Br.screenX,fl=e.screenY-Br.screenY):fl=dl=0,Br=e),dl)},movementY:function(e){return"movementY"in e?e.movementY:fl}}),Fc=ft(vo),z0=Pe({},vo,{dataTransfer:0}),T0=ft(z0),I0=Pe({},Ti,{relatedTarget:0}),pl=ft(I0),O0=Pe({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),_0=ft(O0),R0=Pe({},br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$0=ft(R0),N0=Pe({},br,{data:0}),jc=ft(N0),A0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},B0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},D0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=D0[e])?!!t[e]:!1}function yu(){return F0}var j0=Pe({},Ti,{key:function(e){if(e.key){var t=A0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?B0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yu,charCode:function(e){return e.type==="keypress"?xs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),W0=ft(j0),U0=Pe({},vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wc=ft(U0),H0=Pe({},Ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yu}),V0=ft(H0),Y0=Pe({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),G0=ft(Y0),Q0=Pe({},vo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Z0=ft(Q0),K0=[9,13,27,32],xu=Jt&&"CompositionEvent"in window,Jr=null;Jt&&"documentMode"in document&&(Jr=document.documentMode);var J0=Jt&&"TextEvent"in window&&!Jr,Kp=Jt&&(!xu||Jr&&8<Jr&&11>=Jr),Uc=String.fromCharCode(32),Hc=!1;function Jp(e,t){switch(e){case"keyup":return K0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xn=!1;function X0(e,t){switch(e){case"compositionend":return Xp(t);case"keypress":return t.which!==32?null:(Hc=!0,Uc);case"textInput":return e=t.data,e===Uc&&Hc?null:e;default:return null}}function q0(e,t){if(Xn)return e==="compositionend"||!xu&&Jp(e,t)?(e=Zp(),ys=gu=cn=null,Xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kp&&t.locale!=="ko"?null:t.data;default:return null}}var ev={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ev[e.type]:t==="textarea"}function qp(e,t,n,r){Tp(r),t=js(t,"onChange"),0<t.length&&(n=new vu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Xr=null,mi=null;function tv(e){cm(e,0)}function yo(e){var t=tr(e);if(kp(t))return e}function nv(e,t){if(e==="change")return t}var em=!1;if(Jt){var ml;if(Jt){var hl="oninput"in document;if(!hl){var Yc=document.createElement("div");Yc.setAttribute("oninput","return;"),hl=typeof Yc.oninput=="function"}ml=hl}else ml=!1;em=ml&&(!document.documentMode||9<document.documentMode)}function Gc(){Xr&&(Xr.detachEvent("onpropertychange",tm),mi=Xr=null)}function tm(e){if(e.propertyName==="value"&&yo(mi)){var t=[];qp(t,mi,e,du(e)),Rp(tv,t)}}function rv(e,t,n){e==="focusin"?(Gc(),Xr=t,mi=n,Xr.attachEvent("onpropertychange",tm)):e==="focusout"&&Gc()}function iv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yo(mi)}function sv(e,t){if(e==="click")return yo(t)}function ov(e,t){if(e==="input"||e==="change")return yo(t)}function lv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var It=typeof Object.is=="function"?Object.is:lv;function hi(e,t){if(It(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Hl.call(t,i)||!It(e[i],t[i]))return!1}return!0}function Qc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zc(e,t){var n=Qc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qc(n)}}function nm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rm(){for(var e=window,t=Rs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rs(e.document)}return t}function wu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function av(e){var t=rm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&nm(n.ownerDocument.documentElement,n)){if(r!==null&&wu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Zc(n,s);var o=Zc(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var uv=Jt&&"documentMode"in document&&11>=document.documentMode,qn=null,ua=null,qr=null,ca=!1;function Kc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ca||qn==null||qn!==Rs(r)||(r=qn,"selectionStart"in r&&wu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qr&&hi(qr,r)||(qr=r,r=js(ua,"onSelect"),0<r.length&&(t=new vu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qn)))}function qi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var er={animationend:qi("Animation","AnimationEnd"),animationiteration:qi("Animation","AnimationIteration"),animationstart:qi("Animation","AnimationStart"),transitionend:qi("Transition","TransitionEnd")},gl={},im={};Jt&&(im=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function xo(e){if(gl[e])return gl[e];if(!er[e])return e;var t=er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in im)return gl[e]=t[n];return e}var sm=xo("animationend"),om=xo("animationiteration"),lm=xo("animationstart"),am=xo("transitionend"),um=new Map,Jc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bn(e,t){um.set(e,t),Yn(t,[e])}for(var vl=0;vl<Jc.length;vl++){var yl=Jc[vl],cv=yl.toLowerCase(),dv=yl[0].toUpperCase()+yl.slice(1);bn(cv,"on"+dv)}bn(sm,"onAnimationEnd");bn(om,"onAnimationIteration");bn(lm,"onAnimationStart");bn("dblclick","onDoubleClick");bn("focusin","onFocus");bn("focusout","onBlur");bn(am,"onTransitionEnd");hr("onMouseEnter",["mouseout","mouseover"]);hr("onMouseLeave",["mouseout","mouseover"]);hr("onPointerEnter",["pointerout","pointerover"]);hr("onPointerLeave",["pointerout","pointerover"]);Yn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qr));function Xc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,c0(r,t,void 0,e),e.currentTarget=null}function cm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Xc(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Xc(i,l,u),s=a}}}if(Ns)throw e=sa,Ns=!1,sa=null,e}function Le(e,t){var n=t[ha];n===void 0&&(n=t[ha]=new Set);var r=e+"__bubble";n.has(r)||(dm(t,e,2,!1),n.add(r))}function xl(e,t,n){var r=0;t&&(r|=4),dm(n,e,r,t)}var es="_reactListening"+Math.random().toString(36).slice(2);function gi(e){if(!e[es]){e[es]=!0,yp.forEach(function(n){n!=="selectionchange"&&(fv.has(n)||xl(n,!1,e),xl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[es]||(t[es]=!0,xl("selectionchange",!1,t))}}function dm(e,t,n,r){switch(Qp(t)){case 1:var i=b0;break;case 4:i=M0;break;default:i=hu}n=i.bind(null,t,n,e),i=void 0,!ia||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function wl(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=_n(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Rp(function(){var u=s,f=du(n),d=[];e:{var v=um.get(e);if(v!==void 0){var x=vu,p=e;switch(e){case"keypress":if(xs(n)===0)break e;case"keydown":case"keyup":x=W0;break;case"focusin":p="focus",x=pl;break;case"focusout":p="blur",x=pl;break;case"beforeblur":case"afterblur":x=pl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Fc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=T0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=V0;break;case sm:case om:case lm:x=_0;break;case am:x=G0;break;case"scroll":x=P0;break;case"wheel":x=Z0;break;case"copy":case"cut":case"paste":x=$0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Wc}var S=(t&4)!==0,k=!S&&e==="scroll",m=S?v!==null?v+"Capture":null:v;S=[];for(var g=u,y;g!==null;){y=g;var h=y.stateNode;if(y.tag===5&&h!==null&&(y=h,m!==null&&(h=ci(g,m),h!=null&&S.push(vi(g,h,y)))),k)break;g=g.return}0<S.length&&(v=new x(v,p,null,n,f),d.push({event:v,listeners:S}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",v&&n!==na&&(p=n.relatedTarget||n.fromElement)&&(_n(p)||p[Xt]))break e;if((x||v)&&(v=f.window===f?f:(v=f.ownerDocument)?v.defaultView||v.parentWindow:window,x?(p=n.relatedTarget||n.toElement,x=u,p=p?_n(p):null,p!==null&&(k=Gn(p),p!==k||p.tag!==5&&p.tag!==6)&&(p=null)):(x=null,p=u),x!==p)){if(S=Fc,h="onMouseLeave",m="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(S=Wc,h="onPointerLeave",m="onPointerEnter",g="pointer"),k=x==null?v:tr(x),y=p==null?v:tr(p),v=new S(h,g+"leave",x,n,f),v.target=k,v.relatedTarget=y,h=null,_n(f)===u&&(S=new S(m,g+"enter",p,n,f),S.target=y,S.relatedTarget=k,h=S),k=h,x&&p)t:{for(S=x,m=p,g=0,y=S;y;y=Zn(y))g++;for(y=0,h=m;h;h=Zn(h))y++;for(;0<g-y;)S=Zn(S),g--;for(;0<y-g;)m=Zn(m),y--;for(;g--;){if(S===m||m!==null&&S===m.alternate)break t;S=Zn(S),m=Zn(m)}S=null}else S=null;x!==null&&qc(d,v,x,S,!1),p!==null&&k!==null&&qc(d,k,p,S,!0)}}e:{if(v=u?tr(u):window,x=v.nodeName&&v.nodeName.toLowerCase(),x==="select"||x==="input"&&v.type==="file")var b=nv;else if(Vc(v))if(em)b=ov;else{b=iv;var M=rv}else(x=v.nodeName)&&x.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(b=sv);if(b&&(b=b(e,u))){qp(d,b,n,f);break e}M&&M(e,v,u),e==="focusout"&&(M=v._wrapperState)&&M.controlled&&v.type==="number"&&Jl(v,"number",v.value)}switch(M=u?tr(u):window,e){case"focusin":(Vc(M)||M.contentEditable==="true")&&(qn=M,ua=u,qr=null);break;case"focusout":qr=ua=qn=null;break;case"mousedown":ca=!0;break;case"contextmenu":case"mouseup":case"dragend":ca=!1,Kc(d,n,f);break;case"selectionchange":if(uv)break;case"keydown":case"keyup":Kc(d,n,f)}var I;if(xu)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Xn?Jp(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Kp&&n.locale!=="ko"&&(Xn||_!=="onCompositionStart"?_==="onCompositionEnd"&&Xn&&(I=Zp()):(cn=f,gu="value"in cn?cn.value:cn.textContent,Xn=!0)),M=js(u,_),0<M.length&&(_=new jc(_,e,null,n,f),d.push({event:_,listeners:M}),I?_.data=I:(I=Xp(n),I!==null&&(_.data=I)))),(I=J0?X0(e,n):q0(e,n))&&(u=js(u,"onBeforeInput"),0<u.length&&(f=new jc("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=I))}cm(d,t)})}function vi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function js(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ci(e,n),s!=null&&r.unshift(vi(e,s,i)),s=ci(e,t),s!=null&&r.push(vi(e,s,i))),e=e.return}return r}function Zn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qc(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=ci(n,s),a!=null&&o.unshift(vi(n,a,l))):i||(a=ci(n,s),a!=null&&o.push(vi(n,a,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var pv=/\r\n?/g,mv=/\u0000|\uFFFD/g;function ed(e){return(typeof e=="string"?e:""+e).replace(pv,`
`).replace(mv,"")}function ts(e,t,n){if(t=ed(t),ed(e)!==t&&n)throw Error(F(425))}function Ws(){}var da=null,fa=null;function pa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ma=typeof setTimeout=="function"?setTimeout:void 0,hv=typeof clearTimeout=="function"?clearTimeout:void 0,td=typeof Promise=="function"?Promise:void 0,gv=typeof queueMicrotask=="function"?queueMicrotask:typeof td<"u"?function(e){return td.resolve(null).then(e).catch(vv)}:ma;function vv(e){setTimeout(function(){throw e})}function Sl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),pi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);pi(t)}function gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function nd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Mr=Math.random().toString(36).slice(2),Bt="__reactFiber$"+Mr,yi="__reactProps$"+Mr,Xt="__reactContainer$"+Mr,ha="__reactEvents$"+Mr,yv="__reactListeners$"+Mr,xv="__reactHandles$"+Mr;function _n(e){var t=e[Bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Xt]||n[Bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=nd(e);e!==null;){if(n=e[Bt])return n;e=nd(e)}return t}e=n,n=e.parentNode}return null}function Ii(e){return e=e[Bt]||e[Xt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function wo(e){return e[yi]||null}var ga=[],nr=-1;function Mn(e){return{current:e}}function ke(e){0>nr||(e.current=ga[nr],ga[nr]=null,nr--)}function Se(e,t){nr++,ga[nr]=e.current,e.current=t}var Cn={},Ge=Mn(Cn),rt=Mn(!1),Dn=Cn;function gr(e,t){var n=e.type.contextTypes;if(!n)return Cn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function it(e){return e=e.childContextTypes,e!=null}function Us(){ke(rt),ke(Ge)}function rd(e,t,n){if(Ge.current!==Cn)throw Error(F(168));Se(Ge,t),Se(rt,n)}function fm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(F(108,r0(e)||"Unknown",i));return Pe({},n,r)}function Hs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Cn,Dn=Ge.current,Se(Ge,e),Se(rt,rt.current),!0}function id(e,t,n){var r=e.stateNode;if(!r)throw Error(F(169));n?(e=fm(e,t,Dn),r.__reactInternalMemoizedMergedChildContext=e,ke(rt),ke(Ge),Se(Ge,e)):ke(rt),Se(rt,n)}var Ht=null,So=!1,Ll=!1;function pm(e){Ht===null?Ht=[e]:Ht.push(e)}function wv(e){So=!0,pm(e)}function Pn(){if(!Ll&&Ht!==null){Ll=!0;var e=0,t=ye;try{var n=Ht;for(ye=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ht=null,So=!1}catch(i){throw Ht!==null&&(Ht=Ht.slice(e+1)),Bp(fu,Pn),i}finally{ye=t,Ll=!1}}return null}var rr=[],ir=0,Vs=null,Ys=0,ht=[],gt=0,Fn=null,Yt=1,Gt="";function Tn(e,t){rr[ir++]=Ys,rr[ir++]=Vs,Vs=e,Ys=t}function mm(e,t,n){ht[gt++]=Yt,ht[gt++]=Gt,ht[gt++]=Fn,Fn=e;var r=Yt;e=Gt;var i=32-zt(r)-1;r&=~(1<<i),n+=1;var s=32-zt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yt=1<<32-zt(t)+i|n<<i|r,Gt=s+e}else Yt=1<<s|n<<i|r,Gt=e}function Su(e){e.return!==null&&(Tn(e,1),mm(e,1,0))}function Lu(e){for(;e===Vs;)Vs=rr[--ir],rr[ir]=null,Ys=rr[--ir],rr[ir]=null;for(;e===Fn;)Fn=ht[--gt],ht[gt]=null,Gt=ht[--gt],ht[gt]=null,Yt=ht[--gt],ht[gt]=null}var ut=null,at=null,Ce=!1,Mt=null;function hm(e,t){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function sd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ut=e,at=gn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ut=e,at=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Fn!==null?{id:Yt,overflow:Gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ut=e,at=null,!0):!1;default:return!1}}function va(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ya(e){if(Ce){var t=at;if(t){var n=t;if(!sd(e,t)){if(va(e))throw Error(F(418));t=gn(n.nextSibling);var r=ut;t&&sd(e,t)?hm(r,n):(e.flags=e.flags&-4097|2,Ce=!1,ut=e)}}else{if(va(e))throw Error(F(418));e.flags=e.flags&-4097|2,Ce=!1,ut=e}}}function od(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ut=e}function ns(e){if(e!==ut)return!1;if(!Ce)return od(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!pa(e.type,e.memoizedProps)),t&&(t=at)){if(va(e))throw gm(),Error(F(418));for(;t;)hm(e,t),t=gn(t.nextSibling)}if(od(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){at=gn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}at=null}}else at=ut?gn(e.stateNode.nextSibling):null;return!0}function gm(){for(var e=at;e;)e=gn(e.nextSibling)}function vr(){at=ut=null,Ce=!1}function ku(e){Mt===null?Mt=[e]:Mt.push(e)}var Sv=tn.ReactCurrentBatchConfig;function Ct(e,t){if(e&&e.defaultProps){t=Pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Gs=Mn(null),Qs=null,sr=null,Eu=null;function Cu(){Eu=sr=Qs=null}function bu(e){var t=Gs.current;ke(Gs),e._currentValue=t}function xa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pr(e,t){Qs=e,Eu=sr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(nt=!0),e.firstContext=null)}function wt(e){var t=e._currentValue;if(Eu!==e)if(e={context:e,memoizedValue:t,next:null},sr===null){if(Qs===null)throw Error(F(308));sr=e,Qs.dependencies={lanes:0,firstContext:e}}else sr=sr.next=e;return t}var Rn=null;function Mu(e){Rn===null?Rn=[e]:Rn.push(e)}function vm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Mu(t)):(n.next=i.next,i.next=n),t.interleaved=n,qt(e,r)}function qt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var ln=!1;function Pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ym(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function vn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,qt(e,n)}return i=r.interleaved,i===null?(t.next=t,Mu(r)):(t.next=i.next,i.next=t),r.interleaved=t,qt(e,n)}function ws(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pu(e,n)}}function ld(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Zs(e,t,n,r){var i=e.updateQueue;ln=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,f=u=a=null,l=s;do{var v=l.lane,x=l.eventTime;if((r&v)===v){f!==null&&(f=f.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var p=e,S=l;switch(v=t,x=n,S.tag){case 1:if(p=S.payload,typeof p=="function"){d=p.call(x,d,v);break e}d=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=S.payload,v=typeof p=="function"?p.call(x,d,v):p,v==null)break e;d=Pe({},d,v);break e;case 2:ln=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,v=i.effects,v===null?i.effects=[l]:v.push(l))}else x={eventTime:x,lane:v,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=x,a=d):f=f.next=x,o|=v;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;v=l,l=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(1);if(f===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Wn|=o,e.lanes=o,e.memoizedState=d}}function ad(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var xm=new vp.Component().refs;function wa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Lo={isMounted:function(e){return(e=e._reactInternals)?Gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=xn(e),s=Qt(r,i);s.payload=t,n!=null&&(s.callback=n),t=vn(e,s,i),t!==null&&(Tt(t,e,i,r),ws(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=xn(e),s=Qt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=vn(e,s,i),t!==null&&(Tt(t,e,i,r),ws(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ke(),r=xn(e),i=Qt(n,r);i.tag=2,t!=null&&(i.callback=t),t=vn(e,i,r),t!==null&&(Tt(t,e,r,n),ws(t,e,r))}};function ud(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!hi(n,r)||!hi(i,s):!0}function wm(e,t,n){var r=!1,i=Cn,s=t.contextType;return typeof s=="object"&&s!==null?s=wt(s):(i=it(t)?Dn:Ge.current,r=t.contextTypes,s=(r=r!=null)?gr(e,i):Cn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Lo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function cd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Lo.enqueueReplaceState(t,t.state,null)}function Sa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=xm,Pu(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=wt(s):(s=it(t)?Dn:Ge.current,i.context=gr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(wa(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Lo.enqueueReplaceState(i,i.state,null),Zs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Dr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;l===xm&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,e))}return e}function rs(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function dd(e){var t=e._init;return t(e._payload)}function Sm(e){function t(m,g){if(e){var y=m.deletions;y===null?(m.deletions=[g],m.flags|=16):y.push(g)}}function n(m,g){if(!e)return null;for(;g!==null;)t(m,g),g=g.sibling;return null}function r(m,g){for(m=new Map;g!==null;)g.key!==null?m.set(g.key,g):m.set(g.index,g),g=g.sibling;return m}function i(m,g){return m=wn(m,g),m.index=0,m.sibling=null,m}function s(m,g,y){return m.index=y,e?(y=m.alternate,y!==null?(y=y.index,y<g?(m.flags|=2,g):y):(m.flags|=2,g)):(m.flags|=1048576,g)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,g,y,h){return g===null||g.tag!==6?(g=zl(y,m.mode,h),g.return=m,g):(g=i(g,y),g.return=m,g)}function a(m,g,y,h){var b=y.type;return b===Jn?f(m,g,y.props.children,h,y.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===on&&dd(b)===g.type)?(h=i(g,y.props),h.ref=Dr(m,g,y),h.return=m,h):(h=bs(y.type,y.key,y.props,null,m.mode,h),h.ref=Dr(m,g,y),h.return=m,h)}function u(m,g,y,h){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=Tl(y,m.mode,h),g.return=m,g):(g=i(g,y.children||[]),g.return=m,g)}function f(m,g,y,h,b){return g===null||g.tag!==7?(g=Bn(y,m.mode,h,b),g.return=m,g):(g=i(g,y),g.return=m,g)}function d(m,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=zl(""+g,m.mode,y),g.return=m,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Yi:return y=bs(g.type,g.key,g.props,null,m.mode,y),y.ref=Dr(m,null,g),y.return=m,y;case Kn:return g=Tl(g,m.mode,y),g.return=m,g;case on:var h=g._init;return d(m,h(g._payload),y)}if(Yr(g)||Rr(g))return g=Bn(g,m.mode,y,null),g.return=m,g;rs(m,g)}return null}function v(m,g,y,h){var b=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return b!==null?null:l(m,g,""+y,h);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Yi:return y.key===b?a(m,g,y,h):null;case Kn:return y.key===b?u(m,g,y,h):null;case on:return b=y._init,v(m,g,b(y._payload),h)}if(Yr(y)||Rr(y))return b!==null?null:f(m,g,y,h,null);rs(m,y)}return null}function x(m,g,y,h,b){if(typeof h=="string"&&h!==""||typeof h=="number")return m=m.get(y)||null,l(g,m,""+h,b);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Yi:return m=m.get(h.key===null?y:h.key)||null,a(g,m,h,b);case Kn:return m=m.get(h.key===null?y:h.key)||null,u(g,m,h,b);case on:var M=h._init;return x(m,g,y,M(h._payload),b)}if(Yr(h)||Rr(h))return m=m.get(y)||null,f(g,m,h,b,null);rs(g,h)}return null}function p(m,g,y,h){for(var b=null,M=null,I=g,_=g=0,w=null;I!==null&&_<y.length;_++){I.index>_?(w=I,I=null):w=I.sibling;var C=v(m,I,y[_],h);if(C===null){I===null&&(I=w);break}e&&I&&C.alternate===null&&t(m,I),g=s(C,g,_),M===null?b=C:M.sibling=C,M=C,I=w}if(_===y.length)return n(m,I),Ce&&Tn(m,_),b;if(I===null){for(;_<y.length;_++)I=d(m,y[_],h),I!==null&&(g=s(I,g,_),M===null?b=I:M.sibling=I,M=I);return Ce&&Tn(m,_),b}for(I=r(m,I);_<y.length;_++)w=x(I,m,_,y[_],h),w!==null&&(e&&w.alternate!==null&&I.delete(w.key===null?_:w.key),g=s(w,g,_),M===null?b=w:M.sibling=w,M=w);return e&&I.forEach(function(P){return t(m,P)}),Ce&&Tn(m,_),b}function S(m,g,y,h){var b=Rr(y);if(typeof b!="function")throw Error(F(150));if(y=b.call(y),y==null)throw Error(F(151));for(var M=b=null,I=g,_=g=0,w=null,C=y.next();I!==null&&!C.done;_++,C=y.next()){I.index>_?(w=I,I=null):w=I.sibling;var P=v(m,I,C.value,h);if(P===null){I===null&&(I=w);break}e&&I&&P.alternate===null&&t(m,I),g=s(P,g,_),M===null?b=P:M.sibling=P,M=P,I=w}if(C.done)return n(m,I),Ce&&Tn(m,_),b;if(I===null){for(;!C.done;_++,C=y.next())C=d(m,C.value,h),C!==null&&(g=s(C,g,_),M===null?b=C:M.sibling=C,M=C);return Ce&&Tn(m,_),b}for(I=r(m,I);!C.done;_++,C=y.next())C=x(I,m,_,C.value,h),C!==null&&(e&&C.alternate!==null&&I.delete(C.key===null?_:C.key),g=s(C,g,_),M===null?b=C:M.sibling=C,M=C);return e&&I.forEach(function(D){return t(m,D)}),Ce&&Tn(m,_),b}function k(m,g,y,h){if(typeof y=="object"&&y!==null&&y.type===Jn&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Yi:e:{for(var b=y.key,M=g;M!==null;){if(M.key===b){if(b=y.type,b===Jn){if(M.tag===7){n(m,M.sibling),g=i(M,y.props.children),g.return=m,m=g;break e}}else if(M.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===on&&dd(b)===M.type){n(m,M.sibling),g=i(M,y.props),g.ref=Dr(m,M,y),g.return=m,m=g;break e}n(m,M);break}else t(m,M);M=M.sibling}y.type===Jn?(g=Bn(y.props.children,m.mode,h,y.key),g.return=m,m=g):(h=bs(y.type,y.key,y.props,null,m.mode,h),h.ref=Dr(m,g,y),h.return=m,m=h)}return o(m);case Kn:e:{for(M=y.key;g!==null;){if(g.key===M)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(m,g.sibling),g=i(g,y.children||[]),g.return=m,m=g;break e}else{n(m,g);break}else t(m,g);g=g.sibling}g=Tl(y,m.mode,h),g.return=m,m=g}return o(m);case on:return M=y._init,k(m,g,M(y._payload),h)}if(Yr(y))return p(m,g,y,h);if(Rr(y))return S(m,g,y,h);rs(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(m,g.sibling),g=i(g,y),g.return=m,m=g):(n(m,g),g=zl(y,m.mode,h),g.return=m,m=g),o(m)):n(m,g)}return k}var yr=Sm(!0),Lm=Sm(!1),Oi={},jt=Mn(Oi),xi=Mn(Oi),wi=Mn(Oi);function $n(e){if(e===Oi)throw Error(F(174));return e}function zu(e,t){switch(Se(wi,t),Se(xi,e),Se(jt,Oi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ql(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ql(t,e)}ke(jt),Se(jt,t)}function xr(){ke(jt),ke(xi),ke(wi)}function km(e){$n(wi.current);var t=$n(jt.current),n=ql(t,e.type);t!==n&&(Se(xi,e),Se(jt,n))}function Tu(e){xi.current===e&&(ke(jt),ke(xi))}var be=Mn(0);function Ks(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var kl=[];function Iu(){for(var e=0;e<kl.length;e++)kl[e]._workInProgressVersionPrimary=null;kl.length=0}var Ss=tn.ReactCurrentDispatcher,El=tn.ReactCurrentBatchConfig,jn=0,Me=null,_e=null,Be=null,Js=!1,ei=!1,Si=0,Lv=0;function He(){throw Error(F(321))}function Ou(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!It(e[n],t[n]))return!1;return!0}function _u(e,t,n,r,i,s){if(jn=s,Me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ss.current=e===null||e.memoizedState===null?bv:Mv,e=n(r,i),ei){s=0;do{if(ei=!1,Si=0,25<=s)throw Error(F(301));s+=1,Be=_e=null,t.updateQueue=null,Ss.current=Pv,e=n(r,i)}while(ei)}if(Ss.current=Xs,t=_e!==null&&_e.next!==null,jn=0,Be=_e=Me=null,Js=!1,t)throw Error(F(300));return e}function Ru(){var e=Si!==0;return Si=0,e}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Me.memoizedState=Be=e:Be=Be.next=e,Be}function St(){if(_e===null){var e=Me.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=Be===null?Me.memoizedState:Be.next;if(t!==null)Be=t,_e=e;else{if(e===null)throw Error(F(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Be===null?Me.memoizedState=Be=e:Be=Be.next=e}return Be}function Li(e,t){return typeof t=="function"?t(e):t}function Cl(e){var t=St(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=_e,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var f=u.lane;if((jn&f)===f)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,Me.lanes|=f,Wn|=f}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,It(r,t.memoizedState)||(nt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Me.lanes|=s,Wn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function bl(e){var t=St(),n=t.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);It(s,t.memoizedState)||(nt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Em(){}function Cm(e,t){var n=Me,r=St(),i=t(),s=!It(r.memoizedState,i);if(s&&(r.memoizedState=i,nt=!0),r=r.queue,$u(Pm.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,ki(9,Mm.bind(null,n,r,i,t),void 0,null),De===null)throw Error(F(349));jn&30||bm(n,t,i)}return i}function bm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Me.updateQueue,t===null?(t={lastEffect:null,stores:null},Me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Mm(e,t,n,r){t.value=n,t.getSnapshot=r,zm(t)&&Tm(e)}function Pm(e,t,n){return n(function(){zm(t)&&Tm(e)})}function zm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!It(e,n)}catch{return!0}}function Tm(e){var t=qt(e,1);t!==null&&Tt(t,e,1,-1)}function fd(e){var t=At();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:e},t.queue=e,e=e.dispatch=Cv.bind(null,Me,e),[t.memoizedState,e]}function ki(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Me.updateQueue,t===null?(t={lastEffect:null,stores:null},Me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Im(){return St().memoizedState}function Ls(e,t,n,r){var i=At();Me.flags|=e,i.memoizedState=ki(1|t,n,void 0,r===void 0?null:r)}function ko(e,t,n,r){var i=St();r=r===void 0?null:r;var s=void 0;if(_e!==null){var o=_e.memoizedState;if(s=o.destroy,r!==null&&Ou(r,o.deps)){i.memoizedState=ki(t,n,s,r);return}}Me.flags|=e,i.memoizedState=ki(1|t,n,s,r)}function pd(e,t){return Ls(8390656,8,e,t)}function $u(e,t){return ko(2048,8,e,t)}function Om(e,t){return ko(4,2,e,t)}function _m(e,t){return ko(4,4,e,t)}function Rm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function $m(e,t,n){return n=n!=null?n.concat([e]):null,ko(4,4,Rm.bind(null,t,e),n)}function Nu(){}function Nm(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ou(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Am(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ou(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Bm(e,t,n){return jn&21?(It(n,t)||(n=jp(),Me.lanes|=n,Wn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,nt=!0),e.memoizedState=n)}function kv(e,t){var n=ye;ye=n!==0&&4>n?n:4,e(!0);var r=El.transition;El.transition={};try{e(!1),t()}finally{ye=n,El.transition=r}}function Dm(){return St().memoizedState}function Ev(e,t,n){var r=xn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fm(e))jm(t,n);else if(n=vm(e,t,n,r),n!==null){var i=Ke();Tt(n,e,r,i),Wm(n,t,r)}}function Cv(e,t,n){var r=xn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fm(e))jm(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,It(l,o)){var a=t.interleaved;a===null?(i.next=i,Mu(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=vm(e,t,i,r),n!==null&&(i=Ke(),Tt(n,e,r,i),Wm(n,t,r))}}function Fm(e){var t=e.alternate;return e===Me||t!==null&&t===Me}function jm(e,t){ei=Js=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pu(e,n)}}var Xs={readContext:wt,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},bv={readContext:wt,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:pd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ls(4194308,4,Rm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ls(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ls(4,2,e,t)},useMemo:function(e,t){var n=At();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=At();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ev.bind(null,Me,e),[r.memoizedState,e]},useRef:function(e){var t=At();return e={current:e},t.memoizedState=e},useState:fd,useDebugValue:Nu,useDeferredValue:function(e){return At().memoizedState=e},useTransition:function(){var e=fd(!1),t=e[0];return e=kv.bind(null,e[1]),At().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Me,i=At();if(Ce){if(n===void 0)throw Error(F(407));n=n()}else{if(n=t(),De===null)throw Error(F(349));jn&30||bm(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,pd(Pm.bind(null,r,s,e),[e]),r.flags|=2048,ki(9,Mm.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=At(),t=De.identifierPrefix;if(Ce){var n=Gt,r=Yt;n=(r&~(1<<32-zt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Si++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Lv++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Mv={readContext:wt,useCallback:Nm,useContext:wt,useEffect:$u,useImperativeHandle:$m,useInsertionEffect:Om,useLayoutEffect:_m,useMemo:Am,useReducer:Cl,useRef:Im,useState:function(){return Cl(Li)},useDebugValue:Nu,useDeferredValue:function(e){var t=St();return Bm(t,_e.memoizedState,e)},useTransition:function(){var e=Cl(Li)[0],t=St().memoizedState;return[e,t]},useMutableSource:Em,useSyncExternalStore:Cm,useId:Dm,unstable_isNewReconciler:!1},Pv={readContext:wt,useCallback:Nm,useContext:wt,useEffect:$u,useImperativeHandle:$m,useInsertionEffect:Om,useLayoutEffect:_m,useMemo:Am,useReducer:bl,useRef:Im,useState:function(){return bl(Li)},useDebugValue:Nu,useDeferredValue:function(e){var t=St();return _e===null?t.memoizedState=e:Bm(t,_e.memoizedState,e)},useTransition:function(){var e=bl(Li)[0],t=St().memoizedState;return[e,t]},useMutableSource:Em,useSyncExternalStore:Cm,useId:Dm,unstable_isNewReconciler:!1};function wr(e,t){try{var n="",r=t;do n+=n0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Ml(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function La(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var zv=typeof WeakMap=="function"?WeakMap:Map;function Um(e,t,n){n=Qt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){eo||(eo=!0,Oa=r),La(e,t)},n}function Hm(e,t,n){n=Qt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){La(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){La(e,t),typeof r!="function"&&(yn===null?yn=new Set([this]):yn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function md(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Uv.bind(null,e,t,n),t.then(e,e))}function hd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function gd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qt(-1,1),t.tag=2,vn(n,t,1))),n.lanes|=1),e)}var Tv=tn.ReactCurrentOwner,nt=!1;function Qe(e,t,n,r){t.child=e===null?Lm(t,null,n,r):yr(t,e.child,n,r)}function vd(e,t,n,r,i){n=n.render;var s=t.ref;return pr(t,i),r=_u(e,t,n,r,s,i),n=Ru(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,en(e,t,i)):(Ce&&n&&Su(t),t.flags|=1,Qe(e,t,r,i),t.child)}function yd(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Hu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Vm(e,t,s,r,i)):(e=bs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:hi,n(o,r)&&e.ref===t.ref)return en(e,t,i)}return t.flags|=1,e=wn(s,r),e.ref=t.ref,e.return=t,t.child=e}function Vm(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(hi(s,r)&&e.ref===t.ref)if(nt=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(nt=!0);else return t.lanes=e.lanes,en(e,t,i)}return ka(e,t,n,r,i)}function Ym(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(lr,lt),lt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Se(lr,lt),lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Se(lr,lt),lt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Se(lr,lt),lt|=r;return Qe(e,t,i,n),t.child}function Gm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ka(e,t,n,r,i){var s=it(n)?Dn:Ge.current;return s=gr(t,s),pr(t,i),n=_u(e,t,n,r,s,i),r=Ru(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,en(e,t,i)):(Ce&&r&&Su(t),t.flags|=1,Qe(e,t,n,i),t.child)}function xd(e,t,n,r,i){if(it(n)){var s=!0;Hs(t)}else s=!1;if(pr(t,i),t.stateNode===null)ks(e,t),wm(t,n,r),Sa(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=wt(u):(u=it(n)?Dn:Ge.current,u=gr(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&cd(t,o,r,u),ln=!1;var v=t.memoizedState;o.state=v,Zs(t,r,o,i),a=t.memoizedState,l!==r||v!==a||rt.current||ln?(typeof f=="function"&&(wa(t,n,f,r),a=t.memoizedState),(l=ln||ud(t,n,l,r,v,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ym(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Ct(t.type,l),o.props=u,d=t.pendingProps,v=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=wt(a):(a=it(n)?Dn:Ge.current,a=gr(t,a));var x=n.getDerivedStateFromProps;(f=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||v!==a)&&cd(t,o,r,a),ln=!1,v=t.memoizedState,o.state=v,Zs(t,r,o,i);var p=t.memoizedState;l!==d||v!==p||rt.current||ln?(typeof x=="function"&&(wa(t,n,x,r),p=t.memoizedState),(u=ln||ud(t,n,u,r,v,p,a)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,p,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,p,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Ea(e,t,n,r,s,i)}function Ea(e,t,n,r,i,s){Gm(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&id(t,n,!1),en(e,t,s);r=t.stateNode,Tv.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=yr(t,e.child,null,s),t.child=yr(t,null,l,s)):Qe(e,t,l,s),t.memoizedState=r.state,i&&id(t,n,!0),t.child}function Qm(e){var t=e.stateNode;t.pendingContext?rd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&rd(e,t.context,!1),zu(e,t.containerInfo)}function wd(e,t,n,r,i){return vr(),ku(i),t.flags|=256,Qe(e,t,n,r),t.child}var Ca={dehydrated:null,treeContext:null,retryLane:0};function ba(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zm(e,t,n){var r=t.pendingProps,i=be.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Se(be,i&1),e===null)return ya(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bo(o,r,0,null),e=Bn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=ba(n),t.memoizedState=Ca,e):Au(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Iv(e,t,o,r,l,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=wn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=wn(l,s):(s=Bn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?ba(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Ca,r}return s=e.child,e=s.sibling,r=wn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Au(e,t){return t=bo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function is(e,t,n,r){return r!==null&&ku(r),yr(t,e.child,null,n),e=Au(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Iv(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Ml(Error(F(422))),is(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=bo({mode:"visible",children:r.children},i,0,null),s=Bn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&yr(t,e.child,null,o),t.child.memoizedState=ba(o),t.memoizedState=Ca,s);if(!(t.mode&1))return is(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=Ml(s,r,void 0),is(e,t,o,r)}if(l=(o&e.childLanes)!==0,nt||l){if(r=De,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,qt(e,i),Tt(r,e,i,-1))}return Uu(),r=Ml(Error(F(421))),is(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Hv.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,at=gn(i.nextSibling),ut=t,Ce=!0,Mt=null,e!==null&&(ht[gt++]=Yt,ht[gt++]=Gt,ht[gt++]=Fn,Yt=e.id,Gt=e.overflow,Fn=t),t=Au(t,r.children),t.flags|=4096,t)}function Sd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),xa(e.return,t,n)}function Pl(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Km(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Qe(e,t,r.children,n),r=be.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sd(e,n,t);else if(e.tag===19)Sd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Se(be,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ks(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Pl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ks(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Pl(t,!0,n,null,s);break;case"together":Pl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ks(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function en(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,n=wn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=wn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ov(e,t,n){switch(t.tag){case 3:Qm(t),vr();break;case 5:km(t);break;case 1:it(t.type)&&Hs(t);break;case 4:zu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Se(Gs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Se(be,be.current&1),t.flags|=128,null):n&t.child.childLanes?Zm(e,t,n):(Se(be,be.current&1),e=en(e,t,n),e!==null?e.sibling:null);Se(be,be.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Km(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(be,be.current),r)break;return null;case 22:case 23:return t.lanes=0,Ym(e,t,n)}return en(e,t,n)}var Jm,Ma,Xm,qm;Jm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ma=function(){};Xm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,$n(jt.current);var s=null;switch(n){case"input":i=Zl(e,i),r=Zl(e,r),s=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),s=[];break;case"textarea":i=Xl(e,i),r=Xl(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ws)}ea(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ai.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ai.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&Le("scroll",e),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};qm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fr(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function _v(e,t,n){var r=t.pendingProps;switch(Lu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return it(t.type)&&Us(),Ve(t),null;case 3:return r=t.stateNode,xr(),ke(rt),ke(Ge),Iu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ns(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Mt!==null&&($a(Mt),Mt=null))),Ma(e,t),Ve(t),null;case 5:Tu(t);var i=$n(wi.current);if(n=t.type,e!==null&&t.stateNode!=null)Xm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(F(166));return Ve(t),null}if(e=$n(jt.current),ns(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Bt]=t,r[yi]=s,e=(t.mode&1)!==0,n){case"dialog":Le("cancel",r),Le("close",r);break;case"iframe":case"object":case"embed":Le("load",r);break;case"video":case"audio":for(i=0;i<Qr.length;i++)Le(Qr[i],r);break;case"source":Le("error",r);break;case"img":case"image":case"link":Le("error",r),Le("load",r);break;case"details":Le("toggle",r);break;case"input":Tc(r,s),Le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Le("invalid",r);break;case"textarea":Oc(r,s),Le("invalid",r)}ea(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ts(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ts(r.textContent,l,e),i=["children",""+l]):ai.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Le("scroll",r)}switch(n){case"input":Gi(r),Ic(r,s,!0);break;case"textarea":Gi(r),_c(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ws)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Bt]=t,e[yi]=r,Jm(e,t,!1,!1),t.stateNode=e;e:{switch(o=ta(n,r),n){case"dialog":Le("cancel",e),Le("close",e),i=r;break;case"iframe":case"object":case"embed":Le("load",e),i=r;break;case"video":case"audio":for(i=0;i<Qr.length;i++)Le(Qr[i],e);i=r;break;case"source":Le("error",e),i=r;break;case"img":case"image":case"link":Le("error",e),Le("load",e),i=r;break;case"details":Le("toggle",e),i=r;break;case"input":Tc(e,r),i=Zl(e,r),Le("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),Le("invalid",e);break;case"textarea":Oc(e,r),i=Xl(e,r),Le("invalid",e);break;default:i=r}ea(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?zp(e,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Mp(e,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ui(e,a):typeof a=="number"&&ui(e,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ai.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Le("scroll",e):a!=null&&lu(e,s,a,o))}switch(n){case"input":Gi(e),Ic(e,r,!1);break;case"textarea":Gi(e),_c(e);break;case"option":r.value!=null&&e.setAttribute("value",""+En(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?ur(e,!!r.multiple,s,!1):r.defaultValue!=null&&ur(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ws)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ve(t),null;case 6:if(e&&t.stateNode!=null)qm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(F(166));if(n=$n(wi.current),$n(jt.current),ns(t)){if(r=t.stateNode,n=t.memoizedProps,r[Bt]=t,(s=r.nodeValue!==n)&&(e=ut,e!==null))switch(e.tag){case 3:ts(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ts(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Bt]=t,t.stateNode=r}return Ve(t),null;case 13:if(ke(be),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&at!==null&&t.mode&1&&!(t.flags&128))gm(),vr(),t.flags|=98560,s=!1;else if(s=ns(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(F(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[Bt]=t}else vr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ve(t),s=!1}else Mt!==null&&($a(Mt),Mt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||be.current&1?Re===0&&(Re=3):Uu())),t.updateQueue!==null&&(t.flags|=4),Ve(t),null);case 4:return xr(),Ma(e,t),e===null&&gi(t.stateNode.containerInfo),Ve(t),null;case 10:return bu(t.type._context),Ve(t),null;case 17:return it(t.type)&&Us(),Ve(t),null;case 19:if(ke(be),s=t.memoizedState,s===null)return Ve(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Fr(s,!1);else{if(Re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ks(e),o!==null){for(t.flags|=128,Fr(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Se(be,be.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ie()>Sr&&(t.flags|=128,r=!0,Fr(s,!1),t.lanes=4194304)}else{if(!r)if(e=Ks(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return Ve(t),null}else 2*Ie()-s.renderingStartTime>Sr&&n!==1073741824&&(t.flags|=128,r=!0,Fr(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ie(),t.sibling=null,n=be.current,Se(be,r?n&1|2:n&1),t):(Ve(t),null);case 22:case 23:return Wu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?lt&1073741824&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function Rv(e,t){switch(Lu(t),t.tag){case 1:return it(t.type)&&Us(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xr(),ke(rt),ke(Ge),Iu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Tu(t),null;case 13:if(ke(be),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));vr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ke(be),null;case 4:return xr(),null;case 10:return bu(t.type._context),null;case 22:case 23:return Wu(),null;case 24:return null;default:return null}}var ss=!1,Ye=!1,$v=typeof WeakSet=="function"?WeakSet:Set,K=null;function or(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function Pa(e,t,n){try{n()}catch(r){Te(e,t,r)}}var Ld=!1;function Nv(e,t){if(da=Ds,e=rm(),wu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,f=0,d=e,v=null;t:for(;;){for(var x;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(x=d.firstChild)!==null;)v=d,d=x;for(;;){if(d===e)break t;if(v===n&&++u===i&&(l=o),v===s&&++f===r&&(a=o),(x=d.nextSibling)!==null)break;d=v,v=d.parentNode}d=x}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(fa={focusedElem:e,selectionRange:n},Ds=!1,K=t;K!==null;)if(t=K,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var p=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var S=p.memoizedProps,k=p.memoizedState,m=t.stateNode,g=m.getSnapshotBeforeUpdate(t.elementType===t.type?S:Ct(t.type,S),k);m.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(h){Te(t,t.return,h)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return p=Ld,Ld=!1,p}function ti(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Pa(t,n,s)}i=i.next}while(i!==r)}}function Eo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function za(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function eh(e){var t=e.alternate;t!==null&&(e.alternate=null,eh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Bt],delete t[yi],delete t[ha],delete t[yv],delete t[xv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function th(e){return e.tag===5||e.tag===3||e.tag===4}function kd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||th(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ta(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ws));else if(r!==4&&(e=e.child,e!==null))for(Ta(e,t,n),e=e.sibling;e!==null;)Ta(e,t,n),e=e.sibling}function Ia(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ia(e,t,n),e=e.sibling;e!==null;)Ia(e,t,n),e=e.sibling}var je=null,bt=!1;function rn(e,t,n){for(n=n.child;n!==null;)nh(e,t,n),n=n.sibling}function nh(e,t,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(go,n)}catch{}switch(n.tag){case 5:Ye||or(n,t);case 6:var r=je,i=bt;je=null,rn(e,t,n),je=r,bt=i,je!==null&&(bt?(e=je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(bt?(e=je,n=n.stateNode,e.nodeType===8?Sl(e.parentNode,n):e.nodeType===1&&Sl(e,n),pi(e)):Sl(je,n.stateNode));break;case 4:r=je,i=bt,je=n.stateNode.containerInfo,bt=!0,rn(e,t,n),je=r,bt=i;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Pa(n,t,o),i=i.next}while(i!==r)}rn(e,t,n);break;case 1:if(!Ye&&(or(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Te(n,t,l)}rn(e,t,n);break;case 21:rn(e,t,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,rn(e,t,n),Ye=r):rn(e,t,n);break;default:rn(e,t,n)}}function Ed(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new $v),t.forEach(function(r){var i=Vv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Et(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:je=l.stateNode,bt=!1;break e;case 3:je=l.stateNode.containerInfo,bt=!0;break e;case 4:je=l.stateNode.containerInfo,bt=!0;break e}l=l.return}if(je===null)throw Error(F(160));nh(s,o,i),je=null,bt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){Te(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)rh(t,e),t=t.sibling}function rh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Et(t,e),Rt(e),r&4){try{ti(3,e,e.return),Eo(3,e)}catch(S){Te(e,e.return,S)}try{ti(5,e,e.return)}catch(S){Te(e,e.return,S)}}break;case 1:Et(t,e),Rt(e),r&512&&n!==null&&or(n,n.return);break;case 5:if(Et(t,e),Rt(e),r&512&&n!==null&&or(n,n.return),e.flags&32){var i=e.stateNode;try{ui(i,"")}catch(S){Te(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Ep(i,s),ta(l,o);var u=ta(l,s);for(o=0;o<a.length;o+=2){var f=a[o],d=a[o+1];f==="style"?zp(i,d):f==="dangerouslySetInnerHTML"?Mp(i,d):f==="children"?ui(i,d):lu(i,f,d,u)}switch(l){case"input":Kl(i,s);break;case"textarea":Cp(i,s);break;case"select":var v=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?ur(i,!!s.multiple,x,!1):v!==!!s.multiple&&(s.defaultValue!=null?ur(i,!!s.multiple,s.defaultValue,!0):ur(i,!!s.multiple,s.multiple?[]:"",!1))}i[yi]=s}catch(S){Te(e,e.return,S)}}break;case 6:if(Et(t,e),Rt(e),r&4){if(e.stateNode===null)throw Error(F(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(S){Te(e,e.return,S)}}break;case 3:if(Et(t,e),Rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{pi(t.containerInfo)}catch(S){Te(e,e.return,S)}break;case 4:Et(t,e),Rt(e);break;case 13:Et(t,e),Rt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Fu=Ie())),r&4&&Ed(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Ye=(u=Ye)||f,Et(t,e),Ye=u):Et(t,e),Rt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(K=e,f=e.child;f!==null;){for(d=K=f;K!==null;){switch(v=K,x=v.child,v.tag){case 0:case 11:case 14:case 15:ti(4,v,v.return);break;case 1:or(v,v.return);var p=v.stateNode;if(typeof p.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(S){Te(r,n,S)}}break;case 5:or(v,v.return);break;case 22:if(v.memoizedState!==null){bd(d);continue}}x!==null?(x.return=v,K=x):bd(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Pp("display",o))}catch(S){Te(e,e.return,S)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(S){Te(e,e.return,S)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Et(t,e),Rt(e),r&4&&Ed(e);break;case 21:break;default:Et(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(th(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ui(i,""),r.flags&=-33);var s=kd(e);Ia(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=kd(e);Ta(e,l,o);break;default:throw Error(F(161))}}catch(a){Te(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Av(e,t,n){K=e,ih(e)}function ih(e,t,n){for(var r=(e.mode&1)!==0;K!==null;){var i=K,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ss;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ye;l=ss;var u=Ye;if(ss=o,(Ye=a)&&!u)for(K=i;K!==null;)o=K,a=o.child,o.tag===22&&o.memoizedState!==null?Md(i):a!==null?(a.return=o,K=a):Md(i);for(;s!==null;)K=s,ih(s),s=s.sibling;K=i,ss=l,Ye=u}Cd(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,K=s):Cd(e)}}function Cd(e){for(;K!==null;){var t=K;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ye||Eo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ct(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&ad(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ad(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&pi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Ye||t.flags&512&&za(t)}catch(v){Te(t,t.return,v)}}if(t===e){K=null;break}if(n=t.sibling,n!==null){n.return=t.return,K=n;break}K=t.return}}function bd(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var n=t.sibling;if(n!==null){n.return=t.return,K=n;break}K=t.return}}function Md(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Eo(4,t)}catch(a){Te(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){Te(t,i,a)}}var s=t.return;try{za(t)}catch(a){Te(t,s,a)}break;case 5:var o=t.return;try{za(t)}catch(a){Te(t,o,a)}}}catch(a){Te(t,t.return,a)}if(t===e){K=null;break}var l=t.sibling;if(l!==null){l.return=t.return,K=l;break}K=t.return}}var Bv=Math.ceil,qs=tn.ReactCurrentDispatcher,Bu=tn.ReactCurrentOwner,yt=tn.ReactCurrentBatchConfig,ge=0,De=null,Oe=null,We=0,lt=0,lr=Mn(0),Re=0,Ei=null,Wn=0,Co=0,Du=0,ni=null,tt=null,Fu=0,Sr=1/0,Ut=null,eo=!1,Oa=null,yn=null,os=!1,dn=null,to=0,ri=0,_a=null,Es=-1,Cs=0;function Ke(){return ge&6?Ie():Es!==-1?Es:Es=Ie()}function xn(e){return e.mode&1?ge&2&&We!==0?We&-We:Sv.transition!==null?(Cs===0&&(Cs=jp()),Cs):(e=ye,e!==0||(e=window.event,e=e===void 0?16:Qp(e.type)),e):1}function Tt(e,t,n,r){if(50<ri)throw ri=0,_a=null,Error(F(185));zi(e,n,r),(!(ge&2)||e!==De)&&(e===De&&(!(ge&2)&&(Co|=n),Re===4&&un(e,We)),st(e,r),n===1&&ge===0&&!(t.mode&1)&&(Sr=Ie()+500,So&&Pn()))}function st(e,t){var n=e.callbackNode;S0(e,t);var r=Bs(e,e===De?We:0);if(r===0)n!==null&&Nc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Nc(n),t===1)e.tag===0?wv(Pd.bind(null,e)):pm(Pd.bind(null,e)),gv(function(){!(ge&6)&&Pn()}),n=null;else{switch(Wp(r)){case 1:n=fu;break;case 4:n=Dp;break;case 16:n=As;break;case 536870912:n=Fp;break;default:n=As}n=fh(n,sh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function sh(e,t){if(Es=-1,Cs=0,ge&6)throw Error(F(327));var n=e.callbackNode;if(mr()&&e.callbackNode!==n)return null;var r=Bs(e,e===De?We:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=no(e,r);else{t=r;var i=ge;ge|=2;var s=lh();(De!==e||We!==t)&&(Ut=null,Sr=Ie()+500,An(e,t));do try{jv();break}catch(l){oh(e,l)}while(1);Cu(),qs.current=s,ge=i,Oe!==null?t=0:(De=null,We=0,t=Re)}if(t!==0){if(t===2&&(i=oa(e),i!==0&&(r=i,t=Ra(e,i))),t===1)throw n=Ei,An(e,0),un(e,r),st(e,Ie()),n;if(t===6)un(e,r);else{if(i=e.current.alternate,!(r&30)&&!Dv(i)&&(t=no(e,r),t===2&&(s=oa(e),s!==0&&(r=s,t=Ra(e,s))),t===1))throw n=Ei,An(e,0),un(e,r),st(e,Ie()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(F(345));case 2:In(e,tt,Ut);break;case 3:if(un(e,r),(r&130023424)===r&&(t=Fu+500-Ie(),10<t)){if(Bs(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ma(In.bind(null,e,tt,Ut),t);break}In(e,tt,Ut);break;case 4:if(un(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-zt(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Bv(r/1960))-r,10<r){e.timeoutHandle=ma(In.bind(null,e,tt,Ut),r);break}In(e,tt,Ut);break;case 5:In(e,tt,Ut);break;default:throw Error(F(329))}}}return st(e,Ie()),e.callbackNode===n?sh.bind(null,e):null}function Ra(e,t){var n=ni;return e.current.memoizedState.isDehydrated&&(An(e,t).flags|=256),e=no(e,t),e!==2&&(t=tt,tt=n,t!==null&&$a(t)),e}function $a(e){tt===null?tt=e:tt.push.apply(tt,e)}function Dv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!It(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function un(e,t){for(t&=~Du,t&=~Co,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-zt(t),r=1<<n;e[n]=-1,t&=~r}}function Pd(e){if(ge&6)throw Error(F(327));mr();var t=Bs(e,0);if(!(t&1))return st(e,Ie()),null;var n=no(e,t);if(e.tag!==0&&n===2){var r=oa(e);r!==0&&(t=r,n=Ra(e,r))}if(n===1)throw n=Ei,An(e,0),un(e,t),st(e,Ie()),n;if(n===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,In(e,tt,Ut),st(e,Ie()),null}function ju(e,t){var n=ge;ge|=1;try{return e(t)}finally{ge=n,ge===0&&(Sr=Ie()+500,So&&Pn())}}function Un(e){dn!==null&&dn.tag===0&&!(ge&6)&&mr();var t=ge;ge|=1;var n=yt.transition,r=ye;try{if(yt.transition=null,ye=1,e)return e()}finally{ye=r,yt.transition=n,ge=t,!(ge&6)&&Pn()}}function Wu(){lt=lr.current,ke(lr)}function An(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,hv(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(Lu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Us();break;case 3:xr(),ke(rt),ke(Ge),Iu();break;case 5:Tu(r);break;case 4:xr();break;case 13:ke(be);break;case 19:ke(be);break;case 10:bu(r.type._context);break;case 22:case 23:Wu()}n=n.return}if(De=e,Oe=e=wn(e.current,null),We=lt=t,Re=0,Ei=null,Du=Co=Wn=0,tt=ni=null,Rn!==null){for(t=0;t<Rn.length;t++)if(n=Rn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Rn=null}return e}function oh(e,t){do{var n=Oe;try{if(Cu(),Ss.current=Xs,Js){for(var r=Me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Js=!1}if(jn=0,Be=_e=Me=null,ei=!1,Si=0,Bu.current=null,n===null||n.return===null){Re=1,Ei=t,Oe=null;break}e:{var s=e,o=n.return,l=n,a=t;if(t=We,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var v=f.alternate;v?(f.updateQueue=v.updateQueue,f.memoizedState=v.memoizedState,f.lanes=v.lanes):(f.updateQueue=null,f.memoizedState=null)}var x=hd(o);if(x!==null){x.flags&=-257,gd(x,o,l,s,t),x.mode&1&&md(s,u,t),t=x,a=u;var p=t.updateQueue;if(p===null){var S=new Set;S.add(a),t.updateQueue=S}else p.add(a);break e}else{if(!(t&1)){md(s,u,t),Uu();break e}a=Error(F(426))}}else if(Ce&&l.mode&1){var k=hd(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),gd(k,o,l,s,t),ku(wr(a,l));break e}}s=a=wr(a,l),Re!==4&&(Re=2),ni===null?ni=[s]:ni.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=Um(s,a,t);ld(s,m);break e;case 1:l=a;var g=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(yn===null||!yn.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t;var h=Hm(s,l,t);ld(s,h);break e}}s=s.return}while(s!==null)}uh(n)}catch(b){t=b,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(1)}function lh(){var e=qs.current;return qs.current=Xs,e===null?Xs:e}function Uu(){(Re===0||Re===3||Re===2)&&(Re=4),De===null||!(Wn&268435455)&&!(Co&268435455)||un(De,We)}function no(e,t){var n=ge;ge|=2;var r=lh();(De!==e||We!==t)&&(Ut=null,An(e,t));do try{Fv();break}catch(i){oh(e,i)}while(1);if(Cu(),ge=n,qs.current=r,Oe!==null)throw Error(F(261));return De=null,We=0,Re}function Fv(){for(;Oe!==null;)ah(Oe)}function jv(){for(;Oe!==null&&!f0();)ah(Oe)}function ah(e){var t=dh(e.alternate,e,lt);e.memoizedProps=e.pendingProps,t===null?uh(e):Oe=t,Bu.current=null}function uh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Rv(n,t),n!==null){n.flags&=32767,Oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,Oe=null;return}}else if(n=_v(n,t,lt),n!==null){Oe=n;return}if(t=t.sibling,t!==null){Oe=t;return}Oe=t=e}while(t!==null);Re===0&&(Re=5)}function In(e,t,n){var r=ye,i=yt.transition;try{yt.transition=null,ye=1,Wv(e,t,n,r)}finally{yt.transition=i,ye=r}return null}function Wv(e,t,n,r){do mr();while(dn!==null);if(ge&6)throw Error(F(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(L0(e,s),e===De&&(Oe=De=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||os||(os=!0,fh(As,function(){return mr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=yt.transition,yt.transition=null;var o=ye;ye=1;var l=ge;ge|=4,Bu.current=null,Nv(e,n),rh(n,e),av(fa),Ds=!!da,fa=da=null,e.current=n,Av(n),p0(),ge=l,ye=o,yt.transition=s}else e.current=n;if(os&&(os=!1,dn=e,to=i),s=e.pendingLanes,s===0&&(yn=null),g0(n.stateNode),st(e,Ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(eo)throw eo=!1,e=Oa,Oa=null,e;return to&1&&e.tag!==0&&mr(),s=e.pendingLanes,s&1?e===_a?ri++:(ri=0,_a=e):ri=0,Pn(),null}function mr(){if(dn!==null){var e=Wp(to),t=yt.transition,n=ye;try{if(yt.transition=null,ye=16>e?16:e,dn===null)var r=!1;else{if(e=dn,dn=null,to=0,ge&6)throw Error(F(331));var i=ge;for(ge|=4,K=e.current;K!==null;){var s=K,o=s.child;if(K.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(K=u;K!==null;){var f=K;switch(f.tag){case 0:case 11:case 15:ti(8,f,s)}var d=f.child;if(d!==null)d.return=f,K=d;else for(;K!==null;){f=K;var v=f.sibling,x=f.return;if(eh(f),f===u){K=null;break}if(v!==null){v.return=x,K=v;break}K=x}}}var p=s.alternate;if(p!==null){var S=p.child;if(S!==null){p.child=null;do{var k=S.sibling;S.sibling=null,S=k}while(S!==null)}}K=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,K=o;else e:for(;K!==null;){if(s=K,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ti(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,K=m;break e}K=s.return}}var g=e.current;for(K=g;K!==null;){o=K;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,K=y;else e:for(o=g;K!==null;){if(l=K,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Eo(9,l)}}catch(b){Te(l,l.return,b)}if(l===o){K=null;break e}var h=l.sibling;if(h!==null){h.return=l.return,K=h;break e}K=l.return}}if(ge=i,Pn(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(go,e)}catch{}r=!0}return r}finally{ye=n,yt.transition=t}}return!1}function zd(e,t,n){t=wr(n,t),t=Um(e,t,1),e=vn(e,t,1),t=Ke(),e!==null&&(zi(e,1,t),st(e,t))}function Te(e,t,n){if(e.tag===3)zd(e,e,n);else for(;t!==null;){if(t.tag===3){zd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yn===null||!yn.has(r))){e=wr(n,e),e=Hm(t,e,1),t=vn(t,e,1),e=Ke(),t!==null&&(zi(t,1,e),st(t,e));break}}t=t.return}}function Uv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ke(),e.pingedLanes|=e.suspendedLanes&n,De===e&&(We&n)===n&&(Re===4||Re===3&&(We&130023424)===We&&500>Ie()-Fu?An(e,0):Du|=n),st(e,t)}function ch(e,t){t===0&&(e.mode&1?(t=Ki,Ki<<=1,!(Ki&130023424)&&(Ki=4194304)):t=1);var n=Ke();e=qt(e,t),e!==null&&(zi(e,t,n),st(e,n))}function Hv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ch(e,n)}function Vv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(t),ch(e,n)}var dh;dh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||rt.current)nt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return nt=!1,Ov(e,t,n);nt=!!(e.flags&131072)}else nt=!1,Ce&&t.flags&1048576&&mm(t,Ys,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ks(e,t),e=t.pendingProps;var i=gr(t,Ge.current);pr(t,n),i=_u(null,t,r,e,i,n);var s=Ru();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,it(r)?(s=!0,Hs(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Pu(t),i.updater=Lo,t.stateNode=i,i._reactInternals=t,Sa(t,r,e,n),t=Ea(null,t,r,!0,s,n)):(t.tag=0,Ce&&s&&Su(t),Qe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ks(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Gv(r),e=Ct(r,e),i){case 0:t=ka(null,t,r,e,n);break e;case 1:t=xd(null,t,r,e,n);break e;case 11:t=vd(null,t,r,e,n);break e;case 14:t=yd(null,t,r,Ct(r.type,e),n);break e}throw Error(F(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),ka(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),xd(e,t,r,i,n);case 3:e:{if(Qm(t),e===null)throw Error(F(387));r=t.pendingProps,s=t.memoizedState,i=s.element,ym(e,t),Zs(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=wr(Error(F(423)),t),t=wd(e,t,r,n,i);break e}else if(r!==i){i=wr(Error(F(424)),t),t=wd(e,t,r,n,i);break e}else for(at=gn(t.stateNode.containerInfo.firstChild),ut=t,Ce=!0,Mt=null,n=Lm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vr(),r===i){t=en(e,t,n);break e}Qe(e,t,r,n)}t=t.child}return t;case 5:return km(t),e===null&&ya(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,pa(r,i)?o=null:s!==null&&pa(r,s)&&(t.flags|=32),Gm(e,t),Qe(e,t,o,n),t.child;case 6:return e===null&&ya(t),null;case 13:return Zm(e,t,n);case 4:return zu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=yr(t,null,r,n):Qe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),vd(e,t,r,i,n);case 7:return Qe(e,t,t.pendingProps,n),t.child;case 8:return Qe(e,t,t.pendingProps.children,n),t.child;case 12:return Qe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,Se(Gs,r._currentValue),r._currentValue=o,s!==null)if(It(s.value,o)){if(s.children===i.children&&!rt.current){t=en(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Qt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?a.next=a:(a.next=f.next,f.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),xa(s.return,n,t),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),xa(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,pr(t,n),i=wt(i),r=r(i),t.flags|=1,Qe(e,t,r,n),t.child;case 14:return r=t.type,i=Ct(r,t.pendingProps),i=Ct(r.type,i),yd(e,t,r,i,n);case 15:return Vm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ct(r,i),ks(e,t),t.tag=1,it(r)?(e=!0,Hs(t)):e=!1,pr(t,n),wm(t,r,i),Sa(t,r,i,n),Ea(null,t,r,!0,e,n);case 19:return Km(e,t,n);case 22:return Ym(e,t,n)}throw Error(F(156,t.tag))};function fh(e,t){return Bp(e,t)}function Yv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,r){return new Yv(e,t,n,r)}function Hu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gv(e){if(typeof e=="function")return Hu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===uu)return 11;if(e===cu)return 14}return 2}function wn(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function bs(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Hu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Jn:return Bn(n.children,i,s,t);case au:o=8,i|=8;break;case Vl:return e=vt(12,n,t,i|2),e.elementType=Vl,e.lanes=s,e;case Yl:return e=vt(13,n,t,i),e.elementType=Yl,e.lanes=s,e;case Gl:return e=vt(19,n,t,i),e.elementType=Gl,e.lanes=s,e;case Sp:return bo(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xp:o=10;break e;case wp:o=9;break e;case uu:o=11;break e;case cu:o=14;break e;case on:o=16,r=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=vt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Bn(e,t,n,r){return e=vt(7,e,r,t),e.lanes=n,e}function bo(e,t,n,r){return e=vt(22,e,r,t),e.elementType=Sp,e.lanes=n,e.stateNode={isHidden:!1},e}function zl(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function Tl(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Qv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cl(0),this.expirationTimes=cl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vu(e,t,n,r,i,s,o,l,a){return e=new Qv(e,t,n,l,a),t===1?(t=1,s===!0&&(t|=8)):t=0,s=vt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pu(s),e}function Zv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ph(e){if(!e)return Cn;e=e._reactInternals;e:{if(Gn(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(it(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var n=e.type;if(it(n))return fm(e,n,t)}return t}function mh(e,t,n,r,i,s,o,l,a){return e=Vu(n,r,!0,e,i,s,o,l,a),e.context=ph(null),n=e.current,r=Ke(),i=xn(n),s=Qt(r,i),s.callback=t??null,vn(n,s,i),e.current.lanes=i,zi(e,i,r),st(e,r),e}function Mo(e,t,n,r){var i=t.current,s=Ke(),o=xn(i);return n=ph(n),t.context===null?t.context=n:t.pendingContext=n,t=Qt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=vn(i,t,o),e!==null&&(Tt(e,i,o,s),ws(e,i,o)),o}function ro(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Td(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Yu(e,t){Td(e,t),(e=e.alternate)&&Td(e,t)}function Kv(){return null}var hh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gu(e){this._internalRoot=e}Po.prototype.render=Gu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));Mo(e,t,null,null)};Po.prototype.unmount=Gu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Un(function(){Mo(null,e,null,null)}),t[Xt]=null}};function Po(e){this._internalRoot=e}Po.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<an.length&&t!==0&&t<an[n].priority;n++);an.splice(n,0,e),n===0&&Gp(e)}};function Qu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Id(){}function Jv(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ro(o);s.call(u)}}var o=mh(t,r,e,0,null,!1,!1,"",Id);return e._reactRootContainer=o,e[Xt]=o.current,gi(e.nodeType===8?e.parentNode:e),Un(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=ro(a);l.call(u)}}var a=Vu(e,0,!1,null,null,!1,!1,"",Id);return e._reactRootContainer=a,e[Xt]=a.current,gi(e.nodeType===8?e.parentNode:e),Un(function(){Mo(t,a,n,r)}),a}function To(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=ro(o);l.call(a)}}Mo(t,o,e,i)}else o=Jv(n,t,e,i,r);return ro(o)}Up=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Gr(t.pendingLanes);n!==0&&(pu(t,n|1),st(t,Ie()),!(ge&6)&&(Sr=Ie()+500,Pn()))}break;case 13:Un(function(){var r=qt(e,1);if(r!==null){var i=Ke();Tt(r,e,1,i)}}),Yu(e,1)}};mu=function(e){if(e.tag===13){var t=qt(e,134217728);if(t!==null){var n=Ke();Tt(t,e,134217728,n)}Yu(e,134217728)}};Hp=function(e){if(e.tag===13){var t=xn(e),n=qt(e,t);if(n!==null){var r=Ke();Tt(n,e,t,r)}Yu(e,t)}};Vp=function(){return ye};Yp=function(e,t){var n=ye;try{return ye=e,t()}finally{ye=n}};ra=function(e,t,n){switch(t){case"input":if(Kl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wo(r);if(!i)throw Error(F(90));kp(r),Kl(r,i)}}}break;case"textarea":Cp(e,n);break;case"select":t=n.value,t!=null&&ur(e,!!n.multiple,t,!1)}};Op=ju;_p=Un;var Xv={usingClientEntryPoint:!1,Events:[Ii,tr,wo,Tp,Ip,ju]},jr={findFiberByHostInstance:_n,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},qv={bundleType:jr.bundleType,version:jr.version,rendererPackageName:jr.rendererPackageName,rendererConfig:jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Np(e),e===null?null:e.stateNode},findFiberByHostInstance:jr.findFiberByHostInstance||Kv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ls.isDisabled&&ls.supportsFiber)try{go=ls.inject(qv),Ft=ls}catch{}}dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xv;dt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qu(t))throw Error(F(200));return Zv(e,t,null,n)};dt.createRoot=function(e,t){if(!Qu(e))throw Error(F(299));var n=!1,r="",i=hh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Vu(e,1,!1,null,null,n,!1,r,i),e[Xt]=t.current,gi(e.nodeType===8?e.parentNode:e),new Gu(t)};dt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=Np(t),e=e===null?null:e.stateNode,e};dt.flushSync=function(e){return Un(e)};dt.hydrate=function(e,t,n){if(!zo(t))throw Error(F(200));return To(null,e,t,!0,n)};dt.hydrateRoot=function(e,t,n){if(!Qu(e))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=hh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=mh(t,null,e,1,n??null,i,!1,s,o),e[Xt]=t.current,gi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Po(t)};dt.render=function(e,t,n){if(!zo(t))throw Error(F(200));return To(null,e,t,!1,n)};dt.unmountComponentAtNode=function(e){if(!zo(e))throw Error(F(40));return e._reactRootContainer?(Un(function(){To(null,null,e,!1,function(){e._reactRootContainer=null,e[Xt]=null})}),!0):!1};dt.unstable_batchedUpdates=ju;dt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!zo(n))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return To(e,t,n,!1,r)};dt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=dt})(Kg);var Od=Kt;Wl.createRoot=Od.createRoot,Wl.hydrateRoot=Od.hydrateRoot;var io={},e1={get exports(){return io},set exports(e){io=e}},xe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zu=Symbol.for("react.element"),Ku=Symbol.for("react.portal"),Io=Symbol.for("react.fragment"),Oo=Symbol.for("react.strict_mode"),_o=Symbol.for("react.profiler"),Ro=Symbol.for("react.provider"),$o=Symbol.for("react.context"),t1=Symbol.for("react.server_context"),No=Symbol.for("react.forward_ref"),Ao=Symbol.for("react.suspense"),Bo=Symbol.for("react.suspense_list"),Do=Symbol.for("react.memo"),Fo=Symbol.for("react.lazy"),n1=Symbol.for("react.offscreen"),gh;gh=Symbol.for("react.module.reference");function Lt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Zu:switch(e=e.type,e){case Io:case _o:case Oo:case Ao:case Bo:return e;default:switch(e=e&&e.$$typeof,e){case t1:case $o:case No:case Fo:case Do:case Ro:return e;default:return t}}case Ku:return t}}}xe.ContextConsumer=$o;xe.ContextProvider=Ro;xe.Element=Zu;xe.ForwardRef=No;xe.Fragment=Io;xe.Lazy=Fo;xe.Memo=Do;xe.Portal=Ku;xe.Profiler=_o;xe.StrictMode=Oo;xe.Suspense=Ao;xe.SuspenseList=Bo;xe.isAsyncMode=function(){return!1};xe.isConcurrentMode=function(){return!1};xe.isContextConsumer=function(e){return Lt(e)===$o};xe.isContextProvider=function(e){return Lt(e)===Ro};xe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zu};xe.isForwardRef=function(e){return Lt(e)===No};xe.isFragment=function(e){return Lt(e)===Io};xe.isLazy=function(e){return Lt(e)===Fo};xe.isMemo=function(e){return Lt(e)===Do};xe.isPortal=function(e){return Lt(e)===Ku};xe.isProfiler=function(e){return Lt(e)===_o};xe.isStrictMode=function(e){return Lt(e)===Oo};xe.isSuspense=function(e){return Lt(e)===Ao};xe.isSuspenseList=function(e){return Lt(e)===Bo};xe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Io||e===_o||e===Oo||e===Ao||e===Bo||e===n1||typeof e=="object"&&e!==null&&(e.$$typeof===Fo||e.$$typeof===Do||e.$$typeof===Ro||e.$$typeof===$o||e.$$typeof===No||e.$$typeof===gh||e.getModuleId!==void 0)};xe.typeOf=Lt;(function(e){e.exports=xe})(e1);function r1(e){function t(A,$,T,Q,z){for(var B=0,E=0,Z=0,W=0,ne,J,le=0,q=0,ie,pe=ie=ne=0,ce=0,re=0,qe=0,ze=0,zn=T.length,_t=zn-1,et,se="",Ee="",nn="",Qn="",ot;ce<zn;){if(J=T.charCodeAt(ce),ce===_t&&E+W+Z+B!==0&&(E!==0&&(J=E===47?10:47),W=Z=B=0,zn++,_t++),E+W+Z+B===0){if(ce===_t&&(0<re&&(se=se.replace(v,"")),0<se.trim().length)){switch(J){case 32:case 9:case 59:case 13:case 10:break;default:se+=T.charAt(ce)}J=59}switch(J){case 123:for(se=se.trim(),ne=se.charCodeAt(0),ie=1,ze=++ce;ce<zn;){switch(J=T.charCodeAt(ce)){case 123:ie++;break;case 125:ie--;break;case 47:switch(J=T.charCodeAt(ce+1)){case 42:case 47:e:{for(pe=ce+1;pe<_t;++pe)switch(T.charCodeAt(pe)){case 47:if(J===42&&T.charCodeAt(pe-1)===42&&ce+2!==pe){ce=pe+1;break e}break;case 10:if(J===47){ce=pe+1;break e}}ce=pe}}break;case 91:J++;case 40:J++;case 34:case 39:for(;ce++<_t&&T.charCodeAt(ce)!==J;);}if(ie===0)break;ce++}switch(ie=T.substring(ze,ce),ne===0&&(ne=(se=se.replace(d,"").trim()).charCodeAt(0)),ne){case 64:switch(0<re&&(se=se.replace(v,"")),J=se.charCodeAt(1),J){case 100:case 109:case 115:case 45:re=$;break;default:re=G}if(ie=t($,re,ie,J,z+1),ze=ie.length,0<O&&(re=n(G,se,qe),ot=l(3,ie,re,$,V,D,ze,J,z,Q),se=re.join(""),ot!==void 0&&(ze=(ie=ot.trim()).length)===0&&(J=0,ie="")),0<ze)switch(J){case 115:se=se.replace(M,o);case 100:case 109:case 45:ie=se+"{"+ie+"}";break;case 107:se=se.replace(g,"$1 $2"),ie=se+"{"+ie+"}",ie=H===1||H===2&&s("@"+ie,3)?"@-webkit-"+ie+"@"+ie:"@"+ie;break;default:ie=se+ie,Q===112&&(ie=(Ee+=ie,""))}else ie="";break;default:ie=t($,n($,se,qe),ie,Q,z+1)}nn+=ie,ie=qe=re=pe=ne=0,se="",J=T.charCodeAt(++ce);break;case 125:case 59:if(se=(0<re?se.replace(v,""):se).trim(),1<(ze=se.length))switch(pe===0&&(ne=se.charCodeAt(0),ne===45||96<ne&&123>ne)&&(ze=(se=se.replace(" ",":")).length),0<O&&(ot=l(1,se,$,A,V,D,Ee.length,Q,z,Q))!==void 0&&(ze=(se=ot.trim()).length)===0&&(se="\0\0"),ne=se.charCodeAt(0),J=se.charCodeAt(1),ne){case 0:break;case 64:if(J===105||J===99){Qn+=se+T.charAt(ce);break}default:se.charCodeAt(ze-1)!==58&&(Ee+=i(se,ne,J,se.charCodeAt(2)))}qe=re=pe=ne=0,se="",J=T.charCodeAt(++ce)}}switch(J){case 13:case 10:E===47?E=0:1+ne===0&&Q!==107&&0<se.length&&(re=1,se+="\0"),0<O*Y&&l(0,se,$,A,V,D,Ee.length,Q,z,Q),D=1,V++;break;case 59:case 125:if(E+W+Z+B===0){D++;break}default:switch(D++,et=T.charAt(ce),J){case 9:case 32:if(W+B+E===0)switch(le){case 44:case 58:case 9:case 32:et="";break;default:J!==32&&(et=" ")}break;case 0:et="\\0";break;case 12:et="\\f";break;case 11:et="\\v";break;case 38:W+E+B===0&&(re=qe=1,et="\f"+et);break;case 108:if(W+E+B+U===0&&0<pe)switch(ce-pe){case 2:le===112&&T.charCodeAt(ce-3)===58&&(U=le);case 8:q===111&&(U=q)}break;case 58:W+E+B===0&&(pe=ce);break;case 44:E+Z+W+B===0&&(re=1,et+="\r");break;case 34:case 39:E===0&&(W=W===J?0:W===0?J:W);break;case 91:W+E+Z===0&&B++;break;case 93:W+E+Z===0&&B--;break;case 41:W+E+B===0&&Z--;break;case 40:if(W+E+B===0){if(ne===0)switch(2*le+3*q){case 533:break;default:ne=1}Z++}break;case 64:E+Z+W+B+pe+ie===0&&(ie=1);break;case 42:case 47:if(!(0<W+B+Z))switch(E){case 0:switch(2*J+3*T.charCodeAt(ce+1)){case 235:E=47;break;case 220:ze=ce,E=42}break;case 42:J===47&&le===42&&ze+2!==ce&&(T.charCodeAt(ze+2)===33&&(Ee+=T.substring(ze,ce+1)),et="",E=0)}}E===0&&(se+=et)}q=le,le=J,ce++}if(ze=Ee.length,0<ze){if(re=$,0<O&&(ot=l(2,Ee,re,A,V,D,ze,Q,z,Q),ot!==void 0&&(Ee=ot).length===0))return Qn+Ee+nn;if(Ee=re.join(",")+"{"+Ee+"}",H*U!==0){switch(H!==2||s(Ee,2)||(U=0),U){case 111:Ee=Ee.replace(h,":-moz-$1")+Ee;break;case 112:Ee=Ee.replace(y,"::-webkit-input-$1")+Ee.replace(y,"::-moz-$1")+Ee.replace(y,":-ms-input-$1")+Ee}U=0}}return Qn+Ee+nn}function n(A,$,T){var Q=$.trim().split(k);$=Q;var z=Q.length,B=A.length;switch(B){case 0:case 1:var E=0;for(A=B===0?"":A[0]+" ";E<z;++E)$[E]=r(A,$[E],T).trim();break;default:var Z=E=0;for($=[];E<z;++E)for(var W=0;W<B;++W)$[Z++]=r(A[W]+" ",Q[E],T).trim()}return $}function r(A,$,T){var Q=$.charCodeAt(0);switch(33>Q&&(Q=($=$.trim()).charCodeAt(0)),Q){case 38:return $.replace(m,"$1"+A.trim());case 58:return A.trim()+$.replace(m,"$1"+A.trim());default:if(0<1*T&&0<$.indexOf("\f"))return $.replace(m,(A.charCodeAt(0)===58?"":"$1")+A.trim())}return A+$}function i(A,$,T,Q){var z=A+";",B=2*$+3*T+4*Q;if(B===944){A=z.indexOf(":",9)+1;var E=z.substring(A,z.length-1).trim();return E=z.substring(0,A).trim()+E+";",H===1||H===2&&s(E,1)?"-webkit-"+E+E:E}if(H===0||H===2&&!s(z,1))return z;switch(B){case 1015:return z.charCodeAt(10)===97?"-webkit-"+z+z:z;case 951:return z.charCodeAt(3)===116?"-webkit-"+z+z:z;case 963:return z.charCodeAt(5)===110?"-webkit-"+z+z:z;case 1009:if(z.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+z+z;case 978:return"-webkit-"+z+"-moz-"+z+z;case 1019:case 983:return"-webkit-"+z+"-moz-"+z+"-ms-"+z+z;case 883:if(z.charCodeAt(8)===45)return"-webkit-"+z+z;if(0<z.indexOf("image-set(",11))return z.replace(P,"$1-webkit-$2")+z;break;case 932:if(z.charCodeAt(4)===45)switch(z.charCodeAt(5)){case 103:return"-webkit-box-"+z.replace("-grow","")+"-webkit-"+z+"-ms-"+z.replace("grow","positive")+z;case 115:return"-webkit-"+z+"-ms-"+z.replace("shrink","negative")+z;case 98:return"-webkit-"+z+"-ms-"+z.replace("basis","preferred-size")+z}return"-webkit-"+z+"-ms-"+z+z;case 964:return"-webkit-"+z+"-ms-flex-"+z+z;case 1023:if(z.charCodeAt(8)!==99)break;return E=z.substring(z.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+E+"-webkit-"+z+"-ms-flex-pack"+E+z;case 1005:return p.test(z)?z.replace(x,":-webkit-")+z.replace(x,":-moz-")+z:z;case 1e3:switch(E=z.substring(13).trim(),$=E.indexOf("-")+1,E.charCodeAt(0)+E.charCodeAt($)){case 226:E=z.replace(b,"tb");break;case 232:E=z.replace(b,"tb-rl");break;case 220:E=z.replace(b,"lr");break;default:return z}return"-webkit-"+z+"-ms-"+E+z;case 1017:if(z.indexOf("sticky",9)===-1)break;case 975:switch($=(z=A).length-10,E=(z.charCodeAt($)===33?z.substring(0,$):z).substring(A.indexOf(":",7)+1).trim(),B=E.charCodeAt(0)+(E.charCodeAt(7)|0)){case 203:if(111>E.charCodeAt(8))break;case 115:z=z.replace(E,"-webkit-"+E)+";"+z;break;case 207:case 102:z=z.replace(E,"-webkit-"+(102<B?"inline-":"")+"box")+";"+z.replace(E,"-webkit-"+E)+";"+z.replace(E,"-ms-"+E+"box")+";"+z}return z+";";case 938:if(z.charCodeAt(5)===45)switch(z.charCodeAt(6)){case 105:return E=z.replace("-items",""),"-webkit-"+z+"-webkit-box-"+E+"-ms-flex-"+E+z;case 115:return"-webkit-"+z+"-ms-flex-item-"+z.replace(_,"")+z;default:return"-webkit-"+z+"-ms-flex-line-pack"+z.replace("align-content","").replace(_,"")+z}break;case 973:case 989:if(z.charCodeAt(3)!==45||z.charCodeAt(4)===122)break;case 931:case 953:if(C.test(A)===!0)return(E=A.substring(A.indexOf(":")+1)).charCodeAt(0)===115?i(A.replace("stretch","fill-available"),$,T,Q).replace(":fill-available",":stretch"):z.replace(E,"-webkit-"+E)+z.replace(E,"-moz-"+E.replace("fill-",""))+z;break;case 962:if(z="-webkit-"+z+(z.charCodeAt(5)===102?"-ms-"+z:"")+z,T+Q===211&&z.charCodeAt(13)===105&&0<z.indexOf("transform",10))return z.substring(0,z.indexOf(";",27)+1).replace(S,"$1-webkit-$2")+z}return z}function s(A,$){var T=A.indexOf($===1?":":"{"),Q=A.substring(0,$!==3?T:10);return T=A.substring(T+1,A.length-1),j($!==2?Q:Q.replace(w,"$1"),T,$)}function o(A,$){var T=i($,$.charCodeAt(0),$.charCodeAt(1),$.charCodeAt(2));return T!==$+";"?T.replace(I," or ($1)").substring(4):"("+$+")"}function l(A,$,T,Q,z,B,E,Z,W,ne){for(var J=0,le=$,q;J<O;++J)switch(q=ee[J].call(f,A,le,T,Q,z,B,E,Z,W,ne)){case void 0:case!1:case!0:case null:break;default:le=q}if(le!==$)return le}function a(A){switch(A){case void 0:case null:O=ee.length=0;break;default:if(typeof A=="function")ee[O++]=A;else if(typeof A=="object")for(var $=0,T=A.length;$<T;++$)a(A[$]);else Y=!!A|0}return a}function u(A){return A=A.prefix,A!==void 0&&(j=null,A?typeof A!="function"?H=1:(H=2,j=A):H=0),u}function f(A,$){var T=A;if(33>T.charCodeAt(0)&&(T=T.trim()),te=T,T=[te],0<O){var Q=l(-1,$,T,T,V,D,0,0,0,0);Q!==void 0&&typeof Q=="string"&&($=Q)}var z=t(G,T,$,0,0);return 0<O&&(Q=l(-2,z,T,T,V,D,z.length,0,0,0),Q!==void 0&&(z=Q)),te="",U=0,D=V=1,z}var d=/^\0+/g,v=/[\0\r\f]/g,x=/: */g,p=/zoo|gra/,S=/([,: ])(transform)/g,k=/,\r+?/g,m=/([\t\r\n ])*\f?&/g,g=/@(k\w+)\s*(\S*)\s*/,y=/::(place)/g,h=/:(read-only)/g,b=/[svh]\w+-[tblr]{2}/,M=/\(\s*(.*)\s*\)/g,I=/([\s\S]*?);/g,_=/-self|flex-/g,w=/[^]*?(:[rp][el]a[\w-]+)[^]*/,C=/stretch|:\s*\w+\-(?:conte|avail)/,P=/([^-])(image-set\()/,D=1,V=1,U=0,H=1,G=[],ee=[],O=0,j=null,Y=0,te="";return f.use=a,f.set=u,e!==void 0&&u(e),f}var i1={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function s1(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var o1=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,_d=s1(function(e){return o1.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Na={},l1={get exports(){return Na},set exports(e){Na=e}},we={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fe=typeof Symbol=="function"&&Symbol.for,Ju=Fe?Symbol.for("react.element"):60103,Xu=Fe?Symbol.for("react.portal"):60106,jo=Fe?Symbol.for("react.fragment"):60107,Wo=Fe?Symbol.for("react.strict_mode"):60108,Uo=Fe?Symbol.for("react.profiler"):60114,Ho=Fe?Symbol.for("react.provider"):60109,Vo=Fe?Symbol.for("react.context"):60110,qu=Fe?Symbol.for("react.async_mode"):60111,Yo=Fe?Symbol.for("react.concurrent_mode"):60111,Go=Fe?Symbol.for("react.forward_ref"):60112,Qo=Fe?Symbol.for("react.suspense"):60113,a1=Fe?Symbol.for("react.suspense_list"):60120,Zo=Fe?Symbol.for("react.memo"):60115,Ko=Fe?Symbol.for("react.lazy"):60116,u1=Fe?Symbol.for("react.block"):60121,c1=Fe?Symbol.for("react.fundamental"):60117,d1=Fe?Symbol.for("react.responder"):60118,f1=Fe?Symbol.for("react.scope"):60119;function pt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ju:switch(e=e.type,e){case qu:case Yo:case jo:case Uo:case Wo:case Qo:return e;default:switch(e=e&&e.$$typeof,e){case Vo:case Go:case Ko:case Zo:case Ho:return e;default:return t}}case Xu:return t}}}function vh(e){return pt(e)===Yo}we.AsyncMode=qu;we.ConcurrentMode=Yo;we.ContextConsumer=Vo;we.ContextProvider=Ho;we.Element=Ju;we.ForwardRef=Go;we.Fragment=jo;we.Lazy=Ko;we.Memo=Zo;we.Portal=Xu;we.Profiler=Uo;we.StrictMode=Wo;we.Suspense=Qo;we.isAsyncMode=function(e){return vh(e)||pt(e)===qu};we.isConcurrentMode=vh;we.isContextConsumer=function(e){return pt(e)===Vo};we.isContextProvider=function(e){return pt(e)===Ho};we.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ju};we.isForwardRef=function(e){return pt(e)===Go};we.isFragment=function(e){return pt(e)===jo};we.isLazy=function(e){return pt(e)===Ko};we.isMemo=function(e){return pt(e)===Zo};we.isPortal=function(e){return pt(e)===Xu};we.isProfiler=function(e){return pt(e)===Uo};we.isStrictMode=function(e){return pt(e)===Wo};we.isSuspense=function(e){return pt(e)===Qo};we.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===jo||e===Yo||e===Uo||e===Wo||e===Qo||e===a1||typeof e=="object"&&e!==null&&(e.$$typeof===Ko||e.$$typeof===Zo||e.$$typeof===Ho||e.$$typeof===Vo||e.$$typeof===Go||e.$$typeof===c1||e.$$typeof===d1||e.$$typeof===f1||e.$$typeof===u1)};we.typeOf=pt;(function(e){e.exports=we})(l1);var ec=Na,p1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},m1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},h1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},yh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},tc={};tc[ec.ForwardRef]=h1;tc[ec.Memo]=yh;function Rd(e){return ec.isMemo(e)?yh:tc[e.$$typeof]||p1}var g1=Object.defineProperty,v1=Object.getOwnPropertyNames,$d=Object.getOwnPropertySymbols,y1=Object.getOwnPropertyDescriptor,x1=Object.getPrototypeOf,Nd=Object.prototype;function xh(e,t,n){if(typeof t!="string"){if(Nd){var r=x1(t);r&&r!==Nd&&xh(e,r,n)}var i=v1(t);$d&&(i=i.concat($d(t)));for(var s=Rd(e),o=Rd(t),l=0;l<i.length;++l){var a=i[l];if(!m1[a]&&!(n&&n[a])&&!(o&&o[a])&&!(s&&s[a])){var u=y1(t,a);try{g1(e,a,u)}catch{}}}}return e}var w1=xh;function Pt(){return(Pt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Ad=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Aa=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!io.typeOf(e)},so=Object.freeze([]),Sn=Object.freeze({});function Lr(e){return typeof e=="function"}function Bd(e){return e.displayName||e.name||"Component"}function nc(e){return e&&typeof e.styledComponentId=="string"}var kr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",rc=typeof window<"u"&&"HTMLElement"in window,S1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),L1={};function Hn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var k1=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Hn(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var l=s;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(n+1),u=0,f=r.length;u<f;u++)this.tag.insertRule(a,r[u])&&(this.groupSizes[n]++,a++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,l=s;l<o;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),Ms=new Map,oo=new Map,ii=1,as=function(e){if(Ms.has(e))return Ms.get(e);for(;oo.has(ii);)ii++;var t=ii++;return Ms.set(e,t),oo.set(t,e),t},E1=function(e){return oo.get(e)},C1=function(e,t){t>=ii&&(ii=t+1),Ms.set(e,t),oo.set(t,e)},b1="style["+kr+'][data-styled-version="5.3.9"]',M1=new RegExp("^"+kr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),P1=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},z1=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var l=o.match(M1);if(l){var a=0|parseInt(l[1],10),u=l[2];a!==0&&(C1(u,a),P1(e,u,l[3]),e.getTag().insertRules(a,r)),r.length=0}else r.push(o)}}},T1=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},wh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var a=l.childNodes,u=a.length;u>=0;u--){var f=a[u];if(f&&f.nodeType===1&&f.hasAttribute(kr))return f}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(kr,"active"),r.setAttribute("data-styled-version","5.3.9");var o=T1();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},I1=function(){function e(n){var r=this.element=wh(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,l=s.length;o<l;o++){var a=s[o];if(a.ownerNode===i)return a}Hn(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),O1=function(){function e(n){var r=this.element=wh(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),_1=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Dd=rc,R1={isServer:!rc,useCSSOMInjection:!S1},lo=function(){function e(n,r,i){n===void 0&&(n=Sn),r===void 0&&(r={}),this.options=Pt({},R1,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&rc&&Dd&&(Dd=!1,function(s){for(var o=document.querySelectorAll(b1),l=0,a=o.length;l<a;l++){var u=o[l];u&&u.getAttribute(kr)!=="active"&&(z1(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return as(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Pt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new _1(o):s?new I1(o):new O1(o),new k1(n)));var n,r,i,s,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(as(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(as(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(as(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var l=E1(o);if(l!==void 0){var a=n.names.get(l),u=r.getGroup(o);if(a&&u&&a.size){var f=kr+".g"+o+'[id="'+l+'"]',d="";a!==void 0&&a.forEach(function(v){v.length>0&&(d+=v+",")}),s+=""+u+f+'{content:"'+d+`"}/*!sc*/
`}}}return s}(this)},e}(),$1=/(a)(d)/gi,Fd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ba(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Fd(t%52)+n;return(Fd(t%52)+n).replace($1,"$1-$2")}var ar=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Sh=function(e){return ar(5381,e)};function Lh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Lr(n)&&!nc(n))return!1}return!0}var N1=Sh("5.3.9"),A1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Lh(t),this.componentId=n,this.baseHash=ar(N1,n),this.baseStyle=r,lo.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Vn(this.rules,t,n,r).join(""),l=Ba(ar(this.baseHash,o)>>>0);if(!n.hasNameForId(i,l)){var a=r(o,"."+l,void 0,i);n.insertRules(i,l,a)}s.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,f=ar(this.baseHash,r.hash),d="",v=0;v<u;v++){var x=this.rules[v];if(typeof x=="string")d+=x;else if(x){var p=Vn(x,t,n,r),S=Array.isArray(p)?p.join(""):p;f=ar(f,S+v),d+=S}}if(d){var k=Ba(f>>>0);if(!n.hasNameForId(i,k)){var m=r(d,"."+k,void 0,i);n.insertRules(i,k,m)}s.push(k)}}return s.join(" ")},e}(),B1=/^\s*\/\/.*$/gm,D1=[":","[",".","#"];function F1(e){var t,n,r,i,s=e===void 0?Sn:e,o=s.options,l=o===void 0?Sn:o,a=s.plugins,u=a===void 0?so:a,f=new r1(l),d=[],v=function(S){function k(m){if(m)try{S(m+"}")}catch{}}return function(m,g,y,h,b,M,I,_,w,C){switch(m){case 1:if(w===0&&g.charCodeAt(0)===64)return S(g+";"),"";break;case 2:if(_===0)return g+"/*|*/";break;case 3:switch(_){case 102:case 112:return S(y[0]+g),"";default:return g+(C===0?"/*|*/":"")}case-2:g.split("/*|*/}").forEach(k)}}}(function(S){d.push(S)}),x=function(S,k,m){return k===0&&D1.indexOf(m[n.length])!==-1||m.match(i)?S:"."+t};function p(S,k,m,g){g===void 0&&(g="&");var y=S.replace(B1,""),h=k&&m?m+" "+k+" { "+y+" }":y;return t=g,n=k,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),f(m||!k?"":k,h)}return f.use([].concat(u,[function(S,k,m){S===2&&m.length&&m[0].lastIndexOf(n)>0&&(m[0]=m[0].replace(r,x))},v,function(S){if(S===-2){var k=d;return d=[],k}}])),p.hash=u.length?u.reduce(function(S,k){return k.name||Hn(15),ar(S,k.name)},5381).toString():"",p}var kh=Ze.createContext();kh.Consumer;var Eh=Ze.createContext(),j1=(Eh.Consumer,new lo),Da=F1();function Ch(){return c.useContext(kh)||j1}function bh(){return c.useContext(Eh)||Da}var W1=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Da);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Hn(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Da),this.name+t.hash},e}(),U1=/([A-Z])/,H1=/([A-Z])/g,V1=/^ms-/,Y1=function(e){return"-"+e.toLowerCase()};function jd(e){return U1.test(e)?e.replace(H1,Y1).replace(V1,"-ms-"):e}var Wd=function(e){return e==null||e===!1||e===""};function Vn(e,t,n,r){if(Array.isArray(e)){for(var i,s=[],o=0,l=e.length;o<l;o+=1)(i=Vn(e[o],t,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(Wd(e))return"";if(nc(e))return"."+e.styledComponentId;if(Lr(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var a=e(t);return Vn(a,t,n,r)}var u;return e instanceof W1?n?(e.inject(n,r),e.getName(r)):e:Aa(e)?function f(d,v){var x,p,S=[];for(var k in d)d.hasOwnProperty(k)&&!Wd(d[k])&&(Array.isArray(d[k])&&d[k].isCss||Lr(d[k])?S.push(jd(k)+":",d[k],";"):Aa(d[k])?S.push.apply(S,f(d[k],k)):S.push(jd(k)+": "+(x=k,(p=d[k])==null||typeof p=="boolean"||p===""?"":typeof p!="number"||p===0||x in i1?String(p).trim():p+"px")+";"));return v?[v+" {"].concat(S,["}"]):S}(e):e.toString()}var Ud=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Mh(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Lr(e)||Aa(e)?Ud(Vn(Ad(so,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Ud(Vn(Ad(e,n)))}var Ph=function(e,t,n){return n===void 0&&(n=Sn),e.theme!==n.theme&&e.theme||t||n.theme},G1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Q1=/(^-|-$)/g;function Il(e){return e.replace(G1,"-").replace(Q1,"")}var zh=function(e){return Ba(Sh(e)>>>0)};function us(e){return typeof e=="string"&&!0}var Fa=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Z1=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function K1(e,t,n){var r=e[n];Fa(t)&&Fa(r)?Th(r,t):e[n]=t}function Th(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(Fa(o))for(var l in o)Z1(l)&&K1(e,o[l],l)}return e}var Ci=Ze.createContext();Ci.Consumer;function J1(e){var t=c.useContext(Ci),n=c.useMemo(function(){return function(r,i){if(!r)return Hn(14);if(Lr(r)){var s=r(i);return s}return Array.isArray(r)||typeof r!="object"?Hn(8):i?Pt({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?Ze.createElement(Ci.Provider,{value:n},e.children):null}var Ol={};function Ih(e,t,n){var r=nc(e),i=!us(e),s=t.attrs,o=s===void 0?so:s,l=t.componentId,a=l===void 0?function(g,y){var h=typeof g!="string"?"sc":Il(g);Ol[h]=(Ol[h]||0)+1;var b=h+"-"+zh("5.3.9"+h+Ol[h]);return y?y+"-"+b:b}(t.displayName,t.parentComponentId):l,u=t.displayName,f=u===void 0?function(g){return us(g)?"styled."+g:"Styled("+Bd(g)+")"}(e):u,d=t.displayName&&t.componentId?Il(t.displayName)+"-"+t.componentId:t.componentId||a,v=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,x=t.shouldForwardProp;r&&e.shouldForwardProp&&(x=t.shouldForwardProp?function(g,y,h){return e.shouldForwardProp(g,y,h)&&t.shouldForwardProp(g,y,h)}:e.shouldForwardProp);var p,S=new A1(n,d,r?e.componentStyle:void 0),k=S.isStatic&&o.length===0,m=function(g,y){return function(h,b,M,I){var _=h.attrs,w=h.componentStyle,C=h.defaultProps,P=h.foldedComponentIds,D=h.shouldForwardProp,V=h.styledComponentId,U=h.target,H=function(Q,z,B){Q===void 0&&(Q=Sn);var E=Pt({},z,{theme:Q}),Z={};return B.forEach(function(W){var ne,J,le,q=W;for(ne in Lr(q)&&(q=q(E)),q)E[ne]=Z[ne]=ne==="className"?(J=Z[ne],le=q[ne],J&&le?J+" "+le:J||le):q[ne]}),[E,Z]}(Ph(b,c.useContext(Ci),C)||Sn,b,_),G=H[0],ee=H[1],O=function(Q,z,B,E){var Z=Ch(),W=bh(),ne=z?Q.generateAndInjectStyles(Sn,Z,W):Q.generateAndInjectStyles(B,Z,W);return ne}(w,I,G),j=M,Y=ee.$as||b.$as||ee.as||b.as||U,te=us(Y),A=ee!==b?Pt({},b,{},ee):b,$={};for(var T in A)T[0]!=="$"&&T!=="as"&&(T==="forwardedAs"?$.as=A[T]:(D?D(T,_d,Y):!te||_d(T))&&($[T]=A[T]));return b.style&&ee.style!==b.style&&($.style=Pt({},b.style,{},ee.style)),$.className=Array.prototype.concat(P,V,O!==V?O:null,b.className,ee.className).filter(Boolean).join(" "),$.ref=j,c.createElement(Y,$)}(p,g,y,k)};return m.displayName=f,(p=Ze.forwardRef(m)).attrs=v,p.componentStyle=S,p.displayName=f,p.shouldForwardProp=x,p.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):so,p.styledComponentId=d,p.target=r?e.target:e,p.withComponent=function(g){var y=t.componentId,h=function(M,I){if(M==null)return{};var _,w,C={},P=Object.keys(M);for(w=0;w<P.length;w++)_=P[w],I.indexOf(_)>=0||(C[_]=M[_]);return C}(t,["componentId"]),b=y&&y+"-"+(us(g)?g:Il(Bd(g)));return Ih(g,Pt({},h,{attrs:v,componentId:b}),n)},Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(g){this._foldedDefaultProps=r?Th({},e.defaultProps,g):g}}),Object.defineProperty(p,"toString",{value:function(){return"."+p.styledComponentId}}),i&&w1(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),p}var ja=function(e){return function t(n,r,i){if(i===void 0&&(i=Sn),!io.isValidElementType(r))return Hn(1,String(r));var s=function(){return n(r,i,Mh.apply(void 0,arguments))};return s.withConfig=function(o){return t(n,r,Pt({},i,{},o))},s.attrs=function(o){return t(n,r,Pt({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(Ih,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){ja[e]=ja(e)});var X1=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=Lh(n),lo.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,s){var o=s(Vn(this.rules,r,i,s).join(""),""),l=this.componentId+n;i.insertRules(l,l,o)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,s){n>2&&lo.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},e}();function q1(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Mh.apply(void 0,[e].concat(n)),s="sc-global-"+zh(JSON.stringify(i)),o=new X1(i,s);function l(u){var f=Ch(),d=bh(),v=c.useContext(Ci),x=c.useRef(f.allocateGSInstance(s)).current;return f.server&&a(x,u,f,v,d),c.useLayoutEffect(function(){if(!f.server)return a(x,u,f,v,d),function(){return o.removeStyles(x,f)}},[x,u,f,v,d]),null}function a(u,f,d,v,x){if(o.isStatic)o.renderStyles(u,L1,d,x);else{var p=Pt({},f,{theme:Ph(f,v,l.defaultProps)});o.renderStyles(u,p,d,x)}}return Ze.memo(l)}const oe=ja,Wr={light:{globalBackground:"#FCE6FF",backgroundGradient:"radial-gradient(circle at 50% 58.5%, rgba(49,233,129,0.15) 0%, rgba(58, 175, 185,0.15) 20%, rgba(252,230,255,0) 50%);",backgroundGradient1500:"radial-gradient(circle at 50% 60%, rgba(49,233,129,0.15) 0%, rgba(58, 175, 185,0.15) 14%, rgba(252,230,255,0) 35%);",backgroundGradient1200:"radial-gradient(circle at 50% 60%, rgba(49,233,129,0.15) 0%, rgba(58, 175, 185,0.15) 14%, rgba(252,230,255,0) 35%);",backgroundGradient1000:"radial-gradient(circle at 50% 62.5%, rgba(49,233,129,0.15) 0%, rgba(58, 175, 185,0.15) 12%, rgba(252,230,255,0) 30%);",backgroundGradient800:"linear-gradient(180deg, rgba(49,233,129,0.15) 0%, rgba(58, 175, 185,0.15) 11%, rgba(252,230,255,0) 22%);",backgroundGradientMobile:"radial-gradient(circle at 50% 50%, rgba(49,233,129,0.15) 0%, rgba(58, 175, 185,0.15) 7%, rgba(252,230,255,0) 17.5%);",upwardsGradient:"linear-gradient(0deg, rgba(49,233,129,0.15) 0%, rgba(58, 175, 185,0.15) 11%, rgba(252,230,255,1) 22%);",titles:"#171D1C",inputBackground:"#BAA6BD",bigInputBackground:"#BAA6BD",inputText:"#166638",clockOpacity:.1,buttonBackground:"#FF9FD9",eventBackground:"rgba(255, 159, 217, 0.2)"},dark:{globalBackground:"#130019",backgroundGradient:"radial-gradient(circle at 50% 58.5%, rgba(0,242,80,0.1) 0%, rgba(100,5,255,0.1) 20%, rgba(19,0,25,0) 50%);",backgroundGradient1500:"radial-gradient(circle at 50% 60%, rgba(0,242,80,0.1) 0%, rgba(100,5,255,0.1) 14%, rgba(19,0,25,0) 35%);",backgroundGradient1200:"radial-gradient(circle at 50% 60%, rgba(0,242,80,0.1) 0%, rgba(100,5,255,0.1) 14%, rgba(19,0,25,0) 35%);",backgroundGradient1000:"radial-gradient(circle at 50% 62.5%, rgba(0,242,80,0.1) 0%, rgba(100,5,255,0.1) 12%, rgba(19,0,25,0) 30%);",backgroundGradient800:"linear-gradient(180deg, rgba(0,242,80,0.1) 0%, rgba(100,5,255,0.1) 11%, rgba(19,0,25,0) 22%);",backgroundGradientMobile:"radial-gradient(circle at 50% 50%, rgba(0,242,80,0.1) 0%, rgba(100,5,255,0.1) 7%, rgba(19,0,25,0) 17.5%);",upwardsGradient:"linear-gradient(0deg, rgba(0,242,80,0.1) 0%, rgba(100,5,255,0.1) 11%, rgba(19,0,25,1) 22%);",titles:"#EFF6E0",inputBackground:"#0D0013",bigInputBackground:"#07000D",inputText:"#00F250",clockOpacity:.3,buttonBackground:"#36045A",eventBackground:"rgba(81, 6, 135, 0.15)"}},ey=q1`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    transition: background-color 0.5s;
}

:root{
    font-size: 62.5%;
}

body{
    min-height: 100vh;
    background: ${({theme:e})=>e.backgroundGradient};
    background-color: ${({theme:e})=>e.globalBackground};
    background-repeat: no-repeat;
    color: ${({theme:e})=>e.titles};

        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-track {
            background: ${({theme:e})=>e.bigInputBackground};
        }

        ::-webkit-scrollbar-thumb {
            background: ${({theme:e})=>e.buttonBackground};
            border-radius: 8px;
        }
}

a{
    text-decoration: none;
}

svg{
    transition: none;
}

button, a{
    cursor: pointer;
    transition: filter 0.2s, color 0.5s, background-color 0.5s;
}

button:hover, a:hover{
    filter: brightness(0.9)
}

//------------------ Media Queries ------------------

@media(max-width: 1500px){
    body{
        background: ${({theme:e})=>e.backgroundGradient1500};
        background-color: ${({theme:e})=>e.globalBackground};
    }
}

@media(max-width: 1250px){
    body{
        background: ${({theme:e})=>e.backgroundGradient1200};
        background-color: ${({theme:e})=>e.globalBackground};
    }
}

@media(max-width: 1030px){
    body{
        background: ${({theme:e})=>e.backgroundGradient1000};
        background-color: ${({theme:e})=>e.globalBackground};
    }
}

@media(max-width: 800px){
    body{
        background: ${({theme:e})=>e.backgroundGradient800};
        background-repeat: no-repeat;
        background-color: ${({theme:e})=>e.globalBackground};
    }
}
`;/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bi(){return bi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bi.apply(this,arguments)}var fn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(fn||(fn={}));const Hd="popstate";function ty(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:l}=r.location;return Wa("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ao(i)}return ry(t,n,null,e)}function $e(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ic(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ny(){return Math.random().toString(36).substr(2,8)}function Vd(e,t){return{usr:e.state,key:e.key,idx:t}}function Wa(e,t,n,r){return n===void 0&&(n=null),bi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Pr(t):t,{state:n,key:t&&t.key||r||ny()})}function ao(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Pr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ry(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=fn.Pop,a=null,u=f();u==null&&(u=0,o.replaceState(bi({},o.state,{idx:u}),""));function f(){return(o.state||{idx:null}).idx}function d(){l=fn.Pop;let k=f(),m=k==null?null:k-u;u=k,a&&a({action:l,location:S.location,delta:m})}function v(k,m){l=fn.Push;let g=Wa(S.location,k,m);n&&n(g,k),u=f()+1;let y=Vd(g,u),h=S.createHref(g);try{o.pushState(y,"",h)}catch{i.location.assign(h)}s&&a&&a({action:l,location:S.location,delta:1})}function x(k,m){l=fn.Replace;let g=Wa(S.location,k,m);n&&n(g,k),u=f();let y=Vd(g,u),h=S.createHref(g);o.replaceState(y,"",h),s&&a&&a({action:l,location:S.location,delta:0})}function p(k){let m=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof k=="string"?k:ao(k);return $e(m,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,m)}let S={get action(){return l},get location(){return e(i,o)},listen(k){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Hd,d),a=k,()=>{i.removeEventListener(Hd,d),a=null}},createHref(k){return t(i,k)},createURL:p,encodeLocation(k){let m=p(k);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:v,replace:x,go(k){return o.go(k)}};return S}var Yd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Yd||(Yd={}));function iy(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Pr(t):t,i=sc(r.pathname||"/",n);if(i==null)return null;let s=Oh(e);sy(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=my(s[l],vy(i));return o}function Oh(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&($e(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=Ln([r,a.relativePath]),f=n.concat(a);s.children&&s.children.length>0&&($e(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Oh(s.children,t,f,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:fy(u,s.index),routesMeta:f})};return e.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of _h(s.path))i(s,o,a)}),t}function _h(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=_h(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>e.startsWith("/")&&a===""?"/":a)}function sy(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:py(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const oy=/^:\w+$/,ly=3,ay=2,uy=1,cy=10,dy=-2,Gd=e=>e==="*";function fy(e,t){let n=e.split("/"),r=n.length;return n.some(Gd)&&(r+=dy),t&&(r+=ay),n.filter(i=>!Gd(i)).reduce((i,s)=>i+(oy.test(s)?ly:s===""?uy:cy),r)}function py(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function my(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=hy({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!f)return null;Object.assign(r,f.params);let d=l.route;s.push({params:r,pathname:Ln([i,f.pathname]),pathnameBase:Sy(Ln([i,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(i=Ln([i,f.pathnameBase]))}return s}function hy(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=gy(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,f,d)=>{if(f==="*"){let v=l[d]||"";o=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}return u[f]=yy(l[d]||"",f),u},{}),pathname:s,pathnameBase:o,pattern:e}}function gy(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ic(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function vy(e){try{return decodeURI(e)}catch(t){return ic(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function yy(e,t){try{return decodeURIComponent(e)}catch(n){return ic(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function sc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function xy(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Pr(e):e;return{pathname:n?n.startsWith("/")?n:wy(n,t):t,search:Ly(r),hash:ky(i)}}function wy(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function _l(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Rh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function $h(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Pr(e):(i=bi({},e),$e(!i.pathname||!i.pathname.includes("?"),_l("?","pathname","search",i)),$e(!i.pathname||!i.pathname.includes("#"),_l("#","pathname","hash",i)),$e(!i.search||!i.search.includes("#"),_l("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let d=t.length-1;if(o.startsWith("..")){let v=o.split("/");for(;v[0]==="..";)v.shift(),d-=1;i.pathname=v.join("/")}l=d>=0?t[d]:"/"}let a=xy(i,l),u=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||f)&&(a.pathname+="/"),a}const Ln=e=>e.join("/").replace(/\/\/+/g,"/"),Sy=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ly=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ky=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ey(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const by=typeof Object.is=="function"?Object.is:Cy,{useState:My,useEffect:Py,useLayoutEffect:zy,useDebugValue:Ty}=jl;function Iy(e,t,n){const r=t(),[{inst:i},s]=My({inst:{value:r,getSnapshot:t}});return zy(()=>{i.value=r,i.getSnapshot=t,Rl(i)&&s({inst:i})},[e,r,t]),Py(()=>(Rl(i)&&s({inst:i}),e(()=>{Rl(i)&&s({inst:i})})),[e]),Ty(r),r}function Rl(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!by(n,r)}catch{return!0}}function Oy(e,t,n){return t()}const _y=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ry=!_y,$y=Ry?Oy:Iy;"useSyncExternalStore"in jl&&(e=>e.useSyncExternalStore)(jl);const Nh=c.createContext(null),Ah=c.createContext(null),_i=c.createContext(null),Jo=c.createContext(null),zr=c.createContext({outlet:null,matches:[]}),Bh=c.createContext(null);function Ua(){return Ua=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ua.apply(this,arguments)}function Ny(e,t){let{relative:n}=t===void 0?{}:t;Ri()||$e(!1);let{basename:r,navigator:i}=c.useContext(_i),{hash:s,pathname:o,search:l}=Dh(e,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:Ln([r,o])),i.createHref({pathname:a,search:l,hash:s})}function Ri(){return c.useContext(Jo)!=null}function Xo(){return Ri()||$e(!1),c.useContext(Jo).location}function Ay(){Ri()||$e(!1);let{basename:e,navigator:t}=c.useContext(_i),{matches:n}=c.useContext(zr),{pathname:r}=Xo(),i=JSON.stringify(Rh(n).map(l=>l.pathnameBase)),s=c.useRef(!1);return c.useEffect(()=>{s.current=!0}),c.useCallback(function(l,a){if(a===void 0&&(a={}),!s.current)return;if(typeof l=="number"){t.go(l);return}let u=$h(l,JSON.parse(i),r,a.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:Ln([e,u.pathname])),(a.replace?t.replace:t.push)(u,a.state,a)},[e,t,i,r])}function Dh(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=c.useContext(zr),{pathname:i}=Xo(),s=JSON.stringify(Rh(r).map(o=>o.pathnameBase));return c.useMemo(()=>$h(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function By(e,t){Ri()||$e(!1);let{navigator:n}=c.useContext(_i),r=c.useContext(Ah),{matches:i}=c.useContext(zr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let a=Xo(),u;if(t){var f;let S=typeof t=="string"?Pr(t):t;l==="/"||(f=S.pathname)!=null&&f.startsWith(l)||$e(!1),u=S}else u=a;let d=u.pathname||"/",v=l==="/"?d:d.slice(l.length)||"/",x=iy(e,{pathname:v}),p=Wy(x&&x.map(S=>Object.assign({},S,{params:Object.assign({},o,S.params),pathname:Ln([l,n.encodeLocation?n.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:Ln([l,n.encodeLocation?n.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,r||void 0);return t&&p?c.createElement(Jo.Provider,{value:{location:Ua({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:fn.Pop}},p):p}function Dy(){let e=Yy(),t=Ey(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return c.createElement(c.Fragment,null,c.createElement("h2",null,"Unexpected Application Error!"),c.createElement("h3",{style:{fontStyle:"italic"}},t),n?c.createElement("pre",{style:i},n):null,s)}class Fy extends c.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?c.createElement(zr.Provider,{value:this.props.routeContext},c.createElement(Bh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function jy(e){let{routeContext:t,match:n,children:r}=e,i=c.useContext(Nh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),c.createElement(zr.Provider,{value:t},r)}function Wy(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||$e(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,l)=>{let a=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=c.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=c.createElement(Dy,null));let f=t.concat(r.slice(0,l+1)),d=()=>{let v=s;return a?v=u:o.route.Component?v=c.createElement(o.route.Component,null):o.route.element&&(v=o.route.element),c.createElement(jy,{match:o,routeContext:{outlet:s,matches:f},children:v})};return n&&(o.route.ErrorBoundary||o.route.errorElement||l===0)?c.createElement(Fy,{location:n.location,component:u,error:a,children:d(),routeContext:{outlet:null,matches:f}}):d()},null)}var Qd;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Qd||(Qd={}));var uo;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(uo||(uo={}));function Uy(e){let t=c.useContext(Ah);return t||$e(!1),t}function Hy(e){let t=c.useContext(zr);return t||$e(!1),t}function Vy(e){let t=Hy(),n=t.matches[t.matches.length-1];return n.route.id||$e(!1),n.route.id}function Yy(){var e;let t=c.useContext(Bh),n=Uy(uo.UseRouteError),r=Vy(uo.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function On(e){$e(!1)}function Gy(e){let{basename:t="/",children:n=null,location:r,navigationType:i=fn.Pop,navigator:s,static:o=!1}=e;Ri()&&$e(!1);let l=t.replace(/^\/*/,"/"),a=c.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=Pr(r));let{pathname:u="/",search:f="",hash:d="",state:v=null,key:x="default"}=r,p=c.useMemo(()=>{let S=sc(u,l);return S==null?null:{location:{pathname:S,search:f,hash:d,state:v,key:x},navigationType:i}},[l,u,f,d,v,x,i]);return p==null?null:c.createElement(_i.Provider,{value:a},c.createElement(Jo.Provider,{children:n,value:p}))}function Qy(e){let{children:t,location:n}=e,r=c.useContext(Nh),i=r&&!t?r.router.routes:Ha(t);return By(i,n)}var Zd;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Zd||(Zd={}));new Promise(()=>{});function Ha(e,t){t===void 0&&(t=[]);let n=[];return c.Children.forEach(e,(r,i)=>{if(!c.isValidElement(r))return;let s=[...t,i];if(r.type===c.Fragment){n.push.apply(n,Ha(r.props.children,s));return}r.type!==On&&$e(!1),!r.props.index||!r.props.children||$e(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ha(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Va(){return Va=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Va.apply(this,arguments)}function Zy(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Ky(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Jy(e,t){return e.button===0&&(!t||t==="_self")&&!Ky(e)}const Xy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function qy(e){let{basename:t,children:n,window:r}=e,i=c.useRef();i.current==null&&(i.current=ty({window:r,v5Compat:!0}));let s=i.current,[o,l]=c.useState({action:s.action,location:s.location});return c.useLayoutEffect(()=>s.listen(l),[s]),c.createElement(Gy,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:s})}const ex=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",tx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vt=c.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:u,preventScrollReset:f}=t,d=Zy(t,Xy),{basename:v}=c.useContext(_i),x,p=!1;if(typeof u=="string"&&tx.test(u)&&(x=u,ex)){let g=new URL(window.location.href),y=u.startsWith("//")?new URL(g.protocol+u):new URL(u),h=sc(y.pathname,v);y.origin===g.origin&&h!=null?u=h+y.search+y.hash:p=!0}let S=Ny(u,{relative:i}),k=nx(u,{replace:o,state:l,target:a,preventScrollReset:f,relative:i});function m(g){r&&r(g),g.defaultPrevented||k(g)}return c.createElement("a",Va({},d,{href:x||S,onClick:p||s?r:m,ref:n,target:a}))});var Kd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Kd||(Kd={}));var Jd;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Jd||(Jd={}));function nx(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=t===void 0?{}:t,l=Ay(),a=Xo(),u=Dh(e,{relative:o});return c.useCallback(f=>{if(Jy(f,n)){f.preventDefault();let d=r!==void 0?r:ao(a)===ao(u);l(e,{replace:d,state:i,preventScrollReset:s,relative:o})}},[a,l,u,r,i,n,e,s,o])}const rx=oe.div`    
    
    padding-bottom: 10rem;
    
    >header{
        display: flex;

        a{
            width: max-content;
        }

        svg{
            display: none;
        }

    }


//------------------ Media Queries ------------------
    
    @media(max-width: 800px){
        >header{
            flex-direction: column;
            justify-content: flex-start;
        }
    }
`,ix=oe.div`
    padding: 3rem 2.5rem;
    margin: 5rem 2.5rem 0 2rem;
    border: 1px solid ${({theme:e})=>e.inputText};
    border-radius: 8px;
    position: relative;

    >h2{
        position: absolute;
        color: ${({theme:e})=>e.titles};
        font-family: "Orbitron";
        font-size: 2rem;
        font-weight: 500;
        top: -1.5rem;
        background-color: ${({theme:e})=>e.globalBackground};
        padding: 0 4px;
    }

    >span{
        position: absolute;
        color: ${({theme:e})=>e.titles};
        font-family: "Monda";
        font-size: 1.4rem;
        bottom: -6rem;
        left: 1rem;

        a{
            color: ${({theme:e})=>e.inputText};
        }
    }

//------------------ Media Queries ------------------
    
    @media(min-width: 801px){
        >h2{
            font-size: 3rem;
            top: -2.3rem;
            padding: 0 5px;
        }

        >span{
            font-size: 1.8rem;
        }
    }

    @media(min-width: 1031px){
        margin: 10rem 2.5rem 0 2.5rem;
        >h2{
            font-size: 4rem;
            top: -2.8rem;
        }

        >span{
            bottom: -7rem;
            font-size: 2.2rem;
        }
    }

    @media(min-width: 1731px){
        padding: 4rem;
        >h2{
            font-size: 4.5rem;
            top: -3.4rem;
        }

        >span{
            bottom: -7rem;
            font-size: 2.5rem;
        }
    }
`,sx=oe.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    li{
        display: flex;
        flex-direction: column;
        gap: 3px;
        a{
            color: ${({theme:e})=>e.inputText};
            font-family: "Orbitron";
            font-size: 1.6rem;
            width: fit-content;
        }

        span{
            color: ${({theme:e})=>e.titles};
            font-family: "Monda";
        }
    }

    .TitleWrapper{
        display: flex;
    }

//------------------ Media Queries ------------------
    
    @media(min-width: 801px){
        li{
            a{
                font-size: 2rem;
            }

            span{
                font-size: 1.6rem;
            }
        }
    }

    @media(min-width: 1031px){
        gap: 4rem;
        li{
            a{
                font-size: 3rem;
            }

            span{
                font-size: 1.8rem;
            }
        }
    }
`,ox=oe.header`
        display: flex;
        flex-direction: row;

        #titleWrapper{
            display: flex;
            align-items: end;
            margin: 2rem 0 0 5rem;
            z-index: 2;
            width: fit-content;
           
        }
        
        a{
            font-family: "Orbitron";
            font-weight: 800;
            font-size: 8rem;
            color: ${({theme:e})=>e.titles};
        }

        span{
            font-family: "Monda";
            font-size: 3rem;
            margin-bottom: 1rem;
            margin-left: 1.8rem;
        }


        #buttonWrapper{
            position: relative;
            
            a{   
                position: absolute;
                top: 2.5rem;
                left: 3.5rem;
                svg{
                    font-size: 5rem;
                }
            }
        }


//------------------ Media Queries ------------------

    @media(max-width: 1730px){
        a{
            font-size: 7.5rem;
        }

        span{
            font-size: 2.2rem;
            margin-bottom: 10px;
            margin-left: 9px;
        }

        #buttonWrapper{
            a{
                top: 2.5rem;
                left: 3rem;
                svg{
                    font-size: 4.5rem;
                }
            }
        }   
    }

    @media(max-width: 1500px){
        #titleWrapper{
            margin-top: 1.8rem;
        }

        a{
            font-size: 7.5rem;
            width: fit-content;
        }

        span{
            font-size: 2.2rem;
            margin-bottom: 10px;
            margin-left: 9px;
        }
    }

    @media(max-width: 1250px){
        #titleWrapper{
            margin: 1.8rem 0 0 3rem;
        }

        a{
            font-size: 5.8rem;
        }

        span{
            font-size: 1.9rem;
            margin-bottom: 8px;
            margin-left: 7px;
        }

        #buttonWrapper{
            a{
                top: 2rem;
                left: 2rem;
                svg{
                    font-size: 3.5rem;
                }
            }
        }
    }

    @media(max-width: 1030px){
        #titleWrapper{
            margin: 1.5rem 0 0 3rem;
            flex-direction: column;
            align-items: flex-start;
        }

        a{
            font-size: 5.5rem;
        }

        #buttonWrapper{
            a{  
                top: 2.1rem;
                left: 3rem;
                svg{
                    font-size: 4rem;
                }
            }
        }
    }

    @media(max-width: 800px){
        #titleWrapper{
            flex-direction: column;
            justify-content: flex-start;
            align-items: start;
            margin: 1rem 0 0 1.8rem;
        }

        a{
            font-size: 3.5rem;
            width: max-content;
        }

        #buttonWrapper{
            a{      
                top: -7.5rem;
                left: 27.5rem;
                svg{
                    font-size: 2.5rem;
                }
            }
        }

        span{
            font-size: 2rem;
            margin: 0;
        }
    }

    @media(max-width: 395px){
        #buttonWrapper{
            a{       
                left: unset;
                top: -4rem;
                right: 2.3rem;
                svg{
                    font-size: 2.5rem;
                }
            }
        }
    }

`;var Fh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Xd=Ze.createContext&&Ze.createContext(Fh),kn=globalThis&&globalThis.__assign||function(){return kn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},kn.apply(this,arguments)},lx=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function jh(e){return e&&e.map(function(t,n){return Ze.createElement(t.tag,kn({key:n},t.attr),jh(t.child))})}function kt(e){return function(t){return Ze.createElement(ax,kn({attr:kn({},e.attr)},t),jh(e.child))}}function ax(e){var t=function(n){var r=e.attr,i=e.size,s=e.title,o=lx(e,["attr","size","title"]),l=i||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),Ze.createElement("svg",kn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:a,style:kn(kn({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&Ze.createElement("title",null,s),e.children)};return Xd!==void 0?Ze.createElement(Xd.Consumer,null,function(n){return t(n)}):t(Fh)}function Wh(e){return kt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M5.828 7l2.536 2.536L6.95 10.95 2 6l4.95-4.95 1.414 1.414L5.828 5H13a8 8 0 1 1 0 16H4v-2h9a6 6 0 1 0 0-12H5.828z"}}]}]})(e)}function Tr(){return R(ox,{children:[R("div",{id:"titleWrapper",children:[L(Vt,{to:"/ChronoSum",children:"Chrono Sum"}),L("span",{children:"time operations!"})]}),L("div",{id:"buttonWrapper",children:L(Vt,{to:"/ChronoSum",children:L(Wh,{})})})]})}function ux(){return R(rx,{children:[L("header",{children:L(Tr,{})}),R(ix,{children:[L("h2",{children:"Tools"}),R(sx,{children:[R("li",{children:[L(Vt,{to:"/ChronoSum/SimpleSum",children:"Simple sum"}),L("span",{children:"Add to, or, subtract from a given time"})]}),R("li",{children:[L(Vt,{to:"/ChronoSum/DurationSum",children:"Duration sum"}),L("span",{children:"Get the total duration of a series of events"})]}),R("li",{children:[L(Vt,{to:"/ChronoSum/TimeBetween",children:"Time Between"}),L("span",{children:"Get the time elapsed between two dates"})]}),R("li",{children:[L(Vt,{to:"/ChronoSum/TimeDifference",children:"Time Zone Difference"}),L("span",{children:"Get the current time and the difference between two location's time zones"})]}),R("li",{children:[L(Vt,{to:"/ChronoSum/RecurrentEvents",children:"Recurrent Events"}),L("span",{children:"Know when a recurrent event is going to happen given a starting date and period"})]})]}),R("span",{children:["Don't forget to check out the github repo",L(Vt,{to:"https://github.com/sogbog/ChronoSum",target:"_blank",children:" here "}),"for more info on how to use"]})]})]})}const cx=oe.div`
    
    >header{
        display: flex;
        justify-content: space-between;

        header{
            #buttonWrapper{
                display: none;
            }
        }
    }

    #goBack{
        position: relative;
        z-index: 1;
        a{
            position: absolute;
            left: 88rem;
            top: 5.8rem;
            svg{
                color: ${({theme:e})=>e.titles};
                font-size: 4.5rem;
            }
        }
    }

    #ClockBackgroundDesktop{
        position: absolute;
        z-index: -1;
        width: 700px;
        left: 0;
        right: 0;
        top: calc(55vh - 320px);
        bottom: 0;
        margin: 0 auto 0 auto;
        opacity: ${({theme:e})=>e.clockOpacity};

        transition: opacity 0.5s;
    }

    #options{
        margin: 6rem 12rem 0 10rem;
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    #ClearAllDesktop, #ClearAllMobile{
        padding: 5px 8px;

        background-color: ${({theme:e})=>e.buttonBackground};

        border: 1px solid ${({theme:e})=>e.inputText};
        border-radius: 8px;
        
        font-family: "Monda";
        font-size: 1.8rem;
        color: ${({theme:e})=>e.titles};
    }

    #ClearAllMobile{
        display: none;
    }

    #App{
        display: flex;
        justify-content: space-between;

        padding: 0 10rem 0 12rem;
        position: relative;
        top: calc(55vh - 450px);

        #ClockBackgroundMobile{
            display: none;
        }
    }

    #InitialTime, #ResultingTime{
        position: relative;
        
        display: flex;
        flex-direction: column;
        gap: 4rem;

        padding: 2rem 5rem 3rem 5rem;

        border: 1px solid ${({theme:e})=>e.inputText};
        border-radius: 1rem;
    }

    #InitialTime{
        #AM-PM_wrapperMobile{
            position: absolute;
            display: flex;
            gap: 2px;
            justify-content: center;
            top: -3.5rem;
            left: 1rem;

            label{
                font-family: "Orbitron";
                font-size: 1.8rem;
                color: ${({theme:e})=>e.titles};
            }

            input{
                width: fit-content;
                opacity: 0;
                width: 2.2rem;
                height: 2.2rem;
                margin-right: 1rem;
            }

            svg{
                color: ${({theme:e})=>e.inputText};
                position: absolute;
                font-size: 3rem;

                top: -4px;
            }
        }
    }

    #ResultingTime{
        #Identifier{
            position: absolute;
            top: 3.4rem;
            left: 13.5rem;
            
            font-size: 2rem;
            font-family: "Orbitron";
            color: ${({theme:e})=>e.inputText};
        }
    }

    #InitialTimeSideLabel, #ResultingTimeSideLabel{
        color: ${({theme:e})=>e.inputText};
        font-family: "Orbitron";
        font-size: 2.2rem;
        writing-mode: vertical-lr;
        text-orientation: upright;
        letter-spacing: -2px;

        background-color: ${({theme:e})=>e.globalBackground};
        padding: 0 0 6px 0;
    }

    #InitialTimeSideLabel{
        position: absolute;
        right: -14px;
        top: 8.5rem;
    }

    #ResultingTimeSideLabel{
        position: absolute;
        left: -14px;
        top: 8.5rem; 
    }

//------------------ Media Queries ------------------

    @media(max-width: 1730px){

        #goBack{
            a{
                left: 77rem;
                top: 5.6rem;
            }
        } 
        
        #options{
            flex-direction: column;
            margin: 3.5rem 35rem 0 0;
            gap: 5px;
            max-height: 8rem;

            flex-wrap: wrap;
            align-items: flex-start;
        }

        #App{
            top: calc(55vh - 422px);
        }

        #InitialTime, #ResultingTime{
            gap: 3rem;

            padding: 1.5rem 3.5rem 2.3rem 3.5rem;
            width: fit-content;
        }

        #ResultingTime{
            #Identifier{
                top: 3rem;
                left: 12.5rem;
            }
        }
    }

    @media(max-width: 1500px){

        #goBack{
            a{
                left: unset;
                right: 2.3rem;
                top: 8.5rem;
                svg{
                    font-size: 3.8rem;
                }
            }
        }        
        
        #options{
            margin: 3.5rem 32rem 0 0;
        }

        #ClearAllDesktop{
            padding: 4px 6px;
            font-size: 1.6rem;
        }

        #App{
            padding: 0 6rem 10rem 7.5rem;
            top: calc(55vh - 350px);
        }

        #InitialTime, #ResultingTime{
            gap: 3rem;

            padding: 1.5rem 3.5rem 2.3rem 3.5rem;
        }

        #InitialTime{
            #AM-PM_wrapperMobile{
                flex-direction: column;
                top: 2rem;
                left: 26.5rem;
                width: fit-content;

                input{
                    margin-left: 0;
                    margin-bottom: 1.6rem;
                }

                svg{
                    top: unset;
                    left: -4px;
                }
            }
        }

        #ResultingTime{
            #Identifier{
                top: 2.3rem;
                left: 10.5rem;
                
                font-size: 1.6rem;
            }
        }

        #InitialTimeSideLabel, #ResultingTimeSideLabel{
            font-size: 1.9rem;

            padding: 0 0 6px 0;
        }

        #InitialTimeSideLabel{
            right: -12px;
            top: 5rem;
        }

        #ResultingTimeSideLabel{
            left: -12px;
            top: 5rem; 
        }
    }

    @media(max-width: 1250px){    

        #goBack{
            a{
                right: 2.2rem;
                top: 8rem;
                svg{
                    font-size: 3.4rem;
                }
            }
        }
        
        #options{
            margin: 3rem 28rem 0 0;
            gap: 5px;
            max-height: 8rem;
        }

        #App{
            padding: 0 6rem 0 7.5rem;
            top: calc(55vh - 300px);
        }

        #InitialTime, #ResultingTime{
            gap: 2rem;

            padding: 1rem 2.5rem 1.5rem 2.5rem;
        }

        #InitialTime{
            #AM-PM_wrapperMobile{
                top: 1.5rem;
                left: 22rem;

                label{
                    font-size: 1.6rem;
                }

                input{
                    width: 1.8rem;
                    height: 1.8rem;
                    margin-bottom: 1.4rem;
                }

                svg{
                    font-size: 2.2rem;
                    left: -1px;
                }
            }
        }

        #ResultingTime{
            #Identifier{
                top: 1.7rem;
                left: 9rem;
            }
        }

        #InitialTimeSideLabel, #ResultingTimeSideLabel{
            font-size: 1.6rem;
        }

        #InitialTimeSideLabel{
            right: -10px;
        }

        #ResultingTimeSideLabel{
            left: -10px;
        }
    }

    @media(max-width: 1030px){    
        
        #goBack{
            a{
                right: 1.4rem;
                top: 6rem;
                svg{
                    font-size: 2.5rem;
                }
            }
        }

        #App{
            padding: 0 3.5rem;
            top: calc(55vh - 345px);
        }

        #InitialTime{
            #AM-PM_wrapperMobile{
                top: 1.5rem;
                left: 20rem;

                label{
                    font-size: 1.4rem;
                }

                input{
                    width: 1.6rem;
                    height: 1.6rem;
                    margin-bottom: 1rem;
                }

                svg{
                    font-size: 2rem;
                    left: -1px;
                }
            }
        }

        #ResultingTime{
            #Identifier{
                top: 1.5rem;
                left: 8.2rem;

                font-size: 1.4rem;
            }
        }

        #InitialTimeSideLabel{
            top: 4.2rem;
        }

        #ResultingTimeSideLabel{
            top: 4.2rem; 
        }
    }

    @media(max-width: 800px){
        >header{
            flex-direction: column;
            justify-content: flex-start;
        }

        #goBack{
            a{
                right: 2.2rem;
                top: 5.5rem;
            }
        }

        #options{
            margin: 2rem 0 6rem 1.8rem;
            padding-right: 2rem;
            gap: 1.5rem;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            z-index: 1;
        }

        #ClearAllDesktop{
            display: none;
        }

        #ClearAllMobile{
            display: unset;

            position: relative;
            top: 13rem;

            padding: 4px 6px;
            font-size: 1.6rem;
        }

        #App{
            align-items: center;
            flex-direction: column;
            gap: 18rem;

            position: relative;
            top: -21.6rem;
            padding-bottom: 5rem;
            background: ${({theme:e})=>e.backgroundGradientMobile};
            
            #FormatWrapper{
                position: absolute;
            }
            
            #ClockBackgroundMobile{
                display: block;
                position: absolute;
                z-index: -1;
                width: 230px;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                margin: auto auto auto auto;
                opacity: ${({theme:e})=>e.clockOpacity};

                transition: opacity 0.5s;
            }
        }

        #InitialTime, #ResultingTime{
            position: relative;
            
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;

            padding: 2rem 4.5rem;
        }

        #InitialTime{
            bottom: -21.6rem;

            #AM-PM_wrapperMobile{
                flex-direction: column;
                gap: 5px;
                top: 1.5rem;
                left: 1rem;

                label{
                    font-size: 1.2rem;
                }

                input{
                    width: 1.4rem;
                    height: 1.4rem;
                    margin-bottom: 8px;
                }

                svg{
                    top: unset;
                    font-size: 2.1rem;
                    left: -4px;
                }
            }
        }
        
        #ResultingTime{
            top: -18rem;
            #Identifier{
                top: 4.2rem;
                left: 8px;
                
                font-size: 1.6rem;
            }
        }

        #InitialTimeSideLabel, #ResultingTimeSideLabel{
            font-size: 2.2rem;
            writing-mode: unset;
            text-orientation: unset;
            letter-spacing: 3px;

            padding: 0 5px;
        }

        #InitialTimeSideLabel{
            right: auto;
            top: -1.5rem;
        }

        #ResultingTimeSideLabel{
            left: auto;
            top: -1.5rem; 
        }
    }

//------Clock responsiveness------

    @media(max-width: 1500px){
        #ClockBackgroundDesktop{
            width: 500px;
            top: calc(55vh - 220px);
        }
    }

    @media(max-width: 1250px){
        #ClockBackgroundDesktop{
            width: 425px;
            top: calc(55vh - 185px);
        }
    }

    @media(max-width: 1030px){
        #ClockBackgroundDesktop{
            width: 350px;
            top: calc(55vh - 125px);
        }
    }

    @media(max-width: 800px){
        #ClockBackgroundDesktop{
            display: none;
        }
    }

////------mobile heigth adjustment////------
    @media(max-width: 800px){
        max-height: 1000px;
        
        #App{
            max-height: 1050px;
        }
    }
    
    @media(max-width: 687px){
        max-height: 1200px;
        
        #App{
            max-height: 1100px;
        }
    }
    
    @media(max-width: 419px){
        max-height: 1700px;

        #App{
            max-height: 1600px;
        }
    }
    `,dx=oe.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8rem;

//------------------ Media Queries ------------------

    @media(max-width: 1500px){
        gap: 5.5rem;
    }

    @media(max-width: 1250px){
        gap: 3rem;
    }

    @media(max-width: 800px){
        flex-direction: row;
        flex-wrap: wrap;
        position: relative;
    }
`,fx=oe.div`
    position: absolute;
    right: 43rem;

    display: flex;
    flex-direction: column;
    gap: 5rem;

    width: 22rem;
    max-height: 68.8rem;

    overflow-wrap: break-word;
    overflow-y: auto;

    p, span{
        font-size: 4rem;
        font-family: "Orbitron";
        color: ${({theme:e})=>e.inputText};
    }

    ::-webkit-scrollbar{
        width: 0;
    }

//------------------ Media Queries ------------------

    @media(max-width: 1730px){
        right: 37rem;
        gap: 3rem;

        p, span{
            font-size: 3.5rem;
        }
    }

    @media(max-width: 1500px){
        right: 32rem;
        gap: 2rem;
        width: 15rem;

        p, span{
            font-size: 2.5rem;
        }
    }

    @media(max-width: 1250px){
        right: 6rem;
        top: -5rem;
        gap: 2rem;
        width: fit-content;
        max-height: fit-content;

        flex-direction: row;
        overflow-wrap: normal;
        p, span{
            font-size: 2rem;
        }
    }

    @media(max-width: 1030px){
        right: 5rem;
        gap: 1.5rem;

        p, span{
            font-size: 1.6rem;
        }
    }

    @media(max-width: 800px){
        position: relative;
        justify-content: center;
        right: 0;
        top: -10rem;
        gap: 1rem;

        width: 78.15vw;

        overflow-wrap: break-word;

        p{
            max-width: 6.7rem;
        }
    }
`,px=oe.div`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;

    input{
        width: 8rem;
        height: 4rem;
        border: none;
        border-radius: 8px;

        background-color: ${({theme:e})=>e.inputBackground};

        font-size: 3rem;
        font-family: "Orbitron";
        color: ${({theme:e})=>e.inputText};

        padding: 0 6px 3px 6px;
        text-align: center;
    }

    input:focus{
        outline: 1px solid ${({theme:e})=>e.inputText};
    }
    
    label{
        font-size: 1.8rem;
        font-family: "Monda";
        color: ${({theme:e})=>e.titles};
    }

    .Warning{
        font-family: "Monda";
        font-size: 1.8rem;
        position: absolute;
        top: -3rem;
        right: -5rem;
        width: max-content;
        

        color: ${({theme:e})=>e.inputText};
        opacity: 0;
        transition: opacity 1s;
    }

    .active{
        transition: none;
    }

//------------------ Media Queries ------------------

    @media(max-width: 1250px){
        input{
            width: 7rem;
            height: 3.4rem;

            font-size: 2.3rem;

            padding: 0 3px 1.5px 3px;
        }
        
        label{
            font-size: 1.6rem;
        }

        .Warning{
            font-size: 1.6rem;
            top: -2.6rem;
            left: -4rem;
        }
    }

    @media(max-width: 800px){
        position: unset;
        .Warning{
            top: -3.5rem;
            left: 2rem;
        }

        input{
            background-color: ${({theme:e})=>e.bigInputBackground};
        }
    } 
`;function cs({name:e,state:t,onChange:n}){return R(px,{children:[L("label",{htmlFor:"name",children:e}),L("input",{type:"text",id:e,onChange:n,value:t}),L("span",{id:e+"ToAddWarning",className:"Warning"})]})}const mx=oe.div`
    display: flex;
    flex-direction: column;
    position: relative;

    input{
        width: 18rem;
        height: 8rem;
        border: none;
        border-radius: 8px;

        background-color: ${({theme:e})=>e.bigInputBackground};

        font-size: 6rem;
        font-family: "Orbitron";
        color: ${({theme:e})=>e.inputText};
        text-align: center;

        padding: 0 12px 6px 12px;
    }

    input:focus{
        outline: 1px solid ${({theme:e})=>e.inputText};
    }

    label{
        font-size: 3rem;
        font-family: "Monda";
        color: ${({theme:e})=>e.titles};
    }

    .Warning{
        font-family: "Monda";
        font-size: 1.8rem;
        position: absolute;
        bottom: 3rem;
        left: 25.5rem;
        width: max-content;
        

        color: ${({theme:e})=>e.inputText};
        opacity: 0;
        transition: opacity 1s;
    }

    .active{
        transition: none;
    }

//------------------ Media Queries ------------------

    @media(max-width: 1500px){
        position: unset;
        input{
            width: 16rem;
            height: 6.5rem;

            font-size: 5rem;

            padding: 0 8px 5px 8px;
        }

        label{
            font-size: 2rem;
        }

        .Warning{
            font-size: 1.8rem;
            top: -4rem;
            left: 0;
            z-index: -1;
        }
    }

    @media(max-width: 1250px){
        input{
            width: 14rem;
            height: 6rem;
        }
    }

    @media(max-width: 1030px){
        input{
            width: 12rem;
            height: 5rem;

            font-size: 4rem;

            padding: 0 8px 3px 8px;
        }

        label{
            font-size: 1.6rem;
        }

        .Warning{
            font-size: 1.6rem;
            top: -3.5rem;
        }
    }

    @media(max-width: 800px){
        .Warning{
            left: -2.5rem;
            top: -4.5rem;
        }
    }
`,Uh=c.createContext({});function hx({children:e}){const[t,n]=c.useState(["Hours","Minutes","Minutes","Seconds","Miliseconds"]),[r,i]=c.useState(!1),[s,o]=c.useState([]),[l,a]=c.useState([]),[u,f]=c.useState();return L(Uh.Provider,{value:{enabledFields:t,setEnabledFields:n,format:r,setFormat:i,events:s,setEvents:o,recurringEvents:l,setRecurringEvents:a,selectedDay:u,setSelectedDay:f},children:e})}function Ot(){return c.useContext(Uh)}function ds({name:e,state:t,onChange:n}){const{enabledFields:r}=Ot();return R(mx,{children:[L("label",{htmlFor:"name",children:e}),L("input",{type:"text",id:e,value:r.includes(e+"s")?t:"--",disabled:!r.includes(e+"s"),onChange:n}),L("span",{id:"Initial"+e+"Warning",className:"Warning"})]})}const gx=oe.div`
    display: flex;
    flex-direction: column;

    span{
        width: 18rem;
        height: 8rem;
        border: none;
        border-radius: 8px;

        background-color: ${({theme:e})=>e.bigInputBackground};

        font-size: 6rem;
        font-family: "Orbitron";
        color: ${({theme:e})=>e.inputText};
        text-align: center;

        padding: 0 12px 6px 12px;

        overflow-x: auto;
        overflow-y: hidden;

        ::-webkit-scrollbar {
            width: 0;
        }
    }

    label{
        font-size: 3rem;
        font-family: "Monda";
        color: ${({theme:e})=>e.titles};
    }

//------------------ Media Queries ------------------

    @media(max-width: 1500px){
        span{
            width: 16rem;
            height: 6.5rem;

            font-size: 5rem;
        }

        label{
            font-size: 2rem;
        }
    }

    @media(max-width: 1250px){
        span{
            width: 14rem;
            height: 6rem;
        }
    }    

    @media(max-width: 1030px){
        span{
            width: 12.4rem;
            height: 5rem;

            font-size: 4rem;
        }

        label{
            font-size: 1.6rem;
        }
    }
`;function fs({name:e,state:t}){return R(gx,{children:[L("label",{htmlFor:"Resulting"+e,children:e}),L("span",{id:"Resulting"+e,children:t})]})}const vx=oe.div`
    display: flex;
    position: relative;

    input{
        position: absolute;
        width: 3rem;
        height: 3rem;
        left: 0px;
        top: 0px;
        opacity: 0;
    }
    
    label{
        font-size: 1.8rem;
        font-family: "Monda";
        color: ${({theme:e})=>e.titles};
    }

    #checkboxDisplay{
        display: flex;
        justify-content: center;
        align-items: center;
        svg{
            font-size: 3rem;
            color: ${({theme:e})=>e.inputText};
        }
    }

//------------------ Media Queries ------------------

    @media(max-width: 1250px){
        input{
            width: 1.5rem;
            height: 1.5rem;
            left: 3px;
            top: 5px;
            opacity: 0;
        }
    
        label{
            font-size: 1.6rem;
        }

        #checkboxDisplay{
            svg{
                font-size: 2.2rem;
            }
        }
    }
`;function Ya(e){return kt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M9 9h6v6H9z"}},{tag:"path",attr:{d:"M19 17V7c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2zM7 7h10l.002 10H7V7z"}}]})(e)}function Ga(e){return kt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7 5c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2H7zm0 12V7h10l.002 10H7z"}}]})(e)}function ps({name:e,calculate:t}){const{setEnabledFields:n}=Ot(),[r,i]=c.useState(!0);c.useEffect(()=>{document.querySelector("#"+e).checked=!0},[]);function s(){const o=document.querySelector("#"+e).checked;i(o),n(o?l=>[...l,e]:l=>l.filter(a=>a!=e)),t(o,e)}return R(vx,{children:[L("div",{id:"checkboxDisplay",children:r?L(Ya,{}):L(Ga,{})}),L("input",{type:"checkbox",id:e,onChange:()=>s()}),L("label",{htmlFor:e,children:e})]})}const yx=oe.div`
    width: max-content;
    display: flex;
    gap: 10px;
    align-items: center;
    
    >label{
        font-size: 1.8rem;
        font-family: "Monda";
        color: ${({theme:e})=>e.titles};
    }

    .InputWrapper{
        display: flex;
        align-items: center;
        gap: 4px;

        span{
            font-size: 1.6rem;
            font-family: "Orbitron";
            color: ${({theme:e})=>e.titles};
        }

        input{
            opacity: 0;
        }

        .SliderBox{
            position: relative;
            width: 3rem;
            height: 3rem;
        }
        .Slider{
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: ${({theme:e})=>e.bigInputBackground};
            border: 1px solid ${({theme:e})=>e.bigInputBackground};
            border-radius: 50%;
            transition: .4s;            

            svg{
                position: absolute;
                color: ${({theme:e})=>e.inputText};
                font-size: 1.9rem;

                top: 4px;
                right: 10px;
                transition: 0.5s;
            }
        }

        input:focus + .Slider{
            border: 1px solid ${({theme:e})=>e.inputText};
        }

        input:checked + .Slider{
            svg{
                transform: rotate(180deg);
                transform-origin: 79.17% 50%;
            }
        }
    }

//------------------ Media Queries ------------------

    @media(max-width: 1250px){    
        >label{
            font-size: 1.6rem;
        }

        span{
            font-size: 1.4rem;
        }
    }
`;function xx(e){return kt({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M17 12h-14"}},{tag:"path",attr:{d:"M6 9l-3 3l3 3"}},{tag:"path",attr:{d:"M19 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}}]})(e)}function wx({name:e,opt1:t,opt2:n,onChange:r}){return R(yx,{children:[L("label",{htmlFor:"FormatSlider",children:e}),R("div",{className:"InputWrapper",children:[L("span",{children:t}),R("label",{htmlFor:"FormatSlider",className:"SliderBox",children:[L("input",{type:"checkbox",id:"FormatSlider",onChange:r}),L("span",{className:"Slider",children:L(xx,{})})]}),L("span",{children:n})]})]})}const qd="/ChronoSum/assets/clock_face_roman-7ffd0c99.svg";let X={initialHours:0,initialMinutes:0,initialSeconds:0,initialMiliseconds:0,hoursToAdd:0,minutesToAdd:0,secondsToAdd:0,milisecondsToAdd:0};function Sx(){const{enabledFields:e,format:t,setFormat:n}=Ot(),[r,i]=c.useState(""),[s,o]=c.useState(""),[l,a]=c.useState(""),[u,f]=c.useState(""),[d,v]=c.useState(""),[x,p]=c.useState(""),[S,k]=c.useState(""),[m,g]=c.useState(""),[y,h]=c.useState(""),[b,M]=c.useState(""),[I,_]=c.useState(""),[w,C]=c.useState(""),[P,D]=c.useState(""),[V,U]=c.useState(""),[H,G]=c.useState(""),[ee,O]=c.useState(""),[j,Y]=c.useState("AM"),[te,A]=c.useState("AM");function $(){i(""),o(""),a(""),f(""),v(""),p(""),k(""),g(""),h(""),M(""),_(""),C(""),A("AM"),X.initialHours=0,X.initialMinutes=0,X.initialSeconds=0,X.initialMiliseconds=0,X.hoursToAdd=0,X.minutesToAdd=0,X.secondsToAdd=0,X.milisecondsToAdd=0,z()}function T(E){if(E)Y(E),E=="PM"&&(r=="0"||r==""?i(""):r!="12"&&(X.initialHours+=12)),E=="AM"&&(r=="12"?(i("11"),X.initialHours=11):r!=""&&(X.initialHours-=12)),z();else{const Z=document.querySelector("#FormatSlider").checked;n(Z),Z?(r>11&&(r>12&&i(W=>W-12),Y("PM")),y>11&&(y>12&&h(W=>W-12),A("PM"))):r!=""&&(j=="PM"&&(r!=12&&i(W=>W+12),Y("AM"),A("AM")),te=="PM"&&y!="12"&&h(W=>W+12))}}function Q(E,Z){switch(Z){case"initialHours":if(E!=0&isNaN(parseInt(E))){B("#InitialHourWarning","Only numbers are allowed");return}if(t){if(j=="AM"){if(E>11||E<0){B("#InitialHourWarning","Hour AM must be between 0 and 11");return}E!=""?(i(parseInt(E)),X.initialHours=parseInt(E)):(i(""),X.initialHours=0)}if(j=="PM"){if((E>12||E<1)&&E!=""){B("#InitialHourWarning","Hour PM must be between 1 and 12");return}E!=""?(i(parseInt(E)),E<12?X.initialHours=parseInt(E)+12:X.initialHours=parseInt(E)):(i(""),X.initialHours=0)}}else{if(E>23||E<0){B("#InitialHourWarning","Hour must be a value between 0 and 23");return}E!=""?(i(parseInt(E)),X.initialHours=parseInt(E)):(i(""),X.initialHours=0)}break;case"initialMinutes":if(E>59||E<0){B("#InitialMinuteWarning","Minute must be a value between 0 and 59");return}if(E!=0&isNaN(parseInt(E))){B("#InitialMinuteWarning","Only numbers are allowed");return}E!=""?(o(parseInt(E)),X.initialMinutes=parseInt(E)):(o(""),X.initialMinutes=0);break;case"initialSeconds":if(E>59||E<0){B("#InitialSecondWarning","Second must be a value between 0 and 59");return}if(E!=0&isNaN(parseInt(E))){B("#InitialSecondWarning","Only numbers are allowed");return}E!=""?(a(parseInt(E)),X.initialSeconds=parseInt(E)):(a(""),X.initialSeconds=0);break;case"initialMiliseconds":if(E>999||E<0){B("#InitialMilisecondWarning","Milisecond must be a value between 0 and 999");return}if(E!=0&isNaN(parseInt(E))){B("#InitialMilisecondWarning","Only numbers are allowed");return}E!=""?(f(parseInt(E)),X.initialMiliseconds=parseInt(E)):(f(""),X.initialMiliseconds=0);break;case"hoursToAdd":if(E!=0&isNaN(parseInt(E))&E!="-"){B("#HoursToAddWarning","Only numbers are allowed");return}if(E>=9007199254740991){B("#HoursToAddWarning","Max value reached!");return}E!=""&E!="-"?(v(parseInt(E)),X.hoursToAdd=parseInt(E)):(E=="-"?v("-"):v(""),X.hoursToAdd=0);break;case"minutesToAdd":if(E!=0&isNaN(parseInt(E))&E!="-"){B("#MinutesToAddWarning","Only numbers are allowed");return}if(E>=9007199254740991){B("#MinutesToAddWarning","Max value reached!");return}E!=""&E!="-"?(p(parseInt(E)),X.minutesToAdd=parseInt(E)):(E=="-"?p("-"):p(""),X.minutesToAdd=0);break;case"secondsToAdd":if(E!=0&isNaN(parseInt(E))&E!="-"){B("#SecondsToAddWarning","Only numbers are allowed");return}if(E>=9007199254740991){B("#SecondsToAddWarning","Max value reached!");return}E!=""&E!="-"?(k(parseInt(E)),X.secondsToAdd=parseInt(E)):(E=="-"?k("-"):k(""),X.secondsToAdd=0);break;case"milisecondsToAdd":if(E!=0&isNaN(parseInt(E))&E!="-"){B("#MilisecondsToAddWarning","Only numbers are allowed");return}if(E>=9007199254740991){B("#MilisecondsToAddWarning","Max value reached!");return}E!=""&E!="-"?(g(parseInt(E)),X.milisecondsToAdd=parseInt(E)):(E=="-"?g("-"):g(""),X.milisecondsToAdd=0);break}z()}function z(E,Z){let W=0,ne=0,J=0,le=0,q=0,ie=0,pe=0,ce="";if(Z){switch(Z){case"Hours":E?le=X.initialHours+X.hoursToAdd:le=0;break;case"Minutes":E?q=X.initialMinutes+X.minutesToAdd:q=0;break;case"Seconds":E?ie=X.initialSeconds+X.secondsToAdd:ie=0;break;case"Miliseconds":E?pe=X.initialMiliseconds+X.milisecondsToAdd:pe=0;break}Z!="Hours"&e.includes("Hours")&&(le=X.initialHours+X.hoursToAdd),Z!="Minutes"&e.includes("Minutes")&&(q=X.initialMinutes+X.minutesToAdd),Z!="Seconds"&e.includes("Seconds")&&(ie=X.initialSeconds+X.secondsToAdd),Z!="Miliseconds"&e.includes("Miliseconds")&&(pe=X.initialMiliseconds+X.milisecondsToAdd)}else e.includes("Hours")&&(le=X.initialHours+X.hoursToAdd),e.includes("Minutes")&&(q=X.initialMinutes+X.minutesToAdd),e.includes("Seconds")&&(ie=X.initialSeconds+X.secondsToAdd),e.includes("Miliseconds")&&(pe=X.initialMiliseconds+X.milisecondsToAdd);if(pe>999){const re=Math.floor(pe/1e3);pe=pe%1e3,ie+=re}else if(pe<0){const re=Math.floor(pe/1e3);ie+=re,pe-=re*1e3}if(ie>59){const re=Math.floor(ie/60);ie=ie%60,q+=re}else if(ie<0){const re=Math.floor(ie/60);q+=re,ie-=re*60}if(q>59){const re=Math.floor(q/60);q=q%60,le+=re}else if(q<0){const re=Math.floor(q/60);le+=re,q-=re*60}if(le>23){const re=Math.floor(le/24);le=le%24,J=re,ce="after"}else if(le<0){const re=Math.floor(le/24);J-=re,le-=re*24,ce="before"}if(J>29){const re=Math.floor(J/30);J=J%30,ne=re}else if(J<0){const re=Math.floor(J/30);ne-=re,J-=re*30}if(ne>11){const re=Math.floor(ne/12);ne=ne%12,W=re}else if(W<0){const re=Math.floor(ne/12);W-=re,ne-=re*12}t&&(le>11?(le>12&&(le-=12),A("PM")):A("AM")),le!=0?h(le):(X.hoursToAdd!=""||X.initialHours!="")&(!Z||Z!="Hours"||Z=="Hours"&E)?h("0"):h(""),q!=0?M(q):(X.minutesToAdd!=""||X.initialMinutes!="")&(!Z||Z!="Minutes"||Z=="Minutes"&E)?M("0"):M(""),ie!=0?_(ie):(X.secondsToAdd!=""||X.initialSeconds!="")&(!Z||Z!="Seconds"||Z=="Seconds"&E)?_("0"):_(""),pe!=0?C(pe):(X.milisecondsToAdd!=""||X.initialMiliseconds!="")&(!Z||Z!="Miliseconds"||Z=="Miliseconds"&E)?C("0"):C(""),J!=0?Math.sqrt(Math.pow(J,2))==1?D("The day"):D(`${J} days`):ne!=0||W!=0?D("0 days"):D(""),ne!=0?ne>1?U(`${ne} months`):U(`${ne} month`):W!=0?U("0 months"):U(""),W!=0?W>1?G(`${W} years`):G(`${W} year`):G(""),J!=0||ne!=0||W!=0?O(ce):O("")}function B(E,Z){const W=document.querySelector(E);W.textContent=Z,W.classList.add("active"),W.style.opacity=1,setTimeout(()=>W.classList.remove("active"),1),setTimeout(()=>W.style.opacity=0,500)}return R(cx,{children:[L("div",{id:"goBack",children:L(Vt,{to:"/ChronoSum",children:L(Wh,{})})}),R("header",{children:[L(Tr,{}),R("div",{id:"options",children:[L(ps,{name:"Hours",calculate:z}),L(ps,{name:"Minutes",calculate:z}),L(ps,{name:"Seconds",calculate:z}),L(ps,{name:"Miliseconds",calculate:z}),L(wx,{name:"Format",opt1:"24",opt2:"12",id:"FormatWrapper",onChange:()=>T()})]})]}),L("img",{src:qd,id:"ClockBackgroundDesktop"}),R("div",{id:"App",children:[R("div",{id:"InitialTime",children:[L("label",{htmlFor:"InitialTime",id:"InitialTimeSideLabel",children:"Initial Time"}),t==!0&&R("div",{id:"AM-PM_wrapperMobile",children:[L("label",{htmlFor:"AM",children:"AM"}),L("div",{className:"RadioDisplay",children:j=="AM"?L(Ya,{}):L(Ga,{})}),L("input",{type:"radio",id:"AM",name:"AM-PM",defaultChecked:!0,onClick:()=>T("AM")}),L("label",{htmlFor:"PM",children:"PM"}),L("div",{className:"RadioDisplay",children:j=="PM"?L(Ya,{}):L(Ga,{})}),L("input",{type:"radio",id:"PM",name:"AM-PM",onClick:()=>T("PM")})]}),L(ds,{name:"Hour",state:r,onChange:E=>Q(E.target.value,"initialHours")}),L(ds,{name:"Minute",state:s,onChange:E=>Q(E.target.value,"initialMinutes")}),L(ds,{name:"Second",state:l,onChange:E=>Q(E.target.value,"initialSeconds")}),L(ds,{name:"Milisecond",state:u,onChange:E=>Q(E.target.value,"initialMiliseconds")})]}),L("button",{type:"button",id:"ClearAllMobile",onClick:()=>$(),children:"Clear Inputs"}),R(dx,{children:[e.includes("Hours")&&L(cs,{name:"Hours",state:d,onChange:E=>Q(E.target.value,"hoursToAdd")}),e.includes("Minutes")&&L(cs,{name:"Minutes",state:x,onChange:E=>Q(E.target.value,"minutesToAdd")}),e.includes("Seconds")&&L(cs,{name:"Seconds",state:S,onChange:E=>Q(E.target.value,"secondsToAdd")}),e.includes("Miliseconds")&&L(cs,{name:"Miliseconds",state:m,onChange:E=>Q(E.target.value,"milisecondsToAdd")}),L("button",{type:"button",id:"ClearAllDesktop",onClick:()=>$(),children:"Clear Inputs"})]}),L("img",{src:qd,id:"ClockBackgroundMobile"}),R(fx,{id:"date",children:[P&&L("p",{id:"Days",children:P}),V&&L("p",{id:"Months",children:V}),H&&L("p",{id:"Years",children:H}),ee&&L("span",{children:ee})]}),R("div",{id:"ResultingTime",children:[L("label",{htmlFor:"ResultingTime",id:"ResultingTimeSideLabel",children:"Resulting Time"}),t&&L("span",{id:"Identifier",children:te}),L(fs,{name:"Hour",state:y}),L(fs,{name:"Minute",state:b}),L(fs,{name:"Second",state:I}),L(fs,{name:"Milisecond",state:w})]})]})]})}const Lx=oe.div`
    background: ${({theme:e})=>e.upwardsGradient};
    transition: all 0.5s;
    min-height: 100vh;
    height: 100%;

    header{
        display: flex;

        a{
            width: max-content;
        }

    }
//------------------ Media Queries ------------------

@media(max-width: 801px){
    header{
        flex-direction: column;
        justify-content: flex-start;
    }
}
`,kx=oe.ul`
    padding: 3rem 2.5rem;
    margin: 5rem 2.5rem 0 2rem;
    border: 1px solid ${({theme:e})=>e.inputText};
    border-radius: 8px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.2rem;

    >span{
        position: absolute;
        color: ${({theme:e})=>e.inputText};
        font-family: "Orbitron";
        font-size: 2rem;
        font-weight: 500;
        top: -1.5rem;
        background-color: ${({theme:e})=>e.globalBackground};
        padding: 0 4px;
    }
//------------------ Media Queries ------------------

    @media(min-width: 801px){
        flex-direction: row;
        flex-wrap: wrap;
        padding: 3rem 2.5rem;
        margin: 5rem 2rem 0 2rem;

        >span{
            font-size: 2.5rem;
            top: -1.8rem;
        }
    }

    @media(min-width: 1031px){
        padding: 3.5rem 2.8rem;
        margin: 6rem 3rem 0 3rem;

        >span{
            font-size: 2.5rem;
            top: -1.8rem;
        }
    }

    @media(min-width: 1501px){
        padding: 3.5rem 2.8rem;
        margin: 8rem 5rem 0 5rem;

        >span{
            font-size: 3.5rem;
            top: -2.5rem;
        }
    }
`,Ex=oe.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5rem;

    >h2{
        margin-top: 2.5rem;
        color: ${({theme:e})=>e.inputText};
        font-family: "Orbitron";
        font-weight: 500;
        font-size: 2rem;
    }

    #resultsWrapper{
        display: flex;
        gap: 2rem;
    }

    .resultWrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        span{
            text-align: center;
            width: clamp(6rem, 30vw - 5rem, 15rem);
            height: 3rem;
            background-color: ${({theme:e})=>e.bigInputBackground};
            border: none;
            border-radius: 5px;
            color: ${({theme:e})=>e.inputText};
            font-family: "Orbitron";
            font-size: 2.2rem;
            padding: 0 5px;
        }

        label{
            font-size: 1rem;
            font-family: "Monda";
            color: ${({theme:e})=>e.titles};
        }

        #hours{
            overflow-x: auto;
            overflow-y: hidden;
            padding: 0 5px 4px 5px;

            ::-webkit-scrollbar {
                display: none;
            }
        }

        #hours:disabled{
            opacity: 1;
        }
    }
//------------------ Media Queries ------------------

    @media(min-width: 801px){
        >h2{
            font-size: 2.5rem
        }

        .resultWrapper{
            span, input{
                height: 4rem;
                font-size: 2.8rem;
                padding: 2px 0 0 0;
            }

            label{
                font-size: 2rem;
                font-family: "Monda";
                color: ${({theme:e})=>e.titles};
            }
        }
    }

    @media(min-width: 1031px){
        >h2{
            font-size: 2.5rem
        }

        .resultWrapper{
            span, input{
                height: 4rem;
                font-size: 2.8rem;
                padding: 2px 0 0 0;
            }

            label{
                font-size: 2rem;
                font-family: "Monda";
                color: ${({theme:e})=>e.titles};
            }
        }
    }

    @media(min-width: 1501px){
        >h2{
            font-size: 3.5rem
        }

        #resultsWrapper{
            gap: 3rem;
        }

        .resultWrapper{
            span, input{
                height: 6rem;
                font-size: 4.4rem;
                padding: 0;
                border-radius: 1rem;
            }

            label{
                font-size: 3rem;
                font-family: "Monda";
                color: ${({theme:e})=>e.titles};
            }
        }
    }
`,Cx=oe.li`
    background-color: ${({theme:e})=>e.eventBackground};
    padding: 1rem;
    border: 1px solid ${({theme:e})=>e.buttonBackground};
    border-radius: 5px;
    position: relative;
    display: flex;
    word-wrap: break-word;
    flex-direction: column;
    gap: 1.4rem;

    .Delete{
        background: none;
        border: none;
        height: 1.5rem;
        position: absolute;
        right: 5px;
        top: 5px;

        svg{
            color: ${({theme:e})=>e.titles};
            font-size: 1.5rem;
        }
    }

    .Name{
        font-size: 1.8rem;
        font-family: "Monda";
        color: ${({theme:e})=>e.titles};
        padding-right: 1rem;
    }

    .DurationWrapper{
        display: flex;
        flex-direction: column;
        gap: 6px;

        >span{
            font-size: 1.2rem;
            font-family: "Monda";
            color: ${({theme:e})=>e.titles};
        }
    }

    .FieldsWrapper{
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: space-between;
    }

//------------------ Media Queries ------------------

    @media(min-width: 801px){
        width: 22rem;
        gap: 1.6rem;
        min-height: 35.8rem;

        .Delete{
            height: 1.8rem;
            right: 5px;
            top: 5px;

            svg{
                font-size: 1.8rem;
            }
        }

        .Name{
            font-size: 2.8rem;
            padding-right: 1rem;
        }

        .DurationWrapper{
            flex-direction: column;
            gap: 6px;

            >span{
                font-size: 1.8rem;
            }
        }

        .FieldsWrapper{
            gap: 1rem;
            flex-direction: column;
            justify-content: space-between;
        }
    }

    @media(min-width: 1031px){
        min-height: 38.1rem;
        .Name{
            >label{
                font-size: 1.8rem;
            }
        }

        .DurationWrapper{
            flex-direction: column;
            gap: 1rem;

            >span{
                font-size: 2rem;
            }
        }
    }

    @media(min-width: 1501px){
        width: 25rem;
        min-height: 41.1rem;
        padding: 1.5rem;

        .Delete{
            height: 2rem;
            width: 2rem;
            right: 6px;
            top: 6px;

            svg{
                font-size: 2rem;
            }
        }

        .Name{
            >label{
                font-size: 2rem;
            }
        }

        .DurationWrapper{
            flex-direction: column;
            gap: 1rem;

            >span{
                font-size: 2.5rem;
            }
        }
    }
`,$l=oe.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    >label{
        font-size: 1rem;
        font-family: "Monda";
        color: ${({theme:e})=>e.titles};
    }

    span{
        text-align: center;
        width: clamp(6rem, 30vw - 5rem, 15rem);
        height: 3rem;
        background-color: ${({theme:e})=>e.inputBackground};
        border: none;
        border-radius: 5px;
        color: ${({theme:e})=>e.inputText};
        font-family: "Orbitron";
        font-size: 1.6rem;
        padding: 4px 5px;
        white-space: nowrap;
        overflow-x: auto;
        overflow-y: hidden;

        ::-webkit-scrollbar {
            display: none;
        }
    }

//------------------ Media Queries ------------------

    @media(min-width: 801px){
        >label{
            font-size: 1.6rem;
        }

        span{
            width: clamp(6rem, 30vw - 5rem, 15rem);
            height: 4rem;
            font-size: 2.8rem;
            padding: 0 8px;
            
        }
    }

    @media(min-width: 1031px){
        >label{
            font-size: 1.8rem;
        }
    }
`;function Hh(e){return kt({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 3c-4.963 0-9 4.038-9 9s4.037 9 9 9 9-4.038 9-9-4.037-9-9-9zm0 16c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7zM12.707 12l2.646-2.646c.194-.194.194-.512 0-.707-.195-.194-.513-.194-.707 0l-2.646 2.646-2.646-2.647c-.195-.194-.513-.194-.707 0-.195.195-.195.513 0 .707l2.646 2.647-2.646 2.646c-.195.195-.195.513 0 .707.097.098.225.147.353.147s.256-.049.354-.146l2.646-2.647 2.646 2.646c.098.098.226.147.354.147s.256-.049.354-.146c.194-.194.194-.512 0-.707l-2.647-2.647z"}}]})(e)}function bx({name:e,hours:t,minutes:n,seconds:r,id:i}){const{setEvents:s}=Ot();function o(){s(l=>l.filter(a=>a.id!=i))}return R(Cx,{children:[L("button",{className:"Delete",onClick:()=>o(),children:L(Hh,{})}),L("span",{className:"Name",children:e}),R("div",{className:"DurationWrapper",children:[L("span",{children:"Duration:"}),R("div",{className:"FieldsWrapper",children:[R($l,{children:[L("label",{children:"Hours"}),L("span",{children:t})]}),R($l,{children:[L("label",{children:"Minutes"}),L("span",{children:n})]}),R($l,{children:[L("label",{children:"Seconds"}),L("span",{children:r})]})]})]})]})}const Mx=oe.li`
    padding: 1rem;
    border: 1px dashed ${({theme:e})=>e.buttonBackground};
    border-radius: 5px;
    position: relative;
    display: flex;
    word-wrap: break-word;
    flex-direction: column;
    gap: 1.4rem;

    .Add{
        background: none;
        border: none;
        height: 1.5rem;
        position: absolute;
        right: 5px;
        top: 5px;

        svg{
            color: ${({theme:e})=>e.titles};
            font-size: 1.5rem;
        }
    }

    .Name{
        display: flex;
        flex-direction: column;
        align-items: center;

        >label{
            font-size: 1rem;
            font-family: "Monda";
            color: ${({theme:e})=>e.titles};
        }

        >input{
            width: clamp(15rem, 70vw - 15rem, 25rem);
            background-color: ${({theme:e})=>e.bigInputBackground};
            border: none;
            border-radius: 5px;
            height: 3rem;
            color: ${({theme:e})=>e.inputText};
            font-family: "Orbitron";
            font-size: 1.6rem;
            padding: 0 5px;
        }

        >input:focus{
            outline: 1px solid ${({theme:e})=>e.inputText};
        }
    }

    .DurationWrapper{
        display: flex;
        flex-direction: column;
        gap: 6px;

        span{
            font-size: 1.2rem;
            font-family: "Monda";
            color: ${({theme:e})=>e.titles};
        }
    }

    .FieldsWrapper{
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: space-between;
    }

//------------------ Media Queries ------------------

    @media(min-width: 801px){
        width: 22rem;
        gap: 1.6rem;

        .Add{
            height: 1.8rem;
            right: 5px;
            top: 5px;

            svg{
                font-size: 1.8rem;
            }
        }

        .Name{
            >label{
                font-size: 1.6rem;
            }

            >input{
                width: 18rem;
                height: 4rem;
                font-size: 2.8rem;
                padding: 0 8px;
            }
        }

        .DurationWrapper{
            flex-direction: column;
            gap: 6px;

            span{
                font-size: 1.8rem;
            }
        }

        .FieldsWrapper{
            gap: 1rem;
            flex-direction: column;
            justify-content: space-between;
        }
    }

    @media(min-width: 1031px){
        .Name{
            >label{
                font-size: 1.8rem;
            }
        }

        .DurationWrapper{
            flex-direction: column;
            gap: 1rem;

            span{
                font-size: 2rem;
            }
        }
    }

    @media(min-width: 1501px){
        width: 25rem;
        padding: 1.5rem;

        .Add{
            height: 2rem;
            width: 2rem;
            right: 6px;
            top: 6px;

            svg{
                font-size: 2rem;
            }
        }

        .Name{
            >label{
                font-size: 2.5rem;
            }
        }

        .DurationWrapper{
            flex-direction: column;
            gap: 1rem;

            span{
                font-size: 2.5rem;
            }
        }
    }
`,Nl=oe.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    >label{
        font-size: 1rem;
        font-family: "Monda";
        color: ${({theme:e})=>e.titles};
    }

    >input{
        text-align: center;
        width: clamp(6rem, 30vw - 5rem, 15rem);
        height: 3rem;
        background-color: ${({theme:e})=>e.bigInputBackground};
        border: none;
        border-radius: 5px;
        color: ${({theme:e})=>e.inputText};
        font-family: "Orbitron";
        font-size: 1.6rem;
        padding: 0 5px;
    }

    >input:focus{
        outline: 1px solid ${({theme:e})=>e.inputText};
    }
//------------------ Media Queries ------------------

    @media(min-width: 801px){
        >label{
            font-size: 1.6rem;
        }

        >input{
            width: clamp(6rem, 30vw - 5rem, 15rem);
            height: 4rem;
            font-size: 2.8rem;
            padding: 0 8px;
        }
    }

    @media(min-width: 1031px){
        >label{
            font-size: 1.8rem;
        }
    }

    @media(min-width: 1501px){
        >label{
            font-size: 2rem;
        }
    }
`;function Vh(e){return kt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M363 277h-86v86h-42v-86h-86v-42h86v-86h42v86h86v42z"}},{tag:"path",attr:{d:"M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422c-44.3 0-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256c0-44.3 17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"}}]})(e)}function Px({}){const{setEvents:e}=Ot(),[t,n]=c.useState(""),[r,i]=c.useState(""),[s,o]=c.useState(""),[l,a]=c.useState("");function u(d,v){if(!(d>=9007199254740991))switch(v){case"hour":d!=""&!isNaN(parseInt(d))&&i(parseInt(d)),d==""&&i(0);break;case"minute":d!=""&!isNaN(parseInt(d))&&o(parseInt(d)),d==""&&o(0);break;case"second":d!=""&!isNaN(parseInt(d))&&a(parseInt(d)),d==""&&a(0);break}}function f(){const d={name:t,hour:r,minute:s,second:l,id:Date.now()};d.hour==""&&(d.hour=0),d.minute==""&&(d.minute=0),d.second==""&&(d.second=0),e(v=>[d,...v]),n(""),i(""),o(""),a("")}return R(Mx,{children:[L("button",{className:"Add",onClick:()=>f(),children:L(Vh,{})}),R("div",{className:"Name",children:[L("label",{htmlFor:"Name",children:"New event name"}),L("input",{type:"text",id:"Name",value:t,onChange:d=>n(d.target.value)})]}),R("div",{className:"DurationWrapper",children:[L("span",{children:"Duration:"}),R("div",{className:"FieldsWrapper",children:[R(Nl,{children:[L("label",{htmlFor:"hours",children:"Hours"}),L("input",{type:"text",id:"hours",value:r,onChange:d=>u(d.target.value,"hour")})]}),R(Nl,{children:[L("label",{htmlFor:"minutes",children:"Minutes"}),L("input",{type:"text",id:"minutes",value:s,onChange:d=>u(d.target.value,"minute")})]}),R(Nl,{children:[L("label",{htmlFor:"seconds",children:"Seconds"}),L("input",{type:"text",id:"seconds",value:l,onChange:d=>u(d.target.value,"second")})]})]})]})]})}function zx(){const{events:e}=Ot(),[t,n]=c.useState(""),[r,i]=c.useState(""),[s,o]=c.useState("");return c.useEffect(()=>{function l(){let a=0,u=0,f=0;if(e.map(d=>a+=parseInt(d.hour)),e.map(d=>u+=parseInt(d.minute)),e.map(d=>f+=parseInt(d.second)),f>59){const d=Math.floor(f/60);f=f%60,u+=d}if(u>59){const d=Math.floor(u/60);u=u%60,a+=d}if(a>=9007199254740991){alert("Max result value reached, exclude one or more events to recalculate");return}n(a),i(u),o(f),isNaN(a)&&n(0),isNaN(u)&&i(0),isNaN(f)&&o(0)}l()},[e]),R(Lx,{children:[R("header",{children:[" ",L(Tr,{})," "]}),R(kx,{children:[L("span",{children:"Events"}),L(Px,{}),e.map((l,a)=>L(bx,{name:l.name,hours:l.hour,minutes:l.minute,seconds:l.second,id:l.id},a))]}),R(Ex,{children:[L("h2",{children:"Result"}),R("div",{id:"resultsWrapper",children:[R("div",{className:"resultWrapper",children:[L("label",{htmlFor:"hours",children:"Hours"}),R("span",{id:"hours",children:[" ",t," "]})]}),R("div",{className:"resultWrapper",children:[L("label",{htmlFor:"minutes",children:"Minutes"}),R("span",{id:"minutes",children:[" ",r," "]})]}),R("div",{className:"resultWrapper",children:[L("label",{htmlFor:"seconds",children:"Seconds"}),R("span",{id:"seconds",children:[" ",s," "]})]})]})]})]})}var Tx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ix=function(e,t,n,r,i,s,o,l){if(!e){var a;if(t===void 0)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,s,o,l],f=0;a=new Error(t.replace(/%s/g,function(){return u[f++]})),a.name="Invariant Violation"}throw a.framesToPop=1,a}},Ne=Ix;const ue=c.createContext(null);function Ox(){Ne(!!c.useContext,"useGoogleMap is React hook and requires React version 16.8+");const e=c.useContext(ue);return Ne(!!e,"useGoogleMap needs a GoogleMap available up in the tree"),e}function _x(e,t,n){return Object.keys(e).reduce(function(i,s){return t(i,e[s],s)},n)}function Rx(e,t){Object.keys(e).forEach(n=>t(e[n],n))}function $x(e,t,n,r){const i={};return Rx(e,(o,l)=>{const a=n[l];a!==t[l]&&(i[l]=a,o(r,a))}),i}function Nx(e,t,n){return _x(n,function(s,o,l){return typeof e[l]=="function"&&s.push(google.maps.event.addListener(t,o,e[l])),s},[])}function Ax(e){google.maps.event.removeListener(e)}function me(e=[]){e.forEach(Ax)}function de({updaterMap:e,eventMap:t,prevProps:n,nextProps:r,instance:i}){const s=Nx(r,i,t);return $x(e,n,r,i),s}function Bx({children:e,options:t,id:n,mapContainerStyle:r,mapContainerClassName:i,center:s,onClick:o,onDblClick:l,onDrag:a,onDragEnd:u,onDragStart:f,onMouseMove:d,onMouseOut:v,onMouseOver:x,onMouseDown:p,onMouseUp:S,onRightClick:k,onCenterChanged:m,onLoad:g,onUnmount:y}){const[h,b]=c.useState(null),M=c.useRef(null),[I,_]=c.useState(null),[w,C]=c.useState(null),[P,D]=c.useState(null),[V,U]=c.useState(null),[H,G]=c.useState(null),[ee,O]=c.useState(null),[j,Y]=c.useState(null),[te,A]=c.useState(null),[$,T]=c.useState(null),[Q,z]=c.useState(null),[B,E]=c.useState(null),[Z,W]=c.useState(null);return c.useEffect(()=>{t&&h!==null&&h.setOptions(t)},[h,t]),c.useEffect(()=>{h!==null&&typeof s<"u"&&h.setCenter(s)},[h,s]),c.useEffect(()=>{h&&l&&(w!==null&&google.maps.event.removeListener(w),C(google.maps.event.addListener(h,"dblclick",l)))},[l]),c.useEffect(()=>{h&&u&&(P!==null&&google.maps.event.removeListener(P),D(google.maps.event.addListener(h,"dragend",u)))},[u]),c.useEffect(()=>{h&&f&&(V!==null&&google.maps.event.removeListener(V),U(google.maps.event.addListener(h,"dragstart",f)))},[f]),c.useEffect(()=>{h&&p&&(H!==null&&google.maps.event.removeListener(H),G(google.maps.event.addListener(h,"mousedown",p)))},[p]),c.useEffect(()=>{h&&d&&(ee!==null&&google.maps.event.removeListener(ee),O(google.maps.event.addListener(h,"mousemove",d)))},[d]),c.useEffect(()=>{h&&v&&(j!==null&&google.maps.event.removeListener(j),Y(google.maps.event.addListener(h,"mouseout",v)))},[v]),c.useEffect(()=>{h&&x&&(te!==null&&google.maps.event.removeListener(te),A(google.maps.event.addListener(h,"mouseover",x)))},[x]),c.useEffect(()=>{h&&S&&($!==null&&google.maps.event.removeListener($),T(google.maps.event.addListener(h,"mouseup",S)))},[S]),c.useEffect(()=>{h&&k&&(Q!==null&&google.maps.event.removeListener(Q),z(google.maps.event.addListener(h,"rightclick",k)))},[k]),c.useEffect(()=>{h&&o&&(B!==null&&google.maps.event.removeListener(B),E(google.maps.event.addListener(h,"click",o)))},[o]),c.useEffect(()=>{h&&a&&(Z!==null&&google.maps.event.removeListener(Z),W(google.maps.event.addListener(h,"drag",a)))},[a]),c.useEffect(()=>{h&&m&&(I!==null&&google.maps.event.removeListener(I),_(google.maps.event.addListener(h,"center_changed",m)))},[o]),c.useEffect(()=>{const ne=M.current===null?null:new google.maps.Map(M.current,t);return b(ne),ne!==null&&g&&g(ne),()=>{ne!==null&&y&&y(ne)}},[]),L("div",Object.assign({id:n,ref:M,style:r,className:i},{children:L(ue.Provider,Object.assign({value:h},{children:h!==null?e:L(ho,{})}))}))}c.memo(Bx);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function oc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Dx(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function l(f){try{u(r.next(f))}catch(d){o(d)}}function a(f){try{u(r.throw(f))}catch(d){o(d)}}function u(f){f.done?s(f.value):i(f.value).then(l,a)}u((r=r.apply(e,t||[])).next())})}const Nn=typeof document<"u";function Yh({url:e,id:t,nonce:n}){return Nn?new Promise(function(i,s){const o=document.getElementById(t),l=window;if(o){const u=o.getAttribute("data-state");if(o.src===e&&u!=="error"){if(u==="ready")return i(t);{const f=l.initMap,d=o.onerror;l.initMap=function(){f&&f(),i(t)},o.onerror=function(v){d&&d(v),s(v)};return}}else o.remove()}const a=document.createElement("script");a.type="text/javascript",a.src=e,a.id=t,a.async=!0,a.nonce=n,a.onerror=function(f){a.setAttribute("data-state","error"),s(f)},l.initMap=function(){a.setAttribute("data-state","ready"),i(t)},document.head.appendChild(a)}).catch(r=>{throw console.error("injectScript error: ",r),r}):Promise.reject(new Error("document is undefined"))}function ef(e){const t=e.href;return t&&(t.indexOf("https://fonts.googleapis.com/css?family=Roboto")===0||t.indexOf("https://fonts.googleapis.com/css?family=Google+Sans+Text")===0)?!0:e.tagName.toLowerCase()==="style"&&e.styleSheet&&e.styleSheet.cssText&&e.styleSheet.cssText.replace(`\r
`,"").indexOf(".gm-style")===0?(e.styleSheet.cssText="",!0):e.tagName.toLowerCase()==="style"&&e.innerHTML&&e.innerHTML.replace(`\r
`,"").indexOf(".gm-style")===0?(e.innerHTML="",!0):e.tagName.toLowerCase()==="style"&&!e.styleSheet&&!e.innerHTML}function Gh(){const e=document.getElementsByTagName("head")[0],t=e.insertBefore.bind(e);e.insertBefore=function(i,s){ef(i)||Reflect.apply(t,e,[i,s])};const n=e.appendChild.bind(e);e.appendChild=function(i){ef(i)||Reflect.apply(n,e,[i])}}function Qh({googleMapsApiKey:e,googleMapsClientId:t,version:n="weekly",language:r,region:i,libraries:s,channel:o,mapIds:l,authReferrerPolicy:a}){const u=[];return Ne(e&&t||!(e&&t),"You need to specify either googleMapsApiKey or googleMapsClientId for @react-google-maps/api load script to work. You cannot use both at the same time."),e?u.push(`key=${e}`):t&&u.push(`client=${t}`),n&&u.push(`v=${n}`),r&&u.push(`language=${r}`),i&&u.push(`region=${i}`),s&&s.length&&u.push(`libraries=${s.sort().join(",")}`),o&&u.push(`channel=${o}`),l&&l.length&&u.push(`map_ids=${l.join(",")}`),a&&u.push(`auth_referrer_policy=${a}`),u.push("callback=initMap"),`https://maps.googleapis.com/maps/api/js?${u.join("&")}`}let Ur=!1;function Zh(){return L("div",{children:"Loading..."})}const Qa={id:"script-loader",version:"weekly"};class Fx extends c.PureComponent{constructor(){super(...arguments),this.check=c.createRef(),this.state={loaded:!1},this.cleanupCallback=()=>{delete window.google.maps,this.injectScript()},this.isCleaningUp=()=>Dx(this,void 0,void 0,function*(){function t(n){if(!Ur)n();else if(Nn){const r=window.setInterval(function(){Ur||(window.clearInterval(r),n())},1)}}return new Promise(t)}),this.cleanup=()=>{Ur=!0;const t=document.getElementById(this.props.id);t&&t.parentNode&&t.parentNode.removeChild(t),Array.prototype.slice.call(document.getElementsByTagName("script")).filter(function(r){return typeof r.src=="string"&&r.src.includes("maps.googleapis")}).forEach(function(r){r.parentNode&&r.parentNode.removeChild(r)}),Array.prototype.slice.call(document.getElementsByTagName("link")).filter(function(r){return r.href==="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans"}).forEach(function(r){r.parentNode&&r.parentNode.removeChild(r)}),Array.prototype.slice.call(document.getElementsByTagName("style")).filter(function(r){return r.innerText!==void 0&&r.innerText.length>0&&r.innerText.includes(".gm-")}).forEach(function(r){r.parentNode&&r.parentNode.removeChild(r)})},this.injectScript=()=>{this.props.preventGoogleFontsLoading&&Gh(),Ne(!!this.props.id,'LoadScript requires "id" prop to be a string: %s',this.props.id);const t={id:this.props.id,nonce:this.props.nonce,url:Qh(this.props)};Yh(t).then(()=>{this.props.onLoad&&this.props.onLoad(),this.setState(function(){return{loaded:!0}})}).catch(n=>{this.props.onError&&this.props.onError(n),console.error(`
          There has been an Error with loading Google Maps API script, please check that you provided correct google API key (${this.props.googleMapsApiKey||"-"}) or Client ID (${this.props.googleMapsClientId||"-"}) to <LoadScript />
          Otherwise it is a Network issue.
        `)})}}componentDidMount(){if(Nn){if(window.google&&window.google.maps&&!Ur){console.error("google api is already presented");return}this.isCleaningUp().then(this.injectScript).catch(function(n){console.error("Error at injecting script after cleaning up: ",n)})}}componentDidUpdate(t){this.props.libraries!==t.libraries&&console.warn("Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables"),Nn&&t.language!==this.props.language&&(this.cleanup(),this.setState(function(){return{loaded:!1}},this.cleanupCallback))}componentWillUnmount(){if(Nn){this.cleanup();const t=()=>{this.check.current||(delete window.google,Ur=!1)};window.setTimeout(t,1),this.props.onUnmount&&this.props.onUnmount()}}render(){return R(ho,{children:[L("div",{ref:this.check}),this.state.loaded?this.props.children:this.props.loadingElement||L(Zh,{})]})}}Fx.defaultProps=Qa;let tf;function Kh({id:e=Qa.id,version:t=Qa.version,nonce:n,googleMapsApiKey:r,googleMapsClientId:i,language:s,region:o,libraries:l,preventGoogleFontsLoading:a,channel:u,mapIds:f,authReferrerPolicy:d}){const v=c.useRef(!1),[x,p]=c.useState(!1),[S,k]=c.useState(void 0);c.useEffect(function(){return v.current=!0,()=>{v.current=!1}},[]),c.useEffect(function(){Nn&&a&&Gh()},[a]),c.useEffect(function(){x&&Ne(!!window.google,"useLoadScript was marked as loaded, but window.google is not present. Something went wrong.")},[x]);const m=Qh({version:t,googleMapsApiKey:r,googleMapsClientId:i,language:s,region:o,libraries:l,channel:u,mapIds:f,authReferrerPolicy:d});c.useEffect(function(){if(!Nn)return;function h(){v.current&&(p(!0),tf=m)}if(window.google&&window.google.maps&&tf===m){h();return}Yh({id:e,url:m,nonce:n}).then(h).catch(function(M){v.current&&k(M),console.warn(`
        There has been an Error with loading Google Maps API script, please check that you provided correct google API key (${r||"-"}) or Client ID (${i||"-"})
        Otherwise it is a Network issue.
      `),console.error(M)})},[e,m,n]);const g=c.useRef();return c.useEffect(function(){g.current&&l!==g.current&&console.warn("Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables"),g.current=l},[l]),{isLoaded:x,loadError:S,url:m}}const jx=L(Zh,{});function Wx(e){var{loadingElement:t,onLoad:n,onError:r,onUnmount:i,children:s}=e,o=oc(e,["loadingElement","onLoad","onError","onUnmount","children"]);const{isLoaded:l,loadError:a}=Kh(o);return c.useEffect(function(){l&&typeof n=="function"&&n()},[l,n]),c.useEffect(function(){a&&typeof r=="function"&&r(a)},[a,r]),c.useEffect(function(){return()=>{i&&i()}},[i]),l?s:t||jx}c.memo(Wx);var nf;(function(e){e[e.INITIALIZED=0]="INITIALIZED",e[e.LOADING=1]="LOADING",e[e.SUCCESS=2]="SUCCESS",e[e.FAILURE=3]="FAILURE"})(nf||(nf={}));const rf={},sf={options(e,t){e.setOptions(t)}};function Ux({options:e,onLoad:t,onUnmount:n}){const r=c.useContext(ue),[i,s]=c.useState(null);return c.useEffect(()=>{i!==null&&i.setMap(r)},[r]),c.useEffect(()=>{e&&i!==null&&i.setOptions(e)},[i,e]),c.useEffect(()=>{const o=new google.maps.TrafficLayer(Object.assign(Object.assign({},e||{}),{map:r}));return s(o),t&&t(o),()=>{i!==null&&(n&&n(i),i.setMap(null))}},[]),null}c.memo(Ux);class Hx extends c.PureComponent{constructor(){super(...arguments),this.state={trafficLayer:null},this.setTrafficLayerCallback=()=>{this.state.trafficLayer!==null&&this.props.onLoad&&this.props.onLoad(this.state.trafficLayer)},this.registeredEvents=[]}componentDidMount(){const t=new google.maps.TrafficLayer(Object.assign(Object.assign({},this.props.options||{}),{map:this.context}));this.registeredEvents=de({updaterMap:sf,eventMap:rf,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{trafficLayer:t}},this.setTrafficLayerCallback)}componentDidUpdate(t){this.state.trafficLayer!==null&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:sf,eventMap:rf,prevProps:t,nextProps:this.props,instance:this.state.trafficLayer}))}componentWillUnmount(){this.state.trafficLayer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.trafficLayer),me(this.registeredEvents),this.state.trafficLayer.setMap(null))}render(){return null}}Hx.contextType=ue;function Vx({onLoad:e,onUnmount:t}){const n=c.useContext(ue),[r,i]=c.useState(null);return c.useEffect(()=>{r!==null&&r.setMap(n)},[n]),c.useEffect(()=>{const s=new google.maps.BicyclingLayer;return i(s),s.setMap(n),e&&e(s),()=>{s!==null&&(t&&t(s),s.setMap(null))}},[]),null}c.memo(Vx);class Yx extends c.PureComponent{constructor(){super(...arguments),this.state={bicyclingLayer:null},this.setBicyclingLayerCallback=()=>{this.state.bicyclingLayer!==null&&(this.state.bicyclingLayer.setMap(this.context),this.props.onLoad&&this.props.onLoad(this.state.bicyclingLayer))}}componentDidMount(){const t=new google.maps.BicyclingLayer;this.setState(()=>({bicyclingLayer:t}),this.setBicyclingLayerCallback)}componentWillUnmount(){this.state.bicyclingLayer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.bicyclingLayer),this.state.bicyclingLayer.setMap(null))}render(){return null}}Yx.contextType=ue;function Gx({onLoad:e,onUnmount:t}){const n=c.useContext(ue),[r,i]=c.useState(null);return c.useEffect(()=>{r!==null&&r.setMap(n)},[n]),c.useEffect(()=>{const s=new google.maps.TransitLayer;return i(s),s.setMap(n),e&&e(s),()=>{r!==null&&(t&&t(r),this.state.transitLayer.setMap(null))}},[]),null}c.memo(Gx);class Qx extends c.PureComponent{constructor(){super(...arguments),this.state={transitLayer:null},this.setTransitLayerCallback=()=>{this.state.transitLayer!==null&&(this.state.transitLayer.setMap(this.context),this.props.onLoad&&this.props.onLoad(this.state.transitLayer))}}componentDidMount(){const t=new google.maps.TransitLayer;this.setState(function(){return{transitLayer:t}},this.setTransitLayerCallback)}componentWillUnmount(){this.state.transitLayer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.transitLayer),this.state.transitLayer.setMap(null))}render(){return null}}Qx.contextType=ue;const of={onCircleComplete:"circlecomplete",onMarkerComplete:"markercomplete",onOverlayComplete:"overlaycomplete",onPolygonComplete:"polygoncomplete",onPolylineComplete:"polylinecomplete",onRectangleComplete:"rectanglecomplete"},lf={drawingMode(e,t){e.setDrawingMode(t)},options(e,t){e.setOptions(t)}};function Zx({options:e,drawingMode:t,onCircleComplete:n,onMarkerComplete:r,onOverlayComplete:i,onPolygonComplete:s,onPolylineComplete:o,onRectangleComplete:l,onLoad:a,onUnmount:u}){const f=c.useContext(ue),[d,v]=c.useState(null),[x,p]=c.useState(null),[S,k]=c.useState(null),[m,g]=c.useState(null),[y,h]=c.useState(null),[b,M]=c.useState(null),[I,_]=c.useState(null);return c.useEffect(()=>{d!==null&&d.setMap(f)},[f]),c.useEffect(()=>{e&&d!==null&&d.setOptions(e)},[d,e]),c.useEffect(()=>{t&&d!==null&&d.setDrawingMode(t)},[d,t]),c.useEffect(()=>{d&&n&&(x!==null&&google.maps.event.removeListener(x),p(google.maps.event.addListener(d,"circlecomplete",n)))},[d,n]),c.useEffect(()=>{d&&r&&(S!==null&&google.maps.event.removeListener(S),k(google.maps.event.addListener(d,"markercomplete",r)))},[d,r]),c.useEffect(()=>{d&&i&&(m!==null&&google.maps.event.removeListener(m),g(google.maps.event.addListener(d,"overlaycomplete",i)))},[d,i]),c.useEffect(()=>{d&&s&&(y!==null&&google.maps.event.removeListener(y),h(google.maps.event.addListener(d,"polygoncomplete",s)))},[d,s]),c.useEffect(()=>{d&&o&&(b!==null&&google.maps.event.removeListener(b),M(google.maps.event.addListener(d,"polylinecomplete",o)))},[d,o]),c.useEffect(()=>{d&&l&&(I!==null&&google.maps.event.removeListener(I),_(google.maps.event.addListener(d,"rectanglecomplete",l)))},[d,l]),c.useEffect(()=>{Ne(!!google.maps.drawing,"Did you include prop libraries={['drawing']} in the URL? %s",google.maps.drawing);const w=new google.maps.drawing.DrawingManager(Object.assign(Object.assign({},e||{}),{map:f}));return t&&w.setDrawingMode(t),n&&p(google.maps.event.addListener(w,"circlecomplete",n)),r&&k(google.maps.event.addListener(w,"markercomplete",r)),i&&g(google.maps.event.addListener(w,"overlaycomplete",i)),s&&h(google.maps.event.addListener(w,"polygoncomplete",s)),o&&M(google.maps.event.addListener(w,"polylinecomplete",o)),l&&_(google.maps.event.addListener(w,"rectanglecomplete",l)),v(w),a&&a(w),()=>{d!==null&&(x&&google.maps.event.removeListener(x),S&&google.maps.event.removeListener(S),m&&google.maps.event.removeListener(m),y&&google.maps.event.removeListener(y),b&&google.maps.event.removeListener(b),I&&google.maps.event.removeListener(I),u&&u(d),d.setMap(null))}},[]),null}c.memo(Zx);class Kx extends c.PureComponent{constructor(t){super(t),this.registeredEvents=[],this.state={drawingManager:null},this.setDrawingManagerCallback=()=>{this.state.drawingManager!==null&&this.props.onLoad&&this.props.onLoad(this.state.drawingManager)},Ne(!!google.maps.drawing,"Did you include prop libraries={['drawing']} in the URL? %s",google.maps.drawing)}componentDidMount(){const t=new google.maps.drawing.DrawingManager(Object.assign(Object.assign({},this.props.options||{}),{map:this.context}));this.registeredEvents=de({updaterMap:lf,eventMap:of,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{drawingManager:t}},this.setDrawingManagerCallback)}componentDidUpdate(t){this.state.drawingManager!==null&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:lf,eventMap:of,prevProps:t,nextProps:this.props,instance:this.state.drawingManager}))}componentWillUnmount(){this.state.drawingManager!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.drawingManager),me(this.registeredEvents),this.state.drawingManager.setMap(null))}render(){return null}}Kx.contextType=ue;const af={onAnimationChanged:"animation_changed",onClick:"click",onClickableChanged:"clickable_changed",onCursorChanged:"cursor_changed",onDblClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDraggableChanged:"draggable_changed",onDragStart:"dragstart",onFlatChanged:"flat_changed",onIconChanged:"icon_changed",onMouseDown:"mousedown",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onPositionChanged:"position_changed",onRightClick:"rightclick",onShapeChanged:"shape_changed",onTitleChanged:"title_changed",onVisibleChanged:"visible_changed",onZindexChanged:"zindex_changed"},uf={animation(e,t){e.setAnimation(t)},clickable(e,t){e.setClickable(t)},cursor(e,t){e.setCursor(t)},draggable(e,t){e.setDraggable(t)},icon(e,t){e.setIcon(t)},label(e,t){e.setLabel(t)},map(e,t){e.setMap(t)},opacity(e,t){e.setOpacity(t)},options(e,t){e.setOptions(t)},position(e,t){e.setPosition(t)},shape(e,t){e.setShape(t)},title(e,t){e.setTitle(t)},visible(e,t){e.setVisible(t)},zIndex(e,t){e.setZIndex(t)}},co={};function Jx({position:e,options:t,clusterer:n,noClustererRedraw:r,children:i,draggable:s,visible:o,animation:l,clickable:a,cursor:u,icon:f,label:d,opacity:v,shape:x,title:p,zIndex:S,onClick:k,onDblClick:m,onDrag:g,onDragEnd:y,onDragStart:h,onMouseOut:b,onMouseOver:M,onMouseUp:I,onMouseDown:_,onRightClick:w,onClickableChanged:C,onCursorChanged:P,onAnimationChanged:D,onDraggableChanged:V,onFlatChanged:U,onIconChanged:H,onPositionChanged:G,onShapeChanged:ee,onTitleChanged:O,onVisibleChanged:j,onZindexChanged:Y,onLoad:te,onUnmount:A}){const $=c.useContext(ue),[T,Q]=c.useState(null),[z,B]=c.useState(null),[E,Z]=c.useState(null),[W,ne]=c.useState(null),[J,le]=c.useState(null),[q,ie]=c.useState(null),[pe,ce]=c.useState(null),[re,qe]=c.useState(null),[ze,zn]=c.useState(null),[_t,et]=c.useState(null),[se,Ee]=c.useState(null),[nn,Qn]=c.useState(null),[ot,pc]=c.useState(null),[Ai,mc]=c.useState(null),[Bi,hc]=c.useState(null),[Di,gc]=c.useState(null),[Fi,vc]=c.useState(null),[ji,yc]=c.useState(null),[xc,wc]=c.useState(null),[Wi,Sc]=c.useState(null),[Ui,Lc]=c.useState(null),[Hi,kc]=c.useState(null);c.useEffect(()=>{T!==null&&T.setMap($)},[$]),c.useEffect(()=>{typeof t<"u"&&T!==null&&T.setOptions(t)},[T,t]),c.useEffect(()=>{typeof s<"u"&&T!==null&&T.setDraggable(s)},[T,s]),c.useEffect(()=>{e&&T!==null&&T.setPosition(e)},[T,e]),c.useEffect(()=>{typeof o<"u"&&T!==null&&T.setVisible(o)},[T,o]),c.useEffect(()=>{l&&T!==null&&T.setAnimation(l)},[T,l]),c.useEffect(()=>{T&&m&&(z!==null&&google.maps.event.removeListener(z),B(google.maps.event.addListener(T,"dblclick",m)))},[m]),c.useEffect(()=>{T&&y&&(E!==null&&google.maps.event.removeListener(E),Z(google.maps.event.addListener(T,"dragend",y)))},[y]),c.useEffect(()=>{T&&h&&(W!==null&&google.maps.event.removeListener(W),ne(google.maps.event.addListener(T,"dragstart",h)))},[h]),c.useEffect(()=>{T&&_&&(J!==null&&google.maps.event.removeListener(J),le(google.maps.event.addListener(T,"mousedown",_)))},[_]),c.useEffect(()=>{T&&b&&(q!==null&&google.maps.event.removeListener(q),ie(google.maps.event.addListener(T,"mouseout",b)))},[b]),c.useEffect(()=>{T&&M&&(pe!==null&&google.maps.event.removeListener(pe),ce(google.maps.event.addListener(T,"mouseover",M)))},[M]),c.useEffect(()=>{T&&I&&(re!==null&&google.maps.event.removeListener(re),qe(google.maps.event.addListener(T,"mouseup",I)))},[I]),c.useEffect(()=>{T&&w&&(ze!==null&&google.maps.event.removeListener(ze),zn(google.maps.event.addListener(T,"rightclick",w)))},[w]),c.useEffect(()=>{T&&k&&(_t!==null&&google.maps.event.removeListener(_t),et(google.maps.event.addListener(T,"click",k)))},[k]),c.useEffect(()=>{T&&g&&(se!==null&&google.maps.event.removeListener(se),Ee(google.maps.event.addListener(T,"drag",g)))},[g]),c.useEffect(()=>{T&&C&&(nn!==null&&google.maps.event.removeListener(nn),Qn(google.maps.event.addListener(T,"clickable_changed",C)))},[C]),c.useEffect(()=>{T&&P&&(ot!==null&&google.maps.event.removeListener(ot),pc(google.maps.event.addListener(T,"cursor_changed",P)))},[P]),c.useEffect(()=>{T&&D&&(Ai!==null&&google.maps.event.removeListener(Ai),mc(google.maps.event.addListener(T,"animation_changed",D)))},[D]),c.useEffect(()=>{T&&V&&(Bi!==null&&google.maps.event.removeListener(Bi),hc(google.maps.event.addListener(T,"draggable_changed",V)))},[V]),c.useEffect(()=>{T&&U&&(Di!==null&&google.maps.event.removeListener(Di),gc(google.maps.event.addListener(T,"flat_changed",U)))},[U]),c.useEffect(()=>{T&&H&&(Fi!==null&&google.maps.event.removeListener(Fi),vc(google.maps.event.addListener(T,"icon_changed",H)))},[H]),c.useEffect(()=>{T&&G&&(ji!==null&&google.maps.event.removeListener(ji),yc(google.maps.event.addListener(T,"position_changed",G)))},[G]),c.useEffect(()=>{T&&ee&&(xc!==null&&google.maps.event.removeListener(xc),wc(google.maps.event.addListener(T,"shape_changed",ee)))},[ee]),c.useEffect(()=>{T&&O&&(Wi!==null&&google.maps.event.removeListener(Wi),Sc(google.maps.event.addListener(T,"title_changed",O)))},[O]),c.useEffect(()=>{T&&j&&(Ui!==null&&google.maps.event.removeListener(Ui),Lc(google.maps.event.addListener(T,"visible_changed",j)))},[j]),c.useEffect(()=>{T&&Y&&(Hi!==null&&google.maps.event.removeListener(Hi),kc(google.maps.event.addListener(T,"zindex_changed",Y)))},[Y]),c.useEffect(()=>{const _r=Object.assign(Object.assign(Object.assign({},t||co),n?co:{map:$}),{position:e}),ae=new google.maps.Marker(_r);return n?n.addMarker(ae,!!r):ae.setMap($),e&&ae.setPosition(e),typeof o<"u"&&ae.setVisible(o),typeof s<"u"&&ae.setDraggable(s),typeof a<"u"&&ae.setClickable(a),typeof u=="string"&&ae.setCursor(u),f&&ae.setIcon(f),typeof d<"u"&&ae.setLabel(d),typeof v<"u"&&ae.setOpacity(v),x&&ae.setShape(x),typeof p=="string"&&ae.setTitle(p),typeof S=="number"&&ae.setZIndex(S),m&&B(google.maps.event.addListener(ae,"dblclick",m)),y&&Z(google.maps.event.addListener(ae,"dragend",y)),h&&ne(google.maps.event.addListener(ae,"dragstart",h)),_&&le(google.maps.event.addListener(ae,"mousedown",_)),b&&ie(google.maps.event.addListener(ae,"mouseout",b)),M&&ce(google.maps.event.addListener(ae,"mouseover",M)),I&&qe(google.maps.event.addListener(ae,"mouseup",I)),w&&zn(google.maps.event.addListener(ae,"rightclick",w)),k&&et(google.maps.event.addListener(ae,"click",k)),g&&Ee(google.maps.event.addListener(ae,"drag",g)),C&&Qn(google.maps.event.addListener(ae,"clickable_changed",C)),P&&pc(google.maps.event.addListener(ae,"cursor_changed",P)),D&&mc(google.maps.event.addListener(ae,"animation_changed",D)),V&&hc(google.maps.event.addListener(ae,"draggable_changed",V)),U&&gc(google.maps.event.addListener(ae,"flat_changed",U)),H&&vc(google.maps.event.addListener(ae,"icon_changed",H)),G&&yc(google.maps.event.addListener(ae,"position_changed",G)),ee&&wc(google.maps.event.addListener(ae,"shape_changed",ee)),O&&Sc(google.maps.event.addListener(ae,"title_changed",O)),j&&Lc(google.maps.event.addListener(ae,"visible_changed",j)),Y&&kc(google.maps.event.addListener(ae,"zindex_changed",Y)),Q(ae),te&&te(ae),()=>{z!==null&&google.maps.event.removeListener(z),E!==null&&google.maps.event.removeListener(E),W!==null&&google.maps.event.removeListener(W),J!==null&&google.maps.event.removeListener(J),q!==null&&google.maps.event.removeListener(q),pe!==null&&google.maps.event.removeListener(pe),re!==null&&google.maps.event.removeListener(re),ze!==null&&google.maps.event.removeListener(ze),_t!==null&&google.maps.event.removeListener(_t),nn!==null&&google.maps.event.removeListener(nn),ot!==null&&google.maps.event.removeListener(ot),Ai!==null&&google.maps.event.removeListener(Ai),Bi!==null&&google.maps.event.removeListener(Bi),Di!==null&&google.maps.event.removeListener(Di),Fi!==null&&google.maps.event.removeListener(Fi),ji!==null&&google.maps.event.removeListener(ji),Wi!==null&&google.maps.event.removeListener(Wi),Ui!==null&&google.maps.event.removeListener(Ui),Hi!==null&&google.maps.event.removeListener(Hi),A&&A(ae),n?n.removeMarker(ae,!!r):ae&&ae.setMap(null)}},[]);const Eg=c.useMemo(()=>i?c.Children.map(i,_r=>{if(!c.isValidElement(_r))return _r;const ae=_r;return c.cloneElement(ae,{anchor:T})}):null,[i,T]);return L(ho,{children:Eg})||null}c.memo(Jx);class Xx extends c.PureComponent{constructor(){super(...arguments),this.registeredEvents=[]}componentDidMount(){const t=Object.assign(Object.assign(Object.assign({},this.props.options||co),this.props.clusterer?co:{map:this.context}),{position:this.props.position});this.marker=new google.maps.Marker(t),this.props.clusterer?this.props.clusterer.addMarker(this.marker,!!this.props.noClustererRedraw):this.marker.setMap(this.context),this.registeredEvents=de({updaterMap:uf,eventMap:af,prevProps:{},nextProps:this.props,instance:this.marker}),this.props.onLoad&&this.props.onLoad(this.marker)}componentDidUpdate(t){this.marker&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:uf,eventMap:af,prevProps:t,nextProps:this.props,instance:this.marker}))}componentWillUnmount(){this.marker&&(this.props.onUnmount&&this.props.onUnmount(this.marker),me(this.registeredEvents),this.props.clusterer?this.props.clusterer.removeMarker(this.marker,!!this.props.noClustererRedraw):this.marker&&this.marker.setMap(null))}render(){let t=null;return this.props.children&&(t=c.Children.map(this.props.children,n=>{if(!c.isValidElement(n))return n;const r=n;return c.cloneElement(r,{anchor:this.marker})})),t||null}}Xx.contextType=ue;var qx=function(){function e(t,n){t.getClusterer().extend(e,google.maps.OverlayView),this.cluster=t,this.clusterClassName=this.cluster.getClusterer().getClusterClass(),this.className=this.clusterClassName,this.styles=n,this.center=void 0,this.div=null,this.sums=null,this.visible=!1,this.boundsChangedListener=null,this.url="",this.height=0,this.width=0,this.anchorText=[0,0],this.anchorIcon=[0,0],this.textColor="black",this.textSize=11,this.textDecoration="none",this.fontWeight="bold",this.fontStyle="normal",this.fontFamily="Arial,sans-serif",this.backgroundPosition="0 0",this.cMouseDownInCluster=null,this.cDraggingMapByCluster=null,this.timeOut=null,this.setMap(t.getMap()),this.onBoundsChanged=this.onBoundsChanged.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onClick=this.onClick.bind(this),this.onMouseOver=this.onMouseOver.bind(this),this.onMouseOut=this.onMouseOut.bind(this),this.onAdd=this.onAdd.bind(this),this.onRemove=this.onRemove.bind(this),this.draw=this.draw.bind(this),this.hide=this.hide.bind(this),this.show=this.show.bind(this),this.useStyle=this.useStyle.bind(this),this.setCenter=this.setCenter.bind(this),this.getPosFromLatLng=this.getPosFromLatLng.bind(this)}return e.prototype.onBoundsChanged=function(){this.cDraggingMapByCluster=this.cMouseDownInCluster},e.prototype.onMouseDown=function(){this.cMouseDownInCluster=!0,this.cDraggingMapByCluster=!1},e.prototype.onClick=function(t){if(this.cMouseDownInCluster=!1,!this.cDraggingMapByCluster){var n=this.cluster.getClusterer();if(google.maps.event.trigger(n,"click",this.cluster),google.maps.event.trigger(n,"clusterclick",this.cluster),n.getZoomOnClick()){var r=n.getMaxZoom(),i=this.cluster.getBounds(),s=n.getMap();s!==null&&"fitBounds"in s&&s.fitBounds(i),this.timeOut=window.setTimeout(function(){var o=n.getMap();if(o!==null){"fitBounds"in o&&o.fitBounds(i);var l=o.getZoom()||0;r!==null&&l>r&&o.setZoom(r+1)}},100)}t.cancelBubble=!0,t.stopPropagation&&t.stopPropagation()}},e.prototype.onMouseOver=function(){google.maps.event.trigger(this.cluster.getClusterer(),"mouseover",this.cluster)},e.prototype.onMouseOut=function(){google.maps.event.trigger(this.cluster.getClusterer(),"mouseout",this.cluster)},e.prototype.onAdd=function(){var t;this.div=document.createElement("div"),this.div.className=this.className,this.visible&&this.show(),(t=this.getPanes())===null||t===void 0||t.overlayMouseTarget.appendChild(this.div);var n=this.getMap();n!==null&&(this.boundsChangedListener=google.maps.event.addListener(n,"bounds_changed",this.onBoundsChanged),this.div.addEventListener("mousedown",this.onMouseDown),this.div.addEventListener("click",this.onClick),this.div.addEventListener("mouseover",this.onMouseOver),this.div.addEventListener("mouseout",this.onMouseOut))},e.prototype.onRemove=function(){this.div&&this.div.parentNode&&(this.hide(),this.boundsChangedListener!==null&&google.maps.event.removeListener(this.boundsChangedListener),this.div.removeEventListener("mousedown",this.onMouseDown),this.div.removeEventListener("click",this.onClick),this.div.removeEventListener("mouseover",this.onMouseOver),this.div.removeEventListener("mouseout",this.onMouseOut),this.div.parentNode.removeChild(this.div),this.timeOut!==null&&(window.clearTimeout(this.timeOut),this.timeOut=null),this.div=null)},e.prototype.draw=function(){if(this.visible&&this.div!==null&&this.center){var t=this.getPosFromLatLng(this.center);this.div.style.top=t!==null?"".concat(t.y,"px"):"0",this.div.style.left=t!==null?"".concat(t.x,"px"):"0"}},e.prototype.hide=function(){this.div&&(this.div.style.display="none"),this.visible=!1},e.prototype.show=function(){var t,n,r,i;if(this.div&&this.center){var s=this.sums===null||typeof this.sums.title>"u"||this.sums.title===""?this.cluster.getClusterer().getTitle():this.sums.title,o=this.backgroundPosition.split(" "),l=parseInt(o[0].replace(/^\s+|\s+$/g,""),10),a=parseInt(o[1].replace(/^\s+|\s+$/g,""),10),u=this.getPosFromLatLng(this.center);this.div.className=this.className,this.div.setAttribute("style","cursor: pointer; position: absolute; top: ".concat(u!==null?"".concat(u.y,"px"):"0","; left: ").concat(u!==null?"".concat(u.x,"px"):"0","; width: ").concat(this.width,"px; height: ").concat(this.height,"px; "));var f=document.createElement("img");f.alt=s,f.src=this.url,f.width=this.width,f.height=this.height,f.setAttribute("style","position: absolute; top: ".concat(a,"px; left: ").concat(l,"px")),this.cluster.getClusterer().enableRetinaIcons||(f.style.clip="rect(-".concat(a,"px, -").concat(l+this.width,"px, -").concat(a+this.height,", -").concat(l,")"));var d=document.createElement("div");d.setAttribute("style","position: absolute; top: ".concat(this.anchorText[0],"px; left: ").concat(this.anchorText[1],"px; color: ").concat(this.textColor,"; font-size: ").concat(this.textSize,"px; font-family: ").concat(this.fontFamily,"; font-weight: ").concat(this.fontWeight,"; fontStyle: ").concat(this.fontStyle,"; text-decoration: ").concat(this.textDecoration,"; text-align: center; width: ").concat(this.width,"px; line-height: ").concat(this.height,"px")),!((t=this.sums)===null||t===void 0)&&t.text&&(d.innerText="".concat((n=this.sums)===null||n===void 0?void 0:n.text)),!((r=this.sums)===null||r===void 0)&&r.html&&(d.innerHTML="".concat((i=this.sums)===null||i===void 0?void 0:i.html)),this.div.innerHTML="",this.div.appendChild(f),this.div.appendChild(d),this.div.title=s,this.div.style.display=""}this.visible=!0},e.prototype.useStyle=function(t){this.sums=t;var n=this.cluster.getClusterer().getStyles(),r=n[Math.min(n.length-1,Math.max(0,t.index-1))];this.url=r.url,this.height=r.height,this.width=r.width,r.className&&(this.className="".concat(this.clusterClassName," ").concat(r.className)),this.anchorText=r.anchorText||[0,0],this.anchorIcon=r.anchorIcon||[this.height/2,this.width/2],this.textColor=r.textColor||"black",this.textSize=r.textSize||11,this.textDecoration=r.textDecoration||"none",this.fontWeight=r.fontWeight||"bold",this.fontStyle=r.fontStyle||"normal",this.fontFamily=r.fontFamily||"Arial,sans-serif",this.backgroundPosition=r.backgroundPosition||"0 0"},e.prototype.setCenter=function(t){this.center=t},e.prototype.getPosFromLatLng=function(t){var n=this.getProjection().fromLatLngToDivPixel(t);return n!==null&&(n.x-=this.anchorIcon[1],n.y-=this.anchorIcon[0]),n},e}(),ew=function(){function e(t){this.markerClusterer=t,this.map=this.markerClusterer.getMap(),this.gridSize=this.markerClusterer.getGridSize(),this.minClusterSize=this.markerClusterer.getMinimumClusterSize(),this.averageCenter=this.markerClusterer.getAverageCenter(),this.markers=[],this.center=void 0,this.bounds=null,this.clusterIcon=new qx(this,this.markerClusterer.getStyles()),this.getSize=this.getSize.bind(this),this.getMarkers=this.getMarkers.bind(this),this.getCenter=this.getCenter.bind(this),this.getMap=this.getMap.bind(this),this.getClusterer=this.getClusterer.bind(this),this.getBounds=this.getBounds.bind(this),this.remove=this.remove.bind(this),this.addMarker=this.addMarker.bind(this),this.isMarkerInClusterBounds=this.isMarkerInClusterBounds.bind(this),this.calculateBounds=this.calculateBounds.bind(this),this.updateIcon=this.updateIcon.bind(this),this.isMarkerAlreadyAdded=this.isMarkerAlreadyAdded.bind(this)}return e.prototype.getSize=function(){return this.markers.length},e.prototype.getMarkers=function(){return this.markers},e.prototype.getCenter=function(){return this.center},e.prototype.getMap=function(){return this.map},e.prototype.getClusterer=function(){return this.markerClusterer},e.prototype.getBounds=function(){for(var t=new google.maps.LatLngBounds(this.center,this.center),n=this.getMarkers(),r=0;r<n.length;r++){var i=n[r].getPosition();i&&t.extend(i)}return t},e.prototype.remove=function(){this.clusterIcon.setMap(null),this.markers=[],delete this.markers},e.prototype.addMarker=function(t){var n;if(this.isMarkerAlreadyAdded(t))return!1;if(this.center){if(this.averageCenter){var r=t.getPosition();if(r){var i=this.markers.length+1;this.center=new google.maps.LatLng((this.center.lat()*(i-1)+r.lat())/i,(this.center.lng()*(i-1)+r.lng())/i),this.calculateBounds()}}}else{var r=t.getPosition();r&&(this.center=r,this.calculateBounds())}t.isAdded=!0,this.markers.push(t);var s=this.markers.length,o=this.markerClusterer.getMaxZoom(),l=(n=this.map)===null||n===void 0?void 0:n.getZoom();if(o!==null&&typeof l<"u"&&l>o)t.getMap()!==this.map&&t.setMap(this.map);else if(s<this.minClusterSize)t.getMap()!==this.map&&t.setMap(this.map);else if(s===this.minClusterSize)for(var a=0;a<s;a++)this.markers[a].setMap(null);else t.setMap(null);return!0},e.prototype.isMarkerInClusterBounds=function(t){if(this.bounds!==null){var n=t.getPosition();if(n)return this.bounds.contains(n)}return!1},e.prototype.calculateBounds=function(){this.bounds=this.markerClusterer.getExtendedBounds(new google.maps.LatLngBounds(this.center,this.center))},e.prototype.updateIcon=function(){var t,n=this.markers.length,r=this.markerClusterer.getMaxZoom(),i=(t=this.map)===null||t===void 0?void 0:t.getZoom();if(r!==null&&typeof i<"u"&&i>r){this.clusterIcon.hide();return}if(n<this.minClusterSize){this.clusterIcon.hide();return}this.center&&this.clusterIcon.setCenter(this.center),this.clusterIcon.useStyle(this.markerClusterer.getCalculator()(this.markers,this.markerClusterer.getStyles().length)),this.clusterIcon.show()},e.prototype.isMarkerAlreadyAdded=function(t){if(this.markers.includes)return this.markers.includes(t);for(var n=0;n<this.markers.length;n++)if(t===this.markers[n])return!0;return!1},e}();function tw(e,t){var n=e.length,r=n.toString().length,i=Math.min(r,t);return{text:n.toString(),index:i,title:""}}var nw=2e3,rw=500,iw="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",sw="png",ow=[53,56,66,78,90],lw="cluster",Jh=function(){function e(t,n,r){n===void 0&&(n=[]),r===void 0&&(r={}),this.getMinimumClusterSize=this.getMinimumClusterSize.bind(this),this.setMinimumClusterSize=this.setMinimumClusterSize.bind(this),this.getEnableRetinaIcons=this.getEnableRetinaIcons.bind(this),this.setEnableRetinaIcons=this.setEnableRetinaIcons.bind(this),this.addToClosestCluster=this.addToClosestCluster.bind(this),this.getImageExtension=this.getImageExtension.bind(this),this.setImageExtension=this.setImageExtension.bind(this),this.getExtendedBounds=this.getExtendedBounds.bind(this),this.getAverageCenter=this.getAverageCenter.bind(this),this.setAverageCenter=this.setAverageCenter.bind(this),this.getTotalClusters=this.getTotalClusters.bind(this),this.fitMapToMarkers=this.fitMapToMarkers.bind(this),this.getIgnoreHidden=this.getIgnoreHidden.bind(this),this.setIgnoreHidden=this.setIgnoreHidden.bind(this),this.getClusterClass=this.getClusterClass.bind(this),this.setClusterClass=this.setClusterClass.bind(this),this.getTotalMarkers=this.getTotalMarkers.bind(this),this.getZoomOnClick=this.getZoomOnClick.bind(this),this.setZoomOnClick=this.setZoomOnClick.bind(this),this.getBatchSizeIE=this.getBatchSizeIE.bind(this),this.setBatchSizeIE=this.setBatchSizeIE.bind(this),this.createClusters=this.createClusters.bind(this),this.onZoomChanged=this.onZoomChanged.bind(this),this.getImageSizes=this.getImageSizes.bind(this),this.setImageSizes=this.setImageSizes.bind(this),this.getCalculator=this.getCalculator.bind(this),this.setCalculator=this.setCalculator.bind(this),this.removeMarkers=this.removeMarkers.bind(this),this.resetViewport=this.resetViewport.bind(this),this.getImagePath=this.getImagePath.bind(this),this.setImagePath=this.setImagePath.bind(this),this.pushMarkerTo=this.pushMarkerTo.bind(this),this.removeMarker=this.removeMarker.bind(this),this.clearMarkers=this.clearMarkers.bind(this),this.setupStyles=this.setupStyles.bind(this),this.getGridSize=this.getGridSize.bind(this),this.setGridSize=this.setGridSize.bind(this),this.getClusters=this.getClusters.bind(this),this.getMaxZoom=this.getMaxZoom.bind(this),this.setMaxZoom=this.setMaxZoom.bind(this),this.getMarkers=this.getMarkers.bind(this),this.addMarkers=this.addMarkers.bind(this),this.getStyles=this.getStyles.bind(this),this.setStyles=this.setStyles.bind(this),this.addMarker=this.addMarker.bind(this),this.onRemove=this.onRemove.bind(this),this.getTitle=this.getTitle.bind(this),this.setTitle=this.setTitle.bind(this),this.repaint=this.repaint.bind(this),this.onIdle=this.onIdle.bind(this),this.redraw=this.redraw.bind(this),this.extend=this.extend.bind(this),this.onAdd=this.onAdd.bind(this),this.draw=this.draw.bind(this),this.extend(e,google.maps.OverlayView),this.markers=[],this.clusters=[],this.listeners=[],this.activeMap=null,this.ready=!1,this.gridSize=r.gridSize||60,this.minClusterSize=r.minimumClusterSize||2,this.maxZoom=r.maxZoom||null,this.styles=r.styles||[],this.title=r.title||"",this.zoomOnClick=!0,r.zoomOnClick!==void 0&&(this.zoomOnClick=r.zoomOnClick),this.averageCenter=!1,r.averageCenter!==void 0&&(this.averageCenter=r.averageCenter),this.ignoreHidden=!1,r.ignoreHidden!==void 0&&(this.ignoreHidden=r.ignoreHidden),this.enableRetinaIcons=!1,r.enableRetinaIcons!==void 0&&(this.enableRetinaIcons=r.enableRetinaIcons),this.imagePath=r.imagePath||iw,this.imageExtension=r.imageExtension||sw,this.imageSizes=r.imageSizes||ow,this.calculator=r.calculator||tw,this.batchSize=r.batchSize||nw,this.batchSizeIE=r.batchSizeIE||rw,this.clusterClass=r.clusterClass||lw,navigator.userAgent.toLowerCase().indexOf("msie")!==-1&&(this.batchSize=this.batchSizeIE),this.timerRefStatic=null,this.setupStyles(),this.addMarkers(n,!0),this.setMap(t)}return e.prototype.onZoomChanged=function(){var t,n;this.resetViewport(!1),(((t=this.getMap())===null||t===void 0?void 0:t.getZoom())===(this.get("minZoom")||0)||((n=this.getMap())===null||n===void 0?void 0:n.getZoom())===this.get("maxZoom"))&&google.maps.event.trigger(this,"idle")},e.prototype.onIdle=function(){this.redraw()},e.prototype.onAdd=function(){var t=this.getMap();this.activeMap=t,this.ready=!0,this.repaint(),t!==null&&(this.listeners=[google.maps.event.addListener(t,"zoom_changed",this.onZoomChanged),google.maps.event.addListener(t,"idle",this.onIdle)])},e.prototype.onRemove=function(){for(var t=0;t<this.markers.length;t++)this.markers[t].getMap()!==this.activeMap&&this.markers[t].setMap(this.activeMap);for(var t=0;t<this.clusters.length;t++)this.clusters[t].remove();this.clusters=[];for(var t=0;t<this.listeners.length;t++)google.maps.event.removeListener(this.listeners[t]);this.listeners=[],this.activeMap=null,this.ready=!1},e.prototype.draw=function(){},e.prototype.setupStyles=function(){if(!(this.styles.length>0))for(var t=0;t<this.imageSizes.length;t++)this.styles.push({url:"".concat(this.imagePath+(t+1),".").concat(this.imageExtension),height:this.imageSizes[t],width:this.imageSizes[t]})},e.prototype.fitMapToMarkers=function(){for(var t=this.getMarkers(),n=new google.maps.LatLngBounds,r=0;r<t.length;r++){var i=t[r].getPosition();i&&n.extend(i)}var s=this.getMap();s!==null&&"fitBounds"in s&&s.fitBounds(n)},e.prototype.getGridSize=function(){return this.gridSize},e.prototype.setGridSize=function(t){this.gridSize=t},e.prototype.getMinimumClusterSize=function(){return this.minClusterSize},e.prototype.setMinimumClusterSize=function(t){this.minClusterSize=t},e.prototype.getMaxZoom=function(){return this.maxZoom},e.prototype.setMaxZoom=function(t){this.maxZoom=t},e.prototype.getStyles=function(){return this.styles},e.prototype.setStyles=function(t){this.styles=t},e.prototype.getTitle=function(){return this.title},e.prototype.setTitle=function(t){this.title=t},e.prototype.getZoomOnClick=function(){return this.zoomOnClick},e.prototype.setZoomOnClick=function(t){this.zoomOnClick=t},e.prototype.getAverageCenter=function(){return this.averageCenter},e.prototype.setAverageCenter=function(t){this.averageCenter=t},e.prototype.getIgnoreHidden=function(){return this.ignoreHidden},e.prototype.setIgnoreHidden=function(t){this.ignoreHidden=t},e.prototype.getEnableRetinaIcons=function(){return this.enableRetinaIcons},e.prototype.setEnableRetinaIcons=function(t){this.enableRetinaIcons=t},e.prototype.getImageExtension=function(){return this.imageExtension},e.prototype.setImageExtension=function(t){this.imageExtension=t},e.prototype.getImagePath=function(){return this.imagePath},e.prototype.setImagePath=function(t){this.imagePath=t},e.prototype.getImageSizes=function(){return this.imageSizes},e.prototype.setImageSizes=function(t){this.imageSizes=t},e.prototype.getCalculator=function(){return this.calculator},e.prototype.setCalculator=function(t){this.calculator=t},e.prototype.getBatchSizeIE=function(){return this.batchSizeIE},e.prototype.setBatchSizeIE=function(t){this.batchSizeIE=t},e.prototype.getClusterClass=function(){return this.clusterClass},e.prototype.setClusterClass=function(t){this.clusterClass=t},e.prototype.getMarkers=function(){return this.markers},e.prototype.getTotalMarkers=function(){return this.markers.length},e.prototype.getClusters=function(){return this.clusters},e.prototype.getTotalClusters=function(){return this.clusters.length},e.prototype.addMarker=function(t,n){this.pushMarkerTo(t),n||this.redraw()},e.prototype.addMarkers=function(t,n){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&this.pushMarkerTo(t[r]);n||this.redraw()},e.prototype.pushMarkerTo=function(t){var n=this;t.getDraggable()&&google.maps.event.addListener(t,"dragend",function(){n.ready&&(t.isAdded=!1,n.repaint())}),t.isAdded=!1,this.markers.push(t)},e.prototype.removeMarker_=function(t){var n=-1;if(this.markers.indexOf)n=this.markers.indexOf(t);else for(var r=0;r<this.markers.length;r++)if(t===this.markers[r]){n=r;break}return n===-1?!1:(t.setMap(null),this.markers.splice(n,1),!0)},e.prototype.removeMarker=function(t,n){var r=this.removeMarker_(t);return!n&&r&&this.repaint(),r},e.prototype.removeMarkers=function(t,n){for(var r=!1,i=0;i<t.length;i++)r=r||this.removeMarker_(t[i]);return!n&&r&&this.repaint(),r},e.prototype.clearMarkers=function(){this.resetViewport(!0),this.markers=[]},e.prototype.repaint=function(){var t=this.clusters.slice();this.clusters=[],this.resetViewport(!1),this.redraw(),setTimeout(function(){for(var r=0;r<t.length;r++)t[r].remove()},0)},e.prototype.getExtendedBounds=function(t){var n=this.getProjection(),r=n.fromLatLngToDivPixel(new google.maps.LatLng(t.getNorthEast().lat(),t.getNorthEast().lng()));r!==null&&(r.x+=this.gridSize,r.y-=this.gridSize);var i=n.fromLatLngToDivPixel(new google.maps.LatLng(t.getSouthWest().lat(),t.getSouthWest().lng()));if(i!==null&&(i.x-=this.gridSize,i.y+=this.gridSize),r!==null){var s=n.fromDivPixelToLatLng(r);s!==null&&t.extend(s)}if(i!==null){var o=n.fromDivPixelToLatLng(i);o!==null&&t.extend(o)}return t},e.prototype.redraw=function(){this.createClusters(0)},e.prototype.resetViewport=function(t){for(var n=0;n<this.clusters.length;n++)this.clusters[n].remove();this.clusters=[];for(var n=0;n<this.markers.length;n++){var r=this.markers[n];r.isAdded=!1,t&&r.setMap(null)}},e.prototype.distanceBetweenPoints=function(t,n){var r=6371,i=(n.lat()-t.lat())*Math.PI/180,s=(n.lng()-t.lng())*Math.PI/180,o=Math.sin(i/2)*Math.sin(i/2)+Math.cos(t.lat()*Math.PI/180)*Math.cos(n.lat()*Math.PI/180)*Math.sin(s/2)*Math.sin(s/2);return r*(2*Math.atan2(Math.sqrt(o),Math.sqrt(1-o)))},e.prototype.isMarkerInBounds=function(t,n){var r=t.getPosition();return r?n.contains(r):!1},e.prototype.addToClosestCluster=function(t){for(var n,r=4e4,i=null,s=0;s<this.clusters.length;s++){n=this.clusters[s];var o=n.getCenter(),l=t.getPosition();if(o&&l){var a=this.distanceBetweenPoints(o,l);a<r&&(r=a,i=n)}}i&&i.isMarkerInClusterBounds(t)?i.addMarker(t):(n=new ew(this),n.addMarker(t),this.clusters.push(n))},e.prototype.createClusters=function(t){var n=this;if(this.ready){t===0&&(google.maps.event.trigger(this,"clusteringbegin",this),this.timerRefStatic!==null&&(window.clearTimeout(this.timerRefStatic),delete this.timerRefStatic));for(var r=this.getMap(),i=r!==null&&("getBounds"in r)?r.getBounds():null,s=(r==null?void 0:r.getZoom())||0,o=s>3?new google.maps.LatLngBounds(i==null?void 0:i.getSouthWest(),i==null?void 0:i.getNorthEast()):new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472,-178.48388434375),new google.maps.LatLng(-85.08136444384544,178.00048865625)),l=this.getExtendedBounds(o),a=Math.min(t+this.batchSize,this.markers.length),u=t;u<a;u++){var f=this.markers[u];!f.isAdded&&this.isMarkerInBounds(f,l)&&(!this.ignoreHidden||this.ignoreHidden&&f.getVisible())&&this.addToClosestCluster(f)}if(a<this.markers.length)this.timerRefStatic=window.setTimeout(function(){n.createClusters(a)},0);else{this.timerRefStatic=null,google.maps.event.trigger(this,"clusteringend",this);for(var u=0;u<this.clusters.length;u++)this.clusters[u].updateIcon()}}},e.prototype.extend=function(t,n){return function(i){for(var s in i.prototype)this.prototype[s]=i.prototype[s];return this}.apply(t,[n])},e}();const mt={onClick:"click",onClusteringBegin:"clusteringbegin",onClusteringEnd:"clusteringend",onMouseOut:"mouseout",onMouseOver:"mouseover"},ve={averageCenter(e,t){e.setAverageCenter(t)},batchSizeIE(e,t){e.setBatchSizeIE(t)},calculator(e,t){e.setCalculator(t)},clusterClass(e,t){e.setClusterClass(t)},enableRetinaIcons(e,t){e.setEnableRetinaIcons(t)},gridSize(e,t){e.setGridSize(t)},ignoreHidden(e,t){e.setIgnoreHidden(t)},imageExtension(e,t){e.setImageExtension(t)},imagePath(e,t){e.setImagePath(t)},imageSizes(e,t){e.setImageSizes(t)},maxZoom(e,t){e.setMaxZoom(t)},minimumClusterSize(e,t){e.setMinimumClusterSize(t)},styles(e,t){e.setStyles(t)},title(e,t){e.setTitle(t)},zoomOnClick(e,t){e.setZoomOnClick(t)}},aw={};function uw(e){const{children:t,options:n,averageCenter:r,batchSizeIE:i,calculator:s,clusterClass:o,enableRetinaIcons:l,gridSize:a,ignoreHidden:u,imageExtension:f,imagePath:d,imageSizes:v,maxZoom:x,minimumClusterSize:p,styles:S,title:k,zoomOnClick:m,onClick:g,onClusteringBegin:y,onClusteringEnd:h,onMouseOver:b,onMouseOut:M,onLoad:I,onUnmount:_}=e,[w,C]=c.useState(null),P=c.useContext(ue),[D,V]=c.useState(null),[U,H]=c.useState(null),[G,ee]=c.useState(null),[O,j]=c.useState(null),[Y,te]=c.useState(null);return c.useEffect(()=>{w&&M&&(O!==null&&google.maps.event.removeListener(O),j(google.maps.event.addListener(w,mt.onMouseOut,M)))},[M]),c.useEffect(()=>{w&&b&&(Y!==null&&google.maps.event.removeListener(Y),te(google.maps.event.addListener(w,mt.onMouseOver,b)))},[b]),c.useEffect(()=>{w&&g&&(D!==null&&google.maps.event.removeListener(D),V(google.maps.event.addListener(w,mt.onClick,g)))},[g]),c.useEffect(()=>{w&&y&&(U!==null&&google.maps.event.removeListener(U),H(google.maps.event.addListener(w,mt.onClusteringBegin,y)))},[y]),c.useEffect(()=>{w&&h&&(G!==null&&google.maps.event.removeListener(G),H(google.maps.event.addListener(w,mt.onClusteringEnd,h)))},[h]),c.useEffect(()=>{typeof r<"u"&&w!==null&&ve.averageCenter(w,r)},[w,r]),c.useEffect(()=>{typeof i<"u"&&w!==null&&ve.batchSizeIE(w,i)},[w,i]),c.useEffect(()=>{typeof s<"u"&&w!==null&&ve.calculator(w,s)},[w,s]),c.useEffect(()=>{typeof o<"u"&&w!==null&&ve.clusterClass(w,o)},[w,o]),c.useEffect(()=>{typeof l<"u"&&w!==null&&ve.enableRetinaIcons(w,l)},[w,l]),c.useEffect(()=>{typeof a<"u"&&w!==null&&ve.gridSize(w,a)},[w,a]),c.useEffect(()=>{typeof u<"u"&&w!==null&&ve.ignoreHidden(w,u)},[w,u]),c.useEffect(()=>{typeof f<"u"&&w!==null&&ve.imageExtension(w,f)},[w,f]),c.useEffect(()=>{typeof d<"u"&&w!==null&&ve.imagePath(w,d)},[w,d]),c.useEffect(()=>{typeof v<"u"&&w!==null&&ve.imageSizes(w,v)},[w,v]),c.useEffect(()=>{typeof x<"u"&&w!==null&&ve.maxZoom(w,x)},[w,x]),c.useEffect(()=>{typeof p<"u"&&w!==null&&ve.minimumClusterSize(w,p)},[w,p]),c.useEffect(()=>{typeof S<"u"&&w!==null&&ve.styles(w,S)},[w,S]),c.useEffect(()=>{typeof k<"u"&&w!==null&&ve.title(w,k)},[w,k]),c.useEffect(()=>{typeof m<"u"&&w!==null&&ve.zoomOnClick(w,m)},[w,m]),c.useEffect(()=>{if(!P)return;const A=Object.assign({},n||aw),$=new Jh(P,[],A);return r&&ve.averageCenter($,r),i&&ve.batchSizeIE($,i),s&&ve.calculator($,s),o&&ve.clusterClass($,o),l&&ve.enableRetinaIcons($,l),a&&ve.gridSize($,a),u&&ve.ignoreHidden($,u),f&&ve.imageExtension($,f),d&&ve.imagePath($,d),v&&ve.imageSizes($,v),x&&ve.maxZoom($,x),p&&ve.minimumClusterSize($,p),S&&ve.styles($,S),k&&ve.title($,k),m&&ve.zoomOnClick($,m),M&&j(google.maps.event.addListener($,mt.onMouseOut,M)),b&&te(google.maps.event.addListener($,mt.onMouseOver,b)),g&&V(google.maps.event.addListener($,mt.onClick,g)),y&&H(google.maps.event.addListener($,mt.onClusteringBegin,y)),h&&ee(google.maps.event.addListener($,mt.onClusteringEnd,h)),C($),I&&I($),()=>{O!==null&&google.maps.event.removeListener(O),Y!==null&&google.maps.event.removeListener(Y),D!==null&&google.maps.event.removeListener(D),U!==null&&google.maps.event.removeListener(U),G!==null&&google.maps.event.removeListener(G),_&&_($)}},[]),w!==null&&t(w)||null}c.memo(uw);class cw extends c.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={markerClusterer:null},this.setClustererCallback=()=>{this.state.markerClusterer!==null&&this.props.onLoad&&this.props.onLoad(this.state.markerClusterer)}}componentDidMount(){if(this.context){const t=new Jh(this.context,[],this.props.options);this.registeredEvents=de({updaterMap:ve,eventMap:mt,prevProps:{},nextProps:this.props,instance:t}),this.setState(()=>({markerClusterer:t}),this.setClustererCallback)}}componentDidUpdate(t){this.state.markerClusterer&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:ve,eventMap:mt,prevProps:t,nextProps:this.props,instance:this.state.markerClusterer}))}componentWillUnmount(){this.state.markerClusterer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.markerClusterer),me(this.registeredEvents),this.state.markerClusterer.setMap(null))}render(){return this.state.markerClusterer!==null?this.props.children(this.state.markerClusterer):null}}cw.contextType=ue;function cf(e){e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation()}var Xh=function(){function e(t){t===void 0&&(t={}),this.getCloseClickHandler=this.getCloseClickHandler.bind(this),this.closeClickHandler=this.closeClickHandler.bind(this),this.createInfoBoxDiv=this.createInfoBoxDiv.bind(this),this.addClickHandler=this.addClickHandler.bind(this),this.getCloseBoxImg=this.getCloseBoxImg.bind(this),this.getBoxWidths=this.getBoxWidths.bind(this),this.setBoxStyle=this.setBoxStyle.bind(this),this.setPosition=this.setPosition.bind(this),this.getPosition=this.getPosition.bind(this),this.setOptions=this.setOptions.bind(this),this.setContent=this.setContent.bind(this),this.setVisible=this.setVisible.bind(this),this.getContent=this.getContent.bind(this),this.getVisible=this.getVisible.bind(this),this.setZIndex=this.setZIndex.bind(this),this.getZIndex=this.getZIndex.bind(this),this.onRemove=this.onRemove.bind(this),this.panBox=this.panBox.bind(this),this.extend=this.extend.bind(this),this.close=this.close.bind(this),this.draw=this.draw.bind(this),this.show=this.show.bind(this),this.hide=this.hide.bind(this),this.open=this.open.bind(this),this.extend(e,google.maps.OverlayView),this.content=t.content||"",this.disableAutoPan=t.disableAutoPan||!1,this.maxWidth=t.maxWidth||0,this.pixelOffset=t.pixelOffset||new google.maps.Size(0,0),this.position=t.position||new google.maps.LatLng(0,0),this.zIndex=t.zIndex||null,this.boxClass=t.boxClass||"infoBox",this.boxStyle=t.boxStyle||{},this.closeBoxMargin=t.closeBoxMargin||"2px",this.closeBoxURL=t.closeBoxURL||"http://www.google.com/intl/en_us/mapfiles/close.gif",t.closeBoxURL===""&&(this.closeBoxURL=""),this.infoBoxClearance=t.infoBoxClearance||new google.maps.Size(1,1),typeof t.visible>"u"&&(typeof t.isHidden>"u"?t.visible=!0:t.visible=!t.isHidden),this.isHidden=!t.visible,this.alignBottom=t.alignBottom||!1,this.pane=t.pane||"floatPane",this.enableEventPropagation=t.enableEventPropagation||!1,this.div=null,this.closeListener=null,this.moveListener=null,this.mapListener=null,this.contextListener=null,this.eventListeners=null,this.fixedWidthSet=null}return e.prototype.createInfoBoxDiv=function(){var t=this,n=function(l){l.returnValue=!1,l.preventDefault&&l.preventDefault(),t.enableEventPropagation||cf(l)};if(!this.div){this.div=document.createElement("div"),this.setBoxStyle(),typeof this.content=="string"?this.div.innerHTML=this.getCloseBoxImg()+this.content:(this.div.innerHTML=this.getCloseBoxImg(),this.div.appendChild(this.content));var r=this.getPanes();if(r!==null&&r[this.pane].appendChild(this.div),this.addClickHandler(),this.div.style.width)this.fixedWidthSet=!0;else if(this.maxWidth!==0&&this.div.offsetWidth>this.maxWidth)this.div.style.width=this.maxWidth+"px",this.fixedWidthSet=!0;else{var i=this.getBoxWidths();this.div.style.width=this.div.offsetWidth-i.left-i.right+"px",this.fixedWidthSet=!1}if(this.panBox(this.disableAutoPan),!this.enableEventPropagation){this.eventListeners=[];for(var s=["mousedown","mouseover","mouseout","mouseup","click","dblclick","touchstart","touchend","touchmove"],o=0;o<s.length;o++)this.eventListeners.push(google.maps.event.addListener(this.div,s[o],cf));this.eventListeners.push(google.maps.event.addListener(this.div,"mouseover",function(){t.div&&(t.div.style.cursor="default")}))}this.contextListener=google.maps.event.addListener(this.div,"contextmenu",n),google.maps.event.trigger(this,"domready")}},e.prototype.getCloseBoxImg=function(){var t="";return this.closeBoxURL!==""&&(t='<img alt=""',t+=' aria-hidden="true"',t+=" src='"+this.closeBoxURL+"'",t+=" align=right",t+=" style='",t+=" position: relative;",t+=" cursor: pointer;",t+=" margin: "+this.closeBoxMargin+";",t+="'>"),t},e.prototype.addClickHandler=function(){this.closeListener=this.div&&this.div.firstChild&&this.closeBoxURL!==""?google.maps.event.addListener(this.div.firstChild,"click",this.getCloseClickHandler()):null},e.prototype.closeClickHandler=function(t){t.cancelBubble=!0,t.stopPropagation&&t.stopPropagation(),google.maps.event.trigger(this,"closeclick"),this.close()},e.prototype.getCloseClickHandler=function(){return this.closeClickHandler},e.prototype.panBox=function(t){if(this.div&&!t){var n=this.getMap();if(n instanceof google.maps.Map){var r=0,i=0,s=n.getBounds();s&&!s.contains(this.position)&&n.setCenter(this.position);var o=n.getDiv(),l=o.offsetWidth,a=o.offsetHeight,u=this.pixelOffset.width,f=this.pixelOffset.height,d=this.div.offsetWidth,v=this.div.offsetHeight,x=this.infoBoxClearance.width,p=this.infoBoxClearance.height,S=this.getProjection(),k=S.fromLatLngToContainerPixel(this.position);k!==null&&(k.x<-u+x?r=k.x+u-x:k.x+d+u+x>l&&(r=k.x+d+u+x-l),this.alignBottom?k.y<-f+p+v?i=k.y+f-p-v:k.y+f+p>a&&(i=k.y+f+p-a):k.y<-f+p?i=k.y+f-p:k.y+v+f+p>a&&(i=k.y+v+f+p-a)),r===0&&i===0||n.panBy(r,i)}}},e.prototype.setBoxStyle=function(){if(this.div){this.div.className=this.boxClass,this.div.style.cssText="";var t=this.boxStyle;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(this.div.style[n]=t[n]);if(this.div.style.webkitTransform="translateZ(0)",typeof this.div.style.opacity<"u"&&this.div.style.opacity!==""){var r=parseFloat(this.div.style.opacity||"");this.div.style.msFilter='"progid:DXImageTransform.Microsoft.Alpha(Opacity='+r*100+')"',this.div.style.filter="alpha(opacity="+r*100+")"}this.div.style.position="absolute",this.div.style.visibility="hidden",this.zIndex!==null&&(this.div.style.zIndex=this.zIndex+""),this.div.style.overflow||(this.div.style.overflow="auto")}},e.prototype.getBoxWidths=function(){var t={top:0,bottom:0,left:0,right:0};if(!this.div)return t;if(document.defaultView){var n=this.div.ownerDocument,r=n&&n.defaultView?n.defaultView.getComputedStyle(this.div,""):null;r&&(t.top=parseInt(r.borderTopWidth||"",10)||0,t.bottom=parseInt(r.borderBottomWidth||"",10)||0,t.left=parseInt(r.borderLeftWidth||"",10)||0,t.right=parseInt(r.borderRightWidth||"",10)||0)}else if(document.documentElement.currentStyle){var i=this.div.currentStyle;i&&(t.top=parseInt(i.borderTopWidth||"",10)||0,t.bottom=parseInt(i.borderBottomWidth||"",10)||0,t.left=parseInt(i.borderLeftWidth||"",10)||0,t.right=parseInt(i.borderRightWidth||"",10)||0)}return t},e.prototype.onRemove=function(){this.div&&this.div.parentNode&&(this.div.parentNode.removeChild(this.div),this.div=null)},e.prototype.draw=function(){if(this.createInfoBoxDiv(),this.div){var t=this.getProjection(),n=t.fromLatLngToDivPixel(this.position);n!==null&&(this.div.style.left=n.x+this.pixelOffset.width+"px",this.alignBottom?this.div.style.bottom=-(n.y+this.pixelOffset.height)+"px":this.div.style.top=n.y+this.pixelOffset.height+"px"),this.isHidden?this.div.style.visibility="hidden":this.div.style.visibility="visible"}},e.prototype.setOptions=function(t){t===void 0&&(t={}),typeof t.boxClass<"u"&&(this.boxClass=t.boxClass,this.setBoxStyle()),typeof t.boxStyle<"u"&&(this.boxStyle=t.boxStyle,this.setBoxStyle()),typeof t.content<"u"&&this.setContent(t.content),typeof t.disableAutoPan<"u"&&(this.disableAutoPan=t.disableAutoPan),typeof t.maxWidth<"u"&&(this.maxWidth=t.maxWidth),typeof t.pixelOffset<"u"&&(this.pixelOffset=t.pixelOffset),typeof t.alignBottom<"u"&&(this.alignBottom=t.alignBottom),typeof t.position<"u"&&this.setPosition(t.position),typeof t.zIndex<"u"&&this.setZIndex(t.zIndex),typeof t.closeBoxMargin<"u"&&(this.closeBoxMargin=t.closeBoxMargin),typeof t.closeBoxURL<"u"&&(this.closeBoxURL=t.closeBoxURL),typeof t.infoBoxClearance<"u"&&(this.infoBoxClearance=t.infoBoxClearance),typeof t.isHidden<"u"&&(this.isHidden=t.isHidden),typeof t.visible<"u"&&(this.isHidden=!t.visible),typeof t.enableEventPropagation<"u"&&(this.enableEventPropagation=t.enableEventPropagation),this.div&&this.draw()},e.prototype.setContent=function(t){this.content=t,this.div&&(this.closeListener&&(google.maps.event.removeListener(this.closeListener),this.closeListener=null),this.fixedWidthSet||(this.div.style.width=""),typeof t=="string"?this.div.innerHTML=this.getCloseBoxImg()+t:(this.div.innerHTML=this.getCloseBoxImg(),this.div.appendChild(t)),this.fixedWidthSet||(this.div.style.width=this.div.offsetWidth+"px",typeof t=="string"?this.div.innerHTML=this.getCloseBoxImg()+t:(this.div.innerHTML=this.getCloseBoxImg(),this.div.appendChild(t))),this.addClickHandler()),google.maps.event.trigger(this,"content_changed")},e.prototype.setPosition=function(t){this.position=t,this.div&&this.draw(),google.maps.event.trigger(this,"position_changed")},e.prototype.setVisible=function(t){this.isHidden=!t,this.div&&(this.div.style.visibility=this.isHidden?"hidden":"visible")},e.prototype.setZIndex=function(t){this.zIndex=t,this.div&&(this.div.style.zIndex=t+""),google.maps.event.trigger(this,"zindex_changed")},e.prototype.getContent=function(){return this.content},e.prototype.getPosition=function(){return this.position},e.prototype.getZIndex=function(){return this.zIndex},e.prototype.getVisible=function(){var t=this.getMap();return typeof t>"u"||t===null?!1:!this.isHidden},e.prototype.show=function(){this.isHidden=!1,this.div&&(this.div.style.visibility="visible")},e.prototype.hide=function(){this.isHidden=!0,this.div&&(this.div.style.visibility="hidden")},e.prototype.open=function(t,n){var r=this;n&&(this.position=n.getPosition(),this.moveListener=google.maps.event.addListener(n,"position_changed",function(){var i=n.getPosition();r.setPosition(i)}),this.mapListener=google.maps.event.addListener(n,"map_changed",function(){r.setMap(n.map)})),this.setMap(t),this.div&&this.panBox()},e.prototype.close=function(){if(this.closeListener&&(google.maps.event.removeListener(this.closeListener),this.closeListener=null),this.eventListeners){for(var t=0;t<this.eventListeners.length;t++)google.maps.event.removeListener(this.eventListeners[t]);this.eventListeners=null}this.moveListener&&(google.maps.event.removeListener(this.moveListener),this.moveListener=null),this.mapListener&&(google.maps.event.removeListener(this.mapListener),this.mapListener=null),this.contextListener&&(google.maps.event.removeListener(this.contextListener),this.contextListener=null),this.setMap(null)},e.prototype.extend=function(t,n){return function(i){for(var s in i.prototype)Object.prototype.hasOwnProperty.call(this,s)||(this.prototype[s]=i.prototype[s]);return this}.apply(t,[n])},e}();const df={onCloseClick:"closeclick",onContentChanged:"content_changed",onDomReady:"domready",onPositionChanged:"position_changed",onZindexChanged:"zindex_changed"},ff={options(e,t){e.setOptions(t)},position(e,t){t instanceof google.maps.LatLng?e.setPosition(t):e.setPosition(new google.maps.LatLng(t.lat,t.lng))},visible(e,t){e.setVisible(t)},zIndex(e,t){e.setZIndex(t)}},dw={};function fw({children:e,anchor:t,options:n,position:r,zIndex:i,onCloseClick:s,onDomReady:o,onContentChanged:l,onPositionChanged:a,onZindexChanged:u,onLoad:f,onUnmount:d}){const v=c.useContext(ue),[x,p]=c.useState(null),[S,k]=c.useState(null),[m,g]=c.useState(null),[y,h]=c.useState(null),[b,M]=c.useState(null),[I,_]=c.useState(null),w=c.useRef(null);return c.useEffect(()=>{v&&x!==null&&(x.close(),t?x.open(v,t):x.getPosition()&&x.open(v))},[v,x,t]),c.useEffect(()=>{n&&x!==null&&x.setOptions(n)},[x,n]),c.useEffect(()=>{if(r&&x!==null){const C=r instanceof google.maps.LatLng?r:new google.maps.LatLng(r.lat,r.lng);x.setPosition(C)}},[r]),c.useEffect(()=>{typeof i=="number"&&x!==null&&x.setZIndex(i)},[i]),c.useEffect(()=>{x&&s&&(S!==null&&google.maps.event.removeListener(S),k(google.maps.event.addListener(x,"closeclick",s)))},[s]),c.useEffect(()=>{x&&o&&(m!==null&&google.maps.event.removeListener(m),g(google.maps.event.addListener(x,"domready",o)))},[o]),c.useEffect(()=>{x&&l&&(y!==null&&google.maps.event.removeListener(y),h(google.maps.event.addListener(x,"content_changed",l)))},[l]),c.useEffect(()=>{x&&a&&(b!==null&&google.maps.event.removeListener(b),M(google.maps.event.addListener(x,"position_changed",a)))},[a]),c.useEffect(()=>{x&&u&&(I!==null&&google.maps.event.removeListener(I),_(google.maps.event.addListener(x,"zindex_changed",u)))},[u]),c.useEffect(()=>{if(v){const C=n||dw,{position:P}=C,D=oc(C,["position"]);let V;P&&!(P instanceof google.maps.LatLng)&&(V=new google.maps.LatLng(P.lat,P.lng));const U=new Xh(Object.assign(Object.assign({},D),V?{position:V}:{}));w.current=document.createElement("div"),p(U),s&&k(google.maps.event.addListener(U,"closeclick",s)),o&&g(google.maps.event.addListener(U,"domready",o)),l&&h(google.maps.event.addListener(U,"content_changed",l)),a&&M(google.maps.event.addListener(U,"position_changed",a)),u&&_(google.maps.event.addListener(U,"zindex_changed",u)),U.setContent(w.current),t?U.open(v,t):U.getPosition()?U.open(v):Ne(!1,"You must provide either an anchor or a position prop for <InfoBox>."),f&&f(U)}return()=>{x!==null&&(S&&google.maps.event.removeListener(S),y&&google.maps.event.removeListener(y),m&&google.maps.event.removeListener(m),b&&google.maps.event.removeListener(b),I&&google.maps.event.removeListener(I),d&&d(x),x.close())}},[]),w.current?Kt.createPortal(c.Children.only(e),w.current):null}c.memo(fw);class pw extends c.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.containerElement=null,this.state={infoBox:null},this.open=(t,n)=>{n?t.open(this.context,n):t.getPosition()?t.open(this.context):Ne(!1,"You must provide either an anchor or a position prop for <InfoBox>.")},this.setInfoBoxCallback=()=>{this.state.infoBox!==null&&this.containerElement!==null&&(this.state.infoBox.setContent(this.containerElement),this.open(this.state.infoBox,this.props.anchor),this.props.onLoad&&this.props.onLoad(this.state.infoBox))}}componentDidMount(){const t=this.props.options||{},{position:n}=t,r=oc(t,["position"]);let i;n&&!(n instanceof google.maps.LatLng)&&(i=new google.maps.LatLng(n.lat,n.lng));const s=new Xh(Object.assign(Object.assign({},r),i?{position:i}:{}));this.containerElement=document.createElement("div"),this.registeredEvents=de({updaterMap:ff,eventMap:df,prevProps:{},nextProps:this.props,instance:s}),this.setState({infoBox:s},this.setInfoBoxCallback)}componentDidUpdate(t){const{infoBox:n}=this.state;n!==null&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:ff,eventMap:df,prevProps:t,nextProps:this.props,instance:n}))}componentWillUnmount(){const{onUnmount:t}=this.props,{infoBox:n}=this.state;n!==null&&(t&&t(n),me(this.registeredEvents),n.close())}render(){return this.containerElement?Kt.createPortal(c.Children.only(this.props.children),this.containerElement):null}}pw.contextType=ue;var pf=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t=="object"&&typeof n=="object"){if(t.constructor!==n.constructor)return!1;var r,i,s;if(Array.isArray(t)){if(r=t.length,r!=n.length)return!1;for(i=r;i--!==0;)if(!e(t[i],n[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if(s=Object.keys(t),r=s.length,r!==Object.keys(n).length)return!1;for(i=r;i--!==0;)if(!Object.prototype.hasOwnProperty.call(n,s[i]))return!1;for(i=r;i--!==0;){var o=s[i];if(!e(t[o],n[o]))return!1}return!0}return t!==t&&n!==n},qh={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Tx,function(){function n(v,x,p,S,k,m){if(!(k-S<=p)){var g=S+k>>1;r(v,x,g,S,k,m%2),n(v,x,p,S,g-1,m+1),n(v,x,p,g+1,k,m+1)}}function r(v,x,p,S,k,m){for(;k>S;){if(k-S>600){var g=k-S+1,y=p-S+1,h=Math.log(g),b=.5*Math.exp(2*h/3),M=.5*Math.sqrt(h*b*(g-b)/g)*(y-g/2<0?-1:1),I=Math.max(S,Math.floor(p-y*b/g+M)),_=Math.min(k,Math.floor(p+(g-y)*b/g+M));r(v,x,p,I,_,m)}var w=x[2*p+m],C=S,P=k;for(i(v,x,S,p),x[2*k+m]>w&&i(v,x,S,k);C<P;){for(i(v,x,C,P),C++,P--;x[2*C+m]<w;)C++;for(;x[2*P+m]>w;)P--}x[2*S+m]===w?i(v,x,S,P):(P++,i(v,x,P,k)),P<=p&&(S=P+1),p<=P&&(k=P-1)}}function i(v,x,p,S){s(v,p,S),s(x,2*p,2*S),s(x,2*p+1,2*S+1)}function s(v,x,p){var S=v[x];v[x]=v[p],v[p]=S}function o(v,x,p,S,k,m,g){for(var y=[0,v.length-1,0],h=[],b,M;y.length;){var I=y.pop(),_=y.pop(),w=y.pop();if(_-w<=g){for(var C=w;C<=_;C++)b=x[2*C],M=x[2*C+1],b>=p&&b<=k&&M>=S&&M<=m&&h.push(v[C]);continue}var P=Math.floor((w+_)/2);b=x[2*P],M=x[2*P+1],b>=p&&b<=k&&M>=S&&M<=m&&h.push(v[P]);var D=(I+1)%2;(I===0?p<=b:S<=M)&&(y.push(w),y.push(P-1),y.push(D)),(I===0?k>=b:m>=M)&&(y.push(P+1),y.push(_),y.push(D))}return h}function l(v,x,p,S,k,m){for(var g=[0,v.length-1,0],y=[],h=k*k;g.length;){var b=g.pop(),M=g.pop(),I=g.pop();if(M-I<=m){for(var _=I;_<=M;_++)a(x[2*_],x[2*_+1],p,S)<=h&&y.push(v[_]);continue}var w=Math.floor((I+M)/2),C=x[2*w],P=x[2*w+1];a(C,P,p,S)<=h&&y.push(v[w]);var D=(b+1)%2;(b===0?p-k<=C:S-k<=P)&&(g.push(I),g.push(w-1),g.push(D)),(b===0?p+k>=C:S+k>=P)&&(g.push(w+1),g.push(M),g.push(D))}return y}function a(v,x,p,S){var k=v-p,m=x-S;return k*k+m*m}var u=function(v){return v[0]},f=function(v){return v[1]},d=function(x,p,S,k,m){p===void 0&&(p=u),S===void 0&&(S=f),k===void 0&&(k=64),m===void 0&&(m=Float64Array),this.nodeSize=k,this.points=x;for(var g=x.length<65536?Uint16Array:Uint32Array,y=this.ids=new g(x.length),h=this.coords=new m(x.length*2),b=0;b<x.length;b++)y[b]=b,h[2*b]=p(x[b]),h[2*b+1]=S(x[b]);n(y,h,k,0,y.length-1,0)};return d.prototype.range=function(x,p,S,k){return o(this.ids,this.coords,x,p,S,k,this.nodeSize)},d.prototype.within=function(x,p,S){return l(this.ids,this.coords,x,p,S,this.nodeSize)},d})})(qh);var mf=qh.exports;const mw={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:e=>e},fo=Math.fround||(e=>t=>(e[0]=+t,e[0]))(new Float32Array(1));class hw{constructor(t){this.options=si(Object.create(mw),t),this.trees=new Array(this.options.maxZoom+1)}load(t){const{log:n,minZoom:r,maxZoom:i,nodeSize:s}=this.options;n&&console.time("total time");const o=`prepare ${t.length} points`;n&&console.time(o),this.points=t;let l=[];for(let a=0;a<t.length;a++)t[a].geometry&&l.push(vw(t[a],a));this.trees[i+1]=new mf(l,gf,vf,s,Float32Array),n&&console.timeEnd(o);for(let a=i;a>=r;a--){const u=+Date.now();l=this._cluster(l,a),this.trees[a]=new mf(l,gf,vf,s,Float32Array),n&&console.log("z%d: %d clusters in %dms",a,l.length,+Date.now()-u)}return n&&console.timeEnd("total time"),this}getClusters(t,n){let r=((t[0]+180)%360+360)%360-180;const i=Math.max(-90,Math.min(90,t[1]));let s=t[2]===180?180:((t[2]+180)%360+360)%360-180;const o=Math.max(-90,Math.min(90,t[3]));if(t[2]-t[0]>=360)r=-180,s=180;else if(r>s){const f=this.getClusters([r,i,180,o],n),d=this.getClusters([-180,i,s,o],n);return f.concat(d)}const l=this.trees[this._limitZoom(n)],a=l.range(Ps(r),zs(o),Ps(s),zs(i)),u=[];for(const f of a){const d=l.points[f];u.push(d.numPoints?hf(d):this.points[d.index])}return u}getChildren(t){const n=this._getOriginId(t),r=this._getOriginZoom(t),i="No cluster with the specified id.",s=this.trees[r];if(!s)throw new Error(i);const o=s.points[n];if(!o)throw new Error(i);const l=this.options.radius/(this.options.extent*Math.pow(2,r-1)),a=s.within(o.x,o.y,l),u=[];for(const f of a){const d=s.points[f];d.parentId===t&&u.push(d.numPoints?hf(d):this.points[d.index])}if(u.length===0)throw new Error(i);return u}getLeaves(t,n,r){n=n||10,r=r||0;const i=[];return this._appendLeaves(i,t,n,r,0),i}getTile(t,n,r){const i=this.trees[this._limitZoom(t)],s=Math.pow(2,t),{extent:o,radius:l}=this.options,a=l/o,u=(r-a)/s,f=(r+1+a)/s,d={features:[]};return this._addTileFeatures(i.range((n-a)/s,u,(n+1+a)/s,f),i.points,n,r,s,d),n===0&&this._addTileFeatures(i.range(1-a/s,u,1,f),i.points,s,r,s,d),n===s-1&&this._addTileFeatures(i.range(0,u,a/s,f),i.points,-1,r,s,d),d.features.length?d:null}getClusterExpansionZoom(t){let n=this._getOriginZoom(t)-1;for(;n<=this.options.maxZoom;){const r=this.getChildren(t);if(n++,r.length!==1)break;t=r[0].properties.cluster_id}return n}_appendLeaves(t,n,r,i,s){const o=this.getChildren(n);for(const l of o){const a=l.properties;if(a&&a.cluster?s+a.point_count<=i?s+=a.point_count:s=this._appendLeaves(t,a.cluster_id,r,i,s):s<i?s++:t.push(l),t.length===r)break}return s}_addTileFeatures(t,n,r,i,s,o){for(const l of t){const a=n[l],u=a.numPoints;let f,d,v;if(u)f=eg(a),d=a.x,v=a.y;else{const S=this.points[a.index];f=S.properties,d=Ps(S.geometry.coordinates[0]),v=zs(S.geometry.coordinates[1])}const x={type:1,geometry:[[Math.round(this.options.extent*(d*s-r)),Math.round(this.options.extent*(v*s-i))]],tags:f};let p;u?p=a.id:this.options.generateId?p=a.index:this.points[a.index].id&&(p=this.points[a.index].id),p!==void 0&&(x.id=p),o.features.push(x)}}_limitZoom(t){return Math.max(this.options.minZoom,Math.min(+t,this.options.maxZoom+1))}_cluster(t,n){const r=[],{radius:i,extent:s,reduce:o,minPoints:l}=this.options,a=i/(s*Math.pow(2,n));for(let u=0;u<t.length;u++){const f=t[u];if(f.zoom<=n)continue;f.zoom=n;const d=this.trees[n+1],v=d.within(f.x,f.y,a),x=f.numPoints||1;let p=x;for(const S of v){const k=d.points[S];k.zoom>n&&(p+=k.numPoints||1)}if(p>x&&p>=l){let S=f.x*x,k=f.y*x,m=o&&x>1?this._map(f,!0):null;const g=(u<<5)+(n+1)+this.points.length;for(const y of v){const h=d.points[y];if(h.zoom<=n)continue;h.zoom=n;const b=h.numPoints||1;S+=h.x*b,k+=h.y*b,h.parentId=g,o&&(m||(m=this._map(f,!0)),o(m,this._map(h)))}f.parentId=g,r.push(gw(S/p,k/p,g,p,m))}else if(r.push(f),p>1)for(const S of v){const k=d.points[S];k.zoom<=n||(k.zoom=n,r.push(k))}}return r}_getOriginId(t){return t-this.points.length>>5}_getOriginZoom(t){return(t-this.points.length)%32}_map(t,n){if(t.numPoints)return n?si({},t.properties):t.properties;const r=this.points[t.index].properties,i=this.options.map(r);return n&&i===r?si({},i):i}}function gw(e,t,n,r,i){return{x:fo(e),y:fo(t),zoom:1/0,id:n,parentId:-1,numPoints:r,properties:i}}function vw(e,t){const[n,r]=e.geometry.coordinates;return{x:fo(Ps(n)),y:fo(zs(r)),zoom:1/0,index:t,parentId:-1}}function hf(e){return{type:"Feature",id:e.id,properties:eg(e),geometry:{type:"Point",coordinates:[yw(e.x),xw(e.y)]}}}function eg(e){const t=e.numPoints,n=t>=1e4?`${Math.round(t/1e3)}k`:t>=1e3?`${Math.round(t/100)/10}k`:t;return si(si({},e.properties),{cluster:!0,cluster_id:e.id,point_count:t,point_count_abbreviated:n})}function Ps(e){return e/360+.5}function zs(e){const t=Math.sin(e*Math.PI/180),n=.5-.25*Math.log((1+t)/(1-t))/Math.PI;return n<0?0:n>1?1:n}function yw(e){return(e-.5)*360}function xw(e){const t=(180-e*360)*Math.PI/180;return 360*Math.atan(Math.exp(t))/Math.PI-90}function si(e,t){for(const n in t)e[n]=t[n];return e}function gf(e){return e.x}function vf(e){return e.y}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function ww(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}class Za{constructor({markers:t,position:n}){this.markers=t,n&&(n instanceof google.maps.LatLng?this._position=n:this._position=new google.maps.LatLng(n))}get bounds(){if(!(this.markers.length===0&&!this._position))return this.markers.reduce((t,n)=>t.extend(n.getPosition()),new google.maps.LatLngBounds(this._position,this._position))}get position(){return this._position||this.bounds.getCenter()}get count(){return this.markers.filter(t=>t.getVisible()).length}push(t){this.markers.push(t)}delete(){this.marker&&(this.marker.setMap(null),delete this.marker),this.markers.length=0}}class Sw{constructor({maxZoom:t=16}){this.maxZoom=t}noop({markers:t}){return Lw(t)}}const Lw=e=>e.map(n=>new Za({position:n.getPosition(),markers:[n]}));class kw extends Sw{constructor(t){var{maxZoom:n,radius:r=60}=t,i=ww(t,["maxZoom","radius"]);super({maxZoom:n}),this.superCluster=new hw(Object.assign({maxZoom:this.maxZoom,radius:r},i)),this.state={zoom:null}}calculate(t){let n=!1;if(!pf(t.markers,this.markers)){n=!0,this.markers=[...t.markers];const i=this.markers.map(s=>({type:"Feature",geometry:{type:"Point",coordinates:[s.getPosition().lng(),s.getPosition().lat()]},properties:{marker:s}}));this.superCluster.load(i)}const r={zoom:t.map.getZoom()};return n||this.state.zoom>this.maxZoom&&r.zoom>this.maxZoom||(n=n||!pf(this.state,r)),this.state=r,n&&(this.clusters=this.cluster(t)),{clusters:this.clusters,changed:n}}cluster({map:t}){return this.superCluster.getClusters([-180,-90,180,90],Math.round(t.getZoom())).map(this.transformCluster.bind(this))}transformCluster({geometry:{coordinates:[t,n]},properties:r}){if(r.cluster)return new Za({markers:this.superCluster.getLeaves(r.cluster_id,1/0).map(i=>i.properties.marker),position:new google.maps.LatLng({lat:n,lng:t})});{const i=r.marker;return new Za({markers:[i],position:i.getPosition()})}}}class Ew{constructor(t,n){this.markers={sum:t.length};const r=n.map(s=>s.count),i=r.reduce((s,o)=>s+o,0);this.clusters={count:n.length,markers:{mean:i/n.length,sum:i,min:Math.min(...r),max:Math.max(...r)}}}}class Cw{render({count:t,position:n},r){const i=t>Math.max(10,r.clusters.markers.mean)?"#ff0000":"#0000ff",s=window.btoa(`
  <svg fill="${i}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
    <circle cx="120" cy="120" opacity=".6" r="70" />
    <circle cx="120" cy="120" opacity=".3" r="90" />
    <circle cx="120" cy="120" opacity=".2" r="110" />
  </svg>`);return new google.maps.Marker({position:n,icon:{url:`data:image/svg+xml;base64,${s}`,scaledSize:new google.maps.Size(45,45)},label:{text:String(t),color:"rgba(255,255,255,0.9)",fontSize:"12px"},title:`Cluster of ${t} markers`,zIndex:Number(google.maps.Marker.MAX_ZINDEX)+t})}}function bw(e,t){for(let n in t.prototype)e.prototype[n]=t.prototype[n]}class lc{constructor(){bw(lc,google.maps.OverlayView)}}var oi;(function(e){e.CLUSTERING_BEGIN="clusteringbegin",e.CLUSTERING_END="clusteringend",e.CLUSTER_CLICK="click"})(oi||(oi={}));const Mw=(e,t,n)=>{n.fitBounds(t.bounds)};class Pw extends lc{constructor({map:t,markers:n=[],algorithm:r=new kw({}),renderer:i=new Cw,onClusterClick:s=Mw}){super(),this.markers=[...n],this.clusters=[],this.algorithm=r,this.renderer=i,this.onClusterClick=s,t&&this.setMap(t)}addMarker(t,n){this.markers.includes(t)||(this.markers.push(t),n||this.render())}addMarkers(t,n){t.forEach(r=>{this.addMarker(r,!0)}),n||this.render()}removeMarker(t,n){const r=this.markers.indexOf(t);return r===-1?!1:(t.setMap(null),this.markers.splice(r,1),n||this.render(),!0)}removeMarkers(t,n){let r=!1;return t.forEach(i=>{r=this.removeMarker(i,!0)||r}),r&&!n&&this.render(),r}clearMarkers(t){this.markers.length=0,t||this.render()}render(){const t=this.getMap();if(t instanceof google.maps.Map&&this.getProjection()){google.maps.event.trigger(this,oi.CLUSTERING_BEGIN,this);const{clusters:n,changed:r}=this.algorithm.calculate({markers:this.markers,map:t,mapCanvasProjection:this.getProjection()});(r||r==null)&&(this.reset(),this.clusters=n,this.renderClusters()),google.maps.event.trigger(this,oi.CLUSTERING_END,this)}}onAdd(){this.idleListener=this.getMap().addListener("idle",this.render.bind(this)),this.render()}onRemove(){google.maps.event.removeListener(this.idleListener),this.reset()}reset(){this.markers.forEach(t=>t.setMap(null)),this.clusters.forEach(t=>t.delete()),this.clusters=[]}renderClusters(){const t=new Ew(this.markers,this.clusters),n=this.getMap();this.clusters.forEach(r=>{r.markers.length===1?r.marker=r.markers[0]:(r.marker=this.renderer.render(r,t),this.onClusterClick&&r.marker.addListener("click",i=>{google.maps.event.trigger(this,oi.CLUSTER_CLICK,r),this.onClusterClick(i,r,n)})),r.marker.setMap(n)})}}function zw(e){const t=Ox(),[n,r]=c.useState(null);return c.useEffect(()=>{if(t&&n===null){const i=new Pw(Object.assign(Object.assign({},e),{map:t}));r(i)}},[t]),n}function Tw({children:e,options:t}){const n=zw(t);return n!==null?e(n):null}c.memo(Tw);const yf={onCloseClick:"closeclick",onContentChanged:"content_changed",onDomReady:"domready",onPositionChanged:"position_changed",onZindexChanged:"zindex_changed"},xf={options(e,t){e.setOptions(t)},position(e,t){e.setPosition(t)},zIndex(e,t){e.setZIndex(t)}};function Iw({children:e,anchor:t,options:n,position:r,zIndex:i,onCloseClick:s,onDomReady:o,onContentChanged:l,onPositionChanged:a,onZindexChanged:u,onLoad:f,onUnmount:d}){const v=c.useContext(ue),[x,p]=c.useState(null),[S,k]=c.useState(null),[m,g]=c.useState(null),[y,h]=c.useState(null),[b,M]=c.useState(null),[I,_]=c.useState(null),w=c.useRef(null);return c.useEffect(()=>{x!==null&&(x.close(),t?x.open(v,t):x.getPosition()&&x.open(v))},[v,x,t]),c.useEffect(()=>{n&&x!==null&&x.setOptions(n)},[x,n]),c.useEffect(()=>{r&&x!==null&&x.setPosition(r)},[r]),c.useEffect(()=>{typeof i=="number"&&x!==null&&x.setZIndex(i)},[i]),c.useEffect(()=>{x&&s&&(S!==null&&google.maps.event.removeListener(S),k(google.maps.event.addListener(x,"closeclick",s)))},[s]),c.useEffect(()=>{x&&o&&(m!==null&&google.maps.event.removeListener(m),g(google.maps.event.addListener(x,"domready",o)))},[o]),c.useEffect(()=>{x&&l&&(y!==null&&google.maps.event.removeListener(y),h(google.maps.event.addListener(x,"content_changed",l)))},[l]),c.useEffect(()=>{x&&a&&(b!==null&&google.maps.event.removeListener(b),M(google.maps.event.addListener(x,"position_changed",a)))},[a]),c.useEffect(()=>{x&&u&&(I!==null&&google.maps.event.removeListener(I),_(google.maps.event.addListener(x,"zindex_changed",u)))},[u]),c.useEffect(()=>{const C=new google.maps.InfoWindow(Object.assign({},n||{}));return p(C),w.current=document.createElement("div"),s&&k(google.maps.event.addListener(C,"closeclick",s)),o&&g(google.maps.event.addListener(C,"domready",o)),l&&h(google.maps.event.addListener(C,"content_changed",l)),a&&M(google.maps.event.addListener(C,"position_changed",a)),u&&_(google.maps.event.addListener(C,"zindex_changed",u)),C.setContent(w.current),r&&C.setPosition(r),i&&C.setZIndex(i),t?C.open(v,t):C.getPosition()?C.open(v):Ne(!1,"You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>."),f&&f(C),()=>{S&&google.maps.event.removeListener(S),y&&google.maps.event.removeListener(y),m&&google.maps.event.removeListener(m),b&&google.maps.event.removeListener(b),I&&google.maps.event.removeListener(I),d&&d(C),C.close()}},[]),w.current?Kt.createPortal(c.Children.only(e),w.current):null}c.memo(Iw);class Ow extends c.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.containerElement=null,this.state={infoWindow:null},this.open=(t,n)=>{n?t.open(this.context,n):t.getPosition()?t.open(this.context):Ne(!1,"You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.")},this.setInfoWindowCallback=()=>{this.state.infoWindow!==null&&this.containerElement!==null&&(this.state.infoWindow.setContent(this.containerElement),this.open(this.state.infoWindow,this.props.anchor),this.props.onLoad&&this.props.onLoad(this.state.infoWindow))}}componentDidMount(){const t=new google.maps.InfoWindow(Object.assign({},this.props.options||{}));this.containerElement=document.createElement("div"),this.registeredEvents=de({updaterMap:xf,eventMap:yf,prevProps:{},nextProps:this.props,instance:t}),this.setState(()=>({infoWindow:t}),this.setInfoWindowCallback)}componentDidUpdate(t){this.state.infoWindow!==null&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:xf,eventMap:yf,prevProps:t,nextProps:this.props,instance:this.state.infoWindow}))}componentWillUnmount(){this.state.infoWindow!==null&&(me(this.registeredEvents),this.props.onUnmount&&this.props.onUnmount(this.state.infoWindow),this.state.infoWindow.close())}render(){return this.containerElement?Kt.createPortal(c.Children.only(this.props.children),this.containerElement):null}}Ow.contextType=ue;const wf={onClick:"click",onDblClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDragStart:"dragstart",onMouseDown:"mousedown",onMouseMove:"mousemove",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onRightClick:"rightclick"},Sf={draggable(e,t){e.setDraggable(t)},editable(e,t){e.setEditable(t)},map(e,t){e.setMap(t)},options(e,t){e.setOptions(t)},path(e,t){e.setPath(t)},visible(e,t){e.setVisible(t)}},_w={};function Rw({options:e,draggable:t,editable:n,visible:r,path:i,onDblClick:s,onDragEnd:o,onDragStart:l,onMouseDown:a,onMouseMove:u,onMouseOut:f,onMouseOver:d,onMouseUp:v,onRightClick:x,onClick:p,onDrag:S,onLoad:k,onUnmount:m}){const g=c.useContext(ue),[y,h]=c.useState(null),[b,M]=c.useState(null),[I,_]=c.useState(null),[w,C]=c.useState(null),[P,D]=c.useState(null),[V,U]=c.useState(null),[H,G]=c.useState(null),[ee,O]=c.useState(null),[j,Y]=c.useState(null),[te,A]=c.useState(null),[$,T]=c.useState(null),[Q,z]=c.useState(null);return c.useEffect(()=>{y!==null&&y.setMap(g)},[g]),c.useEffect(()=>{typeof e<"u"&&y!==null&&y.setOptions(e)},[y,e]),c.useEffect(()=>{typeof t<"u"&&y!==null&&y.setDraggable(t)},[y,t]),c.useEffect(()=>{typeof n<"u"&&y!==null&&y.setEditable(n)},[y,n]),c.useEffect(()=>{typeof r<"u"&&y!==null&&y.setVisible(r)},[y,r]),c.useEffect(()=>{typeof i<"u"&&y!==null&&y.setPath(i)},[y,i]),c.useEffect(()=>{y&&s&&(b!==null&&google.maps.event.removeListener(b),M(google.maps.event.addListener(y,"dblclick",s)))},[s]),c.useEffect(()=>{y&&o&&(I!==null&&google.maps.event.removeListener(I),_(google.maps.event.addListener(y,"dragend",o)))},[o]),c.useEffect(()=>{y&&l&&(w!==null&&google.maps.event.removeListener(w),C(google.maps.event.addListener(y,"dragstart",l)))},[l]),c.useEffect(()=>{y&&a&&(P!==null&&google.maps.event.removeListener(P),D(google.maps.event.addListener(y,"mousedown",a)))},[a]),c.useEffect(()=>{y&&u&&(V!==null&&google.maps.event.removeListener(V),U(google.maps.event.addListener(y,"mousemove",u)))},[u]),c.useEffect(()=>{y&&f&&(H!==null&&google.maps.event.removeListener(H),G(google.maps.event.addListener(y,"mouseout",f)))},[f]),c.useEffect(()=>{y&&d&&(ee!==null&&google.maps.event.removeListener(ee),O(google.maps.event.addListener(y,"mouseover",d)))},[d]),c.useEffect(()=>{y&&v&&(j!==null&&google.maps.event.removeListener(j),Y(google.maps.event.addListener(y,"mouseup",v)))},[v]),c.useEffect(()=>{y&&x&&(te!==null&&google.maps.event.removeListener(te),A(google.maps.event.addListener(y,"rightclick",x)))},[x]),c.useEffect(()=>{y&&p&&($!==null&&google.maps.event.removeListener($),T(google.maps.event.addListener(y,"click",p)))},[p]),c.useEffect(()=>{y&&S&&(Q!==null&&google.maps.event.removeListener(Q),z(google.maps.event.addListener(y,"drag",S)))},[S]),c.useEffect(()=>{const B=new google.maps.Polyline(Object.assign(Object.assign({},e||_w),{map:g}));return i&&B.setPath(i),typeof r<"u"&&B.setVisible(r),typeof n<"u"&&B.setEditable(n),typeof t<"u"&&B.setDraggable(t),s&&M(google.maps.event.addListener(B,"dblclick",s)),o&&_(google.maps.event.addListener(B,"dragend",o)),l&&C(google.maps.event.addListener(B,"dragstart",l)),a&&D(google.maps.event.addListener(B,"mousedown",a)),u&&U(google.maps.event.addListener(B,"mousemove",u)),f&&G(google.maps.event.addListener(B,"mouseout",f)),d&&O(google.maps.event.addListener(B,"mouseover",d)),v&&Y(google.maps.event.addListener(B,"mouseup",v)),x&&A(google.maps.event.addListener(B,"rightclick",x)),p&&T(google.maps.event.addListener(B,"click",p)),S&&z(google.maps.event.addListener(B,"drag",S)),h(B),k&&k(B),()=>{b!==null&&google.maps.event.removeListener(b),I!==null&&google.maps.event.removeListener(I),w!==null&&google.maps.event.removeListener(w),P!==null&&google.maps.event.removeListener(P),V!==null&&google.maps.event.removeListener(V),H!==null&&google.maps.event.removeListener(H),ee!==null&&google.maps.event.removeListener(ee),j!==null&&google.maps.event.removeListener(j),te!==null&&google.maps.event.removeListener(te),$!==null&&google.maps.event.removeListener($),m&&m(B),B.setMap(null)}},[]),null}c.memo(Rw);class $w extends c.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={polyline:null},this.setPolylineCallback=()=>{this.state.polyline!==null&&this.props.onLoad&&this.props.onLoad(this.state.polyline)}}componentDidMount(){const t=new google.maps.Polyline(Object.assign(Object.assign({},this.props.options||{}),{map:this.context}));this.registeredEvents=de({updaterMap:Sf,eventMap:wf,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{polyline:t}},this.setPolylineCallback)}componentDidUpdate(t){this.state.polyline!==null&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:Sf,eventMap:wf,prevProps:t,nextProps:this.props,instance:this.state.polyline}))}componentWillUnmount(){this.state.polyline!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.polyline),me(this.registeredEvents),this.state.polyline.setMap(null))}render(){return null}}$w.contextType=ue;const Lf={onClick:"click",onDblClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDragStart:"dragstart",onMouseDown:"mousedown",onMouseMove:"mousemove",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onRightClick:"rightclick"},kf={draggable(e,t){e.setDraggable(t)},editable(e,t){e.setEditable(t)},map(e,t){e.setMap(t)},options(e,t){e.setOptions(t)},path(e,t){e.setPath(t)},paths(e,t){e.setPaths(t)},visible(e,t){e.setVisible(t)}};function Nw({options:e,draggable:t,editable:n,visible:r,path:i,paths:s,onDblClick:o,onDragEnd:l,onDragStart:a,onMouseDown:u,onMouseMove:f,onMouseOut:d,onMouseOver:v,onMouseUp:x,onRightClick:p,onClick:S,onDrag:k,onLoad:m,onUnmount:g}){const y=c.useContext(ue),[h,b]=c.useState(null),[M,I]=c.useState(null),[_,w]=c.useState(null),[C,P]=c.useState(null),[D,V]=c.useState(null),[U,H]=c.useState(null),[G,ee]=c.useState(null),[O,j]=c.useState(null),[Y,te]=c.useState(null),[A,$]=c.useState(null),[T,Q]=c.useState(null),[z,B]=c.useState(null);return c.useEffect(()=>{h!==null&&h.setMap(y)},[y]),c.useEffect(()=>{typeof e<"u"&&h!==null&&h.setOptions(e)},[h,e]),c.useEffect(()=>{typeof t<"u"&&h!==null&&h.setDraggable(t)},[h,t]),c.useEffect(()=>{typeof n<"u"&&h!==null&&h.setEditable(n)},[h,n]),c.useEffect(()=>{typeof r<"u"&&h!==null&&h.setVisible(r)},[h,r]),c.useEffect(()=>{typeof i<"u"&&h!==null&&h.setPath(i)},[h,i]),c.useEffect(()=>{typeof s<"u"&&h!==null&&h.setPaths(s)},[h,s]),c.useEffect(()=>{h&&o&&(M!==null&&google.maps.event.removeListener(M),I(google.maps.event.addListener(h,"dblclick",o)))},[o]),c.useEffect(()=>{h&&l&&(_!==null&&google.maps.event.removeListener(_),w(google.maps.event.addListener(h,"dragend",l)))},[l]),c.useEffect(()=>{h&&a&&(C!==null&&google.maps.event.removeListener(C),P(google.maps.event.addListener(h,"dragstart",a)))},[a]),c.useEffect(()=>{h&&u&&(D!==null&&google.maps.event.removeListener(D),V(google.maps.event.addListener(h,"mousedown",u)))},[u]),c.useEffect(()=>{h&&f&&(U!==null&&google.maps.event.removeListener(U),H(google.maps.event.addListener(h,"mousemove",f)))},[f]),c.useEffect(()=>{h&&d&&(G!==null&&google.maps.event.removeListener(G),ee(google.maps.event.addListener(h,"mouseout",d)))},[d]),c.useEffect(()=>{h&&v&&(O!==null&&google.maps.event.removeListener(O),j(google.maps.event.addListener(h,"mouseover",v)))},[v]),c.useEffect(()=>{h&&x&&(Y!==null&&google.maps.event.removeListener(Y),te(google.maps.event.addListener(h,"mouseup",x)))},[x]),c.useEffect(()=>{h&&p&&(A!==null&&google.maps.event.removeListener(A),$(google.maps.event.addListener(h,"rightclick",p)))},[p]),c.useEffect(()=>{h&&S&&(T!==null&&google.maps.event.removeListener(T),Q(google.maps.event.addListener(h,"click",S)))},[S]),c.useEffect(()=>{h&&k&&(z!==null&&google.maps.event.removeListener(z),B(google.maps.event.addListener(h,"drag",k)))},[k]),c.useEffect(()=>{const E=new google.maps.Polygon(Object.assign(Object.assign({},e||{}),{map:y}));return i&&E.setPath(i),s&&E.setPaths(s),typeof r<"u"&&E.setVisible(r),typeof n<"u"&&E.setEditable(n),typeof t<"u"&&E.setDraggable(t),o&&I(google.maps.event.addListener(E,"dblclick",o)),l&&w(google.maps.event.addListener(E,"dragend",l)),a&&P(google.maps.event.addListener(E,"dragstart",a)),u&&V(google.maps.event.addListener(E,"mousedown",u)),f&&H(google.maps.event.addListener(E,"mousemove",f)),d&&ee(google.maps.event.addListener(E,"mouseout",d)),v&&j(google.maps.event.addListener(E,"mouseover",v)),x&&te(google.maps.event.addListener(E,"mouseup",x)),p&&$(google.maps.event.addListener(E,"rightclick",p)),S&&Q(google.maps.event.addListener(E,"click",S)),k&&B(google.maps.event.addListener(E,"drag",k)),b(E),m&&m(E),()=>{M!==null&&google.maps.event.removeListener(M),_!==null&&google.maps.event.removeListener(_),C!==null&&google.maps.event.removeListener(C),D!==null&&google.maps.event.removeListener(D),U!==null&&google.maps.event.removeListener(U),G!==null&&google.maps.event.removeListener(G),O!==null&&google.maps.event.removeListener(O),Y!==null&&google.maps.event.removeListener(Y),A!==null&&google.maps.event.removeListener(A),T!==null&&google.maps.event.removeListener(T),g&&g(E),E.setMap(null)}},[]),null}c.memo(Nw);class Aw extends c.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={polygon:null},this.setPolygonCallback=()=>{this.state.polygon!==null&&this.props.onLoad&&this.props.onLoad(this.state.polygon)}}componentDidMount(){const t=new google.maps.Polygon(Object.assign(Object.assign({},this.props.options||{}),{map:this.context}));this.registeredEvents=de({updaterMap:kf,eventMap:Lf,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{polygon:t}},this.setPolygonCallback)}componentDidUpdate(t){this.state.polygon!==null&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:kf,eventMap:Lf,prevProps:t,nextProps:this.props,instance:this.state.polygon}))}componentWillUnmount(){this.state.polygon!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.polygon),me(this.registeredEvents),this.state.polygon&&this.state.polygon.setMap(null))}render(){return null}}Aw.contextType=ue;const Ef={onBoundsChanged:"bounds_changed",onClick:"click",onDblClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDragStart:"dragstart",onMouseDown:"mousedown",onMouseMove:"mousemove",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onRightClick:"rightclick"},Cf={bounds(e,t){e.setBounds(t)},draggable(e,t){e.setDraggable(t)},editable(e,t){e.setEditable(t)},map(e,t){e.setMap(t)},options(e,t){e.setOptions(t)},visible(e,t){e.setVisible(t)}};function Bw({options:e,bounds:t,draggable:n,editable:r,visible:i,onDblClick:s,onDragEnd:o,onDragStart:l,onMouseDown:a,onMouseMove:u,onMouseOut:f,onMouseOver:d,onMouseUp:v,onRightClick:x,onClick:p,onDrag:S,onBoundsChanged:k,onLoad:m,onUnmount:g}){const y=c.useContext(ue),[h,b]=c.useState(null),[M,I]=c.useState(null),[_,w]=c.useState(null),[C,P]=c.useState(null),[D,V]=c.useState(null),[U,H]=c.useState(null),[G,ee]=c.useState(null),[O,j]=c.useState(null),[Y,te]=c.useState(null),[A,$]=c.useState(null),[T,Q]=c.useState(null),[z,B]=c.useState(null),[E,Z]=c.useState(null);return c.useEffect(()=>{h!==null&&h.setMap(y)},[y]),c.useEffect(()=>{typeof e<"u"&&h!==null&&h.setOptions(e)},[h,e]),c.useEffect(()=>{typeof n<"u"&&h!==null&&h.setDraggable(n)},[h,n]),c.useEffect(()=>{typeof r<"u"&&h!==null&&h.setEditable(r)},[h,r]),c.useEffect(()=>{typeof i<"u"&&h!==null&&h.setVisible(i)},[h,i]),c.useEffect(()=>{typeof t<"u"&&h!==null&&h.setBounds(t)},[h,t]),c.useEffect(()=>{h&&s&&(M!==null&&google.maps.event.removeListener(M),I(google.maps.event.addListener(h,"dblclick",s)))},[s]),c.useEffect(()=>{h&&o&&(_!==null&&google.maps.event.removeListener(_),w(google.maps.event.addListener(h,"dragend",o)))},[o]),c.useEffect(()=>{h&&l&&(C!==null&&google.maps.event.removeListener(C),P(google.maps.event.addListener(h,"dragstart",l)))},[l]),c.useEffect(()=>{h&&a&&(D!==null&&google.maps.event.removeListener(D),V(google.maps.event.addListener(h,"mousedown",a)))},[a]),c.useEffect(()=>{h&&u&&(U!==null&&google.maps.event.removeListener(U),H(google.maps.event.addListener(h,"mousemove",u)))},[u]),c.useEffect(()=>{h&&f&&(G!==null&&google.maps.event.removeListener(G),ee(google.maps.event.addListener(h,"mouseout",f)))},[f]),c.useEffect(()=>{h&&d&&(O!==null&&google.maps.event.removeListener(O),j(google.maps.event.addListener(h,"mouseover",d)))},[d]),c.useEffect(()=>{h&&v&&(Y!==null&&google.maps.event.removeListener(Y),te(google.maps.event.addListener(h,"mouseup",v)))},[v]),c.useEffect(()=>{h&&x&&(A!==null&&google.maps.event.removeListener(A),$(google.maps.event.addListener(h,"rightclick",x)))},[x]),c.useEffect(()=>{h&&p&&(T!==null&&google.maps.event.removeListener(T),Q(google.maps.event.addListener(h,"click",p)))},[p]),c.useEffect(()=>{h&&S&&(z!==null&&google.maps.event.removeListener(z),B(google.maps.event.addListener(h,"drag",S)))},[S]),c.useEffect(()=>{h&&k&&(E!==null&&google.maps.event.removeListener(E),Z(google.maps.event.addListener(h,"bounds_changed",k)))},[k]),c.useEffect(()=>{const W=new google.maps.Rectangle(Object.assign(Object.assign({},e||{}),{map:y}));return typeof i<"u"&&W.setVisible(i),typeof r<"u"&&W.setEditable(r),typeof n<"u"&&W.setDraggable(n),typeof t<"u"&&W.setBounds(t),s&&I(google.maps.event.addListener(W,"dblclick",s)),o&&w(google.maps.event.addListener(W,"dragend",o)),l&&P(google.maps.event.addListener(W,"dragstart",l)),a&&V(google.maps.event.addListener(W,"mousedown",a)),u&&H(google.maps.event.addListener(W,"mousemove",u)),f&&ee(google.maps.event.addListener(W,"mouseout",f)),d&&j(google.maps.event.addListener(W,"mouseover",d)),v&&te(google.maps.event.addListener(W,"mouseup",v)),x&&$(google.maps.event.addListener(W,"rightclick",x)),p&&Q(google.maps.event.addListener(W,"click",p)),S&&B(google.maps.event.addListener(W,"drag",S)),k&&Z(google.maps.event.addListener(W,"bounds_changed",k)),b(W),m&&m(W),()=>{M!==null&&google.maps.event.removeListener(M),_!==null&&google.maps.event.removeListener(_),C!==null&&google.maps.event.removeListener(C),D!==null&&google.maps.event.removeListener(D),U!==null&&google.maps.event.removeListener(U),G!==null&&google.maps.event.removeListener(G),O!==null&&google.maps.event.removeListener(O),Y!==null&&google.maps.event.removeListener(Y),A!==null&&google.maps.event.removeListener(A),T!==null&&google.maps.event.removeListener(T),z!==null&&google.maps.event.removeListener(z),E!==null&&google.maps.event.removeListener(E),g&&g(W),W.setMap(null)}},[]),null}c.memo(Bw);class Dw extends c.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={rectangle:null},this.setRectangleCallback=()=>{this.state.rectangle!==null&&this.props.onLoad&&this.props.onLoad(this.state.rectangle)}}componentDidMount(){const t=new google.maps.Rectangle(Object.assign(Object.assign({},this.props.options||{}),{map:this.context}));this.registeredEvents=de({updaterMap:Cf,eventMap:Ef,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{rectangle:t}},this.setRectangleCallback)}componentDidUpdate(t){this.state.rectangle!==null&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:Cf,eventMap:Ef,prevProps:t,nextProps:this.props,instance:this.state.rectangle}))}componentWillUnmount(){this.state.rectangle!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.rectangle),me(this.registeredEvents),this.state.rectangle.setMap(null))}render(){return null}}Dw.contextType=ue;const bf={onCenterChanged:"center_changed",onRadiusChanged:"radius_changed",onClick:"click",onDblClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDragStart:"dragstart",onMouseDown:"mousedown",onMouseMove:"mousemove",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onRightClick:"rightclick"},Mf={center(e,t){e.setCenter(t)},draggable(e,t){e.setDraggable(t)},editable(e,t){e.setEditable(t)},map(e,t){e.setMap(t)},options(e,t){e.setOptions(t)},radius(e,t){e.setRadius(t)},visible(e,t){e.setVisible(t)}},Fw={};function jw({options:e,center:t,radius:n,draggable:r,editable:i,visible:s,onDblClick:o,onDragEnd:l,onDragStart:a,onMouseDown:u,onMouseMove:f,onMouseOut:d,onMouseOver:v,onMouseUp:x,onRightClick:p,onClick:S,onDrag:k,onCenterChanged:m,onRadiusChanged:g,onLoad:y,onUnmount:h}){const b=c.useContext(ue),[M,I]=c.useState(null),[_,w]=c.useState(null),[C,P]=c.useState(null),[D,V]=c.useState(null),[U,H]=c.useState(null),[G,ee]=c.useState(null),[O,j]=c.useState(null),[Y,te]=c.useState(null),[A,$]=c.useState(null),[T,Q]=c.useState(null),[z,B]=c.useState(null),[E,Z]=c.useState(null),[W,ne]=c.useState(null),[J,le]=c.useState(null);return c.useEffect(()=>{M!==null&&M.setMap(b)},[b]),c.useEffect(()=>{typeof e<"u"&&M!==null&&M.setOptions(e)},[M,e]),c.useEffect(()=>{typeof r<"u"&&M!==null&&M.setDraggable(r)},[M,r]),c.useEffect(()=>{typeof i<"u"&&M!==null&&M.setEditable(i)},[M,i]),c.useEffect(()=>{typeof s<"u"&&M!==null&&M.setVisible(s)},[M,s]),c.useEffect(()=>{typeof n=="number"&&M!==null&&M.setRadius(n)},[M,n]),c.useEffect(()=>{typeof t<"u"&&M!==null&&M.setCenter(t)},[M,t]),c.useEffect(()=>{M&&o&&(_!==null&&google.maps.event.removeListener(_),w(google.maps.event.addListener(M,"dblclick",o)))},[o]),c.useEffect(()=>{M&&l&&(C!==null&&google.maps.event.removeListener(C),P(google.maps.event.addListener(M,"dragend",l)))},[l]),c.useEffect(()=>{M&&a&&(D!==null&&google.maps.event.removeListener(D),V(google.maps.event.addListener(M,"dragstart",a)))},[a]),c.useEffect(()=>{M&&u&&(U!==null&&google.maps.event.removeListener(U),H(google.maps.event.addListener(M,"mousedown",u)))},[u]),c.useEffect(()=>{M&&f&&(G!==null&&google.maps.event.removeListener(G),ee(google.maps.event.addListener(M,"mousemove",f)))},[f]),c.useEffect(()=>{M&&d&&(O!==null&&google.maps.event.removeListener(O),j(google.maps.event.addListener(M,"mouseout",d)))},[d]),c.useEffect(()=>{M&&v&&(Y!==null&&google.maps.event.removeListener(Y),te(google.maps.event.addListener(M,"mouseover",v)))},[v]),c.useEffect(()=>{M&&x&&(A!==null&&google.maps.event.removeListener(A),$(google.maps.event.addListener(M,"mouseup",x)))},[x]),c.useEffect(()=>{M&&p&&(T!==null&&google.maps.event.removeListener(T),Q(google.maps.event.addListener(M,"rightclick",p)))},[p]),c.useEffect(()=>{M&&S&&(z!==null&&google.maps.event.removeListener(z),B(google.maps.event.addListener(M,"click",S)))},[S]),c.useEffect(()=>{M&&k&&(E!==null&&google.maps.event.removeListener(E),Z(google.maps.event.addListener(M,"drag",k)))},[k]),c.useEffect(()=>{M&&m&&(W!==null&&google.maps.event.removeListener(W),ne(google.maps.event.addListener(M,"center_changed",m)))},[S]),c.useEffect(()=>{M&&g&&(J!==null&&google.maps.event.removeListener(J),le(google.maps.event.addListener(M,"radius_changed",g)))},[g]),c.useEffect(()=>{const q=new google.maps.Circle(Object.assign(Object.assign({},e||Fw),{map:b}));return typeof n=="number"&&q.setRadius(n),typeof t<"u"&&q.setCenter(t),typeof n=="number"&&q.setRadius(n),typeof s<"u"&&q.setVisible(s),typeof i<"u"&&q.setEditable(i),typeof r<"u"&&q.setDraggable(r),o&&w(google.maps.event.addListener(q,"dblclick",o)),l&&P(google.maps.event.addListener(q,"dragend",l)),a&&V(google.maps.event.addListener(q,"dragstart",a)),u&&H(google.maps.event.addListener(q,"mousedown",u)),f&&ee(google.maps.event.addListener(q,"mousemove",f)),d&&j(google.maps.event.addListener(q,"mouseout",d)),v&&te(google.maps.event.addListener(q,"mouseover",v)),x&&$(google.maps.event.addListener(q,"mouseup",x)),p&&Q(google.maps.event.addListener(q,"rightclick",p)),S&&B(google.maps.event.addListener(q,"click",S)),k&&Z(google.maps.event.addListener(q,"drag",k)),m&&ne(google.maps.event.addListener(q,"center_changed",m)),g&&le(google.maps.event.addListener(q,"radius_changed",g)),I(q),y&&y(q),()=>{_!==null&&google.maps.event.removeListener(_),C!==null&&google.maps.event.removeListener(C),D!==null&&google.maps.event.removeListener(D),U!==null&&google.maps.event.removeListener(U),G!==null&&google.maps.event.removeListener(G),O!==null&&google.maps.event.removeListener(O),Y!==null&&google.maps.event.removeListener(Y),A!==null&&google.maps.event.removeListener(A),T!==null&&google.maps.event.removeListener(T),z!==null&&google.maps.event.removeListener(z),W!==null&&google.maps.event.removeListener(W),J!==null&&google.maps.event.removeListener(J),h&&h(q),q.setMap(null)}},[]),null}c.memo(jw);class Ww extends c.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={circle:null},this.setCircleCallback=()=>{this.state.circle!==null&&this.props.onLoad&&this.props.onLoad(this.state.circle)}}componentDidMount(){const t=new google.maps.Circle(Object.assign(Object.assign({},this.props.options||{}),{map:this.context}));this.registeredEvents=de({updaterMap:Mf,eventMap:bf,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{circle:t}},this.setCircleCallback)}componentDidUpdate(t){this.state.circle!==null&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:Mf,eventMap:bf,prevProps:t,nextProps:this.props,instance:this.state.circle}))}componentWillUnmount(){this.state.circle!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.circle),me(this.registeredEvents),this.state.circle&&this.state.circle.setMap(null))}render(){return null}}Ww.contextType=ue;const Pf={onClick:"click",onDblClick:"dblclick",onMouseDown:"mousedown",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onRightClick:"rightclick",onAddFeature:"addfeature",onRemoveFeature:"removefeature",onRemoveProperty:"removeproperty",onSetGeometry:"setgeometry",onSetProperty:"setproperty"},zf={add(e,t){e.add(t)},addgeojson(e,t,n){e.addGeoJson(t,n)},contains(e,t){e.contains(t)},foreach(e,t){e.forEach(t)},loadgeojson(e,t,n,r){e.loadGeoJson(t,n,r)},overridestyle(e,t,n){e.overrideStyle(t,n)},remove(e,t){e.remove(t)},revertstyle(e,t){e.revertStyle(t)},controlposition(e,t){e.setControlPosition(t)},controls(e,t){e.setControls(t)},drawingmode(e,t){e.setDrawingMode(t)},map(e,t){e.setMap(t)},style(e,t){e.setStyle(t)},togeojson(e,t){e.toGeoJson(t)}};function Uw({options:e,onClick:t,onDblClick:n,onMouseDown:r,onMouseMove:i,onMouseOut:s,onMouseOver:o,onMouseUp:l,onRightClick:a,onAddFeature:u,onRemoveFeature:f,onRemoveProperty:d,onSetGeometry:v,onSetProperty:x,onLoad:p,onUnmount:S}){const k=c.useContext(ue),[m,g]=c.useState(null),[y,h]=c.useState(null),[b,M]=c.useState(null),[I,_]=c.useState(null),[w,C]=c.useState(null),[P,D]=c.useState(null),[V,U]=c.useState(null),[H,G]=c.useState(null),[ee,O]=c.useState(null),[j,Y]=c.useState(null),[te,A]=c.useState(null),[$,T]=c.useState(null),[Q,z]=c.useState(null),[B,E]=c.useState(null);return c.useEffect(()=>{m!==null&&m.setMap(k)},[k]),c.useEffect(()=>{m&&n&&(y!==null&&google.maps.event.removeListener(y),h(google.maps.event.addListener(m,"dblclick",n)))},[n]),c.useEffect(()=>{m&&r&&(b!==null&&google.maps.event.removeListener(b),M(google.maps.event.addListener(m,"mousedown",r)))},[r]),c.useEffect(()=>{m&&i&&(I!==null&&google.maps.event.removeListener(I),_(google.maps.event.addListener(m,"mousemove",i)))},[i]),c.useEffect(()=>{m&&s&&(w!==null&&google.maps.event.removeListener(w),C(google.maps.event.addListener(m,"mouseout",s)))},[s]),c.useEffect(()=>{m&&o&&(P!==null&&google.maps.event.removeListener(P),D(google.maps.event.addListener(m,"mouseover",o)))},[o]),c.useEffect(()=>{m&&l&&(V!==null&&google.maps.event.removeListener(V),U(google.maps.event.addListener(m,"mouseup",l)))},[l]),c.useEffect(()=>{m&&a&&(H!==null&&google.maps.event.removeListener(H),G(google.maps.event.addListener(m,"rightclick",a)))},[a]),c.useEffect(()=>{m&&t&&(ee!==null&&google.maps.event.removeListener(ee),O(google.maps.event.addListener(m,"click",t)))},[t]),c.useEffect(()=>{m&&u&&(j!==null&&google.maps.event.removeListener(j),Y(google.maps.event.addListener(m,"addfeature",u)))},[u]),c.useEffect(()=>{m&&f&&(te!==null&&google.maps.event.removeListener(te),A(google.maps.event.addListener(m,"removefeature",f)))},[f]),c.useEffect(()=>{m&&d&&($!==null&&google.maps.event.removeListener($),T(google.maps.event.addListener(m,"removeproperty",d)))},[d]),c.useEffect(()=>{m&&v&&(Q!==null&&google.maps.event.removeListener(Q),z(google.maps.event.addListener(m,"setgeometry",v)))},[v]),c.useEffect(()=>{m&&x&&(B!==null&&google.maps.event.removeListener(B),E(google.maps.event.addListener(m,"setproperty",x)))},[x]),c.useEffect(()=>{if(k!==null){const Z=new google.maps.Data(Object.assign(Object.assign({},e||{}),{map:k}));n&&h(google.maps.event.addListener(Z,"dblclick",n)),r&&M(google.maps.event.addListener(Z,"mousedown",r)),i&&_(google.maps.event.addListener(Z,"mousemove",i)),s&&C(google.maps.event.addListener(Z,"mouseout",s)),o&&D(google.maps.event.addListener(Z,"mouseover",o)),l&&U(google.maps.event.addListener(Z,"mouseup",l)),a&&G(google.maps.event.addListener(Z,"rightclick",a)),t&&O(google.maps.event.addListener(Z,"click",t)),u&&Y(google.maps.event.addListener(Z,"addfeature",u)),f&&A(google.maps.event.addListener(Z,"removefeature",f)),d&&T(google.maps.event.addListener(Z,"removeproperty",d)),v&&z(google.maps.event.addListener(Z,"setgeometry",v)),x&&E(google.maps.event.addListener(Z,"setproperty",x)),g(Z),p&&p(Z)}return()=>{m&&(y!==null&&google.maps.event.removeListener(y),b!==null&&google.maps.event.removeListener(b),I!==null&&google.maps.event.removeListener(I),w!==null&&google.maps.event.removeListener(w),P!==null&&google.maps.event.removeListener(P),V!==null&&google.maps.event.removeListener(V),H!==null&&google.maps.event.removeListener(H),ee!==null&&google.maps.event.removeListener(ee),j!==null&&google.maps.event.removeListener(j),te!==null&&google.maps.event.removeListener(te),$!==null&&google.maps.event.removeListener($),Q!==null&&google.maps.event.removeListener(Q),B!==null&&google.maps.event.removeListener(B),S&&S(m),m.setMap(null))}},[]),null}c.memo(Uw);class Hw extends c.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={data:null},this.setDataCallback=()=>{this.state.data!==null&&this.props.onLoad&&this.props.onLoad(this.state.data)}}componentDidMount(){if(this.context!==null){const t=new google.maps.Data(Object.assign(Object.assign({},this.props.options||{}),{map:this.context}));this.registeredEvents=de({updaterMap:zf,eventMap:Pf,prevProps:{},nextProps:this.props,instance:t}),this.setState(()=>({data:t}),this.setDataCallback)}}componentDidUpdate(t){this.state.data!==null&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:zf,eventMap:Pf,prevProps:t,nextProps:this.props,instance:this.state.data}))}componentWillUnmount(){this.state.data!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.data),me(this.registeredEvents),this.state.data&&this.state.data.setMap(null))}render(){return null}}Hw.contextType=ue;const Tf={onClick:"click",onDefaultViewportChanged:"defaultviewport_changed",onStatusChanged:"status_changed"},If={options(e,t){e.setOptions(t)},url(e,t){e.setUrl(t)},zIndex(e,t){e.setZIndex(t)}};class Vw extends c.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={kmlLayer:null},this.setKmlLayerCallback=()=>{this.state.kmlLayer!==null&&this.props.onLoad&&this.props.onLoad(this.state.kmlLayer)}}componentDidMount(){const t=new google.maps.KmlLayer(Object.assign(Object.assign({},this.props.options),{map:this.context}));this.registeredEvents=de({updaterMap:If,eventMap:Tf,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{kmlLayer:t}},this.setKmlLayerCallback)}componentDidUpdate(t){this.state.kmlLayer!==null&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:If,eventMap:Tf,prevProps:t,nextProps:this.props,instance:this.state.kmlLayer}))}componentWillUnmount(){this.state.kmlLayer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.kmlLayer),me(this.registeredEvents),this.state.kmlLayer.setMap(null))}render(){return null}}Vw.contextType=ue;function tg(e,t){return typeof t=="function"?t(e.offsetWidth,e.offsetHeight):{x:0,y:0}}function Yw(e,t){return new t(e.lat,e.lng)}function Gw(e,t){return new t(new google.maps.LatLng(e.ne.lat,e.ne.lng),new google.maps.LatLng(e.sw.lat,e.sw.lng))}function Qw(e,t,n){return e instanceof t?e:n(e,t)}function Zw(e,t,n){return e instanceof t?e:n(e,t)}function Kw(e,t,n){const r=e&&e.fromLatLngToDivPixel(n.getNorthEast()),i=e&&e.fromLatLngToDivPixel(n.getSouthWest());return r&&i?{left:`${i.x+t.x}px`,top:`${r.y+t.y}px`,width:`${r.x-i.x-t.x}px`,height:`${i.y-r.y-t.y}px`}:{left:"-9999px",top:"-9999px"}}function Jw(e,t,n){const r=e&&e.fromLatLngToDivPixel(n);if(r){const{x:i,y:s}=r;return{left:`${i+t.x}px`,top:`${s+t.y}px`}}return{left:"-9999px",top:"-9999px"}}function ng(e,t,n,r){return n!==void 0?Kw(e,t,Zw(n,google.maps.LatLngBounds,Gw)):Jw(e,t,Qw(r,google.maps.LatLng,Yw))}function Xw(e,t){return e.left===t.left&&e.top===t.top&&e.width===t.height&&e.height===t.height}function qw(e,t,n,r,i){class s extends google.maps.OverlayView{constructor(l,a,u,f){super(),this.container=l,this.pane=a,this.position=u,this.bounds=f}onAdd(){var l;const a=(l=this.getPanes())===null||l===void 0?void 0:l[this.pane];a==null||a.appendChild(this.container)}draw(){const l=this.getProjection(),a=Object.assign({},this.container?tg(this.container,i):{x:0,y:0}),u=ng(l,a,this.bounds,this.position);for(const[f,d]of Object.entries(u))this.container.style[f]=d}onRemove(){this.container.parentNode!==null&&this.container.parentNode.removeChild(this.container)}}return new s(e,t,n,r)}function Of(e){return e?(e instanceof google.maps.LatLng?e:new google.maps.LatLng(e.lat,e.lng))+"":""}function _f(e){return e?(e instanceof google.maps.LatLngBounds?e:new google.maps.LatLngBounds(new google.maps.LatLng(e.south,e.east),new google.maps.LatLng(e.north,e.west)))+"":""}function eS({position:e,bounds:t,mapPaneName:n,zIndex:r,onLoad:i,onUnmount:s,getPixelPositionOffset:o,children:l}){const a=c.useContext(ue),u=c.useMemo(()=>{const d=document.createElement("div");return d.style.position="absolute",d},[]),f=c.useMemo(()=>qw(u,n,e,t,o),[u,n,e,t]);return c.useEffect(()=>(i==null||i(f),f==null||f.setMap(a),()=>{s==null||s(f),f==null||f.setMap(null)}),[a,f]),c.useEffect(()=>{u.style.zIndex=`${r}`},[r,u]),Kt.createPortal(l,u)}c.memo(eS);class Ir extends c.PureComponent{constructor(t){super(t),this.state={paneEl:null,containerStyle:{position:"absolute"}},this.updatePane=()=>{const r=this.props.mapPaneName,i=this.overlayView.getPanes();Ne(!!r,"OverlayView requires props.mapPaneName but got %s",r),i?this.setState({paneEl:i[r]}):this.setState({paneEl:null})},this.onAdd=()=>{var r,i;this.updatePane(),(i=(r=this.props).onLoad)===null||i===void 0||i.call(r,this.overlayView)},this.onPositionElement=()=>{const r=this.overlayView.getProjection(),i=Object.assign({x:0,y:0},this.containerRef.current?tg(this.containerRef.current,this.props.getPixelPositionOffset):{}),s=ng(r,i,this.props.bounds,this.props.position),{left:o,top:l,width:a,height:u}=this.state.containerStyle;Xw(s,{left:o,top:l,width:a,height:u})||this.setState({containerStyle:Object.assign(Object.assign({},s),{position:"absolute"})})},this.draw=()=>{this.onPositionElement()},this.onRemove=()=>{var r,i;this.setState(()=>({paneEl:null})),(i=(r=this.props).onUnmount)===null||i===void 0||i.call(r,this.overlayView)},this.containerRef=c.createRef();const n=new google.maps.OverlayView;n.onAdd=this.onAdd,n.draw=this.draw,n.onRemove=this.onRemove,this.overlayView=n}componentDidMount(){this.overlayView.setMap(this.context)}componentDidUpdate(t){const n=Of(t.position),r=Of(this.props.position),i=_f(t.bounds),s=_f(this.props.bounds);(n!==r||i!==s)&&this.overlayView.draw(),t.mapPaneName!==this.props.mapPaneName&&this.updatePane()}componentWillUnmount(){this.overlayView.setMap(null)}render(){const t=this.state.paneEl;return t?Kt.createPortal(L("div",Object.assign({ref:this.containerRef,style:this.state.containerStyle},{children:c.Children.only(this.props.children)})),t):null}}Ir.FLOAT_PANE="floatPane";Ir.MAP_PANE="mapPane";Ir.MARKER_LAYER="markerLayer";Ir.OVERLAY_LAYER="overlayLayer";Ir.OVERLAY_MOUSE_TARGET="overlayMouseTarget";Ir.contextType=ue;function tS(){}const Rf={onDblClick:"dblclick",onClick:"click"},$f={opacity(e,t){e.setOpacity(t)}};function nS({url:e,bounds:t,options:n,visible:r}){const i=c.useContext(ue),s=new google.maps.LatLngBounds(new google.maps.LatLng(t.south,t.west),new google.maps.LatLng(t.north,t.east)),o=c.useMemo(()=>new google.maps.GroundOverlay(e,s,Object.assign({},n)),[]);return c.useEffect(()=>{o!==null&&o.setMap(i)},[i]),c.useEffect(()=>{typeof e<"u"&&o!==null&&(o.set("url",e),o.setMap(i))},[o,e]),c.useEffect(()=>{typeof r<"u"&&o!==null&&o.setOpacity(r?1:0)},[o,r]),c.useEffect(()=>{const l=new google.maps.LatLngBounds(new google.maps.LatLng(t.south,t.west),new google.maps.LatLng(t.north,t.east));typeof t<"u"&&o!==null&&(o.set("bounds",l),o.setMap(i))},[o,t]),null}c.memo(nS);class rg extends c.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={groundOverlay:null},this.setGroundOverlayCallback=()=>{this.state.groundOverlay!==null&&this.props.onLoad&&this.props.onLoad(this.state.groundOverlay)}}componentDidMount(){Ne(!!this.props.url||!!this.props.bounds,"For GroundOverlay, url and bounds are passed in to constructor and are immutable after instantiated. This is the behavior of Google Maps JavaScript API v3 ( See https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay) Hence, use the corresponding two props provided by `react-google-maps-api`, url and bounds. In some cases, you'll need the GroundOverlay component to reflect the changes of url and bounds. You can leverage the React's key property to remount the component. Typically, just `key={url}` would serve your need. See https://github.com/tomchentw/react-google-maps/issues/655");const t=new google.maps.GroundOverlay(this.props.url,this.props.bounds,Object.assign(Object.assign({},this.props.options),{map:this.context}));this.registeredEvents=de({updaterMap:$f,eventMap:Rf,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{groundOverlay:t}},this.setGroundOverlayCallback)}componentDidUpdate(t){this.state.groundOverlay!==null&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:$f,eventMap:Rf,prevProps:t,nextProps:this.props,instance:this.state.groundOverlay}))}componentWillUnmount(){this.state.groundOverlay&&(this.props.onUnmount&&this.props.onUnmount(this.state.groundOverlay),this.state.groundOverlay.setMap(null))}render(){return null}}rg.defaultProps={onLoad:tS};rg.contextType=ue;const Nf={},Af={data(e,t){e.setData(t)},map(e,t){e.setMap(t)},options(e,t){e.setOptions(t)}};function rS({data:e,onLoad:t,onUnmount:n,options:r}){const i=c.useContext(ue),[s,o]=c.useState(null);return c.useEffect(()=>{google.maps.visualization||Ne(!!google.maps.visualization,'Did you include prop libraries={["visualization"]} in useJsApiScript? %s',google.maps.visualization)},[]),c.useEffect(()=>{Ne(!!e,"data property is required in HeatmapLayer %s",e)},[e]),c.useEffect(()=>{s!==null&&s.setMap(i)},[i]),c.useEffect(()=>{r&&s!==null&&s.setOptions(r)},[s,r]),c.useEffect(()=>{const l=new google.maps.visualization.HeatmapLayer(Object.assign(Object.assign({},r||{}),{data:e,map:i}));return o(l),t&&t(l),()=>{s!==null&&(n&&n(s),s.setMap(null))}},[]),null}c.memo(rS);class iS extends c.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={heatmapLayer:null},this.setHeatmapLayerCallback=()=>{this.state.heatmapLayer!==null&&this.props.onLoad&&this.props.onLoad(this.state.heatmapLayer)}}componentDidMount(){Ne(!!google.maps.visualization,'Did you include prop libraries={["visualization"]} to <LoadScript />? %s',google.maps.visualization),Ne(!!this.props.data,"data property is required in HeatmapLayer %s",this.props.data);const t=new google.maps.visualization.HeatmapLayer(Object.assign(Object.assign({},this.props.options||{}),{data:this.props.data,map:this.context}));this.registeredEvents=de({updaterMap:Af,eventMap:Nf,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{heatmapLayer:t}},this.setHeatmapLayerCallback)}componentDidUpdate(t){me(this.registeredEvents),this.registeredEvents=de({updaterMap:Af,eventMap:Nf,prevProps:t,nextProps:this.props,instance:this.state.heatmapLayer})}componentWillUnmount(){this.state.heatmapLayer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.heatmapLayer),me(this.registeredEvents),this.state.heatmapLayer.setMap(null))}render(){return null}}iS.contextType=ue;const Bf={onCloseClick:"closeclick",onPanoChanged:"pano_changed",onPositionChanged:"position_changed",onPovChanged:"pov_changed",onResize:"resize",onStatusChanged:"status_changed",onVisibleChanged:"visible_changed",onZoomChanged:"zoom_changed"},Df={register(e,t,n){e.registerPanoProvider(t,n)},links(e,t){e.setLinks(t)},motionTracking(e,t){e.setMotionTracking(t)},options(e,t){e.setOptions(t)},pano(e,t){e.setPano(t)},position(e,t){e.setPosition(t)},pov(e,t){e.setPov(t)},visible(e,t){e.setVisible(t)},zoom(e,t){e.setZoom(t)}};class sS extends c.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={streetViewPanorama:null},this.setStreetViewPanoramaCallback=()=>{this.state.streetViewPanorama!==null&&this.props.onLoad&&this.props.onLoad(this.state.streetViewPanorama)}}componentDidMount(){const t=this.context.getStreetView();this.registeredEvents=de({updaterMap:Df,eventMap:Bf,prevProps:{},nextProps:this.props,instance:t}),this.setState(()=>({streetViewPanorama:t}),this.setStreetViewPanoramaCallback)}componentDidUpdate(t){this.state.streetViewPanorama!==null&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:Df,eventMap:Bf,prevProps:t,nextProps:this.props,instance:this.state.streetViewPanorama}))}componentWillUnmount(){this.state.streetViewPanorama!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.streetViewPanorama),me(this.registeredEvents),this.state.streetViewPanorama.setVisible(!1))}render(){return null}}sS.contextType=ue;class oS extends c.PureComponent{constructor(){super(...arguments),this.state={streetViewService:null},this.setStreetViewServiceCallback=()=>{this.state.streetViewService!==null&&this.props.onLoad&&this.props.onLoad(this.state.streetViewService)}}componentDidMount(){const t=new google.maps.StreetViewService;this.setState(function(){return{streetViewService:t}},this.setStreetViewServiceCallback)}componentWillUnmount(){this.state.streetViewService!==null&&this.props.onUnmount&&this.props.onUnmount(this.state.streetViewService)}render(){return null}}oS.contextType=ue;const Ff={onDirectionsChanged:"directions_changed"},jf={directions(e,t){e.setDirections(t)},map(e,t){e.setMap(t)},options(e,t){e.setOptions(t)},panel(e,t){e.setPanel(t)},routeIndex(e,t){e.setRouteIndex(t)}};class lS extends c.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={directionsRenderer:null},this.setDirectionsRendererCallback=()=>{this.state.directionsRenderer!==null&&(this.state.directionsRenderer.setMap(this.context),this.props.onLoad&&this.props.onLoad(this.state.directionsRenderer))}}componentDidMount(){const t=new google.maps.DirectionsRenderer(this.props.options);this.registeredEvents=de({updaterMap:jf,eventMap:Ff,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{directionsRenderer:t}},this.setDirectionsRendererCallback)}componentDidUpdate(t){this.state.directionsRenderer!==null&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:jf,eventMap:Ff,prevProps:t,nextProps:this.props,instance:this.state.directionsRenderer}))}componentWillUnmount(){this.state.directionsRenderer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.directionsRenderer),me(this.registeredEvents),this.state.directionsRenderer&&this.state.directionsRenderer.setMap(null))}render(){return L(ho,{})}}lS.contextType=ue;const Wf={onPlacesChanged:"places_changed"},Uf={bounds(e,t){e.setBounds(t)}};class Ka extends c.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.containerElement=c.createRef(),this.state={searchBox:null},this.setSearchBoxCallback=()=>{this.state.searchBox!==null&&this.props.onLoad&&this.props.onLoad(this.state.searchBox)}}componentDidMount(){if(Ne(!!google.maps.places,'You need to provide libraries={["places"]} prop to <LoadScript /> component %s',google.maps.places),this.containerElement!==null&&this.containerElement.current!==null){const t=this.containerElement.current.querySelector("input");if(t!==null){const n=new google.maps.places.SearchBox(t,this.props.options);this.registeredEvents=de({updaterMap:Uf,eventMap:Wf,prevProps:{},nextProps:this.props,instance:n}),this.setState(function(){return{searchBox:n}},this.setSearchBoxCallback)}}}componentDidUpdate(t){this.state.searchBox!==null&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:Uf,eventMap:Wf,prevProps:t,nextProps:this.props,instance:this.state.searchBox}))}componentWillUnmount(){this.state.searchBox!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.searchBox),me(this.registeredEvents))}render(){return L("div",Object.assign({ref:this.containerElement},{children:c.Children.only(this.props.children)}))}}Ka.contextType=ue;const Hf={onPlaceChanged:"place_changed"},Vf={bounds(e,t){e.setBounds(t)},restrictions(e,t){e.setComponentRestrictions(t)},fields(e,t){e.setFields(t)},options(e,t){e.setOptions(t)},types(e,t){e.setTypes(t)}};class ig extends c.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.containerElement=c.createRef(),this.state={autocomplete:null},this.setAutocompleteCallback=()=>{this.state.autocomplete!==null&&this.props.onLoad&&this.props.onLoad(this.state.autocomplete)}}componentDidMount(){Ne(!!google.maps.places,'You need to provide libraries={["places"]} prop to <LoadScript /> component %s',google.maps.places);const t=this.containerElement.current.querySelector("input");if(t){const n=new google.maps.places.Autocomplete(t,this.props.options);this.registeredEvents=de({updaterMap:Vf,eventMap:Hf,prevProps:{},nextProps:this.props,instance:n}),this.setState(()=>({autocomplete:n}),this.setAutocompleteCallback)}}componentDidUpdate(t){me(this.registeredEvents),this.registeredEvents=de({updaterMap:Vf,eventMap:Hf,prevProps:t,nextProps:this.props,instance:this.state.autocomplete})}componentWillUnmount(){this.state.autocomplete!==null&&me(this.registeredEvents)}render(){return L("div",Object.assign({ref:this.containerElement,className:this.props.className},{children:c.Children.only(this.props.children)}))}}ig.defaultProps={className:""};ig.contextType=ue;const aS=oe.div`
    background: ${({theme:e})=>e.upwardsGradient};
    transition: all 0.5s;
    min-height: 100vh;
    height: 100%;

    header{
        display: flex;

        a{
            width: max-content;
        }
    }

//------------------ Media Queries ------------------

    @media(max-width: 800px){
        header{
            flex-direction: column;
            justify-content: flex-start;
        }
    }

    @media(min-width: 801px){
        #LocationsWrapper{
            display: flex;
            justify-content: space-between;
        }
    }
`,Yf=oe.div`
    padding: 2rem 2rem;
    margin: 5rem 2.5rem 0 2rem;
    border: 1px solid ${({theme:e})=>e.inputText};
    border-radius: 8px;
    position: relative;
    display: flex;
    justify-content: center;

    >label{
        position: absolute;
        color: ${({theme:e})=>e.inputText};
        font-family: "Orbitron";
        font-size: 2rem;
        top: -1.5rem;
        background-color: ${({theme:e})=>e.globalBackground};
        padding: 0 4px;
    }

    >div{
        width: 80%;
        height: 4rem;
    }

    input{
        width: 100%;
        text-align: center;
        height: 4rem;
        background-color: ${({theme:e})=>e.bigInputBackground};
        border: none;
        border-radius: 5px;
        color: ${({theme:e})=>e.inputText};
        font-family: "Orbitron";
        font-size: 2.2rem;
        padding: 0 5px;
    }

    input:focus{
        outline: 1px solid ${({theme:e})=>e.inputText};
    }

//------------------ Media Queries ------------------

    @media(min-width: 801px){
        padding: 3rem 2.5rem;
        margin: 5rem 2.5rem 0 2.5rem;

        >div{
            width: 80%;
            height: 5rem;
        }

        >label{
            font-size: 2.5rem;;
            top: -1.9rem;
        }

        input{
            height: 5rem;
            font-size: 2.2rem;
            padding: 0 5px;
        }
    }

    @media(min-width: 1031px){
        margin: 7rem 4rem 0 4rem;

        >div{
            width: 80%;
            height: 6rem;
        }

        >label{
            font-size: 3rem;;
            top: -2.1rem;
        }

        input{
            height: 6rem;
            font-size: 3rem;
        }
    }

    @media(min-width: 1501px){
        margin: 10rem 5rem 0 5rem;
        padding: 3.5rem 2.5rem;

        >div{
            width: 80%;
            height: 8rem;
        }

        >label{
            font-size: 3.5rem;;
            top: -2.5rem;
        }

        input{
            height: 8rem;
            font-size: 3.5rem;
        }
    }
`,uS=oe.div`
    margin: 6rem 2rem 0 2rem;
    padding: 3rem 0 5rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    position: relative;
    border-top: 1px solid ${({theme:e})=>e.inputText};

    #Label{
        position: absolute;
        color: ${({theme:e})=>e.inputText};
        font-family: "Orbitron";
        font-size: 2rem;
        top: -1.5rem;
        background-color: ${({theme:e})=>e.globalBackground};
        padding: 0 4px;
    }
    
    span{
        font-family: "Orbitron";
        font-size: 1.6rem;
    }
    
    div{
        display: flex;
        flex-direction: column;
        span{
            text-align: center;
        }
    }
    
    #Difference{
        span{
            color: ${({theme:e})=>e.inputText};
        }
    }

//------------------ Media Queries ------------------

    @media(min-width: 801px){
        margin: 8rem 2rem 0 2rem;
        padding: 4rem 0 5rem 0;
        gap: 3rem;
        
        #Label{
            font-size: 2.5rem;
            top: -1.9rem;
        }
        
        span{
            font-size: 2rem;
        }
    }

    @media(min-width: 1031px){
        margin: 8rem 4rem 0 4rem;
        padding: 6rem 0 5rem 0;
        gap: 3rem;
        
        #Label{
            font-size: 3rem;
            top: -2.1rem;
        }
        
        span{
            font-size: 2.5rem;
        }
    }

    @media(min-width: 1501px){
        margin: 10rem 5rem 0 5rem;
        padding: 7rem 0 5rem 0;
        gap: 4rem;
        
        #Label{
            font-size: 3.5rem;
            top: -2.1rem;
        }
        
        span{
            font-size: 2.8rem;
        }
    }
`;function sg(e,t){return function(){return e.apply(t,arguments)}}const{toString:cS}=Object.prototype,{getPrototypeOf:ac}=Object,qo=(e=>t=>{const n=cS.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Wt=e=>(e=e.toLowerCase(),t=>qo(t)===e),el=e=>t=>typeof t===e,{isArray:Or}=Array,Mi=el("undefined");function dS(e){return e!==null&&!Mi(e)&&e.constructor!==null&&!Mi(e.constructor)&&xt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const og=Wt("ArrayBuffer");function fS(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&og(e.buffer),t}const pS=el("string"),xt=el("function"),lg=el("number"),tl=e=>e!==null&&typeof e=="object",mS=e=>e===!0||e===!1,Ts=e=>{if(qo(e)!=="object")return!1;const t=ac(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},hS=Wt("Date"),gS=Wt("File"),vS=Wt("Blob"),yS=Wt("FileList"),xS=e=>tl(e)&&xt(e.pipe),wS=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||xt(e.append)&&((t=qo(e))==="formdata"||t==="object"&&xt(e.toString)&&e.toString()==="[object FormData]"))},SS=Wt("URLSearchParams"),LS=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function $i(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Or(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),o=s.length;let l;for(r=0;r<o;r++)l=s[r],t.call(null,e[l],l,e)}}function ag(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const ug=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),cg=e=>!Mi(e)&&e!==ug;function Ja(){const{caseless:e}=cg(this)&&this||{},t={},n=(r,i)=>{const s=e&&ag(t,i)||i;Ts(t[s])&&Ts(r)?t[s]=Ja(t[s],r):Ts(r)?t[s]=Ja({},r):Or(r)?t[s]=r.slice():t[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&$i(arguments[r],n);return t}const kS=(e,t,n,{allOwnKeys:r}={})=>($i(t,(i,s)=>{n&&xt(i)?e[s]=sg(i,n):e[s]=i},{allOwnKeys:r}),e),ES=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),CS=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},bS=(e,t,n,r)=>{let i,s,o;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],(!r||r(o,e,t))&&!l[o]&&(t[o]=e[o],l[o]=!0);e=n!==!1&&ac(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},MS=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},PS=e=>{if(!e)return null;if(Or(e))return e;let t=e.length;if(!lg(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},zS=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ac(Uint8Array)),TS=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const s=i.value;t.call(e,s[0],s[1])}},IS=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},OS=Wt("HTMLFormElement"),_S=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Gf=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),RS=Wt("RegExp"),dg=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};$i(n,(i,s)=>{t(i,s,e)!==!1&&(r[s]=i)}),Object.defineProperties(e,r)},$S=e=>{dg(e,(t,n)=>{if(xt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(xt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},NS=(e,t)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return Or(e)?r(e):r(String(e).split(t)),n},AS=()=>{},BS=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Al="abcdefghijklmnopqrstuvwxyz",Qf="0123456789",fg={DIGIT:Qf,ALPHA:Al,ALPHA_DIGIT:Al+Al.toUpperCase()+Qf},DS=(e=16,t=fg.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function FS(e){return!!(e&&xt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const jS=e=>{const t=new Array(10),n=(r,i)=>{if(tl(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const s=Or(r)?[]:{};return $i(r,(o,l)=>{const a=n(o,i+1);!Mi(a)&&(s[l]=a)}),t[i]=void 0,s}}return r};return n(e,0)},WS=Wt("AsyncFunction"),US=e=>e&&(tl(e)||xt(e))&&xt(e.then)&&xt(e.catch),N={isArray:Or,isArrayBuffer:og,isBuffer:dS,isFormData:wS,isArrayBufferView:fS,isString:pS,isNumber:lg,isBoolean:mS,isObject:tl,isPlainObject:Ts,isUndefined:Mi,isDate:hS,isFile:gS,isBlob:vS,isRegExp:RS,isFunction:xt,isStream:xS,isURLSearchParams:SS,isTypedArray:zS,isFileList:yS,forEach:$i,merge:Ja,extend:kS,trim:LS,stripBOM:ES,inherits:CS,toFlatObject:bS,kindOf:qo,kindOfTest:Wt,endsWith:MS,toArray:PS,forEachEntry:TS,matchAll:IS,isHTMLForm:OS,hasOwnProperty:Gf,hasOwnProp:Gf,reduceDescriptors:dg,freezeMethods:$S,toObjectSet:NS,toCamelCase:_S,noop:AS,toFiniteNumber:BS,findKey:ag,global:ug,isContextDefined:cg,ALPHABET:fg,generateString:DS,isSpecCompliantForm:FS,toJSONObject:jS,isAsyncFn:WS,isThenable:US};function he(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}N.inherits(he,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:N.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const pg=he.prototype,mg={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{mg[e]={value:e}});Object.defineProperties(he,mg);Object.defineProperty(pg,"isAxiosError",{value:!0});he.from=(e,t,n,r,i,s)=>{const o=Object.create(pg);return N.toFlatObject(e,o,function(a){return a!==Error.prototype},l=>l!=="isAxiosError"),he.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};const HS=null;function Xa(e){return N.isPlainObject(e)||N.isArray(e)}function hg(e){return N.endsWith(e,"[]")?e.slice(0,-2):e}function Zf(e,t,n){return e?e.concat(t).map(function(i,s){return i=hg(i),!n&&s?"["+i+"]":i}).join(n?".":""):t}function VS(e){return N.isArray(e)&&!e.some(Xa)}const YS=N.toFlatObject(N,{},null,function(t){return/^is[A-Z]/.test(t)});function nl(e,t,n){if(!N.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=N.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(S,k){return!N.isUndefined(k[S])});const r=n.metaTokens,i=n.visitor||f,s=n.dots,o=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&N.isSpecCompliantForm(t);if(!N.isFunction(i))throw new TypeError("visitor must be a function");function u(p){if(p===null)return"";if(N.isDate(p))return p.toISOString();if(!a&&N.isBlob(p))throw new he("Blob is not supported. Use a Buffer instead.");return N.isArrayBuffer(p)||N.isTypedArray(p)?a&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function f(p,S,k){let m=p;if(p&&!k&&typeof p=="object"){if(N.endsWith(S,"{}"))S=r?S:S.slice(0,-2),p=JSON.stringify(p);else if(N.isArray(p)&&VS(p)||(N.isFileList(p)||N.endsWith(S,"[]"))&&(m=N.toArray(p)))return S=hg(S),m.forEach(function(y,h){!(N.isUndefined(y)||y===null)&&t.append(o===!0?Zf([S],h,s):o===null?S:S+"[]",u(y))}),!1}return Xa(p)?!0:(t.append(Zf(k,S,s),u(p)),!1)}const d=[],v=Object.assign(YS,{defaultVisitor:f,convertValue:u,isVisitable:Xa});function x(p,S){if(!N.isUndefined(p)){if(d.indexOf(p)!==-1)throw Error("Circular reference detected in "+S.join("."));d.push(p),N.forEach(p,function(m,g){(!(N.isUndefined(m)||m===null)&&i.call(t,m,N.isString(g)?g.trim():g,S,v))===!0&&x(m,S?S.concat(g):[g])}),d.pop()}}if(!N.isObject(e))throw new TypeError("data must be an object");return x(e),t}function Kf(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function uc(e,t){this._pairs=[],e&&nl(e,this,t)}const gg=uc.prototype;gg.append=function(t,n){this._pairs.push([t,n])};gg.toString=function(t){const n=t?function(r){return t.call(this,r,Kf)}:Kf;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function GS(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function vg(e,t,n){if(!t)return e;const r=n&&n.encode||GS,i=n&&n.serialize;let s;if(i?s=i(t,n):s=N.isURLSearchParams(t)?t.toString():new uc(t,n).toString(r),s){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class QS{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){N.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Jf=QS,yg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ZS=typeof URLSearchParams<"u"?URLSearchParams:uc,KS=typeof FormData<"u"?FormData:null,JS=typeof Blob<"u"?Blob:null,XS=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),qS=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Dt={isBrowser:!0,classes:{URLSearchParams:ZS,FormData:KS,Blob:JS},isStandardBrowserEnv:XS,isStandardBrowserWebWorkerEnv:qS,protocols:["http","https","file","blob","url","data"]};function eL(e,t){return nl(e,new Dt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return Dt.isNode&&N.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function tL(e){return N.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function nL(e){const t={},n=Object.keys(e);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],t[s]=e[s];return t}function xg(e){function t(n,r,i,s){let o=n[s++];const l=Number.isFinite(+o),a=s>=n.length;return o=!o&&N.isArray(i)?i.length:o,a?(N.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!l):((!i[o]||!N.isObject(i[o]))&&(i[o]=[]),t(n,r,i[o],s)&&N.isArray(i[o])&&(i[o]=nL(i[o])),!l)}if(N.isFormData(e)&&N.isFunction(e.entries)){const n={};return N.forEachEntry(e,(r,i)=>{t(tL(r),i,n,0)}),n}return null}const rL={"Content-Type":void 0};function iL(e,t,n){if(N.isString(e))try{return(t||JSON.parse)(e),N.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const rl={transitional:yg,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=N.isObject(t);if(s&&N.isHTMLForm(t)&&(t=new FormData(t)),N.isFormData(t))return i&&i?JSON.stringify(xg(t)):t;if(N.isArrayBuffer(t)||N.isBuffer(t)||N.isStream(t)||N.isFile(t)||N.isBlob(t))return t;if(N.isArrayBufferView(t))return t.buffer;if(N.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return eL(t,this.formSerializer).toString();if((l=N.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return nl(l?{"files[]":t}:t,a&&new a,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),iL(t)):t}],transformResponse:[function(t){const n=this.transitional||rl.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&N.isString(t)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(o)throw l.name==="SyntaxError"?he.from(l,he.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Dt.classes.FormData,Blob:Dt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};N.forEach(["delete","get","head"],function(t){rl.headers[t]={}});N.forEach(["post","put","patch"],function(t){rl.headers[t]=N.merge(rL)});const cc=rl,sL=N.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),oL=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||t[n]&&sL[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Xf=Symbol("internals");function Hr(e){return e&&String(e).trim().toLowerCase()}function Is(e){return e===!1||e==null?e:N.isArray(e)?e.map(Is):String(e)}function lL(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const aL=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Bl(e,t,n,r,i){if(N.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!N.isString(t)){if(N.isString(r))return t.indexOf(r)!==-1;if(N.isRegExp(r))return r.test(t)}}function uL(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function cL(e,t){const n=N.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,s,o){return this[r].call(this,t,i,s,o)},configurable:!0})})}class il{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function s(l,a,u){const f=Hr(a);if(!f)throw new Error("header name must be a non-empty string");const d=N.findKey(i,f);(!d||i[d]===void 0||u===!0||u===void 0&&i[d]!==!1)&&(i[d||a]=Is(l))}const o=(l,a)=>N.forEach(l,(u,f)=>s(u,f,a));return N.isPlainObject(t)||t instanceof this.constructor?o(t,n):N.isString(t)&&(t=t.trim())&&!aL(t)?o(oL(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=Hr(t),t){const r=N.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return lL(i);if(N.isFunction(n))return n.call(this,i,r);if(N.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Hr(t),t){const r=N.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Bl(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function s(o){if(o=Hr(o),o){const l=N.findKey(r,o);l&&(!n||Bl(r,r[l],l,n))&&(delete r[l],i=!0)}}return N.isArray(t)?t.forEach(s):s(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!t||Bl(this,this[s],s,t,!0))&&(delete this[s],i=!0)}return i}normalize(t){const n=this,r={};return N.forEach(this,(i,s)=>{const o=N.findKey(r,s);if(o){n[o]=Is(i),delete n[s];return}const l=t?uL(s):String(s).trim();l!==s&&delete n[s],n[l]=Is(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return N.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&N.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Xf]=this[Xf]={accessors:{}}).accessors,i=this.prototype;function s(o){const l=Hr(o);r[l]||(cL(i,o),r[l]=!0)}return N.isArray(t)?t.forEach(s):s(t),this}}il.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);N.freezeMethods(il.prototype);N.freezeMethods(il);const Zt=il;function Dl(e,t){const n=this||cc,r=t||n,i=Zt.from(r.headers);let s=r.data;return N.forEach(e,function(l){s=l.call(n,s,i.normalize(),t?t.status:void 0)}),i.normalize(),s}function wg(e){return!!(e&&e.__CANCEL__)}function Ni(e,t,n){he.call(this,e??"canceled",he.ERR_CANCELED,t,n),this.name="CanceledError"}N.inherits(Ni,he,{__CANCEL__:!0});function dL(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new he("Request failed with status code "+n.status,[he.ERR_BAD_REQUEST,he.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const fL=Dt.isStandardBrowserEnv?function(){return{write:function(n,r,i,s,o,l){const a=[];a.push(n+"="+encodeURIComponent(r)),N.isNumber(i)&&a.push("expires="+new Date(i).toGMTString()),N.isString(s)&&a.push("path="+s),N.isString(o)&&a.push("domain="+o),l===!0&&a.push("secure"),document.cookie=a.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function pL(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function mL(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Sg(e,t){return e&&!pL(t)?mL(e,t):t}const hL=Dt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const l=N.isString(o)?i(o):o;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function gL(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function vL(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,s=0,o;return t=t!==void 0?t:1e3,function(a){const u=Date.now(),f=r[s];o||(o=u),n[i]=a,r[i]=u;let d=s,v=0;for(;d!==i;)v+=n[d++],d=d%e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),u-o<t)return;const x=f&&u-f;return x?Math.round(v*1e3/x):void 0}}function qf(e,t){let n=0;const r=vL(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,l=s-n,a=r(l),u=s<=o;n=s;const f={loaded:s,total:o,progress:o?s/o:void 0,bytes:l,rate:a||void 0,estimated:a&&o&&u?(o-s)/a:void 0,event:i};f[t?"download":"upload"]=!0,e(f)}}const yL=typeof XMLHttpRequest<"u",xL=yL&&function(e){return new Promise(function(n,r){let i=e.data;const s=Zt.from(e.headers).normalize(),o=e.responseType;let l;function a(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}N.isFormData(i)&&(Dt.isStandardBrowserEnv||Dt.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(e.auth){const x=e.auth.username||"",p=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(x+":"+p))}const f=Sg(e.baseURL,e.url);u.open(e.method.toUpperCase(),vg(f,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function d(){if(!u)return;const x=Zt.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),S={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:x,config:e,request:u};dL(function(m){n(m),a()},function(m){r(m),a()},S),u=null}if("onloadend"in u?u.onloadend=d:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(d)},u.onabort=function(){u&&(r(new he("Request aborted",he.ECONNABORTED,e,u)),u=null)},u.onerror=function(){r(new he("Network Error",he.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let p=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const S=e.transitional||yg;e.timeoutErrorMessage&&(p=e.timeoutErrorMessage),r(new he(p,S.clarifyTimeoutError?he.ETIMEDOUT:he.ECONNABORTED,e,u)),u=null},Dt.isStandardBrowserEnv){const x=(e.withCredentials||hL(f))&&e.xsrfCookieName&&fL.read(e.xsrfCookieName);x&&s.set(e.xsrfHeaderName,x)}i===void 0&&s.setContentType(null),"setRequestHeader"in u&&N.forEach(s.toJSON(),function(p,S){u.setRequestHeader(S,p)}),N.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),o&&o!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",qf(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",qf(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=x=>{u&&(r(!x||x.type?new Ni(null,e,u):x),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const v=gL(f);if(v&&Dt.protocols.indexOf(v)===-1){r(new he("Unsupported protocol "+v+":",he.ERR_BAD_REQUEST,e));return}u.send(i||null)})},Os={http:HS,xhr:xL};N.forEach(Os,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const wL={getAdapter:e=>{e=N.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=N.isString(n)?Os[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new he(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(N.hasOwnProp(Os,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!N.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Os};function Fl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ni(null,e)}function ep(e){return Fl(e),e.headers=Zt.from(e.headers),e.data=Dl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),wL.getAdapter(e.adapter||cc.adapter)(e).then(function(r){return Fl(e),r.data=Dl.call(e,e.transformResponse,r),r.headers=Zt.from(r.headers),r},function(r){return wg(r)||(Fl(e),r&&r.response&&(r.response.data=Dl.call(e,e.transformResponse,r.response),r.response.headers=Zt.from(r.response.headers))),Promise.reject(r)})}const tp=e=>e instanceof Zt?e.toJSON():e;function Er(e,t){t=t||{};const n={};function r(u,f,d){return N.isPlainObject(u)&&N.isPlainObject(f)?N.merge.call({caseless:d},u,f):N.isPlainObject(f)?N.merge({},f):N.isArray(f)?f.slice():f}function i(u,f,d){if(N.isUndefined(f)){if(!N.isUndefined(u))return r(void 0,u,d)}else return r(u,f,d)}function s(u,f){if(!N.isUndefined(f))return r(void 0,f)}function o(u,f){if(N.isUndefined(f)){if(!N.isUndefined(u))return r(void 0,u)}else return r(void 0,f)}function l(u,f,d){if(d in t)return r(u,f);if(d in e)return r(void 0,u)}const a={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(u,f)=>i(tp(u),tp(f),!0)};return N.forEach(Object.keys(Object.assign({},e,t)),function(f){const d=a[f]||i,v=d(e[f],t[f],f);N.isUndefined(v)&&d!==l||(n[f]=v)}),n}const Lg="1.4.0",dc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{dc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const np={};dc.transitional=function(t,n,r){function i(s,o){return"[Axios v"+Lg+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,l)=>{if(t===!1)throw new he(i(o," has been removed"+(n?" in "+n:"")),he.ERR_DEPRECATED);return n&&!np[o]&&(np[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,o,l):!0}};function SL(e,t,n){if(typeof e!="object")throw new he("options must be an object",he.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const s=r[i],o=t[s];if(o){const l=e[s],a=l===void 0||o(l,s,e);if(a!==!0)throw new he("option "+s+" must be "+a,he.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new he("Unknown option "+s,he.ERR_BAD_OPTION)}}const qa={assertOptions:SL,validators:dc},sn=qa.validators;class po{constructor(t){this.defaults=t,this.interceptors={request:new Jf,response:new Jf}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Er(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&qa.assertOptions(r,{silentJSONParsing:sn.transitional(sn.boolean),forcedJSONParsing:sn.transitional(sn.boolean),clarifyTimeoutError:sn.transitional(sn.boolean)},!1),i!=null&&(N.isFunction(i)?n.paramsSerializer={serialize:i}:qa.assertOptions(i,{encode:sn.function,serialize:sn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=s&&N.merge(s.common,s[n.method]),o&&N.forEach(["delete","get","head","post","put","patch","common"],p=>{delete s[p]}),n.headers=Zt.concat(o,s);const l=[];let a=!0;this.interceptors.request.forEach(function(S){typeof S.runWhen=="function"&&S.runWhen(n)===!1||(a=a&&S.synchronous,l.unshift(S.fulfilled,S.rejected))});const u=[];this.interceptors.response.forEach(function(S){u.push(S.fulfilled,S.rejected)});let f,d=0,v;if(!a){const p=[ep.bind(this),void 0];for(p.unshift.apply(p,l),p.push.apply(p,u),v=p.length,f=Promise.resolve(n);d<v;)f=f.then(p[d++],p[d++]);return f}v=l.length;let x=n;for(d=0;d<v;){const p=l[d++],S=l[d++];try{x=p(x)}catch(k){S.call(this,k);break}}try{f=ep.call(this,x)}catch(p){return Promise.reject(p)}for(d=0,v=u.length;d<v;)f=f.then(u[d++],u[d++]);return f}getUri(t){t=Er(this.defaults,t);const n=Sg(t.baseURL,t.url);return vg(n,t.params,t.paramsSerializer)}}N.forEach(["delete","get","head","options"],function(t){po.prototype[t]=function(n,r){return this.request(Er(r||{},{method:t,url:n,data:(r||{}).data}))}});N.forEach(["post","put","patch"],function(t){function n(r){return function(s,o,l){return this.request(Er(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}po.prototype[t]=n(),po.prototype[t+"Form"]=n(!0)});const _s=po;class fc{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(l=>{r.subscribe(l),s=l}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},t(function(s,o,l){r.reason||(r.reason=new Ni(s,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new fc(function(i){t=i}),cancel:t}}}const LL=fc;function kL(e){return function(n){return e.apply(null,n)}}function EL(e){return N.isObject(e)&&e.isAxiosError===!0}const eu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(eu).forEach(([e,t])=>{eu[t]=e});const CL=eu;function kg(e){const t=new _s(e),n=sg(_s.prototype.request,t);return N.extend(n,_s.prototype,t,{allOwnKeys:!0}),N.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return kg(Er(e,i))},n}const Ae=kg(cc);Ae.Axios=_s;Ae.CanceledError=Ni;Ae.CancelToken=LL;Ae.isCancel=wg;Ae.VERSION=Lg;Ae.toFormData=nl;Ae.AxiosError=he;Ae.Cancel=Ae.CanceledError;Ae.all=function(t){return Promise.all(t)};Ae.spread=kL;Ae.isAxiosError=EL;Ae.mergeConfig=Er;Ae.AxiosHeaders=Zt;Ae.formToJSON=e=>xg(N.isHTMLForm(e)?new FormData(e):e);Ae.HttpStatusCode=CL;Ae.default=Ae;const rp=Ae,bL=["places"];function ML(){const e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],t="AIzaSyCMxXMWybG7ywOpr1efLceIwNEkUbLsOVY",n=c.useRef(),r=c.useRef(),i=c.useRef(""),s=c.useRef(""),o=c.useRef(""),l=c.useRef(""),a=c.useRef(),u=c.useRef(),f=c.useRef(),d=c.useRef(),[v,x]=c.useState(""),[p,S]=c.useState(""),[k,m]=c.useState("Location 1 date and time"),[g,y]=c.useState("Location 1 time zone"),[h,b]=c.useState("Location 2 date and time"),[M,I]=c.useState("Location 2 time zone"),[_,w]=c.useState("Difference"),{isLoaded:C}=Kh({googleMapsApiKey:t,libraries:bL,language:"en"});async function P(V){let U;V==1?[U]=n.current.getPlaces():V==2&&([U]=r.current.getPlaces());const H=new Date,G=H.getTime()/1e3+H.getTimezoneOffset()*60;if(U){if(V==1){i.current=U.geometry.location.lat(),s.current=U.geometry.location.lng(),x(U.formatted_address);const ee=`${i.current}, ${s.current}`,O=await rp.get("https://maps.googleapis.com/maps/api/timezone/json?location="+ee+"&timestamp="+G+"&key="+t);D(V,O.data)}else if(V==2){o.current=U.geometry.location.lat(),l.current=U.geometry.location.lng(),S(U.formatted_address);const ee=`${o.current}, ${l.current}`,O=await rp.get("https://maps.googleapis.com/maps/api/timezone/json?location="+ee+"&timestamp="+G+"&key="+t);D(V,O.data)}}}function D(V,U){const H=U.dstOffset*1e3+U.rawOffset*1e3,G=new Date,ee=G.getTime()+G.getTimezoneOffset()*6e4,O=new Date(ee+H);if(V==1?(clearInterval(f.current),m(`${O.getMonth()+1}/${O.getDate()}/${O.getFullYear()} ${O.toLocaleTimeString()} ${e[O.getDay()]}`),f.current=setInterval(()=>{O.setSeconds(O.getSeconds()+1),m(`${O.getMonth()+1}/${O.getDate()}/${O.getFullYear()} ${O.toLocaleTimeString()} ${e[O.getDay()]}`)},1e3),y(U.timeZoneName),a.current=H):V==2&&(clearInterval(d.current),b(`${O.getMonth()+1}/${O.getDate()}/${O.getFullYear()} ${O.toLocaleTimeString()} ${e[O.getDay()]}`),d.current=setInterval(()=>{O.setSeconds(O.getSeconds()+1),b(`${O.getMonth()+1}/${O.getDate()}/${O.getFullYear()} ${O.toLocaleTimeString()} ${e[O.getDay()]}`)},1e3),I(U.timeZoneName),u.current=H),a.current!=null&u.current!=null){const j=(u.current-a.current)/36e5;j>=2?w(`${j} hours`):w(`${j} hour`)}}return R(aS,{children:[L(Tr,{}),C&&R("div",{id:"LocationsWrapper",children:[R(Yf,{id:"Location_1",children:[L("label",{htmlFor:"Location_1",children:"Location 1"}),L(Ka,{onLoad:V=>n.current=V,onPlacesChanged:()=>P(1),children:L("input",{type:"text",placeholder:"Type a place"})})]}),R(Yf,{id:"Location_2",children:[L("label",{htmlFor:"Location_2",children:"Location 2"}),L(Ka,{onLoad:V=>r.current=V,onPlacesChanged:()=>P(2),children:L("input",{type:"text",placeholder:"Type a place"})})]})]}),R(uS,{children:[L("span",{id:"Label",children:"Difference"}),R("div",{id:"Result_1",children:[L("span",{children:v!=""?v:"Location 1"}),L("span",{children:k}),L("span",{children:g})]}),L("div",{id:"Difference",children:L("span",{children:_})}),R("div",{id:"Result_2",children:[L("span",{children:p!=""?p:"Location 2"}),L("span",{children:h}),L("span",{children:M})]})]})]})}const PL=oe.div`
    width: fit-content;
    padding: 1rem;
    border-radius: 8px;
    background-color: ${({theme:e})=>e.bigInputBackground};

//------------------ Media Queries ------------------

    @media(min-width: 501px){
        padding: 1.5rem;
    }

    @media(min-width: 801px){
        border-radius: 1rem;
        padding: 2rem;
    }

    @media(min-width: 1801px){
        border-radius: 1rem;
        padding: 2.2rem;
    }
`,zL=oe.div`
    
    display: flex;
    justify-content: center;
    gap: 1rem;

    padding-bottom: 4px;
    margin-bottom: 4px;

    border-bottom: 1px solid ${({theme:e})=>e.inputText};

    button{
        background:none;
        border: none;

        svg{
            margin-top: 1.5px;
            color: ${({theme:e})=>e.inputText};
            font-size: 2rem;
        }
    }

    span{
        font-family: "Orbitron";
        font-size: 1.8rem;
    }
    
//------------------ Media Queries ------------------

    @media(min-width: 501px){
        gap: 2rem;

        padding-bottom: 8px;
        margin-bottom: 8px;

        button{
            svg{
                font-size: 2.8rem;
            }
        }

        span{
            font-size: 2.5rem;
        }
    }

    @media(min-width: 801px){

        padding-bottom: 12px;
        margin-bottom: 12px;

        button{
            svg{
                font-size: 3.5rem;
            }
        }

        span{
            font-size: 3.2rem;
        }
    }

    @media(min-width: 1801px){
        gap: 2.4rem;

        padding-bottom: 14px;
        margin-bottom: 14px;

        button{
            svg{
                font-size: 4rem;
            }
        }

        span{
            font-size: 3.8rem;
        }
    }
`,TL=oe.div`

    display: flex;
    justify-content: center;
    gap: 1rem;

    text-align: center;
    padding-bottom: 4px;
    margin-bottom: 4px;
    border-bottom: 1px solid ${({theme:e})=>e.inputText};
    
    button{
        background:none;
        border: none;

        svg{
            margin-top: 3.125px;
            color: ${({theme:e})=>e.inputText};
            font-size: 1.8rem;
        }
    }

    span{
        font-family: "Orbitron";
        font-size: 1.6rem;
        width: 9.8rem;
    }

//------------------ Media Queries ------------------

    @media(min-width: 501px){
        gap: 1rem;

        padding-bottom: 6px;
        margin-bottom: 6px;
        
        button{
            svg{
                font-size: 2.8rem;
            }
        }

        span{
            font-size: 2.2rem;
            width: 13.5rem
        }
    }

    @media(min-width: 801px){
        gap: 1rem;

        padding-bottom: 10px;
        margin-bottom: 10px;
        
        button{
            svg{
                font-size: 3.5rem;
            }
        }

        span{
            font-size: 2.8rem;
            width: 17.2rem;
        }
    }

    @media(min-width: 1801px){
        gap: 1.6rem;

        padding-bottom: 12px;
        margin-bottom: 12px;
        
        button{
            svg{
                font-size: 4rem;
            }
        }

        span{
            font-size: 3.4rem;
            width: 20.9rem;
        }
    }
`,IL=oe.div`
    display: grid;
    grid-template-columns: repeat(7, 3.2rem);
    gap: 7px;
    padding-bottom: 5px;
    margin-bottom: 1rem;
    border-bottom: 1px dashed ${({theme:e})=>e.inputText};

    span{
        text-align: center;
        font-family: "Monda";
        font-size: 1.4rem;
    }

//------------------ Media Queries ------------------

    @media(min-width: 501px){
        gap: 1.2rem;
        grid-template-columns: repeat(7, 4.3rem);
        padding-bottom: 9px;
        margin-bottom: 1.2rem;

        span{
            font-size: 2rem;
        }
    }

    @media(min-width: 801px){
        gap: 1.6rem;
        grid-template-columns: repeat(7, 5.4rem);
        padding-bottom: 1rem;
        margin-bottom: 2.4rem;

        span{
            font-size: 2.5rem;
        }
    }

    @media(min-width: 1801px){
        gap: 1.8rem;
        grid-template-columns: repeat(7, 6rem);
        padding-bottom: 1rem;
        margin-bottom: 2.4rem;

        span{
            font-size: 2.8rem;
        }
    }
`,OL=oe.div`
    display: grid;
    grid-template-columns: repeat(7, 3.2rem);
    gap: 7px;

    button{
        text-align: center;
        font-family: "Orbitron";
        color: ${({theme:e})=>e.titles};
        background: none;
        border: none;
        padding: 3px;
        font-size: 1.4rem;

        outline: ${({theme:e,selected:t})=>t?`1px solid ${e.inputText}`:""};
    }

    .hasEvents{
        color: ${({theme:e})=>e.inputText};
    }
    
    .selected{
        outline: 1px solid ${({theme:e})=>e.inputText};
    }

    button:disabled{
        cursor: default;
    }


//------------------ Media Queries ------------------

    @media(min-width: 501px){
        gap: 1.2rem;
        grid-template-columns: repeat(7, 4.3rem);

        button{
            padding: 3px;
            font-size: 2rem;
        }
    }

    @media(min-width: 801px){
        gap: 1.6rem;
        grid-template-columns: repeat(7, 5.4rem);

        button{
            padding: 3px;
            font-size: 2.5rem;
        }
    }

    @media(min-width: 1801px){
        gap: 1.8rem;
        grid-template-columns: repeat(7, 6rem);

        button{
            font-size: 2.8rem;
        }
    }
`;function ip(e){return kt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}}]})(e)}function sp(e){return kt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}}]})(e)}function _L(e){return kt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M17.59 18L19 16.59 14.42 12 19 7.41 17.59 6l-6 6z"}},{tag:"path",attr:{d:"M11 18l1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z"}}]})(e)}function RL(e){return kt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M6.41 6L5 7.41 9.58 12 5 16.59 6.41 18l6-6z"}},{tag:"path",attr:{d:"M13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"}}]})(e)}function $L(e){return kt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M9.37 5.51A7.35 7.35 0 009.1 7.5c0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0112 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"}}]})(e)}function NL(e){return kt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"}}]})(e)}function AL(){const e=new Date,t={year:e.getFullYear(),month:e.getMonth()},n=["January","February","March","April","May","June","July","August","September","October","November","December"];let r=[],i=0,s=!1;const{recurringEvents:o,setSelectedDay:l}=Ot(),a=c.useRef(null),[u,f]=c.useState(t.year),[d,v]=c.useState(t.month),[x,p]=c.useState([]);function S(w){const C=w%7;let P=Math.floor(w/4);w%4==0&&P--;const D=P%7;let V=C+D-1;return V>6&&(V-=7),V}function k(){let w=0;return d==0||d==2||d==4||d==6||d==7||d==9||d==11?w=31:d==1?u%4==0?w=29:w=28:w=30,w}function m(w,C){C=="Year"?u+w>=1&u+w<=9999&&(f(P=>P+w),y()):C=="Month"&&(d==0&w==-1&u>1?(v(11),f(P=>P-1)):d==11&w==1&u<9999?(v(0),f(P=>P+1)):!(d==0&w==-1&u==1)&!(d==11&w==1&u==9999)&&v(P=>P+w))}function g(w,C){if(w=="month"){let P=(u-1)*31536e3;switch(d){case 0:break;case 1:P+=31*86400;break;case 2:u%4==0?P+=60*86400:P+=59*86400;break;case 3:u%4==0?P+=91*86400:P+=90*86400;break;case 4:u%4==0?P+=121*86400:P+=120*86400;break;case 5:u%4==0?P+=152*86400:P+=151*86400;break;case 6:u%4==0?P+=182*86400:P+=181*86400;break;case 7:u%4==0?P+=213*86400:P+=212*86400;break;case 8:u%4==0?P+=244*86400:P+=243*86400;break;case 9:u%4==0?P+=274*86400:P+=273*86400;break;case 10:u%4==0?P+=305*86400:P+=304*86400;break;case 11:u%4==0?P+=335*86400:P+=334*86400;break}let D=Math.floor(u/4);u%4==0&&D--;const V=D*86400;i=P+V}if(w=="event"){let P=(C.date.getFullYear()-1)*31536e3;switch(C.date.getMonth()){case 0:break;case 1:P+=31*86400;break;case 2:C.date.getFullYear()%4==0?P+=60*86400:P+=59*86400;break;case 3:C.date.getFullYear()%4==0?P+=91*86400:P+=90*86400;break;case 4:C.date.getFullYear()%4==0?P+=121*86400:P+=120*86400;break;case 5:C.date.getFullYear()%4==0?P+=152*86400:P+=151*86400;break;case 6:C.date.getFullYear()%4==0?P+=182*86400:P+=181*86400;break;case 7:C.date.getFullYear()%4==0?P+=213*86400:P+=212*86400;break;case 8:C.date.getFullYear()%4==0?P+=244*86400:P+=243*86400;break;case 9:C.date.getFullYear()%4==0?P+=274*86400:P+=273*86400;break;case 10:C.date.getFullYear()%4==0?P+=305*86400:P+=304*86400;break;case 11:C.date.getFullYear()%4==0?P+=335*86400:P+=334*86400;break}let D=Math.floor(C.date.getFullYear()/4);C.date.getFullYear()%4==0&&D--;const V=D*86400;return P+V+C.second+C.minute*60+C.hour*3600+(C.date.getDate()-1)*86400}}function y(){const w=k();r=[];let C;const P=S(u);switch(d){case 0:C=P;break;case 1:C=P+3;break;case 2:u%4==0?C=P+4:C=P+3;break;case 3:u%4==0?C=P:C=P+6;break;case 4:u%4==0?C=P+2:C=P+1;break;case 5:u%4==0?C=P+5:C=P+4;break;case 6:u%4==0?C=P:C=P+6;break;case 7:u%4==0?C=P+3:C=P+2;break;case 8:u%4==0?C=P+6:C=P+5;break;case 9:u%4==0?C=P+1:C=P;break;case 10:u%4==0?C=P+4:C=P+3;break;case 11:u%4==0?C=P+6:C=P+5;break}C>6&&(C-=7);for(let D=0;D<C;D++)r.push({events:[],id:"blank"});for(let D=0;D<w;D++)r.push({events:[],id:D+1});h()}function h(){let w=r;s=!1,g("month",null),o&&o.map(C=>{if(!b(88,C)){p(r);return}w.map(P=>{b(P,C)&&P.events.push(C)})}),p(w)}function b(w,C){if(w==88)return C.date.getFullYear()>u?!1:!(!(u>C.date.getFullYear())&&C.date.getMonth()>d);if(w.id=="blank")return;const P=C.secondPeriod+C.minutePeriod*60+C.hourPeriod*3600+C.dayPeriod*86400+C.monthPeriod*2592e3+C.yearPeriod*31536e3,D=g("event",C),V=(w.id-1)*86400,U=i+V,H=M(C),G=U-D,ee=G%P+H,O=P-ee;return s&&C.monthPeriod==1&&P<2622600&&w.id==31||G<-86399?!1:O<86400||ee==0||G<=0?(s=!0,!0):!1}function M(w){const C=w.date.getFullYear()%4,P=u-w.date.getFullYear()+C,D=P-C;let V=Math.floor(P/4);(w.monthPeriod>0&&P%4==0||P%4==0&&d<2&&w.yearPeriod>0)&&V--;let U=0;w.yearPeriod>0&&(U=V*-86400);let H=0;const G=D*5*-86400-V*86400;if(w.monthPeriod>0)switch(d){case 0:H=G;break;case 1:H=G-86400;break;case 2:u%4==0?H=G:H=G+86400;break;case 3:u%4==0?H=G-86400:H=G;break;case 4:u%4==0?H=G-86400:H=G;break;case 5:u%4==0?H=G-172800:H=G-86400;break;case 6:u%4==0?H=G-172800:H=G-86400;break;case 7:u%4==0?H=G-259200:H=G-172800;break;case 8:u%4==0?H=G-345600:H=G-259200;break;case 9:u%4==0?H=G-345600:H=G-259200;break;case 10:u%4==0?H=G-432e3:H=G-345600;break;case 11:u%4==0?H=G-432e3:H=G-345600;break}return U+H}function I(w){if(a.current){const P=document.getElementById(a.current.day);if(P&&P.classList.remove("selected"),a.current.day==w.id&&a.current.month==d&&a.current.year==u){a.current=null,l(null);return}}document.getElementById(w.id).classList.add("selected"),a.current={day:w.id,month:d,year:u},l({day:w.id,month:d,year:u,events:w.events})}function _(w,C){let P="";return w&&(P=P+"hasEvents"),a.current&&C==a.current.day&&d==a.current.month&&u==a.current.year&&(P=P+" selected"),P}return c.useEffect(()=>{y()},[d,u,o]),R(PL,{children:[R(zL,{children:[L("button",{onClick:()=>m(-5,"Year"),children:L(_L,{})}),L("button",{onClick:()=>m(-1,"Year"),children:L(ip,{})}),L("span",{children:u}),L("button",{onClick:()=>m(1,"Year"),children:L(sp,{})}),L("button",{onClick:()=>m(5,"Year"),children:L(RL,{})})]}),R(TL,{children:[L("button",{onClick:()=>m(-1,"Month"),children:L(ip,{})}),L("span",{children:n[d]}),L("button",{onClick:()=>m(1,"Month"),children:L(sp,{})})]}),R(IL,{children:[L("span",{children:"Sun"}),L("span",{children:"Mon"}),L("span",{children:"Tue"}),L("span",{children:"Wed"}),L("span",{children:"Thu"}),L("span",{children:"Fri"}),L("span",{children:"Sat"})]}),L(OL,{children:x.map((w,C)=>w.id!="blank"?L("button",{className:_(w.events[0],w.id),onClick:()=>I(w),id:w.id,selected:!0,children:w.id},C):L("button",{disabled:!0},C))})]})}const BL=oe.div`
    padding-bottom: 6rem;
    background: ${({theme:e})=>e.upwardsGradient};
    min-height: 100vh;

    #CalendarWrapper{
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-top: 6rem;
        padding: 0 2rem;
    }

//------------------ Media Queries ------------------
    
    @media(max-width: 800px){
        header{
            flex-direction: column;
            justify-content: flex-start;
        }
    }

    @media(min-width: 1031px){
        #CalendarWrapper{
            padding: 0 3rem;
        }
    }

    @media(min-width: 1501px){
        #CalendarWrapper{
            padding: 0 5rem;
            flex-direction: row;
            align-items: unset;

            gap: 10rem;
        }
    }
`,DL=oe.ul`
    padding: 3rem 2.5rem;
    margin: 5rem 2.5rem 0 2rem;
    border: 1px solid ${({theme:e})=>e.inputText};
    border-radius: 8px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.2rem;

    >span{
        position: absolute;
        color: ${({theme:e})=>e.inputText};
        font-family: "Orbitron";
        font-size: 2rem;
        font-weight: 500;
        top: -1.5rem;
        background-color: ${({theme:e})=>e.globalBackground};
        padding: 0 4px;
    }
//------------------ Media Queries ------------------

    @media(min-width: 801px){
        flex-direction: row;
        flex-wrap: wrap;
        padding: 3rem 2.5rem;
        margin: 5rem 2rem 0 2rem;

        >span{
            font-size: 2.5rem;
            top: -1.8rem;
        }
    }

    @media(min-width: 1031px){
        padding: 3.5rem 2.8rem;
        margin: 6rem 3rem 0 3rem;

        >span{
            font-size: 2.5rem;
            top: -1.8rem;
        }
    }

    @media(min-width: 1501px){
        padding: 3.5rem 2.8rem;
        margin: 8rem 5rem 0 5rem;

        >span{
            font-size: 3.5rem;
            top: -2.5rem;
        }
    }
`,FL=oe.div`
    padding: 3rem 2.5rem;
    margin: 5rem 2.5rem 0 2rem;
    border: 1px solid ${({theme:e})=>e.inputText};
    border-radius: 8px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.2rem;
    width: 100%;

    >span{
        position: absolute;
        color: ${({theme:e})=>e.inputText};
        font-family: "Orbitron";
        font-size: 2rem;
        font-weight: 500;
        top: -1.5rem;
        background-color: ${({theme:e})=>e.globalBackground};
        padding: 0 4px;
    }

//------------------ Media Queries ------------------

    @media(min-width: 801px){
        padding: 3rem 2.5rem;
        margin: 5rem 2rem 0 2rem;

        >span{
            font-size: 2.5rem;
            top: -1.8rem;
            left: 50%;

            transform: translateX(-50%);
        }
    }

    @media(min-width: 1031px){
        padding: 3.5rem 2.8rem;
        margin: 6rem 3rem 0 3rem;

        >span{
            font-size: 2.5rem;
            top: -1.8rem;
        }
    }

    @media(min-width: 1501px){
        padding: 3.5rem 2.8rem;
        margin: 0;
        min-height: 100%;

        >span{
            font-size: 3.5rem;
            top: -2.5rem;
        }
    }
`,jL=oe.div`
    min-height: 10rem;

    >span{
        position: absolute;
        font-family: "Monda";
        font-size: 2rem;
        font-weight: 500;
        top: 50%;
        right: 50%;
        transform: translateX(50%) translateY(-50%);

        width: max-content;
    }

//------------------ Media Queries ------------------

    @media(min-width: 1501px){
        >span{
            font-size: 2.5rem;
        }
    }
`,WL=oe.li`
    background-color: ${({theme:e})=>e.eventBackground};
    padding: 1rem;
    border: 1px solid ${({theme:e})=>e.buttonBackground};
    border-radius: 5px;
    position: relative;
    display: flex;
    word-wrap: break-word;
    flex-direction: column;
    gap: 1.4rem;

    .Delete{
        background: none;
        border: none;
        height: 1.5rem;
        position: absolute;
        right: 5px;
        top: 5px;

        svg{
            color: ${({theme:e})=>e.titles};
            font-size: 1.5rem;
        }
    }

    .Name{
        font-size: 1.8rem;
        font-family: "Monda";
        color: ${({theme:e})=>e.titles};
        padding-right: 1rem;
    }

    .DurationWrapper{
        display: flex;
        flex-direction: column;
        gap: 6px;

        >span{
            font-size: 1.2rem;
            font-family: "Monda";
            color: ${({theme:e})=>e.titles};
        }
    }

    .FieldsWrapper{
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .DateWrapper{

        margin-top: 1rem;

        span{
            width: clamp(15rem, 100%, 28rem);
            text-align: center;
            height: 3rem;
            background-color: ${({theme:e})=>e.inputBackground};
            border: none;
            border-radius: 5px;
            color: ${({theme:e})=>e.inputText};
            font-family: "Orbitron";
            font-size: 1.6rem;
            padding: 5px;
        }
    }

    .LeftSide{
        width: 100%;
    }
    
    .RightSide{
        display: flex;
        flex-direction: column;
        gap: 6px;

        >span{
            font-size: 1.2rem;
            font-family: "Monda";
            color: ${({theme:e})=>e.titles};
        }

        input{
            width: clamp(6rem, 30vw - 5rem, 17rem);
        }
    }

//------------------ Media Queries ------------------

@media(min-width: 801px){
        width: 53.3rem;
        padding: 2rem;
        gap: 1.6rem;
        min-height: 52.4rem;
        flex-direction: row;
        justify-content: space-between;

        .Delete{
            height: 1.8rem;
            right: 5px;
            top: 5px;

            svg{
                font-size: 1.8rem;
            }
        }

        .Name{
            font-size: 2.8rem;
            padding-right: 1rem;
        }

        .DurationWrapper{
            flex-direction: column;
            gap: 6px;

            >span{
                font-size: 1.8rem;
            }
        }

        .FieldsWrapper{
            gap: 1rem;
            flex-direction: column;
            justify-content: space-between;
        }

        .DateWrapper{
            span{
                height: 4rem;
                font-size: 2.8rem;
                padding: 2px;
            }
        }

        .RightSide{
            >span{
                font-size: 1.8rem;
            }
        }
    }

    @media(min-width: 1031px){
        min-height: 38.1rem;
        .Name{
            >label{
                font-size: 1.8rem;
            }
        }

        .DurationWrapper{
            flex-direction: column;
            gap: 1rem;

            >span{
                font-size: 2rem;
            }
        }

        .DateWrapper{
            span{
                font-size: 2.8rem;
            }
        }

        .RightSide{
            >span{
                font-size: 2rem;
            }
        }
    }

    @media(min-width: 1501px){
        min-height: 41.1rem;
        padding: 1.5rem;

        .Delete{
            height: 2rem;
            width: 2rem;
            right: 6px;
            top: 6px;

            svg{
                font-size: 2rem;
            }
        }

        .Name{
            >label{
                font-size: 2rem;
            }
        }

        .DurationWrapper{
            flex-direction: column;
            gap: 1rem;

            >span{
                font-size: 2.5rem;
            }
        }

        .DateWrapper{
            span{
                font-size: 2.8rem;
            }
        }

        .RightSide{
            >span{
                font-size: 2.5rem;
            }
        }
    }
`,$t=oe.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    >label{
        font-size: 1rem;
        font-family: "Monda";
        color: ${({theme:e})=>e.titles};
    }

    span{
        text-align: center;
        width: clamp(6rem, 30vw - 5rem, 15rem);
        height: 3rem;
        background-color: ${({theme:e})=>e.inputBackground};
        border: none;
        border-radius: 5px;
        color: ${({theme:e})=>e.inputText};
        font-family: "Orbitron";
        font-size: 1.6rem;
        padding: 4px 5px;
        white-space: nowrap;
        overflow-x: auto;
        overflow-y: hidden;

        ::-webkit-scrollbar {
            display: none;
        }
    }

//------------------ Media Queries ------------------

    @media(min-width: 801px){
        >label{
            font-size: 1.6rem;
        }

        span{
            width: clamp(6rem, 30vw - 5rem, 15rem);
            height: 4rem;
            font-size: 2.8rem;
            padding: 0 8px;
        }
    }

    @media(min-width: 1031px){
        >label{
            font-size: 1.8rem;
        }
    }
`;function UL({eventData:e}){const{setRecurringEvents:t}=Ot();function n(){t(r=>r.filter(i=>i.id!=e.id))}return R(WL,{children:[R("div",{className:"LeftSide",children:[L("button",{className:"Delete",onClick:()=>n(),children:L(Hh,{})}),L("span",{className:"Name",children:e.name}),R("div",{className:"DurationWrapper",children:[L("span",{children:"Starting time:"}),R("div",{className:"FieldsWrapper",children:[R($t,{children:[L("label",{htmlFor:"hours",children:"Hours"}),L("span",{id:"hours",children:e.hour})]}),R($t,{children:[L("label",{htmlFor:"hours",children:"Minutes"}),L("span",{id:"minutes",children:e.minute})]}),R($t,{children:[L("label",{htmlFor:"hours",children:"Seconds"}),L("span",{id:"seconds",children:e.second})]})]}),L("div",{className:"DateWrapper",children:R($t,{children:[L("label",{children:"Initial Date"}),L("span",{children:e.date.toLocaleDateString()})]})})]})]}),R("div",{className:"RightSide",children:[L("span",{children:"Frequency:"}),R("div",{className:"FieldsWrapper",children:[R($t,{children:[L("label",{htmlFor:"yearPeriod",children:"Years"}),L("span",{id:"yearPeriod",children:e.yearPeriod})]}),R($t,{children:[L("label",{htmlFor:"monthPeriod",children:"Months"}),L("span",{id:"monthPeriod",children:e.monthPeriod})]}),R($t,{children:[L("label",{htmlFor:"dayPeriod",children:"Days"}),L("span",{id:"dayPeriod",children:e.dayPeriod})]}),R($t,{children:[L("label",{htmlFor:"hourPeriod",children:"Hours"}),L("span",{id:"hourPeriod",children:e.hourPeriod})]}),R($t,{children:[L("label",{htmlFor:"minutePeriod",children:"Minutes"}),L("span",{id:"minutePeriod",children:e.minutePeriod})]}),R($t,{children:[L("label",{htmlFor:"secondPeriod",children:"Seconds"}),L("span",{id:"secondPeriod",children:e.secondPeriod})]})]})]})]})}const HL=oe.li`
    padding: 1rem;
    border: 1px dashed ${({theme:e})=>e.buttonBackground};
    border-radius: 5px;
    position: relative;
    display: flex;
    word-wrap: break-word;
    flex-direction: column;
    gap: 1.4rem;

    .Add{
        background: none;
        border: none;
        height: 1.5rem;
        position: absolute;
        right: 5px;
        top: 5px;

        svg{
            color: ${({theme:e})=>e.titles};
            font-size: 1.5rem;
        }
    }

    .Name{
        display: flex;
        flex-direction: column;
        align-items: center;

        >label{
            font-size: 1rem;
            font-family: "Monda";
            color: ${({theme:e})=>e.titles};
        }

        >input{
            width: clamp(15rem, 70vw - 15rem, 25rem);
            background-color: ${({theme:e})=>e.bigInputBackground};
            border: none;
            border-radius: 5px;
            height: 3rem;
            color: ${({theme:e})=>e.inputText};
            font-family: "Orbitron";
            font-size: 1.6rem;
            padding: 0 5px;
        }

        >input:focus{
            outline: 1px solid ${({theme:e})=>e.inputText};
        }
    }

    .DurationWrapper{
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-top: 1.4rem;

        span{
            font-size: 1.2rem;
            font-family: "Monda";
            color: ${({theme:e})=>e.titles};
        }
    }

    .FieldsWrapper{
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .DateWrapper{

        margin-top: 1rem;

        #date{
            width: clamp(15rem, 100%, 28rem);
            color-scheme: dark;
        }
    }

    #RightSide{
        display: flex;
        flex-direction: column;
        gap: 6px;

        >span{
            font-size: 1.2rem;
            font-family: "Monda";
            color: ${({theme:e})=>e.titles};
        }

        input{
            width: clamp(6rem, 30vw - 5rem, 17rem);
        }
    }

//------------------ Media Queries ------------------

    @media(min-width: 801px){
        width: fit-content;
        padding: 2rem;
        gap: 1.6rem;
        flex-direction: row;

        .Add{
            height: 1.8rem;
            right: 5px;
            top: 5px;

            svg{
                font-size: 1.8rem;
            }
        }

        .Name{
            >label{
                font-size: 1.6rem;
            }

            >input{
                width: 18rem;
                height: 4rem;
                font-size: 2.8rem;
                padding: 0 8px;
            }
        }

        .DurationWrapper{
            flex-direction: column;
            gap: 6px;

            span{
                font-size: 1.8rem;
            }
        }

        .FieldsWrapper{
            gap: 1rem;
            flex-direction: column;
            justify-content: space-between;
        }

        #RightSide{
            >span{
                font-size: 1.8rem;
            }
        }
    }

    @media(min-width: 1031px){
        .Name{
            >label{
                font-size: 1.8rem;
            }
        }

        .DurationWrapper{
            flex-direction: column;
            gap: 1rem;

            span{
                font-size: 2rem;
            }
        }

        #RightSide{
            >span{
                font-size: 2rem;
            }
        }
    }

    @media(min-width: 1501px){
        padding: 1.5rem;

        .Add{
            height: 2rem;
            width: 2rem;
            right: 6px;
            top: 6px;

            svg{
                font-size: 2rem;
            }
        }

        .Name{
            >label{
                font-size: 2.5rem;
            }
        }

        .DurationWrapper{
            flex-direction: column;
            gap: 1rem;

            span{
                font-size: 2.5rem;
            }
        }

        #RightSide{
            >span{
                font-size: 2.5rem;
            }
        }
    }
`,Nt=oe.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    >label{
        font-size: 1rem;
        font-family: "Monda";
        color: ${({theme:e})=>e.titles};
    }

    >input{
        text-align: center;
        width: clamp(6rem, 30vw - 5rem, 15rem);
        height: 3rem;
        background-color: ${({theme:e})=>e.bigInputBackground};
        border: none;
        border-radius: 5px;
        color: ${({theme:e})=>e.inputText};
        font-family: "Orbitron";
        font-size: 1.6rem;
        padding: 0 5px;
    }

    >input:focus{
        outline: 1px solid ${({theme:e})=>e.inputText};
    }
//------------------ Media Queries ------------------

    @media(min-width: 801px){
        >label{
            font-size: 1.6rem;
        }

        >input{
            width: clamp(6rem, 30vw - 5rem, 15rem);
            height: 4rem;
            font-size: 2.8rem;
            padding: 0 8px;
        }
    }

    @media(min-width: 1031px){
        >label{
            font-size: 1.8rem;
        }
    }

    @media(min-width: 1501px){
        >label{
            font-size: 2rem;
        }
    }
`;function VL({}){const{setRecurringEvents:e}=Ot(),[t,n]=c.useState(""),[r,i]=c.useState(""),[s,o]=c.useState(""),[l,a]=c.useState(""),[u,f]=c.useState(""),[d,v]=c.useState(""),[x,p]=c.useState(""),[S,k]=c.useState(""),[m,g]=c.useState(""),[y,h]=c.useState(""),[b,M]=c.useState("");function I(w,C){if(!(w>=9007199254740991))switch(C){case"yearPeriod":w!=""&&!isNaN(parseInt(w))&&parseInt(w)<10001&&v(parseInt(w)),w==""&&v(0);break;case"monthPeriod":w!=""&&!isNaN(parseInt(w))&&parseInt(w)<10001&&p(parseInt(w)),w==""&&p(0);break;case"dayPeriod":w!=""&&!isNaN(parseInt(w))&&parseInt(w)<10001&&k(parseInt(w)),w==""&&k(0);break;case"hour":case"hourPeriod":w!=""&&!isNaN(parseInt(w))&&(C=="hour"?parseInt(w)<24&&i(parseInt(w)):parseInt(w)<10001&&g(parseInt(w))),C=="hour"?w==""&&i(0):w==""&&g(0);break;case"minute":case"minutePeriod":w!=""&&!isNaN(parseInt(w))&&parseInt(w)<10001&&(C=="minute"?parseInt(w)<60&&o(parseInt(w)):parseInt(w)<10001&&h(parseInt(w))),C=="minute"?w==""&&o(0):w==""&&h(0);break;case"second":case"secondPeriod":w!=""&&!isNaN(parseInt(w))&&parseInt(w)<10001&&(C=="second"?parseInt(w)<60&&a(parseInt(w)):parseInt(w)<10001&&M(parseInt(w))),C=="second"?w==""&&a(0):w==""&&M(0);break}}function _(){const w={name:t,hour:r,minute:s,second:l,date:new Date(`${u}T00:00:00`),yearPeriod:d,monthPeriod:x,dayPeriod:S,hourPeriod:m,minutePeriod:y,secondPeriod:b,id:Date.now()};if(!(w.yearPeriod==""&&w.monthPeriod==""&&w.dayPeriod==""&&w.hourPeriod==""&&w.minutePeriod==""&&w.secondPeriod=="")){if(w.hour==""&&(w.hour=0),w.minute==""&&(w.minute=0),w.second==""&&(w.second=0),w.yearPeriod==""&&(w.yearPeriod=0),w.monthPeriod==""&&(w.monthPeriod=0),w.dayPeriod==""&&(w.dayPeriod=0),w.hourPeriod==""&&(w.hourPeriod=0),w.minutePeriod==""&&(w.minutePeriod=0),w.secondPeriod==""&&(w.secondPeriod=0),!u){const C=new Date;w.date=C}w.monthPeriod>0&&!confirm("Setting a month frequency can yield unpredictable results . Maybe some day i will fix it :D, until then, dont use this functionality if you want precise results.")||w.yearPeriod==0&&w.monthPeriod==0&&w.dayPeriod==0&&w.hourPeriod==0&&w.minutePeriod==0&&w.secondPeriod<30&&!confirm("Time periods too short can crash your browser if you try to see the events of the day. If you dont select any day, you will be fine.")||(e(C=>[w,...C]),n(""),i(""),o(""),a(""),f(""),v(""),p(""),k(""),g(""),h(""),M(""))}}return R(HL,{children:[R("div",{id:"LeftSide",children:[L("button",{className:"Add",onClick:()=>_(),children:L(Vh,{})}),R("div",{className:"Name",children:[L("label",{htmlFor:"Name",children:"New event name"}),L("input",{type:"text",id:"Name",value:t,onChange:w=>n(w.target.value),autoComplete:"off"})]}),R("div",{className:"DurationWrapper",children:[L("span",{children:"Starting time:"}),R("div",{className:"FieldsWrapper",children:[R(Nt,{children:[L("label",{htmlFor:"hours",children:"Hour"}),L("input",{type:"text",id:"hours",value:r,onChange:w=>I(w.target.value,"hour"),autoComplete:"off"})]}),R(Nt,{children:[L("label",{htmlFor:"minutes",children:"Minute"}),L("input",{type:"text",id:"minutes",value:s,onChange:w=>I(w.target.value,"minute"),autoComplete:"off"})]}),R(Nt,{children:[L("label",{htmlFor:"seconds",children:"Second"}),L("input",{type:"text",id:"seconds",value:l,onChange:w=>I(w.target.value,"second"),autoComplete:"off"})]})]}),L("div",{className:"DateWrapper",children:R(Nt,{children:[L("label",{htmlFor:"date",children:"Initial Date"}),L("input",{type:"date",id:"date",value:u,onChange:w=>f(w.target.value),autoComplete:"off"})]})})]})]}),R("div",{id:"RightSide",children:[L("span",{children:"Frequency:"}),R("div",{className:"FieldsWrapper",children:[R(Nt,{children:[L("label",{htmlFor:"yearPeriod",children:"Years"}),L("input",{type:"text",id:"yearPeriod",value:d,onChange:w=>I(w.target.value,"yearPeriod")})]}),R(Nt,{children:[L("label",{htmlFor:"monthPeriod",children:"Months"}),L("input",{type:"text",id:"monthPeriod",value:x,onChange:w=>I(w.target.value,"monthPeriod")})]}),R(Nt,{children:[L("label",{htmlFor:"dayPeriod",children:"Days"}),L("input",{type:"text",id:"dayPeriod",value:S,onChange:w=>I(w.target.value,"dayPeriod")})]}),R(Nt,{children:[L("label",{htmlFor:"hourPeriod",children:"Hours"}),L("input",{type:"text",id:"hourPeriod",value:m,onChange:w=>I(w.target.value,"hourPeriod")})]}),R(Nt,{children:[L("label",{htmlFor:"minutePeriod",children:"Minutes"}),L("input",{type:"text",id:"minutePeriod",value:y,onChange:w=>I(w.target.value,"minutePeriod")})]}),R(Nt,{children:[L("label",{htmlFor:"secondPeriod",children:"Seconds"}),L("input",{type:"text",id:"secondPeriod",value:b,onChange:w=>I(w.target.value,"secondPeriod")})]})]})]})]})}const YL=oe.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 26rem;
    overflow-y: auto;

    list-style: none;

    ::-webkit-scrollbar {
            width: 0;
        }

    >span{
        position: absolute;
        font-family: "Monda";
        font-size: 2rem;
        font-weight: 500;
        top: 50%;
        right: 50%;
        transform: translateX(50%) translateY(-50%);

        width: max-content;
    }

//------------------ Media Queries ------------------

    @media(min-width: 801px){
        >span{
            font-size: 2.5rem;
        }
    }

    @media(min-width: 1501px){
        height: 40rem;
    }
`,GL=oe.li`
    background-color: ${({theme:e})=>e.eventBackground};
    border: 1px solid ${({theme:e})=>e.buttonBackground};
    border-radius: 5px;

    height: 3rem;

    font-family: "Monda";
    font-size: 1.7rem;
    padding: 0 1rem;

//------------------ Media Queries ------------------

    @media(min-width: 801px){
        height: 3.6rem;
        font-size: 2rem;
    }

    @media(min-width: 1501px){
        height: 4.5rem;
        font-size: 2.5rem;
    }
`;function QL(){const{selectedDay:e}=Ot(),[t,n]=c.useState([]);function r(l,a){if(l=="month"){let u=(e.year-1)*31536e3;switch(e.month){case 0:break;case 1:u+=31*86400;break;case 2:e.year%4==0?u+=60*86400:u+=59*86400;break;case 3:e.year%4==0?u+=91*86400:u+=90*86400;break;case 4:e.year%4==0?u+=121*86400:u+=120*86400;break;case 5:e.year%4==0?u+=152*86400:u+=151*86400;break;case 6:e.year%4==0?u+=182*86400:u+=181*86400;break;case 7:e.year%4==0?u+=213*86400:u+=212*86400;break;case 8:e.year%4==0?u+=244*86400:u+=243*86400;break;case 9:e.year%4==0?u+=274*86400:u+=273*86400;break;case 10:e.year%4==0?u+=305*86400:u+=304*86400;break;case 11:e.year%4==0?u+=335*86400:u+=334*86400;break}let f=Math.floor(e.year/4);e.year%4==0&&f--;const d=f*86400;return u+d}if(l=="event"){let u=(a.date.getFullYear()-1)*31536e3;switch(a.date.getMonth()){case 0:break;case 1:u+=31*86400;break;case 2:a.date.getFullYear()%4==0?u+=60*86400:u+=59*86400;break;case 3:a.date.getFullYear()%4==0?u+=91*86400:u+=90*86400;break;case 4:a.date.getFullYear()%4==0?u+=121*86400:u+=120*86400;break;case 5:a.date.getFullYear()%4==0?u+=152*86400:u+=151*86400;break;case 6:a.date.getFullYear()%4==0?u+=182*86400:u+=181*86400;break;case 7:a.date.getFullYear()%4==0?u+=213*86400:u+=212*86400;break;case 8:a.date.getFullYear()%4==0?u+=244*86400:u+=243*86400;break;case 9:a.date.getFullYear()%4==0?u+=274*86400:u+=273*86400;break;case 10:a.date.getFullYear()%4==0?u+=305*86400:u+=304*86400;break;case 11:a.date.getFullYear()%4==0?u+=335*86400:u+=334*86400;break}let f=Math.floor(a.date.getFullYear()/4);a.date.getFullYear()%4==0&&f--;const d=f*86400;return u+d+a.second+a.minute*60+a.hour*3600+(a.date.getDate()-1)*86400}}function i(l,a){const u=a.date.getFullYear()%4,f=l.year-a.date.getFullYear()+u,d=f-u;let v=Math.floor(f/4);(a.monthPeriod>0&&f%4==0||f%4==0&&l.month<2&&a.yearPeriod>0)&&v--;let x=0;a.yearPeriod>0&&(x=v*-86400);let p=0;const S=d*5*-86400-v*86400;if(a.monthPeriod>0)switch(l.month){case 0:p=S;break;case 1:p=S-86400;break;case 2:l.year%4==0?p=S:p=S+86400;break;case 3:l.year%4==0?p=S-86400:p=S;break;case 4:l.year%4==0?p=S-86400:p=S;break;case 5:l.year%4==0?p=S-172800:p=S-86400;break;case 6:l.year%4==0?p=S-172800:p=S-86400;break;case 7:l.year%4==0?p=S-259200:p=S-172800;break;case 8:l.year%4==0?p=S-345600:p=S-259200;break;case 9:l.year%4==0?p=S-345600:p=S-259200;break;case 10:l.year%4==0?p=S-432e3:p=S-345600;break;case 11:l.year%4==0?p=S-432e3:p=S-345600;break}return x+p}function s(l,a){const u=[],f=l.secondPeriod+l.minutePeriod*60+l.hourPeriod*3600+l.dayPeriod*86400+l.monthPeriod*2592e3+l.yearPeriod*31536e3,d=r("event",l),v=(e.day-1)*86400,p=r("month",null)+v,S=i(e,l),m=(p-d)%f+S;let y=f-m;for(m==0&&(y=0),m<0&&(y=-m);y<86400;){let h=(y%60).toString(),b=Math.floor(y/60).toString(),M=(b%60).toString(),I=Math.floor(b/60).toString();h.length==1&&(h="0"+h),M.length==1&&(M="0"+M),I.length==1&&(I="0"+I);const _={name:l.name,hour:I,minute:M,second:h};u.push(_),y+=f}a.push(...u)}function o(){const l=[];e.events.map(a=>s(a,l)),l.sort((a,u)=>{const f=parseInt(a.hour),d=parseInt(u.hour),v=parseInt(a.minute),x=parseInt(u.minute),p=parseInt(a.second),S=parseInt(u.second);return d>f||d>=f&&x>v||d>=f&&x>=v&&S>=p?-1:f>d||f>=d&&v>x||f>=d&&v>=x&&p>=S?1:0}),n(l)}return c.useEffect(()=>{o()},[e]),L(YL,{children:t[0]?t.map((l,a)=>R(GL,{children:[" ",`${l.name} at ${l.hour}:${l.minute}:${l.second}`," "]},a)):L("span",{children:"No events on this day"})})}function ZL(){const{recurringEvents:e,selectedDay:t}=Ot();return R(BL,{children:[L(Tr,{}),R("div",{id:"CalendarWrapper",children:[L(AL,{}),R(FL,{children:[L("span",{children:"Events of the day"}),L(jL,{children:t?L(QL,{}):L("span",{children:"No day selected"})})]})]}),R(DL,{children:[L("span",{children:"Recurring Events"}),L(VL,{}),e.map((n,r)=>L(UL,{eventData:n},r))]})]})}const KL=oe.div`
    .FieldsWrapper{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-bottom: 1.5rem;
    }
`,ms=oe.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    >label{
        font-size: 1rem;
        font-family: "Monda";
        color: ${({theme:e})=>e.titles};
    }

    >input{
        text-align: center;
        width: max-content;
        max-width: 19rem;
        height: 3rem;
        background-color: ${({theme:e})=>e.bigInputBackground};
        border: none;
        border-radius: 5px;
        color: ${({theme:e})=>e.inputText};
        font-family: "Orbitron";
        font-size: 1.6rem;
        padding: 0 5px;
    }

    >input:focus{
        outline: 1px solid ${({theme:e})=>e.inputText};
    }
    
//------------------ Media Queries ------------------

    @media(min-width: 801px){
        >label{
            font-size: 1.6rem;
        }

        >input{
            max-width: 35rem;
            width: 100%;
            height: 4rem;
            font-size: 2.8rem;
            padding: 0 8px;
        }
    }

    @media(min-width: 1031px){
        >label{
            font-size: 1.8rem;
        }
    }

    @media(min-width: 1501px){
        >label{
            font-size: 2rem;
        }
    }
`;function op({setState:e,ID:t}){const n=new Date;n.setHours(0),n.setMinutes(0),n.setSeconds(0);const[r,i]=c.useState(n),[s,o]=c.useState(0),[l,a]=c.useState(0),[u,f]=c.useState(0),[d,v]=c.useState("");function x(p,S){const k=r;if(!(p>=9007199254740991)){switch(S){case"hour":S=="hour"&&(parseInt(p)<24&&p!=""&&!isNaN(parseInt(p))?(o(parseInt(p)),k.setHours(parseInt(p))):(p==""&&o(0),p==""&&k.setHours(0)));break;case"minute":parseInt(p)<60&&p!=""&&!isNaN(parseInt(p))?(a(parseInt(p)),k.setMinutes(parseInt(p))):(p==""&&a(0),p==""&&k.setMinutes(0));break;case"second":parseInt(p)<60&&p!=""&&!isNaN(parseInt(p))?(f(parseInt(p)),k.setSeconds(parseInt(p))):(p==""&&f(0),p==""&&k.setSeconds(0));break;case"date":v(p);const m=new Date(`${p}T00:00:00`);k.setDate(m.getDate()),k.setMonth(m.getMonth()),k.setFullYear(m.getFullYear());break}i(k),e(t,k)}}return L(KL,{children:R("div",{className:"DateWrapper",children:[R("div",{className:"FieldsWrapper",children:[R(ms,{children:[L("label",{htmlFor:"hours",children:"Hour"}),L("input",{type:"text",id:"hours",value:s,onChange:p=>x(p.target.value,"hour"),autoComplete:"off"})]}),R(ms,{children:[L("label",{htmlFor:"minutes",children:"Minute"}),L("input",{type:"text",id:"minutes",value:l,onChange:p=>x(p.target.value,"minute"),autoComplete:"off"})]}),R(ms,{children:[L("label",{htmlFor:"seconds",children:"Second"}),L("input",{type:"text",id:"seconds",value:u,onChange:p=>x(p.target.value,"second"),autoComplete:"off"})]})]}),R(ms,{children:[L("label",{htmlFor:"date",children:"Date"}),L("input",{type:"date",id:"date",value:d,onChange:p=>x(p.target.value,"date"),autoComplete:"off"})]})]})})}const JL=oe.div`
    background: ${({theme:e})=>e.upwardsGradient};
    @media(max-width: 800px){
        header{
            flex-direction: column;
            justify-content: flex-start;
        }
    }

    @media(min-width: 801px){
        .inputWrapper{
            display: flex;
            justify-content: space-between;
            /* width: 100%; */
        } 
    }
`,XL=oe.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`,lp=oe.div`
    padding: 3rem 2.5rem;
    margin: 5rem 2.5rem 0 2rem;
    border: 1px solid ${({theme:e})=>e.inputText};
    border-radius: 8px;
    position: relative;
    max-width: 32rem;

    >span{
        position: absolute;
        color: ${({theme:e})=>e.inputText};
        font-family: "Orbitron";
        font-size: 2rem;
        font-weight: 500;
        top: -1.5rem;
        background-color: ${({theme:e})=>e.globalBackground};
        padding: 0 4px;
    }

//------------------ Media Queries ------------------

    @media(min-width: 801px){
        padding: 3rem 2.5rem;
        margin: 5rem 2rem 0 2rem;
        max-width: unset;
        width: 100%;

        >span{
            font-size: 2.5rem;
            top: -1.8rem;
        }
    }

    @media(min-width: 1031px){
        padding: 3.5rem 2.8rem;
        margin: 6rem 3rem 0 3rem;

        >span{
            font-size: 2.5rem;
            top: -1.8rem;
        }
    }

    @media(min-width: 1501px){
        padding: 3.5rem 2.8rem;
        margin: 8rem 5rem 0 5rem;

        >span{
            font-size: 3.5rem;
            top: -2.5rem;
        }
    }
`,qL=oe.div`
    margin: 6rem 2rem 0 2rem;
    padding: 3rem 0 5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    border-top: 1px solid ${({theme:e})=>e.inputText};
    width: clamp(30rem, 80vw, 45rem);

    #Label{
        position: absolute;
        color: ${({theme:e})=>e.inputText};
        font-family: "Orbitron";
        font-size: 2rem;
        top: 1rem;
    }

    .resultsWrapper{
        margin-top: 2.5rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        width: 100%;
    }

    .resultWrapper{
        display: flex;
        flex-direction: column;
        align-items: center;

        span{
            text-align: center;
            width: 100%;
            max-width: 20rem;
            height: 3rem;
            background-color: ${({theme:e})=>e.bigInputBackground};
            border: none;
            border-radius: 5px;
            color: ${({theme:e})=>e.inputText};
            font-family: "Orbitron";
            font-size: 2.2rem;
            padding: 0 5px;
        }

        label{
            font-size: 1rem;
            font-family: "Monda";
            color: ${({theme:e})=>e.titles};
        }  
    }

//------------------ Media Queries ------------------

    @media(min-width: 801px){
        
        #Label{
            font-size: 2.5rem;
        }

        .resultWrapper{

            span{
                font-size: 2.8rem;
                height: 4rem;
            }

            label{
                font-size: 1.6rem;
            }
        }
    }

    @media(min-width: 1031px){
        #Label{
            font-size: 2.5rem;
        }
        .resultWrapper{
            label{
                font-size: 1.8rem;
            }
        }
    }

    @media(min-width: 1501px){
        #Label{
            font-size: 3.5rem;
        }

        .resultWrapper{
            span{
                font-size: 3rem;
            }

            label{
                font-size: 2rem;
            }
        }
    }
`;function e2(){const e=new Date;e.setHours(0),e.setMinutes(0),e.setSeconds(0);const[t,n]=c.useState(e),[r,i]=c.useState(e),[s,o]=c.useState(),[l,a]=c.useState(),[u,f]=c.useState(),[d,v]=c.useState(),[x,p]=c.useState(),[S,k]=c.useState();function m(h,b){h==1?n(new Date(b)):i(new Date(b))}function g(){let h=(t.getFullYear()-1)*31536e3,b=(r.getFullYear()-1)*31536e3;switch(t.getMonth()){case 1:h+=31*86400;break;case 2:t.getFullYear()%4==0?h+=60*86400:h+=59*86400;break;case 3:t.getFullYear()%4==0?h+=91*86400:h+=90*86400;break;case 4:t.getFullYear()%4==0?h+=121*86400:h+=120*86400;break;case 5:t.getFullYear()%4==0?h+=152*86400:h+=151*86400;break;case 6:t.getFullYear()%4==0?h+=182*86400:h+=181*86400;break;case 7:t.getFullYear()%4==0?h+=213*86400:h+=212*86400;break;case 8:t.getFullYear()%4==0?h+=244*86400:h+=243*86400;break;case 9:t.getFullYear()%4==0?h+=274*86400:h+=273*86400;break;case 10:t.getFullYear()%4==0?h+=305*86400:h+=304*86400;break;case 11:t.getFullYear()%4==0?h+=335*86400:h+=334*86400;break}switch(r.getMonth()){case 1:b+=31*86400;break;case 2:r.getFullYear()%4==0?b+=60*86400:b+=59*86400;break;case 3:r.getFullYear()%4==0?b+=91*86400:b+=90*86400;break;case 4:r.getFullYear()%4==0?b+=121*86400:b+=120*86400;break;case 5:r.getFullYear()%4==0?b+=152*86400:b+=151*86400;break;case 6:r.getFullYear()%4==0?b+=182*86400:b+=181*86400;break;case 7:r.getFullYear()%4==0?b+=213*86400:b+=212*86400;break;case 8:r.getFullYear()%4==0?b+=244*86400:b+=243*86400;break;case 9:r.getFullYear()%4==0?b+=274*86400:b+=273*86400;break;case 10:r.getFullYear()%4==0?b+=305*86400:b+=304*86400;break;case 11:r.getFullYear()%4==0?b+=335*86400:b+=334*86400;break}let M=Math.floor(t.getFullYear()/4),I=Math.floor(r.getFullYear()/4);t.getFullYear()%4==0&&M--,r.getFullYear()%4==0&&I--;const _=M*86400,w=I*86400,C=h+_+t.getSeconds()+t.getMinutes()*60+t.getHours()*3600+(t.getDate()-1)*86400;let D=b+w+r.getSeconds()+r.getMinutes()*60+r.getHours()*3600+(r.getDate()-1)*86400-C;return D<0&&(D=D*-1),D}function y(){const h=g(),b=h%60,M=Math.floor(h/60)%60,I=Math.floor(h/3600)%24,_=Math.floor(h/86400)%30,w=Math.floor(h/2592e3)%12,C=Math.floor(h/31536e3);k(b),p(M),v(I),f(_),a(w),o(C)}return c.useEffect(()=>{y()},[t,r]),R(JL,{children:[L(Tr,{}),R(XL,{children:[R("div",{className:"inputWrapper",children:[R(lp,{children:[L("span",{children:"Date one"}),L(op,{setState:m,ID:1})]}),R(lp,{children:[L("span",{children:"Date two"}),L(op,{setState:m,ID:2})]})]}),R(qL,{children:[L("span",{id:"Label",children:"Time between"}),R("div",{className:"resultsWrapper",children:[R("div",{className:"resultWrapper",children:[L("label",{htmlFor:"years",children:"Years"}),R("span",{id:"years",children:[" ",s," "]})]}),R("div",{className:"resultWrapper",children:[L("label",{htmlFor:"months",children:"Months"}),R("span",{id:"months",children:[" ",l," "]})]}),R("div",{className:"resultWrapper",children:[L("label",{htmlFor:"days",children:"Days"}),R("span",{id:"days",children:[" ",u," "]})]}),R("div",{className:"resultWrapper",children:[L("label",{htmlFor:"hours",children:"Hours"}),R("span",{id:"hours",children:[" ",d," "]})]}),R("div",{className:"resultWrapper",children:[L("label",{htmlFor:"minutes",children:"Minutes"}),R("span",{id:"minutes",children:[" ",x," "]})]}),R("div",{className:"resultWrapper",children:[L("label",{htmlFor:"seconds",children:"Seconds"}),R("span",{id:"seconds",children:[" ",S," "]})]})]})]})]})]})}function t2(){return L(qy,{children:R(Qy,{children:[L(On,{path:"/ChronoSum/",element:L(ux,{})}),L(On,{path:"/ChronoSum/SimpleSum",element:L(Sx,{})}),L(On,{path:"/ChronoSum/DurationSum",element:L(zx,{})}),L(On,{path:"/ChronoSum/TimeDifference",element:L(ML,{})}),L(On,{path:"/ChronoSum/RecurrentEvents",element:L(ZL,{})}),L(On,{path:"/ChronoSum/TimeBetween",element:L(e2,{})})]})})}const n2=oe.button`
    background: none;
    border: none;

    position: absolute;
    right: 3rem;
    top: 3rem;

    svg{
        font-size: 5rem;
        color: ${({theme:e})=>e.titles};
    }

//------------------ Media Queries ------------------

    @media(max-width: 1500px){
        right: 2rem;
        top: 3rem;

        svg{
            font-size: 4.5rem;
        }
    }

    @media(max-width: 1250px){
        right: 2rem;
        top: 3rem;

        svg{
            font-size: 4rem;
        }
    }

    /* @media(max-width: 1000px){
        right: 2rem;
        top: 3rem;

        svg{
            font-size: 4rem;
        }
    } */

    @media(max-width: 1030px){
        right: 1rem;
        top: 1.5rem;
        
        svg{
            font-size: 3rem;
        }
    }

    @media(max-width: 800px){
        right: 2rem;
        top: 1.5rem;
        z-index: 1;
    }
`;function r2(){const[e,t]=c.useState(Wr.dark);function n(){e==Wr.dark?t(Wr.light):t(Wr.dark)}return R(J1,{theme:e,children:[L(ey,{}),L(n2,{onClick:()=>n(),children:e==Wr.dark?L($L,{}):L(NL,{})}),L(hx,{children:L(t2,{})})]})}Wl.createRoot(document.getElementById("root")).render(L(Ze.StrictMode,{children:L(r2,{})}));
