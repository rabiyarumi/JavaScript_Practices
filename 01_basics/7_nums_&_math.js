const score = 500;
// console.log(score) //500

const balance = new Number(900)
// console.log(balance) //[Number: 900]
// console.log(typeof balance) //object


//------- some prototype of numbers-----------\\
// console.log(balance.toString().length) // 3  // after converting a number to string. we can access all string prototypes
// console.log(balance.toFixed(2)); //900.00

const hisNumber = 457.7535
// console.log(hisNumber.toPrecision(4)) //457.7
// console.log(hisNumber.toPrecision(3)) //458 //it roundup automatically
// console.log(hisNumber.toPrecision(2)) //4.6e+2

const moreNumber = 10000000;
// console.log(moreNumber) //10000000
// console.log(moreNumber.toLocaleString()) //10,000,000
// console.log(moreNumber.toLocaleString('en-IN')) //1,00,00,000


//================= math ========================\\
// console.log(Math)
// console.log(Math.abs(-5)) // 5
//----- "round" it will round up the number 
// console.log(Math.round(7.4)) // 7
// console.log(Math.round(7.7)) // 8
//----- "ceil" it will keep the heightes the number 
// console.log(Math.ceil(7.7)) // 8
// //----- "ceil" it will keep the lowest the number 
// console.log(Math.floor(7.7)) // 7

// // "min" "max" find the maximam and minimam value
// console.log(Math.min(5,8,2,67)) //2
// console.log(Math.max(5,8,2,67)) //67

//----- "random" it wil generate a random number
console.log(Math.random())
console.log((Math.random() * 10) + 1) // it won't return the value 0
console.log(Math.floor(Math.random() * 10) + 1) // it won't return the value 0 and roundup up with nearest integer

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // the output will be minimam 10 and maximam 20

