"OBJECTS AND ARRAYS ARE REFERENCE TYPES"

// Objects are mutable
let o = { x: 1 }; // Start with an object
o.x = 2; // Mutate it by changing the value of a property
o.y = 3; // Mutate it again by adding a new property

// Arrays are mutable
let a = [1, 2, 3]; // Arrays are also mutable
a[0] = 0; // Change the value of an array element
a[3] = 4; // Add a new array element


// Testing for equality

// Two objects with the same properties
o = { x: 1 };
p = { x: 1 };
o === p; // => false: distinct objects are never equal

// Two distinct, empty arrays
a = [];
b = [];
a === b; // => false: distinct arrays are never equal

// Using the same array
a = []; // The variable a refers to an empty array.
b = a; // Now b refers to the same array.
b[0] = 1; // Mutate the array referred to by variable b.
a[0] // => 1: the change is also visible through variable a.
a === b // => true: a and b refer to the same object, so they are equal.

"CREATING A COPY OF AN ARRAY"

// Using a loop
a = ["a", "b", "c"]; // An array we want to copy
b = []; // A distinct array we'll copy into
for (let i = 0; i < a.length; i++) { // For each index of a[]
    b[i] = a[i]; // Copy an element of a into b
}

// Using the Array.from(a) function
let c = Array.from(b); // In ES6, copy arrays with Array.from()

// Comparing two arrays' values:

function equalArrays(a, b) {
    if (a === b) return true; // Identical arrays are equal
    if (a.length !== b.length) return false; // Different-size arrays not equal
    for (let i = 0; i < a.length; i++) { // Loop through all elements
        if (a[i] !== b[i]) return false; // If any differ, arrays not equal
    }
    return true; // Otherwise they are equal
}
