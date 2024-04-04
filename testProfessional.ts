import {Professional} from "./professional"

let pf1: Professional = new Professional ("Quentin Tarantino", 61, 85, 1.80, false, "United States", 2, "Actor");
let pf2: Professional = new Professional ("Quentin Tarantino", 61, 85, 1.80, false, "United States", 2, "Director");
let pf3: Professional = new Professional ("Quentin Tarantino", 61, 85, 1.80, false, "United States", 2, "Producer");
let pf4: Professional = new Professional ("Quentin Tarantino", 61, 85, 1.80, false, "United States", 2, "Writer");
let pf5: Professional = new Professional ("Brad Pitt", 61, 80, 1.80, false, "United States", 2, "Actor");
let pf6: Professional = new Professional ("Leonardo DiCaprio", 49, 85, 1.70, false, "United States", 1, "Actor");
let pf7: Professional = new Professional ("Margot Robbie", 33, 80, 1.83, false, "Australia", 0, "Actor");


console.log(pf1.infoProf());
console.log(pf2.infoProf());
console.log(pf3.infoProf());
console.log(pf4.infoProf());
console.log(pf5.infoProf());
console.log(pf6.infoProf());
console.log(pf7.infoProf());

console.log(pf1.name);

console.log(pf1.nameActor());