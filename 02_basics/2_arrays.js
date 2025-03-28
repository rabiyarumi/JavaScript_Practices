const marvelHero = ["SpiderMan", "IronMan", "Thore"]
const dcHero = ["ShuperMan", "BatMan", "Flash"]

// marvelHero.push(dcHero)
// console.log(marvelHero) // [ 'SpiderMan', 'IronMan', 'Thore', [ 'ShuperMan', 'BatMan', 'Flash' ] ] // it didn't combine 2 array, it put another array as an element
// console.log(marvelHero[3]) //[ 'ShuperMan', 'BatMan', 'Flash' ]
// console.log(marvelHero[3][1]) //BatMan


// // So the mathod is "concat" but its not the finel solution. couse it limts only 2 array to matge
// const myHero = marvelHero.concat(dcHero)
// console.log(myHero) //[ 'SpiderMan', 'IronMan', 'Thore', 'ShuperMan', 'BatMan', 'Flash' ]

// // So anothe and popular mthod is "spread operator" it allaws many arrays to marge even onohter element to combine
// const myHero2 = [...marvelHero, ...dcHero, "Natasha", "Loki"]
// console.log(myHero2) //['SpiderMan', 'IronMan','Thore', 'ShuperMan','BatMan', 'Flash','Natasha', 'Loki' ]


// // "flat" it will  Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// const arr = [2,5,6, [4,7,9], 3,5, [4,7, [3,6,9,3], 7]]
// console.log(arr) //[ 2, 5, 6, [ 4, 7, 9 ], 3, 5, [ 4, 7, [ 3, 6, 9, 3 ], 7 ] ]
// const fullArray = arr.flat(Infinity)
// console.log(fullArray) //[2, 5, 6, 4, 7, 9,3, 5, 4, 7, 3, 6,9, 3, 7]

console.log(Array.isArray("Palestine")) // false
console.log(Array.from("Palestine")) // ['P', 'a', 'l','e', 's', 't','i', 'n', 'e'] // it will convert the value into an array if possible
console.log(Array.from("Palestine")) // ['P', 'a', 'l','e', 's', 't','i', 'n', 'e'] // it will convert the value into an array if possible
console.log(Array.from({name: "Palestine"})) // [] // it will return an empty array couse its not possible to convert to an array

const score = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score, score2, score3)) //[ 100, 200, 300 ]
