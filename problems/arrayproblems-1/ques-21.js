// Split array into chunks of given size.

let arr = [1, 2, 3, 4, 5, 7, 8, 3, 2, 4, 2, 6, 10];

let chunkssize = 3;

let result = [];

for (let i = 0; i < arr.length; i += chunkssize) {
  result.push(arr.slice(i, i + chunkssize));
}
console.log(result);

// output:[ [ 1, 2, 3 ], [ 4, 5, 7 ], [ 8, 3, 2 ], [ 4, 2, 6 ] ]
