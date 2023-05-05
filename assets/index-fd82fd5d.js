function ap(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function up(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Fi={},sp={get exports(){return Fi},set exports(e){Fi=e}},go={},C={},cp={get exports(){return C},set exports(e){C=e}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gr=Symbol.for("react.element"),dp=Symbol.for("react.portal"),fp=Symbol.for("react.fragment"),pp=Symbol.for("react.strict_mode"),mp=Symbol.for("react.profiler"),hp=Symbol.for("react.provider"),gp=Symbol.for("react.context"),vp=Symbol.for("react.forward_ref"),yp=Symbol.for("react.suspense"),wp=Symbol.for("react.memo"),xp=Symbol.for("react.lazy"),Ku=Symbol.iterator;function Sp(e){return e===null||typeof e!="object"?null:(e=Ku&&e[Ku]||e["@@iterator"],typeof e=="function"?e:null)}var zc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mc=Object.assign,Tc={};function Jn(e,t,n){this.props=e,this.context=t,this.refs=Tc,this.updater=n||zc}Jn.prototype.isReactComponent={};Jn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Jn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Pc(){}Pc.prototype=Jn.prototype;function Ha(e,t,n){this.props=e,this.context=t,this.refs=Tc,this.updater=n||zc}var ba=Ha.prototype=new Pc;ba.constructor=Ha;Mc(ba,Jn.prototype);ba.isPureReactComponent=!0;var Xu=Array.isArray,_c=Object.prototype.hasOwnProperty,Va={current:null},$c={key:!0,ref:!0,__self:!0,__source:!0};function Nc(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)_c.call(t,r)&&!$c.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Gr,type:e,key:o,ref:l,props:i,_owner:Va.current}}function kp(e,t){return{$$typeof:Gr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Qa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gr}function Cp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Zu=/\/+/g;function nl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Cp(""+e.key):t.toString(36)}function Ei(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Gr:case dp:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+nl(l,0):r,Xu(i)?(n="",e!=null&&(n=e.replace(Zu,"$&/")+"/"),Ei(i,t,n,"",function(s){return s})):i!=null&&(Qa(i)&&(i=kp(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(Zu,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",Xu(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+nl(o,a);l+=Ei(o,t,n,u,i)}else if(u=Sp(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+nl(o,a++),l+=Ei(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ti(e,t,n){if(e==null)return e;var r=[],i=0;return Ei(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Ep(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ue={current:null},zi={transition:null},zp={ReactCurrentDispatcher:Ue,ReactCurrentBatchConfig:zi,ReactCurrentOwner:Va};X.Children={map:ti,forEach:function(e,t,n){ti(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ti(e,function(){t++}),t},toArray:function(e){return ti(e,function(t){return t})||[]},only:function(e){if(!Qa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=Jn;X.Fragment=fp;X.Profiler=mp;X.PureComponent=Ha;X.StrictMode=pp;X.Suspense=yp;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zp;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Mc({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Va.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)_c.call(t,u)&&!$c.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var s=0;s<u;s++)a[s]=arguments[s+2];r.children=a}return{$$typeof:Gr,type:e.type,key:i,ref:o,props:r,_owner:l}};X.createContext=function(e){return e={$$typeof:gp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hp,_context:e},e.Consumer=e};X.createElement=Nc;X.createFactory=function(e){var t=Nc.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:vp,render:e}};X.isValidElement=Qa;X.lazy=function(e){return{$$typeof:xp,_payload:{_status:-1,_result:e},_init:Ep}};X.memo=function(e,t){return{$$typeof:wp,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=zi.transition;zi.transition={};try{e()}finally{zi.transition=t}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(e,t){return Ue.current.useCallback(e,t)};X.useContext=function(e){return Ue.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return Ue.current.useDeferredValue(e)};X.useEffect=function(e,t){return Ue.current.useEffect(e,t)};X.useId=function(){return Ue.current.useId()};X.useImperativeHandle=function(e,t,n){return Ue.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return Ue.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return Ue.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return Ue.current.useMemo(e,t)};X.useReducer=function(e,t,n){return Ue.current.useReducer(e,t,n)};X.useRef=function(e){return Ue.current.useRef(e)};X.useState=function(e){return Ue.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return Ue.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return Ue.current.useTransition()};X.version="18.2.0";(function(e){e.exports=X})(cp);const je=up(C),Al=ap({__proto__:null,default:je},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp=C,Tp=Symbol.for("react.element"),Pp=Symbol.for("react.fragment"),_p=Object.prototype.hasOwnProperty,$p=Mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Np={key:!0,ref:!0,__self:!0,__source:!0};function Rc(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)_p.call(t,r)&&!Np.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Tp,type:e,key:o,ref:l,props:i,_owner:$p.current}}go.Fragment=Pp;go.jsx=Rc;go.jsxs=Rc;(function(e){e.exports=go})(sp);const S=Fi.jsx,Q=Fi.jsxs;var Ol={},Ll={},Rp={get exports(){return Ll},set exports(e){Ll=e}},qe={},Dl={},Ip={get exports(){return Dl},set exports(e){Dl=e}},Ic={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,B){var W=P.length;P.push(B);e:for(;0<W;){var ee=W-1>>>1,T=P[ee];if(0<i(T,B))P[ee]=B,P[W]=T,W=ee;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var B=P[0],W=P.pop();if(W!==B){P[0]=W;e:for(var ee=0,T=P.length,N=T>>>1;ee<N;){var R=2*(ee+1)-1,F=P[R],v=R+1,j=P[v];if(0>i(F,W))v<T&&0>i(j,F)?(P[ee]=j,P[v]=W,ee=v):(P[ee]=F,P[R]=W,ee=R);else if(v<T&&0>i(j,W))P[ee]=j,P[v]=W,ee=v;else break e}}return B}function i(P,B){var W=P.sortIndex-B.sortIndex;return W!==0?W:P.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],s=[],m=1,d=null,g=3,k=!1,x=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(P){for(var B=n(s);B!==null;){if(B.callback===null)r(s);else if(B.startTime<=P)r(s),B.sortIndex=B.expirationTime,t(u,B);else break;B=n(s)}}function y(P){if(w=!1,p(P),!x)if(n(u)!==null)x=!0,Ye(M);else{var B=n(s);B!==null&&Me(y,B.startTime-P)}}function M(P,B){x=!1,w&&(w=!1,f($),$=-1),k=!0;var W=g;try{for(p(B),d=n(u);d!==null&&(!(d.expirationTime>B)||P&&!he());){var ee=d.callback;if(typeof ee=="function"){d.callback=null,g=d.priorityLevel;var T=ee(d.expirationTime<=B);B=e.unstable_now(),typeof T=="function"?d.callback=T:d===n(u)&&r(u),p(B)}else r(u);d=n(u)}if(d!==null)var N=!0;else{var R=n(s);R!==null&&Me(y,R.startTime-B),N=!1}return N}finally{d=null,g=W,k=!1}}var _=!1,I=null,$=-1,Z=5,U=-1;function he(){return!(e.unstable_now()-U<Z)}function se(){if(I!==null){var P=e.unstable_now();U=P;var B=!0;try{B=I(!0,P)}finally{B?ye():(_=!1,I=null)}}else _=!1}var ye;if(typeof c=="function")ye=function(){c(se)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,Se=ze.port2;ze.port1.onmessage=se,ye=function(){Se.postMessage(null)}}else ye=function(){E(se,0)};function Ye(P){I=P,_||(_=!0,ye())}function Me(P,B){$=E(function(){P(e.unstable_now())},B)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){x||k||(x=!0,Ye(M))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(P){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var W=g;g=B;try{return P()}finally{g=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,B){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var W=g;g=P;try{return B()}finally{g=W}},e.unstable_scheduleCallback=function(P,B,W){var ee=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ee+W:ee):W=ee,P){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=W+T,P={id:m++,callback:B,priorityLevel:P,startTime:W,expirationTime:T,sortIndex:-1},W>ee?(P.sortIndex=W,t(s,P),n(u)===null&&P===n(s)&&(w?(f($),$=-1):w=!0,Me(y,W-ee))):(P.sortIndex=T,t(u,P),x||k||(x=!0,Ye(M))),P},e.unstable_shouldYield=he,e.unstable_wrapCallback=function(P){var B=g;return function(){var W=g;g=B;try{return P.apply(this,arguments)}finally{g=W}}}})(Ic);(function(e){e.exports=Ic})(Ip);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ac=C,Je=Dl;function z(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Oc=new Set,Pr={};function xn(e,t){Hn(e,t),Hn(e+"Capture",t)}function Hn(e,t){for(Pr[e]=t,e=0;e<t.length;e++)Oc.add(t[e])}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fl=Object.prototype.hasOwnProperty,Ap=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ju={},qu={};function Op(e){return Fl.call(qu,e)?!0:Fl.call(Ju,e)?!1:Ap.test(e)?qu[e]=!0:(Ju[e]=!0,!1)}function Lp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Dp(e,t,n,r){if(t===null||typeof t>"u"||Lp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function We(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var Ie={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ie[e]=new We(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ie[t]=new We(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ie[e]=new We(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ie[e]=new We(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ie[e]=new We(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ie[e]=new We(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ie[e]=new We(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ie[e]=new We(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ie[e]=new We(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ga=/[\-:]([a-z])/g;function Ya(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ga,Ya);Ie[t]=new We(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ga,Ya);Ie[t]=new We(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ga,Ya);Ie[t]=new We(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ie[e]=new We(e,1,!1,e.toLowerCase(),null,!1,!1)});Ie.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ie[e]=new We(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ka(e,t,n,r){var i=Ie.hasOwnProperty(t)?Ie[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Dp(t,n,i,r)&&(n=null),r||i===null?Op(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var It=Ac.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ni=Symbol.for("react.element"),En=Symbol.for("react.portal"),zn=Symbol.for("react.fragment"),Xa=Symbol.for("react.strict_mode"),jl=Symbol.for("react.profiler"),Lc=Symbol.for("react.provider"),Dc=Symbol.for("react.context"),Za=Symbol.for("react.forward_ref"),Bl=Symbol.for("react.suspense"),Ul=Symbol.for("react.suspense_list"),Ja=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),Fc=Symbol.for("react.offscreen"),es=Symbol.iterator;function or(e){return e===null||typeof e!="object"?null:(e=es&&e[es]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Object.assign,rl;function mr(e){if(rl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);rl=t&&t[1]||""}return`
`+rl+e}var il=!1;function ol(e,t){if(!e||il)return"";il=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var r=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){r=s}e.call(t.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var i=s.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{il=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?mr(e):""}function Fp(e){switch(e.tag){case 5:return mr(e.type);case 16:return mr("Lazy");case 13:return mr("Suspense");case 19:return mr("SuspenseList");case 0:case 2:case 15:return e=ol(e.type,!1),e;case 11:return e=ol(e.type.render,!1),e;case 1:return e=ol(e.type,!0),e;default:return""}}function Wl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zn:return"Fragment";case En:return"Portal";case jl:return"Profiler";case Xa:return"StrictMode";case Bl:return"Suspense";case Ul:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Dc:return(e.displayName||"Context")+".Consumer";case Lc:return(e._context.displayName||"Context")+".Provider";case Za:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ja:return t=e.displayName||null,t!==null?t:Wl(e.type)||"Memo";case Lt:t=e._payload,e=e._init;try{return Wl(e(t))}catch{}}return null}function jp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wl(t);case 8:return t===Xa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function en(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bp(e){var t=jc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ri(e){e._valueTracker||(e._valueTracker=Bp(e))}function Bc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=jc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Hl(e,t){var n=t.checked;return pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ts(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=en(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Uc(e,t){t=t.checked,t!=null&&Ka(e,"checked",t,!1)}function bl(e,t){Uc(e,t);var n=en(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Vl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Vl(e,t.type,en(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ns(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Vl(e,t,n){(t!=="number"||ji(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var hr=Array.isArray;function Dn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+en(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ql(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(z(91));return pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function rs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(z(92));if(hr(n)){if(1<n.length)throw Error(z(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:en(n)}}function Wc(e,t){var n=en(t.value),r=en(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function is(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Hc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Hc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ii,bc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ii=ii||document.createElement("div"),ii.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ii.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _r(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Up=["Webkit","ms","Moz","O"];Object.keys(yr).forEach(function(e){Up.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),yr[t]=yr[e]})});function Vc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||yr.hasOwnProperty(e)&&yr[e]?(""+t).trim():t+"px"}function Qc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Vc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Wp=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yl(e,t){if(t){if(Wp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(z(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(z(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(z(61))}if(t.style!=null&&typeof t.style!="object")throw Error(z(62))}}function Kl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xl=null;function qa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zl=null,Fn=null,jn=null;function os(e){if(e=Xr(e)){if(typeof Zl!="function")throw Error(z(280));var t=e.stateNode;t&&(t=So(t),Zl(e.stateNode,e.type,t))}}function Gc(e){Fn?jn?jn.push(e):jn=[e]:Fn=e}function Yc(){if(Fn){var e=Fn,t=jn;if(jn=Fn=null,os(e),t)for(e=0;e<t.length;e++)os(t[e])}}function Kc(e,t){return e(t)}function Xc(){}var ll=!1;function Zc(e,t,n){if(ll)return e(t,n);ll=!0;try{return Kc(e,t,n)}finally{ll=!1,(Fn!==null||jn!==null)&&(Xc(),Yc())}}function $r(e,t){var n=e.stateNode;if(n===null)return null;var r=So(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(z(231,t,typeof n));return n}var Jl=!1;if(_t)try{var lr={};Object.defineProperty(lr,"passive",{get:function(){Jl=!0}}),window.addEventListener("test",lr,lr),window.removeEventListener("test",lr,lr)}catch{Jl=!1}function Hp(e,t,n,r,i,o,l,a,u){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(m){this.onError(m)}}var wr=!1,Bi=null,Ui=!1,ql=null,bp={onError:function(e){wr=!0,Bi=e}};function Vp(e,t,n,r,i,o,l,a,u){wr=!1,Bi=null,Hp.apply(bp,arguments)}function Qp(e,t,n,r,i,o,l,a,u){if(Vp.apply(this,arguments),wr){if(wr){var s=Bi;wr=!1,Bi=null}else throw Error(z(198));Ui||(Ui=!0,ql=s)}}function Sn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Jc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ls(e){if(Sn(e)!==e)throw Error(z(188))}function Gp(e){var t=e.alternate;if(!t){if(t=Sn(e),t===null)throw Error(z(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return ls(i),e;if(o===r)return ls(i),t;o=o.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?e:t}function qc(e){return e=Gp(e),e!==null?ed(e):null}function ed(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ed(e);if(t!==null)return t;e=e.sibling}return null}var td=Je.unstable_scheduleCallback,as=Je.unstable_cancelCallback,Yp=Je.unstable_shouldYield,Kp=Je.unstable_requestPaint,ve=Je.unstable_now,Xp=Je.unstable_getCurrentPriorityLevel,eu=Je.unstable_ImmediatePriority,nd=Je.unstable_UserBlockingPriority,Wi=Je.unstable_NormalPriority,Zp=Je.unstable_LowPriority,rd=Je.unstable_IdlePriority,vo=null,kt=null;function Jp(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(vo,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:tm,qp=Math.log,em=Math.LN2;function tm(e){return e>>>=0,e===0?32:31-(qp(e)/em|0)|0}var oi=64,li=4194304;function gr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Hi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=gr(a):(o&=l,o!==0&&(r=gr(o)))}else l=n&~i,l!==0?r=gr(l):o!==0&&(r=gr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-gt(t),i=1<<n,r|=e[n],t&=~i;return r}function nm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-gt(o),a=1<<l,u=i[l];u===-1?(!(a&n)||a&r)&&(i[l]=nm(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function ea(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function id(){var e=oi;return oi<<=1,!(oi&4194240)&&(oi=64),e}function al(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=n}function im(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-gt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function tu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-gt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var re=0;function od(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ld,nu,ad,ud,sd,ta=!1,ai=[],Ht=null,bt=null,Vt=null,Nr=new Map,Rr=new Map,Ft=[],om="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function us(e,t){switch(e){case"focusin":case"focusout":Ht=null;break;case"dragenter":case"dragleave":bt=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":Nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rr.delete(t.pointerId)}}function ar(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Xr(t),t!==null&&nu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function lm(e,t,n,r,i){switch(t){case"focusin":return Ht=ar(Ht,e,t,n,r,i),!0;case"dragenter":return bt=ar(bt,e,t,n,r,i),!0;case"mouseover":return Vt=ar(Vt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Nr.set(o,ar(Nr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Rr.set(o,ar(Rr.get(o)||null,e,t,n,r,i)),!0}return!1}function cd(e){var t=un(e.target);if(t!==null){var n=Sn(t);if(n!==null){if(t=n.tag,t===13){if(t=Jc(n),t!==null){e.blockedOn=t,sd(e.priority,function(){ad(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=na(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Xl=r,n.target.dispatchEvent(r),Xl=null}else return t=Xr(n),t!==null&&nu(t),e.blockedOn=n,!1;t.shift()}return!0}function ss(e,t,n){Mi(e)&&n.delete(t)}function am(){ta=!1,Ht!==null&&Mi(Ht)&&(Ht=null),bt!==null&&Mi(bt)&&(bt=null),Vt!==null&&Mi(Vt)&&(Vt=null),Nr.forEach(ss),Rr.forEach(ss)}function ur(e,t){e.blockedOn===t&&(e.blockedOn=null,ta||(ta=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,am)))}function Ir(e){function t(i){return ur(i,e)}if(0<ai.length){ur(ai[0],e);for(var n=1;n<ai.length;n++){var r=ai[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ht!==null&&ur(Ht,e),bt!==null&&ur(bt,e),Vt!==null&&ur(Vt,e),Nr.forEach(t),Rr.forEach(t),n=0;n<Ft.length;n++)r=Ft[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ft.length&&(n=Ft[0],n.blockedOn===null);)cd(n),n.blockedOn===null&&Ft.shift()}var Bn=It.ReactCurrentBatchConfig,bi=!0;function um(e,t,n,r){var i=re,o=Bn.transition;Bn.transition=null;try{re=1,ru(e,t,n,r)}finally{re=i,Bn.transition=o}}function sm(e,t,n,r){var i=re,o=Bn.transition;Bn.transition=null;try{re=4,ru(e,t,n,r)}finally{re=i,Bn.transition=o}}function ru(e,t,n,r){if(bi){var i=na(e,t,n,r);if(i===null)vl(e,t,r,Vi,n),us(e,r);else if(lm(i,e,t,n,r))r.stopPropagation();else if(us(e,r),t&4&&-1<om.indexOf(e)){for(;i!==null;){var o=Xr(i);if(o!==null&&ld(o),o=na(e,t,n,r),o===null&&vl(e,t,r,Vi,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else vl(e,t,r,null,n)}}var Vi=null;function na(e,t,n,r){if(Vi=null,e=qa(r),e=un(e),e!==null)if(t=Sn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Jc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vi=e,null}function dd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xp()){case eu:return 1;case nd:return 4;case Wi:case Zp:return 16;case rd:return 536870912;default:return 16}default:return 16}}var Bt=null,iu=null,Ti=null;function fd(){if(Ti)return Ti;var e,t=iu,n=t.length,r,i="value"in Bt?Bt.value:Bt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return Ti=i.slice(e,1<r?1-r:void 0)}function Pi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ui(){return!0}function cs(){return!1}function et(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ui:cs,this.isPropagationStopped=cs,this}return pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ui)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ui)},persist:function(){},isPersistent:ui}),t}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ou=et(qn),Kr=pe({},qn,{view:0,detail:0}),cm=et(Kr),ul,sl,sr,yo=pe({},Kr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sr&&(sr&&e.type==="mousemove"?(ul=e.screenX-sr.screenX,sl=e.screenY-sr.screenY):sl=ul=0,sr=e),ul)},movementY:function(e){return"movementY"in e?e.movementY:sl}}),ds=et(yo),dm=pe({},yo,{dataTransfer:0}),fm=et(dm),pm=pe({},Kr,{relatedTarget:0}),cl=et(pm),mm=pe({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),hm=et(mm),gm=pe({},qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vm=et(gm),ym=pe({},qn,{data:0}),fs=et(ym),wm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function km(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sm[e])?!!t[e]:!1}function lu(){return km}var Cm=pe({},Kr,{key:function(e){if(e.key){var t=wm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lu,charCode:function(e){return e.type==="keypress"?Pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Em=et(Cm),zm=pe({},yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ps=et(zm),Mm=pe({},Kr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lu}),Tm=et(Mm),Pm=pe({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),_m=et(Pm),$m=pe({},yo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Nm=et($m),Rm=[9,13,27,32],au=_t&&"CompositionEvent"in window,xr=null;_t&&"documentMode"in document&&(xr=document.documentMode);var Im=_t&&"TextEvent"in window&&!xr,pd=_t&&(!au||xr&&8<xr&&11>=xr),ms=String.fromCharCode(32),hs=!1;function md(e,t){switch(e){case"keyup":return Rm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mn=!1;function Am(e,t){switch(e){case"compositionend":return hd(t);case"keypress":return t.which!==32?null:(hs=!0,ms);case"textInput":return e=t.data,e===ms&&hs?null:e;default:return null}}function Om(e,t){if(Mn)return e==="compositionend"||!au&&md(e,t)?(e=fd(),Ti=iu=Bt=null,Mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pd&&t.locale!=="ko"?null:t.data;default:return null}}var Lm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Lm[e.type]:t==="textarea"}function gd(e,t,n,r){Gc(r),t=Qi(t,"onChange"),0<t.length&&(n=new ou("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Sr=null,Ar=null;function Dm(e){Td(e,0)}function wo(e){var t=_n(e);if(Bc(t))return e}function Fm(e,t){if(e==="change")return t}var vd=!1;if(_t){var dl;if(_t){var fl="oninput"in document;if(!fl){var vs=document.createElement("div");vs.setAttribute("oninput","return;"),fl=typeof vs.oninput=="function"}dl=fl}else dl=!1;vd=dl&&(!document.documentMode||9<document.documentMode)}function ys(){Sr&&(Sr.detachEvent("onpropertychange",yd),Ar=Sr=null)}function yd(e){if(e.propertyName==="value"&&wo(Ar)){var t=[];gd(t,Ar,e,qa(e)),Zc(Dm,t)}}function jm(e,t,n){e==="focusin"?(ys(),Sr=t,Ar=n,Sr.attachEvent("onpropertychange",yd)):e==="focusout"&&ys()}function Bm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wo(Ar)}function Um(e,t){if(e==="click")return wo(t)}function Wm(e,t){if(e==="input"||e==="change")return wo(t)}function Hm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var yt=typeof Object.is=="function"?Object.is:Hm;function Or(e,t){if(yt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Fl.call(t,i)||!yt(e[i],t[i]))return!1}return!0}function ws(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xs(e,t){var n=ws(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ws(n)}}function wd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xd(){for(var e=window,t=ji();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ji(e.document)}return t}function uu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function bm(e){var t=xd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wd(n.ownerDocument.documentElement,n)){if(r!==null&&uu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=xs(n,o);var l=xs(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vm=_t&&"documentMode"in document&&11>=document.documentMode,Tn=null,ra=null,kr=null,ia=!1;function Ss(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ia||Tn==null||Tn!==ji(r)||(r=Tn,"selectionStart"in r&&uu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),kr&&Or(kr,r)||(kr=r,r=Qi(ra,"onSelect"),0<r.length&&(t=new ou("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Tn)))}function si(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pn={animationend:si("Animation","AnimationEnd"),animationiteration:si("Animation","AnimationIteration"),animationstart:si("Animation","AnimationStart"),transitionend:si("Transition","TransitionEnd")},pl={},Sd={};_t&&(Sd=document.createElement("div").style,"AnimationEvent"in window||(delete Pn.animationend.animation,delete Pn.animationiteration.animation,delete Pn.animationstart.animation),"TransitionEvent"in window||delete Pn.transitionend.transition);function xo(e){if(pl[e])return pl[e];if(!Pn[e])return e;var t=Pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sd)return pl[e]=t[n];return e}var kd=xo("animationend"),Cd=xo("animationiteration"),Ed=xo("animationstart"),zd=xo("transitionend"),Md=new Map,ks="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nn(e,t){Md.set(e,t),xn(t,[e])}for(var ml=0;ml<ks.length;ml++){var hl=ks[ml],Qm=hl.toLowerCase(),Gm=hl[0].toUpperCase()+hl.slice(1);nn(Qm,"on"+Gm)}nn(kd,"onAnimationEnd");nn(Cd,"onAnimationIteration");nn(Ed,"onAnimationStart");nn("dblclick","onDoubleClick");nn("focusin","onFocus");nn("focusout","onBlur");nn(zd,"onTransitionEnd");Hn("onMouseEnter",["mouseout","mouseover"]);Hn("onMouseLeave",["mouseout","mouseover"]);Hn("onPointerEnter",["pointerout","pointerover"]);Hn("onPointerLeave",["pointerout","pointerover"]);xn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xn("onBeforeInput",["compositionend","keypress","textInput","paste"]);xn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ym=new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));function Cs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Qp(r,t,void 0,e),e.currentTarget=null}function Td(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,s=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;Cs(i,a,s),o=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,s=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;Cs(i,a,s),o=u}}}if(Ui)throw e=ql,Ui=!1,ql=null,e}function ae(e,t){var n=t[sa];n===void 0&&(n=t[sa]=new Set);var r=e+"__bubble";n.has(r)||(Pd(t,e,2,!1),n.add(r))}function gl(e,t,n){var r=0;t&&(r|=4),Pd(n,e,r,t)}var ci="_reactListening"+Math.random().toString(36).slice(2);function Lr(e){if(!e[ci]){e[ci]=!0,Oc.forEach(function(n){n!=="selectionchange"&&(Ym.has(n)||gl(n,!1,e),gl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ci]||(t[ci]=!0,gl("selectionchange",!1,t))}}function Pd(e,t,n,r){switch(dd(t)){case 1:var i=um;break;case 4:i=sm;break;default:i=ru}n=i.bind(null,t,n,e),i=void 0,!Jl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function vl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;a!==null;){if(l=un(a),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}a=a.parentNode}}r=r.return}Zc(function(){var s=o,m=qa(n),d=[];e:{var g=Md.get(e);if(g!==void 0){var k=ou,x=e;switch(e){case"keypress":if(Pi(n)===0)break e;case"keydown":case"keyup":k=Em;break;case"focusin":x="focus",k=cl;break;case"focusout":x="blur",k=cl;break;case"beforeblur":case"afterblur":k=cl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=ds;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=fm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Tm;break;case kd:case Cd:case Ed:k=hm;break;case zd:k=_m;break;case"scroll":k=cm;break;case"wheel":k=Nm;break;case"copy":case"cut":case"paste":k=vm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=ps}var w=(t&4)!==0,E=!w&&e==="scroll",f=w?g!==null?g+"Capture":null:g;w=[];for(var c=s,p;c!==null;){p=c;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,f!==null&&(y=$r(c,f),y!=null&&w.push(Dr(c,y,p)))),E)break;c=c.return}0<w.length&&(g=new k(g,x,null,n,m),d.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",g&&n!==Xl&&(x=n.relatedTarget||n.fromElement)&&(un(x)||x[$t]))break e;if((k||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,k?(x=n.relatedTarget||n.toElement,k=s,x=x?un(x):null,x!==null&&(E=Sn(x),x!==E||x.tag!==5&&x.tag!==6)&&(x=null)):(k=null,x=s),k!==x)){if(w=ds,y="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(w=ps,y="onPointerLeave",f="onPointerEnter",c="pointer"),E=k==null?g:_n(k),p=x==null?g:_n(x),g=new w(y,c+"leave",k,n,m),g.target=E,g.relatedTarget=p,y=null,un(m)===s&&(w=new w(f,c+"enter",x,n,m),w.target=p,w.relatedTarget=E,y=w),E=y,k&&x)t:{for(w=k,f=x,c=0,p=w;p;p=Cn(p))c++;for(p=0,y=f;y;y=Cn(y))p++;for(;0<c-p;)w=Cn(w),c--;for(;0<p-c;)f=Cn(f),p--;for(;c--;){if(w===f||f!==null&&w===f.alternate)break t;w=Cn(w),f=Cn(f)}w=null}else w=null;k!==null&&Es(d,g,k,w,!1),x!==null&&E!==null&&Es(d,E,x,w,!0)}}e:{if(g=s?_n(s):window,k=g.nodeName&&g.nodeName.toLowerCase(),k==="select"||k==="input"&&g.type==="file")var M=Fm;else if(gs(g))if(vd)M=Wm;else{M=Bm;var _=jm}else(k=g.nodeName)&&k.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(M=Um);if(M&&(M=M(e,s))){gd(d,M,n,m);break e}_&&_(e,g,s),e==="focusout"&&(_=g._wrapperState)&&_.controlled&&g.type==="number"&&Vl(g,"number",g.value)}switch(_=s?_n(s):window,e){case"focusin":(gs(_)||_.contentEditable==="true")&&(Tn=_,ra=s,kr=null);break;case"focusout":kr=ra=Tn=null;break;case"mousedown":ia=!0;break;case"contextmenu":case"mouseup":case"dragend":ia=!1,Ss(d,n,m);break;case"selectionchange":if(Vm)break;case"keydown":case"keyup":Ss(d,n,m)}var I;if(au)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else Mn?md(e,n)&&($="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($="onCompositionStart");$&&(pd&&n.locale!=="ko"&&(Mn||$!=="onCompositionStart"?$==="onCompositionEnd"&&Mn&&(I=fd()):(Bt=m,iu="value"in Bt?Bt.value:Bt.textContent,Mn=!0)),_=Qi(s,$),0<_.length&&($=new fs($,e,null,n,m),d.push({event:$,listeners:_}),I?$.data=I:(I=hd(n),I!==null&&($.data=I)))),(I=Im?Am(e,n):Om(e,n))&&(s=Qi(s,"onBeforeInput"),0<s.length&&(m=new fs("onBeforeInput","beforeinput",null,n,m),d.push({event:m,listeners:s}),m.data=I))}Td(d,t)})}function Dr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=$r(e,n),o!=null&&r.unshift(Dr(e,o,i)),o=$r(e,t),o!=null&&r.push(Dr(e,o,i))),e=e.return}return r}function Cn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Es(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,s=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&s!==null&&(a=s,i?(u=$r(n,o),u!=null&&l.unshift(Dr(n,u,a))):i||(u=$r(n,o),u!=null&&l.push(Dr(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Km=/\r\n?/g,Xm=/\u0000|\uFFFD/g;function zs(e){return(typeof e=="string"?e:""+e).replace(Km,`
`).replace(Xm,"")}function di(e,t,n){if(t=zs(t),zs(e)!==t&&n)throw Error(z(425))}function Gi(){}var oa=null,la=null;function aa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ua=typeof setTimeout=="function"?setTimeout:void 0,Zm=typeof clearTimeout=="function"?clearTimeout:void 0,Ms=typeof Promise=="function"?Promise:void 0,Jm=typeof queueMicrotask=="function"?queueMicrotask:typeof Ms<"u"?function(e){return Ms.resolve(null).then(e).catch(qm)}:ua;function qm(e){setTimeout(function(){throw e})}function yl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ir(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ir(t)}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ts(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var er=Math.random().toString(36).slice(2),St="__reactFiber$"+er,Fr="__reactProps$"+er,$t="__reactContainer$"+er,sa="__reactEvents$"+er,eh="__reactListeners$"+er,th="__reactHandles$"+er;function un(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$t]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ts(e);e!==null;){if(n=e[St])return n;e=Ts(e)}return t}e=n,n=e.parentNode}return null}function Xr(e){return e=e[St]||e[$t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(z(33))}function So(e){return e[Fr]||null}var ca=[],$n=-1;function rn(e){return{current:e}}function ue(e){0>$n||(e.current=ca[$n],ca[$n]=null,$n--)}function le(e,t){$n++,ca[$n]=e.current,e.current=t}var tn={},De=rn(tn),Ve=rn(!1),pn=tn;function bn(e,t){var n=e.type.contextTypes;if(!n)return tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Qe(e){return e=e.childContextTypes,e!=null}function Yi(){ue(Ve),ue(De)}function Ps(e,t,n){if(De.current!==tn)throw Error(z(168));le(De,t),le(Ve,n)}function _d(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(z(108,jp(e)||"Unknown",i));return pe({},n,r)}function Ki(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tn,pn=De.current,le(De,e),le(Ve,Ve.current),!0}function _s(e,t,n){var r=e.stateNode;if(!r)throw Error(z(169));n?(e=_d(e,t,pn),r.__reactInternalMemoizedMergedChildContext=e,ue(Ve),ue(De),le(De,e)):ue(Ve),le(Ve,n)}var zt=null,ko=!1,wl=!1;function $d(e){zt===null?zt=[e]:zt.push(e)}function nh(e){ko=!0,$d(e)}function on(){if(!wl&&zt!==null){wl=!0;var e=0,t=re;try{var n=zt;for(re=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}zt=null,ko=!1}catch(i){throw zt!==null&&(zt=zt.slice(e+1)),td(eu,on),i}finally{re=t,wl=!1}}return null}var Nn=[],Rn=0,Xi=null,Zi=0,nt=[],rt=0,mn=null,Mt=1,Tt="";function ln(e,t){Nn[Rn++]=Zi,Nn[Rn++]=Xi,Xi=e,Zi=t}function Nd(e,t,n){nt[rt++]=Mt,nt[rt++]=Tt,nt[rt++]=mn,mn=e;var r=Mt;e=Tt;var i=32-gt(r)-1;r&=~(1<<i),n+=1;var o=32-gt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Mt=1<<32-gt(t)+i|n<<i|r,Tt=o+e}else Mt=1<<o|n<<i|r,Tt=e}function su(e){e.return!==null&&(ln(e,1),Nd(e,1,0))}function cu(e){for(;e===Xi;)Xi=Nn[--Rn],Nn[Rn]=null,Zi=Nn[--Rn],Nn[Rn]=null;for(;e===mn;)mn=nt[--rt],nt[rt]=null,Tt=nt[--rt],nt[rt]=null,Mt=nt[--rt],nt[rt]=null}var Ze=null,Xe=null,ce=!1,mt=null;function Rd(e,t){var n=it(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $s(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ze=e,Xe=Qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ze=e,Xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=mn!==null?{id:Mt,overflow:Tt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=it(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ze=e,Xe=null,!0):!1;default:return!1}}function da(e){return(e.mode&1)!==0&&(e.flags&128)===0}function fa(e){if(ce){var t=Xe;if(t){var n=t;if(!$s(e,t)){if(da(e))throw Error(z(418));t=Qt(n.nextSibling);var r=Ze;t&&$s(e,t)?Rd(r,n):(e.flags=e.flags&-4097|2,ce=!1,Ze=e)}}else{if(da(e))throw Error(z(418));e.flags=e.flags&-4097|2,ce=!1,Ze=e}}}function Ns(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function fi(e){if(e!==Ze)return!1;if(!ce)return Ns(e),ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!aa(e.type,e.memoizedProps)),t&&(t=Xe)){if(da(e))throw Id(),Error(z(418));for(;t;)Rd(e,t),t=Qt(t.nextSibling)}if(Ns(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(z(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Xe=Qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Xe=null}}else Xe=Ze?Qt(e.stateNode.nextSibling):null;return!0}function Id(){for(var e=Xe;e;)e=Qt(e.nextSibling)}function Vn(){Xe=Ze=null,ce=!1}function du(e){mt===null?mt=[e]:mt.push(e)}var rh=It.ReactCurrentBatchConfig;function ft(e,t){if(e&&e.defaultProps){t=pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ji=rn(null),qi=null,In=null,fu=null;function pu(){fu=In=qi=null}function mu(e){var t=Ji.current;ue(Ji),e._currentValue=t}function pa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Un(e,t){qi=e,fu=In=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(be=!0),e.firstContext=null)}function lt(e){var t=e._currentValue;if(fu!==e)if(e={context:e,memoizedValue:t,next:null},In===null){if(qi===null)throw Error(z(308));In=e,qi.dependencies={lanes:0,firstContext:e}}else In=In.next=e;return t}var sn=null;function hu(e){sn===null?sn=[e]:sn.push(e)}function Ad(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,hu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Nt(e,r)}function Nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dt=!1;function gu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Od(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Nt(e,n)}return i=r.interleaved,i===null?(t.next=t,hu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Nt(e,n)}function _i(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tu(e,n)}}function Rs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function eo(e,t,n,r){var i=e.updateQueue;Dt=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,s=u.next;u.next=null,l===null?o=s:l.next=s,l=u;var m=e.alternate;m!==null&&(m=m.updateQueue,a=m.lastBaseUpdate,a!==l&&(a===null?m.firstBaseUpdate=s:a.next=s,m.lastBaseUpdate=u))}if(o!==null){var d=i.baseState;l=0,m=s=u=null,a=o;do{var g=a.lane,k=a.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,w=a;switch(g=t,k=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){d=x.call(k,d,g);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,g=typeof x=="function"?x.call(k,d,g):x,g==null)break e;d=pe({},d,g);break e;case 2:Dt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else k={eventTime:k,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},m===null?(s=m=k,u=d):m=m.next=k,l|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(m===null&&(u=d),i.baseState=u,i.firstBaseUpdate=s,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);gn|=l,e.lanes=l,e.memoizedState=d}}function Is(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var Ld=new Ac.Component().refs;function ma(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Co={isMounted:function(e){return(e=e._reactInternals)?Sn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Be(),i=Kt(e),o=Pt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Gt(e,o,i),t!==null&&(vt(t,e,i,r),_i(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Be(),i=Kt(e),o=Pt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Gt(e,o,i),t!==null&&(vt(t,e,i,r),_i(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Be(),r=Kt(e),i=Pt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Gt(e,i,r),t!==null&&(vt(t,e,r,n),_i(t,e,r))}};function As(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Or(n,r)||!Or(i,o):!0}function Dd(e,t,n){var r=!1,i=tn,o=t.contextType;return typeof o=="object"&&o!==null?o=lt(o):(i=Qe(t)?pn:De.current,r=t.contextTypes,o=(r=r!=null)?bn(e,i):tn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Co,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Os(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Co.enqueueReplaceState(t,t.state,null)}function ha(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Ld,gu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=lt(o):(o=Qe(t)?pn:De.current,i.context=bn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ma(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Co.enqueueReplaceState(i,i.state,null),eo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function cr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===Ld&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,e))}return e}function pi(e,t){throw e=Object.prototype.toString.call(t),Error(z(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ls(e){var t=e._init;return t(e._payload)}function Fd(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=Xt(f,c),f.index=0,f.sibling=null,f}function o(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,p,y){return c===null||c.tag!==6?(c=Ml(p,f.mode,y),c.return=f,c):(c=i(c,p),c.return=f,c)}function u(f,c,p,y){var M=p.type;return M===zn?m(f,c,p.props.children,y,p.key):c!==null&&(c.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Lt&&Ls(M)===c.type)?(y=i(c,p.props),y.ref=cr(f,c,p),y.return=f,y):(y=Oi(p.type,p.key,p.props,null,f.mode,y),y.ref=cr(f,c,p),y.return=f,y)}function s(f,c,p,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=Tl(p,f.mode,y),c.return=f,c):(c=i(c,p.children||[]),c.return=f,c)}function m(f,c,p,y,M){return c===null||c.tag!==7?(c=fn(p,f.mode,y,M),c.return=f,c):(c=i(c,p),c.return=f,c)}function d(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=Ml(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ni:return p=Oi(c.type,c.key,c.props,null,f.mode,p),p.ref=cr(f,null,c),p.return=f,p;case En:return c=Tl(c,f.mode,p),c.return=f,c;case Lt:var y=c._init;return d(f,y(c._payload),p)}if(hr(c)||or(c))return c=fn(c,f.mode,p,null),c.return=f,c;pi(f,c)}return null}function g(f,c,p,y){var M=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return M!==null?null:a(f,c,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ni:return p.key===M?u(f,c,p,y):null;case En:return p.key===M?s(f,c,p,y):null;case Lt:return M=p._init,g(f,c,M(p._payload),y)}if(hr(p)||or(p))return M!==null?null:m(f,c,p,y,null);pi(f,p)}return null}function k(f,c,p,y,M){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(p)||null,a(c,f,""+y,M);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ni:return f=f.get(y.key===null?p:y.key)||null,u(c,f,y,M);case En:return f=f.get(y.key===null?p:y.key)||null,s(c,f,y,M);case Lt:var _=y._init;return k(f,c,p,_(y._payload),M)}if(hr(y)||or(y))return f=f.get(p)||null,m(c,f,y,M,null);pi(c,y)}return null}function x(f,c,p,y){for(var M=null,_=null,I=c,$=c=0,Z=null;I!==null&&$<p.length;$++){I.index>$?(Z=I,I=null):Z=I.sibling;var U=g(f,I,p[$],y);if(U===null){I===null&&(I=Z);break}e&&I&&U.alternate===null&&t(f,I),c=o(U,c,$),_===null?M=U:_.sibling=U,_=U,I=Z}if($===p.length)return n(f,I),ce&&ln(f,$),M;if(I===null){for(;$<p.length;$++)I=d(f,p[$],y),I!==null&&(c=o(I,c,$),_===null?M=I:_.sibling=I,_=I);return ce&&ln(f,$),M}for(I=r(f,I);$<p.length;$++)Z=k(I,f,$,p[$],y),Z!==null&&(e&&Z.alternate!==null&&I.delete(Z.key===null?$:Z.key),c=o(Z,c,$),_===null?M=Z:_.sibling=Z,_=Z);return e&&I.forEach(function(he){return t(f,he)}),ce&&ln(f,$),M}function w(f,c,p,y){var M=or(p);if(typeof M!="function")throw Error(z(150));if(p=M.call(p),p==null)throw Error(z(151));for(var _=M=null,I=c,$=c=0,Z=null,U=p.next();I!==null&&!U.done;$++,U=p.next()){I.index>$?(Z=I,I=null):Z=I.sibling;var he=g(f,I,U.value,y);if(he===null){I===null&&(I=Z);break}e&&I&&he.alternate===null&&t(f,I),c=o(he,c,$),_===null?M=he:_.sibling=he,_=he,I=Z}if(U.done)return n(f,I),ce&&ln(f,$),M;if(I===null){for(;!U.done;$++,U=p.next())U=d(f,U.value,y),U!==null&&(c=o(U,c,$),_===null?M=U:_.sibling=U,_=U);return ce&&ln(f,$),M}for(I=r(f,I);!U.done;$++,U=p.next())U=k(I,f,$,U.value,y),U!==null&&(e&&U.alternate!==null&&I.delete(U.key===null?$:U.key),c=o(U,c,$),_===null?M=U:_.sibling=U,_=U);return e&&I.forEach(function(se){return t(f,se)}),ce&&ln(f,$),M}function E(f,c,p,y){if(typeof p=="object"&&p!==null&&p.type===zn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ni:e:{for(var M=p.key,_=c;_!==null;){if(_.key===M){if(M=p.type,M===zn){if(_.tag===7){n(f,_.sibling),c=i(_,p.props.children),c.return=f,f=c;break e}}else if(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Lt&&Ls(M)===_.type){n(f,_.sibling),c=i(_,p.props),c.ref=cr(f,_,p),c.return=f,f=c;break e}n(f,_);break}else t(f,_);_=_.sibling}p.type===zn?(c=fn(p.props.children,f.mode,y,p.key),c.return=f,f=c):(y=Oi(p.type,p.key,p.props,null,f.mode,y),y.ref=cr(f,c,p),y.return=f,f=y)}return l(f);case En:e:{for(_=p.key;c!==null;){if(c.key===_)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=i(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Tl(p,f.mode,y),c.return=f,f=c}return l(f);case Lt:return _=p._init,E(f,c,_(p._payload),y)}if(hr(p))return x(f,c,p,y);if(or(p))return w(f,c,p,y);pi(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,p),c.return=f,f=c):(n(f,c),c=Ml(p,f.mode,y),c.return=f,f=c),l(f)):n(f,c)}return E}var Qn=Fd(!0),jd=Fd(!1),Zr={},Ct=rn(Zr),jr=rn(Zr),Br=rn(Zr);function cn(e){if(e===Zr)throw Error(z(174));return e}function vu(e,t){switch(le(Br,t),le(jr,e),le(Ct,Zr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Gl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Gl(t,e)}ue(Ct),le(Ct,t)}function Gn(){ue(Ct),ue(jr),ue(Br)}function Bd(e){cn(Br.current);var t=cn(Ct.current),n=Gl(t,e.type);t!==n&&(le(jr,e),le(Ct,n))}function yu(e){jr.current===e&&(ue(Ct),ue(jr))}var de=rn(0);function to(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var xl=[];function wu(){for(var e=0;e<xl.length;e++)xl[e]._workInProgressVersionPrimary=null;xl.length=0}var $i=It.ReactCurrentDispatcher,Sl=It.ReactCurrentBatchConfig,hn=0,fe=null,ke=null,Te=null,no=!1,Cr=!1,Ur=0,ih=0;function Ae(){throw Error(z(321))}function xu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!yt(e[n],t[n]))return!1;return!0}function Su(e,t,n,r,i,o){if(hn=o,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$i.current=e===null||e.memoizedState===null?uh:sh,e=n(r,i),Cr){o=0;do{if(Cr=!1,Ur=0,25<=o)throw Error(z(301));o+=1,Te=ke=null,t.updateQueue=null,$i.current=ch,e=n(r,i)}while(Cr)}if($i.current=ro,t=ke!==null&&ke.next!==null,hn=0,Te=ke=fe=null,no=!1,t)throw Error(z(300));return e}function ku(){var e=Ur!==0;return Ur=0,e}function xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?fe.memoizedState=Te=e:Te=Te.next=e,Te}function at(){if(ke===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=Te===null?fe.memoizedState:Te.next;if(t!==null)Te=t,ke=e;else{if(e===null)throw Error(z(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Te===null?fe.memoizedState=Te=e:Te=Te.next=e}return Te}function Wr(e,t){return typeof t=="function"?t(e):t}function kl(e){var t=at(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=ke,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,u=null,s=o;do{var m=s.lane;if((hn&m)===m)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var d={lane:m,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(a=u=d,l=r):u=u.next=d,fe.lanes|=m,gn|=m}s=s.next}while(s!==null&&s!==o);u===null?l=r:u.next=a,yt(r,t.memoizedState)||(be=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,fe.lanes|=o,gn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Cl(e){var t=at(),n=t.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);yt(o,t.memoizedState)||(be=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ud(){}function Wd(e,t){var n=fe,r=at(),i=t(),o=!yt(r.memoizedState,i);if(o&&(r.memoizedState=i,be=!0),r=r.queue,Cu(Vd.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,Hr(9,bd.bind(null,n,r,i,t),void 0,null),Pe===null)throw Error(z(349));hn&30||Hd(n,t,i)}return i}function Hd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bd(e,t,n,r){t.value=n,t.getSnapshot=r,Qd(t)&&Gd(e)}function Vd(e,t,n){return n(function(){Qd(t)&&Gd(e)})}function Qd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!yt(e,n)}catch{return!0}}function Gd(e){var t=Nt(e,1);t!==null&&vt(t,e,1,-1)}function Ds(e){var t=xt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wr,lastRenderedState:e},t.queue=e,e=e.dispatch=ah.bind(null,fe,e),[t.memoizedState,e]}function Hr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Yd(){return at().memoizedState}function Ni(e,t,n,r){var i=xt();fe.flags|=e,i.memoizedState=Hr(1|t,n,void 0,r===void 0?null:r)}function Eo(e,t,n,r){var i=at();r=r===void 0?null:r;var o=void 0;if(ke!==null){var l=ke.memoizedState;if(o=l.destroy,r!==null&&xu(r,l.deps)){i.memoizedState=Hr(t,n,o,r);return}}fe.flags|=e,i.memoizedState=Hr(1|t,n,o,r)}function Fs(e,t){return Ni(8390656,8,e,t)}function Cu(e,t){return Eo(2048,8,e,t)}function Kd(e,t){return Eo(4,2,e,t)}function Xd(e,t){return Eo(4,4,e,t)}function Zd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Jd(e,t,n){return n=n!=null?n.concat([e]):null,Eo(4,4,Zd.bind(null,t,e),n)}function Eu(){}function qd(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ef(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&xu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function tf(e,t,n){return hn&21?(yt(n,t)||(n=id(),fe.lanes|=n,gn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,be=!0),e.memoizedState=n)}function oh(e,t){var n=re;re=n!==0&&4>n?n:4,e(!0);var r=Sl.transition;Sl.transition={};try{e(!1),t()}finally{re=n,Sl.transition=r}}function nf(){return at().memoizedState}function lh(e,t,n){var r=Kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rf(e))of(t,n);else if(n=Ad(e,t,n,r),n!==null){var i=Be();vt(n,e,r,i),lf(n,t,r)}}function ah(e,t,n){var r=Kt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rf(e))of(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,yt(a,l)){var u=t.interleaved;u===null?(i.next=i,hu(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Ad(e,t,i,r),n!==null&&(i=Be(),vt(n,e,r,i),lf(n,t,r))}}function rf(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function of(e,t){Cr=no=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function lf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tu(e,n)}}var ro={readContext:lt,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},uh={readContext:lt,useCallback:function(e,t){return xt().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:Fs,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ni(4194308,4,Zd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ni(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ni(4,2,e,t)},useMemo:function(e,t){var n=xt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=xt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=lh.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var t=xt();return e={current:e},t.memoizedState=e},useState:Ds,useDebugValue:Eu,useDeferredValue:function(e){return xt().memoizedState=e},useTransition:function(){var e=Ds(!1),t=e[0];return e=oh.bind(null,e[1]),xt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=fe,i=xt();if(ce){if(n===void 0)throw Error(z(407));n=n()}else{if(n=t(),Pe===null)throw Error(z(349));hn&30||Hd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Fs(Vd.bind(null,r,o,e),[e]),r.flags|=2048,Hr(9,bd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=xt(),t=Pe.identifierPrefix;if(ce){var n=Tt,r=Mt;n=(r&~(1<<32-gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ur++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ih++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},sh={readContext:lt,useCallback:qd,useContext:lt,useEffect:Cu,useImperativeHandle:Jd,useInsertionEffect:Kd,useLayoutEffect:Xd,useMemo:ef,useReducer:kl,useRef:Yd,useState:function(){return kl(Wr)},useDebugValue:Eu,useDeferredValue:function(e){var t=at();return tf(t,ke.memoizedState,e)},useTransition:function(){var e=kl(Wr)[0],t=at().memoizedState;return[e,t]},useMutableSource:Ud,useSyncExternalStore:Wd,useId:nf,unstable_isNewReconciler:!1},ch={readContext:lt,useCallback:qd,useContext:lt,useEffect:Cu,useImperativeHandle:Jd,useInsertionEffect:Kd,useLayoutEffect:Xd,useMemo:ef,useReducer:Cl,useRef:Yd,useState:function(){return Cl(Wr)},useDebugValue:Eu,useDeferredValue:function(e){var t=at();return ke===null?t.memoizedState=e:tf(t,ke.memoizedState,e)},useTransition:function(){var e=Cl(Wr)[0],t=at().memoizedState;return[e,t]},useMutableSource:Ud,useSyncExternalStore:Wd,useId:nf,unstable_isNewReconciler:!1};function Yn(e,t){try{var n="",r=t;do n+=Fp(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function El(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ga(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var dh=typeof WeakMap=="function"?WeakMap:Map;function af(e,t,n){n=Pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oo||(oo=!0,Ma=r),ga(e,t)},n}function uf(e,t,n){n=Pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ga(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ga(e,t),typeof r!="function"&&(Yt===null?Yt=new Set([this]):Yt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function js(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new dh;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=zh.bind(null,e,t,n),t.then(e,e))}function Bs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Us(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Pt(-1,1),t.tag=2,Gt(n,t,1))),n.lanes|=1),e)}var fh=It.ReactCurrentOwner,be=!1;function Fe(e,t,n,r){t.child=e===null?jd(t,null,n,r):Qn(t,e.child,n,r)}function Ws(e,t,n,r,i){n=n.render;var o=t.ref;return Un(t,i),r=Su(e,t,n,r,o,i),n=ku(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rt(e,t,i)):(ce&&n&&su(t),t.flags|=1,Fe(e,t,r,i),t.child)}function Hs(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ru(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,sf(e,t,o,r,i)):(e=Oi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Or,n(l,r)&&e.ref===t.ref)return Rt(e,t,i)}return t.flags|=1,e=Xt(o,r),e.ref=t.ref,e.return=t,t.child=e}function sf(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Or(o,r)&&e.ref===t.ref)if(be=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(be=!0);else return t.lanes=e.lanes,Rt(e,t,i)}return va(e,t,n,r,i)}function cf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(On,Ke),Ke|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,le(On,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,le(On,Ke),Ke|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,le(On,Ke),Ke|=r;return Fe(e,t,i,n),t.child}function df(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function va(e,t,n,r,i){var o=Qe(n)?pn:De.current;return o=bn(t,o),Un(t,i),n=Su(e,t,n,r,o,i),r=ku(),e!==null&&!be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Rt(e,t,i)):(ce&&r&&su(t),t.flags|=1,Fe(e,t,n,i),t.child)}function bs(e,t,n,r,i){if(Qe(n)){var o=!0;Ki(t)}else o=!1;if(Un(t,i),t.stateNode===null)Ri(e,t),Dd(t,n,r),ha(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,s=n.contextType;typeof s=="object"&&s!==null?s=lt(s):(s=Qe(n)?pn:De.current,s=bn(t,s));var m=n.getDerivedStateFromProps,d=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";d||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==s)&&Os(t,l,r,s),Dt=!1;var g=t.memoizedState;l.state=g,eo(t,r,l,i),u=t.memoizedState,a!==r||g!==u||Ve.current||Dt?(typeof m=="function"&&(ma(t,n,m,r),u=t.memoizedState),(a=Dt||As(t,n,a,r,g,u,s))?(d||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=s,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Od(e,t),a=t.memoizedProps,s=t.type===t.elementType?a:ft(t.type,a),l.props=s,d=t.pendingProps,g=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=lt(u):(u=Qe(n)?pn:De.current,u=bn(t,u));var k=n.getDerivedStateFromProps;(m=typeof k=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==d||g!==u)&&Os(t,l,r,u),Dt=!1,g=t.memoizedState,l.state=g,eo(t,r,l,i);var x=t.memoizedState;a!==d||g!==x||Ve.current||Dt?(typeof k=="function"&&(ma(t,n,k,r),x=t.memoizedState),(s=Dt||As(t,n,s,r,g,x,u)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=u,r=s):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return ya(e,t,n,r,o,i)}function ya(e,t,n,r,i,o){df(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&_s(t,n,!1),Rt(e,t,o);r=t.stateNode,fh.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Qn(t,e.child,null,o),t.child=Qn(t,null,a,o)):Fe(e,t,a,o),t.memoizedState=r.state,i&&_s(t,n,!0),t.child}function ff(e){var t=e.stateNode;t.pendingContext?Ps(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ps(e,t.context,!1),vu(e,t.containerInfo)}function Vs(e,t,n,r,i){return Vn(),du(i),t.flags|=256,Fe(e,t,n,r),t.child}var wa={dehydrated:null,treeContext:null,retryLane:0};function xa(e){return{baseLanes:e,cachePool:null,transitions:null}}function pf(e,t,n){var r=t.pendingProps,i=de.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),le(de,i&1),e===null)return fa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=To(l,r,0,null),e=fn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=xa(n),t.memoizedState=wa,e):zu(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ph(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(l&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Xt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Xt(a,o):(o=fn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?xa(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=wa,r}return o=e.child,e=o.sibling,r=Xt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function zu(e,t){return t=To({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mi(e,t,n,r){return r!==null&&du(r),Qn(t,e.child,null,n),e=zu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ph(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=El(Error(z(422))),mi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=To({mode:"visible",children:r.children},i,0,null),o=fn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Qn(t,e.child,null,l),t.child.memoizedState=xa(l),t.memoizedState=wa,o);if(!(t.mode&1))return mi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(z(419)),r=El(o,r,void 0),mi(e,t,l,r)}if(a=(l&e.childLanes)!==0,be||a){if(r=Pe,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Nt(e,i),vt(r,e,i,-1))}return Nu(),r=El(Error(z(421))),mi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Mh.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Xe=Qt(i.nextSibling),Ze=t,ce=!0,mt=null,e!==null&&(nt[rt++]=Mt,nt[rt++]=Tt,nt[rt++]=mn,Mt=e.id,Tt=e.overflow,mn=t),t=zu(t,r.children),t.flags|=4096,t)}function Qs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),pa(e.return,t,n)}function zl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function mf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Fe(e,t,r.children,n),r=de.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qs(e,n,t);else if(e.tag===19)Qs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(le(de,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&to(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),zl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&to(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}zl(t,!0,n,null,o);break;case"together":zl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ri(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Rt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),gn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(z(153));if(t.child!==null){for(e=t.child,n=Xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mh(e,t,n){switch(t.tag){case 3:ff(t),Vn();break;case 5:Bd(t);break;case 1:Qe(t.type)&&Ki(t);break;case 4:vu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;le(Ji,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(le(de,de.current&1),t.flags|=128,null):n&t.child.childLanes?pf(e,t,n):(le(de,de.current&1),e=Rt(e,t,n),e!==null?e.sibling:null);le(de,de.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return mf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(de,de.current),r)break;return null;case 22:case 23:return t.lanes=0,cf(e,t,n)}return Rt(e,t,n)}var hf,Sa,gf,vf;hf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sa=function(){};gf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,cn(Ct.current);var o=null;switch(n){case"input":i=Hl(e,i),r=Hl(e,r),o=[];break;case"select":i=pe({},i,{value:void 0}),r=pe({},r,{value:void 0}),o=[];break;case"textarea":i=Ql(e,i),r=Ql(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Gi)}Yl(n,r);var l;n=null;for(s in i)if(!r.hasOwnProperty(s)&&i.hasOwnProperty(s)&&i[s]!=null)if(s==="style"){var a=i[s];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Pr.hasOwnProperty(s)?o||(o=[]):(o=o||[]).push(s,null));for(s in r){var u=r[s];if(a=i!=null?i[s]:void 0,r.hasOwnProperty(s)&&u!==a&&(u!=null||a!=null))if(s==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(s,n)),n=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(Pr.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&ae("scroll",e),o||a===u||(o=[])):(o=o||[]).push(s,u))}n&&(o=o||[]).push("style",n);var s=o;(t.updateQueue=s)&&(t.flags|=4)}};vf=function(e,t,n,r){n!==r&&(t.flags|=4)};function dr(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hh(e,t,n){var r=t.pendingProps;switch(cu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Qe(t.type)&&Yi(),Oe(t),null;case 3:return r=t.stateNode,Gn(),ue(Ve),ue(De),wu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fi(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,mt!==null&&(_a(mt),mt=null))),Sa(e,t),Oe(t),null;case 5:yu(t);var i=cn(Br.current);if(n=t.type,e!==null&&t.stateNode!=null)gf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(z(166));return Oe(t),null}if(e=cn(Ct.current),fi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[St]=t,r[Fr]=o,e=(t.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(i=0;i<vr.length;i++)ae(vr[i],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":ts(r,o),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ae("invalid",r);break;case"textarea":rs(r,o),ae("invalid",r)}Yl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&di(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&di(r.textContent,a,e),i=["children",""+a]):Pr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ae("scroll",r)}switch(n){case"input":ri(r),ns(r,o,!0);break;case"textarea":ri(r),is(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Gi)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[St]=t,e[Fr]=r,hf(e,t,!1,!1),t.stateNode=e;e:{switch(l=Kl(n,r),n){case"dialog":ae("cancel",e),ae("close",e),i=r;break;case"iframe":case"object":case"embed":ae("load",e),i=r;break;case"video":case"audio":for(i=0;i<vr.length;i++)ae(vr[i],e);i=r;break;case"source":ae("error",e),i=r;break;case"img":case"image":case"link":ae("error",e),ae("load",e),i=r;break;case"details":ae("toggle",e),i=r;break;case"input":ts(e,r),i=Hl(e,r),ae("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=pe({},r,{value:void 0}),ae("invalid",e);break;case"textarea":rs(e,r),i=Ql(e,r),ae("invalid",e);break;default:i=r}Yl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?Qc(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&bc(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&_r(e,u):typeof u=="number"&&_r(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Pr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&ae("scroll",e):u!=null&&Ka(e,o,u,l))}switch(n){case"input":ri(e),ns(e,r,!1);break;case"textarea":ri(e),is(e);break;case"option":r.value!=null&&e.setAttribute("value",""+en(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Dn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Dn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Gi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)vf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(z(166));if(n=cn(Br.current),cn(Ct.current),fi(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(o=r.nodeValue!==n)&&(e=Ze,e!==null))switch(e.tag){case 3:di(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&di(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return Oe(t),null;case 13:if(ue(de),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&Xe!==null&&t.mode&1&&!(t.flags&128))Id(),Vn(),t.flags|=98560,o=!1;else if(o=fi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(z(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(z(317));o[St]=t}else Vn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oe(t),o=!1}else mt!==null&&(_a(mt),mt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||de.current&1?Ce===0&&(Ce=3):Nu())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return Gn(),Sa(e,t),e===null&&Lr(t.stateNode.containerInfo),Oe(t),null;case 10:return mu(t.type._context),Oe(t),null;case 17:return Qe(t.type)&&Yi(),Oe(t),null;case 19:if(ue(de),o=t.memoizedState,o===null)return Oe(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)dr(o,!1);else{if(Ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=to(e),l!==null){for(t.flags|=128,dr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return le(de,de.current&1|2),t.child}e=e.sibling}o.tail!==null&&ve()>Kn&&(t.flags|=128,r=!0,dr(o,!1),t.lanes=4194304)}else{if(!r)if(e=to(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),dr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!ce)return Oe(t),null}else 2*ve()-o.renderingStartTime>Kn&&n!==1073741824&&(t.flags|=128,r=!0,dr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ve(),t.sibling=null,n=de.current,le(de,r?n&1|2:n&1),t):(Oe(t),null);case 22:case 23:return $u(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ke&1073741824&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(z(156,t.tag))}function gh(e,t){switch(cu(t),t.tag){case 1:return Qe(t.type)&&Yi(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gn(),ue(Ve),ue(De),wu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return yu(t),null;case 13:if(ue(de),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(z(340));Vn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ue(de),null;case 4:return Gn(),null;case 10:return mu(t.type._context),null;case 22:case 23:return $u(),null;case 24:return null;default:return null}}var hi=!1,Le=!1,vh=typeof WeakSet=="function"?WeakSet:Set,A=null;function An(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){me(e,t,r)}else n.current=null}function ka(e,t,n){try{n()}catch(r){me(e,t,r)}}var Gs=!1;function yh(e,t){if(oa=bi,e=xd(),uu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,s=0,m=0,d=e,g=null;t:for(;;){for(var k;d!==n||i!==0&&d.nodeType!==3||(a=l+i),d!==o||r!==0&&d.nodeType!==3||(u=l+r),d.nodeType===3&&(l+=d.nodeValue.length),(k=d.firstChild)!==null;)g=d,d=k;for(;;){if(d===e)break t;if(g===n&&++s===i&&(a=l),g===o&&++m===r&&(u=l),(k=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=k}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(la={focusedElem:e,selectionRange:n},bi=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,E=x.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:ft(t.type,w),E);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(y){me(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return x=Gs,Gs=!1,x}function Er(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&ka(t,n,o)}i=i.next}while(i!==r)}}function zo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ca(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function yf(e){var t=e.alternate;t!==null&&(e.alternate=null,yf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[Fr],delete t[sa],delete t[eh],delete t[th])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wf(e){return e.tag===5||e.tag===3||e.tag===4}function Ys(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ea(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Gi));else if(r!==4&&(e=e.child,e!==null))for(Ea(e,t,n),e=e.sibling;e!==null;)Ea(e,t,n),e=e.sibling}function za(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(za(e,t,n),e=e.sibling;e!==null;)za(e,t,n),e=e.sibling}var Ne=null,pt=!1;function Ot(e,t,n){for(n=n.child;n!==null;)xf(e,t,n),n=n.sibling}function xf(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(vo,n)}catch{}switch(n.tag){case 5:Le||An(n,t);case 6:var r=Ne,i=pt;Ne=null,Ot(e,t,n),Ne=r,pt=i,Ne!==null&&(pt?(e=Ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(pt?(e=Ne,n=n.stateNode,e.nodeType===8?yl(e.parentNode,n):e.nodeType===1&&yl(e,n),Ir(e)):yl(Ne,n.stateNode));break;case 4:r=Ne,i=pt,Ne=n.stateNode.containerInfo,pt=!0,Ot(e,t,n),Ne=r,pt=i;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&ka(n,t,l),i=i.next}while(i!==r)}Ot(e,t,n);break;case 1:if(!Le&&(An(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){me(n,t,a)}Ot(e,t,n);break;case 21:Ot(e,t,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,Ot(e,t,n),Le=r):Ot(e,t,n);break;default:Ot(e,t,n)}}function Ks(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vh),t.forEach(function(r){var i=Th.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function dt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ne=a.stateNode,pt=!1;break e;case 3:Ne=a.stateNode.containerInfo,pt=!0;break e;case 4:Ne=a.stateNode.containerInfo,pt=!0;break e}a=a.return}if(Ne===null)throw Error(z(160));xf(o,l,i),Ne=null,pt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(s){me(i,t,s)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Sf(t,e),t=t.sibling}function Sf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dt(t,e),wt(e),r&4){try{Er(3,e,e.return),zo(3,e)}catch(w){me(e,e.return,w)}try{Er(5,e,e.return)}catch(w){me(e,e.return,w)}}break;case 1:dt(t,e),wt(e),r&512&&n!==null&&An(n,n.return);break;case 5:if(dt(t,e),wt(e),r&512&&n!==null&&An(n,n.return),e.flags&32){var i=e.stateNode;try{_r(i,"")}catch(w){me(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&Uc(i,o),Kl(a,l);var s=Kl(a,o);for(l=0;l<u.length;l+=2){var m=u[l],d=u[l+1];m==="style"?Qc(i,d):m==="dangerouslySetInnerHTML"?bc(i,d):m==="children"?_r(i,d):Ka(i,m,d,s)}switch(a){case"input":bl(i,o);break;case"textarea":Wc(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?Dn(i,!!o.multiple,k,!1):g!==!!o.multiple&&(o.defaultValue!=null?Dn(i,!!o.multiple,o.defaultValue,!0):Dn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Fr]=o}catch(w){me(e,e.return,w)}}break;case 6:if(dt(t,e),wt(e),r&4){if(e.stateNode===null)throw Error(z(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){me(e,e.return,w)}}break;case 3:if(dt(t,e),wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ir(t.containerInfo)}catch(w){me(e,e.return,w)}break;case 4:dt(t,e),wt(e);break;case 13:dt(t,e),wt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Pu=ve())),r&4&&Ks(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Le=(s=Le)||m,dt(t,e),Le=s):dt(t,e),wt(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!m&&e.mode&1)for(A=e,m=e.child;m!==null;){for(d=A=m;A!==null;){switch(g=A,k=g.child,g.tag){case 0:case 11:case 14:case 15:Er(4,g,g.return);break;case 1:An(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){me(r,n,w)}}break;case 5:An(g,g.return);break;case 22:if(g.memoizedState!==null){Zs(d);continue}}k!==null?(k.return=g,A=k):Zs(d)}m=m.sibling}e:for(m=null,d=e;;){if(d.tag===5){if(m===null){m=d;try{i=d.stateNode,s?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,u=d.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Vc("display",l))}catch(w){me(e,e.return,w)}}}else if(d.tag===6){if(m===null)try{d.stateNode.nodeValue=s?"":d.memoizedProps}catch(w){me(e,e.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;m===d&&(m=null),d=d.return}m===d&&(m=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:dt(t,e),wt(e),r&4&&Ks(e);break;case 21:break;default:dt(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(wf(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(_r(i,""),r.flags&=-33);var o=Ys(e);za(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Ys(e);Ea(e,a,l);break;default:throw Error(z(161))}}catch(u){me(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wh(e,t,n){A=e,kf(e)}function kf(e,t,n){for(var r=(e.mode&1)!==0;A!==null;){var i=A,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||hi;if(!l){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Le;a=hi;var s=Le;if(hi=l,(Le=u)&&!s)for(A=i;A!==null;)l=A,u=l.child,l.tag===22&&l.memoizedState!==null?Js(i):u!==null?(u.return=l,A=u):Js(i);for(;o!==null;)A=o,kf(o),o=o.sibling;A=i,hi=a,Le=s}Xs(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,A=o):Xs(e)}}function Xs(e){for(;A!==null;){var t=A;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Le||zo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Le)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ft(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Is(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Is(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var s=t.alternate;if(s!==null){var m=s.memoizedState;if(m!==null){var d=m.dehydrated;d!==null&&Ir(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}Le||t.flags&512&&Ca(t)}catch(g){me(t,t.return,g)}}if(t===e){A=null;break}if(n=t.sibling,n!==null){n.return=t.return,A=n;break}A=t.return}}function Zs(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var n=t.sibling;if(n!==null){n.return=t.return,A=n;break}A=t.return}}function Js(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zo(4,t)}catch(u){me(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){me(t,i,u)}}var o=t.return;try{Ca(t)}catch(u){me(t,o,u)}break;case 5:var l=t.return;try{Ca(t)}catch(u){me(t,l,u)}}}catch(u){me(t,t.return,u)}if(t===e){A=null;break}var a=t.sibling;if(a!==null){a.return=t.return,A=a;break}A=t.return}}var xh=Math.ceil,io=It.ReactCurrentDispatcher,Mu=It.ReactCurrentOwner,ot=It.ReactCurrentBatchConfig,q=0,Pe=null,we=null,Re=0,Ke=0,On=rn(0),Ce=0,br=null,gn=0,Mo=0,Tu=0,zr=null,He=null,Pu=0,Kn=1/0,Et=null,oo=!1,Ma=null,Yt=null,gi=!1,Ut=null,lo=0,Mr=0,Ta=null,Ii=-1,Ai=0;function Be(){return q&6?ve():Ii!==-1?Ii:Ii=ve()}function Kt(e){return e.mode&1?q&2&&Re!==0?Re&-Re:rh.transition!==null?(Ai===0&&(Ai=id()),Ai):(e=re,e!==0||(e=window.event,e=e===void 0?16:dd(e.type)),e):1}function vt(e,t,n,r){if(50<Mr)throw Mr=0,Ta=null,Error(z(185));Yr(e,n,r),(!(q&2)||e!==Pe)&&(e===Pe&&(!(q&2)&&(Mo|=n),Ce===4&&jt(e,Re)),Ge(e,r),n===1&&q===0&&!(t.mode&1)&&(Kn=ve()+500,ko&&on()))}function Ge(e,t){var n=e.callbackNode;rm(e,t);var r=Hi(e,e===Pe?Re:0);if(r===0)n!==null&&as(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&as(n),t===1)e.tag===0?nh(qs.bind(null,e)):$d(qs.bind(null,e)),Jm(function(){!(q&6)&&on()}),n=null;else{switch(od(r)){case 1:n=eu;break;case 4:n=nd;break;case 16:n=Wi;break;case 536870912:n=rd;break;default:n=Wi}n=$f(n,Cf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Cf(e,t){if(Ii=-1,Ai=0,q&6)throw Error(z(327));var n=e.callbackNode;if(Wn()&&e.callbackNode!==n)return null;var r=Hi(e,e===Pe?Re:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ao(e,r);else{t=r;var i=q;q|=2;var o=zf();(Pe!==e||Re!==t)&&(Et=null,Kn=ve()+500,dn(e,t));do try{Ch();break}catch(a){Ef(e,a)}while(1);pu(),io.current=o,q=i,we!==null?t=0:(Pe=null,Re=0,t=Ce)}if(t!==0){if(t===2&&(i=ea(e),i!==0&&(r=i,t=Pa(e,i))),t===1)throw n=br,dn(e,0),jt(e,r),Ge(e,ve()),n;if(t===6)jt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Sh(i)&&(t=ao(e,r),t===2&&(o=ea(e),o!==0&&(r=o,t=Pa(e,o))),t===1))throw n=br,dn(e,0),jt(e,r),Ge(e,ve()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(z(345));case 2:an(e,He,Et);break;case 3:if(jt(e,r),(r&130023424)===r&&(t=Pu+500-ve(),10<t)){if(Hi(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Be(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ua(an.bind(null,e,He,Et),t);break}an(e,He,Et);break;case 4:if(jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-gt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xh(r/1960))-r,10<r){e.timeoutHandle=ua(an.bind(null,e,He,Et),r);break}an(e,He,Et);break;case 5:an(e,He,Et);break;default:throw Error(z(329))}}}return Ge(e,ve()),e.callbackNode===n?Cf.bind(null,e):null}function Pa(e,t){var n=zr;return e.current.memoizedState.isDehydrated&&(dn(e,t).flags|=256),e=ao(e,t),e!==2&&(t=He,He=n,t!==null&&_a(t)),e}function _a(e){He===null?He=e:He.push.apply(He,e)}function Sh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!yt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jt(e,t){for(t&=~Tu,t&=~Mo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-gt(t),r=1<<n;e[n]=-1,t&=~r}}function qs(e){if(q&6)throw Error(z(327));Wn();var t=Hi(e,0);if(!(t&1))return Ge(e,ve()),null;var n=ao(e,t);if(e.tag!==0&&n===2){var r=ea(e);r!==0&&(t=r,n=Pa(e,r))}if(n===1)throw n=br,dn(e,0),jt(e,t),Ge(e,ve()),n;if(n===6)throw Error(z(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,an(e,He,Et),Ge(e,ve()),null}function _u(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(Kn=ve()+500,ko&&on())}}function vn(e){Ut!==null&&Ut.tag===0&&!(q&6)&&Wn();var t=q;q|=1;var n=ot.transition,r=re;try{if(ot.transition=null,re=1,e)return e()}finally{re=r,ot.transition=n,q=t,!(q&6)&&on()}}function $u(){Ke=On.current,ue(On)}function dn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Zm(n)),we!==null)for(n=we.return;n!==null;){var r=n;switch(cu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yi();break;case 3:Gn(),ue(Ve),ue(De),wu();break;case 5:yu(r);break;case 4:Gn();break;case 13:ue(de);break;case 19:ue(de);break;case 10:mu(r.type._context);break;case 22:case 23:$u()}n=n.return}if(Pe=e,we=e=Xt(e.current,null),Re=Ke=t,Ce=0,br=null,Tu=Mo=gn=0,He=zr=null,sn!==null){for(t=0;t<sn.length;t++)if(n=sn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}sn=null}return e}function Ef(e,t){do{var n=we;try{if(pu(),$i.current=ro,no){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}no=!1}if(hn=0,Te=ke=fe=null,Cr=!1,Ur=0,Mu.current=null,n===null||n.return===null){Ce=1,br=t,we=null;break}e:{var o=e,l=n.return,a=n,u=t;if(t=Re,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,m=a,d=m.tag;if(!(m.mode&1)&&(d===0||d===11||d===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var k=Bs(l);if(k!==null){k.flags&=-257,Us(k,l,a,o,t),k.mode&1&&js(o,s,t),t=k,u=s;var x=t.updateQueue;if(x===null){var w=new Set;w.add(u),t.updateQueue=w}else x.add(u);break e}else{if(!(t&1)){js(o,s,t),Nu();break e}u=Error(z(426))}}else if(ce&&a.mode&1){var E=Bs(l);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Us(E,l,a,o,t),du(Yn(u,a));break e}}o=u=Yn(u,a),Ce!==4&&(Ce=2),zr===null?zr=[o]:zr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=af(o,u,t);Rs(o,f);break e;case 1:a=u;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Yt===null||!Yt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=uf(o,a,t);Rs(o,y);break e}}o=o.return}while(o!==null)}Tf(n)}catch(M){t=M,we===n&&n!==null&&(we=n=n.return);continue}break}while(1)}function zf(){var e=io.current;return io.current=ro,e===null?ro:e}function Nu(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),Pe===null||!(gn&268435455)&&!(Mo&268435455)||jt(Pe,Re)}function ao(e,t){var n=q;q|=2;var r=zf();(Pe!==e||Re!==t)&&(Et=null,dn(e,t));do try{kh();break}catch(i){Ef(e,i)}while(1);if(pu(),q=n,io.current=r,we!==null)throw Error(z(261));return Pe=null,Re=0,Ce}function kh(){for(;we!==null;)Mf(we)}function Ch(){for(;we!==null&&!Yp();)Mf(we)}function Mf(e){var t=_f(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?Tf(e):we=t,Mu.current=null}function Tf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=gh(n,t),n!==null){n.flags&=32767,we=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ce=6,we=null;return}}else if(n=hh(n,t,Ke),n!==null){we=n;return}if(t=t.sibling,t!==null){we=t;return}we=t=e}while(t!==null);Ce===0&&(Ce=5)}function an(e,t,n){var r=re,i=ot.transition;try{ot.transition=null,re=1,Eh(e,t,n,r)}finally{ot.transition=i,re=r}return null}function Eh(e,t,n,r){do Wn();while(Ut!==null);if(q&6)throw Error(z(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(z(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(im(e,o),e===Pe&&(we=Pe=null,Re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gi||(gi=!0,$f(Wi,function(){return Wn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ot.transition,ot.transition=null;var l=re;re=1;var a=q;q|=4,Mu.current=null,yh(e,n),Sf(n,e),bm(la),bi=!!oa,la=oa=null,e.current=n,wh(n),Kp(),q=a,re=l,ot.transition=o}else e.current=n;if(gi&&(gi=!1,Ut=e,lo=i),o=e.pendingLanes,o===0&&(Yt=null),Jp(n.stateNode),Ge(e,ve()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(oo)throw oo=!1,e=Ma,Ma=null,e;return lo&1&&e.tag!==0&&Wn(),o=e.pendingLanes,o&1?e===Ta?Mr++:(Mr=0,Ta=e):Mr=0,on(),null}function Wn(){if(Ut!==null){var e=od(lo),t=ot.transition,n=re;try{if(ot.transition=null,re=16>e?16:e,Ut===null)var r=!1;else{if(e=Ut,Ut=null,lo=0,q&6)throw Error(z(331));var i=q;for(q|=4,A=e.current;A!==null;){var o=A,l=o.child;if(A.flags&16){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var s=a[u];for(A=s;A!==null;){var m=A;switch(m.tag){case 0:case 11:case 15:Er(8,m,o)}var d=m.child;if(d!==null)d.return=m,A=d;else for(;A!==null;){m=A;var g=m.sibling,k=m.return;if(yf(m),m===s){A=null;break}if(g!==null){g.return=k,A=g;break}A=k}}}var x=o.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}A=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,A=l;else e:for(;A!==null;){if(o=A,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Er(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,A=f;break e}A=o.return}}var c=e.current;for(A=c;A!==null;){l=A;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,A=p;else e:for(l=c;A!==null;){if(a=A,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:zo(9,a)}}catch(M){me(a,a.return,M)}if(a===l){A=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,A=y;break e}A=a.return}}if(q=i,on(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(vo,e)}catch{}r=!0}return r}finally{re=n,ot.transition=t}}return!1}function ec(e,t,n){t=Yn(n,t),t=af(e,t,1),e=Gt(e,t,1),t=Be(),e!==null&&(Yr(e,1,t),Ge(e,t))}function me(e,t,n){if(e.tag===3)ec(e,e,n);else for(;t!==null;){if(t.tag===3){ec(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yt===null||!Yt.has(r))){e=Yn(n,e),e=uf(t,e,1),t=Gt(t,e,1),e=Be(),t!==null&&(Yr(t,1,e),Ge(t,e));break}}t=t.return}}function zh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Be(),e.pingedLanes|=e.suspendedLanes&n,Pe===e&&(Re&n)===n&&(Ce===4||Ce===3&&(Re&130023424)===Re&&500>ve()-Pu?dn(e,0):Tu|=n),Ge(e,t)}function Pf(e,t){t===0&&(e.mode&1?(t=li,li<<=1,!(li&130023424)&&(li=4194304)):t=1);var n=Be();e=Nt(e,t),e!==null&&(Yr(e,t,n),Ge(e,n))}function Mh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Pf(e,n)}function Th(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(t),Pf(e,n)}var _f;_f=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ve.current)be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return be=!1,mh(e,t,n);be=!!(e.flags&131072)}else be=!1,ce&&t.flags&1048576&&Nd(t,Zi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ri(e,t),e=t.pendingProps;var i=bn(t,De.current);Un(t,n),i=Su(null,t,r,e,i,n);var o=ku();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qe(r)?(o=!0,Ki(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gu(t),i.updater=Co,t.stateNode=i,i._reactInternals=t,ha(t,r,e,n),t=ya(null,t,r,!0,o,n)):(t.tag=0,ce&&o&&su(t),Fe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ri(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=_h(r),e=ft(r,e),i){case 0:t=va(null,t,r,e,n);break e;case 1:t=bs(null,t,r,e,n);break e;case 11:t=Ws(null,t,r,e,n);break e;case 14:t=Hs(null,t,r,ft(r.type,e),n);break e}throw Error(z(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),va(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),bs(e,t,r,i,n);case 3:e:{if(ff(t),e===null)throw Error(z(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Od(e,t),eo(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Yn(Error(z(423)),t),t=Vs(e,t,r,n,i);break e}else if(r!==i){i=Yn(Error(z(424)),t),t=Vs(e,t,r,n,i);break e}else for(Xe=Qt(t.stateNode.containerInfo.firstChild),Ze=t,ce=!0,mt=null,n=jd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vn(),r===i){t=Rt(e,t,n);break e}Fe(e,t,r,n)}t=t.child}return t;case 5:return Bd(t),e===null&&fa(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,aa(r,i)?l=null:o!==null&&aa(r,o)&&(t.flags|=32),df(e,t),Fe(e,t,l,n),t.child;case 6:return e===null&&fa(t),null;case 13:return pf(e,t,n);case 4:return vu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Qn(t,null,r,n):Fe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),Ws(e,t,r,i,n);case 7:return Fe(e,t,t.pendingProps,n),t.child;case 8:return Fe(e,t,t.pendingProps.children,n),t.child;case 12:return Fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,le(Ji,r._currentValue),r._currentValue=l,o!==null)if(yt(o.value,l)){if(o.children===i.children&&!Ve.current){t=Rt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=Pt(-1,n&-n),u.tag=2;var s=o.updateQueue;if(s!==null){s=s.shared;var m=s.pending;m===null?u.next=u:(u.next=m.next,m.next=u),s.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),pa(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(z(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),pa(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Fe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Un(t,n),i=lt(i),r=r(i),t.flags|=1,Fe(e,t,r,n),t.child;case 14:return r=t.type,i=ft(r,t.pendingProps),i=ft(r.type,i),Hs(e,t,r,i,n);case 15:return sf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ft(r,i),Ri(e,t),t.tag=1,Qe(r)?(e=!0,Ki(t)):e=!1,Un(t,n),Dd(t,r,i),ha(t,r,i,n),ya(null,t,r,!0,e,n);case 19:return mf(e,t,n);case 22:return cf(e,t,n)}throw Error(z(156,t.tag))};function $f(e,t){return td(e,t)}function Ph(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,n,r){return new Ph(e,t,n,r)}function Ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _h(e){if(typeof e=="function")return Ru(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Za)return 11;if(e===Ja)return 14}return 2}function Xt(e,t){var n=e.alternate;return n===null?(n=it(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Oi(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Ru(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case zn:return fn(n.children,i,o,t);case Xa:l=8,i|=8;break;case jl:return e=it(12,n,t,i|2),e.elementType=jl,e.lanes=o,e;case Bl:return e=it(13,n,t,i),e.elementType=Bl,e.lanes=o,e;case Ul:return e=it(19,n,t,i),e.elementType=Ul,e.lanes=o,e;case Fc:return To(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lc:l=10;break e;case Dc:l=9;break e;case Za:l=11;break e;case Ja:l=14;break e;case Lt:l=16,r=null;break e}throw Error(z(130,e==null?e:typeof e,""))}return t=it(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function fn(e,t,n,r){return e=it(7,e,r,t),e.lanes=n,e}function To(e,t,n,r){return e=it(22,e,r,t),e.elementType=Fc,e.lanes=n,e.stateNode={isHidden:!1},e}function Ml(e,t,n){return e=it(6,e,null,t),e.lanes=n,e}function Tl(e,t,n){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $h(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=al(0),this.expirationTimes=al(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=al(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Iu(e,t,n,r,i,o,l,a,u){return e=new $h(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=it(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gu(o),e}function Nh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:En,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Nf(e){if(!e)return tn;e=e._reactInternals;e:{if(Sn(e)!==e||e.tag!==1)throw Error(z(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(z(171))}if(e.tag===1){var n=e.type;if(Qe(n))return _d(e,n,t)}return t}function Rf(e,t,n,r,i,o,l,a,u){return e=Iu(n,r,!0,e,i,o,l,a,u),e.context=Nf(null),n=e.current,r=Be(),i=Kt(n),o=Pt(r,i),o.callback=t??null,Gt(n,o,i),e.current.lanes=i,Yr(e,i,r),Ge(e,r),e}function Po(e,t,n,r){var i=t.current,o=Be(),l=Kt(i);return n=Nf(n),t.context===null?t.context=n:t.pendingContext=n,t=Pt(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gt(i,t,l),e!==null&&(vt(e,i,l,o),_i(e,i,l)),l}function uo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function tc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Au(e,t){tc(e,t),(e=e.alternate)&&tc(e,t)}function Rh(){return null}var If=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ou(e){this._internalRoot=e}_o.prototype.render=Ou.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(z(409));Po(e,t,null,null)};_o.prototype.unmount=Ou.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;vn(function(){Po(null,e,null,null)}),t[$t]=null}};function _o(e){this._internalRoot=e}_o.prototype.unstable_scheduleHydration=function(e){if(e){var t=ud();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ft.length&&t!==0&&t<Ft[n].priority;n++);Ft.splice(n,0,e),n===0&&cd(e)}};function Lu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function nc(){}function Ih(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var s=uo(l);o.call(s)}}var l=Rf(t,r,e,0,null,!1,!1,"",nc);return e._reactRootContainer=l,e[$t]=l.current,Lr(e.nodeType===8?e.parentNode:e),vn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var s=uo(u);a.call(s)}}var u=Iu(e,0,!1,null,null,!1,!1,"",nc);return e._reactRootContainer=u,e[$t]=u.current,Lr(e.nodeType===8?e.parentNode:e),vn(function(){Po(t,u,n,r)}),u}function No(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var u=uo(l);a.call(u)}}Po(t,l,e,i)}else l=Ih(n,t,e,i,r);return uo(l)}ld=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=gr(t.pendingLanes);n!==0&&(tu(t,n|1),Ge(t,ve()),!(q&6)&&(Kn=ve()+500,on()))}break;case 13:vn(function(){var r=Nt(e,1);if(r!==null){var i=Be();vt(r,e,1,i)}}),Au(e,1)}};nu=function(e){if(e.tag===13){var t=Nt(e,134217728);if(t!==null){var n=Be();vt(t,e,134217728,n)}Au(e,134217728)}};ad=function(e){if(e.tag===13){var t=Kt(e),n=Nt(e,t);if(n!==null){var r=Be();vt(n,e,t,r)}Au(e,t)}};ud=function(){return re};sd=function(e,t){var n=re;try{return re=e,t()}finally{re=n}};Zl=function(e,t,n){switch(t){case"input":if(bl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=So(r);if(!i)throw Error(z(90));Bc(r),bl(r,i)}}}break;case"textarea":Wc(e,n);break;case"select":t=n.value,t!=null&&Dn(e,!!n.multiple,t,!1)}};Kc=_u;Xc=vn;var Ah={usingClientEntryPoint:!1,Events:[Xr,_n,So,Gc,Yc,_u]},fr={findFiberByHostInstance:un,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Oh={bundleType:fr.bundleType,version:fr.version,rendererPackageName:fr.rendererPackageName,rendererConfig:fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:It.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qc(e),e===null?null:e.stateNode},findFiberByHostInstance:fr.findFiberByHostInstance||Rh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vi.isDisabled&&vi.supportsFiber)try{vo=vi.inject(Oh),kt=vi}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ah;qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lu(t))throw Error(z(200));return Nh(e,t,null,n)};qe.createRoot=function(e,t){if(!Lu(e))throw Error(z(299));var n=!1,r="",i=If;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Iu(e,1,!1,null,null,n,!1,r,i),e[$t]=t.current,Lr(e.nodeType===8?e.parentNode:e),new Ou(t)};qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(z(188)):(e=Object.keys(e).join(","),Error(z(268,e)));return e=qc(t),e=e===null?null:e.stateNode,e};qe.flushSync=function(e){return vn(e)};qe.hydrate=function(e,t,n){if(!$o(t))throw Error(z(200));return No(null,e,t,!0,n)};qe.hydrateRoot=function(e,t,n){if(!Lu(e))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=If;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Rf(t,null,e,1,n??null,i,!1,o,l),e[$t]=t.current,Lr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new _o(t)};qe.render=function(e,t,n){if(!$o(t))throw Error(z(200));return No(null,e,t,!1,n)};qe.unmountComponentAtNode=function(e){if(!$o(e))throw Error(z(40));return e._reactRootContainer?(vn(function(){No(null,null,e,!1,function(){e._reactRootContainer=null,e[$t]=null})}),!0):!1};qe.unstable_batchedUpdates=_u;qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!$o(n))throw Error(z(200));if(e==null||e._reactInternals===void 0)throw Error(z(38));return No(e,t,n,!1,r)};qe.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=qe})(Rp);var rc=Ll;Ol.createRoot=rc.createRoot,Ol.hydrateRoot=rc.hydrateRoot;var so={},Lh={get exports(){return so},set exports(e){so=e}},ie={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Du=Symbol.for("react.element"),Fu=Symbol.for("react.portal"),Ro=Symbol.for("react.fragment"),Io=Symbol.for("react.strict_mode"),Ao=Symbol.for("react.profiler"),Oo=Symbol.for("react.provider"),Lo=Symbol.for("react.context"),Dh=Symbol.for("react.server_context"),Do=Symbol.for("react.forward_ref"),Fo=Symbol.for("react.suspense"),jo=Symbol.for("react.suspense_list"),Bo=Symbol.for("react.memo"),Uo=Symbol.for("react.lazy"),Fh=Symbol.for("react.offscreen"),Af;Af=Symbol.for("react.module.reference");function ut(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Du:switch(e=e.type,e){case Ro:case Ao:case Io:case Fo:case jo:return e;default:switch(e=e&&e.$$typeof,e){case Dh:case Lo:case Do:case Uo:case Bo:case Oo:return e;default:return t}}case Fu:return t}}}ie.ContextConsumer=Lo;ie.ContextProvider=Oo;ie.Element=Du;ie.ForwardRef=Do;ie.Fragment=Ro;ie.Lazy=Uo;ie.Memo=Bo;ie.Portal=Fu;ie.Profiler=Ao;ie.StrictMode=Io;ie.Suspense=Fo;ie.SuspenseList=jo;ie.isAsyncMode=function(){return!1};ie.isConcurrentMode=function(){return!1};ie.isContextConsumer=function(e){return ut(e)===Lo};ie.isContextProvider=function(e){return ut(e)===Oo};ie.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Du};ie.isForwardRef=function(e){return ut(e)===Do};ie.isFragment=function(e){return ut(e)===Ro};ie.isLazy=function(e){return ut(e)===Uo};ie.isMemo=function(e){return ut(e)===Bo};ie.isPortal=function(e){return ut(e)===Fu};ie.isProfiler=function(e){return ut(e)===Ao};ie.isStrictMode=function(e){return ut(e)===Io};ie.isSuspense=function(e){return ut(e)===Fo};ie.isSuspenseList=function(e){return ut(e)===jo};ie.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ro||e===Ao||e===Io||e===Fo||e===jo||e===Fh||typeof e=="object"&&e!==null&&(e.$$typeof===Uo||e.$$typeof===Bo||e.$$typeof===Oo||e.$$typeof===Lo||e.$$typeof===Do||e.$$typeof===Af||e.getModuleId!==void 0)};ie.typeOf=ut;(function(e){e.exports=ie})(Lh);function jh(e){function t(T,N,R,F,v){for(var j=0,h=0,H=0,L=0,G,D,K=0,te=0,b,ne=b=G=0,J=0,V=0,st=0,$e=0,ei=R.length,ir=ei-1,ct,Y="",ge="",el="",tl="",At;J<ei;){if(D=R.charCodeAt(J),J===ir&&h+L+H+j!==0&&(h!==0&&(D=h===47?10:47),L=H=j=0,ei++,ir++),h+L+H+j===0){if(J===ir&&(0<V&&(Y=Y.replace(g,"")),0<Y.trim().length)){switch(D){case 32:case 9:case 59:case 13:case 10:break;default:Y+=R.charAt(J)}D=59}switch(D){case 123:for(Y=Y.trim(),G=Y.charCodeAt(0),b=1,$e=++J;J<ei;){switch(D=R.charCodeAt(J)){case 123:b++;break;case 125:b--;break;case 47:switch(D=R.charCodeAt(J+1)){case 42:case 47:e:{for(ne=J+1;ne<ir;++ne)switch(R.charCodeAt(ne)){case 47:if(D===42&&R.charCodeAt(ne-1)===42&&J+2!==ne){J=ne+1;break e}break;case 10:if(D===47){J=ne+1;break e}}J=ne}}break;case 91:D++;case 40:D++;case 34:case 39:for(;J++<ir&&R.charCodeAt(J)!==D;);}if(b===0)break;J++}switch(b=R.substring($e,J),G===0&&(G=(Y=Y.replace(d,"").trim()).charCodeAt(0)),G){case 64:switch(0<V&&(Y=Y.replace(g,"")),D=Y.charCodeAt(1),D){case 100:case 109:case 115:case 45:V=N;break;default:V=Ye}if(b=t(N,V,b,D,v+1),$e=b.length,0<P&&(V=n(Ye,Y,st),At=a(3,b,V,N,ye,se,$e,D,v,F),Y=V.join(""),At!==void 0&&($e=(b=At.trim()).length)===0&&(D=0,b="")),0<$e)switch(D){case 115:Y=Y.replace(_,l);case 100:case 109:case 45:b=Y+"{"+b+"}";break;case 107:Y=Y.replace(c,"$1 $2"),b=Y+"{"+b+"}",b=Se===1||Se===2&&o("@"+b,3)?"@-webkit-"+b+"@"+b:"@"+b;break;default:b=Y+b,F===112&&(b=(ge+=b,""))}else b="";break;default:b=t(N,n(N,Y,st),b,F,v+1)}el+=b,b=st=V=ne=G=0,Y="",D=R.charCodeAt(++J);break;case 125:case 59:if(Y=(0<V?Y.replace(g,""):Y).trim(),1<($e=Y.length))switch(ne===0&&(G=Y.charCodeAt(0),G===45||96<G&&123>G)&&($e=(Y=Y.replace(" ",":")).length),0<P&&(At=a(1,Y,N,T,ye,se,ge.length,F,v,F))!==void 0&&($e=(Y=At.trim()).length)===0&&(Y="\0\0"),G=Y.charCodeAt(0),D=Y.charCodeAt(1),G){case 0:break;case 64:if(D===105||D===99){tl+=Y+R.charAt(J);break}default:Y.charCodeAt($e-1)!==58&&(ge+=i(Y,G,D,Y.charCodeAt(2)))}st=V=ne=G=0,Y="",D=R.charCodeAt(++J)}}switch(D){case 13:case 10:h===47?h=0:1+G===0&&F!==107&&0<Y.length&&(V=1,Y+="\0"),0<P*W&&a(0,Y,N,T,ye,se,ge.length,F,v,F),se=1,ye++;break;case 59:case 125:if(h+L+H+j===0){se++;break}default:switch(se++,ct=R.charAt(J),D){case 9:case 32:if(L+j+h===0)switch(K){case 44:case 58:case 9:case 32:ct="";break;default:D!==32&&(ct=" ")}break;case 0:ct="\\0";break;case 12:ct="\\f";break;case 11:ct="\\v";break;case 38:L+h+j===0&&(V=st=1,ct="\f"+ct);break;case 108:if(L+h+j+ze===0&&0<ne)switch(J-ne){case 2:K===112&&R.charCodeAt(J-3)===58&&(ze=K);case 8:te===111&&(ze=te)}break;case 58:L+h+j===0&&(ne=J);break;case 44:h+H+L+j===0&&(V=1,ct+="\r");break;case 34:case 39:h===0&&(L=L===D?0:L===0?D:L);break;case 91:L+h+H===0&&j++;break;case 93:L+h+H===0&&j--;break;case 41:L+h+j===0&&H--;break;case 40:if(L+h+j===0){if(G===0)switch(2*K+3*te){case 533:break;default:G=1}H++}break;case 64:h+H+L+j+ne+b===0&&(b=1);break;case 42:case 47:if(!(0<L+j+H))switch(h){case 0:switch(2*D+3*R.charCodeAt(J+1)){case 235:h=47;break;case 220:$e=J,h=42}break;case 42:D===47&&K===42&&$e+2!==J&&(R.charCodeAt($e+2)===33&&(ge+=R.substring($e,J+1)),ct="",h=0)}}h===0&&(Y+=ct)}te=K,K=D,J++}if($e=ge.length,0<$e){if(V=N,0<P&&(At=a(2,ge,V,T,ye,se,$e,F,v,F),At!==void 0&&(ge=At).length===0))return tl+ge+el;if(ge=V.join(",")+"{"+ge+"}",Se*ze!==0){switch(Se!==2||o(ge,2)||(ze=0),ze){case 111:ge=ge.replace(y,":-moz-$1")+ge;break;case 112:ge=ge.replace(p,"::-webkit-input-$1")+ge.replace(p,"::-moz-$1")+ge.replace(p,":-ms-input-$1")+ge}ze=0}}return tl+ge+el}function n(T,N,R){var F=N.trim().split(E);N=F;var v=F.length,j=T.length;switch(j){case 0:case 1:var h=0;for(T=j===0?"":T[0]+" ";h<v;++h)N[h]=r(T,N[h],R).trim();break;default:var H=h=0;for(N=[];h<v;++h)for(var L=0;L<j;++L)N[H++]=r(T[L]+" ",F[h],R).trim()}return N}function r(T,N,R){var F=N.charCodeAt(0);switch(33>F&&(F=(N=N.trim()).charCodeAt(0)),F){case 38:return N.replace(f,"$1"+T.trim());case 58:return T.trim()+N.replace(f,"$1"+T.trim());default:if(0<1*R&&0<N.indexOf("\f"))return N.replace(f,(T.charCodeAt(0)===58?"":"$1")+T.trim())}return T+N}function i(T,N,R,F){var v=T+";",j=2*N+3*R+4*F;if(j===944){T=v.indexOf(":",9)+1;var h=v.substring(T,v.length-1).trim();return h=v.substring(0,T).trim()+h+";",Se===1||Se===2&&o(h,1)?"-webkit-"+h+h:h}if(Se===0||Se===2&&!o(v,1))return v;switch(j){case 1015:return v.charCodeAt(10)===97?"-webkit-"+v+v:v;case 951:return v.charCodeAt(3)===116?"-webkit-"+v+v:v;case 963:return v.charCodeAt(5)===110?"-webkit-"+v+v:v;case 1009:if(v.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+v+v;case 978:return"-webkit-"+v+"-moz-"+v+v;case 1019:case 983:return"-webkit-"+v+"-moz-"+v+"-ms-"+v+v;case 883:if(v.charCodeAt(8)===45)return"-webkit-"+v+v;if(0<v.indexOf("image-set(",11))return v.replace(he,"$1-webkit-$2")+v;break;case 932:if(v.charCodeAt(4)===45)switch(v.charCodeAt(5)){case 103:return"-webkit-box-"+v.replace("-grow","")+"-webkit-"+v+"-ms-"+v.replace("grow","positive")+v;case 115:return"-webkit-"+v+"-ms-"+v.replace("shrink","negative")+v;case 98:return"-webkit-"+v+"-ms-"+v.replace("basis","preferred-size")+v}return"-webkit-"+v+"-ms-"+v+v;case 964:return"-webkit-"+v+"-ms-flex-"+v+v;case 1023:if(v.charCodeAt(8)!==99)break;return h=v.substring(v.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+h+"-webkit-"+v+"-ms-flex-pack"+h+v;case 1005:return x.test(v)?v.replace(k,":-webkit-")+v.replace(k,":-moz-")+v:v;case 1e3:switch(h=v.substring(13).trim(),N=h.indexOf("-")+1,h.charCodeAt(0)+h.charCodeAt(N)){case 226:h=v.replace(M,"tb");break;case 232:h=v.replace(M,"tb-rl");break;case 220:h=v.replace(M,"lr");break;default:return v}return"-webkit-"+v+"-ms-"+h+v;case 1017:if(v.indexOf("sticky",9)===-1)break;case 975:switch(N=(v=T).length-10,h=(v.charCodeAt(N)===33?v.substring(0,N):v).substring(T.indexOf(":",7)+1).trim(),j=h.charCodeAt(0)+(h.charCodeAt(7)|0)){case 203:if(111>h.charCodeAt(8))break;case 115:v=v.replace(h,"-webkit-"+h)+";"+v;break;case 207:case 102:v=v.replace(h,"-webkit-"+(102<j?"inline-":"")+"box")+";"+v.replace(h,"-webkit-"+h)+";"+v.replace(h,"-ms-"+h+"box")+";"+v}return v+";";case 938:if(v.charCodeAt(5)===45)switch(v.charCodeAt(6)){case 105:return h=v.replace("-items",""),"-webkit-"+v+"-webkit-box-"+h+"-ms-flex-"+h+v;case 115:return"-webkit-"+v+"-ms-flex-item-"+v.replace($,"")+v;default:return"-webkit-"+v+"-ms-flex-line-pack"+v.replace("align-content","").replace($,"")+v}break;case 973:case 989:if(v.charCodeAt(3)!==45||v.charCodeAt(4)===122)break;case 931:case 953:if(U.test(T)===!0)return(h=T.substring(T.indexOf(":")+1)).charCodeAt(0)===115?i(T.replace("stretch","fill-available"),N,R,F).replace(":fill-available",":stretch"):v.replace(h,"-webkit-"+h)+v.replace(h,"-moz-"+h.replace("fill-",""))+v;break;case 962:if(v="-webkit-"+v+(v.charCodeAt(5)===102?"-ms-"+v:"")+v,R+F===211&&v.charCodeAt(13)===105&&0<v.indexOf("transform",10))return v.substring(0,v.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+v}return v}function o(T,N){var R=T.indexOf(N===1?":":"{"),F=T.substring(0,N!==3?R:10);return R=T.substring(R+1,T.length-1),B(N!==2?F:F.replace(Z,"$1"),R,N)}function l(T,N){var R=i(N,N.charCodeAt(0),N.charCodeAt(1),N.charCodeAt(2));return R!==N+";"?R.replace(I," or ($1)").substring(4):"("+N+")"}function a(T,N,R,F,v,j,h,H,L,G){for(var D=0,K=N,te;D<P;++D)switch(te=Me[D].call(m,T,K,R,F,v,j,h,H,L,G)){case void 0:case!1:case!0:case null:break;default:K=te}if(K!==N)return K}function u(T){switch(T){case void 0:case null:P=Me.length=0;break;default:if(typeof T=="function")Me[P++]=T;else if(typeof T=="object")for(var N=0,R=T.length;N<R;++N)u(T[N]);else W=!!T|0}return u}function s(T){return T=T.prefix,T!==void 0&&(B=null,T?typeof T!="function"?Se=1:(Se=2,B=T):Se=0),s}function m(T,N){var R=T;if(33>R.charCodeAt(0)&&(R=R.trim()),ee=R,R=[ee],0<P){var F=a(-1,N,R,R,ye,se,0,0,0,0);F!==void 0&&typeof F=="string"&&(N=F)}var v=t(Ye,R,N,0,0);return 0<P&&(F=a(-2,v,R,R,ye,se,v.length,0,0,0),F!==void 0&&(v=F)),ee="",ze=0,se=ye=1,v}var d=/^\0+/g,g=/[\0\r\f]/g,k=/: */g,x=/zoo|gra/,w=/([,: ])(transform)/g,E=/,\r+?/g,f=/([\t\r\n ])*\f?&/g,c=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,y=/:(read-only)/g,M=/[svh]\w+-[tblr]{2}/,_=/\(\s*(.*)\s*\)/g,I=/([\s\S]*?);/g,$=/-self|flex-/g,Z=/[^]*?(:[rp][el]a[\w-]+)[^]*/,U=/stretch|:\s*\w+\-(?:conte|avail)/,he=/([^-])(image-set\()/,se=1,ye=1,ze=0,Se=1,Ye=[],Me=[],P=0,B=null,W=0,ee="";return m.use=u,m.set=s,e!==void 0&&s(e),m}var Bh={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Uh(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Wh=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,ic=Uh(function(e){return Wh.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),$a={},Hh={get exports(){return $a},set exports(e){$a=e}},oe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _e=typeof Symbol=="function"&&Symbol.for,ju=_e?Symbol.for("react.element"):60103,Bu=_e?Symbol.for("react.portal"):60106,Wo=_e?Symbol.for("react.fragment"):60107,Ho=_e?Symbol.for("react.strict_mode"):60108,bo=_e?Symbol.for("react.profiler"):60114,Vo=_e?Symbol.for("react.provider"):60109,Qo=_e?Symbol.for("react.context"):60110,Uu=_e?Symbol.for("react.async_mode"):60111,Go=_e?Symbol.for("react.concurrent_mode"):60111,Yo=_e?Symbol.for("react.forward_ref"):60112,Ko=_e?Symbol.for("react.suspense"):60113,bh=_e?Symbol.for("react.suspense_list"):60120,Xo=_e?Symbol.for("react.memo"):60115,Zo=_e?Symbol.for("react.lazy"):60116,Vh=_e?Symbol.for("react.block"):60121,Qh=_e?Symbol.for("react.fundamental"):60117,Gh=_e?Symbol.for("react.responder"):60118,Yh=_e?Symbol.for("react.scope"):60119;function tt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ju:switch(e=e.type,e){case Uu:case Go:case Wo:case bo:case Ho:case Ko:return e;default:switch(e=e&&e.$$typeof,e){case Qo:case Yo:case Zo:case Xo:case Vo:return e;default:return t}}case Bu:return t}}}function Of(e){return tt(e)===Go}oe.AsyncMode=Uu;oe.ConcurrentMode=Go;oe.ContextConsumer=Qo;oe.ContextProvider=Vo;oe.Element=ju;oe.ForwardRef=Yo;oe.Fragment=Wo;oe.Lazy=Zo;oe.Memo=Xo;oe.Portal=Bu;oe.Profiler=bo;oe.StrictMode=Ho;oe.Suspense=Ko;oe.isAsyncMode=function(e){return Of(e)||tt(e)===Uu};oe.isConcurrentMode=Of;oe.isContextConsumer=function(e){return tt(e)===Qo};oe.isContextProvider=function(e){return tt(e)===Vo};oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ju};oe.isForwardRef=function(e){return tt(e)===Yo};oe.isFragment=function(e){return tt(e)===Wo};oe.isLazy=function(e){return tt(e)===Zo};oe.isMemo=function(e){return tt(e)===Xo};oe.isPortal=function(e){return tt(e)===Bu};oe.isProfiler=function(e){return tt(e)===bo};oe.isStrictMode=function(e){return tt(e)===Ho};oe.isSuspense=function(e){return tt(e)===Ko};oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Wo||e===Go||e===bo||e===Ho||e===Ko||e===bh||typeof e=="object"&&e!==null&&(e.$$typeof===Zo||e.$$typeof===Xo||e.$$typeof===Vo||e.$$typeof===Qo||e.$$typeof===Yo||e.$$typeof===Qh||e.$$typeof===Gh||e.$$typeof===Yh||e.$$typeof===Vh)};oe.typeOf=tt;(function(e){e.exports=oe})(Hh);var Wu=$a,Kh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Xh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Zh={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Lf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Hu={};Hu[Wu.ForwardRef]=Zh;Hu[Wu.Memo]=Lf;function oc(e){return Wu.isMemo(e)?Lf:Hu[e.$$typeof]||Kh}var Jh=Object.defineProperty,qh=Object.getOwnPropertyNames,lc=Object.getOwnPropertySymbols,e0=Object.getOwnPropertyDescriptor,t0=Object.getPrototypeOf,ac=Object.prototype;function Df(e,t,n){if(typeof t!="string"){if(ac){var r=t0(t);r&&r!==ac&&Df(e,r,n)}var i=qh(t);lc&&(i=i.concat(lc(t)));for(var o=oc(e),l=oc(t),a=0;a<i.length;++a){var u=i[a];if(!Xh[u]&&!(n&&n[u])&&!(l&&l[u])&&!(o&&o[u])){var s=e0(t,u);try{Jh(e,u,s)}catch{}}}}return e}var n0=Df;function ht(){return(ht=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var uc=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Na=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!so.typeOf(e)},co=Object.freeze([]),Zt=Object.freeze({});function Xn(e){return typeof e=="function"}function sc(e){return e.displayName||e.name||"Component"}function bu(e){return e&&typeof e.styledComponentId=="string"}var Zn=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Vu=typeof window<"u"&&"HTMLElement"in window,r0=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),i0={};function yn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var o0=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;n>=l;)(l<<=1)<0&&yn(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var a=o;a<l;a++)this.groupSizes[a]=0}for(var u=this.indexOfGroup(n+1),s=0,m=r.length;s<m;s++)this.tag.insertRule(u,r[s])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),l=o+i,a=o;a<l;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),Li=new Map,fo=new Map,Tr=1,yi=function(e){if(Li.has(e))return Li.get(e);for(;fo.has(Tr);)Tr++;var t=Tr++;return Li.set(e,t),fo.set(t,e),t},l0=function(e){return fo.get(e)},a0=function(e,t){t>=Tr&&(Tr=t+1),Li.set(e,t),fo.set(t,e)},u0="style["+Zn+'][data-styled-version="5.3.9"]',s0=new RegExp("^"+Zn+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),c0=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},d0=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var l=n[i].trim();if(l){var a=l.match(s0);if(a){var u=0|parseInt(a[1],10),s=a[2];u!==0&&(a0(s,u),c0(e,s,a[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(l)}}},f0=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Ff=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var u=a.childNodes,s=u.length;s>=0;s--){var m=u[s];if(m&&m.nodeType===1&&m.hasAttribute(Zn))return m}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Zn,"active"),r.setAttribute("data-styled-version","5.3.9");var l=f0();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},p0=function(){function e(n){var r=this.element=Ff(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,l=0,a=o.length;l<a;l++){var u=o[l];if(u.ownerNode===i)return u}yn(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),m0=function(){function e(n){var r=this.element=Ff(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),h0=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),cc=Vu,g0={isServer:!Vu,useCSSOMInjection:!r0},po=function(){function e(n,r,i){n===void 0&&(n=Zt),r===void 0&&(r={}),this.options=ht({},g0,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&Vu&&cc&&(cc=!1,function(o){for(var l=document.querySelectorAll(u0),a=0,u=l.length;a<u;a++){var s=l[a];s&&s.getAttribute(Zn)!=="active"&&(d0(o,s),s.parentNode&&s.parentNode.removeChild(s))}}(this))}e.registerId=function(n){return yi(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(ht({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,l=r.target,n=i?new h0(l):o?new p0(l):new m0(l),new o0(n)));var n,r,i,o,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(yi(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(yi(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(yi(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",l=0;l<i;l++){var a=l0(l);if(a!==void 0){var u=n.names.get(a),s=r.getGroup(l);if(u&&s&&u.size){var m=Zn+".g"+l+'[id="'+a+'"]',d="";u!==void 0&&u.forEach(function(g){g.length>0&&(d+=g+",")}),o+=""+s+m+'{content:"'+d+`"}/*!sc*/
`}}}return o}(this)},e}(),v0=/(a)(d)/gi,dc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ra(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=dc(t%52)+n;return(dc(t%52)+n).replace(v0,"$1-$2")}var Ln=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},jf=function(e){return Ln(5381,e)};function Bf(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Xn(n)&&!bu(n))return!1}return!0}var y0=jf("5.3.9"),w0=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Bf(t),this.componentId=n,this.baseHash=Ln(y0,n),this.baseStyle=r,po.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var l=wn(this.rules,t,n,r).join(""),a=Ra(Ln(this.baseHash,l)>>>0);if(!n.hasNameForId(i,a)){var u=r(l,"."+a,void 0,i);n.insertRules(i,a,u)}o.push(a),this.staticRulesId=a}else{for(var s=this.rules.length,m=Ln(this.baseHash,r.hash),d="",g=0;g<s;g++){var k=this.rules[g];if(typeof k=="string")d+=k;else if(k){var x=wn(k,t,n,r),w=Array.isArray(x)?x.join(""):x;m=Ln(m,w+g),d+=w}}if(d){var E=Ra(m>>>0);if(!n.hasNameForId(i,E)){var f=r(d,"."+E,void 0,i);n.insertRules(i,E,f)}o.push(E)}}return o.join(" ")},e}(),x0=/^\s*\/\/.*$/gm,S0=[":","[",".","#"];function k0(e){var t,n,r,i,o=e===void 0?Zt:e,l=o.options,a=l===void 0?Zt:l,u=o.plugins,s=u===void 0?co:u,m=new jh(a),d=[],g=function(w){function E(f){if(f)try{w(f+"}")}catch{}}return function(f,c,p,y,M,_,I,$,Z,U){switch(f){case 1:if(Z===0&&c.charCodeAt(0)===64)return w(c+";"),"";break;case 2:if($===0)return c+"/*|*/";break;case 3:switch($){case 102:case 112:return w(p[0]+c),"";default:return c+(U===0?"/*|*/":"")}case-2:c.split("/*|*/}").forEach(E)}}}(function(w){d.push(w)}),k=function(w,E,f){return E===0&&S0.indexOf(f[n.length])!==-1||f.match(i)?w:"."+t};function x(w,E,f,c){c===void 0&&(c="&");var p=w.replace(x0,""),y=E&&f?f+" "+E+" { "+p+" }":p;return t=c,n=E,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),m(f||!E?"":E,y)}return m.use([].concat(s,[function(w,E,f){w===2&&f.length&&f[0].lastIndexOf(n)>0&&(f[0]=f[0].replace(r,k))},g,function(w){if(w===-2){var E=d;return d=[],E}}])),x.hash=s.length?s.reduce(function(w,E){return E.name||yn(15),Ln(w,E.name)},5381).toString():"",x}var Uf=je.createContext();Uf.Consumer;var Wf=je.createContext(),C0=(Wf.Consumer,new po),Ia=k0();function Hf(){return C.useContext(Uf)||C0}function bf(){return C.useContext(Wf)||Ia}var E0=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Ia);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.toString=function(){return yn(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Ia),this.name+t.hash},e}(),z0=/([A-Z])/,M0=/([A-Z])/g,T0=/^ms-/,P0=function(e){return"-"+e.toLowerCase()};function fc(e){return z0.test(e)?e.replace(M0,P0).replace(T0,"-ms-"):e}var pc=function(e){return e==null||e===!1||e===""};function wn(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],l=0,a=e.length;l<a;l+=1)(i=wn(e[l],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(pc(e))return"";if(bu(e))return"."+e.styledComponentId;if(Xn(e)){if(typeof(s=e)!="function"||s.prototype&&s.prototype.isReactComponent||!t)return e;var u=e(t);return wn(u,t,n,r)}var s;return e instanceof E0?n?(e.inject(n,r),e.getName(r)):e:Na(e)?function m(d,g){var k,x,w=[];for(var E in d)d.hasOwnProperty(E)&&!pc(d[E])&&(Array.isArray(d[E])&&d[E].isCss||Xn(d[E])?w.push(fc(E)+":",d[E],";"):Na(d[E])?w.push.apply(w,m(d[E],E)):w.push(fc(E)+": "+(k=E,(x=d[E])==null||typeof x=="boolean"||x===""?"":typeof x!="number"||x===0||k in Bh?String(x).trim():x+"px")+";"));return g?[g+" {"].concat(w,["}"]):w}(e):e.toString()}var mc=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Vf(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Xn(e)||Na(e)?mc(wn(uc(co,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:mc(wn(uc(e,n)))}var Qf=function(e,t,n){return n===void 0&&(n=Zt),e.theme!==n.theme&&e.theme||t||n.theme},_0=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$0=/(^-|-$)/g;function Pl(e){return e.replace(_0,"-").replace($0,"")}var Gf=function(e){return Ra(jf(e)>>>0)};function wi(e){return typeof e=="string"&&!0}var Aa=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},N0=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function R0(e,t,n){var r=e[n];Aa(t)&&Aa(r)?Yf(r,t):e[n]=t}function Yf(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var l=o[i];if(Aa(l))for(var a in l)N0(a)&&R0(e,l[a],a)}return e}var Vr=je.createContext();Vr.Consumer;function I0(e){var t=C.useContext(Vr),n=C.useMemo(function(){return function(r,i){if(!r)return yn(14);if(Xn(r)){var o=r(i);return o}return Array.isArray(r)||typeof r!="object"?yn(8):i?ht({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?je.createElement(Vr.Provider,{value:n},e.children):null}var _l={};function Kf(e,t,n){var r=bu(e),i=!wi(e),o=t.attrs,l=o===void 0?co:o,a=t.componentId,u=a===void 0?function(c,p){var y=typeof c!="string"?"sc":Pl(c);_l[y]=(_l[y]||0)+1;var M=y+"-"+Gf("5.3.9"+y+_l[y]);return p?p+"-"+M:M}(t.displayName,t.parentComponentId):a,s=t.displayName,m=s===void 0?function(c){return wi(c)?"styled."+c:"Styled("+sc(c)+")"}(e):s,d=t.displayName&&t.componentId?Pl(t.displayName)+"-"+t.componentId:t.componentId||u,g=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,k=t.shouldForwardProp;r&&e.shouldForwardProp&&(k=t.shouldForwardProp?function(c,p,y){return e.shouldForwardProp(c,p,y)&&t.shouldForwardProp(c,p,y)}:e.shouldForwardProp);var x,w=new w0(n,d,r?e.componentStyle:void 0),E=w.isStatic&&l.length===0,f=function(c,p){return function(y,M,_,I){var $=y.attrs,Z=y.componentStyle,U=y.defaultProps,he=y.foldedComponentIds,se=y.shouldForwardProp,ye=y.styledComponentId,ze=y.target,Se=function(F,v,j){F===void 0&&(F=Zt);var h=ht({},v,{theme:F}),H={};return j.forEach(function(L){var G,D,K,te=L;for(G in Xn(te)&&(te=te(h)),te)h[G]=H[G]=G==="className"?(D=H[G],K=te[G],D&&K?D+" "+K:D||K):te[G]}),[h,H]}(Qf(M,C.useContext(Vr),U)||Zt,M,$),Ye=Se[0],Me=Se[1],P=function(F,v,j,h){var H=Hf(),L=bf(),G=v?F.generateAndInjectStyles(Zt,H,L):F.generateAndInjectStyles(j,H,L);return G}(Z,I,Ye),B=_,W=Me.$as||M.$as||Me.as||M.as||ze,ee=wi(W),T=Me!==M?ht({},M,{},Me):M,N={};for(var R in T)R[0]!=="$"&&R!=="as"&&(R==="forwardedAs"?N.as=T[R]:(se?se(R,ic,W):!ee||ic(R))&&(N[R]=T[R]));return M.style&&Me.style!==M.style&&(N.style=ht({},M.style,{},Me.style)),N.className=Array.prototype.concat(he,ye,P!==ye?P:null,M.className,Me.className).filter(Boolean).join(" "),N.ref=B,C.createElement(W,N)}(x,c,p,E)};return f.displayName=m,(x=je.forwardRef(f)).attrs=g,x.componentStyle=w,x.displayName=m,x.shouldForwardProp=k,x.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):co,x.styledComponentId=d,x.target=r?e.target:e,x.withComponent=function(c){var p=t.componentId,y=function(_,I){if(_==null)return{};var $,Z,U={},he=Object.keys(_);for(Z=0;Z<he.length;Z++)$=he[Z],I.indexOf($)>=0||(U[$]=_[$]);return U}(t,["componentId"]),M=p&&p+"-"+(wi(c)?c:Pl(sc(c)));return Kf(c,ht({},y,{attrs:g,componentId:M}),n)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(c){this._foldedDefaultProps=r?Yf({},e.defaultProps,c):c}}),Object.defineProperty(x,"toString",{value:function(){return"."+x.styledComponentId}}),i&&n0(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var Oa=function(e){return function t(n,r,i){if(i===void 0&&(i=Zt),!so.isValidElementType(r))return yn(1,String(r));var o=function(){return n(r,i,Vf.apply(void 0,arguments))};return o.withConfig=function(l){return t(n,r,ht({},i,{},l))},o.attrs=function(l){return t(n,r,ht({},i,{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},o}(Kf,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Oa[e]=Oa(e)});var A0=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=Bf(n),po.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,o){var l=o(wn(this.rules,r,i,o).join(""),""),a=this.componentId+n;i.insertRules(a,a,l)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,o){n>2&&po.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,o)},e}();function O0(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Vf.apply(void 0,[e].concat(n)),o="sc-global-"+Gf(JSON.stringify(i)),l=new A0(i,o);function a(s){var m=Hf(),d=bf(),g=C.useContext(Vr),k=C.useRef(m.allocateGSInstance(o)).current;return m.server&&u(k,s,m,g,d),C.useLayoutEffect(function(){if(!m.server)return u(k,s,m,g,d),function(){return l.removeStyles(k,m)}},[k,s,m,g,d]),null}function u(s,m,d,g,k){if(l.isStatic)l.renderStyles(s,i0,d,k);else{var x=ht({},m,{theme:Qf(m,g,a.defaultProps)});l.renderStyles(s,x,d,k)}}return je.memo(a)}const xe=Oa,pr={light:{globalBackground:"#FCE6FF",backgroundGradient:"radial-gradient(circle at 50% 58.5%, rgba(49,233,129,0.15) 0%, rgba(58, 175, 185,0.15) 20%, rgba(252,230,255,0) 50%);",backgroundGradient1500:"radial-gradient(circle at 50% 60%, rgba(49,233,129,0.15) 0%, rgba(58, 175, 185,0.15) 14%, rgba(252,230,255,0) 35%);",backgroundGradient1200:"radial-gradient(circle at 50% 60%, rgba(49,233,129,0.15) 0%, rgba(58, 175, 185,0.15) 14%, rgba(252,230,255,0) 35%);",backgroundGradient1000:"radial-gradient(circle at 50% 62.5%, rgba(49,233,129,0.15) 0%, rgba(58, 175, 185,0.15) 12%, rgba(252,230,255,0) 30%);",backgroundGradient800:"linear-gradient(180deg, rgba(49,233,129,0.15) 0%, rgba(58, 175, 185,0.15) 11%, rgba(252,230,255,0) 22%);",backgroundGradientMobile:"radial-gradient(circle at 50% 50%, rgba(49,233,129,0.15) 0%, rgba(58, 175, 185,0.15) 7%, rgba(252,230,255,0) 17.5%);",upwardsGradient:"linear-gradient(0deg, rgba(49,233,129,0.15) 0%, rgba(58, 175, 185,0.15) 11%, rgba(252,230,255,1) 22%);",titles:"#171D1C",inputBackground:"#BAA6BD",bigInputBackground:"#BAA6BD",inputText:"#166638",clockOpacity:.1,buttonBackground:"#FF9FD9",eventBackground:"rgba(255, 159, 217, 0.2)"},dark:{globalBackground:"#130019",backgroundGradient:"radial-gradient(circle at 50% 58.5%, rgba(0,242,80,0.1) 0%, rgba(100,5,255,0.1) 20%, rgba(19,0,25,0) 50%);",backgroundGradient1500:"radial-gradient(circle at 50% 60%, rgba(0,242,80,0.1) 0%, rgba(100,5,255,0.1) 14%, rgba(19,0,25,0) 35%);",backgroundGradient1200:"radial-gradient(circle at 50% 60%, rgba(0,242,80,0.1) 0%, rgba(100,5,255,0.1) 14%, rgba(19,0,25,0) 35%);",backgroundGradient1000:"radial-gradient(circle at 50% 62.5%, rgba(0,242,80,0.1) 0%, rgba(100,5,255,0.1) 12%, rgba(19,0,25,0) 30%);",backgroundGradient800:"linear-gradient(180deg, rgba(0,242,80,0.1) 0%, rgba(100,5,255,0.1) 11%, rgba(19,0,25,0) 22%);",backgroundGradientMobile:"radial-gradient(circle at 50% 50%, rgba(0,242,80,0.1) 0%, rgba(100,5,255,0.1) 7%, rgba(19,0,25,0) 17.5%);",upwardsGradient:"linear-gradient(0deg, rgba(0,242,80,0.1) 0%, rgba(100,5,255,0.1) 11%, rgba(19,0,25,1) 22%);",titles:"#EFF6E0",inputBackground:"#0D0013",bigInputBackground:"#07000D",inputText:"#00F250",clockOpacity:.3,buttonBackground:"#36045A",eventBackground:"rgba(81, 6, 135, 0.15)"}},L0=O0`
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
    height: 100vh;
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
 */function Qr(){return Qr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qr.apply(this,arguments)}var Wt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Wt||(Wt={}));const hc="popstate";function D0(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:l,hash:a}=r.location;return La("",{pathname:o,search:l,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:mo(i)}return j0(t,n,null,e)}function Ee(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Qu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function F0(){return Math.random().toString(36).substr(2,8)}function gc(e,t){return{usr:e.state,key:e.key,idx:t}}function La(e,t,n,r){return n===void 0&&(n=null),Qr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?tr(t):t,{state:n,key:t&&t.key||r||F0()})}function mo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function tr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function j0(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,l=i.history,a=Wt.Pop,u=null,s=m();s==null&&(s=0,l.replaceState(Qr({},l.state,{idx:s}),""));function m(){return(l.state||{idx:null}).idx}function d(){a=Wt.Pop;let E=m(),f=E==null?null:E-s;s=E,u&&u({action:a,location:w.location,delta:f})}function g(E,f){a=Wt.Push;let c=La(w.location,E,f);n&&n(c,E),s=m()+1;let p=gc(c,s),y=w.createHref(c);try{l.pushState(p,"",y)}catch{i.location.assign(y)}o&&u&&u({action:a,location:w.location,delta:1})}function k(E,f){a=Wt.Replace;let c=La(w.location,E,f);n&&n(c,E),s=m();let p=gc(c,s),y=w.createHref(c);l.replaceState(p,"",y),o&&u&&u({action:a,location:w.location,delta:0})}function x(E){let f=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof E=="string"?E:mo(E);return Ee(f,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,f)}let w={get action(){return a},get location(){return e(i,l)},listen(E){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(hc,d),u=E,()=>{i.removeEventListener(hc,d),u=null}},createHref(E){return t(i,E)},createURL:x,encodeLocation(E){let f=x(E);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:k,go(E){return l.go(E)}};return w}var vc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(vc||(vc={}));function B0(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?tr(t):t,i=Gu(r.pathname||"/",n);if(i==null)return null;let o=Xf(e);U0(o);let l=null;for(let a=0;l==null&&a<o.length;++a)l=X0(o[a],q0(i));return l}function Xf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,l,a)=>{let u={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};u.relativePath.startsWith("/")&&(Ee(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let s=Jt([r,u.relativePath]),m=n.concat(u);o.children&&o.children.length>0&&(Ee(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+s+'".')),Xf(o.children,t,m,s)),!(o.path==null&&!o.index)&&t.push({path:s,score:Y0(s,o.index),routesMeta:m})};return e.forEach((o,l)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,l);else for(let u of Zf(o.path))i(o,l,u)}),t}function Zf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let l=Zf(r.join("/")),a=[];return a.push(...l.map(u=>u===""?o:[o,u].join("/"))),i&&a.push(...l),a.map(u=>e.startsWith("/")&&u===""?"/":u)}function U0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:K0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const W0=/^:\w+$/,H0=3,b0=2,V0=1,Q0=10,G0=-2,yc=e=>e==="*";function Y0(e,t){let n=e.split("/"),r=n.length;return n.some(yc)&&(r+=G0),t&&(r+=b0),n.filter(i=>!yc(i)).reduce((i,o)=>i+(W0.test(o)?H0:o===""?V0:Q0),r)}function K0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function X0(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let l=0;l<n.length;++l){let a=n[l],u=l===n.length-1,s=i==="/"?t:t.slice(i.length)||"/",m=Z0({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},s);if(!m)return null;Object.assign(r,m.params);let d=a.route;o.push({params:r,pathname:Jt([i,m.pathname]),pathnameBase:r1(Jt([i,m.pathnameBase])),route:d}),m.pathnameBase!=="/"&&(i=Jt([i,m.pathnameBase]))}return o}function Z0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=J0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],l=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((s,m,d)=>{if(m==="*"){let g=a[d]||"";l=o.slice(0,o.length-g.length).replace(/(.)\/+$/,"$1")}return s[m]=e1(a[d]||"",m),s},{}),pathname:o,pathnameBase:l,pattern:e}}function J0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Qu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,a)=>(r.push(a),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function q0(e){try{return decodeURI(e)}catch(t){return Qu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function e1(e,t){try{return decodeURIComponent(e)}catch(n){return Qu(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Gu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function t1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?tr(e):e;return{pathname:n?n.startsWith("/")?n:n1(n,t):t,search:i1(r),hash:o1(i)}}function n1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function $l(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Jf(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function qf(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=tr(e):(i=Qr({},e),Ee(!i.pathname||!i.pathname.includes("?"),$l("?","pathname","search",i)),Ee(!i.pathname||!i.pathname.includes("#"),$l("#","pathname","hash",i)),Ee(!i.search||!i.search.includes("#"),$l("#","search","hash",i)));let o=e===""||i.pathname==="",l=o?"/":i.pathname,a;if(r||l==null)a=n;else{let d=t.length-1;if(l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),d-=1;i.pathname=g.join("/")}a=d>=0?t[d]:"/"}let u=t1(i,a),s=l&&l!=="/"&&l.endsWith("/"),m=(o||l===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(s||m)&&(u.pathname+="/"),u}const Jt=e=>e.join("/").replace(/\/\/+/g,"/"),r1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),i1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,o1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function l1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function a1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const u1=typeof Object.is=="function"?Object.is:a1,{useState:s1,useEffect:c1,useLayoutEffect:d1,useDebugValue:f1}=Al;function p1(e,t,n){const r=t(),[{inst:i},o]=s1({inst:{value:r,getSnapshot:t}});return d1(()=>{i.value=r,i.getSnapshot=t,Nl(i)&&o({inst:i})},[e,r,t]),c1(()=>(Nl(i)&&o({inst:i}),e(()=>{Nl(i)&&o({inst:i})})),[e]),f1(r),r}function Nl(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!u1(n,r)}catch{return!0}}function m1(e,t,n){return t()}const h1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",g1=!h1,v1=g1?m1:p1;"useSyncExternalStore"in Al&&(e=>e.useSyncExternalStore)(Al);const ep=C.createContext(null),tp=C.createContext(null),Jr=C.createContext(null),Jo=C.createContext(null),nr=C.createContext({outlet:null,matches:[]}),np=C.createContext(null);function Da(){return Da=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Da.apply(this,arguments)}function y1(e,t){let{relative:n}=t===void 0?{}:t;qr()||Ee(!1);let{basename:r,navigator:i}=C.useContext(Jr),{hash:o,pathname:l,search:a}=rp(e,{relative:n}),u=l;return r!=="/"&&(u=l==="/"?r:Jt([r,l])),i.createHref({pathname:u,search:a,hash:o})}function qr(){return C.useContext(Jo)!=null}function qo(){return qr()||Ee(!1),C.useContext(Jo).location}function w1(){qr()||Ee(!1);let{basename:e,navigator:t}=C.useContext(Jr),{matches:n}=C.useContext(nr),{pathname:r}=qo(),i=JSON.stringify(Jf(n).map(a=>a.pathnameBase)),o=C.useRef(!1);return C.useEffect(()=>{o.current=!0}),C.useCallback(function(a,u){if(u===void 0&&(u={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let s=qf(a,JSON.parse(i),r,u.relative==="path");e!=="/"&&(s.pathname=s.pathname==="/"?e:Jt([e,s.pathname])),(u.replace?t.replace:t.push)(s,u.state,u)},[e,t,i,r])}function rp(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=C.useContext(nr),{pathname:i}=qo(),o=JSON.stringify(Jf(r).map(l=>l.pathnameBase));return C.useMemo(()=>qf(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function x1(e,t){qr()||Ee(!1);let{navigator:n}=C.useContext(Jr),r=C.useContext(tp),{matches:i}=C.useContext(nr),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let u=qo(),s;if(t){var m;let w=typeof t=="string"?tr(t):t;a==="/"||(m=w.pathname)!=null&&m.startsWith(a)||Ee(!1),s=w}else s=u;let d=s.pathname||"/",g=a==="/"?d:d.slice(a.length)||"/",k=B0(e,{pathname:g}),x=E1(k&&k.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:Jt([a,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:Jt([a,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,r||void 0);return t&&x?C.createElement(Jo.Provider,{value:{location:Da({pathname:"/",search:"",hash:"",state:null,key:"default"},s),navigationType:Wt.Pop}},x):x}function S1(){let e=P1(),t=l1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,o)}class k1 extends C.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?C.createElement(nr.Provider,{value:this.props.routeContext},C.createElement(np.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function C1(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(ep);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(nr.Provider,{value:t},r)}function E1(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(l=>l.route.id&&(i==null?void 0:i[l.route.id]));o>=0||Ee(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,l,a)=>{let u=l.route.id?i==null?void 0:i[l.route.id]:null,s=null;n&&(l.route.ErrorBoundary?s=C.createElement(l.route.ErrorBoundary,null):l.route.errorElement?s=l.route.errorElement:s=C.createElement(S1,null));let m=t.concat(r.slice(0,a+1)),d=()=>{let g=o;return u?g=s:l.route.Component?g=C.createElement(l.route.Component,null):l.route.element&&(g=l.route.element),C.createElement(C1,{match:l,routeContext:{outlet:o,matches:m},children:g})};return n&&(l.route.ErrorBoundary||l.route.errorElement||a===0)?C.createElement(k1,{location:n.location,component:s,error:u,children:d(),routeContext:{outlet:null,matches:m}}):d()},null)}var wc;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(wc||(wc={}));var ho;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(ho||(ho={}));function z1(e){let t=C.useContext(tp);return t||Ee(!1),t}function M1(e){let t=C.useContext(nr);return t||Ee(!1),t}function T1(e){let t=M1(),n=t.matches[t.matches.length-1];return n.route.id||Ee(!1),n.route.id}function P1(){var e;let t=C.useContext(np),n=z1(ho.UseRouteError),r=T1(ho.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Di(e){Ee(!1)}function _1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Wt.Pop,navigator:o,static:l=!1}=e;qr()&&Ee(!1);let a=t.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:a,navigator:o,static:l}),[a,o,l]);typeof r=="string"&&(r=tr(r));let{pathname:s="/",search:m="",hash:d="",state:g=null,key:k="default"}=r,x=C.useMemo(()=>{let w=Gu(s,a);return w==null?null:{location:{pathname:w,search:m,hash:d,state:g,key:k},navigationType:i}},[a,s,m,d,g,k,i]);return x==null?null:C.createElement(Jr.Provider,{value:u},C.createElement(Jo.Provider,{children:n,value:x}))}function $1(e){let{children:t,location:n}=e,r=C.useContext(ep),i=r&&!t?r.router.routes:Fa(t);return x1(i,n)}var xc;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(xc||(xc={}));new Promise(()=>{});function Fa(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let o=[...t,i];if(r.type===C.Fragment){n.push.apply(n,Fa(r.props.children,o));return}r.type!==Di&&Ee(!1),!r.props.index||!r.props.children||Ee(!1);let l={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(l.children=Fa(r.props.children,o)),n.push(l)}),n}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ja(){return ja=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ja.apply(this,arguments)}function N1(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function R1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function I1(e,t){return e.button===0&&(!t||t==="_self")&&!R1(e)}const A1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function O1(e){let{basename:t,children:n,window:r}=e,i=C.useRef();i.current==null&&(i.current=D0({window:r,v5Compat:!0}));let o=i.current,[l,a]=C.useState({action:o.action,location:o.location});return C.useLayoutEffect(()=>o.listen(a),[o]),C.createElement(_1,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o})}const L1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",D1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ba=C.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:l,state:a,target:u,to:s,preventScrollReset:m}=t,d=N1(t,A1),{basename:g}=C.useContext(Jr),k,x=!1;if(typeof s=="string"&&D1.test(s)&&(k=s,L1)){let c=new URL(window.location.href),p=s.startsWith("//")?new URL(c.protocol+s):new URL(s),y=Gu(p.pathname,g);p.origin===c.origin&&y!=null?s=y+p.search+p.hash:x=!0}let w=y1(s,{relative:i}),E=F1(s,{replace:l,state:a,target:u,preventScrollReset:m,relative:i});function f(c){r&&r(c),c.defaultPrevented||E(c)}return C.createElement("a",ja({},d,{href:k||w,onClick:x||o?r:f,ref:n,target:u}))});var Sc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Sc||(Sc={}));var kc;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(kc||(kc={}));function F1(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:l}=t===void 0?{}:t,a=w1(),u=qo(),s=rp(e,{relative:l});return C.useCallback(m=>{if(I1(m,n)){m.preventDefault();let d=r!==void 0?r:mo(u)===mo(s);a(e,{replace:d,state:i,preventScrollReset:o,relative:l})}},[u,a,s,r,i,n,e,o,l])}const j1=xe.div`    
    >header{
        display: flex;

        a{
            width: max-content;
        }
    }

//------------------ Media Queries ------------------
    
    @media(max-width: 800px){
        >header{
            flex-direction: column;
            justify-content: flex-start;
        }
    }
`,B1=xe.div`
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
        font-size: 8px;
        bottom: -0.6rem;
        right: 1rem;
        background-color: ${({theme:e})=>e.globalBackground};
        padding: 0 2px;
    }

//------------------ Media Queries ------------------
    
    @media(min-width: 801px){
        >h2{
            font-size: 3rem;
            top: -2.3rem;
            padding: 0 5px;
        }

        >span{
            font-size: 1.2rem;
            bottom: -0.9rem;
            padding: 0 3px;
        }
    }

    @media(min-width: 1031px){
        margin: 10rem 2.5rem 0 2.5rem;
        >h2{
            font-size: 4rem;
            top: -2.8rem;
        }

        >span{
            font-size: 1.6rem;
            bottom: -1.3rem;
            right: 2rem;
            padding: 0 5px;
        }
    }

    @media(min-width: 1731px){
        padding: 4rem;
        >h2{
            font-size: 4.5rem;
            top: -3.4rem;
        }

        >span{
            font-size: 1.6rem;
            bottom: -1.3rem;
        }
    }
`,U1=xe.ul`
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
`,W1=xe.header`
        display: flex;
        align-items: end;
        margin: 2rem 0 0 5rem;
        position: relative;
        z-index: 2;
        width: fit-content;

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
    }

    @media(max-width: 1500px){
        margin-top: 1.8rem;

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
        margin: 1.8rem 0 0 3rem;

        a{
            font-size: 5.8rem;
        }

        span{
            font-size: 1.9rem;
            margin-bottom: 8px;
            margin-left: 7px;
        }
    }

    @media(max-width: 1030px){
        margin: 1.5rem 0 0 3rem;
        flex-direction: column;
        align-items: flex-start;

        a{
            font-size: 5.5rem;
            width: min-content;
        }
    }

    @media(max-width: 800px){
        flex-direction: column;
        justify-content: flex-start;
        align-items: start;
        margin: 1rem 0 0 1.8rem;

        a{
            font-size: 3.5rem;
            width: max-content;
        }

        span{
            font-size: 2rem;
            margin: 0;
        }
    }
`;function Yu(){return Q(W1,{children:[S(Ba,{to:"/ChronoSum",children:"Chrono Sum"}),S("span",{children:"time operations!"})]})}const Cc="/ChronoSum/assets/clock_face_roman-7ffd0c99.svg";function H1(){return Q(j1,{children:[S("header",{children:S(Yu,{})}),Q(B1,{children:[S("h2",{children:"Tools"}),Q(U1,{children:[Q("li",{children:[S(Ba,{to:"/ChronoSum/SimpleSum",children:"Simple sum"}),S("span",{children:"Add to, or, subtract from a given time"})]}),Q("li",{children:[S(Ba,{to:"/ChronoSum/DurationSum",children:"Duration sum"}),S("span",{children:"Get the total duration of a series of events"})]})]}),S("span",{children:"(Click on the page title to return to this page)"})]})]})}const b1=xe.div`
    >header{
        display: flex;
        justify-content: space-between;
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
`,V1=xe.div`
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
`,Q1=xe.div`
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
`,G1=xe.div`
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
`;function xi({name:e,state:t,onChange:n}){return Q(G1,{children:[S("label",{htmlFor:"name",children:e}),S("input",{type:"text",id:e,onChange:n,value:t}),S("span",{id:e+"ToAddWarning",className:"Warning"})]})}const Y1=xe.div`
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
`,ip=C.createContext({});function K1({children:e}){const[t,n]=C.useState(["Hours","Minutes","Minutes","Seconds","Miliseconds"]),[r,i]=C.useState(!1),[o,l]=C.useState([]);return S(ip.Provider,{value:{enabledFields:t,setEnabledFields:n,format:r,setFormat:i,events:o,setEvents:l},children:e})}function rr(){return C.useContext(ip)}function Si({name:e,state:t,onChange:n}){const{enabledFields:r}=rr();return Q(Y1,{children:[S("label",{htmlFor:"name",children:e}),S("input",{type:"text",id:e,value:r.includes(e+"s")?t:"--",disabled:!r.includes(e+"s"),onChange:n}),S("span",{id:"Initial"+e+"Warning",className:"Warning"})]})}const X1=xe.div`
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
`;function ki({name:e,state:t}){return Q(X1,{children:[S("label",{htmlFor:"Resulting"+e,children:e}),S("span",{id:"Resulting"+e,children:t})]})}const Z1=xe.div`
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
`;var op={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ec=je.createContext&&je.createContext(op),qt=globalThis&&globalThis.__assign||function(){return qt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},qt.apply(this,arguments)},J1=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function lp(e){return e&&e.map(function(t,n){return je.createElement(t.tag,qt({key:n},t.attr),lp(t.child))})}function kn(e){return function(t){return je.createElement(q1,qt({attr:qt({},e.attr)},t),lp(e.child))}}function q1(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,l=J1(e,["attr","size","title"]),a=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),je.createElement("svg",qt({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:u,style:qt(qt({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),o&&je.createElement("title",null,o),e.children)};return Ec!==void 0?je.createElement(Ec.Consumer,null,function(n){return t(n)}):t(op)}function Ua(e){return kn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M9 9h6v6H9z"}},{tag:"path",attr:{d:"M19 17V7c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2zM7 7h10l.002 10H7V7z"}}]})(e)}function Wa(e){return kn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7 5c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2H7zm0 12V7h10l.002 10H7z"}}]})(e)}function Ci({name:e,calculate:t}){const{setEnabledFields:n}=rr(),[r,i]=C.useState(!0);C.useEffect(()=>{document.querySelector("#"+e).checked=!0},[]);function o(){const l=document.querySelector("#"+e).checked;i(l),n(l?a=>[...a,e]:a=>a.filter(u=>u!=e)),t(l,e)}return Q(Z1,{children:[S("div",{id:"checkboxDisplay",children:r?S(Ua,{}):S(Wa,{})}),S("input",{type:"checkbox",id:e,onChange:()=>o()}),S("label",{htmlFor:e,children:e})]})}const eg=xe.div`
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
`;function tg(e){return kn({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M17 12h-14"}},{tag:"path",attr:{d:"M6 9l-3 3l3 3"}},{tag:"path",attr:{d:"M19 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}}]})(e)}function ng({name:e,opt1:t,opt2:n,onChange:r}){return Q(eg,{children:[S("label",{htmlFor:"FormatSlider",children:e}),Q("div",{className:"InputWrapper",children:[S("span",{children:t}),Q("label",{htmlFor:"FormatSlider",className:"SliderBox",children:[S("input",{type:"checkbox",id:"FormatSlider",onChange:r}),S("span",{className:"Slider",children:S(tg,{})})]}),S("span",{children:n})]})]})}let O={initialHours:0,initialMinutes:0,initialSeconds:0,initialMiliseconds:0,hoursToAdd:0,minutesToAdd:0,secondsToAdd:0,milisecondsToAdd:0};function rg(){const{enabledFields:e,format:t,setFormat:n}=rr(),[r,i]=C.useState(""),[o,l]=C.useState(""),[a,u]=C.useState(""),[s,m]=C.useState(""),[d,g]=C.useState(""),[k,x]=C.useState(""),[w,E]=C.useState(""),[f,c]=C.useState(""),[p,y]=C.useState(""),[M,_]=C.useState(""),[I,$]=C.useState(""),[Z,U]=C.useState(""),[he,se]=C.useState(""),[ye,ze]=C.useState(""),[Se,Ye]=C.useState(""),[Me,P]=C.useState(""),[B,W]=C.useState("AM"),[ee,T]=C.useState("AM");function N(){i(""),l(""),u(""),m(""),g(""),x(""),E(""),c(""),y(""),_(""),$(""),U(""),T("AM"),O.initialHours=0,O.initialMinutes=0,O.initialSeconds=0,O.initialMiliseconds=0,O.hoursToAdd=0,O.minutesToAdd=0,O.secondsToAdd=0,O.milisecondsToAdd=0,v()}function R(h){if(h)W(h),h=="PM"&&(r=="0"||r==""?i(""):r!="12"&&(O.initialHours+=12)),h=="AM"&&(r=="12"?(i("11"),O.initialHours=11):r!=""&&(O.initialHours-=12)),v();else{const H=document.querySelector("#FormatSlider").checked;n(H),H?(r>11&&(r>12&&i(L=>L-12),W("PM")),p>11&&(p>12&&y(L=>L-12),T("PM"))):r!=""&&(B=="PM"&&(r!=12&&i(L=>L+12),W("AM"),T("AM")),ee=="PM"&&p!="12"&&y(L=>L+12))}}function F(h,H){switch(H){case"initialHours":if(h!=0&isNaN(parseInt(h))){j("#InitialHourWarning","Only numbers are allowed");return}if(t){if(B=="AM"){if(h>11||h<0){j("#InitialHourWarning","Hour AM must be between 0 and 11");return}h!=""?(i(parseInt(h)),O.initialHours=parseInt(h)):(i(""),O.initialHours=0)}if(B=="PM"){if((h>12||h<1)&&h!=""){j("#InitialHourWarning","Hour PM must be between 1 and 12");return}h!=""?(i(parseInt(h)),h<12?O.initialHours=parseInt(h)+12:O.initialHours=parseInt(h)):(i(""),O.initialHours=0)}}else{if(h>23||h<0){j("#InitialHourWarning","Hour must be a value between 0 and 23");return}h!=""?(i(parseInt(h)),O.initialHours=parseInt(h)):(i(""),O.initialHours=0)}break;case"initialMinutes":if(h>59||h<0){j("#InitialMinuteWarning","Minute must be a value between 0 and 59");return}if(h!=0&isNaN(parseInt(h))){j("#InitialMinuteWarning","Only numbers are allowed");return}h!=""?(l(parseInt(h)),O.initialMinutes=parseInt(h)):(l(""),O.initialMinutes=0);break;case"initialSeconds":if(h>59||h<0){j("#InitialSecondWarning","Second must be a value between 0 and 59");return}if(h!=0&isNaN(parseInt(h))){j("#InitialSecondWarning","Only numbers are allowed");return}h!=""?(u(parseInt(h)),O.initialSeconds=parseInt(h)):(u(""),O.initialSeconds=0);break;case"initialMiliseconds":if(h>999||h<0){j("#InitialMilisecondWarning","Milisecond must be a value between 0 and 999");return}if(h!=0&isNaN(parseInt(h))){j("#InitialMilisecondWarning","Only numbers are allowed");return}h!=""?(m(parseInt(h)),O.initialMiliseconds=parseInt(h)):(m(""),O.initialMiliseconds=0);break;case"hoursToAdd":if(h!=0&isNaN(parseInt(h))&h!="-"){j("#HoursToAddWarning","Only numbers are allowed");return}if(h>=9007199254740991){j("#HoursToAddWarning","Max value reached!");return}h!=""&h!="-"?(g(parseInt(h)),O.hoursToAdd=parseInt(h)):(h=="-"?g("-"):g(""),O.hoursToAdd=0);break;case"minutesToAdd":if(h!=0&isNaN(parseInt(h))&h!="-"){j("#MinutesToAddWarning","Only numbers are allowed");return}if(h>=9007199254740991){j("#MinutesToAddWarning","Max value reached!");return}h!=""&h!="-"?(x(parseInt(h)),O.minutesToAdd=parseInt(h)):(h=="-"?x("-"):x(""),O.minutesToAdd=0);break;case"secondsToAdd":if(h!=0&isNaN(parseInt(h))&h!="-"){j("#SecondsToAddWarning","Only numbers are allowed");return}if(h>=9007199254740991){j("#SecondsToAddWarning","Max value reached!");return}h!=""&h!="-"?(E(parseInt(h)),O.secondsToAdd=parseInt(h)):(h=="-"?E("-"):E(""),O.secondsToAdd=0);break;case"milisecondsToAdd":if(h!=0&isNaN(parseInt(h))&h!="-"){j("#MilisecondsToAddWarning","Only numbers are allowed");return}if(h>=9007199254740991){j("#MilisecondsToAddWarning","Max value reached!");return}h!=""&h!="-"?(c(parseInt(h)),O.milisecondsToAdd=parseInt(h)):(h=="-"?c("-"):c(""),O.milisecondsToAdd=0);break}v()}function v(h,H){let L=0,G=0,D=0,K=0,te=0,b=0,ne=0,J="";if(H){switch(H){case"Hours":h?K=O.initialHours+O.hoursToAdd:K=0;break;case"Minutes":h?te=O.initialMinutes+O.minutesToAdd:te=0;break;case"Seconds":h?b=O.initialSeconds+O.secondsToAdd:b=0;break;case"Miliseconds":h?ne=O.initialMiliseconds+O.milisecondsToAdd:ne=0;break}H!="Hours"&e.includes("Hours")&&(K=O.initialHours+O.hoursToAdd),H!="Minutes"&e.includes("Minutes")&&(te=O.initialMinutes+O.minutesToAdd),H!="Seconds"&e.includes("Seconds")&&(b=O.initialSeconds+O.secondsToAdd),H!="Miliseconds"&e.includes("Miliseconds")&&(ne=O.initialMiliseconds+O.milisecondsToAdd)}else e.includes("Hours")&&(K=O.initialHours+O.hoursToAdd),e.includes("Minutes")&&(te=O.initialMinutes+O.minutesToAdd),e.includes("Seconds")&&(b=O.initialSeconds+O.secondsToAdd),e.includes("Miliseconds")&&(ne=O.initialMiliseconds+O.milisecondsToAdd);if(ne>999){const V=Math.floor(ne/1e3);ne=ne%1e3,b+=V}else if(ne<0){const V=Math.floor(ne/1e3);b+=V,ne-=V*1e3}if(b>59){const V=Math.floor(b/60);b=b%60,te+=V}else if(b<0){const V=Math.floor(b/60);te+=V,b-=V*60}if(te>59){const V=Math.floor(te/60);te=te%60,K+=V}else if(te<0){const V=Math.floor(te/60);K+=V,te-=V*60}if(K>23){const V=Math.floor(K/24);K=K%24,D=V,J="after"}else if(K<0){const V=Math.floor(K/24);D-=V,K-=V*24,J="before"}if(D>29){const V=Math.floor(D/30);D=D%30,G=V}else if(D<0){const V=Math.floor(D/30);G-=V,D-=V*30}if(G>11){const V=Math.floor(G/12);G=G%12,L=V}else if(L<0){const V=Math.floor(G/12);L-=V,G-=V*12}t&&(K>11?(K>12&&(K-=12),T("PM")):T("AM")),K!=0?y(K):(O.hoursToAdd!=""||O.initialHours!="")&(!H||H!="Hours"||H=="Hours"&h)?y("0"):y(""),te!=0?_(te):(O.minutesToAdd!=""||O.initialMinutes!="")&(!H||H!="Minutes"||H=="Minutes"&h)?_("0"):_(""),b!=0?$(b):(O.secondsToAdd!=""||O.initialSeconds!="")&(!H||H!="Seconds"||H=="Seconds"&h)?$("0"):$(""),ne!=0?U(ne):(O.milisecondsToAdd!=""||O.initialMiliseconds!="")&(!H||H!="Miliseconds"||H=="Miliseconds"&h)?U("0"):U(""),D!=0?Math.sqrt(Math.pow(D,2))==1?se("The day"):se(`${D} days`):G!=0||L!=0?se("0 days"):se(""),G!=0?G>1?ze(`${G} months`):ze(`${G} month`):L!=0?ze("0 months"):ze(""),L!=0?L>1?Ye(`${L} years`):Ye(`${L} year`):Ye(""),D!=0||G!=0||L!=0?P(J):P("")}function j(h,H){const L=document.querySelector(h);L.textContent=H,L.classList.add("active"),L.style.opacity=1,setTimeout(()=>L.classList.remove("active"),1),setTimeout(()=>L.style.opacity=0,500)}return Q(b1,{children:[Q("header",{children:[S(Yu,{}),Q("div",{id:"options",children:[S(Ci,{name:"Hours",calculate:v}),S(Ci,{name:"Minutes",calculate:v}),S(Ci,{name:"Seconds",calculate:v}),S(Ci,{name:"Miliseconds",calculate:v}),S(ng,{name:"Format",opt1:"24",opt2:"12",id:"FormatWrapper",onChange:()=>R()})]})]}),S("img",{src:Cc,id:"ClockBackgroundDesktop"}),Q("div",{id:"App",children:[Q("div",{id:"InitialTime",children:[S("label",{htmlFor:"InitialTime",id:"InitialTimeSideLabel",children:"Initial Time"}),t==!0&&Q("div",{id:"AM-PM_wrapperMobile",children:[S("label",{htmlFor:"AM",children:"AM"}),S("div",{className:"RadioDisplay",children:B=="AM"?S(Ua,{}):S(Wa,{})}),S("input",{type:"radio",id:"AM",name:"AM-PM",defaultChecked:!0,onClick:()=>R("AM")}),S("label",{htmlFor:"PM",children:"PM"}),S("div",{className:"RadioDisplay",children:B=="PM"?S(Ua,{}):S(Wa,{})}),S("input",{type:"radio",id:"PM",name:"AM-PM",onClick:()=>R("PM")})]}),S(Si,{name:"Hour",state:r,onChange:h=>F(h.target.value,"initialHours")}),S(Si,{name:"Minute",state:o,onChange:h=>F(h.target.value,"initialMinutes")}),S(Si,{name:"Second",state:a,onChange:h=>F(h.target.value,"initialSeconds")}),S(Si,{name:"Milisecond",state:s,onChange:h=>F(h.target.value,"initialMiliseconds")})]}),S("button",{type:"button",id:"ClearAllMobile",onClick:()=>N(),children:"Clear Inputs"}),Q(V1,{children:[e.includes("Hours")&&S(xi,{name:"Hours",state:d,onChange:h=>F(h.target.value,"hoursToAdd")}),e.includes("Minutes")&&S(xi,{name:"Minutes",state:k,onChange:h=>F(h.target.value,"minutesToAdd")}),e.includes("Seconds")&&S(xi,{name:"Seconds",state:w,onChange:h=>F(h.target.value,"secondsToAdd")}),e.includes("Miliseconds")&&S(xi,{name:"Miliseconds",state:f,onChange:h=>F(h.target.value,"milisecondsToAdd")}),S("button",{type:"button",id:"ClearAllDesktop",onClick:()=>N(),children:"Clear Inputs"})]}),S("img",{src:Cc,id:"ClockBackgroundMobile"}),Q(Q1,{id:"date",children:[he&&S("p",{id:"Days",children:he}),ye&&S("p",{id:"Months",children:ye}),Se&&S("p",{id:"Years",children:Se}),Me&&S("span",{children:Me})]}),Q("div",{id:"ResultingTime",children:[S("label",{htmlFor:"ResultingTime",id:"ResultingTimeSideLabel",children:"Resulting Time"}),t&&S("span",{id:"Identifier",children:ee}),S(ki,{name:"Hour",state:p}),S(ki,{name:"Minute",state:M}),S(ki,{name:"Second",state:I}),S(ki,{name:"Milisecond",state:Z})]})]})]})}const ig=xe.div`
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
`,og=xe.ul`
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
`,lg=xe.div`
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

        span, input{
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
                width: 0;
            }
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
`,ag=xe.li`
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
        min-height: 38.1rem;
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

            span{
                font-size: 2.5rem;
            }
        }
    }
`,Rl=xe.div`
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
        background-color: ${({theme:e})=>e.inputBackground};
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
`;function ug(e){return kn({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 3c-4.963 0-9 4.038-9 9s4.037 9 9 9 9-4.038 9-9-4.037-9-9-9zm0 16c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7zM12.707 12l2.646-2.646c.194-.194.194-.512 0-.707-.195-.194-.513-.194-.707 0l-2.646 2.646-2.646-2.647c-.195-.194-.513-.194-.707 0-.195.195-.195.513 0 .707l2.646 2.647-2.646 2.646c-.195.195-.195.513 0 .707.097.098.225.147.353.147s.256-.049.354-.146l2.646-2.647 2.646 2.646c.098.098.226.147.354.147s.256-.049.354-.146c.194-.194.194-.512 0-.707l-2.647-2.647z"}}]})(e)}function sg({name:e,hours:t,minutes:n,seconds:r,id:i}){const{setEvents:o}=rr();function l(){o(a=>a.filter(u=>u.id!=i))}return Q(ag,{children:[S("button",{className:"Delete",onClick:()=>l(),children:S(ug,{})}),S("span",{className:"Name",children:e}),Q("div",{className:"DurationWrapper",children:[S("span",{children:"Duration:"}),Q("div",{className:"FieldsWrapper",children:[Q(Rl,{children:[S("label",{htmlFor:"hours",children:"Hours"}),S("input",{type:"text",id:"hours",disabled:!0,value:t})]}),Q(Rl,{children:[S("label",{htmlFor:"hours",children:"Minutes"}),S("input",{type:"text",id:"hours",disabled:!0,value:n})]}),Q(Rl,{children:[S("label",{htmlFor:"hours",children:"Seconds"}),S("input",{type:"text",id:"hours",disabled:!0,value:r})]})]})]})]})}const cg=xe.li`
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
`,Il=xe.div`
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
`;function dg(e){return kn({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M363 277h-86v86h-42v-86h-86v-42h86v-86h42v86h86v42z"}},{tag:"path",attr:{d:"M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422c-44.3 0-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256c0-44.3 17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"}}]})(e)}function fg({}){const{setEvents:e}=rr(),[t,n]=C.useState(""),[r,i]=C.useState(""),[o,l]=C.useState(""),[a,u]=C.useState("");function s(d,g){if(!(d>=9007199254740991))switch(g){case"hour":d!=""&!isNaN(parseInt(d))&&i(parseInt(d)),d==""&&i(0);break;case"minute":d!=""&!isNaN(parseInt(d))&&l(parseInt(d)),d==""&&l(0);break;case"second":d!=""&!isNaN(parseInt(d))&&u(parseInt(d)),d==""&&u(0);break}}function m(){const d={name:t,hour:r,minute:o,second:a,id:Date.now()};d.hour==""&&(d.hour=0),d.minute==""&&(d.minute=0),d.second==""&&(d.second=0),e(g=>[d,...g]),n(""),i(""),l(""),u("")}return Q(cg,{children:[S("button",{className:"Add",onClick:()=>m(),children:S(dg,{})}),Q("div",{className:"Name",children:[S("label",{htmlFor:"Name",children:"New event name"}),S("input",{type:"text",id:"Name",value:t,onChange:d=>n(d.target.value)})]}),Q("div",{className:"DurationWrapper",children:[S("span",{children:"Duration:"}),Q("div",{className:"FieldsWrapper",children:[Q(Il,{children:[S("label",{htmlFor:"hours",children:"Hours"}),S("input",{type:"text",id:"hours",value:r,onChange:d=>s(d.target.value,"hour")})]}),Q(Il,{children:[S("label",{htmlFor:"hours",children:"Minutes"}),S("input",{type:"text",id:"hours",value:o,onChange:d=>s(d.target.value,"minute")})]}),Q(Il,{children:[S("label",{htmlFor:"hours",children:"Seconds"}),S("input",{type:"text",id:"hours",value:a,onChange:d=>s(d.target.value,"second")})]})]})]})]})}function pg(){const{events:e}=rr(),[t,n]=C.useState(""),[r,i]=C.useState(""),[o,l]=C.useState("");return C.useEffect(()=>{function a(){let u=0,s=0,m=0;if(e.map(d=>u+=parseInt(d.hour)),e.map(d=>s+=parseInt(d.minute)),e.map(d=>m+=parseInt(d.second)),m>59){const d=Math.floor(m/60);m=m%60,s+=d}if(s>59){const d=Math.floor(s/60);s=s%60,console.log(u),u+=d,console.log(d,s)}if(u>=9007199254740991){alert("Max result value reached, exclude one or more events to recalculate");return}n(u),i(s),l(m),isNaN(u)&&n(0),isNaN(s)&&i(0),isNaN(m)&&l(0)}a()},[e]),Q(ig,{children:[Q("header",{children:[" ",S(Yu,{})," "]}),Q(og,{children:[S("span",{children:"Events"}),S(fg,{}),e.map((a,u)=>S(sg,{name:a.name,hours:a.hour,minutes:a.minute,seconds:a.second,id:a.id},u))]}),Q(lg,{children:[S("h2",{children:"Result"}),Q("div",{id:"resultsWrapper",children:[Q("div",{className:"resultWrapper",children:[S("label",{htmlFor:"hours",children:"Hours"}),S("input",{id:"hours",value:t,disabled:!0})]}),Q("div",{className:"resultWrapper",children:[S("label",{htmlFor:"minutes",children:"Minutes"}),Q("span",{id:"minutes",children:[" ",r," "]})]}),Q("div",{className:"resultWrapper",children:[S("label",{htmlFor:"seconds",children:"Seconds"}),Q("span",{id:"seconds",children:[" ",o," "]})]})]})]})]})}function mg(){return S(O1,{children:Q($1,{children:[S(Di,{path:"/ChronoSum/",element:S(H1,{})}),S(Di,{path:"/ChronoSum/SimpleSum",element:S(rg,{})}),S(Di,{path:"/ChronoSum/DurationSum",element:S(pg,{})})]})})}const hg=xe.button`
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
`;function gg(e){return kn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M9.37 5.51A7.35 7.35 0 009.1 7.5c0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0112 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"}}]})(e)}function vg(e){return kn({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"}}]})(e)}function yg(){const[e,t]=C.useState(pr.dark);function n(){e==pr.dark?t(pr.light):t(pr.dark)}return Q(I0,{theme:e,children:[S(L0,{}),S(hg,{onClick:()=>n(),children:e==pr.dark?S(gg,{}):S(vg,{})}),S(K1,{children:S(mg,{})})]})}Ol.createRoot(document.getElementById("root")).render(S(je.StrictMode,{children:S(yg,{})}));
