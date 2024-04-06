import { Movie } from "./movie";

export class IMDB{
    //Atributos 
    public peliculas : Movie[]

    //Constructor
    constructor (peliculas: Movie[]){
        this.peliculas = peliculas;
    }

    //Metodos
    public showInfoMovie(): string[]{
        let arrMovie: string[] = [];
        for (let film of this.peliculas){
            arrMovie.push(film.infoMv());
        }
        return arrMovie;
    }
}

/*let film0 : Movie = new Movie ("Once Upon a Time in Hollywood", 2019, "United States", "Comedy/Drama");
let film1 : Movie = new Movie ("Fantasia", 1940, "United States", "Animation");
let film2 : Movie = new Movie ("Avatar", 2009, "United States", "Action");

let peliculas : Movie[] = [film0, film1, film2];

let imdb : IMDB = new IMDB(peliculas); 

console.log(imdb.showInfoMovie());*/
