let promise = new Promise((resolve, reject) => {
  let success = false;
  if (success) {
    resolve("Task Completed");
  } else {
    reject("Task Failed");
  }
});
promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("Task  Finished"));

// Output:
// Task Failed
// Task  Finished
