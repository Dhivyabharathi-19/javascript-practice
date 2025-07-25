//Remove duplicates from an array.

let arr1 = [1, 2, 3, 4, 7, 9, 4, 3, 3];

let unique = [...new Set(arr1)];

console.log(unique);

//output:[ 1, 2, 3, 4, 7, 9 ]
