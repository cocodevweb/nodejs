 const fs = require("fs"); //fs <-- FileSystem

 // readFileSync <-- lire le contenu d'un fichier
 // WriteFileSync <-- écrire un fichier avec du contenu

 fs.writeFileSync("test.txt", "Mon deuxième text !");
 console.log("Le fichier test.txt a été créer");

 const fileContent = fs.readFileSync("test.txt", "utf-8");
 console.log(fileContent);
