
export class Library{
    constructor(){
        this.projects=[]
    }
    addProject(project){
        this.projects.push(project);
    }
    removeProject(projectName){
        this.projects=this.projects.filter(p => p.name !== projectName);
    }
    getProjects(){
        return this.projects;
    }
    findProject(){
        return this.projects.find(p => p.name===name);
    }
}