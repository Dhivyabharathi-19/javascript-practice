//Print Factorial of a number (eg:5! =120)

let n = 5;

let factorial = 1;
for (let i = 1; i <= n; i++) {
  //   factorial = factorial * i;
  factorial *= i;
  // console.log(factorial);
}
console.log(`Factorial of ${n} is ${factorial}`);

// output:
// 1
// 2
// 6
// 24
// 120
