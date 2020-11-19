// Array literals

let empty = []; // An array with no elements
let primes = [2, 3, 5, 7, 11]; // An array with 5 numeric elements
let misc = [1.1, true, "a",]; // 3 elements of various types + trailing comma

// Filling arrays with expressions
let base = 1024;
let table = [base, base * 2, base * 4, base * 8, base * 16];

for (let element of table) {
    console.log(element);
}
// 1024
// 2048
// 4096
// 8192
// 16384

let count = [1, , 3]; // Elements at indexes 0 and 2. No element at index 1
let undefs = [, ,]; // An array with no elements but a length of 2


/*
    Using the spread operator.
*/

// The spread operator makes a list out of an iterable.

let aCharArray = [..."abcdefgklmnopqrstuvwxyz"];

console.log(aCharArray);
// [
//     'a', 'b', 'c', 'd', 'e',
//     'f', 'g', 'k', 'l', 'm',
//     'n', 'o', 'p', 'q', 'r',
//     's', 't', 'u', 'v', 'w',
//     'x', 'y', 'z'
//   ]

// Making a shallow copy of the array with the spread operator

let original = [1, 2, 3];
let copy = [...original];
// Modifying the copy does not change the original
copy[0] = 0;
console.log(original[0])
// 1


/*
 * Creating an array with "new Array()";
 */

// The "Array()" constructor array either takes the length of the new array
// or the items you want in the array. But this means we cannot create an array
// with only one element.

// Creating a "fixed-length" array:
let tenElementArray = new Array(10);

console.log(tenElementArray.length);
// 10

// Creating an array, initializing the elements
let someNumbersArray = new Array(1, 2, 3, 4, 5);
console.log(someNumbersArray.length);
// 5


/*
 * Creating an array with "Array.of()";
 */


let oneItemArray = Array.of(10);
console.log(oneItemArray);
// [ 10 ]
let threeItemArray = Array.of(1, 2, 3);
console.log(threeItemArray);
// [ 1, 2, 3 ]


/*
 * Creating an array with "Array.from()";
 */


// Array.from() creates a true copy of an array, or converts 
// an array-like object to a true array.

trueCopy = Array.from(original);
console.log(trueCopy);
// [ 1, 2, 3 ]

// Array.from() takes a callback function to be apply to each element in the iterable:
let duplicatedTrueCopy = Array.from(trueCopy, (x) => x * 2);
console.log(duplicatedTrueCopy);
// [ 2, 4, 6 ]


/**
 * Arrays are objects, so JavaScript is unaware of the "out of bounds" error.
 */

let anArray = [1, 2, 3, 4, 5];
console.log(anArray[1000]);
// undefined
console.log(anArray["Hello"]);
// undefined
