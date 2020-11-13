// Object literals

let empty = {}; // An object with no properties
let point = { x: 0, y: 0 }; // Two numeric properties
let p2 = { x: point.x, y: point.y + 1 }; // More complex values
let book = {
    "main title": "JavaScript", // These property names include spaces,
    "sub-title": "The Definitive Guide", // and hyphens, so use string literals.
    for: "all audiences", // for is reserved, but no quotes.
    author: { // The value of this property is
        firstname: "David", // itself an object.
        surname: "Flanagan"
    }
};


// Creating an object using the "new" keyword.
// Objects created using the new keyword and a constructor invocation 
// use the value of the prototype property of the constructor function as their prototype.
// Objects created by "new Object()" and the object literal inherits from Object.prototype.
// Objects created by "new Array()" and the array literal inherits from Array.prototype.
// Objects created by "new Date()" inherits from Date.prototype.
// Almost object have a prototype, but only a few has a prototype property. These objects 
// are the ones that define the prototype for other objects.

let anObject = new Object();
let anArray = new Array();
let aDate = new Date();
let aMap = new Map();

console.log(anObject instanceof Object);
// true
console.log(anArray instanceof Array);
// true
console.log(aDate instanceof Date);
// true
console.log(aMap instanceof Map);
// true


// Using the Object.create() to create an object out of a prototype.

// Creating a second book
let book2 = Object.create(book);
console.log(book2["main title"]);
// JavaScript
console.log(book2["sub-title"]);
// The Definitive Guide
console.log(book2.for);
// all audiences
console.log(book2.author.firstname);
// David
console.log(book2.author.surname);
// Flanagan

// Creating an object with no prototype
let emptyObject = Object.create(null);  // emptyObject inherits no props or methods.

// Creating an object with the Object.prototype prototype
let aSimpleObject = Object.create(Object.prototype);  // aSimpleObject is like {} or new Object().


// Using Object.create() to prevent from unintended changes in a function

function addingAttribute(anObject, attributeValue) {
    anObject.newAttribute = attributeValue;
}

let testObject = {
    a: "A",
    b: "B",
    c: "C",
};

let anotherTestObject = {
    a: "A",
    b: "B",
    c: "C",
};

addingAttribute(testObject, "newAttribute");
addingAttribute(Object.create(anotherTestObject));

console.log("newAttribute" in testObject);
// true
console.log("newAttribute" in anotherTestObject);
// false


// Iterating over an object

for (let attribute in book) {
    if (attribute.includes(" ")) {
        console.log(`book["${attribute}"] = ${book[attribute]} - Type: ${typeof book[attribute]}`);
    } else {
        console.log(`book.${attribute} = ${book[attribute]} - Type: ${typeof book[attribute]}`);
    }
}
// book["main title"] = JavaScript - Type: string
// book.sub-title = The Definitive Guide - Type: string
// book.for = all audiences - Type: string
// book.author = [object Object] - Type: object




let o = {
    x: 1,
    displayProperties() {
        for (let attribute in this) {
            console.log(`this.${attribute} = ${this[attribute]}`);
        }
    }
}
let p = Object.create(o); // p inherits properties from o and Object.prototype
p.y = 2; // and has an own property y.
let q = Object.create(p); // q inherits properties from p, o, and...
q.z = 3; // ...Object.prototype and has an own property z.

q.displayProperties();
// this.z = 3
// this.y = 2
// this.x = 1
// this.displayProperties = displayProperties() {
//         for (let attribute in this) {
//             console.log(`this.${attribute} = ${this[attribute].toString()}`);
//         }
//     }

// Adding a new prototype to the initial o object:
o.anotherAttribute = "Another attribute";
// q will reflect the changes made to the prototype
q.displayProperties();
// this.z = 3
// this.y = 2
// this.x = 1
// this.displayProperties = displayProperties() {
//         for (let attribute in this) {
//             console.log(`this.${attribute} = ${this[attribute]}`);
//         }
//     }
// this.anotherAttribute = Another attribute


// However, changes to the object down the prototype chain won't affect the uppper prototypes
q.anotherAttribute = "Otro atributo";
q.displayProperties();
// this.z = 3
// this.anotherAttribute = Otro atributo <<<---
// this.y = 2
// this.x = 1
// this.displayProperties = displayProperties() {
//         for (let attribute in this) {
//             console.log(`this.${attribute} = ${this[attribute]}`);
//         }
//     }

// o remains unchanged
o.displayProperties();
// this.x = 1
// this.displayProperties = displayProperties() {
//         for (let attribute in this) {
//             console.log(`this.${attribute} = ${this[attribute]}`);
//         }
//     }
// this.anotherAttribute = Another attribute <<<---
