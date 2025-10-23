// You are building a Quiz Application. The requirements are:

// Every quiz has a title and a number of questions (instance properties).
// There is a maximum limit of questions per quiz (same for all quizzes) – this should be a static property.
// You need a static method to check if a quiz can add more questions.
// If a quiz is below the limit, it can add more questions.
// Keep track of all quizzes created using a static property (optional for bonus).

class Quiz {
  static maxque = 5;

  static allquizes = [];

  constructor(title, numofques) {
    this.title = title;
    this.numofques = numofques;

    Quiz.allquizes.push(this);
  }

  static canaddmore(quiz) {
    return quiz.numofques < Quiz.maxque;
  }
  addques() {
    if (Quiz.canaddmore(this)) {
      this.numofques++; //add one
      console.log(`added.. ${this.title} now has ${this.numofques}`);
    } else {
      console.log(
        `limit reached... ${this.title} already has ${Quiz.maxque} questions`
      );
    }
  }
}

let csquiz = new Quiz("CS", 3);
let mathquiz = new Quiz("math", 5);

csquiz.addques();
mathquiz.addques();
csquiz.addques();
csquiz.addques();
console.log("allquizes created: ", Quiz.allquizes);
