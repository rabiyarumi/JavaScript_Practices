//============= Array ===============\\
const arr2 = new Array(3,6,34,45)
// console.log(arr2) //[ 3, 6, 34, 45 ]

const arr = [3, 4, 2, 5, 7]

// arr.push(9) //[ 3, 4, 2, 5, 7, 9 ] // it will add the element at last
// arr.pop() //[ 3, 4, 2, 5, 7 ] // it will remove the element at last
// arr.unshift(8) //[ 8, 3, 4, 2, 5, 7 ] /// it will add the element at first
// arr.shift() //[ 3, 4, 2, 5, 7 ] /// it will remove the element from first

// some function 
// console.log(arr.includes(9)) // false
// console.log(arr.indexOf(5)); // 3 // this is in 3rd index
// console.log(arr.indexOf(9)) // -1 // couse 9th index didn't exist

// const newArr = arr.join()
// console.log(arr); // 3,4,2,5,7 // it convert the array to a sring
// console.log(newArr)

console.log("A", arr) //A [ 3, 4, 2, 5, 7 ]

const myArr = arr.slice(1, 3)
console.log(myArr) // [ 4, 2 ] //it didn't include the finished index and didn't break the original array
console.log("B", arr) //B [ 3, 4, 2, 5, 7 ]

const myArr2 = arr.splice(1, 3)
console.log(myArr2) //[ 4, 2, 5 ] //it did include the finished index and break the original array
console.log("C", arr) //C [ 3, 7 ]