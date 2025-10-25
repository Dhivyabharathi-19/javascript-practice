// Scenario:
// You have an array of employees with their check-in times. You need to:

// Find employees who arrived late (after 9:30 AM).

// Count total late employees.

// Generate a message for each late employee.

// Data:

// const employees = [
//   { name: "Hima", checkIn: "09:15" },
//   { name: "Ravi", checkIn: "09:45" },
//   { name: "Anu", checkIn: "10:00" },
//   { name: "Karthik", checkIn: "09:25" }
// ];

const employees = [
  { name: "Hima", checkIn: "09:15" },
  { name: "Ravi", checkIn: "09:45" },
  { name: "Anu", checkIn: "10:00" },
  { name: "Karthik", checkIn: "09:25" },
];

let lateCount = 0;

for (let i = 0; i < employees.length; i++) {
  if (employees[i].checkIn > "09:30") {
    console.log(
      employees[i].name + " is late. Checked in at " + employees[i].checkIn
    );
    lateCount++;
  }
}

console.log("Total late employees: " + lateCount);
