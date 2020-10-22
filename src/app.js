import 'alpinejs'

window.data = function () {
	return {
		todos: [],
		newTodoTitle: '',
		addTodo() {
			if (this.newTodoTitle.trim()) {
				this.todos.push({
					id: Date.now(),
					title: this.newTodoTitle,
					completed: false
				})
				this.newTodoTitle = ''
			}
		},
		removeTodo (todo) {
			this.todos.splice(this.todos.indexOf(todo), 1)
		}
	}
}
