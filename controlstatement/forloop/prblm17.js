// Find sum of all odd numbers between 1 and 50

let sum = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 != 0) {
    sum += i;
  }
}

console.log("Sum of odd numbers from 1 to 50 is:", sum);

//output:Sum of odd numbers from 1 to 50 is: 625
