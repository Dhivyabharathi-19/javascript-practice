// Find the second largest number in an array.

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let res = a.sort((a, b) => b - a);
let largest = res.indexOf(1);

console.log(largest);
