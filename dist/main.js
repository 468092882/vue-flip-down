!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["vue-flip-down"]=n():t["vue-flip-down"]=n()}(window,function(){return function(t){var n={};function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(o,i,function(n){return t[n]}.bind(null,i));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=1)}([function(t,n,e){var o=e(3);"string"==typeof o&&(o=[[t.i,o,""]]);e(5)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(t.exports=o.locals)},function(t,n,e){t.exports=e(7)},function(t,n,e){"use strict";var o=e(0);e.n(o).a},function(t,n,e){(t.exports=e(4)(!1)).push([t.i,"\n.vue-countdown-component[data-v-5ef48958] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n}\n@-webkit-keyframes animate-filp-data-v-5ef48958 {\n0% {\n    -webkit-transform: rotateX(0);\n            transform: rotateX(0);\n}\n100% {\n    -webkit-transform: rotateX(-180deg);\n            transform: rotateX(-180deg);\n}\n}\n@keyframes animate-filp-data-v-5ef48958 {\n0% {\n    -webkit-transform: rotateX(0);\n            transform: rotateX(0);\n}\n100% {\n    -webkit-transform: rotateX(-180deg);\n            transform: rotateX(-180deg);\n}\n}\n@-webkit-keyframes animate-filp2-data-v-5ef48958 {\n0% {\n    -webkit-transform: rotateX(180deg);\n            transform: rotateX(180deg);\n}\n100% {\n    -webkit-transform: rotateX(0);\n            transform: rotateX(0);\n}\n}\n@keyframes animate-filp2-data-v-5ef48958 {\n0% {\n    -webkit-transform: rotateX(180deg);\n            transform: rotateX(180deg);\n}\n100% {\n    -webkit-transform: rotateX(0);\n            transform: rotateX(0);\n}\n}\n.vue-countdown-component .time-box[data-v-5ef48958] {\n  position: relative;\n  box-sizing: border-box;\n  height: 30px;\n  min-width: 28px;\n  font-size: 16px;\n  text-align: center;\n  line-height: 30px;\n  background-color: #6c96e8;\n  color: #ffffff;\n  -webkit-perspective: 50px;\n          perspective: 50px;\n  border-radius: 3px;\n  padding: 0 2px;\n}\n.vue-countdown-component .time-box[data-v-5ef48958]:before {\n  content: '';\n  position: absolute;\n  background: #a7c7ff;\n  width: 2px;\n  height: 6px;\n  top: 50%;\n  left: -1px;\n  margin-top: -3px;\n}\n.vue-countdown-component .time-box[data-v-5ef48958]:after {\n  content: '';\n  position: absolute;\n  background: #a7c7ff;\n  width: 2px;\n  height: 6px;\n  top: 50%;\n  right: -1px;\n  margin-top: -3px;\n}\n.vue-countdown-component .time-box + .time-box[data-v-5ef48958] {\n  margin-left: 8px;\n}\n.vue-countdown-component .time-box > div[data-v-5ef48958] {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 50%;\n  overflow: hidden;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n}\n.vue-countdown-component .time-box > div > div[data-v-5ef48958] {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 30px;\n}\n.vue-countdown-component .time-box > div.a0[data-v-5ef48958] {\n  top: 0;\n  border-radius: 3px 3px 0 0;\n  background-color: #6c96e8;\n  -webkit-transform-origin: 50% bottom;\n          transform-origin: 50% bottom;\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n  -webkit-transform: rotateX(0);\n          transform: rotateX(0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  z-index: 2;\n}\n.vue-countdown-component .time-box > div.a0.anime[data-v-5ef48958] {\n  -webkit-animation-name: animate-filp-data-v-5ef48958;\n          animation-name: animate-filp-data-v-5ef48958;\n}\n.vue-countdown-component .time-box > div.a0 > div[data-v-5ef48958] {\n  top: 0;\n}\n.vue-countdown-component .time-box > div.b0[data-v-5ef48958] {\n  top: 15px;\n  border-radius: 0 0 3px 3px;\n  background-color: #73a1f8;\n  -webkit-transform-origin: 50% top;\n          transform-origin: 50% top;\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n  -webkit-transform: rotateX(180deg);\n          transform: rotateX(180deg);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  z-index: 2;\n}\n.vue-countdown-component .time-box > div.b0 > div[data-v-5ef48958] {\n  bottom: 0;\n}\n.vue-countdown-component .time-box > div.b0.anime[data-v-5ef48958] {\n  -webkit-animation-name: animate-filp2-data-v-5ef48958;\n          animation-name: animate-filp2-data-v-5ef48958;\n}\n.vue-countdown-component .time-box > div.a1[data-v-5ef48958] {\n  top: 15px;\n  border-radius: 0 0 3px 3px;\n  background-color: #73a1f8;\n}\n.vue-countdown-component .time-box > div.a1 > div[data-v-5ef48958] {\n  bottom: 0;\n}\n",""])},function(t,n){t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e,o=t[1]||"",i=t[3];if(!i)return o;if(n&&"function"==typeof btoa){var r=(e=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"),a=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[o].concat(a).concat([r]).join("\n")}return[o].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&o[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),n.push(a))}},n}},function(t,n,e){var o,i,r={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=o.apply(this,arguments)),i}),s=function(t){var n={};return function(t,e){if("function"==typeof t)return t();if(void 0===n[t]){var o=function(t,n){return n?n.querySelector(t):document.querySelector(t)}.call(this,t,e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}n[t]=o}return n[t]}}(),d=null,f=0,c=[],u=e(6);function l(t,n){for(var e=0;e<t.length;e++){var o=t[e],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(y(o.parts[a],n))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(y(o.parts[a],n));r[o.id]={id:o.id,refs:1,parts:s}}}}function m(t,n){for(var e=[],o={},i=0;i<t.length;i++){var r=t[i],a=n.base?r[0]+n.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};o[a]?o[a].parts.push(s):e.push(o[a]={id:a,parts:[s]})}return e}function p(t,n){var e=s(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=c[c.length-1];if("top"===t.insertAt)o?o.nextSibling?e.insertBefore(n,o.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),c.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(t.insertAt.before,e);e.insertBefore(n,i)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=c.indexOf(t);n>=0&&c.splice(n,1)}function b(t){var n=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var o=e.nc;o&&(t.attrs.nonce=o)}return h(n,t.attrs),p(t,n),n}function h(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function y(t,n){var e,o,i,r;if(n.transform&&t.css){if(!(r=n.transform(t.css)))return function(){};t.css=r}if(n.singleton){var a=f++;e=d||(d=b(n)),o=g.bind(null,e,a,!1),i=g.bind(null,e,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var n=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",h(n,t.attrs),p(t,n),n}(n),o=function(t,n,e){var o=e.css,i=e.sourceMap,r=void 0===n.convertToAbsoluteUrls&&i;(n.convertToAbsoluteUrls||r)&&(o=u(o)),i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,e,n),i=function(){v(e),e.href&&URL.revokeObjectURL(e.href)}):(e=b(n),o=function(t,n){var e=n.css,o=n.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,e),i=function(){v(e)});return o(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;o(t=n)}else i()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=m(t,n);return l(e,n),function(t){for(var o=[],i=0;i<e.length;i++){var a=e[i];(s=r[a.id]).refs--,o.push(s)}for(t&&l(m(t,n),n),i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var d=0;d<s.parts.length;d++)s.parts[d]();delete r[s.id]}}}};var x,w=(x=[],function(t,n){return x[t]=n,x.filter(Boolean).join("\n")});function g(t,n,e,o){var i=e?"":o.css;if(t.styleSheet)t.styleSheet.cssText=w(n,i);else{var r=document.createTextNode(i),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(r,a[n]):t.appendChild(r)}}},function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,o=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var i,r=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(i=0===r.indexOf("//")?r:0===r.indexOf("/")?e+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"vue-countdown-component"},[t.type>=4?e("div",{staticClass:"time-box"},[t._v("\n    "+t._s(t.day)+"\n    "),e("div",{class:["b0",{anime:t.isDayAnime}]},[e("div",[t._v(t._s(t.day))])]),t._v(" "),e("div",{class:["a0",{anime:t.isDayAnime}],on:{animationend:t.onDayAnimateEnd}},[e("div",[t._v(t._s(t.dayDelay))])]),t._v(" "),e("div",{staticClass:"a1"},[e("div",[t._v(t._s(t.dayDelay))])])]):t._e(),t._v(" "),t.type>=3?e("div",{staticClass:"time-box"},[t._v("\n    "+t._s(t.hour)+"\n    "),e("div",{class:["b0",{anime:t.isHourAnime}]},[e("div",[t._v(t._s(t.hour))])]),t._v(" "),e("div",{class:["a0",{anime:t.isHourAnime}],on:{animationend:t.onHourAnimateEnd}},[e("div",[t._v(t._s(t.hourDelay))])]),t._v(" "),e("div",{staticClass:"a1"},[e("div",[t._v(t._s(t.hourDelay))])])]):t._e(),t._v(" "),t.type>=2?e("div",{staticClass:"time-box"},[t._v("\n    "+t._s(t.min)+"\n    "),e("div",{class:["b0",{anime:t.isMinAnime}]},[e("div",[t._v(t._s(t.min))])]),t._v(" "),e("div",{class:["a0",{anime:t.isMinAnime}],on:{animationend:t.onMinAnimateEnd}},[e("div",[t._v(t._s(t.minDelay))])]),t._v(" "),e("div",{staticClass:"a1"},[e("div",[t._v(t._s(t.minDelay))])])]):t._e(),t._v(" "),e("div",{staticClass:"time-box"},[t._v("\n    "+t._s(t.second)+"\n    "),e("div",{class:["b0",{anime:t.isSecondAnime}]},[e("div",[t._v(t._s(t.second))])]),t._v(" "),e("div",{class:["a0",{anime:t.isSecondAnime}],on:{animationend:t.onSecondAnimateEnd}},[e("div",[t._v(t._s(t.secondDelay))])]),t._v(" "),e("div",{staticClass:"a1"},[e("div",[t._v(t._s(t.secondDelay))])])])])};o._withStripped=!0;var i={data:()=>({day:"",dayDelay:"",hour:"",hourDelay:"",min:"",minDelay:"",second:"",secondDelay:"",timer:null,isDayAnime:!1,isHourAnime:!1,isMinAnime:!1,isSecondAnime:!1}),props:{endDate:{type:[Date,Number,String],default:0},type:{type:[Number,String],default:4}},computed:{endTime(){return this.endDate instanceof Date?this.endDate.getTime():Number(this.endDate)>0?Number(this.endDate):0}},watch:{day(t){this.isDayAnime=!0,setTimeout(()=>{this.dayDelay=t},350)},hour(t){this.isHourAnime=!0,setTimeout(()=>{this.hourDelay=t},350)},min(t){this.isMinAnime=!0,setTimeout(()=>{this.minDelay=t},350)},second(t){this.isSecondAnime=!0,setTimeout(()=>{this.secondDelay=t},350)},endTime(t){t>0&&this.start()}},mounted(){this.start()},beforeDestroy(){clearTimeout(this.timer)},methods:{start(){clearTimeout(this.timer),this.timer=setTimeout(()=>{let t=this.endTime-(new Date).getTime();t=t<0?0:t;let n=0,e=0,o=0,i=0,r=Number(this.type);r>=4?(n=Math.floor(t/864e5),e=Math.floor(t/36e5-24*n),o=Math.floor(t/6e4-1440*n-60*e),i=Math.floor(t/1e3-86400*n-3600*e-60*o)):r>=3?(e=Math.floor(t/36e5),o=Math.floor(t/6e4-60*e),i=Math.floor(t/1e3-3600*e-60*o)):r>=2?(o=Math.floor(t/6e4),i=Math.floor(t/1e3-60*o)):i=Math.floor(t/1e3),this.day=String(n).padStart(2,"0"),this.hour=String(e).padStart(2,"0"),this.min=String(o).padStart(2,"0"),this.second=String(i).padStart(2,"0"),t>0&&this.start()},1e3)},onDayAnimateEnd(){this.isDayAnime=!1},onHourAnimateEnd(){this.isHourAnime=!1},onMinAnimateEnd(){this.isMinAnime=!1},onSecondAnimateEnd(){this.isSecondAnime=!1}}};e(2);var r=function(t,n,e,o,i,r,a,s){var d,f="function"==typeof t?t.options:t;if(n&&(f.render=n,f.staticRenderFns=[],f._compiled=!0),f._scopeId="data-v-"+r,d)if(f.functional){f._injectStyles=d;var c=f.render;f.render=function(t,n){return d.call(n),c(t,n)}}else{var u=f.beforeCreate;f.beforeCreate=u?[].concat(u,d):[d]}return{exports:t,options:f}}(i,o,0,0,0,"5ef48958");r.options.__file="src/app.vue";var a=r.exports;n.default=a}])});