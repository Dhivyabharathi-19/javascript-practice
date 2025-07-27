// Remove all elements after a certain value (e.g., remove everything after 5).

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20];

let target = 5;
let index = nums.indexOf(target);

if (index !== -1) {
  nums = nums.slice(0, index + 1);
}
console.log(nums);

// output:[ 1, 2, 3, 4, 5 ]
