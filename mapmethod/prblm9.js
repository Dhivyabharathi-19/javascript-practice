// Clear all entries from a Map using .clear() and confirm it’s empty.
const studentMarks = new Map();

studentMarks.set("Alice", 85);
studentMarks.set("Bob", 92);
studentMarks.set("Charlie", 78);

studentMarks.clear();

console.log("Map size after clear:", studentMarks.size);
console.log(studentMarks);

//output:
// Map size after clear: 0
// Map(0) {}
