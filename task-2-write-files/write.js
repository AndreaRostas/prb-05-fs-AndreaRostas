import fs from "fs";

function updateFile(filename) {
  try{
     // Lies die Datei und speichere den Inhalt als String
     const data = fs.readFileSync(filename, 'utf8');
    
     // Füge ein '*' zum Inhalt hinzu
     const updatedData = data + '*';
 
     // Schreibe den geänderten Inhalt zurück in die Datei
     fs.writeFileSync(filename, updatedData, 'utf8');
     console.log(`Datei ${filename} erfolgreich aktualisiert.`);
  }catch (error){
    // Wenn ein Fehler auftritt (z. B. Datei nicht gefunden), stoppt das Programm und gibt eine Fehlermeldung aus
    console.error(`Fehler beim Bearbeiten der Datei ${filename}:`, error.message);
    process.exit(1); // Beendet das Programm mit einem Fehlercode
  }
}

updateFile('review.txt');
updateFile('review.txt');
updateFile('review.txt');
updateFile('review.txt');


// Versuche, updateFile mit der Datei 'star.txt' aufzurufen (dies sollte zum Absturz führen)
updateFile('star.txt');

