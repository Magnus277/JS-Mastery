const accountId = 144553
let accountEmail = "deb@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2

accountEmail = "hc@c.com"
accountPassword = "21212121"
accountCity="blr"

console.log(accountId);
console.log(accountEmail);
console.log(accountCity);

/*
Prefer not to use var bcuz of issue in block scope and functional scope    
*/

console.table([accountId, accountEmail, accountPassword, accountState])
