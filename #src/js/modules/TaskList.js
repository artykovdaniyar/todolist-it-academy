import TaskItem from "./TaskItem";

export default class TaskList {
	constructor(tasks) {
		this.tasks = tasks;
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
	}
	get allTasks() {
		return this.tasks;
	}
	set allTasks(tasks) {
		this.tasks = tasks;
	}
}
const taskList = new TaskList();
