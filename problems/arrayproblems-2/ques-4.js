// 4.Find the intersection of two arrays without using filter().

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

// let res = arr1.includes(arr2);

// console.log(res);
let intersection = [];
for (let i = 0; i < arr1.length; i++) {
  if (arr2.includes(arr1[i])) {
    intersection.push(arr1[i]);
  }
}

console.log(intersection);

// output :[ 3, 4, 5 ]
