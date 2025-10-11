function hello(name) {
  //with function arguments
  console.log("Gm " + name);
}
let Timer = setTimeout(hello, 4000, "vijay");

// clearTimeout(Timer);

// Output:
// Gm vijay
