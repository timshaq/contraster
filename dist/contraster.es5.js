!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Contraster",[],e):"object"==typeof exports?exports.Contraster=e():t.Contraster=e()}(self,(function(){return function(){var t={9662:function(t,e,n){var r=n(7854),o=n(614),i=n(6330),s=r.TypeError;t.exports=function(t){if(o(t))return t;throw s(i(t)+" is not a function")}},9483:function(t,e,n){var r=n(7854),o=n(4411),i=n(6330),s=r.TypeError;t.exports=function(t){if(o(t))return t;throw s(i(t)+" is not a constructor")}},6077:function(t,e,n){var r=n(7854),o=n(614),i=r.String,s=r.TypeError;t.exports=function(t){if("object"==typeof t||o(t))return t;throw s("Can't set "+i(t)+" as a prototype")}},5787:function(t,e,n){var r=n(7854),o=n(7976),i=r.TypeError;t.exports=function(t,e){if(o(e,t))return t;throw i("Incorrect invocation")}},9670:function(t,e,n){var r=n(7854),o=n(111),i=r.String,s=r.TypeError;t.exports=function(t){if(o(t))return t;throw s(i(t)+" is not an object")}},1318:function(t,e,n){var r=n(5656),o=n(1400),i=n(6244),s=function(t){return function(e,n,s){var c,a=r(e),u=i(a),f=o(s,u);if(t&&n!=n){for(;u>f;)if((c=a[f++])!=c)return!0}else for(;u>f;f++)if((t||f in a)&&a[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},206:function(t,e,n){var r=n(1702);t.exports=r([].slice)},7072:function(t,e,n){var r=n(5112)("iterator"),o=!1;try{var i=0,s={next:function(){return{done:!!i++}},return:function(){o=!0}};s[r]=function(){return this},Array.from(s,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(t){}return n}},4326:function(t,e,n){var r=n(1702),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:function(t,e,n){var r=n(7854),o=n(1694),i=n(614),s=n(4326),c=n(5112)("toStringTag"),a=r.Object,u="Arguments"==s(function(){return arguments}());t.exports=o?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=a(t),c))?n:u?s(e):"Object"==(r=s(e))&&i(e.callee)?"Arguments":r}},9920:function(t,e,n){var r=n(2597),o=n(3887),i=n(1236),s=n(3070);t.exports=function(t,e){for(var n=o(e),c=s.f,a=i.f,u=0;u<n.length;u++){var f=n[u];r(t,f)||c(t,f,a(e,f))}}},4964:function(t,e,n){var r=n(5112)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,"/./"[t](e)}catch(t){}}return!1}},8880:function(t,e,n){var r=n(9781),o=n(3070),i=n(9114);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,n){var r=n(7854),o=n(111),i=r.document,s=o(i)&&o(i.createElement);t.exports=function(t){return s?i.createElement(t):{}}},7871:function(t){t.exports="object"==typeof window},1528:function(t,e,n){var r=n(8113),o=n(7854);t.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==o.Pebble},6833:function(t,e,n){var r=n(8113);t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},5268:function(t,e,n){var r=n(4326),o=n(7854);t.exports="process"==r(o.process)},1036:function(t,e,n){var r=n(8113);t.exports=/web0s(?!.*chrome)/i.test(r)},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,o,i=n(7854),s=n(8113),c=i.process,a=i.Deno,u=c&&c.versions||a&&a.version,f=u&&u.v8;f&&(o=(r=f.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&s&&(!(r=s.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var r=n(7854),o=n(1236).f,i=n(8880),s=n(1320),c=n(3505),a=n(9920),u=n(4705);t.exports=function(t,e){var n,f,p,h,l,v=t.target,d=t.global,y=t.stat;if(n=d?r:y?r[v]||c(v,{}):(r[v]||{}).prototype)for(f in e){if(h=e[f],p=t.noTargetGet?(l=o(n,f))&&l.value:n[f],!u(d?f:v+(y?".":"#")+f,t.forced)&&void 0!==p){if(typeof h==typeof p)continue;a(h,p)}(t.sham||p&&p.sham)&&i(h,"sham",!0),s(n,f,h,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},2104:function(t){var e=Function.prototype,n=e.apply,r=e.bind,o=e.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(n):function(){return o.apply(n,arguments)})},9974:function(t,e,n){var r=n(1702),o=n(9662),i=r(r.bind);t.exports=function(t,e){return o(t),void 0===e?t:i?i(t,e):function(){return t.apply(e,arguments)}}},6916:function(t){var e=Function.prototype.call;t.exports=e.bind?e.bind(e):function(){return e.apply(e,arguments)}},6530:function(t,e,n){var r=n(9781),o=n(2597),i=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,c=o(i,"name"),a=c&&"something"===function(){}.name,u=c&&(!r||r&&s(i,"name").configurable);t.exports={EXISTS:c,PROPER:a,CONFIGURABLE:u}},1702:function(t){var e=Function.prototype,n=e.bind,r=e.call,o=n&&n.bind(r);t.exports=n?function(t){return t&&o(r,t)}:function(t){return t&&function(){return r.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),o=n(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t]):r[t]&&r[t][e]}},1246:function(t,e,n){var r=n(648),o=n(8173),i=n(7497),s=n(5112)("iterator");t.exports=function(t){if(null!=t)return o(t,s)||o(t,"@@iterator")||i[r(t)]}},8554:function(t,e,n){var r=n(7854),o=n(6916),i=n(9662),s=n(9670),c=n(6330),a=n(1246),u=r.TypeError;t.exports=function(t,e){var n=arguments.length<2?a(t):e;if(i(n))return s(o(n,t));throw u(c(t)+" is not iterable")}},8173:function(t,e,n){var r=n(9662);t.exports=function(t,e){var n=t[e];return null==n?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),o=n(7908),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:function(t){t.exports={}},842:function(t,e,n){var r=n(7854);t.exports=function(t,e){var n=r.console;n&&n.error&&(1==arguments.length?n.error(t):n.error(t,e))}},490:function(t,e,n){var r=n(5005);t.exports=r("document","documentElement")},4664:function(t,e,n){var r=n(9781),o=n(7293),i=n(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(7854),o=n(1702),i=n(7293),s=n(4326),c=r.Object,a=o("".split);t.exports=i((function(){return!c("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?a(t,""):c(t)}:c},2788:function(t,e,n){var r=n(1702),o=n(614),i=n(5465),s=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return s(t)}),t.exports=i.inspectSource},9909:function(t,e,n){var r,o,i,s=n(8536),c=n(7854),a=n(1702),u=n(111),f=n(8880),p=n(2597),h=n(5465),l=n(6200),v=n(3501),d="Object already initialized",y=c.TypeError,m=c.WeakMap;if(s||h.state){var x=h.state||(h.state=new m),b=a(x.get),g=a(x.has),w=a(x.set);r=function(t,e){if(g(x,t))throw new y(d);return e.facade=t,w(x,t,e),e},o=function(t){return b(x,t)||{}},i=function(t){return g(x,t)}}else{var j=l("state");v[j]=!0,r=function(t,e){if(p(t,j))throw new y(d);return e.facade=t,f(t,j,e),e},o=function(t){return p(t,j)?t[j]:{}},i=function(t){return p(t,j)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw y("Incompatible receiver, "+t+" required");return n}}}},7659:function(t,e,n){var r=n(5112),o=n(7497),i=r("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||s[i]===t)}},614:function(t){t.exports=function(t){return"function"==typeof t}},4411:function(t,e,n){var r=n(1702),o=n(7293),i=n(614),s=n(648),c=n(5005),a=n(2788),u=function(){},f=[],p=c("Reflect","construct"),h=/^\s*(?:class|function)\b/,l=r(h.exec),v=!h.exec(u),d=function(t){if(!i(t))return!1;try{return p(u,f,t),!0}catch(t){return!1}};t.exports=!p||o((function(){var t;return d(d.call)||!d(Object)||!d((function(){t=!0}))||t}))?function(t){if(!i(t))return!1;switch(s(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return v||!!l(h,a(t))}:d},4705:function(t,e,n){var r=n(7293),o=n(614),i=/#|\.prototype\./,s=function(t,e){var n=a[c(t)];return n==f||n!=u&&(o(e)?r(e):!!e)},c=s.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=s.data={},u=s.NATIVE="N",f=s.POLYFILL="P";t.exports=s},111:function(t,e,n){var r=n(614);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},7850:function(t,e,n){var r=n(111),o=n(4326),i=n(5112)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},2190:function(t,e,n){var r=n(7854),o=n(5005),i=n(614),s=n(7976),c=n(3307),a=r.Object;t.exports=c?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return i(e)&&s(e.prototype,a(t))}},408:function(t,e,n){var r=n(7854),o=n(9974),i=n(6916),s=n(9670),c=n(6330),a=n(7659),u=n(6244),f=n(7976),p=n(8554),h=n(1246),l=n(9212),v=r.TypeError,d=function(t,e){this.stopped=t,this.result=e},y=d.prototype;t.exports=function(t,e,n){var r,m,x,b,g,w,j,E=n&&n.that,T=!(!n||!n.AS_ENTRIES),O=!(!n||!n.IS_ITERATOR),S=!(!n||!n.INTERRUPTED),P=o(e,E),L=function(t){return r&&l(r,"normal",t),new d(!0,t)},M=function(t){return T?(s(t),S?P(t[0],t[1],L):P(t[0],t[1])):S?P(t,L):P(t)};if(O)r=t;else{if(!(m=h(t)))throw v(c(t)+" is not iterable");if(a(m)){for(x=0,b=u(t);b>x;x++)if((g=M(t[x]))&&f(y,g))return g;return new d(!1)}r=p(t,m)}for(w=r.next;!(j=i(w,r)).done;){try{g=M(j.value)}catch(t){l(r,"throw",t)}if("object"==typeof g&&g&&f(y,g))return g}return new d(!1)}},9212:function(t,e,n){var r=n(6916),o=n(9670),i=n(8173);t.exports=function(t,e,n){var s,c;o(t);try{if(!(s=i(t,"return"))){if("throw"===e)throw n;return n}s=r(s,t)}catch(t){c=!0,s=t}if("throw"===e)throw n;if(c)throw s;return o(s),n}},7497:function(t){t.exports={}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},5948:function(t,e,n){var r,o,i,s,c,a,u,f,p=n(7854),h=n(9974),l=n(1236).f,v=n(261).set,d=n(6833),y=n(1528),m=n(1036),x=n(5268),b=p.MutationObserver||p.WebKitMutationObserver,g=p.document,w=p.process,j=p.Promise,E=l(p,"queueMicrotask"),T=E&&E.value;T||(r=function(){var t,e;for(x&&(t=w.domain)&&t.exit();o;){e=o.fn,o=o.next;try{e()}catch(t){throw o?s():i=void 0,t}}i=void 0,t&&t.enter()},d||x||m||!b||!g?!y&&j&&j.resolve?((u=j.resolve(void 0)).constructor=j,f=h(u.then,u),s=function(){f(r)}):x?s=function(){w.nextTick(r)}:(v=h(v,p),s=function(){v(r)}):(c=!0,a=g.createTextNode(""),new b(r).observe(a,{characterData:!0}),s=function(){a.data=c=!c})),t.exports=T||function(t){var e={fn:t,next:void 0};i&&(i.next=e),o||(o=e,s()),i=e}},3366:function(t,e,n){var r=n(7854);t.exports=r.Promise},133:function(t,e,n){var r=n(7392),o=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,e,n){var r=n(7854),o=n(614),i=n(2788),s=r.WeakMap;t.exports=o(s)&&/native code/.test(i(s))},8523:function(t,e,n){"use strict";var r=n(9662),o=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=r(e),this.reject=r(n)};t.exports.f=function(t){return new o(t)}},3929:function(t,e,n){var r=n(7854),o=n(7850),i=r.TypeError;t.exports=function(t){if(o(t))throw i("The method doesn't accept regular expressions");return t}},1574:function(t,e,n){"use strict";var r=n(9781),o=n(1702),i=n(6916),s=n(7293),c=n(1956),a=n(5181),u=n(5296),f=n(7908),p=n(8361),h=Object.assign,l=Object.defineProperty,v=o([].concat);t.exports=!h||s((function(){if(r&&1!==h({b:1},h(l({},"a",{enumerable:!0,get:function(){l(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach((function(t){e[t]=t})),7!=h({},t)[n]||c(h({},e)).join("")!=o}))?function(t,e){for(var n=f(t),o=arguments.length,s=1,h=a.f,l=u.f;o>s;)for(var d,y=p(arguments[s++]),m=h?v(c(y),h(y)):c(y),x=m.length,b=0;x>b;)d=m[b++],r&&!i(l,y,d)||(n[d]=y[d]);return n}:h},3070:function(t,e,n){var r=n(7854),o=n(9781),i=n(4664),s=n(9670),c=n(4948),a=r.TypeError,u=Object.defineProperty;e.f=o?u:function(t,e,n){if(s(t),e=c(e),s(n),i)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw a("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),o=n(6916),i=n(5296),s=n(9114),c=n(5656),a=n(4948),u=n(2597),f=n(4664),p=Object.getOwnPropertyDescriptor;e.f=r?p:function(t,e){if(t=c(t),e=a(e),f)try{return p(t,e)}catch(t){}if(u(t,e))return s(!o(i.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),o=n(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),o=n(2597),i=n(5656),s=n(1318).indexOf,c=n(3501),a=r([].push);t.exports=function(t,e){var n,r=i(t),u=0,f=[];for(n in r)!o(c,n)&&o(r,n)&&a(f,n);for(;e.length>u;)o(r,n=e[u++])&&(~s(f,n)||a(f,n));return f}},1956:function(t,e,n){var r=n(6324),o=n(748);t.exports=Object.keys||function(t){return r(t,o)}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var r=n(1702),o=n(9670),i=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(n,[]),e=n instanceof Array}catch(t){}return function(n,r){return o(n),i(r),e?t(n,r):n.__proto__=r,n}}():void 0)},2140:function(t,e,n){var r=n(7854),o=n(6916),i=n(614),s=n(111),c=r.TypeError;t.exports=function(t,e){var n,r;if("string"===e&&i(n=t.toString)&&!s(r=o(n,t)))return r;if(i(n=t.valueOf)&&!s(r=o(n,t)))return r;if("string"!==e&&i(n=t.toString)&&!s(r=o(n,t)))return r;throw c("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),o=n(1702),i=n(8006),s=n(5181),c=n(9670),a=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(c(t)),n=s.f;return n?a(e,n(t)):e}},2534:function(t){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},9478:function(t,e,n){var r=n(9670),o=n(111),i=n(8523);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},2248:function(t,e,n){var r=n(1320);t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},1320:function(t,e,n){var r=n(7854),o=n(614),i=n(2597),s=n(8880),c=n(3505),a=n(2788),u=n(9909),f=n(6530).CONFIGURABLE,p=u.get,h=u.enforce,l=String(String).split("String");(t.exports=function(t,e,n,a){var u,p=!!a&&!!a.unsafe,v=!!a&&!!a.enumerable,d=!!a&&!!a.noTargetGet,y=a&&void 0!==a.name?a.name:e;o(n)&&("Symbol("===String(y).slice(0,7)&&(y="["+String(y).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(n,"name")||f&&n.name!==y)&&s(n,"name",y),(u=h(n)).source||(u.source=l.join("string"==typeof y?y:""))),t!==r?(p?!d&&t[e]&&(v=!0):delete t[e],v?t[e]=n:s(t,e,n)):v?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return o(this)&&p(this).source||a(this)}))},4488:function(t,e,n){var r=n(7854).TypeError;t.exports=function(t){if(null==t)throw r("Can't call method on "+t);return t}},3505:function(t,e,n){var r=n(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},6340:function(t,e,n){"use strict";var r=n(5005),o=n(3070),i=n(5112),s=n(9781),c=i("species");t.exports=function(t){var e=r(t),n=o.f;s&&e&&!e[c]&&n(e,c,{configurable:!0,get:function(){return this}})}},8003:function(t,e,n){var r=n(3070).f,o=n(2597),i=n(5112)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},6200:function(t,e,n){var r=n(2309),o=n(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,e,n){var r=n(7854),o=n(3505),i="__core-js_shared__",s=r[i]||o(i,{});t.exports=s},2309:function(t,e,n){var r=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.19.2",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},6707:function(t,e,n){var r=n(9670),o=n(9483),i=n(5112)("species");t.exports=function(t,e){var n,s=r(t).constructor;return void 0===s||null==(n=r(s)[i])?e:o(n)}},261:function(t,e,n){var r,o,i,s,c=n(7854),a=n(2104),u=n(9974),f=n(614),p=n(2597),h=n(7293),l=n(490),v=n(206),d=n(317),y=n(6833),m=n(5268),x=c.setImmediate,b=c.clearImmediate,g=c.process,w=c.Dispatch,j=c.Function,E=c.MessageChannel,T=c.String,O=0,S={};try{r=c.location}catch(t){}var P=function(t){if(p(S,t)){var e=S[t];delete S[t],e()}},L=function(t){return function(){P(t)}},M=function(t){P(t.data)},W=function(t){c.postMessage(T(t),r.protocol+"//"+r.host)};x&&b||(x=function(t){var e=v(arguments,1);return S[++O]=function(){a(f(t)?t:j(t),void 0,e)},o(O),O},b=function(t){delete S[t]},m?o=function(t){g.nextTick(L(t))}:w&&w.now?o=function(t){w.now(L(t))}:E&&!y?(s=(i=new E).port2,i.port1.onmessage=M,o=u(s.postMessage,s)):c.addEventListener&&f(c.postMessage)&&!c.importScripts&&r&&"file:"!==r.protocol&&!h(W)?(o=W,c.addEventListener("message",M,!1)):o="onreadystatechange"in d("script")?function(t){l.appendChild(d("script")).onreadystatechange=function(){l.removeChild(this),P(t)}}:function(t){setTimeout(L(t),0)}),t.exports={set:x,clear:b}},1400:function(t,e,n){var r=n(9303),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},5656:function(t,e,n){var r=n(8361),o=n(4488);t.exports=function(t){return r(o(t))}},9303:function(t){var e=Math.ceil,n=Math.floor;t.exports=function(t){var r=+t;return r!=r||0===r?0:(r>0?n:e)(r)}},7466:function(t,e,n){var r=n(9303),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(7854),o=n(4488),i=r.Object;t.exports=function(t){return i(o(t))}},7593:function(t,e,n){var r=n(7854),o=n(6916),i=n(111),s=n(2190),c=n(8173),a=n(2140),u=n(5112),f=r.TypeError,p=u("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var n,r=c(t,p);if(r){if(void 0===e&&(e="default"),n=o(r,t,e),!i(n)||s(n))return n;throw f("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,n){var r=n(7593),o=n(2190);t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},1694:function(t,e,n){var r={};r[n(5112)("toStringTag")]="z",t.exports="[object z]"===String(r)},1340:function(t,e,n){var r=n(7854),o=n(648),i=r.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},6330:function(t,e,n){var r=n(7854).String;t.exports=function(t){try{return r(t)}catch(t){return"Object"}}},9711:function(t,e,n){var r=n(1702),o=0,i=Math.random(),s=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+s(++o+i,36)}},3307:function(t,e,n){var r=n(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,e,n){var r=n(7854),o=n(2309),i=n(2597),s=n(9711),c=n(133),a=n(3307),u=o("wks"),f=r.Symbol,p=f&&f.for,h=a?f:f&&f.withoutSetter||s;t.exports=function(t){if(!i(u,t)||!c&&"string"!=typeof u[t]){var e="Symbol."+t;c&&i(f,t)?u[t]=f[t]:u[t]=a&&p?p(e):h(e)}return u[t]}},9601:function(t,e,n){var r=n(2109),o=n(1574);r({target:"Object",stat:!0,forced:Object.assign!==o},{assign:o})},8674:function(t,e,n){"use strict";var r,o,i,s,c=n(2109),a=n(1913),u=n(7854),f=n(5005),p=n(6916),h=n(3366),l=n(1320),v=n(2248),d=n(7674),y=n(8003),m=n(6340),x=n(9662),b=n(614),g=n(111),w=n(5787),j=n(2788),E=n(408),T=n(7072),O=n(6707),S=n(261).set,P=n(5948),L=n(9478),M=n(842),W=n(8523),A=n(2534),C=n(9909),I=n(4705),_=n(5112),k=n(7871),N=n(5268),F=n(7392),H=_("species"),R="Promise",z=C.get,D=C.set,G=C.getterFor(R),q=h&&h.prototype,U=h,X=q,V=u.TypeError,Y=u.document,B=u.process,K=W.f,$=K,J=!!(Y&&Y.createEvent&&u.dispatchEvent),Q=b(u.PromiseRejectionEvent),Z="unhandledrejection",tt=!1,et=I(R,(function(){var t=j(U),e=t!==String(U);if(!e&&66===F)return!0;if(a&&!X.finally)return!0;if(F>=51&&/native code/.test(t))return!1;var n=new U((function(t){t(1)})),r=function(t){t((function(){}),(function(){}))};return(n.constructor={})[H]=r,!(tt=n.then((function(){}))instanceof r)||!e&&k&&!Q})),nt=et||!T((function(t){U.all(t).catch((function(){}))})),rt=function(t){var e;return!(!g(t)||!b(e=t.then))&&e},ot=function(t,e){if(!t.notified){t.notified=!0;var n=t.reactions;P((function(){for(var r=t.value,o=1==t.state,i=0;n.length>i;){var s,c,a,u=n[i++],f=o?u.ok:u.fail,h=u.resolve,l=u.reject,v=u.domain;try{f?(o||(2===t.rejection&&at(t),t.rejection=1),!0===f?s=r:(v&&v.enter(),s=f(r),v&&(v.exit(),a=!0)),s===u.promise?l(V("Promise-chain cycle")):(c=rt(s))?p(c,s,h,l):h(s)):l(r)}catch(t){v&&!a&&v.exit(),l(t)}}t.reactions=[],t.notified=!1,e&&!t.rejection&&st(t)}))}},it=function(t,e,n){var r,o;J?((r=Y.createEvent("Event")).promise=e,r.reason=n,r.initEvent(t,!1,!0),u.dispatchEvent(r)):r={promise:e,reason:n},!Q&&(o=u["on"+t])?o(r):t===Z&&M("Unhandled promise rejection",n)},st=function(t){p(S,u,(function(){var e,n=t.facade,r=t.value;if(ct(t)&&(e=A((function(){N?B.emit("unhandledRejection",r,n):it(Z,n,r)})),t.rejection=N||ct(t)?2:1,e.error))throw e.value}))},ct=function(t){return 1!==t.rejection&&!t.parent},at=function(t){p(S,u,(function(){var e=t.facade;N?B.emit("rejectionHandled",e):it("rejectionhandled",e,t.value)}))},ut=function(t,e,n){return function(r){t(e,r,n)}},ft=function(t,e,n){t.done||(t.done=!0,n&&(t=n),t.value=e,t.state=2,ot(t,!0))},pt=function(t,e,n){if(!t.done){t.done=!0,n&&(t=n);try{if(t.facade===e)throw V("Promise can't be resolved itself");var r=rt(e);r?P((function(){var n={done:!1};try{p(r,e,ut(pt,n,t),ut(ft,n,t))}catch(e){ft(n,e,t)}})):(t.value=e,t.state=1,ot(t,!1))}catch(e){ft({done:!1},e,t)}}};if(et&&(X=(U=function(t){w(this,X),x(t),p(r,this);var e=z(this);try{t(ut(pt,e),ut(ft,e))}catch(t){ft(e,t)}}).prototype,(r=function(t){D(this,{type:R,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=v(X,{then:function(t,e){var n=G(this),r=n.reactions,o=K(O(this,U));return o.ok=!b(t)||t,o.fail=b(e)&&e,o.domain=N?B.domain:void 0,n.parent=!0,r[r.length]=o,0!=n.state&&ot(n,!1),o.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,e=z(t);this.promise=t,this.resolve=ut(pt,e),this.reject=ut(ft,e)},W.f=K=function(t){return t===U||t===i?new o(t):$(t)},!a&&b(h)&&q!==Object.prototype)){s=q.then,tt||(l(q,"then",(function(t,e){var n=this;return new U((function(t,e){p(s,n,t,e)})).then(t,e)}),{unsafe:!0}),l(q,"catch",X.catch,{unsafe:!0}));try{delete q.constructor}catch(t){}d&&d(q,X)}c({global:!0,wrap:!0,forced:et},{Promise:U}),y(U,R,!1,!0),m(R),i=f(R),c({target:R,stat:!0,forced:et},{reject:function(t){var e=K(this);return p(e.reject,void 0,t),e.promise}}),c({target:R,stat:!0,forced:a||et},{resolve:function(t){return L(a&&this===i?U:this,t)}}),c({target:R,stat:!0,forced:nt},{all:function(t){var e=this,n=K(e),r=n.resolve,o=n.reject,i=A((function(){var n=x(e.resolve),i=[],s=0,c=1;E(t,(function(t){var a=s++,u=!1;c++,p(n,e,t).then((function(t){u||(u=!0,i[a]=t,--c||r(i))}),o)})),--c||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=K(e),r=n.reject,o=A((function(){var o=x(e.resolve);E(t,(function(t){p(o,e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}})},2023:function(t,e,n){"use strict";var r=n(2109),o=n(1702),i=n(3929),s=n(4488),c=n(1340),a=n(4964),u=o("".indexOf);r({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~u(c(s(this)),c(i(t)),arguments.length>1?arguments[1]:void 0)}})}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};var r={};return function(){"use strict";n.d(r,{default:function(){return v}}),n(8674);var t="contraster-active-separator";function e(){switch(this.options.direction){case"horizontal":return"contraster horizontal";case"diagonal":return"contraster diagonal";case"square":return"contraster square";default:return"contraster"}}function o(t,n){this.container=function(t){if(t){if(t.nodeType)return t;if("string"==typeof t)return document.querySelector(arguments[0])}return null}(this.options.container),this.container||n(),this.container.className=e.call(this),this.options.className&&(this.container.className+=" ".concat(this.options.className)),this.beforeWrapper=document.createElement("DIV"),this.beforeWrapper.className="contraster-wrapper-before",this.beforeElement=document.createElement("IMG"),this.beforeElement.onload=o,this.beforeElement.onerror=n,this.beforeElement.src=this.container.getAttribute("data-before"),this.container.removeAttribute("data-before"),this.beforeWrapper.append(this.beforeElement),this.afterWrapper=document.createElement("DIV"),this.afterWrapper.className="contraster-wrapper-after",this.afterElement=document.createElement("IMG"),this.afterElement.onload=o,this.afterElement.onerror=n,this.afterElement.src=this.container.getAttribute("data-after"),this.container.removeAttribute("data-after"),this.afterWrapper.append(this.afterElement),this.separator=document.createElement("DIV"),this.separator.className="contraster-separator",this.options.separator&&this.options.separator.class&&(this.separator.className+=" ".concat(this.options.separator.class)),this.options.separator&&this.options.separator.innerHTML&&(this.separator.innerHTML+=" ".concat(this.options.separator.innerHTML)),this.container.append(this.beforeWrapper,this.afterWrapper,this.separator),this.options.separator.innerHTML&&(this.separatorChildren=Array.prototype.slice.call(this.separator.children));const r=[];function o(){if(r.push(!0),2===r.length)return t()}}var i=function(){return new Promise(o.bind(this))},s=function(){switch(this.options.direction){case"horizontal":const t=this.container.offsetHeight*this.options.progress/100;this.beforeWrapper.style.cssText="height: ".concat(t,"px;"),this.beforeElement.style.height=this.container.offsetHeight+"px",this.separator.style.cssText="top: ".concat(t,"px;");break;case"diagonal":const e=this.container.offsetWidth,n=this.container.offsetHeight,r=Math.sqrt(e*e+n*n),o=2*Math.atan(e/n)*180/Math.PI,i=180*Math.atan(n/e)/Math.PI,s=-(90-180*Math.atan(n/e)/Math.PI),c=-1*s,a=o+i;this.beforeWrapper.style.cssText="\n                width: ".concat(2*e*this.options.progress/100,"px;\n                height: ").concat(n,"px;\n                overflow: hidden;\n                position: absolute;\n                top: 0;\n                left: 0;\n                transform-origin: 100% 0;\n                transform: skewX(").concat(s,"deg);\n            "),this.beforeElement.style.cssText="\n                width: ".concat(e,"px;\n                transform-origin: inherit;\n                transform: skewX(").concat(c,"deg);\n            "),this.separator.style.cssText="\n                width: ".concat(r,"px;\n                top: ").concat(this.container.offsetHeight*this.options.progress/100,"px;\n                left: ").concat(this.container.offsetWidth*this.options.progress/100,"px;\n                transform: translate(-50%,-50%) rotate(").concat(a,"deg)\n            ");break;default:const u=this.container.offsetWidth*this.options.progress/100;this.beforeWrapper.style.cssText="width: ".concat(u,"px;"),this.separator.style.cssText="left: ".concat(u,"px;")}this.emit("setSizes")},c=function(t,e,n){let r,o,i=t.container.offsetTop;if(n.touches&&(e.setContainerMove(!0),r=n.touches[0].pageY,o=n.touches[0].pageX),n.pageY&&(r=n.pageY,o=n.pageX),r-=i,t.separator.classList.add(t.options.separator.activeClass),"vertical"===t.options.direction&&(o>0?o<t.container.offsetWidth?(t.separator.style.cssText="left: ".concat(o,"px;"),t.beforeWrapper.style.cssText="width: ".concat(o,"px;")):(t.separator.style.cssText="left: ".concat(t.container.offsetWidth,"px;"),t.beforeWrapper.style.cssText="width: ".concat(t.container.offsetWidth,"px;")):(t.beforeWrapper.style.cssText="width: 0px;",t.separator.style.cssText="left: 0px;")),"horizontal"===t.options.direction&&(r>0?r<t.container.offsetHeight?(t.beforeWrapper.style.cssText="height: ".concat(r,"px;"),t.separator.style.cssText="top: ".concat(r,"px;")):(t.beforeWrapper.style.cssText="height: ".concat(t.container.offsetHeight,"px;"),t.separator.style.cssText="top: ".concat(t.container.offsetHeight,"px;")):(t.beforeWrapper.style.cssText="height: 0px;",t.separator.style.cssText="top: 0px;")),"diagonal"===t.options.direction){let e=t.container.offsetHeight,n=t.container.offsetWidth,i=e*o/n;o=(o+r*n/e)/2,r=(r+i)/2,o>0?o<t.container.offsetWidth?(t.separator.style.left="".concat(o,"px"),t.beforeWrapper.style.width="".concat(2*o,"px")):(t.separator.style.left="".concat(t.container.offsetWidth,"px"),t.beforeWrapper.style.width="".concat(2*t.container.offsetWidth,"px")):(t.beforeWrapper.style.width="0px",t.separator.style.left="0px"),r>0?r<t.container.offsetHeight?t.separator.style.top="".concat(r,"px"):t.separator.style.top="".concat(t.container.offsetHeight,"px"):t.separator.style.top="0px"}};n(2023);var a=function(t,e,n,r){if(0===r.button||r.touches){const o=t.separatorChildren&&t.separatorChildren.includes(r.target);t.options.freePosition?(r.target===t.container||o||r.target===t.separator)&&(n(r),e.on("mousemove",n)):(r.target===t.separator||o)&&e.on("mousemove",n)}},u=function(t,e,n){e.off("mousemove",n),t.separator.classList.remove(t.options.separator.activeClass)};function f(t){return t&&"object"==typeof t&&!Array.isArray(t)&&!t.nodeType}n(9601);var p=function t(e,n){return f(e)&&f(n)?(Object.keys(n).forEach((r=>{const o=e[r],i=n[r];Array.isArray(o)&&Array.isArray(i)?e[r]=o.concat(i):f(o)&&f(i)?e[r]=t(Object.assign({},o),i):e[r]=i})),e):n},h=new function(){var t=this;function e(e){t.isContainerMove=!1,t.emit("mouseup",e)}function n(e){t.emit("mousedown",e)}function r(e){return t.emit("mousemove",e),!!t.isContainerMove&&e.preventDefault()}t.isContainerMove=!1,t.setContainerMove=function(e){t.isContainerMove=e},t.eventsListeners={},t.on=function(e,n){t.eventsListeners[e]||(t.eventsListeners[e]=[]),t.eventsListeners[e].push(n)},t.off=function(e,n){t.eventsListeners[e]&&(t.eventsListeners[e]=t.eventsListeners[e].filter((function(t){return t!==n})))},t.emit=function(e,n){t.eventsListeners[e]&&t.eventsListeners[e].forEach((function(t){t(n)}))},document.addEventListener("mousedown",n),document.addEventListener("mouseup",e),document.addEventListener("mousemove",r),document.addEventListener("touchstart",n),document.addEventListener("touchend",e),document.addEventListener("touchcancel",e),document.addEventListener("touchmove",r,{passive:!1}),window.addEventListener("resize",(function(){t.emit("resize")}))};function l(){this.container=null,this.beforeWrapper=null,this.afterWrapper=null,this.separator=null,this.separatorChildren=null,this.eventsListeners={};const e={direction:"vertical",freePosition:!1,init:!0,separator:{activeClass:t},className:null,progress:50};arguments[0]&&"object"==typeof arguments[0]&&(this.options=p(e,arguments[0]));const n=this,r=t=>c(n,h,t),o=t=>a(n,h,r,t),f=()=>u(n,h,r);this.init=function(){i.call(n).then((()=>{n.container&&(this.emit("init"),s.call(n),this.options.debug&&console.log("resolve"),h.on("mousedown",o),h.on("mouseup",f),h.on("resize",s.bind(n)))})).catch((()=>{this.options.debug&&console.log("reject"),this.destroy()}))},this.destroy=function(){n.container&&(n.container.setAttribute("data-before",this.beforeElement.src),n.container.setAttribute("data-after",this.afterElement.src),n.container.innerHTML="",n.container.removeAttribute("class"),h.off("mousedown",o),h.off("mouseup",f),h.off("resize",s.bind(n))),n.emit("destroy")},this.setProgress=function(t){n.options.progress=t,s.call(n),n.emit("setProgress")},this.options.init&&this.init()}l.prototype.on=function(t,e){this.eventsListeners[t]||(this.eventsListeners[t]=[]),this.eventsListeners[t].push(e)},l.prototype.off=function(t,e){this.eventsListeners[t]&&(this.eventsListeners[t]=this.eventsListeners[t].filter((function(t){return t!==e})))},l.prototype.emit=function(t,e){this.eventsListeners[t]&&this.eventsListeners[t].forEach((function(t){t(e)}))};var v=l}(),r.default}()}));