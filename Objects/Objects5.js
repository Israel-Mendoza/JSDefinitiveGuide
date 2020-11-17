// MORE ON OBJECT LITERAL SYNTAX

/*
    Shorthand properties
*/

let x = 1, y = 2;

let objectOne = {
    x: x,
    y: y,
}

let objectTwo = {
    x,
    y,
}

for (let prop in objectOne) {
    console.log(`objectOne.${prop} = ${objectOne[prop]}`);
}
// objectOne.x = 1
// objectOne.y = 2

for (let prop in objectTwo) {
    console.log(`objectTwo.${prop} = ${objectTwo[prop]}`);
}
// objectTwo.x = 1
// objectTwo.y = 2

/*
    Computed properties
*/

function computeProperty(propNumber) {
    return `property${propNumber}`;
}

let anotherObject = {
    [computeProperty(1)]: 1,
    [computeProperty(2)]: 2,
    [computeProperty(3)]: 3,

}

for (let prop in anotherObject) {
    console.log(`anotherObject.${prop} = ${anotherObject[prop]}`);
}
// anotherObject.property1 = 1
// anotherObject.property2 = 2
// anotherObject.property3 = 3


/* 
    Using the spread operator.
*/


objectOne = {
    name: "Israel",
    age: 28
}

objectTwo = {
    major: "Computer Science",
    hobbies: ["Music", "Languages"],
}

anotherObject = { ...objectOne, ...objectTwo };
console.log();
for (let prop in anotherObject) {
    console.log(`anotherObject.${prop} = ${anotherObject[prop]}`);
}
// anotherObject.name = Israel
// anotherObject.age = 28
// anotherObject.major = Computer Science
// anotherObject.hobbies = Music,Languages


/*
    Getters and setters.
*/

const serialNumber = {
    _number: 0,
    get number() {
        return this._number++;
    },
    set number(newNumber) {
        if (newNumber > this._number) {
            this._number = newNumber;
        } else {
            throw new Error("Serial number can only be  a larger number...");
        }
    }
}

console.log(serialNumber.number);
// 0
console.log(serialNumber.number);
// 1
console.log(serialNumber.number);
// 2

try {
    serialNumber.number = 0;
} catch (error) {
    console.log(error.toString());
}
// Error: Serial number can only be  a larger number...
