// Q2: Bank Account Manager

// You are creating a Bank Account system.

// Each account has an accountHolder name and a balance (instance properties).

// There is a static property bankName that is the same for all accounts.

// Add a static method changeBankName(newName) to update the bank name for all accounts.

// Also, add a method for depositing money into an account (instance method).

class bankaccount {
  static bankname = "Hdfc";

  constructor(accountHolder, balance) {
    this.accountHolder = accountHolder;
    this.balance = balance;
  }
  static changename(newName) {
    bankaccount.bankname = newName;
  }
  deposit(amount) {
    this.balance += amount;
    return `${this.accountHolder} deposited ${amount}. New balance: ${this.balance}`;
  }
}
let acc1 = new bankaccount("Abi", 5000);
let acc2 = new bankaccount("archu", 8000);

console.log(acc1.deposit(2000));
console.log(acc2.deposit(2000));
