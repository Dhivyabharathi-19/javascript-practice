const today = new Date();

today.setFullYear(2025);
today.setMonth(10);
today.setDate(19);
today.setHours(7);
today.setMinutes(30);
today.setSeconds(45);

console.log(today.toDateString());
console.log(today.toLocaleDateString());
console.log(today.toLocaleTimeString());
