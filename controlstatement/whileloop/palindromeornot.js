let num = 6728276;

let org = num;

let reversed = 0;

while (num > 0) {
  let digits = num % 10;

  reversed = reversed * 10 + digits;

  num = Math.floor(num / 10);
}
console.log("Reversed:", reversed);
if (org === reversed) {
  console.log(org + "Is A Palindrome");
} else {
  console.log(org + "Is Not A Palindrome");
}

//output:
// Reversed: 6728276                                                                      > node palindromeornot.js
// 6728276Is A Palindrome
