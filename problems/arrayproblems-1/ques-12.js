// Find duplicate elements in an array.

let items = [5, 6, 7, 8, 9, 5];

let duplicates = [];

items.forEach((item, index) => {
  if (items.indexOf(item) !== index && !duplicates.includes(item)) {
    duplicates.push(item);
  }
});
console.log(duplicates);

// output:[ 5 ]
