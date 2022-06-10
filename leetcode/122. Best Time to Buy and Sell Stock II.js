//122. Best Time to Buy and Sell Stock II

//The action we can do on ith day is either buy (if last action is sell), or sell (if last action is buy), or do nothing (not buy, not sell).

const maxProfit = (prices) => {
	let [lastBuy, lastSold] = [-prices[0], 0];

	for (let i = 1; i < prices.length; i++) {
		const currentBuy = Math.max(lastBuy, lastSold - prices[i]);

		const currentSold = Math.max(lastSold, lastBuy + prices[i]);

		lastBuy = currentBuy;

		lastSold = currentSold;
	}

	return lastSold;
};
