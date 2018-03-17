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
        editingID: ""
    },
    computed: {
        classes: function () {
            return {
                showEdit: true,
                editing: this.editing
            }
        }
    },
    watch: {
        editingID: function (newID, oldID) {
            updateTodos = this.todos.filter(todo => todo.id !== newID);
            this.todos = updateTodos;
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
            } else if(this.input !== "") {
                this.todos.push({
                    id: Math.random(),
                    text: this.input
                });
            }
            this.clearInput();
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
            editingTodo.splice(0,editingTodo.findIndex(this.findValue));
            this.input = editingTodo[0];
            this.editing = true;
        }
    }

});