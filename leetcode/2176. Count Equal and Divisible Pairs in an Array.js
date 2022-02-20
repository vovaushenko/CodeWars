//2176. Count Equal and Divisible Pairs in an Array
/*
Given a 0-indexed integer array nums of length n and an integer k, return the number of pairs (i, j) where 0 <= i < j < n, such that nums[i] == nums[j] and (i * j) is divisible by k.
*/
const validPairs = (ids, k) => {
	let counter = 0;
	for (let i = 0; i < ids.length; i++) {
		for (let j = i + 1; j < ids.length; j++) {
			if ((ids[i] * ids[j]) % k === 0) {
				counter++;
			}
		}
	}

	return counter;
};

const countPairs = (nums, k) => {
	const map = nums.reduce(
		(h, v, id) => (h[v] ? h[v].push(id) : (h[v] = [id]), h),
		{}
	);
	const possiblePairs = Object.values(map).filter((entry) => entry.length > 1);

	let counter = 0;
	for (const ids of possiblePairs) counter += validPairs(ids, k);

	return counter;
};
