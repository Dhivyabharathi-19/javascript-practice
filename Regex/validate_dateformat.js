// Validate date format (DD/MM/YYYY)

let test = "22/08/2025";

let regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

console.log(regex.test(test));

// true
