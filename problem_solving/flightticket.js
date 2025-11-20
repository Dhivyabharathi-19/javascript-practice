// Task: Flight Booking System

// Scenario:
// You have an array of bookings with passenger info and seat numbers.

// Find passengers seated in business class (rows 1-5).

// Find all passengers with even-numbered seats.

// Data:

// const bookings = [
//   { name: "Hima", seat: "1A" },
//   { name: "Ravi", seat: "6B" },
//   { name: "Anu", seat: "2C" },
//   { name: "Karthik", seat: "4D" }
// ];

const bookings = [
  { name: "Hima", seat: "1A" },
  { name: "Ravi", seat: "6B" },
  { name: "Anu", seat: "2C" },
  { name: "Karthik", seat: "4D" },
];

// 1. Find Business Class Passengers (rows 1–5)
const businessClass = bookings.filter((b) => {
  const row = parseInt(b.seat);
  return row >= 1 && row <= 5;
});

console.log("Business Class Passengers:");
console.log(businessClass);

// 2. Find Passengers with Even-Numbered Seats
const evenSeats = bookings.filter((b) => {
  const row = parseInt(b.seat);
  return row % 2 === 0;
});

console.log("Even Numbered Seats:");
console.log(evenSeats);
