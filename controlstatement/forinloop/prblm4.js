// Find all keys that start with a letter "s" using for...in
// const animals = { snake: "hiss", lion: "roar", sparrow: "chirp", dog: "bark" };

const animals = { snake: "hiss", lion: "roar", sparrow: "chirp", dog: "bark" };

for (let animal in animals) {
  if (animal.startsWith("s")) {
    console.log(animal);
  }
}

//output:
// snake
// sparrow
