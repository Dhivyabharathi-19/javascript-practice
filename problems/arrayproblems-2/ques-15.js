// Write a function to group array elements by their type (number, string, etc.).
function gp(arr) {
  let result = {};

  arr.forEach((item) => {
    let type = typeof item;

    if (!result[type]) {
      result[type] = [];
    }
    result[type].push(item);
  });
  return result;
}

let ma = [
  1,
  10,
  "hello",
  true,
  false,
  3.5,
  "world",
  null,
  undefined,
  {},
  [],
  () => {},
];

console.log(gp(ma));
