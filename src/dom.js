
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
        const todoForm = document.createElement('form');
        todoForm.classList.add('todo-item-form');
        todoForm.dataset.todoId = todo.id;

        const todoDiv=document.createElement('div');
        todoDiv.classList.add('todo-item');
        todoDiv.innerHTML=`
            <div class="todo-header">
                <h4>${todo.title}</h4>
                <p>Date: ${todo.dueDate || 'No date'} | Priority: ${todo.priority || 'Normal'}</p>
                <button type="button" class="edit-btn">Edit</button>
            </div>
            <p class="todo-description">Description:<br> ${todo.description || ''}</p>
        `;
        const editView = document.createElement('div');
        editView.classList.add('todo-edit-view');

        editView.innerHTML = `
            <input type="text" name="edit-title" value="${todo.title}" required>
            <input type="date" name="edit-date" value="${todo.dueDate}">
            <select name="edit-priority">
                <option ${todo.priority === 'Not defined' ? 'selected' : ''}>Not defined</option>
                <option ${todo.priority === 'Low' ? 'selected' : ''}>Low</option>
                <option ${todo.priority === 'Medium' ? 'selected' : ''}>Medium</option>
                <option ${todo.priority === 'High' ? 'selected' : ''}>High</option>
            </select>
            <textarea name="edit-description">${todo.description || ''}</textarea>
            <div class="edit-actions">
                <button type="submit" class="save-edit-btn">Save</button>
                <button type="button" class="cancel-edit-btn">Cancel</button>
             </div>
        `;
        todoForm.appendChild(todoDiv);
        todoForm.appendChild(editView);

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

        todoContainer.appendChild(todoForm);
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