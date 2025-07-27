// Flatten a deeply nested array without using .flat() (e.g., recursion).

let nested = [1, 2, [3, 4], [4, 5], 6, 7];

let flat = nested.flat();

console.log(flat);

// output: [1, 2, 3, 4, 4, 5, 6, 7];
