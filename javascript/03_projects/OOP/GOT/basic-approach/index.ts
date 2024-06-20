import Character from "./Character";
import Fighter from "./Fighter";
import King from "./King";
import Squire from "./Squire";

// Create Joffrey Baratheon (king)
const joffreyBaratheon = new King("Joffrey Baratheon", "Baratheon", 25, 5);

// Create Jaime Lannister (fighter)
const jaimeLannister = new Fighter(
  "Jaime Lannister",
  "Lannister",
  25,
  "Sword",
  8
);

// Create Daenerys Targaryen (fighter)
const daenerysTargaryen = new Fighter(
  "Daenerys Targaryen",
  "Targaryen",
  22,
  "Fire",
  5
);

// Create Tyrion Lannister (Daenerys' advisor)
const tyrionLannister = new Squire(
  "Tyrion Lannister",
  "Lannister",
  35,
  daenerysTargaryen,
  5
);

// Create Bronn (Jaime's squire)
const bronn = new Squire("Bronn", "Stokeworth", 45, jaimeLannister, 5);

// Create an array with all the characters.
const characters = [
  joffreyBaratheon,
  jaimeLannister,
  daenerysTargaryen,
  bronn,
  tyrionLannister,
];

// Make a function that takes this array as input and returns an array with the messages that the fighters communicate.
const getCharacterMessages = (listOfCharacters: Character[]): string[] =>
  listOfCharacters.map((character) => character.communicate());

// Print the name of the series to which the characters belong to the console.
console.log("🚀 ~ ", Character.tvShow);

// Loop through messages array and print them by console.
const characterMessages = getCharacterMessages(characters);
characterMessages.forEach((message) => console.log(message));

// Kill Jaime and Tyrion.
jaimeLannister.die();
tyrionLannister.die();
