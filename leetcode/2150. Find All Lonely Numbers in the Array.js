//2150. Find All Lonely Numbers in the Array
/*
You are given an integer array nums. A number x is lonely when it appears only once, and no adjacent numbers (i.e. x + 1 and x - 1) appear in the array.

Return all lonely numbers in nums. You may return the answer in any order.
*/

const findLonely = (nums) => {
	const res = [];
	const map = nums.reduce(
		(h, c) => (h.has(c) ? h.set(c, h.get(c) + 1) : h.set(c, 1), h),
		new Map()
	);
	for (const n of nums) {
		if (!map.has(n + 1) && !map.has(n - 1) && map.get(n) === 1) {
			res.push(n);
		}
	}

	return res;
};
