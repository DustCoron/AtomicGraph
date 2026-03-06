(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();var eA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function dy(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var hh={exports:{}},sc={},ph={exports:{}},Qt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vg;function fy(){if(vg)return Qt;vg=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),_=Symbol.iterator;function g(F){return F===null||typeof F!="object"?null:(F=_&&F[_]||F["@@iterator"],typeof F=="function"?F:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function x(F,Y,Ie){this.props=F,this.context=Y,this.refs=T,this.updater=Ie||m}x.prototype.isReactComponent={},x.prototype.setState=function(F,Y){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,Y,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function y(){}y.prototype=x.prototype;function L(F,Y,Ie){this.props=F,this.context=Y,this.refs=T,this.updater=Ie||m}var k=L.prototype=new y;k.constructor=L,M(k,x.prototype),k.isPureReactComponent=!0;var I=Array.isArray,$=Object.prototype.hasOwnProperty,w={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function b(F,Y,Ie){var Re,et={},ae=null,Ce=null;if(Y!=null)for(Re in Y.ref!==void 0&&(Ce=Y.ref),Y.key!==void 0&&(ae=""+Y.key),Y)$.call(Y,Re)&&!R.hasOwnProperty(Re)&&(et[Re]=Y[Re]);var Te=arguments.length-2;if(Te===1)et.children=Ie;else if(1<Te){for(var Je=Array(Te),je=0;je<Te;je++)Je[je]=arguments[je+2];et.children=Je}if(F&&F.defaultProps)for(Re in Te=F.defaultProps,Te)et[Re]===void 0&&(et[Re]=Te[Re]);return{$$typeof:i,type:F,key:ae,ref:Ce,props:et,_owner:w.current}}function C(F,Y){return{$$typeof:i,type:F.type,key:Y,ref:F.ref,props:F.props,_owner:F._owner}}function B(F){return typeof F=="object"&&F!==null&&F.$$typeof===i}function U(F){var Y={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ie){return Y[Ie]})}var j=/\/+/g;function G(F,Y){return typeof F=="object"&&F!==null&&F.key!=null?U(""+F.key):Y.toString(36)}function J(F,Y,Ie,Re,et){var ae=typeof F;(ae==="undefined"||ae==="boolean")&&(F=null);var Ce=!1;if(F===null)Ce=!0;else switch(ae){case"string":case"number":Ce=!0;break;case"object":switch(F.$$typeof){case i:case e:Ce=!0}}if(Ce)return Ce=F,et=et(Ce),F=Re===""?"."+G(Ce,0):Re,I(et)?(Ie="",F!=null&&(Ie=F.replace(j,"$&/")+"/"),J(et,Y,Ie,"",function(je){return je})):et!=null&&(B(et)&&(et=C(et,Ie+(!et.key||Ce&&Ce.key===et.key?"":(""+et.key).replace(j,"$&/")+"/")+F)),Y.push(et)),1;if(Ce=0,Re=Re===""?".":Re+":",I(F))for(var Te=0;Te<F.length;Te++){ae=F[Te];var Je=Re+G(ae,Te);Ce+=J(ae,Y,Ie,Je,et)}else if(Je=g(F),typeof Je=="function")for(F=Je.call(F),Te=0;!(ae=F.next()).done;)ae=ae.value,Je=Re+G(ae,Te++),Ce+=J(ae,Y,Ie,Je,et);else if(ae==="object")throw Y=String(F),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.");return Ce}function se(F,Y,Ie){if(F==null)return F;var Re=[],et=0;return J(F,Re,"","",function(ae){return Y.call(Ie,ae,et++)}),Re}function ie(F){if(F._status===-1){var Y=F._result;Y=Y(),Y.then(function(Ie){(F._status===0||F._status===-1)&&(F._status=1,F._result=Ie)},function(Ie){(F._status===0||F._status===-1)&&(F._status=2,F._result=Ie)}),F._status===-1&&(F._status=0,F._result=Y)}if(F._status===1)return F._result.default;throw F._result}var K={current:null},ne={transition:null},X={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:ne,ReactCurrentOwner:w};function oe(){throw Error("act(...) is not supported in production builds of React.")}return Qt.Children={map:se,forEach:function(F,Y,Ie){se(F,function(){Y.apply(this,arguments)},Ie)},count:function(F){var Y=0;return se(F,function(){Y++}),Y},toArray:function(F){return se(F,function(Y){return Y})||[]},only:function(F){if(!B(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},Qt.Component=x,Qt.Fragment=t,Qt.Profiler=o,Qt.PureComponent=L,Qt.StrictMode=r,Qt.Suspense=p,Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,Qt.act=oe,Qt.cloneElement=function(F,Y,Ie){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Re=M({},F.props),et=F.key,ae=F.ref,Ce=F._owner;if(Y!=null){if(Y.ref!==void 0&&(ae=Y.ref,Ce=w.current),Y.key!==void 0&&(et=""+Y.key),F.type&&F.type.defaultProps)var Te=F.type.defaultProps;for(Je in Y)$.call(Y,Je)&&!R.hasOwnProperty(Je)&&(Re[Je]=Y[Je]===void 0&&Te!==void 0?Te[Je]:Y[Je])}var Je=arguments.length-2;if(Je===1)Re.children=Ie;else if(1<Je){Te=Array(Je);for(var je=0;je<Je;je++)Te[je]=arguments[je+2];Re.children=Te}return{$$typeof:i,type:F.type,key:et,ref:ae,props:Re,_owner:Ce}},Qt.createContext=function(F){return F={$$typeof:c,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:a,_context:F},F.Consumer=F},Qt.createElement=b,Qt.createFactory=function(F){var Y=b.bind(null,F);return Y.type=F,Y},Qt.createRef=function(){return{current:null}},Qt.forwardRef=function(F){return{$$typeof:f,render:F}},Qt.isValidElement=B,Qt.lazy=function(F){return{$$typeof:h,_payload:{_status:-1,_result:F},_init:ie}},Qt.memo=function(F,Y){return{$$typeof:u,type:F,compare:Y===void 0?null:Y}},Qt.startTransition=function(F){var Y=ne.transition;ne.transition={};try{F()}finally{ne.transition=Y}},Qt.unstable_act=oe,Qt.useCallback=function(F,Y){return K.current.useCallback(F,Y)},Qt.useContext=function(F){return K.current.useContext(F)},Qt.useDebugValue=function(){},Qt.useDeferredValue=function(F){return K.current.useDeferredValue(F)},Qt.useEffect=function(F,Y){return K.current.useEffect(F,Y)},Qt.useId=function(){return K.current.useId()},Qt.useImperativeHandle=function(F,Y,Ie){return K.current.useImperativeHandle(F,Y,Ie)},Qt.useInsertionEffect=function(F,Y){return K.current.useInsertionEffect(F,Y)},Qt.useLayoutEffect=function(F,Y){return K.current.useLayoutEffect(F,Y)},Qt.useMemo=function(F,Y){return K.current.useMemo(F,Y)},Qt.useReducer=function(F,Y,Ie){return K.current.useReducer(F,Y,Ie)},Qt.useRef=function(F){return K.current.useRef(F)},Qt.useState=function(F){return K.current.useState(F)},Qt.useSyncExternalStore=function(F,Y,Ie){return K.current.useSyncExternalStore(F,Y,Ie)},Qt.useTransition=function(){return K.current.useTransition()},Qt.version="18.3.1",Qt}var xg;function um(){return xg||(xg=1,ph.exports=fy()),ph.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _g;function hy(){if(_g)return sc;_g=1;var i=um(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(f,p,u){var h,_={},g=null,m=null;u!==void 0&&(g=""+u),p.key!==void 0&&(g=""+p.key),p.ref!==void 0&&(m=p.ref);for(h in p)r.call(p,h)&&!a.hasOwnProperty(h)&&(_[h]=p[h]);if(f&&f.defaultProps)for(h in p=f.defaultProps,p)_[h]===void 0&&(_[h]=p[h]);return{$$typeof:e,type:f,key:g,ref:m,props:_,_owner:o.current}}return sc.Fragment=t,sc.jsx=c,sc.jsxs=c,sc}var yg;function py(){return yg||(yg=1,hh.exports=hy()),hh.exports}var E=py(),N=um();const ts=dy(N);var Uu={},mh={exports:{}},Oi={},gh={exports:{}},vh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sg;function my(){return Sg||(Sg=1,(function(i){function e(ne,X){var oe=ne.length;ne.push(X);e:for(;0<oe;){var F=oe-1>>>1,Y=ne[F];if(0<o(Y,X))ne[F]=X,ne[oe]=Y,oe=F;else break e}}function t(ne){return ne.length===0?null:ne[0]}function r(ne){if(ne.length===0)return null;var X=ne[0],oe=ne.pop();if(oe!==X){ne[0]=oe;e:for(var F=0,Y=ne.length,Ie=Y>>>1;F<Ie;){var Re=2*(F+1)-1,et=ne[Re],ae=Re+1,Ce=ne[ae];if(0>o(et,oe))ae<Y&&0>o(Ce,et)?(ne[F]=Ce,ne[ae]=oe,F=ae):(ne[F]=et,ne[Re]=oe,F=Re);else if(ae<Y&&0>o(Ce,oe))ne[F]=Ce,ne[ae]=oe,F=ae;else break e}}return X}function o(ne,X){var oe=ne.sortIndex-X.sortIndex;return oe!==0?oe:ne.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;i.unstable_now=function(){return a.now()}}else{var c=Date,f=c.now();i.unstable_now=function(){return c.now()-f}}var p=[],u=[],h=1,_=null,g=3,m=!1,M=!1,T=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(ne){for(var X=t(u);X!==null;){if(X.callback===null)r(u);else if(X.startTime<=ne)r(u),X.sortIndex=X.expirationTime,e(p,X);else break;X=t(u)}}function I(ne){if(T=!1,k(ne),!M)if(t(p)!==null)M=!0,ie($);else{var X=t(u);X!==null&&K(I,X.startTime-ne)}}function $(ne,X){M=!1,T&&(T=!1,y(b),b=-1),m=!0;var oe=g;try{for(k(X),_=t(p);_!==null&&(!(_.expirationTime>X)||ne&&!U());){var F=_.callback;if(typeof F=="function"){_.callback=null,g=_.priorityLevel;var Y=F(_.expirationTime<=X);X=i.unstable_now(),typeof Y=="function"?_.callback=Y:_===t(p)&&r(p),k(X)}else r(p);_=t(p)}if(_!==null)var Ie=!0;else{var Re=t(u);Re!==null&&K(I,Re.startTime-X),Ie=!1}return Ie}finally{_=null,g=oe,m=!1}}var w=!1,R=null,b=-1,C=5,B=-1;function U(){return!(i.unstable_now()-B<C)}function j(){if(R!==null){var ne=i.unstable_now();B=ne;var X=!0;try{X=R(!0,ne)}finally{X?G():(w=!1,R=null)}}else w=!1}var G;if(typeof L=="function")G=function(){L(j)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,se=J.port2;J.port1.onmessage=j,G=function(){se.postMessage(null)}}else G=function(){x(j,0)};function ie(ne){R=ne,w||(w=!0,G())}function K(ne,X){b=x(function(){ne(i.unstable_now())},X)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(ne){ne.callback=null},i.unstable_continueExecution=function(){M||m||(M=!0,ie($))},i.unstable_forceFrameRate=function(ne){0>ne||125<ne?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<ne?Math.floor(1e3/ne):5},i.unstable_getCurrentPriorityLevel=function(){return g},i.unstable_getFirstCallbackNode=function(){return t(p)},i.unstable_next=function(ne){switch(g){case 1:case 2:case 3:var X=3;break;default:X=g}var oe=g;g=X;try{return ne()}finally{g=oe}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(ne,X){switch(ne){case 1:case 2:case 3:case 4:case 5:break;default:ne=3}var oe=g;g=ne;try{return X()}finally{g=oe}},i.unstable_scheduleCallback=function(ne,X,oe){var F=i.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?F+oe:F):oe=F,ne){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=oe+Y,ne={id:h++,callback:X,priorityLevel:ne,startTime:oe,expirationTime:Y,sortIndex:-1},oe>F?(ne.sortIndex=oe,e(u,ne),t(p)===null&&ne===t(u)&&(T?(y(b),b=-1):T=!0,K(I,oe-F))):(ne.sortIndex=Y,e(p,ne),M||m||(M=!0,ie($))),ne},i.unstable_shouldYield=U,i.unstable_wrapCallback=function(ne){var X=g;return function(){var oe=g;g=X;try{return ne.apply(this,arguments)}finally{g=oe}}}})(vh)),vh}var Mg;function gy(){return Mg||(Mg=1,gh.exports=my()),gh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg;function vy(){if(bg)return Oi;bg=1;var i=um(),e=gy();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(n,s){c(n,s),c(n+"Capture",s)}function c(n,s){for(o[n]=s,n=0;n<s.length;n++)r.add(s[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,u=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,h={},_={};function g(n){return p.call(_,n)?!0:p.call(h,n)?!1:u.test(n)?_[n]=!0:(h[n]=!0,!1)}function m(n,s,l,d){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,s,l,d){if(s===null||typeof s>"u"||m(n,s,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function T(n,s,l,d,v,S,P){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=v,this.mustUseProperty=l,this.propertyName=n,this.type=s,this.sanitizeURL=S,this.removeEmptyString=P}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];x[s]=new T(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(y,L);x[s]=new T(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(y,L);x[s]=new T(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(y,L);x[s]=new T(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function k(n,s,l,d){var v=x.hasOwnProperty(s)?x[s]:null;(v!==null?v.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,v,d)&&(l=null),d||v===null?g(s)&&(l===null?n.removeAttribute(s):n.setAttribute(s,""+l)):v.mustUseProperty?n[v.propertyName]=l===null?v.type===3?!1:"":l:(s=v.attributeName,d=v.attributeNamespace,l===null?n.removeAttribute(s):(v=v.type,l=v===3||v===4&&l===!0?"":""+l,d?n.setAttributeNS(d,s,l):n.setAttribute(s,l))))}var I=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$=Symbol.for("react.element"),w=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),U=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),se=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),ne=Symbol.iterator;function X(n){return n===null||typeof n!="object"?null:(n=ne&&n[ne]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,F;function Y(n){if(F===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);F=s&&s[1]||""}return`
`+F+n}var Ie=!1;function Re(n,s){if(!n||Ie)return"";Ie=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(Me){var d=Me}Reflect.construct(n,[],s)}else{try{s.call()}catch(Me){d=Me}n.call(s.prototype)}else{try{throw Error()}catch(Me){d=Me}n()}}catch(Me){if(Me&&d&&typeof Me.stack=="string"){for(var v=Me.stack.split(`
`),S=d.stack.split(`
`),P=v.length-1,W=S.length-1;1<=P&&0<=W&&v[P]!==S[W];)W--;for(;1<=P&&0<=W;P--,W--)if(v[P]!==S[W]){if(P!==1||W!==1)do if(P--,W--,0>W||v[P]!==S[W]){var te=`
`+v[P].replace(" at new "," at ");return n.displayName&&te.includes("<anonymous>")&&(te=te.replace("<anonymous>",n.displayName)),te}while(1<=P&&0<=W);break}}}finally{Ie=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?Y(n):""}function et(n){switch(n.tag){case 5:return Y(n.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return n=Re(n.type,!1),n;case 11:return n=Re(n.type.render,!1),n;case 1:return n=Re(n.type,!0),n;default:return""}}function ae(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case R:return"Fragment";case w:return"Portal";case C:return"Profiler";case b:return"StrictMode";case G:return"Suspense";case J:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case U:return(n.displayName||"Context")+".Consumer";case B:return(n._context.displayName||"Context")+".Provider";case j:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case se:return s=n.displayName||null,s!==null?s:ae(n.type)||"Memo";case ie:s=n._payload,n=n._init;try{return ae(n(s))}catch{}}return null}function Ce(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(s);case 8:return s===b?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Te(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Je(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function je(n){var s=Je(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),d=""+n[s];if(!n.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var v=l.get,S=l.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return v.call(this)},set:function(P){d=""+P,S.call(this,P)}}),Object.defineProperty(n,s,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(P){d=""+P},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function ot(n){n._valueTracker||(n._valueTracker=je(n))}function cn(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var l=s.getValue(),d="";return n&&(d=Je(n)?n.checked?"true":"false":n.value),n=d,n!==l?(s.setValue(n),!0):!1}function Et(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Rt(n,s){var l=s.checked;return oe({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Gt(n,s){var l=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;l=Te(s.value!=null?s.value:l),n._wrapperState={initialChecked:d,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function bt(n,s){s=s.checked,s!=null&&k(n,"checked",s,!1)}function nn(n,s){bt(n,s);var l=Te(s.value),d=s.type;if(l!=null)d==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(d==="submit"||d==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?fn(n,s.type,l):s.hasOwnProperty("defaultValue")&&fn(n,s.type,Te(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function Z(n,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,l||s===n.value||(n.value=s),n.defaultValue=s}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function fn(n,s,l){(s!=="number"||Et(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var $t=Array.isArray;function jt(n,s,l,d){if(n=n.options,s){s={};for(var v=0;v<l.length;v++)s["$"+l[v]]=!0;for(l=0;l<n.length;l++)v=s.hasOwnProperty("$"+n[l].value),n[l].selected!==v&&(n[l].selected=v),v&&d&&(n[l].defaultSelected=!0)}else{for(l=""+Te(l),s=null,v=0;v<n.length;v++){if(n[v].value===l){n[v].selected=!0,d&&(n[v].defaultSelected=!0);return}s!==null||n[v].disabled||(s=n[v])}s!==null&&(s.selected=!0)}}function ut(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function z(n,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if($t(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}n._wrapperState={initialValue:Te(l)}}function A(n,s){var l=Te(s.value),d=Te(s.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),s.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),d!=null&&(n.defaultValue=""+d)}function re(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function Ae(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Le(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?Ae(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var we,st=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,d,v){MSApp.execUnsafeLocalFunction(function(){return n(s,l,d,v)})}:n})(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(we=we||document.createElement("div"),we.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=we.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function He(n,s){if(s){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=s;return}}n.textContent=s}var at={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vt=["Webkit","ms","Moz","O"];Object.keys(at).forEach(function(n){vt.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),at[s]=at[n]})});function ke(n,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||at.hasOwnProperty(n)&&at[n]?(""+s).trim():s+"px"}function We(n,s){n=n.style;for(var l in s)if(s.hasOwnProperty(l)){var d=l.indexOf("--")===0,v=ke(l,s[l],d);l==="float"&&(l="cssFloat"),d?n.setProperty(l,v):n[l]=v}}var rt=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function it(n,s){if(s){if(rt[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function tt(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=null;function Q(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Fe=null,$e=null,Ke=null;function Oe(n){if(n=Gl(n)){if(typeof Fe!="function")throw Error(t(280));var s=n.stateNode;s&&(s=Zc(s),Fe(n.stateNode,n.type,s))}}function be(n){$e?Ke?Ke.push(n):Ke=[n]:$e=n}function lt(){if($e){var n=$e,s=Ke;if(Ke=$e=null,Oe(n),s)for(n=0;n<s.length;n++)Oe(s[n])}}function Pt(n,s){return n(s)}function en(){}var Yt=!1;function Fn(n,s,l){if(Yt)return n(s,l);Yt=!0;try{return Pt(n,s,l)}finally{Yt=!1,($e!==null||Ke!==null)&&(en(),lt())}}function Sn(n,s){var l=n.stateNode;if(l===null)return null;var d=Zc(l);if(d===null)return null;l=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var zi=!1;if(f)try{var Qn={};Object.defineProperty(Qn,"passive",{get:function(){zi=!0}}),window.addEventListener("test",Qn,Qn),window.removeEventListener("test",Qn,Qn)}catch{zi=!1}function ir(n,s,l,d,v,S,P,W,te){var Me=Array.prototype.slice.call(arguments,3);try{s.apply(l,Me)}catch(ze){this.onError(ze)}}var Mi=!1,Pi=null,oi=!1,$i=null,ei={onError:function(n){Mi=!0,Pi=n}};function Us(n,s,l,d,v,S,P,W,te){Mi=!1,Pi=null,ir.apply(ei,arguments)}function $r(n,s,l,d,v,S,P,W,te){if(Us.apply(this,arguments),Mi){if(Mi){var Me=Pi;Mi=!1,Pi=null}else throw Error(t(198));oi||(oi=!0,$i=Me)}}function Ii(n){var s=n,l=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(l=s.return),n=s.return;while(n)}return s.tag===3?l:null}function Sr(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function Vi(n){if(Ii(n)!==n)throw Error(t(188))}function ai(n){var s=n.alternate;if(!s){if(s=Ii(n),s===null)throw Error(t(188));return s!==n?null:n}for(var l=n,d=s;;){var v=l.return;if(v===null)break;var S=v.alternate;if(S===null){if(d=v.return,d!==null){l=d;continue}break}if(v.child===S.child){for(S=v.child;S;){if(S===l)return Vi(v),n;if(S===d)return Vi(v),s;S=S.sibling}throw Error(t(188))}if(l.return!==d.return)l=v,d=S;else{for(var P=!1,W=v.child;W;){if(W===l){P=!0,l=v,d=S;break}if(W===d){P=!0,d=v,l=S;break}W=W.sibling}if(!P){for(W=S.child;W;){if(W===l){P=!0,l=S,d=v;break}if(W===d){P=!0,d=S,l=v;break}W=W.sibling}if(!P)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:s}function On(n){return n=ai(n),n!==null?Wn(n):null}function Wn(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=Wn(n);if(s!==null)return s;n=n.sibling}return null}var Mr=e.unstable_scheduleCallback,Fs=e.unstable_cancelCallback,gn=e.unstable_shouldYield,hn=e.unstable_requestPaint,D=e.unstable_now,ue=e.unstable_getCurrentPriorityLevel,xe=e.unstable_ImmediatePriority,fe=e.unstable_UserBlockingPriority,he=e.unstable_NormalPriority,nt=e.unstable_LowPriority,V=e.unstable_IdlePriority,q=null,le=null;function Se(n){if(le&&typeof le.onCommitFiberRoot=="function")try{le.onCommitFiberRoot(q,n,void 0,(n.current.flags&128)===128)}catch{}}var Ee=Math.clz32?Math.clz32:Xe,Ne=Math.log,De=Math.LN2;function Xe(n){return n>>>=0,n===0?32:31-(Ne(n)/De|0)|0}var Qe=64,dt=4194304;function ft(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function yt(n,s){var l=n.pendingLanes;if(l===0)return 0;var d=0,v=n.suspendedLanes,S=n.pingedLanes,P=l&268435455;if(P!==0){var W=P&~v;W!==0?d=ft(W):(S&=P,S!==0&&(d=ft(S)))}else P=l&~v,P!==0?d=ft(P):S!==0&&(d=ft(S));if(d===0)return 0;if(s!==0&&s!==d&&(s&v)===0&&(v=d&-d,S=s&-s,v>=S||v===16&&(S&4194240)!==0))return s;if((d&4)!==0&&(d|=l&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=d;0<s;)l=31-Ee(s),v=1<<l,d|=n[l],s&=~v;return d}function Ve(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kt(n,s){for(var l=n.suspendedLanes,d=n.pingedLanes,v=n.expirationTimes,S=n.pendingLanes;0<S;){var P=31-Ee(S),W=1<<P,te=v[P];te===-1?((W&l)===0||(W&d)!==0)&&(v[P]=Ve(W,s)):te<=s&&(n.expiredLanes|=W),S&=~W}}function It(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Vt(){var n=Qe;return Qe<<=1,(Qe&4194240)===0&&(Qe=64),n}function Ln(n){for(var s=[],l=0;31>l;l++)s.push(n);return s}function Dn(n,s,l){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-Ee(s),n[s]=l}function Mn(n,s){var l=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var d=n.eventTimes;for(n=n.expirationTimes;0<l;){var v=31-Ee(l),S=1<<v;s[v]=0,d[v]=-1,n[v]=-1,l&=~S}}function Ut(n,s){var l=n.entangledLanes|=s;for(n=n.entanglements;l;){var d=31-Ee(l),v=1<<d;v&s|n[d]&s&&(n[d]|=s),l&=~v}}var At=0;function ti(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var En,jn,Hi,rr,Vr,sr=!1,Io=[],Gi=null,bi=null,br=null,Li=new Map,Tt=new Map,Hr=[],Gd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pa(n,s){switch(n){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":bi=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":Li.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tt.delete(s.pointerId)}}function Lo(n,s,l,d,v,S){return n===null||n.nativeEvent!==S?(n={blockedOn:s,domEventName:l,eventSystemFlags:d,nativeEvent:S,targetContainers:[v]},s!==null&&(s=Gl(s),s!==null&&jn(s)),n):(n.eventSystemFlags|=d,s=n.targetContainers,v!==null&&s.indexOf(v)===-1&&s.push(v),n)}function Lc(n,s,l,d,v){switch(s){case"focusin":return Gi=Lo(Gi,n,s,l,d,v),!0;case"dragenter":return bi=Lo(bi,n,s,l,d,v),!0;case"mouseover":return br=Lo(br,n,s,l,d,v),!0;case"pointerover":var S=v.pointerId;return Li.set(S,Lo(Li.get(S)||null,n,s,l,d,v)),!0;case"gotpointercapture":return S=v.pointerId,Tt.set(S,Lo(Tt.get(S)||null,n,s,l,d,v)),!0}return!1}function Tl(n){var s=zo(n.target);if(s!==null){var l=Ii(s);if(l!==null){if(s=l.tag,s===13){if(s=Sr(l),s!==null){n.blockedOn=s,Vr(n.priority,function(){Hi(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ma(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var l=$s(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var d=new l.constructor(l.type,l);Ct=d,l.target.dispatchEvent(d),Ct=null}else return s=Gl(l),s!==null&&jn(s),n.blockedOn=l,!1;s.shift()}return!0}function Cl(n,s,l){ma(n)&&l.delete(s)}function fi(){sr=!1,Gi!==null&&ma(Gi)&&(Gi=null),bi!==null&&ma(bi)&&(bi=null),br!==null&&ma(br)&&(br=null),Li.forEach(Cl),Tt.forEach(Cl)}function Os(n,s){n.blockedOn===s&&(n.blockedOn=null,sr||(sr=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,fi)))}function Bs(n){function s(v){return Os(v,n)}if(0<Io.length){Os(Io[0],n);for(var l=1;l<Io.length;l++){var d=Io[l];d.blockedOn===n&&(d.blockedOn=null)}}for(Gi!==null&&Os(Gi,n),bi!==null&&Os(bi,n),br!==null&&Os(br,n),Li.forEach(s),Tt.forEach(s),l=0;l<Hr.length;l++)d=Hr[l],d.blockedOn===n&&(d.blockedOn=null);for(;0<Hr.length&&(l=Hr[0],l.blockedOn===null);)Tl(l),l.blockedOn===null&&Hr.shift()}var pn=I.ReactCurrentBatchConfig,Do=!0;function Dc(n,s,l,d){var v=At,S=pn.transition;pn.transition=null;try{At=1,zs(n,s,l,d)}finally{At=v,pn.transition=S}}function Nc(n,s,l,d){var v=At,S=pn.transition;pn.transition=null;try{At=4,zs(n,s,l,d)}finally{At=v,pn.transition=S}}function zs(n,s,l,d){if(Do){var v=$s(n,s,l,d);if(v===null)nf(n,s,d,wr,l),pa(n,d);else if(Lc(v,n,s,l,d))d.stopPropagation();else if(pa(n,d),s&4&&-1<Gd.indexOf(n)){for(;v!==null;){var S=Gl(v);if(S!==null&&En(S),S=$s(n,s,l,d),S===null&&nf(n,s,d,wr,l),S===v)break;v=S}v!==null&&d.stopPropagation()}else nf(n,s,d,null,l)}}var wr=null;function $s(n,s,l,d){if(wr=null,n=Q(d),n=zo(n),n!==null)if(s=Ii(n),s===null)n=null;else if(l=s.tag,l===13){if(n=Sr(s),n!==null)return n;n=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return wr=n,null}function No(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ue()){case xe:return 1;case fe:return 4;case he:case nt:return 16;case V:return 536870912;default:return 16}default:return 16}}var Er=null,ga=null,ko=null;function cs(){if(ko)return ko;var n,s=ga,l=s.length,d,v="value"in Er?Er.value:Er.textContent,S=v.length;for(n=0;n<l&&s[n]===v[n];n++);var P=l-n;for(d=1;d<=P&&s[l-d]===v[S-d];d++);return ko=v.slice(n,1<d?1-d:void 0)}function Uo(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function va(){return!0}function kc(){return!1}function hi(n){function s(l,d,v,S,P){this._reactName=l,this._targetInst=v,this.type=d,this.nativeEvent=S,this.target=P,this.currentTarget=null;for(var W in n)n.hasOwnProperty(W)&&(l=n[W],this[W]=l?l(S):S[W]);return this.isDefaultPrevented=(S.defaultPrevented!=null?S.defaultPrevented:S.returnValue===!1)?va:kc,this.isPropagationStopped=kc,this}return oe(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=va)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=va)},persist:function(){},isPersistent:va}),s}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xa=hi(us),Vs=oe({},us,{view:0,detail:0}),Uc=hi(Vs),_a,ya,Tr,Cr=oe({},Vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rl,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Tr&&(Tr&&n.type==="mousemove"?(_a=n.screenX-Tr.screenX,ya=n.screenY-Tr.screenY):ya=_a=0,Tr=n),_a)},movementY:function(n){return"movementY"in n?n.movementY:ya}}),Hs=hi(Cr),Fc=oe({},Cr,{dataTransfer:0}),Oc=hi(Fc),Sa=oe({},Vs,{relatedTarget:0}),Gs=hi(Sa),Bc=oe({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),Ma=hi(Bc),Gr=oe({},us,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),zc=hi(Gr),$c=oe({},us,{data:0}),Al=hi($c),Wd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yd(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=Xd[n])?!!s[n]:!1}function Rl(){return Yd}var qd=oe({},Vs,{key:function(n){if(n.key){var s=Wd[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=Uo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?jd[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rl,charCode:function(n){return n.type==="keypress"?Uo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Uo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Vc=hi(qd),Ar=oe({},Cr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),or=hi(Ar),Ws=oe({},Vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rl}),js=hi(Ws),Hc=oe({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xs=hi(Hc),Gc=oe({},Cr,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Wc=hi(Gc),jc=[9,13,27,32],Bn=f&&"CompositionEvent"in window,ar=null;f&&"documentMode"in document&&(ar=document.documentMode);var Kd=f&&"TextEvent"in window&&!ar,Pl=f&&(!Bn||ar&&8<ar&&11>=ar),Il=" ",Ll=!1;function Dl(n,s){switch(n){case"keyup":return jc.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nl(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ys=!1;function Zd(n,s){switch(n){case"compositionend":return Nl(s);case"keypress":return s.which!==32?null:(Ll=!0,Il);case"textInput":return n=s.data,n===Il&&Ll?null:n;default:return null}}function Jd(n,s){if(Ys)return n==="compositionend"||!Bn&&Dl(n,s)?(n=cs(),ko=ga=Er=null,Ys=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Pl&&s.locale!=="ko"?null:s.data;default:return null}}var Qd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function O(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!Qd[n.type]:s==="textarea"}function H(n,s,l,d){be(d),s=Yc(s,"onChange"),0<s.length&&(l=new xa("onChange","change",null,l,d),n.push({event:l,listeners:s}))}var ee=null,de=null;function ge(n){Dm(n,0)}function Pe(n){var s=Ca(n);if(cn(s))return n}function ye(n,s){if(n==="change")return s}var qe=!1;if(f){var Be;if(f){var Ye="oninput"in document;if(!Ye){var Ft=document.createElement("div");Ft.setAttribute("oninput","return;"),Ye=typeof Ft.oninput=="function"}Be=Ye}else Be=!1;qe=Be&&(!document.documentMode||9<document.documentMode)}function Zt(){ee&&(ee.detachEvent("onpropertychange",Lt),de=ee=null)}function Lt(n){if(n.propertyName==="value"&&Pe(de)){var s=[];H(s,de,n,Q(n)),Fn(ge,s)}}function kt(n,s,l){n==="focusin"?(Zt(),ee=s,de=l,ee.attachEvent("onpropertychange",Lt)):n==="focusout"&&Zt()}function mt(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Pe(de)}function tn(n,s){if(n==="click")return Pe(s)}function _n(n,s){if(n==="input"||n==="change")return Pe(s)}function rn(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var Jt=typeof Object.is=="function"?Object.is:rn;function mn(n,s){if(Jt(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var l=Object.keys(n),d=Object.keys(s);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var v=l[d];if(!p.call(s,v)||!Jt(n[v],s[v]))return!1}return!0}function wi(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function zn(n,s){var l=wi(n);n=0;for(var d;l;){if(l.nodeType===3){if(d=n+l.textContent.length,n<=s&&d>=s)return{node:l,offset:s-n};n=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=wi(l)}}function qs(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?qs(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function Fo(){for(var n=window,s=Et();s instanceof n.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)n=s.contentWindow;else break;s=Et(n.document)}return s}function Oo(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function kl(n){var s=Fo(),l=n.focusedElem,d=n.selectionRange;if(s!==l&&l&&l.ownerDocument&&qs(l.ownerDocument.documentElement,l)){if(d!==null&&Oo(l)){if(s=d.start,n=d.end,n===void 0&&(n=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(n,l.value.length);else if(n=(s=l.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var v=l.textContent.length,S=Math.min(d.start,v);d=d.end===void 0?S:Math.min(d.end,v),!n.extend&&S>d&&(v=d,d=S,S=v),v=zn(l,S);var P=zn(l,d);v&&P&&(n.rangeCount!==1||n.anchorNode!==v.node||n.anchorOffset!==v.offset||n.focusNode!==P.node||n.focusOffset!==P.offset)&&(s=s.createRange(),s.setStart(v.node,v.offset),n.removeAllRanges(),S>d?(n.addRange(s),n.extend(P.node,P.offset)):(s.setEnd(P.node,P.offset),n.addRange(s)))}}for(s=[],n=l;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)n=s[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var ba=f&&"documentMode"in document&&11>=document.documentMode,ds=null,Ul=null,Bo=null,Fl=!1;function Ol(n,s,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Fl||ds==null||ds!==Et(d)||(d=ds,"selectionStart"in d&&Oo(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Bo&&mn(Bo,d)||(Bo=d,d=Yc(Ul,"onSelect"),0<d.length&&(s=new xa("onSelect","select",null,s,l),n.push({event:s,listeners:d}),s.target=ds)))}function wa(n,s){var l={};return l[n.toLowerCase()]=s.toLowerCase(),l["Webkit"+n]="webkit"+s,l["Moz"+n]="moz"+s,l}var fs={animationend:wa("Animation","AnimationEnd"),animationiteration:wa("Animation","AnimationIteration"),animationstart:wa("Animation","AnimationStart"),transitionend:wa("Transition","TransitionEnd")},Bl={},Bt={};f&&(Bt=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function Vn(n){if(Bl[n])return Bl[n];if(!fs[n])return n;var s=fs[n],l;for(l in s)if(s.hasOwnProperty(l)&&l in Bt)return Bl[n]=s[l];return n}var Rr=Vn("animationend"),Ks=Vn("animationiteration"),Nn=Vn("animationstart"),Wi=Vn("transitionend"),Zs=new Map,Js="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ji(n,s){Zs.set(n,s),a(s,[n])}for(var Qs=0;Qs<Js.length;Qs++){var eo=Js[Qs],zl=eo.toLowerCase(),ef=eo[0].toUpperCase()+eo.slice(1);ji(zl,"on"+ef)}ji(Rr,"onAnimationEnd"),ji(Ks,"onAnimationIteration"),ji(Nn,"onAnimationStart"),ji("dblclick","onDoubleClick"),ji("focusin","onFocus"),ji("focusout","onBlur"),ji(Wi,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var to="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),M_=new Set("cancel close invalid load scroll toggle".split(" ").concat(to));function Lm(n,s,l){var d=n.type||"unknown-event";n.currentTarget=l,$r(d,s,void 0,n),n.currentTarget=null}function Dm(n,s){s=(s&4)!==0;for(var l=0;l<n.length;l++){var d=n[l],v=d.event;d=d.listeners;e:{var S=void 0;if(s)for(var P=d.length-1;0<=P;P--){var W=d[P],te=W.instance,Me=W.currentTarget;if(W=W.listener,te!==S&&v.isPropagationStopped())break e;Lm(v,W,Me),S=te}else for(P=0;P<d.length;P++){if(W=d[P],te=W.instance,Me=W.currentTarget,W=W.listener,te!==S&&v.isPropagationStopped())break e;Lm(v,W,Me),S=te}}}if(oi)throw n=$i,oi=!1,$i=null,n}function bn(n,s){var l=s[cf];l===void 0&&(l=s[cf]=new Set);var d=n+"__bubble";l.has(d)||(Nm(s,n,2,!1),l.add(d))}function tf(n,s,l){var d=0;s&&(d|=4),Nm(l,n,d,s)}var Xc="_reactListening"+Math.random().toString(36).slice(2);function $l(n){if(!n[Xc]){n[Xc]=!0,r.forEach(function(l){l!=="selectionchange"&&(M_.has(l)||tf(l,!1,n),tf(l,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[Xc]||(s[Xc]=!0,tf("selectionchange",!1,s))}}function Nm(n,s,l,d){switch(No(s)){case 1:var v=Dc;break;case 4:v=Nc;break;default:v=zs}l=v.bind(null,s,l,n),v=void 0,!zi||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(v=!0),d?v!==void 0?n.addEventListener(s,l,{capture:!0,passive:v}):n.addEventListener(s,l,!0):v!==void 0?n.addEventListener(s,l,{passive:v}):n.addEventListener(s,l,!1)}function nf(n,s,l,d,v){var S=d;if((s&1)===0&&(s&2)===0&&d!==null)e:for(;;){if(d===null)return;var P=d.tag;if(P===3||P===4){var W=d.stateNode.containerInfo;if(W===v||W.nodeType===8&&W.parentNode===v)break;if(P===4)for(P=d.return;P!==null;){var te=P.tag;if((te===3||te===4)&&(te=P.stateNode.containerInfo,te===v||te.nodeType===8&&te.parentNode===v))return;P=P.return}for(;W!==null;){if(P=zo(W),P===null)return;if(te=P.tag,te===5||te===6){d=S=P;continue e}W=W.parentNode}}d=d.return}Fn(function(){var Me=S,ze=Q(l),Ge=[];e:{var Ue=Zs.get(n);if(Ue!==void 0){var pt=xa,xt=n;switch(n){case"keypress":if(Uo(l)===0)break e;case"keydown":case"keyup":pt=Vc;break;case"focusin":xt="focus",pt=Gs;break;case"focusout":xt="blur",pt=Gs;break;case"beforeblur":case"afterblur":pt=Gs;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pt=Hs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pt=Oc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pt=js;break;case Rr:case Ks:case Nn:pt=Ma;break;case Wi:pt=Xs;break;case"scroll":pt=Uc;break;case"wheel":pt=Wc;break;case"copy":case"cut":case"paste":pt=zc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pt=or}var St=(s&4)!==0,$n=!St&&n==="scroll",me=St?Ue!==null?Ue+"Capture":null:Ue;St=[];for(var ce=Me,ve;ce!==null;){ve=ce;var Ze=ve.stateNode;if(ve.tag===5&&Ze!==null&&(ve=Ze,me!==null&&(Ze=Sn(ce,me),Ze!=null&&St.push(Vl(ce,Ze,ve)))),$n)break;ce=ce.return}0<St.length&&(Ue=new pt(Ue,xt,null,l,ze),Ge.push({event:Ue,listeners:St}))}}if((s&7)===0){e:{if(Ue=n==="mouseover"||n==="pointerover",pt=n==="mouseout"||n==="pointerout",Ue&&l!==Ct&&(xt=l.relatedTarget||l.fromElement)&&(zo(xt)||xt[hs]))break e;if((pt||Ue)&&(Ue=ze.window===ze?ze:(Ue=ze.ownerDocument)?Ue.defaultView||Ue.parentWindow:window,pt?(xt=l.relatedTarget||l.toElement,pt=Me,xt=xt?zo(xt):null,xt!==null&&($n=Ii(xt),xt!==$n||xt.tag!==5&&xt.tag!==6)&&(xt=null)):(pt=null,xt=Me),pt!==xt)){if(St=Hs,Ze="onMouseLeave",me="onMouseEnter",ce="mouse",(n==="pointerout"||n==="pointerover")&&(St=or,Ze="onPointerLeave",me="onPointerEnter",ce="pointer"),$n=pt==null?Ue:Ca(pt),ve=xt==null?Ue:Ca(xt),Ue=new St(Ze,ce+"leave",pt,l,ze),Ue.target=$n,Ue.relatedTarget=ve,Ze=null,zo(ze)===Me&&(St=new St(me,ce+"enter",xt,l,ze),St.target=ve,St.relatedTarget=$n,Ze=St),$n=Ze,pt&&xt)t:{for(St=pt,me=xt,ce=0,ve=St;ve;ve=Ea(ve))ce++;for(ve=0,Ze=me;Ze;Ze=Ea(Ze))ve++;for(;0<ce-ve;)St=Ea(St),ce--;for(;0<ve-ce;)me=Ea(me),ve--;for(;ce--;){if(St===me||me!==null&&St===me.alternate)break t;St=Ea(St),me=Ea(me)}St=null}else St=null;pt!==null&&km(Ge,Ue,pt,St,!1),xt!==null&&$n!==null&&km(Ge,$n,xt,St,!0)}}e:{if(Ue=Me?Ca(Me):window,pt=Ue.nodeName&&Ue.nodeName.toLowerCase(),pt==="select"||pt==="input"&&Ue.type==="file")var wt=ye;else if(O(Ue))if(qe)wt=_n;else{wt=mt;var Dt=kt}else(pt=Ue.nodeName)&&pt.toLowerCase()==="input"&&(Ue.type==="checkbox"||Ue.type==="radio")&&(wt=tn);if(wt&&(wt=wt(n,Me))){H(Ge,wt,l,ze);break e}Dt&&Dt(n,Ue,Me),n==="focusout"&&(Dt=Ue._wrapperState)&&Dt.controlled&&Ue.type==="number"&&fn(Ue,"number",Ue.value)}switch(Dt=Me?Ca(Me):window,n){case"focusin":(O(Dt)||Dt.contentEditable==="true")&&(ds=Dt,Ul=Me,Bo=null);break;case"focusout":Bo=Ul=ds=null;break;case"mousedown":Fl=!0;break;case"contextmenu":case"mouseup":case"dragend":Fl=!1,Ol(Ge,l,ze);break;case"selectionchange":if(ba)break;case"keydown":case"keyup":Ol(Ge,l,ze)}var Nt;if(Bn)e:{switch(n){case"compositionstart":var zt="onCompositionStart";break e;case"compositionend":zt="onCompositionEnd";break e;case"compositionupdate":zt="onCompositionUpdate";break e}zt=void 0}else Ys?Dl(n,l)&&(zt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(zt="onCompositionStart");zt&&(Pl&&l.locale!=="ko"&&(Ys||zt!=="onCompositionStart"?zt==="onCompositionEnd"&&Ys&&(Nt=cs()):(Er=ze,ga="value"in Er?Er.value:Er.textContent,Ys=!0)),Dt=Yc(Me,zt),0<Dt.length&&(zt=new Al(zt,n,null,l,ze),Ge.push({event:zt,listeners:Dt}),Nt?zt.data=Nt:(Nt=Nl(l),Nt!==null&&(zt.data=Nt)))),(Nt=Kd?Zd(n,l):Jd(n,l))&&(Me=Yc(Me,"onBeforeInput"),0<Me.length&&(ze=new Al("onBeforeInput","beforeinput",null,l,ze),Ge.push({event:ze,listeners:Me}),ze.data=Nt))}Dm(Ge,s)})}function Vl(n,s,l){return{instance:n,listener:s,currentTarget:l}}function Yc(n,s){for(var l=s+"Capture",d=[];n!==null;){var v=n,S=v.stateNode;v.tag===5&&S!==null&&(v=S,S=Sn(n,l),S!=null&&d.unshift(Vl(n,S,v)),S=Sn(n,s),S!=null&&d.push(Vl(n,S,v))),n=n.return}return d}function Ea(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function km(n,s,l,d,v){for(var S=s._reactName,P=[];l!==null&&l!==d;){var W=l,te=W.alternate,Me=W.stateNode;if(te!==null&&te===d)break;W.tag===5&&Me!==null&&(W=Me,v?(te=Sn(l,S),te!=null&&P.unshift(Vl(l,te,W))):v||(te=Sn(l,S),te!=null&&P.push(Vl(l,te,W)))),l=l.return}P.length!==0&&n.push({event:s,listeners:P})}var b_=/\r\n?/g,w_=/\u0000|\uFFFD/g;function Um(n){return(typeof n=="string"?n:""+n).replace(b_,`
`).replace(w_,"")}function qc(n,s,l){if(s=Um(s),Um(n)!==s&&l)throw Error(t(425))}function Kc(){}var rf=null,sf=null;function of(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var af=typeof setTimeout=="function"?setTimeout:void 0,E_=typeof clearTimeout=="function"?clearTimeout:void 0,Fm=typeof Promise=="function"?Promise:void 0,T_=typeof queueMicrotask=="function"?queueMicrotask:typeof Fm<"u"?function(n){return Fm.resolve(null).then(n).catch(C_)}:af;function C_(n){setTimeout(function(){throw n})}function lf(n,s){var l=s,d=0;do{var v=l.nextSibling;if(n.removeChild(l),v&&v.nodeType===8)if(l=v.data,l==="/$"){if(d===0){n.removeChild(v),Bs(s);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=v}while(l);Bs(s)}function no(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function Om(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return n;s--}else l==="/$"&&s++}n=n.previousSibling}return null}var Ta=Math.random().toString(36).slice(2),Wr="__reactFiber$"+Ta,Hl="__reactProps$"+Ta,hs="__reactContainer$"+Ta,cf="__reactEvents$"+Ta,A_="__reactListeners$"+Ta,R_="__reactHandles$"+Ta;function zo(n){var s=n[Wr];if(s)return s;for(var l=n.parentNode;l;){if(s=l[hs]||l[Wr]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(n=Om(n);n!==null;){if(l=n[Wr])return l;n=Om(n)}return s}n=l,l=n.parentNode}return null}function Gl(n){return n=n[Wr]||n[hs],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ca(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Zc(n){return n[Hl]||null}var uf=[],Aa=-1;function io(n){return{current:n}}function wn(n){0>Aa||(n.current=uf[Aa],uf[Aa]=null,Aa--)}function yn(n,s){Aa++,uf[Aa]=n.current,n.current=s}var ro={},pi=io(ro),Di=io(!1),$o=ro;function Ra(n,s){var l=n.type.contextTypes;if(!l)return ro;var d=n.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var v={},S;for(S in l)v[S]=s[S];return d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=v),v}function Ni(n){return n=n.childContextTypes,n!=null}function Jc(){wn(Di),wn(pi)}function Bm(n,s,l){if(pi.current!==ro)throw Error(t(168));yn(pi,s),yn(Di,l)}function zm(n,s,l){var d=n.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var v in d)if(!(v in s))throw Error(t(108,Ce(n)||"Unknown",v));return oe({},l,d)}function Qc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ro,$o=pi.current,yn(pi,n),yn(Di,Di.current),!0}function $m(n,s,l){var d=n.stateNode;if(!d)throw Error(t(169));l?(n=zm(n,s,$o),d.__reactInternalMemoizedMergedChildContext=n,wn(Di),wn(pi),yn(pi,n)):wn(Di),yn(Di,l)}var ps=null,eu=!1,df=!1;function Vm(n){ps===null?ps=[n]:ps.push(n)}function P_(n){eu=!0,Vm(n)}function so(){if(!df&&ps!==null){df=!0;var n=0,s=At;try{var l=ps;for(At=1;n<l.length;n++){var d=l[n];do d=d(!0);while(d!==null)}ps=null,eu=!1}catch(v){throw ps!==null&&(ps=ps.slice(n+1)),Mr(xe,so),v}finally{At=s,df=!1}}return null}var Pa=[],Ia=0,tu=null,nu=0,lr=[],cr=0,Vo=null,ms=1,gs="";function Ho(n,s){Pa[Ia++]=nu,Pa[Ia++]=tu,tu=n,nu=s}function Hm(n,s,l){lr[cr++]=ms,lr[cr++]=gs,lr[cr++]=Vo,Vo=n;var d=ms;n=gs;var v=32-Ee(d)-1;d&=~(1<<v),l+=1;var S=32-Ee(s)+v;if(30<S){var P=v-v%5;S=(d&(1<<P)-1).toString(32),d>>=P,v-=P,ms=1<<32-Ee(s)+v|l<<v|d,gs=S+n}else ms=1<<S|l<<v|d,gs=n}function ff(n){n.return!==null&&(Ho(n,1),Hm(n,1,0))}function hf(n){for(;n===tu;)tu=Pa[--Ia],Pa[Ia]=null,nu=Pa[--Ia],Pa[Ia]=null;for(;n===Vo;)Vo=lr[--cr],lr[cr]=null,gs=lr[--cr],lr[cr]=null,ms=lr[--cr],lr[cr]=null}var Xi=null,Yi=null,Tn=!1,Pr=null;function Gm(n,s){var l=hr(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=n,s=n.deletions,s===null?(n.deletions=[l],n.flags|=16):s.push(l)}function Wm(n,s){switch(n.tag){case 5:var l=n.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,Xi=n,Yi=no(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,Xi=n,Yi=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=Vo!==null?{id:ms,overflow:gs}:null,n.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=hr(18,null,null,0),l.stateNode=s,l.return=n,n.child=l,Xi=n,Yi=null,!0):!1;default:return!1}}function pf(n){return(n.mode&1)!==0&&(n.flags&128)===0}function mf(n){if(Tn){var s=Yi;if(s){var l=s;if(!Wm(n,s)){if(pf(n))throw Error(t(418));s=no(l.nextSibling);var d=Xi;s&&Wm(n,s)?Gm(d,l):(n.flags=n.flags&-4097|2,Tn=!1,Xi=n)}}else{if(pf(n))throw Error(t(418));n.flags=n.flags&-4097|2,Tn=!1,Xi=n}}}function jm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Xi=n}function iu(n){if(n!==Xi)return!1;if(!Tn)return jm(n),Tn=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!of(n.type,n.memoizedProps)),s&&(s=Yi)){if(pf(n))throw Xm(),Error(t(418));for(;s;)Gm(n,s),s=no(s.nextSibling)}if(jm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(s===0){Yi=no(n.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}n=n.nextSibling}Yi=null}}else Yi=Xi?no(n.stateNode.nextSibling):null;return!0}function Xm(){for(var n=Yi;n;)n=no(n.nextSibling)}function La(){Yi=Xi=null,Tn=!1}function gf(n){Pr===null?Pr=[n]:Pr.push(n)}var I_=I.ReactCurrentBatchConfig;function Wl(n,s,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,n));var v=d,S=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===S?s.ref:(s=function(P){var W=v.refs;P===null?delete W[S]:W[S]=P},s._stringRef=S,s)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function ru(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function Ym(n){var s=n._init;return s(n._payload)}function qm(n){function s(me,ce){if(n){var ve=me.deletions;ve===null?(me.deletions=[ce],me.flags|=16):ve.push(ce)}}function l(me,ce){if(!n)return null;for(;ce!==null;)s(me,ce),ce=ce.sibling;return null}function d(me,ce){for(me=new Map;ce!==null;)ce.key!==null?me.set(ce.key,ce):me.set(ce.index,ce),ce=ce.sibling;return me}function v(me,ce){return me=po(me,ce),me.index=0,me.sibling=null,me}function S(me,ce,ve){return me.index=ve,n?(ve=me.alternate,ve!==null?(ve=ve.index,ve<ce?(me.flags|=2,ce):ve):(me.flags|=2,ce)):(me.flags|=1048576,ce)}function P(me){return n&&me.alternate===null&&(me.flags|=2),me}function W(me,ce,ve,Ze){return ce===null||ce.tag!==6?(ce=ah(ve,me.mode,Ze),ce.return=me,ce):(ce=v(ce,ve),ce.return=me,ce)}function te(me,ce,ve,Ze){var wt=ve.type;return wt===R?ze(me,ce,ve.props.children,Ze,ve.key):ce!==null&&(ce.elementType===wt||typeof wt=="object"&&wt!==null&&wt.$$typeof===ie&&Ym(wt)===ce.type)?(Ze=v(ce,ve.props),Ze.ref=Wl(me,ce,ve),Ze.return=me,Ze):(Ze=Au(ve.type,ve.key,ve.props,null,me.mode,Ze),Ze.ref=Wl(me,ce,ve),Ze.return=me,Ze)}function Me(me,ce,ve,Ze){return ce===null||ce.tag!==4||ce.stateNode.containerInfo!==ve.containerInfo||ce.stateNode.implementation!==ve.implementation?(ce=lh(ve,me.mode,Ze),ce.return=me,ce):(ce=v(ce,ve.children||[]),ce.return=me,ce)}function ze(me,ce,ve,Ze,wt){return ce===null||ce.tag!==7?(ce=Zo(ve,me.mode,Ze,wt),ce.return=me,ce):(ce=v(ce,ve),ce.return=me,ce)}function Ge(me,ce,ve){if(typeof ce=="string"&&ce!==""||typeof ce=="number")return ce=ah(""+ce,me.mode,ve),ce.return=me,ce;if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case $:return ve=Au(ce.type,ce.key,ce.props,null,me.mode,ve),ve.ref=Wl(me,null,ce),ve.return=me,ve;case w:return ce=lh(ce,me.mode,ve),ce.return=me,ce;case ie:var Ze=ce._init;return Ge(me,Ze(ce._payload),ve)}if($t(ce)||X(ce))return ce=Zo(ce,me.mode,ve,null),ce.return=me,ce;ru(me,ce)}return null}function Ue(me,ce,ve,Ze){var wt=ce!==null?ce.key:null;if(typeof ve=="string"&&ve!==""||typeof ve=="number")return wt!==null?null:W(me,ce,""+ve,Ze);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case $:return ve.key===wt?te(me,ce,ve,Ze):null;case w:return ve.key===wt?Me(me,ce,ve,Ze):null;case ie:return wt=ve._init,Ue(me,ce,wt(ve._payload),Ze)}if($t(ve)||X(ve))return wt!==null?null:ze(me,ce,ve,Ze,null);ru(me,ve)}return null}function pt(me,ce,ve,Ze,wt){if(typeof Ze=="string"&&Ze!==""||typeof Ze=="number")return me=me.get(ve)||null,W(ce,me,""+Ze,wt);if(typeof Ze=="object"&&Ze!==null){switch(Ze.$$typeof){case $:return me=me.get(Ze.key===null?ve:Ze.key)||null,te(ce,me,Ze,wt);case w:return me=me.get(Ze.key===null?ve:Ze.key)||null,Me(ce,me,Ze,wt);case ie:var Dt=Ze._init;return pt(me,ce,ve,Dt(Ze._payload),wt)}if($t(Ze)||X(Ze))return me=me.get(ve)||null,ze(ce,me,Ze,wt,null);ru(ce,Ze)}return null}function xt(me,ce,ve,Ze){for(var wt=null,Dt=null,Nt=ce,zt=ce=0,ri=null;Nt!==null&&zt<ve.length;zt++){Nt.index>zt?(ri=Nt,Nt=null):ri=Nt.sibling;var un=Ue(me,Nt,ve[zt],Ze);if(un===null){Nt===null&&(Nt=ri);break}n&&Nt&&un.alternate===null&&s(me,Nt),ce=S(un,ce,zt),Dt===null?wt=un:Dt.sibling=un,Dt=un,Nt=ri}if(zt===ve.length)return l(me,Nt),Tn&&Ho(me,zt),wt;if(Nt===null){for(;zt<ve.length;zt++)Nt=Ge(me,ve[zt],Ze),Nt!==null&&(ce=S(Nt,ce,zt),Dt===null?wt=Nt:Dt.sibling=Nt,Dt=Nt);return Tn&&Ho(me,zt),wt}for(Nt=d(me,Nt);zt<ve.length;zt++)ri=pt(Nt,me,zt,ve[zt],Ze),ri!==null&&(n&&ri.alternate!==null&&Nt.delete(ri.key===null?zt:ri.key),ce=S(ri,ce,zt),Dt===null?wt=ri:Dt.sibling=ri,Dt=ri);return n&&Nt.forEach(function(mo){return s(me,mo)}),Tn&&Ho(me,zt),wt}function St(me,ce,ve,Ze){var wt=X(ve);if(typeof wt!="function")throw Error(t(150));if(ve=wt.call(ve),ve==null)throw Error(t(151));for(var Dt=wt=null,Nt=ce,zt=ce=0,ri=null,un=ve.next();Nt!==null&&!un.done;zt++,un=ve.next()){Nt.index>zt?(ri=Nt,Nt=null):ri=Nt.sibling;var mo=Ue(me,Nt,un.value,Ze);if(mo===null){Nt===null&&(Nt=ri);break}n&&Nt&&mo.alternate===null&&s(me,Nt),ce=S(mo,ce,zt),Dt===null?wt=mo:Dt.sibling=mo,Dt=mo,Nt=ri}if(un.done)return l(me,Nt),Tn&&Ho(me,zt),wt;if(Nt===null){for(;!un.done;zt++,un=ve.next())un=Ge(me,un.value,Ze),un!==null&&(ce=S(un,ce,zt),Dt===null?wt=un:Dt.sibling=un,Dt=un);return Tn&&Ho(me,zt),wt}for(Nt=d(me,Nt);!un.done;zt++,un=ve.next())un=pt(Nt,me,zt,un.value,Ze),un!==null&&(n&&un.alternate!==null&&Nt.delete(un.key===null?zt:un.key),ce=S(un,ce,zt),Dt===null?wt=un:Dt.sibling=un,Dt=un);return n&&Nt.forEach(function(uy){return s(me,uy)}),Tn&&Ho(me,zt),wt}function $n(me,ce,ve,Ze){if(typeof ve=="object"&&ve!==null&&ve.type===R&&ve.key===null&&(ve=ve.props.children),typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case $:e:{for(var wt=ve.key,Dt=ce;Dt!==null;){if(Dt.key===wt){if(wt=ve.type,wt===R){if(Dt.tag===7){l(me,Dt.sibling),ce=v(Dt,ve.props.children),ce.return=me,me=ce;break e}}else if(Dt.elementType===wt||typeof wt=="object"&&wt!==null&&wt.$$typeof===ie&&Ym(wt)===Dt.type){l(me,Dt.sibling),ce=v(Dt,ve.props),ce.ref=Wl(me,Dt,ve),ce.return=me,me=ce;break e}l(me,Dt);break}else s(me,Dt);Dt=Dt.sibling}ve.type===R?(ce=Zo(ve.props.children,me.mode,Ze,ve.key),ce.return=me,me=ce):(Ze=Au(ve.type,ve.key,ve.props,null,me.mode,Ze),Ze.ref=Wl(me,ce,ve),Ze.return=me,me=Ze)}return P(me);case w:e:{for(Dt=ve.key;ce!==null;){if(ce.key===Dt)if(ce.tag===4&&ce.stateNode.containerInfo===ve.containerInfo&&ce.stateNode.implementation===ve.implementation){l(me,ce.sibling),ce=v(ce,ve.children||[]),ce.return=me,me=ce;break e}else{l(me,ce);break}else s(me,ce);ce=ce.sibling}ce=lh(ve,me.mode,Ze),ce.return=me,me=ce}return P(me);case ie:return Dt=ve._init,$n(me,ce,Dt(ve._payload),Ze)}if($t(ve))return xt(me,ce,ve,Ze);if(X(ve))return St(me,ce,ve,Ze);ru(me,ve)}return typeof ve=="string"&&ve!==""||typeof ve=="number"?(ve=""+ve,ce!==null&&ce.tag===6?(l(me,ce.sibling),ce=v(ce,ve),ce.return=me,me=ce):(l(me,ce),ce=ah(ve,me.mode,Ze),ce.return=me,me=ce),P(me)):l(me,ce)}return $n}var Da=qm(!0),Km=qm(!1),su=io(null),ou=null,Na=null,vf=null;function xf(){vf=Na=ou=null}function _f(n){var s=su.current;wn(su),n._currentValue=s}function yf(n,s,l){for(;n!==null;){var d=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),n===l)break;n=n.return}}function ka(n,s){ou=n,vf=Na=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(ki=!0),n.firstContext=null)}function ur(n){var s=n._currentValue;if(vf!==n)if(n={context:n,memoizedValue:s,next:null},Na===null){if(ou===null)throw Error(t(308));Na=n,ou.dependencies={lanes:0,firstContext:n}}else Na=Na.next=n;return s}var Go=null;function Sf(n){Go===null?Go=[n]:Go.push(n)}function Zm(n,s,l,d){var v=s.interleaved;return v===null?(l.next=l,Sf(s)):(l.next=v.next,v.next=l),s.interleaved=l,vs(n,d)}function vs(n,s){n.lanes|=s;var l=n.alternate;for(l!==null&&(l.lanes|=s),l=n,n=n.return;n!==null;)n.childLanes|=s,l=n.alternate,l!==null&&(l.childLanes|=s),l=n,n=n.return;return l.tag===3?l.stateNode:null}var oo=!1;function Mf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jm(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function xs(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function ao(n,s,l){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,(on&2)!==0){var v=d.pending;return v===null?s.next=s:(s.next=v.next,v.next=s),d.pending=s,vs(n,l)}return v=d.interleaved,v===null?(s.next=s,Sf(d)):(s.next=v.next,v.next=s),d.interleaved=s,vs(n,l)}function au(n,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var d=s.lanes;d&=n.pendingLanes,l|=d,s.lanes=l,Ut(n,l)}}function Qm(n,s){var l=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var v=null,S=null;if(l=l.firstBaseUpdate,l!==null){do{var P={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};S===null?v=S=P:S=S.next=P,l=l.next}while(l!==null);S===null?v=S=s:S=S.next=s}else v=S=s;l={baseState:d.baseState,firstBaseUpdate:v,lastBaseUpdate:S,shared:d.shared,effects:d.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=s:n.next=s,l.lastBaseUpdate=s}function lu(n,s,l,d){var v=n.updateQueue;oo=!1;var S=v.firstBaseUpdate,P=v.lastBaseUpdate,W=v.shared.pending;if(W!==null){v.shared.pending=null;var te=W,Me=te.next;te.next=null,P===null?S=Me:P.next=Me,P=te;var ze=n.alternate;ze!==null&&(ze=ze.updateQueue,W=ze.lastBaseUpdate,W!==P&&(W===null?ze.firstBaseUpdate=Me:W.next=Me,ze.lastBaseUpdate=te))}if(S!==null){var Ge=v.baseState;P=0,ze=Me=te=null,W=S;do{var Ue=W.lane,pt=W.eventTime;if((d&Ue)===Ue){ze!==null&&(ze=ze.next={eventTime:pt,lane:0,tag:W.tag,payload:W.payload,callback:W.callback,next:null});e:{var xt=n,St=W;switch(Ue=s,pt=l,St.tag){case 1:if(xt=St.payload,typeof xt=="function"){Ge=xt.call(pt,Ge,Ue);break e}Ge=xt;break e;case 3:xt.flags=xt.flags&-65537|128;case 0:if(xt=St.payload,Ue=typeof xt=="function"?xt.call(pt,Ge,Ue):xt,Ue==null)break e;Ge=oe({},Ge,Ue);break e;case 2:oo=!0}}W.callback!==null&&W.lane!==0&&(n.flags|=64,Ue=v.effects,Ue===null?v.effects=[W]:Ue.push(W))}else pt={eventTime:pt,lane:Ue,tag:W.tag,payload:W.payload,callback:W.callback,next:null},ze===null?(Me=ze=pt,te=Ge):ze=ze.next=pt,P|=Ue;if(W=W.next,W===null){if(W=v.shared.pending,W===null)break;Ue=W,W=Ue.next,Ue.next=null,v.lastBaseUpdate=Ue,v.shared.pending=null}}while(!0);if(ze===null&&(te=Ge),v.baseState=te,v.firstBaseUpdate=Me,v.lastBaseUpdate=ze,s=v.shared.interleaved,s!==null){v=s;do P|=v.lane,v=v.next;while(v!==s)}else S===null&&(v.shared.lanes=0);Xo|=P,n.lanes=P,n.memoizedState=Ge}}function e0(n,s,l){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var d=n[s],v=d.callback;if(v!==null){if(d.callback=null,d=l,typeof v!="function")throw Error(t(191,v));v.call(d)}}}var jl={},jr=io(jl),Xl=io(jl),Yl=io(jl);function Wo(n){if(n===jl)throw Error(t(174));return n}function bf(n,s){switch(yn(Yl,s),yn(Xl,n),yn(jr,jl),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Le(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=Le(s,n)}wn(jr),yn(jr,s)}function Ua(){wn(jr),wn(Xl),wn(Yl)}function t0(n){Wo(Yl.current);var s=Wo(jr.current),l=Le(s,n.type);s!==l&&(yn(Xl,n),yn(jr,l))}function wf(n){Xl.current===n&&(wn(jr),wn(Xl))}var Rn=io(0);function cu(n){for(var s=n;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Ef=[];function Tf(){for(var n=0;n<Ef.length;n++)Ef[n]._workInProgressVersionPrimary=null;Ef.length=0}var uu=I.ReactCurrentDispatcher,Cf=I.ReactCurrentBatchConfig,jo=0,Pn=null,Xn=null,ni=null,du=!1,ql=!1,Kl=0,L_=0;function mi(){throw Error(t(321))}function Af(n,s){if(s===null)return!1;for(var l=0;l<s.length&&l<n.length;l++)if(!Jt(n[l],s[l]))return!1;return!0}function Rf(n,s,l,d,v,S){if(jo=S,Pn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,uu.current=n===null||n.memoizedState===null?U_:F_,n=l(d,v),ql){S=0;do{if(ql=!1,Kl=0,25<=S)throw Error(t(301));S+=1,ni=Xn=null,s.updateQueue=null,uu.current=O_,n=l(d,v)}while(ql)}if(uu.current=pu,s=Xn!==null&&Xn.next!==null,jo=0,ni=Xn=Pn=null,du=!1,s)throw Error(t(300));return n}function Pf(){var n=Kl!==0;return Kl=0,n}function Xr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ni===null?Pn.memoizedState=ni=n:ni=ni.next=n,ni}function dr(){if(Xn===null){var n=Pn.alternate;n=n!==null?n.memoizedState:null}else n=Xn.next;var s=ni===null?Pn.memoizedState:ni.next;if(s!==null)ni=s,Xn=n;else{if(n===null)throw Error(t(310));Xn=n,n={memoizedState:Xn.memoizedState,baseState:Xn.baseState,baseQueue:Xn.baseQueue,queue:Xn.queue,next:null},ni===null?Pn.memoizedState=ni=n:ni=ni.next=n}return ni}function Zl(n,s){return typeof s=="function"?s(n):s}function If(n){var s=dr(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=Xn,v=d.baseQueue,S=l.pending;if(S!==null){if(v!==null){var P=v.next;v.next=S.next,S.next=P}d.baseQueue=v=S,l.pending=null}if(v!==null){S=v.next,d=d.baseState;var W=P=null,te=null,Me=S;do{var ze=Me.lane;if((jo&ze)===ze)te!==null&&(te=te.next={lane:0,action:Me.action,hasEagerState:Me.hasEagerState,eagerState:Me.eagerState,next:null}),d=Me.hasEagerState?Me.eagerState:n(d,Me.action);else{var Ge={lane:ze,action:Me.action,hasEagerState:Me.hasEagerState,eagerState:Me.eagerState,next:null};te===null?(W=te=Ge,P=d):te=te.next=Ge,Pn.lanes|=ze,Xo|=ze}Me=Me.next}while(Me!==null&&Me!==S);te===null?P=d:te.next=W,Jt(d,s.memoizedState)||(ki=!0),s.memoizedState=d,s.baseState=P,s.baseQueue=te,l.lastRenderedState=d}if(n=l.interleaved,n!==null){v=n;do S=v.lane,Pn.lanes|=S,Xo|=S,v=v.next;while(v!==n)}else v===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Lf(n){var s=dr(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=l.dispatch,v=l.pending,S=s.memoizedState;if(v!==null){l.pending=null;var P=v=v.next;do S=n(S,P.action),P=P.next;while(P!==v);Jt(S,s.memoizedState)||(ki=!0),s.memoizedState=S,s.baseQueue===null&&(s.baseState=S),l.lastRenderedState=S}return[S,d]}function n0(){}function i0(n,s){var l=Pn,d=dr(),v=s(),S=!Jt(d.memoizedState,v);if(S&&(d.memoizedState=v,ki=!0),d=d.queue,Df(o0.bind(null,l,d,n),[n]),d.getSnapshot!==s||S||ni!==null&&ni.memoizedState.tag&1){if(l.flags|=2048,Jl(9,s0.bind(null,l,d,v,s),void 0,null),ii===null)throw Error(t(349));(jo&30)!==0||r0(l,s,v)}return v}function r0(n,s,l){n.flags|=16384,n={getSnapshot:s,value:l},s=Pn.updateQueue,s===null?(s={lastEffect:null,stores:null},Pn.updateQueue=s,s.stores=[n]):(l=s.stores,l===null?s.stores=[n]:l.push(n))}function s0(n,s,l,d){s.value=l,s.getSnapshot=d,a0(s)&&l0(n)}function o0(n,s,l){return l(function(){a0(s)&&l0(n)})}function a0(n){var s=n.getSnapshot;n=n.value;try{var l=s();return!Jt(n,l)}catch{return!0}}function l0(n){var s=vs(n,1);s!==null&&Nr(s,n,1,-1)}function c0(n){var s=Xr();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zl,lastRenderedState:n},s.queue=n,n=n.dispatch=k_.bind(null,Pn,n),[s.memoizedState,n]}function Jl(n,s,l,d){return n={tag:n,create:s,destroy:l,deps:d,next:null},s=Pn.updateQueue,s===null?(s={lastEffect:null,stores:null},Pn.updateQueue=s,s.lastEffect=n.next=n):(l=s.lastEffect,l===null?s.lastEffect=n.next=n:(d=l.next,l.next=n,n.next=d,s.lastEffect=n)),n}function u0(){return dr().memoizedState}function fu(n,s,l,d){var v=Xr();Pn.flags|=n,v.memoizedState=Jl(1|s,l,void 0,d===void 0?null:d)}function hu(n,s,l,d){var v=dr();d=d===void 0?null:d;var S=void 0;if(Xn!==null){var P=Xn.memoizedState;if(S=P.destroy,d!==null&&Af(d,P.deps)){v.memoizedState=Jl(s,l,S,d);return}}Pn.flags|=n,v.memoizedState=Jl(1|s,l,S,d)}function d0(n,s){return fu(8390656,8,n,s)}function Df(n,s){return hu(2048,8,n,s)}function f0(n,s){return hu(4,2,n,s)}function h0(n,s){return hu(4,4,n,s)}function p0(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function m0(n,s,l){return l=l!=null?l.concat([n]):null,hu(4,4,p0.bind(null,s,n),l)}function Nf(){}function g0(n,s){var l=dr();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&Af(s,d[1])?d[0]:(l.memoizedState=[n,s],n)}function v0(n,s){var l=dr();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&Af(s,d[1])?d[0]:(n=n(),l.memoizedState=[n,s],n)}function x0(n,s,l){return(jo&21)===0?(n.baseState&&(n.baseState=!1,ki=!0),n.memoizedState=l):(Jt(l,s)||(l=Vt(),Pn.lanes|=l,Xo|=l,n.baseState=!0),s)}function D_(n,s){var l=At;At=l!==0&&4>l?l:4,n(!0);var d=Cf.transition;Cf.transition={};try{n(!1),s()}finally{At=l,Cf.transition=d}}function _0(){return dr().memoizedState}function N_(n,s,l){var d=fo(n);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},y0(n))S0(s,l);else if(l=Zm(n,s,l,d),l!==null){var v=Ti();Nr(l,n,d,v),M0(l,s,d)}}function k_(n,s,l){var d=fo(n),v={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(y0(n))S0(s,v);else{var S=n.alternate;if(n.lanes===0&&(S===null||S.lanes===0)&&(S=s.lastRenderedReducer,S!==null))try{var P=s.lastRenderedState,W=S(P,l);if(v.hasEagerState=!0,v.eagerState=W,Jt(W,P)){var te=s.interleaved;te===null?(v.next=v,Sf(s)):(v.next=te.next,te.next=v),s.interleaved=v;return}}catch{}finally{}l=Zm(n,s,v,d),l!==null&&(v=Ti(),Nr(l,n,d,v),M0(l,s,d))}}function y0(n){var s=n.alternate;return n===Pn||s!==null&&s===Pn}function S0(n,s){ql=du=!0;var l=n.pending;l===null?s.next=s:(s.next=l.next,l.next=s),n.pending=s}function M0(n,s,l){if((l&4194240)!==0){var d=s.lanes;d&=n.pendingLanes,l|=d,s.lanes=l,Ut(n,l)}}var pu={readContext:ur,useCallback:mi,useContext:mi,useEffect:mi,useImperativeHandle:mi,useInsertionEffect:mi,useLayoutEffect:mi,useMemo:mi,useReducer:mi,useRef:mi,useState:mi,useDebugValue:mi,useDeferredValue:mi,useTransition:mi,useMutableSource:mi,useSyncExternalStore:mi,useId:mi,unstable_isNewReconciler:!1},U_={readContext:ur,useCallback:function(n,s){return Xr().memoizedState=[n,s===void 0?null:s],n},useContext:ur,useEffect:d0,useImperativeHandle:function(n,s,l){return l=l!=null?l.concat([n]):null,fu(4194308,4,p0.bind(null,s,n),l)},useLayoutEffect:function(n,s){return fu(4194308,4,n,s)},useInsertionEffect:function(n,s){return fu(4,2,n,s)},useMemo:function(n,s){var l=Xr();return s=s===void 0?null:s,n=n(),l.memoizedState=[n,s],n},useReducer:function(n,s,l){var d=Xr();return s=l!==void 0?l(s):s,d.memoizedState=d.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},d.queue=n,n=n.dispatch=N_.bind(null,Pn,n),[d.memoizedState,n]},useRef:function(n){var s=Xr();return n={current:n},s.memoizedState=n},useState:c0,useDebugValue:Nf,useDeferredValue:function(n){return Xr().memoizedState=n},useTransition:function(){var n=c0(!1),s=n[0];return n=D_.bind(null,n[1]),Xr().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,l){var d=Pn,v=Xr();if(Tn){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),ii===null)throw Error(t(349));(jo&30)!==0||r0(d,s,l)}v.memoizedState=l;var S={value:l,getSnapshot:s};return v.queue=S,d0(o0.bind(null,d,S,n),[n]),d.flags|=2048,Jl(9,s0.bind(null,d,S,l,s),void 0,null),l},useId:function(){var n=Xr(),s=ii.identifierPrefix;if(Tn){var l=gs,d=ms;l=(d&~(1<<32-Ee(d)-1)).toString(32)+l,s=":"+s+"R"+l,l=Kl++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=L_++,s=":"+s+"r"+l.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},F_={readContext:ur,useCallback:g0,useContext:ur,useEffect:Df,useImperativeHandle:m0,useInsertionEffect:f0,useLayoutEffect:h0,useMemo:v0,useReducer:If,useRef:u0,useState:function(){return If(Zl)},useDebugValue:Nf,useDeferredValue:function(n){var s=dr();return x0(s,Xn.memoizedState,n)},useTransition:function(){var n=If(Zl)[0],s=dr().memoizedState;return[n,s]},useMutableSource:n0,useSyncExternalStore:i0,useId:_0,unstable_isNewReconciler:!1},O_={readContext:ur,useCallback:g0,useContext:ur,useEffect:Df,useImperativeHandle:m0,useInsertionEffect:f0,useLayoutEffect:h0,useMemo:v0,useReducer:Lf,useRef:u0,useState:function(){return Lf(Zl)},useDebugValue:Nf,useDeferredValue:function(n){var s=dr();return Xn===null?s.memoizedState=n:x0(s,Xn.memoizedState,n)},useTransition:function(){var n=Lf(Zl)[0],s=dr().memoizedState;return[n,s]},useMutableSource:n0,useSyncExternalStore:i0,useId:_0,unstable_isNewReconciler:!1};function Ir(n,s){if(n&&n.defaultProps){s=oe({},s),n=n.defaultProps;for(var l in n)s[l]===void 0&&(s[l]=n[l]);return s}return s}function kf(n,s,l,d){s=n.memoizedState,l=l(d,s),l=l==null?s:oe({},s,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var mu={isMounted:function(n){return(n=n._reactInternals)?Ii(n)===n:!1},enqueueSetState:function(n,s,l){n=n._reactInternals;var d=Ti(),v=fo(n),S=xs(d,v);S.payload=s,l!=null&&(S.callback=l),s=ao(n,S,v),s!==null&&(Nr(s,n,v,d),au(s,n,v))},enqueueReplaceState:function(n,s,l){n=n._reactInternals;var d=Ti(),v=fo(n),S=xs(d,v);S.tag=1,S.payload=s,l!=null&&(S.callback=l),s=ao(n,S,v),s!==null&&(Nr(s,n,v,d),au(s,n,v))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var l=Ti(),d=fo(n),v=xs(l,d);v.tag=2,s!=null&&(v.callback=s),s=ao(n,v,d),s!==null&&(Nr(s,n,d,l),au(s,n,d))}};function b0(n,s,l,d,v,S,P){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,S,P):s.prototype&&s.prototype.isPureReactComponent?!mn(l,d)||!mn(v,S):!0}function w0(n,s,l){var d=!1,v=ro,S=s.contextType;return typeof S=="object"&&S!==null?S=ur(S):(v=Ni(s)?$o:pi.current,d=s.contextTypes,S=(d=d!=null)?Ra(n,v):ro),s=new s(l,S),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=mu,n.stateNode=s,s._reactInternals=n,d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=v,n.__reactInternalMemoizedMaskedChildContext=S),s}function E0(n,s,l,d){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,d),s.state!==n&&mu.enqueueReplaceState(s,s.state,null)}function Uf(n,s,l,d){var v=n.stateNode;v.props=l,v.state=n.memoizedState,v.refs={},Mf(n);var S=s.contextType;typeof S=="object"&&S!==null?v.context=ur(S):(S=Ni(s)?$o:pi.current,v.context=Ra(n,S)),v.state=n.memoizedState,S=s.getDerivedStateFromProps,typeof S=="function"&&(kf(n,s,S,l),v.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof v.getSnapshotBeforeUpdate=="function"||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(s=v.state,typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount(),s!==v.state&&mu.enqueueReplaceState(v,v.state,null),lu(n,l,v,d),v.state=n.memoizedState),typeof v.componentDidMount=="function"&&(n.flags|=4194308)}function Fa(n,s){try{var l="",d=s;do l+=et(d),d=d.return;while(d);var v=l}catch(S){v=`
Error generating stack: `+S.message+`
`+S.stack}return{value:n,source:s,stack:v,digest:null}}function Ff(n,s,l){return{value:n,source:null,stack:l??null,digest:s??null}}function Of(n,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var B_=typeof WeakMap=="function"?WeakMap:Map;function T0(n,s,l){l=xs(-1,l),l.tag=3,l.payload={element:null};var d=s.value;return l.callback=function(){Mu||(Mu=!0,Qf=d),Of(n,s)},l}function C0(n,s,l){l=xs(-1,l),l.tag=3;var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var v=s.value;l.payload=function(){return d(v)},l.callback=function(){Of(n,s)}}var S=n.stateNode;return S!==null&&typeof S.componentDidCatch=="function"&&(l.callback=function(){Of(n,s),typeof d!="function"&&(co===null?co=new Set([this]):co.add(this));var P=s.stack;this.componentDidCatch(s.value,{componentStack:P!==null?P:""})}),l}function A0(n,s,l){var d=n.pingCache;if(d===null){d=n.pingCache=new B_;var v=new Set;d.set(s,v)}else v=d.get(s),v===void 0&&(v=new Set,d.set(s,v));v.has(l)||(v.add(l),n=Q_.bind(null,n,s,l),s.then(n,n))}function R0(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function P0(n,s,l,d,v){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=xs(-1,1),s.tag=2,ao(l,s,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=v,n)}var z_=I.ReactCurrentOwner,ki=!1;function Ei(n,s,l,d){s.child=n===null?Km(s,null,l,d):Da(s,n.child,l,d)}function I0(n,s,l,d,v){l=l.render;var S=s.ref;return ka(s,v),d=Rf(n,s,l,d,S,v),l=Pf(),n!==null&&!ki?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~v,_s(n,s,v)):(Tn&&l&&ff(s),s.flags|=1,Ei(n,s,d,v),s.child)}function L0(n,s,l,d,v){if(n===null){var S=l.type;return typeof S=="function"&&!oh(S)&&S.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=S,D0(n,s,S,d,v)):(n=Au(l.type,null,d,s,s.mode,v),n.ref=s.ref,n.return=s,s.child=n)}if(S=n.child,(n.lanes&v)===0){var P=S.memoizedProps;if(l=l.compare,l=l!==null?l:mn,l(P,d)&&n.ref===s.ref)return _s(n,s,v)}return s.flags|=1,n=po(S,d),n.ref=s.ref,n.return=s,s.child=n}function D0(n,s,l,d,v){if(n!==null){var S=n.memoizedProps;if(mn(S,d)&&n.ref===s.ref)if(ki=!1,s.pendingProps=d=S,(n.lanes&v)!==0)(n.flags&131072)!==0&&(ki=!0);else return s.lanes=n.lanes,_s(n,s,v)}return Bf(n,s,l,d,v)}function N0(n,s,l){var d=s.pendingProps,v=d.children,S=n!==null?n.memoizedState:null;if(d.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},yn(Ba,qi),qi|=l;else{if((l&1073741824)===0)return n=S!==null?S.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,yn(Ba,qi),qi|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=S!==null?S.baseLanes:l,yn(Ba,qi),qi|=d}else S!==null?(d=S.baseLanes|l,s.memoizedState=null):d=l,yn(Ba,qi),qi|=d;return Ei(n,s,v,l),s.child}function k0(n,s){var l=s.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Bf(n,s,l,d,v){var S=Ni(l)?$o:pi.current;return S=Ra(s,S),ka(s,v),l=Rf(n,s,l,d,S,v),d=Pf(),n!==null&&!ki?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~v,_s(n,s,v)):(Tn&&d&&ff(s),s.flags|=1,Ei(n,s,l,v),s.child)}function U0(n,s,l,d,v){if(Ni(l)){var S=!0;Qc(s)}else S=!1;if(ka(s,v),s.stateNode===null)vu(n,s),w0(s,l,d),Uf(s,l,d,v),d=!0;else if(n===null){var P=s.stateNode,W=s.memoizedProps;P.props=W;var te=P.context,Me=l.contextType;typeof Me=="object"&&Me!==null?Me=ur(Me):(Me=Ni(l)?$o:pi.current,Me=Ra(s,Me));var ze=l.getDerivedStateFromProps,Ge=typeof ze=="function"||typeof P.getSnapshotBeforeUpdate=="function";Ge||typeof P.UNSAFE_componentWillReceiveProps!="function"&&typeof P.componentWillReceiveProps!="function"||(W!==d||te!==Me)&&E0(s,P,d,Me),oo=!1;var Ue=s.memoizedState;P.state=Ue,lu(s,d,P,v),te=s.memoizedState,W!==d||Ue!==te||Di.current||oo?(typeof ze=="function"&&(kf(s,l,ze,d),te=s.memoizedState),(W=oo||b0(s,l,W,d,Ue,te,Me))?(Ge||typeof P.UNSAFE_componentWillMount!="function"&&typeof P.componentWillMount!="function"||(typeof P.componentWillMount=="function"&&P.componentWillMount(),typeof P.UNSAFE_componentWillMount=="function"&&P.UNSAFE_componentWillMount()),typeof P.componentDidMount=="function"&&(s.flags|=4194308)):(typeof P.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=te),P.props=d,P.state=te,P.context=Me,d=W):(typeof P.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{P=s.stateNode,Jm(n,s),W=s.memoizedProps,Me=s.type===s.elementType?W:Ir(s.type,W),P.props=Me,Ge=s.pendingProps,Ue=P.context,te=l.contextType,typeof te=="object"&&te!==null?te=ur(te):(te=Ni(l)?$o:pi.current,te=Ra(s,te));var pt=l.getDerivedStateFromProps;(ze=typeof pt=="function"||typeof P.getSnapshotBeforeUpdate=="function")||typeof P.UNSAFE_componentWillReceiveProps!="function"&&typeof P.componentWillReceiveProps!="function"||(W!==Ge||Ue!==te)&&E0(s,P,d,te),oo=!1,Ue=s.memoizedState,P.state=Ue,lu(s,d,P,v);var xt=s.memoizedState;W!==Ge||Ue!==xt||Di.current||oo?(typeof pt=="function"&&(kf(s,l,pt,d),xt=s.memoizedState),(Me=oo||b0(s,l,Me,d,Ue,xt,te)||!1)?(ze||typeof P.UNSAFE_componentWillUpdate!="function"&&typeof P.componentWillUpdate!="function"||(typeof P.componentWillUpdate=="function"&&P.componentWillUpdate(d,xt,te),typeof P.UNSAFE_componentWillUpdate=="function"&&P.UNSAFE_componentWillUpdate(d,xt,te)),typeof P.componentDidUpdate=="function"&&(s.flags|=4),typeof P.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof P.componentDidUpdate!="function"||W===n.memoizedProps&&Ue===n.memoizedState||(s.flags|=4),typeof P.getSnapshotBeforeUpdate!="function"||W===n.memoizedProps&&Ue===n.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=xt),P.props=d,P.state=xt,P.context=te,d=Me):(typeof P.componentDidUpdate!="function"||W===n.memoizedProps&&Ue===n.memoizedState||(s.flags|=4),typeof P.getSnapshotBeforeUpdate!="function"||W===n.memoizedProps&&Ue===n.memoizedState||(s.flags|=1024),d=!1)}return zf(n,s,l,d,S,v)}function zf(n,s,l,d,v,S){k0(n,s);var P=(s.flags&128)!==0;if(!d&&!P)return v&&$m(s,l,!1),_s(n,s,S);d=s.stateNode,z_.current=s;var W=P&&typeof l.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,n!==null&&P?(s.child=Da(s,n.child,null,S),s.child=Da(s,null,W,S)):Ei(n,s,W,S),s.memoizedState=d.state,v&&$m(s,l,!0),s.child}function F0(n){var s=n.stateNode;s.pendingContext?Bm(n,s.pendingContext,s.pendingContext!==s.context):s.context&&Bm(n,s.context,!1),bf(n,s.containerInfo)}function O0(n,s,l,d,v){return La(),gf(v),s.flags|=256,Ei(n,s,l,d),s.child}var $f={dehydrated:null,treeContext:null,retryLane:0};function Vf(n){return{baseLanes:n,cachePool:null,transitions:null}}function B0(n,s,l){var d=s.pendingProps,v=Rn.current,S=!1,P=(s.flags&128)!==0,W;if((W=P)||(W=n!==null&&n.memoizedState===null?!1:(v&2)!==0),W?(S=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(v|=1),yn(Rn,v&1),n===null)return mf(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(P=d.children,n=d.fallback,S?(d=s.mode,S=s.child,P={mode:"hidden",children:P},(d&1)===0&&S!==null?(S.childLanes=0,S.pendingProps=P):S=Ru(P,d,0,null),n=Zo(n,d,l,null),S.return=s,n.return=s,S.sibling=n,s.child=S,s.child.memoizedState=Vf(l),s.memoizedState=$f,n):Hf(s,P));if(v=n.memoizedState,v!==null&&(W=v.dehydrated,W!==null))return $_(n,s,P,d,W,v,l);if(S){S=d.fallback,P=s.mode,v=n.child,W=v.sibling;var te={mode:"hidden",children:d.children};return(P&1)===0&&s.child!==v?(d=s.child,d.childLanes=0,d.pendingProps=te,s.deletions=null):(d=po(v,te),d.subtreeFlags=v.subtreeFlags&14680064),W!==null?S=po(W,S):(S=Zo(S,P,l,null),S.flags|=2),S.return=s,d.return=s,d.sibling=S,s.child=d,d=S,S=s.child,P=n.child.memoizedState,P=P===null?Vf(l):{baseLanes:P.baseLanes|l,cachePool:null,transitions:P.transitions},S.memoizedState=P,S.childLanes=n.childLanes&~l,s.memoizedState=$f,d}return S=n.child,n=S.sibling,d=po(S,{mode:"visible",children:d.children}),(s.mode&1)===0&&(d.lanes=l),d.return=s,d.sibling=null,n!==null&&(l=s.deletions,l===null?(s.deletions=[n],s.flags|=16):l.push(n)),s.child=d,s.memoizedState=null,d}function Hf(n,s){return s=Ru({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function gu(n,s,l,d){return d!==null&&gf(d),Da(s,n.child,null,l),n=Hf(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function $_(n,s,l,d,v,S,P){if(l)return s.flags&256?(s.flags&=-257,d=Ff(Error(t(422))),gu(n,s,P,d)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(S=d.fallback,v=s.mode,d=Ru({mode:"visible",children:d.children},v,0,null),S=Zo(S,v,P,null),S.flags|=2,d.return=s,S.return=s,d.sibling=S,s.child=d,(s.mode&1)!==0&&Da(s,n.child,null,P),s.child.memoizedState=Vf(P),s.memoizedState=$f,S);if((s.mode&1)===0)return gu(n,s,P,null);if(v.data==="$!"){if(d=v.nextSibling&&v.nextSibling.dataset,d)var W=d.dgst;return d=W,S=Error(t(419)),d=Ff(S,d,void 0),gu(n,s,P,d)}if(W=(P&n.childLanes)!==0,ki||W){if(d=ii,d!==null){switch(P&-P){case 4:v=2;break;case 16:v=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:v=32;break;case 536870912:v=268435456;break;default:v=0}v=(v&(d.suspendedLanes|P))!==0?0:v,v!==0&&v!==S.retryLane&&(S.retryLane=v,vs(n,v),Nr(d,n,v,-1))}return sh(),d=Ff(Error(t(421))),gu(n,s,P,d)}return v.data==="$?"?(s.flags|=128,s.child=n.child,s=ey.bind(null,n),v._reactRetry=s,null):(n=S.treeContext,Yi=no(v.nextSibling),Xi=s,Tn=!0,Pr=null,n!==null&&(lr[cr++]=ms,lr[cr++]=gs,lr[cr++]=Vo,ms=n.id,gs=n.overflow,Vo=s),s=Hf(s,d.children),s.flags|=4096,s)}function z0(n,s,l){n.lanes|=s;var d=n.alternate;d!==null&&(d.lanes|=s),yf(n.return,s,l)}function Gf(n,s,l,d,v){var S=n.memoizedState;S===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:v}:(S.isBackwards=s,S.rendering=null,S.renderingStartTime=0,S.last=d,S.tail=l,S.tailMode=v)}function $0(n,s,l){var d=s.pendingProps,v=d.revealOrder,S=d.tail;if(Ei(n,s,d.children,l),d=Rn.current,(d&2)!==0)d=d&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&z0(n,l,s);else if(n.tag===19)z0(n,l,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}if(yn(Rn,d),(s.mode&1)===0)s.memoizedState=null;else switch(v){case"forwards":for(l=s.child,v=null;l!==null;)n=l.alternate,n!==null&&cu(n)===null&&(v=l),l=l.sibling;l=v,l===null?(v=s.child,s.child=null):(v=l.sibling,l.sibling=null),Gf(s,!1,v,l,S);break;case"backwards":for(l=null,v=s.child,s.child=null;v!==null;){if(n=v.alternate,n!==null&&cu(n)===null){s.child=v;break}n=v.sibling,v.sibling=l,l=v,v=n}Gf(s,!0,l,null,S);break;case"together":Gf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function vu(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function _s(n,s,l){if(n!==null&&(s.dependencies=n.dependencies),Xo|=s.lanes,(l&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,l=po(n,n.pendingProps),s.child=l,l.return=s;n.sibling!==null;)n=n.sibling,l=l.sibling=po(n,n.pendingProps),l.return=s;l.sibling=null}return s.child}function V_(n,s,l){switch(s.tag){case 3:F0(s),La();break;case 5:t0(s);break;case 1:Ni(s.type)&&Qc(s);break;case 4:bf(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,v=s.memoizedProps.value;yn(su,d._currentValue),d._currentValue=v;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(yn(Rn,Rn.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?B0(n,s,l):(yn(Rn,Rn.current&1),n=_s(n,s,l),n!==null?n.sibling:null);yn(Rn,Rn.current&1);break;case 19:if(d=(l&s.childLanes)!==0,(n.flags&128)!==0){if(d)return $0(n,s,l);s.flags|=128}if(v=s.memoizedState,v!==null&&(v.rendering=null,v.tail=null,v.lastEffect=null),yn(Rn,Rn.current),d)break;return null;case 22:case 23:return s.lanes=0,N0(n,s,l)}return _s(n,s,l)}var V0,Wf,H0,G0;V0=function(n,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Wf=function(){},H0=function(n,s,l,d){var v=n.memoizedProps;if(v!==d){n=s.stateNode,Wo(jr.current);var S=null;switch(l){case"input":v=Rt(n,v),d=Rt(n,d),S=[];break;case"select":v=oe({},v,{value:void 0}),d=oe({},d,{value:void 0}),S=[];break;case"textarea":v=ut(n,v),d=ut(n,d),S=[];break;default:typeof v.onClick!="function"&&typeof d.onClick=="function"&&(n.onclick=Kc)}it(l,d);var P;l=null;for(Me in v)if(!d.hasOwnProperty(Me)&&v.hasOwnProperty(Me)&&v[Me]!=null)if(Me==="style"){var W=v[Me];for(P in W)W.hasOwnProperty(P)&&(l||(l={}),l[P]="")}else Me!=="dangerouslySetInnerHTML"&&Me!=="children"&&Me!=="suppressContentEditableWarning"&&Me!=="suppressHydrationWarning"&&Me!=="autoFocus"&&(o.hasOwnProperty(Me)?S||(S=[]):(S=S||[]).push(Me,null));for(Me in d){var te=d[Me];if(W=v!=null?v[Me]:void 0,d.hasOwnProperty(Me)&&te!==W&&(te!=null||W!=null))if(Me==="style")if(W){for(P in W)!W.hasOwnProperty(P)||te&&te.hasOwnProperty(P)||(l||(l={}),l[P]="");for(P in te)te.hasOwnProperty(P)&&W[P]!==te[P]&&(l||(l={}),l[P]=te[P])}else l||(S||(S=[]),S.push(Me,l)),l=te;else Me==="dangerouslySetInnerHTML"?(te=te?te.__html:void 0,W=W?W.__html:void 0,te!=null&&W!==te&&(S=S||[]).push(Me,te)):Me==="children"?typeof te!="string"&&typeof te!="number"||(S=S||[]).push(Me,""+te):Me!=="suppressContentEditableWarning"&&Me!=="suppressHydrationWarning"&&(o.hasOwnProperty(Me)?(te!=null&&Me==="onScroll"&&bn("scroll",n),S||W===te||(S=[])):(S=S||[]).push(Me,te))}l&&(S=S||[]).push("style",l);var Me=S;(s.updateQueue=Me)&&(s.flags|=4)}},G0=function(n,s,l,d){l!==d&&(s.flags|=4)};function Ql(n,s){if(!Tn)switch(n.tailMode){case"hidden":s=n.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function gi(n){var s=n.alternate!==null&&n.alternate.child===n.child,l=0,d=0;if(s)for(var v=n.child;v!==null;)l|=v.lanes|v.childLanes,d|=v.subtreeFlags&14680064,d|=v.flags&14680064,v.return=n,v=v.sibling;else for(v=n.child;v!==null;)l|=v.lanes|v.childLanes,d|=v.subtreeFlags,d|=v.flags,v.return=n,v=v.sibling;return n.subtreeFlags|=d,n.childLanes=l,s}function H_(n,s,l){var d=s.pendingProps;switch(hf(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gi(s),null;case 1:return Ni(s.type)&&Jc(),gi(s),null;case 3:return d=s.stateNode,Ua(),wn(Di),wn(pi),Tf(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(n===null||n.child===null)&&(iu(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Pr!==null&&(nh(Pr),Pr=null))),Wf(n,s),gi(s),null;case 5:wf(s);var v=Wo(Yl.current);if(l=s.type,n!==null&&s.stateNode!=null)H0(n,s,l,d,v),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(t(166));return gi(s),null}if(n=Wo(jr.current),iu(s)){d=s.stateNode,l=s.type;var S=s.memoizedProps;switch(d[Wr]=s,d[Hl]=S,n=(s.mode&1)!==0,l){case"dialog":bn("cancel",d),bn("close",d);break;case"iframe":case"object":case"embed":bn("load",d);break;case"video":case"audio":for(v=0;v<to.length;v++)bn(to[v],d);break;case"source":bn("error",d);break;case"img":case"image":case"link":bn("error",d),bn("load",d);break;case"details":bn("toggle",d);break;case"input":Gt(d,S),bn("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!S.multiple},bn("invalid",d);break;case"textarea":z(d,S),bn("invalid",d)}it(l,S),v=null;for(var P in S)if(S.hasOwnProperty(P)){var W=S[P];P==="children"?typeof W=="string"?d.textContent!==W&&(S.suppressHydrationWarning!==!0&&qc(d.textContent,W,n),v=["children",W]):typeof W=="number"&&d.textContent!==""+W&&(S.suppressHydrationWarning!==!0&&qc(d.textContent,W,n),v=["children",""+W]):o.hasOwnProperty(P)&&W!=null&&P==="onScroll"&&bn("scroll",d)}switch(l){case"input":ot(d),Z(d,S,!0);break;case"textarea":ot(d),re(d);break;case"select":case"option":break;default:typeof S.onClick=="function"&&(d.onclick=Kc)}d=v,s.updateQueue=d,d!==null&&(s.flags|=4)}else{P=v.nodeType===9?v:v.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Ae(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=P.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof d.is=="string"?n=P.createElement(l,{is:d.is}):(n=P.createElement(l),l==="select"&&(P=n,d.multiple?P.multiple=!0:d.size&&(P.size=d.size))):n=P.createElementNS(n,l),n[Wr]=s,n[Hl]=d,V0(n,s,!1,!1),s.stateNode=n;e:{switch(P=tt(l,d),l){case"dialog":bn("cancel",n),bn("close",n),v=d;break;case"iframe":case"object":case"embed":bn("load",n),v=d;break;case"video":case"audio":for(v=0;v<to.length;v++)bn(to[v],n);v=d;break;case"source":bn("error",n),v=d;break;case"img":case"image":case"link":bn("error",n),bn("load",n),v=d;break;case"details":bn("toggle",n),v=d;break;case"input":Gt(n,d),v=Rt(n,d),bn("invalid",n);break;case"option":v=d;break;case"select":n._wrapperState={wasMultiple:!!d.multiple},v=oe({},d,{value:void 0}),bn("invalid",n);break;case"textarea":z(n,d),v=ut(n,d),bn("invalid",n);break;default:v=d}it(l,v),W=v;for(S in W)if(W.hasOwnProperty(S)){var te=W[S];S==="style"?We(n,te):S==="dangerouslySetInnerHTML"?(te=te?te.__html:void 0,te!=null&&st(n,te)):S==="children"?typeof te=="string"?(l!=="textarea"||te!=="")&&He(n,te):typeof te=="number"&&He(n,""+te):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(o.hasOwnProperty(S)?te!=null&&S==="onScroll"&&bn("scroll",n):te!=null&&k(n,S,te,P))}switch(l){case"input":ot(n),Z(n,d,!1);break;case"textarea":ot(n),re(n);break;case"option":d.value!=null&&n.setAttribute("value",""+Te(d.value));break;case"select":n.multiple=!!d.multiple,S=d.value,S!=null?jt(n,!!d.multiple,S,!1):d.defaultValue!=null&&jt(n,!!d.multiple,d.defaultValue,!0);break;default:typeof v.onClick=="function"&&(n.onclick=Kc)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return gi(s),null;case 6:if(n&&s.stateNode!=null)G0(n,s,n.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(t(166));if(l=Wo(Yl.current),Wo(jr.current),iu(s)){if(d=s.stateNode,l=s.memoizedProps,d[Wr]=s,(S=d.nodeValue!==l)&&(n=Xi,n!==null))switch(n.tag){case 3:qc(d.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&qc(d.nodeValue,l,(n.mode&1)!==0)}S&&(s.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[Wr]=s,s.stateNode=d}return gi(s),null;case 13:if(wn(Rn),d=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Tn&&Yi!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Xm(),La(),s.flags|=98560,S=!1;else if(S=iu(s),d!==null&&d.dehydrated!==null){if(n===null){if(!S)throw Error(t(318));if(S=s.memoizedState,S=S!==null?S.dehydrated:null,!S)throw Error(t(317));S[Wr]=s}else La(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;gi(s),S=!1}else Pr!==null&&(nh(Pr),Pr=null),S=!0;if(!S)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(d=d!==null,d!==(n!==null&&n.memoizedState!==null)&&d&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(Rn.current&1)!==0?Yn===0&&(Yn=3):sh())),s.updateQueue!==null&&(s.flags|=4),gi(s),null);case 4:return Ua(),Wf(n,s),n===null&&$l(s.stateNode.containerInfo),gi(s),null;case 10:return _f(s.type._context),gi(s),null;case 17:return Ni(s.type)&&Jc(),gi(s),null;case 19:if(wn(Rn),S=s.memoizedState,S===null)return gi(s),null;if(d=(s.flags&128)!==0,P=S.rendering,P===null)if(d)Ql(S,!1);else{if(Yn!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(P=cu(n),P!==null){for(s.flags|=128,Ql(S,!1),d=P.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=l,l=s.child;l!==null;)S=l,n=d,S.flags&=14680066,P=S.alternate,P===null?(S.childLanes=0,S.lanes=n,S.child=null,S.subtreeFlags=0,S.memoizedProps=null,S.memoizedState=null,S.updateQueue=null,S.dependencies=null,S.stateNode=null):(S.childLanes=P.childLanes,S.lanes=P.lanes,S.child=P.child,S.subtreeFlags=0,S.deletions=null,S.memoizedProps=P.memoizedProps,S.memoizedState=P.memoizedState,S.updateQueue=P.updateQueue,S.type=P.type,n=P.dependencies,S.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return yn(Rn,Rn.current&1|2),s.child}n=n.sibling}S.tail!==null&&D()>za&&(s.flags|=128,d=!0,Ql(S,!1),s.lanes=4194304)}else{if(!d)if(n=cu(P),n!==null){if(s.flags|=128,d=!0,l=n.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Ql(S,!0),S.tail===null&&S.tailMode==="hidden"&&!P.alternate&&!Tn)return gi(s),null}else 2*D()-S.renderingStartTime>za&&l!==1073741824&&(s.flags|=128,d=!0,Ql(S,!1),s.lanes=4194304);S.isBackwards?(P.sibling=s.child,s.child=P):(l=S.last,l!==null?l.sibling=P:s.child=P,S.last=P)}return S.tail!==null?(s=S.tail,S.rendering=s,S.tail=s.sibling,S.renderingStartTime=D(),s.sibling=null,l=Rn.current,yn(Rn,d?l&1|2:l&1),s):(gi(s),null);case 22:case 23:return rh(),d=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==d&&(s.flags|=8192),d&&(s.mode&1)!==0?(qi&1073741824)!==0&&(gi(s),s.subtreeFlags&6&&(s.flags|=8192)):gi(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function G_(n,s){switch(hf(s),s.tag){case 1:return Ni(s.type)&&Jc(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return Ua(),wn(Di),wn(pi),Tf(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return wf(s),null;case 13:if(wn(Rn),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));La()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return wn(Rn),null;case 4:return Ua(),null;case 10:return _f(s.type._context),null;case 22:case 23:return rh(),null;case 24:return null;default:return null}}var xu=!1,vi=!1,W_=typeof WeakSet=="function"?WeakSet:Set,gt=null;function Oa(n,s){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){kn(n,s,d)}else l.current=null}function jf(n,s,l){try{l()}catch(d){kn(n,s,d)}}var W0=!1;function j_(n,s){if(rf=Do,n=Fo(),Oo(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var v=d.anchorOffset,S=d.focusNode;d=d.focusOffset;try{l.nodeType,S.nodeType}catch{l=null;break e}var P=0,W=-1,te=-1,Me=0,ze=0,Ge=n,Ue=null;t:for(;;){for(var pt;Ge!==l||v!==0&&Ge.nodeType!==3||(W=P+v),Ge!==S||d!==0&&Ge.nodeType!==3||(te=P+d),Ge.nodeType===3&&(P+=Ge.nodeValue.length),(pt=Ge.firstChild)!==null;)Ue=Ge,Ge=pt;for(;;){if(Ge===n)break t;if(Ue===l&&++Me===v&&(W=P),Ue===S&&++ze===d&&(te=P),(pt=Ge.nextSibling)!==null)break;Ge=Ue,Ue=Ge.parentNode}Ge=pt}l=W===-1||te===-1?null:{start:W,end:te}}else l=null}l=l||{start:0,end:0}}else l=null;for(sf={focusedElem:n,selectionRange:l},Do=!1,gt=s;gt!==null;)if(s=gt,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,gt=n;else for(;gt!==null;){s=gt;try{var xt=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(xt!==null){var St=xt.memoizedProps,$n=xt.memoizedState,me=s.stateNode,ce=me.getSnapshotBeforeUpdate(s.elementType===s.type?St:Ir(s.type,St),$n);me.__reactInternalSnapshotBeforeUpdate=ce}break;case 3:var ve=s.stateNode.containerInfo;ve.nodeType===1?ve.textContent="":ve.nodeType===9&&ve.documentElement&&ve.removeChild(ve.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ze){kn(s,s.return,Ze)}if(n=s.sibling,n!==null){n.return=s.return,gt=n;break}gt=s.return}return xt=W0,W0=!1,xt}function ec(n,s,l){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var v=d=d.next;do{if((v.tag&n)===n){var S=v.destroy;v.destroy=void 0,S!==void 0&&jf(s,l,S)}v=v.next}while(v!==d)}}function _u(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&n)===n){var d=l.create;l.destroy=d()}l=l.next}while(l!==s)}}function Xf(n){var s=n.ref;if(s!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof s=="function"?s(n):s.current=n}}function j0(n){var s=n.alternate;s!==null&&(n.alternate=null,j0(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[Wr],delete s[Hl],delete s[cf],delete s[A_],delete s[R_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function X0(n){return n.tag===5||n.tag===3||n.tag===4}function Y0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||X0(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Yf(n,s,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(n,s):l.insertBefore(n,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(n,l)):(s=l,s.appendChild(n)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Kc));else if(d!==4&&(n=n.child,n!==null))for(Yf(n,s,l),n=n.sibling;n!==null;)Yf(n,s,l),n=n.sibling}function qf(n,s,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,s?l.insertBefore(n,s):l.appendChild(n);else if(d!==4&&(n=n.child,n!==null))for(qf(n,s,l),n=n.sibling;n!==null;)qf(n,s,l),n=n.sibling}var li=null,Lr=!1;function lo(n,s,l){for(l=l.child;l!==null;)q0(n,s,l),l=l.sibling}function q0(n,s,l){if(le&&typeof le.onCommitFiberUnmount=="function")try{le.onCommitFiberUnmount(q,l)}catch{}switch(l.tag){case 5:vi||Oa(l,s);case 6:var d=li,v=Lr;li=null,lo(n,s,l),li=d,Lr=v,li!==null&&(Lr?(n=li,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):li.removeChild(l.stateNode));break;case 18:li!==null&&(Lr?(n=li,l=l.stateNode,n.nodeType===8?lf(n.parentNode,l):n.nodeType===1&&lf(n,l),Bs(n)):lf(li,l.stateNode));break;case 4:d=li,v=Lr,li=l.stateNode.containerInfo,Lr=!0,lo(n,s,l),li=d,Lr=v;break;case 0:case 11:case 14:case 15:if(!vi&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){v=d=d.next;do{var S=v,P=S.destroy;S=S.tag,P!==void 0&&((S&2)!==0||(S&4)!==0)&&jf(l,s,P),v=v.next}while(v!==d)}lo(n,s,l);break;case 1:if(!vi&&(Oa(l,s),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(W){kn(l,s,W)}lo(n,s,l);break;case 21:lo(n,s,l);break;case 22:l.mode&1?(vi=(d=vi)||l.memoizedState!==null,lo(n,s,l),vi=d):lo(n,s,l);break;default:lo(n,s,l)}}function K0(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new W_),s.forEach(function(d){var v=ty.bind(null,n,d);l.has(d)||(l.add(d),d.then(v,v))})}}function Dr(n,s){var l=s.deletions;if(l!==null)for(var d=0;d<l.length;d++){var v=l[d];try{var S=n,P=s,W=P;e:for(;W!==null;){switch(W.tag){case 5:li=W.stateNode,Lr=!1;break e;case 3:li=W.stateNode.containerInfo,Lr=!0;break e;case 4:li=W.stateNode.containerInfo,Lr=!0;break e}W=W.return}if(li===null)throw Error(t(160));q0(S,P,v),li=null,Lr=!1;var te=v.alternate;te!==null&&(te.return=null),v.return=null}catch(Me){kn(v,s,Me)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Z0(s,n),s=s.sibling}function Z0(n,s){var l=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Dr(s,n),Yr(n),d&4){try{ec(3,n,n.return),_u(3,n)}catch(St){kn(n,n.return,St)}try{ec(5,n,n.return)}catch(St){kn(n,n.return,St)}}break;case 1:Dr(s,n),Yr(n),d&512&&l!==null&&Oa(l,l.return);break;case 5:if(Dr(s,n),Yr(n),d&512&&l!==null&&Oa(l,l.return),n.flags&32){var v=n.stateNode;try{He(v,"")}catch(St){kn(n,n.return,St)}}if(d&4&&(v=n.stateNode,v!=null)){var S=n.memoizedProps,P=l!==null?l.memoizedProps:S,W=n.type,te=n.updateQueue;if(n.updateQueue=null,te!==null)try{W==="input"&&S.type==="radio"&&S.name!=null&&bt(v,S),tt(W,P);var Me=tt(W,S);for(P=0;P<te.length;P+=2){var ze=te[P],Ge=te[P+1];ze==="style"?We(v,Ge):ze==="dangerouslySetInnerHTML"?st(v,Ge):ze==="children"?He(v,Ge):k(v,ze,Ge,Me)}switch(W){case"input":nn(v,S);break;case"textarea":A(v,S);break;case"select":var Ue=v._wrapperState.wasMultiple;v._wrapperState.wasMultiple=!!S.multiple;var pt=S.value;pt!=null?jt(v,!!S.multiple,pt,!1):Ue!==!!S.multiple&&(S.defaultValue!=null?jt(v,!!S.multiple,S.defaultValue,!0):jt(v,!!S.multiple,S.multiple?[]:"",!1))}v[Hl]=S}catch(St){kn(n,n.return,St)}}break;case 6:if(Dr(s,n),Yr(n),d&4){if(n.stateNode===null)throw Error(t(162));v=n.stateNode,S=n.memoizedProps;try{v.nodeValue=S}catch(St){kn(n,n.return,St)}}break;case 3:if(Dr(s,n),Yr(n),d&4&&l!==null&&l.memoizedState.isDehydrated)try{Bs(s.containerInfo)}catch(St){kn(n,n.return,St)}break;case 4:Dr(s,n),Yr(n);break;case 13:Dr(s,n),Yr(n),v=n.child,v.flags&8192&&(S=v.memoizedState!==null,v.stateNode.isHidden=S,!S||v.alternate!==null&&v.alternate.memoizedState!==null||(Jf=D())),d&4&&K0(n);break;case 22:if(ze=l!==null&&l.memoizedState!==null,n.mode&1?(vi=(Me=vi)||ze,Dr(s,n),vi=Me):Dr(s,n),Yr(n),d&8192){if(Me=n.memoizedState!==null,(n.stateNode.isHidden=Me)&&!ze&&(n.mode&1)!==0)for(gt=n,ze=n.child;ze!==null;){for(Ge=gt=ze;gt!==null;){switch(Ue=gt,pt=Ue.child,Ue.tag){case 0:case 11:case 14:case 15:ec(4,Ue,Ue.return);break;case 1:Oa(Ue,Ue.return);var xt=Ue.stateNode;if(typeof xt.componentWillUnmount=="function"){d=Ue,l=Ue.return;try{s=d,xt.props=s.memoizedProps,xt.state=s.memoizedState,xt.componentWillUnmount()}catch(St){kn(d,l,St)}}break;case 5:Oa(Ue,Ue.return);break;case 22:if(Ue.memoizedState!==null){eg(Ge);continue}}pt!==null?(pt.return=Ue,gt=pt):eg(Ge)}ze=ze.sibling}e:for(ze=null,Ge=n;;){if(Ge.tag===5){if(ze===null){ze=Ge;try{v=Ge.stateNode,Me?(S=v.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none"):(W=Ge.stateNode,te=Ge.memoizedProps.style,P=te!=null&&te.hasOwnProperty("display")?te.display:null,W.style.display=ke("display",P))}catch(St){kn(n,n.return,St)}}}else if(Ge.tag===6){if(ze===null)try{Ge.stateNode.nodeValue=Me?"":Ge.memoizedProps}catch(St){kn(n,n.return,St)}}else if((Ge.tag!==22&&Ge.tag!==23||Ge.memoizedState===null||Ge===n)&&Ge.child!==null){Ge.child.return=Ge,Ge=Ge.child;continue}if(Ge===n)break e;for(;Ge.sibling===null;){if(Ge.return===null||Ge.return===n)break e;ze===Ge&&(ze=null),Ge=Ge.return}ze===Ge&&(ze=null),Ge.sibling.return=Ge.return,Ge=Ge.sibling}}break;case 19:Dr(s,n),Yr(n),d&4&&K0(n);break;case 21:break;default:Dr(s,n),Yr(n)}}function Yr(n){var s=n.flags;if(s&2){try{e:{for(var l=n.return;l!==null;){if(X0(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var v=d.stateNode;d.flags&32&&(He(v,""),d.flags&=-33);var S=Y0(n);qf(n,S,v);break;case 3:case 4:var P=d.stateNode.containerInfo,W=Y0(n);Yf(n,W,P);break;default:throw Error(t(161))}}catch(te){kn(n,n.return,te)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function X_(n,s,l){gt=n,J0(n)}function J0(n,s,l){for(var d=(n.mode&1)!==0;gt!==null;){var v=gt,S=v.child;if(v.tag===22&&d){var P=v.memoizedState!==null||xu;if(!P){var W=v.alternate,te=W!==null&&W.memoizedState!==null||vi;W=xu;var Me=vi;if(xu=P,(vi=te)&&!Me)for(gt=v;gt!==null;)P=gt,te=P.child,P.tag===22&&P.memoizedState!==null?tg(v):te!==null?(te.return=P,gt=te):tg(v);for(;S!==null;)gt=S,J0(S),S=S.sibling;gt=v,xu=W,vi=Me}Q0(n)}else(v.subtreeFlags&8772)!==0&&S!==null?(S.return=v,gt=S):Q0(n)}}function Q0(n){for(;gt!==null;){var s=gt;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:vi||_u(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!vi)if(l===null)d.componentDidMount();else{var v=s.elementType===s.type?l.memoizedProps:Ir(s.type,l.memoizedProps);d.componentDidUpdate(v,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var S=s.updateQueue;S!==null&&e0(s,S,d);break;case 3:var P=s.updateQueue;if(P!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}e0(s,P,l)}break;case 5:var W=s.stateNode;if(l===null&&s.flags&4){l=W;var te=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":te.autoFocus&&l.focus();break;case"img":te.src&&(l.src=te.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var Me=s.alternate;if(Me!==null){var ze=Me.memoizedState;if(ze!==null){var Ge=ze.dehydrated;Ge!==null&&Bs(Ge)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}vi||s.flags&512&&Xf(s)}catch(Ue){kn(s,s.return,Ue)}}if(s===n){gt=null;break}if(l=s.sibling,l!==null){l.return=s.return,gt=l;break}gt=s.return}}function eg(n){for(;gt!==null;){var s=gt;if(s===n){gt=null;break}var l=s.sibling;if(l!==null){l.return=s.return,gt=l;break}gt=s.return}}function tg(n){for(;gt!==null;){var s=gt;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{_u(4,s)}catch(te){kn(s,l,te)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var v=s.return;try{d.componentDidMount()}catch(te){kn(s,v,te)}}var S=s.return;try{Xf(s)}catch(te){kn(s,S,te)}break;case 5:var P=s.return;try{Xf(s)}catch(te){kn(s,P,te)}}}catch(te){kn(s,s.return,te)}if(s===n){gt=null;break}var W=s.sibling;if(W!==null){W.return=s.return,gt=W;break}gt=s.return}}var Y_=Math.ceil,yu=I.ReactCurrentDispatcher,Kf=I.ReactCurrentOwner,fr=I.ReactCurrentBatchConfig,on=0,ii=null,Hn=null,ci=0,qi=0,Ba=io(0),Yn=0,tc=null,Xo=0,Su=0,Zf=0,nc=null,Ui=null,Jf=0,za=1/0,ys=null,Mu=!1,Qf=null,co=null,bu=!1,uo=null,wu=0,ic=0,eh=null,Eu=-1,Tu=0;function Ti(){return(on&6)!==0?D():Eu!==-1?Eu:Eu=D()}function fo(n){return(n.mode&1)===0?1:(on&2)!==0&&ci!==0?ci&-ci:I_.transition!==null?(Tu===0&&(Tu=Vt()),Tu):(n=At,n!==0||(n=window.event,n=n===void 0?16:No(n.type)),n)}function Nr(n,s,l,d){if(50<ic)throw ic=0,eh=null,Error(t(185));Dn(n,l,d),((on&2)===0||n!==ii)&&(n===ii&&((on&2)===0&&(Su|=l),Yn===4&&ho(n,ci)),Fi(n,d),l===1&&on===0&&(s.mode&1)===0&&(za=D()+500,eu&&so()))}function Fi(n,s){var l=n.callbackNode;Kt(n,s);var d=yt(n,n===ii?ci:0);if(d===0)l!==null&&Fs(l),n.callbackNode=null,n.callbackPriority=0;else if(s=d&-d,n.callbackPriority!==s){if(l!=null&&Fs(l),s===1)n.tag===0?P_(ig.bind(null,n)):Vm(ig.bind(null,n)),T_(function(){(on&6)===0&&so()}),l=null;else{switch(ti(d)){case 1:l=xe;break;case 4:l=fe;break;case 16:l=he;break;case 536870912:l=V;break;default:l=he}l=dg(l,ng.bind(null,n))}n.callbackPriority=s,n.callbackNode=l}}function ng(n,s){if(Eu=-1,Tu=0,(on&6)!==0)throw Error(t(327));var l=n.callbackNode;if($a()&&n.callbackNode!==l)return null;var d=yt(n,n===ii?ci:0);if(d===0)return null;if((d&30)!==0||(d&n.expiredLanes)!==0||s)s=Cu(n,d);else{s=d;var v=on;on|=2;var S=sg();(ii!==n||ci!==s)&&(ys=null,za=D()+500,qo(n,s));do try{Z_();break}catch(W){rg(n,W)}while(!0);xf(),yu.current=S,on=v,Hn!==null?s=0:(ii=null,ci=0,s=Yn)}if(s!==0){if(s===2&&(v=It(n),v!==0&&(d=v,s=th(n,v))),s===1)throw l=tc,qo(n,0),ho(n,d),Fi(n,D()),l;if(s===6)ho(n,d);else{if(v=n.current.alternate,(d&30)===0&&!q_(v)&&(s=Cu(n,d),s===2&&(S=It(n),S!==0&&(d=S,s=th(n,S))),s===1))throw l=tc,qo(n,0),ho(n,d),Fi(n,D()),l;switch(n.finishedWork=v,n.finishedLanes=d,s){case 0:case 1:throw Error(t(345));case 2:Ko(n,Ui,ys);break;case 3:if(ho(n,d),(d&130023424)===d&&(s=Jf+500-D(),10<s)){if(yt(n,0)!==0)break;if(v=n.suspendedLanes,(v&d)!==d){Ti(),n.pingedLanes|=n.suspendedLanes&v;break}n.timeoutHandle=af(Ko.bind(null,n,Ui,ys),s);break}Ko(n,Ui,ys);break;case 4:if(ho(n,d),(d&4194240)===d)break;for(s=n.eventTimes,v=-1;0<d;){var P=31-Ee(d);S=1<<P,P=s[P],P>v&&(v=P),d&=~S}if(d=v,d=D()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*Y_(d/1960))-d,10<d){n.timeoutHandle=af(Ko.bind(null,n,Ui,ys),d);break}Ko(n,Ui,ys);break;case 5:Ko(n,Ui,ys);break;default:throw Error(t(329))}}}return Fi(n,D()),n.callbackNode===l?ng.bind(null,n):null}function th(n,s){var l=nc;return n.current.memoizedState.isDehydrated&&(qo(n,s).flags|=256),n=Cu(n,s),n!==2&&(s=Ui,Ui=l,s!==null&&nh(s)),n}function nh(n){Ui===null?Ui=n:Ui.push.apply(Ui,n)}function q_(n){for(var s=n;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var v=l[d],S=v.getSnapshot;v=v.value;try{if(!Jt(S(),v))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function ho(n,s){for(s&=~Zf,s&=~Su,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var l=31-Ee(s),d=1<<l;n[l]=-1,s&=~d}}function ig(n){if((on&6)!==0)throw Error(t(327));$a();var s=yt(n,0);if((s&1)===0)return Fi(n,D()),null;var l=Cu(n,s);if(n.tag!==0&&l===2){var d=It(n);d!==0&&(s=d,l=th(n,d))}if(l===1)throw l=tc,qo(n,0),ho(n,s),Fi(n,D()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,Ko(n,Ui,ys),Fi(n,D()),null}function ih(n,s){var l=on;on|=1;try{return n(s)}finally{on=l,on===0&&(za=D()+500,eu&&so())}}function Yo(n){uo!==null&&uo.tag===0&&(on&6)===0&&$a();var s=on;on|=1;var l=fr.transition,d=At;try{if(fr.transition=null,At=1,n)return n()}finally{At=d,fr.transition=l,on=s,(on&6)===0&&so()}}function rh(){qi=Ba.current,wn(Ba)}function qo(n,s){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,E_(l)),Hn!==null)for(l=Hn.return;l!==null;){var d=l;switch(hf(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Jc();break;case 3:Ua(),wn(Di),wn(pi),Tf();break;case 5:wf(d);break;case 4:Ua();break;case 13:wn(Rn);break;case 19:wn(Rn);break;case 10:_f(d.type._context);break;case 22:case 23:rh()}l=l.return}if(ii=n,Hn=n=po(n.current,null),ci=qi=s,Yn=0,tc=null,Zf=Su=Xo=0,Ui=nc=null,Go!==null){for(s=0;s<Go.length;s++)if(l=Go[s],d=l.interleaved,d!==null){l.interleaved=null;var v=d.next,S=l.pending;if(S!==null){var P=S.next;S.next=v,d.next=P}l.pending=d}Go=null}return n}function rg(n,s){do{var l=Hn;try{if(xf(),uu.current=pu,du){for(var d=Pn.memoizedState;d!==null;){var v=d.queue;v!==null&&(v.pending=null),d=d.next}du=!1}if(jo=0,ni=Xn=Pn=null,ql=!1,Kl=0,Kf.current=null,l===null||l.return===null){Yn=1,tc=s,Hn=null;break}e:{var S=n,P=l.return,W=l,te=s;if(s=ci,W.flags|=32768,te!==null&&typeof te=="object"&&typeof te.then=="function"){var Me=te,ze=W,Ge=ze.tag;if((ze.mode&1)===0&&(Ge===0||Ge===11||Ge===15)){var Ue=ze.alternate;Ue?(ze.updateQueue=Ue.updateQueue,ze.memoizedState=Ue.memoizedState,ze.lanes=Ue.lanes):(ze.updateQueue=null,ze.memoizedState=null)}var pt=R0(P);if(pt!==null){pt.flags&=-257,P0(pt,P,W,S,s),pt.mode&1&&A0(S,Me,s),s=pt,te=Me;var xt=s.updateQueue;if(xt===null){var St=new Set;St.add(te),s.updateQueue=St}else xt.add(te);break e}else{if((s&1)===0){A0(S,Me,s),sh();break e}te=Error(t(426))}}else if(Tn&&W.mode&1){var $n=R0(P);if($n!==null){($n.flags&65536)===0&&($n.flags|=256),P0($n,P,W,S,s),gf(Fa(te,W));break e}}S=te=Fa(te,W),Yn!==4&&(Yn=2),nc===null?nc=[S]:nc.push(S),S=P;do{switch(S.tag){case 3:S.flags|=65536,s&=-s,S.lanes|=s;var me=T0(S,te,s);Qm(S,me);break e;case 1:W=te;var ce=S.type,ve=S.stateNode;if((S.flags&128)===0&&(typeof ce.getDerivedStateFromError=="function"||ve!==null&&typeof ve.componentDidCatch=="function"&&(co===null||!co.has(ve)))){S.flags|=65536,s&=-s,S.lanes|=s;var Ze=C0(S,W,s);Qm(S,Ze);break e}}S=S.return}while(S!==null)}ag(l)}catch(wt){s=wt,Hn===l&&l!==null&&(Hn=l=l.return);continue}break}while(!0)}function sg(){var n=yu.current;return yu.current=pu,n===null?pu:n}function sh(){(Yn===0||Yn===3||Yn===2)&&(Yn=4),ii===null||(Xo&268435455)===0&&(Su&268435455)===0||ho(ii,ci)}function Cu(n,s){var l=on;on|=2;var d=sg();(ii!==n||ci!==s)&&(ys=null,qo(n,s));do try{K_();break}catch(v){rg(n,v)}while(!0);if(xf(),on=l,yu.current=d,Hn!==null)throw Error(t(261));return ii=null,ci=0,Yn}function K_(){for(;Hn!==null;)og(Hn)}function Z_(){for(;Hn!==null&&!gn();)og(Hn)}function og(n){var s=ug(n.alternate,n,qi);n.memoizedProps=n.pendingProps,s===null?ag(n):Hn=s,Kf.current=null}function ag(n){var s=n;do{var l=s.alternate;if(n=s.return,(s.flags&32768)===0){if(l=H_(l,s,qi),l!==null){Hn=l;return}}else{if(l=G_(l,s),l!==null){l.flags&=32767,Hn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Yn=6,Hn=null;return}}if(s=s.sibling,s!==null){Hn=s;return}Hn=s=n}while(s!==null);Yn===0&&(Yn=5)}function Ko(n,s,l){var d=At,v=fr.transition;try{fr.transition=null,At=1,J_(n,s,l,d)}finally{fr.transition=v,At=d}return null}function J_(n,s,l,d){do $a();while(uo!==null);if((on&6)!==0)throw Error(t(327));l=n.finishedWork;var v=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var S=l.lanes|l.childLanes;if(Mn(n,S),n===ii&&(Hn=ii=null,ci=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||bu||(bu=!0,dg(he,function(){return $a(),null})),S=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||S){S=fr.transition,fr.transition=null;var P=At;At=1;var W=on;on|=4,Kf.current=null,j_(n,l),Z0(l,n),kl(sf),Do=!!rf,sf=rf=null,n.current=l,X_(l),hn(),on=W,At=P,fr.transition=S}else n.current=l;if(bu&&(bu=!1,uo=n,wu=v),S=n.pendingLanes,S===0&&(co=null),Se(l.stateNode),Fi(n,D()),s!==null)for(d=n.onRecoverableError,l=0;l<s.length;l++)v=s[l],d(v.value,{componentStack:v.stack,digest:v.digest});if(Mu)throw Mu=!1,n=Qf,Qf=null,n;return(wu&1)!==0&&n.tag!==0&&$a(),S=n.pendingLanes,(S&1)!==0?n===eh?ic++:(ic=0,eh=n):ic=0,so(),null}function $a(){if(uo!==null){var n=ti(wu),s=fr.transition,l=At;try{if(fr.transition=null,At=16>n?16:n,uo===null)var d=!1;else{if(n=uo,uo=null,wu=0,(on&6)!==0)throw Error(t(331));var v=on;for(on|=4,gt=n.current;gt!==null;){var S=gt,P=S.child;if((gt.flags&16)!==0){var W=S.deletions;if(W!==null){for(var te=0;te<W.length;te++){var Me=W[te];for(gt=Me;gt!==null;){var ze=gt;switch(ze.tag){case 0:case 11:case 15:ec(8,ze,S)}var Ge=ze.child;if(Ge!==null)Ge.return=ze,gt=Ge;else for(;gt!==null;){ze=gt;var Ue=ze.sibling,pt=ze.return;if(j0(ze),ze===Me){gt=null;break}if(Ue!==null){Ue.return=pt,gt=Ue;break}gt=pt}}}var xt=S.alternate;if(xt!==null){var St=xt.child;if(St!==null){xt.child=null;do{var $n=St.sibling;St.sibling=null,St=$n}while(St!==null)}}gt=S}}if((S.subtreeFlags&2064)!==0&&P!==null)P.return=S,gt=P;else e:for(;gt!==null;){if(S=gt,(S.flags&2048)!==0)switch(S.tag){case 0:case 11:case 15:ec(9,S,S.return)}var me=S.sibling;if(me!==null){me.return=S.return,gt=me;break e}gt=S.return}}var ce=n.current;for(gt=ce;gt!==null;){P=gt;var ve=P.child;if((P.subtreeFlags&2064)!==0&&ve!==null)ve.return=P,gt=ve;else e:for(P=ce;gt!==null;){if(W=gt,(W.flags&2048)!==0)try{switch(W.tag){case 0:case 11:case 15:_u(9,W)}}catch(wt){kn(W,W.return,wt)}if(W===P){gt=null;break e}var Ze=W.sibling;if(Ze!==null){Ze.return=W.return,gt=Ze;break e}gt=W.return}}if(on=v,so(),le&&typeof le.onPostCommitFiberRoot=="function")try{le.onPostCommitFiberRoot(q,n)}catch{}d=!0}return d}finally{At=l,fr.transition=s}}return!1}function lg(n,s,l){s=Fa(l,s),s=T0(n,s,1),n=ao(n,s,1),s=Ti(),n!==null&&(Dn(n,1,s),Fi(n,s))}function kn(n,s,l){if(n.tag===3)lg(n,n,l);else for(;s!==null;){if(s.tag===3){lg(s,n,l);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(co===null||!co.has(d))){n=Fa(l,n),n=C0(s,n,1),s=ao(s,n,1),n=Ti(),s!==null&&(Dn(s,1,n),Fi(s,n));break}}s=s.return}}function Q_(n,s,l){var d=n.pingCache;d!==null&&d.delete(s),s=Ti(),n.pingedLanes|=n.suspendedLanes&l,ii===n&&(ci&l)===l&&(Yn===4||Yn===3&&(ci&130023424)===ci&&500>D()-Jf?qo(n,0):Zf|=l),Fi(n,s)}function cg(n,s){s===0&&((n.mode&1)===0?s=1:(s=dt,dt<<=1,(dt&130023424)===0&&(dt=4194304)));var l=Ti();n=vs(n,s),n!==null&&(Dn(n,s,l),Fi(n,l))}function ey(n){var s=n.memoizedState,l=0;s!==null&&(l=s.retryLane),cg(n,l)}function ty(n,s){var l=0;switch(n.tag){case 13:var d=n.stateNode,v=n.memoizedState;v!==null&&(l=v.retryLane);break;case 19:d=n.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(s),cg(n,l)}var ug;ug=function(n,s,l){if(n!==null)if(n.memoizedProps!==s.pendingProps||Di.current)ki=!0;else{if((n.lanes&l)===0&&(s.flags&128)===0)return ki=!1,V_(n,s,l);ki=(n.flags&131072)!==0}else ki=!1,Tn&&(s.flags&1048576)!==0&&Hm(s,nu,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;vu(n,s),n=s.pendingProps;var v=Ra(s,pi.current);ka(s,l),v=Rf(null,s,d,n,v,l);var S=Pf();return s.flags|=1,typeof v=="object"&&v!==null&&typeof v.render=="function"&&v.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Ni(d)?(S=!0,Qc(s)):S=!1,s.memoizedState=v.state!==null&&v.state!==void 0?v.state:null,Mf(s),v.updater=mu,s.stateNode=v,v._reactInternals=s,Uf(s,d,n,l),s=zf(null,s,d,!0,S,l)):(s.tag=0,Tn&&S&&ff(s),Ei(null,s,v,l),s=s.child),s;case 16:d=s.elementType;e:{switch(vu(n,s),n=s.pendingProps,v=d._init,d=v(d._payload),s.type=d,v=s.tag=iy(d),n=Ir(d,n),v){case 0:s=Bf(null,s,d,n,l);break e;case 1:s=U0(null,s,d,n,l);break e;case 11:s=I0(null,s,d,n,l);break e;case 14:s=L0(null,s,d,Ir(d.type,n),l);break e}throw Error(t(306,d,""))}return s;case 0:return d=s.type,v=s.pendingProps,v=s.elementType===d?v:Ir(d,v),Bf(n,s,d,v,l);case 1:return d=s.type,v=s.pendingProps,v=s.elementType===d?v:Ir(d,v),U0(n,s,d,v,l);case 3:e:{if(F0(s),n===null)throw Error(t(387));d=s.pendingProps,S=s.memoizedState,v=S.element,Jm(n,s),lu(s,d,null,l);var P=s.memoizedState;if(d=P.element,S.isDehydrated)if(S={element:d,isDehydrated:!1,cache:P.cache,pendingSuspenseBoundaries:P.pendingSuspenseBoundaries,transitions:P.transitions},s.updateQueue.baseState=S,s.memoizedState=S,s.flags&256){v=Fa(Error(t(423)),s),s=O0(n,s,d,l,v);break e}else if(d!==v){v=Fa(Error(t(424)),s),s=O0(n,s,d,l,v);break e}else for(Yi=no(s.stateNode.containerInfo.firstChild),Xi=s,Tn=!0,Pr=null,l=Km(s,null,d,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(La(),d===v){s=_s(n,s,l);break e}Ei(n,s,d,l)}s=s.child}return s;case 5:return t0(s),n===null&&mf(s),d=s.type,v=s.pendingProps,S=n!==null?n.memoizedProps:null,P=v.children,of(d,v)?P=null:S!==null&&of(d,S)&&(s.flags|=32),k0(n,s),Ei(n,s,P,l),s.child;case 6:return n===null&&mf(s),null;case 13:return B0(n,s,l);case 4:return bf(s,s.stateNode.containerInfo),d=s.pendingProps,n===null?s.child=Da(s,null,d,l):Ei(n,s,d,l),s.child;case 11:return d=s.type,v=s.pendingProps,v=s.elementType===d?v:Ir(d,v),I0(n,s,d,v,l);case 7:return Ei(n,s,s.pendingProps,l),s.child;case 8:return Ei(n,s,s.pendingProps.children,l),s.child;case 12:return Ei(n,s,s.pendingProps.children,l),s.child;case 10:e:{if(d=s.type._context,v=s.pendingProps,S=s.memoizedProps,P=v.value,yn(su,d._currentValue),d._currentValue=P,S!==null)if(Jt(S.value,P)){if(S.children===v.children&&!Di.current){s=_s(n,s,l);break e}}else for(S=s.child,S!==null&&(S.return=s);S!==null;){var W=S.dependencies;if(W!==null){P=S.child;for(var te=W.firstContext;te!==null;){if(te.context===d){if(S.tag===1){te=xs(-1,l&-l),te.tag=2;var Me=S.updateQueue;if(Me!==null){Me=Me.shared;var ze=Me.pending;ze===null?te.next=te:(te.next=ze.next,ze.next=te),Me.pending=te}}S.lanes|=l,te=S.alternate,te!==null&&(te.lanes|=l),yf(S.return,l,s),W.lanes|=l;break}te=te.next}}else if(S.tag===10)P=S.type===s.type?null:S.child;else if(S.tag===18){if(P=S.return,P===null)throw Error(t(341));P.lanes|=l,W=P.alternate,W!==null&&(W.lanes|=l),yf(P,l,s),P=S.sibling}else P=S.child;if(P!==null)P.return=S;else for(P=S;P!==null;){if(P===s){P=null;break}if(S=P.sibling,S!==null){S.return=P.return,P=S;break}P=P.return}S=P}Ei(n,s,v.children,l),s=s.child}return s;case 9:return v=s.type,d=s.pendingProps.children,ka(s,l),v=ur(v),d=d(v),s.flags|=1,Ei(n,s,d,l),s.child;case 14:return d=s.type,v=Ir(d,s.pendingProps),v=Ir(d.type,v),L0(n,s,d,v,l);case 15:return D0(n,s,s.type,s.pendingProps,l);case 17:return d=s.type,v=s.pendingProps,v=s.elementType===d?v:Ir(d,v),vu(n,s),s.tag=1,Ni(d)?(n=!0,Qc(s)):n=!1,ka(s,l),w0(s,d,v),Uf(s,d,v,l),zf(null,s,d,!0,n,l);case 19:return $0(n,s,l);case 22:return N0(n,s,l)}throw Error(t(156,s.tag))};function dg(n,s){return Mr(n,s)}function ny(n,s,l,d){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hr(n,s,l,d){return new ny(n,s,l,d)}function oh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function iy(n){if(typeof n=="function")return oh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===j)return 11;if(n===se)return 14}return 2}function po(n,s){var l=n.alternate;return l===null?(l=hr(n.tag,s,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=s,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,s=n.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Au(n,s,l,d,v,S){var P=2;if(d=n,typeof n=="function")oh(n)&&(P=1);else if(typeof n=="string")P=5;else e:switch(n){case R:return Zo(l.children,v,S,s);case b:P=8,v|=8;break;case C:return n=hr(12,l,s,v|2),n.elementType=C,n.lanes=S,n;case G:return n=hr(13,l,s,v),n.elementType=G,n.lanes=S,n;case J:return n=hr(19,l,s,v),n.elementType=J,n.lanes=S,n;case K:return Ru(l,v,S,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case B:P=10;break e;case U:P=9;break e;case j:P=11;break e;case se:P=14;break e;case ie:P=16,d=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=hr(P,l,s,v),s.elementType=n,s.type=d,s.lanes=S,s}function Zo(n,s,l,d){return n=hr(7,n,d,s),n.lanes=l,n}function Ru(n,s,l,d){return n=hr(22,n,d,s),n.elementType=K,n.lanes=l,n.stateNode={isHidden:!1},n}function ah(n,s,l){return n=hr(6,n,null,s),n.lanes=l,n}function lh(n,s,l){return s=hr(4,n.children!==null?n.children:[],n.key,s),s.lanes=l,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function ry(n,s,l,d,v){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ln(0),this.expirationTimes=Ln(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ln(0),this.identifierPrefix=d,this.onRecoverableError=v,this.mutableSourceEagerHydrationData=null}function ch(n,s,l,d,v,S,P,W,te){return n=new ry(n,s,l,W,te),s===1?(s=1,S===!0&&(s|=8)):s=0,S=hr(3,null,null,s),n.current=S,S.stateNode=n,S.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mf(S),n}function sy(n,s,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:w,key:d==null?null:""+d,children:n,containerInfo:s,implementation:l}}function fg(n){if(!n)return ro;n=n._reactInternals;e:{if(Ii(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Ni(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Ni(l))return zm(n,l,s)}return s}function hg(n,s,l,d,v,S,P,W,te){return n=ch(l,d,!0,n,v,S,P,W,te),n.context=fg(null),l=n.current,d=Ti(),v=fo(l),S=xs(d,v),S.callback=s??null,ao(l,S,v),n.current.lanes=v,Dn(n,v,d),Fi(n,d),n}function Pu(n,s,l,d){var v=s.current,S=Ti(),P=fo(v);return l=fg(l),s.context===null?s.context=l:s.pendingContext=l,s=xs(S,P),s.payload={element:n},d=d===void 0?null:d,d!==null&&(s.callback=d),n=ao(v,s,P),n!==null&&(Nr(n,v,P,S),au(n,v,P)),P}function Iu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function pg(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<s?l:s}}function uh(n,s){pg(n,s),(n=n.alternate)&&pg(n,s)}function oy(){return null}var mg=typeof reportError=="function"?reportError:function(n){console.error(n)};function dh(n){this._internalRoot=n}Lu.prototype.render=dh.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));Pu(n,s,null,null)},Lu.prototype.unmount=dh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;Yo(function(){Pu(null,n,null,null)}),s[hs]=null}};function Lu(n){this._internalRoot=n}Lu.prototype.unstable_scheduleHydration=function(n){if(n){var s=rr();n={blockedOn:null,target:n,priority:s};for(var l=0;l<Hr.length&&s!==0&&s<Hr[l].priority;l++);Hr.splice(l,0,n),l===0&&Tl(n)}};function fh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Du(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function gg(){}function ay(n,s,l,d,v){if(v){if(typeof d=="function"){var S=d;d=function(){var Me=Iu(P);S.call(Me)}}var P=hg(s,d,n,0,null,!1,!1,"",gg);return n._reactRootContainer=P,n[hs]=P.current,$l(n.nodeType===8?n.parentNode:n),Yo(),P}for(;v=n.lastChild;)n.removeChild(v);if(typeof d=="function"){var W=d;d=function(){var Me=Iu(te);W.call(Me)}}var te=ch(n,0,!1,null,null,!1,!1,"",gg);return n._reactRootContainer=te,n[hs]=te.current,$l(n.nodeType===8?n.parentNode:n),Yo(function(){Pu(s,te,l,d)}),te}function Nu(n,s,l,d,v){var S=l._reactRootContainer;if(S){var P=S;if(typeof v=="function"){var W=v;v=function(){var te=Iu(P);W.call(te)}}Pu(s,P,n,v)}else P=ay(l,s,n,v,d);return Iu(P)}En=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var l=ft(s.pendingLanes);l!==0&&(Ut(s,l|1),Fi(s,D()),(on&6)===0&&(za=D()+500,so()))}break;case 13:Yo(function(){var d=vs(n,1);if(d!==null){var v=Ti();Nr(d,n,1,v)}}),uh(n,1)}},jn=function(n){if(n.tag===13){var s=vs(n,134217728);if(s!==null){var l=Ti();Nr(s,n,134217728,l)}uh(n,134217728)}},Hi=function(n){if(n.tag===13){var s=fo(n),l=vs(n,s);if(l!==null){var d=Ti();Nr(l,n,s,d)}uh(n,s)}},rr=function(){return At},Vr=function(n,s){var l=At;try{return At=n,s()}finally{At=l}},Fe=function(n,s,l){switch(s){case"input":if(nn(n,l),s=l.name,l.type==="radio"&&s!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var d=l[s];if(d!==n&&d.form===n.form){var v=Zc(d);if(!v)throw Error(t(90));cn(d),nn(d,v)}}}break;case"textarea":A(n,l);break;case"select":s=l.value,s!=null&&jt(n,!!l.multiple,s,!1)}},Pt=ih,en=Yo;var ly={usingClientEntryPoint:!1,Events:[Gl,Ca,Zc,be,lt,ih]},rc={findFiberByHostInstance:zo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cy={bundleType:rc.bundleType,version:rc.version,rendererPackageName:rc.rendererPackageName,rendererConfig:rc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:I.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=On(n),n===null?null:n.stateNode},findFiberByHostInstance:rc.findFiberByHostInstance||oy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ku.isDisabled&&ku.supportsFiber)try{q=ku.inject(cy),le=ku}catch{}}return Oi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ly,Oi.createPortal=function(n,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fh(s))throw Error(t(200));return sy(n,s,null,l)},Oi.createRoot=function(n,s){if(!fh(n))throw Error(t(299));var l=!1,d="",v=mg;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=ch(n,1,!1,null,null,l,!1,d,v),n[hs]=s.current,$l(n.nodeType===8?n.parentNode:n),new dh(s)},Oi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=On(s),n=n===null?null:n.stateNode,n},Oi.flushSync=function(n){return Yo(n)},Oi.hydrate=function(n,s,l){if(!Du(s))throw Error(t(200));return Nu(null,n,s,!0,l)},Oi.hydrateRoot=function(n,s,l){if(!fh(n))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,v=!1,S="",P=mg;if(l!=null&&(l.unstable_strictMode===!0&&(v=!0),l.identifierPrefix!==void 0&&(S=l.identifierPrefix),l.onRecoverableError!==void 0&&(P=l.onRecoverableError)),s=hg(s,null,n,1,l??null,v,!1,S,P),n[hs]=s.current,$l(n),d)for(n=0;n<d.length;n++)l=d[n],v=l._getVersion,v=v(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,v]:s.mutableSourceEagerHydrationData.push(l,v);return new Lu(s)},Oi.render=function(n,s,l){if(!Du(s))throw Error(t(200));return Nu(null,n,s,!1,l)},Oi.unmountComponentAtNode=function(n){if(!Du(n))throw Error(t(40));return n._reactRootContainer?(Yo(function(){Nu(null,null,n,!1,function(){n._reactRootContainer=null,n[hs]=null})}),!0):!1},Oi.unstable_batchedUpdates=ih,Oi.unstable_renderSubtreeIntoContainer=function(n,s,l,d){if(!Du(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Nu(n,s,l,!1,d)},Oi.version="18.3.1-next-f1338f8080-20240426",Oi}var wg;function xy(){if(wg)return mh.exports;wg=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),mh.exports=vy(),mh.exports}var Eg;function _y(){if(Eg)return Uu;Eg=1;var i=xy();return Uu.createRoot=i.createRoot,Uu.hydrateRoot=i.hydrateRoot,Uu}var yy=_y();const Sy="modulepreload",My=function(i){return"/"+i},Tg={},dm=function(e,t,r){let o=Promise.resolve();if(t&&t.length>0){let c=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),p=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));o=c(t.map(u=>{if(u=My(u),u in Tg)return;Tg[u]=!0;const h=u.endsWith(".css"),_=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${_}`))return;const g=document.createElement("link");if(g.rel=h?"stylesheet":Sy,h||(g.as="script"),g.crossOrigin="",g.href=u,p&&g.setAttribute("nonce",p),document.head.appendChild(g),h)return new Promise((m,M)=>{g.addEventListener("load",m),g.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${u}`)))})}))}function a(c){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=c,window.dispatchEvent(f),!f.defaultPrevented)throw c}return o.then(c=>{for(const f of c||[])f.status==="rejected"&&a(f.reason);return e().catch(a)})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fm="183",tA={ROTATE:0,DOLLY:1,PAN:2},nA={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},by=0,Cg=1,wy=2,Md=1,Ey=2,pc=3,Po=0,Bi=1,As=2,Is=0,cl=1,Ag=2,Rg=3,Pg=4,Ty=5,oa=100,Cy=101,Ay=102,Ry=103,Py=104,Iy=200,Ly=201,Dy=202,Ny=203,hp=204,pp=205,ky=206,Uy=207,Fy=208,Oy=209,By=210,zy=211,$y=212,Vy=213,Hy=214,mp=0,gp=1,vp=2,fl=3,xp=4,_p=5,yp=6,Sp=7,cx=0,Gy=1,Wy=2,rs=0,ux=1,dx=2,fx=3,hx=4,px=5,mx=6,gx=7,vx=300,ua=301,hl=302,xh=303,_h=304,Bd=306,Mp=1e3,Br=1001,bp=1002,di=1003,jy=1004,Fu=1005,qn=1006,yh=1007,Eo=1008,er=1009,xx=1010,_x=1011,yc=1012,hm=1013,as=1014,ns=1015,Ns=1016,pm=1017,mm=1018,Sc=1020,yx=35902,Sx=35899,Mx=1021,bx=1022,zr=1023,ks=1026,ca=1027,wx=1028,gm=1029,pl=1030,vm=1031,xm=1033,bd=33776,wd=33777,Ed=33778,Td=33779,wp=35840,Ep=35841,Tp=35842,Cp=35843,Ap=36196,Rp=37492,Pp=37496,Ip=37488,Lp=37489,Dp=37490,Np=37491,kp=37808,Up=37809,Fp=37810,Op=37811,Bp=37812,zp=37813,$p=37814,Vp=37815,Hp=37816,Gp=37817,Wp=37818,jp=37819,Xp=37820,Yp=37821,qp=36492,Kp=36494,Zp=36495,Jp=36283,Qp=36284,em=36285,tm=36286,Xy=3200,Ex=0,Yy=1,wo="",xr="srgb",ml="srgb-linear",Id="linear",vn="srgb",Va=7680,Ig=519,qy=512,Ky=513,Zy=514,_m=515,Jy=516,Qy=517,ym=518,e1=519,Lg=35044,Dg="300 es",is=2e3,Mc=2001;function t1(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ld(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function n1(){const i=Ld("canvas");return i.style.display="block",i}const Ng={};function kg(...i){const e="THREE."+i.shift();console.log(e,...i)}function Tx(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ot(...i){i=Tx(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function dn(...i){i=Tx(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Dd(...i){const e=i.join(" ");e in Ng||(Ng[e]=!0,Ot(...i))}function i1(i,e,t){return new Promise(function(r,o){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:r()}}setTimeout(a,t)})}const r1={[mp]:gp,[vp]:yp,[xp]:Sp,[fl]:_p,[gp]:mp,[yp]:vp,[Sp]:xp,[_p]:fl};class fa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const xi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ug=1234567;const ul=Math.PI/180,bc=180/Math.PI;function Sl(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xi[i&255]+xi[i>>8&255]+xi[i>>16&255]+xi[i>>24&255]+"-"+xi[e&255]+xi[e>>8&255]+"-"+xi[e>>16&15|64]+xi[e>>24&255]+"-"+xi[t&63|128]+xi[t>>8&255]+"-"+xi[t>>16&255]+xi[t>>24&255]+xi[r&255]+xi[r>>8&255]+xi[r>>16&255]+xi[r>>24&255]).toLowerCase()}function qt(i,e,t){return Math.max(e,Math.min(t,i))}function Sm(i,e){return(i%e+e)%e}function s1(i,e,t,r,o){return r+(i-e)*(o-r)/(t-e)}function o1(i,e,t){return i!==e?(t-i)/(e-i):0}function vc(i,e,t){return(1-t)*i+t*e}function a1(i,e,t,r){return vc(i,e,1-Math.exp(-t*r))}function l1(i,e=1){return e-Math.abs(Sm(i,e*2)-e)}function c1(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function u1(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function d1(i,e){return i+Math.floor(Math.random()*(e-i+1))}function f1(i,e){return i+Math.random()*(e-i)}function h1(i){return i*(.5-Math.random())}function p1(i){i!==void 0&&(Ug=i);let e=Ug+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function m1(i){return i*ul}function g1(i){return i*bc}function v1(i){return(i&i-1)===0&&i!==0}function x1(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function _1(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function y1(i,e,t,r,o){const a=Math.cos,c=Math.sin,f=a(t/2),p=c(t/2),u=a((e+r)/2),h=c((e+r)/2),_=a((e-r)/2),g=c((e-r)/2),m=a((r-e)/2),M=c((r-e)/2);switch(o){case"XYX":i.set(f*h,p*_,p*g,f*u);break;case"YZY":i.set(p*g,f*h,p*_,f*u);break;case"ZXZ":i.set(p*_,p*g,f*h,f*u);break;case"XZX":i.set(f*h,p*M,p*m,f*u);break;case"YXY":i.set(p*m,f*h,p*M,f*u);break;case"ZYZ":i.set(p*M,p*m,f*h,f*u);break;default:Ot("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function il(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const iA={DEG2RAD:ul,RAD2DEG:bc,generateUUID:Sl,clamp:qt,euclideanModulo:Sm,mapLinear:s1,inverseLerp:o1,lerp:vc,damp:a1,pingpong:l1,smoothstep:c1,smootherstep:u1,randInt:d1,randFloat:f1,randFloatSpread:h1,seededRandom:p1,degToRad:m1,radToDeg:g1,isPowerOfTwo:v1,ceilPowerOfTwo:x1,floorPowerOfTwo:_1,setQuaternionFromProperEuler:y1,normalize:Ci,denormalize:il};class ln{constructor(e=0,t=0){ln.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qt(this.x,e.x,t.x),this.y=qt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qt(this.x,e,t),this.y=qt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(qt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(qt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*r-c*o+e.x,this.y=a*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ml{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,a,c,f){let p=r[o+0],u=r[o+1],h=r[o+2],_=r[o+3],g=a[c+0],m=a[c+1],M=a[c+2],T=a[c+3];if(_!==T||p!==g||u!==m||h!==M){let x=p*g+u*m+h*M+_*T;x<0&&(g=-g,m=-m,M=-M,T=-T,x=-x);let y=1-f;if(x<.9995){const L=Math.acos(x),k=Math.sin(L);y=Math.sin(y*L)/k,f=Math.sin(f*L)/k,p=p*y+g*f,u=u*y+m*f,h=h*y+M*f,_=_*y+T*f}else{p=p*y+g*f,u=u*y+m*f,h=h*y+M*f,_=_*y+T*f;const L=1/Math.sqrt(p*p+u*u+h*h+_*_);p*=L,u*=L,h*=L,_*=L}}e[t]=p,e[t+1]=u,e[t+2]=h,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,o,a,c){const f=r[o],p=r[o+1],u=r[o+2],h=r[o+3],_=a[c],g=a[c+1],m=a[c+2],M=a[c+3];return e[t]=f*M+h*_+p*m-u*g,e[t+1]=p*M+h*g+u*_-f*m,e[t+2]=u*M+h*m+f*g-p*_,e[t+3]=h*M-f*_-p*g-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,a=e._z,c=e._order,f=Math.cos,p=Math.sin,u=f(r/2),h=f(o/2),_=f(a/2),g=p(r/2),m=p(o/2),M=p(a/2);switch(c){case"XYZ":this._x=g*h*_+u*m*M,this._y=u*m*_-g*h*M,this._z=u*h*M+g*m*_,this._w=u*h*_-g*m*M;break;case"YXZ":this._x=g*h*_+u*m*M,this._y=u*m*_-g*h*M,this._z=u*h*M-g*m*_,this._w=u*h*_+g*m*M;break;case"ZXY":this._x=g*h*_-u*m*M,this._y=u*m*_+g*h*M,this._z=u*h*M+g*m*_,this._w=u*h*_-g*m*M;break;case"ZYX":this._x=g*h*_-u*m*M,this._y=u*m*_+g*h*M,this._z=u*h*M-g*m*_,this._w=u*h*_+g*m*M;break;case"YZX":this._x=g*h*_+u*m*M,this._y=u*m*_+g*h*M,this._z=u*h*M-g*m*_,this._w=u*h*_-g*m*M;break;case"XZY":this._x=g*h*_-u*m*M,this._y=u*m*_-g*h*M,this._z=u*h*M+g*m*_,this._w=u*h*_+g*m*M;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],a=t[8],c=t[1],f=t[5],p=t[9],u=t[2],h=t[6],_=t[10],g=r+f+_;if(g>0){const m=.5/Math.sqrt(g+1);this._w=.25/m,this._x=(h-p)*m,this._y=(a-u)*m,this._z=(c-o)*m}else if(r>f&&r>_){const m=2*Math.sqrt(1+r-f-_);this._w=(h-p)/m,this._x=.25*m,this._y=(o+c)/m,this._z=(a+u)/m}else if(f>_){const m=2*Math.sqrt(1+f-r-_);this._w=(a-u)/m,this._x=(o+c)/m,this._y=.25*m,this._z=(p+h)/m}else{const m=2*Math.sqrt(1+_-r-f);this._w=(c-o)/m,this._x=(a+u)/m,this._y=(p+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,a=e._z,c=e._w,f=t._x,p=t._y,u=t._z,h=t._w;return this._x=r*h+c*f+o*u-a*p,this._y=o*h+c*p+a*f-r*u,this._z=a*h+c*u+r*p-o*f,this._w=c*h-r*f-o*p-a*u,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,a=e._z,c=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,a=-a,c=-c,f=-f);let p=1-t;if(f<.9995){const u=Math.acos(f),h=Math.sin(u);p=Math.sin(p*u)/h,t=Math.sin(t*u)/h,this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+a*t,this._w=this._w*p+c*t,this._onChangeCallback()}else this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+a*t,this._w=this._w*p+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class pe{constructor(e=0,t=0,r=0){pe.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*o,this.y=a[1]*t+a[4]*r+a[7]*o,this.z=a[2]*t+a[5]*r+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*r+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*r+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*r+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,a=e.x,c=e.y,f=e.z,p=e.w,u=2*(c*o-f*r),h=2*(f*t-a*o),_=2*(a*r-c*t);return this.x=t+p*u+c*_-f*h,this.y=r+p*h+f*u-a*_,this.z=o+p*_+a*h-c*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*o,this.y=a[1]*t+a[5]*r+a[9]*o,this.z=a[2]*t+a[6]*r+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qt(this.x,e.x,t.x),this.y=qt(this.y,e.y,t.y),this.z=qt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qt(this.x,e,t),this.y=qt(this.y,e,t),this.z=qt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(qt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,a=e.z,c=t.x,f=t.y,p=t.z;return this.x=o*p-a*f,this.y=a*c-r*p,this.z=r*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Sh.copy(this).projectOnVector(e),this.sub(Sh)}reflect(e){return this.sub(Sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(qt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sh=new pe,Fg=new Ml;class Wt{constructor(e,t,r,o,a,c,f,p,u){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,f,p,u)}set(e,t,r,o,a,c,f,p,u){const h=this.elements;return h[0]=e,h[1]=o,h[2]=f,h[3]=t,h[4]=a,h[5]=p,h[6]=r,h[7]=c,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],f=r[3],p=r[6],u=r[1],h=r[4],_=r[7],g=r[2],m=r[5],M=r[8],T=o[0],x=o[3],y=o[6],L=o[1],k=o[4],I=o[7],$=o[2],w=o[5],R=o[8];return a[0]=c*T+f*L+p*$,a[3]=c*x+f*k+p*w,a[6]=c*y+f*I+p*R,a[1]=u*T+h*L+_*$,a[4]=u*x+h*k+_*w,a[7]=u*y+h*I+_*R,a[2]=g*T+m*L+M*$,a[5]=g*x+m*k+M*w,a[8]=g*y+m*I+M*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],f=e[5],p=e[6],u=e[7],h=e[8];return t*c*h-t*f*u-r*a*h+r*f*p+o*a*u-o*c*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],f=e[5],p=e[6],u=e[7],h=e[8],_=h*c-f*u,g=f*p-h*a,m=u*a-c*p,M=t*_+r*g+o*m;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=_*T,e[1]=(o*u-h*r)*T,e[2]=(f*r-o*c)*T,e[3]=g*T,e[4]=(h*t-o*p)*T,e[5]=(o*a-f*t)*T,e[6]=m*T,e[7]=(r*p-u*t)*T,e[8]=(c*t-r*a)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,a,c,f){const p=Math.cos(a),u=Math.sin(a);return this.set(r*p,r*u,-r*(p*c+u*f)+c+e,-o*u,o*p,-o*(-u*c+p*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Mh.makeScale(e,t)),this}rotate(e){return this.premultiply(Mh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mh=new Wt,Og=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bg=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function S1(){const i={enabled:!0,workingColorSpace:ml,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===vn&&(o.r=Ls(o.r),o.g=Ls(o.g),o.b=Ls(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===vn&&(o.r=dl(o.r),o.g=dl(o.g),o.b=dl(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===wo?Id:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return Dd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return Dd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[ml]:{primaries:e,whitePoint:r,transfer:Id,toXYZ:Og,fromXYZ:Bg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xr},outputColorSpaceConfig:{drawingBufferColorSpace:xr}},[xr]:{primaries:e,whitePoint:r,transfer:vn,toXYZ:Og,fromXYZ:Bg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xr}}}),i}const an=S1();function Ls(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function dl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ha;class M1{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ha===void 0&&(Ha=Ld("canvas")),Ha.width=e.width,Ha.height=e.height;const o=Ha.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ha}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ld("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=Ls(a[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Ls(t[r]/255)*255):t[r]=Ls(t[r]);return{data:t,width:e.width,height:e.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let b1=0;class Mm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:b1++}),this.uuid=Sl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?a.push(bh(o[c].image)):a.push(bh(o[c]))}else a=bh(o);r.url=a}return t||(e.images[this.uuid]=r),r}}function bh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?M1.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}let w1=0;const wh=new pe;class yi extends fa{constructor(e=yi.DEFAULT_IMAGE,t=yi.DEFAULT_MAPPING,r=Br,o=Br,a=qn,c=Eo,f=zr,p=er,u=yi.DEFAULT_ANISOTROPY,h=wo){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w1++}),this.uuid=Sl(),this.name="",this.source=new Mm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=u,this.format=f,this.internalFormat=null,this.type=p,this.offset=new ln(0,0),this.repeat=new ln(1,1),this.center=new ln(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(wh).x}get height(){return this.source.getSize(wh).y}get depth(){return this.source.getSize(wh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){Ot(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Ot(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mp:e.x=e.x-Math.floor(e.x);break;case Br:e.x=e.x<0?0:1;break;case bp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mp:e.y=e.y-Math.floor(e.y);break;case Br:e.y=e.y<0?0:1;break;case bp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yi.DEFAULT_IMAGE=null;yi.DEFAULT_MAPPING=vx;yi.DEFAULT_ANISOTROPY=1;class Un{constructor(e=0,t=0,r=0,o=1){Un.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,a;const p=e.elements,u=p[0],h=p[4],_=p[8],g=p[1],m=p[5],M=p[9],T=p[2],x=p[6],y=p[10];if(Math.abs(h-g)<.01&&Math.abs(_-T)<.01&&Math.abs(M-x)<.01){if(Math.abs(h+g)<.1&&Math.abs(_+T)<.1&&Math.abs(M+x)<.1&&Math.abs(u+m+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const k=(u+1)/2,I=(m+1)/2,$=(y+1)/2,w=(h+g)/4,R=(_+T)/4,b=(M+x)/4;return k>I&&k>$?k<.01?(r=0,o=.707106781,a=.707106781):(r=Math.sqrt(k),o=w/r,a=R/r):I>$?I<.01?(r=.707106781,o=0,a=.707106781):(o=Math.sqrt(I),r=w/o,a=b/o):$<.01?(r=.707106781,o=.707106781,a=0):(a=Math.sqrt($),r=R/a,o=b/a),this.set(r,o,a,t),this}let L=Math.sqrt((x-M)*(x-M)+(_-T)*(_-T)+(g-h)*(g-h));return Math.abs(L)<.001&&(L=1),this.x=(x-M)/L,this.y=(_-T)/L,this.z=(g-h)/L,this.w=Math.acos((u+m+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qt(this.x,e.x,t.x),this.y=qt(this.y,e.y,t.y),this.z=qt(this.z,e.z,t.z),this.w=qt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qt(this.x,e,t),this.y=qt(this.y,e,t),this.z=qt(this.z,e,t),this.w=qt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(qt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class E1 extends fa{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Un(0,0,e,t),this.scissorTest=!1,this.viewport=new Un(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},a=new yi(o),c=r.count;for(let f=0;f<c;f++)this.textures[f]=a.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Mm(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends E1{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Cx extends yi{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=di,this.minFilter=di,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class T1 extends yi{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=di,this.minFilter=di,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class In{constructor(e,t,r,o,a,c,f,p,u,h,_,g,m,M,T,x){In.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,f,p,u,h,_,g,m,M,T,x)}set(e,t,r,o,a,c,f,p,u,h,_,g,m,M,T,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=a,y[5]=c,y[9]=f,y[13]=p,y[2]=u,y[6]=h,y[10]=_,y[14]=g,y[3]=m,y[7]=M,y[11]=T,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new In().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Ga.setFromMatrixColumn(e,0).length(),a=1/Ga.setFromMatrixColumn(e,1).length(),c=1/Ga.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,a=e.z,c=Math.cos(r),f=Math.sin(r),p=Math.cos(o),u=Math.sin(o),h=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const g=c*h,m=c*_,M=f*h,T=f*_;t[0]=p*h,t[4]=-p*_,t[8]=u,t[1]=m+M*u,t[5]=g-T*u,t[9]=-f*p,t[2]=T-g*u,t[6]=M+m*u,t[10]=c*p}else if(e.order==="YXZ"){const g=p*h,m=p*_,M=u*h,T=u*_;t[0]=g+T*f,t[4]=M*f-m,t[8]=c*u,t[1]=c*_,t[5]=c*h,t[9]=-f,t[2]=m*f-M,t[6]=T+g*f,t[10]=c*p}else if(e.order==="ZXY"){const g=p*h,m=p*_,M=u*h,T=u*_;t[0]=g-T*f,t[4]=-c*_,t[8]=M+m*f,t[1]=m+M*f,t[5]=c*h,t[9]=T-g*f,t[2]=-c*u,t[6]=f,t[10]=c*p}else if(e.order==="ZYX"){const g=c*h,m=c*_,M=f*h,T=f*_;t[0]=p*h,t[4]=M*u-m,t[8]=g*u+T,t[1]=p*_,t[5]=T*u+g,t[9]=m*u-M,t[2]=-u,t[6]=f*p,t[10]=c*p}else if(e.order==="YZX"){const g=c*p,m=c*u,M=f*p,T=f*u;t[0]=p*h,t[4]=T-g*_,t[8]=M*_+m,t[1]=_,t[5]=c*h,t[9]=-f*h,t[2]=-u*h,t[6]=m*_+M,t[10]=g-T*_}else if(e.order==="XZY"){const g=c*p,m=c*u,M=f*p,T=f*u;t[0]=p*h,t[4]=-_,t[8]=u*h,t[1]=g*_+T,t[5]=c*h,t[9]=m*_-M,t[2]=M*_-m,t[6]=f*h,t[10]=T*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C1,e,A1)}lookAt(e,t,r){const o=this.elements;return Ki.subVectors(e,t),Ki.lengthSq()===0&&(Ki.z=1),Ki.normalize(),go.crossVectors(r,Ki),go.lengthSq()===0&&(Math.abs(r.z)===1?Ki.x+=1e-4:Ki.z+=1e-4,Ki.normalize(),go.crossVectors(r,Ki)),go.normalize(),Ou.crossVectors(Ki,go),o[0]=go.x,o[4]=Ou.x,o[8]=Ki.x,o[1]=go.y,o[5]=Ou.y,o[9]=Ki.y,o[2]=go.z,o[6]=Ou.z,o[10]=Ki.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],f=r[4],p=r[8],u=r[12],h=r[1],_=r[5],g=r[9],m=r[13],M=r[2],T=r[6],x=r[10],y=r[14],L=r[3],k=r[7],I=r[11],$=r[15],w=o[0],R=o[4],b=o[8],C=o[12],B=o[1],U=o[5],j=o[9],G=o[13],J=o[2],se=o[6],ie=o[10],K=o[14],ne=o[3],X=o[7],oe=o[11],F=o[15];return a[0]=c*w+f*B+p*J+u*ne,a[4]=c*R+f*U+p*se+u*X,a[8]=c*b+f*j+p*ie+u*oe,a[12]=c*C+f*G+p*K+u*F,a[1]=h*w+_*B+g*J+m*ne,a[5]=h*R+_*U+g*se+m*X,a[9]=h*b+_*j+g*ie+m*oe,a[13]=h*C+_*G+g*K+m*F,a[2]=M*w+T*B+x*J+y*ne,a[6]=M*R+T*U+x*se+y*X,a[10]=M*b+T*j+x*ie+y*oe,a[14]=M*C+T*G+x*K+y*F,a[3]=L*w+k*B+I*J+$*ne,a[7]=L*R+k*U+I*se+$*X,a[11]=L*b+k*j+I*ie+$*oe,a[15]=L*C+k*G+I*K+$*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[12],c=e[1],f=e[5],p=e[9],u=e[13],h=e[2],_=e[6],g=e[10],m=e[14],M=e[3],T=e[7],x=e[11],y=e[15],L=p*m-u*g,k=f*m-u*_,I=f*g-p*_,$=c*m-u*h,w=c*g-p*h,R=c*_-f*h;return t*(T*L-x*k+y*I)-r*(M*L-x*$+y*w)+o*(M*k-T*$+y*R)-a*(M*I-T*w+x*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],f=e[5],p=e[6],u=e[7],h=e[8],_=e[9],g=e[10],m=e[11],M=e[12],T=e[13],x=e[14],y=e[15],L=t*f-r*c,k=t*p-o*c,I=t*u-a*c,$=r*p-o*f,w=r*u-a*f,R=o*u-a*p,b=h*T-_*M,C=h*x-g*M,B=h*y-m*M,U=_*x-g*T,j=_*y-m*T,G=g*y-m*x,J=L*G-k*j+I*U+$*B-w*C+R*b;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const se=1/J;return e[0]=(f*G-p*j+u*U)*se,e[1]=(o*j-r*G-a*U)*se,e[2]=(T*R-x*w+y*$)*se,e[3]=(g*w-_*R-m*$)*se,e[4]=(p*B-c*G-u*C)*se,e[5]=(t*G-o*B+a*C)*se,e[6]=(x*I-M*R-y*k)*se,e[7]=(h*R-g*I+m*k)*se,e[8]=(c*j-f*B+u*b)*se,e[9]=(r*B-t*j-a*b)*se,e[10]=(M*w-T*I+y*L)*se,e[11]=(_*I-h*w-m*L)*se,e[12]=(f*C-c*U-p*b)*se,e[13]=(t*U-r*C+o*b)*se,e[14]=(T*k-M*$-x*L)*se,e[15]=(h*$-_*k+g*L)*se,this}scale(e){const t=this.elements,r=e.x,o=e.y,a=e.z;return t[0]*=r,t[4]*=o,t[8]*=a,t[1]*=r,t[5]*=o,t[9]*=a,t[2]*=r,t[6]*=o,t[10]*=a,t[3]*=r,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),a=1-r,c=e.x,f=e.y,p=e.z,u=a*c,h=a*f;return this.set(u*c+r,u*f-o*p,u*p+o*f,0,u*f+o*p,h*f+r,h*p-o*c,0,u*p-o*f,h*p+o*c,a*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,a,c){return this.set(1,r,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,a=t._x,c=t._y,f=t._z,p=t._w,u=a+a,h=c+c,_=f+f,g=a*u,m=a*h,M=a*_,T=c*h,x=c*_,y=f*_,L=p*u,k=p*h,I=p*_,$=r.x,w=r.y,R=r.z;return o[0]=(1-(T+y))*$,o[1]=(m+I)*$,o[2]=(M-k)*$,o[3]=0,o[4]=(m-I)*w,o[5]=(1-(g+y))*w,o[6]=(x+L)*w,o[7]=0,o[8]=(M+k)*R,o[9]=(x-L)*R,o[10]=(1-(g+T))*R,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const a=this.determinant();if(a===0)return r.set(1,1,1),t.identity(),this;let c=Ga.set(o[0],o[1],o[2]).length();const f=Ga.set(o[4],o[5],o[6]).length(),p=Ga.set(o[8],o[9],o[10]).length();a<0&&(c=-c),kr.copy(this);const u=1/c,h=1/f,_=1/p;return kr.elements[0]*=u,kr.elements[1]*=u,kr.elements[2]*=u,kr.elements[4]*=h,kr.elements[5]*=h,kr.elements[6]*=h,kr.elements[8]*=_,kr.elements[9]*=_,kr.elements[10]*=_,t.setFromRotationMatrix(kr),r.x=c,r.y=f,r.z=p,this}makePerspective(e,t,r,o,a,c,f=is,p=!1){const u=this.elements,h=2*a/(t-e),_=2*a/(r-o),g=(t+e)/(t-e),m=(r+o)/(r-o);let M,T;if(p)M=a/(c-a),T=c*a/(c-a);else if(f===is)M=-(c+a)/(c-a),T=-2*c*a/(c-a);else if(f===Mc)M=-c/(c-a),T=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return u[0]=h,u[4]=0,u[8]=g,u[12]=0,u[1]=0,u[5]=_,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=M,u[14]=T,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,r,o,a,c,f=is,p=!1){const u=this.elements,h=2/(t-e),_=2/(r-o),g=-(t+e)/(t-e),m=-(r+o)/(r-o);let M,T;if(p)M=1/(c-a),T=c/(c-a);else if(f===is)M=-2/(c-a),T=-(c+a)/(c-a);else if(f===Mc)M=-1/(c-a),T=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return u[0]=h,u[4]=0,u[8]=0,u[12]=g,u[1]=0,u[5]=_,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=M,u[14]=T,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ga=new pe,kr=new In,C1=new pe(0,0,0),A1=new pe(1,1,1),go=new pe,Ou=new pe,Ki=new pe,zg=new In,$g=new Ml;class ls{constructor(e=0,t=0,r=0,o=ls.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,a=o[0],c=o[4],f=o[8],p=o[1],u=o[5],h=o[9],_=o[2],g=o[6],m=o[10];switch(t){case"XYZ":this._y=Math.asin(qt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(g,u),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(f,m),this._z=Math.atan2(p,u)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(qt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,m),this._z=Math.atan2(-c,u)):(this._y=0,this._z=Math.atan2(p,a));break;case"ZYX":this._y=Math.asin(-qt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,m),this._z=Math.atan2(p,a)):(this._x=0,this._z=Math.atan2(-c,u));break;case"YZX":this._z=Math.asin(qt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(f,m));break;case"XZY":this._z=Math.asin(-qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,u),this._y=Math.atan2(f,a)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return zg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zg,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $g.setFromEuler(this),this.setFromQuaternion($g,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ls.DEFAULT_ORDER="XYZ";class Ax{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let R1=0;const Vg=new pe,Wa=new Ml,Ss=new In,Bu=new pe,oc=new pe,P1=new pe,I1=new Ml,Hg=new pe(1,0,0),Gg=new pe(0,1,0),Wg=new pe(0,0,1),jg={type:"added"},L1={type:"removed"},ja={type:"childadded",child:null},Eh={type:"childremoved",child:null};class Kn extends fa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:R1++}),this.uuid=Sl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kn.DEFAULT_UP.clone();const e=new pe,t=new ls,r=new Ml,o=new pe(1,1,1);function a(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new In},normalMatrix:{value:new Wt}}),this.matrix=new In,this.matrixWorld=new In,this.matrixAutoUpdate=Kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ax,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wa.setFromAxisAngle(e,t),this.quaternion.multiply(Wa),this}rotateOnWorldAxis(e,t){return Wa.setFromAxisAngle(e,t),this.quaternion.premultiply(Wa),this}rotateX(e){return this.rotateOnAxis(Hg,e)}rotateY(e){return this.rotateOnAxis(Gg,e)}rotateZ(e){return this.rotateOnAxis(Wg,e)}translateOnAxis(e,t){return Vg.copy(e).applyQuaternion(this.quaternion),this.position.add(Vg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hg,e)}translateY(e){return this.translateOnAxis(Gg,e)}translateZ(e){return this.translateOnAxis(Wg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ss.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Bu.copy(e):Bu.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),oc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ss.lookAt(oc,Bu,this.up):Ss.lookAt(Bu,oc,this.up),this.quaternion.setFromRotationMatrix(Ss),o&&(Ss.extractRotation(o.matrixWorld),Wa.setFromRotationMatrix(Ss),this.quaternion.premultiply(Wa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(dn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jg),ja.child=e,this.dispatchEvent(ja),ja.child=null):dn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(L1),Eh.child=e,this.dispatchEvent(Eh),Eh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ss.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ss.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ss),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jg),ja.child=e,this.dispatchEvent(ja),ja.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oc,e,P1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oc,I1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*r-a[8]*o,a[13]+=r-a[1]*t-a[5]*r-a[9]*o,a[14]+=o-a[2]*t-a[6]*r-a[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let u=0,h=p.length;u<h;u++){const _=p[u];a(e.shapes,_)}else a(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,u=this.material.length;p<u;p++)f.push(a(e.materials,this.material[p]));o.material=f}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(a(e.animations,p))}}if(t){const f=c(e.geometries),p=c(e.materials),u=c(e.textures),h=c(e.images),_=c(e.shapes),g=c(e.skeletons),m=c(e.animations),M=c(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),u.length>0&&(r.textures=u),h.length>0&&(r.images=h),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),m.length>0&&(r.animations=m),M.length>0&&(r.nodes=M)}return r.object=o,r;function c(f){const p=[];for(const u in f){const h=f[u];delete h.metadata,p.push(h)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Kn.DEFAULT_UP=new pe(0,1,0);Kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class zu extends Kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const D1={type:"move"};class Th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new pe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new pe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new pe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new pe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,a=null,c=null;const f=this._targetRay,p=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){c=!0;for(const T of e.hand.values()){const x=t.getJointPose(T,r),y=this._getHandJoint(u,T);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const h=u.joints["index-finger-tip"],_=u.joints["thumb-tip"],g=h.position.distanceTo(_.position),m=.02,M=.005;u.inputState.pinching&&g>m+M?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&g<=m-M&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(p.matrix.fromArray(a.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,a.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(a.linearVelocity)):p.hasLinearVelocity=!1,a.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(a.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&a!==null&&(o=a),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(D1)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=a!==null),u!==null&&(u.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new zu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Rx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vo={h:0,s:0,l:0},$u={h:0,s:0,l:0};function Ch(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class sn{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,an.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=an.workingColorSpace){return this.r=e,this.g=t,this.b=r,an.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=an.workingColorSpace){if(e=Sm(e,1),t=qt(t,0,1),r=qt(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,c=2*r-a;this.r=Ch(c,a,e+1/3),this.g=Ch(c,a,e),this.b=Ch(c,a,e-1/3)}return an.colorSpaceToWorking(this,o),this}setStyle(e,t=xr){function r(a){a!==void 0&&parseFloat(a)<1&&Ot("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ot("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);Ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xr){const r=Rx[e.toLowerCase()];return r!==void 0?this.setHex(r,t):Ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}copyLinearToSRGB(e){return this.r=dl(e.r),this.g=dl(e.g),this.b=dl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xr){return an.workingToColorSpace(_i.copy(this),e),Math.round(qt(_i.r*255,0,255))*65536+Math.round(qt(_i.g*255,0,255))*256+Math.round(qt(_i.b*255,0,255))}getHexString(e=xr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=an.workingColorSpace){an.workingToColorSpace(_i.copy(this),t);const r=_i.r,o=_i.g,a=_i.b,c=Math.max(r,o,a),f=Math.min(r,o,a);let p,u;const h=(f+c)/2;if(f===c)p=0,u=0;else{const _=c-f;switch(u=h<=.5?_/(c+f):_/(2-c-f),c){case r:p=(o-a)/_+(o<a?6:0);break;case o:p=(a-r)/_+2;break;case a:p=(r-o)/_+4;break}p/=6}return e.h=p,e.s=u,e.l=h,e}getRGB(e,t=an.workingColorSpace){return an.workingToColorSpace(_i.copy(this),t),e.r=_i.r,e.g=_i.g,e.b=_i.b,e}getStyle(e=xr){an.workingToColorSpace(_i.copy(this),e);const t=_i.r,r=_i.g,o=_i.b;return e!==xr?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(vo),this.setHSL(vo.h+e,vo.s+t,vo.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(vo),e.getHSL($u);const r=vc(vo.h,$u.h,t),o=vc(vo.s,$u.s,t),a=vc(vo.l,$u.l,t);return this.setHSL(r,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*o,this.g=a[1]*t+a[4]*r+a[7]*o,this.b=a[2]*t+a[5]*r+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _i=new sn;sn.NAMES=Rx;class Px extends Kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ls,this.environmentIntensity=1,this.environmentRotation=new ls,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ur=new pe,Ms=new pe,Ah=new pe,bs=new pe,Xa=new pe,Ya=new pe,Xg=new pe,Rh=new pe,Ph=new pe,Ih=new pe,Lh=new Un,Dh=new Un,Nh=new Un;class _r{constructor(e=new pe,t=new pe,r=new pe){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ur.subVectors(e,t),o.cross(Ur);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,r,o,a){Ur.subVectors(o,t),Ms.subVectors(r,t),Ah.subVectors(e,t);const c=Ur.dot(Ur),f=Ur.dot(Ms),p=Ur.dot(Ah),u=Ms.dot(Ms),h=Ms.dot(Ah),_=c*u-f*f;if(_===0)return a.set(0,0,0),null;const g=1/_,m=(u*p-f*h)*g,M=(c*h-f*p)*g;return a.set(1-m-M,M,m)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,bs)===null?!1:bs.x>=0&&bs.y>=0&&bs.x+bs.y<=1}static getInterpolation(e,t,r,o,a,c,f,p){return this.getBarycoord(e,t,r,o,bs)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(a,bs.x),p.addScaledVector(c,bs.y),p.addScaledVector(f,bs.z),p)}static getInterpolatedAttribute(e,t,r,o,a,c){return Lh.setScalar(0),Dh.setScalar(0),Nh.setScalar(0),Lh.fromBufferAttribute(e,t),Dh.fromBufferAttribute(e,r),Nh.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Lh,a.x),c.addScaledVector(Dh,a.y),c.addScaledVector(Nh,a.z),c}static isFrontFacing(e,t,r,o){return Ur.subVectors(r,t),Ms.subVectors(e,t),Ur.cross(Ms).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ur.subVectors(this.c,this.b),Ms.subVectors(this.a,this.b),Ur.cross(Ms).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,a){return _r.getInterpolation(e,this.a,this.b,this.c,t,r,o,a)}containsPoint(e){return _r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,a=this.c;let c,f;Xa.subVectors(o,r),Ya.subVectors(a,r),Rh.subVectors(e,r);const p=Xa.dot(Rh),u=Ya.dot(Rh);if(p<=0&&u<=0)return t.copy(r);Ph.subVectors(e,o);const h=Xa.dot(Ph),_=Ya.dot(Ph);if(h>=0&&_<=h)return t.copy(o);const g=p*_-h*u;if(g<=0&&p>=0&&h<=0)return c=p/(p-h),t.copy(r).addScaledVector(Xa,c);Ih.subVectors(e,a);const m=Xa.dot(Ih),M=Ya.dot(Ih);if(M>=0&&m<=M)return t.copy(a);const T=m*u-p*M;if(T<=0&&u>=0&&M<=0)return f=u/(u-M),t.copy(r).addScaledVector(Ya,f);const x=h*M-m*_;if(x<=0&&_-h>=0&&m-M>=0)return Xg.subVectors(a,o),f=(_-h)/(_-h+(m-M)),t.copy(o).addScaledVector(Xg,f);const y=1/(x+T+g);return c=T*y,f=g*y,t.copy(r).addScaledVector(Xa,c).addScaledVector(Ya,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Cc{constructor(e=new pe(1/0,1/0,1/0),t=new pe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Fr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Fr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Fr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=a.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,Fr):Fr.fromBufferAttribute(a,c),Fr.applyMatrix4(e.matrixWorld),this.expandByPoint(Fr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Vu.copy(r.boundingBox)),Vu.applyMatrix4(e.matrixWorld),this.union(Vu)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fr),Fr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ac),Hu.subVectors(this.max,ac),qa.subVectors(e.a,ac),Ka.subVectors(e.b,ac),Za.subVectors(e.c,ac),xo.subVectors(Ka,qa),_o.subVectors(Za,Ka),Jo.subVectors(qa,Za);let t=[0,-xo.z,xo.y,0,-_o.z,_o.y,0,-Jo.z,Jo.y,xo.z,0,-xo.x,_o.z,0,-_o.x,Jo.z,0,-Jo.x,-xo.y,xo.x,0,-_o.y,_o.x,0,-Jo.y,Jo.x,0];return!kh(t,qa,Ka,Za,Hu)||(t=[1,0,0,0,1,0,0,0,1],!kh(t,qa,Ka,Za,Hu))?!1:(Gu.crossVectors(xo,_o),t=[Gu.x,Gu.y,Gu.z],kh(t,qa,Ka,Za,Hu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ws[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ws[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ws[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ws[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ws[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ws[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ws[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ws[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ws),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ws=[new pe,new pe,new pe,new pe,new pe,new pe,new pe,new pe],Fr=new pe,Vu=new Cc,qa=new pe,Ka=new pe,Za=new pe,xo=new pe,_o=new pe,Jo=new pe,ac=new pe,Hu=new pe,Gu=new pe,Qo=new pe;function kh(i,e,t,r,o){for(let a=0,c=i.length-3;a<=c;a+=3){Qo.fromArray(i,a);const f=o.x*Math.abs(Qo.x)+o.y*Math.abs(Qo.y)+o.z*Math.abs(Qo.z),p=e.dot(Qo),u=t.dot(Qo),h=r.dot(Qo);if(Math.max(-Math.max(p,u,h),Math.min(p,u,h))>f)return!1}return!0}const Rs=N1();function N1(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),r=new Uint32Array(512),o=new Uint32Array(512);for(let p=0;p<256;++p){const u=p-127;u<-27?(r[p]=0,r[p|256]=32768,o[p]=24,o[p|256]=24):u<-14?(r[p]=1024>>-u-14,r[p|256]=1024>>-u-14|32768,o[p]=-u-1,o[p|256]=-u-1):u<=15?(r[p]=u+15<<10,r[p|256]=u+15<<10|32768,o[p]=13,o[p|256]=13):u<128?(r[p]=31744,r[p|256]=64512,o[p]=24,o[p|256]=24):(r[p]=31744,r[p|256]=64512,o[p]=13,o[p|256]=13)}const a=new Uint32Array(2048),c=new Uint32Array(64),f=new Uint32Array(64);for(let p=1;p<1024;++p){let u=p<<13,h=0;for(;(u&8388608)===0;)u<<=1,h-=8388608;u&=-8388609,h+=947912704,a[p]=u|h}for(let p=1024;p<2048;++p)a[p]=939524096+(p-1024<<13);for(let p=1;p<31;++p)c[p]=p<<23;c[31]=1199570944,c[32]=2147483648;for(let p=33;p<63;++p)c[p]=2147483648+(p-32<<23);c[63]=3347054592;for(let p=1;p<64;++p)p!==32&&(f[p]=1024);return{floatView:e,uint32View:t,baseTable:r,shiftTable:o,mantissaTable:a,exponentTable:c,offsetTable:f}}function k1(i){Math.abs(i)>65504&&Ot("DataUtils.toHalfFloat(): Value out of range."),i=qt(i,-65504,65504),Rs.floatView[0]=i;const e=Rs.uint32View[0],t=e>>23&511;return Rs.baseTable[t]+((e&8388607)>>Rs.shiftTable[t])}function U1(i){const e=i>>10;return Rs.uint32View[0]=Rs.mantissaTable[Rs.offsetTable[e]+(i&1023)]+Rs.exponentTable[e],Rs.floatView[0]}class rA{static toHalfFloat(e){return k1(e)}static fromHalfFloat(e){return U1(e)}}const Gn=new pe,Wu=new ln;let F1=0;class os{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:F1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Lg,this.updateRanges=[],this.gpuType=ns,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Wu.fromBufferAttribute(this,t),Wu.applyMatrix3(e),this.setXY(t,Wu.x,Wu.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix3(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix4(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Gn.fromBufferAttribute(this,t),Gn.applyNormalMatrix(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Gn.fromBufferAttribute(this,t),Gn.transformDirection(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=il(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ci(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=il(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ci(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=il(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ci(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=il(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ci(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=il(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ci(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ci(t,this.array),r=Ci(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Ci(t,this.array),r=Ci(r,this.array),o=Ci(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,a){return e*=this.itemSize,this.normalized&&(t=Ci(t,this.array),r=Ci(r,this.array),o=Ci(o,this.array),a=Ci(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lg&&(e.usage=this.usage),e}}class Ix extends os{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Lx extends os{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class An extends os{constructor(e,t,r){super(new Float32Array(e),t,r)}}const O1=new Cc,lc=new pe,Uh=new pe;class zd{constructor(e=new pe,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):O1.setFromPoints(e).getCenter(r);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lc.subVectors(e,this.center);const t=lc.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(lc,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lc.copy(e.center).add(Uh)),this.expandByPoint(lc.copy(e.center).sub(Uh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let B1=0;const pr=new In,Fh=new Kn,Ja=new pe,Zi=new Cc,cc=new Cc,si=new pe;class Si extends fa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:B1++}),this.uuid=Sl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(t1(e)?Lx:Ix)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new Wt().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pr.makeRotationFromQuaternion(e),this.applyMatrix4(pr),this}rotateX(e){return pr.makeRotationX(e),this.applyMatrix4(pr),this}rotateY(e){return pr.makeRotationY(e),this.applyMatrix4(pr),this}rotateZ(e){return pr.makeRotationZ(e),this.applyMatrix4(pr),this}translate(e,t,r){return pr.makeTranslation(e,t,r),this.applyMatrix4(pr),this}scale(e,t,r){return pr.makeScale(e,t,r),this.applyMatrix4(pr),this}lookAt(e){return Fh.lookAt(e),Fh.updateMatrix(),this.applyMatrix4(Fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ja).negate(),this.translate(Ja.x,Ja.y,Ja.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new An(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new pe(-1/0,-1/0,-1/0),new pe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Zi.setFromBufferAttribute(a),this.morphTargetsRelative?(si.addVectors(this.boundingBox.min,Zi.min),this.boundingBox.expandByPoint(si),si.addVectors(this.boundingBox.max,Zi.max),this.boundingBox.expandByPoint(si)):(this.boundingBox.expandByPoint(Zi.min),this.boundingBox.expandByPoint(Zi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new pe,1/0);return}if(e){const r=this.boundingSphere.center;if(Zi.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const f=t[a];cc.setFromBufferAttribute(f),this.morphTargetsRelative?(si.addVectors(Zi.min,cc.min),Zi.expandByPoint(si),si.addVectors(Zi.max,cc.max),Zi.expandByPoint(si)):(Zi.expandByPoint(cc.min),Zi.expandByPoint(cc.max))}Zi.getCenter(r);let o=0;for(let a=0,c=e.count;a<c;a++)si.fromBufferAttribute(e,a),o=Math.max(o,r.distanceToSquared(si));if(t)for(let a=0,c=t.length;a<c;a++){const f=t[a],p=this.morphTargetsRelative;for(let u=0,h=f.count;u<h;u++)si.fromBufferAttribute(f,u),p&&(Ja.fromBufferAttribute(e,u),si.add(Ja)),o=Math.max(o,r.distanceToSquared(si))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&dn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){dn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new os(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let b=0;b<r.count;b++)f[b]=new pe,p[b]=new pe;const u=new pe,h=new pe,_=new pe,g=new ln,m=new ln,M=new ln,T=new pe,x=new pe;function y(b,C,B){u.fromBufferAttribute(r,b),h.fromBufferAttribute(r,C),_.fromBufferAttribute(r,B),g.fromBufferAttribute(a,b),m.fromBufferAttribute(a,C),M.fromBufferAttribute(a,B),h.sub(u),_.sub(u),m.sub(g),M.sub(g);const U=1/(m.x*M.y-M.x*m.y);isFinite(U)&&(T.copy(h).multiplyScalar(M.y).addScaledVector(_,-m.y).multiplyScalar(U),x.copy(_).multiplyScalar(m.x).addScaledVector(h,-M.x).multiplyScalar(U),f[b].add(T),f[C].add(T),f[B].add(T),p[b].add(x),p[C].add(x),p[B].add(x))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let b=0,C=L.length;b<C;++b){const B=L[b],U=B.start,j=B.count;for(let G=U,J=U+j;G<J;G+=3)y(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const k=new pe,I=new pe,$=new pe,w=new pe;function R(b){$.fromBufferAttribute(o,b),w.copy($);const C=f[b];k.copy(C),k.sub($.multiplyScalar($.dot(C))).normalize(),I.crossVectors(w,C);const U=I.dot(p[b])<0?-1:1;c.setXYZW(b,k.x,k.y,k.z,U)}for(let b=0,C=L.length;b<C;++b){const B=L[b],U=B.start,j=B.count;for(let G=U,J=U+j;G<J;G+=3)R(e.getX(G+0)),R(e.getX(G+1)),R(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new os(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,m=r.count;g<m;g++)r.setXYZ(g,0,0,0);const o=new pe,a=new pe,c=new pe,f=new pe,p=new pe,u=new pe,h=new pe,_=new pe;if(e)for(let g=0,m=e.count;g<m;g+=3){const M=e.getX(g+0),T=e.getX(g+1),x=e.getX(g+2);o.fromBufferAttribute(t,M),a.fromBufferAttribute(t,T),c.fromBufferAttribute(t,x),h.subVectors(c,a),_.subVectors(o,a),h.cross(_),f.fromBufferAttribute(r,M),p.fromBufferAttribute(r,T),u.fromBufferAttribute(r,x),f.add(h),p.add(h),u.add(h),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(x,u.x,u.y,u.z)}else for(let g=0,m=t.count;g<m;g+=3)o.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),h.subVectors(c,a),_.subVectors(o,a),h.cross(_),r.setXYZ(g+0,h.x,h.y,h.z),r.setXYZ(g+1,h.x,h.y,h.z),r.setXYZ(g+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)si.fromBufferAttribute(e,t),si.normalize(),e.setXYZ(t,si.x,si.y,si.z)}toNonIndexed(){function e(f,p){const u=f.array,h=f.itemSize,_=f.normalized,g=new u.constructor(p.length*h);let m=0,M=0;for(let T=0,x=p.length;T<x;T++){f.isInterleavedBufferAttribute?m=p[T]*f.data.stride+f.offset:m=p[T]*h;for(let y=0;y<h;y++)g[M++]=u[m++]}return new os(g,h,_)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Si,r=this.index.array,o=this.attributes;for(const f in o){const p=o[f],u=e(p,r);t.setAttribute(f,u)}const a=this.morphAttributes;for(const f in a){const p=[],u=a[f];for(let h=0,_=u.length;h<_;h++){const g=u[h],m=e(g,r);p.push(m)}t.morphAttributes[f]=p}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const u=c[f];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const u in p)p[u]!==void 0&&(e[u]=p[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const u=r[p];e.data.attributes[p]=u.toJSON(e.data)}const o={};let a=!1;for(const p in this.morphAttributes){const u=this.morphAttributes[p],h=[];for(let _=0,g=u.length;_<g;_++){const m=u[_];h.push(m.toJSON(e.data))}h.length>0&&(o[p]=h,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const u in o){const h=o[u];this.setAttribute(u,h.clone(t))}const a=e.morphAttributes;for(const u in a){const h=[],_=a[u];for(let g=0,m=_.length;g<m;g++)h.push(_[g].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let u=0,h=c.length;u<h;u++){const _=c[u];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let z1=0;class bl extends fa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=Sl(),this.name="",this.type="Material",this.blending=cl,this.side=Po,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hp,this.blendDst=pp,this.blendEquation=oa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new sn(0,0,0),this.blendAlpha=0,this.depthFunc=fl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ig,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Va,this.stencilZFail=Va,this.stencilZPass=Va,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){Ot(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Ot(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==cl&&(r.blending=this.blending),this.side!==Po&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==hp&&(r.blendSrc=this.blendSrc),this.blendDst!==pp&&(r.blendDst=this.blendDst),this.blendEquation!==oa&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==fl&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ig&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Va&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Va&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Va&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(a){const c=[];for(const f in a){const p=a[f];delete p.metadata,c.push(p)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(r.textures=a),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let a=0;a!==o;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Es=new pe,Oh=new pe,ju=new pe,yo=new pe,Bh=new pe,Xu=new pe,zh=new pe;class Dx{constructor(e=new pe,t=new pe(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Es)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Es.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Es.copy(this.origin).addScaledVector(this.direction,t),Es.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Oh.copy(e).add(t).multiplyScalar(.5),ju.copy(t).sub(e).normalize(),yo.copy(this.origin).sub(Oh);const a=e.distanceTo(t)*.5,c=-this.direction.dot(ju),f=yo.dot(this.direction),p=-yo.dot(ju),u=yo.lengthSq(),h=Math.abs(1-c*c);let _,g,m,M;if(h>0)if(_=c*p-f,g=c*f-p,M=a*h,_>=0)if(g>=-M)if(g<=M){const T=1/h;_*=T,g*=T,m=_*(_+c*g+2*f)+g*(c*_+g+2*p)+u}else g=a,_=Math.max(0,-(c*g+f)),m=-_*_+g*(g+2*p)+u;else g=-a,_=Math.max(0,-(c*g+f)),m=-_*_+g*(g+2*p)+u;else g<=-M?(_=Math.max(0,-(-c*a+f)),g=_>0?-a:Math.min(Math.max(-a,-p),a),m=-_*_+g*(g+2*p)+u):g<=M?(_=0,g=Math.min(Math.max(-a,-p),a),m=g*(g+2*p)+u):(_=Math.max(0,-(c*a+f)),g=_>0?a:Math.min(Math.max(-a,-p),a),m=-_*_+g*(g+2*p)+u);else g=c>0?-a:a,_=Math.max(0,-(c*g+f)),m=-_*_+g*(g+2*p)+u;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Oh).addScaledVector(ju,g),m}intersectSphere(e,t){Es.subVectors(e.center,this.origin);const r=Es.dot(this.direction),o=Es.dot(Es)-r*r,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),f=r-c,p=r+c;return p<0?null:f<0?this.at(p,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,a,c,f,p;const u=1/this.direction.x,h=1/this.direction.y,_=1/this.direction.z,g=this.origin;return u>=0?(r=(e.min.x-g.x)*u,o=(e.max.x-g.x)*u):(r=(e.max.x-g.x)*u,o=(e.min.x-g.x)*u),h>=0?(a=(e.min.y-g.y)*h,c=(e.max.y-g.y)*h):(a=(e.max.y-g.y)*h,c=(e.min.y-g.y)*h),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),_>=0?(f=(e.min.z-g.z)*_,p=(e.max.z-g.z)*_):(f=(e.max.z-g.z)*_,p=(e.min.z-g.z)*_),r>p||f>o)||((f>r||r!==r)&&(r=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Es)!==null}intersectTriangle(e,t,r,o,a){Bh.subVectors(t,e),Xu.subVectors(r,e),zh.crossVectors(Bh,Xu);let c=this.direction.dot(zh),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;yo.subVectors(this.origin,e);const p=f*this.direction.dot(Xu.crossVectors(yo,Xu));if(p<0)return null;const u=f*this.direction.dot(Bh.cross(yo));if(u<0||p+u>c)return null;const h=-f*yo.dot(zh);return h<0?null:this.at(h/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class bm extends bl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new sn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ls,this.combine=cx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yg=new In,ea=new Dx,Yu=new zd,qg=new pe,qu=new pe,Ku=new pe,Zu=new pe,$h=new pe,Ju=new pe,Kg=new pe,Qu=new pe;class yr extends Kn{constructor(e=new Si,t=new bm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const f=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,a=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(a&&f){Ju.set(0,0,0);for(let p=0,u=a.length;p<u;p++){const h=f[p],_=a[p];h!==0&&($h.fromBufferAttribute(_,e),c?Ju.addScaledVector($h,h):Ju.addScaledVector($h.sub(t),h))}t.add(Ju)}return t}raycast(e,t){const r=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Yu.copy(r.boundingSphere),Yu.applyMatrix4(a),ea.copy(e.ray).recast(e.near),!(Yu.containsPoint(ea.origin)===!1&&(ea.intersectSphere(Yu,qg)===null||ea.origin.distanceToSquared(qg)>(e.far-e.near)**2))&&(Yg.copy(a).invert(),ea.copy(e.ray).applyMatrix4(Yg),!(r.boundingBox!==null&&ea.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ea)))}_computeIntersections(e,t,r){let o;const a=this.geometry,c=this.material,f=a.index,p=a.attributes.position,u=a.attributes.uv,h=a.attributes.uv1,_=a.attributes.normal,g=a.groups,m=a.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,T=g.length;M<T;M++){const x=g[M],y=c[x.materialIndex],L=Math.max(x.start,m.start),k=Math.min(f.count,Math.min(x.start+x.count,m.start+m.count));for(let I=L,$=k;I<$;I+=3){const w=f.getX(I),R=f.getX(I+1),b=f.getX(I+2);o=ed(this,y,e,r,u,h,_,w,R,b),o&&(o.faceIndex=Math.floor(I/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const M=Math.max(0,m.start),T=Math.min(f.count,m.start+m.count);for(let x=M,y=T;x<y;x+=3){const L=f.getX(x),k=f.getX(x+1),I=f.getX(x+2);o=ed(this,c,e,r,u,h,_,L,k,I),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(c))for(let M=0,T=g.length;M<T;M++){const x=g[M],y=c[x.materialIndex],L=Math.max(x.start,m.start),k=Math.min(p.count,Math.min(x.start+x.count,m.start+m.count));for(let I=L,$=k;I<$;I+=3){const w=I,R=I+1,b=I+2;o=ed(this,y,e,r,u,h,_,w,R,b),o&&(o.faceIndex=Math.floor(I/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const M=Math.max(0,m.start),T=Math.min(p.count,m.start+m.count);for(let x=M,y=T;x<y;x+=3){const L=x,k=x+1,I=x+2;o=ed(this,c,e,r,u,h,_,L,k,I),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function $1(i,e,t,r,o,a,c,f){let p;if(e.side===Bi?p=r.intersectTriangle(c,a,o,!0,f):p=r.intersectTriangle(o,a,c,e.side===Po,f),p===null)return null;Qu.copy(f),Qu.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Qu);return u<t.near||u>t.far?null:{distance:u,point:Qu.clone(),object:i}}function ed(i,e,t,r,o,a,c,f,p,u){i.getVertexPosition(f,qu),i.getVertexPosition(p,Ku),i.getVertexPosition(u,Zu);const h=$1(i,e,t,r,qu,Ku,Zu,Kg);if(h){const _=new pe;_r.getBarycoord(Kg,qu,Ku,Zu,_),o&&(h.uv=_r.getInterpolatedAttribute(o,f,p,u,_,new ln)),a&&(h.uv1=_r.getInterpolatedAttribute(a,f,p,u,_,new ln)),c&&(h.normal=_r.getInterpolatedAttribute(c,f,p,u,_,new pe),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));const g={a:f,b:p,c:u,normal:new pe,materialIndex:0};_r.getNormal(qu,Ku,Zu,g.normal),h.face=g,h.barycoord=_}return h}class Nx extends yi{constructor(e=null,t=1,r=1,o,a,c,f,p,u=di,h=di,_,g){super(null,c,f,p,u,h,o,a,_,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vh=new pe,V1=new pe,H1=new Wt;class sa{constructor(e=new pe(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Vh.subVectors(r,t).cross(V1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Vh),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||H1.getNormalMatrix(e),o=this.coplanarPoint(Vh).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ta=new zd,G1=new ln(.5,.5),td=new pe;class wm{constructor(e=new sa,t=new sa,r=new sa,o=new sa,a=new sa,c=new sa){this.planes=[e,t,r,o,a,c]}set(e,t,r,o,a,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(a),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=is,r=!1){const o=this.planes,a=e.elements,c=a[0],f=a[1],p=a[2],u=a[3],h=a[4],_=a[5],g=a[6],m=a[7],M=a[8],T=a[9],x=a[10],y=a[11],L=a[12],k=a[13],I=a[14],$=a[15];if(o[0].setComponents(u-c,m-h,y-M,$-L).normalize(),o[1].setComponents(u+c,m+h,y+M,$+L).normalize(),o[2].setComponents(u+f,m+_,y+T,$+k).normalize(),o[3].setComponents(u-f,m-_,y-T,$-k).normalize(),r)o[4].setComponents(p,g,x,I).normalize(),o[5].setComponents(u-p,m-g,y-x,$-I).normalize();else if(o[4].setComponents(u-p,m-g,y-x,$-I).normalize(),t===is)o[5].setComponents(u+p,m+g,y+x,$+I).normalize();else if(t===Mc)o[5].setComponents(p,g,x,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ta.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ta.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ta)}intersectsSprite(e){ta.center.set(0,0,0);const t=G1.distanceTo(e.center);return ta.radius=.7071067811865476+t,ta.applyMatrix4(e.matrixWorld),this.intersectsSphere(ta)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(td.x=o.normal.x>0?e.max.x:e.min.x,td.y=o.normal.y>0?e.max.y:e.min.y,td.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(td)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Em extends bl{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new sn(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nd=new pe,kd=new pe,Zg=new In,uc=new Dx,nd=new zd,Hh=new pe,Jg=new pe;class kx extends Kn{constructor(e=new Si,t=new Em){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,a=t.count;o<a;o++)Nd.fromBufferAttribute(t,o-1),kd.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=Nd.distanceTo(kd);e.setAttribute("lineDistance",new An(r,1))}else Ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),nd.copy(r.boundingSphere),nd.applyMatrix4(o),nd.radius+=a,e.ray.intersectsSphere(nd)===!1)return;Zg.copy(o).invert(),uc.copy(e.ray).applyMatrix4(Zg);const f=a/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,u=this.isLineSegments?2:1,h=r.index,g=r.attributes.position;if(h!==null){const m=Math.max(0,c.start),M=Math.min(h.count,c.start+c.count);for(let T=m,x=M-1;T<x;T+=u){const y=h.getX(T),L=h.getX(T+1),k=id(this,e,uc,p,y,L,T);k&&t.push(k)}if(this.isLineLoop){const T=h.getX(M-1),x=h.getX(m),y=id(this,e,uc,p,T,x,M-1);y&&t.push(y)}}else{const m=Math.max(0,c.start),M=Math.min(g.count,c.start+c.count);for(let T=m,x=M-1;T<x;T+=u){const y=id(this,e,uc,p,T,T+1,T);y&&t.push(y)}if(this.isLineLoop){const T=id(this,e,uc,p,M-1,m,M-1);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const f=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}}function id(i,e,t,r,o,a,c){const f=i.geometry.attributes.position;if(Nd.fromBufferAttribute(f,o),kd.fromBufferAttribute(f,a),t.distanceSqToSegment(Nd,kd,Hh,Jg)>r)return;Hh.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(Hh);if(!(u<e.near||u>e.far))return{distance:u,point:Jg.clone().applyMatrix4(i.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:i}}const Qg=new pe,ev=new pe;class W1 extends kx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,a=t.count;o<a;o+=2)Qg.fromBufferAttribute(t,o),ev.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Qg.distanceTo(ev);e.setAttribute("lineDistance",new An(r,1))}else Ot("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ux extends yi{constructor(e=[],t=ua,r,o,a,c,f,p,u,h){super(e,t,r,o,a,c,f,p,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sA extends yi{constructor(e,t,r,o,a,c,f,p,u){super(e,t,r,o,a,c,f,p,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class wc extends yi{constructor(e,t,r=as,o,a,c,f=di,p=di,u,h=ks,_=1){if(h!==ks&&h!==ca)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:_};super(g,o,a,c,f,p,h,r,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class j1 extends wc{constructor(e,t=as,r=ua,o,a,c=di,f=di,p,u=ks){const h={width:e,height:e,depth:1},_=[h,h,h,h,h,h];super(e,e,t,r,o,a,c,f,p,u),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Fx extends yi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ac extends Si{constructor(e=1,t=1,r=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:a,depthSegments:c};const f=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const p=[],u=[],h=[],_=[];let g=0,m=0;M("z","y","x",-1,-1,r,t,e,c,a,0),M("z","y","x",1,-1,r,t,-e,c,a,1),M("x","z","y",1,1,e,r,t,o,c,2),M("x","z","y",1,-1,e,r,-t,o,c,3),M("x","y","z",1,-1,e,t,r,o,a,4),M("x","y","z",-1,-1,e,t,-r,o,a,5),this.setIndex(p),this.setAttribute("position",new An(u,3)),this.setAttribute("normal",new An(h,3)),this.setAttribute("uv",new An(_,2));function M(T,x,y,L,k,I,$,w,R,b,C){const B=I/R,U=$/b,j=I/2,G=$/2,J=w/2,se=R+1,ie=b+1;let K=0,ne=0;const X=new pe;for(let oe=0;oe<ie;oe++){const F=oe*U-G;for(let Y=0;Y<se;Y++){const Ie=Y*B-j;X[T]=Ie*L,X[x]=F*k,X[y]=J,u.push(X.x,X.y,X.z),X[T]=0,X[x]=0,X[y]=w>0?1:-1,h.push(X.x,X.y,X.z),_.push(Y/R),_.push(1-oe/b),K+=1}}for(let oe=0;oe<b;oe++)for(let F=0;F<R;F++){const Y=g+F+se*oe,Ie=g+F+se*(oe+1),Re=g+(F+1)+se*(oe+1),et=g+(F+1)+se*oe;p.push(Y,Ie,et),p.push(Ie,Re,et),ne+=6}f.addGroup(m,ne,C),m+=ne,g+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ox extends Si{constructor(e=1,t=32,r=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:o},t=Math.max(3,t);const a=[],c=[],f=[],p=[],u=new pe,h=new ln;c.push(0,0,0),f.push(0,0,1),p.push(.5,.5);for(let _=0,g=3;_<=t;_++,g+=3){const m=r+_/t*o;u.x=e*Math.cos(m),u.y=e*Math.sin(m),c.push(u.x,u.y,u.z),f.push(0,0,1),h.x=(c[g]/e+1)/2,h.y=(c[g+1]/e+1)/2,p.push(h.x,h.y)}for(let _=1;_<=t;_++)a.push(_,_+1,0);this.setIndex(a),this.setAttribute("position",new An(c,3)),this.setAttribute("normal",new An(f,3)),this.setAttribute("uv",new An(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ox(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Tm extends Si{constructor(e=1,t=1,r=1,o=32,a=1,c=!1,f=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:a,openEnded:c,thetaStart:f,thetaLength:p};const u=this;o=Math.floor(o),a=Math.floor(a);const h=[],_=[],g=[],m=[];let M=0;const T=[],x=r/2;let y=0;L(),c===!1&&(e>0&&k(!0),t>0&&k(!1)),this.setIndex(h),this.setAttribute("position",new An(_,3)),this.setAttribute("normal",new An(g,3)),this.setAttribute("uv",new An(m,2));function L(){const I=new pe,$=new pe;let w=0;const R=(t-e)/r;for(let b=0;b<=a;b++){const C=[],B=b/a,U=B*(t-e)+e;for(let j=0;j<=o;j++){const G=j/o,J=G*p+f,se=Math.sin(J),ie=Math.cos(J);$.x=U*se,$.y=-B*r+x,$.z=U*ie,_.push($.x,$.y,$.z),I.set(se,R,ie).normalize(),g.push(I.x,I.y,I.z),m.push(G,1-B),C.push(M++)}T.push(C)}for(let b=0;b<o;b++)for(let C=0;C<a;C++){const B=T[C][b],U=T[C+1][b],j=T[C+1][b+1],G=T[C][b+1];(e>0||C!==0)&&(h.push(B,U,G),w+=3),(t>0||C!==a-1)&&(h.push(U,j,G),w+=3)}u.addGroup(y,w,0),y+=w}function k(I){const $=M,w=new ln,R=new pe;let b=0;const C=I===!0?e:t,B=I===!0?1:-1;for(let j=1;j<=o;j++)_.push(0,x*B,0),g.push(0,B,0),m.push(.5,.5),M++;const U=M;for(let j=0;j<=o;j++){const J=j/o*p+f,se=Math.cos(J),ie=Math.sin(J);R.x=C*ie,R.y=x*B,R.z=C*se,_.push(R.x,R.y,R.z),g.push(0,B,0),w.x=se*.5+.5,w.y=ie*.5*B+.5,m.push(w.x,w.y),M++}for(let j=0;j<o;j++){const G=$+j,J=U+j;I===!0?h.push(J,J+1,G):h.push(J+1,J,G),b+=3}u.addGroup(y,b,I===!0?1:2),y+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tm(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cm extends Tm{constructor(e=1,t=1,r=32,o=1,a=!1,c=0,f=Math.PI*2){super(0,e,t,r,o,a,c,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:a,thetaStart:c,thetaLength:f}}static fromJSON(e){return new Cm(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const rd=new pe,sd=new pe,Gh=new pe,od=new _r;class oA extends Si{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),a=Math.cos(ul*t),c=e.getIndex(),f=e.getAttribute("position"),p=c?c.count:f.count,u=[0,0,0],h=["a","b","c"],_=new Array(3),g={},m=[];for(let M=0;M<p;M+=3){c?(u[0]=c.getX(M),u[1]=c.getX(M+1),u[2]=c.getX(M+2)):(u[0]=M,u[1]=M+1,u[2]=M+2);const{a:T,b:x,c:y}=od;if(T.fromBufferAttribute(f,u[0]),x.fromBufferAttribute(f,u[1]),y.fromBufferAttribute(f,u[2]),od.getNormal(Gh),_[0]=`${Math.round(T.x*o)},${Math.round(T.y*o)},${Math.round(T.z*o)}`,_[1]=`${Math.round(x.x*o)},${Math.round(x.y*o)},${Math.round(x.z*o)}`,_[2]=`${Math.round(y.x*o)},${Math.round(y.y*o)},${Math.round(y.z*o)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let L=0;L<3;L++){const k=(L+1)%3,I=_[L],$=_[k],w=od[h[L]],R=od[h[k]],b=`${I}_${$}`,C=`${$}_${I}`;C in g&&g[C]?(Gh.dot(g[C].normal)<=a&&(m.push(w.x,w.y,w.z),m.push(R.x,R.y,R.z)),g[C]=null):b in g||(g[b]={index0:u[L],index1:u[k],normal:Gh.clone()})}}for(const M in g)if(g[M]){const{index0:T,index1:x}=g[M];rd.fromBufferAttribute(f,T),sd.fromBufferAttribute(f,x),m.push(rd.x,rd.y,rd.z),m.push(sd.x,sd.y,sd.z)}this.setAttribute("position",new An(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class wl extends Si{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const a=e/2,c=t/2,f=Math.floor(r),p=Math.floor(o),u=f+1,h=p+1,_=e/f,g=t/p,m=[],M=[],T=[],x=[];for(let y=0;y<h;y++){const L=y*g-c;for(let k=0;k<u;k++){const I=k*_-a;M.push(I,-L,0),T.push(0,0,1),x.push(k/f),x.push(1-y/p)}}for(let y=0;y<p;y++)for(let L=0;L<f;L++){const k=L+u*y,I=L+u*(y+1),$=L+1+u*(y+1),w=L+1+u*y;m.push(k,I,w),m.push(I,$,w)}this.setIndex(m),this.setAttribute("position",new An(M,3)),this.setAttribute("normal",new An(T,3)),this.setAttribute("uv",new An(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bx extends Si{constructor(e=1,t=32,r=16,o=0,a=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:a,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const p=Math.min(c+f,Math.PI);let u=0;const h=[],_=new pe,g=new pe,m=[],M=[],T=[],x=[];for(let y=0;y<=r;y++){const L=[],k=y/r;let I=0;y===0&&c===0?I=.5/t:y===r&&p===Math.PI&&(I=-.5/t);for(let $=0;$<=t;$++){const w=$/t;_.x=-e*Math.cos(o+w*a)*Math.sin(c+k*f),_.y=e*Math.cos(c+k*f),_.z=e*Math.sin(o+w*a)*Math.sin(c+k*f),M.push(_.x,_.y,_.z),g.copy(_).normalize(),T.push(g.x,g.y,g.z),x.push(w+I,1-k),L.push(u++)}h.push(L)}for(let y=0;y<r;y++)for(let L=0;L<t;L++){const k=h[y][L+1],I=h[y][L],$=h[y+1][L],w=h[y+1][L+1];(y!==0||c>0)&&m.push(k,I,w),(y!==r-1||p<Math.PI)&&m.push(I,$,w)}this.setIndex(m),this.setAttribute("position",new An(M,3)),this.setAttribute("normal",new An(T,3)),this.setAttribute("uv",new An(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bx(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function gl(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const o=i[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Ai(i){const e={};for(let t=0;t<i.length;t++){const r=gl(i[t]);for(const o in r)e[o]=r[o]}return e}function X1(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zx(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:an.workingColorSpace}const Y1={clone:gl,merge:Ai};var q1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tr extends bl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q1,this.fragmentShader=K1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gl(e.uniforms),this.uniformsGroups=X1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Z1 extends tr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class aA extends bl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new sn(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new sn(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ex,this.normalScale=new ln(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ls,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class J1 extends bl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Q1 extends bl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tv={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(nv(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!nv(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function nv(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class eS{constructor(e,t,r){const o=this;let a=!1,c=0,f=0,p;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(h){f++,a===!1&&o.onStart!==void 0&&o.onStart(h,c,f),a=!0},this.itemEnd=function(h){c++,o.onProgress!==void 0&&o.onProgress(h,c,f),c===f&&(a=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(h){o.onError!==void 0&&o.onError(h)},this.resolveURL=function(h){return p?p(h):h},this.setURLModifier=function(h){return p=h,this},this.addHandler=function(h,_){return u.push(h,_),this},this.removeHandler=function(h){const _=u.indexOf(h);return _!==-1&&u.splice(_,2),this},this.getHandler=function(h){for(let _=0,g=u.length;_<g;_+=2){const m=u[_],M=u[_+1];if(m.global&&(m.lastIndex=0),m.test(h))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const tS=new eS;class Am{constructor(e){this.manager=e!==void 0?e:tS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,a){r.load(e,o,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Am.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ts={};class nS extends Error{constructor(e,t){super(e),this.response=t}}class iS extends Am{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,r,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=tv.get(`file:${e}`);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Ts[e]!==void 0){Ts[e].push({onLoad:t,onProgress:r,onError:o});return}Ts[e]=[],Ts[e].push({onLoad:t,onProgress:r,onError:o});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),f=this.mimeType,p=this.responseType;fetch(c).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&Ot("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=Ts[e],_=u.body.getReader(),g=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),m=g?parseInt(g):0,M=m!==0;let T=0;const x=new ReadableStream({start(y){L();function L(){_.read().then(({done:k,value:I})=>{if(k)y.close();else{T+=I.byteLength;const $=new ProgressEvent("progress",{lengthComputable:M,loaded:T,total:m});for(let w=0,R=h.length;w<R;w++){const b=h[w];b.onProgress&&b.onProgress($)}y.enqueue(I),L()}},k=>{y.error(k)})}}});return new Response(x)}else throw new nS(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(p){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,f));case"json":return u.json();default:if(f==="")return u.text();{const _=/charset="?([^;"\s]*)"?/i.exec(f),g=_&&_[1]?_[1].toLowerCase():void 0,m=new TextDecoder(g);return u.arrayBuffer().then(M=>m.decode(M))}}}).then(u=>{tv.add(`file:${e}`,u);const h=Ts[e];delete Ts[e];for(let _=0,g=h.length;_<g;_++){const m=h[_];m.onLoad&&m.onLoad(u)}}).catch(u=>{const h=Ts[e];if(h===void 0)throw this.manager.itemError(e),u;delete Ts[e];for(let _=0,g=h.length;_<g;_++){const m=h[_];m.onError&&m.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class lA extends Am{constructor(e){super(e)}load(e,t,r,o){const a=this,c=new Nx,f=new iS(this.manager);return f.setResponseType("arraybuffer"),f.setRequestHeader(this.requestHeader),f.setPath(this.path),f.setWithCredentials(a.withCredentials),f.load(e,function(p){let u;try{u=a.parse(p)}catch(h){if(o!==void 0)o(h);else{h(h);return}}u.image!==void 0?c.image=u.image:u.data!==void 0&&(c.image.width=u.width,c.image.height=u.height,c.image.data=u.data),c.wrapS=u.wrapS!==void 0?u.wrapS:Br,c.wrapT=u.wrapT!==void 0?u.wrapT:Br,c.magFilter=u.magFilter!==void 0?u.magFilter:qn,c.minFilter=u.minFilter!==void 0?u.minFilter:qn,c.anisotropy=u.anisotropy!==void 0?u.anisotropy:1,u.colorSpace!==void 0&&(c.colorSpace=u.colorSpace),u.flipY!==void 0&&(c.flipY=u.flipY),u.format!==void 0&&(c.format=u.format),u.type!==void 0&&(c.type=u.type),u.mipmaps!==void 0&&(c.mipmaps=u.mipmaps,c.minFilter=Eo),u.mipmapCount===1&&(c.minFilter=qn),u.generateMipmaps!==void 0&&(c.generateMipmaps=u.generateMipmaps),c.needsUpdate=!0,t&&t(c,u)},r,o),c}}class $x extends Kn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new sn(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class cA extends $x{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new sn(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Wh=new In,iv=new pe,rv=new pe;class rS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ln(512,512),this.mapType=er,this.map=null,this.mapPass=null,this.matrix=new In,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wm,this._frameExtents=new ln(1,1),this._viewportCount=1,this._viewports=[new Un(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;iv.setFromMatrixPosition(e.matrixWorld),t.position.copy(iv),rv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rv),t.updateMatrixWorld(),Wh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wh,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Mc||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Wh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ad=new pe,ld=new Ml,qr=new pe;class Vx extends Kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new In,this.projectionMatrix=new In,this.projectionMatrixInverse=new In,this.coordinateSystem=is,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ad,ld,qr),qr.x===1&&qr.y===1&&qr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ad,ld,qr.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ad,ld,qr),qr.x===1&&qr.y===1&&qr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ad,ld,qr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const So=new pe,sv=new ln,ov=new ln;class Or extends Vx{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ul*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bc*2*Math.atan(Math.tan(ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){So.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(So.x,So.y).multiplyScalar(-e/So.z),So.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(So.x,So.y).multiplyScalar(-e/So.z)}getViewSize(e,t){return this.getViewBounds(e,sv,ov),t.subVectors(ov,sv)}setViewOffset(e,t,r,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ul*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,u=c.fullHeight;a+=c.offsetX*o/p,t-=c.offsetY*r/u,o*=c.width/p,r*=c.height/u}const f=this.filmOffset;f!==0&&(a+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Rc extends Vx{constructor(e=-1,t=1,r=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=r-e,c=r+e,f=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,c=a+u*this.view.width,f-=h*this.view.offsetY,p=f-h*this.view.height}this.projectionMatrix.makeOrthographic(a,c,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class sS extends rS{constructor(){super(new Rc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uA extends $x{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kn.DEFAULT_UP),this.updateMatrix(),this.target=new Kn,this.shadow=new sS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Qa=-90,el=1;class oS extends Kn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Or(Qa,el,e,t);o.layers=this.layers,this.add(o);const a=new Or(Qa,el,e,t);a.layers=this.layers,this.add(a);const c=new Or(Qa,el,e,t);c.layers=this.layers,this.add(c);const f=new Or(Qa,el,e,t);f.layers=this.layers,this.add(f);const p=new Or(Qa,el,e,t);p.layers=this.layers,this.add(p);const u=new Or(Qa,el,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,a,c,f,p]=t;for(const u of t)this.remove(u);if(e===is)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Mc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,f,p,u,h]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(r,1,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(r,4,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(_,g,m),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class aS extends Or{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class dA{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(qt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class fA extends W1{constructor(e=10,t=10,r=4473924,o=8947848){r=new sn(r),o=new sn(o);const a=t/2,c=e/t,f=e/2,p=[],u=[];for(let g=0,m=0,M=-f;g<=t;g++,M+=c){p.push(-f,0,M,f,0,M),p.push(M,0,-f,M,0,f);const T=g===a?r:o;T.toArray(u,m),m+=3,T.toArray(u,m),m+=3,T.toArray(u,m),m+=3,T.toArray(u,m),m+=3}const h=new Si;h.setAttribute("position",new An(p,3)),h.setAttribute("color",new An(u,3));const _=new Em({vertexColors:!0,toneMapped:!1});super(h,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const av=new pe;let cd,jh;class hA extends Kn{constructor(e=new pe(0,0,1),t=new pe(0,0,0),r=1,o=16776960,a=r*.2,c=a*.2){super(),this.type="ArrowHelper",cd===void 0&&(cd=new Si,cd.setAttribute("position",new An([0,0,0,0,1,0],3)),jh=new Cm(.5,1,5,1),jh.translate(0,-.5,0)),this.position.copy(t),this.line=new kx(cd,new Em({color:o,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new yr(jh,new bm({color:o,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(r,a,c)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{av.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(av,t)}}setLength(e,t=e*.2,r=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(r,t,r),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class pA extends fa{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ot("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function lv(i,e,t,r){const o=lS(r);switch(t){case Mx:return i*e;case wx:return i*e/o.components*o.byteLength;case gm:return i*e/o.components*o.byteLength;case pl:return i*e*2/o.components*o.byteLength;case vm:return i*e*2/o.components*o.byteLength;case bx:return i*e*3/o.components*o.byteLength;case zr:return i*e*4/o.components*o.byteLength;case xm:return i*e*4/o.components*o.byteLength;case bd:case wd:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ed:case Td:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ep:case Cp:return Math.max(i,16)*Math.max(e,8)/4;case wp:case Tp:return Math.max(i,8)*Math.max(e,8)/2;case Ap:case Rp:case Ip:case Lp:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pp:case Dp:case Np:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kp:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Up:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Fp:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Op:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Bp:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case zp:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case $p:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Vp:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Hp:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Gp:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Wp:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case jp:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Xp:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Yp:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case qp:case Kp:case Zp:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Jp:case Qp:return Math.ceil(i/4)*Math.ceil(e/4)*8;case em:case tm:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lS(i){switch(i){case er:case xx:return{byteLength:1,components:1};case yc:case _x:case Ns:return{byteLength:2,components:1};case pm:case mm:return{byteLength:2,components:4};case as:case hm:case ns:return{byteLength:4,components:1};case yx:case Sx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fm}}));typeof window<"u"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hx(){let i=null,e=!1,t=null,r=null;function o(a,c){t(a,c),r=i.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=i.requestAnimationFrame(o),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function cS(i){const e=new WeakMap;function t(f,p){const u=f.array,h=f.usage,_=u.byteLength,g=i.createBuffer();i.bindBuffer(p,g),i.bufferData(p,u,h),f.onUploadCallback();let m;if(u instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=i.HALF_FLOAT;else if(u instanceof Uint16Array)f.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=i.SHORT;else if(u instanceof Uint32Array)m=i.UNSIGNED_INT;else if(u instanceof Int32Array)m=i.INT;else if(u instanceof Int8Array)m=i.BYTE;else if(u instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,p,u){const h=p.array,_=p.updateRanges;if(i.bindBuffer(u,f),_.length===0)i.bufferSubData(u,0,h);else{_.sort((m,M)=>m.start-M.start);let g=0;for(let m=1;m<_.length;m++){const M=_[g],T=_[m];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++g,_[g]=T)}_.length=g+1;for(let m=0,M=_.length;m<M;m++){const T=_[m];i.bufferSubData(u,T.start*h.BYTES_PER_ELEMENT,h,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function a(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(i.deleteBuffer(p.buffer),e.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const h=e.get(f);(!h||h.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const u=e.get(f);if(u===void 0)e.set(f,t(f,p));else if(u.version<f.version){if(u.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,f,p),u.version=f.version}}return{get:o,remove:a,update:c}}var uS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dS=`#ifdef USE_ALPHAHASH
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
#endif`,fS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gS=`#ifdef USE_AOMAP
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
#endif`,vS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xS=`#ifdef USE_BATCHING
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
#endif`,_S=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,SS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bS=`#ifdef USE_IRIDESCENCE
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
#endif`,wS=`#ifdef USE_BUMPMAP
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
#endif`,ES=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,TS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,PS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,IS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,LS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,DS=`#define PI 3.141592653589793
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
} // validated`,NS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kS=`vec3 transformedNormal = objectNormal;
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
#endif`,US=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zS="gl_FragColor = linearToOutputTexel( gl_FragColor );",$S=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VS=`#ifdef USE_ENVMAP
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
#endif`,HS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,GS=`#ifdef USE_ENVMAP
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
#endif`,WS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jS=`#ifdef USE_ENVMAP
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
#endif`,XS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZS=`#ifdef USE_GRADIENTMAP
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
}`,JS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tM=`uniform bool receiveShadow;
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
#endif`,nM=`#ifdef USE_ENVMAP
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
#endif`,iM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aM=`PhysicalMaterial material;
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
#endif`,lM=`uniform sampler2D dfgLUT;
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
}`,cM=`
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
#endif`,uM=`#if defined( RE_IndirectDiffuse )
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
#endif`,dM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_M=`#if defined( USE_POINTS_UV )
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
#endif`,yM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,SM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EM=`#ifdef USE_MORPHTARGETS
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
#endif`,TM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,AM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,RM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LM=`#ifdef USE_NORMALMAP
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
#endif`,DM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,BM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$M=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,YM=`float getShadowMask() {
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
}`,qM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KM=`#ifdef USE_SKINNING
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
#endif`,ZM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JM=`#ifdef USE_SKINNING
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
#endif`,QM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ib=`#ifdef USE_TRANSMISSION
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
#endif`,rb=`#ifdef USE_TRANSMISSION
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
#endif`,sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ub=`uniform sampler2D t2D;
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
}`,db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mb=`#include <common>
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
}`,gb=`#if DEPTH_PACKING == 3200
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
}`,vb=`#define DISTANCE
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
}`,xb=`#define DISTANCE
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
}`,_b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sb=`uniform float scale;
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
}`,Mb=`uniform vec3 diffuse;
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
}`,bb=`#include <common>
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
}`,wb=`uniform vec3 diffuse;
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
}`,Eb=`#define LAMBERT
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
}`,Tb=`#define LAMBERT
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
}`,Cb=`#define MATCAP
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
}`,Ab=`#define MATCAP
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
}`,Rb=`#define NORMAL
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
}`,Pb=`#define NORMAL
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
}`,Ib=`#define PHONG
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
}`,Lb=`#define PHONG
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
}`,Db=`#define STANDARD
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
}`,Nb=`#define STANDARD
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
}`,kb=`#define TOON
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
}`,Ub=`#define TOON
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
}`,Fb=`uniform float size;
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
}`,Ob=`uniform vec3 diffuse;
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
}`,Bb=`#include <common>
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
}`,zb=`uniform vec3 color;
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
}`,$b=`uniform float rotation;
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
}`,Vb=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:uS,alphahash_pars_fragment:dS,alphamap_fragment:fS,alphamap_pars_fragment:hS,alphatest_fragment:pS,alphatest_pars_fragment:mS,aomap_fragment:gS,aomap_pars_fragment:vS,batching_pars_vertex:xS,batching_vertex:_S,begin_vertex:yS,beginnormal_vertex:SS,bsdfs:MS,iridescence_fragment:bS,bumpmap_pars_fragment:wS,clipping_planes_fragment:ES,clipping_planes_pars_fragment:TS,clipping_planes_pars_vertex:CS,clipping_planes_vertex:AS,color_fragment:RS,color_pars_fragment:PS,color_pars_vertex:IS,color_vertex:LS,common:DS,cube_uv_reflection_fragment:NS,defaultnormal_vertex:kS,displacementmap_pars_vertex:US,displacementmap_vertex:FS,emissivemap_fragment:OS,emissivemap_pars_fragment:BS,colorspace_fragment:zS,colorspace_pars_fragment:$S,envmap_fragment:VS,envmap_common_pars_fragment:HS,envmap_pars_fragment:GS,envmap_pars_vertex:WS,envmap_physical_pars_fragment:nM,envmap_vertex:jS,fog_vertex:XS,fog_pars_vertex:YS,fog_fragment:qS,fog_pars_fragment:KS,gradientmap_pars_fragment:ZS,lightmap_pars_fragment:JS,lights_lambert_fragment:QS,lights_lambert_pars_fragment:eM,lights_pars_begin:tM,lights_toon_fragment:iM,lights_toon_pars_fragment:rM,lights_phong_fragment:sM,lights_phong_pars_fragment:oM,lights_physical_fragment:aM,lights_physical_pars_fragment:lM,lights_fragment_begin:cM,lights_fragment_maps:uM,lights_fragment_end:dM,logdepthbuf_fragment:fM,logdepthbuf_pars_fragment:hM,logdepthbuf_pars_vertex:pM,logdepthbuf_vertex:mM,map_fragment:gM,map_pars_fragment:vM,map_particle_fragment:xM,map_particle_pars_fragment:_M,metalnessmap_fragment:yM,metalnessmap_pars_fragment:SM,morphinstance_vertex:MM,morphcolor_vertex:bM,morphnormal_vertex:wM,morphtarget_pars_vertex:EM,morphtarget_vertex:TM,normal_fragment_begin:CM,normal_fragment_maps:AM,normal_pars_fragment:RM,normal_pars_vertex:PM,normal_vertex:IM,normalmap_pars_fragment:LM,clearcoat_normal_fragment_begin:DM,clearcoat_normal_fragment_maps:NM,clearcoat_pars_fragment:kM,iridescence_pars_fragment:UM,opaque_fragment:FM,packing:OM,premultiplied_alpha_fragment:BM,project_vertex:zM,dithering_fragment:$M,dithering_pars_fragment:VM,roughnessmap_fragment:HM,roughnessmap_pars_fragment:GM,shadowmap_pars_fragment:WM,shadowmap_pars_vertex:jM,shadowmap_vertex:XM,shadowmask_pars_fragment:YM,skinbase_vertex:qM,skinning_pars_vertex:KM,skinning_vertex:ZM,skinnormal_vertex:JM,specularmap_fragment:QM,specularmap_pars_fragment:eb,tonemapping_fragment:tb,tonemapping_pars_fragment:nb,transmission_fragment:ib,transmission_pars_fragment:rb,uv_pars_fragment:sb,uv_pars_vertex:ob,uv_vertex:ab,worldpos_vertex:lb,background_vert:cb,background_frag:ub,backgroundCube_vert:db,backgroundCube_frag:fb,cube_vert:hb,cube_frag:pb,depth_vert:mb,depth_frag:gb,distance_vert:vb,distance_frag:xb,equirect_vert:_b,equirect_frag:yb,linedashed_vert:Sb,linedashed_frag:Mb,meshbasic_vert:bb,meshbasic_frag:wb,meshlambert_vert:Eb,meshlambert_frag:Tb,meshmatcap_vert:Cb,meshmatcap_frag:Ab,meshnormal_vert:Rb,meshnormal_frag:Pb,meshphong_vert:Ib,meshphong_frag:Lb,meshphysical_vert:Db,meshphysical_frag:Nb,meshtoon_vert:kb,meshtoon_frag:Ub,points_vert:Fb,points_frag:Ob,shadow_vert:Bb,shadow_frag:zb,sprite_vert:$b,sprite_frag:Vb},ct={common:{diffuse:{value:new sn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new ln(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new sn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new sn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new sn(16777215)},opacity:{value:1},center:{value:new ln(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Qr={basic:{uniforms:Ai([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Ai([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new sn(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Ai([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new sn(0)},specular:{value:new sn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Ai([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new sn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Ai([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new sn(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Ai([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Ai([ct.points,ct.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Ai([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Ai([ct.common,ct.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Ai([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Ai([ct.sprite,ct.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:Ai([ct.common,ct.displacementmap,{referencePosition:{value:new pe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:Ai([ct.lights,ct.fog,{color:{value:new sn(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Qr.physical={uniforms:Ai([Qr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new ln(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new sn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new ln},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new sn(0)},specularColor:{value:new sn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new ln},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const ud={r:0,b:0,g:0},na=new ls,Hb=new In;function Gb(i,e,t,r,o,a){const c=new sn(0);let f=o===!0?0:1,p,u,h=null,_=0,g=null;function m(L){let k=L.isScene===!0?L.background:null;if(k&&k.isTexture){const I=L.backgroundBlurriness>0;k=e.get(k,I)}return k}function M(L){let k=!1;const I=m(L);I===null?x(c,f):I&&I.isColor&&(x(I,1),k=!0);const $=i.xr.getEnvironmentBlendMode();$==="additive"?t.buffers.color.setClear(0,0,0,1,a):$==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(i.autoClear||k)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function T(L,k){const I=m(k);I&&(I.isCubeTexture||I.mapping===Bd)?(u===void 0&&(u=new yr(new Ac(1,1,1),new tr({name:"BackgroundCubeMaterial",uniforms:gl(Qr.backgroundCube.uniforms),vertexShader:Qr.backgroundCube.vertexShader,fragmentShader:Qr.backgroundCube.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function($,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),na.copy(k.backgroundRotation),na.x*=-1,na.y*=-1,na.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(na.y*=-1,na.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Hb.makeRotationFromEuler(na)),u.material.toneMapped=an.getTransfer(I.colorSpace)!==vn,(h!==I||_!==I.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,h=I,_=I.version,g=i.toneMapping),u.layers.enableAll(),L.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new yr(new wl(2,2),new tr({name:"BackgroundMaterial",uniforms:gl(Qr.background.uniforms),vertexShader:Qr.background.vertexShader,fragmentShader:Qr.background.fragmentShader,side:Po,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,p.material.toneMapped=an.getTransfer(I.colorSpace)!==vn,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||_!==I.version||g!==i.toneMapping)&&(p.material.needsUpdate=!0,h=I,_=I.version,g=i.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function x(L,k){L.getRGB(ud,zx(i)),t.buffers.color.setClear(ud.r,ud.g,ud.b,k,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return c},setClearColor:function(L,k=1){c.set(L),f=k,x(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(L){f=L,x(c,f)},render:M,addToRenderList:T,dispose:y}}function Wb(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},o=g(null);let a=o,c=!1;function f(U,j,G,J,se){let ie=!1;const K=_(U,J,G,j);a!==K&&(a=K,u(a.object)),ie=m(U,J,G,se),ie&&M(U,J,G,se),se!==null&&e.update(se,i.ELEMENT_ARRAY_BUFFER),(ie||c)&&(c=!1,I(U,j,G,J),se!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function p(){return i.createVertexArray()}function u(U){return i.bindVertexArray(U)}function h(U){return i.deleteVertexArray(U)}function _(U,j,G,J){const se=J.wireframe===!0;let ie=r[j.id];ie===void 0&&(ie={},r[j.id]=ie);const K=U.isInstancedMesh===!0?U.id:0;let ne=ie[K];ne===void 0&&(ne={},ie[K]=ne);let X=ne[G.id];X===void 0&&(X={},ne[G.id]=X);let oe=X[se];return oe===void 0&&(oe=g(p()),X[se]=oe),oe}function g(U){const j=[],G=[],J=[];for(let se=0;se<t;se++)j[se]=0,G[se]=0,J[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:G,attributeDivisors:J,object:U,attributes:{},index:null}}function m(U,j,G,J){const se=a.attributes,ie=j.attributes;let K=0;const ne=G.getAttributes();for(const X in ne)if(ne[X].location>=0){const F=se[X];let Y=ie[X];if(Y===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(Y=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(Y=U.instanceColor)),F===void 0||F.attribute!==Y||Y&&F.data!==Y.data)return!0;K++}return a.attributesNum!==K||a.index!==J}function M(U,j,G,J){const se={},ie=j.attributes;let K=0;const ne=G.getAttributes();for(const X in ne)if(ne[X].location>=0){let F=ie[X];F===void 0&&(X==="instanceMatrix"&&U.instanceMatrix&&(F=U.instanceMatrix),X==="instanceColor"&&U.instanceColor&&(F=U.instanceColor));const Y={};Y.attribute=F,F&&F.data&&(Y.data=F.data),se[X]=Y,K++}a.attributes=se,a.attributesNum=K,a.index=J}function T(){const U=a.newAttributes;for(let j=0,G=U.length;j<G;j++)U[j]=0}function x(U){y(U,0)}function y(U,j){const G=a.newAttributes,J=a.enabledAttributes,se=a.attributeDivisors;G[U]=1,J[U]===0&&(i.enableVertexAttribArray(U),J[U]=1),se[U]!==j&&(i.vertexAttribDivisor(U,j),se[U]=j)}function L(){const U=a.newAttributes,j=a.enabledAttributes;for(let G=0,J=j.length;G<J;G++)j[G]!==U[G]&&(i.disableVertexAttribArray(G),j[G]=0)}function k(U,j,G,J,se,ie,K){K===!0?i.vertexAttribIPointer(U,j,G,se,ie):i.vertexAttribPointer(U,j,G,J,se,ie)}function I(U,j,G,J){T();const se=J.attributes,ie=G.getAttributes(),K=j.defaultAttributeValues;for(const ne in ie){const X=ie[ne];if(X.location>=0){let oe=se[ne];if(oe===void 0&&(ne==="instanceMatrix"&&U.instanceMatrix&&(oe=U.instanceMatrix),ne==="instanceColor"&&U.instanceColor&&(oe=U.instanceColor)),oe!==void 0){const F=oe.normalized,Y=oe.itemSize,Ie=e.get(oe);if(Ie===void 0)continue;const Re=Ie.buffer,et=Ie.type,ae=Ie.bytesPerElement,Ce=et===i.INT||et===i.UNSIGNED_INT||oe.gpuType===hm;if(oe.isInterleavedBufferAttribute){const Te=oe.data,Je=Te.stride,je=oe.offset;if(Te.isInstancedInterleavedBuffer){for(let ot=0;ot<X.locationSize;ot++)y(X.location+ot,Te.meshPerAttribute);U.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let ot=0;ot<X.locationSize;ot++)x(X.location+ot);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let ot=0;ot<X.locationSize;ot++)k(X.location+ot,Y/X.locationSize,et,F,Je*ae,(je+Y/X.locationSize*ot)*ae,Ce)}else{if(oe.isInstancedBufferAttribute){for(let Te=0;Te<X.locationSize;Te++)y(X.location+Te,oe.meshPerAttribute);U.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Te=0;Te<X.locationSize;Te++)x(X.location+Te);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let Te=0;Te<X.locationSize;Te++)k(X.location+Te,Y/X.locationSize,et,F,Y*ae,Y/X.locationSize*Te*ae,Ce)}}else if(K!==void 0){const F=K[ne];if(F!==void 0)switch(F.length){case 2:i.vertexAttrib2fv(X.location,F);break;case 3:i.vertexAttrib3fv(X.location,F);break;case 4:i.vertexAttrib4fv(X.location,F);break;default:i.vertexAttrib1fv(X.location,F)}}}}L()}function $(){C();for(const U in r){const j=r[U];for(const G in j){const J=j[G];for(const se in J){const ie=J[se];for(const K in ie)h(ie[K].object),delete ie[K];delete J[se]}}delete r[U]}}function w(U){if(r[U.id]===void 0)return;const j=r[U.id];for(const G in j){const J=j[G];for(const se in J){const ie=J[se];for(const K in ie)h(ie[K].object),delete ie[K];delete J[se]}}delete r[U.id]}function R(U){for(const j in r){const G=r[j];for(const J in G){const se=G[J];if(se[U.id]===void 0)continue;const ie=se[U.id];for(const K in ie)h(ie[K].object),delete ie[K];delete se[U.id]}}}function b(U){for(const j in r){const G=r[j],J=U.isInstancedMesh===!0?U.id:0,se=G[J];if(se!==void 0){for(const ie in se){const K=se[ie];for(const ne in K)h(K[ne].object),delete K[ne];delete se[ie]}delete G[J],Object.keys(G).length===0&&delete r[j]}}}function C(){B(),c=!0,a!==o&&(a=o,u(a.object))}function B(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:C,resetDefaultState:B,dispose:$,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:R,initAttributes:T,enableAttribute:x,disableUnusedAttributes:L}}function jb(i,e,t){let r;function o(u){r=u}function a(u,h){i.drawArrays(r,u,h),t.update(h,r,1)}function c(u,h,_){_!==0&&(i.drawArraysInstanced(r,u,h,_),t.update(h,r,_))}function f(u,h,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,u,0,h,0,_);let m=0;for(let M=0;M<_;M++)m+=h[M];t.update(m,r,1)}function p(u,h,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let M=0;M<u.length;M++)c(u[M],h[M],g[M]);else{m.multiDrawArraysInstancedWEBGL(r,u,0,h,0,g,0,_);let M=0;for(let T=0;T<_;T++)M+=h[T]*g[T];t.update(M,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function Xb(i,e,t,r){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(R){return!(R!==zr&&r.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(R){const b=R===Ns&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==er&&r.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ns&&!b)}function p(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const h=p(u);h!==u&&(Ot("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const _=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),L=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),k=i.getParameter(i.MAX_VARYING_VECTORS),I=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),$=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:u,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:m,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:L,maxVaryings:k,maxFragmentUniforms:I,maxSamples:$,samples:w}}function Yb(i){const e=this;let t=null,r=0,o=!1,a=!1;const c=new sa,f=new Wt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const m=_.length!==0||g||r!==0||o;return o=g,r=_.length,m},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,g){t=h(_,g,0)},this.setState=function(_,g,m){const M=_.clippingPlanes,T=_.clipIntersection,x=_.clipShadows,y=i.get(_);if(!o||M===null||M.length===0||a&&!x)a?h(null):u();else{const L=a?0:r,k=L*4;let I=y.clippingState||null;p.value=I,I=h(M,g,k,m);for(let $=0;$!==k;++$)I[$]=t[$];y.clippingState=I,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function u(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function h(_,g,m,M){const T=_!==null?_.length:0;let x=null;if(T!==0){if(x=p.value,M!==!0||x===null){const y=m+T*4,L=g.matrixWorldInverse;f.getNormalMatrix(L),(x===null||x.length<y)&&(x=new Float32Array(y));for(let k=0,I=m;k!==T;++k,I+=4)c.copy(_[k]).applyMatrix4(L,f),c.normal.toArray(x,I),x[I+3]=c.constant}p.value=x,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,x}}const To=4,cv=[.125,.215,.35,.446,.526,.582],aa=20,qb=256,dc=new Rc,uv=new sn;let Xh=null,Yh=0,qh=0,Kh=!1;const Kb=new pe;class dv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,a={}){const{size:c=256,position:f=Kb}=a;Xh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,f),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xh,Yh,qh),this._renderer.xr.enabled=Kh,e.scissorTest=!1,tl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ua||e.mapping===hl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xh=this._renderer.getRenderTarget(),Yh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),Kh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:Ns,format:zr,colorSpace:ml,depthBuffer:!1},o=fv(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fv(e,t,r);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Zb(a)),this._blurMaterial=Qb(a,e,t),this._ggxMaterial=Jb(a,e,t)}return o}_compileMaterial(e){const t=new yr(new Si,e);this._renderer.compile(t,dc)}_sceneToCubeUV(e,t,r,o,a){const p=new Or(90,1,t,r),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,m=_.toneMapping;_.getClearColor(uv),_.toneMapping=rs,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yr(new Ac,new bm({name:"PMREM.Background",side:Bi,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,x=T.material;let y=!1;const L=e.background;L?L.isColor&&(x.color.copy(L),e.background=null,y=!0):(x.color.copy(uv),y=!0);for(let k=0;k<6;k++){const I=k%3;I===0?(p.up.set(0,u[k],0),p.position.set(a.x,a.y,a.z),p.lookAt(a.x+h[k],a.y,a.z)):I===1?(p.up.set(0,0,u[k]),p.position.set(a.x,a.y,a.z),p.lookAt(a.x,a.y+h[k],a.z)):(p.up.set(0,u[k],0),p.position.set(a.x,a.y,a.z),p.lookAt(a.x,a.y,a.z+h[k]));const $=this._cubeSize;tl(o,I*$,k>2?$:0,$,$),_.setRenderTarget(o),y&&_.render(T,p),_.render(e,p)}_.toneMapping=m,_.autoClear=g,e.background=L}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===ua||e.mapping===hl;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=pv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hv());const a=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const f=a.uniforms;f.envMap.value=e;const p=this._cubeSize;tl(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(c,dc)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let a=1;a<o;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[r];f.material=c;const p=c.uniforms,u=r/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),_=Math.sqrt(u*u-h*h),g=0+u*1.25,m=_*g,{_lodMax:M}=this,T=this._sizeLods[r],x=3*T*(r>M-To?r-M+To:0),y=4*(this._cubeSize-T);p.envMap.value=e.texture,p.roughness.value=m,p.mipInt.value=M-t,tl(a,x,y,3*T,2*T),o.setRenderTarget(a),o.render(f,dc),p.envMap.value=a.texture,p.roughness.value=0,p.mipInt.value=M-r,tl(e,x,y,3*T,2*T),o.setRenderTarget(e),o.render(f,dc)}_blur(e,t,r,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",a),this._halfBlur(c,e,r,r,o,"longitudinal",a)}_halfBlur(e,t,r,o,a,c,f){const p=this._renderer,u=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&dn("blur direction must be either latitudinal or longitudinal!");const h=3,_=this._lodMeshes[o];_.material=u;const g=u.uniforms,m=this._sizeLods[r]-1,M=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*aa-1),T=a/M,x=isFinite(a)?1+Math.floor(h*T):aa;x>aa&&Ot(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${aa}`);const y=[];let L=0;for(let R=0;R<aa;++R){const b=R/T,C=Math.exp(-b*b/2);y.push(C),R===0?L+=C:R<x&&(L+=2*C)}for(let R=0;R<y.length;R++)y[R]=y[R]/L;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=y,g.latitudinal.value=c==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:k}=this;g.dTheta.value=M,g.mipInt.value=k-r;const I=this._sizeLods[o],$=3*I*(o>k-To?o-k+To:0),w=4*(this._cubeSize-I);tl(t,$,w,3*I,2*I),p.setRenderTarget(t),p.render(_,dc)}}function Zb(i){const e=[],t=[],r=[];let o=i;const a=i-To+1+cv.length;for(let c=0;c<a;c++){const f=Math.pow(2,o);e.push(f);let p=1/f;c>i-To?p=cv[c-i+To-1]:c===0&&(p=0),t.push(p);const u=1/(f-2),h=-u,_=1+u,g=[h,h,_,h,_,_,h,h,_,_,h,_],m=6,M=6,T=3,x=2,y=1,L=new Float32Array(T*M*m),k=new Float32Array(x*M*m),I=new Float32Array(y*M*m);for(let w=0;w<m;w++){const R=w%3*2/3-1,b=w>2?0:-1,C=[R,b,0,R+2/3,b,0,R+2/3,b+1,0,R,b,0,R+2/3,b+1,0,R,b+1,0];L.set(C,T*M*w),k.set(g,x*M*w);const B=[w,w,w,w,w,w];I.set(B,y*M*w)}const $=new Si;$.setAttribute("position",new os(L,T)),$.setAttribute("uv",new os(k,x)),$.setAttribute("faceIndex",new os(I,y)),r.push(new yr($,null)),o>To&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function fv(i,e,t){const r=new ss(i,e,t);return r.texture.mapping=Bd,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function tl(i,e,t,r,o){i.viewport.set(e,t,r,o),i.scissor.set(e,t,r,o)}function Jb(i,e,t){return new tr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$d(),fragmentShader:`

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
		`,blending:Is,depthTest:!1,depthWrite:!1})}function Qb(i,e,t){const r=new Float32Array(aa),o=new pe(0,1,0);return new tr({name:"SphericalGaussianBlur",defines:{n:aa,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:$d(),fragmentShader:`

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
		`,blending:Is,depthTest:!1,depthWrite:!1})}function hv(){return new tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$d(),fragmentShader:`

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
		`,blending:Is,depthTest:!1,depthWrite:!1})}function pv(){return new tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Is,depthTest:!1,depthWrite:!1})}function $d(){return`

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
	`}class Gx extends ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Ux(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Ac(5,5,5),a=new tr({name:"CubemapFromEquirect",uniforms:gl(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Bi,blending:Is});a.uniforms.tEquirect.value=t;const c=new yr(o,a),f=t.minFilter;return t.minFilter===Eo&&(t.minFilter=qn),new oS(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(a)}}function ew(i){let e=new WeakMap,t=new WeakMap,r=null;function o(g,m=!1){return g==null?null:m?c(g):a(g)}function a(g){if(g&&g.isTexture){const m=g.mapping;if(m===xh||m===_h)if(e.has(g)){const M=e.get(g).texture;return f(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const T=new Gx(M.height);return T.fromEquirectangularTexture(i,g),e.set(g,T),g.addEventListener("dispose",u),f(T.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const m=g.mapping,M=m===xh||m===_h,T=m===ua||m===hl;if(M||T){let x=t.get(g);const y=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return r===null&&(r=new dv(i)),x=M?r.fromEquirectangular(g,x):r.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),x.texture;if(x!==void 0)return x.texture;{const L=g.image;return M&&L&&L.height>0||T&&L&&p(L)?(r===null&&(r=new dv(i)),x=M?r.fromEquirectangular(g):r.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),g.addEventListener("dispose",h),x.texture):null}}}return g}function f(g,m){return m===xh?g.mapping=ua:m===_h&&(g.mapping=hl),g}function p(g){let m=0;const M=6;for(let T=0;T<M;T++)g[T]!==void 0&&m++;return m===M}function u(g){const m=g.target;m.removeEventListener("dispose",u);const M=e.get(m);M!==void 0&&(e.delete(m),M.dispose())}function h(g){const m=g.target;m.removeEventListener("dispose",h);const M=t.get(m);M!==void 0&&(t.delete(m),M.dispose())}function _(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function tw(i){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=i.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Dd("WebGLRenderer: "+r+" extension not supported."),o}}}function nw(i,e,t,r){const o={},a=new WeakMap;function c(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",c),delete o[g.id];const m=a.get(g);m&&(e.remove(m),a.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(_,g){return o[g.id]===!0||(g.addEventListener("dispose",c),o[g.id]=!0,t.memory.geometries++),g}function p(_){const g=_.attributes;for(const m in g)e.update(g[m],i.ARRAY_BUFFER)}function u(_){const g=[],m=_.index,M=_.attributes.position;let T=0;if(M===void 0)return;if(m!==null){const L=m.array;T=m.version;for(let k=0,I=L.length;k<I;k+=3){const $=L[k+0],w=L[k+1],R=L[k+2];g.push($,w,w,R,R,$)}}else{const L=M.array;T=M.version;for(let k=0,I=L.length/3-1;k<I;k+=3){const $=k+0,w=k+1,R=k+2;g.push($,w,w,R,R,$)}}const x=new(M.count>=65535?Lx:Ix)(g,1);x.version=T;const y=a.get(_);y&&e.remove(y),a.set(_,x)}function h(_){const g=a.get(_);if(g){const m=_.index;m!==null&&g.version<m.version&&u(_)}else u(_);return a.get(_)}return{get:f,update:p,getWireframeAttribute:h}}function iw(i,e,t){let r;function o(g){r=g}let a,c;function f(g){a=g.type,c=g.bytesPerElement}function p(g,m){i.drawElements(r,m,a,g*c),t.update(m,r,1)}function u(g,m,M){M!==0&&(i.drawElementsInstanced(r,m,a,g*c,M),t.update(m,r,M))}function h(g,m,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,m,0,a,g,0,M);let x=0;for(let y=0;y<M;y++)x+=m[y];t.update(x,r,1)}function _(g,m,M,T){if(M===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<g.length;y++)u(g[y]/c,m[y],T[y]);else{x.multiDrawElementsInstancedWEBGL(r,m,0,a,g,0,T,0,M);let y=0;for(let L=0;L<M;L++)y+=m[L]*T[L];t.update(y,r,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=_}function rw(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,c,f){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=f*(a/3);break;case i.LINES:t.lines+=f*(a/2);break;case i.LINE_STRIP:t.lines+=f*(a-1);break;case i.LINE_LOOP:t.lines+=f*a;break;case i.POINTS:t.points+=f*a;break;default:dn("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function sw(i,e,t){const r=new WeakMap,o=new Un;function a(c,f,p){const u=c.morphTargetInfluences,h=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=h!==void 0?h.length:0;let g=r.get(f);if(g===void 0||g.count!==_){let C=function(){R.dispose(),r.delete(f),f.removeEventListener("dispose",C)};g!==void 0&&g.texture.dispose();const m=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,T=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],y=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let k=0;m===!0&&(k=1),M===!0&&(k=2),T===!0&&(k=3);let I=f.attributes.position.count*k,$=1;I>e.maxTextureSize&&($=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const w=new Float32Array(I*$*4*_),R=new Cx(w,I,$,_);R.type=ns,R.needsUpdate=!0;const b=k*4;for(let B=0;B<_;B++){const U=x[B],j=y[B],G=L[B],J=I*$*4*B;for(let se=0;se<U.count;se++){const ie=se*b;m===!0&&(o.fromBufferAttribute(U,se),w[J+ie+0]=o.x,w[J+ie+1]=o.y,w[J+ie+2]=o.z,w[J+ie+3]=0),M===!0&&(o.fromBufferAttribute(j,se),w[J+ie+4]=o.x,w[J+ie+5]=o.y,w[J+ie+6]=o.z,w[J+ie+7]=0),T===!0&&(o.fromBufferAttribute(G,se),w[J+ie+8]=o.x,w[J+ie+9]=o.y,w[J+ie+10]=o.z,w[J+ie+11]=G.itemSize===4?o.w:1)}}g={count:_,texture:R,size:new ln(I,$)},r.set(f,g),f.addEventListener("dispose",C)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let m=0;for(let T=0;T<u.length;T++)m+=u[T];const M=f.morphTargetsRelative?1:1-m;p.getUniforms().setValue(i,"morphTargetBaseInfluence",M),p.getUniforms().setValue(i,"morphTargetInfluences",u)}p.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:a}}function ow(i,e,t,r,o){let a=new WeakMap;function c(u){const h=o.render.frame,_=u.geometry,g=e.get(u,_);if(a.get(g)!==h&&(e.update(g),a.set(g,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",p)===!1&&u.addEventListener("dispose",p),a.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),a.set(u,h))),u.isSkinnedMesh){const m=u.skeleton;a.get(m)!==h&&(m.update(),a.set(m,h))}return g}function f(){a=new WeakMap}function p(u){const h=u.target;h.removeEventListener("dispose",p),r.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:c,dispose:f}}const aw={[ux]:"LINEAR_TONE_MAPPING",[dx]:"REINHARD_TONE_MAPPING",[fx]:"CINEON_TONE_MAPPING",[hx]:"ACES_FILMIC_TONE_MAPPING",[mx]:"AGX_TONE_MAPPING",[gx]:"NEUTRAL_TONE_MAPPING",[px]:"CUSTOM_TONE_MAPPING"};function lw(i,e,t,r,o){const a=new ss(e,t,{type:i,depthBuffer:r,stencilBuffer:o}),c=new ss(e,t,{type:Ns,depthBuffer:!1,stencilBuffer:!1}),f=new Si;f.setAttribute("position",new An([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new An([0,2,0,0,2,0],2));const p=new Z1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new yr(f,p),h=new Rc(-1,1,1,-1,0,1);let _=null,g=null,m=!1,M,T=null,x=[],y=!1;this.setSize=function(L,k){a.setSize(L,k),c.setSize(L,k);for(let I=0;I<x.length;I++){const $=x[I];$.setSize&&$.setSize(L,k)}},this.setEffects=function(L){x=L,y=x.length>0&&x[0].isRenderPass===!0;const k=a.width,I=a.height;for(let $=0;$<x.length;$++){const w=x[$];w.setSize&&w.setSize(k,I)}},this.begin=function(L,k){if(m||L.toneMapping===rs&&x.length===0)return!1;if(T=k,k!==null){const I=k.width,$=k.height;(a.width!==I||a.height!==$)&&this.setSize(I,$)}return y===!1&&L.setRenderTarget(a),M=L.toneMapping,L.toneMapping=rs,!0},this.hasRenderPass=function(){return y},this.end=function(L,k){L.toneMapping=M,m=!0;let I=a,$=c;for(let w=0;w<x.length;w++){const R=x[w];if(R.enabled!==!1&&(R.render(L,$,I,k),R.needsSwap!==!1)){const b=I;I=$,$=b}}if(_!==L.outputColorSpace||g!==L.toneMapping){_=L.outputColorSpace,g=L.toneMapping,p.defines={},an.getTransfer(_)===vn&&(p.defines.SRGB_TRANSFER="");const w=aw[g];w&&(p.defines[w]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=I.texture,L.setRenderTarget(T),L.render(u,h),T=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),c.dispose(),f.dispose(),p.dispose()}}const Wx=new yi,nm=new wc(1,1),jx=new Cx,Xx=new T1,Yx=new Ux,mv=[],gv=[],vv=new Float32Array(16),xv=new Float32Array(9),_v=new Float32Array(4);function El(i,e,t){const r=i[0];if(r<=0||r>0)return i;const o=e*t;let a=mv[o];if(a===void 0&&(a=new Float32Array(o),mv[o]=a),e!==0){r.toArray(a,0);for(let c=1,f=0;c!==e;++c)f+=t,i[c].toArray(a,f)}return a}function Zn(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function Jn(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function Vd(i,e){let t=gv[e];t===void 0&&(t=new Int32Array(e),gv[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function cw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function uw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zn(t,e))return;i.uniform2fv(this.addr,e),Jn(t,e)}}function dw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zn(t,e))return;i.uniform3fv(this.addr,e),Jn(t,e)}}function fw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zn(t,e))return;i.uniform4fv(this.addr,e),Jn(t,e)}}function hw(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Zn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Jn(t,e)}else{if(Zn(t,r))return;_v.set(r),i.uniformMatrix2fv(this.addr,!1,_v),Jn(t,r)}}function pw(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Zn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Jn(t,e)}else{if(Zn(t,r))return;xv.set(r),i.uniformMatrix3fv(this.addr,!1,xv),Jn(t,r)}}function mw(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(Zn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Jn(t,e)}else{if(Zn(t,r))return;vv.set(r),i.uniformMatrix4fv(this.addr,!1,vv),Jn(t,r)}}function gw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function vw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zn(t,e))return;i.uniform2iv(this.addr,e),Jn(t,e)}}function xw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zn(t,e))return;i.uniform3iv(this.addr,e),Jn(t,e)}}function _w(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zn(t,e))return;i.uniform4iv(this.addr,e),Jn(t,e)}}function yw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Sw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zn(t,e))return;i.uniform2uiv(this.addr,e),Jn(t,e)}}function Mw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zn(t,e))return;i.uniform3uiv(this.addr,e),Jn(t,e)}}function bw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zn(t,e))return;i.uniform4uiv(this.addr,e),Jn(t,e)}}function ww(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o);let a;this.type===i.SAMPLER_2D_SHADOW?(nm.compareFunction=t.isReversedDepthBuffer()?ym:_m,a=nm):a=Wx,t.setTexture2D(e||a,o)}function Ew(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Xx,o)}function Tw(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Yx,o)}function Cw(i,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(i.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||jx,o)}function Aw(i){switch(i){case 5126:return cw;case 35664:return uw;case 35665:return dw;case 35666:return fw;case 35674:return hw;case 35675:return pw;case 35676:return mw;case 5124:case 35670:return gw;case 35667:case 35671:return vw;case 35668:case 35672:return xw;case 35669:case 35673:return _w;case 5125:return yw;case 36294:return Sw;case 36295:return Mw;case 36296:return bw;case 35678:case 36198:case 36298:case 36306:case 35682:return ww;case 35679:case 36299:case 36307:return Ew;case 35680:case 36300:case 36308:case 36293:return Tw;case 36289:case 36303:case 36311:case 36292:return Cw}}function Rw(i,e){i.uniform1fv(this.addr,e)}function Pw(i,e){const t=El(e,this.size,2);i.uniform2fv(this.addr,t)}function Iw(i,e){const t=El(e,this.size,3);i.uniform3fv(this.addr,t)}function Lw(i,e){const t=El(e,this.size,4);i.uniform4fv(this.addr,t)}function Dw(i,e){const t=El(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Nw(i,e){const t=El(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function kw(i,e){const t=El(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Uw(i,e){i.uniform1iv(this.addr,e)}function Fw(i,e){i.uniform2iv(this.addr,e)}function Ow(i,e){i.uniform3iv(this.addr,e)}function Bw(i,e){i.uniform4iv(this.addr,e)}function zw(i,e){i.uniform1uiv(this.addr,e)}function $w(i,e){i.uniform2uiv(this.addr,e)}function Vw(i,e){i.uniform3uiv(this.addr,e)}function Hw(i,e){i.uniform4uiv(this.addr,e)}function Gw(i,e,t){const r=this.cache,o=e.length,a=Vd(t,o);Zn(r,a)||(i.uniform1iv(this.addr,a),Jn(r,a));let c;this.type===i.SAMPLER_2D_SHADOW?c=nm:c=Wx;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||c,a[f])}function Ww(i,e,t){const r=this.cache,o=e.length,a=Vd(t,o);Zn(r,a)||(i.uniform1iv(this.addr,a),Jn(r,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||Xx,a[c])}function jw(i,e,t){const r=this.cache,o=e.length,a=Vd(t,o);Zn(r,a)||(i.uniform1iv(this.addr,a),Jn(r,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||Yx,a[c])}function Xw(i,e,t){const r=this.cache,o=e.length,a=Vd(t,o);Zn(r,a)||(i.uniform1iv(this.addr,a),Jn(r,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||jx,a[c])}function Yw(i){switch(i){case 5126:return Rw;case 35664:return Pw;case 35665:return Iw;case 35666:return Lw;case 35674:return Dw;case 35675:return Nw;case 35676:return kw;case 5124:case 35670:return Uw;case 35667:case 35671:return Fw;case 35668:case 35672:return Ow;case 35669:case 35673:return Bw;case 5125:return zw;case 36294:return $w;case 36295:return Vw;case 36296:return Hw;case 35678:case 36198:case 36298:case 36306:case 35682:return Gw;case 35679:case 36299:case 36307:return Ww;case 35680:case 36300:case 36308:case 36293:return jw;case 36289:case 36303:case 36311:case 36292:return Xw}}class qw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Aw(t.type)}}class Kw{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yw(t.type)}}class Zw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const f=o[a];f.setValue(e,t[f.id],r)}}}const Zh=/(\w+)(\])?(\[|\.)?/g;function yv(i,e){i.seq.push(e),i.map[e.id]=e}function Jw(i,e,t){const r=i.name,o=r.length;for(Zh.lastIndex=0;;){const a=Zh.exec(r),c=Zh.lastIndex;let f=a[1];const p=a[2]==="]",u=a[3];if(p&&(f=f|0),u===void 0||u==="["&&c+2===o){yv(t,u===void 0?new qw(f,i,e):new Kw(f,i,e));break}else{let _=t.map[f];_===void 0&&(_=new Zw(f),yv(t,_)),t=_}}}class Cd{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const f=e.getActiveUniform(t,c),p=e.getUniformLocation(t,f.name);Jw(f,p,this)}const o=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):a.push(c);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,r,o){const a=this.map[t];a!==void 0&&a.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let a=0,c=t.length;a!==c;++a){const f=t[a],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function Sv(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const Qw=37297;let eE=0;function tE(i,e){const t=i.split(`
`),r=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const Mv=new Wt;function nE(i){an._getMatrix(Mv,an.workingColorSpace,i);const e=`mat3( ${Mv.elements.map(t=>t.toFixed(4))} )`;switch(an.getTransfer(i)){case Id:return[e,"LinearTransferOETF"];case vn:return[e,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function bv(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+tE(i.getShaderSource(e),f)}else return a}function iE(i,e){const t=nE(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const rE={[ux]:"Linear",[dx]:"Reinhard",[fx]:"Cineon",[hx]:"ACESFilmic",[mx]:"AgX",[gx]:"Neutral",[px]:"Custom"};function sE(i,e){const t=rE[e];return t===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const dd=new pe;function oE(){an.getLuminanceCoefficients(dd);const i=dd.x.toFixed(4),e=dd.y.toFixed(4),t=dd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mc).join(`
`)}function lE(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function cE(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const a=i.getActiveAttrib(e,o),c=a.name;let f=1;a.type===i.FLOAT_MAT2&&(f=2),a.type===i.FLOAT_MAT3&&(f=3),a.type===i.FLOAT_MAT4&&(f=4),t[c]={type:a.type,location:i.getAttribLocation(e,c),locationSize:f}}return t}function mc(i){return i!==""}function wv(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ev(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uE=/^[ \t]*#include +<([\w\d./]+)>/gm;function im(i){return i.replace(uE,fE)}const dE=new Map;function fE(i,e){let t=Xt[e];if(t===void 0){const r=dE.get(e);if(r!==void 0)t=Xt[r],Ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return im(t)}const hE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tv(i){return i.replace(hE,pE)}function pE(i,e,t,r){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function Cv(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const mE={[Md]:"SHADOWMAP_TYPE_PCF",[pc]:"SHADOWMAP_TYPE_VSM"};function gE(i){return mE[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vE={[ua]:"ENVMAP_TYPE_CUBE",[hl]:"ENVMAP_TYPE_CUBE",[Bd]:"ENVMAP_TYPE_CUBE_UV"};function xE(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":vE[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const _E={[hl]:"ENVMAP_MODE_REFRACTION"};function yE(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":_E[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const SE={[cx]:"ENVMAP_BLENDING_MULTIPLY",[Gy]:"ENVMAP_BLENDING_MIX",[Wy]:"ENVMAP_BLENDING_ADD"};function ME(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":SE[i.combine]||"ENVMAP_BLENDING_NONE"}function bE(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function wE(i,e,t,r){const o=i.getContext(),a=t.defines;let c=t.vertexShader,f=t.fragmentShader;const p=gE(t),u=xE(t),h=yE(t),_=ME(t),g=bE(t),m=aE(t),M=lE(a),T=o.createProgram();let x,y,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(mc).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(mc).join(`
`),y.length>0&&(y+=`
`)):(x=[Cv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mc).join(`
`),y=[Cv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rs?"#define TONE_MAPPING":"",t.toneMapping!==rs?Xt.tonemapping_pars_fragment:"",t.toneMapping!==rs?sE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,iE("linearToOutputTexel",t.outputColorSpace),oE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mc).join(`
`)),c=im(c),c=wv(c,t),c=Ev(c,t),f=im(f),f=wv(f,t),f=Ev(f,t),c=Tv(c),f=Tv(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",t.glslVersion===Dg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const k=L+x+c,I=L+y+f,$=Sv(o,o.VERTEX_SHADER,k),w=Sv(o,o.FRAGMENT_SHADER,I);o.attachShader(T,$),o.attachShader(T,w),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function R(U){if(i.debug.checkShaderErrors){const j=o.getProgramInfoLog(T)||"",G=o.getShaderInfoLog($)||"",J=o.getShaderInfoLog(w)||"",se=j.trim(),ie=G.trim(),K=J.trim();let ne=!0,X=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,T,$,w);else{const oe=bv(o,$,"vertex"),F=bv(o,w,"fragment");dn("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+se+`
`+oe+`
`+F)}else se!==""?Ot("WebGLProgram: Program Info Log:",se):(ie===""||K==="")&&(X=!1);X&&(U.diagnostics={runnable:ne,programLog:se,vertexShader:{log:ie,prefix:x},fragmentShader:{log:K,prefix:y}})}o.deleteShader($),o.deleteShader(w),b=new Cd(o,T),C=cE(o,T)}let b;this.getUniforms=function(){return b===void 0&&R(this),b};let C;this.getAttributes=function(){return C===void 0&&R(this),C};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=o.getProgramParameter(T,Qw)),B},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eE++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=$,this.fragmentShader=w,this}let EE=0;class TE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new CE(e),t.set(e,r)),r}}class CE{constructor(e){this.id=EE++,this.code=e,this.usedTimes=0}}function AE(i,e,t,r,o,a){const c=new Ax,f=new TE,p=new Set,u=[],h=new Map,_=r.logarithmicDepthBuffer;let g=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return p.add(b),b===0?"uv":`uv${b}`}function T(b,C,B,U,j){const G=U.fog,J=j.geometry,se=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,ie=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,K=e.get(b.envMap||se,ie),ne=K&&K.mapping===Bd?K.image.height:null,X=m[b.type];b.precision!==null&&(g=r.getMaxPrecision(b.precision),g!==b.precision&&Ot("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const oe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,F=oe!==void 0?oe.length:0;let Y=0;J.morphAttributes.position!==void 0&&(Y=1),J.morphAttributes.normal!==void 0&&(Y=2),J.morphAttributes.color!==void 0&&(Y=3);let Ie,Re,et,ae;if(X){const Yt=Qr[X];Ie=Yt.vertexShader,Re=Yt.fragmentShader}else Ie=b.vertexShader,Re=b.fragmentShader,f.update(b),et=f.getVertexShaderID(b),ae=f.getFragmentShaderID(b);const Ce=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),Je=j.isInstancedMesh===!0,je=j.isBatchedMesh===!0,ot=!!b.map,cn=!!b.matcap,Et=!!K,Rt=!!b.aoMap,Gt=!!b.lightMap,bt=!!b.bumpMap,nn=!!b.normalMap,Z=!!b.displacementMap,fn=!!b.emissiveMap,$t=!!b.metalnessMap,jt=!!b.roughnessMap,ut=b.anisotropy>0,z=b.clearcoat>0,A=b.dispersion>0,re=b.iridescence>0,Ae=b.sheen>0,Le=b.transmission>0,we=ut&&!!b.anisotropyMap,st=z&&!!b.clearcoatMap,He=z&&!!b.clearcoatNormalMap,at=z&&!!b.clearcoatRoughnessMap,vt=re&&!!b.iridescenceMap,ke=re&&!!b.iridescenceThicknessMap,We=Ae&&!!b.sheenColorMap,rt=Ae&&!!b.sheenRoughnessMap,it=!!b.specularMap,tt=!!b.specularColorMap,Ct=!!b.specularIntensityMap,Q=Le&&!!b.transmissionMap,Fe=Le&&!!b.thicknessMap,$e=!!b.gradientMap,Ke=!!b.alphaMap,Oe=b.alphaTest>0,be=!!b.alphaHash,lt=!!b.extensions;let Pt=rs;b.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(Pt=i.toneMapping);const en={shaderID:X,shaderType:b.type,shaderName:b.name,vertexShader:Ie,fragmentShader:Re,defines:b.defines,customVertexShaderID:et,customFragmentShaderID:ae,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:je,batchingColor:je&&j._colorsTexture!==null,instancing:Je,instancingColor:Je&&j.instanceColor!==null,instancingMorph:Je&&j.morphTexture!==null,outputColorSpace:Ce===null?i.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:ml,alphaToCoverage:!!b.alphaToCoverage,map:ot,matcap:cn,envMap:Et,envMapMode:Et&&K.mapping,envMapCubeUVHeight:ne,aoMap:Rt,lightMap:Gt,bumpMap:bt,normalMap:nn,displacementMap:Z,emissiveMap:fn,normalMapObjectSpace:nn&&b.normalMapType===Yy,normalMapTangentSpace:nn&&b.normalMapType===Ex,metalnessMap:$t,roughnessMap:jt,anisotropy:ut,anisotropyMap:we,clearcoat:z,clearcoatMap:st,clearcoatNormalMap:He,clearcoatRoughnessMap:at,dispersion:A,iridescence:re,iridescenceMap:vt,iridescenceThicknessMap:ke,sheen:Ae,sheenColorMap:We,sheenRoughnessMap:rt,specularMap:it,specularColorMap:tt,specularIntensityMap:Ct,transmission:Le,transmissionMap:Q,thicknessMap:Fe,gradientMap:$e,opaque:b.transparent===!1&&b.blending===cl&&b.alphaToCoverage===!1,alphaMap:Ke,alphaTest:Oe,alphaHash:be,combine:b.combine,mapUv:ot&&M(b.map.channel),aoMapUv:Rt&&M(b.aoMap.channel),lightMapUv:Gt&&M(b.lightMap.channel),bumpMapUv:bt&&M(b.bumpMap.channel),normalMapUv:nn&&M(b.normalMap.channel),displacementMapUv:Z&&M(b.displacementMap.channel),emissiveMapUv:fn&&M(b.emissiveMap.channel),metalnessMapUv:$t&&M(b.metalnessMap.channel),roughnessMapUv:jt&&M(b.roughnessMap.channel),anisotropyMapUv:we&&M(b.anisotropyMap.channel),clearcoatMapUv:st&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:He&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:We&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:rt&&M(b.sheenRoughnessMap.channel),specularMapUv:it&&M(b.specularMap.channel),specularColorMapUv:tt&&M(b.specularColorMap.channel),specularIntensityMapUv:Ct&&M(b.specularIntensityMap.channel),transmissionMapUv:Q&&M(b.transmissionMap.channel),thicknessMapUv:Fe&&M(b.thicknessMap.channel),alphaMapUv:Ke&&M(b.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(nn||ut),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!J.attributes.uv&&(ot||Ke),fog:!!G,useFog:b.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||J.attributes.normal===void 0&&nn===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Te,skinning:j.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:Y,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Pt,decodeVideoTexture:ot&&b.map.isVideoTexture===!0&&an.getTransfer(b.map.colorSpace)===vn,decodeVideoTextureEmissive:fn&&b.emissiveMap.isVideoTexture===!0&&an.getTransfer(b.emissiveMap.colorSpace)===vn,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===As,flipSided:b.side===Bi,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:lt&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&b.extensions.multiDraw===!0||je)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return en.vertexUv1s=p.has(1),en.vertexUv2s=p.has(2),en.vertexUv3s=p.has(3),p.clear(),en}function x(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const B in b.defines)C.push(B),C.push(b.defines[B]);return b.isRawShaderMaterial===!1&&(y(C,b),L(C,b),C.push(i.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function y(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function L(b,C){c.disableAll(),C.instancing&&c.enable(0),C.instancingColor&&c.enable(1),C.instancingMorph&&c.enable(2),C.matcap&&c.enable(3),C.envMap&&c.enable(4),C.normalMapObjectSpace&&c.enable(5),C.normalMapTangentSpace&&c.enable(6),C.clearcoat&&c.enable(7),C.iridescence&&c.enable(8),C.alphaTest&&c.enable(9),C.vertexColors&&c.enable(10),C.vertexAlphas&&c.enable(11),C.vertexUv1s&&c.enable(12),C.vertexUv2s&&c.enable(13),C.vertexUv3s&&c.enable(14),C.vertexTangents&&c.enable(15),C.anisotropy&&c.enable(16),C.alphaHash&&c.enable(17),C.batching&&c.enable(18),C.dispersion&&c.enable(19),C.batchingColor&&c.enable(20),C.gradientMap&&c.enable(21),b.push(c.mask),c.disableAll(),C.fog&&c.enable(0),C.useFog&&c.enable(1),C.flatShading&&c.enable(2),C.logarithmicDepthBuffer&&c.enable(3),C.reversedDepthBuffer&&c.enable(4),C.skinning&&c.enable(5),C.morphTargets&&c.enable(6),C.morphNormals&&c.enable(7),C.morphColors&&c.enable(8),C.premultipliedAlpha&&c.enable(9),C.shadowMapEnabled&&c.enable(10),C.doubleSided&&c.enable(11),C.flipSided&&c.enable(12),C.useDepthPacking&&c.enable(13),C.dithering&&c.enable(14),C.transmission&&c.enable(15),C.sheen&&c.enable(16),C.opaque&&c.enable(17),C.pointsUvs&&c.enable(18),C.decodeVideoTexture&&c.enable(19),C.decodeVideoTextureEmissive&&c.enable(20),C.alphaToCoverage&&c.enable(21),b.push(c.mask)}function k(b){const C=m[b.type];let B;if(C){const U=Qr[C];B=Y1.clone(U.uniforms)}else B=b.uniforms;return B}function I(b,C){let B=h.get(C);return B!==void 0?++B.usedTimes:(B=new wE(i,C,b,o),u.push(B),h.set(C,B)),B}function $(b){if(--b.usedTimes===0){const C=u.indexOf(b);u[C]=u[u.length-1],u.pop(),h.delete(b.cacheKey),b.destroy()}}function w(b){f.remove(b)}function R(){f.dispose()}return{getParameters:T,getProgramCacheKey:x,getUniforms:k,acquireProgram:I,releaseProgram:$,releaseShaderCache:w,programs:u,dispose:R}}function RE(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let f=i.get(c);return f===void 0&&(f={},i.set(c,f)),f}function r(c){i.delete(c)}function o(c,f,p){i.get(c)[f]=p}function a(){i=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:a}}function PE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Av(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rv(){const i=[];let e=0;const t=[],r=[],o=[];function a(){e=0,t.length=0,r.length=0,o.length=0}function c(g){let m=0;return g.isInstancedMesh&&(m+=2),g.isSkinnedMesh&&(m+=1),m}function f(g,m,M,T,x,y){let L=i[e];return L===void 0?(L={id:g.id,object:g,geometry:m,material:M,materialVariant:c(g),groupOrder:T,renderOrder:g.renderOrder,z:x,group:y},i[e]=L):(L.id=g.id,L.object=g,L.geometry=m,L.material=M,L.materialVariant=c(g),L.groupOrder=T,L.renderOrder=g.renderOrder,L.z=x,L.group=y),e++,L}function p(g,m,M,T,x,y){const L=f(g,m,M,T,x,y);M.transmission>0?r.push(L):M.transparent===!0?o.push(L):t.push(L)}function u(g,m,M,T,x,y){const L=f(g,m,M,T,x,y);M.transmission>0?r.unshift(L):M.transparent===!0?o.unshift(L):t.unshift(L)}function h(g,m){t.length>1&&t.sort(g||PE),r.length>1&&r.sort(m||Av),o.length>1&&o.sort(m||Av)}function _(){for(let g=e,m=i.length;g<m;g++){const M=i[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:a,push:p,unshift:u,finish:_,sort:h}}function IE(){let i=new WeakMap;function e(r,o){const a=i.get(r);let c;return a===void 0?(c=new Rv,i.set(r,[c])):o>=a.length?(c=new Rv,a.push(c)):c=a[o],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function LE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new pe,color:new sn};break;case"SpotLight":t={position:new pe,direction:new pe,color:new sn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new pe,color:new sn,distance:0,decay:0};break;case"HemisphereLight":t={direction:new pe,skyColor:new sn,groundColor:new sn};break;case"RectAreaLight":t={color:new sn,position:new pe,halfWidth:new pe,halfHeight:new pe};break}return i[e.id]=t,t}}}function DE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ln};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ln};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ln,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let NE=0;function kE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function UE(i){const e=new LE,t=DE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new pe);const o=new pe,a=new In,c=new In;function f(u){let h=0,_=0,g=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let m=0,M=0,T=0,x=0,y=0,L=0,k=0,I=0,$=0,w=0,R=0;u.sort(kE);for(let C=0,B=u.length;C<B;C++){const U=u[C],j=U.color,G=U.intensity,J=U.distance;let se=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===pl?se=U.shadow.map.texture:se=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=j.r*G,_+=j.g*G,g+=j.b*G;else if(U.isLightProbe){for(let ie=0;ie<9;ie++)r.probe[ie].addScaledVector(U.sh.coefficients[ie],G);R++}else if(U.isDirectionalLight){const ie=e.get(U);if(ie.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const K=U.shadow,ne=t.get(U);ne.shadowIntensity=K.intensity,ne.shadowBias=K.bias,ne.shadowNormalBias=K.normalBias,ne.shadowRadius=K.radius,ne.shadowMapSize=K.mapSize,r.directionalShadow[m]=ne,r.directionalShadowMap[m]=se,r.directionalShadowMatrix[m]=U.shadow.matrix,L++}r.directional[m]=ie,m++}else if(U.isSpotLight){const ie=e.get(U);ie.position.setFromMatrixPosition(U.matrixWorld),ie.color.copy(j).multiplyScalar(G),ie.distance=J,ie.coneCos=Math.cos(U.angle),ie.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),ie.decay=U.decay,r.spot[T]=ie;const K=U.shadow;if(U.map&&(r.spotLightMap[$]=U.map,$++,K.updateMatrices(U),U.castShadow&&w++),r.spotLightMatrix[T]=K.matrix,U.castShadow){const ne=t.get(U);ne.shadowIntensity=K.intensity,ne.shadowBias=K.bias,ne.shadowNormalBias=K.normalBias,ne.shadowRadius=K.radius,ne.shadowMapSize=K.mapSize,r.spotShadow[T]=ne,r.spotShadowMap[T]=se,I++}T++}else if(U.isRectAreaLight){const ie=e.get(U);ie.color.copy(j).multiplyScalar(G),ie.halfWidth.set(U.width*.5,0,0),ie.halfHeight.set(0,U.height*.5,0),r.rectArea[x]=ie,x++}else if(U.isPointLight){const ie=e.get(U);if(ie.color.copy(U.color).multiplyScalar(U.intensity),ie.distance=U.distance,ie.decay=U.decay,U.castShadow){const K=U.shadow,ne=t.get(U);ne.shadowIntensity=K.intensity,ne.shadowBias=K.bias,ne.shadowNormalBias=K.normalBias,ne.shadowRadius=K.radius,ne.shadowMapSize=K.mapSize,ne.shadowCameraNear=K.camera.near,ne.shadowCameraFar=K.camera.far,r.pointShadow[M]=ne,r.pointShadowMap[M]=se,r.pointShadowMatrix[M]=U.shadow.matrix,k++}r.point[M]=ie,M++}else if(U.isHemisphereLight){const ie=e.get(U);ie.skyColor.copy(U.color).multiplyScalar(G),ie.groundColor.copy(U.groundColor).multiplyScalar(G),r.hemi[y]=ie,y++}}x>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ct.LTC_FLOAT_1,r.rectAreaLTC2=ct.LTC_FLOAT_2):(r.rectAreaLTC1=ct.LTC_HALF_1,r.rectAreaLTC2=ct.LTC_HALF_2)),r.ambient[0]=h,r.ambient[1]=_,r.ambient[2]=g;const b=r.hash;(b.directionalLength!==m||b.pointLength!==M||b.spotLength!==T||b.rectAreaLength!==x||b.hemiLength!==y||b.numDirectionalShadows!==L||b.numPointShadows!==k||b.numSpotShadows!==I||b.numSpotMaps!==$||b.numLightProbes!==R)&&(r.directional.length=m,r.spot.length=T,r.rectArea.length=x,r.point.length=M,r.hemi.length=y,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=k,r.pointShadowMap.length=k,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=k,r.spotLightMatrix.length=I+$-w,r.spotLightMap.length=$,r.numSpotLightShadowsWithMaps=w,r.numLightProbes=R,b.directionalLength=m,b.pointLength=M,b.spotLength=T,b.rectAreaLength=x,b.hemiLength=y,b.numDirectionalShadows=L,b.numPointShadows=k,b.numSpotShadows=I,b.numSpotMaps=$,b.numLightProbes=R,r.version=NE++)}function p(u,h){let _=0,g=0,m=0,M=0,T=0;const x=h.matrixWorldInverse;for(let y=0,L=u.length;y<L;y++){const k=u[y];if(k.isDirectionalLight){const I=r.directional[_];I.direction.setFromMatrixPosition(k.matrixWorld),o.setFromMatrixPosition(k.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(x),_++}else if(k.isSpotLight){const I=r.spot[m];I.position.setFromMatrixPosition(k.matrixWorld),I.position.applyMatrix4(x),I.direction.setFromMatrixPosition(k.matrixWorld),o.setFromMatrixPosition(k.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(x),m++}else if(k.isRectAreaLight){const I=r.rectArea[M];I.position.setFromMatrixPosition(k.matrixWorld),I.position.applyMatrix4(x),c.identity(),a.copy(k.matrixWorld),a.premultiply(x),c.extractRotation(a),I.halfWidth.set(k.width*.5,0,0),I.halfHeight.set(0,k.height*.5,0),I.halfWidth.applyMatrix4(c),I.halfHeight.applyMatrix4(c),M++}else if(k.isPointLight){const I=r.point[g];I.position.setFromMatrixPosition(k.matrixWorld),I.position.applyMatrix4(x),g++}else if(k.isHemisphereLight){const I=r.hemi[T];I.direction.setFromMatrixPosition(k.matrixWorld),I.direction.transformDirection(x),T++}}}return{setup:f,setupView:p,state:r}}function Pv(i){const e=new UE(i),t=[],r=[];function o(h){u.camera=h,t.length=0,r.length=0}function a(h){t.push(h)}function c(h){r.push(h)}function f(){e.setup(t)}function p(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:u,setupLights:f,setupLightsView:p,pushLight:a,pushShadow:c}}function FE(i){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let f;return c===void 0?(f=new Pv(i),e.set(o,[f])):a>=c.length?(f=new Pv(i),c.push(f)):f=c[a],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const OE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BE=`uniform sampler2D shadow_pass;
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
}`,zE=[new pe(1,0,0),new pe(-1,0,0),new pe(0,1,0),new pe(0,-1,0),new pe(0,0,1),new pe(0,0,-1)],$E=[new pe(0,-1,0),new pe(0,-1,0),new pe(0,0,1),new pe(0,0,-1),new pe(0,-1,0),new pe(0,-1,0)],Iv=new In,fc=new pe,Jh=new pe;function VE(i,e,t){let r=new wm;const o=new ln,a=new ln,c=new Un,f=new J1,p=new Q1,u={},h=t.maxTextureSize,_={[Po]:Bi,[Bi]:Po,[As]:As},g=new tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ln},radius:{value:4}},vertexShader:OE,fragmentShader:BE}),m=g.clone();m.defines.HORIZONTAL_PASS=1;const M=new Si;M.setAttribute("position",new os(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new yr(M,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Md;let y=this.type;this.render=function(w,R,b){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||w.length===0)return;this.type===Ey&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Md);const C=i.getRenderTarget(),B=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),j=i.state;j.setBlending(Is),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const G=y!==this.type;G&&R.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(se=>se.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,se=w.length;J<se;J++){const ie=w[J],K=ie.shadow;if(K===void 0){Ot("WebGLShadowMap:",ie,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;o.copy(K.mapSize);const ne=K.getFrameExtents();o.multiply(ne),a.copy(K.mapSize),(o.x>h||o.y>h)&&(o.x>h&&(a.x=Math.floor(h/ne.x),o.x=a.x*ne.x,K.mapSize.x=a.x),o.y>h&&(a.y=Math.floor(h/ne.y),o.y=a.y*ne.y,K.mapSize.y=a.y));const X=i.state.buffers.depth.getReversed();if(K.camera._reversedDepth=X,K.map===null||G===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===pc){if(ie.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new ss(o.x,o.y,{format:pl,type:Ns,minFilter:qn,magFilter:qn,generateMipmaps:!1}),K.map.texture.name=ie.name+".shadowMap",K.map.depthTexture=new wc(o.x,o.y,ns),K.map.depthTexture.name=ie.name+".shadowMapDepth",K.map.depthTexture.format=ks,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=di,K.map.depthTexture.magFilter=di}else ie.isPointLight?(K.map=new Gx(o.x),K.map.depthTexture=new j1(o.x,as)):(K.map=new ss(o.x,o.y),K.map.depthTexture=new wc(o.x,o.y,as)),K.map.depthTexture.name=ie.name+".shadowMap",K.map.depthTexture.format=ks,this.type===Md?(K.map.depthTexture.compareFunction=X?ym:_m,K.map.depthTexture.minFilter=qn,K.map.depthTexture.magFilter=qn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=di,K.map.depthTexture.magFilter=di);K.camera.updateProjectionMatrix()}const oe=K.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<oe;F++){if(K.map.isWebGLCubeRenderTarget)i.setRenderTarget(K.map,F),i.clear();else{F===0&&(i.setRenderTarget(K.map),i.clear());const Y=K.getViewport(F);c.set(a.x*Y.x,a.y*Y.y,a.x*Y.z,a.y*Y.w),j.viewport(c)}if(ie.isPointLight){const Y=K.camera,Ie=K.matrix,Re=ie.distance||Y.far;Re!==Y.far&&(Y.far=Re,Y.updateProjectionMatrix()),fc.setFromMatrixPosition(ie.matrixWorld),Y.position.copy(fc),Jh.copy(Y.position),Jh.add(zE[F]),Y.up.copy($E[F]),Y.lookAt(Jh),Y.updateMatrixWorld(),Ie.makeTranslation(-fc.x,-fc.y,-fc.z),Iv.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Iv,Y.coordinateSystem,Y.reversedDepth)}else K.updateMatrices(ie);r=K.getFrustum(),I(R,b,K.camera,ie,this.type)}K.isPointLightShadow!==!0&&this.type===pc&&L(K,b),K.needsUpdate=!1}y=this.type,x.needsUpdate=!1,i.setRenderTarget(C,B,U)};function L(w,R){const b=e.update(T);g.defines.VSM_SAMPLES!==w.blurSamples&&(g.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,g.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ss(o.x,o.y,{format:pl,type:Ns})),g.uniforms.shadow_pass.value=w.map.depthTexture,g.uniforms.resolution.value=w.mapSize,g.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,b,g,T,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,b,m,T,null)}function k(w,R,b,C){let B=null;const U=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)B=U;else if(B=b.isPointLight===!0?p:f,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const j=B.uuid,G=R.uuid;let J=u[j];J===void 0&&(J={},u[j]=J);let se=J[G];se===void 0&&(se=B.clone(),J[G]=se,R.addEventListener("dispose",$)),B=se}if(B.visible=R.visible,B.wireframe=R.wireframe,C===pc?B.side=R.shadowSide!==null?R.shadowSide:R.side:B.side=R.shadowSide!==null?R.shadowSide:_[R.side],B.alphaMap=R.alphaMap,B.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,B.map=R.map,B.clipShadows=R.clipShadows,B.clippingPlanes=R.clippingPlanes,B.clipIntersection=R.clipIntersection,B.displacementMap=R.displacementMap,B.displacementScale=R.displacementScale,B.displacementBias=R.displacementBias,B.wireframeLinewidth=R.wireframeLinewidth,B.linewidth=R.linewidth,b.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const j=i.properties.get(B);j.light=b}return B}function I(w,R,b,C,B){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&B===pc)&&(!w.frustumCulled||r.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const G=e.update(w),J=w.material;if(Array.isArray(J)){const se=G.groups;for(let ie=0,K=se.length;ie<K;ie++){const ne=se[ie],X=J[ne.materialIndex];if(X&&X.visible){const oe=k(w,X,C,B);w.onBeforeShadow(i,w,R,b,G,oe,ne),i.renderBufferDirect(b,null,G,oe,w,ne),w.onAfterShadow(i,w,R,b,G,oe,ne)}}}else if(J.visible){const se=k(w,J,C,B);w.onBeforeShadow(i,w,R,b,G,se,null),i.renderBufferDirect(b,null,G,se,w,null),w.onAfterShadow(i,w,R,b,G,se,null)}}const j=w.children;for(let G=0,J=j.length;G<J;G++)I(j[G],R,b,C,B)}function $(w){w.target.removeEventListener("dispose",$);for(const b in u){const C=u[b],B=w.target.uuid;B in C&&(C[B].dispose(),delete C[B])}}}function HE(i,e){function t(){let Q=!1;const Fe=new Un;let $e=null;const Ke=new Un(0,0,0,0);return{setMask:function(Oe){$e!==Oe&&!Q&&(i.colorMask(Oe,Oe,Oe,Oe),$e=Oe)},setLocked:function(Oe){Q=Oe},setClear:function(Oe,be,lt,Pt,en){en===!0&&(Oe*=Pt,be*=Pt,lt*=Pt),Fe.set(Oe,be,lt,Pt),Ke.equals(Fe)===!1&&(i.clearColor(Oe,be,lt,Pt),Ke.copy(Fe))},reset:function(){Q=!1,$e=null,Ke.set(-1,0,0,0)}}}function r(){let Q=!1,Fe=!1,$e=null,Ke=null,Oe=null;return{setReversed:function(be){if(Fe!==be){const lt=e.get("EXT_clip_control");be?lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.ZERO_TO_ONE_EXT):lt.clipControlEXT(lt.LOWER_LEFT_EXT,lt.NEGATIVE_ONE_TO_ONE_EXT),Fe=be;const Pt=Oe;Oe=null,this.setClear(Pt)}},getReversed:function(){return Fe},setTest:function(be){be?Ce(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(be){$e!==be&&!Q&&(i.depthMask(be),$e=be)},setFunc:function(be){if(Fe&&(be=r1[be]),Ke!==be){switch(be){case mp:i.depthFunc(i.NEVER);break;case gp:i.depthFunc(i.ALWAYS);break;case vp:i.depthFunc(i.LESS);break;case fl:i.depthFunc(i.LEQUAL);break;case xp:i.depthFunc(i.EQUAL);break;case _p:i.depthFunc(i.GEQUAL);break;case yp:i.depthFunc(i.GREATER);break;case Sp:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ke=be}},setLocked:function(be){Q=be},setClear:function(be){Oe!==be&&(Oe=be,Fe&&(be=1-be),i.clearDepth(be))},reset:function(){Q=!1,$e=null,Ke=null,Oe=null,Fe=!1}}}function o(){let Q=!1,Fe=null,$e=null,Ke=null,Oe=null,be=null,lt=null,Pt=null,en=null;return{setTest:function(Yt){Q||(Yt?Ce(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(Yt){Fe!==Yt&&!Q&&(i.stencilMask(Yt),Fe=Yt)},setFunc:function(Yt,Fn,Sn){($e!==Yt||Ke!==Fn||Oe!==Sn)&&(i.stencilFunc(Yt,Fn,Sn),$e=Yt,Ke=Fn,Oe=Sn)},setOp:function(Yt,Fn,Sn){(be!==Yt||lt!==Fn||Pt!==Sn)&&(i.stencilOp(Yt,Fn,Sn),be=Yt,lt=Fn,Pt=Sn)},setLocked:function(Yt){Q=Yt},setClear:function(Yt){en!==Yt&&(i.clearStencil(Yt),en=Yt)},reset:function(){Q=!1,Fe=null,$e=null,Ke=null,Oe=null,be=null,lt=null,Pt=null,en=null}}}const a=new t,c=new r,f=new o,p=new WeakMap,u=new WeakMap;let h={},_={},g=new WeakMap,m=[],M=null,T=!1,x=null,y=null,L=null,k=null,I=null,$=null,w=null,R=new sn(0,0,0),b=0,C=!1,B=null,U=null,j=null,G=null,J=null;const se=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,K=0;const ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ne)[1]),ie=K>=1):ne.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),ie=K>=2);let X=null,oe={};const F=i.getParameter(i.SCISSOR_BOX),Y=i.getParameter(i.VIEWPORT),Ie=new Un().fromArray(F),Re=new Un().fromArray(Y);function et(Q,Fe,$e,Ke){const Oe=new Uint8Array(4),be=i.createTexture();i.bindTexture(Q,be),i.texParameteri(Q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let lt=0;lt<$e;lt++)Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?i.texImage3D(Fe,0,i.RGBA,1,1,Ke,0,i.RGBA,i.UNSIGNED_BYTE,Oe):i.texImage2D(Fe+lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Oe);return be}const ae={};ae[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),f.setClear(0),Ce(i.DEPTH_TEST),c.setFunc(fl),bt(!1),nn(Cg),Ce(i.CULL_FACE),Rt(Is);function Ce(Q){h[Q]!==!0&&(i.enable(Q),h[Q]=!0)}function Te(Q){h[Q]!==!1&&(i.disable(Q),h[Q]=!1)}function Je(Q,Fe){return _[Q]!==Fe?(i.bindFramebuffer(Q,Fe),_[Q]=Fe,Q===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=Fe),Q===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=Fe),!0):!1}function je(Q,Fe){let $e=m,Ke=!1;if(Q){$e=g.get(Fe),$e===void 0&&($e=[],g.set(Fe,$e));const Oe=Q.textures;if($e.length!==Oe.length||$e[0]!==i.COLOR_ATTACHMENT0){for(let be=0,lt=Oe.length;be<lt;be++)$e[be]=i.COLOR_ATTACHMENT0+be;$e.length=Oe.length,Ke=!0}}else $e[0]!==i.BACK&&($e[0]=i.BACK,Ke=!0);Ke&&i.drawBuffers($e)}function ot(Q){return M!==Q?(i.useProgram(Q),M=Q,!0):!1}const cn={[oa]:i.FUNC_ADD,[Cy]:i.FUNC_SUBTRACT,[Ay]:i.FUNC_REVERSE_SUBTRACT};cn[Ry]=i.MIN,cn[Py]=i.MAX;const Et={[Iy]:i.ZERO,[Ly]:i.ONE,[Dy]:i.SRC_COLOR,[hp]:i.SRC_ALPHA,[By]:i.SRC_ALPHA_SATURATE,[Fy]:i.DST_COLOR,[ky]:i.DST_ALPHA,[Ny]:i.ONE_MINUS_SRC_COLOR,[pp]:i.ONE_MINUS_SRC_ALPHA,[Oy]:i.ONE_MINUS_DST_COLOR,[Uy]:i.ONE_MINUS_DST_ALPHA,[zy]:i.CONSTANT_COLOR,[$y]:i.ONE_MINUS_CONSTANT_COLOR,[Vy]:i.CONSTANT_ALPHA,[Hy]:i.ONE_MINUS_CONSTANT_ALPHA};function Rt(Q,Fe,$e,Ke,Oe,be,lt,Pt,en,Yt){if(Q===Is){T===!0&&(Te(i.BLEND),T=!1);return}if(T===!1&&(Ce(i.BLEND),T=!0),Q!==Ty){if(Q!==x||Yt!==C){if((y!==oa||I!==oa)&&(i.blendEquation(i.FUNC_ADD),y=oa,I=oa),Yt)switch(Q){case cl:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ag:i.blendFunc(i.ONE,i.ONE);break;case Rg:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pg:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:dn("WebGLState: Invalid blending: ",Q);break}else switch(Q){case cl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ag:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Rg:dn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pg:dn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dn("WebGLState: Invalid blending: ",Q);break}L=null,k=null,$=null,w=null,R.set(0,0,0),b=0,x=Q,C=Yt}return}Oe=Oe||Fe,be=be||$e,lt=lt||Ke,(Fe!==y||Oe!==I)&&(i.blendEquationSeparate(cn[Fe],cn[Oe]),y=Fe,I=Oe),($e!==L||Ke!==k||be!==$||lt!==w)&&(i.blendFuncSeparate(Et[$e],Et[Ke],Et[be],Et[lt]),L=$e,k=Ke,$=be,w=lt),(Pt.equals(R)===!1||en!==b)&&(i.blendColor(Pt.r,Pt.g,Pt.b,en),R.copy(Pt),b=en),x=Q,C=!1}function Gt(Q,Fe){Q.side===As?Te(i.CULL_FACE):Ce(i.CULL_FACE);let $e=Q.side===Bi;Fe&&($e=!$e),bt($e),Q.blending===cl&&Q.transparent===!1?Rt(Is):Rt(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),c.setFunc(Q.depthFunc),c.setTest(Q.depthTest),c.setMask(Q.depthWrite),a.setMask(Q.colorWrite);const Ke=Q.stencilWrite;f.setTest(Ke),Ke&&(f.setMask(Q.stencilWriteMask),f.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),f.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),fn(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?Ce(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function bt(Q){B!==Q&&(Q?i.frontFace(i.CW):i.frontFace(i.CCW),B=Q)}function nn(Q){Q!==by?(Ce(i.CULL_FACE),Q!==U&&(Q===Cg?i.cullFace(i.BACK):Q===wy?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),U=Q}function Z(Q){Q!==j&&(ie&&i.lineWidth(Q),j=Q)}function fn(Q,Fe,$e){Q?(Ce(i.POLYGON_OFFSET_FILL),(G!==Fe||J!==$e)&&(G=Fe,J=$e,c.getReversed()&&(Fe=-Fe),i.polygonOffset(Fe,$e))):Te(i.POLYGON_OFFSET_FILL)}function $t(Q){Q?Ce(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function jt(Q){Q===void 0&&(Q=i.TEXTURE0+se-1),X!==Q&&(i.activeTexture(Q),X=Q)}function ut(Q,Fe,$e){$e===void 0&&(X===null?$e=i.TEXTURE0+se-1:$e=X);let Ke=oe[$e];Ke===void 0&&(Ke={type:void 0,texture:void 0},oe[$e]=Ke),(Ke.type!==Q||Ke.texture!==Fe)&&(X!==$e&&(i.activeTexture($e),X=$e),i.bindTexture(Q,Fe||ae[Q]),Ke.type=Q,Ke.texture=Fe)}function z(){const Q=oe[X];Q!==void 0&&Q.type!==void 0&&(i.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function A(){try{i.compressedTexImage2D(...arguments)}catch(Q){dn("WebGLState:",Q)}}function re(){try{i.compressedTexImage3D(...arguments)}catch(Q){dn("WebGLState:",Q)}}function Ae(){try{i.texSubImage2D(...arguments)}catch(Q){dn("WebGLState:",Q)}}function Le(){try{i.texSubImage3D(...arguments)}catch(Q){dn("WebGLState:",Q)}}function we(){try{i.compressedTexSubImage2D(...arguments)}catch(Q){dn("WebGLState:",Q)}}function st(){try{i.compressedTexSubImage3D(...arguments)}catch(Q){dn("WebGLState:",Q)}}function He(){try{i.texStorage2D(...arguments)}catch(Q){dn("WebGLState:",Q)}}function at(){try{i.texStorage3D(...arguments)}catch(Q){dn("WebGLState:",Q)}}function vt(){try{i.texImage2D(...arguments)}catch(Q){dn("WebGLState:",Q)}}function ke(){try{i.texImage3D(...arguments)}catch(Q){dn("WebGLState:",Q)}}function We(Q){Ie.equals(Q)===!1&&(i.scissor(Q.x,Q.y,Q.z,Q.w),Ie.copy(Q))}function rt(Q){Re.equals(Q)===!1&&(i.viewport(Q.x,Q.y,Q.z,Q.w),Re.copy(Q))}function it(Q,Fe){let $e=u.get(Fe);$e===void 0&&($e=new WeakMap,u.set(Fe,$e));let Ke=$e.get(Q);Ke===void 0&&(Ke=i.getUniformBlockIndex(Fe,Q.name),$e.set(Q,Ke))}function tt(Q,Fe){const Ke=u.get(Fe).get(Q);p.get(Fe)!==Ke&&(i.uniformBlockBinding(Fe,Ke,Q.__bindingPointIndex),p.set(Fe,Ke))}function Ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},X=null,oe={},_={},g=new WeakMap,m=[],M=null,T=!1,x=null,y=null,L=null,k=null,I=null,$=null,w=null,R=new sn(0,0,0),b=0,C=!1,B=null,U=null,j=null,G=null,J=null,Ie.set(0,0,i.canvas.width,i.canvas.height),Re.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),f.reset()}return{buffers:{color:a,depth:c,stencil:f},enable:Ce,disable:Te,bindFramebuffer:Je,drawBuffers:je,useProgram:ot,setBlending:Rt,setMaterial:Gt,setFlipSided:bt,setCullFace:nn,setLineWidth:Z,setPolygonOffset:fn,setScissorTest:$t,activeTexture:jt,bindTexture:ut,unbindTexture:z,compressedTexImage2D:A,compressedTexImage3D:re,texImage2D:vt,texImage3D:ke,updateUBOMapping:it,uniformBlockBinding:tt,texStorage2D:He,texStorage3D:at,texSubImage2D:Ae,texSubImage3D:Le,compressedTexSubImage2D:we,compressedTexSubImage3D:st,scissor:We,viewport:rt,reset:Ct}}function GE(i,e,t,r,o,a,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ln,h=new WeakMap;let _;const g=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(z,A){return m?new OffscreenCanvas(z,A):Ld("canvas")}function T(z,A,re){let Ae=1;const Le=ut(z);if((Le.width>re||Le.height>re)&&(Ae=re/Math.max(Le.width,Le.height)),Ae<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const we=Math.floor(Ae*Le.width),st=Math.floor(Ae*Le.height);_===void 0&&(_=M(we,st));const He=A?M(we,st):_;return He.width=we,He.height=st,He.getContext("2d").drawImage(z,0,0,we,st),Ot("WebGLRenderer: Texture has been resized from ("+Le.width+"x"+Le.height+") to ("+we+"x"+st+")."),He}else return"data"in z&&Ot("WebGLRenderer: Image in DataTexture is too big ("+Le.width+"x"+Le.height+")."),z;return z}function x(z){return z.generateMipmaps}function y(z){i.generateMipmap(z)}function L(z){return z.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?i.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function k(z,A,re,Ae,Le=!1){if(z!==null){if(i[z]!==void 0)return i[z];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let we=A;if(A===i.RED&&(re===i.FLOAT&&(we=i.R32F),re===i.HALF_FLOAT&&(we=i.R16F),re===i.UNSIGNED_BYTE&&(we=i.R8)),A===i.RED_INTEGER&&(re===i.UNSIGNED_BYTE&&(we=i.R8UI),re===i.UNSIGNED_SHORT&&(we=i.R16UI),re===i.UNSIGNED_INT&&(we=i.R32UI),re===i.BYTE&&(we=i.R8I),re===i.SHORT&&(we=i.R16I),re===i.INT&&(we=i.R32I)),A===i.RG&&(re===i.FLOAT&&(we=i.RG32F),re===i.HALF_FLOAT&&(we=i.RG16F),re===i.UNSIGNED_BYTE&&(we=i.RG8)),A===i.RG_INTEGER&&(re===i.UNSIGNED_BYTE&&(we=i.RG8UI),re===i.UNSIGNED_SHORT&&(we=i.RG16UI),re===i.UNSIGNED_INT&&(we=i.RG32UI),re===i.BYTE&&(we=i.RG8I),re===i.SHORT&&(we=i.RG16I),re===i.INT&&(we=i.RG32I)),A===i.RGB_INTEGER&&(re===i.UNSIGNED_BYTE&&(we=i.RGB8UI),re===i.UNSIGNED_SHORT&&(we=i.RGB16UI),re===i.UNSIGNED_INT&&(we=i.RGB32UI),re===i.BYTE&&(we=i.RGB8I),re===i.SHORT&&(we=i.RGB16I),re===i.INT&&(we=i.RGB32I)),A===i.RGBA_INTEGER&&(re===i.UNSIGNED_BYTE&&(we=i.RGBA8UI),re===i.UNSIGNED_SHORT&&(we=i.RGBA16UI),re===i.UNSIGNED_INT&&(we=i.RGBA32UI),re===i.BYTE&&(we=i.RGBA8I),re===i.SHORT&&(we=i.RGBA16I),re===i.INT&&(we=i.RGBA32I)),A===i.RGB&&(re===i.UNSIGNED_INT_5_9_9_9_REV&&(we=i.RGB9_E5),re===i.UNSIGNED_INT_10F_11F_11F_REV&&(we=i.R11F_G11F_B10F)),A===i.RGBA){const st=Le?Id:an.getTransfer(Ae);re===i.FLOAT&&(we=i.RGBA32F),re===i.HALF_FLOAT&&(we=i.RGBA16F),re===i.UNSIGNED_BYTE&&(we=st===vn?i.SRGB8_ALPHA8:i.RGBA8),re===i.UNSIGNED_SHORT_4_4_4_4&&(we=i.RGBA4),re===i.UNSIGNED_SHORT_5_5_5_1&&(we=i.RGB5_A1)}return(we===i.R16F||we===i.R32F||we===i.RG16F||we===i.RG32F||we===i.RGBA16F||we===i.RGBA32F)&&e.get("EXT_color_buffer_float"),we}function I(z,A){let re;return z?A===null||A===as||A===Sc?re=i.DEPTH24_STENCIL8:A===ns?re=i.DEPTH32F_STENCIL8:A===yc&&(re=i.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===as||A===Sc?re=i.DEPTH_COMPONENT24:A===ns?re=i.DEPTH_COMPONENT32F:A===yc&&(re=i.DEPTH_COMPONENT16),re}function $(z,A){return x(z)===!0||z.isFramebufferTexture&&z.minFilter!==di&&z.minFilter!==qn?Math.log2(Math.max(A.width,A.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?A.mipmaps.length:1}function w(z){const A=z.target;A.removeEventListener("dispose",w),b(A),A.isVideoTexture&&h.delete(A)}function R(z){const A=z.target;A.removeEventListener("dispose",R),B(A)}function b(z){const A=r.get(z);if(A.__webglInit===void 0)return;const re=z.source,Ae=g.get(re);if(Ae){const Le=Ae[A.__cacheKey];Le.usedTimes--,Le.usedTimes===0&&C(z),Object.keys(Ae).length===0&&g.delete(re)}r.remove(z)}function C(z){const A=r.get(z);i.deleteTexture(A.__webglTexture);const re=z.source,Ae=g.get(re);delete Ae[A.__cacheKey],c.memory.textures--}function B(z){const A=r.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),r.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let Ae=0;Ae<6;Ae++){if(Array.isArray(A.__webglFramebuffer[Ae]))for(let Le=0;Le<A.__webglFramebuffer[Ae].length;Le++)i.deleteFramebuffer(A.__webglFramebuffer[Ae][Le]);else i.deleteFramebuffer(A.__webglFramebuffer[Ae]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[Ae])}else{if(Array.isArray(A.__webglFramebuffer))for(let Ae=0;Ae<A.__webglFramebuffer.length;Ae++)i.deleteFramebuffer(A.__webglFramebuffer[Ae]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Ae=0;Ae<A.__webglColorRenderbuffer.length;Ae++)A.__webglColorRenderbuffer[Ae]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[Ae]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const re=z.textures;for(let Ae=0,Le=re.length;Ae<Le;Ae++){const we=r.get(re[Ae]);we.__webglTexture&&(i.deleteTexture(we.__webglTexture),c.memory.textures--),r.remove(re[Ae])}r.remove(z)}let U=0;function j(){U=0}function G(){const z=U;return z>=o.maxTextures&&Ot("WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+o.maxTextures),U+=1,z}function J(z){const A=[];return A.push(z.wrapS),A.push(z.wrapT),A.push(z.wrapR||0),A.push(z.magFilter),A.push(z.minFilter),A.push(z.anisotropy),A.push(z.internalFormat),A.push(z.format),A.push(z.type),A.push(z.generateMipmaps),A.push(z.premultiplyAlpha),A.push(z.flipY),A.push(z.unpackAlignment),A.push(z.colorSpace),A.join()}function se(z,A){const re=r.get(z);if(z.isVideoTexture&&$t(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&re.__version!==z.version){const Ae=z.image;if(Ae===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(Ae.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(re,z,A);return}}else z.isExternalTexture&&(re.__webglTexture=z.sourceTexture?z.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,re.__webglTexture,i.TEXTURE0+A)}function ie(z,A){const re=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&re.__version!==z.version){ae(re,z,A);return}else z.isExternalTexture&&(re.__webglTexture=z.sourceTexture?z.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,re.__webglTexture,i.TEXTURE0+A)}function K(z,A){const re=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&re.__version!==z.version){ae(re,z,A);return}t.bindTexture(i.TEXTURE_3D,re.__webglTexture,i.TEXTURE0+A)}function ne(z,A){const re=r.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&re.__version!==z.version){Ce(re,z,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture,i.TEXTURE0+A)}const X={[Mp]:i.REPEAT,[Br]:i.CLAMP_TO_EDGE,[bp]:i.MIRRORED_REPEAT},oe={[di]:i.NEAREST,[jy]:i.NEAREST_MIPMAP_NEAREST,[Fu]:i.NEAREST_MIPMAP_LINEAR,[qn]:i.LINEAR,[yh]:i.LINEAR_MIPMAP_NEAREST,[Eo]:i.LINEAR_MIPMAP_LINEAR},F={[qy]:i.NEVER,[e1]:i.ALWAYS,[Ky]:i.LESS,[_m]:i.LEQUAL,[Zy]:i.EQUAL,[ym]:i.GEQUAL,[Jy]:i.GREATER,[Qy]:i.NOTEQUAL};function Y(z,A){if(A.type===ns&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===qn||A.magFilter===yh||A.magFilter===Fu||A.magFilter===Eo||A.minFilter===qn||A.minFilter===yh||A.minFilter===Fu||A.minFilter===Eo)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(z,i.TEXTURE_WRAP_S,X[A.wrapS]),i.texParameteri(z,i.TEXTURE_WRAP_T,X[A.wrapT]),(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)&&i.texParameteri(z,i.TEXTURE_WRAP_R,X[A.wrapR]),i.texParameteri(z,i.TEXTURE_MAG_FILTER,oe[A.magFilter]),i.texParameteri(z,i.TEXTURE_MIN_FILTER,oe[A.minFilter]),A.compareFunction&&(i.texParameteri(z,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(z,i.TEXTURE_COMPARE_FUNC,F[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===di||A.minFilter!==Fu&&A.minFilter!==Eo||A.type===ns&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");i.texParameterf(z,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function Ie(z,A){let re=!1;z.__webglInit===void 0&&(z.__webglInit=!0,A.addEventListener("dispose",w));const Ae=A.source;let Le=g.get(Ae);Le===void 0&&(Le={},g.set(Ae,Le));const we=J(A);if(we!==z.__cacheKey){Le[we]===void 0&&(Le[we]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,re=!0),Le[we].usedTimes++;const st=Le[z.__cacheKey];st!==void 0&&(Le[z.__cacheKey].usedTimes--,st.usedTimes===0&&C(A)),z.__cacheKey=we,z.__webglTexture=Le[we].texture}return re}function Re(z,A,re){return Math.floor(Math.floor(z/re)/A)}function et(z,A,re,Ae){const we=z.updateRanges;if(we.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,A.width,A.height,re,Ae,A.data);else{we.sort((ke,We)=>ke.start-We.start);let st=0;for(let ke=1;ke<we.length;ke++){const We=we[st],rt=we[ke],it=We.start+We.count,tt=Re(rt.start,A.width,4),Ct=Re(We.start,A.width,4);rt.start<=it+1&&tt===Ct&&Re(rt.start+rt.count-1,A.width,4)===tt?We.count=Math.max(We.count,rt.start+rt.count-We.start):(++st,we[st]=rt)}we.length=st+1;const He=i.getParameter(i.UNPACK_ROW_LENGTH),at=i.getParameter(i.UNPACK_SKIP_PIXELS),vt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,A.width);for(let ke=0,We=we.length;ke<We;ke++){const rt=we[ke],it=Math.floor(rt.start/4),tt=Math.ceil(rt.count/4),Ct=it%A.width,Q=Math.floor(it/A.width),Fe=tt,$e=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ct),i.pixelStorei(i.UNPACK_SKIP_ROWS,Q),t.texSubImage2D(i.TEXTURE_2D,0,Ct,Q,Fe,$e,re,Ae,A.data)}z.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,He),i.pixelStorei(i.UNPACK_SKIP_PIXELS,at),i.pixelStorei(i.UNPACK_SKIP_ROWS,vt)}}function ae(z,A,re){let Ae=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Ae=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Ae=i.TEXTURE_3D);const Le=Ie(z,A),we=A.source;t.bindTexture(Ae,z.__webglTexture,i.TEXTURE0+re);const st=r.get(we);if(we.version!==st.__version||Le===!0){t.activeTexture(i.TEXTURE0+re);const He=an.getPrimaries(an.workingColorSpace),at=A.colorSpace===wo?null:an.getPrimaries(A.colorSpace),vt=A.colorSpace===wo||He===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let ke=T(A.image,!1,o.maxTextureSize);ke=jt(A,ke);const We=a.convert(A.format,A.colorSpace),rt=a.convert(A.type);let it=k(A.internalFormat,We,rt,A.colorSpace,A.isVideoTexture);Y(Ae,A);let tt;const Ct=A.mipmaps,Q=A.isVideoTexture!==!0,Fe=st.__version===void 0||Le===!0,$e=we.dataReady,Ke=$(A,ke);if(A.isDepthTexture)it=I(A.format===ca,A.type),Fe&&(Q?t.texStorage2D(i.TEXTURE_2D,1,it,ke.width,ke.height):t.texImage2D(i.TEXTURE_2D,0,it,ke.width,ke.height,0,We,rt,null));else if(A.isDataTexture)if(Ct.length>0){Q&&Fe&&t.texStorage2D(i.TEXTURE_2D,Ke,it,Ct[0].width,Ct[0].height);for(let Oe=0,be=Ct.length;Oe<be;Oe++)tt=Ct[Oe],Q?$e&&t.texSubImage2D(i.TEXTURE_2D,Oe,0,0,tt.width,tt.height,We,rt,tt.data):t.texImage2D(i.TEXTURE_2D,Oe,it,tt.width,tt.height,0,We,rt,tt.data);A.generateMipmaps=!1}else Q?(Fe&&t.texStorage2D(i.TEXTURE_2D,Ke,it,ke.width,ke.height),$e&&et(A,ke,We,rt)):t.texImage2D(i.TEXTURE_2D,0,it,ke.width,ke.height,0,We,rt,ke.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Q&&Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ke,it,Ct[0].width,Ct[0].height,ke.depth);for(let Oe=0,be=Ct.length;Oe<be;Oe++)if(tt=Ct[Oe],A.format!==zr)if(We!==null)if(Q){if($e)if(A.layerUpdates.size>0){const lt=lv(tt.width,tt.height,A.format,A.type);for(const Pt of A.layerUpdates){const en=tt.data.subarray(Pt*lt/tt.data.BYTES_PER_ELEMENT,(Pt+1)*lt/tt.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Oe,0,0,Pt,tt.width,tt.height,1,We,en)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Oe,0,0,0,tt.width,tt.height,ke.depth,We,tt.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Oe,it,tt.width,tt.height,ke.depth,0,tt.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Q?$e&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Oe,0,0,0,tt.width,tt.height,ke.depth,We,rt,tt.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Oe,it,tt.width,tt.height,ke.depth,0,We,rt,tt.data)}else{Q&&Fe&&t.texStorage2D(i.TEXTURE_2D,Ke,it,Ct[0].width,Ct[0].height);for(let Oe=0,be=Ct.length;Oe<be;Oe++)tt=Ct[Oe],A.format!==zr?We!==null?Q?$e&&t.compressedTexSubImage2D(i.TEXTURE_2D,Oe,0,0,tt.width,tt.height,We,tt.data):t.compressedTexImage2D(i.TEXTURE_2D,Oe,it,tt.width,tt.height,0,tt.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?$e&&t.texSubImage2D(i.TEXTURE_2D,Oe,0,0,tt.width,tt.height,We,rt,tt.data):t.texImage2D(i.TEXTURE_2D,Oe,it,tt.width,tt.height,0,We,rt,tt.data)}else if(A.isDataArrayTexture)if(Q){if(Fe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ke,it,ke.width,ke.height,ke.depth),$e)if(A.layerUpdates.size>0){const Oe=lv(ke.width,ke.height,A.format,A.type);for(const be of A.layerUpdates){const lt=ke.data.subarray(be*Oe/ke.data.BYTES_PER_ELEMENT,(be+1)*Oe/ke.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,be,ke.width,ke.height,1,We,rt,lt)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ke.width,ke.height,ke.depth,We,rt,ke.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,it,ke.width,ke.height,ke.depth,0,We,rt,ke.data);else if(A.isData3DTexture)Q?(Fe&&t.texStorage3D(i.TEXTURE_3D,Ke,it,ke.width,ke.height,ke.depth),$e&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ke.width,ke.height,ke.depth,We,rt,ke.data)):t.texImage3D(i.TEXTURE_3D,0,it,ke.width,ke.height,ke.depth,0,We,rt,ke.data);else if(A.isFramebufferTexture){if(Fe)if(Q)t.texStorage2D(i.TEXTURE_2D,Ke,it,ke.width,ke.height);else{let Oe=ke.width,be=ke.height;for(let lt=0;lt<Ke;lt++)t.texImage2D(i.TEXTURE_2D,lt,it,Oe,be,0,We,rt,null),Oe>>=1,be>>=1}}else if(Ct.length>0){if(Q&&Fe){const Oe=ut(Ct[0]);t.texStorage2D(i.TEXTURE_2D,Ke,it,Oe.width,Oe.height)}for(let Oe=0,be=Ct.length;Oe<be;Oe++)tt=Ct[Oe],Q?$e&&t.texSubImage2D(i.TEXTURE_2D,Oe,0,0,We,rt,tt):t.texImage2D(i.TEXTURE_2D,Oe,it,We,rt,tt);A.generateMipmaps=!1}else if(Q){if(Fe){const Oe=ut(ke);t.texStorage2D(i.TEXTURE_2D,Ke,it,Oe.width,Oe.height)}$e&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,We,rt,ke)}else t.texImage2D(i.TEXTURE_2D,0,it,We,rt,ke);x(A)&&y(Ae),st.__version=we.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function Ce(z,A,re){if(A.image.length!==6)return;const Ae=Ie(z,A),Le=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+re);const we=r.get(Le);if(Le.version!==we.__version||Ae===!0){t.activeTexture(i.TEXTURE0+re);const st=an.getPrimaries(an.workingColorSpace),He=A.colorSpace===wo?null:an.getPrimaries(A.colorSpace),at=A.colorSpace===wo||st===He?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);const vt=A.isCompressedTexture||A.image[0].isCompressedTexture,ke=A.image[0]&&A.image[0].isDataTexture,We=[];for(let be=0;be<6;be++)!vt&&!ke?We[be]=T(A.image[be],!0,o.maxCubemapSize):We[be]=ke?A.image[be].image:A.image[be],We[be]=jt(A,We[be]);const rt=We[0],it=a.convert(A.format,A.colorSpace),tt=a.convert(A.type),Ct=k(A.internalFormat,it,tt,A.colorSpace),Q=A.isVideoTexture!==!0,Fe=we.__version===void 0||Ae===!0,$e=Le.dataReady;let Ke=$(A,rt);Y(i.TEXTURE_CUBE_MAP,A);let Oe;if(vt){Q&&Fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ke,Ct,rt.width,rt.height);for(let be=0;be<6;be++){Oe=We[be].mipmaps;for(let lt=0;lt<Oe.length;lt++){const Pt=Oe[lt];A.format!==zr?it!==null?Q?$e&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,lt,0,0,Pt.width,Pt.height,it,Pt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,lt,Ct,Pt.width,Pt.height,0,Pt.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?$e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,lt,0,0,Pt.width,Pt.height,it,tt,Pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,lt,Ct,Pt.width,Pt.height,0,it,tt,Pt.data)}}}else{if(Oe=A.mipmaps,Q&&Fe){Oe.length>0&&Ke++;const be=ut(We[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ke,Ct,be.width,be.height)}for(let be=0;be<6;be++)if(ke){Q?$e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,We[be].width,We[be].height,it,tt,We[be].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Ct,We[be].width,We[be].height,0,it,tt,We[be].data);for(let lt=0;lt<Oe.length;lt++){const en=Oe[lt].image[be].image;Q?$e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,lt+1,0,0,en.width,en.height,it,tt,en.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,lt+1,Ct,en.width,en.height,0,it,tt,en.data)}}else{Q?$e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,it,tt,We[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Ct,it,tt,We[be]);for(let lt=0;lt<Oe.length;lt++){const Pt=Oe[lt];Q?$e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,lt+1,0,0,it,tt,Pt.image[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,lt+1,Ct,it,tt,Pt.image[be])}}}x(A)&&y(i.TEXTURE_CUBE_MAP),we.__version=Le.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function Te(z,A,re,Ae,Le,we){const st=a.convert(re.format,re.colorSpace),He=a.convert(re.type),at=k(re.internalFormat,st,He,re.colorSpace),vt=r.get(A),ke=r.get(re);if(ke.__renderTarget=A,!vt.__hasExternalTextures){const We=Math.max(1,A.width>>we),rt=Math.max(1,A.height>>we);Le===i.TEXTURE_3D||Le===i.TEXTURE_2D_ARRAY?t.texImage3D(Le,we,at,We,rt,A.depth,0,st,He,null):t.texImage2D(Le,we,at,We,rt,0,st,He,null)}t.bindFramebuffer(i.FRAMEBUFFER,z),fn(A)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ae,Le,ke.__webglTexture,0,Z(A)):(Le===i.TEXTURE_2D||Le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Ae,Le,ke.__webglTexture,we),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(z,A,re){if(i.bindRenderbuffer(i.RENDERBUFFER,z),A.depthBuffer){const Ae=A.depthTexture,Le=Ae&&Ae.isDepthTexture?Ae.type:null,we=I(A.stencilBuffer,Le),st=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;fn(A)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z(A),we,A.width,A.height):re?i.renderbufferStorageMultisample(i.RENDERBUFFER,Z(A),we,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,we,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,z)}else{const Ae=A.textures;for(let Le=0;Le<Ae.length;Le++){const we=Ae[Le],st=a.convert(we.format,we.colorSpace),He=a.convert(we.type),at=k(we.internalFormat,st,He,we.colorSpace);fn(A)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Z(A),at,A.width,A.height):re?i.renderbufferStorageMultisample(i.RENDERBUFFER,Z(A),at,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,at,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function je(z,A,re){const Ae=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,z),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Le=r.get(A.depthTexture);if(Le.__renderTarget=A,(!Le.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),Ae){if(Le.__webglInit===void 0&&(Le.__webglInit=!0,A.depthTexture.addEventListener("dispose",w)),Le.__webglTexture===void 0){Le.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Le.__webglTexture),Y(i.TEXTURE_CUBE_MAP,A.depthTexture);const vt=a.convert(A.depthTexture.format),ke=a.convert(A.depthTexture.type);let We;A.depthTexture.format===ks?We=i.DEPTH_COMPONENT24:A.depthTexture.format===ca&&(We=i.DEPTH24_STENCIL8);for(let rt=0;rt<6;rt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,We,A.width,A.height,0,vt,ke,null)}}else se(A.depthTexture,0);const we=Le.__webglTexture,st=Z(A),He=Ae?i.TEXTURE_CUBE_MAP_POSITIVE_X+re:i.TEXTURE_2D,at=A.depthTexture.format===ca?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(A.depthTexture.format===ks)fn(A)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,He,we,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,at,He,we,0);else if(A.depthTexture.format===ca)fn(A)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,He,we,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,at,He,we,0);else throw new Error("Unknown depthTexture format")}function ot(z){const A=r.get(z),re=z.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==z.depthTexture){const Ae=z.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Ae){const Le=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Ae.removeEventListener("dispose",Le)};Ae.addEventListener("dispose",Le),A.__depthDisposeCallback=Le}A.__boundDepthTexture=Ae}if(z.depthTexture&&!A.__autoAllocateDepthBuffer)if(re)for(let Ae=0;Ae<6;Ae++)je(A.__webglFramebuffer[Ae],z,Ae);else{const Ae=z.texture.mipmaps;Ae&&Ae.length>0?je(A.__webglFramebuffer[0],z,0):je(A.__webglFramebuffer,z,0)}else if(re){A.__webglDepthbuffer=[];for(let Ae=0;Ae<6;Ae++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[Ae]),A.__webglDepthbuffer[Ae]===void 0)A.__webglDepthbuffer[Ae]=i.createRenderbuffer(),Je(A.__webglDepthbuffer[Ae],z,!1);else{const Le=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=A.__webglDepthbuffer[Ae];i.bindRenderbuffer(i.RENDERBUFFER,we),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,we)}}else{const Ae=z.texture.mipmaps;if(Ae&&Ae.length>0?t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Je(A.__webglDepthbuffer,z,!1);else{const Le=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,we),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,we)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function cn(z,A,re){const Ae=r.get(z);A!==void 0&&Te(Ae.__webglFramebuffer,z,z.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),re!==void 0&&ot(z)}function Et(z){const A=z.texture,re=r.get(z),Ae=r.get(A);z.addEventListener("dispose",R);const Le=z.textures,we=z.isWebGLCubeRenderTarget===!0,st=Le.length>1;if(st||(Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture()),Ae.__version=A.version,c.memory.textures++),we){re.__webglFramebuffer=[];for(let He=0;He<6;He++)if(A.mipmaps&&A.mipmaps.length>0){re.__webglFramebuffer[He]=[];for(let at=0;at<A.mipmaps.length;at++)re.__webglFramebuffer[He][at]=i.createFramebuffer()}else re.__webglFramebuffer[He]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){re.__webglFramebuffer=[];for(let He=0;He<A.mipmaps.length;He++)re.__webglFramebuffer[He]=i.createFramebuffer()}else re.__webglFramebuffer=i.createFramebuffer();if(st)for(let He=0,at=Le.length;He<at;He++){const vt=r.get(Le[He]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),c.memory.textures++)}if(z.samples>0&&fn(z)===!1){re.__webglMultisampledFramebuffer=i.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let He=0;He<Le.length;He++){const at=Le[He];re.__webglColorRenderbuffer[He]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,re.__webglColorRenderbuffer[He]);const vt=a.convert(at.format,at.colorSpace),ke=a.convert(at.type),We=k(at.internalFormat,vt,ke,at.colorSpace,z.isXRRenderTarget===!0),rt=Z(z);i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,We,z.width,z.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.RENDERBUFFER,re.__webglColorRenderbuffer[He])}i.bindRenderbuffer(i.RENDERBUFFER,null),z.depthBuffer&&(re.__webglDepthRenderbuffer=i.createRenderbuffer(),Je(re.__webglDepthRenderbuffer,z,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(we){t.bindTexture(i.TEXTURE_CUBE_MAP,Ae.__webglTexture),Y(i.TEXTURE_CUBE_MAP,A);for(let He=0;He<6;He++)if(A.mipmaps&&A.mipmaps.length>0)for(let at=0;at<A.mipmaps.length;at++)Te(re.__webglFramebuffer[He][at],z,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+He,at);else Te(re.__webglFramebuffer[He],z,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+He,0);x(A)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(st){for(let He=0,at=Le.length;He<at;He++){const vt=Le[He],ke=r.get(vt);let We=i.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(We=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(We,ke.__webglTexture),Y(We,vt),Te(re.__webglFramebuffer,z,vt,i.COLOR_ATTACHMENT0+He,We,0),x(vt)&&y(We)}t.unbindTexture()}else{let He=i.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(He=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(He,Ae.__webglTexture),Y(He,A),A.mipmaps&&A.mipmaps.length>0)for(let at=0;at<A.mipmaps.length;at++)Te(re.__webglFramebuffer[at],z,A,i.COLOR_ATTACHMENT0,He,at);else Te(re.__webglFramebuffer,z,A,i.COLOR_ATTACHMENT0,He,0);x(A)&&y(He),t.unbindTexture()}z.depthBuffer&&ot(z)}function Rt(z){const A=z.textures;for(let re=0,Ae=A.length;re<Ae;re++){const Le=A[re];if(x(Le)){const we=L(z),st=r.get(Le).__webglTexture;t.bindTexture(we,st),y(we),t.unbindTexture()}}}const Gt=[],bt=[];function nn(z){if(z.samples>0){if(fn(z)===!1){const A=z.textures,re=z.width,Ae=z.height;let Le=i.COLOR_BUFFER_BIT;const we=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=r.get(z),He=A.length>1;if(He)for(let vt=0;vt<A.length;vt++)t.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer);const at=z.texture.mipmaps;at&&at.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let vt=0;vt<A.length;vt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(Le|=i.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(Le|=i.STENCIL_BUFFER_BIT)),He){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,st.__webglColorRenderbuffer[vt]);const ke=r.get(A[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ke,0)}i.blitFramebuffer(0,0,re,Ae,0,0,re,Ae,Le,i.NEAREST),p===!0&&(Gt.length=0,bt.length=0,Gt.push(i.COLOR_ATTACHMENT0+vt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(Gt.push(we),bt.push(we),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,bt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Gt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),He)for(let vt=0;vt<A.length;vt++){t.bindFramebuffer(i.FRAMEBUFFER,st.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,st.__webglColorRenderbuffer[vt]);const ke=r.get(A[vt]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,st.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&p){const A=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Z(z){return Math.min(o.maxSamples,z.samples)}function fn(z){const A=r.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function $t(z){const A=c.render.frame;h.get(z)!==A&&(h.set(z,A),z.update())}function jt(z,A){const re=z.colorSpace,Ae=z.format,Le=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||re!==ml&&re!==wo&&(an.getTransfer(re)===vn?(Ae!==zr||Le!==er)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dn("WebGLTextures: Unsupported texture color space:",re)),A}function ut(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(u.width=z.naturalWidth||z.width,u.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(u.width=z.displayWidth,u.height=z.displayHeight):(u.width=z.width,u.height=z.height),u}this.allocateTextureUnit=G,this.resetTextureUnits=j,this.setTexture2D=se,this.setTexture2DArray=ie,this.setTexture3D=K,this.setTextureCube=ne,this.rebindTextures=cn,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=fn,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function WE(i,e){function t(r,o=wo){let a;const c=an.getTransfer(o);if(r===er)return i.UNSIGNED_BYTE;if(r===pm)return i.UNSIGNED_SHORT_4_4_4_4;if(r===mm)return i.UNSIGNED_SHORT_5_5_5_1;if(r===yx)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===Sx)return i.UNSIGNED_INT_10F_11F_11F_REV;if(r===xx)return i.BYTE;if(r===_x)return i.SHORT;if(r===yc)return i.UNSIGNED_SHORT;if(r===hm)return i.INT;if(r===as)return i.UNSIGNED_INT;if(r===ns)return i.FLOAT;if(r===Ns)return i.HALF_FLOAT;if(r===Mx)return i.ALPHA;if(r===bx)return i.RGB;if(r===zr)return i.RGBA;if(r===ks)return i.DEPTH_COMPONENT;if(r===ca)return i.DEPTH_STENCIL;if(r===wx)return i.RED;if(r===gm)return i.RED_INTEGER;if(r===pl)return i.RG;if(r===vm)return i.RG_INTEGER;if(r===xm)return i.RGBA_INTEGER;if(r===bd||r===wd||r===Ed||r===Td)if(c===vn)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===bd)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===wd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ed)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Td)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===bd)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wd)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ed)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Td)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===wp||r===Ep||r===Tp||r===Cp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===wp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ep)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Tp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Cp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ap||r===Rp||r===Pp||r===Ip||r===Lp||r===Dp||r===Np)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Ap||r===Rp)return c===vn?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Pp)return c===vn?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(r===Ip)return a.COMPRESSED_R11_EAC;if(r===Lp)return a.COMPRESSED_SIGNED_R11_EAC;if(r===Dp)return a.COMPRESSED_RG11_EAC;if(r===Np)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===kp||r===Up||r===Fp||r===Op||r===Bp||r===zp||r===$p||r===Vp||r===Hp||r===Gp||r===Wp||r===jp||r===Xp||r===Yp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===kp)return c===vn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Up)return c===vn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fp)return c===vn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Op)return c===vn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Bp)return c===vn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===zp)return c===vn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$p)return c===vn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Vp)return c===vn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Hp)return c===vn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Gp)return c===vn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Wp)return c===vn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===jp)return c===vn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xp)return c===vn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yp)return c===vn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qp||r===Kp||r===Zp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===qp)return c===vn?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Kp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Zp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Jp||r===Qp||r===em||r===tm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Jp)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Qp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===em)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===tm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Sc?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:t}}const jE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XE=`
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

}`;class YE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Fx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new tr({vertexShader:jE,fragmentShader:XE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yr(new wl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qE extends fa{constructor(e,t){super();const r=this;let o=null,a=1,c=null,f="local-floor",p=1,u=null,h=null,_=null,g=null,m=null,M=null;const T=typeof XRWebGLBinding<"u",x=new YE,y={},L=t.getContextAttributes();let k=null,I=null;const $=[],w=[],R=new ln;let b=null;const C=new Or;C.viewport=new Un;const B=new Or;B.viewport=new Un;const U=[C,B],j=new aS;let G=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let Ce=$[ae];return Ce===void 0&&(Ce=new Th,$[ae]=Ce),Ce.getTargetRaySpace()},this.getControllerGrip=function(ae){let Ce=$[ae];return Ce===void 0&&(Ce=new Th,$[ae]=Ce),Ce.getGripSpace()},this.getHand=function(ae){let Ce=$[ae];return Ce===void 0&&(Ce=new Th,$[ae]=Ce),Ce.getHandSpace()};function se(ae){const Ce=w.indexOf(ae.inputSource);if(Ce===-1)return;const Te=$[Ce];Te!==void 0&&(Te.update(ae.inputSource,ae.frame,u||c),Te.dispatchEvent({type:ae.type,data:ae.inputSource}))}function ie(){o.removeEventListener("select",se),o.removeEventListener("selectstart",se),o.removeEventListener("selectend",se),o.removeEventListener("squeeze",se),o.removeEventListener("squeezestart",se),o.removeEventListener("squeezeend",se),o.removeEventListener("end",ie),o.removeEventListener("inputsourceschange",K);for(let ae=0;ae<$.length;ae++){const Ce=w[ae];Ce!==null&&(w[ae]=null,$[ae].disconnect(Ce))}G=null,J=null,x.reset();for(const ae in y)delete y[ae];e.setRenderTarget(k),m=null,g=null,_=null,o=null,I=null,et.stop(),r.isPresenting=!1,e.setPixelRatio(b),e.setSize(R.width,R.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){a=ae,r.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){f=ae,r.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||c},this.setReferenceSpace=function(ae){u=ae},this.getBaseLayer=function(){return g!==null?g:m},this.getBinding=function(){return _===null&&T&&(_=new XRWebGLBinding(o,t)),_},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(k=e.getRenderTarget(),o.addEventListener("select",se),o.addEventListener("selectstart",se),o.addEventListener("selectend",se),o.addEventListener("squeeze",se),o.addEventListener("squeezestart",se),o.addEventListener("squeezeend",se),o.addEventListener("end",ie),o.addEventListener("inputsourceschange",K),L.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(R),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Je=null,je=null;L.depth&&(je=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=L.stencil?ca:ks,Je=L.stencil?Sc:as);const ot={colorFormat:t.RGBA8,depthFormat:je,scaleFactor:a};_=this.getBinding(),g=_.createProjectionLayer(ot),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),I=new ss(g.textureWidth,g.textureHeight,{format:zr,type:er,depthTexture:new wc(g.textureWidth,g.textureHeight,Je,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Te={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(o,t,Te),o.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),I=new ss(m.framebufferWidth,m.framebufferHeight,{format:zr,type:er,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(p),u=null,c=await o.requestReferenceSpace(f),et.setContext(o),et.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(ae){for(let Ce=0;Ce<ae.removed.length;Ce++){const Te=ae.removed[Ce],Je=w.indexOf(Te);Je>=0&&(w[Je]=null,$[Je].disconnect(Te))}for(let Ce=0;Ce<ae.added.length;Ce++){const Te=ae.added[Ce];let Je=w.indexOf(Te);if(Je===-1){for(let ot=0;ot<$.length;ot++)if(ot>=w.length){w.push(Te),Je=ot;break}else if(w[ot]===null){w[ot]=Te,Je=ot;break}if(Je===-1)break}const je=$[Je];je&&je.connect(Te)}}const ne=new pe,X=new pe;function oe(ae,Ce,Te){ne.setFromMatrixPosition(Ce.matrixWorld),X.setFromMatrixPosition(Te.matrixWorld);const Je=ne.distanceTo(X),je=Ce.projectionMatrix.elements,ot=Te.projectionMatrix.elements,cn=je[14]/(je[10]-1),Et=je[14]/(je[10]+1),Rt=(je[9]+1)/je[5],Gt=(je[9]-1)/je[5],bt=(je[8]-1)/je[0],nn=(ot[8]+1)/ot[0],Z=cn*bt,fn=cn*nn,$t=Je/(-bt+nn),jt=$t*-bt;if(Ce.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(jt),ae.translateZ($t),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),je[10]===-1)ae.projectionMatrix.copy(Ce.projectionMatrix),ae.projectionMatrixInverse.copy(Ce.projectionMatrixInverse);else{const ut=cn+$t,z=Et+$t,A=Z-jt,re=fn+(Je-jt),Ae=Rt*Et/z*ut,Le=Gt*Et/z*ut;ae.projectionMatrix.makePerspective(A,re,Ae,Le,ut,z),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function F(ae,Ce){Ce===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(Ce.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let Ce=ae.near,Te=ae.far;x.texture!==null&&(x.depthNear>0&&(Ce=x.depthNear),x.depthFar>0&&(Te=x.depthFar)),j.near=B.near=C.near=Ce,j.far=B.far=C.far=Te,(G!==j.near||J!==j.far)&&(o.updateRenderState({depthNear:j.near,depthFar:j.far}),G=j.near,J=j.far),j.layers.mask=ae.layers.mask|6,C.layers.mask=j.layers.mask&-5,B.layers.mask=j.layers.mask&-3;const Je=ae.parent,je=j.cameras;F(j,Je);for(let ot=0;ot<je.length;ot++)F(je[ot],Je);je.length===2?oe(j,C,B):j.projectionMatrix.copy(C.projectionMatrix),Y(ae,j,Je)};function Y(ae,Ce,Te){Te===null?ae.matrix.copy(Ce.matrixWorld):(ae.matrix.copy(Te.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(Ce.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(Ce.projectionMatrix),ae.projectionMatrixInverse.copy(Ce.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=bc*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(g===null&&m===null))return p},this.setFoveation=function(ae){p=ae,g!==null&&(g.fixedFoveation=ae),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ae)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(j)},this.getCameraTexture=function(ae){return y[ae]};let Ie=null;function Re(ae,Ce){if(h=Ce.getViewerPose(u||c),M=Ce,h!==null){const Te=h.views;m!==null&&(e.setRenderTargetFramebuffer(I,m.framebuffer),e.setRenderTarget(I));let Je=!1;Te.length!==j.cameras.length&&(j.cameras.length=0,Je=!0);for(let Et=0;Et<Te.length;Et++){const Rt=Te[Et];let Gt=null;if(m!==null)Gt=m.getViewport(Rt);else{const nn=_.getViewSubImage(g,Rt);Gt=nn.viewport,Et===0&&(e.setRenderTargetTextures(I,nn.colorTexture,nn.depthStencilTexture),e.setRenderTarget(I))}let bt=U[Et];bt===void 0&&(bt=new Or,bt.layers.enable(Et),bt.viewport=new Un,U[Et]=bt),bt.matrix.fromArray(Rt.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(Rt.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),Et===0&&(j.matrix.copy(bt.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),Je===!0&&j.cameras.push(bt)}const je=o.enabledFeatures;if(je&&je.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){_=r.getBinding();const Et=_.getDepthInformation(Te[0]);Et&&Et.isValid&&Et.texture&&x.init(Et,o.renderState)}if(je&&je.includes("camera-access")&&T){e.state.unbindTexture(),_=r.getBinding();for(let Et=0;Et<Te.length;Et++){const Rt=Te[Et].camera;if(Rt){let Gt=y[Rt];Gt||(Gt=new Fx,y[Rt]=Gt);const bt=_.getCameraImage(Rt);Gt.sourceTexture=bt}}}}for(let Te=0;Te<$.length;Te++){const Je=w[Te],je=$[Te];Je!==null&&je!==void 0&&je.update(Je,Ce,u||c)}Ie&&Ie(ae,Ce),Ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Ce}),M=null}const et=new Hx;et.setAnimationLoop(Re),this.setAnimationLoop=function(ae){Ie=ae},this.dispose=function(){}}}const ia=new ls,KE=new In;function ZE(i,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function r(x,y){y.color.getRGB(x.fogColor.value,zx(i)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function o(x,y,L,k,I){y.isMeshBasicMaterial?a(x,y):y.isMeshLambertMaterial?(a(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(a(x,y),_(x,y)):y.isMeshPhongMaterial?(a(x,y),h(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(a(x,y),g(x,y),y.isMeshPhysicalMaterial&&m(x,y,I)):y.isMeshMatcapMaterial?(a(x,y),M(x,y)):y.isMeshDepthMaterial?a(x,y):y.isMeshDistanceMaterial?(a(x,y),T(x,y)):y.isMeshNormalMaterial?a(x,y):y.isLineBasicMaterial?(c(x,y),y.isLineDashedMaterial&&f(x,y)):y.isPointsMaterial?p(x,y,L,k):y.isSpriteMaterial?u(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function a(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===Bi&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===Bi&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const L=e.get(y),k=L.envMap,I=L.envMapRotation;k&&(x.envMap.value=k,ia.copy(I),ia.x*=-1,ia.y*=-1,ia.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(ia.y*=-1,ia.z*=-1),x.envMapRotation.value.setFromMatrix4(KE.makeRotationFromEuler(ia)),x.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function c(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function f(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function p(x,y,L,k){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*L,x.scale.value=k*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function u(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function h(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function _(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function g(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function m(x,y,L){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Bi&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=L.texture,x.transmissionSamplerSize.value.set(L.width,L.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,y){y.matcap&&(x.matcap.value=y.matcap)}function T(x,y){const L=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(L.matrixWorld),x.nearDistance.value=L.shadow.camera.near,x.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function JE(i,e,t,r){let o={},a={},c=[];const f=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,k){const I=k.program;r.uniformBlockBinding(L,I)}function u(L,k){let I=o[L.id];I===void 0&&(M(L),I=h(L),o[L.id]=I,L.addEventListener("dispose",x));const $=k.program;r.updateUBOMapping(L,$);const w=e.render.frame;a[L.id]!==w&&(g(L),a[L.id]=w)}function h(L){const k=_();L.__bindingPointIndex=k;const I=i.createBuffer(),$=L.__size,w=L.usage;return i.bindBuffer(i.UNIFORM_BUFFER,I),i.bufferData(i.UNIFORM_BUFFER,$,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,k,I),I}function _(){for(let L=0;L<f;L++)if(c.indexOf(L)===-1)return c.push(L),L;return dn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(L){const k=o[L.id],I=L.uniforms,$=L.__cache;i.bindBuffer(i.UNIFORM_BUFFER,k);for(let w=0,R=I.length;w<R;w++){const b=Array.isArray(I[w])?I[w]:[I[w]];for(let C=0,B=b.length;C<B;C++){const U=b[C];if(m(U,w,C,$)===!0){const j=U.__offset,G=Array.isArray(U.value)?U.value:[U.value];let J=0;for(let se=0;se<G.length;se++){const ie=G[se],K=T(ie);typeof ie=="number"||typeof ie=="boolean"?(U.__data[0]=ie,i.bufferSubData(i.UNIFORM_BUFFER,j+J,U.__data)):ie.isMatrix3?(U.__data[0]=ie.elements[0],U.__data[1]=ie.elements[1],U.__data[2]=ie.elements[2],U.__data[3]=0,U.__data[4]=ie.elements[3],U.__data[5]=ie.elements[4],U.__data[6]=ie.elements[5],U.__data[7]=0,U.__data[8]=ie.elements[6],U.__data[9]=ie.elements[7],U.__data[10]=ie.elements[8],U.__data[11]=0):(ie.toArray(U.__data,J),J+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,j,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(L,k,I,$){const w=L.value,R=k+"_"+I;if($[R]===void 0)return typeof w=="number"||typeof w=="boolean"?$[R]=w:$[R]=w.clone(),!0;{const b=$[R];if(typeof w=="number"||typeof w=="boolean"){if(b!==w)return $[R]=w,!0}else if(b.equals(w)===!1)return b.copy(w),!0}return!1}function M(L){const k=L.uniforms;let I=0;const $=16;for(let R=0,b=k.length;R<b;R++){const C=Array.isArray(k[R])?k[R]:[k[R]];for(let B=0,U=C.length;B<U;B++){const j=C[B],G=Array.isArray(j.value)?j.value:[j.value];for(let J=0,se=G.length;J<se;J++){const ie=G[J],K=T(ie),ne=I%$,X=ne%K.boundary,oe=ne+X;I+=X,oe!==0&&$-oe<K.storage&&(I+=$-oe),j.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=I,I+=K.storage}}}const w=I%$;return w>0&&(I+=$-w),L.__size=I,L.__cache={},this}function T(L){const k={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(k.boundary=4,k.storage=4):L.isVector2?(k.boundary=8,k.storage=8):L.isVector3||L.isColor?(k.boundary=16,k.storage=12):L.isVector4?(k.boundary=16,k.storage=16):L.isMatrix3?(k.boundary=48,k.storage=48):L.isMatrix4?(k.boundary=64,k.storage=64):L.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ot("WebGLRenderer: Unsupported uniform value type.",L),k}function x(L){const k=L.target;k.removeEventListener("dispose",x);const I=c.indexOf(k.__bindingPointIndex);c.splice(I,1),i.deleteBuffer(o[k.id]),delete o[k.id],delete a[k.id]}function y(){for(const L in o)i.deleteBuffer(o[L]);c=[],o={},a={}}return{bind:p,update:u,dispose:y}}const QE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Kr=null;function e2(){return Kr===null&&(Kr=new Nx(QE,16,16,pl,Ns),Kr.name="DFG_LUT",Kr.minFilter=qn,Kr.magFilter=qn,Kr.wrapS=Br,Kr.wrapT=Br,Kr.generateMipmaps=!1,Kr.needsUpdate=!0),Kr}class qx{constructor(e={}){const{canvas:t=n1(),context:r=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:m=er}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=c;const T=m,x=new Set([xm,vm,gm]),y=new Set([er,as,yc,Sc,pm,mm]),L=new Uint32Array(4),k=new Int32Array(4);let I=null,$=null;const w=[],R=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let B=!1;this._outputColorSpace=xr;let U=0,j=0,G=null,J=-1,se=null;const ie=new Un,K=new Un;let ne=null;const X=new sn(0);let oe=0,F=t.width,Y=t.height,Ie=1,Re=null,et=null;const ae=new Un(0,0,F,Y),Ce=new Un(0,0,F,Y);let Te=!1;const Je=new wm;let je=!1,ot=!1;const cn=new In,Et=new pe,Rt=new Un,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function nn(){return G===null?Ie:1}let Z=r;function fn(D,ue){return t.getContext(D,ue)}try{const D={alpha:!0,depth:o,stencil:a,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fm}`),t.addEventListener("webglcontextlost",lt,!1),t.addEventListener("webglcontextrestored",Pt,!1),t.addEventListener("webglcontextcreationerror",en,!1),Z===null){const ue="webgl2";if(Z=fn(ue,D),Z===null)throw fn(ue)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw dn("WebGLRenderer: "+D.message),D}let $t,jt,ut,z,A,re,Ae,Le,we,st,He,at,vt,ke,We,rt,it,tt,Ct,Q,Fe,$e,Ke;function Oe(){$t=new tw(Z),$t.init(),Fe=new WE(Z,$t),jt=new Xb(Z,$t,e,Fe),ut=new HE(Z,$t),jt.reversedDepthBuffer&&g&&ut.buffers.depth.setReversed(!0),z=new rw(Z),A=new RE,re=new GE(Z,$t,ut,A,jt,Fe,z),Ae=new ew(C),Le=new cS(Z),$e=new Wb(Z,Le),we=new nw(Z,Le,z,$e),st=new ow(Z,we,Le,$e,z),tt=new sw(Z,jt,re),We=new Yb(A),He=new AE(C,Ae,$t,jt,$e,We),at=new ZE(C,A),vt=new IE,ke=new FE($t),it=new Gb(C,Ae,ut,st,M,p),rt=new VE(C,st,jt),Ke=new JE(Z,z,jt,ut),Ct=new jb(Z,$t,z),Q=new iw(Z,$t,z),z.programs=He.programs,C.capabilities=jt,C.extensions=$t,C.properties=A,C.renderLists=vt,C.shadowMap=rt,C.state=ut,C.info=z}Oe(),T!==er&&(b=new lw(T,t.width,t.height,o,a));const be=new qE(C,Z);this.xr=be,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const D=$t.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=$t.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return Ie},this.setPixelRatio=function(D){D!==void 0&&(Ie=D,this.setSize(F,Y,!1))},this.getSize=function(D){return D.set(F,Y)},this.setSize=function(D,ue,xe=!0){if(be.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}F=D,Y=ue,t.width=Math.floor(D*Ie),t.height=Math.floor(ue*Ie),xe===!0&&(t.style.width=D+"px",t.style.height=ue+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,D,ue)},this.getDrawingBufferSize=function(D){return D.set(F*Ie,Y*Ie).floor()},this.setDrawingBufferSize=function(D,ue,xe){F=D,Y=ue,Ie=xe,t.width=Math.floor(D*xe),t.height=Math.floor(ue*xe),this.setViewport(0,0,D,ue)},this.setEffects=function(D){if(T===er){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let ue=0;ue<D.length;ue++)if(D[ue].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(ie)},this.getViewport=function(D){return D.copy(ae)},this.setViewport=function(D,ue,xe,fe){D.isVector4?ae.set(D.x,D.y,D.z,D.w):ae.set(D,ue,xe,fe),ut.viewport(ie.copy(ae).multiplyScalar(Ie).round())},this.getScissor=function(D){return D.copy(Ce)},this.setScissor=function(D,ue,xe,fe){D.isVector4?Ce.set(D.x,D.y,D.z,D.w):Ce.set(D,ue,xe,fe),ut.scissor(K.copy(Ce).multiplyScalar(Ie).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(D){ut.setScissorTest(Te=D)},this.setOpaqueSort=function(D){Re=D},this.setTransparentSort=function(D){et=D},this.getClearColor=function(D){return D.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(D=!0,ue=!0,xe=!0){let fe=0;if(D){let he=!1;if(G!==null){const nt=G.texture.format;he=x.has(nt)}if(he){const nt=G.texture.type,V=y.has(nt),q=it.getClearColor(),le=it.getClearAlpha(),Se=q.r,Ee=q.g,Ne=q.b;V?(L[0]=Se,L[1]=Ee,L[2]=Ne,L[3]=le,Z.clearBufferuiv(Z.COLOR,0,L)):(k[0]=Se,k[1]=Ee,k[2]=Ne,k[3]=le,Z.clearBufferiv(Z.COLOR,0,k))}else fe|=Z.COLOR_BUFFER_BIT}ue&&(fe|=Z.DEPTH_BUFFER_BIT),xe&&(fe|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),fe!==0&&Z.clear(fe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",lt,!1),t.removeEventListener("webglcontextrestored",Pt,!1),t.removeEventListener("webglcontextcreationerror",en,!1),it.dispose(),vt.dispose(),ke.dispose(),A.dispose(),Ae.dispose(),st.dispose(),$e.dispose(),Ke.dispose(),He.dispose(),be.dispose(),be.removeEventListener("sessionstart",Mi),be.removeEventListener("sessionend",Pi),oi.stop()};function lt(D){D.preventDefault(),kg("WebGLRenderer: Context Lost."),B=!0}function Pt(){kg("WebGLRenderer: Context Restored."),B=!1;const D=z.autoReset,ue=rt.enabled,xe=rt.autoUpdate,fe=rt.needsUpdate,he=rt.type;Oe(),z.autoReset=D,rt.enabled=ue,rt.autoUpdate=xe,rt.needsUpdate=fe,rt.type=he}function en(D){dn("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Yt(D){const ue=D.target;ue.removeEventListener("dispose",Yt),Fn(ue)}function Fn(D){Sn(D),A.remove(D)}function Sn(D){const ue=A.get(D).programs;ue!==void 0&&(ue.forEach(function(xe){He.releaseProgram(xe)}),D.isShaderMaterial&&He.releaseShaderCache(D))}this.renderBufferDirect=function(D,ue,xe,fe,he,nt){ue===null&&(ue=Gt);const V=he.isMesh&&he.matrixWorld.determinant()<0,q=On(D,ue,xe,fe,he);ut.setMaterial(fe,V);let le=xe.index,Se=1;if(fe.wireframe===!0){if(le=we.getWireframeAttribute(xe),le===void 0)return;Se=2}const Ee=xe.drawRange,Ne=xe.attributes.position;let De=Ee.start*Se,Xe=(Ee.start+Ee.count)*Se;nt!==null&&(De=Math.max(De,nt.start*Se),Xe=Math.min(Xe,(nt.start+nt.count)*Se)),le!==null?(De=Math.max(De,0),Xe=Math.min(Xe,le.count)):Ne!=null&&(De=Math.max(De,0),Xe=Math.min(Xe,Ne.count));const Qe=Xe-De;if(Qe<0||Qe===1/0)return;$e.setup(he,fe,q,xe,le);let dt,ft=Ct;if(le!==null&&(dt=Le.get(le),ft=Q,ft.setIndex(dt)),he.isMesh)fe.wireframe===!0?(ut.setLineWidth(fe.wireframeLinewidth*nn()),ft.setMode(Z.LINES)):ft.setMode(Z.TRIANGLES);else if(he.isLine){let yt=fe.linewidth;yt===void 0&&(yt=1),ut.setLineWidth(yt*nn()),he.isLineSegments?ft.setMode(Z.LINES):he.isLineLoop?ft.setMode(Z.LINE_LOOP):ft.setMode(Z.LINE_STRIP)}else he.isPoints?ft.setMode(Z.POINTS):he.isSprite&&ft.setMode(Z.TRIANGLES);if(he.isBatchedMesh)if(he._multiDrawInstances!==null)Dd("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(he._multiDrawStarts,he._multiDrawCounts,he._multiDrawCount,he._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))ft.renderMultiDraw(he._multiDrawStarts,he._multiDrawCounts,he._multiDrawCount);else{const yt=he._multiDrawStarts,Ve=he._multiDrawCounts,Kt=he._multiDrawCount,It=le?Le.get(le).bytesPerElement:1,Vt=A.get(fe).currentProgram.getUniforms();for(let Ln=0;Ln<Kt;Ln++)Vt.setValue(Z,"_gl_DrawID",Ln),ft.render(yt[Ln]/It,Ve[Ln])}else if(he.isInstancedMesh)ft.renderInstances(De,Qe,he.count);else if(xe.isInstancedBufferGeometry){const yt=xe._maxInstanceCount!==void 0?xe._maxInstanceCount:1/0,Ve=Math.min(xe.instanceCount,yt);ft.renderInstances(De,Qe,Ve)}else ft.render(De,Qe)};function zi(D,ue,xe){D.transparent===!0&&D.side===As&&D.forceSinglePass===!1?(D.side=Bi,D.needsUpdate=!0,Sr(D,ue,xe),D.side=Po,D.needsUpdate=!0,Sr(D,ue,xe),D.side=As):Sr(D,ue,xe)}this.compile=function(D,ue,xe=null){xe===null&&(xe=D),$=ke.get(xe),$.init(ue),R.push($),xe.traverseVisible(function(he){he.isLight&&he.layers.test(ue.layers)&&($.pushLight(he),he.castShadow&&$.pushShadow(he))}),D!==xe&&D.traverseVisible(function(he){he.isLight&&he.layers.test(ue.layers)&&($.pushLight(he),he.castShadow&&$.pushShadow(he))}),$.setupLights();const fe=new Set;return D.traverse(function(he){if(!(he.isMesh||he.isPoints||he.isLine||he.isSprite))return;const nt=he.material;if(nt)if(Array.isArray(nt))for(let V=0;V<nt.length;V++){const q=nt[V];zi(q,xe,he),fe.add(q)}else zi(nt,xe,he),fe.add(nt)}),$=R.pop(),fe},this.compileAsync=function(D,ue,xe=null){const fe=this.compile(D,ue,xe);return new Promise(he=>{function nt(){if(fe.forEach(function(V){A.get(V).currentProgram.isReady()&&fe.delete(V)}),fe.size===0){he(D);return}setTimeout(nt,10)}$t.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Qn=null;function ir(D){Qn&&Qn(D)}function Mi(){oi.stop()}function Pi(){oi.start()}const oi=new Hx;oi.setAnimationLoop(ir),typeof self<"u"&&oi.setContext(self),this.setAnimationLoop=function(D){Qn=D,be.setAnimationLoop(D),D===null?oi.stop():oi.start()},be.addEventListener("sessionstart",Mi),be.addEventListener("sessionend",Pi),this.render=function(D,ue){if(ue!==void 0&&ue.isCamera!==!0){dn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;const xe=be.enabled===!0&&be.isPresenting===!0,fe=b!==null&&(G===null||xe)&&b.begin(C,G);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ue.parent===null&&ue.matrixWorldAutoUpdate===!0&&ue.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(ue),ue=be.getCamera()),D.isScene===!0&&D.onBeforeRender(C,D,ue,G),$=ke.get(D,R.length),$.init(ue),R.push($),cn.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),Je.setFromProjectionMatrix(cn,is,ue.reversedDepth),ot=this.localClippingEnabled,je=We.init(this.clippingPlanes,ot),I=vt.get(D,w.length),I.init(),w.push(I),be.enabled===!0&&be.isPresenting===!0){const V=C.xr.getDepthSensingMesh();V!==null&&$i(V,ue,-1/0,C.sortObjects)}$i(D,ue,0,C.sortObjects),I.finish(),C.sortObjects===!0&&I.sort(Re,et),bt=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,bt&&it.addToRenderList(I,D),this.info.render.frame++,je===!0&&We.beginShadows();const he=$.state.shadowsArray;if(rt.render(he,D,ue),je===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),(fe&&b.hasRenderPass())===!1){const V=I.opaque,q=I.transmissive;if($.setupLights(),ue.isArrayCamera){const le=ue.cameras;if(q.length>0)for(let Se=0,Ee=le.length;Se<Ee;Se++){const Ne=le[Se];Us(V,q,D,Ne)}bt&&it.render(D);for(let Se=0,Ee=le.length;Se<Ee;Se++){const Ne=le[Se];ei(I,D,Ne,Ne.viewport)}}else q.length>0&&Us(V,q,D,ue),bt&&it.render(D),ei(I,D,ue)}G!==null&&j===0&&(re.updateMultisampleRenderTarget(G),re.updateRenderTargetMipmap(G)),fe&&b.end(C),D.isScene===!0&&D.onAfterRender(C,D,ue),$e.resetDefaultState(),J=-1,se=null,R.pop(),R.length>0?($=R[R.length-1],je===!0&&We.setGlobalState(C.clippingPlanes,$.state.camera)):$=null,w.pop(),w.length>0?I=w[w.length-1]:I=null};function $i(D,ue,xe,fe){if(D.visible===!1)return;if(D.layers.test(ue.layers)){if(D.isGroup)xe=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(ue);else if(D.isLight)$.pushLight(D),D.castShadow&&$.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Je.intersectsSprite(D)){fe&&Rt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(cn);const V=st.update(D),q=D.material;q.visible&&I.push(D,V,q,xe,Rt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Je.intersectsObject(D))){const V=st.update(D),q=D.material;if(fe&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Rt.copy(D.boundingSphere.center)):(V.boundingSphere===null&&V.computeBoundingSphere(),Rt.copy(V.boundingSphere.center)),Rt.applyMatrix4(D.matrixWorld).applyMatrix4(cn)),Array.isArray(q)){const le=V.groups;for(let Se=0,Ee=le.length;Se<Ee;Se++){const Ne=le[Se],De=q[Ne.materialIndex];De&&De.visible&&I.push(D,V,De,xe,Rt.z,Ne)}}else q.visible&&I.push(D,V,q,xe,Rt.z,null)}}const nt=D.children;for(let V=0,q=nt.length;V<q;V++)$i(nt[V],ue,xe,fe)}function ei(D,ue,xe,fe){const{opaque:he,transmissive:nt,transparent:V}=D;$.setupLightsView(xe),je===!0&&We.setGlobalState(C.clippingPlanes,xe),fe&&ut.viewport(ie.copy(fe)),he.length>0&&$r(he,ue,xe),nt.length>0&&$r(nt,ue,xe),V.length>0&&$r(V,ue,xe),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Us(D,ue,xe,fe){if((xe.isScene===!0?xe.overrideMaterial:null)!==null)return;if($.state.transmissionRenderTarget[fe.id]===void 0){const De=$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float");$.state.transmissionRenderTarget[fe.id]=new ss(1,1,{generateMipmaps:!0,type:De?Ns:er,minFilter:Eo,samples:Math.max(4,jt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:an.workingColorSpace})}const nt=$.state.transmissionRenderTarget[fe.id],V=fe.viewport||ie;nt.setSize(V.z*C.transmissionResolutionScale,V.w*C.transmissionResolutionScale);const q=C.getRenderTarget(),le=C.getActiveCubeFace(),Se=C.getActiveMipmapLevel();C.setRenderTarget(nt),C.getClearColor(X),oe=C.getClearAlpha(),oe<1&&C.setClearColor(16777215,.5),C.clear(),bt&&it.render(xe);const Ee=C.toneMapping;C.toneMapping=rs;const Ne=fe.viewport;if(fe.viewport!==void 0&&(fe.viewport=void 0),$.setupLightsView(fe),je===!0&&We.setGlobalState(C.clippingPlanes,fe),$r(D,xe,fe),re.updateMultisampleRenderTarget(nt),re.updateRenderTargetMipmap(nt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Xe=0,Qe=ue.length;Xe<Qe;Xe++){const dt=ue[Xe],{object:ft,geometry:yt,material:Ve,group:Kt}=dt;if(Ve.side===As&&ft.layers.test(fe.layers)){const It=Ve.side;Ve.side=Bi,Ve.needsUpdate=!0,Ii(ft,xe,fe,yt,Ve,Kt),Ve.side=It,Ve.needsUpdate=!0,De=!0}}De===!0&&(re.updateMultisampleRenderTarget(nt),re.updateRenderTargetMipmap(nt))}C.setRenderTarget(q,le,Se),C.setClearColor(X,oe),Ne!==void 0&&(fe.viewport=Ne),C.toneMapping=Ee}function $r(D,ue,xe){const fe=ue.isScene===!0?ue.overrideMaterial:null;for(let he=0,nt=D.length;he<nt;he++){const V=D[he],{object:q,geometry:le,group:Se}=V;let Ee=V.material;Ee.allowOverride===!0&&fe!==null&&(Ee=fe),q.layers.test(xe.layers)&&Ii(q,ue,xe,le,Ee,Se)}}function Ii(D,ue,xe,fe,he,nt){D.onBeforeRender(C,ue,xe,fe,he,nt),D.modelViewMatrix.multiplyMatrices(xe.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),he.onBeforeRender(C,ue,xe,fe,D,nt),he.transparent===!0&&he.side===As&&he.forceSinglePass===!1?(he.side=Bi,he.needsUpdate=!0,C.renderBufferDirect(xe,ue,fe,he,D,nt),he.side=Po,he.needsUpdate=!0,C.renderBufferDirect(xe,ue,fe,he,D,nt),he.side=As):C.renderBufferDirect(xe,ue,fe,he,D,nt),D.onAfterRender(C,ue,xe,fe,he,nt)}function Sr(D,ue,xe){ue.isScene!==!0&&(ue=Gt);const fe=A.get(D),he=$.state.lights,nt=$.state.shadowsArray,V=he.state.version,q=He.getParameters(D,he.state,nt,ue,xe),le=He.getProgramCacheKey(q);let Se=fe.programs;fe.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?ue.environment:null,fe.fog=ue.fog;const Ee=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;fe.envMap=Ae.get(D.envMap||fe.environment,Ee),fe.envMapRotation=fe.environment!==null&&D.envMap===null?ue.environmentRotation:D.envMapRotation,Se===void 0&&(D.addEventListener("dispose",Yt),Se=new Map,fe.programs=Se);let Ne=Se.get(le);if(Ne!==void 0){if(fe.currentProgram===Ne&&fe.lightsStateVersion===V)return ai(D,q),Ne}else q.uniforms=He.getUniforms(D),D.onBeforeCompile(q,C),Ne=He.acquireProgram(q,le),Se.set(le,Ne),fe.uniforms=q.uniforms;const De=fe.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(De.clippingPlanes=We.uniform),ai(D,q),fe.needsLights=Mr(D),fe.lightsStateVersion=V,fe.needsLights&&(De.ambientLightColor.value=he.state.ambient,De.lightProbe.value=he.state.probe,De.directionalLights.value=he.state.directional,De.directionalLightShadows.value=he.state.directionalShadow,De.spotLights.value=he.state.spot,De.spotLightShadows.value=he.state.spotShadow,De.rectAreaLights.value=he.state.rectArea,De.ltc_1.value=he.state.rectAreaLTC1,De.ltc_2.value=he.state.rectAreaLTC2,De.pointLights.value=he.state.point,De.pointLightShadows.value=he.state.pointShadow,De.hemisphereLights.value=he.state.hemi,De.directionalShadowMatrix.value=he.state.directionalShadowMatrix,De.spotLightMatrix.value=he.state.spotLightMatrix,De.spotLightMap.value=he.state.spotLightMap,De.pointShadowMatrix.value=he.state.pointShadowMatrix),fe.currentProgram=Ne,fe.uniformsList=null,Ne}function Vi(D){if(D.uniformsList===null){const ue=D.currentProgram.getUniforms();D.uniformsList=Cd.seqWithValue(ue.seq,D.uniforms)}return D.uniformsList}function ai(D,ue){const xe=A.get(D);xe.outputColorSpace=ue.outputColorSpace,xe.batching=ue.batching,xe.batchingColor=ue.batchingColor,xe.instancing=ue.instancing,xe.instancingColor=ue.instancingColor,xe.instancingMorph=ue.instancingMorph,xe.skinning=ue.skinning,xe.morphTargets=ue.morphTargets,xe.morphNormals=ue.morphNormals,xe.morphColors=ue.morphColors,xe.morphTargetsCount=ue.morphTargetsCount,xe.numClippingPlanes=ue.numClippingPlanes,xe.numIntersection=ue.numClipIntersection,xe.vertexAlphas=ue.vertexAlphas,xe.vertexTangents=ue.vertexTangents,xe.toneMapping=ue.toneMapping}function On(D,ue,xe,fe,he){ue.isScene!==!0&&(ue=Gt),re.resetTextureUnits();const nt=ue.fog,V=fe.isMeshStandardMaterial||fe.isMeshLambertMaterial||fe.isMeshPhongMaterial?ue.environment:null,q=G===null?C.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ml,le=fe.isMeshStandardMaterial||fe.isMeshLambertMaterial&&!fe.envMap||fe.isMeshPhongMaterial&&!fe.envMap,Se=Ae.get(fe.envMap||V,le),Ee=fe.vertexColors===!0&&!!xe.attributes.color&&xe.attributes.color.itemSize===4,Ne=!!xe.attributes.tangent&&(!!fe.normalMap||fe.anisotropy>0),De=!!xe.morphAttributes.position,Xe=!!xe.morphAttributes.normal,Qe=!!xe.morphAttributes.color;let dt=rs;fe.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(dt=C.toneMapping);const ft=xe.morphAttributes.position||xe.morphAttributes.normal||xe.morphAttributes.color,yt=ft!==void 0?ft.length:0,Ve=A.get(fe),Kt=$.state.lights;if(je===!0&&(ot===!0||D!==se)){const En=D===se&&fe.id===J;We.setState(fe,D,En)}let It=!1;fe.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Kt.state.version||Ve.outputColorSpace!==q||he.isBatchedMesh&&Ve.batching===!1||!he.isBatchedMesh&&Ve.batching===!0||he.isBatchedMesh&&Ve.batchingColor===!0&&he.colorTexture===null||he.isBatchedMesh&&Ve.batchingColor===!1&&he.colorTexture!==null||he.isInstancedMesh&&Ve.instancing===!1||!he.isInstancedMesh&&Ve.instancing===!0||he.isSkinnedMesh&&Ve.skinning===!1||!he.isSkinnedMesh&&Ve.skinning===!0||he.isInstancedMesh&&Ve.instancingColor===!0&&he.instanceColor===null||he.isInstancedMesh&&Ve.instancingColor===!1&&he.instanceColor!==null||he.isInstancedMesh&&Ve.instancingMorph===!0&&he.morphTexture===null||he.isInstancedMesh&&Ve.instancingMorph===!1&&he.morphTexture!==null||Ve.envMap!==Se||fe.fog===!0&&Ve.fog!==nt||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==We.numPlanes||Ve.numIntersection!==We.numIntersection)||Ve.vertexAlphas!==Ee||Ve.vertexTangents!==Ne||Ve.morphTargets!==De||Ve.morphNormals!==Xe||Ve.morphColors!==Qe||Ve.toneMapping!==dt||Ve.morphTargetsCount!==yt)&&(It=!0):(It=!0,Ve.__version=fe.version);let Vt=Ve.currentProgram;It===!0&&(Vt=Sr(fe,ue,he));let Ln=!1,Dn=!1,Mn=!1;const Ut=Vt.getUniforms(),At=Ve.uniforms;if(ut.useProgram(Vt.program)&&(Ln=!0,Dn=!0,Mn=!0),fe.id!==J&&(J=fe.id,Dn=!0),Ln||se!==D){ut.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Ut.setValue(Z,"projectionMatrix",D.projectionMatrix),Ut.setValue(Z,"viewMatrix",D.matrixWorldInverse);const jn=Ut.map.cameraPosition;jn!==void 0&&jn.setValue(Z,Et.setFromMatrixPosition(D.matrixWorld)),jt.logarithmicDepthBuffer&&Ut.setValue(Z,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(fe.isMeshPhongMaterial||fe.isMeshToonMaterial||fe.isMeshLambertMaterial||fe.isMeshBasicMaterial||fe.isMeshStandardMaterial||fe.isShaderMaterial)&&Ut.setValue(Z,"isOrthographic",D.isOrthographicCamera===!0),se!==D&&(se=D,Dn=!0,Mn=!0)}if(Ve.needsLights&&(Kt.state.directionalShadowMap.length>0&&Ut.setValue(Z,"directionalShadowMap",Kt.state.directionalShadowMap,re),Kt.state.spotShadowMap.length>0&&Ut.setValue(Z,"spotShadowMap",Kt.state.spotShadowMap,re),Kt.state.pointShadowMap.length>0&&Ut.setValue(Z,"pointShadowMap",Kt.state.pointShadowMap,re)),he.isSkinnedMesh){Ut.setOptional(Z,he,"bindMatrix"),Ut.setOptional(Z,he,"bindMatrixInverse");const En=he.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Ut.setValue(Z,"boneTexture",En.boneTexture,re))}he.isBatchedMesh&&(Ut.setOptional(Z,he,"batchingTexture"),Ut.setValue(Z,"batchingTexture",he._matricesTexture,re),Ut.setOptional(Z,he,"batchingIdTexture"),Ut.setValue(Z,"batchingIdTexture",he._indirectTexture,re),Ut.setOptional(Z,he,"batchingColorTexture"),he._colorsTexture!==null&&Ut.setValue(Z,"batchingColorTexture",he._colorsTexture,re));const ti=xe.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&tt.update(he,xe,Vt),(Dn||Ve.receiveShadow!==he.receiveShadow)&&(Ve.receiveShadow=he.receiveShadow,Ut.setValue(Z,"receiveShadow",he.receiveShadow)),(fe.isMeshStandardMaterial||fe.isMeshLambertMaterial||fe.isMeshPhongMaterial)&&fe.envMap===null&&ue.environment!==null&&(At.envMapIntensity.value=ue.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=e2()),Dn&&(Ut.setValue(Z,"toneMappingExposure",C.toneMappingExposure),Ve.needsLights&&Wn(At,Mn),nt&&fe.fog===!0&&at.refreshFogUniforms(At,nt),at.refreshMaterialUniforms(At,fe,Ie,Y,$.state.transmissionRenderTarget[D.id]),Cd.upload(Z,Vi(Ve),At,re)),fe.isShaderMaterial&&fe.uniformsNeedUpdate===!0&&(Cd.upload(Z,Vi(Ve),At,re),fe.uniformsNeedUpdate=!1),fe.isSpriteMaterial&&Ut.setValue(Z,"center",he.center),Ut.setValue(Z,"modelViewMatrix",he.modelViewMatrix),Ut.setValue(Z,"normalMatrix",he.normalMatrix),Ut.setValue(Z,"modelMatrix",he.matrixWorld),fe.isShaderMaterial||fe.isRawShaderMaterial){const En=fe.uniformsGroups;for(let jn=0,Hi=En.length;jn<Hi;jn++){const rr=En[jn];Ke.update(rr,Vt),Ke.bind(rr,Vt)}}return Vt}function Wn(D,ue){D.ambientLightColor.needsUpdate=ue,D.lightProbe.needsUpdate=ue,D.directionalLights.needsUpdate=ue,D.directionalLightShadows.needsUpdate=ue,D.pointLights.needsUpdate=ue,D.pointLightShadows.needsUpdate=ue,D.spotLights.needsUpdate=ue,D.spotLightShadows.needsUpdate=ue,D.rectAreaLights.needsUpdate=ue,D.hemisphereLights.needsUpdate=ue}function Mr(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(D,ue,xe){const fe=A.get(D);fe.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,fe.__autoAllocateDepthBuffer===!1&&(fe.__useRenderToTexture=!1),A.get(D.texture).__webglTexture=ue,A.get(D.depthTexture).__webglTexture=fe.__autoAllocateDepthBuffer?void 0:xe,fe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,ue){const xe=A.get(D);xe.__webglFramebuffer=ue,xe.__useDefaultFramebuffer=ue===void 0};const Fs=Z.createFramebuffer();this.setRenderTarget=function(D,ue=0,xe=0){G=D,U=ue,j=xe;let fe=null,he=!1,nt=!1;if(D){const q=A.get(D);if(q.__useDefaultFramebuffer!==void 0){ut.bindFramebuffer(Z.FRAMEBUFFER,q.__webglFramebuffer),ie.copy(D.viewport),K.copy(D.scissor),ne=D.scissorTest,ut.viewport(ie),ut.scissor(K),ut.setScissorTest(ne),J=-1;return}else if(q.__webglFramebuffer===void 0)re.setupRenderTarget(D);else if(q.__hasExternalTextures)re.rebindTextures(D,A.get(D.texture).__webglTexture,A.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Ee=D.depthTexture;if(q.__boundDepthTexture!==Ee){if(Ee!==null&&A.has(Ee)&&(D.width!==Ee.image.width||D.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(D)}}const le=D.texture;(le.isData3DTexture||le.isDataArrayTexture||le.isCompressedArrayTexture)&&(nt=!0);const Se=A.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Se[ue])?fe=Se[ue][xe]:fe=Se[ue],he=!0):D.samples>0&&re.useMultisampledRTT(D)===!1?fe=A.get(D).__webglMultisampledFramebuffer:Array.isArray(Se)?fe=Se[xe]:fe=Se,ie.copy(D.viewport),K.copy(D.scissor),ne=D.scissorTest}else ie.copy(ae).multiplyScalar(Ie).floor(),K.copy(Ce).multiplyScalar(Ie).floor(),ne=Te;if(xe!==0&&(fe=Fs),ut.bindFramebuffer(Z.FRAMEBUFFER,fe)&&ut.drawBuffers(D,fe),ut.viewport(ie),ut.scissor(K),ut.setScissorTest(ne),he){const q=A.get(D.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+ue,q.__webglTexture,xe)}else if(nt){const q=ue;for(let le=0;le<D.textures.length;le++){const Se=A.get(D.textures[le]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+le,Se.__webglTexture,xe,q)}}else if(D!==null&&xe!==0){const q=A.get(D.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,q.__webglTexture,xe)}J=-1},this.readRenderTargetPixels=function(D,ue,xe,fe,he,nt,V,q=0){if(!(D&&D.isWebGLRenderTarget)){dn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let le=A.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&V!==void 0&&(le=le[V]),le){ut.bindFramebuffer(Z.FRAMEBUFFER,le);try{const Se=D.textures[q],Ee=Se.format,Ne=Se.type;if(D.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+q),!jt.textureFormatReadable(Ee)){dn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(Ne)){dn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ue>=0&&ue<=D.width-fe&&xe>=0&&xe<=D.height-he&&Z.readPixels(ue,xe,fe,he,Fe.convert(Ee),Fe.convert(Ne),nt)}finally{const Se=G!==null?A.get(G).__webglFramebuffer:null;ut.bindFramebuffer(Z.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(D,ue,xe,fe,he,nt,V,q=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let le=A.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&V!==void 0&&(le=le[V]),le)if(ue>=0&&ue<=D.width-fe&&xe>=0&&xe<=D.height-he){ut.bindFramebuffer(Z.FRAMEBUFFER,le);const Se=D.textures[q],Ee=Se.format,Ne=Se.type;if(D.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+q),!jt.textureFormatReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const De=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,De),Z.bufferData(Z.PIXEL_PACK_BUFFER,nt.byteLength,Z.STREAM_READ),Z.readPixels(ue,xe,fe,he,Fe.convert(Ee),Fe.convert(Ne),0);const Xe=G!==null?A.get(G).__webglFramebuffer:null;ut.bindFramebuffer(Z.FRAMEBUFFER,Xe);const Qe=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await i1(Z,Qe,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,De),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,nt),Z.deleteBuffer(De),Z.deleteSync(Qe),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,ue=null,xe=0){const fe=Math.pow(2,-xe),he=Math.floor(D.image.width*fe),nt=Math.floor(D.image.height*fe),V=ue!==null?ue.x:0,q=ue!==null?ue.y:0;re.setTexture2D(D,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,xe,0,0,V,q,he,nt),ut.unbindTexture()};const gn=Z.createFramebuffer(),hn=Z.createFramebuffer();this.copyTextureToTexture=function(D,ue,xe=null,fe=null,he=0,nt=0){let V,q,le,Se,Ee,Ne,De,Xe,Qe;const dt=D.isCompressedTexture?D.mipmaps[nt]:D.image;if(xe!==null)V=xe.max.x-xe.min.x,q=xe.max.y-xe.min.y,le=xe.isBox3?xe.max.z-xe.min.z:1,Se=xe.min.x,Ee=xe.min.y,Ne=xe.isBox3?xe.min.z:0;else{const At=Math.pow(2,-he);V=Math.floor(dt.width*At),q=Math.floor(dt.height*At),D.isDataArrayTexture?le=dt.depth:D.isData3DTexture?le=Math.floor(dt.depth*At):le=1,Se=0,Ee=0,Ne=0}fe!==null?(De=fe.x,Xe=fe.y,Qe=fe.z):(De=0,Xe=0,Qe=0);const ft=Fe.convert(ue.format),yt=Fe.convert(ue.type);let Ve;ue.isData3DTexture?(re.setTexture3D(ue,0),Ve=Z.TEXTURE_3D):ue.isDataArrayTexture||ue.isCompressedArrayTexture?(re.setTexture2DArray(ue,0),Ve=Z.TEXTURE_2D_ARRAY):(re.setTexture2D(ue,0),Ve=Z.TEXTURE_2D),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,ue.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,ue.unpackAlignment);const Kt=Z.getParameter(Z.UNPACK_ROW_LENGTH),It=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),Vt=Z.getParameter(Z.UNPACK_SKIP_PIXELS),Ln=Z.getParameter(Z.UNPACK_SKIP_ROWS),Dn=Z.getParameter(Z.UNPACK_SKIP_IMAGES);Z.pixelStorei(Z.UNPACK_ROW_LENGTH,dt.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,dt.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,Se),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,Ee),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,Ne);const Mn=D.isDataArrayTexture||D.isData3DTexture,Ut=ue.isDataArrayTexture||ue.isData3DTexture;if(D.isDepthTexture){const At=A.get(D),ti=A.get(ue),En=A.get(At.__renderTarget),jn=A.get(ti.__renderTarget);ut.bindFramebuffer(Z.READ_FRAMEBUFFER,En.__webglFramebuffer),ut.bindFramebuffer(Z.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let Hi=0;Hi<le;Hi++)Mn&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,A.get(D).__webglTexture,he,Ne+Hi),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,A.get(ue).__webglTexture,nt,Qe+Hi)),Z.blitFramebuffer(Se,Ee,V,q,De,Xe,V,q,Z.DEPTH_BUFFER_BIT,Z.NEAREST);ut.bindFramebuffer(Z.READ_FRAMEBUFFER,null),ut.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(he!==0||D.isRenderTargetTexture||A.has(D)){const At=A.get(D),ti=A.get(ue);ut.bindFramebuffer(Z.READ_FRAMEBUFFER,gn),ut.bindFramebuffer(Z.DRAW_FRAMEBUFFER,hn);for(let En=0;En<le;En++)Mn?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,At.__webglTexture,he,Ne+En):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,At.__webglTexture,he),Ut?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,ti.__webglTexture,nt,Qe+En):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,ti.__webglTexture,nt),he!==0?Z.blitFramebuffer(Se,Ee,V,q,De,Xe,V,q,Z.COLOR_BUFFER_BIT,Z.NEAREST):Ut?Z.copyTexSubImage3D(Ve,nt,De,Xe,Qe+En,Se,Ee,V,q):Z.copyTexSubImage2D(Ve,nt,De,Xe,Se,Ee,V,q);ut.bindFramebuffer(Z.READ_FRAMEBUFFER,null),ut.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Ut?D.isDataTexture||D.isData3DTexture?Z.texSubImage3D(Ve,nt,De,Xe,Qe,V,q,le,ft,yt,dt.data):ue.isCompressedArrayTexture?Z.compressedTexSubImage3D(Ve,nt,De,Xe,Qe,V,q,le,ft,dt.data):Z.texSubImage3D(Ve,nt,De,Xe,Qe,V,q,le,ft,yt,dt):D.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,nt,De,Xe,V,q,ft,yt,dt.data):D.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,nt,De,Xe,dt.width,dt.height,ft,dt.data):Z.texSubImage2D(Z.TEXTURE_2D,nt,De,Xe,V,q,ft,yt,dt);Z.pixelStorei(Z.UNPACK_ROW_LENGTH,Kt),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,It),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,Vt),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,Ln),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,Dn),nt===0&&ue.generateMipmaps&&Z.generateMipmap(Ve),ut.unbindTexture()},this.initRenderTarget=function(D){A.get(D).__webglFramebuffer===void 0&&re.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?re.setTextureCube(D,0):D.isData3DTexture?re.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?re.setTexture2DArray(D,0):re.setTexture2D(D,0),ut.unbindTexture()},this.resetState=function(){U=0,j=0,G=null,ut.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return is}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=an._getDrawingBufferColorSpace(e),t.unpackColorSpace=an._getUnpackColorSpace()}}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),n2=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase()),Lv=i=>{const e=n2(i);return e.charAt(0).toUpperCase()+e.slice(1)},Kx=(...i)=>i.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim(),i2=i=>{for(const e in i)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var r2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=N.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:a,iconNode:c,...f},p)=>N.createElement("svg",{ref:p,...r2,width:e,height:e,stroke:i,strokeWidth:r?Number(t)*24/Number(e):t,className:Kx("lucide",o),...!a&&!i2(f)&&{"aria-hidden":"true"},...f},[...c.map(([u,h])=>N.createElement(u,h)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=(i,e)=>{const t=N.forwardRef(({className:r,...o},a)=>N.createElement(s2,{ref:a,iconNode:e,className:Kx(`lucide-${t2(Lv(i))}`,`lucide-${i}`,r),...o}));return t.displayName=Lv(i),t};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],a2=nr("crosshair",o2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],c2=nr("download",l2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],d2=nr("folder-open",u2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],h2=nr("hash",f2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=[["path",{d:"m12 15 4 4",key:"lnac28"}],["path",{d:"M2.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.029-6.029a1 1 0 1 1 3 3l-6.029 6.029a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l6.365-6.367A1 1 0 0 0 8.716 4.282z",key:"nlhkjb"}],["path",{d:"m5 8 4 4",key:"j6kj7e"}]],m2=nr("magnet",p2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],v2=nr("maximize-2",g2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=[["path",{d:"M5 12h14",key:"1ays0h"}]],_2=nr("minus",x2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],S2=nr("plus",y2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13",key:"6uklza"}]],b2=nr("redo-2",M2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],E2=nr("rotate-ccw",w2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],C2=nr("save",T2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]],R2=nr("undo-2",A2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]],Dv=nr("wand-sparkles",P2),I2=(i,e)=>{if(!i)return 0;let t=0,r=0;for(let o=0;o<e.length&&t<i.length;o++)e[o]===i[t]?(r+=2,t++):r-=.05;return t===i.length?r:-999};function L2({open:i,items:e,onRun:t,onClose:r}){const[o,a]=N.useState(""),[c,f]=N.useState(0),p=N.useMemo(()=>{const u=o.toLowerCase().trim();return e.map(_=>({it:_,score:I2(u,_.searchText)})).filter(_=>u.length===0||_.score>-999).sort((_,g)=>g.score-_.score||_.it.label.localeCompare(g.it.label)).map(_=>_.it)},[e,o]);return N.useEffect(()=>{i&&(a(""),f(0))},[i]),N.useEffect(()=>{if(!i)return;const u=h=>{if(h.key==="Escape")h.preventDefault(),r();else if(h.key==="ArrowDown")h.preventDefault(),f(_=>(_+1)%Math.max(p.length,1));else if(h.key==="ArrowUp")h.preventDefault(),f(_=>(_-1+Math.max(p.length,1))%Math.max(p.length,1));else if(h.key==="Enter"){h.preventDefault();const _=p[c];_&&_.enabled&&t(_.id)}};return window.addEventListener("keydown",u,!0),()=>window.removeEventListener("keydown",u,!0)},[p,c,r,t,i]),i?E.jsx("div",{style:{position:"fixed",inset:0,background:"#00000066",zIndex:1300},onMouseDown:r,children:E.jsxs("div",{style:{width:520,maxHeight:460,margin:"80px auto 0",background:"#1b1d22",border:"1px solid #343a46",borderRadius:10,boxShadow:"0 16px 48px #000000aa",overflow:"hidden"},onMouseDown:u=>u.stopPropagation(),children:[E.jsx("div",{style:{padding:10,borderBottom:"1px solid #2f343f"},children:E.jsx("input",{autoFocus:!0,value:o,onChange:u=>a(u.target.value),placeholder:"Search commands...",style:{width:"100%",boxSizing:"border-box",background:"#16181d",border:"1px solid #353a45",color:"#d5dbea",borderRadius:6,padding:"8px 10px",fontSize:13,outline:"none"}})}),E.jsx("div",{style:{maxHeight:390,overflowY:"auto",padding:8},children:p.map((u,h)=>E.jsxs("button",{onClick:()=>u.enabled&&t(u.id),disabled:!u.enabled,onMouseEnter:()=>f(h),style:{width:"100%",textAlign:"left",border:h===c?"1px solid #5f81bb":"1px solid #313744",background:h===c?"#42649a":"#21252d",color:u.enabled?"#e8edf8":"#778099",borderRadius:6,padding:"8px 10px",fontSize:12,marginBottom:4,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[E.jsx("span",{children:u.label}),E.jsx("span",{style:{fontSize:10,opacity:.7},children:u.shortcut||u.category})]},u.id))})]})}):null}const ht=i=>({id:i,type:"float",label:i}),_t=()=>({id:"out",type:"float",label:"Out"}),Nv=i=>({id:i,type:"vec2",label:i}),Qh=i=>({id:i,type:"vec3",label:i}),ep=(i="Out")=>({id:"out",type:"vec3",label:i}),_e=(i,e,t,r,o,a)=>({type:i,default:e,min:t,max:r,step:o,options:a}),Mt={constant:{type:"constant",label:"Constant",category:"gen",inputs:[],outputs:[_t()],params:{value:_e("float",.5,-1,1,.01)}},time:{type:"time",label:"Time",category:"gen",inputs:[],outputs:[_t()],params:{speed:_e("float",1,0,10,.1)}},uv:{type:"uv",label:"UV",category:"gen",inputs:[],outputs:[{id:"out",type:"vec2",label:"UV"}],params:{}},uv_x:{type:"uv_x",label:"UV.x",category:"gen",inputs:[],outputs:[_t()],params:{}},uv_y:{type:"uv_y",label:"UV.y",category:"gen",inputs:[],outputs:[_t()],params:{}},uniform_color:{type:"uniform_color",label:"Uniform Color",category:"gen",inputs:[],outputs:[{id:"out",type:"vec3",label:"Color"}],params:{r:_e("float",.5,0,1,.01),g:_e("float",.5,0,1,.01),b:_e("float",.5,0,1,.01)}},gaussian_noise:{type:"gaussian_noise",label:"Gaussian Noise",category:"gen",inputs:[],outputs:[_t()],params:{scale:_e("float",12,1,64,1),mean:_e("float",.5,0,1,.01),stdDev:_e("float",.16,.01,.5,.01),seed:_e("int",1337,0,2147483647,1),tileOffsetX:_e("float",0,-1e4,1e4,.01),tileOffsetY:_e("float",0,-1e4,1e4,.01),nonSquare:_e("bool",!0)}},tile_generator:{type:"tile_generator",label:"Tile Generator",category:"gen",inputs:[],outputs:[_t()],params:{scale:_e("float",6,1,64,1),shape:_e("select","square",void 0,void 0,void 0,["square","dot"]),radius:_e("float",.42,.05,.49,.01),variation:_e("float",.25,0,1,.01),seed:_e("int",1337,0,2147483647,1),tileOffsetX:_e("float",0,-1e4,1e4,.01),tileOffsetY:_e("float",0,-1e4,1e4,.01),nonSquare:_e("bool",!0)}},noise:{type:"noise",label:"Noise fBm v2",category:"gen",inputs:[],outputs:[_t()],params:{scale:_e("float",6,.25,64,.25),octaves:_e("float",4,1,8,1),seed:_e("int",1337,0,2147483647,1),tileOffsetX:_e("float",0,-1e4,1e4,.01),tileOffsetY:_e("float",0,-1e4,1e4,.01),nonSquare:_e("bool",!0)}},perlin:{type:"perlin",label:"Perlin Noise v2",category:"gen",inputs:[],outputs:[_t()],params:{scale:_e("float",32,1,64,1),disorder:_e("float",0,0,1,.01),disorderSpeed:_e("float",1,0,2,.01),seed:_e("int",1337,0,2147483647,1),tileOffsetX:_e("float",0,-1e4,1e4,.01),tileOffsetY:_e("float",0,-1e4,1e4,.01),nonSquare:_e("bool",!0)}},worley:{type:"worley",label:"Worley Noise v2",category:"gen",inputs:[],outputs:[{id:"out",type:"vec4",label:"F1/F2/Edge/ID"}],params:{scale:_e("float",5,1,20,.5),jitter:_e("float",1,0,1,.05),seed:_e("int",1337,0,2147483647,1),tileOffsetX:_e("float",0,-1e4,1e4,.01),tileOffsetY:_e("float",0,-1e4,1e4,.01),nonSquare:_e("bool",!0)}},voronoi:{type:"voronoi",label:"Voronoi",category:"gen",inputs:[],outputs:[{id:"out",type:"vec4",label:"F1/F2/Edge/ID"}],params:{scale:_e("float",5,1,64,.5),jitter:_e("float",1,0,1,.05),seed:_e("int",1337,0,2147483647,1),tileOffsetX:_e("float",0,-1e4,1e4,.01),tileOffsetY:_e("float",0,-1e4,1e4,.01),nonSquare:_e("bool",!0)}},bnw_spots2_v2:{type:"bnw_spots2_v2",label:"BnW Spots 2 (v2)",category:"noises",inputs:[],outputs:[_t()],params:{scale:_e("int",10,1,32,1),tileOffsetX:_e("float",0,-1e4,1e4,.01),tileOffsetY:_e("float",0,-1e4,1e4,.01),seed:_e("int",1337,0,2147483647,1),nonSquareExpansion:_e("bool",!0),grainAmount:_e("float",.22,0,1,.005),grainThreshold:_e("float",.86,0,1,.005),contrast:_e("float",1.08,.25,3,.01)}},shape:{type:"shape",label:"Shape SDF",category:"gen",inputs:[],outputs:[_t()],params:{type:_e("select","circle",void 0,void 0,void 0,["circle","square","ring","triangle","polygon","star"]),posX:_e("float",.5,0,1,.01),posY:_e("float",.5,0,1,.01),scale:_e("float",.5,.05,2,.01),rad:_e("float",.5,0,1,.01),blur:_e("float",.01,.001,.5,.001),thick:_e("float",.05,.001,.5,.001)}},split:{type:"split",label:"Split Vec4",category:"math",inputs:[{id:"in",type:"vec4",label:"In"}],outputs:[{id:"x",type:"float",label:"X"},{id:"y",type:"float",label:"Y"},{id:"z",type:"float",label:"Z"},{id:"w",type:"float",label:"W"},{id:"xyz",type:"vec3",label:"XYZ"}],params:{}},gradient:{type:"gradient",label:"Gradient",category:"gen",inputs:[],outputs:[_t()],params:{type:_e("select","linear",void 0,void 0,void 0,["linear","radial","angular"]),angle:_e("float",0,0,360,1)}},checker:{type:"checker",label:"Checker",category:"gen",inputs:[],outputs:[_t()],params:{scale:_e("float",8,1,32,1)}},panner:{type:"panner",label:"Panner",category:"filter",inputs:[ht("In")],outputs:[_t()],params:{speedX:_e("float",.1,-2,2,.01),speedY:_e("float",0,-2,2,.01)}},tile_sampler:{type:"tile_sampler",label:"Tile Sampler",category:"filter",inputs:[ht("In")],outputs:[_t()],params:{scale:_e("float",6,1,64,1),angle:_e("float",0,-180,180,1),tileOffsetX:_e("float",0,-1e4,1e4,.01),tileOffsetY:_e("float",0,-1e4,1e4,.01)}},add:{type:"add",label:"Add A+B",category:"math",inputs:[ht("A"),ht("B")],outputs:[_t()],params:{b:_e("float",0,-2,2,.01)}},subtract:{type:"subtract",label:"Subtract A-B",category:"math",inputs:[ht("A"),ht("B")],outputs:[_t()],params:{b:_e("float",0,-2,2,.01)}},multiply:{type:"multiply",label:"Multiply A×B",category:"math",inputs:[ht("A"),ht("B")],outputs:[_t()],params:{b:_e("float",1,-4,4,.01)}},divide:{type:"divide",label:"Divide A÷B",category:"math",inputs:[ht("A"),ht("B")],outputs:[_t()],params:{b:_e("float",2,.01,8,.01)}},power:{type:"power",label:"Power A^B",category:"math",inputs:[ht("Base"),ht("Exp")],outputs:[_t()],params:{exp:_e("float",2,.1,8,.1)}},oneminus:{type:"oneminus",label:"1 - x",category:"math",inputs:[ht("In")],outputs:[_t()],params:{}},abs:{type:"abs",label:"Abs |x|",category:"math",inputs:[ht("In")],outputs:[_t()],params:{}},negate:{type:"negate",label:"Negate -x",category:"math",inputs:[ht("In")],outputs:[_t()],params:{}},sqrt:{type:"sqrt",label:"Sqrt √x",category:"math",inputs:[ht("In")],outputs:[_t()],params:{}},sign:{type:"sign",label:"Sign",category:"math",inputs:[ht("In")],outputs:[_t()],params:{}},frac:{type:"frac",label:"Frac",category:"math",inputs:[ht("In")],outputs:[_t()],params:{}},floor:{type:"floor",label:"Floor",category:"math",inputs:[ht("In")],outputs:[_t()],params:{}},ceil:{type:"ceil",label:"Ceil",category:"math",inputs:[ht("In")],outputs:[_t()],params:{}},min2:{type:"min2",label:"Min A,B",category:"math",inputs:[ht("A"),ht("B")],outputs:[_t()],params:{b:_e("float",.5,-2,2,.01)}},max2:{type:"max2",label:"Max A,B",category:"math",inputs:[ht("A"),ht("B")],outputs:[_t()],params:{b:_e("float",.5,-2,2,.01)}},mod:{type:"mod",label:"Mod A%B",category:"math",inputs:[ht("A"),ht("B")],outputs:[_t()],params:{b:_e("float",.5,.01,4,.01)}},clamp01:{type:"clamp01",label:"Clamp 0-1",category:"math",inputs:[ht("In")],outputs:[_t()],params:{}},clamp:{type:"clamp",label:"Clamp lo..hi",category:"math",inputs:[ht("In")],outputs:[_t()],params:{lo:_e("float",0,-2,2,.01),hi:_e("float",1,-2,2,.01)}},remap:{type:"remap",label:"Remap",category:"math",inputs:[ht("In")],outputs:[_t()],params:{inLo:_e("float",0,-2,2,.01),inHi:_e("float",1,-2,2,.01),outLo:_e("float",0,-2,2,.01),outHi:_e("float",1,-2,2,.01)}},sin:{type:"sin",label:"Sin",category:"trig",inputs:[ht("In")],outputs:[_t()],params:{freq:_e("float",1,.1,20,.1),phase:_e("float",0,0,6.28,.05)}},cos:{type:"cos",label:"Cos",category:"trig",inputs:[ht("In")],outputs:[_t()],params:{freq:_e("float",1,.1,20,.1),phase:_e("float",0,0,6.28,.05)}},tan:{type:"tan",label:"Tan",category:"trig",inputs:[ht("In")],outputs:[_t()],params:{freq:_e("float",1,.1,10,.1)}},atan2node:{type:"atan2node",label:"Atan2 Y,X",category:"trig",inputs:[ht("Y"),ht("X")],outputs:[_t()],params:{}},lerp:{type:"lerp",label:"Lerp A,B,T",category:"interp",inputs:[ht("A"),ht("B"),ht("T")],outputs:[_t()],params:{t:_e("float",.5,0,1,.01)}},smoothstep:{type:"smoothstep",label:"Smoothstep",category:"interp",inputs:[ht("In")],outputs:[_t()],params:{lo:_e("float",0,-1,2,.01),hi:_e("float",1,-1,2,.01)}},step:{type:"step",label:"Step edge,x",category:"interp",inputs:[ht("Edge"),ht("X")],outputs:[_t()],params:{edge:_e("float",.5,-1,2,.01)}},ifgt:{type:"ifgt",label:"If A>B ? C:D",category:"interp",inputs:[ht("A"),ht("B"),ht("T"),ht("F")],outputs:[_t()],params:{b:_e("float",.5,-2,2,.01)}},blend:{type:"blend",label:"Blend",category:"filter",inputs:[ht("A"),ht("B")],outputs:[_t()],params:{mode:_e("select","mix",void 0,void 0,void 0,["mix","add","multiply","screen","overlay","difference","dodge","burn"]),opacity:_e("float",.5,0,1,.01)}},levels:{type:"levels",label:"Levels",category:"filter",inputs:[ht("In")],outputs:[_t()],params:{inMin:_e("float",0,0,1,.01),inMax:_e("float",1,0,1,.01),gamma:_e("float",1,.1,4,.05)}},histogram_scan:{type:"histogram_scan",label:"Histogram Scan",category:"filter",inputs:[ht("In")],outputs:[_t()],params:{position:_e("float",.5,0,1,.01),width:_e("float",.1,.001,.5,.005),contrast:_e("float",1,.1,8,.1)}},histogram_range:{type:"histogram_range",label:"Histogram Range",category:"filter",inputs:[ht("In")],outputs:[_t()],params:{inMin:_e("float",.15,0,1,.005),inMax:_e("float",.85,0,1,.005),outMin:_e("float",0,0,1,.005),outMax:_e("float",1,0,1,.005)}},curve:{type:"curve",label:"Curve",category:"filter",inputs:[ht("In")],outputs:[_t()],params:{lift:_e("float",0,-1,1,.01),gamma:_e("float",1,.1,4,.01),gain:_e("float",1,0,2,.01)}},warp:{type:"warp",label:"Domain Warp",category:"filter",inputs:[ht("In"),Nv("Warp")],outputs:[_t()],params:{strength:_e("float",.15,0,.5,.005)}},vector_warp:{type:"vector_warp",label:"Vector Warp Grayscale",category:"filter",inputs:[ht("In"),Nv("Vector")],outputs:[_t()],params:{intensity:_e("float",.15,0,1,.005),centered:_e("bool",!0),tile:_e("bool",!0)}},directional_warp:{type:"directional_warp",label:"Directional Warp",category:"filter",inputs:[ht("In"),ht("Warp")],outputs:[_t()],params:{amount:_e("float",.15,0,1,.005),angle:_e("float",0,-3.141592653589793,3.141592653589793,.01)}},disorder:{type:"disorder",label:"Disorder",category:"filter",inputs:[ht("In")],outputs:[_t()],params:{amount:_e("float",.08,0,1,.005),scale:_e("float",8,.25,64,.25),speed:_e("float",.5,0,8,.01),seed:_e("int",1337,0,2147483647,1)}},slope_blur:{type:"slope_blur",label:"Slope Blur",category:"filter",inputs:[ht("In"),ht("Slope")],outputs:[_t()],params:{intensity:_e("float",2,0,16,.1),samples:_e("float",4,1,8,1)}},non_uniform_blur:{type:"non_uniform_blur",label:"Non-Uniform Blur Grayscale",category:"filter",inputs:[ht("In"),ht("BlurMap")],outputs:[_t()],params:{radius:_e("float",2,0,12,.1),samples:_e("float",4,1,4,1)}},transform_2d:{type:"transform_2d",label:"Transformation 2D",category:"filter",inputs:[ht("In")],outputs:[_t()],params:{offsetX:_e("float",0,-2,2,.005),offsetY:_e("float",0,-2,2,.005),rotation:_e("float",0,-180,180,.5),scale:_e("float",1,.05,8,.01),tile:_e("bool",!0)}},safe_transform:{type:"safe_transform",label:"Safe Transform Grayscale",category:"filter",inputs:[ht("In")],outputs:[_t()],params:{offsetX:_e("float",0,-2,2,.005),offsetY:_e("float",0,-2,2,.005),scale:_e("float",1,.05,8,.01),tile:_e("bool",!1)}},flood_fill:{type:"flood_fill",label:"Flood Fill",category:"filter",inputs:[ht("In")],outputs:[_t()],params:{scale:_e("float",8,1,64,1),threshold:_e("float",.1,0,1,.01),seed:_e("int",1337,0,2147483647,1),tileOffsetX:_e("float",0,-1e4,1e4,.01),tileOffsetY:_e("float",0,-1e4,1e4,.01),nonSquare:_e("bool",!0)}},edge_detect:{type:"edge_detect",label:"Edge Detect",category:"filter",inputs:[ht("In")],outputs:[_t()],params:{radius:_e("float",1,.5,4,.1),strength:_e("float",1.2,.1,5,.1)}},blur:{type:"blur",label:"Blur",category:"filter",inputs:[ht("In")],outputs:[_t()],params:{amount:_e("float",.05,.001,.5,.001),center:_e("float",0,-1,1,.01)}},highpass_grayscale:{type:"highpass_grayscale",label:"Highpass Grayscale",category:"filter",inputs:[ht("In")],outputs:[_t()],params:{radius:_e("float",1,.5,8,.1),intensity:_e("float",1,.1,4,.05)}},height_to_normal:{type:"height_to_normal",label:"Height to Normal",category:"filter",inputs:[ht("Height")],outputs:[ep("Normal")],params:{strength:_e("float",2,.01,4,.02),radius:_e("float",1,.5,4,.1),flipY:_e("bool",!1)}},normal_combine:{type:"normal_combine",label:"Normal Combine",category:"filter",inputs:[Qh("Base"),Qh("Detail")],outputs:[ep("Normal")],params:{strength:_e("float",1,0,2,.01)}},normal_normalize:{type:"normal_normalize",label:"Normal Normalize",category:"filter",inputs:[Qh("Normal")],outputs:[ep("Normal")],params:{flipY:_e("bool",!1)}},atom_input:{type:"atom_input",label:"Atom Input",category:"util",inputs:[],outputs:[_t()],params:{}},atom_input_a:{type:"atom_input_a",label:"Atom In A",category:"util",inputs:[],outputs:[_t()],params:{}},atom_input_b:{type:"atom_input_b",label:"Atom In B",category:"util",inputs:[],outputs:[_t()],params:{}},atom_input_c:{type:"atom_input_c",label:"Atom In C",category:"util",inputs:[],outputs:[_t()],params:{}},atom_input_d:{type:"atom_input_d",label:"Atom In D",category:"util",inputs:[],outputs:[_t()],params:{}},atom_graph:{type:"atom_graph",label:"Atom Graph",category:"util",inputs:[ht("A"),ht("B"),ht("C"),ht("D")],outputs:[_t()],params:{}},remote:{type:"remote",label:"Remote",category:"util",inputs:[],outputs:[],params:{target:_e("select","",void 0,void 0,void 0,[]),key:_e("select","",void 0,void 0,void 0,[]),value:_e("float",.5,0,1,.01),label:_e("select","",void 0,void 0,void 0,[])}},buffer:{type:"buffer",label:"Buffer",category:"filter",inputs:[ht("In")],outputs:[{id:"out",type:"float",label:"Out"},{id:"lod",type:"float",label:"LOD"}],params:{}},output:{type:"output",label:"Output",category:"output",inputs:[{id:"baseColor",type:"vec3",label:"BaseColor"},{id:"roughness",type:"float",label:"Roughness"},{id:"normal",type:"vec3",label:"Normal"},{id:"height",type:"float",label:"Height"},{id:"metallic",type:"float",label:"Metallic"}],outputs:[],params:{}},output_baseColor:{type:"output_baseColor",label:"Output BaseColor",category:"output",inputs:[{id:"baseColor",type:"vec3",label:"BaseColor"}],outputs:[],params:{}},output_roughness:{type:"output_roughness",label:"Output Roughness",category:"output",inputs:[{id:"roughness",type:"float",label:"Roughness"}],outputs:[],params:{}},output_normal:{type:"output_normal",label:"Output Normal",category:"output",inputs:[{id:"normal",type:"vec3",label:"Normal"}],outputs:[],params:{}},output_height:{type:"output_height",label:"Output Height",category:"output",inputs:[{id:"height",type:"float",label:"Height"}],outputs:[],params:{}},output_metallic:{type:"output_metallic",label:"Output Metallic",category:"output",inputs:[{id:"metallic",type:"float",label:"Metallic"}],outputs:[],params:{}}},D2={defaultInputMaxConnections:1},N2=i=>{var e;return{type:i.type==="select"?"enum":i.type,default:i.default,ui:{min:i.min,max:i.max,step:i.step,dropdown:(e=i.options)==null?void 0:e.map(t=>({label:t,value:t}))}}},kv=(i,e,t)=>({...i,constraints:{maxConnections:e?t.defaultInputMaxConnections:Number.POSITIVE_INFINITY,allowedTypes:[i.type]}}),k2=(i,e)=>{const t={...D2};return{id:i.type,label:i.label,category:i.category,inputs:i.inputs.map(r=>kv(r,!0,t)),outputs:i.outputs.map(r=>kv(r,!1,t)),params:Object.fromEntries(Object.entries(i.params).map(([r,o])=>[r,N2(o)])),constraints:{singleConnectionInputs:!0}}},ui=Object.fromEntries(Object.entries(Mt).map(([i,e])=>[i,k2(e)]));ui.output&&(ui.output.inputs[0].constraints={maxConnections:1,allowedTypes:["float","vec3","vec4"]},ui.output.inputs[1].constraints={maxConnections:1,allowedTypes:["float"]},ui.output.inputs[2].constraints={maxConnections:1,allowedTypes:["float","vec3","vec4"]},ui.output.inputs[3].constraints={maxConnections:1,allowedTypes:["float"]},ui.output.inputs[4].constraints={maxConnections:1,allowedTypes:["float"]});ui.output_baseColor&&(ui.output_baseColor.inputs[0].constraints={maxConnections:1,allowedTypes:["float","vec3","vec4"]});ui.output_roughness&&(ui.output_roughness.inputs[0].constraints={maxConnections:1,allowedTypes:["float"]});ui.output_normal&&(ui.output_normal.inputs[0].constraints={maxConnections:1,allowedTypes:["float","vec3","vec4"]});ui.output_height&&(ui.output_height.inputs[0].constraints={maxConnections:1,allowedTypes:["float"]});ui.output_metallic&&(ui.output_metallic.inputs[0].constraints={maxConnections:1,allowedTypes:["float"]});const Uv=i=>ui[i],Ri={gen:{label:"GEN",color:"#1e3a5f"},noises:{label:"NOISES",color:"#155e75"},math:{label:"MATH",color:"#312e81"},trig:{label:"TRIG",color:"#4c1d95"},interp:{label:"INTERP",color:"#14532d"},filter:{label:"FILTER",color:"#713f12"},util:{label:"UTIL",color:"#0e4d6b"},output:{label:"OUT",color:"#7f1d1d"}},U2=(i,e)=>e!=="output"&&!i.startsWith("atom_input"),Mo="all";function F2({open:i,compatibleType:e,onSelect:t,onClose:r}){const[o,a]=N.useState(""),[c,f]=N.useState(0),[p,u]=N.useState(Mo),h=N.useMemo(()=>{const m=o.toLowerCase().trim();return Object.entries(Mt).filter(([M,T])=>{if(!U2(M,T.category)||m&&!T.label.toLowerCase().includes(m)&&!M.includes(m)&&!T.category.includes(m))return!1;if(!e)return!0;const x=T.inputs.some(L=>L.type===e),y=T.outputs.some(L=>L.type===e);return x||y}).map(([M,T])=>{let x=0;if(e){const y=T.inputs.some(k=>k.type===e),L=T.outputs.some(k=>k.type===e);x=y?2:L?1:0}return{type:M,def:T,score:x}}).sort((M,T)=>T.score!==M.score?T.score-M.score:M.def.category!==T.def.category?M.def.category.localeCompare(T.def.category):M.def.label.localeCompare(T.def.label))},[e,o]),_=N.useMemo(()=>{const m=new Map;return h.forEach(M=>m.set(M.def.category,(m.get(M.def.category)||0)+1)),Array.from(m.entries()).sort((M,T)=>{var L,k;const x=((L=Ri[M[0]])==null?void 0:L.label)||M[0],y=((k=Ri[T[0]])==null?void 0:k.label)||T[0];return x.localeCompare(y)})},[h]),g=N.useMemo(()=>p===Mo?h:h.filter(m=>m.def.category===p),[p,h]);return N.useEffect(()=>{i&&(a(""),f(0),u(Mo))},[i]),N.useEffect(()=>{p!==Mo&&(_.some(([m])=>m===p)||u(Mo))},[p,_]),N.useEffect(()=>{if(g.length===0){c!==0&&f(0);return}c>g.length-1&&f(g.length-1)},[c,g.length]),N.useEffect(()=>{if(!i)return;const m=M=>{if(M.key==="Escape")M.preventDefault(),r();else if(M.key==="ArrowDown")M.preventDefault(),f(T=>(T+1)%Math.max(g.length,1));else if(M.key==="ArrowUp")M.preventDefault(),f(T=>(T-1+Math.max(g.length,1))%Math.max(g.length,1));else if(M.key==="Enter"){M.preventDefault();const T=g[c];T&&t(T.type)}};return window.addEventListener("keydown",m,!0),()=>window.removeEventListener("keydown",m,!0)},[c,r,t,i,g]),i?E.jsx("div",{style:{position:"fixed",inset:0,background:"#00000066",zIndex:1250},onMouseDown:r,children:E.jsxs("div",{style:{width:560,maxHeight:560,margin:"88px auto 0",background:"#1b1d22",border:"1px solid #343a46",borderRadius:10,overflow:"hidden"},onMouseDown:m=>m.stopPropagation(),children:[E.jsxs("div",{style:{padding:10,borderBottom:"1px solid #2f343f"},children:[E.jsx("input",{autoFocus:!0,value:o,onChange:m=>a(m.target.value),placeholder:"Add node (name, type, category)...",style:{width:"100%",boxSizing:"border-box",background:"#16181d",border:"1px solid #353a45",color:"#d5dbea",borderRadius:6,padding:"8px 10px",fontSize:13,outline:"none"}}),E.jsxs("div",{style:{marginTop:8,display:"flex",alignItems:"center",justifyContent:"space-between",gap:8},children:[E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},children:[E.jsxs("button",{onClick:()=>{u(Mo),f(0)},style:{border:p===Mo?"1px solid #5f81bb":"1px solid #313744",background:p===Mo?"#33527f":"#21252d",color:"#d9e5ff",borderRadius:6,fontSize:10,padding:"4px 8px",cursor:"pointer"},children:["ALL (",h.length,")"]}),_.map(([m,M])=>{const T=Ri[m],x=p===m;return E.jsxs("button",{onClick:()=>{u(m),f(0)},style:{border:x?`1px solid ${(T==null?void 0:T.color)||"#5f81bb"}`:"1px solid #313744",background:x?"#2b3445":"#21252d",color:x?"#f1f6ff":"#aab7d4",borderRadius:6,fontSize:10,padding:"4px 8px",cursor:"pointer"},title:m,children:[((T==null?void 0:T.label)||m).toUpperCase()," (",M,")"]},m)})]}),e&&E.jsxs("div",{style:{fontSize:10,color:"#9fb1d8",letterSpacing:.3},children:["Compat: ",E.jsx("span",{style:{color:"#d7e5ff"},children:e})]})]})]}),E.jsxs("div",{style:{maxHeight:470,overflowY:"auto",padding:8},children:[g.map((m,M)=>{var T;return E.jsxs("button",{onClick:()=>t(m.type),onMouseEnter:()=>f(M),style:{width:"100%",textAlign:"left",border:M===c?"1px solid #5f81bb":"1px solid #313744",background:M===c?"#42649a":"#21252d",color:"#e8edf8",borderRadius:6,padding:"7px 10px",fontSize:12,marginBottom:4,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[E.jsxs("span",{style:{display:"flex",flexDirection:"column",gap:2},children:[E.jsx("span",{style:{color:"#e8edf8"},children:m.def.label}),E.jsxs("span",{style:{fontSize:10,color:"#95a4c7"},children:[m.type,m.score>0&&e?` | ${m.score===2?"input match":"output match"}`:""]})]}),E.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8},children:[E.jsxs("span",{style:{fontSize:10,color:"#9ca9c9"},children:["IN ",m.def.inputs.length," | OUT ",m.def.outputs.length]}),E.jsx("span",{style:{fontSize:10,opacity:.8},children:(((T=Ri[m.def.category])==null?void 0:T.label)||m.def.category).toUpperCase()})]})]},m.type)}),g.length===0&&E.jsx("div",{style:{padding:"16px 10px",color:"#8f9ab5",fontSize:12,textAlign:"center"},children:"No nodes match this filter."})]})]})}):null}function O2({x:i,y:e,items:t,onRun:r,onClose:o}){var u;const[a,c]=N.useState(0),f=N.useMemo(()=>t.filter(h=>h.enabled),[t]),p=(u=f[a])==null?void 0:u.op.id;return N.useEffect(()=>{c(0)},[t]),N.useEffect(()=>{const h=_=>{if(_.key==="Escape"){_.preventDefault(),o();return}if(_.key==="ArrowDown")_.preventDefault(),c(g=>(g+1)%Math.max(f.length,1));else if(_.key==="ArrowUp")_.preventDefault(),c(g=>(g-1+Math.max(f.length,1))%Math.max(f.length,1));else if(_.key==="Enter"){_.preventDefault();const g=f[a];g&&r(g.op.id)}};return window.addEventListener("keydown",h,!0),()=>window.removeEventListener("keydown",h,!0)},[f,a,o,r]),E.jsx("div",{style:{position:"fixed",left:i,top:e,width:260,maxHeight:340,overflowY:"auto",background:"#1b1d22f6",border:"1px solid #343a46",borderRadius:8,boxShadow:"0 14px 38px #000000aa",zIndex:1200,padding:6},onMouseDown:h=>h.stopPropagation(),onContextMenu:h=>h.preventDefault(),children:t.map(h=>E.jsxs("button",{onClick:()=>h.enabled&&r(h.op.id),disabled:!h.enabled,style:{width:"100%",textAlign:"left",border:h.enabled&&h.op.id===p?"1px solid #5f81bb":"1px solid #313744",background:h.enabled&&h.op.id===p?"#42649a":"#21252d",color:h.enabled?"#e8edf8":"#778099",borderRadius:4,padding:"5px 8px",fontSize:11,marginBottom:2,cursor:h.enabled?"pointer":"default",display:"flex",justifyContent:"space-between",alignItems:"center"},onMouseEnter:()=>{if(!h.enabled)return;const _=f.findIndex(g=>g.op.id===h.op.id);_>=0&&c(_)},children:[E.jsx("span",{children:h.op.label}),E.jsx("span",{style:{opacity:.65,fontSize:10},children:h.op.shortcut||h.op.category})]},h.op.id))})}const fd=["gen","noises","math","trig","interp","filter"],Fv=(i,e)=>e!=="output"&&!i.startsWith("atom_input"),Ji=100,tp=36,Ov="nt.node.usage.v1";function B2({x:i,y:e,graphX:t,graphY:r,onAddNode:o,onAddFrame:a,onClose:c}){var ie,K,ne;const[f,p]=N.useState(null),[u,h]=N.useState(-1),[_,g]=N.useState(-1),[m,M]=N.useState(""),[T,x]=N.useState({}),y=N.useRef(null),L=N.useRef(null),k=N.useMemo(()=>Math.max(Ji+20,Math.min(window.innerWidth-Ji-20,i)),[i]),I=N.useMemo(()=>Math.max(Ji+20,Math.min(window.innerHeight-Ji-20,e)),[e]);N.useEffect(()=>{try{const X=localStorage.getItem(Ov);X&&x(JSON.parse(X))}catch{}},[]);const $=N.useCallback((X,oe)=>{const F=T[X[0]]||0,Y=T[oe[0]]||0;return F!==Y?Y-F:X[1].label.localeCompare(oe[1].label)},[T]),w=N.useMemo(()=>{const X=new Map;return fd.forEach(oe=>X.set(oe,[])),Object.entries(Mt).forEach(([oe,F])=>{if(!Fv(oe,F.category))return;const Y=F.category;X.has(Y)&&X.get(Y).push([oe,F])}),X.forEach(oe=>oe.sort($)),X},[$]),R=m.trim().length>0,b=N.useMemo(()=>{if(!R)return[];const X=m.trim().toLowerCase();return Object.entries(Mt).filter(([oe,F])=>Fv(oe,F.category)&&(F.label.toLowerCase().includes(X)||F.category.includes(X)||oe.includes(X))).sort($)},[m,R,$]),C=N.useMemo(()=>R?b:f?w.get(f)||[]:[],[R,b,f,w]),B=C.length>0||R&&C.length===0,U=N.useCallback(X=>{const oe={...T,[X]:(T[X]||0)+1};x(oe);try{localStorage.setItem(Ov,JSON.stringify(oe))}catch{}o(X,t,r)},[T,o,t,r]);N.useEffect(()=>{const X=oe=>{if(oe.key==="Escape"){oe.preventDefault(),c();return}const F=parseInt(oe.key);if(F>=1&&F<=5&&!R){oe.preventDefault(),p(fd[F-1]),g(-1);return}};return window.addEventListener("keydown",X,!0),()=>window.removeEventListener("keydown",X,!0)},[c,R]),N.useEffect(()=>{g(-1)},[f,m]),N.useEffect(()=>{y.current&&y.current.focus()},[]);const j=2*Math.PI/fd.length,G=-Math.PI/2-j/2,J=X=>{const oe=G+X*j,F=oe+j,Y=tp+6,Ie=Ji,Re=Math.cos(oe),et=Math.sin(oe),ae=Math.cos(F),Ce=Math.sin(F),Te=j>Math.PI?1:0;return[`M ${Re*Y} ${et*Y}`,`L ${Re*Ie} ${et*Ie}`,`A ${Ie} ${Ie} 0 ${Te} 1 ${ae*Ie} ${Ce*Ie}`,`L ${ae*Y} ${Ce*Y}`,`A ${Y} ${Y} 0 ${Te} 0 ${Re*Y} ${et*Y}`,"Z"].join(" ")},se=X=>{const oe=G+(X+.5)*j,F=(tp+Ji)/2+4;return{x:Math.cos(oe)*F,y:Math.sin(oe)*F}};return E.jsxs("div",{ref:L,style:{position:"fixed",inset:0,zIndex:1300},onMouseDown:c,onContextMenu:X=>X.preventDefault(),children:[!B&&E.jsx("svg",{width:Ji*2+40,height:Ji*2+40,style:{position:"fixed",left:k-Ji-20,top:I-Ji-20,overflow:"visible",filter:"drop-shadow(0 8px 32px #00000099)"},onMouseDown:X=>X.stopPropagation(),children:E.jsxs("g",{transform:`translate(${Ji+20}, ${Ji+20})`,children:[fd.map((X,oe)=>{var Ce;const F=Ri[X],Y=(F==null?void 0:F.color)||"#888",Ie=u===oe,Re=f===X,et=se(oe),ae=((Ce=w.get(X))==null?void 0:Ce.length)||0;return E.jsxs("g",{children:[E.jsx("path",{d:J(oe),fill:Re?`${Y}2f`:Ie?`${Y}1d`:"#1f2228",stroke:Re?`${Y}94`:Ie?`${Y}60`:"#353b46",strokeWidth:Re?1.5:1,style:{cursor:"pointer",transition:"fill 0.1s, stroke 0.1s"},onMouseEnter:()=>h(oe),onMouseLeave:()=>h(Te=>Te===oe?-1:Te),onMouseDown:Te=>{Te.stopPropagation(),p(Je=>Je===X?null:X)}}),E.jsx("text",{x:et.x,y:et.y-5,textAnchor:"middle",dominantBaseline:"middle",fill:Re||Ie?Y:"#a0a8bc",fontSize:10,fontWeight:700,letterSpacing:.8,style:{pointerEvents:"none",fontFamily:"inherit"},children:(F==null?void 0:F.label)||X.toUpperCase()}),E.jsx("text",{x:et.x,y:et.y+9,textAnchor:"middle",dominantBaseline:"middle",fill:Re||Ie?`${Y}c4`:"#6d7488",fontSize:8,style:{pointerEvents:"none",fontFamily:"inherit"},children:ae}),E.jsx("text",{x:et.x,y:et.y+22,textAnchor:"middle",dominantBaseline:"middle",fill:"#7a8399",fontSize:8,fontWeight:600,style:{pointerEvents:"none",fontFamily:"inherit"},children:oe+1})]},X)}),E.jsx("circle",{cx:0,cy:0,r:tp,fill:"#1c2027",stroke:f?`${(ie=Ri[f])==null?void 0:ie.color}66`:"#353b46",strokeWidth:1.5}),E.jsx("text",{x:0,y:-3,textAnchor:"middle",dominantBaseline:"middle",fill:"#a5aec2",fontSize:9,fontWeight:600,letterSpacing:.5,style:{pointerEvents:"none",fontFamily:"inherit"},children:"ADD"}),E.jsx("text",{x:0,y:10,textAnchor:"middle",dominantBaseline:"middle",fill:"#7a8399",fontSize:7,style:{pointerEvents:"none",fontFamily:"inherit"},children:"RMB"})]})}),!B&&E.jsxs("div",{style:{position:"fixed",left:k-84,top:I+Ji+8,width:168},onMouseDown:X=>X.stopPropagation(),children:[E.jsx("input",{ref:y,value:m,onChange:X=>M(X.target.value),placeholder:"Type to search...",className:"pie-search"}),a&&E.jsx("button",{onMouseDown:X=>{X.stopPropagation(),a(t,r)},className:"pie-list-back",style:{marginTop:6,width:"100%"},children:"Add Frame"})]}),B&&E.jsxs("div",{className:"pie-list",style:{left:k-110,top:I-180},onMouseDown:X=>X.stopPropagation(),children:[E.jsxs("div",{className:"pie-list-header",children:[R?E.jsxs("span",{className:"pie-list-title",children:["Search: ",m]}):E.jsx("span",{className:"pie-list-title",style:{color:(K=Ri[f])==null?void 0:K.color},children:((ne=Ri[f])==null?void 0:ne.label)||f}),E.jsx("button",{className:"pie-list-back",onClick:()=>{p(null),M("")},children:"Back"})]}),E.jsx("div",{className:"pie-list-search-wrap",children:E.jsx("input",{ref:y,value:m,onChange:X=>M(X.target.value),placeholder:"Filter...",className:"pie-search",autoFocus:!0})}),E.jsxs("div",{className:"pie-list-items",children:[C.map(([X,oe],F)=>{const Y=Ri[oe.category];return E.jsxs("div",{className:`pie-node ${_===F?"pie-node-hl":""}`,onMouseEnter:()=>g(F),onMouseDown:Ie=>{Ie.stopPropagation(),U(X)},children:[E.jsx("span",{className:"pie-node-dot",style:{background:(Y==null?void 0:Y.color)||"#888"}}),E.jsx("span",{className:"pie-node-label",children:oe.label}),R&&E.jsx("span",{className:"pie-node-cat",style:{color:Y==null?void 0:Y.color},children:Y==null?void 0:Y.label})]},X)}),C.length===0&&E.jsx("div",{className:"pie-empty",children:"No matches"})]})]})]})}const rm=i=>i.replace(/[^a-zA-Z0-9_]/g,"_"),z2=(i,e)=>`u_n${rm(i)}_p${rm(e)}`,$2=(i,e)=>{const t=rm(i);return typeof e=="number"?`t_${t}_${e}`:`t_${t}`};class Bv{constructor(){this.uniforms={},this.textures=[]}setFloat(e,t){this.uniforms[e]={value:t}}setInt(e,t){this.uniforms[e]={value:Math.trunc(t)}}setBool(e,t){this.uniforms[e]={value:t}}setVec2(e,t){this.uniforms[e]={value:t}}setVec3(e,t){this.uniforms[e]={value:t}}setVec4(e,t){this.uniforms[e]={value:t}}bindTexture(e,t,r,o){this.textures.push({portName:$2(e,r),bindingIndex:r,texture:t,sampler:o})}getUniforms(){return this.uniforms}getTextures(){return this.textures}}const sl={baseColor:0,roughness:1,normal:2,height:3,metallic:4},Zx={baseColor:"output_baseColor",roughness:"output_roughness",normal:"output_normal",height:"output_height",metallic:"output_metallic"},Jx={output_baseColor:"baseColor",output_roughness:"roughness",output_normal:"normal",output_height:"height",output_metallic:"metallic"},V2={0:"baseColor",1:"roughness",2:"normal",3:"height",4:"metallic"},H2=[{id:"pbr_default",label:"PBR Default",targets:[{channel:"baseColor",fileSuffix:"basecolor",format:"png"},{channel:"roughness",fileSuffix:"roughness",format:"png"},{channel:"normal",fileSuffix:"normal",format:"png"},{channel:"height",fileSuffix:"height",format:"png"},{channel:"metallic",fileSuffix:"metallic",format:"png"}]}],Qx=i=>H2.find(e=>e.id===i),xn=i=>i==="output"||Object.prototype.hasOwnProperty.call(Jx,i),Ec=i=>Jx[i]??null,G2=(i,e)=>i.nodes.some(t=>t.type===Zx[e]),rl=(i,e)=>{const t=i.nodes.find(r=>r.type===Zx[e]);return t||(i.nodes.find(r=>r.type==="output")??null)},vl=i=>{const e={},t=new Map(i.nodes.map(a=>[a.id,a])),r={};for(const a of i.nodes){const c=Ec(a.type);c&&(r[c]=!0)}for(const a of i.edges){const c=t.get(a.toId);if(!c)continue;const f=Ec(c.type);f&&(e[f]=a)}const o=i.nodes.find(a=>a.type==="output");if(!o)return e;for(const a of i.edges){if(a.toId!==o.id)continue;const c=V2[a.toPort];c&&(r[c]||(e[c]=a))}return e},hd={fade1:{id:"fade1",signature:{args:[{name:"t",type:"f32"}],returns:"f32"},pure:!0,wgsl:"fn fade1(t: f32) -> f32 { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }"},fade2:{id:"fade2",signature:{args:[{name:"t",type:"vec2f"}],returns:"vec2f"},deps:["fade1"],pure:!0,wgsl:"fn fade2(t: vec2f) -> vec2f { return vec2f(fade1(t.x), fade1(t.y)); }"},hash_u32:{id:"hash_u32",signature:{args:[{name:"x0",type:"u32"}],returns:"u32"},pure:!0,wgsl:`
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
`}},W2=`
fn wmod(x: f32, y: f32) -> f32 { return x - y * floor(x / y); }
fn wmod2(x: vec2f, y: f32) -> vec2f { return x - y * floor(x / y); }
fn wmod2v(x: vec2f, y: vec2f) -> vec2f { return x - y * floor(x / y); }

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
  var i00 = i; var i10 = i + vec2f(1, 0); var i01 = i + vec2f(0, 1); var i11 = i + vec2f(1, 1);
  if (tile) { i00 = wmod2(i00, per); i10 = wmod2(i10, per); i01 = wmod2(i01, per); i11 = wmod2(i11, per); }
  return mix(mix(hash2(i00), hash2(i10), u.x), mix(hash2(i01), hash2(i11), u.x), u.y);
}

fn fbm(p_in: vec2f, oct: f32, per_in: f32, tileFlag: f32) -> f32 {
  var p = p_in; var per = per_in;
  var v: f32 = 0.0; var a: f32 = 0.5; var mx: f32 = 0.0;
  let tile = tileFlag > 0.5;
  for (var i: i32 = 0; i < 8; i++) {
    let m = select(0.0, 1.0, f32(i) + 0.5 <= oct);
    v += a * vnoise(p, per, tile) * m;
    mx += a * m;
    p *= 2.0; per *= 2.0; a *= 0.5;
  }
  return select(0.0, v / mx, mx > 0.0);
}

fn voro(p_in: vec2f, jt: f32, per: f32, tile: bool) -> vec4f {
  var n = floor(p_in); let f = fract(p_in);
  if (tile) { n = wmod2(n, per); }
  var f1: f32 = 8.0; var f2: f32 = 8.0; var id = vec2f(0.0);
  for (var j: i32 = -1; j <= 1; j++) {
    for (var i: i32 = -1; i <= 1; i++) {
      let g = vec2f(f32(i), f32(j));
      var neighbor = n + g;
      if (tile) { neighbor = wmod2(neighbor, per); }
      let o = hash22(neighbor);
      let r = g + o * jt - f;
      let d = dot(r, r);
      if (d < f1) { f2 = f1; f1 = d; id = o; } else if (d < f2) { f2 = d; }
    }
  }
  return vec4f(sqrt(f1), sqrt(f2), sqrt(f2) - sqrt(f1), id.x);
}

fn sdCircle(p: vec2f, r: f32) -> f32 { return length(p) - r; }
fn sdBox(p: vec2f, b: vec2f) -> f32 { let d = abs(p) - b; return length(max(d, vec2f(0.0))) + min(max(d.x, d.y), 0.0); }
fn sdEquilateralTriangle(p_in: vec2f, r: f32) -> f32 {
  let k = sqrt(3.0);
  var p = p_in;
  p.x = abs(p.x) - r;
  p.y = p.y + r / k;
  if (p.x + k * p.y > 0.0) { p = vec2f(p.x - k * p.y, -k * p.x - p.y) / 2.0; }
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
`,e_=Date.now();class vr{constructor(e){this.bindings=new Bv,this.uniformBindings={},this.uniformDescriptors=new Map,this.decls=new Set,this.funcs=new Map,this.funcDefs=[],this.warnings=new Set,this.activeOutputInputPort=0,this.backend="glsl",this.uniformIndexMap=new Map,this.nextUniformIndex=0,this.funcBodies=new Map,this.funcExprs=new Map,this.atomCse=new Map,this.tempCounterByFunc=new Map,this.atomInputExprStack=[],this.graph=e,this.nodes=new Map(e.nodes.map(t=>[t.id,t])),this.edgeIndex=new Map,e.edges.forEach(t=>{this.edgeIndex.set(`${t.toId}:${t.toPort}`,t)})}compile(e){this.backend=(e==null?void 0:e.backend)||"glsl",this.bindings=new Bv,this.uniformBindings={},this.uniformDescriptors.clear(),this.decls.clear(),this.funcs.clear(),this.funcDefs=[],this.warnings.clear(),this.uniformIndexMap.clear(),this.nextUniformIndex=0,this.funcBodies.clear(),this.funcExprs.clear(),this.atomCse.clear(),this.tempCounterByFunc.clear(),this.activeOutputInputPort=sl[(e==null?void 0:e.outputChannel)||"baseColor"]??0;const t=(e==null?void 0:e.readable)??!0;this.registerSystemUniforms();let r=null;const o=e==null?void 0:e.nodeId,a=e==null?void 0:e.nodeOutputPort;if(o){if(!this.nodes.has(o))return this.defaultShader();r=this.genFunction(o,a??0)}else{const c=(e==null?void 0:e.outputChannel)||"baseColor",p=vl(this.graph)[c];if(p)r=this.genFunction(p.fromId,p.fromPort);else if(!G2(this.graph,c)){const u=Array.from(this.nodes.values()).find(h=>h.type==="output");u&&(r=this.getOutputExpression(u.id,c))}r||(r=this.defaultOutputExpression(c))}return this.backend==="wgsl"?this.assembleWgsl(r,t):this.assembleGlsl(r,t)}assembleGlsl(e,t){const r=this.resolveAtomOrder(e.atoms??new Set),o="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",a=`
      precision highp float;
      varying vec2 vUv;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_preview_offset;
      uniform float u_preview_zoom;
      uniform float u_preview_tile;
      ${Array.from(this.decls).join(`
`)}

      ${j2}

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
    `,c=t?this.toReadableSource(a):this.toRawSource(a),f=this.hashString(c);return{backend:"glsl",source:c,warnings:Array.from(this.warnings),hash:f,atomsUsed:r,uniforms:Array.from(this.uniformDescriptors.values()),vertex:o,fragment:c,uniformBindings:this.uniformBindings}}glslOutputAssign(e){return e.type==="float"?`float v = ${e.code}; gl_FragColor = vec4(vec3(v), 1.0);`:e.type==="vec2"?`vec2 v = ${e.code}; gl_FragColor = vec4(v, 0.0, 1.0);`:e.type==="vec3"?`vec3 v = ${e.code}; gl_FragColor = vec4(v, 1.0);`:e.type==="vec4"?`vec4 v = ${e.code}; gl_FragColor = v;`:`gl_FragColor = ${e.code};`}assembleWgsl(e,t){const r=this.buildUniformLayout(),o=e.atoms??new Set,a=this.resolveAtomOrder(o),c=this.emitAtomPrelude(o),f=`
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

${W2}

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
`,p=t?this.toReadableSource(f):this.toRawSource(f),u=this.hashString(p),h=this.rebuildGlslFromState(e,t);return{backend:"wgsl",source:h.source,warnings:Array.from(this.warnings),hash:u,atomsUsed:a,uniforms:Array.from(this.uniformDescriptors.values()),vertex:h.vertex,fragment:h.fragment,uniformBindings:this.uniformBindings,wgsl:p,uniformLayout:r}}rebuildGlslFromState(e,t){const r="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",o="precision highp float;varying vec2 vUv;void main(){gl_FragColor=vec4(0.,0.,0.,1.);}";return{source:o,vertex:r,fragment:o}}wgslOutputReturn(e){return e.type==="float"?`let v = ${e.code}; return vec4f(vec3f(v), 1.0);`:e.type==="vec2"?`let v = ${e.code}; return vec4f(v, 0.0, 1.0);`:e.type==="vec3"?`let v = ${e.code}; return vec4f(v, 1.0);`:e.type==="vec4"?`let v = ${e.code}; return v;`:`return ${e.code};`}wgslOutputColor(e){return e.type==="float"?`let v = ${e.code}; let col = vec4f(vec3f(v), 1.0);`:e.type==="vec2"?`let v = ${e.code}; let col = vec4f(v, 0.0, 1.0);`:e.type==="vec3"?`let v = ${e.code}; let col = vec4f(v, 1.0);`:e.type==="vec4"?`let v = ${e.code}; let col = v;`:`let col = ${e.code};`}buildUniformLayout(){const e=[];for(const[t,r]of this.uniformIndexMap.entries()){const o=this.uniformDescriptors.get(t),a=(o==null?void 0:o.type)||"float",c=a==="vec4"?4:a==="vec3"?3:a==="vec2"?2:1;e.push({name:t,type:a,index:r,size:c})}return e.sort((t,r)=>t.index-r.index)}sysIdx(e){return this.uniformIndexMap.get(e)??0}registerSystemUniforms(){const e=[["u_time","float",0],["u_resolution","vec2",[1,1]],["u_preview_offset","vec2",[0,0]],["u_preview_zoom","float",1],["u_preview_tile","float",0]];for(const[t,r,o]of e)this.uniformDescriptors.set(t,{name:t,type:r,nodeId:"system",key:t,defaultValue:o}),r==="vec2"?(this.bindings.setVec2(t,o),this.uniformIndexMap.set(t,this.nextUniformIndex),this.nextUniformIndex+=2):(this.bindings.setFloat(t,typeof o=="number"?o:0),this.uniformIndexMap.set(t,this.nextUniformIndex),this.nextUniformIndex+=1);this.uniformBindings=this.bindings.getUniforms()}defaultOutputExpression(e){const t=this.backend==="wgsl"?"vec3f":"vec3";return e==="baseColor"?{code:`${t}(0.0)`,type:"vec3"}:e==="normal"?{code:`${t}(0.5, 0.5, 1.0)`,type:"vec3"}:{code:"0.0",type:"float"}}getOutputExpression(e,t){const r=sl[t]??0,o=this.defaultOutputExpression(t);return this.getSource(e,r,"uv",o.code,o.type)}defaultShader(){if(this.backend==="wgsl"){const t=X2;return{backend:"wgsl",source:"",warnings:[],hash:this.hashString(t),atomsUsed:[],uniforms:[],vertex:"",fragment:"",uniformBindings:{},wgsl:t,uniformLayout:[]}}const e="precision highp float;varying vec2 vUv;void main(){gl_FragColor=vec4(0.,0.,0.,1.);}";return{backend:"glsl",source:e,warnings:[],hash:this.hashString(e),atomsUsed:[],uniforms:[],vertex:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragment:e,uniformBindings:{}}}addUniform(e,t,r){const o=z2(e,t),a=this.inferUniformType(e,t,r);if(!this.uniformDescriptors.has(o)){Array.isArray(r)?r.length===2?this.bindings.setVec2(o,[r[0],r[1]]):r.length===3?this.bindings.setVec3(o,[r[0],r[1],r[2]]):r.length>=4?this.bindings.setVec4(o,[r[0],r[1],r[2],r[3]]):this.bindings.setFloat(o,0):typeof r=="boolean"?this.bindings.setBool(o,r):a==="int"?this.bindings.setInt(o,Number(r)):this.bindings.setFloat(o,Number(r)),this.uniformBindings=this.bindings.getUniforms(),this.uniformDescriptors.set(o,{name:o,type:a,nodeId:e,key:t,defaultValue:r});const c=a==="vec4"?4:a==="vec3"?3:a==="vec2"?2:1;this.uniformIndexMap.set(o,this.nextUniformIndex),this.nextUniformIndex+=c,this.backend==="glsl"&&this.decls.add(`uniform ${this.toGLSLType(a)} ${o};`)}if(this.backend==="wgsl"){const c=this.uniformIndexMap.get(o);return a==="vec2"?`uv2(${c}u)`:`uf(${c}u)`}return o}sysRef(e){return this.backend==="wgsl"?`uf(${this.uniformIndexMap.get(e)??0}u)`:e}sysRef2(e){return this.backend==="wgsl"?`uv2(${this.uniformIndexMap.get(e)??0}u)`:e}cloneExpr(e){return{code:e.code,type:e.type,atoms:e.atoms?new Set(e.atoms):void 0}}mergeAtoms(e,t){t&&t.forEach(r=>e.add(r))}mergeExprAtoms(e,t){t!=null&&t.atoms&&t.atoms.forEach(r=>e.add(r))}toWgslDataType(e){return e==="float"?"f32":e==="vec2"?"vec2f":e==="vec3"?"vec3f":e==="vec4"?"vec4f":"f32"}callAtom(e,t,r,o){const a=hd[t],c=new Set;o.forEach(T=>this.mergeExprAtoms(c,T)),c.add(t);const f=`${t}(${o.map(T=>T.code).join(", ")})`;if(!a)return this.warnings.add(`Missing atom definition: ${t}`),{code:f,type:r,atoms:c};if(!this.W||!a.pure)return{code:f,type:r,atoms:c};const p=this.atomCse.get(e)||new Map;this.atomCse.set(e,p);const u=`${t}|${r}|${o.map(T=>T.code).join("|")}`,h=p.get(u);if(h){const T=new Set;return this.mergeExprAtoms(T,h),this.mergeAtoms(T,c),{code:h.code,type:h.type,atoms:T}}const _=this.tempCounterByFunc.get(e)??0,g=`t_${_}`;this.tempCounterByFunc.set(e,_+1);const m=this.funcBodies.get(e)||[];this.funcBodies.set(e,m),m.push(`let ${g}: ${this.toWgslDataType(r)} = ${f};`);const M={code:g,type:r,atoms:c};return p.set(u,M),M}resolveAtomOrder(e){if(e.size===0)return[];const t=new Set,r=[...e];for(;r.length;){const p=r.pop();if(t.has(p))continue;t.add(p);const u=hd[p];if(!u){this.warnings.add(`Unknown atom referenced: ${p}`);continue}(u.deps??[]).forEach(h=>{t.has(h)||r.push(h)})}const o=new Set,a=new Set,c=[],f=p=>{if(o.has(p))return;if(a.has(p)){this.warnings.add(`Atom dependency cycle detected at "${p}"`);return}const u=hd[p];if(!u){this.warnings.add(`Missing atom during prelude emit: ${p}`);return}a.add(p),[...u.deps??[]].sort().forEach(h=>{t.has(h)&&f(h)}),a.delete(p),o.add(p),c.push(p)};return[...t].sort().forEach(p=>f(p)),c}emitAtomPrelude(e){const t=this.resolveAtomOrder(e);return t.length===0?"":t.map(r=>hd[r].wgsl.trim()).join(`

`)}getSource(e,t,r="uv",o="0.0",a="float",c){const f=this.edgeIndex.get(`${e}:${t}`);if(f){const p=this.genFunction(f.fromId,f.fromPort);return{code:`${p.code.split("(uv)").join(`(${r})`)}`,type:p.type,atoms:p.atoms?new Set(p.atoms):void 0}}return{code:o,type:a,atoms:c?new Set(c):void 0}}asFloat(e,t,r){return e.type==="float"?e.code:(this.warnings.add(`Implicit cast at node ${t}: ${e.type} -> float (${r})`),e.type==="vec2"||e.type==="vec3"||e.type==="vec4"?`(${e.code}).x`:`(${e.code})`)}asVec4(e){return e.type==="vec4"?e.code:e.type==="vec3"?this.v4(`${e.code}.x, ${e.code}.y, ${e.code}.z, 1.0`):e.type==="vec2"?this.v4(`${e.code}.x, ${e.code}.y, 0.0, 1.0`):this.v4(`${e.code}, ${e.code}, ${e.code}, 1.0`)}sanitizeAtomSubgraph(e){if(!e||!Array.isArray(e.nodes)||!Array.isArray(e.edges))return null;const t=e.nodes.filter(a=>a&&typeof a.id=="string"&&typeof a.type=="string"&&typeof a.x=="number"&&typeof a.y=="number").map(a=>({id:a.id,type:a.type,x:a.x,y:a.y,params:a.params&&typeof a.params=="object"?a.params:{}}));if(t.length===0)return null;const r=new Set(t.map(a=>a.id)),o=e.edges.filter(a=>a&&typeof a.id=="string"&&typeof a.fromId=="string"&&typeof a.toId=="string"&&typeof a.fromPort=="number"&&typeof a.toPort=="number"&&r.has(a.fromId)&&r.has(a.toId));return{schemaVersion:typeof e.schemaVersion=="number"?e.schemaVersion:1,nodes:t,edges:o,resolution:typeof e.resolution=="number"?e.resolution:void 0}}atomInputPortIndex(e){return e==="atom_input"||e==="atom_input_a"?0:e==="atom_input_b"?1:e==="atom_input_c"?2:e==="atom_input_d"?3:null}compileAtomSubgraph(e,t){var x;const r=t[0]?this.cloneExpr(t[0]):{code:"0.0",type:"float"},o=this.sanitizeAtomSubgraph((x=e.params)==null?void 0:x.subgraph);if(!o)return this.cloneExpr(r);const a=`atom_${e.id.replace(/[^a-zA-Z0-9_]/g,"_")}`,c=new Map,f=o.nodes.map(y=>{const L=`${a}_${y.id.replace(/[^a-zA-Z0-9_]/g,"_")}`;return c.set(y.id,L),{...y,id:L,params:{...y.params||{}}}}),p=o.edges.filter(y=>c.has(y.fromId)&&c.has(y.toId)).map(y=>({...y,id:`${a}_e_${y.id.replace(/[^a-zA-Z0-9_]/g,"_")}`,fromId:c.get(y.fromId),toId:c.get(y.toId)})),_=vl({nodes:f,edges:p}).height;if(!_)return this.warnings.add(`Atom graph ${e.id} has no connected Height output; using passthrough.`),this.cloneExpr(r);const g=new Map(f.map(y=>[y.id,y])),m=new Map;p.forEach(y=>{m.set(`${y.toId}:${y.toPort}`,y)});const M=this.nodes,T=this.edgeIndex;this.nodes=g,this.edgeIndex=m,this.atomInputExprStack.push(t.map(y=>this.cloneExpr(y)));try{return this.genFunction(_.fromId,_.fromPort)}catch(y){return this.warnings.add(`Atom graph ${e.id} compile failed: ${(y==null?void 0:y.message)||"unknown error"}`),this.cloneExpr(r)}finally{this.atomInputExprStack.pop(),this.nodes=M,this.edgeIndex=T}}get W(){return this.backend==="wgsl"}v2(e){return this.W?`vec2f(${e})`:`vec2(${e})`}v3(e){return this.W?`vec3f(${e})`:`vec3(${e})`}v4(e){return this.W?`vec4f(${e})`:`vec4(${e})`}modF(e,t){return this.W?`wmod(${e}, ${t})`:`mod(${e}, ${t})`}modV2(e,t){return this.W?`wmod2(${e}, ${t})`:`mod(${e}, ${t})`}atan2F(e,t){return this.W?`atan2(${e}, ${t})`:`atan(${e}, ${t})`}sel(e,t,r){return this.W?`select(${r}, ${t}, ${e})`:`((${e}) ? (${t}) : (${r}))`}tF(){return this.W?"f32":"float"}tI(){return this.W?"i32":"int"}tV2(){return this.W?"vec2f":"vec2"}genFunction(e,t=0){var L,k,I,$;const r=this.nodes.get(e);if(!r)return{code:"0.0",type:"float"};const o=Mt[r.type],a=((L=o==null?void 0:o.outputs[t])==null?void 0:L.type)||"float",c=`${e}:${t}`,f=this.funcExprs.get(c);if(f)return this.cloneExpr(f);if(this.funcs.has(c))return{code:`${this.funcs.get(c)}(uv)`,type:a,atoms:void 0};const p=`fn_${e.replace(/[^a-zA-Z0-9]/g,"_")}_${t}`;if(r.type==="split"){const w=this.getSource(e,0,"uv",this.W?"vec4f(0.0)":"vec4(0.0)","vec4"),R=this.asVec4(w);if(t===4)return{code:`(${R}).xyz`,type:"vec3",atoms:w.atoms?new Set(w.atoms):void 0};const b=["x","y","z","w"][t]??"x";return{code:`(${R}).${b}`,type:"float",atoms:w.atoms?new Set(w.atoms):void 0}}this.funcs.set(c,p),this.funcBodies.set(c,[]),this.atomCse.set(c,new Map),this.tempCounterByFunc.set(c,0);const u=r.params,h=(w,R)=>this.addUniform(e,w,R),_=()=>this.sysRef("u_time"),g=new Set,m=(w,R="0.0",b="uv")=>{const C=typeof R=="string"?{code:R,type:"float"}:R,B=this.getSource(e,w,b,C.code,C.type,C.atoms);return this.mergeExprAtoms(g,B),B.type==="vec2"?(this.warnings.add(`Implicit cast at node ${r.type}: vec2 -> float (${e}, input ${w})`),`${B.code}.x`):B.type==="vec4"?(this.warnings.add(`Implicit cast at node ${r.type}: vec4 -> float (${e}, input ${w})`),`${B.code}.x`):B.code},M=(w,R="vec2(0.0)",b="uv")=>{const C=this.W?"vec2f(0.0)":R,B=this.getSource(e,w,b,C);return this.mergeExprAtoms(g,B),B.type==="float"?(this.warnings.add(`Implicit cast at node ${r.type}: float -> vec2 (${e}, input ${w})`),this.v2(B.code)):B.code},T=(w,R="vec3(0.0)",b="uv")=>{const C=this.W?"vec3f(0.0)":R,B=this.getSource(e,w,b,C,"vec3");return this.mergeExprAtoms(g,B),B.type==="float"?(this.warnings.add(`Implicit cast at node ${r.type}: float -> vec3 (${e}, input ${w})`),this.v3(`${B.code}, ${B.code}, ${B.code}`)):B.type==="vec2"?(this.warnings.add(`Implicit cast at node ${r.type}: vec2 -> vec3 (${e}, input ${w})`),this.v3(`${B.code}.x, ${B.code}.y, 0.0`)):B.type==="vec4"?(this.warnings.add(`Implicit cast at node ${r.type}: vec4 -> vec3 (${e}, input ${w})`),`(${B.code}).xyz`):B.code};let x="return 0.0;";switch(r.type){case"constant":x=`return ${h("val",u.value)};`;break;case"time":x=`return fract(${_()} * ${h("spd",u.speed)});`;break;case"uv_x":x="return uv.x;";break;case"uv_y":x="return uv.y;";break;case"uv":x="return uv;";break;case"uniform_color":{const w=h("r",u.r??.5),R=h("g",u.g??.5),b=h("b",u.b??.5);x=`return ${this.v3(`${w}, ${R}, ${b}`)};`;break}case"gaussian_noise":{const w=h("scale",u.scale??12),R=h("mean",u.mean??.5),b=h("stdDev",u.stdDev??.16),C=h("seed",u.seed??1337),B=h("tileOffsetX",u.tileOffsetX??0),U=h("tileOffsetY",u.tileOffsetY??0),j=h("nonSquare",u.nonSquare??!0?1:0),G=this.W?`(${C})`:`float(${C})`,J=this.sysRef2("u_resolution"),se=`${J}.x / max(${J}.y, 1.0)`,K=`(${this.sel(`${j} > 0.5`,this.v2(`uv.x * (${se}), uv.y`),"uv")} * max(${w}, 1.0) + ${this.v2(`${B}, ${U}`)})`,ne=`max(hash2(floor(${K}) + ${this.v2(`${G} * 0.137, ${G} * 0.911`)}), 1e-5)`,X=`hash2(floor(${K}) + ${this.v2(`${G} * 0.271 + 19.0, ${G} * 0.613 + 73.0`)})`,oe=`(sqrt(-2.0 * log(${ne})) * cos(6.28318530718 * ${X}))`;x=`return clamp(${R} + ${oe} * ${b}, 0.0, 1.0);`;break}case"tile_generator":{const w=h("scale",u.scale??6),R=h("radius",u.radius??.42),b=h("variation",u.variation??.25),C=h("seed",u.seed??1337),B=h("tileOffsetX",u.tileOffsetX??0),U=h("tileOffsetY",u.tileOffsetY??0),j=h("nonSquare",u.nonSquare??!0?1:0),G=this.W?`(${C})`:`float(${C})`,J=this.sysRef2("u_resolution"),se=`${J}.x / max(${J}.y, 1.0)`,K=`(${this.sel(`${j} > 0.5`,this.v2(`uv.x * (${se}), uv.y`),"uv")} * max(${w}, 1.0) + ${this.v2(`${B}, ${U}`)})`,ne=`(fract(${K}) - 0.5)`,oe=`hash2(${`floor(${K})`} + ${this.v2(`${G} * 0.151, ${G} * 0.337`)})`,F=`(1.0 - smoothstep(${R}, ${R} + 0.02, max(abs(${ne}.x), abs(${ne}.y))))`,Y=`(1.0 - smoothstep(${R}, ${R} + 0.02, length(${ne})))`;x=`return clamp(${u.shape==="dot"?Y:F} * mix(1.0, ${oe}, clamp(${b}, 0.0, 1.0)), 0.0, 1.0);`;break}case"noise":{const w=h("scale",u.scale??6),R=h("octaves",u.octaves??4),b=h("seed",u.seed??1337),C=h("tileOffsetX",u.tileOffsetX??u.seed??0),B=h("tileOffsetY",u.tileOffsetY??u.seed??0),U=h("nonSquare",u.nonSquare??!0?1:0),j=this.W?`(${b})`:`float(${b})`,G=this.sysRef2("u_resolution"),J=`${G}.x / max(${G}.y, 1.0)`;x=`return fbm(${`(${this.sel(`${U} > 0.5`,this.v2(`uv.x * (${J}), uv.y`),"uv")} * max(${w}, 0.00001) + ${this.v2(`${C}, ${B}`)} + ${this.v2(`${j} * 0.173, ${j} * 0.619`)})`}, ${R}, max(${w}, 0.00001), 1.0);`;break}case"perlin":{const w=h("scale",u.scale??32),R=h("disorder",u.disorder??0),b=h("disorderSpeed",u.disorderSpeed??1),C=h("seed",u.seed??1337),B=h("tileOffsetX",u.tileOffsetX??0),U=h("tileOffsetY",u.tileOffsetY??0),j=h("nonSquare",u.nonSquare??!0?1:0),G=this.sysRef2("u_resolution"),J=`${G}.x / max(${G}.y, 1.0)`,se=this.sel(`${j} > 0.5`,this.v2(`uv.x * (${J}), uv.y`),"uv"),ie=`max(floor(${w} + 0.5), 1.0)`,K=`(${se} * ${ie} + ${this.v2(`${B}, ${U}`)})`,ne=this.W?`u32(max(${C}, 0.0))`:`float(${C})`,X=`(${this.sysRef("u_time")} * ${b})`;let oe=K;if(this.W){const Ie=this.callAtom(c,"perlin2i_raw","float",[{code:`${K} + ${this.v2("17.0, 53.0")} + ${this.v2(`${X}*0.73, -${X}*0.41`)}`,type:"vec2"},{code:`(${ne}) ^ 0x68bc21ebu`,type:"float"}]),Re=this.callAtom(c,"perlin2i_raw","float",[{code:`${K} + ${this.v2("113.0, 7.0")} + ${this.v2(`-${X}*0.29, ${X}*0.87`)}`,type:"vec2"},{code:`(${ne}) ^ 0x02e5be93u`,type:"float"}]);this.mergeExprAtoms(g,Ie),this.mergeExprAtoms(g,Re),oe=`(${K} + ${R} * ${this.v2(`${Ie.code}, ${Re.code}`)})`}else{const Ie=this.callAtom(c,"perlin2i_raw","float",[{code:`${K} + vec2(17.0,53.0) + vec2(${X}*0.73, -${X}*0.41)`,type:"vec2"},{code:`(${ne}) + 101.0`,type:"float"}]),Re=this.callAtom(c,"perlin2i_raw","float",[{code:`${K} + vec2(113.0,7.0) + vec2(-${X}*0.29, ${X}*0.87)`,type:"vec2"},{code:`(${ne}) + 211.0`,type:"float"}]);this.mergeExprAtoms(g,Ie),this.mergeExprAtoms(g,Re),oe=`(${K} + ${R} * vec2(${Ie.code}, ${Re.code}))`}let F;this.W?(F=this.callAtom(c,"perlin2i_tiled","float",[{code:oe,type:"vec2"},{code:ie,type:"float"},{code:ne,type:"float"}]),this.mergeExprAtoms(g,F)):F={code:`perlin2i_tiled(${oe}, ${ie}, ${ne})`,type:"float"};const Y=this.sel(`${w} < 1.5`,"0.5",F.code);if((k=r.params)!=null&&k.subgraph){const Ie=this.compileAtomSubgraph(r,[{code:Y,type:"float"}]);this.mergeExprAtoms(g,Ie),x=`return ${this.asFloat(Ie,r.type,e)};`}else x=`return ${Y};`;break}case"disorder":{const w=h("amount",u.amount??.08),R=h("scale",u.scale??8),b=h("speed",u.speed??.5),C=h("seed",u.seed??1337),B=this.W?`u32(max(${C}, 0.0))`:`float(${C})`,U=`(${this.sysRef("u_time")} * ${b})`,j=`(uv * max(${R}, 0.00001))`;let G,J;this.W?(G=this.callAtom(c,"perlin2i_raw","float",[{code:`${j} + vec2f(17.0,53.0) + vec2f(${U}*0.73, -${U}*0.41)`,type:"vec2"},{code:`(${B}) ^ 0x68bc21ebu`,type:"float"}]),J=this.callAtom(c,"perlin2i_raw","float",[{code:`${j} + vec2f(113.0,7.0) + vec2f(-${U}*0.29, ${U}*0.87)`,type:"vec2"},{code:`(${B}) ^ 0x02e5be93u`,type:"float"}])):(G=this.callAtom(c,"perlin2i_raw","float",[{code:`${j} + vec2(17.0,53.0) + vec2(${U}*0.73, -${U}*0.41)`,type:"vec2"},{code:`(${B}) + 101.0`,type:"float"}]),J=this.callAtom(c,"perlin2i_raw","float",[{code:`${j} + vec2(113.0,7.0) + vec2(-${U}*0.29, ${U}*0.87)`,type:"vec2"},{code:`(${B}) + 211.0`,type:"float"}])),this.mergeExprAtoms(g,G),this.mergeExprAtoms(g,J);const se=`(uv + ${w} * ${this.v2(`${G.code}, ${J.code}`)})`,ie=this.callAtom(c,"perlin2i","float",[{code:j,type:"vec2"},{code:B,type:"float"}]);this.mergeExprAtoms(g,ie),x=`return ${m(0,ie,se)};`;break}case"voronoi":{const w=h("scale",u.scale??5),R=h("jitter",u.jitter??1),b=h("seed",u.seed??1337),C=h("tileOffsetX",u.tileOffsetX??u.seed??0),B=h("tileOffsetY",u.tileOffsetY??u.seed??0),U=h("nonSquare",u.nonSquare??!0?1:0),j=this.W?`(${b})`:`float(${b})`,G=this.sysRef2("u_resolution"),J=`${G}.x / max(${G}.y, 1.0)`,ie=`(${this.sel(`${U} > 0.5`,this.v2(`uv.x * (${J}), uv.y`),"uv")} * max(${w}, 0.00001) + ${this.v2(`${C}, ${B}`)} + ${this.v2(`${j} * 0.137, ${j} * 0.911`)})`,K=`max(${w}, 0.00001)`,ne=`voro(${ie}, ${R}, ${K}, true)`,X=this.v4("cells,V.y,V.z,V.w");this.W?x=`{ var V=${ne}; let f1=V.x; let cells=1.0-smoothstep(0.0,0.5,f1); return ${X}; }`:x=`{ vec4 V=${ne}; float f1=V.x; float cells=1.0-smoothstep(0.0,0.5,f1); return ${X}; }`;break}case"worley":{const w=h("scale",u.scale??5),R=h("jitter",u.jitter??1),b=h("seed",u.seed??1337),C=h("tileOffsetX",u.tileOffsetX??u.seed??0),B=h("tileOffsetY",u.tileOffsetY??u.seed??0),U=h("nonSquare",u.nonSquare??!0?1:0),j=this.W?`(${b})`:`float(${b})`,G=this.sysRef2("u_resolution"),J=`${G}.x / max(${G}.y, 1.0)`;x=`return voro(${`(${this.sel(`${U} > 0.5`,this.v2(`uv.x * (${J}), uv.y`),"uv")} * max(${w}, 0.00001) + ${this.v2(`${C}, ${B}`)} + ${this.v2(`${j} * 0.137, ${j} * 0.911`)})`}, ${R}, max(${w}, 0.00001), true);`;break}case"bnw_spots2_v2":{const w=h("scale",u.scale??10),R=h("tileOffsetX",u.tileOffsetX??0),b=h("tileOffsetY",u.tileOffsetY??0),C=h("seed",u.seed??1337),B=h("nonSquareExpansion",u.nonSquareExpansion??!0?1:0),U=h("grainAmount",u.grainAmount??.22),j=h("grainThreshold",u.grainThreshold??.86),G=h("contrast",u.contrast??1.08),J=this.sysRef2("u_resolution"),se=this.v2(`${R}, ${b}`);if(this.W){const ie=`u32(max(${C}, 0.0))`,K=this.callAtom(c,"bnw_spots2_v2","float",[{code:"uv",type:"vec2"},{code:`uv * ${J}`,type:"vec2"},{code:J,type:"vec2"},{code:w,type:"float"},{code:se,type:"vec2"},{code:ie,type:"float"},{code:B,type:"float"},{code:U,type:"float"},{code:j,type:"float"},{code:G,type:"float"}]);this.mergeExprAtoms(g,K),x=`return ${K.code};`}else{const ie=`float(${w})`,K=`float(${C})`,ne=`clamp(floor(${ie} + 0.5), 1.0, 32.0)`,X=`(${J}.x / max(${J}.y, 1.0))`,F=`(${this.sel(`${B} > 0.5`,`vec2(uv.x * (${X}), uv.y)`,"uv")} * ${ne} + ${se})`,Y=F,Ie=ne,ae=`clamp((${`smoothstep(0.35, 0.75, ${`(
            0.5   * perlin2i_tiled(${Y} * 1.0, ${Ie} * 1.0, ${K} + 17.0) +
            0.25  * perlin2i_tiled(${Y} * 2.0, ${Ie} * 2.0, ${K} + 31.0) +
            0.125 * perlin2i_tiled(${Y} * 4.0, ${Ie} * 4.0, ${K} + 53.0) +
            0.0625* perlin2i_tiled(${Y} * 8.0, ${Ie} * 8.0, ${K} + 79.0)
          ) / 0.9375`})`} - 0.5) * max(${G}, 0.001) + 0.5, 0.0, 1.0)`,Ce=`perlin2i_tiled(${F} * 2.0 + vec2(13.2, -9.7), ${Ie} * 2.0, ${K} + 137.0)`,Te=`clamp(${j} + (${Ce} - 0.5) * 0.12, 0.0, 1.0)`,Je=`hash2(floor(uv * ${J}) + vec2(${K} * 0.013, ${K} * 0.071))`,je=`step(${Te}, ${Je})`;x=`return clamp(${ae} - clamp(${U}, 0.0, 1.0) * ${je}, 0.0, 1.0);`}break}case"checker":x=`return ${this.modF(`floor(uv.x * ${h("sc",u.scale)}) + floor(uv.y * ${h("sc",u.scale)})`,"2.0")};`;break;case"panner":{const w=h("sx",u.speedX),R=h("sy",u.speedY),b=`uv + ${this.v2(`${w}, ${R}`)} * ${_()}`,C=`fbm(${b}, 4.0, 4.0, 0.0)`;x=`return ${m(0,C,b)};`;break}case"tile_sampler":{const w=h("scale",u.scale??6),R=`(${h("ang",(u.angle??0)*Math.PI/180)})`,b=h("tileOffsetX",u.tileOffsetX??0),C=h("tileOffsetY",u.tileOffsetY??0),B="(uv - 0.5)",j=`fract((${this.v2(`cos(${R}) * ${B}.x - sin(${R}) * ${B}.y, sin(${R}) * ${B}.x + cos(${R}) * ${B}.y`)} + 0.5) * max(${w}, 1.0) + ${this.v2(`${b}, ${C}`)})`;x=`return ${m(0,"0.0",j)};`;break}case"gradient":{const w=h("ang",u.angle*Math.PI/180);u.type==="radial"?x="return clamp(1.0 - length(uv - 0.5) * 2.0, 0.0, 1.0);":u.type==="angular"?this.W?x="{ var nx = uv - 0.5; return (atan2(nx.y, nx.x) / 3.14159 + 1.0) * 0.5; }":x="vec2 nx = uv - 0.5; return (atan(nx.y, nx.x) / 3.14159 + 1.0) * 0.5;":this.W?x=`{ var nx = uv - 0.5; return clamp(cos(${w}) * nx.x + sin(${w}) * nx.y + 0.5, 0.0, 1.0); }`:x=`vec2 nx = uv - 0.5; return clamp(cos(${w}) * nx.x + sin(${w}) * nx.y + 0.5, 0.0, 1.0);`;break}case"shape":{const w=u.type||"circle",R=this.v2(`${h("px",u.posX??.5)}, ${h("py",u.posY??.5)}`),b=h("sc",u.scale??.5),C=h("rad",u.rad??.5),B=h("bl",u.blur??.01),U=h("tk",u.thick??.05);let j;w==="ring"?j=`abs(sdCircle(sp, ${C})) - ${U}`:w==="square"?j=`sdBox(sp, ${this.v2(C)})`:w==="triangle"?j=`sdEquilateralTriangle(sp, ${C})`:w==="polygon"?j=`sdPolygon(sp, ${C}, 6)`:w==="star"?j=`sdStar(sp, ${C}, 5, 2.5)`:j=`sdCircle(sp, ${C})`,this.W?x=`{ var sp = (uv - ${R}) / max(${b}, 0.0001); let d = ${j}; return 1.0 - smoothstep(-${B}, ${B}, d); }`:x=`vec2 sp = (uv - ${R}) / max(${b}, 0.0001); float d = ${j}; return 1.0 - smoothstep(-${B}, ${B}, d);`;break}case"add":x=`return ${m(0)} + ${m(1,h("b",u.b))};`;break;case"subtract":x=`return ${m(0)} - ${m(1,h("b",u.b))};`;break;case"multiply":x=`return ${m(0,"1.0")} * ${m(1,h("b",u.b))};`;break;case"divide":x=`return ${m(0,"1.0")} / max(${m(1,h("b",u.b))}, 0.0001);`;break;case"power":x=`return pow(max(${m(0,"0.5")}, 0.0), ${m(1,h("exp",u.exp))});`;break;case"oneminus":x=`return 1.0 - ${m(0)};`;break;case"abs":x=`return abs(${m(0)});`;break;case"negate":x=`return -(${m(0)});`;break;case"sqrt":x=`return sqrt(max(${m(0)}, 0.0));`;break;case"sign":x=`return sign(${m(0)}) * 0.5 + 0.5;`;break;case"frac":x=`return fract(${m(0)});`;break;case"floor":x=`return floor(${m(0)});`;break;case"ceil":x=`return ceil(${m(0)});`;break;case"min2":x=`return min(${m(0)}, ${m(1,h("b",u.b))});`;break;case"max2":x=`return max(${m(0)}, ${m(1,h("b",u.b))});`;break;case"mod":x=`return ${this.modF(m(0),`max(${m(1,h("b",u.b))}, 0.001)`)};`;break;case"clamp01":x=`return clamp(${m(0)}, 0.0, 1.0);`;break;case"clamp":x=`return clamp(${m(0)}, ${h("lo",u.lo)}, ${h("hi",u.hi)});`;break;case"remap":{const w=h("il",u.inLo),R=h("ih",u.inHi),b=h("ol",u.outLo),C=h("oh",u.outHi);this.W?x=`{ let t = clamp((${m(0)} - ${w}) / max(${R} - ${w}, 0.001), 0.0, 1.0); return ${b} + t * (${C} - ${b}); }`:x=`float t = clamp((${m(0)} - ${w}) / max(${R} - ${w}, 0.001), 0.0, 1.0); return ${b} + t * (${C} - ${b});`;break}case"sin":x=`return sin(${m(0,"uv.x")} * ${h("freq",u.freq)} * 6.28318 + ${h("ph",u.phase)}) * 0.5 + 0.5;`;break;case"cos":x=`return cos(${m(0,"uv.x")} * ${h("freq",u.freq)} * 6.28318 + ${h("ph",u.phase)}) * 0.5 + 0.5;`;break;case"tan":x=`return clamp(tan(${m(0,"uv.x")} * ${h("freq",u.freq)} * 3.14159) * 0.08 + 0.5, 0.0, 1.0);`;break;case"atan2node":x=`return (${this.atan2F(m(0,"uv.y - 0.5"),m(1,"uv.x - 0.5"))} / 3.14159 + 1.0) * 0.5;`;break;case"lerp":x=`return mix(${m(0)}, ${m(1,"1.0")}, clamp(${m(2,h("t",u.t))}, 0.0, 1.0));`;break;case"smoothstep":x=`return smoothstep(${h("lo",u.lo)}, ${h("hi",u.hi)}, ${m(0,"uv.x")});`;break;case"step":x=`return step(${m(0,h("e",u.edge))}, ${m(1,"uv.x")});`;break;case"ifgt":x=`return ${this.sel(`(${m(0)}) > (${m(1,h("b",u.b))})`,m(2,"1.0"),m(3,"0.0"))};`;break;case"blend":{const w=m(0),R=m(1,"1.0"),b=h("op",u.opacity),C=u.mode;let B=R;C==="add"?B=`min(${w} + ${R}, 1.0)`:C==="multiply"?B=`(${w}) * (${R})`:C==="screen"?B=`1.0 - (1.0 - ${w}) * (1.0 - ${R})`:C==="overlay"?B=this.sel(`${w} < 0.5`,`2.0 * ${w} * ${R}`,`1.0 - 2.0 * (1.0 - ${w}) * (1.0 - ${R})`):C==="difference"?B=`abs(${w} - ${R})`:C==="dodge"?B=`clamp(${w} / (1.0 - ${R} + 0.001), 0.0, 1.0)`:C==="burn"&&(B=`clamp(1.0 - (1.0 - ${w}) / (${R} + 0.001), 0.0, 1.0)`),x=`return mix(${w}, ${B}, ${b});`;break}case"levels":{const w=h("il",u.inMin),R=h("ih",u.inMax),b=h("g",u.gamma);this.W?x=`{ let t = clamp((${m(0)} - ${w}) / max(${R} - ${w}, 0.001), 0.0, 1.0); return pow(t, 1.0 / max(${b}, 0.01)); }`:x=`float t = clamp((${m(0)} - ${w}) / max(${R} - ${w}, 0.001), 0.0, 1.0); return pow(t, 1.0 / max(${b}, 0.01));`;break}case"histogram_scan":{const w=h("pos",u.position??.5),R=h("wid",u.width??.1),b=h("ctr",u.contrast??1),C=m(0),B=`smoothstep(${w} - max(${R}, 0.0005), ${w}, ${C})`,U=`(1.0 - smoothstep(${w}, ${w} + max(${R}, 0.0005), ${C}))`;x=`return clamp(${B} * ${U} * ${b}, 0.0, 1.0);`;break}case"histogram_range":{const w=h("inMin",u.inMin??.15),R=h("inMax",u.inMax??.85),b=h("outMin",u.outMin??0),C=h("outMax",u.outMax??1),B=m(0);this.W?x=`{ let t = clamp((${B} - ${w}) / max(${R} - ${w}, 0.0001), 0.0, 1.0); return mix(${b}, ${C}, t); }`:x=`float t = clamp((${B} - ${w}) / max(${R} - ${w}, 0.0001), 0.0, 1.0); return mix(${b}, ${C}, t);`;break}case"curve":{const w=h("lift",u.lift??0),R=h("gamma",u.gamma??1),b=h("gain",u.gain??1);x=`return clamp(pow(clamp(${m(0)} + ${w}, 0.0, 1.0), 1.0 / max(${R}, 0.001)) * ${b}, 0.0, 1.0);`;break}case"transform_2d":{const w=h("offX",u.offsetX??0),R=h("offY",u.offsetY??0),b=`(${h("rot",u.rotation??0)} * 0.017453292519943295)`,C=h("sc",u.scale??1),B=h("tile",u.tile??!0?1:0),U=`((uv - 0.5) / max(${C}, 0.0001))`,G=`(${this.v2(`cos(${b}) * ${U}.x - sin(${b}) * ${U}.y, sin(${b}) * ${U}.x + cos(${b}) * ${U}.y`)} + 0.5 + ${this.v2(`${w}, ${R}`)})`,J=`clamp(${G}, ${this.v2("0.0, 0.0")}, ${this.v2("1.0, 1.0")})`,se=this.sel(`${B} > 0.5`,`fract(${G})`,J);x=`return ${m(0,"0.0",se)};`;break}case"safe_transform":{const w=h("offX",u.offsetX??0),R=h("offY",u.offsetY??0),b=h("sc",u.scale??1),C=h("tile",u.tile??!1?1:0),B=this.sysRef2("u_resolution"),U=`(0.5 / max(min(${B}.x, ${B}.y), 1.0))`,j=`((uv - 0.5) / max(${b}, 0.0001) + 0.5 + ${this.v2(`${w}, ${R}`)})`,G=`clamp(${j}, ${this.v2(`${U}, ${U}`)}, ${this.v2(`1.0 - ${U}, 1.0 - ${U}`)})`,J=this.sel(`${C} > 0.5`,`fract(${j})`,G);x=`return ${m(0,"0.0",J)};`;break}case"warp":{const w=M(1,this.W?"vec2f(0.0)":"vec2(0.0)"),R=h("str",u.strength),b=`(uv + ${w} * ${R})`;x=`return ${m(0,"0.0",b)};`;break}case"vector_warp":{const w=h("int",u.intensity??.15),R=h("ctr",u.centered??!0?1:0),b=h("tile",u.tile??!0?1:0),C=M(1,this.W?"vec2f(0.5)":"vec2(0.5)"),U=`(uv + (${this.sel(`${R} > 0.5`,`(${C} - ${this.v2("0.5, 0.5")})`,C)}) * ${w})`,j=this.sel(`${b} > 0.5`,`fract(${U})`,`clamp(${U}, ${this.v2("0.0, 0.0")}, ${this.v2("1.0, 1.0")})`);x=`return ${m(0,"0.0",j)};`;break}case"directional_warp":{const w=h("amount",u.amount??.15),R=h("angle",u.angle??0),b=m(1,"0.5"),B=`(uv + ${this.v2(`cos(${R}), sin(${R})`)} * ((${b} - 0.5) * ${w}))`;x=`return ${m(0,"0.0",B)};`;break}case"edge_detect":{const w=this.sysRef2("u_resolution"),R=`(${h("radius",u.radius)} / max(${w}.x, ${w}.y))`,b=h("strength",u.strength);this.W?x=`{
            let tl = ${m(0,"0.0",`uv + vec2f(-${R}, -${R})`)};
            let  t = ${m(0,"0.0",`uv + vec2f( 0.0, -${R})`)};
            let tr = ${m(0,"0.0",`uv + vec2f( ${R}, -${R})`)};
            let  l = ${m(0,"0.0",`uv + vec2f(-${R},  0.0)`)};
            let r0 = ${m(0,"0.0",`uv + vec2f( ${R},  0.0)`)};
            let bl = ${m(0,"0.0",`uv + vec2f(-${R},  ${R})`)};
            let  b = ${m(0,"0.0",`uv + vec2f( 0.0,  ${R})`)};
            let br = ${m(0,"0.0",`uv + vec2f( ${R},  ${R})`)};
            let gx = -tl - 2.0*l - bl + tr + 2.0*r0 + br;
            let gy = -tl - 2.0*t - tr + bl + 2.0*b + br;
            let edge = length(vec2f(gx, gy));
            return clamp(edge * ${b}, 0.0, 1.0);
          }`:x=`
            float tl = ${m(0,"0.0",`uv + vec2(-${R}, -${R})`)};
            float  t = ${m(0,"0.0",`uv + vec2( 0.0, -${R})`)};
            float tr = ${m(0,"0.0",`uv + vec2( ${R}, -${R})`)};
            float  l = ${m(0,"0.0",`uv + vec2(-${R},  0.0)`)};
            float r0 = ${m(0,"0.0",`uv + vec2( ${R},  0.0)`)};
            float bl = ${m(0,"0.0",`uv + vec2(-${R},  ${R})`)};
            float  b = ${m(0,"0.0",`uv + vec2( 0.0,  ${R})`)};
            float br = ${m(0,"0.0",`uv + vec2( ${R},  ${R})`)};
            float gx = -tl - 2.0*l - bl + tr + 2.0*r0 + br;
            float gy = -tl - 2.0*t - tr + bl + 2.0*b + br;
            float edge = length(vec2(gx, gy));
            return clamp(edge * ${b}, 0.0, 1.0);
          `;break}case"blur":{const w=h("amt",u.amount??.05),R=h("ctr",u.center??0),b=`${R} - ${w}`,C=`${R} + ${w}`;x=`return 1.0 - smoothstep(${b}, ${C}, ${m(0,"0.5")});`;break}case"highpass_grayscale":{const w=h("radius",u.radius??1),R=h("intensity",u.intensity??1),b=this.sysRef2("u_resolution"),C=`(max(${w}, 0.0001) / max(${b}.x, ${b}.y))`,B=m(0,"0.0"),U=m(0,"0.0",`(uv + ${this.v2(`${C}, 0.0`)})`),j=m(0,"0.0",`(uv - ${this.v2(`${C}, 0.0`)})`),G=m(0,"0.0",`(uv + ${this.v2(`0.0, ${C}`)})`),J=m(0,"0.0",`(uv - ${this.v2(`0.0, ${C}`)})`),se=`((${B} + ${U} + ${j} + ${G} + ${J}) * 0.2)`;x=`return clamp(((${B} - ${se}) * ${R}) + 0.5, 0.0, 1.0);`;break}case"slope_blur":{const w=h("intensity",u.intensity??2),R=h("samples",u.samples??4),b=this.sysRef2("u_resolution"),C=m(1,m(0,"0.5")),U=`(${`normalize(${this.v2(`${C} - 0.5, 1.0 - ${C}`)} + ${this.v2("1e-4, 1e-4")})`} * (${w} / max(${b}.x, ${b}.y)))`,j=`step(0.5, ${R})`,G=`step(1.5, ${R})`,J=`step(2.5, ${R})`,se=`step(3.5, ${R})`,ie=m(0,"0.0"),K=m(0,"0.0",`(uv + ${U})`),ne=m(0,"0.0",`(uv - ${U})`),X=m(0,"0.0",`(uv + ${U} * 2.0)`),oe=m(0,"0.0",`(uv - ${U} * 2.0)`),F=m(0,"0.0",`(uv + ${U} * 3.0)`),Y=m(0,"0.0",`(uv - ${U} * 3.0)`),Ie=m(0,"0.0",`(uv + ${U} * 4.0)`),Re=m(0,"0.0",`(uv - ${U} * 4.0)`),et=`(${ie} + ${j} * (${K} + ${ne}) + ${G} * (${X} + ${oe}) + ${J} * (${F} + ${Y}) + ${se} * (${Ie} + ${Re}))`,ae=`(1.0 + 2.0 * (${j} + ${G} + ${J} + ${se}))`;x=`return clamp(${et} / max(${ae}, 1.0), 0.0, 1.0);`;break}case"non_uniform_blur":{const w=h("radius",u.radius??2),R=h("samples",u.samples??4),b=this.sysRef2("u_resolution"),C=m(1,"1.0"),B=`(max(${w}, 0.0) * clamp(${C}, 0.0, 1.0) / max(${b}.x, ${b}.y))`,U=`step(0.5, ${R})`,j=`step(1.5, ${R})`,G=`step(2.5, ${R})`,J=`step(3.5, ${R})`,se=m(0,"0.0"),ie=m(0,"0.0",`(uv + ${this.v2(`${B}, 0.0`)})`),K=m(0,"0.0",`(uv - ${this.v2(`${B}, 0.0`)})`),ne=m(0,"0.0",`(uv + ${this.v2(`0.0, ${B}`)})`),X=m(0,"0.0",`(uv - ${this.v2(`0.0, ${B}`)})`),oe=m(0,"0.0",`(uv + ${this.v2(`2.0 * ${B}, 0.0`)})`),F=m(0,"0.0",`(uv - ${this.v2(`2.0 * ${B}, 0.0`)})`),Y=m(0,"0.0",`(uv + ${this.v2(`0.0, 2.0 * ${B}`)})`),Ie=m(0,"0.0",`(uv - ${this.v2(`0.0, 2.0 * ${B}`)})`),Re=m(0,"0.0",`(uv + ${this.v2(`3.0 * ${B}, 0.0`)})`),et=m(0,"0.0",`(uv - ${this.v2(`3.0 * ${B}, 0.0`)})`),ae=m(0,"0.0",`(uv + ${this.v2(`0.0, 3.0 * ${B}`)})`),Ce=m(0,"0.0",`(uv - ${this.v2(`0.0, 3.0 * ${B}`)})`),Te=m(0,"0.0",`(uv + ${this.v2(`4.0 * ${B}, 0.0`)})`),Je=m(0,"0.0",`(uv - ${this.v2(`4.0 * ${B}, 0.0`)})`),je=m(0,"0.0",`(uv + ${this.v2(`0.0, 4.0 * ${B}`)})`),ot=m(0,"0.0",`(uv - ${this.v2(`0.0, 4.0 * ${B}`)})`),cn=`(${se}
          + ${U} * (${ie} + ${K} + ${ne} + ${X})
          + ${j} * (${oe} + ${F} + ${Y} + ${Ie})
          + ${G} * (${Re} + ${et} + ${ae} + ${Ce})
          + ${J} * (${Te} + ${Je} + ${je} + ${ot}))`,Et=`(1.0 + 4.0 * (${U} + ${j} + ${G} + ${J}))`;x=`return clamp(${cn} / max(${Et}, 1.0), 0.0, 1.0);`;break}case"flood_fill":{const w=h("scale",u.scale??8),R=h("threshold",u.threshold??.1),b=h("seed",u.seed??1337),C=h("tileOffsetX",u.tileOffsetX??0),B=h("tileOffsetY",u.tileOffsetY??0),U=h("nonSquare",u.nonSquare??!0?1:0),j=this.W?`(${b})`:`float(${b})`,G=this.sysRef2("u_resolution"),J=`${G}.x / max(${G}.y, 1.0)`,ne=`hash2(${`floor(${`(${this.sel(`${U} > 0.5`,this.v2(`uv.x * (${J}), uv.y`),"uv")} * max(${w}, 1.0) + ${this.v2(`${C}, ${B}`)})`})`} + ${this.v2(`${j} * 0.271, ${j} * 0.619`)})`,X=`step(${R}, ${m(0,"1.0")})`;x=`return ${ne} * ${X};`;break}case"height_to_normal":{const w=this.sysRef2("u_resolution"),R=h("radius",u.radius??1),b=`(1.0 / max(${w}.x, ${w}.y))`,C=`(max(${R}, 0.0001) * ${b})`,B=h("strength",u.strength??1),U=h("flipY",u.flipY??!1?-1:1);this.W?x=`{
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
            let k = (${B} / max(${R}, 0.0001)) * (1.0 / 32.0);
            let gx = -dX * k;
            let gy = -dY * k * ${U};
            let n = normalize(vec3f(gx, gy, 1.0));
            return n * 0.5 + 0.5;
          }`:x=`{
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
            float k = (${B} / max(${R}, 0.0001)) * (1.0 / 32.0);
            float gx = -dX * k;
            float gy = -dY * k * ${U};
            vec3 n = normalize(vec3(gx, gy, 1.0));
            return n * 0.5 + 0.5;
          }`;break}case"normal_combine":{const w=T(0,this.W?"vec3f(0.5, 0.5, 1.0)":"vec3(0.5, 0.5, 1.0)"),R=T(1,this.W?"vec3f(0.5, 0.5, 1.0)":"vec3(0.5, 0.5, 1.0)"),b=h("strength",u.strength??1);this.W?x=`{
            let b = normalize(${w} * 2.0 - 1.0);
            let d = normalize(${R} * 2.0 - 1.0);
            let ds = normalize(vec3f(d.xy * ${b}, d.z));
            let n = normalize(vec3f(b.xy + ds.xy, max(1e-4, b.z * ds.z)));
            return n * 0.5 + 0.5;
          }`:x=`{
            vec3 b = normalize(${w} * 2.0 - 1.0);
            vec3 d = normalize(${R} * 2.0 - 1.0);
            vec3 ds = normalize(vec3(d.xy * ${b}, d.z));
            vec3 n = normalize(vec3(b.xy + ds.xy, max(1e-4, b.z * ds.z)));
            return n * 0.5 + 0.5;
          }`;break}case"normal_normalize":{const w=T(0,this.W?"vec3f(0.5, 0.5, 1.0)":"vec3(0.5, 0.5, 1.0)"),R=h("flipY",u.flipY??!1?-1:1);this.W?x=`{
            let n0 = ${w} * 2.0 - 1.0;
            let n1 = normalize(vec3f(n0.x, n0.y * ${R}, n0.z));
            return n1 * 0.5 + 0.5;
          }`:x=`{
            vec3 n0 = ${w} * 2.0 - 1.0;
            vec3 n1 = normalize(vec3(n0.x, n0.y * ${R}, n0.z));
            return n1 * 0.5 + 0.5;
          }`;break}case"remote":x="return 0.0;";break;case"atom_input":case"atom_input_a":case"atom_input_b":case"atom_input_c":case"atom_input_d":{const w=this.atomInputExprStack.length>0?this.atomInputExprStack[this.atomInputExprStack.length-1]:null,R=this.atomInputPortIndex(r.type)??0,b=(w==null?void 0:w[R])??(w==null?void 0:w[0])??null;if(!b){this.warnings.add(`Atom Input node "${e}" used outside atom graph.`),x="return 0.0;";break}w&&R>=w.length&&this.warnings.add(`Atom Input "${r.type}" requested missing parent port ${R}; using port 0.`),this.mergeExprAtoms(g,b),x=`return ${this.asFloat(b,r.type,`${e}`)};`;break}case"atom_graph":{const w=Math.max(1,(($=(I=Mt[r.type])==null?void 0:I.inputs)==null?void 0:$.length)||1),R=[];for(let C=0;C<w;C+=1){const B=this.getSource(e,C,"uv","0.0","float");R.push(B),this.mergeExprAtoms(g,B)}const b=this.compileAtomSubgraph(r,R);this.mergeExprAtoms(g,b),x=`return ${this.asFloat(b,r.type,e)};`;break}case"buffer":{if(t===1){const w=`1.0 / max(${this.sysRef2("u_resolution")}.x, 1.0)`;this.W?x=`{
              let s = ${w};
              let c  = ${m(0,"0.0","uv")};
              let c1 = ${m(0,"0.0","uv + vec2f(s, 0.0)")};
              let c2 = ${m(0,"0.0","uv + vec2f(-s, 0.0)")};
              let c3 = ${m(0,"0.0","uv + vec2f(0.0, s)")};
              let c4 = ${m(0,"0.0","uv + vec2f(0.0, -s)")};
              return (c + c1 + c2 + c3 + c4) * 0.2;
            }`:x=`
              float s = ${w};
              float c  = ${m(0,"0.0","uv")};
              float c1 = ${m(0,"0.0","uv + vec2(s, 0.0)")};
              float c2 = ${m(0,"0.0","uv + vec2(-s, 0.0)")};
              float c3 = ${m(0,"0.0","uv + vec2(0.0, s)")};
              float c4 = ${m(0,"0.0","uv + vec2(0.0, -s)")};
              return (c + c1 + c2 + c3 + c4) * 0.2;
            `}else x=`return ${m(0)};`;break}case"output":x=`return ${m(0)};`;break;case"output_baseColor":x=`return ${m(0)};`;break;case"output_normal":x=`return ${m(0)};`;break;case"output_roughness":x=`return ${m(0)};`;break;case"output_height":x=`return ${m(0)};`;break;case"output_metallic":x=`return ${m(0)};`;break;default:x="return 0.5;";break}if(this.W){const w=this.toWgslDataType(a),b=[...this.funcBodies.get(c)||[],x].join(`
`),C=((o==null?void 0:o.label)||r.type).replace(/\r?\n/g," ");this.funcDefs.push(`// NodeRef id=${e} type=${r.type} port=${t} label=${C}
fn ${p}(uv: vec2f) -> ${w} {
${b}
}`)}else this.funcDefs.push(`// Node: ${(o==null?void 0:o.label)||r.type} (id=${e})
${a} ${p}(vec2 uv) { ${x} }`);const y={code:`${p}(uv)`,type:a,atoms:g.size>0?new Set(g):void 0};return this.funcExprs.set(c,y),this.cloneExpr(y)}inferUniformType(e,t,r){var c,f;if(Array.isArray(r))return r.length>=4?"vec4":r.length===3?"vec3":r.length===2?"vec2":"float";if(typeof r=="boolean")return"bool";const o=this.nodes.get(e),a=o?(f=(c=Mt[o.type])==null?void 0:c.params)==null?void 0:f[t]:void 0;return(a==null?void 0:a.type)==="int"?"int":"float"}toGLSLType(e){return e==="float"||e==="int"?"float":e==="bool"?"bool":e==="vec2"?"vec2":e==="vec3"?"vec3":"vec4"}toReadableSource(e){return e.split(`
`).map(t=>t.trimEnd()).join(`
`).trim()}toRawSource(e){return e.replace(/\/\/[^\n\r]*/g,"").replace(/\s+/g," ").trim()}hashString(e){let t=2166136261;for(let r=0;r<e.length;r++)t^=e.charCodeAt(r),t+=(t<<1)+(t<<4)+(t<<7)+(t<<8)+(t<<24);return`fnv1a_${(t>>>0).toString(16)}`}}const j2=`
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
`,X2=`
struct UBlock { data: array<vec4f, 64> };
@group(0) @binding(0) var<uniform> ub: UBlock;
fn uf(i: u32) -> f32 { return ub.data[i >> 2u][i & 3u]; }

struct VSOut { @builtin(position) pos: vec4f, @location(0) uv: vec2f };
@vertex fn vs_main(@builtin(vertex_index) vi: u32) -> VSOut {
  var p = array<vec2f, 3>(vec2f(-1, -1), vec2f(3, -1), vec2f(-1, 3));
  var out: VSOut; out.pos = vec4f(p[vi], 0, 1); out.uv = p[vi] * 0.5 + 0.5; return out;
}
@fragment fn fs_main(inp: VSOut) -> @location(0) vec4f { return vec4f(0, 0, 0, 1); }
`;class Co{constructor(e){this.nodes=new Map,this.edges=new Map,this.frames=new Map,this.edgesByTargetPort=new Map,this.resolution=null,this.lastValidationError=null,e&&(e.nodes.forEach(t=>this.nodes.set(t.id,t)),e.edges.forEach(t=>this.linkEdge(t)),(e.frames||[]).forEach(t=>this.frames.set(t.id,{...t})),e.resolution&&(this.resolution=e.resolution))}setResolution(e){this.resolution=e}addNode(e,t,r){const o=Mt[e];if(!o)return null;const a=Math.random().toString(36).slice(2,9),c={};for(const[p,u]of Object.entries(o.params))c[p]=u.default;const f={id:a,type:e,x:t,y:r,params:c};return this.nodes.set(a,f),f}removeNode(e){this.nodes.delete(e);for(const[t,r]of this.edges)(r.fromId===e||r.toId===e)&&this.unlinkEdge(t)}addFrame(e,t,r=420,o=260,a="Frame",c="#4d78bc"){const f=Math.random().toString(36).slice(2,9),p={id:f,x:e,y:t,width:Math.max(140,r),height:Math.max(100,o),label:a,color:c};return this.frames.set(f,p),p}moveFrame(e,t,r){const o=this.frames.get(e);o&&(o.x=t,o.y=r)}resizeFrame(e,t,r){const o=this.frames.get(e);o&&(o.width=Math.max(140,t),o.height=Math.max(100,r))}updateFrame(e,t){const r=this.frames.get(e);if(!r)return;const o={...r,...t};o.width=Math.max(140,o.width),o.height=Math.max(100,o.height),this.frames.set(e,o)}removeFrame(e){this.frames.delete(e)}targetKey(e,t){return`${e}:${t}`}linkEdge(e){this.edges.set(e.id,e),this.edgesByTargetPort.set(this.targetKey(e.toId,e.toPort),e.id)}unlinkEdge(e){const t=this.edges.get(e);t&&(this.edgesByTargetPort.delete(this.targetKey(t.toId,t.toPort)),this.edges.delete(e))}validateConnection(e,t,r,o){var g;const a=this.nodes.get(e),c=this.nodes.get(r);if(!a||!c)return{ok:!1,error:"Connection endpoints not found."};const f=Uv(a.type),p=Uv(c.type);if(!f||!p)return{ok:!1,error:"Node definition not found."};const u=f.outputs[t],h=p.inputs[o];return u?h?((g=h.constraints)!=null&&g.allowedTypes&&h.constraints.allowedTypes.length>0?h.constraints.allowedTypes:[h.type]).includes(u.type)?this.createsCycle(e,r)?{ok:!1,error:"Cycle detected."}:{ok:!0}:{ok:!1,error:`Type mismatch: cannot connect ${u.type} to ${h.type} (${c.type}.${h.id}).`}:{ok:!1,error:`Input port ${o} is invalid for ${c.type}.`}:{ok:!1,error:`Output port ${t} is invalid for ${a.type}.`}}addEdge(e,t,r,o=0){const a=this.validateConnection(e,o,t,r);if(!a.ok)return this.lastValidationError=a.error||"Invalid connection.",console.warn(this.lastValidationError),null;this.lastValidationError=null;const c=this.edgesByTargetPort.get(this.targetKey(t,r));c&&this.unlinkEdge(c);const p={id:Math.random().toString(36).slice(2,9),fromId:e,fromPort:o,toId:t,toPort:r};return this.linkEdge(p),p}removeEdge(e){this.unlinkEdge(e)}updateParam(e,t,r){const o=this.nodes.get(e);o&&(o.params={...o.params,[t]:r})}moveNode(e,t,r){const o=this.nodes.get(e);o&&(o.x=t,o.y=r)}getExecutionOrder(){const e=[],t=new Map,r=new Map;for(const a of this.nodes.keys())t.set(a,0),r.set(a,[]);for(const a of this.edges.values()){const c=a.fromId,f=a.toId;r.has(c)&&t.has(f)&&(r.get(c).push(f),t.set(f,t.get(f)+1))}const o=[];for(const[a,c]of t)c===0&&o.push(a);for(;o.length>0;){const a=o.shift();e.push(a);for(const c of r.get(a))t.set(c,t.get(c)-1),t.get(c)===0&&o.push(c)}return e.length!==this.nodes.size?(console.error("Cycle detected in graph sort"),[]):e}createsCycle(e,t){return e===t?!0:((o,a)=>{const c=[o],f=new Set;for(;c.length>0;){const p=c.shift();if(p===a)return!0;if(!f.has(p)){f.add(p);for(const u of this.edges.values())u.fromId===p&&c.push(u.toId)}}return!1})(t,e)}serialize(){return{nodes:Array.from(this.nodes.values()),edges:Array.from(this.edges.values()),frames:Array.from(this.frames.values()),resolution:this.resolution}}}const Ds=2;function Y2(i){const e=[],t=[];if(i.schemaVersion==null&&e.push("Missing schemaVersion"),!Array.isArray(i.nodes))return e.push("nodes must be an array"),{ok:!1,errors:e,warnings:t};if(!Array.isArray(i.edges))return e.push("edges must be an array"),{ok:!1,errors:e,warnings:t};if(!Array.isArray(i.frames))return e.push("frames must be an array"),{ok:!1,errors:e,warnings:t};const r=new Set;for(const f of i.nodes){if(!f.id||!f.type){e.push("Node missing id or type");continue}r.has(f.id)&&e.push(`Duplicate node id "${f.id}"`),r.add(f.id),Mt[f.type]||t.push(`Unknown node type "${f.type}"`)}const o=new Set;for(const f of i.edges){if(!f.id){e.push("Edge missing id");continue}o.has(f.id)&&e.push(`Duplicate edge id "${f.id}"`),o.add(f.id),r.has(f.fromId)||e.push(`Edge ${f.id}: fromId "${f.fromId}" not found`),r.has(f.toId)||e.push(`Edge ${f.id}: toId "${f.toId}" not found`)}i.nodes.some(f=>xn(f.type))||t.push("Graph has no output node");const c=new Set;for(const f of i.frames){if(!f.id){e.push("Frame missing id");continue}c.has(f.id)&&e.push(`Duplicate frame id "${f.id}"`),c.add(f.id)}return{ok:e.length===0,errors:e,warnings:t}}function q2(i){return(i.schemaVersion??i.version??1)>=Ds?{schemaVersion:i.schemaVersion??Ds,nodes:i.nodes??[],edges:i.edges??[],frames:(i.frames??[]).map(t=>({id:t.id,x:t.x??0,y:t.y??0,width:t.width??280,height:t.height??180,label:typeof t.label=="string"&&t.label.length>0?t.label:"Frame",color:typeof t.color=="string"?t.color:void 0})),resolution:i.resolution??512,meta:i.meta??{name:"Untitled",created:Date.now(),modified:Date.now()}}:{schemaVersion:Ds,nodes:(i.nodes??[]).map(t=>({id:t.id,type:t.type,x:t.x??0,y:t.y??0,params:t.params??{}})),edges:(i.edges??[]).map(t=>({id:t.id,fromId:t.fromId,fromPort:t.fromPort??0,toId:t.toId,toPort:t.toPort??0})),frames:(i.frames??[]).map(t=>({id:t.id,x:t.x??0,y:t.y??0,width:t.width??280,height:t.height??180,label:typeof t.label=="string"&&t.label.length>0?t.label:"Frame",color:typeof t.color=="string"?t.color:void 0})),resolution:i.resolution??512,meta:{name:i.name??"Untitled",created:i.created??Date.now(),modified:Date.now()}}}function K2(i=600,e=200){return{schemaVersion:Ds,nodes:[{id:"out_base",type:"output_baseColor",x:i,y:e-280,params:{}},{id:"out_rough",type:"output_roughness",x:i,y:e-140,params:{}},{id:"out_normal",type:"output_normal",x:i,y:e,params:{}},{id:"out_metal",type:"output_metallic",x:i,y:e+140,params:{}},{id:"out_height",type:"output_height",x:i,y:e+280,params:{}}],edges:[],frames:[],resolution:512,meta:{name:"Untitled",created:Date.now(),modified:Date.now()}}}function Z2(i){const e={...i,meta:{...i.meta,modified:Date.now()}};return JSON.stringify(e,null,2)}function J2(i,e){return{schemaVersion:Ds,nodes:i.nodes,edges:i.edges,frames:i.frames??[],resolution:e??i.resolution??512,meta:{name:"Untitled",created:Date.now(),modified:Date.now()}}}function Zr(i){return{schemaVersion:i.schemaVersion,nodes:i.nodes,edges:i.edges,frames:i.frames,resolution:i.resolution}}const zv=new Set(["time","panner"]);function Q2(i){var g,m;const e=new Map(i.nodes.map(M=>[M.id,M])),t=new Map,r=new Map;for(const M of i.edges)(t.get(M.toId)??(t.set(M.toId,[]),t.get(M.toId))).push(M),(r.get(M.fromId)??(r.set(M.fromId,[]),r.get(M.fromId))).push(M);const o=new Map;for(const M of i.nodes)o.set(M.id,0);for(const M of i.edges)o.set(M.toId,(o.get(M.toId)??0)+1);const a=[];for(const[M,T]of o)T===0&&a.push(M);const c=[];for(;a.length;){const M=a.shift();c.push(M);for(const T of r.get(M)??[]){const x=(o.get(T.toId)??1)-1;o.set(T.toId,x),x===0&&a.push(T.toId)}}const f=new Map,p=new Map;for(const M of c){const T=new Set,x=[];for(const y of t.get(M)??[]){T.add(y.fromId),x.push(y.fromId);for(const L of f.get(y.fromId)??[])T.add(L)}f.set(M,T),p.set(M,x)}const u=new Map;for(const M of c){const T=e.get(M),x=Mt[T.type],y=((x==null?void 0:x.inputs)??[]).map(($,w)=>{var C,B;const R=i.edges.find(U=>U.toId===M&&U.toPort===w);if(!R)return null;const b=Mt[((C=e.get(R.fromId))==null?void 0:C.type)??""];return((B=b==null?void 0:b.outputs[R.fromPort])==null?void 0:B.type)??null}),L=((x==null?void 0:x.outputs)??[]).map($=>$.type),k=[...f.get(M)??[]].every($=>{var w;return((w=u.get($))==null?void 0:w.isConstant)??!1}),I=!zv.has(T.type)&&(((g=t.get(M))==null?void 0:g.length)??0)===0?T.type==="constant":k&&!zv.has(T.type);u.set(M,{id:M,type:T.type,params:T.params,inputTypes:y,outputTypes:L,isConstant:I})}const h=i.edges.map(M=>{var k,I,$,w;const T=Mt[((k=e.get(M.fromId))==null?void 0:k.type)??""],x=Mt[((I=e.get(M.toId))==null?void 0:I.type)??""],y=(($=T==null?void 0:T.outputs[M.fromPort])==null?void 0:$.type)??"float",L=((w=x==null?void 0:x.inputs[M.toPort])==null?void 0:w.type)??"float";return{id:M.id,from:{nodeId:M.fromId,portIndex:M.fromPort,type:y},to:{nodeId:M.toId,portIndex:M.toPort,type:L},castNeeded:y!==L}}),_=((m=i.nodes.find(M=>xn(M.type)))==null?void 0:m.id)??null;return{nodes:u,edges:h,order:c,deps:f,directDeps:p,outputNodeId:_}}function t_(i){let e=2166136261;for(let t=0;t<i.length;t++)e^=i.charCodeAt(t),e=Math.imul(e,16777619);return(e>>>0).toString(36)}function eT(i,e,t){const r=[i.type,JSON.stringify(i.params)];for(const o of t){const a=e.get(o);a&&r.push(a)}return t_(r.join("|"))}function tT(i,e){const t=Q2(i),r=new Map;if(e)for(const f of e.nodes)r.set(f.nodeId,f.cacheKey);const o=new Map,a=[];for(const f of t.order){const p=t.nodes.get(f),u=t.directDeps.get(f)??[],h=eT(p,o,u);o.set(f,h),a.push({nodeId:f,type:p.type,cacheKey:h,isConstant:p.isConstant,dirty:r.get(f)!==h,directDeps:u})}const c=t_(a.map(f=>f.cacheKey).join(":"));return{nodes:a,typedGraph:t,hash:c}}function nT(i){return i.nodes.filter(e=>e.dirty).map(e=>e.nodeId)}function iT(i,e){return i==="bool"?!!e:i==="int"?Math.trunc(Number(e)||0):i==="float"?Number(e)||0:e}function rT(i,e,t){var c;if(e in t)return e;const r={val:"value",spd:"speed",sc:"scale",se:"seed",jt:"jitter",ang:"angle",px:"posX",py:"posY",r:"rot",rad:"rad",bl:"blur",tk:"thick",exp:"exp",freq:"freq",ph:"phase",t:"t",e:"edge",op:"opacity",g:"gamma",str:"strength",il:"inMin",ih:"inMax",ol:"outLo",oh:"outHi"},a=((c={add:{b:"b"},subtract:{b:"b"},multiply:{b:"b"},divide:{b:"b"},min2:{b:"b"},max2:{b:"b"},mod:{b:"b"},ifgt:{b:"b"},remap:{il:"inLo",ih:"inHi",ol:"outLo",oh:"outHi"},clamp:{lo:"lo",hi:"hi"},smoothstep:{lo:"lo",hi:"hi"},shape:{px:"posX",py:"posY",sc:"scale",bl:"blur",tk:"thick"},panner:{sx:"speedX",sy:"speedY"},levels:{il:"inMin",ih:"inMax",g:"gamma"},step:{e:"edge"}}[i])==null?void 0:c[e])||r[e];return a&&a in t?a:e}function es(i,e){const t=new Map(e.nodes.map(o=>[o.id,o])),r={...i.uniformBindings};for(const o of i.uniforms){if(o.nodeId==="system")continue;const a=t.get(o.nodeId);if(!a)continue;const c=rT(a.type,o.key,a.params);c in a.params&&(r[o.name]={value:iT(o.type,a.params[c])})}return{...i,uniformBindings:r}}const sT=new Set(["sides"]);function n_(i){const e=[...i.nodes].sort((r,o)=>r.id.localeCompare(o.id)).map(r=>{const o=Mt[r.type];if(!o)return`${r.id}:${r.type}`;const a=Object.keys(o.params).filter(c=>o.params[c].type==="select"||sT.has(c)).sort().map(c=>`${c}=${String(r.params[c])}`).join(",");return`${r.id}:${r.type}:${a}`}).join("|"),t=[...i.edges].sort((r,o)=>`${r.fromId}:${r.fromPort}:${r.toId}:${r.toPort}`.localeCompare(`${o.fromId}:${o.fromPort}:${o.toId}:${o.toPort}`)).map(r=>`${r.fromId}:${r.fromPort}>${r.toId}:${r.toPort}`).join("|");return`${e}::${t}`}function $v(i){const e=n_(i),t=[...i.nodes].sort((r,o)=>r.id.localeCompare(o.id)).map(r=>JSON.stringify(r.params)).join("|");return`${e}|${i.resolution??512}|${t}`}class oT{constructor(e){this.plan=null,this.shaderCache=new Map,this._compilerBuild=e_,this.historyPast=[],this.historyFuture=[],this.maxHistory=100,e&&"schemaVersion"in e&&e.meta?this.ir=e:e?this.ir=J2(e):this.ir=K2(),this.engine=new Co(Zr(this.ir)),this.rebuildPlan()}getIR(){return this.ir}getGraphData(){return Zr(this.ir)}getResolution(){return this.ir.resolution}getPlan(){return this.plan}setResolution(e){this.ir={...this.ir,resolution:e},this.engine.setResolution(e)}sync(){const e=this.engine.serialize();return this.ir={...this.ir,nodes:e.nodes,edges:e.edges,frames:e.frames??[],meta:{...this.ir.meta,modified:Date.now()}},this.rebuildPlan(),e}pushHistory(){this.historyPast.push(JSON.stringify(this.ir)),this.historyPast.length>this.maxHistory&&this.historyPast.shift(),this.historyFuture=[]}addNode(e,t,r,o=!0){o&&this.pushHistory();const a=this.engine.addNode(e,t,r);return{graph:this.sync(),node:a}}removeNode(e){return this.pushHistory(),this.engine.removeNode(e),this.sync()}connect(e,t,r){return this.pushHistory(),this.engine.addEdge(e,t,r),this.sync()}disconnect(e){return this.pushHistory(),this.engine.removeEdge(e),this.sync()}updateParam(e,t,r){return this.engine.updateParam(e,t,r),this.sync()}moveNode(e,t,r){this.engine.moveNode(e,t,r);const o=this.engine.serialize();return this.ir={...this.ir,nodes:o.nodes,frames:o.frames??this.ir.frames,meta:{...this.ir.meta,modified:Date.now()}},o}undo(){return this.historyPast.length?(this.historyFuture.push(JSON.stringify(this.ir)),this.ir=JSON.parse(this.historyPast.pop()),this.engine=new Co(Zr(this.ir)),this.rebuildPlan(),Zr(this.ir)):null}redo(){return this.historyFuture.length?(this.historyPast.push(JSON.stringify(this.ir)),this.ir=JSON.parse(this.historyFuture.pop()),this.engine=new Co(Zr(this.ir)),this.rebuildPlan(),Zr(this.ir)):null}canUndo(){return this.historyPast.length>0}canRedo(){return this.historyFuture.length>0}serialize(){return Z2(this.ir)}load(e){this.ir=q2(e);const t=Y2(this.ir);return t.ok||console.warn("GraphIR validation errors:",t.errors),this.engine=new Co(Zr(this.ir)),this.rebuildPlan(),this.historyPast=[],this.historyFuture=[],Zr(this.ir)}updateNodePositions(e,t){const r=new Map(e.map(o=>[o.id,o]));for(const o of this.ir.nodes){const a=r.get(o.id);a&&(o.x=a.x,o.y=a.y)}if(this.engine.nodes.forEach((o,a)=>{const c=r.get(a);c&&(o.x=c.x,o.y=c.y)}),t){const o=t.map(a=>({...a}));this.ir.frames=o,this.engine.frames=new Map(o.map(a=>[a.id,{...a}]))}this.ir.meta={...this.ir.meta,modified:Date.now()}}rebuildPlan(){this.plan=tT(this.ir,this.plan??void 0),this.shaderCache.clear()}compile(e){var m;const t=performance.now(),r=Zr(this.ir),o=e.targetNodeId??"output",a=e.targetPort??0,c=e.outputChannel??"baseColor",f=e.readable??!0,p=`${(m=this.plan)==null?void 0:m.hash}|${this._compilerBuild}|${o}:${a}|${c}|${f}`,u=this.shaderCache.get(p);if(u)return{glsl:es(u.glsl,r),wgsl:es(u.wgsl,r),plan:this.plan,compileTimeMs:performance.now()-t};const h=e.targetNodeId?{nodeId:e.targetNodeId,nodeOutputPort:a}:{},_=new vr(r).compile({backend:"glsl",readable:f,outputChannel:c,...h}),g=new vr(r).compile({backend:"wgsl",readable:f,outputChannel:c,...h});return this.shaderCache.set(p,{glsl:_,wgsl:g}),{glsl:es(_,r),wgsl:es(g,r),plan:this.plan,compileTimeMs:performance.now()-t}}compileNode(e,t=0){const r=Zr(this.ir),o=new vr(r).compile({nodeId:e,nodeOutputPort:t,readable:!0,backend:"glsl"});return es(o,r)}invalidateCache(){this.shaderCache.clear()}getRemoteValues(){const e={};for(const t of this.ir.nodes)t.type==="remote"&&(e[t.id]={target:t.params.target||"",key:t.params.key||"",value:t.params.value??0,label:t.params.label||t.params.key||""});return e}saveRemotePreset(e){const t=this.getRemoteValues(),r=`nt.remote_preset.${e}`;localStorage.setItem(r,JSON.stringify(t))}loadRemotePreset(e){const t=`nt.remote_preset.${e}`,r=localStorage.getItem(t);if(!r)return null;try{const o=JSON.parse(r);for(const[a,c]of Object.entries(o)){const f=this.ir.nodes.find(p=>p.id===a);!f||f.type!=="remote"||(this.engine.updateParam(a,"value",c.value),c.target&&c.key&&this.engine.updateParam(c.target,c.key,c.value))}return this.sync()}catch{return null}}getRemotePresetNames(){const e="nt.remote_preset.",t=[];for(let r=0;r<localStorage.length;r++){const o=localStorage.key(r);o!=null&&o.startsWith(e)&&t.push(o.slice(e.length))}return t.sort()}deleteRemotePreset(e){localStorage.removeItem(`nt.remote_preset.${e}`)}}class aT{constructor(){this.operators=new Map}registerOperator(e){this.operators.set(e.id,e)}getOperator(e){return this.operators.get(e)}getAll(){return Array.from(this.operators.values())}listVisible(e){return this.getAll().filter(t=>t.visible?t.visible(e):!0)}runOperator(e,t,r){const o=this.getOperator(e);if(!o)return!1;const a=o.visible?o.visible(t):!0,c=o.enabled?o.enabled(t):!0;return!a||!c?!1:(o.run(t,r),!0)}}const xc=new aT,lT=i=>xc.registerOperator(i),Vv=(i,e,t)=>xc.runOperator(i,e,t),ra=i=>i.selection.nodeIds[0]||(i.hover.kind==="node"?i.hover.nodeId:""),np=(i,e)=>{const t=i.graph.nodes.find(o=>o.id===e);if(!t||xn(t.type))return!1;const r=Mt[t.type];return!!r&&Object.keys(r.params).length>0},Hv=i=>i==="float"?"constant":i==="vec3"?"uniform_color":null,Gv=(i,e,t)=>i.graph.edges.find(r=>r.toId===e&&r.toPort===t),cT=[{id:"edit.undo",label:"Undo",category:"Edit",keywords:["undo","history","back"],shortcut:"Ctrl+Z",visible:()=>!0,run:i=>i.actions.undo()},{id:"edit.redo",label:"Redo",category:"Edit",keywords:["redo","history","forward"],shortcut:"Ctrl+Y",visible:()=>!0,run:i=>i.actions.redo()},{id:"graph.add_node",label:"Add Node...",category:"Graph",keywords:["create","new","node","add"],shortcut:"Shift+A",visible:()=>!0,run:i=>{const e=i.hover.kind==="edge"?"edge":i.hover.kind==="port"?"port":"canvas";i.actions.openNodePicker({origin:e,graphX:i.mouse.graphX,graphY:i.mouse.graphY,edgeId:i.hover.kind==="edge"?i.hover.edgeId:void 0,port:i.hover.kind==="port"?{nodeId:i.hover.nodeId,portIndex:i.hover.portIndex,direction:i.hover.direction,type:i.hover.type}:void 0}),i.actions.closeContextMenu()}},{id:"graph.copy",label:"Copy",category:"Edit",keywords:["copy","clipboard"],shortcut:"Ctrl+C",visible:i=>i.selection.nodeIds.length>0||i.hover.kind==="node",enabled:i=>{const e=i.selection.nodeIds[0]||(i.hover.kind==="node"?i.hover.nodeId:""),t=i.graph.nodes.find(r=>r.id===e);return!!t&&!xn(t.type)},run:i=>{const e=i.selection.nodeIds[0]||(i.hover.kind==="node"?i.hover.nodeId:"");e&&(i.actions.copyNode(e),i.actions.closeContextMenu())}},{id:"node.copy_params",label:"Copy Parameters",category:"Node",keywords:["copy","params","parameter","values"],visible:i=>{const e=ra(i);return!!e&&np(i,e)},run:i=>{const e=ra(i);e&&(i.actions.copyNodeParams(e),i.actions.closeContextMenu())}},{id:"node.paste_params",label:"Paste Parameters",category:"Node",keywords:["paste","params","parameter","values"],visible:i=>{const e=ra(i);return!!e&&np(i,e)},enabled:i=>{const e=ra(i);return!!e&&i.actions.canPasteNodeParams(e)},run:i=>{const e=ra(i);e&&(i.actions.pasteNodeParams(e),i.actions.closeContextMenu())}},{id:"node.reset_params",label:"Reset Parameters",category:"Node",keywords:["reset","params","defaults","parameter"],visible:i=>{const e=ra(i);return!!e&&np(i,e)},run:i=>{const e=ra(i);e&&(i.actions.resetNodeParams(e),i.actions.closeContextMenu())}},{id:"graph.paste",label:"Paste",category:"Edit",keywords:["paste","clipboard"],shortcut:"Ctrl+V",visible:()=>!0,enabled:i=>!!i.clipboard.node,run:i=>{i.actions.pasteNodeAt(i.mouse.graphX,i.mouse.graphY),i.actions.closeContextMenu()}},{id:"graph.duplicate",label:"Duplicate",category:"Edit",keywords:["duplicate","clone"],shortcut:"Ctrl+D",visible:i=>i.selection.nodeIds.length>0||i.hover.kind==="node",run:i=>{const e=i.selection.nodeIds[0]||(i.hover.kind==="node"?i.hover.nodeId:"");e&&(i.actions.duplicateNode(e),i.actions.closeContextMenu())}},{id:"graph.delete",label:"Delete",category:"Edit",keywords:["delete","remove"],shortcut:"Del",visible:i=>i.hover.kind==="node"||i.hover.kind==="edge"||i.selection.nodeIds.length>0,run:i=>{if(i.hover.kind==="edge"){i.actions.removeEdge(i.hover.edgeId),i.actions.closeContextMenu();return}const e=i.selection.nodeIds[0]||(i.hover.kind==="node"?i.hover.nodeId:"");e&&(i.actions.removeNode(e),i.actions.closeContextMenu())}},{id:"graph.disconnect_edge",label:"Disconnect Link",category:"Link",keywords:["disconnect","unlink","edge"],visible:i=>i.hover.kind==="edge",run:i=>{i.hover.kind==="edge"&&(i.actions.removeEdge(i.hover.edgeId),i.actions.closeContextMenu())}},{id:"graph.insert_node_on_edge",label:"Insert Node...",category:"Link",keywords:["insert","edge","reroute"],visible:i=>i.hover.kind==="edge",run:i=>{i.hover.kind==="edge"&&(i.actions.openNodePicker({origin:"edge",edgeId:i.hover.edgeId,graphX:i.mouse.graphX,graphY:i.mouse.graphY}),i.actions.closeContextMenu())}},{id:"graph.add_node_from_port",label:"Add Node from Port...",category:"Link",keywords:["port","add","connect"],visible:i=>i.hover.kind==="port",run:i=>{i.hover.kind==="port"&&(i.actions.openNodePicker({origin:"port",graphX:i.mouse.graphX,graphY:i.mouse.graphY,port:{nodeId:i.hover.nodeId,portIndex:i.hover.portIndex,direction:i.hover.direction,type:i.hover.type}}),i.actions.closeContextMenu())}},{id:"graph.disconnect_input_port",label:"Disconnect Input",category:"Link",keywords:["disconnect","unlink","input","port"],visible:i=>i.hover.kind==="port"&&i.hover.direction==="in",enabled:i=>i.hover.kind!=="port"||i.hover.direction!=="in"?!1:!!Gv(i,i.hover.nodeId,i.hover.portIndex),run:i=>{if(i.hover.kind!=="port"||i.hover.direction!=="in")return;const e=Gv(i,i.hover.nodeId,i.hover.portIndex);e&&(i.actions.removeEdge(e.id),i.actions.closeContextMenu())}},{id:"graph.attach_source_to_port",label:"Attach Source",category:"Link",keywords:["attach","source","constant","uniform","port"],visible:i=>i.hover.kind!=="port"||i.hover.direction!=="in"?!1:!!Hv(i.hover.type),run:i=>{if(i.hover.kind!=="port"||i.hover.direction!=="in")return;const e=Hv(i.hover.type);e&&(i.actions.addNodeFromPort({nodeId:i.hover.nodeId,portIndex:i.hover.portIndex,direction:"in"},e,i.mouse.graphX-240,i.mouse.graphY-24),i.actions.closeContextMenu())}},{id:"view.frame_all",label:"Frame All",category:"View",keywords:["frame","view","fit"],shortcut:"Home",visible:i=>i.hover.kind==="canvas",run:i=>{i.actions.frameAll(),i.actions.closeContextMenu()}},{id:"view.reset_view",label:"Reset View",category:"View",keywords:["reset","view","zoom"],visible:i=>i.hover.kind==="canvas",run:i=>{i.actions.resetView(),i.actions.closeContextMenu()}},{id:"preview.pin_to_node",label:"Pin Preview to Node",category:"Preview",keywords:["pin","preview","lock","node"],visible:i=>i.hover.kind==="node"||i.selection.nodeIds.length>0,enabled:i=>{const e=i.selection.nodeIds[0]||(i.hover.kind==="node"?i.hover.nodeId:""),t=i.graph.nodes.find(r=>r.id===e);return!!t&&!xn(t.type)},run:i=>{var t,r;const e=i.selection.nodeIds[0]||(i.hover.kind==="node"?i.hover.nodeId:"");(r=(t=i.actions).pinPreviewToNode)==null||r.call(t,e||null),i.actions.closeContextMenu()}},{id:"preview.unpin",label:"Unpin Preview",category:"Preview",keywords:["unpin","preview","unlock"],visible:()=>!0,run:i=>{var e,t;(t=(e=i.actions).pinPreviewToNode)==null||t.call(e,null),i.actions.closeContextMenu()}},{id:"debug.chaos_toggle",label:"Toggle Chaos Mode",category:"Debug",keywords:["chaos","fuzz","stress","random","crash"],visible:()=>!1,enabled:i=>!!i.actions.toggleChaosMode,run:i=>{var e,t;(t=(e=i.actions).toggleChaosMode)==null||t.call(e),i.actions.closeContextMenu()}},{id:"debug.chaos_step",label:"Chaos Step Once",category:"Debug",keywords:["chaos","fuzz","step","stress","random"],visible:()=>!1,enabled:i=>!!i.actions.stepChaosModeOnce,run:i=>{var e,t;(t=(e=i.actions).stepChaosModeOnce)==null||t.call(e),i.actions.closeContextMenu()}}];let Wv=!1;const uT=()=>{Wv||(Wv=!0,cT.forEach(lT))},Rm="nt.app.logs.v1",sm="nt:app-logs-updated",jv=800,dT=1500;function Pm(){try{const i=localStorage.getItem(Rm);if(!i)return[];const e=JSON.parse(i);return Array.isArray(e)?e.filter(t=>t&&typeof t.id=="string"&&typeof t.ts=="string"&&typeof t.level=="string"&&typeof t.source=="string"&&typeof t.message=="string"):[]}catch{return[]}}function i_(i){try{localStorage.setItem(Rm,JSON.stringify(i))}catch{}}function r_(){try{window.dispatchEvent(new CustomEvent(sm))}catch{}}function fT(){return`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,9)}`}function Tc(){return Pm()}function Cn(i){const e={id:fT(),ts:new Date().toISOString(),level:i.level,source:i.source,message:i.message,details:i.details,event_type:i.event_type,node_context:i.node_context,graph_hash:i.graph_hash,frame_id:i.frame_id},t=Pm(),r=t.length>0?t[t.length-1]:null;if(r){const o=Date.parse(r.ts),a=Date.parse(e.ts);if(r.level===e.level&&r.source===e.source&&r.message===e.message&&(r.details||"")===(e.details||"")&&(r.event_type||"")===(e.event_type||"")&&(r.node_context||"")===(e.node_context||"")&&(r.graph_hash||"")===(e.graph_hash||"")&&Number.isFinite(o)&&Number.isFinite(a)&&a-o<=dT)return r}return t.push(e),t.length>jv&&t.splice(0,t.length-jv),i_(t),r_(),e}function s_(){i_([]),r_()}function Ud(i,e=!0){const t=`[${i.ts}] ${i.level.toUpperCase()} [${i.source}] ${i.message}`,r=[];i.event_type&&r.push(`event=${i.event_type}`),i.graph_hash&&r.push(`graph=${i.graph_hash.slice(0,24)}`),typeof i.frame_id=="number"&&r.push(`frame=${i.frame_id}`),i.node_context&&r.push(`node=${i.node_context}`);const o=r.length>0?`
${r.join(" | ")}`:"";return!e||!i.details?`${t}${o}`:`${t}${o}
${i.details}`}function o_(){const i=Pm(),e=i.length===0?"[No logs recorded]":i.map(c=>Ud(c,!0)).join(`

`),t=new Date().toISOString().replace(/[:.]/g,"-"),r=new Blob([e],{type:"text/plain;charset=utf-8"}),o=URL.createObjectURL(r),a=document.createElement("a");a.href=o,a.download=`atomicgraph-logs-${t}.log`,a.click(),URL.revokeObjectURL(o)}function a_(i){const e=()=>i(Tc()),t=r=>{r.key===Rm&&i(Tc())};return window.addEventListener(sm,e),window.addEventListener("storage",t),()=>{window.removeEventListener(sm,e),window.removeEventListener("storage",t)}}const l_="nt.monitor.runs.v1",Xv=120;function c_(){try{const i=localStorage.getItem(l_);if(!i)return[];const e=JSON.parse(i);return Array.isArray(e)?e.filter(t=>t&&typeof t.id=="string"&&typeof t.ts=="string"&&typeof t.mode=="string"&&typeof t.totalMs=="number"&&Array.isArray(t.checks)):[]}catch{return[]}}function u_(i){try{localStorage.setItem(l_,JSON.stringify(i))}catch{}}function hT(){return c_()}function pT(i){const e=c_();return e.push(i),e.length>Xv&&e.splice(0,e.length-Xv),u_(e),e}function mT(){u_([])}function gT(){return`${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`}function Yv(i){return i==="fail"?3:i==="warn"?2:1}function ip(i){return i.failCount>0?"fail":i.warnCount>0?"warn":"ok"}function qv(i,e){if(i.length===0)return 0;const t=[...i].sort((o,a)=>o-a),r=Math.max(0,Math.min(t.length-1,Math.floor((t.length-1)*e)));return t[r]}const ol=()=>`d_${Math.random().toString(36).slice(2,9)}`;function Pc(i){const e=i.children;if(!Array.isArray(e)||e.length!==2)return null;const[t,r]=e;return!t||!r?null:[t,r]}function Ao(i,e){if(i.kind==="panel")return i.id===e?i:null;const t=Pc(i);return t?Ao(t[0],e)||Ao(t[1],e):null}function om(i,e){if(i.kind==="panel")return e(i);const t=Pc(i);return t?{...i,children:[om(t[0],e),om(t[1],e)]}:i}function Cs(i,e,t){return om(i,r=>r.id===e?t(r):r)}function al(i,e){if(i.id===e)return null;if(i.kind==="panel")return i;const t=Pc(i);if(!t)return i;const[r,o]=t;if(r.id===e)return o;if(o.id===e)return r;const a=al(r,e),c=al(o,e);return a?c?{...i,children:[a,c]}:r:o}function _c(i,e,t,r,o,a=.5){if(i.id===e)return{kind:"split",id:ol(),direction:t,ratio:r==="before"?1-a:a,children:r==="before"?[o,i]:[i,o]};if(i.kind==="panel")return i;const c=Pc(i);return c?{...i,children:[_c(c[0],e,t,r,o,a),_c(c[1],e,t,r,o,a)]}:i}function xl(i){if(i.kind==="panel")return[i];const e=Pc(i);return e?[...xl(e[0]),...xl(e[1])]:[]}const Kv=i=>{let e;const t=new Set,r=(u,h)=>{const _=typeof u=="function"?u(e):u;if(!Object.is(_,e)){const g=e;e=h??(typeof _!="object"||_===null)?_:Object.assign({},e,_),t.forEach(m=>m(e,g))}},o=()=>e,f={setState:r,getState:o,getInitialState:()=>p,subscribe:u=>(t.add(u),()=>t.delete(u))},p=e=i(r,o,f);return f},vT=(i=>i?Kv(i):Kv),xT=i=>i;function _T(i,e=xT){const t=ts.useSyncExternalStore(i.subscribe,ts.useCallback(()=>e(i.getState()),[i,e]),ts.useCallback(()=>e(i.getInitialState()),[i,e]));return ts.useDebugValue(t),t}const yT=i=>{const e=vT(i),t=r=>_T(e,r);return Object.assign(t,e),t},ST=(i=>yT);function MT(i,e){let t;try{t=i()}catch{return}return{getItem:o=>{var a;const c=p=>p===null?null:JSON.parse(p,void 0),f=(a=t.getItem(o))!=null?a:null;return f instanceof Promise?f.then(c):c(f)},setItem:(o,a)=>t.setItem(o,JSON.stringify(a,void 0)),removeItem:o=>t.removeItem(o)}}const am=i=>e=>{try{const t=i(e);return t instanceof Promise?t:{then(r){return am(r)(t)},catch(r){return this}}}catch(t){return{then(r){return this},catch(r){return am(r)(t)}}}},bT=(i,e)=>(t,r,o)=>{let a={storage:MT(()=>window.localStorage),partialize:x=>x,version:0,merge:(x,y)=>({...y,...x}),...e},c=!1,f=0;const p=new Set,u=new Set;let h=a.storage;if(!h)return i((...x)=>{console.warn(`[zustand persist middleware] Unable to update item '${a.name}', the given storage is currently unavailable.`),t(...x)},r,o);const _=()=>{const x=a.partialize({...r()});return h.setItem(a.name,{state:x,version:a.version})},g=o.setState;o.setState=(x,y)=>(g(x,y),_());const m=i((...x)=>(t(...x),_()),r,o);o.getInitialState=()=>m;let M;const T=()=>{var x,y;if(!h)return;const L=++f;c=!1,p.forEach(I=>{var $;return I(($=r())!=null?$:m)});const k=((y=a.onRehydrateStorage)==null?void 0:y.call(a,(x=r())!=null?x:m))||void 0;return am(h.getItem.bind(h))(a.name).then(I=>{if(I)if(typeof I.version=="number"&&I.version!==a.version){if(a.migrate){const $=a.migrate(I.state,I.version);return $ instanceof Promise?$.then(w=>[!0,w]):[!0,$]}console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,I.state];return[!1,void 0]}).then(I=>{var $;if(L!==f)return;const[w,R]=I;if(M=a.merge(R,($=r())!=null?$:m),t(M,!0),w)return _()}).then(()=>{L===f&&(k==null||k(M,void 0),M=r(),c=!0,u.forEach(I=>I(M)))}).catch(I=>{L===f&&(k==null||k(void 0,I))})};return o.persist={setOptions:x=>{a={...a,...x},x.storage&&(h=x.storage)},clearStorage:()=>{h==null||h.removeItem(a.name)},getOptions:()=>a,rehydrate:()=>T(),hasHydrated:()=>c,onHydrate:x=>(p.add(x),()=>{p.delete(x)}),onFinishHydration:x=>(u.add(x),()=>{u.delete(x)})},a.skipHydration||T(),M||m},wT=bT,pd={kind:"split",id:"root",direction:"horizontal",ratio:.62,children:[{kind:"split",id:"s-graph-explorer",direction:"vertical",ratio:.78,children:[{kind:"panel",id:"p-graph",tabs:[{id:"v-graph",type:"graph",title:"Graph"}],activeTabId:"v-graph",pinned:!1},{kind:"panel",id:"p-explorer",tabs:[{id:"v-explorer",type:"explorer",title:"Explorer"}],activeTabId:"v-explorer",pinned:!1}]},{kind:"split",id:"s-preview-code",direction:"vertical",ratio:.5,children:[{kind:"panel",id:"p-preview",tabs:[{id:"v-preview",type:"preview",title:"2D Preview"},{id:"v-preview3d",type:"preview3d",title:"3D Preview"}],activeTabId:"v-preview",pinned:!1},{kind:"panel",id:"p-code",tabs:[{id:"v-code",type:"code",title:"Code"}],activeTabId:"v-code",pinned:!1}]}]};function md(i){return JSON.parse(JSON.stringify(i))}function d_(i){const e=i.tabs.findIndex(o=>o.type==="preview");if(e===-1)return i;const t=i.tabs.findIndex(o=>o.type==="preview3d"),r=[...i.tabs];if(t===-1)return r.splice(e+1,0,{id:ol(),type:"preview3d",title:"3D Preview"}),{...i,tabs:r};if(t!==e+1){const[o]=r.splice(t,1),a=t<e?e:e+1;return r.splice(a,0,o),{...i,tabs:r}}return i}function ll(i){return i.kind==="panel"?d_(i):{...i,children:[ll(i.children[0]),ll(i.children[1])]}}function Zv(i){return i.map(e=>({...e,panel:d_(e.panel)}))}function gd(i){if(i.kind!=="split"||i.id!=="root"||i.direction!=="horizontal")return i;const[e,t]=i.children;return e.kind==="panel"&&e.id==="p-library"&&e.tabs.length===1&&e.tabs[0].type==="library"?t.kind==="split"?{...t,id:"root"}:t:i}const _l=i=>!!i&&typeof i=="object"&&!Array.isArray(i),ET=i=>_l(i)&&typeof i.id=="string"&&typeof i.type=="string"&&typeof i.title=="string",f_=i=>!(!_l(i)||i.kind!=="panel"||typeof i.id!="string"||!Array.isArray(i.tabs)||!i.tabs.every(ET)||!(i.activeTabId===null||typeof i.activeTabId=="string")||typeof i.pinned!="boolean"||i.activeTabId&&!i.tabs.some(e=>e.id===i.activeTabId)),Fd=(i,e=0)=>e>32||!_l(i)?!1:i.kind==="panel"?f_(i):i.kind!=="split"||typeof i.id!="string"||i.direction!=="horizontal"&&i.direction!=="vertical"||typeof i.ratio!="number"||!Number.isFinite(i.ratio)||!Array.isArray(i.children)||i.children.length!==2?!1:Fd(i.children[0],e+1)&&Fd(i.children[1],e+1),h_=i=>_l(i)&&typeof i.id=="string"&&f_(i.panel)&&typeof i.x=="number"&&Number.isFinite(i.x)&&typeof i.y=="number"&&Number.isFinite(i.y)&&typeof i.width=="number"&&Number.isFinite(i.width)&&typeof i.height=="number"&&Number.isFinite(i.height),p_="nt-workspace-presets",rp=()=>{try{const i=localStorage.getItem(p_);if(!i)return{};const e=JSON.parse(i);if(!_l(e))return{};const t={};for(const[r,o]of Object.entries(e)){if(!_l(o)||!Fd(o.root))continue;const a=Array.isArray(o.floating)?o.floating.filter(h_):[],c=typeof o.maximizedPanelId=="string"?o.maximizedPanelId:null;t[r]={root:o.root,floating:a,maximizedPanelId:c&&Ao(o.root,c)?c:null}}return t}catch{return{}}},TT=i=>{try{localStorage.setItem(p_,JSON.stringify(i))}catch{}},Ic=ST()(wT((i,e)=>({root:gd(ll(md(pd))),floating:[],maximizedPanelId:null,setRatio:(t,r)=>i(o=>{const a=c=>c.kind==="split"&&c.id===t?{...c,ratio:r}:c.kind==="split"?{...c,children:[a(c.children[0]),a(c.children[1])]}:c;return{root:a(o.root)}}),setActiveTab:(t,r)=>i(o=>({root:Cs(o.root,t,a=>({...a,activeTabId:r}))})),closeTab:(t,r)=>i(o=>{const a=Ao(o.root,t);if(!a)return o;const c=a.tabs.filter(f=>f.id!==r);return c.length===0?{root:al(o.root,t)||md(pd)}:{root:Cs(o.root,t,f=>{var p;return{...f,tabs:c,activeTabId:f.activeTabId===r?((p=c[0])==null?void 0:p.id)||null:f.activeTabId}})}}),closePanel:t=>i(r=>({root:al(r.root,t)||md(pd),maximizedPanelId:r.maximizedPanelId===t?null:r.maximizedPanelId})),moveTab:(t,r,o,a)=>i(c=>{if(t===o&&a==="center")return c;const f=Ao(c.root,t);if(!f)return c;const p=f.tabs.find(_=>_.id===r);if(!p)return c;let u=c.root;const h=f.tabs.filter(_=>_.id!==r);if(u=Cs(u,t,_=>{var g;return{..._,tabs:h,activeTabId:_.activeTabId===r?((g=h[0])==null?void 0:g.id)||null:_.activeTabId}}),h.length===0&&t!==o&&(u=al(u,t)||u),a==="center")u=Cs(u,o,_=>({..._,tabs:[..._.tabs,p],activeTabId:p.id}));else{const _=a==="left"||a==="right"?"horizontal":"vertical",g=a==="left"||a==="top"?"before":"after",m={kind:"panel",id:ol(),tabs:[p],activeTabId:p.id,pinned:!1};u=_c(u,o,_,g,m,.5)}return{root:u}}),togglePin:t=>i(r=>({root:Cs(r.root,t,o=>({...o,pinned:!o.pinned}))})),toggleMaximize:t=>i(r=>({maximizedPanelId:r.maximizedPanelId===t?null:t})),undockPanel:t=>i(r=>{const o=Ao(r.root,t);if(!o)return r;const a=al(r.root,t);if(!a)return r;const c={id:ol(),panel:{...o},x:100,y:100,width:500,height:400};return{root:a,floating:[...r.floating,c],maximizedPanelId:r.maximizedPanelId===t?null:r.maximizedPanelId}}),redockPanel:(t,r,o)=>i(a=>{const c=a.floating.findIndex(h=>h.id===t);if(c===-1)return a;const f=a.floating[c],p=a.floating.filter((h,_)=>_!==c);let u=a.root;if(r&&o)o==="center"?u=Cs(u,r,h=>{var _;return{...h,tabs:[...h.tabs,...f.panel.tabs],activeTabId:((_=f.panel.tabs[0])==null?void 0:_.id)||h.activeTabId}}):u=_c(u,r,o==="left"||o==="right"?"horizontal":"vertical",o==="left"||o==="top"?"before":"after",f.panel);else{const h=xl(u),_=h.find(g=>!g.pinned)||h[0];_&&(u=Cs(u,_.id,g=>{var m;return{...g,tabs:[...g.tabs,...f.panel.tabs],activeTabId:((m=f.panel.tabs[0])==null?void 0:m.id)||g.activeTabId}}))}return{root:u,floating:p}}),moveFloating:(t,r,o)=>i(a=>({floating:a.floating.map(c=>c.id===t?{...c,x:r,y:o}:c)})),resizeFloating:(t,r,o)=>i(a=>({floating:a.floating.map(c=>c.id===t?{...c,width:r,height:o}:c)})),addView:(t,r)=>{const o=ol();return i(a=>{const c=r||t.charAt(0).toUpperCase()+t.slice(1),f={id:o,type:t,title:c},p=xl(a.root),u=p.find(m=>m.tabs.length===0&&!m.pinned);if(u)return{root:Cs(a.root,u.id,m=>({...m,tabs:[f],activeTabId:f.id}))};const h=p.find(m=>!m.pinned);if(h)return{root:Cs(a.root,h.id,m=>({...m,tabs:[...m.tabs,f],activeTabId:f.id}))};const _={kind:"panel",id:ol(),tabs:[f],activeTabId:f.id,pinned:!1},g=p[p.length-1];return g?{root:_c(a.root,g.id,"horizontal","after",_)}:{root:_}}),o},resetLayout:()=>i({root:gd(ll(md(pd))),floating:[],maximizedPanelId:null}),savePreset:t=>{const r=e(),o=rp();o[t]={root:r.root,floating:r.floating,maximizedPanelId:r.maximizedPanelId},TT(o)},loadPreset:t=>{const o=rp()[t];return o!=null&&o.root?(i({root:gd(ll(o.root)),floating:Zv(o.floating||[]),maximizedPanelId:o.maximizedPanelId||null}),!0):!1},getPresetNames:()=>{const t=rp();return Object.keys(t)}}),{name:"nt-workspace-layout",partialize:i=>({root:i.root,floating:i.floating,maximizedPanelId:i.maximizedPanelId}),merge:(i,e)=>{const t=i||{},r={...e};Fd(t.root)&&(r.root=gd(ll(t.root))),Array.isArray(t.floating)&&(r.floating=Zv(t.floating.filter(h_)));const o=t.maximizedPanelId;return(o===null||typeof o=="string")&&(r.maximizedPanelId=o),r.maximizedPanelId&&!Ao(r.root,r.maximizedPanelId)&&(r.maximizedPanelId=null),r}}));class m_ extends ts.Component{constructor(){super(...arguments),this.state={error:null,info:null},this.onReset=()=>{this.setState({error:null,info:null})}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){Cn({level:"error",source:"view-render",message:`${this.props.viewType}:${this.props.viewId} ${e.name}: ${e.message}`,details:`${t.componentStack||""}
${e.stack||""}`.trim()}),this.setState({info:t})}render(){const{error:e,info:t}=this.state;return e?E.jsxs("div",{style:CT,children:[E.jsxs("div",{style:AT,children:["View crashed: ",this.props.viewType]}),E.jsx("div",{style:RT,children:"The panel is isolated. Other panels should keep working."}),E.jsx("pre",{style:PT,children:`${e.name}: ${e.message}`}),(t==null?void 0:t.componentStack)&&E.jsx("pre",{style:IT,children:t.componentStack}),E.jsxs("div",{style:LT,children:[E.jsx("button",{style:Jv,onClick:this.onReset,children:"Retry View"}),E.jsx("button",{style:Jv,onClick:()=>window.location.reload(),children:"Reload App"})]})]}):this.props.children}}const CT={width:"100%",height:"100%",boxSizing:"border-box",padding:10,background:"#1b222e",color:"#d7e4ff",overflow:"auto",fontFamily:"'Segoe UI','Cascadia Code',sans-serif"},AT={fontSize:13,fontWeight:700,color:"#ffb5b5",marginBottom:6},RT={fontSize:11,color:"#9db0d5",marginBottom:8},PT={margin:0,padding:8,borderRadius:6,border:"1px solid #704040",background:"#2b1616",color:"#ffd2d2",whiteSpace:"pre-wrap",wordBreak:"break-word",fontSize:11},IT={margin:"8px 0 0",padding:8,borderRadius:6,border:"1px solid #3f557f",background:"#121b2a",color:"#bfd1f7",whiteSpace:"pre-wrap",wordBreak:"break-word",fontSize:10,maxHeight:200,overflow:"auto"},LT={display:"flex",gap:8,marginTop:10},Jv={background:"#264572",border:"1px solid #5f80b2",color:"#edf3ff",borderRadius:5,padding:"5px 10px",fontSize:11,cursor:"pointer"},sp="application/nt-dock-tab";function g_({panel:i,renderView:e,isMaximized:t}){const{setActiveTab:r,closeTab:o,closePanel:a,moveTab:c,togglePin:f,toggleMaximize:p,undockPanel:u}=Ic(),[h,_]=N.useState(null),g=N.useRef(null),m=i.tabs.find(k=>k.id===i.activeTabId)||i.tabs[0],M=N.useCallback((k,I)=>{k.dataTransfer.setData(sp,JSON.stringify({panelId:i.id,tabId:I})),k.dataTransfer.effectAllowed="move"},[i.id]),T=N.useCallback(k=>{var b;const I=(b=g.current)==null?void 0:b.getBoundingClientRect();if(!I)return"center";const $=(k.clientX-I.left)/I.width,w=(k.clientY-I.top)/I.height,R=.22;return $<R?"left":$>1-R?"right":w<R?"top":w>1-R?"bottom":"center"},[]),x=N.useCallback(k=>{k.dataTransfer.types.includes(sp)&&(k.preventDefault(),k.dataTransfer.dropEffect="move",_(T(k)))},[T]),y=N.useCallback(()=>_(null),[]),L=N.useCallback(k=>{_(null);const I=k.dataTransfer.getData(sp);if(!I)return;k.preventDefault();let $=null;try{$=JSON.parse(I)}catch{return}const w=$==null?void 0:$.panelId,R=$==null?void 0:$.tabId;if(!w||!R)return;const b=T(k);c(w,R,i.id,b)},[T,c,i.id]);return E.jsxs("div",{ref:g,className:"dk-panel",onDragOver:x,onDragLeave:y,onDrop:L,children:[E.jsxs("div",{className:"dk-header",children:[E.jsx("div",{className:"dk-tabs",children:i.tabs.map(k=>E.jsxs("div",{className:`dk-tab ${k.id===i.activeTabId?"active":""}`,draggable:!0,onDragStart:I=>M(I,k.id),onMouseDown:()=>r(i.id,k.id),children:[E.jsx("span",{className:"dk-tab-label",children:k.title}),E.jsx("button",{className:"dk-tab-close",onMouseDown:I=>I.stopPropagation(),onClick:I=>{I.stopPropagation(),o(i.id,k.id)},children:"x"})]},k.id))}),E.jsxs("div",{className:"dk-actions",children:[E.jsx("button",{className:`dk-action-btn ${i.pinned?"active":""}`,onClick:()=>f(i.id),title:i.pinned?"Unpin":"Pin",children:i.pinned?"P":"p"}),E.jsx("button",{className:"dk-action-btn",onClick:()=>u(i.id),title:"Undock",children:"u"}),E.jsx("button",{className:`dk-action-btn ${t?"active":""}`,onClick:()=>p(i.id),title:t?"Minimize":"Maximize",children:t?"m":"M"}),E.jsx("button",{className:"dk-action-btn dk-close-btn",onClick:()=>a(i.id),title:"Close",children:"x"})]})]}),E.jsxs("div",{className:"dk-content",children:[m&&E.jsx(m_,{viewType:m.type,viewId:m.id,children:e(m.type,m.id)}),!m&&E.jsx("div",{className:"dk-empty",children:"Empty dock"})]}),h&&E.jsx("div",{className:"dk-drop-overlay",children:E.jsx("div",{className:`dk-drop-zone dk-drop-${h}`})})]})}function DT({fp:i,renderView:e}){const{moveFloating:t,resizeFloating:r,redockPanel:o}=Ic(),a=N.useRef(null),c=N.useRef(null),f=N.useCallback(u=>{u.preventDefault(),a.current={ox:u.clientX-i.x,oy:u.clientY-i.y};const h=g=>{a.current&&t(i.id,g.clientX-a.current.ox,g.clientY-a.current.oy)},_=()=>{a.current=null,document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",_),document.body.style.cursor=""};document.addEventListener("mousemove",h),document.addEventListener("mouseup",_),document.body.style.cursor="move"},[i.id,i.x,i.y,t]),p=N.useCallback(u=>{u.preventDefault(),u.stopPropagation(),c.current={ow:i.width,oh:i.height,sx:u.clientX,sy:u.clientY};const h=g=>{if(!c.current)return;const m=Math.max(200,c.current.ow+g.clientX-c.current.sx),M=Math.max(150,c.current.oh+g.clientY-c.current.sy);r(i.id,m,M)},_=()=>{c.current=null,document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",_),document.body.style.cursor=""};document.addEventListener("mousemove",h),document.addEventListener("mouseup",_),document.body.style.cursor="nwse-resize"},[i.id,i.width,i.height,r]);return E.jsxs("div",{className:"dk-floating",style:{left:i.x,top:i.y,width:i.width,height:i.height},children:[E.jsxs("div",{className:"dk-floating-title",onMouseDown:f,children:[E.jsx("span",{className:"dk-tab-label",children:i.panel.tabs.map(u=>u.title).join(", ")}),E.jsx("button",{className:"dk-action-btn",onClick:()=>o(i.id),title:"Redock",children:"R"})]}),E.jsx("div",{className:"dk-content",children:i.panel.tabs.length>0?(()=>{const u=i.panel.tabs.find(h=>h.id===i.panel.activeTabId)||i.panel.tabs[0];return E.jsx(m_,{viewType:u.type,viewId:u.id,children:e(u.type,u.id)})})():E.jsx("div",{className:"dk-empty",children:"Empty"})}),E.jsx("div",{className:"dk-resize-handle",onMouseDown:p})]})}function NT({renderView:i}){const{root:e,floating:t,maximizedPanelId:r,toggleMaximize:o,resetLayout:a}=Ic();N.useEffect(()=>{const f=p=>{var u,h;if(p.shiftKey&&p.code==="Space"){const _=(u=p.target)==null?void 0:u.tagName;if(_==="INPUT"||_==="TEXTAREA"||_==="SELECT")return;if(p.preventDefault(),r)o(r);else{const g=(h=document.activeElement)==null?void 0:h.closest("[data-panel-id]"),m=g==null?void 0:g.getAttribute("data-panel-id");m&&o(m)}}};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[r,o]);const c=r?Ao(e,r):null;return E.jsxs("div",{className:"dk-workspace",children:[c?E.jsx("div",{className:"dk-maximized","data-panel-id":c.id,children:E.jsx(g_,{panel:c,renderView:i,isMaximized:!0})}):E.jsx(lm,{node:e,renderView:i}),t.map(f=>E.jsx(DT,{fp:f,renderView:i},f.id))]})}function lm({node:i,renderView:e}){return i.kind==="panel"?E.jsx("div",{className:"dk-leaf","data-panel-id":i.id,children:E.jsx(g_,{panel:i,renderView:e,isMaximized:!1})}):E.jsx(kT,{splitId:i.id,direction:i.direction,ratio:i.ratio,first:E.jsx(lm,{node:i.children[0],renderView:e}),second:E.jsx(lm,{node:i.children[1],renderView:e})})}function kT({splitId:i,direction:e,ratio:t,first:r,second:o}){const{setRatio:a}=Ic(),c=N.useRef(null),f=N.useRef(a);f.current=a;const p=N.useCallback(g=>{g.preventDefault();const m=c.current;if(!m)return;const M=x=>{const y=m.getBoundingClientRect();let L;e==="horizontal"?L=(x.clientX-y.left)/y.width:L=(x.clientY-y.top)/y.height,L=Math.max(.08,Math.min(.92,L)),f.current(i,L)},T=()=>{document.removeEventListener("mousemove",M),document.removeEventListener("mouseup",T),document.body.style.cursor="",document.body.style.userSelect=""};document.addEventListener("mousemove",M),document.addEventListener("mouseup",T),document.body.style.cursor=e==="horizontal"?"col-resize":"row-resize",document.body.style.userSelect="none"},[i,e]),u=e==="horizontal",h=`${t*100}%`,_=`${(1-t)*100}%`;return E.jsxs("div",{ref:c,className:`dk-split dk-split-${u?"h":"v"}`,children:[E.jsx("div",{className:"dk-split-child",style:u?{width:h}:{height:h},children:r}),E.jsx("div",{className:`nt-splitter nt-splitter-${u?"x":"y"}`,onMouseDown:p}),E.jsx("div",{className:"dk-split-child",style:u?{width:_}:{height:_},children:o})]})}const Ps=28,Ro=36,gc=128,v_=gc+12,UT=210,FT=240,mr=6,OT=i=>{var t,r;const e=(t=Mt[i])==null?void 0:t.category;return((r=Ri[e])==null?void 0:r.color)??"#888"},BT=i=>{var o;const e=Mt[i];if(!e)return Ro+Ps+10;const t=e.inputs.length+Object.keys(e.params).length,r=((o=e.outputs)==null?void 0:o.length)??1;return Ro+v_+Math.max(t,r,1)*Ps+10};function zT({pk:i,val:e,meta:t,nodeId:r,onUpdate:o}){if(!t)return null;if(t.type==="float"){const a=t.step<.05?3:t.step<1?2:1;return E.jsxs("div",{style:{padding:"3px 10px",height:Ps,display:"flex",flexDirection:"column",justifyContent:"center"},children:[E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:3},children:[E.jsx("span",{style:{fontSize:10,color:"#e2e8f0",letterSpacing:1.2,textTransform:"uppercase",userSelect:"none"},children:i}),E.jsx("span",{style:{fontSize:11,color:"#f8fafc",fontFamily:"monospace"},children:Number(e).toFixed(a)})]}),E.jsx("input",{type:"range",min:t.min,max:t.max,step:t.step,value:e,onMouseDown:c=>c.stopPropagation(),onChange:c=>o(r,i,parseFloat(c.target.value)),style:{width:"100%",accentColor:"#64748b",cursor:"pointer",height:2}})]})}return t.type==="select"?E.jsxs("div",{style:{display:"flex",alignItems:"center",height:Ps,padding:"0 10px",gap:6},children:[E.jsx("span",{style:{fontSize:10,color:"#e2e8f0",letterSpacing:1.2,textTransform:"uppercase",userSelect:"none",flex:1},children:i}),E.jsx("select",{value:e,onMouseDown:a=>a.stopPropagation(),onChange:a=>o(r,i,a.target.value),style:{background:"#0b0b17",border:"1px solid #334155",color:"#f1f5f9",borderRadius:3,padding:"2px 5px",fontSize:10,fontFamily:"inherit",cursor:"pointer",outline:"none",maxWidth:115},children:t.options.map(a=>E.jsx("option",{value:a,children:a},a))})]}):t.type==="bool"?E.jsxs("div",{style:{display:"flex",alignItems:"center",height:Ps,padding:"0 10px",gap:6},children:[E.jsx("span",{style:{fontSize:10,color:"#e2e8f0",letterSpacing:1.2,textTransform:"uppercase",userSelect:"none",flex:1},children:i}),E.jsx("input",{type:"checkbox",checked:!!e,onMouseDown:a=>a.stopPropagation(),onChange:a=>o(r,i,a.target.checked),style:{accentColor:"#94a3b8",cursor:"pointer"}})]}):null}const $T={exact:"#22c55e",cast:"#eab308",invalid:"#ef4444"},Qv=i=>({float:"#94a3b8",vec2:"#3b82f6",vec3:"#10b981",vec4:"#8b5cf6",Texture2D:"#a78bfa",Field:"#c084fc"})[i]??"#94a3b8";function VT(i,e){if(!i||!e||i===e)return"exact";const t=new Set(["float","vec2","vec3","vec4"]);return t.has(i)&&t.has(e)?"cast":"invalid"}function HT(i,e){var a;const t=((a=Ri[i.category])==null?void 0:a.label)??i.category.toUpperCase(),r=i.inputs.length>0?i.inputs.map(c=>`${c.label}:${c.type}`).join(", "):"none",o=i.outputs.length>0?i.outputs.map(c=>`${c.label}:${c.type}`).join(", "):"none";return[`${i.label} (${e.type})`,`Category: ${t}`,`Inputs: ${r}`,`Outputs: ${o}`,"Tip: double-click to open atom/subgraph"].join(`
`)}function GT({node:i,allNodes:e,isSel:t,onDrag:r,onUpdate:o,onDelete:a,onSelect:c,compact:f}){var R;const p="#0e4d6b",u=i.params.target||"",h=i.params.key||"",_=i.params.value??.5,g=i.params.label||h||"Value",m=e.find(b=>b.id===u),M=m?Mt[m.type]:null,T=(R=M==null?void 0:M.params)==null?void 0:R[h],x=(T==null?void 0:T.min)??0,y=(T==null?void 0:T.max)??1,L=(T==null?void 0:T.step)??.01,k=L<.05?3:L<1?2:1,I=e.filter(b=>!xn(b.type)&&b.type!=="remote"&&b.id!==i.id),$=M?Object.keys(M.params).filter(b=>M.params[b].type==="float"||M.params[b].type==="int"):[],w=Ro+84+48+10;return E.jsxs("div",{draggable:!1,title:"Remote node: bind and drive another node parameter from one control.",onMouseDown:b=>{b.stopPropagation(),c(i.id)},style:{position:"absolute",left:i.x,top:i.y,width:FT,height:w,background:"#0c0c17",border:`1px solid ${t?p:p+"22"}`,borderRadius:7,boxShadow:t?`0 0 0 2.5px ${p}50,0 8px 36px #000000cc`:"0 4px 24px #000000aa",pointerEvents:"all",overflow:"visible"},children:[E.jsxs("div",{onMouseDown:b=>{b.preventDefault(),r(b,i.id)},style:{height:Ro,display:"flex",alignItems:"center",padding:"0 10px",gap:8,cursor:"grab",background:p,borderBottom:`1px solid ${p}99`,borderRadius:"6px 6px 0 0",userSelect:"none"},children:[E.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#ffffff",flex:1,letterSpacing:.3},children:"Remote"}),E.jsx("button",{onMouseDown:b=>b.stopPropagation(),onClick:b=>{b.stopPropagation(),a(i.id)},style:{background:"none",border:"none",color:"#94a3b8",cursor:"pointer",fontSize:14,lineHeight:1,padding:"0 1px",transition:"color .12s"},onMouseEnter:b=>b.currentTarget.style.color="#f87171",onMouseLeave:b=>b.currentTarget.style.color="#94a3b8",children:"x"})]}),f?E.jsx("div",{style:{height:w-Ro,display:"grid",placeItems:"center",color:"#8ea3c8",fontSize:10,letterSpacing:.4},children:"REMOTE LINK"}):E.jsxs(E.Fragment,{children:[E.jsxs("div",{style:{padding:"4px 10px"},children:[E.jsxs("div",{style:{display:"flex",alignItems:"center",height:28,gap:6},children:[E.jsx("span",{style:{fontSize:9,color:"#cbd5e1",letterSpacing:1,textTransform:"uppercase",width:48},children:"Target"}),E.jsxs("select",{value:u,onMouseDown:b=>b.stopPropagation(),onChange:b=>o(i.id,"target",b.target.value),style:{background:"#0b0b17",border:"1px solid #334155",color:"#f1f5f9",borderRadius:3,padding:"2px 5px",fontSize:10,fontFamily:"inherit",cursor:"pointer",outline:"none",flex:1},children:[E.jsx("option",{value:"",children:"-- select --"}),I.map(b=>{const C=Mt[b.type];return E.jsxs("option",{value:b.id,children:[(C==null?void 0:C.label)||b.type," (",b.id,")"]},b.id)})]})]}),E.jsxs("div",{style:{display:"flex",alignItems:"center",height:28,gap:6},children:[E.jsx("span",{style:{fontSize:9,color:"#cbd5e1",letterSpacing:1,textTransform:"uppercase",width:48},children:"Param"}),E.jsxs("select",{value:h,onMouseDown:b=>b.stopPropagation(),onChange:b=>{o(i.id,"key",b.target.value),m&&b.target.value in m.params&&o(i.id,"value",m.params[b.target.value])},style:{background:"#0b0b17",border:"1px solid #334155",color:"#f1f5f9",borderRadius:3,padding:"2px 5px",fontSize:10,fontFamily:"inherit",cursor:"pointer",outline:"none",flex:1},children:[E.jsx("option",{value:"",children:"-- select --"}),$.map(b=>E.jsx("option",{value:b,children:b},b))]})]}),E.jsxs("div",{style:{display:"flex",alignItems:"center",height:28,gap:6},children:[E.jsx("span",{style:{fontSize:9,color:"#cbd5e1",letterSpacing:1,textTransform:"uppercase",width:48},children:"Label"}),E.jsx("input",{type:"text",value:i.params.label||"",placeholder:h||"Label",onMouseDown:b=>b.stopPropagation(),onChange:b=>o(i.id,"label",b.target.value),style:{background:"#0b0b17",border:"1px solid #334155",color:"#f1f5f9",borderRadius:3,padding:"2px 5px",fontSize:10,fontFamily:"inherit",outline:"none",flex:1}})]})]}),T&&E.jsxs("div",{style:{padding:"4px 10px 8px"},children:[E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[E.jsx("span",{style:{fontSize:10,fontWeight:600,color:"#e2e8f0",letterSpacing:.3},children:g}),E.jsx("span",{style:{fontSize:11,color:"#f8fafc",fontFamily:"monospace"},children:Number(_).toFixed(k)})]}),E.jsx("input",{type:"range",min:x,max:y,step:L,value:_,onMouseDown:b=>b.stopPropagation(),onChange:b=>o(i.id,"value",parseFloat(b.target.value)),style:{width:"100%",accentColor:"#64748b",cursor:"pointer",height:6}})]})]})]})}function WT({node:i,edges:e,allNodes:t,isSel:r,isConn:o,connFrom:a,connFromPort:c,connFromType:f,snapTarget:p,onDrag:u,onOut:h,onIn:_,onUpdate:g,onDelete:m,onSelect:M,onOpen:T,previewUrl:x,compileMs:y,lodMode:L="full"}){var C;const k=Mt[i.type];if(!k)return null;const I=L==="compact"&&!r&&!o;if(i.type==="remote"&&t)return E.jsx(GT,{node:i,allNodes:t,isSel:r,onDrag:u,onUpdate:g,onDelete:m,onSelect:M,compact:I});const $=OT(i.type),w=BT(i.type),R=Ri[k.category],b=HT(k,i);return E.jsxs("div",{draggable:!1,title:b,onMouseDown:B=>{B.stopPropagation(),M(i.id)},onDoubleClick:B=>{B.stopPropagation(),M(i.id),T==null||T(i.id)},style:{position:"absolute",left:i.x,top:i.y,width:UT,height:w,background:"#0c0c17",border:`1px solid ${r?$:$+"22"}`,borderRadius:7,boxShadow:r?`0 0 0 2.5px ${$}50,0 8px 36px #000000cc,inset 0 1px 0 #ffffff08`:"0 4px 24px #000000aa,inset 0 1px 0 #ffffff05",pointerEvents:"all",overflow:"visible",transition:"border-color .1s,box-shadow .1s"},children:[E.jsxs("div",{onMouseDown:B=>{B.preventDefault(),u(B,i.id)},style:{height:Ro,display:"flex",alignItems:"center",padding:"0 10px",gap:8,cursor:"grab",background:$,borderBottom:`1px solid ${$}99`,borderRadius:"6px 6px 0 0",userSelect:"none"},children:[E.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#ffffff",flex:1,letterSpacing:.3,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:k.label}),E.jsx("span",{style:{fontSize:8,color:"#dbe6ffcc",letterSpacing:.4,textTransform:"uppercase"},children:(R==null?void 0:R.label)??k.category}),!xn(i.type)&&E.jsx("button",{onMouseDown:B=>B.stopPropagation(),onClick:B=>{B.stopPropagation(),m(i.id)},style:{background:"none",border:"none",color:"#94a3b8",cursor:"pointer",fontSize:14,lineHeight:1,padding:"0 1px",transition:"color .12s"},onMouseEnter:B=>B.currentTarget.style.color="#f87171",onMouseLeave:B=>B.currentTarget.style.color="#94a3b8",children:"×"}),!xn(i.type)&&((C=k.outputs)==null?void 0:C.length)===1&&E.jsx("div",{onClick:B=>h(B,i.id,0),style:{position:"absolute",right:-mr,top:Ro/2-mr,width:mr*2,height:mr*2,borderRadius:"50%",background:a===i.id?"#ffffff":"#ffffff40",border:"2px solid #ffffff",cursor:"crosshair",zIndex:10,boxShadow:a===i.id?`0 0 9px ${$}`:"none",transition:"all .1s"}})]}),!I&&E.jsx("div",{style:{height:v_,padding:"6px 10px 4px 10px",boxSizing:"border-box"},children:E.jsx("div",{style:{width:gc,height:gc,borderRadius:4,border:"1px solid #2a2e3a",background:"#090d16",overflow:"hidden",boxShadow:"inset 0 0 0 1px #ffffff08"},children:x?E.jsx("img",{src:x,alt:`${k.label} preview`,draggable:!1,style:{width:"100%",height:"100%",display:"block",imageRendering:"pixelated",userSelect:"none",pointerEvents:"none"}}):E.jsxs("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:8,color:"#4a5673",letterSpacing:.6},children:[gc,"x",gc]})})}),!I&&k.inputs.map((B,U)=>{const j=e.some(Y=>Y.toId===i.id&&Y.toPort===U),G=a===i.id,J=(p==null?void 0:p.portIndex)===U,se=o&&!G?VT(f,B.type):null,ie=se?$T[se]:null,K=Qv(B.type);let ne=j?K+"50":"#0c0c1a",X=j?K:K+"66",oe="none",F=1;return o&&!G&&se?(X=ie,J?(ne=ie+"55",oe=`0 0 10px ${ie}aa, 0 0 20px ${ie}44`,F=1.4):(ne=ie+"18",oe=`0 0 6px ${ie}44`,F=1.1)):o&&G&&(X="#ef444444",ne="#ef444412"),E.jsxs("div",{style:{position:"relative",height:Ps,display:"flex",alignItems:"center"},children:[E.jsx("div",{onClick:Y=>_(Y,i.id,U),style:{position:"absolute",left:-mr,top:Ps/2-mr,width:mr*2,height:mr*2,borderRadius:"50%",background:ne,border:`2px solid ${X}`,boxShadow:oe,transform:`scale(${F})`,cursor:o&&!G?"crosshair":"default",zIndex:10,transition:"all .15s ease"}}),E.jsx("span",{style:{marginLeft:13,fontSize:10,color:"#e2e8f0",letterSpacing:.8},children:B.label}),o&&!G&&se&&se!=="exact"&&E.jsx("span",{style:{marginLeft:4,fontSize:7,color:ie,letterSpacing:.5,opacity:J?1:.6,transition:"opacity .15s"},children:se==="cast"?"cast":"mismatch"})]},U)}),!I&&Object.entries(i.params).map(([B,U])=>E.jsx(zT,{pk:B,val:U,meta:k.params[B],nodeId:i.id,onUpdate:g},B)),!I&&!xn(i.type)&&k.outputs&&k.outputs.length>1&&k.outputs.map((B,U)=>{const j=Qv(B.type),G=e.some(J=>J.fromId===i.id&&J.fromPort===U);return E.jsxs("div",{style:{position:"relative",height:Ps,display:"flex",alignItems:"center"},children:[E.jsx("span",{style:{marginLeft:13,fontSize:10,color:"#e2e8f0",letterSpacing:.8,flex:1},children:B.label}),E.jsx("div",{onClick:J=>h(J,i.id,U),style:{position:"absolute",right:-mr,top:Ps/2-mr,width:mr*2,height:mr*2,borderRadius:"50%",background:a===i.id?j+"80":G?j+"50":"#0c0c1a",border:`2px solid ${G?j:j+"66"}`,cursor:"crosshair",zIndex:10,boxShadow:a===i.id&&c===U?`0 0 9px ${$}`:"none",transition:"all .1s"}})]},U)}),I&&E.jsxs("div",{style:{height:w-Ro,display:"grid",placeItems:"center",color:"#7f90b3",fontSize:9,letterSpacing:.4},children:[k.inputs.length," IN / ",k.outputs.length," OUT"]}),y!=null&&E.jsxs("div",{style:{position:"absolute",top:"100%",left:"50%",transform:"translateX(-50%)",marginTop:4,fontSize:14,fontWeight:700,fontFamily:"monospace",lineHeight:1,color:y>200?"#ef4444":y>15?"#eab308":"#22c55e",letterSpacing:.5,pointerEvents:"none",userSelect:"none"},children:[y.toFixed(1),"ms"]})]})}const Ad=.15,Rd=2.5,Od=.1,ex=26,jT=128,la=210,yl=36,Hd=jT+12,da=28,XT=180,YT=120,qT=24,KT=220,ZT=.72,JT=1.05,QT=i=>{var t,r;const e=(t=Mt[i])==null?void 0:t.category;return((r=Ri[e])==null?void 0:r.color)??"#888"},vd=i=>({float:"#94a3b8",vec2:"#3b82f6",vec3:"#10b981",vec4:"#8b5cf6",Texture2D:"#a78bfa",Field:"#c084fc"})[i]??"#94a3b8",xd=["float","vec2","vec3","vec4"],op=(i,e,t)=>{if(t<=1)return{x:i.x+la,y:i.y+yl/2};const r=Mt[i.type],o=((r==null?void 0:r.inputs.length)??0)+Object.keys(i.params??{}).length,a=i.y+yl+Hd+(o+e+.5)*da;return{x:i.x+la,y:a}},ap=(i,e)=>({x:i.x,y:i.y+yl+Hd+e*da+da/2}),tx=(i,e,t,r)=>{const o=Math.max(Math.abs(t-i)*.5,55);return`M${i} ${e}C${i+o} ${e} ${t-o} ${r} ${t} ${r}`},lp=(i,e,t)=>Math.max(e,Math.min(t,i)),bo=(i,e,t)=>{const r=i||t;return r.startsWith("#")&&(r.length===7||r.length===4)?`${r}${e}`:r},hc=i=>{var o;const e=Mt[i];if(!e)return yl+da+10;const t=e.inputs.length+Object.keys(e.params).length,r=((o=e.outputs)==null?void 0:o.length)??1;return yl+Hd+Math.max(t,r,1)*da+10};function eC({zoom:i,onZoom:e,onReset:t,snapEnabled:r,snapSize:o,onToggleSnap:a}){const c=({icon:f,title:p,onClick:u,active:h=!1,disabled:_=!1})=>E.jsx("button",{onClick:u,disabled:_,title:p,style:{width:22,height:22,background:h?"#1f2f4f":_?"transparent":"#111120",border:`1px solid ${h?"#3c6db6":_?"#161622":"#232336"}`,borderRadius:4,cursor:_?"default":"pointer",color:h?"#78c8ff":_?"#1a1a28":"#78839b",padding:0,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"inherit",transition:"all .1s",flexShrink:0},onMouseEnter:g=>{!_&&!h&&(g.currentTarget.style.color="#dce7ff")},onMouseLeave:g=>{!_&&!h&&(g.currentTarget.style.color="#78839b")},children:f});return E.jsxs("div",{onMouseDown:f=>f.stopPropagation(),onClick:f=>f.stopPropagation(),style:{position:"absolute",top:10,right:12,display:"flex",alignItems:"center",gap:4,background:"#0c0f1bf2",backdropFilter:"blur(10px)",border:"1px solid #1b2538",borderRadius:7,padding:"4px 6px",boxShadow:"0 2px 10px #00000055"},children:[E.jsx(c,{icon:E.jsx(_2,{size:13}),title:"Zoom out",disabled:i<=Ad,onClick:()=>e(Math.round((i-Od)*100)/100)}),E.jsxs("button",{onClick:t,style:{background:"none",border:"none",cursor:"pointer",color:"#30304a",fontSize:9,fontFamily:"inherit",letterSpacing:.8,padding:"2px 6px",minWidth:42,textAlign:"center",transition:"color .1s"},onMouseEnter:f=>f.currentTarget.style.color="#aaa",onMouseLeave:f=>f.currentTarget.style.color="#30304a",children:[Math.round(i*100),"%"]}),E.jsx(c,{icon:E.jsx(S2,{size:13}),title:"Zoom in",disabled:i>=Rd,onClick:()=>e(Math.round((i+Od)*100)/100)}),E.jsx("div",{style:{width:1,height:14,background:"#283246",margin:"0 1px"}}),E.jsx(c,{icon:E.jsx(m2,{size:12}),title:r?`Snap on (${o}px)`:"Snap off",onClick:a,active:r})]})}function x_({nodes:i,edges:e,frames:t=[],onMove:r,onMoveFrame:o,onResizeFrame:a,onDelFrame:c,onDelEdge:f,onConnect:p,onUpdateParam:u,onAddNode:h,onDelNode:_,onSelectionChange:g,onSelectionSetChange:m,onNodeOpen:M,onCanvasInteractionStart:T,onCanvasInteractionEnd:x,onCanvasClick:y,onRequestContextMenu:L,onVisibleNodeIdsChange:k,nodePreviews:I,nodeTimings:$,viewCommandNonce:w,viewCommandType:R,onToggleSnap:b,snapEnabled:C=!0,snapSize:B=ex}){var nt;const[U,j]=N.useState({x:60,y:60}),[G,J]=N.useState(1),[se,ie]=N.useState(null),[K,ne]=N.useState(null),[X,oe]=N.useState(null),[F,Y]=N.useState(null),Ie=N.useRef(!1),[Re,et]=N.useState(null),[ae,Ce]=N.useState(null),[Te,Je]=N.useState(null),[je,ot]=N.useState([]),[cn,Et]=N.useState(null),[Rt,Gt]=N.useState(null),[bt,nn]=N.useState(null),[Z,fn]=N.useState(null),[$t,jt]=N.useState({x:0,y:0}),[ut,z]=N.useState(null),A=N.useRef(null),[re,Ae]=N.useState({width:0,height:0}),Le=N.useRef([]),we=N.useMemo(()=>new Set(je),[je]),st=N.useRef(!1),He=Math.max(8,B||ex),at=N.useCallback(V=>C?Math.round(V/He)*He:V,[C,He]),vt=N.useCallback(()=>{st.current||(st.current=!0,T==null||T())},[T]),ke=N.useCallback(()=>{st.current&&(st.current=!1,x==null||x())},[x]),We=N.useCallback((V,q)=>{const le=V.x+la/2,Se=V.y+hc(V.type)/2;return le>=q.x&&le<=q.x+q.width&&Se>=q.y&&Se<=q.y+q.height},[]),rt=()=>{var V;return((V=A.current)==null?void 0:V.getBoundingClientRect())??{left:0,top:0}},it=N.useCallback((V,q)=>{const le=rt();return{x:(V-le.left-U.x)/G,y:(q-le.top-U.y)/G}},[U,G]),tt=N.useMemo(()=>X?i.map(V=>{const q=X[V.id];return q?{...V,x:q.x,y:q.y}:V}):i,[i,X]),Ct=N.useMemo(()=>Z?t.map(V=>{const q=Z[V.id];return q?{...V,...q}:V}):t,[t,Z]),Q=N.useMemo(()=>{const V=new Map;for(const q of tt)V.set(q.id,q);return V},[tt]),Fe=N.useMemo(()=>{if(re.width<=0||re.height<=0||G<=0)return null;const V=Math.max(KT/G,12);return{minX:-U.x/G-V,minY:-U.y/G-V,maxX:(re.width-U.x)/G+V,maxY:(re.height-U.y)/G+V}},[U.x,U.y,re.height,re.width,G]),$e=N.useCallback((V,q)=>{const le=V.x,Se=V.y,Ee=V.x+la,Ne=V.y+hc(V.type);return Ee>=q.minX&&le<=q.maxX&&Ne>=q.minY&&Se<=q.maxY},[]),Ke=N.useMemo(()=>Fe?tt.filter(V=>$e(V,Fe)):tt,[tt,$e,Fe]),Oe=N.useMemo(()=>new Set(Ke.map(V=>V.id)),[Ke]),be=N.useMemo(()=>e.filter(V=>Oe.has(V.fromId)||Oe.has(V.toId)),[e,Oe]);N.useEffect(()=>{const V=A.current;if(!V)return;const q=()=>{const le=V.getBoundingClientRect();Ae(Se=>Se.width===le.width&&Se.height===le.height?Se:{width:le.width,height:le.height})};if(q(),typeof ResizeObserver<"u"){const le=new ResizeObserver(()=>q());return le.observe(V),()=>le.disconnect()}return window.addEventListener("resize",q),()=>window.removeEventListener("resize",q)},[]),N.useEffect(()=>{if(!k)return;if(!Fe){Le.current.length>0&&(Le.current=[],k([]));return}const V=Ke.map(Se=>Se.id),q=Le.current;q.length===V.length&&q.every((Se,Ee)=>Se===V[Ee])||(Le.current=V,k(V))},[k,Fe,Ke]),N.useEffect(()=>()=>{k&&k([])},[k]),N.useEffect(()=>{if(R){if(R==="reset"){j({x:60,y:60}),J(1);return}if(R==="frame_all"){const V=A.current;if(!V)return;const q=V.getBoundingClientRect(),le=[];if(i.forEach(Vt=>{le.push({x0:Vt.x,y0:Vt.y,x1:Vt.x+la,y1:Vt.y+hc(Vt.type)})}),t.forEach(Vt=>{le.push({x0:Vt.x,y0:Vt.y,x1:Vt.x+Vt.width,y1:Vt.y+Vt.height})}),le.length===0){j({x:60,y:60}),J(1);return}let Se=Number.POSITIVE_INFINITY,Ee=Number.POSITIVE_INFINITY,Ne=Number.NEGATIVE_INFINITY,De=Number.NEGATIVE_INFINITY;le.forEach(Vt=>{Se=Math.min(Se,Vt.x0),Ee=Math.min(Ee,Vt.y0),Ne=Math.max(Ne,Vt.x1),De=Math.max(De,Vt.y1)});const Xe=Math.max(1,Ne-Se),Qe=Math.max(1,De-Ee),dt=80,ft=(q.width-dt*2)/Xe,yt=(q.height-dt*2)/Qe,Ve=lp(Math.min(ft,yt),Ad,Rd),Kt=(q.width-Xe*Ve)*.5-Se*Ve,It=(q.height-Qe*Ve)*.5-Ee*Ve;J(Ve),j({x:Kt,y:It})}}},[w,R,i,t]),N.useEffect(()=>{g&&g(Te)},[Te,g]),N.useEffect(()=>{m==null||m(je)},[je,m]),N.useEffect(()=>{const V=new Set(i.map(q=>q.id));ot(q=>q.filter(le=>V.has(le))),Je(q=>q&&V.has(q)?q:null)},[i]),N.useEffect(()=>{const V=new Set(t.map(q=>q.id));Et(q=>q&&V.has(q)?q:null)},[t]),N.useEffect(()=>{const V=A.current;if(!V)return;const q=le=>{le.preventDefault();const Se=V.getBoundingClientRect(),Ee=le.clientX-Se.left,Ne=le.clientY-Se.top,De=le.deltaY<0?Od:-Od;J(Xe=>{const Qe=Math.round(lp(Xe+De,Ad,Rd)*100)/100;return j(dt=>({x:Ee-(Ee-dt.x)*(Qe/Xe),y:Ne-(Ne-dt.y)*(Qe/Xe)})),Qe})};return V.addEventListener("wheel",q,{passive:!1}),()=>V.removeEventListener("wheel",q)},[]);const lt=N.useCallback(V=>{const q=A.current;if(!q)return;const{width:le,height:Se}=q.getBoundingClientRect(),Ee=le/2,Ne=Se/2;J(De=>{const Xe=lp(V,Ad,Rd);return j(Qe=>({x:Ee-(Ee-Qe.x)*(Xe/De),y:Ne-(Ne-Qe.y)*(Xe/De)})),Xe})},[]);N.useEffect(()=>{const V=q=>{if(q.key==="Escape"){et(null),Ce(null),Gt(null),nn(null),fn(null),ie(null),ne(null),z(null),ke();return}const le=document.activeElement,Se=le==null?void 0:le.tagName,Ee=!!le&&(le.isContentEditable||!!le.closest('[contenteditable="true"]')||Se==="INPUT"||Se==="TEXTAREA"||Se==="SELECT");if((q.key==="Delete"||q.key==="Backspace")&&!Ee){if(je.length>0){je.forEach(Ne=>{const De=i.find(Xe=>Xe.id===Ne);De&&!xn(De.type)&&_(Ne)}),ot([]),Je(null);return}if(Te){const Ne=i.find(De=>De.id===Te);if(Ne&&!xn(Ne.type)){_(Te),Je(null),ot([]);return}}cn&&c&&(c(cn),Et(null))}};return window.addEventListener("keydown",V),()=>window.removeEventListener("keydown",V)},[Te,je,i,_,c,cn,ke]);const Pt=35,en=N.useCallback((V,q)=>{if(!V||!q||V===q)return"exact";const le=new Set(["float","vec2","vec3","vec4"]);return le.has(V)&&le.has(q)?"cast":"invalid"},[]),Yt=N.useCallback(V=>{const q=rt(),le=V.clientX-q.left,Se=V.clientY-q.top;if(jt({x:le,y:Se}),se){const Ee={x:at((le-U.x)/G-se.ox),y:at((Se-U.y)/G-se.oy)};oe({[se.id]:Ee})}if(K){const Ee=(le-U.x)/G,Ne=(Se-U.y)/G,De=Ee-K.startGX,Xe=Ne-K.startGY,Qe={};Object.entries(K.starts).forEach(([dt,ft])=>{Qe[dt]={x:at(ft.x+De),y:at(ft.y+Xe)}}),oe(Qe)}if(Rt){const Ee=t.find(Ne=>Ne.id===Rt.id);if(Ee){const Ne=(le-U.x)/G,De=(Se-U.y)/G,Xe=at(Ne-Rt.ox),Qe=at(De-Rt.oy);fn({[Ee.id]:{x:Xe,y:Qe,width:Ee.width,height:Ee.height}});const dt=Xe-Rt.frameStartX,ft=Qe-Rt.frameStartY;if(Object.keys(Rt.starts).length>0){const yt={};Object.entries(Rt.starts).forEach(([Ve,Kt])=>{yt[Ve]={x:at(Kt.x+dt),y:at(Kt.y+ft)}}),oe(yt)}}}if(bt){const Ee=t.find(Ne=>Ne.id===bt.id);if(Ee){const Ne=(le-U.x)/G,De=(Se-U.y)/G,Xe=Math.max(XT,bt.startW+(Ne-bt.startGX)),Qe=Math.max(YT,bt.startH+(De-bt.startGY));fn({[Ee.id]:{x:Ee.x,y:Ee.y,width:Xe,height:Qe}})}}if(F&&Y(Ee=>Ee&&{...Ee,x1:le,y1:Se}),ut&&(j(Ee=>({x:Ee.x+V.clientX-ut.x,y:Ee.y+V.clientY-ut.y})),z({x:V.clientX,y:V.clientY})),Re){let Ee=null,Ne=Pt;for(const De of Ke){if(De.id===Re.from)continue;const Xe=Mt[De.type];if(Xe)for(let Qe=0;Qe<Xe.inputs.length;Qe++){const dt=ap(De,Qe),ft=dt.x*G+U.x,yt=dt.y*G+U.y,Ve=Math.hypot(le-ft,Se-yt);if(Ve<Ne){Ne=Ve;const Kt=en(Re.fromType,Xe.inputs[Qe].type);Ee={nodeId:De.id,portIndex:Qe,screenX:ft,screenY:yt,compat:Kt}}}}Ce(Ee)}},[se,K,Rt,bt,F,ut,U,G,Re,Ke,t,en,at]),Fn=N.useCallback(()=>{const V=!!se||!!K||!!Rt||!!bt;if(Re&&ae&&ae.compat!=="invalid"&&(p(Re.from,ae.nodeId,ae.portIndex,Re.fromPort??0),et(null),Ce(null)),F){const q=Math.min(F.x0,F.x1),le=Math.min(F.y0,F.y1),Se=Math.max(F.x0,F.x1),Ee=Math.max(F.y0,F.y1);if(Math.abs(F.x1-F.x0)>4||Math.abs(F.y1-F.y0)>4){const De=(q-U.x)/G,Xe=(le-U.y)/G,Qe=(Se-U.x)/G,dt=(Ee-U.y)/G,ft=i.filter(Ve=>{const Kt=Ve.x,It=Ve.y,Vt=Ve.x+la,Ln=Ve.y+hc(Ve.type);return Vt>=De&&Kt<=Qe&&Ln>=Xe&&It<=dt}).map(Ve=>Ve.id),yt=F.append?Array.from(new Set([...je,...ft])):ft;ot(yt),Je(yt[0]??null),Et(null),Ie.current=!0}Y(null)}X&&(Object.entries(X).forEach(([q,le])=>r(q,le)),oe(null)),Z&&(Object.entries(Z).forEach(([q,le])=>{Rt&&o&&o(q,{x:le.x,y:le.y}),bt&&a&&a(q,{width:le.width,height:le.height})}),fn(null)),V&&ke(),ie(null),ne(null),Gt(null),nn(null),z(null)},[F,Re,Rt,bt,ae,p,U.x,U.y,G,i,je,X,Z,r,o,a,ke]),Sn=N.useCallback(V=>{if(V.button===0){V.preventDefault(),vt();const q=rt(),le=V.clientX-q.left,Se=V.clientY-q.top;Y({x0:le,y0:Se,x1:le,y1:Se,append:V.shiftKey});return}(V.button===1||V.button===2)&&V.button===1&&(V.preventDefault(),vt(),z({x:V.clientX,y:V.clientY}))},[vt]),zi=(V,q,le,Se,Ee,Ne)=>{const De=Ee-le,Xe=Ne-Se,Qe=V-le,dt=q-Se,ft=De*Qe+Xe*dt;if(ft<=0)return Math.hypot(V-le,q-Se);const yt=De*De+Xe*Xe;if(yt<=ft)return Math.hypot(V-Ee,q-Ne);const Ve=ft/yt,Kt=le+Ve*De,It=Se+Ve*Xe;return Math.hypot(V-Kt,q-It)},Qn=N.useCallback((V,q)=>{var Ee,Ne,De;const le=10/G;for(const Xe of Ke){const Qe=Mt[Xe.type];if(Qe){if(!xn(Xe.type)&&((Ee=Qe.outputs)!=null&&Ee.length)){const dt=Qe.outputs.length;for(let ft=0;ft<dt;ft++){const yt=op(Xe,ft,dt);if(Math.hypot(V-yt.x,q-yt.y)<=le)return{kind:"port",nodeId:Xe.id,portIndex:ft,direction:"out",type:(Ne=Qe.outputs[ft])==null?void 0:Ne.type}}}for(let dt=0;dt<Qe.inputs.length;dt++){const ft=Xe.x,yt=Xe.y+yl+Hd+dt*da+da/2;if(Math.hypot(V-ft,q-yt)<=le)return{kind:"port",nodeId:Xe.id,portIndex:dt,direction:"in",type:Qe.inputs[dt].type}}}}for(let Xe=Ke.length-1;Xe>=0;Xe--){const Qe=Ke[Xe],dt=la,ft=hc(Qe.type);if(V>=Qe.x&&V<=Qe.x+dt&&q>=Qe.y&&q<=Qe.y+ft)return{kind:"node",nodeId:Qe.id}}const Se=9/G;for(const Xe of be){const Qe=Q.get(Xe.fromId),dt=Q.get(Xe.toId),ft=Qe?Mt[Qe.type]:null;if(!Qe||!dt||!ft)continue;const yt=op(Qe,Xe.fromPort,((De=ft.outputs)==null?void 0:De.length)??1),Ve=ap(dt,Xe.toPort),Kt=Math.max(Math.abs(Ve.x-yt.x)*.5,55);let It=Number.POSITIVE_INFINITY,Vt=yt.x,Ln=yt.y;for(let Dn=1;Dn<=20;Dn++){const Mn=Dn/20,Ut=1-Mn,At=Ut*Ut*Ut*yt.x+3*Ut*Ut*Mn*(yt.x+Kt)+3*Ut*Mn*Mn*(Ve.x-Kt)+Mn*Mn*Mn*Ve.x,ti=Ut*Ut*Ut*yt.y+3*Ut*Ut*Mn*yt.y+3*Ut*Mn*Mn*Ve.y+Mn*Mn*Mn*Ve.y;It=Math.min(It,zi(V,q,Vt,Ln,At,ti)),Vt=At,Ln=ti}if(It<=Se)return{kind:"edge",edgeId:Xe.id}}for(let Xe=Ct.length-1;Xe>=0;Xe--){const Qe=Ct[Xe];if(V>=Qe.x&&V<=Qe.x+Qe.width&&q>=Qe.y&&q<=Qe.y+Qe.height)return{kind:"frame",frameId:Qe.id}}return{kind:"canvas"}},[Ke,be,Q,Ct,G]),ir=N.useCallback(V=>{V.preventDefault();const q=rt(),le=(V.clientX-q.left-U.x)/G,Se=(V.clientY-q.top-U.y)/G,Ee=Qn(le,Se);Ee.kind==="frame"&&(Et(Ee.frameId),Je(null),ot([])),L&&L({clientX:V.clientX,clientY:V.clientY,graphX:le,graphY:Se,target:Ee})},[Qn,L,U,G]),Mi=N.useCallback(V=>{V.dataTransfer.types.includes("application/nt-node-type")&&(V.preventDefault(),V.dataTransfer.dropEffect="copy")},[]),Pi=N.useCallback(V=>{const q=V.dataTransfer.getData("application/nt-node-type");if(!q)return;V.preventDefault();const le=it(V.clientX,V.clientY);h(q,at(le.x),at(le.y))},[it,h,at]),oi=N.useCallback(V=>{V.preventDefault()},[]),$i=N.useCallback((V,q)=>{V.preventDefault(),V.stopPropagation();const le=i.find(Ee=>Ee.id===q);if(!le)return;const Se=it(V.clientX,V.clientY);if(vt(),we.has(q)&&je.length>1){const Ee={};je.forEach(Ne=>{const De=i.find(Xe=>Xe.id===Ne);De&&(Ee[Ne]={x:De.x,y:De.y})}),ne({startGX:Se.x,startGY:Se.y,starts:Ee});return}Je(q),ot([q]),Et(null),ie({id:q,ox:Se.x-le.x,oy:Se.y-le.y})},[i,it,je,we,vt]),ei=N.useCallback((V,q)=>{V.preventDefault(),V.stopPropagation();const le=Ct.find(Ne=>Ne.id===q);if(!le)return;vt();const Se=it(V.clientX,V.clientY);Et(q),Je(null),ot([]);const Ee={};tt.forEach(Ne=>{We(Ne,le)&&(Ee[Ne.id]={x:Ne.x,y:Ne.y})}),Gt({id:q,ox:Se.x-le.x,oy:Se.y-le.y,frameStartX:le.x,frameStartY:le.y,starts:Ee}),Object.keys(Ee).length>0&&oe(Ee)},[Ct,tt,it,We,vt]),Us=N.useCallback((V,q)=>{V.preventDefault(),V.stopPropagation();const le=Ct.find(Ee=>Ee.id===q);if(!le)return;vt();const Se=it(V.clientX,V.clientY);Et(q),Je(null),ot([]),nn({id:q,startGX:Se.x,startGY:Se.y,startW:le.width,startH:le.height})},[Ct,it,vt]),$r=N.useCallback((V,q,le=0)=>{var Ne,De;V.stopPropagation(),Je(q),ot([q]),Et(null);const Se=Mt[q]??Mt[((Ne=i.find(Xe=>Xe.id===q))==null?void 0:Ne.type)??""],Ee=(De=Se==null?void 0:Se.outputs[le])==null?void 0:De.type;et({from:q,fromPort:le,fromType:Ee}),Ce(null)},[i]),Ii=N.useCallback((V,q,le)=>{V.stopPropagation(),!(!Re||Re.from===q)&&(p(Re.from,q,le,Re.fromPort??0),et(null),Ce(null))},[Re,p]),Sr=N.useCallback(V=>{Je(V),ot([V]),Et(null)},[]),Vi=N.useCallback(V=>{Je(V),ot([V]),Et(null),M==null||M(V)},[M]),ai=N.useCallback((V,q,le=0)=>{var De;const Se=Mt[V.type],Ee=((De=Se==null?void 0:Se.outputs)==null?void 0:De.length)??1,Ne=q?op(V,le,Ee):ap(V,le);return{x:Ne.x*G+U.x,y:Ne.y*G+U.y}},[U,G]),On=N.useMemo(()=>{if(!Re)return null;const V=Q.get(Re.from);if(!V)return null;const q=ai(V,!0,Re.fromPort??0),le=ae?ae.screenX:$t.x,Se=ae?ae.screenY:$t.y,Ee=tx(q.x,q.y,le,Se);let Ne=vd(Re.fromType??"float"),De=.6;return ae&&(ae.compat==="exact"?(Ne="#22c55e",De=.9):ae.compat==="cast"?(Ne="#eab308",De=.85):(Ne="#ef4444",De=.85)),{path:Ee,color:Ne,opacity:De}},[Re,Q,$t,ai,ae]),Wn=He*G,Mr=(U.x%Wn+Wn)%Wn,Fs=(U.y%Wn+Wn)%Wn,gn=Wn*4,hn=(U.x%gn+gn)%gn,D=(U.y%gn+gn)%gn,ue=i.find(V=>V.id===Te),xe=t.find(V=>V.id===cn),fe=G<=ZT,he=G>=JT;return E.jsxs("div",{ref:A,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",cursor:Re?"crosshair":bt?"nwse-resize":Rt||ut?"grabbing":"default",userSelect:se||K||Rt||bt||F||ut?"none":"auto",WebkitUserSelect:se||K||Rt||bt||F||ut?"none":"auto"},onMouseMove:Yt,onMouseUp:Fn,onMouseLeave:Fn,onMouseDown:Sn,onContextMenu:ir,onDragStart:oi,onDragOver:Mi,onDrop:Pi,children:[E.jsxs("svg",{style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none"},children:[E.jsxs("defs",{children:[E.jsx("pattern",{id:"dg-minor",width:Wn,height:Wn,patternUnits:"userSpaceOnUse",patternTransform:`translate(${Mr} ${Fs})`,children:E.jsx("path",{d:`M ${Wn} 0 L 0 0 0 ${Wn}`,fill:"none",stroke:"#2d3750",strokeWidth:1})}),E.jsx("pattern",{id:"dg-major",width:gn,height:gn,patternUnits:"userSpaceOnUse",patternTransform:`translate(${hn} ${D})`,children:E.jsx("path",{d:`M ${gn} 0 L 0 0 0 ${gn}`,fill:"none",stroke:"#43527a",strokeWidth:1.15})})]}),E.jsx("rect",{width:"100%",height:"100%",fill:"url(#dg-minor)"}),E.jsx("rect",{width:"100%",height:"100%",fill:"url(#dg-major)"}),E.jsx("line",{x1:U.x,y1:0,x2:U.x,y2:"100%",stroke:"#5a6b97",strokeWidth:"1.15"}),E.jsx("line",{x1:0,y1:U.y,x2:"100%",y2:U.y,stroke:"#5a6b97",strokeWidth:"1.15"})]}),E.jsxs("svg",{style:{position:"absolute",inset:0,width:"100%",height:"100%"},onClick:()=>{if(Ie.current){Ie.current=!1;return}et(null),Ce(null),Je(null),ot([]),Et(null),y==null||y()},children:[E.jsx("rect",{width:"100%",height:"100%",fill:"transparent"}),E.jsx("defs",{children:be.map(V=>{var Ve,Kt;const q=Q.get(V.fromId),le=Q.get(V.toId);if(!q||!le)return null;const Se=Mt[q.type],Ee=Mt[le.type],Ne=((Ve=Se==null?void 0:Se.outputs[V.fromPort])==null?void 0:Ve.type)??"float",De=((Kt=Ee==null?void 0:Ee.inputs[V.toPort])==null?void 0:Kt.type)??"float",Xe=vd(Ne),Qe=vd(De);if(!(Ne!==De&&xd.includes(Ne)&&xd.includes(De)))return null;const ft=ai(q,!0,V.fromPort),yt=ai(le,!1,V.toPort);return E.jsxs("linearGradient",{id:`edge-grad-${V.id}`,x1:ft.x,y1:ft.y,x2:yt.x,y2:yt.y,gradientUnits:"userSpaceOnUse",children:[E.jsx("stop",{offset:"0%",stopColor:Xe}),E.jsx("stop",{offset:"100%",stopColor:Qe})]},V.id)})}),be.map(V=>{var Kt,It;const q=Q.get(V.fromId),le=Q.get(V.toId);if(!q||!le)return null;const Se=Mt[q.type],Ee=Mt[le.type],Ne=((Kt=Se==null?void 0:Se.outputs[V.fromPort])==null?void 0:Kt.type)??"float",De=((It=Ee==null?void 0:Ee.inputs[V.toPort])==null?void 0:It.type)??"float",Xe=vd(Ne),Qe=Ne!==De&&xd.includes(Ne)&&xd.includes(De),dt=ai(q,!0,V.fromPort),ft=ai(le,!1,V.toPort),yt=tx(dt.x,dt.y,ft.x,ft.y),Ve=Qe?`url(#edge-grad-${V.id})`:Xe;return E.jsxs("g",{children:[E.jsx("path",{d:yt,fill:"none",stroke:Ve,strokeWidth:"2.5",strokeLinecap:"round",pointerEvents:"none"}),E.jsx("path",{d:yt,fill:"none",stroke:"transparent",strokeWidth:"16",style:{cursor:"pointer"},onClick:Vt=>{Vt.stopPropagation(),f(V.id)}})]},V.id)}),On&&E.jsxs("g",{pointerEvents:"none",children:[E.jsx("path",{d:On.path,fill:"none",stroke:On.color,strokeWidth:ae?2.5:1.8,strokeDasharray:ae?"none":"6 4",strokeLinecap:"round",opacity:On.opacity}),ae&&E.jsxs(E.Fragment,{children:[E.jsx("circle",{cx:ae.screenX,cy:ae.screenY,r:10,fill:On.color+"30",stroke:On.color,strokeWidth:2,opacity:.9}),E.jsxs("circle",{cx:ae.screenX,cy:ae.screenY,r:16,fill:"none",stroke:On.color,strokeWidth:.8,opacity:.4,children:[E.jsx("animate",{attributeName:"r",from:"12",to:"22",dur:"0.8s",repeatCount:"indefinite"}),E.jsx("animate",{attributeName:"opacity",from:"0.5",to:"0",dur:"0.8s",repeatCount:"indefinite"})]})]})]}),F&&E.jsx("g",{pointerEvents:"none",children:E.jsx("rect",{x:Math.min(F.x0,F.x1),y:Math.min(F.y0,F.y1),width:Math.abs(F.x1-F.x0),height:Math.abs(F.y1-F.y0),fill:"#3b82f630",stroke:"#60a5fa",strokeWidth:1,strokeDasharray:"4 3"})})]}),E.jsxs("div",{style:{position:"absolute",inset:0,transform:`translate(${U.x}px,${U.y}px) scale(${G})`,transformOrigin:"0 0",pointerEvents:"none"},children:[Ct.map(V=>{const q=cn===V.id,le=V.color||"#4d78bc";return E.jsxs("div",{style:{position:"absolute",left:V.x,top:V.y,width:V.width,height:V.height,borderRadius:8,border:`1px solid ${q?bo(le,"cc","#4d78bccc"):bo(le,"66","#4d78bc66")}`,background:bo(le,"18","#4d78bc18"),boxShadow:q?`0 0 0 1px ${bo(le,"55","#4d78bc55")}, inset 0 0 0 1px #ffffff10`:"inset 0 0 0 1px #ffffff06",pointerEvents:"none",overflow:"hidden"},children:[E.jsx("div",{onMouseDown:Se=>ei(Se,V.id),style:{height:qT,display:"flex",alignItems:"center",padding:"0 8px",borderBottom:`1px solid ${bo(le,"66","#4d78bc66")}`,background:bo(le,"24","#4d78bc24"),color:"#cfd8ef",fontSize:10,letterSpacing:.4,fontWeight:700,cursor:"grab",userSelect:"none",pointerEvents:"all"},title:V.label||"Frame",children:E.jsx("span",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:V.label||"Frame"})}),E.jsx("div",{onMouseDown:Se=>Us(Se,V.id),style:{position:"absolute",right:2,bottom:2,width:12,height:12,borderRadius:2,border:`1px solid ${bo(le,"aa","#4d78bcaa")}`,background:bo(le,"33","#4d78bc33"),cursor:"nwse-resize",pointerEvents:"all"}})]},V.id)}),Ke.map(V=>{const q=we.has(V.id),le=fe&&!q&&!Re?"compact":"full";return E.jsx(WT,{node:V,edges:e,allNodes:i,isSel:q,isConn:!!Re,connFrom:(Re==null?void 0:Re.from)??null,connFromPort:Re==null?void 0:Re.fromPort,connFromType:Re==null?void 0:Re.fromType,snapTarget:Re&&(ae==null?void 0:ae.nodeId)===V.id?ae:null,previewUrl:le==="full"&&he?I==null?void 0:I[V.id]:void 0,compileMs:$==null?void 0:$[V.id],lodMode:le,onDrag:$i,onOut:$r,onIn:Ii,onUpdate:u,onDelete:_,onSelect:Sr,onOpen:Vi},V.id)})]}),E.jsx(eC,{zoom:G,onZoom:lt,onReset:()=>{j({x:60,y:60}),J(1)},snapEnabled:C,snapSize:He,onToggleSnap:b}),E.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:22,display:"flex",alignItems:"center",padding:"0 12px",gap:14,fontSize:8,color:"#1c1c2e",letterSpacing:.7,pointerEvents:"none",borderTop:"1px solid #0e0e1c"},children:[E.jsx("span",{children:"SCROLL zoom"}),E.jsx("span",{children:"MMB pan"}),E.jsx("span",{children:"RMB menu"}),E.jsx("span",{children:"DBLCLICK node open/pin"}),E.jsx("span",{children:"DRAG frame header"}),E.jsx("span",{children:"DEL delete selected"}),E.jsx("span",{children:"ESC cancel"}),E.jsxs("span",{style:{color:C?"#2f9e7f":"#7d879e"},children:["SNAP ",C?`${He}px`:"OFF"]}),Re&&!ae&&E.jsx("span",{style:{color:"#94a3b8",marginLeft:4},children:"● CONNECTING — drag to input port"}),Re&&ae&&ae.compat==="exact"&&E.jsx("span",{style:{color:"#22c55e",marginLeft:4},children:"● SNAP — release to connect"}),Re&&ae&&ae.compat==="cast"&&E.jsx("span",{style:{color:"#eab308",marginLeft:4},children:"● SNAP (implicit cast) — release to connect"}),Re&&ae&&ae.compat==="invalid"&&E.jsx("span",{style:{color:"#ef4444",marginLeft:4},children:"● INCOMPATIBLE — types don't match"}),ue&&!Re&&!xn(ue.type)&&E.jsxs("span",{style:{color:QT(ue.type),marginLeft:4},children:["◈ ",(nt=Mt[ue.type])==null?void 0:nt.label," selected · DEL to delete"]}),xe&&!Re&&!ue&&E.jsxs("span",{style:{color:xe.color||"#7aa2f7",marginLeft:4},children:["FRAME ",xe.label||xe.id," selected - DEL to delete"]})]})]})}const tC=ts.lazy(async()=>({default:(await dm(()=>import("./Viewport-DzHzEfB2.js"),[])).Viewport})),nC=ts.lazy(async()=>({default:(await dm(()=>import("./Viewport3D-Iwaaprpq.js"),[])).Viewport3D})),__=N.createContext(null),ha=()=>{const i=N.useContext(__);if(!i)throw new Error("useApp must be used inside AppContext");return i},gr=120,Jr=200,Qi=40,iC=.4;function rC({stats:i,backend:e}){const t=N.useRef(null),r=N.useRef(null),o=N.useRef({count:0,last:performance.now(),history:new Float32Array(gr),head:0,filled:0,currentFps:0,minFps:999,maxFps:0,frameTimes:[],lastFrame:performance.now()});return N.useEffect(()=>{let a=0;const c=o.current,f=()=>{a=requestAnimationFrame(f);const u=performance.now(),h=u-c.lastFrame;if(c.lastFrame=u,c.frameTimes.push(h),c.count++,u-c.last>=500){const _=Math.round(c.count*1e3/(u-c.last));c.currentFps=_,c.history[c.head]=_,c.head=(c.head+1)%gr,c.filled<gr&&c.filled++;let g=999,m=0;for(let x=0;x<c.filled;x++)c.history[x]<g&&(g=c.history[x]),c.history[x]>m&&(m=c.history[x]);c.minFps=g,c.maxFps=m;const M=c.frameTimes.length>0?c.frameTimes.reduce((x,y)=>x+y,0)/c.frameTimes.length:0,T=c.frameTimes.length>0?Math.max(...c.frameTimes):0;c.frameTimes=[],t.current&&(t.current.innerText=`FPS: ${_}  (min ${g} / max ${m})  [${e}]
Frame: ${M.toFixed(1)} ms avg  ${T.toFixed(1)} ms max
Nodes: ${i.nodeCount}  Edges: ${i.edgeCount}
Shader: ${i.shaderLines} ln  ${i.shaderBytes} B
Compile: ${i.compileTimeMs.toFixed(1)} ms  (#${i.recompileCount})
Render p50/p95: ${(i.renderP50Ms??0).toFixed(1)} / ${(i.renderP95Ms??0).toFixed(1)} ms`),p(),c.count=0,c.last=u}},p=()=>{const u=r.current;if(!u)return;const h=u.getContext("2d");if(!h)return;const _=window.devicePixelRatio||1;(u.width!==Jr*_||u.height!==Qi*_)&&(u.width=Jr*_,u.height=Qi*_,h.scale(_,_)),h.clearRect(0,0,Jr,Qi),h.fillStyle="#0a0e14",h.fillRect(0,0,Jr,Qi);const g=Math.max(c.maxFps+5,65),m=Jr/gr;h.strokeStyle="#1a3a1a",h.lineWidth=.5;for(const T of[30,60]){const x=Qi-T/g*Qi;h.beginPath(),h.moveTo(0,x),h.lineTo(Jr,x),h.stroke()}h.font="7px monospace",h.fillStyle="#1a4a1a",h.fillText("60",1,Qi-60/g*Qi-2),h.fillText("30",1,Qi-30/g*Qi-2);for(let T=0;T<c.filled;T++){const x=(c.head-c.filled+T+gr)%gr,y=c.history[x],L=y/g*Qi,k=T/gr*Jr;y<g*iC?h.fillStyle="#ff3333cc":y<45?h.fillStyle="#ffaa22cc":h.fillStyle="#00cc44aa",h.fillRect(k,Qi-L,Math.max(m-.5,1),L)}const M=c.filled>0?c.history[(c.head-1+gr)%gr]:0;if(M>0&&c.filled>1){const x=c.history[(c.head-2+gr)%gr]-M;if(x>15){const y=(c.filled-1)/gr*Jr;h.fillStyle="#ff5555",h.font="bold 8px monospace",h.fillText(`-${Math.round(x)}`,Math.min(y,Jr-20),8)}}};return a=requestAnimationFrame(f),()=>cancelAnimationFrame(a)},[i]),E.jsxs("div",{style:{position:"absolute",top:8,left:8,background:"#000000cc",borderRadius:4,pointerEvents:"none",zIndex:20,overflow:"hidden"},children:[E.jsx("canvas",{ref:r,style:{display:"block",width:Jr,height:Qi}}),E.jsx("div",{ref:t,style:{color:"#0f0",fontFamily:"monospace",fontSize:9,padding:"4px 8px 5px",whiteSpace:"pre",lineHeight:1.45}})]})}function sC(){const i=ha(),e=N.useCallback(t=>{i.onSelectionChange(t);const r=i.graph.nodes.find(o=>o.id===t);if(r&&(r.type==="atom_graph"||r.type==="perlin")){i.onOpenAtomNode(t);return}i.onPinPreview(i.pinnedPreviewNodeId===t?null:t)},[i]);return E.jsxs("div",{style:{width:"100%",height:"100%",position:"relative",background:"#1f2126"},children:[E.jsx(x_,{nodes:i.graph.nodes,edges:i.graph.edges,frames:i.graph.frames||[],onMove:i.onMove,onMoveFrame:i.onMoveFrame,onResizeFrame:i.onResizeFrame,onDelFrame:i.onDeleteFrame,onDelEdge:i.onDeleteEdge,onConnect:i.onConnect,onUpdateParam:i.onUpdateParam,onAddNode:i.onAddNode,onDelNode:i.onDeleteNode,onSelectionChange:i.onSelectionChange,onSelectionSetChange:i.onSelectionSetChange,onCanvasInteractionStart:i.onCanvasInteractionStart,onCanvasInteractionEnd:i.onCanvasInteractionEnd,onVisibleNodeIdsChange:i.onVisibleNodeIdsChange,onNodeOpen:e,onCanvasClick:i.onCanvasClick,onRequestContextMenu:i.onRequestContextMenu,nodePreviews:i.nodePreviews,nodeTimings:i.nodeTimings,viewCommandNonce:i.graphViewCommandNonce,viewCommandType:i.graphViewCommandType,onToggleSnap:()=>i.setSnapEnabled(!i.snapEnabled),snapEnabled:i.snapEnabled,snapSize:i.snapGridSize}),E.jsx(rC,{stats:i.stats,backend:"WebGPU"})]})}function oC(){const i=ha(),e=N.useMemo(()=>i.libraryByCategory.map(([a,c])=>{const f=Ri[a];return{key:a,label:(f==null?void 0:f.label)||a.toUpperCase(),color:(f==null?void 0:f.color)||"#9aa5c4",count:c.length}}),[i.libraryByCategory]),[t,r]=N.useState("gen");N.useEffect(()=>{var c;if(t==="all")return;e.some(f=>f.key===t&&f.count>0)||r(((c=e[0])==null?void 0:c.key)||"all")},[t,e]);const o=N.useMemo(()=>{if(t==="all")return i.libraryByCategory.flatMap(([c,f])=>f.map(p=>({...p,categoryKey:c})));const a=i.libraryByCategory.find(([c])=>c===t);return a?a[1].map(c=>({...c,categoryKey:t})):[]},[t,i.libraryByCategory]);return E.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",background:"#2a2d33"},children:[E.jsx("div",{style:{padding:"5px 6px",borderBottom:"1px solid #3a3e47"},children:E.jsx("input",{className:"nt-search",placeholder:"Search nodes...",value:i.libSearch,onChange:a=>i.setLibSearch(a.target.value)})}),E.jsx("div",{className:"nt-lib-tabs-wrap",children:E.jsxs("div",{className:"nt-lib-tabs",children:[E.jsxs("button",{className:`nt-lib-tab${t==="all"?" active":""}`,onClick:()=>r("all"),children:["ALL",E.jsx("span",{children:i.libraryByCategory.reduce((a,[,c])=>a+c.length,0)})]}),e.map(a=>E.jsxs("button",{className:`nt-lib-tab${t===a.key?" active":""}`,onClick:()=>r(a.key),style:{"--nt-lib-tab-accent":a.color},children:[a.label,E.jsx("span",{children:a.count})]},a.key))]})}),E.jsxs("div",{style:{flex:1,minHeight:0,overflow:"auto",padding:"4px 4px"},children:[o.map(a=>{var c;return E.jsxs("button",{draggable:!0,onDragStart:f=>{f.dataTransfer.setData("application/nt-node-type",a.type),f.dataTransfer.effectAllowed="copy"},onClick:()=>i.onAddNode(a.type),className:"nt-lib-item",children:[a.label,E.jsx("span",{style:{marginLeft:"auto",fontSize:9,color:"#64739a"},children:((c=Ri[a.categoryKey])==null?void 0:c.label)||a.categoryKey})]},`${a.categoryKey}_${a.type}`)}),o.length===0&&E.jsx("div",{style:{padding:12,fontSize:10,color:"#555c6e",textAlign:"center"},children:"No results"})]})]})}function aC(){var c;const i=ha(),[e,t]=N.useState({w:0,h:0,dpr:1}),r=N.useCallback((f,p,u)=>t({w:f,h:p,dpr:u}),[]),o=i.previewTarget,a=!!i.pinnedPreviewNodeId;return E.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",background:"#232832"},children:[E.jsxs("div",{style:{height:30,display:"flex",alignItems:"center",gap:6,padding:"0 8px",borderBottom:"1px solid #343c4c",flexShrink:0},children:[o.nodeId?E.jsxs("span",{style:{fontSize:10,fontWeight:600,color:"#3ecf8e",letterSpacing:.3,display:"flex",alignItems:"center",gap:4},children:[o.label,E.jsxs("span",{style:{color:"#5f6882",fontWeight:400},children:["/ ",o.portLabel]}),a&&E.jsx("span",{style:{fontSize:8,color:"#f0c43e",cursor:"pointer",letterSpacing:0},title:"Unpin preview",onClick:()=>i.onPinPreview(null),children:"PIN"})]}):E.jsx("span",{style:{fontSize:10,color:"#5f6882"},children:"Output"}),i.interacting&&E.jsx("span",{style:{fontSize:8,color:"#f0c43e",letterSpacing:.4},children:"LQ"}),i.thumbnailDeferred&&E.jsx("span",{style:{fontSize:8,color:"#f3bd8e",letterSpacing:.3},children:"THUMB DEFER"}),E.jsxs("span",{style:{marginLeft:"auto",fontSize:10,color:"#8791ad"},children:[e.w,"x",e.h,e.dpr>1?` @${e.dpr.toFixed(1)}x`:"",` | q ${i.viewportQuality.scale.toFixed(2)} | ${((c=i.rendererPerf)==null?void 0:c.fps)??0} fps | export ${i.patternSize}`]})]}),E.jsx("div",{style:{flex:1,minHeight:0},children:E.jsx(ts.Suspense,{fallback:E.jsx("div",{style:{width:"100%",height:"100%",display:"grid",placeItems:"center",color:"#8fa0c2",fontSize:12},children:"Loading 2D preview..."}),children:E.jsx(tC,{compiled:i.previewShader,tile:i.tile,resolutionScale:i.previewResScale,inlineErrors:!1,onShaderError:i.onPreviewError,onResolutionChange:r,onPerfSample:i.onViewportPerfSample,performanceMode:i.performanceMode,frameBudgetMs:i.previewFrameBudgetMs,graphHash:i.graphPerfHash})})})]})}function lC(i){return!!i&&Array.isArray(i.nodes)&&Array.isArray(i.edges)}function y_(){return{schemaVersion:1,resolution:512,nodes:[{id:"atom_in",type:"atom_input_a",x:80,y:140,params:{}},{id:"atom_mul",type:"multiply",x:260,y:140,params:{b:1.12}},{id:"atom_remap",type:"remap",x:450,y:140,params:{inLo:.04,inHi:.96,outLo:0,outHi:1}},{id:"atom_lvl",type:"levels",x:660,y:140,params:{inMin:.03,inMax:.97,gamma:.95}},{id:"atom_clamp",type:"clamp01",x:850,y:140,params:{}},{id:"atom_out",type:"output_height",x:1040,y:140,params:{}}],edges:[{id:"atom_e1",fromId:"atom_in",fromPort:0,toId:"atom_mul",toPort:0},{id:"atom_e2",fromId:"atom_mul",fromPort:0,toId:"atom_remap",toPort:0},{id:"atom_e3",fromId:"atom_remap",fromPort:0,toId:"atom_lvl",toPort:0},{id:"atom_e4",fromId:"atom_lvl",fromPort:0,toId:"atom_clamp",toPort:0},{id:"atom_e5",fromId:"atom_clamp",fromPort:0,toId:"atom_out",toPort:0}]}}function cC(i){const e={},t=(i==null?void 0:i.params)||{};for(const[r,o]of Object.entries(t))r!=="subgraph"&&(e[r]=o);return{schemaVersion:1,resolution:512,nodes:[{id:"perlin_core",type:"perlin",x:100,y:140,params:e},{id:"atom_out",type:"output_height",x:360,y:140,params:{}}],edges:[{id:"atom_e1",fromId:"perlin_core",fromPort:0,toId:"atom_out",toPort:0}]}}function uC(i){return(i==null?void 0:i.type)==="perlin"?cC(i):y_()}function dC(i){return i==="contrast_boost"?{schemaVersion:1,resolution:512,nodes:[{id:"atom_in",type:"atom_input_a",x:80,y:140,params:{}},{id:"atom_sub",type:"subtract",x:250,y:140,params:{b:.5}},{id:"atom_mul",type:"multiply",x:430,y:140,params:{b:1.45}},{id:"atom_add",type:"add",x:610,y:140,params:{b:.5}},{id:"atom_lvl",type:"levels",x:790,y:140,params:{inMin:.02,inMax:.98,gamma:.9}},{id:"atom_clamp",type:"clamp01",x:970,y:140,params:{}},{id:"atom_out",type:"output_height",x:1150,y:140,params:{}}],edges:[{id:"atom_e1",fromId:"atom_in",fromPort:0,toId:"atom_sub",toPort:0},{id:"atom_e2",fromId:"atom_sub",fromPort:0,toId:"atom_mul",toPort:0},{id:"atom_e3",fromId:"atom_mul",fromPort:0,toId:"atom_add",toPort:0},{id:"atom_e4",fromId:"atom_add",fromPort:0,toId:"atom_lvl",toPort:0},{id:"atom_e5",fromId:"atom_lvl",fromPort:0,toId:"atom_clamp",toPort:0},{id:"atom_e6",fromId:"atom_clamp",fromPort:0,toId:"atom_out",toPort:0}]}:i==="edge_focus"?{schemaVersion:1,resolution:512,nodes:[{id:"atom_in_a",type:"atom_input_a",x:80,y:120,params:{}},{id:"atom_in_b",type:"atom_input_b",x:80,y:280,params:{}},{id:"atom_edge",type:"edge_detect",x:290,y:200,params:{radius:1.2,strength:1.8}},{id:"atom_gain",type:"multiply",x:510,y:200,params:{b:1.25}},{id:"atom_mix",type:"blend",x:730,y:200,params:{mode:"screen",opacity:.55}},{id:"atom_lvl",type:"levels",x:960,y:200,params:{inMin:.04,inMax:.98,gamma:.95}},{id:"atom_out",type:"output_height",x:1160,y:200,params:{}}],edges:[{id:"atom_e1",fromId:"atom_in_a",fromPort:0,toId:"atom_edge",toPort:0},{id:"atom_e2",fromId:"atom_edge",fromPort:0,toId:"atom_gain",toPort:0},{id:"atom_e3",fromId:"atom_gain",fromPort:0,toId:"atom_mix",toPort:0},{id:"atom_e4",fromId:"atom_in_b",fromPort:0,toId:"atom_mix",toPort:1},{id:"atom_e5",fromId:"atom_mix",fromPort:0,toId:"atom_lvl",toPort:0},{id:"atom_e6",fromId:"atom_lvl",fromPort:0,toId:"atom_out",toPort:0}]}:i==="dual_blend"?{schemaVersion:1,resolution:512,nodes:[{id:"atom_in_a",type:"atom_input_a",x:80,y:120,params:{}},{id:"atom_in_b",type:"atom_input_b",x:80,y:280,params:{}},{id:"atom_blend",type:"blend",x:330,y:200,params:{mode:"overlay",opacity:.7}},{id:"atom_lvl",type:"levels",x:560,y:200,params:{inMin:.03,inMax:.98,gamma:.95}},{id:"atom_out",type:"output_height",x:770,y:200,params:{}}],edges:[{id:"atom_e1",fromId:"atom_in_a",fromPort:0,toId:"atom_blend",toPort:0},{id:"atom_e2",fromId:"atom_in_b",fromPort:0,toId:"atom_blend",toPort:1},{id:"atom_e3",fromId:"atom_blend",fromPort:0,toId:"atom_lvl",toPort:0},{id:"atom_e4",fromId:"atom_lvl",fromPort:0,toId:"atom_out",toPort:0}]}:y_()}function nx(i){return JSON.parse(JSON.stringify(i))}function fC(i,e){if(!lC(i))return e;const t=i.nodes.filter(c=>c&&typeof c.id=="string"&&typeof c.type=="string"&&typeof c.x=="number"&&typeof c.y=="number"&&typeof c.params=="object"),r=new Set(t.map(c=>c.id)),o=i.edges.filter(c=>c&&typeof c.id=="string"&&typeof c.fromId=="string"&&typeof c.toId=="string"&&typeof c.fromPort=="number"&&typeof c.toPort=="number"&&r.has(c.fromId)&&r.has(c.toId));if(t.length===0)return e;const a=Array.isArray(i.frames)?i.frames.filter(c=>c&&typeof c.id=="string"&&typeof c.x=="number"&&typeof c.y=="number"&&typeof c.width=="number"&&typeof c.height=="number"&&typeof c.label=="string"):[];return{schemaVersion:i.schemaVersion||1,resolution:typeof i.resolution=="number"?i.resolution:512,nodes:t,edges:o,frames:a}}function hC({viewId:i}){var T;const e=ha(),t=e.atomViewBindings[i],r=N.useMemo(()=>e.graph.nodes.find(x=>x.id===t)||null,[e.graph.nodes,t]),o=N.useMemo(()=>{var x;return fC((x=r==null?void 0:r.params)==null?void 0:x.subgraph,uC(r))},[(T=r==null?void 0:r.params)==null?void 0:T.subgraph,r]),[a,c]=N.useState(()=>nx(o)),[f,p]=N.useState("constant"),[u,h]=N.useState("default"),_=N.useMemo(()=>Object.values(Mt).filter(x=>x.type==="remote"||x.type==="atom_input"?!1:x.category==="output"?x.type==="output_height":!0).map(x=>({type:x.type,label:x.label})).sort((x,y)=>x.label.localeCompare(y.label)),[]),g=N.useMemo(()=>[{id:"default",label:"Math Polish"},{id:"contrast_boost",label:"Contrast Boost"},{id:"edge_focus",label:"Edge Focus"},{id:"dual_blend",label:"Dual Blend (A/B)"}],[]);N.useEffect(()=>{c(nx(o))},[o,t]);const m=N.useCallback(x=>{t&&(c(x),e.onUpdateParam(t,"subgraph",x))},[e,t]),M=N.useCallback(x=>{const y=new Co(a);x(y)!==!1&&m(y.serialize())},[a,m]);return t?r?E.jsxs("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",background:"#1e2430"},children:[E.jsxs("div",{style:{height:32,display:"flex",alignItems:"center",gap:6,padding:"0 8px",borderBottom:"1px solid #323a4a",flexShrink:0},children:[E.jsx("span",{style:{fontSize:10,color:"#d8e2ff",fontWeight:700},children:"Atom Graph"}),E.jsxs("span",{style:{fontSize:9,color:"#8791ad"},children:[r.type," (",r.id,")"]}),E.jsx("select",{className:"nt-select",value:u,onChange:x=>h(x.target.value),style:{marginLeft:8},title:"Apply a math-heavy internal template",children:g.map(x=>E.jsx("option",{value:x.id,children:x.label},x.id))}),E.jsx("button",{className:"nt-btn-sm",onClick:()=>m(dC(u)),title:"Replace subgraph with template",children:"Apply Template"}),E.jsx("select",{className:"nt-select",value:f,onChange:x=>p(x.target.value),style:{marginLeft:"auto"},children:_.map(x=>E.jsx("option",{value:x.type,children:x.label},x.type))}),E.jsx("button",{className:"nt-btn-sm",onClick:()=>M(x=>{const y=120+Math.random()*260,L=80+Math.random()*220;return!!x.addNode(f,y,L)}),children:"Add Node"})]}),E.jsx("div",{style:{flex:1,minHeight:0},children:E.jsx(x_,{nodes:a.nodes,edges:a.edges,frames:a.frames||[],onMove:(x,y)=>M(L=>{L.moveNode(x,y.x,y.y)}),onMoveFrame:(x,y)=>M(L=>{L.moveFrame(x,y.x,y.y)}),onResizeFrame:(x,y)=>M(L=>{L.resizeFrame(x,y.width,y.height)}),onDelFrame:x=>M(y=>{y.removeFrame(x)}),onDelEdge:x=>M(y=>{y.removeEdge(x)}),onConnect:(x,y,L,k)=>M(I=>!!I.addEdge(x,y,L,k??0)),onUpdateParam:(x,y,L)=>M(k=>{k.updateParam(x,y,L)}),onAddNode:(x,y,L)=>M(k=>!!k.addNode(x,y??180,L??120)),onDelNode:x=>M(y=>{y.removeNode(x)}),onSelectionChange:()=>{},onCanvasClick:()=>{},onNodeOpen:()=>{},nodePreviews:{},nodeTimings:{}})})]}):E.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#ffb3b3",fontSize:11},children:"Parent atom node was removed."}):E.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#8ea0c8",fontSize:11},children:"Atom window is not bound to a node."})}function pC(){var t,r,o,a,c,f,p,u,h,_;const i=ha();if(!i.preview3dReady)return E.jsx("div",{style:{width:"100%",height:"100%",background:"#1b2230",display:"grid",placeItems:"center",color:"#8fa0c2",fontSize:12,letterSpacing:.4},children:"Preparing 3D preview after node warmup..."});const e=i.outputPreviewSurfaces;return E.jsx("div",{style:{width:"100%",height:"100%",background:"#1b2230"},children:E.jsx(ts.Suspense,{fallback:E.jsx("div",{style:{width:"100%",height:"100%",display:"grid",placeItems:"center",color:"#8fa0c2",fontSize:12},children:"Loading 3D module..."}),children:E.jsx(nC,{baseColorCanvas:((t=e==null?void 0:e.baseColor)==null?void 0:t.canvas)??null,baseColorVersion:((r=e==null?void 0:e.baseColor)==null?void 0:r.version)??0,roughnessCanvas:((o=e==null?void 0:e.roughness)==null?void 0:o.canvas)??null,roughnessVersion:((a=e==null?void 0:e.roughness)==null?void 0:a.version)??0,normalCanvas:((c=e==null?void 0:e.normal)==null?void 0:c.canvas)??null,normalVersion:((f=e==null?void 0:e.normal)==null?void 0:f.version)??0,metallicCanvas:((p=e==null?void 0:e.metallic)==null?void 0:p.canvas)??null,metallicVersion:((u=e==null?void 0:e.metallic)==null?void 0:u.version)??0,heightCanvas:((h=e==null?void 0:e.height)==null?void 0:h.canvas)??null,heightVersion:((_=e==null?void 0:e.height)==null?void 0:_.version)??0,frameBudgetMs:i.previewFrameBudgetMs,performanceMode:i.performanceMode})})})}function mC(){const i=ha(),e=N.useMemo(()=>{var w;return((w=i.codeShader)==null?void 0:w.source)||""},[i.codeShader]),t=(i.stats.backend||"glsl").toLowerCase()==="wgsl"?"wgsl":"glsl",[r,o]=N.useState("monitor"),[a,c]=N.useState(()=>Tc());N.useEffect(()=>a_(c),[]);const f=N.useMemo(()=>[...a].reverse().find(w=>w.level==="warn")??null,[a]),p=N.useMemo(()=>i.monitorRuns.length>0?i.monitorRuns[i.monitorRuns.length-1]:null,[i.monitorRuns]),u=p?ip(p):"warn",h=Array.isArray(p==null?void 0:p.checks)?p.checks.length:0,_=N.useMemo(()=>[...a].reverse().slice(0,40),[a]),g=N.useMemo(()=>{const w=Date.now()-3e5,R=new Set;return _.filter(b=>{if(b.level!=="error")return!1;const C=Date.parse(b.ts);if(!Number.isFinite(C)||C<w)return!1;const B=`${b.source}|${b.message}`;return R.has(B)?!1:(R.add(B),!0)})},[_]),m=N.useMemo(()=>{const w=[];if(i.compileError&&w.push({severity:"fail",title:"Compile",message:i.compileError}),i.stats.warnings.length>0&&w.push({severity:"warn",title:"Compiler warnings",message:i.stats.warnings.join(" | ")}),g.length>0)for(const R of g.slice(0,3))w.push({severity:"fail",title:"Runtime",message:Ud(R,!1)});return w.length===0&&w.push({severity:"ok",title:"Status",message:"No critical feedback. Last compile and runtime checks look clean."}),w},[i.compileError,i.stats.warnings,g]),M=async()=>{e&&await navigator.clipboard.writeText(e)},T=()=>{if(!e)return;const w=new Blob([e],{type:"text/plain"}),R=URL.createObjectURL(w),b=document.createElement("a");b.href=R,b.download=`generated_shader.${t}`,b.click(),URL.revokeObjectURL(R)},x=N.useCallback(()=>o_(),[]),y=N.useCallback(()=>s_(),[]),L=N.useCallback(async()=>{await i.runMonitorSuite("quick")},[i]),k=N.useCallback(async()=>{await i.runMonitorSuite("stress")},[i]),I=N.useMemo(()=>[...i.monitorRuns].reverse().slice(0,20),[i.monitorRuns]),$=N.useMemo(()=>[{title:"Compile",severity:i.compileError?"fail":i.stats.warnings.length>0?"warn":"ok",value:i.compileError?"Error":i.stats.warnings.length>0?`${i.stats.warnings.length} warning(s)`:"OK"},{title:"Runtime",severity:g.length>0?"fail":f?"warn":"ok",value:g.length>0?`${g.length} error(s)`:f?"Has warnings":"OK"},{title:"Performance",severity:(i.stats.renderP95Ms??0)>i.previewFrameBudgetMs+8?"fail":(i.stats.renderP95Ms??0)>i.previewFrameBudgetMs+2?"warn":"ok",value:`p95 ${(i.stats.renderP95Ms??0).toFixed(1)}ms`},{title:"Monitor",severity:p?u:"warn",value:p?`${p.mode.toUpperCase()} ${p.passCount}/${h} pass`:"No run yet"}],[i.compileError,i.stats.warnings.length,i.stats.renderP95Ms,i.previewFrameBudgetMs,f,g.length,p,u,h]);return E.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",background:"#232832"},children:[E.jsxs("div",{style:{height:28,display:"flex",alignItems:"center",gap:4,borderBottom:"1px solid #343c4c",background:"#1b2230",padding:"0 6px",flexShrink:0},children:[E.jsx("button",{className:`nt-tab${r==="monitor"?" active":""}`,onClick:()=>o("monitor"),children:"Monitor"}),E.jsx("button",{className:`nt-tab${r==="code"?" active":""}`,onClick:()=>o("code"),children:"Code"}),E.jsx("button",{className:`nt-tab${r==="uniforms"?" active":""}`,onClick:()=>o("uniforms"),children:"Uniforms"}),E.jsxs("span",{style:{marginLeft:"auto",fontSize:9,color:"#7f8db2",whiteSpace:"nowrap"},children:[i.stats.shaderLines," ln / ",i.stats.shaderBytes," B"]})]}),E.jsxs("div",{style:{borderBottom:"1px solid #31384a",background:"#212734",padding:"7px 8px",display:"flex",gap:6,flexWrap:"wrap",flexShrink:0},children:[r==="monitor"&&E.jsxs(E.Fragment,{children:[E.jsx("button",{onClick:L,className:"nt-btn-sm",disabled:i.monitorRunning,children:i.monitorRunning?"RUNNING...":"RUN QUICK"}),E.jsx("button",{onClick:k,className:"nt-btn-sm",disabled:i.monitorRunning,children:i.monitorRunning?"RUNNING...":"RUN STRESS"}),E.jsx("button",{onClick:i.clearMonitorRuns,className:"nt-btn-sm",children:"Clear Tests"}),E.jsx("button",{onClick:x,className:"nt-btn-sm",children:"Download Logs"}),E.jsx("button",{onClick:y,className:"nt-btn-sm",children:"Clear Logs"})]}),r==="code"&&E.jsxs(E.Fragment,{children:[E.jsx("button",{onClick:M,className:"nt-btn-sm",children:"Copy"}),E.jsxs("button",{onClick:T,className:"nt-btn-sm",children:[".",t]}),E.jsx("button",{onClick:i.onToggleRawMode,className:"nt-btn-sm",children:i.rawMode?"RAW":"READABLE"})]}),r==="uniforms"&&E.jsxs("span",{style:{fontSize:10,color:"#8ea0c8",padding:"5px 2px"},children:[i.uniformRows.length," uniforms"]})]}),r==="monitor"&&E.jsxs("div",{style:{flex:1,minHeight:0,overflow:"auto",padding:8,display:"flex",flexDirection:"column",gap:8},children:[E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0 2px"},children:[E.jsx("span",{style:{fontSize:11,color:"#d4def8",fontWeight:700,letterSpacing:.2},children:"System Health"}),E.jsxs("span",{style:{fontSize:10,color:"#8ea0c8"},children:[g.length," error(s) | ",i.stats.warnings.length," warning(s)"]})]}),E.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:6},children:$.map(w=>E.jsxs("div",{style:{border:"1px solid #364056",borderRadius:6,padding:"8px 9px",background:"#182031"},children:[E.jsx("div",{style:{fontSize:10,color:"#8ea0c8",marginBottom:3},children:w.title}),E.jsx("div",{style:{fontSize:12,color:w.severity==="fail"?"#ffb3b3":w.severity==="warn"?"#f3bd8e":"#9be9c1",fontWeight:700},children:w.value})]},w.title))}),E.jsxs("div",{style:{border:"1px solid #323a4d",borderRadius:6,background:"#151c29",overflow:"hidden"},children:[E.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid #2b3446",color:"#d4def8",fontSize:10,fontWeight:700},children:"Feedback"}),E.jsx("div",{style:{maxHeight:110,overflow:"auto"},children:m.map((w,R)=>E.jsxs("div",{style:{padding:"7px 8px",borderTop:R===0?"none":"1px solid #273044",color:w.severity==="fail"?"#ffb3b3":w.severity==="warn"?"#f3bd8e":"#9be9c1",fontSize:10,lineHeight:1.45,wordBreak:"break-word",fontFamily:"'Cascadia Code','Consolas',monospace"},children:[E.jsxs("span",{style:{fontWeight:700},children:[w.title,":"]})," ",w.message]},`${w.title}_${R}`))})]}),E.jsxs("div",{style:{border:"1px solid #31384a",borderRadius:6,background:"#161d2a",overflow:"hidden"},children:[E.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid #2b3446",color:"#d4def8",fontSize:10,fontWeight:700},children:"Metrics"}),E.jsxs("div",{style:{padding:"6px 8px",fontSize:11,color:"#b8c4e5",lineHeight:1.7},children:[E.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[E.jsx("span",{children:"Compile"}),E.jsxs("span",{children:[i.stats.compileTimeMs.toFixed(2)," ms"]})]}),E.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[E.jsx("span",{children:"Render p50 / p95"}),E.jsxs("span",{children:[(i.stats.renderP50Ms??0).toFixed(2)," / ",(i.stats.renderP95Ms??0).toFixed(2)," ms"]})]}),E.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[E.jsx("span",{children:"Nodes / Edges"}),E.jsxs("span",{children:[i.stats.nodeCount," / ",i.stats.edgeCount]})]}),E.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[E.jsx("span",{children:"Quality scale"}),E.jsx("span",{children:i.viewportQuality.scale.toFixed(2)})]})]})]}),E.jsxs("div",{style:{border:"1px solid #31384a",borderRadius:6,overflow:"hidden",background:"#131a27",minHeight:140},children:[E.jsxs("div",{style:{padding:"7px 8px",color:"#d4def8",fontSize:11,fontWeight:700,display:"flex",justifyContent:"space-between",borderBottom:"1px solid #2a3242"},children:[E.jsx("span",{children:"Tests and Monitor"}),E.jsxs("span",{style:{color:"#8ea0c8",fontWeight:500},children:[i.monitorRuns.length," runs"]})]}),E.jsxs("div",{style:{maxHeight:180,overflow:"auto"},children:[I.length===0&&E.jsx("div",{style:{padding:"10px 10px",color:"#8ea0c8",fontSize:11},children:"No monitor runs yet."}),I.map(w=>{const R=Array.isArray(w.checks)?w.checks:[],b=w.metrics||{renderP95Ms:0};return E.jsxs("div",{style:{borderTop:"1px solid #2a3242",padding:"7px 9px"},children:[E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:11,color:"#c7d4f2",marginBottom:4},children:[E.jsxs("span",{children:[E.jsx("span",{style:{color:ip(w)==="fail"?"#ffb3b3":ip(w)==="warn"?"#f3bd8e":"#9be9c1",fontWeight:700},children:w.mode.toUpperCase()})," ","| pass ",w.passCount," warn ",w.warnCount," fail ",w.failCount]}),E.jsxs("span",{style:{color:"#7f8db2"},children:[w.totalMs.toFixed(1)," ms"]})]}),E.jsxs("div",{style:{fontSize:10,color:"#8ea0c8",marginBottom:4},children:[new Date(w.ts).toLocaleString()," | p95 ",(b.renderP95Ms??0).toFixed(1)," ms"]}),E.jsx("div",{style:{fontSize:10,lineHeight:1.45},children:R.slice().sort((C,B)=>Yv(B.severity)-Yv(C.severity)).slice(0,4).map(C=>E.jsxs("div",{style:{color:C.severity==="fail"?"#ffb3b3":C.severity==="warn"?"#f3bd8e":"#9be9c1"},children:[C.label,": ",C.message]},`${w.id}_${C.id}`))})]},w.id)})]})]}),E.jsxs("div",{style:{border:"1px solid #31384a",borderRadius:6,maxHeight:160,overflow:"auto",background:"#141b27"},children:[E.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid #2a3242",color:"#d4def8",fontSize:10,fontWeight:700},children:"Recent Logs"}),_.slice(0,10).map(w=>E.jsx("pre",{style:{margin:0,padding:"6px 8px",borderTop:"1px solid #2a3242",color:w.level==="error"?"#ffb3b3":w.level==="warn"?"#f3bd8e":"#c7d4f2",fontSize:10,lineHeight:1.35,whiteSpace:"pre-wrap",wordBreak:"break-word",fontFamily:"'Cascadia Code','Consolas',monospace"},children:Ud(w,!1)},w.id)),_.length===0&&E.jsx("div",{style:{padding:"8px 10px",color:"#8ea0c8",fontSize:10},children:"No logs captured yet."})]})]}),r==="code"&&E.jsx("div",{style:{flex:1,minHeight:0,overflow:"auto",background:"#161b24"},children:E.jsx("pre",{style:{margin:0,padding:8,color:"#cbd4ee",fontSize:10,lineHeight:1.5,fontFamily:"'Cascadia Code','Consolas',monospace"},children:e||"// No generated source"})}),r==="uniforms"&&E.jsx("div",{style:{flex:1,minHeight:0,overflow:"auto"},children:E.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:9},children:[E.jsx("thead",{children:E.jsxs("tr",{style:{background:"#2a3140",color:"#c4cee8"},children:[E.jsx("th",{style:{textAlign:"left",padding:"4px 6px",fontWeight:700},children:"Name"}),E.jsx("th",{style:{textAlign:"left",padding:"4px 6px",fontWeight:700},children:"Type"}),E.jsx("th",{style:{textAlign:"left",padding:"4px 6px",fontWeight:700},children:"Value"})]})}),E.jsxs("tbody",{children:[i.uniformRows.map(w=>E.jsxs("tr",{style:{borderTop:"1px solid #343c4c"},children:[E.jsx("td",{style:{padding:"4px 6px",color:"#b6c0dc"},children:w.name}),E.jsx("td",{style:{padding:"4px 6px",color:"#b6c0dc"},children:w.type}),E.jsx("td",{style:{padding:"4px 6px",color:"#b6c0dc"},children:xC(w.value)})]},w.name)),i.uniformRows.length===0&&E.jsx("tr",{children:E.jsx("td",{colSpan:3,style:{padding:"8px 10px",color:"#8ea0c8"},children:"No uniforms in current shader."})})]})]})})]})}function gC(){const[i,e]=N.useState(()=>Tc());N.useEffect(()=>a_(e),[]);const t=N.useMemo(()=>[...i].reverse().slice(0,400),[i]),r=N.useCallback(()=>o_(),[]),o=N.useCallback(()=>s_(),[]),a=N.useMemo(()=>({error:i.filter(c=>c.level==="error").length,warn:i.filter(c=>c.level==="warn").length,info:i.filter(c=>c.level==="info").length}),[i]);return E.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",background:"#1b2230"},children:[E.jsxs("div",{style:{height:30,display:"flex",alignItems:"center",gap:6,padding:"0 8px",borderBottom:"1px solid #343c4c",flexShrink:0},children:[E.jsx("button",{onClick:r,className:"nt-btn-sm",children:"Download Logs"}),E.jsx("button",{onClick:o,className:"nt-btn-sm",children:"Clear"}),E.jsxs("span",{style:{marginLeft:"auto",fontSize:10,color:"#8ea0c8"},children:["err ",a.error," | warn ",a.warn," | info ",a.info]})]}),E.jsxs("div",{style:{flex:1,minHeight:0,overflow:"auto",background:"#131a27"},children:[t.length===0&&E.jsx("div",{style:{padding:"10px 12px",color:"#8ea0c8",fontSize:10},children:"No logs captured yet."}),t.map(c=>E.jsx("pre",{style:{margin:0,padding:"8px 10px",borderTop:"1px solid #2a3242",color:c.level==="error"?"#ffb3b3":c.level==="warn"?"#f3bd8e":"#c7d4f2",fontSize:10,lineHeight:1.4,whiteSpace:"pre-wrap",wordBreak:"break-word",fontFamily:"'Cascadia Code','Consolas',monospace"},children:Ud(c,!0)},c.id))]})]})}function vC(){const i=ha(),[e,t]=N.useState(new Set(["root","graph","nodes","outputs"])),r=N.useCallback(g=>{t(m=>{const M=new Set(m);return M.has(g)?M.delete(g):M.add(g),M})},[]),o=N.useMemo(()=>new Map(i.graph.nodes.map(g=>[g.id,g])),[i.graph.nodes]),a=N.useMemo(()=>({baseColor:rl(i.graph,"baseColor"),roughness:rl(i.graph,"roughness"),normal:rl(i.graph,"normal"),metallic:rl(i.graph,"metallic"),height:rl(i.graph,"height")}),[i.graph.nodes]),c=N.useMemo(()=>[...i.graph.nodes].sort((g,m)=>{var x,y;const M=((x=Mt[g.type])==null?void 0:x.label)||g.type,T=((y=Mt[m.type])==null?void 0:y.label)||m.type;return M.localeCompare(T)||g.id.localeCompare(m.id)}),[i.graph.nodes]),f=N.useMemo(()=>[...i.graph.edges].sort((g,m)=>`${g.fromId}:${g.fromPort}>${g.toId}:${g.toPort}`.localeCompare(`${m.fromId}:${m.fromPort}>${m.toId}:${m.toPort}`)),[i.graph.edges]),p=N.useMemo(()=>vl(i.graph),[i.graph.nodes,i.graph.edges]),u=["baseColor","roughness","normal","metallic","height"],h=N.useMemo(()=>Qx("pbr_default"),[]),_=N.useCallback(g=>{i.onSelectionChange(g)},[i]);return E.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",background:"#242730"},children:E.jsxs("div",{style:{flex:1,overflow:"auto",padding:8,fontSize:11},children:[E.jsx(nl,{label:"atomicgraph.ag",depth:0,open:e.has("root"),onToggle:()=>r("root")}),e.has("root")&&E.jsxs(E.Fragment,{children:[E.jsx(nl,{label:"graph",depth:1,count:i.graph.nodes.length,open:e.has("graph"),onToggle:()=>r("graph")}),e.has("graph")&&E.jsxs(E.Fragment,{children:[E.jsx(nl,{label:"nodes",depth:2,count:c.length,open:e.has("nodes"),onToggle:()=>r("nodes")}),e.has("nodes")&&c.map(g=>{var y;const m=Mt[g.type],M=i.selectedNodeId===g.id,T=i.pinnedPreviewNodeId===g.id,x=(y=i.nodeTimings)==null?void 0:y[g.id];return E.jsx(_d,{depth:3,label:`${(m==null?void 0:m.label)||g.type} (${g.id})`,right:x!=null?`${x.toFixed(1)}ms`:T?"PIN":void 0,active:M,accent:T?"#f0c43e":void 0,onClick:()=>_(g.id),onDoubleClick:()=>i.onPinPreview(i.pinnedPreviewNodeId===g.id?null:g.id)},`node_${g.id}`)}),E.jsx(nl,{label:"edges",depth:2,count:f.length,open:e.has("edges"),onToggle:()=>r("edges")}),e.has("edges")&&f.map(g=>{var y,L;const m=o.get(g.fromId),M=o.get(g.toId),T=m?((y=Mt[m.type])==null?void 0:y.label)||m.type:g.fromId,x=M?((L=Mt[M.type])==null?void 0:L.label)||M.type:g.toId;return E.jsx(_d,{depth:3,label:`${T}.${g.fromPort} -> ${x}.${g.toPort}`,right:g.id,onClick:()=>{m&&_(m.id)}},`edge_${g.id}`)})]}),E.jsx(nl,{label:"outputs",depth:1,count:u.length,open:e.has("outputs"),onToggle:()=>r("outputs")}),e.has("outputs")&&u.map(g=>{var L;const m=p[g],M=m?o.get(m.fromId):null,T=M?((L=Mt[M.type])==null?void 0:L.label)||M.type:"unconnected",x=!!m,y=a[g];return E.jsx(_d,{depth:2,label:`${g} -> ${T}`,right:m?`${m.fromId}.${m.fromPort}`:"-",active:y?i.selectedNodeId===y.id:!1,accent:x?"#3ecf8e":"#8892aa",onClick:()=>{M?_(M.id):y&&_(y.id)}},`out_${g}`)}),E.jsx(nl,{label:"materials",depth:1,count:(h==null?void 0:h.targets.length)??0,open:e.has("materials"),onToggle:()=>r("materials")}),e.has("materials")&&((h==null?void 0:h.targets)??[]).map(g=>E.jsx(_d,{depth:2,label:`${g.channel} (${g.format})`,right:`texture_${g.fileSuffix}`,accent:p[g.channel]?"#3ecf8e":"#8892aa",onClick:()=>{const m=a[g.channel];m&&_(m.id)}},`mat_${g.channel}`))]})]})})}function nl({label:i,depth:e,count:t,open:r,onToggle:o}){return E.jsxs("button",{onClick:o,style:{display:"flex",alignItems:"center",width:"100%",height:28,padding:`0 8px 0 ${12+e*16}px`,border:"none",background:"transparent",color:"#dbe4ff",fontSize:12,cursor:"pointer",textAlign:"left",borderRadius:4},children:[E.jsx("span",{style:{width:12,color:"#8ea0c8",fontSize:10},children:r?"▼":"▶"}),E.jsx("span",{children:i}),t!=null&&E.jsxs("span",{style:{marginLeft:6,color:"#7b8bb2",fontSize:10},children:["(",t,")"]})]})}function _d({label:i,depth:e,right:t,active:r,accent:o,onClick:a,onDoubleClick:c}){return E.jsxs("button",{onClick:a,onDoubleClick:c,style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",height:26,padding:`0 8px 0 ${24+e*16}px`,border:"1px solid transparent",background:r?"#314775":"transparent",color:o||"#c7d4f2",fontSize:12,cursor:a?"pointer":"default",textAlign:"left",borderRadius:4},children:[E.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:i}),t&&E.jsx("span",{style:{marginLeft:10,color:"#8ea0c8",fontSize:10,flexShrink:0},children:t})]})}function xC(i){return Array.isArray(i)?`[${i.join(", ")}]`:typeof i=="boolean"?i?"true":"false":String(i)}const _C={graph:sC,library:oC,preview:aC,preview3d:pC,code:mC,logs:gC,explorer:vC};function yC(i,e){if(i==="atom_graph")return E.jsx(hC,{viewId:e},e);const t=_C[i];return t?E.jsx(t,{},e):E.jsxs("div",{className:"dk-empty",children:["Unknown view: ",i]})}const ix={schemaVersion:1,resolution:512,nodes:[{id:"out_base",type:"output_baseColor",x:1664,y:104,params:{}},{id:"out_rough",type:"output_roughness",x:1664,y:304,params:{}},{id:"out_normal",type:"output_normal",x:1664,y:504,params:{}},{id:"out_metal",type:"output_metallic",x:1664,y:704,params:{}},{id:"out_height",type:"output_height",x:1664,y:904,params:{}},{id:"base_color",type:"uniform_color",x:80,y:90,params:{r:.16,g:.26,b:.36}},{id:"spots_main",type:"bnw_spots2_v2",x:80,y:380,params:{scale:16,tileOffsetX:0,tileOffsetY:0,seed:4242,nonSquareExpansion:!0,grainAmount:.2,grainThreshold:.88,contrast:1.1}},{id:"transform_spots",type:"transform_2d",x:384,y:380,params:{offsetX:.02,offsetY:-.01,rotation:14,scale:1.08,tile:!0}},{id:"safe_spots",type:"safe_transform",x:688,y:380,params:{offsetX:0,offsetY:0,scale:1,tile:!1}},{id:"histogram_height",type:"histogram_range",x:992,y:380,params:{inMin:.08,inMax:.92,outMin:0,outMax:1}},{id:"levels_main",type:"levels",x:1296,y:380,params:{inMin:.03,inMax:.97,gamma:.9}},{id:"highpass_rough",type:"highpass_grayscale",x:1296,y:612,params:{radius:1.6,intensity:1.25}},{id:"normal_from_height",type:"height_to_normal",x:1296,y:844,params:{strength:2,radius:1,flipY:!1}},{id:"normal_finalize",type:"normal_normalize",x:1504,y:844,params:{flipY:!1}}],edges:[{id:"e1",fromId:"spots_main",fromPort:0,toId:"transform_spots",toPort:0},{id:"e2",fromId:"transform_spots",fromPort:0,toId:"safe_spots",toPort:0},{id:"e3",fromId:"safe_spots",fromPort:0,toId:"histogram_height",toPort:0},{id:"e4",fromId:"histogram_height",fromPort:0,toId:"levels_main",toPort:0},{id:"e5",fromId:"levels_main",fromPort:0,toId:"highpass_rough",toPort:0},{id:"e6",fromId:"levels_main",fromPort:0,toId:"normal_from_height",toPort:0},{id:"e7",fromId:"normal_from_height",fromPort:0,toId:"normal_finalize",toPort:0},{id:"e8",fromId:"normal_finalize",fromPort:0,toId:"out_normal",toPort:0},{id:"e9",fromId:"levels_main",fromPort:0,toId:"out_height",toPort:0},{id:"e10",fromId:"highpass_rough",fromPort:0,toId:"out_rough",toPort:0},{id:"e11",fromId:"levels_main",fromPort:0,toId:"out_metal",toPort:0},{id:"e12",fromId:"base_color",fromPort:0,toId:"out_base",toPort:0}],frames:[{id:"fr_outputs",x:1608,y:52,width:344,height:972,label:"Outputs",color:"#4d78bc"}]},SC=100,cp=96,MC=32,up="atomicgraph.autosave.v1",yd=["#4d78bc","#2f9e7f","#a97b2c","#b1597a","#6b66c7"],bC=(i,e)=>Math.round(i/e)*e,dp=i=>JSON.parse(JSON.stringify(i));function wC(i){const e=[];let t=0;for(const[r,o]of Object.entries(Mt)){if(xn(r))continue;const a={};for(const[p,u]of Object.entries(o.params))a[p]=u.default;const c=t%6,f=Math.floor(t/6);e.push({id:`tpl_${r}`,type:r,x:80+c*300,y:80+f*180,params:a}),t+=1}return{schemaVersion:Ds,resolution:Math.max(64,i||512),nodes:e,edges:[]}}const EC=i=>{const e=i;if(!e)return!1;const t=e.tagName;return e.isContentEditable||e.closest('[contenteditable="true"]')?!0:t==="INPUT"||t==="TEXTAREA"||t==="SELECT"},rx=i=>{const e=i.trim().toLowerCase();return e==="del"?"delete":e==="esc"?"escape":e==="spacebar"||e==="space"?" ":e},TC=i=>{const e=i.key||"";return e===" "?" ":e.toLowerCase()},CC=(i,e)=>{if(!i)return!1;const t=i.split("+").map(u=>u.trim()).filter(Boolean);if(t.length===0)return!1;let r=!1,o=!1,a=!1,c=!1,f="";for(const u of t){const h=u.toLowerCase();h==="ctrl"||h==="control"?r=!0:h==="cmd"||h==="command"||h==="meta"?o=!0:h==="alt"||h==="option"?a=!0:h==="shift"?c=!0:f=u}const p=e.ctrlKey||e.metaKey;return r&&!p||o&&!e.metaKey||!r&&!o&&p||e.altKey!==a||e.shiftKey!==c||!f?!1:rx(f)===rx(TC(e))};function AC(i){return!!i&&Array.isArray(i.nodes)&&Array.isArray(i.edges)}function RC(){return{schemaVersion:1,resolution:512,nodes:[{id:"atom_in",type:"atom_input_a",x:80,y:140,params:{}},{id:"atom_mul",type:"multiply",x:260,y:140,params:{b:1.12}},{id:"atom_remap",type:"remap",x:450,y:140,params:{inLo:.04,inHi:.96,outLo:0,outHi:1}},{id:"atom_lvl",type:"levels",x:660,y:140,params:{inMin:.03,inMax:.97,gamma:.95}},{id:"atom_clamp",type:"clamp01",x:850,y:140,params:{}},{id:"atom_out",type:"output_height",x:1040,y:140,params:{}}],edges:[{id:"atom_e1",fromId:"atom_in",fromPort:0,toId:"atom_mul",toPort:0},{id:"atom_e2",fromId:"atom_mul",fromPort:0,toId:"atom_remap",toPort:0},{id:"atom_e3",fromId:"atom_remap",fromPort:0,toId:"atom_lvl",toPort:0},{id:"atom_e4",fromId:"atom_lvl",fromPort:0,toId:"atom_clamp",toPort:0},{id:"atom_e5",fromId:"atom_clamp",fromPort:0,toId:"atom_out",toPort:0}]}}function PC(i){const e={},t=(i==null?void 0:i.params)||{};for(const[r,o]of Object.entries(t))r!=="subgraph"&&(e[r]=o);return{schemaVersion:1,resolution:512,nodes:[{id:"perlin_core",type:"perlin",x:100,y:140,params:e},{id:"atom_out",type:"output_height",x:360,y:140,params:{}}],edges:[{id:"atom_e1",fromId:"perlin_core",fromPort:0,toId:"atom_out",toPort:0}]}}function IC(i){return i.type==="perlin"?PC(i):RC()}function LC(i){return i==="atom_graph"||i==="perlin"}function DC(){return{schemaVersion:Ds,resolution:512,nodes:[{id:"n_base",type:"uniform_color",x:120,y:120,params:{r:.22,g:.3,b:.38}},{id:"n_noise_a",type:"perlin",x:180,y:180,params:{scale:5.2,seed:42,tileOffsetX:0,tileOffsetY:0,nonSquare:!0}},{id:"n_noise_b",type:"gaussian_noise",x:220,y:150,params:{scale:10,mean:.5,stdDev:.17,seed:91,tileOffsetX:0,tileOffsetY:0,nonSquare:!0}},{id:"n_transform_a",type:"transform_2d",x:160,y:230,params:{offsetX:.01,offsetY:.02,rotation:8,scale:1.05,tile:!0}},{id:"n_warp_a",type:"warp",x:210,y:250,params:{strength:.26}},{id:"n_warp_b",type:"warp",x:250,y:200,params:{strength:.18}},{id:"n_uv",type:"uv",x:200,y:300,params:{}},{id:"n_vec_warp",type:"vector_warp",x:280,y:270,params:{intensity:.18,centered:!0,tile:!0}},{id:"n_edge",type:"edge_detect",x:290,y:190,params:{radius:1.2,strength:1.4}},{id:"n_blend_h",type:"blend",x:320,y:220,params:{mode:"multiply",opacity:.72}},{id:"n_non_uni",type:"non_uniform_blur",x:300,y:260,params:{radius:2,samples:4}},{id:"n_hist",type:"histogram_range",x:330,y:150,params:{inMin:.1,inMax:.9,outMin:0,outMax:1}},{id:"n_levels_h",type:"levels",x:300,y:120,params:{inMin:.04,inMax:.97,gamma:.9}},{id:"n_remap_h",type:"remap",x:360,y:170,params:{inLo:.08,inHi:.9,outLo:0,outHi:1}},{id:"n_norm",type:"height_to_normal",x:390,y:210,params:{strength:1.6,radius:1,flipY:!1}},{id:"n_norm_fix",type:"normal_normalize",x:420,y:240,params:{flipY:!1}},{id:"out_base",type:"output_baseColor",x:430,y:100,params:{}},{id:"out_rough",type:"output_roughness",x:450,y:180,params:{}},{id:"out_normal",type:"output_normal",x:470,y:260,params:{}},{id:"out_metal",type:"output_metallic",x:500,y:140,params:{}},{id:"out_height",type:"output_height",x:520,y:220,params:{}}],edges:[{id:"d1",fromId:"n_noise_a",fromPort:0,toId:"n_transform_a",toPort:0},{id:"d1b",fromId:"n_transform_a",fromPort:0,toId:"n_warp_a",toPort:0},{id:"d2",fromId:"n_noise_b",fromPort:0,toId:"n_warp_b",toPort:0},{id:"d2b",fromId:"n_warp_b",fromPort:0,toId:"n_vec_warp",toPort:0},{id:"d2c",fromId:"n_uv",fromPort:0,toId:"n_vec_warp",toPort:1},{id:"d3",fromId:"n_warp_a",fromPort:0,toId:"n_blend_h",toPort:0},{id:"d4",fromId:"n_warp_b",fromPort:0,toId:"n_blend_h",toPort:1},{id:"d5",fromId:"n_blend_h",fromPort:0,toId:"n_non_uni",toPort:0},{id:"d5b",fromId:"n_noise_a",fromPort:0,toId:"n_non_uni",toPort:1},{id:"d5c",fromId:"n_non_uni",fromPort:0,toId:"n_hist",toPort:0},{id:"d6",fromId:"n_hist",fromPort:0,toId:"n_levels_h",toPort:0},{id:"d6b",fromId:"n_levels_h",fromPort:0,toId:"n_remap_h",toPort:0},{id:"d7",fromId:"n_remap_h",fromPort:0,toId:"n_norm",toPort:0},{id:"d8",fromId:"n_remap_h",fromPort:0,toId:"out_height",toPort:0},{id:"d9",fromId:"n_norm",fromPort:0,toId:"n_norm_fix",toPort:0},{id:"d9b",fromId:"n_norm_fix",fromPort:0,toId:"out_normal",toPort:0},{id:"d10",fromId:"n_edge",fromPort:0,toId:"out_rough",toPort:0},{id:"d11",fromId:"n_vec_warp",fromPort:0,toId:"n_edge",toPort:0},{id:"d12",fromId:"n_base",fromPort:0,toId:"out_base",toPort:0},{id:"d13",fromId:"n_levels_h",fromPort:0,toId:"out_metal",toPort:0}],frames:[{id:"demo_out",x:420,y:70,width:340,height:260,label:"Outputs",color:"#4d78bc"}]}}function sx(i){const e=vl(i);return e.height?"height":e.baseColor?"baseColor":e.normal?"normal":e.roughness?"roughness":e.metallic?"metallic":"baseColor"}function ox(i,e,t){const r=Ec(i.type);return r||i.type==="output"?{requestKey:`out:${i.id}:${r??t}`,mode:"output",outputChannel:r??t}:{requestKey:`node:${i.id}:p${e}`,mode:"node",outputChannel:t}}function NC(){const i=N.useRef(null),e=N.useRef(null);i.current||(i.current=new Co(ix)),e.current||(e.current=new oT(ix));const[t,r]=N.useState(i.current.serialize()),o=N.useRef(t),a=!0,[c,f]=N.useState(!1),[p,u]=N.useState(i.current.resolution||512),h=N.useMemo(()=>Math.min(p,1024),[p]),[_,g]=N.useState(null),[m,M]=N.useState([]),[T,x]=N.useState([]),[y,L]=N.useState(null),k=N.useRef(null),[I,$]=N.useState(null),[w,R]=N.useState(null),[b,C]=N.useState({}),[B,U]=N.useState({}),j=N.useRef({}),G=N.useRef(new Map),J=N.useRef({}),se=N.useRef({}),[ie,K]=N.useState({}),[ne,X]=N.useState(null),oe=N.useRef(""),[F,Y]=N.useState(0),[Ie,Re]=N.useState(0),et=N.useRef(null),[ae,Ce]=N.useState(""),[Te,Je]=N.useState(new Set),je=N.useRef({past:[],future:[]}),[ot,cn]=N.useState(!1),[Et,Rt]=N.useState(null),[Gt,bt]=N.useState(!1),nn=N.useRef(0),Z=300,fn=.5,$t="performance_first",[jt,ut]=N.useState({scale:1,reason:"initial",last_change_at:Date.now()}),z=ot?16.6:22,A=Math.min(ot?fn:1,jt.scale),[re,Ae]=N.useState(null),[Le,we]=N.useState(0),[st,He]=N.useState(0),[at,vt]=N.useState(!1),[ke,We]=N.useState(0),rt=N.useRef(0),[it,tt]=N.useState(!1),[Ct,Q]=N.useState(!1),Fe=N.useRef(0),$e=N.useRef(""),Ke=N.useRef(""),Oe=N.useRef(0),be=N.useRef([]),lt=N.useRef(0),Pt=N.useRef(0),en=N.useRef(0),Yt=N.useRef(0),Fn=N.useRef(0),Sn=N.useRef(null),zi=N.useRef(!1),Qn=N.useRef(!1),ir=N.useRef(new Map),{root:Mi,floating:Pi,setActiveTab:oi,resetLayout:$i,addView:ei,savePreset:Us,loadPreset:$r,getPresetNames:Ii}=Ic(),{hasGraphTab:Sr,has2DPreviewTab:Vi,has3DPreviewTab:ai}=N.useMemo(()=>{const O=[...xl(Mi),...Pi.map(ge=>ge.panel)];let H=!1,ee=!1,de=!1;for(const ge of O){for(const Pe of ge.tabs)if(Pe.type==="graph"&&(H=!0),Pe.type==="preview"&&(ee=!0),Pe.type==="preview3d"&&(de=!0),H&&ee&&de)break;if(H&&ee&&de)break}return{hasGraphTab:H,has2DPreviewTab:ee,has3DPreviewTab:de}},[Pi,Mi]),On=Sr,Wn=ai,Mr=N.useMemo(()=>!ai||it||ne?!1:Gt||!On,[ai,it,ne,Gt,On]),[Fs,gn]=N.useState(!1),[hn,D]=N.useState(null),[ue,xe]=N.useState(!1),[fe,he]=N.useState(null),[nt,V]=N.useState(0),[q,le]=N.useState(null),[Se,Ee]=N.useState(()=>{try{const O=window.localStorage.getItem("atomicgraph.snap.enabled");return O==null?!0:O==="1"}catch{return!0}}),[Ne,De]=N.useState(MC),[Xe,Qe]=N.useState(()=>{try{return!!window.localStorage.getItem(up)}catch{return!1}}),[dt,ft]=N.useState(!1),yt=N.useRef(0),Ve=N.useRef(0),[Kt,It]=N.useState(()=>hT()),[Vt,Ln]=N.useState(!1),[Dn,Mn]=N.useState({}),[Ut,At]=N.useState(!1),[ti,En]=N.useState(null),jn=N.useRef(0),Hi=N.useRef(null),rr=N.useCallback((O,H)=>{if(X(O),!O){oe.current="";return}if(oe.current===O)return;oe.current=O;const ee=O.split(`
`)[0]||O;Cn({level:"error",source:H,message:ee,details:O})},[]),Vr=N.useCallback(O=>{tt(O)},[]),sr=N.useCallback((O,H="ok")=>{En({text:O,tone:H}),jn.current&&window.clearTimeout(jn.current),jn.current=window.setTimeout(()=>{En(null),jn.current=0},2600)},[]);N.useEffect(()=>()=>{jn.current&&window.clearTimeout(jn.current)},[]);const Io=N.useCallback(O=>{const H=performance.now()+Math.max(0,O);We(ee=>Math.max(ee,H))},[]);N.useEffect(()=>{if(rt.current&&(window.clearTimeout(rt.current),rt.current=0),ke<=0){vt(!1);return}const O=Math.max(0,ke-performance.now());if(O<=1){We(0),vt(!1);return}return vt(!0),rt.current=window.setTimeout(()=>{We(0),vt(!1),rt.current=0},O+6),()=>{rt.current&&(window.clearTimeout(rt.current),rt.current=0)}},[ke]),N.useEffect(()=>{uT()},[]),N.useEffect(()=>()=>{nn.current&&window.clearTimeout(nn.current),Fe.current&&window.clearTimeout(Fe.current),rt.current&&window.clearTimeout(rt.current),Sn.current&&(Sn.current.terminate(),Sn.current=null)},[]),N.useEffect(()=>{if(typeof Worker>"u"){Qn.current=!0;return}try{const O=new Worker(new URL("/assets/previewCompile.worker-BUlRYJ7s.js",import.meta.url),{type:"module"});return O.onmessage=H=>{const ee=H.data;if(!(!ee||typeof ee!="object")){if(ee.type==="ready"){zi.current=!0,Q(!0);return}if(ee.type==="compiled"){if(ee.signature!==Gi.current)return;ir.current.set(ee.requestKey,ee.compiled);return}if(ee.type==="compile_error"){if(ee.signature!==Gi.current)return;Cn({level:"warn",source:"preview-worker",message:"Worker preview compile failed",details:`request=${ee.requestKey} error=${ee.error}`,graph_hash:ee.signature});return}ee.type==="fatal"&&(Qn.current=!0,zi.current=!1,Q(!1),ir.current.clear(),Cn({level:"warn",source:"preview-worker",message:"Preview compile worker disabled after fatal error",details:ee.error}))}},O.onerror=H=>{Qn.current=!0,zi.current=!1,Q(!1),ir.current.clear(),Cn({level:"warn",source:"preview-worker",message:"Preview compile worker crashed",details:H.message||String(H)})},Sn.current=O,()=>{O.terminate(),Sn.current===O&&(Sn.current=null)}}catch(O){Qn.current=!0,zi.current=!1,Q(!1),Cn({level:"warn",source:"preview-worker",message:"Preview compile worker unavailable",details:(O==null?void 0:O.message)||String(O)})}},[]),N.useEffect(()=>{try{window.localStorage.setItem("atomicgraph.snap.enabled",Se?"1":"0"),window.localStorage.setItem("atomicgraph.snap.size",String(Ne))}catch{}},[Se,Ne]),N.useEffect(()=>{const O=window.setTimeout(()=>{try{const H={savedAt:Date.now(),patternSize:p,graph:o.current};window.localStorage.setItem(up,JSON.stringify(H)),Qe(!0)}catch{}},700);return()=>window.clearTimeout(O)},[t,p]),N.useEffect(()=>{se.current=B},[B]);const Gi=N.useRef(""),bi=N.useRef(!1);N.useEffect(()=>{o.current=t;const O=$v(t);if(O===Gi.current){bi.current=!0,e.current.updateNodePositions(t.nodes,t.frames||[]);return}bi.current=!1,Gi.current=O,e.current.load({schemaVersion:Ds,...t,meta:e.current.getIR().meta})},[t]);const br=N.useCallback(O=>{je.current.past.push(dp(O)),je.current.past.length>SC&&je.current.past.shift(),je.current.future=[]},[]),Li=N.useCallback(O=>{i.current=new Co(O),r(O)},[]),Tt=N.useCallback((O,H=!0)=>{const ee=i.current.serialize();if(O(i.current)===!1)return!1;const ge=i.current.serialize();return H&&br(ee),r(ge),!0},[br]),Hr=N.useCallback(O=>{u(O),Tt(H=>{H.setResolution(O)},!0)},[Tt]),Gd=N.useCallback(()=>{le("frame_all"),V(O=>O+1)},[]),pa=N.useCallback(()=>{le("reset"),V(O=>O+1)},[]),Lo=N.useCallback(()=>{try{const O=window.localStorage.getItem(up);if(!O)return;const H=JSON.parse(O);if(!H||!H.graph||!Array.isArray(H.graph.nodes)||!Array.isArray(H.graph.edges))return;Li(H.graph);const ee=H.patternSize??H.graph.resolution??512;u(ee),je.current={past:[],future:[]},g(null),Cn({level:"info",source:"project-load",message:"Autosave restored",details:H.savedAt?new Date(H.savedAt).toLocaleString():void 0})}catch(O){Cn({level:"warn",source:"project-load",message:"Failed to restore autosave",details:O instanceof Error?O.message:String(O)})}},[Li]),Lc=N.useCallback(O=>{M(O)},[]),Tl=N.useCallback(O=>{x(H=>H.length===O.length&&H.every((ee,de)=>ee===O[de])?H:O)},[]);N.useEffect(()=>{if(!_){M([]);return}M(O=>O.length>0&&O.includes(_)?O:[_])},[_]);const ma=N.useCallback(()=>{const O=DC();Li(O),u(O.resolution||512),g(null),M([]),je.current={past:[],future:[]},sr("Demo DAG loaded. Run Auto Layout.","ok"),Cn({level:"info",source:"layout",message:"Auto-layout demo graph loaded"})},[Li,sr]),Cl=N.useCallback(async()=>(Hi.current||(Hi.current=dm(()=>import("./elkLayout-C2K-RU4x.js"),[])),(await Hi.current).autoLayout),[]),fi=N.useCallback(()=>{cn(!0),nn.current&&window.clearTimeout(nn.current),nn.current=window.setTimeout(()=>cn(!1),Z)},[]),Os=N.useCallback(()=>{fi()},[fi]),Bs=N.useCallback(()=>{fi()},[fi]),pn=N.useCallback(O=>Se?bC(O,Ne):O,[Se,Ne]),Do=N.useCallback((O,H)=>{fi(),Tt(ee=>{ee.moveNode(O,pn(H.x),pn(H.y))},!1)},[Tt,fi,pn]),Dc=N.useCallback((O,H)=>{fi(),Tt(ee=>{ee.moveFrame(O,H.x,H.y)},!1)},[Tt,fi]),Nc=N.useCallback((O,H)=>{fi(),Tt(ee=>{ee.resizeFrame(O,H.width,H.height)},!1)},[Tt,fi]),zs=N.useCallback(O=>{Tt(H=>{H.removeFrame(O)},!0)},[Tt]),wr=N.useCallback((O,H)=>{Tt(ee=>{ee.updateFrame(O,H)},!0)},[Tt]),$s=N.useCallback((O,H)=>{let ee=null;return Tt(de=>{var ye;const ge=((ye=de.serialize().frames)==null?void 0:ye.length)??0;return ee=de.addFrame(O,H,420,260,`Frame ${ge+1}`,"#4d78bc").id,!0},!0),ee},[Tt]),No=N.useCallback(O=>{Tt(H=>{H.removeEdge(O)},!0)},[Tt]),Er=N.useCallback((O,H,ee,de)=>{Tt(ge=>ge.addEdge(O,H,ee,de??0)?!0:(ge.lastValidationError&&(Cn({level:"warn",source:"graph-connect",message:ge.lastValidationError}),alert(ge.lastValidationError)),!1),!0)},[Tt]),ga=N.useCallback((O,H,ee)=>{fi(),Tt(de=>{de.updateParam(O,H,ee);const ge=de.serialize().nodes.find(Pe=>Pe.id===O);if((ge==null?void 0:ge.type)==="remote"&&H==="value"){const Pe=ge.params.target,ye=ge.params.key;Pe&&ye&&de.updateParam(Pe,ye,ee)}},!1)},[Tt,fi]),ko=N.useCallback((O,H,ee)=>{const de=pn(H??100+Math.random()*200),ge=pn(ee??60+Math.random()*240);Tt(Pe=>{const ye=Pe.addNode(O,de,ge);return ye?(g(ye.id),!0):!1},!0)},[Tt,pn]),cs=N.useCallback(O=>{const H=t.nodes.find(ee=>ee.id===O);H&&xn(H.type)||(Tt(ee=>{ee.removeNode(O)},!0),g(ee=>ee===O?null:ee))},[Tt,t.nodes]),Uo=N.useCallback(O=>{var qe;const H=o.current.nodes.find(Be=>Be.id===O);if(!H||!LC(H.type))return;const ee=xl(Mi);for(const Be of Pi)ee.push(Be.panel);const de=new Map;for(const Be of ee)for(const Ye of Be.tabs)de.set(Ye.id,Be.id);const ge=Object.entries(Dn).find(([,Be])=>Be===O);if(ge){const[Be]=ge,Ye=de.get(Be);if(Ye){oi(Ye,Be);return}Mn(Ft=>{const Zt={...Ft};return delete Zt[Be],Zt})}AC((qe=H.params)==null?void 0:qe.subgraph)||Tt(Be=>{Be.updateParam(O,"subgraph",IC(H))},!0);const Pe=H.type==="perlin"?"Perlin":"Atom",ye=ei("atom_graph",`${Pe}: ${O}`);Mn(Be=>({...Be,[ye]:O}))},[ei,Tt,Dn,Pi,Mi,oi]),va=N.useCallback(()=>{const O=e.current.serialize(),H=new Blob([O],{type:"application/json"}),ee=URL.createObjectURL(H),de=document.createElement("a");de.href=ee,de.download=`project_v${Ds}_${Date.now()}.json`,de.click(),URL.revokeObjectURL(ee)},[]),kc=N.useCallback(O=>{var de;const H=(de=O.target.files)==null?void 0:de[0];if(!H)return;const ee=new FileReader;ee.onload=ge=>{var Pe;try{const ye=JSON.parse((Pe=ge.target)==null?void 0:Pe.result);if(!ye.nodes||!ye.edges)throw new Error("Invalid project file");const qe=e.current.load(ye);i.current=new Co(qe),r(qe),u(e.current.getResolution()),i.current.setResolution(e.current.getResolution()),je.current={past:[],future:[]},g(null)}catch(ye){Cn({level:"error",source:"project-load",message:(ye==null?void 0:ye.message)||"Invalid project file",details:ye instanceof Error?ye.stack:void 0}),alert("Invalid project file")}},ee.readAsText(H),et.current&&(et.current.value="")},[]),hi=N.useCallback(()=>{if(!_)return;const O=t.nodes.find(H=>H.id===_);!O||xn(O.type)||L({type:O.type,x:O.x,y:O.y,params:{...O.params}})},[t.nodes,_]),us=N.useCallback(O=>{const H=t.nodes.find(ee=>ee.id===O);!H||xn(H.type)||(k.current={sourceType:H.type,params:{...H.params}})},[t.nodes]),xa=N.useCallback(O=>{Tt(H=>{const ee=H.serialize().nodes.find(ge=>ge.id===O);if(!ee||xn(ee.type))return!1;const de=Mt[ee.type];if(!de)return!1;for(const[ge,Pe]of Object.entries(de.params))H.updateParam(O,ge,Pe.default);return!0},!0)},[Tt]),Vs=N.useCallback(O=>{var Pe;const H=k.current;if(!H)return!1;const ee=t.nodes.find(ye=>ye.id===O);if(!ee||xn(ee.type))return!1;const de=Mt[ee.type],ge=Mt[H.sourceType];if(!de)return!1;for(const[ye,qe]of Object.entries(H.params)){const Be=de.params[ye],Ye=(Pe=ge==null?void 0:ge.params)==null?void 0:Pe[ye];if(Be&&!(Ye&&Ye.type!==Be.type)&&!(Be.type==="select"&&Be.options&&!Be.options.includes(String(qe))))return!0}return!1},[t.nodes]),Uc=N.useCallback(O=>{const H=k.current;H&&Tt(ee=>{var qe;const de=ee.serialize().nodes.find(Be=>Be.id===O);if(!de||xn(de.type))return!1;const ge=Mt[de.type],Pe=Mt[H.sourceType];if(!ge)return!1;let ye=0;for(const[Be,Ye]of Object.entries(H.params)){const Ft=ge.params[Be],Zt=(qe=Pe==null?void 0:Pe.params)==null?void 0:qe[Be];Ft&&(Zt&&Zt.type!==Ft.type||Ft.type==="select"&&Ft.options&&!Ft.options.includes(String(Ye))||(ee.updateParam(O,Be,Ye),ye+=1))}return ye>0},!0)},[Tt]),_a=N.useCallback((O,H)=>{y&&Tt(ee=>{const de=pn(typeof O=="number"?O:y.x+40),ge=pn(typeof H=="number"?H:y.y+40),Pe=ee.addNode(y.type,de,ge);return Pe?(Object.entries(y.params).forEach(([ye,qe])=>ee.updateParam(Pe.id,ye,qe)),g(Pe.id),!0):!1},!0)},[Tt,y,pn]),ya=N.useCallback(()=>{hi(),_&&cs(_)},[hi,cs,_]);N.useCallback(()=>{if(!_)return;const O=t.nodes.find(H=>H.id===_);!O||xn(O.type)||Tt(H=>{const ee=H.addNode(O.type,pn(O.x+40),pn(O.y+40));return ee?(Object.entries(O.params).forEach(([de,ge])=>H.updateParam(ee.id,de,ge)),g(ee.id),!0):!1},!0)},[Tt,t.nodes,_,pn]);const Tr=N.useCallback(()=>{const O=je.current.past;if(O.length===0)return;const H=O.pop();je.current.future.unshift(dp(i.current.serialize())),Li(H),u(H.resolution||512)},[Li]),Cr=N.useCallback(()=>{const O=je.current.future;if(O.length===0)return;const H=O.shift();je.current.past.push(dp(i.current.serialize())),Li(H),u(H.resolution||512)},[Li]),Hs=N.useCallback((O,H,ee)=>{let de=null;return Tt(ge=>{const Pe=ge.addNode(O,pn(H),pn(ee));return Pe?(de=Pe.id,g(Pe.id),!0):!1},!0),de},[Tt,pn]),Fc=N.useCallback((O,H,ee,de=0)=>{let ge=!1;return Tt(Pe=>Pe.addEdge(O,H,ee,de)?(ge=!0,!0):!1,!0),ge},[Tt]),Oc=N.useCallback(O=>{const H=t.nodes.find(de=>de.id===O);if(!H||xn(H.type))return null;let ee=null;return Tt(de=>{const ge=de.addNode(H.type,pn(H.x+40),pn(H.y+40));return ge?(Object.entries(H.params).forEach(([Pe,ye])=>de.updateParam(ge.id,Pe,ye)),ee=ge.id,g(ge.id),!0):!1},!0),ee},[Tt,t.nodes,pn]),Sa=N.useCallback((O,H,ee,de)=>{const ge=t.edges.find(ye=>ye.id===O);if(!ge)return null;let Pe=null;return Tt(ye=>{const qe=ye.addNode(H,pn(ee),pn(de));if(!qe)return!1;ye.removeEdge(O);const Be=ye.addEdge(ge.fromId,qe.id,0,ge.fromPort),Ye=ye.addEdge(qe.id,ge.toId,ge.toPort,0);return!Be||!Ye?!1:(Pe=qe.id,g(qe.id),!0)},!0),Pe},[Tt,t.edges,pn]),Gs=N.useCallback((O,H,ee,de)=>{let ge=null;return Tt(Pe=>{const ye=Pe.addNode(H,pn(ee),pn(de));if(!ye)return!1;if(O.direction==="out"){if(!Pe.addEdge(O.nodeId,ye.id,0,O.portIndex))return!1}else if(!Pe.addEdge(ye.id,O.nodeId,O.portIndex,0))return!1;return ge=ye.id,g(ye.id),!0},!0),ge},[Tt,pn]),Bc=N.useCallback(async(O="all")=>{if(Ut)return;const H=o.current;let ee=H.nodes,de=H.edges;if(O==="selection"){const ye=new Set(m.filter(qe=>H.nodes.some(Be=>Be.id===qe)));if(ye.size<2){sr("Select at least 2 nodes for selection layout.","warn");return}ee=H.nodes.filter(qe=>ye.has(qe.id)),de=H.edges.filter(qe=>ye.has(qe.fromId)&&ye.has(qe.toId))}if(ee.length<2){sr("Nothing to layout.","warn");return}const ge=Math.min(...ee.map(ye=>ye.x)),Pe=Math.min(...ee.map(ye=>ye.y));At(!0);try{const Be={...(await(await Cl())(ee,de,{direction:"RIGHT",layerSpacing:96,nodeSpacing:56,edgeRouting:"ORTHOGONAL",includePorts:!0,padding:28})).nodePositions},Ye=ee.filter(rn=>xn(rn.type)&&!!Be[rn.id]);if(Ye.length>1){const rn=ee.filter(zn=>!xn(zn.type)&&!!Be[zn.id]),Jt=Math.max(...Ye.map(zn=>Be[zn.id].x)),mn=rn.length>0?Math.max(...rn.map(zn=>Be[zn.id].x)):Jt,wi=Math.max(Jt,mn+260);for(const zn of Ye)Be[zn.id]={...Be[zn.id],x:wi}}const Ft=Object.entries(Be);if(Ft.length===0)throw new Error("ELK returned no node positions.");const Zt=Math.min(...Ft.map(([,rn])=>rn.x)),Lt=Math.min(...Ft.map(([,rn])=>rn.y)),kt=ge-Zt,mt=Pe-Lt;let tn=0;if(!Tt(rn=>{let Jt=!1;for(const[mn,wi]of Ft){const zn=rn.nodes.get(mn);if(!zn)continue;const qs=Math.round(wi.x+kt),Fo=Math.round(wi.y+mt);zn.x===qs&&zn.y===Fo||(rn.moveNode(mn,qs,Fo),Jt=!0,tn+=1)}return Jt},!0)||tn===0){sr("Auto Layout made no changes.","warn");return}fi(),Cn({level:"info",source:"layout",message:O==="selection"?`selection layout applied (${tn} nodes)`:`auto layout applied (${tn} nodes)`}),sr(O==="selection"?`Selection layout applied (${tn})`:`Auto Layout applied (${tn})`,"ok")}catch(ye){const qe=ye instanceof Error?`${ye.name}: ${ye.message}`:String(ye);Cn({level:"error",source:"layout",message:"Auto layout failed",details:qe}),sr("Auto Layout failed. See logs.","warn")}finally{At(!1)}},[Ut,m,Tt,fi,sr,Cl]),Ma=N.useCallback(()=>{const O=o.current,H=O.nodes.filter(ge=>!xn(ge.type)),ee=Object.values(Mt).filter(ge=>ge.category!=="output"&&ge.type!=="remote").map(ge=>ge.type),de=ge=>ge.length>0?ge[Math.floor(Math.random()*ge.length)]:null;try{if(Math.random()<.9){const Pe=Math.random();if(Pe<.22&&H.length>0){const ye=de(H),qe=(Math.random()-.5)*240,Be=(Math.random()-.5)*180;Tt(Ye=>{Ye.moveNode(ye.id,ye.x+qe,ye.y+Be)},!1)}else if(Pe<.45){const ye=H.filter(Be=>{const Ye=Mt[Be.type];return!!Ye&&Object.keys(Ye.params).length>0}),qe=de(ye);if(qe){const Be=Mt[qe.type],Ye=Object.keys(Be.params),Ft=de(Ye);if(Ft){const Zt=Be.params[Ft];let Lt=qe.params[Ft];if(Zt.type==="float"){const kt=Zt.min??0,mt=Zt.max??1;Lt=kt+Math.random()*(mt-kt)}else if(Zt.type==="int"){const kt=Math.floor(Zt.min??0),mt=Math.floor(Zt.max??100);Lt=kt+Math.floor(Math.random()*Math.max(1,mt-kt+1))}else Zt.type==="bool"?Lt=Math.random()>.5:Zt.type==="select"&&Zt.options&&Zt.options.length>0&&(Lt=de(Zt.options)??qe.params[Ft]);Tt(kt=>{kt.updateParam(qe.id,Ft,Lt)},!1)}}}else if(Pe<.57&&O.edges.length>0){const ye=de(O.edges);ye&&Tt(qe=>{qe.removeEdge(ye.id)},!1)}else if(Pe<.69&&ee.length>0){const ye=de(ee),qe=80+Math.random()*1900,Be=40+Math.random()*1100;Tt(Ye=>!!Ye.addNode(ye,qe,Be),!1)}else if(Pe<.79&&H.length>6){const ye=de(H);ye&&(Tt(qe=>{qe.removeNode(ye.id)},!1),g(qe=>qe===ye.id?null:qe))}else if(O.nodes.length>=2){let ye=!1;for(let qe=0;qe<24&&!ye;qe++){const Be=de(H),Ye=de(O.nodes);if(!Be||!Ye||Be.id===Ye.id)continue;const Ft=Mt[Be.type],Zt=Mt[Ye.type];if(!Ft||!Zt||Ft.outputs.length===0||Zt.inputs.length===0)continue;const Lt=Math.floor(Math.random()*Ft.outputs.length),kt=Math.floor(Math.random()*Zt.inputs.length);ye=!!Tt(mt=>!!mt.addEdge(Be.id,Ye.id,kt,Lt),!1)}}}else if(Math.random()<.88){const ye=de(["graph","preview","preview3d","code","logs","library","explorer"])??"graph";ei(ye,`${ye.toUpperCase()} Fuzz`)}else $i();Ve.current+=1,Ve.current%40===0&&Cn({level:"info",source:"chaos",message:`fuzz steps=${Ve.current}`})}catch(ge){Cn({level:"error",source:"chaos",message:ge instanceof Error?`${ge.name}: ${ge.message}`:String(ge),details:ge instanceof Error?ge.stack:void 0})}},[ei,Tt,$i]);N.useEffect(()=>{if(!dt){yt.current&&(window.clearInterval(yt.current),yt.current=0);return}return Cn({level:"warn",source:"chaos",message:"Chaos mode started"}),yt.current=window.setInterval(()=>{Ma()},220),()=>{yt.current&&(window.clearInterval(yt.current),yt.current=0),Cn({level:"warn",source:"chaos",message:"Chaos mode stopped"})}},[dt,Ma]),N.useEffect(()=>{},[dt,Ma]),N.useEffect(()=>{dt&&ft(!1)},[dt]);const Gr=N.useCallback(O=>{const H=_?t.nodes.find(de=>de.id===_):null,ee=O||hn||{clientX:0,clientY:0,graphX:H?H.x+140:220,graphY:H?H.y+70:140,target:{kind:"canvas"}};return{graph:t,mode:"graph",selection:{nodeIds:_?[_]:[],edgeIds:ee.target.kind==="edge"?[ee.target.edgeId]:[]},hover:ee.target,mouse:{x:ee.clientX,y:ee.clientY,graphX:ee.graphX,graphY:ee.graphY},clipboard:{node:y||void 0},actions:{openNodePicker:de=>he(de),closeContextMenu:()=>D(null),frameAll:()=>{le("frame_all"),V(de=>de+1)},resetView:()=>{le("reset"),V(de=>de+1)},addNodeAt:(de,ge,Pe)=>Hs(de,ge,Pe),removeNode:de=>cs(de),duplicateNode:de=>Oc(de),copyNode:de=>{const ge=t.nodes.find(Pe=>Pe.id===de);!ge||xn(ge.type)||L({type:ge.type,x:ge.x,y:ge.y,params:{...ge.params}})},copyNodeParams:de=>us(de),pasteNodeParams:de=>Uc(de),resetNodeParams:de=>xa(de),canPasteNodeParams:de=>Vs(de),pasteNodeAt:(de,ge)=>(_a(de,ge),null),removeEdge:de=>No(de),getEdgeById:de=>t.edges.find(ge=>ge.id===de),connect:(de,ge,Pe,ye=0)=>Fc(de,ge,Pe,ye),insertNodeOnEdge:(de,ge,Pe,ye)=>Sa(de,ge,Pe,ye),addNodeFromPort:(de,ge,Pe,ye)=>Gs(de,ge,Pe,ye),undo:Tr,redo:Cr,pinPreviewToNode:de=>Rt(de),toggleChaosMode:void 0,stepChaosModeOnce:void 0}}},[Hs,Gs,y,us,Vs,Fc,hn,Oc,t,Sa,No,cs,_a,Uc,Cr,xa,_,Ma,Tr]);N.useEffect(()=>{const O=H=>{if(EC(H.target))return;if(H.key==="F3"){H.preventDefault(),xe(!0);return}if(ue||fe||hn)return;const ee=H.ctrlKey||H.metaKey,de=(H.key||"").toLowerCase();if(ee&&de==="z"&&!H.shiftKey&&!H.altKey){H.preventDefault(),H.stopPropagation(),Tr();return}if(ee&&de==="y"&&!H.shiftKey&&!H.altKey){H.preventDefault(),H.stopPropagation(),Cr();return}if(ee&&de==="x"&&!H.shiftKey&&!H.altKey){H.preventDefault(),H.stopPropagation(),ya();return}if(ee&&H.shiftKey&&de==="z"&&!H.altKey){H.preventDefault(),H.stopPropagation(),Cr();return}if(!ee&&!H.shiftKey&&!H.altKey&&de==="f"){H.preventDefault(),H.stopPropagation(),pa();return}const ge=Gr(),Pe=xc.getAll().filter(ye=>!!ye.shortcut&&ye.id!=="graph.delete");for(const ye of Pe){if(!CC(ye.shortcut,H))continue;if(Vv(ye.id,ge)){H.preventDefault(),H.stopPropagation(),ue&&xe(!1);return}}};return document.addEventListener("keydown",O,!0),()=>document.removeEventListener("keydown",O,!0)},[Gr,hn,ya,fe,ue,Cr,pa,Tr]);const zc=N.useCallback(O=>{D(O)},[]),$c=N.useCallback(()=>{D(null),xe(!1),he(null),gn(!1)},[]),Al=N.useCallback((O,H)=>{const ee=Gr(H);Vv(O,ee),xe(!1)},[Gr]),Wd=N.useCallback((O,H)=>{$s(O,H),D(null)},[$s]),jd=N.useCallback(O=>{const H=(t.frames||[]).find(de=>de.id===O);if(!H){D(null);return}const ee=prompt("Frame label:",H.label||"Frame");ee!=null&&wr(O,{label:ee.trim()||"Frame"}),D(null)},[t.frames,wr]),Xd=N.useCallback(O=>{const H=(t.frames||[]).find(Pe=>Pe.id===O),ee=(H==null?void 0:H.color)||yd[0],de=Math.max(0,yd.indexOf(ee)),ge=yd[(de+1)%yd.length];wr(O,{color:ge}),D(null)},[t.frames,wr]),Yd=N.useCallback(O=>{zs(O),D(null)},[zs]),Rl=N.useMemo(()=>{var O,H,ee,de;if(fe){if((O=fe.port)!=null&&O.type)return fe.port.type;if(fe.edgeId){const ge=t.edges.find(ye=>ye.id===fe.edgeId);if(!ge)return;const Pe=t.nodes.find(ye=>ye.id===ge.toId);return Pe?(de=(ee=(H=Mt[Pe.type])==null?void 0:H.inputs)==null?void 0:ee[ge.toPort])==null?void 0:de.type:void 0}}},[t.edges,t.nodes,fe]),qd=N.useCallback(O=>{const H=fe;H&&(H.origin==="edge"&&H.edgeId?Sa(H.edgeId,O,H.graphX,H.graphY):H.origin==="port"&&H.port?Gs({nodeId:H.port.nodeId,portIndex:H.port.portIndex,direction:H.port.direction},O,H.graphX,H.graphY):Hs(O,H.graphX,H.graphY),he(null))},[Hs,Gs,Sa,fe]),Vc=N.useMemo(()=>n_(t),[t]),Ar=N.useMemo(()=>$v(t),[t]),or=N.useMemo(()=>{const O=vl(t);return O.height?"height":O.baseColor?"baseColor":O.normal?"normal":O.roughness?"roughness":O.metallic?"metallic":"baseColor"},[t.nodes,t.edges]),Ws=sl[or],js=Ar;N.useEffect(()=>{bt(!On)},[Ar,On]),N.useEffect(()=>{if(ir.current.clear(),!On||!Ct||Qn.current)return;const O=Sn.current;if(!O)return;const H=o.current,ee=Ar,de=new Map;for(const ye of H.edges){const qe=de.get(ye.fromId);qe?qe.push(ye.fromPort):de.set(ye.fromId,[ye.fromPort])}const ge=sx(H),Pe=ye=>{const qe=Mt[ye.type];if(!qe||qe.outputs.length<=1)return 0;const Be=de.get(ye.id);return Be&&Be.length>0?Math.max(...Be):ye.type==="split"&&qe.outputs.length>4?4:0};O.postMessage({type:"set_graph",signature:ee,graph:H});for(const ye of H.nodes){const qe=Pe(ye),Be=ox(ye,qe,ge);O.postMessage({type:"compile_job",signature:ee,requestKey:Be.requestKey,mode:Be.mode,nodeId:ye.id,nodeOutputPort:qe,outputChannel:Be.outputChannel})}},[Ar,On,Ct]);const Hc=N.useCallback(O=>{const H={timestamp:O.timestamp,fps:O.fps,compile_ms:Pt.current||O.compile_ms||0,render_ms:O.render_ms,thumbnail_ms:en.current||0,readback_ms:O.readback_ms+(Yt.current||0),ui_commit_ms:(Fn.current||0)+(O.ui_commit_ms||0),budget_exceeded:O.budget_exceeded};en.current=0,Yt.current=0,Fn.current=0,Ae(H);const ee=be.current;ee.push(H),ee.length>300&&ee.splice(0,ee.length-300);const de=ee.map(Ye=>Ye.render_ms).filter(Ye=>Number.isFinite(Ye)&&Ye>0),ge=qv(de,.5),Pe=qv(de,.95);we(ge),He(Pe),O.budget_exceeded?(lt.current=0,Io(420)):ke<=0&&(lt.current=lt.current||performance.now());const ye=performance.now(),qe=O.frame_budget_ms+.5,Be=Math.max(8,O.frame_budget_ms-2);if(O.p95_ms>qe){lt.current=0,ut(Ye=>ye-Ye.last_change_at<450?Ye:Ye.scale===1?{scale:.75,reason:"adaptive_down",last_change_at:ye}:Ye.scale===.75?{scale:.5,reason:"adaptive_down",last_change_at:ye}:Ye);return}if(O.p95_ms<=Be){lt.current=lt.current||ye,ye-lt.current>=3e3&&ut(Ye=>ye-Ye.last_change_at<700?Ye:Ye.scale===.5?{scale:.75,reason:"adaptive_up",last_change_at:ye}:Ye.scale===.75?{scale:1,reason:"adaptive_up",last_change_at:ye}:Ye);return}lt.current=0},[Io,$t,ke]),Xs=N.useCallback((O,H)=>{var de;const ee=[];for(const ge of O.nodes){if(xn(ge.type))continue;const Pe=Mt[ge.type],ye=Math.max(1,((de=Pe==null?void 0:Pe.outputs)==null?void 0:de.length)??1);for(let qe=0;qe<ye;qe++)try{new vr(O).compile({backend:H,readable:!c,nodeId:ge.id,nodeOutputPort:qe,outputChannel:"baseColor"})}catch(Be){const Ye=((Be==null?void 0:Be.message)||String(Be)||"unknown error").replace(/\s+/g," ").trim();if(ee.push(`${H}: node=${ge.id} type=${ge.type} outPort=${qe} -> ${Ye}`),ee.length>=6)return ee}}return ee},[c]),Gc=N.useCallback(O=>{var ge;const H=wC(O),ee=[];let de=0;for(const Pe of H.nodes){const ye=Mt[Pe.type],qe=Math.max(1,((ge=ye==null?void 0:ye.outputs)==null?void 0:ge.length)??1);for(let Be=0;Be<qe;Be++)try{const Ye=new vr(H).compile({backend:"glsl",readable:!c,nodeId:Pe.id,nodeOutputPort:Be,outputChannel:"baseColor"}),Ft=Im(Ye,64);if(!Ft||Ft.width<1||Ft.height<1){if(Ht.unavailableReason)return ee.push(`preview-template: GPU unavailable -> ${Ht.unavailableReason}`),{failures:ee,nodeCount:H.nodes.length,caseCount:de};throw new Error("empty preview canvas")}de+=1}catch(Ye){const Ft=((Ye==null?void 0:Ye.message)||String(Ye)||"unknown error").replace(/\s+/g," ").trim();if(ee.push(`preview-template: node=${Pe.id} type=${Pe.type} outPort=${Be} -> ${Ft}`),ee.length>=12)return{failures:ee,nodeCount:H.nodes.length,caseCount:de}}}return{failures:ee,nodeCount:H.nodes.length,caseCount:de}},[c]),Wc=N.useCallback(()=>{mT(),It([])},[]),jc=N.useCallback(async O=>{if(Vt)return;Ln(!0);const H=performance.now(),ee=o.current,de=[],ge=["baseColor","roughness","normal","metallic","height"];try{const Pe=async(Lt,kt,mt)=>{const tn=performance.now();try{const _n=await mt();de.push({id:Lt,label:kt,durationMs:performance.now()-tn,..._n})}catch(_n){const rn=_n instanceof Error?`${_n.name}: ${_n.message}`:String(_n);de.push({id:Lt,label:kt,durationMs:performance.now()-tn,severity:"fail",message:"Check crashed",details:rn})}};await Pe("graph_integrity","Graph Integrity",()=>{const Lt=new Map(ee.nodes.map(mt=>[mt.id,mt])),kt=ee.edges.filter(mt=>{var mn;const tn=Lt.get(mt.fromId),_n=Lt.get(mt.toId);if(!tn||!_n)return!0;const rn=Mt[tn.type],Jt=Mt[_n.type];return!rn||!Jt?!0:mt.fromPort>=(((mn=rn.outputs)==null?void 0:mn.length)??1)||mt.toPort>=Jt.inputs.length});return kt.length>0?{severity:"fail",message:`${kt.length} invalid edge(s)`,details:kt.slice(0,6).map(mt=>`${mt.id}: ${mt.fromId}.${mt.fromPort} -> ${mt.toId}.${mt.toPort}`).join(`
`)}:{severity:"ok",message:"All edges are valid"}}),await Pe("compile_outputs","Compile Outputs",()=>{const Lt=[];for(const kt of ge)try{new vr(ee).compile({backend:"wgsl",readable:!c,outputChannel:kt}),new vr(ee).compile({backend:"glsl",readable:!c,outputChannel:kt})}catch(mt){Lt.push(`${kt}: ${mt instanceof Error?mt.message:String(mt)}`)}return Lt.length>0?{severity:"fail",message:`${Lt.length} output compile failure(s)`,details:Lt.join(`
`)}:{severity:"ok",message:`Compiled ${ge.length} output channels`}}),await Pe("node_backtest","Per-Node Backtest",()=>{const Lt=Xs(ee,"wgsl"),kt=Xs(ee,"glsl"),mt=[...Lt,...kt];return mt.length>0?{severity:"fail",message:`${mt.length} node compile failure(s)`,details:mt.join(`
`)}:{severity:"ok",message:"Per-node compile backtest passed"}}),await Pe("preview_template","All-Nodes Preview Template",()=>{const{failures:Lt,nodeCount:kt,caseCount:mt}=Gc(ee.resolution??512);return Lt.length>0?{severity:"fail",message:`${Lt.length} preview template failure(s)`,details:Lt.join(`
`)}:{severity:"ok",message:`Rendered ${mt} preview case(s) across ${kt} node types`}}),await Pe("preview_state","Preview Readiness",()=>{const Lt=Vi;return ne?{severity:"fail",message:"Preview has compile error",details:ne}:Lt?it?{severity:"ok",message:"Preview compile is still pending"}:!w||!I?{severity:"warn",message:"Shader is not compiled yet"}:{severity:"ok",message:"Preview shader is available"}:{severity:"ok",message:"2D preview panel is closed (check skipped)"}}),await Pe("performance_budget","Frame Budget",()=>{if(!(Vi||ai))return{severity:"ok",message:"No preview viewport is open (check skipped)"};if(!re)return{severity:"warn",message:"No live render samples yet"};const kt=st,mt=z+2,tn=z+8;return kt>tn?{severity:"fail",message:`p95 ${kt.toFixed(1)}ms > ${tn.toFixed(1)}ms`}:kt>mt?{severity:"warn",message:`p95 ${kt.toFixed(1)}ms above budget`}:{severity:"ok",message:`p95 ${kt.toFixed(1)}ms within budget`}}),await Pe("runtime_logs","Runtime Error Drift",()=>{const kt=Date.now()-300*1e3,mt=Tc().filter(tn=>tn.level==="error"&&Date.parse(tn.ts)>=kt);return mt.length>=4?{severity:"fail",message:`${mt.length} errors in last 5m`}:mt.length>0?{severity:"warn",message:`${mt.length} errors in last 5m`}:{severity:"ok",message:"No recent runtime errors"}}),O==="stress"&&await Pe("stress_compile_loop","Stress Compile Loop",async()=>{const Lt=performance.now(),kt=16;for(let tn=0;tn<kt;tn++){const _n=ge[tn%ge.length],rn=tn%2===0;new vr(ee).compile({backend:"wgsl",outputChannel:_n,readable:rn}),new vr(ee).compile({backend:"glsl",outputChannel:_n,readable:rn}),await new Promise(Jt=>window.setTimeout(Jt,0))}const mt=performance.now()-Lt;return mt>600?{severity:"warn",message:`Stress loop passed but slow (${mt.toFixed(1)}ms)`}:{severity:"ok",message:`Stress loop passed (${mt.toFixed(1)}ms)`}});const ye=performance.now()-H,qe=de.filter(Lt=>Lt.severity==="ok").length,Be=de.filter(Lt=>Lt.severity==="warn").length,Ye=de.filter(Lt=>Lt.severity==="fail").length,Ft={id:gT(),ts:new Date().toISOString(),mode:O,totalMs:ye,passCount:qe,warnCount:Be,failCount:Ye,checks:de,metrics:{fps:(re==null?void 0:re.fps)??0,renderP50Ms:Le,renderP95Ms:st,compileMs:F,nodeCount:ee.nodes.length,edgeCount:ee.edges.length}};It(pT(Ft));const Zt=Ye>0?"error":Be>0?"warn":"info";Cn({level:Zt,source:"monitor",message:`suite=${O} pass=${qe} warn=${Be} fail=${Ye}`,details:de.map(Lt=>`${Lt.severity.toUpperCase()} ${Lt.label} (${Lt.durationMs.toFixed(1)}ms): ${Lt.message}`).join(`
`),graph_hash:js})}finally{Ln(!1)}},[Vt,c,Xs,Gc,ne,w,I,it,re,st,Le,z,Vi,ai,F,js]),Bn=N.useMemo(()=>{var Be;const O=_?t.nodes.find(Ye=>Ye.id===_):void 0,H=O?Ec(O.type):null;if(H)return{port:sl[H],label:"Output",portLabel:H};if((O==null?void 0:O.type)==="output")return{port:Ws,label:"Output",portLabel:or};const ee=Et??_;if(!ee)return{port:Ws,label:"Output",portLabel:or};const de=t.nodes.find(Ye=>Ye.id===ee);if(!de)return{port:Ws,label:"Output",portLabel:or};const ge=Mt[de.type];if(!ge)return{port:Ws,label:"Output",portLabel:or};const Pe=Ec(de.type);if(Pe)return{port:sl[Pe],label:"Output",portLabel:Pe};if(de.type==="output")return{port:Ws,label:"Output",portLabel:or};let ye=0;if(ge.outputs.length>1)for(const Ye of t.edges)Ye.fromId===ee&&Ye.fromPort>ye&&(ye=Ye.fromPort);const qe=((Be=ge.outputs[ye])==null?void 0:Be.label)||`Out #${ye}`;return{nodeId:ee,port:ye,label:ge.label,portLabel:qe}},[Et,_,t.nodes,t.edges,or,Ws]),ar=N.useMemo(()=>{var H;return Bn.nodeId?"baseColor":((H=Object.entries(sl).find(([,ee])=>ee===Bn.port))==null?void 0:H[0])??or},[Bn.nodeId,Bn.port,or]);N.useEffect(()=>{if(!Vi)return;let O=!1;Fe.current&&(window.clearTimeout(Fe.current),Fe.current=0),Vr(!0);const H=()=>{if(!O)try{const de=Bn.nodeId?`${Bn.nodeId}:${Bn.port}`:`output:${Bn.port}`,ge=`${Vc}|${c?"raw":"readable"}|${de}|${ar}|${e_}`,Pe=`${Ar}|${de}|${ar}`;if(bi.current&&Ke.current===Pe&&!!I){bi.current=!1,O||Vr(!1);return}if(bi.current&&(bi.current=!1),$e.current!==ge||!I||!w){const Be=performance.now(),Ye=e.current.compile({backend:"glsl",readable:!c,outputChannel:ar,targetNodeId:Bn.nodeId,targetPort:Bn.port});$e.current=ge,Ke.current=Pe,$(Ye.glsl),R(Ye.wgsl),rr(null,"preview-compile");const Ft=Math.max(Ye.compileTimeMs,performance.now()-Be);Y(Ft),Pt.current=Ft,Re(Zt=>Zt+1),O||Vr(!1);return}if(Ke.current!==Pe&&I){const Be=performance.now();$(es(I,t)),R(Ye=>Ye&&es(Ye,t)),Fn.current=performance.now()-Be,Ke.current=Pe}O||Vr(!1)}catch(de){console.error("[AtomicGraph] Preview compile failed:",de);const ge=Bn.nodeId?`target node=${Bn.nodeId} outPort=${Bn.port}`:`target output=${ar}`,Pe=Xs(t,"wgsl"),ye=Xs(t,"glsl"),qe=[...Pe,...ye],Be=[(de==null?void 0:de.message)||"Compilation failed.",ge,qe.length>0?`backtest:
${qe.join(`
`)}`:"backtest: no direct per-node compile throw (likely runtime WGSL pipeline error)"].join(`
`);if(Bn.nodeId)try{const Ye=e.current.compile({backend:"glsl",readable:!c,outputChannel:ar});R(Ye.wgsl),$(Ye.glsl),rr(Be,"preview-compile"),O||Vr(!1);return}catch{}rr(Be,"preview-compile"),O||Vr(!1)}},ee=ot?80:0;return ee>0?Fe.current=window.setTimeout(H,ee):H(),()=>{O=!0,Fe.current&&(window.clearTimeout(Fe.current),Fe.current=0)}},[t,Vc,c,I,w,Bn,ar,Ar,ot,Vi,Xs,rr,Vr]),N.useEffect(()=>{if(!On||ot||dt||it||ke>performance.now())return;let O=!1;const H=Ar,ee=o.current,de=ee.nodes.length,ge=de>=420?8:de>=240?12:de>=120?18:de>=64?26:40,Pe=Gt?ge:de,ye=de>240?8:de>120?12:28,qe=Gt&&de<=120,Be=new Map(ee.nodes.map(Bt=>[Bt.id,Bt])),Ye=new Map;for(const Bt of ee.edges){const Vn=Ye.get(Bt.fromId);Vn?Vn.push(Bt.fromPort):Ye.set(Bt.fromId,[Bt.fromPort])}const Ft=e.current.getPlan(),Zt=Ft?nT(Ft):[],Lt=[_,Et].filter(Bt=>!!Bt),kt=T.filter(Bt=>Be.has(Bt)),mt=ee.nodes.filter(Bt=>xn(Bt.type)).map(Bt=>Bt.id),tn=[],_n=new Set,rn=Bt=>{!Bt||_n.has(Bt)||(_n.add(Bt),tn.push(Bt))};Lt.forEach(rn),kt.forEach(rn),mt.forEach(rn),Zt.slice(0,ye).forEach(rn);const Jt=ee.nodes.map(Bt=>Bt.id).filter(Bt=>!_n.has(Bt));let mn=tn;if(!Gt)mn=mn.concat(Jt);else{const Bt=Math.max(0,Pe-tn.length);if(qe&&Bt>0&&Jt.length>0){const Vn=Oe.current%Jt.length,Rr=Jt.slice(Vn).concat(Jt.slice(0,Vn));mn=mn.concat(Rr.slice(0,Bt)),Oe.current=(Vn+Bt)%Jt.length}}const wi=mn.slice(0,Pe).map(Bt=>Be.get(Bt)).filter(Bt=>!!Bt);if(wi.length===0){bt(!0);return}const zn=window,qs=Bt=>typeof zn.requestIdleCallback=="function"?zn.requestIdleCallback(Bt,{timeout:200}):window.setTimeout(()=>Bt({timeRemaining:()=>4,didTimeout:!0}),32),Fo=Bt=>{typeof zn.cancelIdleCallback=="function"?zn.cancelIdleCallback(Bt):window.clearTimeout(Bt)};let Oo=0;const kl={};let ba=0;const ds=new vr(ee),Ul=sx(ee),Bo=Bt=>{const Vn=Be.get(Bt);if(!Vn)return 0;const Rr=Mt[Vn.type];if(!Rr||Rr.outputs.length<=1)return 0;const Ks=Ye.get(Bt);return Ks&&Ks.length>0?Math.max(...Ks):Vn.type==="split"&&Rr.outputs.length>4?4:0},Fl=1;let Ol=!1;const wa=()=>{Ol||(Ol=!0,bt(!0))},fs=Bt=>{if(O)return;const Vn={};let Rr=0;const Ks=performance.now();for(;Oo<wi.length&&(Bt.timeRemaining()>2||Bt.didTimeout)&&Rr<Fl;){const Nn=wi[Oo++];try{const Wi=performance.now(),Zs=Bo(Nn.id),Js=ox(Nn,Zs,Ul);let ji=ir.current.get(Js.requestKey);if(ji)ir.current.delete(Js.requestKey);else{const zl=Js.mode==="output"?ds.compile({outputChannel:Js.outputChannel,readable:!1}):ds.compile({nodeId:Nn.id,nodeOutputPort:Zs,readable:!1});ji=es(zl,ee)}const Qs=ax(ji,cp,Js.requestKey);let eo=G.current.get(Qs);if(!eo){const zl=performance.now();eo=UC(ji,cp),Yt.current+=performance.now()-zl,G.current.set(Qs,eo);const ef=de>160?160:320;if(G.current.size>ef){const to=G.current.keys().next().value;to&&G.current.delete(to)}}j.current[Nn.id]!==Qs&&(j.current[Nn.id]=Qs,Vn[Nn.id]=eo),kl[Nn.id]=performance.now()-Wi,Rr++}catch(Wi){const Zs=`stale|${H}|${Nn.id}`;Cn({level:"warn",source:"thumbnail",message:"node preview compile/render failed",details:`node=${Nn.id} type=${Nn.type} error=${((Wi==null?void 0:Wi.message)||String(Wi)||"unknown").replace(/\s+/g," ").trim()}`,node_context:`${Nn.id}:${Nn.type}`,graph_hash:js}),j.current[Nn.id]!==Zs&&(j.current[Nn.id]=Zs,Vn[Nn.id]=S_(cp,"ERR"))}}if(en.current+=performance.now()-Ks,Object.keys(Vn).length>0){const Nn=performance.now();C(Wi=>({...Wi,...Vn})),Fn.current+=performance.now()-Nn}if(Object.keys(kl).length>0){const Nn=performance.now();K(Wi=>({...Wi,...kl})),Fn.current+=performance.now()-Nn}Oo<wi.length?ba=qs(fs):wa()},Bl=window.setTimeout(()=>{ba=qs(fs)},220);return()=>{O=!0,window.clearTimeout(Bl),ba&&Fo(ba)}},[Ar,On,_,Et,T,Gt,ot,dt,it,ke,$t,jt.scale,js]),N.useEffect(()=>{if(!Wn||!Mr||ot||dt)return;let O=!1;const H=o.current,ee=Math.max(128,Math.min(p,1024)),de=["baseColor","normal","roughness","metallic","height"],ge=new vr(H),Pe={},ye=window,qe=kt=>typeof ye.requestIdleCallback=="function"?ye.requestIdleCallback(kt,{timeout:220}):window.setTimeout(()=>kt({timeRemaining:()=>3,didTimeout:!0}),24),Be=kt=>{typeof ye.cancelIdleCallback=="function"?ye.cancelIdleCallback(kt):window.clearTimeout(kt)};let Ye=0,Ft=0;const Zt=kt=>{if(!O){for(;Ye<de.length&&(kt.timeRemaining()>2||kt.didTimeout);){const mt=de[Ye++];if(!rl(H,mt)){J.current[mt]!==""&&(Pe[mt]={key:"",canvas:document.createElement("canvas")});continue}try{const _n=ge.compile({outputChannel:mt,readable:!1}),rn=es(_n,H),Jt=ax(rn,ee,`preview3d:${mt}`);if(J.current[mt]===Jt)continue;const mn=se.current[mt],wi=kC(rn,ee,mn==null?void 0:mn.canvas);Pe[mt]={key:Jt,canvas:wi}}catch{J.current[mt]!==""&&(Pe[mt]={key:"",canvas:document.createElement("canvas")})}}if(Ye<de.length){Ft=qe(Zt);return}U(mt=>{const tn={...mt};let _n=!1;for(const rn of Object.keys(Pe)){const Jt=Pe[rn];if(!Jt)continue;const mn=mt[rn];((mn==null?void 0:mn.key)||"")!==Jt.key&&(_n=!0,tn[rn]={canvas:Jt.canvas,key:Jt.key,version:((mn==null?void 0:mn.version)??0)+1},J.current[rn]=Jt.key)}return _n?tn:mt})}},Lt=window.setTimeout(()=>{Ft=qe(Zt)},260);return()=>{O=!0,window.clearTimeout(Lt),Ft&&Be(Ft)}},[Ar,Wn,Mr,c,p,ot,dt,$t]);const Kd=N.useCallback(()=>{const O=i.current.serialize(),H=Qx("pbr_default");if(!H)return;const ee=vl(O),de=p;try{for(const ge of H.targets){if(!ee[ge.channel])continue;const Pe=new vr(O).compile({outputChannel:ge.channel,readable:!c}),ye=document.createElement("canvas");ye.width=de,ye.height=de;const qe=new qx({canvas:ye,alpha:!0,preserveDrawingBuffer:!0}),Be=new Px,Ye=new Rc(-1,1,1,-1,0,1),Ft={};Object.entries(es(Pe,O).uniformBindings).forEach(([tn,_n])=>{Ft[tn]={value:_n.value}}),Ft.u_resolution&&(Ft.u_resolution.value=[de,de]);const Zt=new tr({vertexShader:Pe.vertex,fragmentShader:Pe.fragment,uniforms:Ft});Be.add(new yr(new wl(2,2),Zt)),qe.render(Be,Ye);const Lt=ge.format==="webp"?"image/webp":"image/png",kt=ye.toDataURL(Lt),mt=document.createElement("a");mt.href=kt,mt.download=`texture_${ge.fileSuffix}_${de}x${de}.${ge.format}`,mt.click(),qe.dispose(),Zt.dispose()}}catch(ge){console.error(ge),Cn({level:"error",source:"export",message:ge instanceof Error?`${ge.name}: ${ge.message}`:String(ge),details:ge instanceof Error?ge.stack:void 0}),alert("Export failed.")}},[p,c,t]),Pl=N.useCallback(O=>{rr(O||null,"viewport")},[rr]),Il=N.useMemo(()=>{const O=ae.toLowerCase(),H=new Map;Object.values(Mt).forEach(ee=>{ee.category!=="output"&&(O&&!ee.label.toLowerCase().includes(O)&&!ee.category.includes(O)||(H.has(ee.category)||H.set(ee.category,[]),H.get(ee.category).push({type:ee.type,label:ee.label})))});for(const ee of H.values())ee.sort((de,ge)=>de.label.localeCompare(ge.label));return Array.from(H.entries())},[ae]),Ll=N.useCallback(O=>{Je(H=>{const ee=new Set(H);return ee.has(O)?ee.delete(O):ee.add(O),ee})},[]),Dl=N.useMemo(()=>I?I.uniforms.map(O=>{var H;return{name:O.name,type:O.type,nodeId:O.nodeId,key:O.key,value:((H=I.uniformBindings[O.name])==null?void 0:H.value)??O.defaultValue}}):[],[I]),Nl=N.useMemo(()=>{const O=(I==null?void 0:I.source)||"";return{compileTimeMs:F,nodeCount:t.nodes.length,edgeCount:t.edges.length,shaderLines:O?O.split(`
`).length:0,shaderBytes:new TextEncoder().encode(O).length,hash:(I==null?void 0:I.hash)||"n/a",warnings:(I==null?void 0:I.warnings)||[],backend:(I==null?void 0:I.backend)||"glsl",recompileCount:Ie,atomsUsed:(I==null?void 0:I.atomsUsed)||[],renderP95Ms:st,renderP50Ms:Le,thumbnailMs:(re==null?void 0:re.thumbnail_ms)??0}},[I,F,t.edges.length,t.nodes.length,Ie,st,Le,re]),Ys=N.useMemo(()=>{if(!hn)return[];const O=Gr(hn);return xc.listVisible(O).map(H=>({op:H,enabled:H.enabled?H.enabled(O):!0}))},[Gr,hn]),Zd=N.useMemo(()=>{const O=Gr();return xc.getAll().map(H=>({id:H.id,label:H.label,category:H.category,shortcut:H.shortcut,enabled:(H.visible?H.visible(O):!0)&&(H.enabled?H.enabled(O):!0),searchText:`${H.label} ${H.category} ${H.keywords.join(" ")}`.toLowerCase()}))},[Gr]),Jd=N.useMemo(()=>({graph:t,selectedNodeId:_,onMove:Do,onMoveFrame:Dc,onResizeFrame:Nc,onDeleteFrame:zs,onAddFrameAt:$s,onUpdateFrame:wr,onDeleteEdge:No,onConnect:Er,onUpdateParam:ga,onAddNode:ko,onDeleteNode:cs,onSelectionChange:g,onSelectionSetChange:Lc,onCanvasClick:$c,onRequestContextMenu:zc,onCanvasInteractionStart:Os,onCanvasInteractionEnd:Bs,onVisibleNodeIdsChange:Tl,nodePreviews:b,outputPreviewSurfaces:B,nodeTimings:ie,graphViewCommandNonce:nt,graphViewCommandType:q,snapEnabled:Se,snapGridSize:Ne,setSnapEnabled:Ee,setSnapGridSize:De,previewShader:w,codeShader:I,compileError:ne,patternSize:p,previewResolution:h,previewTarget:Bn,previewResScale:A,interacting:ot,pinnedPreviewNodeId:Et,previewFrameBudgetMs:z,preview3dReady:Mr,performanceMode:$t,viewportQuality:jt,rendererPerf:re,rendererPerfP95:st,rendererPerfP50:Le,thumbnailDeferred:at,graphPerfHash:js,onViewportPerfSample:Hc,onPinPreview:Rt,tile:a,rawMode:c,onToggleTile:()=>{},onToggleRawMode:()=>f(O=>!O),uniformRows:Dl,stats:Nl,onPreviewError:Pl,monitorRuns:Kt,monitorRunning:Vt,runMonitorSuite:jc,clearMonitorRuns:Wc,libraryByCategory:Il,libSearch:ae,setLibSearch:Ce,collapsedCats:Te,toggleCat:Ll,atomViewBindings:Dn,onOpenAtomNode:Uo}),[t,_,Do,Dc,Nc,zs,$s,wr,No,Er,ga,ko,cs,Lc,Tl,$c,zc,Os,Bs,b,B,ie,nt,q,Se,Ne,w,I,ne,p,h,Bn,A,ot,Et,z,Mr,$t,jt,re,st,Le,at,js,Hc,a,c,Dl,Nl,Pl,Kt,Vt,jc,Wc,Il,ae,Te,Ll,Dn,Uo]),Qd=N.useCallback((O,H)=>yC(O,H),[]);return E.jsx(__.Provider,{value:Jd,children:E.jsxs("div",{style:FC,children:[E.jsxs("div",{style:OC,children:[E.jsx("span",{style:BC,children:"AtomicGraph"}),E.jsx("span",{className:"nt-menu-item",children:"File"}),E.jsx("span",{className:"nt-menu-item",children:"Edit"}),E.jsx("span",{className:"nt-menu-item",children:"Tools"}),E.jsxs("span",{className:"nt-menu-item",style:{position:"relative"},onClick:()=>gn(O=>!O),children:["Window",Fs&&E.jsxs("div",{style:VC,onMouseLeave:()=>gn(!1),children:[E.jsx("div",{className:"nt-drop-item",onClick:()=>{$i(),gn(!1)},children:"Reset Layout"}),E.jsx("div",{style:fp}),E.jsx("div",{className:"nt-drop-item",onClick:()=>{ei("graph","Graph"),gn(!1)},children:"New Graph"}),E.jsx("div",{className:"nt-drop-item",onClick:()=>{ei("preview","2D Preview"),gn(!1)},children:"New Preview"}),E.jsx("div",{className:"nt-drop-item",onClick:()=>{ei("preview3d","3D Preview"),gn(!1)},children:"New 3D Preview"}),E.jsx("div",{className:"nt-drop-item",onClick:()=>{ei("code","Code"),gn(!1)},children:"New Code"}),E.jsx("div",{className:"nt-drop-item",onClick:()=>{ei("logs","Logs"),gn(!1)},children:"New Logs"}),E.jsx("div",{className:"nt-drop-item",onClick:()=>{ei("library","Library"),gn(!1)},children:"New Library"}),E.jsx("div",{className:"nt-drop-item",onClick:()=>{ei("explorer","Explorer"),gn(!1)},children:"New Explorer"}),E.jsx("div",{style:fp}),E.jsx("div",{className:"nt-drop-item",onClick:()=>{ma(),gn(!1)},children:"Load Demo DAG (Layout)"}),E.jsx("div",{style:fp}),E.jsx("div",{className:"nt-drop-item",onClick:()=>{const O=prompt("Preset name:");O&&(Us(O),gn(!1))},children:"Save Preset..."}),Ii().map(O=>E.jsxs("div",{className:"nt-drop-item",onClick:()=>{$r(O),gn(!1)},children:["Load: ",O]},O))]})]}),E.jsx("span",{className:"nt-menu-item",children:"Help"})]}),E.jsxs("div",{style:zC,children:[E.jsx("button",{onClick:Tr,className:"nt-btn nt-btn-icon",disabled:je.current.past.length===0,title:"Undo (Ctrl/Cmd+Z)","aria-label":"Undo",children:E.jsx(R2,{size:14})}),E.jsx("button",{onClick:Cr,className:"nt-btn nt-btn-icon",disabled:je.current.future.length===0,title:"Redo (Ctrl/Cmd+Y, Ctrl/Cmd+Shift+Z)","aria-label":"Redo",children:E.jsx(b2,{size:14})}),E.jsx("div",{style:Sd}),E.jsx("button",{onClick:va,className:"nt-btn nt-btn-icon",title:"Save graph","aria-label":"Save",children:E.jsx(C2,{size:14})}),E.jsx("button",{onClick:()=>{var O;return(O=et.current)==null?void 0:O.click()},className:"nt-btn nt-btn-icon",title:"Load graph","aria-label":"Load",children:E.jsx(d2,{size:14})}),E.jsx("input",{ref:et,type:"file",accept:".json",style:{display:"none"},onChange:kc}),E.jsx("div",{style:Sd}),E.jsx("span",{style:{...$C,display:"inline-flex",alignItems:"center"},title:"Texture size",children:E.jsx(h2,{size:12})}),E.jsx("select",{value:p,onChange:O=>Hr(parseInt(O.target.value,10)),className:"nt-select",title:"Texture size",children:[256,512,1024,2048].map(O=>E.jsx("option",{value:O,children:O},O))}),E.jsx("div",{style:Sd}),E.jsx("button",{onClick:Gd,className:"nt-btn nt-btn-icon",title:"Frame all graph content","aria-label":"Frame all",children:E.jsx(v2,{size:14})}),E.jsx("button",{onClick:pa,className:"nt-btn nt-btn-icon",title:"Reset graph camera (F)","aria-label":"Reset view",children:E.jsx(a2,{size:14})}),E.jsx("button",{onClick:()=>Bc("all"),className:"nt-btn nt-btn-icon",disabled:Ut,title:"Run deterministic ELK layered layout (left to right)","aria-label":"Auto layout",children:Ut?E.jsx("span",{style:{fontSize:11},children:"..."}):E.jsx(Dv,{size:14})}),E.jsxs("button",{onClick:()=>Bc("selection"),className:"nt-btn",style:{display:"inline-flex",alignItems:"center",gap:5},disabled:Ut||m.length<2,title:m.length<2?"Select at least 2 nodes":"Layout only selected nodes",children:[E.jsx(Dv,{size:13}),"SEL"]}),ti&&E.jsx("span",{style:{fontSize:10,fontWeight:700,color:ti.tone==="warn"?"#ffb3b3":"#9ff3ca",letterSpacing:.3},children:ti.text}),E.jsx("div",{style:Sd}),E.jsx("button",{onClick:Kd,className:"nt-btn nt-btn-icon",title:"Export textures","aria-label":"Export",children:E.jsx(c2,{size:14})}),E.jsx("button",{onClick:Lo,className:"nt-btn nt-btn-icon",disabled:!Xe,title:"Restore last autosave","aria-label":"Restore autosave",children:E.jsx(E2,{size:14})})]}),E.jsx(NT,{renderView:Qd}),hn&&(hn.target.kind==="canvas"?E.jsx(B2,{x:hn.clientX,y:hn.clientY,graphX:hn.graphX,graphY:hn.graphY,onAddNode:(O,H,ee)=>{Hs(O,H,ee),D(null)},onAddFrame:Wd,onClose:()=>D(null)}):hn.target.kind==="frame"?E.jsx("div",{style:{position:"fixed",inset:0,zIndex:1200},onMouseDown:()=>D(null),children:E.jsxs("div",{style:{position:"fixed",left:hn.clientX,top:hn.clientY,width:200,background:"#1b1d22f6",border:"1px solid #343a46",borderRadius:8,boxShadow:"0 14px 38px #000000aa",padding:6},onMouseDown:O=>O.stopPropagation(),onContextMenu:O=>O.preventDefault(),children:[E.jsx("button",{className:"nt-btn-sm",style:{width:"100%",marginBottom:4,textAlign:"left"},onClick:()=>{hn.target.kind==="frame"&&jd(hn.target.frameId)},children:"Rename Frame"}),E.jsx("button",{className:"nt-btn-sm",style:{width:"100%",marginBottom:4,textAlign:"left"},onClick:()=>{hn.target.kind==="frame"&&Xd(hn.target.frameId)},children:"Cycle Color"}),E.jsx("button",{className:"nt-btn-sm",style:{width:"100%",textAlign:"left",borderColor:"#6f3737",color:"#ffb3b3"},onClick:()=>{hn.target.kind==="frame"&&Yd(hn.target.frameId)},children:"Delete Frame"})]})}):E.jsx("div",{onMouseDown:()=>D(null),children:E.jsx(O2,{x:hn.clientX,y:hn.clientY,items:Ys,onRun:O=>Al(O,hn),onClose:()=>D(null)})})),E.jsx(L2,{open:ue,items:Zd,onRun:O=>Al(O),onClose:()=>xe(!1)}),E.jsx(F2,{open:!!fe,compatibleType:Rl,onSelect:qd,onClose:()=>he(null)})]})})}const Ht={};function Pd(i){return typeof i=="number"||typeof i=="boolean"||typeof i=="string"?String(i):Array.isArray(i)?`[${i.map(e=>Pd(e)).join(",")}]`:i==null?"null":JSON.stringify(i)}function ax(i,e,t=""){const r=[];if(i.uniformLayout&&i.uniformLayout.length>0)for(const o of i.uniformLayout){const a=i.uniformBindings[o.name];a&&r.push(`${o.name}:${Pd(a.value)}`)}else{for(const o of i.uniforms){const a=i.uniformBindings[o.name];a&&r.push(`${o.name}:${Pd(a.value)}`)}r.length===0&&Object.entries(i.uniformBindings).sort(([o],[a])=>o.localeCompare(a)).forEach(([o,a])=>r.push(`${o}:${Pd(a.value)}`))}return`${e}|${t}|${i.hash}|${i.vertex.length}|${i.fragment.length}|${r.join("|")}`}function Im(i,e){if(Ht.unavailableReason)return null;if(!Ht.renderer)try{const o=document.createElement("canvas");o.width=e,o.height=e,Ht.renderer=new qx({canvas:o,alpha:!0,preserveDrawingBuffer:!0,antialias:!1}),Ht.renderer.setPixelRatio(1),Ht.renderer.setSize(e,e,!1),Ht.renderer.setClearColor(0,1),Ht.scene=new Px,Ht.camera=new Rc(-1,1,1,-1,0,1),Ht.geo=new wl(2,2);const a=new tr({uniforms:{}});Ht.mesh=new yr(Ht.geo,a),Ht.material=a,Ht.shaderKey="",Ht.scene.add(Ht.mesh),Ht.lastSize=e}catch(o){return Ht.unavailableReason=((o==null?void 0:o.message)||String(o)||"WebGL context creation failed").replace(/\s+/g," ").trim(),Ht.unavailableLogged||(Ht.unavailableLogged=!0,console.warn(`[thumb] WebGL thumbnails disabled: ${Ht.unavailableReason}`)),null}if(!Ht.renderer||!Ht.scene||!Ht.camera)return null;Ht.lastSize!==e&&(Ht.renderer.setSize(e,e,!1),Ht.renderer.domElement.width=e,Ht.renderer.domElement.height=e,Ht.lastSize=e);const t={};if(i.uniformLayout&&i.uniformLayout.length>0)for(const o of i.uniformLayout){const a=i.uniformBindings[o.name];a&&(t[o.name]={value:a.value})}else{for(const o of i.uniforms){const a=i.uniformBindings[o.name];a&&(t[o.name]={value:a.value})}Object.keys(t).length===0&&Object.entries(i.uniformBindings).forEach(([o,a])=>{t[o]={value:a.value}})}t.u_time={value:0},t.u_resolution={value:[e,e]},t.u_preview_offset={value:[0,0]},t.u_preview_zoom={value:1},t.u_preview_tile={value:0};const r=`${i.hash}|${i.vertex.length}|${i.fragment.length}`;if(!Ht.material||Ht.shaderKey!==r){const o=new tr({vertexShader:i.vertex,fragmentShader:i.fragment,uniforms:t});Ht.material&&Ht.material!==o&&Ht.material.dispose(),Ht.material=o,Ht.shaderKey=r,Ht.mesh.material=o}else{const o=Ht.material;Object.entries(t).forEach(([a,c])=>{o.uniforms[a]?o.uniforms[a].value=c.value:o.uniforms[a]=c}),o.needsUpdate=!1}return Ht.renderer.render(Ht.scene,Ht.camera),Ht.renderer.domElement}function kC(i,e,t){const r=Im(i,e),o=t??document.createElement("canvas");(o.width!==e||o.height!==e)&&(o.width=e,o.height=e);const a=o.getContext("2d");return a&&r?(a.clearRect(0,0,e,e),a.drawImage(r,0,0,e,e)):a&&!r&&(a.fillStyle="#16161f",a.fillRect(0,0,e,e),a.fillStyle="#6b7280",a.font=`bold ${Math.max(8,Math.floor(e*.12))}px monospace`,a.textAlign="center",a.textBaseline="middle",a.fillText("NO GPU",e*.5,e*.5)),o}function UC(i,e){const t=Im(i,e);return t?t.toDataURL("image/png"):S_(e,"NO GPU")}function S_(i,e="ERR"){const t=document.createElement("canvas");t.width=Math.max(32,i),t.height=Math.max(32,i);const r=t.getContext("2d");return r?(r.fillStyle="#14090a",r.fillRect(0,0,t.width,t.height),r.strokeStyle="#7f1d1d",r.lineWidth=2,r.strokeRect(1,1,t.width-2,t.height-2),r.fillStyle="#f87171",r.font=`bold ${Math.max(10,Math.floor(t.width*.14))}px monospace`,r.textAlign="center",r.textBaseline="middle",r.fillText(e,t.width*.5,t.height*.5),t.toDataURL("image/png")):""}const FC={width:"100vw",height:"100vh",display:"flex",flexDirection:"column",background:"var(--nt-bg-0)",color:"var(--nt-text-1)",overflow:"hidden",fontFamily:"'Segoe UI','IBM Plex Mono',sans-serif"},OC={height:28,display:"flex",alignItems:"center",gap:14,background:"var(--nt-bg-2)",borderBottom:"1px solid var(--nt-border-1)",padding:"0 10px",flexShrink:0},BC={fontSize:11,color:"var(--nt-text-0)",marginRight:12,fontWeight:600},zC={height:34,display:"flex",alignItems:"center",gap:6,background:"var(--nt-bg-1)",borderBottom:"1px solid var(--nt-border-1)",padding:"0 8px",flexShrink:0},$C={fontSize:9,color:"var(--nt-text-2)",letterSpacing:.4},Sd={width:1,height:14,background:"var(--nt-border-1)",margin:"0 2px"},VC={position:"absolute",top:"100%",left:0,marginTop:4,background:"var(--nt-bg-1)",border:"1px solid var(--nt-border-1)",borderRadius:4,boxShadow:"0 8px 24px #000000aa",padding:"4px 0",minWidth:180,zIndex:200},fp={height:1,background:"var(--nt-border-1)",margin:"4px 8px"};class HC extends ts.Component{constructor(){super(...arguments),this.state={renderError:null,renderInfo:null,runtimeError:null},this.onWindowError=e=>{var o;const t=e.error instanceof Error?`${e.error.name}: ${e.error.message}`:e.message||"Unknown runtime error",r=e.filename?` @ ${e.filename}:${e.lineno}:${e.colno}`:"";console.error("[CrashBoundary] Window error:",e.error||e.message),Cn({level:"error",source:"window-error",message:`${t}${r}`,details:(o=e.error)==null?void 0:o.stack}),this.setState({runtimeError:`${t}${r}`})},this.onUnhandledRejection=e=>{const t=e.reason,r=a=>{try{return JSON.stringify(a)}catch{return"[unserializable rejection reason]"}},o=t instanceof Error?`${t.name}: ${t.message}`:typeof t=="string"?t:r(t);console.error("[CrashBoundary] Unhandled promise rejection:",t),Cn({level:"error",source:"unhandled-rejection",message:o,details:t instanceof Error?t.stack:void 0}),this.setState({runtimeError:`Unhandled promise rejection: ${o}`})},this.onReload=()=>{window.location.reload()},this.onDismissRuntime=()=>{this.setState({runtimeError:null})}}static getDerivedStateFromError(e){return{renderError:e}}componentDidCatch(e,t){console.error("[CrashBoundary] React render crash:",e,t),Cn({level:"error",source:"react-render",message:`${e.name}: ${e.message}`,details:t.componentStack||e.stack}),this.setState({renderInfo:t})}componentDidMount(){window.addEventListener("error",this.onWindowError),window.addEventListener("unhandledrejection",this.onUnhandledRejection)}componentWillUnmount(){window.removeEventListener("error",this.onWindowError),window.removeEventListener("unhandledrejection",this.onUnhandledRejection)}render(){const{renderError:e,renderInfo:t,runtimeError:r}=this.state,o=!!e,a=e?`${e.name}: ${e.message}`:r;return!o&&!r?this.props.children:E.jsx("div",{style:GC,children:E.jsxs("div",{style:WC,children:[E.jsx("div",{style:jC,children:o?"Application Crashed":"Runtime Error Detected"}),E.jsx("div",{style:XC,children:o?"A rendering error crashed the app. See details below.":"An unexpected runtime error occurred. You can dismiss or reload."}),E.jsx("pre",{style:YC,children:a||"Unknown error"}),(t==null?void 0:t.componentStack)&&E.jsx("pre",{style:qC,children:t.componentStack}),E.jsxs("div",{style:KC,children:[!o&&E.jsx("button",{style:JC,onClick:this.onDismissRuntime,children:"Dismiss"}),E.jsx("button",{style:ZC,onClick:this.onReload,children:"Reload App"})]})]})})}}const GC={position:"fixed",inset:0,zIndex:99999,display:"flex",alignItems:"center",justifyContent:"center",background:"#0d1017",color:"#dde5ff",padding:16,boxSizing:"border-box"},WC={width:"min(920px, 100%)",maxHeight:"90vh",overflow:"auto",background:"#182131",border:"1px solid #38547f",borderRadius:10,boxShadow:"0 16px 50px #00000088",padding:14,boxSizing:"border-box",fontFamily:"'Segoe UI', 'Cascadia Code', sans-serif"},jC={fontSize:18,fontWeight:700,color:"#ffb4b4",marginBottom:6},XC={fontSize:12,color:"#b8c6e8",marginBottom:10},YC={margin:0,padding:10,borderRadius:6,border:"1px solid #704040",background:"#2b1616",color:"#ffd2d2",whiteSpace:"pre-wrap",wordBreak:"break-word",fontSize:12,lineHeight:1.45},qC={margin:"10px 0 0",padding:10,borderRadius:6,border:"1px solid #3a4f75",background:"#121b2a",color:"#bfd1f7",whiteSpace:"pre-wrap",wordBreak:"break-word",fontSize:11,lineHeight:1.4,maxHeight:260,overflow:"auto"},KC={marginTop:12,display:"flex",justifyContent:"flex-end",gap:8},ZC={background:"#2b4d84",border:"1px solid #6d90c7",color:"#ecf2ff",borderRadius:5,padding:"6px 12px",fontSize:12,cursor:"pointer"},JC={background:"#1d283d",border:"1px solid #3f577f",color:"#d1ddfa",borderRadius:5,padding:"6px 12px",fontSize:12,cursor:"pointer"},cm=document.getElementById("root");if(!cm)throw new Error("Root element #root not found.");const lx=E.jsx(HC,{children:E.jsx(NC,{})}),QC=!1;try{yy.createRoot(cm).render(QC?lx:E.jsx(N.StrictMode,{children:lx}))}catch(i){const e=i instanceof Error?`${i.name}: ${i.message}`:String(i);Cn({level:"error",source:"startup",message:e,details:i instanceof Error?i.stack:void 0}),cm.innerHTML=`
    <div style="padding:16px;background:#0f131b;color:#ffd0d0;font-family:Segoe UI,Consolas,monospace;">
      <h2 style="margin:0 0 8px 0;">App failed to start</h2>
      <pre style="white-space:pre-wrap;background:#2a1414;border:1px solid #7d3b3b;padding:10px;border-radius:6px;">${e}</pre>
      <button id="reload-btn" style="margin-top:10px;padding:6px 10px;border-radius:5px;border:1px solid #5c7cae;background:#2a4572;color:#eaf1ff;cursor:pointer;">Reload App</button>
    </div>
  `;const t=document.getElementById("reload-btn");t&&t.addEventListener("click",()=>window.location.reload())}export{eA as $,hx as A,wo as B,pA as C,lA as D,xh as E,ns as F,zu as G,Ns as H,Bx as I,Ac as J,Tm as K,ml as L,tA as M,Mt as N,wl as O,sa as P,Ml as Q,Dx as R,dA as S,nA as T,tr as U,pe as V,qx as W,oA as X,Em as Y,W1 as Z,dm as _,Cn as a,dy as a0,ln as b,iA as c,rA as d,qn as e,Px as f,sn as g,Or as h,xr as i,E as j,fx as k,dx as l,ux as m,hA as n,yr as o,qv as p,Ox as q,N as r,bm as s,aA as t,cA as u,uA as v,fA as w,dv as x,sA as y,Mp as z};
