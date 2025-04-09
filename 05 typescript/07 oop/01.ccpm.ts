// Class, Constructor, Property and Method

class product {
  name: string;
  price: string;

  constructor(name: string, price: string) {
    this.name = name;
    this.price = price;
  }

  display(): void {
    console.log(`${this.name}, ${this.price}`);
  }
}


