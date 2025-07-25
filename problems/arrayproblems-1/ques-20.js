// Rotate array to the right by 2 positions.

let arr1 = [1, 2, 3, 4, 7];

let k = 2;

for (let i = 0; i < k; i++) {
  arr1.unshift(arr1.pop());
}
console.log(arr1);

// output:[ 4, 7, 1, 2, 3 ]
