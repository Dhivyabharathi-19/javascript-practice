// Email Validation.

let email = "abc@gmail.com";

let regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
console.log(regex.test(email));

// output:true
