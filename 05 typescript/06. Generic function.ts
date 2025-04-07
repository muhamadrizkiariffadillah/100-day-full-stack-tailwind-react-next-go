// Basic generic function

import { log } from "console";

// without generic
function identity(arg: any): any {
  return arg;
}

// with generic
function identities<T>(arg: T): T {
  return arg;
}

identities("Kibo");

// Generic array
function firstElement<T>(arr: T[]): T {
  return arr[0];
}

// multiple parameter
function pair<K, V>(key: K, value: V): [K, V] {
  return [key, value];
}

pair("id", 1);

// Generic constraints
function logLength<T extends { length: number }>(arg: T): number {
  return arg.length;
}

logLength("kibo");

// Default generic type

function wrapInArray<T = string>(value: T): T[] {
  return [value];
}

// Generic interface
interface Box<T> {
  value: T;
}

const stringBox: Box<string> = { value: "Hello" };
const numberBox: Box<number> = { value: 123 };

// Generic class
class Container<T> {
  private _value: T;

  constructor(value: T) {
    this._value = value;
  }

  get Value(): T {
    return this._value;
  }
}

const stringContainer = new Container<string>("Kibo");
console.log("stringContainer:", stringContainer);

// Generic utility types.
// Partial<T>
// Readonly<T>
// Record<K,V>

const scores: Record<string, number> = {
  Alice: 100,
  Bob: 90,
};

console.log(scores);
