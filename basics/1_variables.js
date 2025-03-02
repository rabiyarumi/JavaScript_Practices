const name = "Sidra" //block scope and can not redeclare and reasigned
let age = 6; // block scope and can not redeclare but reassigned
var country = "Bangladesh"; // function scope can be rediclared and reassigned  // Prefer not to use
currentCity = "Qatar" // no scope can be redrclared and reassigned // never ever use it
let nationality; // value will be undifined


console.table([name, age, country,currentCity, nationality])