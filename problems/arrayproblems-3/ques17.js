// Chain .filter(), .map(), and .reduce() to process numbers.

let arr = [1, 2, 3, 4, 5, 6];
let result = arr
  .filter((n) => n % 2 === 0) // [2, 4, 6]
  .map((n) => n * 2) // [4, 8, 12]
  .reduce((total, n) => total + n, 0); // 24

console.log(result); // 24
