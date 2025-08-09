// Combine multiple arrays into one without duplicates.

let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
let arr3 = [5, 6, 7];

let combined = [...arr1, ...arr2, ...arr3];

let unique = [...new Set(combined)];

console.log(unique); // [1, 2, 3, 4, 5, 6, 7]
