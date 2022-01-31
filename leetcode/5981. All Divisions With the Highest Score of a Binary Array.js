//5981. All Divisions With the Highest Score of a Binary Array
/*
You are given a 0-indexed binary array nums of length n. nums can be divided at index i (where 0 <= i <= n) into two arrays (possibly empty) numsleft and numsright:

numsleft has all the elements of nums between index 0 and i - 1 (inclusive), while numsright has all the elements of nums between index i and n - 1 (inclusive).
If i == 0, numsleft is empty, while numsright has all the elements of nums.
If i == n, numsleft has all the elements of nums, while numsright is empty.
The division score of an index i is the sum of the number of 0's in numsleft and the number of 1's in numsright.

Return all distinct indices that have the highest possible division score. You may return the answer in any order.
*/
const maxScoreIndices = (nums) => {
	const total = nums.reduce((a, b) => a + b, 0);
	const map = {};
	let ones = 0;
	let zeroes = 0;
	map[0] = total;
	for (let i = 0; i < nums.length; i++) {
		nums[i] === 0 ? zeroes++ : ones++;
		map[i + 1] = zeroes + total - ones;
	}

	const max = Math.max(...Object.values(map));
	return Object.keys(map)
		.filter((key) => map[key] === max)
		.map(Number);
};
