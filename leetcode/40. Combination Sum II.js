// 40. Combination Sum II
/*
Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.
*/

const combinationSum2 = (candidates, target) => {
	const allCombinations = [];
	candidates.sort((a, b) => a - b);

	const helper = (left, start, combo) => {
		if (left < 0) return;
		if (!left) {
			allCombinations.push([...combo]);
			return;
		}

		for (let i = start; i < candidates.length; i++) {
			if (i > start && candidates[i] === candidates[i - 1]) continue;
			helper(left - candidates[i], i + 1, [...combo, candidates[i]]);
		}
	};

	helper(target, 0, []);
	return allCombinations;
};
