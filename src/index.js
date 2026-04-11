import "./styles.css";
import { Todo } from "./todo.js";
import { Project } from "./project.js";
import { renderProject  } from "./dom.js";
import { Library } from "./library.js";

const myLibrary = new Library();

const defaultProject = new Project("General");
myLibrary.addProject(defaultProject);

let currentProject = defaultProject;

renderProject(currentProject);

const form=document.getElementById('todo-form');

form.addEventListener('submit', (e)=>{
    const title=document.getElementById('title').value;
    const date=document.getElementById('dueDate').value;
    const priority=document.getElementById('priority').value;

    const newTask=new Todo(title, "Optional description", date, priority);

    currentProject.addTodo(newTask);

    renderProject(currentProject);

    form.reset();
})