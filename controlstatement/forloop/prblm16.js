// Print only characters at even positions in a string

let str = "javascript";

for (let i = 0; i < str.length; i++) {
  if (i % 2 === 0) {
    console.log(`${str[i]}`);
  }
}

// output:
// j
// v
// s
// r
// p
