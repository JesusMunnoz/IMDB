export class Professional{

    //Atributos
    public name: string;
    public age: number;
    public weight: number;
    public height: number;
    public isRetired: boolean;
    public nationality: string;
    public oscarsNumber: number;
    public profession: string;

    //Constructor
    constructor (name:string, age:number, weight:number, height:number, isRetired:boolean, nationality:string, oscarsNumber:number, profession:string){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }

    //Metodos

    public infoProf(): string{
        return (`Name: ${this.name}\nAge: ${this.age}\nWeight ${this.weight}\nHeight: ${this.height}\nRetired: ${this.isRetired}\nNationality: ${this.nationality}\nNumer of oscars: ${this.oscarsNumber}\nProfession: ${this.profession}\n`);
    }

    public nameActor(): string{
        return this.name;
    }
}

