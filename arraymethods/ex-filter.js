let tasks = ["work", "paybills", "buy milk", "meeting at 4pm"];

let completedtasks = tasks.filter((tasks) => tasks.includes("pay"));

console.log(completedtasks);

// output:[ 'paybills' ]
