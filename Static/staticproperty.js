class bankdetails {
  static bank = "Hdfc bank"; //static property
  constructor(Holder, balance) {
    this.Holder = Holder;
    this.balance = balance;
  }
  display() {
    console.log(`${this.Holder} has ${this.balance} in ${bankdetails.bank}`);
  }
}
const acc1 = new bankdetails("vijay", 300000);
acc1.display();
const acc2 = new bankdetails("dhivya", 400000);
acc2.display();
