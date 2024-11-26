import { Book } from './book';

export function generateId(): number{
    return Math.floor(Date.now() + Math.random());
}

const isObjectEmpty = (objectName: any) => {
    return Object.keys(objectName).length === 0;
}

export function validateBook(book: Book): boolean{
    if( isObjectEmpty(book.id) ||  
        isObjectEmpty(book.title) ||  
        isObjectEmpty(book.author) ||
        isObjectEmpty(book.year) || 
        isObjectEmpty(book.category)){
        return false;
    }
    else{
        return true;
    }
}

