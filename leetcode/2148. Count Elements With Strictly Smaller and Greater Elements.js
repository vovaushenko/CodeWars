//2148. Count Elements With Strictly Smaller and Greater Elements
/*
Given an integer array nums, return the number of elements that have both a strictly smaller and a strictly greater element appear in nums.

 
*/
const midIsProper = (a, b, c) => b > a && b < c;

const countElements = (nums) => {
	let [i, j, k] = [0, 1, 2];
	const sorted = [...new Set(nums)].sort((a, b) => a - b);
	console.log(sorted);
	let count = 0;
	let propers = {};
	while (k < nums.length) {
		if (midIsProper(sorted[i], sorted[j], sorted[k])) propers[sorted[j]] = true;
		i++;
		j++;
		k++;
	}
	const map = nums.reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});
	for (const key in propers) count += map[key];
	return count;
};
