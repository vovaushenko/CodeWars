// 1716. Calculate Money in Leetcode Bank

/*
Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.

He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before. On every subsequent Monday, he will put in $1 more than the previous Monday.
Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day.
*/

const totalMoney = (n: number): number => {
	let money = 0;
	let days = 0;
	let dailyPayload = 1;

	for (let i = 0; i < n; i++) {
		money += days + dailyPayload;
		days++;
		if (days === 7) {
			days = 0;
			dailyPayload++;
		}
	}

	return money;
};
