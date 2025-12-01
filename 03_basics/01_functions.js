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
console.log(loginUserMessage()) //if nothing is passed then undefined, if "" if passed then blank space