import "./styles.css";
import { Todo } from "./todo.js";
import { Project } from "./project.js";
import { renderProject, renderSidebar } from "./dom.js";
import { Library } from "./library.js";

//
const myLibrary = new Library();

const defaultProject = new Project("General");
myLibrary.addProject(defaultProject);

let currentProject = defaultProject;

renderProject(currentProject);

//
const form=document.getElementById('todo-form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const title=document.getElementById('title').value;
    const date=document.getElementById('dueDate').value;
    const priority=document.getElementById('priority').value;
    const checklistData=document.getElementById('checklist-input').value;

    const newTask=new Todo(title, "Optional description", date, priority);

    if (checklistData.trim() !== ""){
        const items = checklistData.split(',').map(item=>item.trim());
        items.forEach (itemText => {
            if (itemText !== ""){
                newTask.addChecklistItem(itemText);
            }
        });
    }
    currentProject.addTodo(newTask);
    renderProject(currentProject);

    form.reset();
});
//
renderSidebar(myLibrary);

const projectList = document.getElementById('project-list');

projectList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI'){
        const name = e.target.dataset.projectName;

        const projectFound = myLibrary.findProject(name);
        
        if (projectFound) {
            currentProject = projectFound;
            renderProject(currentProject)
        }
    }
});
//
