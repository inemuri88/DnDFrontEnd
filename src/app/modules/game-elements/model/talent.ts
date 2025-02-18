class Talent {
    name: string; 
    description: string;
    prerequisites!: string;
    benefits: string;

    constructor(name: string, description: string, prerequisites: string, benefits: string){
        this.name = name;
        this.description = description;
        this.prerequisites = prerequisites;
        this.benefits = benefits;
    }
}