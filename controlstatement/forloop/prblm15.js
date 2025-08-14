//  Count digits in a number

let num = 1234567891;

count = "0";

for (let i = num; i > 0; i = Math.floor(i / 10)) {
  count++;
}
console.log(count);

// output:10
