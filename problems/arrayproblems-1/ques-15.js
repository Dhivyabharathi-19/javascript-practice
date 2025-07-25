// Find the largest number in an array.

let arr = [10, 20, 30, 40, 50];

let max = arr.reduce((a, b) => (a > b ? a : b));

console.log(max);

// output:50
