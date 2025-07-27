// Separate even and odd numbers into two arrays.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let even = [];
let odd = [];

numbers.forEach((num) => {
  if (num % 2 === 0) {
    even.push(num);
  } else {
    odd.push(num);
  }
});

console.log("Even:", even);
console.log("Odd:", odd);

// output:Even: [ 2, 4, 6, 8 ]
//        Odd: [ 1, 3, 5, 7, 9 ]
