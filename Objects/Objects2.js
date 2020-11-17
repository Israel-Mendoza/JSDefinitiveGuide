// Attempting to set or access a property on null or undefined also causes a TypeError.
// We must avoid this at all costs!


let book = {
    title: "JavaScript",
    subtitle: "The Definitive Guide",
    author: {
        firstName: "David",
        lastName: "Flanagan",
    },
};

// Verbose way to precent a TypeError

let middleName = null;

if (book) {
    if (book.author) {
        if (book.author.middleName) {
            middleName = book.author.middleName;
        }
    }
}

if (middleName) {
    console.log(`Oh! There was a middle name! It is ${middleName}.`);
} else {
    console.log(`Oh! There was no a middle name! But at least we didn't get a TypeError.`);
}
// Oh! There was no a middle name! But at least we didn't get a TypeError.


middleName = null;

middleName = book && book.author && book.author.middleName

if (middleName) {
    console.log(`Oh! There was a middle name! It is ${middleName}.`);
} else {
    console.log(`Oh! There was no a middle name! But at least we didn't get a TypeError.`);
}
// Oh! There was no a middle name! But at least we didn't get a TypeError.


middleName = null;

middleName = book?.author?.middleName;

if (middleName) {
    console.log(`Oh! There was a middle name! It is ${middleName}.`);
} else {
    console.log(`Oh! There was no a middle name! But at least we didn't get a TypeError.`);
}
// Oh! There was no a middle name! But at least we didn't get a TypeError.
