// Find the first non-repeating element in an array.

let arr = [1, 2, 5, 7, 6, 5, 2, 5, 8];

let first = null;

for (let i = 0; i < arr.length; i++) {
  if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
    first = arr[i];
    break;
  }
}
console.log(first);

// output: 1;
