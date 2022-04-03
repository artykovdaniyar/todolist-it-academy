!function e(t,n,r){function o(i,c){if(!n[i]){if(!t[i]){var s="function"==typeof require&&require;if(!c&&s)return s(i,!0);if(a)return a(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[i]={exports:{}};t[i][0].call(l.exports,(function(e){return o(t[i][1][e]||e)}),l,l.exports,e,t,n,r)}return n[i].exports}for(var a="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"renderTask",value:function(e){var t=e.title,n=e.description,r=e.id,o=e.done,a=document.createElement("li");a.className="todo__item todo-item "+(o?"todo__item--done":""),a.dataset.id=""+r,a.innerHTML='\n    <header class="todo-item__header"> \n    <h3 class="todo-item__title">'+t+'</h3>\n    <div class="todo-checkout todo-item__checkout">\n      <input type="checkbox" '+(o?"checked":"")+' />\n      <span class="todo-checkout__checked">\n        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path d="M6.00002 11.2L1.80002 6.99998L0.400024 8.39998L6.00002 14L18 1.99998L16.6 0.599976L6.00002 11.2Z" fill="#57AD56" />\n        </svg>\n      </span>\n    </div>\n  </header>\n  <p class="todo-item__descr">'+n+'</p>\n  <div class="todo-item__tools">\n    <button class="todo-item__change">\n      <svg class="todo-item__change-icon" width="19" height="19" version="1.1" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">\n        <path d="M70.2,337.4l104.4,104.4L441.5,175L337,70.5L70.2,337.4z M0.6,499.8c-2.3,9.3,2.3,13.9,11.6,11.6L151.4,465L47,360.6L0.6,499.8z M487.9,24.1c-46.3-46.4-92.8-11.6-92.8-11.6c-7.6,5.8-34.8,34.8-34.8,34.8l104.4,104.4c0,0,28.9-27.2,34.8-34.8C499.5,116.9,534.3,70.6,487.9,24.1z" fill="currentColor" />\n      </svg>\n    </button>\n    <button class="todo-item__delete">\n      <svg class="todo-item__delete-icon" width="16" height="20" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M1.00002 13.8333C1.00002 14.75 1.75002 15.5 2.66669 15.5H9.33335C10.25 15.5 11 14.75 11 13.8333V3.83333H1.00002V13.8333ZM11.8334 1.33333H8.91669L8.08335 0.5H3.91669L3.08335 1.33333H0.166687V3H11.8334V1.33333Z" fill="currentColor" />\n      </svg>\n    </button>\n  </div>\n    ',document.querySelector(".todo__list").appendChild(a)}},{key:"createTaskId",value:function(){return Math.random().toString(36).substr(2,16)}},{key:"createTask",value:function(e,t){var n=e.target.parentElement,r=n.querySelector(".modal__input"),o=n.querySelector(".modal__textarea"),a={title:r.value,description:o.value,id:this.createTaskId(),done:!1},i=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(t.allTasks),[a]);t.allTasks=i}}]),e}();n.default=o},{}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=e("./TaskItem"),i=(r=a)&&r.__esModule?r:{default:r};var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tasks=t}return o(e,[{key:"clearTaskList",value:function(){document.querySelector(".todo__list").innerHTML=""}},{key:"render",value:function(){var e=new i.default;this.clearTaskList(),this.tasks.forEach((function(t){e.renderTask(t)}))}},{key:"allTasks",get:function(){return this.tasks},set:function(e){this.tasks=e}}]),e}();n.default=c},{"./TaskItem":1}]},{},[2]);