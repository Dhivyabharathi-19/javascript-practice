// Sum all numbers in an array using for...of.

const marks = [60, 75, 89, 55];
let sum = 0;

for (let score of marks) {
  sum += score;
}

console.log("Sum of all Numbers:", sum);

//output:Sum of all Numbers: 279.
