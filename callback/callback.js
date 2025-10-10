function orderpizza(callback) {
  console.log("order placed cooking started");

  setTimeout(() => {
    console.log("pizza is ready ");
    callback();
  }, 3000);
}
function eatpizza() {
  console.log("Eating pizza");
}
orderpizza(eatpizza);

// Output:
// order placed cooking started
// pizza is ready
// Eating pizza
