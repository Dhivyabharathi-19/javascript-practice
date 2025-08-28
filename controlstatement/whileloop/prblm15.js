// keep Asking The User Until The User Enters Even Num.
const readlineSync = require("readline-sync");
let num;

while (true) {
  num = Number(readlineSync.question("Enter an even number: "));
  if (num % 2 === 0) {
    console.log("Thanks! You entered an even number.");
    break;
  } else {
    console.log("That's odd. Try again!");
  }
}
