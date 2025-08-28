// Sum of all digits untill you get a  single digit.

let num = 2525;

while (num > 9) {
  let sum = 0;
  while (num > 0) {
    sum = sum + (num % 10);
    num = Math.floor(num / 10);
  }
  num = sum;
}
console.log(num);

// output:5
