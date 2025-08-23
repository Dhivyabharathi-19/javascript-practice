// Loop through an object and print only values that are numbers

const mixed = { name: "John", age: 25, score: 88, city: "Pune" };

for (let value of Object.values(mixed)) {
  {
    console.log(value);
  }
}

// output:
// John
// 25
// 88
// Pune
