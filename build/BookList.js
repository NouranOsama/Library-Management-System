"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booklist = void 0;
class Booklist {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    removeBook(id) {
        this.books = this.books.filter(book => book.id !== id);
    }
    searchBooks(query) {
        const queryLower = query.toLowerCase();
        const result = this.books.filter(book => book.title.toLowerCase().includes(queryLower) ||
            book.author.toLowerCase().includes(queryLower));
        return result;
    }
    markAsBorrowed(id, borrower) {
        const book = this.books.find(eachBook => eachBook.id === id);
        if (book && !book.isBorrowed) {
            book.isBorrowed = true;
            book.borrowedBy = borrower;
        }
    }
    markAsReturned(id) {
        const book = this.books.find(eachBook => eachBook.id === id);
        if (book && book.isBorrowed) {
            book.isBorrowed = false;
            book.borrowedBy = null;
        }
        else {
            console.log("book not borrowed");
        }
    }
    getBorrowedBooks() {
        return this.books.filter(eachBook => eachBook.isBorrowed === true);
    }
    printBooks() {
        console.log(this.books);
    }
}
exports.Booklist = Booklist;
