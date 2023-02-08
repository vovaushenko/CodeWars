//45. Jump Game II
/*
You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n
Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].
*/
const jump = (nums) => {
	let l = 0,
		r = 0,
		jumps = 0;
	let n = nums.length;
	while (r < n - 1) {
		let maxReach = 0;
		for (let i = l; i < r + 1; i++) {
			maxReach = Math.max(maxReach, nums[i] + i);
		}
		l = r + 1;
		r = maxReach;
		jumps += 1;
	}
	return jumps;
};
