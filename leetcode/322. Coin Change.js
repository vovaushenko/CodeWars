// https://leetcode.com/problems/coin-change/

/*
322. Coin Change
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.


*/

const bestSumMemo = (targetSum, numbers, memo = {}) => {
	if (targetSum in memo) return memo[targetSum];
	if (targetSum === 0) return [];
	if (targetSum < 0) return null;

	let shortestCombination = null;

	for (let num of numbers) {
		const remainder = targetSum - num;
		const remainderCombination = bestSumMemo(remainder, numbers, memo);
		if (remainderCombination !== null) {
			const combination = [...remainderCombination, num];

			// if the combination is shorter than the current shortest
			if (
				shortestCombination === null ||
				combination.length < shortestCombination.length
			) {
				shortestCombination = combination;
			}
		}
	}
	memo[targetSum] = shortestCombination;
	return shortestCombination;
};

const coinChange = (coins, amount) => {
	const bestCombo = bestSumMemo(amount, coins);
	return bestCombo ? bestCombo.length : -1;
};
