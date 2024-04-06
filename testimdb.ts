import { Movie } from "./movie";
//import {Professional} from "./professional"
import { IMDB } from "./imdb";

let mv1 : Movie = new Movie ("Once Upon a Time in Hollywood", 2019, "United States", "Comedy/Drama");
let mv2 : Movie = new Movie ("Fantasia", 1940, "United States", "Animation");

mv1.actors = [];
mv1.director ;
mv1.writer ;
mv1.language = "English";
mv1.platform = "Netflix";
mv1.isMCU = false;
mv1.mainCharacterName = "Margot, Leonardo and Brad";
mv1.producer = "Quentin Tarantino";
mv1.distributor = "Sony Pictures"

mv2.actors = [];
mv2.director ;
mv2.writer ;
mv2.language = "English";
mv2.platform = "Disney";
mv2.isMCU = false;
mv2.mainCharacterName = "Mickey Mouse";
mv2.producer = "The Walt Disney Company";
mv2.distributor = "RKO Pictures"

let peliculas : Movie[] = [mv1, mv2];

let imdb : IMDB = new IMDB(peliculas); 

console.log(imdb.showInfoMovie());

//ejercicio 6.1 - ¿Cual de las dos sería la correcta? ¿Tenemos alguna correcta?
// console.log(JSON.stringify(peliculas));
// console.log(JSON.stringify(imdb));

const imdbStr = JSON.stringify(imdb);
console.log(imdbStr);


//const fs = require('node:fs')
// const fs = require('node:fs/promises')
// const { writeFile } = require('fs/promises');
const fs = require("fs");
//const path = require("path");

fs.writeFile('./imdbBBDD.json', 'Guardo imdbStr \n método fs.writeFile', error => {
    if (error)
      console.log(error)
    else
      console.log('El archivo fue creado')
  })
  
  console.log('comprobando subida')

  fs.readFile('./imdbBBDD.json', (error, datos) => {
    if (error)
      console.log(error)
    else
      console.log(datos.toString())
  })
  
  console.log('Lectura del archivo')

  const imdbObj = JSON.parse(imdbStr,(key, value) => {
    if (typeof value === 'string') {
      return value.toUpperCase()
    } else {
      return value;}
    })

console.log(imdbObj);

