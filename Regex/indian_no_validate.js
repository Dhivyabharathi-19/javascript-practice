// Validate Indian mobile number (10 digits, starts with 6–9).

let test = "9234567810";

let regex = /^[6-9]\d{9}$/;

console.log(regex.test(test));

//true
