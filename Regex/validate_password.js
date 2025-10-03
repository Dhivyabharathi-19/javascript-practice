// Validate a password (at least 8 Chars, One UpperCase , One LowerCase, One Digit, One Special Char ).

let test = "Password@124";

let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*?!])[A-Z a-z\d@#$%^&*?!]{8,}$/;

console.log(regex.test(test));

//OutPut:true
