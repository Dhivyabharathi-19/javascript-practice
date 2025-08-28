// First num that is divisible by both 3 and 7  between 1 and 1000.

let i = 1;

while (i <= 1000) {
  if (i % 7 === 0 && i % 3 === 0) {
    console.log("Found num that is first divisible by both", i);
    break;
  }
  i++;
}

//output:Found num that is first divisible by both 21
