import 'alpinejs'
import store from './store'

window.data = function () {

	return {

		...store,
		filter: 'all',
		todos: [],
		todoEditing: null,
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
			return this.completedTodos.length
		},

		get filteredTodos () {
			return {
				all: this.todos,
				active: this.activeTodos,
				completed: this.completedTodos
			}[this.filter]
		},

		get allTodosComplete () {
			return this.completedTodosCount === this.todos.length
		},



		loadTodos () {
			let todos = this.fetch()
			todos.forEach(todo => this.todos.push(todo))
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
			this.save(this.todos)
		},

		removeTodo (todo) {
			this.todos.splice(this.todos.indexOf(todo), 1)
			this.save(this.todos)
		},

		toggleCompleted (todo) {
			todo.completed = !todo.completed
			this.save(this.todos)
		},

		startEditing (todo, tick) {
			todo.cachedTitle = todo.title
			if (this.todoEditing) {
				delete this.todoEditing.editing
			}
			this.todoEditing = todo
			todo.editing = true

			tick(() => document.getElementById(todo.id).focus())
		},

		validateEditingTodo (todo) {
			if (todo.title.trim()) {
				delete todo.editing
			} else {
				this.removeTodo(todo)
			}
			this.save(this.todos)
		},

		cancelEditingTodo (todo) {
			todo.title = todo.cachedTitle
			delete todo.cachedTitle
			delete todo.editing
		},

		toggleAllTodosComplete () {
			let allTodosComplete = this.allTodosComplete
			this.todos.forEach(todo => todo.completed = !allTodosComplete)
			this.save(this.todos)
		}
	}
}
