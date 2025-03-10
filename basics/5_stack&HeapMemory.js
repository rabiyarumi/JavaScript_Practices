//================= Memory =====================\\
// there are 2 types of memory: 1.stack , 2. Heap
// Stack is used for storing primitive data types (e.g., number, string, boolean, null, undefined, symbol, bigint) and function calls.
// When a function is executed, a new stack frame is created for it, and when the function finishes, the frame is removed.
let x = 10;
let y = x;  // Copying value, not reference
y = 20;

console.log(x); // 10
console.log(y); // 20
// Here, x and y are stored in the stack, and y gets a copy of x, so modifying y doesn’t affect x.

//----------------------------
// 
let obj1 = { name: "John" };
let obj2 = obj1;  // Both variables reference the same object in the heap

obj2.name = "Doe";

console.log(obj1.name); // "Doe"
console.log(obj2.name); // "Doe"
// Since obj1 and obj2 both reference the same object in the heap, modifying obj2 also modifies obj1.