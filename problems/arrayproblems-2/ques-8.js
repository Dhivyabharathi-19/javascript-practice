// 8.Remove all duplicate elements from an array manually (without Set).

let items = [2, 3, 4, 3, 2, 5, 6, 7, 8, 7];

let duplicates = [];

items.forEach((item) => {
  if (!duplicates.includes(item)) {
    duplicates.push(item);
  }
});

console.log(duplicates);

// output:[2, 3, 4, 5,6, 7, 8  ]
