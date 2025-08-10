let tasks = ["login", "upload photo", "logout"];

for (let i = 0; i < tasks.length; i++) {
  tasks[i] = tasks[i].trim();
  console.log("task", i + 1 + ":", tasks[i]);
}

//output:
// task 1: login
// task 2: upload photo
// task 3: logout
