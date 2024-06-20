abstract class Character {
  static tvShow: string = "Game Of Thrones";

  name: string;
  family: string;
  age: number;
  isAlive: boolean = true;
  abstract line: string;

  constructor(name: string, family: string, age: number) {
    this.name = name;
    this.family = family;
    this.age = age;
  }

  communicate() {
    return this.line;
  }

  die() {
    this.isAlive = false;
  }
}

export default Character;
