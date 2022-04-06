import tasksList from "../script";

export default class Modal {
	showModal(id) {
		const modal = document.getElementById(id);
		const overlay = document.querySelector(".overlay");
		overlay.classList.add("active");
		modal.classList.add("active");
	}
	hideModal(modalsArray) {
		modalsArray.forEach((modalWindow) => {
			modalWindow.classList.remove("active");
		});
		const overlay = document.querySelector(".overlay");
		overlay.classList.remove("active");
		this.clearInputFields();
	}
	clearInputFields() {
		const modaltaskTitleInputs = document.querySelectorAll(".modal__input");
		const modaltaskDescrTextarea = document.querySelectorAll(".modal__textarea");
		modaltaskTitleInputs.forEach((input) => {
			input.value = "";
		});
		modaltaskDescrTextarea.forEach((input) => {
			input.value = "";
		});
	}
	inputValidation(event) {
		const form = event.target.parentElement;
		const modaltaskTitle = form.querySelector(".modal__input");
		const modalAlertMessage = form.querySelector(".modal__alert-message");
		if (modaltaskTitle.value == "") {
			modalAlertMessage.classList.add("active");
			modaltaskTitle.classList.add("invalid__input");
			modaltaskTitle.addEventListener("focus", () => {
				modalAlertMessage.classList.remove("active");
				modaltaskTitle.classList.remove("invalid__input");
			});
			return false;
		} else {
			return true;
		}
	}
	showDeleteTaskModal(id, taskObj, event) {
		const modalWindows = document.querySelectorAll(".modal");
		const modal = document.getElementById(id);
		const overlay = document.querySelector(".overlay");
		overlay.classList.add("active");
		modal.classList.add("active");
		const deleteTaskButton = document.querySelector(".modal__btn--delete");
		let deletefuncToRemove;
		deleteTaskButton.addEventListener(
			"click",
			(deletefuncToRemove = () => {
				taskObj.deleteTask(event, tasksList);
				tasksList.render();
				this.hideModal(modalWindows);
				deleteTaskButton.removeEventListener("click", deletefuncToRemove);
			}),
		);
	}
	showChangeTaskModal(id, taskObj, event) {
		const modal = document.getElementById(id);
		const overlay = document.querySelector(".overlay");
		overlay.classList.add("active");
		modal.classList.add("active");
		const taskCard = event.target.parentElement.parentElement;
		const taskTitleValue = taskCard.querySelector(".todo-item__title").textContent;
		const taskDescrValue = taskCard.querySelector(".todo-item__descr").textContent;
		const modalTitleInput = modal.querySelector(".modal__input");
		const modalDescrInput = modal.querySelector(".modal__textarea");
		modalTitleInput.value = taskTitleValue;
		modalDescrInput.value = taskDescrValue;
		let funcToRemove;
		const changeTaskButton = document.querySelector(".modal__btn--change");
		changeTaskButton.addEventListener(
			"click",
			(funcToRemove = (e) => {
				e.preventDefault();
				taskObj.changeTask(event, tasksList, e);

				changeTaskButton.removeEventListener("click", funcToRemove);
			}),
		);
	}
}
