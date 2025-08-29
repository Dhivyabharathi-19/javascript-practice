//The Collatz Conjecture Challenge.
// You are Given a Positive Integer n.
// Using Only a While loop, repeatedly do the following untils n becomes 1.
//If n  is even, divide it by 2.
//If n is odd, multiply it by 3 and add  1.
//Count the number of steps it takes to reach 1,and print both the sequence and the step count.

let n = 7;
let steps = 0;
let sequence = "";
while (n !== 1) {
  sequence += n + "->";
  if (n % 2 == 0) {
    n = n / 2;
  } else {
    n = 3 * n + 1;
  }
  steps++;
}
sequence += "1";
console.log("sequence:", sequence);
console.log("steps:", steps);

//output: sequence: 7->22->11->34->17->52->26->13->40->20->10->5->16->8->4->2->1
// steps: 16
