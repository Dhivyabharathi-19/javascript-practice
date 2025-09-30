//Extract all numbers from a string.

let str = "Apple, 12345,orange, 67890";

let numbers = str.match(/\d+/g);
console.log(numbers);

// output:[ '12345', '67890' ]
