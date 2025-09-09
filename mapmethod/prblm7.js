// 17. Loop through all values in the Map using .values() and find the total sum of all marks.

const studentMarks = new Map();

studentMarks.set("Alice", 85);
studentMarks.set("Bob", 92);
studentMarks.set("Charlie", 78);

let sum = 0;
for (let mark of studentMarks.values()) {
  sum += mark;
}

console.log("Total Marks:", sum);

//output:Total Marks: 255
