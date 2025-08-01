// You want to show Santa arriving on Dec 25 at 6:00AM

const santaArrival = new Date();

santaArrival.setFullYear(2025);
santaArrival.setMonth(11);
santaArrival.setDate(5);
santaArrival.setHours(6);
santaArrival.setMinutes(0);
santaArrival.setSeconds(0);

console.log("Santa arrives on:", santaArrival.toDateString());
console.log("At time:", santaArrival.toLocaleTimeString());
