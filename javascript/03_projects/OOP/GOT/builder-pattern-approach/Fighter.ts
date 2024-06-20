import Character from "./Character";

class Fighter extends Character {
  weapon: string;
  dexterity: number;
  line: string = "First I hit and then I ask";

  constructor(
    name: string,
    family: string,
    age: number,
    weapon: string,
    dexterity: number
  ) {
    super(name, family, age);
    this.weapon = weapon;
    this.dexterity = dexterity;
  }
}

export default Fighter;
