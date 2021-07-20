const app = new Vue({
  el: '#app',
  data: {
    todos: null,
    input: '',
    editing: false,
    editingID: ''
  },
  computed: {
    editingClasses() {
      return {
        showEdit: true,
        editing: this.editing
      }
    },
    disableAddBtn() {
      return this.input === ''
    },
    computedTodos() {
      localStorage.setItem('todos', JSON.stringify(this.todos))
      return this.todos
    }
  },
  created() {
    let storedTodos = localStorage.getItem('todos')

    if (storedTodos === null) {
      storedTodos = JSON.stringify([
        {id: Math.random(), text: 'Learn JavaScript', completed: false },
        {id: Math.random(), text: 'Learn Vue', completed: false },
        {id: Math.random(), text: 'Build something awesome', completed: false }
      ])
    }

    this.todos = JSON.parse(storedTodos)
  },
  methods: {
    clearInput() {
      this.input = '';
    },
    addTodo() {
      const todo = { id: Math.random(), text: this.input }

      if (this.input !== '') {
        if (this.editing) {
          todo.id = this.editingID
          this.editing = false;
          this.editingID = '';
        }
        this.todos.push(todo);
      }

      this.clearInput();
    },
    deleteTodo(id) {
      const newTodos = this.todos.filter(todo => todo.id !== id);
      this.todos = newTodos;
    },
    editTodo(id) {
      this.input = this.todos.find(todo => todo.id === id).text
      this.todos = this.todos.filter(todo => todo.id !== id);
      this.editingID = id;
      this.editing = true;
    },
    checkTodo(id) {
      const completedList = this.todos.map(todo => {
        if (todo.id === id) todo.completed = !todo.completed
        return todo;
      });

      this.todos = completedList
    },
    createNewList(List) {
      List.forEach(value =>{
        const id = value[1];
        const obj =  {
          id,
          text: value[0]
        };
        this.todos.push(obj);
        this.todos.shift();
      });
    },
    sortList() {
      this.todos = this.todos.sort((itemA, itemB) => (
        ('' + itemA.text).localeCompare(itemB.text)
      ))
    },
    reverseList() {
      this.todos = this.todos.reverse()
    }
  }

});

export default app
