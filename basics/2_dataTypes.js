
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

// console.log("Object: ", biodata)
// console.log("Array: ", arr)

const result ={name, age, isLogedIn, isAdmin, isSeller}
// console.table(result)




//*********** dataType conversion *******************/
const score = "55"
// console.log(typeof score ,score)

//-------- we can convert data type using Number, String etc
const scoreInNumber = Number(score)
// console.log(typeof(scoreInNumber) , scoreInNumber) // output number 55

//--------- when we try to convert a value as Number but the value is not a valid number syntext then it will return = NaN but the typeof will be Nubmer
//---- if the value is null output will be : 0
//---- if the value is undifined output will be : NaN
//---- if the value is true output will be : 1
//---- if the value is false output will be : 0
//---- if the value is empty output will be : 0

const mixNum = "99abc"
const mixConversion = Number(mixNum)
// console.log(typeof(mixConversion), mixConversion) // output: number NaN

const value = "";
const converToNumber = Number(value)
// console.log(typeof(converToNumber), converToNumber)


// --------- convert to Boolean 
// 1 => true
// 0 => false
// "name" => true
// "" => false
// null => false
// undefined => false

let booleanValue = undefined
const convertToBolean= Boolean(booleanValue)
// console.log(typeof(convertToBolean), convertToBolean)

//--------- convert to string
// 55 => 55
// null => null
// undefined => undefined
// NaN => NaN


const num = NaN;
const converToString = String(num)
console.log(typeof(converToString), converToString)
