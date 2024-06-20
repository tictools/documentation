import AdviserBuilder from "./AdviserBuilder";
import Character from "./Character";
import FigtherBuilder from "./FighterBuilder";
import KingBuilder from "./KingBuilder";
import SquireBuilder from "./SquireBuilder";

// Create Joffrey Baratheon (king)
const joffreyBaratheon = new KingBuilder("Joffrey Baratheon")
  .setFamily("Baratheon")
  .setAge(25)
  .setYeasrsOfReign(5)
  .build();

// Create Jaime Lannister (fighter)
const jaimeLannister = new FigtherBuilder("Jaime Lannister")
  .setFamily("Lannister")
  .setAge(25)
  .setWeapon("Sword")
  .setDexterity(8)
  .build();

// Create Daenerys Targaryen (fighter)
const daenerysTargaryen = new FigtherBuilder("Daenerys Targaryen")
  .setFamily("Targaryen")
  .setAge(18)
  .setWeapon("Fire")
  .setDexterity(10)
  .build();

// Create Tyrion Lannister (Daenerys' advisor)
const tyrionLannister = new AdviserBuilder(
  "Tyrion Lannister",
  daenerysTargaryen
)
  .setFamily("Lannister")
  .setAge(22)
  .build();

// Create Bronn (Jaime's squire)
const bronn = new SquireBuilder("Bronn", daenerysTargaryen)
  .setFamily("Stokeworth")
  .setAge(45)
  .setComplacency(5)
  .build();

// Create an array with all the characters.
const characters = [
  joffreyBaratheon,
  jaimeLannister,
  daenerysTargaryen,
  bronn,
  // tyrionLannister,
];

// Make a function that takes this array as input and returns an array with the messages that the fighters communicate.
const getCharacterMessages = (listOfCharacters: Character[]) =>
  listOfCharacters.map((character) => {
    return {
      [character.getName()]: character.communicate(),
    };
  });

// Print the name of the series to which the characters belong to the console.
console.log("🚀 ~ ", Character.tvShow);

// Loop through messages array and print them by console.
const characterMessages = getCharacterMessages(characters);
characterMessages.forEach((message) => console.log(message));

// Kill Jaime and Tyrion.
jaimeLannister.die();
tyrionLannister.die();

// Check Jaime and Tyrion life status.
console.log({ jaimeLannisterLifeStatus: jaimeLannister.getLifeStatus() });
console.log({ tyrionLannisterLifeStatus: tyrionLannister.getLifeStatus() });
