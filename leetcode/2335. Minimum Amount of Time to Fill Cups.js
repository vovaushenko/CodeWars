//2335. Minimum Amount of Time to Fill Cups
const fillCups = (amount) =>
	Math.max(...amount, amount.reduce((a, b) => a + b, 1) / 2);
