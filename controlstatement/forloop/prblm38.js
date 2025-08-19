//  Print numbers divisible by both 3 and 5 (1 to 50).

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

// output:
// 15
// 30
// 45
