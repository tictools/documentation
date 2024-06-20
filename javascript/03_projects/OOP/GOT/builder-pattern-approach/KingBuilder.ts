import CharacterBuilder from "./CharacterBuilder";
import King from "./King";

class KingBuilder extends CharacterBuilder {
  private yeasrsOfReign: number = 0;

  private getYearsOfReign() {
    return this.yeasrsOfReign;
  }

  setYeasrsOfReign(yeasrsOfReign: number) {
    this.yeasrsOfReign = yeasrsOfReign;
    return this;
  }

  build() {
    return new King(
      this.getName(),
      this.getFamily(),
      this.getAge(),
      this.getYearsOfReign()
    );
  }
}

export default KingBuilder;
