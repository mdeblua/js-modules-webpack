!function(t){var e={};function n(r){if(e[r])return e[r].exports;var u=e[r]={i:r,l:!1,exports:{}};return t[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}function u(t){return function e(n){return 0===arguments.length||r(n)?e:t.apply(this,arguments)}}n.r(e);function o(t){return function e(n,o){switch(arguments.length){case 0:return e;case 1:return r(n)?e:u(function(e){return t(n,e)});default:return r(n)&&r(o)?e:r(n)?u(function(e){return t(e,o)}):r(o)?u(function(e){return t(n,e)}):t(n,o)}}}function i(t,e){var n;t=t||[],e=e||[];var r=t.length,u=e.length,o=[];for(n=0;n<r;)o[o.length]=t[n],n+=1;for(n=0;n<u;)o[o.length]=e[n],n+=1;return o}function a(t,e){switch(t){case 0:return function(){return e.apply(this,arguments)};case 1:return function(t){return e.apply(this,arguments)};case 2:return function(t,n){return e.apply(this,arguments)};case 3:return function(t,n,r){return e.apply(this,arguments)};case 4:return function(t,n,r,u){return e.apply(this,arguments)};case 5:return function(t,n,r,u,o){return e.apply(this,arguments)};case 6:return function(t,n,r,u,o,i){return e.apply(this,arguments)};case 7:return function(t,n,r,u,o,i,a){return e.apply(this,arguments)};case 8:return function(t,n,r,u,o,i,a,c){return e.apply(this,arguments)};case 9:return function(t,n,r,u,o,i,a,c,s){return e.apply(this,arguments)};case 10:return function(t,n,r,u,o,i,a,c,s,f){return e.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}function c(t){return function e(n,i,a){switch(arguments.length){case 0:return e;case 1:return r(n)?e:o(function(e,r){return t(n,e,r)});case 2:return r(n)&&r(i)?e:r(n)?o(function(e,n){return t(e,i,n)}):r(i)?o(function(e,r){return t(n,e,r)}):u(function(e){return t(n,i,e)});default:return r(n)&&r(i)&&r(a)?e:r(n)&&r(i)?o(function(e,n){return t(e,n,a)}):r(n)&&r(a)?o(function(e,n){return t(e,i,n)}):r(i)&&r(a)?o(function(e,r){return t(n,e,r)}):r(n)?u(function(e){return t(e,i,a)}):r(i)?u(function(e){return t(n,e,a)}):r(a)?u(function(e){return t(n,i,e)}):t(n,i,a)}}}var s=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)};function f(t){return"[object String]"===Object.prototype.toString.call(t)}var l=u(function(t){return!!s(t)||!!t&&("object"==typeof t&&(!f(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))}),p=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,e){return this.f(t,e)},t}();function y(t){return new p(t)}var h=o(function(t,e){return a(t.length,function(){return t.apply(e,arguments)})});function g(t,e,n){for(var r=n.next();!r.done;){if((e=t["@@transducer/step"](e,r.value))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r=n.next()}return t["@@transducer/result"](e)}function d(t,e,n,r){return t["@@transducer/result"](n[r](h(t["@@transducer/step"],t),e))}var v="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function m(t,e,n){if("function"==typeof t&&(t=y(t)),l(n))return function(t,e,n){for(var r=0,u=n.length;r<u;){if((e=t["@@transducer/step"](e,n[r]))&&e["@@transducer/reduced"]){e=e["@@transducer/value"];break}r+=1}return t["@@transducer/result"](e)}(t,e,n);if("function"==typeof n["fantasy-land/reduce"])return d(t,e,n,"fantasy-land/reduce");if(null!=n[v])return g(t,e,n[v]());if("function"==typeof n.next)return g(t,e,n);if("function"==typeof n.reduce)return d(t,e,n,"reduce");throw new TypeError("reduce: list must be array or iterable")}function b(t,e){return Object.prototype.hasOwnProperty.call(e,t)}var _=Object.prototype.toString,O=function(){return"[object Arguments]"===_.call(arguments)?function(t){return"[object Arguments]"===_.call(t)}:function(t){return b("callee",t)}},S=!{toString:null}.propertyIsEnumerable("toString"),j=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],w=function(){return arguments.propertyIsEnumerable("length")}(),A=function(t,e){for(var n=0;n<t.length;){if(t[n]===e)return!0;n+=1}return!1},x=u("function"!=typeof Object.keys||w?function(t){if(Object(t)!==t)return[];var e,n,r=[],u=w&&O(t);for(e in t)!b(e,t)||u&&"length"===e||(r[r.length]=e);if(S)for(n=j.length-1;n>=0;)b(e=j[n],t)&&!A(r,e)&&(r[r.length]=e),n-=1;return r}:function(t){return Object(t)!==t?[]:Object.keys(t)}),q=c(m);Number.isInteger;var E=u(function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)});function k(t,e){return function(){return e.call(this,t.apply(this,arguments))}}function I(t,e){return function(){var n=arguments.length;if(0===n)return e();var r=arguments[n-1];return s(r)||"function"!=typeof r[t]?e.apply(this,arguments):r[t].apply(r,Array.prototype.slice.call(arguments,0,n-1))}}var P=c(I("slice",function(t,e,n){return Array.prototype.slice.call(n,t,e)})),z=u(I("tail",P(1,1/0)));var C=u(function(t){return f(t)?t.split("").reverse().join(""):Array.prototype.slice.call(t,0).reverse()});function N(){if(0===arguments.length)throw new Error("compose requires at least one argument");return function(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return a(arguments[0].length,q(k,arguments[0],z(arguments)))}.apply(this,C(arguments))}function U(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}function B(t,e,n){for(var r=0,u=n.length;r<u;){if(t(e,n[r]))return!0;r+=1}return!1}var D=o(function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e});function F(t,e,n,r){var u=U(t);function o(t,e){return M(t,e,n.slice(),r.slice())}return!B(function(t,e){return!B(o,e,t)},U(e),u)}function M(t,e,n,r){if(D(t,e))return!0;var u,o,i=E(t);if(i!==E(e))return!1;if(null==t||null==e)return!1;if("function"==typeof t["fantasy-land/equals"]||"function"==typeof e["fantasy-land/equals"])return"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](e)&&"function"==typeof e["fantasy-land/equals"]&&e["fantasy-land/equals"](t);if("function"==typeof t.equals||"function"==typeof e.equals)return"function"==typeof t.equals&&t.equals(e)&&"function"==typeof e.equals&&e.equals(t);switch(i){case"Arguments":case"Array":case"Object":if("function"==typeof t.constructor&&"Promise"===(u=t.constructor,null==(o=String(u).match(/^function (\w*)/))?"":o[1]))return t===e;break;case"Boolean":case"Number":case"String":if(typeof t!=typeof e||!D(t.valueOf(),e.valueOf()))return!1;break;case"Date":if(!D(t.valueOf(),e.valueOf()))return!1;break;case"Error":return t.name===e.name&&t.message===e.message;case"RegExp":if(t.source!==e.source||t.global!==e.global||t.ignoreCase!==e.ignoreCase||t.multiline!==e.multiline||t.sticky!==e.sticky||t.unicode!==e.unicode)return!1}for(var a=n.length-1;a>=0;){if(n[a]===t)return r[a]===e;a-=1}switch(i){case"Map":return t.size===e.size&&F(t.entries(),e.entries(),n.concat([t]),r.concat([e]));case"Set":return t.size===e.size&&F(t.values(),e.values(),n.concat([t]),r.concat([e]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var c=x(t);if(c.length!==x(e).length)return!1;var s=n.concat([t]),f=r.concat([e]);for(a=c.length-1;a>=0;){var l=c[a];if(!b(l,e)||!M(e[l],t[l],s,f))return!1;a-=1}return!0}var T=o(function(t,e){return M(t,e,[],[])});function R(t,e,n){var r,u;if("function"==typeof t.indexOf)switch(typeof e){case"number":if(0===e){for(r=1/e;n<t.length;){if(0===(u=t[n])&&1/u===r)return n;n+=1}return-1}if(e!=e){for(;n<t.length;){if("number"==typeof(u=t[n])&&u!=u)return n;n+=1}return-1}return t.indexOf(e,n);case"string":case"boolean":case"function":case"undefined":return t.indexOf(e,n);case"object":if(null===e)return t.indexOf(e,n)}for(;n<t.length;){if(T(t[n],e))return n;n+=1}return-1}function L(t,e){return R(e,t,0)>=0}var W=function(t){return(t<10?"0":"")+t};Date.prototype.toISOString;function X(t){return t}var G=u(X);function H(t,e,n){var r,u=typeof t;switch(u){case"string":case"number":return 0===t&&1/t==-1/0?!!n._items["-0"]||(e&&(n._items["-0"]=!0),!1):null!==n._nativeSet?e?(r=n._nativeSet.size,n._nativeSet.add(t),n._nativeSet.size===r):n._nativeSet.has(t):u in n._items?t in n._items[u]||(e&&(n._items[u][t]=!0),!1):(e&&(n._items[u]={},n._items[u][t]=!0),!1);case"boolean":if(u in n._items){var o=t?1:0;return!!n._items[u][o]||(e&&(n._items[u][o]=!0),!1)}return e&&(n._items[u]=t?[!1,!0]:[!0,!1]),!1;case"function":return null!==n._nativeSet?e?(r=n._nativeSet.size,n._nativeSet.add(t),n._nativeSet.size===r):n._nativeSet.has(t):u in n._items?!!L(t,n._items[u])||(e&&n._items[u].push(t),!1):(e&&(n._items[u]=[t]),!1);case"undefined":return!!n._items[u]||(e&&(n._items[u]=!0),!1);case"object":if(null===t)return!!n._items.null||(e&&(n._items.null=!0),!1);default:return(u=Object.prototype.toString.call(t))in n._items?!!L(t,n._items[u])||(e&&n._items[u].push(t),!1):(e&&(n._items[u]=[t]),!1)}}var J=function(){function t(){this._nativeSet="function"==typeof Set?new Set:null,this._items={}}return t.prototype.add=function(t){return!H(t,!0,this)},t.prototype.has=function(t){return H(t,!1,this)},t}(),K=o(function(t,e){for(var n,r,u=new J,o=[],i=0;i<e.length;)n=t(r=e[i]),u.add(n)&&o.push(r),i+=1;return o})(G);var Q="function"==typeof Object.assign?Object.assign:function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1,r=arguments.length;n<r;){var u=arguments[n];if(null!=u)for(var o in u)b(o,u)&&(e[o]=u[o]);n+=1}return e},V=o(function(t,e){var n={};return n[t]=e,n});Array,String,Object;var Y="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",Z=(String.prototype.trim,o(N(K,i)));var $=function(t,e){return t+e};const tt=[1,2,3,4,7,8,1,3,5,110],et=Z(tt,[16,44,4,5,99,0,1,2,77,88,7]);function nt(t,e){return t-e}const rt=K(tt);console.log(et.sort(nt)),console.log(rt.sort(nt)),console.log($(1,1)),console.log("-10c"-3),console.log(function(t,e){return t*e}(10,3)),console.log(function(t,e){return t/e}(10,3)),console.log(3.14),console.log({nome:"templateNome",idade:"templateCalculoIdadede",sexo:"templateCalculoSexo"})}]);
//# sourceMappingURL=bundle.js.map