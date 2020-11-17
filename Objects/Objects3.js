// Deleting properties...

let book = {
    title: "JavaScript",
    subtitle: "The Definitive Guide",
    author: {
        firstName: "David",
        lastName: "Flanagan",
    },
    pages: 687,
    bestBookEver: undefined,
    describe() {
        console.log(`${this.title}: ${this.subtitle} by ${this.author.firstName} ${this.author.lastName}`);
    }
};


let deletionSuccessful = delete book.pages;
let msg = deletionSuccessful ? `We deleted the pages!` : `Oops! Pages deletion failed!`
console.log(msg);
// We deleted the pages!

deletionSuccessful = delete book.pages;
msg = deletionSuccessful ? `We deleted the pages!` : `Oops! Pages deletion failed!`
console.log(msg)
// We deleted the pages!


// TESTING IF A GIVEN PROPERTY IS IN AN OBJECT

let usingIn = "title" in book;
let hasOwnPropertyTitle = book.hasOwnProperty("title");
let hasOwnPropertyToString = book.hasOwnProperty("toString");
let accessingExistingProperty = book.subtitle !== undefined;
let accessingNonExistingProperty = book.pages !== undefined;

console.log(`"title" in book = ${usingIn}`);
// "title" in book = true
console.log(`book.hasOwnProperty("title") = ${hasOwnPropertyTitle}`);
// book.hasOwnProperty("title") = true
console.log(`book.hasOwnProperty("toString") = ${hasOwnPropertyToString}`);
// book.hasOwnProperty("toString") = false
console.log(`book.subtitle !== undefined = ${accessingExistingProperty}`);
// book.subtitle !== undefined = true
console.log(`book.pages !== undefined = ${accessingNonExistingProperty}`);
// book.pages !== undefined = false


// "in" can distinguish between properties set to undefined, or if they really are not in the object

let inUndefined = "bestBookEver" in book;
console.log(`Is "bestBookEver" in book? ${inUndefined}`);
// Is "bestBookEver" in book? true


// ITERATING THROUGH AN OBJECT

// toString() is inherited by book but is not enumerable
console.log(book.toString());   // [object Object]

// Only enumerable properties can be iterated over:

for (let prop in book) {
    // Printing the name of the property
    console.log(prop);
}
// title
// subtitle
// author
// bestBookEver
// describe

for (let prop in book) {
    // Printing the name and the value of the property
    console.log(`${prop}: ${book[prop]}`);
}
// title: JavaScript
// subtitle: The Definitive Guide
// author: [object Object]
// bestBookEver: undefined
// describe: describe() {
//         console.log(`${this.title}: ${this.subtitle} by ${this.author.firstName} ${this.author.lastName}`);
//     }

// Checking for type and displaying only methods
for (let prop in book) {
    if (typeof book[prop] === "function") {
        console.log(`Guys! We got a method here, called "${prop}"`);
    }
}
// Guys! We got a method here, called "describe"


// Getting an array out of the keys of an object:

let bookKeys = Object.keys(book);

for (let key of bookKeys) {
    console.log(key);
}
// title
// subtitle
// author
// bestBookEver
// describe
