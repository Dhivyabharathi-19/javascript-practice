// 5.Remove all negative numbers from an array.
let arr = [1, 2, -2, -5, 8, -1, 0, 3, -9];

// let positive = arr.find((n) => n > 0);
// console.log(positive);

let positive = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] >= 0) {
    positive.push(arr[i]);
  }
}

console.log(positive);

// output:[ 1, 2, 8, 0, 3 ]
