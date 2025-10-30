// Example 2

// Input:

// nums = [-1,-100,3,99], k = 2

// Output:

// [3,99,-1,-100]

// ---

//  Constraints

// 1 <= nums.length <= 10^5

// -10^9 <= nums[i] <= 10^9

// 0 <= k <= 10^5
let num = [-1, -100, 3, 99];
let k = 2;
for (let i = 0; i < k; i++) {
  num.unshift(num.pop());
}

console.log(num);
