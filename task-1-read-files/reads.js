import fs from "fs";

function printFile(filename) {
  try {//Liest die datei und synchron unf speichere den Inhalt
    const data = fs.readFileSync(filename, 'utf8');
  
console.log(data); // Gib den Inhalt der Datei auf der Konsole aus

  } catch (error) {
    //Falls ein Fehler auftritt 
    console.error('Fehler beim Lesen der Datei ${filename}:', error.message);
  }
}

// Ruft die Funktion für  die datei auf
printFile("data1.txt");
printFile("data3.txt");
