// EXTENDING/MERGING OBJECTS

let firstObject = {
    x: "X - First object.",
};

let secondObject = {
    y: "Y - Second object.",
    z: "Z - Second object.",
};

// Merging/updating the First Object
for (let prop in secondObject) {
    firstObject[prop] = secondObject[prop];
}

// Testing the extended object:
for (let prop in firstObject) {
    console.log(`firstObject.${prop} = ${firstObject[prop]}`);
}
// firstObject.x = X - First object.
// firstObject.y = Y - Second object.
// firstObject.z = Z - Second object.


/*
    Using Object.assign() method:
*/

// Re-creating our objects

firstObject = {
    x: "X - First object.",
};

secondObject = {
    y: "Y - Second object.",
    z: "Z - Second object.",
};

let thirdObject = {
    a: "A - Third object.",
    b: "B - Third object.",
    c: "C - Third object.",
    x: "X - Third object.",
}

Object.assign(firstObject, secondObject, thirdObject);

for (let prop in firstObject) {
    console.log(`firstObject.${prop} = ${firstObject[prop]}`);
}
// firstObject.x = X - Third object.    <<<--- Overwritten!
// firstObject.y = Y - Second object.
// firstObject.z = Z - Second object.
// firstObject.a = A - Third object.
// firstObject.b = B - Third object.
// firstObject.c = C - Third object.


/*
    Using the Object.assign() method preventing overrides
*/

// Re-creating our objects
firstObject = {
    x: "X - First object.",
};

secondObject = {
    y: "Y - Second object.",
    z: "Z - Second object.",
};

thirdObject = {
    a: "A - Third object.",
    b: "B - Third object.",
    c: "C - Third object.",
    x: "X - Third object.",
}

firstObject = Object.assign({}, secondObject, thirdObject, firstObject);

for (let prop in firstObject) {
    console.log(`firstObject.${prop} = ${firstObject[prop]}`);
}
// firstObject.y = Y - Second object.
// firstObject.z = Z - Second object.
// firstObject.a = A - Third object.
// firstObject.b = B - Third object.
// firstObject.c = C - Third object.
// firstObject.x = X - First object.    <<<--- Original value!


/*
    Using the spread operator
*/

// Re-creating our objects
firstObject = {
    x: "X - First object.",
};

secondObject = {
    y: "Y - Second object.",
    z: "Z - Second object.",
};

thirdObject = {
    a: "A - Third object.",
    b: "B - Third object.",
    c: "C - Third object.",
    x: "X - Third object.",
}

firstObject = { ...secondObject, ...thirdObject, ...firstObject };

for (let prop in firstObject) {
    console.log(`firstObject.${prop} = ${firstObject[prop]}`);
}
// firstObject.y = Y - Second object.
// firstObject.z = Z - Second object.
// firstObject.a = A - Third object.
// firstObject.b = B - Third object.
// firstObject.c = C - Third object.
// firstObject.x = X - First object.    <<<--- Original value!


/*
    Creating our own merge function that only updates but doesn't overrides.
*/

function objectMerger(targetObject, ...sourceObjects) {
    for (let source of sourceObjects) {
        for (let sourceProperty of Object.keys(source)) {
            if (!(sourceProperty in targetObject)) {
                targetObject[sourceProperty] = source[sourceProperty]
            }
        }
    }
    return targetObject;
}

// Re-creating our objects
firstObject = {
    x: "X - First object.",
};

secondObject = {
    y: "Y - Second object.",
    z: "Z - Second object.",
};

thirdObject = {
    a: "A - Third object.",
    b: "B - Third object.",
    c: "C - Third object.",
    x: "X - Third object.",
}

firstObject = objectMerger(firstObject, secondObject, thirdObject);
console.log();
for (let prop in firstObject) {
    console.log(`firstObject.${prop} = ${firstObject[prop]}`);
}
// firstObject.x = X - First object.    <<<--- Original value!
// firstObject.y = Y - Second object.
// firstObject.z = Z - Second object.
// firstObject.a = A - Third object.
// firstObject.b = B - Third object.
// firstObject.c = C - Third object.
