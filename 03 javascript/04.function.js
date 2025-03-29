// Function declaration

function Greet(parameter) {
  console.log("parameter:", parameter);
}

Greet("Kibo");

// Function expression

const Hello = function (parameter) {
  return `Hello ${parameter}`;
};

console.log("Function expression: ", Hello("Kibo"));

// Arrow function

const Fuck = (fuck) => `Hello ${fuck}`;

console.log("fuck:", Fuck("You"));

// Immediately Invoked Function Expression (IIFE)

(function () {
  console.log("Hello");
})();
