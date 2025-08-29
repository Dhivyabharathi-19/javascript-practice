// Find the largest number in an array.

let array = [5, 8, 12, 3, 9, 15, 4];
let i = 0;

let largest = array[0];

while (i < array.length) {
  if (array[i] > largest) {
    largest = array[i];
  }
  i++;
}

console.log("Largest number: " + largest);

//Output:Largest number: 15
