// 2043. Simple Bank System
/*
You have been tasked with writing a program for a popular bank that will automate all its incoming transactions (transfer, deposit, and withdraw). The bank has n accounts numbered from 1 to n. The initial balance of each account is stored in a 0-indexed integer array balance, with the (i + 1)th account having an initial balance of balance[i].

Execute all the valid transactions. A transaction is valid if:

The given account number(s) are between 1 and n, and
The amount of money withdrawn or transferred from is less than or equal to the balance of the account.
Implement the Bank class:
*/

class Bank {
	constructor(initialBalance) {
		this.balance = [0, ...initialBalance];
	}

	isValidAccount(account) {
		if (account < 0 || account >= this.balance.length) return false;
		return true;
	}
	accountHasEnoughMoney(account, money) {
		if (this.balance[account] < money) return false;
		return true;
	}

	deposit(account, money) {
		if (!this.isValidAccount(account)) return false;
		this.balance[account] += money;
		return true;
	}

	withdraw(account, money) {
		if (
			!this.isValidAccount(account) ||
			!this.accountHasEnoughMoney(account, money)
		) {
			return false;
		}
		this.balance[account] -= money;
		return true;
	}

	transfer(account1, account2, money) {
		if (
			!this.isValidAccount(account1) ||
			!this.isValidAccount(account2) ||
			!this.accountHasEnoughMoney(account1, money)
		) {
			return false;
		}

		this.balance[account1] -= money;
		this.balance[account2] += money;
		return true;
	}
}
