const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Viewport3D-BRvlcjl5.js","assets/Preview3DAxisCompass-DLIS1BHp.js","assets/Viewport3DBabylon-DKVbUfXb.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();var wC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xy(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Lp={exports:{}},Tc={},Dp={exports:{}},rn={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function _y(){if(wg)return rn;wg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),_=Symbol.iterator;function x(z){return z===null||typeof z!="object"?null:(z=_&&z[_]||z["@@iterator"],typeof z=="function"?z:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,E={};function g(z,j,Pe){this.props=z,this.context=j,this.refs=E,this.updater=Pe||m}g.prototype.isReactComponent={},g.prototype.setState=function(z,j){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,j,"setState")},g.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function y(){}y.prototype=g.prototype;function P(z,j,Pe){this.props=z,this.context=j,this.refs=E,this.updater=Pe||m}var N=P.prototype=new y;N.constructor=P,b(N,g.prototype),N.isPureReactComponent=!0;var k=Array.isArray,V=Object.prototype.hasOwnProperty,A={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function M(z,j,Pe){var qe,De={},fe=null,xe=null;if(j!=null)for(qe in j.ref!==void 0&&(xe=j.ref),j.key!==void 0&&(fe=""+j.key),j)V.call(j,qe)&&!T.hasOwnProperty(qe)&&(De[qe]=j[qe]);var Re=arguments.length-2;if(Re===1)De.children=Pe;else if(1<Re){for(var Je=Array(Re),Ze=0;Ze<Re;Ze++)Je[Ze]=arguments[Ze+2];De.children=Je}if(z&&z.defaultProps)for(qe in Re=z.defaultProps,Re)De[qe]===void 0&&(De[qe]=Re[qe]);return{$$typeof:n,type:z,key:fe,ref:xe,props:De,_owner:A.current}}function C(z,j){return{$$typeof:n,type:z.type,key:j,ref:z.ref,props:z.props,_owner:z._owner}}function B(z){return typeof z=="object"&&z!==null&&z.$$typeof===n}function O(z){var j={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(Pe){return j[Pe]})}var $=/\/+/g;function W(z,j){return typeof z=="object"&&z!==null&&z.key!=null?O(""+z.key):j.toString(36)}function X(z,j,Pe,qe,De){var fe=typeof z;(fe==="undefined"||fe==="boolean")&&(z=null);var xe=!1;if(z===null)xe=!0;else switch(fe){case"string":case"number":xe=!0;break;case"object":switch(z.$$typeof){case n:case e:xe=!0}}if(xe)return xe=z,De=De(xe),z=qe===""?"."+W(xe,0):qe,k(De)?(Pe="",z!=null&&(Pe=z.replace($,"$&/")+"/"),X(De,j,Pe,"",function(Ze){return Ze})):De!=null&&(B(De)&&(De=C(De,Pe+(!De.key||xe&&xe.key===De.key?"":(""+De.key).replace($,"$&/")+"/")+z)),j.push(De)),1;if(xe=0,qe=qe===""?".":qe+":",k(z))for(var Re=0;Re<z.length;Re++){fe=z[Re];var Je=qe+W(fe,Re);xe+=X(fe,j,Pe,Je,De)}else if(Je=x(z),typeof Je=="function")for(z=Je.call(z),Re=0;!(fe=z.next()).done;)fe=fe.value,Je=qe+W(fe,Re++),xe+=X(fe,j,Pe,Je,De);else if(fe==="object")throw j=String(z),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return xe}function re(z,j,Pe){if(z==null)return z;var qe=[],De=0;return X(z,qe,"","",function(fe){return j.call(Pe,fe,De++)}),qe}function ee(z){if(z._status===-1){var j=z._result;j=j(),j.then(function(Pe){(z._status===0||z._status===-1)&&(z._status=1,z._result=Pe)},function(Pe){(z._status===0||z._status===-1)&&(z._status=2,z._result=Pe)}),z._status===-1&&(z._status=0,z._result=j)}if(z._status===1)return z._result.default;throw z._result}var Z={current:null},ie={transition:null},q={ReactCurrentDispatcher:Z,ReactCurrentBatchConfig:ie,ReactCurrentOwner:A};function ae(){throw Error("act(...) is not supported in production builds of React.")}return rn.Children={map:re,forEach:function(z,j,Pe){re(z,function(){j.apply(this,arguments)},Pe)},count:function(z){var j=0;return re(z,function(){j++}),j},toArray:function(z){return re(z,function(j){return j})||[]},only:function(z){if(!B(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},rn.Component=g,rn.Fragment=t,rn.Profiler=o,rn.PureComponent=P,rn.StrictMode=r,rn.Suspense=h,rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,rn.act=ae,rn.cloneElement=function(z,j,Pe){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var qe=b({},z.props),De=z.key,fe=z.ref,xe=z._owner;if(j!=null){if(j.ref!==void 0&&(fe=j.ref,xe=A.current),j.key!==void 0&&(De=""+j.key),z.type&&z.type.defaultProps)var Re=z.type.defaultProps;for(Je in j)V.call(j,Je)&&!T.hasOwnProperty(Je)&&(qe[Je]=j[Je]===void 0&&Re!==void 0?Re[Je]:j[Je])}var Je=arguments.length-2;if(Je===1)qe.children=Pe;else if(1<Je){Re=Array(Je);for(var Ze=0;Ze<Je;Ze++)Re[Ze]=arguments[Ze+2];qe.children=Re}return{$$typeof:n,type:z.type,key:De,ref:fe,props:qe,_owner:xe}},rn.createContext=function(z){return z={$$typeof:c,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:a,_context:z},z.Consumer=z},rn.createElement=M,rn.createFactory=function(z){var j=M.bind(null,z);return j.type=z,j},rn.createRef=function(){return{current:null}},rn.forwardRef=function(z){return{$$typeof:f,render:z}},rn.isValidElement=B,rn.lazy=function(z){return{$$typeof:p,_payload:{_status:-1,_result:z},_init:ee}},rn.memo=function(z,j){return{$$typeof:u,type:z,compare:j===void 0?null:j}},rn.startTransition=function(z){var j=ie.transition;ie.transition={};try{z()}finally{ie.transition=j}},rn.unstable_act=ae,rn.useCallback=function(z,j){return Z.current.useCallback(z,j)},rn.useContext=function(z){return Z.current.useContext(z)},rn.useDebugValue=function(){},rn.useDeferredValue=function(z){return Z.current.useDeferredValue(z)},rn.useEffect=function(z,j){return Z.current.useEffect(z,j)},rn.useId=function(){return Z.current.useId()},rn.useImperativeHandle=function(z,j,Pe){return Z.current.useImperativeHandle(z,j,Pe)},rn.useInsertionEffect=function(z,j){return Z.current.useInsertionEffect(z,j)},rn.useLayoutEffect=function(z,j){return Z.current.useLayoutEffect(z,j)},rn.useMemo=function(z,j){return Z.current.useMemo(z,j)},rn.useReducer=function(z,j,Pe){return Z.current.useReducer(z,j,Pe)},rn.useRef=function(z){return Z.current.useRef(z)},rn.useState=function(z){return Z.current.useState(z)},rn.useSyncExternalStore=function(z,j,Pe){return Z.current.useSyncExternalStore(z,j,Pe)},rn.useTransition=function(){return Z.current.useTransition()},rn.version="18.3.1",rn}var Eg;function Rm(){return Eg||(Eg=1,Dp.exports=_y()),Dp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tg;function yy(){if(Tg)return Tc;Tg=1;var n=Rm(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,u){var p,_={},x=null,m=null;u!==void 0&&(x=""+u),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(m=h.ref);for(p in h)r.call(h,p)&&!a.hasOwnProperty(p)&&(_[p]=h[p]);if(f&&f.defaultProps)for(p in h=f.defaultProps,h)_[p]===void 0&&(_[p]=h[p]);return{$$typeof:e,type:f,key:x,ref:m,props:_,_owner:o.current}}return Tc.Fragment=t,Tc.jsx=c,Tc.jsxs=c,Tc}var Cg;function Sy(){return Cg||(Cg=1,Lp.exports=yy()),Lp.exports}var w=Sy(),I=Rm();const Gr=xy(I);var od={},Np={exports:{}},$i={},Up={exports:{}},kp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function by(){return Ag||(Ag=1,(function(n){function e(ie,q){var ae=ie.length;ie.push(q);e:for(;0<ae;){var z=ae-1>>>1,j=ie[z];if(0<o(j,q))ie[z]=q,ie[ae]=j,ae=z;else break e}}function t(ie){return ie.length===0?null:ie[0]}function r(ie){if(ie.length===0)return null;var q=ie[0],ae=ie.pop();if(ae!==q){ie[0]=ae;e:for(var z=0,j=ie.length,Pe=j>>>1;z<Pe;){var qe=2*(z+1)-1,De=ie[qe],fe=qe+1,xe=ie[fe];if(0>o(De,ae))fe<j&&0>o(xe,De)?(ie[z]=xe,ie[fe]=ae,z=fe):(ie[z]=De,ie[qe]=ae,z=qe);else if(fe<j&&0>o(xe,ae))ie[z]=xe,ie[fe]=ae,z=fe;else break e}}return q}function o(ie,q){var ae=ie.sortIndex-q.sortIndex;return ae!==0?ae:ie.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,f=c.now();n.unstable_now=function(){return c.now()-f}}var h=[],u=[],p=1,_=null,x=3,m=!1,b=!1,E=!1,g=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(ie){for(var q=t(u);q!==null;){if(q.callback===null)r(u);else if(q.startTime<=ie)r(u),q.sortIndex=q.expirationTime,e(h,q);else break;q=t(u)}}function k(ie){if(E=!1,N(ie),!b)if(t(h)!==null)b=!0,ee(V);else{var q=t(u);q!==null&&Z(k,q.startTime-ie)}}function V(ie,q){b=!1,E&&(E=!1,y(M),M=-1),m=!0;var ae=x;try{for(N(q),_=t(h);_!==null&&(!(_.expirationTime>q)||ie&&!O());){var z=_.callback;if(typeof z=="function"){_.callback=null,x=_.priorityLevel;var j=z(_.expirationTime<=q);q=n.unstable_now(),typeof j=="function"?_.callback=j:_===t(h)&&r(h),N(q)}else r(h);_=t(h)}if(_!==null)var Pe=!0;else{var qe=t(u);qe!==null&&Z(k,qe.startTime-q),Pe=!1}return Pe}finally{_=null,x=ae,m=!1}}var A=!1,T=null,M=-1,C=5,B=-1;function O(){return!(n.unstable_now()-B<C)}function $(){if(T!==null){var ie=n.unstable_now();B=ie;var q=!0;try{q=T(!0,ie)}finally{q?W():(A=!1,T=null)}}else A=!1}var W;if(typeof P=="function")W=function(){P($)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,re=X.port2;X.port1.onmessage=$,W=function(){re.postMessage(null)}}else W=function(){g($,0)};function ee(ie){T=ie,A||(A=!0,W())}function Z(ie,q){M=g(function(){ie(n.unstable_now())},q)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(ie){ie.callback=null},n.unstable_continueExecution=function(){b||m||(b=!0,ee(V))},n.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<ie?Math.floor(1e3/ie):5},n.unstable_getCurrentPriorityLevel=function(){return x},n.unstable_getFirstCallbackNode=function(){return t(h)},n.unstable_next=function(ie){switch(x){case 1:case 2:case 3:var q=3;break;default:q=x}var ae=x;x=q;try{return ie()}finally{x=ae}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(ie,q){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var ae=x;x=ie;try{return q()}finally{x=ae}},n.unstable_scheduleCallback=function(ie,q,ae){var z=n.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?z+ae:z):ae=z,ie){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=ae+j,ie={id:p++,callback:q,priorityLevel:ie,startTime:ae,expirationTime:j,sortIndex:-1},ae>z?(ie.sortIndex=ae,e(u,ie),t(h)===null&&ie===t(u)&&(E?(y(M),M=-1):E=!0,Z(k,ae-z))):(ie.sortIndex=j,e(h,ie),b||m||(b=!0,ee(V))),ie},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(ie){var q=x;return function(){var ae=x;x=q;try{return ie.apply(this,arguments)}finally{x=ae}}}})(kp)),kp}var Rg;function My(){return Rg||(Rg=1,Up.exports=by()),Up.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pg;function wy(){if(Pg)return $i;Pg=1;var n=Rm(),e=My();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){c(i,s),c(i+"Capture",s)}function c(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,u=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},_={};function x(i){return h.call(_,i)?!0:h.call(p,i)?!1:u.test(i)?_[i]=!0:(p[i]=!0,!1)}function m(i,s,l,d){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function b(i,s,l,d){if(s===null||typeof s>"u"||m(i,s,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function E(i,s,l,d,v,S,L){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=v,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=S,this.removeEmptyString=L}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){g[i]=new E(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];g[s]=new E(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){g[i]=new E(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){g[i]=new E(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){g[i]=new E(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){g[i]=new E(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){g[i]=new E(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){g[i]=new E(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){g[i]=new E(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function P(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(y,P);g[s]=new E(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(y,P);g[s]=new E(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(y,P);g[s]=new E(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){g[i]=new E(i,1,!1,i.toLowerCase(),null,!1,!1)}),g.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){g[i]=new E(i,1,!1,i.toLowerCase(),null,!0,!0)});function N(i,s,l,d){var v=g.hasOwnProperty(s)?g[s]:null;(v!==null?v.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(b(s,l,v,d)&&(l=null),d||v===null?x(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):v.mustUseProperty?i[v.propertyName]=l===null?v.type===3?!1:"":l:(s=v.attributeName,d=v.attributeNamespace,l===null?i.removeAttribute(s):(v=v.type,l=v===3||v===4&&l===!0?"":""+l,d?i.setAttributeNS(d,s,l):i.setAttribute(s,l))))}var k=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),A=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),O=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),Z=Symbol.for("react.offscreen"),ie=Symbol.iterator;function q(i){return i===null||typeof i!="object"?null:(i=ie&&i[ie]||i["@@iterator"],typeof i=="function"?i:null)}var ae=Object.assign,z;function j(i){if(z===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);z=s&&s[1]||""}return`
`+z+i}var Pe=!1;function qe(i,s){if(!i||Pe)return"";Pe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(be){var d=be}Reflect.construct(i,[],s)}else{try{s.call()}catch(be){d=be}i.call(s.prototype)}else{try{throw Error()}catch(be){d=be}i()}}catch(be){if(be&&d&&typeof be.stack=="string"){for(var v=be.stack.split(`
`),S=d.stack.split(`
`),L=v.length-1,Y=S.length-1;1<=L&&0<=Y&&v[L]!==S[Y];)Y--;for(;1<=L&&0<=Y;L--,Y--)if(v[L]!==S[Y]){if(L!==1||Y!==1)do if(L--,Y--,0>Y||v[L]!==S[Y]){var te=`
`+v[L].replace(" at new "," at ");return i.displayName&&te.includes("<anonymous>")&&(te=te.replace("<anonymous>",i.displayName)),te}while(1<=L&&0<=Y);break}}}finally{Pe=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?j(i):""}function De(i){switch(i.tag){case 5:return j(i.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return i=qe(i.type,!1),i;case 11:return i=qe(i.type.render,!1),i;case 1:return i=qe(i.type,!0),i;default:return""}}function fe(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case T:return"Fragment";case A:return"Portal";case C:return"Profiler";case M:return"StrictMode";case W:return"Suspense";case X:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case O:return(i.displayName||"Context")+".Consumer";case B:return(i._context.displayName||"Context")+".Provider";case $:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case re:return s=i.displayName||null,s!==null?s:fe(i.type)||"Memo";case ee:s=i._payload,i=i._init;try{return fe(i(s))}catch{}}return null}function xe(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fe(s);case 8:return s===M?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Re(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Je(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ze(i){var s=Je(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),d=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var v=l.get,S=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return v.call(this)},set:function(L){d=""+L,S.call(this,L)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(L){d=""+L},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function vt(i){i._valueTracker||(i._valueTracker=Ze(i))}function Qt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),d="";return i&&(d=Je(i)?i.checked?"true":"false":i.value),i=d,i!==l?(s.setValue(i),!0):!1}function $t(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Bt(i,s){var l=s.checked;return ae({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Ot(i,s){var l=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;l=Re(s.value!=null?s.value:l),i._wrapperState={initialChecked:d,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Vt(i,s){s=s.checked,s!=null&&N(i,"checked",s,!1)}function Xt(i,s){Vt(i,s);var l=Re(s.value),d=s.type;if(l!=null)d==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(d==="submit"||d==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Gt(i,s.type,l):s.hasOwnProperty("defaultValue")&&Gt(i,s.type,Re(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function J(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Gt(i,s,l){(s!=="number"||$t(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Lt=Array.isArray;function qt(i,s,l,d){if(i=i.options,s){s={};for(var v=0;v<l.length;v++)s["$"+l[v]]=!0;for(l=0;l<i.length;l++)v=s.hasOwnProperty("$"+i[l].value),i[l].selected!==v&&(i[l].selected=v),v&&d&&(i[l].defaultSelected=!0)}else{for(l=""+Re(l),s=null,v=0;v<i.length;v++){if(i[v].value===l){i[v].selected=!0,d&&(i[v].defaultSelected=!0);return}s!==null||i[v].disabled||(s=i[v])}s!==null&&(s.selected=!0)}}function lt(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function H(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(Lt(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:Re(l)}}function R(i,s){var l=Re(s.value),d=Re(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),d!=null&&(i.defaultValue=""+d)}function le(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function Ce(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ne(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?Ce(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Te,st=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,d,v){MSApp.execUnsafeLocalFunction(function(){return i(s,l,d,v)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Te=Te||document.createElement("div"),Te.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Te.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function We(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var ct={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pt=["Webkit","ms","Moz","O"];Object.keys(ct).forEach(function(i){pt.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),ct[s]=ct[i]})});function Ue(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||ct.hasOwnProperty(i)&&ct[i]?(""+s).trim():s+"px"}function Fe(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var d=l.indexOf("--")===0,v=Ue(l,s[l],d);l==="float"&&(l="cssFloat"),d?i.setProperty(l,v):i[l]=v}}var gt=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function it(i,s){if(s){if(gt[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function et(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=null;function ne(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ge=null,Oe=null,tt=null;function ke(i){if(i=Dr(i)){if(typeof Ge!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Ps(s),Ge(i.stateNode,i.type,s))}}function Ee(i){Oe?tt?tt.push(i):tt=[i]:Oe=i}function ot(){if(Oe){var i=Oe,s=tt;if(tt=Oe=null,ke(i),s)for(i=0;i<s.length;i++)ke(s[i])}}function Nt(i,s){return i(s)}function nn(){}var Kt=!1;function Zn(i,s,l){if(Kt)return i(s,l);Kt=!0;try{return Nt(i,s,l)}finally{Kt=!1,(Oe!==null||tt!==null)&&(nn(),ot())}}function xn(i,s){var l=i.stateNode;if(l===null)return null;var d=Ps(l);if(d===null)return null;l=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(i=i.type,d=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!d;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Gi=!1;if(f)try{var Ii={};Object.defineProperty(Ii,"passive",{get:function(){Gi=!0}}),window.addEventListener("test",Ii,Ii),window.removeEventListener("test",Ii,Ii)}catch{Gi=!1}function to(i,s,l,d,v,S,L,Y,te){var be=Array.prototype.slice.call(arguments,3);try{s.apply(l,be)}catch($e){this.onError($e)}}var Li=!1,wr=null,En=!1,Jn=null,Si={onError:function(i){Li=!0,wr=i}};function no(i,s,l,d,v,S,L,Y,te){Li=!1,wr=null,to.apply(Si,arguments)}function Er(i,s,l,d,v,S,L,Y,te){if(no.apply(this,arguments),Li){if(Li){var be=wr;Li=!1,wr=null}else throw Error(t(198));En||(En=!0,Jn=be)}}function li(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function Wn(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Yr(i){if(li(i)!==i)throw Error(t(188))}function bs(i){var s=i.alternate;if(!s){if(s=li(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,d=s;;){var v=l.return;if(v===null)break;var S=v.alternate;if(S===null){if(d=v.return,d!==null){l=d;continue}break}if(v.child===S.child){for(S=v.child;S;){if(S===l)return Yr(v),i;if(S===d)return Yr(v),s;S=S.sibling}throw Error(t(188))}if(l.return!==d.return)l=v,d=S;else{for(var L=!1,Y=v.child;Y;){if(Y===l){L=!0,l=v,d=S;break}if(Y===d){L=!0,d=v,l=S;break}Y=Y.sibling}if(!L){for(Y=S.child;Y;){if(Y===l){L=!0,l=S,d=v;break}if(Y===d){L=!0,d=S,l=v;break}Y=Y.sibling}if(!L)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function fi(i){return i=bs(i),i!==null?bi(i):null}function bi(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=bi(i);if(s!==null)return s;i=i.sibling}return null}var Qn=e.unstable_scheduleCallback,Mi=e.unstable_cancelCallback,io=e.unstable_shouldYield,ei=e.unstable_requestPaint,U=e.unstable_now,ue=e.unstable_getCurrentPriorityLevel,ve=e.unstable_ImmediatePriority,he=e.unstable_UserBlockingPriority,pe=e.unstable_NormalPriority,G=e.unstable_LowPriority,Q=e.unstable_IdlePriority,se=null,_e=null;function we(i){if(_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(se,i,void 0,(i.current.flags&128)===128)}catch{}}var Ae=Math.clz32?Math.clz32:Ye,Ve=Math.log,Le=Math.LN2;function Ye(i){return i>>>=0,i===0?32:31-(Ve(i)/Le|0)|0}var Mt=64,ht=4194304;function at(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function xt(i,s){var l=i.pendingLanes;if(l===0)return 0;var d=0,v=i.suspendedLanes,S=i.pingedLanes,L=l&268435455;if(L!==0){var Y=L&~v;Y!==0?d=at(Y):(S&=L,S!==0&&(d=at(S)))}else L=l&~v,L!==0?d=at(L):S!==0&&(d=at(S));if(d===0)return 0;if(s!==0&&s!==d&&(s&v)===0&&(v=d&-d,S=s&-s,v>=S||v===16&&(S&4194240)!==0))return s;if((d&4)!==0&&(d|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=d;0<s;)l=31-Ae(s),v=1<<l,d|=i[l],s&=~v;return d}function Qe(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hn(i,s){for(var l=i.suspendedLanes,d=i.pingedLanes,v=i.expirationTimes,S=i.pendingLanes;0<S;){var L=31-Ae(S),Y=1<<L,te=v[L];te===-1?((Y&l)===0||(Y&d)!==0)&&(v[L]=Qe(Y,s)):te<=s&&(i.expiredLanes|=Y),S&=~Y}}function yt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Nn(){var i=Mt;return Mt<<=1,(Mt&4194240)===0&&(Mt=64),i}function an(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function Dt(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-Ae(s),i[s]=l}function sn(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var d=i.eventTimes;for(i=i.expirationTimes;0<l;){var v=31-Ae(l),S=1<<v;s[v]=0,d[v]=-1,i[v]=-1,l&=~S}}function en(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var d=31-Ae(l),v=1<<d;v&s|i[d]&s&&(i[d]|=s),l&=~v}}var At=0;function An(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Sn,wi,Di,ro,Yo,qr=!1,Oa=[],Ei=null,Kr=null,Wi=null,qo=new Map,Zr=new Map,Jr=[],Ba="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qc(i,s){switch(i){case"focusin":case"focusout":Ei=null;break;case"dragenter":case"dragleave":Kr=null;break;case"mouseover":case"mouseout":Wi=null;break;case"pointerover":case"pointerout":qo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zr.delete(s.pointerId)}}function Qr(i,s,l,d,v,S){return i===null||i.nativeEvent!==S?(i={blockedOn:s,domEventName:l,eventSystemFlags:d,nativeEvent:S,targetContainers:[v]},s!==null&&(s=Dr(s),s!==null&&wi(s)),i):(i.eventSystemFlags|=d,s=i.targetContainers,v!==null&&s.indexOf(v)===-1&&s.push(v),i)}function mf(i,s,l,d,v){switch(s){case"focusin":return Ei=Qr(Ei,i,s,l,d,v),!0;case"dragenter":return Kr=Qr(Kr,i,s,l,d,v),!0;case"mouseover":return Wi=Qr(Wi,i,s,l,d,v),!0;case"pointerover":var S=v.pointerId;return qo.set(S,Qr(qo.get(S)||null,i,s,l,d,v)),!0;case"gotpointercapture":return S=v.pointerId,Zr.set(S,Qr(Zr.get(S)||null,i,s,l,d,v)),!0}return!1}function Ms(i){var s=Tn(i.target);if(s!==null){var l=li(s);if(l!==null){if(s=l.tag,s===13){if(s=Wn(l),s!==null){i.blockedOn=s,Yo(i.priority,function(){Di(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function za(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=$a(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var d=new l.constructor(l.type,l);Ct=d,l.target.dispatchEvent(d),Ct=null}else return s=Dr(l),s!==null&&wi(s),i.blockedOn=l,!1;s.shift()}return!0}function ws(i,s,l){za(i)&&l.delete(s)}function gf(){qr=!1,Ei!==null&&za(Ei)&&(Ei=null),Kr!==null&&za(Kr)&&(Kr=null),Wi!==null&&za(Wi)&&(Wi=null),qo.forEach(ws),Zr.forEach(ws)}function so(i,s){i.blockedOn===s&&(i.blockedOn=null,qr||(qr=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,gf)))}function Ko(i){function s(v){return so(v,i)}if(0<Oa.length){so(Oa[0],i);for(var l=1;l<Oa.length;l++){var d=Oa[l];d.blockedOn===i&&(d.blockedOn=null)}}for(Ei!==null&&so(Ei,i),Kr!==null&&so(Kr,i),Wi!==null&&so(Wi,i),qo.forEach(s),Zr.forEach(s),l=0;l<Jr.length;l++)d=Jr[l],d.blockedOn===i&&(d.blockedOn=null);for(;0<Jr.length&&(l=Jr[0],l.blockedOn===null);)Ms(l),l.blockedOn===null&&Jr.shift()}var oo=k.ReactCurrentBatchConfig,pi=!0;function vf(i,s,l,d){var v=At,S=oo.transition;oo.transition=null;try{At=1,Zo(i,s,l,d)}finally{At=v,oo.transition=S}}function Es(i,s,l,d){var v=At,S=oo.transition;oo.transition=null;try{At=4,Zo(i,s,l,d)}finally{At=v,oo.transition=S}}function Zo(i,s,l,d){if(pi){var v=$a(i,s,l,d);if(v===null)mt(i,s,d,Jo,l),Qc(i,d);else if(mf(v,i,s,l,d))d.stopPropagation();else if(Qc(i,d),s&4&&-1<Ba.indexOf(i)){for(;v!==null;){var S=Dr(v);if(S!==null&&Sn(S),S=$a(i,s,l,d),S===null&&mt(i,s,d,Jo,l),S===v)break;v=S}v!==null&&d.stopPropagation()}else mt(i,s,d,null,l)}}var Jo=null;function $a(i,s,l,d){if(Jo=null,i=ne(d),i=Tn(i),i!==null)if(s=li(i),s===null)i=null;else if(l=s.tag,l===13){if(i=Wn(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return Jo=i,null}function Qo(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ue()){case ve:return 1;case he:return 4;case pe:case G:return 16;case Q:return 536870912;default:return 16}default:return 16}}var Tr=null,ao=null,ea=null;function lo(){if(ea)return ea;var i,s=ao,l=s.length,d,v="value"in Tr?Tr.value:Tr.textContent,S=v.length;for(i=0;i<l&&s[i]===v[i];i++);var L=l-i;for(d=1;d<=L&&s[l-d]===v[S-d];d++);return ea=v.slice(i,1<d?1-d:void 0)}function ta(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function co(){return!0}function ql(){return!1}function Bn(i){function s(l,d,v,S,L){this._reactName=l,this._targetInst=v,this.type=d,this.nativeEvent=S,this.target=L,this.currentTarget=null;for(var Y in i)i.hasOwnProperty(Y)&&(l=i[Y],this[Y]=l?l(S):S[Y]);return this.isDefaultPrevented=(S.defaultPrevented!=null?S.defaultPrevented:S.returnValue===!1)?co:ql,this.isPropagationStopped=ql,this}return ae(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=co)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=co)},persist:function(){},isPersistent:co}),s}var es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ts=Bn(es),ji=ae({},es,{view:0,detail:0}),sr=Bn(ji),Ts,uo,or,na=ae({},ji,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ti,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==or&&(or&&i.type==="mousemove"?(Ts=i.screenX-or.screenX,uo=i.screenY-or.screenY):uo=Ts=0,or=i),Ts)},movementY:function(i){return"movementY"in i?i.movementY:uo}}),Cr=Bn(na),Ar=ae({},na,{dataTransfer:0}),eu=Bn(Ar),Ni=ae({},ji,{relatedTarget:0}),Rt=Bn(Ni),xf=ae({},es,{animationName:0,elapsedTime:0,pseudoElement:0}),_f=Bn(xf),Kl=ae({},es,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),yf=Bn(Kl),tu=ae({},es,{data:0}),Zl=Bn(tu),nu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iu(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=bf[i])?!!s[i]:!1}function ti(){return iu}var ru=ae({},ji,{key:function(i){if(i.key){var s=nu[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=ta(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Sf[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ti,charCode:function(i){return i.type==="keypress"?ta(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?ta(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),su=Bn(ru),bn=ae({},na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jl=Bn(bn),ou=ae({},ji,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ti}),au=Bn(ou),Va=ae({},es,{propertyName:0,elapsedTime:0,pseudoElement:0}),fo=Bn(Va),Ha=ae({},na,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Ga=Bn(Ha),lu=[9,13,27,32],Wa=f&&"CompositionEvent"in window,po=null;f&&"documentMode"in document&&(po=document.documentMode);var ho=f&&"TextEvent"in window&&!po,Ql=f&&(!Wa||po&&8<po&&11>=po),cu=" ",uu=!1;function ec(i,s){switch(i){case"keyup":return lu.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tc(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Cs=!1;function du(i,s){switch(i){case"compositionend":return tc(s);case"keypress":return s.which!==32?null:(uu=!0,cu);case"textInput":return i=s.data,i===cu&&uu?null:i;default:return null}}function fu(i,s){if(Cs)return i==="compositionend"||!Wa&&ec(i,s)?(i=lo(),ea=ao=Tr=null,Cs=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Ql&&s.locale!=="ko"?null:s.data;default:return null}}var pu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nc(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!pu[i.type]:s==="textarea"}function mo(i,s,l,d){Ee(d),s=ln(s,"onChange"),0<s.length&&(l=new ts("onChange","change",null,l,d),i.push({event:l,listeners:s}))}var ar=null,Rr=null;function hu(i){Be(i,0)}function ia(i){var s=ur(i);if(Qt(s))return i}function ja(i,s){if(i==="change")return s}var ra=!1;if(f){var Xa;if(f){var go="oninput"in document;if(!go){var Pr=document.createElement("div");Pr.setAttribute("oninput","return;"),go=typeof Pr.oninput=="function"}Xa=go}else Xa=!1;ra=Xa&&(!document.documentMode||9<document.documentMode)}function ic(){ar&&(ar.detachEvent("onpropertychange",rc),Rr=ar=null)}function rc(i){if(i.propertyName==="value"&&ia(Rr)){var s=[];mo(s,Rr,i,ne(i)),Zn(hu,s)}}function mu(i,s,l){i==="focusin"?(ic(),ar=s,Rr=l,ar.attachEvent("onpropertychange",rc)):i==="focusout"&&ic()}function Mf(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return ia(Rr)}function wf(i,s){if(i==="click")return ia(s)}function Ef(i,s){if(i==="input"||i==="change")return ia(s)}function Tf(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Xi=typeof Object.is=="function"?Object.is:Tf;function sa(i,s){if(Xi(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),d=Object.keys(s);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var v=l[d];if(!h.call(s,v)||!Xi(i[v],s[v]))return!1}return!0}function sc(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function lr(i,s){var l=sc(i);i=0;for(var d;l;){if(l.nodeType===3){if(d=i+l.textContent.length,i<=s&&d>=s)return{node:l,offset:s-i};i=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=sc(l)}}function oc(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?oc(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function cr(){for(var i=window,s=$t();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=$t(i.document)}return s}function ns(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function vo(i){var s=cr(),l=i.focusedElem,d=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&oc(l.ownerDocument.documentElement,l)){if(d!==null&&ns(l)){if(s=d.start,i=d.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var v=l.textContent.length,S=Math.min(d.start,v);d=d.end===void 0?S:Math.min(d.end,v),!i.extend&&S>d&&(v=d,d=S,S=v),v=lr(l,S);var L=lr(l,d);v&&L&&(i.rangeCount!==1||i.anchorNode!==v.node||i.anchorOffset!==v.offset||i.focusNode!==L.node||i.focusOffset!==L.offset)&&(s=s.createRange(),s.setStart(v.node,v.offset),i.removeAllRanges(),S>d?(i.addRange(s),i.extend(L.node,L.offset)):(s.setEnd(L.node,L.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var gu=f&&"documentMode"in document&&11>=document.documentMode,Yi=null,Ya=null,xo=null,qa=!1;function zn(i,s,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;qa||Yi==null||Yi!==$t(d)||(d=Yi,"selectionStart"in d&&ns(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),xo&&sa(xo,d)||(xo=d,d=ln(Ya,"onSelect"),0<d.length&&(s=new ts("onSelect","select",null,s,l),i.push({event:s,listeners:d}),s.target=Yi)))}function Ir(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var _o={animationend:Ir("Animation","AnimationEnd"),animationiteration:Ir("Animation","AnimationIteration"),animationstart:Ir("Animation","AnimationStart"),transitionend:Ir("Transition","TransitionEnd")},Ka={},ac={};f&&(ac=document.createElement("div").style,"AnimationEvent"in window||(delete _o.animationend.animation,delete _o.animationiteration.animation,delete _o.animationstart.animation),"TransitionEvent"in window||delete _o.transitionend.transition);function oa(i){if(Ka[i])return Ka[i];if(!_o[i])return i;var s=_o[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in ac)return Ka[i]=s[l];return i}var lc=oa("animationend"),cc=oa("animationiteration"),vu=oa("animationstart"),xu=oa("transitionend"),_u=new Map,yu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function D(i,s){_u.set(i,s),a(s,[i])}for(var F=0;F<yu.length;F++){var K=yu[F],oe=K.toLowerCase(),de=K[0].toUpperCase()+K.slice(1);D(oe,"on"+de)}D(lc,"onAnimationEnd"),D(cc,"onAnimationIteration"),D(vu,"onAnimationStart"),D("dblclick","onDoubleClick"),D("focusin","onFocus"),D("focusout","onBlur"),D(xu,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ie="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Me=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ie));function je(i,s,l){var d=i.type||"unknown-event";i.currentTarget=l,Er(d,s,void 0,i),i.currentTarget=null}function Be(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var d=i[l],v=d.event;d=d.listeners;e:{var S=void 0;if(s)for(var L=d.length-1;0<=L;L--){var Y=d[L],te=Y.instance,be=Y.currentTarget;if(Y=Y.listener,te!==S&&v.isPropagationStopped())break e;je(v,Y,be),S=te}else for(L=0;L<d.length;L++){if(Y=d[L],te=Y.instance,be=Y.currentTarget,Y=Y.listener,te!==S&&v.isPropagationStopped())break e;je(v,Y,be),S=te}}}if(En)throw i=Jn,En=!1,Jn=null,i}function He(i,s){var l=s[rs];l===void 0&&(l=s[rs]=new Set);var d=i+"__bubble";l.has(d)||(Ut(s,i,2,!1),l.add(d))}function dt(i,s,l){var d=0;s&&(d|=4),Ut(l,i,d,s)}var Zt="_reactListening"+Math.random().toString(36).slice(2);function Pt(i){if(!i[Zt]){i[Zt]=!0,r.forEach(function(l){l!=="selectionchange"&&(Me.has(l)||dt(l,!1,i),dt(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Zt]||(s[Zt]=!0,dt("selectionchange",!1,s))}}function Ut(i,s,l,d){switch(Qo(s)){case 1:var v=vf;break;case 4:v=Es;break;default:v=Zo}l=v.bind(null,s,l,i),v=void 0,!Gi||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(v=!0),d?v!==void 0?i.addEventListener(s,l,{capture:!0,passive:v}):i.addEventListener(s,l,!0):v!==void 0?i.addEventListener(s,l,{passive:v}):i.addEventListener(s,l,!1)}function mt(i,s,l,d,v){var S=d;if((s&1)===0&&(s&2)===0&&d!==null)e:for(;;){if(d===null)return;var L=d.tag;if(L===3||L===4){var Y=d.stateNode.containerInfo;if(Y===v||Y.nodeType===8&&Y.parentNode===v)break;if(L===4)for(L=d.return;L!==null;){var te=L.tag;if((te===3||te===4)&&(te=L.stateNode.containerInfo,te===v||te.nodeType===8&&te.parentNode===v))return;L=L.return}for(;Y!==null;){if(L=Tn(Y),L===null)return;if(te=L.tag,te===5||te===6){d=S=L;continue e}Y=Y.parentNode}}d=d.return}Zn(function(){var be=S,$e=ne(l),Xe=[];e:{var ze=_u.get(i);if(ze!==void 0){var ft=ts,St=i;switch(i){case"keypress":if(ta(l)===0)break e;case"keydown":case"keyup":ft=su;break;case"focusin":St="focus",ft=Rt;break;case"focusout":St="blur",ft=Rt;break;case"beforeblur":case"afterblur":ft=Rt;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=Cr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=eu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=au;break;case lc:case cc:case vu:ft=_f;break;case xu:ft=fo;break;case"scroll":ft=sr;break;case"wheel":ft=Ga;break;case"copy":case"cut":case"paste":ft=yf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=Jl}var wt=(s&4)!==0,On=!wt&&i==="scroll",me=wt?ze!==null?ze+"Capture":null:ze;wt=[];for(var ce=be,ye;ce!==null;){ye=ce;var Ke=ye.stateNode;if(ye.tag===5&&Ke!==null&&(ye=Ke,me!==null&&(Ke=xn(ce,me),Ke!=null&&wt.push(jt(ce,Ke,ye)))),On)break;ce=ce.return}0<wt.length&&(ze=new ft(ze,St,null,l,$e),Xe.push({event:ze,listeners:wt}))}}if((s&7)===0){e:{if(ze=i==="mouseover"||i==="pointerover",ft=i==="mouseout"||i==="pointerout",ze&&l!==Ct&&(St=l.relatedTarget||l.fromElement)&&(Tn(St)||St[ni]))break e;if((ft||ze)&&(ze=$e.window===$e?$e:(ze=$e.ownerDocument)?ze.defaultView||ze.parentWindow:window,ft?(St=l.relatedTarget||l.toElement,ft=be,St=St?Tn(St):null,St!==null&&(On=li(St),St!==On||St.tag!==5&&St.tag!==6)&&(St=null)):(ft=null,St=be),ft!==St)){if(wt=Cr,Ke="onMouseLeave",me="onMouseEnter",ce="mouse",(i==="pointerout"||i==="pointerover")&&(wt=Jl,Ke="onPointerLeave",me="onPointerEnter",ce="pointer"),On=ft==null?ze:ur(ft),ye=St==null?ze:ur(St),ze=new wt(Ke,ce+"leave",ft,l,$e),ze.target=On,ze.relatedTarget=ye,Ke=null,Tn($e)===be&&(wt=new wt(me,ce+"enter",St,l,$e),wt.target=ye,wt.relatedTarget=On,Ke=wt),On=Ke,ft&&St)t:{for(wt=ft,me=St,ce=0,ye=wt;ye;ye=Wt(ye))ce++;for(ye=0,Ke=me;Ke;Ke=Wt(Ke))ye++;for(;0<ce-ye;)wt=Wt(wt),ce--;for(;0<ye-ce;)me=Wt(me),ye--;for(;ce--;){if(wt===me||me!==null&&wt===me.alternate)break t;wt=Wt(wt),me=Wt(me)}wt=null}else wt=null;ft!==null&&mn(Xe,ze,ft,wt,!1),St!==null&&On!==null&&mn(Xe,On,St,wt,!0)}}e:{if(ze=be?ur(be):window,ft=ze.nodeName&&ze.nodeName.toLowerCase(),ft==="select"||ft==="input"&&ze.type==="file")var Tt=ja;else if(nc(ze))if(ra)Tt=Ef;else{Tt=Mf;var kt=mu}else(ft=ze.nodeName)&&ft.toLowerCase()==="input"&&(ze.type==="checkbox"||ze.type==="radio")&&(Tt=wf);if(Tt&&(Tt=Tt(i,be))){mo(Xe,Tt,l,$e);break e}kt&&kt(i,ze,be),i==="focusout"&&(kt=ze._wrapperState)&&kt.controlled&&ze.type==="number"&&Gt(ze,"number",ze.value)}switch(kt=be?ur(be):window,i){case"focusin":(nc(kt)||kt.contentEditable==="true")&&(Yi=kt,Ya=be,xo=null);break;case"focusout":xo=Ya=Yi=null;break;case"mousedown":qa=!0;break;case"contextmenu":case"mouseup":case"dragend":qa=!1,zn(Xe,l,$e);break;case"selectionchange":if(gu)break;case"keydown":case"keyup":zn(Xe,l,$e)}var Ft;if(Wa)e:{switch(i){case"compositionstart":var Ht="onCompositionStart";break e;case"compositionend":Ht="onCompositionEnd";break e;case"compositionupdate":Ht="onCompositionUpdate";break e}Ht=void 0}else Cs?ec(i,l)&&(Ht="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Ht="onCompositionStart");Ht&&(Ql&&l.locale!=="ko"&&(Cs||Ht!=="onCompositionStart"?Ht==="onCompositionEnd"&&Cs&&(Ft=lo()):(Tr=$e,ao="value"in Tr?Tr.value:Tr.textContent,Cs=!0)),kt=ln(be,Ht),0<kt.length&&(Ht=new Zl(Ht,i,null,l,$e),Xe.push({event:Ht,listeners:kt}),Ft?Ht.data=Ft:(Ft=tc(l),Ft!==null&&(Ht.data=Ft)))),(Ft=ho?du(i,l):fu(i,l))&&(be=ln(be,"onBeforeInput"),0<be.length&&($e=new Zl("onBeforeInput","beforeinput",null,l,$e),Xe.push({event:$e,listeners:be}),$e.data=Ft))}Be(Xe,s)})}function jt(i,s,l){return{instance:i,listener:s,currentTarget:l}}function ln(i,s){for(var l=s+"Capture",d=[];i!==null;){var v=i,S=v.stateNode;v.tag===5&&S!==null&&(v=S,S=xn(i,l),S!=null&&d.unshift(jt(i,S,v)),S=xn(i,s),S!=null&&d.push(jt(i,S,v))),i=i.return}return d}function Wt(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function mn(i,s,l,d,v){for(var S=s._reactName,L=[];l!==null&&l!==d;){var Y=l,te=Y.alternate,be=Y.stateNode;if(te!==null&&te===d)break;Y.tag===5&&be!==null&&(Y=be,v?(te=xn(l,S),te!=null&&L.unshift(jt(l,te,Y))):v||(te=xn(l,S),te!=null&&L.push(jt(l,te,Y)))),l=l.return}L.length!==0&&i.push({event:s,listeners:L})}var Mn=/\r\n?/g,Ui=/\u0000|\uFFFD/g;function Un(i){return(typeof i=="string"?i:""+i).replace(Mn,`
`).replace(Ui,"")}function is(i,s,l){if(s=Un(s),Un(i)!==s&&l)throw Error(t(425))}function As(){}var Rs=null,aa=null;function yo(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Za=typeof setTimeout=="function"?setTimeout:void 0,uc=typeof clearTimeout=="function"?clearTimeout:void 0,Su=typeof Promise=="function"?Promise:void 0,Cf=typeof queueMicrotask=="function"?queueMicrotask:typeof Su<"u"?function(i){return Su.resolve(null).then(i).catch(Af)}:Za;function Af(i){setTimeout(function(){throw i})}function Ja(i,s){var l=s,d=0;do{var v=l.nextSibling;if(i.removeChild(l),v&&v.nodeType===8)if(l=v.data,l==="/$"){if(d===0){i.removeChild(v),Ko(s);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=v}while(l);Ko(s)}function Lr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function dc(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var So=Math.random().toString(36).slice(2),It="__reactFiber$"+So,kn="__reactProps$"+So,ni="__reactContainer$"+So,rs="__reactEvents$"+So,Rf="__reactListeners$"+So,Fn="__reactHandles$"+So;function Tn(i){var s=i[It];if(s)return s;for(var l=i.parentNode;l;){if(s=l[ni]||l[It]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=dc(i);i!==null;){if(l=i[It])return l;i=dc(i)}return s}i=l,l=i.parentNode}return null}function Dr(i){return i=i[It]||i[ni],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ur(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Ps(i){return i[kn]||null}var bo=[],Nr=-1;function dr(i){return{current:i}}function yn(i){0>Nr||(i.current=bo[Nr],bo[Nr]=null,Nr--)}function gn(i,s){Nr++,bo[Nr]=i.current,i.current=s}var Mo={},hi=dr(Mo),ki=dr(!1),la=Mo;function Qa(i,s){var l=i.type.contextTypes;if(!l)return Mo;var d=i.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var v={},S;for(S in l)v[S]=s[S];return d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=v),v}function Fi(i){return i=i.childContextTypes,i!=null}function bu(){yn(ki),yn(hi)}function jm(i,s,l){if(hi.current!==Mo)throw Error(t(168));gn(hi,s),gn(ki,l)}function Xm(i,s,l){var d=i.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var v in d)if(!(v in s))throw Error(t(108,xe(i)||"Unknown",v));return ae({},l,d)}function Mu(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Mo,la=hi.current,gn(hi,i),gn(ki,ki.current),!0}function Ym(i,s,l){var d=i.stateNode;if(!d)throw Error(t(169));l?(i=Xm(i,s,la),d.__reactInternalMemoizedMergedChildContext=i,yn(ki),yn(hi),gn(hi,i)):yn(ki),gn(ki,l)}var Is=null,wu=!1,Pf=!1;function qm(i){Is===null?Is=[i]:Is.push(i)}function F_(i){wu=!0,qm(i)}function wo(){if(!Pf&&Is!==null){Pf=!0;var i=0,s=At;try{var l=Is;for(At=1;i<l.length;i++){var d=l[i];do d=d(!0);while(d!==null)}Is=null,wu=!1}catch(v){throw Is!==null&&(Is=Is.slice(i+1)),Qn(ve,wo),v}finally{At=s,Pf=!1}}return null}var el=[],tl=0,Eu=null,Tu=0,fr=[],pr=0,ca=null,Ls=1,Ds="";function ua(i,s){el[tl++]=Tu,el[tl++]=Eu,Eu=i,Tu=s}function Km(i,s,l){fr[pr++]=Ls,fr[pr++]=Ds,fr[pr++]=ca,ca=i;var d=Ls;i=Ds;var v=32-Ae(d)-1;d&=~(1<<v),l+=1;var S=32-Ae(s)+v;if(30<S){var L=v-v%5;S=(d&(1<<L)-1).toString(32),d>>=L,v-=L,Ls=1<<32-Ae(s)+v|l<<v|d,Ds=S+i}else Ls=1<<S|l<<v|d,Ds=i}function If(i){i.return!==null&&(ua(i,1),Km(i,1,0))}function Lf(i){for(;i===Eu;)Eu=el[--tl],el[tl]=null,Tu=el[--tl],el[tl]=null;for(;i===ca;)ca=fr[--pr],fr[pr]=null,Ds=fr[--pr],fr[pr]=null,Ls=fr[--pr],fr[pr]=null}var qi=null,Ki=null,Cn=!1,Ur=null;function Zm(i,s){var l=vr(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function Jm(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,qi=i,Ki=Lr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,qi=i,Ki=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=ca!==null?{id:Ls,overflow:Ds}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=vr(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,qi=i,Ki=null,!0):!1;default:return!1}}function Df(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Nf(i){if(Cn){var s=Ki;if(s){var l=s;if(!Jm(i,s)){if(Df(i))throw Error(t(418));s=Lr(l.nextSibling);var d=qi;s&&Jm(i,s)?Zm(d,l):(i.flags=i.flags&-4097|2,Cn=!1,qi=i)}}else{if(Df(i))throw Error(t(418));i.flags=i.flags&-4097|2,Cn=!1,qi=i}}}function Qm(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;qi=i}function Cu(i){if(i!==qi)return!1;if(!Cn)return Qm(i),Cn=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!yo(i.type,i.memoizedProps)),s&&(s=Ki)){if(Df(i))throw e0(),Error(t(418));for(;s;)Zm(i,s),s=Lr(s.nextSibling)}if(Qm(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){Ki=Lr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}Ki=null}}else Ki=qi?Lr(i.stateNode.nextSibling):null;return!0}function e0(){for(var i=Ki;i;)i=Lr(i.nextSibling)}function nl(){Ki=qi=null,Cn=!1}function Uf(i){Ur===null?Ur=[i]:Ur.push(i)}var O_=k.ReactCurrentBatchConfig;function fc(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,i));var v=d,S=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===S?s.ref:(s=function(L){var Y=v.refs;L===null?delete Y[S]:Y[S]=L},s._stringRef=S,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Au(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function t0(i){var s=i._init;return s(i._payload)}function n0(i){function s(me,ce){if(i){var ye=me.deletions;ye===null?(me.deletions=[ce],me.flags|=16):ye.push(ce)}}function l(me,ce){if(!i)return null;for(;ce!==null;)s(me,ce),ce=ce.sibling;return null}function d(me,ce){for(me=new Map;ce!==null;)ce.key!==null?me.set(ce.key,ce):me.set(ce.index,ce),ce=ce.sibling;return me}function v(me,ce){return me=Lo(me,ce),me.index=0,me.sibling=null,me}function S(me,ce,ye){return me.index=ye,i?(ye=me.alternate,ye!==null?(ye=ye.index,ye<ce?(me.flags|=2,ce):ye):(me.flags|=2,ce)):(me.flags|=1048576,ce)}function L(me){return i&&me.alternate===null&&(me.flags|=2),me}function Y(me,ce,ye,Ke){return ce===null||ce.tag!==6?(ce=Tp(ye,me.mode,Ke),ce.return=me,ce):(ce=v(ce,ye),ce.return=me,ce)}function te(me,ce,ye,Ke){var Tt=ye.type;return Tt===T?$e(me,ce,ye.props.children,Ke,ye.key):ce!==null&&(ce.elementType===Tt||typeof Tt=="object"&&Tt!==null&&Tt.$$typeof===ee&&t0(Tt)===ce.type)?(Ke=v(ce,ye.props),Ke.ref=fc(me,ce,ye),Ke.return=me,Ke):(Ke=Ju(ye.type,ye.key,ye.props,null,me.mode,Ke),Ke.ref=fc(me,ce,ye),Ke.return=me,Ke)}function be(me,ce,ye,Ke){return ce===null||ce.tag!==4||ce.stateNode.containerInfo!==ye.containerInfo||ce.stateNode.implementation!==ye.implementation?(ce=Cp(ye,me.mode,Ke),ce.return=me,ce):(ce=v(ce,ye.children||[]),ce.return=me,ce)}function $e(me,ce,ye,Ke,Tt){return ce===null||ce.tag!==7?(ce=xa(ye,me.mode,Ke,Tt),ce.return=me,ce):(ce=v(ce,ye),ce.return=me,ce)}function Xe(me,ce,ye){if(typeof ce=="string"&&ce!==""||typeof ce=="number")return ce=Tp(""+ce,me.mode,ye),ce.return=me,ce;if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case V:return ye=Ju(ce.type,ce.key,ce.props,null,me.mode,ye),ye.ref=fc(me,null,ce),ye.return=me,ye;case A:return ce=Cp(ce,me.mode,ye),ce.return=me,ce;case ee:var Ke=ce._init;return Xe(me,Ke(ce._payload),ye)}if(Lt(ce)||q(ce))return ce=xa(ce,me.mode,ye,null),ce.return=me,ce;Au(me,ce)}return null}function ze(me,ce,ye,Ke){var Tt=ce!==null?ce.key:null;if(typeof ye=="string"&&ye!==""||typeof ye=="number")return Tt!==null?null:Y(me,ce,""+ye,Ke);if(typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case V:return ye.key===Tt?te(me,ce,ye,Ke):null;case A:return ye.key===Tt?be(me,ce,ye,Ke):null;case ee:return Tt=ye._init,ze(me,ce,Tt(ye._payload),Ke)}if(Lt(ye)||q(ye))return Tt!==null?null:$e(me,ce,ye,Ke,null);Au(me,ye)}return null}function ft(me,ce,ye,Ke,Tt){if(typeof Ke=="string"&&Ke!==""||typeof Ke=="number")return me=me.get(ye)||null,Y(ce,me,""+Ke,Tt);if(typeof Ke=="object"&&Ke!==null){switch(Ke.$$typeof){case V:return me=me.get(Ke.key===null?ye:Ke.key)||null,te(ce,me,Ke,Tt);case A:return me=me.get(Ke.key===null?ye:Ke.key)||null,be(ce,me,Ke,Tt);case ee:var kt=Ke._init;return ft(me,ce,ye,kt(Ke._payload),Tt)}if(Lt(Ke)||q(Ke))return me=me.get(ye)||null,$e(ce,me,Ke,Tt,null);Au(ce,Ke)}return null}function St(me,ce,ye,Ke){for(var Tt=null,kt=null,Ft=ce,Ht=ce=0,si=null;Ft!==null&&Ht<ye.length;Ht++){Ft.index>Ht?(si=Ft,Ft=null):si=Ft.sibling;var dn=ze(me,Ft,ye[Ht],Ke);if(dn===null){Ft===null&&(Ft=si);break}i&&Ft&&dn.alternate===null&&s(me,Ft),ce=S(dn,ce,Ht),kt===null?Tt=dn:kt.sibling=dn,kt=dn,Ft=si}if(Ht===ye.length)return l(me,Ft),Cn&&ua(me,Ht),Tt;if(Ft===null){for(;Ht<ye.length;Ht++)Ft=Xe(me,ye[Ht],Ke),Ft!==null&&(ce=S(Ft,ce,Ht),kt===null?Tt=Ft:kt.sibling=Ft,kt=Ft);return Cn&&ua(me,Ht),Tt}for(Ft=d(me,Ft);Ht<ye.length;Ht++)si=ft(Ft,me,Ht,ye[Ht],Ke),si!==null&&(i&&si.alternate!==null&&Ft.delete(si.key===null?Ht:si.key),ce=S(si,ce,Ht),kt===null?Tt=si:kt.sibling=si,kt=si);return i&&Ft.forEach(function(Do){return s(me,Do)}),Cn&&ua(me,Ht),Tt}function wt(me,ce,ye,Ke){var Tt=q(ye);if(typeof Tt!="function")throw Error(t(150));if(ye=Tt.call(ye),ye==null)throw Error(t(151));for(var kt=Tt=null,Ft=ce,Ht=ce=0,si=null,dn=ye.next();Ft!==null&&!dn.done;Ht++,dn=ye.next()){Ft.index>Ht?(si=Ft,Ft=null):si=Ft.sibling;var Do=ze(me,Ft,dn.value,Ke);if(Do===null){Ft===null&&(Ft=si);break}i&&Ft&&Do.alternate===null&&s(me,Ft),ce=S(Do,ce,Ht),kt===null?Tt=Do:kt.sibling=Do,kt=Do,Ft=si}if(dn.done)return l(me,Ft),Cn&&ua(me,Ht),Tt;if(Ft===null){for(;!dn.done;Ht++,dn=ye.next())dn=Xe(me,dn.value,Ke),dn!==null&&(ce=S(dn,ce,Ht),kt===null?Tt=dn:kt.sibling=dn,kt=dn);return Cn&&ua(me,Ht),Tt}for(Ft=d(me,Ft);!dn.done;Ht++,dn=ye.next())dn=ft(Ft,me,Ht,dn.value,Ke),dn!==null&&(i&&dn.alternate!==null&&Ft.delete(dn.key===null?Ht:dn.key),ce=S(dn,ce,Ht),kt===null?Tt=dn:kt.sibling=dn,kt=dn);return i&&Ft.forEach(function(vy){return s(me,vy)}),Cn&&ua(me,Ht),Tt}function On(me,ce,ye,Ke){if(typeof ye=="object"&&ye!==null&&ye.type===T&&ye.key===null&&(ye=ye.props.children),typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case V:e:{for(var Tt=ye.key,kt=ce;kt!==null;){if(kt.key===Tt){if(Tt=ye.type,Tt===T){if(kt.tag===7){l(me,kt.sibling),ce=v(kt,ye.props.children),ce.return=me,me=ce;break e}}else if(kt.elementType===Tt||typeof Tt=="object"&&Tt!==null&&Tt.$$typeof===ee&&t0(Tt)===kt.type){l(me,kt.sibling),ce=v(kt,ye.props),ce.ref=fc(me,kt,ye),ce.return=me,me=ce;break e}l(me,kt);break}else s(me,kt);kt=kt.sibling}ye.type===T?(ce=xa(ye.props.children,me.mode,Ke,ye.key),ce.return=me,me=ce):(Ke=Ju(ye.type,ye.key,ye.props,null,me.mode,Ke),Ke.ref=fc(me,ce,ye),Ke.return=me,me=Ke)}return L(me);case A:e:{for(kt=ye.key;ce!==null;){if(ce.key===kt)if(ce.tag===4&&ce.stateNode.containerInfo===ye.containerInfo&&ce.stateNode.implementation===ye.implementation){l(me,ce.sibling),ce=v(ce,ye.children||[]),ce.return=me,me=ce;break e}else{l(me,ce);break}else s(me,ce);ce=ce.sibling}ce=Cp(ye,me.mode,Ke),ce.return=me,me=ce}return L(me);case ee:return kt=ye._init,On(me,ce,kt(ye._payload),Ke)}if(Lt(ye))return St(me,ce,ye,Ke);if(q(ye))return wt(me,ce,ye,Ke);Au(me,ye)}return typeof ye=="string"&&ye!==""||typeof ye=="number"?(ye=""+ye,ce!==null&&ce.tag===6?(l(me,ce.sibling),ce=v(ce,ye),ce.return=me,me=ce):(l(me,ce),ce=Tp(ye,me.mode,Ke),ce.return=me,me=ce),L(me)):l(me,ce)}return On}var il=n0(!0),i0=n0(!1),Ru=dr(null),Pu=null,rl=null,kf=null;function Ff(){kf=rl=Pu=null}function Of(i){var s=Ru.current;yn(Ru),i._currentValue=s}function Bf(i,s,l){for(;i!==null;){var d=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),i===l)break;i=i.return}}function sl(i,s){Pu=i,kf=rl=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Oi=!0),i.firstContext=null)}function hr(i){var s=i._currentValue;if(kf!==i)if(i={context:i,memoizedValue:s,next:null},rl===null){if(Pu===null)throw Error(t(308));rl=i,Pu.dependencies={lanes:0,firstContext:i}}else rl=rl.next=i;return s}var da=null;function zf(i){da===null?da=[i]:da.push(i)}function r0(i,s,l,d){var v=s.interleaved;return v===null?(l.next=l,zf(s)):(l.next=v.next,v.next=l),s.interleaved=l,Ns(i,d)}function Ns(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Eo=!1;function $f(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function s0(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Us(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function To(i,s,l){var d=i.updateQueue;if(d===null)return null;if(d=d.shared,(cn&2)!==0){var v=d.pending;return v===null?s.next=s:(s.next=v.next,v.next=s),d.pending=s,Ns(i,l)}return v=d.interleaved,v===null?(s.next=s,zf(d)):(s.next=v.next,v.next=s),d.interleaved=s,Ns(i,l)}function Iu(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var d=s.lanes;d&=i.pendingLanes,l|=d,s.lanes=l,en(i,l)}}function o0(i,s){var l=i.updateQueue,d=i.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var v=null,S=null;if(l=l.firstBaseUpdate,l!==null){do{var L={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};S===null?v=S=L:S=S.next=L,l=l.next}while(l!==null);S===null?v=S=s:S=S.next=s}else v=S=s;l={baseState:d.baseState,firstBaseUpdate:v,lastBaseUpdate:S,shared:d.shared,effects:d.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function Lu(i,s,l,d){var v=i.updateQueue;Eo=!1;var S=v.firstBaseUpdate,L=v.lastBaseUpdate,Y=v.shared.pending;if(Y!==null){v.shared.pending=null;var te=Y,be=te.next;te.next=null,L===null?S=be:L.next=be,L=te;var $e=i.alternate;$e!==null&&($e=$e.updateQueue,Y=$e.lastBaseUpdate,Y!==L&&(Y===null?$e.firstBaseUpdate=be:Y.next=be,$e.lastBaseUpdate=te))}if(S!==null){var Xe=v.baseState;L=0,$e=be=te=null,Y=S;do{var ze=Y.lane,ft=Y.eventTime;if((d&ze)===ze){$e!==null&&($e=$e.next={eventTime:ft,lane:0,tag:Y.tag,payload:Y.payload,callback:Y.callback,next:null});e:{var St=i,wt=Y;switch(ze=s,ft=l,wt.tag){case 1:if(St=wt.payload,typeof St=="function"){Xe=St.call(ft,Xe,ze);break e}Xe=St;break e;case 3:St.flags=St.flags&-65537|128;case 0:if(St=wt.payload,ze=typeof St=="function"?St.call(ft,Xe,ze):St,ze==null)break e;Xe=ae({},Xe,ze);break e;case 2:Eo=!0}}Y.callback!==null&&Y.lane!==0&&(i.flags|=64,ze=v.effects,ze===null?v.effects=[Y]:ze.push(Y))}else ft={eventTime:ft,lane:ze,tag:Y.tag,payload:Y.payload,callback:Y.callback,next:null},$e===null?(be=$e=ft,te=Xe):$e=$e.next=ft,L|=ze;if(Y=Y.next,Y===null){if(Y=v.shared.pending,Y===null)break;ze=Y,Y=ze.next,ze.next=null,v.lastBaseUpdate=ze,v.shared.pending=null}}while(!0);if($e===null&&(te=Xe),v.baseState=te,v.firstBaseUpdate=be,v.lastBaseUpdate=$e,s=v.shared.interleaved,s!==null){v=s;do L|=v.lane,v=v.next;while(v!==s)}else S===null&&(v.shared.lanes=0);ha|=L,i.lanes=L,i.memoizedState=Xe}}function a0(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var d=i[s],v=d.callback;if(v!==null){if(d.callback=null,d=l,typeof v!="function")throw Error(t(191,v));v.call(d)}}}var pc={},ss=dr(pc),hc=dr(pc),mc=dr(pc);function fa(i){if(i===pc)throw Error(t(174));return i}function Vf(i,s){switch(gn(mc,s),gn(hc,i),gn(ss,pc),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Ne(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=Ne(s,i)}yn(ss),gn(ss,s)}function ol(){yn(ss),yn(hc),yn(mc)}function l0(i){fa(mc.current);var s=fa(ss.current),l=Ne(s,i.type);s!==l&&(gn(hc,i),gn(ss,l))}function Hf(i){hc.current===i&&(yn(ss),yn(hc))}var Rn=dr(0);function Du(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Gf=[];function Wf(){for(var i=0;i<Gf.length;i++)Gf[i]._workInProgressVersionPrimary=null;Gf.length=0}var Nu=k.ReactCurrentDispatcher,jf=k.ReactCurrentBatchConfig,pa=0,Pn=null,jn=null,ii=null,Uu=!1,gc=!1,vc=0,B_=0;function mi(){throw Error(t(321))}function Xf(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Xi(i[l],s[l]))return!1;return!0}function Yf(i,s,l,d,v,S){if(pa=S,Pn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Nu.current=i===null||i.memoizedState===null?H_:G_,i=l(d,v),gc){S=0;do{if(gc=!1,vc=0,25<=S)throw Error(t(301));S+=1,ii=jn=null,s.updateQueue=null,Nu.current=W_,i=l(d,v)}while(gc)}if(Nu.current=Ou,s=jn!==null&&jn.next!==null,pa=0,ii=jn=Pn=null,Uu=!1,s)throw Error(t(300));return i}function qf(){var i=vc!==0;return vc=0,i}function os(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ii===null?Pn.memoizedState=ii=i:ii=ii.next=i,ii}function mr(){if(jn===null){var i=Pn.alternate;i=i!==null?i.memoizedState:null}else i=jn.next;var s=ii===null?Pn.memoizedState:ii.next;if(s!==null)ii=s,jn=i;else{if(i===null)throw Error(t(310));jn=i,i={memoizedState:jn.memoizedState,baseState:jn.baseState,baseQueue:jn.baseQueue,queue:jn.queue,next:null},ii===null?Pn.memoizedState=ii=i:ii=ii.next=i}return ii}function xc(i,s){return typeof s=="function"?s(i):s}function Kf(i){var s=mr(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=jn,v=d.baseQueue,S=l.pending;if(S!==null){if(v!==null){var L=v.next;v.next=S.next,S.next=L}d.baseQueue=v=S,l.pending=null}if(v!==null){S=v.next,d=d.baseState;var Y=L=null,te=null,be=S;do{var $e=be.lane;if((pa&$e)===$e)te!==null&&(te=te.next={lane:0,action:be.action,hasEagerState:be.hasEagerState,eagerState:be.eagerState,next:null}),d=be.hasEagerState?be.eagerState:i(d,be.action);else{var Xe={lane:$e,action:be.action,hasEagerState:be.hasEagerState,eagerState:be.eagerState,next:null};te===null?(Y=te=Xe,L=d):te=te.next=Xe,Pn.lanes|=$e,ha|=$e}be=be.next}while(be!==null&&be!==S);te===null?L=d:te.next=Y,Xi(d,s.memoizedState)||(Oi=!0),s.memoizedState=d,s.baseState=L,s.baseQueue=te,l.lastRenderedState=d}if(i=l.interleaved,i!==null){v=i;do S=v.lane,Pn.lanes|=S,ha|=S,v=v.next;while(v!==i)}else v===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Zf(i){var s=mr(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var d=l.dispatch,v=l.pending,S=s.memoizedState;if(v!==null){l.pending=null;var L=v=v.next;do S=i(S,L.action),L=L.next;while(L!==v);Xi(S,s.memoizedState)||(Oi=!0),s.memoizedState=S,s.baseQueue===null&&(s.baseState=S),l.lastRenderedState=S}return[S,d]}function c0(){}function u0(i,s){var l=Pn,d=mr(),v=s(),S=!Xi(d.memoizedState,v);if(S&&(d.memoizedState=v,Oi=!0),d=d.queue,Jf(p0.bind(null,l,d,i),[i]),d.getSnapshot!==s||S||ii!==null&&ii.memoizedState.tag&1){if(l.flags|=2048,_c(9,f0.bind(null,l,d,v,s),void 0,null),ri===null)throw Error(t(349));(pa&30)!==0||d0(l,s,v)}return v}function d0(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=Pn.updateQueue,s===null?(s={lastEffect:null,stores:null},Pn.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function f0(i,s,l,d){s.value=l,s.getSnapshot=d,h0(s)&&m0(i)}function p0(i,s,l){return l(function(){h0(s)&&m0(i)})}function h0(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Xi(i,l)}catch{return!0}}function m0(i){var s=Ns(i,1);s!==null&&Br(s,i,1,-1)}function g0(i){var s=os();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xc,lastRenderedState:i},s.queue=i,i=i.dispatch=V_.bind(null,Pn,i),[s.memoizedState,i]}function _c(i,s,l,d){return i={tag:i,create:s,destroy:l,deps:d,next:null},s=Pn.updateQueue,s===null?(s={lastEffect:null,stores:null},Pn.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(d=l.next,l.next=i,i.next=d,s.lastEffect=i)),i}function v0(){return mr().memoizedState}function ku(i,s,l,d){var v=os();Pn.flags|=i,v.memoizedState=_c(1|s,l,void 0,d===void 0?null:d)}function Fu(i,s,l,d){var v=mr();d=d===void 0?null:d;var S=void 0;if(jn!==null){var L=jn.memoizedState;if(S=L.destroy,d!==null&&Xf(d,L.deps)){v.memoizedState=_c(s,l,S,d);return}}Pn.flags|=i,v.memoizedState=_c(1|s,l,S,d)}function x0(i,s){return ku(8390656,8,i,s)}function Jf(i,s){return Fu(2048,8,i,s)}function _0(i,s){return Fu(4,2,i,s)}function y0(i,s){return Fu(4,4,i,s)}function S0(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function b0(i,s,l){return l=l!=null?l.concat([i]):null,Fu(4,4,S0.bind(null,s,i),l)}function Qf(){}function M0(i,s){var l=mr();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&Xf(s,d[1])?d[0]:(l.memoizedState=[i,s],i)}function w0(i,s){var l=mr();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&Xf(s,d[1])?d[0]:(i=i(),l.memoizedState=[i,s],i)}function E0(i,s,l){return(pa&21)===0?(i.baseState&&(i.baseState=!1,Oi=!0),i.memoizedState=l):(Xi(l,s)||(l=Nn(),Pn.lanes|=l,ha|=l,i.baseState=!0),s)}function z_(i,s){var l=At;At=l!==0&&4>l?l:4,i(!0);var d=jf.transition;jf.transition={};try{i(!1),s()}finally{At=l,jf.transition=d}}function T0(){return mr().memoizedState}function $_(i,s,l){var d=Po(i);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},C0(i))A0(s,l);else if(l=r0(i,s,l,d),l!==null){var v=Ci();Br(l,i,d,v),R0(l,s,d)}}function V_(i,s,l){var d=Po(i),v={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(C0(i))A0(s,v);else{var S=i.alternate;if(i.lanes===0&&(S===null||S.lanes===0)&&(S=s.lastRenderedReducer,S!==null))try{var L=s.lastRenderedState,Y=S(L,l);if(v.hasEagerState=!0,v.eagerState=Y,Xi(Y,L)){var te=s.interleaved;te===null?(v.next=v,zf(s)):(v.next=te.next,te.next=v),s.interleaved=v;return}}catch{}finally{}l=r0(i,s,v,d),l!==null&&(v=Ci(),Br(l,i,d,v),R0(l,s,d))}}function C0(i){var s=i.alternate;return i===Pn||s!==null&&s===Pn}function A0(i,s){gc=Uu=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function R0(i,s,l){if((l&4194240)!==0){var d=s.lanes;d&=i.pendingLanes,l|=d,s.lanes=l,en(i,l)}}var Ou={readContext:hr,useCallback:mi,useContext:mi,useEffect:mi,useImperativeHandle:mi,useInsertionEffect:mi,useLayoutEffect:mi,useMemo:mi,useReducer:mi,useRef:mi,useState:mi,useDebugValue:mi,useDeferredValue:mi,useTransition:mi,useMutableSource:mi,useSyncExternalStore:mi,useId:mi,unstable_isNewReconciler:!1},H_={readContext:hr,useCallback:function(i,s){return os().memoizedState=[i,s===void 0?null:s],i},useContext:hr,useEffect:x0,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,ku(4194308,4,S0.bind(null,s,i),l)},useLayoutEffect:function(i,s){return ku(4194308,4,i,s)},useInsertionEffect:function(i,s){return ku(4,2,i,s)},useMemo:function(i,s){var l=os();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var d=os();return s=l!==void 0?l(s):s,d.memoizedState=d.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},d.queue=i,i=i.dispatch=$_.bind(null,Pn,i),[d.memoizedState,i]},useRef:function(i){var s=os();return i={current:i},s.memoizedState=i},useState:g0,useDebugValue:Qf,useDeferredValue:function(i){return os().memoizedState=i},useTransition:function(){var i=g0(!1),s=i[0];return i=z_.bind(null,i[1]),os().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var d=Pn,v=os();if(Cn){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),ri===null)throw Error(t(349));(pa&30)!==0||d0(d,s,l)}v.memoizedState=l;var S={value:l,getSnapshot:s};return v.queue=S,x0(p0.bind(null,d,S,i),[i]),d.flags|=2048,_c(9,f0.bind(null,d,S,l,s),void 0,null),l},useId:function(){var i=os(),s=ri.identifierPrefix;if(Cn){var l=Ds,d=Ls;l=(d&~(1<<32-Ae(d)-1)).toString(32)+l,s=":"+s+"R"+l,l=vc++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=B_++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},G_={readContext:hr,useCallback:M0,useContext:hr,useEffect:Jf,useImperativeHandle:b0,useInsertionEffect:_0,useLayoutEffect:y0,useMemo:w0,useReducer:Kf,useRef:v0,useState:function(){return Kf(xc)},useDebugValue:Qf,useDeferredValue:function(i){var s=mr();return E0(s,jn.memoizedState,i)},useTransition:function(){var i=Kf(xc)[0],s=mr().memoizedState;return[i,s]},useMutableSource:c0,useSyncExternalStore:u0,useId:T0,unstable_isNewReconciler:!1},W_={readContext:hr,useCallback:M0,useContext:hr,useEffect:Jf,useImperativeHandle:b0,useInsertionEffect:_0,useLayoutEffect:y0,useMemo:w0,useReducer:Zf,useRef:v0,useState:function(){return Zf(xc)},useDebugValue:Qf,useDeferredValue:function(i){var s=mr();return jn===null?s.memoizedState=i:E0(s,jn.memoizedState,i)},useTransition:function(){var i=Zf(xc)[0],s=mr().memoizedState;return[i,s]},useMutableSource:c0,useSyncExternalStore:u0,useId:T0,unstable_isNewReconciler:!1};function kr(i,s){if(i&&i.defaultProps){s=ae({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function ep(i,s,l,d){s=i.memoizedState,l=l(d,s),l=l==null?s:ae({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Bu={isMounted:function(i){return(i=i._reactInternals)?li(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var d=Ci(),v=Po(i),S=Us(d,v);S.payload=s,l!=null&&(S.callback=l),s=To(i,S,v),s!==null&&(Br(s,i,v,d),Iu(s,i,v))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var d=Ci(),v=Po(i),S=Us(d,v);S.tag=1,S.payload=s,l!=null&&(S.callback=l),s=To(i,S,v),s!==null&&(Br(s,i,v,d),Iu(s,i,v))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Ci(),d=Po(i),v=Us(l,d);v.tag=2,s!=null&&(v.callback=s),s=To(i,v,d),s!==null&&(Br(s,i,d,l),Iu(s,i,d))}};function P0(i,s,l,d,v,S,L){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(d,S,L):s.prototype&&s.prototype.isPureReactComponent?!sa(l,d)||!sa(v,S):!0}function I0(i,s,l){var d=!1,v=Mo,S=s.contextType;return typeof S=="object"&&S!==null?S=hr(S):(v=Fi(s)?la:hi.current,d=s.contextTypes,S=(d=d!=null)?Qa(i,v):Mo),s=new s(l,S),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Bu,i.stateNode=s,s._reactInternals=i,d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=v,i.__reactInternalMemoizedMaskedChildContext=S),s}function L0(i,s,l,d){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,d),s.state!==i&&Bu.enqueueReplaceState(s,s.state,null)}function tp(i,s,l,d){var v=i.stateNode;v.props=l,v.state=i.memoizedState,v.refs={},$f(i);var S=s.contextType;typeof S=="object"&&S!==null?v.context=hr(S):(S=Fi(s)?la:hi.current,v.context=Qa(i,S)),v.state=i.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(ep(i,s,S,l),v.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof v.getSnapshotBeforeUpdate=="function"||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(s=v.state,typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount(),s!==v.state&&Bu.enqueueReplaceState(v,v.state,null),Lu(i,l,v,d),v.state=i.memoizedState),typeof v.componentDidMount=="function"&&(i.flags|=4194308)}function al(i,s){try{var l="",d=s;do l+=De(d),d=d.return;while(d);var v=l}catch(S){v=`
Error generating stack: `+S.message+`
`+S.stack}return{value:i,source:s,stack:v,digest:null}}function np(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function ip(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var j_=typeof WeakMap=="function"?WeakMap:Map;function D0(i,s,l){l=Us(-1,l),l.tag=3,l.payload={element:null};var d=s.value;return l.callback=function(){ju||(ju=!0,xp=d),ip(i,s)},l}function N0(i,s,l){l=Us(-1,l),l.tag=3;var d=i.type.getDerivedStateFromError;if(typeof d=="function"){var v=s.value;l.payload=function(){return d(v)},l.callback=function(){ip(i,s)}}var S=i.stateNode;return S!==null&&typeof S.componentDidCatch=="function"&&(l.callback=function(){ip(i,s),typeof d!="function"&&(Ao===null?Ao=new Set([this]):Ao.add(this));var L=s.stack;this.componentDidCatch(s.value,{componentStack:L!==null?L:""})}),l}function U0(i,s,l){var d=i.pingCache;if(d===null){d=i.pingCache=new j_;var v=new Set;d.set(s,v)}else v=d.get(s),v===void 0&&(v=new Set,d.set(s,v));v.has(l)||(v.add(l),i=oy.bind(null,i,s,l),s.then(i,i))}function k0(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function F0(i,s,l,d,v){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=Us(-1,1),s.tag=2,To(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=v,i)}var X_=k.ReactCurrentOwner,Oi=!1;function Ti(i,s,l,d){s.child=i===null?i0(s,null,l,d):il(s,i.child,l,d)}function O0(i,s,l,d,v){l=l.render;var S=s.ref;return sl(s,v),d=Yf(i,s,l,d,S,v),l=qf(),i!==null&&!Oi?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~v,ks(i,s,v)):(Cn&&l&&If(s),s.flags|=1,Ti(i,s,d,v),s.child)}function B0(i,s,l,d,v){if(i===null){var S=l.type;return typeof S=="function"&&!Ep(S)&&S.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=S,z0(i,s,S,d,v)):(i=Ju(l.type,null,d,s,s.mode,v),i.ref=s.ref,i.return=s,s.child=i)}if(S=i.child,(i.lanes&v)===0){var L=S.memoizedProps;if(l=l.compare,l=l!==null?l:sa,l(L,d)&&i.ref===s.ref)return ks(i,s,v)}return s.flags|=1,i=Lo(S,d),i.ref=s.ref,i.return=s,s.child=i}function z0(i,s,l,d,v){if(i!==null){var S=i.memoizedProps;if(sa(S,d)&&i.ref===s.ref)if(Oi=!1,s.pendingProps=d=S,(i.lanes&v)!==0)(i.flags&131072)!==0&&(Oi=!0);else return s.lanes=i.lanes,ks(i,s,v)}return rp(i,s,l,d,v)}function $0(i,s,l){var d=s.pendingProps,v=d.children,S=i!==null?i.memoizedState:null;if(d.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},gn(cl,Zi),Zi|=l;else{if((l&1073741824)===0)return i=S!==null?S.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,gn(cl,Zi),Zi|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=S!==null?S.baseLanes:l,gn(cl,Zi),Zi|=d}else S!==null?(d=S.baseLanes|l,s.memoizedState=null):d=l,gn(cl,Zi),Zi|=d;return Ti(i,s,v,l),s.child}function V0(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function rp(i,s,l,d,v){var S=Fi(l)?la:hi.current;return S=Qa(s,S),sl(s,v),l=Yf(i,s,l,d,S,v),d=qf(),i!==null&&!Oi?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~v,ks(i,s,v)):(Cn&&d&&If(s),s.flags|=1,Ti(i,s,l,v),s.child)}function H0(i,s,l,d,v){if(Fi(l)){var S=!0;Mu(s)}else S=!1;if(sl(s,v),s.stateNode===null)$u(i,s),I0(s,l,d),tp(s,l,d,v),d=!0;else if(i===null){var L=s.stateNode,Y=s.memoizedProps;L.props=Y;var te=L.context,be=l.contextType;typeof be=="object"&&be!==null?be=hr(be):(be=Fi(l)?la:hi.current,be=Qa(s,be));var $e=l.getDerivedStateFromProps,Xe=typeof $e=="function"||typeof L.getSnapshotBeforeUpdate=="function";Xe||typeof L.UNSAFE_componentWillReceiveProps!="function"&&typeof L.componentWillReceiveProps!="function"||(Y!==d||te!==be)&&L0(s,L,d,be),Eo=!1;var ze=s.memoizedState;L.state=ze,Lu(s,d,L,v),te=s.memoizedState,Y!==d||ze!==te||ki.current||Eo?(typeof $e=="function"&&(ep(s,l,$e,d),te=s.memoizedState),(Y=Eo||P0(s,l,Y,d,ze,te,be))?(Xe||typeof L.UNSAFE_componentWillMount!="function"&&typeof L.componentWillMount!="function"||(typeof L.componentWillMount=="function"&&L.componentWillMount(),typeof L.UNSAFE_componentWillMount=="function"&&L.UNSAFE_componentWillMount()),typeof L.componentDidMount=="function"&&(s.flags|=4194308)):(typeof L.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=te),L.props=d,L.state=te,L.context=be,d=Y):(typeof L.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{L=s.stateNode,s0(i,s),Y=s.memoizedProps,be=s.type===s.elementType?Y:kr(s.type,Y),L.props=be,Xe=s.pendingProps,ze=L.context,te=l.contextType,typeof te=="object"&&te!==null?te=hr(te):(te=Fi(l)?la:hi.current,te=Qa(s,te));var ft=l.getDerivedStateFromProps;($e=typeof ft=="function"||typeof L.getSnapshotBeforeUpdate=="function")||typeof L.UNSAFE_componentWillReceiveProps!="function"&&typeof L.componentWillReceiveProps!="function"||(Y!==Xe||ze!==te)&&L0(s,L,d,te),Eo=!1,ze=s.memoizedState,L.state=ze,Lu(s,d,L,v);var St=s.memoizedState;Y!==Xe||ze!==St||ki.current||Eo?(typeof ft=="function"&&(ep(s,l,ft,d),St=s.memoizedState),(be=Eo||P0(s,l,be,d,ze,St,te)||!1)?($e||typeof L.UNSAFE_componentWillUpdate!="function"&&typeof L.componentWillUpdate!="function"||(typeof L.componentWillUpdate=="function"&&L.componentWillUpdate(d,St,te),typeof L.UNSAFE_componentWillUpdate=="function"&&L.UNSAFE_componentWillUpdate(d,St,te)),typeof L.componentDidUpdate=="function"&&(s.flags|=4),typeof L.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof L.componentDidUpdate!="function"||Y===i.memoizedProps&&ze===i.memoizedState||(s.flags|=4),typeof L.getSnapshotBeforeUpdate!="function"||Y===i.memoizedProps&&ze===i.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=St),L.props=d,L.state=St,L.context=te,d=be):(typeof L.componentDidUpdate!="function"||Y===i.memoizedProps&&ze===i.memoizedState||(s.flags|=4),typeof L.getSnapshotBeforeUpdate!="function"||Y===i.memoizedProps&&ze===i.memoizedState||(s.flags|=1024),d=!1)}return sp(i,s,l,d,S,v)}function sp(i,s,l,d,v,S){V0(i,s);var L=(s.flags&128)!==0;if(!d&&!L)return v&&Ym(s,l,!1),ks(i,s,S);d=s.stateNode,X_.current=s;var Y=L&&typeof l.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,i!==null&&L?(s.child=il(s,i.child,null,S),s.child=il(s,null,Y,S)):Ti(i,s,Y,S),s.memoizedState=d.state,v&&Ym(s,l,!0),s.child}function G0(i){var s=i.stateNode;s.pendingContext?jm(i,s.pendingContext,s.pendingContext!==s.context):s.context&&jm(i,s.context,!1),Vf(i,s.containerInfo)}function W0(i,s,l,d,v){return nl(),Uf(v),s.flags|=256,Ti(i,s,l,d),s.child}var op={dehydrated:null,treeContext:null,retryLane:0};function ap(i){return{baseLanes:i,cachePool:null,transitions:null}}function j0(i,s,l){var d=s.pendingProps,v=Rn.current,S=!1,L=(s.flags&128)!==0,Y;if((Y=L)||(Y=i!==null&&i.memoizedState===null?!1:(v&2)!==0),Y?(S=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(v|=1),gn(Rn,v&1),i===null)return Nf(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(L=d.children,i=d.fallback,S?(d=s.mode,S=s.child,L={mode:"hidden",children:L},(d&1)===0&&S!==null?(S.childLanes=0,S.pendingProps=L):S=Qu(L,d,0,null),i=xa(i,d,l,null),S.return=s,i.return=s,S.sibling=i,s.child=S,s.child.memoizedState=ap(l),s.memoizedState=op,i):lp(s,L));if(v=i.memoizedState,v!==null&&(Y=v.dehydrated,Y!==null))return Y_(i,s,L,d,Y,v,l);if(S){S=d.fallback,L=s.mode,v=i.child,Y=v.sibling;var te={mode:"hidden",children:d.children};return(L&1)===0&&s.child!==v?(d=s.child,d.childLanes=0,d.pendingProps=te,s.deletions=null):(d=Lo(v,te),d.subtreeFlags=v.subtreeFlags&14680064),Y!==null?S=Lo(Y,S):(S=xa(S,L,l,null),S.flags|=2),S.return=s,d.return=s,d.sibling=S,s.child=d,d=S,S=s.child,L=i.child.memoizedState,L=L===null?ap(l):{baseLanes:L.baseLanes|l,cachePool:null,transitions:L.transitions},S.memoizedState=L,S.childLanes=i.childLanes&~l,s.memoizedState=op,d}return S=i.child,i=S.sibling,d=Lo(S,{mode:"visible",children:d.children}),(s.mode&1)===0&&(d.lanes=l),d.return=s,d.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=d,s.memoizedState=null,d}function lp(i,s){return s=Qu({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function zu(i,s,l,d){return d!==null&&Uf(d),il(s,i.child,null,l),i=lp(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function Y_(i,s,l,d,v,S,L){if(l)return s.flags&256?(s.flags&=-257,d=np(Error(t(422))),zu(i,s,L,d)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(S=d.fallback,v=s.mode,d=Qu({mode:"visible",children:d.children},v,0,null),S=xa(S,v,L,null),S.flags|=2,d.return=s,S.return=s,d.sibling=S,s.child=d,(s.mode&1)!==0&&il(s,i.child,null,L),s.child.memoizedState=ap(L),s.memoizedState=op,S);if((s.mode&1)===0)return zu(i,s,L,null);if(v.data==="$!"){if(d=v.nextSibling&&v.nextSibling.dataset,d)var Y=d.dgst;return d=Y,S=Error(t(419)),d=np(S,d,void 0),zu(i,s,L,d)}if(Y=(L&i.childLanes)!==0,Oi||Y){if(d=ri,d!==null){switch(L&-L){case 4:v=2;break;case 16:v=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:v=32;break;case 536870912:v=268435456;break;default:v=0}v=(v&(d.suspendedLanes|L))!==0?0:v,v!==0&&v!==S.retryLane&&(S.retryLane=v,Ns(i,v),Br(d,i,v,-1))}return wp(),d=np(Error(t(421))),zu(i,s,L,d)}return v.data==="$?"?(s.flags|=128,s.child=i.child,s=ay.bind(null,i),v._reactRetry=s,null):(i=S.treeContext,Ki=Lr(v.nextSibling),qi=s,Cn=!0,Ur=null,i!==null&&(fr[pr++]=Ls,fr[pr++]=Ds,fr[pr++]=ca,Ls=i.id,Ds=i.overflow,ca=s),s=lp(s,d.children),s.flags|=4096,s)}function X0(i,s,l){i.lanes|=s;var d=i.alternate;d!==null&&(d.lanes|=s),Bf(i.return,s,l)}function cp(i,s,l,d,v){var S=i.memoizedState;S===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:v}:(S.isBackwards=s,S.rendering=null,S.renderingStartTime=0,S.last=d,S.tail=l,S.tailMode=v)}function Y0(i,s,l){var d=s.pendingProps,v=d.revealOrder,S=d.tail;if(Ti(i,s,d.children,l),d=Rn.current,(d&2)!==0)d=d&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&X0(i,l,s);else if(i.tag===19)X0(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}d&=1}if(gn(Rn,d),(s.mode&1)===0)s.memoizedState=null;else switch(v){case"forwards":for(l=s.child,v=null;l!==null;)i=l.alternate,i!==null&&Du(i)===null&&(v=l),l=l.sibling;l=v,l===null?(v=s.child,s.child=null):(v=l.sibling,l.sibling=null),cp(s,!1,v,l,S);break;case"backwards":for(l=null,v=s.child,s.child=null;v!==null;){if(i=v.alternate,i!==null&&Du(i)===null){s.child=v;break}i=v.sibling,v.sibling=l,l=v,v=i}cp(s,!0,l,null,S);break;case"together":cp(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function $u(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function ks(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),ha|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=Lo(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Lo(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function q_(i,s,l){switch(s.tag){case 3:G0(s),nl();break;case 5:l0(s);break;case 1:Fi(s.type)&&Mu(s);break;case 4:Vf(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,v=s.memoizedProps.value;gn(Ru,d._currentValue),d._currentValue=v;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(gn(Rn,Rn.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?j0(i,s,l):(gn(Rn,Rn.current&1),i=ks(i,s,l),i!==null?i.sibling:null);gn(Rn,Rn.current&1);break;case 19:if(d=(l&s.childLanes)!==0,(i.flags&128)!==0){if(d)return Y0(i,s,l);s.flags|=128}if(v=s.memoizedState,v!==null&&(v.rendering=null,v.tail=null,v.lastEffect=null),gn(Rn,Rn.current),d)break;return null;case 22:case 23:return s.lanes=0,$0(i,s,l)}return ks(i,s,l)}var q0,up,K0,Z0;q0=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},up=function(){},K0=function(i,s,l,d){var v=i.memoizedProps;if(v!==d){i=s.stateNode,fa(ss.current);var S=null;switch(l){case"input":v=Bt(i,v),d=Bt(i,d),S=[];break;case"select":v=ae({},v,{value:void 0}),d=ae({},d,{value:void 0}),S=[];break;case"textarea":v=lt(i,v),d=lt(i,d),S=[];break;default:typeof v.onClick!="function"&&typeof d.onClick=="function"&&(i.onclick=As)}it(l,d);var L;l=null;for(be in v)if(!d.hasOwnProperty(be)&&v.hasOwnProperty(be)&&v[be]!=null)if(be==="style"){var Y=v[be];for(L in Y)Y.hasOwnProperty(L)&&(l||(l={}),l[L]="")}else be!=="dangerouslySetInnerHTML"&&be!=="children"&&be!=="suppressContentEditableWarning"&&be!=="suppressHydrationWarning"&&be!=="autoFocus"&&(o.hasOwnProperty(be)?S||(S=[]):(S=S||[]).push(be,null));for(be in d){var te=d[be];if(Y=v!=null?v[be]:void 0,d.hasOwnProperty(be)&&te!==Y&&(te!=null||Y!=null))if(be==="style")if(Y){for(L in Y)!Y.hasOwnProperty(L)||te&&te.hasOwnProperty(L)||(l||(l={}),l[L]="");for(L in te)te.hasOwnProperty(L)&&Y[L]!==te[L]&&(l||(l={}),l[L]=te[L])}else l||(S||(S=[]),S.push(be,l)),l=te;else be==="dangerouslySetInnerHTML"?(te=te?te.__html:void 0,Y=Y?Y.__html:void 0,te!=null&&Y!==te&&(S=S||[]).push(be,te)):be==="children"?typeof te!="string"&&typeof te!="number"||(S=S||[]).push(be,""+te):be!=="suppressContentEditableWarning"&&be!=="suppressHydrationWarning"&&(o.hasOwnProperty(be)?(te!=null&&be==="onScroll"&&He("scroll",i),S||Y===te||(S=[])):(S=S||[]).push(be,te))}l&&(S=S||[]).push("style",l);var be=S;(s.updateQueue=be)&&(s.flags|=4)}},Z0=function(i,s,l,d){l!==d&&(s.flags|=4)};function yc(i,s){if(!Cn)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:d.sibling=null}}function gi(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,d=0;if(s)for(var v=i.child;v!==null;)l|=v.lanes|v.childLanes,d|=v.subtreeFlags&14680064,d|=v.flags&14680064,v.return=i,v=v.sibling;else for(v=i.child;v!==null;)l|=v.lanes|v.childLanes,d|=v.subtreeFlags,d|=v.flags,v.return=i,v=v.sibling;return i.subtreeFlags|=d,i.childLanes=l,s}function K_(i,s,l){var d=s.pendingProps;switch(Lf(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gi(s),null;case 1:return Fi(s.type)&&bu(),gi(s),null;case 3:return d=s.stateNode,ol(),yn(ki),yn(hi),Wf(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(i===null||i.child===null)&&(Cu(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Ur!==null&&(Sp(Ur),Ur=null))),up(i,s),gi(s),null;case 5:Hf(s);var v=fa(mc.current);if(l=s.type,i!==null&&s.stateNode!=null)K0(i,s,l,d,v),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(t(166));return gi(s),null}if(i=fa(ss.current),Cu(s)){d=s.stateNode,l=s.type;var S=s.memoizedProps;switch(d[It]=s,d[kn]=S,i=(s.mode&1)!==0,l){case"dialog":He("cancel",d),He("close",d);break;case"iframe":case"object":case"embed":He("load",d);break;case"video":case"audio":for(v=0;v<Ie.length;v++)He(Ie[v],d);break;case"source":He("error",d);break;case"img":case"image":case"link":He("error",d),He("load",d);break;case"details":He("toggle",d);break;case"input":Ot(d,S),He("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!S.multiple},He("invalid",d);break;case"textarea":H(d,S),He("invalid",d)}it(l,S),v=null;for(var L in S)if(S.hasOwnProperty(L)){var Y=S[L];L==="children"?typeof Y=="string"?d.textContent!==Y&&(S.suppressHydrationWarning!==!0&&is(d.textContent,Y,i),v=["children",Y]):typeof Y=="number"&&d.textContent!==""+Y&&(S.suppressHydrationWarning!==!0&&is(d.textContent,Y,i),v=["children",""+Y]):o.hasOwnProperty(L)&&Y!=null&&L==="onScroll"&&He("scroll",d)}switch(l){case"input":vt(d),J(d,S,!0);break;case"textarea":vt(d),le(d);break;case"select":case"option":break;default:typeof S.onClick=="function"&&(d.onclick=As)}d=v,s.updateQueue=d,d!==null&&(s.flags|=4)}else{L=v.nodeType===9?v:v.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=Ce(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=L.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof d.is=="string"?i=L.createElement(l,{is:d.is}):(i=L.createElement(l),l==="select"&&(L=i,d.multiple?L.multiple=!0:d.size&&(L.size=d.size))):i=L.createElementNS(i,l),i[It]=s,i[kn]=d,q0(i,s,!1,!1),s.stateNode=i;e:{switch(L=et(l,d),l){case"dialog":He("cancel",i),He("close",i),v=d;break;case"iframe":case"object":case"embed":He("load",i),v=d;break;case"video":case"audio":for(v=0;v<Ie.length;v++)He(Ie[v],i);v=d;break;case"source":He("error",i),v=d;break;case"img":case"image":case"link":He("error",i),He("load",i),v=d;break;case"details":He("toggle",i),v=d;break;case"input":Ot(i,d),v=Bt(i,d),He("invalid",i);break;case"option":v=d;break;case"select":i._wrapperState={wasMultiple:!!d.multiple},v=ae({},d,{value:void 0}),He("invalid",i);break;case"textarea":H(i,d),v=lt(i,d),He("invalid",i);break;default:v=d}it(l,v),Y=v;for(S in Y)if(Y.hasOwnProperty(S)){var te=Y[S];S==="style"?Fe(i,te):S==="dangerouslySetInnerHTML"?(te=te?te.__html:void 0,te!=null&&st(i,te)):S==="children"?typeof te=="string"?(l!=="textarea"||te!=="")&&We(i,te):typeof te=="number"&&We(i,""+te):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(o.hasOwnProperty(S)?te!=null&&S==="onScroll"&&He("scroll",i):te!=null&&N(i,S,te,L))}switch(l){case"input":vt(i),J(i,d,!1);break;case"textarea":vt(i),le(i);break;case"option":d.value!=null&&i.setAttribute("value",""+Re(d.value));break;case"select":i.multiple=!!d.multiple,S=d.value,S!=null?qt(i,!!d.multiple,S,!1):d.defaultValue!=null&&qt(i,!!d.multiple,d.defaultValue,!0);break;default:typeof v.onClick=="function"&&(i.onclick=As)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return gi(s),null;case 6:if(i&&s.stateNode!=null)Z0(i,s,i.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(t(166));if(l=fa(mc.current),fa(ss.current),Cu(s)){if(d=s.stateNode,l=s.memoizedProps,d[It]=s,(S=d.nodeValue!==l)&&(i=qi,i!==null))switch(i.tag){case 3:is(d.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&is(d.nodeValue,l,(i.mode&1)!==0)}S&&(s.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[It]=s,s.stateNode=d}return gi(s),null;case 13:if(yn(Rn),d=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Cn&&Ki!==null&&(s.mode&1)!==0&&(s.flags&128)===0)e0(),nl(),s.flags|=98560,S=!1;else if(S=Cu(s),d!==null&&d.dehydrated!==null){if(i===null){if(!S)throw Error(t(318));if(S=s.memoizedState,S=S!==null?S.dehydrated:null,!S)throw Error(t(317));S[It]=s}else nl(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;gi(s),S=!1}else Ur!==null&&(Sp(Ur),Ur=null),S=!0;if(!S)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(d=d!==null,d!==(i!==null&&i.memoizedState!==null)&&d&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(Rn.current&1)!==0?Xn===0&&(Xn=3):wp())),s.updateQueue!==null&&(s.flags|=4),gi(s),null);case 4:return ol(),up(i,s),i===null&&Pt(s.stateNode.containerInfo),gi(s),null;case 10:return Of(s.type._context),gi(s),null;case 17:return Fi(s.type)&&bu(),gi(s),null;case 19:if(yn(Rn),S=s.memoizedState,S===null)return gi(s),null;if(d=(s.flags&128)!==0,L=S.rendering,L===null)if(d)yc(S,!1);else{if(Xn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(L=Du(i),L!==null){for(s.flags|=128,yc(S,!1),d=L.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=l,l=s.child;l!==null;)S=l,i=d,S.flags&=14680066,L=S.alternate,L===null?(S.childLanes=0,S.lanes=i,S.child=null,S.subtreeFlags=0,S.memoizedProps=null,S.memoizedState=null,S.updateQueue=null,S.dependencies=null,S.stateNode=null):(S.childLanes=L.childLanes,S.lanes=L.lanes,S.child=L.child,S.subtreeFlags=0,S.deletions=null,S.memoizedProps=L.memoizedProps,S.memoizedState=L.memoizedState,S.updateQueue=L.updateQueue,S.type=L.type,i=L.dependencies,S.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return gn(Rn,Rn.current&1|2),s.child}i=i.sibling}S.tail!==null&&U()>ul&&(s.flags|=128,d=!0,yc(S,!1),s.lanes=4194304)}else{if(!d)if(i=Du(L),i!==null){if(s.flags|=128,d=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),yc(S,!0),S.tail===null&&S.tailMode==="hidden"&&!L.alternate&&!Cn)return gi(s),null}else 2*U()-S.renderingStartTime>ul&&l!==1073741824&&(s.flags|=128,d=!0,yc(S,!1),s.lanes=4194304);S.isBackwards?(L.sibling=s.child,s.child=L):(l=S.last,l!==null?l.sibling=L:s.child=L,S.last=L)}return S.tail!==null?(s=S.tail,S.rendering=s,S.tail=s.sibling,S.renderingStartTime=U(),s.sibling=null,l=Rn.current,gn(Rn,d?l&1|2:l&1),s):(gi(s),null);case 22:case 23:return Mp(),d=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==d&&(s.flags|=8192),d&&(s.mode&1)!==0?(Zi&1073741824)!==0&&(gi(s),s.subtreeFlags&6&&(s.flags|=8192)):gi(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function Z_(i,s){switch(Lf(s),s.tag){case 1:return Fi(s.type)&&bu(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return ol(),yn(ki),yn(hi),Wf(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Hf(s),null;case 13:if(yn(Rn),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));nl()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return yn(Rn),null;case 4:return ol(),null;case 10:return Of(s.type._context),null;case 22:case 23:return Mp(),null;case 24:return null;default:return null}}var Vu=!1,vi=!1,J_=typeof WeakSet=="function"?WeakSet:Set,_t=null;function ll(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){Ln(i,s,d)}else l.current=null}function dp(i,s,l){try{l()}catch(d){Ln(i,s,d)}}var J0=!1;function Q_(i,s){if(Rs=pi,i=cr(),ns(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var v=d.anchorOffset,S=d.focusNode;d=d.focusOffset;try{l.nodeType,S.nodeType}catch{l=null;break e}var L=0,Y=-1,te=-1,be=0,$e=0,Xe=i,ze=null;t:for(;;){for(var ft;Xe!==l||v!==0&&Xe.nodeType!==3||(Y=L+v),Xe!==S||d!==0&&Xe.nodeType!==3||(te=L+d),Xe.nodeType===3&&(L+=Xe.nodeValue.length),(ft=Xe.firstChild)!==null;)ze=Xe,Xe=ft;for(;;){if(Xe===i)break t;if(ze===l&&++be===v&&(Y=L),ze===S&&++$e===d&&(te=L),(ft=Xe.nextSibling)!==null)break;Xe=ze,ze=Xe.parentNode}Xe=ft}l=Y===-1||te===-1?null:{start:Y,end:te}}else l=null}l=l||{start:0,end:0}}else l=null;for(aa={focusedElem:i,selectionRange:l},pi=!1,_t=s;_t!==null;)if(s=_t,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,_t=i;else for(;_t!==null;){s=_t;try{var St=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(St!==null){var wt=St.memoizedProps,On=St.memoizedState,me=s.stateNode,ce=me.getSnapshotBeforeUpdate(s.elementType===s.type?wt:kr(s.type,wt),On);me.__reactInternalSnapshotBeforeUpdate=ce}break;case 3:var ye=s.stateNode.containerInfo;ye.nodeType===1?ye.textContent="":ye.nodeType===9&&ye.documentElement&&ye.removeChild(ye.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ke){Ln(s,s.return,Ke)}if(i=s.sibling,i!==null){i.return=s.return,_t=i;break}_t=s.return}return St=J0,J0=!1,St}function Sc(i,s,l){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var v=d=d.next;do{if((v.tag&i)===i){var S=v.destroy;v.destroy=void 0,S!==void 0&&dp(s,l,S)}v=v.next}while(v!==d)}}function Hu(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var d=l.create;l.destroy=d()}l=l.next}while(l!==s)}}function fp(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function Q0(i){var s=i.alternate;s!==null&&(i.alternate=null,Q0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[It],delete s[kn],delete s[rs],delete s[Rf],delete s[Fn])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function eg(i){return i.tag===5||i.tag===3||i.tag===4}function tg(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||eg(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function pp(i,s,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=As));else if(d!==4&&(i=i.child,i!==null))for(pp(i,s,l),i=i.sibling;i!==null;)pp(i,s,l),i=i.sibling}function hp(i,s,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(d!==4&&(i=i.child,i!==null))for(hp(i,s,l),i=i.sibling;i!==null;)hp(i,s,l),i=i.sibling}var ci=null,Fr=!1;function Co(i,s,l){for(l=l.child;l!==null;)ng(i,s,l),l=l.sibling}function ng(i,s,l){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(se,l)}catch{}switch(l.tag){case 5:vi||ll(l,s);case 6:var d=ci,v=Fr;ci=null,Co(i,s,l),ci=d,Fr=v,ci!==null&&(Fr?(i=ci,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):ci.removeChild(l.stateNode));break;case 18:ci!==null&&(Fr?(i=ci,l=l.stateNode,i.nodeType===8?Ja(i.parentNode,l):i.nodeType===1&&Ja(i,l),Ko(i)):Ja(ci,l.stateNode));break;case 4:d=ci,v=Fr,ci=l.stateNode.containerInfo,Fr=!0,Co(i,s,l),ci=d,Fr=v;break;case 0:case 11:case 14:case 15:if(!vi&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){v=d=d.next;do{var S=v,L=S.destroy;S=S.tag,L!==void 0&&((S&2)!==0||(S&4)!==0)&&dp(l,s,L),v=v.next}while(v!==d)}Co(i,s,l);break;case 1:if(!vi&&(ll(l,s),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(Y){Ln(l,s,Y)}Co(i,s,l);break;case 21:Co(i,s,l);break;case 22:l.mode&1?(vi=(d=vi)||l.memoizedState!==null,Co(i,s,l),vi=d):Co(i,s,l);break;default:Co(i,s,l)}}function ig(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new J_),s.forEach(function(d){var v=ly.bind(null,i,d);l.has(d)||(l.add(d),d.then(v,v))})}}function Or(i,s){var l=s.deletions;if(l!==null)for(var d=0;d<l.length;d++){var v=l[d];try{var S=i,L=s,Y=L;e:for(;Y!==null;){switch(Y.tag){case 5:ci=Y.stateNode,Fr=!1;break e;case 3:ci=Y.stateNode.containerInfo,Fr=!0;break e;case 4:ci=Y.stateNode.containerInfo,Fr=!0;break e}Y=Y.return}if(ci===null)throw Error(t(160));ng(S,L,v),ci=null,Fr=!1;var te=v.alternate;te!==null&&(te.return=null),v.return=null}catch(be){Ln(v,s,be)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)rg(s,i),s=s.sibling}function rg(i,s){var l=i.alternate,d=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Or(s,i),as(i),d&4){try{Sc(3,i,i.return),Hu(3,i)}catch(wt){Ln(i,i.return,wt)}try{Sc(5,i,i.return)}catch(wt){Ln(i,i.return,wt)}}break;case 1:Or(s,i),as(i),d&512&&l!==null&&ll(l,l.return);break;case 5:if(Or(s,i),as(i),d&512&&l!==null&&ll(l,l.return),i.flags&32){var v=i.stateNode;try{We(v,"")}catch(wt){Ln(i,i.return,wt)}}if(d&4&&(v=i.stateNode,v!=null)){var S=i.memoizedProps,L=l!==null?l.memoizedProps:S,Y=i.type,te=i.updateQueue;if(i.updateQueue=null,te!==null)try{Y==="input"&&S.type==="radio"&&S.name!=null&&Vt(v,S),et(Y,L);var be=et(Y,S);for(L=0;L<te.length;L+=2){var $e=te[L],Xe=te[L+1];$e==="style"?Fe(v,Xe):$e==="dangerouslySetInnerHTML"?st(v,Xe):$e==="children"?We(v,Xe):N(v,$e,Xe,be)}switch(Y){case"input":Xt(v,S);break;case"textarea":R(v,S);break;case"select":var ze=v._wrapperState.wasMultiple;v._wrapperState.wasMultiple=!!S.multiple;var ft=S.value;ft!=null?qt(v,!!S.multiple,ft,!1):ze!==!!S.multiple&&(S.defaultValue!=null?qt(v,!!S.multiple,S.defaultValue,!0):qt(v,!!S.multiple,S.multiple?[]:"",!1))}v[kn]=S}catch(wt){Ln(i,i.return,wt)}}break;case 6:if(Or(s,i),as(i),d&4){if(i.stateNode===null)throw Error(t(162));v=i.stateNode,S=i.memoizedProps;try{v.nodeValue=S}catch(wt){Ln(i,i.return,wt)}}break;case 3:if(Or(s,i),as(i),d&4&&l!==null&&l.memoizedState.isDehydrated)try{Ko(s.containerInfo)}catch(wt){Ln(i,i.return,wt)}break;case 4:Or(s,i),as(i);break;case 13:Or(s,i),as(i),v=i.child,v.flags&8192&&(S=v.memoizedState!==null,v.stateNode.isHidden=S,!S||v.alternate!==null&&v.alternate.memoizedState!==null||(vp=U())),d&4&&ig(i);break;case 22:if($e=l!==null&&l.memoizedState!==null,i.mode&1?(vi=(be=vi)||$e,Or(s,i),vi=be):Or(s,i),as(i),d&8192){if(be=i.memoizedState!==null,(i.stateNode.isHidden=be)&&!$e&&(i.mode&1)!==0)for(_t=i,$e=i.child;$e!==null;){for(Xe=_t=$e;_t!==null;){switch(ze=_t,ft=ze.child,ze.tag){case 0:case 11:case 14:case 15:Sc(4,ze,ze.return);break;case 1:ll(ze,ze.return);var St=ze.stateNode;if(typeof St.componentWillUnmount=="function"){d=ze,l=ze.return;try{s=d,St.props=s.memoizedProps,St.state=s.memoizedState,St.componentWillUnmount()}catch(wt){Ln(d,l,wt)}}break;case 5:ll(ze,ze.return);break;case 22:if(ze.memoizedState!==null){ag(Xe);continue}}ft!==null?(ft.return=ze,_t=ft):ag(Xe)}$e=$e.sibling}e:for($e=null,Xe=i;;){if(Xe.tag===5){if($e===null){$e=Xe;try{v=Xe.stateNode,be?(S=v.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none"):(Y=Xe.stateNode,te=Xe.memoizedProps.style,L=te!=null&&te.hasOwnProperty("display")?te.display:null,Y.style.display=Ue("display",L))}catch(wt){Ln(i,i.return,wt)}}}else if(Xe.tag===6){if($e===null)try{Xe.stateNode.nodeValue=be?"":Xe.memoizedProps}catch(wt){Ln(i,i.return,wt)}}else if((Xe.tag!==22&&Xe.tag!==23||Xe.memoizedState===null||Xe===i)&&Xe.child!==null){Xe.child.return=Xe,Xe=Xe.child;continue}if(Xe===i)break e;for(;Xe.sibling===null;){if(Xe.return===null||Xe.return===i)break e;$e===Xe&&($e=null),Xe=Xe.return}$e===Xe&&($e=null),Xe.sibling.return=Xe.return,Xe=Xe.sibling}}break;case 19:Or(s,i),as(i),d&4&&ig(i);break;case 21:break;default:Or(s,i),as(i)}}function as(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(eg(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var v=d.stateNode;d.flags&32&&(We(v,""),d.flags&=-33);var S=tg(i);hp(i,S,v);break;case 3:case 4:var L=d.stateNode.containerInfo,Y=tg(i);pp(i,Y,L);break;default:throw Error(t(161))}}catch(te){Ln(i,i.return,te)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function ey(i,s,l){_t=i,sg(i)}function sg(i,s,l){for(var d=(i.mode&1)!==0;_t!==null;){var v=_t,S=v.child;if(v.tag===22&&d){var L=v.memoizedState!==null||Vu;if(!L){var Y=v.alternate,te=Y!==null&&Y.memoizedState!==null||vi;Y=Vu;var be=vi;if(Vu=L,(vi=te)&&!be)for(_t=v;_t!==null;)L=_t,te=L.child,L.tag===22&&L.memoizedState!==null?lg(v):te!==null?(te.return=L,_t=te):lg(v);for(;S!==null;)_t=S,sg(S),S=S.sibling;_t=v,Vu=Y,vi=be}og(i)}else(v.subtreeFlags&8772)!==0&&S!==null?(S.return=v,_t=S):og(i)}}function og(i){for(;_t!==null;){var s=_t;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:vi||Hu(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!vi)if(l===null)d.componentDidMount();else{var v=s.elementType===s.type?l.memoizedProps:kr(s.type,l.memoizedProps);d.componentDidUpdate(v,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var S=s.updateQueue;S!==null&&a0(s,S,d);break;case 3:var L=s.updateQueue;if(L!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}a0(s,L,l)}break;case 5:var Y=s.stateNode;if(l===null&&s.flags&4){l=Y;var te=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":te.autoFocus&&l.focus();break;case"img":te.src&&(l.src=te.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var be=s.alternate;if(be!==null){var $e=be.memoizedState;if($e!==null){var Xe=$e.dehydrated;Xe!==null&&Ko(Xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}vi||s.flags&512&&fp(s)}catch(ze){Ln(s,s.return,ze)}}if(s===i){_t=null;break}if(l=s.sibling,l!==null){l.return=s.return,_t=l;break}_t=s.return}}function ag(i){for(;_t!==null;){var s=_t;if(s===i){_t=null;break}var l=s.sibling;if(l!==null){l.return=s.return,_t=l;break}_t=s.return}}function lg(i){for(;_t!==null;){var s=_t;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Hu(4,s)}catch(te){Ln(s,l,te)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var v=s.return;try{d.componentDidMount()}catch(te){Ln(s,v,te)}}var S=s.return;try{fp(s)}catch(te){Ln(s,S,te)}break;case 5:var L=s.return;try{fp(s)}catch(te){Ln(s,L,te)}}}catch(te){Ln(s,s.return,te)}if(s===i){_t=null;break}var Y=s.sibling;if(Y!==null){Y.return=s.return,_t=Y;break}_t=s.return}}var ty=Math.ceil,Gu=k.ReactCurrentDispatcher,mp=k.ReactCurrentOwner,gr=k.ReactCurrentBatchConfig,cn=0,ri=null,$n=null,ui=0,Zi=0,cl=dr(0),Xn=0,bc=null,ha=0,Wu=0,gp=0,Mc=null,Bi=null,vp=0,ul=1/0,Fs=null,ju=!1,xp=null,Ao=null,Xu=!1,Ro=null,Yu=0,wc=0,_p=null,qu=-1,Ku=0;function Ci(){return(cn&6)!==0?U():qu!==-1?qu:qu=U()}function Po(i){return(i.mode&1)===0?1:(cn&2)!==0&&ui!==0?ui&-ui:O_.transition!==null?(Ku===0&&(Ku=Nn()),Ku):(i=At,i!==0||(i=window.event,i=i===void 0?16:Qo(i.type)),i)}function Br(i,s,l,d){if(50<wc)throw wc=0,_p=null,Error(t(185));Dt(i,l,d),((cn&2)===0||i!==ri)&&(i===ri&&((cn&2)===0&&(Wu|=l),Xn===4&&Io(i,ui)),zi(i,d),l===1&&cn===0&&(s.mode&1)===0&&(ul=U()+500,wu&&wo()))}function zi(i,s){var l=i.callbackNode;hn(i,s);var d=xt(i,i===ri?ui:0);if(d===0)l!==null&&Mi(l),i.callbackNode=null,i.callbackPriority=0;else if(s=d&-d,i.callbackPriority!==s){if(l!=null&&Mi(l),s===1)i.tag===0?F_(ug.bind(null,i)):qm(ug.bind(null,i)),Cf(function(){(cn&6)===0&&wo()}),l=null;else{switch(An(d)){case 1:l=ve;break;case 4:l=he;break;case 16:l=pe;break;case 536870912:l=Q;break;default:l=pe}l=xg(l,cg.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function cg(i,s){if(qu=-1,Ku=0,(cn&6)!==0)throw Error(t(327));var l=i.callbackNode;if(dl()&&i.callbackNode!==l)return null;var d=xt(i,i===ri?ui:0);if(d===0)return null;if((d&30)!==0||(d&i.expiredLanes)!==0||s)s=Zu(i,d);else{s=d;var v=cn;cn|=2;var S=fg();(ri!==i||ui!==s)&&(Fs=null,ul=U()+500,ga(i,s));do try{ry();break}catch(Y){dg(i,Y)}while(!0);Ff(),Gu.current=S,cn=v,$n!==null?s=0:(ri=null,ui=0,s=Xn)}if(s!==0){if(s===2&&(v=yt(i),v!==0&&(d=v,s=yp(i,v))),s===1)throw l=bc,ga(i,0),Io(i,d),zi(i,U()),l;if(s===6)Io(i,d);else{if(v=i.current.alternate,(d&30)===0&&!ny(v)&&(s=Zu(i,d),s===2&&(S=yt(i),S!==0&&(d=S,s=yp(i,S))),s===1))throw l=bc,ga(i,0),Io(i,d),zi(i,U()),l;switch(i.finishedWork=v,i.finishedLanes=d,s){case 0:case 1:throw Error(t(345));case 2:va(i,Bi,Fs);break;case 3:if(Io(i,d),(d&130023424)===d&&(s=vp+500-U(),10<s)){if(xt(i,0)!==0)break;if(v=i.suspendedLanes,(v&d)!==d){Ci(),i.pingedLanes|=i.suspendedLanes&v;break}i.timeoutHandle=Za(va.bind(null,i,Bi,Fs),s);break}va(i,Bi,Fs);break;case 4:if(Io(i,d),(d&4194240)===d)break;for(s=i.eventTimes,v=-1;0<d;){var L=31-Ae(d);S=1<<L,L=s[L],L>v&&(v=L),d&=~S}if(d=v,d=U()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*ty(d/1960))-d,10<d){i.timeoutHandle=Za(va.bind(null,i,Bi,Fs),d);break}va(i,Bi,Fs);break;case 5:va(i,Bi,Fs);break;default:throw Error(t(329))}}}return zi(i,U()),i.callbackNode===l?cg.bind(null,i):null}function yp(i,s){var l=Mc;return i.current.memoizedState.isDehydrated&&(ga(i,s).flags|=256),i=Zu(i,s),i!==2&&(s=Bi,Bi=l,s!==null&&Sp(s)),i}function Sp(i){Bi===null?Bi=i:Bi.push.apply(Bi,i)}function ny(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var v=l[d],S=v.getSnapshot;v=v.value;try{if(!Xi(S(),v))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Io(i,s){for(s&=~gp,s&=~Wu,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-Ae(s),d=1<<l;i[l]=-1,s&=~d}}function ug(i){if((cn&6)!==0)throw Error(t(327));dl();var s=xt(i,0);if((s&1)===0)return zi(i,U()),null;var l=Zu(i,s);if(i.tag!==0&&l===2){var d=yt(i);d!==0&&(s=d,l=yp(i,d))}if(l===1)throw l=bc,ga(i,0),Io(i,s),zi(i,U()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,va(i,Bi,Fs),zi(i,U()),null}function bp(i,s){var l=cn;cn|=1;try{return i(s)}finally{cn=l,cn===0&&(ul=U()+500,wu&&wo())}}function ma(i){Ro!==null&&Ro.tag===0&&(cn&6)===0&&dl();var s=cn;cn|=1;var l=gr.transition,d=At;try{if(gr.transition=null,At=1,i)return i()}finally{At=d,gr.transition=l,cn=s,(cn&6)===0&&wo()}}function Mp(){Zi=cl.current,yn(cl)}function ga(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,uc(l)),$n!==null)for(l=$n.return;l!==null;){var d=l;switch(Lf(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&bu();break;case 3:ol(),yn(ki),yn(hi),Wf();break;case 5:Hf(d);break;case 4:ol();break;case 13:yn(Rn);break;case 19:yn(Rn);break;case 10:Of(d.type._context);break;case 22:case 23:Mp()}l=l.return}if(ri=i,$n=i=Lo(i.current,null),ui=Zi=s,Xn=0,bc=null,gp=Wu=ha=0,Bi=Mc=null,da!==null){for(s=0;s<da.length;s++)if(l=da[s],d=l.interleaved,d!==null){l.interleaved=null;var v=d.next,S=l.pending;if(S!==null){var L=S.next;S.next=v,d.next=L}l.pending=d}da=null}return i}function dg(i,s){do{var l=$n;try{if(Ff(),Nu.current=Ou,Uu){for(var d=Pn.memoizedState;d!==null;){var v=d.queue;v!==null&&(v.pending=null),d=d.next}Uu=!1}if(pa=0,ii=jn=Pn=null,gc=!1,vc=0,mp.current=null,l===null||l.return===null){Xn=1,bc=s,$n=null;break}e:{var S=i,L=l.return,Y=l,te=s;if(s=ui,Y.flags|=32768,te!==null&&typeof te=="object"&&typeof te.then=="function"){var be=te,$e=Y,Xe=$e.tag;if(($e.mode&1)===0&&(Xe===0||Xe===11||Xe===15)){var ze=$e.alternate;ze?($e.updateQueue=ze.updateQueue,$e.memoizedState=ze.memoizedState,$e.lanes=ze.lanes):($e.updateQueue=null,$e.memoizedState=null)}var ft=k0(L);if(ft!==null){ft.flags&=-257,F0(ft,L,Y,S,s),ft.mode&1&&U0(S,be,s),s=ft,te=be;var St=s.updateQueue;if(St===null){var wt=new Set;wt.add(te),s.updateQueue=wt}else St.add(te);break e}else{if((s&1)===0){U0(S,be,s),wp();break e}te=Error(t(426))}}else if(Cn&&Y.mode&1){var On=k0(L);if(On!==null){(On.flags&65536)===0&&(On.flags|=256),F0(On,L,Y,S,s),Uf(al(te,Y));break e}}S=te=al(te,Y),Xn!==4&&(Xn=2),Mc===null?Mc=[S]:Mc.push(S),S=L;do{switch(S.tag){case 3:S.flags|=65536,s&=-s,S.lanes|=s;var me=D0(S,te,s);o0(S,me);break e;case 1:Y=te;var ce=S.type,ye=S.stateNode;if((S.flags&128)===0&&(typeof ce.getDerivedStateFromError=="function"||ye!==null&&typeof ye.componentDidCatch=="function"&&(Ao===null||!Ao.has(ye)))){S.flags|=65536,s&=-s,S.lanes|=s;var Ke=N0(S,Y,s);o0(S,Ke);break e}}S=S.return}while(S!==null)}hg(l)}catch(Tt){s=Tt,$n===l&&l!==null&&($n=l=l.return);continue}break}while(!0)}function fg(){var i=Gu.current;return Gu.current=Ou,i===null?Ou:i}function wp(){(Xn===0||Xn===3||Xn===2)&&(Xn=4),ri===null||(ha&268435455)===0&&(Wu&268435455)===0||Io(ri,ui)}function Zu(i,s){var l=cn;cn|=2;var d=fg();(ri!==i||ui!==s)&&(Fs=null,ga(i,s));do try{iy();break}catch(v){dg(i,v)}while(!0);if(Ff(),cn=l,Gu.current=d,$n!==null)throw Error(t(261));return ri=null,ui=0,Xn}function iy(){for(;$n!==null;)pg($n)}function ry(){for(;$n!==null&&!io();)pg($n)}function pg(i){var s=vg(i.alternate,i,Zi);i.memoizedProps=i.pendingProps,s===null?hg(i):$n=s,mp.current=null}function hg(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=K_(l,s,Zi),l!==null){$n=l;return}}else{if(l=Z_(l,s),l!==null){l.flags&=32767,$n=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Xn=6,$n=null;return}}if(s=s.sibling,s!==null){$n=s;return}$n=s=i}while(s!==null);Xn===0&&(Xn=5)}function va(i,s,l){var d=At,v=gr.transition;try{gr.transition=null,At=1,sy(i,s,l,d)}finally{gr.transition=v,At=d}return null}function sy(i,s,l,d){do dl();while(Ro!==null);if((cn&6)!==0)throw Error(t(327));l=i.finishedWork;var v=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var S=l.lanes|l.childLanes;if(sn(i,S),i===ri&&($n=ri=null,ui=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Xu||(Xu=!0,xg(pe,function(){return dl(),null})),S=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||S){S=gr.transition,gr.transition=null;var L=At;At=1;var Y=cn;cn|=4,mp.current=null,Q_(i,l),rg(l,i),vo(aa),pi=!!Rs,aa=Rs=null,i.current=l,ey(l),ei(),cn=Y,At=L,gr.transition=S}else i.current=l;if(Xu&&(Xu=!1,Ro=i,Yu=v),S=i.pendingLanes,S===0&&(Ao=null),we(l.stateNode),zi(i,U()),s!==null)for(d=i.onRecoverableError,l=0;l<s.length;l++)v=s[l],d(v.value,{componentStack:v.stack,digest:v.digest});if(ju)throw ju=!1,i=xp,xp=null,i;return(Yu&1)!==0&&i.tag!==0&&dl(),S=i.pendingLanes,(S&1)!==0?i===_p?wc++:(wc=0,_p=i):wc=0,wo(),null}function dl(){if(Ro!==null){var i=An(Yu),s=gr.transition,l=At;try{if(gr.transition=null,At=16>i?16:i,Ro===null)var d=!1;else{if(i=Ro,Ro=null,Yu=0,(cn&6)!==0)throw Error(t(331));var v=cn;for(cn|=4,_t=i.current;_t!==null;){var S=_t,L=S.child;if((_t.flags&16)!==0){var Y=S.deletions;if(Y!==null){for(var te=0;te<Y.length;te++){var be=Y[te];for(_t=be;_t!==null;){var $e=_t;switch($e.tag){case 0:case 11:case 15:Sc(8,$e,S)}var Xe=$e.child;if(Xe!==null)Xe.return=$e,_t=Xe;else for(;_t!==null;){$e=_t;var ze=$e.sibling,ft=$e.return;if(Q0($e),$e===be){_t=null;break}if(ze!==null){ze.return=ft,_t=ze;break}_t=ft}}}var St=S.alternate;if(St!==null){var wt=St.child;if(wt!==null){St.child=null;do{var On=wt.sibling;wt.sibling=null,wt=On}while(wt!==null)}}_t=S}}if((S.subtreeFlags&2064)!==0&&L!==null)L.return=S,_t=L;else e:for(;_t!==null;){if(S=_t,(S.flags&2048)!==0)switch(S.tag){case 0:case 11:case 15:Sc(9,S,S.return)}var me=S.sibling;if(me!==null){me.return=S.return,_t=me;break e}_t=S.return}}var ce=i.current;for(_t=ce;_t!==null;){L=_t;var ye=L.child;if((L.subtreeFlags&2064)!==0&&ye!==null)ye.return=L,_t=ye;else e:for(L=ce;_t!==null;){if(Y=_t,(Y.flags&2048)!==0)try{switch(Y.tag){case 0:case 11:case 15:Hu(9,Y)}}catch(Tt){Ln(Y,Y.return,Tt)}if(Y===L){_t=null;break e}var Ke=Y.sibling;if(Ke!==null){Ke.return=Y.return,_t=Ke;break e}_t=Y.return}}if(cn=v,wo(),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(se,i)}catch{}d=!0}return d}finally{At=l,gr.transition=s}}return!1}function mg(i,s,l){s=al(l,s),s=D0(i,s,1),i=To(i,s,1),s=Ci(),i!==null&&(Dt(i,1,s),zi(i,s))}function Ln(i,s,l){if(i.tag===3)mg(i,i,l);else for(;s!==null;){if(s.tag===3){mg(s,i,l);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Ao===null||!Ao.has(d))){i=al(l,i),i=N0(s,i,1),s=To(s,i,1),i=Ci(),s!==null&&(Dt(s,1,i),zi(s,i));break}}s=s.return}}function oy(i,s,l){var d=i.pingCache;d!==null&&d.delete(s),s=Ci(),i.pingedLanes|=i.suspendedLanes&l,ri===i&&(ui&l)===l&&(Xn===4||Xn===3&&(ui&130023424)===ui&&500>U()-vp?ga(i,0):gp|=l),zi(i,s)}function gg(i,s){s===0&&((i.mode&1)===0?s=1:(s=ht,ht<<=1,(ht&130023424)===0&&(ht=4194304)));var l=Ci();i=Ns(i,s),i!==null&&(Dt(i,s,l),zi(i,l))}function ay(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),gg(i,l)}function ly(i,s){var l=0;switch(i.tag){case 13:var d=i.stateNode,v=i.memoizedState;v!==null&&(l=v.retryLane);break;case 19:d=i.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(s),gg(i,l)}var vg;vg=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||ki.current)Oi=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return Oi=!1,q_(i,s,l);Oi=(i.flags&131072)!==0}else Oi=!1,Cn&&(s.flags&1048576)!==0&&Km(s,Tu,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;$u(i,s),i=s.pendingProps;var v=Qa(s,hi.current);sl(s,l),v=Yf(null,s,d,i,v,l);var S=qf();return s.flags|=1,typeof v=="object"&&v!==null&&typeof v.render=="function"&&v.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Fi(d)?(S=!0,Mu(s)):S=!1,s.memoizedState=v.state!==null&&v.state!==void 0?v.state:null,$f(s),v.updater=Bu,s.stateNode=v,v._reactInternals=s,tp(s,d,i,l),s=sp(null,s,d,!0,S,l)):(s.tag=0,Cn&&S&&If(s),Ti(null,s,v,l),s=s.child),s;case 16:d=s.elementType;e:{switch($u(i,s),i=s.pendingProps,v=d._init,d=v(d._payload),s.type=d,v=s.tag=uy(d),i=kr(d,i),v){case 0:s=rp(null,s,d,i,l);break e;case 1:s=H0(null,s,d,i,l);break e;case 11:s=O0(null,s,d,i,l);break e;case 14:s=B0(null,s,d,kr(d.type,i),l);break e}throw Error(t(306,d,""))}return s;case 0:return d=s.type,v=s.pendingProps,v=s.elementType===d?v:kr(d,v),rp(i,s,d,v,l);case 1:return d=s.type,v=s.pendingProps,v=s.elementType===d?v:kr(d,v),H0(i,s,d,v,l);case 3:e:{if(G0(s),i===null)throw Error(t(387));d=s.pendingProps,S=s.memoizedState,v=S.element,s0(i,s),Lu(s,d,null,l);var L=s.memoizedState;if(d=L.element,S.isDehydrated)if(S={element:d,isDehydrated:!1,cache:L.cache,pendingSuspenseBoundaries:L.pendingSuspenseBoundaries,transitions:L.transitions},s.updateQueue.baseState=S,s.memoizedState=S,s.flags&256){v=al(Error(t(423)),s),s=W0(i,s,d,l,v);break e}else if(d!==v){v=al(Error(t(424)),s),s=W0(i,s,d,l,v);break e}else for(Ki=Lr(s.stateNode.containerInfo.firstChild),qi=s,Cn=!0,Ur=null,l=i0(s,null,d,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(nl(),d===v){s=ks(i,s,l);break e}Ti(i,s,d,l)}s=s.child}return s;case 5:return l0(s),i===null&&Nf(s),d=s.type,v=s.pendingProps,S=i!==null?i.memoizedProps:null,L=v.children,yo(d,v)?L=null:S!==null&&yo(d,S)&&(s.flags|=32),V0(i,s),Ti(i,s,L,l),s.child;case 6:return i===null&&Nf(s),null;case 13:return j0(i,s,l);case 4:return Vf(s,s.stateNode.containerInfo),d=s.pendingProps,i===null?s.child=il(s,null,d,l):Ti(i,s,d,l),s.child;case 11:return d=s.type,v=s.pendingProps,v=s.elementType===d?v:kr(d,v),O0(i,s,d,v,l);case 7:return Ti(i,s,s.pendingProps,l),s.child;case 8:return Ti(i,s,s.pendingProps.children,l),s.child;case 12:return Ti(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(d=s.type._context,v=s.pendingProps,S=s.memoizedProps,L=v.value,gn(Ru,d._currentValue),d._currentValue=L,S!==null)if(Xi(S.value,L)){if(S.children===v.children&&!ki.current){s=ks(i,s,l);break e}}else for(S=s.child,S!==null&&(S.return=s);S!==null;){var Y=S.dependencies;if(Y!==null){L=S.child;for(var te=Y.firstContext;te!==null;){if(te.context===d){if(S.tag===1){te=Us(-1,l&-l),te.tag=2;var be=S.updateQueue;if(be!==null){be=be.shared;var $e=be.pending;$e===null?te.next=te:(te.next=$e.next,$e.next=te),be.pending=te}}S.lanes|=l,te=S.alternate,te!==null&&(te.lanes|=l),Bf(S.return,l,s),Y.lanes|=l;break}te=te.next}}else if(S.tag===10)L=S.type===s.type?null:S.child;else if(S.tag===18){if(L=S.return,L===null)throw Error(t(341));L.lanes|=l,Y=L.alternate,Y!==null&&(Y.lanes|=l),Bf(L,l,s),L=S.sibling}else L=S.child;if(L!==null)L.return=S;else for(L=S;L!==null;){if(L===s){L=null;break}if(S=L.sibling,S!==null){S.return=L.return,L=S;break}L=L.return}S=L}Ti(i,s,v.children,l),s=s.child}return s;case 9:return v=s.type,d=s.pendingProps.children,sl(s,l),v=hr(v),d=d(v),s.flags|=1,Ti(i,s,d,l),s.child;case 14:return d=s.type,v=kr(d,s.pendingProps),v=kr(d.type,v),B0(i,s,d,v,l);case 15:return z0(i,s,s.type,s.pendingProps,l);case 17:return d=s.type,v=s.pendingProps,v=s.elementType===d?v:kr(d,v),$u(i,s),s.tag=1,Fi(d)?(i=!0,Mu(s)):i=!1,sl(s,l),I0(s,d,v),tp(s,d,v,l),sp(null,s,d,!0,i,l);case 19:return Y0(i,s,l);case 22:return $0(i,s,l)}throw Error(t(156,s.tag))};function xg(i,s){return Qn(i,s)}function cy(i,s,l,d){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vr(i,s,l,d){return new cy(i,s,l,d)}function Ep(i){return i=i.prototype,!(!i||!i.isReactComponent)}function uy(i){if(typeof i=="function")return Ep(i)?1:0;if(i!=null){if(i=i.$$typeof,i===$)return 11;if(i===re)return 14}return 2}function Lo(i,s){var l=i.alternate;return l===null?(l=vr(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Ju(i,s,l,d,v,S){var L=2;if(d=i,typeof i=="function")Ep(i)&&(L=1);else if(typeof i=="string")L=5;else e:switch(i){case T:return xa(l.children,v,S,s);case M:L=8,v|=8;break;case C:return i=vr(12,l,s,v|2),i.elementType=C,i.lanes=S,i;case W:return i=vr(13,l,s,v),i.elementType=W,i.lanes=S,i;case X:return i=vr(19,l,s,v),i.elementType=X,i.lanes=S,i;case Z:return Qu(l,v,S,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case B:L=10;break e;case O:L=9;break e;case $:L=11;break e;case re:L=14;break e;case ee:L=16,d=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=vr(L,l,s,v),s.elementType=i,s.type=d,s.lanes=S,s}function xa(i,s,l,d){return i=vr(7,i,d,s),i.lanes=l,i}function Qu(i,s,l,d){return i=vr(22,i,d,s),i.elementType=Z,i.lanes=l,i.stateNode={isHidden:!1},i}function Tp(i,s,l){return i=vr(6,i,null,s),i.lanes=l,i}function Cp(i,s,l){return s=vr(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function dy(i,s,l,d,v){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=an(0),this.expirationTimes=an(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=an(0),this.identifierPrefix=d,this.onRecoverableError=v,this.mutableSourceEagerHydrationData=null}function Ap(i,s,l,d,v,S,L,Y,te){return i=new dy(i,s,l,Y,te),s===1?(s=1,S===!0&&(s|=8)):s=0,S=vr(3,null,null,s),i.current=S,S.stateNode=i,S.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},$f(S),i}function fy(i,s,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:d==null?null:""+d,children:i,containerInfo:s,implementation:l}}function _g(i){if(!i)return Mo;i=i._reactInternals;e:{if(li(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Fi(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Fi(l))return Xm(i,l,s)}return s}function yg(i,s,l,d,v,S,L,Y,te){return i=Ap(l,d,!0,i,v,S,L,Y,te),i.context=_g(null),l=i.current,d=Ci(),v=Po(l),S=Us(d,v),S.callback=s??null,To(l,S,v),i.current.lanes=v,Dt(i,v,d),zi(i,d),i}function ed(i,s,l,d){var v=s.current,S=Ci(),L=Po(v);return l=_g(l),s.context===null?s.context=l:s.pendingContext=l,s=Us(S,L),s.payload={element:i},d=d===void 0?null:d,d!==null&&(s.callback=d),i=To(v,s,L),i!==null&&(Br(i,v,L,S),Iu(i,v,L)),L}function td(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Sg(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function Rp(i,s){Sg(i,s),(i=i.alternate)&&Sg(i,s)}function py(){return null}var bg=typeof reportError=="function"?reportError:function(i){console.error(i)};function Pp(i){this._internalRoot=i}nd.prototype.render=Pp.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));ed(i,s,null,null)},nd.prototype.unmount=Pp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;ma(function(){ed(null,i,null,null)}),s[ni]=null}};function nd(i){this._internalRoot=i}nd.prototype.unstable_scheduleHydration=function(i){if(i){var s=ro();i={blockedOn:null,target:i,priority:s};for(var l=0;l<Jr.length&&s!==0&&s<Jr[l].priority;l++);Jr.splice(l,0,i),l===0&&Ms(i)}};function Ip(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function id(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Mg(){}function hy(i,s,l,d,v){if(v){if(typeof d=="function"){var S=d;d=function(){var be=td(L);S.call(be)}}var L=yg(s,d,i,0,null,!1,!1,"",Mg);return i._reactRootContainer=L,i[ni]=L.current,Pt(i.nodeType===8?i.parentNode:i),ma(),L}for(;v=i.lastChild;)i.removeChild(v);if(typeof d=="function"){var Y=d;d=function(){var be=td(te);Y.call(be)}}var te=Ap(i,0,!1,null,null,!1,!1,"",Mg);return i._reactRootContainer=te,i[ni]=te.current,Pt(i.nodeType===8?i.parentNode:i),ma(function(){ed(s,te,l,d)}),te}function rd(i,s,l,d,v){var S=l._reactRootContainer;if(S){var L=S;if(typeof v=="function"){var Y=v;v=function(){var te=td(L);Y.call(te)}}ed(s,L,i,v)}else L=hy(l,s,i,v,d);return td(L)}Sn=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=at(s.pendingLanes);l!==0&&(en(s,l|1),zi(s,U()),(cn&6)===0&&(ul=U()+500,wo()))}break;case 13:ma(function(){var d=Ns(i,1);if(d!==null){var v=Ci();Br(d,i,1,v)}}),Rp(i,1)}},wi=function(i){if(i.tag===13){var s=Ns(i,134217728);if(s!==null){var l=Ci();Br(s,i,134217728,l)}Rp(i,134217728)}},Di=function(i){if(i.tag===13){var s=Po(i),l=Ns(i,s);if(l!==null){var d=Ci();Br(l,i,s,d)}Rp(i,s)}},ro=function(){return At},Yo=function(i,s){var l=At;try{return At=i,s()}finally{At=l}},Ge=function(i,s,l){switch(s){case"input":if(Xt(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var d=l[s];if(d!==i&&d.form===i.form){var v=Ps(d);if(!v)throw Error(t(90));Qt(d),Xt(d,v)}}}break;case"textarea":R(i,l);break;case"select":s=l.value,s!=null&&qt(i,!!l.multiple,s,!1)}},Nt=bp,nn=ma;var my={usingClientEntryPoint:!1,Events:[Dr,ur,Ps,Ee,ot,bp]},Ec={findFiberByHostInstance:Tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},gy={bundleType:Ec.bundleType,version:Ec.version,rendererPackageName:Ec.rendererPackageName,rendererConfig:Ec.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:k.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=fi(i),i===null?null:i.stateNode},findFiberByHostInstance:Ec.findFiberByHostInstance||py,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sd.isDisabled&&sd.supportsFiber)try{se=sd.inject(gy),_e=sd}catch{}}return $i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=my,$i.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ip(s))throw Error(t(200));return fy(i,s,null,l)},$i.createRoot=function(i,s){if(!Ip(i))throw Error(t(299));var l=!1,d="",v=bg;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=Ap(i,1,!1,null,null,l,!1,d,v),i[ni]=s.current,Pt(i.nodeType===8?i.parentNode:i),new Pp(s)},$i.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=fi(s),i=i===null?null:i.stateNode,i},$i.flushSync=function(i){return ma(i)},$i.hydrate=function(i,s,l){if(!id(s))throw Error(t(200));return rd(null,i,s,!0,l)},$i.hydrateRoot=function(i,s,l){if(!Ip(i))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,v=!1,S="",L=bg;if(l!=null&&(l.unstable_strictMode===!0&&(v=!0),l.identifierPrefix!==void 0&&(S=l.identifierPrefix),l.onRecoverableError!==void 0&&(L=l.onRecoverableError)),s=yg(s,null,i,1,l??null,v,!1,S,L),i[ni]=s.current,Pt(i),d)for(i=0;i<d.length;i++)l=d[i],v=l._getVersion,v=v(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,v]:s.mutableSourceEagerHydrationData.push(l,v);return new nd(s)},$i.render=function(i,s,l){if(!id(s))throw Error(t(200));return rd(null,i,s,!1,l)},$i.unmountComponentAtNode=function(i){if(!id(i))throw Error(t(40));return i._reactRootContainer?(ma(function(){rd(null,null,i,!1,function(){i._reactRootContainer=null,i[ni]=null})}),!0):!1},$i.unstable_batchedUpdates=bp,$i.unstable_renderSubtreeIntoContainer=function(i,s,l,d){if(!id(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return rd(i,s,l,!1,d)},$i.version="18.3.1-next-f1338f8080-20240426",$i}var Ig;function Ey(){if(Ig)return Np.exports;Ig=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Np.exports=wy(),Np.exports}var Lg;function Ty(){if(Lg)return od;Lg=1;var n=Ey();return od.createRoot=n.createRoot,od.hydrateRoot=n.hydrateRoot,od}var Cy=Ty();const Ay="modulepreload",Ry=function(n){return"/"+n},Dg={},cf=function(e,t,r){let o=Promise.resolve();if(t&&t.length>0){let c=function(u){return Promise.all(u.map(p=>Promise.resolve(p).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),h=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));o=c(t.map(u=>{if(u=Ry(u),u in Dg)return;Dg[u]=!0;const p=u.endsWith(".css"),_=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${_}`))return;const x=document.createElement("link");if(x.rel=p?"stylesheet":Ay,p||(x.as="script"),x.crossOrigin="",x.href=u,h&&x.setAttribute("nonce",h),document.head.appendChild(x),p)return new Promise((m,b)=>{x.addEventListener("load",m),x.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${u}`)))})}))}function a(c){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=c,window.dispatchEvent(f),!f.defaultPrevented)throw c}return o.then(c=>{for(const f of c||[])f.status==="rejected"&&a(f.reason);return e().catch(a)})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pm="183",EC={ROTATE:0,DOLLY:1,PAN:2},TC={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Py=0,Ng=1,Iy=2,Wd=1,Ly=2,Uc=3,Xo=0,Vi=1,Xs=2,Zs=0,Ll=1,Ug=2,kg=3,Fg=4,Dy=5,Aa=100,Ny=101,Uy=102,ky=103,Fy=104,Oy=200,By=201,zy=202,$y=203,Lh=204,Dh=205,Vy=206,Hy=207,Gy=208,Wy=209,jy=210,Xy=211,Yy=212,qy=213,Ky=214,Nh=0,Uh=1,kh=2,Ul=3,Fh=4,Oh=5,Bh=6,zh=7,Mx=0,Zy=1,Jy=2,gs=0,wx=1,Ex=2,Tx=3,Cx=4,Ax=5,Rx=6,Px=7,Ix=300,Na=301,kl=302,Fp=303,Op=304,uf=306,$h=1e3,Wr=1001,Vh=1002,di=1003,Qy=1004,ad=1005,Yn=1006,Bp=1007,Ho=1008,nr=1009,Lx=1010,Dx=1011,zc=1012,Im=1013,ys=1014,hs=1015,Qs=1016,Lm=1017,Dm=1018,$c=1020,Nx=35902,Ux=35899,kx=1021,Fx=1022,jr=1023,eo=1026,Ia=1027,Ox=1028,Nm=1029,Fl=1030,Um=1031,km=1033,jd=33776,Xd=33777,Yd=33778,qd=33779,Hh=35840,Gh=35841,Wh=35842,jh=35843,Xh=36196,Yh=37492,qh=37496,Kh=37488,Zh=37489,Jh=37490,Qh=37491,em=37808,tm=37809,nm=37810,im=37811,rm=37812,sm=37813,om=37814,am=37815,lm=37816,cm=37817,um=37818,dm=37819,fm=37820,pm=37821,hm=36492,mm=36494,gm=36495,vm=36283,xm=36284,_m=36285,ym=36286,e1=3200,Bx=0,t1=1,Vo="",br="srgb",Ol="srgb-linear",ef="linear",vn="srgb",fl=7680,Og=519,n1=512,i1=513,r1=514,Fm=515,s1=516,o1=517,Om=518,a1=519,Bg=35044,zg="300 es",ms=2e3,Vc=2001;function l1(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function tf(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function c1(){const n=tf("canvas");return n.style.display="block",n}const $g={};function Vg(...n){const e="THREE."+n.shift();console.log(e,...n)}function zx(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function zt(...n){n=zx(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function fn(...n){n=zx(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function nf(...n){const e=n.join(" ");e in $g||($g[e]=!0,zt(...n))}function u1(n,e,t){return new Promise(function(r,o){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:r()}}setTimeout(a,t)})}const d1={[Nh]:Uh,[kh]:Bh,[Fh]:zh,[Ul]:Oh,[Uh]:Nh,[Bh]:kh,[zh]:Fh,[Oh]:Ul};class ka{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const xi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hg=1234567;const Dl=Math.PI/180,Hc=180/Math.PI;function Gl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xi[n&255]+xi[n>>8&255]+xi[n>>16&255]+xi[n>>24&255]+"-"+xi[e&255]+xi[e>>8&255]+"-"+xi[e>>16&15|64]+xi[e>>24&255]+"-"+xi[t&63|128]+xi[t>>8&255]+"-"+xi[t>>16&255]+xi[t>>24&255]+xi[r&255]+xi[r>>8&255]+xi[r>>16&255]+xi[r>>24&255]).toLowerCase()}function tn(n,e,t){return Math.max(e,Math.min(t,n))}function Bm(n,e){return(n%e+e)%e}function f1(n,e,t,r,o){return r+(n-e)*(o-r)/(t-e)}function p1(n,e,t){return n!==e?(t-n)/(e-n):0}function Fc(n,e,t){return(1-t)*n+t*e}function h1(n,e,t,r){return Fc(n,e,1-Math.exp(-t*r))}function m1(n,e=1){return e-Math.abs(Bm(n,e*2)-e)}function g1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function v1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function x1(n,e){return n+Math.floor(Math.random()*(e-n+1))}function _1(n,e){return n+Math.random()*(e-n)}function y1(n){return n*(.5-Math.random())}function S1(n){n!==void 0&&(Hg=n);let e=Hg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function b1(n){return n*Dl}function M1(n){return n*Hc}function w1(n){return(n&n-1)===0&&n!==0}function E1(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function T1(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function C1(n,e,t,r,o){const a=Math.cos,c=Math.sin,f=a(t/2),h=c(t/2),u=a((e+r)/2),p=c((e+r)/2),_=a((e-r)/2),x=c((e-r)/2),m=a((r-e)/2),b=c((r-e)/2);switch(o){case"XYX":n.set(f*p,h*_,h*x,f*u);break;case"YZY":n.set(h*x,f*p,h*_,f*u);break;case"ZXZ":n.set(h*_,h*x,f*p,f*u);break;case"XZX":n.set(f*p,h*b,h*m,f*u);break;case"YXY":n.set(h*m,f*p,h*b,f*u);break;case"ZYZ":n.set(h*b,h*m,f*p,f*u);break;default:zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Cl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ai(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const CC={DEG2RAD:Dl,RAD2DEG:Hc,generateUUID:Gl,clamp:tn,euclideanModulo:Bm,mapLinear:f1,inverseLerp:p1,lerp:Fc,damp:h1,pingpong:m1,smoothstep:g1,smootherstep:v1,randInt:x1,randFloat:_1,randFloatSpread:y1,seededRandom:S1,degToRad:b1,radToDeg:M1,isPowerOfTwo:w1,ceilPowerOfTwo:E1,floorPowerOfTwo:T1,setQuaternionFromProperEuler:C1,normalize:Ai,denormalize:Cl};class pn{constructor(e=0,t=0){pn.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tn(this.x,e.x,t.x),this.y=tn(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tn(this.x,e,t),this.y=tn(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(tn(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(tn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*r-c*o+e.x,this.y=a*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wl{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,a,c,f){let h=r[o+0],u=r[o+1],p=r[o+2],_=r[o+3],x=a[c+0],m=a[c+1],b=a[c+2],E=a[c+3];if(_!==E||h!==x||u!==m||p!==b){let g=h*x+u*m+p*b+_*E;g<0&&(x=-x,m=-m,b=-b,E=-E,g=-g);let y=1-f;if(g<.9995){const P=Math.acos(g),N=Math.sin(P);y=Math.sin(y*P)/N,f=Math.sin(f*P)/N,h=h*y+x*f,u=u*y+m*f,p=p*y+b*f,_=_*y+E*f}else{h=h*y+x*f,u=u*y+m*f,p=p*y+b*f,_=_*y+E*f;const P=1/Math.sqrt(h*h+u*u+p*p+_*_);h*=P,u*=P,p*=P,_*=P}}e[t]=h,e[t+1]=u,e[t+2]=p,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,o,a,c){const f=r[o],h=r[o+1],u=r[o+2],p=r[o+3],_=a[c],x=a[c+1],m=a[c+2],b=a[c+3];return e[t]=f*b+p*_+h*m-u*x,e[t+1]=h*b+p*x+u*_-f*m,e[t+2]=u*b+p*m+f*x-h*_,e[t+3]=p*b-f*_-h*x-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,a=e._z,c=e._order,f=Math.cos,h=Math.sin,u=f(r/2),p=f(o/2),_=f(a/2),x=h(r/2),m=h(o/2),b=h(a/2);switch(c){case"XYZ":this._x=x*p*_+u*m*b,this._y=u*m*_-x*p*b,this._z=u*p*b+x*m*_,this._w=u*p*_-x*m*b;break;case"YXZ":this._x=x*p*_+u*m*b,this._y=u*m*_-x*p*b,this._z=u*p*b-x*m*_,this._w=u*p*_+x*m*b;break;case"ZXY":this._x=x*p*_-u*m*b,this._y=u*m*_+x*p*b,this._z=u*p*b+x*m*_,this._w=u*p*_-x*m*b;break;case"ZYX":this._x=x*p*_-u*m*b,this._y=u*m*_+x*p*b,this._z=u*p*b-x*m*_,this._w=u*p*_+x*m*b;break;case"YZX":this._x=x*p*_+u*m*b,this._y=u*m*_+x*p*b,this._z=u*p*b-x*m*_,this._w=u*p*_-x*m*b;break;case"XZY":this._x=x*p*_-u*m*b,this._y=u*m*_-x*p*b,this._z=u*p*b+x*m*_,this._w=u*p*_+x*m*b;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],a=t[8],c=t[1],f=t[5],h=t[9],u=t[2],p=t[6],_=t[10],x=r+f+_;if(x>0){const m=.5/Math.sqrt(x+1);this._w=.25/m,this._x=(p-h)*m,this._y=(a-u)*m,this._z=(c-o)*m}else if(r>f&&r>_){const m=2*Math.sqrt(1+r-f-_);this._w=(p-h)/m,this._x=.25*m,this._y=(o+c)/m,this._z=(a+u)/m}else if(f>_){const m=2*Math.sqrt(1+f-r-_);this._w=(a-u)/m,this._x=(o+c)/m,this._y=.25*m,this._z=(h+p)/m}else{const m=2*Math.sqrt(1+_-r-f);this._w=(c-o)/m,this._x=(a+u)/m,this._y=(h+p)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tn(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,a=e._z,c=e._w,f=t._x,h=t._y,u=t._z,p=t._w;return this._x=r*p+c*f+o*u-a*h,this._y=o*p+c*h+a*f-r*u,this._z=a*p+c*u+r*h-o*f,this._w=c*p-r*f-o*h-a*u,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,a=e._z,c=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,a=-a,c=-c,f=-f);let h=1-t;if(f<.9995){const u=Math.acos(f),p=Math.sin(u);h=Math.sin(h*u)/p,t=Math.sin(t*u)/p,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+a*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+a*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ge{constructor(e=0,t=0,r=0){ge.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*o,this.y=a[1]*t+a[4]*r+a[7]*o,this.z=a[2]*t+a[5]*r+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*r+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*r+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*r+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,a=e.x,c=e.y,f=e.z,h=e.w,u=2*(c*o-f*r),p=2*(f*t-a*o),_=2*(a*r-c*t);return this.x=t+h*u+c*_-f*p,this.y=r+h*p+f*u-a*_,this.z=o+h*_+a*p-c*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*o,this.y=a[1]*t+a[5]*r+a[9]*o,this.z=a[2]*t+a[6]*r+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tn(this.x,e.x,t.x),this.y=tn(this.y,e.y,t.y),this.z=tn(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tn(this.x,e,t),this.y=tn(this.y,e,t),this.z=tn(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(tn(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,a=e.z,c=t.x,f=t.y,h=t.z;return this.x=o*h-a*f,this.y=a*c-r*h,this.z=r*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return zp.copy(this).projectOnVector(e),this.sub(zp)}reflect(e){return this.sub(zp.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(tn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zp=new ge,Gg=new Wl;class Yt{constructor(e,t,r,o,a,c,f,h,u){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,f,h,u)}set(e,t,r,o,a,c,f,h,u){const p=this.elements;return p[0]=e,p[1]=o,p[2]=f,p[3]=t,p[4]=a,p[5]=h,p[6]=r,p[7]=c,p[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],f=r[3],h=r[6],u=r[1],p=r[4],_=r[7],x=r[2],m=r[5],b=r[8],E=o[0],g=o[3],y=o[6],P=o[1],N=o[4],k=o[7],V=o[2],A=o[5],T=o[8];return a[0]=c*E+f*P+h*V,a[3]=c*g+f*N+h*A,a[6]=c*y+f*k+h*T,a[1]=u*E+p*P+_*V,a[4]=u*g+p*N+_*A,a[7]=u*y+p*k+_*T,a[2]=x*E+m*P+b*V,a[5]=x*g+m*N+b*A,a[8]=x*y+m*k+b*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],f=e[5],h=e[6],u=e[7],p=e[8];return t*c*p-t*f*u-r*a*p+r*f*h+o*a*u-o*c*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],f=e[5],h=e[6],u=e[7],p=e[8],_=p*c-f*u,x=f*h-p*a,m=u*a-c*h,b=t*_+r*x+o*m;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=_*E,e[1]=(o*u-p*r)*E,e[2]=(f*r-o*c)*E,e[3]=x*E,e[4]=(p*t-o*h)*E,e[5]=(o*a-f*t)*E,e[6]=m*E,e[7]=(r*h-u*t)*E,e[8]=(c*t-r*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,a,c,f){const h=Math.cos(a),u=Math.sin(a);return this.set(r*h,r*u,-r*(h*c+u*f)+c+e,-o*u,o*h,-o*(-u*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply($p.makeScale(e,t)),this}rotate(e){return this.premultiply($p.makeRotation(-e)),this}translate(e,t){return this.premultiply($p.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $p=new Yt,Wg=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jg=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function A1(){const n={enabled:!0,workingColorSpace:Ol,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===vn&&(o.r=Js(o.r),o.g=Js(o.g),o.b=Js(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===vn&&(o.r=Nl(o.r),o.g=Nl(o.g),o.b=Nl(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Vo?ef:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return nf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return nf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Ol]:{primaries:e,whitePoint:r,transfer:ef,toXYZ:Wg,fromXYZ:jg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:br},outputColorSpaceConfig:{drawingBufferColorSpace:br}},[br]:{primaries:e,whitePoint:r,transfer:vn,toXYZ:Wg,fromXYZ:jg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:br}}}),n}const un=A1();function Js(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Nl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let pl;class R1{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{pl===void 0&&(pl=tf("canvas")),pl.width=e.width,pl.height=e.height;const o=pl.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=pl}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=tf("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=Js(a[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Js(t[r]/255)*255):t[r]=Js(t[r]);return{data:t,width:e.width,height:e.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let P1=0;class zm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:P1++}),this.uuid=Gl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?a.push(Vp(o[c].image)):a.push(Vp(o[c]))}else a=Vp(o);r.url=a}return t||(e.images[this.uuid]=r),r}}function Vp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?R1.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}let I1=0;const Hp=new ge;class yi extends ka{constructor(e=yi.DEFAULT_IMAGE,t=yi.DEFAULT_MAPPING,r=Wr,o=Wr,a=Yn,c=Ho,f=jr,h=nr,u=yi.DEFAULT_ANISOTROPY,p=Vo){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:I1++}),this.uuid=Gl(),this.name="",this.source=new zm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=u,this.format=f,this.internalFormat=null,this.type=h,this.offset=new pn(0,0),this.repeat=new pn(1,1),this.center=new pn(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Hp).x}get height(){return this.source.getSize(Hp).y}get depth(){return this.source.getSize(Hp).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){zt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){zt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ix)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $h:e.x=e.x-Math.floor(e.x);break;case Wr:e.x=e.x<0?0:1;break;case Vh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $h:e.y=e.y-Math.floor(e.y);break;case Wr:e.y=e.y<0?0:1;break;case Vh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yi.DEFAULT_IMAGE=null;yi.DEFAULT_MAPPING=Ix;yi.DEFAULT_ANISOTROPY=1;class Dn{constructor(e=0,t=0,r=0,o=1){Dn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,a;const h=e.elements,u=h[0],p=h[4],_=h[8],x=h[1],m=h[5],b=h[9],E=h[2],g=h[6],y=h[10];if(Math.abs(p-x)<.01&&Math.abs(_-E)<.01&&Math.abs(b-g)<.01){if(Math.abs(p+x)<.1&&Math.abs(_+E)<.1&&Math.abs(b+g)<.1&&Math.abs(u+m+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(u+1)/2,k=(m+1)/2,V=(y+1)/2,A=(p+x)/4,T=(_+E)/4,M=(b+g)/4;return N>k&&N>V?N<.01?(r=0,o=.707106781,a=.707106781):(r=Math.sqrt(N),o=A/r,a=T/r):k>V?k<.01?(r=.707106781,o=0,a=.707106781):(o=Math.sqrt(k),r=A/o,a=M/o):V<.01?(r=.707106781,o=.707106781,a=0):(a=Math.sqrt(V),r=T/a,o=M/a),this.set(r,o,a,t),this}let P=Math.sqrt((g-b)*(g-b)+(_-E)*(_-E)+(x-p)*(x-p));return Math.abs(P)<.001&&(P=1),this.x=(g-b)/P,this.y=(_-E)/P,this.z=(x-p)/P,this.w=Math.acos((u+m+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tn(this.x,e.x,t.x),this.y=tn(this.y,e.y,t.y),this.z=tn(this.z,e.z,t.z),this.w=tn(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tn(this.x,e,t),this.y=tn(this.y,e,t),this.z=tn(this.z,e,t),this.w=tn(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(tn(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class L1 extends ka{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Dn(0,0,e,t),this.scissorTest=!1,this.viewport=new Dn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},a=new yi(o),c=r.count;for(let f=0;f<c;f++)this.textures[f]=a.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new zm(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vs extends L1{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class $x extends yi{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=di,this.minFilter=di,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class D1 extends yi{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=di,this.minFilter=di,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class In{constructor(e,t,r,o,a,c,f,h,u,p,_,x,m,b,E,g){In.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,f,h,u,p,_,x,m,b,E,g)}set(e,t,r,o,a,c,f,h,u,p,_,x,m,b,E,g){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=a,y[5]=c,y[9]=f,y[13]=h,y[2]=u,y[6]=p,y[10]=_,y[14]=x,y[3]=m,y[7]=b,y[11]=E,y[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new In().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/hl.setFromMatrixColumn(e,0).length(),a=1/hl.setFromMatrixColumn(e,1).length(),c=1/hl.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,a=e.z,c=Math.cos(r),f=Math.sin(r),h=Math.cos(o),u=Math.sin(o),p=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const x=c*p,m=c*_,b=f*p,E=f*_;t[0]=h*p,t[4]=-h*_,t[8]=u,t[1]=m+b*u,t[5]=x-E*u,t[9]=-f*h,t[2]=E-x*u,t[6]=b+m*u,t[10]=c*h}else if(e.order==="YXZ"){const x=h*p,m=h*_,b=u*p,E=u*_;t[0]=x+E*f,t[4]=b*f-m,t[8]=c*u,t[1]=c*_,t[5]=c*p,t[9]=-f,t[2]=m*f-b,t[6]=E+x*f,t[10]=c*h}else if(e.order==="ZXY"){const x=h*p,m=h*_,b=u*p,E=u*_;t[0]=x-E*f,t[4]=-c*_,t[8]=b+m*f,t[1]=m+b*f,t[5]=c*p,t[9]=E-x*f,t[2]=-c*u,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const x=c*p,m=c*_,b=f*p,E=f*_;t[0]=h*p,t[4]=b*u-m,t[8]=x*u+E,t[1]=h*_,t[5]=E*u+x,t[9]=m*u-b,t[2]=-u,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const x=c*h,m=c*u,b=f*h,E=f*u;t[0]=h*p,t[4]=E-x*_,t[8]=b*_+m,t[1]=_,t[5]=c*p,t[9]=-f*p,t[2]=-u*p,t[6]=m*_+b,t[10]=x-E*_}else if(e.order==="XZY"){const x=c*h,m=c*u,b=f*h,E=f*u;t[0]=h*p,t[4]=-_,t[8]=u*p,t[1]=x*_+E,t[5]=c*p,t[9]=m*_-b,t[2]=b*_-m,t[6]=f*p,t[10]=E*_+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(N1,e,U1)}lookAt(e,t,r){const o=this.elements;return Ji.subVectors(e,t),Ji.lengthSq()===0&&(Ji.z=1),Ji.normalize(),No.crossVectors(r,Ji),No.lengthSq()===0&&(Math.abs(r.z)===1?Ji.x+=1e-4:Ji.z+=1e-4,Ji.normalize(),No.crossVectors(r,Ji)),No.normalize(),ld.crossVectors(Ji,No),o[0]=No.x,o[4]=ld.x,o[8]=Ji.x,o[1]=No.y,o[5]=ld.y,o[9]=Ji.y,o[2]=No.z,o[6]=ld.z,o[10]=Ji.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],f=r[4],h=r[8],u=r[12],p=r[1],_=r[5],x=r[9],m=r[13],b=r[2],E=r[6],g=r[10],y=r[14],P=r[3],N=r[7],k=r[11],V=r[15],A=o[0],T=o[4],M=o[8],C=o[12],B=o[1],O=o[5],$=o[9],W=o[13],X=o[2],re=o[6],ee=o[10],Z=o[14],ie=o[3],q=o[7],ae=o[11],z=o[15];return a[0]=c*A+f*B+h*X+u*ie,a[4]=c*T+f*O+h*re+u*q,a[8]=c*M+f*$+h*ee+u*ae,a[12]=c*C+f*W+h*Z+u*z,a[1]=p*A+_*B+x*X+m*ie,a[5]=p*T+_*O+x*re+m*q,a[9]=p*M+_*$+x*ee+m*ae,a[13]=p*C+_*W+x*Z+m*z,a[2]=b*A+E*B+g*X+y*ie,a[6]=b*T+E*O+g*re+y*q,a[10]=b*M+E*$+g*ee+y*ae,a[14]=b*C+E*W+g*Z+y*z,a[3]=P*A+N*B+k*X+V*ie,a[7]=P*T+N*O+k*re+V*q,a[11]=P*M+N*$+k*ee+V*ae,a[15]=P*C+N*W+k*Z+V*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[12],c=e[1],f=e[5],h=e[9],u=e[13],p=e[2],_=e[6],x=e[10],m=e[14],b=e[3],E=e[7],g=e[11],y=e[15],P=h*m-u*x,N=f*m-u*_,k=f*x-h*_,V=c*m-u*p,A=c*x-h*p,T=c*_-f*p;return t*(E*P-g*N+y*k)-r*(b*P-g*V+y*A)+o*(b*N-E*V+y*T)-a*(b*k-E*A+g*T)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],f=e[5],h=e[6],u=e[7],p=e[8],_=e[9],x=e[10],m=e[11],b=e[12],E=e[13],g=e[14],y=e[15],P=t*f-r*c,N=t*h-o*c,k=t*u-a*c,V=r*h-o*f,A=r*u-a*f,T=o*u-a*h,M=p*E-_*b,C=p*g-x*b,B=p*y-m*b,O=_*g-x*E,$=_*y-m*E,W=x*y-m*g,X=P*W-N*$+k*O+V*B-A*C+T*M;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const re=1/X;return e[0]=(f*W-h*$+u*O)*re,e[1]=(o*$-r*W-a*O)*re,e[2]=(E*T-g*A+y*V)*re,e[3]=(x*A-_*T-m*V)*re,e[4]=(h*B-c*W-u*C)*re,e[5]=(t*W-o*B+a*C)*re,e[6]=(g*k-b*T-y*N)*re,e[7]=(p*T-x*k+m*N)*re,e[8]=(c*$-f*B+u*M)*re,e[9]=(r*B-t*$-a*M)*re,e[10]=(b*A-E*k+y*P)*re,e[11]=(_*k-p*A-m*P)*re,e[12]=(f*C-c*O-h*M)*re,e[13]=(t*O-r*C+o*M)*re,e[14]=(E*N-b*V-g*P)*re,e[15]=(p*V-_*N+x*P)*re,this}scale(e){const t=this.elements,r=e.x,o=e.y,a=e.z;return t[0]*=r,t[4]*=o,t[8]*=a,t[1]*=r,t[5]*=o,t[9]*=a,t[2]*=r,t[6]*=o,t[10]*=a,t[3]*=r,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),a=1-r,c=e.x,f=e.y,h=e.z,u=a*c,p=a*f;return this.set(u*c+r,u*f-o*h,u*h+o*f,0,u*f+o*h,p*f+r,p*h-o*c,0,u*h-o*f,p*h+o*c,a*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,a,c){return this.set(1,r,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,a=t._x,c=t._y,f=t._z,h=t._w,u=a+a,p=c+c,_=f+f,x=a*u,m=a*p,b=a*_,E=c*p,g=c*_,y=f*_,P=h*u,N=h*p,k=h*_,V=r.x,A=r.y,T=r.z;return o[0]=(1-(E+y))*V,o[1]=(m+k)*V,o[2]=(b-N)*V,o[3]=0,o[4]=(m-k)*A,o[5]=(1-(x+y))*A,o[6]=(g+P)*A,o[7]=0,o[8]=(b+N)*T,o[9]=(g-P)*T,o[10]=(1-(x+E))*T,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const a=this.determinant();if(a===0)return r.set(1,1,1),t.identity(),this;let c=hl.set(o[0],o[1],o[2]).length();const f=hl.set(o[4],o[5],o[6]).length(),h=hl.set(o[8],o[9],o[10]).length();a<0&&(c=-c),zr.copy(this);const u=1/c,p=1/f,_=1/h;return zr.elements[0]*=u,zr.elements[1]*=u,zr.elements[2]*=u,zr.elements[4]*=p,zr.elements[5]*=p,zr.elements[6]*=p,zr.elements[8]*=_,zr.elements[9]*=_,zr.elements[10]*=_,t.setFromRotationMatrix(zr),r.x=c,r.y=f,r.z=h,this}makePerspective(e,t,r,o,a,c,f=ms,h=!1){const u=this.elements,p=2*a/(t-e),_=2*a/(r-o),x=(t+e)/(t-e),m=(r+o)/(r-o);let b,E;if(h)b=a/(c-a),E=c*a/(c-a);else if(f===ms)b=-(c+a)/(c-a),E=-2*c*a/(c-a);else if(f===Vc)b=-c/(c-a),E=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return u[0]=p,u[4]=0,u[8]=x,u[12]=0,u[1]=0,u[5]=_,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=b,u[14]=E,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,r,o,a,c,f=ms,h=!1){const u=this.elements,p=2/(t-e),_=2/(r-o),x=-(t+e)/(t-e),m=-(r+o)/(r-o);let b,E;if(h)b=1/(c-a),E=c/(c-a);else if(f===ms)b=-2/(c-a),E=-(c+a)/(c-a);else if(f===Vc)b=-1/(c-a),E=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return u[0]=p,u[4]=0,u[8]=0,u[12]=x,u[1]=0,u[5]=_,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=b,u[14]=E,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const hl=new ge,zr=new In,N1=new ge(0,0,0),U1=new ge(1,1,1),No=new ge,ld=new ge,Ji=new ge,Xg=new In,Yg=new Wl;class Ss{constructor(e=0,t=0,r=0,o=Ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,a=o[0],c=o[4],f=o[8],h=o[1],u=o[5],p=o[9],_=o[2],x=o[6],m=o[10];switch(t){case"XYZ":this._y=Math.asin(tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,m),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(x,u),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(f,m),this._z=Math.atan2(h,u)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(tn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,m),this._z=Math.atan2(-c,u)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-tn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,m),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-c,u));break;case"YZX":this._z=Math.asin(tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,u),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(f,m));break;case"XZY":this._z=Math.asin(-tn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,u),this._y=Math.atan2(f,a)):(this._x=Math.atan2(-p,m),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Xg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xg,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yg.setFromEuler(this),this.setFromQuaternion(Yg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ss.DEFAULT_ORDER="XYZ";class Vx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let k1=0;const qg=new ge,ml=new Wl,Os=new In,cd=new ge,Cc=new ge,F1=new ge,O1=new Wl,Kg=new ge(1,0,0),Zg=new ge(0,1,0),Jg=new ge(0,0,1),Qg={type:"added"},B1={type:"removed"},gl={type:"childadded",child:null},Gp={type:"childremoved",child:null};class ai extends ka{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:k1++}),this.uuid=Gl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ai.DEFAULT_UP.clone();const e=new ge,t=new Ss,r=new Wl,o=new ge(1,1,1);function a(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new In},normalMatrix:{value:new Yt}}),this.matrix=new In,this.matrixWorld=new In,this.matrixAutoUpdate=ai.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ml.setFromAxisAngle(e,t),this.quaternion.multiply(ml),this}rotateOnWorldAxis(e,t){return ml.setFromAxisAngle(e,t),this.quaternion.premultiply(ml),this}rotateX(e){return this.rotateOnAxis(Kg,e)}rotateY(e){return this.rotateOnAxis(Zg,e)}rotateZ(e){return this.rotateOnAxis(Jg,e)}translateOnAxis(e,t){return qg.copy(e).applyQuaternion(this.quaternion),this.position.add(qg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kg,e)}translateY(e){return this.translateOnAxis(Zg,e)}translateZ(e){return this.translateOnAxis(Jg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Os.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?cd.copy(e):cd.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Cc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Os.lookAt(Cc,cd,this.up):Os.lookAt(cd,Cc,this.up),this.quaternion.setFromRotationMatrix(Os),o&&(Os.extractRotation(o.matrixWorld),ml.setFromRotationMatrix(Os),this.quaternion.premultiply(ml.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(fn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qg),gl.child=e,this.dispatchEvent(gl),gl.child=null):fn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(B1),Gp.child=e,this.dispatchEvent(Gp),Gp.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Os.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Os.multiply(e.parent.matrixWorld)),e.applyMatrix4(Os),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qg),gl.child=e,this.dispatchEvent(gl),gl.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cc,e,F1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cc,O1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*r-a[8]*o,a[13]+=r-a[1]*t-a[5]*r-a[9]*o,a[14]+=o-a[2]*t-a[6]*r-a[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let u=0,p=h.length;u<p;u++){const _=h[u];a(e.shapes,_)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,u=this.material.length;h<u;h++)f.push(a(e.materials,this.material[h]));o.material=f}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(a(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),u=c(e.textures),p=c(e.images),_=c(e.shapes),x=c(e.skeletons),m=c(e.animations),b=c(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),u.length>0&&(r.textures=u),p.length>0&&(r.images=p),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),m.length>0&&(r.animations=m),b.length>0&&(r.nodes=b)}return r.object=o,r;function c(f){const h=[];for(const u in f){const p=f[u];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}ai.DEFAULT_UP=new ge(0,1,0);ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ud extends ai{constructor(){super(),this.isGroup=!0,this.type="Group"}}const z1={type:"move"};class Wp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ud,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ud,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ge,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ge),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ud,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ge,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ge),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,a=null,c=null;const f=this._targetRay,h=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){c=!0;for(const E of e.hand.values()){const g=t.getJointPose(E,r),y=this._getHandJoint(u,E);g!==null&&(y.matrix.fromArray(g.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=g.radius),y.visible=g!==null}const p=u.joints["index-finger-tip"],_=u.joints["thumb-tip"],x=p.position.distanceTo(_.position),m=.02,b=.005;u.inputState.pinching&&x>m+b?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&x<=m-b&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&a!==null&&(o=a),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(z1)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=a!==null),u!==null&&(u.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ud;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Hx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Uo={h:0,s:0,l:0},dd={h:0,s:0,l:0};function jp(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class on{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=br){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,un.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=un.workingColorSpace){return this.r=e,this.g=t,this.b=r,un.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=un.workingColorSpace){if(e=Bm(e,1),t=tn(t,0,1),r=tn(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,c=2*r-a;this.r=jp(c,a,e+1/3),this.g=jp(c,a,e),this.b=jp(c,a,e-1/3)}return un.colorSpaceToWorking(this,o),this}setStyle(e,t=br){function r(a){a!==void 0&&parseFloat(a)<1&&zt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:zt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);zt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=br){const r=Hx[e.toLowerCase()];return r!==void 0?this.setHex(r,t):zt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}copyLinearToSRGB(e){return this.r=Nl(e.r),this.g=Nl(e.g),this.b=Nl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=br){return un.workingToColorSpace(_i.copy(this),e),Math.round(tn(_i.r*255,0,255))*65536+Math.round(tn(_i.g*255,0,255))*256+Math.round(tn(_i.b*255,0,255))}getHexString(e=br){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=un.workingColorSpace){un.workingToColorSpace(_i.copy(this),t);const r=_i.r,o=_i.g,a=_i.b,c=Math.max(r,o,a),f=Math.min(r,o,a);let h,u;const p=(f+c)/2;if(f===c)h=0,u=0;else{const _=c-f;switch(u=p<=.5?_/(c+f):_/(2-c-f),c){case r:h=(o-a)/_+(o<a?6:0);break;case o:h=(a-r)/_+2;break;case a:h=(r-o)/_+4;break}h/=6}return e.h=h,e.s=u,e.l=p,e}getRGB(e,t=un.workingColorSpace){return un.workingToColorSpace(_i.copy(this),t),e.r=_i.r,e.g=_i.g,e.b=_i.b,e}getStyle(e=br){un.workingToColorSpace(_i.copy(this),e);const t=_i.r,r=_i.g,o=_i.b;return e!==br?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Uo),this.setHSL(Uo.h+e,Uo.s+t,Uo.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Uo),e.getHSL(dd);const r=Fc(Uo.h,dd.h,t),o=Fc(Uo.s,dd.s,t),a=Fc(Uo.l,dd.l,t);return this.setHSL(r,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*o,this.g=a[1]*t+a[4]*r+a[7]*o,this.b=a[2]*t+a[5]*r+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _i=new on;on.NAMES=Hx;class Gx extends ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ss,this.environmentIntensity=1,this.environmentRotation=new Ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const $r=new ge,Bs=new ge,Xp=new ge,zs=new ge,vl=new ge,xl=new ge,ev=new ge,Yp=new ge,qp=new ge,Kp=new ge,Zp=new Dn,Jp=new Dn,Qp=new Dn;class Mr{constructor(e=new ge,t=new ge,r=new ge){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),$r.subVectors(e,t),o.cross($r);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,r,o,a){$r.subVectors(o,t),Bs.subVectors(r,t),Xp.subVectors(e,t);const c=$r.dot($r),f=$r.dot(Bs),h=$r.dot(Xp),u=Bs.dot(Bs),p=Bs.dot(Xp),_=c*u-f*f;if(_===0)return a.set(0,0,0),null;const x=1/_,m=(u*h-f*p)*x,b=(c*p-f*h)*x;return a.set(1-m-b,b,m)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,zs)===null?!1:zs.x>=0&&zs.y>=0&&zs.x+zs.y<=1}static getInterpolation(e,t,r,o,a,c,f,h){return this.getBarycoord(e,t,r,o,zs)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,zs.x),h.addScaledVector(c,zs.y),h.addScaledVector(f,zs.z),h)}static getInterpolatedAttribute(e,t,r,o,a,c){return Zp.setScalar(0),Jp.setScalar(0),Qp.setScalar(0),Zp.fromBufferAttribute(e,t),Jp.fromBufferAttribute(e,r),Qp.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Zp,a.x),c.addScaledVector(Jp,a.y),c.addScaledVector(Qp,a.z),c}static isFrontFacing(e,t,r,o){return $r.subVectors(r,t),Bs.subVectors(e,t),$r.cross(Bs).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $r.subVectors(this.c,this.b),Bs.subVectors(this.a,this.b),$r.cross(Bs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,a){return Mr.getInterpolation(e,this.a,this.b,this.c,t,r,o,a)}containsPoint(e){return Mr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,a=this.c;let c,f;vl.subVectors(o,r),xl.subVectors(a,r),Yp.subVectors(e,r);const h=vl.dot(Yp),u=xl.dot(Yp);if(h<=0&&u<=0)return t.copy(r);qp.subVectors(e,o);const p=vl.dot(qp),_=xl.dot(qp);if(p>=0&&_<=p)return t.copy(o);const x=h*_-p*u;if(x<=0&&h>=0&&p<=0)return c=h/(h-p),t.copy(r).addScaledVector(vl,c);Kp.subVectors(e,a);const m=vl.dot(Kp),b=xl.dot(Kp);if(b>=0&&m<=b)return t.copy(a);const E=m*u-h*b;if(E<=0&&u>=0&&b<=0)return f=u/(u-b),t.copy(r).addScaledVector(xl,f);const g=p*b-m*_;if(g<=0&&_-p>=0&&m-b>=0)return ev.subVectors(a,o),f=(_-p)/(_-p+(m-b)),t.copy(o).addScaledVector(ev,f);const y=1/(g+E+x);return c=E*y,f=x*y,t.copy(r).addScaledVector(vl,c).addScaledVector(xl,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Yc{constructor(e=new ge(1/0,1/0,1/0),t=new ge(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Vr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Vr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Vr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=a.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,Vr):Vr.fromBufferAttribute(a,c),Vr.applyMatrix4(e.matrixWorld),this.expandByPoint(Vr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fd.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),fd.copy(r.boundingBox)),fd.applyMatrix4(e.matrixWorld),this.union(fd)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vr),Vr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ac),pd.subVectors(this.max,Ac),_l.subVectors(e.a,Ac),yl.subVectors(e.b,Ac),Sl.subVectors(e.c,Ac),ko.subVectors(yl,_l),Fo.subVectors(Sl,yl),_a.subVectors(_l,Sl);let t=[0,-ko.z,ko.y,0,-Fo.z,Fo.y,0,-_a.z,_a.y,ko.z,0,-ko.x,Fo.z,0,-Fo.x,_a.z,0,-_a.x,-ko.y,ko.x,0,-Fo.y,Fo.x,0,-_a.y,_a.x,0];return!eh(t,_l,yl,Sl,pd)||(t=[1,0,0,0,1,0,0,0,1],!eh(t,_l,yl,Sl,pd))?!1:(hd.crossVectors(ko,Fo),t=[hd.x,hd.y,hd.z],eh(t,_l,yl,Sl,pd))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($s[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$s[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$s[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$s[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$s[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$s[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$s[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$s[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($s),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $s=[new ge,new ge,new ge,new ge,new ge,new ge,new ge,new ge],Vr=new ge,fd=new Yc,_l=new ge,yl=new ge,Sl=new ge,ko=new ge,Fo=new ge,_a=new ge,Ac=new ge,pd=new ge,hd=new ge,ya=new ge;function eh(n,e,t,r,o){for(let a=0,c=n.length-3;a<=c;a+=3){ya.fromArray(n,a);const f=o.x*Math.abs(ya.x)+o.y*Math.abs(ya.y)+o.z*Math.abs(ya.z),h=e.dot(ya),u=t.dot(ya),p=r.dot(ya);if(Math.max(-Math.max(h,u,p),Math.min(h,u,p))>f)return!1}return!0}const Ys=$1();function $1(){const n=new ArrayBuffer(4),e=new Float32Array(n),t=new Uint32Array(n),r=new Uint32Array(512),o=new Uint32Array(512);for(let h=0;h<256;++h){const u=h-127;u<-27?(r[h]=0,r[h|256]=32768,o[h]=24,o[h|256]=24):u<-14?(r[h]=1024>>-u-14,r[h|256]=1024>>-u-14|32768,o[h]=-u-1,o[h|256]=-u-1):u<=15?(r[h]=u+15<<10,r[h|256]=u+15<<10|32768,o[h]=13,o[h|256]=13):u<128?(r[h]=31744,r[h|256]=64512,o[h]=24,o[h|256]=24):(r[h]=31744,r[h|256]=64512,o[h]=13,o[h|256]=13)}const a=new Uint32Array(2048),c=new Uint32Array(64),f=new Uint32Array(64);for(let h=1;h<1024;++h){let u=h<<13,p=0;for(;(u&8388608)===0;)u<<=1,p-=8388608;u&=-8388609,p+=947912704,a[h]=u|p}for(let h=1024;h<2048;++h)a[h]=939524096+(h-1024<<13);for(let h=1;h<31;++h)c[h]=h<<23;c[31]=1199570944,c[32]=2147483648;for(let h=33;h<63;++h)c[h]=2147483648+(h-32<<23);c[63]=3347054592;for(let h=1;h<64;++h)h!==32&&(f[h]=1024);return{floatView:e,uint32View:t,baseTable:r,shiftTable:o,mantissaTable:a,exponentTable:c,offsetTable:f}}function V1(n){Math.abs(n)>65504&&zt("DataUtils.toHalfFloat(): Value out of range."),n=tn(n,-65504,65504),Ys.floatView[0]=n;const e=Ys.uint32View[0],t=e>>23&511;return Ys.baseTable[t]+((e&8388607)>>Ys.shiftTable[t])}function H1(n){const e=n>>10;return Ys.uint32View[0]=Ys.mantissaTable[Ys.offsetTable[e]+(n&1023)]+Ys.exponentTable[e],Ys.floatView[0]}class AC{static toHalfFloat(e){return V1(e)}static fromHalfFloat(e){return H1(e)}}const Vn=new ge,md=new pn;let G1=0;class xs{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:G1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Bg,this.updateRanges=[],this.gpuType=hs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)md.fromBufferAttribute(this,t),md.applyMatrix3(e),this.setXY(t,md.x,md.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Vn.fromBufferAttribute(this,t),Vn.applyMatrix3(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Vn.fromBufferAttribute(this,t),Vn.applyMatrix4(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Vn.fromBufferAttribute(this,t),Vn.applyNormalMatrix(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Vn.fromBufferAttribute(this,t),Vn.transformDirection(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Cl(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ai(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cl(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ai(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cl(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ai(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ai(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cl(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ai(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ai(t,this.array),r=Ai(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Ai(t,this.array),r=Ai(r,this.array),o=Ai(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,a){return e*=this.itemSize,this.normalized&&(t=Ai(t,this.array),r=Ai(r,this.array),o=Ai(o,this.array),a=Ai(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bg&&(e.usage=this.usage),e}}class Wx extends xs{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class jx extends xs{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Gn extends xs{constructor(e,t,r){super(new Float32Array(e),t,r)}}const W1=new Yc,Rc=new ge,th=new ge;class df{constructor(e=new ge,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):W1.setFromPoints(e).getCenter(r);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rc.subVectors(e,this.center);const t=Rc.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Rc,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rc.copy(e.center).add(th)),this.expandByPoint(Rc.copy(e.center).sub(th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let j1=0;const xr=new In,nh=new ai,bl=new ge,Qi=new Yc,Pc=new Yc,oi=new ge;class Hi extends ka{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:j1++}),this.uuid=Gl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(l1(e)?jx:Wx)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new Yt().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xr.makeRotationFromQuaternion(e),this.applyMatrix4(xr),this}rotateX(e){return xr.makeRotationX(e),this.applyMatrix4(xr),this}rotateY(e){return xr.makeRotationY(e),this.applyMatrix4(xr),this}rotateZ(e){return xr.makeRotationZ(e),this.applyMatrix4(xr),this}translate(e,t,r){return xr.makeTranslation(e,t,r),this.applyMatrix4(xr),this}scale(e,t,r){return xr.makeScale(e,t,r),this.applyMatrix4(xr),this}lookAt(e){return nh.lookAt(e),nh.updateMatrix(),this.applyMatrix4(nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bl).negate(),this.translate(bl.x,bl.y,bl.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Gn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){fn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ge(-1/0,-1/0,-1/0),new ge(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Qi.setFromBufferAttribute(a),this.morphTargetsRelative?(oi.addVectors(this.boundingBox.min,Qi.min),this.boundingBox.expandByPoint(oi),oi.addVectors(this.boundingBox.max,Qi.max),this.boundingBox.expandByPoint(oi)):(this.boundingBox.expandByPoint(Qi.min),this.boundingBox.expandByPoint(Qi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&fn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new df);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){fn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ge,1/0);return}if(e){const r=this.boundingSphere.center;if(Qi.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const f=t[a];Pc.setFromBufferAttribute(f),this.morphTargetsRelative?(oi.addVectors(Qi.min,Pc.min),Qi.expandByPoint(oi),oi.addVectors(Qi.max,Pc.max),Qi.expandByPoint(oi)):(Qi.expandByPoint(Pc.min),Qi.expandByPoint(Pc.max))}Qi.getCenter(r);let o=0;for(let a=0,c=e.count;a<c;a++)oi.fromBufferAttribute(e,a),o=Math.max(o,r.distanceToSquared(oi));if(t)for(let a=0,c=t.length;a<c;a++){const f=t[a],h=this.morphTargetsRelative;for(let u=0,p=f.count;u<p;u++)oi.fromBufferAttribute(f,u),h&&(bl.fromBufferAttribute(e,u),oi.add(bl)),o=Math.max(o,r.distanceToSquared(oi))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&fn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){fn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xs(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let M=0;M<r.count;M++)f[M]=new ge,h[M]=new ge;const u=new ge,p=new ge,_=new ge,x=new pn,m=new pn,b=new pn,E=new ge,g=new ge;function y(M,C,B){u.fromBufferAttribute(r,M),p.fromBufferAttribute(r,C),_.fromBufferAttribute(r,B),x.fromBufferAttribute(a,M),m.fromBufferAttribute(a,C),b.fromBufferAttribute(a,B),p.sub(u),_.sub(u),m.sub(x),b.sub(x);const O=1/(m.x*b.y-b.x*m.y);isFinite(O)&&(E.copy(p).multiplyScalar(b.y).addScaledVector(_,-m.y).multiplyScalar(O),g.copy(_).multiplyScalar(m.x).addScaledVector(p,-b.x).multiplyScalar(O),f[M].add(E),f[C].add(E),f[B].add(E),h[M].add(g),h[C].add(g),h[B].add(g))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let M=0,C=P.length;M<C;++M){const B=P[M],O=B.start,$=B.count;for(let W=O,X=O+$;W<X;W+=3)y(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const N=new ge,k=new ge,V=new ge,A=new ge;function T(M){V.fromBufferAttribute(o,M),A.copy(V);const C=f[M];N.copy(C),N.sub(V.multiplyScalar(V.dot(C))).normalize(),k.crossVectors(A,C);const O=k.dot(h[M])<0?-1:1;c.setXYZW(M,N.x,N.y,N.z,O)}for(let M=0,C=P.length;M<C;++M){const B=P[M],O=B.start,$=B.count;for(let W=O,X=O+$;W<X;W+=3)T(e.getX(W+0)),T(e.getX(W+1)),T(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new xs(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,m=r.count;x<m;x++)r.setXYZ(x,0,0,0);const o=new ge,a=new ge,c=new ge,f=new ge,h=new ge,u=new ge,p=new ge,_=new ge;if(e)for(let x=0,m=e.count;x<m;x+=3){const b=e.getX(x+0),E=e.getX(x+1),g=e.getX(x+2);o.fromBufferAttribute(t,b),a.fromBufferAttribute(t,E),c.fromBufferAttribute(t,g),p.subVectors(c,a),_.subVectors(o,a),p.cross(_),f.fromBufferAttribute(r,b),h.fromBufferAttribute(r,E),u.fromBufferAttribute(r,g),f.add(p),h.add(p),u.add(p),r.setXYZ(b,f.x,f.y,f.z),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(g,u.x,u.y,u.z)}else for(let x=0,m=t.count;x<m;x+=3)o.fromBufferAttribute(t,x+0),a.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),p.subVectors(c,a),_.subVectors(o,a),p.cross(_),r.setXYZ(x+0,p.x,p.y,p.z),r.setXYZ(x+1,p.x,p.y,p.z),r.setXYZ(x+2,p.x,p.y,p.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)oi.fromBufferAttribute(e,t),oi.normalize(),e.setXYZ(t,oi.x,oi.y,oi.z)}toNonIndexed(){function e(f,h){const u=f.array,p=f.itemSize,_=f.normalized,x=new u.constructor(h.length*p);let m=0,b=0;for(let E=0,g=h.length;E<g;E++){f.isInterleavedBufferAttribute?m=h[E]*f.data.stride+f.offset:m=h[E]*p;for(let y=0;y<p;y++)x[b++]=u[m++]}return new xs(x,p,_)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hi,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],u=e(h,r);t.setAttribute(f,u)}const a=this.morphAttributes;for(const f in a){const h=[],u=a[f];for(let p=0,_=u.length;p<_;p++){const x=u[p],m=e(x,r);h.push(m)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const u=c[f];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const u in h)h[u]!==void 0&&(e[u]=h[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const u=r[h];e.data.attributes[h]=u.toJSON(e.data)}const o={};let a=!1;for(const h in this.morphAttributes){const u=this.morphAttributes[h],p=[];for(let _=0,x=u.length;_<x;_++){const m=u[_];p.push(m.toJSON(e.data))}p.length>0&&(o[h]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const u in o){const p=o[u];this.setAttribute(u,p.clone(t))}const a=e.morphAttributes;for(const u in a){const p=[],_=a[u];for(let x=0,m=_.length;x<m;x++)p.push(_[x].clone(t));this.morphAttributes[u]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let u=0,p=c.length;u<p;u++){const _=c[u];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let X1=0;class jl extends ka{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:X1++}),this.uuid=Gl(),this.name="",this.type="Material",this.blending=Ll,this.side=Xo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lh,this.blendDst=Dh,this.blendEquation=Aa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new on(0,0,0),this.blendAlpha=0,this.depthFunc=Ul,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Og,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fl,this.stencilZFail=fl,this.stencilZPass=fl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){zt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){zt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ll&&(r.blending=this.blending),this.side!==Xo&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Lh&&(r.blendSrc=this.blendSrc),this.blendDst!==Dh&&(r.blendDst=this.blendDst),this.blendEquation!==Aa&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ul&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Og&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fl&&(r.stencilFail=this.stencilFail),this.stencilZFail!==fl&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==fl&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(a){const c=[];for(const f in a){const h=a[f];delete h.metadata,c.push(h)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(r.textures=a),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let a=0;a!==o;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Vs=new ge,ih=new ge,gd=new ge,Oo=new ge,rh=new ge,vd=new ge,sh=new ge;class Xx{constructor(e=new ge,t=new ge(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Vs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vs.copy(this.origin).addScaledVector(this.direction,t),Vs.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){ih.copy(e).add(t).multiplyScalar(.5),gd.copy(t).sub(e).normalize(),Oo.copy(this.origin).sub(ih);const a=e.distanceTo(t)*.5,c=-this.direction.dot(gd),f=Oo.dot(this.direction),h=-Oo.dot(gd),u=Oo.lengthSq(),p=Math.abs(1-c*c);let _,x,m,b;if(p>0)if(_=c*h-f,x=c*f-h,b=a*p,_>=0)if(x>=-b)if(x<=b){const E=1/p;_*=E,x*=E,m=_*(_+c*x+2*f)+x*(c*_+x+2*h)+u}else x=a,_=Math.max(0,-(c*x+f)),m=-_*_+x*(x+2*h)+u;else x=-a,_=Math.max(0,-(c*x+f)),m=-_*_+x*(x+2*h)+u;else x<=-b?(_=Math.max(0,-(-c*a+f)),x=_>0?-a:Math.min(Math.max(-a,-h),a),m=-_*_+x*(x+2*h)+u):x<=b?(_=0,x=Math.min(Math.max(-a,-h),a),m=x*(x+2*h)+u):(_=Math.max(0,-(c*a+f)),x=_>0?a:Math.min(Math.max(-a,-h),a),m=-_*_+x*(x+2*h)+u);else x=c>0?-a:a,_=Math.max(0,-(c*x+f)),m=-_*_+x*(x+2*h)+u;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(ih).addScaledVector(gd,x),m}intersectSphere(e,t){Vs.subVectors(e.center,this.origin);const r=Vs.dot(this.direction),o=Vs.dot(Vs)-r*r,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),f=r-c,h=r+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,a,c,f,h;const u=1/this.direction.x,p=1/this.direction.y,_=1/this.direction.z,x=this.origin;return u>=0?(r=(e.min.x-x.x)*u,o=(e.max.x-x.x)*u):(r=(e.max.x-x.x)*u,o=(e.min.x-x.x)*u),p>=0?(a=(e.min.y-x.y)*p,c=(e.max.y-x.y)*p):(a=(e.max.y-x.y)*p,c=(e.min.y-x.y)*p),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),_>=0?(f=(e.min.z-x.z)*_,h=(e.max.z-x.z)*_):(f=(e.max.z-x.z)*_,h=(e.min.z-x.z)*_),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Vs)!==null}intersectTriangle(e,t,r,o,a){rh.subVectors(t,e),vd.subVectors(r,e),sh.crossVectors(rh,vd);let c=this.direction.dot(sh),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Oo.subVectors(this.origin,e);const h=f*this.direction.dot(vd.crossVectors(Oo,vd));if(h<0)return null;const u=f*this.direction.dot(rh.cross(Oo));if(u<0||h+u>c)return null;const p=-f*Oo.dot(sh);return p<0?null:this.at(p/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yx extends jl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new on(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.combine=Mx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tv=new In,Sa=new Xx,xd=new df,nv=new ge,_d=new ge,yd=new ge,Sd=new ge,oh=new ge,bd=new ge,iv=new ge,Md=new ge;class Xr extends ai{constructor(e=new Hi,t=new Yx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const f=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,a=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(a&&f){bd.set(0,0,0);for(let h=0,u=a.length;h<u;h++){const p=f[h],_=a[h];p!==0&&(oh.fromBufferAttribute(_,e),c?bd.addScaledVector(oh,p):bd.addScaledVector(oh.sub(t),p))}t.add(bd)}return t}raycast(e,t){const r=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),xd.copy(r.boundingSphere),xd.applyMatrix4(a),Sa.copy(e.ray).recast(e.near),!(xd.containsPoint(Sa.origin)===!1&&(Sa.intersectSphere(xd,nv)===null||Sa.origin.distanceToSquared(nv)>(e.far-e.near)**2))&&(tv.copy(a).invert(),Sa.copy(e.ray).applyMatrix4(tv),!(r.boundingBox!==null&&Sa.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Sa)))}_computeIntersections(e,t,r){let o;const a=this.geometry,c=this.material,f=a.index,h=a.attributes.position,u=a.attributes.uv,p=a.attributes.uv1,_=a.attributes.normal,x=a.groups,m=a.drawRange;if(f!==null)if(Array.isArray(c))for(let b=0,E=x.length;b<E;b++){const g=x[b],y=c[g.materialIndex],P=Math.max(g.start,m.start),N=Math.min(f.count,Math.min(g.start+g.count,m.start+m.count));for(let k=P,V=N;k<V;k+=3){const A=f.getX(k),T=f.getX(k+1),M=f.getX(k+2);o=wd(this,y,e,r,u,p,_,A,T,M),o&&(o.faceIndex=Math.floor(k/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const b=Math.max(0,m.start),E=Math.min(f.count,m.start+m.count);for(let g=b,y=E;g<y;g+=3){const P=f.getX(g),N=f.getX(g+1),k=f.getX(g+2);o=wd(this,c,e,r,u,p,_,P,N,k),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let b=0,E=x.length;b<E;b++){const g=x[b],y=c[g.materialIndex],P=Math.max(g.start,m.start),N=Math.min(h.count,Math.min(g.start+g.count,m.start+m.count));for(let k=P,V=N;k<V;k+=3){const A=k,T=k+1,M=k+2;o=wd(this,y,e,r,u,p,_,A,T,M),o&&(o.faceIndex=Math.floor(k/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const b=Math.max(0,m.start),E=Math.min(h.count,m.start+m.count);for(let g=b,y=E;g<y;g+=3){const P=g,N=g+1,k=g+2;o=wd(this,c,e,r,u,p,_,P,N,k),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}}}function Y1(n,e,t,r,o,a,c,f){let h;if(e.side===Vi?h=r.intersectTriangle(c,a,o,!0,f):h=r.intersectTriangle(o,a,c,e.side===Xo,f),h===null)return null;Md.copy(f),Md.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Md);return u<t.near||u>t.far?null:{distance:u,point:Md.clone(),object:n}}function wd(n,e,t,r,o,a,c,f,h,u){n.getVertexPosition(f,_d),n.getVertexPosition(h,yd),n.getVertexPosition(u,Sd);const p=Y1(n,e,t,r,_d,yd,Sd,iv);if(p){const _=new ge;Mr.getBarycoord(iv,_d,yd,Sd,_),o&&(p.uv=Mr.getInterpolatedAttribute(o,f,h,u,_,new pn)),a&&(p.uv1=Mr.getInterpolatedAttribute(a,f,h,u,_,new pn)),c&&(p.normal=Mr.getInterpolatedAttribute(c,f,h,u,_,new ge),p.normal.dot(r.direction)>0&&p.normal.multiplyScalar(-1));const x={a:f,b:h,c:u,normal:new ge,materialIndex:0};Mr.getNormal(_d,yd,Sd,x.normal),p.face=x,p.barycoord=_}return p}class qx extends yi{constructor(e=null,t=1,r=1,o,a,c,f,h,u=di,p=di,_,x){super(null,c,f,h,u,p,o,a,_,x),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ah=new ge,q1=new ge,K1=new Yt;class Ta{constructor(e=new ge(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=ah.subVectors(r,t).cross(q1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(ah),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||K1.getNormalMatrix(e),o=this.coplanarPoint(ah).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ba=new df,Z1=new pn(.5,.5),Ed=new ge;class $m{constructor(e=new Ta,t=new Ta,r=new Ta,o=new Ta,a=new Ta,c=new Ta){this.planes=[e,t,r,o,a,c]}set(e,t,r,o,a,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(a),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ms,r=!1){const o=this.planes,a=e.elements,c=a[0],f=a[1],h=a[2],u=a[3],p=a[4],_=a[5],x=a[6],m=a[7],b=a[8],E=a[9],g=a[10],y=a[11],P=a[12],N=a[13],k=a[14],V=a[15];if(o[0].setComponents(u-c,m-p,y-b,V-P).normalize(),o[1].setComponents(u+c,m+p,y+b,V+P).normalize(),o[2].setComponents(u+f,m+_,y+E,V+N).normalize(),o[3].setComponents(u-f,m-_,y-E,V-N).normalize(),r)o[4].setComponents(h,x,g,k).normalize(),o[5].setComponents(u-h,m-x,y-g,V-k).normalize();else if(o[4].setComponents(u-h,m-x,y-g,V-k).normalize(),t===ms)o[5].setComponents(u+h,m+x,y+g,V+k).normalize();else if(t===Vc)o[5].setComponents(h,x,g,k).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ba.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ba.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ba)}intersectsSprite(e){ba.center.set(0,0,0);const t=Z1.distanceTo(e.center);return ba.radius=.7071067811865476+t,ba.applyMatrix4(e.matrixWorld),this.intersectsSphere(ba)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Ed.x=o.normal.x>0?e.max.x:e.min.x,Ed.y=o.normal.y>0?e.max.y:e.min.y,Ed.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ed)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Kx extends jl{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new on(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rf=new ge,sf=new ge,rv=new In,Ic=new Xx,Td=new df,lh=new ge,sv=new ge;class J1 extends ai{constructor(e=new Hi,t=new Kx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,a=t.count;o<a;o++)rf.fromBufferAttribute(t,o-1),sf.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=rf.distanceTo(sf);e.setAttribute("lineDistance",new Gn(r,1))}else zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Td.copy(r.boundingSphere),Td.applyMatrix4(o),Td.radius+=a,e.ray.intersectsSphere(Td)===!1)return;rv.copy(o).invert(),Ic.copy(e.ray).applyMatrix4(rv);const f=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,u=this.isLineSegments?2:1,p=r.index,x=r.attributes.position;if(p!==null){const m=Math.max(0,c.start),b=Math.min(p.count,c.start+c.count);for(let E=m,g=b-1;E<g;E+=u){const y=p.getX(E),P=p.getX(E+1),N=Cd(this,e,Ic,h,y,P,E);N&&t.push(N)}if(this.isLineLoop){const E=p.getX(b-1),g=p.getX(m),y=Cd(this,e,Ic,h,E,g,b-1);y&&t.push(y)}}else{const m=Math.max(0,c.start),b=Math.min(x.count,c.start+c.count);for(let E=m,g=b-1;E<g;E+=u){const y=Cd(this,e,Ic,h,E,E+1,E);y&&t.push(y)}if(this.isLineLoop){const E=Cd(this,e,Ic,h,b-1,m,b-1);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const f=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}}function Cd(n,e,t,r,o,a,c){const f=n.geometry.attributes.position;if(rf.fromBufferAttribute(f,o),sf.fromBufferAttribute(f,a),t.distanceSqToSegment(rf,sf,lh,sv)>r)return;lh.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(lh);if(!(u<e.near||u>e.far))return{distance:u,point:sv.clone().applyMatrix4(n.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:n}}const ov=new ge,av=new ge;class Q1 extends J1{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,a=t.count;o<a;o+=2)ov.fromBufferAttribute(t,o),av.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+ov.distanceTo(av);e.setAttribute("lineDistance",new Gn(r,1))}else zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Zx extends yi{constructor(e=[],t=Na,r,o,a,c,f,h,u,p){super(e,t,r,o,a,c,f,h,u,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class RC extends yi{constructor(e,t,r,o,a,c,f,h,u){super(e,t,r,o,a,c,f,h,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gc extends yi{constructor(e,t,r=ys,o,a,c,f=di,h=di,u,p=eo,_=1){if(p!==eo&&p!==Ia)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:_};super(x,o,a,c,f,h,p,r,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class eS extends Gc{constructor(e,t=ys,r=Na,o,a,c=di,f=di,h,u=eo){const p={width:e,height:e,depth:1},_=[p,p,p,p,p,p];super(e,e,t,r,o,a,c,f,h,u),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Jx extends yi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class qc extends Hi{constructor(e=1,t=1,r=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:a,depthSegments:c};const f=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const h=[],u=[],p=[],_=[];let x=0,m=0;b("z","y","x",-1,-1,r,t,e,c,a,0),b("z","y","x",1,-1,r,t,-e,c,a,1),b("x","z","y",1,1,e,r,t,o,c,2),b("x","z","y",1,-1,e,r,-t,o,c,3),b("x","y","z",1,-1,e,t,r,o,a,4),b("x","y","z",-1,-1,e,t,-r,o,a,5),this.setIndex(h),this.setAttribute("position",new Gn(u,3)),this.setAttribute("normal",new Gn(p,3)),this.setAttribute("uv",new Gn(_,2));function b(E,g,y,P,N,k,V,A,T,M,C){const B=k/T,O=V/M,$=k/2,W=V/2,X=A/2,re=T+1,ee=M+1;let Z=0,ie=0;const q=new ge;for(let ae=0;ae<ee;ae++){const z=ae*O-W;for(let j=0;j<re;j++){const Pe=j*B-$;q[E]=Pe*P,q[g]=z*N,q[y]=X,u.push(q.x,q.y,q.z),q[E]=0,q[g]=0,q[y]=A>0?1:-1,p.push(q.x,q.y,q.z),_.push(j/T),_.push(1-ae/M),Z+=1}}for(let ae=0;ae<M;ae++)for(let z=0;z<T;z++){const j=x+z+re*ae,Pe=x+z+re*(ae+1),qe=x+(z+1)+re*(ae+1),De=x+(z+1)+re*ae;h.push(j,Pe,De),h.push(Pe,qe,De),ie+=6}f.addGroup(m,ie,C),m+=ie,x+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Qx extends Hi{constructor(e=1,t=1,r=1,o=32,a=1,c=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:a,openEnded:c,thetaStart:f,thetaLength:h};const u=this;o=Math.floor(o),a=Math.floor(a);const p=[],_=[],x=[],m=[];let b=0;const E=[],g=r/2;let y=0;P(),c===!1&&(e>0&&N(!0),t>0&&N(!1)),this.setIndex(p),this.setAttribute("position",new Gn(_,3)),this.setAttribute("normal",new Gn(x,3)),this.setAttribute("uv",new Gn(m,2));function P(){const k=new ge,V=new ge;let A=0;const T=(t-e)/r;for(let M=0;M<=a;M++){const C=[],B=M/a,O=B*(t-e)+e;for(let $=0;$<=o;$++){const W=$/o,X=W*h+f,re=Math.sin(X),ee=Math.cos(X);V.x=O*re,V.y=-B*r+g,V.z=O*ee,_.push(V.x,V.y,V.z),k.set(re,T,ee).normalize(),x.push(k.x,k.y,k.z),m.push(W,1-B),C.push(b++)}E.push(C)}for(let M=0;M<o;M++)for(let C=0;C<a;C++){const B=E[C][M],O=E[C+1][M],$=E[C+1][M+1],W=E[C][M+1];(e>0||C!==0)&&(p.push(B,O,W),A+=3),(t>0||C!==a-1)&&(p.push(O,$,W),A+=3)}u.addGroup(y,A,0),y+=A}function N(k){const V=b,A=new pn,T=new ge;let M=0;const C=k===!0?e:t,B=k===!0?1:-1;for(let $=1;$<=o;$++)_.push(0,g*B,0),x.push(0,B,0),m.push(.5,.5),b++;const O=b;for(let $=0;$<=o;$++){const X=$/o*h+f,re=Math.cos(X),ee=Math.sin(X);T.x=C*ee,T.y=g*B,T.z=C*re,_.push(T.x,T.y,T.z),x.push(0,B,0),A.x=re*.5+.5,A.y=ee*.5*B+.5,m.push(A.x,A.y),b++}for(let $=0;$<o;$++){const W=V+$,X=O+$;k===!0?p.push(X,X+1,W):p.push(X+1,X,W),M+=3}u.addGroup(y,M,k===!0?1:2),y+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qx(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Ad=new ge,Rd=new ge,ch=new ge,Pd=new Mr;class PC extends Hi{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),a=Math.cos(Dl*t),c=e.getIndex(),f=e.getAttribute("position"),h=c?c.count:f.count,u=[0,0,0],p=["a","b","c"],_=new Array(3),x={},m=[];for(let b=0;b<h;b+=3){c?(u[0]=c.getX(b),u[1]=c.getX(b+1),u[2]=c.getX(b+2)):(u[0]=b,u[1]=b+1,u[2]=b+2);const{a:E,b:g,c:y}=Pd;if(E.fromBufferAttribute(f,u[0]),g.fromBufferAttribute(f,u[1]),y.fromBufferAttribute(f,u[2]),Pd.getNormal(ch),_[0]=`${Math.round(E.x*o)},${Math.round(E.y*o)},${Math.round(E.z*o)}`,_[1]=`${Math.round(g.x*o)},${Math.round(g.y*o)},${Math.round(g.z*o)}`,_[2]=`${Math.round(y.x*o)},${Math.round(y.y*o)},${Math.round(y.z*o)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let P=0;P<3;P++){const N=(P+1)%3,k=_[P],V=_[N],A=Pd[p[P]],T=Pd[p[N]],M=`${k}_${V}`,C=`${V}_${k}`;C in x&&x[C]?(ch.dot(x[C].normal)<=a&&(m.push(A.x,A.y,A.z),m.push(T.x,T.y,T.z)),x[C]=null):M in x||(x[M]={index0:u[P],index1:u[N],normal:ch.clone()})}}for(const b in x)if(x[b]){const{index0:E,index1:g}=x[b];Ad.fromBufferAttribute(f,E),Rd.fromBufferAttribute(f,g),m.push(Ad.x,Ad.y,Ad.z),m.push(Rd.x,Rd.y,Rd.z)}this.setAttribute("position",new Gn(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Xl extends Hi{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const a=e/2,c=t/2,f=Math.floor(r),h=Math.floor(o),u=f+1,p=h+1,_=e/f,x=t/h,m=[],b=[],E=[],g=[];for(let y=0;y<p;y++){const P=y*x-c;for(let N=0;N<u;N++){const k=N*_-a;b.push(k,-P,0),E.push(0,0,1),g.push(N/f),g.push(1-y/h)}}for(let y=0;y<h;y++)for(let P=0;P<f;P++){const N=P+u*y,k=P+u*(y+1),V=P+1+u*(y+1),A=P+1+u*y;m.push(N,k,A),m.push(k,V,A)}this.setIndex(m),this.setAttribute("position",new Gn(b,3)),this.setAttribute("normal",new Gn(E,3)),this.setAttribute("uv",new Gn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xl(e.width,e.height,e.widthSegments,e.heightSegments)}}class e_ extends Hi{constructor(e=1,t=32,r=16,o=0,a=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:a,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(c+f,Math.PI);let u=0;const p=[],_=new ge,x=new ge,m=[],b=[],E=[],g=[];for(let y=0;y<=r;y++){const P=[],N=y/r;let k=0;y===0&&c===0?k=.5/t:y===r&&h===Math.PI&&(k=-.5/t);for(let V=0;V<=t;V++){const A=V/t;_.x=-e*Math.cos(o+A*a)*Math.sin(c+N*f),_.y=e*Math.cos(c+N*f),_.z=e*Math.sin(o+A*a)*Math.sin(c+N*f),b.push(_.x,_.y,_.z),x.copy(_).normalize(),E.push(x.x,x.y,x.z),g.push(A+k,1-N),P.push(u++)}p.push(P)}for(let y=0;y<r;y++)for(let P=0;P<t;P++){const N=p[y][P+1],k=p[y][P],V=p[y+1][P],A=p[y+1][P+1];(y!==0||c>0)&&m.push(N,k,A),(y!==r-1||h<Math.PI)&&m.push(k,V,A)}this.setIndex(m),this.setAttribute("position",new Gn(b,3)),this.setAttribute("normal",new Gn(E,3)),this.setAttribute("uv",new Gn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new e_(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Bl(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Ri(n){const e={};for(let t=0;t<n.length;t++){const r=Bl(n[t]);for(const o in r)e[o]=r[o]}return e}function tS(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function t_(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:un.workingColorSpace}const nS={clone:Bl,merge:Ri};var iS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ir extends jl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iS,this.fragmentShader=rS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bl(e.uniforms),this.uniformsGroups=tS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class sS extends ir{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class IC extends jl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new on(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new on(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bx,this.normalScale=new pn(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oS extends jl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=e1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aS extends jl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lv={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(cv(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!cv(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function cv(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class lS{constructor(e,t,r){const o=this;let a=!1,c=0,f=0,h;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(p){f++,a===!1&&o.onStart!==void 0&&o.onStart(p,c,f),a=!0},this.itemEnd=function(p){c++,o.onProgress!==void 0&&o.onProgress(p,c,f),c===f&&(a=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(p){o.onError!==void 0&&o.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,_){return u.push(p,_),this},this.removeHandler=function(p){const _=u.indexOf(p);return _!==-1&&u.splice(_,2),this},this.getHandler=function(p){for(let _=0,x=u.length;_<x;_+=2){const m=u[_],b=u[_+1];if(m.global&&(m.lastIndex=0),m.test(p))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const cS=new lS;class Vm{constructor(e){this.manager=e!==void 0?e:cS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,a){r.load(e,o,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Vm.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hs={};class uS extends Error{constructor(e,t){super(e),this.response=t}}class dS extends Vm{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,r,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=lv.get(`file:${e}`);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Hs[e]!==void 0){Hs[e].push({onLoad:t,onProgress:r,onError:o});return}Hs[e]=[],Hs[e].push({onLoad:t,onProgress:r,onError:o});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),f=this.mimeType,h=this.responseType;fetch(c).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&zt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const p=Hs[e],_=u.body.getReader(),x=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),m=x?parseInt(x):0,b=m!==0;let E=0;const g=new ReadableStream({start(y){P();function P(){_.read().then(({done:N,value:k})=>{if(N)y.close();else{E+=k.byteLength;const V=new ProgressEvent("progress",{lengthComputable:b,loaded:E,total:m});for(let A=0,T=p.length;A<T;A++){const M=p[A];M.onProgress&&M.onProgress(V)}y.enqueue(k),P()}},N=>{y.error(N)})}}});return new Response(g)}else throw new uS(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(h){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(p=>new DOMParser().parseFromString(p,f));case"json":return u.json();default:if(f==="")return u.text();{const _=/charset="?([^;"\s]*)"?/i.exec(f),x=_&&_[1]?_[1].toLowerCase():void 0,m=new TextDecoder(x);return u.arrayBuffer().then(b=>m.decode(b))}}}).then(u=>{lv.add(`file:${e}`,u);const p=Hs[e];delete Hs[e];for(let _=0,x=p.length;_<x;_++){const m=p[_];m.onLoad&&m.onLoad(u)}}).catch(u=>{const p=Hs[e];if(p===void 0)throw this.manager.itemError(e),u;delete Hs[e];for(let _=0,x=p.length;_<x;_++){const m=p[_];m.onError&&m.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class LC extends Vm{constructor(e){super(e)}load(e,t,r,o){const a=this,c=new qx,f=new dS(this.manager);return f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setPath(this.path),f.setWithCredentials(a.withCredentials),f.load(e,function(h){let u;try{u=a.parse(h)}catch(p){if(o!==void 0)o(p);else{p(p);return}}u.image!==void 0?c.image=u.image:u.data!==void 0&&(c.image.width=u.width,c.image.height=u.height,c.image.data=u.data),c.wrapS=u.wrapS!==void 0?u.wrapS:Wr,c.wrapT=u.wrapT!==void 0?u.wrapT:Wr,c.magFilter=u.magFilter!==void 0?u.magFilter:Yn,c.minFilter=u.minFilter!==void 0?u.minFilter:Yn,c.anisotropy=u.anisotropy!==void 0?u.anisotropy:1,u.colorSpace!==void 0&&(c.colorSpace=u.colorSpace),u.flipY!==void 0&&(c.flipY=u.flipY),u.format!==void 0&&(c.format=u.format),u.type!==void 0&&(c.type=u.type),u.mipmaps!==void 0&&(c.mipmaps=u.mipmaps,c.minFilter=Ho),u.mipmapCount===1&&(c.minFilter=Yn),u.generateMipmaps!==void 0&&(c.generateMipmaps=u.generateMipmaps),c.needsUpdate=!0,t&&t(c,u)},r,o),c}}class n_ extends ai{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new on(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class DC extends n_{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ai.DEFAULT_UP),this.updateMatrix(),this.groundColor=new on(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const uh=new In,uv=new ge,dv=new ge;class fS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pn(512,512),this.mapType=nr,this.map=null,this.mapPass=null,this.matrix=new In,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $m,this._frameExtents=new pn(1,1),this._viewportCount=1,this._viewports=[new Dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;uv.setFromMatrixPosition(e.matrixWorld),t.position.copy(uv),dv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dv),t.updateMatrixWorld(),uh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uh,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Vc||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(uh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Id=new ge,Ld=new Wl,ls=new ge;class i_ extends ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new In,this.projectionMatrix=new In,this.projectionMatrixInverse=new In,this.coordinateSystem=ms,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Id,Ld,ls),ls.x===1&&ls.y===1&&ls.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Id,Ld,ls.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Id,Ld,ls),ls.x===1&&ls.y===1&&ls.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Id,Ld,ls.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Bo=new ge,fv=new pn,pv=new pn;class Hr extends i_{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hc*2*Math.atan(Math.tan(Dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Bo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bo.x,Bo.y).multiplyScalar(-e/Bo.z),Bo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Bo.x,Bo.y).multiplyScalar(-e/Bo.z)}getViewSize(e,t){return this.getViewBounds(e,fv,pv),t.subVectors(pv,fv)}setViewOffset(e,t,r,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Dl*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,u=c.fullHeight;a+=c.offsetX*o/h,t-=c.offsetY*r/u,o*=c.width/h,r*=c.height/u}const f=this.filmOffset;f!==0&&(a+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Kc extends i_{constructor(e=-1,t=1,r=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=r-e,c=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,c=a+u*this.view.width,f-=p*this.view.offsetY,h=f-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class pS extends fS{constructor(){super(new Kc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class NC extends n_{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ai.DEFAULT_UP),this.updateMatrix(),this.target=new ai,this.shadow=new pS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ml=-90,wl=1;class hS extends ai{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Hr(Ml,wl,e,t);o.layers=this.layers,this.add(o);const a=new Hr(Ml,wl,e,t);a.layers=this.layers,this.add(a);const c=new Hr(Ml,wl,e,t);c.layers=this.layers,this.add(c);const f=new Hr(Ml,wl,e,t);f.layers=this.layers,this.add(f);const h=new Hr(Ml,wl,e,t);h.layers=this.layers,this.add(h);const u=new Hr(Ml,wl,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,a,c,f,h]=t;for(const u of t)this.remove(u);if(e===ms)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Vc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,f,h,u,p]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(r,1,o),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,o),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,o),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(_,x,m),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class mS extends Hr{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class UC{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=tn(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(tn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class kC extends Q1{constructor(e=10,t=10,r=4473924,o=8947848){r=new on(r),o=new on(o);const a=t/2,c=e/t,f=e/2,h=[],u=[];for(let x=0,m=0,b=-f;x<=t;x++,b+=c){h.push(-f,0,b,f,0,b),h.push(b,0,-f,b,0,f);const E=x===a?r:o;E.toArray(u,m),m+=3,E.toArray(u,m),m+=3,E.toArray(u,m),m+=3,E.toArray(u,m),m+=3}const p=new Hi;p.setAttribute("position",new Gn(h,3)),p.setAttribute("color",new Gn(u,3));const _=new Kx({vertexColors:!0,toneMapped:!1});super(p,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class FC extends ka{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){zt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function hv(n,e,t,r){const o=gS(r);switch(t){case kx:return n*e;case Ox:return n*e/o.components*o.byteLength;case Nm:return n*e/o.components*o.byteLength;case Fl:return n*e*2/o.components*o.byteLength;case Um:return n*e*2/o.components*o.byteLength;case Fx:return n*e*3/o.components*o.byteLength;case jr:return n*e*4/o.components*o.byteLength;case km:return n*e*4/o.components*o.byteLength;case jd:case Xd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Yd:case qd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gh:case jh:return Math.max(n,16)*Math.max(e,8)/4;case Hh:case Wh:return Math.max(n,8)*Math.max(e,8)/2;case Xh:case Yh:case Kh:case Zh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case qh:case Jh:case Qh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case em:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tm:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case nm:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case im:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case rm:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case sm:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case om:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case am:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case lm:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case cm:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case um:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case dm:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case fm:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case pm:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case hm:case mm:case gm:return Math.ceil(n/4)*Math.ceil(e/4)*16;case vm:case xm:return Math.ceil(n/4)*Math.ceil(e/4)*8;case _m:case ym:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gS(n){switch(n){case nr:case Lx:return{byteLength:1,components:1};case zc:case Dx:case Qs:return{byteLength:2,components:1};case Lm:case Dm:return{byteLength:2,components:4};case ys:case Im:case hs:return{byteLength:4,components:1};case Nx:case Ux:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pm}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function r_(){let n=null,e=!1,t=null,r=null;function o(a,c){t(a,c),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function vS(n){const e=new WeakMap;function t(f,h){const u=f.array,p=f.usage,_=u.byteLength,x=n.createBuffer();n.bindBuffer(h,x),n.bufferData(h,u,p),f.onUploadCallback();let m;if(u instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=n.HALF_FLOAT;else if(u instanceof Uint16Array)f.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=n.SHORT;else if(u instanceof Uint32Array)m=n.UNSIGNED_INT;else if(u instanceof Int32Array)m=n.INT;else if(u instanceof Int8Array)m=n.BYTE;else if(u instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:x,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,h,u){const p=h.array,_=h.updateRanges;if(n.bindBuffer(u,f),_.length===0)n.bufferSubData(u,0,p);else{_.sort((m,b)=>m.start-b.start);let x=0;for(let m=1;m<_.length;m++){const b=_[x],E=_[m];E.start<=b.start+b.count+1?b.count=Math.max(b.count,E.start+E.count-b.start):(++x,_[x]=E)}_.length=x+1;for(let m=0,b=_.length;m<b;m++){const E=_[m];n.bufferSubData(u,E.start*p.BYTES_PER_ELEMENT,p,E.start,E.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function a(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(n.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const p=e.get(f);(!p||p.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const u=e.get(f);if(u===void 0)e.set(f,t(f,h));else if(u.version<f.version){if(u.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,f,h),u.version=f.version}}return{get:o,remove:a,update:c}}var xS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_S=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,MS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ES=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,CS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,AS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,IS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,LS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,DS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,NS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,OS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,BS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$S=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,VS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,HS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,GS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YS="gl_FragColor = linearToOutputTexel( gl_FragColor );",qS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,KS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ZS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,JS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,QS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ib=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ob=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ab=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ub=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,db=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_b=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ab=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ib=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Db=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Nb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ub=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ob=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$b=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Xb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,eM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,nM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,aM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,EM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,TM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,CM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,LM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,OM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,BM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$M=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,VM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,KM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:xS,alphahash_pars_fragment:_S,alphamap_fragment:yS,alphamap_pars_fragment:SS,alphatest_fragment:bS,alphatest_pars_fragment:MS,aomap_fragment:wS,aomap_pars_fragment:ES,batching_pars_vertex:TS,batching_vertex:CS,begin_vertex:AS,beginnormal_vertex:RS,bsdfs:PS,iridescence_fragment:IS,bumpmap_pars_fragment:LS,clipping_planes_fragment:DS,clipping_planes_pars_fragment:NS,clipping_planes_pars_vertex:US,clipping_planes_vertex:kS,color_fragment:FS,color_pars_fragment:OS,color_pars_vertex:BS,color_vertex:zS,common:$S,cube_uv_reflection_fragment:VS,defaultnormal_vertex:HS,displacementmap_pars_vertex:GS,displacementmap_vertex:WS,emissivemap_fragment:jS,emissivemap_pars_fragment:XS,colorspace_fragment:YS,colorspace_pars_fragment:qS,envmap_fragment:KS,envmap_common_pars_fragment:ZS,envmap_pars_fragment:JS,envmap_pars_vertex:QS,envmap_physical_pars_fragment:ub,envmap_vertex:eb,fog_vertex:tb,fog_pars_vertex:nb,fog_fragment:ib,fog_pars_fragment:rb,gradientmap_pars_fragment:sb,lightmap_pars_fragment:ob,lights_lambert_fragment:ab,lights_lambert_pars_fragment:lb,lights_pars_begin:cb,lights_toon_fragment:db,lights_toon_pars_fragment:fb,lights_phong_fragment:pb,lights_phong_pars_fragment:hb,lights_physical_fragment:mb,lights_physical_pars_fragment:gb,lights_fragment_begin:vb,lights_fragment_maps:xb,lights_fragment_end:_b,logdepthbuf_fragment:yb,logdepthbuf_pars_fragment:Sb,logdepthbuf_pars_vertex:bb,logdepthbuf_vertex:Mb,map_fragment:wb,map_pars_fragment:Eb,map_particle_fragment:Tb,map_particle_pars_fragment:Cb,metalnessmap_fragment:Ab,metalnessmap_pars_fragment:Rb,morphinstance_vertex:Pb,morphcolor_vertex:Ib,morphnormal_vertex:Lb,morphtarget_pars_vertex:Db,morphtarget_vertex:Nb,normal_fragment_begin:Ub,normal_fragment_maps:kb,normal_pars_fragment:Fb,normal_pars_vertex:Ob,normal_vertex:Bb,normalmap_pars_fragment:zb,clearcoat_normal_fragment_begin:$b,clearcoat_normal_fragment_maps:Vb,clearcoat_pars_fragment:Hb,iridescence_pars_fragment:Gb,opaque_fragment:Wb,packing:jb,premultiplied_alpha_fragment:Xb,project_vertex:Yb,dithering_fragment:qb,dithering_pars_fragment:Kb,roughnessmap_fragment:Zb,roughnessmap_pars_fragment:Jb,shadowmap_pars_fragment:Qb,shadowmap_pars_vertex:eM,shadowmap_vertex:tM,shadowmask_pars_fragment:nM,skinbase_vertex:iM,skinning_pars_vertex:rM,skinning_vertex:sM,skinnormal_vertex:oM,specularmap_fragment:aM,specularmap_pars_fragment:lM,tonemapping_fragment:cM,tonemapping_pars_fragment:uM,transmission_fragment:dM,transmission_pars_fragment:fM,uv_pars_fragment:pM,uv_pars_vertex:hM,uv_vertex:mM,worldpos_vertex:gM,background_vert:vM,background_frag:xM,backgroundCube_vert:_M,backgroundCube_frag:yM,cube_vert:SM,cube_frag:bM,depth_vert:MM,depth_frag:wM,distance_vert:EM,distance_frag:TM,equirect_vert:CM,equirect_frag:AM,linedashed_vert:RM,linedashed_frag:PM,meshbasic_vert:IM,meshbasic_frag:LM,meshlambert_vert:DM,meshlambert_frag:NM,meshmatcap_vert:UM,meshmatcap_frag:kM,meshnormal_vert:FM,meshnormal_frag:OM,meshphong_vert:BM,meshphong_frag:zM,meshphysical_vert:$M,meshphysical_frag:VM,meshtoon_vert:HM,meshtoon_frag:GM,points_vert:WM,points_frag:jM,shadow_vert:XM,shadow_frag:YM,sprite_vert:qM,sprite_frag:KM},rt={common:{diffuse:{value:new on(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new pn(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new on(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new on(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new on(16777215)},opacity:{value:1},center:{value:new pn(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},fs={basic:{uniforms:Ri([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Ri([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new on(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Ri([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new on(0)},specular:{value:new on(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Ri([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new on(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Ri([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new on(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Ri([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Ri([rt.points,rt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Ri([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Ri([rt.common,rt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Ri([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Ri([rt.sprite,rt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:Ri([rt.common,rt.displacementmap,{referencePosition:{value:new ge},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:Ri([rt.lights,rt.fog,{color:{value:new on(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};fs.physical={uniforms:Ri([fs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new pn(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new on(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new pn},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new on(0)},specularColor:{value:new on(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new pn},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const Dd={r:0,b:0,g:0},Ma=new Ss,ZM=new In;function JM(n,e,t,r,o,a){const c=new on(0);let f=o===!0?0:1,h,u,p=null,_=0,x=null;function m(P){let N=P.isScene===!0?P.background:null;if(N&&N.isTexture){const k=P.backgroundBlurriness>0;N=e.get(N,k)}return N}function b(P){let N=!1;const k=m(P);k===null?g(c,f):k&&k.isColor&&(g(k,1),N=!0);const V=n.xr.getEnvironmentBlendMode();V==="additive"?t.buffers.color.setClear(0,0,0,1,a):V==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||N)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function E(P,N){const k=m(N);k&&(k.isCubeTexture||k.mapping===uf)?(u===void 0&&(u=new Xr(new qc(1,1,1),new ir({name:"BackgroundCubeMaterial",uniforms:Bl(fs.backgroundCube.uniforms),vertexShader:fs.backgroundCube.vertexShader,fragmentShader:fs.backgroundCube.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(V,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ma.copy(N.backgroundRotation),Ma.x*=-1,Ma.y*=-1,Ma.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(Ma.y*=-1,Ma.z*=-1),u.material.uniforms.envMap.value=k,u.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ZM.makeRotationFromEuler(Ma)),u.material.toneMapped=un.getTransfer(k.colorSpace)!==vn,(p!==k||_!==k.version||x!==n.toneMapping)&&(u.material.needsUpdate=!0,p=k,_=k.version,x=n.toneMapping),u.layers.enableAll(),P.unshift(u,u.geometry,u.material,0,0,null)):k&&k.isTexture&&(h===void 0&&(h=new Xr(new Xl(2,2),new ir({name:"BackgroundMaterial",uniforms:Bl(fs.background.uniforms),vertexShader:fs.background.vertexShader,fragmentShader:fs.background.fragmentShader,side:Xo,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=k,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.toneMapped=un.getTransfer(k.colorSpace)!==vn,k.matrixAutoUpdate===!0&&k.updateMatrix(),h.material.uniforms.uvTransform.value.copy(k.matrix),(p!==k||_!==k.version||x!==n.toneMapping)&&(h.material.needsUpdate=!0,p=k,_=k.version,x=n.toneMapping),h.layers.enableAll(),P.unshift(h,h.geometry,h.material,0,0,null))}function g(P,N){P.getRGB(Dd,t_(n)),t.buffers.color.setClear(Dd.r,Dd.g,Dd.b,N,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(P,N=1){c.set(P),f=N,g(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(P){f=P,g(c,f)},render:b,addToRenderList:E,dispose:y}}function QM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=x(null);let a=o,c=!1;function f(O,$,W,X,re){let ee=!1;const Z=_(O,X,W,$);a!==Z&&(a=Z,u(a.object)),ee=m(O,X,W,re),ee&&b(O,X,W,re),re!==null&&e.update(re,n.ELEMENT_ARRAY_BUFFER),(ee||c)&&(c=!1,k(O,$,W,X),re!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function h(){return n.createVertexArray()}function u(O){return n.bindVertexArray(O)}function p(O){return n.deleteVertexArray(O)}function _(O,$,W,X){const re=X.wireframe===!0;let ee=r[$.id];ee===void 0&&(ee={},r[$.id]=ee);const Z=O.isInstancedMesh===!0?O.id:0;let ie=ee[Z];ie===void 0&&(ie={},ee[Z]=ie);let q=ie[W.id];q===void 0&&(q={},ie[W.id]=q);let ae=q[re];return ae===void 0&&(ae=x(h()),q[re]=ae),ae}function x(O){const $=[],W=[],X=[];for(let re=0;re<t;re++)$[re]=0,W[re]=0,X[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:W,attributeDivisors:X,object:O,attributes:{},index:null}}function m(O,$,W,X){const re=a.attributes,ee=$.attributes;let Z=0;const ie=W.getAttributes();for(const q in ie)if(ie[q].location>=0){const z=re[q];let j=ee[q];if(j===void 0&&(q==="instanceMatrix"&&O.instanceMatrix&&(j=O.instanceMatrix),q==="instanceColor"&&O.instanceColor&&(j=O.instanceColor)),z===void 0||z.attribute!==j||j&&z.data!==j.data)return!0;Z++}return a.attributesNum!==Z||a.index!==X}function b(O,$,W,X){const re={},ee=$.attributes;let Z=0;const ie=W.getAttributes();for(const q in ie)if(ie[q].location>=0){let z=ee[q];z===void 0&&(q==="instanceMatrix"&&O.instanceMatrix&&(z=O.instanceMatrix),q==="instanceColor"&&O.instanceColor&&(z=O.instanceColor));const j={};j.attribute=z,z&&z.data&&(j.data=z.data),re[q]=j,Z++}a.attributes=re,a.attributesNum=Z,a.index=X}function E(){const O=a.newAttributes;for(let $=0,W=O.length;$<W;$++)O[$]=0}function g(O){y(O,0)}function y(O,$){const W=a.newAttributes,X=a.enabledAttributes,re=a.attributeDivisors;W[O]=1,X[O]===0&&(n.enableVertexAttribArray(O),X[O]=1),re[O]!==$&&(n.vertexAttribDivisor(O,$),re[O]=$)}function P(){const O=a.newAttributes,$=a.enabledAttributes;for(let W=0,X=$.length;W<X;W++)$[W]!==O[W]&&(n.disableVertexAttribArray(W),$[W]=0)}function N(O,$,W,X,re,ee,Z){Z===!0?n.vertexAttribIPointer(O,$,W,re,ee):n.vertexAttribPointer(O,$,W,X,re,ee)}function k(O,$,W,X){E();const re=X.attributes,ee=W.getAttributes(),Z=$.defaultAttributeValues;for(const ie in ee){const q=ee[ie];if(q.location>=0){let ae=re[ie];if(ae===void 0&&(ie==="instanceMatrix"&&O.instanceMatrix&&(ae=O.instanceMatrix),ie==="instanceColor"&&O.instanceColor&&(ae=O.instanceColor)),ae!==void 0){const z=ae.normalized,j=ae.itemSize,Pe=e.get(ae);if(Pe===void 0)continue;const qe=Pe.buffer,De=Pe.type,fe=Pe.bytesPerElement,xe=De===n.INT||De===n.UNSIGNED_INT||ae.gpuType===Im;if(ae.isInterleavedBufferAttribute){const Re=ae.data,Je=Re.stride,Ze=ae.offset;if(Re.isInstancedInterleavedBuffer){for(let vt=0;vt<q.locationSize;vt++)y(q.location+vt,Re.meshPerAttribute);O.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let vt=0;vt<q.locationSize;vt++)g(q.location+vt);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let vt=0;vt<q.locationSize;vt++)N(q.location+vt,j/q.locationSize,De,z,Je*fe,(Ze+j/q.locationSize*vt)*fe,xe)}else{if(ae.isInstancedBufferAttribute){for(let Re=0;Re<q.locationSize;Re++)y(q.location+Re,ae.meshPerAttribute);O.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Re=0;Re<q.locationSize;Re++)g(q.location+Re);n.bindBuffer(n.ARRAY_BUFFER,qe);for(let Re=0;Re<q.locationSize;Re++)N(q.location+Re,j/q.locationSize,De,z,j*fe,j/q.locationSize*Re*fe,xe)}}else if(Z!==void 0){const z=Z[ie];if(z!==void 0)switch(z.length){case 2:n.vertexAttrib2fv(q.location,z);break;case 3:n.vertexAttrib3fv(q.location,z);break;case 4:n.vertexAttrib4fv(q.location,z);break;default:n.vertexAttrib1fv(q.location,z)}}}}P()}function V(){C();for(const O in r){const $=r[O];for(const W in $){const X=$[W];for(const re in X){const ee=X[re];for(const Z in ee)p(ee[Z].object),delete ee[Z];delete X[re]}}delete r[O]}}function A(O){if(r[O.id]===void 0)return;const $=r[O.id];for(const W in $){const X=$[W];for(const re in X){const ee=X[re];for(const Z in ee)p(ee[Z].object),delete ee[Z];delete X[re]}}delete r[O.id]}function T(O){for(const $ in r){const W=r[$];for(const X in W){const re=W[X];if(re[O.id]===void 0)continue;const ee=re[O.id];for(const Z in ee)p(ee[Z].object),delete ee[Z];delete re[O.id]}}}function M(O){for(const $ in r){const W=r[$],X=O.isInstancedMesh===!0?O.id:0,re=W[X];if(re!==void 0){for(const ee in re){const Z=re[ee];for(const ie in Z)p(Z[ie].object),delete Z[ie];delete re[ee]}delete W[X],Object.keys(W).length===0&&delete r[$]}}}function C(){B(),c=!0,a!==o&&(a=o,u(a.object))}function B(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:C,resetDefaultState:B,dispose:V,releaseStatesOfGeometry:A,releaseStatesOfObject:M,releaseStatesOfProgram:T,initAttributes:E,enableAttribute:g,disableUnusedAttributes:P}}function ew(n,e,t){let r;function o(u){r=u}function a(u,p){n.drawArrays(r,u,p),t.update(p,r,1)}function c(u,p,_){_!==0&&(n.drawArraysInstanced(r,u,p,_),t.update(p,r,_))}function f(u,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,u,0,p,0,_);let m=0;for(let b=0;b<_;b++)m+=p[b];t.update(m,r,1)}function h(u,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let b=0;b<u.length;b++)c(u[b],p[b],x[b]);else{m.multiDrawArraysInstancedWEBGL(r,u,0,p,0,x,0,_);let b=0;for(let E=0;E<_;E++)b+=p[E]*x[E];t.update(b,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function tw(n,e,t,r){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(T){return!(T!==jr&&r.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(T){const M=T===Qs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==nr&&r.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==hs&&!M)}function h(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const p=h(u);p!==u&&(zt("WebGLRenderer:",u,"not supported, using",p,"instead."),u=p);const _=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),P=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),N=n.getParameter(n.MAX_VARYING_VECTORS),k=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),V=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:u,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:m,maxVertexTextures:b,maxTextureSize:E,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:P,maxVaryings:N,maxFragmentUniforms:k,maxSamples:V,samples:A}}function nw(n){const e=this;let t=null,r=0,o=!1,a=!1;const c=new Ta,f=new Yt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const m=_.length!==0||x||r!==0||o;return o=x,r=_.length,m},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,x){t=p(_,x,0)},this.setState=function(_,x,m){const b=_.clippingPlanes,E=_.clipIntersection,g=_.clipShadows,y=n.get(_);if(!o||b===null||b.length===0||a&&!g)a?p(null):u();else{const P=a?0:r,N=P*4;let k=y.clippingState||null;h.value=k,k=p(b,x,N,m);for(let V=0;V!==N;++V)k[V]=t[V];y.clippingState=k,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=P}};function u(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function p(_,x,m,b){const E=_!==null?_.length:0;let g=null;if(E!==0){if(g=h.value,b!==!0||g===null){const y=m+E*4,P=x.matrixWorldInverse;f.getNormalMatrix(P),(g===null||g.length<y)&&(g=new Float32Array(y));for(let N=0,k=m;N!==E;++N,k+=4)c.copy(_[N]).applyMatrix4(P,f),c.normal.toArray(g,k),g[k+3]=c.constant}h.value=g,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,g}}const Go=4,mv=[.125,.215,.35,.446,.526,.582],Ra=20,iw=256,Lc=new Kc,gv=new on;let dh=null,fh=0,ph=0,hh=!1;const rw=new ge;class vv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,a={}){const{size:c=256,position:f=rw}=a;dh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_v(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(dh,fh,ph),this._renderer.xr.enabled=hh,e.scissorTest=!1,El(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Na||e.mapping===kl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dh=this._renderer.getRenderTarget(),fh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:Qs,format:jr,colorSpace:Ol,depthBuffer:!1},o=xv(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xv(e,t,r);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=sw(a)),this._blurMaterial=aw(a,e,t),this._ggxMaterial=ow(a,e,t)}return o}_compileMaterial(e){const t=new Xr(new Hi,e);this._renderer.compile(t,Lc)}_sceneToCubeUV(e,t,r,o,a){const h=new Hr(90,1,t,r),u=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,m=_.toneMapping;_.getClearColor(gv),_.toneMapping=gs,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xr(new qc,new Yx({name:"PMREM.Background",side:Vi,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,g=E.material;let y=!1;const P=e.background;P?P.isColor&&(g.color.copy(P),e.background=null,y=!0):(g.color.copy(gv),y=!0);for(let N=0;N<6;N++){const k=N%3;k===0?(h.up.set(0,u[N],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x+p[N],a.y,a.z)):k===1?(h.up.set(0,0,u[N]),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y+p[N],a.z)):(h.up.set(0,u[N],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y,a.z+p[N]));const V=this._cubeSize;El(o,k*V,N>2?V:0,V,V),_.setRenderTarget(o),y&&_.render(E,h),_.render(e,h)}_.toneMapping=m,_.autoClear=x,e.background=P}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Na||e.mapping===kl;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=yv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_v());const a=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const f=a.uniforms;f.envMap.value=e;const h=this._cubeSize;El(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(c,Lc)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let a=1;a<o;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,u=r/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),_=Math.sqrt(u*u-p*p),x=0+u*1.25,m=_*x,{_lodMax:b}=this,E=this._sizeLods[r],g=3*E*(r>b-Go?r-b+Go:0),y=4*(this._cubeSize-E);h.envMap.value=e.texture,h.roughness.value=m,h.mipInt.value=b-t,El(a,g,y,3*E,2*E),o.setRenderTarget(a),o.render(f,Lc),h.envMap.value=a.texture,h.roughness.value=0,h.mipInt.value=b-r,El(e,g,y,3*E,2*E),o.setRenderTarget(e),o.render(f,Lc)}_blur(e,t,r,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",a),this._halfBlur(c,e,r,r,o,"longitudinal",a)}_halfBlur(e,t,r,o,a,c,f){const h=this._renderer,u=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&fn("blur direction must be either latitudinal or longitudinal!");const p=3,_=this._lodMeshes[o];_.material=u;const x=u.uniforms,m=this._sizeLods[r]-1,b=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Ra-1),E=a/b,g=isFinite(a)?1+Math.floor(p*E):Ra;g>Ra&&zt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ra}`);const y=[];let P=0;for(let T=0;T<Ra;++T){const M=T/E,C=Math.exp(-M*M/2);y.push(C),T===0?P+=C:T<g&&(P+=2*C)}for(let T=0;T<y.length;T++)y[T]=y[T]/P;x.envMap.value=e.texture,x.samples.value=g,x.weights.value=y,x.latitudinal.value=c==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:N}=this;x.dTheta.value=b,x.mipInt.value=N-r;const k=this._sizeLods[o],V=3*k*(o>N-Go?o-N+Go:0),A=4*(this._cubeSize-k);El(t,V,A,3*k,2*k),h.setRenderTarget(t),h.render(_,Lc)}}function sw(n){const e=[],t=[],r=[];let o=n;const a=n-Go+1+mv.length;for(let c=0;c<a;c++){const f=Math.pow(2,o);e.push(f);let h=1/f;c>n-Go?h=mv[c-n+Go-1]:c===0&&(h=0),t.push(h);const u=1/(f-2),p=-u,_=1+u,x=[p,p,_,p,_,_,p,p,_,_,p,_],m=6,b=6,E=3,g=2,y=1,P=new Float32Array(E*b*m),N=new Float32Array(g*b*m),k=new Float32Array(y*b*m);for(let A=0;A<m;A++){const T=A%3*2/3-1,M=A>2?0:-1,C=[T,M,0,T+2/3,M,0,T+2/3,M+1,0,T,M,0,T+2/3,M+1,0,T,M+1,0];P.set(C,E*b*A),N.set(x,g*b*A);const B=[A,A,A,A,A,A];k.set(B,y*b*A)}const V=new Hi;V.setAttribute("position",new xs(P,E)),V.setAttribute("uv",new xs(N,g)),V.setAttribute("faceIndex",new xs(k,y)),r.push(new Xr(V,null)),o>Go&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function xv(n,e,t){const r=new vs(n,e,t);return r.texture.mapping=uf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function El(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function ow(n,e,t){return new ir({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:iw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ff(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Zs,depthTest:!1,depthWrite:!1})}function aw(n,e,t){const r=new Float32Array(Ra),o=new ge(0,1,0);return new ir({name:"SphericalGaussianBlur",defines:{n:Ra,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zs,depthTest:!1,depthWrite:!1})}function _v(){return new ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zs,depthTest:!1,depthWrite:!1})}function yv(){return new ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ff(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zs,depthTest:!1,depthWrite:!1})}function ff(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class s_ extends vs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Zx(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new qc(5,5,5),a=new ir({name:"CubemapFromEquirect",uniforms:Bl(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vi,blending:Zs});a.uniforms.tEquirect.value=t;const c=new Xr(o,a),f=t.minFilter;return t.minFilter===Ho&&(t.minFilter=Yn),new hS(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(a)}}function lw(n){let e=new WeakMap,t=new WeakMap,r=null;function o(x,m=!1){return x==null?null:m?c(x):a(x)}function a(x){if(x&&x.isTexture){const m=x.mapping;if(m===Fp||m===Op)if(e.has(x)){const b=e.get(x).texture;return f(b,x.mapping)}else{const b=x.image;if(b&&b.height>0){const E=new s_(b.height);return E.fromEquirectangularTexture(n,x),e.set(x,E),x.addEventListener("dispose",u),f(E.texture,x.mapping)}else return null}}return x}function c(x){if(x&&x.isTexture){const m=x.mapping,b=m===Fp||m===Op,E=m===Na||m===kl;if(b||E){let g=t.get(x);const y=g!==void 0?g.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==y)return r===null&&(r=new vv(n)),g=b?r.fromEquirectangular(x,g):r.fromCubemap(x,g),g.texture.pmremVersion=x.pmremVersion,t.set(x,g),g.texture;if(g!==void 0)return g.texture;{const P=x.image;return b&&P&&P.height>0||E&&P&&h(P)?(r===null&&(r=new vv(n)),g=b?r.fromEquirectangular(x):r.fromCubemap(x),g.texture.pmremVersion=x.pmremVersion,t.set(x,g),x.addEventListener("dispose",p),g.texture):null}}}return x}function f(x,m){return m===Fp?x.mapping=Na:m===Op&&(x.mapping=kl),x}function h(x){let m=0;const b=6;for(let E=0;E<b;E++)x[E]!==void 0&&m++;return m===b}function u(x){const m=x.target;m.removeEventListener("dispose",u);const b=e.get(m);b!==void 0&&(e.delete(m),b.dispose())}function p(x){const m=x.target;m.removeEventListener("dispose",p);const b=t.get(m);b!==void 0&&(t.delete(m),b.dispose())}function _(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function cw(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=n.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&nf("WebGLRenderer: "+r+" extension not supported."),o}}}function uw(n,e,t,r){const o={},a=new WeakMap;function c(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);x.removeEventListener("dispose",c),delete o[x.id];const m=a.get(x);m&&(e.remove(m),a.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function f(_,x){return o[x.id]===!0||(x.addEventListener("dispose",c),o[x.id]=!0,t.memory.geometries++),x}function h(_){const x=_.attributes;for(const m in x)e.update(x[m],n.ARRAY_BUFFER)}function u(_){const x=[],m=_.index,b=_.attributes.position;let E=0;if(b===void 0)return;if(m!==null){const P=m.array;E=m.version;for(let N=0,k=P.length;N<k;N+=3){const V=P[N+0],A=P[N+1],T=P[N+2];x.push(V,A,A,T,T,V)}}else{const P=b.array;E=b.version;for(let N=0,k=P.length/3-1;N<k;N+=3){const V=N+0,A=N+1,T=N+2;x.push(V,A,A,T,T,V)}}const g=new(b.count>=65535?jx:Wx)(x,1);g.version=E;const y=a.get(_);y&&e.remove(y),a.set(_,g)}function p(_){const x=a.get(_);if(x){const m=_.index;m!==null&&x.version<m.version&&u(_)}else u(_);return a.get(_)}return{get:f,update:h,getWireframeAttribute:p}}function dw(n,e,t){let r;function o(x){r=x}let a,c;function f(x){a=x.type,c=x.bytesPerElement}function h(x,m){n.drawElements(r,m,a,x*c),t.update(m,r,1)}function u(x,m,b){b!==0&&(n.drawElementsInstanced(r,m,a,x*c,b),t.update(m,r,b))}function p(x,m,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,m,0,a,x,0,b);let g=0;for(let y=0;y<b;y++)g+=m[y];t.update(g,r,1)}function _(x,m,b,E){if(b===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<x.length;y++)u(x[y]/c,m[y],E[y]);else{g.multiDrawElementsInstancedWEBGL(r,m,0,a,x,0,E,0,b);let y=0;for(let P=0;P<b;P++)y+=m[P]*E[P];t.update(y,r,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=u,this.renderMultiDraw=p,this.renderMultiDrawInstances=_}function fw(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,c,f){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=f*(a/3);break;case n.LINES:t.lines+=f*(a/2);break;case n.LINE_STRIP:t.lines+=f*(a-1);break;case n.LINE_LOOP:t.lines+=f*a;break;case n.POINTS:t.points+=f*a;break;default:fn("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function pw(n,e,t){const r=new WeakMap,o=new Dn;function a(c,f,h){const u=c.morphTargetInfluences,p=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=p!==void 0?p.length:0;let x=r.get(f);if(x===void 0||x.count!==_){let C=function(){T.dispose(),r.delete(f),f.removeEventListener("dispose",C)};x!==void 0&&x.texture.dispose();const m=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,E=f.morphAttributes.color!==void 0,g=f.morphAttributes.position||[],y=f.morphAttributes.normal||[],P=f.morphAttributes.color||[];let N=0;m===!0&&(N=1),b===!0&&(N=2),E===!0&&(N=3);let k=f.attributes.position.count*N,V=1;k>e.maxTextureSize&&(V=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const A=new Float32Array(k*V*4*_),T=new $x(A,k,V,_);T.type=hs,T.needsUpdate=!0;const M=N*4;for(let B=0;B<_;B++){const O=g[B],$=y[B],W=P[B],X=k*V*4*B;for(let re=0;re<O.count;re++){const ee=re*M;m===!0&&(o.fromBufferAttribute(O,re),A[X+ee+0]=o.x,A[X+ee+1]=o.y,A[X+ee+2]=o.z,A[X+ee+3]=0),b===!0&&(o.fromBufferAttribute($,re),A[X+ee+4]=o.x,A[X+ee+5]=o.y,A[X+ee+6]=o.z,A[X+ee+7]=0),E===!0&&(o.fromBufferAttribute(W,re),A[X+ee+8]=o.x,A[X+ee+9]=o.y,A[X+ee+10]=o.z,A[X+ee+11]=W.itemSize===4?o.w:1)}}x={count:_,texture:T,size:new pn(k,V)},r.set(f,x),f.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let m=0;for(let E=0;E<u.length;E++)m+=u[E];const b=f.morphTargetsRelative?1:1-m;h.getUniforms().setValue(n,"morphTargetBaseInfluence",b),h.getUniforms().setValue(n,"morphTargetInfluences",u)}h.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}return{update:a}}function hw(n,e,t,r,o){let a=new WeakMap;function c(u){const p=o.render.frame,_=u.geometry,x=e.get(u,_);if(a.get(x)!==p&&(e.update(x),a.set(x,p)),u.isInstancedMesh&&(u.hasEventListener("dispose",h)===!1&&u.addEventListener("dispose",h),a.get(u)!==p&&(t.update(u.instanceMatrix,n.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,n.ARRAY_BUFFER),a.set(u,p))),u.isSkinnedMesh){const m=u.skeleton;a.get(m)!==p&&(m.update(),a.set(m,p))}return x}function f(){a=new WeakMap}function h(u){const p=u.target;p.removeEventListener("dispose",h),r.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:c,dispose:f}}const mw={[wx]:"LINEAR_TONE_MAPPING",[Ex]:"REINHARD_TONE_MAPPING",[Tx]:"CINEON_TONE_MAPPING",[Cx]:"ACES_FILMIC_TONE_MAPPING",[Rx]:"AGX_TONE_MAPPING",[Px]:"NEUTRAL_TONE_MAPPING",[Ax]:"CUSTOM_TONE_MAPPING"};function gw(n,e,t,r,o){const a=new vs(e,t,{type:n,depthBuffer:r,stencilBuffer:o}),c=new vs(e,t,{type:Qs,depthBuffer:!1,stencilBuffer:!1}),f=new Hi;f.setAttribute("position",new Gn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Gn([0,2,0,0,2,0],2));const h=new sS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Xr(f,h),p=new Kc(-1,1,1,-1,0,1);let _=null,x=null,m=!1,b,E=null,g=[],y=!1;this.setSize=function(P,N){a.setSize(P,N),c.setSize(P,N);for(let k=0;k<g.length;k++){const V=g[k];V.setSize&&V.setSize(P,N)}},this.setEffects=function(P){g=P,y=g.length>0&&g[0].isRenderPass===!0;const N=a.width,k=a.height;for(let V=0;V<g.length;V++){const A=g[V];A.setSize&&A.setSize(N,k)}},this.begin=function(P,N){if(m||P.toneMapping===gs&&g.length===0)return!1;if(E=N,N!==null){const k=N.width,V=N.height;(a.width!==k||a.height!==V)&&this.setSize(k,V)}return y===!1&&P.setRenderTarget(a),b=P.toneMapping,P.toneMapping=gs,!0},this.hasRenderPass=function(){return y},this.end=function(P,N){P.toneMapping=b,m=!0;let k=a,V=c;for(let A=0;A<g.length;A++){const T=g[A];if(T.enabled!==!1&&(T.render(P,V,k,N),T.needsSwap!==!1)){const M=k;k=V,V=M}}if(_!==P.outputColorSpace||x!==P.toneMapping){_=P.outputColorSpace,x=P.toneMapping,h.defines={},un.getTransfer(_)===vn&&(h.defines.SRGB_TRANSFER="");const A=mw[x];A&&(h.defines[A]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=k.texture,P.setRenderTarget(E),P.render(u,p),E=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),c.dispose(),f.dispose(),h.dispose()}}const o_=new yi,Sm=new Gc(1,1),a_=new $x,l_=new D1,c_=new Zx,Sv=[],bv=[],Mv=new Float32Array(16),wv=new Float32Array(9),Ev=new Float32Array(4);function Yl(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let a=Sv[o];if(a===void 0&&(a=new Float32Array(o),Sv[o]=a),e!==0){r.toArray(a,0);for(let c=1,f=0;c!==e;++c)f+=t,n[c].toArray(a,f)}return a}function qn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function Kn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function pf(n,e){let t=bv[e];t===void 0&&(t=new Int32Array(e),bv[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function vw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function xw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qn(t,e))return;n.uniform2fv(this.addr,e),Kn(t,e)}}function _w(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qn(t,e))return;n.uniform3fv(this.addr,e),Kn(t,e)}}function yw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qn(t,e))return;n.uniform4fv(this.addr,e),Kn(t,e)}}function Sw(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(qn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Kn(t,e)}else{if(qn(t,r))return;Ev.set(r),n.uniformMatrix2fv(this.addr,!1,Ev),Kn(t,r)}}function bw(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(qn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Kn(t,e)}else{if(qn(t,r))return;wv.set(r),n.uniformMatrix3fv(this.addr,!1,wv),Kn(t,r)}}function Mw(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(qn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Kn(t,e)}else{if(qn(t,r))return;Mv.set(r),n.uniformMatrix4fv(this.addr,!1,Mv),Kn(t,r)}}function ww(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Ew(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qn(t,e))return;n.uniform2iv(this.addr,e),Kn(t,e)}}function Tw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qn(t,e))return;n.uniform3iv(this.addr,e),Kn(t,e)}}function Cw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qn(t,e))return;n.uniform4iv(this.addr,e),Kn(t,e)}}function Aw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Rw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qn(t,e))return;n.uniform2uiv(this.addr,e),Kn(t,e)}}function Pw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qn(t,e))return;n.uniform3uiv(this.addr,e),Kn(t,e)}}function Iw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qn(t,e))return;n.uniform4uiv(this.addr,e),Kn(t,e)}}function Lw(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let a;this.type===n.SAMPLER_2D_SHADOW?(Sm.compareFunction=t.isReversedDepthBuffer()?Om:Fm,a=Sm):a=o_,t.setTexture2D(e||a,o)}function Dw(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||l_,o)}function Nw(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||c_,o)}function Uw(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||a_,o)}function kw(n){switch(n){case 5126:return vw;case 35664:return xw;case 35665:return _w;case 35666:return yw;case 35674:return Sw;case 35675:return bw;case 35676:return Mw;case 5124:case 35670:return ww;case 35667:case 35671:return Ew;case 35668:case 35672:return Tw;case 35669:case 35673:return Cw;case 5125:return Aw;case 36294:return Rw;case 36295:return Pw;case 36296:return Iw;case 35678:case 36198:case 36298:case 36306:case 35682:return Lw;case 35679:case 36299:case 36307:return Dw;case 35680:case 36300:case 36308:case 36293:return Nw;case 36289:case 36303:case 36311:case 36292:return Uw}}function Fw(n,e){n.uniform1fv(this.addr,e)}function Ow(n,e){const t=Yl(e,this.size,2);n.uniform2fv(this.addr,t)}function Bw(n,e){const t=Yl(e,this.size,3);n.uniform3fv(this.addr,t)}function zw(n,e){const t=Yl(e,this.size,4);n.uniform4fv(this.addr,t)}function $w(n,e){const t=Yl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Vw(n,e){const t=Yl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Hw(n,e){const t=Yl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Gw(n,e){n.uniform1iv(this.addr,e)}function Ww(n,e){n.uniform2iv(this.addr,e)}function jw(n,e){n.uniform3iv(this.addr,e)}function Xw(n,e){n.uniform4iv(this.addr,e)}function Yw(n,e){n.uniform1uiv(this.addr,e)}function qw(n,e){n.uniform2uiv(this.addr,e)}function Kw(n,e){n.uniform3uiv(this.addr,e)}function Zw(n,e){n.uniform4uiv(this.addr,e)}function Jw(n,e,t){const r=this.cache,o=e.length,a=pf(t,o);qn(r,a)||(n.uniform1iv(this.addr,a),Kn(r,a));let c;this.type===n.SAMPLER_2D_SHADOW?c=Sm:c=o_;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||c,a[f])}function Qw(n,e,t){const r=this.cache,o=e.length,a=pf(t,o);qn(r,a)||(n.uniform1iv(this.addr,a),Kn(r,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||l_,a[c])}function e2(n,e,t){const r=this.cache,o=e.length,a=pf(t,o);qn(r,a)||(n.uniform1iv(this.addr,a),Kn(r,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||c_,a[c])}function t2(n,e,t){const r=this.cache,o=e.length,a=pf(t,o);qn(r,a)||(n.uniform1iv(this.addr,a),Kn(r,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||a_,a[c])}function n2(n){switch(n){case 5126:return Fw;case 35664:return Ow;case 35665:return Bw;case 35666:return zw;case 35674:return $w;case 35675:return Vw;case 35676:return Hw;case 5124:case 35670:return Gw;case 35667:case 35671:return Ww;case 35668:case 35672:return jw;case 35669:case 35673:return Xw;case 5125:return Yw;case 36294:return qw;case 36295:return Kw;case 36296:return Zw;case 35678:case 36198:case 36298:case 36306:case 35682:return Jw;case 35679:case 36299:case 36307:return Qw;case 35680:case 36300:case 36308:case 36293:return e2;case 36289:case 36303:case 36311:case 36292:return t2}}class i2{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=kw(t.type)}}class r2{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=n2(t.type)}}class s2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const f=o[a];f.setValue(e,t[f.id],r)}}}const mh=/(\w+)(\])?(\[|\.)?/g;function Tv(n,e){n.seq.push(e),n.map[e.id]=e}function o2(n,e,t){const r=n.name,o=r.length;for(mh.lastIndex=0;;){const a=mh.exec(r),c=mh.lastIndex;let f=a[1];const h=a[2]==="]",u=a[3];if(h&&(f=f|0),u===void 0||u==="["&&c+2===o){Tv(t,u===void 0?new i2(f,n,e):new r2(f,n,e));break}else{let _=t.map[f];_===void 0&&(_=new s2(f),Tv(t,_)),t=_}}}class Kd{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const f=e.getActiveUniform(t,c),h=e.getUniformLocation(t,f.name);o2(f,h,this)}const o=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):a.push(c);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,r,o){const a=this.map[t];a!==void 0&&a.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let a=0,c=t.length;a!==c;++a){const f=t[a],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function Cv(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const a2=37297;let l2=0;function c2(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const Av=new Yt;function u2(n){un._getMatrix(Av,un.workingColorSpace,n);const e=`mat3( ${Av.elements.map(t=>t.toFixed(4))} )`;switch(un.getTransfer(n)){case ef:return[e,"LinearTransferOETF"];case vn:return[e,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Rv(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+c2(n.getShaderSource(e),f)}else return a}function d2(n,e){const t=u2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const f2={[wx]:"Linear",[Ex]:"Reinhard",[Tx]:"Cineon",[Cx]:"ACESFilmic",[Rx]:"AgX",[Px]:"Neutral",[Ax]:"Custom"};function p2(n,e){const t=f2[e];return t===void 0?(zt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Nd=new ge;function h2(){un.getLuminanceCoefficients(Nd);const n=Nd.x.toFixed(4),e=Nd.y.toFixed(4),t=Nd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kc).join(`
`)}function g2(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function v2(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const a=n.getActiveAttrib(e,o),c=a.name;let f=1;a.type===n.FLOAT_MAT2&&(f=2),a.type===n.FLOAT_MAT3&&(f=3),a.type===n.FLOAT_MAT4&&(f=4),t[c]={type:a.type,location:n.getAttribLocation(e,c),locationSize:f}}return t}function kc(n){return n!==""}function Pv(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Iv(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const x2=/^[ \t]*#include +<([\w\d./]+)>/gm;function bm(n){return n.replace(x2,y2)}const _2=new Map;function y2(n,e){let t=Jt[e];if(t===void 0){const r=_2.get(e);if(r!==void 0)t=Jt[r],zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return bm(t)}const S2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lv(n){return n.replace(S2,b2)}function b2(n,e,t,r){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function Dv(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const M2={[Wd]:"SHADOWMAP_TYPE_PCF",[Uc]:"SHADOWMAP_TYPE_VSM"};function w2(n){return M2[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const E2={[Na]:"ENVMAP_TYPE_CUBE",[kl]:"ENVMAP_TYPE_CUBE",[uf]:"ENVMAP_TYPE_CUBE_UV"};function T2(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":E2[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const C2={[kl]:"ENVMAP_MODE_REFRACTION"};function A2(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":C2[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const R2={[Mx]:"ENVMAP_BLENDING_MULTIPLY",[Zy]:"ENVMAP_BLENDING_MIX",[Jy]:"ENVMAP_BLENDING_ADD"};function P2(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":R2[n.combine]||"ENVMAP_BLENDING_NONE"}function I2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function L2(n,e,t,r){const o=n.getContext(),a=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=w2(t),u=T2(t),p=A2(t),_=P2(t),x=I2(t),m=m2(t),b=g2(a),E=o.createProgram();let g,y,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(kc).join(`
`),g.length>0&&(g+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(kc).join(`
`),y.length>0&&(y+=`
`)):(g=[Dv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kc).join(`
`),y=[Dv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+p:"",t.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gs?"#define TONE_MAPPING":"",t.toneMapping!==gs?Jt.tonemapping_pars_fragment:"",t.toneMapping!==gs?p2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,d2("linearToOutputTexel",t.outputColorSpace),h2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(kc).join(`
`)),c=bm(c),c=Pv(c,t),c=Iv(c,t),f=bm(f),f=Pv(f,t),f=Iv(f,t),c=Lv(c),f=Lv(f),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,y=["#define varying in",t.glslVersion===zg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const N=P+g+c,k=P+y+f,V=Cv(o,o.VERTEX_SHADER,N),A=Cv(o,o.FRAGMENT_SHADER,k);o.attachShader(E,V),o.attachShader(E,A),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function T(O){if(n.debug.checkShaderErrors){const $=o.getProgramInfoLog(E)||"",W=o.getShaderInfoLog(V)||"",X=o.getShaderInfoLog(A)||"",re=$.trim(),ee=W.trim(),Z=X.trim();let ie=!0,q=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,E,V,A);else{const ae=Rv(o,V,"vertex"),z=Rv(o,A,"fragment");fn("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+re+`
`+ae+`
`+z)}else re!==""?zt("WebGLProgram: Program Info Log:",re):(ee===""||Z==="")&&(q=!1);q&&(O.diagnostics={runnable:ie,programLog:re,vertexShader:{log:ee,prefix:g},fragmentShader:{log:Z,prefix:y}})}o.deleteShader(V),o.deleteShader(A),M=new Kd(o,E),C=v2(o,E)}let M;this.getUniforms=function(){return M===void 0&&T(this),M};let C;this.getAttributes=function(){return C===void 0&&T(this),C};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=o.getProgramParameter(E,a2)),B},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=l2++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=V,this.fragmentShader=A,this}let D2=0;class N2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new U2(e),t.set(e,r)),r}}class U2{constructor(e){this.id=D2++,this.code=e,this.usedTimes=0}}function k2(n,e,t,r,o,a){const c=new Vx,f=new N2,h=new Set,u=[],p=new Map,_=r.logarithmicDepthBuffer;let x=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(M){return h.add(M),M===0?"uv":`uv${M}`}function E(M,C,B,O,$){const W=O.fog,X=$.geometry,re=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?O.environment:null,ee=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,Z=e.get(M.envMap||re,ee),ie=Z&&Z.mapping===uf?Z.image.height:null,q=m[M.type];M.precision!==null&&(x=r.getMaxPrecision(M.precision),x!==M.precision&&zt("WebGLProgram.getParameters:",M.precision,"not supported, using",x,"instead."));const ae=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,z=ae!==void 0?ae.length:0;let j=0;X.morphAttributes.position!==void 0&&(j=1),X.morphAttributes.normal!==void 0&&(j=2),X.morphAttributes.color!==void 0&&(j=3);let Pe,qe,De,fe;if(q){const Kt=fs[q];Pe=Kt.vertexShader,qe=Kt.fragmentShader}else Pe=M.vertexShader,qe=M.fragmentShader,f.update(M),De=f.getVertexShaderID(M),fe=f.getFragmentShaderID(M);const xe=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),Je=$.isInstancedMesh===!0,Ze=$.isBatchedMesh===!0,vt=!!M.map,Qt=!!M.matcap,$t=!!Z,Bt=!!M.aoMap,Ot=!!M.lightMap,Vt=!!M.bumpMap,Xt=!!M.normalMap,J=!!M.displacementMap,Gt=!!M.emissiveMap,Lt=!!M.metalnessMap,qt=!!M.roughnessMap,lt=M.anisotropy>0,H=M.clearcoat>0,R=M.dispersion>0,le=M.iridescence>0,Ce=M.sheen>0,Ne=M.transmission>0,Te=lt&&!!M.anisotropyMap,st=H&&!!M.clearcoatMap,We=H&&!!M.clearcoatNormalMap,ct=H&&!!M.clearcoatRoughnessMap,pt=le&&!!M.iridescenceMap,Ue=le&&!!M.iridescenceThicknessMap,Fe=Ce&&!!M.sheenColorMap,gt=Ce&&!!M.sheenRoughnessMap,it=!!M.specularMap,et=!!M.specularColorMap,Ct=!!M.specularIntensityMap,ne=Ne&&!!M.transmissionMap,Ge=Ne&&!!M.thicknessMap,Oe=!!M.gradientMap,tt=!!M.alphaMap,ke=M.alphaTest>0,Ee=!!M.alphaHash,ot=!!M.extensions;let Nt=gs;M.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Nt=n.toneMapping);const nn={shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:Pe,fragmentShader:qe,defines:M.defines,customVertexShaderID:De,customFragmentShaderID:fe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:x,batching:Ze,batchingColor:Ze&&$._colorsTexture!==null,instancing:Je,instancingColor:Je&&$.instanceColor!==null,instancingMorph:Je&&$.morphTexture!==null,outputColorSpace:xe===null?n.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Ol,alphaToCoverage:!!M.alphaToCoverage,map:vt,matcap:Qt,envMap:$t,envMapMode:$t&&Z.mapping,envMapCubeUVHeight:ie,aoMap:Bt,lightMap:Ot,bumpMap:Vt,normalMap:Xt,displacementMap:J,emissiveMap:Gt,normalMapObjectSpace:Xt&&M.normalMapType===t1,normalMapTangentSpace:Xt&&M.normalMapType===Bx,metalnessMap:Lt,roughnessMap:qt,anisotropy:lt,anisotropyMap:Te,clearcoat:H,clearcoatMap:st,clearcoatNormalMap:We,clearcoatRoughnessMap:ct,dispersion:R,iridescence:le,iridescenceMap:pt,iridescenceThicknessMap:Ue,sheen:Ce,sheenColorMap:Fe,sheenRoughnessMap:gt,specularMap:it,specularColorMap:et,specularIntensityMap:Ct,transmission:Ne,transmissionMap:ne,thicknessMap:Ge,gradientMap:Oe,opaque:M.transparent===!1&&M.blending===Ll&&M.alphaToCoverage===!1,alphaMap:tt,alphaTest:ke,alphaHash:Ee,combine:M.combine,mapUv:vt&&b(M.map.channel),aoMapUv:Bt&&b(M.aoMap.channel),lightMapUv:Ot&&b(M.lightMap.channel),bumpMapUv:Vt&&b(M.bumpMap.channel),normalMapUv:Xt&&b(M.normalMap.channel),displacementMapUv:J&&b(M.displacementMap.channel),emissiveMapUv:Gt&&b(M.emissiveMap.channel),metalnessMapUv:Lt&&b(M.metalnessMap.channel),roughnessMapUv:qt&&b(M.roughnessMap.channel),anisotropyMapUv:Te&&b(M.anisotropyMap.channel),clearcoatMapUv:st&&b(M.clearcoatMap.channel),clearcoatNormalMapUv:We&&b(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&b(M.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&b(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&b(M.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&b(M.sheenColorMap.channel),sheenRoughnessMapUv:gt&&b(M.sheenRoughnessMap.channel),specularMapUv:it&&b(M.specularMap.channel),specularColorMapUv:et&&b(M.specularColorMap.channel),specularIntensityMapUv:Ct&&b(M.specularIntensityMap.channel),transmissionMapUv:ne&&b(M.transmissionMap.channel),thicknessMapUv:Ge&&b(M.thicknessMap.channel),alphaMapUv:tt&&b(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Xt||lt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!X.attributes.uv&&(vt||tt),fog:!!W,useFog:M.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||X.attributes.normal===void 0&&Xt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Re,skinning:$.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:j,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:Nt,decodeVideoTexture:vt&&M.map.isVideoTexture===!0&&un.getTransfer(M.map.colorSpace)===vn,decodeVideoTextureEmissive:Gt&&M.emissiveMap.isVideoTexture===!0&&un.getTransfer(M.emissiveMap.colorSpace)===vn,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Xs,flipSided:M.side===Vi,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ot&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&M.extensions.multiDraw===!0||Ze)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return nn.vertexUv1s=h.has(1),nn.vertexUv2s=h.has(2),nn.vertexUv3s=h.has(3),h.clear(),nn}function g(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const B in M.defines)C.push(B),C.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(y(C,M),P(C,M),C.push(n.outputColorSpace)),C.push(M.customProgramCacheKey),C.join()}function y(M,C){M.push(C.precision),M.push(C.outputColorSpace),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.mapUv),M.push(C.alphaMapUv),M.push(C.lightMapUv),M.push(C.aoMapUv),M.push(C.bumpMapUv),M.push(C.normalMapUv),M.push(C.displacementMapUv),M.push(C.emissiveMapUv),M.push(C.metalnessMapUv),M.push(C.roughnessMapUv),M.push(C.anisotropyMapUv),M.push(C.clearcoatMapUv),M.push(C.clearcoatNormalMapUv),M.push(C.clearcoatRoughnessMapUv),M.push(C.iridescenceMapUv),M.push(C.iridescenceThicknessMapUv),M.push(C.sheenColorMapUv),M.push(C.sheenRoughnessMapUv),M.push(C.specularMapUv),M.push(C.specularColorMapUv),M.push(C.specularIntensityMapUv),M.push(C.transmissionMapUv),M.push(C.thicknessMapUv),M.push(C.combine),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.numLightProbes),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function P(M,C){c.disableAll(),C.instancing&&c.enable(0),C.instancingColor&&c.enable(1),C.instancingMorph&&c.enable(2),C.matcap&&c.enable(3),C.envMap&&c.enable(4),C.normalMapObjectSpace&&c.enable(5),C.normalMapTangentSpace&&c.enable(6),C.clearcoat&&c.enable(7),C.iridescence&&c.enable(8),C.alphaTest&&c.enable(9),C.vertexColors&&c.enable(10),C.vertexAlphas&&c.enable(11),C.vertexUv1s&&c.enable(12),C.vertexUv2s&&c.enable(13),C.vertexUv3s&&c.enable(14),C.vertexTangents&&c.enable(15),C.anisotropy&&c.enable(16),C.alphaHash&&c.enable(17),C.batching&&c.enable(18),C.dispersion&&c.enable(19),C.batchingColor&&c.enable(20),C.gradientMap&&c.enable(21),M.push(c.mask),c.disableAll(),C.fog&&c.enable(0),C.useFog&&c.enable(1),C.flatShading&&c.enable(2),C.logarithmicDepthBuffer&&c.enable(3),C.reversedDepthBuffer&&c.enable(4),C.skinning&&c.enable(5),C.morphTargets&&c.enable(6),C.morphNormals&&c.enable(7),C.morphColors&&c.enable(8),C.premultipliedAlpha&&c.enable(9),C.shadowMapEnabled&&c.enable(10),C.doubleSided&&c.enable(11),C.flipSided&&c.enable(12),C.useDepthPacking&&c.enable(13),C.dithering&&c.enable(14),C.transmission&&c.enable(15),C.sheen&&c.enable(16),C.opaque&&c.enable(17),C.pointsUvs&&c.enable(18),C.decodeVideoTexture&&c.enable(19),C.decodeVideoTextureEmissive&&c.enable(20),C.alphaToCoverage&&c.enable(21),M.push(c.mask)}function N(M){const C=m[M.type];let B;if(C){const O=fs[C];B=nS.clone(O.uniforms)}else B=M.uniforms;return B}function k(M,C){let B=p.get(C);return B!==void 0?++B.usedTimes:(B=new L2(n,C,M,o),u.push(B),p.set(C,B)),B}function V(M){if(--M.usedTimes===0){const C=u.indexOf(M);u[C]=u[u.length-1],u.pop(),p.delete(M.cacheKey),M.destroy()}}function A(M){f.remove(M)}function T(){f.dispose()}return{getParameters:E,getProgramCacheKey:g,getUniforms:N,acquireProgram:k,releaseProgram:V,releaseShaderCache:A,programs:u,dispose:T}}function F2(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let f=n.get(c);return f===void 0&&(f={},n.set(c,f)),f}function r(c){n.delete(c)}function o(c,f,h){n.get(c)[f]=h}function a(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:a}}function O2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Nv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Uv(){const n=[];let e=0;const t=[],r=[],o=[];function a(){e=0,t.length=0,r.length=0,o.length=0}function c(x){let m=0;return x.isInstancedMesh&&(m+=2),x.isSkinnedMesh&&(m+=1),m}function f(x,m,b,E,g,y){let P=n[e];return P===void 0?(P={id:x.id,object:x,geometry:m,material:b,materialVariant:c(x),groupOrder:E,renderOrder:x.renderOrder,z:g,group:y},n[e]=P):(P.id=x.id,P.object=x,P.geometry=m,P.material=b,P.materialVariant=c(x),P.groupOrder=E,P.renderOrder=x.renderOrder,P.z=g,P.group=y),e++,P}function h(x,m,b,E,g,y){const P=f(x,m,b,E,g,y);b.transmission>0?r.push(P):b.transparent===!0?o.push(P):t.push(P)}function u(x,m,b,E,g,y){const P=f(x,m,b,E,g,y);b.transmission>0?r.unshift(P):b.transparent===!0?o.unshift(P):t.unshift(P)}function p(x,m){t.length>1&&t.sort(x||O2),r.length>1&&r.sort(m||Nv),o.length>1&&o.sort(m||Nv)}function _(){for(let x=e,m=n.length;x<m;x++){const b=n[x];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:r,transparent:o,init:a,push:h,unshift:u,finish:_,sort:p}}function B2(){let n=new WeakMap;function e(r,o){const a=n.get(r);let c;return a===void 0?(c=new Uv,n.set(r,[c])):o>=a.length?(c=new Uv,a.push(c)):c=a[o],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function z2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ge,color:new on};break;case"SpotLight":t={position:new ge,direction:new ge,color:new on,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ge,color:new on,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ge,skyColor:new on,groundColor:new on};break;case"RectAreaLight":t={color:new on,position:new ge,halfWidth:new ge,halfHeight:new ge};break}return n[e.id]=t,t}}}function $2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pn};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pn};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pn,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let V2=0;function H2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function G2(n){const e=new z2,t=$2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new ge);const o=new ge,a=new In,c=new In;function f(u){let p=0,_=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let m=0,b=0,E=0,g=0,y=0,P=0,N=0,k=0,V=0,A=0,T=0;u.sort(H2);for(let C=0,B=u.length;C<B;C++){const O=u[C],$=O.color,W=O.intensity,X=O.distance;let re=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Fl?re=O.shadow.map.texture:re=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)p+=$.r*W,_+=$.g*W,x+=$.b*W;else if(O.isLightProbe){for(let ee=0;ee<9;ee++)r.probe[ee].addScaledVector(O.sh.coefficients[ee],W);T++}else if(O.isDirectionalLight){const ee=e.get(O);if(ee.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const Z=O.shadow,ie=t.get(O);ie.shadowIntensity=Z.intensity,ie.shadowBias=Z.bias,ie.shadowNormalBias=Z.normalBias,ie.shadowRadius=Z.radius,ie.shadowMapSize=Z.mapSize,r.directionalShadow[m]=ie,r.directionalShadowMap[m]=re,r.directionalShadowMatrix[m]=O.shadow.matrix,P++}r.directional[m]=ee,m++}else if(O.isSpotLight){const ee=e.get(O);ee.position.setFromMatrixPosition(O.matrixWorld),ee.color.copy($).multiplyScalar(W),ee.distance=X,ee.coneCos=Math.cos(O.angle),ee.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ee.decay=O.decay,r.spot[E]=ee;const Z=O.shadow;if(O.map&&(r.spotLightMap[V]=O.map,V++,Z.updateMatrices(O),O.castShadow&&A++),r.spotLightMatrix[E]=Z.matrix,O.castShadow){const ie=t.get(O);ie.shadowIntensity=Z.intensity,ie.shadowBias=Z.bias,ie.shadowNormalBias=Z.normalBias,ie.shadowRadius=Z.radius,ie.shadowMapSize=Z.mapSize,r.spotShadow[E]=ie,r.spotShadowMap[E]=re,k++}E++}else if(O.isRectAreaLight){const ee=e.get(O);ee.color.copy($).multiplyScalar(W),ee.halfWidth.set(O.width*.5,0,0),ee.halfHeight.set(0,O.height*.5,0),r.rectArea[g]=ee,g++}else if(O.isPointLight){const ee=e.get(O);if(ee.color.copy(O.color).multiplyScalar(O.intensity),ee.distance=O.distance,ee.decay=O.decay,O.castShadow){const Z=O.shadow,ie=t.get(O);ie.shadowIntensity=Z.intensity,ie.shadowBias=Z.bias,ie.shadowNormalBias=Z.normalBias,ie.shadowRadius=Z.radius,ie.shadowMapSize=Z.mapSize,ie.shadowCameraNear=Z.camera.near,ie.shadowCameraFar=Z.camera.far,r.pointShadow[b]=ie,r.pointShadowMap[b]=re,r.pointShadowMatrix[b]=O.shadow.matrix,N++}r.point[b]=ee,b++}else if(O.isHemisphereLight){const ee=e.get(O);ee.skyColor.copy(O.color).multiplyScalar(W),ee.groundColor.copy(O.groundColor).multiplyScalar(W),r.hemi[y]=ee,y++}}g>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=rt.LTC_FLOAT_1,r.rectAreaLTC2=rt.LTC_FLOAT_2):(r.rectAreaLTC1=rt.LTC_HALF_1,r.rectAreaLTC2=rt.LTC_HALF_2)),r.ambient[0]=p,r.ambient[1]=_,r.ambient[2]=x;const M=r.hash;(M.directionalLength!==m||M.pointLength!==b||M.spotLength!==E||M.rectAreaLength!==g||M.hemiLength!==y||M.numDirectionalShadows!==P||M.numPointShadows!==N||M.numSpotShadows!==k||M.numSpotMaps!==V||M.numLightProbes!==T)&&(r.directional.length=m,r.spot.length=E,r.rectArea.length=g,r.point.length=b,r.hemi.length=y,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=k,r.spotShadowMap.length=k,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=k+V-A,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=A,r.numLightProbes=T,M.directionalLength=m,M.pointLength=b,M.spotLength=E,M.rectAreaLength=g,M.hemiLength=y,M.numDirectionalShadows=P,M.numPointShadows=N,M.numSpotShadows=k,M.numSpotMaps=V,M.numLightProbes=T,r.version=V2++)}function h(u,p){let _=0,x=0,m=0,b=0,E=0;const g=p.matrixWorldInverse;for(let y=0,P=u.length;y<P;y++){const N=u[y];if(N.isDirectionalLight){const k=r.directional[_];k.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),k.direction.sub(o),k.direction.transformDirection(g),_++}else if(N.isSpotLight){const k=r.spot[m];k.position.setFromMatrixPosition(N.matrixWorld),k.position.applyMatrix4(g),k.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),k.direction.sub(o),k.direction.transformDirection(g),m++}else if(N.isRectAreaLight){const k=r.rectArea[b];k.position.setFromMatrixPosition(N.matrixWorld),k.position.applyMatrix4(g),c.identity(),a.copy(N.matrixWorld),a.premultiply(g),c.extractRotation(a),k.halfWidth.set(N.width*.5,0,0),k.halfHeight.set(0,N.height*.5,0),k.halfWidth.applyMatrix4(c),k.halfHeight.applyMatrix4(c),b++}else if(N.isPointLight){const k=r.point[x];k.position.setFromMatrixPosition(N.matrixWorld),k.position.applyMatrix4(g),x++}else if(N.isHemisphereLight){const k=r.hemi[E];k.direction.setFromMatrixPosition(N.matrixWorld),k.direction.transformDirection(g),E++}}}return{setup:f,setupView:h,state:r}}function kv(n){const e=new G2(n),t=[],r=[];function o(p){u.camera=p,t.length=0,r.length=0}function a(p){t.push(p)}function c(p){r.push(p)}function f(){e.setup(t)}function h(p){e.setupView(t,p)}const u={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:u,setupLights:f,setupLightsView:h,pushLight:a,pushShadow:c}}function W2(n){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let f;return c===void 0?(f=new kv(n),e.set(o,[f])):a>=c.length?(f=new kv(n),c.push(f)):f=c[a],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const j2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Y2=[new ge(1,0,0),new ge(-1,0,0),new ge(0,1,0),new ge(0,-1,0),new ge(0,0,1),new ge(0,0,-1)],q2=[new ge(0,-1,0),new ge(0,-1,0),new ge(0,0,1),new ge(0,0,-1),new ge(0,-1,0),new ge(0,-1,0)],Fv=new In,Dc=new ge,gh=new ge;function K2(n,e,t){let r=new $m;const o=new pn,a=new pn,c=new Dn,f=new oS,h=new aS,u={},p=t.maxTextureSize,_={[Xo]:Vi,[Vi]:Xo,[Xs]:Xs},x=new ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pn},radius:{value:4}},vertexShader:j2,fragmentShader:X2}),m=x.clone();m.defines.HORIZONTAL_PASS=1;const b=new Hi;b.setAttribute("position",new xs(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Xr(b,x),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wd;let y=this.type;this.render=function(A,T,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===Ly&&(zt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Wd);const C=n.getRenderTarget(),B=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),$=n.state;$.setBlending(Zs),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const W=y!==this.type;W&&T.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(re=>re.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,re=A.length;X<re;X++){const ee=A[X],Z=ee.shadow;if(Z===void 0){zt("WebGLShadowMap:",ee,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;o.copy(Z.mapSize);const ie=Z.getFrameExtents();o.multiply(ie),a.copy(Z.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/ie.x),o.x=a.x*ie.x,Z.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/ie.y),o.y=a.y*ie.y,Z.mapSize.y=a.y));const q=n.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=q,Z.map===null||W===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Uc){if(ee.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new vs(o.x,o.y,{format:Fl,type:Qs,minFilter:Yn,magFilter:Yn,generateMipmaps:!1}),Z.map.texture.name=ee.name+".shadowMap",Z.map.depthTexture=new Gc(o.x,o.y,hs),Z.map.depthTexture.name=ee.name+".shadowMapDepth",Z.map.depthTexture.format=eo,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=di,Z.map.depthTexture.magFilter=di}else ee.isPointLight?(Z.map=new s_(o.x),Z.map.depthTexture=new eS(o.x,ys)):(Z.map=new vs(o.x,o.y),Z.map.depthTexture=new Gc(o.x,o.y,ys)),Z.map.depthTexture.name=ee.name+".shadowMap",Z.map.depthTexture.format=eo,this.type===Wd?(Z.map.depthTexture.compareFunction=q?Om:Fm,Z.map.depthTexture.minFilter=Yn,Z.map.depthTexture.magFilter=Yn):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=di,Z.map.depthTexture.magFilter=di);Z.camera.updateProjectionMatrix()}const ae=Z.map.isWebGLCubeRenderTarget?6:1;for(let z=0;z<ae;z++){if(Z.map.isWebGLCubeRenderTarget)n.setRenderTarget(Z.map,z),n.clear();else{z===0&&(n.setRenderTarget(Z.map),n.clear());const j=Z.getViewport(z);c.set(a.x*j.x,a.y*j.y,a.x*j.z,a.y*j.w),$.viewport(c)}if(ee.isPointLight){const j=Z.camera,Pe=Z.matrix,qe=ee.distance||j.far;qe!==j.far&&(j.far=qe,j.updateProjectionMatrix()),Dc.setFromMatrixPosition(ee.matrixWorld),j.position.copy(Dc),gh.copy(j.position),gh.add(Y2[z]),j.up.copy(q2[z]),j.lookAt(gh),j.updateMatrixWorld(),Pe.makeTranslation(-Dc.x,-Dc.y,-Dc.z),Fv.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(Fv,j.coordinateSystem,j.reversedDepth)}else Z.updateMatrices(ee);r=Z.getFrustum(),k(T,M,Z.camera,ee,this.type)}Z.isPointLightShadow!==!0&&this.type===Uc&&P(Z,M),Z.needsUpdate=!1}y=this.type,g.needsUpdate=!1,n.setRenderTarget(C,B,O)};function P(A,T){const M=e.update(E);x.defines.VSM_SAMPLES!==A.blurSamples&&(x.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,x.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new vs(o.x,o.y,{format:Fl,type:Qs})),x.uniforms.shadow_pass.value=A.map.depthTexture,x.uniforms.resolution.value=A.mapSize,x.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,M,x,E,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,M,m,E,null)}function N(A,T,M,C){let B=null;const O=M.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(O!==void 0)B=O;else if(B=M.isPointLight===!0?h:f,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const $=B.uuid,W=T.uuid;let X=u[$];X===void 0&&(X={},u[$]=X);let re=X[W];re===void 0&&(re=B.clone(),X[W]=re,T.addEventListener("dispose",V)),B=re}if(B.visible=T.visible,B.wireframe=T.wireframe,C===Uc?B.side=T.shadowSide!==null?T.shadowSide:T.side:B.side=T.shadowSide!==null?T.shadowSide:_[T.side],B.alphaMap=T.alphaMap,B.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,B.map=T.map,B.clipShadows=T.clipShadows,B.clippingPlanes=T.clippingPlanes,B.clipIntersection=T.clipIntersection,B.displacementMap=T.displacementMap,B.displacementScale=T.displacementScale,B.displacementBias=T.displacementBias,B.wireframeLinewidth=T.wireframeLinewidth,B.linewidth=T.linewidth,M.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const $=n.properties.get(B);$.light=M}return B}function k(A,T,M,C,B){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&B===Uc)&&(!A.frustumCulled||r.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,A.matrixWorld);const W=e.update(A),X=A.material;if(Array.isArray(X)){const re=W.groups;for(let ee=0,Z=re.length;ee<Z;ee++){const ie=re[ee],q=X[ie.materialIndex];if(q&&q.visible){const ae=N(A,q,C,B);A.onBeforeShadow(n,A,T,M,W,ae,ie),n.renderBufferDirect(M,null,W,ae,A,ie),A.onAfterShadow(n,A,T,M,W,ae,ie)}}}else if(X.visible){const re=N(A,X,C,B);A.onBeforeShadow(n,A,T,M,W,re,null),n.renderBufferDirect(M,null,W,re,A,null),A.onAfterShadow(n,A,T,M,W,re,null)}}const $=A.children;for(let W=0,X=$.length;W<X;W++)k($[W],T,M,C,B)}function V(A){A.target.removeEventListener("dispose",V);for(const M in u){const C=u[M],B=A.target.uuid;B in C&&(C[B].dispose(),delete C[B])}}}function Z2(n,e){function t(){let ne=!1;const Ge=new Dn;let Oe=null;const tt=new Dn(0,0,0,0);return{setMask:function(ke){Oe!==ke&&!ne&&(n.colorMask(ke,ke,ke,ke),Oe=ke)},setLocked:function(ke){ne=ke},setClear:function(ke,Ee,ot,Nt,nn){nn===!0&&(ke*=Nt,Ee*=Nt,ot*=Nt),Ge.set(ke,Ee,ot,Nt),tt.equals(Ge)===!1&&(n.clearColor(ke,Ee,ot,Nt),tt.copy(Ge))},reset:function(){ne=!1,Oe=null,tt.set(-1,0,0,0)}}}function r(){let ne=!1,Ge=!1,Oe=null,tt=null,ke=null;return{setReversed:function(Ee){if(Ge!==Ee){const ot=e.get("EXT_clip_control");Ee?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT),Ge=Ee;const Nt=ke;ke=null,this.setClear(Nt)}},getReversed:function(){return Ge},setTest:function(Ee){Ee?xe(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(Ee){Oe!==Ee&&!ne&&(n.depthMask(Ee),Oe=Ee)},setFunc:function(Ee){if(Ge&&(Ee=d1[Ee]),tt!==Ee){switch(Ee){case Nh:n.depthFunc(n.NEVER);break;case Uh:n.depthFunc(n.ALWAYS);break;case kh:n.depthFunc(n.LESS);break;case Ul:n.depthFunc(n.LEQUAL);break;case Fh:n.depthFunc(n.EQUAL);break;case Oh:n.depthFunc(n.GEQUAL);break;case Bh:n.depthFunc(n.GREATER);break;case zh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}tt=Ee}},setLocked:function(Ee){ne=Ee},setClear:function(Ee){ke!==Ee&&(ke=Ee,Ge&&(Ee=1-Ee),n.clearDepth(Ee))},reset:function(){ne=!1,Oe=null,tt=null,ke=null,Ge=!1}}}function o(){let ne=!1,Ge=null,Oe=null,tt=null,ke=null,Ee=null,ot=null,Nt=null,nn=null;return{setTest:function(Kt){ne||(Kt?xe(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(Kt){Ge!==Kt&&!ne&&(n.stencilMask(Kt),Ge=Kt)},setFunc:function(Kt,Zn,xn){(Oe!==Kt||tt!==Zn||ke!==xn)&&(n.stencilFunc(Kt,Zn,xn),Oe=Kt,tt=Zn,ke=xn)},setOp:function(Kt,Zn,xn){(Ee!==Kt||ot!==Zn||Nt!==xn)&&(n.stencilOp(Kt,Zn,xn),Ee=Kt,ot=Zn,Nt=xn)},setLocked:function(Kt){ne=Kt},setClear:function(Kt){nn!==Kt&&(n.clearStencil(Kt),nn=Kt)},reset:function(){ne=!1,Ge=null,Oe=null,tt=null,ke=null,Ee=null,ot=null,Nt=null,nn=null}}}const a=new t,c=new r,f=new o,h=new WeakMap,u=new WeakMap;let p={},_={},x=new WeakMap,m=[],b=null,E=!1,g=null,y=null,P=null,N=null,k=null,V=null,A=null,T=new on(0,0,0),M=0,C=!1,B=null,O=null,$=null,W=null,X=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,Z=0;const ie=n.getParameter(n.VERSION);ie.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(ie)[1]),ee=Z>=1):ie.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),ee=Z>=2);let q=null,ae={};const z=n.getParameter(n.SCISSOR_BOX),j=n.getParameter(n.VIEWPORT),Pe=new Dn().fromArray(z),qe=new Dn().fromArray(j);function De(ne,Ge,Oe,tt){const ke=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(ne,Ee),n.texParameteri(ne,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(ne,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ot=0;ot<Oe;ot++)ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?n.texImage3D(Ge,0,n.RGBA,1,1,tt,0,n.RGBA,n.UNSIGNED_BYTE,ke):n.texImage2D(Ge+ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ke);return Ee}const fe={};fe[n.TEXTURE_2D]=De(n.TEXTURE_2D,n.TEXTURE_2D,1),fe[n.TEXTURE_CUBE_MAP]=De(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[n.TEXTURE_2D_ARRAY]=De(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),fe[n.TEXTURE_3D]=De(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),f.setClear(0),xe(n.DEPTH_TEST),c.setFunc(Ul),Vt(!1),Xt(Ng),xe(n.CULL_FACE),Bt(Zs);function xe(ne){p[ne]!==!0&&(n.enable(ne),p[ne]=!0)}function Re(ne){p[ne]!==!1&&(n.disable(ne),p[ne]=!1)}function Je(ne,Ge){return _[ne]!==Ge?(n.bindFramebuffer(ne,Ge),_[ne]=Ge,ne===n.DRAW_FRAMEBUFFER&&(_[n.FRAMEBUFFER]=Ge),ne===n.FRAMEBUFFER&&(_[n.DRAW_FRAMEBUFFER]=Ge),!0):!1}function Ze(ne,Ge){let Oe=m,tt=!1;if(ne){Oe=x.get(Ge),Oe===void 0&&(Oe=[],x.set(Ge,Oe));const ke=ne.textures;if(Oe.length!==ke.length||Oe[0]!==n.COLOR_ATTACHMENT0){for(let Ee=0,ot=ke.length;Ee<ot;Ee++)Oe[Ee]=n.COLOR_ATTACHMENT0+Ee;Oe.length=ke.length,tt=!0}}else Oe[0]!==n.BACK&&(Oe[0]=n.BACK,tt=!0);tt&&n.drawBuffers(Oe)}function vt(ne){return b!==ne?(n.useProgram(ne),b=ne,!0):!1}const Qt={[Aa]:n.FUNC_ADD,[Ny]:n.FUNC_SUBTRACT,[Uy]:n.FUNC_REVERSE_SUBTRACT};Qt[ky]=n.MIN,Qt[Fy]=n.MAX;const $t={[Oy]:n.ZERO,[By]:n.ONE,[zy]:n.SRC_COLOR,[Lh]:n.SRC_ALPHA,[jy]:n.SRC_ALPHA_SATURATE,[Gy]:n.DST_COLOR,[Vy]:n.DST_ALPHA,[$y]:n.ONE_MINUS_SRC_COLOR,[Dh]:n.ONE_MINUS_SRC_ALPHA,[Wy]:n.ONE_MINUS_DST_COLOR,[Hy]:n.ONE_MINUS_DST_ALPHA,[Xy]:n.CONSTANT_COLOR,[Yy]:n.ONE_MINUS_CONSTANT_COLOR,[qy]:n.CONSTANT_ALPHA,[Ky]:n.ONE_MINUS_CONSTANT_ALPHA};function Bt(ne,Ge,Oe,tt,ke,Ee,ot,Nt,nn,Kt){if(ne===Zs){E===!0&&(Re(n.BLEND),E=!1);return}if(E===!1&&(xe(n.BLEND),E=!0),ne!==Dy){if(ne!==g||Kt!==C){if((y!==Aa||k!==Aa)&&(n.blendEquation(n.FUNC_ADD),y=Aa,k=Aa),Kt)switch(ne){case Ll:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ug:n.blendFunc(n.ONE,n.ONE);break;case kg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fg:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:fn("WebGLState: Invalid blending: ",ne);break}else switch(ne){case Ll:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ug:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case kg:fn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fg:fn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:fn("WebGLState: Invalid blending: ",ne);break}P=null,N=null,V=null,A=null,T.set(0,0,0),M=0,g=ne,C=Kt}return}ke=ke||Ge,Ee=Ee||Oe,ot=ot||tt,(Ge!==y||ke!==k)&&(n.blendEquationSeparate(Qt[Ge],Qt[ke]),y=Ge,k=ke),(Oe!==P||tt!==N||Ee!==V||ot!==A)&&(n.blendFuncSeparate($t[Oe],$t[tt],$t[Ee],$t[ot]),P=Oe,N=tt,V=Ee,A=ot),(Nt.equals(T)===!1||nn!==M)&&(n.blendColor(Nt.r,Nt.g,Nt.b,nn),T.copy(Nt),M=nn),g=ne,C=!1}function Ot(ne,Ge){ne.side===Xs?Re(n.CULL_FACE):xe(n.CULL_FACE);let Oe=ne.side===Vi;Ge&&(Oe=!Oe),Vt(Oe),ne.blending===Ll&&ne.transparent===!1?Bt(Zs):Bt(ne.blending,ne.blendEquation,ne.blendSrc,ne.blendDst,ne.blendEquationAlpha,ne.blendSrcAlpha,ne.blendDstAlpha,ne.blendColor,ne.blendAlpha,ne.premultipliedAlpha),c.setFunc(ne.depthFunc),c.setTest(ne.depthTest),c.setMask(ne.depthWrite),a.setMask(ne.colorWrite);const tt=ne.stencilWrite;f.setTest(tt),tt&&(f.setMask(ne.stencilWriteMask),f.setFunc(ne.stencilFunc,ne.stencilRef,ne.stencilFuncMask),f.setOp(ne.stencilFail,ne.stencilZFail,ne.stencilZPass)),Gt(ne.polygonOffset,ne.polygonOffsetFactor,ne.polygonOffsetUnits),ne.alphaToCoverage===!0?xe(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(ne){B!==ne&&(ne?n.frontFace(n.CW):n.frontFace(n.CCW),B=ne)}function Xt(ne){ne!==Py?(xe(n.CULL_FACE),ne!==O&&(ne===Ng?n.cullFace(n.BACK):ne===Iy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),O=ne}function J(ne){ne!==$&&(ee&&n.lineWidth(ne),$=ne)}function Gt(ne,Ge,Oe){ne?(xe(n.POLYGON_OFFSET_FILL),(W!==Ge||X!==Oe)&&(W=Ge,X=Oe,c.getReversed()&&(Ge=-Ge),n.polygonOffset(Ge,Oe))):Re(n.POLYGON_OFFSET_FILL)}function Lt(ne){ne?xe(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function qt(ne){ne===void 0&&(ne=n.TEXTURE0+re-1),q!==ne&&(n.activeTexture(ne),q=ne)}function lt(ne,Ge,Oe){Oe===void 0&&(q===null?Oe=n.TEXTURE0+re-1:Oe=q);let tt=ae[Oe];tt===void 0&&(tt={type:void 0,texture:void 0},ae[Oe]=tt),(tt.type!==ne||tt.texture!==Ge)&&(q!==Oe&&(n.activeTexture(Oe),q=Oe),n.bindTexture(ne,Ge||fe[ne]),tt.type=ne,tt.texture=Ge)}function H(){const ne=ae[q];ne!==void 0&&ne.type!==void 0&&(n.bindTexture(ne.type,null),ne.type=void 0,ne.texture=void 0)}function R(){try{n.compressedTexImage2D(...arguments)}catch(ne){fn("WebGLState:",ne)}}function le(){try{n.compressedTexImage3D(...arguments)}catch(ne){fn("WebGLState:",ne)}}function Ce(){try{n.texSubImage2D(...arguments)}catch(ne){fn("WebGLState:",ne)}}function Ne(){try{n.texSubImage3D(...arguments)}catch(ne){fn("WebGLState:",ne)}}function Te(){try{n.compressedTexSubImage2D(...arguments)}catch(ne){fn("WebGLState:",ne)}}function st(){try{n.compressedTexSubImage3D(...arguments)}catch(ne){fn("WebGLState:",ne)}}function We(){try{n.texStorage2D(...arguments)}catch(ne){fn("WebGLState:",ne)}}function ct(){try{n.texStorage3D(...arguments)}catch(ne){fn("WebGLState:",ne)}}function pt(){try{n.texImage2D(...arguments)}catch(ne){fn("WebGLState:",ne)}}function Ue(){try{n.texImage3D(...arguments)}catch(ne){fn("WebGLState:",ne)}}function Fe(ne){Pe.equals(ne)===!1&&(n.scissor(ne.x,ne.y,ne.z,ne.w),Pe.copy(ne))}function gt(ne){qe.equals(ne)===!1&&(n.viewport(ne.x,ne.y,ne.z,ne.w),qe.copy(ne))}function it(ne,Ge){let Oe=u.get(Ge);Oe===void 0&&(Oe=new WeakMap,u.set(Ge,Oe));let tt=Oe.get(ne);tt===void 0&&(tt=n.getUniformBlockIndex(Ge,ne.name),Oe.set(ne,tt))}function et(ne,Ge){const tt=u.get(Ge).get(ne);h.get(Ge)!==tt&&(n.uniformBlockBinding(Ge,tt,ne.__bindingPointIndex),h.set(Ge,tt))}function Ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},q=null,ae={},_={},x=new WeakMap,m=[],b=null,E=!1,g=null,y=null,P=null,N=null,k=null,V=null,A=null,T=new on(0,0,0),M=0,C=!1,B=null,O=null,$=null,W=null,X=null,Pe.set(0,0,n.canvas.width,n.canvas.height),qe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),f.reset()}return{buffers:{color:a,depth:c,stencil:f},enable:xe,disable:Re,bindFramebuffer:Je,drawBuffers:Ze,useProgram:vt,setBlending:Bt,setMaterial:Ot,setFlipSided:Vt,setCullFace:Xt,setLineWidth:J,setPolygonOffset:Gt,setScissorTest:Lt,activeTexture:qt,bindTexture:lt,unbindTexture:H,compressedTexImage2D:R,compressedTexImage3D:le,texImage2D:pt,texImage3D:Ue,updateUBOMapping:it,uniformBlockBinding:et,texStorage2D:We,texStorage3D:ct,texSubImage2D:Ce,texSubImage3D:Ne,compressedTexSubImage2D:Te,compressedTexSubImage3D:st,scissor:Fe,viewport:gt,reset:Ct}}function J2(n,e,t,r,o,a,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new pn,p=new WeakMap;let _;const x=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(H,R){return m?new OffscreenCanvas(H,R):tf("canvas")}function E(H,R,le){let Ce=1;const Ne=lt(H);if((Ne.width>le||Ne.height>le)&&(Ce=le/Math.max(Ne.width,Ne.height)),Ce<1)if(typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&H instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&H instanceof ImageBitmap||typeof VideoFrame<"u"&&H instanceof VideoFrame){const Te=Math.floor(Ce*Ne.width),st=Math.floor(Ce*Ne.height);_===void 0&&(_=b(Te,st));const We=R?b(Te,st):_;return We.width=Te,We.height=st,We.getContext("2d").drawImage(H,0,0,Te,st),zt("WebGLRenderer: Texture has been resized from ("+Ne.width+"x"+Ne.height+") to ("+Te+"x"+st+")."),We}else return"data"in H&&zt("WebGLRenderer: Image in DataTexture is too big ("+Ne.width+"x"+Ne.height+")."),H;return H}function g(H){return H.generateMipmaps}function y(H){n.generateMipmap(H)}function P(H){return H.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:H.isWebGL3DRenderTarget?n.TEXTURE_3D:H.isWebGLArrayRenderTarget||H.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function N(H,R,le,Ce,Ne=!1){if(H!==null){if(n[H]!==void 0)return n[H];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+H+"'")}let Te=R;if(R===n.RED&&(le===n.FLOAT&&(Te=n.R32F),le===n.HALF_FLOAT&&(Te=n.R16F),le===n.UNSIGNED_BYTE&&(Te=n.R8)),R===n.RED_INTEGER&&(le===n.UNSIGNED_BYTE&&(Te=n.R8UI),le===n.UNSIGNED_SHORT&&(Te=n.R16UI),le===n.UNSIGNED_INT&&(Te=n.R32UI),le===n.BYTE&&(Te=n.R8I),le===n.SHORT&&(Te=n.R16I),le===n.INT&&(Te=n.R32I)),R===n.RG&&(le===n.FLOAT&&(Te=n.RG32F),le===n.HALF_FLOAT&&(Te=n.RG16F),le===n.UNSIGNED_BYTE&&(Te=n.RG8)),R===n.RG_INTEGER&&(le===n.UNSIGNED_BYTE&&(Te=n.RG8UI),le===n.UNSIGNED_SHORT&&(Te=n.RG16UI),le===n.UNSIGNED_INT&&(Te=n.RG32UI),le===n.BYTE&&(Te=n.RG8I),le===n.SHORT&&(Te=n.RG16I),le===n.INT&&(Te=n.RG32I)),R===n.RGB_INTEGER&&(le===n.UNSIGNED_BYTE&&(Te=n.RGB8UI),le===n.UNSIGNED_SHORT&&(Te=n.RGB16UI),le===n.UNSIGNED_INT&&(Te=n.RGB32UI),le===n.BYTE&&(Te=n.RGB8I),le===n.SHORT&&(Te=n.RGB16I),le===n.INT&&(Te=n.RGB32I)),R===n.RGBA_INTEGER&&(le===n.UNSIGNED_BYTE&&(Te=n.RGBA8UI),le===n.UNSIGNED_SHORT&&(Te=n.RGBA16UI),le===n.UNSIGNED_INT&&(Te=n.RGBA32UI),le===n.BYTE&&(Te=n.RGBA8I),le===n.SHORT&&(Te=n.RGBA16I),le===n.INT&&(Te=n.RGBA32I)),R===n.RGB&&(le===n.UNSIGNED_INT_5_9_9_9_REV&&(Te=n.RGB9_E5),le===n.UNSIGNED_INT_10F_11F_11F_REV&&(Te=n.R11F_G11F_B10F)),R===n.RGBA){const st=Ne?ef:un.getTransfer(Ce);le===n.FLOAT&&(Te=n.RGBA32F),le===n.HALF_FLOAT&&(Te=n.RGBA16F),le===n.UNSIGNED_BYTE&&(Te=st===vn?n.SRGB8_ALPHA8:n.RGBA8),le===n.UNSIGNED_SHORT_4_4_4_4&&(Te=n.RGBA4),le===n.UNSIGNED_SHORT_5_5_5_1&&(Te=n.RGB5_A1)}return(Te===n.R16F||Te===n.R32F||Te===n.RG16F||Te===n.RG32F||Te===n.RGBA16F||Te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Te}function k(H,R){let le;return H?R===null||R===ys||R===$c?le=n.DEPTH24_STENCIL8:R===hs?le=n.DEPTH32F_STENCIL8:R===zc&&(le=n.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===ys||R===$c?le=n.DEPTH_COMPONENT24:R===hs?le=n.DEPTH_COMPONENT32F:R===zc&&(le=n.DEPTH_COMPONENT16),le}function V(H,R){return g(H)===!0||H.isFramebufferTexture&&H.minFilter!==di&&H.minFilter!==Yn?Math.log2(Math.max(R.width,R.height))+1:H.mipmaps!==void 0&&H.mipmaps.length>0?H.mipmaps.length:H.isCompressedTexture&&Array.isArray(H.image)?R.mipmaps.length:1}function A(H){const R=H.target;R.removeEventListener("dispose",A),M(R),R.isVideoTexture&&p.delete(R)}function T(H){const R=H.target;R.removeEventListener("dispose",T),B(R)}function M(H){const R=r.get(H);if(R.__webglInit===void 0)return;const le=H.source,Ce=x.get(le);if(Ce){const Ne=Ce[R.__cacheKey];Ne.usedTimes--,Ne.usedTimes===0&&C(H),Object.keys(Ce).length===0&&x.delete(le)}r.remove(H)}function C(H){const R=r.get(H);n.deleteTexture(R.__webglTexture);const le=H.source,Ce=x.get(le);delete Ce[R.__cacheKey],c.memory.textures--}function B(H){const R=r.get(H);if(H.depthTexture&&(H.depthTexture.dispose(),r.remove(H.depthTexture)),H.isWebGLCubeRenderTarget)for(let Ce=0;Ce<6;Ce++){if(Array.isArray(R.__webglFramebuffer[Ce]))for(let Ne=0;Ne<R.__webglFramebuffer[Ce].length;Ne++)n.deleteFramebuffer(R.__webglFramebuffer[Ce][Ne]);else n.deleteFramebuffer(R.__webglFramebuffer[Ce]);R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[Ce])}else{if(Array.isArray(R.__webglFramebuffer))for(let Ce=0;Ce<R.__webglFramebuffer.length;Ce++)n.deleteFramebuffer(R.__webglFramebuffer[Ce]);else n.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let Ce=0;Ce<R.__webglColorRenderbuffer.length;Ce++)R.__webglColorRenderbuffer[Ce]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[Ce]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const le=H.textures;for(let Ce=0,Ne=le.length;Ce<Ne;Ce++){const Te=r.get(le[Ce]);Te.__webglTexture&&(n.deleteTexture(Te.__webglTexture),c.memory.textures--),r.remove(le[Ce])}r.remove(H)}let O=0;function $(){O=0}function W(){const H=O;return H>=o.maxTextures&&zt("WebGLTextures: Trying to use "+H+" texture units while this GPU supports only "+o.maxTextures),O+=1,H}function X(H){const R=[];return R.push(H.wrapS),R.push(H.wrapT),R.push(H.wrapR||0),R.push(H.magFilter),R.push(H.minFilter),R.push(H.anisotropy),R.push(H.internalFormat),R.push(H.format),R.push(H.type),R.push(H.generateMipmaps),R.push(H.premultiplyAlpha),R.push(H.flipY),R.push(H.unpackAlignment),R.push(H.colorSpace),R.join()}function re(H,R){const le=r.get(H);if(H.isVideoTexture&&Lt(H),H.isRenderTargetTexture===!1&&H.isExternalTexture!==!0&&H.version>0&&le.__version!==H.version){const Ce=H.image;if(Ce===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(Ce.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{fe(le,H,R);return}}else H.isExternalTexture&&(le.__webglTexture=H.sourceTexture?H.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,le.__webglTexture,n.TEXTURE0+R)}function ee(H,R){const le=r.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&le.__version!==H.version){fe(le,H,R);return}else H.isExternalTexture&&(le.__webglTexture=H.sourceTexture?H.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,le.__webglTexture,n.TEXTURE0+R)}function Z(H,R){const le=r.get(H);if(H.isRenderTargetTexture===!1&&H.version>0&&le.__version!==H.version){fe(le,H,R);return}t.bindTexture(n.TEXTURE_3D,le.__webglTexture,n.TEXTURE0+R)}function ie(H,R){const le=r.get(H);if(H.isCubeDepthTexture!==!0&&H.version>0&&le.__version!==H.version){xe(le,H,R);return}t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture,n.TEXTURE0+R)}const q={[$h]:n.REPEAT,[Wr]:n.CLAMP_TO_EDGE,[Vh]:n.MIRRORED_REPEAT},ae={[di]:n.NEAREST,[Qy]:n.NEAREST_MIPMAP_NEAREST,[ad]:n.NEAREST_MIPMAP_LINEAR,[Yn]:n.LINEAR,[Bp]:n.LINEAR_MIPMAP_NEAREST,[Ho]:n.LINEAR_MIPMAP_LINEAR},z={[n1]:n.NEVER,[a1]:n.ALWAYS,[i1]:n.LESS,[Fm]:n.LEQUAL,[r1]:n.EQUAL,[Om]:n.GEQUAL,[s1]:n.GREATER,[o1]:n.NOTEQUAL};function j(H,R){if(R.type===hs&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Yn||R.magFilter===Bp||R.magFilter===ad||R.magFilter===Ho||R.minFilter===Yn||R.minFilter===Bp||R.minFilter===ad||R.minFilter===Ho)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(H,n.TEXTURE_WRAP_S,q[R.wrapS]),n.texParameteri(H,n.TEXTURE_WRAP_T,q[R.wrapT]),(H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY)&&n.texParameteri(H,n.TEXTURE_WRAP_R,q[R.wrapR]),n.texParameteri(H,n.TEXTURE_MAG_FILTER,ae[R.magFilter]),n.texParameteri(H,n.TEXTURE_MIN_FILTER,ae[R.minFilter]),R.compareFunction&&(n.texParameteri(H,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(H,n.TEXTURE_COMPARE_FUNC,z[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===di||R.minFilter!==ad&&R.minFilter!==Ho||R.type===hs&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||r.get(R).__currentAnisotropy){const le=e.get("EXT_texture_filter_anisotropic");n.texParameterf(H,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,o.getMaxAnisotropy())),r.get(R).__currentAnisotropy=R.anisotropy}}}function Pe(H,R){let le=!1;H.__webglInit===void 0&&(H.__webglInit=!0,R.addEventListener("dispose",A));const Ce=R.source;let Ne=x.get(Ce);Ne===void 0&&(Ne={},x.set(Ce,Ne));const Te=X(R);if(Te!==H.__cacheKey){Ne[Te]===void 0&&(Ne[Te]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,le=!0),Ne[Te].usedTimes++;const st=Ne[H.__cacheKey];st!==void 0&&(Ne[H.__cacheKey].usedTimes--,st.usedTimes===0&&C(R)),H.__cacheKey=Te,H.__webglTexture=Ne[Te].texture}return le}function qe(H,R,le){return Math.floor(Math.floor(H/le)/R)}function De(H,R,le,Ce){const Te=H.updateRanges;if(Te.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,R.width,R.height,le,Ce,R.data);else{Te.sort((Ue,Fe)=>Ue.start-Fe.start);let st=0;for(let Ue=1;Ue<Te.length;Ue++){const Fe=Te[st],gt=Te[Ue],it=Fe.start+Fe.count,et=qe(gt.start,R.width,4),Ct=qe(Fe.start,R.width,4);gt.start<=it+1&&et===Ct&&qe(gt.start+gt.count-1,R.width,4)===et?Fe.count=Math.max(Fe.count,gt.start+gt.count-Fe.start):(++st,Te[st]=gt)}Te.length=st+1;const We=n.getParameter(n.UNPACK_ROW_LENGTH),ct=n.getParameter(n.UNPACK_SKIP_PIXELS),pt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,R.width);for(let Ue=0,Fe=Te.length;Ue<Fe;Ue++){const gt=Te[Ue],it=Math.floor(gt.start/4),et=Math.ceil(gt.count/4),Ct=it%R.width,ne=Math.floor(it/R.width),Ge=et,Oe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ct),n.pixelStorei(n.UNPACK_SKIP_ROWS,ne),t.texSubImage2D(n.TEXTURE_2D,0,Ct,ne,Ge,Oe,le,Ce,R.data)}H.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,We),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ct),n.pixelStorei(n.UNPACK_SKIP_ROWS,pt)}}function fe(H,R,le){let Ce=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(Ce=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(Ce=n.TEXTURE_3D);const Ne=Pe(H,R),Te=R.source;t.bindTexture(Ce,H.__webglTexture,n.TEXTURE0+le);const st=r.get(Te);if(Te.version!==st.__version||Ne===!0){t.activeTexture(n.TEXTURE0+le);const We=un.getPrimaries(un.workingColorSpace),ct=R.colorSpace===Vo?null:un.getPrimaries(R.colorSpace),pt=R.colorSpace===Vo||We===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Ue=E(R.image,!1,o.maxTextureSize);Ue=qt(R,Ue);const Fe=a.convert(R.format,R.colorSpace),gt=a.convert(R.type);let it=N(R.internalFormat,Fe,gt,R.colorSpace,R.isVideoTexture);j(Ce,R);let et;const Ct=R.mipmaps,ne=R.isVideoTexture!==!0,Ge=st.__version===void 0||Ne===!0,Oe=Te.dataReady,tt=V(R,Ue);if(R.isDepthTexture)it=k(R.format===Ia,R.type),Ge&&(ne?t.texStorage2D(n.TEXTURE_2D,1,it,Ue.width,Ue.height):t.texImage2D(n.TEXTURE_2D,0,it,Ue.width,Ue.height,0,Fe,gt,null));else if(R.isDataTexture)if(Ct.length>0){ne&&Ge&&t.texStorage2D(n.TEXTURE_2D,tt,it,Ct[0].width,Ct[0].height);for(let ke=0,Ee=Ct.length;ke<Ee;ke++)et=Ct[ke],ne?Oe&&t.texSubImage2D(n.TEXTURE_2D,ke,0,0,et.width,et.height,Fe,gt,et.data):t.texImage2D(n.TEXTURE_2D,ke,it,et.width,et.height,0,Fe,gt,et.data);R.generateMipmaps=!1}else ne?(Ge&&t.texStorage2D(n.TEXTURE_2D,tt,it,Ue.width,Ue.height),Oe&&De(R,Ue,Fe,gt)):t.texImage2D(n.TEXTURE_2D,0,it,Ue.width,Ue.height,0,Fe,gt,Ue.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ne&&Ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,tt,it,Ct[0].width,Ct[0].height,Ue.depth);for(let ke=0,Ee=Ct.length;ke<Ee;ke++)if(et=Ct[ke],R.format!==jr)if(Fe!==null)if(ne){if(Oe)if(R.layerUpdates.size>0){const ot=hv(et.width,et.height,R.format,R.type);for(const Nt of R.layerUpdates){const nn=et.data.subarray(Nt*ot/et.data.BYTES_PER_ELEMENT,(Nt+1)*ot/et.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ke,0,0,Nt,et.width,et.height,1,Fe,nn)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ke,0,0,0,et.width,et.height,Ue.depth,Fe,et.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ke,it,et.width,et.height,Ue.depth,0,et.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?Oe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ke,0,0,0,et.width,et.height,Ue.depth,Fe,gt,et.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ke,it,et.width,et.height,Ue.depth,0,Fe,gt,et.data)}else{ne&&Ge&&t.texStorage2D(n.TEXTURE_2D,tt,it,Ct[0].width,Ct[0].height);for(let ke=0,Ee=Ct.length;ke<Ee;ke++)et=Ct[ke],R.format!==jr?Fe!==null?ne?Oe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ke,0,0,et.width,et.height,Fe,et.data):t.compressedTexImage2D(n.TEXTURE_2D,ke,it,et.width,et.height,0,et.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?Oe&&t.texSubImage2D(n.TEXTURE_2D,ke,0,0,et.width,et.height,Fe,gt,et.data):t.texImage2D(n.TEXTURE_2D,ke,it,et.width,et.height,0,Fe,gt,et.data)}else if(R.isDataArrayTexture)if(ne){if(Ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,tt,it,Ue.width,Ue.height,Ue.depth),Oe)if(R.layerUpdates.size>0){const ke=hv(Ue.width,Ue.height,R.format,R.type);for(const Ee of R.layerUpdates){const ot=Ue.data.subarray(Ee*ke/Ue.data.BYTES_PER_ELEMENT,(Ee+1)*ke/Ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ee,Ue.width,Ue.height,1,Fe,gt,ot)}R.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Ue.width,Ue.height,Ue.depth,Fe,gt,Ue.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,it,Ue.width,Ue.height,Ue.depth,0,Fe,gt,Ue.data);else if(R.isData3DTexture)ne?(Ge&&t.texStorage3D(n.TEXTURE_3D,tt,it,Ue.width,Ue.height,Ue.depth),Oe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Ue.width,Ue.height,Ue.depth,Fe,gt,Ue.data)):t.texImage3D(n.TEXTURE_3D,0,it,Ue.width,Ue.height,Ue.depth,0,Fe,gt,Ue.data);else if(R.isFramebufferTexture){if(Ge)if(ne)t.texStorage2D(n.TEXTURE_2D,tt,it,Ue.width,Ue.height);else{let ke=Ue.width,Ee=Ue.height;for(let ot=0;ot<tt;ot++)t.texImage2D(n.TEXTURE_2D,ot,it,ke,Ee,0,Fe,gt,null),ke>>=1,Ee>>=1}}else if(Ct.length>0){if(ne&&Ge){const ke=lt(Ct[0]);t.texStorage2D(n.TEXTURE_2D,tt,it,ke.width,ke.height)}for(let ke=0,Ee=Ct.length;ke<Ee;ke++)et=Ct[ke],ne?Oe&&t.texSubImage2D(n.TEXTURE_2D,ke,0,0,Fe,gt,et):t.texImage2D(n.TEXTURE_2D,ke,it,Fe,gt,et);R.generateMipmaps=!1}else if(ne){if(Ge){const ke=lt(Ue);t.texStorage2D(n.TEXTURE_2D,tt,it,ke.width,ke.height)}Oe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Fe,gt,Ue)}else t.texImage2D(n.TEXTURE_2D,0,it,Fe,gt,Ue);g(R)&&y(Ce),st.__version=Te.version,R.onUpdate&&R.onUpdate(R)}H.__version=R.version}function xe(H,R,le){if(R.image.length!==6)return;const Ce=Pe(H,R),Ne=R.source;t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+le);const Te=r.get(Ne);if(Ne.version!==Te.__version||Ce===!0){t.activeTexture(n.TEXTURE0+le);const st=un.getPrimaries(un.workingColorSpace),We=R.colorSpace===Vo?null:un.getPrimaries(R.colorSpace),ct=R.colorSpace===Vo||st===We?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const pt=R.isCompressedTexture||R.image[0].isCompressedTexture,Ue=R.image[0]&&R.image[0].isDataTexture,Fe=[];for(let Ee=0;Ee<6;Ee++)!pt&&!Ue?Fe[Ee]=E(R.image[Ee],!0,o.maxCubemapSize):Fe[Ee]=Ue?R.image[Ee].image:R.image[Ee],Fe[Ee]=qt(R,Fe[Ee]);const gt=Fe[0],it=a.convert(R.format,R.colorSpace),et=a.convert(R.type),Ct=N(R.internalFormat,it,et,R.colorSpace),ne=R.isVideoTexture!==!0,Ge=Te.__version===void 0||Ce===!0,Oe=Ne.dataReady;let tt=V(R,gt);j(n.TEXTURE_CUBE_MAP,R);let ke;if(pt){ne&&Ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,tt,Ct,gt.width,gt.height);for(let Ee=0;Ee<6;Ee++){ke=Fe[Ee].mipmaps;for(let ot=0;ot<ke.length;ot++){const Nt=ke[ot];R.format!==jr?it!==null?ne?Oe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ot,0,0,Nt.width,Nt.height,it,Nt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ot,Ct,Nt.width,Nt.height,0,Nt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?Oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ot,0,0,Nt.width,Nt.height,it,et,Nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ot,Ct,Nt.width,Nt.height,0,it,et,Nt.data)}}}else{if(ke=R.mipmaps,ne&&Ge){ke.length>0&&tt++;const Ee=lt(Fe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,tt,Ct,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(Ue){ne?Oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Fe[Ee].width,Fe[Ee].height,it,et,Fe[Ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Ct,Fe[Ee].width,Fe[Ee].height,0,it,et,Fe[Ee].data);for(let ot=0;ot<ke.length;ot++){const nn=ke[ot].image[Ee].image;ne?Oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ot+1,0,0,nn.width,nn.height,it,et,nn.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ot+1,Ct,nn.width,nn.height,0,it,et,nn.data)}}else{ne?Oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,it,et,Fe[Ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Ct,it,et,Fe[Ee]);for(let ot=0;ot<ke.length;ot++){const Nt=ke[ot];ne?Oe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ot+1,0,0,it,et,Nt.image[Ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,ot+1,Ct,it,et,Nt.image[Ee])}}}g(R)&&y(n.TEXTURE_CUBE_MAP),Te.__version=Ne.version,R.onUpdate&&R.onUpdate(R)}H.__version=R.version}function Re(H,R,le,Ce,Ne,Te){const st=a.convert(le.format,le.colorSpace),We=a.convert(le.type),ct=N(le.internalFormat,st,We,le.colorSpace),pt=r.get(R),Ue=r.get(le);if(Ue.__renderTarget=R,!pt.__hasExternalTextures){const Fe=Math.max(1,R.width>>Te),gt=Math.max(1,R.height>>Te);Ne===n.TEXTURE_3D||Ne===n.TEXTURE_2D_ARRAY?t.texImage3D(Ne,Te,ct,Fe,gt,R.depth,0,st,We,null):t.texImage2D(Ne,Te,ct,Fe,gt,0,st,We,null)}t.bindFramebuffer(n.FRAMEBUFFER,H),Gt(R)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Ce,Ne,Ue.__webglTexture,0,J(R)):(Ne===n.TEXTURE_2D||Ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Ce,Ne,Ue.__webglTexture,Te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(H,R,le){if(n.bindRenderbuffer(n.RENDERBUFFER,H),R.depthBuffer){const Ce=R.depthTexture,Ne=Ce&&Ce.isDepthTexture?Ce.type:null,Te=k(R.stencilBuffer,Ne),st=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Gt(R)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J(R),Te,R.width,R.height):le?n.renderbufferStorageMultisample(n.RENDERBUFFER,J(R),Te,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,Te,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,H)}else{const Ce=R.textures;for(let Ne=0;Ne<Ce.length;Ne++){const Te=Ce[Ne],st=a.convert(Te.format,Te.colorSpace),We=a.convert(Te.type),ct=N(Te.internalFormat,st,We,Te.colorSpace);Gt(R)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J(R),ct,R.width,R.height):le?n.renderbufferStorageMultisample(n.RENDERBUFFER,J(R),ct,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,ct,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ze(H,R,le){const Ce=R.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,H),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Ne=r.get(R.depthTexture);if(Ne.__renderTarget=R,(!Ne.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),Ce){if(Ne.__webglInit===void 0&&(Ne.__webglInit=!0,R.depthTexture.addEventListener("dispose",A)),Ne.__webglTexture===void 0){Ne.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Ne.__webglTexture),j(n.TEXTURE_CUBE_MAP,R.depthTexture);const pt=a.convert(R.depthTexture.format),Ue=a.convert(R.depthTexture.type);let Fe;R.depthTexture.format===eo?Fe=n.DEPTH_COMPONENT24:R.depthTexture.format===Ia&&(Fe=n.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Fe,R.width,R.height,0,pt,Ue,null)}}else re(R.depthTexture,0);const Te=Ne.__webglTexture,st=J(R),We=Ce?n.TEXTURE_CUBE_MAP_POSITIVE_X+le:n.TEXTURE_2D,ct=R.depthTexture.format===Ia?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(R.depthTexture.format===eo)Gt(R)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ct,We,Te,0,st):n.framebufferTexture2D(n.FRAMEBUFFER,ct,We,Te,0);else if(R.depthTexture.format===Ia)Gt(R)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ct,We,Te,0,st):n.framebufferTexture2D(n.FRAMEBUFFER,ct,We,Te,0);else throw new Error("Unknown depthTexture format")}function vt(H){const R=r.get(H),le=H.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==H.depthTexture){const Ce=H.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),Ce){const Ne=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,Ce.removeEventListener("dispose",Ne)};Ce.addEventListener("dispose",Ne),R.__depthDisposeCallback=Ne}R.__boundDepthTexture=Ce}if(H.depthTexture&&!R.__autoAllocateDepthBuffer)if(le)for(let Ce=0;Ce<6;Ce++)Ze(R.__webglFramebuffer[Ce],H,Ce);else{const Ce=H.texture.mipmaps;Ce&&Ce.length>0?Ze(R.__webglFramebuffer[0],H,0):Ze(R.__webglFramebuffer,H,0)}else if(le){R.__webglDepthbuffer=[];for(let Ce=0;Ce<6;Ce++)if(t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[Ce]),R.__webglDepthbuffer[Ce]===void 0)R.__webglDepthbuffer[Ce]=n.createRenderbuffer(),Je(R.__webglDepthbuffer[Ce],H,!1);else{const Ne=H.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=R.__webglDepthbuffer[Ce];n.bindRenderbuffer(n.RENDERBUFFER,Te),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ne,n.RENDERBUFFER,Te)}}else{const Ce=H.texture.mipmaps;if(Ce&&Ce.length>0?t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=n.createRenderbuffer(),Je(R.__webglDepthbuffer,H,!1);else{const Ne=H.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Te=R.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Te),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ne,n.RENDERBUFFER,Te)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Qt(H,R,le){const Ce=r.get(H);R!==void 0&&Re(Ce.__webglFramebuffer,H,H.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),le!==void 0&&vt(H)}function $t(H){const R=H.texture,le=r.get(H),Ce=r.get(R);H.addEventListener("dispose",T);const Ne=H.textures,Te=H.isWebGLCubeRenderTarget===!0,st=Ne.length>1;if(st||(Ce.__webglTexture===void 0&&(Ce.__webglTexture=n.createTexture()),Ce.__version=R.version,c.memory.textures++),Te){le.__webglFramebuffer=[];for(let We=0;We<6;We++)if(R.mipmaps&&R.mipmaps.length>0){le.__webglFramebuffer[We]=[];for(let ct=0;ct<R.mipmaps.length;ct++)le.__webglFramebuffer[We][ct]=n.createFramebuffer()}else le.__webglFramebuffer[We]=n.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){le.__webglFramebuffer=[];for(let We=0;We<R.mipmaps.length;We++)le.__webglFramebuffer[We]=n.createFramebuffer()}else le.__webglFramebuffer=n.createFramebuffer();if(st)for(let We=0,ct=Ne.length;We<ct;We++){const pt=r.get(Ne[We]);pt.__webglTexture===void 0&&(pt.__webglTexture=n.createTexture(),c.memory.textures++)}if(H.samples>0&&Gt(H)===!1){le.__webglMultisampledFramebuffer=n.createFramebuffer(),le.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,le.__webglMultisampledFramebuffer);for(let We=0;We<Ne.length;We++){const ct=Ne[We];le.__webglColorRenderbuffer[We]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,le.__webglColorRenderbuffer[We]);const pt=a.convert(ct.format,ct.colorSpace),Ue=a.convert(ct.type),Fe=N(ct.internalFormat,pt,Ue,ct.colorSpace,H.isXRRenderTarget===!0),gt=J(H);n.renderbufferStorageMultisample(n.RENDERBUFFER,gt,Fe,H.width,H.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.RENDERBUFFER,le.__webglColorRenderbuffer[We])}n.bindRenderbuffer(n.RENDERBUFFER,null),H.depthBuffer&&(le.__webglDepthRenderbuffer=n.createRenderbuffer(),Je(le.__webglDepthRenderbuffer,H,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Te){t.bindTexture(n.TEXTURE_CUBE_MAP,Ce.__webglTexture),j(n.TEXTURE_CUBE_MAP,R);for(let We=0;We<6;We++)if(R.mipmaps&&R.mipmaps.length>0)for(let ct=0;ct<R.mipmaps.length;ct++)Re(le.__webglFramebuffer[We][ct],H,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+We,ct);else Re(le.__webglFramebuffer[We],H,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+We,0);g(R)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(st){for(let We=0,ct=Ne.length;We<ct;We++){const pt=Ne[We],Ue=r.get(pt);let Fe=n.TEXTURE_2D;(H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(Fe=H.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Fe,Ue.__webglTexture),j(Fe,pt),Re(le.__webglFramebuffer,H,pt,n.COLOR_ATTACHMENT0+We,Fe,0),g(pt)&&y(Fe)}t.unbindTexture()}else{let We=n.TEXTURE_2D;if((H.isWebGL3DRenderTarget||H.isWebGLArrayRenderTarget)&&(We=H.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(We,Ce.__webglTexture),j(We,R),R.mipmaps&&R.mipmaps.length>0)for(let ct=0;ct<R.mipmaps.length;ct++)Re(le.__webglFramebuffer[ct],H,R,n.COLOR_ATTACHMENT0,We,ct);else Re(le.__webglFramebuffer,H,R,n.COLOR_ATTACHMENT0,We,0);g(R)&&y(We),t.unbindTexture()}H.depthBuffer&&vt(H)}function Bt(H){const R=H.textures;for(let le=0,Ce=R.length;le<Ce;le++){const Ne=R[le];if(g(Ne)){const Te=P(H),st=r.get(Ne).__webglTexture;t.bindTexture(Te,st),y(Te),t.unbindTexture()}}}const Ot=[],Vt=[];function Xt(H){if(H.samples>0){if(Gt(H)===!1){const R=H.textures,le=H.width,Ce=H.height;let Ne=n.COLOR_BUFFER_BIT;const Te=H.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=r.get(H),We=R.length>1;if(We)for(let pt=0;pt<R.length;pt++)t.bindFramebuffer(n.FRAMEBUFFER,st.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,st.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer);const ct=H.texture.mipmaps;ct&&ct.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,st.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let pt=0;pt<R.length;pt++){if(H.resolveDepthBuffer&&(H.depthBuffer&&(Ne|=n.DEPTH_BUFFER_BIT),H.stencilBuffer&&H.resolveStencilBuffer&&(Ne|=n.STENCIL_BUFFER_BIT)),We){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,st.__webglColorRenderbuffer[pt]);const Ue=r.get(R[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ue,0)}n.blitFramebuffer(0,0,le,Ce,0,0,le,Ce,Ne,n.NEAREST),h===!0&&(Ot.length=0,Vt.length=0,Ot.push(n.COLOR_ATTACHMENT0+pt),H.depthBuffer&&H.resolveDepthBuffer===!1&&(Ot.push(Te),Vt.push(Te),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Vt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ot))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),We)for(let pt=0;pt<R.length;pt++){t.bindFramebuffer(n.FRAMEBUFFER,st.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,st.__webglColorRenderbuffer[pt]);const Ue=r.get(R[pt]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,st.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,Ue,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(H.depthBuffer&&H.resolveDepthBuffer===!1&&h){const R=H.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[R])}}}function J(H){return Math.min(o.maxSamples,H.samples)}function Gt(H){const R=r.get(H);return H.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Lt(H){const R=c.render.frame;p.get(H)!==R&&(p.set(H,R),H.update())}function qt(H,R){const le=H.colorSpace,Ce=H.format,Ne=H.type;return H.isCompressedTexture===!0||H.isVideoTexture===!0||le!==Ol&&le!==Vo&&(un.getTransfer(le)===vn?(Ce!==jr||Ne!==nr)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):fn("WebGLTextures: Unsupported texture color space:",le)),R}function lt(H){return typeof HTMLImageElement<"u"&&H instanceof HTMLImageElement?(u.width=H.naturalWidth||H.width,u.height=H.naturalHeight||H.height):typeof VideoFrame<"u"&&H instanceof VideoFrame?(u.width=H.displayWidth,u.height=H.displayHeight):(u.width=H.width,u.height=H.height),u}this.allocateTextureUnit=W,this.resetTextureUnits=$,this.setTexture2D=re,this.setTexture2DArray=ee,this.setTexture3D=Z,this.setTextureCube=ie,this.rebindTextures=Qt,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Q2(n,e){function t(r,o=Vo){let a;const c=un.getTransfer(o);if(r===nr)return n.UNSIGNED_BYTE;if(r===Lm)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Dm)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Nx)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===Ux)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===Lx)return n.BYTE;if(r===Dx)return n.SHORT;if(r===zc)return n.UNSIGNED_SHORT;if(r===Im)return n.INT;if(r===ys)return n.UNSIGNED_INT;if(r===hs)return n.FLOAT;if(r===Qs)return n.HALF_FLOAT;if(r===kx)return n.ALPHA;if(r===Fx)return n.RGB;if(r===jr)return n.RGBA;if(r===eo)return n.DEPTH_COMPONENT;if(r===Ia)return n.DEPTH_STENCIL;if(r===Ox)return n.RED;if(r===Nm)return n.RED_INTEGER;if(r===Fl)return n.RG;if(r===Um)return n.RG_INTEGER;if(r===km)return n.RGBA_INTEGER;if(r===jd||r===Xd||r===Yd||r===qd)if(c===vn)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===jd)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Yd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===qd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===jd)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xd)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Yd)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===qd)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hh||r===Gh||r===Wh||r===jh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Hh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Gh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Wh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===jh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xh||r===Yh||r===qh||r===Kh||r===Zh||r===Jh||r===Qh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Xh||r===Yh)return c===vn?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===qh)return c===vn?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(r===Kh)return a.COMPRESSED_R11_EAC;if(r===Zh)return a.COMPRESSED_SIGNED_R11_EAC;if(r===Jh)return a.COMPRESSED_RG11_EAC;if(r===Qh)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===em||r===tm||r===nm||r===im||r===rm||r===sm||r===om||r===am||r===lm||r===cm||r===um||r===dm||r===fm||r===pm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===em)return c===vn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===tm)return c===vn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===nm)return c===vn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===im)return c===vn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===rm)return c===vn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===sm)return c===vn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===om)return c===vn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===am)return c===vn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===lm)return c===vn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===cm)return c===vn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===um)return c===vn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===dm)return c===vn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===fm)return c===vn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===pm)return c===vn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===hm||r===mm||r===gm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===hm)return c===vn?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===mm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===gm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===vm||r===xm||r===_m||r===ym)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===vm)return a.COMPRESSED_RED_RGTC1_EXT;if(r===xm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===_m)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ym)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$c?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const eE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class nE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Jx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new ir({vertexShader:eE,fragmentShader:tE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xr(new Xl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iE extends ka{constructor(e,t){super();const r=this;let o=null,a=1,c=null,f="local-floor",h=1,u=null,p=null,_=null,x=null,m=null,b=null;const E=typeof XRWebGLBinding<"u",g=new nE,y={},P=t.getContextAttributes();let N=null,k=null;const V=[],A=[],T=new pn;let M=null;const C=new Hr;C.viewport=new Dn;const B=new Hr;B.viewport=new Dn;const O=[C,B],$=new mS;let W=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(fe){let xe=V[fe];return xe===void 0&&(xe=new Wp,V[fe]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(fe){let xe=V[fe];return xe===void 0&&(xe=new Wp,V[fe]=xe),xe.getGripSpace()},this.getHand=function(fe){let xe=V[fe];return xe===void 0&&(xe=new Wp,V[fe]=xe),xe.getHandSpace()};function re(fe){const xe=A.indexOf(fe.inputSource);if(xe===-1)return;const Re=V[xe];Re!==void 0&&(Re.update(fe.inputSource,fe.frame,u||c),Re.dispatchEvent({type:fe.type,data:fe.inputSource}))}function ee(){o.removeEventListener("select",re),o.removeEventListener("selectstart",re),o.removeEventListener("selectend",re),o.removeEventListener("squeeze",re),o.removeEventListener("squeezestart",re),o.removeEventListener("squeezeend",re),o.removeEventListener("end",ee),o.removeEventListener("inputsourceschange",Z);for(let fe=0;fe<V.length;fe++){const xe=A[fe];xe!==null&&(A[fe]=null,V[fe].disconnect(xe))}W=null,X=null,g.reset();for(const fe in y)delete y[fe];e.setRenderTarget(N),m=null,x=null,_=null,o=null,k=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(M),e.setSize(T.width,T.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(fe){a=fe,r.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(fe){f=fe,r.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||c},this.setReferenceSpace=function(fe){u=fe},this.getBaseLayer=function(){return x!==null?x:m},this.getBinding=function(){return _===null&&E&&(_=new XRWebGLBinding(o,t)),_},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(fe){if(o=fe,o!==null){if(N=e.getRenderTarget(),o.addEventListener("select",re),o.addEventListener("selectstart",re),o.addEventListener("selectend",re),o.addEventListener("squeeze",re),o.addEventListener("squeezestart",re),o.addEventListener("squeezeend",re),o.addEventListener("end",ee),o.addEventListener("inputsourceschange",Z),P.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(T),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Je=null,Ze=null;P.depth&&(Ze=P.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=P.stencil?Ia:eo,Je=P.stencil?$c:ys);const vt={colorFormat:t.RGBA8,depthFormat:Ze,scaleFactor:a};_=this.getBinding(),x=_.createProjectionLayer(vt),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),k=new vs(x.textureWidth,x.textureHeight,{format:jr,type:nr,depthTexture:new Gc(x.textureWidth,x.textureHeight,Je,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Re={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(o,t,Re),o.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),k=new vs(m.framebufferWidth,m.framebufferHeight,{format:jr,type:nr,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}k.isXRRenderTarget=!0,this.setFoveation(h),u=null,c=await o.requestReferenceSpace(f),De.setContext(o),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(fe){for(let xe=0;xe<fe.removed.length;xe++){const Re=fe.removed[xe],Je=A.indexOf(Re);Je>=0&&(A[Je]=null,V[Je].disconnect(Re))}for(let xe=0;xe<fe.added.length;xe++){const Re=fe.added[xe];let Je=A.indexOf(Re);if(Je===-1){for(let vt=0;vt<V.length;vt++)if(vt>=A.length){A.push(Re),Je=vt;break}else if(A[vt]===null){A[vt]=Re,Je=vt;break}if(Je===-1)break}const Ze=V[Je];Ze&&Ze.connect(Re)}}const ie=new ge,q=new ge;function ae(fe,xe,Re){ie.setFromMatrixPosition(xe.matrixWorld),q.setFromMatrixPosition(Re.matrixWorld);const Je=ie.distanceTo(q),Ze=xe.projectionMatrix.elements,vt=Re.projectionMatrix.elements,Qt=Ze[14]/(Ze[10]-1),$t=Ze[14]/(Ze[10]+1),Bt=(Ze[9]+1)/Ze[5],Ot=(Ze[9]-1)/Ze[5],Vt=(Ze[8]-1)/Ze[0],Xt=(vt[8]+1)/vt[0],J=Qt*Vt,Gt=Qt*Xt,Lt=Je/(-Vt+Xt),qt=Lt*-Vt;if(xe.matrixWorld.decompose(fe.position,fe.quaternion,fe.scale),fe.translateX(qt),fe.translateZ(Lt),fe.matrixWorld.compose(fe.position,fe.quaternion,fe.scale),fe.matrixWorldInverse.copy(fe.matrixWorld).invert(),Ze[10]===-1)fe.projectionMatrix.copy(xe.projectionMatrix),fe.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const lt=Qt+Lt,H=$t+Lt,R=J-qt,le=Gt+(Je-qt),Ce=Bt*$t/H*lt,Ne=Ot*$t/H*lt;fe.projectionMatrix.makePerspective(R,le,Ce,Ne,lt,H),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert()}}function z(fe,xe){xe===null?fe.matrixWorld.copy(fe.matrix):fe.matrixWorld.multiplyMatrices(xe.matrixWorld,fe.matrix),fe.matrixWorldInverse.copy(fe.matrixWorld).invert()}this.updateCamera=function(fe){if(o===null)return;let xe=fe.near,Re=fe.far;g.texture!==null&&(g.depthNear>0&&(xe=g.depthNear),g.depthFar>0&&(Re=g.depthFar)),$.near=B.near=C.near=xe,$.far=B.far=C.far=Re,(W!==$.near||X!==$.far)&&(o.updateRenderState({depthNear:$.near,depthFar:$.far}),W=$.near,X=$.far),$.layers.mask=fe.layers.mask|6,C.layers.mask=$.layers.mask&-5,B.layers.mask=$.layers.mask&-3;const Je=fe.parent,Ze=$.cameras;z($,Je);for(let vt=0;vt<Ze.length;vt++)z(Ze[vt],Je);Ze.length===2?ae($,C,B):$.projectionMatrix.copy(C.projectionMatrix),j(fe,$,Je)};function j(fe,xe,Re){Re===null?fe.matrix.copy(xe.matrixWorld):(fe.matrix.copy(Re.matrixWorld),fe.matrix.invert(),fe.matrix.multiply(xe.matrixWorld)),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.updateMatrixWorld(!0),fe.projectionMatrix.copy(xe.projectionMatrix),fe.projectionMatrixInverse.copy(xe.projectionMatrixInverse),fe.isPerspectiveCamera&&(fe.fov=Hc*2*Math.atan(1/fe.projectionMatrix.elements[5]),fe.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(x===null&&m===null))return h},this.setFoveation=function(fe){h=fe,x!==null&&(x.fixedFoveation=fe),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=fe)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh($)},this.getCameraTexture=function(fe){return y[fe]};let Pe=null;function qe(fe,xe){if(p=xe.getViewerPose(u||c),b=xe,p!==null){const Re=p.views;m!==null&&(e.setRenderTargetFramebuffer(k,m.framebuffer),e.setRenderTarget(k));let Je=!1;Re.length!==$.cameras.length&&($.cameras.length=0,Je=!0);for(let $t=0;$t<Re.length;$t++){const Bt=Re[$t];let Ot=null;if(m!==null)Ot=m.getViewport(Bt);else{const Xt=_.getViewSubImage(x,Bt);Ot=Xt.viewport,$t===0&&(e.setRenderTargetTextures(k,Xt.colorTexture,Xt.depthStencilTexture),e.setRenderTarget(k))}let Vt=O[$t];Vt===void 0&&(Vt=new Hr,Vt.layers.enable($t),Vt.viewport=new Dn,O[$t]=Vt),Vt.matrix.fromArray(Bt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Bt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),$t===0&&($.matrix.copy(Vt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Je===!0&&$.cameras.push(Vt)}const Ze=o.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&E){_=r.getBinding();const $t=_.getDepthInformation(Re[0]);$t&&$t.isValid&&$t.texture&&g.init($t,o.renderState)}if(Ze&&Ze.includes("camera-access")&&E){e.state.unbindTexture(),_=r.getBinding();for(let $t=0;$t<Re.length;$t++){const Bt=Re[$t].camera;if(Bt){let Ot=y[Bt];Ot||(Ot=new Jx,y[Bt]=Ot);const Vt=_.getCameraImage(Bt);Ot.sourceTexture=Vt}}}}for(let Re=0;Re<V.length;Re++){const Je=A[Re],Ze=V[Re];Je!==null&&Ze!==void 0&&Ze.update(Je,xe,u||c)}Pe&&Pe(fe,xe),xe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xe}),b=null}const De=new r_;De.setAnimationLoop(qe),this.setAnimationLoop=function(fe){Pe=fe},this.dispose=function(){}}}const wa=new Ss,rE=new In;function sE(n,e){function t(g,y){g.matrixAutoUpdate===!0&&g.updateMatrix(),y.value.copy(g.matrix)}function r(g,y){y.color.getRGB(g.fogColor.value,t_(n)),y.isFog?(g.fogNear.value=y.near,g.fogFar.value=y.far):y.isFogExp2&&(g.fogDensity.value=y.density)}function o(g,y,P,N,k){y.isMeshBasicMaterial?a(g,y):y.isMeshLambertMaterial?(a(g,y),y.envMap&&(g.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(a(g,y),_(g,y)):y.isMeshPhongMaterial?(a(g,y),p(g,y),y.envMap&&(g.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(a(g,y),x(g,y),y.isMeshPhysicalMaterial&&m(g,y,k)):y.isMeshMatcapMaterial?(a(g,y),b(g,y)):y.isMeshDepthMaterial?a(g,y):y.isMeshDistanceMaterial?(a(g,y),E(g,y)):y.isMeshNormalMaterial?a(g,y):y.isLineBasicMaterial?(c(g,y),y.isLineDashedMaterial&&f(g,y)):y.isPointsMaterial?h(g,y,P,N):y.isSpriteMaterial?u(g,y):y.isShadowMaterial?(g.color.value.copy(y.color),g.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function a(g,y){g.opacity.value=y.opacity,y.color&&g.diffuse.value.copy(y.color),y.emissive&&g.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(g.map.value=y.map,t(y.map,g.mapTransform)),y.alphaMap&&(g.alphaMap.value=y.alphaMap,t(y.alphaMap,g.alphaMapTransform)),y.bumpMap&&(g.bumpMap.value=y.bumpMap,t(y.bumpMap,g.bumpMapTransform),g.bumpScale.value=y.bumpScale,y.side===Vi&&(g.bumpScale.value*=-1)),y.normalMap&&(g.normalMap.value=y.normalMap,t(y.normalMap,g.normalMapTransform),g.normalScale.value.copy(y.normalScale),y.side===Vi&&g.normalScale.value.negate()),y.displacementMap&&(g.displacementMap.value=y.displacementMap,t(y.displacementMap,g.displacementMapTransform),g.displacementScale.value=y.displacementScale,g.displacementBias.value=y.displacementBias),y.emissiveMap&&(g.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,g.emissiveMapTransform)),y.specularMap&&(g.specularMap.value=y.specularMap,t(y.specularMap,g.specularMapTransform)),y.alphaTest>0&&(g.alphaTest.value=y.alphaTest);const P=e.get(y),N=P.envMap,k=P.envMapRotation;N&&(g.envMap.value=N,wa.copy(k),wa.x*=-1,wa.y*=-1,wa.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(wa.y*=-1,wa.z*=-1),g.envMapRotation.value.setFromMatrix4(rE.makeRotationFromEuler(wa)),g.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=y.reflectivity,g.ior.value=y.ior,g.refractionRatio.value=y.refractionRatio),y.lightMap&&(g.lightMap.value=y.lightMap,g.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,g.lightMapTransform)),y.aoMap&&(g.aoMap.value=y.aoMap,g.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,g.aoMapTransform))}function c(g,y){g.diffuse.value.copy(y.color),g.opacity.value=y.opacity,y.map&&(g.map.value=y.map,t(y.map,g.mapTransform))}function f(g,y){g.dashSize.value=y.dashSize,g.totalSize.value=y.dashSize+y.gapSize,g.scale.value=y.scale}function h(g,y,P,N){g.diffuse.value.copy(y.color),g.opacity.value=y.opacity,g.size.value=y.size*P,g.scale.value=N*.5,y.map&&(g.map.value=y.map,t(y.map,g.uvTransform)),y.alphaMap&&(g.alphaMap.value=y.alphaMap,t(y.alphaMap,g.alphaMapTransform)),y.alphaTest>0&&(g.alphaTest.value=y.alphaTest)}function u(g,y){g.diffuse.value.copy(y.color),g.opacity.value=y.opacity,g.rotation.value=y.rotation,y.map&&(g.map.value=y.map,t(y.map,g.mapTransform)),y.alphaMap&&(g.alphaMap.value=y.alphaMap,t(y.alphaMap,g.alphaMapTransform)),y.alphaTest>0&&(g.alphaTest.value=y.alphaTest)}function p(g,y){g.specular.value.copy(y.specular),g.shininess.value=Math.max(y.shininess,1e-4)}function _(g,y){y.gradientMap&&(g.gradientMap.value=y.gradientMap)}function x(g,y){g.metalness.value=y.metalness,y.metalnessMap&&(g.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,g.metalnessMapTransform)),g.roughness.value=y.roughness,y.roughnessMap&&(g.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,g.roughnessMapTransform)),y.envMap&&(g.envMapIntensity.value=y.envMapIntensity)}function m(g,y,P){g.ior.value=y.ior,y.sheen>0&&(g.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),g.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(g.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,g.sheenColorMapTransform)),y.sheenRoughnessMap&&(g.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,g.sheenRoughnessMapTransform))),y.clearcoat>0&&(g.clearcoat.value=y.clearcoat,g.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(g.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,g.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(g.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Vi&&g.clearcoatNormalScale.value.negate())),y.dispersion>0&&(g.dispersion.value=y.dispersion),y.iridescence>0&&(g.iridescence.value=y.iridescence,g.iridescenceIOR.value=y.iridescenceIOR,g.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(g.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,g.iridescenceMapTransform)),y.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),y.transmission>0&&(g.transmission.value=y.transmission,g.transmissionSamplerMap.value=P.texture,g.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(g.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,g.transmissionMapTransform)),g.thickness.value=y.thickness,y.thicknessMap&&(g.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=y.attenuationDistance,g.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(g.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(g.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=y.specularIntensity,g.specularColor.value.copy(y.specularColor),y.specularColorMap&&(g.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,g.specularColorMapTransform)),y.specularIntensityMap&&(g.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,g.specularIntensityMapTransform))}function b(g,y){y.matcap&&(g.matcap.value=y.matcap)}function E(g,y){const P=e.get(y).light;g.referencePosition.value.setFromMatrixPosition(P.matrixWorld),g.nearDistance.value=P.shadow.camera.near,g.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function oE(n,e,t,r){let o={},a={},c=[];const f=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function h(P,N){const k=N.program;r.uniformBlockBinding(P,k)}function u(P,N){let k=o[P.id];k===void 0&&(b(P),k=p(P),o[P.id]=k,P.addEventListener("dispose",g));const V=N.program;r.updateUBOMapping(P,V);const A=e.render.frame;a[P.id]!==A&&(x(P),a[P.id]=A)}function p(P){const N=_();P.__bindingPointIndex=N;const k=n.createBuffer(),V=P.__size,A=P.usage;return n.bindBuffer(n.UNIFORM_BUFFER,k),n.bufferData(n.UNIFORM_BUFFER,V,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,N,k),k}function _(){for(let P=0;P<f;P++)if(c.indexOf(P)===-1)return c.push(P),P;return fn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const N=o[P.id],k=P.uniforms,V=P.__cache;n.bindBuffer(n.UNIFORM_BUFFER,N);for(let A=0,T=k.length;A<T;A++){const M=Array.isArray(k[A])?k[A]:[k[A]];for(let C=0,B=M.length;C<B;C++){const O=M[C];if(m(O,A,C,V)===!0){const $=O.__offset,W=Array.isArray(O.value)?O.value:[O.value];let X=0;for(let re=0;re<W.length;re++){const ee=W[re],Z=E(ee);typeof ee=="number"||typeof ee=="boolean"?(O.__data[0]=ee,n.bufferSubData(n.UNIFORM_BUFFER,$+X,O.__data)):ee.isMatrix3?(O.__data[0]=ee.elements[0],O.__data[1]=ee.elements[1],O.__data[2]=ee.elements[2],O.__data[3]=0,O.__data[4]=ee.elements[3],O.__data[5]=ee.elements[4],O.__data[6]=ee.elements[5],O.__data[7]=0,O.__data[8]=ee.elements[6],O.__data[9]=ee.elements[7],O.__data[10]=ee.elements[8],O.__data[11]=0):(ee.toArray(O.__data,X),X+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(P,N,k,V){const A=P.value,T=N+"_"+k;if(V[T]===void 0)return typeof A=="number"||typeof A=="boolean"?V[T]=A:V[T]=A.clone(),!0;{const M=V[T];if(typeof A=="number"||typeof A=="boolean"){if(M!==A)return V[T]=A,!0}else if(M.equals(A)===!1)return M.copy(A),!0}return!1}function b(P){const N=P.uniforms;let k=0;const V=16;for(let T=0,M=N.length;T<M;T++){const C=Array.isArray(N[T])?N[T]:[N[T]];for(let B=0,O=C.length;B<O;B++){const $=C[B],W=Array.isArray($.value)?$.value:[$.value];for(let X=0,re=W.length;X<re;X++){const ee=W[X],Z=E(ee),ie=k%V,q=ie%Z.boundary,ae=ie+q;k+=q,ae!==0&&V-ae<Z.storage&&(k+=V-ae),$.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=k,k+=Z.storage}}}const A=k%V;return A>0&&(k+=V-A),P.__size=k,P.__cache={},this}function E(P){const N={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(N.boundary=4,N.storage=4):P.isVector2?(N.boundary=8,N.storage=8):P.isVector3||P.isColor?(N.boundary=16,N.storage=12):P.isVector4?(N.boundary=16,N.storage=16):P.isMatrix3?(N.boundary=48,N.storage=48):P.isMatrix4?(N.boundary=64,N.storage=64):P.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):zt("WebGLRenderer: Unsupported uniform value type.",P),N}function g(P){const N=P.target;N.removeEventListener("dispose",g);const k=c.indexOf(N.__bindingPointIndex);c.splice(k,1),n.deleteBuffer(o[N.id]),delete o[N.id],delete a[N.id]}function y(){for(const P in o)n.deleteBuffer(o[P]);c=[],o={},a={}}return{bind:h,update:u,dispose:y}}const aE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let cs=null;function lE(){return cs===null&&(cs=new qx(aE,16,16,Fl,Qs),cs.name="DFG_LUT",cs.minFilter=Yn,cs.magFilter=Yn,cs.wrapS=Wr,cs.wrapT=Wr,cs.generateMipmaps=!1,cs.needsUpdate=!0),cs}class u_{constructor(e={}){const{canvas:t=c1(),context:r=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:u=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:m=nr}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=c;const E=m,g=new Set([km,Um,Nm]),y=new Set([nr,ys,zc,$c,Lm,Dm]),P=new Uint32Array(4),N=new Int32Array(4);let k=null,V=null;const A=[],T=[];let M=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let B=!1;this._outputColorSpace=br;let O=0,$=0,W=null,X=-1,re=null;const ee=new Dn,Z=new Dn;let ie=null;const q=new on(0);let ae=0,z=t.width,j=t.height,Pe=1,qe=null,De=null;const fe=new Dn(0,0,z,j),xe=new Dn(0,0,z,j);let Re=!1;const Je=new $m;let Ze=!1,vt=!1;const Qt=new In,$t=new ge,Bt=new Dn,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function Xt(){return W===null?Pe:1}let J=r;function Gt(U,ue){return t.getContext(U,ue)}try{const U={alpha:!0,depth:o,stencil:a,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:p,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pm}`),t.addEventListener("webglcontextlost",ot,!1),t.addEventListener("webglcontextrestored",Nt,!1),t.addEventListener("webglcontextcreationerror",nn,!1),J===null){const ue="webgl2";if(J=Gt(ue,U),J===null)throw Gt(ue)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw fn("WebGLRenderer: "+U.message),U}let Lt,qt,lt,H,R,le,Ce,Ne,Te,st,We,ct,pt,Ue,Fe,gt,it,et,Ct,ne,Ge,Oe,tt;function ke(){Lt=new cw(J),Lt.init(),Ge=new Q2(J,Lt),qt=new tw(J,Lt,e,Ge),lt=new Z2(J,Lt),qt.reversedDepthBuffer&&x&&lt.buffers.depth.setReversed(!0),H=new fw(J),R=new F2,le=new J2(J,Lt,lt,R,qt,Ge,H),Ce=new lw(C),Ne=new vS(J),Oe=new QM(J,Ne),Te=new uw(J,Ne,H,Oe),st=new hw(J,Te,Ne,Oe,H),et=new pw(J,qt,le),Fe=new nw(R),We=new k2(C,Ce,Lt,qt,Oe,Fe),ct=new sE(C,R),pt=new B2,Ue=new W2(Lt),it=new JM(C,Ce,lt,st,b,h),gt=new K2(C,st,qt),tt=new oE(J,H,qt,lt),Ct=new ew(J,Lt,H),ne=new dw(J,Lt,H),H.programs=We.programs,C.capabilities=qt,C.extensions=Lt,C.properties=R,C.renderLists=pt,C.shadowMap=gt,C.state=lt,C.info=H}ke(),E!==nr&&(M=new gw(E,t.width,t.height,o,a));const Ee=new iE(C,J);this.xr=Ee,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const U=Lt.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=Lt.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return Pe},this.setPixelRatio=function(U){U!==void 0&&(Pe=U,this.setSize(z,j,!1))},this.getSize=function(U){return U.set(z,j)},this.setSize=function(U,ue,ve=!0){if(Ee.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}z=U,j=ue,t.width=Math.floor(U*Pe),t.height=Math.floor(ue*Pe),ve===!0&&(t.style.width=U+"px",t.style.height=ue+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,U,ue)},this.getDrawingBufferSize=function(U){return U.set(z*Pe,j*Pe).floor()},this.setDrawingBufferSize=function(U,ue,ve){z=U,j=ue,Pe=ve,t.width=Math.floor(U*ve),t.height=Math.floor(ue*ve),this.setViewport(0,0,U,ue)},this.setEffects=function(U){if(E===nr){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let ue=0;ue<U.length;ue++)if(U[ue].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(ee)},this.getViewport=function(U){return U.copy(fe)},this.setViewport=function(U,ue,ve,he){U.isVector4?fe.set(U.x,U.y,U.z,U.w):fe.set(U,ue,ve,he),lt.viewport(ee.copy(fe).multiplyScalar(Pe).round())},this.getScissor=function(U){return U.copy(xe)},this.setScissor=function(U,ue,ve,he){U.isVector4?xe.set(U.x,U.y,U.z,U.w):xe.set(U,ue,ve,he),lt.scissor(Z.copy(xe).multiplyScalar(Pe).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(U){lt.setScissorTest(Re=U)},this.setOpaqueSort=function(U){qe=U},this.setTransparentSort=function(U){De=U},this.getClearColor=function(U){return U.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(U=!0,ue=!0,ve=!0){let he=0;if(U){let pe=!1;if(W!==null){const G=W.texture.format;pe=g.has(G)}if(pe){const G=W.texture.type,Q=y.has(G),se=it.getClearColor(),_e=it.getClearAlpha(),we=se.r,Ae=se.g,Ve=se.b;Q?(P[0]=we,P[1]=Ae,P[2]=Ve,P[3]=_e,J.clearBufferuiv(J.COLOR,0,P)):(N[0]=we,N[1]=Ae,N[2]=Ve,N[3]=_e,J.clearBufferiv(J.COLOR,0,N))}else he|=J.COLOR_BUFFER_BIT}ue&&(he|=J.DEPTH_BUFFER_BIT),ve&&(he|=J.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),he!==0&&J.clear(he)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",Nt,!1),t.removeEventListener("webglcontextcreationerror",nn,!1),it.dispose(),pt.dispose(),Ue.dispose(),R.dispose(),Ce.dispose(),st.dispose(),Oe.dispose(),tt.dispose(),We.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Li),Ee.removeEventListener("sessionend",wr),En.stop()};function ot(U){U.preventDefault(),Vg("WebGLRenderer: Context Lost."),B=!0}function Nt(){Vg("WebGLRenderer: Context Restored."),B=!1;const U=H.autoReset,ue=gt.enabled,ve=gt.autoUpdate,he=gt.needsUpdate,pe=gt.type;ke(),H.autoReset=U,gt.enabled=ue,gt.autoUpdate=ve,gt.needsUpdate=he,gt.type=pe}function nn(U){fn("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Kt(U){const ue=U.target;ue.removeEventListener("dispose",Kt),Zn(ue)}function Zn(U){xn(U),R.remove(U)}function xn(U){const ue=R.get(U).programs;ue!==void 0&&(ue.forEach(function(ve){We.releaseProgram(ve)}),U.isShaderMaterial&&We.releaseShaderCache(U))}this.renderBufferDirect=function(U,ue,ve,he,pe,G){ue===null&&(ue=Ot);const Q=pe.isMesh&&pe.matrixWorld.determinant()<0,se=fi(U,ue,ve,he,pe);lt.setMaterial(he,Q);let _e=ve.index,we=1;if(he.wireframe===!0){if(_e=Te.getWireframeAttribute(ve),_e===void 0)return;we=2}const Ae=ve.drawRange,Ve=ve.attributes.position;let Le=Ae.start*we,Ye=(Ae.start+Ae.count)*we;G!==null&&(Le=Math.max(Le,G.start*we),Ye=Math.min(Ye,(G.start+G.count)*we)),_e!==null?(Le=Math.max(Le,0),Ye=Math.min(Ye,_e.count)):Ve!=null&&(Le=Math.max(Le,0),Ye=Math.min(Ye,Ve.count));const Mt=Ye-Le;if(Mt<0||Mt===1/0)return;Oe.setup(pe,he,se,ve,_e);let ht,at=Ct;if(_e!==null&&(ht=Ne.get(_e),at=ne,at.setIndex(ht)),pe.isMesh)he.wireframe===!0?(lt.setLineWidth(he.wireframeLinewidth*Xt()),at.setMode(J.LINES)):at.setMode(J.TRIANGLES);else if(pe.isLine){let xt=he.linewidth;xt===void 0&&(xt=1),lt.setLineWidth(xt*Xt()),pe.isLineSegments?at.setMode(J.LINES):pe.isLineLoop?at.setMode(J.LINE_LOOP):at.setMode(J.LINE_STRIP)}else pe.isPoints?at.setMode(J.POINTS):pe.isSprite&&at.setMode(J.TRIANGLES);if(pe.isBatchedMesh)if(pe._multiDrawInstances!==null)nf("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(pe._multiDrawStarts,pe._multiDrawCounts,pe._multiDrawCount,pe._multiDrawInstances);else if(Lt.get("WEBGL_multi_draw"))at.renderMultiDraw(pe._multiDrawStarts,pe._multiDrawCounts,pe._multiDrawCount);else{const xt=pe._multiDrawStarts,Qe=pe._multiDrawCounts,hn=pe._multiDrawCount,yt=_e?Ne.get(_e).bytesPerElement:1,Nn=R.get(he).currentProgram.getUniforms();for(let an=0;an<hn;an++)Nn.setValue(J,"_gl_DrawID",an),at.render(xt[an]/yt,Qe[an])}else if(pe.isInstancedMesh)at.renderInstances(Le,Mt,pe.count);else if(ve.isInstancedBufferGeometry){const xt=ve._maxInstanceCount!==void 0?ve._maxInstanceCount:1/0,Qe=Math.min(ve.instanceCount,xt);at.renderInstances(Le,Mt,Qe)}else at.render(Le,Mt)};function Gi(U,ue,ve){U.transparent===!0&&U.side===Xs&&U.forceSinglePass===!1?(U.side=Vi,U.needsUpdate=!0,Wn(U,ue,ve),U.side=Xo,U.needsUpdate=!0,Wn(U,ue,ve),U.side=Xs):Wn(U,ue,ve)}this.compile=function(U,ue,ve=null){ve===null&&(ve=U),V=Ue.get(ve),V.init(ue),T.push(V),ve.traverseVisible(function(pe){pe.isLight&&pe.layers.test(ue.layers)&&(V.pushLight(pe),pe.castShadow&&V.pushShadow(pe))}),U!==ve&&U.traverseVisible(function(pe){pe.isLight&&pe.layers.test(ue.layers)&&(V.pushLight(pe),pe.castShadow&&V.pushShadow(pe))}),V.setupLights();const he=new Set;return U.traverse(function(pe){if(!(pe.isMesh||pe.isPoints||pe.isLine||pe.isSprite))return;const G=pe.material;if(G)if(Array.isArray(G))for(let Q=0;Q<G.length;Q++){const se=G[Q];Gi(se,ve,pe),he.add(se)}else Gi(G,ve,pe),he.add(G)}),V=T.pop(),he},this.compileAsync=function(U,ue,ve=null){const he=this.compile(U,ue,ve);return new Promise(pe=>{function G(){if(he.forEach(function(Q){R.get(Q).currentProgram.isReady()&&he.delete(Q)}),he.size===0){pe(U);return}setTimeout(G,10)}Lt.get("KHR_parallel_shader_compile")!==null?G():setTimeout(G,10)})};let Ii=null;function to(U){Ii&&Ii(U)}function Li(){En.stop()}function wr(){En.start()}const En=new r_;En.setAnimationLoop(to),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(U){Ii=U,Ee.setAnimationLoop(U),U===null?En.stop():En.start()},Ee.addEventListener("sessionstart",Li),Ee.addEventListener("sessionend",wr),this.render=function(U,ue){if(ue!==void 0&&ue.isCamera!==!0){fn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;const ve=Ee.enabled===!0&&Ee.isPresenting===!0,he=M!==null&&(W===null||ve)&&M.begin(C,W);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ue.parent===null&&ue.matrixWorldAutoUpdate===!0&&ue.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(ue),ue=Ee.getCamera()),U.isScene===!0&&U.onBeforeRender(C,U,ue,W),V=Ue.get(U,T.length),V.init(ue),T.push(V),Qt.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),Je.setFromProjectionMatrix(Qt,ms,ue.reversedDepth),vt=this.localClippingEnabled,Ze=Fe.init(this.clippingPlanes,vt),k=pt.get(U,A.length),k.init(),A.push(k),Ee.enabled===!0&&Ee.isPresenting===!0){const Q=C.xr.getDepthSensingMesh();Q!==null&&Jn(Q,ue,-1/0,C.sortObjects)}Jn(U,ue,0,C.sortObjects),k.finish(),C.sortObjects===!0&&k.sort(qe,De),Vt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,Vt&&it.addToRenderList(k,U),this.info.render.frame++,Ze===!0&&Fe.beginShadows();const pe=V.state.shadowsArray;if(gt.render(pe,U,ue),Ze===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(he&&M.hasRenderPass())===!1){const Q=k.opaque,se=k.transmissive;if(V.setupLights(),ue.isArrayCamera){const _e=ue.cameras;if(se.length>0)for(let we=0,Ae=_e.length;we<Ae;we++){const Ve=_e[we];no(Q,se,U,Ve)}Vt&&it.render(U);for(let we=0,Ae=_e.length;we<Ae;we++){const Ve=_e[we];Si(k,U,Ve,Ve.viewport)}}else se.length>0&&no(Q,se,U,ue),Vt&&it.render(U),Si(k,U,ue)}W!==null&&$===0&&(le.updateMultisampleRenderTarget(W),le.updateRenderTargetMipmap(W)),he&&M.end(C),U.isScene===!0&&U.onAfterRender(C,U,ue),Oe.resetDefaultState(),X=-1,re=null,T.pop(),T.length>0?(V=T[T.length-1],Ze===!0&&Fe.setGlobalState(C.clippingPlanes,V.state.camera)):V=null,A.pop(),A.length>0?k=A[A.length-1]:k=null};function Jn(U,ue,ve,he){if(U.visible===!1)return;if(U.layers.test(ue.layers)){if(U.isGroup)ve=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(ue);else if(U.isLight)V.pushLight(U),U.castShadow&&V.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||Je.intersectsSprite(U)){he&&Bt.setFromMatrixPosition(U.matrixWorld).applyMatrix4(Qt);const Q=st.update(U),se=U.material;se.visible&&k.push(U,Q,se,ve,Bt.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||Je.intersectsObject(U))){const Q=st.update(U),se=U.material;if(he&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Bt.copy(U.boundingSphere.center)):(Q.boundingSphere===null&&Q.computeBoundingSphere(),Bt.copy(Q.boundingSphere.center)),Bt.applyMatrix4(U.matrixWorld).applyMatrix4(Qt)),Array.isArray(se)){const _e=Q.groups;for(let we=0,Ae=_e.length;we<Ae;we++){const Ve=_e[we],Le=se[Ve.materialIndex];Le&&Le.visible&&k.push(U,Q,Le,ve,Bt.z,Ve)}}else se.visible&&k.push(U,Q,se,ve,Bt.z,null)}}const G=U.children;for(let Q=0,se=G.length;Q<se;Q++)Jn(G[Q],ue,ve,he)}function Si(U,ue,ve,he){const{opaque:pe,transmissive:G,transparent:Q}=U;V.setupLightsView(ve),Ze===!0&&Fe.setGlobalState(C.clippingPlanes,ve),he&&lt.viewport(ee.copy(he)),pe.length>0&&Er(pe,ue,ve),G.length>0&&Er(G,ue,ve),Q.length>0&&Er(Q,ue,ve),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function no(U,ue,ve,he){if((ve.isScene===!0?ve.overrideMaterial:null)!==null)return;if(V.state.transmissionRenderTarget[he.id]===void 0){const Le=Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float");V.state.transmissionRenderTarget[he.id]=new vs(1,1,{generateMipmaps:!0,type:Le?Qs:nr,minFilter:Ho,samples:Math.max(4,qt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:un.workingColorSpace})}const G=V.state.transmissionRenderTarget[he.id],Q=he.viewport||ee;G.setSize(Q.z*C.transmissionResolutionScale,Q.w*C.transmissionResolutionScale);const se=C.getRenderTarget(),_e=C.getActiveCubeFace(),we=C.getActiveMipmapLevel();C.setRenderTarget(G),C.getClearColor(q),ae=C.getClearAlpha(),ae<1&&C.setClearColor(16777215,.5),C.clear(),Vt&&it.render(ve);const Ae=C.toneMapping;C.toneMapping=gs;const Ve=he.viewport;if(he.viewport!==void 0&&(he.viewport=void 0),V.setupLightsView(he),Ze===!0&&Fe.setGlobalState(C.clippingPlanes,he),Er(U,ve,he),le.updateMultisampleRenderTarget(G),le.updateRenderTargetMipmap(G),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let Ye=0,Mt=ue.length;Ye<Mt;Ye++){const ht=ue[Ye],{object:at,geometry:xt,material:Qe,group:hn}=ht;if(Qe.side===Xs&&at.layers.test(he.layers)){const yt=Qe.side;Qe.side=Vi,Qe.needsUpdate=!0,li(at,ve,he,xt,Qe,hn),Qe.side=yt,Qe.needsUpdate=!0,Le=!0}}Le===!0&&(le.updateMultisampleRenderTarget(G),le.updateRenderTargetMipmap(G))}C.setRenderTarget(se,_e,we),C.setClearColor(q,ae),Ve!==void 0&&(he.viewport=Ve),C.toneMapping=Ae}function Er(U,ue,ve){const he=ue.isScene===!0?ue.overrideMaterial:null;for(let pe=0,G=U.length;pe<G;pe++){const Q=U[pe],{object:se,geometry:_e,group:we}=Q;let Ae=Q.material;Ae.allowOverride===!0&&he!==null&&(Ae=he),se.layers.test(ve.layers)&&li(se,ue,ve,_e,Ae,we)}}function li(U,ue,ve,he,pe,G){U.onBeforeRender(C,ue,ve,he,pe,G),U.modelViewMatrix.multiplyMatrices(ve.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),pe.onBeforeRender(C,ue,ve,he,U,G),pe.transparent===!0&&pe.side===Xs&&pe.forceSinglePass===!1?(pe.side=Vi,pe.needsUpdate=!0,C.renderBufferDirect(ve,ue,he,pe,U,G),pe.side=Xo,pe.needsUpdate=!0,C.renderBufferDirect(ve,ue,he,pe,U,G),pe.side=Xs):C.renderBufferDirect(ve,ue,he,pe,U,G),U.onAfterRender(C,ue,ve,he,pe,G)}function Wn(U,ue,ve){ue.isScene!==!0&&(ue=Ot);const he=R.get(U),pe=V.state.lights,G=V.state.shadowsArray,Q=pe.state.version,se=We.getParameters(U,pe.state,G,ue,ve),_e=We.getProgramCacheKey(se);let we=he.programs;he.environment=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?ue.environment:null,he.fog=ue.fog;const Ae=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap;he.envMap=Ce.get(U.envMap||he.environment,Ae),he.envMapRotation=he.environment!==null&&U.envMap===null?ue.environmentRotation:U.envMapRotation,we===void 0&&(U.addEventListener("dispose",Kt),we=new Map,he.programs=we);let Ve=we.get(_e);if(Ve!==void 0){if(he.currentProgram===Ve&&he.lightsStateVersion===Q)return bs(U,se),Ve}else se.uniforms=We.getUniforms(U),U.onBeforeCompile(se,C),Ve=We.acquireProgram(se,_e),we.set(_e,Ve),he.uniforms=se.uniforms;const Le=he.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Le.clippingPlanes=Fe.uniform),bs(U,se),he.needsLights=Qn(U),he.lightsStateVersion=Q,he.needsLights&&(Le.ambientLightColor.value=pe.state.ambient,Le.lightProbe.value=pe.state.probe,Le.directionalLights.value=pe.state.directional,Le.directionalLightShadows.value=pe.state.directionalShadow,Le.spotLights.value=pe.state.spot,Le.spotLightShadows.value=pe.state.spotShadow,Le.rectAreaLights.value=pe.state.rectArea,Le.ltc_1.value=pe.state.rectAreaLTC1,Le.ltc_2.value=pe.state.rectAreaLTC2,Le.pointLights.value=pe.state.point,Le.pointLightShadows.value=pe.state.pointShadow,Le.hemisphereLights.value=pe.state.hemi,Le.directionalShadowMatrix.value=pe.state.directionalShadowMatrix,Le.spotLightMatrix.value=pe.state.spotLightMatrix,Le.spotLightMap.value=pe.state.spotLightMap,Le.pointShadowMatrix.value=pe.state.pointShadowMatrix),he.currentProgram=Ve,he.uniformsList=null,Ve}function Yr(U){if(U.uniformsList===null){const ue=U.currentProgram.getUniforms();U.uniformsList=Kd.seqWithValue(ue.seq,U.uniforms)}return U.uniformsList}function bs(U,ue){const ve=R.get(U);ve.outputColorSpace=ue.outputColorSpace,ve.batching=ue.batching,ve.batchingColor=ue.batchingColor,ve.instancing=ue.instancing,ve.instancingColor=ue.instancingColor,ve.instancingMorph=ue.instancingMorph,ve.skinning=ue.skinning,ve.morphTargets=ue.morphTargets,ve.morphNormals=ue.morphNormals,ve.morphColors=ue.morphColors,ve.morphTargetsCount=ue.morphTargetsCount,ve.numClippingPlanes=ue.numClippingPlanes,ve.numIntersection=ue.numClipIntersection,ve.vertexAlphas=ue.vertexAlphas,ve.vertexTangents=ue.vertexTangents,ve.toneMapping=ue.toneMapping}function fi(U,ue,ve,he,pe){ue.isScene!==!0&&(ue=Ot),le.resetTextureUnits();const G=ue.fog,Q=he.isMeshStandardMaterial||he.isMeshLambertMaterial||he.isMeshPhongMaterial?ue.environment:null,se=W===null?C.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Ol,_e=he.isMeshStandardMaterial||he.isMeshLambertMaterial&&!he.envMap||he.isMeshPhongMaterial&&!he.envMap,we=Ce.get(he.envMap||Q,_e),Ae=he.vertexColors===!0&&!!ve.attributes.color&&ve.attributes.color.itemSize===4,Ve=!!ve.attributes.tangent&&(!!he.normalMap||he.anisotropy>0),Le=!!ve.morphAttributes.position,Ye=!!ve.morphAttributes.normal,Mt=!!ve.morphAttributes.color;let ht=gs;he.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(ht=C.toneMapping);const at=ve.morphAttributes.position||ve.morphAttributes.normal||ve.morphAttributes.color,xt=at!==void 0?at.length:0,Qe=R.get(he),hn=V.state.lights;if(Ze===!0&&(vt===!0||U!==re)){const Sn=U===re&&he.id===X;Fe.setState(he,U,Sn)}let yt=!1;he.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==hn.state.version||Qe.outputColorSpace!==se||pe.isBatchedMesh&&Qe.batching===!1||!pe.isBatchedMesh&&Qe.batching===!0||pe.isBatchedMesh&&Qe.batchingColor===!0&&pe.colorTexture===null||pe.isBatchedMesh&&Qe.batchingColor===!1&&pe.colorTexture!==null||pe.isInstancedMesh&&Qe.instancing===!1||!pe.isInstancedMesh&&Qe.instancing===!0||pe.isSkinnedMesh&&Qe.skinning===!1||!pe.isSkinnedMesh&&Qe.skinning===!0||pe.isInstancedMesh&&Qe.instancingColor===!0&&pe.instanceColor===null||pe.isInstancedMesh&&Qe.instancingColor===!1&&pe.instanceColor!==null||pe.isInstancedMesh&&Qe.instancingMorph===!0&&pe.morphTexture===null||pe.isInstancedMesh&&Qe.instancingMorph===!1&&pe.morphTexture!==null||Qe.envMap!==we||he.fog===!0&&Qe.fog!==G||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Fe.numPlanes||Qe.numIntersection!==Fe.numIntersection)||Qe.vertexAlphas!==Ae||Qe.vertexTangents!==Ve||Qe.morphTargets!==Le||Qe.morphNormals!==Ye||Qe.morphColors!==Mt||Qe.toneMapping!==ht||Qe.morphTargetsCount!==xt)&&(yt=!0):(yt=!0,Qe.__version=he.version);let Nn=Qe.currentProgram;yt===!0&&(Nn=Wn(he,ue,pe));let an=!1,Dt=!1,sn=!1;const en=Nn.getUniforms(),At=Qe.uniforms;if(lt.useProgram(Nn.program)&&(an=!0,Dt=!0,sn=!0),he.id!==X&&(X=he.id,Dt=!0),an||re!==U){lt.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),en.setValue(J,"projectionMatrix",U.projectionMatrix),en.setValue(J,"viewMatrix",U.matrixWorldInverse);const wi=en.map.cameraPosition;wi!==void 0&&wi.setValue(J,$t.setFromMatrixPosition(U.matrixWorld)),qt.logarithmicDepthBuffer&&en.setValue(J,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(he.isMeshPhongMaterial||he.isMeshToonMaterial||he.isMeshLambertMaterial||he.isMeshBasicMaterial||he.isMeshStandardMaterial||he.isShaderMaterial)&&en.setValue(J,"isOrthographic",U.isOrthographicCamera===!0),re!==U&&(re=U,Dt=!0,sn=!0)}if(Qe.needsLights&&(hn.state.directionalShadowMap.length>0&&en.setValue(J,"directionalShadowMap",hn.state.directionalShadowMap,le),hn.state.spotShadowMap.length>0&&en.setValue(J,"spotShadowMap",hn.state.spotShadowMap,le),hn.state.pointShadowMap.length>0&&en.setValue(J,"pointShadowMap",hn.state.pointShadowMap,le)),pe.isSkinnedMesh){en.setOptional(J,pe,"bindMatrix"),en.setOptional(J,pe,"bindMatrixInverse");const Sn=pe.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),en.setValue(J,"boneTexture",Sn.boneTexture,le))}pe.isBatchedMesh&&(en.setOptional(J,pe,"batchingTexture"),en.setValue(J,"batchingTexture",pe._matricesTexture,le),en.setOptional(J,pe,"batchingIdTexture"),en.setValue(J,"batchingIdTexture",pe._indirectTexture,le),en.setOptional(J,pe,"batchingColorTexture"),pe._colorsTexture!==null&&en.setValue(J,"batchingColorTexture",pe._colorsTexture,le));const An=ve.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&et.update(pe,ve,Nn),(Dt||Qe.receiveShadow!==pe.receiveShadow)&&(Qe.receiveShadow=pe.receiveShadow,en.setValue(J,"receiveShadow",pe.receiveShadow)),(he.isMeshStandardMaterial||he.isMeshLambertMaterial||he.isMeshPhongMaterial)&&he.envMap===null&&ue.environment!==null&&(At.envMapIntensity.value=ue.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=lE()),Dt&&(en.setValue(J,"toneMappingExposure",C.toneMappingExposure),Qe.needsLights&&bi(At,sn),G&&he.fog===!0&&ct.refreshFogUniforms(At,G),ct.refreshMaterialUniforms(At,he,Pe,j,V.state.transmissionRenderTarget[U.id]),Kd.upload(J,Yr(Qe),At,le)),he.isShaderMaterial&&he.uniformsNeedUpdate===!0&&(Kd.upload(J,Yr(Qe),At,le),he.uniformsNeedUpdate=!1),he.isSpriteMaterial&&en.setValue(J,"center",pe.center),en.setValue(J,"modelViewMatrix",pe.modelViewMatrix),en.setValue(J,"normalMatrix",pe.normalMatrix),en.setValue(J,"modelMatrix",pe.matrixWorld),he.isShaderMaterial||he.isRawShaderMaterial){const Sn=he.uniformsGroups;for(let wi=0,Di=Sn.length;wi<Di;wi++){const ro=Sn[wi];tt.update(ro,Nn),tt.bind(ro,Nn)}}return Nn}function bi(U,ue){U.ambientLightColor.needsUpdate=ue,U.lightProbe.needsUpdate=ue,U.directionalLights.needsUpdate=ue,U.directionalLightShadows.needsUpdate=ue,U.pointLights.needsUpdate=ue,U.pointLightShadows.needsUpdate=ue,U.spotLights.needsUpdate=ue,U.spotLightShadows.needsUpdate=ue,U.rectAreaLights.needsUpdate=ue,U.hemisphereLights.needsUpdate=ue}function Qn(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(U,ue,ve){const he=R.get(U);he.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,he.__autoAllocateDepthBuffer===!1&&(he.__useRenderToTexture=!1),R.get(U.texture).__webglTexture=ue,R.get(U.depthTexture).__webglTexture=he.__autoAllocateDepthBuffer?void 0:ve,he.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,ue){const ve=R.get(U);ve.__webglFramebuffer=ue,ve.__useDefaultFramebuffer=ue===void 0};const Mi=J.createFramebuffer();this.setRenderTarget=function(U,ue=0,ve=0){W=U,O=ue,$=ve;let he=null,pe=!1,G=!1;if(U){const se=R.get(U);if(se.__useDefaultFramebuffer!==void 0){lt.bindFramebuffer(J.FRAMEBUFFER,se.__webglFramebuffer),ee.copy(U.viewport),Z.copy(U.scissor),ie=U.scissorTest,lt.viewport(ee),lt.scissor(Z),lt.setScissorTest(ie),X=-1;return}else if(se.__webglFramebuffer===void 0)le.setupRenderTarget(U);else if(se.__hasExternalTextures)le.rebindTextures(U,R.get(U.texture).__webglTexture,R.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const Ae=U.depthTexture;if(se.__boundDepthTexture!==Ae){if(Ae!==null&&R.has(Ae)&&(U.width!==Ae.image.width||U.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(U)}}const _e=U.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(G=!0);const we=R.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(we[ue])?he=we[ue][ve]:he=we[ue],pe=!0):U.samples>0&&le.useMultisampledRTT(U)===!1?he=R.get(U).__webglMultisampledFramebuffer:Array.isArray(we)?he=we[ve]:he=we,ee.copy(U.viewport),Z.copy(U.scissor),ie=U.scissorTest}else ee.copy(fe).multiplyScalar(Pe).floor(),Z.copy(xe).multiplyScalar(Pe).floor(),ie=Re;if(ve!==0&&(he=Mi),lt.bindFramebuffer(J.FRAMEBUFFER,he)&&lt.drawBuffers(U,he),lt.viewport(ee),lt.scissor(Z),lt.setScissorTest(ie),pe){const se=R.get(U.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+ue,se.__webglTexture,ve)}else if(G){const se=ue;for(let _e=0;_e<U.textures.length;_e++){const we=R.get(U.textures[_e]);J.framebufferTextureLayer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+_e,we.__webglTexture,ve,se)}}else if(U!==null&&ve!==0){const se=R.get(U.texture);J.framebufferTexture2D(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,se.__webglTexture,ve)}X=-1},this.readRenderTargetPixels=function(U,ue,ve,he,pe,G,Q,se=0){if(!(U&&U.isWebGLRenderTarget)){fn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=R.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Q!==void 0&&(_e=_e[Q]),_e){lt.bindFramebuffer(J.FRAMEBUFFER,_e);try{const we=U.textures[se],Ae=we.format,Ve=we.type;if(U.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+se),!qt.textureFormatReadable(Ae)){fn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(Ve)){fn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ue>=0&&ue<=U.width-he&&ve>=0&&ve<=U.height-pe&&J.readPixels(ue,ve,he,pe,Ge.convert(Ae),Ge.convert(Ve),G)}finally{const we=W!==null?R.get(W).__webglFramebuffer:null;lt.bindFramebuffer(J.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(U,ue,ve,he,pe,G,Q,se=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=R.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Q!==void 0&&(_e=_e[Q]),_e)if(ue>=0&&ue<=U.width-he&&ve>=0&&ve<=U.height-pe){lt.bindFramebuffer(J.FRAMEBUFFER,_e);const we=U.textures[se],Ae=we.format,Ve=we.type;if(U.textures.length>1&&J.readBuffer(J.COLOR_ATTACHMENT0+se),!qt.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Le=J.createBuffer();J.bindBuffer(J.PIXEL_PACK_BUFFER,Le),J.bufferData(J.PIXEL_PACK_BUFFER,G.byteLength,J.STREAM_READ),J.readPixels(ue,ve,he,pe,Ge.convert(Ae),Ge.convert(Ve),0);const Ye=W!==null?R.get(W).__webglFramebuffer:null;lt.bindFramebuffer(J.FRAMEBUFFER,Ye);const Mt=J.fenceSync(J.SYNC_GPU_COMMANDS_COMPLETE,0);return J.flush(),await u1(J,Mt,4),J.bindBuffer(J.PIXEL_PACK_BUFFER,Le),J.getBufferSubData(J.PIXEL_PACK_BUFFER,0,G),J.deleteBuffer(Le),J.deleteSync(Mt),G}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,ue=null,ve=0){const he=Math.pow(2,-ve),pe=Math.floor(U.image.width*he),G=Math.floor(U.image.height*he),Q=ue!==null?ue.x:0,se=ue!==null?ue.y:0;le.setTexture2D(U,0),J.copyTexSubImage2D(J.TEXTURE_2D,ve,0,0,Q,se,pe,G),lt.unbindTexture()};const io=J.createFramebuffer(),ei=J.createFramebuffer();this.copyTextureToTexture=function(U,ue,ve=null,he=null,pe=0,G=0){let Q,se,_e,we,Ae,Ve,Le,Ye,Mt;const ht=U.isCompressedTexture?U.mipmaps[G]:U.image;if(ve!==null)Q=ve.max.x-ve.min.x,se=ve.max.y-ve.min.y,_e=ve.isBox3?ve.max.z-ve.min.z:1,we=ve.min.x,Ae=ve.min.y,Ve=ve.isBox3?ve.min.z:0;else{const At=Math.pow(2,-pe);Q=Math.floor(ht.width*At),se=Math.floor(ht.height*At),U.isDataArrayTexture?_e=ht.depth:U.isData3DTexture?_e=Math.floor(ht.depth*At):_e=1,we=0,Ae=0,Ve=0}he!==null?(Le=he.x,Ye=he.y,Mt=he.z):(Le=0,Ye=0,Mt=0);const at=Ge.convert(ue.format),xt=Ge.convert(ue.type);let Qe;ue.isData3DTexture?(le.setTexture3D(ue,0),Qe=J.TEXTURE_3D):ue.isDataArrayTexture||ue.isCompressedArrayTexture?(le.setTexture2DArray(ue,0),Qe=J.TEXTURE_2D_ARRAY):(le.setTexture2D(ue,0),Qe=J.TEXTURE_2D),J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,ue.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,ue.unpackAlignment);const hn=J.getParameter(J.UNPACK_ROW_LENGTH),yt=J.getParameter(J.UNPACK_IMAGE_HEIGHT),Nn=J.getParameter(J.UNPACK_SKIP_PIXELS),an=J.getParameter(J.UNPACK_SKIP_ROWS),Dt=J.getParameter(J.UNPACK_SKIP_IMAGES);J.pixelStorei(J.UNPACK_ROW_LENGTH,ht.width),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,ht.height),J.pixelStorei(J.UNPACK_SKIP_PIXELS,we),J.pixelStorei(J.UNPACK_SKIP_ROWS,Ae),J.pixelStorei(J.UNPACK_SKIP_IMAGES,Ve);const sn=U.isDataArrayTexture||U.isData3DTexture,en=ue.isDataArrayTexture||ue.isData3DTexture;if(U.isDepthTexture){const At=R.get(U),An=R.get(ue),Sn=R.get(At.__renderTarget),wi=R.get(An.__renderTarget);lt.bindFramebuffer(J.READ_FRAMEBUFFER,Sn.__webglFramebuffer),lt.bindFramebuffer(J.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let Di=0;Di<_e;Di++)sn&&(J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,R.get(U).__webglTexture,pe,Ve+Di),J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,R.get(ue).__webglTexture,G,Mt+Di)),J.blitFramebuffer(we,Ae,Q,se,Le,Ye,Q,se,J.DEPTH_BUFFER_BIT,J.NEAREST);lt.bindFramebuffer(J.READ_FRAMEBUFFER,null),lt.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else if(pe!==0||U.isRenderTargetTexture||R.has(U)){const At=R.get(U),An=R.get(ue);lt.bindFramebuffer(J.READ_FRAMEBUFFER,io),lt.bindFramebuffer(J.DRAW_FRAMEBUFFER,ei);for(let Sn=0;Sn<_e;Sn++)sn?J.framebufferTextureLayer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,At.__webglTexture,pe,Ve+Sn):J.framebufferTexture2D(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,At.__webglTexture,pe),en?J.framebufferTextureLayer(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,An.__webglTexture,G,Mt+Sn):J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,An.__webglTexture,G),pe!==0?J.blitFramebuffer(we,Ae,Q,se,Le,Ye,Q,se,J.COLOR_BUFFER_BIT,J.NEAREST):en?J.copyTexSubImage3D(Qe,G,Le,Ye,Mt+Sn,we,Ae,Q,se):J.copyTexSubImage2D(Qe,G,Le,Ye,we,Ae,Q,se);lt.bindFramebuffer(J.READ_FRAMEBUFFER,null),lt.bindFramebuffer(J.DRAW_FRAMEBUFFER,null)}else en?U.isDataTexture||U.isData3DTexture?J.texSubImage3D(Qe,G,Le,Ye,Mt,Q,se,_e,at,xt,ht.data):ue.isCompressedArrayTexture?J.compressedTexSubImage3D(Qe,G,Le,Ye,Mt,Q,se,_e,at,ht.data):J.texSubImage3D(Qe,G,Le,Ye,Mt,Q,se,_e,at,xt,ht):U.isDataTexture?J.texSubImage2D(J.TEXTURE_2D,G,Le,Ye,Q,se,at,xt,ht.data):U.isCompressedTexture?J.compressedTexSubImage2D(J.TEXTURE_2D,G,Le,Ye,ht.width,ht.height,at,ht.data):J.texSubImage2D(J.TEXTURE_2D,G,Le,Ye,Q,se,at,xt,ht);J.pixelStorei(J.UNPACK_ROW_LENGTH,hn),J.pixelStorei(J.UNPACK_IMAGE_HEIGHT,yt),J.pixelStorei(J.UNPACK_SKIP_PIXELS,Nn),J.pixelStorei(J.UNPACK_SKIP_ROWS,an),J.pixelStorei(J.UNPACK_SKIP_IMAGES,Dt),G===0&&ue.generateMipmaps&&J.generateMipmap(Qe),lt.unbindTexture()},this.initRenderTarget=function(U){R.get(U).__webglFramebuffer===void 0&&le.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?le.setTextureCube(U,0):U.isData3DTexture?le.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?le.setTexture2DArray(U,0):le.setTexture2D(U,0),lt.unbindTexture()},this.resetState=function(){O=0,$=0,W=null,lt.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ms}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=un._getDrawingBufferColorSpace(e),t.unpackColorSpace=un._getUnpackColorSpace()}}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),uE=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase()),Ov=n=>{const e=uE(n);return e.charAt(0).toUpperCase()+e.slice(1)},d_=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim(),dE=n=>{for(const e in n)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var fE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=I.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:a,iconNode:c,...f},h)=>I.createElement("svg",{ref:h,...fE,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:d_("lucide",o),...!a&&!dE(f)&&{"aria-hidden":"true"},...f},[...c.map(([u,p])=>I.createElement(u,p)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=(n,e)=>{const t=I.forwardRef(({className:r,...o},a)=>I.createElement(pE,{ref:a,iconNode:e,className:d_(`lucide-${cE(Ov(n))}`,`lucide-${n}`,r),...o}));return t.displayName=Ov(n),t};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],mE=rr("crosshair",hE);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],vE=rr("download",gE);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],_E=rr("folder-open",xE);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],SE=rr("hash",yE);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=[["path",{d:"m12 15 4 4",key:"lnac28"}],["path",{d:"M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z",key:"nlhkjb"}],["path",{d:"m5 8 4 4",key:"j6kj7e"}]],ME=rr("magnet",bE);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],EE=rr("maximize-2",wE);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=[["path",{d:"M5 12h14",key:"1ays0h"}]],CE=rr("minus",TE);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],RE=rr("plus",AE);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],IE=rr("redo-2",PE);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],DE=rr("rotate-ccw",LE);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],UE=rr("save",NE);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],FE=rr("undo-2",kE);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],Bv=rr("wand-sparkles",OE),BE=(n,e)=>{if(!n)return 0;let t=0,r=0;for(let o=0;o<e.length&&t<n.length;o++)e[o]===n[t]?(r+=2,t++):r-=.05;return t===n.length?r:-999};function zE({open:n,items:e,onRun:t,onClose:r}){const[o,a]=I.useState(""),[c,f]=I.useState(0),h=I.useMemo(()=>{const u=o.toLowerCase().trim();return e.map(_=>({it:_,score:BE(u,_.searchText)})).filter(_=>u.length===0||_.score>-999).sort((_,x)=>x.score-_.score||_.it.label.localeCompare(x.it.label)).map(_=>_.it)},[e,o]);return I.useEffect(()=>{n&&(a(""),f(0))},[n]),I.useEffect(()=>{if(!n)return;const u=p=>{if(p.key==="Escape")p.preventDefault(),r();else if(p.key==="ArrowDown")p.preventDefault(),f(_=>(_+1)%Math.max(h.length,1));else if(p.key==="ArrowUp")p.preventDefault(),f(_=>(_-1+Math.max(h.length,1))%Math.max(h.length,1));else if(p.key==="Enter"){p.preventDefault();const _=h[c];_&&_.enabled&&t(_.id)}};return window.addEventListener("keydown",u,!0),()=>window.removeEventListener("keydown",u,!0)},[h,c,r,t,n]),n?w.jsx("div",{style:{position:"fixed",inset:0,background:"#00000066",zIndex:1300},onMouseDown:r,children:w.jsxs("div",{style:{width:520,maxHeight:460,margin:"80px auto 0",background:"#1b1d22",border:"1px solid #343a46",borderRadius:10,boxShadow:"0 16px 48px #000000aa",overflow:"hidden"},onMouseDown:u=>u.stopPropagation(),children:[w.jsx("div",{style:{padding:10,borderBottom:"1px solid #2f343f"},children:w.jsx("input",{autoFocus:!0,value:o,onChange:u=>a(u.target.value),placeholder:"Search commands...",style:{width:"100%",boxSizing:"border-box",background:"#16181d",border:"1px solid #353a45",color:"#d5dbea",borderRadius:6,padding:"8px 10px",fontSize:13,outline:"none"}})}),w.jsx("div",{style:{maxHeight:390,overflowY:"auto",padding:8},children:h.map((u,p)=>w.jsxs("button",{onClick:()=>u.enabled&&t(u.id),disabled:!u.enabled,onMouseEnter:()=>f(p),style:{width:"100%",textAlign:"left",border:p===c?"1px solid #5f81bb":"1px solid #313744",background:p===c?"#42649a":"#21252d",color:u.enabled?"#e8edf8":"#778099",borderRadius:6,padding:"8px 10px",fontSize:12,marginBottom:4,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[w.jsx("span",{children:u.label}),w.jsx("span",{style:{fontSize:10,opacity:.7},children:u.shortcut||u.category})]},u.id))})]})}):null}const ut=n=>({id:n,type:"float",label:n}),bt=()=>({id:"out",type:"float",label:"Out"}),zv=n=>({id:n,type:"vec2",label:n}),vh=n=>({id:n,type:"vec3",label:n}),xh=(n="Out")=>({id:"out",type:"vec3",label:n}),Se=(n,e,t,r,o,a)=>({type:n,default:e,min:t,max:r,step:o,options:a}),Et={constant:{type:"constant",label:"Constant",category:"gen",inputs:[],outputs:[bt()],params:{value:Se("float",.5,-1,1,.01)}},time:{type:"time",label:"Time",category:"gen",inputs:[],outputs:[bt()],params:{speed:Se("float",1,0,10,.1)}},uv:{type:"uv",label:"UV",category:"gen",inputs:[],outputs:[{id:"out",type:"vec2",label:"UV"}],params:{}},uv_x:{type:"uv_x",label:"UV.x",category:"gen",inputs:[],outputs:[bt()],params:{}},uv_y:{type:"uv_y",label:"UV.y",category:"gen",inputs:[],outputs:[bt()],params:{}},uniform_color:{type:"uniform_color",label:"Uniform Color",category:"gen",inputs:[],outputs:[{id:"out",type:"vec3",label:"Color"}],params:{r:Se("float",.5,0,1,.01),g:Se("float",.5,0,1,.01),b:Se("float",.5,0,1,.01)}},gaussian_noise:{type:"gaussian_noise",label:"Gaussian Noise",category:"gen",inputs:[],outputs:[bt()],params:{scale:Se("float",12,1,64,1),mean:Se("float",.5,0,1,.01),stdDev:Se("float",.16,.01,.5,.01),seed:Se("int",1337,0,2147483647,1),tileOffsetX:Se("float",0,-1e4,1e4,.01),tileOffsetY:Se("float",0,-1e4,1e4,.01),nonSquare:Se("bool",!0)}},tile_generator:{type:"tile_generator",label:"Tile Generator",category:"gen",inputs:[],outputs:[bt()],params:{scale:Se("float",6,1,64,1),shape:Se("select","square",void 0,void 0,void 0,["square","dot"]),radius:Se("float",.42,.05,.49,.01),variation:Se("float",.25,0,1,.01),seed:Se("int",1337,0,2147483647,1),tileOffsetX:Se("float",0,-1e4,1e4,.01),tileOffsetY:Se("float",0,-1e4,1e4,.01),nonSquare:Se("bool",!0)}},noise:{type:"noise",label:"Noise fBm v2",category:"gen",inputs:[],outputs:[bt()],params:{scale:Se("float",6,.25,64,.25),octaves:Se("float",4,1,8,1),seed:Se("int",1337,0,2147483647,1),tileOffsetX:Se("float",0,-1e4,1e4,.01),tileOffsetY:Se("float",0,-1e4,1e4,.01),nonSquare:Se("bool",!0)}},perlin:{type:"perlin",label:"Perlin Noise v2",category:"gen",inputs:[],outputs:[bt()],params:{scale:Se("float",32,1,64,1),disorder:Se("float",0,0,1,.01),disorderSpeed:Se("float",1,0,2,.01),seed:Se("int",1337,0,2147483647,1),tileOffsetX:Se("float",0,-1e4,1e4,.01),tileOffsetY:Se("float",0,-1e4,1e4,.01),nonSquare:Se("bool",!0)}},worley:{type:"worley",label:"Worley Noise v2",category:"gen",inputs:[],outputs:[{id:"out",type:"vec4",label:"F1/F2/Edge/ID"}],params:{scale:Se("float",5,1,20,.5),jitter:Se("float",1,0,1,.05),seed:Se("int",1337,0,2147483647,1),tileOffsetX:Se("float",0,-1e4,1e4,.01),tileOffsetY:Se("float",0,-1e4,1e4,.01),nonSquare:Se("bool",!0)}},voronoi:{type:"voronoi",label:"Voronoi",category:"gen",inputs:[],outputs:[{id:"out",type:"vec4",label:"F1/F2/Edge/ID"}],params:{scale:Se("float",5,1,64,.5),jitter:Se("float",1,0,1,.05),seed:Se("int",1337,0,2147483647,1),tileOffsetX:Se("float",0,-1e4,1e4,.01),tileOffsetY:Se("float",0,-1e4,1e4,.01),nonSquare:Se("bool",!0)}},bnw_spots2_v2:{type:"bnw_spots2_v2",label:"BnW Spots 2 (v2)",category:"noises",inputs:[],outputs:[bt()],params:{scale:Se("int",10,1,32,1),tileOffsetX:Se("float",0,-1e4,1e4,.01),tileOffsetY:Se("float",0,-1e4,1e4,.01),seed:Se("int",1337,0,2147483647,1),nonSquareExpansion:Se("bool",!0),grainAmount:Se("float",.22,0,1,.005),grainThreshold:Se("float",.86,0,1,.005),contrast:Se("float",1.08,.25,3,.01)}},shape:{type:"shape",label:"Shape SDF",category:"gen",inputs:[],outputs:[bt()],params:{type:Se("select","circle",void 0,void 0,void 0,["circle","square","ring","triangle","polygon","star"]),posX:Se("float",.5,0,1,.01),posY:Se("float",.5,0,1,.01),scale:Se("float",.5,.05,2,.01),rad:Se("float",.5,0,1,.01),blur:Se("float",.01,.001,.5,.001),thick:Se("float",.05,.001,.5,.001)}},split:{type:"split",label:"Split Vec4",category:"math",inputs:[{id:"in",type:"vec4",label:"In"}],outputs:[{id:"x",type:"float",label:"X"},{id:"y",type:"float",label:"Y"},{id:"z",type:"float",label:"Z"},{id:"w",type:"float",label:"W"},{id:"xyz",type:"vec3",label:"XYZ"}],params:{}},gradient:{type:"gradient",label:"Gradient",category:"gen",inputs:[],outputs:[bt()],params:{type:Se("select","linear",void 0,void 0,void 0,["linear","radial","angular"]),angle:Se("float",0,0,360,1)}},checker:{type:"checker",label:"Checker",category:"gen",inputs:[],outputs:[bt()],params:{scale:Se("float",8,1,32,1)}},panner:{type:"panner",label:"Panner",category:"filter",inputs:[ut("In")],outputs:[bt()],params:{speedX:Se("float",.1,-2,2,.01),speedY:Se("float",0,-2,2,.01)}},tile_sampler:{type:"tile_sampler",label:"Tile Sampler",category:"filter",inputs:[ut("In")],outputs:[bt()],params:{scale:Se("float",6,1,64,1),angle:Se("float",0,-180,180,1),tileOffsetX:Se("float",0,-1e4,1e4,.01),tileOffsetY:Se("float",0,-1e4,1e4,.01)}},add:{type:"add",label:"Add A+B",category:"math",inputs:[ut("A"),ut("B")],outputs:[bt()],params:{b:Se("float",0,-2,2,.01)}},subtract:{type:"subtract",label:"Subtract A-B",category:"math",inputs:[ut("A"),ut("B")],outputs:[bt()],params:{b:Se("float",0,-2,2,.01)}},multiply:{type:"multiply",label:"Multiply A×B",category:"math",inputs:[ut("A"),ut("B")],outputs:[bt()],params:{b:Se("float",1,-4,4,.01)}},divide:{type:"divide",label:"Divide A÷B",category:"math",inputs:[ut("A"),ut("B")],outputs:[bt()],params:{b:Se("float",2,.01,8,.01)}},power:{type:"power",label:"Power A^B",category:"math",inputs:[ut("Base"),ut("Exp")],outputs:[bt()],params:{exp:Se("float",2,.1,8,.1)}},oneminus:{type:"oneminus",label:"1 - x",category:"math",inputs:[ut("In")],outputs:[bt()],params:{}},abs:{type:"abs",label:"Abs |x|",category:"math",inputs:[ut("In")],outputs:[bt()],params:{}},negate:{type:"negate",label:"Negate -x",category:"math",inputs:[ut("In")],outputs:[bt()],params:{}},sqrt:{type:"sqrt",label:"Sqrt √x",category:"math",inputs:[ut("In")],outputs:[bt()],params:{}},sign:{type:"sign",label:"Sign",category:"math",inputs:[ut("In")],outputs:[bt()],params:{}},frac:{type:"frac",label:"Frac",category:"math",inputs:[ut("In")],outputs:[bt()],params:{}},floor:{type:"floor",label:"Floor",category:"math",inputs:[ut("In")],outputs:[bt()],params:{}},ceil:{type:"ceil",label:"Ceil",category:"math",inputs:[ut("In")],outputs:[bt()],params:{}},min2:{type:"min2",label:"Min A,B",category:"math",inputs:[ut("A"),ut("B")],outputs:[bt()],params:{b:Se("float",.5,-2,2,.01)}},max2:{type:"max2",label:"Max A,B",category:"math",inputs:[ut("A"),ut("B")],outputs:[bt()],params:{b:Se("float",.5,-2,2,.01)}},mod:{type:"mod",label:"Mod A%B",category:"math",inputs:[ut("A"),ut("B")],outputs:[bt()],params:{b:Se("float",.5,.01,4,.01)}},clamp01:{type:"clamp01",label:"Clamp 0-1",category:"math",inputs:[ut("In")],outputs:[bt()],params:{}},clamp:{type:"clamp",label:"Clamp lo..hi",category:"math",inputs:[ut("In")],outputs:[bt()],params:{lo:Se("float",0,-2,2,.01),hi:Se("float",1,-2,2,.01)}},remap:{type:"remap",label:"Remap",category:"math",inputs:[ut("In")],outputs:[bt()],params:{inLo:Se("float",0,-2,2,.01),inHi:Se("float",1,-2,2,.01),outLo:Se("float",0,-2,2,.01),outHi:Se("float",1,-2,2,.01)}},sin:{type:"sin",label:"Sin",category:"trig",inputs:[ut("In")],outputs:[bt()],params:{freq:Se("float",1,.1,20,.1),phase:Se("float",0,0,6.28,.05)}},cos:{type:"cos",label:"Cos",category:"trig",inputs:[ut("In")],outputs:[bt()],params:{freq:Se("float",1,.1,20,.1),phase:Se("float",0,0,6.28,.05)}},tan:{type:"tan",label:"Tan",category:"trig",inputs:[ut("In")],outputs:[bt()],params:{freq:Se("float",1,.1,10,.1)}},atan2node:{type:"atan2node",label:"Atan2 Y,X",category:"trig",inputs:[ut("Y"),ut("X")],outputs:[bt()],params:{}},lerp:{type:"lerp",label:"Lerp A,B,T",category:"interp",inputs:[ut("A"),ut("B"),ut("T")],outputs:[bt()],params:{t:Se("float",.5,0,1,.01)}},smoothstep:{type:"smoothstep",label:"Smoothstep",category:"interp",inputs:[ut("In")],outputs:[bt()],params:{lo:Se("float",0,-1,2,.01),hi:Se("float",1,-1,2,.01)}},step:{type:"step",label:"Step edge,x",category:"interp",inputs:[ut("Edge"),ut("X")],outputs:[bt()],params:{edge:Se("float",.5,-1,2,.01)}},ifgt:{type:"ifgt",label:"If A>B ? C:D",category:"interp",inputs:[ut("A"),ut("B"),ut("T"),ut("F")],outputs:[bt()],params:{b:Se("float",.5,-2,2,.01)}},blend:{type:"blend",label:"Blend",category:"filter",inputs:[ut("A"),ut("B")],outputs:[bt()],params:{mode:Se("select","mix",void 0,void 0,void 0,["mix","add","multiply","screen","overlay","difference","dodge","burn"]),opacity:Se("float",.5,0,1,.01)}},levels:{type:"levels",label:"Levels",category:"filter",inputs:[ut("In")],outputs:[bt()],params:{inMin:Se("float",0,0,1,.01),inMax:Se("float",1,0,1,.01),gamma:Se("float",1,.1,4,.05)}},histogram_scan:{type:"histogram_scan",label:"Histogram Scan",category:"filter",inputs:[ut("In")],outputs:[bt()],params:{position:Se("float",.5,0,1,.01),width:Se("float",.1,.001,.5,.005),contrast:Se("float",1,.1,8,.1)}},histogram_range:{type:"histogram_range",label:"Histogram Range",category:"filter",inputs:[ut("In")],outputs:[bt()],params:{inMin:Se("float",.15,0,1,.005),inMax:Se("float",.85,0,1,.005),outMin:Se("float",0,0,1,.005),outMax:Se("float",1,0,1,.005)}},curve:{type:"curve",label:"Curve",category:"filter",inputs:[ut("In")],outputs:[bt()],params:{lift:Se("float",0,-1,1,.01),gamma:Se("float",1,.1,4,.01),gain:Se("float",1,0,2,.01)}},warp:{type:"warp",label:"Domain Warp",category:"filter",inputs:[ut("In"),zv("Warp")],outputs:[bt()],params:{strength:Se("float",.15,0,.5,.005)}},vector_warp:{type:"vector_warp",label:"Vector Warp Grayscale",category:"filter",inputs:[ut("In"),zv("Vector")],outputs:[bt()],params:{intensity:Se("float",.15,0,1,.005),centered:Se("bool",!0),tile:Se("bool",!0)}},directional_warp:{type:"directional_warp",label:"Directional Warp",category:"filter",inputs:[ut("In"),ut("Warp")],outputs:[bt()],params:{amount:Se("float",.15,0,1,.005),angle:Se("float",0,-3.141592653589793,3.141592653589793,.01)}},disorder:{type:"disorder",label:"Disorder",category:"filter",inputs:[ut("In")],outputs:[bt()],params:{amount:Se("float",.08,0,1,.005),scale:Se("float",8,.25,64,.25),speed:Se("float",.5,0,8,.01),seed:Se("int",1337,0,2147483647,1)}},slope_blur:{type:"slope_blur",label:"Slope Blur",category:"filter",inputs:[ut("In"),ut("Slope")],outputs:[bt()],params:{intensity:Se("float",2,0,16,.1),samples:Se("float",4,1,8,1)}},non_uniform_blur:{type:"non_uniform_blur",label:"Non-Uniform Blur Grayscale",category:"filter",inputs:[ut("In"),ut("BlurMap")],outputs:[bt()],params:{radius:Se("float",2,0,12,.1),samples:Se("float",4,1,4,1)}},transform_2d:{type:"transform_2d",label:"Transformation 2D",category:"filter",inputs:[ut("In")],outputs:[bt()],params:{offsetX:Se("float",0,-2,2,.005),offsetY:Se("float",0,-2,2,.005),rotation:Se("float",0,-180,180,.5),scale:Se("float",1,.05,8,.01),tile:Se("bool",!0)}},safe_transform:{type:"safe_transform",label:"Safe Transform Grayscale",category:"filter",inputs:[ut("In")],outputs:[bt()],params:{offsetX:Se("float",0,-2,2,.005),offsetY:Se("float",0,-2,2,.005),scale:Se("float",1,.05,8,.01),tile:Se("bool",!1)}},flood_fill:{type:"flood_fill",label:"Flood Fill",category:"filter",inputs:[ut("In")],outputs:[bt()],params:{scale:Se("float",8,1,64,1),threshold:Se("float",.1,0,1,.01),seed:Se("int",1337,0,2147483647,1),tileOffsetX:Se("float",0,-1e4,1e4,.01),tileOffsetY:Se("float",0,-1e4,1e4,.01),nonSquare:Se("bool",!0)}},edge_detect:{type:"edge_detect",label:"Edge Detect",category:"filter",inputs:[ut("In")],outputs:[bt()],params:{radius:Se("float",1,.5,4,.1),strength:Se("float",1.2,.1,5,.1)}},blur:{type:"blur",label:"Blur",category:"filter",inputs:[ut("In")],outputs:[bt()],params:{amount:Se("float",.05,.001,.5,.001),center:Se("float",0,-1,1,.01)}},highpass_grayscale:{type:"highpass_grayscale",label:"Highpass Grayscale",category:"filter",inputs:[ut("In")],outputs:[bt()],params:{radius:Se("float",1,.5,8,.1),intensity:Se("float",1,.1,4,.05)}},height_to_normal:{type:"height_to_normal",label:"Height to Normal",category:"filter",inputs:[ut("Height")],outputs:[xh("Normal")],params:{strength:Se("float",2,.01,4,.02),radius:Se("float",1,.5,4,.1),flipY:Se("bool",!1)}},normal_combine:{type:"normal_combine",label:"Normal Combine",category:"filter",inputs:[vh("Base"),vh("Detail")],outputs:[xh("Normal")],params:{strength:Se("float",1,0,2,.01)}},normal_normalize:{type:"normal_normalize",label:"Normal Normalize",category:"filter",inputs:[vh("Normal")],outputs:[xh("Normal")],params:{flipY:Se("bool",!1)}},atom_input:{type:"atom_input",label:"Atom Input",category:"util",inputs:[],outputs:[bt()],params:{}},atom_input_a:{type:"atom_input_a",label:"Atom In A",category:"util",inputs:[],outputs:[bt()],params:{}},atom_input_b:{type:"atom_input_b",label:"Atom In B",category:"util",inputs:[],outputs:[bt()],params:{}},atom_input_c:{type:"atom_input_c",label:"Atom In C",category:"util",inputs:[],outputs:[bt()],params:{}},atom_input_d:{type:"atom_input_d",label:"Atom In D",category:"util",inputs:[],outputs:[bt()],params:{}},atom_graph:{type:"atom_graph",label:"Atom Graph",category:"util",inputs:[ut("A"),ut("B"),ut("C"),ut("D")],outputs:[bt()],params:{}},remote:{type:"remote",label:"Remote",category:"util",inputs:[],outputs:[],params:{target:Se("select","",void 0,void 0,void 0,[]),key:Se("select","",void 0,void 0,void 0,[]),value:Se("float",.5,0,1,.01),label:Se("select","",void 0,void 0,void 0,[])}},buffer:{type:"buffer",label:"Buffer",category:"filter",inputs:[ut("In")],outputs:[{id:"out",type:"float",label:"Out"},{id:"lod",type:"float",label:"LOD"}],params:{}},output:{type:"output",label:"Output",category:"output",inputs:[{id:"baseColor",type:"vec3",label:"BaseColor"},{id:"roughness",type:"float",label:"Roughness"},{id:"normal",type:"vec3",label:"Normal"},{id:"height",type:"float",label:"Height"},{id:"metallic",type:"float",label:"Metallic"},{id:"ao",type:"float",label:"AO"}],outputs:[],params:{}},output_baseColor:{type:"output_baseColor",label:"Output BaseColor",category:"output",inputs:[{id:"baseColor",type:"vec3",label:"BaseColor"}],outputs:[],params:{}},output_roughness:{type:"output_roughness",label:"Output Roughness",category:"output",inputs:[{id:"roughness",type:"float",label:"Roughness"}],outputs:[],params:{}},output_normal:{type:"output_normal",label:"Output Normal",category:"output",inputs:[{id:"normal",type:"vec3",label:"Normal"}],outputs:[],params:{}},output_height:{type:"output_height",label:"Output Height",category:"output",inputs:[{id:"height",type:"float",label:"Height"}],outputs:[],params:{}},output_metallic:{type:"output_metallic",label:"Output Metallic",category:"output",inputs:[{id:"metallic",type:"float",label:"Metallic"}],outputs:[],params:{}},output_ao:{type:"output_ao",label:"Output AO",category:"output",inputs:[{id:"ao",type:"float",label:"AO"}],outputs:[],params:{}}},$E={defaultInputMaxConnections:1},VE=n=>{var e;return{type:n.type==="select"?"enum":n.type,default:n.default,ui:{min:n.min,max:n.max,step:n.step,dropdown:(e=n.options)==null?void 0:e.map(t=>({label:t,value:t}))}}},$v=(n,e,t)=>({...n,constraints:{maxConnections:e?t.defaultInputMaxConnections:Number.POSITIVE_INFINITY,allowedTypes:[n.type]}}),HE=(n,e)=>{const t={...$E};return{id:n.type,label:n.label,category:n.category,inputs:n.inputs.map(r=>$v(r,!0,t)),outputs:n.outputs.map(r=>$v(r,!1,t)),params:Object.fromEntries(Object.entries(n.params).map(([r,o])=>[r,VE(o)])),constraints:{singleConnectionInputs:!0}}},Hn=Object.fromEntries(Object.entries(Et).map(([n,e])=>[n,HE(e)]));Hn.output&&(Hn.output.inputs[0].constraints={maxConnections:1,allowedTypes:["float","vec3","vec4"]},Hn.output.inputs[1].constraints={maxConnections:1,allowedTypes:["float"]},Hn.output.inputs[2].constraints={maxConnections:1,allowedTypes:["float","vec3","vec4"]},Hn.output.inputs[3].constraints={maxConnections:1,allowedTypes:["float"]},Hn.output.inputs[4].constraints={maxConnections:1,allowedTypes:["float"]},Hn.output.inputs[5].constraints={maxConnections:1,allowedTypes:["float"]});Hn.output_baseColor&&(Hn.output_baseColor.inputs[0].constraints={maxConnections:1,allowedTypes:["float","vec3","vec4"]});Hn.output_roughness&&(Hn.output_roughness.inputs[0].constraints={maxConnections:1,allowedTypes:["float"]});Hn.output_normal&&(Hn.output_normal.inputs[0].constraints={maxConnections:1,allowedTypes:["float","vec3","vec4"]});Hn.output_height&&(Hn.output_height.inputs[0].constraints={maxConnections:1,allowedTypes:["float"]});Hn.output_metallic&&(Hn.output_metallic.inputs[0].constraints={maxConnections:1,allowedTypes:["float"]});Hn.output_ao&&(Hn.output_ao.inputs[0].constraints={maxConnections:1,allowedTypes:["float"]});const Vv=n=>Hn[n],Pi={gen:{label:"GEN",color:"#1e3a5f"},noises:{label:"NOISES",color:"#155e75"},math:{label:"MATH",color:"#312e81"},trig:{label:"TRIG",color:"#4c1d95"},interp:{label:"INTERP",color:"#14532d"},filter:{label:"FILTER",color:"#713f12"},util:{label:"UTIL",color:"#0e4d6b"},output:{label:"OUT",color:"#7f1d1d"}},GE=(n,e)=>e!=="output"&&!n.startsWith("atom_input"),zo="all";function WE({open:n,compatibleType:e,onSelect:t,onClose:r}){const[o,a]=I.useState(""),[c,f]=I.useState(0),[h,u]=I.useState(zo),p=I.useMemo(()=>{const m=o.toLowerCase().trim();return Object.entries(Et).filter(([b,E])=>{if(!GE(b,E.category)||m&&!E.label.toLowerCase().includes(m)&&!b.includes(m)&&!E.category.includes(m))return!1;if(!e)return!0;const g=E.inputs.some(P=>P.type===e),y=E.outputs.some(P=>P.type===e);return g||y}).map(([b,E])=>{let g=0;if(e){const y=E.inputs.some(N=>N.type===e),P=E.outputs.some(N=>N.type===e);g=y?2:P?1:0}return{type:b,def:E,score:g}}).sort((b,E)=>E.score!==b.score?E.score-b.score:b.def.category!==E.def.category?b.def.category.localeCompare(E.def.category):b.def.label.localeCompare(E.def.label))},[e,o]),_=I.useMemo(()=>{const m=new Map;return p.forEach(b=>m.set(b.def.category,(m.get(b.def.category)||0)+1)),Array.from(m.entries()).sort((b,E)=>{var P,N;const g=((P=Pi[b[0]])==null?void 0:P.label)||b[0],y=((N=Pi[E[0]])==null?void 0:N.label)||E[0];return g.localeCompare(y)})},[p]),x=I.useMemo(()=>h===zo?p:p.filter(m=>m.def.category===h),[h,p]);return I.useEffect(()=>{n&&(a(""),f(0),u(zo))},[n]),I.useEffect(()=>{h!==zo&&(_.some(([m])=>m===h)||u(zo))},[h,_]),I.useEffect(()=>{if(x.length===0){c!==0&&f(0);return}c>x.length-1&&f(x.length-1)},[c,x.length]),I.useEffect(()=>{if(!n)return;const m=b=>{if(b.key==="Escape")b.preventDefault(),r();else if(b.key==="ArrowDown")b.preventDefault(),f(E=>(E+1)%Math.max(x.length,1));else if(b.key==="ArrowUp")b.preventDefault(),f(E=>(E-1+Math.max(x.length,1))%Math.max(x.length,1));else if(b.key==="Enter"){b.preventDefault();const E=x[c];E&&t(E.type)}};return window.addEventListener("keydown",m,!0),()=>window.removeEventListener("keydown",m,!0)},[c,r,t,n,x]),n?w.jsx("div",{style:{position:"fixed",inset:0,background:"#00000066",zIndex:1250},onMouseDown:r,children:w.jsxs("div",{style:{width:560,maxHeight:560,margin:"88px auto 0",background:"#1b1d22",border:"1px solid #343a46",borderRadius:10,overflow:"hidden"},onMouseDown:m=>m.stopPropagation(),children:[w.jsxs("div",{style:{padding:10,borderBottom:"1px solid #2f343f"},children:[w.jsx("input",{autoFocus:!0,value:o,onChange:m=>a(m.target.value),placeholder:"Add node (name, type, category)...",style:{width:"100%",boxSizing:"border-box",background:"#16181d",border:"1px solid #353a45",color:"#d5dbea",borderRadius:6,padding:"8px 10px",fontSize:13,outline:"none"}}),w.jsxs("div",{style:{marginTop:8,display:"flex",alignItems:"center",justifyContent:"space-between",gap:8},children:[w.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},children:[w.jsxs("button",{onClick:()=>{u(zo),f(0)},style:{border:h===zo?"1px solid #5f81bb":"1px solid #313744",background:h===zo?"#33527f":"#21252d",color:"#d9e5ff",borderRadius:6,fontSize:10,padding:"4px 8px",cursor:"pointer"},children:["ALL (",p.length,")"]}),_.map(([m,b])=>{const E=Pi[m],g=h===m;return w.jsxs("button",{onClick:()=>{u(m),f(0)},style:{border:g?`1px solid ${(E==null?void 0:E.color)||"#5f81bb"}`:"1px solid #313744",background:g?"#2b3445":"#21252d",color:g?"#f1f6ff":"#aab7d4",borderRadius:6,fontSize:10,padding:"4px 8px",cursor:"pointer"},title:m,children:[((E==null?void 0:E.label)||m).toUpperCase()," (",b,")"]},m)})]}),e&&w.jsxs("div",{style:{fontSize:10,color:"#9fb1d8",letterSpacing:.3},children:["Compat: ",w.jsx("span",{style:{color:"#d7e5ff"},children:e})]})]})]}),w.jsxs("div",{style:{maxHeight:470,overflowY:"auto",padding:8},children:[x.map((m,b)=>{var E;return w.jsxs("button",{onClick:()=>t(m.type),onMouseEnter:()=>f(b),style:{width:"100%",textAlign:"left",border:b===c?"1px solid #5f81bb":"1px solid #313744",background:b===c?"#42649a":"#21252d",color:"#e8edf8",borderRadius:6,padding:"7px 10px",fontSize:12,marginBottom:4,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[w.jsxs("span",{style:{display:"flex",flexDirection:"column",gap:2},children:[w.jsx("span",{style:{color:"#e8edf8"},children:m.def.label}),w.jsxs("span",{style:{fontSize:10,color:"#95a4c7"},children:[m.type,m.score>0&&e?` | ${m.score===2?"input match":"output match"}`:""]})]}),w.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[w.jsxs("span",{style:{fontSize:10,color:"#9ca9c9"},children:["IN ",m.def.inputs.length," | OUT ",m.def.outputs.length]}),w.jsx("span",{style:{fontSize:10,opacity:.8},children:(((E=Pi[m.def.category])==null?void 0:E.label)||m.def.category).toUpperCase()})]})]},m.type)}),x.length===0&&w.jsx("div",{style:{padding:"16px 10px",color:"#8f9ab5",fontSize:12,textAlign:"center"},children:"No nodes match this filter."})]})]})}):null}function jE({x:n,y:e,items:t,onRun:r,onClose:o}){var u;const[a,c]=I.useState(0),f=I.useMemo(()=>t.filter(p=>p.enabled),[t]),h=(u=f[a])==null?void 0:u.op.id;return I.useEffect(()=>{c(0)},[t]),I.useEffect(()=>{const p=_=>{if(_.key==="Escape"){_.preventDefault(),o();return}if(_.key==="ArrowDown")_.preventDefault(),c(x=>(x+1)%Math.max(f.length,1));else if(_.key==="ArrowUp")_.preventDefault(),c(x=>(x-1+Math.max(f.length,1))%Math.max(f.length,1));else if(_.key==="Enter"){_.preventDefault();const x=f[a];x&&r(x.op.id)}};return window.addEventListener("keydown",p,!0),()=>window.removeEventListener("keydown",p,!0)},[f,a,o,r]),w.jsx("div",{style:{position:"fixed",left:n,top:e,width:260,maxHeight:340,overflowY:"auto",background:"#1b1d22f6",border:"1px solid #343a46",borderRadius:8,boxShadow:"0 14px 38px #000000aa",zIndex:1200,padding:6},onMouseDown:p=>p.stopPropagation(),onContextMenu:p=>p.preventDefault(),children:t.map(p=>w.jsxs("button",{onClick:()=>p.enabled&&r(p.op.id),disabled:!p.enabled,style:{width:"100%",textAlign:"left",border:p.enabled&&p.op.id===h?"1px solid #5f81bb":"1px solid #313744",background:p.enabled&&p.op.id===h?"#42649a":"#21252d",color:p.enabled?"#e8edf8":"#778099",borderRadius:4,padding:"5px 8px",fontSize:11,marginBottom:2,cursor:p.enabled?"pointer":"default",display:"flex",justifyContent:"space-between",alignItems:"center"},onMouseEnter:()=>{if(!p.enabled)return;const _=f.findIndex(x=>x.op.id===p.op.id);_>=0&&c(_)},children:[w.jsx("span",{children:p.op.label}),w.jsx("span",{style:{opacity:.65,fontSize:10},children:p.op.shortcut||p.op.category})]},p.op.id))})}const Ud=["gen","noises","math","trig","interp","filter"],Hv=(n,e)=>e!=="output"&&!n.startsWith("atom_input"),er=100,_h=36,Gv="nt.node.usage.v1";function XE({x:n,y:e,graphX:t,graphY:r,onAddNode:o,onAddFrame:a,onClose:c}){var ee,Z,ie;const[f,h]=I.useState(null),[u,p]=I.useState(-1),[_,x]=I.useState(-1),[m,b]=I.useState(""),[E,g]=I.useState({}),y=I.useRef(null),P=I.useRef(null),N=I.useMemo(()=>Math.max(er+20,Math.min(window.innerWidth-er-20,n)),[n]),k=I.useMemo(()=>Math.max(er+20,Math.min(window.innerHeight-er-20,e)),[e]);I.useEffect(()=>{try{const q=localStorage.getItem(Gv);q&&g(JSON.parse(q))}catch{}},[]);const V=I.useCallback((q,ae)=>{const z=E[q[0]]||0,j=E[ae[0]]||0;return z!==j?j-z:q[1].label.localeCompare(ae[1].label)},[E]),A=I.useMemo(()=>{const q=new Map;return Ud.forEach(ae=>q.set(ae,[])),Object.entries(Et).forEach(([ae,z])=>{if(!Hv(ae,z.category))return;const j=z.category;q.has(j)&&q.get(j).push([ae,z])}),q.forEach(ae=>ae.sort(V)),q},[V]),T=m.trim().length>0,M=I.useMemo(()=>{if(!T)return[];const q=m.trim().toLowerCase();return Object.entries(Et).filter(([ae,z])=>Hv(ae,z.category)&&(z.label.toLowerCase().includes(q)||z.category.includes(q)||ae.includes(q))).sort(V)},[m,T,V]),C=I.useMemo(()=>T?M:f?A.get(f)||[]:[],[T,M,f,A]),B=C.length>0||T&&C.length===0,O=I.useCallback(q=>{const ae={...E,[q]:(E[q]||0)+1};g(ae);try{localStorage.setItem(Gv,JSON.stringify(ae))}catch{}o(q,t,r)},[E,o,t,r]);I.useEffect(()=>{const q=ae=>{if(ae.key==="Escape"){ae.preventDefault(),c();return}const z=parseInt(ae.key);if(z>=1&&z<=5&&!T){ae.preventDefault(),h(Ud[z-1]),x(-1);return}};return window.addEventListener("keydown",q,!0),()=>window.removeEventListener("keydown",q,!0)},[c,T]),I.useEffect(()=>{x(-1)},[f,m]),I.useEffect(()=>{y.current&&y.current.focus()},[]);const $=2*Math.PI/Ud.length,W=-Math.PI/2-$/2,X=q=>{const ae=W+q*$,z=ae+$,j=_h+6,Pe=er,qe=Math.cos(ae),De=Math.sin(ae),fe=Math.cos(z),xe=Math.sin(z),Re=$>Math.PI?1:0;return[`M ${qe*j} ${De*j}`,`L ${qe*Pe} ${De*Pe}`,`A ${Pe} ${Pe} 0 ${Re} 1 ${fe*Pe} ${xe*Pe}`,`L ${fe*j} ${xe*j}`,`A ${j} ${j} 0 ${Re} 0 ${qe*j} ${De*j}`,"Z"].join(" ")},re=q=>{const ae=W+(q+.5)*$,z=(_h+er)/2+4;return{x:Math.cos(ae)*z,y:Math.sin(ae)*z}};return w.jsxs("div",{ref:P,style:{position:"fixed",inset:0,zIndex:1300},onMouseDown:c,onContextMenu:q=>q.preventDefault(),children:[!B&&w.jsx("svg",{width:er*2+40,height:er*2+40,style:{position:"fixed",left:N-er-20,top:k-er-20,overflow:"visible",filter:"drop-shadow(0 8px 32px #00000099)"},onMouseDown:q=>q.stopPropagation(),children:w.jsxs("g",{transform:`translate(${er+20}, ${er+20})`,children:[Ud.map((q,ae)=>{var xe;const z=Pi[q],j=(z==null?void 0:z.color)||"#888",Pe=u===ae,qe=f===q,De=re(ae),fe=((xe=A.get(q))==null?void 0:xe.length)||0;return w.jsxs("g",{children:[w.jsx("path",{d:X(ae),fill:qe?`${j}2f`:Pe?`${j}1d`:"#1f2228",stroke:qe?`${j}94`:Pe?`${j}60`:"#353b46",strokeWidth:qe?1.5:1,style:{cursor:"pointer",transition:"fill 0.1s, stroke 0.1s"},onMouseEnter:()=>p(ae),onMouseLeave:()=>p(Re=>Re===ae?-1:Re),onMouseDown:Re=>{Re.stopPropagation(),h(Je=>Je===q?null:q)}}),w.jsx("text",{x:De.x,y:De.y-5,textAnchor:"middle",dominantBaseline:"middle",fill:qe||Pe?j:"#a0a8bc",fontSize:10,fontWeight:700,letterSpacing:.8,style:{pointerEvents:"none",fontFamily:"inherit"},children:(z==null?void 0:z.label)||q.toUpperCase()}),w.jsx("text",{x:De.x,y:De.y+9,textAnchor:"middle",dominantBaseline:"middle",fill:qe||Pe?`${j}c4`:"#6d7488",fontSize:8,style:{pointerEvents:"none",fontFamily:"inherit"},children:fe}),w.jsx("text",{x:De.x,y:De.y+22,textAnchor:"middle",dominantBaseline:"middle",fill:"#7a8399",fontSize:8,fontWeight:600,style:{pointerEvents:"none",fontFamily:"inherit"},children:ae+1})]},q)}),w.jsx("circle",{cx:0,cy:0,r:_h,fill:"#1c2027",stroke:f?`${(ee=Pi[f])==null?void 0:ee.color}66`:"#353b46",strokeWidth:1.5}),w.jsx("text",{x:0,y:-3,textAnchor:"middle",dominantBaseline:"middle",fill:"#a5aec2",fontSize:9,fontWeight:600,letterSpacing:.5,style:{pointerEvents:"none",fontFamily:"inherit"},children:"ADD"}),w.jsx("text",{x:0,y:10,textAnchor:"middle",dominantBaseline:"middle",fill:"#7a8399",fontSize:7,style:{pointerEvents:"none",fontFamily:"inherit"},children:"RMB"})]})}),!B&&w.jsxs("div",{style:{position:"fixed",left:N-84,top:k+er+8,width:168},onMouseDown:q=>q.stopPropagation(),children:[w.jsx("input",{ref:y,value:m,onChange:q=>b(q.target.value),placeholder:"Type to search...",className:"pie-search"}),a&&w.jsx("button",{onMouseDown:q=>{q.stopPropagation(),a(t,r)},className:"pie-list-back",style:{marginTop:6,width:"100%"},children:"Add Frame"})]}),B&&w.jsxs("div",{className:"pie-list",style:{left:N-110,top:k-180},onMouseDown:q=>q.stopPropagation(),children:[w.jsxs("div",{className:"pie-list-header",children:[T?w.jsxs("span",{className:"pie-list-title",children:["Search: ",m]}):w.jsx("span",{className:"pie-list-title",style:{color:(Z=Pi[f])==null?void 0:Z.color},children:((ie=Pi[f])==null?void 0:ie.label)||f}),w.jsx("button",{className:"pie-list-back",onClick:()=>{h(null),b("")},children:"Back"})]}),w.jsx("div",{className:"pie-list-search-wrap",children:w.jsx("input",{ref:y,value:m,onChange:q=>b(q.target.value),placeholder:"Filter...",className:"pie-search",autoFocus:!0})}),w.jsxs("div",{className:"pie-list-items",children:[C.map(([q,ae],z)=>{const j=Pi[ae.category];return w.jsxs("div",{className:`pie-node ${_===z?"pie-node-hl":""}`,onMouseEnter:()=>x(z),onMouseDown:Pe=>{Pe.stopPropagation(),O(q)},children:[w.jsx("span",{className:"pie-node-dot",style:{background:(j==null?void 0:j.color)||"#888"}}),w.jsx("span",{className:"pie-node-label",children:ae.label}),T&&w.jsx("span",{className:"pie-node-cat",style:{color:j==null?void 0:j.color},children:j==null?void 0:j.label})]},q)}),C.length===0&&w.jsx("div",{className:"pie-empty",children:"No matches"})]})]})]})}const Mm=n=>n.replace(/[^a-zA-Z0-9_]/g,"_"),YE=(n,e)=>`u_n${Mm(n)}_p${Mm(e)}`,qE=(n,e)=>{const t=Mm(n);return typeof e=="number"?`t_${t}_${e}`:`t_${t}`};class Wv{constructor(){this.uniforms={},this.textures=[]}setFloat(e,t){this.uniforms[e]={value:t}}setInt(e,t){this.uniforms[e]={value:Math.trunc(t)}}setBool(e,t){this.uniforms[e]={value:t}}setVec2(e,t){this.uniforms[e]={value:t}}setVec3(e,t){this.uniforms[e]={value:t}}setVec4(e,t){this.uniforms[e]={value:t}}bindTexture(e,t,r,o){this.textures.push({portName:qE(e,r),bindingIndex:r,texture:t,sampler:o})}getUniforms(){return this.uniforms}getTextures(){return this.textures}}const Al={baseColor:0,roughness:1,normal:2,height:3,metallic:4,ao:5},f_={baseColor:"output_baseColor",roughness:"output_roughness",normal:"output_normal",height:"output_height",metallic:"output_metallic",ao:"output_ao"},p_={output_baseColor:"baseColor",output_roughness:"roughness",output_normal:"normal",output_height:"height",output_metallic:"metallic",output_ao:"ao"},KE={0:"baseColor",1:"roughness",2:"normal",3:"height",4:"metallic",5:"ao"},ZE=[{id:"pbr_default",label:"PBR Default",targets:[{channel:"baseColor",fileSuffix:"basecolor",format:"png"},{channel:"roughness",fileSuffix:"roughness",format:"png"},{channel:"normal",fileSuffix:"normal",format:"png"},{channel:"height",fileSuffix:"height",format:"png"},{channel:"metallic",fileSuffix:"metallic",format:"png"},{channel:"ao",fileSuffix:"ao",format:"png"}]}],h_=n=>ZE.find(e=>e.id===n),_n=n=>n==="output"||Object.prototype.hasOwnProperty.call(p_,n),Wc=n=>p_[n]??null,JE=(n,e)=>n.nodes.some(t=>t.type===f_[e]),Ca=(n,e)=>{const t=n.nodes.find(r=>r.type===f_[e]);return t||(n.nodes.find(r=>r.type==="output")??null)},zl=n=>{const e={},t=new Map(n.nodes.map(a=>[a.id,a])),r={};for(const a of n.nodes){const c=Wc(a.type);c&&(r[c]=!0)}for(const a of n.edges){const c=t.get(a.toId);if(!c)continue;const f=Wc(c.type);f&&(e[f]=a)}const o=n.nodes.find(a=>a.type==="output");if(!o)return e;for(const a of n.edges){if(a.toId!==o.id)continue;const c=KE[a.toPort];c&&(r[c]||(e[c]=a))}return e},kd={fade1:{id:"fade1",signature:{args:[{name:"t",type:"f32"}],returns:"f32"},pure:!0,wgsl:"fn fade1(t: f32) -> f32 { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }"},fade2:{id:"fade2",signature:{args:[{name:"t",type:"vec2f"}],returns:"vec2f"},deps:["fade1"],pure:!0,wgsl:"fn fade2(t: vec2f) -> vec2f { return vec2f(fade1(t.x), fade1(t.y)); }"},hash_u32:{id:"hash_u32",signature:{args:[{name:"x0",type:"u32"}],returns:"u32"},pure:!0,wgsl:`
fn hash_u32(x0: u32) -> u32 {
  var x = x0;
  x = x ^ (x >> 16u);
  x = x * 0x7feb352du;
  x = x ^ (x >> 15u);
  x = x * 0x846ca68bu;
  x = x ^ (x >> 16u);
  return x;
}
`},hash2i_u32:{id:"hash2i_u32",signature:{args:[{name:"i",type:"vec2i"},{name:"seed",type:"u32"}],returns:"u32"},deps:["hash_u32"],pure:!0,wgsl:`
fn hash2i_u32(i: vec2<i32>, seed: u32) -> u32 {
  let xi = bitcast<u32>(i.x);
  let yi = bitcast<u32>(i.y);
  var h = seed ^ 0x9e3779b9u;
  h = h ^ hash_u32(xi + 0x85ebca6bu);
  h = hash_u32(h);
  h = h ^ hash_u32(yi + 0xc2b2ae35u);
  h = hash_u32(h);
  return h;
}
`},grad2i:{id:"grad2i",signature:{args:[{name:"h",type:"u32"}],returns:"vec2f"},pure:!0,wgsl:`
fn grad2i(h: u32) -> vec2f {
  let k = h & 7u;
  let d = 0.70710678118;
  switch (k) {
    case 0u: { return vec2f( 1.0,  0.0); }
    case 1u: { return vec2f(-1.0,  0.0); }
    case 2u: { return vec2f( 0.0,  1.0); }
    case 3u: { return vec2f( 0.0, -1.0); }
    case 4u: { return vec2f( d,    d   ); }
    case 5u: { return vec2f(-d,    d   ); }
    case 6u: { return vec2f( d,   -d   ); }
    default: { return vec2f(-d,   -d   ); }
  }
}
`},perlin2i_raw:{id:"perlin2i_raw",signature:{args:[{name:"p_in",type:"vec2f"},{name:"seed",type:"u32"}],returns:"f32"},deps:["fade2","grad2i","hash2i_u32"],pure:!0,wgsl:`
fn perlin2i_raw(p_in: vec2f, seed: u32) -> f32 {
  let i0 = vec2<i32>(floor(p_in));
  let f = fract(p_in);

  let i00 = i0;
  let i10 = i0 + vec2<i32>(1, 0);
  let i01 = i0 + vec2<i32>(0, 1);
  let i11 = i0 + vec2<i32>(1, 1);

  let g00 = grad2i(hash2i_u32(i00, seed));
  let g10 = grad2i(hash2i_u32(i10, seed));
  let g01 = grad2i(hash2i_u32(i01, seed));
  let g11 = grad2i(hash2i_u32(i11, seed));

  let d00 = dot(g00, f - vec2f(0.0, 0.0));
  let d10 = dot(g10, f - vec2f(1.0, 0.0));
  let d01 = dot(g01, f - vec2f(0.0, 1.0));
  let d11 = dot(g11, f - vec2f(1.0, 1.0));

  let u = fade2(f);
  let x0 = mix(d00, d10, u.x);
  let x1 = mix(d01, d11, u.x);
  return mix(x0, x1, u.y);
}
`},perlin2i:{id:"perlin2i",signature:{args:[{name:"p_in",type:"vec2f"},{name:"seed",type:"u32"}],returns:"f32"},deps:["perlin2i_raw"],pure:!0,wgsl:"fn perlin2i(p_in: vec2f, seed: u32) -> f32 { return clamp(perlin2i_raw(p_in, seed) * 0.5 + 0.5, 0.0, 1.0); }"},perlin2i_tiled_raw:{id:"perlin2i_tiled_raw",signature:{args:[{name:"p_in",type:"vec2f"},{name:"period_in",type:"f32"},{name:"seed",type:"u32"}],returns:"f32"},deps:["fade2","grad2i","hash2i_u32"],pure:!0,wgsl:`
fn perlin2i_tiled_raw(p_in: vec2f, period_in: f32, seed: u32) -> f32 {
  let per = max(1, i32(round(period_in)));
  let i0 = vec2<i32>(floor(p_in));
  let f = fract(p_in);

  let i00 = vec2<i32>(((i0.x % per) + per) % per, ((i0.y % per) + per) % per);
  let i10 = vec2<i32>((((i0.x + 1) % per) + per) % per, ((i0.y % per) + per) % per);
  let i01 = vec2<i32>(((i0.x % per) + per) % per, (((i0.y + 1) % per) + per) % per);
  let i11 = vec2<i32>((((i0.x + 1) % per) + per) % per, (((i0.y + 1) % per) + per) % per);

  let g00 = grad2i(hash2i_u32(i00, seed));
  let g10 = grad2i(hash2i_u32(i10, seed));
  let g01 = grad2i(hash2i_u32(i01, seed));
  let g11 = grad2i(hash2i_u32(i11, seed));

  let d00 = dot(g00, f - vec2f(0.0, 0.0));
  let d10 = dot(g10, f - vec2f(1.0, 0.0));
  let d01 = dot(g01, f - vec2f(0.0, 1.0));
  let d11 = dot(g11, f - vec2f(1.0, 1.0));

  let u = fade2(f);
  let x0 = mix(d00, d10, u.x);
  let x1 = mix(d01, d11, u.x);
  return mix(x0, x1, u.y);
}
`},perlin2i_tiled:{id:"perlin2i_tiled",signature:{args:[{name:"p_in",type:"vec2f"},{name:"period_in",type:"f32"},{name:"seed",type:"u32"}],returns:"f32"},deps:["perlin2i_tiled_raw"],pure:!0,wgsl:"fn perlin2i_tiled(p_in: vec2f, period_in: f32, seed: u32) -> f32 { return clamp(perlin2i_tiled_raw(p_in, period_in, seed) * 0.5 + 0.5, 0.0, 1.0); }"},hash01_px_seed:{id:"hash01_px_seed",signature:{args:[{name:"pixel_in",type:"vec2f"},{name:"seed",type:"u32"}],returns:"f32"},deps:["hash2i_u32"],pure:!0,wgsl:`
fn hash01_px_seed(pixel_in: vec2f, seed: u32) -> f32 {
  let px = vec2<i32>(floor(pixel_in));
  let h = hash2i_u32(px, seed);
  return f32(h) * (1.0 / 4294967295.0);
}
`},bnw_spots2_v2:{id:"bnw_spots2_v2",signature:{args:[{name:"uv_in",type:"vec2f"},{name:"pixel_in",type:"vec2f"},{name:"resolution",type:"vec2f"},{name:"scale_in",type:"f32"},{name:"tileOffset",type:"vec2f"},{name:"seed",type:"u32"},{name:"nonSquareExpansion",type:"f32"},{name:"grainAmount",type:"f32"},{name:"grainThreshold",type:"f32"},{name:"contrast",type:"f32"}],returns:"f32"},deps:["perlin2i_tiled","hash01_px_seed"],pure:!0,wgsl:`
fn bnw_spots2_v2(
  uv_in: vec2f,
  pixel_in: vec2f,
  resolution: vec2f,
  scale_in: f32,
  tileOffset: vec2f,
  seed: u32,
  nonSquareExpansion: f32,
  grainAmount: f32,
  grainThreshold: f32,
  contrast: f32
) -> f32 {
  var uv = uv_in;
  if (nonSquareExpansion > 0.5) {
    let aspect = resolution.x / max(resolution.y, 1.0);
    uv = vec2f(uv.x * aspect, uv.y);
  }

  let scale = clamp(round(scale_in), 1.0, 32.0);
  let p = uv * scale + tileOffset;
  let per = max(scale, 1.0);

  var q = p;
  var perQ = per;
  var sum = 0.0;
  var amp = 0.5;
  var norm = 0.0;
  sum += amp * perlin2i_tiled(q, perQ, seed ^ 0xa24baed4u); norm += amp; q *= 2.0; perQ *= 2.0; amp *= 0.5;
  sum += amp * perlin2i_tiled(q, perQ, seed ^ 0x9fb21c65u); norm += amp; q *= 2.0; perQ *= 2.0; amp *= 0.5;
  sum += amp * perlin2i_tiled(q, perQ, seed ^ 0xe2f3d8c9u); norm += amp; q *= 2.0; perQ *= 2.0; amp *= 0.5;
  sum += amp * perlin2i_tiled(q, perQ, seed ^ 0x1b56c4e8u); norm += amp;
  var base = select(0.0, sum / norm, norm > 0.0);
  base = smoothstep(0.35, 0.75, base);
  base = clamp((base - 0.5) * max(contrast, 0.001) + 0.5, 0.0, 1.0);

  let cluster = perlin2i_tiled(p * 2.0 + vec2f(13.2, -9.7), per * 2.0, seed ^ 0x51f2e4b7u);
  let th = clamp(grainThreshold + (cluster - 0.5) * 0.12, 0.0, 1.0);
  let grain = hash01_px_seed(pixel_in, seed ^ 0xc13fa9a9u);
  let pepper = select(0.0, 1.0, grain >= th);

  return clamp(base - clamp(grainAmount, 0.0, 1.0) * pepper, 0.0, 1.0);
}
`}},QE={hq:`const WGSL_PLUS_DEBUG_ATOMS: bool = false;

fn wmod(x: f32, y: f32) -> f32 { return x - y * floor(x / y); }
fn wmod2(x: vec2f, y: f32) -> vec2f { return x - y * floor(x / y); }
fn wmod2v(x: vec2f, y: vec2f) -> vec2f { return x - y * floor(x / y); }

// Example atom helpers for WGSL-Plus modular linking.
fn ag_fade1(t: f32) -> f32 { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }
fn ag_fade2(t: vec2f) -> vec2f { return vec2f(ag_fade1(t.x), ag_fade1(t.y)); }

const WGSL_PLUS_DEBUG_NOISE: bool = false;

fn hash2(p_in: vec2f) -> f32 {
  var p = fract(p_in * vec2f(234.345, 435.678));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

fn hash22(p: vec2f) -> vec2f {
  let d = vec2f(dot(p, vec2f(127.1, 311.7)), dot(p, vec2f(269.5, 183.3)));
  return -1.0 + 2.0 * fract(sin(d) * 43758.5453123);
}

fn vnoise(p_in: vec2f, per: f32, tile: bool) -> f32 {
  let i = floor(p_in);
  let f = fract(p_in);
  let u = f * f * (3.0 - 2.0 * f);
  let tileMode = tile || false;
  var i00 = i;
  var i10 = i + vec2f(1.0, 0.0);
  var i01 = i + vec2f(0.0, 1.0);
  var i11 = i + vec2f(1.0, 1.0);
  if (tileMode) {
    i00 = wmod2(i00, per);
    i10 = wmod2(i10, per);
    i01 = wmod2(i01, per);
    i11 = wmod2(i11, per);
  }
  return mix(mix(hash2(i00), hash2(i10), u.x), mix(hash2(i01), hash2(i11), u.x), u.y);
}

fn fbm(p_in: vec2f, oct: f32, per_in: f32, tileFlag: f32) -> f32 {
  var p = p_in;
  var per = per_in;
  var v: f32 = 0.0;
  var a: f32 = 0.5;
  var mx: f32 = 0.0;
  let tile = (tileFlag > 0.5) || false;
  for (var i: i32 = 0; i < 8; i++) {
    let m = select(0.0, 1.0, f32(i) + 0.5 <= oct);
    v += a * vnoise(p, per, tile) * m;
    mx += a * m;
    p *= 2.0;
    per *= 2.0;
    a *= 0.5;
  }
  return select(0.0, v / mx, mx > 0.0);
}

fn voro(p_in: vec2f, jt: f32, per: f32, tile: bool) -> vec4f {
  var n = floor(p_in);
  let f = fract(p_in);
  let tileMode = tile || false;
  if (tileMode) {
    n = wmod2(n, per);
  }
  var f1: f32 = 8.0;
  var f2: f32 = 8.0;
  var id = vec2f(0.0);
  for (var j: i32 = -1; j <= 1; j++) {
    for (var i: i32 = -1; i <= 1; i++) {
      let g = vec2f(f32(i), f32(j));
      var neighbor = n + g;
      if (tileMode) {
        neighbor = wmod2(neighbor, per);
      }
      let o = hash22(neighbor);
      let r = g + o * jt - f;
      let d = dot(r, r);
      if (d < f1) {
        f2 = f1;
        f1 = d;
        id = o;
      } else if (d < f2) {
        f2 = d;
      }
    }
  }
  return vec4f(sqrt(f1), sqrt(f2), sqrt(f2) - sqrt(f1), id.x);
}

const WGSL_PLUS_DEBUG_SDF: bool = false;

fn sdCircle(p: vec2f, r: f32) -> f32 { return length(p) - r; }

fn sdBox(p: vec2f, b: vec2f) -> f32 {
  let d = abs(p) - b;
  return length(max(d, vec2f(0.0))) + min(max(d.x, d.y), 0.0);
}

fn sdEquilateralTriangle(p_in: vec2f, r: f32) -> f32 {
  let k = sqrt(3.0);
  var p = p_in;
  p.x = abs(p.x) - r;
  p.y = p.y + r / k;
  if (p.x + k * p.y > 0.0) {
    p = vec2f(p.x - k * p.y, -k * p.x - p.y) / 2.0;
  }
  p.x -= clamp(p.x, -2.0 * r, 0.0);
  return -length(p) * sign(p.y);
}

fn sdPolygon(p_in: vec2f, r: f32, n: i32) -> f32 {
  let an = 3.141593 / f32(n);
  let bn = wmod(atan2(p_in.x, p_in.y), 2.0 * an) - an;
  var p = length(p_in) * vec2f(cos(bn), abs(sin(bn)));
  p -= r * vec2f(cos(an), sin(an));
  p.y += clamp(-p.y, 0.0, r * tan(an));
  return length(p) * sign(p.x);
}

fn sdStar(p_in: vec2f, r: f32, n: i32, m: f32) -> f32 {
  let an = 3.141593 / f32(n);
  let en = 3.141593 / m;
  let acs = vec2f(cos(an), sin(an));
  let ecs = vec2f(cos(en), sin(en));
  let bn = wmod(atan2(p_in.x, p_in.y), 2.0 * an) - an;
  var p = length(p_in) * vec2f(cos(bn), abs(sin(bn)));
  p -= r * acs;
  p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);
  return length(p) * sign(p.x);
}

const WGSL_PLUS_DEBUG_KERNELS: bool = false;

fn ag_node_grayscale(rgb: vec3f) -> f32 {
  return dot(rgb, vec3f(0.299, 0.587, 0.114));
}

fn ag_node_levels(v: f32, inLow: f32, inHigh: f32) -> f32 {
  let span = max(inHigh - inLow, 1e-5);
  return clamp((v - inLow) / span, 0.0, 1.0);
}

fn ag_node_blend(base: f32, layer: f32, opacity: f32) -> f32 {
  let t = clamp(opacity, 0.0, 1.0);
  return mix(base, layer, t);
}`,lq:`const WGSL_PLUS_DEBUG_ATOMS: bool = false;

fn wmod(x: f32, y: f32) -> f32 { return x - y * floor(x / y); }
fn wmod2(x: vec2f, y: f32) -> vec2f { return x - y * floor(x / y); }
fn wmod2v(x: vec2f, y: vec2f) -> vec2f { return x - y * floor(x / y); }

// Example atom helpers for WGSL-Plus modular linking.
fn ag_fade1(t: f32) -> f32 { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }
fn ag_fade2(t: vec2f) -> vec2f { return vec2f(ag_fade1(t.x), ag_fade1(t.y)); }

const WGSL_PLUS_DEBUG_NOISE: bool = false;

fn hash2(p_in: vec2f) -> f32 {
  var p = fract(p_in * vec2f(234.345, 435.678));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

fn hash22(p: vec2f) -> vec2f {
  let d = vec2f(dot(p, vec2f(127.1, 311.7)), dot(p, vec2f(269.5, 183.3)));
  return -1.0 + 2.0 * fract(sin(d) * 43758.5453123);
}

fn vnoise(p_in: vec2f, per: f32, tile: bool) -> f32 {
  let i = floor(p_in);
  let f = fract(p_in);
  let u = f * f * (3.0 - 2.0 * f);
  let tileMode = tile || false;
  var i00 = i;
  var i10 = i + vec2f(1.0, 0.0);
  var i01 = i + vec2f(0.0, 1.0);
  var i11 = i + vec2f(1.0, 1.0);
  if (tileMode) {
    i00 = wmod2(i00, per);
    i10 = wmod2(i10, per);
    i01 = wmod2(i01, per);
    i11 = wmod2(i11, per);
  }
  return mix(mix(hash2(i00), hash2(i10), u.x), mix(hash2(i01), hash2(i11), u.x), u.y);
}

fn fbm(p_in: vec2f, oct: f32, per_in: f32, tileFlag: f32) -> f32 {
  var p = p_in;
  var per = per_in;
  var v: f32 = 0.0;
  var a: f32 = 0.5;
  var mx: f32 = 0.0;
  let tile = (tileFlag > 0.5) || false;
  for (var i: i32 = 0; i < 5; i++) {
    let m = select(0.0, 1.0, f32(i) + 0.5 <= oct);
    v += a * vnoise(p, per, tile) * m;
    mx += a * m;
    p *= 2.0;
    per *= 2.0;
    a *= 0.5;
  }
  return select(0.0, v / mx, mx > 0.0);
}

fn voro(p_in: vec2f, jt: f32, per: f32, tile: bool) -> vec4f {
  var n = floor(p_in);
  let f = fract(p_in);
  let tileMode = tile || false;
  if (tileMode) {
    n = wmod2(n, per);
  }
  var f1: f32 = 8.0;
  var f2: f32 = 8.0;
  var id = vec2f(0.0);
  for (var j: i32 = -1; j <= 1; j++) {
    for (var i: i32 = -1; i <= 1; i++) {
      let g = vec2f(f32(i), f32(j));
      var neighbor = n + g;
      if (tileMode) {
        neighbor = wmod2(neighbor, per);
      }
      let o = hash22(neighbor);
      let r = g + o * jt - f;
      let d = dot(r, r);
      if (d < f1) {
        f2 = f1;
        f1 = d;
        id = o;
      } else if (d < f2) {
        f2 = d;
      }
    }
  }
  return vec4f(sqrt(f1), sqrt(f2), sqrt(f2) - sqrt(f1), id.x);
}

const WGSL_PLUS_DEBUG_SDF: bool = false;

fn sdCircle(p: vec2f, r: f32) -> f32 { return length(p) - r; }

fn sdBox(p: vec2f, b: vec2f) -> f32 {
  let d = abs(p) - b;
  return length(max(d, vec2f(0.0))) + min(max(d.x, d.y), 0.0);
}

fn sdEquilateralTriangle(p_in: vec2f, r: f32) -> f32 {
  let k = sqrt(3.0);
  var p = p_in;
  p.x = abs(p.x) - r;
  p.y = p.y + r / k;
  if (p.x + k * p.y > 0.0) {
    p = vec2f(p.x - k * p.y, -k * p.x - p.y) / 2.0;
  }
  p.x -= clamp(p.x, -2.0 * r, 0.0);
  return -length(p) * sign(p.y);
}

fn sdPolygon(p_in: vec2f, r: f32, n: i32) -> f32 {
  let an = 3.141593 / f32(n);
  let bn = wmod(atan2(p_in.x, p_in.y), 2.0 * an) - an;
  var p = length(p_in) * vec2f(cos(bn), abs(sin(bn)));
  p -= r * vec2f(cos(an), sin(an));
  p.y += clamp(-p.y, 0.0, r * tan(an));
  return length(p) * sign(p.x);
}

fn sdStar(p_in: vec2f, r: f32, n: i32, m: f32) -> f32 {
  let an = 3.141593 / f32(n);
  let en = 3.141593 / m;
  let acs = vec2f(cos(an), sin(an));
  let ecs = vec2f(cos(en), sin(en));
  let bn = wmod(atan2(p_in.x, p_in.y), 2.0 * an) - an;
  var p = length(p_in) * vec2f(cos(bn), abs(sin(bn)));
  p -= r * acs;
  p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);
  return length(p) * sign(p.x);
}

const WGSL_PLUS_DEBUG_KERNELS: bool = false;

fn ag_node_grayscale(rgb: vec3f) -> f32 {
  return dot(rgb, vec3f(0.299, 0.587, 0.114));
}

fn ag_node_levels(v: f32, inLow: f32, inHigh: f32) -> f32 {
  let span = max(inHigh - inLow, 1e-5);
  return clamp((v - inLow) / span, 0.0, 1.0);
}

fn ag_node_blend(base: f32, layer: f32, opacity: f32) -> f32 {
  let t = clamp(opacity, 0.0, 1.0);
  return mix(base, layer, t);
}`,tileable:`const WGSL_PLUS_DEBUG_ATOMS: bool = false;

fn wmod(x: f32, y: f32) -> f32 { return x - y * floor(x / y); }
fn wmod2(x: vec2f, y: f32) -> vec2f { return x - y * floor(x / y); }
fn wmod2v(x: vec2f, y: vec2f) -> vec2f { return x - y * floor(x / y); }

// Example atom helpers for WGSL-Plus modular linking.
fn ag_fade1(t: f32) -> f32 { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }
fn ag_fade2(t: vec2f) -> vec2f { return vec2f(ag_fade1(t.x), ag_fade1(t.y)); }

const WGSL_PLUS_DEBUG_NOISE: bool = false;

fn hash2(p_in: vec2f) -> f32 {
  var p = fract(p_in * vec2f(234.345, 435.678));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

fn hash22(p: vec2f) -> vec2f {
  let d = vec2f(dot(p, vec2f(127.1, 311.7)), dot(p, vec2f(269.5, 183.3)));
  return -1.0 + 2.0 * fract(sin(d) * 43758.5453123);
}

fn vnoise(p_in: vec2f, per: f32, tile: bool) -> f32 {
  let i = floor(p_in);
  let f = fract(p_in);
  let u = f * f * (3.0 - 2.0 * f);
  let tileMode = tile || true;
  var i00 = i;
  var i10 = i + vec2f(1.0, 0.0);
  var i01 = i + vec2f(0.0, 1.0);
  var i11 = i + vec2f(1.0, 1.0);
  if (tileMode) {
    i00 = wmod2(i00, per);
    i10 = wmod2(i10, per);
    i01 = wmod2(i01, per);
    i11 = wmod2(i11, per);
  }
  return mix(mix(hash2(i00), hash2(i10), u.x), mix(hash2(i01), hash2(i11), u.x), u.y);
}

fn fbm(p_in: vec2f, oct: f32, per_in: f32, tileFlag: f32) -> f32 {
  var p = p_in;
  var per = per_in;
  var v: f32 = 0.0;
  var a: f32 = 0.5;
  var mx: f32 = 0.0;
  let tile = (tileFlag > 0.5) || true;
  for (var i: i32 = 0; i < 8; i++) {
    let m = select(0.0, 1.0, f32(i) + 0.5 <= oct);
    v += a * vnoise(p, per, tile) * m;
    mx += a * m;
    p *= 2.0;
    per *= 2.0;
    a *= 0.5;
  }
  return select(0.0, v / mx, mx > 0.0);
}

fn voro(p_in: vec2f, jt: f32, per: f32, tile: bool) -> vec4f {
  var n = floor(p_in);
  let f = fract(p_in);
  let tileMode = tile || true;
  if (tileMode) {
    n = wmod2(n, per);
  }
  var f1: f32 = 8.0;
  var f2: f32 = 8.0;
  var id = vec2f(0.0);
  for (var j: i32 = -1; j <= 1; j++) {
    for (var i: i32 = -1; i <= 1; i++) {
      let g = vec2f(f32(i), f32(j));
      var neighbor = n + g;
      if (tileMode) {
        neighbor = wmod2(neighbor, per);
      }
      let o = hash22(neighbor);
      let r = g + o * jt - f;
      let d = dot(r, r);
      if (d < f1) {
        f2 = f1;
        f1 = d;
        id = o;
      } else if (d < f2) {
        f2 = d;
      }
    }
  }
  return vec4f(sqrt(f1), sqrt(f2), sqrt(f2) - sqrt(f1), id.x);
}

const WGSL_PLUS_DEBUG_SDF: bool = false;

fn sdCircle(p: vec2f, r: f32) -> f32 { return length(p) - r; }

fn sdBox(p: vec2f, b: vec2f) -> f32 {
  let d = abs(p) - b;
  return length(max(d, vec2f(0.0))) + min(max(d.x, d.y), 0.0);
}

fn sdEquilateralTriangle(p_in: vec2f, r: f32) -> f32 {
  let k = sqrt(3.0);
  var p = p_in;
  p.x = abs(p.x) - r;
  p.y = p.y + r / k;
  if (p.x + k * p.y > 0.0) {
    p = vec2f(p.x - k * p.y, -k * p.x - p.y) / 2.0;
  }
  p.x -= clamp(p.x, -2.0 * r, 0.0);
  return -length(p) * sign(p.y);
}

fn sdPolygon(p_in: vec2f, r: f32, n: i32) -> f32 {
  let an = 3.141593 / f32(n);
  let bn = wmod(atan2(p_in.x, p_in.y), 2.0 * an) - an;
  var p = length(p_in) * vec2f(cos(bn), abs(sin(bn)));
  p -= r * vec2f(cos(an), sin(an));
  p.y += clamp(-p.y, 0.0, r * tan(an));
  return length(p) * sign(p.x);
}

fn sdStar(p_in: vec2f, r: f32, n: i32, m: f32) -> f32 {
  let an = 3.141593 / f32(n);
  let en = 3.141593 / m;
  let acs = vec2f(cos(an), sin(an));
  let ecs = vec2f(cos(en), sin(en));
  let bn = wmod(atan2(p_in.x, p_in.y), 2.0 * an) - an;
  var p = length(p_in) * vec2f(cos(bn), abs(sin(bn)));
  p -= r * acs;
  p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);
  return length(p) * sign(p.x);
}

const WGSL_PLUS_DEBUG_KERNELS: bool = false;

fn ag_node_grayscale(rgb: vec3f) -> f32 {
  return dot(rgb, vec3f(0.299, 0.587, 0.114));
}

fn ag_node_levels(v: f32, inLow: f32, inHigh: f32) -> f32 {
  let span = max(inHigh - inLow, 1e-5);
  return clamp((v - inLow) / span, 0.0, 1.0);
}

fn ag_node_blend(base: f32, layer: f32, opacity: f32) -> f32 {
  let t = clamp(opacity, 0.0, 1.0);
  return mix(base, layer, t);
}`,debug:`const WGSL_PLUS_DEBUG_ATOMS: bool = true;

fn wmod(x: f32, y: f32) -> f32 { return x - y * floor(x / y); }
fn wmod2(x: vec2f, y: f32) -> vec2f { return x - y * floor(x / y); }
fn wmod2v(x: vec2f, y: vec2f) -> vec2f { return x - y * floor(x / y); }

// Example atom helpers for WGSL-Plus modular linking.
fn ag_fade1(t: f32) -> f32 { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }
fn ag_fade2(t: vec2f) -> vec2f { return vec2f(ag_fade1(t.x), ag_fade1(t.y)); }

const WGSL_PLUS_DEBUG_NOISE: bool = true;

fn hash2(p_in: vec2f) -> f32 {
  var p = fract(p_in * vec2f(234.345, 435.678));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

fn hash22(p: vec2f) -> vec2f {
  let d = vec2f(dot(p, vec2f(127.1, 311.7)), dot(p, vec2f(269.5, 183.3)));
  return -1.0 + 2.0 * fract(sin(d) * 43758.5453123);
}

fn vnoise(p_in: vec2f, per: f32, tile: bool) -> f32 {
  let i = floor(p_in);
  let f = fract(p_in);
  let u = f * f * (3.0 - 2.0 * f);
  let tileMode = tile || false;
  var i00 = i;
  var i10 = i + vec2f(1.0, 0.0);
  var i01 = i + vec2f(0.0, 1.0);
  var i11 = i + vec2f(1.0, 1.0);
  if (tileMode) {
    i00 = wmod2(i00, per);
    i10 = wmod2(i10, per);
    i01 = wmod2(i01, per);
    i11 = wmod2(i11, per);
  }
  return mix(mix(hash2(i00), hash2(i10), u.x), mix(hash2(i01), hash2(i11), u.x), u.y);
}

fn fbm(p_in: vec2f, oct: f32, per_in: f32, tileFlag: f32) -> f32 {
  var p = p_in;
  var per = per_in;
  var v: f32 = 0.0;
  var a: f32 = 0.5;
  var mx: f32 = 0.0;
  let tile = (tileFlag > 0.5) || false;
  for (var i: i32 = 0; i < 8; i++) {
    let m = select(0.0, 1.0, f32(i) + 0.5 <= oct);
    v += a * vnoise(p, per, tile) * m;
    mx += a * m;
    p *= 2.0;
    per *= 2.0;
    a *= 0.5;
  }
  return select(0.0, v / mx, mx > 0.0);
}

fn voro(p_in: vec2f, jt: f32, per: f32, tile: bool) -> vec4f {
  var n = floor(p_in);
  let f = fract(p_in);
  let tileMode = tile || false;
  if (tileMode) {
    n = wmod2(n, per);
  }
  var f1: f32 = 8.0;
  var f2: f32 = 8.0;
  var id = vec2f(0.0);
  for (var j: i32 = -1; j <= 1; j++) {
    for (var i: i32 = -1; i <= 1; i++) {
      let g = vec2f(f32(i), f32(j));
      var neighbor = n + g;
      if (tileMode) {
        neighbor = wmod2(neighbor, per);
      }
      let o = hash22(neighbor);
      let r = g + o * jt - f;
      let d = dot(r, r);
      if (d < f1) {
        f2 = f1;
        f1 = d;
        id = o;
      } else if (d < f2) {
        f2 = d;
      }
    }
  }
  return vec4f(sqrt(f1), sqrt(f2), sqrt(f2) - sqrt(f1), id.x);
}

const WGSL_PLUS_DEBUG_SDF: bool = true;

fn sdCircle(p: vec2f, r: f32) -> f32 { return length(p) - r; }

fn sdBox(p: vec2f, b: vec2f) -> f32 {
  let d = abs(p) - b;
  return length(max(d, vec2f(0.0))) + min(max(d.x, d.y), 0.0);
}

fn sdEquilateralTriangle(p_in: vec2f, r: f32) -> f32 {
  let k = sqrt(3.0);
  var p = p_in;
  p.x = abs(p.x) - r;
  p.y = p.y + r / k;
  if (p.x + k * p.y > 0.0) {
    p = vec2f(p.x - k * p.y, -k * p.x - p.y) / 2.0;
  }
  p.x -= clamp(p.x, -2.0 * r, 0.0);
  return -length(p) * sign(p.y);
}

fn sdPolygon(p_in: vec2f, r: f32, n: i32) -> f32 {
  let an = 3.141593 / f32(n);
  let bn = wmod(atan2(p_in.x, p_in.y), 2.0 * an) - an;
  var p = length(p_in) * vec2f(cos(bn), abs(sin(bn)));
  p -= r * vec2f(cos(an), sin(an));
  p.y += clamp(-p.y, 0.0, r * tan(an));
  return length(p) * sign(p.x);
}

fn sdStar(p_in: vec2f, r: f32, n: i32, m: f32) -> f32 {
  let an = 3.141593 / f32(n);
  let en = 3.141593 / m;
  let acs = vec2f(cos(an), sin(an));
  let ecs = vec2f(cos(en), sin(en));
  let bn = wmod(atan2(p_in.x, p_in.y), 2.0 * an) - an;
  var p = length(p_in) * vec2f(cos(bn), abs(sin(bn)));
  p -= r * acs;
  p += ecs * clamp(-dot(p, ecs), 0.0, r * acs.y / ecs.y);
  return length(p) * sign(p.x);
}

const WGSL_PLUS_DEBUG_KERNELS: bool = true;

fn ag_node_grayscale(rgb: vec3f) -> f32 {
  return dot(rgb, vec3f(0.299, 0.587, 0.114));
}

fn ag_node_levels(v: f32, inLow: f32, inHigh: f32) -> f32 {
  let span = max(inHigh - inLow, 1e-5);
  return clamp((v - inLow) / span, 0.0, 1.0);
}

fn ag_node_blend(base: f32, layer: f32, opacity: f32) -> f32 {
  let t = clamp(opacity, 0.0, 1.0);
  return mix(base, layer, t);
}`};function eT(n="hq"){return QE[n]}const m_=Date.now();class Sr{constructor(e){this.bindings=new Wv,this.uniformBindings={},this.uniformDescriptors=new Map,this.decls=new Set,this.funcs=new Map,this.funcDefs=[],this.warnings=new Set,this.activeOutputInputPort=0,this.backend="glsl",this.uniformIndexMap=new Map,this.nextUniformIndex=0,this.funcBodies=new Map,this.funcExprs=new Map,this.atomCse=new Map,this.tempCounterByFunc=new Map,this.atomInputExprStack=[],this.wgslVariant="hq",this.graph=e,this.nodes=new Map(e.nodes.map(t=>[t.id,t])),this.edgeIndex=new Map,e.edges.forEach(t=>{this.edgeIndex.set(`${t.toId}:${t.toPort}`,t)})}compile(e){this.backend=(e==null?void 0:e.backend)||"glsl",this.wgslVariant=(e==null?void 0:e.wgslVariant)||"hq",this.bindings=new Wv,this.uniformBindings={},this.uniformDescriptors.clear(),this.decls.clear(),this.funcs.clear(),this.funcDefs=[],this.warnings.clear(),this.uniformIndexMap.clear(),this.nextUniformIndex=0,this.funcBodies.clear(),this.funcExprs.clear(),this.atomCse.clear(),this.tempCounterByFunc.clear(),this.activeOutputInputPort=Al[(e==null?void 0:e.outputChannel)||"baseColor"]??0;const t=(e==null?void 0:e.readable)??!0;this.registerSystemUniforms();let r=null;const o=e==null?void 0:e.nodeId,a=e==null?void 0:e.nodeOutputPort;if(o){if(!this.nodes.has(o))return this.defaultShader();r=this.genFunction(o,a??0)}else{const c=(e==null?void 0:e.outputChannel)||"baseColor",h=zl(this.graph)[c];if(h)r=this.genFunction(h.fromId,h.fromPort);else if(!JE(this.graph,c)){const u=Array.from(this.nodes.values()).find(p=>p.type==="output");u&&(r=this.getOutputExpression(u.id,c))}r||(r=this.defaultOutputExpression(c))}return this.backend==="wgsl"?this.assembleWgsl(r,t):this.assembleGlsl(r,t)}assembleGlsl(e,t){const r=this.resolveAtomOrder(e.atoms??new Set),o="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",a=`
      precision highp float;
      varying vec2 vUv;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_preview_offset;
      uniform float u_preview_zoom;
      uniform float u_preview_tile;
      ${Array.from(this.decls).join(`
`)}

      ${tT}

      ${this.funcDefs.join(`
`)}

      void main() {
        vec2 rawUv = (vUv - 0.5) / max(u_preview_zoom, 0.0001) + 0.5 + u_preview_offset;
        vec2 uv = rawUv;
        if (u_preview_tile > 0.5) {
          uv = fract(uv);
        }
        ${this.glslOutputAssign(e)}
        if (u_preview_zoom < 0.95) {
          vec2 edge = min(fract(rawUv), 1.0 - fract(rawUv));
          float px = 1.5 / u_resolution.x / max(1.0 / max(u_preview_zoom, 0.0001), 1.0);
          float border = 1.0 - smoothstep(0.0, px, min(edge.x, edge.y));
          float onPrimary = step(0.0, rawUv.x) * step(rawUv.x, 1.0) * step(0.0, rawUv.y) * step(rawUv.y, 1.0);
          vec3 frameColor = mix(vec3(1.0, 1.0, 1.0), vec3(0.24, 0.81, 0.56), onPrimary);
          gl_FragColor.rgb = mix(gl_FragColor.rgb, frameColor, border * 0.7);
        }
      }
    `,c=t?this.toReadableSource(a):this.toRawSource(a),f=this.hashString(c);return{backend:"glsl",source:c,warnings:Array.from(this.warnings),hash:f,atomsUsed:r,uniforms:Array.from(this.uniformDescriptors.values()),vertex:o,fragment:c,uniformBindings:this.uniformBindings}}glslOutputAssign(e){return e.type==="float"?`float v = ${e.code}; gl_FragColor = vec4(vec3(v), 1.0);`:e.type==="vec2"?`vec2 v = ${e.code}; gl_FragColor = vec4(v, 0.0, 1.0);`:e.type==="vec3"?`vec3 v = ${e.code}; gl_FragColor = vec4(v, 1.0);`:e.type==="vec4"?`vec4 v = ${e.code}; gl_FragColor = v;`:`gl_FragColor = ${e.code};`}assembleWgsl(e,t){const r=this.buildUniformLayout(),o=e.atoms??new Set,a=this.resolveAtomOrder(o),c=this.emitAtomPrelude(o),f=eT(this.wgslVariant),h=`
struct UBlock { data: array<vec4f, 64> };
@group(0) @binding(0) var<uniform> ub: UBlock;

fn uf(i: u32) -> f32 { return ub.data[i >> 2u][i & 3u]; }
fn uv2(i: u32) -> vec2f { return vec2f(uf(i), uf(i + 1u)); }

struct VSOut {
  @builtin(position) pos: vec4f,
  @location(0) uv: vec2f,
};

@vertex
fn vs_main(@builtin(vertex_index) vi: u32) -> VSOut {
  var p = array<vec2f, 3>(vec2f(-1, -1), vec2f(3, -1), vec2f(-1, 3));
  var out: VSOut;
  out.pos = vec4f(p[vi], 0, 1);
  out.uv = p[vi] * 0.5 + 0.5;
  return out;
}

// WGSL-Plus prelude variant: ${this.wgslVariant}
${f}

${c}

${this.funcDefs.join(`
`)}

fn tileFrame(col: vec4f, rawUv: vec2f, zoom: f32, res: vec2f) -> vec4f {
  if (zoom >= 0.95) { return col; }
  let edge = min(fract(rawUv), 1.0 - fract(rawUv));
  let px = 1.5 / res.x / max(1.0 / max(zoom, 0.0001), 1.0);
  let border = 1.0 - smoothstep(0.0, px, min(edge.x, edge.y));
  let inPrimary = step(0.0, rawUv.x) * step(rawUv.x, 1.0) * step(0.0, rawUv.y) * step(rawUv.y, 1.0);
  let frameColor = mix(vec3f(1.0), vec3f(0.24, 0.81, 0.56), inPrimary);
  return vec4f(mix(col.rgb, frameColor, border * 0.7), col.a);
}

@fragment
fn fs_main(inp: VSOut) -> @location(0) vec4f {
  let zoom = uf(${this.sysIdx("u_preview_zoom")}u);
  let tile = uf(${this.sysIdx("u_preview_tile")}u);
  let off = uv2(${this.sysIdx("u_preview_offset")}u);
  let res = uv2(${this.sysIdx("u_resolution")}u);
  let rawUv = (inp.uv - 0.5) / max(zoom, 0.0001) + 0.5 + off;
  var uv = rawUv;
  if (tile > 0.5) { uv = fract(uv); }
  ${this.wgslOutputColor(e)}
  return tileFrame(col, rawUv, zoom, res);
}
`,u=t?this.toReadableSource(h):this.toRawSource(h),p=this.hashString(u),_=this.rebuildGlslFromState(e,t);return{backend:"wgsl",source:_.source,warnings:Array.from(this.warnings),hash:p,atomsUsed:a,uniforms:Array.from(this.uniformDescriptors.values()),vertex:_.vertex,fragment:_.fragment,uniformBindings:this.uniformBindings,wgsl:u,uniformLayout:r}}rebuildGlslFromState(e,t){const r="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",o="precision highp float;varying vec2 vUv;void main(){gl_FragColor=vec4(0.,0.,0.,1.);}";return{source:o,vertex:r,fragment:o}}wgslOutputReturn(e){return e.type==="float"?`let v = ${e.code}; return vec4f(vec3f(v), 1.0);`:e.type==="vec2"?`let v = ${e.code}; return vec4f(v, 0.0, 1.0);`:e.type==="vec3"?`let v = ${e.code}; return vec4f(v, 1.0);`:e.type==="vec4"?`let v = ${e.code}; return v;`:`return ${e.code};`}wgslOutputColor(e){return e.type==="float"?`let v = ${e.code}; let col = vec4f(vec3f(v), 1.0);`:e.type==="vec2"?`let v = ${e.code}; let col = vec4f(v, 0.0, 1.0);`:e.type==="vec3"?`let v = ${e.code}; let col = vec4f(v, 1.0);`:e.type==="vec4"?`let v = ${e.code}; let col = v;`:`let col = ${e.code};`}buildUniformLayout(){const e=[];for(const[t,r]of this.uniformIndexMap.entries()){const o=this.uniformDescriptors.get(t),a=(o==null?void 0:o.type)||"float",c=a==="vec4"?4:a==="vec3"?3:a==="vec2"?2:1;e.push({name:t,type:a,index:r,size:c})}return e.sort((t,r)=>t.index-r.index)}sysIdx(e){return this.uniformIndexMap.get(e)??0}registerSystemUniforms(){const e=[["u_time","float",0],["u_resolution","vec2",[1,1]],["u_preview_offset","vec2",[0,0]],["u_preview_zoom","float",1],["u_preview_tile","float",0]];for(const[t,r,o]of e)this.uniformDescriptors.set(t,{name:t,type:r,nodeId:"system",key:t,defaultValue:o}),r==="vec2"?(this.bindings.setVec2(t,o),this.uniformIndexMap.set(t,this.nextUniformIndex),this.nextUniformIndex+=2):(this.bindings.setFloat(t,typeof o=="number"?o:0),this.uniformIndexMap.set(t,this.nextUniformIndex),this.nextUniformIndex+=1);this.uniformBindings=this.bindings.getUniforms()}defaultOutputExpression(e){const t=this.backend==="wgsl"?"vec3f":"vec3";return e==="baseColor"?{code:`${t}(0.0)`,type:"vec3"}:e==="normal"?{code:`${t}(0.5, 0.5, 1.0)`,type:"vec3"}:e==="ao"?{code:"1.0",type:"float"}:{code:"0.0",type:"float"}}getOutputExpression(e,t){const r=Al[t]??0,o=this.defaultOutputExpression(t);return this.getSource(e,r,"uv",o.code,o.type)}defaultShader(){if(this.backend==="wgsl"){const t=nT;return{backend:"wgsl",source:"",warnings:[],hash:this.hashString(t),atomsUsed:[],uniforms:[],vertex:"",fragment:"",uniformBindings:{},wgsl:t,uniformLayout:[]}}const e="precision highp float;varying vec2 vUv;void main(){gl_FragColor=vec4(0.,0.,0.,1.);}";return{backend:"glsl",source:e,warnings:[],hash:this.hashString(e),atomsUsed:[],uniforms:[],vertex:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragment:e,uniformBindings:{}}}addUniform(e,t,r){const o=YE(e,t),a=this.inferUniformType(e,t,r);if(!this.uniformDescriptors.has(o)){Array.isArray(r)?r.length===2?this.bindings.setVec2(o,[r[0],r[1]]):r.length===3?this.bindings.setVec3(o,[r[0],r[1],r[2]]):r.length>=4?this.bindings.setVec4(o,[r[0],r[1],r[2],r[3]]):this.bindings.setFloat(o,0):typeof r=="boolean"?this.bindings.setBool(o,r):a==="int"?this.bindings.setInt(o,Number(r)):this.bindings.setFloat(o,Number(r)),this.uniformBindings=this.bindings.getUniforms(),this.uniformDescriptors.set(o,{name:o,type:a,nodeId:e,key:t,defaultValue:r});const c=a==="vec4"?4:a==="vec3"?3:a==="vec2"?2:1;this.uniformIndexMap.set(o,this.nextUniformIndex),this.nextUniformIndex+=c,this.backend==="glsl"&&this.decls.add(`uniform ${this.toGLSLType(a)} ${o};`)}if(this.backend==="wgsl"){const c=this.uniformIndexMap.get(o);return a==="vec2"?`uv2(${c}u)`:`uf(${c}u)`}return o}sysRef(e){return this.backend==="wgsl"?`uf(${this.uniformIndexMap.get(e)??0}u)`:e}sysRef2(e){return this.backend==="wgsl"?`uv2(${this.uniformIndexMap.get(e)??0}u)`:e}cloneExpr(e){return{code:e.code,type:e.type,atoms:e.atoms?new Set(e.atoms):void 0}}mergeAtoms(e,t){t&&t.forEach(r=>e.add(r))}mergeExprAtoms(e,t){t!=null&&t.atoms&&t.atoms.forEach(r=>e.add(r))}toWgslDataType(e){return e==="float"?"f32":e==="vec2"?"vec2f":e==="vec3"?"vec3f":e==="vec4"?"vec4f":"f32"}callAtom(e,t,r,o){const a=kd[t],c=new Set;o.forEach(E=>this.mergeExprAtoms(c,E)),c.add(t);const f=`${t}(${o.map(E=>E.code).join(", ")})`;if(!a)return this.warnings.add(`Missing atom definition: ${t}`),{code:f,type:r,atoms:c};if(!this.W||!a.pure)return{code:f,type:r,atoms:c};const h=this.atomCse.get(e)||new Map;this.atomCse.set(e,h);const u=`${t}|${r}|${o.map(E=>E.code).join("|")}`,p=h.get(u);if(p){const E=new Set;return this.mergeExprAtoms(E,p),this.mergeAtoms(E,c),{code:p.code,type:p.type,atoms:E}}const _=this.tempCounterByFunc.get(e)??0,x=`t_${_}`;this.tempCounterByFunc.set(e,_+1);const m=this.funcBodies.get(e)||[];this.funcBodies.set(e,m),m.push(`let ${x}: ${this.toWgslDataType(r)} = ${f};`);const b={code:x,type:r,atoms:c};return h.set(u,b),b}resolveAtomOrder(e){if(e.size===0)return[];const t=new Set,r=[...e];for(;r.length;){const h=r.pop();if(t.has(h))continue;t.add(h);const u=kd[h];if(!u){this.warnings.add(`Unknown atom referenced: ${h}`);continue}(u.deps??[]).forEach(p=>{t.has(p)||r.push(p)})}const o=new Set,a=new Set,c=[],f=h=>{if(o.has(h))return;if(a.has(h)){this.warnings.add(`Atom dependency cycle detected at "${h}"`);return}const u=kd[h];if(!u){this.warnings.add(`Missing atom during prelude emit: ${h}`);return}a.add(h),[...u.deps??[]].sort().forEach(p=>{t.has(p)&&f(p)}),a.delete(h),o.add(h),c.push(h)};return[...t].sort().forEach(h=>f(h)),c}emitAtomPrelude(e){const t=this.resolveAtomOrder(e);return t.length===0?"":t.map(r=>kd[r].wgsl.trim()).join(`

`)}getSource(e,t,r="uv",o="0.0",a="float",c){const f=this.edgeIndex.get(`${e}:${t}`);if(f){const h=this.genFunction(f.fromId,f.fromPort);return{code:`${h.code.split("(uv)").join(`(${r})`)}`,type:h.type,atoms:h.atoms?new Set(h.atoms):void 0}}return{code:o,type:a,atoms:c?new Set(c):void 0}}asFloat(e,t,r){return e.type==="float"?e.code:(this.warnings.add(`Implicit cast at node ${t}: ${e.type} -> float (${r})`),e.type==="vec2"||e.type==="vec3"||e.type==="vec4"?`(${e.code}).x`:`(${e.code})`)}asVec4(e){return e.type==="vec4"?e.code:e.type==="vec3"?this.v4(`${e.code}.x, ${e.code}.y, ${e.code}.z, 1.0`):e.type==="vec2"?this.v4(`${e.code}.x, ${e.code}.y, 0.0, 1.0`):this.v4(`${e.code}, ${e.code}, ${e.code}, 1.0`)}sanitizeAtomSubgraph(e){if(!e||!Array.isArray(e.nodes)||!Array.isArray(e.edges))return null;const t=e.nodes.filter(a=>a&&typeof a.id=="string"&&typeof a.type=="string"&&typeof a.x=="number"&&typeof a.y=="number").map(a=>({id:a.id,type:a.type,x:a.x,y:a.y,params:a.params&&typeof a.params=="object"?a.params:{}}));if(t.length===0)return null;const r=new Set(t.map(a=>a.id)),o=e.edges.filter(a=>a&&typeof a.id=="string"&&typeof a.fromId=="string"&&typeof a.toId=="string"&&typeof a.fromPort=="number"&&typeof a.toPort=="number"&&r.has(a.fromId)&&r.has(a.toId));return{schemaVersion:typeof e.schemaVersion=="number"?e.schemaVersion:1,nodes:t,edges:o,resolution:typeof e.resolution=="number"?e.resolution:void 0}}atomInputPortIndex(e){return e==="atom_input"||e==="atom_input_a"?0:e==="atom_input_b"?1:e==="atom_input_c"?2:e==="atom_input_d"?3:null}compileAtomSubgraph(e,t){var g;const r=t[0]?this.cloneExpr(t[0]):{code:"0.0",type:"float"},o=this.sanitizeAtomSubgraph((g=e.params)==null?void 0:g.subgraph);if(!o)return this.cloneExpr(r);const a=`atom_${e.id.replace(/[^a-zA-Z0-9_]/g,"_")}`,c=new Map,f=o.nodes.map(y=>{const P=`${a}_${y.id.replace(/[^a-zA-Z0-9_]/g,"_")}`;return c.set(y.id,P),{...y,id:P,params:{...y.params||{}}}}),h=o.edges.filter(y=>c.has(y.fromId)&&c.has(y.toId)).map(y=>({...y,id:`${a}_e_${y.id.replace(/[^a-zA-Z0-9_]/g,"_")}`,fromId:c.get(y.fromId),toId:c.get(y.toId)})),_=zl({nodes:f,edges:h}).height;if(!_)return this.warnings.add(`Atom graph ${e.id} has no connected Height output; using passthrough.`),this.cloneExpr(r);const x=new Map(f.map(y=>[y.id,y])),m=new Map;h.forEach(y=>{m.set(`${y.toId}:${y.toPort}`,y)});const b=this.nodes,E=this.edgeIndex;this.nodes=x,this.edgeIndex=m,this.atomInputExprStack.push(t.map(y=>this.cloneExpr(y)));try{return this.genFunction(_.fromId,_.fromPort)}catch(y){return this.warnings.add(`Atom graph ${e.id} compile failed: ${(y==null?void 0:y.message)||"unknown error"}`),this.cloneExpr(r)}finally{this.atomInputExprStack.pop(),this.nodes=b,this.edgeIndex=E}}get W(){return this.backend==="wgsl"}v2(e){return this.W?`vec2f(${e})`:`vec2(${e})`}v3(e){return this.W?`vec3f(${e})`:`vec3(${e})`}v4(e){return this.W?`vec4f(${e})`:`vec4(${e})`}modF(e,t){return this.W?`wmod(${e}, ${t})`:`mod(${e}, ${t})`}modV2(e,t){return this.W?`wmod2(${e}, ${t})`:`mod(${e}, ${t})`}atan2F(e,t){return this.W?`atan2(${e}, ${t})`:`atan(${e}, ${t})`}sel(e,t,r){return this.W?`select(${r}, ${t}, ${e})`:`((${e}) ? (${t}) : (${r}))`}tF(){return this.W?"f32":"float"}tI(){return this.W?"i32":"int"}tV2(){return this.W?"vec2f":"vec2"}genFunction(e,t=0){var P,N,k,V;const r=this.nodes.get(e);if(!r)return{code:"0.0",type:"float"};const o=Et[r.type],a=((P=o==null?void 0:o.outputs[t])==null?void 0:P.type)||"float",c=`${e}:${t}`,f=this.funcExprs.get(c);if(f)return this.cloneExpr(f);if(this.funcs.has(c))return{code:`${this.funcs.get(c)}(uv)`,type:a,atoms:void 0};const h=`fn_${e.replace(/[^a-zA-Z0-9]/g,"_")}_${t}`;if(r.type==="split"){const A=this.getSource(e,0,"uv",this.W?"vec4f(0.0)":"vec4(0.0)","vec4"),T=this.asVec4(A);if(t===4)return{code:`(${T}).xyz`,type:"vec3",atoms:A.atoms?new Set(A.atoms):void 0};const M=["x","y","z","w"][t]??"x";return{code:`(${T}).${M}`,type:"float",atoms:A.atoms?new Set(A.atoms):void 0}}this.funcs.set(c,h),this.funcBodies.set(c,[]),this.atomCse.set(c,new Map),this.tempCounterByFunc.set(c,0);const u=r.params,p=(A,T)=>this.addUniform(e,A,T),_=()=>this.sysRef("u_time"),x=new Set,m=(A,T="0.0",M="uv")=>{const C=typeof T=="string"?{code:T,type:"float"}:T,B=this.getSource(e,A,M,C.code,C.type,C.atoms);return this.mergeExprAtoms(x,B),B.type==="vec2"?(this.warnings.add(`Implicit cast at node ${r.type}: vec2 -> float (${e}, input ${A})`),`${B.code}.x`):B.type==="vec4"?(this.warnings.add(`Implicit cast at node ${r.type}: vec4 -> float (${e}, input ${A})`),`${B.code}.x`):B.code},b=(A,T="vec2(0.0)",M="uv")=>{const C=this.W?"vec2f(0.0)":T,B=this.getSource(e,A,M,C);return this.mergeExprAtoms(x,B),B.type==="float"?(this.warnings.add(`Implicit cast at node ${r.type}: float -> vec2 (${e}, input ${A})`),this.v2(B.code)):B.code},E=(A,T="vec3(0.0)",M="uv")=>{const C=this.W?"vec3f(0.0)":T,B=this.getSource(e,A,M,C,"vec3");return this.mergeExprAtoms(x,B),B.type==="float"?(this.warnings.add(`Implicit cast at node ${r.type}: float -> vec3 (${e}, input ${A})`),this.v3(`${B.code}, ${B.code}, ${B.code}`)):B.type==="vec2"?(this.warnings.add(`Implicit cast at node ${r.type}: vec2 -> vec3 (${e}, input ${A})`),this.v3(`${B.code}.x, ${B.code}.y, 0.0`)):B.type==="vec4"?(this.warnings.add(`Implicit cast at node ${r.type}: vec4 -> vec3 (${e}, input ${A})`),`(${B.code}).xyz`):B.code};let g="return 0.0;";switch(r.type){case"constant":g=`return ${p("val",u.value)};`;break;case"time":g=`return fract(${_()} * ${p("spd",u.speed)});`;break;case"uv_x":g="return uv.x;";break;case"uv_y":g="return uv.y;";break;case"uv":g="return uv;";break;case"uniform_color":{const A=p("r",u.r??.5),T=p("g",u.g??.5),M=p("b",u.b??.5);g=`return ${this.v3(`${A}, ${T}, ${M}`)};`;break}case"gaussian_noise":{const A=p("scale",u.scale??12),T=p("mean",u.mean??.5),M=p("stdDev",u.stdDev??.16),C=p("seed",u.seed??1337),B=p("tileOffsetX",u.tileOffsetX??0),O=p("tileOffsetY",u.tileOffsetY??0),$=p("nonSquare",u.nonSquare??!0?1:0),W=this.W?`(${C})`:`float(${C})`,X=this.sysRef2("u_resolution"),re=`${X}.x / max(${X}.y, 1.0)`,Z=`(${this.sel(`${$} > 0.5`,this.v2(`uv.x * (${re}), uv.y`),"uv")} * max(${A}, 1.0) + ${this.v2(`${B}, ${O}`)})`,ie=`max(hash2(floor(${Z}) + ${this.v2(`${W} * 0.137, ${W} * 0.911`)}), 1e-5)`,q=`hash2(floor(${Z}) + ${this.v2(`${W} * 0.271 + 19.0, ${W} * 0.613 + 73.0`)})`,ae=`(sqrt(-2.0 * log(${ie})) * cos(6.28318530718 * ${q}))`;g=`return clamp(${T} + ${ae} * ${M}, 0.0, 1.0);`;break}case"tile_generator":{const A=p("scale",u.scale??6),T=p("radius",u.radius??.42),M=p("variation",u.variation??.25),C=p("seed",u.seed??1337),B=p("tileOffsetX",u.tileOffsetX??0),O=p("tileOffsetY",u.tileOffsetY??0),$=p("nonSquare",u.nonSquare??!0?1:0),W=this.W?`(${C})`:`float(${C})`,X=this.sysRef2("u_resolution"),re=`${X}.x / max(${X}.y, 1.0)`,Z=`(${this.sel(`${$} > 0.5`,this.v2(`uv.x * (${re}), uv.y`),"uv")} * max(${A}, 1.0) + ${this.v2(`${B}, ${O}`)})`,ie=`(fract(${Z}) - 0.5)`,ae=`hash2(${`floor(${Z})`} + ${this.v2(`${W} * 0.151, ${W} * 0.337`)})`,z=`(1.0 - smoothstep(${T}, ${T} + 0.02, max(abs(${ie}.x), abs(${ie}.y))))`,j=`(1.0 - smoothstep(${T}, ${T} + 0.02, length(${ie})))`;g=`return clamp(${u.shape==="dot"?j:z} * mix(1.0, ${ae}, clamp(${M}, 0.0, 1.0)), 0.0, 1.0);`;break}case"noise":{const A=p("scale",u.scale??6),T=p("octaves",u.octaves??4),M=p("seed",u.seed??1337),C=p("tileOffsetX",u.tileOffsetX??u.seed??0),B=p("tileOffsetY",u.tileOffsetY??u.seed??0),O=p("nonSquare",u.nonSquare??!0?1:0),$=this.W?`(${M})`:`float(${M})`,W=this.sysRef2("u_resolution"),X=`${W}.x / max(${W}.y, 1.0)`;g=`return fbm(${`(${this.sel(`${O} > 0.5`,this.v2(`uv.x * (${X}), uv.y`),"uv")} * max(${A}, 0.00001) + ${this.v2(`${C}, ${B}`)} + ${this.v2(`${$} * 0.173, ${$} * 0.619`)})`}, ${T}, max(${A}, 0.00001), 1.0);`;break}case"perlin":{const A=p("scale",u.scale??32),T=p("disorder",u.disorder??0),M=p("disorderSpeed",u.disorderSpeed??1),C=p("seed",u.seed??1337),B=p("tileOffsetX",u.tileOffsetX??0),O=p("tileOffsetY",u.tileOffsetY??0),$=p("nonSquare",u.nonSquare??!0?1:0),W=this.sysRef2("u_resolution"),X=`${W}.x / max(${W}.y, 1.0)`,re=this.sel(`${$} > 0.5`,this.v2(`uv.x * (${X}), uv.y`),"uv"),ee=`max(floor(${A} + 0.5), 1.0)`,Z=`(${re} * ${ee} + ${this.v2(`${B}, ${O}`)})`,ie=this.W?`u32(max(${C}, 0.0))`:`float(${C})`,q=`(${this.sysRef("u_time")} * ${M})`;let ae=Z;if(this.W){const Pe=this.callAtom(c,"perlin2i_raw","float",[{code:`${Z} + ${this.v2("17.0, 53.0")} + ${this.v2(`${q}*0.73, -${q}*0.41`)}`,type:"vec2"},{code:`(${ie}) ^ 0x68bc21ebu`,type:"float"}]),qe=this.callAtom(c,"perlin2i_raw","float",[{code:`${Z} + ${this.v2("113.0, 7.0")} + ${this.v2(`-${q}*0.29, ${q}*0.87`)}`,type:"vec2"},{code:`(${ie}) ^ 0x02e5be93u`,type:"float"}]);this.mergeExprAtoms(x,Pe),this.mergeExprAtoms(x,qe),ae=`(${Z} + ${T} * ${this.v2(`${Pe.code}, ${qe.code}`)})`}else{const Pe=this.callAtom(c,"perlin2i_raw","float",[{code:`${Z} + vec2(17.0,53.0) + vec2(${q}*0.73, -${q}*0.41)`,type:"vec2"},{code:`(${ie}) + 101.0`,type:"float"}]),qe=this.callAtom(c,"perlin2i_raw","float",[{code:`${Z} + vec2(113.0,7.0) + vec2(-${q}*0.29, ${q}*0.87)`,type:"vec2"},{code:`(${ie}) + 211.0`,type:"float"}]);this.mergeExprAtoms(x,Pe),this.mergeExprAtoms(x,qe),ae=`(${Z} + ${T} * vec2(${Pe.code}, ${qe.code}))`}let z;this.W?(z=this.callAtom(c,"perlin2i_tiled","float",[{code:ae,type:"vec2"},{code:ee,type:"float"},{code:ie,type:"float"}]),this.mergeExprAtoms(x,z)):z={code:`perlin2i_tiled(${ae}, ${ee}, ${ie})`,type:"float"};const j=this.sel(`${A} < 1.5`,"0.5",z.code);if((N=r.params)!=null&&N.subgraph){const Pe=this.compileAtomSubgraph(r,[{code:j,type:"float"}]);this.mergeExprAtoms(x,Pe),g=`return ${this.asFloat(Pe,r.type,e)};`}else g=`return ${j};`;break}case"disorder":{const A=p("amount",u.amount??.08),T=p("scale",u.scale??8),M=p("speed",u.speed??.5),C=p("seed",u.seed??1337),B=this.W?`u32(max(${C}, 0.0))`:`float(${C})`,O=`(${this.sysRef("u_time")} * ${M})`,$=`(uv * max(${T}, 0.00001))`;let W,X;this.W?(W=this.callAtom(c,"perlin2i_raw","float",[{code:`${$} + vec2f(17.0,53.0) + vec2f(${O}*0.73, -${O}*0.41)`,type:"vec2"},{code:`(${B}) ^ 0x68bc21ebu`,type:"float"}]),X=this.callAtom(c,"perlin2i_raw","float",[{code:`${$} + vec2f(113.0,7.0) + vec2f(-${O}*0.29, ${O}*0.87)`,type:"vec2"},{code:`(${B}) ^ 0x02e5be93u`,type:"float"}])):(W=this.callAtom(c,"perlin2i_raw","float",[{code:`${$} + vec2(17.0,53.0) + vec2(${O}*0.73, -${O}*0.41)`,type:"vec2"},{code:`(${B}) + 101.0`,type:"float"}]),X=this.callAtom(c,"perlin2i_raw","float",[{code:`${$} + vec2(113.0,7.0) + vec2(-${O}*0.29, ${O}*0.87)`,type:"vec2"},{code:`(${B}) + 211.0`,type:"float"}])),this.mergeExprAtoms(x,W),this.mergeExprAtoms(x,X);const re=`(uv + ${A} * ${this.v2(`${W.code}, ${X.code}`)})`,ee=this.callAtom(c,"perlin2i","float",[{code:$,type:"vec2"},{code:B,type:"float"}]);this.mergeExprAtoms(x,ee),g=`return ${m(0,ee,re)};`;break}case"voronoi":{const A=p("scale",u.scale??5),T=p("jitter",u.jitter??1),M=p("seed",u.seed??1337),C=p("tileOffsetX",u.tileOffsetX??u.seed??0),B=p("tileOffsetY",u.tileOffsetY??u.seed??0),O=p("nonSquare",u.nonSquare??!0?1:0),$=this.W?`(${M})`:`float(${M})`,W=this.sysRef2("u_resolution"),X=`${W}.x / max(${W}.y, 1.0)`,ee=`(${this.sel(`${O} > 0.5`,this.v2(`uv.x * (${X}), uv.y`),"uv")} * max(${A}, 0.00001) + ${this.v2(`${C}, ${B}`)} + ${this.v2(`${$} * 0.137, ${$} * 0.911`)})`,Z=`max(${A}, 0.00001)`,ie=`voro(${ee}, ${T}, ${Z}, true)`,q=this.v4("cells,V.y,V.z,V.w");this.W?g=`{ var V=${ie}; let f1=V.x; let cells=1.0-smoothstep(0.0,0.5,f1); return ${q}; }`:g=`{ vec4 V=${ie}; float f1=V.x; float cells=1.0-smoothstep(0.0,0.5,f1); return ${q}; }`;break}case"worley":{const A=p("scale",u.scale??5),T=p("jitter",u.jitter??1),M=p("seed",u.seed??1337),C=p("tileOffsetX",u.tileOffsetX??u.seed??0),B=p("tileOffsetY",u.tileOffsetY??u.seed??0),O=p("nonSquare",u.nonSquare??!0?1:0),$=this.W?`(${M})`:`float(${M})`,W=this.sysRef2("u_resolution"),X=`${W}.x / max(${W}.y, 1.0)`;g=`return voro(${`(${this.sel(`${O} > 0.5`,this.v2(`uv.x * (${X}), uv.y`),"uv")} * max(${A}, 0.00001) + ${this.v2(`${C}, ${B}`)} + ${this.v2(`${$} * 0.137, ${$} * 0.911`)})`}, ${T}, max(${A}, 0.00001), true);`;break}case"bnw_spots2_v2":{const A=p("scale",u.scale??10),T=p("tileOffsetX",u.tileOffsetX??0),M=p("tileOffsetY",u.tileOffsetY??0),C=p("seed",u.seed??1337),B=p("nonSquareExpansion",u.nonSquareExpansion??!0?1:0),O=p("grainAmount",u.grainAmount??.22),$=p("grainThreshold",u.grainThreshold??.86),W=p("contrast",u.contrast??1.08),X=this.sysRef2("u_resolution"),re=this.v2(`${T}, ${M}`);if(this.W){const ee=`u32(max(${C}, 0.0))`,Z=this.callAtom(c,"bnw_spots2_v2","float",[{code:"uv",type:"vec2"},{code:`uv * ${X}`,type:"vec2"},{code:X,type:"vec2"},{code:A,type:"float"},{code:re,type:"vec2"},{code:ee,type:"float"},{code:B,type:"float"},{code:O,type:"float"},{code:$,type:"float"},{code:W,type:"float"}]);this.mergeExprAtoms(x,Z),g=`return ${Z.code};`}else{const ee=`float(${A})`,Z=`float(${C})`,ie=`clamp(floor(${ee} + 0.5), 1.0, 32.0)`,q=`(${X}.x / max(${X}.y, 1.0))`,z=`(${this.sel(`${B} > 0.5`,`vec2(uv.x * (${q}), uv.y)`,"uv")} * ${ie} + ${re})`,j=z,Pe=ie,fe=`clamp((${`smoothstep(0.35, 0.75, ${`(
            0.5   * perlin2i_tiled(${j} * 1.0, ${Pe} * 1.0, ${Z} + 17.0) +
            0.25  * perlin2i_tiled(${j} * 2.0, ${Pe} * 2.0, ${Z} + 31.0) +
            0.125 * perlin2i_tiled(${j} * 4.0, ${Pe} * 4.0, ${Z} + 53.0) +
            0.0625* perlin2i_tiled(${j} * 8.0, ${Pe} * 8.0, ${Z} + 79.0)
          ) / 0.9375`})`} - 0.5) * max(${W}, 0.001) + 0.5, 0.0, 1.0)`,xe=`perlin2i_tiled(${z} * 2.0 + vec2(13.2, -9.7), ${Pe} * 2.0, ${Z} + 137.0)`,Re=`clamp(${$} + (${xe} - 0.5) * 0.12, 0.0, 1.0)`,Je=`hash2(floor(uv * ${X}) + vec2(${Z} * 0.013, ${Z} * 0.071))`,Ze=`step(${Re}, ${Je})`;g=`return clamp(${fe} - clamp(${O}, 0.0, 1.0) * ${Ze}, 0.0, 1.0);`}break}case"checker":g=`return ${this.modF(`floor(uv.x * ${p("sc",u.scale)}) + floor(uv.y * ${p("sc",u.scale)})`,"2.0")};`;break;case"panner":{const A=p("sx",u.speedX),T=p("sy",u.speedY),M=`uv + ${this.v2(`${A}, ${T}`)} * ${_()}`,C=`fbm(${M}, 4.0, 4.0, 0.0)`;g=`return ${m(0,C,M)};`;break}case"tile_sampler":{const A=p("scale",u.scale??6),T=`(${p("ang",(u.angle??0)*Math.PI/180)})`,M=p("tileOffsetX",u.tileOffsetX??0),C=p("tileOffsetY",u.tileOffsetY??0),B="(uv - 0.5)",$=`fract((${this.v2(`cos(${T}) * ${B}.x - sin(${T}) * ${B}.y, sin(${T}) * ${B}.x + cos(${T}) * ${B}.y`)} + 0.5) * max(${A}, 1.0) + ${this.v2(`${M}, ${C}`)})`;g=`return ${m(0,"0.0",$)};`;break}case"gradient":{const A=p("ang",u.angle*Math.PI/180);u.type==="radial"?g="return clamp(1.0 - length(uv - 0.5) * 2.0, 0.0, 1.0);":u.type==="angular"?this.W?g="{ var nx = uv - 0.5; return (atan2(nx.y, nx.x) / 3.14159 + 1.0) * 0.5; }":g="vec2 nx = uv - 0.5; return (atan(nx.y, nx.x) / 3.14159 + 1.0) * 0.5;":this.W?g=`{ var nx = uv - 0.5; return clamp(cos(${A}) * nx.x + sin(${A}) * nx.y + 0.5, 0.0, 1.0); }`:g=`vec2 nx = uv - 0.5; return clamp(cos(${A}) * nx.x + sin(${A}) * nx.y + 0.5, 0.0, 1.0);`;break}case"shape":{const A=u.type||"circle",T=this.v2(`${p("px",u.posX??.5)}, ${p("py",u.posY??.5)}`),M=p("sc",u.scale??.5),C=p("rad",u.rad??.5),B=p("bl",u.blur??.01),O=p("tk",u.thick??.05);let $;A==="ring"?$=`abs(sdCircle(sp, ${C})) - ${O}`:A==="square"?$=`sdBox(sp, ${this.v2(C)})`:A==="triangle"?$=`sdEquilateralTriangle(sp, ${C})`:A==="polygon"?$=`sdPolygon(sp, ${C}, 6)`:A==="star"?$=`sdStar(sp, ${C}, 5, 2.5)`:$=`sdCircle(sp, ${C})`,this.W?g=`{ var sp = (uv - ${T}) / max(${M}, 0.0001); let d = ${$}; return 1.0 - smoothstep(-${B}, ${B}, d); }`:g=`vec2 sp = (uv - ${T}) / max(${M}, 0.0001); float d = ${$}; return 1.0 - smoothstep(-${B}, ${B}, d);`;break}case"add":g=`return ${m(0)} + ${m(1,p("b",u.b))};`;break;case"subtract":g=`return ${m(0)} - ${m(1,p("b",u.b))};`;break;case"multiply":g=`return ${m(0,"1.0")} * ${m(1,p("b",u.b))};`;break;case"divide":g=`return ${m(0,"1.0")} / max(${m(1,p("b",u.b))}, 0.0001);`;break;case"power":g=`return pow(max(${m(0,"0.5")}, 0.0), ${m(1,p("exp",u.exp))});`;break;case"oneminus":g=`return 1.0 - ${m(0)};`;break;case"abs":g=`return abs(${m(0)});`;break;case"negate":g=`return -(${m(0)});`;break;case"sqrt":g=`return sqrt(max(${m(0)}, 0.0));`;break;case"sign":g=`return sign(${m(0)}) * 0.5 + 0.5;`;break;case"frac":g=`return fract(${m(0)});`;break;case"floor":g=`return floor(${m(0)});`;break;case"ceil":g=`return ceil(${m(0)});`;break;case"min2":g=`return min(${m(0)}, ${m(1,p("b",u.b))});`;break;case"max2":g=`return max(${m(0)}, ${m(1,p("b",u.b))});`;break;case"mod":g=`return ${this.modF(m(0),`max(${m(1,p("b",u.b))}, 0.001)`)};`;break;case"clamp01":g=`return clamp(${m(0)}, 0.0, 1.0);`;break;case"clamp":g=`return clamp(${m(0)}, ${p("lo",u.lo)}, ${p("hi",u.hi)});`;break;case"remap":{const A=p("il",u.inLo),T=p("ih",u.inHi),M=p("ol",u.outLo),C=p("oh",u.outHi);this.W?g=`{ let t = clamp((${m(0)} - ${A}) / max(${T} - ${A}, 0.001), 0.0, 1.0); return ${M} + t * (${C} - ${M}); }`:g=`float t = clamp((${m(0)} - ${A}) / max(${T} - ${A}, 0.001), 0.0, 1.0); return ${M} + t * (${C} - ${M});`;break}case"sin":g=`return sin(${m(0,"uv.x")} * ${p("freq",u.freq)} * 6.28318 + ${p("ph",u.phase)}) * 0.5 + 0.5;`;break;case"cos":g=`return cos(${m(0,"uv.x")} * ${p("freq",u.freq)} * 6.28318 + ${p("ph",u.phase)}) * 0.5 + 0.5;`;break;case"tan":g=`return clamp(tan(${m(0,"uv.x")} * ${p("freq",u.freq)} * 3.14159) * 0.08 + 0.5, 0.0, 1.0);`;break;case"atan2node":g=`return (${this.atan2F(m(0,"uv.y - 0.5"),m(1,"uv.x - 0.5"))} / 3.14159 + 1.0) * 0.5;`;break;case"lerp":g=`return mix(${m(0)}, ${m(1,"1.0")}, clamp(${m(2,p("t",u.t))}, 0.0, 1.0));`;break;case"smoothstep":g=`return smoothstep(${p("lo",u.lo)}, ${p("hi",u.hi)}, ${m(0,"uv.x")});`;break;case"step":g=`return step(${m(0,p("e",u.edge))}, ${m(1,"uv.x")});`;break;case"ifgt":g=`return ${this.sel(`(${m(0)}) > (${m(1,p("b",u.b))})`,m(2,"1.0"),m(3,"0.0"))};`;break;case"blend":{const A=m(0),T=m(1,"1.0"),M=p("op",u.opacity),C=u.mode;let B=T;C==="add"?B=`min(${A} + ${T}, 1.0)`:C==="multiply"?B=`(${A}) * (${T})`:C==="screen"?B=`1.0 - (1.0 - ${A}) * (1.0 - ${T})`:C==="overlay"?B=this.sel(`${A} < 0.5`,`2.0 * ${A} * ${T}`,`1.0 - 2.0 * (1.0 - ${A}) * (1.0 - ${T})`):C==="difference"?B=`abs(${A} - ${T})`:C==="dodge"?B=`clamp(${A} / (1.0 - ${T} + 0.001), 0.0, 1.0)`:C==="burn"&&(B=`clamp(1.0 - (1.0 - ${A}) / (${T} + 0.001), 0.0, 1.0)`),g=`return mix(${A}, ${B}, ${M});`;break}case"levels":{const A=p("il",u.inMin),T=p("ih",u.inMax),M=p("g",u.gamma);this.W?g=`{ let t = clamp((${m(0)} - ${A}) / max(${T} - ${A}, 0.001), 0.0, 1.0); return pow(t, 1.0 / max(${M}, 0.01)); }`:g=`float t = clamp((${m(0)} - ${A}) / max(${T} - ${A}, 0.001), 0.0, 1.0); return pow(t, 1.0 / max(${M}, 0.01));`;break}case"histogram_scan":{const A=p("pos",u.position??.5),T=p("wid",u.width??.1),M=p("ctr",u.contrast??1),C=m(0),B=`smoothstep(${A} - max(${T}, 0.0005), ${A}, ${C})`,O=`(1.0 - smoothstep(${A}, ${A} + max(${T}, 0.0005), ${C}))`;g=`return clamp(${B} * ${O} * ${M}, 0.0, 1.0);`;break}case"histogram_range":{const A=p("inMin",u.inMin??.15),T=p("inMax",u.inMax??.85),M=p("outMin",u.outMin??0),C=p("outMax",u.outMax??1),B=m(0);this.W?g=`{ let t = clamp((${B} - ${A}) / max(${T} - ${A}, 0.0001), 0.0, 1.0); return mix(${M}, ${C}, t); }`:g=`float t = clamp((${B} - ${A}) / max(${T} - ${A}, 0.0001), 0.0, 1.0); return mix(${M}, ${C}, t);`;break}case"curve":{const A=p("lift",u.lift??0),T=p("gamma",u.gamma??1),M=p("gain",u.gain??1);g=`return clamp(pow(clamp(${m(0)} + ${A}, 0.0, 1.0), 1.0 / max(${T}, 0.001)) * ${M}, 0.0, 1.0);`;break}case"transform_2d":{const A=p("offX",u.offsetX??0),T=p("offY",u.offsetY??0),M=`(${p("rot",u.rotation??0)} * 0.017453292519943295)`,C=p("sc",u.scale??1),B=p("tile",u.tile??!0?1:0),O=`((uv - 0.5) / max(${C}, 0.0001))`,W=`(${this.v2(`cos(${M}) * ${O}.x - sin(${M}) * ${O}.y, sin(${M}) * ${O}.x + cos(${M}) * ${O}.y`)} + 0.5 + ${this.v2(`${A}, ${T}`)})`,X=`clamp(${W}, ${this.v2("0.0, 0.0")}, ${this.v2("1.0, 1.0")})`,re=this.sel(`${B} > 0.5`,`fract(${W})`,X);g=`return ${m(0,"0.0",re)};`;break}case"safe_transform":{const A=p("offX",u.offsetX??0),T=p("offY",u.offsetY??0),M=p("sc",u.scale??1),C=p("tile",u.tile??!1?1:0),B=this.sysRef2("u_resolution"),O=`(0.5 / max(min(${B}.x, ${B}.y), 1.0))`,$=`((uv - 0.5) / max(${M}, 0.0001) + 0.5 + ${this.v2(`${A}, ${T}`)})`,W=`clamp(${$}, ${this.v2(`${O}, ${O}`)}, ${this.v2(`1.0 - ${O}, 1.0 - ${O}`)})`,X=this.sel(`${C} > 0.5`,`fract(${$})`,W);g=`return ${m(0,"0.0",X)};`;break}case"warp":{const A=b(1,this.W?"vec2f(0.0)":"vec2(0.0)"),T=p("str",u.strength),M=`(uv + ${A} * ${T})`;g=`return ${m(0,"0.0",M)};`;break}case"vector_warp":{const A=p("int",u.intensity??.15),T=p("ctr",u.centered??!0?1:0),M=p("tile",u.tile??!0?1:0),C=b(1,this.W?"vec2f(0.5)":"vec2(0.5)"),O=`(uv + (${this.sel(`${T} > 0.5`,`(${C} - ${this.v2("0.5, 0.5")})`,C)}) * ${A})`,$=this.sel(`${M} > 0.5`,`fract(${O})`,`clamp(${O}, ${this.v2("0.0, 0.0")}, ${this.v2("1.0, 1.0")})`);g=`return ${m(0,"0.0",$)};`;break}case"directional_warp":{const A=p("amount",u.amount??.15),T=p("angle",u.angle??0),M=m(1,"0.5"),B=`(uv + ${this.v2(`cos(${T}), sin(${T})`)} * ((${M} - 0.5) * ${A}))`;g=`return ${m(0,"0.0",B)};`;break}case"edge_detect":{const A=this.sysRef2("u_resolution"),T=`(${p("radius",u.radius)} / max(${A}.x, ${A}.y))`,M=p("strength",u.strength);this.W?g=`{
            let tl = ${m(0,"0.0",`uv + vec2f(-${T}, -${T})`)};
            let  t = ${m(0,"0.0",`uv + vec2f( 0.0, -${T})`)};
            let tr = ${m(0,"0.0",`uv + vec2f( ${T}, -${T})`)};
            let  l = ${m(0,"0.0",`uv + vec2f(-${T},  0.0)`)};
            let r0 = ${m(0,"0.0",`uv + vec2f( ${T},  0.0)`)};
            let bl = ${m(0,"0.0",`uv + vec2f(-${T},  ${T})`)};
            let  b = ${m(0,"0.0",`uv + vec2f( 0.0,  ${T})`)};
            let br = ${m(0,"0.0",`uv + vec2f( ${T},  ${T})`)};
            let gx = -tl - 2.0*l - bl + tr + 2.0*r0 + br;
            let gy = -tl - 2.0*t - tr + bl + 2.0*b + br;
            let edge = length(vec2f(gx, gy));
            return clamp(edge * ${M}, 0.0, 1.0);
          }`:g=`
            float tl = ${m(0,"0.0",`uv + vec2(-${T}, -${T})`)};
            float  t = ${m(0,"0.0",`uv + vec2( 0.0, -${T})`)};
            float tr = ${m(0,"0.0",`uv + vec2( ${T}, -${T})`)};
            float  l = ${m(0,"0.0",`uv + vec2(-${T},  0.0)`)};
            float r0 = ${m(0,"0.0",`uv + vec2( ${T},  0.0)`)};
            float bl = ${m(0,"0.0",`uv + vec2(-${T},  ${T})`)};
            float  b = ${m(0,"0.0",`uv + vec2( 0.0,  ${T})`)};
            float br = ${m(0,"0.0",`uv + vec2( ${T},  ${T})`)};
            float gx = -tl - 2.0*l - bl + tr + 2.0*r0 + br;
            float gy = -tl - 2.0*t - tr + bl + 2.0*b + br;
            float edge = length(vec2(gx, gy));
            return clamp(edge * ${M}, 0.0, 1.0);
          `;break}case"blur":{const A=p("amt",u.amount??.05),T=p("ctr",u.center??0),M=`${T} - ${A}`,C=`${T} + ${A}`;g=`return 1.0 - smoothstep(${M}, ${C}, ${m(0,"0.5")});`;break}case"highpass_grayscale":{const A=p("radius",u.radius??1),T=p("intensity",u.intensity??1),M=this.sysRef2("u_resolution"),C=`(max(${A}, 0.0001) / max(${M}.x, ${M}.y))`,B=m(0,"0.0"),O=m(0,"0.0",`(uv + ${this.v2(`${C}, 0.0`)})`),$=m(0,"0.0",`(uv - ${this.v2(`${C}, 0.0`)})`),W=m(0,"0.0",`(uv + ${this.v2(`0.0, ${C}`)})`),X=m(0,"0.0",`(uv - ${this.v2(`0.0, ${C}`)})`),re=`((${B} + ${O} + ${$} + ${W} + ${X}) * 0.2)`;g=`return clamp(((${B} - ${re}) * ${T}) + 0.5, 0.0, 1.0);`;break}case"slope_blur":{const A=p("intensity",u.intensity??2),T=p("samples",u.samples??4),M=this.sysRef2("u_resolution"),C=m(1,m(0,"0.5")),O=`(${`normalize(${this.v2(`${C} - 0.5, 1.0 - ${C}`)} + ${this.v2("1e-4, 1e-4")})`} * (${A} / max(${M}.x, ${M}.y)))`,$=`step(0.5, ${T})`,W=`step(1.5, ${T})`,X=`step(2.5, ${T})`,re=`step(3.5, ${T})`,ee=m(0,"0.0"),Z=m(0,"0.0",`(uv + ${O})`),ie=m(0,"0.0",`(uv - ${O})`),q=m(0,"0.0",`(uv + ${O} * 2.0)`),ae=m(0,"0.0",`(uv - ${O} * 2.0)`),z=m(0,"0.0",`(uv + ${O} * 3.0)`),j=m(0,"0.0",`(uv - ${O} * 3.0)`),Pe=m(0,"0.0",`(uv + ${O} * 4.0)`),qe=m(0,"0.0",`(uv - ${O} * 4.0)`),De=`(${ee} + ${$} * (${Z} + ${ie}) + ${W} * (${q} + ${ae}) + ${X} * (${z} + ${j}) + ${re} * (${Pe} + ${qe}))`,fe=`(1.0 + 2.0 * (${$} + ${W} + ${X} + ${re}))`;g=`return clamp(${De} / max(${fe}, 1.0), 0.0, 1.0);`;break}case"non_uniform_blur":{const A=p("radius",u.radius??2),T=p("samples",u.samples??4),M=this.sysRef2("u_resolution"),C=m(1,"1.0"),B=`(max(${A}, 0.0) * clamp(${C}, 0.0, 1.0) / max(${M}.x, ${M}.y))`,O=`step(0.5, ${T})`,$=`step(1.5, ${T})`,W=`step(2.5, ${T})`,X=`step(3.5, ${T})`,re=m(0,"0.0"),ee=m(0,"0.0",`(uv + ${this.v2(`${B}, 0.0`)})`),Z=m(0,"0.0",`(uv - ${this.v2(`${B}, 0.0`)})`),ie=m(0,"0.0",`(uv + ${this.v2(`0.0, ${B}`)})`),q=m(0,"0.0",`(uv - ${this.v2(`0.0, ${B}`)})`),ae=m(0,"0.0",`(uv + ${this.v2(`2.0 * ${B}, 0.0`)})`),z=m(0,"0.0",`(uv - ${this.v2(`2.0 * ${B}, 0.0`)})`),j=m(0,"0.0",`(uv + ${this.v2(`0.0, 2.0 * ${B}`)})`),Pe=m(0,"0.0",`(uv - ${this.v2(`0.0, 2.0 * ${B}`)})`),qe=m(0,"0.0",`(uv + ${this.v2(`3.0 * ${B}, 0.0`)})`),De=m(0,"0.0",`(uv - ${this.v2(`3.0 * ${B}, 0.0`)})`),fe=m(0,"0.0",`(uv + ${this.v2(`0.0, 3.0 * ${B}`)})`),xe=m(0,"0.0",`(uv - ${this.v2(`0.0, 3.0 * ${B}`)})`),Re=m(0,"0.0",`(uv + ${this.v2(`4.0 * ${B}, 0.0`)})`),Je=m(0,"0.0",`(uv - ${this.v2(`4.0 * ${B}, 0.0`)})`),Ze=m(0,"0.0",`(uv + ${this.v2(`0.0, 4.0 * ${B}`)})`),vt=m(0,"0.0",`(uv - ${this.v2(`0.0, 4.0 * ${B}`)})`),Qt=`(${re}
          + ${O} * (${ee} + ${Z} + ${ie} + ${q})
          + ${$} * (${ae} + ${z} + ${j} + ${Pe})
          + ${W} * (${qe} + ${De} + ${fe} + ${xe})
          + ${X} * (${Re} + ${Je} + ${Ze} + ${vt}))`,$t=`(1.0 + 4.0 * (${O} + ${$} + ${W} + ${X}))`;g=`return clamp(${Qt} / max(${$t}, 1.0), 0.0, 1.0);`;break}case"flood_fill":{const A=p("scale",u.scale??8),T=p("threshold",u.threshold??.1),M=p("seed",u.seed??1337),C=p("tileOffsetX",u.tileOffsetX??0),B=p("tileOffsetY",u.tileOffsetY??0),O=p("nonSquare",u.nonSquare??!0?1:0),$=this.W?`(${M})`:`float(${M})`,W=this.sysRef2("u_resolution"),X=`${W}.x / max(${W}.y, 1.0)`,ie=`hash2(${`floor(${`(${this.sel(`${O} > 0.5`,this.v2(`uv.x * (${X}), uv.y`),"uv")} * max(${A}, 1.0) + ${this.v2(`${C}, ${B}`)})`})`} + ${this.v2(`${$} * 0.271, ${$} * 0.619`)})`,q=`step(${T}, ${m(0,"1.0")})`;g=`return ${ie} * ${q};`;break}case"height_to_normal":{const A=this.sysRef2("u_resolution"),T=p("radius",u.radius??1),M=`(1.0 / max(${A}.x, ${A}.y))`,C=`(max(${T}, 0.0001) * ${M})`,B=p("strength",u.strength??1),O=p("flipY",u.flipY??!1?-1:1);this.W?g=`{
            let tl = ${m(0,"0.0",`uv + vec2f(-${C}, -${C})`)};
            let  t = ${m(0,"0.0",`uv + vec2f( 0.0, -${C})`)};
            let tr = ${m(0,"0.0",`uv + vec2f( ${C}, -${C})`)};
            let  l = ${m(0,"0.0",`uv + vec2f(-${C},  0.0)`)};
            let  r0 = ${m(0,"0.0",`uv + vec2f( ${C},  0.0)`)};
            let bl = ${m(0,"0.0",`uv + vec2f(-${C},  ${C})`)};
            let  b = ${m(0,"0.0",`uv + vec2f( 0.0,  ${C})`)};
            let br = ${m(0,"0.0",`uv + vec2f( ${C},  ${C})`)};
            let dX = 3.0 * (tr - tl) + 10.0 * (r0 - l) + 3.0 * (br - bl);
            let dY = 3.0 * (bl - tl) + 10.0 * (b - t) + 3.0 * (br - tr);
            let k = (${B} / max(${T}, 0.0001)) * (1.0 / 32.0);
            let gx = -dX * k;
            let gy = -dY * k * ${O};
            let n = normalize(vec3f(gx, gy, 1.0));
            return n * 0.5 + 0.5;
          }`:g=`{
            float tl = ${m(0,"0.0",`uv + vec2(-${C}, -${C})`)};
            float  t = ${m(0,"0.0",`uv + vec2( 0.0, -${C})`)};
            float tr = ${m(0,"0.0",`uv + vec2( ${C}, -${C})`)};
            float  l = ${m(0,"0.0",`uv + vec2(-${C},  0.0)`)};
            float  r0 = ${m(0,"0.0",`uv + vec2( ${C},  0.0)`)};
            float bl = ${m(0,"0.0",`uv + vec2(-${C},  ${C})`)};
            float  b = ${m(0,"0.0",`uv + vec2( 0.0,  ${C})`)};
            float br = ${m(0,"0.0",`uv + vec2( ${C},  ${C})`)};
            float dX = 3.0 * (tr - tl) + 10.0 * (r0 - l) + 3.0 * (br - bl);
            float dY = 3.0 * (bl - tl) + 10.0 * (b - t) + 3.0 * (br - tr);
            float k = (${B} / max(${T}, 0.0001)) * (1.0 / 32.0);
            float gx = -dX * k;
            float gy = -dY * k * ${O};
            vec3 n = normalize(vec3(gx, gy, 1.0));
            return n * 0.5 + 0.5;
          }`;break}case"normal_combine":{const A=E(0,this.W?"vec3f(0.5, 0.5, 1.0)":"vec3(0.5, 0.5, 1.0)"),T=E(1,this.W?"vec3f(0.5, 0.5, 1.0)":"vec3(0.5, 0.5, 1.0)"),M=p("strength",u.strength??1);this.W?g=`{
            let b = normalize(${A} * 2.0 - 1.0);
            let d = normalize(${T} * 2.0 - 1.0);
            let ds = normalize(vec3f(d.xy * ${M}, d.z));
            let n = normalize(vec3f(b.xy + ds.xy, max(1e-4, b.z * ds.z)));
            return n * 0.5 + 0.5;
          }`:g=`{
            vec3 b = normalize(${A} * 2.0 - 1.0);
            vec3 d = normalize(${T} * 2.0 - 1.0);
            vec3 ds = normalize(vec3(d.xy * ${M}, d.z));
            vec3 n = normalize(vec3(b.xy + ds.xy, max(1e-4, b.z * ds.z)));
            return n * 0.5 + 0.5;
          }`;break}case"normal_normalize":{const A=E(0,this.W?"vec3f(0.5, 0.5, 1.0)":"vec3(0.5, 0.5, 1.0)"),T=p("flipY",u.flipY??!1?-1:1);this.W?g=`{
            let n0 = ${A} * 2.0 - 1.0;
            let n1 = normalize(vec3f(n0.x, n0.y * ${T}, n0.z));
            return n1 * 0.5 + 0.5;
          }`:g=`{
            vec3 n0 = ${A} * 2.0 - 1.0;
            vec3 n1 = normalize(vec3(n0.x, n0.y * ${T}, n0.z));
            return n1 * 0.5 + 0.5;
          }`;break}case"remote":g="return 0.0;";break;case"atom_input":case"atom_input_a":case"atom_input_b":case"atom_input_c":case"atom_input_d":{const A=this.atomInputExprStack.length>0?this.atomInputExprStack[this.atomInputExprStack.length-1]:null,T=this.atomInputPortIndex(r.type)??0,M=(A==null?void 0:A[T])??(A==null?void 0:A[0])??null;if(!M){this.warnings.add(`Atom Input node "${e}" used outside atom graph.`),g="return 0.0;";break}A&&T>=A.length&&this.warnings.add(`Atom Input "${r.type}" requested missing parent port ${T}; using port 0.`),this.mergeExprAtoms(x,M),g=`return ${this.asFloat(M,r.type,`${e}`)};`;break}case"atom_graph":{const A=Math.max(1,((V=(k=Et[r.type])==null?void 0:k.inputs)==null?void 0:V.length)||1),T=[];for(let C=0;C<A;C+=1){const B=this.getSource(e,C,"uv","0.0","float");T.push(B),this.mergeExprAtoms(x,B)}const M=this.compileAtomSubgraph(r,T);this.mergeExprAtoms(x,M),g=`return ${this.asFloat(M,r.type,e)};`;break}case"buffer":{if(t===1){const A=`1.0 / max(${this.sysRef2("u_resolution")}.x, 1.0)`;this.W?g=`{
              let s = ${A};
              let c  = ${m(0,"0.0","uv")};
              let c1 = ${m(0,"0.0","uv + vec2f(s, 0.0)")};
              let c2 = ${m(0,"0.0","uv + vec2f(-s, 0.0)")};
              let c3 = ${m(0,"0.0","uv + vec2f(0.0, s)")};
              let c4 = ${m(0,"0.0","uv + vec2f(0.0, -s)")};
              return (c + c1 + c2 + c3 + c4) * 0.2;
            }`:g=`
              float s = ${A};
              float c  = ${m(0,"0.0","uv")};
              float c1 = ${m(0,"0.0","uv + vec2(s, 0.0)")};
              float c2 = ${m(0,"0.0","uv + vec2(-s, 0.0)")};
              float c3 = ${m(0,"0.0","uv + vec2(0.0, s)")};
              float c4 = ${m(0,"0.0","uv + vec2(0.0, -s)")};
              return (c + c1 + c2 + c3 + c4) * 0.2;
            `}else g=`return ${m(0)};`;break}case"output":g=`return ${m(0)};`;break;case"output_baseColor":g=`return ${m(0)};`;break;case"output_normal":g=`return ${m(0)};`;break;case"output_roughness":g=`return ${m(0)};`;break;case"output_height":g=`return ${m(0)};`;break;case"output_metallic":g=`return ${m(0)};`;break;case"output_ao":g=`return ${m(0)};`;break;default:g="return 0.5;";break}if(this.W){const A=this.toWgslDataType(a),M=[...this.funcBodies.get(c)||[],g].join(`
`),C=((o==null?void 0:o.label)||r.type).replace(/\r?\n/g," ");this.funcDefs.push(`// NodeRef id=${e} type=${r.type} port=${t} label=${C}
fn ${h}(uv: vec2f) -> ${A} {
${M}
}`)}else this.funcDefs.push(`// Node: ${(o==null?void 0:o.label)||r.type} (id=${e})
${a} ${h}(vec2 uv) { ${g} }`);const y={code:`${h}(uv)`,type:a,atoms:x.size>0?new Set(x):void 0};return this.funcExprs.set(c,y),this.cloneExpr(y)}inferUniformType(e,t,r){var c,f;if(Array.isArray(r))return r.length>=4?"vec4":r.length===3?"vec3":r.length===2?"vec2":"float";if(typeof r=="boolean")return"bool";const o=this.nodes.get(e),a=o?(f=(c=Et[o.type])==null?void 0:c.params)==null?void 0:f[t]:void 0;return(a==null?void 0:a.type)==="int"?"int":"float"}toGLSLType(e){return e==="float"||e==="int"?"float":e==="bool"?"bool":e==="vec2"?"vec2":e==="vec3"?"vec3":"vec4"}toReadableSource(e){return e.split(`
`).map(t=>t.trimEnd()).join(`
`).trim()}toRawSource(e){return e.replace(/\/\/[^\n\r]*/g,"").replace(/\s+/g," ").trim()}hashString(e){let t=2166136261;for(let r=0;r<e.length;r++)t^=e.charCodeAt(r),t+=(t<<1)+(t<<4)+(t<<7)+(t<<8)+(t<<24);return`fnv1a_${(t>>>0).toString(16)}`}}const tT=`
// Hash functions
float hash2(vec2 p){p=fract(p*vec2(234.345,435.678));p+=dot(p,p+34.23);return fract(p.x*p.y);}
vec2 hash22(vec2 p){p=vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3)));return -1.0+2.0*fract(sin(p)*43758.5453123);}
float fade1(float t){ return t*t*t*(t*(t*6.0-15.0)+10.0); }
vec2 fade(vec2 t) { return vec2(fade1(t.x), fade1(t.y)); }

// Noise functions
float vnoise(vec2 p, float per, bool tile){
  vec2 i=floor(p);vec2 f=fract(p);vec2 u=f*f*(3.-2.*f);
  vec2 i00=i+vec2(0,0);vec2 i10=i+vec2(1,0);vec2 i01=i+vec2(0,1);vec2 i11=i+vec2(1,1);
  if(tile){i00=mod(i00,per);i10=mod(i10,per);i01=mod(i01,per);i11=mod(i11,per);}
  return mix(mix(hash2(i00),hash2(i10),u.x),mix(hash2(i01),hash2(i11),u.x),u.y);
}
vec2 grad2i(float h){
  float k = mod(h, 8.0);
  float d = 0.70710678118;
  if(k < 0.5) return vec2( 1.0,  0.0);
  if(k < 1.5) return vec2(-1.0,  0.0);
  if(k < 2.5) return vec2( 0.0,  1.0);
  if(k < 3.5) return vec2( 0.0, -1.0);
  if(k < 4.5) return vec2( d,    d);
  if(k < 5.5) return vec2(-d,    d);
  if(k < 6.5) return vec2( d,   -d);
  return vec2(-d,   -d);
}
float hash2i(vec2 i, float seed){
  // Deterministic float hash; WGSL path uses integer hash2i_u32 for strict u32 behavior.
  return floor(fract(sin(dot(i + vec2(seed, seed*1.37), vec2(127.1, 311.7))) * 43758.5453123) * 8.0);
}
float perlin2i_raw(vec2 p, float seed){
  vec2 i=floor(p); vec2 f=fract(p);
  vec2 g00=grad2i(hash2i(i+vec2(0,0), seed));
  vec2 g10=grad2i(hash2i(i+vec2(1,0), seed));
  vec2 g01=grad2i(hash2i(i+vec2(0,1), seed));
  vec2 g11=grad2i(hash2i(i+vec2(1,1), seed));
  float n00=dot(g00, f-vec2(0,0));
  float n10=dot(g10, f-vec2(1,0));
  float n01=dot(g01, f-vec2(0,1));
  float n11=dot(g11, f-vec2(1,1));
  vec2 u=fade(f);
  return mix(mix(n00,n10,u.x),mix(n01,n11,u.x),u.y);
}
float perlin2i(vec2 p, float seed){
  return clamp(perlin2i_raw(p, seed) * 0.5 + 0.5, 0.0, 1.0);
}
float perlin2i_tiled_raw(vec2 p, float per, float seed){
  float perSafe = max(1.0, floor(per + 0.5));
  vec2 i=floor(p); vec2 f=fract(p);
  vec2 i00=mod(i+vec2(0,0), perSafe);
  vec2 i10=mod(i+vec2(1,0), perSafe);
  vec2 i01=mod(i+vec2(0,1), perSafe);
  vec2 i11=mod(i+vec2(1,1), perSafe);
  vec2 g00=grad2i(hash2i(i00, seed));
  vec2 g10=grad2i(hash2i(i10, seed));
  vec2 g01=grad2i(hash2i(i01, seed));
  vec2 g11=grad2i(hash2i(i11, seed));
  float n00=dot(g00, f-vec2(0,0));
  float n10=dot(g10, f-vec2(1,0));
  float n01=dot(g01, f-vec2(0,1));
  float n11=dot(g11, f-vec2(1,1));
  vec2 u=fade(f);
  return mix(mix(n00,n10,u.x),mix(n01,n11,u.x),u.y);
}
float perlin2i_tiled(vec2 p, float per, float seed){
  return clamp(perlin2i_tiled_raw(p, per, seed) * 0.5 + 0.5, 0.0, 1.0);
}
float perlin2_disordered(vec2 p0, float seed, float disorder, float disorderSpeed, float time){
  float t = time * disorderSpeed;
  float w1 = perlin2i_raw(p0 + vec2(17.0,53.0) + vec2( t*0.73, -t*0.41), seed + 101.0);
  float w2 = perlin2i_raw(p0 + vec2(113.0,7.0) + vec2(-t*0.29,  t*0.87), seed + 211.0);
  vec2 w = vec2(w1, w2);
  return perlin2i(p0 + disorder * w, seed);
}
float fbm(vec2 p,float oct,float per,float tileFlag){
  float v=0.,a=.5,mx=0.;
  bool tile = tileFlag > 0.5;
  for(int i=0;i<8;i++){
    float m = step(float(i) + 0.5, oct);
    v += a * vnoise(p, per, tile) * m;
    mx += a * m;
    p*=2.; per*=2.; a*=.5;
  }
  return mx>0.?v/mx:0.;
}

vec4 voro(vec2 p,float jt,float per,bool tile){
  vec2 n=floor(p);vec2 f=fract(p);if(tile){n=mod(n,per);}
  float f1=8.;float f2=8.;vec2 id=vec2(0.);
  for(int j=-1;j<=1;j++)for(int i=-1;i<=1;i++){
    vec2 g=vec2(float(i),float(j));vec2 neighbor=n+g;if(tile)neighbor=mod(neighbor,per);
    vec2 o=hash22(neighbor);vec2 r=g+o*jt-f;float d=dot(r,r);
    if(d<f1){f2=f1;f1=d;id=o;}else if(d<f2){f2=d;}
  }
  f1=sqrt(f1);f2=sqrt(f2);return vec4(f1,f2,f2-f1,id.x);
}

// SDFs
float sdCircle(vec2 p, float r) { return length(p) - r; }
float sdBox(vec2 p, vec2 b) { vec2 d = abs(p) - b; return length(max(d,0.0)) + min(max(d.x,d.y),0.0); }
float sdEquilateralTriangle(vec2 p, float r) { const float k = sqrt(3.0); p.x = abs(p.x) - r; p.y = p.y + r/k; if(p.x+k*p.y>0.0) p = vec2(p.x-k*p.y,-k*p.x-p.y)/2.0; p.x -= clamp(p.x, -2.0*r, 0.0); return -length(p)*sign(p.y); }
float sdPolygon(vec2 p, float r, int n) { float an = 3.141593/float(n); float bn = mod(atan(p.x,p.y),2.0*an) - an; p = length(p)*vec2(cos(bn),abs(sin(bn))); p -= r*vec2(cos(an),sin(an)); p.y += clamp(-p.y, 0.0, r*tan(an)); return length(p)*sign(p.x); }
float sdStar(vec2 p, float r, int n, float m) { float an = 3.141593/float(n); float en = 3.141593/m;  vec2  acs = vec2(cos(an),sin(an)); vec2  ecs = vec2(cos(en),sin(en)); float bn = mod(atan(p.x,p.y),2.0*an) - an; p = length(p)*vec2(cos(bn),abs(sin(bn))); p -= r*acs; p += ecs*clamp(-dot(p,ecs), 0.0, r*acs.y/ecs.y); return length(p)*sign(p.x); }
`,nT=`
struct UBlock { data: array<vec4f, 64> };
@group(0) @binding(0) var<uniform> ub: UBlock;
fn uf(i: u32) -> f32 { return ub.data[i >> 2u][i & 3u]; }

struct VSOut { @builtin(position) pos: vec4f, @location(0) uv: vec2f };
@vertex fn vs_main(@builtin(vertex_index) vi: u32) -> VSOut {
  var p = array<vec2f, 3>(vec2f(-1, -1), vec2f(3, -1), vec2f(-1, 3));
  var out: VSOut; out.pos = vec4f(p[vi], 0, 1); out.uv = p[vi] * 0.5 + 0.5; return out;
}
@fragment fn fs_main(inp: VSOut) -> @location(0) vec4f { return vec4f(0, 0, 0, 1); }
`;class La{constructor(e){this.nodes=new Map,this.edges=new Map,this.frames=new Map,this.edgesByTargetPort=new Map,this.resolution=null,this.lastValidationError=null,e&&(e.nodes.forEach(t=>this.nodes.set(t.id,t)),e.edges.forEach(t=>this.linkEdge(t)),(e.frames||[]).forEach(t=>this.frames.set(t.id,{...t})),e.resolution&&(this.resolution=e.resolution))}setResolution(e){this.resolution=e}addNode(e,t,r){const o=Et[e];if(!o)return null;const a=Math.random().toString(36).slice(2,9),c={};for(const[h,u]of Object.entries(o.params))c[h]=u.default;const f={id:a,type:e,x:t,y:r,params:c};return this.nodes.set(a,f),f}removeNode(e){this.nodes.delete(e);for(const[t,r]of this.edges)(r.fromId===e||r.toId===e)&&this.unlinkEdge(t)}addFrame(e,t,r=420,o=260,a="Frame",c="#4d78bc"){const f=Math.random().toString(36).slice(2,9),h={id:f,x:e,y:t,width:Math.max(140,r),height:Math.max(100,o),label:a,color:c};return this.frames.set(f,h),h}moveFrame(e,t,r){const o=this.frames.get(e);o&&(o.x=t,o.y=r)}resizeFrame(e,t,r){const o=this.frames.get(e);o&&(o.width=Math.max(140,t),o.height=Math.max(100,r))}updateFrame(e,t){const r=this.frames.get(e);if(!r)return;const o={...r,...t};o.width=Math.max(140,o.width),o.height=Math.max(100,o.height),this.frames.set(e,o)}removeFrame(e){this.frames.delete(e)}targetKey(e,t){return`${e}:${t}`}linkEdge(e){this.edges.set(e.id,e),this.edgesByTargetPort.set(this.targetKey(e.toId,e.toPort),e.id)}unlinkEdge(e){const t=this.edges.get(e);t&&(this.edgesByTargetPort.delete(this.targetKey(t.toId,t.toPort)),this.edges.delete(e))}validateConnection(e,t,r,o){var x;const a=this.nodes.get(e),c=this.nodes.get(r);if(!a||!c)return{ok:!1,error:"Connection endpoints not found."};const f=Vv(a.type),h=Vv(c.type);if(!f||!h)return{ok:!1,error:"Node definition not found."};const u=f.outputs[t],p=h.inputs[o];return u?p?((x=p.constraints)!=null&&x.allowedTypes&&p.constraints.allowedTypes.length>0?p.constraints.allowedTypes:[p.type]).includes(u.type)?this.createsCycle(e,r)?{ok:!1,error:"Cycle detected."}:{ok:!0}:{ok:!1,error:`Type mismatch: cannot connect ${u.type} to ${p.type} (${c.type}.${p.id}).`}:{ok:!1,error:`Input port ${o} is invalid for ${c.type}.`}:{ok:!1,error:`Output port ${t} is invalid for ${a.type}.`}}addEdge(e,t,r,o=0){const a=this.validateConnection(e,o,t,r);if(!a.ok)return this.lastValidationError=a.error||"Invalid connection.",console.warn(this.lastValidationError),null;this.lastValidationError=null;const c=this.edgesByTargetPort.get(this.targetKey(t,r));c&&this.unlinkEdge(c);const h={id:Math.random().toString(36).slice(2,9),fromId:e,fromPort:o,toId:t,toPort:r};return this.linkEdge(h),h}removeEdge(e){this.unlinkEdge(e)}updateParam(e,t,r){const o=this.nodes.get(e);o&&(o.params={...o.params,[t]:r})}moveNode(e,t,r){const o=this.nodes.get(e);o&&(o.x=t,o.y=r)}getExecutionOrder(){const e=[],t=new Map,r=new Map;for(const a of this.nodes.keys())t.set(a,0),r.set(a,[]);for(const a of this.edges.values()){const c=a.fromId,f=a.toId;r.has(c)&&t.has(f)&&(r.get(c).push(f),t.set(f,t.get(f)+1))}const o=[];for(const[a,c]of t)c===0&&o.push(a);for(;o.length>0;){const a=o.shift();e.push(a);for(const c of r.get(a))t.set(c,t.get(c)-1),t.get(c)===0&&o.push(c)}return e.length!==this.nodes.size?(console.error("Cycle detected in graph sort"),[]):e}createsCycle(e,t){return e===t?!0:((o,a)=>{const c=[o],f=new Set;for(;c.length>0;){const h=c.shift();if(h===a)return!0;if(!f.has(h)){f.add(h);for(const u of this.edges.values())u.fromId===h&&c.push(u.toId)}}return!1})(t,e)}serialize(){return{nodes:Array.from(this.nodes.values()),edges:Array.from(this.edges.values()),frames:Array.from(this.frames.values()),resolution:this.resolution}}}const _s=2;function iT(n){const e=[],t=[];if(n.schemaVersion==null&&e.push("Missing schemaVersion"),!Array.isArray(n.nodes))return e.push("nodes must be an array"),{ok:!1,errors:e,warnings:t};if(!Array.isArray(n.edges))return e.push("edges must be an array"),{ok:!1,errors:e,warnings:t};if(!Array.isArray(n.frames))return e.push("frames must be an array"),{ok:!1,errors:e,warnings:t};const r=new Set;for(const f of n.nodes){if(!f.id||!f.type){e.push("Node missing id or type");continue}r.has(f.id)&&e.push(`Duplicate node id "${f.id}"`),r.add(f.id),Et[f.type]||t.push(`Unknown node type "${f.type}"`)}const o=new Set;for(const f of n.edges){if(!f.id){e.push("Edge missing id");continue}o.has(f.id)&&e.push(`Duplicate edge id "${f.id}"`),o.add(f.id),r.has(f.fromId)||e.push(`Edge ${f.id}: fromId "${f.fromId}" not found`),r.has(f.toId)||e.push(`Edge ${f.id}: toId "${f.toId}" not found`)}n.nodes.some(f=>_n(f.type))||t.push("Graph has no output node");const c=new Set;for(const f of n.frames){if(!f.id){e.push("Frame missing id");continue}c.has(f.id)&&e.push(`Duplicate frame id "${f.id}"`),c.add(f.id)}return{ok:e.length===0,errors:e,warnings:t}}function rT(n){return(n.schemaVersion??n.version??1)>=_s?{schemaVersion:n.schemaVersion??_s,nodes:n.nodes??[],edges:n.edges??[],frames:(n.frames??[]).map(t=>({id:t.id,x:t.x??0,y:t.y??0,width:t.width??280,height:t.height??180,label:typeof t.label=="string"&&t.label.length>0?t.label:"Frame",color:typeof t.color=="string"?t.color:void 0})),resolution:n.resolution??512,meta:n.meta??{name:"Untitled",created:Date.now(),modified:Date.now()}}:{schemaVersion:_s,nodes:(n.nodes??[]).map(t=>({id:t.id,type:t.type,x:t.x??0,y:t.y??0,params:t.params??{}})),edges:(n.edges??[]).map(t=>({id:t.id,fromId:t.fromId,fromPort:t.fromPort??0,toId:t.toId,toPort:t.toPort??0})),frames:(n.frames??[]).map(t=>({id:t.id,x:t.x??0,y:t.y??0,width:t.width??280,height:t.height??180,label:typeof t.label=="string"&&t.label.length>0?t.label:"Frame",color:typeof t.color=="string"?t.color:void 0})),resolution:n.resolution??512,meta:{name:n.name??"Untitled",created:n.created??Date.now(),modified:Date.now()}}}function sT(n=600,e=200){return{schemaVersion:_s,nodes:[{id:"out_base",type:"output_baseColor",x:n,y:e-350,params:{}},{id:"out_rough",type:"output_roughness",x:n,y:e-210,params:{}},{id:"out_normal",type:"output_normal",x:n,y:e-70,params:{}},{id:"out_metal",type:"output_metallic",x:n,y:e+70,params:{}},{id:"out_ao",type:"output_ao",x:n,y:e+210,params:{}},{id:"out_height",type:"output_height",x:n,y:e+350,params:{}}],edges:[],frames:[],resolution:512,meta:{name:"Untitled",created:Date.now(),modified:Date.now()}}}function oT(n){const e={...n,meta:{...n.meta,modified:Date.now()}};return JSON.stringify(e,null,2)}function aT(n,e){return{schemaVersion:_s,nodes:n.nodes,edges:n.edges,frames:n.frames??[],resolution:e??n.resolution??512,meta:{name:"Untitled",created:Date.now(),modified:Date.now()}}}function us(n){return{schemaVersion:n.schemaVersion,nodes:n.nodes,edges:n.edges,frames:n.frames,resolution:n.resolution}}const jv=new Set(["time","panner"]);function lT(n){var x,m;const e=new Map(n.nodes.map(b=>[b.id,b])),t=new Map,r=new Map;for(const b of n.edges)(t.get(b.toId)??(t.set(b.toId,[]),t.get(b.toId))).push(b),(r.get(b.fromId)??(r.set(b.fromId,[]),r.get(b.fromId))).push(b);const o=new Map;for(const b of n.nodes)o.set(b.id,0);for(const b of n.edges)o.set(b.toId,(o.get(b.toId)??0)+1);const a=[];for(const[b,E]of o)E===0&&a.push(b);const c=[];for(;a.length;){const b=a.shift();c.push(b);for(const E of r.get(b)??[]){const g=(o.get(E.toId)??1)-1;o.set(E.toId,g),g===0&&a.push(E.toId)}}const f=new Map,h=new Map;for(const b of c){const E=new Set,g=[];for(const y of t.get(b)??[]){E.add(y.fromId),g.push(y.fromId);for(const P of f.get(y.fromId)??[])E.add(P)}f.set(b,E),h.set(b,g)}const u=new Map;for(const b of c){const E=e.get(b),g=Et[E.type],y=((g==null?void 0:g.inputs)??[]).map((V,A)=>{var C,B;const T=n.edges.find(O=>O.toId===b&&O.toPort===A);if(!T)return null;const M=Et[((C=e.get(T.fromId))==null?void 0:C.type)??""];return((B=M==null?void 0:M.outputs[T.fromPort])==null?void 0:B.type)??null}),P=((g==null?void 0:g.outputs)??[]).map(V=>V.type),N=[...f.get(b)??[]].every(V=>{var A;return((A=u.get(V))==null?void 0:A.isConstant)??!1}),k=!jv.has(E.type)&&(((x=t.get(b))==null?void 0:x.length)??0)===0?E.type==="constant":N&&!jv.has(E.type);u.set(b,{id:b,type:E.type,params:E.params,inputTypes:y,outputTypes:P,isConstant:k})}const p=n.edges.map(b=>{var N,k,V,A;const E=Et[((N=e.get(b.fromId))==null?void 0:N.type)??""],g=Et[((k=e.get(b.toId))==null?void 0:k.type)??""],y=((V=E==null?void 0:E.outputs[b.fromPort])==null?void 0:V.type)??"float",P=((A=g==null?void 0:g.inputs[b.toPort])==null?void 0:A.type)??"float";return{id:b.id,from:{nodeId:b.fromId,portIndex:b.fromPort,type:y},to:{nodeId:b.toId,portIndex:b.toPort,type:P},castNeeded:y!==P}}),_=((m=n.nodes.find(b=>_n(b.type)))==null?void 0:m.id)??null;return{nodes:u,edges:p,order:c,deps:f,directDeps:h,outputNodeId:_}}function g_(n){let e=2166136261;for(let t=0;t<n.length;t++)e^=n.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0).toString(36)}function cT(n,e,t){const r=[n.type,JSON.stringify(n.params)];for(const o of t){const a=e.get(o);a&&r.push(a)}return g_(r.join("|"))}function uT(n,e){const t=lT(n),r=new Map;if(e)for(const f of e.nodes)r.set(f.nodeId,f.cacheKey);const o=new Map,a=[];for(const f of t.order){const h=t.nodes.get(f),u=t.directDeps.get(f)??[],p=cT(h,o,u);o.set(f,p),a.push({nodeId:f,type:h.type,cacheKey:p,isConstant:h.isConstant,dirty:r.get(f)!==p,directDeps:u})}const c=g_(a.map(f=>f.cacheKey).join(":"));return{nodes:a,typedGraph:t,hash:c}}function dT(n){return n.nodes.filter(e=>e.dirty).map(e=>e.nodeId)}function fT(n,e){return n==="bool"?!!e:n==="int"?Math.trunc(Number(e)||0):n==="float"?Number(e)||0:e}function pT(n,e,t){var c;if(e in t)return e;const r={val:"value",spd:"speed",sc:"scale",se:"seed",jt:"jitter",ang:"angle",px:"posX",py:"posY",r:"rot",rad:"rad",bl:"blur",tk:"thick",exp:"exp",freq:"freq",ph:"phase",t:"t",e:"edge",op:"opacity",g:"gamma",str:"strength",il:"inMin",ih:"inMax",ol:"outLo",oh:"outHi"},a=((c={add:{b:"b"},subtract:{b:"b"},multiply:{b:"b"},divide:{b:"b"},min2:{b:"b"},max2:{b:"b"},mod:{b:"b"},ifgt:{b:"b"},remap:{il:"inLo",ih:"inHi",ol:"outLo",oh:"outHi"},clamp:{lo:"lo",hi:"hi"},smoothstep:{lo:"lo",hi:"hi"},shape:{px:"posX",py:"posY",sc:"scale",bl:"blur",tk:"thick"},panner:{sx:"speedX",sy:"speedY"},levels:{il:"inMin",ih:"inMax",g:"gamma"},step:{e:"edge"}}[n])==null?void 0:c[e])||r[e];return a&&a in t?a:e}function ps(n,e){const t=new Map(e.nodes.map(o=>[o.id,o])),r={...n.uniformBindings};for(const o of n.uniforms){if(o.nodeId==="system")continue;const a=t.get(o.nodeId);if(!a)continue;const c=pT(a.type,o.key,a.params);c in a.params&&(r[o.name]={value:fT(o.type,a.params[c])})}return{...n,uniformBindings:r}}const hT=new Set(["sides"]);function v_(n){const e=[...n.nodes].sort((r,o)=>r.id.localeCompare(o.id)).map(r=>{const o=Et[r.type];if(!o)return`${r.id}:${r.type}`;const a=Object.keys(o.params).filter(c=>o.params[c].type==="select"||hT.has(c)).sort().map(c=>`${c}=${String(r.params[c])}`).join(",");return`${r.id}:${r.type}:${a}`}).join("|"),t=[...n.edges].sort((r,o)=>`${r.fromId}:${r.fromPort}:${r.toId}:${r.toPort}`.localeCompare(`${o.fromId}:${o.fromPort}:${o.toId}:${o.toPort}`)).map(r=>`${r.fromId}:${r.fromPort}>${r.toId}:${r.toPort}`).join("|");return`${e}::${t}`}function yh(n){const e=v_(n),t=[...n.nodes].sort((r,o)=>r.id.localeCompare(o.id)).map(r=>JSON.stringify(r.params)).join("|");return`${e}|${n.resolution??512}|${t}`}class mT{constructor(e){this.plan=null,this.shaderCache=new Map,this._compilerBuild=m_,this.historyPast=[],this.historyFuture=[],this.maxHistory=100,e&&"schemaVersion"in e&&e.meta?this.ir=e:e?this.ir=aT(e):this.ir=sT(),this.engine=new La(us(this.ir)),this.rebuildPlan()}getIR(){return this.ir}getGraphData(){return us(this.ir)}getResolution(){return this.ir.resolution}getPlan(){return this.plan}setResolution(e){this.ir={...this.ir,resolution:e},this.engine.setResolution(e)}sync(){const e=this.engine.serialize();return this.ir={...this.ir,nodes:e.nodes,edges:e.edges,frames:e.frames??[],meta:{...this.ir.meta,modified:Date.now()}},this.rebuildPlan(),e}pushHistory(){this.historyPast.push(JSON.stringify(this.ir)),this.historyPast.length>this.maxHistory&&this.historyPast.shift(),this.historyFuture=[]}addNode(e,t,r,o=!0){o&&this.pushHistory();const a=this.engine.addNode(e,t,r);return{graph:this.sync(),node:a}}removeNode(e){return this.pushHistory(),this.engine.removeNode(e),this.sync()}connect(e,t,r){return this.pushHistory(),this.engine.addEdge(e,t,r),this.sync()}disconnect(e){return this.pushHistory(),this.engine.removeEdge(e),this.sync()}updateParam(e,t,r){return this.engine.updateParam(e,t,r),this.sync()}moveNode(e,t,r){this.engine.moveNode(e,t,r);const o=this.engine.serialize();return this.ir={...this.ir,nodes:o.nodes,frames:o.frames??this.ir.frames,meta:{...this.ir.meta,modified:Date.now()}},o}undo(){return this.historyPast.length?(this.historyFuture.push(JSON.stringify(this.ir)),this.ir=JSON.parse(this.historyPast.pop()),this.engine=new La(us(this.ir)),this.rebuildPlan(),us(this.ir)):null}redo(){return this.historyFuture.length?(this.historyPast.push(JSON.stringify(this.ir)),this.ir=JSON.parse(this.historyFuture.pop()),this.engine=new La(us(this.ir)),this.rebuildPlan(),us(this.ir)):null}canUndo(){return this.historyPast.length>0}canRedo(){return this.historyFuture.length>0}serialize(){return oT(this.ir)}load(e){this.ir=rT(e);const t=iT(this.ir);return t.ok||console.warn("GraphIR validation errors:",t.errors),this.engine=new La(us(this.ir)),this.rebuildPlan(),this.historyPast=[],this.historyFuture=[],us(this.ir)}updateNodePositions(e,t){const r=new Map(e.map(o=>[o.id,o]));for(const o of this.ir.nodes){const a=r.get(o.id);a&&(o.x=a.x,o.y=a.y)}if(this.engine.nodes.forEach((o,a)=>{const c=r.get(a);c&&(o.x=c.x,o.y=c.y)}),t){const o=t.map(a=>({...a}));this.ir.frames=o,this.engine.frames=new Map(o.map(a=>[a.id,{...a}]))}this.ir.meta={...this.ir.meta,modified:Date.now()}}rebuildPlan(){this.plan=uT(this.ir,this.plan??void 0),this.shaderCache.clear()}compile(e){var b;const t=performance.now(),r=us(this.ir),o=e.targetNodeId??"output",a=e.targetPort??0,c=e.outputChannel??"baseColor",f=e.readable??!0,h=e.wgslVariant??"hq",u=`${(b=this.plan)==null?void 0:b.hash}|${this._compilerBuild}|${o}:${a}|${c}|${f}|wgsl:${h}`,p=this.shaderCache.get(u);if(p)return{glsl:ps(p.glsl,r),wgsl:ps(p.wgsl,r),plan:this.plan,compileTimeMs:performance.now()-t};const _=e.targetNodeId?{nodeId:e.targetNodeId,nodeOutputPort:a}:{},x=new Sr(r).compile({backend:"glsl",readable:f,outputChannel:c,..._}),m=new Sr(r).compile({backend:"wgsl",readable:f,outputChannel:c,wgslVariant:h,..._});return this.shaderCache.set(u,{glsl:x,wgsl:m}),{glsl:ps(x,r),wgsl:ps(m,r),plan:this.plan,compileTimeMs:performance.now()-t}}compileNode(e,t=0){const r=us(this.ir),o=new Sr(r).compile({nodeId:e,nodeOutputPort:t,readable:!0,backend:"glsl"});return ps(o,r)}invalidateCache(){this.shaderCache.clear()}getRemoteValues(){const e={};for(const t of this.ir.nodes)t.type==="remote"&&(e[t.id]={target:t.params.target||"",key:t.params.key||"",value:t.params.value??0,label:t.params.label||t.params.key||""});return e}saveRemotePreset(e){const t=this.getRemoteValues(),r=`nt.remote_preset.${e}`;localStorage.setItem(r,JSON.stringify(t))}loadRemotePreset(e){const t=`nt.remote_preset.${e}`,r=localStorage.getItem(t);if(!r)return null;try{const o=JSON.parse(r);for(const[a,c]of Object.entries(o)){const f=this.ir.nodes.find(h=>h.id===a);!f||f.type!=="remote"||(this.engine.updateParam(a,"value",c.value),c.target&&c.key&&this.engine.updateParam(c.target,c.key,c.value))}return this.sync()}catch{return null}}getRemotePresetNames(){const e="nt.remote_preset.",t=[];for(let r=0;r<localStorage.length;r++){const o=localStorage.key(r);o!=null&&o.startsWith(e)&&t.push(o.slice(e.length))}return t.sort()}deleteRemotePreset(e){localStorage.removeItem(`nt.remote_preset.${e}`)}}class gT{constructor(){this.operators=new Map}registerOperator(e){this.operators.set(e.id,e)}getOperator(e){return this.operators.get(e)}getAll(){return Array.from(this.operators.values())}listVisible(e){return this.getAll().filter(t=>t.visible?t.visible(e):!0)}runOperator(e,t,r){const o=this.getOperator(e);if(!o)return!1;const a=o.visible?o.visible(t):!0,c=o.enabled?o.enabled(t):!0;return!a||!c?!1:(o.run(t,r),!0)}}const Oc=new gT,vT=n=>Oc.registerOperator(n),Xv=(n,e,t)=>Oc.runOperator(n,e,t),Ea=n=>n.selection.nodeIds[0]||(n.hover.kind==="node"?n.hover.nodeId:""),Sh=(n,e)=>{const t=n.graph.nodes.find(o=>o.id===e);if(!t||_n(t.type))return!1;const r=Et[t.type];return!!r&&Object.keys(r.params).length>0},Yv=n=>n==="float"?"constant":n==="vec3"?"uniform_color":null,qv=(n,e,t)=>n.graph.edges.find(r=>r.toId===e&&r.toPort===t),xT=[{id:"edit.undo",label:"Undo",category:"Edit",keywords:["undo","history","back"],shortcut:"Ctrl+Z",visible:()=>!0,run:n=>n.actions.undo()},{id:"edit.redo",label:"Redo",category:"Edit",keywords:["redo","history","forward"],shortcut:"Ctrl+Y",visible:()=>!0,run:n=>n.actions.redo()},{id:"graph.add_node",label:"Add Node...",category:"Graph",keywords:["create","new","node","add"],shortcut:"Shift+A",visible:()=>!0,run:n=>{const e=n.hover.kind==="edge"?"edge":n.hover.kind==="port"?"port":"canvas";n.actions.openNodePicker({origin:e,graphX:n.mouse.graphX,graphY:n.mouse.graphY,edgeId:n.hover.kind==="edge"?n.hover.edgeId:void 0,port:n.hover.kind==="port"?{nodeId:n.hover.nodeId,portIndex:n.hover.portIndex,direction:n.hover.direction,type:n.hover.type}:void 0}),n.actions.closeContextMenu()}},{id:"graph.copy",label:"Copy",category:"Edit",keywords:["copy","clipboard"],shortcut:"Ctrl+C",visible:n=>n.selection.nodeIds.length>0||n.hover.kind==="node",enabled:n=>{const e=n.selection.nodeIds[0]||(n.hover.kind==="node"?n.hover.nodeId:""),t=n.graph.nodes.find(r=>r.id===e);return!!t&&!_n(t.type)},run:n=>{const e=n.selection.nodeIds[0]||(n.hover.kind==="node"?n.hover.nodeId:"");e&&(n.actions.copyNode(e),n.actions.closeContextMenu())}},{id:"node.copy_params",label:"Copy Parameters",category:"Node",keywords:["copy","params","parameter","values"],visible:n=>{const e=Ea(n);return!!e&&Sh(n,e)},run:n=>{const e=Ea(n);e&&(n.actions.copyNodeParams(e),n.actions.closeContextMenu())}},{id:"node.paste_params",label:"Paste Parameters",category:"Node",keywords:["paste","params","parameter","values"],visible:n=>{const e=Ea(n);return!!e&&Sh(n,e)},enabled:n=>{const e=Ea(n);return!!e&&n.actions.canPasteNodeParams(e)},run:n=>{const e=Ea(n);e&&(n.actions.pasteNodeParams(e),n.actions.closeContextMenu())}},{id:"node.reset_params",label:"Reset Parameters",category:"Node",keywords:["reset","params","defaults","parameter"],visible:n=>{const e=Ea(n);return!!e&&Sh(n,e)},run:n=>{const e=Ea(n);e&&(n.actions.resetNodeParams(e),n.actions.closeContextMenu())}},{id:"graph.paste",label:"Paste",category:"Edit",keywords:["paste","clipboard"],shortcut:"Ctrl+V",visible:()=>!0,enabled:n=>!!n.clipboard.node,run:n=>{n.actions.pasteNodeAt(n.mouse.graphX,n.mouse.graphY),n.actions.closeContextMenu()}},{id:"graph.duplicate",label:"Duplicate",category:"Edit",keywords:["duplicate","clone"],shortcut:"Ctrl+D",visible:n=>n.selection.nodeIds.length>0||n.hover.kind==="node",run:n=>{const e=n.selection.nodeIds[0]||(n.hover.kind==="node"?n.hover.nodeId:"");e&&(n.actions.duplicateNode(e),n.actions.closeContextMenu())}},{id:"graph.delete",label:"Delete",category:"Edit",keywords:["delete","remove"],shortcut:"Del",visible:n=>n.hover.kind==="node"||n.hover.kind==="edge"||n.selection.nodeIds.length>0,run:n=>{if(n.hover.kind==="edge"){n.actions.removeEdge(n.hover.edgeId),n.actions.closeContextMenu();return}const e=n.selection.nodeIds[0]||(n.hover.kind==="node"?n.hover.nodeId:"");e&&(n.actions.removeNode(e),n.actions.closeContextMenu())}},{id:"graph.disconnect_edge",label:"Disconnect Link",category:"Link",keywords:["disconnect","unlink","edge"],visible:n=>n.hover.kind==="edge",run:n=>{n.hover.kind==="edge"&&(n.actions.removeEdge(n.hover.edgeId),n.actions.closeContextMenu())}},{id:"graph.insert_node_on_edge",label:"Insert Node...",category:"Link",keywords:["insert","edge","reroute"],visible:n=>n.hover.kind==="edge",run:n=>{n.hover.kind==="edge"&&(n.actions.openNodePicker({origin:"edge",edgeId:n.hover.edgeId,graphX:n.mouse.graphX,graphY:n.mouse.graphY}),n.actions.closeContextMenu())}},{id:"graph.add_node_from_port",label:"Add Node from Port...",category:"Link",keywords:["port","add","connect"],visible:n=>n.hover.kind==="port",run:n=>{n.hover.kind==="port"&&(n.actions.openNodePicker({origin:"port",graphX:n.mouse.graphX,graphY:n.mouse.graphY,port:{nodeId:n.hover.nodeId,portIndex:n.hover.portIndex,direction:n.hover.direction,type:n.hover.type}}),n.actions.closeContextMenu())}},{id:"graph.disconnect_input_port",label:"Disconnect Input",category:"Link",keywords:["disconnect","unlink","input","port"],visible:n=>n.hover.kind==="port"&&n.hover.direction==="in",enabled:n=>n.hover.kind!=="port"||n.hover.direction!=="in"?!1:!!qv(n,n.hover.nodeId,n.hover.portIndex),run:n=>{if(n.hover.kind!=="port"||n.hover.direction!=="in")return;const e=qv(n,n.hover.nodeId,n.hover.portIndex);e&&(n.actions.removeEdge(e.id),n.actions.closeContextMenu())}},{id:"graph.attach_source_to_port",label:"Attach Source",category:"Link",keywords:["attach","source","constant","uniform","port"],visible:n=>n.hover.kind!=="port"||n.hover.direction!=="in"?!1:!!Yv(n.hover.type),run:n=>{if(n.hover.kind!=="port"||n.hover.direction!=="in")return;const e=Yv(n.hover.type);e&&(n.actions.addNodeFromPort({nodeId:n.hover.nodeId,portIndex:n.hover.portIndex,direction:"in"},e,n.mouse.graphX-240,n.mouse.graphY-24),n.actions.closeContextMenu())}},{id:"view.frame_all",label:"Frame All",category:"View",keywords:["frame","view","fit"],shortcut:"Home",visible:n=>n.hover.kind==="canvas",run:n=>{n.actions.frameAll(),n.actions.closeContextMenu()}},{id:"view.reset_view",label:"Reset View",category:"View",keywords:["reset","view","zoom"],visible:n=>n.hover.kind==="canvas",run:n=>{n.actions.resetView(),n.actions.closeContextMenu()}},{id:"preview.pin_to_node",label:"Pin Preview to Node",category:"Preview",keywords:["pin","preview","lock","node"],visible:n=>n.hover.kind==="node"||n.selection.nodeIds.length>0,enabled:n=>{const e=n.selection.nodeIds[0]||(n.hover.kind==="node"?n.hover.nodeId:""),t=n.graph.nodes.find(r=>r.id===e);return!!t&&!_n(t.type)},run:n=>{var t,r;const e=n.selection.nodeIds[0]||(n.hover.kind==="node"?n.hover.nodeId:"");(r=(t=n.actions).pinPreviewToNode)==null||r.call(t,e||null),n.actions.closeContextMenu()}},{id:"preview.unpin",label:"Unpin Preview",category:"Preview",keywords:["unpin","preview","unlock"],visible:()=>!0,run:n=>{var e,t;(t=(e=n.actions).pinPreviewToNode)==null||t.call(e,null),n.actions.closeContextMenu()}},{id:"debug.chaos_toggle",label:"Toggle Chaos Mode",category:"Debug",keywords:["chaos","fuzz","stress","random","crash"],visible:()=>!1,enabled:n=>!!n.actions.toggleChaosMode,run:n=>{var e,t;(t=(e=n.actions).toggleChaosMode)==null||t.call(e),n.actions.closeContextMenu()}},{id:"debug.chaos_step",label:"Chaos Step Once",category:"Debug",keywords:["chaos","fuzz","step","stress","random"],visible:()=>!1,enabled:n=>!!n.actions.stepChaosModeOnce,run:n=>{var e,t;(t=(e=n.actions).stepChaosModeOnce)==null||t.call(e),n.actions.closeContextMenu()}}];let Kv=!1;const _T=()=>{Kv||(Kv=!0,xT.forEach(vT))},Hm="nt.app.logs.v1",wm="nt:app-logs-updated",Zv=800,yT=1500;function Gm(){try{const n=localStorage.getItem(Hm);if(!n)return[];const e=JSON.parse(n);return Array.isArray(e)?e.filter(t=>t&&typeof t.id=="string"&&typeof t.ts=="string"&&typeof t.level=="string"&&typeof t.source=="string"&&typeof t.message=="string"):[]}catch{return[]}}function x_(n){try{localStorage.setItem(Hm,JSON.stringify(n))}catch{}}function __(){try{window.dispatchEvent(new CustomEvent(wm))}catch{}}function ST(){return`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,9)}`}function jc(){return Gm()}function wn(n){const e={id:ST(),ts:new Date().toISOString(),level:n.level,source:n.source,message:n.message,details:n.details,event_type:n.event_type,node_context:n.node_context,graph_hash:n.graph_hash,frame_id:n.frame_id},t=Gm(),r=t.length>0?t[t.length-1]:null;if(r){const o=Date.parse(r.ts),a=Date.parse(e.ts);if(r.level===e.level&&r.source===e.source&&r.message===e.message&&(r.details||"")===(e.details||"")&&(r.event_type||"")===(e.event_type||"")&&(r.node_context||"")===(e.node_context||"")&&(r.graph_hash||"")===(e.graph_hash||"")&&Number.isFinite(o)&&Number.isFinite(a)&&a-o<=yT)return r}return t.push(e),t.length>Zv&&t.splice(0,t.length-Zv),x_(t),__(),e}function y_(){x_([]),__()}function of(n,e=!0){const t=`[${n.ts}] ${n.level.toUpperCase()} [${n.source}] ${n.message}`,r=[];n.event_type&&r.push(`event=${n.event_type}`),n.graph_hash&&r.push(`graph=${n.graph_hash.slice(0,24)}`),typeof n.frame_id=="number"&&r.push(`frame=${n.frame_id}`),n.node_context&&r.push(`node=${n.node_context}`);const o=r.length>0?`
${r.join(" | ")}`:"";return!e||!n.details?`${t}${o}`:`${t}${o}
${n.details}`}function S_(){const n=Gm(),e=n.length===0?"[No logs recorded]":n.map(c=>of(c,!0)).join(`

`),t=new Date().toISOString().replace(/[:.]/g,"-"),r=new Blob([e],{type:"text/plain;charset=utf-8"}),o=URL.createObjectURL(r),a=document.createElement("a");a.href=o,a.download=`atomicgraph-logs-${t}.log`,a.click(),URL.revokeObjectURL(o)}function b_(n){const e=()=>n(jc()),t=r=>{r.key===Hm&&n(jc())};return window.addEventListener(wm,e),window.addEventListener("storage",t),()=>{window.removeEventListener(wm,e),window.removeEventListener("storage",t)}}const M_="nt.monitor.runs.v1",Jv=120;function w_(){try{const n=localStorage.getItem(M_);if(!n)return[];const e=JSON.parse(n);return Array.isArray(e)?e.filter(t=>t&&typeof t.id=="string"&&typeof t.ts=="string"&&typeof t.mode=="string"&&typeof t.totalMs=="number"&&Array.isArray(t.checks)):[]}catch{return[]}}function E_(n){try{localStorage.setItem(M_,JSON.stringify(n))}catch{}}function bT(){return w_()}function MT(n){const e=w_();return e.push(n),e.length>Jv&&e.splice(0,e.length-Jv),E_(e),e}function wT(){E_([])}function ET(){return`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`}function Qv(n){return n==="fail"?3:n==="warn"?2:1}function bh(n){return n.failCount>0?"fail":n.warnCount>0?"warn":"ok"}function ex(n,e){if(n.length===0)return 0;const t=[...n].sort((o,a)=>o-a),r=Math.max(0,Math.min(t.length-1,Math.floor((t.length-1)*e)));return t[r]}const Rl=()=>`d_${Math.random().toString(36).slice(2,9)}`;function Zc(n){const e=n.children;if(!Array.isArray(e)||e.length!==2)return null;const[t,r]=e;return!t||!r?null:[t,r]}function Wo(n,e){if(n.kind==="panel")return n.id===e?n:null;const t=Zc(n);return t?Wo(t[0],e)||Wo(t[1],e):null}function Em(n,e){if(n.kind==="panel")return e(n);const t=Zc(n);return t?{...n,children:[Em(t[0],e),Em(t[1],e)]}:n}function Gs(n,e,t){return Em(n,r=>r.id===e?t(r):r)}function Pl(n,e){if(n.id===e)return null;if(n.kind==="panel")return n;const t=Zc(n);if(!t)return n;const[r,o]=t;if(r.id===e)return o;if(o.id===e)return r;const a=Pl(r,e),c=Pl(o,e);return a?c?{...n,children:[a,c]}:r:o}function Bc(n,e,t,r,o,a=.5){if(n.id===e)return{kind:"split",id:Rl(),direction:t,ratio:r==="before"?1-a:a,children:r==="before"?[o,n]:[n,o]};if(n.kind==="panel")return n;const c=Zc(n);return c?{...n,children:[Bc(c[0],e,t,r,o,a),Bc(c[1],e,t,r,o,a)]}:n}function $l(n){if(n.kind==="panel")return[n];const e=Zc(n);return e?[...$l(e[0]),...$l(e[1])]:[]}const tx=n=>{let e;const t=new Set,r=(u,p)=>{const _=typeof u=="function"?u(e):u;if(!Object.is(_,e)){const x=e;e=p??(typeof _!="object"||_===null)?_:Object.assign({},e,_),t.forEach(m=>m(e,x))}},o=()=>e,f={setState:r,getState:o,getInitialState:()=>h,subscribe:u=>(t.add(u),()=>t.delete(u))},h=e=n(r,o,f);return f},TT=(n=>n?tx(n):tx),CT=n=>n;function AT(n,e=CT){const t=Gr.useSyncExternalStore(n.subscribe,Gr.useCallback(()=>e(n.getState()),[n,e]),Gr.useCallback(()=>e(n.getInitialState()),[n,e]));return Gr.useDebugValue(t),t}const RT=n=>{const e=TT(n),t=r=>AT(e,r);return Object.assign(t,e),t},PT=(n=>RT);function IT(n,e){let t;try{t=n()}catch{return}return{getItem:o=>{var a;const c=h=>h===null?null:JSON.parse(h,void 0),f=(a=t.getItem(o))!=null?a:null;return f instanceof Promise?f.then(c):c(f)},setItem:(o,a)=>t.setItem(o,JSON.stringify(a,void 0)),removeItem:o=>t.removeItem(o)}}const Tm=n=>e=>{try{const t=n(e);return t instanceof Promise?t:{then(r){return Tm(r)(t)},catch(r){return this}}}catch(t){return{then(r){return this},catch(r){return Tm(r)(t)}}}},LT=(n,e)=>(t,r,o)=>{let a={storage:IT(()=>window.localStorage),partialize:g=>g,version:0,merge:(g,y)=>({...y,...g}),...e},c=!1,f=0;const h=new Set,u=new Set;let p=a.storage;if(!p)return n((...g)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),t(...g)},r,o);const _=()=>{const g=a.partialize({...r()});return p.setItem(a.name,{state:g,version:a.version})},x=o.setState;o.setState=(g,y)=>(x(g,y),_());const m=n((...g)=>(t(...g),_()),r,o);o.getInitialState=()=>m;let b;const E=()=>{var g,y;if(!p)return;const P=++f;c=!1,h.forEach(k=>{var V;return k((V=r())!=null?V:m)});const N=((y=a.onRehydrateStorage)==null?void 0:y.call(a,(g=r())!=null?g:m))||void 0;return Tm(p.getItem.bind(p))(a.name).then(k=>{if(k)if(typeof k.version=="number"&&k.version!==a.version){if(a.migrate){const V=a.migrate(k.state,k.version);return V instanceof Promise?V.then(A=>[!0,A]):[!0,V]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,k.state];return[!1,void 0]}).then(k=>{var V;if(P!==f)return;const[A,T]=k;if(b=a.merge(T,(V=r())!=null?V:m),t(b,!0),A)return _()}).then(()=>{P===f&&(N==null||N(b,void 0),b=r(),c=!0,u.forEach(k=>k(b)))}).catch(k=>{P===f&&(N==null||N(void 0,k))})};return o.persist={setOptions:g=>{a={...a,...g},g.storage&&(p=g.storage)},clearStorage:()=>{p==null||p.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>E(),hasHydrated:()=>c,onHydrate:g=>(h.add(g),()=>{h.delete(g)}),onFinishHydration:g=>(u.add(g),()=>{u.delete(g)})},a.skipHydration||E(),b||m},DT=LT,Fd={kind:"split",id:"root",direction:"horizontal",ratio:.62,children:[{kind:"split",id:"s-graph-explorer",direction:"vertical",ratio:.78,children:[{kind:"panel",id:"p-graph",tabs:[{id:"v-graph",type:"graph",title:"Graph"}],activeTabId:"v-graph",pinned:!1},{kind:"panel",id:"p-explorer",tabs:[{id:"v-explorer",type:"explorer",title:"Explorer"}],activeTabId:"v-explorer",pinned:!1}]},{kind:"split",id:"s-preview-code",direction:"vertical",ratio:.5,children:[{kind:"panel",id:"p-preview",tabs:[{id:"v-preview",type:"preview",title:"2D Preview"},{id:"v-preview3d",type:"preview3d",title:"3D Preview"}],activeTabId:"v-preview",pinned:!1},{kind:"panel",id:"p-code",tabs:[{id:"v-code",type:"code",title:"Code"}],activeTabId:"v-code",pinned:!1}]}]};function Od(n){return JSON.parse(JSON.stringify(n))}function T_(n){const e=n.tabs.findIndex(o=>o.type==="preview");if(e===-1)return n;const t=n.tabs.findIndex(o=>o.type==="preview3d"),r=[...n.tabs];if(t===-1)return r.splice(e+1,0,{id:Rl(),type:"preview3d",title:"3D Preview"}),{...n,tabs:r};if(t!==e+1){const[o]=r.splice(t,1),a=t<e?e:e+1;return r.splice(a,0,o),{...n,tabs:r}}return n}function Il(n){return n.kind==="panel"?T_(n):{...n,children:[Il(n.children[0]),Il(n.children[1])]}}function nx(n){return n.map(e=>({...e,panel:T_(e.panel)}))}function Bd(n){if(n.kind!=="split"||n.id!=="root"||n.direction!=="horizontal")return n;const[e,t]=n.children;return e.kind==="panel"&&e.id==="p-library"&&e.tabs.length===1&&e.tabs[0].type==="library"?t.kind==="split"?{...t,id:"root"}:t:n}const Vl=n=>!!n&&typeof n=="object"&&!Array.isArray(n),NT=n=>Vl(n)&&typeof n.id=="string"&&typeof n.type=="string"&&typeof n.title=="string",C_=n=>!(!Vl(n)||n.kind!=="panel"||typeof n.id!="string"||!Array.isArray(n.tabs)||!n.tabs.every(NT)||!(n.activeTabId===null||typeof n.activeTabId=="string")||typeof n.pinned!="boolean"||n.activeTabId&&!n.tabs.some(e=>e.id===n.activeTabId)),af=(n,e=0)=>e>32||!Vl(n)?!1:n.kind==="panel"?C_(n):n.kind!=="split"||typeof n.id!="string"||n.direction!=="horizontal"&&n.direction!=="vertical"||typeof n.ratio!="number"||!Number.isFinite(n.ratio)||!Array.isArray(n.children)||n.children.length!==2?!1:af(n.children[0],e+1)&&af(n.children[1],e+1),A_=n=>Vl(n)&&typeof n.id=="string"&&C_(n.panel)&&typeof n.x=="number"&&Number.isFinite(n.x)&&typeof n.y=="number"&&Number.isFinite(n.y)&&typeof n.width=="number"&&Number.isFinite(n.width)&&typeof n.height=="number"&&Number.isFinite(n.height),R_="nt-workspace-presets",Mh=()=>{try{const n=localStorage.getItem(R_);if(!n)return{};const e=JSON.parse(n);if(!Vl(e))return{};const t={};for(const[r,o]of Object.entries(e)){if(!Vl(o)||!af(o.root))continue;const a=Array.isArray(o.floating)?o.floating.filter(A_):[],c=typeof o.maximizedPanelId=="string"?o.maximizedPanelId:null;t[r]={root:o.root,floating:a,maximizedPanelId:c&&Wo(o.root,c)?c:null}}return t}catch{return{}}},UT=n=>{try{localStorage.setItem(R_,JSON.stringify(n))}catch{}},Jc=PT()(DT((n,e)=>({root:Bd(Il(Od(Fd))),floating:[],maximizedPanelId:null,setRatio:(t,r)=>n(o=>{const a=c=>c.kind==="split"&&c.id===t?{...c,ratio:r}:c.kind==="split"?{...c,children:[a(c.children[0]),a(c.children[1])]}:c;return{root:a(o.root)}}),setActiveTab:(t,r)=>n(o=>({root:Gs(o.root,t,a=>({...a,activeTabId:r}))})),closeTab:(t,r)=>n(o=>{const a=Wo(o.root,t);if(!a)return o;const c=a.tabs.filter(f=>f.id!==r);return c.length===0?{root:Pl(o.root,t)||Od(Fd)}:{root:Gs(o.root,t,f=>{var h;return{...f,tabs:c,activeTabId:f.activeTabId===r?((h=c[0])==null?void 0:h.id)||null:f.activeTabId}})}}),closePanel:t=>n(r=>({root:Pl(r.root,t)||Od(Fd),maximizedPanelId:r.maximizedPanelId===t?null:r.maximizedPanelId})),moveTab:(t,r,o,a)=>n(c=>{if(t===o&&a==="center")return c;const f=Wo(c.root,t);if(!f)return c;const h=f.tabs.find(_=>_.id===r);if(!h)return c;let u=c.root;const p=f.tabs.filter(_=>_.id!==r);if(u=Gs(u,t,_=>{var x;return{..._,tabs:p,activeTabId:_.activeTabId===r?((x=p[0])==null?void 0:x.id)||null:_.activeTabId}}),p.length===0&&t!==o&&(u=Pl(u,t)||u),a==="center")u=Gs(u,o,_=>({..._,tabs:[..._.tabs,h],activeTabId:h.id}));else{const _=a==="left"||a==="right"?"horizontal":"vertical",x=a==="left"||a==="top"?"before":"after",m={kind:"panel",id:Rl(),tabs:[h],activeTabId:h.id,pinned:!1};u=Bc(u,o,_,x,m,.5)}return{root:u}}),togglePin:t=>n(r=>({root:Gs(r.root,t,o=>({...o,pinned:!o.pinned}))})),toggleMaximize:t=>n(r=>({maximizedPanelId:r.maximizedPanelId===t?null:t})),undockPanel:t=>n(r=>{const o=Wo(r.root,t);if(!o)return r;const a=Pl(r.root,t);if(!a)return r;const c={id:Rl(),panel:{...o},x:100,y:100,width:500,height:400};return{root:a,floating:[...r.floating,c],maximizedPanelId:r.maximizedPanelId===t?null:r.maximizedPanelId}}),redockPanel:(t,r,o)=>n(a=>{const c=a.floating.findIndex(p=>p.id===t);if(c===-1)return a;const f=a.floating[c],h=a.floating.filter((p,_)=>_!==c);let u=a.root;if(r&&o)o==="center"?u=Gs(u,r,p=>{var _;return{...p,tabs:[...p.tabs,...f.panel.tabs],activeTabId:((_=f.panel.tabs[0])==null?void 0:_.id)||p.activeTabId}}):u=Bc(u,r,o==="left"||o==="right"?"horizontal":"vertical",o==="left"||o==="top"?"before":"after",f.panel);else{const p=$l(u),_=p.find(x=>!x.pinned)||p[0];_&&(u=Gs(u,_.id,x=>{var m;return{...x,tabs:[...x.tabs,...f.panel.tabs],activeTabId:((m=f.panel.tabs[0])==null?void 0:m.id)||x.activeTabId}}))}return{root:u,floating:h}}),moveFloating:(t,r,o)=>n(a=>({floating:a.floating.map(c=>c.id===t?{...c,x:r,y:o}:c)})),resizeFloating:(t,r,o)=>n(a=>({floating:a.floating.map(c=>c.id===t?{...c,width:r,height:o}:c)})),addView:(t,r)=>{const o=Rl();return n(a=>{const c=r||t.charAt(0).toUpperCase()+t.slice(1),f={id:o,type:t,title:c},h=$l(a.root),u=h.find(m=>m.tabs.length===0&&!m.pinned);if(u)return{root:Gs(a.root,u.id,m=>({...m,tabs:[f],activeTabId:f.id}))};const p=h.find(m=>!m.pinned);if(p)return{root:Gs(a.root,p.id,m=>({...m,tabs:[...m.tabs,f],activeTabId:f.id}))};const _={kind:"panel",id:Rl(),tabs:[f],activeTabId:f.id,pinned:!1},x=h[h.length-1];return x?{root:Bc(a.root,x.id,"horizontal","after",_)}:{root:_}}),o},resetLayout:()=>n({root:Bd(Il(Od(Fd))),floating:[],maximizedPanelId:null}),savePreset:t=>{const r=e(),o=Mh();o[t]={root:r.root,floating:r.floating,maximizedPanelId:r.maximizedPanelId},UT(o)},loadPreset:t=>{const o=Mh()[t];return o!=null&&o.root?(n({root:Bd(Il(o.root)),floating:nx(o.floating||[]),maximizedPanelId:o.maximizedPanelId||null}),!0):!1},getPresetNames:()=>{const t=Mh();return Object.keys(t)}}),{name:"nt-workspace-layout",partialize:n=>({root:n.root,floating:n.floating,maximizedPanelId:n.maximizedPanelId}),merge:(n,e)=>{const t=n||{},r={...e};af(t.root)&&(r.root=Bd(Il(t.root))),Array.isArray(t.floating)&&(r.floating=nx(t.floating.filter(A_)));const o=t.maximizedPanelId;return(o===null||typeof o=="string")&&(r.maximizedPanelId=o),r.maximizedPanelId&&!Wo(r.root,r.maximizedPanelId)&&(r.maximizedPanelId=null),r}}));class P_ extends Gr.Component{constructor(){super(...arguments),this.state={error:null,info:null},this.onReset=()=>{this.setState({error:null,info:null})}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){wn({level:"error",source:"view-render",message:`${this.props.viewType}:${this.props.viewId} ${e.name}: ${e.message}`,details:`${t.componentStack||""}
${e.stack||""}`.trim()}),this.setState({info:t})}render(){const{error:e,info:t}=this.state;return e?w.jsxs("div",{style:kT,children:[w.jsxs("div",{style:FT,children:["View crashed: ",this.props.viewType]}),w.jsx("div",{style:OT,children:"The panel is isolated. Other panels should keep working."}),w.jsx("pre",{style:BT,children:`${e.name}: ${e.message}`}),(t==null?void 0:t.componentStack)&&w.jsx("pre",{style:zT,children:t.componentStack}),w.jsxs("div",{style:$T,children:[w.jsx("button",{style:ix,onClick:this.onReset,children:"Retry View"}),w.jsx("button",{style:ix,onClick:()=>window.location.reload(),children:"Reload App"})]})]}):this.props.children}}const kT={width:"100%",height:"100%",boxSizing:"border-box",padding:10,background:"#1b222e",color:"#d7e4ff",overflow:"auto",fontFamily:"'Segoe UI','Cascadia Code',sans-serif"},FT={fontSize:13,fontWeight:700,color:"#ffb5b5",marginBottom:6},OT={fontSize:11,color:"#9db0d5",marginBottom:8},BT={margin:0,padding:8,borderRadius:6,border:"1px solid #704040",background:"#2b1616",color:"#ffd2d2",whiteSpace:"pre-wrap",wordBreak:"break-word",fontSize:11},zT={margin:"8px 0 0",padding:8,borderRadius:6,border:"1px solid #3f557f",background:"#121b2a",color:"#bfd1f7",whiteSpace:"pre-wrap",wordBreak:"break-word",fontSize:10,maxHeight:200,overflow:"auto"},$T={display:"flex",gap:8,marginTop:10},ix={background:"#264572",border:"1px solid #5f80b2",color:"#edf3ff",borderRadius:5,padding:"5px 10px",fontSize:11,cursor:"pointer"},wh="application/nt-dock-tab";function I_({panel:n,renderView:e,isMaximized:t}){const{setActiveTab:r,closeTab:o,closePanel:a,moveTab:c,togglePin:f,toggleMaximize:h,undockPanel:u}=Jc(),[p,_]=I.useState(null),x=I.useRef(null),m=n.tabs.find(N=>N.id===n.activeTabId)||n.tabs[0],b=I.useCallback((N,k)=>{N.dataTransfer.setData(wh,JSON.stringify({panelId:n.id,tabId:k})),N.dataTransfer.effectAllowed="move"},[n.id]),E=I.useCallback(N=>{var M;const k=(M=x.current)==null?void 0:M.getBoundingClientRect();if(!k)return"center";const V=(N.clientX-k.left)/k.width,A=(N.clientY-k.top)/k.height,T=.22;return V<T?"left":V>1-T?"right":A<T?"top":A>1-T?"bottom":"center"},[]),g=I.useCallback(N=>{N.dataTransfer.types.includes(wh)&&(N.preventDefault(),N.dataTransfer.dropEffect="move",_(E(N)))},[E]),y=I.useCallback(()=>_(null),[]),P=I.useCallback(N=>{_(null);const k=N.dataTransfer.getData(wh);if(!k)return;N.preventDefault();let V=null;try{V=JSON.parse(k)}catch{return}const A=V==null?void 0:V.panelId,T=V==null?void 0:V.tabId;if(!A||!T)return;const M=E(N);c(A,T,n.id,M)},[E,c,n.id]);return w.jsxs("div",{ref:x,className:"dk-panel",onDragOver:g,onDragLeave:y,onDrop:P,children:[w.jsxs("div",{className:"dk-header",children:[w.jsx("div",{className:"dk-tabs",children:n.tabs.map(N=>w.jsxs("div",{className:`dk-tab ${N.id===n.activeTabId?"active":""}`,draggable:!0,onDragStart:k=>b(k,N.id),onMouseDown:()=>r(n.id,N.id),children:[w.jsx("span",{className:"dk-tab-label",children:N.title}),w.jsx("button",{className:"dk-tab-close",onMouseDown:k=>k.stopPropagation(),onClick:k=>{k.stopPropagation(),o(n.id,N.id)},children:"x"})]},N.id))}),w.jsxs("div",{className:"dk-actions",children:[w.jsx("button",{className:`dk-action-btn ${n.pinned?"active":""}`,onClick:()=>f(n.id),title:n.pinned?"Unpin":"Pin",children:n.pinned?"P":"p"}),w.jsx("button",{className:"dk-action-btn",onClick:()=>u(n.id),title:"Undock",children:"u"}),w.jsx("button",{className:`dk-action-btn ${t?"active":""}`,onClick:()=>h(n.id),title:t?"Minimize":"Maximize",children:t?"m":"M"}),w.jsx("button",{className:"dk-action-btn dk-close-btn",onClick:()=>a(n.id),title:"Close",children:"x"})]})]}),w.jsxs("div",{className:"dk-content",children:[m&&w.jsx(P_,{viewType:m.type,viewId:m.id,children:e(m.type,m.id)}),!m&&w.jsx("div",{className:"dk-empty",children:"Empty dock"})]}),p&&w.jsx("div",{className:"dk-drop-overlay",children:w.jsx("div",{className:`dk-drop-zone dk-drop-${p}`})})]})}function VT({fp:n,renderView:e}){const{moveFloating:t,resizeFloating:r,redockPanel:o}=Jc(),a=I.useRef(null),c=I.useRef(null),f=I.useCallback(u=>{u.preventDefault(),a.current={ox:u.clientX-n.x,oy:u.clientY-n.y};const p=x=>{a.current&&t(n.id,x.clientX-a.current.ox,x.clientY-a.current.oy)},_=()=>{a.current=null,document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",_),document.body.style.cursor=""};document.addEventListener("mousemove",p),document.addEventListener("mouseup",_),document.body.style.cursor="move"},[n.id,n.x,n.y,t]),h=I.useCallback(u=>{u.preventDefault(),u.stopPropagation(),c.current={ow:n.width,oh:n.height,sx:u.clientX,sy:u.clientY};const p=x=>{if(!c.current)return;const m=Math.max(200,c.current.ow+x.clientX-c.current.sx),b=Math.max(150,c.current.oh+x.clientY-c.current.sy);r(n.id,m,b)},_=()=>{c.current=null,document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",_),document.body.style.cursor=""};document.addEventListener("mousemove",p),document.addEventListener("mouseup",_),document.body.style.cursor="nwse-resize"},[n.id,n.width,n.height,r]);return w.jsxs("div",{className:"dk-floating",style:{left:n.x,top:n.y,width:n.width,height:n.height},children:[w.jsxs("div",{className:"dk-floating-title",onMouseDown:f,children:[w.jsx("span",{className:"dk-tab-label",children:n.panel.tabs.map(u=>u.title).join(", ")}),w.jsx("button",{className:"dk-action-btn",onClick:()=>o(n.id),title:"Redock",children:"R"})]}),w.jsx("div",{className:"dk-content",children:n.panel.tabs.length>0?(()=>{const u=n.panel.tabs.find(p=>p.id===n.panel.activeTabId)||n.panel.tabs[0];return w.jsx(P_,{viewType:u.type,viewId:u.id,children:e(u.type,u.id)})})():w.jsx("div",{className:"dk-empty",children:"Empty"})}),w.jsx("div",{className:"dk-resize-handle",onMouseDown:h})]})}function HT({renderView:n}){const{root:e,floating:t,maximizedPanelId:r,toggleMaximize:o,resetLayout:a}=Jc();I.useEffect(()=>{const f=h=>{var u,p;if(h.shiftKey&&h.code==="Space"){const _=(u=h.target)==null?void 0:u.tagName;if(_==="INPUT"||_==="TEXTAREA"||_==="SELECT")return;if(h.preventDefault(),r)o(r);else{const x=(p=document.activeElement)==null?void 0:p.closest("[data-panel-id]"),m=x==null?void 0:x.getAttribute("data-panel-id");m&&o(m)}}};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[r,o]);const c=r?Wo(e,r):null;return w.jsxs("div",{className:"dk-workspace",children:[c?w.jsx("div",{className:"dk-maximized","data-panel-id":c.id,children:w.jsx(I_,{panel:c,renderView:n,isMaximized:!0})}):w.jsx(Cm,{node:e,renderView:n}),t.map(f=>w.jsx(VT,{fp:f,renderView:n},f.id))]})}function Cm({node:n,renderView:e}){return n.kind==="panel"?w.jsx("div",{className:"dk-leaf","data-panel-id":n.id,children:w.jsx(I_,{panel:n,renderView:e,isMaximized:!1})}):w.jsx(GT,{splitId:n.id,direction:n.direction,ratio:n.ratio,first:w.jsx(Cm,{node:n.children[0],renderView:e}),second:w.jsx(Cm,{node:n.children[1],renderView:e})})}function GT({splitId:n,direction:e,ratio:t,first:r,second:o}){const{setRatio:a}=Jc(),c=I.useRef(null),f=I.useRef(a);f.current=a;const h=I.useCallback(x=>{x.preventDefault();const m=c.current;if(!m)return;const b=g=>{const y=m.getBoundingClientRect();let P;e==="horizontal"?P=(g.clientX-y.left)/y.width:P=(g.clientY-y.top)/y.height,P=Math.max(.08,Math.min(.92,P)),f.current(n,P)},E=()=>{document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",E),document.body.style.cursor="",document.body.style.userSelect=""};document.addEventListener("mousemove",b),document.addEventListener("mouseup",E),document.body.style.cursor=e==="horizontal"?"col-resize":"row-resize",document.body.style.userSelect="none"},[n,e]),u=e==="horizontal",p=`${t*100}%`,_=`${(1-t)*100}%`;return w.jsxs("div",{ref:c,className:`dk-split dk-split-${u?"h":"v"}`,children:[w.jsx("div",{className:"dk-split-child",style:u?{width:p}:{height:p},children:r}),w.jsx("div",{className:`nt-splitter nt-splitter-${u?"x":"y"}`,onMouseDown:h}),w.jsx("div",{className:"dk-split-child",style:u?{width:_}:{height:_},children:o})]})}const Ks=28,jo=36,Ws=128,L_=Ws+12,WT=210,jT=240,_r=6,XT=n=>{var t,r;const e=(t=Et[n])==null?void 0:t.category;return((r=Pi[e])==null?void 0:r.color)??"#888"},YT=n=>{var o;const e=Et[n];if(!e)return jo+Ks+10;const t=e.inputs.length+Object.keys(e.params).length,r=((o=e.outputs)==null?void 0:o.length)??1;return jo+L_+Math.max(t,r,1)*Ks+10};function qT({pk:n,val:e,meta:t,nodeId:r,onUpdate:o}){if(!t)return null;if(t.type==="float"){const a=t.step<.05?3:t.step<1?2:1;return w.jsxs("div",{style:{padding:"3px 10px",height:Ks,display:"flex",flexDirection:"column",justifyContent:"center"},children:[w.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:3},children:[w.jsx("span",{style:{fontSize:10,color:"#e2e8f0",letterSpacing:1.2,textTransform:"uppercase",userSelect:"none"},children:n}),w.jsx("span",{style:{fontSize:11,color:"#f8fafc",fontFamily:"monospace"},children:Number(e).toFixed(a)})]}),w.jsx("input",{type:"range",min:t.min,max:t.max,step:t.step,value:e,onMouseDown:c=>c.stopPropagation(),onChange:c=>o(r,n,parseFloat(c.target.value)),style:{width:"100%",accentColor:"#64748b",cursor:"pointer",height:2}})]})}return t.type==="select"?w.jsxs("div",{style:{display:"flex",alignItems:"center",height:Ks,padding:"0 10px",gap:6},children:[w.jsx("span",{style:{fontSize:10,color:"#e2e8f0",letterSpacing:1.2,textTransform:"uppercase",userSelect:"none",flex:1},children:n}),w.jsx("select",{value:e,onMouseDown:a=>a.stopPropagation(),onChange:a=>o(r,n,a.target.value),style:{background:"#0b0b17",border:"1px solid #334155",color:"#f1f5f9",borderRadius:3,padding:"2px 5px",fontSize:10,fontFamily:"inherit",cursor:"pointer",outline:"none",maxWidth:115},children:t.options.map(a=>w.jsx("option",{value:a,children:a},a))})]}):t.type==="bool"?w.jsxs("div",{style:{display:"flex",alignItems:"center",height:Ks,padding:"0 10px",gap:6},children:[w.jsx("span",{style:{fontSize:10,color:"#e2e8f0",letterSpacing:1.2,textTransform:"uppercase",userSelect:"none",flex:1},children:n}),w.jsx("input",{type:"checkbox",checked:!!e,onMouseDown:a=>a.stopPropagation(),onChange:a=>o(r,n,a.target.checked),style:{accentColor:"#94a3b8",cursor:"pointer"}})]}):null}const KT={exact:"#22c55e",cast:"#eab308",invalid:"#ef4444"},rx=n=>({float:"#94a3b8",vec2:"#3b82f6",vec3:"#10b981",vec4:"#8b5cf6",Texture2D:"#a78bfa",Field:"#c084fc"})[n]??"#94a3b8";function ZT(n,e){if(!n||!e||n===e)return"exact";const t=new Set(["float","vec2","vec3","vec4"]);return t.has(n)&&t.has(e)?"cast":"invalid"}function JT(n,e){var a;const t=((a=Pi[n.category])==null?void 0:a.label)??n.category.toUpperCase(),r=n.inputs.length>0?n.inputs.map(c=>`${c.label}:${c.type}`).join(", "):"none",o=n.outputs.length>0?n.outputs.map(c=>`${c.label}:${c.type}`).join(", "):"none";return[`${n.label} (${e.type})`,`Category: ${t}`,`Inputs: ${r}`,`Outputs: ${o}`,"Tip: double-click to open atom/subgraph"].join(`
`)}function QT({node:n,allNodes:e,isSel:t,onDrag:r,onUpdate:o,onDelete:a,onSelect:c,compact:f}){var T;const h="#0e4d6b",u=n.params.target||"",p=n.params.key||"",_=n.params.value??.5,x=n.params.label||p||"Value",m=e.find(M=>M.id===u),b=m?Et[m.type]:null,E=(T=b==null?void 0:b.params)==null?void 0:T[p],g=(E==null?void 0:E.min)??0,y=(E==null?void 0:E.max)??1,P=(E==null?void 0:E.step)??.01,N=P<.05?3:P<1?2:1,k=e.filter(M=>!_n(M.type)&&M.type!=="remote"&&M.id!==n.id),V=b?Object.keys(b.params).filter(M=>b.params[M].type==="float"||b.params[M].type==="int"):[],A=jo+84+48+10;return w.jsxs("div",{draggable:!1,title:"Remote node: bind and drive another node parameter from one control.",onMouseDown:M=>{M.stopPropagation(),c(n.id)},style:{position:"absolute",left:n.x,top:n.y,width:jT,height:A,background:"#0c0c17",border:`1px solid ${t?h:h+"22"}`,borderRadius:7,boxShadow:t?`0 0 0 2.5px ${h}50,0 8px 36px #000000cc`:"0 4px 24px #000000aa",pointerEvents:"all",overflow:"visible"},children:[w.jsxs("div",{onMouseDown:M=>{M.preventDefault(),r(M,n.id)},style:{height:jo,display:"flex",alignItems:"center",padding:"0 10px",gap:8,cursor:"grab",background:h,borderBottom:`1px solid ${h}99`,borderRadius:"6px 6px 0 0",userSelect:"none"},children:[w.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#ffffff",flex:1,letterSpacing:.3},children:"Remote"}),w.jsx("button",{onMouseDown:M=>M.stopPropagation(),onClick:M=>{M.stopPropagation(),a(n.id)},style:{background:"none",border:"none",color:"#94a3b8",cursor:"pointer",fontSize:14,lineHeight:1,padding:"0 1px",transition:"color .12s"},onMouseEnter:M=>M.currentTarget.style.color="#f87171",onMouseLeave:M=>M.currentTarget.style.color="#94a3b8",children:"x"})]}),f?w.jsx("div",{style:{height:A-jo,display:"grid",placeItems:"center",color:"#8ea3c8",fontSize:10,letterSpacing:.4},children:"REMOTE LINK"}):w.jsxs(w.Fragment,{children:[w.jsxs("div",{style:{padding:"4px 10px"},children:[w.jsxs("div",{style:{display:"flex",alignItems:"center",height:28,gap:6},children:[w.jsx("span",{style:{fontSize:9,color:"#cbd5e1",letterSpacing:1,textTransform:"uppercase",width:48},children:"Target"}),w.jsxs("select",{value:u,onMouseDown:M=>M.stopPropagation(),onChange:M=>o(n.id,"target",M.target.value),style:{background:"#0b0b17",border:"1px solid #334155",color:"#f1f5f9",borderRadius:3,padding:"2px 5px",fontSize:10,fontFamily:"inherit",cursor:"pointer",outline:"none",flex:1},children:[w.jsx("option",{value:"",children:"-- select --"}),k.map(M=>{const C=Et[M.type];return w.jsxs("option",{value:M.id,children:[(C==null?void 0:C.label)||M.type," (",M.id,")"]},M.id)})]})]}),w.jsxs("div",{style:{display:"flex",alignItems:"center",height:28,gap:6},children:[w.jsx("span",{style:{fontSize:9,color:"#cbd5e1",letterSpacing:1,textTransform:"uppercase",width:48},children:"Param"}),w.jsxs("select",{value:p,onMouseDown:M=>M.stopPropagation(),onChange:M=>{o(n.id,"key",M.target.value),m&&M.target.value in m.params&&o(n.id,"value",m.params[M.target.value])},style:{background:"#0b0b17",border:"1px solid #334155",color:"#f1f5f9",borderRadius:3,padding:"2px 5px",fontSize:10,fontFamily:"inherit",cursor:"pointer",outline:"none",flex:1},children:[w.jsx("option",{value:"",children:"-- select --"}),V.map(M=>w.jsx("option",{value:M,children:M},M))]})]}),w.jsxs("div",{style:{display:"flex",alignItems:"center",height:28,gap:6},children:[w.jsx("span",{style:{fontSize:9,color:"#cbd5e1",letterSpacing:1,textTransform:"uppercase",width:48},children:"Label"}),w.jsx("input",{type:"text",value:n.params.label||"",placeholder:p||"Label",onMouseDown:M=>M.stopPropagation(),onChange:M=>o(n.id,"label",M.target.value),style:{background:"#0b0b17",border:"1px solid #334155",color:"#f1f5f9",borderRadius:3,padding:"2px 5px",fontSize:10,fontFamily:"inherit",outline:"none",flex:1}})]})]}),E&&w.jsxs("div",{style:{padding:"4px 10px 8px"},children:[w.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[w.jsx("span",{style:{fontSize:10,fontWeight:600,color:"#e2e8f0",letterSpacing:.3},children:x}),w.jsx("span",{style:{fontSize:11,color:"#f8fafc",fontFamily:"monospace"},children:Number(_).toFixed(N)})]}),w.jsx("input",{type:"range",min:g,max:y,step:P,value:_,onMouseDown:M=>M.stopPropagation(),onChange:M=>o(n.id,"value",parseFloat(M.target.value)),style:{width:"100%",accentColor:"#64748b",cursor:"pointer",height:6}})]})]})]})}function e3({node:n,edges:e,allNodes:t,isSel:r,isConn:o,connFrom:a,connFromPort:c,connFromType:f,snapTarget:h,onDrag:u,onOut:p,onIn:_,onUpdate:x,onDelete:m,onSelect:b,onOpen:E,previewUrl:g,compileMs:y,lodMode:P="full"}){var C;const N=Et[n.type];if(!N)return null;const k=P==="compact"&&!r&&!o;if(n.type==="remote"&&t)return w.jsx(QT,{node:n,allNodes:t,isSel:r,onDrag:u,onUpdate:x,onDelete:m,onSelect:b,compact:k});const V=XT(n.type),A=YT(n.type),T=Pi[N.category],M=JT(N,n);return w.jsxs("div",{draggable:!1,title:M,onMouseDown:B=>{B.stopPropagation(),b(n.id)},onDoubleClick:B=>{B.stopPropagation(),b(n.id),E==null||E(n.id)},style:{position:"absolute",left:n.x,top:n.y,width:WT,height:A,background:"#0c0c17",border:`1px solid ${r?V:V+"22"}`,borderRadius:7,boxShadow:r?`0 0 0 2.5px ${V}50,0 8px 36px #000000cc,inset 0 1px 0 #ffffff08`:"0 4px 24px #000000aa,inset 0 1px 0 #ffffff05",pointerEvents:"all",overflow:"visible",transition:"border-color .1s,box-shadow .1s"},children:[w.jsxs("div",{onMouseDown:B=>{B.preventDefault(),u(B,n.id)},style:{height:jo,display:"flex",alignItems:"center",padding:"0 10px",gap:8,cursor:"grab",background:V,borderBottom:`1px solid ${V}99`,borderRadius:"6px 6px 0 0",userSelect:"none"},children:[w.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#ffffff",flex:1,letterSpacing:.3,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:N.label}),w.jsx("span",{style:{fontSize:8,color:"#dbe6ffcc",letterSpacing:.4,textTransform:"uppercase"},children:(T==null?void 0:T.label)??N.category}),!_n(n.type)&&w.jsx("button",{onMouseDown:B=>B.stopPropagation(),onClick:B=>{B.stopPropagation(),m(n.id)},style:{background:"none",border:"none",color:"#94a3b8",cursor:"pointer",fontSize:14,lineHeight:1,padding:"0 1px",transition:"color .12s"},onMouseEnter:B=>B.currentTarget.style.color="#f87171",onMouseLeave:B=>B.currentTarget.style.color="#94a3b8",children:"×"}),!_n(n.type)&&((C=N.outputs)==null?void 0:C.length)===1&&w.jsx("div",{onClick:B=>p(B,n.id,0),style:{position:"absolute",right:-_r,top:jo/2-_r,width:_r*2,height:_r*2,borderRadius:"50%",background:a===n.id?"#ffffff":"#ffffff40",border:"2px solid #ffffff",cursor:"crosshair",zIndex:10,boxShadow:a===n.id?`0 0 9px ${V}`:"none",transition:"all .1s"}})]}),!k&&w.jsx("div",{style:{height:L_,padding:"6px 10px 4px 10px",boxSizing:"border-box"},children:w.jsx("div",{style:{width:Ws,height:Ws,borderRadius:4,border:"1px solid #2a2e3a",background:"#090d16",overflow:"hidden",boxShadow:"inset 0 0 0 1px #ffffff08",display:"grid",placeItems:"center"},children:g?w.jsx("img",{src:g,alt:`${N.label} preview`,draggable:!1,style:{width:Ws,height:Ws,display:"block",imageRendering:"pixelated",userSelect:"none",pointerEvents:"none"}}):w.jsxs("div",{style:{width:Ws,height:Ws,display:"flex",alignItems:"center",justifyContent:"center",fontSize:8,color:"#4a5673",letterSpacing:.6},children:[Ws,"x",Ws]})})}),!k&&N.inputs.map((B,O)=>{const $=e.some(j=>j.toId===n.id&&j.toPort===O),W=a===n.id,X=(h==null?void 0:h.portIndex)===O,re=o&&!W?ZT(f,B.type):null,ee=re?KT[re]:null,Z=rx(B.type);let ie=$?Z+"50":"#0c0c1a",q=$?Z:Z+"66",ae="none",z=1;return o&&!W&&re?(q=ee,X?(ie=ee+"55",ae=`0 0 10px ${ee}aa, 0 0 20px ${ee}44`,z=1.4):(ie=ee+"18",ae=`0 0 6px ${ee}44`,z=1.1)):o&&W&&(q="#ef444444",ie="#ef444412"),w.jsxs("div",{style:{position:"relative",height:Ks,display:"flex",alignItems:"center"},children:[w.jsx("div",{onClick:j=>_(j,n.id,O),style:{position:"absolute",left:-_r,top:Ks/2-_r,width:_r*2,height:_r*2,borderRadius:"50%",background:ie,border:`2px solid ${q}`,boxShadow:ae,transform:`scale(${z})`,cursor:o&&!W?"crosshair":"default",zIndex:10,transition:"all .15s ease"}}),w.jsx("span",{style:{marginLeft:13,fontSize:10,color:"#e2e8f0",letterSpacing:.8},children:B.label}),o&&!W&&re&&re!=="exact"&&w.jsx("span",{style:{marginLeft:4,fontSize:7,color:ee,letterSpacing:.5,opacity:X?1:.6,transition:"opacity .15s"},children:re==="cast"?"cast":"mismatch"})]},O)}),!k&&Object.entries(n.params).map(([B,O])=>w.jsx(qT,{pk:B,val:O,meta:N.params[B],nodeId:n.id,onUpdate:x},B)),!k&&!_n(n.type)&&N.outputs&&N.outputs.length>1&&N.outputs.map((B,O)=>{const $=rx(B.type),W=e.some(X=>X.fromId===n.id&&X.fromPort===O);return w.jsxs("div",{style:{position:"relative",height:Ks,display:"flex",alignItems:"center"},children:[w.jsx("span",{style:{marginLeft:13,fontSize:10,color:"#e2e8f0",letterSpacing:.8,flex:1},children:B.label}),w.jsx("div",{onClick:X=>p(X,n.id,O),style:{position:"absolute",right:-_r,top:Ks/2-_r,width:_r*2,height:_r*2,borderRadius:"50%",background:a===n.id?$+"80":W?$+"50":"#0c0c1a",border:`2px solid ${W?$:$+"66"}`,cursor:"crosshair",zIndex:10,boxShadow:a===n.id&&c===O?`0 0 9px ${V}`:"none",transition:"all .1s"}})]},O)}),k&&w.jsxs("div",{style:{height:A-jo,display:"grid",placeItems:"center",color:"#7f90b3",fontSize:9,letterSpacing:.4},children:[N.inputs.length," IN / ",N.outputs.length," OUT"]}),y!=null&&w.jsxs("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",marginTop:4,fontSize:14,fontWeight:700,fontFamily:"monospace",lineHeight:1,color:y>200?"#ef4444":y>15?"#eab308":"#22c55e",letterSpacing:.5,pointerEvents:"none",userSelect:"none"},children:[y.toFixed(1),"ms"]})]})}const Zd=.15,Jd=2.5,lf=.1,sx=26,t3=128,Pa=210,Hl=36,hf=t3+12,Ua=28,n3=180,i3=120,r3=24,s3=220,o3=n=>{var t,r;const e=(t=Et[n])==null?void 0:t.category;return((r=Pi[e])==null?void 0:r.color)??"#888"},zd=n=>({float:"#94a3b8",vec2:"#3b82f6",vec3:"#10b981",vec4:"#8b5cf6",Texture2D:"#a78bfa",Field:"#c084fc"})[n]??"#94a3b8",$d=["float","vec2","vec3","vec4"],Eh=(n,e,t)=>{if(t<=1)return{x:n.x+Pa,y:n.y+Hl/2};const r=Et[n.type],o=((r==null?void 0:r.inputs.length)??0)+Object.keys(n.params??{}).length,a=n.y+Hl+hf+(o+e+.5)*Ua;return{x:n.x+Pa,y:a}},Th=(n,e)=>({x:n.x,y:n.y+Hl+hf+e*Ua+Ua/2}),ox=(n,e,t,r)=>{const o=Math.max(Math.abs(t-n)*.5,55);return`M${n} ${e}C${n+o} ${e} ${t-o} ${r} ${t} ${r}`},Ch=(n,e,t)=>Math.max(e,Math.min(t,n)),$o=(n,e,t)=>{const r=n||t;return r.startsWith("#")&&(r.length===7||r.length===4)?`${r}${e}`:r},Nc=n=>{var o;const e=Et[n];if(!e)return Hl+Ua+10;const t=e.inputs.length+Object.keys(e.params).length,r=((o=e.outputs)==null?void 0:o.length)??1;return Hl+hf+Math.max(t,r,1)*Ua+10};function a3({zoom:n,onZoom:e,onReset:t,snapEnabled:r,snapSize:o,onToggleSnap:a}){const c=({icon:f,title:h,onClick:u,active:p=!1,disabled:_=!1})=>w.jsx("button",{onClick:u,disabled:_,title:h,style:{width:22,height:22,background:p?"#1f2f4f":_?"transparent":"#111120",border:`1px solid ${p?"#3c6db6":_?"#161622":"#232336"}`,borderRadius:4,cursor:_?"default":"pointer",color:p?"#78c8ff":_?"#1a1a28":"#78839b",padding:0,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"inherit",transition:"all .1s",flexShrink:0},onMouseEnter:x=>{!_&&!p&&(x.currentTarget.style.color="#dce7ff")},onMouseLeave:x=>{!_&&!p&&(x.currentTarget.style.color="#78839b")},children:f});return w.jsxs("div",{onMouseDown:f=>f.stopPropagation(),onClick:f=>f.stopPropagation(),style:{position:"absolute",top:10,right:12,display:"flex",alignItems:"center",gap:4,background:"#0c0f1bf2",backdropFilter:"blur(10px)",border:"1px solid #1b2538",borderRadius:7,padding:"4px 6px",boxShadow:"0 2px 10px #00000055"},children:[w.jsx(c,{icon:w.jsx(CE,{size:13}),title:"Zoom out",disabled:n<=Zd,onClick:()=>e(Math.round((n-lf)*100)/100)}),w.jsxs("button",{onClick:t,style:{background:"none",border:"none",cursor:"pointer",color:"#30304a",fontSize:9,fontFamily:"inherit",letterSpacing:.8,padding:"2px 6px",minWidth:42,textAlign:"center",transition:"color .1s"},onMouseEnter:f=>f.currentTarget.style.color="#aaa",onMouseLeave:f=>f.currentTarget.style.color="#30304a",children:[Math.round(n*100),"%"]}),w.jsx(c,{icon:w.jsx(RE,{size:13}),title:"Zoom in",disabled:n>=Jd,onClick:()=>e(Math.round((n+lf)*100)/100)}),w.jsx("div",{style:{width:1,height:14,background:"#283246",margin:"0 1px"}}),w.jsx(c,{icon:w.jsx(ME,{size:12}),title:r?`Snap on (${o}px)`:"Snap off",onClick:a,active:r})]})}function D_({nodes:n,edges:e,frames:t=[],onMove:r,onMoveFrame:o,onResizeFrame:a,onDelFrame:c,onDelEdge:f,onConnect:h,onUpdateParam:u,onAddNode:p,onDelNode:_,onSelectionChange:x,onSelectionSetChange:m,onNodeOpen:b,onCanvasInteractionStart:E,onCanvasInteractionEnd:g,onCanvasClick:y,onRequestContextMenu:P,onVisibleNodeIdsChange:N,onZoomChange:k,nodePreviews:V,nodeTimings:A,viewCommandNonce:T,viewCommandType:M,onToggleSnap:C,snapEnabled:B=!0,snapSize:O=sx}){var pe;const[$,W]=I.useState({x:60,y:60}),[X,re]=I.useState(1),[ee,Z]=I.useState(null),[ie,q]=I.useState(null),[ae,z]=I.useState(null),[j,Pe]=I.useState(null),qe=I.useRef(!1),[De,fe]=I.useState(null),[xe,Re]=I.useState(null),[Je,Ze]=I.useState(null),[vt,Qt]=I.useState([]),[$t,Bt]=I.useState(null),[Ot,Vt]=I.useState(null),[Xt,J]=I.useState(null),[Gt,Lt]=I.useState(null),[qt,lt]=I.useState({x:0,y:0}),[H,R]=I.useState(null),le=I.useRef(null),[Ce,Ne]=I.useState({width:0,height:0}),Te=I.useRef([]),st=I.useMemo(()=>new Set(vt),[vt]),We=I.useRef(!1),ct=Math.max(8,O||sx),pt=I.useCallback(G=>B?Math.round(G/ct)*ct:G,[B,ct]),Ue=I.useCallback(()=>{We.current||(We.current=!0,E==null||E())},[E]),Fe=I.useCallback(()=>{We.current&&(We.current=!1,g==null||g())},[g]),gt=I.useCallback((G,Q)=>{const se=G.x+Pa/2,_e=G.y+Nc(G.type)/2;return se>=Q.x&&se<=Q.x+Q.width&&_e>=Q.y&&_e<=Q.y+Q.height},[]),it=()=>{var G;return((G=le.current)==null?void 0:G.getBoundingClientRect())??{left:0,top:0}},et=I.useCallback((G,Q)=>{const se=it();return{x:(G-se.left-$.x)/X,y:(Q-se.top-$.y)/X}},[$,X]),Ct=I.useMemo(()=>ae?n.map(G=>{const Q=ae[G.id];return Q?{...G,x:Q.x,y:Q.y}:G}):n,[n,ae]),ne=I.useMemo(()=>Gt?t.map(G=>{const Q=Gt[G.id];return Q?{...G,...Q}:G}):t,[t,Gt]),Ge=I.useMemo(()=>{const G=new Map;for(const Q of Ct)G.set(Q.id,Q);return G},[Ct]),Oe=I.useMemo(()=>{if(Ce.width<=0||Ce.height<=0||X<=0)return null;const G=Math.max(s3/X,12);return{minX:-$.x/X-G,minY:-$.y/X-G,maxX:(Ce.width-$.x)/X+G,maxY:(Ce.height-$.y)/X+G}},[$.x,$.y,Ce.height,Ce.width,X]),tt=I.useCallback((G,Q)=>{const se=G.x,_e=G.y,we=G.x+Pa,Ae=G.y+Nc(G.type);return we>=Q.minX&&se<=Q.maxX&&Ae>=Q.minY&&_e<=Q.maxY},[]),ke=I.useMemo(()=>Oe?Ct.filter(G=>tt(G,Oe)):Ct,[Ct,tt,Oe]),Ee=I.useMemo(()=>new Set(ke.map(G=>G.id)),[ke]),ot=I.useMemo(()=>e.filter(G=>Ee.has(G.fromId)||Ee.has(G.toId)),[e,Ee]);I.useEffect(()=>{const G=le.current;if(!G)return;const Q=()=>{const se=G.getBoundingClientRect();Ne(_e=>_e.width===se.width&&_e.height===se.height?_e:{width:se.width,height:se.height})};if(Q(),typeof ResizeObserver<"u"){const se=new ResizeObserver(()=>Q());return se.observe(G),()=>se.disconnect()}return window.addEventListener("resize",Q),()=>window.removeEventListener("resize",Q)},[]),I.useEffect(()=>{if(!N)return;if(!Oe){Te.current.length>0&&(Te.current=[],N([]));return}const G=ke.map(_e=>_e.id),Q=Te.current;Q.length===G.length&&Q.every((_e,we)=>_e===G[we])||(Te.current=G,N(G))},[N,Oe,ke]),I.useEffect(()=>()=>{N&&N([])},[N]),I.useEffect(()=>{k==null||k(X)},[k,X]),I.useEffect(()=>{if(M){if(M==="reset"){W({x:60,y:60}),re(1);return}if(M==="frame_all"){const G=le.current;if(!G)return;const Q=G.getBoundingClientRect(),se=[];if(n.forEach(yt=>{se.push({x0:yt.x,y0:yt.y,x1:yt.x+Pa,y1:yt.y+Nc(yt.type)})}),t.forEach(yt=>{se.push({x0:yt.x,y0:yt.y,x1:yt.x+yt.width,y1:yt.y+yt.height})}),se.length===0){W({x:60,y:60}),re(1);return}let _e=Number.POSITIVE_INFINITY,we=Number.POSITIVE_INFINITY,Ae=Number.NEGATIVE_INFINITY,Ve=Number.NEGATIVE_INFINITY;se.forEach(yt=>{_e=Math.min(_e,yt.x0),we=Math.min(we,yt.y0),Ae=Math.max(Ae,yt.x1),Ve=Math.max(Ve,yt.y1)});const Le=Math.max(1,Ae-_e),Ye=Math.max(1,Ve-we),Mt=80,ht=(Q.width-Mt*2)/Le,at=(Q.height-Mt*2)/Ye,xt=Ch(Math.min(ht,at),Zd,Jd),Qe=(Q.width-Le*xt)*.5-_e*xt,hn=(Q.height-Ye*xt)*.5-we*xt;re(xt),W({x:Qe,y:hn})}}},[T,M,n,t]),I.useEffect(()=>{x&&x(Je)},[Je,x]),I.useEffect(()=>{m==null||m(vt)},[vt,m]),I.useEffect(()=>{const G=new Set(n.map(Q=>Q.id));Qt(Q=>Q.filter(se=>G.has(se))),Ze(Q=>Q&&G.has(Q)?Q:null)},[n]),I.useEffect(()=>{const G=new Set(t.map(Q=>Q.id));Bt(Q=>Q&&G.has(Q)?Q:null)},[t]),I.useEffect(()=>{const G=le.current;if(!G)return;const Q=se=>{se.preventDefault();const _e=G.getBoundingClientRect(),we=se.clientX-_e.left,Ae=se.clientY-_e.top,Ve=se.deltaY<0?lf:-lf;re(Le=>{const Ye=Math.round(Ch(Le+Ve,Zd,Jd)*100)/100;return W(Mt=>({x:we-(we-Mt.x)*(Ye/Le),y:Ae-(Ae-Mt.y)*(Ye/Le)})),Ye})};return G.addEventListener("wheel",Q,{passive:!1}),()=>G.removeEventListener("wheel",Q)},[]);const Nt=I.useCallback(G=>{const Q=le.current;if(!Q)return;const{width:se,height:_e}=Q.getBoundingClientRect(),we=se/2,Ae=_e/2;re(Ve=>{const Le=Ch(G,Zd,Jd);return W(Ye=>({x:we-(we-Ye.x)*(Le/Ve),y:Ae-(Ae-Ye.y)*(Le/Ve)})),Le})},[]);I.useEffect(()=>{const G=Q=>{if(Q.key==="Escape"){fe(null),Re(null),Vt(null),J(null),Lt(null),Z(null),q(null),R(null),Fe();return}const se=document.activeElement,_e=se==null?void 0:se.tagName,we=!!se&&(se.isContentEditable||!!se.closest('[contenteditable="true"]')||_e==="INPUT"||_e==="TEXTAREA"||_e==="SELECT");if((Q.key==="Delete"||Q.key==="Backspace")&&!we){if(vt.length>0){vt.forEach(Ae=>{const Ve=n.find(Le=>Le.id===Ae);Ve&&!_n(Ve.type)&&_(Ae)}),Qt([]),Ze(null);return}if(Je){const Ae=n.find(Ve=>Ve.id===Je);if(Ae&&!_n(Ae.type)){_(Je),Ze(null),Qt([]);return}}$t&&c&&(c($t),Bt(null))}};return window.addEventListener("keydown",G),()=>window.removeEventListener("keydown",G)},[Je,vt,n,_,c,$t,Fe]);const nn=35,Kt=I.useCallback((G,Q)=>{if(!G||!Q||G===Q)return"exact";const se=new Set(["float","vec2","vec3","vec4"]);return se.has(G)&&se.has(Q)?"cast":"invalid"},[]),Zn=I.useCallback(G=>{const Q=it(),se=G.clientX-Q.left,_e=G.clientY-Q.top;if(lt({x:se,y:_e}),ee){const we={x:pt((se-$.x)/X-ee.ox),y:pt((_e-$.y)/X-ee.oy)};z({[ee.id]:we})}if(ie){const we=(se-$.x)/X,Ae=(_e-$.y)/X,Ve=we-ie.startGX,Le=Ae-ie.startGY,Ye={};Object.entries(ie.starts).forEach(([Mt,ht])=>{Ye[Mt]={x:pt(ht.x+Ve),y:pt(ht.y+Le)}}),z(Ye)}if(Ot){const we=t.find(Ae=>Ae.id===Ot.id);if(we){const Ae=(se-$.x)/X,Ve=(_e-$.y)/X,Le=pt(Ae-Ot.ox),Ye=pt(Ve-Ot.oy);Lt({[we.id]:{x:Le,y:Ye,width:we.width,height:we.height}});const Mt=Le-Ot.frameStartX,ht=Ye-Ot.frameStartY;if(Object.keys(Ot.starts).length>0){const at={};Object.entries(Ot.starts).forEach(([xt,Qe])=>{at[xt]={x:pt(Qe.x+Mt),y:pt(Qe.y+ht)}}),z(at)}}}if(Xt){const we=t.find(Ae=>Ae.id===Xt.id);if(we){const Ae=(se-$.x)/X,Ve=(_e-$.y)/X,Le=Math.max(n3,Xt.startW+(Ae-Xt.startGX)),Ye=Math.max(i3,Xt.startH+(Ve-Xt.startGY));Lt({[we.id]:{x:we.x,y:we.y,width:Le,height:Ye}})}}if(j&&Pe(we=>we&&{...we,x1:se,y1:_e}),H&&(W(we=>({x:we.x+G.clientX-H.x,y:we.y+G.clientY-H.y})),R({x:G.clientX,y:G.clientY})),De){let we=null,Ae=nn;for(const Ve of ke){if(Ve.id===De.from)continue;const Le=Et[Ve.type];if(Le)for(let Ye=0;Ye<Le.inputs.length;Ye++){const Mt=Th(Ve,Ye),ht=Mt.x*X+$.x,at=Mt.y*X+$.y,xt=Math.hypot(se-ht,_e-at);if(xt<Ae){Ae=xt;const Qe=Kt(De.fromType,Le.inputs[Ye].type);we={nodeId:Ve.id,portIndex:Ye,screenX:ht,screenY:at,compat:Qe}}}}Re(we)}},[ee,ie,Ot,Xt,j,H,$,X,De,ke,t,Kt,pt]),xn=I.useCallback(()=>{const G=!!ee||!!ie||!!Ot||!!Xt;if(De&&xe&&xe.compat!=="invalid"&&(h(De.from,xe.nodeId,xe.portIndex,De.fromPort??0),fe(null),Re(null)),j){const Q=Math.min(j.x0,j.x1),se=Math.min(j.y0,j.y1),_e=Math.max(j.x0,j.x1),we=Math.max(j.y0,j.y1);if(Math.abs(j.x1-j.x0)>4||Math.abs(j.y1-j.y0)>4){const Ve=(Q-$.x)/X,Le=(se-$.y)/X,Ye=(_e-$.x)/X,Mt=(we-$.y)/X,ht=n.filter(xt=>{const Qe=xt.x,hn=xt.y,yt=xt.x+Pa,Nn=xt.y+Nc(xt.type);return yt>=Ve&&Qe<=Ye&&Nn>=Le&&hn<=Mt}).map(xt=>xt.id),at=j.append?Array.from(new Set([...vt,...ht])):ht;Qt(at),Ze(at[0]??null),Bt(null),qe.current=!0}Pe(null)}ae&&(Object.entries(ae).forEach(([Q,se])=>r(Q,se)),z(null)),Gt&&(Object.entries(Gt).forEach(([Q,se])=>{Ot&&o&&o(Q,{x:se.x,y:se.y}),Xt&&a&&a(Q,{width:se.width,height:se.height})}),Lt(null)),G&&Fe(),Z(null),q(null),Vt(null),J(null),R(null)},[j,De,Ot,Xt,xe,h,$.x,$.y,X,n,vt,ae,Gt,r,o,a,Fe]),Gi=I.useCallback(G=>{if(G.button===0){G.preventDefault(),Ue();const Q=it(),se=G.clientX-Q.left,_e=G.clientY-Q.top;Pe({x0:se,y0:_e,x1:se,y1:_e,append:G.shiftKey});return}(G.button===1||G.button===2)&&G.button===1&&(G.preventDefault(),Ue(),R({x:G.clientX,y:G.clientY}))},[Ue]),Ii=(G,Q,se,_e,we,Ae)=>{const Ve=we-se,Le=Ae-_e,Ye=G-se,Mt=Q-_e,ht=Ve*Ye+Le*Mt;if(ht<=0)return Math.hypot(G-se,Q-_e);const at=Ve*Ve+Le*Le;if(at<=ht)return Math.hypot(G-we,Q-Ae);const xt=ht/at,Qe=se+xt*Ve,hn=_e+xt*Le;return Math.hypot(G-Qe,Q-hn)},to=I.useCallback((G,Q)=>{var we,Ae,Ve;const se=10/X;for(const Le of ke){const Ye=Et[Le.type];if(Ye){if(!_n(Le.type)&&((we=Ye.outputs)!=null&&we.length)){const Mt=Ye.outputs.length;for(let ht=0;ht<Mt;ht++){const at=Eh(Le,ht,Mt);if(Math.hypot(G-at.x,Q-at.y)<=se)return{kind:"port",nodeId:Le.id,portIndex:ht,direction:"out",type:(Ae=Ye.outputs[ht])==null?void 0:Ae.type}}}for(let Mt=0;Mt<Ye.inputs.length;Mt++){const ht=Le.x,at=Le.y+Hl+hf+Mt*Ua+Ua/2;if(Math.hypot(G-ht,Q-at)<=se)return{kind:"port",nodeId:Le.id,portIndex:Mt,direction:"in",type:Ye.inputs[Mt].type}}}}for(let Le=ke.length-1;Le>=0;Le--){const Ye=ke[Le],Mt=Pa,ht=Nc(Ye.type);if(G>=Ye.x&&G<=Ye.x+Mt&&Q>=Ye.y&&Q<=Ye.y+ht)return{kind:"node",nodeId:Ye.id}}const _e=9/X;for(const Le of ot){const Ye=Ge.get(Le.fromId),Mt=Ge.get(Le.toId),ht=Ye?Et[Ye.type]:null;if(!Ye||!Mt||!ht)continue;const at=Eh(Ye,Le.fromPort,((Ve=ht.outputs)==null?void 0:Ve.length)??1),xt=Th(Mt,Le.toPort),Qe=Math.max(Math.abs(xt.x-at.x)*.5,55);let hn=Number.POSITIVE_INFINITY,yt=at.x,Nn=at.y;for(let an=1;an<=20;an++){const Dt=an/20,sn=1-Dt,en=sn*sn*sn*at.x+3*sn*sn*Dt*(at.x+Qe)+3*sn*Dt*Dt*(xt.x-Qe)+Dt*Dt*Dt*xt.x,At=sn*sn*sn*at.y+3*sn*sn*Dt*at.y+3*sn*Dt*Dt*xt.y+Dt*Dt*Dt*xt.y;hn=Math.min(hn,Ii(G,Q,yt,Nn,en,At)),yt=en,Nn=At}if(hn<=_e)return{kind:"edge",edgeId:Le.id}}for(let Le=ne.length-1;Le>=0;Le--){const Ye=ne[Le];if(G>=Ye.x&&G<=Ye.x+Ye.width&&Q>=Ye.y&&Q<=Ye.y+Ye.height)return{kind:"frame",frameId:Ye.id}}return{kind:"canvas"}},[ke,ot,Ge,ne,X]),Li=I.useCallback(G=>{G.preventDefault();const Q=it(),se=(G.clientX-Q.left-$.x)/X,_e=(G.clientY-Q.top-$.y)/X,we=to(se,_e);we.kind==="frame"&&(Bt(we.frameId),Ze(null),Qt([])),P&&P({clientX:G.clientX,clientY:G.clientY,graphX:se,graphY:_e,target:we})},[to,P,$,X]),wr=I.useCallback(G=>{G.dataTransfer.types.includes("application/nt-node-type")&&(G.preventDefault(),G.dataTransfer.dropEffect="copy")},[]),En=I.useCallback(G=>{const Q=G.dataTransfer.getData("application/nt-node-type");if(!Q)return;G.preventDefault();const se=et(G.clientX,G.clientY);p(Q,pt(se.x),pt(se.y))},[et,p,pt]),Jn=I.useCallback(G=>{G.preventDefault()},[]),Si=I.useCallback((G,Q)=>{G.preventDefault(),G.stopPropagation();const se=n.find(we=>we.id===Q);if(!se)return;const _e=et(G.clientX,G.clientY);if(Ue(),st.has(Q)&&vt.length>1){const we={};vt.forEach(Ae=>{const Ve=n.find(Le=>Le.id===Ae);Ve&&(we[Ae]={x:Ve.x,y:Ve.y})}),q({startGX:_e.x,startGY:_e.y,starts:we});return}Ze(Q),Qt([Q]),Bt(null),Z({id:Q,ox:_e.x-se.x,oy:_e.y-se.y})},[n,et,vt,st,Ue]),no=I.useCallback((G,Q)=>{G.preventDefault(),G.stopPropagation();const se=ne.find(Ae=>Ae.id===Q);if(!se)return;Ue();const _e=et(G.clientX,G.clientY);Bt(Q),Ze(null),Qt([]);const we={};Ct.forEach(Ae=>{gt(Ae,se)&&(we[Ae.id]={x:Ae.x,y:Ae.y})}),Vt({id:Q,ox:_e.x-se.x,oy:_e.y-se.y,frameStartX:se.x,frameStartY:se.y,starts:we}),Object.keys(we).length>0&&z(we)},[ne,Ct,et,gt,Ue]),Er=I.useCallback((G,Q)=>{G.preventDefault(),G.stopPropagation();const se=ne.find(we=>we.id===Q);if(!se)return;Ue();const _e=et(G.clientX,G.clientY);Bt(Q),Ze(null),Qt([]),J({id:Q,startGX:_e.x,startGY:_e.y,startW:se.width,startH:se.height})},[ne,et,Ue]),li=I.useCallback((G,Q,se=0)=>{var Ae,Ve;G.stopPropagation(),Ze(Q),Qt([Q]),Bt(null);const _e=Et[Q]??Et[((Ae=n.find(Le=>Le.id===Q))==null?void 0:Ae.type)??""],we=(Ve=_e==null?void 0:_e.outputs[se])==null?void 0:Ve.type;fe({from:Q,fromPort:se,fromType:we}),Re(null)},[n]),Wn=I.useCallback((G,Q,se)=>{G.stopPropagation(),!(!De||De.from===Q)&&(h(De.from,Q,se,De.fromPort??0),fe(null),Re(null))},[De,h]),Yr=I.useCallback(G=>{Ze(G),Qt([G]),Bt(null)},[]),bs=I.useCallback(G=>{Ze(G),Qt([G]),Bt(null),b==null||b(G)},[b]),fi=I.useCallback((G,Q,se=0)=>{var Ve;const _e=Et[G.type],we=((Ve=_e==null?void 0:_e.outputs)==null?void 0:Ve.length)??1,Ae=Q?Eh(G,se,we):Th(G,se);return{x:Ae.x*X+$.x,y:Ae.y*X+$.y}},[$,X]),bi=I.useMemo(()=>{if(!De)return null;const G=Ge.get(De.from);if(!G)return null;const Q=fi(G,!0,De.fromPort??0),se=xe?xe.screenX:qt.x,_e=xe?xe.screenY:qt.y,we=ox(Q.x,Q.y,se,_e);let Ae=zd(De.fromType??"float"),Ve=.6;return xe&&(xe.compat==="exact"?(Ae="#22c55e",Ve=.9):xe.compat==="cast"?(Ae="#eab308",Ve=.85):(Ae="#ef4444",Ve=.85)),{path:we,color:Ae,opacity:Ve}},[De,Ge,qt,fi,xe]),Qn=ct*X,Mi=($.x%Qn+Qn)%Qn,io=($.y%Qn+Qn)%Qn,ei=Qn*4,U=($.x%ei+ei)%ei,ue=($.y%ei+ei)%ei,ve=n.find(G=>G.id===Je),he=t.find(G=>G.id===$t);return w.jsxs("div",{ref:le,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",cursor:De?"crosshair":Xt?"nwse-resize":Ot||H?"grabbing":"default",userSelect:ee||ie||Ot||Xt||j||H?"none":"auto",WebkitUserSelect:ee||ie||Ot||Xt||j||H?"none":"auto"},onMouseMove:Zn,onMouseUp:xn,onMouseLeave:xn,onMouseDown:Gi,onContextMenu:Li,onDragStart:Jn,onDragOver:wr,onDrop:En,children:[w.jsxs("svg",{style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none"},children:[w.jsxs("defs",{children:[w.jsx("pattern",{id:"dg-minor",width:Qn,height:Qn,patternUnits:"userSpaceOnUse",patternTransform:`translate(${Mi} ${io})`,children:w.jsx("path",{d:`M ${Qn} 0 L 0 0 0 ${Qn}`,fill:"none",stroke:"#2d3750",strokeWidth:1})}),w.jsx("pattern",{id:"dg-major",width:ei,height:ei,patternUnits:"userSpaceOnUse",patternTransform:`translate(${U} ${ue})`,children:w.jsx("path",{d:`M ${ei} 0 L 0 0 0 ${ei}`,fill:"none",stroke:"#43527a",strokeWidth:1.15})})]}),w.jsx("rect",{width:"100%",height:"100%",fill:"url(#dg-minor)"}),w.jsx("rect",{width:"100%",height:"100%",fill:"url(#dg-major)"}),w.jsx("line",{x1:$.x,y1:0,x2:$.x,y2:"100%",stroke:"#5a6b97",strokeWidth:"1.15"}),w.jsx("line",{x1:0,y1:$.y,x2:"100%",y2:$.y,stroke:"#5a6b97",strokeWidth:"1.15"})]}),w.jsxs("svg",{style:{position:"absolute",inset:0,width:"100%",height:"100%"},onClick:()=>{if(qe.current){qe.current=!1;return}fe(null),Re(null),Ze(null),Qt([]),Bt(null),y==null||y()},children:[w.jsx("rect",{width:"100%",height:"100%",fill:"transparent"}),w.jsx("defs",{children:ot.map(G=>{var xt,Qe;const Q=Ge.get(G.fromId),se=Ge.get(G.toId);if(!Q||!se)return null;const _e=Et[Q.type],we=Et[se.type],Ae=((xt=_e==null?void 0:_e.outputs[G.fromPort])==null?void 0:xt.type)??"float",Ve=((Qe=we==null?void 0:we.inputs[G.toPort])==null?void 0:Qe.type)??"float",Le=zd(Ae),Ye=zd(Ve);if(!(Ae!==Ve&&$d.includes(Ae)&&$d.includes(Ve)))return null;const ht=fi(Q,!0,G.fromPort),at=fi(se,!1,G.toPort);return w.jsxs("linearGradient",{id:`edge-grad-${G.id}`,x1:ht.x,y1:ht.y,x2:at.x,y2:at.y,gradientUnits:"userSpaceOnUse",children:[w.jsx("stop",{offset:"0%",stopColor:Le}),w.jsx("stop",{offset:"100%",stopColor:Ye})]},G.id)})}),ot.map(G=>{var Qe,hn;const Q=Ge.get(G.fromId),se=Ge.get(G.toId);if(!Q||!se)return null;const _e=Et[Q.type],we=Et[se.type],Ae=((Qe=_e==null?void 0:_e.outputs[G.fromPort])==null?void 0:Qe.type)??"float",Ve=((hn=we==null?void 0:we.inputs[G.toPort])==null?void 0:hn.type)??"float",Le=zd(Ae),Ye=Ae!==Ve&&$d.includes(Ae)&&$d.includes(Ve),Mt=fi(Q,!0,G.fromPort),ht=fi(se,!1,G.toPort),at=ox(Mt.x,Mt.y,ht.x,ht.y),xt=Ye?`url(#edge-grad-${G.id})`:Le;return w.jsxs("g",{children:[w.jsx("path",{d:at,fill:"none",stroke:xt,strokeWidth:"2.5",strokeLinecap:"round",pointerEvents:"none"}),w.jsx("path",{d:at,fill:"none",stroke:"transparent",strokeWidth:"16",style:{cursor:"pointer"},onClick:yt=>{yt.stopPropagation(),f(G.id)}})]},G.id)}),bi&&w.jsxs("g",{pointerEvents:"none",children:[w.jsx("path",{d:bi.path,fill:"none",stroke:bi.color,strokeWidth:xe?2.5:1.8,strokeDasharray:xe?"none":"6 4",strokeLinecap:"round",opacity:bi.opacity}),xe&&w.jsxs(w.Fragment,{children:[w.jsx("circle",{cx:xe.screenX,cy:xe.screenY,r:10,fill:bi.color+"30",stroke:bi.color,strokeWidth:2,opacity:.9}),w.jsxs("circle",{cx:xe.screenX,cy:xe.screenY,r:16,fill:"none",stroke:bi.color,strokeWidth:.8,opacity:.4,children:[w.jsx("animate",{attributeName:"r",from:"12",to:"22",dur:"0.8s",repeatCount:"indefinite"}),w.jsx("animate",{attributeName:"opacity",from:"0.5",to:"0",dur:"0.8s",repeatCount:"indefinite"})]})]})]}),j&&w.jsx("g",{pointerEvents:"none",children:w.jsx("rect",{x:Math.min(j.x0,j.x1),y:Math.min(j.y0,j.y1),width:Math.abs(j.x1-j.x0),height:Math.abs(j.y1-j.y0),fill:"#3b82f630",stroke:"#60a5fa",strokeWidth:1,strokeDasharray:"4 3"})})]}),w.jsxs("div",{style:{position:"absolute",inset:0,transform:`translate(${$.x}px,${$.y}px) scale(${X})`,transformOrigin:"0 0",pointerEvents:"none"},children:[ne.map(G=>{const Q=$t===G.id,se=G.color||"#4d78bc";return w.jsxs("div",{style:{position:"absolute",left:G.x,top:G.y,width:G.width,height:G.height,borderRadius:8,border:`1px solid ${Q?$o(se,"cc","#4d78bccc"):$o(se,"66","#4d78bc66")}`,background:$o(se,"18","#4d78bc18"),boxShadow:Q?`0 0 0 1px ${$o(se,"55","#4d78bc55")}, inset 0 0 0 1px #ffffff10`:"inset 0 0 0 1px #ffffff06",pointerEvents:"none",overflow:"hidden"},children:[w.jsx("div",{onMouseDown:_e=>no(_e,G.id),style:{height:r3,display:"flex",alignItems:"center",padding:"0 8px",borderBottom:`1px solid ${$o(se,"66","#4d78bc66")}`,background:$o(se,"24","#4d78bc24"),color:"#cfd8ef",fontSize:10,letterSpacing:.4,fontWeight:700,cursor:"grab",userSelect:"none",pointerEvents:"all"},title:G.label||"Frame",children:w.jsx("span",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:G.label||"Frame"})}),w.jsx("div",{onMouseDown:_e=>Er(_e,G.id),style:{position:"absolute",right:2,bottom:2,width:12,height:12,borderRadius:2,border:`1px solid ${$o(se,"aa","#4d78bcaa")}`,background:$o(se,"33","#4d78bc33"),cursor:"nwse-resize",pointerEvents:"all"}})]},G.id)}),ke.map(G=>{const Q=st.has(G.id);return w.jsx(e3,{node:G,edges:e,allNodes:n,isSel:Q,isConn:!!De,connFrom:(De==null?void 0:De.from)??null,connFromPort:De==null?void 0:De.fromPort,connFromType:De==null?void 0:De.fromType,snapTarget:De&&(xe==null?void 0:xe.nodeId)===G.id?xe:null,previewUrl:V==null?void 0:V[G.id],compileMs:A==null?void 0:A[G.id],lodMode:"full",onDrag:Si,onOut:li,onIn:Wn,onUpdate:u,onDelete:_,onSelect:Yr,onOpen:bs},G.id)})]}),w.jsx(a3,{zoom:X,onZoom:Nt,onReset:()=>{W({x:60,y:60}),re(1)},snapEnabled:B,snapSize:ct,onToggleSnap:C}),w.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:22,display:"flex",alignItems:"center",padding:"0 12px",gap:14,fontSize:8,color:"#1c1c2e",letterSpacing:.7,pointerEvents:"none",borderTop:"1px solid #0e0e1c"},children:[w.jsx("span",{children:"SCROLL zoom"}),w.jsx("span",{children:"MMB pan"}),w.jsx("span",{children:"RMB menu"}),w.jsx("span",{children:"DBLCLICK node open/pin"}),w.jsx("span",{children:"DRAG frame header"}),w.jsx("span",{children:"DEL delete selected"}),w.jsx("span",{children:"ESC cancel"}),w.jsxs("span",{style:{color:B?"#2f9e7f":"#7d879e"},children:["SNAP ",B?`${ct}px`:"OFF"]}),De&&!xe&&w.jsx("span",{style:{color:"#94a3b8",marginLeft:4},children:"● CONNECTING — drag to input port"}),De&&xe&&xe.compat==="exact"&&w.jsx("span",{style:{color:"#22c55e",marginLeft:4},children:"● SNAP — release to connect"}),De&&xe&&xe.compat==="cast"&&w.jsx("span",{style:{color:"#eab308",marginLeft:4},children:"● SNAP (implicit cast) — release to connect"}),De&&xe&&xe.compat==="invalid"&&w.jsx("span",{style:{color:"#ef4444",marginLeft:4},children:"● INCOMPATIBLE — types don't match"}),ve&&!De&&!_n(ve.type)&&w.jsxs("span",{style:{color:o3(ve.type),marginLeft:4},children:["◈ ",(pe=Et[ve.type])==null?void 0:pe.label," selected · DEL to delete"]}),he&&!De&&!ve&&w.jsxs("span",{style:{color:he.color||"#7aa2f7",marginLeft:4},children:["FRAME ",he.label||he.id," selected - DEL to delete"]})]})]})}function l3(n){return n==="plane"?{alpha:Math.PI/4,beta:1.123,radius:2.586,target:{x:0,y:0,z:0}}:n==="cylinder"?{alpha:Math.PI/4,beta:1.095,radius:2.292,target:{x:0,y:0,z:0}}:{alpha:Math.PI/4,beta:1.055,radius:2.437,target:{x:0,y:0,z:0}}}function N_(n){return l3(n)}function OC(n,e,t){const r=N_(n),o=t??r.target;return e==="default"?{...r,target:o}:e==="front"?{alpha:Math.PI/2,beta:Math.PI/2,radius:r.radius,target:o}:e==="right"?{alpha:0,beta:Math.PI/2,radius:r.radius,target:o}:e==="back"?{alpha:-Math.PI/2,beta:Math.PI/2,radius:r.radius,target:o}:e==="left"?{alpha:Math.PI,beta:Math.PI/2,radius:r.radius,target:o}:e==="top"?{alpha:Math.PI/2,beta:.15,radius:r.radius,target:o}:{alpha:Math.PI/2,beta:Math.PI-.15,radius:r.radius,target:o}}function BC(n){const e=n.target??{x:0,y:0,z:0};return{alpha:Number.isFinite(n.alpha)?n.alpha:Math.PI/4,beta:Math.max(.15,Math.min(Math.PI-.15,Number.isFinite(n.beta)?n.beta:1.055)),radius:Math.max(.6,Math.min(8,Number.isFinite(n.radius)?n.radius:2.437)),target:{x:Number.isFinite(e.x)?e.x:0,y:Number.isFinite(e.y)?e.y:0,z:Number.isFinite(e.z)?e.z:0}}}function zC(n,e,t=.001){return Math.abs(n.alpha-e.alpha)<=t&&Math.abs(n.beta-e.beta)<=t&&Math.abs(n.radius-e.radius)<=t&&Math.abs(n.target.x-e.target.x)<=t&&Math.abs(n.target.y-e.target.y)<=t&&Math.abs(n.target.z-e.target.z)<=t}function c3(){const n="sphere";return{meshPreset:n,viewMode:"lit",environmentPreset:"city",customEnvironmentUrl:null,customEnvironmentName:null,environmentRotation:0,lightRotation:30,lightIntensity:1.15,lightColor:"#ffffff",lightTemperature:6500,ambientTint:"#becdff",ambientIntensity:.8,iblIntensity:.8,shadowsEnabled:!1,autoRotateSpeed:0,cameraPose:N_(n)}}function $C(n){const e=n.trim().replace("#",""),t=e.length===3?e.split("").map(o=>o+o).join(""):e.padEnd(6,"0").slice(0,6),r=Number.parseInt(t,16);return Number.isFinite(r)?{r:(r>>16&255)/255,g:(r>>8&255)/255,b:(r&255)/255}:{r:1,g:1,b:1}}function VC(n){const e=Math.max(1e3,Math.min(4e4,n))/100;let t,r,o;return e<=66?(t=255,r=99.4708025861*Math.log(e)-161.1195681661,o=e<=19?0:138.5177312231*Math.log(e-10)-305.0447927307):(t=329.698727446*Math.pow(e-60,-.1332047592),r=288.1221695283*Math.pow(e-60,-.0755148492),o=255),{r:Math.min(1,Math.max(0,t/255)),g:Math.min(1,Math.max(0,r/255)),b:Math.min(1,Math.max(0,o/255))}}const u3=Gr.lazy(async()=>({default:(await cf(()=>import("./Viewport-D-ndbtZl.js"),[])).Viewport})),d3=Gr.lazy(async()=>({default:(await cf(()=>import("./Viewport3D-BRvlcjl5.js"),__vite__mapDeps([0,1]))).Viewport3D})),f3=Gr.lazy(async()=>({default:(await cf(()=>import("./Viewport3DBabylon-DKVbUfXb.js").then(e=>e.V),__vite__mapDeps([2,1]))).Viewport3DBabylon})),U_=I.createContext(null),Fa=()=>{const n=I.useContext(U_);if(!n)throw new Error("useApp must be used inside AppContext");return n},yr=120,ds=200,tr=40,p3=.4;function h3({stats:n,backend:e}){const t=I.useRef(null),r=I.useRef(null),o=I.useRef({count:0,last:performance.now(),history:new Float32Array(yr),head:0,filled:0,currentFps:0,minFps:999,maxFps:0,frameTimes:[],lastFrame:performance.now()});return I.useEffect(()=>{let a=0;const c=o.current,f=()=>{a=requestAnimationFrame(f);const u=performance.now(),p=u-c.lastFrame;if(c.lastFrame=u,c.frameTimes.push(p),c.count++,u-c.last>=500){const _=Math.round(c.count*1e3/(u-c.last));c.currentFps=_,c.history[c.head]=_,c.head=(c.head+1)%yr,c.filled<yr&&c.filled++;let x=999,m=0;for(let g=0;g<c.filled;g++)c.history[g]<x&&(x=c.history[g]),c.history[g]>m&&(m=c.history[g]);c.minFps=x,c.maxFps=m;const b=c.frameTimes.length>0?c.frameTimes.reduce((g,y)=>g+y,0)/c.frameTimes.length:0,E=c.frameTimes.length>0?Math.max(...c.frameTimes):0;c.frameTimes=[],t.current&&(t.current.innerText=`FPS: ${_}  (min ${x} / max ${m})  [${e}]
Frame: ${b.toFixed(1)} ms avg  ${E.toFixed(1)} ms max
Nodes: ${n.nodeCount}  Edges: ${n.edgeCount}
Shader: ${n.shaderLines} ln  ${n.shaderBytes} B
Compile: ${n.compileTimeMs.toFixed(1)} ms  (#${n.recompileCount})
Render p50/p95: ${(n.renderP50Ms??0).toFixed(1)} / ${(n.renderP95Ms??0).toFixed(1)} ms`),h(),c.count=0,c.last=u}},h=()=>{const u=r.current;if(!u)return;const p=u.getContext("2d");if(!p)return;const _=window.devicePixelRatio||1;(u.width!==ds*_||u.height!==tr*_)&&(u.width=ds*_,u.height=tr*_,p.scale(_,_)),p.clearRect(0,0,ds,tr),p.fillStyle="#0a0e14",p.fillRect(0,0,ds,tr);const x=Math.max(c.maxFps+5,65),m=ds/yr;p.strokeStyle="#1a3a1a",p.lineWidth=.5;for(const E of[30,60]){const g=tr-E/x*tr;p.beginPath(),p.moveTo(0,g),p.lineTo(ds,g),p.stroke()}p.font="7px monospace",p.fillStyle="#1a4a1a",p.fillText("60",1,tr-60/x*tr-2),p.fillText("30",1,tr-30/x*tr-2);for(let E=0;E<c.filled;E++){const g=(c.head-c.filled+E+yr)%yr,y=c.history[g],P=y/x*tr,N=E/yr*ds;y<x*p3?p.fillStyle="#ff3333cc":y<45?p.fillStyle="#ffaa22cc":p.fillStyle="#00cc44aa",p.fillRect(N,tr-P,Math.max(m-.5,1),P)}const b=c.filled>0?c.history[(c.head-1+yr)%yr]:0;if(b>0&&c.filled>1){const g=c.history[(c.head-2+yr)%yr]-b;if(g>15){const y=(c.filled-1)/yr*ds;p.fillStyle="#ff5555",p.font="bold 8px monospace",p.fillText(`-${Math.round(g)}`,Math.min(y,ds-20),8)}}};return a=requestAnimationFrame(f),()=>cancelAnimationFrame(a)},[n]),w.jsxs("div",{style:{position:"absolute",top:8,left:8,background:"#000000cc",borderRadius:4,pointerEvents:"none",zIndex:20,overflow:"hidden"},children:[w.jsx("canvas",{ref:r,style:{display:"block",width:ds,height:tr}}),w.jsx("div",{ref:t,style:{color:"#0f0",fontFamily:"monospace",fontSize:9,padding:"4px 8px 5px",whiteSpace:"pre",lineHeight:1.45}})]})}function m3(){const n=Fa(),e=I.useCallback(t=>{n.onSelectionChange(t);const r=n.graph.nodes.find(o=>o.id===t);if(r&&(r.type==="atom_graph"||r.type==="perlin")){n.onOpenAtomNode(t);return}n.onPinPreview(n.pinnedPreviewNodeId===t?null:t)},[n]);return w.jsxs("div",{style:{width:"100%",height:"100%",position:"relative",background:"#1f2126"},children:[w.jsx(D_,{nodes:n.graph.nodes,edges:n.graph.edges,frames:n.graph.frames||[],onMove:n.onMove,onMoveFrame:n.onMoveFrame,onResizeFrame:n.onResizeFrame,onDelFrame:n.onDeleteFrame,onDelEdge:n.onDeleteEdge,onConnect:n.onConnect,onUpdateParam:n.onUpdateParam,onAddNode:n.onAddNode,onDelNode:n.onDeleteNode,onSelectionChange:n.onSelectionChange,onSelectionSetChange:n.onSelectionSetChange,onCanvasInteractionStart:n.onCanvasInteractionStart,onCanvasInteractionEnd:n.onCanvasInteractionEnd,onVisibleNodeIdsChange:n.onVisibleNodeIdsChange,onZoomChange:n.onGraphZoomChange,onNodeOpen:e,onCanvasClick:n.onCanvasClick,onRequestContextMenu:n.onRequestContextMenu,nodePreviews:n.nodePreviews,nodeTimings:n.nodeTimings,viewCommandNonce:n.graphViewCommandNonce,viewCommandType:n.graphViewCommandType,onToggleSnap:()=>n.setSnapEnabled(!n.snapEnabled),snapEnabled:n.snapEnabled,snapSize:n.snapGridSize}),w.jsx(h3,{stats:n.stats,backend:"WebGPU"})]})}function g3(){const n=Fa(),e=I.useMemo(()=>n.libraryByCategory.map(([a,c])=>{const f=Pi[a];return{key:a,label:(f==null?void 0:f.label)||a.toUpperCase(),color:(f==null?void 0:f.color)||"#9aa5c4",count:c.length}}),[n.libraryByCategory]),[t,r]=I.useState("gen");I.useEffect(()=>{var c;if(t==="all")return;e.some(f=>f.key===t&&f.count>0)||r(((c=e[0])==null?void 0:c.key)||"all")},[t,e]);const o=I.useMemo(()=>{if(t==="all")return n.libraryByCategory.flatMap(([c,f])=>f.map(h=>({...h,categoryKey:c})));const a=n.libraryByCategory.find(([c])=>c===t);return a?a[1].map(c=>({...c,categoryKey:t})):[]},[t,n.libraryByCategory]);return w.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",background:"#2a2d33"},children:[w.jsx("div",{style:{padding:"5px 6px",borderBottom:"1px solid #3a3e47"},children:w.jsx("input",{className:"nt-search",placeholder:"Search nodes...",value:n.libSearch,onChange:a=>n.setLibSearch(a.target.value)})}),w.jsx("div",{className:"nt-lib-tabs-wrap",children:w.jsxs("div",{className:"nt-lib-tabs",children:[w.jsxs("button",{className:`nt-lib-tab${t==="all"?" active":""}`,onClick:()=>r("all"),children:["ALL",w.jsx("span",{children:n.libraryByCategory.reduce((a,[,c])=>a+c.length,0)})]}),e.map(a=>w.jsxs("button",{className:`nt-lib-tab${t===a.key?" active":""}`,onClick:()=>r(a.key),style:{"--nt-lib-tab-accent":a.color},children:[a.label,w.jsx("span",{children:a.count})]},a.key))]})}),w.jsxs("div",{style:{flex:1,minHeight:0,overflow:"auto",padding:"4px 4px"},children:[o.map(a=>{var c;return w.jsxs("button",{draggable:!0,onDragStart:f=>{f.dataTransfer.setData("application/nt-node-type",a.type),f.dataTransfer.effectAllowed="copy"},onClick:()=>n.onAddNode(a.type),className:"nt-lib-item",children:[a.label,w.jsx("span",{style:{marginLeft:"auto",fontSize:9,color:"#64739a"},children:((c=Pi[a.categoryKey])==null?void 0:c.label)||a.categoryKey})]},`${a.categoryKey}_${a.type}`)}),o.length===0&&w.jsx("div",{style:{padding:12,fontSize:10,color:"#555c6e",textAlign:"center"},children:"No results"})]})]})}function v3(){var c;const n=Fa(),[e,t]=I.useState({w:0,h:0,dpr:1}),r=I.useCallback((f,h,u)=>t({w:f,h,dpr:u}),[]),o=n.previewTarget,a=!!n.pinnedPreviewNodeId;return w.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",background:"#232832"},children:[w.jsxs("div",{style:{height:30,display:"flex",alignItems:"center",gap:6,padding:"0 8px",borderBottom:"1px solid #343c4c",flexShrink:0},children:[o.nodeId?w.jsxs("span",{style:{fontSize:10,fontWeight:600,color:"#3ecf8e",letterSpacing:.3,display:"flex",alignItems:"center",gap:4},children:[o.label,w.jsxs("span",{style:{color:"#5f6882",fontWeight:400},children:["/ ",o.portLabel]}),a&&w.jsx("span",{style:{fontSize:8,color:"#f0c43e",cursor:"pointer",letterSpacing:0},title:"Unpin preview",onClick:()=>n.onPinPreview(null),children:"PIN"})]}):w.jsx("span",{style:{fontSize:10,color:"#5f6882"},children:"Output"}),n.interacting&&w.jsx("span",{style:{fontSize:8,color:"#f0c43e",letterSpacing:.4},children:"LQ"}),n.thumbnailDeferred&&w.jsx("span",{style:{fontSize:8,color:"#f3bd8e",letterSpacing:.3},children:"THUMB DEFER"}),w.jsx("button",{className:"nt-btn-sm",style:{height:20,padding:"0 7px",fontSize:9},onClick:n.onTogglePreviewHiDpi,title:n.previewHiDpi?"HiDPI on (uses device pixel ratio)":"LowDPI on (forces DPR=1)",children:n.previewHiDpi?"HiDPI":"LowDPI"}),w.jsx("button",{className:"nt-btn-sm",style:{height:20,padding:"0 7px",fontSize:9},onClick:n.onTogglePreviewRenderEnabled,title:n.previewRenderEnabled?"Disable preview rendering loop":"Enable preview rendering loop",children:n.previewRenderEnabled?"Render On":"Render Off"}),w.jsx("button",{className:"nt-btn-sm",style:{height:20,padding:"0 7px",fontSize:9},onClick:n.onTogglePreviewPaintEnabled,title:n.previewPaintEnabled?"Painting mode enabled":"Enable painting mode",children:n.previewPaintEnabled?"Paint On":"Paint Off"}),w.jsx("input",{type:"range",min:1,max:256,step:1,value:n.previewPaintBrushRadius,onChange:f=>n.onSetPreviewPaintBrushRadius(parseInt(f.target.value,10)||1),title:`Brush size: ${Math.round(n.previewPaintBrushRadius)}px`,style:{width:84,height:18}}),w.jsx("input",{type:"color",value:n.previewPaintBrushColor,onChange:f=>n.onSetPreviewPaintBrushColor(f.target.value),title:"Brush color",style:{width:24,height:20,border:"1px solid #3f4a63",borderRadius:4,background:"transparent",padding:0}}),w.jsxs("span",{style:{marginLeft:"auto",fontSize:10,color:"#8791ad"},children:[e.w,"x",e.h,e.dpr>1?` @${e.dpr.toFixed(1)}x`:"",` | q ${n.viewportQuality.scale.toFixed(2)} | ${((c=n.rendererPerf)==null?void 0:c.fps)??0} fps | live ${n.previewResolution} | export ${n.patternSize}`]})]}),w.jsx("div",{style:{flex:1,minHeight:0},children:w.jsx(Gr.Suspense,{fallback:w.jsx("div",{style:{width:"100%",height:"100%",display:"grid",placeItems:"center",color:"#8fa0c2",fontSize:12},children:"Loading 2D preview..."}),children:w.jsx(u3,{compiled:n.previewShader,tile:n.tile,resolutionScale:n.previewResScale,hiDpi:n.previewHiDpi,renderEnabled:n.previewRenderEnabled,paintMode:n.previewPaintEnabled,paintBrush:n.previewPaintBrush,inlineErrors:!1,onShaderError:n.onPreviewError,onResolutionChange:r,onPerfSample:n.onViewportPerfSample,performanceMode:n.performanceMode,frameBudgetMs:n.previewFrameBudgetMs,graphHash:n.graphPerfHash})})})]})}function x3(n){return!!n&&Array.isArray(n.nodes)&&Array.isArray(n.edges)}function k_(){return{schemaVersion:1,resolution:512,nodes:[{id:"atom_in",type:"atom_input_a",x:80,y:140,params:{}},{id:"atom_mul",type:"multiply",x:260,y:140,params:{b:1.12}},{id:"atom_remap",type:"remap",x:450,y:140,params:{inLo:.04,inHi:.96,outLo:0,outHi:1}},{id:"atom_lvl",type:"levels",x:660,y:140,params:{inMin:.03,inMax:.97,gamma:.95}},{id:"atom_clamp",type:"clamp01",x:850,y:140,params:{}},{id:"atom_out",type:"output_height",x:1040,y:140,params:{}}],edges:[{id:"atom_e1",fromId:"atom_in",fromPort:0,toId:"atom_mul",toPort:0},{id:"atom_e2",fromId:"atom_mul",fromPort:0,toId:"atom_remap",toPort:0},{id:"atom_e3",fromId:"atom_remap",fromPort:0,toId:"atom_lvl",toPort:0},{id:"atom_e4",fromId:"atom_lvl",fromPort:0,toId:"atom_clamp",toPort:0},{id:"atom_e5",fromId:"atom_clamp",fromPort:0,toId:"atom_out",toPort:0}]}}function _3(n){const e={},t=(n==null?void 0:n.params)||{};for(const[r,o]of Object.entries(t))r!=="subgraph"&&(e[r]=o);return{schemaVersion:1,resolution:512,nodes:[{id:"perlin_core",type:"perlin",x:100,y:140,params:e},{id:"atom_out",type:"output_height",x:360,y:140,params:{}}],edges:[{id:"atom_e1",fromId:"perlin_core",fromPort:0,toId:"atom_out",toPort:0}]}}function y3(n){return(n==null?void 0:n.type)==="perlin"?_3(n):k_()}function S3(n){return n==="contrast_boost"?{schemaVersion:1,resolution:512,nodes:[{id:"atom_in",type:"atom_input_a",x:80,y:140,params:{}},{id:"atom_sub",type:"subtract",x:250,y:140,params:{b:.5}},{id:"atom_mul",type:"multiply",x:430,y:140,params:{b:1.45}},{id:"atom_add",type:"add",x:610,y:140,params:{b:.5}},{id:"atom_lvl",type:"levels",x:790,y:140,params:{inMin:.02,inMax:.98,gamma:.9}},{id:"atom_clamp",type:"clamp01",x:970,y:140,params:{}},{id:"atom_out",type:"output_height",x:1150,y:140,params:{}}],edges:[{id:"atom_e1",fromId:"atom_in",fromPort:0,toId:"atom_sub",toPort:0},{id:"atom_e2",fromId:"atom_sub",fromPort:0,toId:"atom_mul",toPort:0},{id:"atom_e3",fromId:"atom_mul",fromPort:0,toId:"atom_add",toPort:0},{id:"atom_e4",fromId:"atom_add",fromPort:0,toId:"atom_lvl",toPort:0},{id:"atom_e5",fromId:"atom_lvl",fromPort:0,toId:"atom_clamp",toPort:0},{id:"atom_e6",fromId:"atom_clamp",fromPort:0,toId:"atom_out",toPort:0}]}:n==="edge_focus"?{schemaVersion:1,resolution:512,nodes:[{id:"atom_in_a",type:"atom_input_a",x:80,y:120,params:{}},{id:"atom_in_b",type:"atom_input_b",x:80,y:280,params:{}},{id:"atom_edge",type:"edge_detect",x:290,y:200,params:{radius:1.2,strength:1.8}},{id:"atom_gain",type:"multiply",x:510,y:200,params:{b:1.25}},{id:"atom_mix",type:"blend",x:730,y:200,params:{mode:"screen",opacity:.55}},{id:"atom_lvl",type:"levels",x:960,y:200,params:{inMin:.04,inMax:.98,gamma:.95}},{id:"atom_out",type:"output_height",x:1160,y:200,params:{}}],edges:[{id:"atom_e1",fromId:"atom_in_a",fromPort:0,toId:"atom_edge",toPort:0},{id:"atom_e2",fromId:"atom_edge",fromPort:0,toId:"atom_gain",toPort:0},{id:"atom_e3",fromId:"atom_gain",fromPort:0,toId:"atom_mix",toPort:0},{id:"atom_e4",fromId:"atom_in_b",fromPort:0,toId:"atom_mix",toPort:1},{id:"atom_e5",fromId:"atom_mix",fromPort:0,toId:"atom_lvl",toPort:0},{id:"atom_e6",fromId:"atom_lvl",fromPort:0,toId:"atom_out",toPort:0}]}:n==="dual_blend"?{schemaVersion:1,resolution:512,nodes:[{id:"atom_in_a",type:"atom_input_a",x:80,y:120,params:{}},{id:"atom_in_b",type:"atom_input_b",x:80,y:280,params:{}},{id:"atom_blend",type:"blend",x:330,y:200,params:{mode:"overlay",opacity:.7}},{id:"atom_lvl",type:"levels",x:560,y:200,params:{inMin:.03,inMax:.98,gamma:.95}},{id:"atom_out",type:"output_height",x:770,y:200,params:{}}],edges:[{id:"atom_e1",fromId:"atom_in_a",fromPort:0,toId:"atom_blend",toPort:0},{id:"atom_e2",fromId:"atom_in_b",fromPort:0,toId:"atom_blend",toPort:1},{id:"atom_e3",fromId:"atom_blend",fromPort:0,toId:"atom_lvl",toPort:0},{id:"atom_e4",fromId:"atom_lvl",fromPort:0,toId:"atom_out",toPort:0}]}:k_()}function ax(n){return JSON.parse(JSON.stringify(n))}function b3(n,e){if(!x3(n))return e;const t=n.nodes.filter(c=>c&&typeof c.id=="string"&&typeof c.type=="string"&&typeof c.x=="number"&&typeof c.y=="number"&&typeof c.params=="object"),r=new Set(t.map(c=>c.id)),o=n.edges.filter(c=>c&&typeof c.id=="string"&&typeof c.fromId=="string"&&typeof c.toId=="string"&&typeof c.fromPort=="number"&&typeof c.toPort=="number"&&r.has(c.fromId)&&r.has(c.toId));if(t.length===0)return e;const a=Array.isArray(n.frames)?n.frames.filter(c=>c&&typeof c.id=="string"&&typeof c.x=="number"&&typeof c.y=="number"&&typeof c.width=="number"&&typeof c.height=="number"&&typeof c.label=="string"):[];return{schemaVersion:n.schemaVersion||1,resolution:typeof n.resolution=="number"?n.resolution:512,nodes:t,edges:o,frames:a}}function M3({viewId:n}){var E;const e=Fa(),t=e.atomViewBindings[n],r=I.useMemo(()=>e.graph.nodes.find(g=>g.id===t)||null,[e.graph.nodes,t]),o=I.useMemo(()=>{var g;return b3((g=r==null?void 0:r.params)==null?void 0:g.subgraph,y3(r))},[(E=r==null?void 0:r.params)==null?void 0:E.subgraph,r]),[a,c]=I.useState(()=>ax(o)),[f,h]=I.useState("constant"),[u,p]=I.useState("default"),_=I.useMemo(()=>Object.values(Et).filter(g=>g.type==="remote"||g.type==="atom_input"?!1:g.category==="output"?g.type==="output_height":!0).map(g=>({type:g.type,label:g.label})).sort((g,y)=>g.label.localeCompare(y.label)),[]),x=I.useMemo(()=>[{id:"default",label:"Math Polish"},{id:"contrast_boost",label:"Contrast Boost"},{id:"edge_focus",label:"Edge Focus"},{id:"dual_blend",label:"Dual Blend (A/B)"}],[]);I.useEffect(()=>{c(ax(o))},[o,t]);const m=I.useCallback(g=>{t&&(c(g),e.onUpdateParam(t,"subgraph",g))},[e,t]),b=I.useCallback(g=>{const y=new La(a);g(y)!==!1&&m(y.serialize())},[a,m]);return t?r?w.jsxs("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",background:"#1e2430"},children:[w.jsxs("div",{style:{height:32,display:"flex",alignItems:"center",gap:6,padding:"0 8px",borderBottom:"1px solid #323a4a",flexShrink:0},children:[w.jsx("span",{style:{fontSize:10,color:"#d8e2ff",fontWeight:700},children:"Atom Graph"}),w.jsxs("span",{style:{fontSize:9,color:"#8791ad"},children:[r.type," (",r.id,")"]}),w.jsx("select",{className:"nt-select",value:u,onChange:g=>p(g.target.value),style:{marginLeft:8},title:"Apply a math-heavy internal template",children:x.map(g=>w.jsx("option",{value:g.id,children:g.label},g.id))}),w.jsx("button",{className:"nt-btn-sm",onClick:()=>m(S3(u)),title:"Replace subgraph with template",children:"Apply Template"}),w.jsx("select",{className:"nt-select",value:f,onChange:g=>h(g.target.value),style:{marginLeft:"auto"},children:_.map(g=>w.jsx("option",{value:g.type,children:g.label},g.type))}),w.jsx("button",{className:"nt-btn-sm",onClick:()=>b(g=>{const y=120+Math.random()*260,P=80+Math.random()*220;return!!g.addNode(f,y,P)}),children:"Add Node"})]}),w.jsx("div",{style:{flex:1,minHeight:0},children:w.jsx(D_,{nodes:a.nodes,edges:a.edges,frames:a.frames||[],onMove:(g,y)=>b(P=>{P.moveNode(g,y.x,y.y)}),onMoveFrame:(g,y)=>b(P=>{P.moveFrame(g,y.x,y.y)}),onResizeFrame:(g,y)=>b(P=>{P.resizeFrame(g,y.width,y.height)}),onDelFrame:g=>b(y=>{y.removeFrame(g)}),onDelEdge:g=>b(y=>{y.removeEdge(g)}),onConnect:(g,y,P,N)=>b(k=>!!k.addEdge(g,y,P,N??0)),onUpdateParam:(g,y,P)=>b(N=>{N.updateParam(g,y,P)}),onAddNode:(g,y,P)=>b(N=>!!N.addNode(g,y??180,P??120)),onDelNode:g=>b(y=>{y.removeNode(g)}),onSelectionChange:()=>{},onCanvasClick:()=>{},onNodeOpen:()=>{},nodePreviews:{},nodeTimings:{}})})]}):w.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#ffb3b3",fontSize:11},children:"Parent atom node was removed."}):w.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#8ea0c8",fontSize:11},children:"Atom window is not bound to a node."})}function w3(){var a,c,f,h,u,p,_,x,m,b,E,g;const n=Fa(),e=n.outputPreviewSurfaces,[t,r]=I.useState(c3),o={baseColorCanvas:((a=e==null?void 0:e.baseColor)==null?void 0:a.canvas)??null,baseColorVersion:((c=e==null?void 0:e.baseColor)==null?void 0:c.version)??0,roughnessCanvas:((f=e==null?void 0:e.roughness)==null?void 0:f.canvas)??null,roughnessVersion:((h=e==null?void 0:e.roughness)==null?void 0:h.version)??0,normalCanvas:((u=e==null?void 0:e.normal)==null?void 0:u.canvas)??null,normalVersion:((p=e==null?void 0:e.normal)==null?void 0:p.version)??0,metallicCanvas:((_=e==null?void 0:e.metallic)==null?void 0:_.canvas)??null,metallicVersion:((x=e==null?void 0:e.metallic)==null?void 0:x.version)??0,aoCanvas:((m=e==null?void 0:e.ao)==null?void 0:m.canvas)??null,aoVersion:((b=e==null?void 0:e.ao)==null?void 0:b.version)??0,heightCanvas:((E=e==null?void 0:e.height)==null?void 0:E.canvas)??null,heightVersion:((g=e==null?void 0:e.height)==null?void 0:g.version)??0,frameBudgetMs:n.previewFrameBudgetMs,performanceMode:n.performanceMode,onPerfSample:n.onViewportPerfSample,onGpuFailure:n.onViewportGpuFailure,sceneState:t,setSceneState:r};return w.jsxs("div",{style:{width:"100%",height:"100%",background:"#1b2230",display:"flex",flexDirection:"column"},children:[w.jsxs("div",{style:{height:30,display:"flex",alignItems:"center",gap:6,padding:"0 8px",borderBottom:"1px solid #343c4c",flexShrink:0},children:[w.jsx("span",{style:{fontSize:10,color:"#8fa0c2",fontWeight:700,letterSpacing:.3},children:"Renderer"}),w.jsx("button",{className:"nt-btn-sm",style:{height:20,padding:"0 7px",fontSize:9},onClick:()=>n.setPreview3dRenderer("three"),children:n.preview3dRenderer==="three"?"Three Active":"Three"}),w.jsx("button",{className:"nt-btn-sm",style:{height:20,padding:"0 7px",fontSize:9},onClick:()=>n.setPreview3dRenderer("babylon"),children:n.preview3dRenderer==="babylon"?"Babylon Active":"Babylon"}),w.jsx("span",{style:{marginLeft:"auto",fontSize:10,color:"#6f7f9e"},children:n.gpuCooling?n.gpuSafetyMessage||"GPU safety cooldown active":n.preview3dRenderer==="babylon"?"Babylon.js raster preview":"Three.js raster preview"})]}),w.jsx("div",{style:{flex:1,minHeight:0},children:w.jsx(Gr.Suspense,{fallback:w.jsx("div",{style:{width:"100%",height:"100%",display:"grid",placeItems:"center",color:"#8fa0c2",fontSize:12},children:"Loading 3D module..."}),children:n.preview3dRenderer==="babylon"?w.jsx(f3,{...o}):w.jsx(d3,{...o})})})]})}function E3(){const n=Fa(),e=I.useMemo(()=>{var T;return((T=n.codeShader)==null?void 0:T.source)||""},[n.codeShader]),t=(n.stats.backend||"glsl").toLowerCase()==="wgsl"?"wgsl":"glsl",[r,o]=I.useState("monitor"),[a,c]=I.useState(()=>jc());I.useEffect(()=>b_(c),[]);const f=I.useMemo(()=>[...a].reverse().find(T=>T.level==="warn")??null,[a]),h=I.useMemo(()=>n.monitorRuns.length>0?n.monitorRuns[n.monitorRuns.length-1]:null,[n.monitorRuns]),u=h?bh(h):"warn",p=Array.isArray(h==null?void 0:h.checks)?h.checks.length:0,_=I.useMemo(()=>[...a].reverse().slice(0,40),[a]),x=I.useMemo(()=>{const T=Date.now()-3e5,M=new Set;return _.filter(C=>{if(C.level!=="error")return!1;const B=Date.parse(C.ts);if(!Number.isFinite(B)||B<T)return!1;const O=`${C.source}|${C.message}`;return M.has(O)?!1:(M.add(O),!0)})},[_]),m=I.useMemo(()=>{const T=[];if(n.compileError&&T.push({severity:"fail",title:"Compile",message:n.compileError}),n.stats.warnings.length>0&&T.push({severity:"warn",title:"Compiler warnings",message:n.stats.warnings.join(" | ")}),x.length>0)for(const M of x.slice(0,3))T.push({severity:"fail",title:"Runtime",message:of(M,!1)});return T.length===0&&T.push({severity:"ok",title:"Status",message:"No critical feedback. Last compile and runtime checks look clean."}),T},[n.compileError,n.stats.warnings,x]),b=async()=>{e&&await navigator.clipboard.writeText(e)},E=()=>{if(!e)return;const T=new Blob([e],{type:"text/plain"}),M=URL.createObjectURL(T),C=document.createElement("a");C.href=M,C.download=`generated_shader.${t}`,C.click(),URL.revokeObjectURL(M)},g=I.useCallback(()=>S_(),[]),y=I.useCallback(()=>y_(),[]),P=I.useCallback(async()=>{await n.runMonitorSuite("quick")},[n]),N=I.useCallback(async()=>{await n.runMonitorSuite("stress")},[n]),k=I.useMemo(()=>[...n.monitorRuns].reverse().slice(0,20),[n.monitorRuns]),V=!!n.rendererPerf&&(n.stats.renderP95Ms??0)>0,A=I.useMemo(()=>[{title:"Compile",severity:n.compileError?"fail":n.stats.warnings.length>0?"warn":"ok",value:n.compileError?"Error":n.stats.warnings.length>0?`${n.stats.warnings.length} warning(s)`:"OK"},{title:"Runtime",severity:x.length>0?"fail":f?"warn":"ok",value:x.length>0?`${x.length} error(s)`:f?"Has warnings":"OK"},{title:"Performance",severity:V?(n.stats.renderP95Ms??0)>n.previewFrameBudgetMs+8?"fail":(n.stats.renderP95Ms??0)>n.previewFrameBudgetMs+2?"warn":"ok":"ok",value:V?`p95 ${(n.stats.renderP95Ms??0).toFixed(1)}ms`:"No samples"},{title:"Monitor",severity:h?u:"warn",value:h?`${h.mode.toUpperCase()} ${h.passCount}/${p} pass`:"No run yet"}],[n.compileError,n.stats.warnings.length,n.stats.renderP95Ms,n.previewFrameBudgetMs,V,f,x.length,h,u,p]);return w.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",background:"#232832"},children:[w.jsxs("div",{style:{height:28,display:"flex",alignItems:"center",gap:4,borderBottom:"1px solid #343c4c",background:"#1b2230",padding:"0 6px",flexShrink:0},children:[w.jsx("button",{className:`nt-tab${r==="monitor"?" active":""}`,onClick:()=>o("monitor"),children:"Monitor"}),w.jsx("button",{className:`nt-tab${r==="code"?" active":""}`,onClick:()=>o("code"),children:"Code"}),w.jsx("button",{className:`nt-tab${r==="uniforms"?" active":""}`,onClick:()=>o("uniforms"),children:"Uniforms"}),w.jsxs("span",{style:{marginLeft:"auto",fontSize:9,color:"#7f8db2",whiteSpace:"nowrap"},children:[n.stats.shaderLines," ln / ",n.stats.shaderBytes," B"]})]}),w.jsxs("div",{style:{borderBottom:"1px solid #31384a",background:"#212734",padding:"7px 8px",display:"flex",gap:6,flexWrap:"wrap",flexShrink:0},children:[r==="monitor"&&w.jsxs(w.Fragment,{children:[w.jsx("button",{onClick:P,className:"nt-btn-sm",disabled:n.monitorRunning,children:n.monitorRunning?"RUNNING...":"RUN QUICK"}),w.jsx("button",{onClick:N,className:"nt-btn-sm",disabled:n.monitorRunning,children:n.monitorRunning?"RUNNING...":"RUN STRESS"}),w.jsx("button",{onClick:n.clearMonitorRuns,className:"nt-btn-sm",children:"Clear Tests"}),w.jsx("button",{onClick:g,className:"nt-btn-sm",children:"Download Logs"}),w.jsx("button",{onClick:y,className:"nt-btn-sm",children:"Clear Logs"})]}),r==="code"&&w.jsxs(w.Fragment,{children:[w.jsx("button",{onClick:b,className:"nt-btn-sm",children:"Copy"}),w.jsxs("button",{onClick:E,className:"nt-btn-sm",children:[".",t]}),w.jsx("button",{onClick:n.onToggleRawMode,className:"nt-btn-sm",children:n.rawMode?"RAW":"READABLE"})]}),r==="uniforms"&&w.jsxs("span",{style:{fontSize:10,color:"#8ea0c8",padding:"5px 2px"},children:[n.uniformRows.length," uniforms"]})]}),r==="monitor"&&w.jsxs("div",{style:{flex:1,minHeight:0,overflow:"auto",padding:8,display:"flex",flexDirection:"column",gap:8},children:[w.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 2px"},children:[w.jsx("span",{style:{fontSize:11,color:"#d4def8",fontWeight:700,letterSpacing:.2},children:"System Health"}),w.jsxs("span",{style:{fontSize:10,color:"#8ea0c8"},children:[x.length," error(s) | ",n.stats.warnings.length," warning(s)"]})]}),w.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:6},children:A.map(T=>w.jsxs("div",{style:{border:"1px solid #364056",borderRadius:6,padding:"8px 9px",background:"#182031"},children:[w.jsx("div",{style:{fontSize:10,color:"#8ea0c8",marginBottom:3},children:T.title}),w.jsx("div",{style:{fontSize:12,color:T.severity==="fail"?"#ffb3b3":T.severity==="warn"?"#f3bd8e":"#9be9c1",fontWeight:700},children:T.value})]},T.title))}),w.jsxs("div",{style:{border:"1px solid #323a4d",borderRadius:6,background:"#151c29",overflow:"hidden"},children:[w.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid #2b3446",color:"#d4def8",fontSize:10,fontWeight:700},children:"Feedback"}),w.jsx("div",{style:{maxHeight:110,overflow:"auto"},children:m.map((T,M)=>w.jsxs("div",{style:{padding:"7px 8px",borderTop:M===0?"none":"1px solid #273044",color:T.severity==="fail"?"#ffb3b3":T.severity==="warn"?"#f3bd8e":"#9be9c1",fontSize:10,lineHeight:1.45,wordBreak:"break-word",fontFamily:"'Cascadia Code','Consolas',monospace"},children:[w.jsxs("span",{style:{fontWeight:700},children:[T.title,":"]})," ",T.message]},`${T.title}_${M}`))})]}),w.jsxs("div",{style:{border:"1px solid #31384a",borderRadius:6,background:"#161d2a",overflow:"hidden"},children:[w.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid #2b3446",color:"#d4def8",fontSize:10,fontWeight:700},children:"Metrics"}),w.jsxs("div",{style:{padding:"6px 8px",fontSize:11,color:"#b8c4e5",lineHeight:1.7},children:[w.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[w.jsx("span",{children:"Compile"}),w.jsxs("span",{children:[n.stats.compileTimeMs.toFixed(2)," ms"]})]}),w.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[w.jsx("span",{children:"Render p50 / p95"}),w.jsx("span",{children:V?`${(n.stats.renderP50Ms??0).toFixed(2)} / ${(n.stats.renderP95Ms??0).toFixed(2)} ms`:"No samples"})]}),w.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[w.jsx("span",{children:"Nodes / Edges"}),w.jsxs("span",{children:[n.stats.nodeCount," / ",n.stats.edgeCount]})]}),w.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[w.jsx("span",{children:"Quality scale"}),w.jsx("span",{children:n.viewportQuality.scale.toFixed(2)})]})]})]}),w.jsxs("div",{style:{border:"1px solid #31384a",borderRadius:6,overflow:"hidden",background:"#131a27",minHeight:140},children:[w.jsxs("div",{style:{padding:"7px 8px",color:"#d4def8",fontSize:11,fontWeight:700,display:"flex",justifyContent:"space-between",borderBottom:"1px solid #2a3242"},children:[w.jsx("span",{children:"Tests and Monitor"}),w.jsxs("span",{style:{color:"#8ea0c8",fontWeight:500},children:[n.monitorRuns.length," runs"]})]}),w.jsxs("div",{style:{maxHeight:180,overflow:"auto"},children:[k.length===0&&w.jsx("div",{style:{padding:"10px 10px",color:"#8ea0c8",fontSize:11},children:"No monitor runs yet."}),k.map(T=>{const M=Array.isArray(T.checks)?T.checks:[],C=T.metrics||{renderP95Ms:0},B=M.find($=>$.id==="performance_budget"),O=(C.renderP95Ms??0)>0&&!(B!=null&&B.message.startsWith("Skipped:"));return w.jsxs("div",{style:{borderTop:"1px solid #2a3242",padding:"7px 9px"},children:[w.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11,color:"#c7d4f2",marginBottom:4},children:[w.jsxs("span",{children:[w.jsx("span",{style:{color:bh(T)==="fail"?"#ffb3b3":bh(T)==="warn"?"#f3bd8e":"#9be9c1",fontWeight:700},children:T.mode.toUpperCase()})," ","| pass ",T.passCount," warn ",T.warnCount," fail ",T.failCount]}),w.jsxs("span",{style:{color:"#7f8db2"},children:[T.totalMs.toFixed(1)," ms"]})]}),w.jsxs("div",{style:{fontSize:10,color:"#8ea0c8",marginBottom:4},children:[new Date(T.ts).toLocaleString()," | ",O?`p95 ${(C.renderP95Ms??0).toFixed(1)} ms`:"p95 n/a"]}),w.jsx("div",{style:{fontSize:10,lineHeight:1.45},children:M.slice().sort(($,W)=>Qv(W.severity)-Qv($.severity)).slice(0,4).map($=>w.jsxs("div",{style:{color:$.severity==="fail"?"#ffb3b3":$.severity==="warn"?"#f3bd8e":"#9be9c1"},children:[$.label,": ",$.message]},`${T.id}_${$.id}`))})]},T.id)})]})]}),w.jsxs("div",{style:{border:"1px solid #31384a",borderRadius:6,maxHeight:160,overflow:"auto",background:"#141b27"},children:[w.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid #2a3242",color:"#d4def8",fontSize:10,fontWeight:700},children:"Recent Logs"}),_.slice(0,10).map(T=>w.jsx("pre",{style:{margin:0,padding:"6px 8px",borderTop:"1px solid #2a3242",color:T.level==="error"?"#ffb3b3":T.level==="warn"?"#f3bd8e":"#c7d4f2",fontSize:10,lineHeight:1.35,whiteSpace:"pre-wrap",wordBreak:"break-word",fontFamily:"'Cascadia Code','Consolas',monospace"},children:of(T,!1)},T.id)),_.length===0&&w.jsx("div",{style:{padding:"8px 10px",color:"#8ea0c8",fontSize:10},children:"No logs captured yet."})]})]}),r==="code"&&w.jsx("div",{style:{flex:1,minHeight:0,overflow:"auto",background:"#161b24"},children:w.jsx("pre",{style:{margin:0,padding:8,color:"#cbd4ee",fontSize:10,lineHeight:1.5,fontFamily:"'Cascadia Code','Consolas',monospace"},children:e||"// No generated source"})}),r==="uniforms"&&w.jsx("div",{style:{flex:1,minHeight:0,overflow:"auto"},children:w.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:9},children:[w.jsx("thead",{children:w.jsxs("tr",{style:{background:"#2a3140",color:"#c4cee8"},children:[w.jsx("th",{style:{textAlign:"left",padding:"4px 6px",fontWeight:700},children:"Name"}),w.jsx("th",{style:{textAlign:"left",padding:"4px 6px",fontWeight:700},children:"Type"}),w.jsx("th",{style:{textAlign:"left",padding:"4px 6px",fontWeight:700},children:"Value"})]})}),w.jsxs("tbody",{children:[n.uniformRows.map(T=>w.jsxs("tr",{style:{borderTop:"1px solid #343c4c"},children:[w.jsx("td",{style:{padding:"4px 6px",color:"#b6c0dc"},children:T.name}),w.jsx("td",{style:{padding:"4px 6px",color:"#b6c0dc"},children:T.type}),w.jsx("td",{style:{padding:"4px 6px",color:"#b6c0dc"},children:A3(T.value)})]},T.name)),n.uniformRows.length===0&&w.jsx("tr",{children:w.jsx("td",{colSpan:3,style:{padding:"8px 10px",color:"#8ea0c8"},children:"No uniforms in current shader."})})]})]})})]})}function T3(){const[n,e]=I.useState(()=>jc());I.useEffect(()=>b_(e),[]);const t=I.useMemo(()=>[...n].reverse().slice(0,400),[n]),r=I.useCallback(()=>S_(),[]),o=I.useCallback(()=>y_(),[]),a=I.useMemo(()=>({error:n.filter(c=>c.level==="error").length,warn:n.filter(c=>c.level==="warn").length,info:n.filter(c=>c.level==="info").length}),[n]);return w.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",background:"#1b2230"},children:[w.jsxs("div",{style:{height:30,display:"flex",alignItems:"center",gap:6,padding:"0 8px",borderBottom:"1px solid #343c4c",flexShrink:0},children:[w.jsx("button",{onClick:r,className:"nt-btn-sm",children:"Download Logs"}),w.jsx("button",{onClick:o,className:"nt-btn-sm",children:"Clear"}),w.jsxs("span",{style:{marginLeft:"auto",fontSize:10,color:"#8ea0c8"},children:["err ",a.error," | warn ",a.warn," | info ",a.info]})]}),w.jsxs("div",{style:{flex:1,minHeight:0,overflow:"auto",background:"#131a27"},children:[t.length===0&&w.jsx("div",{style:{padding:"10px 12px",color:"#8ea0c8",fontSize:10},children:"No logs captured yet."}),t.map(c=>w.jsx("pre",{style:{margin:0,padding:"8px 10px",borderTop:"1px solid #2a3242",color:c.level==="error"?"#ffb3b3":c.level==="warn"?"#f3bd8e":"#c7d4f2",fontSize:10,lineHeight:1.4,whiteSpace:"pre-wrap",wordBreak:"break-word",fontFamily:"'Cascadia Code','Consolas',monospace"},children:of(c,!0)},c.id))]})]})}function C3(){const n=Fa(),[e,t]=I.useState(new Set(["root","graph","nodes","outputs"])),r=I.useCallback(x=>{t(m=>{const b=new Set(m);return b.has(x)?b.delete(x):b.add(x),b})},[]),o=I.useMemo(()=>new Map(n.graph.nodes.map(x=>[x.id,x])),[n.graph.nodes]),a=I.useMemo(()=>({baseColor:Ca(n.graph,"baseColor"),roughness:Ca(n.graph,"roughness"),normal:Ca(n.graph,"normal"),metallic:Ca(n.graph,"metallic"),ao:Ca(n.graph,"ao"),height:Ca(n.graph,"height")}),[n.graph.nodes]),c=I.useMemo(()=>[...n.graph.nodes].sort((x,m)=>{var g,y;const b=((g=Et[x.type])==null?void 0:g.label)||x.type,E=((y=Et[m.type])==null?void 0:y.label)||m.type;return b.localeCompare(E)||x.id.localeCompare(m.id)}),[n.graph.nodes]),f=I.useMemo(()=>[...n.graph.edges].sort((x,m)=>`${x.fromId}:${x.fromPort}>${x.toId}:${x.toPort}`.localeCompare(`${m.fromId}:${m.fromPort}>${m.toId}:${m.toPort}`)),[n.graph.edges]),h=I.useMemo(()=>zl(n.graph),[n.graph.nodes,n.graph.edges]),u=["baseColor","roughness","normal","metallic","ao","height"],p=I.useMemo(()=>h_("pbr_default"),[]),_=I.useCallback(x=>{n.onSelectionChange(x)},[n]);return w.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",background:"#242730"},children:w.jsxs("div",{style:{flex:1,overflow:"auto",padding:8,fontSize:11},children:[w.jsx(Tl,{label:"atomicgraph.ag",depth:0,open:e.has("root"),onToggle:()=>r("root")}),e.has("root")&&w.jsxs(w.Fragment,{children:[w.jsx(Tl,{label:"graph",depth:1,count:n.graph.nodes.length,open:e.has("graph"),onToggle:()=>r("graph")}),e.has("graph")&&w.jsxs(w.Fragment,{children:[w.jsx(Tl,{label:"nodes",depth:2,count:c.length,open:e.has("nodes"),onToggle:()=>r("nodes")}),e.has("nodes")&&c.map(x=>{var y;const m=Et[x.type],b=n.selectedNodeId===x.id,E=n.pinnedPreviewNodeId===x.id,g=(y=n.nodeTimings)==null?void 0:y[x.id];return w.jsx(Vd,{depth:3,label:`${(m==null?void 0:m.label)||x.type} (${x.id})`,right:g!=null?`${g.toFixed(1)}ms`:E?"PIN":void 0,active:b,accent:E?"#f0c43e":void 0,onClick:()=>_(x.id),onDoubleClick:()=>n.onPinPreview(n.pinnedPreviewNodeId===x.id?null:x.id)},`node_${x.id}`)}),w.jsx(Tl,{label:"edges",depth:2,count:f.length,open:e.has("edges"),onToggle:()=>r("edges")}),e.has("edges")&&f.map(x=>{var y,P;const m=o.get(x.fromId),b=o.get(x.toId),E=m?((y=Et[m.type])==null?void 0:y.label)||m.type:x.fromId,g=b?((P=Et[b.type])==null?void 0:P.label)||b.type:x.toId;return w.jsx(Vd,{depth:3,label:`${E}.${x.fromPort} -> ${g}.${x.toPort}`,right:x.id,onClick:()=>{m&&_(m.id)}},`edge_${x.id}`)})]}),w.jsx(Tl,{label:"outputs",depth:1,count:u.length,open:e.has("outputs"),onToggle:()=>r("outputs")}),e.has("outputs")&&u.map(x=>{var P;const m=h[x],b=m?o.get(m.fromId):null,E=b?((P=Et[b.type])==null?void 0:P.label)||b.type:"unconnected",g=!!m,y=a[x];return w.jsx(Vd,{depth:2,label:`${x} -> ${E}`,right:m?`${m.fromId}.${m.fromPort}`:"-",active:y?n.selectedNodeId===y.id:!1,accent:g?"#3ecf8e":"#8892aa",onClick:()=>{b?_(b.id):y&&_(y.id)}},`out_${x}`)}),w.jsx(Tl,{label:"materials",depth:1,count:(p==null?void 0:p.targets.length)??0,open:e.has("materials"),onToggle:()=>r("materials")}),e.has("materials")&&((p==null?void 0:p.targets)??[]).map(x=>w.jsx(Vd,{depth:2,label:`${x.channel} (${x.format})`,right:`texture_${x.fileSuffix}`,accent:h[x.channel]?"#3ecf8e":"#8892aa",onClick:()=>{const m=a[x.channel];m&&_(m.id)}},`mat_${x.channel}`))]})]})})}function Tl({label:n,depth:e,count:t,open:r,onToggle:o}){return w.jsxs("button",{onClick:o,style:{display:"flex",alignItems:"center",width:"100%",height:28,padding:`0 8px 0 ${12+e*16}px`,border:"none",background:"transparent",color:"#dbe4ff",fontSize:12,cursor:"pointer",textAlign:"left",borderRadius:4},children:[w.jsx("span",{style:{width:12,color:"#8ea0c8",fontSize:10},children:r?"▼":"▶"}),w.jsx("span",{children:n}),t!=null&&w.jsxs("span",{style:{marginLeft:6,color:"#7b8bb2",fontSize:10},children:["(",t,")"]})]})}function Vd({label:n,depth:e,right:t,active:r,accent:o,onClick:a,onDoubleClick:c}){return w.jsxs("button",{onClick:a,onDoubleClick:c,style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",height:26,padding:`0 8px 0 ${24+e*16}px`,border:"1px solid transparent",background:r?"#314775":"transparent",color:o||"#c7d4f2",fontSize:12,cursor:a?"pointer":"default",textAlign:"left",borderRadius:4},children:[w.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n}),t&&w.jsx("span",{style:{marginLeft:10,color:"#8ea0c8",fontSize:10,flexShrink:0},children:t})]})}function A3(n){return Array.isArray(n)?`[${n.join(", ")}]`:typeof n=="boolean"?n?"true":"false":String(n)}const R3={graph:m3,library:g3,preview:v3,preview3d:w3,code:E3,logs:T3,explorer:C3};function P3(n,e){if(n==="atom_graph")return w.jsx(M3,{viewId:e},e);const t=R3[n];return t?w.jsx(t,{},e):w.jsxs("div",{className:"dk-empty",children:["Unknown view: ",n]})}const lx={schemaVersion:1,resolution:256,nodes:[{id:"out_base",type:"output_baseColor",x:1664,y:104,params:{}},{id:"out_rough",type:"output_roughness",x:1664,y:304,params:{}},{id:"out_normal",type:"output_normal",x:1664,y:504,params:{}},{id:"out_metal",type:"output_metallic",x:1664,y:704,params:{}},{id:"out_ao",type:"output_ao",x:1664,y:904,params:{}},{id:"out_height",type:"output_height",x:1664,y:1104,params:{}},{id:"base_color",type:"uniform_color",x:80,y:90,params:{r:.16,g:.26,b:.36}},{id:"spots_main",type:"bnw_spots2_v2",x:80,y:380,params:{scale:16,tileOffsetX:0,tileOffsetY:0,seed:4242,nonSquareExpansion:!0,grainAmount:.2,grainThreshold:.88,contrast:1.1}},{id:"transform_spots",type:"transform_2d",x:384,y:380,params:{offsetX:.02,offsetY:-.01,rotation:14,scale:1.08,tile:!0}},{id:"safe_spots",type:"safe_transform",x:688,y:380,params:{offsetX:0,offsetY:0,scale:1,tile:!1}},{id:"histogram_height",type:"histogram_range",x:992,y:380,params:{inMin:.08,inMax:.92,outMin:0,outMax:1}},{id:"levels_main",type:"levels",x:1296,y:380,params:{inMin:.03,inMax:.97,gamma:.9}},{id:"highpass_rough",type:"highpass_grayscale",x:1296,y:612,params:{radius:1.6,intensity:1.25}},{id:"normal_from_height",type:"height_to_normal",x:1296,y:844,params:{strength:2,radius:1,flipY:!1}},{id:"normal_finalize",type:"normal_normalize",x:1504,y:844,params:{flipY:!1}}],edges:[{id:"e1",fromId:"spots_main",fromPort:0,toId:"transform_spots",toPort:0},{id:"e2",fromId:"transform_spots",fromPort:0,toId:"safe_spots",toPort:0},{id:"e3",fromId:"safe_spots",fromPort:0,toId:"histogram_height",toPort:0},{id:"e4",fromId:"histogram_height",fromPort:0,toId:"levels_main",toPort:0},{id:"e5",fromId:"levels_main",fromPort:0,toId:"highpass_rough",toPort:0},{id:"e6",fromId:"levels_main",fromPort:0,toId:"normal_from_height",toPort:0},{id:"e7",fromId:"normal_from_height",fromPort:0,toId:"normal_finalize",toPort:0},{id:"e8",fromId:"normal_finalize",fromPort:0,toId:"out_normal",toPort:0},{id:"e9",fromId:"levels_main",fromPort:0,toId:"out_height",toPort:0},{id:"e10",fromId:"highpass_rough",fromPort:0,toId:"out_rough",toPort:0},{id:"e11",fromId:"levels_main",fromPort:0,toId:"out_metal",toPort:0},{id:"e12",fromId:"base_color",fromPort:0,toId:"out_base",toPort:0},{id:"e13",fromId:"highpass_rough",fromPort:0,toId:"out_ao",toPort:0}],frames:[{id:"fr_outputs",x:1608,y:52,width:344,height:1172,label:"Outputs",color:"#4d78bc"}]},I3=100,L3=96,D3=64,N3=512,U3=.6,k3=1.85,F3=32,Ah="atomicgraph.autosave.v1",cx="atomicgraph.preview.hidpi",ux="atomicgraph.preview.render.enabled",dx="atomicgraph.preview3d.renderer",fx="atomicgraph.preview.paint.enabled",px="atomicgraph.preview.paint.radius",hx="atomicgraph.preview.paint.color",js=256,O3=[256,512,1024,2048],B3=1600,z3=12e3,$3=45e3,Hd=["#4d78bc","#2f9e7f","#a97b2c","#b1597a","#6b66c7"],V3=(n,e)=>Math.round(n/e)*e,Rh=n=>JSON.parse(JSON.stringify(n));function H3(n,e){return e<=n?e:O3.find(r=>r>n&&r<=e)??e}function mx(n){return n>js?js:n}function G3(n){const e=[];let t=0;for(const[r,o]of Object.entries(Et)){if(_n(r))continue;const a={};for(const[h,u]of Object.entries(o.params))a[h]=u.default;const c=t%6,f=Math.floor(t/6);e.push({id:`tpl_${r}`,type:r,x:80+c*300,y:80+f*180,params:a}),t+=1}return{schemaVersion:_s,resolution:Math.max(64,n||512),nodes:e,edges:[]}}const W3=n=>{const e=n;if(!e)return!1;const t=e.tagName;return e.isContentEditable||e.closest('[contenteditable="true"]')?!0:t==="INPUT"||t==="TEXTAREA"||t==="SELECT"},gx=n=>{const e=n.trim().toLowerCase();return e==="del"?"delete":e==="esc"?"escape":e==="spacebar"||e==="space"?" ":e},j3=n=>{const e=n.key||"";return e===" "?" ":e.toLowerCase()},X3=(n,e)=>{if(!n)return!1;const t=n.split("+").map(u=>u.trim()).filter(Boolean);if(t.length===0)return!1;let r=!1,o=!1,a=!1,c=!1,f="";for(const u of t){const p=u.toLowerCase();p==="ctrl"||p==="control"?r=!0:p==="cmd"||p==="command"||p==="meta"?o=!0:p==="alt"||p==="option"?a=!0:p==="shift"?c=!0:f=u}const h=e.ctrlKey||e.metaKey;return r&&!h||o&&!e.metaKey||!r&&!o&&h||e.altKey!==a||e.shiftKey!==c||!f?!1:gx(f)===gx(j3(e))};function Y3(n){return!!n&&Array.isArray(n.nodes)&&Array.isArray(n.edges)}function q3(){return{schemaVersion:1,resolution:512,nodes:[{id:"atom_in",type:"atom_input_a",x:80,y:140,params:{}},{id:"atom_mul",type:"multiply",x:260,y:140,params:{b:1.12}},{id:"atom_remap",type:"remap",x:450,y:140,params:{inLo:.04,inHi:.96,outLo:0,outHi:1}},{id:"atom_lvl",type:"levels",x:660,y:140,params:{inMin:.03,inMax:.97,gamma:.95}},{id:"atom_clamp",type:"clamp01",x:850,y:140,params:{}},{id:"atom_out",type:"output_height",x:1040,y:140,params:{}}],edges:[{id:"atom_e1",fromId:"atom_in",fromPort:0,toId:"atom_mul",toPort:0},{id:"atom_e2",fromId:"atom_mul",fromPort:0,toId:"atom_remap",toPort:0},{id:"atom_e3",fromId:"atom_remap",fromPort:0,toId:"atom_lvl",toPort:0},{id:"atom_e4",fromId:"atom_lvl",fromPort:0,toId:"atom_clamp",toPort:0},{id:"atom_e5",fromId:"atom_clamp",fromPort:0,toId:"atom_out",toPort:0}]}}function K3(n){const e={},t=(n==null?void 0:n.params)||{};for(const[r,o]of Object.entries(t))r!=="subgraph"&&(e[r]=o);return{schemaVersion:1,resolution:512,nodes:[{id:"perlin_core",type:"perlin",x:100,y:140,params:e},{id:"atom_out",type:"output_height",x:360,y:140,params:{}}],edges:[{id:"atom_e1",fromId:"perlin_core",fromPort:0,toId:"atom_out",toPort:0}]}}function Z3(n){return n.type==="perlin"?K3(n):q3()}function J3(n){return n==="atom_graph"||n==="perlin"}function Q3(){return{schemaVersion:_s,resolution:512,nodes:[{id:"n_base",type:"uniform_color",x:120,y:120,params:{r:.22,g:.3,b:.38}},{id:"n_noise_a",type:"perlin",x:180,y:180,params:{scale:5.2,seed:42,tileOffsetX:0,tileOffsetY:0,nonSquare:!0}},{id:"n_noise_b",type:"gaussian_noise",x:220,y:150,params:{scale:10,mean:.5,stdDev:.17,seed:91,tileOffsetX:0,tileOffsetY:0,nonSquare:!0}},{id:"n_transform_a",type:"transform_2d",x:160,y:230,params:{offsetX:.01,offsetY:.02,rotation:8,scale:1.05,tile:!0}},{id:"n_warp_a",type:"warp",x:210,y:250,params:{strength:.26}},{id:"n_warp_b",type:"warp",x:250,y:200,params:{strength:.18}},{id:"n_uv",type:"uv",x:200,y:300,params:{}},{id:"n_vec_warp",type:"vector_warp",x:280,y:270,params:{intensity:.18,centered:!0,tile:!0}},{id:"n_edge",type:"edge_detect",x:290,y:190,params:{radius:1.2,strength:1.4}},{id:"n_blend_h",type:"blend",x:320,y:220,params:{mode:"multiply",opacity:.72}},{id:"n_non_uni",type:"non_uniform_blur",x:300,y:260,params:{radius:2,samples:4}},{id:"n_hist",type:"histogram_range",x:330,y:150,params:{inMin:.1,inMax:.9,outMin:0,outMax:1}},{id:"n_levels_h",type:"levels",x:300,y:120,params:{inMin:.04,inMax:.97,gamma:.9}},{id:"n_remap_h",type:"remap",x:360,y:170,params:{inLo:.08,inHi:.9,outLo:0,outHi:1}},{id:"n_norm",type:"height_to_normal",x:390,y:210,params:{strength:1.6,radius:1,flipY:!1}},{id:"n_norm_fix",type:"normal_normalize",x:420,y:240,params:{flipY:!1}},{id:"out_base",type:"output_baseColor",x:430,y:100,params:{}},{id:"out_rough",type:"output_roughness",x:450,y:180,params:{}},{id:"out_normal",type:"output_normal",x:470,y:260,params:{}},{id:"out_metal",type:"output_metallic",x:500,y:140,params:{}},{id:"out_ao",type:"output_ao",x:520,y:300,params:{}},{id:"out_height",type:"output_height",x:540,y:220,params:{}}],edges:[{id:"d1",fromId:"n_noise_a",fromPort:0,toId:"n_transform_a",toPort:0},{id:"d1b",fromId:"n_transform_a",fromPort:0,toId:"n_warp_a",toPort:0},{id:"d2",fromId:"n_noise_b",fromPort:0,toId:"n_warp_b",toPort:0},{id:"d2b",fromId:"n_warp_b",fromPort:0,toId:"n_vec_warp",toPort:0},{id:"d2c",fromId:"n_uv",fromPort:0,toId:"n_vec_warp",toPort:1},{id:"d3",fromId:"n_warp_a",fromPort:0,toId:"n_blend_h",toPort:0},{id:"d4",fromId:"n_warp_b",fromPort:0,toId:"n_blend_h",toPort:1},{id:"d5",fromId:"n_blend_h",fromPort:0,toId:"n_non_uni",toPort:0},{id:"d5b",fromId:"n_noise_a",fromPort:0,toId:"n_non_uni",toPort:1},{id:"d5c",fromId:"n_non_uni",fromPort:0,toId:"n_hist",toPort:0},{id:"d6",fromId:"n_hist",fromPort:0,toId:"n_levels_h",toPort:0},{id:"d6b",fromId:"n_levels_h",fromPort:0,toId:"n_remap_h",toPort:0},{id:"d7",fromId:"n_remap_h",fromPort:0,toId:"n_norm",toPort:0},{id:"d8",fromId:"n_remap_h",fromPort:0,toId:"out_height",toPort:0},{id:"d9",fromId:"n_norm",fromPort:0,toId:"n_norm_fix",toPort:0},{id:"d9b",fromId:"n_norm_fix",fromPort:0,toId:"out_normal",toPort:0},{id:"d10",fromId:"n_edge",fromPort:0,toId:"out_rough",toPort:0},{id:"d11",fromId:"n_vec_warp",fromPort:0,toId:"n_edge",toPort:0},{id:"d12",fromId:"n_base",fromPort:0,toId:"out_base",toPort:0},{id:"d13",fromId:"n_levels_h",fromPort:0,toId:"out_metal",toPort:0},{id:"d14",fromId:"n_edge",fromPort:0,toId:"out_ao",toPort:0}],frames:[{id:"demo_out",x:420,y:70,width:360,height:340,label:"Outputs",color:"#4d78bc"}]}}function eC(){return{schemaVersion:_s,resolution:512,nodes:[{id:"c_dirt_dark",type:"constant",x:110,y:80,params:{value:.23}},{id:"c_stone_light",type:"constant",x:110,y:120,params:{value:.58}},{id:"c_rough_dirt",type:"constant",x:110,y:180,params:{value:.88}},{id:"c_rough_stone",type:"constant",x:110,y:220,params:{value:.62}},{id:"c_metal",type:"constant",x:110,y:280,params:{value:0}},{id:"n_soil_macro",type:"noise",x:240,y:70,params:{scale:2.8,octaves:3,seed:410,tileOffsetX:0,tileOffsetY:0,nonSquare:!0}},{id:"n_soil_range",type:"histogram_range",x:390,y:70,params:{inMin:.22,inMax:.84,outMin:.18,outMax:.9}},{id:"n_cells",type:"voronoi",x:240,y:270,params:{scale:7,jitter:.58,seed:77,tileOffsetX:0,tileOffsetY:0,nonSquare:!0}},{id:"n_stone_mask",type:"levels",x:390,y:270,params:{inMin:.36,inMax:.82,gamma:.82}},{id:"n_stone_soften",type:"histogram_range",x:540,y:270,params:{inMin:.08,inMax:.94,outMin:0,outMax:.86}},{id:"n_height_merge",type:"blend",x:690,y:190,params:{mode:"add",opacity:.3}},{id:"n_height_finish",type:"curve",x:840,y:190,params:{lift:0,gamma:.96,gain:1}},{id:"n_base_tone",type:"lerp",x:690,y:70,params:{t:.5}},{id:"n_base_variation",type:"blend",x:840,y:70,params:{mode:"multiply",opacity:.14}},{id:"n_rough_tone",type:"lerp",x:690,y:130,params:{t:.5}},{id:"n_ao_invert",type:"oneminus",x:690,y:300,params:{}},{id:"n_ao_levels",type:"levels",x:840,y:300,params:{inMin:.16,inMax:.88,gamma:1.04}},{id:"n_normal",type:"height_to_normal",x:1010,y:190,params:{strength:1.35,radius:1,flipY:!1}},{id:"n_normal_fix",type:"normal_normalize",x:1150,y:190,params:{flipY:!1}},{id:"out_base",type:"output_baseColor",x:1150,y:70,params:{}},{id:"out_rough",type:"output_roughness",x:1150,y:130,params:{}},{id:"out_metal",type:"output_metallic",x:1150,y:190,params:{}},{id:"out_height",type:"output_height",x:1320,y:190,params:{}},{id:"out_normal",type:"output_normal",x:1320,y:260,params:{}},{id:"out_ao",type:"output_ao",x:1150,y:300,params:{}}],edges:[{id:"e1",fromId:"n_soil_macro",fromPort:0,toId:"n_soil_range",toPort:0},{id:"e2",fromId:"n_cells",fromPort:0,toId:"n_stone_mask",toPort:0},{id:"e3",fromId:"n_stone_mask",fromPort:0,toId:"n_stone_soften",toPort:0},{id:"e4",fromId:"n_soil_range",fromPort:0,toId:"n_height_merge",toPort:0},{id:"e5",fromId:"n_stone_soften",fromPort:0,toId:"n_height_merge",toPort:1},{id:"e6",fromId:"n_height_merge",fromPort:0,toId:"n_height_finish",toPort:0},{id:"e7",fromId:"n_height_finish",fromPort:0,toId:"n_normal",toPort:0},{id:"e8",fromId:"n_normal",fromPort:0,toId:"n_normal_fix",toPort:0},{id:"e9",fromId:"c_dirt_dark",fromPort:0,toId:"n_base_tone",toPort:0},{id:"e10",fromId:"c_stone_light",fromPort:0,toId:"n_base_tone",toPort:1},{id:"e11",fromId:"n_stone_mask",fromPort:0,toId:"n_base_tone",toPort:2},{id:"e12",fromId:"n_base_tone",fromPort:0,toId:"n_base_variation",toPort:0},{id:"e13",fromId:"n_soil_range",fromPort:0,toId:"n_base_variation",toPort:1},{id:"e14",fromId:"c_rough_dirt",fromPort:0,toId:"n_rough_tone",toPort:0},{id:"e15",fromId:"c_rough_stone",fromPort:0,toId:"n_rough_tone",toPort:1},{id:"e16",fromId:"n_stone_mask",fromPort:0,toId:"n_rough_tone",toPort:2},{id:"e17",fromId:"n_stone_soften",fromPort:0,toId:"n_ao_invert",toPort:0},{id:"e18",fromId:"n_ao_invert",fromPort:0,toId:"n_ao_levels",toPort:0},{id:"e19",fromId:"n_base_variation",fromPort:0,toId:"out_base",toPort:0},{id:"e20",fromId:"n_rough_tone",fromPort:0,toId:"out_rough",toPort:0},{id:"e21",fromId:"c_metal",fromPort:0,toId:"out_metal",toPort:0},{id:"e22",fromId:"n_height_finish",fromPort:0,toId:"out_height",toPort:0},{id:"e23",fromId:"n_normal_fix",fromPort:0,toId:"out_normal",toPort:0},{id:"e24",fromId:"n_ao_levels",fromPort:0,toId:"out_ao",toPort:0}],frames:[{id:"soil_frame",x:200,y:30,width:280,height:120,label:"Soil Base",color:"#5a4f3f"},{id:"stone_frame",x:200,y:230,width:420,height:120,label:"Stone Masking",color:"#53565a"},{id:"material_frame",x:650,y:30,width:260,height:330,label:"Material and Height",color:"#4d564b"},{id:"final_frame",x:1110,y:30,width:270,height:320,label:"Final Channels",color:"#584a4a"}]}}function vx(n){const e=zl(n);return e.height?"height":e.baseColor?"baseColor":e.normal?"normal":e.roughness?"roughness":e.ao?"ao":e.metallic?"metallic":"baseColor"}function tC(n){return n>=k3?N3:n<=U3?D3:L3}function xx(n,e,t){const r=Wc(n.type);return r||n.type==="output"?{requestKey:`out:${n.id}:${r??t}`,mode:"output",outputChannel:r??t}:{requestKey:`node:${n.id}:p${e}`,mode:"node",outputChannel:t}}function nC(n){const e=/^#[0-9a-fA-F]{6}$/.test(n)?n:"#ff8844",t=parseInt(e.slice(1,3),16)/255,r=parseInt(e.slice(3,5),16)/255,o=parseInt(e.slice(5,7),16)/255;return[t,r,o]}function iC(){const n=I.useRef(null),e=I.useRef(null);n.current||(n.current=new La(lx)),e.current||(e.current=new mT(lx));const t=I.useRef(n.current.resolution||512),r=I.useRef(t.current>js?js:t.current),o=I.useRef(!1);o.current||(o.current=!0,n.current.resolution!==r.current&&n.current.setResolution(r.current),e.current.getResolution()!==r.current&&e.current.setResolution(r.current));const[a,c]=I.useState(()=>{const D=n.current.serialize();return D.resolution===r.current?D:{...D,resolution:r.current}}),f=I.useRef(a),h=!0,[u,p]=I.useState(!1),[_,x]=I.useState(t.current),[m,b]=I.useState(()=>r.current),[E,g]=I.useState(()=>t.current>js),y=I.useMemo(()=>Math.min(m,1024),[m]),[P,N]=I.useState(null),[k,V]=I.useState([]),[A,T]=I.useState(1),[M,C]=I.useState([]),[B,O]=I.useState(null),$=I.useRef(null),[W,X]=I.useState(null),[re,ee]=I.useState(null),[Z,ie]=I.useState({}),[q,ae]=I.useState({}),z=I.useRef({}),j=I.useRef(new Map),Pe=I.useRef({}),qe=I.useRef({}),[De,fe]=I.useState({}),[xe,Re]=I.useState(null),Je=I.useRef(""),[Ze,vt]=I.useState(0),[Qt,$t]=I.useState(0),Bt=I.useRef(null),[Ot,Vt]=I.useState(""),[Xt,J]=I.useState(new Set),Gt=I.useRef({past:[],future:[]}),[Lt,qt]=I.useState(!1),[lt,H]=I.useState(null),[R,le]=I.useState(!1),Ce=I.useRef(0),Ne=300,Te=.5,st="performance_first",[We,ct]=I.useState({scale:1,reason:"initial",last_change_at:Date.now()}),pt=Lt?16.6:22,Ue=Math.min(Lt?Te:1,We.scale),[Fe,gt]=I.useState(null),[it,et]=I.useState(0),[Ct,ne]=I.useState(0),[Ge,Oe]=I.useState(!1),[tt,ke]=I.useState(null),[Ee,ot]=I.useState(0),[Nt,nn]=I.useState(!1),[Kt,Zn]=I.useState(0),[xn,Gi]=I.useState(!1),[Ii,to]=I.useState(0),[Li,wr]=I.useState(null),En=I.useRef(0),Jn=I.useRef(0),[Si,no]=I.useState(!1),[Er,li]=I.useState(!1),Wn=I.useRef(0),Yr=I.useRef(""),bs=I.useRef(""),fi=I.useRef(""),bi=I.useRef(0),Qn=I.useRef([]),Mi=I.useRef(0),io=I.useRef(0),ei=I.useRef(0),U=I.useRef(0),ue=I.useRef(0),ve=I.useRef(null),he=I.useRef(!1),pe=I.useRef(!1),G=I.useRef(new Map),{root:Q,floating:se,setActiveTab:_e,resetLayout:we,addView:Ae,savePreset:Ve,loadPreset:Le,getPresetNames:Ye}=Jc(),{hasGraphTab:Mt,has2DPreviewTab:ht,has3DPreviewTab:at}=I.useMemo(()=>{const D=[...$l(Q),...se.map(de=>de.panel)];let F=!1,K=!1,oe=!1;for(const de of D){for(const Ie of de.tabs)if(Ie.type==="graph"&&(F=!0),Ie.type==="preview"&&(K=!0),Ie.type==="preview3d"&&(oe=!0),F&&K&&oe)break;if(F&&K&&oe)break}return{hasGraphTab:F,has2DPreviewTab:K,has3DPreviewTab:oe}},[se,Q]),xt=Mt,Qe=at,hn=!!tt,yt=I.useMemo(()=>at?R||!xt||hn:!1,[at,R,xt,hn]),[Nn,an]=I.useState(!1),[Dt,sn]=I.useState(null),[en,At]=I.useState(!1),[An,Sn]=I.useState(null),[wi,Di]=I.useState(0),[ro,Yo]=I.useState(null),[qr,Oa]=I.useState(()=>{try{const D=window.localStorage.getItem("atomicgraph.snap.enabled");return D==null?!0:D==="1"}catch{return!0}}),[Ei,Kr]=I.useState(F3),[Wi,qo]=I.useState(()=>{try{const D=window.localStorage.getItem(cx);return D==null?!0:D==="1"}catch{return!0}}),[Zr,Jr]=I.useState(()=>{try{const D=window.localStorage.getItem(ux);return D==null?!0:D==="1"}catch{return!0}}),[Ba,Qc]=I.useState(()=>{try{return window.localStorage.getItem(dx)==="three"?"three":"babylon"}catch{return"babylon"}}),[Qr,mf]=I.useState(()=>{try{const D=window.localStorage.getItem(fx);return D==null?!1:D==="1"}catch{return!1}}),[Ms,za]=I.useState(()=>{try{const D=window.localStorage.getItem(px),F=D==null?18:Number(D);return Number.isFinite(F)?Math.max(1,Math.min(256,F)):18}catch{return 18}}),[ws,gf]=I.useState(()=>{try{const D=window.localStorage.getItem(hx);return D&&/^#[0-9a-fA-F]{6}$/.test(D)?D:"#ff8844"}catch{return"#ff8844"}}),so=I.useMemo(()=>{const[D,F,K]=nC(ws);return{radius:Math.max(1,Math.min(256,Ms)),hardness:.8,opacity:1,spacing:.35,color:[D,F,K,1],jitter:.08}},[ws,Ms]),[Ko,oo]=I.useState(()=>{try{return!!window.localStorage.getItem(Ah)}catch{return!1}}),[pi,vf]=I.useState(!1),Es=I.useRef(0),Zo=I.useRef(0),[Jo,$a]=I.useState(()=>bT()),[Qo,Tr]=I.useState(!1),[ao,ea]=I.useState({}),[lo,ta]=I.useState(!1),[co,ql]=I.useState(null),Bn=I.useRef(0),es=I.useRef(null),ts=I.useCallback((D,F)=>{if(Re(D),!D){Je.current="";return}if(Je.current===D)return;Je.current=D;const K=D.split(`
`)[0]||D;wn({level:"error",source:F,message:K,details:D})},[]),ji=I.useCallback(D=>{no(D)},[]),sr=I.useCallback((D,F="ok")=>{ql({text:D,tone:F}),Bn.current&&window.clearTimeout(Bn.current),Bn.current=window.setTimeout(()=>{ql(null),Bn.current=0},2600)},[]);I.useEffect(()=>()=>{Bn.current&&window.clearTimeout(Bn.current)},[]);const Ts=I.useCallback(D=>{const F=performance.now()+Math.max(0,D);ot(K=>Math.max(K,F))},[]);I.useEffect(()=>{if(En.current&&(window.clearTimeout(En.current),En.current=0),Ee<=0){Oe(!1);return}const D=Math.max(0,Ee-performance.now());if(D<=1){ot(0),Oe(!1);return}return Oe(!0),En.current=window.setTimeout(()=>{ot(0),Oe(!1),En.current=0},D+6),()=>{En.current&&(window.clearTimeout(En.current),En.current=0)}},[Ee]),I.useEffect(()=>{if(Jn.current&&(window.clearTimeout(Jn.current),Jn.current=0),Kt<=0){Gi(!1);return}const D=Math.max(0,Kt-performance.now());if(D<=1){Zn(0),Gi(!1);return}return Gi(!0),Jn.current=window.setTimeout(()=>{Zn(0),Gi(!1),Jn.current=0},D+6),()=>{Jn.current&&(window.clearTimeout(Jn.current),Jn.current=0)}},[Kt]),I.useEffect(()=>{_T()},[]),I.useEffect(()=>()=>{Ce.current&&window.clearTimeout(Ce.current),Wn.current&&window.clearTimeout(Wn.current),En.current&&window.clearTimeout(En.current),ve.current&&(ve.current.terminate(),ve.current=null)},[]),I.useEffect(()=>{if(typeof Worker>"u"){pe.current=!0;return}try{const D=new Worker(new URL("/assets/previewCompile.worker-DSAIwAUR.js",import.meta.url),{type:"module"});return D.onmessage=F=>{const K=F.data;if(!(!K||typeof K!="object")){if(K.type==="ready"){he.current=!0,li(!0);return}if(K.type==="compiled"){if(K.signature!==uo.current)return;G.current.set(K.requestKey,K.compiled);return}if(K.type==="compile_error"){if(K.signature!==uo.current)return;wn({level:"warn",source:"preview-worker",message:"Worker preview compile failed",details:`request=${K.requestKey} error=${K.error}`,graph_hash:K.signature});return}K.type==="fatal"&&(pe.current=!0,he.current=!1,li(!1),G.current.clear(),wn({level:"warn",source:"preview-worker",message:"Preview compile worker disabled after fatal error",details:K.error}))}},D.onerror=F=>{pe.current=!0,he.current=!1,li(!1),G.current.clear(),wn({level:"warn",source:"preview-worker",message:"Preview compile worker crashed",details:F.message||String(F)})},ve.current=D,()=>{D.terminate(),ve.current===D&&(ve.current=null)}}catch(D){pe.current=!0,he.current=!1,li(!1),wn({level:"warn",source:"preview-worker",message:"Preview compile worker unavailable",details:(D==null?void 0:D.message)||String(D)})}},[]),I.useEffect(()=>{try{window.localStorage.setItem("atomicgraph.snap.enabled",qr?"1":"0"),window.localStorage.setItem("atomicgraph.snap.size",String(Ei))}catch{}},[qr,Ei]),I.useEffect(()=>{try{window.localStorage.setItem(cx,Wi?"1":"0"),window.localStorage.setItem(ux,Zr?"1":"0"),window.localStorage.setItem(dx,Ba),window.localStorage.setItem(fx,Qr?"1":"0"),window.localStorage.setItem(px,String(Ms)),window.localStorage.setItem(hx,ws)}catch{}},[Wi,Zr,Ba,Qr,Ms,ws]),I.useEffect(()=>{const D=window.setTimeout(()=>{try{const F={savedAt:Date.now(),patternSize:_,graph:f.current};window.localStorage.setItem(Ah,JSON.stringify(F)),oo(!0)}catch{}},700);return()=>window.clearTimeout(D)},[a,_]),I.useEffect(()=>{qe.current=q},[q]);const uo=I.useRef(""),or=I.useRef(!1);I.useEffect(()=>{f.current=a;const D=yh(a);if(D===uo.current){or.current=!0,e.current.updateNodePositions(a.nodes,a.frames||[]);return}or.current=!1,uo.current=D,e.current.load({schemaVersion:_s,...a,meta:e.current.getIR().meta})},[a]);const na=I.useCallback(D=>{Gt.current.past.push(Rh(D)),Gt.current.past.length>I3&&Gt.current.past.shift(),Gt.current.future=[]},[]),Cr=I.useCallback(D=>{const F=Math.max(128,D|0);e.current.getResolution()!==F&&e.current.setResolution(F);const K=f.current,oe=K.resolution===F?K:{...K,resolution:F};n.current.setResolution(F),f.current=oe,b(F),c(oe)},[]),Ar=I.useCallback((D,F=!1)=>{const K=performance.now(),oe=F?$3:z3;to(de=>de+1),wr(D),Zn(de=>Math.max(de,K+oe)),g(_>js),ct(de=>({scale:.5,reason:"adaptive_down",last_change_at:K})),Ts(Math.max(oe,Xc)),Cr(js)},[Cr,Ts,_]),eu=I.useCallback((D,F,K=!1)=>{const oe=`${D==="three"?"Three":"Babylon"} GPU backoff: ${F}`;wn({level:"warn",source:"preview3d",message:oe,details:K?"hard":"soft"}),Ar(oe,K)},[Ar]),Ni=I.useCallback((D,F)=>{const K=Math.max(128,F??D.resolution??512),oe=mx(K),de=D.resolution===oe?D:{...D,resolution:oe};n.current=new La(de),e.current.setResolution(oe),f.current=de,b(oe),g(K>oe),c(de)},[]),Rt=I.useCallback((D,F=!0)=>{const K=n.current.serialize();if(D(n.current)===!1)return!1;const de=n.current.serialize();return F&&na(K),c(de),!0},[na]),xf=I.useCallback(D=>{x(D);const F=mx(D);g(D>F),Cr(F)},[Cr]),_f=I.useCallback(()=>{Yo("frame_all"),Di(D=>D+1)},[]),Kl=I.useCallback(()=>{Yo("reset"),Di(D=>D+1)},[]),yf=I.useCallback(()=>{try{const D=window.localStorage.getItem(Ah);if(!D)return;const F=JSON.parse(D);if(!F||!F.graph||!Array.isArray(F.graph.nodes)||!Array.isArray(F.graph.edges))return;const K=F.patternSize??F.graph.resolution??512;Ni(F.graph,K),x(K),Gt.current={past:[],future:[]},N(null),wn({level:"info",source:"project-load",message:"Autosave restored",details:F.savedAt?new Date(F.savedAt).toLocaleString():void 0})}catch(D){wn({level:"warn",source:"project-load",message:"Failed to restore autosave",details:D instanceof Error?D.message:String(D)})}},[Ni]),tu=I.useCallback(D=>{V(D)},[]),Zl=I.useCallback(D=>{C(F=>F.length===D.length&&F.every((K,oe)=>K===D[oe])?F:D)},[]),nu=I.useCallback(D=>{T(F=>Math.abs(F-D)<.005?F:D)},[]);I.useEffect(()=>{if(!P){V([]);return}V(D=>D.length>0&&D.includes(P)?D:[P])},[P]);const Sf=I.useCallback(()=>{const D=Q3(),F=D.resolution||512;Ni(D,F),x(F),N(null),V([]),Gt.current={past:[],future:[]},sr("Demo DAG loaded. Run Auto Layout.","ok"),wn({level:"info",source:"layout",message:"Auto-layout demo graph loaded"})},[Ni,sr]),bf=I.useCallback(()=>{const D=eC(),F=D.resolution||1024;Ni(D,F),x(F),N(null),V([]),Gt.current={past:[],future:[]},sr("Dirt and stone material demo loaded for render testing.","ok"),wn({level:"info",source:"graph",message:"Dirt and stone material demo loaded"})},[Ni,sr]),iu=I.useCallback(async()=>(es.current||(es.current=cf(()=>import("./elkLayout-Ba9KZ2dH.js"),[])),(await es.current).autoLayout),[]),ti=I.useCallback(()=>{qt(!0),Ce.current&&window.clearTimeout(Ce.current),Ce.current=window.setTimeout(()=>qt(!1),Ne)},[]),ru=I.useCallback(()=>{ti()},[ti]),su=I.useCallback(()=>{ti()},[ti]),bn=I.useCallback(D=>qr?V3(D,Ei):D,[qr,Ei]),Jl=I.useCallback((D,F)=>{ti(),Rt(K=>{K.moveNode(D,bn(F.x),bn(F.y))},!1)},[Rt,ti,bn]),ou=I.useCallback((D,F)=>{ti(),Rt(K=>{K.moveFrame(D,F.x,F.y)},!1)},[Rt,ti]),au=I.useCallback((D,F)=>{ti(),Rt(K=>{K.resizeFrame(D,F.width,F.height)},!1)},[Rt,ti]),Va=I.useCallback(D=>{Rt(F=>{F.removeFrame(D)},!0)},[Rt]),fo=I.useCallback((D,F)=>{Rt(K=>{K.updateFrame(D,F)},!0)},[Rt]),Ha=I.useCallback((D,F)=>{let K=null;return Rt(oe=>{var Me;const de=((Me=oe.serialize().frames)==null?void 0:Me.length)??0;return K=oe.addFrame(D,F,420,260,`Frame ${de+1}`,"#4d78bc").id,!0},!0),K},[Rt]),Ga=I.useCallback(D=>{Rt(F=>{F.removeEdge(D)},!0)},[Rt]),lu=I.useCallback((D,F,K,oe)=>{Rt(de=>de.addEdge(D,F,K,oe??0)?!0:(de.lastValidationError&&(wn({level:"warn",source:"graph-connect",message:de.lastValidationError}),alert(de.lastValidationError)),!1),!0)},[Rt]),Wa=I.useCallback((D,F,K)=>{ti(),Rt(oe=>{oe.updateParam(D,F,K);const de=oe.serialize().nodes.find(Ie=>Ie.id===D);if((de==null?void 0:de.type)==="remote"&&F==="value"){const Ie=de.params.target,Me=de.params.key;Ie&&Me&&oe.updateParam(Ie,Me,K)}},!1)},[Rt,ti]),po=I.useCallback((D,F,K)=>{const oe=bn(F??100+Math.random()*200),de=bn(K??60+Math.random()*240);Rt(Ie=>{const Me=Ie.addNode(D,oe,de);return Me?(N(Me.id),!0):!1},!0)},[Rt,bn]),ho=I.useCallback(D=>{const F=a.nodes.find(K=>K.id===D);F&&_n(F.type)||(Rt(K=>{K.removeNode(D)},!0),N(K=>K===D?null:K))},[Rt,a.nodes]),Ql=I.useCallback(D=>{var je;const F=f.current.nodes.find(Be=>Be.id===D);if(!F||!J3(F.type))return;const K=$l(Q);for(const Be of se)K.push(Be.panel);const oe=new Map;for(const Be of K)for(const He of Be.tabs)oe.set(He.id,Be.id);const de=Object.entries(ao).find(([,Be])=>Be===D);if(de){const[Be]=de,He=oe.get(Be);if(He){_e(He,Be);return}ea(dt=>{const Zt={...dt};return delete Zt[Be],Zt})}Y3((je=F.params)==null?void 0:je.subgraph)||Rt(Be=>{Be.updateParam(D,"subgraph",Z3(F))},!0);const Ie=F.type==="perlin"?"Perlin":"Atom",Me=Ae("atom_graph",`${Ie}: ${D}`);ea(Be=>({...Be,[Me]:D}))},[Ae,Rt,ao,se,Q,_e]),cu=I.useCallback(()=>{const D={...f.current,resolution:_},F=JSON.stringify(D,null,2),K=new Blob([F],{type:"application/json"}),oe=URL.createObjectURL(K),de=document.createElement("a");de.href=oe,de.download=`project_v${_s}_${Date.now()}.json`,de.click(),URL.revokeObjectURL(oe)},[_]),uu=I.useCallback(D=>{var oe;const F=(oe=D.target.files)==null?void 0:oe[0];if(!F)return;const K=new FileReader;K.onload=de=>{var Ie;try{const Me=JSON.parse((Ie=de.target)==null?void 0:Ie.result);if(!Me.nodes||!Me.edges)throw new Error("Invalid project file");const je=e.current.load(Me),Be=e.current.getResolution();x(Be),Ni(je,Be),Gt.current={past:[],future:[]},N(null)}catch(Me){wn({level:"error",source:"project-load",message:(Me==null?void 0:Me.message)||"Invalid project file",details:Me instanceof Error?Me.stack:void 0}),alert("Invalid project file")}},K.readAsText(F),Bt.current&&(Bt.current.value="")},[Ni]),ec=I.useCallback(()=>{if(!P)return;const D=a.nodes.find(F=>F.id===P);!D||_n(D.type)||O({type:D.type,x:D.x,y:D.y,params:{...D.params}})},[a.nodes,P]),tc=I.useCallback(D=>{const F=a.nodes.find(K=>K.id===D);!F||_n(F.type)||($.current={sourceType:F.type,params:{...F.params}})},[a.nodes]),Cs=I.useCallback(D=>{Rt(F=>{const K=F.serialize().nodes.find(de=>de.id===D);if(!K||_n(K.type))return!1;const oe=Et[K.type];if(!oe)return!1;for(const[de,Ie]of Object.entries(oe.params))F.updateParam(D,de,Ie.default);return!0},!0)},[Rt]),du=I.useCallback(D=>{var Ie;const F=$.current;if(!F)return!1;const K=a.nodes.find(Me=>Me.id===D);if(!K||_n(K.type))return!1;const oe=Et[K.type],de=Et[F.sourceType];if(!oe)return!1;for(const[Me,je]of Object.entries(F.params)){const Be=oe.params[Me],He=(Ie=de==null?void 0:de.params)==null?void 0:Ie[Me];if(Be&&!(He&&He.type!==Be.type)&&!(Be.type==="select"&&Be.options&&!Be.options.includes(String(je))))return!0}return!1},[a.nodes]),fu=I.useCallback(D=>{const F=$.current;F&&Rt(K=>{var je;const oe=K.serialize().nodes.find(Be=>Be.id===D);if(!oe||_n(oe.type))return!1;const de=Et[oe.type],Ie=Et[F.sourceType];if(!de)return!1;let Me=0;for(const[Be,He]of Object.entries(F.params)){const dt=de.params[Be],Zt=(je=Ie==null?void 0:Ie.params)==null?void 0:je[Be];dt&&(Zt&&Zt.type!==dt.type||dt.type==="select"&&dt.options&&!dt.options.includes(String(He))||(K.updateParam(D,Be,He),Me+=1))}return Me>0},!0)},[Rt]),pu=I.useCallback((D,F)=>{B&&Rt(K=>{const oe=bn(typeof D=="number"?D:B.x+40),de=bn(typeof F=="number"?F:B.y+40),Ie=K.addNode(B.type,oe,de);return Ie?(Object.entries(B.params).forEach(([Me,je])=>K.updateParam(Ie.id,Me,je)),N(Ie.id),!0):!1},!0)},[Rt,B,bn]),nc=I.useCallback(()=>{ec(),P&&ho(P)},[ec,ho,P]);I.useCallback(()=>{if(!P)return;const D=a.nodes.find(F=>F.id===P);!D||_n(D.type)||Rt(F=>{const K=F.addNode(D.type,bn(D.x+40),bn(D.y+40));return K?(Object.entries(D.params).forEach(([oe,de])=>F.updateParam(K.id,oe,de)),N(K.id),!0):!1},!0)},[Rt,a.nodes,P,bn]);const mo=I.useCallback(()=>{const D=Gt.current.past;if(D.length===0)return;const F=D.pop();Gt.current.future.unshift(Rh(n.current.serialize()));const K=F.resolution||512;Ni(F,K),x(K)},[Ni]),ar=I.useCallback(()=>{const D=Gt.current.future;if(D.length===0)return;const F=D.shift();Gt.current.past.push(Rh(n.current.serialize()));const K=F.resolution||512;Ni(F,K),x(K)},[Ni]),Rr=I.useCallback((D,F,K)=>{let oe=null;return Rt(de=>{const Ie=de.addNode(D,bn(F),bn(K));return Ie?(oe=Ie.id,N(Ie.id),!0):!1},!0),oe},[Rt,bn]),hu=I.useCallback((D,F,K,oe=0)=>{let de=!1;return Rt(Ie=>Ie.addEdge(D,F,K,oe)?(de=!0,!0):!1,!0),de},[Rt]),ia=I.useCallback(D=>{const F=a.nodes.find(oe=>oe.id===D);if(!F||_n(F.type))return null;let K=null;return Rt(oe=>{const de=oe.addNode(F.type,bn(F.x+40),bn(F.y+40));return de?(Object.entries(F.params).forEach(([Ie,Me])=>oe.updateParam(de.id,Ie,Me)),K=de.id,N(de.id),!0):!1},!0),K},[Rt,a.nodes,bn]),ja=I.useCallback((D,F,K,oe)=>{const de=a.edges.find(Me=>Me.id===D);if(!de)return null;let Ie=null;return Rt(Me=>{const je=Me.addNode(F,bn(K),bn(oe));if(!je)return!1;Me.removeEdge(D);const Be=Me.addEdge(de.fromId,je.id,0,de.fromPort),He=Me.addEdge(je.id,de.toId,de.toPort,0);return!Be||!He?!1:(Ie=je.id,N(je.id),!0)},!0),Ie},[Rt,a.edges,bn]),ra=I.useCallback((D,F,K,oe)=>{let de=null;return Rt(Ie=>{const Me=Ie.addNode(F,bn(K),bn(oe));if(!Me)return!1;if(D.direction==="out"){if(!Ie.addEdge(D.nodeId,Me.id,0,D.portIndex))return!1}else if(!Ie.addEdge(Me.id,D.nodeId,D.portIndex,0))return!1;return de=Me.id,N(Me.id),!0},!0),de},[Rt,bn]),Xa=I.useCallback(async(D="all")=>{if(lo)return;const F=f.current;let K=F.nodes,oe=F.edges;if(D==="selection"){const Me=new Set(k.filter(je=>F.nodes.some(Be=>Be.id===je)));if(Me.size<2){sr("Select at least 2 nodes for selection layout.","warn");return}K=F.nodes.filter(je=>Me.has(je.id)),oe=F.edges.filter(je=>Me.has(je.fromId)&&Me.has(je.toId))}if(K.length<2){sr("Nothing to layout.","warn");return}const de=Math.min(...K.map(Me=>Me.x)),Ie=Math.min(...K.map(Me=>Me.y));ta(!0);try{const Be={...(await(await iu())(K,oe,{direction:"RIGHT",layerSpacing:96,nodeSpacing:56,edgeRouting:"ORTHOGONAL",includePorts:!0,padding:28})).nodePositions},He=K.filter(Wt=>_n(Wt.type)&&!!Be[Wt.id]);if(He.length>1){const Wt=K.filter(Un=>!_n(Un.type)&&!!Be[Un.id]),mn=Math.max(...He.map(Un=>Be[Un.id].x)),Mn=Wt.length>0?Math.max(...Wt.map(Un=>Be[Un.id].x)):mn,Ui=Math.max(mn,Mn+260);for(const Un of He)Be[Un.id]={...Be[Un.id],x:Ui}}const dt=Object.entries(Be);if(dt.length===0)throw new Error("ELK returned no node positions.");const Zt=Math.min(...dt.map(([,Wt])=>Wt.x)),Pt=Math.min(...dt.map(([,Wt])=>Wt.y)),Ut=de-Zt,mt=Ie-Pt;let jt=0;if(!Rt(Wt=>{let mn=!1;for(const[Mn,Ui]of dt){const Un=Wt.nodes.get(Mn);if(!Un)continue;const is=Math.round(Ui.x+Ut),As=Math.round(Ui.y+mt);Un.x===is&&Un.y===As||(Wt.moveNode(Mn,is,As),mn=!0,jt+=1)}return mn},!0)||jt===0){sr("Auto Layout made no changes.","warn");return}ti(),wn({level:"info",source:"layout",message:D==="selection"?`selection layout applied (${jt} nodes)`:`auto layout applied (${jt} nodes)`}),sr(D==="selection"?`Selection layout applied (${jt})`:`Auto Layout applied (${jt})`,"ok")}catch(Me){const je=Me instanceof Error?`${Me.name}: ${Me.message}`:String(Me);wn({level:"error",source:"layout",message:"Auto layout failed",details:je}),sr("Auto Layout failed. See logs.","warn")}finally{ta(!1)}},[lo,k,Rt,ti,sr,iu]),go=I.useCallback(()=>{const D=f.current,F=D.nodes.filter(de=>!_n(de.type)),K=Object.values(Et).filter(de=>de.category!=="output"&&de.type!=="remote").map(de=>de.type),oe=de=>de.length>0?de[Math.floor(Math.random()*de.length)]:null;try{if(Math.random()<.9){const Ie=Math.random();if(Ie<.22&&F.length>0){const Me=oe(F),je=(Math.random()-.5)*240,Be=(Math.random()-.5)*180;Rt(He=>{He.moveNode(Me.id,Me.x+je,Me.y+Be)},!1)}else if(Ie<.45){const Me=F.filter(Be=>{const He=Et[Be.type];return!!He&&Object.keys(He.params).length>0}),je=oe(Me);if(je){const Be=Et[je.type],He=Object.keys(Be.params),dt=oe(He);if(dt){const Zt=Be.params[dt];let Pt=je.params[dt];if(Zt.type==="float"){const Ut=Zt.min??0,mt=Zt.max??1;Pt=Ut+Math.random()*(mt-Ut)}else if(Zt.type==="int"){const Ut=Math.floor(Zt.min??0),mt=Math.floor(Zt.max??100);Pt=Ut+Math.floor(Math.random()*Math.max(1,mt-Ut+1))}else Zt.type==="bool"?Pt=Math.random()>.5:Zt.type==="select"&&Zt.options&&Zt.options.length>0&&(Pt=oe(Zt.options)??je.params[dt]);Rt(Ut=>{Ut.updateParam(je.id,dt,Pt)},!1)}}}else if(Ie<.57&&D.edges.length>0){const Me=oe(D.edges);Me&&Rt(je=>{je.removeEdge(Me.id)},!1)}else if(Ie<.69&&K.length>0){const Me=oe(K),je=80+Math.random()*1900,Be=40+Math.random()*1100;Rt(He=>!!He.addNode(Me,je,Be),!1)}else if(Ie<.79&&F.length>6){const Me=oe(F);Me&&(Rt(je=>{je.removeNode(Me.id)},!1),N(je=>je===Me.id?null:je))}else if(D.nodes.length>=2){let Me=!1;for(let je=0;je<24&&!Me;je++){const Be=oe(F),He=oe(D.nodes);if(!Be||!He||Be.id===He.id)continue;const dt=Et[Be.type],Zt=Et[He.type];if(!dt||!Zt||dt.outputs.length===0||Zt.inputs.length===0)continue;const Pt=Math.floor(Math.random()*dt.outputs.length),Ut=Math.floor(Math.random()*Zt.inputs.length);Me=!!Rt(mt=>!!mt.addEdge(Be.id,He.id,Ut,Pt),!1)}}}else if(Math.random()<.88){const Me=oe(["graph","preview","preview3d","code","logs","library","explorer"])??"graph";Ae(Me,`${Me.toUpperCase()} Fuzz`)}else we();Zo.current+=1,Zo.current%40===0&&wn({level:"info",source:"chaos",message:`fuzz steps=${Zo.current}`})}catch(de){wn({level:"error",source:"chaos",message:de instanceof Error?`${de.name}: ${de.message}`:String(de),details:de instanceof Error?de.stack:void 0})}},[Ae,Rt,we]);I.useEffect(()=>{if(!pi){Es.current&&(window.clearInterval(Es.current),Es.current=0);return}return wn({level:"warn",source:"chaos",message:"Chaos mode started"}),Es.current=window.setInterval(()=>{go()},220),()=>{Es.current&&(window.clearInterval(Es.current),Es.current=0),wn({level:"warn",source:"chaos",message:"Chaos mode stopped"})}},[pi,go]),I.useEffect(()=>{},[pi,go]),I.useEffect(()=>{pi&&vf(!1)},[pi]);const Pr=I.useCallback(D=>{const F=P?a.nodes.find(oe=>oe.id===P):null,K=D||Dt||{clientX:0,clientY:0,graphX:F?F.x+140:220,graphY:F?F.y+70:140,target:{kind:"canvas"}};return{graph:a,mode:"graph",selection:{nodeIds:P?[P]:[],edgeIds:K.target.kind==="edge"?[K.target.edgeId]:[]},hover:K.target,mouse:{x:K.clientX,y:K.clientY,graphX:K.graphX,graphY:K.graphY},clipboard:{node:B||void 0},actions:{openNodePicker:oe=>Sn(oe),closeContextMenu:()=>sn(null),frameAll:()=>{Yo("frame_all"),Di(oe=>oe+1)},resetView:()=>{Yo("reset"),Di(oe=>oe+1)},addNodeAt:(oe,de,Ie)=>Rr(oe,de,Ie),removeNode:oe=>ho(oe),duplicateNode:oe=>ia(oe),copyNode:oe=>{const de=a.nodes.find(Ie=>Ie.id===oe);!de||_n(de.type)||O({type:de.type,x:de.x,y:de.y,params:{...de.params}})},copyNodeParams:oe=>tc(oe),pasteNodeParams:oe=>fu(oe),resetNodeParams:oe=>Cs(oe),canPasteNodeParams:oe=>du(oe),pasteNodeAt:(oe,de)=>(pu(oe,de),null),removeEdge:oe=>Ga(oe),getEdgeById:oe=>a.edges.find(de=>de.id===oe),connect:(oe,de,Ie,Me=0)=>hu(oe,de,Ie,Me),insertNodeOnEdge:(oe,de,Ie,Me)=>ja(oe,de,Ie,Me),addNodeFromPort:(oe,de,Ie,Me)=>ra(oe,de,Ie,Me),undo:mo,redo:ar,pinPreviewToNode:oe=>H(oe),toggleChaosMode:void 0,stepChaosModeOnce:void 0}}},[Rr,ra,B,tc,du,hu,Dt,ia,a,ja,Ga,ho,pu,fu,ar,Cs,P,go,mo]);I.useEffect(()=>{const D=F=>{if(W3(F.target))return;if(F.key==="F3"){F.preventDefault(),At(!0);return}if(en||An||Dt)return;const K=F.ctrlKey||F.metaKey,oe=(F.key||"").toLowerCase();if(K&&oe==="z"&&!F.shiftKey&&!F.altKey){F.preventDefault(),F.stopPropagation(),mo();return}if(K&&oe==="y"&&!F.shiftKey&&!F.altKey){F.preventDefault(),F.stopPropagation(),ar();return}if(K&&oe==="x"&&!F.shiftKey&&!F.altKey){F.preventDefault(),F.stopPropagation(),nc();return}if(K&&F.shiftKey&&oe==="z"&&!F.altKey){F.preventDefault(),F.stopPropagation(),ar();return}if(!K&&!F.shiftKey&&!F.altKey&&oe==="f"){F.preventDefault(),F.stopPropagation(),Kl();return}const de=Pr(),Ie=Oc.getAll().filter(Me=>!!Me.shortcut&&Me.id!=="graph.delete");for(const Me of Ie){if(!X3(Me.shortcut,F))continue;if(Xv(Me.id,de)){F.preventDefault(),F.stopPropagation(),en&&At(!1);return}}};return document.addEventListener("keydown",D,!0),()=>document.removeEventListener("keydown",D,!0)},[Pr,Dt,nc,An,en,ar,Kl,mo]);const ic=I.useCallback(D=>{sn(D)},[]),rc=I.useCallback(()=>{sn(null),At(!1),Sn(null),an(!1)},[]),mu=I.useCallback((D,F)=>{const K=Pr(F);Xv(D,K),At(!1)},[Pr]),Mf=I.useCallback((D,F)=>{Ha(D,F),sn(null)},[Ha]),wf=I.useCallback(D=>{const F=(a.frames||[]).find(oe=>oe.id===D);if(!F){sn(null);return}const K=prompt("Frame label:",F.label||"Frame");K!=null&&fo(D,{label:K.trim()||"Frame"}),sn(null)},[a.frames,fo]),Ef=I.useCallback(D=>{const F=(a.frames||[]).find(Ie=>Ie.id===D),K=(F==null?void 0:F.color)||Hd[0],oe=Math.max(0,Hd.indexOf(K)),de=Hd[(oe+1)%Hd.length];fo(D,{color:de}),sn(null)},[a.frames,fo]),Tf=I.useCallback(D=>{Va(D),sn(null)},[Va]),Xi=I.useMemo(()=>{var D,F,K,oe;if(An){if((D=An.port)!=null&&D.type)return An.port.type;if(An.edgeId){const de=a.edges.find(Me=>Me.id===An.edgeId);if(!de)return;const Ie=a.nodes.find(Me=>Me.id===de.toId);return Ie?(oe=(K=(F=Et[Ie.type])==null?void 0:F.inputs)==null?void 0:K[de.toPort])==null?void 0:oe.type:void 0}}},[a.edges,a.nodes,An]),sa=I.useCallback(D=>{const F=An;F&&(F.origin==="edge"&&F.edgeId?ja(F.edgeId,D,F.graphX,F.graphY):F.origin==="port"&&F.port?ra({nodeId:F.port.nodeId,portIndex:F.port.portIndex,direction:F.port.direction},D,F.graphX,F.graphY):Rr(D,F.graphX,F.graphY),Sn(null))},[Rr,ra,ja,An]),sc=I.useMemo(()=>v_(a),[a]),lr=I.useMemo(()=>yh(a),[a]),oc=I.useMemo(()=>yh({...a,resolution:_}),[a,_]),cr=I.useMemo(()=>{const D=zl(a);return D.height?"height":D.baseColor?"baseColor":D.normal?"normal":D.roughness?"roughness":D.ao?"ao":D.metallic?"metallic":"baseColor"},[a.nodes,a.edges]),ns=Al[cr],vo=lr;I.useEffect(()=>{le(!xt)},[lr,xt]),I.useEffect(()=>{const D=_>js?js:_,F=`${oc}|target:${_}`;if(Yr.current!==F&&(Yr.current=F,g(_>D),m!==D)){Cr(D);return}if(_<=D){m!==_&&Cr(_),g(!1);return}if(m>=_){g(!1);return}if(xt&&!R||Nt||xn){g(!0);return}const oe=H3(m,_);if(Lt||pi||Si){g(!0);return}g(!0);const de=window.setTimeout(()=>{Cr(oe),oe>=_&&g(!1)},B3);return()=>window.clearTimeout(de)},[oc,_,m,xt,R,Nt,xn,Lt,pi,Si,Cr]),I.useEffect(()=>{if(G.current.clear(),!xt||!Er||pe.current)return;const D=ve.current;if(!D)return;const F=f.current,K=lr,oe=new Map;for(const Me of F.edges){const je=oe.get(Me.fromId);je?je.push(Me.fromPort):oe.set(Me.fromId,[Me.fromPort])}const de=vx(F),Ie=Me=>{const je=Et[Me.type];if(!je||je.outputs.length<=1)return 0;const Be=oe.get(Me.id);return Be&&Be.length>0?Math.max(...Be):Me.type==="split"&&je.outputs.length>4?4:0};D.postMessage({type:"set_graph",signature:K,graph:F});for(const Me of F.nodes){const je=Ie(Me),Be=xx(Me,je,de);D.postMessage({type:"compile_job",signature:K,requestKey:Be.requestKey,mode:Be.mode,nodeId:Me.id,nodeOutputPort:je,outputChannel:Be.outputChannel})}},[lr,xt,Er]);const gu=I.useCallback(D=>{const F={timestamp:D.timestamp,fps:D.fps,compile_ms:io.current||D.compile_ms||0,render_ms:D.render_ms,thumbnail_ms:ei.current||0,readback_ms:D.readback_ms+(U.current||0),ui_commit_ms:(ue.current||0)+(D.ui_commit_ms||0),budget_exceeded:D.budget_exceeded};ei.current=0,U.current=0,ue.current=0,gt(F);const K=Qn.current;K.push(F),K.length>300&&K.splice(0,K.length-300);const oe=K.map(dt=>dt.render_ms).filter(dt=>Number.isFinite(dt)&&dt>0),de=ex(oe,.5),Ie=ex(oe,.95);et(de),ne(Ie),D.p95_ms>Math.max(D.frame_budget_ms*2.4,42)&&!xn&&Ar(`Viewport overload detected (${D.p95_ms.toFixed(1)}ms p95)`),D.budget_exceeded?(Mi.current=0,Ts(420)):Ee<=0&&(Mi.current=Mi.current||performance.now());const je=performance.now(),Be=D.frame_budget_ms+.5,He=Math.max(8,D.frame_budget_ms-2);if(D.p95_ms>Be){Mi.current=0,ct(dt=>je-dt.last_change_at<450?dt:dt.scale===1?{scale:.75,reason:"adaptive_down",last_change_at:je}:dt.scale===.75?{scale:.5,reason:"adaptive_down",last_change_at:je}:dt);return}if(D.p95_ms<=He){Mi.current=Mi.current||je,je-Mi.current>=3e3&&ct(dt=>je-dt.last_change_at<700?dt:dt.scale===.5?{scale:.75,reason:"adaptive_up",last_change_at:je}:dt.scale===.75?{scale:1,reason:"adaptive_up",last_change_at:je}:dt);return}Mi.current=0},[Ts,Ar,xn,st,Ee]),Yi=I.useCallback((D,F)=>{var oe;const K=[];for(const de of D.nodes){if(_n(de.type))continue;const Ie=Et[de.type],Me=Math.max(1,((oe=Ie==null?void 0:Ie.outputs)==null?void 0:oe.length)??1);for(let je=0;je<Me;je++)try{new Sr(D).compile({backend:F,readable:!u,nodeId:de.id,nodeOutputPort:je,outputChannel:"baseColor"})}catch(Be){const He=((Be==null?void 0:Be.message)||String(Be)||"unknown error").replace(/\s+/g," ").trim();if(K.push(`${F}: node=${de.id} type=${de.type} outPort=${je} -> ${He}`),K.length>=6)return K}}return K},[u]),Ya=I.useCallback(D=>{var de;const F=G3(D),K=[];let oe=0;for(const Ie of F.nodes){const Me=Et[Ie.type],je=Math.max(1,((de=Me==null?void 0:Me.outputs)==null?void 0:de.length)??1);for(let Be=0;Be<je;Be++)try{const He=new Sr(F).compile({backend:"glsl",readable:!u,nodeId:Ie.id,nodeOutputPort:Be,outputChannel:"baseColor"}),dt=Wm(He,64);if(!dt||dt.width<1||dt.height<1){if(nt.unavailableReason)return{failures:K,nodeCount:F.nodes.length,caseCount:oe,unavailableReason:nt.unavailableReason};throw new Error("empty preview canvas")}oe+=1}catch(He){const dt=((He==null?void 0:He.message)||String(He)||"unknown error").replace(/\s+/g," ").trim();if(dt===qs||dt===Da)return{failures:K,nodeCount:F.nodes.length,caseCount:oe,unavailableReason:nt.unavailableReason||"Node preview GPU path unavailable"};if(K.push(`preview-template: node=${Ie.id} type=${Ie.type} outPort=${Be} -> ${dt}`),K.length>=12)return{failures:K,nodeCount:F.nodes.length,caseCount:oe}}}return{failures:K,nodeCount:F.nodes.length,caseCount:oe}},[u]),xo=I.useCallback(()=>{wT(),$a([])},[]),qa=I.useCallback(async D=>{if(Qo)return;Tr(!0);const F=performance.now(),K=f.current,oe=[],de=["baseColor","roughness","normal","metallic","ao","height"];try{const Ie=async(Pt,Ut,mt)=>{const jt=performance.now();try{const ln=await mt();oe.push({id:Pt,label:Ut,durationMs:performance.now()-jt,...ln})}catch(ln){const Wt=ln instanceof Error?`${ln.name}: ${ln.message}`:String(ln);oe.push({id:Pt,label:Ut,durationMs:performance.now()-jt,severity:"fail",message:"Check crashed",details:Wt})}};await Ie("graph_integrity","Graph Integrity",()=>{const Pt=new Map(K.nodes.map(mt=>[mt.id,mt])),Ut=K.edges.filter(mt=>{var Mn;const jt=Pt.get(mt.fromId),ln=Pt.get(mt.toId);if(!jt||!ln)return!0;const Wt=Et[jt.type],mn=Et[ln.type];return!Wt||!mn?!0:mt.fromPort>=(((Mn=Wt.outputs)==null?void 0:Mn.length)??1)||mt.toPort>=mn.inputs.length});return Ut.length>0?{severity:"fail",message:`${Ut.length} invalid edge(s)`,details:Ut.slice(0,6).map(mt=>`${mt.id}: ${mt.fromId}.${mt.fromPort} -> ${mt.toId}.${mt.toPort}`).join(`
`)}:{severity:"ok",message:"All edges are valid"}}),await Ie("compile_outputs","Compile Outputs",()=>{const Pt=[];for(const Ut of de)try{new Sr(K).compile({backend:"wgsl",readable:!u,outputChannel:Ut}),new Sr(K).compile({backend:"glsl",readable:!u,outputChannel:Ut})}catch(mt){Pt.push(`${Ut}: ${mt instanceof Error?mt.message:String(mt)}`)}return Pt.length>0?{severity:"fail",message:`${Pt.length} output compile failure(s)`,details:Pt.join(`
`)}:{severity:"ok",message:`Compiled ${de.length} output channels`}}),await Ie("node_backtest","Per-Node Backtest",()=>{const Pt=Yi(K,"wgsl"),Ut=Yi(K,"glsl"),mt=[...Pt,...Ut];return mt.length>0?{severity:"fail",message:`${mt.length} node compile failure(s)`,details:mt.join(`
`)}:{severity:"ok",message:"Per-node compile backtest passed"}}),await Ie("preview_template","All-Nodes Preview Template",()=>{const{failures:Pt,nodeCount:Ut,caseCount:mt,unavailableReason:jt}=Ya(K.resolution??512);return jt?{severity:"warn",message:"Skipped: node preview GPU path unavailable",details:jt}:Pt.length>0?{severity:"fail",message:`${Pt.length} preview template failure(s)`,details:Pt.join(`
`)}:{severity:"ok",message:`Rendered ${mt} preview case(s) across ${Ut} node types`}}),await Ie("preview_state","Preview Readiness",()=>{const Pt=ht;return xe?{severity:"fail",message:"Preview has compile error",details:xe}:Pt?Si?{severity:"ok",message:"Preview compile is still pending"}:!re||!W?{severity:"warn",message:"Shader is not compiled yet"}:{severity:"ok",message:"Preview shader is available"}:{severity:"ok",message:"2D preview panel is closed (check skipped)"}}),await Ie("performance_budget","Frame Budget",()=>{if(!(ht||at))return{severity:"ok",message:"No preview viewport is open (check skipped)"};if(!Fe)return{severity:"ok",message:"Skipped: no active viewport samples"};const Ut=Ct,mt=pt+2,jt=pt+8;return Ut>jt?{severity:"fail",message:`p95 ${Ut.toFixed(1)}ms > ${jt.toFixed(1)}ms`}:Ut>mt?{severity:"warn",message:`p95 ${Ut.toFixed(1)}ms above budget`}:{severity:"ok",message:`p95 ${Ut.toFixed(1)}ms within budget`}}),await Ie("runtime_logs","Runtime Error Drift",()=>{const Ut=Date.now()-300*1e3,mt=jc().filter(jt=>jt.level==="error"&&Date.parse(jt.ts)>=Ut);return mt.length>=4?{severity:"fail",message:`${mt.length} errors in last 5m`}:mt.length>0?{severity:"warn",message:`${mt.length} errors in last 5m`}:{severity:"ok",message:"No recent runtime errors"}}),D==="stress"&&await Ie("stress_compile_loop","Stress Compile Loop",async()=>{const Pt=performance.now(),Ut=16;for(let jt=0;jt<Ut;jt++){const ln=de[jt%de.length],Wt=jt%2===0;new Sr(K).compile({backend:"wgsl",outputChannel:ln,readable:Wt}),new Sr(K).compile({backend:"glsl",outputChannel:ln,readable:Wt}),await new Promise(mn=>window.setTimeout(mn,0))}const mt=performance.now()-Pt;return mt>600?{severity:"warn",message:`Stress loop passed but slow (${mt.toFixed(1)}ms)`}:{severity:"ok",message:`Stress loop passed (${mt.toFixed(1)}ms)`}});const Me=performance.now()-F,je=oe.filter(Pt=>Pt.severity==="ok").length,Be=oe.filter(Pt=>Pt.severity==="warn").length,He=oe.filter(Pt=>Pt.severity==="fail").length,dt={id:ET(),ts:new Date().toISOString(),mode:D,totalMs:Me,passCount:je,warnCount:Be,failCount:He,checks:oe,metrics:{fps:(Fe==null?void 0:Fe.fps)??0,renderP50Ms:it,renderP95Ms:Ct,compileMs:Ze,nodeCount:K.nodes.length,edgeCount:K.edges.length}};$a(MT(dt));const Zt=He>0?"error":Be>0?"warn":"info";wn({level:Zt,source:"monitor",message:`suite=${D} pass=${je} warn=${Be} fail=${He}`,details:oe.map(Pt=>`${Pt.severity.toUpperCase()} ${Pt.label} (${Pt.durationMs.toFixed(1)}ms): ${Pt.message}`).join(`
`),graph_hash:vo})}finally{Tr(!1)}},[Qo,u,Yi,Ya,xe,re,W,Si,Fe,Ct,it,pt,ht,at,Ze,vo]),zn=I.useMemo(()=>{var Be;const D=P?a.nodes.find(He=>He.id===P):void 0,F=D?Wc(D.type):null;if(F)return{port:Al[F],label:"Output",portLabel:F};if((D==null?void 0:D.type)==="output")return{port:ns,label:"Output",portLabel:cr};const K=lt??P;if(!K)return{port:ns,label:"Output",portLabel:cr};const oe=a.nodes.find(He=>He.id===K);if(!oe)return{port:ns,label:"Output",portLabel:cr};const de=Et[oe.type];if(!de)return{port:ns,label:"Output",portLabel:cr};const Ie=Wc(oe.type);if(Ie)return{port:Al[Ie],label:"Output",portLabel:Ie};if(oe.type==="output")return{port:ns,label:"Output",portLabel:cr};let Me=0;if(de.outputs.length>1)for(const He of a.edges)He.fromId===K&&He.fromPort>Me&&(Me=He.fromPort);const je=((Be=de.outputs[Me])==null?void 0:Be.label)||`Out #${Me}`;return{nodeId:K,port:Me,label:de.label,portLabel:je}},[lt,P,a.nodes,a.edges,cr,ns]),Ir=I.useMemo(()=>{var F;return zn.nodeId?"baseColor":((F=Object.entries(Al).find(([,K])=>K===zn.port))==null?void 0:F[0])??cr},[zn.nodeId,zn.port,cr]);I.useEffect(()=>{if(!ht)return;let D=!1;Wn.current&&(window.clearTimeout(Wn.current),Wn.current=0),ji(!0);const F=()=>{if(!D)try{const oe=zn.nodeId?`${zn.nodeId}:${zn.port}`:`output:${zn.port}`,de=`${sc}|${u?"raw":"readable"}|${oe}|${Ir}|${m_}`,Ie=`${lr}|${oe}|${Ir}`;if(or.current&&fi.current===Ie&&!!W){or.current=!1,D||ji(!1);return}if(or.current&&(or.current=!1),bs.current!==de||!W||!re){const Be=performance.now(),He=e.current.compile({backend:"glsl",readable:!u,outputChannel:Ir,targetNodeId:zn.nodeId,targetPort:zn.port});bs.current=de,fi.current=Ie,X(He.glsl),ee(He.wgsl),ts(null,"preview-compile");const dt=Math.max(He.compileTimeMs,performance.now()-Be);vt(dt),io.current=dt,$t(Zt=>Zt+1),D||ji(!1);return}if(fi.current!==Ie&&W){const Be=performance.now();X(ps(W,a)),ee(He=>He&&ps(He,a)),ue.current=performance.now()-Be,fi.current=Ie}D||ji(!1)}catch(oe){console.error("[AtomicGraph] Preview compile failed:",oe);const de=zn.nodeId?`target node=${zn.nodeId} outPort=${zn.port}`:`target output=${Ir}`,Ie=Yi(a,"wgsl"),Me=Yi(a,"glsl"),je=[...Ie,...Me],Be=[(oe==null?void 0:oe.message)||"Compilation failed.",de,je.length>0?`backtest:
${je.join(`
`)}`:"backtest: no direct per-node compile throw (likely runtime WGSL pipeline error)"].join(`
`);if(zn.nodeId)try{const He=e.current.compile({backend:"glsl",readable:!u,outputChannel:Ir});ee(He.wgsl),X(He.glsl),ts(Be,"preview-compile"),D||ji(!1);return}catch{}ts(Be,"preview-compile"),D||ji(!1)}},K=Lt?80:0;return K>0?Wn.current=window.setTimeout(F,K):F(),()=>{D=!0,Wn.current&&(window.clearTimeout(Wn.current),Wn.current=0)}},[a,sc,u,W,re,zn,Ir,lr,Lt,ht,Yi,ts,ji]),I.useEffect(()=>{if(!xt||Lt||pi||Si||Ee>performance.now())return;let D=!1;const F=lr,K=f.current,oe=K.nodes.length,de=oe>=420?8:oe>=240?12:oe>=120?18:oe>=64?26:40,Ie=R?de:oe,Me=oe>240?8:oe>120?12:28,je=R&&oe<=120,Be=new Map(K.nodes.map(It=>[It.id,It])),He=new Map;for(const It of K.edges){const kn=He.get(It.fromId);kn?kn.push(It.fromPort):He.set(It.fromId,[It.fromPort])}const dt=e.current.getPlan(),Zt=dt?dT(dt):[],Pt=[P,lt].filter(It=>!!It),Ut=M.filter(It=>Be.has(It)),mt=K.nodes.filter(It=>_n(It.type)).map(It=>It.id),jt=[],ln=new Set,Wt=It=>{!It||ln.has(It)||(ln.add(It),jt.push(It))};Pt.forEach(Wt),Ut.forEach(Wt),mt.forEach(Wt),Zt.slice(0,Me).forEach(Wt);const mn=K.nodes.map(It=>It.id).filter(It=>!ln.has(It));let Mn=jt;if(!R)Mn=Mn.concat(mn);else{const It=Math.max(0,Ie-jt.length);if(je&&It>0&&mn.length>0){const kn=bi.current%mn.length,ni=mn.slice(kn).concat(mn.slice(0,kn));Mn=Mn.concat(ni.slice(0,It)),bi.current=(kn+It)%mn.length}}const Ui=Mn.slice(0,Ie).map(It=>Be.get(It)).filter(It=>!!It);if(Ui.length===0){le(!0);return}const Un=window,is=It=>typeof Un.requestIdleCallback=="function"?Un.requestIdleCallback(It,{timeout:200}):window.setTimeout(()=>It({timeRemaining:()=>4,didTimeout:!0}),32),As=It=>{typeof Un.cancelIdleCallback=="function"?Un.cancelIdleCallback(It):window.clearTimeout(It)};let Rs=0;const aa={};let yo=0;const Za=new Sr(K),uc=tC(A),Su=vx(K),Cf=It=>{const kn=Be.get(It);if(!kn)return 0;const ni=Et[kn.type];if(!ni||ni.outputs.length<=1)return 0;const rs=He.get(It);return rs&&rs.length>0?Math.max(...rs):kn.type==="split"&&ni.outputs.length>4?4:0},Af=1;let Ja=!1;const Lr=()=>{Ja||(Ja=!0,le(!0))},dc=It=>{if(D)return;const kn={};let ni=0,rs=!1;const Rf=performance.now();for(;Rs<Ui.length&&(It.timeRemaining()>2||It.didTimeout)&&ni<Af;){const Fn=Ui[Rs++];try{const Tn=performance.now(),Dr=Cf(Fn.id),ur=xx(Fn,Dr,Su);let Ps=G.current.get(ur.requestKey);if(Ps)G.current.delete(ur.requestKey);else{const dr=ur.mode==="output"?Za.compile({outputChannel:ur.outputChannel,readable:!1}):Za.compile({nodeId:Fn.id,nodeOutputPort:Dr,readable:!1});Ps=ps(dr,K)}const bo=Sx(Ps,uc,ur.requestKey);let Nr=j.current.get(bo);if(!Nr){const dr=performance.now();Nr=oC(Ps,uc),U.current+=performance.now()-dr,j.current.set(bo,Nr);const yn=oe>160?160:320;if(j.current.size>yn){const gn=j.current.keys().next().value;gn&&j.current.delete(gn)}}z.current[Fn.id]!==bo&&(z.current[Fn.id]=bo,kn[Fn.id]=Nr),aa[Fn.id]=performance.now()-Tn,ni++}catch(Tn){if(((Tn==null?void 0:Tn.message)||"")===qs){j.current.clear(),z.current={},ie({}),fe({}),ke("Node previews unavailable: WebGL is disabled in this environment."),Ar("Node preview GPU path disabled",!0),Lr();return}if(((Tn==null?void 0:Tn.message)||"")===Da){Rs=Math.max(0,Rs-1),Ts(Xc),Ar("Node preview GPU path temporarily unavailable"),rs=!0;break}const Dr=`stale|${F}|${Fn.id}`;wn({level:"warn",source:"thumbnail",message:"node preview compile/render failed",details:`node=${Fn.id} type=${Fn.type} error=${((Tn==null?void 0:Tn.message)||String(Tn)||"unknown").replace(/\s+/g," ").trim()}`,node_context:`${Fn.id}:${Fn.type}`,graph_hash:vo}),z.current[Fn.id]!==Dr&&(z.current[Fn.id]=Dr,kn[Fn.id]=aC(uc,"ERR"))}}if(ei.current+=performance.now()-Rf,Object.keys(kn).length>0){const Fn=performance.now();ie(Tn=>({...Tn,...kn})),ue.current+=performance.now()-Fn}if(Object.keys(aa).length>0){const Fn=performance.now();fe(Tn=>({...Tn,...aa})),ue.current+=performance.now()-Fn}rs||(Rs<Ui.length?yo=is(dc):Lr())},So=window.setTimeout(()=>{yo=is(dc)},220);return()=>{D=!0,window.clearTimeout(So),yo&&As(yo)}},[lr,xt,P,lt,M,R,A,Lt,pi,Si,Ee,st,We.scale,vo,Ar]),I.useEffect(()=>{if(!Qe||Lt||pi||Si||xn){nn(!1);return}if(xt&&!R){nn(!1);return}let D=!1;nn(!0);const F=f.current,K=Math.max(128,Math.min(m,1024)),oe=["baseColor","normal","roughness","metallic","ao","height"],de=new Sr(F),Ie={},Me=window,je=Ut=>typeof Me.requestIdleCallback=="function"?Me.requestIdleCallback(Ut,{timeout:220}):window.setTimeout(()=>Ut({timeRemaining:()=>3,didTimeout:!0}),24),Be=Ut=>{typeof Me.cancelIdleCallback=="function"?Me.cancelIdleCallback(Ut):window.clearTimeout(Ut)};let He=0,dt=0;const Zt=Ut=>{if(!D){for(;He<oe.length&&(Ut.timeRemaining()>2||Ut.didTimeout);){const mt=oe[He++];if(!Ca(F,mt)){Pe.current[mt]!==""&&(Ie[mt]={key:"",canvas:document.createElement("canvas")});continue}try{const ln=de.compile({outputChannel:mt,readable:!1}),Wt=ps(ln,F),mn=Sx(Wt,K,`preview3d:${mt}`);if(Pe.current[mt]===mn)continue;const Mn=qe.current[mt],Ui=sC(Wt,K,Mn==null?void 0:Mn.canvas);Ie[mt]={key:mn,canvas:Ui}}catch(ln){const Wt=((ln==null?void 0:ln.message)||"").trim();if(Wt===qs||Wt===Da){Ar(`Output surfaces paused: ${Wt===qs?"shared WebGL disabled":"shared WebGL unavailable"}`,Wt===qs),nn(!1);return}Pe.current[mt]!==""&&(Ie[mt]={key:"",canvas:document.createElement("canvas")})}}if(He<oe.length){dt=je(Zt);return}nn(!1),ae(mt=>{const jt={...mt};let ln=!1;for(const Wt of Object.keys(Ie)){const mn=Ie[Wt];if(!mn)continue;const Mn=mt[Wt];((Mn==null?void 0:Mn.key)||"")!==mn.key&&(ln=!0,jt[Wt]={canvas:mn.canvas,key:mn.key,version:((Mn==null?void 0:Mn.version)??0)+1},Pe.current[Wt]=mn.key)}return ln?jt:mt})}},Pt=window.setTimeout(()=>{dt=je(Zt)},260);return()=>{D=!0,nn(!1),window.clearTimeout(Pt),dt&&Be(dt)}},[lr,Qe,xt,R,u,m,Lt,pi,Si,xn,st,Ar]);const _o=I.useCallback(()=>{const D=n.current.serialize(),F=h_("pbr_default");if(!F)return;const K=zl(D),oe=_;try{for(const de of F.targets){if(!K[de.channel])continue;const Ie=new Sr(D).compile({outputChannel:de.channel,readable:!u}),Me=document.createElement("canvas");Me.width=oe,Me.height=oe;const je=new u_({canvas:Me,alpha:!0,preserveDrawingBuffer:!0}),Be=new Gx,He=new Kc(-1,1,1,-1,0,1),dt={};Object.entries(ps(Ie,D).uniformBindings).forEach(([jt,ln])=>{dt[jt]={value:ln.value}}),dt.u_resolution&&(dt.u_resolution.value=[oe,oe]);const Zt=new ir({vertexShader:Ie.vertex,fragmentShader:Ie.fragment,uniforms:dt});Be.add(new Xr(new Xl(2,2),Zt)),je.render(Be,He);const Pt=de.format==="webp"?"image/webp":"image/png",Ut=Me.toDataURL(Pt),mt=document.createElement("a");mt.href=Ut,mt.download=`texture_${de.fileSuffix}_${oe}x${oe}.${de.format}`,mt.click(),je.dispose(),Zt.dispose()}}catch(de){console.error(de),wn({level:"error",source:"export",message:de instanceof Error?`${de.name}: ${de.message}`:String(de),details:de instanceof Error?de.stack:void 0}),alert("Export failed.")}},[_,u,a]),Ka=I.useCallback(D=>{ts(D||null,"viewport")},[ts]),ac=I.useMemo(()=>{const D=Ot.toLowerCase(),F=new Map;Object.values(Et).forEach(K=>{K.category!=="output"&&(D&&!K.label.toLowerCase().includes(D)&&!K.category.includes(D)||(F.has(K.category)||F.set(K.category,[]),F.get(K.category).push({type:K.type,label:K.label})))});for(const K of F.values())K.sort((oe,de)=>oe.label.localeCompare(de.label));return Array.from(F.entries())},[Ot]),oa=I.useCallback(D=>{J(F=>{const K=new Set(F);return K.has(D)?K.delete(D):K.add(D),K})},[]),lc=I.useMemo(()=>W?W.uniforms.map(D=>{var F;return{name:D.name,type:D.type,nodeId:D.nodeId,key:D.key,value:((F=W.uniformBindings[D.name])==null?void 0:F.value)??D.defaultValue}}):[],[W]),cc=I.useMemo(()=>{const D=(W==null?void 0:W.source)||"";return{compileTimeMs:Ze,nodeCount:a.nodes.length,edgeCount:a.edges.length,shaderLines:D?D.split(`
`).length:0,shaderBytes:new TextEncoder().encode(D).length,hash:(W==null?void 0:W.hash)||"n/a",warnings:(W==null?void 0:W.warnings)||[],backend:(W==null?void 0:W.backend)||"glsl",recompileCount:Qt,atomsUsed:(W==null?void 0:W.atomsUsed)||[],renderP95Ms:Ct,renderP50Ms:it,thumbnailMs:(Fe==null?void 0:Fe.thumbnail_ms)??0}},[W,Ze,a.edges.length,a.nodes.length,Qt,Ct,it,Fe]),vu=I.useMemo(()=>{if(!Dt)return[];const D=Pr(Dt);return Oc.listVisible(D).map(F=>({op:F,enabled:F.enabled?F.enabled(D):!0}))},[Pr,Dt]),xu=I.useMemo(()=>{const D=Pr();return Oc.getAll().map(F=>({id:F.id,label:F.label,category:F.category,shortcut:F.shortcut,enabled:(F.visible?F.visible(D):!0)&&(F.enabled?F.enabled(D):!0),searchText:`${F.label} ${F.category} ${F.keywords.join(" ")}`.toLowerCase()}))},[Pr]),_u=I.useMemo(()=>({graph:a,selectedNodeId:P,onMove:Jl,onMoveFrame:ou,onResizeFrame:au,onDeleteFrame:Va,onAddFrameAt:Ha,onUpdateFrame:fo,onDeleteEdge:Ga,onConnect:lu,onUpdateParam:Wa,onAddNode:po,onDeleteNode:ho,onSelectionChange:N,onSelectionSetChange:tu,onCanvasClick:rc,onRequestContextMenu:ic,onCanvasInteractionStart:ru,onCanvasInteractionEnd:su,onVisibleNodeIdsChange:Zl,onGraphZoomChange:nu,nodePreviews:Z,outputPreviewSurfaces:q,nodeTimings:De,graphViewCommandNonce:wi,graphViewCommandType:ro,snapEnabled:qr,snapGridSize:Ei,setSnapEnabled:Oa,setSnapGridSize:Kr,previewShader:re,codeShader:W,compileError:xe,patternSize:_,previewResolution:y,previewTarget:zn,previewResScale:Ue,previewHiDpi:Wi,previewRenderEnabled:Zr,previewPaintEnabled:Qr,previewPaintBrush:so,previewPaintBrushRadius:Ms,previewPaintBrushColor:ws,interacting:Lt,pinnedPreviewNodeId:lt,previewFrameBudgetMs:pt,preview3dReady:yt,preview3dRenderer:Ba,setPreview3dRenderer:Qc,performanceMode:st,viewportQuality:We,rendererPerf:Fe,rendererPerfP95:Ct,rendererPerfP50:it,thumbnailDeferred:Ge,graphPerfHash:vo,onViewportPerfSample:gu,onViewportGpuFailure:eu,gpuCooling:xn,gpuSafetyMessage:Li,onPinPreview:H,onTogglePreviewHiDpi:()=>qo(D=>!D),onTogglePreviewRenderEnabled:()=>Jr(D=>!D),onTogglePreviewPaintEnabled:()=>mf(D=>!D),onSetPreviewPaintBrushRadius:D=>za(Math.max(1,Math.min(256,D))),onSetPreviewPaintBrushColor:D=>{/^#[0-9a-fA-F]{6}$/.test(D)&&gf(D)},tile:h,rawMode:u,onToggleTile:()=>{},onToggleRawMode:()=>p(D=>!D),uniformRows:lc,stats:cc,onPreviewError:Ka,monitorRuns:Jo,monitorRunning:Qo,runMonitorSuite:qa,clearMonitorRuns:xo,libraryByCategory:ac,libSearch:Ot,setLibSearch:Vt,collapsedCats:Xt,toggleCat:oa,atomViewBindings:ao,onOpenAtomNode:Ql}),[a,P,Jl,ou,au,Va,Ha,fo,Ga,lu,Wa,po,ho,tu,Zl,nu,rc,ic,ru,su,Z,q,De,wi,ro,qr,Ei,re,W,xe,_,y,zn,Ue,Wi,Zr,Qr,so,Ms,ws,Lt,lt,pt,yt,Ba,st,We,Fe,Ct,it,Ge,vo,gu,eu,xn,Li,h,u,lc,cc,Ka,Jo,Qo,qa,xo,ac,Ot,Xt,oa,ao,Ql]),yu=I.useCallback((D,F)=>P3(D,F),[]);return w.jsx(U_.Provider,{value:_u,children:w.jsxs("div",{style:lC,children:[w.jsxs("div",{style:cC,children:[w.jsx("span",{style:uC,children:"AtomicGraph"}),w.jsx("span",{className:"nt-menu-item",children:"File"}),w.jsx("span",{className:"nt-menu-item",children:"Edit"}),w.jsx("span",{className:"nt-menu-item",children:"Tools"}),w.jsxs("span",{className:"nt-menu-item",style:{position:"relative"},onClick:()=>an(D=>!D),children:["Window",Nn&&w.jsxs("div",{style:fC,onMouseLeave:()=>an(!1),children:[w.jsx("div",{className:"nt-drop-item",onClick:()=>{we(),an(!1)},children:"Reset Layout"}),w.jsx("div",{style:Ih}),w.jsx("div",{className:"nt-drop-item",onClick:()=>{Ae("graph","Graph"),an(!1)},children:"New Graph"}),w.jsx("div",{className:"nt-drop-item",onClick:()=>{Ae("preview","2D Preview"),an(!1)},children:"New Preview"}),w.jsx("div",{className:"nt-drop-item",onClick:()=>{Ae("preview3d","3D Preview"),an(!1)},children:"New 3D Preview"}),w.jsx("div",{className:"nt-drop-item",onClick:()=>{Ae("code","Code"),an(!1)},children:"New Code"}),w.jsx("div",{className:"nt-drop-item",onClick:()=>{Ae("logs","Logs"),an(!1)},children:"New Logs"}),w.jsx("div",{className:"nt-drop-item",onClick:()=>{Ae("library","Library"),an(!1)},children:"New Library"}),w.jsx("div",{className:"nt-drop-item",onClick:()=>{Ae("explorer","Explorer"),an(!1)},children:"New Explorer"}),w.jsx("div",{style:Ih}),w.jsx("div",{className:"nt-drop-item",onClick:()=>{bf(),an(!1)},children:"Load Demo Material (Dirt + Stones)"}),w.jsx("div",{className:"nt-drop-item",onClick:()=>{Sf(),an(!1)},children:"Load Demo DAG (Layout)"}),w.jsx("div",{style:Ih}),w.jsx("div",{className:"nt-drop-item",onClick:()=>{const D=prompt("Preset name:");D&&(Ve(D),an(!1))},children:"Save Preset..."}),Ye().map(D=>w.jsxs("div",{className:"nt-drop-item",onClick:()=>{Le(D),an(!1)},children:["Load: ",D]},D))]})]}),w.jsx("span",{className:"nt-menu-item",children:"Help"})]}),w.jsxs("div",{style:dC,children:[w.jsx("button",{onClick:mo,className:"nt-btn nt-btn-icon",disabled:Gt.current.past.length===0,title:"Undo (Ctrl/Cmd+Z)","aria-label":"Undo",children:w.jsx(FE,{size:14})}),w.jsx("button",{onClick:ar,className:"nt-btn nt-btn-icon",disabled:Gt.current.future.length===0,title:"Redo (Ctrl/Cmd+Y, Ctrl/Cmd+Shift+Z)","aria-label":"Redo",children:w.jsx(IE,{size:14})}),w.jsx("div",{style:Gd}),w.jsx("button",{onClick:cu,className:"nt-btn nt-btn-icon",title:"Save graph","aria-label":"Save",children:w.jsx(UE,{size:14})}),w.jsx("button",{onClick:()=>{var D;return(D=Bt.current)==null?void 0:D.click()},className:"nt-btn nt-btn-icon",title:"Load graph","aria-label":"Load",children:w.jsx(_E,{size:14})}),w.jsx("input",{ref:Bt,type:"file",accept:".json",style:{display:"none"},onChange:uu}),w.jsx("div",{style:Gd}),w.jsx("span",{style:{...Ph,display:"inline-flex",alignItems:"center"},title:"Texture size",children:w.jsx(SE,{size:12})}),w.jsx("select",{value:_,onChange:D=>xf(parseInt(D.target.value,10)),className:"nt-select",title:"Texture size",children:[256,512,1024,2048].map(D=>w.jsx("option",{value:D,children:D},D))}),E&&m<_&&w.jsx("span",{style:{...Ph,color:"#d3a15f"},title:`Rendering live at ${m} first, then promoting to ${_}`,children:`${m} -> ${_}`}),xn&&w.jsx("span",{style:{...Ph,color:"#f0b36c"},title:Li||"GPU safety cooldown active",children:`GPU SAFE 256${Ii>0?` x${Ii}`:""}`}),w.jsx("div",{style:Gd}),w.jsx("button",{onClick:_f,className:"nt-btn nt-btn-icon",title:"Frame all graph content","aria-label":"Frame all",children:w.jsx(EE,{size:14})}),w.jsx("button",{onClick:Kl,className:"nt-btn nt-btn-icon",title:"Reset graph camera (F)","aria-label":"Reset view",children:w.jsx(mE,{size:14})}),w.jsx("button",{onClick:()=>Xa("all"),className:"nt-btn nt-btn-icon",disabled:lo,title:"Run deterministic ELK layered layout (left to right)","aria-label":"Auto layout",children:lo?w.jsx("span",{style:{fontSize:11},children:"..."}):w.jsx(Bv,{size:14})}),w.jsxs("button",{onClick:()=>Xa("selection"),className:"nt-btn",style:{display:"inline-flex",alignItems:"center",gap:5},disabled:lo||k.length<2,title:k.length<2?"Select at least 2 nodes":"Layout only selected nodes",children:[w.jsx(Bv,{size:13}),"SEL"]}),co&&w.jsx("span",{style:{fontSize:10,fontWeight:700,color:co.tone==="warn"?"#ffb3b3":"#9ff3ca",letterSpacing:.3},children:co.text}),w.jsx("div",{style:Gd}),w.jsx("button",{onClick:_o,className:"nt-btn nt-btn-icon",title:"Export textures","aria-label":"Export",children:w.jsx(vE,{size:14})}),w.jsx("button",{onClick:yf,className:"nt-btn nt-btn-icon",disabled:!Ko,title:"Restore last autosave","aria-label":"Restore autosave",children:w.jsx(DE,{size:14})})]}),tt&&w.jsx("div",{style:{height:26,display:"flex",alignItems:"center",padding:"0 10px",borderBottom:"1px solid #4f4530",background:"#2a2418",color:"#e6d2a5",fontSize:11,letterSpacing:.2,flexShrink:0},children:tt}),w.jsx(HT,{renderView:yu}),Dt&&(Dt.target.kind==="canvas"?w.jsx(XE,{x:Dt.clientX,y:Dt.clientY,graphX:Dt.graphX,graphY:Dt.graphY,onAddNode:(D,F,K)=>{Rr(D,F,K),sn(null)},onAddFrame:Mf,onClose:()=>sn(null)}):Dt.target.kind==="frame"?w.jsx("div",{style:{position:"fixed",inset:0,zIndex:1200},onMouseDown:()=>sn(null),children:w.jsxs("div",{style:{position:"fixed",left:Dt.clientX,top:Dt.clientY,width:200,background:"#1b1d22f6",border:"1px solid #343a46",borderRadius:8,boxShadow:"0 14px 38px #000000aa",padding:6},onMouseDown:D=>D.stopPropagation(),onContextMenu:D=>D.preventDefault(),children:[w.jsx("button",{className:"nt-btn-sm",style:{width:"100%",marginBottom:4,textAlign:"left"},onClick:()=>{Dt.target.kind==="frame"&&wf(Dt.target.frameId)},children:"Rename Frame"}),w.jsx("button",{className:"nt-btn-sm",style:{width:"100%",marginBottom:4,textAlign:"left"},onClick:()=>{Dt.target.kind==="frame"&&Ef(Dt.target.frameId)},children:"Cycle Color"}),w.jsx("button",{className:"nt-btn-sm",style:{width:"100%",textAlign:"left",borderColor:"#6f3737",color:"#ffb3b3"},onClick:()=>{Dt.target.kind==="frame"&&Tf(Dt.target.frameId)},children:"Delete Frame"})]})}):w.jsx("div",{onMouseDown:()=>sn(null),children:w.jsx(jE,{x:Dt.clientX,y:Dt.clientY,items:vu,onRun:D=>mu(D,Dt),onClose:()=>sn(null)})})),w.jsx(zE,{open:en,items:xu,onRun:D=>mu(D),onClose:()=>At(!1)}),w.jsx(WE,{open:!!An,compatibleType:Xi,onSelect:sa,onClose:()=>Sn(null)})]})})}const nt={},Da="THUMBNAIL_CONTEXT_UNAVAILABLE",qs="THUMBNAIL_CONTEXT_DISABLED",Xc=2500;function _x(n){return/GL_VENDOR\s*=\s*Disabled|GL_RENDERER\s*=\s*Disabled|Sandboxed\s*=\s*yes|BindToCurrentSequence failed/i.test(n)}function yx(n,e=Xc,t=!1){var r,o,a;try{(r=nt.material)==null||r.dispose()}catch{}try{(o=nt.geo)==null||o.dispose()}catch{}try{(a=nt.renderer)==null||a.dispose()}catch{}nt.renderer=void 0,nt.scene=void 0,nt.camera=void 0,nt.mesh=void 0,nt.geo=void 0,nt.material=void 0,nt.shaderKey="",nt.lastSize=void 0,nt.unavailableReason=n,nt.hardDisabled=t,nt.retryAfter=t?Number.POSITIVE_INFINITY:performance.now()+Math.max(250,e)}function Qd(n){return typeof n=="number"||typeof n=="boolean"||typeof n=="string"?String(n):Array.isArray(n)?`[${n.map(e=>Qd(e)).join(",")}]`:n==null?"null":JSON.stringify(n)}function Sx(n,e,t=""){const r=[];if(n.uniformLayout&&n.uniformLayout.length>0)for(const o of n.uniformLayout){const a=n.uniformBindings[o.name];a&&r.push(`${o.name}:${Qd(a.value)}`)}else{for(const o of n.uniforms){const a=n.uniformBindings[o.name];a&&r.push(`${o.name}:${Qd(a.value)}`)}r.length===0&&Object.entries(n.uniformBindings).sort(([o],[a])=>o.localeCompare(a)).forEach(([o,a])=>r.push(`${o}:${Qd(a.value)}`))}return`${e}|${t}|${n.hash}|${n.vertex.length}|${n.fragment.length}|${r.join("|")}`}function rC(n){const e={alpha:!0,antialias:!1,preserveDrawingBuffer:!0,premultipliedAlpha:!0,powerPreference:"low-power"};try{return n.getContext("webgl2",e)||n.getContext("webgl",e)||n.getContext("experimental-webgl",e)}catch{return null}}function Wm(n,e){if(nt.hardDisabled)throw new Error(qs);if(nt.unavailableReason){if((nt.retryAfter??0)>performance.now())throw new Error(Da);nt.unavailableReason=void 0,nt.retryAfter=0,nt.unavailableLogged=!1,nt.hardDisabled=!1}if(!nt.renderer)try{const o=document.createElement("canvas");o.width=e,o.height=e;const a=rC(o);if(!a){const f="WebGL unavailable in this environment";throw nt.unavailableReason=f,nt.retryAfter=Number.POSITIVE_INFINITY,nt.hardDisabled=!0,nt.unavailableLogged=!0,new Error(qs)}o.addEventListener("webglcontextlost",f=>{f.preventDefault(),yx("WebGL thumbnail context lost")},{passive:!1}),o.addEventListener("webglcontextrestored",()=>{nt.unavailableReason=void 0,nt.retryAfter=0,nt.hardDisabled=!1}),nt.renderer=new u_({canvas:o,context:a,alpha:!0,preserveDrawingBuffer:!0,antialias:!1}),nt.renderer.setPixelRatio(1),nt.renderer.setSize(e,e,!1),nt.renderer.setClearColor(0,1),nt.scene=new Gx,nt.camera=new Kc(-1,1,1,-1,0,1),nt.geo=new Xl(2,2);const c=new ir({uniforms:{}});nt.mesh=new Xr(nt.geo,c),nt.material=c,nt.shaderKey="",nt.scene.add(nt.mesh),nt.lastSize=e,nt.unavailableReason=void 0,nt.retryAfter=0,nt.hardDisabled=!1}catch(o){const a=((o==null?void 0:o.message)||String(o)||"WebGL context creation failed").replace(/\s+/g," ").trim(),c=_x(a);throw nt.unavailableReason=a,nt.retryAfter=c?Number.POSITIVE_INFINITY:performance.now()+Xc,nt.hardDisabled=c,nt.unavailableLogged=!0,c?new Error(qs):new Error(Da)}if(!nt.renderer||!nt.scene||!nt.camera)return null;nt.lastSize!==e&&(nt.renderer.setSize(e,e,!1),nt.renderer.domElement.width=e,nt.renderer.domElement.height=e,nt.lastSize=e);const t={};if(n.uniformLayout&&n.uniformLayout.length>0)for(const o of n.uniformLayout){const a=n.uniformBindings[o.name];a&&(t[o.name]={value:a.value})}else{for(const o of n.uniforms){const a=n.uniformBindings[o.name];a&&(t[o.name]={value:a.value})}Object.keys(t).length===0&&Object.entries(n.uniformBindings).forEach(([o,a])=>{t[o]={value:a.value}})}t.u_time={value:0},t.u_resolution={value:[e,e]},t.u_preview_offset={value:[0,0]},t.u_preview_zoom={value:1},t.u_preview_tile={value:0};const r=`${n.hash}|${n.vertex.length}|${n.fragment.length}`;try{if(!nt.material||nt.shaderKey!==r){const o=new ir({vertexShader:n.vertex,fragmentShader:n.fragment,uniforms:t});nt.material&&nt.material!==o&&nt.material.dispose(),nt.material=o,nt.shaderKey=r,nt.mesh.material=o}else{const o=nt.material;Object.entries(t).forEach(([a,c])=>{o.uniforms[a]?o.uniforms[a].value=c.value:o.uniforms[a]=c}),o.needsUpdate=!1}return nt.renderer.render(nt.scene,nt.camera),nt.renderer.domElement}catch(o){const a=((o==null?void 0:o.message)||String(o)||"thumbnail render failed").replace(/\s+/g," ").trim();throw yx(a,Xc,_x(a)),nt.unavailableLogged||(nt.unavailableLogged=!0,console.warn(`[thumb] Shared thumbnail renderer reset: ${a}`)),new Error(Da)}}function sC(n,e,t){const r=Wm(n,e),o=t??document.createElement("canvas");(o.width!==e||o.height!==e)&&(o.width=e,o.height=e);const a=o.getContext("2d");return a&&r?(a.clearRect(0,0,e,e),a.drawImage(r,0,0,e,e)):a&&!r&&(a.fillStyle="#16161f",a.fillRect(0,0,e,e),a.fillStyle="#6b7280",a.font=`bold ${Math.max(8,Math.floor(e*.12))}px monospace`,a.textAlign="center",a.textBaseline="middle",a.fillText("NO GPU",e*.5,e*.5)),o}function oC(n,e){const t=Wm(n,e);if(!t)throw new Error(nt.hardDisabled?qs:Da);return t.toDataURL("image/png")}function aC(n,e="ERR"){const t=document.createElement("canvas");t.width=Math.max(32,n),t.height=Math.max(32,n);const r=t.getContext("2d");return r?(r.fillStyle="#14090a",r.fillRect(0,0,t.width,t.height),r.strokeStyle="#7f1d1d",r.lineWidth=2,r.strokeRect(1,1,t.width-2,t.height-2),r.fillStyle="#f87171",r.font=`bold ${Math.max(10,Math.floor(t.width*.14))}px monospace`,r.textAlign="center",r.textBaseline="middle",r.fillText(e,t.width*.5,t.height*.5),t.toDataURL("image/png")):""}const lC={width:"100vw",height:"100vh",display:"flex",flexDirection:"column",background:"var(--nt-bg-0)",color:"var(--nt-text-1)",overflow:"hidden",fontFamily:"'Segoe UI','IBM Plex Mono',sans-serif"},cC={height:28,display:"flex",alignItems:"center",gap:14,background:"var(--nt-bg-2)",borderBottom:"1px solid var(--nt-border-1)",padding:"0 10px",flexShrink:0},uC={fontSize:11,color:"var(--nt-text-0)",marginRight:12,fontWeight:600},dC={height:34,display:"flex",alignItems:"center",gap:6,background:"var(--nt-bg-1)",borderBottom:"1px solid var(--nt-border-1)",padding:"0 8px",flexShrink:0},Ph={fontSize:9,color:"var(--nt-text-2)",letterSpacing:.4},Gd={width:1,height:14,background:"var(--nt-border-1)",margin:"0 2px"},fC={position:"absolute",top:"100%",left:0,marginTop:4,background:"var(--nt-bg-1)",border:"1px solid var(--nt-border-1)",borderRadius:4,boxShadow:"0 8px 24px #000000aa",padding:"4px 0",minWidth:180,zIndex:200},Ih={height:1,background:"var(--nt-border-1)",margin:"4px 8px"};class pC extends Gr.Component{constructor(){super(...arguments),this.state={renderError:null,renderInfo:null,runtimeError:null},this.onWindowError=e=>{var o;const t=e.error instanceof Error?`${e.error.name}: ${e.error.message}`:e.message||"Unknown runtime error",r=e.filename?` @ ${e.filename}:${e.lineno}:${e.colno}`:"";console.error("[CrashBoundary] Window error:",e.error||e.message),wn({level:"error",source:"window-error",message:`${t}${r}`,details:(o=e.error)==null?void 0:o.stack}),this.setState({runtimeError:`${t}${r}`})},this.onUnhandledRejection=e=>{const t=e.reason,r=a=>{try{return JSON.stringify(a)}catch{return"[unserializable rejection reason]"}},o=t instanceof Error?`${t.name}: ${t.message}`:typeof t=="string"?t:r(t);console.error("[CrashBoundary] Unhandled promise rejection:",t),wn({level:"error",source:"unhandled-rejection",message:o,details:t instanceof Error?t.stack:void 0}),this.setState({runtimeError:`Unhandled promise rejection: ${o}`})},this.onReload=()=>{window.location.reload()},this.onDismissRuntime=()=>{this.setState({runtimeError:null})}}static getDerivedStateFromError(e){return{renderError:e}}componentDidCatch(e,t){console.error("[CrashBoundary] React render crash:",e,t),wn({level:"error",source:"react-render",message:`${e.name}: ${e.message}`,details:t.componentStack||e.stack}),this.setState({renderInfo:t})}componentDidMount(){window.addEventListener("error",this.onWindowError),window.addEventListener("unhandledrejection",this.onUnhandledRejection)}componentWillUnmount(){window.removeEventListener("error",this.onWindowError),window.removeEventListener("unhandledrejection",this.onUnhandledRejection)}render(){const{renderError:e,renderInfo:t,runtimeError:r}=this.state,o=!!e,a=e?`${e.name}: ${e.message}`:r;return!o&&!r?this.props.children:w.jsx("div",{style:hC,children:w.jsxs("div",{style:mC,children:[w.jsx("div",{style:gC,children:o?"Application Crashed":"Runtime Error Detected"}),w.jsx("div",{style:vC,children:o?"A rendering error crashed the app. See details below.":"An unexpected runtime error occurred. You can dismiss or reload."}),w.jsx("pre",{style:xC,children:a||"Unknown error"}),(t==null?void 0:t.componentStack)&&w.jsx("pre",{style:_C,children:t.componentStack}),w.jsxs("div",{style:yC,children:[!o&&w.jsx("button",{style:bC,onClick:this.onDismissRuntime,children:"Dismiss"}),w.jsx("button",{style:SC,onClick:this.onReload,children:"Reload App"})]})]})})}}const hC={position:"fixed",inset:0,zIndex:99999,display:"flex",alignItems:"center",justifyContent:"center",background:"#0d1017",color:"#dde5ff",padding:16,boxSizing:"border-box"},mC={width:"min(920px, 100%)",maxHeight:"90vh",overflow:"auto",background:"#182131",border:"1px solid #38547f",borderRadius:10,boxShadow:"0 16px 50px #00000088",padding:14,boxSizing:"border-box",fontFamily:"'Segoe UI', 'Cascadia Code', sans-serif"},gC={fontSize:18,fontWeight:700,color:"#ffb4b4",marginBottom:6},vC={fontSize:12,color:"#b8c6e8",marginBottom:10},xC={margin:0,padding:10,borderRadius:6,border:"1px solid #704040",background:"#2b1616",color:"#ffd2d2",whiteSpace:"pre-wrap",wordBreak:"break-word",fontSize:12,lineHeight:1.45},_C={margin:"10px 0 0",padding:10,borderRadius:6,border:"1px solid #3a4f75",background:"#121b2a",color:"#bfd1f7",whiteSpace:"pre-wrap",wordBreak:"break-word",fontSize:11,lineHeight:1.4,maxHeight:260,overflow:"auto"},yC={marginTop:12,display:"flex",justifyContent:"flex-end",gap:8},SC={background:"#2b4d84",border:"1px solid #6d90c7",color:"#ecf2ff",borderRadius:5,padding:"6px 12px",fontSize:12,cursor:"pointer"},bC={background:"#1d283d",border:"1px solid #3f577f",color:"#d1ddfa",borderRadius:5,padding:"6px 12px",fontSize:12,cursor:"pointer"},Am=document.getElementById("root");if(!Am)throw new Error("Root element #root not found.");const bx=w.jsx(pC,{children:w.jsx(iC,{})}),MC=!1;try{Cy.createRoot(Am).render(MC?bx:w.jsx(I.StrictMode,{children:bx}))}catch(n){const e=n instanceof Error?`${n.name}: ${n.message}`:String(n);wn({level:"error",source:"startup",message:e,details:n instanceof Error?n.stack:void 0}),Am.innerHTML=`
    <div style="padding:16px;background:#0f131b;color:#ffd0d0;font-family:Segoe UI,Consolas,monospace;">
      <h2 style="margin:0 0 8px 0;">App failed to start</h2>
      <pre style="white-space:pre-wrap;background:#2a1414;border:1px solid #7d3b3b;padding:10px;border-radius:6px;">${e}</pre>
      <button id="reload-btn" style="margin-top:10px;padding:6px 10px;border-radius:5px;border:1px solid #5c7cae;background:#2a4572;color:#eaf1ff;cursor:pointer;">Reload App</button>
    </div>
  `;const t=document.getElementById("reload-btn");t&&t.addEventListener("click",()=>window.location.reload())}export{VC as $,Cx as A,Vo as B,FC as C,LC as D,e_ as E,hs as F,kC as G,Qs as H,qc as I,Qx as J,Xl as K,Ol as L,EC as M,Et as N,ir as O,Ta as P,Wl as Q,Xx as R,UC as S,TC as T,Fp as U,ge as V,u_ as W,PC as X,Kx as Y,Q1 as Z,cf as _,wn as a,OC as a0,$C as a1,wC as a2,xy as a3,pn as b,CC as c,AC as d,Yn as e,Gx as f,on as g,Hr as h,br as i,w as j,Tx as k,Ex as l,wx as m,IC as n,Yx as o,ex as p,Xr as q,I as r,DC as s,NC as t,vv as u,zC as v,BC as w,N_ as x,RC as y,$h as z};
