// Task: Weather Alert System

// Scenario:
// You receive an array of cities with temperatures. Send alert if temperature > 40°C.

// Data:

// const cities = [
//   { name: "Chennai", temp: 42 },
//   { name: "Delhi", temp: 38 },
//   { name: "Mumbai", temp: 41 },
//   { name: "Kolkata", temp: 35 }
// ];

const cities = [
  { name: "Chennai", temp: 42 },
  { name: "Delhi", temp: 38 },
  { name: "Mumbai", temp: 41 },
  { name: "Kolkata", temp: 35 },
];

for (let i = 0; i < cities.length; i++) {
  if (cities[i].temp > 40) {
    console.log(" Alert High temperature in", cities[i].name);
  }
}

//Output:

//  Alert High temperature in Chennai
//  Alert High temperature in Mumbai
