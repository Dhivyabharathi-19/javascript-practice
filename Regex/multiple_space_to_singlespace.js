// Replace Multiple Spaces With a Single Space.

let test = "This    Has      Many    Spaces";

let regex = /\s+/g;

console.log(test.replace(regex, " "));

//Output:This Has Many Spaces.
