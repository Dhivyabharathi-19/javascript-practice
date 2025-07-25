// Find common elements in two arrays.

let arr1 = [1, 2, 3, 4];

let arr2 = [1, 90, 44, 4];

let common = arr1.filter((item) => arr2.includes(item));

console.log(common);

// output:[ 1, 4 ]
