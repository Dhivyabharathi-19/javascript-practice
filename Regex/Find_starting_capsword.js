//  Find all words starting with a capital letter

let test = "Today is Sunday";

let regex = test.match(/\b[A-Z][a-zA-Z]*\b/g);

console.log(regex);

// Output:[ 'Today', 'Sunday' ]
