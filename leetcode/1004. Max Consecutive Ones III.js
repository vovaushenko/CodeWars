// 1004. Max Consecutive Ones III
/*
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
*/

const longestOnes = (nums, k) => {
	let [left, right] = [0, 0];
	debugger;

	while (right < nums.length) {
		if (nums[right] === 0) k--;
		if (k < 0) {
			if (nums[left] === 0) k++;
			left++;
		}
		right++;
	}
	return right - left;
};
