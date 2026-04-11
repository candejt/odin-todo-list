
export function renderProject(project){
    const content=document.getElementById('content');

    content.innerHTML='';

    const projectTitle=document.createElement('h2');
    projectTitle.textContent=project.name;
    content.appendChild(projectTitle);

    const todoContainer=document.createElement('div');
    todoContainer.classList.add('todo-list');
    content.appendChild(todoContainer);

    project.todos.forEach(todo=>{
        const todoDiv=document.createElement('div');
        todoDiv.classList.add('todo-item');
        todoDiv.textContent=`${todo.title} - ${todo.dueDate}`;
        todoContainer.appendChild(todoDiv);
    });
}