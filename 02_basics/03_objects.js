// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Debayan",
    "full name": "Debayan Das",
    [mySym]: "myKey1",
    age: 22,
    location: "Kolkata",
    email: "deb@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]); // js stores the keys as strings
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "deb@gpt.com"
// Object.freeze(JsUser)
JsUser.email = "ms@gpt.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

