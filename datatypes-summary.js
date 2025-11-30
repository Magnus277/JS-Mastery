// Primitive

// 7 types : String,Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false

const bigNumber = 346287346473657387535n






// reference (Non-Primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"];

let obj = {
  name: "deb",
  age:22,
}

const myFunc = function() {
    console.log("hello world");
}

console.log(typeof bigNumber);
console.log(typeof myFunc);
console.log(typeof heroes);
