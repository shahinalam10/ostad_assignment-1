class BankAccount {
  constructor(ownerName, initialBalance = 0) {
    if (BankAccount.accounts.some(account => account.ownerName === ownerName)) {
      throw new Error("Account name already exists.");
    }


    let uniqueAccountNumber = false;
    while (!uniqueAccountNumber) {
      this.accountNumber = Math.floor(Math.random() * 10000);    // Generate a unique account number
      uniqueAccountNumber = !BankAccount.accounts.some(account => account.accountNumber === this.accountNumber);
    }

    this.ownerName = ownerName;
    this.balance = initialBalance;
    BankAccount.accounts.push(this);
  }


  static checkIfAccountExists(identifier) {
    return BankAccount.accounts.some(account => account.identifier === identifier);
  }

  deposit(amount) {
    console.log("\nDeposit and withdrew:"); 
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    } else {
      console.error("Deposit amount must be positive.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    } else {
      console.error("Insufficient funds.");
    }
  }

  getBalance() {
    return this.balance;
  }

  displayAccountInfo() {
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Owner Name: ${this.ownerName}`);
    console.log(`Balance: $${this.balance}`);
  }
  static accounts = [];
}

try {
  const account1 = new BankAccount("John Doe", 1000);
  const account2 = new BankAccount("Shahin Alam", 1000);

  console.log("Initial Account Info (John Doe):");
  account1.displayAccountInfo();

  account1.deposit(500);
  account1.withdraw(700);

  console.log("\nAccount Info after Transactions (John Doe):");
  account1.displayAccountInfo();

  console.log("\nInitial Account Info (Shahin Alam):");
  account2.displayAccountInfo();

  account2.deposit(700);
  account2.withdraw(500);

  console.log("\nAccount Info after Transactions (Shahin Alam):");
  account2.displayAccountInfo();
} catch (error) {
  console.error(error.message);
}


  

  