import "./styles.css";
import { Todo } from "./todo.js";
import { Project } from "./project.js";
import { renderProject, renderSidebar } from "./dom.js";
import { Library } from "./library.js";
//
let myLibrary = new Library();
let currentProject;

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
    saveData()
});
//
const addProjectBtn=document.getElementById('add-project-btn');
const newProjectInput=document.getElementById('new-project-name');

addProjectBtn.addEventListener('click',()=>{
    const name=newProjectInput.value.trim();

    if(name !== ''){
        const newProject = new Project(name);
        myLibrary.addProject(newProject);

        renderSidebar(myLibrary);

        newProjectInput.value="";
    }
    saveData()
});
//
document.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete-btn')){
        const deleteTitle=e.target.dataset.title;

        currentProject.removeTodo(deleteTitle);
        renderProject(currentProject);
    }
    saveData()
});
//
function saveData(){
    localStorage.setItem('myTodoLibrary', JSON.stringify(myLibrary.projects));
}
//
const savedData= JSON.parse(localStorage.getItem('myTodoLibrary'));

if (savedData){
    myLibrary.projects = savedData.map(projItem => {
        const project = new Project(projItem.name);

        projItem.todos.forEach(todoItem => {
            const todo = new Todo(
                todoItem.title,
                todoItem.description,
                todoItem.dueDate,
                todoItem.priority,
                todoItem.checklist
            );
            project.addTodo(todo);
        });
        return project;
    });
    currentProject=myLibrary.projects[0];
}else{
    const defaultProject=new Project("Default");
    myLibrary.addProject(defaultProject);
    currentProject=defaultProject;
}
renderSidebar(myLibrary);
renderProject(currentProject);