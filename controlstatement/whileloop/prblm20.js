// Write a JavaScript program that counts how many vowels are present in the string.

let ch = "pineapple";
let count = 0;
let i = 0;

while (i < ch.length) {
  let str = ch[i].toLowerCase();
  if ("aeiou".includes(str)) {
    count++;
  }
  i++;
}
console.log(count);

// Output:4
