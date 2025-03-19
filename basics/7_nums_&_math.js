const score = 500;
console.log(score) //500

const balance = new Number(900)
console.log(balance) //[Number: 900]
console.log(typeof balance) //object


//------- some prototype of numbers-----------\\
console.log(balance.toString().length) // 3  // after converting a number to string. we can access all string prototypes
console.log(balance.toFixed(2)); //900.00

const hisNumber = 457.7535
console.log(hisNumber.toPrecision(4)) //457.7
console.log(hisNumber.toPrecision(3)) //458 //it roundup automatically
console.log(hisNumber.toPrecision(2)) //4.6e+2

const moreNumber = 10000000;
console.log(moreNumber) //10000000
console.log(moreNumber.toLocaleString()) //10,000,000
console.log(moreNumber.toLocaleString('en-IN')) //1,00,00,000

