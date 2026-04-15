
export class Todo{
    constructor(title, dueDate, priority, description, checklist=[]){
        this.id = Date.now().toString();
        this.title=title;
        this.dueDate=dueDate;
        this.priority=priority;
        this.description=description;
        this.checklist=checklist;
        this.completed=false;
    }
    addChecklistItem(text){
        this.checklist.push({text:text, done:false});
    }
    toggleComplete(){
        if (this.completed===true){
            this.completed=false;
        }else{
            this.completed=true;
        }
        console.log(`Task "${this.title}" is now: ${this.completed ? 'Done' : 'Pending'}`);
    }
}
