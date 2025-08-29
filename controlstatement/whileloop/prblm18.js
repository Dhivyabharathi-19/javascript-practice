// Count how many multiples of 3 are between 1 and 50.

let Count = 0;

let i = 1;

while (i <= 50) {
  if (i % 3 === 0) {
    Count++;
  }
  i++;
}
console.log(Count);

// Output:16
