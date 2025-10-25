// Problem:

// You are given an array of employee objects.
// Each employee has a name, department, and scores (array of numbers representing monthly ratings).

// You must:

// 1. Find all employees in the "Tech" department.

// 2. Calculate their average score (mean of scores).

// 3. Keep only those whose average score is above 80.

// 4. Sort them in descending order of average score.

// 5. Return only their names.

//  Input:

// const employees = [
//   { name: "Ravi", department: "Tech", scores: [90, 85, 92] },
//   { name: "Priya", department: "HR", scores: [75, 80, 70] },
//   { name: "Karthik", department: "Tech", scores: [60, 65, 70] },
//   { name: "Anjali", department: "Tech", scores: [88, 91, 95] },
//   { name: "Divya", department: "Finance", scores: [82, 78, 85] }
// ];

//  Expected Output:

// ["Anjali", "Ravi"]

const employees = [
  { name: "Ravi", department: "Tech", scores: [90, 85, 92] },
  { name: "Priya", department: "HR", scores: [75, 80, 70] },
  { name: "Karthik", department: "Tech", scores: [60, 65, 70] },
  { name: "Anjali", department: "Tech", scores: [88, 91, 95] },
  { name: "Divya", department: "Finance", scores: [82, 78, 85] },
];

const result = employees

  .filter((emp) => emp.department === "Tech")

  .map((emp) => {
    const avg = emp.scores.reduce((sum, s) => sum + s, 0) / emp.scores.length;
    return { ...emp, avg };
  })

  .filter((emp) => emp.avg > 80)

  .sort((a, b) => b.avg - a.avg)

  .map((emp) => emp.name);

console.log(result);
