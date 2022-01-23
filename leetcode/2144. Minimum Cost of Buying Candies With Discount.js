/*
2144. Minimum Cost of Buying Candies With Discount
*/
/*
A shop is selling candies at a discount. For every two candies sold, the shop gives a third candy for free.

The customer can choose any candy to take away for free as long as the cost of the chosen candy is less than or equal to the minimum cost of the two candies bought.

For example, if there are 4 candies with costs 1, 2, 3, and 4, and the customer buys candies with costs 2 and 3, they can take the candy with cost 1 for free, but not the candy with cost 4.
Given a 0-indexed integer array cost, where cost[i] denotes the cost of the ith candy, return the minimum cost of buying all the candies.
*/
const minimumCost = (cost) => {
	if (cost.length < 3) return cost.reduce((a, b) => a + b, 0);
	const sortedCandies = [...cost].sort((a, b) => b - a);

	let minCost = 0;

	const calculator = (candies) => {
		if (candies.length < 2)
			return candies[0] ? (minCost += candies[0]) : minCost;

		minCost += candies[0] + candies[1];

		calculator(candies.slice(3));
	};
	calculator(sortedCandies);

	return minCost;
};
