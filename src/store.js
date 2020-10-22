const store = {

	ls: window.localStorage,

	save (todos) {
		this.ls.setItem('todos', JSON.stringify(todos))
	},

	fetch () {
		return JSON.parse(this.ls.getItem('todos'))
	}

}

export default store
