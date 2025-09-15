console.log(/[abc]/.test("apple")); //true
console.log(/[a-z]/.test("GH")); //false
console.log(/[A-Z]/.test("GH")); //true
console.log(/[0-9]/.test("yuH")); //false
console.log(/[0-9]/.test("123")); //true
console.log(/dog|cat|god/.test("i ve  a god")); //true
