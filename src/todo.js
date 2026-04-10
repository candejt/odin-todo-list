
export class Todo{
    constructor(title, description, dueDate, priority){
        this.title=title;
        this.description=description;
        this.dueDate=dueDate;
        this.priority=priority;
        this.checkList=false;
    }
    toggleComplete(){
        if (this.checkList===true){
            this.checkList=false;
        }else{
            this.checkList=true;
        }
        console.log(`Task "${this.title}" is now: ${this.checkList ? 'Done' : 'Pending'}`);
    }
}