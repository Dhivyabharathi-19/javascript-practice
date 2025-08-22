// Change all values in an object to uppercase using for...in
// const colors = { one: "red", two: "blue", three: "green" };

const colors = { one: "red", two: "blue", three: "green" };

for (colorName in colors) {
  colors[colorName] = colors[colorName].toUpperCase();
}

console.log(colors);

// output:{ one: 'RED', two: 'BLUE', three: 'GREEN' }
