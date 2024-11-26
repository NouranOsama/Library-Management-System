import { Book } from './book';

export class Booklist{
    private books: Book[] = []; 
    addBook(book: Book): void {
        this.books.push(book);
    }

    removeBook(id: number): void {
        this.books = this.books.filter(book => book.id !== id);  
    }

    searchBooks(query: string): Book[] {
        const queryLower: string = query.toLowerCase();  
        const result: Book[] = this.books.filter(book => 
            book.title.toLowerCase().includes(queryLower) || 
            book.author.toLowerCase().includes(queryLower)
        );

        return result;  
    }

    markAsBorrowed(id: number, borrower: string): void{
        const book = this.books.find(eachBook => eachBook.id === id);
        if(book && !book.isBorrowed){
            book.isBorrowed = true;
            book.borrowedBy = borrower;
        }
        
    }

    markAsReturned(id: number): void{
        const book = this.books.find(eachBook => eachBook.id === id);
        if(book && book.isBorrowed){
            book.isBorrowed = false;
            book.borrowedBy = null ;
        }
        else{
            console.log("book not borrowed");
        }
    }

    getBorrowedBooks(): Book[]{
        return this.books.filter(eachBook => eachBook.isBorrowed === true);
    }

    printBooks(){
        console.log(this.books);
    }


}