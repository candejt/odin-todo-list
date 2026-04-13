
export class Project{
    constructor (name){
        this.name=name;
        this.todos=[];
    }
    addTodo(todoObject){
        this.todos.push(todoObject);
    }
    removeTodo(todoTitle){
        this.todos=this.todos.filter(todo=>todo.title !== todoTitle);
    }
    getTodos(){
        return this.todos;
    }
    updateTask(id, newTitle, newDate, newPriority, newDescription){
        const taskIndex = this.todos.findIndex(todo => todo.id === id);
        if (taskIndex !== -1) {
            this.todos[taskIndex].title = newTitle;
            this.todos[taskIndex].dueDate = newDate;
            this.todos[taskIndex].priority = newPriority;
            this.todos[taskIndex].description = newDescription;
        }
    }
}