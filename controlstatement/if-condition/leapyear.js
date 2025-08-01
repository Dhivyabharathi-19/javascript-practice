// leap year or  not

let year = 2028;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(" Special leap Year");
} else {
  console.log("non leap year");
}
