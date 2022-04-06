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
