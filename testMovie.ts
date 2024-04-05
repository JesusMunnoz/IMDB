import { Professional } from "./professional";
import { Movie } from "./movie";

let pf1: Professional = new Professional ("Quentin Tarantino", 61, 85, 1.80, false, "United States", 2, "Actor/Director/Producer/Writer");
let pf2: Professional = new Professional ("Brad Pitt", 61, 80, 1.80, false, "United States", 2, "Actor");
let pf3: Professional = new Professional ("Leonardo DiCaprio", 49, 85, 1.70, false, "United States", 1, "Actor");
let pf4: Professional = new Professional ("Margot Robbie", 33, 80, 1.83, false, "Australia", 0, "Actor");



let mv1 : Movie = new Movie ("Once Upon a Time in Hollywood", 2019, "United States", "Comedy/Drama");

//console.log(mv1.filmActors(pf1));

mv1.actors = [pf1, pf2, pf3, pf4]; //Mostrara   >>>  [object Object],[object Object],[object Object],[object Object]
mv1.director = pf1;  //Mostrara   >>>  [object Object]
mv1.writer = pf1;  //Mostrara   >>>  [object Object]
mv1.language = "English";
mv1.platform = "Netflix";
mv1.isMCU = false;
mv1.mainCharacterName = "Margot, Leonardo and Brad";
mv1.producer = "Quentin Tarantino";
mv1.distributor = "Sony Pictures"

console.log("\n" + mv1.infoMv());
