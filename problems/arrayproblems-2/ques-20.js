// Write a function that returns true if the array has any dupilcate elements,else return false.

let numbers = [1, 2, 3, 4, 2];

let hasDuplicate = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers.indexOf(numbers[i]) !== numbers.lastIndexOf(numbers[i])) {
    hasDuplicate = true;
    break;
  }
}

console.log(hasDuplicate);

// output: true
