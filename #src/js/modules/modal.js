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
	}
}

const modal = new Modal();
export default modal;
