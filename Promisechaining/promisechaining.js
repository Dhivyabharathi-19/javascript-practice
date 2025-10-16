let fetchuser = new Promise((resolve) => {
  setTimeout(() => resolve("userData Fetched"), 1000);
});
fetchuser
  .then((userData) => {
    console.log(userData);
    return "OrderFetched";
  })
  .then((userData) => {
    console.log(userData);
    return "Payment History Fetched";
  })
  .then((userData) => console.log(userData));
