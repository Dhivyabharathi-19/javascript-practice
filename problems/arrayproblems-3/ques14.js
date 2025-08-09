// Get an array of unique words longer than 4 characters.

let arr = ["deepika", "Teddy", "tom", "sam"];

let longer = arr.filter((word) => word.length > 4);

let unique = [...new Set(longer)];

console.log(unique); // [ 'deepika', 'Teddy' ]
