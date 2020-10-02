"NULL IS THE DELIBERATE ABSENCE OF VALUE"

let a = null;
typeof a; // => "object"
typeof null; // => "object"


"UNDEFINE IS THE LACK OF ASSIGMENT"

let b;
function hi() {
    let greeting = "hi";
}
c = hi();
let d = [1, 2, 3];
let e = { a: "A", b: "B" };

typeof b; // => "undefined" because variable is uninitialized
typeof c; // => "undefined" because hi() doesn't return anything
typeof d[10]; // => "undefined" because array item is out of bounds
typeof e.anotherProp; // => "undefined" because property wasn't found
typeof undefined; // => "undefined" because undefined is its own type

"EQUALITY!"

null == null; // => true
null === null; // => true

undefined == undefined; // => true
undefined === undefined; // => true

null == undefined; // => true
null === undefined; // => false because they are not the same type


"NEITHER NULL NOR UNDEFINED HAVE METHODS!"

try {
    console.log(undefined.toString());
} catch (error) {
    console.log(error.message);
    // Cannot read property 'toString' of undefined
}

try {
    console.log(null.toString());
} catch (error) {
    console.log(error.message);
    // Cannot read property 'toString' of null
}