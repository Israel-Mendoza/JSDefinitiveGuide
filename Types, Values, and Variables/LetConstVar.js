// let and const are block scoped

const x = 1; // Declare x as a global constant
if (x === 1) {
    let x = 2; // Inside a block x can refer to a different value
    console.log(x); // Prints 2
}
console.log(x); // Prints 1: we're back in the global scope now

