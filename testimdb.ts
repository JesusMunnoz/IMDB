import { Imdb } from "./imdb";
import { Movie } from "./movie";

let pelicula1: Movie = new Movie ("Gladiator", 2000, "EEUU","péplum y acción");

let peliculas: Imdb = new Imdb();

peliculas.agregarMovie(pelicula1);

console.log(peliculas);