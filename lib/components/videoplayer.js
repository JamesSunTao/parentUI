!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/static/",n(n.s="CYJD")}({"/GqU":function(t,e,n){var o=n("RK3t"),r=n("HYAF");t.exports=function(t){return o(r(t))}},"0BK2":function(t,e){t.exports={}},"0Dky":function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},"0GbY":function(t,e,n){var o=n("Qo9l"),r=n("2oRo"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(o[t])||i(r[t]):o[t]&&o[t][e]||r[t]&&r[t][e]}},"0eef":function(t,e,n){"use strict";var o={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!o.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:o},"2oRo":function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n("yLpj"))},"6JNq":function(t,e,n){var o=n("UTVS"),r=n("Vu81"),i=n("Bs8V"),a=n("m/L8");t.exports=function(t,e){for(var n=r(e),u=a.f,c=i.f,s=0;s<n.length;s++){var f=n[s];o(t,f)||u(t,f,c(e,f))}}},"93I0":function(t,e,n){var o=n("VpIT"),r=n("kOOl"),i=o("keys");t.exports=function(t){return i[t]||(i[t]=r(t))}},Bs8V:function(t,e,n){var o=n("g6v/"),r=n("0eef"),i=n("XGwC"),a=n("/GqU"),u=n("wE6v"),c=n("UTVS"),s=n("DPsx"),f=Object.getOwnPropertyDescriptor;e.f=o?f:function(t,e){if(t=a(t),e=u(e,!0),s)try{return f(t,e)}catch(t){}if(c(t,e))return i(!r.f.call(t,e),t[e])}},C1tf:function(t,e,n){var o=n("F+By");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n("SZ7m").default)("fe39619e",o,!0,{})},CYJD:function(t,e,n){"use strict";var o=n("TqRt");n("sMBO"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("NSNV"));r.default.install=function(t){t.component(r.default.name,r.default)};var i=r.default;e.default=i},DPsx:function(t,e,n){var o=n("g6v/"),r=n("0Dky"),i=n("zBJ4");t.exports=!o&&!r((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},EUja:function(t,e,n){"use strict";var o=n("ppGB"),r=n("HYAF");t.exports="".repeat||function(t){var e=String(r(this)),n="",i=o(t);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(e+=e))1&i&&(n+=e);return n}},"F+By":function(t,e,n){(t.exports=n("JPst")(!1)).push([t.i,".vk-video-palyer-panel[data-v-15ca94e4] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  background-color: #333;\n  z-index: 20;\n}\n.vk-video-palyer-panel .vk-close-btn[data-v-15ca94e4] {\n  position: absolute;\n  width: 35px;\n  height: 35px;\n  right: 12px;\n  top: 12px;\n}\n.vk-video-palyer-panel .vk-close-btn[data-v-15ca94e4]:active {\n  opacity: 0.7;\n}\n.vk-video-palyer-panel .vk-video[data-v-15ca94e4] {\n  position: relative;\n  width: 100%;\n  height: 300px;\n  left: 0px;\n  top: 50%;\n  margin-top: -150px;\n}\n.vk-video-palyer-panel .vk-video video[data-v-15ca94e4] {\n  width: 100%;\n  height: 100%;\n}\n.vk-video-palyer-panel .vk-video .vk-cover-opacity[data-v-15ca94e4] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 12;\n  background-color: #333;\n  opacity: 0.1;\n}\n.vk-video-palyer-panel .vk-video .vk-cover[data-v-15ca94e4] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n.vk-video-palyer-panel .vk-video .vk-cover .vk-cover-img[data-v-15ca94e4] {\n  width: 100%;\n  height: 100%;\n}\n.vk-video-palyer-panel .vk-video .vk-cover .vk-icon-play[data-v-15ca94e4] {\n  position: absolute;\n  display: inline-block;\n  z-index: 13;\n  top: 50%;\n  left: 50%;\n  margin-left: -32.5px;\n  margin-top: -32.5px;\n  width: 65px;\n  height: 65px;\n}\n.vk-video-palyer-panel .vk-video .vk-cover .vk-icon-play[data-v-15ca94e4]:active {\n  opacity: 0.9;\n}\n.vk-video-palyer-panel .vk-video-controls[data-v-15ca94e4] {\n  position: absolute;\n  width: 100%;\n  bottom: 10%;\n}\n.vk-video-palyer-panel .vk-video-controls .vk-video-progress[data-v-15ca94e4] {\n  position: relative;\n  height: 3px;\n  background: #787878;\n}\n.vk-video-palyer-panel .vk-video-controls .vk-video-progress .vk-video-progress-bar[data-v-15ca94e4] {\n  display: inline-block;\n  background: #fff;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 100%;\n}\n.vk-video-palyer-panel .vk-video-controls .vk-video-progress .vk-video-progress-bar span[data-v-15ca94e4] {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  right: -4px;\n  bottom: -2px;\n  background: #fff;\n  border-radius: 50%;\n}\n",""])},HYAF:function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},HYnF:function(t,e){t.exports="data:image/png;base64,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"},"I+eb":function(t,e,n){var o=n("2oRo"),r=n("Bs8V").f,i=n("kRJp"),a=n("busE"),u=n("zk60"),c=n("6JNq"),s=n("lMq5");t.exports=function(t,e){var n,f,l,p,d,v=t.target,h=t.global,g=t.stat;if(n=h?o:g?o[v]||u(v,{}):(o[v]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(d=r(n,f))&&d.value:n[f],!s(h?f:v+(g?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;c(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),a(n,f,p,t)}}},I8vh:function(t,e,n){var o=n("ppGB"),r=Math.max,i=Math.min;t.exports=function(t,e){var n=o(t);return n<0?r(n+e,0):i(n,e)}},JBy8:function(t,e,n){var o=n("yoRg"),r=n("eDl+").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,r)}},JPst:function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map((function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"}));return[n].concat(i).concat([r]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];null!=a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},"KHd+":function(t,e,n){"use strict";function o(t,e,n,o,r,i,a,u){var c,s="function"==typeof t?t.options:t;if(e&&(s.render=e,s.staticRenderFns=n,s._compiled=!0),o&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},s._ssrRegister=c):r&&(c=u?function(){r.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(s.functional){s._injectStyles=c;var f=s.render;s.render=function(t,e){return c.call(e),f(t,e)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:s}}n.d(e,"a",(function(){return o}))},NSNV:function(t,e,n){"use strict";n.r(e);var o=n("mMqg"),r=n("x/1k");for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("tyJq");var a=n("KHd+"),u=Object(a.a)(r.default,o.a,o.b,!1,null,"15ca94e4",null);e.default=u.exports},QIpd:function(t,e,n){var o=n("xrYK");t.exports=function(t){if("number"!=typeof t&&"Number"!=o(t))throw TypeError("Incorrect invocation");return+t}},Qo9l:function(t,e,n){var o=n("2oRo");t.exports=o},RK3t:function(t,e,n){var o=n("0Dky"),r=n("xrYK"),i="".split;t.exports=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==r(t)?i.call(t,""):Object(t)}:Object},SZ7m:function(t,e,n){"use strict";function o(t,e){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],a=i[0],u={id:t+":"+r,css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(u):n.push(o[a]={id:a,parts:[u]})}return n}n.r(e),n.d(e,"default",(function(){return d}));var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=r&&(document.head||document.getElementsByTagName("head")[0]),u=null,c=0,s=!1,f=function(){},l=null,p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function d(t,e,n,r){s=n,l=r||{};var a=o(t,e);return v(a),function(e){for(var n=[],r=0;r<a.length;r++){var u=a[r];(c=i[u.id]).refs--,n.push(c)}e?v(a=o(t,e)):a=[];for(r=0;r<n.length;r++){var c;if(0===(c=n[r]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete i[c.id]}}}}function v(t){for(var e=0;e<t.length;e++){var n=t[e],o=i[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(g(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var a=[];for(r=0;r<n.parts.length;r++)a.push(g(n.parts[r]));i[n.id]={id:n.id,refs:1,parts:a}}}}function h(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function g(t){var e,n,o=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(o){if(s)return f;o.parentNode.removeChild(o)}if(p){var r=c++;o=u||(u=h()),e=m.bind(null,o,r,!1),n=m.bind(null,o,r,!0)}else o=h(),e=x.bind(null,o),n=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else n()}}var y,A=(y=[],function(t,e){return y[t]=e,y.filter(Boolean).join("\n")});function m(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=A(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function x(t,e){var n=e.css,o=e.media,r=e.sourceMap;if(o&&t.setAttribute("media",o),l.ssrId&&t.setAttribute("data-vue-ssr-id",e.id),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},TWQb:function(t,e,n){var o=n("/GqU"),r=n("UMSQ"),i=n("I8vh"),a=function(t){return function(e,n,a){var u,c=o(e),s=r(c.length),f=i(a,s);if(t&&n!=n){for(;s>f;)if((u=c[f++])!=u)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},TqRt:function(t,e){t.exports=function(t){return t&&t.__esModule?t:{default:t}}},UMSQ:function(t,e,n){var o=n("ppGB"),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},UTVS:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},VpIT:function(t,e,n){var o=n("xDBR"),r=n("xs3f");(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.5.0",mode:o?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},Vu81:function(t,e,n){var o=n("0GbY"),r=n("JBy8"),i=n("dBg+"),a=n("glrk");t.exports=o("Reflect","ownKeys")||function(t){var e=r.f(a(t)),n=i.f;return n?e.concat(n(t)):e}},XGwC:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},afO8:function(t,e,n){var o,r,i,a=n("f5p1"),u=n("2oRo"),c=n("hh1v"),s=n("kRJp"),f=n("UTVS"),l=n("93I0"),p=n("0BK2"),d=u.WeakMap;if(a){var v=new d,h=v.get,g=v.has,y=v.set;o=function(t,e){return y.call(v,t,e),e},r=function(t){return h.call(v,t)||{}},i=function(t){return g.call(v,t)}}else{var A=l("state");p[A]=!0,o=function(t,e){return s(t,A,e),e},r=function(t){return f(t,A)?t[A]:{}},i=function(t){return f(t,A)}}t.exports={set:o,get:r,has:i,enforce:function(t){return i(t)?r(t):o(t,{})},getterFor:function(t){return function(e){var n;if(!c(e)||(n=r(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},busE:function(t,e,n){var o=n("2oRo"),r=n("kRJp"),i=n("UTVS"),a=n("zk60"),u=n("iSVu"),c=n("afO8"),s=c.get,f=c.enforce,l=String(String).split("String");(t.exports=function(t,e,n,u){var c=!!u&&!!u.unsafe,s=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||r(n,"name",e),f(n).source=l.join("string"==typeof e?e:"")),t!==o?(c?!p&&t[e]&&(s=!0):delete t[e],s?t[e]=n:r(t,e,n)):s?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||u(this)}))},"dBg+":function(t,e){e.f=Object.getOwnPropertySymbols},e6dQ:function(t,e,n){"use strict";n("toAj"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={name:"videoplayer",props:{fullScreen:{type:Boolean,default:!0},height:{type:String,default:"200px"},width:{type:String,default:"auto"},coverUrl:{type:String,default:"https://img.vipkidstatic.com/prt/image/tools/upload/gJXZOOBM6NlrD.png"},videoUrl:{required:!0,type:String,default:""},autoplay:{type:Boolean,default:!1},loop:{type:Boolean,default:!1},controls:{type:Boolean,default:!0},customControls:{type:String,default:"normal"}},data:function(){return{videoPlaying:!1,videoTime:0,videoTimeTotal:1e3}},computed:{barStyle:function(){return{width:(100*this.videoTime/this.videoTimeTotal).toFixed(2)+"%"}}},mounted:function(){var t=this,e=this.$refs.jsvideo,n=this.$refs["video-progres"],o=this.$refs["video-progres-bar"];if(e.addEventListener("canplay",(function(){t.$emit("canplay")})),e.addEventListener("loadstart",(function(){t.$emit("loadstart"),t.videoTime=0})),e.addEventListener("pause",(function(){t.$emit("pause")})),e.addEventListener("play",(function(){t.videoPlaying=!0,t.$emit("play")})),e.addEventListener("timeupdate",(function(){t.$emit("timeupdate",e.currentTime),t.videoTime=e.currentTime})),e.addEventListener("durationchange",(function(){t.$emit("durationchange",e.duration),t.videoTimeTotal=e.duration})),!this.controls){var r=0,i=o.offsetWidth/2;o.addEventListener("touchstart",(function(e){t.videoPlay();var i=e.targetTouches[0];r=i.clientX-o.offsetLeft-n.offsetLeft})),o.addEventListener("touchmove",(function(o){o.preventDefault();var a=o.targetTouches[0].clientX-n.offsetLeft-r,u=a+i;a<-i?(a=-i,u=0):a>n.offsetWidth-i&&(a=n.offsetWidth-i,u=n.offsetWidth);var c=u/n.offsetWidth*100;t.videoTime=c*t.videoTimeTotal/100,e.currentTime=t.videoTime}))}},methods:{videoPlay:function(){this.videoPlaying=!0;var t=this.$refs.jsvideo;t&&t.play()},videoPause:function(){if(!this.controls){this.videoPlaying=!1;var t=this.$refs.jsvideo;t&&t.pause()}},closeFn:function(){this.videoPlaying=!1,this.$emit("videoclose")}}};e.default=o},"eDl+":function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},f5p1:function(t,e,n){var o=n("2oRo"),r=n("iSVu"),i=o.WeakMap;t.exports="function"==typeof i&&/native code/.test(r(i))},"g6v/":function(t,e,n){var o=n("0Dky");t.exports=!o((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},glrk:function(t,e,n){var o=n("hh1v");t.exports=function(t){if(!o(t))throw TypeError(String(t)+" is not an object");return t}},hh1v:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},iSVu:function(t,e,n){var o=n("xs3f"),r=Function.toString;"function"!=typeof o.inspectSource&&(o.inspectSource=function(t){return r.call(t)}),t.exports=o.inspectSource},kOOl:function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+o).toString(36)}},kRJp:function(t,e,n){var o=n("g6v/"),r=n("m/L8"),i=n("XGwC");t.exports=o?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},lMq5:function(t,e,n){var o=n("0Dky"),r=/#|\.prototype\./,i=function(t,e){var n=u[a(t)];return n==s||n!=c&&("function"==typeof e?o(e):!!e)},a=i.normalize=function(t){return String(t).replace(r,".").toLowerCase()},u=i.data={},c=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},"m/L8":function(t,e,n){var o=n("g6v/"),r=n("DPsx"),i=n("glrk"),a=n("wE6v"),u=Object.defineProperty;e.f=o?u:function(t,e,n){if(i(t),e=a(e,!0),i(n),r)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},mMqg:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"vk-video-contianer"},[t.fullScreen?o("div",{staticClass:"vk-video-palyer-panel",on:{click:t.videoPause}},[o("img",{staticClass:"vk-close-btn",attrs:{src:n("uhwA")},on:{click:function(e){return e.stopPropagation(),t.closeFn(e)}}}),t._v(" "),o("div",{staticClass:"vk-video"},[o("video",{directives:[{name:"show",rawName:"v-show",value:t.videoPlaying,expression:"videoPlaying"}],ref:"jsvideo",attrs:{autoplay:t.autoplay,loop:t.loop,"custom-cache":"false",preload:"none",src:t.videoUrl,controls:t.controls,"webkit-playsinline":"true","x-webkit-airplay":"true"}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!t.videoPlaying,expression:"!videoPlaying"}],staticClass:"vk-cover"},[o("img",{staticClass:"vk-cover-img",attrs:{src:t.coverUrl}}),t._v(" "),o("img",{staticClass:"vk-icon-play",attrs:{src:n("HYnF")},on:{click:function(e){return e.stopPropagation(),t.videoPlay(e)}}})]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!t.videoPlaying,expression:"!videoPlaying"}],staticClass:"vk-cover-opacity"})]),t._v(" "),t.controls?t._e():o("div",{staticClass:"vk-video-controls"},[o("div",{ref:"video-progres",staticClass:"vk-video-progress"},[o("div",{staticClass:"vk-video-progress-bar",style:t.barStyle},[o("span",{ref:"video-progres-bar"})])])]),t._v(" "),t._t("default")],2):o("div",[o("video",{ref:"jsvideo",attrs:{height:t.height,poster:t.coverUrl,width:t.width,autoplay:t.autoplay,loop:t.loop,"custom-cache":"false",preload:"none",src:t.videoUrl,controls:t.controls,"webkit-playsinline":"true","x-webkit-airplay":"true"}})])])},r=[]},ppGB:function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},sMBO:function(t,e,n){var o=n("g6v/"),r=n("m/L8").f,i=Function.prototype,a=i.toString,u=/^\s*function ([^ (]*)/;o&&!("name"in i)&&r(i,"name",{configurable:!0,get:function(){try{return a.call(this).match(u)[1]}catch(t){return""}}})},toAj:function(t,e,n){"use strict";var o=n("I+eb"),r=n("ppGB"),i=n("QIpd"),a=n("EUja"),u=n("0Dky"),c=1..toFixed,s=Math.floor,f=function(t,e,n){return 0===e?n:e%2==1?f(t,e-1,n*t):f(t*t,e/2,n)};o({target:"Number",proto:!0,forced:c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!u((function(){c.call({})}))},{toFixed:function(t){var e,n,o,u,c=i(this),l=r(t),p=[0,0,0,0,0,0],d="",v="0",h=function(t,e){for(var n=-1,o=e;++n<6;)o+=t*p[n],p[n]=o%1e7,o=s(o/1e7)},g=function(t){for(var e=6,n=0;--e>=0;)n+=p[e],p[e]=s(n/t),n=n%t*1e7},y=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==p[t]){var n=String(p[t]);e=""===e?n:e+a.call("0",7-n.length)+n}return e};if(l<0||l>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(d="-",c=-c),c>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(c*f(2,69,1))-69)<0?c*f(2,-e,1):c/f(2,e,1),n*=4503599627370496,(e=52-e)>0){for(h(0,n),o=l;o>=7;)h(1e7,0),o-=7;for(h(f(10,o,1),0),o=e-1;o>=23;)g(1<<23),o-=23;g(1<<o),h(1,1),g(2),v=y()}else h(0,n),h(1<<-e,0),v=y()+a.call("0",l);return v=l>0?d+((u=v.length)<=l?"0."+a.call("0",l-u)+v:v.slice(0,u-l)+"."+v.slice(u-l)):d+v}})},tyJq:function(t,e,n){"use strict";var o=n("C1tf");n.n(o).a},uhwA:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAARVBMVEUAAAAAAADr6+snJycAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADl5eUAAAAAAAAAAAAAAAAAAAAAAADV1dVlZWXW1tb///96p6HuAAAAFnRSTlNNANdWCEg/NB0aFkTMQjs1LSkOuGq5Cx4IqAAAAXFJREFUWMOt2EmWgzAMBNBKIg/MU5r7H7XdLJoQhgKk2sbvP+IEWxIe++lj1/jCAa7wTRf7g6V7jMTg8BUXolxi8oCdhPw0k3kcxGenmLwCSZVTRgLAE+SYyRxOxWVHTIvTaXcZqXEhtWwz4nEpXrYYKXAxxeyAPAt5nhVT40bqb6bFrbRLJsPNZJ+MuLuMkw8m4HbCzORQJP9nKg1TTczG/r7L4YWdvIbyvd7lifFYphzH52tHeY5jiWX8xKx35mecnbUyDqvdmZiwXrxw6AfhjxG2nPOSmAjiUAUxMQHEoQpCYhyIQxW4B3qAOFRBQiKYw5WEdGAOVxLSgDlcSYgHdaiSkALUoUpCHKhDlQlhDlcAI8boSxltsdEPbvT3M3oZjF5No4PC5tgyOkSNjnSjC8bmujO8fPWlgGFhoi+TrIs2fQmpL2jty2t9sa9vPewbIX1bpm8S9S2rvoG2b+f1wwX9qEM/eLEfA9kPpfQjsl8phR0p8UV0+gAAAABJRU5ErkJggg=="},wE6v:function(t,e,n){var o=n("hh1v");t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},"x/1k":function(t,e,n){"use strict";n.r(e);var o=n("e6dQ"),r=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e.default=r.a},xDBR:function(t,e){t.exports=!1},xrYK:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},xs3f:function(t,e,n){var o=n("2oRo"),r=n("zk60"),i=o["__core-js_shared__"]||r("__core-js_shared__",{});t.exports=i},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},yoRg:function(t,e,n){var o=n("UTVS"),r=n("/GqU"),i=n("TWQb").indexOf,a=n("0BK2");t.exports=function(t,e){var n,u=r(t),c=0,s=[];for(n in u)!o(a,n)&&o(u,n)&&s.push(n);for(;e.length>c;)o(u,n=e[c++])&&(~i(s,n)||s.push(n));return s}},zBJ4:function(t,e,n){var o=n("2oRo"),r=n("hh1v"),i=o.document,a=r(i)&&r(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},zk60:function(t,e,n){var o=n("2oRo"),r=n("kRJp");t.exports=function(t,e){try{r(o,t,e)}catch(n){o[t]=e}return e}}})}));