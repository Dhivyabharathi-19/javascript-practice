// Capitalize every word in an array of strings.

let person = ["dhivya", "bharathi"];

let strings = person.map(
  (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
);

console.log(strings);
