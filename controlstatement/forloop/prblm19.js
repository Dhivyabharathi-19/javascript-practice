//  Check if a number is prime.

let n = 179;

let isPrime = true;

// console.log(Math.sqrt(n));

for (let i = 2; i <= Math.sqrt(n); i++) {
  if (n % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(n + (isPrime ? "is prime" : "is not prime"));
