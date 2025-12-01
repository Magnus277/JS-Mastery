// let a = 300

// if (true) {
//   let a = 10;
//   const b = 20;
//   console.log("Inner: ", a);
  
// }



// console.log(a);
// console.log(b);
// console.log(c); //var doesnt understand scopes


function one() {
  const username = "debayan"

  function two() {
      const website = "youtube"
      console.log(username);
  }
  // console.log(website);

  two()
  
}

// one()

if(true) {
  const username = "debayan"
  if(username == "debayan") {
    const website = " youtube"
    // console.log(username + website);
    
  }
  // console.log(website);
  
}

// console.log(username);


// *************************** Interesting !!! *********************************

console.log(addOne(5))
function addOne(num) {
    return num + 1
}



// console.log(addTwo(5)) // error
const addTwo = function(num) {
    return num + 2
}

