//Find the first non repeating character

let str = "abaccdeff";
let found = false;

for (let i = 0; i < str.length; i++) {
  if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
    console.log("First non repeating character is:", str[i]);

    found = true;
    break;
  }
}
if (!found) {
  console.log("no non repeating character is found");
}
