!function e(t,n,r){function o(c,u){if(!n[c]){if(!t[c]){var l="function"==typeof require&&require;if(!u&&l)return l(c,!0);if(a)return a(c,!0);var i=new Error("Cannot find module '"+c+"'");throw i.code="MODULE_NOT_FOUND",i}var d=n[c]={exports:{}};t[c][0].call(d.exports,(function(e){return o(t[c][1][e]||e)}),d,d.exports,e,t,n,r)}return n[c].exports}for(var a="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"showModal",value:function(e){var t=document.getElementById(e);document.querySelector(".overlay").classList.add("active"),t.classList.add("active")}},{key:"hideModal",value:function(e){e.forEach((function(e){e.classList.remove("active")})),document.querySelector(".overlay").classList.remove("active")}}]),e}());n.default=o},{}],2:[function(e,t,n){"use strict";var r,o=e("./modules/modal"),a=(r=o)&&r.__esModule?r:{default:r};var c=document.querySelector(".header__btn"),u=document.querySelectorAll(".modal__close-btn"),l=document.querySelector(".overlay"),i=document.querySelectorAll(".modal__btn--cancel"),d=document.querySelectorAll(".modal");c.addEventListener("click",(function(){a.default.showModal("modalCreateTask")})),u.forEach((function(e){e.addEventListener("click",(function(){a.default.hideModal(d)}))})),i.forEach((function(e){e.addEventListener("click",(function(){a.default.hideModal(d)}))})),l.addEventListener("click",(function(){a.default.hideModal(d)}))},{"./modules/modal":1}]},{},[2]);