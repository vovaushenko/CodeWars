// https://leetcode.com/problems/permutations/
// * 46. Permutations
/*
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.
*/

const permute = (nums) => {
	const permutations = [];

	const _permute = (currentPermutation) => {
		if (currentPermutation.length === nums.length)
			return permutations.push(currentPermutation);

		for (let num of nums) {
			if (!currentPermutation.includes(num))
				_permute([...currentPermutation, num]);
		}
	};

	_permute([]);
	return permutations;
};
