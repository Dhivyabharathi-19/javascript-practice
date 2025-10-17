// Q1: Library Book Tracker

// You are building a Library system.

// Every book has a title and author (instance properties).

// The library has a static property totalBooks to track the number of books added.

// Whenever a new book is created, increment this counter.

// Add a static method getTotalBooks() that shows how many books are in the library.
class Library {
  static totalBooks = 0;
  static allBooks = [];

  constructor(title, author) {
    this.title = title;
    this.author = author;

    Library.totalBooks++;
    Library.allBooks.push(this);
  }

  static getTotalBooks() {
    return `Total books in library: ${Library.totalBooks}`;
  }
}

let book1 = new Library("js", "abc");
let book2 = new Library("java", "xyz");

console.log(Library.getTotalBooks());

console.log(Library.allBooks);
