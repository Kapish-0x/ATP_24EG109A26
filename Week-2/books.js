// Class representing a book
class Books {
    // Book properties
    title;
    author;
    pages;
    isAvailable;

    // Constructor to initialize book details
    constructor(title, author, pages, isAvailable) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isAvailable = isAvailable;
    }

    // Marks the book as borrowed if available
    borrow() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`You have borrowed "${this.title}".`);
        }
    }

    // Marks the book as returned
    returnBook() {
        this.isAvailable = true;
        console.log(`"${this.title}" has been returned.`);
    }

    // Returns complete information about the book
    getInfo() {
        return `${this.title} by ${this.author}, ${this.pages} pages. Available: ${this.isAvailable}`;
    }

    // Checks if the book has more than 300 pages
    isLongBook() {
        return this.pages > 300;
    }
}

// Creating book objects
let b1 = new Books('DSA', 'Ram', 405, true);
let b2 = new Books('DBS', 'Kaps', 500, true);
let b3 = new Books('JAVA', 'Sam', 77, true);
let b4 = new Books('JS', 'Kevin', 120, true);
let b5 = new Books('Python', 'Hogs', 250, true);

// Storing all books in an array
let books = [b1, b2, b3, b4, b5];

// Displaying information of all books
console.log(b1.getInfo());
console.log(b2.getInfo());
console.log(b3.getInfo());
console.log(b4.getInfo());
console.log(b5.getInfo());

// Borrowing books
b1.borrow();
console.log(b1.isAvailable);

b3.borrow();
console.log(b3.isAvailable);

// Returning a book
b1.returnBook();
console.log(`updated status: ${b1.isAvailable}`);

// Counting books with more than 300 pages
let count = 0;

for (let i = 0; i < books.length; i++) {
    if (books[i].isLongBook())
        count++;
}

console.log("count of longbooks: ", count);

// Displaying titles of available books
books.forEach(book => {
    if (book.isAvailable) {
        console.log(book.title);
    }
});