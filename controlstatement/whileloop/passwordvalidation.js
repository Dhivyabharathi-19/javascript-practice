// const readlineSync = require("readline-sync");
// let password = "";
// const correctpassword = "dhivya";

// while (password !== correctpassword) {
//   password = readlineSync.question("Enter Your Password: ");
// }

// console.log("ACCESS GRANTED");

const readlineSync = require("readline-sync");

let password = "";
const correctpassword = "abc123";
let tries = 0;

while (password !== correctpassword && tries < 3) {
  password = readlineSync.question("Enter Your Password: ");
  tries++;
}

if (password === correctpassword) {
  console.log("Access Granted");
} else {
  console.log("Too Many Attempts!! Access Blocked");
}
