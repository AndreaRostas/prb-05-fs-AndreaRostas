import fs from 'fs';
import path from 'path';

const dataPath = './data';

function findRobotFile(dirPath) {
  try {
    const subfolders = fs.readdirSync(dirPath); // Listet alle Inhalte des Ordners auf

    for (const sub of subfolders) {
      const subPath = path.join(dirPath, sub); // Erstellt den vollständigen Pfad zum Unterordner oder zur Datei
      const stat = fs.statSync(subPath); // Holt sich die Informationen über den Pfad (ob Datei oder Ordner)

      if (stat.isDirectory()) {
        // Wenn es ein Verzeichnis ist, gehe rekursiv weiter
        findRobotFile(subPath); // Durchsuche den Unterordner
      } else if (stat.isFile()) {
        // Wenn es eine Datei ist, lese ihren Inhalt
        const fileContent = fs.readFileSync(subPath, 'utf8');

        if (fileContent.includes('robot')) {
          // Wenn der Inhalt der Datei das Wort "robot" enthält, gib den Pfad aus
          console.log('Gefunden in:', subPath);
          return; // Stoppt die Suche nach der ersten gefundenen Datei
        }
      }
    }
  } catch (err) {
    console.error('Fehler beim Zugriff auf den Ordner:', err.message); // Gibt eine Fehlermeldung aus, falls der Zugriff auf den Ordner fehlschlägt
  }
}

findRobotFile(dataPath); // Ruft die Funktion mit dem Ordner "data" auf
