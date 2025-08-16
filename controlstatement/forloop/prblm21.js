//Print pattern of numbers: 1 22 333 4444.

for (let i = 1; i <= 4; i++) {
  let line = "";

  for (let j = 1; j <= i; j++) {
    line += i;
  }

  console.log(line);
}
//output:
1;
22;
333;
4444;
