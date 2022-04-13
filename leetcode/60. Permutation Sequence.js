//60. Permutation Sequence
/*
The set [1, 2, 3, ..., n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.
*/
const getPermutation = (n, k) => {
	let factorial = [1];
	for (let i = 1; i <= n; i++) factorial[i] = factorial[i - 1] * i;
	const nums = Array.from({ length: n }, (_, i) => i + 1);
	let result = '';
	for (let i = n; i > 0; i--) {
		let index = Math.ceil(k / factorial[i - 1]);
		result += nums[index - 1];
		nums.splice(index - 1, 1);
		k -= factorial[i - 1] * (index - 1);
	}

	return result;
};
