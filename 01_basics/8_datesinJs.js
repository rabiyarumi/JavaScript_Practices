// ============ Dates 
let myDate = new Date()
// console.log(myDate) //2025-03-28T06:38:14.932Z
// console.log(myDate.toString()) //Fri Mar 28 2025 06:38:40 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()) //Fri Mar 28 2025
// console.log(myDate.toISOString()) //2025-03-28T06:39:22.251Z
// console.log(myDate.toJSON()) //2025-03-28T06:40:11.037Z
// console.log(myDate.toLocaleDateString()) //3/28/2025
// console.log(myDate.toLocaleString()) //3/28/2025, 6:40:56 AM
// console.log(myDate.toLocaleTimeString()) //6:41:21 AM
// console.log(myDate.toUTCString()) //Fri, 28 Mar 2025 06:41:49 GMT
// console.log(typeof myDate) //object

let myCreatedDate = new Date(2025, 0, 15)
console.log(myCreatedDate.toDateString()) //Wed Jan 15 2025 // in JS month starts from 0

let myCreatedDate2 = new Date(2025, 0, 15, 7,34)
console.log(myCreatedDate2.toLocaleString()) //1/15/2025, 7:34:00 AM

let myCreatedDate3 = new Date("2025-04-26")
console.log(myCreatedDate3.toLocaleString()) //4/26/2025, 12:00:00 AM

let myCreatedDate4 = new Date("05-14-2024")
console.log(myCreatedDate4.toLocaleString()) //5/14/2024, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp) // 1743145500421 //--- It shows the result in mili second
console.log(myCreatedDate.getTime()) // 1736899200000 //--- it will convert our date to mili second

console.log(Math.floor(Date.now()/1000)) // 1743145706 //----- It will convert our mili second to second

let newDate = new Date()
console.log(newDate.getMonth())  // 2 // it starts from 0
console.log(newDate.getMonth() + 1)  // 3 
console.log(newDate.getDay())  // 5 // Friday --- starts from Monday

const costomizeDate = newDate.toLocaleString("default", {
    weekday: "long"
})
console.log(costomizeDate) // Friday