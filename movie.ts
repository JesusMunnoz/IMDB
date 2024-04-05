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
        this.actors;
        this.nationality = nationality;
        this.director;
        this.writer;
        this.language ;
        this.platform;
        this.isMCU ;
        this.mainCharacterName;
        this.producer ;
        this.distributor ;
        this.genre = genre;
    }

    //Metodos
        public infoMv(): string{
        return `Title: ${this.title}\nRelease year: ${this.releaseYear}\nActors: ${this.actors}\nNationality: ${this.nationality}\nDirector: ${this.director}\nWriter: ${this.writer}\nLanguage: ${this.language}\nPlatform: ${this.platform}\nIs a MCU: ${this.isMCU}\nMain Character: ${this.mainCharacterName}\nProducer: ${this.producer}\nDistrubutor: ${this.distributor}\nGenre: ${this.genre}\n`
    }

}

/*let pf1: Professional = new Professional ("Quentin Tarantino", 61, 85, 1.80, false, "United States", 2, "Actor/Director/Producer/Writer");
let pf2: Professional = new Professional ("Brad Pitt", 61, 80, 1.80, false, "United States", 2, "Actor");
let pf3: Professional = new Professional ("Leonardo DiCaprio", 49, 85, 1.70, false, "United States", 1, "Actor");
let pf4: Professional = new Professional ("Margot Robbie", 33, 80, 1.83, false, "Australia", 0, "Actor");


let mv1 : Movie = new Movie ("Once Upon a Time in Hollywood", 2019, "United States", "Comedy/Drama");

mv1.actors = [pf1, pf2, pf3, pf4];
mv1.director = pf1;
mv1.writer = pf1;
mv1.language = "English";
mv1.platform = "Netflix";
mv1.isMCU = false;
mv1.mainCharacterName = "Margot, Leonardo and Brad";
mv1.producer = "Quentin Tarantino";
mv1.distributor = "Sony Pictures"

console.log("\n" + mv1.infoMv());*/