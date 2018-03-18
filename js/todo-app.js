var app = new Vue({
    el: "#app",
    data: {
        todos: [
            {id: Math.random(), text: "Learn JavaScript" },
            {id: Math.random(), text: "Learn Vue" },
            {id: Math.random(), text: "Build something awesome" }
        ],
        input: "",
        editing: false,
        editingID: "",
        completed: false
    },
    computed: {
        editingClasses: function () {
            return {
                showEdit: true,
                editing: this.editing
            }
        }
    },
    methods: {
        clearInput: function() {
            this.input = "";
        },
        addTodo: function () {
            if(this.editing) {
                this.todos.push({
                    id: this.editingID,
                    text: this.input
                });
                this.editing = false;
                this.editingID = "";
            } else if(this.input !== "") {
                this.todos.push({
                    id: Math.random(),
                    text: this.input
                });
            }
            this.clearInput();
        },
        updateTodos: function (newID) {
            updatedTodos = this.todos.filter(todo => todo.id !== newID);
            this.todos = updatedTodos;
        },
        deleteTodo: function (id) {
            let newTodos = this.todos.filter(todo => todo.id !== id);
            this.todos = newTodos;
        },
        findValue: function (element) {
            return element !== undefined;
        },
        editTodo: function(id) {
            this.editingID = id;
            let editingTodo =this.todos.map(todo => {
                    if(todo.id === id) {
                        return todo.text;
                    }
                });
            this.updateTodos(id);
            editingTodo.splice(0,editingTodo.findIndex(this.findValue));
            this.input = editingTodo[0];
            this.editing = true;
        },
        createNewList: function(List) {
                List.forEach( value =>{
                    let id = value[1];
                    let obj =  {
                        id,
                        text: value[0]
                    };
                    this.todos.push(obj);
                    this.todos.shift();
                });
        },
        sortList: function () {
            let todoText = this.todos.map(item => [item.text, item.id]),
                sortedTodos = todoText.sort(); 
                this.createNewList(sortedTodos);
        },
        reverseList: function () {
            let todoText = this.todos.map(item => [item.text, item.id]),
                reverseTodos = todoText.reverse(); 
                this.createNewList(reverseTodos);
        }
    }

});