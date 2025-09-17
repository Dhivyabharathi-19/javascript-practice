// Word Character - letters,digits,underscore.

console.log(/\w/.test("$$%%")); //false
console.log(/\w/.test("HI")); //true
console.log(/\w/.test("$#")); //false
