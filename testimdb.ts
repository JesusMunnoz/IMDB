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