/*! For license information please see index.1414e1123300873ccd89.js.LICENSE.txt */
!function(){"use strict";var e,t,r={741:function(e,t,r){var n=r(526),o=Symbol.for("react.element"),u=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,a={},f=null,l=null;for(n in void 0!==r&&(f=""+r),void 0!==t.key&&(f=""+t.key),void 0!==t.ref&&(l=t.ref),t)u.call(t,n)&&!c.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:o,type:e,key:f,ref:l,props:a,_owner:i.current}}t.jsx=a,t.jsxs=a},743:function(e,t){var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),a=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),s=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),y=Symbol.iterator,d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,m={};function h(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}function b(){}function _(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||d}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=h.prototype;var g=_.prototype=new b;g.constructor=_,v(g,h.prototype),g.isPureReactComponent=!0;var S=Array.isArray,k=Object.prototype.hasOwnProperty,E={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,n){var o,u={},i=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,o)&&!j.hasOwnProperty(o)&&(u[o]=t[o]);var a=arguments.length-2;if(1===a)u.children=n;else if(1<a){for(var f=Array(a),l=0;l<a;l++)f[l]=arguments[l+2];u.children=f}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===u[o]&&(u[o]=a[o]);return{$$typeof:r,type:e,key:i,ref:c,props:u,_owner:E.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var C=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function $(e,t,o,u,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var a=!1;if(null===e)a=!0;else switch(c){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case r:case n:a=!0}}if(a)return i=i(a=e),e=""===u?"."+R(a,0):u,S(i)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),$(i,t,o,"",(function(e){return e}))):null!=i&&(w(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,o+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(a=0,u=""===u?".":u+":",S(e))for(var f=0;f<e.length;f++){var l=u+R(c=e[f],f);a+=$(c,t,o,l,i)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=y&&e[y]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),f=0;!(c=e.next()).done;)a+=$(c=c.value,t,o,l=u+R(c,f++),i);else if("object"===c)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function x(e,t,r){if(null==e)return e;var n=[],o=0;return $(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},T={transition:null},L={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:T,ReactCurrentOwner:E};t.Children={map:x,forEach:function(e,t,r){x(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return x(e,(function(){t++})),t},toArray:function(e){return x(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=h,t.Fragment=o,t.Profiler=i,t.PureComponent=_,t.StrictMode=u,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=v({},e.props),u=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=E.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(f in t)k.call(t,f)&&!j.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==a?a[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=n;else if(1<f){a=Array(f);for(var l=0;l<f;l++)a[l]=arguments[l+2];o.children=a}return{$$typeof:r,type:e.type,key:u,ref:i,props:o,_owner:c}},t.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=O,t.createFactory=function(e){var t=O.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,r){return I.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,r){return I.current.useReducer(e,t,r)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return I.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return I.current.useTransition()},t.version="18.2.0"},526:function(e,t,r){e.exports=r(743)},469:function(e,t,r){e.exports=r(741)},636:function(e,t,r){var n=r(526),o=r(502),u=r(517),i=r(469);function c(){(0,u.a)();const[e,t]=(0,n.useState)((()=>{}));console.log("production");const o=(0,n.useCallback)((()=>{r.e(389).then(r.bind(r,389)).then((e=>{t(e)}))}),[]),c=function(e,t){let r="",n=e.length-1,o="10".length-1,u=0;for(;n>=0||o>=0;){let t=0,i=0,c=0;n>=0&&(t=e[n]-"0",n--),o>=0&&(i="10"[o]-"0",o--),c=t+i+u,c>=10?(c-=10,u=1):u=0,r=c+r}return u>0&&(r=u+r),r}("999900000000009999999");return(0,i.jsxs)("div",{children:[e?(0,i.jsx)(e.ImportDistance,{}):"",c,(0,i.jsx)("br",{}),"Webpack Emulate!!!!!!!!",(0,i.jsx)("img",{src:"./assets/images/luffy.575590.jpeg",alt:"luffy",onClick:o})]})}console.log("webpack emulate!!"),console.log("production"),(0,o.s)(document.getElementById("root-webpack")).render((0,i.jsx)(c,{}))}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var u=n[e]={exports:{}};return r[e](u,u.exports,o),u.exports}o.m=r,e=[],o.O=function(t,r,n,u){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],n=e[l][1],u=e[l][2];for(var c=!0,a=0;a<r.length;a++)(!1&u||i>=u)&&Object.keys(o.O).every((function(e){return o.O[e](r[a])}))?r.splice(a--,1):(c=!1,u<i&&(i=u));if(c){e.splice(l--,1);var f=n();void 0!==f&&(t=f)}}return t}u=u||0;for(var l=e.length;l>0&&e[l-1][2]>u;l--)e[l]=e[l-1];e[l]=[r,n,u]},o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,r){return o.f[r](e,t),t}),[]))},o.u=function(e){return"js/"+e+"."+o.h()+".js"},o.miniCssF=function(e){},o.h=function(){return"1414e1123300873ccd89"},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},o.l=function(e,r,n,u){if(t[e])t[e].push(r);else{var i,c;if(void 0!==n)for(var a=document.getElementsByTagName("script"),f=0;f<a.length;f++){var l=a[f];if(l.getAttribute("src")==e){i=l;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=e),t[e]=[r];var s=function(r,n){i.onerror=i.onload=null,clearTimeout(p);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(n)})),r)return r(n)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),c&&document.head.appendChild(i)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="",function(){var e={826:0};o.f.j=function(t,r){var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var u=new Promise((function(r,o){n=e[t]=[r,o]}));r.push(n[2]=u);var i=o.p+o.u(t),c=new Error;o.l(i,(function(r){if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var u=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+u+": "+i+")",c.name="ChunkLoadError",c.type=u,c.request=i,n[1](c)}}),"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,u,i=r[0],c=r[1],a=r[2],f=0;if(i.some((function(t){return 0!==e[t]}))){for(n in c)o.o(c,n)&&(o.m[n]=c[n]);if(a)var l=a(o)}for(t&&t(r);f<i.length;f++)u=i[f],o.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return o.O(l)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var u=o.O(void 0,[216,351],(function(){return o(636)}));u=o.O(u)}();