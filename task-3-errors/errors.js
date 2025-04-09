import fs from "fs";
console.clear();

const num = 31337;

const result = num; //() num is not a function

const lowered = String(num).toLowerCase(); // num.toLowerCase in not a function

// fs.readFileSync("file.txt", "utf8"); no such file.txt

try {
  const content = fs.readFileSync("file.txt", "utf8");
  console.log(content);
} catch (err) {
  console.error("Fehler beim Lesen der Datei:", err.message);
}

//tamagotchi was not defined
const tamagotchi = {
  eat: () => console.log("🍎 Nom nom nom"),
};

tamagotchi.eat();
