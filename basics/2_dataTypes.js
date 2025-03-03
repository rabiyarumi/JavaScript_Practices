
const name = "Alvi"
let age = 12
let isLogedIn = true;
let isAdmin = null;
let isSeller;



//*********** premitive dataType *******************/
/*
numer => 2 to power 53
bigInt 
string => ""
boolean => true/false
null => standalon value / its type is object
undefined => value is not define
symble => unique value
*/



const biodata = {name: "Sidra", age: 1 , gender: "Female"}
const arr = [3, 45, 56,2, 23, 34, 9, 78, 79]

//*********** non-premitive dataType *******************/
/*
object
array
*/

console.log("Object: ", biodata)
console.log("Array: ", arr)

const result ={name, age, isLogedIn, isAdmin, isSeller}
console.table(result)