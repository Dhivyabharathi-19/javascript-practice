// Find the largest number in an array.

let arr = [25, 109, 13, 67, 67890, 22, 90, 8999];

let max = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max + " is largest num in the array");

// output:67890 is largest num in the array.
