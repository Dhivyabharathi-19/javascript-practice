// Count how many vowels are in a word.

let word = "Elephant";

let Count = 0;

for (i = 0; i < word.length; i++) {
  let ch = word[i].toLowerCase();

  if (ch === "a" || ch == "e" || ch === "i" || ch === "o" || ch === "u") {
    Count++;
  }
}
console.log("Vowels Count =" + Count);

// output:Vowels Count =3
