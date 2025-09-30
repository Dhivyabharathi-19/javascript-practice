// Extract hashtags from a tweet("Learning #JavaScript #Regex #Interview").

let test = "Learning #JavaScript #Regex #Interview";

let regex = test.match(/#\w+/g);

console.log(regex);

//output: [ '#JavaScript', '#Regex', '#Interview' ]
