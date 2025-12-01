// const tinderUser = new Object() //singleton object
const tinderUser = {} //non singleton object

tinderUser.id = "123abc"
tinderUser.name= "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "debayan",
            lastname: "das"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


// const obj3 = { obj1,obj2 }

// const obj3 = Object.assign({}, obj1, obj2, obj4) //{} is target here and obj123 is source

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
  {
    id:1,
    email: "h@gmail.com"
  },
  {
    id:1,
    email: "h@gmail.com"
  },
  {
    id:1,
    email: "h@gmail.com"
  },
]


// console.log(users[1].email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //returns a array of keys
// console.log(Object.values(tinderUser)); //returns a array of values
// console.log(Object.entries(tinderUser)); //returns a array of arrays

// console.log(tinderUser.hasOwnProperty('isLoggedI'));


const course = {
  coursename: "js mastery",
  price: "000",
  courseInstructor: "debayan"
}

// course.courseInstructor

const {courseInstructor: ins} = course
console.log(ins);

// {
//     "name": "debayan",
//     "coursename": "js mastery",
//     "price": "free"
// }

[
    {},
    {},
    {}
]