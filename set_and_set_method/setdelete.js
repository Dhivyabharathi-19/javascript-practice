//  Delete "banana" from a Set using .delete() and print the result.

const fruit = new Set(["Apple", "Mango", "Orange", "Banana"]);

fruit.delete("Banana");

console.log(fruit);

// output:Set(3) { 'Apple', 'Mango', 'Orange' }
