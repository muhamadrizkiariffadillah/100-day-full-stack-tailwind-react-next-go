class Shape {
  getArea(): number {
    return 0;
  }
}

class Square extends Shape {
  constructor(private length: number) {
    super();
  }
  getArea(): number {
    return this.length * this.length;
  }
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const shapes: Shape[] = [new Square(4), new Circle(10)];

shapes.forEach((shape) => console.log(shape.getArea()));
