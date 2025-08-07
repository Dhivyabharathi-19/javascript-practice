//  Rotate an array to the right by k steps.

let arr = [10, 20, 30, 40, 50];

k = 2;

for (let i = 0; i < k; i++) {
  arr.unshift(arr.pop());
}
console.log(arr);
