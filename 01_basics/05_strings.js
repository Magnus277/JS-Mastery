const name= "deb"
const repoCount= 10

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('de-b39')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf('d'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "    deb    "
console.log(newStringOne.trim());

const url = "https://deb.com/debayan%20das"

console.log(url.replace('%20', '-'));


console.log(gameName.split('-'));





