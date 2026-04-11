
export class Todo{
    constructor(title, description, dueDate, priority){
        this.title=title;
        this.description=description;
        this.dueDate=dueDate;
        this.priority=priority;
        this.checklist=[];
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