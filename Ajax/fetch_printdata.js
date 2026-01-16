// 1. Fetch and Print Data

// Use JavaScript to fetch data from
// https://jsonplaceholder.typicode.com/posts
// and print the result in the console.

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
