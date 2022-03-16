//2190. Most Frequent Number Following Key In an Array
/*
You are given a 0-indexed integer array nums. You are also given an integer key, which is present in nums.

For every unique integer target in nums, count the number of times target immediately follows an occurrence of key in nums. In other words, count the number of indices i such that:

0 <= i <= n - 2,
nums[i] == key and,
nums[i + 1] == target.
Return the target with the maximum count. The test cases will be generated such that the target with maximum count is unique.
*/
const mostFrequent = (nums, key) => {
	let [i, j] = [0, 1];
	const map = {};

	while (j < nums.length) {
		if (nums[i] === key && nums[i + 1] !== undefined) {
			map[nums[i + 1]] ? map[nums[i + 1]]++ : (map[nums[i + 1]] = 1);
		}
		i++;
		j++;
	}

	const maxFr = Math.max(...Object.values(map));

	for (const key in map) {
		if (map[key] === maxFr) return +key;
	}
};
