class Modal {
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
}

const modal = new Modal();
export default modal;
