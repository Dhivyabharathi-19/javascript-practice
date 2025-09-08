// Delete one student from the Map using .delete().

const studentMarks = new Map();

studentMarks.set("Alice", 85);
studentMarks.set("Bob", 92);
studentMarks.set("Charlie", 78);

studentMarks.delete("Bob");

console.log(studentMarks);

// output:Map(2) { 'Alice' => 85, 'Charlie' => 78 }
