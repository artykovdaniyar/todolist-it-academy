class LocalStorage {
	getTasks() {
		let myTasks;
		if (localStorage.ItAcademyTodoList) {
			myTasks = JSON.parse(localStorage.getItem("ItAcademyTodoList"));
		} else {
			myTasks = [];
		}
		return myTasks;
	}
	saveTasks(myTaskList) {
		localStorage.setItem("ItAcademyTodoList", JSON.stringify(myTaskList));
	}
}

const localStorageDb = new LocalStorage();
export default localStorageDb;
