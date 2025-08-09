//  Fully flatten a deeply nested array.

let arr = [1, 2, [2, [5, [10]]], 6];

let fullyFlattened = arr.flat(Infinity);

console.log(fullyFlattened); // [1, 2, 2, 5, 10, 6]
