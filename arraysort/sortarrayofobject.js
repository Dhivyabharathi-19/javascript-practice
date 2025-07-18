let products = [
  { name: "laptop", price: 820 },
  { name: "phone", price: 8900 },
  { name: "tablet", price: 8200 },
];
products.sort((a, b) => a.price - b.price);

console.log(products);

// output:[
//   { name: 'laptop', price: 820 },
//   { name: 'tablet', price: 8200 },
//   { name: 'phone', price: 8900 }
// ]
