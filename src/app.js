import 'alpinejs'

window.data = function () {
	return {
		todos: [],
		newTodoTitle: null,
		addTodo () {
			this.todos.push({
				id: Date.now(),
				title: this.newTodoTitle,
				completed: false
			})
			console.log(this.todos)
		}
	}
}
