// Print numbers from 1 to 100, skipping multiples of 5.

for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    continue; //skip the num
  }

  console.log(i);
}
