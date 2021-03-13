class Project{
    constructor(projectName, type, author){
        this.id = Date.now();
        this.isMarked = false;
        this.name = projectName;
        this.type = type;
        this.author = author;
    }
}

export default Project;