// Sort an array of strings alphabetically, case-insensitive.

let arr = ["dhivya", "bharathi", "Karthika"];

let sorted = arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

console.log(sorted); // ["bharathi", "dhivya", "Karthika"]
