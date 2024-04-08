// Importación de modulos

import { Professional } from "./professional";
import { IMDB } from "./imdb";
import { Movie } from "./movie";

var readlineSync = require('readline-sync');

// Declaración de variables

let pf1: Professional = new Professional (" ", 0, 0, 0, false, " ", 0, " ");
let pf1Arr = pf1.actorInfo();

// Solicitud de datos por consola

var nombre = readlineSync.question(`¿Cual es el nombre? `);
var edad = readlineSync.question(`¿Cual es la edad? `);
var peso = readlineSync.question(`¿Cual es el peso? `);
var altura = readlineSync.question(`¿Cual es el altura? `);
var retirado = readlineSync.question(`¿Esta retirado? `);
var nacionalidad = readlineSync.question(`¿Cual es la nacionalidad? `);
var numOscar = readlineSync.question(`¿Cuantos oscar ha recibido? `);
var profesion = readlineSync.question(`¿Cual es la profesion? `);

// Subida de los datos requeridos por consola

pf1Arr.splice(0, 8, [nombre, edad, peso, altura, retirado, nacionalidad, numOscar, profesion]);

var mv1 : Movie = new Movie ("Once Upon a Time in Hollywood", 2019, "United States", "Comedy/Drama");

mv1.actors = pf1Arr

let peliculas : Movie[] = [mv1];

let imdb1 : IMDB = new IMDB(peliculas); 

const imdbStr = JSON.stringify(imdb1);

imdb1.escribirEnFicheroJSON("imdbBBDD.json");

console.log(imdbStr);