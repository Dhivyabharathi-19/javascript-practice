// Create a new array with doubled values.

let array = [1, 2, 3, 4, 5];

let doubled = [];

for (let i = 0; i < array.length; i++) {
  doubled.push(array[i] * 2);
}

console.log("array:", array);
console.log("Doubled:", doubled);

// output:array: [ 1, 2, 3, 4, 5 ]
// Doubled: [ 2, 4, 6, 8, 10 ]
