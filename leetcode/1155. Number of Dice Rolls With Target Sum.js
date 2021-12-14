// 1155. Number of Dice Rolls With Target Sum
/*
You have d dice and each die has f faces numbered 1, 2, ..., f. You are given three integers d, f, and target.

Return the number of possible ways (out of fd total ways) modulo 109 + 7 to roll the dice so the sum of the face-up numbers equals target.
*/

const numRollsToTarget = (d, f, target) => {
	const table = [...Array(target + 1)].map(() => Array(d + 1).fill(0));
	const mod = 10 ** 9 + 7;
	table[0][0] = 1;

	for (let i = 1; i <= target; i++) {
		for (let j = 1; j <= d; j++) {
			for (let k = 1; k <= f; k++) {
				if (k > i) break;
				table[i][j] += table[i - k][j - 1] % mod;
			}
		}
	}

	return table[target][d] % mod;
};
