!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n,t){"use strict";t.r(n),t.d(n,"header",(function(){return b}));var r=document.querySelector(".search__icon"),o=document.querySelector(".search__field"),i=document.querySelector(".search__field input[type=text]"),c=document.querySelector(".menu__mobile--button"),d=document.querySelector(".bars"),u=document.querySelector(".cross"),s=document.querySelector(".menu__main"),a=s.cloneNode(!0);a.id="menu__mobile",document.querySelector(".header").appendChild(a),a.classList.add("hidden");var l=window.matchMedia("(max-width: 991px)");function f(e){e.matches?s.classList.add("hidden"):(s.classList.remove("hidden"),a.classList.add("hidden"))}l.addListener(f),f(l);var m=[r,c],h=[o,a],y=function(e){return e.classList.add("hidden"),e==o&&(i.blur(),i.value=""),e},p=function(e){return e===c&&(a.classList.add("hidden"),d.classList.remove("hidden"),u.classList.add("hidden")),d},v=function(e,n){e.addEventListener("click",(function(){return n.classList.contains("hidden")?(function(e){e===c&&(a.classList.remove("hidden"),d.classList.add("hidden"),u.classList.remove("hidden"))}(e),function(e){e.classList.remove("hidden"),e==o&&i.focus()}(n)):(p(e),y(n)),n}))};function b(){m.forEach((function(e){h.forEach((function(n){if(e.id===n.id)return v(e,n),function(e,n){document.addEventListener("click",(function(t){return!l||n.contains(t.target)||e.contains(t.target)||(p(e),y(n)),n}))}(e,n),function(e){document.addEventListener("keydown",(function(n){return 27===n.keyCode&&(p(c),y(e)),e}))}(n),!0}))}))}},function(e,n,t){t(2),e.exports=t(0)},function(e,n,t){"use strict";t.r(n);var r=t(0);Object(r.header)()}]);