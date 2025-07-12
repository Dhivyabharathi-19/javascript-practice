function Person(name, age) {
  this.name = name;
  this.age = age;
}
let person1 = new Person("lirthi", 20);
let person2 = new Person("teddy", 23);
let person3 = new Person("plump", 22);
console.log(person1.age);
console.log(person2.name);
console.log(person3.name);

// output:
// 20
// teddy
// plump
