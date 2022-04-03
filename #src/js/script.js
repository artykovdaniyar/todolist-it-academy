import modal from "./modules/modal";

const createTaskButton = document.querySelector(".header__btn");
const modalCloseButtons = document.querySelectorAll(".modal__close-btn");
const modalOverlay = document.querySelector(".overlay");
const modalCancelButtons = document.querySelectorAll(".modal__btn--cancel");
const modalWindows = document.querySelectorAll(".modal");

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
