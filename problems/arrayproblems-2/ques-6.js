// 6Find the difference between the largest and smallest number in an array.

let arr = [5, 2, 9, 1, 7];

let max = Math.max(...arr);
console.log("max :" + max);
let min = Math.min(...arr);
console.log("min:" + min);
let difference = max - min;

console.log("difference:" + difference);

// output:Max: 9
//        Min: 1;
//        Difference: 8;
