// 9.Find the average of numbers in an array.
let num = [3, 8, 1, 4, 2, 18];

let sum = num.reduce((total, num) => total + num, 0);

// console.log(sum);

let avg = sum / num.length;

console.log(avg);

// output :6
