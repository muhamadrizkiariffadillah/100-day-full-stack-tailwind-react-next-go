// Basic if-else

let Age = 25;

if (Age > 18) {
  console.log("Young");
} else {
  console.log("Old");
}

let Value = 50;

if (Value > 25) {
  console.log("D");
} else if (Value > 50) {
  console.log("C");
} else if (Value > 75) {
  console.log("B");
} else {
  console.log("A");
}

// Switch

let Day = "Monday";

switch (Day) {
  case "Sunday":
    console.log("Sunday");
    break;
  case "Tuesday":
    console.log("Tuesday");
    break;
  case "Monday":
    console.log("Monday");
    break;
}

// Switch without break

let randomNumber = 8;

switch (randomNumber) {
  case 1:
  case 2:
  case 3:
    console.log("small value");
    break;
  case 4:
  case 5:
  case 6:
  case 7:
    console.log("medium value");
    break;
  case 8:
  case 9:
  case 10:
    console.log("Big Value");
    break;
}
