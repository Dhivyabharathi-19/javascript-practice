//  Merge two sorted arrays into one sorted array.
let arr1 = [2, 4, 6, 8, 10];
let arr2 = [1, 5, 7, 12, 14];

let merged = [...arr1, ...arr2].sort((a, b) => a - b);

console.log(merged); // [1, 2, 4, 5, 6, 7, 8, 10, 12, 14]
