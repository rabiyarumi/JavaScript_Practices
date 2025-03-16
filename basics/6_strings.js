const name = "Alvi"
const profession = "Developer"

// console.log("My name is " + name + " and I am a " + profession) // this is old way to join string 

// nowadays string interpolation is recomendet to use. that is used in backtick[``]
// console.log(`My name is ${name} and I am a ${profession}`)


const gameName = new Object("Subway Surfers")
// console.log(gameName[0]) // S
// console.log(name[0]) // A
// console.log(gameName.__proto__) // {}
// console.log(gameName.length) // 14
// console.log(gameName.toUpperCase()) // SUBWAY SURFERS
// console.log(gameName.charAt(5)) // y
// console.log(gameName.indexOf("w")) // 3


//---------- "substring" it substract string from index to index
const newString = gameName.substring(0, 5)
// console.log(newString) // Subwa  ---------it substract from 0 to 4 index not includ  no. 5 index


//---------- "slice" it substract string from index to index and include negetive value
// const onotherString = gameName.slice(0, 5) //Subwa
const onotherString = gameName.slice(-19, 8) //Subway S
// console.log(onotherString) // Subwa  ---------it substract from 0 to 4 index not includ  no. 5 index

//------------ "trim" it remove all unnecceary spaces 
const newName = "   Sidra       "
console.log(newName)
console.log(newName.trim())

//------ "replace" it replace with onother value
const url = "https://crowd%20cube.com"
console.log(url) // https://crowd%20cube.com
console.log(url.replace("%20", "-")) // https://crowd-cube.com