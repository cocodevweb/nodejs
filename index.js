 const fs = require("fs"); //fs <-- FileSystem
 const { multiply, divide } = require("./functions");
 const { chain } = require("mathjs");

 // readFileSync <-- lire le contenu d'un fichier
 // WriteFileSync <-- écrire un fichier avec du contenu

 fs.writeFileSync("test.txt", "Mon deuxième text !");
 console.log("Le fichier test.txt a été créer");

 const fileContent = fs.readFileSync("test.txt", "utf-8");
 console.log(fileContent);

 console.log(multiply(5, 10));
 console.log(divide(10, 5));
 
 console.log(chain(3)
 .add(4)
 .multiply(2)
 .divide(5)
 .done())
