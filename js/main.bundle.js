!function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);const i=document.querySelector(".header"),n=i.querySelector(".menu-button"),l=()=>{i.classList.add("header--menu-close"),i.classList.remove("header--menu-open"),n.setAttribute("aria-expanded","false"),n.setAttribute("aria-label","открыть меню")},s=()=>{i.classList.remove("header--menu-close"),i.classList.add("header--menu-open"),n.setAttribute("aria-expanded","true"),n.setAttribute("aria-label","закрыть меню")},o=document.querySelector(".slider-buttons__btn--prev"),d=document.querySelector(".slider-buttons__btn--next");let a=document.querySelector(".slider-list__item--active");const c=e=>{null!==e.previousElementSibling?o.removeAttribute("disabled"):o.setAttribute("disabled","disabled")},u=e=>{null!==e.nextElementSibling?d.removeAttribute("disabled"):d.setAttribute("disabled","disabled")},m=()=>{a=document.querySelector(".slider-list__item--active"),c(a),u(a)},b=document.querySelector(".page"),v=document.querySelector(".feaured__btn"),f=document.querySelector(".add-cart--modal"),_=document.querySelector(".form-add-cart"),p=_.querySelector(".form-add-cart__close"),y=()=>{f.setAttribute("aria-hidden","false"),b.classList.remove("lock"),b.style.paddingRight=""},S=()=>{f.setAttribute("aria-hidden","true");let e=(()=>{let e=document.createElement("div");e.style.overflowY="scroll",e.style.width="50px",e.style.height="50px",document.body.append(e);let t=e.offsetWidth-e.clientWidth;return e.remove(),t})();var t;t=e,b.classList.add("lock"),b.style.paddingRight=t+"px"},g=document.querySelector(".page");document.addEventListener("DOMContentLoaded",()=>{g.classList.remove("no-js"),l(),window.innerWidth>=768?s():l(),n.addEventListener("click",()=>{i.classList.contains("header--menu-close")?s():l()}),(()=>{a=document.querySelector(".slider-list__item--active"),c(a),u(a);document.querySelectorAll(".slider-buttons__btn").forEach(e=>e.addEventListener("click",e=>{a=document.querySelector(".slider-list__item--active"),e.target.classList.contains("slider-buttons__btn--prev")&&null!==a.previousElementSibling&&(a.previousElementSibling.classList.add("slider-list__item--active"),a.classList.remove("slider-list__item--active"),m()),e.target.classList.contains("slider-buttons__btn--next")&&null!==a.nextElementSibling&&(a.nextElementSibling.classList.add("slider-list__item--active"),a.classList.remove("slider-list__item--active"),m())}))})(),v.addEventListener("click",S),_&&p.addEventListener("click",e=>{e.preventDefault(),_.reset(),y()})})}]);
//# sourceMappingURL=main.bundle.js.map