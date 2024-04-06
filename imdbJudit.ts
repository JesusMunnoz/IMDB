import { Movie } from "./movie";

export class Imdb {

    // Atributo
    //public peliculas: Movie[]= [];

    //Constructor
    constructor(public peliculas: Movie[]){
        this.peliculas = [];
    }

    //Método
    public pelicula: Movie;

    public agregarMovie (pelicula: Movie): Movie { 
        this.peliculas.push(pelicula)
        return pelicula}
}

let pelicula1: Movie = new Movie ("Gladiator", 2000, "EEUU","péplum y acción");

let peliculas: Imdb = new Imdb();

peliculas.agregarMovie(pelicula1);

console.log(peliculas);
