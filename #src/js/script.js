import tasksList from "./modules/TaskList.js";
import TaskItem from "./modules/TaskItem.js";
import Modal from "./modules/Modal";
import localStorageDb from "./modules/LocalStorage";

let tasksArray = [
	{ title: "Заголовок задачи", description: "Более длинное описание задачи на несолько строчек, может быть даже на 4. Более длинное описание задачи на несолько строчек, может быть даже на 4", id: 111, done: true },
	{ title: "Заголовок задачи", description: "Короткое описание", id: 222, done: false },
	{ title: "Заголовок задачи без описания", description: "", id: 333, done: false },
	{ title: "Заголовок задачи", description: "Короткое описание на 2 строчки", id: 444, done: false },
	{ title: "Более длинный заголовок задачи на несолько строчек, может быть даже на 3. Более длинный заголовок", description: "", id: 555, done: true },
	{ title: "Заголовок задачи", description: "Более длинное описание задачи на несолько строчек, может быть даже на 4. Более длинное описание задачи на несолько строчек, может быть даже на 4", id: 666, done: false },
];

const task = new TaskItem();
const modal = new Modal();
tasksList.render();
const createTaskButton = document.querySelector(".header__btn");
const modalCloseButtons = document.querySelectorAll(".modal__close-btn");
const modalOverlay = document.querySelector(".overlay");
const modalCancelButtons = document.querySelectorAll(".modal__btn--cancel");
const modalWindows = document.querySelectorAll(".modal");
const taskDeleteButton = document.querySelectorAll(".todo-item__delete");
const createTaskSaveButton = document.querySelector(".modal__btn--save");
const deleteTaskButton = document.querySelector(".modal__btn--delete");
const changeTaskButton = document.querySelector(".modal__btn--change");

createTaskSaveButton.addEventListener("click", (event) => {
	event.preventDefault();
	const isValid = modal.inputValidation(event);
	if (isValid) {
		task.createTask(event, tasksList);
		tasksList.render();
		modal.hideModal(modalWindows);
	}
});

// Modal +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
createTaskButton.addEventListener("click", () => {
	modal.showModal("modalCreateTask");
});

modalCloseButtons.forEach((btn) => {
	btn.addEventListener("click", () => {
		modal.hideModal(modalWindows);
	});
});

modalCancelButtons.forEach((btn) => {
	btn.addEventListener("click", () => {
		modal.hideModal(modalWindows);
	});
});

modalOverlay.addEventListener("click", () => {
	modal.hideModal(modalWindows);
});
