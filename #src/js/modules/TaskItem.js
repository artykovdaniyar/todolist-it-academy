import tasksList from "../script";
import Modal from "./Modal";
const modal = new Modal();

export default class TaskItem {
	renderTask({ title, description, id, done }) {
		const listItemTag = document.createElement("li");
		listItemTag.className = `todo__item todo-item ${done ? "todo__item--done" : ""}`;
		listItemTag.dataset.id = `${id}`;
		listItemTag.innerHTML = `
    <header class="todo-item__header">
    <h3 class="todo-item__title">${title}</h3>
    <div class="todo-checkout todo-item__checkout">
      <input type="checkbox" ${done ? "checked" : ""} />
      <span class="todo-checkout__checked">
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.00002 11.2L1.80002 6.99998L0.400024 8.39998L6.00002 14L18 1.99998L16.6 0.599976L6.00002 11.2Z" fill="#57AD56" />
        </svg>
      </span>
    </div>
  </header>
  <p class="todo-item__descr">${description}</p>
  <div class="todo-item__tools">
    <button class="todo-item__change">
      <svg class="todo-item__change-icon" width="19" height="19" version="1.1" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
        <path d="M70.2,337.4l104.4,104.4L441.5,175L337,70.5L70.2,337.4z M0.6,499.8c-2.3,9.3,2.3,13.9,11.6,11.6L151.4,465L47,360.6L0.6,499.8z M487.9,24.1c-46.3-46.4-92.8-11.6-92.8-11.6c-7.6,5.8-34.8,34.8-34.8,34.8l104.4,104.4c0,0,28.9-27.2,34.8-34.8C499.5,116.9,534.3,70.6,487.9,24.1z" fill="currentColor" />
      </svg>
    </button>
    <button class="todo-item__delete">
      <svg class="todo-item__delete-icon" width="16" height="20" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.00002 13.8333C1.00002 14.75 1.75002 15.5 2.66669 15.5H9.33335C10.25 15.5 11 14.75 11 13.8333V3.83333H1.00002V13.8333ZM11.8334 1.33333H8.91669L8.08335 0.5H3.91669L3.08335 1.33333H0.166687V3H11.8334V1.33333Z" fill="currentColor" />
      </svg>
    </button>
   </div>
    `;
		const taskDeleteButton = listItemTag.querySelector(".todo-item__delete");
		const taskChangeButton = listItemTag.querySelector(".todo-item__change");
		const taskDoneCheckBox = listItemTag.querySelector(".todo-checkout input");
		taskDoneCheckBox.addEventListener("change", (event) => {
			this.makeItDoneTask(event, tasksList);
		});
		taskDeleteButton.addEventListener("click", (event) => {
			modal.showDeleteTaskModal("modalDeleteTask", this, event);
		});
		taskChangeButton.addEventListener("click", (event) => {
			modal.showChangeTaskModal("modalChangeTask", this, event);
		});
		document.querySelector(".todo__list").appendChild(listItemTag);
	}
	createTaskId() {
		const id = Math.random().toString(36).substr(2, 16);
		return id;
	}
	createTask(event, tasksObj) {
		const form = event.target.parentElement;
		const modaltaskTitle = form.querySelector(".modal__input");
		const modaltaskDescr = form.querySelector(".modal__textarea");

		const createdTask = {
			title: modaltaskTitle.value,
			description: modaltaskDescr.value,
			id: this.createTaskId(),
			done: false,
		};
		const newTaskList = [...tasksObj.allTasks, createdTask];
		tasksObj.allTasks = newTaskList;
	}
	deleteTask(event, tasksObj) {
		const deleteTaskId = event.target.parentElement.parentElement.dataset.id;
		const deletedTaskList = tasksObj.allTasks.filter((task) => {
			return task.id != deleteTaskId;
		});
		tasksObj.allTasks = deletedTaskList;
	}
	changeTask(event, tasksObj) {
		const changedTaskId = event.target.parentElement.parentElement.dataset.id;
		const modalTitleInputValue = document.querySelector("#modalChangeTask .modal__input").value;
		const modalDescrInputValue = document.querySelector("#modalChangeTask .modal__textarea").value;

		const changedTaskList = tasksObj.allTasks.map((task) => {
			if (task.id == changedTaskId) {
				task.title = modalTitleInputValue;
				task.description = modalDescrInputValue;
			}
			return task;
		});
		tasksObj.allTasks = changedTaskList;
	}
	makeItDoneTask(event, tasksObj) {
		const checkedTaskId = event.target.parentElement.parentElement.parentElement.dataset.id;

		const changeTaskList = tasksObj.allTasks.map((task) => {
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
}
