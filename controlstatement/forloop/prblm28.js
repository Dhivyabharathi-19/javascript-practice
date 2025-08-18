// Count vowels in a string.

let Word = "COMPUTER";

let Count = 0;

for (i = 0; i < Word.length; i++) {
  let str = Word[i].toLowerCase();

  if (str === "a" || str === "e" || str === "i" || str === "o" || str === "u") {
    Count++;
  }
}
console.log(Count);

// output:3.
