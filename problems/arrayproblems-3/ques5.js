//  Count how many times each element appears in an array.

let vechicles = ["car", "lorry", "bike", "cycle", "car", "lorry"];

let count = {};

vechicles.forEach((item) => {
  count[item] = (count[item] || 0) + 1;
});
console.log(count);
