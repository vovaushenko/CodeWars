// https://leetcode.com/problems/check-array-formation-through-concatenation/

/*
You are given an array of distinct integers arr and an array of integer arrays pieces, where the integers in pieces are distinct. Your goal is to form arr by concatenating the arrays in pieces in any order. However, you are not allowed to reorder the integers in each array pieces[i].

Return true if it is possible to form the array arr from pieces. Otherwise, return false.
*/

const canFormArray = (arr, pieces) => {
	const helper = (target, pieces, memo) => {
		if (target in memo) return memo[target];
		if (target === '') return true;

		for (let prefix of pieces) {
			if (target.startsWith(prefix)) {
				const suffix = target.replace(prefix, '');

				if (helper(suffix, pieces, memo) === true) {
					memo[target] = true;
					return true;
				}
			}
		}
		memo[target] = false;
		return false;
	};

	return helper(
		arr.join(''),
		pieces.map((arr) => arr.join('')),
		{}
	);
};
