let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evencount = [];
let oddcount = [];
num.forEach((n) => {
  if (n % 2 === 0) {
    evencount.push(n);
  } else {
    oddcount.push(n);
  }
});
console.log("oddcount:", oddcount);
console.log("eventcount:", evencount);
