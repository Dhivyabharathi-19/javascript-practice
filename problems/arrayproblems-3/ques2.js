// Reverse an array in place (without using .reverse()).

let fruits = ["apple", "mango", "orange", "grapes"];

let reversed = fruits.reduce((acc, item) => [item, ...acc], []);

console.log(reversed); // ["grapes", "orange", "mango", "apple"]
