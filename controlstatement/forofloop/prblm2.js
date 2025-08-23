// Find the longest string in an array using for...of
// const fruits = ["apple", "banana", "watermelon", "kiwi"];

const fruits = ["apple", "banana", "watermelon", "kiwi"];

let longest = "";

for (let fruit of fruits) {
  if (fruit.length > longest.length) {
    longest = fruit;
  }
}
console.log(longest);

//output:watermelon
