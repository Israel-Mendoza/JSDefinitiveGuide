/**
 * Iterating over an array.
 */

let simpleArray = [..."Israel"];
console.log(simpleArray);
// [ 'I', 's', 'r', 'a', 'e', 'l' ]

for (let letter of simpleArray) {
    console.log(letter);
}
// I
// s
// r
// a
// e
// l

// We can use the entries method to "enumerate" the elements.
for (let anotherArray of simpleArray.entries()) {
    console.log(anotherArray);
}
// [ 0, 'I' ]
// [ 1, 's' ]
// [ 2, 'r' ]
// [ 3, 'a' ]
// [ 4, 'e' ]
// [ 5, 'l' ]

// We can the unpack the returned array.
for (let [position, letter] of simpleArray.entries()) {
    console.log(`Letter "${letter}" at position #${position}`);
}
// Letter "I" at position #0
// Letter "s" at position #1
// Letter "r" at position #2
// Letter "a" at position #3
// Letter "e" at position #4
// Letter "l" at position #5


// Using forEach() this time instead. The index is passed as the second argument:

simpleArray.forEach((value, index) => {
    console.log(`Letter "${value}" at position #${index}`);
})
// Letter "I" at position #0
// Letter "s" at position #1
// Letter "r" at position #2
// Letter "a" at position #3
// Letter "e" at position #4
// Letter "l" at position #5


/**
 * Multidimentional arrays.
 */


let tables = new Array(5);

for (let i = 0; i < tables.length; i++) {
    tables[i] = [];
    for (let j = 0; j < 10; j++) {
        tables[i][j] = i * j;
    }
}

console.log(tables);
//   [
//     [
//       0, 0, 0, 0, 0,
//       0, 0, 0, 0, 0
//     ],
//     [
//       0, 1, 2, 3, 4,
//       5, 6, 7, 8, 9
//     ],
//     [
//        0,  2,  4,  6,  8,
//       10, 12, 14, 16, 18
//     ],
//     [
//        0,  3,  6,  9, 12,
//       15, 18, 21, 24, 27
//     ],
//     [
//        0,  4,  8, 12, 16,
//       20, 24, 28, 32, 36
//     ]
//   ]

console.log(tables[3][7]);
// 21
