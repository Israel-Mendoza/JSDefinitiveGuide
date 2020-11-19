/**
 * Using sparse arrays
 */


let a = new Array(5);
let b = [];

console.log(a.length);
// 5
console.log(b.length);
// 0

b[1000] = "hello";
console.log(b.length);
// 1001

// When we omit a value in an array literal (using repeated commas as in
// [1,,3]), the resulting array is sparse, and the omitted elements simply do not exist:

let oneCommaArray = [,];
let oneUndefinedArray = [undefined];

console.log(oneCommaArray.length);
// 1
console.log(0 in oneCommaArray);
// false (item 0 doesn't exist)
console.log(oneUndefinedArray.length);
// 1
console.log(0 in oneUndefinedArray)
// true (item 0 does exist)


/**
 * Array length.
 */


// Start with a 5-element array.
let lengthFiveArray = [1, 2, 3, 4, 5];

// We can shrink or expand an array by modifying the array length:
lengthFiveArray.length = 3;
console.log(lengthFiveArray);
// [ 1, 2, 3 ]

lengthFiveArray.length = 0;
console.log(lengthFiveArray);
// []

// You can also set the length property of an array to a value larger than its current
// value. Doing this does not actually add any new elements to the array; it simply creates
// a sparse area at the end of the array.

lengthFiveArray.length = 5;
console.log(lengthFiveArray);
// [ <5 empty items> ]


/**
 * Deleting items from an array using the
 * delete operator and the splice method.
 */


let simpleArray = [1, 2, 3, 4, 5];

console.log(simpleArray.length);
// 5

// Deleting an item from the array:
delete simpleArray[2];

// The length of the array doesn't change:
console.log(simpleArray.length);
// 5

console.log(simpleArray);
// [ 1, 2, <1 empty item>, 4, 5 ]


// Using the splice method:

simpleArray = [1, 2, 3, 4, 5];

console.log(simpleArray.length);
// 5

simpleArray.splice(2, 1); // Delete 1 item starting from index 2

console.log(simpleArray.length);
// 4

console.log(simpleArray);
// [ 1, 2, 4, 5 ]

// More on splice:

simpleArray.splice(1, 2, "2", "4");

console.log(simpleArray);
// [ 1, '2', '4', 5 ]
