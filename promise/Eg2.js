let promise = new Promise((resolve, reject) => {
  let login = true;
  if (login) {
    resolve("User Logged In ");
  } else {
    reject("User Not Logged In");
  }
});
promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("Task  Finished"));

//   Output:
// User Logged In
// Task  Finished
