
export function renderProject(project){
    const content=document.getElementById('content');
    if(!content || !project) return;

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
        todoDiv.innerHTML=`
            <h4>${todo.title}</h4>
            <p>Date: ${todo.dueDate || 'No date'} | Priority: ${todo.priority || 'Normal'}</p>
            <p>Description: <br> ${todo.description}</p>
        `;
        if (todo.checklist.length>0){
            const ul = document.createElement('ul');
            ul.classList.add('sub-task-list');

            todo.checklist.forEach(item => {
                const li=document.createElement('li');
                li.innerHTML=`
                    <input type="checkbox" ${item.done ? 'checked': ''}>
                    <span>${item.text}</span>
                `;
                ul.appendChild(li);
            });
            todoDiv.appendChild(ul);
        }
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent="Delete";
        deleteBtn.classList.add('delete-btn');
        deleteBtn.dataset.title=todo.title;
        todoDiv.appendChild(deleteBtn);

        todoContainer.appendChild(todoDiv);
    });
};
export function renderSidebar(library){
    const projectContainer = document.getElementById('project-list');
    projectContainer.innerHTML='';

    library.getProjects().forEach(project => {
        const li = document.createElement('li');
        li.dataset.project = project.name;
        li.style.cursor= "pointer";

        const nameSpan = document.createElement('span');
        nameSpan.textContent = project.name;
        nameSpan.classList.add('project-name-text');
        li.appendChild(nameSpan);

        const projectDeleteBtn=document.createElement('button');
        projectDeleteBtn.textContent = "Delete";
        projectDeleteBtn.classList.add('project-delete-btn');
        projectDeleteBtn.dataset.project = project.name;
        projectDeleteBtn.style.cursor= "pointer";
        li.appendChild(projectDeleteBtn);

        if (project.todos.length > 0){
            const previewList = document.createElement('ul'); 
            previewList.classList.add('preview-tasks');
            previewList.style.pointerEvents = 'none';

            project.todos.forEach(todo => {
                const todoItem = document.createElement('li');
                todoItem.textContent=todo.title;
                previewList.appendChild(todoItem);
            });
            li.appendChild(previewList);
        };
        projectContainer.appendChild(li);
    });
};