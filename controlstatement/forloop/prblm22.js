// Check if a string is a palindrome.

let str = "madam";

let ispalindrome = true;

for (let i = 0; i < str.length / 2; i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    ispalindrome = false;
    break;
  }
}
console.log(ispalindrome ? "palindrome " : " not a palindrome");

// output: palindrome
