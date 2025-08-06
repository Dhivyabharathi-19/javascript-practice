//  Remove all duplicates from an array.

let arr = [2, 3, 4, 5, 6, 3, 2, 7, 8, 10];

let duplicates = [...new Set(arr)];
console.log(duplicates);
