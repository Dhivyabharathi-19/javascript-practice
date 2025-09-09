// Loop through all entries using .entries() and print: "Student: John, Marks: 80".

const studentMarks = new Map();

studentMarks.set("John", 80);
studentMarks.set("Alice", 85);
studentMarks.set("Bob", 92);

for (let [name, marks] of studentMarks.entries()) {
  console.log(`Student: ${name}, Marks: ${marks}`);
}

//output:
// Student: John, Marks: 80
// Student: Alice, Marks: 85
// Student: Bob, Marks: 92
