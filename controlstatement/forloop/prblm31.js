//  Find the second largest number in an array.

const arr = [5, 10, 15, 20, 25];

let first = -Infinity;
let second = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > first) {
    second = first;
    first = arr[i];
  } else if (arr[i] > second && arr[i] !== first) {
    second = arr[i];
  }
}
console.log("Second Largest Number:", second);

// output:Second Largest Number: 20.
