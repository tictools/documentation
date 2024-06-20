import Adviser from "./Adviser";
import CharacterBuilder from "./CharacterBuilder";
import type { Serving } from "./types";

class AdviserBuilder extends CharacterBuilder {
  serving: Serving;

  constructor(name: string, serving: Serving) {
    super(name);
    this.serving = serving;
  }

  private getServing() {
    return this.serving;
  }

  build() {
    return new Adviser(
      this.getName(),
      this.getFamily(),
      this.getAge(),
      this.getServing()
    );
  }
}

export default AdviserBuilder;
