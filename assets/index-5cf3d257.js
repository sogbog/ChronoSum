function Sg(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Lg(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var oi={},kg={get exports(){return oi},set exports(e){oi=e}},po={},u={},Eg={get exports(){return u},set exports(e){u=e}},fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mi=Symbol.for("react.element"),Cg=Symbol.for("react.portal"),bg=Symbol.for("react.fragment"),Mg=Symbol.for("react.strict_mode"),Pg=Symbol.for("react.profiler"),Tg=Symbol.for("react.provider"),zg=Symbol.for("react.context"),Ig=Symbol.for("react.forward_ref"),Og=Symbol.for("react.suspense"),_g=Symbol.for("react.memo"),Rg=Symbol.for("react.lazy"),kc=Symbol.iterator;function $g(e){return e===null||typeof e!="object"?null:(e=kc&&e[kc]||e["@@iterator"],typeof e=="function"?e:null)}var sp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},op=Object.assign,lp={};function Er(e,t,n){this.props=e,this.context=t,this.refs=lp,this.updater=n||sp}Er.prototype.isReactComponent={};Er.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Er.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ap(){}ap.prototype=Er.prototype;function eu(e,t,n){this.props=e,this.context=t,this.refs=lp,this.updater=n||sp}var tu=eu.prototype=new ap;tu.constructor=eu;op(tu,Er.prototype);tu.isPureReactComponent=!0;var Ec=Array.isArray,up=Object.prototype.hasOwnProperty,nu={current:null},cp={key:!0,ref:!0,__self:!0,__source:!0};function dp(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)up.call(t,r)&&!cp.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Mi,type:e,key:s,ref:o,props:i,_owner:nu.current}}function Ng(e,t){return{$$typeof:Mi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ru(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mi}function Ag(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Cc=/\/+/g;function il(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ag(""+e.key):t.toString(36)}function ms(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Mi:case Cg:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+il(o,0):r,Ec(i)?(n="",e!=null&&(n=e.replace(Cc,"$&/")+"/"),ms(i,t,n,"",function(c){return c})):i!=null&&(ru(i)&&(i=Ng(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Cc,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Ec(e))for(var l=0;l<e.length;l++){s=e[l];var a=r+il(s,l);o+=ms(s,t,n,a,i)}else if(a=$g(e),typeof a=="function")for(e=a.call(e),l=0;!(s=e.next()).done;)s=s.value,a=r+il(s,l++),o+=ms(s,t,n,a,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Vi(e,t,n){if(e==null)return e;var r=[],i=0;return ms(e,r,"","",function(s){return t.call(n,s,i++)}),r}function Bg(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Je={current:null},hs={transition:null},Dg={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:hs,ReactCurrentOwner:nu};fe.Children={map:Vi,forEach:function(e,t,n){Vi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Vi(e,function(){t++}),t},toArray:function(e){return Vi(e,function(t){return t})||[]},only:function(e){if(!ru(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};fe.Component=Er;fe.Fragment=bg;fe.Profiler=Pg;fe.PureComponent=eu;fe.StrictMode=Mg;fe.Suspense=Og;fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dg;fe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=op({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=nu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)up.call(t,a)&&!cp.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:Mi,type:e.type,key:i,ref:s,props:r,_owner:o}};fe.createContext=function(e){return e={$$typeof:zg,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Tg,_context:e},e.Consumer=e};fe.createElement=dp;fe.createFactory=function(e){var t=dp.bind(null,e);return t.type=e,t};fe.createRef=function(){return{current:null}};fe.forwardRef=function(e){return{$$typeof:Ig,render:e}};fe.isValidElement=ru;fe.lazy=function(e){return{$$typeof:Rg,_payload:{_status:-1,_result:e},_init:Bg}};fe.memo=function(e,t){return{$$typeof:_g,type:e,compare:t===void 0?null:t}};fe.startTransition=function(e){var t=hs.transition;hs.transition={};try{e()}finally{hs.transition=t}};fe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};fe.useCallback=function(e,t){return Je.current.useCallback(e,t)};fe.useContext=function(e){return Je.current.useContext(e)};fe.useDebugValue=function(){};fe.useDeferredValue=function(e){return Je.current.useDeferredValue(e)};fe.useEffect=function(e,t){return Je.current.useEffect(e,t)};fe.useId=function(){return Je.current.useId()};fe.useImperativeHandle=function(e,t,n){return Je.current.useImperativeHandle(e,t,n)};fe.useInsertionEffect=function(e,t){return Je.current.useInsertionEffect(e,t)};fe.useLayoutEffect=function(e,t){return Je.current.useLayoutEffect(e,t)};fe.useMemo=function(e,t){return Je.current.useMemo(e,t)};fe.useReducer=function(e,t,n){return Je.current.useReducer(e,t,n)};fe.useRef=function(e){return Je.current.useRef(e)};fe.useState=function(e){return Je.current.useState(e)};fe.useSyncExternalStore=function(e,t,n){return Je.current.useSyncExternalStore(e,t,n)};fe.useTransition=function(){return Je.current.useTransition()};fe.version="18.2.0";(function(e){e.exports=fe})(Eg);const Ye=Lg(u),Fl=Sg({__proto__:null,default:Ye},[u]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg=u,jg=Symbol.for("react.element"),Ug=Symbol.for("react.fragment"),Wg=Object.prototype.hasOwnProperty,Hg=Fg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vg={key:!0,ref:!0,__self:!0,__source:!0};function fp(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Wg.call(t,r)&&!Vg.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:jg,type:e,key:s,ref:o,props:i,_owner:Hg.current}}po.Fragment=Ug;po.jsx=fp;po.jsxs=fp;(function(e){e.exports=po})(kg);const mo=oi.Fragment,L=oi.jsx,N=oi.jsxs;var jl={},Yt={},Gg={get exports(){return Yt},set exports(e){Yt=e}},dt={},Ul={},Qg={get exports(){return Ul},set exports(e){Ul=e}},pp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,F){var U=O.length;O.push(F);e:for(;0<U;){var q=U-1>>>1,$=O[q];if(0<i($,F))O[q]=F,O[U]=$,U=q;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var F=O[0],U=O.pop();if(U!==F){O[0]=U;e:for(var q=0,$=O.length,_=$>>>1;q<_;){var z=2*(q+1)-1,H=O[z],T=z+1,A=O[T];if(0>i(H,U))T<$&&0>i(A,H)?(O[q]=A,O[T]=U,q=T):(O[q]=H,O[z]=U,q=z);else if(T<$&&0>i(A,U))O[q]=A,O[T]=U,q=T;else break e}}return F}function i(O,F){var U=O.sortIndex-F.sortIndex;return U!==0?U:O.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var a=[],c=[],d=1,f=null,g=3,x=!1,w=!1,S=!1,k=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(O){for(var F=n(c);F!==null;){if(F.callback===null)r(c);else if(F.startTime<=O)r(c),F.sortIndex=F.expirationTime,t(a,F);else break;F=n(c)}}function y(O){if(S=!1,v(O),!w)if(n(a)!==null)w=!0,ne(P);else{var F=n(c);F!==null&&te(y,F.startTime-O)}}function P(O,F){w=!1,S&&(S=!1,h(C),C=-1),x=!0;var U=g;try{for(v(F),f=n(a);f!==null&&(!(f.expirationTime>F)||O&&!B());){var q=f.callback;if(typeof q=="function"){f.callback=null,g=f.priorityLevel;var $=q(f.expirationTime<=F);F=e.unstable_now(),typeof $=="function"?f.callback=$:f===n(a)&&r(a),v(F)}else r(a);f=n(a)}if(f!==null)var _=!0;else{var z=n(c);z!==null&&te(y,z.startTime-F),_=!1}return _}finally{f=null,g=U,x=!1}}var b=!1,M=null,C=-1,m=5,I=-1;function B(){return!(e.unstable_now()-I<m)}function Q(){if(M!==null){var O=e.unstable_now();I=O;var F=!0;try{F=M(!0,O)}finally{F?G():(b=!1,M=null)}}else b=!1}var G;if(typeof p=="function")G=function(){p(Q)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,J=W.port2;W.port1.onmessage=Q,G=function(){J.postMessage(null)}}else G=function(){k(Q,0)};function ne(O){M=O,b||(b=!0,G())}function te(O,F){C=k(function(){O(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,ne(P))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):m=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(O){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var U=g;g=F;try{return O()}finally{g=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,F){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var U=g;g=O;try{return F()}finally{g=U}},e.unstable_scheduleCallback=function(O,F,U){var q=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?q+U:q):U=q,O){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=U+$,O={id:d++,callback:F,priorityLevel:O,startTime:U,expirationTime:$,sortIndex:-1},U>q?(O.sortIndex=U,t(c,O),n(a)===null&&O===n(c)&&(S?(h(C),C=-1):S=!0,te(y,U-q))):(O.sortIndex=$,t(a,O),w||x||(w=!0,ne(P))),O},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(O){var F=g;return function(){var U=g;g=F;try{return O.apply(this,arguments)}finally{g=U}}}})(pp);(function(e){e.exports=pp})(Qg);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp=u,ct=Ul;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hp=new Set,li={};function Hn(e,t){mr(e,t),mr(e+"Capture",t)}function mr(e,t){for(li[e]=t,e=0;e<t.length;e++)hp.add(t[e])}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wl=Object.prototype.hasOwnProperty,Zg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bc={},Mc={};function Yg(e){return Wl.call(Mc,e)?!0:Wl.call(bc,e)?!1:Zg.test(e)?Mc[e]=!0:(bc[e]=!0,!1)}function Kg(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Jg(e,t,n,r){if(t===null||typeof t>"u"||Kg(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Xe(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){We[e]=new Xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];We[t]=new Xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){We[e]=new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){We[e]=new Xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){We[e]=new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){We[e]=new Xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){We[e]=new Xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){We[e]=new Xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){We[e]=new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var iu=/[\-:]([a-z])/g;function su(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(iu,su);We[t]=new Xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(iu,su);We[t]=new Xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(iu,su);We[t]=new Xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){We[e]=new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)});We.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){We[e]=new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ou(e,t,n,r){var i=We.hasOwnProperty(t)?We[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Jg(t,n,i,r)&&(n=null),r||i===null?Yg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var en=mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gi=Symbol.for("react.element"),Yn=Symbol.for("react.portal"),Kn=Symbol.for("react.fragment"),lu=Symbol.for("react.strict_mode"),Hl=Symbol.for("react.profiler"),gp=Symbol.for("react.provider"),vp=Symbol.for("react.context"),au=Symbol.for("react.forward_ref"),Vl=Symbol.for("react.suspense"),Gl=Symbol.for("react.suspense_list"),uu=Symbol.for("react.memo"),sn=Symbol.for("react.lazy"),yp=Symbol.for("react.offscreen"),Pc=Symbol.iterator;function Or(e){return e===null||typeof e!="object"?null:(e=Pc&&e[Pc]||e["@@iterator"],typeof e=="function"?e:null)}var Pe=Object.assign,sl;function Wr(e){if(sl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);sl=t&&t[1]||""}return`
`+sl+e}var ol=!1;function ll(e,t){if(!e||ol)return"";ol=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=l);break}}}finally{ol=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Wr(e):""}function Xg(e){switch(e.tag){case 5:return Wr(e.type);case 16:return Wr("Lazy");case 13:return Wr("Suspense");case 19:return Wr("SuspenseList");case 0:case 2:case 15:return e=ll(e.type,!1),e;case 11:return e=ll(e.type.render,!1),e;case 1:return e=ll(e.type,!0),e;default:return""}}function Ql(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Kn:return"Fragment";case Yn:return"Portal";case Hl:return"Profiler";case lu:return"StrictMode";case Vl:return"Suspense";case Gl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vp:return(e.displayName||"Context")+".Consumer";case gp:return(e._context.displayName||"Context")+".Provider";case au:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case uu:return t=e.displayName||null,t!==null?t:Ql(e.type)||"Memo";case sn:t=e._payload,e=e._init;try{return Ql(e(t))}catch{}}return null}function qg(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ql(t);case 8:return t===lu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function kn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function ev(e){var t=xp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qi(e){e._valueTracker||(e._valueTracker=ev(e))}function wp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=xp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _s(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zl(e,t){var n=t.checked;return Pe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Tc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=kn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Sp(e,t){t=t.checked,t!=null&&ou(e,"checked",t,!1)}function Yl(e,t){Sp(e,t);var n=kn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Kl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Kl(e,t.type,kn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Kl(e,t,n){(t!=="number"||_s(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Hr=Array.isArray;function ar(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+kn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Jl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return Pe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ic(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(Hr(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:kn(n)}}function Lp(e,t){var n=kn(t.value),r=kn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Oc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function kp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?kp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Zi,Ep=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Zi=Zi||document.createElement("div"),Zi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Zi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ai(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Zr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tv=["Webkit","ms","Moz","O"];Object.keys(Zr).forEach(function(e){tv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Zr[t]=Zr[e]})});function Cp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Zr.hasOwnProperty(e)&&Zr[e]?(""+t).trim():t+"px"}function bp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Cp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var nv=Pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ql(e,t){if(t){if(nv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function ea(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ta=null;function cu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var na=null,ur=null,cr=null;function _c(e){if(e=zi(e)){if(typeof na!="function")throw Error(D(280));var t=e.stateNode;t&&(t=xo(t),na(e.stateNode,e.type,t))}}function Mp(e){ur?cr?cr.push(e):cr=[e]:ur=e}function Pp(){if(ur){var e=ur,t=cr;if(cr=ur=null,_c(e),t)for(e=0;e<t.length;e++)_c(t[e])}}function Tp(e,t){return e(t)}function zp(){}var al=!1;function Ip(e,t,n){if(al)return e(t,n);al=!0;try{return Tp(e,t,n)}finally{al=!1,(ur!==null||cr!==null)&&(zp(),Pp())}}function ui(e,t){var n=e.stateNode;if(n===null)return null;var r=xo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var ra=!1;if(Kt)try{var _r={};Object.defineProperty(_r,"passive",{get:function(){ra=!0}}),window.addEventListener("test",_r,_r),window.removeEventListener("test",_r,_r)}catch{ra=!1}function rv(e,t,n,r,i,s,o,l,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Yr=!1,Rs=null,$s=!1,ia=null,iv={onError:function(e){Yr=!0,Rs=e}};function sv(e,t,n,r,i,s,o,l,a){Yr=!1,Rs=null,rv.apply(iv,arguments)}function ov(e,t,n,r,i,s,o,l,a){if(sv.apply(this,arguments),Yr){if(Yr){var c=Rs;Yr=!1,Rs=null}else throw Error(D(198));$s||($s=!0,ia=c)}}function Vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Op(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Rc(e){if(Vn(e)!==e)throw Error(D(188))}function lv(e){var t=e.alternate;if(!t){if(t=Vn(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Rc(i),e;if(s===r)return Rc(i),t;s=s.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function _p(e){return e=lv(e),e!==null?Rp(e):null}function Rp(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Rp(e);if(t!==null)return t;e=e.sibling}return null}var $p=ct.unstable_scheduleCallback,$c=ct.unstable_cancelCallback,av=ct.unstable_shouldYield,uv=ct.unstable_requestPaint,Ie=ct.unstable_now,cv=ct.unstable_getCurrentPriorityLevel,du=ct.unstable_ImmediatePriority,Np=ct.unstable_UserBlockingPriority,Ns=ct.unstable_NormalPriority,dv=ct.unstable_LowPriority,Ap=ct.unstable_IdlePriority,ho=null,Ft=null;function fv(e){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(ho,e,void 0,(e.current.flags&128)===128)}catch{}}var Pt=Math.clz32?Math.clz32:hv,pv=Math.log,mv=Math.LN2;function hv(e){return e>>>=0,e===0?32:31-(pv(e)/mv|0)|0}var Yi=64,Ki=4194304;function Vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function As(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Vr(l):(s&=o,s!==0&&(r=Vr(s)))}else o=n&~i,o!==0?r=Vr(o):s!==0&&(r=Vr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Pt(t),i=1<<n,r|=e[n],t&=~i;return r}function gv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Pt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=gv(l,t)):a<=t&&(e.expiredLanes|=l),s&=~l}}function sa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Bp(){var e=Yi;return Yi<<=1,!(Yi&4194240)&&(Yi=64),e}function ul(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Pi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Pt(t),e[t]=n}function yv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Pt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function fu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Pt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ye=0;function Dp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Fp,pu,jp,Up,Wp,oa=!1,Ji=[],fn=null,pn=null,mn=null,ci=new Map,di=new Map,ln=[],xv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nc(e,t){switch(e){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":mn=null;break;case"pointerover":case"pointerout":ci.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":di.delete(t.pointerId)}}function Rr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=zi(t),t!==null&&pu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function wv(e,t,n,r,i){switch(t){case"focusin":return fn=Rr(fn,e,t,n,r,i),!0;case"dragenter":return pn=Rr(pn,e,t,n,r,i),!0;case"mouseover":return mn=Rr(mn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return ci.set(s,Rr(ci.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,di.set(s,Rr(di.get(s)||null,e,t,n,r,i)),!0}return!1}function Hp(e){var t=In(e.target);if(t!==null){var n=Vn(t);if(n!==null){if(t=n.tag,t===13){if(t=Op(n),t!==null){e.blockedOn=t,Wp(e.priority,function(){jp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=la(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ta=r,n.target.dispatchEvent(r),ta=null}else return t=zi(n),t!==null&&pu(t),e.blockedOn=n,!1;t.shift()}return!0}function Ac(e,t,n){gs(e)&&n.delete(t)}function Sv(){oa=!1,fn!==null&&gs(fn)&&(fn=null),pn!==null&&gs(pn)&&(pn=null),mn!==null&&gs(mn)&&(mn=null),ci.forEach(Ac),di.forEach(Ac)}function $r(e,t){e.blockedOn===t&&(e.blockedOn=null,oa||(oa=!0,ct.unstable_scheduleCallback(ct.unstable_NormalPriority,Sv)))}function fi(e){function t(i){return $r(i,e)}if(0<Ji.length){$r(Ji[0],e);for(var n=1;n<Ji.length;n++){var r=Ji[n];r.blockedOn===e&&(r.blockedOn=null)}}for(fn!==null&&$r(fn,e),pn!==null&&$r(pn,e),mn!==null&&$r(mn,e),ci.forEach(t),di.forEach(t),n=0;n<ln.length;n++)r=ln[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ln.length&&(n=ln[0],n.blockedOn===null);)Hp(n),n.blockedOn===null&&ln.shift()}var dr=en.ReactCurrentBatchConfig,Bs=!0;function Lv(e,t,n,r){var i=ye,s=dr.transition;dr.transition=null;try{ye=1,mu(e,t,n,r)}finally{ye=i,dr.transition=s}}function kv(e,t,n,r){var i=ye,s=dr.transition;dr.transition=null;try{ye=4,mu(e,t,n,r)}finally{ye=i,dr.transition=s}}function mu(e,t,n,r){if(Bs){var i=la(e,t,n,r);if(i===null)xl(e,t,r,Ds,n),Nc(e,r);else if(wv(i,e,t,n,r))r.stopPropagation();else if(Nc(e,r),t&4&&-1<xv.indexOf(e)){for(;i!==null;){var s=zi(i);if(s!==null&&Fp(s),s=la(e,t,n,r),s===null&&xl(e,t,r,Ds,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else xl(e,t,r,null,n)}}var Ds=null;function la(e,t,n,r){if(Ds=null,e=cu(r),e=In(e),e!==null)if(t=Vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Op(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ds=e,null}function Vp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cv()){case du:return 1;case Np:return 4;case Ns:case dv:return 16;case Ap:return 536870912;default:return 16}default:return 16}}var un=null,hu=null,vs=null;function Gp(){if(vs)return vs;var e,t=hu,n=t.length,r,i="value"in un?un.value:un.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return vs=i.slice(e,1<r?1-r:void 0)}function ys(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Xi(){return!0}function Bc(){return!1}function ft(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xi:Bc,this.isPropagationStopped=Bc,this}return Pe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xi)},persist:function(){},isPersistent:Xi}),t}var Cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gu=ft(Cr),Ti=Pe({},Cr,{view:0,detail:0}),Ev=ft(Ti),cl,dl,Nr,go=Pe({},Ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nr&&(Nr&&e.type==="mousemove"?(cl=e.screenX-Nr.screenX,dl=e.screenY-Nr.screenY):dl=cl=0,Nr=e),cl)},movementY:function(e){return"movementY"in e?e.movementY:dl}}),Dc=ft(go),Cv=Pe({},go,{dataTransfer:0}),bv=ft(Cv),Mv=Pe({},Ti,{relatedTarget:0}),fl=ft(Mv),Pv=Pe({},Cr,{animationName:0,elapsedTime:0,pseudoElement:0}),Tv=ft(Pv),zv=Pe({},Cr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Iv=ft(zv),Ov=Pe({},Cr,{data:0}),Fc=ft(Ov),_v={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$v={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$v[e])?!!t[e]:!1}function vu(){return Nv}var Av=Pe({},Ti,{key:function(e){if(e.key){var t=_v[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ys(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vu,charCode:function(e){return e.type==="keypress"?ys(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ys(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bv=ft(Av),Dv=Pe({},go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jc=ft(Dv),Fv=Pe({},Ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vu}),jv=ft(Fv),Uv=Pe({},Cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wv=ft(Uv),Hv=Pe({},go,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vv=ft(Hv),Gv=[9,13,27,32],yu=Kt&&"CompositionEvent"in window,Kr=null;Kt&&"documentMode"in document&&(Kr=document.documentMode);var Qv=Kt&&"TextEvent"in window&&!Kr,Qp=Kt&&(!yu||Kr&&8<Kr&&11>=Kr),Uc=String.fromCharCode(32),Wc=!1;function Zp(e,t){switch(e){case"keyup":return Gv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function Zv(e,t){switch(e){case"compositionend":return Yp(t);case"keypress":return t.which!==32?null:(Wc=!0,Uc);case"textInput":return e=t.data,e===Uc&&Wc?null:e;default:return null}}function Yv(e,t){if(Jn)return e==="compositionend"||!yu&&Zp(e,t)?(e=Gp(),vs=hu=un=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qp&&t.locale!=="ko"?null:t.data;default:return null}}var Kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Kv[e.type]:t==="textarea"}function Kp(e,t,n,r){Mp(r),t=Fs(t,"onChange"),0<t.length&&(n=new gu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Jr=null,pi=null;function Jv(e){lm(e,0)}function vo(e){var t=er(e);if(wp(t))return e}function Xv(e,t){if(e==="change")return t}var Jp=!1;if(Kt){var pl;if(Kt){var ml="oninput"in document;if(!ml){var Vc=document.createElement("div");Vc.setAttribute("oninput","return;"),ml=typeof Vc.oninput=="function"}pl=ml}else pl=!1;Jp=pl&&(!document.documentMode||9<document.documentMode)}function Gc(){Jr&&(Jr.detachEvent("onpropertychange",Xp),pi=Jr=null)}function Xp(e){if(e.propertyName==="value"&&vo(pi)){var t=[];Kp(t,pi,e,cu(e)),Ip(Jv,t)}}function qv(e,t,n){e==="focusin"?(Gc(),Jr=t,pi=n,Jr.attachEvent("onpropertychange",Xp)):e==="focusout"&&Gc()}function e0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vo(pi)}function t0(e,t){if(e==="click")return vo(t)}function n0(e,t){if(e==="input"||e==="change")return vo(t)}function r0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:r0;function mi(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Wl.call(t,i)||!zt(e[i],t[i]))return!1}return!0}function Qc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zc(e,t){var n=Qc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qc(n)}}function qp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function em(){for(var e=window,t=_s();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_s(e.document)}return t}function xu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function i0(e){var t=em(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qp(n.ownerDocument.documentElement,n)){if(r!==null&&xu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Zc(n,s);var o=Zc(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var s0=Kt&&"documentMode"in document&&11>=document.documentMode,Xn=null,aa=null,Xr=null,ua=!1;function Yc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ua||Xn==null||Xn!==_s(r)||(r=Xn,"selectionStart"in r&&xu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xr&&mi(Xr,r)||(Xr=r,r=Fs(aa,"onSelect"),0<r.length&&(t=new gu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xn)))}function qi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qn={animationend:qi("Animation","AnimationEnd"),animationiteration:qi("Animation","AnimationIteration"),animationstart:qi("Animation","AnimationStart"),transitionend:qi("Transition","TransitionEnd")},hl={},tm={};Kt&&(tm=document.createElement("div").style,"AnimationEvent"in window||(delete qn.animationend.animation,delete qn.animationiteration.animation,delete qn.animationstart.animation),"TransitionEvent"in window||delete qn.transitionend.transition);function yo(e){if(hl[e])return hl[e];if(!qn[e])return e;var t=qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in tm)return hl[e]=t[n];return e}var nm=yo("animationend"),rm=yo("animationiteration"),im=yo("animationstart"),sm=yo("transitionend"),om=new Map,Kc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cn(e,t){om.set(e,t),Hn(t,[e])}for(var gl=0;gl<Kc.length;gl++){var vl=Kc[gl],o0=vl.toLowerCase(),l0=vl[0].toUpperCase()+vl.slice(1);Cn(o0,"on"+l0)}Cn(nm,"onAnimationEnd");Cn(rm,"onAnimationIteration");Cn(im,"onAnimationStart");Cn("dblclick","onDoubleClick");Cn("focusin","onFocus");Cn("focusout","onBlur");Cn(sm,"onTransitionEnd");mr("onMouseEnter",["mouseout","mouseover"]);mr("onMouseLeave",["mouseout","mouseover"]);mr("onPointerEnter",["pointerout","pointerover"]);mr("onPointerLeave",["pointerout","pointerover"]);Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gr));function Jc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ov(r,t,void 0,e),e.currentTarget=null}function lm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,c=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Jc(i,l,c),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,c=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Jc(i,l,c),s=a}}}if($s)throw e=ia,$s=!1,ia=null,e}function Le(e,t){var n=t[ma];n===void 0&&(n=t[ma]=new Set);var r=e+"__bubble";n.has(r)||(am(t,e,2,!1),n.add(r))}function yl(e,t,n){var r=0;t&&(r|=4),am(n,e,r,t)}var es="_reactListening"+Math.random().toString(36).slice(2);function hi(e){if(!e[es]){e[es]=!0,hp.forEach(function(n){n!=="selectionchange"&&(a0.has(n)||yl(n,!1,e),yl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[es]||(t[es]=!0,yl("selectionchange",!1,t))}}function am(e,t,n,r){switch(Vp(t)){case 1:var i=Lv;break;case 4:i=kv;break;default:i=mu}n=i.bind(null,t,n,e),i=void 0,!ra||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function xl(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=In(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Ip(function(){var c=s,d=cu(n),f=[];e:{var g=om.get(e);if(g!==void 0){var x=gu,w=e;switch(e){case"keypress":if(ys(n)===0)break e;case"keydown":case"keyup":x=Bv;break;case"focusin":w="focus",x=fl;break;case"focusout":w="blur",x=fl;break;case"beforeblur":case"afterblur":x=fl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Dc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=jv;break;case nm:case rm:case im:x=Tv;break;case sm:x=Wv;break;case"scroll":x=Ev;break;case"wheel":x=Vv;break;case"copy":case"cut":case"paste":x=Iv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=jc}var S=(t&4)!==0,k=!S&&e==="scroll",h=S?g!==null?g+"Capture":null:g;S=[];for(var p=c,v;p!==null;){v=p;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,h!==null&&(y=ui(p,h),y!=null&&S.push(gi(p,y,v)))),k)break;p=p.return}0<S.length&&(g=new x(g,w,null,n,d),f.push({event:g,listeners:S}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&n!==ta&&(w=n.relatedTarget||n.fromElement)&&(In(w)||w[Jt]))break e;if((x||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=c,w=w?In(w):null,w!==null&&(k=Vn(w),w!==k||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=c),x!==w)){if(S=Dc,y="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(S=jc,y="onPointerLeave",h="onPointerEnter",p="pointer"),k=x==null?g:er(x),v=w==null?g:er(w),g=new S(y,p+"leave",x,n,d),g.target=k,g.relatedTarget=v,y=null,In(d)===c&&(S=new S(h,p+"enter",w,n,d),S.target=v,S.relatedTarget=k,y=S),k=y,x&&w)t:{for(S=x,h=w,p=0,v=S;v;v=Qn(v))p++;for(v=0,y=h;y;y=Qn(y))v++;for(;0<p-v;)S=Qn(S),p--;for(;0<v-p;)h=Qn(h),v--;for(;p--;){if(S===h||h!==null&&S===h.alternate)break t;S=Qn(S),h=Qn(h)}S=null}else S=null;x!==null&&Xc(f,g,x,S,!1),w!==null&&k!==null&&Xc(f,k,w,S,!0)}}e:{if(g=c?er(c):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var P=Xv;else if(Hc(g))if(Jp)P=n0;else{P=e0;var b=qv}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(P=t0);if(P&&(P=P(e,c))){Kp(f,P,n,d);break e}b&&b(e,g,c),e==="focusout"&&(b=g._wrapperState)&&b.controlled&&g.type==="number"&&Kl(g,"number",g.value)}switch(b=c?er(c):window,e){case"focusin":(Hc(b)||b.contentEditable==="true")&&(Xn=b,aa=c,Xr=null);break;case"focusout":Xr=aa=Xn=null;break;case"mousedown":ua=!0;break;case"contextmenu":case"mouseup":case"dragend":ua=!1,Yc(f,n,d);break;case"selectionchange":if(s0)break;case"keydown":case"keyup":Yc(f,n,d)}var M;if(yu)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Jn?Zp(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Qp&&n.locale!=="ko"&&(Jn||C!=="onCompositionStart"?C==="onCompositionEnd"&&Jn&&(M=Gp()):(un=d,hu="value"in un?un.value:un.textContent,Jn=!0)),b=Fs(c,C),0<b.length&&(C=new Fc(C,e,null,n,d),f.push({event:C,listeners:b}),M?C.data=M:(M=Yp(n),M!==null&&(C.data=M)))),(M=Qv?Zv(e,n):Yv(e,n))&&(c=Fs(c,"onBeforeInput"),0<c.length&&(d=new Fc("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=M))}lm(f,t)})}function gi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ui(e,n),s!=null&&r.unshift(gi(e,s,i)),s=ui(e,t),s!=null&&r.push(gi(e,s,i))),e=e.return}return r}function Qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xc(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,c=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&c!==null&&(l=c,i?(a=ui(n,s),a!=null&&o.unshift(gi(n,a,l))):i||(a=ui(n,s),a!=null&&o.push(gi(n,a,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var u0=/\r\n?/g,c0=/\u0000|\uFFFD/g;function qc(e){return(typeof e=="string"?e:""+e).replace(u0,`
`).replace(c0,"")}function ts(e,t,n){if(t=qc(t),qc(e)!==t&&n)throw Error(D(425))}function js(){}var ca=null,da=null;function fa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pa=typeof setTimeout=="function"?setTimeout:void 0,d0=typeof clearTimeout=="function"?clearTimeout:void 0,ed=typeof Promise=="function"?Promise:void 0,f0=typeof queueMicrotask=="function"?queueMicrotask:typeof ed<"u"?function(e){return ed.resolve(null).then(e).catch(p0)}:pa;function p0(e){setTimeout(function(){throw e})}function wl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),fi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);fi(t)}function hn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function td(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var br=Math.random().toString(36).slice(2),Bt="__reactFiber$"+br,vi="__reactProps$"+br,Jt="__reactContainer$"+br,ma="__reactEvents$"+br,m0="__reactListeners$"+br,h0="__reactHandles$"+br;function In(e){var t=e[Bt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Jt]||n[Bt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=td(e);e!==null;){if(n=e[Bt])return n;e=td(e)}return t}e=n,n=e.parentNode}return null}function zi(e){return e=e[Bt]||e[Jt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function er(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function xo(e){return e[vi]||null}var ha=[],tr=-1;function bn(e){return{current:e}}function ke(e){0>tr||(e.current=ha[tr],ha[tr]=null,tr--)}function Se(e,t){tr++,ha[tr]=e.current,e.current=t}var En={},Qe=bn(En),rt=bn(!1),An=En;function hr(e,t){var n=e.type.contextTypes;if(!n)return En;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function it(e){return e=e.childContextTypes,e!=null}function Us(){ke(rt),ke(Qe)}function nd(e,t,n){if(Qe.current!==En)throw Error(D(168));Se(Qe,t),Se(rt,n)}function um(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(D(108,qg(e)||"Unknown",i));return Pe({},n,r)}function Ws(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||En,An=Qe.current,Se(Qe,e),Se(rt,rt.current),!0}function rd(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=um(e,t,An),r.__reactInternalMemoizedMergedChildContext=e,ke(rt),ke(Qe),Se(Qe,e)):ke(rt),Se(rt,n)}var Ht=null,wo=!1,Sl=!1;function cm(e){Ht===null?Ht=[e]:Ht.push(e)}function g0(e){wo=!0,cm(e)}function Mn(){if(!Sl&&Ht!==null){Sl=!0;var e=0,t=ye;try{var n=Ht;for(ye=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ht=null,wo=!1}catch(i){throw Ht!==null&&(Ht=Ht.slice(e+1)),$p(du,Mn),i}finally{ye=t,Sl=!1}}return null}var nr=[],rr=0,Hs=null,Vs=0,ht=[],gt=0,Bn=null,Vt=1,Gt="";function Tn(e,t){nr[rr++]=Vs,nr[rr++]=Hs,Hs=e,Vs=t}function dm(e,t,n){ht[gt++]=Vt,ht[gt++]=Gt,ht[gt++]=Bn,Bn=e;var r=Vt;e=Gt;var i=32-Pt(r)-1;r&=~(1<<i),n+=1;var s=32-Pt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Vt=1<<32-Pt(t)+i|n<<i|r,Gt=s+e}else Vt=1<<s|n<<i|r,Gt=e}function wu(e){e.return!==null&&(Tn(e,1),dm(e,1,0))}function Su(e){for(;e===Hs;)Hs=nr[--rr],nr[rr]=null,Vs=nr[--rr],nr[rr]=null;for(;e===Bn;)Bn=ht[--gt],ht[gt]=null,Gt=ht[--gt],ht[gt]=null,Vt=ht[--gt],ht[gt]=null}var ut=null,at=null,Ce=!1,bt=null;function fm(e,t){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function id(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ut=e,at=hn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ut=e,at=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Bn!==null?{id:Vt,overflow:Gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ut=e,at=null,!0):!1;default:return!1}}function ga(e){return(e.mode&1)!==0&&(e.flags&128)===0}function va(e){if(Ce){var t=at;if(t){var n=t;if(!id(e,t)){if(ga(e))throw Error(D(418));t=hn(n.nextSibling);var r=ut;t&&id(e,t)?fm(r,n):(e.flags=e.flags&-4097|2,Ce=!1,ut=e)}}else{if(ga(e))throw Error(D(418));e.flags=e.flags&-4097|2,Ce=!1,ut=e}}}function sd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ut=e}function ns(e){if(e!==ut)return!1;if(!Ce)return sd(e),Ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!fa(e.type,e.memoizedProps)),t&&(t=at)){if(ga(e))throw pm(),Error(D(418));for(;t;)fm(e,t),t=hn(t.nextSibling)}if(sd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){at=hn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}at=null}}else at=ut?hn(e.stateNode.nextSibling):null;return!0}function pm(){for(var e=at;e;)e=hn(e.nextSibling)}function gr(){at=ut=null,Ce=!1}function Lu(e){bt===null?bt=[e]:bt.push(e)}var v0=en.ReactCurrentBatchConfig;function Et(e,t){if(e&&e.defaultProps){t=Pe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Gs=bn(null),Qs=null,ir=null,ku=null;function Eu(){ku=ir=Qs=null}function Cu(e){var t=Gs.current;ke(Gs),e._currentValue=t}function ya(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fr(e,t){Qs=e,ku=ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(nt=!0),e.firstContext=null)}function wt(e){var t=e._currentValue;if(ku!==e)if(e={context:e,memoizedValue:t,next:null},ir===null){if(Qs===null)throw Error(D(308));ir=e,Qs.dependencies={lanes:0,firstContext:e}}else ir=ir.next=e;return t}var On=null;function bu(e){On===null?On=[e]:On.push(e)}function mm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,bu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Xt(e,r)}function Xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var on=!1;function Mu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function gn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ge&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Xt(e,n)}return i=r.interleaved,i===null?(t.next=t,bu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Xt(e,n)}function xs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fu(e,n)}}function od(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Zs(e,t,n,r){var i=e.updateQueue;on=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,c=a.next;a.next=null,o===null?s=c:o.next=c,o=a;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=a))}if(s!==null){var f=i.baseState;o=0,d=c=a=null,l=s;do{var g=l.lane,x=l.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,S=l;switch(g=t,x=n,S.tag){case 1:if(w=S.payload,typeof w=="function"){f=w.call(x,f,g);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,g=typeof w=="function"?w.call(x,f,g):w,g==null)break e;f=Pe({},f,g);break e;case 2:on=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else x={eventTime:x,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=x,a=f):d=d.next=x,o|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(1);if(d===null&&(a=f),i.baseState=a,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Fn|=o,e.lanes=o,e.memoizedState=f}}function ld(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var gm=new mp.Component().refs;function xa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Pe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var So={isMounted:function(e){return(e=e._reactInternals)?Vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=yn(e),s=Qt(r,i);s.payload=t,n!=null&&(s.callback=n),t=gn(e,s,i),t!==null&&(Tt(t,e,i,r),xs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ke(),i=yn(e),s=Qt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=gn(e,s,i),t!==null&&(Tt(t,e,i,r),xs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ke(),r=yn(e),i=Qt(n,r);i.tag=2,t!=null&&(i.callback=t),t=gn(e,i,r),t!==null&&(Tt(t,e,r,n),xs(t,e,r))}};function ad(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!mi(n,r)||!mi(i,s):!0}function vm(e,t,n){var r=!1,i=En,s=t.contextType;return typeof s=="object"&&s!==null?s=wt(s):(i=it(t)?An:Qe.current,r=t.contextTypes,s=(r=r!=null)?hr(e,i):En),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=So,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function ud(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&So.enqueueReplaceState(t,t.state,null)}function wa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=gm,Mu(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=wt(s):(s=it(t)?An:Qe.current,i.context=hr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(xa(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&So.enqueueReplaceState(i,i.state,null),Zs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ar(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;l===gm&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function rs(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cd(e){var t=e._init;return t(e._payload)}function ym(e){function t(h,p){if(e){var v=h.deletions;v===null?(h.deletions=[p],h.flags|=16):v.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=xn(h,p),h.index=0,h.sibling=null,h}function s(h,p,v){return h.index=v,e?(v=h.alternate,v!==null?(v=v.index,v<p?(h.flags|=2,p):v):(h.flags|=2,p)):(h.flags|=1048576,p)}function o(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,p,v,y){return p===null||p.tag!==6?(p=Pl(v,h.mode,y),p.return=h,p):(p=i(p,v),p.return=h,p)}function a(h,p,v,y){var P=v.type;return P===Kn?d(h,p,v.props.children,y,v.key):p!==null&&(p.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===sn&&cd(P)===p.type)?(y=i(p,v.props),y.ref=Ar(h,p,v),y.return=h,y):(y=Cs(v.type,v.key,v.props,null,h.mode,y),y.ref=Ar(h,p,v),y.return=h,y)}function c(h,p,v,y){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Tl(v,h.mode,y),p.return=h,p):(p=i(p,v.children||[]),p.return=h,p)}function d(h,p,v,y,P){return p===null||p.tag!==7?(p=Nn(v,h.mode,y,P),p.return=h,p):(p=i(p,v),p.return=h,p)}function f(h,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Pl(""+p,h.mode,v),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Gi:return v=Cs(p.type,p.key,p.props,null,h.mode,v),v.ref=Ar(h,null,p),v.return=h,v;case Yn:return p=Tl(p,h.mode,v),p.return=h,p;case sn:var y=p._init;return f(h,y(p._payload),v)}if(Hr(p)||Or(p))return p=Nn(p,h.mode,v,null),p.return=h,p;rs(h,p)}return null}function g(h,p,v,y){var P=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:l(h,p,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Gi:return v.key===P?a(h,p,v,y):null;case Yn:return v.key===P?c(h,p,v,y):null;case sn:return P=v._init,g(h,p,P(v._payload),y)}if(Hr(v)||Or(v))return P!==null?null:d(h,p,v,y,null);rs(h,v)}return null}function x(h,p,v,y,P){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(v)||null,l(p,h,""+y,P);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Gi:return h=h.get(y.key===null?v:y.key)||null,a(p,h,y,P);case Yn:return h=h.get(y.key===null?v:y.key)||null,c(p,h,y,P);case sn:var b=y._init;return x(h,p,v,b(y._payload),P)}if(Hr(y)||Or(y))return h=h.get(v)||null,d(p,h,y,P,null);rs(p,y)}return null}function w(h,p,v,y){for(var P=null,b=null,M=p,C=p=0,m=null;M!==null&&C<v.length;C++){M.index>C?(m=M,M=null):m=M.sibling;var I=g(h,M,v[C],y);if(I===null){M===null&&(M=m);break}e&&M&&I.alternate===null&&t(h,M),p=s(I,p,C),b===null?P=I:b.sibling=I,b=I,M=m}if(C===v.length)return n(h,M),Ce&&Tn(h,C),P;if(M===null){for(;C<v.length;C++)M=f(h,v[C],y),M!==null&&(p=s(M,p,C),b===null?P=M:b.sibling=M,b=M);return Ce&&Tn(h,C),P}for(M=r(h,M);C<v.length;C++)m=x(M,h,C,v[C],y),m!==null&&(e&&m.alternate!==null&&M.delete(m.key===null?C:m.key),p=s(m,p,C),b===null?P=m:b.sibling=m,b=m);return e&&M.forEach(function(B){return t(h,B)}),Ce&&Tn(h,C),P}function S(h,p,v,y){var P=Or(v);if(typeof P!="function")throw Error(D(150));if(v=P.call(v),v==null)throw Error(D(151));for(var b=P=null,M=p,C=p=0,m=null,I=v.next();M!==null&&!I.done;C++,I=v.next()){M.index>C?(m=M,M=null):m=M.sibling;var B=g(h,M,I.value,y);if(B===null){M===null&&(M=m);break}e&&M&&B.alternate===null&&t(h,M),p=s(B,p,C),b===null?P=B:b.sibling=B,b=B,M=m}if(I.done)return n(h,M),Ce&&Tn(h,C),P;if(M===null){for(;!I.done;C++,I=v.next())I=f(h,I.value,y),I!==null&&(p=s(I,p,C),b===null?P=I:b.sibling=I,b=I);return Ce&&Tn(h,C),P}for(M=r(h,M);!I.done;C++,I=v.next())I=x(M,h,C,I.value,y),I!==null&&(e&&I.alternate!==null&&M.delete(I.key===null?C:I.key),p=s(I,p,C),b===null?P=I:b.sibling=I,b=I);return e&&M.forEach(function(Q){return t(h,Q)}),Ce&&Tn(h,C),P}function k(h,p,v,y){if(typeof v=="object"&&v!==null&&v.type===Kn&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Gi:e:{for(var P=v.key,b=p;b!==null;){if(b.key===P){if(P=v.type,P===Kn){if(b.tag===7){n(h,b.sibling),p=i(b,v.props.children),p.return=h,h=p;break e}}else if(b.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===sn&&cd(P)===b.type){n(h,b.sibling),p=i(b,v.props),p.ref=Ar(h,b,v),p.return=h,h=p;break e}n(h,b);break}else t(h,b);b=b.sibling}v.type===Kn?(p=Nn(v.props.children,h.mode,y,v.key),p.return=h,h=p):(y=Cs(v.type,v.key,v.props,null,h.mode,y),y.ref=Ar(h,p,v),y.return=h,h=y)}return o(h);case Yn:e:{for(b=v.key;p!==null;){if(p.key===b)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(h,p.sibling),p=i(p,v.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=Tl(v,h.mode,y),p.return=h,h=p}return o(h);case sn:return b=v._init,k(h,p,b(v._payload),y)}if(Hr(v))return w(h,p,v,y);if(Or(v))return S(h,p,v,y);rs(h,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,v),p.return=h,h=p):(n(h,p),p=Pl(v,h.mode,y),p.return=h,h=p),o(h)):n(h,p)}return k}var vr=ym(!0),xm=ym(!1),Ii={},jt=bn(Ii),yi=bn(Ii),xi=bn(Ii);function _n(e){if(e===Ii)throw Error(D(174));return e}function Pu(e,t){switch(Se(xi,t),Se(yi,e),Se(jt,Ii),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Xl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Xl(t,e)}ke(jt),Se(jt,t)}function yr(){ke(jt),ke(yi),ke(xi)}function wm(e){_n(xi.current);var t=_n(jt.current),n=Xl(t,e.type);t!==n&&(Se(yi,e),Se(jt,n))}function Tu(e){yi.current===e&&(ke(jt),ke(yi))}var be=bn(0);function Ys(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ll=[];function zu(){for(var e=0;e<Ll.length;e++)Ll[e]._workInProgressVersionPrimary=null;Ll.length=0}var ws=en.ReactCurrentDispatcher,kl=en.ReactCurrentBatchConfig,Dn=0,Me=null,_e=null,Be=null,Ks=!1,qr=!1,wi=0,y0=0;function He(){throw Error(D(321))}function Iu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function Ou(e,t,n,r,i,s){if(Dn=s,Me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ws.current=e===null||e.memoizedState===null?L0:k0,e=n(r,i),qr){s=0;do{if(qr=!1,wi=0,25<=s)throw Error(D(301));s+=1,Be=_e=null,t.updateQueue=null,ws.current=E0,e=n(r,i)}while(qr)}if(ws.current=Js,t=_e!==null&&_e.next!==null,Dn=0,Be=_e=Me=null,Ks=!1,t)throw Error(D(300));return e}function _u(){var e=wi!==0;return wi=0,e}function At(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Me.memoizedState=Be=e:Be=Be.next=e,Be}function St(){if(_e===null){var e=Me.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=Be===null?Me.memoizedState:Be.next;if(t!==null)Be=t,_e=e;else{if(e===null)throw Error(D(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Be===null?Me.memoizedState=Be=e:Be=Be.next=e}return Be}function Si(e,t){return typeof t=="function"?t(e):t}function El(e){var t=St(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=_e,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,c=s;do{var d=c.lane;if((Dn&d)===d)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(l=a=f,o=r):a=a.next=f,Me.lanes|=d,Fn|=d}c=c.next}while(c!==null&&c!==s);a===null?o=r:a.next=l,zt(r,t.memoizedState)||(nt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,Me.lanes|=s,Fn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Cl(e){var t=St(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);zt(s,t.memoizedState)||(nt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Sm(){}function Lm(e,t){var n=Me,r=St(),i=t(),s=!zt(r.memoizedState,i);if(s&&(r.memoizedState=i,nt=!0),r=r.queue,Ru(Cm.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Be!==null&&Be.memoizedState.tag&1){if(n.flags|=2048,Li(9,Em.bind(null,n,r,i,t),void 0,null),De===null)throw Error(D(349));Dn&30||km(n,t,i)}return i}function km(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Me.updateQueue,t===null?(t={lastEffect:null,stores:null},Me.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Em(e,t,n,r){t.value=n,t.getSnapshot=r,bm(t)&&Mm(e)}function Cm(e,t,n){return n(function(){bm(t)&&Mm(e)})}function bm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function Mm(e){var t=Xt(e,1);t!==null&&Tt(t,e,1,-1)}function dd(e){var t=At();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Si,lastRenderedState:e},t.queue=e,e=e.dispatch=S0.bind(null,Me,e),[t.memoizedState,e]}function Li(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Me.updateQueue,t===null?(t={lastEffect:null,stores:null},Me.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Pm(){return St().memoizedState}function Ss(e,t,n,r){var i=At();Me.flags|=e,i.memoizedState=Li(1|t,n,void 0,r===void 0?null:r)}function Lo(e,t,n,r){var i=St();r=r===void 0?null:r;var s=void 0;if(_e!==null){var o=_e.memoizedState;if(s=o.destroy,r!==null&&Iu(r,o.deps)){i.memoizedState=Li(t,n,s,r);return}}Me.flags|=e,i.memoizedState=Li(1|t,n,s,r)}function fd(e,t){return Ss(8390656,8,e,t)}function Ru(e,t){return Lo(2048,8,e,t)}function Tm(e,t){return Lo(4,2,e,t)}function zm(e,t){return Lo(4,4,e,t)}function Im(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Om(e,t,n){return n=n!=null?n.concat([e]):null,Lo(4,4,Im.bind(null,t,e),n)}function $u(){}function _m(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Iu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Rm(e,t){var n=St();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Iu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function $m(e,t,n){return Dn&21?(zt(n,t)||(n=Bp(),Me.lanes|=n,Fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,nt=!0),e.memoizedState=n)}function x0(e,t){var n=ye;ye=n!==0&&4>n?n:4,e(!0);var r=kl.transition;kl.transition={};try{e(!1),t()}finally{ye=n,kl.transition=r}}function Nm(){return St().memoizedState}function w0(e,t,n){var r=yn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Am(e))Bm(t,n);else if(n=mm(e,t,n,r),n!==null){var i=Ke();Tt(n,e,r,i),Dm(n,t,r)}}function S0(e,t,n){var r=yn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Am(e))Bm(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,zt(l,o)){var a=t.interleaved;a===null?(i.next=i,bu(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=mm(e,t,i,r),n!==null&&(i=Ke(),Tt(n,e,r,i),Dm(n,t,r))}}function Am(e){var t=e.alternate;return e===Me||t!==null&&t===Me}function Bm(e,t){qr=Ks=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Dm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,fu(e,n)}}var Js={readContext:wt,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},L0={readContext:wt,useCallback:function(e,t){return At().memoizedState=[e,t===void 0?null:t],e},useContext:wt,useEffect:fd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ss(4194308,4,Im.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ss(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ss(4,2,e,t)},useMemo:function(e,t){var n=At();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=At();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=w0.bind(null,Me,e),[r.memoizedState,e]},useRef:function(e){var t=At();return e={current:e},t.memoizedState=e},useState:dd,useDebugValue:$u,useDeferredValue:function(e){return At().memoizedState=e},useTransition:function(){var e=dd(!1),t=e[0];return e=x0.bind(null,e[1]),At().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Me,i=At();if(Ce){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),De===null)throw Error(D(349));Dn&30||km(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,fd(Cm.bind(null,r,s,e),[e]),r.flags|=2048,Li(9,Em.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=At(),t=De.identifierPrefix;if(Ce){var n=Gt,r=Vt;n=(r&~(1<<32-Pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=wi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=y0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},k0={readContext:wt,useCallback:_m,useContext:wt,useEffect:Ru,useImperativeHandle:Om,useInsertionEffect:Tm,useLayoutEffect:zm,useMemo:Rm,useReducer:El,useRef:Pm,useState:function(){return El(Si)},useDebugValue:$u,useDeferredValue:function(e){var t=St();return $m(t,_e.memoizedState,e)},useTransition:function(){var e=El(Si)[0],t=St().memoizedState;return[e,t]},useMutableSource:Sm,useSyncExternalStore:Lm,useId:Nm,unstable_isNewReconciler:!1},E0={readContext:wt,useCallback:_m,useContext:wt,useEffect:Ru,useImperativeHandle:Om,useInsertionEffect:Tm,useLayoutEffect:zm,useMemo:Rm,useReducer:Cl,useRef:Pm,useState:function(){return Cl(Si)},useDebugValue:$u,useDeferredValue:function(e){var t=St();return _e===null?t.memoizedState=e:$m(t,_e.memoizedState,e)},useTransition:function(){var e=Cl(Si)[0],t=St().memoizedState;return[e,t]},useMutableSource:Sm,useSyncExternalStore:Lm,useId:Nm,unstable_isNewReconciler:!1};function xr(e,t){try{var n="",r=t;do n+=Xg(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function bl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Sa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var C0=typeof WeakMap=="function"?WeakMap:Map;function Fm(e,t,n){n=Qt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){qs||(qs=!0,Ia=r),Sa(e,t)},n}function jm(e,t,n){n=Qt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Sa(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Sa(e,t),typeof r!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function pd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new C0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=D0.bind(null,e,t,n),t.then(e,e))}function md(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function hd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qt(-1,1),t.tag=2,gn(n,t,1))),n.lanes|=1),e)}var b0=en.ReactCurrentOwner,nt=!1;function Ze(e,t,n,r){t.child=e===null?xm(t,null,n,r):vr(t,e.child,n,r)}function gd(e,t,n,r,i){n=n.render;var s=t.ref;return fr(t,i),r=Ou(e,t,n,r,s,i),n=_u(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qt(e,t,i)):(Ce&&n&&wu(t),t.flags|=1,Ze(e,t,r,i),t.child)}function vd(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Wu(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Um(e,t,s,r,i)):(e=Cs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:mi,n(o,r)&&e.ref===t.ref)return qt(e,t,i)}return t.flags|=1,e=xn(s,r),e.ref=t.ref,e.return=t,t.child=e}function Um(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(mi(s,r)&&e.ref===t.ref)if(nt=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(nt=!0);else return t.lanes=e.lanes,qt(e,t,i)}return La(e,t,n,r,i)}function Wm(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(or,lt),lt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Se(or,lt),lt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Se(or,lt),lt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,Se(or,lt),lt|=r;return Ze(e,t,i,n),t.child}function Hm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function La(e,t,n,r,i){var s=it(n)?An:Qe.current;return s=hr(t,s),fr(t,i),n=Ou(e,t,n,r,s,i),r=_u(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,qt(e,t,i)):(Ce&&r&&wu(t),t.flags|=1,Ze(e,t,n,i),t.child)}function yd(e,t,n,r,i){if(it(n)){var s=!0;Ws(t)}else s=!1;if(fr(t,i),t.stateNode===null)Ls(e,t),vm(t,n,r),wa(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var a=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=wt(c):(c=it(n)?An:Qe.current,c=hr(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==c)&&ud(t,o,r,c),on=!1;var g=t.memoizedState;o.state=g,Zs(t,r,o,i),a=t.memoizedState,l!==r||g!==a||rt.current||on?(typeof d=="function"&&(xa(t,n,d,r),a=t.memoizedState),(l=on||ad(t,n,l,r,g,a,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,hm(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Et(t.type,l),o.props=c,f=t.pendingProps,g=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=wt(a):(a=it(n)?An:Qe.current,a=hr(t,a));var x=n.getDerivedStateFromProps;(d=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==f||g!==a)&&ud(t,o,r,a),on=!1,g=t.memoizedState,o.state=g,Zs(t,r,o,i);var w=t.memoizedState;l!==f||g!==w||rt.current||on?(typeof x=="function"&&(xa(t,n,x,r),w=t.memoizedState),(c=on||ad(t,n,c,r,g,w,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=a,r=c):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return ka(e,t,n,r,s,i)}function ka(e,t,n,r,i,s){Hm(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&rd(t,n,!1),qt(e,t,s);r=t.stateNode,b0.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=vr(t,e.child,null,s),t.child=vr(t,null,l,s)):Ze(e,t,l,s),t.memoizedState=r.state,i&&rd(t,n,!0),t.child}function Vm(e){var t=e.stateNode;t.pendingContext?nd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&nd(e,t.context,!1),Pu(e,t.containerInfo)}function xd(e,t,n,r,i){return gr(),Lu(i),t.flags|=256,Ze(e,t,n,r),t.child}var Ea={dehydrated:null,treeContext:null,retryLane:0};function Ca(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gm(e,t,n){var r=t.pendingProps,i=be.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Se(be,i&1),e===null)return va(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Co(o,r,0,null),e=Nn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ca(n),t.memoizedState=Ea,e):Nu(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return M0(e,t,o,r,l,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=xn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=xn(l,s):(s=Nn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Ca(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Ea,r}return s=e.child,e=s.sibling,r=xn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Nu(e,t){return t=Co({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function is(e,t,n,r){return r!==null&&Lu(r),vr(t,e.child,null,n),e=Nu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function M0(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=bl(Error(D(422))),is(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Co({mode:"visible",children:r.children},i,0,null),s=Nn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&vr(t,e.child,null,o),t.child.memoizedState=Ca(o),t.memoizedState=Ea,s);if(!(t.mode&1))return is(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(D(419)),r=bl(s,r,void 0),is(e,t,o,r)}if(l=(o&e.childLanes)!==0,nt||l){if(r=De,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Xt(e,i),Tt(r,e,i,-1))}return Uu(),r=bl(Error(D(421))),is(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=F0.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,at=hn(i.nextSibling),ut=t,Ce=!0,bt=null,e!==null&&(ht[gt++]=Vt,ht[gt++]=Gt,ht[gt++]=Bn,Vt=e.id,Gt=e.overflow,Bn=t),t=Nu(t,r.children),t.flags|=4096,t)}function wd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ya(e.return,t,n)}function Ml(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Qm(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Ze(e,t,r.children,n),r=be.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wd(e,n,t);else if(e.tag===19)wd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Se(be,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ys(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ml(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ys(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ml(t,!0,n,null,s);break;case"together":Ml(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ls(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=xn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=xn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function P0(e,t,n){switch(t.tag){case 3:Vm(t),gr();break;case 5:wm(t);break;case 1:it(t.type)&&Ws(t);break;case 4:Pu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Se(Gs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Se(be,be.current&1),t.flags|=128,null):n&t.child.childLanes?Gm(e,t,n):(Se(be,be.current&1),e=qt(e,t,n),e!==null?e.sibling:null);Se(be,be.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Qm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(be,be.current),r)break;return null;case 22:case 23:return t.lanes=0,Wm(e,t,n)}return qt(e,t,n)}var Zm,ba,Ym,Km;Zm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ba=function(){};Ym=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,_n(jt.current);var s=null;switch(n){case"input":i=Zl(e,i),r=Zl(e,r),s=[];break;case"select":i=Pe({},i,{value:void 0}),r=Pe({},r,{value:void 0}),s=[];break;case"textarea":i=Jl(e,i),r=Jl(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=js)}ql(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(li.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var a=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&a!==l&&(a!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(li.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&Le("scroll",e),s||l===a||(s=[])):(s=s||[]).push(c,a))}n&&(s=s||[]).push("style",n);var c=s;(t.updateQueue=c)&&(t.flags|=4)}};Km=function(e,t,n,r){n!==r&&(t.flags|=4)};function Br(e,t){if(!Ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function T0(e,t,n){var r=t.pendingProps;switch(Su(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(t),null;case 1:return it(t.type)&&Us(),Ve(t),null;case 3:return r=t.stateNode,yr(),ke(rt),ke(Qe),zu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ns(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,bt!==null&&(Ra(bt),bt=null))),ba(e,t),Ve(t),null;case 5:Tu(t);var i=_n(xi.current);if(n=t.type,e!==null&&t.stateNode!=null)Ym(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return Ve(t),null}if(e=_n(jt.current),ns(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Bt]=t,r[vi]=s,e=(t.mode&1)!==0,n){case"dialog":Le("cancel",r),Le("close",r);break;case"iframe":case"object":case"embed":Le("load",r);break;case"video":case"audio":for(i=0;i<Gr.length;i++)Le(Gr[i],r);break;case"source":Le("error",r);break;case"img":case"image":case"link":Le("error",r),Le("load",r);break;case"details":Le("toggle",r);break;case"input":Tc(r,s),Le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Le("invalid",r);break;case"textarea":Ic(r,s),Le("invalid",r)}ql(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&ts(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ts(r.textContent,l,e),i=["children",""+l]):li.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Le("scroll",r)}switch(n){case"input":Qi(r),zc(r,s,!0);break;case"textarea":Qi(r),Oc(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=js)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=kp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Bt]=t,e[vi]=r,Zm(e,t,!1,!1),t.stateNode=e;e:{switch(o=ea(n,r),n){case"dialog":Le("cancel",e),Le("close",e),i=r;break;case"iframe":case"object":case"embed":Le("load",e),i=r;break;case"video":case"audio":for(i=0;i<Gr.length;i++)Le(Gr[i],e);i=r;break;case"source":Le("error",e),i=r;break;case"img":case"image":case"link":Le("error",e),Le("load",e),i=r;break;case"details":Le("toggle",e),i=r;break;case"input":Tc(e,r),i=Zl(e,r),Le("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Pe({},r,{value:void 0}),Le("invalid",e);break;case"textarea":Ic(e,r),i=Jl(e,r),Le("invalid",e);break;default:i=r}ql(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?bp(e,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Ep(e,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&ai(e,a):typeof a=="number"&&ai(e,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(li.hasOwnProperty(s)?a!=null&&s==="onScroll"&&Le("scroll",e):a!=null&&ou(e,s,a,o))}switch(n){case"input":Qi(e),zc(e,r,!1);break;case"textarea":Qi(e),Oc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+kn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?ar(e,!!r.multiple,s,!1):r.defaultValue!=null&&ar(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=js)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ve(t),null;case 6:if(e&&t.stateNode!=null)Km(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=_n(xi.current),_n(jt.current),ns(t)){if(r=t.stateNode,n=t.memoizedProps,r[Bt]=t,(s=r.nodeValue!==n)&&(e=ut,e!==null))switch(e.tag){case 3:ts(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ts(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Bt]=t,t.stateNode=r}return Ve(t),null;case 13:if(ke(be),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&at!==null&&t.mode&1&&!(t.flags&128))pm(),gr(),t.flags|=98560,s=!1;else if(s=ns(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(D(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(D(317));s[Bt]=t}else gr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ve(t),s=!1}else bt!==null&&(Ra(bt),bt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||be.current&1?Re===0&&(Re=3):Uu())),t.updateQueue!==null&&(t.flags|=4),Ve(t),null);case 4:return yr(),ba(e,t),e===null&&hi(t.stateNode.containerInfo),Ve(t),null;case 10:return Cu(t.type._context),Ve(t),null;case 17:return it(t.type)&&Us(),Ve(t),null;case 19:if(ke(be),s=t.memoizedState,s===null)return Ve(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Br(s,!1);else{if(Re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Ys(e),o!==null){for(t.flags|=128,Br(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Se(be,be.current&1|2),t.child}e=e.sibling}s.tail!==null&&Ie()>wr&&(t.flags|=128,r=!0,Br(s,!1),t.lanes=4194304)}else{if(!r)if(e=Ys(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Br(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return Ve(t),null}else 2*Ie()-s.renderingStartTime>wr&&n!==1073741824&&(t.flags|=128,r=!0,Br(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Ie(),t.sibling=null,n=be.current,Se(be,r?n&1|2:n&1),t):(Ve(t),null);case 22:case 23:return ju(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?lt&1073741824&&(Ve(t),t.subtreeFlags&6&&(t.flags|=8192)):Ve(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function z0(e,t){switch(Su(t),t.tag){case 1:return it(t.type)&&Us(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yr(),ke(rt),ke(Qe),zu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Tu(t),null;case 13:if(ke(be),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));gr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ke(be),null;case 4:return yr(),null;case 10:return Cu(t.type._context),null;case 22:case 23:return ju(),null;case 24:return null;default:return null}}var ss=!1,Ge=!1,I0=typeof WeakSet=="function"?WeakSet:Set,Z=null;function sr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ze(e,t,r)}else n.current=null}function Ma(e,t,n){try{n()}catch(r){ze(e,t,r)}}var Sd=!1;function O0(e,t){if(ca=Bs,e=em(),xu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,c=0,d=0,f=e,g=null;t:for(;;){for(var x;f!==n||i!==0&&f.nodeType!==3||(l=o+i),f!==s||r!==0&&f.nodeType!==3||(a=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(x=f.firstChild)!==null;)g=f,f=x;for(;;){if(f===e)break t;if(g===n&&++c===i&&(l=o),g===s&&++d===r&&(a=o),(x=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=x}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(da={focusedElem:e,selectionRange:n},Bs=!1,Z=t;Z!==null;)if(t=Z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Z=e;else for(;Z!==null;){t=Z;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var S=w.memoizedProps,k=w.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?S:Et(t.type,S),k);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(y){ze(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,Z=e;break}Z=t.return}return w=Sd,Sd=!1,w}function ei(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ma(t,n,s)}i=i.next}while(i!==r)}}function ko(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Pa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Jm(e){var t=e.alternate;t!==null&&(e.alternate=null,Jm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Bt],delete t[vi],delete t[ma],delete t[m0],delete t[h0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Xm(e){return e.tag===5||e.tag===3||e.tag===4}function Ld(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ta(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=js));else if(r!==4&&(e=e.child,e!==null))for(Ta(e,t,n),e=e.sibling;e!==null;)Ta(e,t,n),e=e.sibling}function za(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(za(e,t,n),e=e.sibling;e!==null;)za(e,t,n),e=e.sibling}var je=null,Ct=!1;function nn(e,t,n){for(n=n.child;n!==null;)qm(e,t,n),n=n.sibling}function qm(e,t,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(ho,n)}catch{}switch(n.tag){case 5:Ge||sr(n,t);case 6:var r=je,i=Ct;je=null,nn(e,t,n),je=r,Ct=i,je!==null&&(Ct?(e=je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(Ct?(e=je,n=n.stateNode,e.nodeType===8?wl(e.parentNode,n):e.nodeType===1&&wl(e,n),fi(e)):wl(je,n.stateNode));break;case 4:r=je,i=Ct,je=n.stateNode.containerInfo,Ct=!0,nn(e,t,n),je=r,Ct=i;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ma(n,t,o),i=i.next}while(i!==r)}nn(e,t,n);break;case 1:if(!Ge&&(sr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ze(n,t,l)}nn(e,t,n);break;case 21:nn(e,t,n);break;case 22:n.mode&1?(Ge=(r=Ge)||n.memoizedState!==null,nn(e,t,n),Ge=r):nn(e,t,n);break;default:nn(e,t,n)}}function kd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new I0),t.forEach(function(r){var i=j0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function kt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:je=l.stateNode,Ct=!1;break e;case 3:je=l.stateNode.containerInfo,Ct=!0;break e;case 4:je=l.stateNode.containerInfo,Ct=!0;break e}l=l.return}if(je===null)throw Error(D(160));qm(s,o,i),je=null,Ct=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(c){ze(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)eh(t,e),t=t.sibling}function eh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(kt(t,e),Rt(e),r&4){try{ei(3,e,e.return),ko(3,e)}catch(S){ze(e,e.return,S)}try{ei(5,e,e.return)}catch(S){ze(e,e.return,S)}}break;case 1:kt(t,e),Rt(e),r&512&&n!==null&&sr(n,n.return);break;case 5:if(kt(t,e),Rt(e),r&512&&n!==null&&sr(n,n.return),e.flags&32){var i=e.stateNode;try{ai(i,"")}catch(S){ze(e,e.return,S)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Sp(i,s),ea(l,o);var c=ea(l,s);for(o=0;o<a.length;o+=2){var d=a[o],f=a[o+1];d==="style"?bp(i,f):d==="dangerouslySetInnerHTML"?Ep(i,f):d==="children"?ai(i,f):ou(i,d,f,c)}switch(l){case"input":Yl(i,s);break;case"textarea":Lp(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?ar(i,!!s.multiple,x,!1):g!==!!s.multiple&&(s.defaultValue!=null?ar(i,!!s.multiple,s.defaultValue,!0):ar(i,!!s.multiple,s.multiple?[]:"",!1))}i[vi]=s}catch(S){ze(e,e.return,S)}}break;case 6:if(kt(t,e),Rt(e),r&4){if(e.stateNode===null)throw Error(D(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(S){ze(e,e.return,S)}}break;case 3:if(kt(t,e),Rt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fi(t.containerInfo)}catch(S){ze(e,e.return,S)}break;case 4:kt(t,e),Rt(e);break;case 13:kt(t,e),Rt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Du=Ie())),r&4&&kd(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ge=(c=Ge)||d,kt(t,e),Ge=c):kt(t,e),Rt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(Z=e,d=e.child;d!==null;){for(f=Z=d;Z!==null;){switch(g=Z,x=g.child,g.tag){case 0:case 11:case 14:case 15:ei(4,g,g.return);break;case 1:sr(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(S){ze(r,n,S)}}break;case 5:sr(g,g.return);break;case 22:if(g.memoizedState!==null){Cd(f);continue}}x!==null?(x.return=g,Z=x):Cd(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=f.stateNode,a=f.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Cp("display",o))}catch(S){ze(e,e.return,S)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){ze(e,e.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:kt(t,e),Rt(e),r&4&&kd(e);break;case 21:break;default:kt(t,e),Rt(e)}}function Rt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Xm(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ai(i,""),r.flags&=-33);var s=Ld(e);za(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Ld(e);Ta(e,l,o);break;default:throw Error(D(161))}}catch(a){ze(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _0(e,t,n){Z=e,th(e)}function th(e,t,n){for(var r=(e.mode&1)!==0;Z!==null;){var i=Z,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ss;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ge;l=ss;var c=Ge;if(ss=o,(Ge=a)&&!c)for(Z=i;Z!==null;)o=Z,a=o.child,o.tag===22&&o.memoizedState!==null?bd(i):a!==null?(a.return=o,Z=a):bd(i);for(;s!==null;)Z=s,th(s),s=s.sibling;Z=i,ss=l,Ge=c}Ed(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Z=s):Ed(e)}}function Ed(e){for(;Z!==null;){var t=Z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ge||ko(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ge)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Et(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&ld(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ld(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&fi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Ge||t.flags&512&&Pa(t)}catch(g){ze(t,t.return,g)}}if(t===e){Z=null;break}if(n=t.sibling,n!==null){n.return=t.return,Z=n;break}Z=t.return}}function Cd(e){for(;Z!==null;){var t=Z;if(t===e){Z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Z=n;break}Z=t.return}}function bd(e){for(;Z!==null;){var t=Z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ko(4,t)}catch(a){ze(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){ze(t,i,a)}}var s=t.return;try{Pa(t)}catch(a){ze(t,s,a)}break;case 5:var o=t.return;try{Pa(t)}catch(a){ze(t,o,a)}}}catch(a){ze(t,t.return,a)}if(t===e){Z=null;break}var l=t.sibling;if(l!==null){l.return=t.return,Z=l;break}Z=t.return}}var R0=Math.ceil,Xs=en.ReactCurrentDispatcher,Au=en.ReactCurrentOwner,yt=en.ReactCurrentBatchConfig,ge=0,De=null,Oe=null,Ue=0,lt=0,or=bn(0),Re=0,ki=null,Fn=0,Eo=0,Bu=0,ti=null,tt=null,Du=0,wr=1/0,Wt=null,qs=!1,Ia=null,vn=null,os=!1,cn=null,eo=0,ni=0,Oa=null,ks=-1,Es=0;function Ke(){return ge&6?Ie():ks!==-1?ks:ks=Ie()}function yn(e){return e.mode&1?ge&2&&Ue!==0?Ue&-Ue:v0.transition!==null?(Es===0&&(Es=Bp()),Es):(e=ye,e!==0||(e=window.event,e=e===void 0?16:Vp(e.type)),e):1}function Tt(e,t,n,r){if(50<ni)throw ni=0,Oa=null,Error(D(185));Pi(e,n,r),(!(ge&2)||e!==De)&&(e===De&&(!(ge&2)&&(Eo|=n),Re===4&&an(e,Ue)),st(e,r),n===1&&ge===0&&!(t.mode&1)&&(wr=Ie()+500,wo&&Mn()))}function st(e,t){var n=e.callbackNode;vv(e,t);var r=As(e,e===De?Ue:0);if(r===0)n!==null&&$c(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&$c(n),t===1)e.tag===0?g0(Md.bind(null,e)):cm(Md.bind(null,e)),f0(function(){!(ge&6)&&Mn()}),n=null;else{switch(Dp(r)){case 1:n=du;break;case 4:n=Np;break;case 16:n=Ns;break;case 536870912:n=Ap;break;default:n=Ns}n=uh(n,nh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function nh(e,t){if(ks=-1,Es=0,ge&6)throw Error(D(327));var n=e.callbackNode;if(pr()&&e.callbackNode!==n)return null;var r=As(e,e===De?Ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=to(e,r);else{t=r;var i=ge;ge|=2;var s=ih();(De!==e||Ue!==t)&&(Wt=null,wr=Ie()+500,$n(e,t));do try{A0();break}catch(l){rh(e,l)}while(1);Eu(),Xs.current=s,ge=i,Oe!==null?t=0:(De=null,Ue=0,t=Re)}if(t!==0){if(t===2&&(i=sa(e),i!==0&&(r=i,t=_a(e,i))),t===1)throw n=ki,$n(e,0),an(e,r),st(e,Ie()),n;if(t===6)an(e,r);else{if(i=e.current.alternate,!(r&30)&&!$0(i)&&(t=to(e,r),t===2&&(s=sa(e),s!==0&&(r=s,t=_a(e,s))),t===1))throw n=ki,$n(e,0),an(e,r),st(e,Ie()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:zn(e,tt,Wt);break;case 3:if(an(e,r),(r&130023424)===r&&(t=Du+500-Ie(),10<t)){if(As(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=pa(zn.bind(null,e,tt,Wt),t);break}zn(e,tt,Wt);break;case 4:if(an(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Pt(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*R0(r/1960))-r,10<r){e.timeoutHandle=pa(zn.bind(null,e,tt,Wt),r);break}zn(e,tt,Wt);break;case 5:zn(e,tt,Wt);break;default:throw Error(D(329))}}}return st(e,Ie()),e.callbackNode===n?nh.bind(null,e):null}function _a(e,t){var n=ti;return e.current.memoizedState.isDehydrated&&($n(e,t).flags|=256),e=to(e,t),e!==2&&(t=tt,tt=n,t!==null&&Ra(t)),e}function Ra(e){tt===null?tt=e:tt.push.apply(tt,e)}function $0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!zt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function an(e,t){for(t&=~Bu,t&=~Eo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Pt(t),r=1<<n;e[n]=-1,t&=~r}}function Md(e){if(ge&6)throw Error(D(327));pr();var t=As(e,0);if(!(t&1))return st(e,Ie()),null;var n=to(e,t);if(e.tag!==0&&n===2){var r=sa(e);r!==0&&(t=r,n=_a(e,r))}if(n===1)throw n=ki,$n(e,0),an(e,t),st(e,Ie()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,zn(e,tt,Wt),st(e,Ie()),null}function Fu(e,t){var n=ge;ge|=1;try{return e(t)}finally{ge=n,ge===0&&(wr=Ie()+500,wo&&Mn())}}function jn(e){cn!==null&&cn.tag===0&&!(ge&6)&&pr();var t=ge;ge|=1;var n=yt.transition,r=ye;try{if(yt.transition=null,ye=1,e)return e()}finally{ye=r,yt.transition=n,ge=t,!(ge&6)&&Mn()}}function ju(){lt=or.current,ke(or)}function $n(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,d0(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(Su(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Us();break;case 3:yr(),ke(rt),ke(Qe),zu();break;case 5:Tu(r);break;case 4:yr();break;case 13:ke(be);break;case 19:ke(be);break;case 10:Cu(r.type._context);break;case 22:case 23:ju()}n=n.return}if(De=e,Oe=e=xn(e.current,null),Ue=lt=t,Re=0,ki=null,Bu=Eo=Fn=0,tt=ti=null,On!==null){for(t=0;t<On.length;t++)if(n=On[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}On=null}return e}function rh(e,t){do{var n=Oe;try{if(Eu(),ws.current=Js,Ks){for(var r=Me.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ks=!1}if(Dn=0,Be=_e=Me=null,qr=!1,wi=0,Au.current=null,n===null||n.return===null){Re=1,ki=t,Oe=null;break}e:{var s=e,o=n.return,l=n,a=t;if(t=Ue,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=md(o);if(x!==null){x.flags&=-257,hd(x,o,l,s,t),x.mode&1&&pd(s,c,t),t=x,a=c;var w=t.updateQueue;if(w===null){var S=new Set;S.add(a),t.updateQueue=S}else w.add(a);break e}else{if(!(t&1)){pd(s,c,t),Uu();break e}a=Error(D(426))}}else if(Ce&&l.mode&1){var k=md(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),hd(k,o,l,s,t),Lu(xr(a,l));break e}}s=a=xr(a,l),Re!==4&&(Re=2),ti===null?ti=[s]:ti.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var h=Fm(s,a,t);od(s,h);break e;case 1:l=a;var p=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(vn===null||!vn.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t;var y=jm(s,l,t);od(s,y);break e}}s=s.return}while(s!==null)}oh(n)}catch(P){t=P,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(1)}function ih(){var e=Xs.current;return Xs.current=Js,e===null?Js:e}function Uu(){(Re===0||Re===3||Re===2)&&(Re=4),De===null||!(Fn&268435455)&&!(Eo&268435455)||an(De,Ue)}function to(e,t){var n=ge;ge|=2;var r=ih();(De!==e||Ue!==t)&&(Wt=null,$n(e,t));do try{N0();break}catch(i){rh(e,i)}while(1);if(Eu(),ge=n,Xs.current=r,Oe!==null)throw Error(D(261));return De=null,Ue=0,Re}function N0(){for(;Oe!==null;)sh(Oe)}function A0(){for(;Oe!==null&&!av();)sh(Oe)}function sh(e){var t=ah(e.alternate,e,lt);e.memoizedProps=e.pendingProps,t===null?oh(e):Oe=t,Au.current=null}function oh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=z0(n,t),n!==null){n.flags&=32767,Oe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Re=6,Oe=null;return}}else if(n=T0(n,t,lt),n!==null){Oe=n;return}if(t=t.sibling,t!==null){Oe=t;return}Oe=t=e}while(t!==null);Re===0&&(Re=5)}function zn(e,t,n){var r=ye,i=yt.transition;try{yt.transition=null,ye=1,B0(e,t,n,r)}finally{yt.transition=i,ye=r}return null}function B0(e,t,n,r){do pr();while(cn!==null);if(ge&6)throw Error(D(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(yv(e,s),e===De&&(Oe=De=null,Ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||os||(os=!0,uh(Ns,function(){return pr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=yt.transition,yt.transition=null;var o=ye;ye=1;var l=ge;ge|=4,Au.current=null,O0(e,n),eh(n,e),i0(da),Bs=!!ca,da=ca=null,e.current=n,_0(n),uv(),ge=l,ye=o,yt.transition=s}else e.current=n;if(os&&(os=!1,cn=e,eo=i),s=e.pendingLanes,s===0&&(vn=null),fv(n.stateNode),st(e,Ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(qs)throw qs=!1,e=Ia,Ia=null,e;return eo&1&&e.tag!==0&&pr(),s=e.pendingLanes,s&1?e===Oa?ni++:(ni=0,Oa=e):ni=0,Mn(),null}function pr(){if(cn!==null){var e=Dp(eo),t=yt.transition,n=ye;try{if(yt.transition=null,ye=16>e?16:e,cn===null)var r=!1;else{if(e=cn,cn=null,eo=0,ge&6)throw Error(D(331));var i=ge;for(ge|=4,Z=e.current;Z!==null;){var s=Z,o=s.child;if(Z.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var c=l[a];for(Z=c;Z!==null;){var d=Z;switch(d.tag){case 0:case 11:case 15:ei(8,d,s)}var f=d.child;if(f!==null)f.return=d,Z=f;else for(;Z!==null;){d=Z;var g=d.sibling,x=d.return;if(Jm(d),d===c){Z=null;break}if(g!==null){g.return=x,Z=g;break}Z=x}}}var w=s.alternate;if(w!==null){var S=w.child;if(S!==null){w.child=null;do{var k=S.sibling;S.sibling=null,S=k}while(S!==null)}}Z=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Z=o;else e:for(;Z!==null;){if(s=Z,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ei(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Z=h;break e}Z=s.return}}var p=e.current;for(Z=p;Z!==null;){o=Z;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,Z=v;else e:for(o=p;Z!==null;){if(l=Z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ko(9,l)}}catch(P){ze(l,l.return,P)}if(l===o){Z=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,Z=y;break e}Z=l.return}}if(ge=i,Mn(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(ho,e)}catch{}r=!0}return r}finally{ye=n,yt.transition=t}}return!1}function Pd(e,t,n){t=xr(n,t),t=Fm(e,t,1),e=gn(e,t,1),t=Ke(),e!==null&&(Pi(e,1,t),st(e,t))}function ze(e,t,n){if(e.tag===3)Pd(e,e,n);else for(;t!==null;){if(t.tag===3){Pd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vn===null||!vn.has(r))){e=xr(n,e),e=jm(t,e,1),t=gn(t,e,1),e=Ke(),t!==null&&(Pi(t,1,e),st(t,e));break}}t=t.return}}function D0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ke(),e.pingedLanes|=e.suspendedLanes&n,De===e&&(Ue&n)===n&&(Re===4||Re===3&&(Ue&130023424)===Ue&&500>Ie()-Du?$n(e,0):Bu|=n),st(e,t)}function lh(e,t){t===0&&(e.mode&1?(t=Ki,Ki<<=1,!(Ki&130023424)&&(Ki=4194304)):t=1);var n=Ke();e=Xt(e,t),e!==null&&(Pi(e,t,n),st(e,n))}function F0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lh(e,n)}function j0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),lh(e,n)}var ah;ah=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||rt.current)nt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return nt=!1,P0(e,t,n);nt=!!(e.flags&131072)}else nt=!1,Ce&&t.flags&1048576&&dm(t,Vs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ls(e,t),e=t.pendingProps;var i=hr(t,Qe.current);fr(t,n),i=Ou(null,t,r,e,i,n);var s=_u();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,it(r)?(s=!0,Ws(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Mu(t),i.updater=So,t.stateNode=i,i._reactInternals=t,wa(t,r,e,n),t=ka(null,t,r,!0,s,n)):(t.tag=0,Ce&&s&&wu(t),Ze(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ls(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=W0(r),e=Et(r,e),i){case 0:t=La(null,t,r,e,n);break e;case 1:t=yd(null,t,r,e,n);break e;case 11:t=gd(null,t,r,e,n);break e;case 14:t=vd(null,t,r,Et(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),La(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),yd(e,t,r,i,n);case 3:e:{if(Vm(t),e===null)throw Error(D(387));r=t.pendingProps,s=t.memoizedState,i=s.element,hm(e,t),Zs(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=xr(Error(D(423)),t),t=xd(e,t,r,n,i);break e}else if(r!==i){i=xr(Error(D(424)),t),t=xd(e,t,r,n,i);break e}else for(at=hn(t.stateNode.containerInfo.firstChild),ut=t,Ce=!0,bt=null,n=xm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gr(),r===i){t=qt(e,t,n);break e}Ze(e,t,r,n)}t=t.child}return t;case 5:return wm(t),e===null&&va(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,fa(r,i)?o=null:s!==null&&fa(r,s)&&(t.flags|=32),Hm(e,t),Ze(e,t,o,n),t.child;case 6:return e===null&&va(t),null;case 13:return Gm(e,t,n);case 4:return Pu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vr(t,null,r,n):Ze(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),gd(e,t,r,i,n);case 7:return Ze(e,t,t.pendingProps,n),t.child;case 8:return Ze(e,t,t.pendingProps.children,n),t.child;case 12:return Ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,Se(Gs,r._currentValue),r._currentValue=o,s!==null)if(zt(s.value,o)){if(s.children===i.children&&!rt.current){t=qt(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Qt(-1,n&-n),a.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?a.next=a:(a.next=d.next,d.next=a),c.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ya(s.return,n,t),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(D(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ya(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ze(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,fr(t,n),i=wt(i),r=r(i),t.flags|=1,Ze(e,t,r,n),t.child;case 14:return r=t.type,i=Et(r,t.pendingProps),i=Et(r.type,i),vd(e,t,r,i,n);case 15:return Um(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Et(r,i),Ls(e,t),t.tag=1,it(r)?(e=!0,Ws(t)):e=!1,fr(t,n),vm(t,r,i),wa(t,r,i,n),ka(null,t,r,!0,e,n);case 19:return Qm(e,t,n);case 22:return Wm(e,t,n)}throw Error(D(156,t.tag))};function uh(e,t){return $p(e,t)}function U0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,n,r){return new U0(e,t,n,r)}function Wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function W0(e){if(typeof e=="function")return Wu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===au)return 11;if(e===uu)return 14}return 2}function xn(e,t){var n=e.alternate;return n===null?(n=vt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Cs(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Wu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Kn:return Nn(n.children,i,s,t);case lu:o=8,i|=8;break;case Hl:return e=vt(12,n,t,i|2),e.elementType=Hl,e.lanes=s,e;case Vl:return e=vt(13,n,t,i),e.elementType=Vl,e.lanes=s,e;case Gl:return e=vt(19,n,t,i),e.elementType=Gl,e.lanes=s,e;case yp:return Co(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gp:o=10;break e;case vp:o=9;break e;case au:o=11;break e;case uu:o=14;break e;case sn:o=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=vt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Nn(e,t,n,r){return e=vt(7,e,r,t),e.lanes=n,e}function Co(e,t,n,r){return e=vt(22,e,r,t),e.elementType=yp,e.lanes=n,e.stateNode={isHidden:!1},e}function Pl(e,t,n){return e=vt(6,e,null,t),e.lanes=n,e}function Tl(e,t,n){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function H0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ul(0),this.expirationTimes=ul(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ul(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Hu(e,t,n,r,i,s,o,l,a){return e=new H0(e,t,n,l,a),t===1?(t=1,s===!0&&(t|=8)):t=0,s=vt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mu(s),e}function V0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ch(e){if(!e)return En;e=e._reactInternals;e:{if(Vn(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(it(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(it(n))return um(e,n,t)}return t}function dh(e,t,n,r,i,s,o,l,a){return e=Hu(n,r,!0,e,i,s,o,l,a),e.context=ch(null),n=e.current,r=Ke(),i=yn(n),s=Qt(r,i),s.callback=t??null,gn(n,s,i),e.current.lanes=i,Pi(e,i,r),st(e,r),e}function bo(e,t,n,r){var i=t.current,s=Ke(),o=yn(i);return n=ch(n),t.context===null?t.context=n:t.pendingContext=n,t=Qt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=gn(i,t,o),e!==null&&(Tt(e,i,o,s),xs(e,i,o)),o}function no(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Td(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Vu(e,t){Td(e,t),(e=e.alternate)&&Td(e,t)}function G0(){return null}var fh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gu(e){this._internalRoot=e}Mo.prototype.render=Gu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));bo(e,t,null,null)};Mo.prototype.unmount=Gu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jn(function(){bo(null,e,null,null)}),t[Jt]=null}};function Mo(e){this._internalRoot=e}Mo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Up();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ln.length&&t!==0&&t<ln[n].priority;n++);ln.splice(n,0,e),n===0&&Hp(e)}};function Qu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Po(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zd(){}function Q0(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=no(o);s.call(c)}}var o=dh(t,r,e,0,null,!1,!1,"",zd);return e._reactRootContainer=o,e[Jt]=o.current,hi(e.nodeType===8?e.parentNode:e),jn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=no(a);l.call(c)}}var a=Hu(e,0,!1,null,null,!1,!1,"",zd);return e._reactRootContainer=a,e[Jt]=a.current,hi(e.nodeType===8?e.parentNode:e),jn(function(){bo(t,a,n,r)}),a}function To(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=no(o);l.call(a)}}bo(t,o,e,i)}else o=Q0(n,t,e,i,r);return no(o)}Fp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Vr(t.pendingLanes);n!==0&&(fu(t,n|1),st(t,Ie()),!(ge&6)&&(wr=Ie()+500,Mn()))}break;case 13:jn(function(){var r=Xt(e,1);if(r!==null){var i=Ke();Tt(r,e,1,i)}}),Vu(e,1)}};pu=function(e){if(e.tag===13){var t=Xt(e,134217728);if(t!==null){var n=Ke();Tt(t,e,134217728,n)}Vu(e,134217728)}};jp=function(e){if(e.tag===13){var t=yn(e),n=Xt(e,t);if(n!==null){var r=Ke();Tt(n,e,t,r)}Vu(e,t)}};Up=function(){return ye};Wp=function(e,t){var n=ye;try{return ye=e,t()}finally{ye=n}};na=function(e,t,n){switch(t){case"input":if(Yl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=xo(r);if(!i)throw Error(D(90));wp(r),Yl(r,i)}}}break;case"textarea":Lp(e,n);break;case"select":t=n.value,t!=null&&ar(e,!!n.multiple,t,!1)}};Tp=Fu;zp=jn;var Z0={usingClientEntryPoint:!1,Events:[zi,er,xo,Mp,Pp,Fu]},Dr={findFiberByHostInstance:In,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Y0={bundleType:Dr.bundleType,version:Dr.version,rendererPackageName:Dr.rendererPackageName,rendererConfig:Dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:en.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_p(e),e===null?null:e.stateNode},findFiberByHostInstance:Dr.findFiberByHostInstance||G0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ls.isDisabled&&ls.supportsFiber)try{ho=ls.inject(Y0),Ft=ls}catch{}}dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z0;dt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qu(t))throw Error(D(200));return V0(e,t,null,n)};dt.createRoot=function(e,t){if(!Qu(e))throw Error(D(299));var n=!1,r="",i=fh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Hu(e,1,!1,null,null,n,!1,r,i),e[Jt]=t.current,hi(e.nodeType===8?e.parentNode:e),new Gu(t)};dt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=_p(t),e=e===null?null:e.stateNode,e};dt.flushSync=function(e){return jn(e)};dt.hydrate=function(e,t,n){if(!Po(t))throw Error(D(200));return To(null,e,t,!0,n)};dt.hydrateRoot=function(e,t,n){if(!Qu(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=fh;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=dh(t,null,e,1,n??null,i,!1,s,o),e[Jt]=t.current,hi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Mo(t)};dt.render=function(e,t,n){if(!Po(t))throw Error(D(200));return To(null,e,t,!1,n)};dt.unmountComponentAtNode=function(e){if(!Po(e))throw Error(D(40));return e._reactRootContainer?(jn(function(){To(null,null,e,!1,function(){e._reactRootContainer=null,e[Jt]=null})}),!0):!1};dt.unstable_batchedUpdates=Fu;dt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Po(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return To(e,t,n,!1,r)};dt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=dt})(Gg);var Id=Yt;jl.createRoot=Id.createRoot,jl.hydrateRoot=Id.hydrateRoot;var ro={},K0={get exports(){return ro},set exports(e){ro=e}},xe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zu=Symbol.for("react.element"),Yu=Symbol.for("react.portal"),zo=Symbol.for("react.fragment"),Io=Symbol.for("react.strict_mode"),Oo=Symbol.for("react.profiler"),_o=Symbol.for("react.provider"),Ro=Symbol.for("react.context"),J0=Symbol.for("react.server_context"),$o=Symbol.for("react.forward_ref"),No=Symbol.for("react.suspense"),Ao=Symbol.for("react.suspense_list"),Bo=Symbol.for("react.memo"),Do=Symbol.for("react.lazy"),X0=Symbol.for("react.offscreen"),ph;ph=Symbol.for("react.module.reference");function Lt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Zu:switch(e=e.type,e){case zo:case Oo:case Io:case No:case Ao:return e;default:switch(e=e&&e.$$typeof,e){case J0:case Ro:case $o:case Do:case Bo:case _o:return e;default:return t}}case Yu:return t}}}xe.ContextConsumer=Ro;xe.ContextProvider=_o;xe.Element=Zu;xe.ForwardRef=$o;xe.Fragment=zo;xe.Lazy=Do;xe.Memo=Bo;xe.Portal=Yu;xe.Profiler=Oo;xe.StrictMode=Io;xe.Suspense=No;xe.SuspenseList=Ao;xe.isAsyncMode=function(){return!1};xe.isConcurrentMode=function(){return!1};xe.isContextConsumer=function(e){return Lt(e)===Ro};xe.isContextProvider=function(e){return Lt(e)===_o};xe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zu};xe.isForwardRef=function(e){return Lt(e)===$o};xe.isFragment=function(e){return Lt(e)===zo};xe.isLazy=function(e){return Lt(e)===Do};xe.isMemo=function(e){return Lt(e)===Bo};xe.isPortal=function(e){return Lt(e)===Yu};xe.isProfiler=function(e){return Lt(e)===Oo};xe.isStrictMode=function(e){return Lt(e)===Io};xe.isSuspense=function(e){return Lt(e)===No};xe.isSuspenseList=function(e){return Lt(e)===Ao};xe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===zo||e===Oo||e===Io||e===No||e===Ao||e===X0||typeof e=="object"&&e!==null&&(e.$$typeof===Do||e.$$typeof===Bo||e.$$typeof===_o||e.$$typeof===Ro||e.$$typeof===$o||e.$$typeof===ph||e.getModuleId!==void 0)};xe.typeOf=Lt;(function(e){e.exports=xe})(K0);function q0(e){function t($,_,z,H,T){for(var A=0,E=0,V=0,j=0,ee,Y,oe=0,X=0,ie,pe=ie=ee=0,ce=0,re=0,qe=0,Te=0,Pn=z.length,_t=Pn-1,et,se="",Ee="",tn="",Gn="",ot;ce<Pn;){if(Y=z.charCodeAt(ce),ce===_t&&E+j+V+A!==0&&(E!==0&&(Y=E===47?10:47),j=V=A=0,Pn++,_t++),E+j+V+A===0){if(ce===_t&&(0<re&&(se=se.replace(g,"")),0<se.trim().length)){switch(Y){case 32:case 9:case 59:case 13:case 10:break;default:se+=z.charAt(ce)}Y=59}switch(Y){case 123:for(se=se.trim(),ee=se.charCodeAt(0),ie=1,Te=++ce;ce<Pn;){switch(Y=z.charCodeAt(ce)){case 123:ie++;break;case 125:ie--;break;case 47:switch(Y=z.charCodeAt(ce+1)){case 42:case 47:e:{for(pe=ce+1;pe<_t;++pe)switch(z.charCodeAt(pe)){case 47:if(Y===42&&z.charCodeAt(pe-1)===42&&ce+2!==pe){ce=pe+1;break e}break;case 10:if(Y===47){ce=pe+1;break e}}ce=pe}}break;case 91:Y++;case 40:Y++;case 34:case 39:for(;ce++<_t&&z.charCodeAt(ce)!==Y;);}if(ie===0)break;ce++}switch(ie=z.substring(Te,ce),ee===0&&(ee=(se=se.replace(f,"").trim()).charCodeAt(0)),ee){case 64:switch(0<re&&(se=se.replace(g,"")),Y=se.charCodeAt(1),Y){case 100:case 109:case 115:case 45:re=_;break;default:re=ne}if(ie=t(_,re,ie,Y,T+1),Te=ie.length,0<O&&(re=n(ne,se,qe),ot=l(3,ie,re,_,G,Q,Te,Y,T,H),se=re.join(""),ot!==void 0&&(Te=(ie=ot.trim()).length)===0&&(Y=0,ie="")),0<Te)switch(Y){case 115:se=se.replace(b,o);case 100:case 109:case 45:ie=se+"{"+ie+"}";break;case 107:se=se.replace(p,"$1 $2"),ie=se+"{"+ie+"}",ie=J===1||J===2&&s("@"+ie,3)?"@-webkit-"+ie+"@"+ie:"@"+ie;break;default:ie=se+ie,H===112&&(ie=(Ee+=ie,""))}else ie="";break;default:ie=t(_,n(_,se,qe),ie,H,T+1)}tn+=ie,ie=qe=re=pe=ee=0,se="",Y=z.charCodeAt(++ce);break;case 125:case 59:if(se=(0<re?se.replace(g,""):se).trim(),1<(Te=se.length))switch(pe===0&&(ee=se.charCodeAt(0),ee===45||96<ee&&123>ee)&&(Te=(se=se.replace(" ",":")).length),0<O&&(ot=l(1,se,_,$,G,Q,Ee.length,H,T,H))!==void 0&&(Te=(se=ot.trim()).length)===0&&(se="\0\0"),ee=se.charCodeAt(0),Y=se.charCodeAt(1),ee){case 0:break;case 64:if(Y===105||Y===99){Gn+=se+z.charAt(ce);break}default:se.charCodeAt(Te-1)!==58&&(Ee+=i(se,ee,Y,se.charCodeAt(2)))}qe=re=pe=ee=0,se="",Y=z.charCodeAt(++ce)}}switch(Y){case 13:case 10:E===47?E=0:1+ee===0&&H!==107&&0<se.length&&(re=1,se+="\0"),0<O*U&&l(0,se,_,$,G,Q,Ee.length,H,T,H),Q=1,G++;break;case 59:case 125:if(E+j+V+A===0){Q++;break}default:switch(Q++,et=z.charAt(ce),Y){case 9:case 32:if(j+A+E===0)switch(oe){case 44:case 58:case 9:case 32:et="";break;default:Y!==32&&(et=" ")}break;case 0:et="\\0";break;case 12:et="\\f";break;case 11:et="\\v";break;case 38:j+E+A===0&&(re=qe=1,et="\f"+et);break;case 108:if(j+E+A+W===0&&0<pe)switch(ce-pe){case 2:oe===112&&z.charCodeAt(ce-3)===58&&(W=oe);case 8:X===111&&(W=X)}break;case 58:j+E+A===0&&(pe=ce);break;case 44:E+V+j+A===0&&(re=1,et+="\r");break;case 34:case 39:E===0&&(j=j===Y?0:j===0?Y:j);break;case 91:j+E+V===0&&A++;break;case 93:j+E+V===0&&A--;break;case 41:j+E+A===0&&V--;break;case 40:if(j+E+A===0){if(ee===0)switch(2*oe+3*X){case 533:break;default:ee=1}V++}break;case 64:E+V+j+A+pe+ie===0&&(ie=1);break;case 42:case 47:if(!(0<j+A+V))switch(E){case 0:switch(2*Y+3*z.charCodeAt(ce+1)){case 235:E=47;break;case 220:Te=ce,E=42}break;case 42:Y===47&&oe===42&&Te+2!==ce&&(z.charCodeAt(Te+2)===33&&(Ee+=z.substring(Te,ce+1)),et="",E=0)}}E===0&&(se+=et)}X=oe,oe=Y,ce++}if(Te=Ee.length,0<Te){if(re=_,0<O&&(ot=l(2,Ee,re,$,G,Q,Te,H,T,H),ot!==void 0&&(Ee=ot).length===0))return Gn+Ee+tn;if(Ee=re.join(",")+"{"+Ee+"}",J*W!==0){switch(J!==2||s(Ee,2)||(W=0),W){case 111:Ee=Ee.replace(y,":-moz-$1")+Ee;break;case 112:Ee=Ee.replace(v,"::-webkit-input-$1")+Ee.replace(v,"::-moz-$1")+Ee.replace(v,":-ms-input-$1")+Ee}W=0}}return Gn+Ee+tn}function n($,_,z){var H=_.trim().split(k);_=H;var T=H.length,A=$.length;switch(A){case 0:case 1:var E=0;for($=A===0?"":$[0]+" ";E<T;++E)_[E]=r($,_[E],z).trim();break;default:var V=E=0;for(_=[];E<T;++E)for(var j=0;j<A;++j)_[V++]=r($[j]+" ",H[E],z).trim()}return _}function r($,_,z){var H=_.charCodeAt(0);switch(33>H&&(H=(_=_.trim()).charCodeAt(0)),H){case 38:return _.replace(h,"$1"+$.trim());case 58:return $.trim()+_.replace(h,"$1"+$.trim());default:if(0<1*z&&0<_.indexOf("\f"))return _.replace(h,($.charCodeAt(0)===58?"":"$1")+$.trim())}return $+_}function i($,_,z,H){var T=$+";",A=2*_+3*z+4*H;if(A===944){$=T.indexOf(":",9)+1;var E=T.substring($,T.length-1).trim();return E=T.substring(0,$).trim()+E+";",J===1||J===2&&s(E,1)?"-webkit-"+E+E:E}if(J===0||J===2&&!s(T,1))return T;switch(A){case 1015:return T.charCodeAt(10)===97?"-webkit-"+T+T:T;case 951:return T.charCodeAt(3)===116?"-webkit-"+T+T:T;case 963:return T.charCodeAt(5)===110?"-webkit-"+T+T:T;case 1009:if(T.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+T+T;case 978:return"-webkit-"+T+"-moz-"+T+T;case 1019:case 983:return"-webkit-"+T+"-moz-"+T+"-ms-"+T+T;case 883:if(T.charCodeAt(8)===45)return"-webkit-"+T+T;if(0<T.indexOf("image-set(",11))return T.replace(B,"$1-webkit-$2")+T;break;case 932:if(T.charCodeAt(4)===45)switch(T.charCodeAt(5)){case 103:return"-webkit-box-"+T.replace("-grow","")+"-webkit-"+T+"-ms-"+T.replace("grow","positive")+T;case 115:return"-webkit-"+T+"-ms-"+T.replace("shrink","negative")+T;case 98:return"-webkit-"+T+"-ms-"+T.replace("basis","preferred-size")+T}return"-webkit-"+T+"-ms-"+T+T;case 964:return"-webkit-"+T+"-ms-flex-"+T+T;case 1023:if(T.charCodeAt(8)!==99)break;return E=T.substring(T.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+E+"-webkit-"+T+"-ms-flex-pack"+E+T;case 1005:return w.test(T)?T.replace(x,":-webkit-")+T.replace(x,":-moz-")+T:T;case 1e3:switch(E=T.substring(13).trim(),_=E.indexOf("-")+1,E.charCodeAt(0)+E.charCodeAt(_)){case 226:E=T.replace(P,"tb");break;case 232:E=T.replace(P,"tb-rl");break;case 220:E=T.replace(P,"lr");break;default:return T}return"-webkit-"+T+"-ms-"+E+T;case 1017:if(T.indexOf("sticky",9)===-1)break;case 975:switch(_=(T=$).length-10,E=(T.charCodeAt(_)===33?T.substring(0,_):T).substring($.indexOf(":",7)+1).trim(),A=E.charCodeAt(0)+(E.charCodeAt(7)|0)){case 203:if(111>E.charCodeAt(8))break;case 115:T=T.replace(E,"-webkit-"+E)+";"+T;break;case 207:case 102:T=T.replace(E,"-webkit-"+(102<A?"inline-":"")+"box")+";"+T.replace(E,"-webkit-"+E)+";"+T.replace(E,"-ms-"+E+"box")+";"+T}return T+";";case 938:if(T.charCodeAt(5)===45)switch(T.charCodeAt(6)){case 105:return E=T.replace("-items",""),"-webkit-"+T+"-webkit-box-"+E+"-ms-flex-"+E+T;case 115:return"-webkit-"+T+"-ms-flex-item-"+T.replace(C,"")+T;default:return"-webkit-"+T+"-ms-flex-line-pack"+T.replace("align-content","").replace(C,"")+T}break;case 973:case 989:if(T.charCodeAt(3)!==45||T.charCodeAt(4)===122)break;case 931:case 953:if(I.test($)===!0)return(E=$.substring($.indexOf(":")+1)).charCodeAt(0)===115?i($.replace("stretch","fill-available"),_,z,H).replace(":fill-available",":stretch"):T.replace(E,"-webkit-"+E)+T.replace(E,"-moz-"+E.replace("fill-",""))+T;break;case 962:if(T="-webkit-"+T+(T.charCodeAt(5)===102?"-ms-"+T:"")+T,z+H===211&&T.charCodeAt(13)===105&&0<T.indexOf("transform",10))return T.substring(0,T.indexOf(";",27)+1).replace(S,"$1-webkit-$2")+T}return T}function s($,_){var z=$.indexOf(_===1?":":"{"),H=$.substring(0,_!==3?z:10);return z=$.substring(z+1,$.length-1),F(_!==2?H:H.replace(m,"$1"),z,_)}function o($,_){var z=i(_,_.charCodeAt(0),_.charCodeAt(1),_.charCodeAt(2));return z!==_+";"?z.replace(M," or ($1)").substring(4):"("+_+")"}function l($,_,z,H,T,A,E,V,j,ee){for(var Y=0,oe=_,X;Y<O;++Y)switch(X=te[Y].call(d,$,oe,z,H,T,A,E,V,j,ee)){case void 0:case!1:case!0:case null:break;default:oe=X}if(oe!==_)return oe}function a($){switch($){case void 0:case null:O=te.length=0;break;default:if(typeof $=="function")te[O++]=$;else if(typeof $=="object")for(var _=0,z=$.length;_<z;++_)a($[_]);else U=!!$|0}return a}function c($){return $=$.prefix,$!==void 0&&(F=null,$?typeof $!="function"?J=1:(J=2,F=$):J=0),c}function d($,_){var z=$;if(33>z.charCodeAt(0)&&(z=z.trim()),q=z,z=[q],0<O){var H=l(-1,_,z,z,G,Q,0,0,0,0);H!==void 0&&typeof H=="string"&&(_=H)}var T=t(ne,z,_,0,0);return 0<O&&(H=l(-2,T,z,z,G,Q,T.length,0,0,0),H!==void 0&&(T=H)),q="",W=0,Q=G=1,T}var f=/^\0+/g,g=/[\0\r\f]/g,x=/: */g,w=/zoo|gra/,S=/([,: ])(transform)/g,k=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,p=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,y=/:(read-only)/g,P=/[svh]\w+-[tblr]{2}/,b=/\(\s*(.*)\s*\)/g,M=/([\s\S]*?);/g,C=/-self|flex-/g,m=/[^]*?(:[rp][el]a[\w-]+)[^]*/,I=/stretch|:\s*\w+\-(?:conte|avail)/,B=/([^-])(image-set\()/,Q=1,G=1,W=0,J=1,ne=[],te=[],O=0,F=null,U=0,q="";return d.use=a,d.set=c,e!==void 0&&c(e),d}var ey={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ty(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var ny=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Od=ty(function(e){return ny.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),$a={},ry={get exports(){return $a},set exports(e){$a=e}},we={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fe=typeof Symbol=="function"&&Symbol.for,Ku=Fe?Symbol.for("react.element"):60103,Ju=Fe?Symbol.for("react.portal"):60106,Fo=Fe?Symbol.for("react.fragment"):60107,jo=Fe?Symbol.for("react.strict_mode"):60108,Uo=Fe?Symbol.for("react.profiler"):60114,Wo=Fe?Symbol.for("react.provider"):60109,Ho=Fe?Symbol.for("react.context"):60110,Xu=Fe?Symbol.for("react.async_mode"):60111,Vo=Fe?Symbol.for("react.concurrent_mode"):60111,Go=Fe?Symbol.for("react.forward_ref"):60112,Qo=Fe?Symbol.for("react.suspense"):60113,iy=Fe?Symbol.for("react.suspense_list"):60120,Zo=Fe?Symbol.for("react.memo"):60115,Yo=Fe?Symbol.for("react.lazy"):60116,sy=Fe?Symbol.for("react.block"):60121,oy=Fe?Symbol.for("react.fundamental"):60117,ly=Fe?Symbol.for("react.responder"):60118,ay=Fe?Symbol.for("react.scope"):60119;function pt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ku:switch(e=e.type,e){case Xu:case Vo:case Fo:case Uo:case jo:case Qo:return e;default:switch(e=e&&e.$$typeof,e){case Ho:case Go:case Yo:case Zo:case Wo:return e;default:return t}}case Ju:return t}}}function mh(e){return pt(e)===Vo}we.AsyncMode=Xu;we.ConcurrentMode=Vo;we.ContextConsumer=Ho;we.ContextProvider=Wo;we.Element=Ku;we.ForwardRef=Go;we.Fragment=Fo;we.Lazy=Yo;we.Memo=Zo;we.Portal=Ju;we.Profiler=Uo;we.StrictMode=jo;we.Suspense=Qo;we.isAsyncMode=function(e){return mh(e)||pt(e)===Xu};we.isConcurrentMode=mh;we.isContextConsumer=function(e){return pt(e)===Ho};we.isContextProvider=function(e){return pt(e)===Wo};we.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ku};we.isForwardRef=function(e){return pt(e)===Go};we.isFragment=function(e){return pt(e)===Fo};we.isLazy=function(e){return pt(e)===Yo};we.isMemo=function(e){return pt(e)===Zo};we.isPortal=function(e){return pt(e)===Ju};we.isProfiler=function(e){return pt(e)===Uo};we.isStrictMode=function(e){return pt(e)===jo};we.isSuspense=function(e){return pt(e)===Qo};we.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Fo||e===Vo||e===Uo||e===jo||e===Qo||e===iy||typeof e=="object"&&e!==null&&(e.$$typeof===Yo||e.$$typeof===Zo||e.$$typeof===Wo||e.$$typeof===Ho||e.$$typeof===Go||e.$$typeof===oy||e.$$typeof===ly||e.$$typeof===ay||e.$$typeof===sy)};we.typeOf=pt;(function(e){e.exports=we})(ry);var qu=$a,uy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},cy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},dy={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},hh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ec={};ec[qu.ForwardRef]=dy;ec[qu.Memo]=hh;function _d(e){return qu.isMemo(e)?hh:ec[e.$$typeof]||uy}var fy=Object.defineProperty,py=Object.getOwnPropertyNames,Rd=Object.getOwnPropertySymbols,my=Object.getOwnPropertyDescriptor,hy=Object.getPrototypeOf,$d=Object.prototype;function gh(e,t,n){if(typeof t!="string"){if($d){var r=hy(t);r&&r!==$d&&gh(e,r,n)}var i=py(t);Rd&&(i=i.concat(Rd(t)));for(var s=_d(e),o=_d(t),l=0;l<i.length;++l){var a=i[l];if(!cy[a]&&!(n&&n[a])&&!(o&&o[a])&&!(s&&s[a])){var c=my(t,a);try{fy(e,a,c)}catch{}}}}return e}var gy=gh;function Mt(){return(Mt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Nd=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Na=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!ro.typeOf(e)},io=Object.freeze([]),wn=Object.freeze({});function Sr(e){return typeof e=="function"}function Ad(e){return e.displayName||e.name||"Component"}function tc(e){return e&&typeof e.styledComponentId=="string"}var Lr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",nc=typeof window<"u"&&"HTMLElement"in window,vy=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),yy={};function Un(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var xy=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Un(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var l=s;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(n+1),c=0,d=r.length;c<d;c++)this.tag.insertRule(a,r[c])&&(this.groupSizes[n]++,a++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,l=s;l<o;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),bs=new Map,so=new Map,ri=1,as=function(e){if(bs.has(e))return bs.get(e);for(;so.has(ri);)ri++;var t=ri++;return bs.set(e,t),so.set(t,e),t},wy=function(e){return so.get(e)},Sy=function(e,t){t>=ri&&(ri=t+1),bs.set(e,t),so.set(t,e)},Ly="style["+Lr+'][data-styled-version="5.3.9"]',ky=new RegExp("^"+Lr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Ey=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},Cy=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var l=o.match(ky);if(l){var a=0|parseInt(l[1],10),c=l[2];a!==0&&(Sy(c,a),Ey(e,c,l[3]),e.getTag().insertRules(a,r)),r.length=0}else r.push(o)}}},by=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},vh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var a=l.childNodes,c=a.length;c>=0;c--){var d=a[c];if(d&&d.nodeType===1&&d.hasAttribute(Lr))return d}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Lr,"active"),r.setAttribute("data-styled-version","5.3.9");var o=by();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},My=function(){function e(n){var r=this.element=vh(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,l=s.length;o<l;o++){var a=s[o];if(a.ownerNode===i)return a}Un(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),Py=function(){function e(n){var r=this.element=vh(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),Ty=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Bd=nc,zy={isServer:!nc,useCSSOMInjection:!vy},oo=function(){function e(n,r,i){n===void 0&&(n=wn),r===void 0&&(r={}),this.options=Mt({},zy,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&nc&&Bd&&(Bd=!1,function(s){for(var o=document.querySelectorAll(Ly),l=0,a=o.length;l<a;l++){var c=o[l];c&&c.getAttribute(Lr)!=="active"&&(Cy(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return as(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Mt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new Ty(o):s?new My(o):new Py(o),new xy(n)));var n,r,i,s,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(as(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(as(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(as(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var l=wy(o);if(l!==void 0){var a=n.names.get(l),c=r.getGroup(o);if(a&&c&&a.size){var d=Lr+".g"+o+'[id="'+l+'"]',f="";a!==void 0&&a.forEach(function(g){g.length>0&&(f+=g+",")}),s+=""+c+d+'{content:"'+f+`"}/*!sc*/
`}}}return s}(this)},e}(),Iy=/(a)(d)/gi,Dd=function(e){return String.fromCharCode(e+(e>25?39:97))};function Aa(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Dd(t%52)+n;return(Dd(t%52)+n).replace(Iy,"$1-$2")}var lr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},yh=function(e){return lr(5381,e)};function xh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Sr(n)&&!tc(n))return!1}return!0}var Oy=yh("5.3.9"),_y=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&xh(t),this.componentId=n,this.baseHash=lr(Oy,n),this.baseStyle=r,oo.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Wn(this.rules,t,n,r).join(""),l=Aa(lr(this.baseHash,o)>>>0);if(!n.hasNameForId(i,l)){var a=r(o,"."+l,void 0,i);n.insertRules(i,l,a)}s.push(l),this.staticRulesId=l}else{for(var c=this.rules.length,d=lr(this.baseHash,r.hash),f="",g=0;g<c;g++){var x=this.rules[g];if(typeof x=="string")f+=x;else if(x){var w=Wn(x,t,n,r),S=Array.isArray(w)?w.join(""):w;d=lr(d,S+g),f+=S}}if(f){var k=Aa(d>>>0);if(!n.hasNameForId(i,k)){var h=r(f,"."+k,void 0,i);n.insertRules(i,k,h)}s.push(k)}}return s.join(" ")},e}(),Ry=/^\s*\/\/.*$/gm,$y=[":","[",".","#"];function Ny(e){var t,n,r,i,s=e===void 0?wn:e,o=s.options,l=o===void 0?wn:o,a=s.plugins,c=a===void 0?io:a,d=new q0(l),f=[],g=function(S){function k(h){if(h)try{S(h+"}")}catch{}}return function(h,p,v,y,P,b,M,C,m,I){switch(h){case 1:if(m===0&&p.charCodeAt(0)===64)return S(p+";"),"";break;case 2:if(C===0)return p+"/*|*/";break;case 3:switch(C){case 102:case 112:return S(v[0]+p),"";default:return p+(I===0?"/*|*/":"")}case-2:p.split("/*|*/}").forEach(k)}}}(function(S){f.push(S)}),x=function(S,k,h){return k===0&&$y.indexOf(h[n.length])!==-1||h.match(i)?S:"."+t};function w(S,k,h,p){p===void 0&&(p="&");var v=S.replace(Ry,""),y=k&&h?h+" "+k+" { "+v+" }":v;return t=p,n=k,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),d(h||!k?"":k,y)}return d.use([].concat(c,[function(S,k,h){S===2&&h.length&&h[0].lastIndexOf(n)>0&&(h[0]=h[0].replace(r,x))},g,function(S){if(S===-2){var k=f;return f=[],k}}])),w.hash=c.length?c.reduce(function(S,k){return k.name||Un(15),lr(S,k.name)},5381).toString():"",w}var wh=Ye.createContext();wh.Consumer;var Sh=Ye.createContext(),Ay=(Sh.Consumer,new oo),Ba=Ny();function Lh(){return u.useContext(wh)||Ay}function kh(){return u.useContext(Sh)||Ba}var By=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Ba);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Un(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Ba),this.name+t.hash},e}(),Dy=/([A-Z])/,Fy=/([A-Z])/g,jy=/^ms-/,Uy=function(e){return"-"+e.toLowerCase()};function Fd(e){return Dy.test(e)?e.replace(Fy,Uy).replace(jy,"-ms-"):e}var jd=function(e){return e==null||e===!1||e===""};function Wn(e,t,n,r){if(Array.isArray(e)){for(var i,s=[],o=0,l=e.length;o<l;o+=1)(i=Wn(e[o],t,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(jd(e))return"";if(tc(e))return"."+e.styledComponentId;if(Sr(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var a=e(t);return Wn(a,t,n,r)}var c;return e instanceof By?n?(e.inject(n,r),e.getName(r)):e:Na(e)?function d(f,g){var x,w,S=[];for(var k in f)f.hasOwnProperty(k)&&!jd(f[k])&&(Array.isArray(f[k])&&f[k].isCss||Sr(f[k])?S.push(Fd(k)+":",f[k],";"):Na(f[k])?S.push.apply(S,d(f[k],k)):S.push(Fd(k)+": "+(x=k,(w=f[k])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||x in ey?String(w).trim():w+"px")+";"));return g?[g+" {"].concat(S,["}"]):S}(e):e.toString()}var Ud=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Eh(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Sr(e)||Na(e)?Ud(Wn(Nd(io,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Ud(Wn(Nd(e,n)))}var Ch=function(e,t,n){return n===void 0&&(n=wn),e.theme!==n.theme&&e.theme||t||n.theme},Wy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Hy=/(^-|-$)/g;function zl(e){return e.replace(Wy,"-").replace(Hy,"")}var bh=function(e){return Aa(yh(e)>>>0)};function us(e){return typeof e=="string"&&!0}var Da=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Vy=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Gy(e,t,n){var r=e[n];Da(t)&&Da(r)?Mh(r,t):e[n]=t}function Mh(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(Da(o))for(var l in o)Vy(l)&&Gy(e,o[l],l)}return e}var Ei=Ye.createContext();Ei.Consumer;function Qy(e){var t=u.useContext(Ei),n=u.useMemo(function(){return function(r,i){if(!r)return Un(14);if(Sr(r)){var s=r(i);return s}return Array.isArray(r)||typeof r!="object"?Un(8):i?Mt({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?Ye.createElement(Ei.Provider,{value:n},e.children):null}var Il={};function Ph(e,t,n){var r=tc(e),i=!us(e),s=t.attrs,o=s===void 0?io:s,l=t.componentId,a=l===void 0?function(p,v){var y=typeof p!="string"?"sc":zl(p);Il[y]=(Il[y]||0)+1;var P=y+"-"+bh("5.3.9"+y+Il[y]);return v?v+"-"+P:P}(t.displayName,t.parentComponentId):l,c=t.displayName,d=c===void 0?function(p){return us(p)?"styled."+p:"Styled("+Ad(p)+")"}(e):c,f=t.displayName&&t.componentId?zl(t.displayName)+"-"+t.componentId:t.componentId||a,g=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,x=t.shouldForwardProp;r&&e.shouldForwardProp&&(x=t.shouldForwardProp?function(p,v,y){return e.shouldForwardProp(p,v,y)&&t.shouldForwardProp(p,v,y)}:e.shouldForwardProp);var w,S=new _y(n,f,r?e.componentStyle:void 0),k=S.isStatic&&o.length===0,h=function(p,v){return function(y,P,b,M){var C=y.attrs,m=y.componentStyle,I=y.defaultProps,B=y.foldedComponentIds,Q=y.shouldForwardProp,G=y.styledComponentId,W=y.target,J=function(H,T,A){H===void 0&&(H=wn);var E=Mt({},T,{theme:H}),V={};return A.forEach(function(j){var ee,Y,oe,X=j;for(ee in Sr(X)&&(X=X(E)),X)E[ee]=V[ee]=ee==="className"?(Y=V[ee],oe=X[ee],Y&&oe?Y+" "+oe:Y||oe):X[ee]}),[E,V]}(Ch(P,u.useContext(Ei),I)||wn,P,C),ne=J[0],te=J[1],O=function(H,T,A,E){var V=Lh(),j=kh(),ee=T?H.generateAndInjectStyles(wn,V,j):H.generateAndInjectStyles(A,V,j);return ee}(m,M,ne),F=b,U=te.$as||P.$as||te.as||P.as||W,q=us(U),$=te!==P?Mt({},P,{},te):P,_={};for(var z in $)z[0]!=="$"&&z!=="as"&&(z==="forwardedAs"?_.as=$[z]:(Q?Q(z,Od,U):!q||Od(z))&&(_[z]=$[z]));return P.style&&te.style!==P.style&&(_.style=Mt({},P.style,{},te.style)),_.className=Array.prototype.concat(B,G,O!==G?O:null,P.className,te.className).filter(Boolean).join(" "),_.ref=F,u.createElement(U,_)}(w,p,v,k)};return h.displayName=d,(w=Ye.forwardRef(h)).attrs=g,w.componentStyle=S,w.displayName=d,w.shouldForwardProp=x,w.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):io,w.styledComponentId=f,w.target=r?e.target:e,w.withComponent=function(p){var v=t.componentId,y=function(b,M){if(b==null)return{};var C,m,I={},B=Object.keys(b);for(m=0;m<B.length;m++)C=B[m],M.indexOf(C)>=0||(I[C]=b[C]);return I}(t,["componentId"]),P=v&&v+"-"+(us(p)?p:zl(Ad(p)));return Ph(p,Mt({},y,{attrs:g,componentId:P}),n)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(p){this._foldedDefaultProps=r?Mh({},e.defaultProps,p):p}}),Object.defineProperty(w,"toString",{value:function(){return"."+w.styledComponentId}}),i&&gy(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var Fa=function(e){return function t(n,r,i){if(i===void 0&&(i=wn),!ro.isValidElementType(r))return Un(1,String(r));var s=function(){return n(r,i,Eh.apply(void 0,arguments))};return s.withConfig=function(o){return t(n,r,Mt({},i,{},o))},s.attrs=function(o){return t(n,r,Mt({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(Ph,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Fa[e]=Fa(e)});var Zy=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=xh(n),oo.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,i,s){var o=s(Wn(this.rules,r,i,s).join(""),""),l=this.componentId+n;i.insertRules(l,l,o)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,i,s){n>2&&oo.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},e}();function Yy(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Eh.apply(void 0,[e].concat(n)),s="sc-global-"+bh(JSON.stringify(i)),o=new Zy(i,s);function l(c){var d=Lh(),f=kh(),g=u.useContext(Ei),x=u.useRef(d.allocateGSInstance(s)).current;return d.server&&a(x,c,d,g,f),u.useLayoutEffect(function(){if(!d.server)return a(x,c,d,g,f),function(){return o.removeStyles(x,d)}},[x,c,d,g,f]),null}function a(c,d,f,g,x){if(o.isStatic)o.renderStyles(c,yy,f,x);else{var w=Mt({},d,{theme:Ch(d,g,l.defaultProps)});o.renderStyles(c,w,f,x)}}return Ye.memo(l)}const ue=Fa,Fr={light:{globalBackground:"#FCE6FF",backgroundGradient:"radial-gradient(circle at 50% 58.5%, rgba(49,233,129,0.15) 0%, rgba(58, 175, 185,0.15) 20%, rgba(252,230,255,0) 50%);",backgroundGradient1500:"radial-gradient(circle at 50% 60%, rgba(49,233,129,0.15) 0%, rgba(58, 175, 185,0.15) 14%, rgba(252,230,255,0) 35%);",backgroundGradient1200:"radial-gradient(circle at 50% 60%, rgba(49,233,129,0.15) 0%, rgba(58, 175, 185,0.15) 14%, rgba(252,230,255,0) 35%);",backgroundGradient1000:"radial-gradient(circle at 50% 62.5%, rgba(49,233,129,0.15) 0%, rgba(58, 175, 185,0.15) 12%, rgba(252,230,255,0) 30%);",backgroundGradient800:"linear-gradient(180deg, rgba(49,233,129,0.15) 0%, rgba(58, 175, 185,0.15) 11%, rgba(252,230,255,0) 22%);",backgroundGradientMobile:"radial-gradient(circle at 50% 50%, rgba(49,233,129,0.15) 0%, rgba(58, 175, 185,0.15) 7%, rgba(252,230,255,0) 17.5%);",upwardsGradient:"linear-gradient(0deg, rgba(49,233,129,0.15) 0%, rgba(58, 175, 185,0.15) 11%, rgba(252,230,255,1) 22%);",titles:"#171D1C",inputBackground:"#BAA6BD",bigInputBackground:"#BAA6BD",inputText:"#166638",clockOpacity:.1,buttonBackground:"#FF9FD9",eventBackground:"rgba(255, 159, 217, 0.2)"},dark:{globalBackground:"#130019",backgroundGradient:"radial-gradient(circle at 50% 58.5%, rgba(0,242,80,0.1) 0%, rgba(100,5,255,0.1) 20%, rgba(19,0,25,0) 50%);",backgroundGradient1500:"radial-gradient(circle at 50% 60%, rgba(0,242,80,0.1) 0%, rgba(100,5,255,0.1) 14%, rgba(19,0,25,0) 35%);",backgroundGradient1200:"radial-gradient(circle at 50% 60%, rgba(0,242,80,0.1) 0%, rgba(100,5,255,0.1) 14%, rgba(19,0,25,0) 35%);",backgroundGradient1000:"radial-gradient(circle at 50% 62.5%, rgba(0,242,80,0.1) 0%, rgba(100,5,255,0.1) 12%, rgba(19,0,25,0) 30%);",backgroundGradient800:"linear-gradient(180deg, rgba(0,242,80,0.1) 0%, rgba(100,5,255,0.1) 11%, rgba(19,0,25,0) 22%);",backgroundGradientMobile:"radial-gradient(circle at 50% 50%, rgba(0,242,80,0.1) 0%, rgba(100,5,255,0.1) 7%, rgba(19,0,25,0) 17.5%);",upwardsGradient:"linear-gradient(0deg, rgba(0,242,80,0.1) 0%, rgba(100,5,255,0.1) 11%, rgba(19,0,25,1) 22%);",titles:"#EFF6E0",inputBackground:"#0D0013",bigInputBackground:"#07000D",inputText:"#00F250",clockOpacity:.3,buttonBackground:"#36045A",eventBackground:"rgba(81, 6, 135, 0.15)"}},Ky=Yy`
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
 */function Ci(){return Ci=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ci.apply(this,arguments)}var dn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(dn||(dn={}));const Wd="popstate";function Jy(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:l}=r.location;return ja("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:lo(i)}return qy(t,n,null,e)}function $e(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function rc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Xy(){return Math.random().toString(36).substr(2,8)}function Hd(e,t){return{usr:e.state,key:e.key,idx:t}}function ja(e,t,n,r){return n===void 0&&(n=null),Ci({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Mr(t):t,{state:n,key:t&&t.key||r||Xy()})}function lo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Mr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function qy(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=dn.Pop,a=null,c=d();c==null&&(c=0,o.replaceState(Ci({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function f(){l=dn.Pop;let k=d(),h=k==null?null:k-c;c=k,a&&a({action:l,location:S.location,delta:h})}function g(k,h){l=dn.Push;let p=ja(S.location,k,h);n&&n(p,k),c=d()+1;let v=Hd(p,c),y=S.createHref(p);try{o.pushState(v,"",y)}catch{i.location.assign(y)}s&&a&&a({action:l,location:S.location,delta:1})}function x(k,h){l=dn.Replace;let p=ja(S.location,k,h);n&&n(p,k),c=d();let v=Hd(p,c),y=S.createHref(p);o.replaceState(v,"",y),s&&a&&a({action:l,location:S.location,delta:0})}function w(k){let h=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof k=="string"?k:lo(k);return $e(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let S={get action(){return l},get location(){return e(i,o)},listen(k){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(Wd,f),a=k,()=>{i.removeEventListener(Wd,f),a=null}},createHref(k){return t(i,k)},createURL:w,encodeLocation(k){let h=w(k);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:g,replace:x,go(k){return o.go(k)}};return S}var Vd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Vd||(Vd={}));function e1(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Mr(t):t,i=ic(r.pathname||"/",n);if(i==null)return null;let s=Th(e);t1(s);let o=null;for(let l=0;o==null&&l<s.length;++l)o=c1(s[l],p1(i));return o}function Th(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let a={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};a.relativePath.startsWith("/")&&($e(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let c=Sn([r,a.relativePath]),d=n.concat(a);s.children&&s.children.length>0&&($e(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Th(s.children,t,d,c)),!(s.path==null&&!s.index)&&t.push({path:c,score:a1(c,s.index),routesMeta:d})};return e.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let a of zh(s.path))i(s,o,a)}),t}function zh(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=zh(r.join("/")),l=[];return l.push(...o.map(a=>a===""?s:[s,a].join("/"))),i&&l.push(...o),l.map(a=>e.startsWith("/")&&a===""?"/":a)}function t1(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:u1(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const n1=/^:\w+$/,r1=3,i1=2,s1=1,o1=10,l1=-2,Gd=e=>e==="*";function a1(e,t){let n=e.split("/"),r=n.length;return n.some(Gd)&&(r+=l1),t&&(r+=i1),n.filter(i=>!Gd(i)).reduce((i,s)=>i+(n1.test(s)?r1:s===""?s1:o1),r)}function u1(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function c1(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let l=n[o],a=o===n.length-1,c=i==="/"?t:t.slice(i.length)||"/",d=d1({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},c);if(!d)return null;Object.assign(r,d.params);let f=l.route;s.push({params:r,pathname:Sn([i,d.pathname]),pathnameBase:v1(Sn([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=Sn([i,d.pathnameBase]))}return s}function d1(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=f1(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,f)=>{if(d==="*"){let g=l[f]||"";o=s.slice(0,s.length-g.length).replace(/(.)\/+$/,"$1")}return c[d]=m1(l[f]||"",d),c},{}),pathname:s,pathnameBase:o,pattern:e}}function f1(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),rc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function p1(e){try{return decodeURI(e)}catch(t){return rc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function m1(e,t){try{return decodeURIComponent(e)}catch(n){return rc(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function ic(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function h1(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Mr(e):e;return{pathname:n?n.startsWith("/")?n:g1(n,t):t,search:y1(r),hash:x1(i)}}function g1(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ol(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ih(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Oh(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Mr(e):(i=Ci({},e),$e(!i.pathname||!i.pathname.includes("?"),Ol("?","pathname","search",i)),$e(!i.pathname||!i.pathname.includes("#"),Ol("#","pathname","hash",i)),$e(!i.search||!i.search.includes("#"),Ol("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,l;if(r||o==null)l=n;else{let f=t.length-1;if(o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}l=f>=0?t[f]:"/"}let a=h1(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(c||d)&&(a.pathname+="/"),a}const Sn=e=>e.join("/").replace(/\/\/+/g,"/"),v1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),y1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,x1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function w1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function S1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const L1=typeof Object.is=="function"?Object.is:S1,{useState:k1,useEffect:E1,useLayoutEffect:C1,useDebugValue:b1}=Fl;function M1(e,t,n){const r=t(),[{inst:i},s]=k1({inst:{value:r,getSnapshot:t}});return C1(()=>{i.value=r,i.getSnapshot=t,_l(i)&&s({inst:i})},[e,r,t]),E1(()=>(_l(i)&&s({inst:i}),e(()=>{_l(i)&&s({inst:i})})),[e]),b1(r),r}function _l(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!L1(n,r)}catch{return!0}}function P1(e,t,n){return t()}const T1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",z1=!T1,I1=z1?P1:M1;"useSyncExternalStore"in Fl&&(e=>e.useSyncExternalStore)(Fl);const _h=u.createContext(null),Rh=u.createContext(null),Oi=u.createContext(null),Ko=u.createContext(null),Pr=u.createContext({outlet:null,matches:[]}),$h=u.createContext(null);function Ua(){return Ua=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ua.apply(this,arguments)}function O1(e,t){let{relative:n}=t===void 0?{}:t;_i()||$e(!1);let{basename:r,navigator:i}=u.useContext(Oi),{hash:s,pathname:o,search:l}=Nh(e,{relative:n}),a=o;return r!=="/"&&(a=o==="/"?r:Sn([r,o])),i.createHref({pathname:a,search:l,hash:s})}function _i(){return u.useContext(Ko)!=null}function Jo(){return _i()||$e(!1),u.useContext(Ko).location}function _1(){_i()||$e(!1);let{basename:e,navigator:t}=u.useContext(Oi),{matches:n}=u.useContext(Pr),{pathname:r}=Jo(),i=JSON.stringify(Ih(n).map(l=>l.pathnameBase)),s=u.useRef(!1);return u.useEffect(()=>{s.current=!0}),u.useCallback(function(l,a){if(a===void 0&&(a={}),!s.current)return;if(typeof l=="number"){t.go(l);return}let c=Oh(l,JSON.parse(i),r,a.relative==="path");e!=="/"&&(c.pathname=c.pathname==="/"?e:Sn([e,c.pathname])),(a.replace?t.replace:t.push)(c,a.state,a)},[e,t,i,r])}function Nh(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=u.useContext(Pr),{pathname:i}=Jo(),s=JSON.stringify(Ih(r).map(o=>o.pathnameBase));return u.useMemo(()=>Oh(e,JSON.parse(s),i,n==="path"),[e,s,i,n])}function R1(e,t){_i()||$e(!1);let{navigator:n}=u.useContext(Oi),r=u.useContext(Rh),{matches:i}=u.useContext(Pr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let a=Jo(),c;if(t){var d;let S=typeof t=="string"?Mr(t):t;l==="/"||(d=S.pathname)!=null&&d.startsWith(l)||$e(!1),c=S}else c=a;let f=c.pathname||"/",g=l==="/"?f:f.slice(l.length)||"/",x=e1(e,{pathname:g}),w=B1(x&&x.map(S=>Object.assign({},S,{params:Object.assign({},o,S.params),pathname:Sn([l,n.encodeLocation?n.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?l:Sn([l,n.encodeLocation?n.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,r||void 0);return t&&w?u.createElement(Ko.Provider,{value:{location:Ua({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:dn.Pop}},w):w}function $1(){let e=U1(),t=w1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},t),n?u.createElement("pre",{style:i},n):null,s)}class N1 extends u.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?u.createElement(Pr.Provider,{value:this.props.routeContext},u.createElement($h.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function A1(e){let{routeContext:t,match:n,children:r}=e,i=u.useContext(_h);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),u.createElement(Pr.Provider,{value:t},r)}function B1(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||$e(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,l)=>{let a=o.route.id?i==null?void 0:i[o.route.id]:null,c=null;n&&(o.route.ErrorBoundary?c=u.createElement(o.route.ErrorBoundary,null):o.route.errorElement?c=o.route.errorElement:c=u.createElement($1,null));let d=t.concat(r.slice(0,l+1)),f=()=>{let g=s;return a?g=c:o.route.Component?g=u.createElement(o.route.Component,null):o.route.element&&(g=o.route.element),u.createElement(A1,{match:o,routeContext:{outlet:s,matches:d},children:g})};return n&&(o.route.ErrorBoundary||o.route.errorElement||l===0)?u.createElement(N1,{location:n.location,component:c,error:a,children:f(),routeContext:{outlet:null,matches:d}}):f()},null)}var Qd;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Qd||(Qd={}));var ao;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(ao||(ao={}));function D1(e){let t=u.useContext(Rh);return t||$e(!1),t}function F1(e){let t=u.useContext(Pr);return t||$e(!1),t}function j1(e){let t=F1(),n=t.matches[t.matches.length-1];return n.route.id||$e(!1),n.route.id}function U1(){var e;let t=u.useContext($h),n=D1(ao.UseRouteError),r=j1(ao.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Zn(e){$e(!1)}function W1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=dn.Pop,navigator:s,static:o=!1}=e;_i()&&$e(!1);let l=t.replace(/^\/*/,"/"),a=u.useMemo(()=>({basename:l,navigator:s,static:o}),[l,s,o]);typeof r=="string"&&(r=Mr(r));let{pathname:c="/",search:d="",hash:f="",state:g=null,key:x="default"}=r,w=u.useMemo(()=>{let S=ic(c,l);return S==null?null:{location:{pathname:S,search:d,hash:f,state:g,key:x},navigationType:i}},[l,c,d,f,g,x,i]);return w==null?null:u.createElement(Oi.Provider,{value:a},u.createElement(Ko.Provider,{children:n,value:w}))}function H1(e){let{children:t,location:n}=e,r=u.useContext(_h),i=r&&!t?r.router.routes:Wa(t);return R1(i,n)}var Zd;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Zd||(Zd={}));new Promise(()=>{});function Wa(e,t){t===void 0&&(t=[]);let n=[];return u.Children.forEach(e,(r,i)=>{if(!u.isValidElement(r))return;let s=[...t,i];if(r.type===u.Fragment){n.push.apply(n,Wa(r.props.children,s));return}r.type!==Zn&&$e(!1),!r.props.index||!r.props.children||$e(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Wa(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ha(){return Ha=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ha.apply(this,arguments)}function V1(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function G1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Q1(e,t){return e.button===0&&(!t||t==="_self")&&!G1(e)}const Z1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Y1(e){let{basename:t,children:n,window:r}=e,i=u.useRef();i.current==null&&(i.current=Jy({window:r,v5Compat:!0}));let s=i.current,[o,l]=u.useState({action:s.action,location:s.location});return u.useLayoutEffect(()=>s.listen(l),[s]),u.createElement(W1,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:s})}const K1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",J1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qr=u.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:a,to:c,preventScrollReset:d}=t,f=V1(t,Z1),{basename:g}=u.useContext(Oi),x,w=!1;if(typeof c=="string"&&J1.test(c)&&(x=c,K1)){let p=new URL(window.location.href),v=c.startsWith("//")?new URL(p.protocol+c):new URL(c),y=ic(v.pathname,g);v.origin===p.origin&&y!=null?c=y+v.search+v.hash:w=!0}let S=O1(c,{relative:i}),k=X1(c,{replace:o,state:l,target:a,preventScrollReset:d,relative:i});function h(p){r&&r(p),p.defaultPrevented||k(p)}return u.createElement("a",Ha({},f,{href:x||S,onClick:w||s?r:h,ref:n,target:a}))});var Yd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Yd||(Yd={}));var Kd;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Kd||(Kd={}));function X1(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=t===void 0?{}:t,l=_1(),a=Jo(),c=Nh(e,{relative:o});return u.useCallback(d=>{if(Q1(d,n)){d.preventDefault();let f=r!==void 0?r:lo(a)===lo(c);l(e,{replace:f,state:i,preventScrollReset:s,relative:o})}},[a,l,c,r,i,n,e,s,o])}const q1=ue.div`    
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
`,ex=ue.div`
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
`,tx=ue.ul`
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
`,nx=ue.header`
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
`;function Ri(){return N(nx,{children:[L(Qr,{to:"/ChronoSum",children:"Chrono Sum"}),L("span",{children:"time operations!"})]})}function rx(){return N(q1,{children:[L("header",{children:L(Ri,{})}),N(ex,{children:[L("h2",{children:"Tools"}),N(tx,{children:[N("li",{children:[L(Qr,{to:"/ChronoSum/SimpleSum",children:"Simple sum"}),L("span",{children:"Add to, or, subtract from a given time"})]}),N("li",{children:[L(Qr,{to:"/ChronoSum/DurationSum",children:"Duration sum"}),L("span",{children:"Get the total duration of a series of events"})]}),N("li",{children:[L(Qr,{to:"/ChronoSum/TimeDifference",children:"Time Zone Difference"}),L("span",{children:"Get the current time and the difference between two location's time zones"})]}),N("li",{children:[L(Qr,{to:"/ChronoSum/RecurrentEvents",children:"Recurrent Events"}),L("span",{children:"Know when a recurrent event is going to happen given a starting date and period"})]})]}),L("span",{children:"(Click on the page title to return to this page)"})]})]})}const ix=ue.div`
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
`,sx=ue.div`
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
`,ox=ue.div`
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
`,lx=ue.div`
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
`;function cs({name:e,state:t,onChange:n}){return N(lx,{children:[L("label",{htmlFor:"name",children:e}),L("input",{type:"text",id:e,onChange:n,value:t}),L("span",{id:e+"ToAddWarning",className:"Warning"})]})}const ax=ue.div`
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
`,Ah=u.createContext({});function ux({children:e}){const[t,n]=u.useState(["Hours","Minutes","Minutes","Seconds","Miliseconds"]),[r,i]=u.useState(!1),[s,o]=u.useState([]),[l,a]=u.useState([]),[c,d]=u.useState();return L(Ah.Provider,{value:{enabledFields:t,setEnabledFields:n,format:r,setFormat:i,events:s,setEvents:o,recurringEvents:l,setRecurringEvents:a,selectedDay:c,setSelectedDay:d},children:e})}function It(){return u.useContext(Ah)}function ds({name:e,state:t,onChange:n}){const{enabledFields:r}=It();return N(ax,{children:[L("label",{htmlFor:"name",children:e}),L("input",{type:"text",id:e,value:r.includes(e+"s")?t:"--",disabled:!r.includes(e+"s"),onChange:n}),L("span",{id:"Initial"+e+"Warning",className:"Warning"})]})}const cx=ue.div`
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
`;function fs({name:e,state:t}){return N(cx,{children:[L("label",{htmlFor:"Resulting"+e,children:e}),L("span",{id:"Resulting"+e,children:t})]})}const dx=ue.div`
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
`;var Bh={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Jd=Ye.createContext&&Ye.createContext(Bh),Ln=globalThis&&globalThis.__assign||function(){return Ln=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Ln.apply(this,arguments)},fx=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Dh(e){return e&&e.map(function(t,n){return Ye.createElement(t.tag,Ln({key:n},t.attr),Dh(t.child))})}function Ot(e){return function(t){return Ye.createElement(px,Ln({attr:Ln({},e.attr)},t),Dh(e.child))}}function px(e){var t=function(n){var r=e.attr,i=e.size,s=e.title,o=fx(e,["attr","size","title"]),l=i||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),Ye.createElement("svg",Ln({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:a,style:Ln(Ln({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&Ye.createElement("title",null,s),e.children)};return Jd!==void 0?Ye.createElement(Jd.Consumer,null,function(n){return t(n)}):t(Bh)}function Va(e){return Ot({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M9 9h6v6H9z"}},{tag:"path",attr:{d:"M19 17V7c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2zM7 7h10l.002 10H7V7z"}}]})(e)}function Ga(e){return Ot({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7 5c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2H7zm0 12V7h10l.002 10H7z"}}]})(e)}function ps({name:e,calculate:t}){const{setEnabledFields:n}=It(),[r,i]=u.useState(!0);u.useEffect(()=>{document.querySelector("#"+e).checked=!0},[]);function s(){const o=document.querySelector("#"+e).checked;i(o),n(o?l=>[...l,e]:l=>l.filter(a=>a!=e)),t(o,e)}return N(dx,{children:[L("div",{id:"checkboxDisplay",children:r?L(Va,{}):L(Ga,{})}),L("input",{type:"checkbox",id:e,onChange:()=>s()}),L("label",{htmlFor:e,children:e})]})}const mx=ue.div`
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
`;function hx(e){return Ot({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M17 12h-14"}},{tag:"path",attr:{d:"M6 9l-3 3l3 3"}},{tag:"path",attr:{d:"M19 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}}]})(e)}function gx({name:e,opt1:t,opt2:n,onChange:r}){return N(mx,{children:[L("label",{htmlFor:"FormatSlider",children:e}),N("div",{className:"InputWrapper",children:[L("span",{children:t}),N("label",{htmlFor:"FormatSlider",className:"SliderBox",children:[L("input",{type:"checkbox",id:"FormatSlider",onChange:r}),L("span",{className:"Slider",children:L(hx,{})})]}),L("span",{children:n})]})]})}const Xd="/ChronoSum/assets/clock_face_roman-7ffd0c99.svg";let K={initialHours:0,initialMinutes:0,initialSeconds:0,initialMiliseconds:0,hoursToAdd:0,minutesToAdd:0,secondsToAdd:0,milisecondsToAdd:0};function vx(){const{enabledFields:e,format:t,setFormat:n}=It(),[r,i]=u.useState(""),[s,o]=u.useState(""),[l,a]=u.useState(""),[c,d]=u.useState(""),[f,g]=u.useState(""),[x,w]=u.useState(""),[S,k]=u.useState(""),[h,p]=u.useState(""),[v,y]=u.useState(""),[P,b]=u.useState(""),[M,C]=u.useState(""),[m,I]=u.useState(""),[B,Q]=u.useState(""),[G,W]=u.useState(""),[J,ne]=u.useState(""),[te,O]=u.useState(""),[F,U]=u.useState("AM"),[q,$]=u.useState("AM");function _(){i(""),o(""),a(""),d(""),g(""),w(""),k(""),p(""),y(""),b(""),C(""),I(""),$("AM"),K.initialHours=0,K.initialMinutes=0,K.initialSeconds=0,K.initialMiliseconds=0,K.hoursToAdd=0,K.minutesToAdd=0,K.secondsToAdd=0,K.milisecondsToAdd=0,T()}function z(E){if(E)U(E),E=="PM"&&(r=="0"||r==""?i(""):r!="12"&&(K.initialHours+=12)),E=="AM"&&(r=="12"?(i("11"),K.initialHours=11):r!=""&&(K.initialHours-=12)),T();else{const V=document.querySelector("#FormatSlider").checked;n(V),V?(r>11&&(r>12&&i(j=>j-12),U("PM")),v>11&&(v>12&&y(j=>j-12),$("PM"))):r!=""&&(F=="PM"&&(r!=12&&i(j=>j+12),U("AM"),$("AM")),q=="PM"&&v!="12"&&y(j=>j+12))}}function H(E,V){switch(V){case"initialHours":if(E!=0&isNaN(parseInt(E))){A("#InitialHourWarning","Only numbers are allowed");return}if(t){if(F=="AM"){if(E>11||E<0){A("#InitialHourWarning","Hour AM must be between 0 and 11");return}E!=""?(i(parseInt(E)),K.initialHours=parseInt(E)):(i(""),K.initialHours=0)}if(F=="PM"){if((E>12||E<1)&&E!=""){A("#InitialHourWarning","Hour PM must be between 1 and 12");return}E!=""?(i(parseInt(E)),E<12?K.initialHours=parseInt(E)+12:K.initialHours=parseInt(E)):(i(""),K.initialHours=0)}}else{if(E>23||E<0){A("#InitialHourWarning","Hour must be a value between 0 and 23");return}E!=""?(i(parseInt(E)),K.initialHours=parseInt(E)):(i(""),K.initialHours=0)}break;case"initialMinutes":if(E>59||E<0){A("#InitialMinuteWarning","Minute must be a value between 0 and 59");return}if(E!=0&isNaN(parseInt(E))){A("#InitialMinuteWarning","Only numbers are allowed");return}E!=""?(o(parseInt(E)),K.initialMinutes=parseInt(E)):(o(""),K.initialMinutes=0);break;case"initialSeconds":if(E>59||E<0){A("#InitialSecondWarning","Second must be a value between 0 and 59");return}if(E!=0&isNaN(parseInt(E))){A("#InitialSecondWarning","Only numbers are allowed");return}E!=""?(a(parseInt(E)),K.initialSeconds=parseInt(E)):(a(""),K.initialSeconds=0);break;case"initialMiliseconds":if(E>999||E<0){A("#InitialMilisecondWarning","Milisecond must be a value between 0 and 999");return}if(E!=0&isNaN(parseInt(E))){A("#InitialMilisecondWarning","Only numbers are allowed");return}E!=""?(d(parseInt(E)),K.initialMiliseconds=parseInt(E)):(d(""),K.initialMiliseconds=0);break;case"hoursToAdd":if(E!=0&isNaN(parseInt(E))&E!="-"){A("#HoursToAddWarning","Only numbers are allowed");return}if(E>=9007199254740991){A("#HoursToAddWarning","Max value reached!");return}E!=""&E!="-"?(g(parseInt(E)),K.hoursToAdd=parseInt(E)):(E=="-"?g("-"):g(""),K.hoursToAdd=0);break;case"minutesToAdd":if(E!=0&isNaN(parseInt(E))&E!="-"){A("#MinutesToAddWarning","Only numbers are allowed");return}if(E>=9007199254740991){A("#MinutesToAddWarning","Max value reached!");return}E!=""&E!="-"?(w(parseInt(E)),K.minutesToAdd=parseInt(E)):(E=="-"?w("-"):w(""),K.minutesToAdd=0);break;case"secondsToAdd":if(E!=0&isNaN(parseInt(E))&E!="-"){A("#SecondsToAddWarning","Only numbers are allowed");return}if(E>=9007199254740991){A("#SecondsToAddWarning","Max value reached!");return}E!=""&E!="-"?(k(parseInt(E)),K.secondsToAdd=parseInt(E)):(E=="-"?k("-"):k(""),K.secondsToAdd=0);break;case"milisecondsToAdd":if(E!=0&isNaN(parseInt(E))&E!="-"){A("#MilisecondsToAddWarning","Only numbers are allowed");return}if(E>=9007199254740991){A("#MilisecondsToAddWarning","Max value reached!");return}E!=""&E!="-"?(p(parseInt(E)),K.milisecondsToAdd=parseInt(E)):(E=="-"?p("-"):p(""),K.milisecondsToAdd=0);break}T()}function T(E,V){let j=0,ee=0,Y=0,oe=0,X=0,ie=0,pe=0,ce="";if(V){switch(V){case"Hours":E?oe=K.initialHours+K.hoursToAdd:oe=0;break;case"Minutes":E?X=K.initialMinutes+K.minutesToAdd:X=0;break;case"Seconds":E?ie=K.initialSeconds+K.secondsToAdd:ie=0;break;case"Miliseconds":E?pe=K.initialMiliseconds+K.milisecondsToAdd:pe=0;break}V!="Hours"&e.includes("Hours")&&(oe=K.initialHours+K.hoursToAdd),V!="Minutes"&e.includes("Minutes")&&(X=K.initialMinutes+K.minutesToAdd),V!="Seconds"&e.includes("Seconds")&&(ie=K.initialSeconds+K.secondsToAdd),V!="Miliseconds"&e.includes("Miliseconds")&&(pe=K.initialMiliseconds+K.milisecondsToAdd)}else e.includes("Hours")&&(oe=K.initialHours+K.hoursToAdd),e.includes("Minutes")&&(X=K.initialMinutes+K.minutesToAdd),e.includes("Seconds")&&(ie=K.initialSeconds+K.secondsToAdd),e.includes("Miliseconds")&&(pe=K.initialMiliseconds+K.milisecondsToAdd);if(pe>999){const re=Math.floor(pe/1e3);pe=pe%1e3,ie+=re}else if(pe<0){const re=Math.floor(pe/1e3);ie+=re,pe-=re*1e3}if(ie>59){const re=Math.floor(ie/60);ie=ie%60,X+=re}else if(ie<0){const re=Math.floor(ie/60);X+=re,ie-=re*60}if(X>59){const re=Math.floor(X/60);X=X%60,oe+=re}else if(X<0){const re=Math.floor(X/60);oe+=re,X-=re*60}if(oe>23){const re=Math.floor(oe/24);oe=oe%24,Y=re,ce="after"}else if(oe<0){const re=Math.floor(oe/24);Y-=re,oe-=re*24,ce="before"}if(Y>29){const re=Math.floor(Y/30);Y=Y%30,ee=re}else if(Y<0){const re=Math.floor(Y/30);ee-=re,Y-=re*30}if(ee>11){const re=Math.floor(ee/12);ee=ee%12,j=re}else if(j<0){const re=Math.floor(ee/12);j-=re,ee-=re*12}t&&(oe>11?(oe>12&&(oe-=12),$("PM")):$("AM")),oe!=0?y(oe):(K.hoursToAdd!=""||K.initialHours!="")&(!V||V!="Hours"||V=="Hours"&E)?y("0"):y(""),X!=0?b(X):(K.minutesToAdd!=""||K.initialMinutes!="")&(!V||V!="Minutes"||V=="Minutes"&E)?b("0"):b(""),ie!=0?C(ie):(K.secondsToAdd!=""||K.initialSeconds!="")&(!V||V!="Seconds"||V=="Seconds"&E)?C("0"):C(""),pe!=0?I(pe):(K.milisecondsToAdd!=""||K.initialMiliseconds!="")&(!V||V!="Miliseconds"||V=="Miliseconds"&E)?I("0"):I(""),Y!=0?Math.sqrt(Math.pow(Y,2))==1?Q("The day"):Q(`${Y} days`):ee!=0||j!=0?Q("0 days"):Q(""),ee!=0?ee>1?W(`${ee} months`):W(`${ee} month`):j!=0?W("0 months"):W(""),j!=0?j>1?ne(`${j} years`):ne(`${j} year`):ne(""),Y!=0||ee!=0||j!=0?O(ce):O("")}function A(E,V){const j=document.querySelector(E);j.textContent=V,j.classList.add("active"),j.style.opacity=1,setTimeout(()=>j.classList.remove("active"),1),setTimeout(()=>j.style.opacity=0,500)}return N(ix,{children:[N("header",{children:[L(Ri,{}),N("div",{id:"options",children:[L(ps,{name:"Hours",calculate:T}),L(ps,{name:"Minutes",calculate:T}),L(ps,{name:"Seconds",calculate:T}),L(ps,{name:"Miliseconds",calculate:T}),L(gx,{name:"Format",opt1:"24",opt2:"12",id:"FormatWrapper",onChange:()=>z()})]})]}),L("img",{src:Xd,id:"ClockBackgroundDesktop"}),N("div",{id:"App",children:[N("div",{id:"InitialTime",children:[L("label",{htmlFor:"InitialTime",id:"InitialTimeSideLabel",children:"Initial Time"}),t==!0&&N("div",{id:"AM-PM_wrapperMobile",children:[L("label",{htmlFor:"AM",children:"AM"}),L("div",{className:"RadioDisplay",children:F=="AM"?L(Va,{}):L(Ga,{})}),L("input",{type:"radio",id:"AM",name:"AM-PM",defaultChecked:!0,onClick:()=>z("AM")}),L("label",{htmlFor:"PM",children:"PM"}),L("div",{className:"RadioDisplay",children:F=="PM"?L(Va,{}):L(Ga,{})}),L("input",{type:"radio",id:"PM",name:"AM-PM",onClick:()=>z("PM")})]}),L(ds,{name:"Hour",state:r,onChange:E=>H(E.target.value,"initialHours")}),L(ds,{name:"Minute",state:s,onChange:E=>H(E.target.value,"initialMinutes")}),L(ds,{name:"Second",state:l,onChange:E=>H(E.target.value,"initialSeconds")}),L(ds,{name:"Milisecond",state:c,onChange:E=>H(E.target.value,"initialMiliseconds")})]}),L("button",{type:"button",id:"ClearAllMobile",onClick:()=>_(),children:"Clear Inputs"}),N(sx,{children:[e.includes("Hours")&&L(cs,{name:"Hours",state:f,onChange:E=>H(E.target.value,"hoursToAdd")}),e.includes("Minutes")&&L(cs,{name:"Minutes",state:x,onChange:E=>H(E.target.value,"minutesToAdd")}),e.includes("Seconds")&&L(cs,{name:"Seconds",state:S,onChange:E=>H(E.target.value,"secondsToAdd")}),e.includes("Miliseconds")&&L(cs,{name:"Miliseconds",state:h,onChange:E=>H(E.target.value,"milisecondsToAdd")}),L("button",{type:"button",id:"ClearAllDesktop",onClick:()=>_(),children:"Clear Inputs"})]}),L("img",{src:Xd,id:"ClockBackgroundMobile"}),N(ox,{id:"date",children:[B&&L("p",{id:"Days",children:B}),G&&L("p",{id:"Months",children:G}),J&&L("p",{id:"Years",children:J}),te&&L("span",{children:te})]}),N("div",{id:"ResultingTime",children:[L("label",{htmlFor:"ResultingTime",id:"ResultingTimeSideLabel",children:"Resulting Time"}),t&&L("span",{id:"Identifier",children:q}),L(fs,{name:"Hour",state:v}),L(fs,{name:"Minute",state:P}),L(fs,{name:"Second",state:M}),L(fs,{name:"Milisecond",state:m})]})]})]})}const yx=ue.div`
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
`,xx=ue.ul`
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
`,wx=ue.div`
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
`,Sx=ue.li`
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
`,Rl=ue.div`
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

    input:disabled{
        opacity: 1;
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
`;function Fh(e){return Ot({tag:"svg",attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 3c-4.963 0-9 4.038-9 9s4.037 9 9 9 9-4.038 9-9-4.037-9-9-9zm0 16c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7zM12.707 12l2.646-2.646c.194-.194.194-.512 0-.707-.195-.194-.513-.194-.707 0l-2.646 2.646-2.646-2.647c-.195-.194-.513-.194-.707 0-.195.195-.195.513 0 .707l2.646 2.647-2.646 2.646c-.195.195-.195.513 0 .707.097.098.225.147.353.147s.256-.049.354-.146l2.646-2.647 2.646 2.646c.098.098.226.147.354.147s.256-.049.354-.146c.194-.194.194-.512 0-.707l-2.647-2.647z"}}]})(e)}function Lx({name:e,hours:t,minutes:n,seconds:r,id:i}){const{setEvents:s}=It();function o(){s(l=>l.filter(a=>a.id!=i))}return N(Sx,{children:[L("button",{className:"Delete",onClick:()=>o(),children:L(Fh,{})}),L("span",{className:"Name",children:e}),N("div",{className:"DurationWrapper",children:[L("span",{children:"Duration:"}),N("div",{className:"FieldsWrapper",children:[N(Rl,{children:[L("label",{htmlFor:"hours",children:"Hours"}),L("input",{type:"text",id:"hours",disabled:!0,value:t})]}),N(Rl,{children:[L("label",{htmlFor:"hours",children:"Minutes"}),L("input",{type:"text",id:"hours",disabled:!0,value:n})]}),N(Rl,{children:[L("label",{htmlFor:"hours",children:"Seconds"}),L("input",{type:"text",id:"hours",disabled:!0,value:r})]})]})]})]})}const kx=ue.li`
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
`,$l=ue.div`
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
`;function jh(e){return Ot({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M363 277h-86v86h-42v-86h-86v-42h86v-86h42v86h86v42z"}},{tag:"path",attr:{d:"M256 90c44.3 0 86 17.3 117.4 48.6C404.7 170 422 211.7 422 256s-17.3 86-48.6 117.4C342 404.7 300.3 422 256 422c-44.3 0-86-17.3-117.4-48.6C107.3 342 90 300.3 90 256c0-44.3 17.3-86 48.6-117.4C170 107.3 211.7 90 256 90m0-42C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"}}]})(e)}function Ex({}){const{setEvents:e}=It(),[t,n]=u.useState(""),[r,i]=u.useState(""),[s,o]=u.useState(""),[l,a]=u.useState("");function c(f,g){if(!(f>=9007199254740991))switch(g){case"hour":f!=""&!isNaN(parseInt(f))&&i(parseInt(f)),f==""&&i(0);break;case"minute":f!=""&!isNaN(parseInt(f))&&o(parseInt(f)),f==""&&o(0);break;case"second":f!=""&!isNaN(parseInt(f))&&a(parseInt(f)),f==""&&a(0);break}}function d(){const f={name:t,hour:r,minute:s,second:l,id:Date.now()};f.hour==""&&(f.hour=0),f.minute==""&&(f.minute=0),f.second==""&&(f.second=0),e(g=>[f,...g]),n(""),i(""),o(""),a("")}return N(kx,{children:[L("button",{className:"Add",onClick:()=>d(),children:L(jh,{})}),N("div",{className:"Name",children:[L("label",{htmlFor:"Name",children:"New event name"}),L("input",{type:"text",id:"Name",value:t,onChange:f=>n(f.target.value)})]}),N("div",{className:"DurationWrapper",children:[L("span",{children:"Duration:"}),N("div",{className:"FieldsWrapper",children:[N($l,{children:[L("label",{htmlFor:"hours",children:"Hours"}),L("input",{type:"text",id:"hours",value:r,onChange:f=>c(f.target.value,"hour")})]}),N($l,{children:[L("label",{htmlFor:"minutes",children:"Minutes"}),L("input",{type:"text",id:"minutes",value:s,onChange:f=>c(f.target.value,"minute")})]}),N($l,{children:[L("label",{htmlFor:"seconds",children:"Seconds"}),L("input",{type:"text",id:"seconds",value:l,onChange:f=>c(f.target.value,"second")})]})]})]})]})}function Cx(){const{events:e}=It(),[t,n]=u.useState(""),[r,i]=u.useState(""),[s,o]=u.useState("");return u.useEffect(()=>{function l(){let a=0,c=0,d=0;if(e.map(f=>a+=parseInt(f.hour)),e.map(f=>c+=parseInt(f.minute)),e.map(f=>d+=parseInt(f.second)),d>59){const f=Math.floor(d/60);d=d%60,c+=f}if(c>59){const f=Math.floor(c/60);c=c%60,console.log(a),a+=f,console.log(f,c)}if(a>=9007199254740991){alert("Max result value reached, exclude one or more events to recalculate");return}n(a),i(c),o(d),isNaN(a)&&n(0),isNaN(c)&&i(0),isNaN(d)&&o(0)}l()},[e]),N(yx,{children:[N("header",{children:[" ",L(Ri,{})," "]}),N(xx,{children:[L("span",{children:"Events"}),L(Ex,{}),e.map((l,a)=>L(Lx,{name:l.name,hours:l.hour,minutes:l.minute,seconds:l.second,id:l.id},a))]}),N(wx,{children:[L("h2",{children:"Result"}),N("div",{id:"resultsWrapper",children:[N("div",{className:"resultWrapper",children:[L("label",{htmlFor:"hours",children:"Hours"}),L("input",{id:"hours",value:t,disabled:!0})]}),N("div",{className:"resultWrapper",children:[L("label",{htmlFor:"minutes",children:"Minutes"}),N("span",{id:"minutes",children:[" ",r," "]})]}),N("div",{className:"resultWrapper",children:[L("label",{htmlFor:"seconds",children:"Seconds"}),N("span",{id:"seconds",children:[" ",s," "]})]})]})]})]})}var bx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Mx=function(e,t,n,r,i,s,o,l){if(!e){var a;if(t===void 0)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,i,s,o,l],d=0;a=new Error(t.replace(/%s/g,function(){return c[d++]})),a.name="Invariant Violation"}throw a.framesToPop=1,a}},Ne=Mx;const ae=u.createContext(null);function Px(){Ne(!!u.useContext,"useGoogleMap is React hook and requires React version 16.8+");const e=u.useContext(ae);return Ne(!!e,"useGoogleMap needs a GoogleMap available up in the tree"),e}function Tx(e,t,n){return Object.keys(e).reduce(function(i,s){return t(i,e[s],s)},n)}function zx(e,t){Object.keys(e).forEach(n=>t(e[n],n))}function Ix(e,t,n,r){const i={};return zx(e,(o,l)=>{const a=n[l];a!==t[l]&&(i[l]=a,o(r,a))}),i}function Ox(e,t,n){return Tx(n,function(s,o,l){return typeof e[l]=="function"&&s.push(google.maps.event.addListener(t,o,e[l])),s},[])}function _x(e){google.maps.event.removeListener(e)}function me(e=[]){e.forEach(_x)}function de({updaterMap:e,eventMap:t,prevProps:n,nextProps:r,instance:i}){const s=Ox(r,i,t);return Ix(e,n,r,i),s}function Rx({children:e,options:t,id:n,mapContainerStyle:r,mapContainerClassName:i,center:s,onClick:o,onDblClick:l,onDrag:a,onDragEnd:c,onDragStart:d,onMouseMove:f,onMouseOut:g,onMouseOver:x,onMouseDown:w,onMouseUp:S,onRightClick:k,onCenterChanged:h,onLoad:p,onUnmount:v}){const[y,P]=u.useState(null),b=u.useRef(null),[M,C]=u.useState(null),[m,I]=u.useState(null),[B,Q]=u.useState(null),[G,W]=u.useState(null),[J,ne]=u.useState(null),[te,O]=u.useState(null),[F,U]=u.useState(null),[q,$]=u.useState(null),[_,z]=u.useState(null),[H,T]=u.useState(null),[A,E]=u.useState(null),[V,j]=u.useState(null);return u.useEffect(()=>{t&&y!==null&&y.setOptions(t)},[y,t]),u.useEffect(()=>{y!==null&&typeof s<"u"&&y.setCenter(s)},[y,s]),u.useEffect(()=>{y&&l&&(m!==null&&google.maps.event.removeListener(m),I(google.maps.event.addListener(y,"dblclick",l)))},[l]),u.useEffect(()=>{y&&c&&(B!==null&&google.maps.event.removeListener(B),Q(google.maps.event.addListener(y,"dragend",c)))},[c]),u.useEffect(()=>{y&&d&&(G!==null&&google.maps.event.removeListener(G),W(google.maps.event.addListener(y,"dragstart",d)))},[d]),u.useEffect(()=>{y&&w&&(J!==null&&google.maps.event.removeListener(J),ne(google.maps.event.addListener(y,"mousedown",w)))},[w]),u.useEffect(()=>{y&&f&&(te!==null&&google.maps.event.removeListener(te),O(google.maps.event.addListener(y,"mousemove",f)))},[f]),u.useEffect(()=>{y&&g&&(F!==null&&google.maps.event.removeListener(F),U(google.maps.event.addListener(y,"mouseout",g)))},[g]),u.useEffect(()=>{y&&x&&(q!==null&&google.maps.event.removeListener(q),$(google.maps.event.addListener(y,"mouseover",x)))},[x]),u.useEffect(()=>{y&&S&&(_!==null&&google.maps.event.removeListener(_),z(google.maps.event.addListener(y,"mouseup",S)))},[S]),u.useEffect(()=>{y&&k&&(H!==null&&google.maps.event.removeListener(H),T(google.maps.event.addListener(y,"rightclick",k)))},[k]),u.useEffect(()=>{y&&o&&(A!==null&&google.maps.event.removeListener(A),E(google.maps.event.addListener(y,"click",o)))},[o]),u.useEffect(()=>{y&&a&&(V!==null&&google.maps.event.removeListener(V),j(google.maps.event.addListener(y,"drag",a)))},[a]),u.useEffect(()=>{y&&h&&(M!==null&&google.maps.event.removeListener(M),C(google.maps.event.addListener(y,"center_changed",h)))},[o]),u.useEffect(()=>{const ee=b.current===null?null:new google.maps.Map(b.current,t);return P(ee),ee!==null&&p&&p(ee),()=>{ee!==null&&v&&v(ee)}},[]),L("div",Object.assign({id:n,ref:b,style:r,className:i},{children:L(ae.Provider,Object.assign({value:y},{children:y!==null?e:L(mo,{})}))}))}u.memo(Rx);/*! *****************************************************************************
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
***************************************************************************** */function sc(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function $x(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function l(d){try{c(r.next(d))}catch(f){o(f)}}function a(d){try{c(r.throw(d))}catch(f){o(f)}}function c(d){d.done?s(d.value):i(d.value).then(l,a)}c((r=r.apply(e,t||[])).next())})}const Rn=typeof document<"u";function Uh({url:e,id:t,nonce:n}){return Rn?new Promise(function(i,s){const o=document.getElementById(t),l=window;if(o){const c=o.getAttribute("data-state");if(o.src===e&&c!=="error"){if(c==="ready")return i(t);{const d=l.initMap,f=o.onerror;l.initMap=function(){d&&d(),i(t)},o.onerror=function(g){f&&f(g),s(g)};return}}else o.remove()}const a=document.createElement("script");a.type="text/javascript",a.src=e,a.id=t,a.async=!0,a.nonce=n,a.onerror=function(d){a.setAttribute("data-state","error"),s(d)},l.initMap=function(){a.setAttribute("data-state","ready"),i(t)},document.head.appendChild(a)}).catch(r=>{throw console.error("injectScript error: ",r),r}):Promise.reject(new Error("document is undefined"))}function qd(e){const t=e.href;return t&&(t.indexOf("https://fonts.googleapis.com/css?family=Roboto")===0||t.indexOf("https://fonts.googleapis.com/css?family=Google+Sans+Text")===0)?!0:e.tagName.toLowerCase()==="style"&&e.styleSheet&&e.styleSheet.cssText&&e.styleSheet.cssText.replace(`\r
`,"").indexOf(".gm-style")===0?(e.styleSheet.cssText="",!0):e.tagName.toLowerCase()==="style"&&e.innerHTML&&e.innerHTML.replace(`\r
`,"").indexOf(".gm-style")===0?(e.innerHTML="",!0):e.tagName.toLowerCase()==="style"&&!e.styleSheet&&!e.innerHTML}function Wh(){const e=document.getElementsByTagName("head")[0],t=e.insertBefore.bind(e);e.insertBefore=function(i,s){qd(i)||Reflect.apply(t,e,[i,s])};const n=e.appendChild.bind(e);e.appendChild=function(i){qd(i)||Reflect.apply(n,e,[i])}}function Hh({googleMapsApiKey:e,googleMapsClientId:t,version:n="weekly",language:r,region:i,libraries:s,channel:o,mapIds:l,authReferrerPolicy:a}){const c=[];return Ne(e&&t||!(e&&t),"You need to specify either googleMapsApiKey or googleMapsClientId for @react-google-maps/api load script to work. You cannot use both at the same time."),e?c.push(`key=${e}`):t&&c.push(`client=${t}`),n&&c.push(`v=${n}`),r&&c.push(`language=${r}`),i&&c.push(`region=${i}`),s&&s.length&&c.push(`libraries=${s.sort().join(",")}`),o&&c.push(`channel=${o}`),l&&l.length&&c.push(`map_ids=${l.join(",")}`),a&&c.push(`auth_referrer_policy=${a}`),c.push("callback=initMap"),`https://maps.googleapis.com/maps/api/js?${c.join("&")}`}let jr=!1;function Vh(){return L("div",{children:"Loading..."})}const Qa={id:"script-loader",version:"weekly"};class Nx extends u.PureComponent{constructor(){super(...arguments),this.check=u.createRef(),this.state={loaded:!1},this.cleanupCallback=()=>{delete window.google.maps,this.injectScript()},this.isCleaningUp=()=>$x(this,void 0,void 0,function*(){function t(n){if(!jr)n();else if(Rn){const r=window.setInterval(function(){jr||(window.clearInterval(r),n())},1)}}return new Promise(t)}),this.cleanup=()=>{jr=!0;const t=document.getElementById(this.props.id);t&&t.parentNode&&t.parentNode.removeChild(t),Array.prototype.slice.call(document.getElementsByTagName("script")).filter(function(r){return typeof r.src=="string"&&r.src.includes("maps.googleapis")}).forEach(function(r){r.parentNode&&r.parentNode.removeChild(r)}),Array.prototype.slice.call(document.getElementsByTagName("link")).filter(function(r){return r.href==="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans"}).forEach(function(r){r.parentNode&&r.parentNode.removeChild(r)}),Array.prototype.slice.call(document.getElementsByTagName("style")).filter(function(r){return r.innerText!==void 0&&r.innerText.length>0&&r.innerText.includes(".gm-")}).forEach(function(r){r.parentNode&&r.parentNode.removeChild(r)})},this.injectScript=()=>{this.props.preventGoogleFontsLoading&&Wh(),Ne(!!this.props.id,'LoadScript requires "id" prop to be a string: %s',this.props.id);const t={id:this.props.id,nonce:this.props.nonce,url:Hh(this.props)};Uh(t).then(()=>{this.props.onLoad&&this.props.onLoad(),this.setState(function(){return{loaded:!0}})}).catch(n=>{this.props.onError&&this.props.onError(n),console.error(`
          There has been an Error with loading Google Maps API script, please check that you provided correct google API key (${this.props.googleMapsApiKey||"-"}) or Client ID (${this.props.googleMapsClientId||"-"}) to <LoadScript />
          Otherwise it is a Network issue.
        `)})}}componentDidMount(){if(Rn){if(window.google&&window.google.maps&&!jr){console.error("google api is already presented");return}this.isCleaningUp().then(this.injectScript).catch(function(n){console.error("Error at injecting script after cleaning up: ",n)})}}componentDidUpdate(t){this.props.libraries!==t.libraries&&console.warn("Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables"),Rn&&t.language!==this.props.language&&(this.cleanup(),this.setState(function(){return{loaded:!1}},this.cleanupCallback))}componentWillUnmount(){if(Rn){this.cleanup();const t=()=>{this.check.current||(delete window.google,jr=!1)};window.setTimeout(t,1),this.props.onUnmount&&this.props.onUnmount()}}render(){return N(mo,{children:[L("div",{ref:this.check}),this.state.loaded?this.props.children:this.props.loadingElement||L(Vh,{})]})}}Nx.defaultProps=Qa;let ef;function Gh({id:e=Qa.id,version:t=Qa.version,nonce:n,googleMapsApiKey:r,googleMapsClientId:i,language:s,region:o,libraries:l,preventGoogleFontsLoading:a,channel:c,mapIds:d,authReferrerPolicy:f}){const g=u.useRef(!1),[x,w]=u.useState(!1),[S,k]=u.useState(void 0);u.useEffect(function(){return g.current=!0,()=>{g.current=!1}},[]),u.useEffect(function(){Rn&&a&&Wh()},[a]),u.useEffect(function(){x&&Ne(!!window.google,"useLoadScript was marked as loaded, but window.google is not present. Something went wrong.")},[x]);const h=Hh({version:t,googleMapsApiKey:r,googleMapsClientId:i,language:s,region:o,libraries:l,channel:c,mapIds:d,authReferrerPolicy:f});u.useEffect(function(){if(!Rn)return;function y(){g.current&&(w(!0),ef=h)}if(window.google&&window.google.maps&&ef===h){y();return}Uh({id:e,url:h,nonce:n}).then(y).catch(function(b){g.current&&k(b),console.warn(`
        There has been an Error with loading Google Maps API script, please check that you provided correct google API key (${r||"-"}) or Client ID (${i||"-"})
        Otherwise it is a Network issue.
      `),console.error(b)})},[e,h,n]);const p=u.useRef();return u.useEffect(function(){p.current&&l!==p.current&&console.warn("Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables"),p.current=l},[l]),{isLoaded:x,loadError:S,url:h}}const Ax=L(Vh,{});function Bx(e){var{loadingElement:t,onLoad:n,onError:r,onUnmount:i,children:s}=e,o=sc(e,["loadingElement","onLoad","onError","onUnmount","children"]);const{isLoaded:l,loadError:a}=Gh(o);return u.useEffect(function(){l&&typeof n=="function"&&n()},[l,n]),u.useEffect(function(){a&&typeof r=="function"&&r(a)},[a,r]),u.useEffect(function(){return()=>{i&&i()}},[i]),l?s:t||Ax}u.memo(Bx);var tf;(function(e){e[e.INITIALIZED=0]="INITIALIZED",e[e.LOADING=1]="LOADING",e[e.SUCCESS=2]="SUCCESS",e[e.FAILURE=3]="FAILURE"})(tf||(tf={}));const nf={},rf={options(e,t){e.setOptions(t)}};function Dx({options:e,onLoad:t,onUnmount:n}){const r=u.useContext(ae),[i,s]=u.useState(null);return u.useEffect(()=>{i!==null&&i.setMap(r)},[r]),u.useEffect(()=>{e&&i!==null&&i.setOptions(e)},[i,e]),u.useEffect(()=>{const o=new google.maps.TrafficLayer(Object.assign(Object.assign({},e||{}),{map:r}));return s(o),t&&t(o),()=>{i!==null&&(n&&n(i),i.setMap(null))}},[]),null}u.memo(Dx);class Fx extends u.PureComponent{constructor(){super(...arguments),this.state={trafficLayer:null},this.setTrafficLayerCallback=()=>{this.state.trafficLayer!==null&&this.props.onLoad&&this.props.onLoad(this.state.trafficLayer)},this.registeredEvents=[]}componentDidMount(){const t=new google.maps.TrafficLayer(Object.assign(Object.assign({},this.props.options||{}),{map:this.context}));this.registeredEvents=de({updaterMap:rf,eventMap:nf,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{trafficLayer:t}},this.setTrafficLayerCallback)}componentDidUpdate(t){this.state.trafficLayer!==null&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:rf,eventMap:nf,prevProps:t,nextProps:this.props,instance:this.state.trafficLayer}))}componentWillUnmount(){this.state.trafficLayer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.trafficLayer),me(this.registeredEvents),this.state.trafficLayer.setMap(null))}render(){return null}}Fx.contextType=ae;function jx({onLoad:e,onUnmount:t}){const n=u.useContext(ae),[r,i]=u.useState(null);return u.useEffect(()=>{r!==null&&r.setMap(n)},[n]),u.useEffect(()=>{const s=new google.maps.BicyclingLayer;return i(s),s.setMap(n),e&&e(s),()=>{s!==null&&(t&&t(s),s.setMap(null))}},[]),null}u.memo(jx);class Ux extends u.PureComponent{constructor(){super(...arguments),this.state={bicyclingLayer:null},this.setBicyclingLayerCallback=()=>{this.state.bicyclingLayer!==null&&(this.state.bicyclingLayer.setMap(this.context),this.props.onLoad&&this.props.onLoad(this.state.bicyclingLayer))}}componentDidMount(){const t=new google.maps.BicyclingLayer;this.setState(()=>({bicyclingLayer:t}),this.setBicyclingLayerCallback)}componentWillUnmount(){this.state.bicyclingLayer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.bicyclingLayer),this.state.bicyclingLayer.setMap(null))}render(){return null}}Ux.contextType=ae;function Wx({onLoad:e,onUnmount:t}){const n=u.useContext(ae),[r,i]=u.useState(null);return u.useEffect(()=>{r!==null&&r.setMap(n)},[n]),u.useEffect(()=>{const s=new google.maps.TransitLayer;return i(s),s.setMap(n),e&&e(s),()=>{r!==null&&(t&&t(r),this.state.transitLayer.setMap(null))}},[]),null}u.memo(Wx);class Hx extends u.PureComponent{constructor(){super(...arguments),this.state={transitLayer:null},this.setTransitLayerCallback=()=>{this.state.transitLayer!==null&&(this.state.transitLayer.setMap(this.context),this.props.onLoad&&this.props.onLoad(this.state.transitLayer))}}componentDidMount(){const t=new google.maps.TransitLayer;this.setState(function(){return{transitLayer:t}},this.setTransitLayerCallback)}componentWillUnmount(){this.state.transitLayer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.transitLayer),this.state.transitLayer.setMap(null))}render(){return null}}Hx.contextType=ae;const sf={onCircleComplete:"circlecomplete",onMarkerComplete:"markercomplete",onOverlayComplete:"overlaycomplete",onPolygonComplete:"polygoncomplete",onPolylineComplete:"polylinecomplete",onRectangleComplete:"rectanglecomplete"},of={drawingMode(e,t){e.setDrawingMode(t)},options(e,t){e.setOptions(t)}};function Vx({options:e,drawingMode:t,onCircleComplete:n,onMarkerComplete:r,onOverlayComplete:i,onPolygonComplete:s,onPolylineComplete:o,onRectangleComplete:l,onLoad:a,onUnmount:c}){const d=u.useContext(ae),[f,g]=u.useState(null),[x,w]=u.useState(null),[S,k]=u.useState(null),[h,p]=u.useState(null),[v,y]=u.useState(null),[P,b]=u.useState(null),[M,C]=u.useState(null);return u.useEffect(()=>{f!==null&&f.setMap(d)},[d]),u.useEffect(()=>{e&&f!==null&&f.setOptions(e)},[f,e]),u.useEffect(()=>{t&&f!==null&&f.setDrawingMode(t)},[f,t]),u.useEffect(()=>{f&&n&&(x!==null&&google.maps.event.removeListener(x),w(google.maps.event.addListener(f,"circlecomplete",n)))},[f,n]),u.useEffect(()=>{f&&r&&(S!==null&&google.maps.event.removeListener(S),k(google.maps.event.addListener(f,"markercomplete",r)))},[f,r]),u.useEffect(()=>{f&&i&&(h!==null&&google.maps.event.removeListener(h),p(google.maps.event.addListener(f,"overlaycomplete",i)))},[f,i]),u.useEffect(()=>{f&&s&&(v!==null&&google.maps.event.removeListener(v),y(google.maps.event.addListener(f,"polygoncomplete",s)))},[f,s]),u.useEffect(()=>{f&&o&&(P!==null&&google.maps.event.removeListener(P),b(google.maps.event.addListener(f,"polylinecomplete",o)))},[f,o]),u.useEffect(()=>{f&&l&&(M!==null&&google.maps.event.removeListener(M),C(google.maps.event.addListener(f,"rectanglecomplete",l)))},[f,l]),u.useEffect(()=>{Ne(!!google.maps.drawing,"Did you include prop libraries={['drawing']} in the URL? %s",google.maps.drawing);const m=new google.maps.drawing.DrawingManager(Object.assign(Object.assign({},e||{}),{map:d}));return t&&m.setDrawingMode(t),n&&w(google.maps.event.addListener(m,"circlecomplete",n)),r&&k(google.maps.event.addListener(m,"markercomplete",r)),i&&p(google.maps.event.addListener(m,"overlaycomplete",i)),s&&y(google.maps.event.addListener(m,"polygoncomplete",s)),o&&b(google.maps.event.addListener(m,"polylinecomplete",o)),l&&C(google.maps.event.addListener(m,"rectanglecomplete",l)),g(m),a&&a(m),()=>{f!==null&&(x&&google.maps.event.removeListener(x),S&&google.maps.event.removeListener(S),h&&google.maps.event.removeListener(h),v&&google.maps.event.removeListener(v),P&&google.maps.event.removeListener(P),M&&google.maps.event.removeListener(M),c&&c(f),f.setMap(null))}},[]),null}u.memo(Vx);class Gx extends u.PureComponent{constructor(t){super(t),this.registeredEvents=[],this.state={drawingManager:null},this.setDrawingManagerCallback=()=>{this.state.drawingManager!==null&&this.props.onLoad&&this.props.onLoad(this.state.drawingManager)},Ne(!!google.maps.drawing,"Did you include prop libraries={['drawing']} in the URL? %s",google.maps.drawing)}componentDidMount(){const t=new google.maps.drawing.DrawingManager(Object.assign(Object.assign({},this.props.options||{}),{map:this.context}));this.registeredEvents=de({updaterMap:of,eventMap:sf,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{drawingManager:t}},this.setDrawingManagerCallback)}componentDidUpdate(t){this.state.drawingManager!==null&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:of,eventMap:sf,prevProps:t,nextProps:this.props,instance:this.state.drawingManager}))}componentWillUnmount(){this.state.drawingManager!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.drawingManager),me(this.registeredEvents),this.state.drawingManager.setMap(null))}render(){return null}}Gx.contextType=ae;const lf={onAnimationChanged:"animation_changed",onClick:"click",onClickableChanged:"clickable_changed",onCursorChanged:"cursor_changed",onDblClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDraggableChanged:"draggable_changed",onDragStart:"dragstart",onFlatChanged:"flat_changed",onIconChanged:"icon_changed",onMouseDown:"mousedown",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onPositionChanged:"position_changed",onRightClick:"rightclick",onShapeChanged:"shape_changed",onTitleChanged:"title_changed",onVisibleChanged:"visible_changed",onZindexChanged:"zindex_changed"},af={animation(e,t){e.setAnimation(t)},clickable(e,t){e.setClickable(t)},cursor(e,t){e.setCursor(t)},draggable(e,t){e.setDraggable(t)},icon(e,t){e.setIcon(t)},label(e,t){e.setLabel(t)},map(e,t){e.setMap(t)},opacity(e,t){e.setOpacity(t)},options(e,t){e.setOptions(t)},position(e,t){e.setPosition(t)},shape(e,t){e.setShape(t)},title(e,t){e.setTitle(t)},visible(e,t){e.setVisible(t)},zIndex(e,t){e.setZIndex(t)}},uo={};function Qx({position:e,options:t,clusterer:n,noClustererRedraw:r,children:i,draggable:s,visible:o,animation:l,clickable:a,cursor:c,icon:d,label:f,opacity:g,shape:x,title:w,zIndex:S,onClick:k,onDblClick:h,onDrag:p,onDragEnd:v,onDragStart:y,onMouseOut:P,onMouseOver:b,onMouseUp:M,onMouseDown:C,onRightClick:m,onClickableChanged:I,onCursorChanged:B,onAnimationChanged:Q,onDraggableChanged:G,onFlatChanged:W,onIconChanged:J,onPositionChanged:ne,onShapeChanged:te,onTitleChanged:O,onVisibleChanged:F,onZindexChanged:U,onLoad:q,onUnmount:$}){const _=u.useContext(ae),[z,H]=u.useState(null),[T,A]=u.useState(null),[E,V]=u.useState(null),[j,ee]=u.useState(null),[Y,oe]=u.useState(null),[X,ie]=u.useState(null),[pe,ce]=u.useState(null),[re,qe]=u.useState(null),[Te,Pn]=u.useState(null),[_t,et]=u.useState(null),[se,Ee]=u.useState(null),[tn,Gn]=u.useState(null),[ot,fc]=u.useState(null),[Ai,pc]=u.useState(null),[Bi,mc]=u.useState(null),[Di,hc]=u.useState(null),[Fi,gc]=u.useState(null),[ji,vc]=u.useState(null),[yc,xc]=u.useState(null),[Ui,wc]=u.useState(null),[Wi,Sc]=u.useState(null),[Hi,Lc]=u.useState(null);u.useEffect(()=>{z!==null&&z.setMap(_)},[_]),u.useEffect(()=>{typeof t<"u"&&z!==null&&z.setOptions(t)},[z,t]),u.useEffect(()=>{typeof s<"u"&&z!==null&&z.setDraggable(s)},[z,s]),u.useEffect(()=>{e&&z!==null&&z.setPosition(e)},[z,e]),u.useEffect(()=>{typeof o<"u"&&z!==null&&z.setVisible(o)},[z,o]),u.useEffect(()=>{l&&z!==null&&z.setAnimation(l)},[z,l]),u.useEffect(()=>{z&&h&&(T!==null&&google.maps.event.removeListener(T),A(google.maps.event.addListener(z,"dblclick",h)))},[h]),u.useEffect(()=>{z&&v&&(E!==null&&google.maps.event.removeListener(E),V(google.maps.event.addListener(z,"dragend",v)))},[v]),u.useEffect(()=>{z&&y&&(j!==null&&google.maps.event.removeListener(j),ee(google.maps.event.addListener(z,"dragstart",y)))},[y]),u.useEffect(()=>{z&&C&&(Y!==null&&google.maps.event.removeListener(Y),oe(google.maps.event.addListener(z,"mousedown",C)))},[C]),u.useEffect(()=>{z&&P&&(X!==null&&google.maps.event.removeListener(X),ie(google.maps.event.addListener(z,"mouseout",P)))},[P]),u.useEffect(()=>{z&&b&&(pe!==null&&google.maps.event.removeListener(pe),ce(google.maps.event.addListener(z,"mouseover",b)))},[b]),u.useEffect(()=>{z&&M&&(re!==null&&google.maps.event.removeListener(re),qe(google.maps.event.addListener(z,"mouseup",M)))},[M]),u.useEffect(()=>{z&&m&&(Te!==null&&google.maps.event.removeListener(Te),Pn(google.maps.event.addListener(z,"rightclick",m)))},[m]),u.useEffect(()=>{z&&k&&(_t!==null&&google.maps.event.removeListener(_t),et(google.maps.event.addListener(z,"click",k)))},[k]),u.useEffect(()=>{z&&p&&(se!==null&&google.maps.event.removeListener(se),Ee(google.maps.event.addListener(z,"drag",p)))},[p]),u.useEffect(()=>{z&&I&&(tn!==null&&google.maps.event.removeListener(tn),Gn(google.maps.event.addListener(z,"clickable_changed",I)))},[I]),u.useEffect(()=>{z&&B&&(ot!==null&&google.maps.event.removeListener(ot),fc(google.maps.event.addListener(z,"cursor_changed",B)))},[B]),u.useEffect(()=>{z&&Q&&(Ai!==null&&google.maps.event.removeListener(Ai),pc(google.maps.event.addListener(z,"animation_changed",Q)))},[Q]),u.useEffect(()=>{z&&G&&(Bi!==null&&google.maps.event.removeListener(Bi),mc(google.maps.event.addListener(z,"draggable_changed",G)))},[G]),u.useEffect(()=>{z&&W&&(Di!==null&&google.maps.event.removeListener(Di),hc(google.maps.event.addListener(z,"flat_changed",W)))},[W]),u.useEffect(()=>{z&&J&&(Fi!==null&&google.maps.event.removeListener(Fi),gc(google.maps.event.addListener(z,"icon_changed",J)))},[J]),u.useEffect(()=>{z&&ne&&(ji!==null&&google.maps.event.removeListener(ji),vc(google.maps.event.addListener(z,"position_changed",ne)))},[ne]),u.useEffect(()=>{z&&te&&(yc!==null&&google.maps.event.removeListener(yc),xc(google.maps.event.addListener(z,"shape_changed",te)))},[te]),u.useEffect(()=>{z&&O&&(Ui!==null&&google.maps.event.removeListener(Ui),wc(google.maps.event.addListener(z,"title_changed",O)))},[O]),u.useEffect(()=>{z&&F&&(Wi!==null&&google.maps.event.removeListener(Wi),Sc(google.maps.event.addListener(z,"visible_changed",F)))},[F]),u.useEffect(()=>{z&&U&&(Hi!==null&&google.maps.event.removeListener(Hi),Lc(google.maps.event.addListener(z,"zindex_changed",U)))},[U]),u.useEffect(()=>{const Ir=Object.assign(Object.assign(Object.assign({},t||uo),n?uo:{map:_}),{position:e}),le=new google.maps.Marker(Ir);return n?n.addMarker(le,!!r):le.setMap(_),e&&le.setPosition(e),typeof o<"u"&&le.setVisible(o),typeof s<"u"&&le.setDraggable(s),typeof a<"u"&&le.setClickable(a),typeof c=="string"&&le.setCursor(c),d&&le.setIcon(d),typeof f<"u"&&le.setLabel(f),typeof g<"u"&&le.setOpacity(g),x&&le.setShape(x),typeof w=="string"&&le.setTitle(w),typeof S=="number"&&le.setZIndex(S),h&&A(google.maps.event.addListener(le,"dblclick",h)),v&&V(google.maps.event.addListener(le,"dragend",v)),y&&ee(google.maps.event.addListener(le,"dragstart",y)),C&&oe(google.maps.event.addListener(le,"mousedown",C)),P&&ie(google.maps.event.addListener(le,"mouseout",P)),b&&ce(google.maps.event.addListener(le,"mouseover",b)),M&&qe(google.maps.event.addListener(le,"mouseup",M)),m&&Pn(google.maps.event.addListener(le,"rightclick",m)),k&&et(google.maps.event.addListener(le,"click",k)),p&&Ee(google.maps.event.addListener(le,"drag",p)),I&&Gn(google.maps.event.addListener(le,"clickable_changed",I)),B&&fc(google.maps.event.addListener(le,"cursor_changed",B)),Q&&pc(google.maps.event.addListener(le,"animation_changed",Q)),G&&mc(google.maps.event.addListener(le,"draggable_changed",G)),W&&hc(google.maps.event.addListener(le,"flat_changed",W)),J&&gc(google.maps.event.addListener(le,"icon_changed",J)),ne&&vc(google.maps.event.addListener(le,"position_changed",ne)),te&&xc(google.maps.event.addListener(le,"shape_changed",te)),O&&wc(google.maps.event.addListener(le,"title_changed",O)),F&&Sc(google.maps.event.addListener(le,"visible_changed",F)),U&&Lc(google.maps.event.addListener(le,"zindex_changed",U)),H(le),q&&q(le),()=>{T!==null&&google.maps.event.removeListener(T),E!==null&&google.maps.event.removeListener(E),j!==null&&google.maps.event.removeListener(j),Y!==null&&google.maps.event.removeListener(Y),X!==null&&google.maps.event.removeListener(X),pe!==null&&google.maps.event.removeListener(pe),re!==null&&google.maps.event.removeListener(re),Te!==null&&google.maps.event.removeListener(Te),_t!==null&&google.maps.event.removeListener(_t),tn!==null&&google.maps.event.removeListener(tn),ot!==null&&google.maps.event.removeListener(ot),Ai!==null&&google.maps.event.removeListener(Ai),Bi!==null&&google.maps.event.removeListener(Bi),Di!==null&&google.maps.event.removeListener(Di),Fi!==null&&google.maps.event.removeListener(Fi),ji!==null&&google.maps.event.removeListener(ji),Ui!==null&&google.maps.event.removeListener(Ui),Wi!==null&&google.maps.event.removeListener(Wi),Hi!==null&&google.maps.event.removeListener(Hi),$&&$(le),n?n.removeMarker(le,!!r):le&&le.setMap(null)}},[]);const wg=u.useMemo(()=>i?u.Children.map(i,Ir=>{if(!u.isValidElement(Ir))return Ir;const le=Ir;return u.cloneElement(le,{anchor:z})}):null,[i,z]);return L(mo,{children:wg})||null}u.memo(Qx);class Zx extends u.PureComponent{constructor(){super(...arguments),this.registeredEvents=[]}componentDidMount(){const t=Object.assign(Object.assign(Object.assign({},this.props.options||uo),this.props.clusterer?uo:{map:this.context}),{position:this.props.position});this.marker=new google.maps.Marker(t),this.props.clusterer?this.props.clusterer.addMarker(this.marker,!!this.props.noClustererRedraw):this.marker.setMap(this.context),this.registeredEvents=de({updaterMap:af,eventMap:lf,prevProps:{},nextProps:this.props,instance:this.marker}),this.props.onLoad&&this.props.onLoad(this.marker)}componentDidUpdate(t){this.marker&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:af,eventMap:lf,prevProps:t,nextProps:this.props,instance:this.marker}))}componentWillUnmount(){this.marker&&(this.props.onUnmount&&this.props.onUnmount(this.marker),me(this.registeredEvents),this.props.clusterer?this.props.clusterer.removeMarker(this.marker,!!this.props.noClustererRedraw):this.marker&&this.marker.setMap(null))}render(){let t=null;return this.props.children&&(t=u.Children.map(this.props.children,n=>{if(!u.isValidElement(n))return n;const r=n;return u.cloneElement(r,{anchor:this.marker})})),t||null}}Zx.contextType=ae;var Yx=function(){function e(t,n){t.getClusterer().extend(e,google.maps.OverlayView),this.cluster=t,this.clusterClassName=this.cluster.getClusterer().getClusterClass(),this.className=this.clusterClassName,this.styles=n,this.center=void 0,this.div=null,this.sums=null,this.visible=!1,this.boundsChangedListener=null,this.url="",this.height=0,this.width=0,this.anchorText=[0,0],this.anchorIcon=[0,0],this.textColor="black",this.textSize=11,this.textDecoration="none",this.fontWeight="bold",this.fontStyle="normal",this.fontFamily="Arial,sans-serif",this.backgroundPosition="0 0",this.cMouseDownInCluster=null,this.cDraggingMapByCluster=null,this.timeOut=null,this.setMap(t.getMap()),this.onBoundsChanged=this.onBoundsChanged.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onClick=this.onClick.bind(this),this.onMouseOver=this.onMouseOver.bind(this),this.onMouseOut=this.onMouseOut.bind(this),this.onAdd=this.onAdd.bind(this),this.onRemove=this.onRemove.bind(this),this.draw=this.draw.bind(this),this.hide=this.hide.bind(this),this.show=this.show.bind(this),this.useStyle=this.useStyle.bind(this),this.setCenter=this.setCenter.bind(this),this.getPosFromLatLng=this.getPosFromLatLng.bind(this)}return e.prototype.onBoundsChanged=function(){this.cDraggingMapByCluster=this.cMouseDownInCluster},e.prototype.onMouseDown=function(){this.cMouseDownInCluster=!0,this.cDraggingMapByCluster=!1},e.prototype.onClick=function(t){if(this.cMouseDownInCluster=!1,!this.cDraggingMapByCluster){var n=this.cluster.getClusterer();if(google.maps.event.trigger(n,"click",this.cluster),google.maps.event.trigger(n,"clusterclick",this.cluster),n.getZoomOnClick()){var r=n.getMaxZoom(),i=this.cluster.getBounds(),s=n.getMap();s!==null&&"fitBounds"in s&&s.fitBounds(i),this.timeOut=window.setTimeout(function(){var o=n.getMap();if(o!==null){"fitBounds"in o&&o.fitBounds(i);var l=o.getZoom()||0;r!==null&&l>r&&o.setZoom(r+1)}},100)}t.cancelBubble=!0,t.stopPropagation&&t.stopPropagation()}},e.prototype.onMouseOver=function(){google.maps.event.trigger(this.cluster.getClusterer(),"mouseover",this.cluster)},e.prototype.onMouseOut=function(){google.maps.event.trigger(this.cluster.getClusterer(),"mouseout",this.cluster)},e.prototype.onAdd=function(){var t;this.div=document.createElement("div"),this.div.className=this.className,this.visible&&this.show(),(t=this.getPanes())===null||t===void 0||t.overlayMouseTarget.appendChild(this.div);var n=this.getMap();n!==null&&(this.boundsChangedListener=google.maps.event.addListener(n,"bounds_changed",this.onBoundsChanged),this.div.addEventListener("mousedown",this.onMouseDown),this.div.addEventListener("click",this.onClick),this.div.addEventListener("mouseover",this.onMouseOver),this.div.addEventListener("mouseout",this.onMouseOut))},e.prototype.onRemove=function(){this.div&&this.div.parentNode&&(this.hide(),this.boundsChangedListener!==null&&google.maps.event.removeListener(this.boundsChangedListener),this.div.removeEventListener("mousedown",this.onMouseDown),this.div.removeEventListener("click",this.onClick),this.div.removeEventListener("mouseover",this.onMouseOver),this.div.removeEventListener("mouseout",this.onMouseOut),this.div.parentNode.removeChild(this.div),this.timeOut!==null&&(window.clearTimeout(this.timeOut),this.timeOut=null),this.div=null)},e.prototype.draw=function(){if(this.visible&&this.div!==null&&this.center){var t=this.getPosFromLatLng(this.center);this.div.style.top=t!==null?"".concat(t.y,"px"):"0",this.div.style.left=t!==null?"".concat(t.x,"px"):"0"}},e.prototype.hide=function(){this.div&&(this.div.style.display="none"),this.visible=!1},e.prototype.show=function(){var t,n,r,i;if(this.div&&this.center){var s=this.sums===null||typeof this.sums.title>"u"||this.sums.title===""?this.cluster.getClusterer().getTitle():this.sums.title,o=this.backgroundPosition.split(" "),l=parseInt(o[0].replace(/^\s+|\s+$/g,""),10),a=parseInt(o[1].replace(/^\s+|\s+$/g,""),10),c=this.getPosFromLatLng(this.center);this.div.className=this.className,this.div.setAttribute("style","cursor: pointer; position: absolute; top: ".concat(c!==null?"".concat(c.y,"px"):"0","; left: ").concat(c!==null?"".concat(c.x,"px"):"0","; width: ").concat(this.width,"px; height: ").concat(this.height,"px; "));var d=document.createElement("img");d.alt=s,d.src=this.url,d.width=this.width,d.height=this.height,d.setAttribute("style","position: absolute; top: ".concat(a,"px; left: ").concat(l,"px")),this.cluster.getClusterer().enableRetinaIcons||(d.style.clip="rect(-".concat(a,"px, -").concat(l+this.width,"px, -").concat(a+this.height,", -").concat(l,")"));var f=document.createElement("div");f.setAttribute("style","position: absolute; top: ".concat(this.anchorText[0],"px; left: ").concat(this.anchorText[1],"px; color: ").concat(this.textColor,"; font-size: ").concat(this.textSize,"px; font-family: ").concat(this.fontFamily,"; font-weight: ").concat(this.fontWeight,"; fontStyle: ").concat(this.fontStyle,"; text-decoration: ").concat(this.textDecoration,"; text-align: center; width: ").concat(this.width,"px; line-height: ").concat(this.height,"px")),!((t=this.sums)===null||t===void 0)&&t.text&&(f.innerText="".concat((n=this.sums)===null||n===void 0?void 0:n.text)),!((r=this.sums)===null||r===void 0)&&r.html&&(f.innerHTML="".concat((i=this.sums)===null||i===void 0?void 0:i.html)),this.div.innerHTML="",this.div.appendChild(d),this.div.appendChild(f),this.div.title=s,this.div.style.display=""}this.visible=!0},e.prototype.useStyle=function(t){this.sums=t;var n=this.cluster.getClusterer().getStyles(),r=n[Math.min(n.length-1,Math.max(0,t.index-1))];this.url=r.url,this.height=r.height,this.width=r.width,r.className&&(this.className="".concat(this.clusterClassName," ").concat(r.className)),this.anchorText=r.anchorText||[0,0],this.anchorIcon=r.anchorIcon||[this.height/2,this.width/2],this.textColor=r.textColor||"black",this.textSize=r.textSize||11,this.textDecoration=r.textDecoration||"none",this.fontWeight=r.fontWeight||"bold",this.fontStyle=r.fontStyle||"normal",this.fontFamily=r.fontFamily||"Arial,sans-serif",this.backgroundPosition=r.backgroundPosition||"0 0"},e.prototype.setCenter=function(t){this.center=t},e.prototype.getPosFromLatLng=function(t){var n=this.getProjection().fromLatLngToDivPixel(t);return n!==null&&(n.x-=this.anchorIcon[1],n.y-=this.anchorIcon[0]),n},e}(),Kx=function(){function e(t){this.markerClusterer=t,this.map=this.markerClusterer.getMap(),this.gridSize=this.markerClusterer.getGridSize(),this.minClusterSize=this.markerClusterer.getMinimumClusterSize(),this.averageCenter=this.markerClusterer.getAverageCenter(),this.markers=[],this.center=void 0,this.bounds=null,this.clusterIcon=new Yx(this,this.markerClusterer.getStyles()),this.getSize=this.getSize.bind(this),this.getMarkers=this.getMarkers.bind(this),this.getCenter=this.getCenter.bind(this),this.getMap=this.getMap.bind(this),this.getClusterer=this.getClusterer.bind(this),this.getBounds=this.getBounds.bind(this),this.remove=this.remove.bind(this),this.addMarker=this.addMarker.bind(this),this.isMarkerInClusterBounds=this.isMarkerInClusterBounds.bind(this),this.calculateBounds=this.calculateBounds.bind(this),this.updateIcon=this.updateIcon.bind(this),this.isMarkerAlreadyAdded=this.isMarkerAlreadyAdded.bind(this)}return e.prototype.getSize=function(){return this.markers.length},e.prototype.getMarkers=function(){return this.markers},e.prototype.getCenter=function(){return this.center},e.prototype.getMap=function(){return this.map},e.prototype.getClusterer=function(){return this.markerClusterer},e.prototype.getBounds=function(){for(var t=new google.maps.LatLngBounds(this.center,this.center),n=this.getMarkers(),r=0;r<n.length;r++){var i=n[r].getPosition();i&&t.extend(i)}return t},e.prototype.remove=function(){this.clusterIcon.setMap(null),this.markers=[],delete this.markers},e.prototype.addMarker=function(t){var n;if(this.isMarkerAlreadyAdded(t))return!1;if(this.center){if(this.averageCenter){var r=t.getPosition();if(r){var i=this.markers.length+1;this.center=new google.maps.LatLng((this.center.lat()*(i-1)+r.lat())/i,(this.center.lng()*(i-1)+r.lng())/i),this.calculateBounds()}}}else{var r=t.getPosition();r&&(this.center=r,this.calculateBounds())}t.isAdded=!0,this.markers.push(t);var s=this.markers.length,o=this.markerClusterer.getMaxZoom(),l=(n=this.map)===null||n===void 0?void 0:n.getZoom();if(o!==null&&typeof l<"u"&&l>o)t.getMap()!==this.map&&t.setMap(this.map);else if(s<this.minClusterSize)t.getMap()!==this.map&&t.setMap(this.map);else if(s===this.minClusterSize)for(var a=0;a<s;a++)this.markers[a].setMap(null);else t.setMap(null);return!0},e.prototype.isMarkerInClusterBounds=function(t){if(this.bounds!==null){var n=t.getPosition();if(n)return this.bounds.contains(n)}return!1},e.prototype.calculateBounds=function(){this.bounds=this.markerClusterer.getExtendedBounds(new google.maps.LatLngBounds(this.center,this.center))},e.prototype.updateIcon=function(){var t,n=this.markers.length,r=this.markerClusterer.getMaxZoom(),i=(t=this.map)===null||t===void 0?void 0:t.getZoom();if(r!==null&&typeof i<"u"&&i>r){this.clusterIcon.hide();return}if(n<this.minClusterSize){this.clusterIcon.hide();return}this.center&&this.clusterIcon.setCenter(this.center),this.clusterIcon.useStyle(this.markerClusterer.getCalculator()(this.markers,this.markerClusterer.getStyles().length)),this.clusterIcon.show()},e.prototype.isMarkerAlreadyAdded=function(t){if(this.markers.includes)return this.markers.includes(t);for(var n=0;n<this.markers.length;n++)if(t===this.markers[n])return!0;return!1},e}();function Jx(e,t){var n=e.length,r=n.toString().length,i=Math.min(r,t);return{text:n.toString(),index:i,title:""}}var Xx=2e3,qx=500,ew="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",tw="png",nw=[53,56,66,78,90],rw="cluster",Qh=function(){function e(t,n,r){n===void 0&&(n=[]),r===void 0&&(r={}),this.getMinimumClusterSize=this.getMinimumClusterSize.bind(this),this.setMinimumClusterSize=this.setMinimumClusterSize.bind(this),this.getEnableRetinaIcons=this.getEnableRetinaIcons.bind(this),this.setEnableRetinaIcons=this.setEnableRetinaIcons.bind(this),this.addToClosestCluster=this.addToClosestCluster.bind(this),this.getImageExtension=this.getImageExtension.bind(this),this.setImageExtension=this.setImageExtension.bind(this),this.getExtendedBounds=this.getExtendedBounds.bind(this),this.getAverageCenter=this.getAverageCenter.bind(this),this.setAverageCenter=this.setAverageCenter.bind(this),this.getTotalClusters=this.getTotalClusters.bind(this),this.fitMapToMarkers=this.fitMapToMarkers.bind(this),this.getIgnoreHidden=this.getIgnoreHidden.bind(this),this.setIgnoreHidden=this.setIgnoreHidden.bind(this),this.getClusterClass=this.getClusterClass.bind(this),this.setClusterClass=this.setClusterClass.bind(this),this.getTotalMarkers=this.getTotalMarkers.bind(this),this.getZoomOnClick=this.getZoomOnClick.bind(this),this.setZoomOnClick=this.setZoomOnClick.bind(this),this.getBatchSizeIE=this.getBatchSizeIE.bind(this),this.setBatchSizeIE=this.setBatchSizeIE.bind(this),this.createClusters=this.createClusters.bind(this),this.onZoomChanged=this.onZoomChanged.bind(this),this.getImageSizes=this.getImageSizes.bind(this),this.setImageSizes=this.setImageSizes.bind(this),this.getCalculator=this.getCalculator.bind(this),this.setCalculator=this.setCalculator.bind(this),this.removeMarkers=this.removeMarkers.bind(this),this.resetViewport=this.resetViewport.bind(this),this.getImagePath=this.getImagePath.bind(this),this.setImagePath=this.setImagePath.bind(this),this.pushMarkerTo=this.pushMarkerTo.bind(this),this.removeMarker=this.removeMarker.bind(this),this.clearMarkers=this.clearMarkers.bind(this),this.setupStyles=this.setupStyles.bind(this),this.getGridSize=this.getGridSize.bind(this),this.setGridSize=this.setGridSize.bind(this),this.getClusters=this.getClusters.bind(this),this.getMaxZoom=this.getMaxZoom.bind(this),this.setMaxZoom=this.setMaxZoom.bind(this),this.getMarkers=this.getMarkers.bind(this),this.addMarkers=this.addMarkers.bind(this),this.getStyles=this.getStyles.bind(this),this.setStyles=this.setStyles.bind(this),this.addMarker=this.addMarker.bind(this),this.onRemove=this.onRemove.bind(this),this.getTitle=this.getTitle.bind(this),this.setTitle=this.setTitle.bind(this),this.repaint=this.repaint.bind(this),this.onIdle=this.onIdle.bind(this),this.redraw=this.redraw.bind(this),this.extend=this.extend.bind(this),this.onAdd=this.onAdd.bind(this),this.draw=this.draw.bind(this),this.extend(e,google.maps.OverlayView),this.markers=[],this.clusters=[],this.listeners=[],this.activeMap=null,this.ready=!1,this.gridSize=r.gridSize||60,this.minClusterSize=r.minimumClusterSize||2,this.maxZoom=r.maxZoom||null,this.styles=r.styles||[],this.title=r.title||"",this.zoomOnClick=!0,r.zoomOnClick!==void 0&&(this.zoomOnClick=r.zoomOnClick),this.averageCenter=!1,r.averageCenter!==void 0&&(this.averageCenter=r.averageCenter),this.ignoreHidden=!1,r.ignoreHidden!==void 0&&(this.ignoreHidden=r.ignoreHidden),this.enableRetinaIcons=!1,r.enableRetinaIcons!==void 0&&(this.enableRetinaIcons=r.enableRetinaIcons),this.imagePath=r.imagePath||ew,this.imageExtension=r.imageExtension||tw,this.imageSizes=r.imageSizes||nw,this.calculator=r.calculator||Jx,this.batchSize=r.batchSize||Xx,this.batchSizeIE=r.batchSizeIE||qx,this.clusterClass=r.clusterClass||rw,navigator.userAgent.toLowerCase().indexOf("msie")!==-1&&(this.batchSize=this.batchSizeIE),this.timerRefStatic=null,this.setupStyles(),this.addMarkers(n,!0),this.setMap(t)}return e.prototype.onZoomChanged=function(){var t,n;this.resetViewport(!1),(((t=this.getMap())===null||t===void 0?void 0:t.getZoom())===(this.get("minZoom")||0)||((n=this.getMap())===null||n===void 0?void 0:n.getZoom())===this.get("maxZoom"))&&google.maps.event.trigger(this,"idle")},e.prototype.onIdle=function(){this.redraw()},e.prototype.onAdd=function(){var t=this.getMap();this.activeMap=t,this.ready=!0,this.repaint(),t!==null&&(this.listeners=[google.maps.event.addListener(t,"zoom_changed",this.onZoomChanged),google.maps.event.addListener(t,"idle",this.onIdle)])},e.prototype.onRemove=function(){for(var t=0;t<this.markers.length;t++)this.markers[t].getMap()!==this.activeMap&&this.markers[t].setMap(this.activeMap);for(var t=0;t<this.clusters.length;t++)this.clusters[t].remove();this.clusters=[];for(var t=0;t<this.listeners.length;t++)google.maps.event.removeListener(this.listeners[t]);this.listeners=[],this.activeMap=null,this.ready=!1},e.prototype.draw=function(){},e.prototype.setupStyles=function(){if(!(this.styles.length>0))for(var t=0;t<this.imageSizes.length;t++)this.styles.push({url:"".concat(this.imagePath+(t+1),".").concat(this.imageExtension),height:this.imageSizes[t],width:this.imageSizes[t]})},e.prototype.fitMapToMarkers=function(){for(var t=this.getMarkers(),n=new google.maps.LatLngBounds,r=0;r<t.length;r++){var i=t[r].getPosition();i&&n.extend(i)}var s=this.getMap();s!==null&&"fitBounds"in s&&s.fitBounds(n)},e.prototype.getGridSize=function(){return this.gridSize},e.prototype.setGridSize=function(t){this.gridSize=t},e.prototype.getMinimumClusterSize=function(){return this.minClusterSize},e.prototype.setMinimumClusterSize=function(t){this.minClusterSize=t},e.prototype.getMaxZoom=function(){return this.maxZoom},e.prototype.setMaxZoom=function(t){this.maxZoom=t},e.prototype.getStyles=function(){return this.styles},e.prototype.setStyles=function(t){this.styles=t},e.prototype.getTitle=function(){return this.title},e.prototype.setTitle=function(t){this.title=t},e.prototype.getZoomOnClick=function(){return this.zoomOnClick},e.prototype.setZoomOnClick=function(t){this.zoomOnClick=t},e.prototype.getAverageCenter=function(){return this.averageCenter},e.prototype.setAverageCenter=function(t){this.averageCenter=t},e.prototype.getIgnoreHidden=function(){return this.ignoreHidden},e.prototype.setIgnoreHidden=function(t){this.ignoreHidden=t},e.prototype.getEnableRetinaIcons=function(){return this.enableRetinaIcons},e.prototype.setEnableRetinaIcons=function(t){this.enableRetinaIcons=t},e.prototype.getImageExtension=function(){return this.imageExtension},e.prototype.setImageExtension=function(t){this.imageExtension=t},e.prototype.getImagePath=function(){return this.imagePath},e.prototype.setImagePath=function(t){this.imagePath=t},e.prototype.getImageSizes=function(){return this.imageSizes},e.prototype.setImageSizes=function(t){this.imageSizes=t},e.prototype.getCalculator=function(){return this.calculator},e.prototype.setCalculator=function(t){this.calculator=t},e.prototype.getBatchSizeIE=function(){return this.batchSizeIE},e.prototype.setBatchSizeIE=function(t){this.batchSizeIE=t},e.prototype.getClusterClass=function(){return this.clusterClass},e.prototype.setClusterClass=function(t){this.clusterClass=t},e.prototype.getMarkers=function(){return this.markers},e.prototype.getTotalMarkers=function(){return this.markers.length},e.prototype.getClusters=function(){return this.clusters},e.prototype.getTotalClusters=function(){return this.clusters.length},e.prototype.addMarker=function(t,n){this.pushMarkerTo(t),n||this.redraw()},e.prototype.addMarkers=function(t,n){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&this.pushMarkerTo(t[r]);n||this.redraw()},e.prototype.pushMarkerTo=function(t){var n=this;t.getDraggable()&&google.maps.event.addListener(t,"dragend",function(){n.ready&&(t.isAdded=!1,n.repaint())}),t.isAdded=!1,this.markers.push(t)},e.prototype.removeMarker_=function(t){var n=-1;if(this.markers.indexOf)n=this.markers.indexOf(t);else for(var r=0;r<this.markers.length;r++)if(t===this.markers[r]){n=r;break}return n===-1?!1:(t.setMap(null),this.markers.splice(n,1),!0)},e.prototype.removeMarker=function(t,n){var r=this.removeMarker_(t);return!n&&r&&this.repaint(),r},e.prototype.removeMarkers=function(t,n){for(var r=!1,i=0;i<t.length;i++)r=r||this.removeMarker_(t[i]);return!n&&r&&this.repaint(),r},e.prototype.clearMarkers=function(){this.resetViewport(!0),this.markers=[]},e.prototype.repaint=function(){var t=this.clusters.slice();this.clusters=[],this.resetViewport(!1),this.redraw(),setTimeout(function(){for(var r=0;r<t.length;r++)t[r].remove()},0)},e.prototype.getExtendedBounds=function(t){var n=this.getProjection(),r=n.fromLatLngToDivPixel(new google.maps.LatLng(t.getNorthEast().lat(),t.getNorthEast().lng()));r!==null&&(r.x+=this.gridSize,r.y-=this.gridSize);var i=n.fromLatLngToDivPixel(new google.maps.LatLng(t.getSouthWest().lat(),t.getSouthWest().lng()));if(i!==null&&(i.x-=this.gridSize,i.y+=this.gridSize),r!==null){var s=n.fromDivPixelToLatLng(r);s!==null&&t.extend(s)}if(i!==null){var o=n.fromDivPixelToLatLng(i);o!==null&&t.extend(o)}return t},e.prototype.redraw=function(){this.createClusters(0)},e.prototype.resetViewport=function(t){for(var n=0;n<this.clusters.length;n++)this.clusters[n].remove();this.clusters=[];for(var n=0;n<this.markers.length;n++){var r=this.markers[n];r.isAdded=!1,t&&r.setMap(null)}},e.prototype.distanceBetweenPoints=function(t,n){var r=6371,i=(n.lat()-t.lat())*Math.PI/180,s=(n.lng()-t.lng())*Math.PI/180,o=Math.sin(i/2)*Math.sin(i/2)+Math.cos(t.lat()*Math.PI/180)*Math.cos(n.lat()*Math.PI/180)*Math.sin(s/2)*Math.sin(s/2);return r*(2*Math.atan2(Math.sqrt(o),Math.sqrt(1-o)))},e.prototype.isMarkerInBounds=function(t,n){var r=t.getPosition();return r?n.contains(r):!1},e.prototype.addToClosestCluster=function(t){for(var n,r=4e4,i=null,s=0;s<this.clusters.length;s++){n=this.clusters[s];var o=n.getCenter(),l=t.getPosition();if(o&&l){var a=this.distanceBetweenPoints(o,l);a<r&&(r=a,i=n)}}i&&i.isMarkerInClusterBounds(t)?i.addMarker(t):(n=new Kx(this),n.addMarker(t),this.clusters.push(n))},e.prototype.createClusters=function(t){var n=this;if(this.ready){t===0&&(google.maps.event.trigger(this,"clusteringbegin",this),this.timerRefStatic!==null&&(window.clearTimeout(this.timerRefStatic),delete this.timerRefStatic));for(var r=this.getMap(),i=r!==null&&("getBounds"in r)?r.getBounds():null,s=(r==null?void 0:r.getZoom())||0,o=s>3?new google.maps.LatLngBounds(i==null?void 0:i.getSouthWest(),i==null?void 0:i.getNorthEast()):new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472,-178.48388434375),new google.maps.LatLng(-85.08136444384544,178.00048865625)),l=this.getExtendedBounds(o),a=Math.min(t+this.batchSize,this.markers.length),c=t;c<a;c++){var d=this.markers[c];!d.isAdded&&this.isMarkerInBounds(d,l)&&(!this.ignoreHidden||this.ignoreHidden&&d.getVisible())&&this.addToClosestCluster(d)}if(a<this.markers.length)this.timerRefStatic=window.setTimeout(function(){n.createClusters(a)},0);else{this.timerRefStatic=null,google.maps.event.trigger(this,"clusteringend",this);for(var c=0;c<this.clusters.length;c++)this.clusters[c].updateIcon()}}},e.prototype.extend=function(t,n){return function(i){for(var s in i.prototype)this.prototype[s]=i.prototype[s];return this}.apply(t,[n])},e}();const mt={onClick:"click",onClusteringBegin:"clusteringbegin",onClusteringEnd:"clusteringend",onMouseOut:"mouseout",onMouseOver:"mouseover"},ve={averageCenter(e,t){e.setAverageCenter(t)},batchSizeIE(e,t){e.setBatchSizeIE(t)},calculator(e,t){e.setCalculator(t)},clusterClass(e,t){e.setClusterClass(t)},enableRetinaIcons(e,t){e.setEnableRetinaIcons(t)},gridSize(e,t){e.setGridSize(t)},ignoreHidden(e,t){e.setIgnoreHidden(t)},imageExtension(e,t){e.setImageExtension(t)},imagePath(e,t){e.setImagePath(t)},imageSizes(e,t){e.setImageSizes(t)},maxZoom(e,t){e.setMaxZoom(t)},minimumClusterSize(e,t){e.setMinimumClusterSize(t)},styles(e,t){e.setStyles(t)},title(e,t){e.setTitle(t)},zoomOnClick(e,t){e.setZoomOnClick(t)}},iw={};function sw(e){const{children:t,options:n,averageCenter:r,batchSizeIE:i,calculator:s,clusterClass:o,enableRetinaIcons:l,gridSize:a,ignoreHidden:c,imageExtension:d,imagePath:f,imageSizes:g,maxZoom:x,minimumClusterSize:w,styles:S,title:k,zoomOnClick:h,onClick:p,onClusteringBegin:v,onClusteringEnd:y,onMouseOver:P,onMouseOut:b,onLoad:M,onUnmount:C}=e,[m,I]=u.useState(null),B=u.useContext(ae),[Q,G]=u.useState(null),[W,J]=u.useState(null),[ne,te]=u.useState(null),[O,F]=u.useState(null),[U,q]=u.useState(null);return u.useEffect(()=>{m&&b&&(O!==null&&google.maps.event.removeListener(O),F(google.maps.event.addListener(m,mt.onMouseOut,b)))},[b]),u.useEffect(()=>{m&&P&&(U!==null&&google.maps.event.removeListener(U),q(google.maps.event.addListener(m,mt.onMouseOver,P)))},[P]),u.useEffect(()=>{m&&p&&(Q!==null&&google.maps.event.removeListener(Q),G(google.maps.event.addListener(m,mt.onClick,p)))},[p]),u.useEffect(()=>{m&&v&&(W!==null&&google.maps.event.removeListener(W),J(google.maps.event.addListener(m,mt.onClusteringBegin,v)))},[v]),u.useEffect(()=>{m&&y&&(ne!==null&&google.maps.event.removeListener(ne),J(google.maps.event.addListener(m,mt.onClusteringEnd,y)))},[y]),u.useEffect(()=>{typeof r<"u"&&m!==null&&ve.averageCenter(m,r)},[m,r]),u.useEffect(()=>{typeof i<"u"&&m!==null&&ve.batchSizeIE(m,i)},[m,i]),u.useEffect(()=>{typeof s<"u"&&m!==null&&ve.calculator(m,s)},[m,s]),u.useEffect(()=>{typeof o<"u"&&m!==null&&ve.clusterClass(m,o)},[m,o]),u.useEffect(()=>{typeof l<"u"&&m!==null&&ve.enableRetinaIcons(m,l)},[m,l]),u.useEffect(()=>{typeof a<"u"&&m!==null&&ve.gridSize(m,a)},[m,a]),u.useEffect(()=>{typeof c<"u"&&m!==null&&ve.ignoreHidden(m,c)},[m,c]),u.useEffect(()=>{typeof d<"u"&&m!==null&&ve.imageExtension(m,d)},[m,d]),u.useEffect(()=>{typeof f<"u"&&m!==null&&ve.imagePath(m,f)},[m,f]),u.useEffect(()=>{typeof g<"u"&&m!==null&&ve.imageSizes(m,g)},[m,g]),u.useEffect(()=>{typeof x<"u"&&m!==null&&ve.maxZoom(m,x)},[m,x]),u.useEffect(()=>{typeof w<"u"&&m!==null&&ve.minimumClusterSize(m,w)},[m,w]),u.useEffect(()=>{typeof S<"u"&&m!==null&&ve.styles(m,S)},[m,S]),u.useEffect(()=>{typeof k<"u"&&m!==null&&ve.title(m,k)},[m,k]),u.useEffect(()=>{typeof h<"u"&&m!==null&&ve.zoomOnClick(m,h)},[m,h]),u.useEffect(()=>{if(!B)return;const $=Object.assign({},n||iw),_=new Qh(B,[],$);return r&&ve.averageCenter(_,r),i&&ve.batchSizeIE(_,i),s&&ve.calculator(_,s),o&&ve.clusterClass(_,o),l&&ve.enableRetinaIcons(_,l),a&&ve.gridSize(_,a),c&&ve.ignoreHidden(_,c),d&&ve.imageExtension(_,d),f&&ve.imagePath(_,f),g&&ve.imageSizes(_,g),x&&ve.maxZoom(_,x),w&&ve.minimumClusterSize(_,w),S&&ve.styles(_,S),k&&ve.title(_,k),h&&ve.zoomOnClick(_,h),b&&F(google.maps.event.addListener(_,mt.onMouseOut,b)),P&&q(google.maps.event.addListener(_,mt.onMouseOver,P)),p&&G(google.maps.event.addListener(_,mt.onClick,p)),v&&J(google.maps.event.addListener(_,mt.onClusteringBegin,v)),y&&te(google.maps.event.addListener(_,mt.onClusteringEnd,y)),I(_),M&&M(_),()=>{O!==null&&google.maps.event.removeListener(O),U!==null&&google.maps.event.removeListener(U),Q!==null&&google.maps.event.removeListener(Q),W!==null&&google.maps.event.removeListener(W),ne!==null&&google.maps.event.removeListener(ne),C&&C(_)}},[]),m!==null&&t(m)||null}u.memo(sw);class ow extends u.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={markerClusterer:null},this.setClustererCallback=()=>{this.state.markerClusterer!==null&&this.props.onLoad&&this.props.onLoad(this.state.markerClusterer)}}componentDidMount(){if(this.context){const t=new Qh(this.context,[],this.props.options);this.registeredEvents=de({updaterMap:ve,eventMap:mt,prevProps:{},nextProps:this.props,instance:t}),this.setState(()=>({markerClusterer:t}),this.setClustererCallback)}}componentDidUpdate(t){this.state.markerClusterer&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:ve,eventMap:mt,prevProps:t,nextProps:this.props,instance:this.state.markerClusterer}))}componentWillUnmount(){this.state.markerClusterer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.markerClusterer),me(this.registeredEvents),this.state.markerClusterer.setMap(null))}render(){return this.state.markerClusterer!==null?this.props.children(this.state.markerClusterer):null}}ow.contextType=ae;function uf(e){e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation()}var Zh=function(){function e(t){t===void 0&&(t={}),this.getCloseClickHandler=this.getCloseClickHandler.bind(this),this.closeClickHandler=this.closeClickHandler.bind(this),this.createInfoBoxDiv=this.createInfoBoxDiv.bind(this),this.addClickHandler=this.addClickHandler.bind(this),this.getCloseBoxImg=this.getCloseBoxImg.bind(this),this.getBoxWidths=this.getBoxWidths.bind(this),this.setBoxStyle=this.setBoxStyle.bind(this),this.setPosition=this.setPosition.bind(this),this.getPosition=this.getPosition.bind(this),this.setOptions=this.setOptions.bind(this),this.setContent=this.setContent.bind(this),this.setVisible=this.setVisible.bind(this),this.getContent=this.getContent.bind(this),this.getVisible=this.getVisible.bind(this),this.setZIndex=this.setZIndex.bind(this),this.getZIndex=this.getZIndex.bind(this),this.onRemove=this.onRemove.bind(this),this.panBox=this.panBox.bind(this),this.extend=this.extend.bind(this),this.close=this.close.bind(this),this.draw=this.draw.bind(this),this.show=this.show.bind(this),this.hide=this.hide.bind(this),this.open=this.open.bind(this),this.extend(e,google.maps.OverlayView),this.content=t.content||"",this.disableAutoPan=t.disableAutoPan||!1,this.maxWidth=t.maxWidth||0,this.pixelOffset=t.pixelOffset||new google.maps.Size(0,0),this.position=t.position||new google.maps.LatLng(0,0),this.zIndex=t.zIndex||null,this.boxClass=t.boxClass||"infoBox",this.boxStyle=t.boxStyle||{},this.closeBoxMargin=t.closeBoxMargin||"2px",this.closeBoxURL=t.closeBoxURL||"http://www.google.com/intl/en_us/mapfiles/close.gif",t.closeBoxURL===""&&(this.closeBoxURL=""),this.infoBoxClearance=t.infoBoxClearance||new google.maps.Size(1,1),typeof t.visible>"u"&&(typeof t.isHidden>"u"?t.visible=!0:t.visible=!t.isHidden),this.isHidden=!t.visible,this.alignBottom=t.alignBottom||!1,this.pane=t.pane||"floatPane",this.enableEventPropagation=t.enableEventPropagation||!1,this.div=null,this.closeListener=null,this.moveListener=null,this.mapListener=null,this.contextListener=null,this.eventListeners=null,this.fixedWidthSet=null}return e.prototype.createInfoBoxDiv=function(){var t=this,n=function(l){l.returnValue=!1,l.preventDefault&&l.preventDefault(),t.enableEventPropagation||uf(l)};if(!this.div){this.div=document.createElement("div"),this.setBoxStyle(),typeof this.content=="string"?this.div.innerHTML=this.getCloseBoxImg()+this.content:(this.div.innerHTML=this.getCloseBoxImg(),this.div.appendChild(this.content));var r=this.getPanes();if(r!==null&&r[this.pane].appendChild(this.div),this.addClickHandler(),this.div.style.width)this.fixedWidthSet=!0;else if(this.maxWidth!==0&&this.div.offsetWidth>this.maxWidth)this.div.style.width=this.maxWidth+"px",this.fixedWidthSet=!0;else{var i=this.getBoxWidths();this.div.style.width=this.div.offsetWidth-i.left-i.right+"px",this.fixedWidthSet=!1}if(this.panBox(this.disableAutoPan),!this.enableEventPropagation){this.eventListeners=[];for(var s=["mousedown","mouseover","mouseout","mouseup","click","dblclick","touchstart","touchend","touchmove"],o=0;o<s.length;o++)this.eventListeners.push(google.maps.event.addListener(this.div,s[o],uf));this.eventListeners.push(google.maps.event.addListener(this.div,"mouseover",function(){t.div&&(t.div.style.cursor="default")}))}this.contextListener=google.maps.event.addListener(this.div,"contextmenu",n),google.maps.event.trigger(this,"domready")}},e.prototype.getCloseBoxImg=function(){var t="";return this.closeBoxURL!==""&&(t='<img alt=""',t+=' aria-hidden="true"',t+=" src='"+this.closeBoxURL+"'",t+=" align=right",t+=" style='",t+=" position: relative;",t+=" cursor: pointer;",t+=" margin: "+this.closeBoxMargin+";",t+="'>"),t},e.prototype.addClickHandler=function(){this.closeListener=this.div&&this.div.firstChild&&this.closeBoxURL!==""?google.maps.event.addListener(this.div.firstChild,"click",this.getCloseClickHandler()):null},e.prototype.closeClickHandler=function(t){t.cancelBubble=!0,t.stopPropagation&&t.stopPropagation(),google.maps.event.trigger(this,"closeclick"),this.close()},e.prototype.getCloseClickHandler=function(){return this.closeClickHandler},e.prototype.panBox=function(t){if(this.div&&!t){var n=this.getMap();if(n instanceof google.maps.Map){var r=0,i=0,s=n.getBounds();s&&!s.contains(this.position)&&n.setCenter(this.position);var o=n.getDiv(),l=o.offsetWidth,a=o.offsetHeight,c=this.pixelOffset.width,d=this.pixelOffset.height,f=this.div.offsetWidth,g=this.div.offsetHeight,x=this.infoBoxClearance.width,w=this.infoBoxClearance.height,S=this.getProjection(),k=S.fromLatLngToContainerPixel(this.position);k!==null&&(k.x<-c+x?r=k.x+c-x:k.x+f+c+x>l&&(r=k.x+f+c+x-l),this.alignBottom?k.y<-d+w+g?i=k.y+d-w-g:k.y+d+w>a&&(i=k.y+d+w-a):k.y<-d+w?i=k.y+d-w:k.y+g+d+w>a&&(i=k.y+g+d+w-a)),r===0&&i===0||n.panBy(r,i)}}},e.prototype.setBoxStyle=function(){if(this.div){this.div.className=this.boxClass,this.div.style.cssText="";var t=this.boxStyle;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(this.div.style[n]=t[n]);if(this.div.style.webkitTransform="translateZ(0)",typeof this.div.style.opacity<"u"&&this.div.style.opacity!==""){var r=parseFloat(this.div.style.opacity||"");this.div.style.msFilter='"progid:DXImageTransform.Microsoft.Alpha(Opacity='+r*100+')"',this.div.style.filter="alpha(opacity="+r*100+")"}this.div.style.position="absolute",this.div.style.visibility="hidden",this.zIndex!==null&&(this.div.style.zIndex=this.zIndex+""),this.div.style.overflow||(this.div.style.overflow="auto")}},e.prototype.getBoxWidths=function(){var t={top:0,bottom:0,left:0,right:0};if(!this.div)return t;if(document.defaultView){var n=this.div.ownerDocument,r=n&&n.defaultView?n.defaultView.getComputedStyle(this.div,""):null;r&&(t.top=parseInt(r.borderTopWidth||"",10)||0,t.bottom=parseInt(r.borderBottomWidth||"",10)||0,t.left=parseInt(r.borderLeftWidth||"",10)||0,t.right=parseInt(r.borderRightWidth||"",10)||0)}else if(document.documentElement.currentStyle){var i=this.div.currentStyle;i&&(t.top=parseInt(i.borderTopWidth||"",10)||0,t.bottom=parseInt(i.borderBottomWidth||"",10)||0,t.left=parseInt(i.borderLeftWidth||"",10)||0,t.right=parseInt(i.borderRightWidth||"",10)||0)}return t},e.prototype.onRemove=function(){this.div&&this.div.parentNode&&(this.div.parentNode.removeChild(this.div),this.div=null)},e.prototype.draw=function(){if(this.createInfoBoxDiv(),this.div){var t=this.getProjection(),n=t.fromLatLngToDivPixel(this.position);n!==null&&(this.div.style.left=n.x+this.pixelOffset.width+"px",this.alignBottom?this.div.style.bottom=-(n.y+this.pixelOffset.height)+"px":this.div.style.top=n.y+this.pixelOffset.height+"px"),this.isHidden?this.div.style.visibility="hidden":this.div.style.visibility="visible"}},e.prototype.setOptions=function(t){t===void 0&&(t={}),typeof t.boxClass<"u"&&(this.boxClass=t.boxClass,this.setBoxStyle()),typeof t.boxStyle<"u"&&(this.boxStyle=t.boxStyle,this.setBoxStyle()),typeof t.content<"u"&&this.setContent(t.content),typeof t.disableAutoPan<"u"&&(this.disableAutoPan=t.disableAutoPan),typeof t.maxWidth<"u"&&(this.maxWidth=t.maxWidth),typeof t.pixelOffset<"u"&&(this.pixelOffset=t.pixelOffset),typeof t.alignBottom<"u"&&(this.alignBottom=t.alignBottom),typeof t.position<"u"&&this.setPosition(t.position),typeof t.zIndex<"u"&&this.setZIndex(t.zIndex),typeof t.closeBoxMargin<"u"&&(this.closeBoxMargin=t.closeBoxMargin),typeof t.closeBoxURL<"u"&&(this.closeBoxURL=t.closeBoxURL),typeof t.infoBoxClearance<"u"&&(this.infoBoxClearance=t.infoBoxClearance),typeof t.isHidden<"u"&&(this.isHidden=t.isHidden),typeof t.visible<"u"&&(this.isHidden=!t.visible),typeof t.enableEventPropagation<"u"&&(this.enableEventPropagation=t.enableEventPropagation),this.div&&this.draw()},e.prototype.setContent=function(t){this.content=t,this.div&&(this.closeListener&&(google.maps.event.removeListener(this.closeListener),this.closeListener=null),this.fixedWidthSet||(this.div.style.width=""),typeof t=="string"?this.div.innerHTML=this.getCloseBoxImg()+t:(this.div.innerHTML=this.getCloseBoxImg(),this.div.appendChild(t)),this.fixedWidthSet||(this.div.style.width=this.div.offsetWidth+"px",typeof t=="string"?this.div.innerHTML=this.getCloseBoxImg()+t:(this.div.innerHTML=this.getCloseBoxImg(),this.div.appendChild(t))),this.addClickHandler()),google.maps.event.trigger(this,"content_changed")},e.prototype.setPosition=function(t){this.position=t,this.div&&this.draw(),google.maps.event.trigger(this,"position_changed")},e.prototype.setVisible=function(t){this.isHidden=!t,this.div&&(this.div.style.visibility=this.isHidden?"hidden":"visible")},e.prototype.setZIndex=function(t){this.zIndex=t,this.div&&(this.div.style.zIndex=t+""),google.maps.event.trigger(this,"zindex_changed")},e.prototype.getContent=function(){return this.content},e.prototype.getPosition=function(){return this.position},e.prototype.getZIndex=function(){return this.zIndex},e.prototype.getVisible=function(){var t=this.getMap();return typeof t>"u"||t===null?!1:!this.isHidden},e.prototype.show=function(){this.isHidden=!1,this.div&&(this.div.style.visibility="visible")},e.prototype.hide=function(){this.isHidden=!0,this.div&&(this.div.style.visibility="hidden")},e.prototype.open=function(t,n){var r=this;n&&(this.position=n.getPosition(),this.moveListener=google.maps.event.addListener(n,"position_changed",function(){var i=n.getPosition();r.setPosition(i)}),this.mapListener=google.maps.event.addListener(n,"map_changed",function(){r.setMap(n.map)})),this.setMap(t),this.div&&this.panBox()},e.prototype.close=function(){if(this.closeListener&&(google.maps.event.removeListener(this.closeListener),this.closeListener=null),this.eventListeners){for(var t=0;t<this.eventListeners.length;t++)google.maps.event.removeListener(this.eventListeners[t]);this.eventListeners=null}this.moveListener&&(google.maps.event.removeListener(this.moveListener),this.moveListener=null),this.mapListener&&(google.maps.event.removeListener(this.mapListener),this.mapListener=null),this.contextListener&&(google.maps.event.removeListener(this.contextListener),this.contextListener=null),this.setMap(null)},e.prototype.extend=function(t,n){return function(i){for(var s in i.prototype)Object.prototype.hasOwnProperty.call(this,s)||(this.prototype[s]=i.prototype[s]);return this}.apply(t,[n])},e}();const cf={onCloseClick:"closeclick",onContentChanged:"content_changed",onDomReady:"domready",onPositionChanged:"position_changed",onZindexChanged:"zindex_changed"},df={options(e,t){e.setOptions(t)},position(e,t){t instanceof google.maps.LatLng?e.setPosition(t):e.setPosition(new google.maps.LatLng(t.lat,t.lng))},visible(e,t){e.setVisible(t)},zIndex(e,t){e.setZIndex(t)}},lw={};function aw({children:e,anchor:t,options:n,position:r,zIndex:i,onCloseClick:s,onDomReady:o,onContentChanged:l,onPositionChanged:a,onZindexChanged:c,onLoad:d,onUnmount:f}){const g=u.useContext(ae),[x,w]=u.useState(null),[S,k]=u.useState(null),[h,p]=u.useState(null),[v,y]=u.useState(null),[P,b]=u.useState(null),[M,C]=u.useState(null),m=u.useRef(null);return u.useEffect(()=>{g&&x!==null&&(x.close(),t?x.open(g,t):x.getPosition()&&x.open(g))},[g,x,t]),u.useEffect(()=>{n&&x!==null&&x.setOptions(n)},[x,n]),u.useEffect(()=>{if(r&&x!==null){const I=r instanceof google.maps.LatLng?r:new google.maps.LatLng(r.lat,r.lng);x.setPosition(I)}},[r]),u.useEffect(()=>{typeof i=="number"&&x!==null&&x.setZIndex(i)},[i]),u.useEffect(()=>{x&&s&&(S!==null&&google.maps.event.removeListener(S),k(google.maps.event.addListener(x,"closeclick",s)))},[s]),u.useEffect(()=>{x&&o&&(h!==null&&google.maps.event.removeListener(h),p(google.maps.event.addListener(x,"domready",o)))},[o]),u.useEffect(()=>{x&&l&&(v!==null&&google.maps.event.removeListener(v),y(google.maps.event.addListener(x,"content_changed",l)))},[l]),u.useEffect(()=>{x&&a&&(P!==null&&google.maps.event.removeListener(P),b(google.maps.event.addListener(x,"position_changed",a)))},[a]),u.useEffect(()=>{x&&c&&(M!==null&&google.maps.event.removeListener(M),C(google.maps.event.addListener(x,"zindex_changed",c)))},[c]),u.useEffect(()=>{if(g){const I=n||lw,{position:B}=I,Q=sc(I,["position"]);let G;B&&!(B instanceof google.maps.LatLng)&&(G=new google.maps.LatLng(B.lat,B.lng));const W=new Zh(Object.assign(Object.assign({},Q),G?{position:G}:{}));m.current=document.createElement("div"),w(W),s&&k(google.maps.event.addListener(W,"closeclick",s)),o&&p(google.maps.event.addListener(W,"domready",o)),l&&y(google.maps.event.addListener(W,"content_changed",l)),a&&b(google.maps.event.addListener(W,"position_changed",a)),c&&C(google.maps.event.addListener(W,"zindex_changed",c)),W.setContent(m.current),t?W.open(g,t):W.getPosition()?W.open(g):Ne(!1,"You must provide either an anchor or a position prop for <InfoBox>."),d&&d(W)}return()=>{x!==null&&(S&&google.maps.event.removeListener(S),v&&google.maps.event.removeListener(v),h&&google.maps.event.removeListener(h),P&&google.maps.event.removeListener(P),M&&google.maps.event.removeListener(M),f&&f(x),x.close())}},[]),m.current?Yt.createPortal(u.Children.only(e),m.current):null}u.memo(aw);class uw extends u.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.containerElement=null,this.state={infoBox:null},this.open=(t,n)=>{n?t.open(this.context,n):t.getPosition()?t.open(this.context):Ne(!1,"You must provide either an anchor or a position prop for <InfoBox>.")},this.setInfoBoxCallback=()=>{this.state.infoBox!==null&&this.containerElement!==null&&(this.state.infoBox.setContent(this.containerElement),this.open(this.state.infoBox,this.props.anchor),this.props.onLoad&&this.props.onLoad(this.state.infoBox))}}componentDidMount(){const t=this.props.options||{},{position:n}=t,r=sc(t,["position"]);let i;n&&!(n instanceof google.maps.LatLng)&&(i=new google.maps.LatLng(n.lat,n.lng));const s=new Zh(Object.assign(Object.assign({},r),i?{position:i}:{}));this.containerElement=document.createElement("div"),this.registeredEvents=de({updaterMap:df,eventMap:cf,prevProps:{},nextProps:this.props,instance:s}),this.setState({infoBox:s},this.setInfoBoxCallback)}componentDidUpdate(t){const{infoBox:n}=this.state;n!==null&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:df,eventMap:cf,prevProps:t,nextProps:this.props,instance:n}))}componentWillUnmount(){const{onUnmount:t}=this.props,{infoBox:n}=this.state;n!==null&&(t&&t(n),me(this.registeredEvents),n.close())}render(){return this.containerElement?Yt.createPortal(u.Children.only(this.props.children),this.containerElement):null}}uw.contextType=ae;var ff=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t=="object"&&typeof n=="object"){if(t.constructor!==n.constructor)return!1;var r,i,s;if(Array.isArray(t)){if(r=t.length,r!=n.length)return!1;for(i=r;i--!==0;)if(!e(t[i],n[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if(s=Object.keys(t),r=s.length,r!==Object.keys(n).length)return!1;for(i=r;i--!==0;)if(!Object.prototype.hasOwnProperty.call(n,s[i]))return!1;for(i=r;i--!==0;){var o=s[i];if(!e(t[o],n[o]))return!1}return!0}return t!==t&&n!==n},Yh={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(bx,function(){function n(g,x,w,S,k,h){if(!(k-S<=w)){var p=S+k>>1;r(g,x,p,S,k,h%2),n(g,x,w,S,p-1,h+1),n(g,x,w,p+1,k,h+1)}}function r(g,x,w,S,k,h){for(;k>S;){if(k-S>600){var p=k-S+1,v=w-S+1,y=Math.log(p),P=.5*Math.exp(2*y/3),b=.5*Math.sqrt(y*P*(p-P)/p)*(v-p/2<0?-1:1),M=Math.max(S,Math.floor(w-v*P/p+b)),C=Math.min(k,Math.floor(w+(p-v)*P/p+b));r(g,x,w,M,C,h)}var m=x[2*w+h],I=S,B=k;for(i(g,x,S,w),x[2*k+h]>m&&i(g,x,S,k);I<B;){for(i(g,x,I,B),I++,B--;x[2*I+h]<m;)I++;for(;x[2*B+h]>m;)B--}x[2*S+h]===m?i(g,x,S,B):(B++,i(g,x,B,k)),B<=w&&(S=B+1),w<=B&&(k=B-1)}}function i(g,x,w,S){s(g,w,S),s(x,2*w,2*S),s(x,2*w+1,2*S+1)}function s(g,x,w){var S=g[x];g[x]=g[w],g[w]=S}function o(g,x,w,S,k,h,p){for(var v=[0,g.length-1,0],y=[],P,b;v.length;){var M=v.pop(),C=v.pop(),m=v.pop();if(C-m<=p){for(var I=m;I<=C;I++)P=x[2*I],b=x[2*I+1],P>=w&&P<=k&&b>=S&&b<=h&&y.push(g[I]);continue}var B=Math.floor((m+C)/2);P=x[2*B],b=x[2*B+1],P>=w&&P<=k&&b>=S&&b<=h&&y.push(g[B]);var Q=(M+1)%2;(M===0?w<=P:S<=b)&&(v.push(m),v.push(B-1),v.push(Q)),(M===0?k>=P:h>=b)&&(v.push(B+1),v.push(C),v.push(Q))}return y}function l(g,x,w,S,k,h){for(var p=[0,g.length-1,0],v=[],y=k*k;p.length;){var P=p.pop(),b=p.pop(),M=p.pop();if(b-M<=h){for(var C=M;C<=b;C++)a(x[2*C],x[2*C+1],w,S)<=y&&v.push(g[C]);continue}var m=Math.floor((M+b)/2),I=x[2*m],B=x[2*m+1];a(I,B,w,S)<=y&&v.push(g[m]);var Q=(P+1)%2;(P===0?w-k<=I:S-k<=B)&&(p.push(M),p.push(m-1),p.push(Q)),(P===0?w+k>=I:S+k>=B)&&(p.push(m+1),p.push(b),p.push(Q))}return v}function a(g,x,w,S){var k=g-w,h=x-S;return k*k+h*h}var c=function(g){return g[0]},d=function(g){return g[1]},f=function(x,w,S,k,h){w===void 0&&(w=c),S===void 0&&(S=d),k===void 0&&(k=64),h===void 0&&(h=Float64Array),this.nodeSize=k,this.points=x;for(var p=x.length<65536?Uint16Array:Uint32Array,v=this.ids=new p(x.length),y=this.coords=new h(x.length*2),P=0;P<x.length;P++)v[P]=P,y[2*P]=w(x[P]),y[2*P+1]=S(x[P]);n(v,y,k,0,v.length-1,0)};return f.prototype.range=function(x,w,S,k){return o(this.ids,this.coords,x,w,S,k,this.nodeSize)},f.prototype.within=function(x,w,S){return l(this.ids,this.coords,x,w,S,this.nodeSize)},f})})(Yh);var pf=Yh.exports;const cw={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:e=>e},co=Math.fround||(e=>t=>(e[0]=+t,e[0]))(new Float32Array(1));class dw{constructor(t){this.options=ii(Object.create(cw),t),this.trees=new Array(this.options.maxZoom+1)}load(t){const{log:n,minZoom:r,maxZoom:i,nodeSize:s}=this.options;n&&console.time("total time");const o=`prepare ${t.length} points`;n&&console.time(o),this.points=t;let l=[];for(let a=0;a<t.length;a++)t[a].geometry&&l.push(pw(t[a],a));this.trees[i+1]=new pf(l,hf,gf,s,Float32Array),n&&console.timeEnd(o);for(let a=i;a>=r;a--){const c=+Date.now();l=this._cluster(l,a),this.trees[a]=new pf(l,hf,gf,s,Float32Array),n&&console.log("z%d: %d clusters in %dms",a,l.length,+Date.now()-c)}return n&&console.timeEnd("total time"),this}getClusters(t,n){let r=((t[0]+180)%360+360)%360-180;const i=Math.max(-90,Math.min(90,t[1]));let s=t[2]===180?180:((t[2]+180)%360+360)%360-180;const o=Math.max(-90,Math.min(90,t[3]));if(t[2]-t[0]>=360)r=-180,s=180;else if(r>s){const d=this.getClusters([r,i,180,o],n),f=this.getClusters([-180,i,s,o],n);return d.concat(f)}const l=this.trees[this._limitZoom(n)],a=l.range(Ms(r),Ps(o),Ms(s),Ps(i)),c=[];for(const d of a){const f=l.points[d];c.push(f.numPoints?mf(f):this.points[f.index])}return c}getChildren(t){const n=this._getOriginId(t),r=this._getOriginZoom(t),i="No cluster with the specified id.",s=this.trees[r];if(!s)throw new Error(i);const o=s.points[n];if(!o)throw new Error(i);const l=this.options.radius/(this.options.extent*Math.pow(2,r-1)),a=s.within(o.x,o.y,l),c=[];for(const d of a){const f=s.points[d];f.parentId===t&&c.push(f.numPoints?mf(f):this.points[f.index])}if(c.length===0)throw new Error(i);return c}getLeaves(t,n,r){n=n||10,r=r||0;const i=[];return this._appendLeaves(i,t,n,r,0),i}getTile(t,n,r){const i=this.trees[this._limitZoom(t)],s=Math.pow(2,t),{extent:o,radius:l}=this.options,a=l/o,c=(r-a)/s,d=(r+1+a)/s,f={features:[]};return this._addTileFeatures(i.range((n-a)/s,c,(n+1+a)/s,d),i.points,n,r,s,f),n===0&&this._addTileFeatures(i.range(1-a/s,c,1,d),i.points,s,r,s,f),n===s-1&&this._addTileFeatures(i.range(0,c,a/s,d),i.points,-1,r,s,f),f.features.length?f:null}getClusterExpansionZoom(t){let n=this._getOriginZoom(t)-1;for(;n<=this.options.maxZoom;){const r=this.getChildren(t);if(n++,r.length!==1)break;t=r[0].properties.cluster_id}return n}_appendLeaves(t,n,r,i,s){const o=this.getChildren(n);for(const l of o){const a=l.properties;if(a&&a.cluster?s+a.point_count<=i?s+=a.point_count:s=this._appendLeaves(t,a.cluster_id,r,i,s):s<i?s++:t.push(l),t.length===r)break}return s}_addTileFeatures(t,n,r,i,s,o){for(const l of t){const a=n[l],c=a.numPoints;let d,f,g;if(c)d=Kh(a),f=a.x,g=a.y;else{const S=this.points[a.index];d=S.properties,f=Ms(S.geometry.coordinates[0]),g=Ps(S.geometry.coordinates[1])}const x={type:1,geometry:[[Math.round(this.options.extent*(f*s-r)),Math.round(this.options.extent*(g*s-i))]],tags:d};let w;c?w=a.id:this.options.generateId?w=a.index:this.points[a.index].id&&(w=this.points[a.index].id),w!==void 0&&(x.id=w),o.features.push(x)}}_limitZoom(t){return Math.max(this.options.minZoom,Math.min(+t,this.options.maxZoom+1))}_cluster(t,n){const r=[],{radius:i,extent:s,reduce:o,minPoints:l}=this.options,a=i/(s*Math.pow(2,n));for(let c=0;c<t.length;c++){const d=t[c];if(d.zoom<=n)continue;d.zoom=n;const f=this.trees[n+1],g=f.within(d.x,d.y,a),x=d.numPoints||1;let w=x;for(const S of g){const k=f.points[S];k.zoom>n&&(w+=k.numPoints||1)}if(w>x&&w>=l){let S=d.x*x,k=d.y*x,h=o&&x>1?this._map(d,!0):null;const p=(c<<5)+(n+1)+this.points.length;for(const v of g){const y=f.points[v];if(y.zoom<=n)continue;y.zoom=n;const P=y.numPoints||1;S+=y.x*P,k+=y.y*P,y.parentId=p,o&&(h||(h=this._map(d,!0)),o(h,this._map(y)))}d.parentId=p,r.push(fw(S/w,k/w,p,w,h))}else if(r.push(d),w>1)for(const S of g){const k=f.points[S];k.zoom<=n||(k.zoom=n,r.push(k))}}return r}_getOriginId(t){return t-this.points.length>>5}_getOriginZoom(t){return(t-this.points.length)%32}_map(t,n){if(t.numPoints)return n?ii({},t.properties):t.properties;const r=this.points[t.index].properties,i=this.options.map(r);return n&&i===r?ii({},i):i}}function fw(e,t,n,r,i){return{x:co(e),y:co(t),zoom:1/0,id:n,parentId:-1,numPoints:r,properties:i}}function pw(e,t){const[n,r]=e.geometry.coordinates;return{x:co(Ms(n)),y:co(Ps(r)),zoom:1/0,index:t,parentId:-1}}function mf(e){return{type:"Feature",id:e.id,properties:Kh(e),geometry:{type:"Point",coordinates:[mw(e.x),hw(e.y)]}}}function Kh(e){const t=e.numPoints,n=t>=1e4?`${Math.round(t/1e3)}k`:t>=1e3?`${Math.round(t/100)/10}k`:t;return ii(ii({},e.properties),{cluster:!0,cluster_id:e.id,point_count:t,point_count_abbreviated:n})}function Ms(e){return e/360+.5}function Ps(e){const t=Math.sin(e*Math.PI/180),n=.5-.25*Math.log((1+t)/(1-t))/Math.PI;return n<0?0:n>1?1:n}function mw(e){return(e-.5)*360}function hw(e){const t=(180-e*360)*Math.PI/180;return 360*Math.atan(Math.exp(t))/Math.PI-90}function ii(e,t){for(const n in t)e[n]=t[n];return e}function hf(e){return e.x}function gf(e){return e.y}/*! *****************************************************************************
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
***************************************************************************** */function gw(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}class Za{constructor({markers:t,position:n}){this.markers=t,n&&(n instanceof google.maps.LatLng?this._position=n:this._position=new google.maps.LatLng(n))}get bounds(){if(!(this.markers.length===0&&!this._position))return this.markers.reduce((t,n)=>t.extend(n.getPosition()),new google.maps.LatLngBounds(this._position,this._position))}get position(){return this._position||this.bounds.getCenter()}get count(){return this.markers.filter(t=>t.getVisible()).length}push(t){this.markers.push(t)}delete(){this.marker&&(this.marker.setMap(null),delete this.marker),this.markers.length=0}}class vw{constructor({maxZoom:t=16}){this.maxZoom=t}noop({markers:t}){return yw(t)}}const yw=e=>e.map(n=>new Za({position:n.getPosition(),markers:[n]}));class xw extends vw{constructor(t){var{maxZoom:n,radius:r=60}=t,i=gw(t,["maxZoom","radius"]);super({maxZoom:n}),this.superCluster=new dw(Object.assign({maxZoom:this.maxZoom,radius:r},i)),this.state={zoom:null}}calculate(t){let n=!1;if(!ff(t.markers,this.markers)){n=!0,this.markers=[...t.markers];const i=this.markers.map(s=>({type:"Feature",geometry:{type:"Point",coordinates:[s.getPosition().lng(),s.getPosition().lat()]},properties:{marker:s}}));this.superCluster.load(i)}const r={zoom:t.map.getZoom()};return n||this.state.zoom>this.maxZoom&&r.zoom>this.maxZoom||(n=n||!ff(this.state,r)),this.state=r,n&&(this.clusters=this.cluster(t)),{clusters:this.clusters,changed:n}}cluster({map:t}){return this.superCluster.getClusters([-180,-90,180,90],Math.round(t.getZoom())).map(this.transformCluster.bind(this))}transformCluster({geometry:{coordinates:[t,n]},properties:r}){if(r.cluster)return new Za({markers:this.superCluster.getLeaves(r.cluster_id,1/0).map(i=>i.properties.marker),position:new google.maps.LatLng({lat:n,lng:t})});{const i=r.marker;return new Za({markers:[i],position:i.getPosition()})}}}class ww{constructor(t,n){this.markers={sum:t.length};const r=n.map(s=>s.count),i=r.reduce((s,o)=>s+o,0);this.clusters={count:n.length,markers:{mean:i/n.length,sum:i,min:Math.min(...r),max:Math.max(...r)}}}}class Sw{render({count:t,position:n},r){const i=t>Math.max(10,r.clusters.markers.mean)?"#ff0000":"#0000ff",s=window.btoa(`
  <svg fill="${i}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
    <circle cx="120" cy="120" opacity=".6" r="70" />
    <circle cx="120" cy="120" opacity=".3" r="90" />
    <circle cx="120" cy="120" opacity=".2" r="110" />
  </svg>`);return new google.maps.Marker({position:n,icon:{url:`data:image/svg+xml;base64,${s}`,scaledSize:new google.maps.Size(45,45)},label:{text:String(t),color:"rgba(255,255,255,0.9)",fontSize:"12px"},title:`Cluster of ${t} markers`,zIndex:Number(google.maps.Marker.MAX_ZINDEX)+t})}}function Lw(e,t){for(let n in t.prototype)e.prototype[n]=t.prototype[n]}class oc{constructor(){Lw(oc,google.maps.OverlayView)}}var si;(function(e){e.CLUSTERING_BEGIN="clusteringbegin",e.CLUSTERING_END="clusteringend",e.CLUSTER_CLICK="click"})(si||(si={}));const kw=(e,t,n)=>{n.fitBounds(t.bounds)};class Ew extends oc{constructor({map:t,markers:n=[],algorithm:r=new xw({}),renderer:i=new Sw,onClusterClick:s=kw}){super(),this.markers=[...n],this.clusters=[],this.algorithm=r,this.renderer=i,this.onClusterClick=s,t&&this.setMap(t)}addMarker(t,n){this.markers.includes(t)||(this.markers.push(t),n||this.render())}addMarkers(t,n){t.forEach(r=>{this.addMarker(r,!0)}),n||this.render()}removeMarker(t,n){const r=this.markers.indexOf(t);return r===-1?!1:(t.setMap(null),this.markers.splice(r,1),n||this.render(),!0)}removeMarkers(t,n){let r=!1;return t.forEach(i=>{r=this.removeMarker(i,!0)||r}),r&&!n&&this.render(),r}clearMarkers(t){this.markers.length=0,t||this.render()}render(){const t=this.getMap();if(t instanceof google.maps.Map&&this.getProjection()){google.maps.event.trigger(this,si.CLUSTERING_BEGIN,this);const{clusters:n,changed:r}=this.algorithm.calculate({markers:this.markers,map:t,mapCanvasProjection:this.getProjection()});(r||r==null)&&(this.reset(),this.clusters=n,this.renderClusters()),google.maps.event.trigger(this,si.CLUSTERING_END,this)}}onAdd(){this.idleListener=this.getMap().addListener("idle",this.render.bind(this)),this.render()}onRemove(){google.maps.event.removeListener(this.idleListener),this.reset()}reset(){this.markers.forEach(t=>t.setMap(null)),this.clusters.forEach(t=>t.delete()),this.clusters=[]}renderClusters(){const t=new ww(this.markers,this.clusters),n=this.getMap();this.clusters.forEach(r=>{r.markers.length===1?r.marker=r.markers[0]:(r.marker=this.renderer.render(r,t),this.onClusterClick&&r.marker.addListener("click",i=>{google.maps.event.trigger(this,si.CLUSTER_CLICK,r),this.onClusterClick(i,r,n)})),r.marker.setMap(n)})}}function Cw(e){const t=Px(),[n,r]=u.useState(null);return u.useEffect(()=>{if(t&&n===null){const i=new Ew(Object.assign(Object.assign({},e),{map:t}));r(i)}},[t]),n}function bw({children:e,options:t}){const n=Cw(t);return n!==null?e(n):null}u.memo(bw);const vf={onCloseClick:"closeclick",onContentChanged:"content_changed",onDomReady:"domready",onPositionChanged:"position_changed",onZindexChanged:"zindex_changed"},yf={options(e,t){e.setOptions(t)},position(e,t){e.setPosition(t)},zIndex(e,t){e.setZIndex(t)}};function Mw({children:e,anchor:t,options:n,position:r,zIndex:i,onCloseClick:s,onDomReady:o,onContentChanged:l,onPositionChanged:a,onZindexChanged:c,onLoad:d,onUnmount:f}){const g=u.useContext(ae),[x,w]=u.useState(null),[S,k]=u.useState(null),[h,p]=u.useState(null),[v,y]=u.useState(null),[P,b]=u.useState(null),[M,C]=u.useState(null),m=u.useRef(null);return u.useEffect(()=>{x!==null&&(x.close(),t?x.open(g,t):x.getPosition()&&x.open(g))},[g,x,t]),u.useEffect(()=>{n&&x!==null&&x.setOptions(n)},[x,n]),u.useEffect(()=>{r&&x!==null&&x.setPosition(r)},[r]),u.useEffect(()=>{typeof i=="number"&&x!==null&&x.setZIndex(i)},[i]),u.useEffect(()=>{x&&s&&(S!==null&&google.maps.event.removeListener(S),k(google.maps.event.addListener(x,"closeclick",s)))},[s]),u.useEffect(()=>{x&&o&&(h!==null&&google.maps.event.removeListener(h),p(google.maps.event.addListener(x,"domready",o)))},[o]),u.useEffect(()=>{x&&l&&(v!==null&&google.maps.event.removeListener(v),y(google.maps.event.addListener(x,"content_changed",l)))},[l]),u.useEffect(()=>{x&&a&&(P!==null&&google.maps.event.removeListener(P),b(google.maps.event.addListener(x,"position_changed",a)))},[a]),u.useEffect(()=>{x&&c&&(M!==null&&google.maps.event.removeListener(M),C(google.maps.event.addListener(x,"zindex_changed",c)))},[c]),u.useEffect(()=>{const I=new google.maps.InfoWindow(Object.assign({},n||{}));return w(I),m.current=document.createElement("div"),s&&k(google.maps.event.addListener(I,"closeclick",s)),o&&p(google.maps.event.addListener(I,"domready",o)),l&&y(google.maps.event.addListener(I,"content_changed",l)),a&&b(google.maps.event.addListener(I,"position_changed",a)),c&&C(google.maps.event.addListener(I,"zindex_changed",c)),I.setContent(m.current),r&&I.setPosition(r),i&&I.setZIndex(i),t?I.open(g,t):I.getPosition()?I.open(g):Ne(!1,"You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>."),d&&d(I),()=>{S&&google.maps.event.removeListener(S),v&&google.maps.event.removeListener(v),h&&google.maps.event.removeListener(h),P&&google.maps.event.removeListener(P),M&&google.maps.event.removeListener(M),f&&f(I),I.close()}},[]),m.current?Yt.createPortal(u.Children.only(e),m.current):null}u.memo(Mw);class Pw extends u.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.containerElement=null,this.state={infoWindow:null},this.open=(t,n)=>{n?t.open(this.context,n):t.getPosition()?t.open(this.context):Ne(!1,"You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.")},this.setInfoWindowCallback=()=>{this.state.infoWindow!==null&&this.containerElement!==null&&(this.state.infoWindow.setContent(this.containerElement),this.open(this.state.infoWindow,this.props.anchor),this.props.onLoad&&this.props.onLoad(this.state.infoWindow))}}componentDidMount(){const t=new google.maps.InfoWindow(Object.assign({},this.props.options||{}));this.containerElement=document.createElement("div"),this.registeredEvents=de({updaterMap:yf,eventMap:vf,prevProps:{},nextProps:this.props,instance:t}),this.setState(()=>({infoWindow:t}),this.setInfoWindowCallback)}componentDidUpdate(t){this.state.infoWindow!==null&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:yf,eventMap:vf,prevProps:t,nextProps:this.props,instance:this.state.infoWindow}))}componentWillUnmount(){this.state.infoWindow!==null&&(me(this.registeredEvents),this.props.onUnmount&&this.props.onUnmount(this.state.infoWindow),this.state.infoWindow.close())}render(){return this.containerElement?Yt.createPortal(u.Children.only(this.props.children),this.containerElement):null}}Pw.contextType=ae;const xf={onClick:"click",onDblClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDragStart:"dragstart",onMouseDown:"mousedown",onMouseMove:"mousemove",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onRightClick:"rightclick"},wf={draggable(e,t){e.setDraggable(t)},editable(e,t){e.setEditable(t)},map(e,t){e.setMap(t)},options(e,t){e.setOptions(t)},path(e,t){e.setPath(t)},visible(e,t){e.setVisible(t)}},Tw={};function zw({options:e,draggable:t,editable:n,visible:r,path:i,onDblClick:s,onDragEnd:o,onDragStart:l,onMouseDown:a,onMouseMove:c,onMouseOut:d,onMouseOver:f,onMouseUp:g,onRightClick:x,onClick:w,onDrag:S,onLoad:k,onUnmount:h}){const p=u.useContext(ae),[v,y]=u.useState(null),[P,b]=u.useState(null),[M,C]=u.useState(null),[m,I]=u.useState(null),[B,Q]=u.useState(null),[G,W]=u.useState(null),[J,ne]=u.useState(null),[te,O]=u.useState(null),[F,U]=u.useState(null),[q,$]=u.useState(null),[_,z]=u.useState(null),[H,T]=u.useState(null);return u.useEffect(()=>{v!==null&&v.setMap(p)},[p]),u.useEffect(()=>{typeof e<"u"&&v!==null&&v.setOptions(e)},[v,e]),u.useEffect(()=>{typeof t<"u"&&v!==null&&v.setDraggable(t)},[v,t]),u.useEffect(()=>{typeof n<"u"&&v!==null&&v.setEditable(n)},[v,n]),u.useEffect(()=>{typeof r<"u"&&v!==null&&v.setVisible(r)},[v,r]),u.useEffect(()=>{typeof i<"u"&&v!==null&&v.setPath(i)},[v,i]),u.useEffect(()=>{v&&s&&(P!==null&&google.maps.event.removeListener(P),b(google.maps.event.addListener(v,"dblclick",s)))},[s]),u.useEffect(()=>{v&&o&&(M!==null&&google.maps.event.removeListener(M),C(google.maps.event.addListener(v,"dragend",o)))},[o]),u.useEffect(()=>{v&&l&&(m!==null&&google.maps.event.removeListener(m),I(google.maps.event.addListener(v,"dragstart",l)))},[l]),u.useEffect(()=>{v&&a&&(B!==null&&google.maps.event.removeListener(B),Q(google.maps.event.addListener(v,"mousedown",a)))},[a]),u.useEffect(()=>{v&&c&&(G!==null&&google.maps.event.removeListener(G),W(google.maps.event.addListener(v,"mousemove",c)))},[c]),u.useEffect(()=>{v&&d&&(J!==null&&google.maps.event.removeListener(J),ne(google.maps.event.addListener(v,"mouseout",d)))},[d]),u.useEffect(()=>{v&&f&&(te!==null&&google.maps.event.removeListener(te),O(google.maps.event.addListener(v,"mouseover",f)))},[f]),u.useEffect(()=>{v&&g&&(F!==null&&google.maps.event.removeListener(F),U(google.maps.event.addListener(v,"mouseup",g)))},[g]),u.useEffect(()=>{v&&x&&(q!==null&&google.maps.event.removeListener(q),$(google.maps.event.addListener(v,"rightclick",x)))},[x]),u.useEffect(()=>{v&&w&&(_!==null&&google.maps.event.removeListener(_),z(google.maps.event.addListener(v,"click",w)))},[w]),u.useEffect(()=>{v&&S&&(H!==null&&google.maps.event.removeListener(H),T(google.maps.event.addListener(v,"drag",S)))},[S]),u.useEffect(()=>{const A=new google.maps.Polyline(Object.assign(Object.assign({},e||Tw),{map:p}));return i&&A.setPath(i),typeof r<"u"&&A.setVisible(r),typeof n<"u"&&A.setEditable(n),typeof t<"u"&&A.setDraggable(t),s&&b(google.maps.event.addListener(A,"dblclick",s)),o&&C(google.maps.event.addListener(A,"dragend",o)),l&&I(google.maps.event.addListener(A,"dragstart",l)),a&&Q(google.maps.event.addListener(A,"mousedown",a)),c&&W(google.maps.event.addListener(A,"mousemove",c)),d&&ne(google.maps.event.addListener(A,"mouseout",d)),f&&O(google.maps.event.addListener(A,"mouseover",f)),g&&U(google.maps.event.addListener(A,"mouseup",g)),x&&$(google.maps.event.addListener(A,"rightclick",x)),w&&z(google.maps.event.addListener(A,"click",w)),S&&T(google.maps.event.addListener(A,"drag",S)),y(A),k&&k(A),()=>{P!==null&&google.maps.event.removeListener(P),M!==null&&google.maps.event.removeListener(M),m!==null&&google.maps.event.removeListener(m),B!==null&&google.maps.event.removeListener(B),G!==null&&google.maps.event.removeListener(G),J!==null&&google.maps.event.removeListener(J),te!==null&&google.maps.event.removeListener(te),F!==null&&google.maps.event.removeListener(F),q!==null&&google.maps.event.removeListener(q),_!==null&&google.maps.event.removeListener(_),h&&h(A),A.setMap(null)}},[]),null}u.memo(zw);class Iw extends u.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={polyline:null},this.setPolylineCallback=()=>{this.state.polyline!==null&&this.props.onLoad&&this.props.onLoad(this.state.polyline)}}componentDidMount(){const t=new google.maps.Polyline(Object.assign(Object.assign({},this.props.options||{}),{map:this.context}));this.registeredEvents=de({updaterMap:wf,eventMap:xf,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{polyline:t}},this.setPolylineCallback)}componentDidUpdate(t){this.state.polyline!==null&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:wf,eventMap:xf,prevProps:t,nextProps:this.props,instance:this.state.polyline}))}componentWillUnmount(){this.state.polyline!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.polyline),me(this.registeredEvents),this.state.polyline.setMap(null))}render(){return null}}Iw.contextType=ae;const Sf={onClick:"click",onDblClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDragStart:"dragstart",onMouseDown:"mousedown",onMouseMove:"mousemove",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onRightClick:"rightclick"},Lf={draggable(e,t){e.setDraggable(t)},editable(e,t){e.setEditable(t)},map(e,t){e.setMap(t)},options(e,t){e.setOptions(t)},path(e,t){e.setPath(t)},paths(e,t){e.setPaths(t)},visible(e,t){e.setVisible(t)}};function Ow({options:e,draggable:t,editable:n,visible:r,path:i,paths:s,onDblClick:o,onDragEnd:l,onDragStart:a,onMouseDown:c,onMouseMove:d,onMouseOut:f,onMouseOver:g,onMouseUp:x,onRightClick:w,onClick:S,onDrag:k,onLoad:h,onUnmount:p}){const v=u.useContext(ae),[y,P]=u.useState(null),[b,M]=u.useState(null),[C,m]=u.useState(null),[I,B]=u.useState(null),[Q,G]=u.useState(null),[W,J]=u.useState(null),[ne,te]=u.useState(null),[O,F]=u.useState(null),[U,q]=u.useState(null),[$,_]=u.useState(null),[z,H]=u.useState(null),[T,A]=u.useState(null);return u.useEffect(()=>{y!==null&&y.setMap(v)},[v]),u.useEffect(()=>{typeof e<"u"&&y!==null&&y.setOptions(e)},[y,e]),u.useEffect(()=>{typeof t<"u"&&y!==null&&y.setDraggable(t)},[y,t]),u.useEffect(()=>{typeof n<"u"&&y!==null&&y.setEditable(n)},[y,n]),u.useEffect(()=>{typeof r<"u"&&y!==null&&y.setVisible(r)},[y,r]),u.useEffect(()=>{typeof i<"u"&&y!==null&&y.setPath(i)},[y,i]),u.useEffect(()=>{typeof s<"u"&&y!==null&&y.setPaths(s)},[y,s]),u.useEffect(()=>{y&&o&&(b!==null&&google.maps.event.removeListener(b),M(google.maps.event.addListener(y,"dblclick",o)))},[o]),u.useEffect(()=>{y&&l&&(C!==null&&google.maps.event.removeListener(C),m(google.maps.event.addListener(y,"dragend",l)))},[l]),u.useEffect(()=>{y&&a&&(I!==null&&google.maps.event.removeListener(I),B(google.maps.event.addListener(y,"dragstart",a)))},[a]),u.useEffect(()=>{y&&c&&(Q!==null&&google.maps.event.removeListener(Q),G(google.maps.event.addListener(y,"mousedown",c)))},[c]),u.useEffect(()=>{y&&d&&(W!==null&&google.maps.event.removeListener(W),J(google.maps.event.addListener(y,"mousemove",d)))},[d]),u.useEffect(()=>{y&&f&&(ne!==null&&google.maps.event.removeListener(ne),te(google.maps.event.addListener(y,"mouseout",f)))},[f]),u.useEffect(()=>{y&&g&&(O!==null&&google.maps.event.removeListener(O),F(google.maps.event.addListener(y,"mouseover",g)))},[g]),u.useEffect(()=>{y&&x&&(U!==null&&google.maps.event.removeListener(U),q(google.maps.event.addListener(y,"mouseup",x)))},[x]),u.useEffect(()=>{y&&w&&($!==null&&google.maps.event.removeListener($),_(google.maps.event.addListener(y,"rightclick",w)))},[w]),u.useEffect(()=>{y&&S&&(z!==null&&google.maps.event.removeListener(z),H(google.maps.event.addListener(y,"click",S)))},[S]),u.useEffect(()=>{y&&k&&(T!==null&&google.maps.event.removeListener(T),A(google.maps.event.addListener(y,"drag",k)))},[k]),u.useEffect(()=>{const E=new google.maps.Polygon(Object.assign(Object.assign({},e||{}),{map:v}));return i&&E.setPath(i),s&&E.setPaths(s),typeof r<"u"&&E.setVisible(r),typeof n<"u"&&E.setEditable(n),typeof t<"u"&&E.setDraggable(t),o&&M(google.maps.event.addListener(E,"dblclick",o)),l&&m(google.maps.event.addListener(E,"dragend",l)),a&&B(google.maps.event.addListener(E,"dragstart",a)),c&&G(google.maps.event.addListener(E,"mousedown",c)),d&&J(google.maps.event.addListener(E,"mousemove",d)),f&&te(google.maps.event.addListener(E,"mouseout",f)),g&&F(google.maps.event.addListener(E,"mouseover",g)),x&&q(google.maps.event.addListener(E,"mouseup",x)),w&&_(google.maps.event.addListener(E,"rightclick",w)),S&&H(google.maps.event.addListener(E,"click",S)),k&&A(google.maps.event.addListener(E,"drag",k)),P(E),h&&h(E),()=>{b!==null&&google.maps.event.removeListener(b),C!==null&&google.maps.event.removeListener(C),I!==null&&google.maps.event.removeListener(I),Q!==null&&google.maps.event.removeListener(Q),W!==null&&google.maps.event.removeListener(W),ne!==null&&google.maps.event.removeListener(ne),O!==null&&google.maps.event.removeListener(O),U!==null&&google.maps.event.removeListener(U),$!==null&&google.maps.event.removeListener($),z!==null&&google.maps.event.removeListener(z),p&&p(E),E.setMap(null)}},[]),null}u.memo(Ow);class _w extends u.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={polygon:null},this.setPolygonCallback=()=>{this.state.polygon!==null&&this.props.onLoad&&this.props.onLoad(this.state.polygon)}}componentDidMount(){const t=new google.maps.Polygon(Object.assign(Object.assign({},this.props.options||{}),{map:this.context}));this.registeredEvents=de({updaterMap:Lf,eventMap:Sf,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{polygon:t}},this.setPolygonCallback)}componentDidUpdate(t){this.state.polygon!==null&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:Lf,eventMap:Sf,prevProps:t,nextProps:this.props,instance:this.state.polygon}))}componentWillUnmount(){this.state.polygon!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.polygon),me(this.registeredEvents),this.state.polygon&&this.state.polygon.setMap(null))}render(){return null}}_w.contextType=ae;const kf={onBoundsChanged:"bounds_changed",onClick:"click",onDblClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDragStart:"dragstart",onMouseDown:"mousedown",onMouseMove:"mousemove",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onRightClick:"rightclick"},Ef={bounds(e,t){e.setBounds(t)},draggable(e,t){e.setDraggable(t)},editable(e,t){e.setEditable(t)},map(e,t){e.setMap(t)},options(e,t){e.setOptions(t)},visible(e,t){e.setVisible(t)}};function Rw({options:e,bounds:t,draggable:n,editable:r,visible:i,onDblClick:s,onDragEnd:o,onDragStart:l,onMouseDown:a,onMouseMove:c,onMouseOut:d,onMouseOver:f,onMouseUp:g,onRightClick:x,onClick:w,onDrag:S,onBoundsChanged:k,onLoad:h,onUnmount:p}){const v=u.useContext(ae),[y,P]=u.useState(null),[b,M]=u.useState(null),[C,m]=u.useState(null),[I,B]=u.useState(null),[Q,G]=u.useState(null),[W,J]=u.useState(null),[ne,te]=u.useState(null),[O,F]=u.useState(null),[U,q]=u.useState(null),[$,_]=u.useState(null),[z,H]=u.useState(null),[T,A]=u.useState(null),[E,V]=u.useState(null);return u.useEffect(()=>{y!==null&&y.setMap(v)},[v]),u.useEffect(()=>{typeof e<"u"&&y!==null&&y.setOptions(e)},[y,e]),u.useEffect(()=>{typeof n<"u"&&y!==null&&y.setDraggable(n)},[y,n]),u.useEffect(()=>{typeof r<"u"&&y!==null&&y.setEditable(r)},[y,r]),u.useEffect(()=>{typeof i<"u"&&y!==null&&y.setVisible(i)},[y,i]),u.useEffect(()=>{typeof t<"u"&&y!==null&&y.setBounds(t)},[y,t]),u.useEffect(()=>{y&&s&&(b!==null&&google.maps.event.removeListener(b),M(google.maps.event.addListener(y,"dblclick",s)))},[s]),u.useEffect(()=>{y&&o&&(C!==null&&google.maps.event.removeListener(C),m(google.maps.event.addListener(y,"dragend",o)))},[o]),u.useEffect(()=>{y&&l&&(I!==null&&google.maps.event.removeListener(I),B(google.maps.event.addListener(y,"dragstart",l)))},[l]),u.useEffect(()=>{y&&a&&(Q!==null&&google.maps.event.removeListener(Q),G(google.maps.event.addListener(y,"mousedown",a)))},[a]),u.useEffect(()=>{y&&c&&(W!==null&&google.maps.event.removeListener(W),J(google.maps.event.addListener(y,"mousemove",c)))},[c]),u.useEffect(()=>{y&&d&&(ne!==null&&google.maps.event.removeListener(ne),te(google.maps.event.addListener(y,"mouseout",d)))},[d]),u.useEffect(()=>{y&&f&&(O!==null&&google.maps.event.removeListener(O),F(google.maps.event.addListener(y,"mouseover",f)))},[f]),u.useEffect(()=>{y&&g&&(U!==null&&google.maps.event.removeListener(U),q(google.maps.event.addListener(y,"mouseup",g)))},[g]),u.useEffect(()=>{y&&x&&($!==null&&google.maps.event.removeListener($),_(google.maps.event.addListener(y,"rightclick",x)))},[x]),u.useEffect(()=>{y&&w&&(z!==null&&google.maps.event.removeListener(z),H(google.maps.event.addListener(y,"click",w)))},[w]),u.useEffect(()=>{y&&S&&(T!==null&&google.maps.event.removeListener(T),A(google.maps.event.addListener(y,"drag",S)))},[S]),u.useEffect(()=>{y&&k&&(E!==null&&google.maps.event.removeListener(E),V(google.maps.event.addListener(y,"bounds_changed",k)))},[k]),u.useEffect(()=>{const j=new google.maps.Rectangle(Object.assign(Object.assign({},e||{}),{map:v}));return typeof i<"u"&&j.setVisible(i),typeof r<"u"&&j.setEditable(r),typeof n<"u"&&j.setDraggable(n),typeof t<"u"&&j.setBounds(t),s&&M(google.maps.event.addListener(j,"dblclick",s)),o&&m(google.maps.event.addListener(j,"dragend",o)),l&&B(google.maps.event.addListener(j,"dragstart",l)),a&&G(google.maps.event.addListener(j,"mousedown",a)),c&&J(google.maps.event.addListener(j,"mousemove",c)),d&&te(google.maps.event.addListener(j,"mouseout",d)),f&&F(google.maps.event.addListener(j,"mouseover",f)),g&&q(google.maps.event.addListener(j,"mouseup",g)),x&&_(google.maps.event.addListener(j,"rightclick",x)),w&&H(google.maps.event.addListener(j,"click",w)),S&&A(google.maps.event.addListener(j,"drag",S)),k&&V(google.maps.event.addListener(j,"bounds_changed",k)),P(j),h&&h(j),()=>{b!==null&&google.maps.event.removeListener(b),C!==null&&google.maps.event.removeListener(C),I!==null&&google.maps.event.removeListener(I),Q!==null&&google.maps.event.removeListener(Q),W!==null&&google.maps.event.removeListener(W),ne!==null&&google.maps.event.removeListener(ne),O!==null&&google.maps.event.removeListener(O),U!==null&&google.maps.event.removeListener(U),$!==null&&google.maps.event.removeListener($),z!==null&&google.maps.event.removeListener(z),T!==null&&google.maps.event.removeListener(T),E!==null&&google.maps.event.removeListener(E),p&&p(j),j.setMap(null)}},[]),null}u.memo(Rw);class $w extends u.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={rectangle:null},this.setRectangleCallback=()=>{this.state.rectangle!==null&&this.props.onLoad&&this.props.onLoad(this.state.rectangle)}}componentDidMount(){const t=new google.maps.Rectangle(Object.assign(Object.assign({},this.props.options||{}),{map:this.context}));this.registeredEvents=de({updaterMap:Ef,eventMap:kf,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{rectangle:t}},this.setRectangleCallback)}componentDidUpdate(t){this.state.rectangle!==null&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:Ef,eventMap:kf,prevProps:t,nextProps:this.props,instance:this.state.rectangle}))}componentWillUnmount(){this.state.rectangle!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.rectangle),me(this.registeredEvents),this.state.rectangle.setMap(null))}render(){return null}}$w.contextType=ae;const Cf={onCenterChanged:"center_changed",onRadiusChanged:"radius_changed",onClick:"click",onDblClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDragStart:"dragstart",onMouseDown:"mousedown",onMouseMove:"mousemove",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onRightClick:"rightclick"},bf={center(e,t){e.setCenter(t)},draggable(e,t){e.setDraggable(t)},editable(e,t){e.setEditable(t)},map(e,t){e.setMap(t)},options(e,t){e.setOptions(t)},radius(e,t){e.setRadius(t)},visible(e,t){e.setVisible(t)}},Nw={};function Aw({options:e,center:t,radius:n,draggable:r,editable:i,visible:s,onDblClick:o,onDragEnd:l,onDragStart:a,onMouseDown:c,onMouseMove:d,onMouseOut:f,onMouseOver:g,onMouseUp:x,onRightClick:w,onClick:S,onDrag:k,onCenterChanged:h,onRadiusChanged:p,onLoad:v,onUnmount:y}){const P=u.useContext(ae),[b,M]=u.useState(null),[C,m]=u.useState(null),[I,B]=u.useState(null),[Q,G]=u.useState(null),[W,J]=u.useState(null),[ne,te]=u.useState(null),[O,F]=u.useState(null),[U,q]=u.useState(null),[$,_]=u.useState(null),[z,H]=u.useState(null),[T,A]=u.useState(null),[E,V]=u.useState(null),[j,ee]=u.useState(null),[Y,oe]=u.useState(null);return u.useEffect(()=>{b!==null&&b.setMap(P)},[P]),u.useEffect(()=>{typeof e<"u"&&b!==null&&b.setOptions(e)},[b,e]),u.useEffect(()=>{typeof r<"u"&&b!==null&&b.setDraggable(r)},[b,r]),u.useEffect(()=>{typeof i<"u"&&b!==null&&b.setEditable(i)},[b,i]),u.useEffect(()=>{typeof s<"u"&&b!==null&&b.setVisible(s)},[b,s]),u.useEffect(()=>{typeof n=="number"&&b!==null&&b.setRadius(n)},[b,n]),u.useEffect(()=>{typeof t<"u"&&b!==null&&b.setCenter(t)},[b,t]),u.useEffect(()=>{b&&o&&(C!==null&&google.maps.event.removeListener(C),m(google.maps.event.addListener(b,"dblclick",o)))},[o]),u.useEffect(()=>{b&&l&&(I!==null&&google.maps.event.removeListener(I),B(google.maps.event.addListener(b,"dragend",l)))},[l]),u.useEffect(()=>{b&&a&&(Q!==null&&google.maps.event.removeListener(Q),G(google.maps.event.addListener(b,"dragstart",a)))},[a]),u.useEffect(()=>{b&&c&&(W!==null&&google.maps.event.removeListener(W),J(google.maps.event.addListener(b,"mousedown",c)))},[c]),u.useEffect(()=>{b&&d&&(ne!==null&&google.maps.event.removeListener(ne),te(google.maps.event.addListener(b,"mousemove",d)))},[d]),u.useEffect(()=>{b&&f&&(O!==null&&google.maps.event.removeListener(O),F(google.maps.event.addListener(b,"mouseout",f)))},[f]),u.useEffect(()=>{b&&g&&(U!==null&&google.maps.event.removeListener(U),q(google.maps.event.addListener(b,"mouseover",g)))},[g]),u.useEffect(()=>{b&&x&&($!==null&&google.maps.event.removeListener($),_(google.maps.event.addListener(b,"mouseup",x)))},[x]),u.useEffect(()=>{b&&w&&(z!==null&&google.maps.event.removeListener(z),H(google.maps.event.addListener(b,"rightclick",w)))},[w]),u.useEffect(()=>{b&&S&&(T!==null&&google.maps.event.removeListener(T),A(google.maps.event.addListener(b,"click",S)))},[S]),u.useEffect(()=>{b&&k&&(E!==null&&google.maps.event.removeListener(E),V(google.maps.event.addListener(b,"drag",k)))},[k]),u.useEffect(()=>{b&&h&&(j!==null&&google.maps.event.removeListener(j),ee(google.maps.event.addListener(b,"center_changed",h)))},[S]),u.useEffect(()=>{b&&p&&(Y!==null&&google.maps.event.removeListener(Y),oe(google.maps.event.addListener(b,"radius_changed",p)))},[p]),u.useEffect(()=>{const X=new google.maps.Circle(Object.assign(Object.assign({},e||Nw),{map:P}));return typeof n=="number"&&X.setRadius(n),typeof t<"u"&&X.setCenter(t),typeof n=="number"&&X.setRadius(n),typeof s<"u"&&X.setVisible(s),typeof i<"u"&&X.setEditable(i),typeof r<"u"&&X.setDraggable(r),o&&m(google.maps.event.addListener(X,"dblclick",o)),l&&B(google.maps.event.addListener(X,"dragend",l)),a&&G(google.maps.event.addListener(X,"dragstart",a)),c&&J(google.maps.event.addListener(X,"mousedown",c)),d&&te(google.maps.event.addListener(X,"mousemove",d)),f&&F(google.maps.event.addListener(X,"mouseout",f)),g&&q(google.maps.event.addListener(X,"mouseover",g)),x&&_(google.maps.event.addListener(X,"mouseup",x)),w&&H(google.maps.event.addListener(X,"rightclick",w)),S&&A(google.maps.event.addListener(X,"click",S)),k&&V(google.maps.event.addListener(X,"drag",k)),h&&ee(google.maps.event.addListener(X,"center_changed",h)),p&&oe(google.maps.event.addListener(X,"radius_changed",p)),M(X),v&&v(X),()=>{C!==null&&google.maps.event.removeListener(C),I!==null&&google.maps.event.removeListener(I),Q!==null&&google.maps.event.removeListener(Q),W!==null&&google.maps.event.removeListener(W),ne!==null&&google.maps.event.removeListener(ne),O!==null&&google.maps.event.removeListener(O),U!==null&&google.maps.event.removeListener(U),$!==null&&google.maps.event.removeListener($),z!==null&&google.maps.event.removeListener(z),T!==null&&google.maps.event.removeListener(T),j!==null&&google.maps.event.removeListener(j),Y!==null&&google.maps.event.removeListener(Y),y&&y(X),X.setMap(null)}},[]),null}u.memo(Aw);class Bw extends u.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={circle:null},this.setCircleCallback=()=>{this.state.circle!==null&&this.props.onLoad&&this.props.onLoad(this.state.circle)}}componentDidMount(){const t=new google.maps.Circle(Object.assign(Object.assign({},this.props.options||{}),{map:this.context}));this.registeredEvents=de({updaterMap:bf,eventMap:Cf,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{circle:t}},this.setCircleCallback)}componentDidUpdate(t){this.state.circle!==null&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:bf,eventMap:Cf,prevProps:t,nextProps:this.props,instance:this.state.circle}))}componentWillUnmount(){this.state.circle!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.circle),me(this.registeredEvents),this.state.circle&&this.state.circle.setMap(null))}render(){return null}}Bw.contextType=ae;const Mf={onClick:"click",onDblClick:"dblclick",onMouseDown:"mousedown",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onRightClick:"rightclick",onAddFeature:"addfeature",onRemoveFeature:"removefeature",onRemoveProperty:"removeproperty",onSetGeometry:"setgeometry",onSetProperty:"setproperty"},Pf={add(e,t){e.add(t)},addgeojson(e,t,n){e.addGeoJson(t,n)},contains(e,t){e.contains(t)},foreach(e,t){e.forEach(t)},loadgeojson(e,t,n,r){e.loadGeoJson(t,n,r)},overridestyle(e,t,n){e.overrideStyle(t,n)},remove(e,t){e.remove(t)},revertstyle(e,t){e.revertStyle(t)},controlposition(e,t){e.setControlPosition(t)},controls(e,t){e.setControls(t)},drawingmode(e,t){e.setDrawingMode(t)},map(e,t){e.setMap(t)},style(e,t){e.setStyle(t)},togeojson(e,t){e.toGeoJson(t)}};function Dw({options:e,onClick:t,onDblClick:n,onMouseDown:r,onMouseMove:i,onMouseOut:s,onMouseOver:o,onMouseUp:l,onRightClick:a,onAddFeature:c,onRemoveFeature:d,onRemoveProperty:f,onSetGeometry:g,onSetProperty:x,onLoad:w,onUnmount:S}){const k=u.useContext(ae),[h,p]=u.useState(null),[v,y]=u.useState(null),[P,b]=u.useState(null),[M,C]=u.useState(null),[m,I]=u.useState(null),[B,Q]=u.useState(null),[G,W]=u.useState(null),[J,ne]=u.useState(null),[te,O]=u.useState(null),[F,U]=u.useState(null),[q,$]=u.useState(null),[_,z]=u.useState(null),[H,T]=u.useState(null),[A,E]=u.useState(null);return u.useEffect(()=>{h!==null&&h.setMap(k)},[k]),u.useEffect(()=>{h&&n&&(v!==null&&google.maps.event.removeListener(v),y(google.maps.event.addListener(h,"dblclick",n)))},[n]),u.useEffect(()=>{h&&r&&(P!==null&&google.maps.event.removeListener(P),b(google.maps.event.addListener(h,"mousedown",r)))},[r]),u.useEffect(()=>{h&&i&&(M!==null&&google.maps.event.removeListener(M),C(google.maps.event.addListener(h,"mousemove",i)))},[i]),u.useEffect(()=>{h&&s&&(m!==null&&google.maps.event.removeListener(m),I(google.maps.event.addListener(h,"mouseout",s)))},[s]),u.useEffect(()=>{h&&o&&(B!==null&&google.maps.event.removeListener(B),Q(google.maps.event.addListener(h,"mouseover",o)))},[o]),u.useEffect(()=>{h&&l&&(G!==null&&google.maps.event.removeListener(G),W(google.maps.event.addListener(h,"mouseup",l)))},[l]),u.useEffect(()=>{h&&a&&(J!==null&&google.maps.event.removeListener(J),ne(google.maps.event.addListener(h,"rightclick",a)))},[a]),u.useEffect(()=>{h&&t&&(te!==null&&google.maps.event.removeListener(te),O(google.maps.event.addListener(h,"click",t)))},[t]),u.useEffect(()=>{h&&c&&(F!==null&&google.maps.event.removeListener(F),U(google.maps.event.addListener(h,"addfeature",c)))},[c]),u.useEffect(()=>{h&&d&&(q!==null&&google.maps.event.removeListener(q),$(google.maps.event.addListener(h,"removefeature",d)))},[d]),u.useEffect(()=>{h&&f&&(_!==null&&google.maps.event.removeListener(_),z(google.maps.event.addListener(h,"removeproperty",f)))},[f]),u.useEffect(()=>{h&&g&&(H!==null&&google.maps.event.removeListener(H),T(google.maps.event.addListener(h,"setgeometry",g)))},[g]),u.useEffect(()=>{h&&x&&(A!==null&&google.maps.event.removeListener(A),E(google.maps.event.addListener(h,"setproperty",x)))},[x]),u.useEffect(()=>{if(k!==null){const V=new google.maps.Data(Object.assign(Object.assign({},e||{}),{map:k}));n&&y(google.maps.event.addListener(V,"dblclick",n)),r&&b(google.maps.event.addListener(V,"mousedown",r)),i&&C(google.maps.event.addListener(V,"mousemove",i)),s&&I(google.maps.event.addListener(V,"mouseout",s)),o&&Q(google.maps.event.addListener(V,"mouseover",o)),l&&W(google.maps.event.addListener(V,"mouseup",l)),a&&ne(google.maps.event.addListener(V,"rightclick",a)),t&&O(google.maps.event.addListener(V,"click",t)),c&&U(google.maps.event.addListener(V,"addfeature",c)),d&&$(google.maps.event.addListener(V,"removefeature",d)),f&&z(google.maps.event.addListener(V,"removeproperty",f)),g&&T(google.maps.event.addListener(V,"setgeometry",g)),x&&E(google.maps.event.addListener(V,"setproperty",x)),p(V),w&&w(V)}return()=>{h&&(v!==null&&google.maps.event.removeListener(v),P!==null&&google.maps.event.removeListener(P),M!==null&&google.maps.event.removeListener(M),m!==null&&google.maps.event.removeListener(m),B!==null&&google.maps.event.removeListener(B),G!==null&&google.maps.event.removeListener(G),J!==null&&google.maps.event.removeListener(J),te!==null&&google.maps.event.removeListener(te),F!==null&&google.maps.event.removeListener(F),q!==null&&google.maps.event.removeListener(q),_!==null&&google.maps.event.removeListener(_),H!==null&&google.maps.event.removeListener(H),A!==null&&google.maps.event.removeListener(A),S&&S(h),h.setMap(null))}},[]),null}u.memo(Dw);class Fw extends u.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={data:null},this.setDataCallback=()=>{this.state.data!==null&&this.props.onLoad&&this.props.onLoad(this.state.data)}}componentDidMount(){if(this.context!==null){const t=new google.maps.Data(Object.assign(Object.assign({},this.props.options||{}),{map:this.context}));this.registeredEvents=de({updaterMap:Pf,eventMap:Mf,prevProps:{},nextProps:this.props,instance:t}),this.setState(()=>({data:t}),this.setDataCallback)}}componentDidUpdate(t){this.state.data!==null&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:Pf,eventMap:Mf,prevProps:t,nextProps:this.props,instance:this.state.data}))}componentWillUnmount(){this.state.data!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.data),me(this.registeredEvents),this.state.data&&this.state.data.setMap(null))}render(){return null}}Fw.contextType=ae;const Tf={onClick:"click",onDefaultViewportChanged:"defaultviewport_changed",onStatusChanged:"status_changed"},zf={options(e,t){e.setOptions(t)},url(e,t){e.setUrl(t)},zIndex(e,t){e.setZIndex(t)}};class jw extends u.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={kmlLayer:null},this.setKmlLayerCallback=()=>{this.state.kmlLayer!==null&&this.props.onLoad&&this.props.onLoad(this.state.kmlLayer)}}componentDidMount(){const t=new google.maps.KmlLayer(Object.assign(Object.assign({},this.props.options),{map:this.context}));this.registeredEvents=de({updaterMap:zf,eventMap:Tf,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{kmlLayer:t}},this.setKmlLayerCallback)}componentDidUpdate(t){this.state.kmlLayer!==null&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:zf,eventMap:Tf,prevProps:t,nextProps:this.props,instance:this.state.kmlLayer}))}componentWillUnmount(){this.state.kmlLayer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.kmlLayer),me(this.registeredEvents),this.state.kmlLayer.setMap(null))}render(){return null}}jw.contextType=ae;function Jh(e,t){return typeof t=="function"?t(e.offsetWidth,e.offsetHeight):{x:0,y:0}}function Uw(e,t){return new t(e.lat,e.lng)}function Ww(e,t){return new t(new google.maps.LatLng(e.ne.lat,e.ne.lng),new google.maps.LatLng(e.sw.lat,e.sw.lng))}function Hw(e,t,n){return e instanceof t?e:n(e,t)}function Vw(e,t,n){return e instanceof t?e:n(e,t)}function Gw(e,t,n){const r=e&&e.fromLatLngToDivPixel(n.getNorthEast()),i=e&&e.fromLatLngToDivPixel(n.getSouthWest());return r&&i?{left:`${i.x+t.x}px`,top:`${r.y+t.y}px`,width:`${r.x-i.x-t.x}px`,height:`${i.y-r.y-t.y}px`}:{left:"-9999px",top:"-9999px"}}function Qw(e,t,n){const r=e&&e.fromLatLngToDivPixel(n);if(r){const{x:i,y:s}=r;return{left:`${i+t.x}px`,top:`${s+t.y}px`}}return{left:"-9999px",top:"-9999px"}}function Xh(e,t,n,r){return n!==void 0?Gw(e,t,Vw(n,google.maps.LatLngBounds,Ww)):Qw(e,t,Hw(r,google.maps.LatLng,Uw))}function Zw(e,t){return e.left===t.left&&e.top===t.top&&e.width===t.height&&e.height===t.height}function Yw(e,t,n,r,i){class s extends google.maps.OverlayView{constructor(l,a,c,d){super(),this.container=l,this.pane=a,this.position=c,this.bounds=d}onAdd(){var l;const a=(l=this.getPanes())===null||l===void 0?void 0:l[this.pane];a==null||a.appendChild(this.container)}draw(){const l=this.getProjection(),a=Object.assign({},this.container?Jh(this.container,i):{x:0,y:0}),c=Xh(l,a,this.bounds,this.position);for(const[d,f]of Object.entries(c))this.container.style[d]=f}onRemove(){this.container.parentNode!==null&&this.container.parentNode.removeChild(this.container)}}return new s(e,t,n,r)}function If(e){return e?(e instanceof google.maps.LatLng?e:new google.maps.LatLng(e.lat,e.lng))+"":""}function Of(e){return e?(e instanceof google.maps.LatLngBounds?e:new google.maps.LatLngBounds(new google.maps.LatLng(e.south,e.east),new google.maps.LatLng(e.north,e.west)))+"":""}function Kw({position:e,bounds:t,mapPaneName:n,zIndex:r,onLoad:i,onUnmount:s,getPixelPositionOffset:o,children:l}){const a=u.useContext(ae),c=u.useMemo(()=>{const f=document.createElement("div");return f.style.position="absolute",f},[]),d=u.useMemo(()=>Yw(c,n,e,t,o),[c,n,e,t]);return u.useEffect(()=>(i==null||i(d),d==null||d.setMap(a),()=>{s==null||s(d),d==null||d.setMap(null)}),[a,d]),u.useEffect(()=>{c.style.zIndex=`${r}`},[r,c]),Yt.createPortal(l,c)}u.memo(Kw);class Tr extends u.PureComponent{constructor(t){super(t),this.state={paneEl:null,containerStyle:{position:"absolute"}},this.updatePane=()=>{const r=this.props.mapPaneName,i=this.overlayView.getPanes();Ne(!!r,"OverlayView requires props.mapPaneName but got %s",r),i?this.setState({paneEl:i[r]}):this.setState({paneEl:null})},this.onAdd=()=>{var r,i;this.updatePane(),(i=(r=this.props).onLoad)===null||i===void 0||i.call(r,this.overlayView)},this.onPositionElement=()=>{const r=this.overlayView.getProjection(),i=Object.assign({x:0,y:0},this.containerRef.current?Jh(this.containerRef.current,this.props.getPixelPositionOffset):{}),s=Xh(r,i,this.props.bounds,this.props.position),{left:o,top:l,width:a,height:c}=this.state.containerStyle;Zw(s,{left:o,top:l,width:a,height:c})||this.setState({containerStyle:Object.assign(Object.assign({},s),{position:"absolute"})})},this.draw=()=>{this.onPositionElement()},this.onRemove=()=>{var r,i;this.setState(()=>({paneEl:null})),(i=(r=this.props).onUnmount)===null||i===void 0||i.call(r,this.overlayView)},this.containerRef=u.createRef();const n=new google.maps.OverlayView;n.onAdd=this.onAdd,n.draw=this.draw,n.onRemove=this.onRemove,this.overlayView=n}componentDidMount(){this.overlayView.setMap(this.context)}componentDidUpdate(t){const n=If(t.position),r=If(this.props.position),i=Of(t.bounds),s=Of(this.props.bounds);(n!==r||i!==s)&&this.overlayView.draw(),t.mapPaneName!==this.props.mapPaneName&&this.updatePane()}componentWillUnmount(){this.overlayView.setMap(null)}render(){const t=this.state.paneEl;return t?Yt.createPortal(L("div",Object.assign({ref:this.containerRef,style:this.state.containerStyle},{children:u.Children.only(this.props.children)})),t):null}}Tr.FLOAT_PANE="floatPane";Tr.MAP_PANE="mapPane";Tr.MARKER_LAYER="markerLayer";Tr.OVERLAY_LAYER="overlayLayer";Tr.OVERLAY_MOUSE_TARGET="overlayMouseTarget";Tr.contextType=ae;function Jw(){}const _f={onDblClick:"dblclick",onClick:"click"},Rf={opacity(e,t){e.setOpacity(t)}};function Xw({url:e,bounds:t,options:n,visible:r}){const i=u.useContext(ae),s=new google.maps.LatLngBounds(new google.maps.LatLng(t.south,t.west),new google.maps.LatLng(t.north,t.east)),o=u.useMemo(()=>new google.maps.GroundOverlay(e,s,Object.assign({},n)),[]);return u.useEffect(()=>{o!==null&&o.setMap(i)},[i]),u.useEffect(()=>{typeof e<"u"&&o!==null&&(o.set("url",e),o.setMap(i))},[o,e]),u.useEffect(()=>{typeof r<"u"&&o!==null&&o.setOpacity(r?1:0)},[o,r]),u.useEffect(()=>{const l=new google.maps.LatLngBounds(new google.maps.LatLng(t.south,t.west),new google.maps.LatLng(t.north,t.east));typeof t<"u"&&o!==null&&(o.set("bounds",l),o.setMap(i))},[o,t]),null}u.memo(Xw);class qh extends u.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={groundOverlay:null},this.setGroundOverlayCallback=()=>{this.state.groundOverlay!==null&&this.props.onLoad&&this.props.onLoad(this.state.groundOverlay)}}componentDidMount(){Ne(!!this.props.url||!!this.props.bounds,"For GroundOverlay, url and bounds are passed in to constructor and are immutable after instantiated. This is the behavior of Google Maps JavaScript API v3 ( See https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay) Hence, use the corresponding two props provided by `react-google-maps-api`, url and bounds. In some cases, you'll need the GroundOverlay component to reflect the changes of url and bounds. You can leverage the React's key property to remount the component. Typically, just `key={url}` would serve your need. See https://github.com/tomchentw/react-google-maps/issues/655");const t=new google.maps.GroundOverlay(this.props.url,this.props.bounds,Object.assign(Object.assign({},this.props.options),{map:this.context}));this.registeredEvents=de({updaterMap:Rf,eventMap:_f,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{groundOverlay:t}},this.setGroundOverlayCallback)}componentDidUpdate(t){this.state.groundOverlay!==null&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:Rf,eventMap:_f,prevProps:t,nextProps:this.props,instance:this.state.groundOverlay}))}componentWillUnmount(){this.state.groundOverlay&&(this.props.onUnmount&&this.props.onUnmount(this.state.groundOverlay),this.state.groundOverlay.setMap(null))}render(){return null}}qh.defaultProps={onLoad:Jw};qh.contextType=ae;const $f={},Nf={data(e,t){e.setData(t)},map(e,t){e.setMap(t)},options(e,t){e.setOptions(t)}};function qw({data:e,onLoad:t,onUnmount:n,options:r}){const i=u.useContext(ae),[s,o]=u.useState(null);return u.useEffect(()=>{google.maps.visualization||Ne(!!google.maps.visualization,'Did you include prop libraries={["visualization"]} in useJsApiScript? %s',google.maps.visualization)},[]),u.useEffect(()=>{Ne(!!e,"data property is required in HeatmapLayer %s",e)},[e]),u.useEffect(()=>{s!==null&&s.setMap(i)},[i]),u.useEffect(()=>{r&&s!==null&&s.setOptions(r)},[s,r]),u.useEffect(()=>{const l=new google.maps.visualization.HeatmapLayer(Object.assign(Object.assign({},r||{}),{data:e,map:i}));return o(l),t&&t(l),()=>{s!==null&&(n&&n(s),s.setMap(null))}},[]),null}u.memo(qw);class eS extends u.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={heatmapLayer:null},this.setHeatmapLayerCallback=()=>{this.state.heatmapLayer!==null&&this.props.onLoad&&this.props.onLoad(this.state.heatmapLayer)}}componentDidMount(){Ne(!!google.maps.visualization,'Did you include prop libraries={["visualization"]} to <LoadScript />? %s',google.maps.visualization),Ne(!!this.props.data,"data property is required in HeatmapLayer %s",this.props.data);const t=new google.maps.visualization.HeatmapLayer(Object.assign(Object.assign({},this.props.options||{}),{data:this.props.data,map:this.context}));this.registeredEvents=de({updaterMap:Nf,eventMap:$f,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{heatmapLayer:t}},this.setHeatmapLayerCallback)}componentDidUpdate(t){me(this.registeredEvents),this.registeredEvents=de({updaterMap:Nf,eventMap:$f,prevProps:t,nextProps:this.props,instance:this.state.heatmapLayer})}componentWillUnmount(){this.state.heatmapLayer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.heatmapLayer),me(this.registeredEvents),this.state.heatmapLayer.setMap(null))}render(){return null}}eS.contextType=ae;const Af={onCloseClick:"closeclick",onPanoChanged:"pano_changed",onPositionChanged:"position_changed",onPovChanged:"pov_changed",onResize:"resize",onStatusChanged:"status_changed",onVisibleChanged:"visible_changed",onZoomChanged:"zoom_changed"},Bf={register(e,t,n){e.registerPanoProvider(t,n)},links(e,t){e.setLinks(t)},motionTracking(e,t){e.setMotionTracking(t)},options(e,t){e.setOptions(t)},pano(e,t){e.setPano(t)},position(e,t){e.setPosition(t)},pov(e,t){e.setPov(t)},visible(e,t){e.setVisible(t)},zoom(e,t){e.setZoom(t)}};class tS extends u.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={streetViewPanorama:null},this.setStreetViewPanoramaCallback=()=>{this.state.streetViewPanorama!==null&&this.props.onLoad&&this.props.onLoad(this.state.streetViewPanorama)}}componentDidMount(){const t=this.context.getStreetView();this.registeredEvents=de({updaterMap:Bf,eventMap:Af,prevProps:{},nextProps:this.props,instance:t}),this.setState(()=>({streetViewPanorama:t}),this.setStreetViewPanoramaCallback)}componentDidUpdate(t){this.state.streetViewPanorama!==null&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:Bf,eventMap:Af,prevProps:t,nextProps:this.props,instance:this.state.streetViewPanorama}))}componentWillUnmount(){this.state.streetViewPanorama!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.streetViewPanorama),me(this.registeredEvents),this.state.streetViewPanorama.setVisible(!1))}render(){return null}}tS.contextType=ae;class nS extends u.PureComponent{constructor(){super(...arguments),this.state={streetViewService:null},this.setStreetViewServiceCallback=()=>{this.state.streetViewService!==null&&this.props.onLoad&&this.props.onLoad(this.state.streetViewService)}}componentDidMount(){const t=new google.maps.StreetViewService;this.setState(function(){return{streetViewService:t}},this.setStreetViewServiceCallback)}componentWillUnmount(){this.state.streetViewService!==null&&this.props.onUnmount&&this.props.onUnmount(this.state.streetViewService)}render(){return null}}nS.contextType=ae;const Df={onDirectionsChanged:"directions_changed"},Ff={directions(e,t){e.setDirections(t)},map(e,t){e.setMap(t)},options(e,t){e.setOptions(t)},panel(e,t){e.setPanel(t)},routeIndex(e,t){e.setRouteIndex(t)}};class rS extends u.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.state={directionsRenderer:null},this.setDirectionsRendererCallback=()=>{this.state.directionsRenderer!==null&&(this.state.directionsRenderer.setMap(this.context),this.props.onLoad&&this.props.onLoad(this.state.directionsRenderer))}}componentDidMount(){const t=new google.maps.DirectionsRenderer(this.props.options);this.registeredEvents=de({updaterMap:Ff,eventMap:Df,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{directionsRenderer:t}},this.setDirectionsRendererCallback)}componentDidUpdate(t){this.state.directionsRenderer!==null&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:Ff,eventMap:Df,prevProps:t,nextProps:this.props,instance:this.state.directionsRenderer}))}componentWillUnmount(){this.state.directionsRenderer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.directionsRenderer),me(this.registeredEvents),this.state.directionsRenderer&&this.state.directionsRenderer.setMap(null))}render(){return L(mo,{})}}rS.contextType=ae;const jf={onPlacesChanged:"places_changed"},Uf={bounds(e,t){e.setBounds(t)}};class Ya extends u.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.containerElement=u.createRef(),this.state={searchBox:null},this.setSearchBoxCallback=()=>{this.state.searchBox!==null&&this.props.onLoad&&this.props.onLoad(this.state.searchBox)}}componentDidMount(){if(Ne(!!google.maps.places,'You need to provide libraries={["places"]} prop to <LoadScript /> component %s',google.maps.places),this.containerElement!==null&&this.containerElement.current!==null){const t=this.containerElement.current.querySelector("input");if(t!==null){const n=new google.maps.places.SearchBox(t,this.props.options);this.registeredEvents=de({updaterMap:Uf,eventMap:jf,prevProps:{},nextProps:this.props,instance:n}),this.setState(function(){return{searchBox:n}},this.setSearchBoxCallback)}}}componentDidUpdate(t){this.state.searchBox!==null&&(me(this.registeredEvents),this.registeredEvents=de({updaterMap:Uf,eventMap:jf,prevProps:t,nextProps:this.props,instance:this.state.searchBox}))}componentWillUnmount(){this.state.searchBox!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.searchBox),me(this.registeredEvents))}render(){return L("div",Object.assign({ref:this.containerElement},{children:u.Children.only(this.props.children)}))}}Ya.contextType=ae;const Wf={onPlaceChanged:"place_changed"},Hf={bounds(e,t){e.setBounds(t)},restrictions(e,t){e.setComponentRestrictions(t)},fields(e,t){e.setFields(t)},options(e,t){e.setOptions(t)},types(e,t){e.setTypes(t)}};class eg extends u.PureComponent{constructor(){super(...arguments),this.registeredEvents=[],this.containerElement=u.createRef(),this.state={autocomplete:null},this.setAutocompleteCallback=()=>{this.state.autocomplete!==null&&this.props.onLoad&&this.props.onLoad(this.state.autocomplete)}}componentDidMount(){Ne(!!google.maps.places,'You need to provide libraries={["places"]} prop to <LoadScript /> component %s',google.maps.places);const t=this.containerElement.current.querySelector("input");if(t){const n=new google.maps.places.Autocomplete(t,this.props.options);this.registeredEvents=de({updaterMap:Hf,eventMap:Wf,prevProps:{},nextProps:this.props,instance:n}),this.setState(()=>({autocomplete:n}),this.setAutocompleteCallback)}}componentDidUpdate(t){me(this.registeredEvents),this.registeredEvents=de({updaterMap:Hf,eventMap:Wf,prevProps:t,nextProps:this.props,instance:this.state.autocomplete})}componentWillUnmount(){this.state.autocomplete!==null&&me(this.registeredEvents)}render(){return L("div",Object.assign({ref:this.containerElement,className:this.props.className},{children:u.Children.only(this.props.children)}))}}eg.defaultProps={className:""};eg.contextType=ae;const iS=ue.div`
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
`,Vf=ue.div`
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
`,sS=ue.div`
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
`;function tg(e,t){return function(){return e.apply(t,arguments)}}const{toString:oS}=Object.prototype,{getPrototypeOf:lc}=Object,Xo=(e=>t=>{const n=oS.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ut=e=>(e=e.toLowerCase(),t=>Xo(t)===e),qo=e=>t=>typeof t===e,{isArray:zr}=Array,bi=qo("undefined");function lS(e){return e!==null&&!bi(e)&&e.constructor!==null&&!bi(e.constructor)&&xt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const ng=Ut("ArrayBuffer");function aS(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&ng(e.buffer),t}const uS=qo("string"),xt=qo("function"),rg=qo("number"),el=e=>e!==null&&typeof e=="object",cS=e=>e===!0||e===!1,Ts=e=>{if(Xo(e)!=="object")return!1;const t=lc(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},dS=Ut("Date"),fS=Ut("File"),pS=Ut("Blob"),mS=Ut("FileList"),hS=e=>el(e)&&xt(e.pipe),gS=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||xt(e.append)&&((t=Xo(e))==="formdata"||t==="object"&&xt(e.toString)&&e.toString()==="[object FormData]"))},vS=Ut("URLSearchParams"),yS=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function $i(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),zr(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),o=s.length;let l;for(r=0;r<o;r++)l=s[r],t.call(null,e[l],l,e)}}function ig(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const sg=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),og=e=>!bi(e)&&e!==sg;function Ka(){const{caseless:e}=og(this)&&this||{},t={},n=(r,i)=>{const s=e&&ig(t,i)||i;Ts(t[s])&&Ts(r)?t[s]=Ka(t[s],r):Ts(r)?t[s]=Ka({},r):zr(r)?t[s]=r.slice():t[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&$i(arguments[r],n);return t}const xS=(e,t,n,{allOwnKeys:r}={})=>($i(t,(i,s)=>{n&&xt(i)?e[s]=tg(i,n):e[s]=i},{allOwnKeys:r}),e),wS=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),SS=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},LS=(e,t,n,r)=>{let i,s,o;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],(!r||r(o,e,t))&&!l[o]&&(t[o]=e[o],l[o]=!0);e=n!==!1&&lc(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kS=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},ES=e=>{if(!e)return null;if(zr(e))return e;let t=e.length;if(!rg(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},CS=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&lc(Uint8Array)),bS=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const s=i.value;t.call(e,s[0],s[1])}},MS=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},PS=Ut("HTMLFormElement"),TS=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Gf=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),zS=Ut("RegExp"),lg=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};$i(n,(i,s)=>{t(i,s,e)!==!1&&(r[s]=i)}),Object.defineProperties(e,r)},IS=e=>{lg(e,(t,n)=>{if(xt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(xt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},OS=(e,t)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return zr(e)?r(e):r(String(e).split(t)),n},_S=()=>{},RS=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Nl="abcdefghijklmnopqrstuvwxyz",Qf="0123456789",ag={DIGIT:Qf,ALPHA:Nl,ALPHA_DIGIT:Nl+Nl.toUpperCase()+Qf},$S=(e=16,t=ag.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function NS(e){return!!(e&&xt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const AS=e=>{const t=new Array(10),n=(r,i)=>{if(el(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const s=zr(r)?[]:{};return $i(r,(o,l)=>{const a=n(o,i+1);!bi(a)&&(s[l]=a)}),t[i]=void 0,s}}return r};return n(e,0)},BS=Ut("AsyncFunction"),DS=e=>e&&(el(e)||xt(e))&&xt(e.then)&&xt(e.catch),R={isArray:zr,isArrayBuffer:ng,isBuffer:lS,isFormData:gS,isArrayBufferView:aS,isString:uS,isNumber:rg,isBoolean:cS,isObject:el,isPlainObject:Ts,isUndefined:bi,isDate:dS,isFile:fS,isBlob:pS,isRegExp:zS,isFunction:xt,isStream:hS,isURLSearchParams:vS,isTypedArray:CS,isFileList:mS,forEach:$i,merge:Ka,extend:xS,trim:yS,stripBOM:wS,inherits:SS,toFlatObject:LS,kindOf:Xo,kindOfTest:Ut,endsWith:kS,toArray:ES,forEachEntry:bS,matchAll:MS,isHTMLForm:PS,hasOwnProperty:Gf,hasOwnProp:Gf,reduceDescriptors:lg,freezeMethods:IS,toObjectSet:OS,toCamelCase:TS,noop:_S,toFiniteNumber:RS,findKey:ig,global:sg,isContextDefined:og,ALPHABET:ag,generateString:$S,isSpecCompliantForm:NS,toJSONObject:AS,isAsyncFn:BS,isThenable:DS};function he(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}R.inherits(he,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:R.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ug=he.prototype,cg={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{cg[e]={value:e}});Object.defineProperties(he,cg);Object.defineProperty(ug,"isAxiosError",{value:!0});he.from=(e,t,n,r,i,s)=>{const o=Object.create(ug);return R.toFlatObject(e,o,function(a){return a!==Error.prototype},l=>l!=="isAxiosError"),he.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};const FS=null;function Ja(e){return R.isPlainObject(e)||R.isArray(e)}function dg(e){return R.endsWith(e,"[]")?e.slice(0,-2):e}function Zf(e,t,n){return e?e.concat(t).map(function(i,s){return i=dg(i),!n&&s?"["+i+"]":i}).join(n?".":""):t}function jS(e){return R.isArray(e)&&!e.some(Ja)}const US=R.toFlatObject(R,{},null,function(t){return/^is[A-Z]/.test(t)});function tl(e,t,n){if(!R.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=R.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(S,k){return!R.isUndefined(k[S])});const r=n.metaTokens,i=n.visitor||d,s=n.dots,o=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&R.isSpecCompliantForm(t);if(!R.isFunction(i))throw new TypeError("visitor must be a function");function c(w){if(w===null)return"";if(R.isDate(w))return w.toISOString();if(!a&&R.isBlob(w))throw new he("Blob is not supported. Use a Buffer instead.");return R.isArrayBuffer(w)||R.isTypedArray(w)?a&&typeof Blob=="function"?new Blob([w]):Buffer.from(w):w}function d(w,S,k){let h=w;if(w&&!k&&typeof w=="object"){if(R.endsWith(S,"{}"))S=r?S:S.slice(0,-2),w=JSON.stringify(w);else if(R.isArray(w)&&jS(w)||(R.isFileList(w)||R.endsWith(S,"[]"))&&(h=R.toArray(w)))return S=dg(S),h.forEach(function(v,y){!(R.isUndefined(v)||v===null)&&t.append(o===!0?Zf([S],y,s):o===null?S:S+"[]",c(v))}),!1}return Ja(w)?!0:(t.append(Zf(k,S,s),c(w)),!1)}const f=[],g=Object.assign(US,{defaultVisitor:d,convertValue:c,isVisitable:Ja});function x(w,S){if(!R.isUndefined(w)){if(f.indexOf(w)!==-1)throw Error("Circular reference detected in "+S.join("."));f.push(w),R.forEach(w,function(h,p){(!(R.isUndefined(h)||h===null)&&i.call(t,h,R.isString(p)?p.trim():p,S,g))===!0&&x(h,S?S.concat(p):[p])}),f.pop()}}if(!R.isObject(e))throw new TypeError("data must be an object");return x(e),t}function Yf(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ac(e,t){this._pairs=[],e&&tl(e,this,t)}const fg=ac.prototype;fg.append=function(t,n){this._pairs.push([t,n])};fg.toString=function(t){const n=t?function(r){return t.call(this,r,Yf)}:Yf;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function WS(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function pg(e,t,n){if(!t)return e;const r=n&&n.encode||WS,i=n&&n.serialize;let s;if(i?s=i(t,n):s=R.isURLSearchParams(t)?t.toString():new ac(t,n).toString(r),s){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class HS{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){R.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Kf=HS,mg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},VS=typeof URLSearchParams<"u"?URLSearchParams:ac,GS=typeof FormData<"u"?FormData:null,QS=typeof Blob<"u"?Blob:null,ZS=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),YS=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Dt={isBrowser:!0,classes:{URLSearchParams:VS,FormData:GS,Blob:QS},isStandardBrowserEnv:ZS,isStandardBrowserWebWorkerEnv:YS,protocols:["http","https","file","blob","url","data"]};function KS(e,t){return tl(e,new Dt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return Dt.isNode&&R.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function JS(e){return R.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function XS(e){const t={},n=Object.keys(e);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],t[s]=e[s];return t}function hg(e){function t(n,r,i,s){let o=n[s++];const l=Number.isFinite(+o),a=s>=n.length;return o=!o&&R.isArray(i)?i.length:o,a?(R.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!l):((!i[o]||!R.isObject(i[o]))&&(i[o]=[]),t(n,r,i[o],s)&&R.isArray(i[o])&&(i[o]=XS(i[o])),!l)}if(R.isFormData(e)&&R.isFunction(e.entries)){const n={};return R.forEachEntry(e,(r,i)=>{t(JS(r),i,n,0)}),n}return null}const qS={"Content-Type":void 0};function eL(e,t,n){if(R.isString(e))try{return(t||JSON.parse)(e),R.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const nl={transitional:mg,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=R.isObject(t);if(s&&R.isHTMLForm(t)&&(t=new FormData(t)),R.isFormData(t))return i&&i?JSON.stringify(hg(t)):t;if(R.isArrayBuffer(t)||R.isBuffer(t)||R.isStream(t)||R.isFile(t)||R.isBlob(t))return t;if(R.isArrayBufferView(t))return t.buffer;if(R.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return KS(t,this.formSerializer).toString();if((l=R.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return tl(l?{"files[]":t}:t,a&&new a,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),eL(t)):t}],transformResponse:[function(t){const n=this.transitional||nl.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&R.isString(t)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(l){if(o)throw l.name==="SyntaxError"?he.from(l,he.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Dt.classes.FormData,Blob:Dt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};R.forEach(["delete","get","head"],function(t){nl.headers[t]={}});R.forEach(["post","put","patch"],function(t){nl.headers[t]=R.merge(qS)});const uc=nl,tL=R.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),nL=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||t[n]&&tL[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Jf=Symbol("internals");function Ur(e){return e&&String(e).trim().toLowerCase()}function zs(e){return e===!1||e==null?e:R.isArray(e)?e.map(zs):String(e)}function rL(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const iL=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Al(e,t,n,r,i){if(R.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!R.isString(t)){if(R.isString(r))return t.indexOf(r)!==-1;if(R.isRegExp(r))return r.test(t)}}function sL(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function oL(e,t){const n=R.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,s,o){return this[r].call(this,t,i,s,o)},configurable:!0})})}class rl{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function s(l,a,c){const d=Ur(a);if(!d)throw new Error("header name must be a non-empty string");const f=R.findKey(i,d);(!f||i[f]===void 0||c===!0||c===void 0&&i[f]!==!1)&&(i[f||a]=zs(l))}const o=(l,a)=>R.forEach(l,(c,d)=>s(c,d,a));return R.isPlainObject(t)||t instanceof this.constructor?o(t,n):R.isString(t)&&(t=t.trim())&&!iL(t)?o(nL(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=Ur(t),t){const r=R.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return rL(i);if(R.isFunction(n))return n.call(this,i,r);if(R.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Ur(t),t){const r=R.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Al(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function s(o){if(o=Ur(o),o){const l=R.findKey(r,o);l&&(!n||Al(r,r[l],l,n))&&(delete r[l],i=!0)}}return R.isArray(t)?t.forEach(s):s(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!t||Al(this,this[s],s,t,!0))&&(delete this[s],i=!0)}return i}normalize(t){const n=this,r={};return R.forEach(this,(i,s)=>{const o=R.findKey(r,s);if(o){n[o]=zs(i),delete n[s];return}const l=t?sL(s):String(s).trim();l!==s&&delete n[s],n[l]=zs(i),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return R.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&R.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Jf]=this[Jf]={accessors:{}}).accessors,i=this.prototype;function s(o){const l=Ur(o);r[l]||(oL(i,o),r[l]=!0)}return R.isArray(t)?t.forEach(s):s(t),this}}rl.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);R.freezeMethods(rl.prototype);R.freezeMethods(rl);const Zt=rl;function Bl(e,t){const n=this||uc,r=t||n,i=Zt.from(r.headers);let s=r.data;return R.forEach(e,function(l){s=l.call(n,s,i.normalize(),t?t.status:void 0)}),i.normalize(),s}function gg(e){return!!(e&&e.__CANCEL__)}function Ni(e,t,n){he.call(this,e??"canceled",he.ERR_CANCELED,t,n),this.name="CanceledError"}R.inherits(Ni,he,{__CANCEL__:!0});function lL(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new he("Request failed with status code "+n.status,[he.ERR_BAD_REQUEST,he.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const aL=Dt.isStandardBrowserEnv?function(){return{write:function(n,r,i,s,o,l){const a=[];a.push(n+"="+encodeURIComponent(r)),R.isNumber(i)&&a.push("expires="+new Date(i).toGMTString()),R.isString(s)&&a.push("path="+s),R.isString(o)&&a.push("domain="+o),l===!0&&a.push("secure"),document.cookie=a.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function uL(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function cL(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function vg(e,t){return e&&!uL(t)?cL(e,t):t}const dL=Dt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const l=R.isString(o)?i(o):o;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function fL(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function pL(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,s=0,o;return t=t!==void 0?t:1e3,function(a){const c=Date.now(),d=r[s];o||(o=c),n[i]=a,r[i]=c;let f=s,g=0;for(;f!==i;)g+=n[f++],f=f%e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),c-o<t)return;const x=d&&c-d;return x?Math.round(g*1e3/x):void 0}}function Xf(e,t){let n=0;const r=pL(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,l=s-n,a=r(l),c=s<=o;n=s;const d={loaded:s,total:o,progress:o?s/o:void 0,bytes:l,rate:a||void 0,estimated:a&&o&&c?(o-s)/a:void 0,event:i};d[t?"download":"upload"]=!0,e(d)}}const mL=typeof XMLHttpRequest<"u",hL=mL&&function(e){return new Promise(function(n,r){let i=e.data;const s=Zt.from(e.headers).normalize(),o=e.responseType;let l;function a(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}R.isFormData(i)&&(Dt.isStandardBrowserEnv||Dt.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const x=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(x+":"+w))}const d=vg(e.baseURL,e.url);c.open(e.method.toUpperCase(),pg(d,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function f(){if(!c)return;const x=Zt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),S={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:x,config:e,request:c};lL(function(h){n(h),a()},function(h){r(h),a()},S),c=null}if("onloadend"in c?c.onloadend=f:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(f)},c.onabort=function(){c&&(r(new he("Request aborted",he.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new he("Network Error",he.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let w=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const S=e.transitional||mg;e.timeoutErrorMessage&&(w=e.timeoutErrorMessage),r(new he(w,S.clarifyTimeoutError?he.ETIMEDOUT:he.ECONNABORTED,e,c)),c=null},Dt.isStandardBrowserEnv){const x=(e.withCredentials||dL(d))&&e.xsrfCookieName&&aL.read(e.xsrfCookieName);x&&s.set(e.xsrfHeaderName,x)}i===void 0&&s.setContentType(null),"setRequestHeader"in c&&R.forEach(s.toJSON(),function(w,S){c.setRequestHeader(S,w)}),R.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),o&&o!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",Xf(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Xf(e.onUploadProgress)),(e.cancelToken||e.signal)&&(l=x=>{c&&(r(!x||x.type?new Ni(null,e,c):x),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l)));const g=fL(d);if(g&&Dt.protocols.indexOf(g)===-1){r(new he("Unsupported protocol "+g+":",he.ERR_BAD_REQUEST,e));return}c.send(i||null)})},Is={http:FS,xhr:hL};R.forEach(Is,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const gL={getAdapter:e=>{e=R.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=R.isString(n)?Is[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new he(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(R.hasOwnProp(Is,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!R.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Is};function Dl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ni(null,e)}function qf(e){return Dl(e),e.headers=Zt.from(e.headers),e.data=Bl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),gL.getAdapter(e.adapter||uc.adapter)(e).then(function(r){return Dl(e),r.data=Bl.call(e,e.transformResponse,r),r.headers=Zt.from(r.headers),r},function(r){return gg(r)||(Dl(e),r&&r.response&&(r.response.data=Bl.call(e,e.transformResponse,r.response),r.response.headers=Zt.from(r.response.headers))),Promise.reject(r)})}const ep=e=>e instanceof Zt?e.toJSON():e;function kr(e,t){t=t||{};const n={};function r(c,d,f){return R.isPlainObject(c)&&R.isPlainObject(d)?R.merge.call({caseless:f},c,d):R.isPlainObject(d)?R.merge({},d):R.isArray(d)?d.slice():d}function i(c,d,f){if(R.isUndefined(d)){if(!R.isUndefined(c))return r(void 0,c,f)}else return r(c,d,f)}function s(c,d){if(!R.isUndefined(d))return r(void 0,d)}function o(c,d){if(R.isUndefined(d)){if(!R.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function l(c,d,f){if(f in t)return r(c,d);if(f in e)return r(void 0,c)}const a={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(c,d)=>i(ep(c),ep(d),!0)};return R.forEach(Object.keys(Object.assign({},e,t)),function(d){const f=a[d]||i,g=f(e[d],t[d],d);R.isUndefined(g)&&f!==l||(n[d]=g)}),n}const yg="1.4.0",cc={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{cc[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const tp={};cc.transitional=function(t,n,r){function i(s,o){return"[Axios v"+yg+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,l)=>{if(t===!1)throw new he(i(o," has been removed"+(n?" in "+n:"")),he.ERR_DEPRECATED);return n&&!tp[o]&&(tp[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,o,l):!0}};function vL(e,t,n){if(typeof e!="object")throw new he("options must be an object",he.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const s=r[i],o=t[s];if(o){const l=e[s],a=l===void 0||o(l,s,e);if(a!==!0)throw new he("option "+s+" must be "+a,he.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new he("Unknown option "+s,he.ERR_BAD_OPTION)}}const Xa={assertOptions:vL,validators:cc},rn=Xa.validators;class fo{constructor(t){this.defaults=t,this.interceptors={request:new Kf,response:new Kf}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=kr(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&Xa.assertOptions(r,{silentJSONParsing:rn.transitional(rn.boolean),forcedJSONParsing:rn.transitional(rn.boolean),clarifyTimeoutError:rn.transitional(rn.boolean)},!1),i!=null&&(R.isFunction(i)?n.paramsSerializer={serialize:i}:Xa.assertOptions(i,{encode:rn.function,serialize:rn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=s&&R.merge(s.common,s[n.method]),o&&R.forEach(["delete","get","head","post","put","patch","common"],w=>{delete s[w]}),n.headers=Zt.concat(o,s);const l=[];let a=!0;this.interceptors.request.forEach(function(S){typeof S.runWhen=="function"&&S.runWhen(n)===!1||(a=a&&S.synchronous,l.unshift(S.fulfilled,S.rejected))});const c=[];this.interceptors.response.forEach(function(S){c.push(S.fulfilled,S.rejected)});let d,f=0,g;if(!a){const w=[qf.bind(this),void 0];for(w.unshift.apply(w,l),w.push.apply(w,c),g=w.length,d=Promise.resolve(n);f<g;)d=d.then(w[f++],w[f++]);return d}g=l.length;let x=n;for(f=0;f<g;){const w=l[f++],S=l[f++];try{x=w(x)}catch(k){S.call(this,k);break}}try{d=qf.call(this,x)}catch(w){return Promise.reject(w)}for(f=0,g=c.length;f<g;)d=d.then(c[f++],c[f++]);return d}getUri(t){t=kr(this.defaults,t);const n=vg(t.baseURL,t.url);return pg(n,t.params,t.paramsSerializer)}}R.forEach(["delete","get","head","options"],function(t){fo.prototype[t]=function(n,r){return this.request(kr(r||{},{method:t,url:n,data:(r||{}).data}))}});R.forEach(["post","put","patch"],function(t){function n(r){return function(s,o,l){return this.request(kr(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}fo.prototype[t]=n(),fo.prototype[t+"Form"]=n(!0)});const Os=fo;class dc{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(l=>{r.subscribe(l),s=l}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},t(function(s,o,l){r.reason||(r.reason=new Ni(s,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new dc(function(i){t=i}),cancel:t}}}const yL=dc;function xL(e){return function(n){return e.apply(null,n)}}function wL(e){return R.isObject(e)&&e.isAxiosError===!0}const qa={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(qa).forEach(([e,t])=>{qa[t]=e});const SL=qa;function xg(e){const t=new Os(e),n=tg(Os.prototype.request,t);return R.extend(n,Os.prototype,t,{allOwnKeys:!0}),R.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return xg(kr(e,i))},n}const Ae=xg(uc);Ae.Axios=Os;Ae.CanceledError=Ni;Ae.CancelToken=yL;Ae.isCancel=gg;Ae.VERSION=yg;Ae.toFormData=tl;Ae.AxiosError=he;Ae.Cancel=Ae.CanceledError;Ae.all=function(t){return Promise.all(t)};Ae.spread=xL;Ae.isAxiosError=wL;Ae.mergeConfig=kr;Ae.AxiosHeaders=Zt;Ae.formToJSON=e=>hg(R.isHTMLForm(e)?new FormData(e):e);Ae.HttpStatusCode=SL;Ae.default=Ae;const np=Ae,LL=["places"];function kL(){const e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],t="AIzaSyCMxXMWybG7ywOpr1efLceIwNEkUbLsOVY",n=u.useRef(),r=u.useRef(),i=u.useRef(""),s=u.useRef(""),o=u.useRef(""),l=u.useRef(""),a=u.useRef(),c=u.useRef(),d=u.useRef(),f=u.useRef(),[g,x]=u.useState(""),[w,S]=u.useState(""),[k,h]=u.useState("Location 1 date and time"),[p,v]=u.useState("Location 1 time zone"),[y,P]=u.useState("Location 2 date and time"),[b,M]=u.useState("Location 2 time zone"),[C,m]=u.useState("Difference"),{isLoaded:I}=Gh({googleMapsApiKey:t,libraries:LL,language:"en"});async function B(G){let W;G==1?[W]=n.current.getPlaces():G==2&&([W]=r.current.getPlaces());const J=new Date,ne=J.getTime()/1e3+J.getTimezoneOffset()*60;if(W){if(G==1){i.current=W.geometry.location.lat(),s.current=W.geometry.location.lng(),x(W.formatted_address);const te=`${i.current}, ${s.current}`,O=await np.get("https://maps.googleapis.com/maps/api/timezone/json?location="+te+"&timestamp="+ne+"&key="+t);console.log(O.data),Q(G,O.data)}else if(G==2){o.current=W.geometry.location.lat(),l.current=W.geometry.location.lng(),S(W.formatted_address);const te=`${o.current}, ${l.current}`,O=await np.get("https://maps.googleapis.com/maps/api/timezone/json?location="+te+"&timestamp="+ne+"&key="+t);Q(G,O.data)}}}function Q(G,W){const J=W.dstOffset*1e3+W.rawOffset*1e3,ne=new Date,te=ne.getTime()+ne.getTimezoneOffset()*6e4,O=new Date(te+J);if(G==1?(clearInterval(d.current),h(`${O.getMonth()+1}/${O.getDate()}/${O.getFullYear()} ${O.toLocaleTimeString()} ${e[O.getDay()]}`),d.current=setInterval(()=>{O.setSeconds(O.getSeconds()+1),h(`${O.getMonth()+1}/${O.getDate()}/${O.getFullYear()} ${O.toLocaleTimeString()} ${e[O.getDay()]}`)},1e3),v(W.timeZoneName),a.current=J):G==2&&(clearInterval(f.current),P(`${O.getMonth()+1}/${O.getDate()}/${O.getFullYear()} ${O.toLocaleTimeString()} ${e[O.getDay()]}`),f.current=setInterval(()=>{O.setSeconds(O.getSeconds()+1),P(`${O.getMonth()+1}/${O.getDate()}/${O.getFullYear()} ${O.toLocaleTimeString()} ${e[O.getDay()]}`)},1e3),M(W.timeZoneName),c.current=J),a.current!=null&c.current!=null){const F=(c.current-a.current)/36e5;F>=2?m(`${F} hours`):m(`${F} hour`)}}return N(iS,{children:[L(Ri,{}),I&&N("div",{id:"LocationsWrapper",children:[N(Vf,{id:"Location_1",children:[L("label",{htmlFor:"Location_1",children:"Location 1"}),L(Ya,{onLoad:G=>n.current=G,onPlacesChanged:()=>B(1),children:L("input",{type:"text",placeholder:"Type a place"})})]}),N(Vf,{id:"Location_2",children:[L("label",{htmlFor:"Location_2",children:"Location 2"}),L(Ya,{onLoad:G=>r.current=G,onPlacesChanged:()=>B(2),children:L("input",{type:"text",placeholder:"Type a place"})})]})]}),N(sS,{children:[L("span",{id:"Label",children:"Difference"}),N("div",{id:"Result_1",children:[L("span",{children:g!=""?g:"Location 1"}),L("span",{children:k}),L("span",{children:p})]}),L("div",{id:"Difference",children:L("span",{children:C})}),N("div",{id:"Result_2",children:[L("span",{children:w!=""?w:"Location 2"}),L("span",{children:y}),L("span",{children:b})]})]})]})}const EL=ue.div`
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
`,CL=ue.div`
    
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
`,bL=ue.div`

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
`,ML=ue.div`
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
`,PL=ue.div`
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
`;function rp(e){return Ot({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}}]})(e)}function ip(e){return Ot({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}}]})(e)}function TL(e){return Ot({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M17.59 18L19 16.59 14.42 12 19 7.41 17.59 6l-6 6z"}},{tag:"path",attr:{d:"M11 18l1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z"}}]})(e)}function zL(e){return Ot({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M6.41 6L5 7.41 9.58 12 5 16.59 6.41 18l6-6z"}},{tag:"path",attr:{d:"M13 6l-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z"}}]})(e)}function IL(e){return Ot({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M9.37 5.51A7.35 7.35 0 009.1 7.5c0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0112 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"}}]})(e)}function OL(e){return Ot({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"}}]})(e)}function _L(){const e=new Date,t={year:e.getFullYear(),month:e.getMonth()},n=["January","February","March","April","May","June","July","August","September","October","November","December"];let r=[],i=0;const{recurringEvents:s,setSelectedDay:o}=It(),l=u.useRef(null),[a,c]=u.useState(t.year),[d,f]=u.useState(t.month),[g,x]=u.useState([]);function w(M){const C=M%7;let m=Math.floor(M/4);M%4==0&&m--;const I=m%7;let B=C+I-1;return B>6&&(B-=7),B}function S(){let M=0;return d==0||d==2||d==4||d==6||d==7||d==9||d==11?M=31:d==1?a%4==0?M=29:M=28:M=30,M}function k(M,C){C=="Year"?a+M>=1&a+M<=9999&&(c(m=>m+M),h()):C=="Month"&&(d==0&M==-1&a>1?(f(11),c(m=>m-1)):d==11&M==1&a<9999?(f(0),c(m=>m+1)):!(d==0&M==-1&a==1)&!(d==11&M==1&a==9999)&&f(m=>m+M))}function h(){const M=S();r=[];let C;const m=w(a);switch(d){case 0:C=m;break;case 1:C=m+3;break;case 2:a%4==0?C=m+4:C=m+3;break;case 3:a%4==0?C=m:C=m+6;break;case 4:a%4==0?C=m+2:C=m+1;break;case 5:a%4==0?C=m+5:C=m+4;break;case 6:a%4==0?C=m:C=m+6;break;case 7:a%4==0?C=m+3:C=m+2;break;case 8:a%4==0?C=m+6:C=m+5;break;case 9:a%4==0?C=m+1:C=m;break;case 10:a%4==0?C=m+4:C=m+3;break;case 11:a%4==0?C=m+6:C=m+5;break}C>6&&(C-=7);for(let I=0;I<C;I++)r.push({events:[],id:"blank"});for(let I=0;I<M;I++)r.push({events:[],id:I+1});v()}function p(M,C){if(M=="month"){let m=(a-1)*31536e3;switch(d){case 0:break;case 1:m+=31*86400;break;case 2:a%4==0?m+=60*86400:m+=59*86400;break;case 3:a%4==0?m+=91*86400:m+=90*86400;break;case 4:a%4==0?m+=121*86400:m+=120*86400;break;case 5:a%4==0?m+=152*86400:m+=151*86400;break;case 6:a%4==0?m+=182*86400:m+=181*86400;break;case 7:a%4==0?m+=213*86400:m+=212*86400;break;case 8:a%4==0?m+=244*86400:m+=243*86400;break;case 9:a%4==0?m+=274*86400:m+=273*86400;break;case 10:a%4==0?m+=305*86400:m+=304*86400;break;case 11:a%4==0?m+=335*86400:m+=334*86400;break}let I=Math.floor(a/4);a%4==0&&I--;const B=I*86400;i=m+B}if(M=="event"){let m=(C.date.getFullYear()-1)*31536e3;switch(C.date.getMonth()){case 0:break;case 1:m+=31*86400;break;case 2:C.date.getFullYear()%4==0?m+=60*86400:m+=59*86400;break;case 3:C.date.getFullYear()%4==0?m+=91*86400:m+=90*86400;break;case 4:C.date.getFullYear()%4==0?m+=121*86400:m+=120*86400;break;case 5:C.date.getFullYear()%4==0?m+=152*86400:m+=151*86400;break;case 6:C.date.getFullYear()%4==0?m+=182*86400:m+=181*86400;break;case 7:C.date.getFullYear()%4==0?m+=213*86400:m+=212*86400;break;case 8:C.date.getFullYear()%4==0?m+=244*86400:m+=243*86400;break;case 9:C.date.getFullYear()%4==0?m+=274*86400:m+=273*86400;break;case 10:C.date.getFullYear()%4==0?m+=305*86400:m+=304*86400;break;case 11:C.date.getFullYear()%4==0?m+=335*86400:m+=334*86400;break}let I=Math.floor(C.date.getFullYear()/4);C.date.getFullYear()%4==0&&I--;const B=I*86400;return m+B+C.second+C.minute*60+C.hour*3600+(C.date.getDate()-1)*86400}}function v(){let M=r;p("month",null),s&&s.map(C=>{if(!y(88,C)){x(r);return}M.map(m=>{y(m,C)&&m.events.push(C)})}),x(M)}function y(M,C){if(M==88)return C.date.getFullYear()>a?!1:!(!(a>C.date.getFullYear())&&C.date.getMonth()>d);if(M.id=="blank")return;const m=C.secondPeriod+C.minutePeriod*60+C.hourPeriod*3600+C.dayPeriod*86400+C.monthPeriod*2592e3+C.yearPeriod*31536e3,I=p("event",C),B=(M.id-1)*86400,G=i+B-I,W=G%m,J=m-W;return G<-86399?!1:J<86400||W==0||G<=0}function P(M){if(l.current){const m=document.getElementById(l.current.day);if(m&&m.classList.remove("selected"),l.current.day==M.id){l.current=null,o(null);return}}document.getElementById(M.id).classList.add("selected"),l.current={day:M.id,month:d,year:a},o({day:M.id,month:d,year:a,events:M.events})}function b(M,C){let m="";return M&&(m=m+"hasEvents"),l.current&&C==l.current.day&&d==l.current.month&&a==l.current.year&&(m=m+" selected"),m}return u.useEffect(()=>{},[s]),u.useEffect(()=>{h()},[d,a,s]),N(EL,{children:[N(CL,{children:[L("button",{onClick:()=>k(-5,"Year"),children:L(TL,{})}),L("button",{onClick:()=>k(-1,"Year"),children:L(rp,{})}),L("span",{children:a}),L("button",{onClick:()=>k(1,"Year"),children:L(ip,{})}),L("button",{onClick:()=>k(5,"Year"),children:L(zL,{})})]}),N(bL,{children:[L("button",{onClick:()=>k(-1,"Month"),children:L(rp,{})}),L("span",{children:n[d]}),L("button",{onClick:()=>k(1,"Month"),children:L(ip,{})})]}),N(ML,{children:[L("span",{children:"Sun"}),L("span",{children:"Mon"}),L("span",{children:"Tue"}),L("span",{children:"Wed"}),L("span",{children:"Thu"}),L("span",{children:"Fri"}),L("span",{children:"Sat"})]}),L(PL,{children:g.map((M,C)=>M.id!="blank"?L("button",{className:b(M.events[0],M.id),onClick:()=>P(M),id:M.id,selected:!0,children:M.id},C):L("button",{disabled:!0},C))})]})}const RL=ue.div`
    padding-bottom: 6rem;
    background: ${({theme:e})=>e.upwardsGradient};
    min-height: 100vh;

    header{
        display: flex;

        a{
            width: max-content;
        }
    }

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
`,$L=ue.ul`
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
`,NL=ue.div`
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
`,AL=ue.div`
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
`,BL=ue.li`
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

            span{
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

            span{
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

            span{
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
`,$t=ue.div`
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

    input:disabled{
        opacity: 1;
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
`;function DL({eventData:e}){const{setRecurringEvents:t}=It();function n(){t(r=>r.filter(i=>i.id!=e.id))}return N(BL,{children:[N("div",{className:"LeftSide",children:[L("button",{className:"Delete",onClick:()=>n(),children:L(Fh,{})}),L("span",{className:"Name",children:e.name}),N("div",{className:"DurationWrapper",children:[L("span",{children:"Starting time:"}),N("div",{className:"FieldsWrapper",children:[N($t,{children:[L("label",{htmlFor:"hours",children:"Hours"}),L("input",{type:"text",id:"hours",disabled:!0,value:e.hour})]}),N($t,{children:[L("label",{htmlFor:"hours",children:"Minutes"}),L("input",{type:"text",id:"hours",disabled:!0,value:e.minute})]}),N($t,{children:[L("label",{htmlFor:"hours",children:"Seconds"}),L("input",{type:"text",id:"hours",disabled:!0,value:e.second})]})]}),L("div",{className:"DateWrapper",children:N($t,{children:[L("label",{children:"Initial Date"}),L("span",{children:e.date.toLocaleDateString()})]})})]})]}),N("div",{className:"RightSide",children:[L("span",{children:"Frequency:"}),N("div",{className:"FieldsWrapper",children:[N($t,{children:[L("label",{htmlFor:"yearPeriod",children:"Years"}),L("input",{type:"text",id:"yearPeriod",disabled:!0,value:e.yearPeriod})]}),N($t,{children:[L("label",{htmlFor:"monthPeriod",children:"Months"}),L("input",{type:"text",id:"monthPeriod",disabled:!0,value:e.monthPeriod})]}),N($t,{children:[L("label",{htmlFor:"dayPeriod",children:"Days"}),L("input",{type:"text",id:"dayPeriod",disabled:!0,value:e.dayPeriod})]}),N($t,{children:[L("label",{htmlFor:"hourPeriod",children:"Hours"}),L("input",{type:"text",id:"hourPeriod",disabled:!0,value:e.hourPeriod})]}),N($t,{children:[L("label",{htmlFor:"minutePeriod",children:"Minutes"}),L("input",{type:"text",id:"minutePeriod",disabled:!0,value:e.minutePeriod})]}),N($t,{children:[L("label",{htmlFor:"secondPeriod",children:"Seconds"}),L("input",{type:"text",id:"secondPeriod",disabled:!0,value:e.secondPeriod})]})]})]})]})}const FL=ue.li`
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
`,Nt=ue.div`
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
`;function jL({}){const{setRecurringEvents:e}=It(),[t,n]=u.useState(""),[r,i]=u.useState(""),[s,o]=u.useState(""),[l,a]=u.useState(""),[c,d]=u.useState(""),[f,g]=u.useState(""),[x,w]=u.useState(""),[S,k]=u.useState(""),[h,p]=u.useState(""),[v,y]=u.useState(""),[P,b]=u.useState("");function M(m,I){if(!(m>=9007199254740991))switch(I){case"yearPeriod":m!=""&&!isNaN(parseInt(m))&&parseInt(m)<10001&&g(parseInt(m)),m==""&&g(0);break;case"monthPeriod":m!=""&&!isNaN(parseInt(m))&&parseInt(m)<12&&w(parseInt(m)),m==""&&w(0);break;case"dayPeriod":m!=""&&!isNaN(parseInt(m))&&parseInt(m)<31&&k(parseInt(m)),m==""&&k(0);break;case"hour":case"hourPeriod":m!=""&&!isNaN(parseInt(m))&&parseInt(m)<24&&(I=="hour"?i(parseInt(m)):p(parseInt(m))),I=="hour"?m==""&&i(0):m==""&&p(0);break;case"minute":case"minutePeriod":m!=""&&!isNaN(parseInt(m))&&parseInt(m)<60&&(I=="minute"?o(parseInt(m)):y(parseInt(m))),I=="minute"?m==""&&o(0):m==""&&y(0);break;case"second":case"secondPeriod":m!=""&&!isNaN(parseInt(m))&&parseInt(m)<60&&(I=="second"?a(parseInt(m)):b(parseInt(m))),I=="second"?m==""&&a(0):m==""&&b(0);break}}function C(){const m={name:t,hour:r,minute:s,second:l,date:new Date(`${c}T00:00:00`),yearPeriod:f,monthPeriod:x,dayPeriod:S,hourPeriod:h,minutePeriod:v,secondPeriod:P,id:Date.now()};if(!(m.yearPeriod==""&&m.monthPeriod==""&&m.dayPeriod==""&&m.hourPeriod==""&&m.minutePeriod==""&&m.secondPeriod=="")){if(m.hour==""&&(m.hour=0),m.minute==""&&(m.minute=0),m.second==""&&(m.second=0),m.yearPeriod==""&&(m.yearPeriod=0),m.monthPeriod==""&&(m.monthPeriod=0),m.dayPeriod==""&&(m.dayPeriod=0),m.hourPeriod==""&&(m.hourPeriod=0),m.minutePeriod==""&&(m.minutePeriod=0),m.secondPeriod==""&&(m.secondPeriod=0),!c){const I=new Date;m.date=I}m.yearPeriod==0&&m.monthPeriod==0&&m.dayPeriod==0&&m.hourPeriod==0&&m.minutePeriod==0&&m.secondPeriod<30&&!confirm("Time periods can crash your browser if you try to see the events of the day. If you dont select any day, you will be fine.")||(e(I=>[m,...I]),n(""),i(""),o(""),a(""),d(""),g(""),w(""),k(""),p(""),y(""),b(""))}}return N(FL,{children:[N("div",{id:"LeftSide",children:[L("button",{className:"Add",onClick:()=>C(),children:L(jh,{})}),N("div",{className:"Name",children:[L("label",{htmlFor:"Name",children:"New event name"}),L("input",{type:"text",id:"Name",value:t,onChange:m=>n(m.target.value),autoComplete:"off"})]}),N("div",{className:"DurationWrapper",children:[L("span",{children:"Starting time:"}),N("div",{className:"FieldsWrapper",children:[N(Nt,{children:[L("label",{htmlFor:"hours",children:"Hour"}),L("input",{type:"text",id:"hours",value:r,onChange:m=>M(m.target.value,"hour"),autoComplete:"off"})]}),N(Nt,{children:[L("label",{htmlFor:"minutes",children:"Minute"}),L("input",{type:"text",id:"minutes",value:s,onChange:m=>M(m.target.value,"minute"),autoComplete:"off"})]}),N(Nt,{children:[L("label",{htmlFor:"seconds",children:"Second"}),L("input",{type:"text",id:"seconds",value:l,onChange:m=>M(m.target.value,"second"),autoComplete:"off"})]})]}),L("div",{className:"DateWrapper",children:N(Nt,{children:[L("label",{htmlFor:"date",children:"Initial Date"}),L("input",{type:"date",id:"date",value:c,onChange:m=>d(m.target.value),autoComplete:"off"})]})})]})]}),N("div",{id:"RightSide",children:[L("span",{children:"Frequency:"}),N("div",{className:"FieldsWrapper",children:[N(Nt,{children:[L("label",{htmlFor:"yearPeriod",children:"Years"}),L("input",{type:"text",id:"yearPeriod",value:f,onChange:m=>M(m.target.value,"yearPeriod")})]}),N(Nt,{children:[L("label",{htmlFor:"monthPeriod",children:"Months"}),L("input",{type:"text",id:"monthPeriod",value:x,onChange:m=>M(m.target.value,"monthPeriod")})]}),N(Nt,{children:[L("label",{htmlFor:"dayPeriod",children:"Days"}),L("input",{type:"text",id:"dayPeriod",value:S,onChange:m=>M(m.target.value,"dayPeriod")})]}),N(Nt,{children:[L("label",{htmlFor:"hourPeriod",children:"Hours"}),L("input",{type:"text",id:"hourPeriod",value:h,onChange:m=>M(m.target.value,"hourPeriod")})]}),N(Nt,{children:[L("label",{htmlFor:"minutePeriod",children:"Minutes"}),L("input",{type:"text",id:"minutePeriod",value:v,onChange:m=>M(m.target.value,"minutePeriod")})]}),N(Nt,{children:[L("label",{htmlFor:"secondPeriod",children:"Seconds"}),L("input",{type:"text",id:"secondPeriod",value:P,onChange:m=>M(m.target.value,"secondPeriod")})]})]})]})]})}const UL=ue.ul`
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
`,WL=ue.li`
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
`;function HL(){const{selectedDay:e,recurringEvents:t}=It(),[n,r]=u.useState([]);function i(l,a){if(l=="month"){let c=(e.year-1)*31536e3;switch(e.month){case 0:break;case 1:c+=31*86400;break;case 2:e.year%4==0?c+=60*86400:c+=59*86400;break;case 3:e.year%4==0?c+=91*86400:c+=90*86400;break;case 4:e.year%4==0?c+=121*86400:c+=120*86400;break;case 5:e.year%4==0?c+=152*86400:c+=151*86400;break;case 6:e.year%4==0?c+=182*86400:c+=181*86400;break;case 7:e.year%4==0?c+=213*86400:c+=212*86400;break;case 8:e.year%4==0?c+=244*86400:c+=243*86400;break;case 9:e.year%4==0?c+=274*86400:c+=273*86400;break;case 10:e.year%4==0?c+=305*86400:c+=304*86400;break;case 11:e.year%4==0?c+=335*86400:c+=334*86400;break}let d=Math.floor(e.year/4);e.year%4==0&&d--;const f=d*86400;return c+f}if(l=="event"){let c=(a.date.getFullYear()-1)*31536e3;switch(a.date.getMonth()){case 0:break;case 1:c+=31*86400;break;case 2:a.date.getFullYear()%4==0?c+=60*86400:c+=59*86400;break;case 3:a.date.getFullYear()%4==0?c+=91*86400:c+=90*86400;break;case 4:a.date.getFullYear()%4==0?c+=121*86400:c+=120*86400;break;case 5:a.date.getFullYear()%4==0?c+=152*86400:c+=151*86400;break;case 6:a.date.getFullYear()%4==0?c+=182*86400:c+=181*86400;break;case 7:a.date.getFullYear()%4==0?c+=213*86400:c+=212*86400;break;case 8:a.date.getFullYear()%4==0?c+=244*86400:c+=243*86400;break;case 9:a.date.getFullYear()%4==0?c+=274*86400:c+=273*86400;break;case 10:a.date.getFullYear()%4==0?c+=305*86400:c+=304*86400;break;case 11:a.date.getFullYear()%4==0?c+=335*86400:c+=334*86400;break}let d=Math.floor(a.date.getFullYear()/4);a.date.getFullYear()%4==0&&d--;const f=d*86400;return c+f+a.second+a.minute*60+a.hour*3600+(a.date.getDate()-1)*86400}}function s(l,a){const c=[],d=l.secondPeriod+l.minutePeriod*60+l.hourPeriod*3600+l.dayPeriod*86400+l.monthPeriod*2592e3+l.yearPeriod*31536e3,f=i("event",l),g=(e.day-1)*86400,k=(i("month",null)+g-f)%d;let p=d-k;for(k==0&&(p=0),k<0&&(p=-k);p<86400;){let v=(p%60).toString(),y=Math.floor(p/60).toString(),P=(y%60).toString(),b=Math.floor(y/60).toString();v.length==1&&(v="0"+v),P.length==1&&(P="0"+P),b.length==1&&(b="0"+b);const M={name:l.name,hour:b,minute:P,second:v};c.push(M),p+=d}a.push(...c)}function o(){const l=[];e.events.map(a=>s(a,l)),l.sort((a,c)=>{const d=parseInt(a.hour),f=parseInt(c.hour),g=parseInt(a.minute),x=parseInt(c.minute),w=parseInt(a.second),S=parseInt(c.second);return f>d||f>=d&&x>g||f>=d&&x>=g&&S>=w?-1:d>f||d>=f&&g>x||d>=f&&g>=x&&w>=S?1:0}),r(l)}return u.useEffect(()=>{o()},[e]),L(UL,{children:n[0]?n.map((l,a)=>N(WL,{children:[" ",`${l.name} at ${l.hour}:${l.minute}:${l.second}`," "]},a)):L("span",{children:"No events on this day"})})}function VL(){const{recurringEvents:e,selectedDay:t}=It();return N(RL,{children:[L(Ri,{}),N("div",{id:"CalendarWrapper",children:[L(_L,{}),N(NL,{children:[L("span",{children:"Events of the day"}),L(AL,{children:t?L(HL,{}):L("span",{children:"No day selected"})})]})]}),N($L,{children:[L("span",{children:"Recurring Events"}),L(jL,{}),e.map((n,r)=>L(DL,{eventData:n},r))]})]})}function GL(){return L(Y1,{children:N(H1,{children:[L(Zn,{path:"/ChronoSum/",element:L(rx,{})}),L(Zn,{path:"/ChronoSum/SimpleSum",element:L(vx,{})}),L(Zn,{path:"/ChronoSum/DurationSum",element:L(Cx,{})}),L(Zn,{path:"/ChronoSum/TimeDifference",element:L(kL,{})}),L(Zn,{path:"/ChronoSum/RecurrentEvents",element:L(VL,{})})]})})}const QL=ue.button`
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
`;function ZL(){const[e,t]=u.useState(Fr.dark);function n(){e==Fr.dark?t(Fr.light):t(Fr.dark)}return N(Qy,{theme:e,children:[L(Ky,{}),L(QL,{onClick:()=>n(),children:e==Fr.dark?L(IL,{}):L(OL,{})}),L(ux,{children:L(GL,{})})]})}jl.createRoot(document.getElementById("root")).render(L(Ye.StrictMode,{children:L(ZL,{})}));
