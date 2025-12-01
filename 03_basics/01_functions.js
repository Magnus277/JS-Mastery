function sayMyName() {
  console.log("D");
  console.log("E");
  console.log("B");
}

// sayMyName() //name is function reference and () is excetute command


// function addTwoNumbers(number1 , number2) {
//     console.log(number1 + number2)
// }

// addTwoNumbers(4,4)
// addTwoNumbers(4,"4")
// addTwoNumbers(4,"a")


function addTwoNumbers(number1 , number2) {
    // let res = number1 + number2
    // return res

    return number1+number2
}


const res = addTwoNumbers(3,5)

// console.log("result: ",res);

function loginUserMessage(username = "deb") {
  // if(username === undefined){
  //   console.log("Please enter a username");
  //   return 
  // }
  if(!username){
    console.log("Please enter a username");
    return 
  }
    return `${username} just logged in`
}

// console.log(loginUserMessage("deb"))
// console.log(loginUserMessage()) //if nothing is passed then undefined, if "" if passed then blank space


function calculateCartPrice(val1,val2, ...num1) { // ...num1 => khule mein mil rha hain, inko bundle karo aur bhej do
    return num1
}

console.log(calculateCartPrice(200,400,500, 2000))

const user = {
  username: "debayan",
  price: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
  username: "Sam",
  price: 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray) {
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,99,897]));
