/**
 * Subarrays with slice(), splice(), fill(), and copyWithin().
 */


// We slice an array with the slice() method:

let anArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let firstFiveElements = anArray.slice(0, 5);
console.log(firstFiveElements);
// [ 0, 1, 2, 3, 4 ]

let lastFiveElements = anArray.slice(6);
console.log(lastFiveElements);
// [ 6, 7, 8, 9, 10 ]


// Using splice() to delete and insert items to an array.


anArray.splice(4, 2, "4", "5", "5a");

console.log(anArray);
// [ 0, 1, 2, 3, '4', '5', '5a', 6, 7, 8, 9, 10]


/**
 * fill()
 * The fill() method sets the elements of an array, or a slice of an array, 
 * to a specified value. It mutates the array it is called on.
 */

anArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

anArray.fill("A", 5);
console.log(anArray);
// [ 0, 1, 2, 3, 4, 'A', 'A', 'A', 'A', 'A','A' ]

anArray.fill("B", 3, 6);
console.log(anArray);
// [ 0, 1, 2, 'B', 'B', 'B', 'A', 'A', 'A', 'A', 'A' ]


/**
 * indexOf() and lastIndexOf()
 * indexOf() and lastIndexOf() search an array for an element with a specified value
 * and return the index of the first such element found, or -1 if none is found.
 */

anArray = [0, 1, 2, 3, 2, 1, 0];

console.log(anArray.indexOf(2));
// 2
console.log(anArray.lastIndexOf(1));
// 5
console.log(anArray.indexOf(3));
// 3


/**
 * includes()
 * includes() method takes a single argument and returns true if the array
 * contains that value or false otherwise.
 */

console.log(anArray.includes(3));
// true
console.log(anArray.includes(4));
// false


/**
 * sort()
 * sort() sorts the elements of an array in place and returns the sorted array. When
 * sort() is called with no arguments, it sorts the array elements in alphabetical order.
 */


let a = ["banana", "cherry", "apple"];

a.sort();
console.log(a);
// [ 'apple', 'banana', 'cherry' ]

/**
 * To sort an array into some order other than alphabetical, you must pass a comparison
 * function as an argument to sort(). This function decides which of its two arguments
 * should appear first in the sorted array:
 * 
 * If the first argument should appear before the second, the comparison function should 
 * return a number less than zero. If the first argument should appear after the second 
 * in the sorted array, the function should return a number greater than zero. 
 * And if the two values are equivalent (i.e., if their order is irrelevant), 
 * the comparison function should return 0.
 */


function ascendingOrder(num1, num2) {
    let result = num1 - num2;
    if (result > 0) {
        console.log(`${num1} > ${num2}`);
    } else if (result < 0) {
        console.log(`${num1} < ${num2}`);
    } else {
        console.log(`${num1} === ${num2}`);
    }
    return result;
}

someNumbers = [2, 5, 1, 6, 3, 88, 2, 333, 2, 1];

someNumbers.sort(ascendingOrder);
// 5 > 2
// 1 < 5
// 1 < 5
// 1 < 2
// 6 > 2
// 6 > 5
// 3 < 5
// 3 > 2
// 88 > 3
// 88 > 6
// 2 < 5
// 2 === 2
// 2 < 3
// 333 > 3
// 333 > 6
// 333 > 88
// 2 < 5
// 2 === 2
// 2 < 3
// 1 < 3
// 1 < 2
// 1 < 2
// 1 === 1

console.log(someNumbers);
// [ 1, 1, 2, 2, 2, 3, 5, 6, 88, 333 ]


/**
 * reverse()
 * It says what it says on the tin.
 */


someNumbers.reverse();

console.log(someNumbers);
// [ 333, 88, 6, 5, 3, 2,  2, 2, 1, 1 ]
