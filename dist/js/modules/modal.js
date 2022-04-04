!function e(t,n,o){function a(l,i){if(!n[l]){if(!t[l]){var c="function"==typeof require&&require;if(!i&&c)return c(l,!0);if(r)return r(l,!0);var d=new Error("Cannot find module '"+l+"'");throw d.code="MODULE_NOT_FOUND",d}var s=n[l]={exports:{}};t[l][0].call(s.exports,(function(e){return a(t[l][1][e]||e)}),s,s.exports,e,t,n,o)}return n[l].exports}for(var r="function"==typeof require&&require,l=0;l<o.length;l++)a(o[l]);return a}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,a=e("../script"),r=(o=a)&&o.__esModule?o:{default:o};var l=document.querySelectorAll(".modal"),i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return e.prototype.showModal=function(e){var t=document.getElementById(e);document.querySelector(".overlay").classList.add("active"),t.classList.add("active")},e.prototype.hideModal=function(e){e.forEach((function(e){e.classList.remove("active")})),document.querySelector(".overlay").classList.remove("active"),this.clearInputFields()},e.prototype.clearInputFields=function(){var e=document.querySelectorAll(".modal__input"),t=document.querySelectorAll(".modal__textarea");e.forEach((function(e){e.value=""})),t.forEach((function(e){e.value=""}))},e.prototype.inputValidation=function(e){var t=e.target.parentElement,n=t.querySelector(".modal__input"),o=t.querySelector(".modal__alert-message");return""!=n.value||(o.classList.add("active"),n.classList.add("invalid__input"),n.addEventListener("focus",(function(){o.classList.remove("active"),n.classList.remove("invalid__input")})),!1)},e.prototype.showDeleteTaskModal=function(e,t,n){var o=this,a=document.getElementById(e);document.querySelector(".overlay").classList.add("active"),a.classList.add("active");var i=document.querySelector(".modal__btn--delete"),c=void 0;i.addEventListener("click",c=function(){t.deleteTask(n,r.default),r.default.render(),o.hideModal(l),i.removeEventListener("click",c)})},e.prototype.showChangeTaskModal=function(e,t,n){var o=this,a=document.getElementById(e);document.querySelector(".overlay").classList.add("active"),a.classList.add("active");var i=n.target.parentElement.parentElement,c=i.querySelector(".todo-item__title").textContent,d=i.querySelector(".todo-item__descr").textContent,s=a.querySelector(".modal__input"),u=a.querySelector(".modal__textarea");s.value=c,u.value=d;var f=void 0,m=document.querySelector(".modal__btn--change");m.addEventListener("click",f=function(e){e.preventDefault(),t.changeTask(n,r.default),r.default.render(),o.hideModal(l),m.removeEventListener("click",f)})},e}();n.default=i},{"../script":4}],2:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=a(e("../script"));function a(e){return e&&e.__esModule?e:{default:e}}var r=new(a(e("./Modal")).default),l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return e.prototype.renderTask=function(e){var t=this,n=e.title,a=e.description,l=e.id,i=e.done,c=document.createElement("li");c.className="todo__item todo-item "+(i?"todo__item--done":""),c.dataset.id=""+l,c.innerHTML='\n    <header class="todo-item__header">\n    <h3 class="todo-item__title">'+n+'</h3>\n    <div class="todo-checkout todo-item__checkout">\n      <input type="checkbox" '+(i?"checked":"")+' />\n      <span class="todo-checkout__checked">\n        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path d="M6.00002 11.2L1.80002 6.99998L0.400024 8.39998L6.00002 14L18 1.99998L16.6 0.599976L6.00002 11.2Z" fill="#57AD56" />\n        </svg>\n      </span>\n    </div>\n  </header>\n  <p class="todo-item__descr">'+a+'</p>\n  <div class="todo-item__tools">\n    <button class="todo-item__change">\n      <svg class="todo-item__change-icon" width="19" height="19" version="1.1" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">\n        <path d="M70.2,337.4l104.4,104.4L441.5,175L337,70.5L70.2,337.4z M0.6,499.8c-2.3,9.3,2.3,13.9,11.6,11.6L151.4,465L47,360.6L0.6,499.8z M487.9,24.1c-46.3-46.4-92.8-11.6-92.8-11.6c-7.6,5.8-34.8,34.8-34.8,34.8l104.4,104.4c0,0,28.9-27.2,34.8-34.8C499.5,116.9,534.3,70.6,487.9,24.1z" fill="currentColor" />\n      </svg>\n    </button>\n    <button class="todo-item__delete">\n      <svg class="todo-item__delete-icon" width="16" height="20" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M1.00002 13.8333C1.00002 14.75 1.75002 15.5 2.66669 15.5H9.33335C10.25 15.5 11 14.75 11 13.8333V3.83333H1.00002V13.8333ZM11.8334 1.33333H8.91669L8.08335 0.5H3.91669L3.08335 1.33333H0.166687V3H11.8334V1.33333Z" fill="currentColor" />\n      </svg>\n    </button>\n   </div>\n    ';var d=c.querySelector(".todo-item__delete"),s=c.querySelector(".todo-item__change");c.querySelector(".todo-checkout input").addEventListener("change",(function(e){t.makeItDoneTask(e,o.default)})),d.addEventListener("click",(function(e){r.showDeleteTaskModal("modalDeleteTask",t,e)})),s.addEventListener("click",(function(e){r.showChangeTaskModal("modalChangeTask",t,e)})),document.querySelector(".todo__list").appendChild(c)},e.prototype.createTaskId=function(){return Math.random().toString(36).substr(2,16)},e.prototype.createTask=function(e,t){var n=e.target.parentElement,o=n.querySelector(".modal__input"),a=n.querySelector(".modal__textarea"),r={title:o.value,description:a.value,id:this.createTaskId(),done:!1},l=[].concat(t.allTasks,[r]);t.allTasks=l},e.prototype.deleteTask=function(e,t){var n=e.target.parentElement.parentElement.dataset.id,o=t.allTasks.filter((function(e){return e.id!=n}));t.allTasks=o},e.prototype.changeTask=function(e,t){var n=e.target.parentElement.parentElement.dataset.id,o=document.querySelector("#modalChangeTask .modal__input").value,a=document.querySelector("#modalChangeTask .modal__textarea").value,r=t.allTasks.map((function(e){return e.id==n&&(e.title=o,e.description=a),e}));t.allTasks=r},e.prototype.makeItDoneTask=function(e,t){var n=e.target.parentElement.parentElement.parentElement.dataset.id,o=t.allTasks.map((function(e){return e.id==n?(e.done=!e.done,e):e}));t.allTasks=o,t.render()},e}();n.default=l},{"../script":4,"./Modal":1}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=e("./TaskItem"),l=(o=r)&&o.__esModule?o:{default:o};var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tasks=t}return e.prototype.clearTaskList=function(){document.querySelector(".todo__list").innerHTML=""},e.prototype.render=function(){var e=new l.default;this.clearTaskList(),this.tasks.forEach((function(t){e.renderTask(t)}))},a(e,[{key:"allTasks",get:function(){return this.tasks},set:function(e){this.tasks=e}}]),e}();n.default=i},{"./TaskItem":2}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=l(e("./modules/TaskList.js")),a=l(e("./modules/TaskItem.js")),r=l(e("./modules/Modal"));function l(e){return e&&e.__esModule?e:{default:e}}var i=new o.default([{title:"Заголовок задачи",description:"Более длинное описание задачи на несолько строчек, может быть даже на 4. Более длинное описание задачи на несолько строчек, может быть даже на 4",id:111,done:!0},{title:"Заголовок задачи",description:"Короткое описание",id:222,done:!1},{title:"Заголовок задачи без описания",description:"",id:333,done:!1},{title:"Заголовок задачи",description:"Короткое описание на 2 строчки",id:444,done:!1},{title:"Более длинный заголовок задачи на несолько строчек, может быть даже на 3. Более длинный заголовок",description:"",id:555,done:!0},{title:"Заголовок задачи",description:"Более длинное описание задачи на несолько строчек, может быть даже на 4. Более длинное описание задачи на несолько строчек, может быть даже на 4",id:666,done:!1}]);n.default=i;var c=new a.default,d=new r.default;i.render();var s=document.querySelector(".header__btn"),u=document.querySelectorAll(".modal__close-btn"),f=document.querySelector(".overlay"),m=document.querySelectorAll(".modal__btn--cancel"),v=document.querySelectorAll(".modal"),p=(document.querySelectorAll(".todo-item__delete"),document.querySelector(".modal__btn--save"));document.querySelector(".modal__btn--delete"),document.querySelector(".modal__btn--change");p.addEventListener("click",(function(e){e.preventDefault(),d.inputValidation(e)&&(c.createTask(e,i),i.render(),d.hideModal(v))})),s.addEventListener("click",(function(){d.showModal("modalCreateTask")})),u.forEach((function(e){e.addEventListener("click",(function(){d.hideModal(v)}))})),m.forEach((function(e){e.addEventListener("click",(function(){d.hideModal(v)}))})),f.addEventListener("click",(function(){d.hideModal(v)}))},{"./modules/Modal":1,"./modules/TaskItem.js":2,"./modules/TaskList.js":3}]},{},[1]);