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
    const description = document.getElementById('description').value;
    const checklistData=document.getElementById('checklist-input').value;

    const newTask=new Todo(title, date, priority, description);

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
    renderSidebar(myLibrary);

    form.reset();
});
//
renderSidebar(myLibrary);

const projectList = document.getElementById('project-list');

projectList.addEventListener('click', (e) => {
    const projectLi = e.target.closest('li[data-project]');
    if (!projectLi) return;

    const name = projectLi.dataset.project;
    console.log(name);

    if (e.target.classList.contains('delete-project-btn')){
        myLibrary.removeProject(name);

        if (currentProject.name === name){
            currentProject=myLibrary.projects[0] || null;
        }
        saveData();
        renderSidebar(myLibrary);
        renderProject(currentProject);
        return;
    }
    const projectFound = myLibrary.findProject(name);
    if (projectFound){
        currentProject=projectFound;
        renderProject(currentProject);
    }
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
    if(e.target.classList.contains('delete-task-btn')){
        const deleteTitle=e.target.dataset.title;

        currentProject.removeTodo(deleteTitle);
        renderProject(currentProject);
    }
    saveData();
    renderSidebar(myLibrary);
});
//
const content = document.querySelector('#content');
content.addEventListener('click', (e) => {
    if (e.target.classList.contains('edit-btn')) {
        const form = e.target.closest('.todo-item-form');
        if (form) {
            form.classList.add('editing');
        
            const todoId = form.dataset.todoId; 
            
            console.log("ID recuperado con éxito:", todoId);
        }
    }
    if (e.target.classList.contains('cancel-edit-btn')) {
        const form = e.target.closest('.todo-item-form');
        form.classList.remove('editing');
    }
});
//
content.addEventListener('submit', (e) => {
    if (e.target.classList.contains('todo-item-form')) {
        e.preventDefault();
        const form = e.target;
        const todoId = form.dataset.todoId;

        const newTitle = form.querySelector('[name="edit-title"]').value;
        const newDate = form.querySelector('[name="edit-date"]').value;
        const newPriority = form.querySelector('[name="edit-priority"]').value;
        const newDescription = form.querySelector('[name="edit-description"]').value;

        currentProject.updateTask(todoId, newTitle, newDate, newPriority, newDescription);

        saveData();
        renderProject(currentProject);
    }
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
                todoItem.dueDate,
                todoItem.priority,
                todoItem.description,
                todoItem.checklist
            );
            todo.id = todoItem.id
            project.addTodo(todo);
        });
        return project;
    });
    currentProject=myLibrary.projects[0];
}else{
    const defaultProject=new Project("Default");

    const defaultTask = new Todo(
        "Hello! I'm an example",
        "2026-12-31",
        "Medium",
        "Write something awesome",
        [
            { text: "Journaling", done: false},
            { text: "Napping", done: false},
            { text: "Eat ice cream", done: false}
        ]    
    )
    defaultProject.addTodo(defaultTask);
    myLibrary.addProject(defaultProject);
    currentProject=defaultProject;

    saveData();
}
renderSidebar(myLibrary);
renderProject(currentProject);

