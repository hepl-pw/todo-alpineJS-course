import 'alpinejs'

window.data = function () {
	return {
		todos: [],
		newTodoTitle: '',
		addTodo () {
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
		},
		toggleCompleted (todo) {
			todo.completed = !todo.completed
		},
		get activeTodos () {
			return this.todos.filter(todo => !todo.completed)
		},
		get activeTodosCount () {
			return this.activeTodos.length
		}
	}
}
