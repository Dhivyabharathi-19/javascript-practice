let orderpizza = new Promise((process, reject) => {
  let order = false;
  if (order) {
    process("Pizza is  Ready");
  } else {
    reject("Order Canceled");
  }
});
orderpizza
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("Order Completed"));

// Output;
// Order Canceled
// Order Completed
