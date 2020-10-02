"FALSY VALUES"

// All of the following values are falsy.

let falsy_literals = [
    false,
    undefined,
    null,
    0,
    -0,
    NaN,
    "" // the empty string
];

let truthy_literals = [
    true,
    [],
    {},
    " ",
    1
]

for (let value of falsy_literals) {
    if (value) {
        console.log(`Who knew!? ${value} ended up being truthy!`);
    } else {
        console.log(`As I mentioned before, ${value} is false!`);
    }
}

// As I mentioned before, undefined is false!
// As I mentioned before, null is false!
// As I mentioned before, 0 is false!
// As I mentioned before, 0 is false!
// As I mentioned before, NaN is false!
// As I mentioned before,  is false!

for (let value of truthy_literals) {
    if (value) {
        console.log(`As I mentioned before, ${value} is true!`);
    } else {
        console.log(`Who knew!? ${value} ended up being false!`);
    }
}
// As I mentioned before, true is true!
// As I mentioned before,  is true!  -- []
// As I mentioned before, [object Object] is true!  -- {}
// As I mentioned before,   is true!  -- " "
// As I mentioned before, 1 is true!