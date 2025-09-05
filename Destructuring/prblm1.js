// Task:

// Get the first employee’s firstName as emp1Name.

// Get the second employee’s second skill as emp2SecondSkill (default "No second skill" if missing).

// Get the latitude and longitude into separate variables.

// Get country from location (default "India" if missing).
const company = {
  name: "TechCorp",
  employees: [
    {
      id: 1,
      details: {
        firstName: "John",
        lastName: "Doe",
        skills: ["React", "Node"],
      },
    },
    {
      id: 2,
      details: {
        firstName: "Jane",
        lastName: "Smith",
        skills: ["Angular"],
      },
    },
  ],
  location: {
    city: "Bangalore",
    coordinates: [12.9716, 77.5946],
  },
};

// Full destructuring
const {
  employees: [
    {
      details: { firstName: emp1Name },
    }, // First employee’s name
    {
      details: {
        skills: [, emp2SecondSkill = "No second skill"], // Second employee’s 2nd skill
      },
    },
  ],
  location: {
    coordinates: [latitude, longitude], // Latitude & Longitude
    country = "India", // Default country
  },
} = company;

console.log(emp1Name); // John
console.log(emp2SecondSkill); // No second skill
console.log(latitude); // 12.9716
console.log(longitude); // 77.5946
console.log(country); // India
