import CharacterBuilder from "./CharacterBuilder";
import Fighter from "./Fighter";

class FigtherBuilder extends CharacterBuilder {
  private weapon: string = "";
  private dexterity: number = 0;

  private getWeapon() {
    return this.weapon;
  }

  private getDexterity() {
    return this.dexterity;
  }

  setWeapon(weapon: string) {
    this.weapon = weapon;
    return this;
  }

  setDexterity(dexterity: number) {
    this.dexterity = dexterity;
    return this;
  }

  build() {
    return new Fighter(
      this.getName(),
      this.getFamily(),
      this.getAge(),
      this.getWeapon(),
      this.getDexterity()
    );
  }
}

export default FigtherBuilder;
