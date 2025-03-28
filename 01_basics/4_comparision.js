//--------- Normal comparision ----------\\
// console.log( 2 > 1) // true
// console.log( 2 >= 1) // true
// console.log( 2 < 1) // false
// console.log( 2 <= 1) // false
// console.log( 2 <= 2) // true
// console.log( 2 == 2) // true
// console.log( 2 != 2) // false

// in comparision javascript convert dataTypes to nomber for comparision
// console.log("2" == 2) //true
// console.log(true == 1) //true
// console.log("2" >= 1) //true

// some confusing comparision
// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); //true
/**
 * Equality (==) does not perform numeric conversion. that means it does not convert null to a number. thats why (null == 0) is false
 *Relational operators (>, <, >=, <=) convert null to 0 before comparison.
 *This is why null >= 0 is true, but null > 0 is false.
 */

//  console.log(undefined > 0); //false
//  console.log(undefined == 0); //false
//  console.log(undefined >= 0); //false

 //------- strict check
 console.log("2" === 2); //false
 
 