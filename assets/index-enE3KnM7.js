(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();var Ho={exports:{}},tr={},Qo={exports:{}},k={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kt=Symbol.for("react.element"),rc=Symbol.for("react.portal"),ic=Symbol.for("react.fragment"),lc=Symbol.for("react.strict_mode"),oc=Symbol.for("react.profiler"),ac=Symbol.for("react.provider"),uc=Symbol.for("react.context"),cc=Symbol.for("react.forward_ref"),dc=Symbol.for("react.suspense"),mc=Symbol.for("react.memo"),pc=Symbol.for("react.lazy"),Rl=Symbol.iterator;function Pc(e){return e===null||typeof e!="object"?null:(e=Rl&&e[Rl]||e["@@iterator"],typeof e=="function"?e:null)}var Wo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Go=Object.assign,Xo={};function ot(e,n,t){this.props=e,this.context=n,this.refs=Xo,this.updater=t||Wo}ot.prototype.isReactComponent={};ot.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ot.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ko(){}Ko.prototype=ot.prototype;function Bi(e,n,t){this.props=e,this.context=n,this.refs=Xo,this.updater=t||Wo}var _i=Bi.prototype=new Ko;_i.constructor=Bi;Go(_i,ot.prototype);_i.isPureReactComponent=!0;var Nl=Array.isArray,Jo=Object.prototype.hasOwnProperty,Vi={current:null},Yo={key:!0,ref:!0,__self:!0,__source:!0};function Zo(e,n,t){var s,r={},i=null,l=null;if(n!=null)for(s in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(i=""+n.key),n)Jo.call(n,s)&&!Yo.hasOwnProperty(s)&&(r[s]=n[s]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var a=Array(o),c=0;c<o;c++)a[c]=arguments[c+2];r.children=a}if(e&&e.defaultProps)for(s in o=e.defaultProps,o)r[s]===void 0&&(r[s]=o[s]);return{$$typeof:Kt,type:e,key:i,ref:l,props:r,_owner:Vi.current}}function gc(e,n){return{$$typeof:Kt,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function Ui(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kt}function fc(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var Il=/\/+/g;function br(e,n){return typeof e=="object"&&e!==null&&e.key!=null?fc(""+e.key):n.toString(36)}function Os(e,n,t,s,r){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Kt:case rc:l=!0}}if(l)return l=e,r=r(l),e=s===""?"."+br(l,0):s,Nl(r)?(t="",e!=null&&(t=e.replace(Il,"$&/")+"/"),Os(r,n,t,"",function(c){return c})):r!=null&&(Ui(r)&&(r=gc(r,t+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(Il,"$&/")+"/")+e)),n.push(r)),1;if(l=0,s=s===""?".":s+":",Nl(e))for(var o=0;o<e.length;o++){i=e[o];var a=s+br(i,o);l+=Os(i,n,t,a,r)}else if(a=Pc(e),typeof a=="function")for(e=a.call(e),o=0;!(i=e.next()).done;)i=i.value,a=s+br(i,o++),l+=Os(i,n,t,a,r);else if(i==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function ss(e,n,t){if(e==null)return e;var s=[],r=0;return Os(e,s,"","",function(i){return n.call(t,i,r++)}),s}function Ac(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},bs={transition:null},vc={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:bs,ReactCurrentOwner:Vi};function ea(){throw Error("act(...) is not supported in production builds of React.")}k.Children={map:ss,forEach:function(e,n,t){ss(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return ss(e,function(){n++}),n},toArray:function(e){return ss(e,function(n){return n})||[]},only:function(e){if(!Ui(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};k.Component=ot;k.Fragment=ic;k.Profiler=oc;k.PureComponent=Bi;k.StrictMode=lc;k.Suspense=dc;k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vc;k.act=ea;k.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=Go({},e.props),r=e.key,i=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(i=n.ref,l=Vi.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(a in n)Jo.call(n,a)&&!Yo.hasOwnProperty(a)&&(s[a]=n[a]===void 0&&o!==void 0?o[a]:n[a])}var a=arguments.length-2;if(a===1)s.children=t;else if(1<a){o=Array(a);for(var c=0;c<a;c++)o[c]=arguments[c+2];s.children=o}return{$$typeof:Kt,type:e.type,key:r,ref:i,props:s,_owner:l}};k.createContext=function(e){return e={$$typeof:uc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ac,_context:e},e.Consumer=e};k.createElement=Zo;k.createFactory=function(e){var n=Zo.bind(null,e);return n.type=e,n};k.createRef=function(){return{current:null}};k.forwardRef=function(e){return{$$typeof:cc,render:e}};k.isValidElement=Ui;k.lazy=function(e){return{$$typeof:pc,_payload:{_status:-1,_result:e},_init:Ac}};k.memo=function(e,n){return{$$typeof:mc,type:e,compare:n===void 0?null:n}};k.startTransition=function(e){var n=bs.transition;bs.transition={};try{e()}finally{bs.transition=n}};k.unstable_act=ea;k.useCallback=function(e,n){return ae.current.useCallback(e,n)};k.useContext=function(e){return ae.current.useContext(e)};k.useDebugValue=function(){};k.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};k.useEffect=function(e,n){return ae.current.useEffect(e,n)};k.useId=function(){return ae.current.useId()};k.useImperativeHandle=function(e,n,t){return ae.current.useImperativeHandle(e,n,t)};k.useInsertionEffect=function(e,n){return ae.current.useInsertionEffect(e,n)};k.useLayoutEffect=function(e,n){return ae.current.useLayoutEffect(e,n)};k.useMemo=function(e,n){return ae.current.useMemo(e,n)};k.useReducer=function(e,n,t){return ae.current.useReducer(e,n,t)};k.useRef=function(e){return ae.current.useRef(e)};k.useState=function(e){return ae.current.useState(e)};k.useSyncExternalStore=function(e,n,t){return ae.current.useSyncExternalStore(e,n,t)};k.useTransition=function(){return ae.current.useTransition()};k.version="18.3.1";Qo.exports=k;var De=Qo.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hc=De,Oc=Symbol.for("react.element"),bc=Symbol.for("react.fragment"),yc=Object.prototype.hasOwnProperty,qc=hc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sc={key:!0,ref:!0,__self:!0,__source:!0};function na(e,n,t){var s,r={},i=null,l=null;t!==void 0&&(i=""+t),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(l=n.ref);for(s in n)yc.call(n,s)&&!Sc.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps,n)r[s]===void 0&&(r[s]=n[s]);return{$$typeof:Oc,type:e,key:i,ref:l,props:r,_owner:qc.current}}tr.Fragment=bc;tr.jsx=na;tr.jsxs=na;Ho.exports=tr;var P=Ho.exports,Wr={},ta={exports:{}},he={},sa={exports:{}},ra={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(S,E){var C=S.length;S.push(E);e:for(;0<C;){var $=C-1>>>1,X=S[$];if(0<r(X,E))S[$]=E,S[C]=X,C=$;else break e}}function t(S){return S.length===0?null:S[0]}function s(S){if(S.length===0)return null;var E=S[0],C=S.pop();if(C!==E){S[0]=C;e:for(var $=0,X=S.length,ns=X>>>1;$<ns;){var vn=2*($+1)-1,Or=S[vn],hn=vn+1,ts=S[hn];if(0>r(Or,C))hn<X&&0>r(ts,Or)?(S[$]=ts,S[hn]=C,$=hn):(S[$]=Or,S[vn]=C,$=vn);else if(hn<X&&0>r(ts,C))S[$]=ts,S[hn]=C,$=hn;else break e}}return E}function r(S,E){var C=S.sortIndex-E.sortIndex;return C!==0?C:S.id-E.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,o=l.now();e.unstable_now=function(){return l.now()-o}}var a=[],c=[],f=1,g=null,p=3,h=!1,O=!1,b=!1,I=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(S){for(var E=t(c);E!==null;){if(E.callback===null)s(c);else if(E.startTime<=S)s(c),E.sortIndex=E.expirationTime,n(a,E);else break;E=t(c)}}function A(S){if(b=!1,m(S),!O)if(t(a)!==null)O=!0,vr(q);else{var E=t(c);E!==null&&hr(A,E.startTime-S)}}function q(S,E){O=!1,b&&(b=!1,d(T),T=-1),h=!0;var C=p;try{for(m(E),g=t(a);g!==null&&(!(g.expirationTime>E)||S&&!Te());){var $=g.callback;if(typeof $=="function"){g.callback=null,p=g.priorityLevel;var X=$(g.expirationTime<=E);E=e.unstable_now(),typeof X=="function"?g.callback=X:g===t(a)&&s(a),m(E)}else s(a);g=t(a)}if(g!==null)var ns=!0;else{var vn=t(c);vn!==null&&hr(A,vn.startTime-E),ns=!1}return ns}finally{g=null,p=C,h=!1}}var x=!1,L=null,T=-1,U=5,F=-1;function Te(){return!(e.unstable_now()-F<U)}function ct(){if(L!==null){var S=e.unstable_now();F=S;var E=!0;try{E=L(!0,S)}finally{E?dt():(x=!1,L=null)}}else x=!1}var dt;if(typeof u=="function")dt=function(){u(ct)};else if(typeof MessageChannel<"u"){var Ml=new MessageChannel,sc=Ml.port2;Ml.port1.onmessage=ct,dt=function(){sc.postMessage(null)}}else dt=function(){I(ct,0)};function vr(S){L=S,x||(x=!0,dt())}function hr(S,E){T=I(function(){S(e.unstable_now())},E)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){O||h||(O=!0,vr(q))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(S){switch(p){case 1:case 2:case 3:var E=3;break;default:E=p}var C=p;p=E;try{return S()}finally{p=C}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,E){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var C=p;p=S;try{return E()}finally{p=C}},e.unstable_scheduleCallback=function(S,E,C){var $=e.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?$+C:$):C=$,S){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=C+X,S={id:f++,callback:E,priorityLevel:S,startTime:C,expirationTime:X,sortIndex:-1},C>$?(S.sortIndex=C,n(c,S),t(a)===null&&S===t(c)&&(b?(d(T),T=-1):b=!0,hr(A,C-$))):(S.sortIndex=X,n(a,S),O||h||(O=!0,vr(q))),S},e.unstable_shouldYield=Te,e.unstable_wrapCallback=function(S){var E=p;return function(){var C=p;p=E;try{return S.apply(this,arguments)}finally{p=C}}}})(ra);sa.exports=ra;var xc=sa.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lc=De,ve=xc;function v(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ia=new Set,zt={};function wn(e,n){et(e,n),et(e+"Capture",n)}function et(e,n){for(zt[e]=n,e=0;e<n.length;e++)ia.add(n[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gr=Object.prototype.hasOwnProperty,Tc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dl={},jl={};function Ec(e){return Gr.call(jl,e)?!0:Gr.call(Dl,e)?!1:Tc.test(e)?jl[e]=!0:(Dl[e]=!0,!1)}function Cc(e,n,t,s){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return s?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function kc(e,n,t,s){if(n===null||typeof n>"u"||Cc(e,n,t,s))return!0;if(s)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ue(e,n,t,s,r,i,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=s,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=i,this.removeEmptyString=l}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];ee[n]=new ue(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var $i=/[\-:]([a-z])/g;function Hi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace($i,Hi);ee[n]=new ue(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace($i,Hi);ee[n]=new ue(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace($i,Hi);ee[n]=new ue(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qi(e,n,t,s){var r=ee.hasOwnProperty(n)?ee[n]:null;(r!==null?r.type!==0:s||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(kc(n,t,r,s)&&(t=null),s||r===null?Ec(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,s=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,s?e.setAttributeNS(s,n,t):e.setAttribute(n,t))))}var Ke=Lc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rs=Symbol.for("react.element"),Nn=Symbol.for("react.portal"),In=Symbol.for("react.fragment"),Wi=Symbol.for("react.strict_mode"),Xr=Symbol.for("react.profiler"),la=Symbol.for("react.provider"),oa=Symbol.for("react.context"),Gi=Symbol.for("react.forward_ref"),Kr=Symbol.for("react.suspense"),Jr=Symbol.for("react.suspense_list"),Xi=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),aa=Symbol.for("react.offscreen"),Bl=Symbol.iterator;function mt(e){return e===null||typeof e!="object"?null:(e=Bl&&e[Bl]||e["@@iterator"],typeof e=="function"?e:null)}var _=Object.assign,yr;function Ot(e){if(yr===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);yr=n&&n[1]||""}return`
`+yr+e}var qr=!1;function Sr(e,n){if(!e||qr)return"";qr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var s=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){s=c}e.call(n.prototype)}else{try{throw Error()}catch(c){s=c}e()}}catch(c){if(c&&s&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),i=s.stack.split(`
`),l=r.length-1,o=i.length-1;1<=l&&0<=o&&r[l]!==i[o];)o--;for(;1<=l&&0<=o;l--,o--)if(r[l]!==i[o]){if(l!==1||o!==1)do if(l--,o--,0>o||r[l]!==i[o]){var a=`
`+r[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=o);break}}}finally{qr=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Ot(e):""}function Fc(e){switch(e.tag){case 5:return Ot(e.type);case 16:return Ot("Lazy");case 13:return Ot("Suspense");case 19:return Ot("SuspenseList");case 0:case 2:case 15:return e=Sr(e.type,!1),e;case 11:return e=Sr(e.type.render,!1),e;case 1:return e=Sr(e.type,!0),e;default:return""}}function Yr(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case In:return"Fragment";case Nn:return"Portal";case Xr:return"Profiler";case Wi:return"StrictMode";case Kr:return"Suspense";case Jr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case oa:return(e.displayName||"Context")+".Consumer";case la:return(e._context.displayName||"Context")+".Provider";case Gi:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xi:return n=e.displayName||null,n!==null?n:Yr(e.type)||"Memo";case Ye:n=e._payload,e=e._init;try{return Yr(e(n))}catch{}}return null}function wc(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yr(n);case 8:return n===Wi?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ua(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function zc(e){var n=ua(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,i=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(l){s=""+l,i.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return s},setValue:function(l){s=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function is(e){e._valueTracker||(e._valueTracker=zc(e))}function ca(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),s="";return e&&(s=ua(e)?e.checked?"true":"false":e.value),e=s,e!==t?(n.setValue(e),!0):!1}function ws(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zr(e,n){var t=n.checked;return _({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function _l(e,n){var t=n.defaultValue==null?"":n.defaultValue,s=n.checked!=null?n.checked:n.defaultChecked;t=pn(n.value!=null?n.value:t),e._wrapperState={initialChecked:s,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function da(e,n){n=n.checked,n!=null&&Qi(e,"checked",n,!1)}function ei(e,n){da(e,n);var t=pn(n.value),s=n.type;if(t!=null)s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ni(e,n.type,t):n.hasOwnProperty("defaultValue")&&ni(e,n.type,pn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function Vl(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var s=n.type;if(!(s!=="submit"&&s!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function ni(e,n,t){(n!=="number"||ws(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var bt=Array.isArray;function Gn(e,n,t,s){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&s&&(e[t].defaultSelected=!0)}else{for(t=""+pn(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,s&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function ti(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(v(91));return _({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ul(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(v(92));if(bt(t)){if(1<t.length)throw Error(v(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:pn(t)}}function ma(e,n){var t=pn(n.value),s=pn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),s!=null&&(e.defaultValue=""+s)}function $l(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function pa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function si(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?pa(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ls,Pa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,s,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,s,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(ls=ls||document.createElement("div"),ls.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=ls.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Mt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var St={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mc=["Webkit","ms","Moz","O"];Object.keys(St).forEach(function(e){Mc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),St[n]=St[e]})});function ga(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||St.hasOwnProperty(e)&&St[e]?(""+n).trim():n+"px"}function fa(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var s=t.indexOf("--")===0,r=ga(t,n[t],s);t==="float"&&(t="cssFloat"),s?e.setProperty(t,r):e[t]=r}}var Rc=_({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ri(e,n){if(n){if(Rc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(v(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(v(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(v(61))}if(n.style!=null&&typeof n.style!="object")throw Error(v(62))}}function ii(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var li=null;function Ki(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oi=null,Xn=null,Kn=null;function Hl(e){if(e=Zt(e)){if(typeof oi!="function")throw Error(v(280));var n=e.stateNode;n&&(n=or(n),oi(e.stateNode,e.type,n))}}function Aa(e){Xn?Kn?Kn.push(e):Kn=[e]:Xn=e}function va(){if(Xn){var e=Xn,n=Kn;if(Kn=Xn=null,Hl(e),n)for(e=0;e<n.length;e++)Hl(n[e])}}function ha(e,n){return e(n)}function Oa(){}var xr=!1;function ba(e,n,t){if(xr)return e(n,t);xr=!0;try{return ha(e,n,t)}finally{xr=!1,(Xn!==null||Kn!==null)&&(Oa(),va())}}function Rt(e,n){var t=e.stateNode;if(t===null)return null;var s=or(t);if(s===null)return null;t=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(v(231,n,typeof t));return t}var ai=!1;if(Qe)try{var pt={};Object.defineProperty(pt,"passive",{get:function(){ai=!0}}),window.addEventListener("test",pt,pt),window.removeEventListener("test",pt,pt)}catch{ai=!1}function Nc(e,n,t,s,r,i,l,o,a){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(f){this.onError(f)}}var xt=!1,zs=null,Ms=!1,ui=null,Ic={onError:function(e){xt=!0,zs=e}};function Dc(e,n,t,s,r,i,l,o,a){xt=!1,zs=null,Nc.apply(Ic,arguments)}function jc(e,n,t,s,r,i,l,o,a){if(Dc.apply(this,arguments),xt){if(xt){var c=zs;xt=!1,zs=null}else throw Error(v(198));Ms||(Ms=!0,ui=c)}}function zn(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function ya(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function Ql(e){if(zn(e)!==e)throw Error(v(188))}function Bc(e){var n=e.alternate;if(!n){if(n=zn(e),n===null)throw Error(v(188));return n!==e?null:e}for(var t=e,s=n;;){var r=t.return;if(r===null)break;var i=r.alternate;if(i===null){if(s=r.return,s!==null){t=s;continue}break}if(r.child===i.child){for(i=r.child;i;){if(i===t)return Ql(r),e;if(i===s)return Ql(r),n;i=i.sibling}throw Error(v(188))}if(t.return!==s.return)t=r,s=i;else{for(var l=!1,o=r.child;o;){if(o===t){l=!0,t=r,s=i;break}if(o===s){l=!0,s=r,t=i;break}o=o.sibling}if(!l){for(o=i.child;o;){if(o===t){l=!0,t=i,s=r;break}if(o===s){l=!0,s=i,t=r;break}o=o.sibling}if(!l)throw Error(v(189))}}if(t.alternate!==s)throw Error(v(190))}if(t.tag!==3)throw Error(v(188));return t.stateNode.current===t?e:n}function qa(e){return e=Bc(e),e!==null?Sa(e):null}function Sa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Sa(e);if(n!==null)return n;e=e.sibling}return null}var xa=ve.unstable_scheduleCallback,Wl=ve.unstable_cancelCallback,_c=ve.unstable_shouldYield,Vc=ve.unstable_requestPaint,H=ve.unstable_now,Uc=ve.unstable_getCurrentPriorityLevel,Ji=ve.unstable_ImmediatePriority,La=ve.unstable_UserBlockingPriority,Rs=ve.unstable_NormalPriority,$c=ve.unstable_LowPriority,Ta=ve.unstable_IdlePriority,sr=null,je=null;function Hc(e){if(je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(sr,e,void 0,(e.current.flags&128)===128)}catch{}}var we=Math.clz32?Math.clz32:Gc,Qc=Math.log,Wc=Math.LN2;function Gc(e){return e>>>=0,e===0?32:31-(Qc(e)/Wc|0)|0}var os=64,as=4194304;function yt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ns(e,n){var t=e.pendingLanes;if(t===0)return 0;var s=0,r=e.suspendedLanes,i=e.pingedLanes,l=t&268435455;if(l!==0){var o=l&~r;o!==0?s=yt(o):(i&=l,i!==0&&(s=yt(i)))}else l=t&~r,l!==0?s=yt(l):i!==0&&(s=yt(i));if(s===0)return 0;if(n!==0&&n!==s&&!(n&r)&&(r=s&-s,i=n&-n,r>=i||r===16&&(i&4194240)!==0))return n;if(s&4&&(s|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=s;0<n;)t=31-we(n),r=1<<t,s|=e[t],n&=~r;return s}function Xc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kc(e,n){for(var t=e.suspendedLanes,s=e.pingedLanes,r=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-we(i),o=1<<l,a=r[l];a===-1?(!(o&t)||o&s)&&(r[l]=Xc(o,n)):a<=n&&(e.expiredLanes|=o),i&=~o}}function ci(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ea(){var e=os;return os<<=1,!(os&4194240)&&(os=64),e}function Lr(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function Jt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-we(n),e[n]=t}function Jc(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-we(t),i=1<<r;n[r]=0,s[r]=-1,e[r]=-1,t&=~i}}function Yi(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var s=31-we(t),r=1<<s;r&n|e[s]&n&&(e[s]|=n),t&=~r}}var z=0;function Ca(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ka,Zi,Fa,wa,za,di=!1,us=[],rn=null,ln=null,on=null,Nt=new Map,It=new Map,en=[],Yc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gl(e,n){switch(e){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":ln=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":Nt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":It.delete(n.pointerId)}}function Pt(e,n,t,s,r,i){return e===null||e.nativeEvent!==i?(e={blockedOn:n,domEventName:t,eventSystemFlags:s,nativeEvent:i,targetContainers:[r]},n!==null&&(n=Zt(n),n!==null&&Zi(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function Zc(e,n,t,s,r){switch(n){case"focusin":return rn=Pt(rn,e,n,t,s,r),!0;case"dragenter":return ln=Pt(ln,e,n,t,s,r),!0;case"mouseover":return on=Pt(on,e,n,t,s,r),!0;case"pointerover":var i=r.pointerId;return Nt.set(i,Pt(Nt.get(i)||null,e,n,t,s,r)),!0;case"gotpointercapture":return i=r.pointerId,It.set(i,Pt(It.get(i)||null,e,n,t,s,r)),!0}return!1}function Ma(e){var n=yn(e.target);if(n!==null){var t=zn(n);if(t!==null){if(n=t.tag,n===13){if(n=ya(t),n!==null){e.blockedOn=n,za(e.priority,function(){Fa(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ys(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=mi(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var s=new t.constructor(t.type,t);li=s,t.target.dispatchEvent(s),li=null}else return n=Zt(t),n!==null&&Zi(n),e.blockedOn=t,!1;n.shift()}return!0}function Xl(e,n,t){ys(e)&&t.delete(n)}function ed(){di=!1,rn!==null&&ys(rn)&&(rn=null),ln!==null&&ys(ln)&&(ln=null),on!==null&&ys(on)&&(on=null),Nt.forEach(Xl),It.forEach(Xl)}function gt(e,n){e.blockedOn===n&&(e.blockedOn=null,di||(di=!0,ve.unstable_scheduleCallback(ve.unstable_NormalPriority,ed)))}function Dt(e){function n(r){return gt(r,e)}if(0<us.length){gt(us[0],e);for(var t=1;t<us.length;t++){var s=us[t];s.blockedOn===e&&(s.blockedOn=null)}}for(rn!==null&&gt(rn,e),ln!==null&&gt(ln,e),on!==null&&gt(on,e),Nt.forEach(n),It.forEach(n),t=0;t<en.length;t++)s=en[t],s.blockedOn===e&&(s.blockedOn=null);for(;0<en.length&&(t=en[0],t.blockedOn===null);)Ma(t),t.blockedOn===null&&en.shift()}var Jn=Ke.ReactCurrentBatchConfig,Is=!0;function nd(e,n,t,s){var r=z,i=Jn.transition;Jn.transition=null;try{z=1,el(e,n,t,s)}finally{z=r,Jn.transition=i}}function td(e,n,t,s){var r=z,i=Jn.transition;Jn.transition=null;try{z=4,el(e,n,t,s)}finally{z=r,Jn.transition=i}}function el(e,n,t,s){if(Is){var r=mi(e,n,t,s);if(r===null)Nr(e,n,s,Ds,t),Gl(e,s);else if(Zc(r,e,n,t,s))s.stopPropagation();else if(Gl(e,s),n&4&&-1<Yc.indexOf(e)){for(;r!==null;){var i=Zt(r);if(i!==null&&ka(i),i=mi(e,n,t,s),i===null&&Nr(e,n,s,Ds,t),i===r)break;r=i}r!==null&&s.stopPropagation()}else Nr(e,n,s,null,t)}}var Ds=null;function mi(e,n,t,s){if(Ds=null,e=Ki(s),e=yn(e),e!==null)if(n=zn(e),n===null)e=null;else if(t=n.tag,t===13){if(e=ya(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Ds=e,null}function Ra(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Uc()){case Ji:return 1;case La:return 4;case Rs:case $c:return 16;case Ta:return 536870912;default:return 16}default:return 16}}var tn=null,nl=null,qs=null;function Na(){if(qs)return qs;var e,n=nl,t=n.length,s,r="value"in tn?tn.value:tn.textContent,i=r.length;for(e=0;e<t&&n[e]===r[e];e++);var l=t-e;for(s=1;s<=l&&n[t-s]===r[i-s];s++);return qs=r.slice(e,1<s?1-s:void 0)}function Ss(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function cs(){return!0}function Kl(){return!1}function Oe(e){function n(t,s,r,i,l){this._reactName=t,this._targetInst=r,this.type=s,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?cs:Kl,this.isPropagationStopped=Kl,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=cs)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=cs)},persist:function(){},isPersistent:cs}),n}var at={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tl=Oe(at),Yt=_({},at,{view:0,detail:0}),sd=Oe(Yt),Tr,Er,ft,rr=_({},Yt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ft&&(ft&&e.type==="mousemove"?(Tr=e.screenX-ft.screenX,Er=e.screenY-ft.screenY):Er=Tr=0,ft=e),Tr)},movementY:function(e){return"movementY"in e?e.movementY:Er}}),Jl=Oe(rr),rd=_({},rr,{dataTransfer:0}),id=Oe(rd),ld=_({},Yt,{relatedTarget:0}),Cr=Oe(ld),od=_({},at,{animationName:0,elapsedTime:0,pseudoElement:0}),ad=Oe(od),ud=_({},at,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cd=Oe(ud),dd=_({},at,{data:0}),Yl=Oe(dd),md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gd(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Pd[e])?!!n[e]:!1}function sl(){return gd}var fd=_({},Yt,{key:function(e){if(e.key){var n=md[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ss(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sl,charCode:function(e){return e.type==="keypress"?Ss(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ss(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ad=Oe(fd),vd=_({},rr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zl=Oe(vd),hd=_({},Yt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sl}),Od=Oe(hd),bd=_({},at,{propertyName:0,elapsedTime:0,pseudoElement:0}),yd=Oe(bd),qd=_({},rr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sd=Oe(qd),xd=[9,13,27,32],rl=Qe&&"CompositionEvent"in window,Lt=null;Qe&&"documentMode"in document&&(Lt=document.documentMode);var Ld=Qe&&"TextEvent"in window&&!Lt,Ia=Qe&&(!rl||Lt&&8<Lt&&11>=Lt),eo=" ",no=!1;function Da(e,n){switch(e){case"keyup":return xd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ja(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dn=!1;function Td(e,n){switch(e){case"compositionend":return ja(n);case"keypress":return n.which!==32?null:(no=!0,eo);case"textInput":return e=n.data,e===eo&&no?null:e;default:return null}}function Ed(e,n){if(Dn)return e==="compositionend"||!rl&&Da(e,n)?(e=Na(),qs=nl=tn=null,Dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ia&&n.locale!=="ko"?null:n.data;default:return null}}var Cd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function to(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Cd[e.type]:n==="textarea"}function Ba(e,n,t,s){Aa(s),n=js(n,"onChange"),0<n.length&&(t=new tl("onChange","change",null,t,s),e.push({event:t,listeners:n}))}var Tt=null,jt=null;function kd(e){Ja(e,0)}function ir(e){var n=_n(e);if(ca(n))return e}function Fd(e,n){if(e==="change")return n}var _a=!1;if(Qe){var kr;if(Qe){var Fr="oninput"in document;if(!Fr){var so=document.createElement("div");so.setAttribute("oninput","return;"),Fr=typeof so.oninput=="function"}kr=Fr}else kr=!1;_a=kr&&(!document.documentMode||9<document.documentMode)}function ro(){Tt&&(Tt.detachEvent("onpropertychange",Va),jt=Tt=null)}function Va(e){if(e.propertyName==="value"&&ir(jt)){var n=[];Ba(n,jt,e,Ki(e)),ba(kd,n)}}function wd(e,n,t){e==="focusin"?(ro(),Tt=n,jt=t,Tt.attachEvent("onpropertychange",Va)):e==="focusout"&&ro()}function zd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ir(jt)}function Md(e,n){if(e==="click")return ir(n)}function Rd(e,n){if(e==="input"||e==="change")return ir(n)}function Nd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Me=typeof Object.is=="function"?Object.is:Nd;function Bt(e,n){if(Me(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),s=Object.keys(n);if(t.length!==s.length)return!1;for(s=0;s<t.length;s++){var r=t[s];if(!Gr.call(n,r)||!Me(e[r],n[r]))return!1}return!0}function io(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function lo(e,n){var t=io(e);e=0;for(var s;t;){if(t.nodeType===3){if(s=e+t.textContent.length,e<=n&&s>=n)return{node:t,offset:n-e};e=s}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=io(t)}}function Ua(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ua(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function $a(){for(var e=window,n=ws();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ws(e.document)}return n}function il(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Id(e){var n=$a(),t=e.focusedElem,s=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ua(t.ownerDocument.documentElement,t)){if(s!==null&&il(t)){if(n=s.start,e=s.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,i=Math.min(s.start,r);s=s.end===void 0?i:Math.min(s.end,r),!e.extend&&i>s&&(r=s,s=i,i=r),r=lo(t,i);var l=lo(t,s);r&&l&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),i>s?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Dd=Qe&&"documentMode"in document&&11>=document.documentMode,jn=null,pi=null,Et=null,Pi=!1;function oo(e,n,t){var s=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Pi||jn==null||jn!==ws(s)||(s=jn,"selectionStart"in s&&il(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Et&&Bt(Et,s)||(Et=s,s=js(pi,"onSelect"),0<s.length&&(n=new tl("onSelect","select",null,n,t),e.push({event:n,listeners:s}),n.target=jn)))}function ds(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Bn={animationend:ds("Animation","AnimationEnd"),animationiteration:ds("Animation","AnimationIteration"),animationstart:ds("Animation","AnimationStart"),transitionend:ds("Transition","TransitionEnd")},wr={},Ha={};Qe&&(Ha=document.createElement("div").style,"AnimationEvent"in window||(delete Bn.animationend.animation,delete Bn.animationiteration.animation,delete Bn.animationstart.animation),"TransitionEvent"in window||delete Bn.transitionend.transition);function lr(e){if(wr[e])return wr[e];if(!Bn[e])return e;var n=Bn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in Ha)return wr[e]=n[t];return e}var Qa=lr("animationend"),Wa=lr("animationiteration"),Ga=lr("animationstart"),Xa=lr("transitionend"),Ka=new Map,ao="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gn(e,n){Ka.set(e,n),wn(n,[e])}for(var zr=0;zr<ao.length;zr++){var Mr=ao[zr],jd=Mr.toLowerCase(),Bd=Mr[0].toUpperCase()+Mr.slice(1);gn(jd,"on"+Bd)}gn(Qa,"onAnimationEnd");gn(Wa,"onAnimationIteration");gn(Ga,"onAnimationStart");gn("dblclick","onDoubleClick");gn("focusin","onFocus");gn("focusout","onBlur");gn(Xa,"onTransitionEnd");et("onMouseEnter",["mouseout","mouseover"]);et("onMouseLeave",["mouseout","mouseover"]);et("onPointerEnter",["pointerout","pointerover"]);et("onPointerLeave",["pointerout","pointerover"]);wn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wn("onBeforeInput",["compositionend","keypress","textInput","paste"]);wn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_d=new Set("cancel close invalid load scroll toggle".split(" ").concat(qt));function uo(e,n,t){var s=e.type||"unknown-event";e.currentTarget=t,jc(s,n,void 0,e),e.currentTarget=null}function Ja(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var s=e[t],r=s.event;s=s.listeners;e:{var i=void 0;if(n)for(var l=s.length-1;0<=l;l--){var o=s[l],a=o.instance,c=o.currentTarget;if(o=o.listener,a!==i&&r.isPropagationStopped())break e;uo(r,o,c),i=a}else for(l=0;l<s.length;l++){if(o=s[l],a=o.instance,c=o.currentTarget,o=o.listener,a!==i&&r.isPropagationStopped())break e;uo(r,o,c),i=a}}}if(Ms)throw e=ui,Ms=!1,ui=null,e}function R(e,n){var t=n[hi];t===void 0&&(t=n[hi]=new Set);var s=e+"__bubble";t.has(s)||(Ya(n,e,2,!1),t.add(s))}function Rr(e,n,t){var s=0;n&&(s|=4),Ya(t,e,s,n)}var ms="_reactListening"+Math.random().toString(36).slice(2);function _t(e){if(!e[ms]){e[ms]=!0,ia.forEach(function(t){t!=="selectionchange"&&(_d.has(t)||Rr(t,!1,e),Rr(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ms]||(n[ms]=!0,Rr("selectionchange",!1,n))}}function Ya(e,n,t,s){switch(Ra(n)){case 1:var r=nd;break;case 4:r=td;break;default:r=el}t=r.bind(null,n,t,e),r=void 0,!ai||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),s?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function Nr(e,n,t,s,r){var i=s;if(!(n&1)&&!(n&2)&&s!==null)e:for(;;){if(s===null)return;var l=s.tag;if(l===3||l===4){var o=s.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(l===4)for(l=s.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===r||a.nodeType===8&&a.parentNode===r))return;l=l.return}for(;o!==null;){if(l=yn(o),l===null)return;if(a=l.tag,a===5||a===6){s=i=l;continue e}o=o.parentNode}}s=s.return}ba(function(){var c=i,f=Ki(t),g=[];e:{var p=Ka.get(e);if(p!==void 0){var h=tl,O=e;switch(e){case"keypress":if(Ss(t)===0)break e;case"keydown":case"keyup":h=Ad;break;case"focusin":O="focus",h=Cr;break;case"focusout":O="blur",h=Cr;break;case"beforeblur":case"afterblur":h=Cr;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Jl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=id;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Od;break;case Qa:case Wa:case Ga:h=ad;break;case Xa:h=yd;break;case"scroll":h=sd;break;case"wheel":h=Sd;break;case"copy":case"cut":case"paste":h=cd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Zl}var b=(n&4)!==0,I=!b&&e==="scroll",d=b?p!==null?p+"Capture":null:p;b=[];for(var u=c,m;u!==null;){m=u;var A=m.stateNode;if(m.tag===5&&A!==null&&(m=A,d!==null&&(A=Rt(u,d),A!=null&&b.push(Vt(u,A,m)))),I)break;u=u.return}0<b.length&&(p=new h(p,O,null,t,f),g.push({event:p,listeners:b}))}}if(!(n&7)){e:{if(p=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",p&&t!==li&&(O=t.relatedTarget||t.fromElement)&&(yn(O)||O[We]))break e;if((h||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,h?(O=t.relatedTarget||t.toElement,h=c,O=O?yn(O):null,O!==null&&(I=zn(O),O!==I||O.tag!==5&&O.tag!==6)&&(O=null)):(h=null,O=c),h!==O)){if(b=Jl,A="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(b=Zl,A="onPointerLeave",d="onPointerEnter",u="pointer"),I=h==null?p:_n(h),m=O==null?p:_n(O),p=new b(A,u+"leave",h,t,f),p.target=I,p.relatedTarget=m,A=null,yn(f)===c&&(b=new b(d,u+"enter",O,t,f),b.target=m,b.relatedTarget=I,A=b),I=A,h&&O)n:{for(b=h,d=O,u=0,m=b;m;m=Mn(m))u++;for(m=0,A=d;A;A=Mn(A))m++;for(;0<u-m;)b=Mn(b),u--;for(;0<m-u;)d=Mn(d),m--;for(;u--;){if(b===d||d!==null&&b===d.alternate)break n;b=Mn(b),d=Mn(d)}b=null}else b=null;h!==null&&co(g,p,h,b,!1),O!==null&&I!==null&&co(g,I,O,b,!0)}}e:{if(p=c?_n(c):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var q=Fd;else if(to(p))if(_a)q=Rd;else{q=zd;var x=wd}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(q=Md);if(q&&(q=q(e,c))){Ba(g,q,t,f);break e}x&&x(e,p,c),e==="focusout"&&(x=p._wrapperState)&&x.controlled&&p.type==="number"&&ni(p,"number",p.value)}switch(x=c?_n(c):window,e){case"focusin":(to(x)||x.contentEditable==="true")&&(jn=x,pi=c,Et=null);break;case"focusout":Et=pi=jn=null;break;case"mousedown":Pi=!0;break;case"contextmenu":case"mouseup":case"dragend":Pi=!1,oo(g,t,f);break;case"selectionchange":if(Dd)break;case"keydown":case"keyup":oo(g,t,f)}var L;if(rl)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Dn?Da(e,t)&&(T="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(T="onCompositionStart");T&&(Ia&&t.locale!=="ko"&&(Dn||T!=="onCompositionStart"?T==="onCompositionEnd"&&Dn&&(L=Na()):(tn=f,nl="value"in tn?tn.value:tn.textContent,Dn=!0)),x=js(c,T),0<x.length&&(T=new Yl(T,e,null,t,f),g.push({event:T,listeners:x}),L?T.data=L:(L=ja(t),L!==null&&(T.data=L)))),(L=Ld?Td(e,t):Ed(e,t))&&(c=js(c,"onBeforeInput"),0<c.length&&(f=new Yl("onBeforeInput","beforeinput",null,t,f),g.push({event:f,listeners:c}),f.data=L))}Ja(g,n)})}function Vt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function js(e,n){for(var t=n+"Capture",s=[];e!==null;){var r=e,i=r.stateNode;r.tag===5&&i!==null&&(r=i,i=Rt(e,t),i!=null&&s.unshift(Vt(e,i,r)),i=Rt(e,n),i!=null&&s.push(Vt(e,i,r))),e=e.return}return s}function Mn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function co(e,n,t,s,r){for(var i=n._reactName,l=[];t!==null&&t!==s;){var o=t,a=o.alternate,c=o.stateNode;if(a!==null&&a===s)break;o.tag===5&&c!==null&&(o=c,r?(a=Rt(t,i),a!=null&&l.unshift(Vt(t,a,o))):r||(a=Rt(t,i),a!=null&&l.push(Vt(t,a,o)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var Vd=/\r\n?/g,Ud=/\u0000|\uFFFD/g;function mo(e){return(typeof e=="string"?e:""+e).replace(Vd,`
`).replace(Ud,"")}function ps(e,n,t){if(n=mo(n),mo(e)!==n&&t)throw Error(v(425))}function Bs(){}var gi=null,fi=null;function Ai(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var vi=typeof setTimeout=="function"?setTimeout:void 0,$d=typeof clearTimeout=="function"?clearTimeout:void 0,po=typeof Promise=="function"?Promise:void 0,Hd=typeof queueMicrotask=="function"?queueMicrotask:typeof po<"u"?function(e){return po.resolve(null).then(e).catch(Qd)}:vi;function Qd(e){setTimeout(function(){throw e})}function Ir(e,n){var t=n,s=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(s===0){e.removeChild(r),Dt(n);return}s--}else t!=="$"&&t!=="$?"&&t!=="$!"||s++;t=r}while(t);Dt(n)}function an(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Po(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var ut=Math.random().toString(36).slice(2),Ie="__reactFiber$"+ut,Ut="__reactProps$"+ut,We="__reactContainer$"+ut,hi="__reactEvents$"+ut,Wd="__reactListeners$"+ut,Gd="__reactHandles$"+ut;function yn(e){var n=e[Ie];if(n)return n;for(var t=e.parentNode;t;){if(n=t[We]||t[Ie]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Po(e);e!==null;){if(t=e[Ie])return t;e=Po(e)}return n}e=t,t=e.parentNode}return null}function Zt(e){return e=e[Ie]||e[We],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(v(33))}function or(e){return e[Ut]||null}var Oi=[],Vn=-1;function fn(e){return{current:e}}function N(e){0>Vn||(e.current=Oi[Vn],Oi[Vn]=null,Vn--)}function M(e,n){Vn++,Oi[Vn]=e.current,e.current=n}var Pn={},ie=fn(Pn),me=fn(!1),Tn=Pn;function nt(e,n){var t=e.type.contextTypes;if(!t)return Pn;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===n)return s.__reactInternalMemoizedMaskedChildContext;var r={},i;for(i in t)r[i]=n[i];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function pe(e){return e=e.childContextTypes,e!=null}function _s(){N(me),N(ie)}function go(e,n,t){if(ie.current!==Pn)throw Error(v(168));M(ie,n),M(me,t)}function Za(e,n,t){var s=e.stateNode;if(n=n.childContextTypes,typeof s.getChildContext!="function")return t;s=s.getChildContext();for(var r in s)if(!(r in n))throw Error(v(108,wc(e)||"Unknown",r));return _({},t,s)}function Vs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pn,Tn=ie.current,M(ie,e),M(me,me.current),!0}function fo(e,n,t){var s=e.stateNode;if(!s)throw Error(v(169));t?(e=Za(e,n,Tn),s.__reactInternalMemoizedMergedChildContext=e,N(me),N(ie),M(ie,e)):N(me),M(me,t)}var Ve=null,ar=!1,Dr=!1;function eu(e){Ve===null?Ve=[e]:Ve.push(e)}function Xd(e){ar=!0,eu(e)}function An(){if(!Dr&&Ve!==null){Dr=!0;var e=0,n=z;try{var t=Ve;for(z=1;e<t.length;e++){var s=t[e];do s=s(!0);while(s!==null)}Ve=null,ar=!1}catch(r){throw Ve!==null&&(Ve=Ve.slice(e+1)),xa(Ji,An),r}finally{z=n,Dr=!1}}return null}var Un=[],$n=0,Us=null,$s=0,be=[],ye=0,En=null,Ue=1,$e="";function On(e,n){Un[$n++]=$s,Un[$n++]=Us,Us=e,$s=n}function nu(e,n,t){be[ye++]=Ue,be[ye++]=$e,be[ye++]=En,En=e;var s=Ue;e=$e;var r=32-we(s)-1;s&=~(1<<r),t+=1;var i=32-we(n)+r;if(30<i){var l=r-r%5;i=(s&(1<<l)-1).toString(32),s>>=l,r-=l,Ue=1<<32-we(n)+r|t<<r|s,$e=i+e}else Ue=1<<i|t<<r|s,$e=e}function ll(e){e.return!==null&&(On(e,1),nu(e,1,0))}function ol(e){for(;e===Us;)Us=Un[--$n],Un[$n]=null,$s=Un[--$n],Un[$n]=null;for(;e===En;)En=be[--ye],be[ye]=null,$e=be[--ye],be[ye]=null,Ue=be[--ye],be[ye]=null}var Ae=null,fe=null,D=!1,Fe=null;function tu(e,n){var t=qe(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Ao(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Ae=e,fe=an(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Ae=e,fe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=En!==null?{id:Ue,overflow:$e}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=qe(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,Ae=e,fe=null,!0):!1;default:return!1}}function bi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function yi(e){if(D){var n=fe;if(n){var t=n;if(!Ao(e,n)){if(bi(e))throw Error(v(418));n=an(t.nextSibling);var s=Ae;n&&Ao(e,n)?tu(s,t):(e.flags=e.flags&-4097|2,D=!1,Ae=e)}}else{if(bi(e))throw Error(v(418));e.flags=e.flags&-4097|2,D=!1,Ae=e}}}function vo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ae=e}function Ps(e){if(e!==Ae)return!1;if(!D)return vo(e),D=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Ai(e.type,e.memoizedProps)),n&&(n=fe)){if(bi(e))throw su(),Error(v(418));for(;n;)tu(e,n),n=an(n.nextSibling)}if(vo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(v(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){fe=an(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}fe=null}}else fe=Ae?an(e.stateNode.nextSibling):null;return!0}function su(){for(var e=fe;e;)e=an(e.nextSibling)}function tt(){fe=Ae=null,D=!1}function al(e){Fe===null?Fe=[e]:Fe.push(e)}var Kd=Ke.ReactCurrentBatchConfig;function At(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(v(309));var s=t.stateNode}if(!s)throw Error(v(147,e));var r=s,i=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===i?n.ref:(n=function(l){var o=r.refs;l===null?delete o[i]:o[i]=l},n._stringRef=i,n)}if(typeof e!="string")throw Error(v(284));if(!t._owner)throw Error(v(290,e))}return e}function gs(e,n){throw e=Object.prototype.toString.call(n),Error(v(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function ho(e){var n=e._init;return n(e._payload)}function ru(e){function n(d,u){if(e){var m=d.deletions;m===null?(d.deletions=[u],d.flags|=16):m.push(u)}}function t(d,u){if(!e)return null;for(;u!==null;)n(d,u),u=u.sibling;return null}function s(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function r(d,u){return d=mn(d,u),d.index=0,d.sibling=null,d}function i(d,u,m){return d.index=m,e?(m=d.alternate,m!==null?(m=m.index,m<u?(d.flags|=2,u):m):(d.flags|=2,u)):(d.flags|=1048576,u)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function o(d,u,m,A){return u===null||u.tag!==6?(u=Hr(m,d.mode,A),u.return=d,u):(u=r(u,m),u.return=d,u)}function a(d,u,m,A){var q=m.type;return q===In?f(d,u,m.props.children,A,m.key):u!==null&&(u.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Ye&&ho(q)===u.type)?(A=r(u,m.props),A.ref=At(d,u,m),A.return=d,A):(A=Fs(m.type,m.key,m.props,null,d.mode,A),A.ref=At(d,u,m),A.return=d,A)}function c(d,u,m,A){return u===null||u.tag!==4||u.stateNode.containerInfo!==m.containerInfo||u.stateNode.implementation!==m.implementation?(u=Qr(m,d.mode,A),u.return=d,u):(u=r(u,m.children||[]),u.return=d,u)}function f(d,u,m,A,q){return u===null||u.tag!==7?(u=Ln(m,d.mode,A,q),u.return=d,u):(u=r(u,m),u.return=d,u)}function g(d,u,m){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Hr(""+u,d.mode,m),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case rs:return m=Fs(u.type,u.key,u.props,null,d.mode,m),m.ref=At(d,null,u),m.return=d,m;case Nn:return u=Qr(u,d.mode,m),u.return=d,u;case Ye:var A=u._init;return g(d,A(u._payload),m)}if(bt(u)||mt(u))return u=Ln(u,d.mode,m,null),u.return=d,u;gs(d,u)}return null}function p(d,u,m,A){var q=u!==null?u.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return q!==null?null:o(d,u,""+m,A);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case rs:return m.key===q?a(d,u,m,A):null;case Nn:return m.key===q?c(d,u,m,A):null;case Ye:return q=m._init,p(d,u,q(m._payload),A)}if(bt(m)||mt(m))return q!==null?null:f(d,u,m,A,null);gs(d,m)}return null}function h(d,u,m,A,q){if(typeof A=="string"&&A!==""||typeof A=="number")return d=d.get(m)||null,o(u,d,""+A,q);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case rs:return d=d.get(A.key===null?m:A.key)||null,a(u,d,A,q);case Nn:return d=d.get(A.key===null?m:A.key)||null,c(u,d,A,q);case Ye:var x=A._init;return h(d,u,m,x(A._payload),q)}if(bt(A)||mt(A))return d=d.get(m)||null,f(u,d,A,q,null);gs(u,A)}return null}function O(d,u,m,A){for(var q=null,x=null,L=u,T=u=0,U=null;L!==null&&T<m.length;T++){L.index>T?(U=L,L=null):U=L.sibling;var F=p(d,L,m[T],A);if(F===null){L===null&&(L=U);break}e&&L&&F.alternate===null&&n(d,L),u=i(F,u,T),x===null?q=F:x.sibling=F,x=F,L=U}if(T===m.length)return t(d,L),D&&On(d,T),q;if(L===null){for(;T<m.length;T++)L=g(d,m[T],A),L!==null&&(u=i(L,u,T),x===null?q=L:x.sibling=L,x=L);return D&&On(d,T),q}for(L=s(d,L);T<m.length;T++)U=h(L,d,T,m[T],A),U!==null&&(e&&U.alternate!==null&&L.delete(U.key===null?T:U.key),u=i(U,u,T),x===null?q=U:x.sibling=U,x=U);return e&&L.forEach(function(Te){return n(d,Te)}),D&&On(d,T),q}function b(d,u,m,A){var q=mt(m);if(typeof q!="function")throw Error(v(150));if(m=q.call(m),m==null)throw Error(v(151));for(var x=q=null,L=u,T=u=0,U=null,F=m.next();L!==null&&!F.done;T++,F=m.next()){L.index>T?(U=L,L=null):U=L.sibling;var Te=p(d,L,F.value,A);if(Te===null){L===null&&(L=U);break}e&&L&&Te.alternate===null&&n(d,L),u=i(Te,u,T),x===null?q=Te:x.sibling=Te,x=Te,L=U}if(F.done)return t(d,L),D&&On(d,T),q;if(L===null){for(;!F.done;T++,F=m.next())F=g(d,F.value,A),F!==null&&(u=i(F,u,T),x===null?q=F:x.sibling=F,x=F);return D&&On(d,T),q}for(L=s(d,L);!F.done;T++,F=m.next())F=h(L,d,T,F.value,A),F!==null&&(e&&F.alternate!==null&&L.delete(F.key===null?T:F.key),u=i(F,u,T),x===null?q=F:x.sibling=F,x=F);return e&&L.forEach(function(ct){return n(d,ct)}),D&&On(d,T),q}function I(d,u,m,A){if(typeof m=="object"&&m!==null&&m.type===In&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case rs:e:{for(var q=m.key,x=u;x!==null;){if(x.key===q){if(q=m.type,q===In){if(x.tag===7){t(d,x.sibling),u=r(x,m.props.children),u.return=d,d=u;break e}}else if(x.elementType===q||typeof q=="object"&&q!==null&&q.$$typeof===Ye&&ho(q)===x.type){t(d,x.sibling),u=r(x,m.props),u.ref=At(d,x,m),u.return=d,d=u;break e}t(d,x);break}else n(d,x);x=x.sibling}m.type===In?(u=Ln(m.props.children,d.mode,A,m.key),u.return=d,d=u):(A=Fs(m.type,m.key,m.props,null,d.mode,A),A.ref=At(d,u,m),A.return=d,d=A)}return l(d);case Nn:e:{for(x=m.key;u!==null;){if(u.key===x)if(u.tag===4&&u.stateNode.containerInfo===m.containerInfo&&u.stateNode.implementation===m.implementation){t(d,u.sibling),u=r(u,m.children||[]),u.return=d,d=u;break e}else{t(d,u);break}else n(d,u);u=u.sibling}u=Qr(m,d.mode,A),u.return=d,d=u}return l(d);case Ye:return x=m._init,I(d,u,x(m._payload),A)}if(bt(m))return O(d,u,m,A);if(mt(m))return b(d,u,m,A);gs(d,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,u!==null&&u.tag===6?(t(d,u.sibling),u=r(u,m),u.return=d,d=u):(t(d,u),u=Hr(m,d.mode,A),u.return=d,d=u),l(d)):t(d,u)}return I}var st=ru(!0),iu=ru(!1),Hs=fn(null),Qs=null,Hn=null,ul=null;function cl(){ul=Hn=Qs=null}function dl(e){var n=Hs.current;N(Hs),e._currentValue=n}function qi(e,n,t){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===t)break;e=e.return}}function Yn(e,n){Qs=e,ul=Hn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(de=!0),e.firstContext=null)}function xe(e){var n=e._currentValue;if(ul!==e)if(e={context:e,memoizedValue:n,next:null},Hn===null){if(Qs===null)throw Error(v(308));Hn=e,Qs.dependencies={lanes:0,firstContext:e}}else Hn=Hn.next=e;return n}var qn=null;function ml(e){qn===null?qn=[e]:qn.push(e)}function lu(e,n,t,s){var r=n.interleaved;return r===null?(t.next=t,ml(n)):(t.next=r.next,r.next=t),n.interleaved=t,Ge(e,s)}function Ge(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Ze=!1;function pl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ou(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function He(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function un(e,n,t){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,w&2){var r=s.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),s.pending=n,Ge(e,t)}return r=s.interleaved,r===null?(n.next=n,ml(s)):(n.next=r.next,r.next=n),s.interleaved=n,Ge(e,t)}function xs(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var s=n.lanes;s&=e.pendingLanes,t|=s,n.lanes=t,Yi(e,t)}}function Oo(e,n){var t=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,t===s)){var r=null,i=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};i===null?r=i=l:i=i.next=l,t=t.next}while(t!==null);i===null?r=i=n:i=i.next=n}else r=i=n;t={baseState:s.baseState,firstBaseUpdate:r,lastBaseUpdate:i,shared:s.shared,effects:s.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function Ws(e,n,t,s){var r=e.updateQueue;Ze=!1;var i=r.firstBaseUpdate,l=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var a=o,c=a.next;a.next=null,l===null?i=c:l.next=c,l=a;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==l&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=a))}if(i!==null){var g=r.baseState;l=0,f=c=a=null,o=i;do{var p=o.lane,h=o.eventTime;if((s&p)===p){f!==null&&(f=f.next={eventTime:h,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var O=e,b=o;switch(p=n,h=t,b.tag){case 1:if(O=b.payload,typeof O=="function"){g=O.call(h,g,p);break e}g=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=b.payload,p=typeof O=="function"?O.call(h,g,p):O,p==null)break e;g=_({},g,p);break e;case 2:Ze=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,p=r.effects,p===null?r.effects=[o]:p.push(o))}else h={eventTime:h,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=h,a=g):f=f.next=h,l|=p;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;p=o,o=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(f===null&&(a=g),r.baseState=a,r.firstBaseUpdate=c,r.lastBaseUpdate=f,n=r.shared.interleaved,n!==null){r=n;do l|=r.lane,r=r.next;while(r!==n)}else i===null&&(r.shared.lanes=0);kn|=l,e.lanes=l,e.memoizedState=g}}function bo(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var s=e[n],r=s.callback;if(r!==null){if(s.callback=null,s=t,typeof r!="function")throw Error(v(191,r));r.call(s)}}}var es={},Be=fn(es),$t=fn(es),Ht=fn(es);function Sn(e){if(e===es)throw Error(v(174));return e}function Pl(e,n){switch(M(Ht,n),M($t,e),M(Be,es),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:si(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=si(n,e)}N(Be),M(Be,n)}function rt(){N(Be),N($t),N(Ht)}function au(e){Sn(Ht.current);var n=Sn(Be.current),t=si(n,e.type);n!==t&&(M($t,e),M(Be,t))}function gl(e){$t.current===e&&(N(Be),N($t))}var j=fn(0);function Gs(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var jr=[];function fl(){for(var e=0;e<jr.length;e++)jr[e]._workInProgressVersionPrimary=null;jr.length=0}var Ls=Ke.ReactCurrentDispatcher,Br=Ke.ReactCurrentBatchConfig,Cn=0,B=null,W=null,K=null,Xs=!1,Ct=!1,Qt=0,Jd=0;function ne(){throw Error(v(321))}function Al(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Me(e[t],n[t]))return!1;return!0}function vl(e,n,t,s,r,i){if(Cn=i,B=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ls.current=e===null||e.memoizedState===null?nm:tm,e=t(s,r),Ct){i=0;do{if(Ct=!1,Qt=0,25<=i)throw Error(v(301));i+=1,K=W=null,n.updateQueue=null,Ls.current=sm,e=t(s,r)}while(Ct)}if(Ls.current=Ks,n=W!==null&&W.next!==null,Cn=0,K=W=B=null,Xs=!1,n)throw Error(v(300));return e}function hl(){var e=Qt!==0;return Qt=0,e}function Ne(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return K===null?B.memoizedState=K=e:K=K.next=e,K}function Le(){if(W===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=W.next;var n=K===null?B.memoizedState:K.next;if(n!==null)K=n,W=e;else{if(e===null)throw Error(v(310));W=e,e={memoizedState:W.memoizedState,baseState:W.baseState,baseQueue:W.baseQueue,queue:W.queue,next:null},K===null?B.memoizedState=K=e:K=K.next=e}return K}function Wt(e,n){return typeof n=="function"?n(e):n}function _r(e){var n=Le(),t=n.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=e;var s=W,r=s.baseQueue,i=t.pending;if(i!==null){if(r!==null){var l=r.next;r.next=i.next,i.next=l}s.baseQueue=r=i,t.pending=null}if(r!==null){i=r.next,s=s.baseState;var o=l=null,a=null,c=i;do{var f=c.lane;if((Cn&f)===f)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),s=c.hasEagerState?c.eagerState:e(s,c.action);else{var g={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(o=a=g,l=s):a=a.next=g,B.lanes|=f,kn|=f}c=c.next}while(c!==null&&c!==i);a===null?l=s:a.next=o,Me(s,n.memoizedState)||(de=!0),n.memoizedState=s,n.baseState=l,n.baseQueue=a,t.lastRenderedState=s}if(e=t.interleaved,e!==null){r=e;do i=r.lane,B.lanes|=i,kn|=i,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function Vr(e){var n=Le(),t=n.queue;if(t===null)throw Error(v(311));t.lastRenderedReducer=e;var s=t.dispatch,r=t.pending,i=n.memoizedState;if(r!==null){t.pending=null;var l=r=r.next;do i=e(i,l.action),l=l.next;while(l!==r);Me(i,n.memoizedState)||(de=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),t.lastRenderedState=i}return[i,s]}function uu(){}function cu(e,n){var t=B,s=Le(),r=n(),i=!Me(s.memoizedState,r);if(i&&(s.memoizedState=r,de=!0),s=s.queue,Ol(pu.bind(null,t,s,e),[e]),s.getSnapshot!==n||i||K!==null&&K.memoizedState.tag&1){if(t.flags|=2048,Gt(9,mu.bind(null,t,s,r,n),void 0,null),J===null)throw Error(v(349));Cn&30||du(t,n,r)}return r}function du(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function mu(e,n,t,s){n.value=t,n.getSnapshot=s,Pu(n)&&gu(e)}function pu(e,n,t){return t(function(){Pu(n)&&gu(e)})}function Pu(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Me(e,t)}catch{return!0}}function gu(e){var n=Ge(e,1);n!==null&&ze(n,e,1,-1)}function yo(e){var n=Ne();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wt,lastRenderedState:e},n.queue=e,e=e.dispatch=em.bind(null,B,e),[n.memoizedState,e]}function Gt(e,n,t,s){return e={tag:e,create:n,destroy:t,deps:s,next:null},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(s=t.next,t.next=e,e.next=s,n.lastEffect=e)),e}function fu(){return Le().memoizedState}function Ts(e,n,t,s){var r=Ne();B.flags|=e,r.memoizedState=Gt(1|n,t,void 0,s===void 0?null:s)}function ur(e,n,t,s){var r=Le();s=s===void 0?null:s;var i=void 0;if(W!==null){var l=W.memoizedState;if(i=l.destroy,s!==null&&Al(s,l.deps)){r.memoizedState=Gt(n,t,i,s);return}}B.flags|=e,r.memoizedState=Gt(1|n,t,i,s)}function qo(e,n){return Ts(8390656,8,e,n)}function Ol(e,n){return ur(2048,8,e,n)}function Au(e,n){return ur(4,2,e,n)}function vu(e,n){return ur(4,4,e,n)}function hu(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ou(e,n,t){return t=t!=null?t.concat([e]):null,ur(4,4,hu.bind(null,n,e),t)}function bl(){}function bu(e,n){var t=Le();n=n===void 0?null:n;var s=t.memoizedState;return s!==null&&n!==null&&Al(n,s[1])?s[0]:(t.memoizedState=[e,n],e)}function yu(e,n){var t=Le();n=n===void 0?null:n;var s=t.memoizedState;return s!==null&&n!==null&&Al(n,s[1])?s[0]:(e=e(),t.memoizedState=[e,n],e)}function qu(e,n,t){return Cn&21?(Me(t,n)||(t=Ea(),B.lanes|=t,kn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=t)}function Yd(e,n){var t=z;z=t!==0&&4>t?t:4,e(!0);var s=Br.transition;Br.transition={};try{e(!1),n()}finally{z=t,Br.transition=s}}function Su(){return Le().memoizedState}function Zd(e,n,t){var s=dn(e);if(t={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null},xu(e))Lu(n,t);else if(t=lu(e,n,t,s),t!==null){var r=oe();ze(t,e,s,r),Tu(t,n,s)}}function em(e,n,t){var s=dn(e),r={lane:s,action:t,hasEagerState:!1,eagerState:null,next:null};if(xu(e))Lu(n,r);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var l=n.lastRenderedState,o=i(l,t);if(r.hasEagerState=!0,r.eagerState=o,Me(o,l)){var a=n.interleaved;a===null?(r.next=r,ml(n)):(r.next=a.next,a.next=r),n.interleaved=r;return}}catch{}finally{}t=lu(e,n,r,s),t!==null&&(r=oe(),ze(t,e,s,r),Tu(t,n,s))}}function xu(e){var n=e.alternate;return e===B||n!==null&&n===B}function Lu(e,n){Ct=Xs=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function Tu(e,n,t){if(t&4194240){var s=n.lanes;s&=e.pendingLanes,t|=s,n.lanes=t,Yi(e,t)}}var Ks={readContext:xe,useCallback:ne,useContext:ne,useEffect:ne,useImperativeHandle:ne,useInsertionEffect:ne,useLayoutEffect:ne,useMemo:ne,useReducer:ne,useRef:ne,useState:ne,useDebugValue:ne,useDeferredValue:ne,useTransition:ne,useMutableSource:ne,useSyncExternalStore:ne,useId:ne,unstable_isNewReconciler:!1},nm={readContext:xe,useCallback:function(e,n){return Ne().memoizedState=[e,n===void 0?null:n],e},useContext:xe,useEffect:qo,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ts(4194308,4,hu.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ts(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ts(4,2,e,n)},useMemo:function(e,n){var t=Ne();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var s=Ne();return n=t!==void 0?t(n):n,s.memoizedState=s.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},s.queue=e,e=e.dispatch=Zd.bind(null,B,e),[s.memoizedState,e]},useRef:function(e){var n=Ne();return e={current:e},n.memoizedState=e},useState:yo,useDebugValue:bl,useDeferredValue:function(e){return Ne().memoizedState=e},useTransition:function(){var e=yo(!1),n=e[0];return e=Yd.bind(null,e[1]),Ne().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var s=B,r=Ne();if(D){if(t===void 0)throw Error(v(407));t=t()}else{if(t=n(),J===null)throw Error(v(349));Cn&30||du(s,n,t)}r.memoizedState=t;var i={value:t,getSnapshot:n};return r.queue=i,qo(pu.bind(null,s,i,e),[e]),s.flags|=2048,Gt(9,mu.bind(null,s,i,t,n),void 0,null),t},useId:function(){var e=Ne(),n=J.identifierPrefix;if(D){var t=$e,s=Ue;t=(s&~(1<<32-we(s)-1)).toString(32)+t,n=":"+n+"R"+t,t=Qt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Jd++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},tm={readContext:xe,useCallback:bu,useContext:xe,useEffect:Ol,useImperativeHandle:Ou,useInsertionEffect:Au,useLayoutEffect:vu,useMemo:yu,useReducer:_r,useRef:fu,useState:function(){return _r(Wt)},useDebugValue:bl,useDeferredValue:function(e){var n=Le();return qu(n,W.memoizedState,e)},useTransition:function(){var e=_r(Wt)[0],n=Le().memoizedState;return[e,n]},useMutableSource:uu,useSyncExternalStore:cu,useId:Su,unstable_isNewReconciler:!1},sm={readContext:xe,useCallback:bu,useContext:xe,useEffect:Ol,useImperativeHandle:Ou,useInsertionEffect:Au,useLayoutEffect:vu,useMemo:yu,useReducer:Vr,useRef:fu,useState:function(){return Vr(Wt)},useDebugValue:bl,useDeferredValue:function(e){var n=Le();return W===null?n.memoizedState=e:qu(n,W.memoizedState,e)},useTransition:function(){var e=Vr(Wt)[0],n=Le().memoizedState;return[e,n]},useMutableSource:uu,useSyncExternalStore:cu,useId:Su,unstable_isNewReconciler:!1};function Ce(e,n){if(e&&e.defaultProps){n=_({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Si(e,n,t,s){n=e.memoizedState,t=t(s,n),t=t==null?n:_({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var cr={isMounted:function(e){return(e=e._reactInternals)?zn(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var s=oe(),r=dn(e),i=He(s,r);i.payload=n,t!=null&&(i.callback=t),n=un(e,i,r),n!==null&&(ze(n,e,r,s),xs(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var s=oe(),r=dn(e),i=He(s,r);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=un(e,i,r),n!==null&&(ze(n,e,r,s),xs(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=oe(),s=dn(e),r=He(t,s);r.tag=2,n!=null&&(r.callback=n),n=un(e,r,s),n!==null&&(ze(n,e,s,t),xs(n,e,s))}};function So(e,n,t,s,r,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,i,l):n.prototype&&n.prototype.isPureReactComponent?!Bt(t,s)||!Bt(r,i):!0}function Eu(e,n,t){var s=!1,r=Pn,i=n.contextType;return typeof i=="object"&&i!==null?i=xe(i):(r=pe(n)?Tn:ie.current,s=n.contextTypes,i=(s=s!=null)?nt(e,r):Pn),n=new n(t,i),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=cr,e.stateNode=n,n._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=i),n}function xo(e,n,t,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,s),n.state!==e&&cr.enqueueReplaceState(n,n.state,null)}function xi(e,n,t,s){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},pl(e);var i=n.contextType;typeof i=="object"&&i!==null?r.context=xe(i):(i=pe(n)?Tn:ie.current,r.context=nt(e,i)),r.state=e.memoizedState,i=n.getDerivedStateFromProps,typeof i=="function"&&(Si(e,n,i,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&cr.enqueueReplaceState(r,r.state,null),Ws(e,t,r,s),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function it(e,n){try{var t="",s=n;do t+=Fc(s),s=s.return;while(s);var r=t}catch(i){r=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:n,stack:r,digest:null}}function Ur(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Li(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var rm=typeof WeakMap=="function"?WeakMap:Map;function Cu(e,n,t){t=He(-1,t),t.tag=3,t.payload={element:null};var s=n.value;return t.callback=function(){Ys||(Ys=!0,Ni=s),Li(e,n)},t}function ku(e,n,t){t=He(-1,t),t.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var r=n.value;t.payload=function(){return s(r)},t.callback=function(){Li(e,n)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){Li(e,n),typeof s!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function Lo(e,n,t){var s=e.pingCache;if(s===null){s=e.pingCache=new rm;var r=new Set;s.set(n,r)}else r=s.get(n),r===void 0&&(r=new Set,s.set(n,r));r.has(t)||(r.add(t),e=vm.bind(null,e,n,t),n.then(e,e))}function To(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Eo(e,n,t,s,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=He(-1,1),n.tag=2,un(t,n,1))),t.lanes|=1),e)}var im=Ke.ReactCurrentOwner,de=!1;function le(e,n,t,s){n.child=e===null?iu(n,null,t,s):st(n,e.child,t,s)}function Co(e,n,t,s,r){t=t.render;var i=n.ref;return Yn(n,r),s=vl(e,n,t,s,i,r),t=hl(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Xe(e,n,r)):(D&&t&&ll(n),n.flags|=1,le(e,n,s,r),n.child)}function ko(e,n,t,s,r){if(e===null){var i=t.type;return typeof i=="function"&&!Cl(i)&&i.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=i,Fu(e,n,i,s,r)):(e=Fs(t.type,null,s,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(i=e.child,!(e.lanes&r)){var l=i.memoizedProps;if(t=t.compare,t=t!==null?t:Bt,t(l,s)&&e.ref===n.ref)return Xe(e,n,r)}return n.flags|=1,e=mn(i,s),e.ref=n.ref,e.return=n,n.child=e}function Fu(e,n,t,s,r){if(e!==null){var i=e.memoizedProps;if(Bt(i,s)&&e.ref===n.ref)if(de=!1,n.pendingProps=s=i,(e.lanes&r)!==0)e.flags&131072&&(de=!0);else return n.lanes=e.lanes,Xe(e,n,r)}return Ti(e,n,t,s,r)}function wu(e,n,t){var s=n.pendingProps,r=s.children,i=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(Wn,ge),ge|=t;else{if(!(t&1073741824))return e=i!==null?i.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,M(Wn,ge),ge|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=i!==null?i.baseLanes:t,M(Wn,ge),ge|=s}else i!==null?(s=i.baseLanes|t,n.memoizedState=null):s=t,M(Wn,ge),ge|=s;return le(e,n,r,t),n.child}function zu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ti(e,n,t,s,r){var i=pe(t)?Tn:ie.current;return i=nt(n,i),Yn(n,r),t=vl(e,n,t,s,i,r),s=hl(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Xe(e,n,r)):(D&&s&&ll(n),n.flags|=1,le(e,n,t,r),n.child)}function Fo(e,n,t,s,r){if(pe(t)){var i=!0;Vs(n)}else i=!1;if(Yn(n,r),n.stateNode===null)Es(e,n),Eu(n,t,s),xi(n,t,s,r),s=!0;else if(e===null){var l=n.stateNode,o=n.memoizedProps;l.props=o;var a=l.context,c=t.contextType;typeof c=="object"&&c!==null?c=xe(c):(c=pe(t)?Tn:ie.current,c=nt(n,c));var f=t.getDerivedStateFromProps,g=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==s||a!==c)&&xo(n,l,s,c),Ze=!1;var p=n.memoizedState;l.state=p,Ws(n,s,l,r),a=n.memoizedState,o!==s||p!==a||me.current||Ze?(typeof f=="function"&&(Si(n,t,f,s),a=n.memoizedState),(o=Ze||So(n,t,o,s,p,a,c))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=a),l.props=s,l.state=a,l.context=c,s=o):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{l=n.stateNode,ou(e,n),o=n.memoizedProps,c=n.type===n.elementType?o:Ce(n.type,o),l.props=c,g=n.pendingProps,p=l.context,a=t.contextType,typeof a=="object"&&a!==null?a=xe(a):(a=pe(t)?Tn:ie.current,a=nt(n,a));var h=t.getDerivedStateFromProps;(f=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==g||p!==a)&&xo(n,l,s,a),Ze=!1,p=n.memoizedState,l.state=p,Ws(n,s,l,r);var O=n.memoizedState;o!==g||p!==O||me.current||Ze?(typeof h=="function"&&(Si(n,t,h,s),O=n.memoizedState),(c=Ze||So(n,t,c,s,p,O,a)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(s,O,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(s,O,a)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=O),l.props=s,l.state=O,l.context=a,s=c):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(n.flags|=1024),s=!1)}return Ei(e,n,t,s,i,r)}function Ei(e,n,t,s,r,i){zu(e,n);var l=(n.flags&128)!==0;if(!s&&!l)return r&&fo(n,t,!1),Xe(e,n,i);s=n.stateNode,im.current=n;var o=l&&typeof t.getDerivedStateFromError!="function"?null:s.render();return n.flags|=1,e!==null&&l?(n.child=st(n,e.child,null,i),n.child=st(n,null,o,i)):le(e,n,o,i),n.memoizedState=s.state,r&&fo(n,t,!0),n.child}function Mu(e){var n=e.stateNode;n.pendingContext?go(e,n.pendingContext,n.pendingContext!==n.context):n.context&&go(e,n.context,!1),Pl(e,n.containerInfo)}function wo(e,n,t,s,r){return tt(),al(r),n.flags|=256,le(e,n,t,s),n.child}var Ci={dehydrated:null,treeContext:null,retryLane:0};function ki(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ru(e,n,t){var s=n.pendingProps,r=j.current,i=!1,l=(n.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(r&2)!==0),o?(i=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),M(j,r&1),e===null)return yi(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=s.children,e=s.fallback,i?(s=n.mode,i=n.child,l={mode:"hidden",children:l},!(s&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=pr(l,s,0,null),e=Ln(e,s,t,null),i.return=n,e.return=n,i.sibling=e,n.child=i,n.child.memoizedState=ki(t),n.memoizedState=Ci,e):yl(n,l));if(r=e.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return lm(e,n,l,s,o,r,t);if(i){i=s.fallback,l=n.mode,r=e.child,o=r.sibling;var a={mode:"hidden",children:s.children};return!(l&1)&&n.child!==r?(s=n.child,s.childLanes=0,s.pendingProps=a,n.deletions=null):(s=mn(r,a),s.subtreeFlags=r.subtreeFlags&14680064),o!==null?i=mn(o,i):(i=Ln(i,l,t,null),i.flags|=2),i.return=n,s.return=n,s.sibling=i,n.child=s,s=i,i=n.child,l=e.child.memoizedState,l=l===null?ki(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~t,n.memoizedState=Ci,s}return i=e.child,e=i.sibling,s=mn(i,{mode:"visible",children:s.children}),!(n.mode&1)&&(s.lanes=t),s.return=n,s.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=s,n.memoizedState=null,s}function yl(e,n){return n=pr({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function fs(e,n,t,s){return s!==null&&al(s),st(n,e.child,null,t),e=yl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function lm(e,n,t,s,r,i,l){if(t)return n.flags&256?(n.flags&=-257,s=Ur(Error(v(422))),fs(e,n,l,s)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(i=s.fallback,r=n.mode,s=pr({mode:"visible",children:s.children},r,0,null),i=Ln(i,r,l,null),i.flags|=2,s.return=n,i.return=n,s.sibling=i,n.child=s,n.mode&1&&st(n,e.child,null,l),n.child.memoizedState=ki(l),n.memoizedState=Ci,i);if(!(n.mode&1))return fs(e,n,l,null);if(r.data==="$!"){if(s=r.nextSibling&&r.nextSibling.dataset,s)var o=s.dgst;return s=o,i=Error(v(419)),s=Ur(i,s,void 0),fs(e,n,l,s)}if(o=(l&e.childLanes)!==0,de||o){if(s=J,s!==null){switch(l&-l){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(s.suspendedLanes|l)?0:r,r!==0&&r!==i.retryLane&&(i.retryLane=r,Ge(e,r),ze(s,e,r,-1))}return El(),s=Ur(Error(v(421))),fs(e,n,l,s)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=hm.bind(null,e),r._reactRetry=n,null):(e=i.treeContext,fe=an(r.nextSibling),Ae=n,D=!0,Fe=null,e!==null&&(be[ye++]=Ue,be[ye++]=$e,be[ye++]=En,Ue=e.id,$e=e.overflow,En=n),n=yl(n,s.children),n.flags|=4096,n)}function zo(e,n,t){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),qi(e.return,n,t)}function $r(e,n,t,s,r){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:t,tailMode:r}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=s,i.tail=t,i.tailMode=r)}function Nu(e,n,t){var s=n.pendingProps,r=s.revealOrder,i=s.tail;if(le(e,n,s.children,t),s=j.current,s&2)s=s&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zo(e,t,n);else if(e.tag===19)zo(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(M(j,s),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&Gs(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),$r(n,!1,r,t,i);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Gs(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}$r(n,!0,t,null,i);break;case"together":$r(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Es(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Xe(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),kn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(v(153));if(n.child!==null){for(e=n.child,t=mn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=mn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function om(e,n,t){switch(n.tag){case 3:Mu(n),tt();break;case 5:au(n);break;case 1:pe(n.type)&&Vs(n);break;case 4:Pl(n,n.stateNode.containerInfo);break;case 10:var s=n.type._context,r=n.memoizedProps.value;M(Hs,s._currentValue),s._currentValue=r;break;case 13:if(s=n.memoizedState,s!==null)return s.dehydrated!==null?(M(j,j.current&1),n.flags|=128,null):t&n.child.childLanes?Ru(e,n,t):(M(j,j.current&1),e=Xe(e,n,t),e!==null?e.sibling:null);M(j,j.current&1);break;case 19:if(s=(t&n.childLanes)!==0,e.flags&128){if(s)return Nu(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),M(j,j.current),s)break;return null;case 22:case 23:return n.lanes=0,wu(e,n,t)}return Xe(e,n,t)}var Iu,Fi,Du,ju;Iu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Fi=function(){};Du=function(e,n,t,s){var r=e.memoizedProps;if(r!==s){e=n.stateNode,Sn(Be.current);var i=null;switch(t){case"input":r=Zr(e,r),s=Zr(e,s),i=[];break;case"select":r=_({},r,{value:void 0}),s=_({},s,{value:void 0}),i=[];break;case"textarea":r=ti(e,r),s=ti(e,s),i=[];break;default:typeof r.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Bs)}ri(t,s);var l;t=null;for(c in r)if(!s.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(l in o)o.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(zt.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in s){var a=s[c];if(o=r!=null?r[c]:void 0,s.hasOwnProperty(c)&&a!==o&&(a!=null||o!=null))if(c==="style")if(o){for(l in o)!o.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in a)a.hasOwnProperty(l)&&o[l]!==a[l]&&(t||(t={}),t[l]=a[l])}else t||(i||(i=[]),i.push(c,t)),t=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,o=o?o.__html:void 0,a!=null&&o!==a&&(i=i||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(zt.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&R("scroll",e),i||o===a||(i=[])):(i=i||[]).push(c,a))}t&&(i=i||[]).push("style",t);var c=i;(n.updateQueue=c)&&(n.flags|=4)}};ju=function(e,n,t,s){t!==s&&(n.flags|=4)};function vt(e,n){if(!D)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function te(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,s=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,s|=r.subtreeFlags&14680064,s|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,s|=r.subtreeFlags,s|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=s,e.childLanes=t,n}function am(e,n,t){var s=n.pendingProps;switch(ol(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return te(n),null;case 1:return pe(n.type)&&_s(),te(n),null;case 3:return s=n.stateNode,rt(),N(me),N(ie),fl(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Ps(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Fe!==null&&(ji(Fe),Fe=null))),Fi(e,n),te(n),null;case 5:gl(n);var r=Sn(Ht.current);if(t=n.type,e!==null&&n.stateNode!=null)Du(e,n,t,s,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!s){if(n.stateNode===null)throw Error(v(166));return te(n),null}if(e=Sn(Be.current),Ps(n)){s=n.stateNode,t=n.type;var i=n.memoizedProps;switch(s[Ie]=n,s[Ut]=i,e=(n.mode&1)!==0,t){case"dialog":R("cancel",s),R("close",s);break;case"iframe":case"object":case"embed":R("load",s);break;case"video":case"audio":for(r=0;r<qt.length;r++)R(qt[r],s);break;case"source":R("error",s);break;case"img":case"image":case"link":R("error",s),R("load",s);break;case"details":R("toggle",s);break;case"input":_l(s,i),R("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!i.multiple},R("invalid",s);break;case"textarea":Ul(s,i),R("invalid",s)}ri(t,i),r=null;for(var l in i)if(i.hasOwnProperty(l)){var o=i[l];l==="children"?typeof o=="string"?s.textContent!==o&&(i.suppressHydrationWarning!==!0&&ps(s.textContent,o,e),r=["children",o]):typeof o=="number"&&s.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&ps(s.textContent,o,e),r=["children",""+o]):zt.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&R("scroll",s)}switch(t){case"input":is(s),Vl(s,i,!0);break;case"textarea":is(s),$l(s);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(s.onclick=Bs)}s=r,n.updateQueue=s,s!==null&&(n.flags|=4)}else{l=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pa(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=l.createElement(t,{is:s.is}):(e=l.createElement(t),t==="select"&&(l=e,s.multiple?l.multiple=!0:s.size&&(l.size=s.size))):e=l.createElementNS(e,t),e[Ie]=n,e[Ut]=s,Iu(e,n,!1,!1),n.stateNode=e;e:{switch(l=ii(t,s),t){case"dialog":R("cancel",e),R("close",e),r=s;break;case"iframe":case"object":case"embed":R("load",e),r=s;break;case"video":case"audio":for(r=0;r<qt.length;r++)R(qt[r],e);r=s;break;case"source":R("error",e),r=s;break;case"img":case"image":case"link":R("error",e),R("load",e),r=s;break;case"details":R("toggle",e),r=s;break;case"input":_l(e,s),r=Zr(e,s),R("invalid",e);break;case"option":r=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},r=_({},s,{value:void 0}),R("invalid",e);break;case"textarea":Ul(e,s),r=ti(e,s),R("invalid",e);break;default:r=s}ri(t,r),o=r;for(i in o)if(o.hasOwnProperty(i)){var a=o[i];i==="style"?fa(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Pa(e,a)):i==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&Mt(e,a):typeof a=="number"&&Mt(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(zt.hasOwnProperty(i)?a!=null&&i==="onScroll"&&R("scroll",e):a!=null&&Qi(e,i,a,l))}switch(t){case"input":is(e),Vl(e,s,!1);break;case"textarea":is(e),$l(e);break;case"option":s.value!=null&&e.setAttribute("value",""+pn(s.value));break;case"select":e.multiple=!!s.multiple,i=s.value,i!=null?Gn(e,!!s.multiple,i,!1):s.defaultValue!=null&&Gn(e,!!s.multiple,s.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Bs)}switch(t){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return te(n),null;case 6:if(e&&n.stateNode!=null)ju(e,n,e.memoizedProps,s);else{if(typeof s!="string"&&n.stateNode===null)throw Error(v(166));if(t=Sn(Ht.current),Sn(Be.current),Ps(n)){if(s=n.stateNode,t=n.memoizedProps,s[Ie]=n,(i=s.nodeValue!==t)&&(e=Ae,e!==null))switch(e.tag){case 3:ps(s.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ps(s.nodeValue,t,(e.mode&1)!==0)}i&&(n.flags|=4)}else s=(t.nodeType===9?t:t.ownerDocument).createTextNode(s),s[Ie]=n,n.stateNode=s}return te(n),null;case 13:if(N(j),s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(D&&fe!==null&&n.mode&1&&!(n.flags&128))su(),tt(),n.flags|=98560,i=!1;else if(i=Ps(n),s!==null&&s.dehydrated!==null){if(e===null){if(!i)throw Error(v(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(v(317));i[Ie]=n}else tt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;te(n),i=!1}else Fe!==null&&(ji(Fe),Fe=null),i=!0;if(!i)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(n.child.flags|=8192,n.mode&1&&(e===null||j.current&1?G===0&&(G=3):El())),n.updateQueue!==null&&(n.flags|=4),te(n),null);case 4:return rt(),Fi(e,n),e===null&&_t(n.stateNode.containerInfo),te(n),null;case 10:return dl(n.type._context),te(n),null;case 17:return pe(n.type)&&_s(),te(n),null;case 19:if(N(j),i=n.memoizedState,i===null)return te(n),null;if(s=(n.flags&128)!==0,l=i.rendering,l===null)if(s)vt(i,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=Gs(e),l!==null){for(n.flags|=128,vt(i,!1),s=l.updateQueue,s!==null&&(n.updateQueue=s,n.flags|=4),n.subtreeFlags=0,s=t,t=n.child;t!==null;)i=t,e=s,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return M(j,j.current&1|2),n.child}e=e.sibling}i.tail!==null&&H()>lt&&(n.flags|=128,s=!0,vt(i,!1),n.lanes=4194304)}else{if(!s)if(e=Gs(l),e!==null){if(n.flags|=128,s=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),vt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!D)return te(n),null}else 2*H()-i.renderingStartTime>lt&&t!==1073741824&&(n.flags|=128,s=!0,vt(i,!1),n.lanes=4194304);i.isBackwards?(l.sibling=n.child,n.child=l):(t=i.last,t!==null?t.sibling=l:n.child=l,i.last=l)}return i.tail!==null?(n=i.tail,i.rendering=n,i.tail=n.sibling,i.renderingStartTime=H(),n.sibling=null,t=j.current,M(j,s?t&1|2:t&1),n):(te(n),null);case 22:case 23:return Tl(),s=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(n.flags|=8192),s&&n.mode&1?ge&1073741824&&(te(n),n.subtreeFlags&6&&(n.flags|=8192)):te(n),null;case 24:return null;case 25:return null}throw Error(v(156,n.tag))}function um(e,n){switch(ol(n),n.tag){case 1:return pe(n.type)&&_s(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return rt(),N(me),N(ie),fl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return gl(n),null;case 13:if(N(j),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(v(340));tt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return N(j),null;case 4:return rt(),null;case 10:return dl(n.type._context),null;case 22:case 23:return Tl(),null;case 24:return null;default:return null}}var As=!1,re=!1,cm=typeof WeakSet=="function"?WeakSet:Set,y=null;function Qn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(s){V(e,n,s)}else t.current=null}function wi(e,n,t){try{t()}catch(s){V(e,n,s)}}var Mo=!1;function dm(e,n){if(gi=Is,e=$a(),il(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var s=t.getSelection&&t.getSelection();if(s&&s.rangeCount!==0){t=s.anchorNode;var r=s.anchorOffset,i=s.focusNode;s=s.focusOffset;try{t.nodeType,i.nodeType}catch{t=null;break e}var l=0,o=-1,a=-1,c=0,f=0,g=e,p=null;n:for(;;){for(var h;g!==t||r!==0&&g.nodeType!==3||(o=l+r),g!==i||s!==0&&g.nodeType!==3||(a=l+s),g.nodeType===3&&(l+=g.nodeValue.length),(h=g.firstChild)!==null;)p=g,g=h;for(;;){if(g===e)break n;if(p===t&&++c===r&&(o=l),p===i&&++f===s&&(a=l),(h=g.nextSibling)!==null)break;g=p,p=g.parentNode}g=h}t=o===-1||a===-1?null:{start:o,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(fi={focusedElem:e,selectionRange:t},Is=!1,y=n;y!==null;)if(n=y,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,y=e;else for(;y!==null;){n=y;try{var O=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(O!==null){var b=O.memoizedProps,I=O.memoizedState,d=n.stateNode,u=d.getSnapshotBeforeUpdate(n.elementType===n.type?b:Ce(n.type,b),I);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var m=n.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(v(163))}}catch(A){V(n,n.return,A)}if(e=n.sibling,e!==null){e.return=n.return,y=e;break}y=n.return}return O=Mo,Mo=!1,O}function kt(e,n,t){var s=n.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var r=s=s.next;do{if((r.tag&e)===e){var i=r.destroy;r.destroy=void 0,i!==void 0&&wi(n,t,i)}r=r.next}while(r!==s)}}function dr(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var s=t.create;t.destroy=s()}t=t.next}while(t!==n)}}function zi(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Bu(e){var n=e.alternate;n!==null&&(e.alternate=null,Bu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ie],delete n[Ut],delete n[hi],delete n[Wd],delete n[Gd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _u(e){return e.tag===5||e.tag===3||e.tag===4}function Ro(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_u(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Mi(e,n,t){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Bs));else if(s!==4&&(e=e.child,e!==null))for(Mi(e,n,t),e=e.sibling;e!==null;)Mi(e,n,t),e=e.sibling}function Ri(e,n,t){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Ri(e,n,t),e=e.sibling;e!==null;)Ri(e,n,t),e=e.sibling}var Y=null,ke=!1;function Je(e,n,t){for(t=t.child;t!==null;)Vu(e,n,t),t=t.sibling}function Vu(e,n,t){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(sr,t)}catch{}switch(t.tag){case 5:re||Qn(t,n);case 6:var s=Y,r=ke;Y=null,Je(e,n,t),Y=s,ke=r,Y!==null&&(ke?(e=Y,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Y.removeChild(t.stateNode));break;case 18:Y!==null&&(ke?(e=Y,t=t.stateNode,e.nodeType===8?Ir(e.parentNode,t):e.nodeType===1&&Ir(e,t),Dt(e)):Ir(Y,t.stateNode));break;case 4:s=Y,r=ke,Y=t.stateNode.containerInfo,ke=!0,Je(e,n,t),Y=s,ke=r;break;case 0:case 11:case 14:case 15:if(!re&&(s=t.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){r=s=s.next;do{var i=r,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&wi(t,n,l),r=r.next}while(r!==s)}Je(e,n,t);break;case 1:if(!re&&(Qn(t,n),s=t.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=t.memoizedProps,s.state=t.memoizedState,s.componentWillUnmount()}catch(o){V(t,n,o)}Je(e,n,t);break;case 21:Je(e,n,t);break;case 22:t.mode&1?(re=(s=re)||t.memoizedState!==null,Je(e,n,t),re=s):Je(e,n,t);break;default:Je(e,n,t)}}function No(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new cm),n.forEach(function(s){var r=Om.bind(null,e,s);t.has(s)||(t.add(s),s.then(r,r))})}}function Ee(e,n){var t=n.deletions;if(t!==null)for(var s=0;s<t.length;s++){var r=t[s];try{var i=e,l=n,o=l;e:for(;o!==null;){switch(o.tag){case 5:Y=o.stateNode,ke=!1;break e;case 3:Y=o.stateNode.containerInfo,ke=!0;break e;case 4:Y=o.stateNode.containerInfo,ke=!0;break e}o=o.return}if(Y===null)throw Error(v(160));Vu(i,l,r),Y=null,ke=!1;var a=r.alternate;a!==null&&(a.return=null),r.return=null}catch(c){V(r,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Uu(n,e),n=n.sibling}function Uu(e,n){var t=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ee(n,e),Re(e),s&4){try{kt(3,e,e.return),dr(3,e)}catch(b){V(e,e.return,b)}try{kt(5,e,e.return)}catch(b){V(e,e.return,b)}}break;case 1:Ee(n,e),Re(e),s&512&&t!==null&&Qn(t,t.return);break;case 5:if(Ee(n,e),Re(e),s&512&&t!==null&&Qn(t,t.return),e.flags&32){var r=e.stateNode;try{Mt(r,"")}catch(b){V(e,e.return,b)}}if(s&4&&(r=e.stateNode,r!=null)){var i=e.memoizedProps,l=t!==null?t.memoizedProps:i,o=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&da(r,i),ii(o,l);var c=ii(o,i);for(l=0;l<a.length;l+=2){var f=a[l],g=a[l+1];f==="style"?fa(r,g):f==="dangerouslySetInnerHTML"?Pa(r,g):f==="children"?Mt(r,g):Qi(r,f,g,c)}switch(o){case"input":ei(r,i);break;case"textarea":ma(r,i);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!i.multiple;var h=i.value;h!=null?Gn(r,!!i.multiple,h,!1):p!==!!i.multiple&&(i.defaultValue!=null?Gn(r,!!i.multiple,i.defaultValue,!0):Gn(r,!!i.multiple,i.multiple?[]:"",!1))}r[Ut]=i}catch(b){V(e,e.return,b)}}break;case 6:if(Ee(n,e),Re(e),s&4){if(e.stateNode===null)throw Error(v(162));r=e.stateNode,i=e.memoizedProps;try{r.nodeValue=i}catch(b){V(e,e.return,b)}}break;case 3:if(Ee(n,e),Re(e),s&4&&t!==null&&t.memoizedState.isDehydrated)try{Dt(n.containerInfo)}catch(b){V(e,e.return,b)}break;case 4:Ee(n,e),Re(e);break;case 13:Ee(n,e),Re(e),r=e.child,r.flags&8192&&(i=r.memoizedState!==null,r.stateNode.isHidden=i,!i||r.alternate!==null&&r.alternate.memoizedState!==null||(xl=H())),s&4&&No(e);break;case 22:if(f=t!==null&&t.memoizedState!==null,e.mode&1?(re=(c=re)||f,Ee(n,e),re=c):Ee(n,e),Re(e),s&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!f&&e.mode&1)for(y=e,f=e.child;f!==null;){for(g=y=f;y!==null;){switch(p=y,h=p.child,p.tag){case 0:case 11:case 14:case 15:kt(4,p,p.return);break;case 1:Qn(p,p.return);var O=p.stateNode;if(typeof O.componentWillUnmount=="function"){s=p,t=p.return;try{n=s,O.props=n.memoizedProps,O.state=n.memoizedState,O.componentWillUnmount()}catch(b){V(s,t,b)}}break;case 5:Qn(p,p.return);break;case 22:if(p.memoizedState!==null){Do(g);continue}}h!==null?(h.return=p,y=h):Do(g)}f=f.sibling}e:for(f=null,g=e;;){if(g.tag===5){if(f===null){f=g;try{r=g.stateNode,c?(i=r.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=g.stateNode,a=g.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,o.style.display=ga("display",l))}catch(b){V(e,e.return,b)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(b){V(e,e.return,b)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ee(n,e),Re(e),s&4&&No(e);break;case 21:break;default:Ee(n,e),Re(e)}}function Re(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(_u(t)){var s=t;break e}t=t.return}throw Error(v(160))}switch(s.tag){case 5:var r=s.stateNode;s.flags&32&&(Mt(r,""),s.flags&=-33);var i=Ro(e);Ri(e,i,r);break;case 3:case 4:var l=s.stateNode.containerInfo,o=Ro(e);Mi(e,o,l);break;default:throw Error(v(161))}}catch(a){V(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function mm(e,n,t){y=e,$u(e)}function $u(e,n,t){for(var s=(e.mode&1)!==0;y!==null;){var r=y,i=r.child;if(r.tag===22&&s){var l=r.memoizedState!==null||As;if(!l){var o=r.alternate,a=o!==null&&o.memoizedState!==null||re;o=As;var c=re;if(As=l,(re=a)&&!c)for(y=r;y!==null;)l=y,a=l.child,l.tag===22&&l.memoizedState!==null?jo(r):a!==null?(a.return=l,y=a):jo(r);for(;i!==null;)y=i,$u(i),i=i.sibling;y=r,As=o,re=c}Io(e)}else r.subtreeFlags&8772&&i!==null?(i.return=r,y=i):Io(e)}}function Io(e){for(;y!==null;){var n=y;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:re||dr(5,n);break;case 1:var s=n.stateNode;if(n.flags&4&&!re)if(t===null)s.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:Ce(n.type,t.memoizedProps);s.componentDidUpdate(r,t.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var i=n.updateQueue;i!==null&&bo(n,i,s);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}bo(n,l,t)}break;case 5:var o=n.stateNode;if(t===null&&n.flags&4){t=o;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&Dt(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(v(163))}re||n.flags&512&&zi(n)}catch(p){V(n,n.return,p)}}if(n===e){y=null;break}if(t=n.sibling,t!==null){t.return=n.return,y=t;break}y=n.return}}function Do(e){for(;y!==null;){var n=y;if(n===e){y=null;break}var t=n.sibling;if(t!==null){t.return=n.return,y=t;break}y=n.return}}function jo(e){for(;y!==null;){var n=y;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{dr(4,n)}catch(a){V(n,t,a)}break;case 1:var s=n.stateNode;if(typeof s.componentDidMount=="function"){var r=n.return;try{s.componentDidMount()}catch(a){V(n,r,a)}}var i=n.return;try{zi(n)}catch(a){V(n,i,a)}break;case 5:var l=n.return;try{zi(n)}catch(a){V(n,l,a)}}}catch(a){V(n,n.return,a)}if(n===e){y=null;break}var o=n.sibling;if(o!==null){o.return=n.return,y=o;break}y=n.return}}var pm=Math.ceil,Js=Ke.ReactCurrentDispatcher,ql=Ke.ReactCurrentOwner,Se=Ke.ReactCurrentBatchConfig,w=0,J=null,Q=null,Z=0,ge=0,Wn=fn(0),G=0,Xt=null,kn=0,mr=0,Sl=0,Ft=null,ce=null,xl=0,lt=1/0,_e=null,Ys=!1,Ni=null,cn=null,vs=!1,sn=null,Zs=0,wt=0,Ii=null,Cs=-1,ks=0;function oe(){return w&6?H():Cs!==-1?Cs:Cs=H()}function dn(e){return e.mode&1?w&2&&Z!==0?Z&-Z:Kd.transition!==null?(ks===0&&(ks=Ea()),ks):(e=z,e!==0||(e=window.event,e=e===void 0?16:Ra(e.type)),e):1}function ze(e,n,t,s){if(50<wt)throw wt=0,Ii=null,Error(v(185));Jt(e,t,s),(!(w&2)||e!==J)&&(e===J&&(!(w&2)&&(mr|=t),G===4&&nn(e,Z)),Pe(e,s),t===1&&w===0&&!(n.mode&1)&&(lt=H()+500,ar&&An()))}function Pe(e,n){var t=e.callbackNode;Kc(e,n);var s=Ns(e,e===J?Z:0);if(s===0)t!==null&&Wl(t),e.callbackNode=null,e.callbackPriority=0;else if(n=s&-s,e.callbackPriority!==n){if(t!=null&&Wl(t),n===1)e.tag===0?Xd(Bo.bind(null,e)):eu(Bo.bind(null,e)),Hd(function(){!(w&6)&&An()}),t=null;else{switch(Ca(s)){case 1:t=Ji;break;case 4:t=La;break;case 16:t=Rs;break;case 536870912:t=Ta;break;default:t=Rs}t=Yu(t,Hu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Hu(e,n){if(Cs=-1,ks=0,w&6)throw Error(v(327));var t=e.callbackNode;if(Zn()&&e.callbackNode!==t)return null;var s=Ns(e,e===J?Z:0);if(s===0)return null;if(s&30||s&e.expiredLanes||n)n=er(e,s);else{n=s;var r=w;w|=2;var i=Wu();(J!==e||Z!==n)&&(_e=null,lt=H()+500,xn(e,n));do try{fm();break}catch(o){Qu(e,o)}while(!0);cl(),Js.current=i,w=r,Q!==null?n=0:(J=null,Z=0,n=G)}if(n!==0){if(n===2&&(r=ci(e),r!==0&&(s=r,n=Di(e,r))),n===1)throw t=Xt,xn(e,0),nn(e,s),Pe(e,H()),t;if(n===6)nn(e,s);else{if(r=e.current.alternate,!(s&30)&&!Pm(r)&&(n=er(e,s),n===2&&(i=ci(e),i!==0&&(s=i,n=Di(e,i))),n===1))throw t=Xt,xn(e,0),nn(e,s),Pe(e,H()),t;switch(e.finishedWork=r,e.finishedLanes=s,n){case 0:case 1:throw Error(v(345));case 2:bn(e,ce,_e);break;case 3:if(nn(e,s),(s&130023424)===s&&(n=xl+500-H(),10<n)){if(Ns(e,0)!==0)break;if(r=e.suspendedLanes,(r&s)!==s){oe(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=vi(bn.bind(null,e,ce,_e),n);break}bn(e,ce,_e);break;case 4:if(nn(e,s),(s&4194240)===s)break;for(n=e.eventTimes,r=-1;0<s;){var l=31-we(s);i=1<<l,l=n[l],l>r&&(r=l),s&=~i}if(s=r,s=H()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*pm(s/1960))-s,10<s){e.timeoutHandle=vi(bn.bind(null,e,ce,_e),s);break}bn(e,ce,_e);break;case 5:bn(e,ce,_e);break;default:throw Error(v(329))}}}return Pe(e,H()),e.callbackNode===t?Hu.bind(null,e):null}function Di(e,n){var t=Ft;return e.current.memoizedState.isDehydrated&&(xn(e,n).flags|=256),e=er(e,n),e!==2&&(n=ce,ce=t,n!==null&&ji(n)),e}function ji(e){ce===null?ce=e:ce.push.apply(ce,e)}function Pm(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var s=0;s<t.length;s++){var r=t[s],i=r.getSnapshot;r=r.value;try{if(!Me(i(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function nn(e,n){for(n&=~Sl,n&=~mr,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-we(n),s=1<<t;e[t]=-1,n&=~s}}function Bo(e){if(w&6)throw Error(v(327));Zn();var n=Ns(e,0);if(!(n&1))return Pe(e,H()),null;var t=er(e,n);if(e.tag!==0&&t===2){var s=ci(e);s!==0&&(n=s,t=Di(e,s))}if(t===1)throw t=Xt,xn(e,0),nn(e,n),Pe(e,H()),t;if(t===6)throw Error(v(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,bn(e,ce,_e),Pe(e,H()),null}function Ll(e,n){var t=w;w|=1;try{return e(n)}finally{w=t,w===0&&(lt=H()+500,ar&&An())}}function Fn(e){sn!==null&&sn.tag===0&&!(w&6)&&Zn();var n=w;w|=1;var t=Se.transition,s=z;try{if(Se.transition=null,z=1,e)return e()}finally{z=s,Se.transition=t,w=n,!(w&6)&&An()}}function Tl(){ge=Wn.current,N(Wn)}function xn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,$d(t)),Q!==null)for(t=Q.return;t!==null;){var s=t;switch(ol(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&_s();break;case 3:rt(),N(me),N(ie),fl();break;case 5:gl(s);break;case 4:rt();break;case 13:N(j);break;case 19:N(j);break;case 10:dl(s.type._context);break;case 22:case 23:Tl()}t=t.return}if(J=e,Q=e=mn(e.current,null),Z=ge=n,G=0,Xt=null,Sl=mr=kn=0,ce=Ft=null,qn!==null){for(n=0;n<qn.length;n++)if(t=qn[n],s=t.interleaved,s!==null){t.interleaved=null;var r=s.next,i=t.pending;if(i!==null){var l=i.next;i.next=r,s.next=l}t.pending=s}qn=null}return e}function Qu(e,n){do{var t=Q;try{if(cl(),Ls.current=Ks,Xs){for(var s=B.memoizedState;s!==null;){var r=s.queue;r!==null&&(r.pending=null),s=s.next}Xs=!1}if(Cn=0,K=W=B=null,Ct=!1,Qt=0,ql.current=null,t===null||t.return===null){G=1,Xt=n,Q=null;break}e:{var i=e,l=t.return,o=t,a=n;if(n=Z,o.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,f=o,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var h=To(l);if(h!==null){h.flags&=-257,Eo(h,l,o,i,n),h.mode&1&&Lo(i,c,n),n=h,a=c;var O=n.updateQueue;if(O===null){var b=new Set;b.add(a),n.updateQueue=b}else O.add(a);break e}else{if(!(n&1)){Lo(i,c,n),El();break e}a=Error(v(426))}}else if(D&&o.mode&1){var I=To(l);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Eo(I,l,o,i,n),al(it(a,o));break e}}i=a=it(a,o),G!==4&&(G=2),Ft===null?Ft=[i]:Ft.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,n&=-n,i.lanes|=n;var d=Cu(i,a,n);Oo(i,d);break e;case 1:o=a;var u=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof u.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(cn===null||!cn.has(m)))){i.flags|=65536,n&=-n,i.lanes|=n;var A=ku(i,o,n);Oo(i,A);break e}}i=i.return}while(i!==null)}Xu(t)}catch(q){n=q,Q===t&&t!==null&&(Q=t=t.return);continue}break}while(!0)}function Wu(){var e=Js.current;return Js.current=Ks,e===null?Ks:e}function El(){(G===0||G===3||G===2)&&(G=4),J===null||!(kn&268435455)&&!(mr&268435455)||nn(J,Z)}function er(e,n){var t=w;w|=2;var s=Wu();(J!==e||Z!==n)&&(_e=null,xn(e,n));do try{gm();break}catch(r){Qu(e,r)}while(!0);if(cl(),w=t,Js.current=s,Q!==null)throw Error(v(261));return J=null,Z=0,G}function gm(){for(;Q!==null;)Gu(Q)}function fm(){for(;Q!==null&&!_c();)Gu(Q)}function Gu(e){var n=Ju(e.alternate,e,ge);e.memoizedProps=e.pendingProps,n===null?Xu(e):Q=n,ql.current=null}function Xu(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=um(t,n),t!==null){t.flags&=32767,Q=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,Q=null;return}}else if(t=am(t,n,ge),t!==null){Q=t;return}if(n=n.sibling,n!==null){Q=n;return}Q=n=e}while(n!==null);G===0&&(G=5)}function bn(e,n,t){var s=z,r=Se.transition;try{Se.transition=null,z=1,Am(e,n,t,s)}finally{Se.transition=r,z=s}return null}function Am(e,n,t,s){do Zn();while(sn!==null);if(w&6)throw Error(v(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(v(177));e.callbackNode=null,e.callbackPriority=0;var i=t.lanes|t.childLanes;if(Jc(e,i),e===J&&(Q=J=null,Z=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||vs||(vs=!0,Yu(Rs,function(){return Zn(),null})),i=(t.flags&15990)!==0,t.subtreeFlags&15990||i){i=Se.transition,Se.transition=null;var l=z;z=1;var o=w;w|=4,ql.current=null,dm(e,t),Uu(t,e),Id(fi),Is=!!gi,fi=gi=null,e.current=t,mm(t),Vc(),w=o,z=l,Se.transition=i}else e.current=t;if(vs&&(vs=!1,sn=e,Zs=r),i=e.pendingLanes,i===0&&(cn=null),Hc(t.stateNode),Pe(e,H()),n!==null)for(s=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],s(r.value,{componentStack:r.stack,digest:r.digest});if(Ys)throw Ys=!1,e=Ni,Ni=null,e;return Zs&1&&e.tag!==0&&Zn(),i=e.pendingLanes,i&1?e===Ii?wt++:(wt=0,Ii=e):wt=0,An(),null}function Zn(){if(sn!==null){var e=Ca(Zs),n=Se.transition,t=z;try{if(Se.transition=null,z=16>e?16:e,sn===null)var s=!1;else{if(e=sn,sn=null,Zs=0,w&6)throw Error(v(331));var r=w;for(w|=4,y=e.current;y!==null;){var i=y,l=i.child;if(y.flags&16){var o=i.deletions;if(o!==null){for(var a=0;a<o.length;a++){var c=o[a];for(y=c;y!==null;){var f=y;switch(f.tag){case 0:case 11:case 15:kt(8,f,i)}var g=f.child;if(g!==null)g.return=f,y=g;else for(;y!==null;){f=y;var p=f.sibling,h=f.return;if(Bu(f),f===c){y=null;break}if(p!==null){p.return=h,y=p;break}y=h}}}var O=i.alternate;if(O!==null){var b=O.child;if(b!==null){O.child=null;do{var I=b.sibling;b.sibling=null,b=I}while(b!==null)}}y=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,y=l;else e:for(;y!==null;){if(i=y,i.flags&2048)switch(i.tag){case 0:case 11:case 15:kt(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,y=d;break e}y=i.return}}var u=e.current;for(y=u;y!==null;){l=y;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,y=m;else e:for(l=u;y!==null;){if(o=y,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:dr(9,o)}}catch(q){V(o,o.return,q)}if(o===l){y=null;break e}var A=o.sibling;if(A!==null){A.return=o.return,y=A;break e}y=o.return}}if(w=r,An(),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(sr,e)}catch{}s=!0}return s}finally{z=t,Se.transition=n}}return!1}function _o(e,n,t){n=it(t,n),n=Cu(e,n,1),e=un(e,n,1),n=oe(),e!==null&&(Jt(e,1,n),Pe(e,n))}function V(e,n,t){if(e.tag===3)_o(e,e,t);else for(;n!==null;){if(n.tag===3){_o(n,e,t);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(cn===null||!cn.has(s))){e=it(t,e),e=ku(n,e,1),n=un(n,e,1),e=oe(),n!==null&&(Jt(n,1,e),Pe(n,e));break}}n=n.return}}function vm(e,n,t){var s=e.pingCache;s!==null&&s.delete(n),n=oe(),e.pingedLanes|=e.suspendedLanes&t,J===e&&(Z&t)===t&&(G===4||G===3&&(Z&130023424)===Z&&500>H()-xl?xn(e,0):Sl|=t),Pe(e,n)}function Ku(e,n){n===0&&(e.mode&1?(n=as,as<<=1,!(as&130023424)&&(as=4194304)):n=1);var t=oe();e=Ge(e,n),e!==null&&(Jt(e,n,t),Pe(e,t))}function hm(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Ku(e,t)}function Om(e,n){var t=0;switch(e.tag){case 13:var s=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(v(314))}s!==null&&s.delete(n),Ku(e,t)}var Ju;Ju=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||me.current)de=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return de=!1,om(e,n,t);de=!!(e.flags&131072)}else de=!1,D&&n.flags&1048576&&nu(n,$s,n.index);switch(n.lanes=0,n.tag){case 2:var s=n.type;Es(e,n),e=n.pendingProps;var r=nt(n,ie.current);Yn(n,t),r=vl(null,n,s,e,r,t);var i=hl();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,pe(s)?(i=!0,Vs(n)):i=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,pl(n),r.updater=cr,n.stateNode=r,r._reactInternals=n,xi(n,s,e,t),n=Ei(null,n,s,!0,i,t)):(n.tag=0,D&&i&&ll(n),le(null,n,r,t),n=n.child),n;case 16:s=n.elementType;e:{switch(Es(e,n),e=n.pendingProps,r=s._init,s=r(s._payload),n.type=s,r=n.tag=ym(s),e=Ce(s,e),r){case 0:n=Ti(null,n,s,e,t);break e;case 1:n=Fo(null,n,s,e,t);break e;case 11:n=Co(null,n,s,e,t);break e;case 14:n=ko(null,n,s,Ce(s.type,e),t);break e}throw Error(v(306,s,""))}return n;case 0:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:Ce(s,r),Ti(e,n,s,r,t);case 1:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:Ce(s,r),Fo(e,n,s,r,t);case 3:e:{if(Mu(n),e===null)throw Error(v(387));s=n.pendingProps,i=n.memoizedState,r=i.element,ou(e,n),Ws(n,s,null,t);var l=n.memoizedState;if(s=l.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){r=it(Error(v(423)),n),n=wo(e,n,s,t,r);break e}else if(s!==r){r=it(Error(v(424)),n),n=wo(e,n,s,t,r);break e}else for(fe=an(n.stateNode.containerInfo.firstChild),Ae=n,D=!0,Fe=null,t=iu(n,null,s,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(tt(),s===r){n=Xe(e,n,t);break e}le(e,n,s,t)}n=n.child}return n;case 5:return au(n),e===null&&yi(n),s=n.type,r=n.pendingProps,i=e!==null?e.memoizedProps:null,l=r.children,Ai(s,r)?l=null:i!==null&&Ai(s,i)&&(n.flags|=32),zu(e,n),le(e,n,l,t),n.child;case 6:return e===null&&yi(n),null;case 13:return Ru(e,n,t);case 4:return Pl(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=st(n,null,s,t):le(e,n,s,t),n.child;case 11:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:Ce(s,r),Co(e,n,s,r,t);case 7:return le(e,n,n.pendingProps,t),n.child;case 8:return le(e,n,n.pendingProps.children,t),n.child;case 12:return le(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(s=n.type._context,r=n.pendingProps,i=n.memoizedProps,l=r.value,M(Hs,s._currentValue),s._currentValue=l,i!==null)if(Me(i.value,l)){if(i.children===r.children&&!me.current){n=Xe(e,n,t);break e}}else for(i=n.child,i!==null&&(i.return=n);i!==null;){var o=i.dependencies;if(o!==null){l=i.child;for(var a=o.firstContext;a!==null;){if(a.context===s){if(i.tag===1){a=He(-1,t&-t),a.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?a.next=a:(a.next=f.next,f.next=a),c.pending=a}}i.lanes|=t,a=i.alternate,a!==null&&(a.lanes|=t),qi(i.return,t,n),o.lanes|=t;break}a=a.next}}else if(i.tag===10)l=i.type===n.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(v(341));l.lanes|=t,o=l.alternate,o!==null&&(o.lanes|=t),qi(l,t,n),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===n){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}le(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,s=n.pendingProps.children,Yn(n,t),r=xe(r),s=s(r),n.flags|=1,le(e,n,s,t),n.child;case 14:return s=n.type,r=Ce(s,n.pendingProps),r=Ce(s.type,r),ko(e,n,s,r,t);case 15:return Fu(e,n,n.type,n.pendingProps,t);case 17:return s=n.type,r=n.pendingProps,r=n.elementType===s?r:Ce(s,r),Es(e,n),n.tag=1,pe(s)?(e=!0,Vs(n)):e=!1,Yn(n,t),Eu(n,s,r),xi(n,s,r,t),Ei(null,n,s,!0,e,t);case 19:return Nu(e,n,t);case 22:return wu(e,n,t)}throw Error(v(156,n.tag))};function Yu(e,n){return xa(e,n)}function bm(e,n,t,s){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,n,t,s){return new bm(e,n,t,s)}function Cl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ym(e){if(typeof e=="function")return Cl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gi)return 11;if(e===Xi)return 14}return 2}function mn(e,n){var t=e.alternate;return t===null?(t=qe(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Fs(e,n,t,s,r,i){var l=2;if(s=e,typeof e=="function")Cl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case In:return Ln(t.children,r,i,n);case Wi:l=8,r|=8;break;case Xr:return e=qe(12,t,n,r|2),e.elementType=Xr,e.lanes=i,e;case Kr:return e=qe(13,t,n,r),e.elementType=Kr,e.lanes=i,e;case Jr:return e=qe(19,t,n,r),e.elementType=Jr,e.lanes=i,e;case aa:return pr(t,r,i,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case la:l=10;break e;case oa:l=9;break e;case Gi:l=11;break e;case Xi:l=14;break e;case Ye:l=16,s=null;break e}throw Error(v(130,e==null?e:typeof e,""))}return n=qe(l,t,n,r),n.elementType=e,n.type=s,n.lanes=i,n}function Ln(e,n,t,s){return e=qe(7,e,s,n),e.lanes=t,e}function pr(e,n,t,s){return e=qe(22,e,s,n),e.elementType=aa,e.lanes=t,e.stateNode={isHidden:!1},e}function Hr(e,n,t){return e=qe(6,e,null,n),e.lanes=t,e}function Qr(e,n,t){return n=qe(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function qm(e,n,t,s,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lr(0),this.expirationTimes=Lr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lr(0),this.identifierPrefix=s,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function kl(e,n,t,s,r,i,l,o,a){return e=new qm(e,n,t,o,a),n===1?(n=1,i===!0&&(n|=8)):n=0,i=qe(3,null,null,n),e.current=i,i.stateNode=e,i.memoizedState={element:s,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},pl(i),e}function Sm(e,n,t){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nn,key:s==null?null:""+s,children:e,containerInfo:n,implementation:t}}function Zu(e){if(!e)return Pn;e=e._reactInternals;e:{if(zn(e)!==e||e.tag!==1)throw Error(v(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(pe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(v(171))}if(e.tag===1){var t=e.type;if(pe(t))return Za(e,t,n)}return n}function ec(e,n,t,s,r,i,l,o,a){return e=kl(t,s,!0,e,r,i,l,o,a),e.context=Zu(null),t=e.current,s=oe(),r=dn(t),i=He(s,r),i.callback=n??null,un(t,i,r),e.current.lanes=r,Jt(e,r,s),Pe(e,s),e}function Pr(e,n,t,s){var r=n.current,i=oe(),l=dn(r);return t=Zu(t),n.context===null?n.context=t:n.pendingContext=t,n=He(i,l),n.payload={element:e},s=s===void 0?null:s,s!==null&&(n.callback=s),e=un(r,n,l),e!==null&&(ze(e,r,l,i),xs(e,r,l)),l}function nr(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vo(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Fl(e,n){Vo(e,n),(e=e.alternate)&&Vo(e,n)}function xm(){return null}var nc=typeof reportError=="function"?reportError:function(e){console.error(e)};function wl(e){this._internalRoot=e}gr.prototype.render=wl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(v(409));Pr(e,n,null,null)};gr.prototype.unmount=wl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Fn(function(){Pr(null,e,null,null)}),n[We]=null}};function gr(e){this._internalRoot=e}gr.prototype.unstable_scheduleHydration=function(e){if(e){var n=wa();e={blockedOn:null,target:e,priority:n};for(var t=0;t<en.length&&n!==0&&n<en[t].priority;t++);en.splice(t,0,e),t===0&&Ma(e)}};function zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Uo(){}function Lm(e,n,t,s,r){if(r){if(typeof s=="function"){var i=s;s=function(){var c=nr(l);i.call(c)}}var l=ec(n,s,e,0,null,!1,!1,"",Uo);return e._reactRootContainer=l,e[We]=l.current,_t(e.nodeType===8?e.parentNode:e),Fn(),l}for(;r=e.lastChild;)e.removeChild(r);if(typeof s=="function"){var o=s;s=function(){var c=nr(a);o.call(c)}}var a=kl(e,0,!1,null,null,!1,!1,"",Uo);return e._reactRootContainer=a,e[We]=a.current,_t(e.nodeType===8?e.parentNode:e),Fn(function(){Pr(n,a,t,s)}),a}function Ar(e,n,t,s,r){var i=t._reactRootContainer;if(i){var l=i;if(typeof r=="function"){var o=r;r=function(){var a=nr(l);o.call(a)}}Pr(n,l,e,r)}else l=Lm(t,n,e,r,s);return nr(l)}ka=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=yt(n.pendingLanes);t!==0&&(Yi(n,t|1),Pe(n,H()),!(w&6)&&(lt=H()+500,An()))}break;case 13:Fn(function(){var s=Ge(e,1);if(s!==null){var r=oe();ze(s,e,1,r)}}),Fl(e,1)}};Zi=function(e){if(e.tag===13){var n=Ge(e,134217728);if(n!==null){var t=oe();ze(n,e,134217728,t)}Fl(e,134217728)}};Fa=function(e){if(e.tag===13){var n=dn(e),t=Ge(e,n);if(t!==null){var s=oe();ze(t,e,n,s)}Fl(e,n)}};wa=function(){return z};za=function(e,n){var t=z;try{return z=e,n()}finally{z=t}};oi=function(e,n,t){switch(n){case"input":if(ei(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var s=t[n];if(s!==e&&s.form===e.form){var r=or(s);if(!r)throw Error(v(90));ca(s),ei(s,r)}}}break;case"textarea":ma(e,t);break;case"select":n=t.value,n!=null&&Gn(e,!!t.multiple,n,!1)}};ha=Ll;Oa=Fn;var Tm={usingClientEntryPoint:!1,Events:[Zt,_n,or,Aa,va,Ll]},ht={findFiberByHostInstance:yn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Em={bundleType:ht.bundleType,version:ht.version,rendererPackageName:ht.rendererPackageName,rendererConfig:ht.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ke.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qa(e),e===null?null:e.stateNode},findFiberByHostInstance:ht.findFiberByHostInstance||xm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hs.isDisabled&&hs.supportsFiber)try{sr=hs.inject(Em),je=hs}catch{}}he.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tm;he.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zl(n))throw Error(v(200));return Sm(e,n,null,t)};he.createRoot=function(e,n){if(!zl(e))throw Error(v(299));var t=!1,s="",r=nc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=kl(e,1,!1,null,null,t,!1,s,r),e[We]=n.current,_t(e.nodeType===8?e.parentNode:e),new wl(n)};he.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(v(188)):(e=Object.keys(e).join(","),Error(v(268,e)));return e=qa(n),e=e===null?null:e.stateNode,e};he.flushSync=function(e){return Fn(e)};he.hydrate=function(e,n,t){if(!fr(n))throw Error(v(200));return Ar(null,e,n,!0,t)};he.hydrateRoot=function(e,n,t){if(!zl(e))throw Error(v(405));var s=t!=null&&t.hydratedSources||null,r=!1,i="",l=nc;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=ec(n,null,e,1,t??null,r,!1,i,l),e[We]=n.current,_t(e),s)for(e=0;e<s.length;e++)t=s[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new gr(n)};he.render=function(e,n,t){if(!fr(n))throw Error(v(200));return Ar(null,e,n,!1,t)};he.unmountComponentAtNode=function(e){if(!fr(e))throw Error(v(40));return e._reactRootContainer?(Fn(function(){Ar(null,null,e,!1,function(){e._reactRootContainer=null,e[We]=null})}),!0):!1};he.unstable_batchedUpdates=Ll;he.unstable_renderSubtreeIntoContainer=function(e,n,t,s){if(!fr(t))throw Error(v(200));if(e==null||e._reactInternals===void 0)throw Error(v(38));return Ar(e,n,t,!1,s)};he.version="18.3.1-next-f1338f8080-20240426";function tc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tc)}catch(e){console.error(e)}}tc(),ta.exports=he;var Cm=ta.exports,$o=Cm;Wr.createRoot=$o.createRoot,Wr.hydrateRoot=$o.hydrateRoot;const km=()=>P.jsx("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 432.5 432.5",xmlSpace:"preserve",children:P.jsxs("g",{children:[P.jsx("path",{fill:"none",stroke:"#000000",strokeWidth:"50",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"133.3333",d:`\r
                M310.4,357.8c-23.1,23-52.5,38.6-84.5,44.7c-32.2,6.2-65.6,2.8-95.9-9.9C68,366.7,27.4,306.2,26.8,239\r
                c-0.3-49.4,21.7-96.4,60-127.7s88.6-43.7,137-33.6c31.9,7.2,61,23.7,83.5,47.4c31.6,30.3,49.9,72,50.9,115.8\r
                C358.5,284.7,341.3,326.8,310.4,357.8z`}),P.jsx("path",{d:`M289.7,107.5c-9.8,9.8-9.8,25.6,0,35.4c9.8,9.8,25.6,9.8,35.4,0L289.7,107.5z M423.7,44.1c9.8-9.8,9.8-25.6,0-35.4\r
                C414-1,398.1-1,388.4,8.8L423.7,44.1z M328.1,1c-13.8-0.1-25.1,11-25.2,24.8s11,25.1,24.8,25.2L328.1,1z M405.9,51.5\r
                c13.8,0.1,25.1-11,25.2-24.8s-11-25.1-24.9-25.2L405.9,51.5z M431,26.3c0-13.8-11.3-24.9-25.1-24.8c-13.8,0-24.9,11.3-24.9,25.1\r
                L431,26.3z M381.5,104.7c0.1,13.8,11.3,24.9,25.2,24.8c13.8-0.1,24.9-11.3,24.8-25.2L381.5,104.7z M325,142.8l98.7-98.7L388.4,8.8\r
                l-98.7,98.7L325,142.8z M327.8,51l78.1,0.5l0.3-50L328.1,1L327.8,51z M381,26.6l0.5,78.1l50-0.3L431,26.3L381,26.6z`})]})}),Fm=()=>P.jsx("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 522.3 522.3",xmlSpace:"preserve",children:P.jsxs("g",{children:[P.jsx("path",{fill:"none",stroke:"#000000",strokeWidth:"50",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"133.3333;",d:`\r
           M94.6,193.3c0-32.6,9.8-64.4,28.1-91.4c18.4-27.2,44.4-48.4,74.8-60.8c62.2-25.5,133.7-11.5,181.6,35.7\r
           c35.2,34.7,52.8,83.5,47.9,132.7s-31.8,93.5-73.1,120.6c-27.7,17.4-59.9,26.3-92.6,25.5c-43.8,0.9-86.2-15.6-117.9-45.9\r
           C112.2,279,94.6,237.1,94.6,193.3z`}),P.jsx("path",{d:`M286.2,355.6c0-13.8-11.2-25-25-25c-13.8,0-25,11.2-25,25H286.2z M236.2,428.6c0,13.8,11.2,25,25,25c13.8,0,25-11.2,25-25\r
           H236.2z M327.9,453.6c13.8,0,25-11.2,25-25s-11.2-25-25-25V453.6z M261.2,403.6c-13.8,0-25,11.2-25,25s11.2,25,25,25V403.6z\r
            M236.2,495.2c0,13.8,11.2,25,25,25c13.8,0,25-11.2,25-25H236.2z M286.2,428.6c0-13.8-11.2-25-25-25c-13.8,0-25,11.2-25,25H286.2z\r
            M261.2,453.6c13.8,0,25-11.2,25-25s-11.2-25-25-25V453.6z M194.6,403.6c-13.8,0-25,11.2-25,25s11.2,25,25,25V403.6z M236.2,355.6\r
           v72.9h50v-72.9H236.2z M327.9,403.6h-66.7v50h66.7L327.9,403.6L327.9,403.6z M286.2,495.2v-66.7h-50v66.7H286.2z M261.2,403.6\r
           h-66.7v50h66.7V403.6z`})]})}),wm=({TriggerClassChange:e,setGender:n,gender:t})=>(De.useEffect(()=>{const s=document.querySelectorAll(".Gender"),r=document.getElementById("barContainer");for(let l=0;l<s.length;l++)s[l].classList.remove("active");document.querySelector("."+t).classList.add("active"),r.className=t},[t]),P.jsxs("div",{id:"BottomBar",className:"active",children:[P.jsx("h2",{className:"showOnMobile",children:"Choisissez une classe"}),P.jsxs("div",{id:"barContainer",children:[P.jsxs("div",{id:"GenderSelect",children:[P.jsx("a",{className:"Gender M",onClick:()=>n("M"),children:P.jsx(km,{})}),P.jsx("a",{className:"Gender F",onClick:()=>n("F"),children:P.jsx(Fm,{})})]}),P.jsx("a",{className:"Icons",href:"#","data-classe":"Osamodas",onClick:()=>e("Osamodas")}),P.jsx("a",{className:"Icons",href:"#","data-classe":"Enutrof",onClick:()=>e("Enutrof")}),P.jsx("a",{className:"Icons",href:"#","data-classe":"Sram",onClick:()=>e("Sram")}),P.jsx("a",{className:"Icons",href:"#","data-classe":"Xelor",onClick:()=>e("Xelor")}),P.jsx("a",{className:"Icons",href:"#","data-classe":"Ecaflip",onClick:()=>e("Ecaflip")}),P.jsx("a",{className:"Icons",href:"#","data-classe":"Eniripsa",onClick:()=>e("Eniripsa")}),P.jsx("a",{className:"Icons",href:"#","data-classe":"Iop",onClick:()=>e("Iop")}),P.jsx("a",{className:"Icons",href:"#","data-classe":"Cra",onClick:()=>e("Cra")}),P.jsx("a",{className:"Icons",href:"#","data-classe":"Sadida",onClick:()=>e("Sadida")}),P.jsx("a",{className:"Icons",href:"#","data-classe":"Sacrieur",onClick:()=>e("Sacrieur")}),P.jsx("a",{className:"Icons",href:"#","data-classe":"Pandawa",onClick:()=>e("Pandawa")}),P.jsx("a",{className:"Icons",href:"#","data-classe":"Roublard",onClick:()=>e("Roublard")}),P.jsx("a",{className:"Icons",href:"#","data-classe":"Zobal",onClick:()=>e("Zobal")}),P.jsx("a",{className:"Icons",href:"#","data-classe":"Steamer",onClick:()=>e("Steamer")}),P.jsx("a",{className:"Icons",href:"#","data-classe":"Eliotrope",onClick:()=>e("Eliotrope")}),P.jsx("a",{className:"Icons",href:"#","data-classe":"Huppermage",onClick:()=>e("Huppermage")}),P.jsx("a",{className:"Icons",href:"#","data-classe":"Ouginak",onClick:()=>e("Ouginak")}),P.jsx("a",{className:"Icons",href:"#","data-classe":"Forgelance",onClick:()=>e("Forgelance")}),P.jsx("a",{className:"Icons",href:"#","data-classe":"Feca",onClick:()=>e("Feca")})]})]})),zm=({classe:e,gender:n})=>{const[t,s]=De.useState(1);function r(i){let l=t+i;l>8?l=1:l<1&&(l=8),s(l)}return P.jsxs("div",{className:"CharacterWrapper",children:[P.jsx("a",{className:"Arrows",onClick:()=>r(1),children:"↶"}),P.jsx("img",{src:`./Classes/${e}/Character/${n+t}.png`,className:"Character"}),P.jsx("a",{className:"Arrows",onClick:()=>r(-1),children:"↷"})]})},Rn={Forgelance:[{},{title:"Lance du Lac",description:"Occasionne des dommages Eau aux ennemis en zone et invoque la Lance.État requis : Armé",PA:" 3 PA",PO:" 1 - 5 Portée",dmg:"22  - 25"},{title:"Épieu Sismique",description:`Occasionne des dommages Terre aux ennemis en zone.
Si la case est ou devient libre, invoque la Lance.
Les dommages ne diminuent pas avec la distance.État requis : Armé`,PA:" 3 PA",PO:" 1 Portée",dmg:"26  - 29"},{title:"Lance-Pierre",description:`Occasionne des dommages Terre aux ennemis en zone et invoque la Lance.
Les dommages ne diminuent pas avec la distance.État requis : Armé`,PA:" 3 PA",PO:" 1 - 3 Portée",dmg:"25  - 28"},{title:"Javelot-Foudre",description:`Invoque la Lance et occasionne des dommages Eau aux ennemis en ligne jusqu'à la case ciblée.
Si la case ciblée est occupée par un ennemi, rebondit également sur l'ennemi le plus proche n'étant pas dans la zone d'effet dans un cercle de 2 cases (3 fois maximum).État requis : Armé`,PA:" 3 PA",PO:" 2 - 6 Portée",dmg:"28  - 32"},{title:"Épilogue",description:`Rappelle la Lance et rend 1 PA au lanceur.

Sur le lanceur : rappelle seulement sa Lance.État requis : Désarmé`,PA:" 1 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Parade",description:`Rappelle la Lance et applique l'état Parade sur le lanceur. À la fin de son tour :
• Rappelle de nouveau sa Lance.
• Applique l'état Indéplaçable sur le lanceur.
• Réduit les dommages de la prochaine attaque qu'il subit en mêlée.
• S'il subit des dommages en mêlée, occasionne des dommages dans son meilleur élément d'attaque à son attaquant et le repousse.
Les effets sont retirés après réception de dommages en mêlée par le lanceur.`,PA:" 2 PA",PO:" 0 Portée",dmg:"26  - 30"},{title:"Lance à Incendie",description:`Occasionne des dommages Feu et plante une Lance Incendiaire sur la cible.
Si la case est ou devient libre, invoque la Lance.État requis : Armé`,PA:" 3 PA",PO:" 1 - 8 Portée",dmg:"23  - 26"},{title:"Dégagement",description:`Occasionne des dommages Air aux ennemis et repousse les cibles depuis le centre en zone.
N'affecte pas le lanceur.

Si le lanceur est Désarmé : la portée du sort est infinie, les effets peuvent être appliqués uniquement autour de sa Lance et la rappelle.`,PA:" 4 PA",PO:" 0 Portée",dmg:"29  - 32"},{title:"Javeline de Myr",description:`Occasionne des dommages Air aux ennemis et repousse la cible.
Si la case ciblée est ou devient libre, invoque la Lance.État requis : Armé`,PA:" 3 PA",PO:" 2 - 5 Portée",dmg:"26  - 30"},{title:"Fer Rouge",description:`Occasionne des dommages Feu aux ennemis dans un carré sans diagonale de 2 cases.
Si la case est ou devient libre, invoque la Lance.

Les dommages des Lances Incendiaires sont augmentés pour chaque ennemi touché.

Si le lanceur est Désarmé : la portée du sort est infinie et les effets peuvent être appliqués uniquement autour de sa Lance.`,PA:" 3 PA",PO:" 1 - 2 Portée",dmg:"27  - 30"},{title:"Charge Héroïque",description:`Rapproche le lanceur de la cible. Si le lanceur arrive à son contact, occasionne des dommages dans son meilleur élément d'attaque aux ennemis et repousse la cible.
Si la cible est la Lance, la rappelle également.

La poussée est plus importante selon la distance entre le lanceur et la cible.`,PA:" 3 PA",PO:" 1 - 5 Portée",dmg:"29  - 33"},{title:"Galanterie",description:`Éloigne le lanceur de la cible, attire la cible et soigne le lanceur et l'allié ciblé.
Si la cible est la Lance, la rappelle également.État requis : Armé`,PA:" 2 PA",PO:" 1 Portée",dmg:""},{title:"Effondrement",description:`Occasionne des dommages Terre aux ennemis et attire les cibles jusqu'au centre en zone.
N'affecte pas le lanceur.
Les dommages ne diminuent pas avec la distance.

Si le lanceur est Désarmé : la portée du sort est infinie et les effets peuvent être appliqués uniquement autour de sa Lance.`,PA:" 3 PA",PO:" 0 - 5 Portée",dmg:"20  - 22"},{title:"Pluie d'Airain",description:`Occasionne des dommages Air aux ennemis et réduit leurs Résistances Poussée en zone.
Les dommages ne diminuent pas avec la distance.

Si le lanceur est Désarmé : la portée du sort est infinie et les effets peuvent être appliqués uniquement autour de sa Lance.

N'affecte pas le lanceur.`,PA:" 2 PA",PO:" 0 - 1 Portée",dmg:"19  - 21"},{title:"Trident de la Mer",description:"Attire les cibles et occasionne des dommages Eau aux ennemis en zone.État requis : Armé",PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"21  - 24"},{title:"Moulin Rouge",description:`Occasionne des dommages Feu aux ennemis et attire les cibles jusqu'au centre en zone.
N'affecte pas le lanceur.

Les dommages des Lances Incendiaires sont augmentés pour chaque ennemi touché.

Si le lanceur est Désarmé : la portée du sort est infinie et les effets peuvent être appliqués uniquement autour de sa Lance.

Sur le lanceur ou sur sa Lance : les effets sont appliqués dans une croix de 3 cases.`,PA:" 3 PA",PO:" 0 - 2 Portée",dmg:"28  - 32"},{title:"Phalange",description:`Applique un bouclier sur les alliés et augmente leurs Résistances Poussée en zone.
Le bouclier est plus important sur le lanceur.

Si le lanceur est Désarmé : la portée du sort est infinie et les effets peuvent être appliqués uniquement autour de sa Lance.`,PA:" 3 PA",PO:" 0 Portée",dmg:""},{title:"Oriflamme",description:"Invoque ou téléporte la Lance sur la case ciblée, applique un bouclier sur les alliés et augmente leurs Résistances Critiques en zone.",PA:" 3 PA",PO:" 1 - 2 Portée",dmg:""},{title:"Estoc Brûlant",description:`Occasionne des dommages Feu aux ennemis et repousse les cibles en zone.

Les dommages des Lances Incendiaires sont augmentés pour chaque ennemi touché.État requis : Armé`,PA:" 3 PA",PO:" 1 - 4 Portée",dmg:"25  - 28"},{title:"Octave",description:`Augmente la Portée du lanceur et occasionne des dommages Eau aux ennemis.

Si le lanceur est Désarmé : éloigne le lanceur de la cible.`,PA:" 2 PA",PO:" 1 Portée",dmg:"16  - 18"},{title:"Volée d'Airain",description:"Occasionne des dommages Air aux ennemis et repousse les cibles en zone.État requis : Armé",PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"22  - 25"},{title:"Soulèvement",description:`Téléporte les cibles symétriquement par rapport au lanceur et occasionne des dommages Terre aux ennemis en zone.
Les dommages ne diminuent pas avec la distance.`,PA:" 3 PA",PO:" 1 Portée",dmg:"29  - 33"},{title:"Balestra",description:`Téléporte le lanceur sur la première case disponible entre la cible et lui, le téléporte symétriquement par rapport à cette dernière et occasionne des dommages Eau aux ennemis en ligne jusqu'à la case ciblée.

Sur la Lance : rappelle la Lance avant d'appliquer les effets.

La téléportation symétrique est appliquée uniquement si le lanceur est téléporté au contact de sa cible.`,PA:" 3 PA",PO:" 1 - 5 Portée",dmg:"28  - 31"},{title:"Moulin à Vent",description:`Téléporte les cibles symétriquement par rapport au centre et occasionne des dommages Air aux ennemis en zone.

Si le lanceur est Désarmé : la portée du sort est infinie et les effets peuvent être appliqués uniquement autour de sa Lance.

N'affecte pas le lanceur.`,PA:" 3 PA",PO:" 0 - 1 Portée",dmg:"29  - 33"},{title:"Talon d'Argile",description:`Échange de position avec la cible et occasionne des dommages Terre aux ennemis.
Si la cible est la Lance, la rappelle également.`,PA:" 2 PA",PO:" 1 - 2 Portée",dmg:"14  - 16"},{title:"Fente",description:`Téléporte le lanceur sur la case ciblée et occasionne des dommages Feu aux ennemis en zone.

Les dommages des Lances Incendiaires sont augmentés pour chaque ennemi touché.`,PA:" 2 PA",PO:" 1 Portée",dmg:"12  - 14"},{title:"Kyrja",description:"Téléporte le lanceur sur la case ciblée, vole de la vie dans le meilleur élément d'attaque du lanceur aux ennemis et réduit leurs dommages finaux occasionnés en ligne jusqu'à la case ciblée.",PA:" 3 PA",PO:" 2 - 5 Portée",dmg:"28  - 32"},{title:"Vajra",description:"Téléporte le lanceur sur la case ciblée, vole de la Fuite et vole de la vie dans le meilleur élément d'attaque du lanceur aux ennemis en zone.",PA:" 4 PA",PO:" 2 - 4 Portée",dmg:"39  - 44"},{title:"Maelstrom",description:`Invoque la Lance, rapproche le lanceur de sa Lance et occasionne des dommages Feu aux ennemis en ligne jusqu'à la case ciblée et dans un demi-cercle de 2 cases.

Plante une Lance Incendiaire sur les ennemis touchés.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"29  - 32"},{title:"Ydra",description:`Échange de position avec la Lance, occasionne des dommages Terre aux ennemis en zone autour du lanceur et de sa Lance et la rappelle.
Les effets ne s'appliquent que si l'échange de positions peut s'effectuer.

Sur le lanceur : occasionne des dommages Terre aux ennemis en zone autour de lui et de sa Lance et la rappelle.

Les dommages ne diminuent pas avec la distance.`,PA:" 4 PA",PO:" 0 - 5 Portée",dmg:"25  - 28"},{title:"Prélude au Fer",description:`Réduit la durée des effets sur les ennemis et augmente la Puissance des alliés en zone.

Si le lanceur est Désarmé : la portée du sort est infinie et les effets peuvent être appliqués uniquement autour de sa Lance.`,PA:" 2 PA",PO:" 0 - 2 Portée",dmg:""},{title:"Crépuscule",description:`Érode les ennemis et leur retire de la Portée en zone.

Si le lanceur est Désarmé : la portée du sort est infinie et les effets peuvent être appliqués uniquement autour de sa Lance.`,PA:" 3 PA",PO:" 0 - 2 Portée",dmg:""},{title:"Lance-Cyclone",description:"Invoque la Lance, occasionne des dommages Air aux ennemis et repousse les cibles en ligne jusqu'à la case ciblée.",PA:" 3 PA",PO:" 2 - 4 Portée",dmg:"31  - 33"},{title:"Elding",description:`Invoque la Lance, attire les cibles vers le centre et occasionne des dommages Eau aux ennemis en zone.
N'affecte pas le lanceur.`,PA:" 4 PA",PO:" 1 - 6 Portée",dmg:"32  - 36"},{title:"Chevalerie",description:`Soigne le lanceur et ses alliés et augmente leurs PM en zone. 
Les soins sont plus importants sur le lanceur.

Si le lanceur est Désarmé, rappelle également sa Lance.`,PA:" 3 PA",PO:" 0 Portée",dmg:""},{title:"Renommée",description:`Attire la cible.
Si la cible est un allié, la soigne également. Sinon, soigne le lanceur.
Si le lanceur est Désarmé, attire la cible vers sa Lance.

Sur la Lance du lanceur : rappelle sa Lance.`,PA:" 2 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Jormun",description:`Téléporte la Lance sur la première case disponible entre le lanceur et elle et occasionne des dommages Eau aux ennemis en ligne jusqu'à la case ciblée.

Sur le lanceur : rappelle sa Lance et occasionne des dommages Eau aux ennemis dans un cercle de 2 cases autour d'elle et du lanceur.

Les dommages ne diminuent pas avec la distance, et sont plus faibles si la cible est le lanceur.
Les effets ne sont appliqués qu'une seule fois par lancer.`,PA:" 3 PA",PO:" 0 - 8 Portée",dmg:"26  - 30"},{title:"Muspel",description:`Rappelle la Lance, occasionne des dommages Feu aux ennemis en zone et retire toutes Lances Incendiaires.

Les dommages ne diminuent pas avec la distance.État requis : Armé`,PA:" 4 PA",PO:" 0 Portée",dmg:"31  - 35"},{title:"Poinçon",description:`Invoque la Lance en lui appliquant l'état Poinçon :
• Permet à la Lance de tacler.
• Augmente le Tacle et la Vitalité de la Lance.
• Applique l'état Indéplaçable sur la Lance et les cibles à son contact.
Les effets sont retirés à la destruction de la Lance.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 2 PA",PO:" 1 - 4 Portée",dmg:""},{title:"Étreinte de Valkyr",description:`Réduit les dommages reçus par l'allié ciblé et lui applique l'état Étreinte de Valkyr :
• Érode les attaquants ennemis de la cible.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 2 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Terre du Milieu",description:`Augmente la Puissance du lanceur pour chaque ennemi dans la zone d'effet et leur occasionne des dommages Terre en zone.

Si le lanceur est Désarmé : la portée du sort est infinie et les effets peuvent être appliqués uniquement autour de sa Lance.

Les dommages n'affectent pas le lanceur.`,PA:" 3 PA",PO:" 0 Portée",dmg:"30  - 34"},{title:"Noa",description:`Occasionne des dommages Air aux ennemis et leur applique l'état Noa :
• Occasionne des dommages Air aux ennemis dans un carré de 2 cases et retire l'état si la cible subit des dommages de poussée.État requis : Armé`,PA:" 4 PA",PO:" 1 - 6 Portée",dmg:"20  - 23"},{title:"Éclipse",description:`Applique l'état Éclipse sur le lanceur :
• Désarme sur le lanceur.
• Applique un bouclier sur le lanceur et ses alliés dans un cercle de 3 cases autour de lui.
• Retire de la Portée à tout le monde.

Au tour suivant sur la case ciblée :
• Si la case est occupée par le lanceur, lance le sort Croissant de Mani.
• Sinon, lance le sort Disque de Sigel.

Le retrait de Portée ne peut pas être désenvoûté.État requis : Armé`,PA:" 5 PA",PO:" 0 - 10 Portée",dmg:"67  - 76"},{title:"Holmgang",description:`Applique les états Indéplaçable et Holmgang sur le lanceur :
• Réduit les dommages qu'il subit à distance.
• Pose un glyphe-aura qui attire les ennemis qui le traversent ou qui en sortent et leur occasionne des dommages dans le meilleur élément d'attaque du lanceur (une fois par ennemi par tour).
• Termine le tour en cours du lanceur.État requis : Armé`,PA:" 4 PA",PO:" 0 Portée",dmg:"34  - 38"}],Ouginak:[{},{title:"Proie",description:`Applique l'état Proie sur l'ennemi ciblé.
Les entités qui attaquent la cible sont soignées d'une partie des dommages occasionnés.

Si la Proie meurt, fixe le temps de relance du sort à 0.

Il ne peut y avoir qu'une seule Proie par équipe.
Si le sort est lancé sur un autre ennemi, ses effets sont retirés de la cible précédente.`,PA:" 1 PA",PO:" 1 - 6 Portée",dmg:""},{title:"Gibier",description:`Applique l'état Proie sur l'ennemi ciblé et augmente ses dommages subis.

Il ne peut y avoir qu'une seule Proie par équipe.
Si le sort est lancé sur un autre ennemi, ses effets sont retirés de la cible précédente.`,PA:" 1 PA",PO:" 1 - 6 Portée",dmg:""},{title:"Molosse",description:`Occasionne des dommages Terre aux ennemis et réduit les dommages subis par le lanceur.

Les effets ne peuvent pas être désenvoûtés.

Augmente la Rage du lanceur (nécessite une cible).`,PA:" 3 PA",PO:" 1 Portée",dmg:"31  - 34"},{title:"Mâchoire",description:`Retire de l'Esquive PM et occasionne des dommages Feu aux ennemis.

Sur un allié : augmente l'Esquive PM des alliés dans un cercle de 2 cases.

Augmente la Rage du lanceur (nécessite une cible).`,PA:" 3 PA",PO:" 0 - 5 Portée",dmg:"28  - 31"},{title:"Os à Moelle",description:`Occasionne des dommages Eau.
Les dommages du sort sont augmentés après chaque lancer si la cible est la Proie.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"21  - 24"},{title:"Muselière",description:`Occasionne des dommages Terre.

Sur la Proie : augmente les dommages du sort pour chaque ennemi au contact du lanceur et occasionne des dommages Terre.`,PA:" 5 PA",PO:" 1 - 2 Portée",dmg:"37  - 41"},{title:"Charogne",description:`Érode la cible et occasionne des dommages Air.

Augmente la Rage du lanceur (nécessite une cible).`,PA:" 3 PA",PO:" 1 - 4 Portée",dmg:"29  - 32"},{title:"Radius",description:`Échange de position avec la cible et occasionne des dommages Eau aux ennemis.

Augmente la Rage du lanceur (nécessite une cible).`,PA:" 3 PA",PO:" 1 - 2 Portée",dmg:"32  - 36"},{title:"Traque",description:`Occasionne des dommages Feu.

Sur la Proie : rapproche le lanceur de la cible et occasionne des dommages Feu.

Le sort n'est pas soumis aux contraintes de lancer sous Forme Bestiale.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"31  - 35"},{title:"Dépeçage",description:`Réduit les soins reçus par la cible et occasionne des dommages Air.

Augmente la Rage du lanceur (nécessite une cible).`,PA:" 4 PA",PO:" 1 - 4 Portée",dmg:"40  - 45"},{title:"Convergence",description:`Sur un allié : rapproche le lanceur de la cible.

Sur un ennemi : attire la cible.`,PA:" 2 PA",PO:" 1 - 6 Portée",dmg:""},{title:"Pistage",description:"Repousse la cible et rapproche le lanceur d'elle.",PA:" 2 PA",PO:" 1 - 2 Portée",dmg:"1  - 2"},{title:"Lance-roquet",description:`Invoque un Roquet maîtrisable qui vole de la vie dans l'élément Neutre aux ennemis.
Son vol de vie est plus important sur les invocations.

À chaque fois que son invocateur occasionne des dommages avec ses sorts de classe, le Roquet est attiré vers la Proie et l'attaque s'il est à portée.
Les dommages sont réduits de moitié en-dehors de son tour de jeu.`,PA:" 3 PA",PO:" 1 - 3 Portée",dmg:""},{title:"Gangrène",description:`Érode l'ennemi ciblé.

Augmente la Rage du lanceur (nécessite une cible).`,PA:" 3 PA",PO:" 1 - 3 Portée",dmg:""},{title:"Dogue",description:`Occasionne des dommages Terre.

Sur la Proie : vole de la vie dans l'élément Terre et retire de la Fuite.`,PA:" 2 PA",PO:" 1 - 2 Portée",dmg:"17  - 19"},{title:"Dépouille",description:`Occasionne des dommages Air.

Sur la Proie : augmente les dommages du sort pour chaque allié à son contact et occasionne des dommages Air.`,PA:" 5 PA",PO:" 1 - 2 Portée",dmg:"35  - 39"},{title:"Tibia",description:`Occasionne des dommages Eau aux ennemis et repousse les cibles en zone autour du lanceur.

Augmente la Rage du lanceur.`,PA:" 4 PA",PO:" 0 Portée",dmg:"40  - 45"},{title:"Humérus",description:`Téléporte le lanceur symétriquement par rapport à la cible et occasionne des dommages Terre aux ennemis.

Augmente la Rage du lanceur (nécessite une cible).`,PA:" 4 PA",PO:" 1 Portée",dmg:"41  - 46"},{title:"Arcanin",description:`Augmente la Puissance du lanceur.

Nécessite et diminue la Rage du lanceur.`,PA:" 1 PA",PO:" 0 Portée",dmg:""},{title:"Caninos",description:`Soigne le lanceur.

Nécessite et diminue la Rage du lanceur.`,PA:" 1 PA",PO:" 0 Portée",dmg:"5 %"},{title:"Rabattage",description:`Occasionne des dommages Feu.

Sur la Proie : vole des PM et occasionne des dommages Feu.`,PA:" 3 PA",PO:" 1 - 4 Portée",dmg:"29  - 31"},{title:"Chasse",description:`Occasionne des dommages Feu aux ennemis et repousse la cible.
La poussée est plus importante sur la Proie.`,PA:" 4 PA",PO:" 1 - 2 Portée",dmg:"39  - 44"},{title:"Carcasse",description:`Occasionne des dommages Air.
Les dommages du sort sont augmentés après chaque lancer si la cible est la Proie.`,PA:" 2 PA",PO:" 1 - 6 Portée",dmg:"9  - 11"},{title:"Battue",description:`Augmente la Puissance du lanceur et de ses alliés dans un cercle de 2 cases autour de la cible et occasionne des dommages Air aux ennemis.
La Puissance est plus importante si la cible est la Proie.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"27  - 30"},{title:"Pelage Protecteur",description:`Applique 2 boucliers et l'état Pelage Protecteur sur l'allié ciblé :
• Retire le second bouclier appliqué et l'état et augmente la Rage du lanceur si la cible subit des dommages de poussée.

Les effets ne peuvent pas être désenvoûtés.

Ne peut pas être utilisé sous Forme Bestiale.`,PA:" 3 PA",PO:" 0 - 3 Portée",dmg:""},{title:"Férocité",description:`Applique l'état Férocité sur l'allié ciblé :
• Applique un bouclier si la cible est attiré, poussée, transposée, téléportée ou subit une tentative de retrait de PM.

L'état ne peut pas être désenvoûté. 
Ne peut pas être utilisé sous Forme Bestiale.`,PA:" 2 PA",PO:" 0 - 3 Portée",dmg:""},{title:"Aboi",description:`Occasionne des dommages Feu et réduit les Résistances Poussée.
Les dommages deviennent du vol de vie sur la Proie.`,PA:" 2 PA",PO:" 1 - 2 Portée",dmg:"20  - 22"},{title:"Vertèbre",description:`Applique un poison Eau de début de tour sur l'ennemi ciblé.
Le poison ne peut pas être désenvoûté s'il est appliqué sur la Proie.`,PA:" 4 PA",PO:" 1 - 3 Portée",dmg:"32  - 36 (2 tours) "},{title:"Cubitus",description:`Occasionne des dommages Eau.
Si la cible est la Proie, donne également 1 PM au lanceur.

Le sort n'est pas soumis aux contraintes de lancer sous Forme Bestiale.`,PA:" 2 PA",PO:" 1 - 10 Portée",dmg:"16  - 18"},{title:"Calcanéus",description:`Occasionne des dommages Eau aux ennemis et attire la cible.
L'attirance est plus importante sur la Proie.

Le sort n'est pas soumis aux contraintes de lancer sous Forme Bestiale.`,PA:" 2 PA",PO:" 1 - 7 Portée",dmg:"14  - 16"},{title:"Apaisement",description:`Soigne le lanceur.
Nécessite et diminue la Rage du lanceur.

Si le lanceur est dans sa Forme Bestiale : retire les effets de la Forme Bestiale.`,PA:" 3 PA",PO:" 0 Portée",dmg:"15 %"},{title:"Affection",description:`Soigne le lanceur et l'allié ciblé et échange de position avec lui.
Nécessite et diminue la Rage du lanceur.

Si le lanceur est dans sa Forme Bestiale : retire les effets de la Forme Bestiale.`,PA:" 3 PA",PO:" 1 - 4 Portée",dmg:"7 %"},{title:"Amarok",description:`Augmente les résistances en mêlée du lanceur et de ses alliés et occasionne des dommages Terre aux ennemis en zone.

Les dommages ne diminuent pas avec la distance.`,PA:" 3 PA",PO:" 0 - 3 Portée",dmg:"28  - 31"},{title:"Cerbère",description:`Applique un bouclier sur le lanceur et occasionne des dommages Terre aux ennemis en zone.
Les dommages du sort sont plus importants selon la Rage du lanceur et le bouclier n'est pas appliqué sous Forme Bestiale.`,PA:" 4 PA",PO:" 1 - 2 Portée",dmg:"15  - 18"},{title:"Panique",description:`Sur le lanceur : repousse les ennemis en zone autour du lanceur.

Sur la Proie : repousse les cibles en zone autour d'elle et lui retire de la Fuite.`,PA:" 2 PA",PO:" 0 - 6 Portée",dmg:"1  - 2"},{title:"Poursuite",description:`Pose un glyphe qui augmente les PM des alliés.

Sur la Proie : pose le glyphe et applique l'état Poursuite sur la cible, qui pose de nouveau le glyphe sous elle au début de son tour.
Cet effet est appliqué uniquement si la cible est toujours la Proie et ne peut pas être désenvoûté.`,PA:" 2 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Aboiement",description:`Augmente les PM de la cible et lui applique les états Inébranlable et Aboiement :
• Retire les états Inébranlable et Aboiement et augmente la Rage du lanceur si la cible subit des dommages en mêlée.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 2 PA",PO:" 0 - 4 Portée",dmg:""},{title:"Rogne",description:`Augmente la Puissance, les Dommages Poussée et le Tacle du lanceur et lui applique l'état Rogne :
• Augmente ces mêmes caractéristiques si le lanceur subit des dommages.`,PA:" 2 PA",PO:" 0 Portée",dmg:""},{title:"Limier",description:`Occasionne des dommages Air.

Sur la Proie : attire les entités vers la cible dans une croix de 3 cases et occasionne des dommages Air.

Le sort n'est pas soumis aux contraintes de lancer sous Forme Bestiale.`,PA:" 3 PA",PO:" 1 - 3 Portée",dmg:"28  - 31"},{title:"Tétanisation",description:`Occasionne des dommages Feu et retire des PM.

Augmente la Rage du lanceur (nécessite une cible).`,PA:" 4 PA",PO:" 1 - 2 Portée",dmg:"41  - 46"},{title:"Flair",description:`Téléporte le lanceur sur la première case disponible au contact de la Proie.

Si la Proie est dans la zone d'effet : téléporte le lanceur sur la case ciblée.

Nécessite et diminue la Rage du lanceur.`,PA:" 3 PA",PO:" 1 - 63 Portée",dmg:""},{title:"Acharnement",description:`Applique l'état Pesanteur sur l'ennemi ciblé.
Si l'ennemi est la Proie :
• Augmente également les dommages subis par la cible.
• Téléporte les Roquets du lanceur à son contact.

Augmente la Rage du lanceur (nécessite une cible).`,PA:" 2 PA",PO:" 1 - 5 Portée",dmg:""},{title:"Appel de la Meute",description:`Réduit le temps de relance du sort Lance-roquet du lanceur.
• Si la cible est le lanceur : attire tous les alliés vers la cible.
• Si la cible est la Proie : érode la cible et attire tous les alliés vers elle.
L'attirance est plus importante si la cible est la Proie.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 2 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Nouvelle Lune",description:`Réduit la durée des effets sur le lanceur et le transforme en Bête.

Ne peut pas être utilisé sous Forme Bestiale.`,PA:" 2 PA",PO:" 0 Portée",dmg:""}],Huppermage:[{},{title:"Onde Tellurique",description:`Pose une rune de Terre, occasionne des dommages Terre et applique l'état Terre.

Peut générer des combinaisons élémentaires.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"25  - 29"},{title:"Cataracte",description:`Pose une rune de Feu, occasionne des dommages Eau et Feu et applique les états Eau et Feu.

Peut générer des combinaisons élémentaires.`,PA:" 3 PA",PO:" 1 - 4 Portée",dmg:"18  - 20"},{title:"Éther",description:`Pose une rune d'Air, occasionne des dommages Air et applique l'état Air.

Peut générer des combinaisons élémentaires.`,PA:" 3 PA",PO:" 1 - 4 Portée",dmg:"24  - 26"},{title:"Dard",description:`Pose une rune d'Eau, occasionne des dommages Terre et Eau et applique les états Terre et Eau.

Peut générer des combinaisons élémentaires.`,PA:" 4 PA",PO:" 1 - 8 Portée",dmg:"16  - 18"},{title:"Runification",description:`Déclenche toutes les runes du lanceur occupées par un ennemi :
• Occasionne des dommages aux ennemis dans l'élément de la rune.
• Augmente les caractéristiques du lanceur selon l'élément de la rune par ennemi touché.
• Applique l'état élémentaire de la rune.

Peut générer des combinaisons élémentaires.`,PA:" 2 PA",PO:" 0 Portée",dmg:"15 "},{title:"Manifestation",description:`Déclenche la rune ciblée.

Si la case est occupée par un ennemi :
• Occasionne des dommages aux ennemis dans l'élément de la rune.
• Augmente les caractéristiques du lanceur selon l'élément de la rune.
• Applique l'état élémentaire de la rune.`,PA:" 2 PA",PO:" 1 - 8 Portée",dmg:"15 "},{title:"Lance-flamme",description:`Pose une rune de Feu, occasionne des dommages Feu et applique l'état Feu.

Peut générer des combinaisons élémentaires.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"23  - 25"},{title:"Onde Céleste",description:`Pose une rune de Terre, occasionne des dommages Air et Terre et applique les états Air et Terre.

Peut générer des combinaisons élémentaires.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"14  - 16"},{title:"Stalagmite",description:`Pose une rune d'Eau, occasionne des dommages Eau et applique l'état Eau.

Peut générer des combinaisons élémentaires.`,PA:" 3 PA",PO:" 1 - 2 Portée",dmg:"28  - 31"},{title:"Tison",description:`Pose une rune d'Air, occasionne des dommages Feu et Air et applique les états Feu et Air.

Peut générer des combinaisons élémentaires.`,PA:" 4 PA",PO:" 1 - 6 Portée",dmg:"18  - 20"},{title:"Drain Élémentaire",description:`Vole des caractéristiques et occasionne des dommages selon l'état élémentaire de l'ennemi ciblé.

Consomme l'état élémentaire.`,PA:" 2 PA",PO:" 1 - 3 Portée",dmg:"23  - 27"},{title:"Morph",description:`Occasionne des dommages dans l'état élémentaire de l'ennemi ciblé.

Les contraintes de lancer du sort sont modifiées selon l'état élémentaire :
• Eau : réduit le coût en PA du sort.
• Terre : désactive la ligne de vue du sort.
• Air : augmente la portée maximale du sort.
• Feu : les dommages du sort sont augmentés.
Chaque effet est cumulable une fois.

Change l'état élémentaire selon son état actuel : 
• Eau -> Terre -> Air -> Feu -> Eau.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 3 PA",PO:" 1 - 4 Portée",dmg:"28  - 32"},{title:"Orage",description:`Pose des runes de Terre, vole de la vie dans l'élément Terre et applique l'état Terre en zone.

Peut générer des combinaisons élémentaires.`,PA:" 3 PA",PO:" 2 - 6 Portée",dmg:"27  - 31"},{title:"Stalactite",description:`Pose une rune d'Eau, occasionne des dommages Eau et applique l'état Eau.

Peut générer des combinaisons élémentaires.`,PA:" 2 PA",PO:" 1 - 2 Portée",dmg:"23  - 25"},{title:"Rafale Transperçante",description:`Pose des runes d'Air, vole de la vie dans l'élément Air et applique l'état Air en zone.
N'affecte pas le lanceur.

Peut générer des combinaisons élémentaires.`,PA:" 3 PA",PO:" 1 - 4 Portée",dmg:"26  - 30"},{title:"Brèche Tectonique",description:`Pose une rune de Terre, occasionne des dommages Terre et applique l'état Terre.

Peut générer des combinaisons élémentaires.`,PA:" 2 PA",PO:" 2 - 7 Portée",dmg:"14  - 16"},{title:"Polarité",description:`Applique des effets de déplacement selon l'état élémentaire de l'ennemi ciblé :
• Terre : repousse la cible.
• Feu : échange de position avec la cible.
• Eau : attire la cible.
• Air : téléporte le lanceur symétriquement par rapport à la cible.

Consomme l'état élémentaire.`,PA:" 1 PA",PO:" 1 - 4 Portée",dmg:"1  - 3"},{title:"Courant Quadramental",description:`Applique des effets sur l'ennemi ciblé selon son état élémentaire :
• Terre : retire des PM.
• Feu : retire des PA.
• Eau : érode la cible.
• Air : retire de la Portée.
Chaque effet est cumulable une fois.`,PA:" 1 PA",PO:" 1 - 6 Portée",dmg:""},{title:"Trait Ardent",description:`Pose des runes de Feu, vole de la vie dans l'élément Feu et applique l'état Feu en zone.

Peut générer des combinaisons élémentaires.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"28  - 32"},{title:"Ouragan",description:`Pose une rune d'Air, occasionne des dommages Air et applique l'état Air.

Peut générer des combinaisons élémentaires.`,PA:" 2 PA",PO:" 1 - 5 Portée",dmg:"17  - 19"},{title:"Glacier",description:`Pose des runes d'Eau, vole de la vie dans l'élément Eau et applique l'état Eau en zone.

Peut générer des combinaisons élémentaires.`,PA:" 3 PA",PO:" 0 Portée",dmg:"29  - 33"},{title:"Volcan",description:`Pose une rune de Feu, occasionne des dommages Feu et applique l'état Feu.

Peut générer des combinaisons élémentaires.`,PA:" 2 PA",PO:" 1 - 7 Portée",dmg:"19  - 21"},{title:"Traversée",description:"Téléporte le lanceur sur la case ciblée et occasionne des dommages dans l'état élémentaire des ennemis en ligne jusqu'à la case ciblée.",PA:" 4 PA",PO:" 5 Portée",dmg:"31  - 40"},{title:"Répulsion Runique",description:`Repousse les cibles en zone et les repousse de nouveau pour chaque rune du lanceur.
La poussée pour chaque rune consommée est plus faible.

Consomme toutes les runes du lanceur.`,PA:" 1 PA",PO:" 0 Portée",dmg:"1  - 2"},{title:"Bouclier Élémentaire",description:`Augmente les résistances de l'allié ciblé et lui applique l'état Bouclier Élémentaire :
• Si la cible subit des dommages, réduit ses résistances à l'élément de l'attaque subie et applique l'état de cet élément sur son attaquant ennemi.

Peut générer des combinaisons élémentaires.`,PA:" 2 PA",PO:" 0 - 5 Portée",dmg:""},{title:"Gardien Élémentaire",description:`Invoque un Gardien Élémentaire maîtrisable qui occasionne des dommages Neutre ou dans l'état élémentaire de sa cible. 
Lorsqu'une combinaison élémentaire est générée par le lanceur, le Gardien gagne des effets selon la combinaison.

Il ne peut y avoir qu'un seul Gardien Élémentaire par équipe. Si le Gardien Élémentaire est encore en vie et que celui-ci est réinvoqué, l'ancien est tué pour laisser place au nouveau.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:""},{title:"Déflagration",description:`Réduit la durée des effets de la cible, pose une rune de Feu, occasionne des dommages Feu aux ennemis et applique l'état Feu et l'état Déflagration.

Le désenvoûtement ne peut pas être appliqué si la cible est déjà dans l'état Déflagration.

Peut générer des combinaisons élémentaires.`,PA:" 4 PA",PO:" 0 - 3 Portée",dmg:"30  - 34"},{title:"Comète",description:`Éloigne le lanceur de la cible, pose une rune d'Air, occasionne des dommages Air aux ennemis et applique l'état Air.

Peut générer des combinaisons élémentaires.`,PA:" 4 PA",PO:" 1 - 8 Portée",dmg:"28  - 32"},{title:"Contribution",description:`Applique des effets sur l'allié ciblé selon les états élémentaires de tous les ennemis :
• Terre : augmente les PM.
• Feu : applique un bouclier.
• Eau : augmente la Puissance.
• Air : augmente les PA.
Chaque effet est cumulable 2 fois.

Consomme les états élémentaires.`,PA:" 2 PA",PO:" 0 - 7 Portée",dmg:""},{title:"Création",description:"Pose une rune sur la case ciblée dans l'élément de la dernière rune posée par le lanceur.",PA:" 2 PA",PO:" 1 - 6 Portée",dmg:""},{title:"Éclats Glacés",description:`Attire la cible, pose une rune d'Eau, occasionne des dommages Eau aux ennemis et applique l'état Eau.

Peut générer des combinaisons élémentaires.`,PA:" 4 PA",PO:" 1 - 6 Portée",dmg:"34  - 38"},{title:"Lance Solaire",description:`Échange de position avec la cible, pose une rune de Feu, occasionne des dommages Feu aux ennemis et applique l'état Feu.

Peut générer des combinaisons élémentaires.`,PA:" 4 PA",PO:" 1 - 3 Portée",dmg:"34  - 38"},{title:"Traitement Runique",description:`Soigne l'allié ciblé pour chaque rune du lanceur.
Les soins sont plus faibles sur le lanceur.

Consomme toutes les runes du lanceur.`,PA:" 2 PA",PO:" 0 - 8 Portée",dmg:"3 %"},{title:"Surcharge Runique",description:`Occasionne des dommages pour chaque rune du lanceur dans l'élément des runes.

Consomme toutes les runes du lanceur.`,PA:" 3 PA",PO:" 1 - 5 Portée",dmg:"10 "},{title:"Propagation",description:`Propage l'état élémentaire de l'ennemi ciblé sur tous les ennemis dans un cercle de 3 cases autour de lui.

Peut générer des combinaisons élémentaires.`,PA:" 1 PA",PO:" 1 - 8 Portée",dmg:""},{title:"Piège Élémentaire",description:`Pose un piège mono-cellule qui applique des effets sur les ennemis selon leur état élémentaire dans un cercle de 2 cases :
• Terre : réduit la durée des effets.
• Feu : réduit les soins reçus.
• Eau : applique l'état Pesanteur.
• Air : applique l'état Intacleur.

Les effets ne peuvent pas être désenvoûtés.
Consomme les états élémentaires des ennemis touchés.`,PA:" 2 PA",PO:" 1 - 6 Portée",dmg:""},{title:"Lame Astrale",description:`Sur un allié : augmente la Portée.

Sur un ennemi : retire de la Portée, pose une rune d'Air, occasionne des dommages Air et applique l'état Air.

Peut générer des combinaisons élémentaires.`,PA:" 4 PA",PO:" 0 - 6 Portée",dmg:"32  - 35"},{title:"Lame Tellurique",description:`Sur un allié : augmente les chances de Critique.

Sur un ennemi : réduit les chances de Critique, pose une rune de Terre, occasionne des dommages Terre et applique l'état Terre.

Peut générer des combinaisons élémentaires.`,PA:" 4 PA",PO:" 0 - 7 Portée",dmg:"34  - 38"},{title:"Météore Percutant",description:`Repousse la cible, pose une rune de Terre, occasionne des dommages Terre aux ennemis et applique l'état Terre.

Peut générer des combinaisons élémentaires.`,PA:" 4 PA",PO:" 2 - 7 Portée",dmg:"30  - 34"},{title:"Déluge",description:`Rapproche le lanceur de la cible, pose une rune d'Eau, occasionne des dommages Eau aux ennemis et applique l'état Eau. 

Peut générer des combinaisons élémentaires.`,PA:" 4 PA",PO:" 1 - 5 Portée",dmg:"31  - 35"},{title:"Empreinte",description:"Pose une rune sous tous les ennemis affectés par un état élémentaire.",PA:" 1 PA",PO:" 0 Portée",dmg:""},{title:"Cycle Élémentaire",description:`Change l'état élémentaire de l'ennemi ciblé selon son état actuel :
• Terre -> Eau -> Feu -> Air -> Terre.

Le coût en PA du sort est remboursé au premier lancer sur une cible.`,PA:" 1 PA",PO:" 1 - 8 Portée",dmg:""},{title:"Tribut",description:`Applique des effets sur le lanceur selon l'état élémentaire de l'ennemi ciblé :
• Terre : augmente les PM.
• Feu : applique un bouclier.
• Eau : augmente la Puissance.
• Air : augmente les PA.

Consomme l'état élémentaire de la cible.`,PA:" 1 PA",PO:" 1 - 6 Portée",dmg:""},{title:"Torrent Arcanique",description:`Occasionne des dommages Air, Terre, Feu et Eau aux ennemis en zone.
Les dommages du sort sont augmentés pour chaque combinaison élémentaire générée par le lanceur.
Les effets sont retirés après utilisation du sort.

Nécessite de générer au moins une <font color="#ebc304">combinaison élémentaire</font> pour être utilisé.`,PA:" 1 PA",PO:" 1 - 8 Portée",dmg:"6 "}],Eliotrope:[{},{title:"Portail",description:`Pose un portail.

Lorsque plusieurs portails sont actifs, ils permettent de se téléporter ou de projeter des sorts.
Les dommages et soins des sorts projetés sont augmentés par les portails.

Les ennemis (hors invocations) ne peuvent pas emprunter un portail au premier tour de jeu.`,PA:" 1 PA",PO:" 1 - 4 Portée",dmg:""},{title:"Portail Flexible",description:`Pose un portail.

Lorsque plusieurs portails sont actifs, ils permettent de se téléporter ou de projeter des sorts.
Les dommages et soins des sorts projetés sont augmentés par les portails.

Les ennemis (hors invocations) ne peuvent pas emprunter un portail au premier tour de jeu.`,PA:" 1 PA",PO:" 1 - 6 Portée",dmg:""},{title:"Affront",description:`Occasionne des dommages Air aux ennemis et repousse les cibles en zone. 

Projeté dans un portail : occasionne uniquement des dommages Air aux ennemis en zone.`,PA:" 3 PA",PO:" 1 - 3 Portée",dmg:"26  - 28"},{title:"Mépris",description:"Occasionne des dommages Air aux ennemis et attire les cibles en zone.",PA:" 3 PA",PO:" 1 - 7 Portée",dmg:"24  - 27"},{title:"Audace",description:`Rapproche le lanceur de la cible et occasionne des dommages Eau aux ennemis.

Projeté dans un portail : occasionne uniquement des dommages Eau.`,PA:" 3 PA",PO:" 1 - 4 Portée",dmg:"26  - 29"},{title:"Tribulation",description:"Occasionne des dommages Eau aux ennemis et attire les cibles vers le centre en zone.",PA:" 3 PA",PO:" 1 - 7 Portée",dmg:"21  - 24"},{title:"Commotion",description:"Occasionne des dommages Terre aux ennemis et attire les cibles vers le centre en zone.",PA:" 3 PA",PO:" 2 - 6 Portée",dmg:"19  - 21"},{title:"Convulsion",description:"Occasionne des dommages Terre aux ennemis et repousse les cibles en zone.",PA:" 3 PA",PO:" 2 - 5 Portée",dmg:"20  - 22"},{title:"Rayon de Wakfu",description:"Occasionne des dommages Feu aux ennemis et soigne les alliés en zone.",PA:" 3 PA",PO:" 1 - 5 Portée",dmg:"26  - 28"},{title:"Faisceau",description:`Occasionne des dommages Feu en zone.

Projeté dans un portail : vole de la vie dans l'élément Feu en zone.`,PA:" 4 PA",PO:" 1 - 6 Portée",dmg:"27  - 31"},{title:"Neutral",description:"Désactive un portail allié et rend 1 PA au lanceur.",PA:" 1 PA",PO:" 0 - 8 Portée",dmg:""},{title:"Interruption",description:"Désactive tous les portails alliés.",PA:" 1 PA",PO:" 0 Portée",dmg:""},{title:"Offense",description:`Occasionne des dommages Feu.

Sur le lanceur : occasionne des dommages Feu dans un cercle de 2 cases autour de lui.`,PA:" 4 PA",PO:" 0 - 7 Portée",dmg:"31  - 36"},{title:"Aplomb",description:`Occasionne des dommages Eau.

Projeté dans un portail : occasionne des dommages Eau et donne 1 PM au lanceur.`,PA:" 4 PA",PO:" 1 - 8 Portée",dmg:"32  - 36"},{title:"Étirement",description:`Sacrifie temporairement une partie de la vie du lanceur pour : 
• Augmenter la Portée des sorts Portail et Portail Flexible du lanceur.
• Augmenter la Portée de l'allié ciblé.`,PA:" 2 PA",PO:" 0 - 7 Portée",dmg:""},{title:"Contraction",description:"Pose et active un portail sur une case occupée.",PA:" 2 PA",PO:" 1 - 2 Portée",dmg:""},{title:"Thérapie",description:"Attire la cible et occasionne des dommages Terre aux ennemis.",PA:" 3 PA",PO:" 1 - 7 Portée",dmg:"23  - 25"},{title:"Camouflet",description:`Occasionne des dommages Terre.

Projeté dans un portail : réduit la durée des effets sur la cible, lui applique l'état Camouflet et occasionne des dommages Terre aux ennemis.

Le désenvoûtement ne peut pas être appliqué si la cible est déjà dans l'état Camouflet.`,PA:" 3 PA",PO:" 1 - 4 Portée",dmg:"23  - 26"},{title:"Distribution",description:"Soigne les alliés d'une partie des dommages de sorts occasionnés à la cible dans un cercle de 2 cases autour d'elle.",PA:" 2 PA",PO:" 1 - 6 Portée",dmg:""},{title:"Diffusion",description:"Renvoie une partie des dommages subis par la cible aux ennemis dans un cercle de 2 cases autour d'elle.",PA:" 2 PA",PO:" 1 - 5 Portée",dmg:""},{title:"Stupeur",description:"Pose un piège qui pose et active un portail.",PA:" 2 PA",PO:" 1 - 6 Portée",dmg:""},{title:"Distorsion",description:`Invoque un Totem qui soigne les alliés (hors invocations) qui empruntent un portail.
Lorsqu'il est attaqué par un allié, il pose et active un portail sur la case de son attaquant.

Il ne peut y avoir qu'un seul Totem Eliotrope par équipe. Si le Totem est encore présent et que celui-ci est ré-invoqué, l'ancien est détruit pour laisser place au nouveau.`,PA:" 3 PA",PO:" 1 - 3 Portée",dmg:"8 %"},{title:"Brimade",description:`Occasionne des dommages Air aux ennemis en zone et repousse les cibles depuis le centre de la zone.

La poussée affecte le lanceur uniquement s'il est projeté dans un portail.`,PA:" 3 PA",PO:" 0 - 6 Portée",dmg:"23  - 25"},{title:"Sermon",description:`Repousse la cible et occasionne des dommages Air aux ennemis.
La poussée est plus importante si le sort est projeté dans un portail.`,PA:" 4 PA",PO:" 1 - 5 Portée",dmg:"32  - 36"},{title:"Cicatrisation",description:"Soigne les alliés en zone.",PA:" 3 PA",PO:" 0 - 2 Portée",dmg:"10 %"},{title:"Conjuration",description:`Pendant 2 tours, si la cible emprunte un portail ou si le sort est projeté directement dans un portail, augmente les dommages de la prochaine attaque subie par la cible.

L'augmentation des dommages sur la prochaine attaque ne peut pas être désenvoûtée.`,PA:" 1 PA",PO:" 1 - 4 Portée",dmg:""},{title:"Affliction",description:`Applique un poison Eau de début de tour sur la cible.

Projeté dans un portail : applique un poison Eau de fin de tour sur la cible et occasionne des dommages Eau.

Les poisons ne sont pas cumulables.`,PA:" 4 PA",PO:" 1 - 6 Portée",dmg:"23  - 26"},{title:"Outrage",description:`Occasionne des dommages Feu.
Les dommages deviennent du vol de vie si le sort est projeté dans un portail.`,PA:" 3 PA",PO:" 1 - 7 Portée",dmg:"20  - 23"},{title:"Odyssée",description:"Éloigne le lanceur de la cible et attire la cible.",PA:" 2 PA",PO:" 1 - 2 Portée",dmg:""},{title:"Exode",description:"Téléporte le lanceur symétriquement par rapport à la cible.État interdit : Pesanteur",PA:" 2 PA",PO:" 1 Portée",dmg:""},{title:"Paume Curative",description:"Soigne la cible.",PA:" 3 PA",PO:" 0 - 2 Portée",dmg:"10 %"},{title:"Cabale",description:`Augmente les PM des alliés en zone.
Le bonus est plus important si le sort est projeté dans un portail.`,PA:" 2 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Poing Fulgurant",description:`Occasionne des dommages Eau aux ennemis et repousse la cible.
La poussée est plus importante si le sort est projeté dans un portail.`,PA:" 3 PA",PO:" 1 - 4 Portée",dmg:"23  - 25"},{title:"Insolence",description:`Éloigne le lanceur de la cible et occasionne des dommages Eau aux ennemis.

Projeté dans un portail : occasionne uniquement des dommages Eau.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"25  - 28"},{title:"Focus",description:`Augmente la Puissance de l'allié ciblé.
La Puissance est plus importante si le sort est projeté dans un portail.`,PA:" 2 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Conflagration",description:`Soigne l'allié ciblé.
Si la cible est le lanceur, réduit également les dommages finaux occasionnés par les ennemis dans un cercle de 2 cases.`,PA:" 2 PA",PO:" 0 - 4 Portée",dmg:"7 %"},{title:"Parasite",description:`Occasionne des dommages Feu.

Projeté dans un portail : occasionne des dommages Feu et applique un poison Feu de fin de tour sur la cible.`,PA:" 5 PA",PO:" 1 - 4 Portée",dmg:"33  - 37"},{title:"Virus",description:`Occasionne des dommages Feu aux ennemis en zone.
Soigne les alliés dans la zone d'effet à hauteur de 50% des dommages occasionnés aux ennemis.
N'affecte pas le lanceur.`,PA:" 4 PA",PO:" 0 - 4 Portée",dmg:"34  - 38"},{title:"Sinécure",description:"Occasionne des dommages Air et réduit les Résistances Poussée.",PA:" 2 PA",PO:" 1 - 6 Portée",dmg:"12  - 14"},{title:"Persiflage",description:`Occasionne des dommages Terre.

Projeté dans un portail : occasionne des dommages Terre et retire de la Portée.`,PA:" 3 PA",PO:" 1 - 5 Portée",dmg:"25  - 29"},{title:"Sarcasme",description:`Occasionne des dommages Terre. 

Projeté dans un portail : occasionne des dommages Terre et réduit les chances de Critique.`,PA:" 4 PA",PO:" 1 - 4 Portée",dmg:"32  - 36"},{title:"Raillerie",description:`Occasionne des dommages Air.

Projeté dans un portail : occasionne des dommages Air et retire des PM.`,PA:" 4 PA",PO:" 1 - 6 Portée",dmg:"30  - 34"},{title:"Entraide",description:`Sur tout le monde pendant 2 tours, si une entité (hors lanceur) emprunte un portail : 
• Augmente les PA du lanceur.
• Soigne le lanceur et ses alliés dans un cercle de 2 cases autour de lui.`,PA:" 2 PA",PO:" 0 Portée",dmg:"7 % (2 tours) "},{title:"Coalition",description:`Augmente les PA de l'allié ciblé.
Le bonus est plus important si le sort est projeté dans un portail.`,PA:" 2 PA",PO:" 0 - 4 Portée",dmg:""}],Steamer:[{},{title:"Harponneuse",description:`Pose une Tourelle offensive qui vole de la vie dans le meilleur élément d'attaque du lanceur.

Il ne peut y avoir qu'une seule Harponneuse par équipe. Si la Harponneuse est encore présente et que celle-ci est reposée, l'ancienne est détruite pour laisser place à la nouvelle.`,PA:" 2 PA",PO:" 1 - 7 Portée",dmg:"19  - 23"},{title:"Chalutier",description:`Pose une Tourelle tactique qui attire les cibles en zone autour d'elle et qui peut tacler.

Il ne peut y avoir qu'un seul Chalutier par équipe. Si le Chalutier est encore en présent et que celui-ci est reposé, l'ancien est détruit pour laisser place au nouveau.`,PA:" 2 PA",PO:" 1 - 7 Portée",dmg:""},{title:"Longue-vue",description:`Occasionne des dommages Eau aux ennemis et applique des effets selon la Marée :
• Marée Basse : augmente la Portée du lanceur et de l'allié ciblé.
• Marée Haute : retire des PM aux ennemis.`,PA:" 3 PA",PO:" 0 - 6 Portée",dmg:"25  - 29"},{title:"Corrosion",description:"Occasionne des dommages Air et réduit les Résistances Poussée.",PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"26  - 30"},{title:"Amarrage",description:`Occasionne des dommages Terre aux ennemis et attire la cible.

Rend 1 PA au lanceur si le sort est lancé sur une Tourelle alliée.`,PA:" 2 PA",PO:" 1 - 7 Portée",dmg:"18  - 21"},{title:"Vapor",description:`Occasionne des dommages Feu aux ennemis, réduit leurs chances de Critique et repousse les cibles depuis le centre en zone.
N'affecte pas le lanceur.

Rend 1 PA au lanceur si une Tourelle alliée est dans la zone d'effet.`,PA:" 3 PA",PO:" 1 - 5 Portée",dmg:"29  - 33"},{title:"Évolution",description:`Évolue une Tourelle alliée.
Soigne également totalement la Tourelle si elle évolue.

Sur un allié : augmente la Puissance.`,PA:" 2 PA",PO:" 1 - 7 Portée",dmg:""},{title:"Surtension",description:`Évolue au maximum une Tourelle alliée et lui applique l'état Surtension :
• Rétrograde la Tourelle au tour suivant.
Soigne également totalement la Tourelle si elle évolue.

Sur un allié : augmente la Puissance.`,PA:" 2 PA",PO:" 1 - 7 Portée",dmg:""},{title:"Torpille",description:"Occasionne des dommages Air aux ennemis et repousse la cible.",PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"25  - 29"},{title:"Gouvernail",description:`Occasionne des dommages Terre aux ennemis et attire les cibles jusqu'au centre en zone.
Les dommages ne diminuent pas avec la distance.

Sur une Tourelle alliée, avant d'appliquer les effets :
• Les dommages sont augmentés pour chaque ennemi dans la zone d'effet.

L'attirance n'affecte pas le lanceur.`,PA:" 3 PA",PO:" 0 - 5 Portée",dmg:"27  - 30"},{title:"Sabotage",description:`Occasionne des dommages Feu et retire des Dommages aux ennemis en zone.
Les dommages ne diminuent pas avec la distance.

Sur une Tourelle alliée, avant d'appliquer les effets :
• Les dommages sont augmentés pour chaque niveau d'Évolution.
• Détruit la Tourelle et fixe son temps de relance à 0.
• Rend 1 PA au lanceur.`,PA:" 3 PA",PO:" 0 - 6 Portée",dmg:"22  - 25"},{title:"Périscope",description:`Occasionne des dommages Eau aux ennemis et leur applique l'état Mal de Mer :
• Retire des PM si la cible est attirée, poussée ou transposée (cumulable 3 fois).

• Marée Basse : désactive la portée modifiable et la ligne de vue du sort.
• Marée Haute : rend sa portée modifiable et active sa ligne de vue.`,PA:" 3 PA",PO:" 1 - 5 Portée",dmg:"28  - 32"},{title:"Gardienne",description:`Pose une Tourelle défensive qui soigne.

Il ne peut y avoir qu'une seule Gardienne par équipe. Si la Gardienne est encore présente et que celle-ci est reposée, l'ancienne est détruite pour laisser place à la nouvelle.`,PA:" 2 PA",PO:" 1 - 7 Portée",dmg:""},{title:"Foreuse",description:`Pose une Tourelle offensive qui vole de la vie dans le meilleur élément d'attaque du lanceur.

Il ne peut y avoir qu'une seule Foreuse par équipe. Si la Foreuse est encore en présente et que celle-ci est reposée, l'ancienne est détruite pour laisser place à la nouvelle.`,PA:" 2 PA",PO:" 1 - 7 Portée",dmg:"26  - 30"},{title:"Aspiration",description:`Rapproche le lanceur de l'allié ciblé.
Le rapprochement est plus important sur les Tourelles.`,PA:" 2 PA",PO:" 2 - 8 Portée",dmg:""},{title:"Piston",description:`Éloigne le lanceur de la cible.
Le recul est plus important sur les Tourelles.`,PA:" 2 PA",PO:" 1 Portée",dmg:""},{title:"Marée",description:`Échange de position avec la cible et occasionne des dommages Eau aux ennemis.

Sur le lanceur : modifie l'état de Marée et rembourse le coût en PA et l'utilisation du sort.
Cet effet peut être déclenché 2 fois maximum par tour.`,PA:" 3 PA",PO:" 0 - 3 Portée",dmg:"34  - 38"},{title:"Court-circuit",description:`Évolue les Tourelles alliées et occasionne des dommages Feu aux ennemis en zone.

Sur une Tourelle alliée en Évolution III dans la zone d'effet : 
• Détruit la Tourelle pour occasionner des dommages Feu supplémentaires aux ennemis dans un cercle de 3 cases autour d'elle.
• Fixe son temps de relance à 0.`,PA:" 4 PA",PO:" 1 - 7 Portée",dmg:"33  - 37"},{title:"Turbine",description:`Occasionne des dommages Feu aux ennemis, augmente les chances de Critique des alliés et attire les cibles jusqu'au centre en zone.
N'affecte pas le lanceur.

Rend 1 PA au lanceur si une Tourelle alliée est dans la zone d'effet.`,PA:" 3 PA",PO:" 0 - 7 Portée",dmg:"27  - 31"},{title:"Flibuste",description:`Occasionne des dommages Air et applique l'état Flibuste sur l'ennemi ciblé :
• Occasionne des dommages Air si la cible subit des dommages de poussée.

Les dommages peuvent être déclenchés 3 fois tant que l'état est actif.
L'état est retiré dès la limite atteinte.`,PA:" 4 PA",PO:" 1 - 7 Portée",dmg:"33  - 37"},{title:"Tactirelle",description:`Pose une Tourelle tactique qui repousse les cibles en zone.

Il ne peut y avoir qu'une seule Tactirelle par équipe. Si la Tactirelle est encore en présente et que celle-ci est reposée, l'ancienne est détruite pour laisser place à la nouvelle.`,PA:" 2 PA",PO:" 1 - 7 Portée",dmg:"1  - 2"},{title:"Bathyscaphe",description:`Pose une Tourelle défensive qui applique du bouclier.

Il ne peut y avoir qu'un seul Bathyscaphe par équipe. Si le Bathyscaphe est encore en présent et que celui-ci est reposé, l'ancien est détruit pour laisser place au nouveau.`,PA:" 3 PA",PO:" 1 - 7 Portée",dmg:""},{title:"Scaphandre",description:"Applique un bouclier sur le lanceur et les Tourelles alliées et le rend Intaclable.",PA:" 2 PA",PO:" 0 Portée",dmg:""},{title:"Blindage",description:`Applique un bouclier et l'état Inébranlable sur l'allié ciblé.
Le bouclier est plus important sur les Tourelles.`,PA:" 3 PA",PO:" 0 - 7 Portée",dmg:""},{title:"Foène",description:"Occasionne des dommages Air aux ennemis et repousse les cibles en zone.",PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"28  - 32"},{title:"Cabestan",description:`Occasionne des dommages Terre aux ennemis et attire les cibles jusqu'au centre en zone.
Les dommages ne diminuent pas avec la distance.

Sur une Tourelle alliée : téléporte également les entités symétriquement par rapport à la cible.

L'attirance n'affecte pas le lanceur.`,PA:" 3 PA",PO:" 0 - 7 Portée",dmg:"29  - 33"},{title:"Ressac",description:`Occasionne des dommages Terre aux ennemis et repousse la cible.

Rend 1 PA au lanceur et la poussée ne fait pas de dommages si le sort est lancé sur une Tourelle alliée.`,PA:" 2 PA",PO:" 1 - 7 Portée",dmg:"16  - 18"},{title:"Écume",description:`Occasionne des dommages Eau aux ennemis et déplace les cibles selon la Marée en zone :
• Marée Basse : attire les cibles.
• Marée Haute : repousse les cibles.`,PA:" 4 PA",PO:" 1 - 6 Portée",dmg:"36  - 40"},{title:"Sonar",description:`Active les sorts spéciaux des Tourelles offensives du lanceur sur l'ennemi ciblé.

Occasionne des dommages dans le meilleur élément d'attaque du lanceur aux ennemis.

Sur un allié : repousse les cibles (hors lanceur) depuis le centre et dévoile les invisibles dans un cercle de 2 cases.`,PA:" 3 PA",PO:" 1 - 4 Portée",dmg:"13 "},{title:"Embuscade",description:`Active les sorts spéciaux des Tourelles offensives du lanceur sur la cible.

Occasionne des dommages Eau, Terre, Air et Feu.`,PA:" 4 PA",PO:" 2 - 6 Portée",dmg:"7  - 9"},{title:"Courant",description:`Occasionne des dommages Eau aux ennemis et déplace la cible selon la Marée :
• Marée Basse : attire la cible.
• Marée Haute : repousse la cible.

Une même cible ne peut être affectée qu'une seule fois par le déplacement d'une Marée dans le tour en cours.`,PA:" 3 PA",PO:" 1 - 4 Portée",dmg:"30  - 34"},{title:"Harmattan",description:`Repousse la cible et occasionne des dommages Air aux ennemis.
Rebondit sur les entités au contact de la cible.

La poussée du rebond n'affecte pas le lanceur.`,PA:" 4 PA",PO:" 1 - 6 Portée",dmg:"31  - 35"},{title:"Secourisme",description:`Active les sorts spéciaux des Tourelles défensives du lanceur sur l'allié ciblé.

Soigne la cible dans le meilleur élément du lanceur.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"25  - 29"},{title:"Sauvetage",description:`Active les sorts spéciaux des Tourelles défensives du lanceur sur l'allié ciblé.

Soigne la cible.`,PA:" 3 PA",PO:" 1 - 7 Portée",dmg:""},{title:"Ancrage",description:`Occasionne des dommages Terre et retire des PM aux ennemis en zone.
Les dommages ne diminuent pas avec la distance.

Rend 1 PA au lanceur si une Tourelle alliée est dans la zone d'effet.`,PA:" 4 PA",PO:" 0 - 4 Portée",dmg:"35  - 38"},{title:"Soupape",description:`Soigne les alliés ou occasionne des dommages Feu aux ennemis.

Sur une Tourelle alliée : rétrograde la Tourelle pour appliquer les effets en zone.
• Évolution III : cercle de 3 cases.
• Évolution II : cercle de 2 cases.
• Évolution I : cercle de 1 case. La Tourelle est également détruite et son temps de relance fixé à 0.`,PA:" 2 PA",PO:" 1 - 8 Portée",dmg:"13  - 15"},{title:"Plongée",description:`Active les sorts spéciaux des Tourelles tactiques du lanceur sur la cible.

Retire des PM aux ennemis.`,PA:" 3 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Submersion",description:`Active les sorts spéciaux des Tourelles tactiques du lanceur sur la cible.

Retire de la Portée aux ennemis.`,PA:" 3 PA",PO:" 0 - 7 Portée",dmg:""},{title:"Compas",description:`Échange les positions de la première et de la dernière cible dans la zone d'effet.

Sur le lanceur : téléporte les entités à son contact symétriquement par rapport à lui.

Fonctionne également avec les Tourelles.`,PA:" 2 PA",PO:" 0 - 8 Portée",dmg:""},{title:"Brise l'Âme",description:`Applique l'état Automatique sur une Tourelle alliée et la soigne :
• La Tourelle intercepte les dommages en mêlée subis par les alliés à son contact au lancer du sort.
• Si un des alliés subit des dommages à distance, la Tourelle s'active en utilisant son sort automatique sur l'allié ou sur son attaquant.

L'activation peut être déclenchée qu'une seule fois par cible par tour et si l'allié ou l'attaquant est à portée de la Tourelle.`,PA:" 3 PA",PO:" 1 - 7 Portée",dmg:""},{title:"Assistance",description:`Téléporte l'allié ciblé sur la première case disponible entre le lanceur et lui. 
Si l'allié ciblé est une Tourelle, la soigne également.`,PA:" 2 PA",PO:" 1 - 8 Portée",dmg:""},{title:"Aiguillage",description:`Attire la cible vers la Tourelle alliée la plus proche dans une croix de 5 cases autour d'elle.
Si la cible termine son déplacement au contact d'une Tourelle alliée, cette dernière la téléporte symétriquement et lui réapplique les effets du sort.

Fonctionne également avec les Tourelles.`,PA:" 2 PA",PO:" 1 Portée",dmg:""},{title:"Boussole",description:`Téléporte le lanceur symétriquement par rapport à une Tourelle alliée.

Sur une case adjacente à une Tourelle alliée : téléporte le lanceur sur la case ciblée ou échange de position avec la cible.`,PA:" 2 PA",PO:" 1 Portée",dmg:""},{title:"Récursivité",description:`Repousse la cible.
Si la cible termine son déplacement au contact d'une Tourelle alliée, cette dernière la téléporte symétriquement et lui réapplique les effets du sort.

La poussée initiale n'affecte pas le lanceur.
Fonctionne également avec les Tourelles.`,PA:" 3 PA",PO:" 1 Portée",dmg:"1  - 4"}],Zobal:[{},{title:"Masque du Pleutre",description:`Applique le Masque du Pleutre sur le lanceur :
• Applique l'état Pleutre sur le lanceur.
• Augmente les PM et la Fuite du lanceur et de ses alliés (hors Zobals) en zone.`,PA:" 1 PA",PO:" 0 Portée",dmg:""},{title:"Masque du Couard",description:`Applique le Masque du Couard sur le lanceur :
• Applique l'état Pleutre sur le lanceur.
• Augmente les dommages à distance et la Portée du lanceur et de ses alliés (hors Zobals) en zone.`,PA:" 1 PA",PO:" 0 Portée",dmg:""},{title:"Masque de l'Intrépide",description:`Applique le Masque de l'Intrépide sur le lanceur :
• Applique l'état Intrépide sur le lanceur.
• Augmente les PA du lanceur et de ses alliés (hors Zobals) dans une croix d'une case.
• Attire les entités vers le centre en zone.`,PA:" 1 PA",PO:" 0 Portée",dmg:""},{title:"Masque de l'Infatigable",description:`Applique le Masque de l'Infatigable sur le lanceur :
• Applique l'état Intrépide sur le lanceur.
• Applique un bouclier sur le lanceur.
• Augmente les PA du lanceur et de ses alliés (hors Zobals) en zone.`,PA:" 1 PA",PO:" 0 Portée",dmg:""},{title:"Brincadeira",description:"Occasionne des dommages Feu et retire de la Portée.",PA:" 2 PA",PO:" 1 - 8 Portée",dmg:"13  - 15"},{title:"Picada",description:"Occasionne des dommages Air et retire des PA.",PA:" 3 PA",PO:" 2 - 6 Portée",dmg:"25  - 28"},{title:"Catalepsie",description:`Vole de la vie dans l'élément Terre et retire de la Fuite en zone.
N'affecte pas le lanceur.`,PA:" 3 PA",PO:" 0 Portée",dmg:"23  - 25"},{title:"Appeau",description:"Attire la cible et vole de la vie dans l'élément Feu aux ennemis.",PA:" 3 PA",PO:" 1 - 4 Portée",dmg:"24  - 28"},{title:"Masque du Psychopathe",description:`Applique le Masque du Psychopathe sur le lanceur :
• Applique l'état Psychopathe sur le lanceur.
• Augmente les dommages en mêlée et le Tacle du lanceur et de ses alliés (hors Zobals) en zone.`,PA:" 1 PA",PO:" 0 Portée",dmg:""},{title:"Masque de l'Hystérique",description:`Applique le Masque de l'Hystérique sur le lanceur :
• Applique l'état Psychopathe sur le lanceur.
• Augmente les Dommages Poussée du lanceur et de ses alliés (hors Zobals) en zone.
• Repousse les cibles en zone.`,PA:" 1 PA",PO:" 0 Portée",dmg:"1 "},{title:"Cabriole",description:"Téléporte le lanceur sur la case ciblée ou symétriquement par rapport à la cible et occasionne des dommages Air aux ennemis en zone.",PA:" 3 PA",PO:" 1 Portée",dmg:"28  - 32"},{title:"Purgatorio",description:"Réduit la durée des effets de la cible et occasionne des dommages Feu aux ennemis.",PA:" 3 PA",PO:" 1 - 3 Portée",dmg:"32  - 36"},{title:"Appui",description:"Éloigne le lanceur de la cible et occasionne des dommages Air, Eau, Terre et Feu aux ennemis.",PA:" 3 PA",PO:" 1 Portée",dmg:"8  - 9"},{title:"Pivot",description:"Téléporte le lanceur symétriquement par rapport à la cible.",PA:" 2 PA",PO:" 1 Portée",dmg:""},{title:"Parafuso",description:`Vole de la vie dans l'élément Eau aux ennemis et attire les cibles vers le centre en zone.
N'affecte pas le lanceur.`,PA:" 3 PA",PO:" 0 - 5 Portée",dmg:"21  - 24"},{title:"Martelo",description:"Occasionne des dommages Terre et retire des PM en zone.",PA:" 3 PA",PO:" 1 - 5 Portée",dmg:"26  - 30"},{title:"Plastron",description:`Applique un bouclier sur les alliés en zone.
Le bouclier est réduit de moitié sur les invocations.`,PA:" 5 PA",PO:" 0 Portée",dmg:""},{title:"Ginga",description:`Réduit les dommages subis par la cible et lui applique l'état Indéplaçable.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 2 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Reuche",description:"Rapproche le lanceur de la cible.",PA:" 2 PA",PO:" 2 - 7 Portée",dmg:""},{title:"Scudo",description:`Applique un bouclier sur l'allié ciblé.
Le bouclier est réduit de moitié sur les invocations.`,PA:" 3 PA",PO:" 1 - 2 Portée",dmg:""},{title:"Inferno",description:"Occasionne des dommages Feu aux ennemis et augmente la Puissance du lanceur.",PA:" 4 PA",PO:" 1 - 2 Portée",dmg:"38  - 42"},{title:"Distance",description:"Occasionne des dommages Eau aux ennemis et repousse la cible.",PA:" 3 PA",PO:" 2 - 8 Portée",dmg:"24  - 26"},{title:"Tortoruga",description:`Applique un bouclier sur l'allié ciblé.
Le bouclier est réduit de moitié sur les invocations.`,PA:" 3 PA",PO:" 4 - 10 Portée",dmg:""},{title:"Armadur",description:"Augmente les PM et la Fuite de la cible.",PA:" 2 PA",PO:" 3 - 7 Portée",dmg:""},{title:"Fougue",description:`Rend l'allié ciblé Intaclable.

Sur un ennemi : le rend Insoignable.`,PA:" 2 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Mascarade",description:`Occasionne des dommages Neutre au lanceur et à la cible :
• Les dommages sur la cible dépendent de la vie restante du lanceur.
• Les dommages sur le lanceur dépendent de sa vie manquante.
• Les effets sont permutés si le lanceur est à moins de 50% de sa vie.

Sur le lanceur : échange de position avec son Masque Grimaçant.`,PA:" 3 PA",PO:" 0 - 1 Portée",dmg:""},{title:"Furia",description:"Occasionne des dommages Terre aux ennemis et augmente les Dommages du lanceur.",PA:" 3 PA",PO:" 1 - 3 Portée",dmg:"35  - 39"},{title:"Bocciara",description:"Occasionne des dommages Eau aux ennemis et augmente les Dommages Poussée du lanceur.",PA:" 2 PA",PO:" 1 - 5 Portée",dmg:"16  - 19"},{title:"Débandade",description:"Téléporte le lanceur sur la case ciblée et augmente ses PM.",PA:" 2 PA",PO:" 1 Portée",dmg:""},{title:"Comédie",description:"Repousse et attire la cible.",PA:" 1 PA",PO:" 2 - 6 Portée",dmg:"1  - 2"},{title:"Ponteira",description:"Occasionne des dommages Eau et retire des Dommages.",PA:" 3 PA",PO:" 1 - 7 Portée",dmg:"20  - 23"},{title:"Agular",description:`Réduit les soins reçus par les cibles et occasionne des dommages Air en zone.
N'affecte pas le lanceur.`,PA:" 4 PA",PO:" 0 - 7 Portée",dmg:"30  - 34"},{title:"Transe",description:`Sacrifie temporairement une partie des points de vie du lanceur pour appliquer un bouclier aux alliés en zone.
Le bouclier est réduit de moitié sur les invocations.`,PA:" 3 PA",PO:" 0 - 1 Portée",dmg:""},{title:"Névrose",description:"Augmente la Puissance de l'allié ciblé et applique l'état Pesanteur sur la cible.",PA:" 2 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Cavalcade",description:"Rapproche le lanceur de la cible et occasionne des dommages Air aux ennemis.",PA:" 4 PA",PO:" 1 - 5 Portée",dmg:"38  - 42"},{title:"Apostasie",description:"Éloigne le lanceur de la cible, la repousse et occasionne des dommages Feu aux ennemis.",PA:" 3 PA",PO:" 2 - 6 Portée",dmg:"25  - 28"},{title:"Grimace",description:`Invoque un Masque Grimaçant maîtrisable qui tacle les ennemis et partage ses dommages avec son invocateur tant qu'il est en vie.
Quand un ennemi se fait tacler par le Masque, lui et son invocateur gagnent du bouclier.

Le Masque Grimaçant s'applique également des effets selon le masque porté par son invocateur :
• Intrépide : attire les entités dans une croix de 3 cases autour de lui.
• Pleutre : augmente ses PM.
• Psychopathe : repousse les entités à son contact.

À sa mort, le temps de relance du sort est fixé à 2 tours.
Si le Masque Grimaçant est encore en vie et que le sort est relancé, il est téléporté sur la case ciblée.`,PA:" 3 PA",PO:" 1 Portée",dmg:""},{title:"Diffraction",description:`Applique un bouclier sur tout le monde selon la distance avec le lanceur :
• 0 à 5 cases : 450% du niveau en bouclier.
• 6 à 11 cases : 250% du niveau en bouclier.
• 12 cases et plus : 50% du niveau en bouclier.
Le bouclier est réduit de moitié sur les invocations.`,PA:" 3 PA",PO:" 0 Portée",dmg:"25 %"},{title:"Apathie",description:"Occasionne des dommages Terre et retire des PM.",PA:" 4 PA",PO:" 2 - 7 Portée",dmg:"28  - 32"},{title:"Rétention",description:"Vole de la vie dans l'élément Air et retire des PA.",PA:" 3 PA",PO:" 1 - 3 Portée",dmg:"27  - 31"},{title:"Boliche",description:"Rapproche le lanceur de la cible, occasionne des dommages Eau aux ennemis et repousse la cible.",PA:" 3 PA",PO:" 1 - 3 Portée",dmg:"26  - 28"},{title:"Ronda",description:"Occasionne des dommages Terre aux ennemis et attire les cibles vers le lanceur en zone.",PA:" 4 PA",PO:" 0 - 1 Portée",dmg:"38  - 42"},{title:"Carnavalo",description:`Applique un bouclier sur le lanceur, occasionne des dommages dans son meilleur élément d'attaque aux ennemis et repousse la cible.
Chaque effet devient plus important selon le masque porté par le lanceur :
• État Intrépide : le bouclier est plus important.
• État Pleutre : la poussée est plus importante.
• État Psychopathe : les dommages sont plus importants.

Chaque changement de masque diminue l'intervalle de relance du sort d'un tour.`,PA:" 3 PA",PO:" 1 - 3 Portée",dmg:"24  - 28"},{title:"Transfiguration",description:`Applique l'état Transfiguration sur le lanceur et l'ennemi ciblé, en appliquant des effets sur l'ennemi selon le masque porté :
• État Intrépide : réduit les dommages finaux occasionnés.
• État Pleutre : réduit les résistances à distance.
• État Psychopathe : réduit les résistances en mêlée.
Le cumul est partagé entre les effets.

Chaque changement de masque diminue l'intervalle de relance du sort d'un tour et réapplique les effets du sort si le lanceur est dans l'état Transfiguration.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:""}],Pandawa:[{},{title:"Paume Explosive",description:`Occasionne des dommages Feu.
Le coût en PA du sort est augmenté après le premier lancer.

• Si le lanceur est Sobre : la zone d'effet devient un cercle de 2 cases pour le tour en cours.
• Si le lanceur est Saoul : les dommages du sort sont augmentés pour le tour en cours.
Chaque effet est cumulable une fois.

Les dommages n'affectent pas le lanceur.`,PA:" 2 PA",PO:" 1 - 5 Portée",dmg:"20  - 22"},{title:"Distillation",description:`Occasionne des dommages Eau et applique l'état Distillation sur les ennemis en zone :
• Applique un poison Eau de début de tour à retardement en zone sur 2 tours.
• Les dommages du poison sont plus importants sur le deuxième tour.
Les poisons ne sont pas réappliqués sur les cibles déjà dans l'état Distillation.

Si le lanceur est Saoul : occasionne des dommages Eau en zone.

N'affecte pas le lanceur.`,PA:" 4 PA",PO:" 1 - 8 Portée",dmg:"32  - 36"},{title:"Gueule de Bois",description:`Rend le lanceur Sobre et occasionne des dommages Terre.
Les dommages sont plus importants si le lanceur est sorti de l'état Saoul pendant le tour en cours.`,PA:" 3 PA",PO:" 1 - 3 Portée",dmg:"20  - 22"},{title:"Souffle Enflammé",description:"Occasionne des dommages Feu et réduit les chances de Critique en zone.",PA:" 4 PA",PO:" 1 - 3 Portée",dmg:"38  - 42"},{title:"Bombance",description:`Rend le lanceur Saoul.

Si le lanceur est Saoul : le rend Sobre et lui rend 1 PA.`,PA:" 1 PA",PO:" 0 Portée",dmg:""},{title:"Picole",description:`Rend le lanceur Saoul.

Si le lanceur est Saoul : le rend Sobre et augmente ses PM.`,PA:" 1 PA",PO:" 0 Portée",dmg:""},{title:"Karcham",description:`Porte la cible en appliquant l'état Porteur sur le lanceur et en augmentant la Portée du sort.

Si le lanceur est Porteur : jette la cible sur la case ciblée.`,PA:" 1 PA",PO:" 1 Portée",dmg:""},{title:"Chamrak",description:`Porte la cible en appliquant l'état Porteur sur le lanceur et en augmentant la Portée du sort.

Si le lanceur est Porteur : jette la cible sur la case ciblée sans ligne de vue.`,PA:" 1 PA",PO:" 1 Portée",dmg:""},{title:"Schnaps",description:`Occasionne des dommages Air et retire du Retrait PA et PM en zone.

Si le lanceur est Saoul : occasionne des dommages Air et réduit les Résistances Poussée en zone.

N'affecte pas le lanceur.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"21  - 24"},{title:"Ribote",description:`Applique l'état Saoul sur le lanceur et occasionne des dommages Terre.

Si le lanceur est Saoul : occasionne des dommages Terre et retire de la Fuite.`,PA:" 2 PA",PO:" 1 - 6 Portée",dmg:"20  - 22"},{title:"Ethylo",description:`Occasionne des dommages Eau et augmente la Portée du lanceur.

Si le lanceur est Saoul : occasionne des dommages Eau et retire de la Portée.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"25  - 28"},{title:"Engourdissement",description:`Augmente les PM du lanceur pour chaque entité dans la zone d'effet (cumulable 3 fois) et occasionne des dommages Air en zone.

Si le lanceur est Saoul : occasionne des dommages Air et retire des PM en zone.

N'affecte pas le lanceur.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 4 PA",PO:" 1 - 7 Portée",dmg:"36  - 40"},{title:"Épouvante",description:`Repousse la cible.

Si le lanceur est Saoul : réduit les chances d'effectuer un coup critique et repousse la cible.
La poussée est plus faible si le lanceur est Saoul.`,PA:" 2 PA",PO:" 1 - 7 Portée",dmg:"1  - 2"},{title:"Consolation",description:"Attire et soigne l'allié ciblé.",PA:" 2 PA",PO:" 1 - 6 Portée",dmg:""},{title:"Brancard",description:"Jette la cible sur la case ciblée, attire les entités survolées vers la case ciblée, rapproche le lanceur de la cible et occasionne des dommages Terre aux ennemis en ligne jusqu'à la case ciblée.",PA:" 2 PA",PO:" 1 - 5 Portée",dmg:"28  - 32"},{title:"Alcoshu",description:"Rend le lanceur Saoul et vole de la vie dans l'élément Eau.",PA:" 2 PA",PO:" 1 - 6 Portée",dmg:"11  - 13"},{title:"Pandikulation",description:"Jette la cible sur la case ciblée, attire les cibles vers le centre et occasionne des dommages Feu aux ennemis en zone.",PA:" 2 PA",PO:" 1 - 4 Portée",dmg:"28  - 31"},{title:"Liqueur",description:"Rend le lanceur Saoul et vole de la vie dans l'élément Air.",PA:" 3 PA",PO:" 1 - 7 Portée",dmg:"22  - 25"},{title:"Ébriété",description:`Invoque un Tonneau de l'Éméché qui augmente la Puissance de son invocateur lorsqu'il est porté et le rend Saoul quand il est jeté.
Le lanceur occasionne également des dommages dans son meilleur élément d'attaque aux ennemis dans un cercle de 2 cases autour du point d'impact.

Le coût en PA des sorts Karcham et Chamrak est remboursé si le lanceur porte son Tonneau.

Si le Tonneau du lanceur est encore présent et que le sort est relancé, l'ancien est détruit pour laisser place au nouveau.`,PA:" 2 PA",PO:" 1 Portée",dmg:"8  - 10"},{title:"Ivresse",description:`Invoque un Tonneau de l'Ivrogne qui soigne son invocateur lorsqu'il est porté et le rend Saoul quand il est jeté.
Le lanceur soigne également ses alliés dans un cercle de 2 cases autour du point d'impact.

Le coût en PA des sorts Karcham et Chamrak est remboursé si le lanceur porte son Tonneau.

Si le Tonneau du lanceur est encore présent et que le sort est relancé, l'ancien est détruit pour laisser place au nouveau.`,PA:" 2 PA",PO:" 1 Portée",dmg:""},{title:"Stabilisation",description:"Enracine la cible et augmente son Esquive PM.",PA:" 1 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Varappe",description:`Augmente le nombre de lancers maximal par tour et par cible des sorts Karcham ou Chamrak du lanceur et rend l'allié ciblé Intaclable.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 2 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Propulsion",description:"Jette la cible sur la case ciblée, occasionne des dommages Air aux ennemis et repousse les cibles en zone.",PA:" 2 PA",PO:" 1 - 4 Portée",dmg:"33  - 37"},{title:"Absinthe",description:"Rend le lanceur Saoul et vole de la vie dans l'élément Feu.",PA:" 2 PA",PO:" 1 - 5 Portée",dmg:"12  - 15"},{title:"Eau-de-vie",description:`Jette la cible sur la case ciblée, occasionne des dommages Eau aux ennemis et soigne les alliés en zone.
N'affecte pas le lanceur.`,PA:" 2 PA",PO:" 1 - 4 Portée",dmg:"26  - 29"},{title:"Bistouille",description:`Rend le lanceur Saoul et vole de la vie dans l'élément Terre en zone.

Le vol de vie n'affecte pas le lanceur.`,PA:" 4 PA",PO:" 0 Portée",dmg:"34  - 38"},{title:"Souillure",description:"Réduit la durée des effets sur la cible et retire de la Puissance aux ennemis.",PA:" 2 PA",PO:" 1 - 2 Portée",dmg:""},{title:"Brassage",description:`Augmente les dommages subis par la cible.

Si le lanceur est Saoul :
• Applique l'état Pesanteur sur la cible.
• Applique l'état Brassage sur le lanceur, qui empêche l'utilisation du sort s'il est Saoul.

La portée du sort est modifiable dans l'état Sobre, mais elle est réduite de moitié si le lanceur est Saoul.`,PA:" 2 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Fermentation",description:"Applique immédiatement un bouclier sur le lanceur et au tour suivant.",PA:" 2 PA",PO:" 1 - 7 Portée",dmg:""},{title:"Bambouseraie",description:`Invoque plusieurs Petits <font color="#ebc304">{spell,12824,1::Bambous}</font> en zone.

Les Bambous meurent au début du prochain tour du lanceur, et sont indépendants de son nombre maximal d'invocations.`,PA:" 2 PA",PO:" 0 - 3 Portée",dmg:""},{title:"Éviction",description:`Téléporte le lanceur symétriquement par rapport à la cible et occasionne des dommages Terre aux ennemis.

Si le lanceur est Saoul : téléporte la cible symétriquement par rapport au lanceur et occasionne des dommages Terre aux ennemis en zone.`,PA:" 2 PA",PO:" 1 Portée",dmg:"15  - 17"},{title:"Souffle Alcoolisé",description:`Occasionne des dommages Air aux ennemis et repousse les cibles en zone.

La portée du sort est réduite de moitié mais les dommages sont plus importants si le lanceur est Saoul.`,PA:" 3 PA",PO:" 1 - 10 Portée",dmg:"28  - 32"},{title:"Flasque Explosive",description:`Occasionne des dommages Feu en zone.
N'affecte pas le lanceur.

La portée du sort est réduite de moitié mais les dommages sont plus importants si le lanceur est Saoul.`,PA:" 2 PA",PO:" 1 - 8 Portée",dmg:"18  - 20"},{title:"Pandatak",description:`Occasionne des dommages Terre en zone.

La portée du sort est réduite de moitié mais les dommages sont plus importants si le lanceur est Saoul.`,PA:" 4 PA",PO:" 1 - 6 Portée",dmg:"38  - 42"},{title:"Lait de Bambou",description:"Réduit la durée des effets sur le lanceur et le rend Sobre.",PA:" 2 PA",PO:" 0 Portée",dmg:""},{title:"Prohibition",description:`Rend la cible Insoignable et Invulnérable en mêlée.

Sur le lanceur :
• Rend Invulnérable en mêlée et Sobre.
• Applique l'état Prohibition, qui empêche l'entrée dans l'état Saoul et l'application des effets des Tonneaux sur lui.
• Rend Insoignable au début du prochain tour.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 2 PA",PO:" 0 - 5 Portée",dmg:""},{title:"Nausée",description:`Éloigne le lanceur de la cible et occasionne des dommages Air aux ennemis.

Si le lanceur est Saoul : repousse la cible et occasionne des dommages Air aux ennemis.`,PA:" 2 PA",PO:" 1 - 8 Portée",dmg:"15  - 17"},{title:"Cascade",description:`Jette la cible sur la case ciblée, soigne les alliés et occasionne des dommages Eau aux ennemis en zone.
Repousse également les entités survolées.`,PA:" 3 PA",PO:" 1 - 5 Portée",dmg:"24  - 28"},{title:"Vague à Lame",description:`Occasionne des dommages Eau aux ennemis et repousse les cibles en zone.
La poussée est appliqué uniquement si le lanceur est Sobre

La portée du sort est réduite de moitié mais les dommages sont plus importants si le lanceur est Saoul.`,PA:" 4 PA",PO:" 1 - 10 Portée",dmg:"36  - 40"},{title:"Pandjiu",description:"Occasionne des dommages Feu aux ennemis et attire la cible.",PA:" 3 PA",PO:" 1 - 5 Portée",dmg:"28  - 32"},{title:"Lien Spiritueux",description:`Invoque un Pandawasta maîtrisable qui retire de la Fuite, de la Puissance et tacle les adversaires.
Il peut également augmenter ses caractéristiques pendant le combat ou porter le lanceur Sobre si ce dernier l'attaque en mêlée.

Le Pandawasta réduit de 50% les dommages immédiats alliés.

Si le Pandawasta du lanceur est encore en vie et que le sort est relancé, l'ancien est tué pour laisser place au nouveau.`,PA:" 3 PA",PO:" 1 - 5 Portée",dmg:""},{title:"Bambou",description:`Invoque un Bambou qui sert d'obstacle.
Il peut porter le lanceur Sobre si ce dernier l'attaque en mêlée.

Le Bambou réduit de 80% les dommages immédiats alliés.

Le coût en PA des sorts Karcham et Chamrak est remboursé si le lanceur porte un de ses Bambous.`,PA:" 2 PA",PO:" 1 - 4 Portée",dmg:""},{title:"Pandanlku",description:"Augmente les PM de l'allié ciblé.",PA:" 2 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Main de Pandawa",description:`Retire de la Puissance et occasionne des dommages dans le meilleur élément d'attaque du lanceur.

Si le lanceur est Saoul : retire de la Puissance et occasionne des dommages Neutre, Terre, Feu, Eau et Air.

Applique également l'état Main de Pandawa sur le lanceur.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 5 PA",PO:" 1 - 5 Portée",dmg:"5 "}],Sacrieur:[{},{title:"Absorption",description:"Vole de la vie dans l'élément Feu et retire de la Puissance aux ennemis ou transfère une partie de la vie du lanceur à l'allié ciblé.",PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"20  - 24"},{title:"Douleur Cuisante",description:`Occasionne des dommages Feu en zone et augmente la Puissance du lanceur.

Les dommages n'affectent pas le lanceur.`,PA:" 3 PA",PO:" 0 - 5 Portée",dmg:"27  - 30"},{title:"Attirance",description:`Attire la cible.

L'attirance est plus importante et la portée maximale du sort est augmentée de 4 si le lanceur est en Souffrance 6 ou plus.`,PA:" 2 PA",PO:" 2 - 10 Portée",dmg:""},{title:"Perfusion",description:`Transfère une partie de la vie du lanceur à ses alliés en zone et leur applique l'état Perfusion :
• Les alliés dans l'état Perfusion sont soignés d'une partie des dommages occasionnés au lanceur.

Le transfert n'est pas appliqué si le lanceur est en Souffrance 6 ou plus.`,PA:" 2 PA",PO:" 0 - 5 Portée",dmg:""},{title:"Hémorragie",description:"Réduit les soins reçus par la cible et vole de la vie dans l'élément Air.",PA:" 3 PA",PO:" 1 Portée",dmg:"22  - 26"},{title:"Furie",description:`Occasionne des dommages Air en zone et augmente les dommages finaux occasionnés par le lanceur.

Les dommages n'affectent pas le lanceur.`,PA:" 3 PA",PO:" 0 - 2 Portée",dmg:"31  - 34"},{title:"Supplice",description:`Vole de la vie dans l'élément Terre.
Les entités qui attaquent la cible sont soignées d'une partie des dommages occasionnés.`,PA:" 3 PA",PO:" 1 Portée",dmg:"22  - 26"},{title:"Décimation",description:`Occasionne des dommages Terre et augmente les dommages subis par les cibles en zone.

N'affecte pas le lanceur.`,PA:" 3 PA",PO:" 1 Portée",dmg:"29  - 32"},{title:"Stase",description:"Vole de la vie dans l'élément Eau et réduit les chances de Critique.",PA:" 3 PA",PO:" 1 - 5 Portée",dmg:"20  - 24"},{title:"Nervosité",description:`Occasionne des dommages Eau en zone et augmente les chances de Critique du lanceur.

Les dommages n'affectent pas le lanceur.`,PA:" 3 PA",PO:" 0 - 4 Portée",dmg:"28  - 31"},{title:"Mutilation",description:`Sacrifie une partie de la vie du lanceur pour augmenter sa Puissance.
À chaque début de tour, sacrifie de nouveau une partie de sa vie pour incrémenter son état de Mutilation tant que le sort est actif.

Relancer le sort retire les effets appliqués et lance le sort Coagulation :
• Applique un bouclier sur le lanceur.
• Le bouclier est plus important selon l'état de Mutilation.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 2 PA",PO:" 0 Portée",dmg:""},{title:"Pacte de Sang",description:"Augmente la Vitalité du lanceur.",PA:" 2 PA",PO:" 0 Portée",dmg:""},{title:"Épée Vorace",description:"Invoque une Épée Vorace maîtrisable qui peut voler de la vie dans l'élément Neutre.",PA:" 3 PA",PO:" 1 - 3 Portée",dmg:""},{title:"Épée Dansante",description:"Invoque une Épée Dansante maîtrisable qui peut attirer, échanger de positions et occasionner des dommages Neutre.",PA:" 3 PA",PO:" 1 - 3 Portée",dmg:""},{title:"Ravage",description:"Rapproche le lanceur de la cible et occasionne des dommages Terre aux ennemis.",PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"28  - 32"},{title:"Fulgurance",description:"Téléporte le lanceur sur la première case disponible entre la cible et lui et occasionne des dommages Air aux ennemis en ligne jusqu'à la case ciblée.",PA:" 3 PA",PO:" 1 - 5 Portée",dmg:"22  - 26"},{title:"Assaut",description:"Échange de position avec la cible et occasionne des dommages Air aux ennemis.",PA:" 2 PA",PO:" 1 - 2 Portée",dmg:"14  - 17"},{title:"Aversion",description:`Occasionne des dommages Feu aux ennemis et repousse les cibles depuis le centre en zone.
N'affecte pas le lanceur.`,PA:" 2 PA",PO:" 1 - 5 Portée",dmg:"12  - 15"},{title:"Transposition",description:`Échange de position avec la cible.

La portée maximale du sort est augmentée de 4 si le lanceur est en Souffrance 6 ou plus.`,PA:" 3 PA",PO:" 1 - 9 Portée",dmg:""},{title:"Fluctuation",description:`Rend le lanceur et ses Épées Intaclables et augmente leurs PM.

Les effets sont plus importants si le lanceur est en Souffrance 6 ou plus et ne peuvent pas être désenvoûtés.`,PA:" 2 PA",PO:" 0 Portée",dmg:""},{title:"Condensation",description:"Occasionne des dommages Eau aux ennemis et attire les cibles vers le lanceur en zone.",PA:" 3 PA",PO:" 0 - 5 Portée",dmg:"21  - 25"},{title:"Afflux",description:"Attire les cibles vers le centre et occasionne des dommages Terre aux ennemis en zone.",PA:" 2 PA",PO:" 0 Portée",dmg:"12  - 15"},{title:"Hostilité",description:"Occasionne des dommages Feu aux ennemis et repousse la cible.",PA:" 2 PA",PO:" 1 - 4 Portée",dmg:"15  - 18"},{title:"Projection",description:"Téléporte le lanceur symétriquement par rapport à la cible et occasionne des dommages Eau aux ennemis.",PA:" 2 PA",PO:" 1 - 2 Portée",dmg:"14  - 17"},{title:"Couronne d'Épines",description:`Applique l'état Pesanteur sur les cibles en zone, un bouclier et l'état Couronne d'Épines sur le lanceur :
• Renvoie 100% des dommages finaux subis en mêlée aux ennemis à son contact.

Si le lanceur est en Souffrance 6 ou plus, lui applique l'état Couronne d'Épines du Martyr :
• Applique un bouclier supplémentaire sur le lanceur pour chaque ennemi dans la zone d'effet.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 2 PA",PO:" 0 Portée",dmg:""},{title:"Pilori",description:`Applique un bouclier sur l'allié ciblé et applique les états Indéplaçable et Pilori sur la cible :
• Retire les effets du sort si la cible subit des dommages en mêlée et soigne le lanceur.

Si le lanceur est en Souffrance 6 ou plus, applique l'état Pilori du Martyr sur la cible :
• Les effets ne peuvent plus être retirés.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 2 PA",PO:" 0 - 4 Portée",dmg:""},{title:"Transfusion",description:"Occasionne des dommages Neutre selon la vie restante du lanceur aux ennemis et transfère une partie de sa vie aux alliés en zone.",PA:" 2 PA",PO:" 0 Portée",dmg:""},{title:"Liens du Sang",description:`Rapproche le lanceur vers la cible et  applique l'état Liens du Sang sur l'ennemi ciblé :
• Rapproche le lanceur vers l'ennemi ciblé si le lanceur subit des dommages ennemis.

Le rapprochement immédiat est plus important et la portée maximale du sort est augmentée de 4 si le lanceur est en Souffrance 6 ou plus.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 2 PA",PO:" 1 - 5 Portée",dmg:""},{title:"Dissolution",description:`Vole de la vie dans l'élément Eau et retire de la Fuite en zone.
N'affecte pas le lanceur.`,PA:" 4 PA",PO:" 0 - 5 Portée",dmg:"25  - 29"},{title:"Carnage",description:`Sacrifie une partie de la vie du lanceur pour occasionner des dommages Air en zone.
Les dommages n'affectent pas le lanceur.`,PA:" 4 PA",PO:" 1 Portée",dmg:"44  - 48"},{title:"Désolation",description:"Retire des PM et vole de la vie dans l'élément Air en zone.",PA:" 4 PA",PO:" 1 - 3 Portée",dmg:"26  - 30"},{title:"Déchaînement",description:`Sacrifie une partie de la vie du lanceur pour occasionner des dommages Eau en zone.
Les dommages n'affectent pas le lanceur.`,PA:" 4 PA",PO:" 0 - 5 Portée",dmg:"39  - 43"},{title:"Sacrifice",description:`Le lanceur subit les dommages à la place des alliés dans la zone d'effet.

Sur des Épées du lanceur : les tue pour lui transférer 50% de leurs points de vie restants.`,PA:" 2 PA",PO:" 0 - 5 Portée",dmg:""},{title:"Pénitence",description:`Échange de position avec l'allié ciblé et lui applique l'état Pénitence :
• Échange les positions de la cible et du lanceur si elle subit des dommages.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 2 PA",PO:" 1 - 6 Portée",dmg:""},{title:"Bain de Sang",description:`Augmente le Tacle du lanceur pour chaque ennemi dans la zone d'effet et vole de la vie dans l'élément Terre en zone.
Le vol de vie n'affecte pas le lanceur.`,PA:" 4 PA",PO:" 0 Portée",dmg:"27  - 31"},{title:"Immolation",description:`Sacrifie une partie de la vie du lanceur pour occasionner des dommages Feu en zone.
Les dommages n'affectent pas le lanceur.`,PA:" 4 PA",PO:" 0 - 4 Portée",dmg:"40  - 44"},{title:"Hécatombe",description:`Vole de la vie dans l'élément Feu et retire du Tacle en zone.
N'affecte pas le lanceur.`,PA:" 4 PA",PO:" 1 - 4 Portée",dmg:"26  - 30"},{title:"Entaille",description:"Sacrifie une partie de la vie du lanceur pour occasionner des dommages Terre.",PA:" 4 PA",PO:" 1 Portée",dmg:"47  - 51"},{title:"Libation",description:`Sacrifie une partie de la vie du lanceur pour le soigner à la fin de son prochain tour.
Les soins sont plus importants selon sa Souffrance.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 2 PA",PO:" 0 Portée",dmg:""},{title:"Châtiment",description:"Occasionne des dommages Neutre selon la vie restante du lanceur aux ennemis en zone autour de lui en sacrifiant une partie de sa vie.",PA:" 4 PA",PO:" 0 Portée",dmg:""},{title:"Berserk",description:`Sacrifie une partie de la vie du lanceur pour lui appliquer l'état Berserk :
• Rend le lanceur Intaclable.
• Augmente ses dommages aux sorts.
• Réduit les soins reçus par le lanceur.

L'état Berserk est retiré si le lanceur retourne en Souffrance 5 ou moins ou relance le sort.`,PA:" 2 PA",PO:" 0 Portée",dmg:""},{title:"Rituel de Jashin",description:`Applique l'état Rituel de Jashin sur l'ennemi ciblé et pose un glyphe-aura sous le lanceur qui lui applique l'état et le rend Intaclable.
Tant que le lanceur et la cible sont dans cet état, renvoie la totalité des dommages subis par le lanceur à la cible, et inversement.`,PA:" 3 PA",PO:" 1 - 8 Portée",dmg:""},{title:"Punition",description:"Occasionne des dommages dans le meilleur élément d'attaque du lanceur et des dommages Neutre selon sa vie érodée.",PA:" 4 PA",PO:" 1 Portée",dmg:"26  - 30"},{title:"Folie Sanguinaire",description:`Vole de la vie dans le meilleur élément d'attaque du lanceur en zone autour de lui.
Le vol de vie ne diminue pas avec la distance.`,PA:" 3 PA",PO:" 0 - 3 Portée",dmg:"24  - 28"}],Sadida:[{},{title:"Ronce",description:`Occasionne des dommages Terre et Infecte la cible.

Sur un Arbre Feuillu : applique les effets sur les ennemis dans un cercle de 2 cases.

Sur un ennemi Infecté : applique les effets sur tous les ennemis Infectés.`,PA:" 3 PA",PO:" 1 - 8 Portée",dmg:"26  - 29"},{title:"Ronce Insolente",description:`Réduit la durée des effets sur la cible et occasionne des dommages Terre aux ennemis.

Sur un ennemi Infecté : applique les effets sur tous les ennemis Infectés.`,PA:" 3 PA",PO:" 0 - 7 Portée",dmg:"31  - 35"},{title:"Arbre",description:`Plante un Arbre.
Un Arbre devient Feuillu après 1 tour.

Il ne peut y avoir que 6 Arbres par équipe. Le septième Arbre planté entraîne la mort du premier.`,PA:" 2 PA",PO:" 1 - 8 Portée",dmg:""},{title:"Arbre Feuillu",description:`Plante un Arbre Feuillu.
Tous les Arbres invoqués par le lanceur se transforment immédiatement en Arbres Feuillus.

Il ne peut y avoir que 6 Arbres par équipe. Le septième Arbre planté entraîne la mort du premier.`,PA:" 2 PA",PO:" 1 - 8 Portée",dmg:""},{title:"Larme de Sadida",description:`Soigne les alliés ou occasionne des dommages Eau aux ennemis.

Sur un Arbre : applique les effets dans un cercle de 2 cases et transforme l'Arbre en Arbre Feuillu.

Sur un ennemi Infecté : applique les effets sur tous les ennemis Infectés.`,PA:" 3 PA",PO:" 0 - 8 Portée",dmg:"25  - 28"},{title:"Montée de Sève",description:`Vole de la vie dans l'élément Eau aux ennemis et soigne les alliés (hors lanceur) selon les dommages occasionnés en zone.

Sur des Arbres : les transforme également en Arbres Feuillus.`,PA:" 4 PA",PO:" 0 - 6 Portée",dmg:"30  - 34"},{title:"Buisson Ardent",description:`Occasionne des dommages Feu et retire des PM.

Sur un Arbre Feuillu : applique les effets sur les ennemis dans un cercle de 2 cases.

Sur un ennemi Infecté : applique les effets sur tous les ennemis Infectés.`,PA:" 3 PA",PO:" 1 - 8 Portée",dmg:"25  - 28"},{title:"Feu de Brousse",description:`Occasionne des dommages Feu et retire des PM aux ennemis et applique l'état Feu de Brousse sur les Arbres et les ennemis en zone :
• À la fin du tour de la cible, occasionne des dommages Feu aux ennemis dans un cercle de 2 cases autour d'elle.
• Peut occasionner des dommages aux Arbres.`,PA:" 4 PA",PO:" 0 - 8 Portée",dmg:"32  - 35"},{title:"Cigüe",description:`Occasionne des dommages Air.

Sur un Arbre Feuillu : applique les effets et maintient l'Infection sur les ennemis dans un cercle de 2 cases.

Sur un ennemi Infecté : applique les effets sur tous les ennemis Infectés et maintient l'Infection sur la cible.`,PA:" 3 PA",PO:" 1 - 8 Portée",dmg:"26  - 29"},{title:"Vent Empoisonné",description:`En zone autour d'un Arbre Feuillu ou d'une Poupée :
• Repousse les entités depuis le centre de la zone.
• Applique un poison Air de début de tour sur les ennemis.`,PA:" 2 PA",PO:" 1 - 63 Portée",dmg:"13  - 15 (2 tours) "},{title:"La Folle",description:`Remplace un Arbre par une Poupée maîtrisable qui peut Infecter et occasionner des dommages Air.

À sa mort, la Poupée redevient un Arbre.
Si elle a été invoquée à partir d'un Arbre Feuillu, l'Arbre à sa mort redevient Feuillu.`,PA:" 2 PA",PO:" 1 - 63 Portée",dmg:""},{title:"La Folle Transmutée",description:`Invoque une Poupée maîtrisable qui peut Infecter et occasionner des dommages Air.

La Poupée est remplacée par un Arbre 3 tours après son invocation.`,PA:" 3 PA",PO:" 1 - 3 Portée",dmg:""},{title:"Sève Paralysante",description:"Infecte, retire de l'Esquive PM et applique un poison Feu de fin de tour sur la cible.",PA:" 3 PA",PO:" 1 - 8 Portée",dmg:"15  - 18 (3 tours) "},{title:"Miasmes",description:`Infecte et applique un poison Air de fin de tour sur les ennemis en zone autour du lanceur.
La zone s'étend autour des Arbres Feuillus et des Poupées.`,PA:" 3 PA",PO:" 0 Portée",dmg:"12  - 14 (2 tours) "},{title:"Contagion",description:`Occasionne des dommages Air et retire des PM. 

Sur un ennemi Infecté : applique les effets sur tous les ennemis Infectés en propageant l'Infection dans un cercle de 2 cases autour d'eux.`,PA:" 4 PA",PO:" 1 - 6 Portée",dmg:"37  - 41"},{title:"Fléau",description:`Vole de la vie dans l'élément Eau et retire des PM.

Sur une Poupée : applique les effets sur les ennemis dans un carré d'une case.

Sur un ennemi Infecté : applique les effets sur tous les ennemis Infectés.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"27  - 31"},{title:"Ronce Apaisante",description:`Enracine la cible et soigne l'allié ciblé ou retire des PM aux ennemis.

Sur un Arbre Feuillu : applique les effets dans un cercle de 2 cases.

Sur un ennemi Infecté : applique les effets sur tous les ennemis Infectés.`,PA:" 2 PA",PO:" 0 - 9 Portée",dmg:"46  - 54"},{title:"Rempotage",description:"Soigne une invocation Sadida, la téléporte sur la première case disponible entre le lanceur et elle et plante un Arbre sur la case ciblée.",PA:" 2 PA",PO:" 1 - 9 Portée",dmg:""},{title:"La Bloqueuse",description:`Remplace un Arbre par une Poupée maîtrisable qui peut échanger de position si elle est maîtrisée et bloquer les ennemis.
Elle peut également augmenter ses PM et se rendre Intaclable.

À sa mort, la Poupée redevient un Arbre.
Si elle a été invoquée à partir d'un Arbre Feuillu, l'Arbre à sa mort redevient Feuillu.`,PA:" 2 PA",PO:" 1 - 63 Portée",dmg:""},{title:"La Bloqueuse Transmutée",description:`Invoque une Poupée maîtrisable qui peut échanger de position si elle est maîtrisée et bloquer les ennemis.
Elle peut également augmenter ses PM et se rendre Intaclable.

La Poupée est remplacée par un Arbre 3 tours après son invocation.`,PA:" 3 PA",PO:" 1 - 3 Portée",dmg:""},{title:"Ronces Agressives",description:`Vole des PM et occasionne des dommages Terre.

Sur un ennemi Infecté : applique les effets sur tous les ennemis Infectés.`,PA:" 4 PA",PO:" 1 - 6 Portée",dmg:"45  - 50"},{title:"Fétiches Calcinés",description:`Occasionne des dommages Feu et applique l'état Fétiches Calcinés sur l'ennemi ciblé :
• Une partie des dommages subis par les Arbres du lanceur sont renvoyés à la cible.

Sur un ennemi Infecté : applique les effets sur tous les ennemis Infectés.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"28  - 31"},{title:"Mangrove",description:`Soigne les alliés et occasionne des dommages Eau aux ennemis en zone.
La zone s'étend autour des Arbres Feuillus.

Transforme également tous les Arbres en Arbres Feuillus.`,PA:" 5 PA",PO:" 0 - 6 Portée",dmg:"32  - 36"},{title:"Forêt Hantée",description:`Occasionne des dommages Terre aux ennemis et leur applique l'état Forêt Hantée en zone :
• Infecte la cible si elle attaque un Arbre du lanceur.

Les effets sont également appliqués sur les ennemis dans un carré d'une case autour d'un Arbre Feuillu.`,PA:" 4 PA",PO:" 0 - 7 Portée",dmg:"28  - 32"},{title:"Puissance Sylvestre",description:`Remplace un Arbre Feuillu par un Arbre Feuillu contrôlable qui peut :
• Infecter et pousser une cible.
• Soigner les alliés et réduire les soins reçus par les ennemis en zone.
• Réduire la durée des effets sur une cible.

L'Arbre contrôlable est remplacé par un Arbre Feuillu 2 tours après son invocation.`,PA:" 2 PA",PO:" 1 - 63 Portée",dmg:""},{title:"Influence Végétale",description:`Remplace un Arbre Feuillu par un Arbre Feuillu contrôlable qui peut :
• Infecter et attirer une cible.
• Appliquer un bouclier sur les alliés et retirer des PM aux ennemis en zone.
• Planter des Ronces Indéplaçables.

L'Arbre contrôlable est remplacé par un Arbre Feuillu 2 tours après son invocation.`,PA:" 2 PA",PO:" 1 - 63 Portée",dmg:""},{title:"La Sacrifiée",description:`Remplace un Arbre par une Poupée maîtrisable qui peut se sacrifier pour Infecter et occasionner des dommages Eau en zone.
Sa Vitalité, ses dommages finaux et la taille de sa zone augmentent au fil des tours.

À sa mort, la Poupée redevient un Arbre.
Si elle a été invoquée à partir d'un Arbre Feuillu, l'Arbre à sa mort redevient Feuillu.`,PA:" 2 PA",PO:" 1 - 63 Portée",dmg:""},{title:"La Sacrifiée Transmutée",description:`Invoque une Poupée maîtrisable qui peut se sacrifier pour Infecter et occasionner des dommages Eau en zone.
Sa Vitalité, ses dommages finaux et la taille de sa zone augmentent au fil des tours.

La Poupée est remplacée par un Arbre 3 tours après son invocation.`,PA:" 3 PA",PO:" 1 - 3 Portée",dmg:""},{title:"Herbes Folles",description:"Occasionne des dommages Feu et retire des PM aux ennemis en zone.",PA:" 3 PA",PO:" 0 - 8 Portée",dmg:"31  - 35"},{title:"Malédiction Vaudou",description:`Occasionne des dommages Eau et applique l'état Vaudou sur l'ennemi ciblé :
• Occasionne des dommages Eau à la cible à la mort d'une Poupée du lanceur.

Sur un ennemi Infecté : applique les effets sur tous les ennemis Infectés.`,PA:" 3 PA",PO:" 1 - 7 Portée",dmg:"25  - 28"},{title:"Sacrifice Vaudou",description:`Occasionne des dommages Eau.
Les dommages sont plus importants sur les invocations.

Sur un ennemi Infecté : applique les effets sur tous les ennemis Infectés.

Sur une Poupée :
• Sacrifie la Poupée pour appliquer les effets sur les ennemis, les Infecter et soigner les alliés dans un cercle de 2 cases autour d'elle.
• Réduit son temps de relance à 0.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"30  - 34"},{title:"Chardons Ardents",description:`Occasionne des dommages Feu et applique l'état Chardons Ardents sur l'ennemi ciblé :
• Occasionne des dommages Feu si la cible subit une tentative de retrait de PM.

Sur un ennemi : applique les effets sur tous les ennemis Infectés.

Les dommages peuvent être déclenchés 3 fois tant que l'état est actif.
L'état est retiré dès la limite atteinte.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"26  - 28"},{title:"Arbre de Vie",description:`Plante un Arbre de Vie.
L'Arbre de Vie redevient Feuillu 2 tours après son invocation.`,PA:" 4 PA",PO:" 1 - 8 Portée",dmg:""},{title:"Altruisme Végétal",description:"Sacrifie un Arbre Feuillu ou une Poupée pour augmenter la Vitalité des Poupées et soigner le lanceur.",PA:" 2 PA",PO:" 1 - 63 Portée",dmg:""},{title:"La Gonflable",description:`Remplace un Arbre par une Poupée maîtrisable qui peut soigner, occasionner des dommages Feu et repousser.

À sa mort, la Poupée redevient un Arbre.
Si elle a été invoquée à partir d'un Arbre Feuillu, l'Arbre à sa mort redevient Feuillu.`,PA:" 2 PA",PO:" 1 - 63 Portée",dmg:""},{title:"La Gonflable Transmutée",description:`Invoque une Poupée maîtrisable qui peut soigner, occasionner des dommages Feu et repousser.

La Poupée est remplacée par un Arbre 3 tours après son invocation.`,PA:" 3 PA",PO:" 1 - 3 Portée",dmg:""},{title:"Tremblement",description:`En zone autour du lanceur, d'un Arbre Feuillu ou d'une Poupée :
• Occasionne des dommages Terre aux ennemis.
• Attire les entités vers le centre de la zone.
• Dévoile les invisibles.`,PA:" 3 PA",PO:" 0 - 63 Portée",dmg:"29  - 33"},{title:"Mandragore",description:`Occasionne des dommages Air et applique l'état Mandragore sur l'ennemi ciblé :
• Infecte la cible si elle subit des dommages de poison ou d'invocation.

Sur un ennemi Infecté : applique les effets sur tous les ennemis Infectés.`,PA:" 3 PA",PO:" 1 - 8 Portée",dmg:"30  - 34"},{title:"Inoculation",description:`Augmente les dommages du sort pour chaque ennemi Infecté et occasionne des dommages Air.

Sur un ennemi Infecté : applique les effets sur tous les ennemis Infectés.

Consomme toutes les Infections.`,PA:" 5 PA",PO:" 1 - 5 Portée",dmg:"39  - 43"},{title:"Force de la Nature",description:`Occasionne des dommages Terre.
Les dommages du sort sont augmentés pour chaque Arbre Feuillu du lanceur planté.

Sur un ennemi Infecté : applique les effets sur tous les ennemis Infectés.`,PA:" 5 PA",PO:" 1 - 6 Portée",dmg:"40  - 50"},{title:"Don Naturel",description:`Sacrifie un Arbre Feuillu ou une Poupée pour partager les dommages entre les alliés et les soigner en zone.
Le partage de dommages n'affecte pas les invocations statiques.`,PA:" 2 PA",PO:" 1 - 63 Portée",dmg:"30  - 35"},{title:"Harmonie",description:`Soigne le lanceur et lui applique l'état Harmonie :
• À la fin du tour du lanceur, l'Enracine et plante des Ronces dans un cercle de 2 cases autour de lui.
• Elles meurent au tour suivant en soignant le lanceur.`,PA:" 2 PA",PO:" 0 Portée",dmg:""},{title:"La Surpuissante",description:`Remplace un Arbre par une Poupée maîtrisable qui peut occasionner des dommages Terre, retirer ou donner des PM.
Elle peut également invoquer une autre Poupée maîtrisable qui peut voler ou donner de la Portée.

À sa mort, la Poupée redevient un Arbre.
Si elle a été invoquée à partir d'un Arbre Feuillu, l'Arbre à sa mort redevient Feuillu.`,PA:" 2 PA",PO:" 1 - 63 Portée",dmg:""},{title:"La Surpuissante Transmutée",description:`Invoque une Poupée maîtrisable qui peut occasionner des dommages Terre, retirer ou donner des PM.
Elle peut également invoquer une autre Poupée maîtrisable qui peut voler ou donner de la Portée.

La Poupée est remplacée par un Arbre 3 tours après son invocation.`,PA:" 3 PA",PO:" 1 - 3 Portée",dmg:""}],Cra:[{},{title:"Flèche Optique",description:`Occasionne des dommages Air et vole de la Portée aux ennemis.

Sur un allié : augmente sa Portée.`,PA:" 3 PA",PO:" 0 - 12 Portée",dmg:"19  - 21"},{title:"Pluie de Flèches",description:`Occasionne des dommages Air en zone.
La zone s'étend autour des balises du lanceur et les effets ne sont appliqués qu'une seule fois par lancer.

N'affecte pas le lanceur.
Les dommages ne diminuent pas avec la distance.`,PA:" 3 PA",PO:" 0 - 7 Portée",dmg:"24  - 26"},{title:"Flèche Glacée",description:"Occasionne des dommages Eau et retire des PA.",PA:" 3 PA",PO:" 1 - 10 Portée",dmg:"24  - 28"},{title:"Flèche Ralentissante",description:"Occasionne des dommages Eau et retire des PM en zone.",PA:" 4 PA",PO:" 1 - 8 Portée",dmg:"34  - 36"},{title:"Flèche de Dispersion",description:"Repousse les cibles depuis le centre de la zone.",PA:" 2 PA",PO:" 1 - 12 Portée",dmg:"1  - 2"},{title:"Représailles",description:`Applique l'état Pesanteur et l'état Représailles sur la cible :
• Si la cible est un ennemi : retire des PM non esquivables et augmente les dommages subis par la cible si elle occasionne des dommages au lanceur.
• Si la cible est un allié : retire des PM non esquivables et augmente les dommages subis par ses attaquants ennemis.

Les états ne peuvent pas être désenvoûtés.`,PA:" 3 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Tir Répulsif",description:"Occasionne des dommages Feu aux ennemis et repousse les cibles en zone.",PA:" 3 PA",PO:" 1 - 5 Portée",dmg:"28  - 32"},{title:"Flèches Enflammées",description:"Éloigne le lanceur des cibles, occasionne des dommages Feu aux ennemis et repousse les cibles en zone.",PA:" 4 PA",PO:" 1 - 5 Portée",dmg:"33  - 36"},{title:"Flèche Cinglante",description:"Occasionne des dommages Terre aux ennemis et repousse la cible.",PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"25  - 29"},{title:"Tir de Couverture",description:`Occasionne des dommages Terre en zone.
La zone s'étend autour des balises du lanceur et les effets ne sont appliqués qu'une seule fois par lancer.

N'affecte pas le lanceur.`,PA:" 4 PA",PO:" 3 - 10 Portée",dmg:"38  - 42"},{title:"Tirs Éloignés",description:"Augmente la Portée du lanceur et de ses alliés en zone.",PA:" 3 PA",PO:" 0 Portée",dmg:""},{title:"Acuité Absolue",description:`Désactive la ligne de vue de tous les sorts du lanceur et augmente ses chances de Critique.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 3 PA",PO:" 0 Portée",dmg:""},{title:"Flèche d'Immobilisation",description:"Vole des PM et de la vie dans l'élément Eau.",PA:" 2 PA",PO:" 1 - 10 Portée",dmg:"11  - 13"},{title:"Flèche Assaillante",description:"Augmente la Puissance du lanceur pour chaque entité dans la zone d'effet et occasionne des dommages Feu en zone.",PA:" 4 PA",PO:" 2 - 6 Portée",dmg:"31  - 35"},{title:"Tir de Recul",description:"Occasionne des dommages Air aux ennemis et repousse la cible.",PA:" 3 PA",PO:" 1 - 8 Portée",dmg:"25  - 28"},{title:"Tir de Barrage",description:`Occasionne des dommages Terre aux ennemis et repousse les cibles en zone.
Les dommages ne diminuent pas avec la distance.`,PA:" 3 PA",PO:" 1 - 8 Portée",dmg:"26  - 30"},{title:"Balise Tactique",description:`Invoque une Balise Tactique qui peut servir d'obstacle et de cible.
Elle subit deux fois moins de dommages des alliés, et elle est insensible aux dommages des sorts Crâ nécessitant une cible.

Il ne peut y avoir qu'une seule Balise Tactique par équipe. Si la Balise Tactique est encore présente et que celle-ci est réinvoquée, l'ancienne est détruite pour laisser place à la nouvelle.`,PA:" 1 PA",PO:" 1 - 10 Portée",dmg:""},{title:"Balise de Rappel",description:`Invoque une Balise de Rappel qui échange de position avec le lanceur et le soigne au tour suivant.
Elle est également détruite au tour suivant.

La Balise est insensible aux dommages des sorts Crâ nécessitant une cible.`,PA:" 2 PA",PO:" 1 - 5 Portée",dmg:""},{title:"Flèche Détonante",description:`Vole de la vie dans l'élément Feu et applique l'état Flèche Détonante sur la cible :
• À la fin du tour de la cible, occasionne des dommages Feu plus importants et retire des PA aux ennemis dans un cercle de 2 cases autour d'elle.`,PA:" 2 PA",PO:" 1 - 6 Portée",dmg:"14  - 17"},{title:"Flèche de Tourment",description:"Réduit les soins reçus par la cible, occasionne des dommages Air et applique un poison Air de fin de tour sur la cible.",PA:" 4 PA",PO:" 1 - 10 Portée",dmg:"25  - 27"},{title:"Flèche Empoisonnée",description:"Retire des PM et applique un poison Neutre de début de tour sur la cible.",PA:" 3 PA",PO:" 1 - 10 Portée",dmg:"17  - 18"},{title:"Flèche Paralysante",description:"Occasionne des dommages Eau et retire des PA en zone.",PA:" 4 PA",PO:" 2 - 6 Portée",dmg:"37  - 39"},{title:"Tirs Puissants",description:"Augmente la Puissance et les Dommages Poussée de la cible.",PA:" 3 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Tirs Perçants",description:"Augmente les chances de Critique, les Dommages et les Dommages Critiques de la cible.",PA:" 3 PA",PO:" 0 - 4 Portée",dmg:""},{title:"Flèche de Concentration",description:"Attire les cibles vers le centre et occasionne des dommages Air aux ennemis en zone.",PA:" 3 PA",PO:" 2 - 8 Portée",dmg:"23  - 26"},{title:"Carreaux Destructeurs",description:"Occasionne des dommages Terre et retire des Dommages en zone.",PA:" 4 PA",PO:" 1 - 8 Portée",dmg:"38 "},{title:"Œil de Taupe",description:`Retire de la Portée, occasionne des dommages Eau et dévoile les invisibles en zone.
N'affecte pas le lanceur.`,PA:" 3 PA",PO:" 3 - 10 Portée",dmg:"25  - 27"},{title:"Flèche Écrasante",description:"Occasionne des dommages Feu aux ennemis, applique l'état Pesanteur sur les cibles et dévoile les invisibles en zone.",PA:" 3 PA",PO:" 3 - 7 Portée",dmg:"30  - 34"},{title:"Flèches Érosives",description:"Érode l'ennemi ciblé et repousse la cible.",PA:" 3 PA",PO:" 1 - 7 Portée",dmg:"1  - 2"},{title:"Flèches de Repli",description:"Éloigne le lanceur de la cible.",PA:" 1 PA",PO:" 2 - 7 Portée",dmg:""},{title:"Tir Perforant",description:`Occasionne des dommages Air en zone.
Les dommages du sort sont augmentés pour chaque entité touchée après chaque lancer.

Les dommages ne diminuent pas avec la distance.`,PA:" 4 PA",PO:" 1 - 8 Portée",dmg:"34  - 38"},{title:"Flèche Dévorante",description:`Occasionne des dommages Air aux ennemis. 
Les dommages sont plus importants après chaque lancer sur une même cible.

Vole également de la vie dans l'élément Air à la cible initiale si le sort est lancé sur une autre cible.
Le vol de vie est plus important selon le nombre de lancers effectués sur la cible initiale.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"11  - 13"},{title:"Flèche Punitive",description:`Occasionne des dommages Terre.
Les dommages du sort sont augmentés pour un tour au deuxième tour après son lancer, et de nouveau au quatrième tour après son lancer.`,PA:" 3 PA",PO:" 4 - 8 Portée",dmg:"29  - 31"},{title:"Flèche du Jugement",description:`Vole de la vie dans l'élément Terre.
Occasionne des dommages Terre supplémentaires selon les PM du lanceur : moins le lanceur a utilisé de PM durant son tour de jeu, plus les dommages supplémentaires seront importants.`,PA:" 3 PA",PO:" 1 - 9 Portée",dmg:"14  - 15"},{title:"Œil pour Œil",description:`Vole de la Portée aux ennemis et applique l'état Œil pour Œil sur la cible :
• Si la cible est un ennemi, la repousse si elle attaque le lanceur.
• Si la cible est un allié, repousse ses attaquants ennemis.
Les entités qui attaquent l'ennemi ciblé ou les attaquants de l'allié ciblé sont soignées d'une partie des dommages occasionnés.

L'état ne peut pas être désenvoûté.`,PA:" 2 PA",PO:" 0 - 6 Portée",dmg:"1  - 2"},{title:"Miroir aux Alouettes",description:`Invoque un Miroir aux Alouettes qui peut servir d'obstacle et de cible.
Si la balise subit des dommages, elle attire les entités dans une croix de 3 cases et dans une croix diagonale de 2 cases autour d'elle.

Le Miroir aux Alouettes réduit de 80% les dommages immédiats alliés.

Il ne peut y avoir qu'un seul Miroir aux Alouettes par équipe. Si le Miroir aux Alouettes est encore présent et que celui-ci est réinvoqué, l'ancien est détruit pour laisser place au nouveau.`,PA:" 1 PA",PO:" 1 - 6 Portée",dmg:""},{title:"Flèche d'Expiation",description:`Occasionne des dommages Eau.
Les dommages du sort sont augmentés pour un tour au troisième tour après son lancer, et de nouveau au sixième tour après son lancer.`,PA:" 4 PA",PO:" 6 - 10 Portée",dmg:"34  - 36"},{title:"Flèche de Rédemption",description:`Occasionne des dommages Eau.
Les dommages du sort sont augmentés après chaque lancer.`,PA:" 3 PA",PO:" 4 - 8 Portée",dmg:"23  - 26"},{title:"Flèche Explosive",description:"Occasionne des dommages Feu en zone.",PA:" 4 PA",PO:" 1 - 8 Portée",dmg:"30  - 34"},{title:"Flèche Fulminante",description:`Occasionne des dommages Feu.
Rebondit sur l'ennemi le plus proche dans un cercle de 2 cases.
Peut également rebondir sur les balises.

Les dommages du sort sont augmentés pour chaque cible touchée.`,PA:" 4 PA",PO:" 1 - 8 Portée",dmg:"34  - 38"},{title:"Flèche Persécutrice",description:"Occasionne des dommages Terre et Eau.",PA:" 3 PA",PO:" 3 - 10 Portée",dmg:"13  - 15"},{title:"Flèche Tyrannique",description:`Occasionne des dommages Feu et Air et applique l'état Flèche Tyrannique sur l'ennemi ciblé :
• Occasionne des dommages Feu si la cible subit des dommages de poussée.
• Occasionne des dommages Air si elle est attirée ou poussée.

Les dommages peuvent être déclenchés 4 fois tant que l'état est actif.
L'état est retiré dès la limite atteinte.`,PA:" 4 PA",PO:" 2 - 7 Portée",dmg:"13  - 15"},{title:"Vendetta",description:`Augmente les chances de Critique de l'allié ciblé et lui applique l'état Vendetta :
• Érode les attaquants ennemis.

Sur un ennemi : réduit les chances de Critique et érode la cible.

L'état Vendetta ne peut pas être désenvoûté.`,PA:" 2 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Sentinelle",description:`Immobilise le lanceur pour :
• Augmenter ses dommages aux sorts.
• Rendre la portée de ses sorts Crâ à portée modifiable infinie.
• Dévoiler toutes les entités invisibles dans sa ligne de vue.`,PA:" 2 PA",PO:" 0 Portée",dmg:""}],Iop:[{},{title:"Pression",description:"Érode la cible et occasionne des dommages Terre.",PA:" 3 PA",PO:" 1 - 4 Portée",dmg:"26  - 30"},{title:"Fracture",description:"Érode les cibles et occasionne des dommages Air en ligne jusqu'à la case ciblée.",PA:" 4 PA",PO:" 1 - 4 Portée",dmg:"32  - 36"},{title:"Bond",description:"Téléporte le lanceur sur la case ciblée et augmente les dommages subis par les ennemis en zone.",PA:" 4 PA",PO:" 1 - 5 Portée",dmg:""},{title:"Agitation",description:`Augmente les PM de l'allié ciblé et le rend Intaclable.
Retire une partie de sa Fuite au tour suivant.`,PA:" 2 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Ferveur",description:"Applique un bouclier sur le lanceur et ses alliés et occasionne des dommages Eau aux ennemis en zone.",PA:" 3 PA",PO:" 0 - 5 Portée",dmg:"24  - 27"},{title:"Menace",description:"Attire la cible et occasionne des dommages Eau aux ennemis.",PA:" 3 PA",PO:" 1 - 3 Portée",dmg:"26  - 28"},{title:"Couperet",description:"Occasionne des dommages Feu et retire des PM en zone.",PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"28  - 32"},{title:"Accumulation",description:`Occasionne des dommages Terre.

Sur le lanceur : augmente les dommages du sort.`,PA:" 3 PA",PO:" 0 - 4 Portée",dmg:"22  - 26"},{title:"Épée Divine",description:"Occasionne des dommages Air aux ennemis et augmente les Dommages du lanceur et des alliés en zone.",PA:" 3 PA",PO:" 0 - 3 Portée",dmg:"26  - 30"},{title:"Épée du Jugement",description:`Applique un bouclier sur le lanceur, occasionne des dommages Eau et applique l'état Condamné sur la cible :
• Occasionne des dommages Eau plus importants à retardement sur la cible.

Le bouclier est plus important et le retardement est réinitialisé sur une cible Condamnée.

Sur le lanceur : applique un bouclier.`,PA:" 4 PA",PO:" 0 - 4 Portée",dmg:"31  - 35"},{title:"Intimidation",description:"Occasionne des dommages dans le meilleur élément d'attaque du lanceur aux ennemis et repousse la cible.",PA:" 2 PA",PO:" 1 - 2 Portée",dmg:"8  - 10"},{title:"Conquête",description:`Invoque un Stratège Iop qui renvoie 50% des dommages qu'il subit dans un cercle de 2 cases autour de lui. 
Les dommages n'affectent pas le lanceur.

Le Stratège Iop réduit de 50% les dommages immédiats alliés.

Il ne peut y avoir qu'un seul Stratège Iop par équipe. Si le Stratège Iop est encore en vie et que celui-ci est ré-invoqué, l'ancien est tué pour laisser place au nouveau.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:""},{title:"Concentration",description:`Occasionne des dommages Terre.
Les dommages sont plus importants sur les invocations.`,PA:" 2 PA",PO:" 1 Portée",dmg:"20  - 24"},{title:"Sentence",description:`Occasionne des dommages Feu et applique l'état Sentence sur la cible :
• À la fin du tour de la cible, occasionne des dommages Feu plus importants aux ennemis dans un cercle de 2 cases autour d'elle.

Les dommages n'affectent pas le lanceur.`,PA:" 2 PA",PO:" 0 - 8 Portée",dmg:"13  - 16"},{title:"Déferlement",description:"Rapproche le lanceur vers la cible et occasionne des dommages Eau aux ennemis.",PA:" 4 PA",PO:" 1 - 6 Portée",dmg:"38  - 42"},{title:"Anneau Destructeur",description:`Occasionne des dommages Air aux ennemis et attire les cibles vers le centre en zone.
N'affecte pas le lanceur.`,PA:" 3 PA",PO:" 0 - 3 Portée",dmg:"24  - 28"},{title:"Vitalité",description:`Augmente la Vitalité de la cible.
La Vitalité est plus importante sur le lanceur.`,PA:" 3 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Violence",description:"Repousse les cibles en zone.",PA:" 2 PA",PO:" 0 Portée",dmg:"1  - 2"},{title:"Souffle",description:"Repousse les cibles depuis le centre et occasionne des dommages Air aux ennemis en zone.",PA:" 2 PA",PO:" 2 - 8 Portée",dmg:"13  - 15"},{title:"Rassemblement",description:`Occasionne des dommages Feu aux ennemis et attire les cibles jusqu'au centre en zone.
N'affecte pas le lanceur.`,PA:" 3 PA",PO:" 0 - 6 Portée",dmg:"22  - 25"},{title:"Épée Destructrice",description:"Érode les cibles et occasionne des dommages Feu en zone.",PA:" 4 PA",PO:" 1 - 3 Portée",dmg:"32  - 36"},{title:"Fustigation",description:"Érode les cibles et occasionne des dommages Eau en zone.",PA:" 4 PA",PO:" 1 - 2 Portée",dmg:"34  - 38"},{title:"Puissance",description:"Augmente la Puissance et les Dommages Poussée de la cible.",PA:" 3 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Vindicte",description:"Érode l'ennemi ciblé.",PA:" 2 PA",PO:" 1 - 4 Portée",dmg:""},{title:"Tempête de Puissance",description:`Occasionne des dommages Feu aux ennemis.

Occasionne des dommages Feu supplémentaires sur la cible initiale si le sort est lancé sur une autre cible.
Les dommages supplémentaires lors du changement de cible sont plus importants si le sort a été utilisé deux fois sur la cible initiale.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"27  - 31"},{title:"Tannée",description:"Occasionne des dommages Air et retire des PM en zone.",PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"27  - 30"},{title:"Endurance",description:`Occasionne des dommages Eau et applique un bouclier sur le lanceur.

Sur le lanceur : applique un bouclier.`,PA:" 3 PA",PO:" 0 - 2 Portée",dmg:"30  - 34"},{title:"Pugilat",description:`Occasionne des dommages Terre en zone. N'affecte pas le lanceur.
Les dommages du sort sont augmentés après chaque lancer pour le tour en cours.`,PA:" 2 PA",PO:" 1 - 6 Portée",dmg:"9  - 11"},{title:"Vertu",description:`Applique un bouclier sur les alliés en zone.
Retire de la Puissance au lanceur pour chaque allié à son contact (cumulable 4 fois).`,PA:" 3 PA",PO:" 0 Portée",dmg:""},{title:"Massacre",description:"Augmente les dommages subis par la cible.",PA:" 2 PA",PO:" 1 - 7 Portée",dmg:""},{title:"Épée de Iop",description:`Occasionne des dommages Terre en zone.
N'affecte pas le lanceur.`,PA:" 4 PA",PO:" 0 - 8 Portée",dmg:"37  - 41"},{title:"Fendoir",description:`Applique un bouclier sur le lanceur pour chaque ennemi dans la zone d'effet et occasionne des dommages Eau en zone.
Les dommages n'affectent pas le lanceur.`,PA:" 5 PA",PO:" 0 - 4 Portée",dmg:"47  - 53"},{title:"Friction",description:`Attire la cible et lui applique l'état Friction :
• Si la cible est un ennemi, la rapproche de ses attaquants ennemis.
• Si la cible est un allié, attire ses attaquants ennemis vers elle.`,PA:" 2 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Coup pour Coup",description:`Repousse la cible et lui applique l'état Coup pour Coup :
• Si la cible est un ennemi, la repousse si elle attaque le lanceur.
• Si la cible est un allié, repousse ses attaquants ennemis.`,PA:" 2 PA",PO:" 1 - 3 Portée",dmg:"1  - 2"},{title:"Épée Céleste",description:`Occasionne des dommages Air en zone.
N'affecte pas le lanceur.`,PA:" 4 PA",PO:" 0 - 6 Portée",dmg:"36  - 40"},{title:"Zénith",description:`Occasionne des dommages Air en zone. 
Occasionne des dommages Air supplémentaires en zone selon les PM du lanceur : moins le lanceur a utilisé de PM durant son tour de jeu, plus les dommages supplémentaires seront importants.`,PA:" 5 PA",PO:" 1 - 3 Portée",dmg:"27  - 29"},{title:"Précipitation",description:`Augmente les PA de l'allié ciblé et lui applique l'état Affaibli.
Retire des PA à cet allié au tour suivant.

L'état n'est pas appliqué sur le lanceur.`,PA:" 2 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Détermination",description:`Applique l'état Indéplaçable et un bouclier sur l'allié ciblé.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 2 PA",PO:" 0 - 4 Portée",dmg:""},{title:"Épée du Destin",description:`Occasionne des dommages Feu.
Les dommages du sort sont augmentés pour un tour au deuxième tour après son lancer.`,PA:" 4 PA",PO:" 1 - 2 Portée",dmg:"38  - 42"},{title:"Tumulte",description:`Augmente les dommages du sort pour chaque ennemi dans la zone d'effet et occasionne des dommages Feu en zone.

N'affecte pas le lanceur.`,PA:" 4 PA",PO:" 0 - 6 Portée",dmg:"39  - 41"},{title:"Emprise",description:`Rend l'ennemi ciblé Invulnérable et l'immobilise.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 3 PA",PO:" 1 Portée",dmg:""},{title:"Duel",description:`Rend le lanceur et l'ennemi ciblé Invulnérables à distance, leur applique l'état Pesanteur et les immobilise.
L'état Pesanteur du lanceur est conservé au tour suivant.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 4 PA",PO:" 1 Portée",dmg:""},{title:"Fureur",description:`Occasionne des dommages Terre.
Les dommages du sort sont augmentés après chaque lancer. 

Les bonus se décrémentent si le sort n'est pas relancé.`,PA:" 3 PA",PO:" 1 Portée",dmg:"28  - 32"},{title:"Colère de Iop",description:`Occasionne des dommages Terre.
Les dommages du sort sont augmentés pour un tour au troisième tour après son lancer.`,PA:" 7 PA",PO:" 1 Portée",dmg:"81  - 100"}],Eniripsa:[{},{title:"Mot d'Amitié",description:`Invoque un Lapino maîtrisable qui peut soigner ou appliquer un bouclier.
Le Lapino peut également se transformer s'il est dans l'état Contrôlé pour occasionner des dommages.

À sa mort, le temps de relance du sort est fixé à 2 tours et pose un glyphe sous le Lapino.
Si le Lapino est encore en vie et que le sort est relancé, il est téléporté sur la case ciblée en l'immobilisant.`,PA:" 3 PA",PO:" 1 - 3 Portée",dmg:""},{title:"Mot Alchimique",description:`Invoque une Fiole Alchimique vide statique qui peut exploser à sa destruction si elle est pleine.

Sur une Fiole du lanceur pleine : consomme le contenu de la Fiole.
Le contenu peut également être consommé par les alliés en occasionnant des dommages à la Fiole.

Sur une Fiole du lanceur vide : détruit la Fiole et rembourse le coût en PA.

Utiliser le sort sur une Fiole rembourse l'utilisation dans le tour du sort.
Invoquer une Fiole Alchimique empêche l'invocation d'une autre Fiole dans le même tour.`,PA:" 2 PA",PO:" 1 - 5 Portée",dmg:"20 "},{title:"Mot Tapageur",description:"Soigne les alliés et occasionne des dommages Feu aux ennemis en zone.",PA:" 3 PA",PO:" 0 - 5 Portée",dmg:"22  - 25"},{title:"Cri Assourdissant",description:"Occasionne des dommages Feu et retire des PA.",PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"24  - 28"},{title:"Mot Espiègle",description:"Occasionne des dommages Air et retire des PM.",PA:" 3 PA",PO:" 1 - 7 Portée",dmg:"21  - 24"},{title:"Mot Malicieux",description:`Occasionne des dommages Air et applique l'état Malice sur la cible :
• Retire de la Puissance à la cible pour chaque PM qu'elle utilise (cumulable 10 fois).`,PA:" 4 PA",PO:" 1 - 8 Portée",dmg:"30  - 34"},{title:"Mot Vampirique",description:"Vole de la vie dans l'élément Eau aux ennemis ou transfère une partie de la vie du lanceur à l'allié ciblé.",PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"25  - 30"},{title:"Sanglots",description:`Occasionne des dommages Eau.
Soigne les alliés à hauteur de 100% des dommages occasionnés à l'ennemi ciblé dans un cercle de 2 cases autour de lui.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"23  - 26"},{title:"Juron",description:"Occasionne des dommages Terre aux ennemis et repousse la cible.",PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"22  - 25"},{title:"Onguent Ancestral",description:`Occasionne des dommages Terre aux ennemis ou soigne les alliés.
Augmente également les soins reçus par l'allié ciblé.`,PA:" 4 PA",PO:" 1 - 7 Portée",dmg:"35  - 38"},{title:"Mot Stimulant",description:`Augmente les PA de l'allié ciblé et lui applique l'état Encouragé.
Le cumul est partagé entre les Encouragements Eniripsa.

Sur une case libre : invoque une Fée Stimulante.`,PA:" 2 PA",PO:" 0 - 5 Portée",dmg:"10 "},{title:"Mot de Déclin",description:`Réduit la durée des effets sur l'ennemi ciblé, lui réduit ses soins reçus et lui applique l'état Moqué.
Le cumul est partagé entre les Moqueries Eniripsa.

Sur une case libre : invoque un Feu de Déclin.`,PA:" 2 PA",PO:" 1 - 5 Portée",dmg:"10 "},{title:"Mot de Frayeur",description:"Repousse la cible.",PA:" 1 PA",PO:" 1 - 7 Portée",dmg:"1 "},{title:"Scalpel",description:`Érode l'ennemi ciblé et lui occasionne des dommages dans le meilleur élément d'attaque du lanceur.
Les effets sont retirés après le lancer du sort.

Sur un allié : soigne la cible dans le meilleur élément du lanceur.`,PA:" 4 PA",PO:" 0 - 2 Portée",dmg:"40  - 44"},{title:"Lamentations",description:`Vole de la vie dans l'élément Eau aux ennemis en zone.
Soigne les alliés (hors lanceur) dans la zone d'effet à hauteur de 50% des dommages occasionnés aux ennemis.`,PA:" 4 PA",PO:" 0 - 4 Portée",dmg:"29  - 32"},{title:"Vacarme",description:`Soigne les alliés ou occasionne des dommages Feu aux ennemis.

Sur un Feu Follet du lanceur : 
• Soigne les alliés et occasionne des dommages Feu aux ennemis dans un cercle de 2 cases autour du Feu.
• Augmente les dommages finaux occasionnés par tous les Feux Follets du lanceur.`,PA:" 3 PA",PO:" 0 - 4 Portée",dmg:"25  - 28"},{title:"Mot Turbulent",description:`Soigne les alliés, occasionne des dommages Feu aux ennemis et leur applique l'état Turbulent en zone :
• À la fin du tour de la cible, repousse les entités à son contact.`,PA:" 4 PA",PO:" 0 - 4 Portée",dmg:"36  - 41"},{title:"Mot Furieux",description:"Occasionne des dommages Terre aux ennemis et repousse les cibles en zone.",PA:" 4 PA",PO:" 1 - 3 Portée",dmg:"30  - 34"},{title:"Mot Vivifiant",description:`Augmente les PM et la Fuite de l'allié ciblé et lui applique l'état Encouragé.
Le cumul est partagé entre les Encouragements Eniripsa.

Sur une case libre : invoque une Fée Vivifiante.`,PA:" 2 PA",PO:" 0 - 5 Portée",dmg:"10 "},{title:"Mot Galvanisant",description:`Augmente la Puissance de l'allié ciblé et lui applique un bouclier et l'état Encouragé.
Le cumul est partagé entre les Encouragements Eniripsa.

Sur une case libre : invoque une Fée Galvanisante.`,PA:" 2 PA",PO:" 0 - 5 Portée",dmg:"10 "},{title:"Mot Farceur",description:`Occasionne des dommages Air aux ennemis ou soigne les alliés et applique l'état Farce sur la cible :
• À la fin du tour de la cible, la téléporte à sa position précédente.`,PA:" 3 PA",PO:" 0 - 6 Portée",dmg:"22  - 24"},{title:"Mot Défendu",description:"Vole de la vie dans l'élément Eau aux ennemis et attire les cibles en zone.",PA:" 4 PA",PO:" 1 - 4 Portée",dmg:"28  - 31"},{title:"Peinture de Guerre",description:`Applique l'état Peinture sur la cible et occasionne des dommages Terre aux ennemis ou soigne les alliés.

<b>État Peinture :</b>
• Si c'est un ennemi : réduit ses Résistances Poussée.
• Si c'est un allié : le soigne au début de son tour.`,PA:" 2 PA",PO:" 0 - 7 Portée",dmg:"9  - 11"},{title:"Mot Secret",description:`Soigne les alliés et occasionne des dommages Air aux ennemis en zone.
Les soins et les dommages sont augmentés dans 2 tours si le sort n'est pas relancé au tour suivant.

Augmente les soins finaux occasionnés par toutes les Fées du lanceur si une entité est touchée.`,PA:" 4 PA",PO:" 1 - 10 Portée",dmg:"28  - 32"},{title:"Mot de Jouvence",description:`Réduit la durée des effets sur l'allié ciblé, le soigne immédiatement et en début de tour et lui applique l'état Encouragé.
Le cumul est partagé entre les Encouragements Eniripsa.

Sur une case libre : invoque une Fée de Jouvence.`,PA:" 2 PA",PO:" 0 - 5 Portée",dmg:"10 "},{title:"Mot Déprimant",description:`Retire de la Puissance et des Dommages à l'ennemi ciblé et lui applique l'état Moqué.
Le cumul est partagé entre les Moqueries Eniripsa.

Sur une case libre : invoque un Feu Déprimant.`,PA:" 2 PA",PO:" 1 - 5 Portée",dmg:"10 "},{title:"Cri de Guerre",description:`Occasionne des dommages Terre aux ennemis en zone autour du lanceur.
Repousse également les ennemis Peints dans la zone d'effet.

Les dommages ne diminuent pas avec la distance.`,PA:" 4 PA",PO:" 0 Portée",dmg:"37  - 41"},{title:"Mot Rituel",description:`Pose un glyphe-aura qui applique l'état Peinture en zone.
Occasionne également des dommages Terre aux ennemis dans la zone d'effet et soigne les alliés à l'intérieur de l'anneau.`,PA:" 3 PA",PO:" 0 - 4 Portée",dmg:"28  - 32"},{title:"Mot Interdit",description:"Réduit la durée des effets sur la cible, occasionne des dommages Eau aux ennemis ou soigne les alliés.",PA:" 5 PA",PO:" 0 - 4 Portée",dmg:"46  - 50"},{title:"Mot Exsangue",description:`Occasionne des dommages Eau aux ennemis ou soigne les alliés.
Les entités qui attaquent l'ennemi ciblé sont soignées d'une partie des dommages occasionnés.`,PA:" 4 PA",PO:" 0 - 5 Portée",dmg:"37  - 40"},{title:"Mot Accablant",description:`Retire des PM et de l'Esquive PM à l'ennemi ciblé et lui applique l'état Moqué.
Le cumul est partagé entre les Moqueries Eniripsa.

Sur une case libre : invoque un Feu Accablant.`,PA:" 2 PA",PO:" 1 - 5 Portée",dmg:"10 "},{title:"Mot Décourageant",description:`Retire des PA et de l'Esquive PA à l'ennemi ciblé et lui applique l'état Moqué.
Le cumul est partagé entre les Moqueries Eniripsa.

Sur une case libre : invoque un Feu Décourageant.`,PA:" 2 PA",PO:" 1 - 5 Portée",dmg:"10 "},{title:"Chapardage",description:"Vole de la Portée à la cible et vole de la vie dans l'élément Feu aux ennemis.",PA:" 3 PA",PO:" 1 - 8 Portée",dmg:"20  - 22"},{title:"Mot Distrayant",description:`Attire les cibles vers le centre, soigne les alliés et occasionne des dommages Feu aux ennemis en zone.
L'attirance n'affecte pas le lanceur.`,PA:" 4 PA",PO:" 0 - 6 Portée",dmg:"30  - 34"},{title:"Mot Fleuri",description:`Occasionne des dommages Air aux ennemis et applique l'état Floraison sur les cibles en zone :
• À la fin du tour d'une cible, soigne les alliés dans une étoile de 2 cases.`,PA:" 4 PA",PO:" 0 - 6 Portée",dmg:"33  - 37"},{title:"Bosquet Enchanté",description:`Soigne les alliés et occasionne des dommages Air aux ennemis en zone.
La zone s'étend autour des Fées du lanceur et des alliés Encouragés.

Les effets ne sont appliqués qu'une seule fois par lancer.`,PA:" 4 PA",PO:" 0 - 7 Portée",dmg:"34  - 38"},{title:"Mot d'Envol",description:"Échange de position avec l'allié ciblé.",PA:" 3 PA",PO:" 1 - 5 Portée",dmg:""},{title:"Fontaine de Jouvence",description:`Soigne les alliés et pose un glyphe de fin de tour qui soigne les alliés en zone.
Rend le lanceur Intaclable tant qu'il est dans le glyphe.`,PA:" 3 PA",PO:" 0 - 2 Portée",dmg:""},{title:"Pinceau Tribal",description:`Applique l'état Peinture sur la cible.

Sur une cible Peinte : propage l'état, soigne les alliés et occasionne des dommages Terre aux ennemis dans un cercle de 2 cases.

Sur le lanceur : consomme toutes les Peintures pour occasionner des dommages Terre à tous les ennemis Peints.
• Les dommages sont augmentés par ennemi touché.
• Augmente les Dommages Poussée du lanceur par allié touché.`,PA:" 3 PA",PO:" 0 - 6 Portée",dmg:"19  - 22"},{title:"Chœur Strident",description:`Occasionne des dommages Feu.
Les dommages sont augmentés à l'application d'une Moquerie par le lanceur (une fois par tour) ou à la mort d'un de ses Feux Follets.

Les bonus se décrémentent après utilisation du sort.`,PA:" 5 PA",PO:" 1 - 5 Portée",dmg:"40  - 44"},{title:"Cryothérapie",description:`Occasionne des dommages Eau aux ennemis et applique l'état Cryothérapie sur la cible :
• Applique un bouclier sur l'allié ciblé ou retire de la Fuite aux ennemis.
• Si la cible perd l'état, soigne les alliés et occasionne des dommages Eau aux ennemis dans un cercle de 2 cases.`,PA:" 3 PA",PO:" 0 - 6 Portée",dmg:"14  - 16"},{title:"Murmure",description:`Occasionne des dommages Air et vole des PM aux ennemis.

Sur un allié : soigne la cible et augmente ses PM.`,PA:" 2 PA",PO:" 0 - 6 Portée",dmg:"16  - 18"},{title:"Mot de Reconstitution",description:"Soigne totalement l'allié ciblé mais le rend Insoignable.",PA:" 5 PA",PO:" 0 - 8 Portée",dmg:"100 %"},{title:"Mot de Solidarité",description:`Transfère 10% des points de vie de l'allié ciblé ou 90% des points de vie d'une Fée du lanceur à tous les alliés dans l'état Encouragé et à toutes les Fées du lanceur.

Sur un allié dans l'état Encouragé : transfère 10% des points de vie de tous les alliés dans l'état Encouragé et 90% des points de vie de toutes les Fées du lanceur à la cible.`,PA:" 1 PA",PO:" 0 - 7 Portée",dmg:""}],Ecaflip:[{},{title:"Bonne Pioche",description:`Pioche une Carte aléatoire du Poker d'Ecaflip.

Si la Main est pleine : Joue la Main et Pioche une Carte aléatoire.

Le coût en PA du sort est remboursé au premier lancer.`,PA:" 1 PA",PO:" 0 Portée",dmg:""},{title:"Redistribution",description:`Joue la Main et Pioche autant de Cartes aléatoires du Poker d'Ecaflip.

Si la Main est vide : Pioche une Carte aléatoire.

Le coût en PA du sort est remboursé.`,PA:" 2 PA",PO:" 0 Portée",dmg:""},{title:"Réflexes",description:`Occasionne des dommages Air et donne 1 PM au lanceur.
Les dommages n'affectent pas le lanceur.

Pioche un Valet de Pique.`,PA:" 2 PA",PO:" 0 - 5 Portée",dmg:"14  - 17"},{title:"Lapement",description:`Occasionne des dommages Terre et retire aléatoirement des PM ou des PA en zone.
N'affecte pas le lanceur.

• Pile : l'aléatoire est supprimé pour retirer des PM.
• Face : l'aléatoire est supprimé pour retirer des PA.

Pioche un Roi de Carreau.`,PA:" 4 PA",PO:" 0 - 5 Portée",dmg:"32 "},{title:"Yams",description:`Occasionne des dommages Eau et augmente les chances de Critique du lanceur.
En coup critique, les effets ne sont plus aléatoires et la durée est plus importante.

Les dommages n'affectent pas le lanceur.

Pioche un Valet de Trèfle.`,PA:" 2 PA",PO:" 0 - 8 Portée",dmg:"3  - 18"},{title:"Langue Râpeuse",description:`Sur les alliés : soigne les cibles et augmente leur Portée en zone.

Sur les ennemis : occasionne des dommages Feu et retire de la Portée en zone.

Pioche un Roi de Cœur.`,PA:" 4 PA",PO:" 0 - 5 Portée",dmg:"30  - 33"},{title:"Topkaj",description:`Occasionne des dommages Feu aux ennemis ou soigne les alliés.

Pioche un Valet de Cœur.`,PA:" 2 PA",PO:" 0 - 6 Portée",dmg:"16 "},{title:"Griffe Joueuse",description:`Occasionne des dommages Eau et réduit les chances de Critique en ligne jusqu'à la case ciblée.
En coup critique, la durée des effets est plus importante.

Pioche un Roi de Trèfle.`,PA:" 4 PA",PO:" 1 - 7 Portée",dmg:"31  - 35"},{title:"Pile ou Face",description:`Occasionne des dommages Terre.

Sur le lanceur : applique aléatoirement l'état Pile ou l'état Face et lui rend 1 PA.
• Pile : donne 1 PA.
• Face : donne 1 PM.
• Relancer le sort dans un état permet de s'appliquer l'autre.

Pioche un Valet de Carreau.`,PA:" 2 PA",PO:" 0 - 7 Portée",dmg:"18 "},{title:"Fanfaronnade",description:`Occasionne des dommages Air en zone.
N'affecte pas le lanceur.

Les dommages du sort sont augmentés pour chaque attirance, poussée ou échange de position effectué par le lanceur.
Les effets sont retirés après utilisation du sort.`,PA:" 4 PA",PO:" 0 - 6 Portée",dmg:"28  - 32"},{title:"Bond du Félin",description:"Augmente les PM de l'allié ciblé ou téléporte le lanceur sur la case ciblée.",PA:" 1 PA",PO:" 0 - 1 Portée",dmg:""},{title:"Entrechat",description:`Téléporte le lanceur sur la case ciblée ou échange de position avec la cible.
Augmente la Fuite du lanceur et de ses alliés en zone.`,PA:" 2 PA",PO:" 0 - 2 Portée",dmg:""},{title:"Jass",description:`Érode la cible et occasionne des dommages Air.
Réduit également les Résistances Poussée selon Cartes de Pique dans la Main (cumulable une fois par Carte).

Les dommages du sort sont augmentés selon les Cartes de Pique dans la Main.

Joue les Cartes de Pique.
Si le lanceur n'en possède aucune dans la Main, Pioche une Dame de Pique.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"26  - 29"},{title:"Infortune",description:`Vole de la vie dans l'élément Eau et applique l'état Infortune sur l'ennemi ciblé :
• À la fin du tour de la cible, occasionne des dommages Eau si elle n'a pas effectué de coup critique.

Les effets ne peuvent pas être désenvoûtés.

Pioche un As de Trèfle.`,PA:" 5 PA",PO:" 1 - 5 Portée",dmg:"41  - 45"},{title:"Perception",description:"Soigne l'allié ciblé pour chaque ennemi dans la zone d'effet et dévoile les invisibles en zone.",PA:" 2 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Prédation",description:"Érode les ennemis et dévoile les invisibles en zone.",PA:" 2 PA",PO:" 0 Portée",dmg:""},{title:"Baraka",description:`Érode la cible et occasionne des dommages Eau.
Réduit également les Résistances Critiques selon Cartes de Trèfle dans la Main (cumulable une fois par Carte).
En coup critique, la durée des effets est plus importante.

Les dommages du sort sont augmentés selon les Cartes de Trèfle dans la Main.

Joue les Cartes de Trèfle.
Si le lanceur n'en possède aucune dans la Main, Pioche une Dame de Trèfle.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"27  - 30"},{title:"Toupet",description:`Rapproche le lanceur vers la cible, vole de la vie dans l'élément Air aux ennemis et repousse la cible.

Pioche un As de Pique.`,PA:" 5 PA",PO:" 1 - 5 Portée",dmg:"44  - 48"},{title:"Château de Cartes",description:`Applique un bouclier sur l'allié ciblé.
Applique un bouclier supplémentaire pour chaque Carte dans la Main selon leur valeur.

Joue la Main.
Si la Main est vide, Pioche une Carte aléatoire du Poker d'Ecaflip.`,PA:" 2 PA",PO:" 0 - 8 Portée",dmg:""},{title:"Bonne Étoile",description:`Soigne la cible et applique l'état Bonne Étoile :
• Soigne la cible si elle effectue un coup critique.

Si la Main est vide : Pioche une Carte aléatoire du Poker d'Ecaflip.
Si la Main est pleine : Joue la Main.`,PA:" 2 PA",PO:" 0 - 5 Portée",dmg:""},{title:"Blakjak",description:`Érode la cible et occasionne des dommages Feu.
L'Érosion et les dommages du sort sont augmentés selon les Cartes de Cœur dans la Main (cumulable une fois par Carte).

Joue les Cartes de Cœur.
Si le lanceur n'en possède aucune dans la Main, Pioche une Dame de Cœur.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"27  - 31"},{title:"Destin d'Ecaflip",description:`Vole de la vie dans l'élément Terre aux ennemis, attire ou repousse aléatoirement la cible et applique l'état Destin d'Ecaflip sur l'ennemi ciblé :
• Occasionne des dommages Terre et retire l'état si la cible effectue un coup critique.
Les effets ne peuvent pas être désenvoûtés.

• Pile : l'aléatoire est supprimé pour attirer la cible.
• Face : l'aléatoire est supprimé pour repousser la cible.

Pioche un As de Carreau.`,PA:" 5 PA",PO:" 1 - 5 Portée",dmg:"42  - 46"},{title:"Roulette",description:`Applique un effet aléatoire sur tout le monde.

Le coût en PA du sort est remboursé.`,PA:" 1 PA",PO:" 0 Portée",dmg:""},{title:"Tarot d'Ecaflip",description:`Pioche une Carte aléatoire du Tarot d'Ecaflip pour appliquer ses effets sur tout le monde.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 1 PA",PO:" 0 Portée",dmg:""},{title:"Belote",description:`Érode l'ennemi ciblé et lui occasionne des dommages Terre.
La zone d'effet s'étend et les dommages du sort sont augmentés selon les Cartes de Carreau dans la Main.
• Valet : anneau d'une case
• Dame : anneau de 2 cases
• Roi : anneau de 3 cases
• As : anneau de 4 cases
N'affecte pas le lanceur.

Joue les Cartes de Carreau.
Si le lanceur n'en possède aucune dans la Main, Pioche une Dame de Carreau.`,PA:" 3 PA",PO:" 0 - 6 Portée",dmg:"27  - 30"},{title:"Péril",description:`Vole de la vie dans l'élément Feu et applique l'état Péril sur l'ennemi ciblé :
• Occasionne des dommages Feu et retire l'état si la cible est soignée.

Pioche un As de Cœur.`,PA:" 5 PA",PO:" 1 - 6 Portée",dmg:"43  - 47"},{title:"Tout ou Rien",description:`Soigne les alliés et occasionne des dommages dans le meilleur élément d'attaque du lanceur aux ennemis en zone.
Les soins sont plus importants selon le nombre de Cartes sur la Table et les dommages sont augmentés selon les Cartes dans la Main.

Défausse la Main et récupère la Table.`,PA:" 3 PA",PO:" 0 - 2 Portée",dmg:"25  - 27"},{title:"Tromperie",description:`Vole de la vie dans l'élément Air, Eau, Feu ou Terre.
Le coût en PA, les dommages et l'élément d'attaque sont modifiés aléatoirement à chaque lancer et lorsque le lanceur effectue un coup critique.

Pioche une Carte selon les conditions de lancer et l'élément du sort.
Si la Main est pleine, Joue la Main et Pioche une Carte.`,PA:" 2 PA",PO:" 1 - 5 Portée",dmg:"19  - 20"},{title:"Pelotage",description:`Occasionne des dommages Feu aux ennemis et attire les cibles vers le centre en zone.

Pioche une Dame de Cœur.`,PA:" 3 PA",PO:" 0 - 4 Portée",dmg:"29  - 32"},{title:"Griffe de Ceangal",description:`Repousse la cible, rapproche le lanceur vers elle et occasionne des dommages Air aux ennemis.

Pioche une Dame de Pique.`,PA:" 3 PA",PO:" 1 - 4 Portée",dmg:"27  - 29"},{title:"Griffe Invocatrice",description:"Invoque un Chaton maîtrisable qui peut voler de la vie dans l'élément Eau, donner des PM et se téléporter.",PA:" 3 PA",PO:" 1 - 4 Portée",dmg:""},{title:"Caresse Invocatrice",description:"Invoque un Chaton maîtrisable qui peut soigner, se téléporter ou échanger de position.",PA:" 3 PA",PO:" 1 - 4 Portée",dmg:""},{title:"Esprit Félin",description:`Téléporte le lanceur symétriquement par rapport à la cible, occasionne des dommages Terre et retire aléatoirement de l'Esquive PM ou PA aux ennemis.

• Pile : l'aléatoire est supprimé pour retirer de l'Esquive PM.
• Face : l'aléatoire est supprimé pour retirer de l'Esquive PA.

Pioche une Dame de Carreau.`,PA:" 3 PA",PO:" 0 - 1 Portée",dmg:"31  - 34"},{title:"Kraps",description:`Occasionne des dommages Eau aux ennemis et repousse les cibles depuis le centre en zone.
Augmente également les Dommages Critiques du lanceur.

En coup critique, les effets ne sont plus aléatoires et la durée est plus importante.

Pioche une Dame de Trèfle.`,PA:" 3 PA",PO:" 0 - 6 Portée",dmg:"28  - 30"},{title:"Odorat",description:`Retire immédiatement des PA non esquivables pour augmenter les PM en zone.
Retire des PM non esquivables pour augmenter les PA au tour suivant.

Le retrait de PA n'affecte pas le lanceur.`,PA:" 3 PA",PO:" 0 - 1 Portée",dmg:""},{title:"Roue de la Fortune",description:`Minimise immédiatement les effets aléatoires de l'ennemi ciblé et augmente ses chances de Critique au tour suivant.

Sur un allié : les effets sont permutés.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 2 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Coussinets",description:`Éloigne le lanceur de la cible, repousse la cible et occasionne des dommages Air aux ennemis.

Pioche un Roi de Pique.`,PA:" 4 PA",PO:" 1 - 6 Portée",dmg:"35  - 38"},{title:"Feulement",description:`Occasionne des dommages Feu aux ennemis et repousse les cibles en zone.

Pioche un Roi de Cœur.`,PA:" 4 PA",PO:" 1 - 5 Portée",dmg:"30  - 34"},{title:"Seconde Chance",description:`Réduit immédiatement les dommages subis par l'allié ciblé mais les augmente au tour suivant.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 2 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Neuf Vies",description:"Soigne immédiatement l'allié ciblé et sur les tours suivants.",PA:" 3 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Félintion",description:`Rapproche le lanceur vers la cible, attire la cible et occasionne des dommages Eau aux ennemis.

Pioche un Roi de Trèfle.`,PA:" 4 PA",PO:" 1 - 6 Portée",dmg:"33  - 36"},{title:"Mésaventure",description:`Téléporte les cibles symétriquement par rapport au centre, occasionne des dommages Terre et retire aléatoirement des PM ou des PA aux ennemis en zone.
N'affecte pas directement le lanceur.

• Pile : l'aléatoire est supprimé pour retirer des PM.
• Face : l'aléatoire est supprimé pour retirer des PA.

Pioche un Roi de Carreau.`,PA:" 4 PA",PO:" 0 - 2 Portée",dmg:"37  - 41"},{title:"Bluff",description:`Occasionne des dommages dans un ou plusieurs éléments selon les Cartes dans la Main et Joue la Main.
Les dommages du sort dans un élément sont augmentés selon les Cartes.

Si la Main est vide : Pioche 4 Cartes aléatoires du Poker d'Ecaflip et applique les effets du sort.`,PA:" 3 PA",PO:" 1 - 7 Portée",dmg:"4 "},{title:"Rekop",description:`Utilise la Main Gagnante pour occasionner des dommages :
• Carrés ou Suite Royale Couleurs : dommages dans tous les éléments.
• Suite Royale d'une Couleur : dommages dans l'élément de la Couleur par Carte.
• Paires, Brelans et Suite Royale : dommages dans le meilleur élément d'attaque du lanceur.

Joue la Main.`,PA:" 4 PA",PO:" 1 - 6 Portée",dmg:"14 "}],Xelor:[{},{title:"Ralentissement",description:`Occasionne des dommages Eau.
Si la cible est un ennemi, lui retire également des PA.
Le retrait de PA est plus important sur les ennemis dans l'état Téléfrag.`,PA:" 2 PA",PO:" 1 - 6 Portée",dmg:"11  - 13"},{title:"Souvenir",description:`Occasionne des dommages Terre aux ennemis et téléporte la cible à sa position précédente.

Peut générer un Téléfrag.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"28  - 32"},{title:"Aiguille",description:`Occasionne des dommages Feu.
Si la cible est un ennemi, lui applique également l'état Aiguille :
• Occasionne des dommages Feu et retire l'état Aiguille en sortie d'état Téléfrag.`,PA:" 3 PA",PO:" 1 - 8 Portée",dmg:"19  - 23"},{title:"Rouage",description:"Donne 1 PA au lanceur au tour suivant et occasionne des dommages Eau.",PA:" 3 PA",PO:" 1 - 7 Portée",dmg:"17  - 20"},{title:"Téléportation",description:`Téléporte le lanceur symétriquement par rapport à la cible.

Fixe le temps de relance du sort à 0 lorsqu'un Téléfrag est généré ou consommé par le lanceur.

Peut générer un Téléfrag.État interdit : Pesanteur`,PA:" 2 PA",PO:" 1 - 5 Portée",dmg:""},{title:"Retour Spontané",description:`Téléporte la cible à sa position précédente.

Peut générer un Téléfrag.`,PA:" 1 PA",PO:" 0 - 4 Portée",dmg:""},{title:"Flétrissement",description:`Occasionne des dommages Air.
Les dommages sont plus importants sur les cibles dans l'état Téléfrag.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"25  - 28"},{title:"Dessèchement",description:`Occasionne des dommages Air aux ennemis.
Rebondit sur l'ennemi le plus proche dans un cercle de 4 cases.
Peut également rebondir sur le Complice, sur le Cadran de Xélor et sur les alliés dans l'état Téléfrag sans leur occasionner de dommages.

Les dommages du sort sont augmentés pour chaque cible dans l'état Téléfrag touchée.

Consomme les états Téléfrag des cibles.`,PA:" 4 PA",PO:" 1 - 6 Portée",dmg:"34  - 38"},{title:"Rembobinage",description:`Téléporte l'allié ciblé à sa position de début de tour à la fin de son tour.

Peut générer un Téléfrag.`,PA:" 2 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Renvoi",description:`Téléporte l'ennemi ciblé à sa position de début de tour.

Peut générer un Téléfrag.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:""},{title:"Frappe de Xélor",description:`Téléporte la cible symétriquement par rapport au lanceur et occasionne des dommages Terre aux ennemis.

Peut générer un Téléfrag.`,PA:" 3 PA",PO:" 1 - 3 Portée",dmg:"23  - 27"},{title:"Engrenage",description:`Téléporte les cibles symétriquement par rapport au centre et occasionne des dommages Terre aux ennemis en zone.
Les dommages ne diminuent pas avec la distance.
N'affecte pas le lanceur.

Peut générer un Téléfrag.`,PA:" 4 PA",PO:" 1 - 6 Portée",dmg:"27  - 31"},{title:"Complice",description:`Invoque un Complice qui sert d'obstacle.

Si le Complice du lanceur est encore présent et que celui-ci est ré-invoqué, l'ancien est détruit pour laisser place au nouveau.`,PA:" 2 PA",PO:" 1 - 5 Portée",dmg:""},{title:"Cadran de Xélor",description:`Invoque un Cadran qui retire des PA aux ennemis dans l'état Téléfrag et augmente les PA des alliés dans l'état Téléfrag en zone.
Lorsqu'il est ré-invoqué, il ré-applique le bonus de PA aux alliés qui l'avaient déjà.

Il ne peut y avoir qu'un seul Cadran de Xélor par équipe. Si le Cadran est encore présent et que celui-ci est ré-invoqué, l'ancien est détruit pour laisser place au nouveau.`,PA:" 3 PA",PO:" 1 - 5 Portée",dmg:""},{title:"Gelure",description:`Occasionne des dommages Air aux ennemis et téléporte la cible à sa position précédente.

Peut générer un Téléfrag.`,PA:" 2 PA",PO:" 1 - 6 Portée",dmg:"11  - 13"},{title:"Perturbation",description:`Téléporte la cible au centre symétriquement par rapport au lanceur et celles aux extrémités par rapport au centre et occasionne des dommages Feu aux ennemis en zone.
Les dommages ne diminuent pas avec la distance.

Peut générer un Téléfrag.`,PA:" 2 PA",PO:" 1 - 3 Portée",dmg:"17  - 19"},{title:"Sablier de Xélor",description:`Occasionne des dommages Feu et retire des PA aux ennemis.

Sur une cible dans l'état Téléfrag : occasionne des dommages Feu et retire des PA aux ennemis dans un cercle de 2 cases.

Consomme l'état Téléfrag de la cible.`,PA:" 3 PA",PO:" 1 - 8 Portée",dmg:"23  - 26"},{title:"Distorsion Temporelle",description:`Occasionne des dommages Air aux ennemis et téléporte les cibles à leur position précédente en zone.
N'affecte pas le lanceur.

Peut générer un Téléfrag.`,PA:" 4 PA",PO:" 0 Portée",dmg:"34  - 38"},{title:"Vol du Temps",description:`Occasionne des dommages Eau aux ennemis en zone.

Sur des ennemis dans l'état Téléfrag : vole des PA et occasionne des dommages Eau en zone.

Consomme les états Téléfrag des cibles.`,PA:" 4 PA",PO:" 0 - 5 Portée",dmg:"30  - 34"},{title:"Pétrification",description:`Occasionne des dommages Eau et retire des PA.

Sur une cible dans l'état Téléfrag : réduit le coût en PA du sort, occasionne des dommages Eau et retire des PA.`,PA:" 5 PA",PO:" 1 - 7 Portée",dmg:"34  - 38"},{title:"Flou",description:`Retire immédiatement des PA non esquivables en zone pour les augmenter au tour suivant.
Le retrait de PA n'affecte pas le lanceur.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 2 PA",PO:" 0 - 3 Portée",dmg:""},{title:"Conservation",description:`Sur les ennemis en zone : réduit immédiatement les dommages finaux occasionnés par les cibles et réduit les dommages qu'elles subissent au tour suivant.

Sur les alliés en zone : réduit immédiatement les dommages subis par les cibles et réduit les dommages finaux occasionnés au tour suivant.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 3 PA",PO:" 0 - 4 Portée",dmg:""},{title:"Poussière Temporelle",description:`Occasionne des dommages Feu aux ennemis.

Sur des cibles dans l'état Téléfrag en zone : téléporte les cibles symétriquement par rapport au centre et occasionne des dommages Feu aux ennemis.

Peut générer un Téléfrag.`,PA:" 4 PA",PO:" 0 - 6 Portée",dmg:"32  - 35"},{title:"Suspension Temporelle",description:`Occasionne des dommages Feu aux ennemis.

Sur une cible dans l'état Téléfrag : réduit la durée des effets sur la cible, lui applique l'état Suspension Temporelle et occasionne des dommages Feu aux ennemis.

Le désenvoûtement ne peut pas être appliqué si la cible est déjà dans l'état Suspension Temporelle.

Consomme l'état Téléfrag.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"25  - 29"},{title:"Raulebaque",description:`Téléporte tout le monde à sa position précédente.

Peut générer un Téléfrag.`,PA:" 2 PA",PO:" 0 Portée",dmg:""},{title:"Instabilité Temporelle",description:`Pose un glyphe de début de tour qui téléporte les cibles à leur position précédente.
Rend les entités présentes dans le glyphe Intaclables.

Déclenche le glyphe si le lanceur génère un Téléfrag.

Peut générer un Téléfrag.`,PA:" 3 PA",PO:" 0-7 Portée",dmg:""},{title:"Démotivation",description:`Occasionne des dommages Terre aux ennemis.

Sur une cible dans l'état Téléfrag : réduit la durée des effets sur la cible, lui applique l'état Démotivation et occasionne des dommages Terre aux ennemis.

Le désenvoûtement ne peut pas être appliqué si la cible est déjà dans l'état Démotivation.

Consomme l'état Téléfrag.`,PA:" 3 PA",PO:" 1 - 5 Portée",dmg:"23  - 26"},{title:"Pendule",description:`Téléporte le lanceur symétriquement par rapport à la cible, occasionne des dommages Air aux ennemis dans un cercle de 2 cases autour du lanceur et le téléporte à sa position précédente.

Peut générer un Téléfrag.État interdit : Pesanteur`,PA:" 4 PA",PO:" 1 - 4 Portée",dmg:"38  - 42"},{title:"Paradoxe Temporel",description:`Sur le Complice ou le Cadran de Xélor du lanceur :
• Applique l'état Indeplaçable.
• Téléporte les entités symétriquement par rapport à eux dans un cercle de 4 cases autour d'eux.
• Fixe le temps de relance des sorts Complice et Cadran de Xélor du lanceur à 1 tour.
• Au début du tour du Complice ou du Cadran, téléporte de nouveau ces entités.

La téléportation n'affecte pas une Synchro et le lanceur.

Les effets ne peuvent pas être désenvoûtés.

Peut générer un Téléfrag.`,PA:" 3 PA",PO:" 0 Portée",dmg:""},{title:"Faille Temporelle",description:`Échange de position avec la Complice ou le Cadran de Xélor du lanceur.
À la fin du tour du lanceur, téléporte le Complice ou le Cadran à leur position précédente.

Empêche l'application de l'état Téléfrag sur la Synchro pour le tour en cours.

Les effets ne peuvent pas être désenvoûtés.

Peut générer un Téléfrag.État interdit : Pesanteur`,PA:" 3 PA",PO:" 0 Portée",dmg:""},{title:"Synchro",description:`Invoque une Synchro statique qui meurt en occasionnant des dommages Air aux ennemis dans un cercle de 3 cases lorsqu'elle entre dans l'état Téléfrag. Les dommages ne diminuent pas avec la distance.

Elle est soignée et ses dommages finaux occasionnés sont augmentés pour chaque Téléfrag qui est généré par le lanceur.
Cet effet ne peut être déclenché qu'une fois par tour, et qu'une fois par sort.

La Synchro est immunisée contre les sorts Momification et Embaumement, et ne peut pas s'activer avec le sort Rembobinage.

Il ne peut y avoir qu'une seule Synchro par équipe. Si la Synchro est encore présente et que celle-ci est ré-invoquée, l'ancienne est détruite pour laisser place à la nouvelle.`,PA:" 2 PA",PO:" 1 - 4 Portée",dmg:""},{title:"Vingt-cinquième Heure",description:`Fixe à 0 le temps de relance des sorts du lanceur suivants : 
• Téléportation
• Rembobinage ou Renvoi
• Cadran de Xélor
• Conservation
• Raulebaque ou Instabilité Temporelle
• Paradoxe Temporel ou Faille Temporelle
• Contre ou Bouclier Temporel
• Prémonition
• Momification

Augmente de 1 le nombre de lancers par tour des sorts du lanceur suivants : 
• Retour Spontané
• Complice
• Fuite
• Embaumement
• Désynchronisation`,PA:" 2 PA",PO:" 0 Portée",dmg:""},{title:"Contre",description:"Sur les alliés en zone : renvoie une partie des dommages subis en mêlée à l'attaquant.",PA:" 2 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Bouclier Temporel",description:`Applique l'état Bouclier Temporel sur la cible :
• Téléporte la cible et son attaquant à leur position précédente si elle subit des dommages.

Les effets ne peuvent pas être désenvoûtés.

Peut générer un Téléfrag.`,PA:" 3 PA",PO:" 0 - 3 Portée",dmg:""},{title:"Fuite",description:`Augmente la Fuite de l'allié ciblé.
Téléporte la cible à sa position précédente au tour suivant.

Les effets ne peuvent pas être désenvoûtés.

Peut générer un Téléfrag.`,PA:" 1 PA",PO:" 0 - 4 Portée",dmg:""},{title:"Prémonition",description:`Pose une rune qui téléporte le lanceur ou échange sa position avec l'entité sur la case ciblée au début de son prochain tour.

Peut générer un Téléfrag.`,PA:" 2 PA",PO:" 0 - 4 Portée",dmg:""},{title:"Horloge",description:`Vole de la vie dans l'élément Eau.

Sur un ennemi dans l'état Téléfrag : vole de la vie dans l'élément Eau et retire des PA (cumulable 1 fois).

Donne 1 PA au lanceur au tour suivant.

Consomme l'état Téléfrag.`,PA:" 5 PA",PO:" 1 - 6 Portée",dmg:"36  - 39"},{title:"Clepsydre",description:`Occasionne des dommages Eau.

Sur une cible dans l'état Téléfrag : donne 2 PA au lanceur au tour suivant et occasionne des dommages Eau.

Consomme l'état Téléfrag.`,PA:" 4 PA",PO:" 1 - 4 Portée",dmg:"32  - 36"},{title:"Rayon Obscur",description:`Occasionne des dommages Terre aux ennemis en zone.
Les dommages sont plus importants sur les cibles dans l'état Téléfrag.

Consomme les états Téléfrag des cibles.`,PA:" 5 PA",PO:" 1 - 6 Portée",dmg:"40  - 44"},{title:"Rayon Ténébreux",description:`Occasionne des dommages Terre aux ennemis.

Sur une cible dans l'état Téléfrag : occasionne des dommages Terre aux ennemis dans un cercle de 2 cases.

Consomme l'état Téléfrag de la cible.`,PA:" 2 PA",PO:" 1 - 5 Portée",dmg:"20  - 22"},{title:"Momification",description:"Augmente les PM et l'Esquive PA du lanceur et applique l'état Téléfrag sur tout le monde.",PA:" 2 PA",PO:" 0 Portée",dmg:""},{title:"Embaumement",description:`Applique l'état Téléfrag sur la cible.

Sur un allié : augmente l'Esquive PA de la cible et lui applique l'état Téléfrag.

Retire 1 PA non esquivable au lanceur au tour suivant.`,PA:" 1 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Désynchronisation",description:`Pose un piège mono-cellule qui téléporte les entités symétriquement par rapport au piège dans un cercle de 2 cases.

Peut générer un Téléfrag.`,PA:" 2 PA",PO:" 1 - 6 Portée",dmg:""},{title:"Glas",description:`Occasionne des dommages Air, Eau, Terre et Feu aux ennemis en zone.

Les dommages sont augmentés pour chaque Téléfrag consommé depuis son dernier lancer.
Les effets sont retirés après utilisation du sort.

Nécessite de consommer au moins un Téléfrag pour être utilisé.`,PA:" 3 PA",PO:" 0 - 3 Portée",dmg:"9 "}],Sram:[{},{title:"Truanderie",description:"Occasionne des dommages Terre et augmente la Puissance des Pièges du lanceur.",PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"26  - 29"},{title:"Chausse-trappe",description:`Occasionne des dommages Terre.
Les dommages du sort sont augmentés pour chaque piège du lanceur déclenché.
Les effets sont retirés après utilisation du sort.`,PA:" 4 PA",PO:" 1 - 4 Portée",dmg:"28  - 32"},{title:"Sournoiserie",description:"Occasionne des dommages Feu aux ennemis et repousse la cible.",PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"26  - 29"},{title:"Coupe-gorge",description:`Occasionne des dommages Feu.
Augmente la Puissance du lanceur et de ses alliés dans un cercle de 2 cases autour de lui.`,PA:" 4 PA",PO:" 1 - 7 Portée",dmg:"34  - 38"},{title:"Invisibilité",description:"Rend l'allié ciblé invisible et augmente ses PM.",PA:" 2 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Brume",description:"Pose un glyphe-aura qui rend les alliés invisibles.",PA:" 3 PA",PO:" 0 - 3 Portée",dmg:""},{title:"Arsenic",description:"Applique un poison Air de début de tour sur la cible.",PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"16  - 18 (2 tours) "},{title:"Toxines",description:`Applique un poison Air de fin de tour sur l'ennemi ciblé.

Tant que le poison est actif, si l'ennemi ciblé subit des dommages de pièges, les dommages du sort sont augmentés (cumulable 5 fois) et le poison est réappliqué.
Cet effet peut être déclenché une seule fois par tour.`,PA:" 3 PA",PO:" 1 - 7 Portée",dmg:"7  - 9 (2 tours) "},{title:"Cruauté",description:"Occasionne des dommages Eau et donne 1 PM au lanceur.",PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"22  - 25"},{title:"Poisse",description:`Vole de la vie dans l'élément Eau et minimise les effets aléatoires de l'ennemi ciblé.
Soigne les alliés (hors lanceur) à hauteur de 50% des dommages occasionnés à l'ennemi ciblé dans un cercle de 2 cases autour de lui.

La minimisation des effets ne fonctionne qu'un tour sur deux sur la même cible.`,PA:" 4 PA",PO:" 1 - 4 Portée",dmg:"34  - 38"},{title:"Double",description:`Invoque un double contrôlable qui possède les mêmes caractéristiques que l'invocateur.
Il n'attaque pas et meurt à la fin de son deuxième tour en échangeant de position avec son invocateur.`,PA:" 3 PA",PO:" 1 - 3 Portée",dmg:""},{title:"Comploteur",description:`Invoque un double contrôlable qui possède les mêmes caractéristiques que l'invocateur.
Il n'attaque pas et meurt à la fin de son troisième tour en occasionnant des dommages dans le meilleur élément d'attaque du lanceur aux entités à son contact.
Les dommages à la mort du Comploteur augmentent pour chaque piège déclenché du lanceur.`,PA:" 3 PA",PO:" 1 - 3 Portée",dmg:"30 "},{title:"Piège Sournois",description:"Pose un piège qui occasionne des dommages Feu aux ennemis et attire les entités vers son centre en zone.",PA:" 3 PA",PO:" 1 - 8 Portée",dmg:"26  - 28"},{title:"Guet-apens",description:`Attire la cible vers le double du lanceur et vole de la vie dans l'élément Eau.
Soigne les alliés (hors lanceur) à hauteur de 50% des dommages occasionnés à l'ennemi ciblé dans un cercle de 2 cases autour de lui.`,PA:" 3 PA",PO:" 0 - 6 Portée",dmg:"22  - 25"},{title:"Piège Fangeux",description:`Pose un piège qui occasionne des dommages Eau.
Soigne les alliés à hauteur de 50% des dommages occasionnés à l'entité qui le déclenche dans un cercle de 2 cases autour d'elle.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"33  - 37"},{title:"Épidémie",description:`Applique un poison Air de fin de tour sur l'ennemi ciblé et lui applique l'état Épidémie :
• À la fin du tour de la cible, propage le poison et l'état sur les ennemis dans un cercle de 2 cases autour d'elle.
Le double du lanceur peut servir de cible pour propager le poison.

N'affecte pas les invocations statiques.
Les effets ne peuvent pas être désenvoûtés.`,PA:" 4 PA",PO:" 1 - 5 Portée",dmg:"36  - 40 (1 tour) "},{title:"Piège Funeste",description:`Pose un piège qui occasionne des dommages Terre.
Les dommages du sort sont augmentés pour chaque ennemi dans un cercle de 2 cases autour du piège.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"28  - 32"},{title:"Effraction",description:"Occasionne des dommages Feu et réduit les Résistances Poussée.",PA:" 2 PA",PO:" 1 - 6 Portée",dmg:"15  - 17"},{title:"Piège Répulsif",description:"Pose un piège qui repousse les entités et occasionne des dommages Air aux ennemis en zone.",PA:" 3 PA",PO:" 1 - 7 Portée",dmg:"19  - 21"},{title:"Piège Effroyable",description:"Pose un piège mono-cellule qui occasionne des dommages Terre aux ennemis et repousse les entités dans une croix de 3 cases.",PA:" 2 PA",PO:" 1 - 7 Portée",dmg:"20  - 22"},{title:"Piège d'Immobilisation",description:"Pose un piège qui retire des PM aux ennemis en zone.",PA:" 3 PA",PO:" 1 - 5 Portée",dmg:""},{title:"Fosse Commune",description:"Pose un piège mono-cellule qui applique l'état Pesanteur dans un cercle de 2 cases.",PA:" 3 PA",PO:" 1 - 6 Portée",dmg:""},{title:"Extorsion",description:"Vole de la Force et occasionne des dommages Terre.",PA:" 3 PA",PO:" 1 - 3 Portée",dmg:"31  - 34"},{title:"Perquisition",description:"Repousse la cible et occasionne des dommages Feu aux ennemis.",PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"24  - 27"},{title:"Arnaque",description:"Vole de l'Agilité et occasionne des dommages Air.",PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"29  - 32"},{title:"Pillage",description:`Vole de la vie dans l'élément Eau.
Soigne les alliés (hors lanceur) à hauteur de 50% des dommages occasionnés à l'ennemi ciblé dans un cercle de 2 cases autour de lui.`,PA:" 3 PA",PO:" 1 - 2 Portée",dmg:"29  - 34"},{title:"Larcin",description:`Vole de la Chance et occasionne des dommages Eau en zone.
N'affecte pas le lanceur.`,PA:" 4 PA",PO:" 0 - 4 Portée",dmg:"38  - 42"},{title:"Attaque Mortelle",description:`Occasionne des dommages Terre.
Les dommages sont plus importants sur les cibles ayant moins de 25% de leurs points de vie.`,PA:" 4 PA",PO:" 1 - 2 Portée",dmg:"43  - 48"},{title:"Fourberie",description:`Vole de l'Intelligence et occasionne des dommages Feu en zone.
N'affecte pas le lanceur.`,PA:" 4 PA",PO:" 0 - 3 Portée",dmg:"36  - 40"},{title:"Injection Toxique",description:`Applique un poison Air de début de tour sur la cible. 
Le temps de relance du sort est réduit pour chaque piège déclenché du lanceur.`,PA:" 5 PA",PO:" 1 - 5 Portée",dmg:"28  - 32 (3 tours) "},{title:"Peur",description:"Pousse la cible jusqu'à la case ciblée.",PA:" 2 PA",PO:" 2 - 7 Portée",dmg:""},{title:"Méprise",description:`Échange les positions de la cible et du double du lanceur.

Dissipe l'invisibilité du lanceur.`,PA:" 3 PA",PO:" 0 - 4 Portée",dmg:""},{title:"Piège de Dérive",description:"Pose un piège qui occasionne des dommages Feu aux ennemis et repousse les entités depuis le centre en zone.",PA:" 2 PA",PO:" 1 - 6 Portée",dmg:"17  - 19"},{title:"Piège Insidieux",description:"Pose un piège qui applique un poison Air de fin de tour sur les ennemis, leur occasionne des dommages Air et attire les entités vers le centre en zone.",PA:" 2 PA",PO:" 1 - 6 Portée",dmg:"8  - 9"},{title:"Concentration de Chakra",description:`Applique l'état Concentration de Chakra sur l'ennemi ciblé :
• Vole de la vie dans le meilleur élément d'attaque du lanceur à la cible si elle subit des dommages de pièges.

Dissipe l'invisibilité du lanceur.`,PA:" 2 PA",PO:" 1 - 6 Portée",dmg:"12  (1 tour) "},{title:"Piège à Fragmentation",description:`Pose un piège mono-cellule qui occasionne des dommages Feu dans un cercle de 3 cases.
Les dommages sont plus importants selon la distance avec le piège.
N'affecte pas l'allié qui déclenche le piège.`,PA:" 4 PA",PO:" 1 - 6 Portée",dmg:"13  - 17"},{title:"Piège Scélérat",description:"Pose un piège mono-cellule qui attire les entités vers son centre et occasionne des dommages Eau aux ennemis dans une croix de 3 cases.",PA:" 2 PA",PO:" 1 - 7 Portée",dmg:"17  - 19"},{title:"Manigance",description:`Augmente la Fuite et les Dommages de l'allié ciblé.

Sur un ennemi : retire de la Fuite et des Dommages.`,PA:" 2 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Piège Mortel",description:`Occasionne des dommages Terre.
Les dommages sont plus importants sur les entités ayant moins de 25% de leurs points de vie.`,PA:" 3 PA",PO:" 1 - 8 Portée",dmg:"39  - 43"},{title:"Calamité",description:"Pose un piège mono-cellule qui occasionne des dommages Eau et retire de la Fuite aux ennemis dans un carré d'une case.",PA:" 4 PA",PO:" 1 - 6 Portée",dmg:"40  - 44"},{title:"Fourvoiement",description:`Érode les cibles et occasionne des dommages Air en zone.
N'affecte pas le lanceur.`,PA:" 4 PA",PO:" 1 - 5 Portée",dmg:"32  - 36"},{title:"Perfidie",description:`Occasionne des dommages Terre.
Le coût en PA du sort est réduit pour chaque piège déclenché du lanceur.
Les effets sont retirés après utilisation du sort.`,PA:" 6 PA",PO:" 1 Portée",dmg:"56  - 60"},{title:"Dérobade",description:`Rend l'allié ciblé Intaclable et lui applique l'état Dérobade :
• Éloigne la cible de son attaquant, la rend invisible et augmente ses PM si elle subit des dommages en mêlée.

Le recul ne fait pas de dommages et l'allié ciblé ne peut pas déclencher les effets du sort par lui-même.`,PA:" 2 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Marque Mortuaire",description:`Érode la cible.
L'Érosion est plus importante selon le nombre de pièges déclenchés du lanceur.

Dissipe l'invisibilité du lanceur.`,PA:" 2 PA",PO:" 1 - 6 Portée",dmg:""}],Enutrof:[{},{title:"Sac Animé",description:`Invoque un Sac Animé maîtrisable qui subit les dommages à la place de ses alliés situés dans sa zone d'invocation.
Le Sac Animé disparaît 3 tours après son invocation.

Quand il est attaqué par un allié, ce dernier est soigné.`,PA:" 2 PA",PO:" 1 - 5 Portée",dmg:""},{title:"Musette Animée",description:`Invoque une Musette Animée maîtrisable qui soigne et partage les dommages entre tous les alliés situés dans sa zone d'invocation.
La Musette Animée disparaît 2 tours après son invocation.

Quand elle est attaquée par un allié, ce dernier est soigné.`,PA:" 3 PA",PO:" 1 - 4 Portée",dmg:""},{title:"Lancer de Pièces",description:"Occasionne des dommages Eau.",PA:" 2 PA",PO:" 0 - 12 Portée",dmg:"13  - 15"},{title:"Monnaie Sonnante",description:`Occasionne des dommages Air et applique l'état Monnaie Sonnante sur l'ennemi ciblé :
• Occasionne des dommages Air si la cible subit une tentative de retrait de PA.

Les dommages peuvent être déclenchés 5 fois tant que l'état est actif.
L'état est retiré dès la limite atteinte.`,PA:" 4 PA",PO:" 1 - 4 Portée",dmg:"29  - 33"},{title:"Force de l'Âge",description:"Occasionne des dommages Terre et donne 1 PM au lanceur.",PA:" 3 PA",PO:" 1 - 5 Portée",dmg:"28  - 32"},{title:"Orpaillage",description:`Occasionne des dommages Eau et applique l'état Orpaillage sur l'ennemi ciblé :
• Occasionne des dommages Eau si la cible subit une tentative de retrait de PM.

Les dommages peuvent être déclenchés 5 fois tant que l'état est actif.
L'état est retiré dès la limite atteinte.`,PA:" 4 PA",PO:" 1 - 5 Portée",dmg:"28  - 32"},{title:"Roulage de Pelle",description:"Occasionne des dommages Feu.",PA:" 3 PA",PO:" 1 - 8 Portée",dmg:"19  - 23"},{title:"Éboulement",description:`Occasionne des dommages Terre et applique l'état Éboulement sur l'ennemi ciblé :
• Occasionne des dommages Terre si la cible subit un retrait de Portée.

Les dommages peuvent être déclenchés 5 fois tant que l'état est actif.
L'état est retiré dès la limite atteinte.`,PA:" 4 PA",PO:" 1 - 6 Portée",dmg:"31  - 35"},{title:"Opportunité",description:"Occasionne des dommages Air et augmente la Puissance du lanceur.",PA:" 2 PA",PO:" 1 - 8 Portée",dmg:"14  - 16"},{title:"Coup de Grisou",description:`Occasionne des dommages Feu aux ennemis en zone et applique l'état Coup de Grisou sur la cible :
• Occasionne des dommages Feu aux ennemis dans un cercle de 2 cases autour de la cible si elle est soignée.

Les dommages peuvent être déclenchés 5 fois tant que l'état est actif.
L'état est retiré dès la limite atteinte.`,PA:" 4 PA",PO:" 1 - 8 Portée",dmg:"30  - 34"},{title:"Ruée vers l'Or",description:`Augmente les PM de l'allié ciblé et lui applique l'état Ruée vers l'Or :
• À la fin du tour de la cible, augmente sa Puissance au tour suivant si elle est au contact d'un ennemi.
• La soigne si elle est au contact d'une invocation Enutrof.`,PA:" 2 PA",PO:" 0 - 12 Portée",dmg:""},{title:"Déambulation",description:"Réduit la durée des effets de la cible et échange sa position avec le Sac Animé ou la Musette Animée du lanceur.",PA:" 3 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Boîte de Pandore",description:"Soigne tous les alliés mais augmente les PM de tous les ennemis.",PA:" 2 PA",PO:" 0 Portée",dmg:"8 %"},{title:"Boîte à Outils",description:`Augmente les PA et les PM de l'allié ciblé mais le rend Pacifiste.
Si l'allié n'est pas une invocation, rend également toutes ses invocations Pacifistes.`,PA:" 2 PA",PO:" 1 - 6 Portée",dmg:""},{title:"Remblai",description:`Occasionne des dommages Terre et retire de la Portée en zone.
Les dommages sont plus importants sur les invocations.

N'affecte pas le lanceur.`,PA:" 3 PA",PO:" 1 - 8 Portée",dmg:"20  - 22"},{title:"Feu de Mine",description:`Occasionne des dommages Feu.
Les entités qui attaquent la cible sont soignées d'une partie des dommages occasionnés.`,PA:" 4 PA",PO:" 1 - 6 Portée",dmg:"32  - 36"},{title:"Clef du Trésor",description:"Retire de la Portée aux ennemis ou augmente celle de l'allié ciblé.",PA:" 2 PA",PO:" 0 - 9 Portée",dmg:""},{title:"Clef de Bras",description:"Soigne l'allié ciblé et retire des PM non esquivables.",PA:" 2 PA",PO:" 1 - 6 Portée",dmg:"12 %"},{title:"Abattement",description:"Occasionne des dommages Air et retire des PA.",PA:" 3 PA",PO:" 1 - 7 Portée",dmg:"23  - 25"},{title:"Lancer de Pelle",description:"Occasionne des dommages Terre et retire de la Portée.",PA:" 4 PA",PO:" 1 - 8 Portée",dmg:"34  - 37"},{title:"Pelle Animée",description:`Invoque une Pelle Animée maîtrisable qui pousse ses cibles.

Quand elle est attaquée par un allié, ce dernier est soigné.`,PA:" 2 PA",PO:" 1 - 6 Portée",dmg:""},{title:"Bêche Animée",description:`Invoque une Bêche Animée maîtrisable qui vole de la vie dans l'élément Air.
La Bêche augmente sa Fuite ainsi que celle de l'Enutrof et de ses invocations lorsqu'elle occasionne des dommages.

Quand elle est attaquée par un allié, ce dernier est soigné.`,PA:" 3 PA",PO:" 1 - 7 Portée",dmg:""},{title:"Avarice",description:`Retire des PM non esquivables pour augmenter les PA des cibles en zone autour du lanceur.
Retire également de la Puissance à toutes les entités hors de la zone d'effet pour augmenter la Puissance du lanceur pour chaque entité touchée (cumulable 10 fois).`,PA:" 3 PA",PO:" 0 Portée",dmg:""},{title:"Décadence",description:`Retire des PA aux ennemis.

Sur un allié : augmente ses dommages finaux occasionnés immédiatement mais les réduit au tour suivant.`,PA:" 2 PA",PO:" 0 - 10 Portée",dmg:""},{title:"Pelle Aurifère",description:"Occasionne des dommages Eau et retire des PM.",PA:" 4 PA",PO:" 1 - 7 Portée",dmg:"33  - 37"},{title:"Tourbière",description:`Occasionne des dommages Terre en zone.
Les dommages du sort sont augmentés pour chaque PM utilisé pour le tour en cours.`,PA:" 4 PA",PO:" 1 - 8 Portée",dmg:"22  - 25"},{title:"Maladresse",description:"Retire des PM.",PA:" 1 PA",PO:" 1 - 12 Portée",dmg:""},{title:"Âge d'Or",description:`Rend Intaclable l'allié ciblé.
Augmente sa Puissance au tour suivant.`,PA:" 2 PA",PO:" 0 - 6 Portée",dmg:""},{title:"Pelle Fantomatique",description:"Réduit la durée des effets de la cible et occasionne des dommages Feu aux ennemis.",PA:" 3 PA",PO:" 1 - 8 Portée",dmg:"26  - 28"},{title:"Dernier Recours",description:"Applique l'état Pesanteur sur les cibles et occasionne des dommages Air aux ennemis en zone.",PA:" 2 PA",PO:" 1 - 6 Portée",dmg:"30  - 34"},{title:"Banqueroute",description:`Occasionne des dommages Air et retire de l'Esquive PA.
Les dommages sont plus importants sur les invocations.`,PA:" 4 PA",PO:" 1 - 8 Portée",dmg:"36  - 40"},{title:"Obsolescence",description:`Occasionne des dommages Eau et retire de l'Esquive PM.
Les dommages sont plus importants sur les invocations.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"26  - 30"},{title:"Souterrain",description:"Échange de position avec la cible et occasionne des dommages Terre aux ennemis.",PA:" 3 PA",PO:" 1 - 3 Portée",dmg:"26  - 29"},{title:"Bêche des Anciens",description:"Occasionne des dommages Air et retire des PA aux ennemis et repousse les cibles depuis le centre en zone.",PA:" 4 PA",PO:" 1 - 7 Portée",dmg:"32  - 36"},{title:"Pelle des Anciens",description:"Occasionne des dommages Eau et retire des PM aux ennemis et repousse la cible.",PA:" 4 PA",PO:" 1 - 7 Portée",dmg:"40  - 44"},{title:"Gisement",description:"Occasionne des dommages Feu aux ennemis et soigne les alliés à la fin de leur tour en zone.",PA:" 3 PA",PO:" 0 - 8 Portée",dmg:"29  - 32"},{title:"Corruption",description:`Sur un allié : soigne la cible mais la rend Pacifiste.
Sur un ennemi : rend la cible Pacifiste mais Invulnérable.`,PA:" 5 PA",PO:" 5 - 8 Portée",dmg:"40 %"},{title:"Tamisage",description:`Occasionne des dommages Eau et retire des PM en zone.
N'affecte pas le lanceur.`,PA:" 3 PA",PO:" 1 - 5 Portée",dmg:"25  - 29"},{title:"Retraite Anticipée",description:`Immobilise les cibles et applique l'état Pesanteur sur tout le monde. N'affecte pas le lanceur.
Immobilise le lanceur au tour suivant.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 4 PA",PO:" 0 Portée",dmg:""},{title:"Péremption",description:`Occasionne des dommages Feu.
Occasionne des dommages Feu supplémentaires aux invocations.`,PA:" 4 PA",PO:" 1 - 5 Portée",dmg:"41  - 44"},{title:"Retraite Anticipée",description:`Immobilise les cibles et applique l'état Pesanteur sur tout le monde. N'affecte pas le lanceur.
Immobilise le lanceur au tour suivant.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 4 PA",PO:" 0 Portée",dmg:""},{title:"Pelle de Fortune",description:`Invoque une Pelle de Fortune statique.
Lorsqu'elle est invoquée, puis à chaque début de tour, la Pelle de Fortune augmente la Puissance, la Fuite, le Retrait PA et le Retrait PM du lanceur.
Les effets ne peuvent pas être désenvoûtés.

Si un ennemi la détruit, le lanceur lui occasionne des dommages dans son meilleur élément d'attaque.
La pelle est détruite 4 tours après son invocation.

Quand elle est attaquée par un allié, ce dernier est soigné.`,PA:" 2 PA",PO:" 2 - 7 Portée",dmg:"18  - 20"},{title:"Coffre Animé",description:`Invoque un Coffre Animé maîtrisable qui tacle les ennemis.
Il occasionne des dommages Eau aux ennemis à son contact et dévoile les invisibles. Ses dommages sont plus importants selon ses points de vie manquants.

Quand il est attaqué par un allié, ce dernier est soigné.`,PA:" 4 PA",PO:" 1 - 2 Portée",dmg:""},{title:"Malle Animée",description:`Invoque une Malle Animée maîtrisable qui soigne les alliés autour d'elle.

Quand elle est attaquée par un allié, ce dernier est soigné.`,PA:" 4 PA",PO:" 1 - 3 Portée",dmg:""}],Osamodas:[{},{title:"Dragonique",description:`Soigne les alliés et occasionne des dommages Feu aux ennemis en zone.

Confère une Dragocharge si une entité est touchée.`,PA:" 3 PA",PO:" 1 - 7 Portée",dmg:"21  - 23"},{title:"Reptincelles",description:`Occasionne des dommages Feu aux ennemis ou soigne les alliés.

Confère une Dragocharge (nécessite une cible).`,PA:" 3 PA",PO:" 1 - 5 Portée",dmg:"26  - 29"},{title:"Geyser",description:`Occasionne des dommages Eau aux ennemis et augmente les dommages d'invocations subis par l'ennemi ciblé.

Confère une Crapocharge (nécessite une cible).`,PA:" 3 PA",PO:" 1 - 5 Portée",dmg:"25  - 28"},{title:"Aquaculture",description:`Occasionne des dommages Eau aux ennemis en zone.
Rebondit sur les entités au contact des cibles.
Augmente également la Puissance des alliés touchés.

Confère une Crapocharge si un ennemi est touché.
Confère une Crapocharge si un allié est touché.`,PA:" 4 PA",PO:" 1 - 4 Portée",dmg:"28  - 31"},{title:"Prime",description:`Consomme les charges invocatrices pour invoquer une créature maîtrisable selon l'élément et le nombre de charges.
Si le lanceur est Déchargé : invoque un Informo contrôlable.

Si l'invocation est encore en vie et que le sort est relancé, elle est téléportée sur la case ciblée en l'immobilisant. 
Téléporter plusieurs invocations dans le même tour coûte 1 PA de plus à chaque fois.

Le temps de relance de ce sort débute à la mort de l'invocation et dépend de sa couleur.`,PA:" 2 PA",PO:" 1 - 3 Portée",dmg:""},{title:"Favoritisme",description:`Applique l'état Favori sur une invocation du lanceur :
• Réduit les dommages subis par l'invocation.
• À chaque début de tour de l'invocation, augmente ses dommages et soins finaux occasionnés.

Il ne peut y avoir qu'une seule invocation dans l'état Favori par Osamodas.
Si le sort est lancé sur une autre invocation, ses effets sont retirés de la cible précédente.

Les effets ne peuvent pas être désenvoûtés, ne sont pas réappliqués sur une invocation déjà dans l'état Favori et sont transmis lorsque l'Informo se transforme.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:""},{title:"Canine",description:`Occasionne des dommages Air et retire du Tacle.

Confère une Tofucharge (nécessite une cible).`,PA:" 3 PA",PO:" 1 - 7 Portée",dmg:"21  - 24"},{title:"Gambade",description:`Téléporte le lanceur symétriquement par rapport à la cible et occasionne des dommages Air aux ennemis.

Confère une Tofucharge (nécessite une cible).`,PA:" 2 PA",PO:" 1 - 1 Portée",dmg:"19  - 21"},{title:"Fossile",description:`Occasionne des dommages Terre et retire de la Puissance aux ennemis en zone.

Confère une Bouftocharge si une entité est touchée.`,PA:" 3 PA",PO:" 0 - 4 Portée",dmg:"23  - 25"},{title:"Sédimentation",description:`Occasionne des dommages Terre et retire des PM.

Confère une Bouftocharge (nécessite une cible).`,PA:" 4 PA",PO:" 1 - 5 Portée",dmg:"35  - 39"},{title:"Baume Protecteur",description:`Applique l'état Embaumé l'allié ciblé :
• Applique un bouclier sur la cible.
• Si c'est une invocation, ce bouclier est plus important et il est réappliqué au début de chacun de ses tours.

Il ne peut y avoir qu'un seul allié dans l'état Embaumé par équipe.
Si le sort est lancé sur un autre allié, ses effets sont retirés de la cible précédente.

Les effets ne peuvent pas être désenvoûtés, ne sont pas réappliqués sur une invocation déjà dans l'état Embaumé et sont transmis lorsque l'Informo se transforme.`,PA:" 2 PA",PO:" 1 - 6 Portée",dmg:""},{title:"Quart",description:`Consomme les charges invocatrices pour invoquer une créature maîtrisable selon l'élément et le nombre de charges.
Si le lanceur est Déchargé : invoque un Informo contrôlable.

Si l'invocation est encore en vie et que le sort est relancé, elle est téléportée sur la case ciblée en l'immobilisant. 
Téléporter plusieurs invocations dans le même tour coûte 1 PA de plus à chaque fois.

Le temps de relance de ce sort débute à la mort de l'invocation et dépend de sa couleur.`,PA:" 2 PA",PO:" 1 - 3 Portée",dmg:""},{title:"Ponction",description:"Confère une charge invocatrice selon la famille d'une invocation Osamodas du lanceur.",PA:" 1 PA",PO:" 1 - 8 Portée",dmg:""},{title:"Équilibre Bestial",description:`Change la famille des charges invocatrices selon la famille actuelle : 
• Tofu -> Bouftou -> Crapaud -> Dragonnet -> Tofu.
• Le coût en PA du sort est remboursé au premier lancer.

Si le lanceur est Déchargé : confère une charge invocatrice dans la famille de la dernière charge gagnée.`,PA:" 1 PA",PO:" 0 Portée",dmg:""},{title:"Poison Cinglant",description:`Applique un poison Eau de début de tour sur la cible.
Attaquer la cible avec un Crapaud occasionne des dommages Eau prématurément.

Les effets ne sont pas appliqués sur l'Informo.

Confère une Crapocharge (nécessite une cible).`,PA:" 2 PA",PO:" 1 - 6 Portée",dmg:"15  - 17"},{title:"Onde Aquatique",description:`Rapproche le lanceur vers la cible et occasionne des dommages Eau aux ennemis.

Confère une Crapocharge (nécessite une cible).`,PA:" 3 PA",PO:" 1 - 7 Portée",dmg:"25  - 29"},{title:"Corbeau Embrasé",description:`Occasionne des dommages Feu aux ennemis ou soigne les alliés.
Les dommages, la portée minimale et la portée maximale du sort sont augmentés après chaque lancer pour le tour en cours.

Confère une Dragocharge (nécessite une cible).`,PA:" 2 PA",PO:" 1 - 11 Portée",dmg:"8  - 10"},{title:"Écaille Transversale",description:`Soigne les alliés et occasionne des dommages Feu aux ennemis en zone.
N'affecte pas le lanceur.

Confère une Dragocharge si un allié (hors lanceur) est touché.
Confère une Dragocharge si un ennemi est touché.`,PA:" 4 PA",PO:" 0 - 4 Portée",dmg:"33  - 36"},{title:"Second",description:`Consomme les charges invocatrices pour invoquer une créature maîtrisable selon l'élément et le nombre de charges.
Si le lanceur est Déchargé : invoque un Informo contrôlable.

Si l'invocation est encore en vie et que le sort est relancé, elle est téléportée sur la case ciblée en l'immobilisant. 
Téléporter plusieurs invocations dans le même tour coûte 1 PA de plus à chaque fois.

Le temps de relance de ce sort débute à la mort de l'invocation et dépend de sa couleur.`,PA:" 2 PA",PO:" 1 - 3 Portée",dmg:""},{title:"Résistance Naturelle",description:`Rend une invocation du lanceur Invulnérable en augmentant sa Vitalité.

Sur un autre allié : augmente uniquement sa Vitalité.
Le bonus de Vitalité est plus faible.

Les effets sont transmis lorsque l'Informo se transforme.`,PA:" 2 PA",PO:" 1 - 7 Portée",dmg:""},{title:"Croc Répulsif",description:`Occasionne des dommages Air aux ennemis et repousse la cible.

Confère une Tofucharge (nécessite une cible).`,PA:" 2 PA",PO:" 1 - 5 Portée",dmg:"15  - 17"},{title:"Envol",description:`Échange de position avec la cible.
• Si c'est ennemi : lui occasionne des dommages Air
• Si c'est une invocation Osamodas du lanceur : occasionne des dommages Air aux ennemis dans un cercle de 2 cases autour du lanceur et de l'invocation.

Les dommages en zone ne s'appliquent qu'une seule fois par lancer et que si l'échange de positions peut s'effectuer.

Confère une Tofucharge (nécessite une cible).
Confère une seconde Tofucharge si la cible est une invocation Osamodas du lanceur.`,PA:" 4 PA",PO:" 1 - 3 Portée",dmg:"33  - 37"},{title:"Pilon Laineux",description:`Occasionne des dommages Terre et retire de la Fuite.

Confère une Bouftocharge (nécessite une cible).`,PA:" 2 PA",PO:" 1 - 3 Portée",dmg:"18  - 20"},{title:"Toison Bouffante",description:`Applique des points de bouclier sur les alliés par ennemi touché et occasionne des dommages Terre aux ennemis en zone.

Confère une Bouftocharge si un ennemi est touché.
Confère une Bouftocharge si un allié (hors lanceur) est touché.`,PA:" 4 PA",PO:" 0 - 2 Portée",dmg:"32  - 36"},{title:"Piqûre Motivante",description:`Augmente les dommages et soins finaux occasionnés, la Vitalité, les PA et les PM d'une invocation du lanceur.

Les effets sont transmis lorsque l'Informo se transforme.`,PA:" 3 PA",PO:" 1 - 3 Portée",dmg:""},{title:"Quint",description:`Consomme les charges invocatrices pour invoquer une créature maîtrisable selon l'élément et le nombre de charges.
Si le lanceur est Déchargé : invoque un Informo contrôlable.

Si l'invocation est encore en vie et que le sort est relancé, elle est téléportée sur la case ciblée en l'immobilisant. 
Téléporter plusieurs invocations dans le même tour coûte 1 PA de plus à chaque fois.

Le temps de relance de ce sort débute à la mort de l'invocation et dépend de sa couleur.`,PA:" 2 PA",PO:" 1 - 3 Portée",dmg:""},{title:"Plumeau",description:`Occasionne des dommages Air.
Les dommages sont augmentés pour chaque Tofu du lanceur présent sur le terrain.

Confère une Tofucharge (nécessite une cible).`,PA:" 4 PA",PO:" 1 - 6 Portée",dmg:"29  - 33"},{title:"Cœur de Dragon",description:`Soigne les alliés et occasionne des dommages Feu aux ennemis dans un cercle de 2 cases autour des Dragonnets du lanceur.
N'affecte pas le lanceur.

Confère une Dragocharge.`,PA:" 3 PA",PO:" 0 Portée",dmg:"22  - 24"},{title:"Souffle du Dragon",description:`Éloigne le lanceur de la cible et occasionne des dommages Feu aux ennemis ou soigne les alliés.

Confère une Dragocharge (nécessite une cible).`,PA:" 4 PA",PO:" 1 - 7 Portée",dmg:"31  - 35"},{title:"Constriction",description:`Attire la cible et vole de la vie dans l'élément Terre aux ennemis.

Confère une Bouftocharge (nécessite une cible).`,PA:" 3 PA",PO:" 1 - 5 Portée",dmg:"25  - 28"},{title:"Bénédiction Animale",description:`Confère 3 charges invocatrices dans la famille des charges actuelles.

Si le lanceur est Déchargé : confère 3 charges invocatrices dans la famille de la dernière charge gagnée.`,PA:" 2 PA",PO:" 0 Portée",dmg:""},{title:"Remplacement",description:`Tue un Tofu, Bouftou, Crapaud ou Dragonnet du lanceur pour les remplacer par une nouvelle invocation identique en lui augmentant sa Vitalité pour chaque palier de points de vie de la cible initiale.

Les intervalles de relance initiaux des sorts de la nouvelle invocation ne sont pas appliqués si l'invocation remplacée était présente pendant au moins un tour.
Les effets des sorts Baume Protecteur, Piqûre Motivante, Favoritisme, Résistance Naturelle et Relais sont transmis à la nouvelle invocation.`,PA:" 2 PA",PO:" 1 - 3 Portée",dmg:""},{title:"Frappe du Craqueleur",description:`Occasionne des dommages Terre aux ennemis et attire les cibles jusqu'au centre en zone.
L'attirance n'affecte pas le lanceur.

Confère une Bouftocharge si au moins un ennemi est touché.
Confère une seconde Bouftocharge si au moins trois ennemis sont touchés.`,PA:" 4 PA",PO:" 1 - 3 Portée",dmg:"36  - 41"},{title:"Batra",description:`Occasionne des dommages Eau aux ennemis dans un cercle de 2 cases autour du lanceur et de ses Crapauds.
Applique un poison Eau de début de tour sur les ennemis s'ils sont dans la zone d'effet du lanceur et d'un Crapaud, ou de deux Crapauds.
Les effets ne sont appliqués qu'une seule fois par lancer.

Confère une Crapocharge.`,PA:" 4 PA",PO:" 0 Portée",dmg:"27  - 30"},{title:"Tierce",description:`Consomme les charges invocatrices pour invoquer une créature maîtrisable selon l'élément et le nombre de charges.
Si le lanceur est Déchargé : invoque un Informo contrôlable.

Si l'invocation est encore en vie et que le sort est relancé, elle est téléportée sur la case ciblée en l'immobilisant. 
Téléporter plusieurs invocations dans le même tour coûte 1 PA de plus à chaque fois.

Le temps de relance de ce sort débute à la mort de l'invocation et dépend de sa couleur.`,PA:" 2 PA",PO:" 1 - 3 Portée",dmg:""},{title:"Relais",description:`Échange les positions de l'allié ciblé et de l'invocation du lanceur la plus proche de cet allié s'ils sont à 5 cases ou moins l'un de l'autre.
Si cet allié est une invocation, augmente également ses PA.

Les effets ne s'appliquent que si l'échange de positions peut s'effectuer.
Le bonus PA est transmis lorsque l'Informo se transforme.`,PA:" 2 PA",PO:" 1 - 5 Portée",dmg:""},{title:"Tourbillon",description:`Occasionne des dommages Eau aux ennemis.

Sur une invocation Osamodas du lanceur : téléporte les entités symétriquement par rapport à l'invocation et occasionne des dommages Eau aux ennemis en zone autour d'elle.
La zone dépend de la couleur de l'invocation :
• Mélanique : croix d'une case.
• Albinos : carré d'une case.
• Colorée : cercle de 2 cases.

Confère une Crapocharge (nécessite une cible).`,PA:" 3 PA",PO:" 1 - 5 Portée",dmg:"26  - 29"},{title:"Déplumage",description:`Occasionne des dommages Air aux ennemis.

Sur une invocation Osamodas du lanceur : occasionne des dommages Air aux ennemis et repousse les cibles en zone autour d'elle.
La zone dépend de la couleur de l'invocation :
• Mélanique : croix d'une case.
• Albinos : carré d'une case.
• Colorée : cercle de 2 cases.

Confère une Tofucharge (nécessite une cible).`,PA:" 3 PA",PO:" 1 - 5 Portée",dmg:"23  - 26"},{title:"Tandem Animal",description:`Applique des effets sur l'allié ciblé et sur le lanceur selon la dernière charge invocatrice gagnée :
• Tofucharge : augmente les PM et la Fuite.
• Bouftocharge : applique un bouclier.
• Crapocharge : augmente la Puissance.
• Dragocharge : augmente les soins reçus.

Chaque effet se cumule une fois.`,PA:" 2 PA",PO:" 1 - 6 Portée",dmg:""},{title:"Préserve Naturelle",description:`Applique des effets sur toutes les invocations Osamodas du lanceur selon la dernière charge invocatrice gagnée :
• Tofucharge : augmente les PM.
• Bouftocharge : applique un bouclier.
• Crapocharge : augmente la Puissance.
• Dragocharge : soigne.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 2 PA",PO:" 0 Portée",dmg:""},{title:"Fouet",description:`Attire les invocations Osamodas du lanceur vers le centre de la zone.
Si la case est occupée, téléporte les invocations Osamodas symétriquement par rapport à la cible.`,PA:" 1 PA",PO:" 1 - 6 Portée",dmg:""},{title:"Cravache",description:`Applique des effets de déplacement selon la famille de la charge invocatrice et le nombre de charges :
• Tofucharge : repousse la cible de 1 à 3 cases.
• Bouftocharge : attire la cible de 1 à 3 cases.
• Crapocharge : rapproche le lanceur de 1 à 3 cases.
• Dragocharge : éloigne le lanceur de 1 à 3 cases.`,PA:" 1 PA",PO:" 1 - 6 Portée",dmg:"1  - 2"},{title:"Rappel",description:`Tue une invocation alliée.

Sur un Tofu, un Bouftou, un Crapaud ou un Dragonnet du lanceur : confère une charge invocatrice selon la famille et la couleur de l'invocation et rend des PA au lanceur selon la couleur de l'invocation avant de la tuer.
Le temps de relance du sort d'invocation associé n'est pas appliqué.`,PA:" 2 PA",PO:" 1 - 6 Portée",dmg:""},{title:"Sixte",description:`Consomme les charges invocatrices pour invoquer une créature maîtrisable selon l'élément et le nombre de charges.
Si le lanceur est Déchargé : invoque un Informo contrôlable.

Si l'invocation est encore en vie et que le sort est relancé, elle est téléportée sur la case ciblée en l'immobilisant. 
Téléporter plusieurs invocations dans le même tour coûte 1 PA de plus à chaque fois.

Le temps de relance de ce sort débute à la mort de l'invocation et dépend de sa couleur.`,PA:" 2 PA",PO:" 1 - 3 Portée",dmg:""}],Roublard:[{},{title:"Détonateur",description:`Ajoute 1 Combo à une Bombe du lanceur et déclenche son explosion sans ligne de vue.
Rend 1 PA au lanceur avant l'explosion.`,PA:" 1 PA",PO:" 1 - 8 Portée",dmg:""},{title:"Étoupille",description:`Déclenche l'explosion d'une Bombe du lanceur.
Rend 3 PA au lanceur avant l'explosion.`,PA:" 1 PA",PO:" 1 - 8 Portée",dmg:""},{title:"Tornabombe",description:`Pose une bombe qui occasionne des dommages Air et retire des PM selon son Combo dans un cercle de 2 cases à son explosion.
• Combo I à IV : -1 PM
• Combo V à IX : -2 PM
• Combo X à XV : -3 PM
• Mur d'Air : -2 PM

Si le sort est lancé sur une cible : occasionne des dommages Air et retire des PM dans un cercle de 2 cases sur la cible.
Si la cible est une bombe du lanceur, ajoute 1 Combo à la bombe et déclenche son explosion.

Le coût en PA du sort augmente de 1 pour chaque Tornabombe du lanceur présente sur le terrain.`,PA:" 2 PA",PO:" 1 - 6 Portée",dmg:"17  - 19"},{title:"Tornabombe Résiliente",description:`Pose une bombe qui occasionne des dommages Air et retire des PM selon son Combo dans un cercle de 2 cases à son explosion.
• Combo I à IV : -1 PM
• Combo V à IX : -2 PM
• Combo X à XV : -3 PM
• Mur d'Air : -2 PM

Si le sort est lancé sur une cible : occasionne des dommages Air et retire des PM dans un cercle de 2 cases sur la cible.
Si la cible est une bombe du lanceur, ajoute 1 Combo à la bombe et déclenche son explosion.

Une Bombe Résiliente possède plus de points de vie qu'une Bombe de base.`,PA:" 2 PA",PO:" 1 - 6 Portée",dmg:"17  - 19"},{title:"Explobombe",description:`Pose une bombe qui occasionne des dommages Feu dans un cercle de 2 cases à son explosion.

Si le sort est lancé sur une cible : occasionne des dommages Feu dans un cercle de 2 cases sur la cible.
Si la cible est une bombe du lanceur, ajoute 1 Combo à la bombe et déclenche son explosion.

Le coût en PA du sort augmente de 1 pour chaque Explobombe du lanceur présente sur le terrain.`,PA:" 2 PA",PO:" 1 - 6 Portée",dmg:"17  - 19"},{title:"Explobombe Résiliente",description:`Pose une bombe qui occasionne des dommages Feu dans un cercle de 2 cases à son explosion.

Si le sort est lancé sur une cible : occasionne des dommages Feu dans un cercle de 2 cases sur la cible.
Si la cible est une bombe du lanceur, ajoute 1 Combo à la bombe et déclenche son explosion.

Une Bombe Résiliente possède plus de points de vie qu'une Bombe de base.`,PA:" 2 PA",PO:" 1 - 6 Portée",dmg:"17  - 19"},{title:"Botte",description:`Applique un bouclier sur les Bombes du lanceur et les pousse depuis le centre en zone.
Plus le sort est lancé à proximité d'une Bombe du lanceur, plus elle est poussée.
Peut être utilisé sur sa Mégabombe ou sa Bombe Ambulante.

Pousse les autres entités d'une case seulement.
N'affecte pas le lanceur.`,PA:" 2 PA",PO:" 0 - 8 Portée",dmg:""},{title:"Ruse",description:`Rapproche le lanceur vers la cible.
Si la cible est une Bombe du lanceur, lui applique également un bouclier.

Peut être utilisé sur sa Mégabombe ou sa Bombe Ambulante.`,PA:" 2 PA",PO:" 1 - 6 Portée",dmg:""},{title:"Pulsar",description:`Occasionne des dommages Feu aux ennemis et repousse les cibles en zone.
N'affecte pas le lanceur.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"23  - 25"},{title:"Shrapnel",description:`Occasionne des dommages Eau.
Retire des PA pour chaque Bombe, Mégabombe ou Bombe Ambulante du lanceur au contact de l'ennemi ciblé.

Sur une Bombe du lanceur : occasionne des dommages Eau aux ennemis et retire des PA dans un carré d'une case autour d'elle.
Peut être utilisé sur sa Mégabombe ou sa Bombe Ambulante.`,PA:" 2 PA",PO:" 1 - 5 Portée",dmg:"17  - 19"},{title:"Aimantation",description:`Ajoute 1 Combo une fois par Bombe par tour en zone. N'affecte pas la case centrale.
Attire les Bombes du lanceur dans la zone d'effet vers la cible. Le Combo ne s'applique que si les Bombes sont effectivement déplacées.
Peut être utilisé sur sa Mégabombe ou sa Bombe Ambulante.

Attire les autres entités d'une case seulement.
N'affecte pas le lanceur.`,PA:" 2 PA",PO:" 0 - 7 Portée",dmg:""},{title:"Croisement",description:`Ajoute 1 Combo une fois par Bombe par tour en zone. N'affecte pas la case centrale.
Attire les Bombes du lanceur dans la zone d'effet vers la case ciblée. Le Combo ne s'applique que si les Bombes sont effectivement déplacées.
Peut être utilisé sur sa Mégabombe ou sa Bombe Ambulante.`,PA:" 2 PA",PO:" 0 - 7 Portée",dmg:""},{title:"Espingole",description:"Occasionne des dommages Air aux ennemis et repousse les cibles en zone.",PA:" 3 PA",PO:" 1 - 8 Portée",dmg:"23  - 25"},{title:"Oblitération",description:`Occasionne des dommages Terre.
Les dommages sont augmentés pour chaque explosion de Sismobombe ou de Bombe Collante.

Sur une Bombe du lanceur : ajoute du Combo pour chaque explosion de Sismobombe ou de Bombe Collante.

Les effets sont retirés après utilisation du sort.`,PA:" 4 PA",PO:" 1 - 5 Portée",dmg:"33  - 37"},{title:"Entourloupe",description:`Ajoute 1 Combo à une Bombe du lanceur, échange de position avec elle et lui applique l'état Pesanteur.
Les effets ne s'appliquent que si l'échange de positions peut s'effectuer.
Peut être utilisé sur sa Mégabombe.

Sur un allié : échange uniquement de position avec la cible.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:""},{title:"Bombe Ambulante",description:`Invoque une Bombe contrôlable qui peut obtenir un élément et du Combo en ciblant une Bombe élémentaire.
Elle se détruit pour poser une Bombe dans l'élément correspondant à la fin de son tour en lui ajoutant jusqu'à 7 Combos de la Bombe ciblée.
Cette Bombe entre dans l'état Pacifiste jusqu'au début du prochain tour du lanceur.

Elle est détruite au bout de 2 tours si elle n'a pas obtenu d'élément.`,PA:" 2 PA",PO:" 1 - 1 Portée",dmg:""},{title:"Sismobombe",description:`Pose une bombe qui occasionne des dommages Terre dans un cercle de 2 cases à son explosion.

Si le sort est lancé sur une cible : occasionne des dommages Terre dans un cercle de 2 cases sur la cible.
Si la cible est une bombe du lanceur, ajoute 1 Combo à la bombe et déclenche son explosion.

Le coût en PA du sort augmente de 1 pour chaque Sismobombe du lanceur présente sur le terrain.`,PA:" 2 PA",PO:" 1 - 6 Portée",dmg:"20  - 22"},{title:"Sismobombe Résiliente",description:`Pose une bombe qui occasionne des dommages Terre dans un cercle de 2 cases à son explosion.

Si le sort est lancé sur une cible : occasionne des dommages Terre dans un cercle de 2 cases sur la cible.
Si la cible est une bombe du lanceur, ajoute 1 Combo à la bombe et déclenche son explosion.

Une Bombe Résiliente possède plus de points de vie qu'une Bombe de base.`,PA:" 2 PA",PO:" 1 - 6 Portée",dmg:"20  - 22"},{title:"Bombe à Eau",description:`Pose une bombe qui occasionne des dommages Eau et retire des PA selon son Combo dans un cercle de 2 cases à son explosion.
• Combo I à IV : -0 PA
• Combo V à IX : -1 PA
• Combo X à XV : -2 PA

Si le sort est lancé sur une cible : occasionne des dommages Eau dans un cercle de 2 cases sur la cible.
Si la cible est une bombe du lanceur, ajoute 1 Combo à la bombe et déclenche son explosion.

Le mur de Bombes à Eau retire des PA uniquement aux entités qui commencent leur tour à l'intérieur.
• Mur d'Eau : -2 PA

Le coût en PA du sort augmente de 1 pour chaque Bombe à Eau du lanceur présente sur le terrain.`,PA:" 2 PA",PO:" 1 - 6 Portée",dmg:"17  - 19"},{title:"Bombe à Eau Résiliente",description:`Pose une bombe qui occasionne des dommages Eau et retire des PA selon son Combo dans un cercle de 2 cases à son explosion.
• Combo I à IV : -0 PA
• Combo V à IX : -1 PA
• Combo X à XV : -2 PA

Si le sort est lancé sur une cible : occasionne des dommages Eau dans un cercle de 2 cases sur la cible.
Si la cible est une bombe du lanceur, ajoute 1 Combo à la bombe et déclenche son explosion.

Le mur de Bombes à Eau retire des PA uniquement aux entités qui commencent leur tour à l'intérieur.
• Mur d'Eau : -2 PA

Une Bombe Résiliente possède plus de points de vie qu'une Bombe de base.`,PA:" 2 PA",PO:" 1 - 6 Portée",dmg:"17  - 19"},{title:"Roublabot",description:`Invoque un robot contrôlable capable de pousser, attirer ou faire exploser les Bombes du lanceur.
Le robot meurt à la fin de son tour de jeu.`,PA:" 4 PA",PO:" 1 - 1 Portée",dmg:""},{title:"Mégabombe",description:`Invoque une Mégabombe contrôlable qui occasionne des dommages Neutre.
Ses dommages augmentent à chaque fois qu'elle dévore une Bombe. Elle perd 1 PM par Bombe dévorée.
Lorsqu'elle meurt, elle explose en ajoutant 1 Combo aux Bombes du lanceur et déclenche leur explosion dans une zone de 2 cases autour d'elle.

La Mégabombe est sensible aux murs de bombes.`,PA:" 3 PA",PO:" 1 - 1 Portée",dmg:""},{title:"Bombarde",description:"Occasionne des dommages Terre aux ennemis et repousse les cibles en zone.",PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"23  - 25"},{title:"Mitraille",description:"Occasionne des dommages Air et retire des PM.",PA:" 4 PA",PO:" 1 - 6 Portée",dmg:"34  - 38"},{title:"Recel",description:"Occasionne des dommages Eau aux ennemis et attire la cible.",PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"28  - 30"},{title:"Plombage",description:`Occasionne des dommages Feu aux ennemis.

Sur une Bombe du lanceur : occasionne des dommages Feu aux ennemis situés entre deux Bombes alignées.
Ajoute 1 Combo aux Bombes affectées une fois par Bombe par tour.`,PA:" 3 PA",PO:" 1 - 5 Portée",dmg:"30  - 34"},{title:"Roublardise",description:`Applique un bouclier sur toutes les Bombes du lanceur.
Le bouclier est également appliqué sur sa Mégabombe et sa Bombe Ambulante.

Crée plusieurs images du lanceur pour tromper ses adversaires, et lui permet de se téléporter. Les images disparaissent si elles reçoivent des dommages.
Termine le tour en cours du lanceur.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:""},{title:"Stratagème",description:`Téléporte une Bombe du lanceur à sa position précédente et lui applique un bouclier.

Le bouclier ne s'applique que si la téléportation peut s'effectuer.
Peut être utilisé sur sa Mégabombe ou sa Bombe Ambulante.`,PA:" 1 PA",PO:" 1 - 6 Portée",dmg:""},{title:"Extraction",description:`Vole de la vie dans l'élément Feu.
Le vol de vie est réduit de moitié sur les alliés.`,PA:" 3 PA",PO:" 1 - 8 Portée",dmg:"28  - 30"},{title:"Cadence",description:`Occasionne des dommages Air.
Retire des PM pour chaque Bombe, Mégabombe ou Bombe Ambulante du lanceur au contact de l'ennemi ciblé.

Sur une Bombe du lanceur : occasionne des dommages Air et retire des PM aux ennemis dans une croix d'une case.
Peut être utilisé sur sa Mégabombe ou sa Bombe Ambulante.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"26  - 28"},{title:"Rémission",description:`Applique l'état Rémission sur la cible :
• Repousse les attaquants si la cible subit des dommages en mêlée.

Sur une Bombe du lanceur : réduit les dommages reçus à distance.
Peut être utilisé sur sa Mégabombe ou sa Bombe Ambulante.`,PA:" 2 PA",PO:" 1 - 8 Portée",dmg:"1  - 6"},{title:"Casemate",description:`Rend une Bombe du lanceur Invulnérable.
Peut être utilisé sur sa Mégabombe ou sa Bombe Ambulante.`,PA:" 2 PA",PO:" 1 - 8 Portée",dmg:""},{title:"Dagues Boomerang",description:"Érode les cibles et occasionne des dommages Air en zone.",PA:" 4 PA",PO:" 1 - 7 Portée",dmg:"16  - 18"},{title:"Tromblon",description:"Érode les cibles et occasionne des dommages Eau en zone.",PA:" 4 PA",PO:" 1 - 4 Portée",dmg:"35  - 39"},{title:"Poudre",description:`Applique l'état Indéplaçable sur une Bombe du lanceur.
Ajoute 2 Combo à la Bombe et déclenche son explosion si elle meurt.

Les effets sont retirés si la Bombe est déclenchée par un effet d'explosion et ne peuvent pas être désenvoûtés.`,PA:" 1 PA",PO:" 1 - 8 Portée",dmg:""},{title:"Bombe Collante",description:`Pose une Bombe Collante sur la cible.
Sur une case libre : pose un piège qui pose une Bombe Collante sur l'entité qui le déclenche ou déclenche l'explosion d'une Bombe du lanceur.

La Bombe peut être activée avec les sorts d'activation ou les explosions de bombe.
Quand elle est activée, elle occasionne des dommages dans le meilleur élément d'attaque du lanceur dans un cercle de 2 cases.

Une Bombe Collante ne peut pas être appliquée sur une Bombe, Mégabombe, ou Bombe Ambulante alliée.`,PA:" 3 PA",PO:" 1 - 6 Portée",dmg:"30  - 34"},{title:"Mousquet",description:`Occasionne des dommages Terre.
Ajoute 1 Combo aux Bombes du lanceur au contact de la cible une fois par Bombe par tour.`,PA:" 2 PA",PO:" 1 - 6 Portée",dmg:"19  - 21"},{title:"Grenaille",description:`Vole de la vie dans l'élément Feu en zone.
Le vol de vie est réduit de moitié sur les alliés.

N'affecte pas le lanceur.`,PA:" 4 PA",PO:" 0 - 5 Portée",dmg:"30  - 34"},{title:"Dernier Souffle",description:`Réduit la Vitalité maximale du lanceur pour ajouter temporairement 3 Combo à ses Bombes.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 2 PA",PO:" 0 Portée",dmg:""},{title:"Piège Magnétique",description:"Pose un piège mono-cellule qui attire les cibles, ajoute 1 Combo aux Bombes du lanceur et déclenche leur explosion dans un cercle de 3 cases.",PA:" 3 PA",PO:" 1 - 8 Portée",dmg:""},{title:"Resquille",description:`Occasionne des dommages Eau et retire des PA en zone.
N'affecte pas le lanceur.

Sur des Bombes du lanceur : les téléporte symétriquement par rapport au centre de la zone.
Peut être utilisé sur sa Mégabombe ou sa Bombe Ambulante.`,PA:" 4 PA",PO:" 0 - 1 Portée",dmg:"33  - 37"},{title:"Arquebuse",description:"Réduit la durée des effets sur la cible et occasionne des dommages Terre aux ennemis.",PA:" 4 PA",PO:" 1 - 6 Portée",dmg:"35  - 39"},{title:"Kaboom",description:`Applique l'état Kaboom sur les alliés en zone.

Sur des Bombes du lanceur : ajoute 1 Combo.`,PA:" 3 PA",PO:" 0 - 5 Portée",dmg:""},{title:"Imposture",description:`Échange de positions avec la cible et applique l'état Kaboom sur le lanceur.
• Si la cible est un allié : lui applique également l'état.
• Si la cible est une Bombe du lanceur : ajoute également 1 Combo à la Bombe.
Applique l'état Imposture sur le lanceur et l'allié ciblé au tour suivant, qui empêche l'application de l'état Kaboom.

Le Combo et l'état Kaboom ne s'appliquent que si l'échange de positions peut s'effectuer.`,PA:" 3 PA",PO:" 1 - 3 Portée",dmg:""}],Feca:[{},{title:"Langueur",description:"Retire de l'Intelligence, réduit les chances de Critique et occasionne des dommages Feu.",PA:" 3 PA",PO:" 1 - 6",dmg:"27  - 29"},{title:"Atonie",description:"Occasionne des dommages Feu et retire des PM aux ennemis en zone.",PA:" 4 PA",PO:" 0 - 5",dmg:"31  - 35"},{title:"Rempart",description:"Réduit les dommages reçus par le lanceur et par ses alliés en zone.",PA:" 2 PA",PO:" 0",dmg:""},{title:"Fortification",description:"Réduit les dommages reçus par l'allié ciblé.",PA:" 2 PA",PO:" 0 - 5",dmg:""},{title:"Retour du Bâton",description:"Retire de la Force, de la Fuite et occasionne des dommages Terre.",PA:" 3 PA",PO:" 1 - 4",dmg:"29  - 33"},{title:"Tétanie",description:"Occasionne des dommages Terre et retire des PA.",PA:" 4 PA",PO:" 1",dmg:"36  - 40"},{title:"Nimbus",description:"Retire de la Chance, du Tacle et occasionne des dommages Eau aux ennemis en zone.",PA:" 3 PA",PO:" 0 - 7",dmg:"23  - 25"},{title:"Stratus",description:"Occasionne des dommages Eau et retire de la aux ennemis en zone.",PA:" 4 PA",PO:" 0 - 5",dmg:"31  - 34"},{title:"Typhon",description:"Retire de l'Agilité, des Dommages et occasionne des dommages Air aux ennemis en zone.",PA:" 3 PA",PO:" 1 - 4",dmg:"22  - 24"},{title:"Silbo",description:`Occasionne des dommages Air aux ennemis et repousse les cibles depuis le centre en zone.
N'affecte pas le lanceur.`,PA:" 3 PA",PO:" 1 - 6",dmg:"30  - 33"},{title:"Barricade",description:`Rend l'allié ciblé Invulnérable en mêlée.
Augmente ses PM si l'Invulnérabilité est désenvoûtée.

Sur une case libre : invoque un bouclier statique qui rend Invulnérables en mêlée les alliés présents à son contact dans son glyphe-aura.
Ce bouclier est détruit au prochain tour du lanceur.`,PA:" 2 PA",PO:" 0 - 6",dmg:""},{title:"Pavois",description:`Invoque plusieurs Pavois en zone.
Ces boucliers sont détruits au prochain tour du lanceur.

Sur une cible : invoque plusieurs Pavois à son contact.
• Si c'est un allié : les Pavois sont détruits au début de son tour ou à sa mort.
• Si c'est un ennemi : ils sont détruits au prochain tour du lanceur.`,PA:" 3 PA",PO:" 0 - 6",dmg:""},{title:"Somnolence",description:"Occasionne des dommages Terre et retire des PA aux ennemis en zone.",PA:" 3 PA",PO:" 0 - 6",dmg:"22  - 24"},{title:"Manœuvre",description:"Occasionne des dommages Air aux ennemis et échange de position avec la cible.",PA:" 4 PA",PO:" 1 - 4",dmg:"38  - 42"},{title:"Léthargie",description:"Occasionne des dommages Feu et retire des PM.",PA:" 3 PA",PO:" 1 - 5",dmg:"28  - 31"},{title:"Regroupement",description:"Attire les cibles vers le centre et occasionne des dommages Terre aux ennemis en zone autour du lanceur.",PA:" 4 PA",PO:" 0",dmg:"38  - 42"},{title:"Bastion",description:`Rend l'allié ciblé Invulnérable à distance.
Augmente sa Puissance si l'Invulnérabilité est désenvoûtée.

Sur une case libre : invoque un bouclier statique qui rend Invulnérables à distance les alliés présents à son contact dans son glyphe-aura.
Ce bouclier est détruit au prochain tour du lanceur.`,PA:" 2 PA",PO:" 0 - 6",dmg:""},{title:"Trêve",description:"Pose un glyphe-aura qui applique l'état Pacifiste.",PA:" 3 PA",PO:" 0",dmg:""},{title:"Bourrasque",description:"Occasionne des dommages Air aux ennemis et repousse les cibles vers les extrémités en zone.",PA:" 2 PA",PO:" 1 - 5",dmg:"19  - 21"},{title:"Escapade",description:"Éloigne le lanceur de la cible et occasionne des dommages Eau aux ennemis.",PA:" 3 PA",PO:" 1 - 6",dmg:"27  - 29"},{title:"Bulle",description:"Occasionne des dommages Eau et retire de la.",PA:" 2 PA",PO:" 1 - 8",dmg:"17  - 19"},{title:"Sonnailles",description:"Occasionne des dommages Feu aux ennemis et attire les cibles vers le centre en zone.",PA:" 4 PA",PO:" 1 - 7",dmg:"32  - 36"},{title:"Transhumance",description:`Téléporte le lanceur et déclenche ses glyphes élémentaires sur la case ciblée.
Applique également l'état Étoile du Berger sur les alliés présents dans les glyphes déclenchés.

Les glyphes ne peuvent être déclenchés manuellement qu'une seule fois par tour.`,PA:" 3 PA",PO:" 1 - 6",dmg:""},{title:"Égide",description:`Invoque un bouclier statique qui intercepte les dommages subis par les alliés présents dans son glyphe-aura et leur applique l'état Étoile du Berger.
Ce bouclier est détruit 2 tours après son invocation.

Sur une cible : pose un glyphe-aura qui intercepte les dommages subis par les alliés et leur applique l'état Étoile du Berger.

N'affecte pas la Barricade et le Bastion.`,PA:" 3 PA",PO:" 0 - 4",dmg:""},{title:"Houlette",description:"Occasionne des dommages Feu aux ennemis et attire la cible.",PA:" 3 PA",PO:" 1 - 7",dmg:"24  - 27"},{title:"Frisson",description:"Occasionne des dommages Air aux ennemis et attire les cibles vers la case ciblée en zone.",PA:" 4 PA",PO:" 1 - 4",dmg:"32  - 36"},{title:"Torpeur",description:"Attire la cible et occasionne des dommages Terre aux ennemis.",PA:" 3 PA",PO:" 1 - 4",dmg:"27  - 30"},{title:"Giboulée",description:"Occasionne des dommages Eau aux ennemis et repousse la cible.",PA:" 4 PA",PO:" 1 - 7",dmg:"36  - 40"},{title:"Renfort",description:"Téléporte le lanceur sur la première case disponible entre l'allié ciblé et lui.",PA:" 3 PA",PO:" 2 - 8",dmg:""},{title:"Ataraxie",description:`Applique l'état Pesanteur sur l'allié ciblé et réduit tout type de dommages subis sur la première attaque.
Les effets du sort sont retirés si l'allié subit des dommages.

Les effets d'interception et de partage de dommages sont incompatibles avec le sort.
Les effets ne peuvent pas être désenvoûtés.`,PA:" 2 PA",PO:" 0 - 4",dmg:""},{title:"Prairie",description:`Pose un glyphe de début de tour qui occasionne des dommages Air aux ennemis.
Réduit les dommages finaux occasionnés par les ennemis présents dans le glyphe.

Empêche l'utilisation d'autres glyphes élémentaires dans le même tour.`,PA:" 3 PA",PO:" 0 - 5",dmg:"31  - 35"},{title:"Pâturage",description:`Occasionne des dommages Air aux ennemis et pose un glyphe-aura sous la cible qui augmente les dommages en mêlée des alliés.

Sur une case libre : invoque la Lanterne du Berger et pose le glyphe-aura sous la lanterne.

Empêche l'utilisation d'autres glyphes élémentaires dans le même tour.`,PA:" 3 PA",PO:" 0 - 6",dmg:"31  - 35"},{title:"Vallée",description:`Pose un glyphe de début de tour qui occasionne des dommages Eau aux ennemis.
Retire de la aux ennemis présents dans le glyphe.

Empêche l'utilisation d'autres glyphes élémentaires dans le même tour.`,PA:" 3 PA",PO:" 0 - 7",dmg:"28  - 32"},{title:"Verglas",description:`Occasionne des dommages Eau aux ennemis et pose un glyphe-aura sous la cible qui augmente la Fuite des alliés.

Sur une case libre : invoque la Lanterne du Berger et pose le glyphe-aura sous la lanterne.

Empêche l'utilisation d'autres glyphes élémentaires dans le même tour.`,PA:" 3 PA",PO:" 0 - 8",dmg:"31  - 35"},{title:"Bergerie",description:`Pose un glyphe-aura qui applique les états Inébranlable et Pesanteur.
Applique également l'état Étoile du Berger sur les alliés présents dans le glyphe.`,PA:" 3 PA",PO:" 0 - 3",dmg:""},{title:"Excursion",description:`Pose un glyphe qui échange la position des alliés avec celle du lanceur.
Applique également l'état Étoile du Berger sur les alliés qui déclenchent le glyphe.`,PA:" 2 PA",PO:" 0 - 6",dmg:""},{title:"Terre Battue",description:`Pose un glyphe de début de tour qui occasionne des dommages Terre aux ennemis.
Retire des PA aux ennemis présents dans le glyphe.

Empêche l'utilisation d'autres glyphes élémentaires dans le même tour.`,PA:" 3 PA",PO:" 0 - 5",dmg:"29  - 33"},{title:"Refuge",description:`Occasionne des dommages Terre aux ennemis et pose un glyphe-aura sous la cible qui réduit les dommages subis par les alliés.

Sur une case libre : invoque la Lanterne du Berger et pose le glyphe-aura sous la lanterne.

Empêche l'utilisation d'autres glyphes élémentaires dans le même tour.`,PA:" 3 PA",PO:" 0 - 3",dmg:"32  - 36"},{title:"Terre Brûlée",description:`Pose un glyphe de début de tour qui occasionne des dommages Feu aux ennemis.
Retire des PM aux ennemis présents dans le glyphe.

Empêche l'utilisation d'autres glyphes élémentaires dans le même tour.`,PA:" 3 PA",PO:" 0 - 5",dmg:"30  - 34"},{title:"Vigie",description:`Occasionne des dommages Feu aux ennemis et pose un glyphe-aura sous le lanceur qui augmente la des alliés.

Sur un allié : pose le glyphe-aura sous la cible.

Sur une case libre : invoque la Lanterne du Berger et pose le glyphe-aura sous la lanterne.

Empêche l'utilisation d'autres glyphes élémentaires dans le même tour.`,PA:" 3 PA",PO:" 0 - 7",dmg:"30  - 34"},{title:"Défiance",description:`Augmente le Tacle de l'allié ciblé pour chaque ennemi à son contact et pose un glyphe de fin de tour qui occasionne des dommages Terre, Feu, Eau et Air aux ennemis.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 2 PA",PO:" 0 - 9",dmg:"21  - 22"},{title:"Barrière",description:`Applique les états Pesanteur et Barrière sur la cible.

Si la cible est un ennemi :
• Au début de son tour, pose un glyphe qui occasionne des dommages Terre, Feu, Eau et Air autour de la cible.
• Le glyphe n'occasionne des dommages qu'à cet ennemi s'il le traverse.
• Les états et le glyphe sont retirés si l'ennemi traverse la Barrière ou s'il meurt.

Si la cible est un allié :
• Le glyphe est posé à la fin du tour du lanceur et n'occasionne des dommages qu'au premier ennemi qui le traverse.
• Les états et le glyphe sont retirés si la cible ou un ennemi traverse la Barrière.

Les effets ne peuvent pas être désenvoûtés.`,PA:" 3 PA",PO:" 0 - 6",dmg:"21  - 22"},{title:"Bouclier Féca",description:`Réduit les dommages subis par l'allié ciblé.
Applique également l'Étoile du Berger sur l'allié ciblé et tous les alliés dans un glyphe élémentaire allié.`,PA:" 2 PA",PO:" 0 - 5",dmg:""},{title:"Mise en Garde",description:`Augmente la Puissance des Glyphes du lanceur, déclenche ses glyphes élémentaires sur la case ciblée et applique l'état Étoile du Berger sur les alliés présents dans les glyphes.

Les glyphes ne peuvent être déclenchés manuellement qu'une seule fois par tour.
Les effets ne peuvent pas être désenvoûtés.`,PA:" 3 PA",PO:" 0",dmg:""}]},Mm=({classe:e,spellNB:n})=>(De.useEffect(()=>{Rn[e][n].dmg==""?document.getElementById("effects").style.display="none":document.getElementById("effects").style.display="block"},[n]),P.jsxs("div",{id:"SpellsDesc",children:[P.jsxs("div",{className:"spellWrap",children:[P.jsx("img",{className:"spellIMG",src:`/Classes/${e}/Spells/${e}${n}.png`}),P.jsxs("div",{children:[P.jsx("p",{className:"title",children:Rn[e][n].title}),P.jsxs("p",{className:"cost",children:[P.jsx("span",{className:"grey",children:"Coût:"})," ",Rn[e][n].PA]}),P.jsxs("p",{className:"range",children:[P.jsx("span",{className:"grey",children:"Portée:"})," ",Rn[e][n].PO]})]})]}),P.jsx("p",{className:"desc",children:Rn[e][n].description}),P.jsxs("p",{id:"effects",children:[P.jsx("span",{className:"effectTitle",children:"Effets: "}),Rn[e][n].dmg," dommages"]})]})),Rm=({classe:e})=>{const[n,t]=De.useState(1);function s(i){t(i),document.getElementById("SpellsDesc").classList.add("active"),document.getElementById("RightContainer").addEventListener("mouseleave",r)}function r(){document.getElementById("SpellsDesc").classList.remove("active"),document.getElementById("RightContainer").removeEventListener("mouseleave",r)}return P.jsxs("div",{id:"RightContainer",children:[P.jsx(Mm,{classe:e,spellNB:n}),P.jsx("h2",{children:"Sorts de classe"}),P.jsx("div",{id:"Spells",children:Array.from({length:22},(i,l)=>P.jsxs("div",{className:"spellContainer",children:[P.jsx("img",{className:"spellIcon","data-spellnb":(l+1)*2-1,src:`/Classes/${e}/Spells/${e}${(l+1)*2-1}.png`,onClick:()=>s((l+1)*2-1)}),P.jsx("img",{className:"spellIcon","data-spellnb":(l+1)*2,src:`/Classes/${e}/Spells/${e}${(l+1)*2}.png`,onClick:()=>s((l+1)*2)})]},l))})]})},se={Roublard:[{Name:"Roublard",Title:"Expert en explosif",Description:"Membres d’un clan créé à l’origine par Raval et la famille Smisse, les Roublards ont finalement prêté allégeance au dieu Dralbour, qui n’est autre que Sram. Maîtres de l’entourloupe, du coup fourré, des bombes à retardement et des pistolets… les Roublards ne sont à l’aise qu’en terrain miné.",Difficulty:3,color:"#124349",Types:[{Name:"Dégâts",Desc:"Occasionne d'importants dégâts en faisant exploser ses bombes.",bgPos:"1px"},{Name:"Entrave",Desc:"Retire des points d'action, de mouvement et bloque des lignes de vue avec ses bombes.",bgPos:"-357px"},{Name:"Placement",Desc:"Attire et repousse les alliés, les ennemis et ses bombes. Peut téléporter ses bombes ou échanger de place avec elles.",bgPos:"-448px"}]}],Ecaflip:[{Name:"Ecaflip",Title:"Combattant imprévisible",Description:"Les Ecaflips sont des guerriers joueurs qui se fourrent dans les endroits où l'on peut gagner gros, et perdre beaucoup… Un Ecaflip bien dans sa peau parie sans arrêt, pour tout et pour rien. Mais attention, il prend le jeu très au sérieux et ira même jusqu'à risquer sa vie sur un jet de dés pour tenter de remporter la mise…",Difficulty:2,color:"#008783",Types:[{Name:"Dégâts",Desc:"Occasionne d'importants dommages à courte et moyenne portée.",bgPos:"1px"},{Name:"Amélioration",Desc:"Augmente les points de mouvement, d'action et la puissance. Peut donner des bonus aléatoires à chaque tour.",bgPos:"-179px"},{Name:"Soins",Desc:"Soigne les alliés en utilisant ses sorts offensifs ou son invocation.",bgPos:"-87px"}]}],Eniripsa:[{Name:"Eniripsa",Title:"Guérisseur",Description:"Les Eniripsas sont des guérisseurs qui soignent d'un simple Mot. Ils utilisent le pouvoir de la parole pour soulager les souffrances de leurs alliés, mais parfois aussi pour blesser leurs ennemis. Certains Eniripsas sont même devenus de véritables arpenteurs du verbe, des rôdeurs des langues oubliées.",Difficulty:1,color:"#992b2c",Types:[{Name:"Soins",Desc:"Soigne les alliés dans tous les éléments.",bgPos:"-87px"},{Name:"Amélioration",Desc:"Augmente les points d'action, de mouvement et la puissance avec ses Encouragements.",bgPos:"-179px"},{Name:"Entrave",Desc:"Retire des points d'action, de mouvement, de la puissance et des dommages avec ses Moqueries.",bgPos:"-357px"}]}],Iop:[{Name:"Iop",Title:"Guerrier téméraire",Description:"Les Iops sont des guerriers fonceurs et sans reproche ! Une chose est sûre : les Iops savent faire parler les armes. D'ailleurs, se retrouver pris dans une bagarre au moins une fois par jour est pour eux un signe de bonne santé. Leur tempérament impétueux fait des Iops des paladins de l'extrême, capables du meilleur... comme du pire !",Difficulty:1,color:"#c14100",Types:[{Name:"Dégâts",Desc:"Occasionne d'importants dommages sur une cible ou en zone.",bgPos:"-1px"},{Name:"Amélioration",Desc:"Augmente les dommages, les points d'action, de mouvement et les points de vie.",bgPos:"-179px"},{Name:"Placement",Desc:"Bondit vers une cible, la repousse ou l'attire.",bgPos:"-448px"}]}],Cra:[{Name:"Cra",Title:"Archer",Description:"Les Crâs sont des archers aussi fiers que précis ! Ils font des alliés précieux contre les adeptes de la mêlée franche. Restant à distance, décochant leurs traits empennés dans le moindre orifice laissé sans surveillance, ils ne laissent aucun répit à leurs adversaires !",Difficulty:1,color:"#41740b",Types:[{Name:"Dégâts",Desc:"Occasionne d'importants dommages à longue portée sur une cible ou en zone.",bgPos:"-1px"},{Name:"Entrave",Desc:"Retire des points de mouvement, d'action, de la portée et peut repousser ses adversaires pour les maintenir à distance.",bgPos:"-357px"},{Name:"Amélioration",Desc:"Augmente les chances d'effectuer un coup critique, les dommages et la portée.",bgPos:"-179px"}]}],Feca:[{Name:"Féca",Title:"Protecteur",Description:"Les Fécas sont de loyaux protecteurs toujours sur la défensive. Ils sont appréciés dans les groupes d'aventuriers pour leurs armures élémentaires et leur capacité à encaisser les coups durs. Ils sont également maîtres dans l’art des signes magiques : quand il va y avoir du grabuge, les Fécas sortent leurs glyphes !",Difficulty:1,color:"#f88800",Types:[{Name:"Protection",Desc:"Réduit les dommages subis par ses alliés et les dommages occasionnés par ses adversaires.",bgPos:"-537px"},{Name:"Tank",Desc:"Maintient ses adversaires au contact avec ses sorts et ses glyphes.",bgPos:"-625px"},{Name:"Entrave",Desc:"Vole des caractéristiques et retire des points d'action, de mouvement, et de la portée avec ses sorts et ses glyphes.",bgPos:"-357px"}]}],Sacrieur:[{Name:"Sacrieur",Title:"Berserker",Description:"Les Sacrieurs sont des berserkers qui décuplent leurs forces dès qu'ils sont frappés ! N'ayant pas peur de recevoir des coups, ni de s'exposer aux blessures, ils seront souvent en première ligne, prêts à verser le premier sang ! Le Sacrieur est vraiment le compagnon idéal pour vos longues soirées guerrières…",Difficulty:1,color:"#263e0a",Types:[{Name:"Tank",Desc:"Maintient ses cibles au contact. Vole de la vie et exploite sa Souffrance pour survivre plus longtemps.",bgPos:"-625px"},{Name:"Dégâts",Desc:"Exploite sa Souffrance pour occasionner d'importants dégâts à courte portée.",bgPos:"-1px"},{Name:"Placement",Desc:"Attire et repousse une cible et échange de position avec les alliés et les ennemis. Peut se téléporter.",bgPos:"-448px"}]}],Sadida:[{Name:"Sadida",Title:"Sorcier sylvestre",Description:"Les Sadidas sont des invocateurs qui empoisonnent la vie de leurs ennemis ! Apprivoiser les Ronces pour en faire des armes terrifiantes, confectionner des poupées de guerre et de soins, voilà qui satisfait tout disciple Sadida digne de ce nom.",Difficulty:2,color:"#263e0a",Types:[{Name:"Invocation",Desc:"Invoque des poupées et des arbres qui l'assistent en combat.",bgPos:"-268px"},{Name:"Entrave",Desc:"Retire des points de mouvement et bloque des lignes de vue avec ses invocations.",bgPos:"-357px"},{Name:"Soin",Desc:"Soigne les alliés avec ses sorts et ses invocations.",bgPos:"-87px"}]}],Osamodas:[{Name:"Osamodas",Title:"Invocateur de créatures",Description:"Les Osamodas sont des dompteurs nés ! Ils ont le pouvoir d'invoquer des créatures et sont de remarquables dresseurs. Une rumeur prétend qu'ils taillent leurs vêtements dans la peau de leurs ennemis, mais allez donc leur demander ce qu'il en est… Si vous êtes de son côté, un Osamodas sera aux petits soins pour vous. Dans le cas contraire, peut-être terminerez-vous votre vie sous la forme d'une botte ou d'un bonnet fourré.",Difficulty:2,color:"#004d45",Types:[{Name:"Invocation",Desc:"Invoque des créatures pour combattre à ses côtés.",bgPos:"-268px"},{Name:"Soins",Desc:"Soigne ses alliés et augmente les soins reçus.",bgPos:"-87px"},{Name:"Amélioration",Desc:"Augmente les points d'actions, de mouvement et la puissance de ses alliés.",bgPos:"-179px"}]}],Enutrof:[{Name:"Enutrof",Title:"Chasseur de trésors",Description:"Les Enutrofs sont des chasseurs de trésor avides de kamas, qui malgré leur grand âge courent comme des dragodindes à la vue d'un coffre bien rempli. Ils sont experts dans l’art de ralentir leurs ennemis : ils peuvent ainsi les harceler avant de les assommer à grands coups de pelle le moment venu !",Difficulty:1,color:"#d16701",Types:[{Name:"Entrave",Desc:"Retire des points de mouvement, d'action et de la portée à distance.",bgPos:"-357px"},{Name:"Invocation",Desc:"Invoque des objets animés qui protègent les alliés, poussent les cibles, détectent les entités invisibles et occasionnent des dommages.",bgPos:"-268px"},{Name:"Amélioration",Desc:"Augmente les points de mouvement, d'action et la puissance. Augmente aussi ses propres caractéristiques grâce à ses invocations.",bgPos:"-179px"}]}],Sram:[{Name:"Sram",Title:"Assassin",Description:"Les Srams sont des assassins qui aiment les bourses, rebondies de préférence. Trousser les pans d'une tunique, tâter le fond d'une poche, faire preuve de doigté, palper enfin des bijoux tant convoités avant de poser un piège ou d'asséner un coup mortel, voilà la vie d'un disciple de Sram !",Difficulty:2,color:"#36007b",Types:[{Name:"Dégâts",Desc:"Pose des pièges et peut empoisonner ses adversaires.",bgPos:"-1px"},{Name:"Entrave",Desc:"Vole des caractéristiques et ralentit ses adversaires avec ses sorts, ses pièges et son double.",bgPos:"-357px"},{Name:"Placement",Desc:"Pousse et attire avec ses sorts et ses pièges.",bgPos:"-448px"}]}],Xelor:[{Name:"Xelor",Title:"Maître du temps",Description:"Les Xélors sont des mages qui maîtrisent le temps et toutes les mécaniques qui donnent l'heure : carillons, horloges, et pendules leur obéissent au doigt et à l'œil. Les Xélors jouent donc avec le temps pour ralentir un ennemi ou se téléporter où bon leur semble.",Difficulty:3,color:"#000982",Types:[{Name:"Placement",Desc:"Déplace les alliés et ennemis en manipulant le temps.",bgPos:"-448px"},{Name:"Entrave",Desc:"Retire des points d'action.",bgPos:"-357px"},{Name:"Dégâts",Desc:"Optimise ses dégâts en manipulant le temps.",bgPos:"-1px"}]}],Pandawa:[{Name:"Pandawa",Title:"Bagarreur assoifé",Description:"Les Pandawas sont des guerriers adeptes des arts martiaux qui savent faire des folies de leurs corps ! Ils peuvent même en faire avec le corps des autres… Le Pandawa sait comment soulever les foules, il porte ses alliés sur ses épaules pour mieux les protéger. Quant à ses ennemis, il les enverra valser dans le décor, avant de fêter sa victoire avec une bonne rasade de lait de bambou !",Difficulty:2,color:"#65040d",Types:[{Name:"Placement",Desc:"Porte et jette une cible pour la déplacer. Peut se déplacer avec la cible.",bgPos:"-448px"},{Name:"Dégâts",Desc:"Augmente ses dégâts en passant en état d'ébriété.",bgPos:"-1px"},{Name:"Tank",Desc:"Réduit les dommages subis en passant en état d'ébriété et maintient ses adversaires au contact grâce à ses invocations.",bgPos:"-625px"}]}],Zobal:[{Name:"Zobal",Title:"Guerrier lunatique",Description:"Les Zobals portent des masques magiques qui leur permettent de changer de tête comme de chemise. Tour à tour collants comme de la glu, enragés comme des psychopathes ou partisans de la retraite stratégique, ils s’adaptent à la situation, mais gare aux troubles de la personnalité ! La légende dit que ces êtres imprévisibles seraient bénis par Sadida lui-même.",Difficulty:1,color:"#880002",Types:[{Name:"Tank",Desc:"Utilise son masque de l'intrépide pour voler de la vie et maintenir ses adversaires au contact.",bgPos:"-625px"},{Name:"Protection",Desc:"Applique des boucliers qui absorbent les dommages.",bgPos:"-537px"},{Name:"Dégâts",Desc:"Utilise son masque du psychopathe pour occasionner d'importants dommages.",bgPos:"-1px"}]}],Steamer:[{Name:"Steamer",Title:"Technomage",Description:"Les Steamers ont plus d’une tourelle dans leur boîte à outils. En fins tacticiens, ils utilisent la technomagie pour prendre l’avantage sur le terrain. Ces marinventeurs aux scaphandres rutilants vouent un culte au Grand Oktapodas, le protecteur des océans.",Difficulty:3,color:"#504d2f",Types:[{Name:"Soins",Desc:"Soigne avec ses sorts. Peut soigner davantage et appliquer des boucliers avec ses tourelles Gardienne et Bathyscaphe.",bgPos:"-87px"},{Name:"Placement",Desc:"Pousse, attire et échange de position avec une cible. Peut utiliser ses tourelles Tactirelle et Chalutier pour les mêmes effets.",bgPos:"-448px"},{Name:"Dégâts",Desc:"Occasionne des dommages de plus en plus importants en faisant évoluer ses tourelles Harponneuse et Foreuse.",bgPos:"-1px"}]}],Eliotrope:[{Name:"Eliotrope",Title:"Créateur de portails",Description:"Apparus par accident, les Eliotropes sont des reflets de leur créateur, le Roi-Dieu. Ils se déplacent à la vitesse de l'éclair, disparaissant en un clin d'œil pour réapparaître plus loin. Tout comme les Eliatropes, ils connaissent les secrets du Wakfu.",Difficulty:3,color:"#0d1e29",Types:[{Name:"Placement",Desc:"Les portails permettent aux alliés et aux ennemis de se téléporter.",bgPos:"-448px"},{Name:"Dégâts",Desc:"Les portails augmentent les dommages des sorts qui les traversent.",bgPos:"-1px"},{Name:"Soins",Desc:"Les portails augmentent les soins des sorts qui les traversent.",bgPos:"-87px"}]}],Huppermage:[{Name:"Huppermage",Title:"Mage élémentaliste",Description:"Les Huppermages sont capables de combiner le Feu, l’Air, l’Eau et la Terre pour lancer des sortilèges aux multiples effets. Maîtres des runes élémentaires, ils vénèrent la Balance Krosmique, une force mystérieuse qui tend à maintenir l’équilibre dans l'univers.",Difficulty:2,color:"#2b1d12",Types:[{Name:"Dégâts",Desc:"Occasionne d'importants dommages élémentaires et augmente les dommages subis par ses ennemis.",bgPos:"-1px"},{Name:"Placement",Desc:"Déplace ses ennemis et se déplace en exploitant les éléments.",bgPos:"-448px"},{Name:"Amélioration",Desc:"Augmente ses caractéristiques et celles de ses alliés en utilisant les éléments.",bgPos:"-179px"}]}],Ouginak:[{Name:"Ouginak",Title:"Barbare",Description:"Quand on est un barbare avec un caractère de chienchien, il faut savoir montrer les crocs pour se faire respecter. Le regard fier, le poil brillant, la truffe humide : c'est ainsi que l'Ouginak traverse les épreuves et triomphe de l'adversité. Traquer ses proies sans relâche, laisser éclater sa rage pour écraser ses ennemis et les voir mourir devant soi.",Difficulty:1,color:"#301e01",Types:[{Name:"Dégâts",Desc:"Occasionne d'importants dommages à courte portée.",bgPos:"-1px"},{Name:"Tank",Desc:"Exploite sa Rage pour mieux encaisser les attaques.",bgPos:"-625px"},{Name:"Entrave",Desc:"Retire des points de mouvement et de la fuite et augmente son tacle pour maintenir ses ennemis à proximité.",bgPos:"-357px"}]}],Forgelance:[{Name:"Forgelance",Title:"Champion immortel",Description:"Les Forgelances sont des lanciers qui ne croient qu'en eux-mêmes ! Tirant leurs pouvoirs de la Lance Originelle, ces combattants cherchent à se forger une renommée que la mort elle-même ne saurait effacer. Le Forgelance se laissera convaincre de brandir son arme à vos côtés par des promesses de gloire et de postérité.",Difficulty:2,color:"#3c280f",Types:[{Name:"Dégâts",Desc:"Utilise sa Lance pour occasionner des dommages en zone, à distance comme en mêlée.",bgPos:"-1px"},{Name:"Placement",Desc:"Utilise sa Lance pour se déplacer ou déplacer les autres.",bgPos:"-448px"},{Name:"Protection",Desc:"Applique des boucliers et soigne ses alliés. Augmente les Résistances poussée et critique.",bgPos:"-537px"}]}]},Nm=({classe:e})=>{const n=se[e][0].Difficulty;return De.useEffect(()=>{const t=document.querySelectorAll(".complete"),s=document.querySelectorAll(".incomplete");for(let r=0;r<t.length;r++)t[r].style.width=se[e][0].Types[r]+"%",s[r].style.width=100-se[e][0].Types[r]+"%"}),P.jsxs("div",{id:"LeftContainer",children:[P.jsxs("div",{className:"topDescription",children:[P.jsx("img",{src:`./Classes/${e}/logo.png`,className:"classLogo"}),P.jsxs("div",{className:"titles",children:[P.jsx("h1",{children:se[e][0].Name}),P.jsx("h2",{children:se[e][0].Title}),P.jsxs("div",{className:"difficulty",children:[P.jsx("p",{children:"Difficulté: "}),Array.from({length:n},(t,s)=>P.jsx("span",{className:"star active",children:"★"},s)),Array.from({length:3-n},(t,s)=>P.jsx("span",{className:"star",children:"★"},s))]})]})]}),P.jsx("div",{className:"bar toHide"}),P.jsx("p",{className:"description",children:se[e][0].Description}),P.jsx("div",{className:"bar"}),P.jsxs("div",{className:"caracteristiques",children:[P.jsxs("div",{className:"carac",children:[P.jsx("div",{className:"caracLogo",style:{backgroundPosition:`center ${se[e][0].Types[0].bgPos}`}}),P.jsxs("div",{className:"caracText",children:[P.jsx("p",{className:"caracName",children:se[e][0].Types[0].Name}),P.jsx("p",{className:"caracDesc",children:se[e][0].Types[0].Desc})]})]}),P.jsxs("div",{className:"carac",children:[P.jsx("div",{className:"caracLogo",style:{backgroundPosition:`center ${se[e][0].Types[1].bgPos}`}}),P.jsxs("div",{className:"caracText",children:[P.jsx("p",{className:"caracName",children:se[e][0].Types[1].Name}),P.jsx("p",{className:"caracDesc",children:se[e][0].Types[1].Desc})]})]}),P.jsxs("div",{className:"carac",children:[P.jsx("div",{className:"caracLogo",style:{backgroundPosition:`center ${se[e][0].Types[2].bgPos}`}}),P.jsxs("div",{className:"caracText",children:[P.jsx("p",{className:"caracName",children:se[e][0].Types[2].Name}),P.jsx("p",{className:"caracDesc",children:se[e][0].Types[2].Desc})]})]})]}),P.jsx("div",{className:"bar showOnMobile"})]})},Im=()=>P.jsxs("div",{id:"TopBarWrapper",children:[P.jsxs("div",{className:"BarSideSection",children:[P.jsx("div",{className:"BarSection",children:P.jsx("p",{children:"PaulM#dev"})}),P.jsx("div",{className:"BarSection",children:P.jsx("p",{children:"Jusqu'au 28/09/2024 22:10"})})]}),P.jsxs("div",{className:"BarSideSection",children:[P.jsx("div",{className:"BarSection",children:P.jsx("p",{children:"Serveur: Draconiros"})}),P.jsx("div",{className:"BarSection",children:P.jsxs("p",{children:["Crédits: ",P.jsx("a",{href:"https://www.dofus.com/fr",target:"_blank",children:"Dofus & Ankama"})]})})]})]}),Dm=({number:e})=>P.jsx("div",{id:"transitionElement",style:{background:`linear-gradient(rgba(0, 0, 0, 0.3),  rgba(0, 0, 0, 0.7)), url(/TransitionBGs/${e}.jpg)`},children:P.jsx("img",{className:"logo",src:"/dofusLogo.png"})});function jm(){const[e,n]=De.useState("Roublard"),[t,s]=De.useState("M"),[r,i]=De.useState(1);function l(o){i(Math.floor(Math.random()*4)+1);const a=document.getElementById("transitionElement");a.classList.add("active"),setTimeout(()=>{a.classList.remove("active")},2e3),setTimeout(()=>{n(o)},800)}return P.jsxs("section",{id:"mainWrapper",style:{backgroundImage:`url(./Classes/${e}/1.jpg)`,backgroundColor:`${se[e][0].color}`},children:[P.jsx(Dm,{number:r}),P.jsx(Im,{}),P.jsxs("div",{id:"choose",children:[P.jsx("h1",{className:"hideOnMobile",children:"Choisissez une classe de personnage"}),P.jsx("img",{className:"logoDofus showOnMobile",src:"/dofusLogo.png"})]}),P.jsx(Nm,{classe:e}),P.jsx(zm,{classe:e,gender:t}),P.jsx(Rm,{classe:e}),P.jsx(wm,{TriggerClassChange:l,setGender:s,gender:t})]})}Wr.createRoot(document.getElementById("root")).render(P.jsx(jm,{}));
