/**
 * Array-like objects.
 */


// Start with a regular empty object
let arrayLikeObject = {};

// Add properties to make it "array-like"
let i = 0;
while (i < 10) {
    arrayLikeObject[i] = i * i;
    i++;
}
arrayLikeObject.length = i;

// Now iterate through it as if it were a real array
for (let j = 0; j < arrayLikeObject.length; j++) {
    console.log(arrayLikeObject[j]);
}
// 0
// 1
// 4
// 9
// 16
// 25
// 36
// 49
// 64
// 81

// But it's not a true array:
console.log(Array.isArray(arrayLikeObject));
// false


/**
 * Calling array methods on array-like objects.
 */


Array.prototype.forEach.call(arrayLikeObject, (element) => {
    console.log(element);
});
// 0
// 1
// 4
// 9
// 16
// 25
// 36
// 49
// 64
// 81

let multipliedArray = Array.prototype.map.call(arrayLikeObject, (element, index) => element * index);
multipliedArray.forEach((element) => {
    console.log(element);
});
// 0
// 1
// 8
// 27
// 64
// 125
// 216
// 343
// 512
// 729

let pairArray = Array.prototype.filter.call(arrayLikeObject, (element) => element % 2 === 0);
pairArray.forEach((element) => {
    console.log(element);
});
// 0
// 4
// 16
// 36
// 64

let sum = Array.prototype.reduce.call(arrayLikeObject, (sum, newVal) => sum + newVal);
console.log(sum);
// 285


/**
 * The best way is to create a true array out of an array-like object:
 */


arrayLikeObject = Array.from(arrayLikeObject);

// This is a true array now:
console.log(Array.isArray(arrayLikeObject));
// true


/**
 * Strings are array-like objects.
 */


let aString = "JavaScript";

Array.prototype.forEach.call(aString, (element, index) => {
    console.log(`"${element}" at position "${index}"`);
});
// "J" at position "0"
// "a" at position "1"
// "v" at position "2"
// "a" at position "3"
// "S" at position "4"
// "c" at position "5"
// "r" at position "6"
// "i" at position "7"
// "p" at position "8"
// "t" at position "9"

