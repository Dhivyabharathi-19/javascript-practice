// Problem: Rotate Array (k steps)

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Rotation means that each element is shifted to the right by one position,

// The last element moves to the front.

// You must do this in-place (without using extra array space, ideally O(1) space).

// Example 1

// Input:

// nums = [1,2,3,4,5,6,7], k = 3

// Output:

// [5,6,7,1,2,3,4]

// Explanation:

// Rotate 1 step: [7,1,2,3,4,5,6]

// Rotate 2 steps: [6,7,1,2,3,4,5]

// Rotate 3 steps: [5,6,7,1,2,3,4]
let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

// function rotate(nums, k) {
//   k = k % nums.length; // handle k > n
//   reverse(nums, 0, nums.length - 1); // Step 1 [7,6,5,4,3,2,1]
//   reverse(nums, 0, k - 1); // Step 2 [5,6,7,4,3,2,1]
//   reverse(nums, k, nums.length - 1); // Step 3
// }

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

// Example
let nums = [1, 2, 3, 4, 5, 6, 7];
// rotate(nums, 3);
reverse(nums, 0, k - 1);
console.log(nums); // Output: [5,6,7,1,2,3,4]
