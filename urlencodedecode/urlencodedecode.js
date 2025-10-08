// let url = "https://www.example.com/search?name=John%20Doe&city=New%20York";
//   "http://example.com/path with spaces and special characters?query=value&another parameter with a + sign";

let url = "Hello%20World%21";
let encoded = encodeURI(url);
// let decoded = decodeURI(url);
console.log(encoded);
// console.log(decoded);
