class Employee {
  constructor(public name: string) {}

  work(): void {
    console.log(`${this.name} is working.`);
  }
}

class Manager extends Employee {
  constructor(name: string, public teamSize: number) {
    super(name);
  }

  manage(): void {
    console.log(`${this.name} is managing ${this.teamSize} people`);
  }
}
