const user = {
  username: "debayan",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function(){
    // console.log("Got details");
    // console.log(`Username: ${this.username}`);
    // console.log(this); //current context
  }
}


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
  this.username = username
  this.loginCount = loginCount
  this.isLoggedIn = isLoggedIn

  this.greeting = function(){
    console.log(`Welcome ${this.username}`);
    
  }

  return this
}

const userOne = new User("deb", 12, true);
const userTwo = new User("deb", 11, false);
console.log(userOne);
console.log(userTwo);
