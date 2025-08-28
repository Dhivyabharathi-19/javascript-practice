//"Write a JavaScript program that asks the user to enter a username and password, allows up to 3 attempts, and displays specific error messages if the username, password, or both are incorrect. If the user logs in successfully, display a success message; otherwise, after 3 failed attempts, display 'Too Many Failed Attempts'."

// let username = "dhivya";
const readlineSync = require("readline-sync");
let original = "abc123";
let user = "deepi";
// let password = "abc123";
let attemptpass = 0;
let maxattempts = 3;

while (attemptpass < maxattempts) {
  let username = readlineSync.question("Enter Username");
  let password = readlineSync.question("Enter Your Password", {
    hideEchoBack: true,
  });

  if (password === original && username === user) {
    console.log("Login Successfully");
  } else if (username === user && password != original) {
    console.log("Password Incorrect");
  } else if (username != user && password === original) {
    console.log("UserNAme Incorrect");
  } else {
    console.log("Both are Incorrect");
  }
  attemptpass++;
}

if (attemptpass === maxattempts) {
  console.log("TO Many Failed Attempts");
}
