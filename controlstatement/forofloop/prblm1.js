//  Loop through a 2D array (array of arrays) using for...of
// const matrix = [[1, 2], [3, 4], [5, 6]];

const matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];

for (let row of matrix) {
  for (let num of row) {
    console.log(num);
  }
}

// output:
// 1
// 2
// 3
// 4
// 5
// 6
