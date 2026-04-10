
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
}