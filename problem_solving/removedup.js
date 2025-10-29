let arr = [1, 2, 5, 2, 6, 7, 8];

let unique = [];

arr.filter((item, index) => {
  if (arr.indexOf(item) === index) {
    unique.push(item);
  }
});
console.log(unique);
