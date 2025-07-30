// Write a function that remove all occurance of  a specific value from an array.

let arr = [1, 2, 3, 2, 4, 2, 5];
let value = 2;

let newArr = arr.filter((num) => num !== value);

console.log(newArr);

//output: [1, 3, 4, 5]
