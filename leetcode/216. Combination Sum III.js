/*
216. Combination Sum III

Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

Only numbers 1 through 9 are used.
Each number is used at most once.
Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.
*/

const combinationSum3 = (k, target) => {
	const combinations = [];

	const createCombination = (left, combination, start) => {
		if (left < 0) return;
		if (left === 0) {
			combinations.push([...combination]);
			return;
		}

		for (let i = start; i <= 9; i++) {
			createCombination(left - i, [...combination, i], i);
		}
	};

	createCombination(target, [], 1);

	return combinations
		.filter((comb) => comb.length === k)
		.filter((a) => isUnique(a));
};

const isUnique = (arr) => arr.length === [...new Set(arr)].length;
