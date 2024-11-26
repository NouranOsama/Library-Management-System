"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = generateId;
exports.validateBook = validateBook;
function generateId() {
    return Math.floor(Date.now() + Math.random());
}
const isObjectEmpty = (objectName) => {
    return Object.keys(objectName).length === 0;
};
function validateBook(book) {
    if (isObjectEmpty(book.id) ||
        isObjectEmpty(book.title) ||
        isObjectEmpty(book.author) ||
        isObjectEmpty(book.year) ||
        isObjectEmpty(book.category)) {
        return false;
    }
    else {
        return true;
    }
}
