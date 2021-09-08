// https://leetcode.com/problems/permutations-ii/
/*
47. Permutations II
Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
*/
const permuteUnique = (nums) => {
	if (nums.length === 0) return [[]];
	const firstNum = nums[0];
	const rest = nums.slice(1);

	const permsWithoutFirst = permuteUnique(rest);
	const allPermutations = [];
	const seen = {};

	for (let permutation of permsWithoutFirst) {
		for (let i = 0; i <= permutation.length; i++) {
			const permutationWithFirst = [
				...permutation.slice(0, i),
				firstNum,
				...permutation.slice(i),
			];

			const stringified = permutationWithFirst.join('');
			if (!(stringified in seen)) {
				allPermutations.push(permutationWithFirst);
				seen[stringified] = true;
			}
		}
	}

	return allPermutations;
};
