// Print characters of a string in reverse order.

let ch = "NOVEMBER";

let reversed = "";
for (let i = ch.length - 1; i >= 0; i--) {
  reversed += ch[i];
}
console.log(reversed); // Output: "REBMEVON"
