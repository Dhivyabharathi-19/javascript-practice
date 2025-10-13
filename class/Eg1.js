// Library Book Management

// Problem:
// Create a Book class with the following:

// Properties: title, author, price.
// Method: getDetails() → Prints book details.
// Method: applyDiscount(percent) → Reduces price based on discount.

//  Task:

// Create 3 different books.
// Print their details.
// Apply a discount to one book and show the new price.

// Library Book Management

class Book {
  constructor(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
  }

  getDetails() {
    console.log(
      `Title: ${this.title}, Author: ${this.author}, Price: Rs.${this.price}`
    );
  }

  applyDiscount(percent) {
    let discountAmount = (percent / 100) * this.price;
    this.price = this.price - discountAmount;
    console.log(`Discount Applied: ${percent}%. New Price: Rs.${this.price}`);
  }
}

let book1 = new Book("C++ ", "Bjarne Stroustrup", 500);
let book2 = new Book("JavaScript ", "Douglas Crockford", 700);
let book3 = new Book("Python ", "Guido van Rossum", 600);
book1.applyDiscount(20);
book1.getDetails();
book2.getDetails();
book3.getDetails();
