// Website Visitor Counter (Static Property + Static Method)

// Problem:
// Track total users visiting a website.
// Every new user increments a static counter (static property).
// A static method shows total users.
// Each user also has a username (instance property) that is unique to the object.

class Websitev {
  static totalusers = 0;
  constructor(username) {
    this.username = username;
    Websitev.totalusers++;
  }
  static showtotalusers() {
    console.log(`total users visited: ${Websitev.totalusers}`);
  }

  showusername() {
    console.log(`username: ${this.username}`);
  }
}
let user1 = new Websitev("abc");
let user2 = new Websitev("def");
let user3 = new Websitev("ghi");
let user4 = new Websitev("jkl");
let user5 = new Websitev("mno");

Websitev.showtotalusers();
user1.showusername();
user2.showusername();
user3.showusername();
user4.showusername();
user5.showusername();
