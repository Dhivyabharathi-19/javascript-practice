const readlineSync = require("readline-sync");

const username = "user1";
const password = "abc123";

let attempts = 0;
let maxattempts = 3;
let inputuser = "";
let inputpass = "";

while (
  (inputuser !== username || inputpass !== password) &&
  attempts < maxattempts
) {
  inputuser = readlineSync.question("Enter Username: ");
  inputpass = readlineSync.question("Enter Password: ");
  attempts++;
}

if (inputuser === username && inputpass === password) {
  console.log("LOGGED IN SUCCESSFULLY");
} else {
  console.log("TOO MANY FAILED ATTEMPTS — ACCESS BLOCKED");
}
