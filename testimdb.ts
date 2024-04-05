import { Imdb } from "./imdb";
import { Movie } from "./movie";

let pelicula1: Movie = new Movie ("Gladiator", 2000, "EEUU","péplum y acción");
let pelicula2: Movie = new Movie ("Dune", 2024, "EEUU","ciencia ficción");

let peliculas1: Imdb = new Imdb();

peliculas1.agregarMovie(pelicula1);
peliculas1.agregarMovie(pelicula2);

console.log(peliculas1);