// .Write a program to swap the first and last elements in an array.

let arr = [1, 2, 3, 4, 5];

let temp = arr[0];
arr[0] = arr[arr.length - 1];
arr[arr.length - 1] = temp;

console.log(arr);

// output:[ 5, 2, 3, 4, 1 ]
