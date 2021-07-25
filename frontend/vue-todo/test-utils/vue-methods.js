/* Methods & Helpers */
module.exports = {
  addTodo(state) {
    const todo = {
      id: Math.random(), text: state.input
    }

    if (state.input !== '') {
      if (state.editing) {
        todo.id = 'editingID'
        // Mocking state change below
        state.editing = false
        state.editingID = '';
      }
      state.todos.push(todo);
    }

    state.input = ''
  }
}
