// Your meeting is scheduled at 4.00PM, and the current time is 3.45PM.You want to show  how many minutes are left.

let now = new Date();
now.setHours(15);
now.setMinutes(45);
now.setSeconds(0);

let meeting = new Date();
meeting.setHours(16);
meeting.setMinutes(0);
meeting.setSeconds(0);

let Minutes = meeting - now;
let Minutesleft = Minutes / (1000 * 60);
console.log("Minutes left:", Math.ceil(Minutesleft));
