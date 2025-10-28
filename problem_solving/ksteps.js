// Rotate an array to the right by k steps in-place.
// Rotate Array by k Positions

let arr = [1, 2, 3, 4, 5];
let k = 2;
for (let i = 0; i < k; i++) {
  arr.unshift(arr.pop());
}
console.log(arr);
