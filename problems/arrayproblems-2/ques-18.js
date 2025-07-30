// Replace all even numbers with zero

let arr = [1, 2, 3, 4, 5, 6];

arr = arr.map((num) => (num % 2 === 0 ? 0 : num));

console.log(arr);

//output: [1, 0, 3, 0, 5, 0]
