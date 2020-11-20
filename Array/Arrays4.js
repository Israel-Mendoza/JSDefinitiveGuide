/**
 * Array iterator methods.
 */


/**
 * forEach()
 * 
 * The forEach() method iterates through an array, 
 * invoking a function you specify for each element.
 * The callback function may accept one, two, or three arguments:
 *      1. The element from the array.
 *      2. The index of the element.
 *      3. The array itself.
 */


let myData = [1, 2, 3, 4, 5];

// Using 1 argument in the callback:

myData.forEach((element) => {
    console.log(`Element: ${element}`);
});
// Element: 1
// Element: 2
// Element: 3
// Element: 4
// Element: 5

// Using 2 arguments in the callback:

myData.forEach((element, index) => {
    console.log(`Element: ${element} - Index: ${index}`);
});
// Element: 1 - Index: 0
// Element: 2 - Index: 1
// Element: 3 - Index: 2
// Element: 4 - Index: 3
// Element: 5 - Index: 4

// Using 3 arguments in the callback:

myData.forEach((element, index, array) => {
    console.log(`Element: ${element} - Index: ${index} - Array: ${array}`);
});
// Element: 1 - Index: 0 - Array: 1,2,3,4,5
// Element: 2 - Index: 1 - Array: 1,2,3,4,5
// Element: 3 - Index: 2 - Array: 1,2,3,4,5
// Element: 4 - Index: 3 - Array: 1,2,3,4,5
// Element: 5 - Index: 4 - Array: 1,2,3,4,5


/**
 * map()
 * 
 * The map() method passes each element of the array on which it is invoked to the
 * function you specify and returns an array containing the values returned by your
 * function. The callback function must return a value.
 * The callback function may accept one, two, or three arguments:
 *      1. The element from the array.
 *      2. The index of the element.
 *      3. The array itself.
 */


let unmappedData = [1, 2, 3, 4, 5];

// Using 1 argument in the callback:
let mappedData = unmappedData.map((element) => element * 3);

console.log(mappedData);
// [ 3, 6, 9, 12, 15 ]

// Using 2 arguments in the callback:
mappedData = unmappedData.map((element, index) => element + index);

console.log(mappedData);
// [ 1, 3, 5, 7, 9 ]

// Using 3 arguments in the callback:
mappedData = unmappedData.map((element, index, array) => {
    console.log(`Array is unmodified: ${array}`);
    return element * index;
});
// Array is unmodified: 1,2,3,4,5
// Array is unmodified: 1,2,3,4,5
// Array is unmodified: 1,2,3,4,5
// Array is unmodified: 1,2,3,4,5
// Array is unmodified: 1,2,3,4,5

console.log(mappedData);
// [ 0, 2, 6, 12, 20 ]


/**
 * filter()
 * 
 * The filter() method returns an array containing a subset of the elements of the
 * array on which it is invoked. The function you pass to it should be predicate: a function
 * that returns true or false. Only the elements that return true will be included in the
 * final returned array
 * The callback function may accept one, two, or three arguments:
 *      1. The element from the array.
 *      2. The index of the element.
 *      3. The array itself.
 */


let unfilteredArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// Using 1 argument in the callback.
let filteredArray = unfilteredArray.filter((element) => element > 5 && element < 15);

console.log(filteredArray);
// [ 7, 9, 11, 13 ]

filteredArray = unfilteredArray.filter((element, index) => element % index === 0);

console.log(filteredArray);
// [ 3 ]

filteredArray = unfilteredArray.filter((element, index, array) => {
    console.log(`Array is unmodified: ${array}`);
    return (element - index) / 2 < 3;
});
// Array is unmodified: 1,3,5,7,9,11,13,15,17,19
// Array is unmodified: 1,3,5,7,9,11,13,15,17,19
// Array is unmodified: 1,3,5,7,9,11,13,15,17,19
// Array is unmodified: 1,3,5,7,9,11,13,15,17,19
// Array is unmodified: 1,3,5,7,9,11,13,15,17,19
// Array is unmodified: 1,3,5,7,9,11,13,15,17,19
// Array is unmodified: 1,3,5,7,9,11,13,15,17,19
// Array is unmodified: 1,3,5,7,9,11,13,15,17,19
// Array is unmodified: 1,3,5,7,9,11,13,15,17,19
// Array is unmodified: 1,3,5,7,9,11,13,15,17,19

console.log(filteredArray);
// [ 1, 3, 5, 7, 9 ]


/**
 * find() and findIndex()
 * The find() and findIndex() methods are like filter() in that they iterate through
 * your array looking for elements for which your predicate function returns a truthy
 * value.
 * find() returns the matching element, and findIndex() returns the index of the matching element. 
 * If no matching element is found, find() returns undefined and findIndex() returns -1.
 */


let someData = [1, 4, 6, 9, 13, 21, 23, 49, 59];

let multipleOfSeven = someData.find((element) => element % 7 === 0);
console.log(multipleOfSeven ? multipleOfSeven : "Whoops! No multiple of seven found!");
// 21

let multipleOfFive = someData.find((element) => element % 5 === 0);
console.log(multipleOfFive ? multipleOfFive : "Whoops! No multiple of five found!");
// Whoops! No multiple of five found!

let indexMultipleOfSeven = someData.findIndex((element) => element % 7 === 0);
if (indexMultipleOfSeven !== -1) {
    console.log(`Found a multiple of seven at index ${indexMultipleOfSeven}`);
} else {
    console.log("Whoops! No multiple of seven found!");
}
// Found a multiple of seven at index 5

let indexMultipleOfFive = someData.findIndex((element) => element % 5 === 0);
if (indexMultipleOfFive !== -1) {
    console.log(`Found a multiple of five at index ${indexMultipleOfFive}`);
} else {
    console.log("Whoops! No multiple of five found!");
}
// Whoops! No multiple of five found!


/**
 * every() and some()
 * The every() and some() methods are array predicates: they apply a predicate function
 * you specify to the elements of the array, then return true or false.
 * every() returns true if the callback function returns true for every element in the array.
 * some() returns true if the callback function returns true for at least one element in the array.
 */

let otherData = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

let allAreMultipleOfThree = otherData.every((element) => element % 3 === 0);

console.log(allAreMultipleOfThree ?
    "All elements were multiples of three." :
    "Not all elements were multiple of three.");
// All elements were multiples of three.

let allAreMultipleOfFive = otherData.every((element) => element % 5 === 0);
console.log(allAreMultipleOfFive ?
    "All elements were multiples of five." :
    "Not all elements were multiple of five.");
// Not all elements were multiple of five.

let someAreMultipleOfFive = otherData.some((element) => element % 5 === 0);

console.log(someAreMultipleOfFive ?
    "Some elements were multiples of five." :
    "None of the elements were multiple of five.");
// Some elements were multiples of five.


let someAreMultipleOfEleven = otherData.every((element) => element % 11 === 0);
console.log(someAreMultipleOfEleven ?
    "Some elements were multiples of eleven." :
    "None of the elements were multiple of eleven.");
// None of the elements were multiple of eleven.


/**
 * reduce() and reduceRight()
 * The reduce() and reduceRight() methods combine the elements of an array, using
 * the function you specify, to produce a single value.
 * The difference between reduce() and reduceRight() is that the first starts 
 * from the lower index to the highest, whereas the latter starts from the highest
 * index to the lowest.
 */

let someNumbers = [4, 7, 92, 3, 47, 80, 12, 44, 21];

let minFromNumbers = someNumbers.reduce((x, y) => x < y ? x : y);
let maxFromNumbers = someNumbers.reduce((x, y) => x > y ? x : y);

console.log(`Minimum: ${minFromNumbers} - Maximum: ${maxFromNumbers}`);
// Minimum: 3 - Maximum: 92

minFromNumbers = someNumbers.reduceRight((x, y) => x < y ? x : y);
maxFromNumbers = someNumbers.reduceRight((x, y) => x > y ? x : y);

console.log(`Minimum: ${minFromNumbers} - Maximum: ${maxFromNumbers}`);
// Minimum: 3 - Maximum: 92
