const nonConstructibleChange = (coins) => {
	const sortedCoins = [...coins].sort((a, b) => a - b);
	let currentChange = 0;
	for (const coin of sortedCoins) {
		if (coin > currentChange + 1) {
			return currentChange + 1;
		} else {
			currentChange += coin;
		}
	}
	return currentChange + 1;
};
