import 'alpinejs'

window.data = function () {
	return {
		todos: [],
		newTodoTitle: '',
		addTodo () {
			this.todos.push({
				id: Date.now(),
				title: this.newTodoTitle,
				completed: false
			})
			this.newTodoTitle = ''
		}
	}
}
