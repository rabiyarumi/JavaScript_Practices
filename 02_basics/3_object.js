// Singletone
// Object.create

//object literals

const mySym = Symbol("Key1")

const jsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary", // we can't acces this value with dot "."
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//=============== 2 ways to access object value
// console.log(jsUser.name)
// console.log(jsUser["full name"]) // we can't acces this value with dot "."
// console.log(jsUser[mySym]) //mykey1 
// console.log(typeof jsUser[mySym]) //string
// console.log(typeof mySym) //symbol

//============= Ways to change Object value
jsUser.location = "UK"
console.log(jsUser.location) //UK

// we can freez the object so it become unchangable
Object.freeze(jsUser)
jsUser.location = "Munshiganj"
console.log(jsUser.location) // UK // it won't change as Munshiganj couse the object is freez now