// https://leetcode.com/problems/integer-break/

const integerBreak = (n) => {
	if (n < 3) return 1;
	if (n == 3) return 2;
	const digits = Array.from({ length: n - 1 }, (_, id) => id + 1).filter(
		(d) => d !== 1
	);

	const allCombinations = [];

	const createComb = (left, comb, start) => {
		if (!left) {
			allCombinations.push([...comb]);
			return;
		}
		if (left < 0) return;

		for (let i = start; i < digits.length; i++) {
			const diff = left - digits[i];

			createComb(diff, [...comb, digits[i]], i);
		}
	};

	createComb(n, [], 0);

	return Math.max(
		...allCombinations.map((cmb) => cmb.reduce((x, y) => x * y, 1))
	);
};
