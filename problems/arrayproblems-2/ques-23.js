// Given an array  of strings return the largest .if there are multiple with the same length return first one

let arr = ["apple", "carrot", "cat"];
let long = arr.sort((a, b) => b.length - a.length);
let result = arr[0];

console.log(result);

//output:carrot
