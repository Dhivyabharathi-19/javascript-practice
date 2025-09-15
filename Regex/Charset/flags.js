console.log(/Hello(?=\sword)/.test("Hello word")); //true

console.log(/Hello(?!\sword)/.test("Hello w")); //true
console.log(/Hello(?!\sworld)/.test("Hello there")); //true
console.log(/(?<=Ms\.)\s[A-Z]\w+/.test("Ms. Aliyah")); //true
console.log(/(?<!Ms\.)\s[A-Z]\w+/.test("Ms. Aliyah")); //false
console.log(/(?<!Ms\.)\s[A-Z]\w+/.test("Mr. Aliyah")); //true
