// Reverse the order of words in a string without reversing the letters in each word.

let str = "  Hello World  ";

let reverse = str.trim().split(/\s+/).reverse().join(" ");

console.log(reverse);
