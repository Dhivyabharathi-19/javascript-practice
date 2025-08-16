// Count how many times a specific letter appears in a word

let str = "elephant";

let Count = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === "e") {
    Count++;
  }
}
console.log(Count);

// output:2
