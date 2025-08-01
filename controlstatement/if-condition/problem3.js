// To check if a number is divisible by 3 or 5 but not both.

let num = 10;

if ((num % 3 === 0 || num % 5 === 0) && !(num % 3 === 0 && num % 5 === 0)) {
  console.log("not divisible by both ");
} else {
  console.log("divisible by both");
}
