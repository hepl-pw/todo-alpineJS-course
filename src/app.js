import 'alpinejs'

window.data = function () {
	return {
		filter: 'all',
		todos: [],
		newTodoTitle: '',
		get activeTodos () {
			return this.todos.filter(todo => !todo.completed)
		},
		get activeTodosCount () {
			return this.activeTodos.length
		},
		get completedTodos () {
			return this.todos.filter(todo => todo.completed)
		},
		get completedTodosCount () {
			return this.activeTodos.length
		},
		get filteredTodos () {
			return {
				all: this.todos,
				active: this.activeTodos,
				completed: this.completedTodos
			}[this.filter]
		},
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
		}
	}
}
