// 7.Reverse the words in an array of strings (e.g., ["hi", "there"] → ["ih", "ereht"]).

let arr = ["hi", "there"];

let reversed = arr.map((word) => word.split("").reverse().join(""));

console.log(reversed);

// output:[ 'ih', 'ereht' ]
