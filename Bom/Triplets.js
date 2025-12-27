// Question

// > Given an array of integers, find all unique triplets (3 numbers) whose sum equals a given target value.
// ---

//  Concept / Logic

// 1. Triplet means a group of 3 numbers → (a, b, c).

// 2. We need to find all combinations of 3 numbers where
// a + b + c = target.

// 3. To avoid duplicates and to make it faster, we can:

// Sort the array first.

// Use two pointers inside a loop.

// ---
//  Example

// Input:

// arr = [1, 2, -1, 0, -2, 1]
// target = 0

// Output:

// Triplets are:
// [-2, 1, 1]
// [-1, 0, 1]

// Because:

// (-2 + 1 + 1 = 0)

// (-1 + 0 + 1 = 0)
function triplets(arr, target) {
  arr.sort((a, b) => a - b); //Sorting   the  array

  const result = []; //store the triplets create an empty array.
  //[ -2, -1, 0, 1, 1, 2 ]
  for (i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] === arr[i] - 1) continue;

    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      if (sum === target) {
        result.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}
const arr = [1, 2, -1, 0, -2, 1];
target = 0;

console.log("triplets are:", triplets(arr, target));
