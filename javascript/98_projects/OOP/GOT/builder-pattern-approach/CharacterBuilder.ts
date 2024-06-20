abstract class CharacterBuilder {
  private name: string;
  private age: number = 0;
  private family: string = "";

  constructor(name: string) {
    this.name = name;
  }

  protected getName() {
    return this.name;
  }

  protected getAge() {
    return this.age;
  }

  protected getFamily() {
    return this.family;
  }

  setAge(age: number) {
    this.age = age;
    return this;
  }

  setFamily(family: string) {
    this.family = family;
    return this;
  }
}

export default CharacterBuilder;
