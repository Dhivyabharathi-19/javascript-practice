// Count occurences of each element.

let fruits = ["apple", "banana", "strawberry", "apple", "banana"];

let count = {};

fruits.forEach((item) => {
  count[item] = (count[item] || 0) + 1;
});
console.log(count);

// output:{ apple: 2, banana: 2, strawberry: 1 }
