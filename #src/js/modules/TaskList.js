import TaskItem from "./TaskItem";
import localStorageDb from "./localStorage";

class TaskList {
	constructor(tasks) {
		this.tasks = tasks;
	}
	displayNoTasksMessage() {
		const taskListUlTag = document.querySelector(".todo__list");
		const noTaskMessageTag = document.querySelector(".todo__massage-wrapper");
		if (taskListUlTag.innerHTML == "") {
			noTaskMessageTag.classList.add("active");
		} else {
			noTaskMessageTag.classList.remove("active");
		}
	}
	clearTaskList() {
		document.querySelector(".todo__list").innerHTML = "";
	}
	render() {
		const task = new TaskItem();
		this.clearTaskList();
		this.tasks.forEach((taskObj) => {
			task.renderTask(taskObj);
		});
		localStorageDb.saveTasks(this.tasks);
		this.displayNoTasksMessage();
		this.upDateCouners();
	}
	upDateCouners() {
		const allTasksTodo = document.querySelector(".todo-counter__alltasks");
		const unfinishedTasks = document.querySelector(".todo-counter__tasks");
		const finishedTasks = document.querySelector(".todo-counter__done");
		let unfinishedTasksNum = 0;
		let finishedTasksNum = 0;

		this.tasks.forEach((task) => {
			task.done ? finishedTasksNum++ : unfinishedTasksNum++;
		});
		allTasksTodo.innerHTML = `Все задачи: ${this.tasks.length}`;
		finishedTasks.innerHTML = `Завершенные: ${finishedTasksNum}`;
		unfinishedTasks.innerHTML = `Нужно сделать: ${unfinishedTasksNum}`;
	}
	get allTasks() {
		return this.tasks;
	}
	set allTasks(tasks) {
		this.tasks = tasks;
	}
}
const tasksList = new TaskList(localStorageDb.getTasks());
export default tasksList;
