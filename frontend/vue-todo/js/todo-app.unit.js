const { addTodo } = require('../test-utils/vue-methods')

describe('@vue/TodoApp logic tests', () => {
  let state
  beforeEach(() => {
    /* Mock state */
    state = {
      editing: false,
      editingID: '',
      input: '',
      todos: [
        {id: Math.random(), text: 'Learn JavaScript', completed: false },
        {id: Math.random(), text: 'Learn Vue', completed: false },
        {id: Math.random(), text: 'Build something awesome', completed: false }
      ]
    }
  })

  describe('When adding a todo', () => {
    it('should add todo', () => {
      state.input = 'New Todo'
      expect(state.todos).toHaveLength(3)

      addTodo(state)

      expect(state.todos).toHaveLength(4)
      expect(state.input).toEqual('')
    })
  })
})
