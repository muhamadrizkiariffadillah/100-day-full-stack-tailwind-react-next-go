import { json } from "stream/consumers";

abstract class Animal {
  abstract makeSound(): void;

  move(): void {
    console.log("Moving");
  }
}

class Dogs extends Animal {
  makeSound(): void {
    console.log("Bark!");
  }
}

interface Serializable {
  serialize(): string;
}

class User implements Serializable {
  constructor(private name: string, private email: string) {}
  serialize(): string {
    return JSON.stringify({ name: this.name, email: this.email });
  }
}
