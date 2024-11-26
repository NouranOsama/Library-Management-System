"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BookList_1 = require("./BookList");
const LibraryUtils_1 = require("./LibraryUtils");
let bookList = new BookList_1.Booklist();
const book1 = {
    id: (0, LibraryUtils_1.generateId)(),
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isBorrowed: false,
    year: 1925,
    borrowedBy: null,
    category: "Fiction"
};
const book2 = {
    id: (0, LibraryUtils_1.generateId)(),
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    isBorrowed: false,
    year: 1988,
    borrowedBy: null,
    category: "Science"
};
bookList.addBook(book1);
bookList.addBook(book2);
const result1 = bookList.searchBooks("Times");
if (result1) {
    console.log(result1);
}
else {
    console.log("book not found");
}
const result2 = bookList.searchBooks("The Great Gatsby");
if (result2) {
    bookList.markAsBorrowed(result2[0].id, "sayed");
}
else {
    console.log("book not found or already borrowed");
}
const result3 = bookList.searchBooks("A Brief History of Time");
if (result3) {
    bookList.removeBook(result3[0].id);
}
else {
    console.log("book not found");
}
console.log(bookList.getBorrowedBooks());
/*View and print the list of borrowed books.*/
