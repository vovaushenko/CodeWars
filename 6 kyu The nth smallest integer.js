// https://www.codewars.com/kata/57a03b8872292dd851000069

const nthSmallest = (nums, n) => {
	if (n > nums.length) return null;
	let unique = [...new Set(nums)];
	if (n > unique.length) return null;

	return unique.sort((n1, n2) => n1 - n2)[n - 1];
};
