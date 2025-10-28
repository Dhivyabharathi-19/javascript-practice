// Task: Online Quiz Scorer

// Scenario:
// You have a quiz with correct answers and student submissions. Calculate score and percentage.

// Data:

// const answers = ["A", "C", "B", "D", "A"];
// const student = ["A", "C", "B", "C", "A"];

const answers = ["A", "C", "B", "D", "A"];
const student = ["A", "C", "B", "C", "A"];

let score = 0;

for (let i = 0; i < answers.length; i++) {
  if (answers[i] === student[i]) {
    score++;
  }
}

let percent = (score / answers.length) * 100;

console.log("Score:", score);
console.log("Percentage:", percent + "%");
