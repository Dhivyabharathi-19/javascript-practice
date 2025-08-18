//  Count how many multiples of 3 are between 1 and 50.

let Count = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    Count++;
  }
}
console.log(Count);

// output:16
