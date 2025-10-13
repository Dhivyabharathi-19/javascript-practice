// Homework Q2: Movie Ticket Booking System

//  Problem:
// Create a MovieTicket class with:

// Properties: movieName, seatType, pricePerTicket.

// Method: calculateTotal(tickets) → Returns total price.

// Method: upgradeSeat() → Increases price per ticket by ₹50 (for premium seats).

//  Task:

// Create 2 different movies.

// Book tickets for both.
// Upgrade seat type for one movie and calculate again.

class MovieTicket {
  constructor(movieName, seatType, pricePerTicket) {
    this.movieName = movieName;
    this.seatType = seatType;
    this.pricePerTicket = pricePerTicket;
  }
  calculateTotal(tickets) {
    return this.pricePerTicket * tickets;
  }
  upgradeSeat() {
    this.pricePerTicket += 50;
    this.seatType = "Premium";
  }
}
let movie1 = new MovieTicket("amaran", "normal", 100);
let movie2 = new MovieTicket("sura", "normal", 200);

console.log("Booking 3 tickets:" + movie1.movieName);
console.log("Total:" + movie1.calculateTotal(3));
console.log("Booking 3 tickets:" + movie2.movieName);
console.log("Total:" + movie2.calculateTotal(3));

console.log("Upgrading seat for:" + movie1.movieName);
movie1.upgradeSeat();

console.log(
  "Booking 3 tickets again for:" +
    movie1.movieName +
    "(" +
    movie1.seatType +
    ")"
);
console.log("total after grade:" + movie1.calculateTotal(3));
