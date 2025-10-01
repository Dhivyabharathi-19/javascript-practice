// Check if a string starts and ends with the same word.

let test = "hello sat hello";

let regex = /^(\w+)\s+(\w+)\s+.*\1$/;

console.log(regex.test(test));

//Output:true
