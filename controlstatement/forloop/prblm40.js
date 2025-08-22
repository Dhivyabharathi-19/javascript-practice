// Write a JavaScript program to convert an array of numbers  into a single comma-separated string (e.g., "1,2,3,4") without using join().
let array = [1, 2, 3, 4];
let str = "";

for (let i = 0; i < array.length; i++) {
  str += array[i];
  if (i < array.length - 1) {
    str += ",";
  }
}
console.log(typeof str);

// output:string
