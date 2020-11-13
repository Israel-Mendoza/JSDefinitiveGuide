class Book {
    title: string
    author: string

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }
}

let testBook = new Book("Effective JavaScript", "Dan Vanderkam");

testBook.pages = 264;

