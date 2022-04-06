(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TaskList = require("./TaskList");

var _TaskList2 = _interopRequireDefault(_TaskList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Modal = function () {
	function Modal() {
		_classCallCheck(this, Modal);
	}

	_createClass(Modal, [{
		key: "showModal",
		value: function showModal(id) {
			var modal = document.getElementById(id);
			var overlay = document.querySelector(".overlay");
			overlay.classList.add("active");
			modal.classList.add("active");
		}
	}, {
		key: "hideModal",
		value: function hideModal(modalsArray) {
			modalsArray.forEach(function (modalWindow) {
				modalWindow.classList.remove("active");
			});
			var overlay = document.querySelector(".overlay");
			overlay.classList.remove("active");
			this.clearInputFields();
		}
	}, {
		key: "clearInputFields",
		value: function clearInputFields() {
			var modaltaskTitleInputs = document.querySelectorAll(".modal__input");
			var modaltaskDescrTextarea = document.querySelectorAll(".modal__textarea");
			var formAlertMessage = document.querySelectorAll(".modal__alert-message");

			modaltaskTitleInputs.forEach(function (input) {
				input.value = "";
				input.classList.remove("invalid__input");
			});
			modaltaskDescrTextarea.forEach(function (input) {
				input.value = "";
			});
			formAlertMessage.forEach(function (message) {
				message.classList.remove("active");
			});
		}
	}, {
		key: "inputValidation",
		value: function inputValidation(event) {
			var form = event.target.parentElement;
			var modaltaskTitle = form.querySelector(".modal__input");
			var modalAlertMessage = form.querySelector(".modal__alert-message");
			if (modaltaskTitle.value == "") {
				modalAlertMessage.classList.add("active");
				modaltaskTitle.classList.add("invalid__input");
				modaltaskTitle.addEventListener("focus", function () {
					modalAlertMessage.classList.remove("active");
					modaltaskTitle.classList.remove("invalid__input");
				});
				return false;
			} else {
				return true;
			}
		}
	}, {
		key: "showDeleteTaskModal",
		value: function showDeleteTaskModal(id, taskObj, event) {
			var _this = this;

			var modalWindows = document.querySelectorAll(".modal");
			var modal = document.getElementById(id);
			var overlay = document.querySelector(".overlay");
			overlay.classList.add("active");
			modal.classList.add("active");
			var deleteTaskButton = document.querySelector(".modal__btn--delete");
			var _deletefuncToRemove = void 0;
			deleteTaskButton.addEventListener("click", _deletefuncToRemove = function deletefuncToRemove() {
				taskObj.deleteTask(event, _TaskList2.default);
				_TaskList2.default.render();
				_this.hideModal(modalWindows);
				deleteTaskButton.removeEventListener("click", _deletefuncToRemove);
			});
		}
	}, {
		key: "showChangeTaskModal",
		value: function showChangeTaskModal(id, taskObj, event) {
			var modal = document.getElementById(id);
			var overlay = document.querySelector(".overlay");
			overlay.classList.add("active");
			modal.classList.add("active");
			var taskCard = event.target.parentElement.parentElement;
			var taskTitleValue = taskCard.querySelector(".todo-item__title").textContent;
			var taskDescrValue = taskCard.querySelector(".todo-item__descr").textContent;
			var modalTitleInput = modal.querySelector(".modal__input");
			var modalDescrInput = modal.querySelector(".modal__textarea");
			modalTitleInput.value = taskTitleValue;
			modalDescrInput.value = taskDescrValue;
			var _funcToRemove = void 0;
			var changeTaskButton = document.querySelector(".modal__btn--change");
			changeTaskButton.addEventListener("click", _funcToRemove = function funcToRemove(e) {
				e.preventDefault();
				taskObj.changeTask(event, _TaskList2.default, e);

				changeTaskButton.removeEventListener("click", _funcToRemove);
			});
		}
	}]);

	return Modal;
}();

exports.default = Modal;

},{"./TaskList":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TaskList = require("./TaskList");

var _TaskList2 = _interopRequireDefault(_TaskList);

var _Modal = require("./Modal");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var modal = new _Modal2.default();

var TaskItem = function () {
	function TaskItem() {
		_classCallCheck(this, TaskItem);
	}

	_createClass(TaskItem, [{
		key: "renderTask",
		value: function renderTask(_ref) {
			var _this = this;

			var title = _ref.title,
			    description = _ref.description,
			    id = _ref.id,
			    done = _ref.done;

			var listItemTag = document.createElement("li");
			listItemTag.className = "todo__item todo-item " + (done ? "todo__item--done" : "");
			listItemTag.dataset.id = "" + id;
			listItemTag.innerHTML = "\n    <header class=\"todo-item__header\">\n    <h3 class=\"todo-item__title\">" + title + "</h3>\n    <div class=\"todo-checkout todo-item__checkout\">\n      <input type=\"checkbox\" " + (done ? "checked" : "") + " />\n      <span class=\"todo-checkout__checked\">\n        <svg width=\"18\" height=\"14\" viewBox=\"0 0 18 14\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M6.00002 11.2L1.80002 6.99998L0.400024 8.39998L6.00002 14L18 1.99998L16.6 0.599976L6.00002 11.2Z\" fill=\"#57AD56\" />\n        </svg>\n      </span>\n    </div>\n  </header>\n  <p class=\"todo-item__descr\">" + description + "</p>\n  <div class=\"todo-item__tools\">\n    <button class=\"todo-item__change\">\n      <svg class=\"todo-item__change-icon\" width=\"19\" height=\"19\" version=\"1.1\" viewBox=\"0 0 512 512\" enable-background=\"new 0 0 512 512\" xml:space=\"preserve\">\n        <path d=\"M70.2,337.4l104.4,104.4L441.5,175L337,70.5L70.2,337.4z M0.6,499.8c-2.3,9.3,2.3,13.9,11.6,11.6L151.4,465L47,360.6L0.6,499.8z M487.9,24.1c-46.3-46.4-92.8-11.6-92.8-11.6c-7.6,5.8-34.8,34.8-34.8,34.8l104.4,104.4c0,0,28.9-27.2,34.8-34.8C499.5,116.9,534.3,70.6,487.9,24.1z\" fill=\"currentColor\" />\n      </svg>\n    </button>\n    <button class=\"todo-item__delete\">\n      <svg class=\"todo-item__delete-icon\" width=\"16\" height=\"20\" viewBox=\"0 0 12 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M1.00002 13.8333C1.00002 14.75 1.75002 15.5 2.66669 15.5H9.33335C10.25 15.5 11 14.75 11 13.8333V3.83333H1.00002V13.8333ZM11.8334 1.33333H8.91669L8.08335 0.5H3.91669L3.08335 1.33333H0.166687V3H11.8334V1.33333Z\" fill=\"currentColor\" />\n      </svg>\n    </button>\n   </div>\n    ";
			var taskDeleteButton = listItemTag.querySelector(".todo-item__delete");
			var taskChangeButton = listItemTag.querySelector(".todo-item__change");
			var taskDoneCheckBox = listItemTag.querySelector(".todo-checkout input");
			taskDoneCheckBox.addEventListener("change", function (event) {
				_this.makeItDoneTask(event, _TaskList2.default);
			});
			taskDeleteButton.addEventListener("click", function (event) {
				modal.showDeleteTaskModal("modalDeleteTask", _this, event);
			});
			taskChangeButton.addEventListener("click", function (event) {
				modal.showChangeTaskModal("modalChangeTask", _this, event);
			});
			document.querySelector(".todo__list").appendChild(listItemTag);
		}
	}, {
		key: "createTaskId",
		value: function createTaskId() {
			var id = Math.random().toString(36).substr(2, 16);
			return id;
		}
	}, {
		key: "createTask",
		value: function createTask(event, tasksObj) {
			var form = event.target.parentElement;
			var modaltaskTitle = form.querySelector(".modal__input");
			var modaltaskDescr = form.querySelector(".modal__textarea");

			var createdTask = {
				title: modaltaskTitle.value,
				description: modaltaskDescr.value,
				id: this.createTaskId(),
				done: false
			};
			var newTaskList = [].concat(_toConsumableArray(tasksObj.allTasks), [createdTask]);
			tasksObj.allTasks = newTaskList;
		}
	}, {
		key: "deleteTask",
		value: function deleteTask(event, tasksObj) {
			var deleteTaskId = event.target.parentElement.parentElement.dataset.id;
			var deletedTaskList = tasksObj.allTasks.filter(function (task) {
				return task.id != deleteTaskId;
			});
			tasksObj.allTasks = deletedTaskList;
		}
	}, {
		key: "changeTask",
		value: function changeTask(event, tasksObj, modalSaveBtnEvent) {
			modalSaveBtnEvent.preventDefault();
			var isValidToChange = modal.inputValidation(modalSaveBtnEvent);
			var modalWindows = document.querySelectorAll(".modal");

			if (isValidToChange) {
				var changedTaskId = event.target.parentElement.parentElement.dataset.id;
				var modalTitleInputValue = document.querySelector("#modalChangeTask .modal__input").value;
				var modalDescrInputValue = document.querySelector("#modalChangeTask .modal__textarea").value;
				var changedTaskList = tasksObj.allTasks.map(function (task) {
					if (task.id == changedTaskId) {
						task.title = modalTitleInputValue;
						task.description = modalDescrInputValue;
					}
					return task;
				});
				tasksObj.allTasks = changedTaskList;
				tasksObj.render();
				modal.hideModal(modalWindows);
			}
		}
	}, {
		key: "makeItDoneTask",
		value: function makeItDoneTask(event, tasksObj) {
			var checkedTaskId = event.target.parentElement.parentElement.parentElement.dataset.id;

			var changeTaskList = tasksObj.allTasks.map(function (task) {
				if (task.id == checkedTaskId) {
					task.done = !task.done;
					return task;
				} else {
					return task;
				}
			});
			tasksObj.allTasks = changeTaskList;
			tasksObj.render();
		}
	}]);

	return TaskItem;
}();

exports.default = TaskItem;

},{"./Modal":1,"./TaskList":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TaskItem = require("./TaskItem");

var _TaskItem2 = _interopRequireDefault(_TaskItem);

var _localStorage = require("./localStorage");

var _localStorage2 = _interopRequireDefault(_localStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TaskList = function () {
	function TaskList(tasks) {
		_classCallCheck(this, TaskList);

		this.tasks = tasks;
	}

	_createClass(TaskList, [{
		key: "displayNoTasksMessage",
		value: function displayNoTasksMessage() {
			var taskListUlTag = document.querySelector(".todo__list");
			var noTaskMessageTag = document.querySelector(".todo__massage-wrapper");
			if (taskListUlTag.innerHTML == "") {
				noTaskMessageTag.classList.add("active");
			} else {
				noTaskMessageTag.classList.remove("active");
			}
		}
	}, {
		key: "clearTaskList",
		value: function clearTaskList() {
			document.querySelector(".todo__list").innerHTML = "";
		}
	}, {
		key: "render",
		value: function render() {
			var task = new _TaskItem2.default();
			this.clearTaskList();
			this.tasks.forEach(function (taskObj) {
				task.renderTask(taskObj);
			});
			_localStorage2.default.saveTasks(this.tasks);
			this.displayNoTasksMessage();
			this.upDateCouners();
		}
	}, {
		key: "upDateCouners",
		value: function upDateCouners() {
			var allTasksTodo = document.querySelector(".todo-counter__alltasks");
			var unfinishedTasks = document.querySelector(".todo-counter__tasks");
			var finishedTasks = document.querySelector(".todo-counter__done");
			var unfinishedTasksNum = 0;
			var finishedTasksNum = 0;

			this.tasks.forEach(function (task) {
				task.done ? finishedTasksNum++ : unfinishedTasksNum++;
			});
			allTasksTodo.innerHTML = "\u0412\u0441\u0435 \u0437\u0430\u0434\u0430\u0447\u0438: " + this.tasks.length;
			finishedTasks.innerHTML = "\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0435: " + finishedTasksNum;
			unfinishedTasks.innerHTML = "\u041D\u0443\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C: " + unfinishedTasksNum;
		}
	}, {
		key: "allTasks",
		get: function get() {
			return this.tasks;
		},
		set: function set(tasks) {
			this.tasks = tasks;
		}
	}]);

	return TaskList;
}();

var tasksList = new TaskList(_localStorage2.default.getTasks());
exports.default = tasksList;

},{"./TaskItem":2,"./localStorage":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LocalStorage = function () {
	function LocalStorage() {
		_classCallCheck(this, LocalStorage);
	}

	_createClass(LocalStorage, [{
		key: "getTasks",
		value: function getTasks() {
			var myTasks = void 0;
			if (localStorage.ItAcademyTodoList) {
				myTasks = JSON.parse(localStorage.getItem("ItAcademyTodoList"));
			} else {
				myTasks = [];
			}
			return myTasks;
		}
	}, {
		key: "saveTasks",
		value: function saveTasks(myTaskList) {
			localStorage.setItem("ItAcademyTodoList", JSON.stringify(myTaskList));
		}
	}]);

	return LocalStorage;
}();

var localStorageDb = new LocalStorage();
exports.default = localStorageDb;

},{}]},{},[3]);
