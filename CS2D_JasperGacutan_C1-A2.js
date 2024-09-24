//Mathematical and Comparison Operations, and Type Conversion.

//Set up variables and constants
let a = 25;
let b = 20;
let c = 12;
let d = "15";
const e = 15;

let sum = a + b + c + d + e;

// 1. Subtract all the values of the declared variables.
let subtractResult = a - b - c - d;

// 2. Multiply the values of variable a and c, divided by constant e.
let multiplyResult = (a * c) / e;

// 3. Display the exponent value of constant e raise to the power of variable c.
let exponentResult = Math.pow(e, c);

// 4. Reassign the value of c.3 to constant e, then display the result.
let reassignedResult = c / 3;

//Display results
console.log(sum);
console.log(d > e);
console.log(d < e);
console.log(d >= e);
console.log(d <= e);
console.log(d === e);
console.log(subtractResult);
console.log(multiplyResult);
console.log(exponentResult);
console.log(reassignedResult);