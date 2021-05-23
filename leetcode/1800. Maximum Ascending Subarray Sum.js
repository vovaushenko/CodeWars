// https://leetcode.com/problems/maximum-ascending-subnumsay-sum/

const maxAscendingSum = (nums) => {
	if (nums.length === 1) return nums[0];
	let tempSum = 0;
	let maxSum = -Infinity;
	let [i, j] = [0, 1];
	while (j < nums.length) {
		if (nums[j] > nums[i]) {
			tempSum += nums[i];
			maxSum = Math.max(tempSum, maxSum);
		} else {
			tempSum += nums[i];
			maxSum = Math.max(tempSum, maxSum);
			tempSum = 0;
		}
		if (j === nums.length - 1) {
			tempSum += nums[j];
			maxSum = Math.max(tempSum, maxSum);
		}
		i++;
		j++;
	}

	return maxSum;
};
