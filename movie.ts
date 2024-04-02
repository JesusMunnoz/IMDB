import {Professional} from "./professional"

export class Movie{
    //Atributos
    public title: string;
    public releaseYear: number;
    public actors: Professional[];
    public nationality: string;
    public director: Professional;
    public writer: Professional;
    public language: string;
    public platform: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;

    //Costructor
    constructor (title:string, releaseYear: number, nationality: string, genre: string){
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors = []
        this.nationality = nationality;
        this.director = Professional[pf2.infoProf()];
        this.writer = pf4;
        this.language = "English";
        this.platform = "Netflix";
        this.isMCU = false;
        this.mainCharacterName = "Margot Robbie, Leonardo DiCaprio and Brad Pitt.";
        this.producer = "Quentin Tarantino";
        this.distributor = "Sony Pictures";
        this.genre = genre;
    }

    //Metodos
    public filmActors(actors : Professional):void {
        console.log(this.actors.push(actors));
    }

    public infoMv(): string{
        return `Title: ${this.title}\nRelease year: ${this.releaseYear}\nActors: ${this.actors}\nNationality: ${this.nationality}\nDirector: ${this.director}\nWriter: ${this.writer}\nLanguage: ${this.language}\nPlatform: ${this.platform}\nIs a MCU: ${this.isMCU}\nMain Character: ${this.mainCharacterName}\nProducer: ${this.producer}\nDistrubutor: ${this.distributor}\nGenre: ${this.genre}\n`
    }
}

let pf1: Professional = new Professional ("Quentin Tarantino", 61, 85, 1.80, false, "United States", 2, "Actor");
let pf2: Professional = new Professional ("Quentin Tarantino", 61, 85, 1.80, false, "United States", 2, "Director");
let pf3: Professional = new Professional ("Quentin Tarantino", 61, 85, 1.80, false, "United States", 2, "Producer");
let pf4: Professional = new Professional ("Quentin Tarantino", 61, 85, 1.80, false, "United States", 2, "Writer");
let pf5: Professional = new Professional ("Brad Pitt", 61, 80, 1.80, false, "United States", 2, "Actor");
let pf6: Professional = new Professional ("Leonardo DiCaprio", 49, 85, 1.70, false, "United States", 1, "Actor");
let pf7: Professional = new Professional ("Margot Robbie", 33, 80, 1.83, false, "Australia", 0, "Actor");

let flmActrs : Movie = new Movie();

let mv1 : Movie = new Movie ("Once Upon a Time in Hollywood", 2019, "United States", "Comedy/Drama");
console.log(mv1.infoMv());


