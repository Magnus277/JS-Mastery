const user = {
    username: "debayan",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`); //this is used to refer to current context
        console.log(this); // will print the current object context
    }
}

// user.welcomeMessage()
// user.username = "sam" //changed the context
// user.welcomeMessage()

// console.log(this); //this is node environment, this refers to empty object here, no global context



// function chai() {
//   let username = "hitesh"
//   console.log(this.username); //undefined, contexts work on objects only
// }

// chai()



const chai = () => {
  let username = "hitesh"
  console.log(this); 
}

// chai()


// const addTwo = (num1,num2) => {
//   return num1+num2 //explicit return 
// }

// const addTwo = (num1,num2) => num1+num2 //implicit return, let me know that you are returning something, so dont need return statement
// const addTwo = (num1,num2) => (num1+num2) //dont need return statement if used curly braces ()

const addTwo = (num1,num2) => ({username: "debayan"}) //to return objects, be sure to enclose it with curlies ().



console.log(addTwo(3,4))


const myArray = [2,5,3,7,8]

// myArray.forEach(() => {})
