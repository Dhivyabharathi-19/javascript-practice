// Write a function that returns only the elements that are at even indices in the original array.

let arr = [10, 20, 30, 40, 50];

let even = arr.filter((num, index) => index % 2 === 0);

console.log(even);

//output: [10, 30, 50]
