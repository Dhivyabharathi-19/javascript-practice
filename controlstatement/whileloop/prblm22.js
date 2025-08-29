// Write a job program using a while loop that print numbers number 1 to 5.
//1. Skip the number 3
//2. Stop the loop the number reaches 5.

let num = 1;

while (num <= 5) {
  if (num === 3) {
    num++;
    continue;
  }

  if (num === 5) {
    break;
  }
  console.log(num);
  num++;
}

// output:
// 1
// 2
// 4
