import TaskItem from "./TaskItem";

export default class TaskList {
	constructor(tasks) {
		this.tasks = tasks;
	}
	render() {
		const task = new TaskItem();
		this.tasks.forEach((taskObj) => {
			task.create(taskObj);
		});
	}
	get allTasks() {
		return this.tasks;
	}
	set allTasks(tasks) {
		this.tasks = tasks;
	}
}
