import "./styles.css";
import { Todo } from "./todo.js";

const test = new Todo (
    "webpack",
    "hacer proyecto todo list",
    "2026-04-14",
    "Alta"
);
console.log ("estado inicial:", test.checkList);
test.toggleComplete();
console.log("estado despues de primer click:",test.checkList)
console.log(test)