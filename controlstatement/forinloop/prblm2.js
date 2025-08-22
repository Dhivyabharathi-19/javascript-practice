//  const scores = { Alice: 85, Bob: 94, charlie: 78 };
// Loop through an object of student scores using for..in.

const scores = { Alice: 85, Bob: 94, charlie: 78 };

for (let score in scores) {
  console.log(`Name: ${score}, Score: ${scores[score]}`);
}
// output:
// Name: Alice, Score: 85
// Name: Bob, Score: 94
// Name: charlie, Score: 78
