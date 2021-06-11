// 441. Arranging Coins

/*
You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build.
*/

const arrangeCoins = (n: number): number => {
	let stair = 1;
	while (n >= 0) {
		if (n - stair >= 0) {
			n -= stair;
			stair++;
		} else {
			break;
		}
	}

	return stair - 1;
};
