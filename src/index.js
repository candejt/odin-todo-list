import "./styles.css";
import { Todo } from "./todo.js";
import { Project } from "./project.js";
import { renderProject  } from "./dom.js";

const houseProject= new Project ("House");

const task1 = new Todo (
    "Clean kitchen",
    "Remember oven",
    "Today",
    "High"
);
const task2 = new Todo (
    "Buy dog's food",
    "Try new brand",
    "Tomorrow",
    "Low"
);

houseProject.addTodo(task1);
houseProject.addTodo(task2);
renderProject(houseProject);

const form=document.getElementById('todo-form');

form.addEventListener('submit', (e)=>{
    const title=document.getElementById('title').value;
    const date=document.getElementById('dueDate').value;
    const priority=document.getElementById('priority').value;

    const newTask=new Todo(title, "Optional description", date, priority);

    houseProject.addTodo(newTask);

    renderProject(houseProject);

    form.reset();
})