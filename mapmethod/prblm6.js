// Loop through all keys in the Map using .keys() and print them.
const studentMarks = new Map();

studentMarks.set("Alice", 85);
studentMarks.set("Bob", 92);
studentMarks.set("Charlie", 78);

for (let name of studentMarks.keys()) {
  console.log(name);
}

//output:
// Alice
// Bob
// Charlie
