// A number's multiplicative presistence is the number of times you must multiply its digit together until you get a single digit.
// Rules:
// You are given a positive integer n.
// Using only a while loop, keep multiplying the digits of n until it becomes a single digit.
// Count  and print the number of steps it took.
// Also print the sequence of numbers at  each step.

let n = 39;
let steps = 0;
let sequence = [];

while (n >= 10) {
  let product = 1;
  let temp = n.toString();

  for (let i = 0; i < temp.length; i++) {
    product *= Number(temp[i]);
  }

  sequence.push(product);
  n = product;
  steps++;
}

console.log("Steps:", steps);
console.log("Sequence:", sequence);

//Output:
// Steps: 3
// Sequence: [ 27, 14, 4 ]
