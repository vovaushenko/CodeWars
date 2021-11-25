// 714. Best Time to Buy and Sell Stock with Transaction Fee
/*
You are given an array prices where prices[i] is the price of a given stock on the ith day, and an integer fee representing a transaction fee.

Find the maximum profit you can achieve. You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
*/
const maxProfit = (prices, fee) => {
	if (prices.length < 2) return 0;
	let cost = prices[0];
	let totalProfit = 0;
	for (let i = 1; i < prices.length; i++) {
		let currentPrice = prices[i];
		if (currentPrice < cost) {
			cost = currentPrice;
		}

		if (currentPrice > cost + fee) {
			totalProfit += currentPrice - fee - cost;
			cost = currentPrice - fee;
		}
	}

	return totalProfit;
};
