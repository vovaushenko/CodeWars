// https://www.codewars.com/kata/541af676b589989aed0009e7
// 4 kyu Counting Change Combinations

const countChange = (money, coins) => {
	let count = 0;

	const counter = (remainder, start) => {
		if (remainder < 0) return;
		if (remainder === 0) {
			count++;
			return;
		}
		for (let i = start; i < coins.length; i++) {
			counter(remainder - coins[i], i);
		}
	};

	counter(money, 0);
	return count;
};
