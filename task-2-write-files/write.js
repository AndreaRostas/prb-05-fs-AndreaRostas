import fs from "fs";

function updateFile(filename) {

     // Lies die Datei und speichere den Inhalt als String
     const data = fs.readFileSync(filename, 'utf8')
   
     // Füge ein '*' zum Inhalt hinzu
     const updatedData = `${data} *`;
 
     // Schreibe den geänderten Inhalt zurück in die Datei
     fs.writeFileSync(filename, updatedData, 'utf8');
     
  }


updateFile('review.txt');

// Versuche, updateFile mit der Datei 'star.txt' aufzurufen (dies sollte zum Absturz führen)
//  updateFile('star.txt');

