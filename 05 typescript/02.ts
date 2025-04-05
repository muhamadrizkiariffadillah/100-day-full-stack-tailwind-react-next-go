// Union type

let data: string | number;

data = "Hello";
console.log("data:", data);

data = 10;
console.log("data:", data);

// Union in function parameter
function print(data: string | number) {
  console.log("data:", data);
}

print("Hello");
print(100);

let values: (string | number)[] = ["Hello", 25, "Rizki"];

values.push(52);
console.log("values:", values);

// Literal

let orderStatus: "pending" | "proses" | "Shipped" | "Arrived";

orderStatus = "pending";

// Literal function
function setMode(mode: "light" | "dark") {
  console.log("mode:", mode);
}

setMode("dark");

// Type alias.

type Status = "Pending" | "Shipped" | "Arrived";

let order1: Status = "Pending";

console.log("order1:", order1);

// Alias for object

type User = {
  id: number;
  name: string;
  email: string;
};

let user1: User = {
  id: 1,
  name: "Muhamad Rizki Arif Fadillah",
  email: "muriarfad@gmail.com",
};

console.log("user1:", user1);

// Alias with parameter function
type Id = string | number;

function getUser(id: Id) {
  console.log("id:", id);
}

getUser(10);

type ArrayNumber = number[];

let num: ArrayNumber = [1, 2, 3, 4, 5];
