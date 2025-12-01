const myArr = [0,1,2,3,4,5]
// console.log(myArr[0]);

// copies of arrays are done with shallow copy meaning references are same for both

const myHeroes = ["Batman", "Superman"]

const myArr2 = new Array(1,2,3,4)


//Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //adds 9 to the front of the array
// myArr.shift() //removes first element

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArr = myArr.join() // convert array to string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

console.log("A ", myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("C ", myArr);


