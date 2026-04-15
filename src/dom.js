
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
                <h3>${todo.title}</h3>
                <p>Date: ${todo.dueDate || 'No date'} | Priority: ${todo.priority || 'Normal'}</p>
                <div class="button-group">
                    <button type="button" class="edit-btn">Edit</button>
                    <button type="button" class="delete-task-btn" data-title="${todo.title}">Delete</button>
                </div>
            </div>
            <p class="todo-description">${todo.description || ''}</p>
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
            <ul class="sub-task-list edit-mode">
                ${todo.checklist.map((item, index) => `
                    <li>
                        <input type="checkbox" ${item.done ? 'checked' : ''} data-index="${index}" class="edit-check">
                        <input type="text" value="${item.text}" class="edit-check-text" data-index="${index}">
                    </li>
                `).join('')}
            </ul>
            <div class="form-footer">
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
        li.innerHTML = `
            <div class="project-header-container">
                <span class="project-name-text">${project.name}</span>
                <button class="delete-project-btn" data-name="${project.name}"></button>
            </div>
         `;        
    
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