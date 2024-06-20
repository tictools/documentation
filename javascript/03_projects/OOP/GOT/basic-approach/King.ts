import Character from "./Character";

class King extends Character {
  yearsOfReign: number;
  line: string = "You all gonna die";

  constructor(name: string, family: string, age: number, yearsOfReign: number) {
    super(name, family, age);
    this.yearsOfReign = yearsOfReign;
  }
}

export default King;
