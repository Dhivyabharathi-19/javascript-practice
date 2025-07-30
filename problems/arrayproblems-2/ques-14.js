// Check if two arrays are equal (same elements in same order).

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2, 3, 5, 6];

let equal = true;

if (arr1.length !== arr2.length) {
  equal = false;
} else {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      equal = false;
      break;
    }
  }
}

console.log(equal);

// output:false
