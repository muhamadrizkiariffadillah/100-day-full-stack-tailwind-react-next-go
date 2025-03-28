let myFullName: string = "Muhamad Rikzi";
let myAge: number = 25;
const PI: number = 3.14;
let isHandsome: boolean = true;

console.log(myFullName);
console.log(myAge);
console.log(PI);
console.log(isHandsome);

let text: string = "text";
let numbers: number = 21;
let arrayNumber: number[] = [1, 2, 3, 4, 5, 6];
let tuple: [string, number] = [text, numbers];
enum colors {
  Red,
  Green,
  Blue,
}
let favoriteColor: colors = colors.Blue;
let nil: null = null;
let unDefine: undefined = undefined;
let terserah: any = "Full-stack";

console.log("Text:", text);
console.log("numbers:", numbers);
console.log("arrayNumber:", arrayNumber);
console.log("tuple:", tuple);
console.log("favoriteColor:", favoriteColor);
console.log("nil:", nil);
console.log("terserah:", terserah);

let x = 10,
  y = 20;

console.log("x+y:", x + y);
console.log("x-y:", x - y);
console.log("x/y:", x / y);
console.log("x*y:", x * y);
console.log("x%y:", x % y);

console.log("x>y:", x > y);
console.log("x>=y:", x >= y);
console.log("x<y:", x < y);
console.log("x<=y:", x <= y);
console.log("x==y:", x == y);
console.log("x===y:", x === y);

console.log("true&&true:", true && true);
console.log("true&&true:", true || true);
console.log("true&&true:", !true);

// A	B	A ^ B
// 0	0	0
// 0	1	1
// 1	0	1
// 1	1	0

// XOR Operation
let j = 5,
  k = 3;

let result = j ^ k;

console.log("result:", result);

function xorEncryptDecrypt(data, key) {
  let result: string = "";
  for (let i = 0; i < data.length; i++) {
    result += String.fromCharCode(data.charCodeAt(i) ^ key);
  }
  return result;
}

let userId = "12345";
let key: number = 50;

let encrypt = xorEncryptDecrypt(userId, key);
let decrypt = xorEncryptDecrypt(encrypt, key);

console.log("encrypt:", encrypt);
console.log("decrypt:", decrypt);
