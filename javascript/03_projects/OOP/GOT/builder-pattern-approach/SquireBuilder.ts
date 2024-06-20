import CharacterBuilder from "./CharacterBuilder";
import Fighter from "./Fighter";
import Squire from "./Squire";

class SquireBuilder extends CharacterBuilder {
  private serving: Fighter;
  private complacency: number = 0;

  constructor(name: string, serving: Fighter) {
    super(name);
    this.serving = serving;
  }

  private getServing() {
    return this.serving;
  }

  private getComplacency() {
    return this.complacency;
  }

  setComplacency(complacency: number) {
    this.complacency = complacency;
    return this;
  }

  build() {
    return new Squire(
      this.getName(),
      this.getFamily(),
      this.getAge(),
      this.getServing(),
      this.getComplacency()
    );
  }
}

export default SquireBuilder;
