class calculator {
  static add(a, b) {
    return a + b;
  }
}
// we do not need to create a calclutar object (for static method)
console.log(calculator.add(10, 10));
