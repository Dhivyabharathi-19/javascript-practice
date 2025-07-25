// Remove falsy values from an array.

let ma = [0, "hello", "", 42, null, "js", false];

let filter = ma.filter(Boolean);

console.log(filter);

// output:[ 'hello', 42, 'js' ]
