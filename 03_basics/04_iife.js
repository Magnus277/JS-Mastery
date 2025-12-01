(function chai() {

  //named iife
  console.log(`DB Connected`);
  
})();

// ()(); // first () is function definition and second () is execution, to ignore global scope's pollution, we introduced iifes

( (name) => {
  console.log(`DB CONNECTED TWO ${name}`);
  
})('deb')