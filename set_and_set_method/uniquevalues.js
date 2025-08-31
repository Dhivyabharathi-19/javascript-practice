// Add duplicate values to a Set and show that duplicates are ignored.

const values = [
  "Car",
  "Bike",
  "Train",
  "Bus",
  "Cycle",
  "Car",
  "Train",
  "Cycle",
];

const uniquevalues = new Set(values);
console.log("uniquevalues:", uniquevalues);

//output:uniquevalues: Set(5) { 'Car', 'Bike', 'Train', 'Bus', 'Cycle' }
