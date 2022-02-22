//1798. Maximum Number of Consecutive Values You Can Make
/*
You are given an integer array coins of length n which represents the n coins that you own. The value of the ith coin is coins[i]. You can make some value x if you can choose some of your n coins such that their values sum up to x.

Return the maximum number of consecutive integer values that you can make with your coins starting from and including 0.

Note that you may have multiple coins of the same value.
*/
const getMaximumConsecutive = (coins) => {
	const sorted = [...coins].sort((a, b) => a - b);
	let max = 1;

	for (let num of sorted) {
		if (num <= max) max += num;
	}
	return max;
};
