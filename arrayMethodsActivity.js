// Array Methods Practice

// Use concat() to join two arrays: arr1 = ["Cecile", "Lone"] and arr2 = ["Emil", "Tobias", "Linus"].
let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];

console.log(arr1.concat(arr2)); // Output: [ 'Cecile', 'Lone', 'Emil', 'Tobias', 'Linus' ]

// Use push() to add an element "Kiwi" to the array fruits = ["Banana", "Orange", "Apple", "Mango"].
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");

console.log(fruits); // Output: [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

// Use unshift() to add two numbers 4 and 5 to the beginning of the array array1 = [1, 2, 3].
let array1 = [1, 2, 3];
array1.unshift(4, 5);

console.log(array1); // Output: [ 4, 5, 1, 2, 3 ]

// Use pop() to remove the last element from the fruits array.
fruits.pop()
console.log(fruits); // Output: [ 'Banana', 'Orange', 'Apple', 'Mango' ]

// Use shift() to remove the first element from the array array2 = [1, 2, 3].
let array2 = [1, 2, 3];
array2.shift();

console.log(array2); // Output: [ 2, 3 ]

// Use sort() to sort the fruits array alphabetically.
fruits.sort();

console.log(fruits); // Output: [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// Use slice() to create a new array containing a portion of the fruits array.
console.log(fruits.slice(0,4)); // Output: [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// Use splice() to insert and remove elements in the months array.
let months = ["January", "March", "April"];
months.splice(1, 0, "February");

console.log(months); // Output: [ 'January', 'February', 'March', 'April' ]

months.splice(2, 3);

console.log(months); // Output: [ 'January', 'February' ]