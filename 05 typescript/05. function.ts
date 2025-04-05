// Basic function
function Hello(name: string): string {
  return `Hello ${name}`;
}

Hello("Kibo");

// Function parameter type

function add(a: number, b: number): number {
  return a + b;
}

add(1, 5);

// Optional parameter
function sayHello(name?: string): string {
  return `Hello! ${name}`;
}

sayHello();
sayHello("Kibo");

// Default parameter
function multiply(a: number, b: number = 10): number {
  return a * b;
}

// If the function does not have a return use void
function logMessage(message: string): void {
  console.log("message:", message);
}

// function expression

const square = function (x: number): number {
  return x * x;
};

square(20);

// arrow function

const squareArrow = (x: number) => x * x;

squareArrow(15);

// Function with rest parameter.

function sumAll(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
sumAll(1, 2, 3, 4, 5);

// Higher-order function (function as a parameter)

function applyOperation(
  a: number,
  b: number,
  operation: (x: number, y: number) => number
): number {
  return operation(a, b);
}
const kali = (x: number, y: number): number => x * y;

// Function as a type
type MathOperation = (a: number, b: number) => number;
const substract: MathOperation = (x, y) => x - y;
console.log("substract:", substract(1, 3));

interface Formatter {
  (value: string): string;
}

const toUpperCase: Formatter = (value) => value.toUpperCase();
console.log("toUpperCase:", toUpperCase("kibo"));
