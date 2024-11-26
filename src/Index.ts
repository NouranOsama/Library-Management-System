import { Book } from './book';
import { Booklist } from './BookList';
import { generateId , validateBook } from './LibraryUtils';

let bookList = new Booklist();

const book1: Book = {
    id: generateId(),
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isBorrowed: false,
    year: 1925,
    borrowedBy: null,
    category: "Fiction"
}

const book2: Book = {
    id: generateId(),
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    isBorrowed: false,
    year: 1988,
    borrowedBy: null,
    category: "Science"
} 

bookList.addBook(book1);
bookList.addBook(book2);

const result1: Book[] = bookList.searchBooks("Times");
if(result1){
    console.log(result1);
}
else{
    console.log("book not found");
}

const result2: Book[] = bookList.searchBooks("The Great Gatsby");
if(result2){
    bookList.markAsBorrowed( result2[0].id , "sayed" )
}
else{
    console.log("book not found or already borrowed");
}

const result3: Book[] = bookList.searchBooks("A Brief History of Time");
if(result3){
    bookList.removeBook( result3[0].id )
}
else{
    console.log("book not found");
}

console.log(bookList.getBorrowedBooks());



