import { Movie } from "./movie";
const fs = require("fs");

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

    public escribirEnFicheroJSON(imdbJson: string){
        let objImdb: IMDB= new IMDB(this.peliculas);
        const imdbStr = JSON.stringify(objImdb);
        fs.writeFile(imdbJson, imdbStr, error => {
            if (error)
              console.log(error)
            else
              console.log('El archivo fue creado')
          })
        
    }

    public obtenerInstanciaIMDB(imdbJson:string):void {
        fs.readFile(imdbJson, (error, datos) => {
            if (error)
              console.log(error)
            else
              console.log(datos.toString())
          })
          
          console.log('Lectura del archivo')
    }
}

/*let film0 : Movie = new Movie ("Once Upon a Time in Hollywood", 2019, "United States", "Comedy/Drama");
let film1 : Movie = new Movie ("Fantasia", 1940, "United States", "Animation");
let film2 : Movie = new Movie ("Avatar", 2009, "United States", "Action");

let peliculas : Movie[] = [film0, film1, film2];

let imdb : IMDB = new IMDB(peliculas); 

console.log(imdb.showInfoMovie());*/
