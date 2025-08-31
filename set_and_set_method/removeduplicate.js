//  Given an array with duplicates, use a Set to remove duplicates.
const nums = [1, 2, 2, 3, 4, 4, 5];

const uniquenum = new Set(nums);

console.log("uniuenum:", uniquenum);

//output:uniuenum: Set(5) { 1, 2, 3, 4, 5 }
