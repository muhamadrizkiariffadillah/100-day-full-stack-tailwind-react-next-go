class Engine {
  start(): void {
    console.log("Engine started!");
  }
}

class Vechile {
  constructor(private engine: Engine) {}
  drive(): void {
    this.engine.start();
    console.log("Vechile is moving");
  }
}

const car = new Vechile(new Engine());
car.drive();
