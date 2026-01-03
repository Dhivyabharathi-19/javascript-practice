const mymap = new Map([
  ["name", "abi"],
  ["age", 25],
]);

const arr = Array.from(mymap);
console.log(arr);

// output:[ [ 'name', 'abi' ], [ 'age', 25 ] ]
