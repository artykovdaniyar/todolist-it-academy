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
}
