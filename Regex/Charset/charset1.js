let text = "hello HELLO";

console.log(/hello/i.test(text)); //true
console.log(text.match(/hello/gi)); //[ 'hello', 'HELLO' ]
console.log(/^Hello/m.test("Hello")); //true
