export default class TaskList {
	constructor(tasks) {
		this.taks = tasks;
	}
	render() {
		this.tasks.forEach((task) => {
			console.log(task);
		});
	}
}
