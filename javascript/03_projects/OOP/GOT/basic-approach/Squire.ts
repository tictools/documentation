import Character from "./Character";
import Fighter from "./Fighter";

class Squire extends Character {
  serving: Fighter;
  complaency: number;
  line: string = "I am a loser";

  constructor(
    name: string,
    family: string,
    age: number,
    serving: Fighter,
    complaency: number
  ) {
    super(name, family, age);
    this.serving = serving;
    this.complaency = complaency;
  }
}

export default Squire;
