import "./styles.css";
import { Todo } from "./todo.js";
import { Project } from "./project.js";

const houseProject= new Project ("House");

const task1 = new Todo (
    "Clean kitchen",
    "Including oven",
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

console.log("My project:", houseProject);
console.log("Task List:", houseProject.getTodos());