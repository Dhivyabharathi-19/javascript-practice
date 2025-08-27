//Prime or Not.

let num = 30; // change this to test other numbers
let i = 2;
let isPrime = true;

while (i <= Math.sqrt(num)) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
  i++;
}

console.log(isPrime ? "Prime" : "Not Prime");
