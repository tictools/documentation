abstract class Character {
  static tvShow: string = "Game Of Thrones";

  private name: string;
  private family: string;
  private age: number;
  private isAlive: boolean = true;
  abstract line: string;

  constructor(name: string, family: string, age: number) {
    this.name = name;
    this.family = family;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  getFamily() {
    return this.family;
  }

  getAge() {
    return this.age;
  }

  getLifeStatus() {
    return this.isAlive;
  }

  getLine() {
    return this.line;
  }

  setName(name: string) {
    this.name = name;
  }

  setFamily(family: string) {
    this.family = family;
  }

  setAge(age: number) {
    this.age = age;
  }

  setLifeStatus(status: boolean) {
    this.isAlive = status;
  }

  setLine(line: string) {
    this.line = line;
  }

  communicate() {
    return this.line;
  }

  die() {
    this.isAlive = false;
  }
}

export default Character;
