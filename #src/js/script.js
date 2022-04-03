import modal from "./modules/modal";
import task from "./modules/task";
let tasksList = [
	{ title: "Заголовок задачи", description: "Более длинное описание задачи на несолько строчек, может быть даже на 4. Более длинное описание задачи на несолько строчек, может быть даже на 4", id: 111, done: true },
	{ title: "Заголовок задачи", description: "Короткое описание", id: 222, done: false },
	{ title: "Заголовок задачи без описания", description: "", id: 333, done: false },
	{ title: "Заголовок задачи", description: "Короткое описание на 2 строчки", id: 444, done: false },
	{ title: "Более длинный заголовок задачи на несолько строчек, может быть даже на 3. Более длинный заголовок", description: "", id: 555, done: true },
	{ title: "Заголовок задачи", description: "Более длинное описание задачи на несолько строчек, может быть даже на 4. Более длинное описание задачи на несолько строчек, может быть даже на 4", id: 666, done: false },
];
task.updateTasks(tasksList, ".todo__list");
// task.addEventToInput(tasksList);
const createTaskButton = document.querySelector(".header__btn");
const modalCloseButtons = document.querySelectorAll(".modal__close-btn");
const modalOverlay = document.querySelector(".overlay");
const modalCancelButtons = document.querySelectorAll(".modal__btn--cancel");
const modalWindows = document.querySelectorAll(".modal");
const taskDeleteButton = document.querySelectorAll(".todo-item__delete");
const createTaskSaveButton = document.querySelector(".modal__btn--save");

createTaskSaveButton.addEventListener("click", (event) => {
	event.preventDefault();
	const form = event.target.parentElement;
	const modaltaskTitle = form.querySelector(".modal__input");
	const modalAlertMessage = form.querySelector(".modal__alert-message");
	// if (modaltaskTitle.value == "") {
	// 	modalAlertMessage.classList.add("active");
	// 	modaltaskTitle.classList.add("invalid__input");
	// 	modaltaskTitle.addEventListener("focus", () => {
	// 		modalAlertMessage.classList.remove("active");
	// 		modaltaskTitle.classList.remove("invalid__input");
	// 	});
	// }

	task.createTask(event, tasksList);
	task.updateTasks(tasksList, ".todo__list");
	modal.hideModal(modalWindows);
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
