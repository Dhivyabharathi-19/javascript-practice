// 3.Rotate an array to the left by 3 positions.
let arr = [1, 2, 3, 4, 6, 7];
let k = 3;

for (let i = 0; i < k; i++) {
  let res = arr.shift();
  arr.push(res);
}
console.log(arr);

// output:[ 4, 6, 7, 1, 2, 3 ]
