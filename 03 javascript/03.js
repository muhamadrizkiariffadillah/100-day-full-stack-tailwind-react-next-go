for (let x = 1; x <= 10; x++) {
  console.log("x:", x);
}

let FruitArray = ["Snake fruit", "Dragon fruit", "Banana"];

// for (let x = 0; x < FruitArray.length; x++) {
//   console.log("Fruit:", FruitArray[x]);
// }

for (const element of FruitArray) {
  console.log("Fruit:", element);
}

// While

let count = 5;

while (count <= 10) {
  console.log("count:", count);
  count++;
}

// while with random condition
let on = true;
let counter = 0;

while (on) {
  counter++;
  let random = Math.random();

  console.log("Counter:", counter);

  if (random > 0.9) {
    on = false;
    console.log("Stop after: ", counter);
  }
}

// Do while loop

let z = 6;

do {
  console.log("z:", z);
  z++;
} while (z < 10);
