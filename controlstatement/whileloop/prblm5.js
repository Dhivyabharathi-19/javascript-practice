// Print digits of a num.

let num = 6728;

while (num > 0) {
  let digit = num % 10;
  console.log(digit);

  num = Math.floor(num / 10);
}

// output:
// 8
// 2
// 7
// 6
