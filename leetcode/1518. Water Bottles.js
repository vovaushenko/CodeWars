// 1518. Water Bottles
/*
There are numBottles water bottles that are initially full of water. You can exchange numExchange empty water bottles from the market with one full water bottle.

The operation of drinking a full water bottle turns it into an empty bottle.

Given the two integers numBottles and numExchange, return the maximum number of water bottles you can drink.
*/
let exchangeEmptyBottles = (empty, exchangeRate) => {
	let full = 0;
	while (empty >= exchangeRate) {
		empty -= exchangeRate;
		full++;
	}
	return { empty, full };
};

const numWaterBottles = (numBottles, numExchange) => {
	let consumed = 0;

	const helper = (fullBottles, emptyBottles) => {
		if (fullBottles < 1 && emptyBottles < 1) {
			consumed += fullBottles;
			return;
		}

		consumed += fullBottles;

		const { empty, full } = exchangeEmptyBottles(fullBottles, numExchange);

		helper(full, empty);
	};

	helper(numBottles, 0);
	return consumed;
};
